import { WebPlugin } from '@capacitor/core';

import type {
  FacebookTrackingPlugin,
  FacebookConfiguration,
} from './definitions';

declare interface Facebook {
  init(
    options: Partial<{
      appId: string;
      autoLogAppEvents: boolean;
      xfbml: boolean;
      version: string;
    }>,
  ): void;

  api<TResponse>(path: string, callback: (response: TResponse) => void): void;
  api<TParams extends Record<string, unknown>, TResponse>(
    path: string,
    params: TParams,
    callback: (response: TResponse) => void,
  ): void;
  api<TParams extends Record<string, unknown>, TResponse>(
    path: string,
    method: 'get' | 'post' | 'delete',
    params: TParams,
    callback: (response: TResponse) => void,
  ): void;
  logEvent(handle: (response: any) => void, options: { name: string }): void;
  setAutoLogAppEventsEnabled(
    handle: (response: any) => void,
    options: { enabled: boolean },
  ): void;
  setAdvertiserTrackingEnabled(
    handle: (response: any) => void,
    options: { enabled: boolean },
  ): void;
  setAdvertiserIDCollectionEnabled(
    handle: (response: any) => void,
    options: { enabled: boolean },
  ): void;
}

declare let FB: Facebook;

declare global {
  interface Window {
    fbAsyncInit: () => void;
  }
}

export class FacebookTrackingWeb
  extends WebPlugin
  implements FacebookTrackingPlugin
{
  async initialize(options: Partial<FacebookConfiguration>): Promise<void> {
    const defaultOptions = { version: 'v17.0' };
    await this.loadScript(options.locale);
    return FB.init({ ...defaultOptions, ...options });
  }

  private loadScript(locale: string | undefined): Promise<void> {
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
    return new Promise<void>(resolve => {
      script.onload = () => resolve();
      script.defer = true;
      script.async = true;
      script.id = scriptId;
      script.src = `https://connect.facebook.net/${locale ?? 'en_US'}/sdk.js`;
      head.appendChild(script);
    });
  }

  async logEvent(): Promise<void> {
    return Promise.resolve();
  }

  async setAutoLogAppEventsEnabled(): Promise<void> {
    return Promise.resolve();
  }

  async setAdvertiserTrackingEnabled(): Promise<void> {
    return Promise.resolve();
  }

  async setAdvertiserIDCollectionEnabled(): Promise<void> {
    return Promise.resolve();
  }
}
