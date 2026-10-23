// Pure parsing only. No server call, token persistence, or invitation consumption.
export const invitationOrigin = 'https://gadgetjudge.com';
export const invitationPath = '/simplest-shopping-list/lists/';

export function invitationFromFragment(fragment) {
  if (typeof fragment !== 'string') return null;
  // Exactly 32 bytes in canonical unpadded base64url: last sextet has two zero bits.
  const match = /^#token=([A-Za-z0-9_-]{42}[AEIMQUYcgkosw048])$/.exec(fragment);
  return match ? `${invitationOrigin}${invitationPath}#token=${match[1]}` : null;
}

export function preferredStore(userAgent, touchPoints = 0) {
  if (/Android/i.test(userAgent)) return 'google';
  if (/iPhone|iPad|iPod/i.test(userAgent) || (/Macintosh/i.test(userAgent) && touchPoints > 1)) return 'apple';
  return null;
}
