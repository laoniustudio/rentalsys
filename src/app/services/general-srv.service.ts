import { Injectable } from '@angular/core';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class GeneralSrvService {

  constructor() { }
   /**
   * Def: Add or remove class on element
   * Add: element id: like #jjj .jjj
   * remove: Array off element ids
   * class name : name of the class you want to add or remove
   * */
  classToggle(add: string, remove: Array<string>, className: string) {
    $(add).addClass(className);
    for (const re of remove) {
      $(re).removeClass(className);
    }
  }
}
