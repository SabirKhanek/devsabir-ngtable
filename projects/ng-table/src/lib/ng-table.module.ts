import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common'
import { TableComponent } from "./table/table.component";
import { TableCustomColumnDirective } from "./table-directives/custom-table-column.directive";
import { TableCustomHeadDirective } from "./table-directives/custom-table-head.directive";
import { TablePaginationComponent } from "./table-pagination/table-pagination.component";

@NgModule({
  declarations: [
    TableComponent,
    TableCustomColumnDirective,
    TableCustomHeadDirective,
    TablePaginationComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent,
    TableCustomColumnDirective,
    TableCustomHeadDirective
  ]
})
export class NgTableModule { }