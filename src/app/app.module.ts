import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { InjectionToken } from '@angular/core';
export const WINDOW = new InjectionToken<Window>('Window', {
  providedIn: 'root',
  factory: () => window,
});
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
