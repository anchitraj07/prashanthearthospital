import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

function isConfigured(value: string | undefined) {
  return Boolean(value && !value.startsWith('your-') && !value.includes('your-project'));
}

export async function POST(request: Request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (parseErr) {
      // eslint-disable-next-line no-console
      console.error('Failed to parse JSON request body:', parseErr);
      return NextResponse.json({ error: 'Invalid request body. Expected JSON.' }, { status: 400 });
    }

    const { full_name, phone, email, service, preferred_date, preferred_time, message } = body;

    // eslint-disable-next-line no-console
    console.log('Appointment booking request:', { full_name, phone, service, preferred_date });

    // Validate required fields
    if (!full_name?.trim()) {
      return NextResponse.json({ error: 'Full name is required.' }, { status: 400 });
    }
    if (!phone?.trim()) {
      return NextResponse.json({ error: 'Phone number is required.' }, { status: 400 });
    }
    if (!service?.trim()) {
      return NextResponse.json({ error: 'Service selection is required.' }, { status: 400 });
    }
    if (!preferred_date) {
      return NextResponse.json({ error: 'Preferred date is required.' }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!isConfigured(supabaseUrl) || !isConfigured(supabaseServiceKey)) {
      // eslint-disable-next-line no-console
      console.error('Supabase URL or service role key is not configured.');
      return NextResponse.json(
        { error: 'Server is not configured for appointments.' },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl!, supabaseServiceKey!, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    // The browser posts to this API route; the secret key stays on the server.
    const { error } = await supabase.from('appointments').insert([
      {
        full_name: full_name.trim(),
        phone: phone.trim(),
        email: email?.trim() || null,
        service: service.trim(),
        preferred_date,
        preferred_time: preferred_time?.trim() || null,
        message: message?.trim() || null,
        appt_status: 'pending',
      },
    ]);

    if (error) {
      // eslint-disable-next-line no-console
      console.error('Supabase insert failed:', error.code, error.message);
      const isApiKeyError = /api key/i.test(error.message);
      return NextResponse.json(
        {
          error: isApiKeyError
            ? 'Appointment service is not configured correctly.'
            : `Failed to book appointment: ${error.message}`,
        },
        { status: isApiKeyError ? 500 : 400 }
      );
    }

    // eslint-disable-next-line no-console
    console.log('Appointment booked successfully.');
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    // eslint-disable-next-line no-console
    console.error('Appointment API error:', err instanceof Error ? err.message : String(err));
    const message = err instanceof Error ? err.message : 'Internal server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
