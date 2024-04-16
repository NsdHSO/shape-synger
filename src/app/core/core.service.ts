import { Injectable, signal } from '@angular/core';

@Injectable()
export class CoreService {
  public baseApp = signal('');
}
