interface DataTableBuilder {
  /**Adds a column to the data table. Columns will be added from 0 to n.

The first column is often used by charts for labels (for instance, X-axis labels on line
charts, or slice labels in pie charts). The other columns are often used for data and therefore
often require numeric values.
@param type type of data in the column (number, string, or date)
@param label label of the column (it's used for chart legends).
@return this builder, for chaining.*/ addColumn(
    type: ColumnType,
    label: string,
  ): DataTableBuilder;
  /**Adds a row to the data table.
@param values values for the row, specified in the same order that the columns are entered.
@return this builder, for chaining.*/ addRow(
    values: Object[],
  ): DataTableBuilder;
  /**Builds and returns a data table.
@return the data table*/ build(): DataTable;
  /**Sets a specific value in the table.

You may set a value before adding the column to the data table. However, unless the column
is added at some point, the value will be ignored.

Not all column values need to be filled in. Those missing will be considered `null`.
@param row the row index (the first row has index 0)
@param column the column index (the first column has index 0)
@param value the value of the table cell (should have the right type for the column).
@return this builder, for chaining*/ setValue(
    row: Integer,
    column: Integer,
    value: Object,
  ): DataTableBuilder;
}
