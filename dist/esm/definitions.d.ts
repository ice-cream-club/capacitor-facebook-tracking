export interface AccessToken {
    applicationId?: string;
    declinedPermissions?: string[];
    expires?: string;
    isExpired?: boolean;
    lastRefresh?: string;
    permissions?: string[];
    token: string;
    userId?: string;
}
export interface FacebookTrackingResponse {
    accessToken: AccessToken | null;
    recentlyGrantedPermissions?: string[];
    recentlyDeniedPermissions?: string[];
}
export interface FacebookCurrentAccessTokenResponse {
    accessToken: AccessToken | null;
}
export interface FacebookTrackingPlugin {
    initialize(options: Partial<FacebookConfiguration>): Promise<void>;
    logEvent(options: {
        name: string;
    }): Promise<void>;
    setAutoLogAppEventsEnabled(options: {
        enabled: boolean;
    }): Promise<void>;
    setAdvertiserTrackingEnabled(options: {
        enabled: boolean;
    }): Promise<void>;
    setAdvertiserIDCollectionEnabled(options: {
        enabled: boolean;
    }): Promise<void>;
}
export interface FacebookError {
    message: string;
    type: string;
    code: number;
}
export interface FacebookGetProfileResponse {
    error: FacebookError | null;
}
export interface FacebookConfiguration {
    appId: string;
    autoLogAppEvents: boolean;
    xfbml: boolean;
    version: string;
    locale: string;
}
