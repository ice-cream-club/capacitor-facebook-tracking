package club.icecream.facebooktracking;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import com.facebook.AccessToken;
import com.facebook.CallbackManager;
import com.facebook.FacebookCallback;
import com.facebook.FacebookException;
import com.facebook.FacebookRequestError;
import com.facebook.FacebookSdk;
import com.facebook.GraphRequest;
import com.facebook.GraphResponse;
import com.facebook.appevents.AppEventsLogger;
import com.facebook.login.LoginManager;
import com.facebook.login.LoginResult;
import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import java.text.SimpleDateFormat;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Set;
import java.util.TimeZone;
import org.json.JSONException;
import org.json.JSONObject;

@NativePlugin(requestCodes = { FacebookTracking.FACEBOOK_SDK_REQUEST_CODE_OFFSET })
public class FacebookTracking extends Plugin {

    CallbackManager callbackManager;

    public static final int FACEBOOK_SDK_REQUEST_CODE_OFFSET = 0xface;
    private AppEventsLogger logger;
    private String latestCallbackId;

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
