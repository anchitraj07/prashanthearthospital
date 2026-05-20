import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { isValidAdminSessionToken, ADMIN_COOKIE_NAME } from '@/lib/adminAuth';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || '',
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  }
);

async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  return isValidAdminSessionToken(token);
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json(
      { error: 'Supabase service role key is not configured.' },
      { status: 500 }
    );
  }

  const body = await request.json();
  const status = body?.status;
  const { id } = await params;

  if (!status || typeof status !== 'string') {
    return NextResponse.json({ error: 'Missing or invalid status.' }, { status: 400 });
  }

  const { error } = await supabaseAdmin
    .from('appointments')
    .update({ appt_status: status })
    .eq('id', id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
