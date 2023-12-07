var FacebookTrackingPlugin = (function (exports, core) {
    'use strict';

    const FacebookTracking = core.registerPlugin('FacebookTracking', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.FacebookTrackingWeb()),
    });

    class FacebookTrackingWeb extends core.WebPlugin {
        async initialize(options) {
            const defaultOptions = { version: 'v17.0' };
            await this.loadScript(options.locale);
            return FB.init(Object.assign(Object.assign({}, defaultOptions), options));
        }
        loadScript(locale) {
            if (typeof document === 'undefined') {
                return Promise.reject('document global not found');
            }
            const scriptId = 'fb';
            const scriptEl = document.getElementById(scriptId);
            if (scriptEl) {
                // already loaded
                return Promise.resolve();
            }
            const head = document.getElementsByTagName('head')[0];
            const script = document.createElement('script');
            return new Promise(resolve => {
                script.onload = () => resolve();
                script.defer = true;
                script.async = true;
                script.id = scriptId;
                script.src = `https://connect.facebook.net/${locale !== null && locale !== void 0 ? locale : 'en_US'}/sdk.js`;
                head.appendChild(script);
            });
        }
        async logEvent() {
            return Promise.resolve();
        }
        async setAutoLogAppEventsEnabled() {
            return Promise.resolve();
        }
        async setAdvertiserTrackingEnabled() {
            return Promise.resolve();
        }
        async setAdvertiserIDCollectionEnabled() {
            return Promise.resolve();
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        FacebookTrackingWeb: FacebookTrackingWeb
    });

    exports.FacebookTracking = FacebookTracking;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
