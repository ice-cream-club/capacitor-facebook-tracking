import Foundation
import Capacitor
import FBSDKLoginKit

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(FacebookTracking)
public class FacebookTracking: CAPPlugin {

    override public func load() {
    }

    @objc func initialize(_ call: CAPPluginCall) {
        call.resolve()
    }

    @objc func logEvent(_ call: CAPPluginCall) {
        if let name = call.getString("name") {
            AppEvents.shared.logEvent(AppEvents.Name(name))
        }

        call.resolve()
    }

    @objc func setAutoLogAppEventsEnabled(_ call: CAPPluginCall) {
        if let enabled = call.getBool("enabled") {
            Settings.shared.isAutoLogAppEventsEnabled = enabled
        } else {
            Settings.shared.isAutoLogAppEventsEnabled = false
        }
        call.resolve()
    }

    @objc func setAdvertiserTrackingEnabled(_ call: CAPPluginCall) {
        if let enabled = call.getBool("enabled") {
            Settings.shared.isAdvertiserTrackingEnabled = enabled
        } else {
            Settings.shared.isAdvertiserTrackingEnabled = false
        }
        call.resolve()
    }

    @objc func setAdvertiserIDCollectionEnabled(_ call: CAPPluginCall) {
        if let enabled = call.getBool("enabled") {
            Settings.shared.isAdvertiserIDCollectionEnabled = enabled
        } else {
            Settings.shared.isAdvertiserIDCollectionEnabled = false
        }
        call.resolve()
    }
}
