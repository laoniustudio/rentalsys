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
   /**
   * show or close loading circle style
   * */
   loadingStyleToggle(id: string = '#loading') {
     if ($(id).hasClass('qt-loader')) {
       $(id).removeClass('qt-loader qt-loader-mini qt-loader-right');
     } else {
       $(id).addClass('qt-loader qt-loader-mini qt-loader-right');
     }
   }
}
