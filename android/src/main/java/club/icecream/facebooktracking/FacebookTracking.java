package club.icecream.facebooktracking;

import android.util.Log;
import com.facebook.appevents.AppEventsLogger;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "FacebookTracking")
public class FacebookTracking extends Plugin {

    private AppEventsLogger logger;

    @Override
    public void load() {
        Log.d(getLogTag(), "Entering load()");
    }

    @PluginMethod
    public void initialize(PluginCall call) {
        call.resolve();
    }

    @PluginMethod
    public void logEvent(final PluginCall call) {
        Log.d(getLogTag(), "Entering logEvent()");
        String eventName = call.getString("eventName");
        if (eventName != null) {
            logger.logEvent(eventName);
        }
    }
}
