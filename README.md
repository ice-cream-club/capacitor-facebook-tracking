<h3 align="center">Facebook Tracking</h3>
<p align="center"><strong><code>ice-cream-club/capacitor-facebook-tracking</code></strong></p>
<p align="center">
  Capacitor community plugin for native Facebook tracking
</p>

## Dependency version

If you want to know facebook library version, you should check:

- [iOS](https://github.com/ice-cream-club/capacitor-facebook-tracking/blob/master/CapacitorCommunityFacebookTracking.podspec#L18-L19)
- [Android](https://github.com/ice-cream-club/capacitor-facebook-tracking/blob/master/android/build.gradle#L52)

### Android configuration

In file `android/app/src/main/AndroidManifest.xml`, add the following XML elements under `<manifest><application>` :

```xml
<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
<meta-data android:name="com.facebook.sdk.ClientToken" android:value="@string/facebook_client_token"/>
```

In file `android/app/src/main/res/values/strings.xml` add the following lines :

```xml
<string name="facebook_app_id">[APP_ID]</string>
<string name="facebook_client_token">[CLIENT_TOKEN]</string>
```

Don't forget to replace `[APP_ID]` and `[CLIENT_TOKEN]` by your Facebook application Id.

More information can be found here: https://developers.facebook.com/docs/android/getting-started

#### If you have trouble.

Please restart Android Studio, and do clean build.

### iOS configuration

In file `ios/App/App/AppDelegate.swift` add or replace the following:

```swift
import UIKit
import Capacitor
import FBSDKCoreKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Override point for customization after application launch.
        FBSDKCoreKit.ApplicationDelegate.shared.application(
            application,
            didFinishLaunchingWithOptions: launchOptions
        )

        return true
    }

    ...

    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {
        // Called when the app was launched with a url. Feel free to add additional processing here,
        // but if you want the App API to support tracking app url opens, make sure to keep this call
        if (FBSDKCoreKit.ApplicationDelegate.shared.application(
            app,
            open: url,
            sourceApplication: options[UIApplication.OpenURLOptionsKey.sourceApplication] as? String,
            annotation: options[UIApplication.OpenURLOptionsKey.annotation]
        )) {
            return true;
        } else {
            return ApplicationDelegateProxy.shared.application(app, open: url, options: options)
        }
    }
}
```

Add the following in the `ios/App/App/info.plist` file inside of the outermost `<dict>`:

```xml

<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>fb[APP_ID]</string>
        </array>
    </dict>
</array>
<key>FacebookAppID</key>
<string>[APP_ID]</string>
<key>FacebookClientToken</key>
<string>[CLIENT_TOKEN]</string>
<key>FacebookDisplayName</key>
<string>[APP_NAME]</string>
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>fbapi</string>
    <string>fbapi20130214</string>
    <string>fbapi20130410</string>
    <string>fbapi20130702</string>
    <string>fbapi20131010</string>
    <string>fbapi20131219</string>
    <string>fbapi20140410</string>
    <string>fbapi20140116</string>
    <string>fbapi20150313</string>
    <string>fbapi20150629</string>
    <string>fbapi20160328</string>
    <string>fbauth</string>
    <string>fb-messenger-share-api</string>
    <string>fbauth2</string>
    <string>fbshareextension</string>
</array>
```

More information can be found here: https://developers.facebook.com/docs/facebook-login/ios

### Web configuration

```typescript
import { FacebookTracking } from 'capacitor-facebook-tracking';

// use hook after platform dom ready
await FacebookTracking.initialize({ appId: '105890006170720' });
```

More information can be found here: https://developers.facebook.com/docs/facebook-login/web
And you must confirm return type at https://github.com/rdlabo/capacitor-facebook-login/blob/master/src/web.ts#L55-L57
not same type for default web facebook login!

## Example

### CurrentAccessToken

```ts
import {
  FacebookTracking,
  FacebookTrackingResponse,
} from 'capacitor-facebook-tracking';

const result = await (<FacebookTrackingResponse>(
  FacebookTracking.getCurrentAccessToken()
));

if (result.accessToken) {
  console.log(`Facebook access token is ${result.accessToken.token}`);
}
```

### getProfile

```ts
import {
  FacebookTracking,
  FacebookTrackingResponse,
} from 'capacitor-facebook-tracking';

const result = await FacebookTracking.getProfile<{
  email: string;
}>({ fields: ['email'] });

console.log(`Facebook user's email is ${result.email}`);
```

## API

<docgen-index>

* [`initialize(...)`](#initialize)
* [`logEvent(...)`](#logevent)
* [`setAutoLogAppEventsEnabled(...)`](#setautologappeventsenabled)
* [`setAdvertiserTrackingEnabled(...)`](#setadvertisertrackingenabled)
* [`setAdvertiserIDCollectionEnabled(...)`](#setadvertiseridcollectionenabled)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initialize(...)

```typescript
initialize(options: Partial<FacebookConfiguration>) => Promise<void>
```

| Param         | Type                                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#partial">Partial</a>&lt;<a href="#facebookconfiguration">FacebookConfiguration</a>&gt;</code> |

--------------------


### logEvent(...)

```typescript
logEvent(options: { name: string; }) => Promise<void>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ name: string; }</code> |

--------------------


### setAutoLogAppEventsEnabled(...)

```typescript
setAutoLogAppEventsEnabled(options: { enabled: boolean; }) => Promise<void>
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

--------------------


### setAdvertiserTrackingEnabled(...)

```typescript
setAdvertiserTrackingEnabled(options: { enabled: boolean; }) => Promise<void>
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

--------------------


### setAdvertiserIDCollectionEnabled(...)

```typescript
setAdvertiserIDCollectionEnabled(options: { enabled: boolean; }) => Promise<void>
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ enabled: boolean; }</code> |

--------------------


### Interfaces


#### FacebookConfiguration

| Prop                   | Type                 |
| ---------------------- | -------------------- |
| **`appId`**            | <code>string</code>  |
| **`autoLogAppEvents`** | <code>boolean</code> |
| **`xfbml`**            | <code>boolean</code> |
| **`version`**          | <code>string</code>  |
| **`locale`**           | <code>string</code>  |


### Type Aliases


#### Partial

Make all properties in T optional

<code>{ [P in keyof T]?: T[P]; }</code>

</docgen-api>
