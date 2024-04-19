import { inject, Injectable } from '@angular/core';

import { SupabaseService } from '../../../../core/supabase/supabase.service';

@Injectable()
export class OverviewApiService {
  /**
   * Http Instance
   */
  private readonly supabaseService = inject(SupabaseService);

  getCards = this.supabaseService.cards();
}
