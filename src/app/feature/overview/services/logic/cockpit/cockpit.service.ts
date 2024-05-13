import { inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class CockpitService {
  /**
   * Instance of toast service
   * @private
   */
  private readonly toastController = inject(ToastController);

  /**
   * Instance of Activated Route Service
   * @private
   */
  private readonly activatedRoute = inject(ActivatedRoute);
  /**
   * Instance of Nav controller from ionic
   * @private
   */
  private readonly navController = inject(NavController);

  /**
   * Instance of translate service
   * @private
   */
  private readonly translateService = inject(TranslateService);

  navigateTo(path: string | number) {
    this.navController
      .navigateRoot([path], {
        relativeTo: this.activatedRoute,
        animated: true,
        animationDirection: 'back',
      })
      .catch(async (error) => {
        if (error.code === 4002) {
          (
            await this.toastController.create({
              message: this.translateService.instant('ERRORS.NOT_FOUND'),
              duration: 5000,
              position: 'top',
              animated: true,
            })
          ).present();
        }
      });
  }
}
