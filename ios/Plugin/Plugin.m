#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(FacebookTracking, "FacebookTracking",
           CAP_PLUGIN_METHOD(initialize, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(logEvent, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setAutoLogAppEventsEnabled, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setAdvertiserTrackingEnabled, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(setAdvertiserIDCollectionEnabled, CAPPluginReturnPromise);
)
