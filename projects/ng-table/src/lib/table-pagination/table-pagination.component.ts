import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  styleUrls: ['../tailwind.scss']
})
export class TablePaginationComponent implements OnInit, OnChanges {
  @Input('dataArray') dataArray = []
  @Input('itemsPerPage') itemsPerPage = 10
  @Input('currentPage') currentPage = 1
  @Output('onPageChange') onPageChange = new EventEmitter()
  totalPages = 0

  ngOnInit() {
    this.onPageChangeHandler(this.currentPage)
  }

  ngOnChanges() {
    this.onPageChangeHandler(1)
  }

  getTotalPages() {
    this.totalPages = Math.ceil(this.dataArray.length / this.itemsPerPage)
    return this.totalPages
  }

  onPageChangeHandler(pageNum: number) {
    if (pageNum < 1 || pageNum > this.getTotalPages()) return
    this.currentPage = pageNum
    this.onPageChange.emit(this.dataArray.slice((this.currentPage - 1) * this.itemsPerPage, Math.min(this.currentPage * this.itemsPerPage, this.dataArray.length)))
  }

  getTotalPageRange() {
    return Array(this.getTotalPages()).fill(0).map((x, i) => i + 1)
  }

  getPaginationRange() {
    const range = this.getTotalPageRange()
    if (range.length <= 5) return range
    if (this.currentPage <= 5) return range.slice(0, 5)
    return range.slice(this.currentPage - 1 - 2, this.currentPage - 1 + 2 + 1)
  }
}
