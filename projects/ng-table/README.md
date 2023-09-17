# NgTable

NgTable is an Angular library for rendering reusable tables with customizable headers and column templates.

## Installation

To use NgTable in your Angular project, follow these steps:

1. Install the NgTable module using npm or yarn:

   ```shell
   npm install @devsabir/ngtable
   ```

   or

   ```shell
   yarn add @devsabir/ngtable
   ```

2. Import the `NgTableModule` in your `AppModule`:

   ```typescript
   import { NgTableModule } from 'NgTable';

   @NgModule({
     declarations: [
       // ...
     ],
     imports: [
       BrowserModule,
       NgTableModule
     ],
     // ...
   })
   export class AppModule { }
   ```

## Usage

### Define Table Header

In your component, define the table header definition as an array of `TableDataHeader` objects:

```typescript
import { TableDataHeader } from 'NgTable';

@Component({
  // ...
})
export class AppComponent {
  tableHeaderDefinition: TableDataHeader[] = [
    { columnId: 'movie_title', columnAlias: 'Title', colspan: '50%' },
    { columnId: 'movie_ratings', columnAlias: 'Ratings' },
    { columnId: 'delete', columnAlias: 'Delete', colspan: '80px' }
  ];

  // ...
}
```

### Define Data Source

Define your data source that corresponds to the table columns in your component:

```typescript
interface Movie {
  movie_title: string;
  movie_ratings: number;
}

@Component({
  // ...
})
export class AppComponent {
  // ...
  tableData: Movie[] = MOVIE_DATA;
}
```

### Render the Table

In your component template, use the `ng-table` selector to render the table:

```html
<ng-table [dataHeadersDef]="tableHeaderDefinition" headColor="grey" [dataSource]="tableData" [pageSize]="5"
  [pagination]="true">

</ng-table>
```

### Custom Templates

You can provide custom templates for headers and columns by using `ng-template` elements with the `appTableCustomHead` and `appTableCustomColumn` directives. The `appTableCustomColumn` directive allows you to define custom templates for individual table columns. When using this directive, it's important to understand how the `let-item` variable is passed based on the presence of the column property in both the `tableHeaderDefinition` and `tableData`. For example:

```html
<app-table [dataHeadersDef]="tableHeaderDefinition" headColor="grey" [dataSource]="tableData" [pageSize]="5"
  [pagination]="true">

  <!-- In case you need custom markups -->
  <!-- e.g., red colored and centered Delete Column Header (pass id defined in HeaderDef) -->
  <ng-template appTableCustomHead="delete" let-item>
    <span class="text-red-500 text-center block w-full">{{ item }}</span>
  </ng-template>

  <!-- Custom column cells. e.g., delete button markup -->
  <ng-template appTableCustomColumn="delete" let-item>
    <button
      class="px-3 py-1 bg-transparent text-black hover:bg-red-400 hover:text-white border border-black rounded">
      Delete
    </button>
  </ng-template>

  <!-- Custom bold movie_title -->
  <ng-template  appTableCustomColumn="movie_title" let-item>
    <span class="font-semibold">{{item}}</span>
  </ng-template>

</app-table>
```

In this example, we have defined custom templates for two columns: `movie_title` and `delete`. We didn't defined `movie_ratings` custom template because we didn't needed that at all so that's why we left that to default.

### Behavior

1. **Column in Both Header Definition and Data Source:**

   When a column is defined in both the `tableHeaderDefinition` and `tableData`, the `let-item` variable will contain the value of that specific column from the data source. For example, the `movie_title` column in the `tableData` will have its value passed to `let-item` in the `movie_title` custom template.

   ```html
   <!-- Custom movie_title -->
   <ng-template  appTableCustomColumn="movie_title" let-item>
    <span class="font-semibold">{{item}}</span>
   </ng-template>
   ```

2. **Column in Header Definition But Not in Data Source:**

   When a column is defined in the `tableHeaderDefinition` but not present in the `tableData`, the `let-item` variable will contain the entire data object for the current row. This behavior allows you to access other properties of the row for custom handling, such as the `delete` button example.

   ```html
   <!-- Custom delete button -->
   <ng-template appTableCustomColumn="delete" let-item>
     <button (click)="onDelete(item)"
       class="px-3 py-1 bg-transparent text-black hover:bg-red-400 hover:text-white border border-black rounded">
       Delete
     </button>
   </ng-template>
   ```

By understanding this behavior, you can effectively create custom column templates that either display the column value or perform actions based on the entire row's data, depending on your specific use case.

### Example

Here's a quick example of NgTable in action:

![NgTable Example](https://i.ibb.co/TvPNGbx/NgTable.gif)

#### Dark Table
to use a table with darkHeader set 
```<ng-table headColor="dark"></ng-table>```

![NgTable Dark Example](https://i.ibb.co/txtt76t/Ng-Table-Dark.gif)

## License

This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
