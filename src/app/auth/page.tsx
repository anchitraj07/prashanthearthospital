import Link from 'next/link';

export default function AuthRootPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-10">
      <div className="w-full max-w-lg bg-white rounded-3xl p-10 shadow-xl">
        <h1 className="text-3xl font-semibold text-slate-900 mb-6">Welcome back</h1>
        <p className="text-slate-600 mb-8">Choose how you want to continue with your patient account.</p>

        <div className="grid gap-6 sm:grid-cols-2">
          <Link
            href="/auth/login"
            className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-8 text-center transition hover:border-slate-300"
          >
            <p className="text-lg font-semibold text-slate-900 mb-2">Sign in</p>
            <p className="text-sm text-slate-500">Access your appointment history and profile.</p>
          </Link>
          <Link
            href="/auth/register"
            className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-8 text-center transition hover:border-slate-300"
          >
            <p className="text-lg font-semibold text-slate-900 mb-2">Register</p>
            <p className="text-sm text-slate-500">Create a new patient account with secure authentication.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
