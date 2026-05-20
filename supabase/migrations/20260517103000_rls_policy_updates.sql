-- Prashant Heart Hospital - Supabase RLS policy updates
-- Migration: 20260517103000_rls_policy_updates.sql

-- Ensure RLS remains enabled for appointments.
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Public appointment booking should only allow new records and should not allow clients to set sensitive row fields.
DROP POLICY IF EXISTS public_can_insert_appointments ON public.appointments;
CREATE POLICY public_can_insert_appointments
  ON public.appointments
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    auth.role() IN ('anon', 'authenticated')
    AND appt_status = 'pending'
    AND nullif(trim(full_name), '') IS NOT NULL
    AND nullif(trim(phone), '') IS NOT NULL
    AND nullif(trim(service), '') IS NOT NULL
    AND preferred_date IS NOT NULL
  );

-- The booking API intentionally omits id, created_at, and appt_status.
-- Column-level grants keep public clients from setting those fields directly.
REVOKE INSERT ON public.appointments FROM anon, authenticated;
GRANT INSERT (full_name, phone, email, service, preferred_date, preferred_time, message)
  ON public.appointments
  TO anon, authenticated;

-- Remove all direct client-side SELECT/UPDATE/DELETE access to appointments.
DROP POLICY IF EXISTS authenticated_can_read_appointments ON public.appointments;
DROP POLICY IF EXISTS authenticated_can_update_appointments ON public.appointments;
DROP POLICY IF EXISTS authenticated_can_delete_appointments ON public.appointments;

-- Optional: keep an open policy for authenticated users to insert appointments too (future use).
DROP POLICY IF EXISTS authenticated_can_insert_appointments ON public.appointments;
CREATE POLICY authenticated_can_insert_appointments
  ON public.appointments
  FOR INSERT
  TO authenticated
  WITH CHECK (
    appt_status = 'pending'
    AND nullif(trim(full_name), '') IS NOT NULL
    AND nullif(trim(phone), '') IS NOT NULL
    AND nullif(trim(service), '') IS NOT NULL
    AND preferred_date IS NOT NULL
  );

-- Note: admin server routes use the Supabase service role key, which bypasses RLS and provides safe back-end access.
