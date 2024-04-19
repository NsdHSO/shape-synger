import { Injectable } from '@angular/core';
import {
  AuthSession,
  createClient,
  SupabaseClient,
} from '@supabase/supabase-js';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  _session: AuthSession | null = null;
  cardsUI: any;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey,
    );
  }

  async cards() {
    return (this.cardsUI = await this.supabase
      .from('card')
      .select()
      .then((supaBaseCardsAnswer) => {
        const cards = supaBaseCardsAnswer.data as { category: string }[]; // Array of card objects
        return this.retrieveAllCardsAndPutIntoNewFormat(cards);
      }));
  }

  /** Filter after category code and return into new format {title,cards}
   *
   * @param cards
   */
  retrieveAllCardsAndPutIntoNewFormat(cards: { category: string }[]) {
    // Filter cards based on title
    const employeeCards = cards.filter(
      (card) => card.category.toUpperCase() === 'Employee'.toUpperCase(),
    );
    const businessCards = cards.filter(
      (card) => card.category.toUpperCase() === 'Business'.toUpperCase(),
    );
    const operationsCards = cards.filter(
      (card) => card.category.toUpperCase() === 'Operations'.toUpperCase(),
    );
    // returned only if length is grater than 0
    return [
      ...(employeeCards.length
        ? [
            {
              title: 'OVERVIEW_Employee'.toUpperCase(),
              cards: employeeCards,
            },
          ]
        : []),
      ...(businessCards.length
        ? [
            {
              title: 'OVERVIEW_Business'.toUpperCase(),
              cards: businessCards,
            },
          ]
        : []),
      ...(operationsCards.length
        ? [
            {
              title: 'OVERVIEW_Operations'.toUpperCase(),
              cards: operationsCards,
            },
          ]
        : []),
    ];
  }
}
