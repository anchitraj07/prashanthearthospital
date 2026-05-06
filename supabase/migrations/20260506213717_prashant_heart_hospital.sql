-- Prashant Heart Hospital - Appointments Schema
-- Migration: 20260506213717_prashant_heart_hospital.sql

-- ============================================================
-- 1. APPOINTMENTS TABLE
-- ============================================================
CREATE TABLE IF NOT EXISTS public.appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  service TEXT NOT NULL,
  preferred_date DATE NOT NULL,
  preferred_time TEXT,
  message TEXT,
  appt_status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- 2. INDEXES
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_appointments_created_at ON public.appointments(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_appointments_appt_status ON public.appointments(appt_status);
CREATE INDEX IF NOT EXISTS idx_appointments_preferred_date ON public.appointments(preferred_date);

-- ============================================================
-- 3. ENABLE RLS
-- ============================================================
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- 4. RLS POLICIES
-- ============================================================

-- Allow anyone (public) to insert appointments (booking form is public)
DROP POLICY IF EXISTS "public_can_insert_appointments" ON public.appointments;
CREATE POLICY "public_can_insert_appointments"
  ON public.appointments
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow authenticated users (admin) to read all appointments
DROP POLICY IF EXISTS "authenticated_can_read_appointments" ON public.appointments;
CREATE POLICY "authenticated_can_read_appointments"
  ON public.appointments
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow authenticated users (admin) to update appointment status
DROP POLICY IF EXISTS "authenticated_can_update_appointments" ON public.appointments;
CREATE POLICY "authenticated_can_update_appointments"
  ON public.appointments
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow authenticated users (admin) to delete appointments
DROP POLICY IF EXISTS "authenticated_can_delete_appointments" ON public.appointments;
CREATE POLICY "authenticated_can_delete_appointments"
  ON public.appointments
  FOR DELETE
  TO authenticated
  USING (true);

-- ============================================================
-- 5. SAMPLE APPOINTMENTS (Mock Data)
-- ============================================================
DO $$
BEGIN
  INSERT INTO public.appointments (full_name, phone, email, service, preferred_date, preferred_time, message, appt_status, created_at)
  VALUES
    ('Ranjit Kumar', '+91 98765 43210', 'ranjit@example.com', 'General Cardiac Consultation', CURRENT_DATE + 1, '9:00 AM - 11:00 AM', 'Chest pain for last 2 days', 'pending', now() - interval '2 hours'),
    ('Sunita Devi', '+91 87654 32109', 'sunita@example.com', 'Angiography', CURRENT_DATE + 2, '11:00 AM - 1:00 PM', 'Referred by Dr. Sharma', 'confirmed', now() - interval '1 day'),
    ('Rajesh Kumar', '+91 76543 21098', '', '2D Echo / Stress Echo', CURRENT_DATE + 3, '2:00 PM - 4:00 PM', 'Follow-up after angioplasty', 'pending', now() - interval '3 hours'),
    ('Bhupendra Mishra', '+91 65432 10987', 'bhupendra@example.com', 'TMT - Treadmill Test', CURRENT_DATE, '4:00 PM - 6:00 PM', 'Shortness of breath during exercise', 'confirmed', now() - interval '2 days'),
    ('Priya Singh', '+91 54321 09876', 'priya@example.com', 'Holter Monitoring', CURRENT_DATE - 1, '9:00 AM - 11:00 AM', 'Irregular heartbeat episodes', 'cancelled', now() - interval '4 days')
  ON CONFLICT (id) DO NOTHING;
EXCEPTION
  WHEN OTHERS THEN
    RAISE NOTICE 'Mock data insertion skipped: %', SQLERRM;
END $$;
