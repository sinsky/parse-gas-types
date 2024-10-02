interface DataTableSource {
  /**Return the data inside this object as a DataTable.

```
// Opens the spreadsheet file by its ID. If you created your script from a Google Sheets file,
// use SpreadsheetApp.getActiveSpreadsheet().
// TODO(developer): Replace the ID with your own.
const ss = SpreadsheetApp.openById('abc123456');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1:B7 on Sheet1.
const range = sheet.getRange('A1:B7');

// Gets the range A1:B7 as a data table. The values in each column must be of the same type.
const datatable = range.getDataTable();

// Uses the Charts service to build a bar chart from the data table.
// This doesn't build an embedded chart. To do that, use sheet.newChart().addRange() instead.
const chart = Charts.newBarChart()
                  .setDataTable(datatable)
                  .setOption('title', 'Your Chart Title Here')
                  .build();
```
@return the data as a datatable.*/ getDataTable(): DataTable;
}
