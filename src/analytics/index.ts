import { useEffect } from 'react';
import { useRouter } from 'next/router';
// import { hotjar } from 'react-hotjar';

export default function AnalyticsReporter(): null {
  const { pathname } = useRouter();

  type CustomWindow = Window & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // hotjar.stateChange(pathname.pathname);
    (window as unknown as CustomWindow).gtag(
      'config',
      String(process.env.REACT_APP_GOOGLE_ANALYTICS_ID),
      {
        page_title: pathname,
        page_path: pathname
      }
    );
  }, [pathname]);
  return null;
}
