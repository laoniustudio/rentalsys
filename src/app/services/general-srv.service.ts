import { Injectable } from '@angular/core';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class GeneralSrvService {

  constructor() { }
   /**
   * Def: on selection switch between element's select css style
   * element: class tags to identify element
   * classAdd: class style to add
   * classRemove : class style to remove
   * */
   selectStyleSwitch(element: string, classAdd: string, classRemove: string) {
     $(element).click(function() {
        $(element).removeClass(classRemove);
        $(this).addClass(classAdd);
      });
   }
}
