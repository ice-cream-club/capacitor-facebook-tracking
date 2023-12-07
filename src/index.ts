import { registerPlugin } from '@capacitor/core';

import type { FacebookTrackingPlugin } from './definitions';

const FacebookTracking = registerPlugin<FacebookTrackingPlugin>(
  'FacebookTracking',
  {
    web: () => import('./web').then(m => new m.FacebookTrackingWeb()),
  },
);

export * from './definitions';
export { FacebookTracking };
