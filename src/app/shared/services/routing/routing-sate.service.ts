import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class RoutingSateService {

  static paths = {
    overview: "overview",
    tabs: "tabs"
  };

  constructor() {
  }
}
