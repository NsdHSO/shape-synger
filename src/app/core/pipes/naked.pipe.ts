import { inject, Pipe, PipeTransform } from '@angular/core';

import { CoreService } from '../core.service';

@Pipe({
  name: 'naked',
  standalone: true,
})
export class NakedPipe implements PipeTransform {
  private readonly core = inject(CoreService);

  transform(value: unknown): unknown {
    return this.core.baseApp() + '_' + value;
  }
}
