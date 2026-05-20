import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AdminDashboardClient from './AdminDashboardClient';
import { isValidAdminSessionToken, ADMIN_COOKIE_NAME } from '@/lib/adminAuth';

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;

  if (!isValidAdminSessionToken(token)) {
    redirect('/admin/login');
  }

  return <AdminDashboardClient />;
}
