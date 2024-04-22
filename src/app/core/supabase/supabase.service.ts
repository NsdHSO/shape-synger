import { Injectable } from '@angular/core';
import {
  AuthSession,
  createClient,
  SupabaseClient,
} from '@supabase/supabase-js';

import { car } from 'ionicons/icons';

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
    let employeeCards;
    let businessCards;
    let operationsCards;
    const categories = new Set();
    cards.forEach((card) => {
      categories.add(card.category);
    });
    categories.forEach((catetegories) => {
      if (catetegories === 'Employee') {
        employeeCards = cards.filter(
          (card) => card.category.toUpperCase() === catetegories.toUpperCase(),
        );
      }
      if (catetegories === 'Business') {
        businessCards = cards.filter(
          (card) => card.category.toUpperCase() === catetegories.toUpperCase(),
        );
      }
      if (catetegories === 'Operations') {
        operationsCards = cards.filter(
          (card) => card.category.toUpperCase() === catetegories.toUpperCase(),
        );
      }
    });
    // returned only if length is grater than 0
    return [
      ...(employeeCards
        ? [
            {
              title: 'OVERVIEW_Employee'.toUpperCase(),
              cards: employeeCards,
            },
          ]
        : []),
      ...(businessCards
        ? [
            {
              title: 'OVERVIEW_Business'.toUpperCase(),
              cards: businessCards,
            },
          ]
        : []),
      ...(operationsCards
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
