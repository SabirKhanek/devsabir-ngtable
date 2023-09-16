import { Directive, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appTableCustomHead]'
})
export class TableCustomHeadDirective {
  @Input('appTableCustomHead') headName: string = '';
  constructor(public readonly template: TemplateRef<any>) { }
}
