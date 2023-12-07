import { WebPlugin } from '@capacitor/core';
import type { FacebookTrackingPlugin, FacebookConfiguration } from './definitions';
declare global {
    interface Window {
        fbAsyncInit: () => void;
    }
}
export declare class FacebookTrackingWeb extends WebPlugin implements FacebookTrackingPlugin {
    initialize(options: Partial<FacebookConfiguration>): Promise<void>;
    private loadScript;
    logEvent(): Promise<void>;
    setAutoLogAppEventsEnabled(): Promise<void>;
    setAdvertiserTrackingEnabled(): Promise<void>;
    setAdvertiserIDCollectionEnabled(): Promise<void>;
}
