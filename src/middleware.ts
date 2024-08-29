import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'vi' ,'en2','vi2'],
 
  // Used when no locale matches
  defaultLocale: 'vi'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(vi|en|vi2|en2)/:path*']
};