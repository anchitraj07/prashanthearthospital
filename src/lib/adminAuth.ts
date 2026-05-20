import { createHmac, timingSafeEqual } from 'crypto';

const ADMIN_SESSION_COOKIE_NAME = 'phh_admin_session';
const ADMIN_SESSION_PAYLOAD = 'prashant-heart-hospital-admin-session';

const getAdminSessionSecret = () => process.env.ADMIN_SESSION_SECRET || '';

export function generateAdminSessionToken() {
  const secret = getAdminSessionSecret();
  if (!secret) return null;
  return createHmac('sha256', secret).update(ADMIN_SESSION_PAYLOAD).digest('hex');
}

export function isValidAdminSessionToken(token?: string) {
  const secret = getAdminSessionSecret();
  if (!secret || !token) return false;

  const expected = createHmac('sha256', secret).update(ADMIN_SESSION_PAYLOAD).digest();
  const actual = Buffer.from(token, 'hex');

  if (actual.length !== expected.length) return false;
  return timingSafeEqual(actual, expected);
}

export const ADMIN_COOKIE_NAME = ADMIN_SESSION_COOKIE_NAME;
