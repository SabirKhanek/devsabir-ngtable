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

You can provide custom templates for headers and columns by using `ng-template` elements with the `appTableCustomHead` and `appTableCustomColumn` directives. For example:

```html
<ng-table [dataHeadersDef]="tableHeaderDefinition" headColor="grey" [dataSource]="tableData" [pageSize]="5"
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

</ng-table>
```

### Example

Here's a quick example of NgTable in action:

![NgTable Example](https://i.ibb.co/TvPNGbx/NgTable.gif)

#### Dark Table
to use a table with darkHeader set 
```<ng-table headColor="dark"></ng-table>```

![NgTable Dark Example](https://i.ibb.co/txtt76t/Ng-Table-Dark.gif)

## License

This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.