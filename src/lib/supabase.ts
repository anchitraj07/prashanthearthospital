import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Appointment {
  id?: string;
  full_name: string;
  phone: string;
  email?: string;
  service: string;
  preferred_date: string;
  preferred_time?: string;
  message?: string;
  appt_status?: string;
  created_at?: string;
}
