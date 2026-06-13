'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Admin panel URL - visitor data is sent here
const ADMIN_API = 'http://localhost:3001/api/visitors';

export default function VisitorTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Generate or retrieve persistent visitorId
    let visitorId = localStorage.getItem('visitorId');
    if (!visitorId) {
      visitorId = crypto.randomUUID();
      localStorage.setItem('visitorId', visitorId);
    }

    // Small delay to avoid tracking bots that leave immediately
    const timer = setTimeout(() => {
      fetch(ADMIN_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          visitorId,
          page: pathname,
          referrer: document.referrer || '',
        }),
      }).catch(() => {
        // Silent fail — tracking shouldn't break the site
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null; // Invisible component
}
