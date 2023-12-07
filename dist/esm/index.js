import { registerPlugin } from '@capacitor/core';
const FacebookTracking = registerPlugin('FacebookTracking', {
    web: () => import('./web').then(m => new m.FacebookTrackingWeb()),
});
export * from './definitions';
export { FacebookTracking };
//# sourceMappingURL=index.js.map