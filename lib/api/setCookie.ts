import type { CookieSerializeOptions } from 'cookie';
import { serialize } from 'cookie';
import { NextApiResponse } from 'next';

export function setCookie(
  res: NextApiResponse,
  name: string,
  value: string,
  options: CookieSerializeOptions = {},
) {
  const stringValue = typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value);

  if ('maxAge' in options && options.maxAge) {
    options.expires = new Date(Date.now() + options.maxAge);
    options.maxAge /= 1000;
  }

  res.setHeader('Set-Cookie', serialize(name, String(stringValue), options));
}
