import { Directive, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appTableCustomColumn]'
})
export class TableCustomColumnDirective {
  @Input('appTableCustomColumn') columnName: string = '';
  constructor(public readonly template: TemplateRef<any>) { }
}
