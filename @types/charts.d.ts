interface Charts{
/**An enumeration of how hidden dimensions in a source are expressed in a chart.*/ChartHiddenDimensionStrategy:Charts._ChartHiddenDimensionStrategy;
/**An enumeration of how multiple ranges in the source are expressed in a chart.*/ChartMergeStrategy:Charts._ChartMergeStrategy;
/**An enumeration of chart types supported by the Charts service.*/ChartType:Charts._ChartType;
/**An enumeration of the valid data types for columns in a [`DataTable`](https://developers.google.com/apps-script/reference/charts/data-table.html).*/ColumnType:_ColumnType;
/**An enumeration of the styles for curves in a chart.*/CurveStyle:Charts._CurveStyle;
/**An enumeration of the styles of points in a line.*/PointStyle:Charts._PointStyle;
/**An enumeration of legend positions within a chart.*/Position:Charts._Position;
/**Starts building an area chart, as described in the [Google Chart
Tools](https://developers.google.com/chart/interactive/docs/gallery/areachart) documentation.
@return An AreaChartBuilder, which can be used to build an area chart.*/newAreaChart():Charts.AreaChartBuilder;
/**Starts building a bar chart, as described in the [Google Chart
Tools](https://developers.google.com/chart/interactive/docs/gallery/barchart) documentation.
@return A BarChartBuilder, which can be used to build a bar chart.*/newBarChart():Charts.BarChartBuilder;
/**Starts building a column chart, as described in the [Google Chart
Tools](https://developers.google.com/chart/interactive/docs/gallery/columnchart) documentation.
@return A ColumnChartBuilder, which can be used to build a column chart.*/newColumnChart():Charts.ColumnChartBuilder;
/**Creates an empty data table, which can have its values set manually.

Data tables hold the data for all chart types.
@return A DataTableBuilder, which can hold data for charts.*/newDataTable():DataTableBuilder;
/**Creates a new data view definition.

Use setters to define the different properties of the data view.
@return A DataViewDefinitionBuilder, which can be used to build a data view definition.*/newDataViewDefinition():Charts.DataViewDefinitionBuilder;
/**Starts building a line chart, as described in the [Google Chart
Tools](https://developers.google.com/chart/interactive/docs/gallery/linechart) documentation.
@return A LineChartBuilder, which can be used to build a line chart.*/newLineChart():Charts.LineChartBuilder;
/**Starts building a pie chart, as described in the [Google Chart
Tools](https://developers.google.com/chart/interactive/docs/gallery/piechart) documentation.
@return A PieChartBuilder, which can be used to build a pie chart.*/newPieChart():Charts.PieChartBuilder;
/**Starts building a scatter chart, as described in the [Google Chart
Tools](https://developers.google.com/chart/interactive/docs/gallery/scatterchart) documentation.
@return A ScatterChartBuilder, which can be used to build a scatter chart.*/newScatterChart():Charts.ScatterChartBuilder;
/**Starts building a table chart, as described in the [Google Chart
Tools](https://developers.google.com/chart/interactive/docs/gallery/table) documentation.
@return A TableChartBuilder, which can be used to build a table chart.*/newTableChart():Charts.TableChartBuilder;
/**Creates a new text style builder.

To change the default values, use the setter functions.
@return A TextStyleBuilder, which can be used to build a text style configuration object.*/newTextStyle():Charts.TextStyleBuilder;}module Charts{interface TextStyleBuilder{
/**Builds and returns a text style configuration object that was built using this builder.

```
// Creates a new text style that uses 26-point blue font.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
```
@return A text style object built using this builder.*/build():Charts.TextStyle;
/**Sets the color of the text style.

```
// Creates a new text style that uses blue font.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF');
var style = textStyleBuilder.build();
```
@param cssValue The CSS value for the color (such as `"blue"` or `"#00f"`).
@return This builder, useful for chaining.*/setColor(cssValue:string):Charts.TextStyleBuilder;
/**Sets the font name of the text style

```
// Creates a new text style that uses Ariel font.
var textStyleBuilder = Charts.newTextStyle().setFontName('Ariel');
var style = textStyleBuilder.build();
```
@param fontName The font name to use for the text style.
@return This builder, useful for chaining.*/setFontName(fontName:string):Charts.TextStyleBuilder;
/**Sets the font size of the text style.

```
// Creates a new text style that uses 26-point font.
var textStyleBuilder = Charts.newTextStyle().setFontSize(26);
var style = textStyleBuilder.build();
```
@param fontSize The font size in pixels to use for the text style.
@return This builder, useful for chaining.*/setFontSize(fontSize:number):Charts.TextStyleBuilder;}interface TextStyle{
/**Gets the color of the text style.

```
// Creates a new text style that uses blue text and logs the color.
var textStyle = Charts.newTextStyle().setColor('blue').build();
Logger.log(textStyle.getColor());
```
@return The CSS value for the color (such as `"blue"` or `"#00f"`).*/getColor():string;
/**Gets the font name of the text style.

```
// Creates a new text style that uses Ariel font and logs the font name.
var textStyle = Charts.newTextStyle().setFontName('Ariel').build();
Logger.log(textStyle.getFontName());
```
@return The font name.*/getFontName():string;
/**Gets the font size of the text style.

```
// Creates a new text style that uses 18 pixel font size and logs the font size.
var textStyle = Charts.newTextStyle().setFontSize(18).build();
Logger.log(textStyle.getFontSize());
```
@return The font size in pixels.*/getFontSize():number;}interface TableChartBuilder{
/**Builds the chart.
@return A Chart object, which can be embedded into documents, UI elements, or used as a static
    image.*/build():Charts.Chart;
/**Sets whether to enable paging through the data.

The default behavior is paging disabled. If paging is enabled the default page size is 10.
@param enablePaging `true` if paging should be enabled, `false` otherwise.
@return This builder, useful for chaining.*/enablePaging(enablePaging:boolean):Charts.TableChartBuilder;
/**Enables paging and sets the number of rows in each page.

The default page size is 10.

```
// Creates a table chart builder and enables paging with page size of 5.
var builder = Charts.newTableChart();
builder.enablePaging(5);
```
@param pageSize The number of rows in each page of the table.
@return This builder, useful for chaining.*/enablePaging(pageSize:Integer):Charts.TableChartBuilder;
/**Enables paging, sets the number of rows in each page and the first table page to display (page
numbers are zero based).

The default page size is 10, and the default start page is 0.

```
// Creates a table chart builder and enables paging with page size of 5 and displays page 2
// first.
var builder = Charts.newTableChart();
builder.enablePaging(5, 2);
```
@param pageSize The number of rows in each page of the table.
@param startPage The first table page to display (page numbers are zero-based).
@return This builder, useful for chaining.*/enablePaging(pageSize:Integer,startPage:Integer):Charts.TableChartBuilder;
/**Adds basic support for right-to-left languages (such as Arabic or Hebrew) by reversing the
column order of the table, so that column zero is the right-most column, and the last column is
the left-most column.

This does not affect the column index in the underlying data, only the order of display.
Full bi-directional (BiDi) language display is not supported by the table visualization even
with this option. This option is ignored if you enable paging (using the page option), or if
the table has scroll bars because you have specified height and width options smaller than the
required table size. The default behavior is RTL support disabled.
@param rtlEnabled `true` if right-to-left support should be enabled, `false`
    otherwise.
@return This builder, useful for chaining.*/enableRtlTable(rtlEnabled:boolean):Charts.TableChartBuilder;
/**Sets whether to sort columns when the user clicks a column heading.

If sorting is enabled, when users click on the column header the rows are automatically
sorted. The default behavior is sorting enabled.
@param enableSorting `true` to enable sorting by clicking on column headers, `false` otherwise.
@return This builder, useful for chaining.*/enableSorting(enableSorting:boolean):Charts.TableChartBuilder;
/**Sets the data source URL that is used to pull data in from an external source, such as Google
Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.

For more information about querying data sources, check out the [Google Charts documentation](/chart/interactive/docs/queries).
@param url The data source URL, including any query parameters.
@return This builder, useful for chaining.*/setDataSourceUrl(url:string):Charts.TableChartBuilder;
/**Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
for setting the data table without needing to call `build()`.
@param tableBuilder A data table builder. A new data table is created instantly as part of this
    call, so any further updates to the builder won't be reflected in the chart.
@return This builder, useful for chaining.*/setDataTable(tableBuilder:DataTableBuilder):Charts.TableChartBuilder;
/**Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
first column should be a string, and contain the horizontal axis labels. Any number of columns
can follow, all must be numeric. Each column is displayed as a separate line.
@param table The data table to use for the chart.
@return This builder, useful for chaining.*/setDataTable(table:DataTableSource):Charts.TableChartBuilder;
/**Sets the data view definition to use for the chart.
@param dataViewDefinition A data view definition object that defines the view that should be
    derived from the given data source for the chart drawing.
@return This builder, useful for chaining.*/setDataViewDefinition(dataViewDefinition:Charts.DataViewDefinition):Charts.TableChartBuilder;
/**Sets the dimensions for the chart.
@param width The width of the chart, in pixels.
@param height The height of the chart, in pixels.
@return This builder, useful for chaining.*/setDimensions(width:Integer,height:Integer):Charts.TableChartBuilder;
/**Sets the row number for the first row in the data table.

The default row number of the first row is 1.

```
// Creates a table chart builder and sets the first row to be 2.
var builder = Charts.newTableChart();
builder.setFirstRowNumber(2);
```
@param number The row number for the first row in the data table.
@return This builder, useful for chaining.*/setFirstRowNumber(number:Integer):Charts.TableChartBuilder;
/**Sets the index of the column according to which the table should be initially sorted
(ascending).

The column os sorted in ascending order and is marked with a small arrow indicating that.

```
// Creates a table chart builder and sorts it by the second column (ascending).
var builder = Charts.newTableChart();
builder.setInitialSortingAscending(2);
```
@param column The number of the column according to which the table should be initially sorted.
@return This builder, useful for chaining.*/setInitialSortingAscending(column:Integer):Charts.TableChartBuilder;
/**Sets the index of the column according to which the table should be initially sorted
(descending).

The column os sorted in descending order and is marked with a a small arrow indicating that.

```
// Creates a table chart builder and sorts it by the second column (descending).
var builder = Charts.newTableChart();
builder.setInitialSortingDescending(2);
```
@param column The number of the column according to which the table should be initially sorted.
@return This builder, useful for chaining.*/setInitialSortingDescending(column:Integer):Charts.TableChartBuilder;
/**Sets advanced options for this chart. See [the available options for
this chart](/chart/interactive/docs/gallery/table). This method has no effect if the given option is invalid.

```
// Build a table chart which renders HTML.
var builder = Charts.newTableChart();
builder.setOption('allowHtml', {@code true});
var chart = builder.build();
```
@param option The option to set.
@param value The value to set.
@return This builder, useful for chaining.*/setOption(option:string,value:Object):Charts.TableChartBuilder;
/**Sets whether to show the row number as the first column of the table.

The default behavior is not showing row numbers.
@param showRowNumber `true` if the first column of the table should show the row number,
    `false` otherwise.
@return This builder, useful for chaining.*/showRowNumberColumn(showRowNumber:boolean):Charts.TableChartBuilder;
/**Sets whether alternating color style is assigned to odd and even rows of a table chart.

The default behavior is the rows having alternating color style.
@param alternate `true` if color styles should be alternating, `false` otherwise.
@return This builder, useful for chaining.*/useAlternatingRowStyle(alternate:boolean):Charts.TableChartBuilder;}interface StringFilterBuilder{
/**Sets whether matching should be case sensitive or not.

```
// Builds a case insensitive string filter to filter column "Col1".
var stringFilter = Charts.newStringFilter()
  .setFilterColumnLabel("Col1")
  .setCaseSensitive(false)
  .build();
```
@param caseSensitive If `true`, enables string matching case sensitivity.
@return This builder, useful for chaining.*/setCaseSensitive(caseSensitive:boolean):Charts.StringFilterBuilder;
/**Sets whether the control should match exact values only ([`MatchType.EXACT`](https://developers.google.com/apps-script/reference/charts/match-type.html#EXACT)), prefixes
starting from the beginning of the value ([`MatchType.PREFIX`](https://developers.google.com/apps-script/reference/charts/match-type.html#PREFIX)), or any substring
([`MatchType.ANY`](https://developers.google.com/apps-script/reference/charts/match-type.html#ANY)).

```
// Builds a string filter to filter column "Col1" matching the prefix.
var stringFilter = Charts.newStringFilter()
  .setFilterColumnLabel("Col1")
  .setMatchType(Charts.MatchType.PREFIX)
  .build();
```
@param matchType The string matching type.
@return This builder, useful for chaining.*/setMatchType(matchType:Charts.MatchType):Charts.StringFilterBuilder;
/**Sets whether the control should match any time a key is pressed or only when the input field
'changes' (loss of focus or pressing the Enter key).

```
// Builds a string filter to filter column "Col1" that checks the match any time a key is
// pressed.
var stringFilter = Charts.newStringFilter()
  .setFilterColumnLabel("Col1")
  .setRealtimeTrigger(true)
  .build();
```
@param realtimeTrigger If `true`, sets events to be triggered at real time (when a key is
    pressed).
@return This builder, useful for chaining.*/setRealtimeTrigger(realtimeTrigger:boolean):Charts.StringFilterBuilder;}interface ScatterChartBuilder{
/**Builds the chart.
@return A Chart object, which can be embedded into documents, UI elements, or used as a static
    image.*/build():Charts.Chart;
/**Sets the background color for the chart.

```
// Creates a line chart builder and sets the background color to gray
var builder = Charts.newLineChart();
builder.setBackgroundColor("gray");
```
@param cssValue The CSS value for the color (such as `"blue"` or `"#00f"`).
@return This builder, useful for chaining.*/setBackgroundColor(cssValue:string):Charts.ScatterChartBuilder;
/**Sets the colors for the lines in the chart.

```
// Creates a line chart builder and sets the first two lines to be drawn in green and red,
// respectively.
var builder = Charts.newLineChart();
builder.setColors(["green", "red"]);
```
@param cssValues An array of color CSS values, such as `["red", "#acf"]`. The nth element
    in the array represents the color of the nth line in the chart.
@return This builder, useful for chaining.*/setColors(cssValues:string[]):Charts.ScatterChartBuilder;
/**Sets the data source URL that is used to pull data in from an external source, such as Google
Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.

For more information about querying data sources, check out the [Google Charts documentation](/chart/interactive/docs/queries).
@param url The data source URL, including any query parameters.
@return This builder, useful for chaining.*/setDataSourceUrl(url:string):Charts.ScatterChartBuilder;
/**Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
for setting the data table without needing to call `build()`.
@param tableBuilder A data table builder. A new data table is created instantly as part of this
    call, so any further updates to the builder won't be reflected in the chart.
@return This builder, useful for chaining.*/setDataTable(tableBuilder:DataTableBuilder):Charts.ScatterChartBuilder;
/**Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
first column should be a string, and contain the horizontal axis labels. Any number of columns
can follow, all must be numeric. Each column is displayed as a separate line.
@param table The data table to use for the chart.
@return This builder, useful for chaining.*/setDataTable(table:DataTableSource):Charts.ScatterChartBuilder;
/**Sets the data view definition to use for the chart.
@param dataViewDefinition A data view definition object that defines the view that should be
    derived from the given data source for the chart drawing.
@return This builder, useful for chaining.*/setDataViewDefinition(dataViewDefinition:Charts.DataViewDefinition):Charts.ScatterChartBuilder;
/**Sets the dimensions for the chart.
@param width The width of the chart, in pixels.
@param height The height of the chart, in pixels.
@return This builder, useful for chaining.*/setDimensions(width:Integer,height:Integer):Charts.ScatterChartBuilder;
/**Sets the position of the legend with respect to the chart. By default, there is no legend.

```
// Creates a line chart builder and sets the legend position to right.
var builder = Charts.newLineChart();
builder.setLegendPosition(Charts.Position.RIGHT);
```
@param position The position of the legend.
@return This builder, useful for chaining.*/setLegendPosition(position:Charts.Position):Charts.ScatterChartBuilder;
/**Sets the text style of the chart legend.

```
// Creates a line chart builder and sets it up for a  blue, 26-point legend.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
var builder = Charts.newLineChart();
builder.setLegendTextStyle(style);
```
@param textStyle The text style to use for the chart legend.
@return This builder, useful for chaining.*/setLegendTextStyle(textStyle:Charts.TextStyle):Charts.ScatterChartBuilder;
/**Sets advanced options for this chart. See [the available options for
this chart](/chart/interactive/docs/gallery/scatterchart). This method has no effect if the given option is invalid.

```
// Build a scatter chart with a 1-second animation duration.
var builder = Charts.newScatterChart();
builder.setOption('animation.duration', 1000);
var chart = builder.build();
```
@param option The option to set.
@param value The value to set.
@return This builder, useful for chaining.*/setOption(option:string,value:Object):Charts.ScatterChartBuilder;
/**Sets the style for points in the line. By default, points have no particular styles, and only
the line is visible.

```
// Creates a line chart builder and sets large point style.
var builder = Charts.newLineChart();
builder.setPointStyle(Charts.PointStyle.LARGE);
```
@param style The style to use for points in the line.
@return This builder, useful for chaining.*/setPointStyle(style:Charts.PointStyle):Charts.ScatterChartBuilder;
/**Sets the title of the chart. The title is displayed centered above the chart.

```
// Creates a line chart builder and title to 'My Line Chart'.
var builder = Charts.newLineChart();
builder.setTitle('My Line Chart')
```
@param chartTitle the chart title.
@return This builder, useful for chaining.*/setTitle(chartTitle:string):Charts.ScatterChartBuilder;
/**Sets the text style of the chart title.

```
// Creates a line chart builder and sets it up for a  blue, 26-point title.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
var builder = Charts.newLineChart();
builder.setTitleTextStyle(style);
```
@param textStyle The text style to use for the chart title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setTitleTextStyle(textStyle:Charts.TextStyle):Charts.ScatterChartBuilder;
/**Makes the horizontal axis into a logarithmic scale (requires all values to be positive).
@return This builder, useful for chaining.*/setXAxisLogScale():Charts.ScatterChartBuilder;
/**Sets the range for the horizontal axis of the chart.

If any data points fall outside the range, the range is expanded to include those data
points.

```
// Creates a scatter chart builder and sets the X-axis range to be 0 to 100.
var builder = Charts.newTableChart();
builder.setXAxisRange(0, 100);
```
@param start The value for the lowest grid line of the horizontal axis.
@param end The value for the highest grid line of the horizontal axis.
@return This builder, useful for chaining.*/setXAxisRange(start:number,end:number):Charts.ScatterChartBuilder;
/**Sets the horizontal axis text style.

```
// Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setXAxisTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setXAxisTextStyle(textStyle:Charts.TextStyle):Charts.ScatterChartBuilder;
/**Adds a title to the horizontal axis. The title is centered and appears below the axis value
labels.

```
// Creates a line chart builder and sets the X-axis title.
var builder = Charts.newLineChart();
builder.setTitle('X-axis Title')
```
@param title The title for the X-axis.
@return This builder, useful for chaining.*/setXAxisTitle(title:string):Charts.ScatterChartBuilder;
/**Sets the horizontal axis title text style.

```
// Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setXAxisTitleTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setXAxisTitleTextStyle(textStyle:Charts.TextStyle):Charts.ScatterChartBuilder;
/**Makes the vertical axis into a logarithmic scale (requires all values to be positive).
@return This builder, useful for chaining.*/setYAxisLogScale():Charts.ScatterChartBuilder;
/**Sets the range for the vertical axis of the chart. If any data points fall outside the range,
the range is expanded to include those data points.

```
// Creates a scatter chart builder and sets the Y-axis range to be 0 to 100.
var builder = Charts.newTableChart();
builder.setYAxisRange(0, 100);
```
@param start The value for the lowest grid line of the vertical axis.
@param end The value for the highest grid line of the vertical axis.
@return This builder, useful for chaining.*/setYAxisRange(start:number,end:number):Charts.ScatterChartBuilder;
/**Sets the vertical axis text style.

```
// Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setYAxisTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setYAxisTextStyle(textStyle:Charts.TextStyle):Charts.ScatterChartBuilder;
/**Adds a title to the vertical axis. The title is centered and appears to the left of the value
labels.

```
// Creates a line chart builder and sets the Y-axis title.
var builder = Charts.newLineChart();
builder.setYAxisTitle('Y-axis Title')
```
@param title The title for the Y-axis.
@return This builder, useful for chaining.*/setYAxisTitle(title:string):Charts.ScatterChartBuilder;
/**Sets the vertical axis title text style.

```
// Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setYAxisTitleTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setYAxisTitleTextStyle(textStyle:Charts.TextStyle):Charts.ScatterChartBuilder;}interface Position{}interface _Position{
/**Below the chart.*/BOTTOM:Position;
/**No legend is displayed.*/NONE:Position;
/**To the right of the chart.*/RIGHT:Position;
/**Above the chart.*/TOP:Position;}interface PointStyle{}interface _PointStyle{
/**Use largest sized line points.*/HUGE:PointStyle;
/**Use large sized line points.*/LARGE:PointStyle;
/**Use medium sized line points.*/MEDIUM:PointStyle;
/**Do not display line points.*/NONE:PointStyle;
/**Use tiny line points.*/TINY:PointStyle;}interface PieChartBuilder{
/**Builds the chart.
@return A Chart object, which can be embedded into documents, UI elements, or used as a static
    image.*/build():Charts.Chart;
/**Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
area or column charts), this means the horizontal axis is drawn from right to left. For
horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
bottom. For pie charts, this means the slices are drawn counterclockwise.

```
// Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
var builder = Charts.newPieChart();
builder.reverseCategories();
```
@return This builder, useful for chaining.*/reverseCategories():Charts.PieChartBuilder;
/**Sets the chart to be three-dimensional.
@return This builder, useful for chaining.*/set3D():Charts.PieChartBuilder;
/**Sets the background color for the chart.

```
// Creates a line chart builder and sets the background color to gray
var builder = Charts.newLineChart();
builder.setBackgroundColor("gray");
```
@param cssValue The CSS value for the color (such as `"blue"` or `"#00f"`).
@return This builder, useful for chaining.*/setBackgroundColor(cssValue:string):Charts.PieChartBuilder;
/**Sets the colors for the lines in the chart.

```
// Creates a line chart builder and sets the first two lines to be drawn in green and red,
// respectively.
var builder = Charts.newLineChart();
builder.setColors(["green", "red"]);
```
@param cssValues An array of color CSS values, such as `["red", "#acf"]`. The nth element
    in the array represents the color of the nth line in the chart.
@return This builder, useful for chaining.*/setColors(cssValues:string[]):Charts.PieChartBuilder;
/**Sets the data source URL that is used to pull data in from an external source, such as Google
Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.

For more information about querying data sources, check out the [Google Charts documentation](/chart/interactive/docs/queries).
@param url The data source URL, including any query parameters.
@return This builder, useful for chaining.*/setDataSourceUrl(url:string):Charts.PieChartBuilder;
/**Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
for setting the data table without needing to call `build()`.
@param tableBuilder A data table builder. A new data table is created instantly as part of this
    call, so any further updates to the builder won't be reflected in the chart.
@return This builder, useful for chaining.*/setDataTable(tableBuilder:DataTableBuilder):Charts.PieChartBuilder;
/**Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
first column should be a string, and contain the horizontal axis labels. Any number of columns
can follow, all must be numeric. Each column is displayed as a separate line.
@param table The data table to use for the chart.
@return This builder, useful for chaining.*/setDataTable(table:DataTableSource):Charts.PieChartBuilder;
/**Sets the data view definition to use for the chart.
@param dataViewDefinition A data view definition object that defines the view that should be
    derived from the given data source for the chart drawing.
@return This builder, useful for chaining.*/setDataViewDefinition(dataViewDefinition:Charts.DataViewDefinition):Charts.PieChartBuilder;
/**Sets the dimensions for the chart.
@param width The width of the chart, in pixels.
@param height The height of the chart, in pixels.
@return This builder, useful for chaining.*/setDimensions(width:Integer,height:Integer):Charts.PieChartBuilder;
/**Sets the position of the legend with respect to the chart. By default, there is no legend.

```
// Creates a line chart builder and sets the legend position to right.
var builder = Charts.newLineChart();
builder.setLegendPosition(Charts.Position.RIGHT);
```
@param position The position of the legend.
@return This builder, useful for chaining.*/setLegendPosition(position:Charts.Position):Charts.PieChartBuilder;
/**Sets the text style of the chart legend.

```
// Creates a line chart builder and sets it up for a  blue, 26-point legend.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
var builder = Charts.newLineChart();
builder.setLegendTextStyle(style);
```
@param textStyle The text style to use for the chart legend.
@return This builder, useful for chaining.*/setLegendTextStyle(textStyle:Charts.TextStyle):Charts.PieChartBuilder;
/**Sets advanced options for this chart. See [the available options for
this chart](/chart/interactive/docs/gallery/piechart). This method has no effect if the given option is invalid.

```
// Build a pie chart with a pretty legend.
var builder = Charts.newPieChart();
builder.setOption('legend', {textStyle: {color: 'blue', fontSize: 16}});
var chart = builder.build();
```
@param option The option to set.
@param value The value to set.
@return This builder, useful for chaining.*/setOption(option:string,value:Object):Charts.PieChartBuilder;
/**Sets the title of the chart. The title is displayed centered above the chart.

```
// Creates a line chart builder and title to 'My Line Chart'.
var builder = Charts.newLineChart();
builder.setTitle('My Line Chart')
```
@param chartTitle the chart title.
@return This builder, useful for chaining.*/setTitle(chartTitle:string):Charts.PieChartBuilder;
/**Sets the text style of the chart title.

```
// Creates a line chart builder and sets it up for a  blue, 26-point title.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
var builder = Charts.newLineChart();
builder.setTitleTextStyle(style);
```
@param textStyle The text style to use for the chart title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setTitleTextStyle(textStyle:Charts.TextStyle):Charts.PieChartBuilder;}interface PickerValuesLayout{}interface _PickerValuesLayout{
/**Selected values display in a single text line next to the value picker widget.*/ASIDE:PickerValuesLayout;
/**Selected values display in a single text line below the widget.*/BELOW:PickerValuesLayout;
/**Selected values display in a column below the widget.*/BELOW_STACKED:PickerValuesLayout;
/**Similar to below, but entries that cannot fit in the picker wrap to a new line.*/BELOW_WRAPPING:PickerValuesLayout;}interface Orientation{}interface _Orientation{
/**Horizontal orientation.*/HORIZONTAL:Orientation;
/**Vertical orientation.*/VERTICAL:Orientation;}interface NumberRangeFilterBuilder{
/**Sets the maximum allowed value for the range lower extent. If undefined, the value is inferred
from the contents of the DataTable managed by the control.

```
// Builds a number range filter and sets the maximum value to 100.
var numberRangeFilter = Charts.newNumberRangeFilter()
  .setFilterColumnLabel("Col2")
  .setMaxValue(100)
  .build();
```
@param maxValue The maximum value of the slider.
@return This builder, useful for chaining.*/setMaxValue(maxValue:Integer):Charts.NumberRangeFilterBuilder;
/**Sets the minimum allowed value for the range lower extent. If undefined, the value is inferred
from the contents of the DataTable managed by the control.

```
// Builds a number range filter and sets the minimum value to 10.
var numberRangeFilter = Charts.newNumberRangeFilter()
  .setFilterColumnLabel("Col2")
  .setMinValue(10)
  .build();
```
@param minValue The minimum value of the slider.
@return This builder, useful for chaining.*/setMinValue(minValue:Integer):Charts.NumberRangeFilterBuilder;
/**Sets the slider orientation.

```
// Builds a number range filter and sets it to have a horizontal orientation.
var numberRangeFilter = Charts.newNumberRangeFilter()
  .setFilterColumnLabel("Col2")
  .setOrientation(Charts.Orientation.HORIZONTAL)
  .build();
```
@param orientation The slider orientation to set.
@return This builder, useful for chaining.*/setOrientation(orientation:Charts.Orientation):Charts.NumberRangeFilterBuilder;
/**Sets whether to have labels next to the slider displaying extents of the selected range.

```
// Builds a number range filter and enables showing of the number range values.
var numberRangeFilter = Charts.newNumberRangeFilter()
  .setFilterColumnLabel("Col2")
  .setShowRangeValues(true)
  .build();
```
@param showRangeValues If `true`, enables showing of labels next to the slider.
@return This builder, useful for chaining.*/setShowRangeValues(showRangeValues:boolean):Charts.NumberRangeFilterBuilder;
/**Sets the number of ticks (fixed positions in a range bar) a number range filter slider thumbs
can fall in.

```
// Builds a number range filter and sets the number of ticks for the range to 10.
var numberRangeFilter = Charts.newNumberRangeFilter()
  .setFilterColumnLabel("Col2")
  .setTicks(10)
  .build();
```
@param ticks The number of ticks on the slider.
@return This builder, useful for chaining.*/setTicks(ticks:Integer):Charts.NumberRangeFilterBuilder;}interface MatchType{}interface _MatchType{
/**Match any substring*/ANY:MatchType;
/**Match exact values only*/EXACT:MatchType;
/**Match prefixes starting from the beginning of the value*/PREFIX:MatchType;}interface LineChartBuilder{
/**Builds the chart.
@return A Chart object, which can be embedded into documents, UI elements, or used as a static
    image.*/build():Charts.Chart;
/**Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
area or column charts), this means the horizontal axis is drawn from right to left. For
horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
bottom. For pie charts, this means the slices are drawn counterclockwise.

```
// Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
var builder = Charts.newPieChart();
builder.reverseCategories();
```
@return This builder, useful for chaining.*/reverseCategories():Charts.LineChartBuilder;
/**Sets the background color for the chart.

```
// Creates a line chart builder and sets the background color to gray
var builder = Charts.newLineChart();
builder.setBackgroundColor("gray");
```
@param cssValue The CSS value for the color (such as `"blue"` or `"#00f"`).
@return This builder, useful for chaining.*/setBackgroundColor(cssValue:string):Charts.LineChartBuilder;
/**Sets the colors for the lines in the chart.

```
// Creates a line chart builder and sets the first two lines to be drawn in green and red,
// respectively.
var builder = Charts.newLineChart();
builder.setColors(["green", "red"]);
```
@param cssValues An array of color CSS values, such as `["red", "#acf"]`. The nth element
    in the array represents the color of the nth line in the chart.
@return This builder, useful for chaining.*/setColors(cssValues:string[]):Charts.LineChartBuilder;
/**Sets the style to use for curves in the chart. See [`CurveStyle`](https://developers.google.com/apps-script/reference/charts/curve-style.html) for allowed curve
styles.

```
// Creates a line chart builder and curves the lines in the chart.
var builder = Charts.newLineChart();
builder.setCurveStyle(Charts.CurveStyle.SMOOTH)
```
@param style The style for curves in the chart.
@return This builder, useful for chaining.*/setCurveStyle(style:Charts.CurveStyle):Charts.LineChartBuilder;
/**Sets the data source URL that is used to pull data in from an external source, such as Google
Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.

For more information about querying data sources, check out the [Google Charts documentation](/chart/interactive/docs/queries).
@param url The data source URL, including any query parameters.
@return This builder, useful for chaining.*/setDataSourceUrl(url:string):Charts.LineChartBuilder;
/**Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
for setting the data table without needing to call `build()`.
@param tableBuilder A data table builder. A new data table is created instantly as part of this
    call, so any further updates to the builder won't be reflected in the chart.
@return This builder, useful for chaining.*/setDataTable(tableBuilder:DataTableBuilder):Charts.LineChartBuilder;
/**Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
first column should be a string, and contain the horizontal axis labels. Any number of columns
can follow, all must be numeric. Each column is displayed as a separate line.
@param table The data table to use for the chart.
@return This builder, useful for chaining.*/setDataTable(table:DataTableSource):Charts.LineChartBuilder;
/**Sets the data view definition to use for the chart.
@param dataViewDefinition A data view definition object that defines the view that should be
    derived from the given data source for the chart drawing.
@return This builder, useful for chaining.*/setDataViewDefinition(dataViewDefinition:Charts.DataViewDefinition):Charts.LineChartBuilder;
/**Sets the dimensions for the chart.
@param width The width of the chart, in pixels.
@param height The height of the chart, in pixels.
@return This builder, useful for chaining.*/setDimensions(width:Integer,height:Integer):Charts.LineChartBuilder;
/**Sets the position of the legend with respect to the chart. By default, there is no legend.

```
// Creates a line chart builder and sets the legend position to right.
var builder = Charts.newLineChart();
builder.setLegendPosition(Charts.Position.RIGHT);
```
@param position The position of the legend.
@return This builder, useful for chaining.*/setLegendPosition(position:Charts.Position):Charts.LineChartBuilder;
/**Sets the text style of the chart legend.

```
// Creates a line chart builder and sets it up for a  blue, 26-point legend.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
var builder = Charts.newLineChart();
builder.setLegendTextStyle(style);
```
@param textStyle The text style to use for the chart legend.
@return This builder, useful for chaining.*/setLegendTextStyle(textStyle:Charts.TextStyle):Charts.LineChartBuilder;
/**Sets advanced options for this chart. See [the available options for
this chart](/chart/interactive/docs/gallery/linechart). This method has no effect if the given option is invalid.

```
// Build a line chart with a 1-second animation duration.
var builder = Charts.newLineChart();
builder.setOption('animation.duration', 1000);
var chart = builder.build();
```
@param option The option to set.
@param value The value to set.
@return This builder, useful for chaining.*/setOption(option:string,value:Object):Charts.LineChartBuilder;
/**Sets the style for points in the line. By default, points have no particular styles, and only
the line is visible.

```
// Creates a line chart builder and sets large point style.
var builder = Charts.newLineChart();
builder.setPointStyle(Charts.PointStyle.LARGE);
```
@param style The style to use for points in the line.
@return This builder, useful for chaining.*/setPointStyle(style:Charts.PointStyle):Charts.LineChartBuilder;
/**Sets the range for the chart.

If any data points fall outside the range, the range is expanded to include those data
points.
@param start The value for the lowest grid line of the range axis.
@param end The value for the highest grid line of the range axis.
@return This builder, useful for chaining.*/setRange(start:number,end:number):Charts.LineChartBuilder;
/**Sets the title of the chart. The title is displayed centered above the chart.

```
// Creates a line chart builder and title to 'My Line Chart'.
var builder = Charts.newLineChart();
builder.setTitle('My Line Chart')
```
@param chartTitle the chart title.
@return This builder, useful for chaining.*/setTitle(chartTitle:string):Charts.LineChartBuilder;
/**Sets the text style of the chart title.

```
// Creates a line chart builder and sets it up for a  blue, 26-point title.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
var builder = Charts.newLineChart();
builder.setTitleTextStyle(style);
```
@param textStyle The text style to use for the chart title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setTitleTextStyle(textStyle:Charts.TextStyle):Charts.LineChartBuilder;
/**Sets the horizontal axis text style.

```
// Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setXAxisTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setXAxisTextStyle(textStyle:Charts.TextStyle):Charts.LineChartBuilder;
/**Adds a title to the horizontal axis. The title is centered and appears below the axis value
labels.

```
// Creates a line chart builder and sets the X-axis title.
var builder = Charts.newLineChart();
builder.setTitle('X-axis Title')
```
@param title The title for the X-axis.
@return This builder, useful for chaining.*/setXAxisTitle(title:string):Charts.LineChartBuilder;
/**Sets the horizontal axis title text style.

```
// Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setXAxisTitleTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setXAxisTitleTextStyle(textStyle:Charts.TextStyle):Charts.LineChartBuilder;
/**Sets the vertical axis text style.

```
// Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setYAxisTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setYAxisTextStyle(textStyle:Charts.TextStyle):Charts.LineChartBuilder;
/**Adds a title to the vertical axis. The title is centered and appears to the left of the value
labels.

```
// Creates a line chart builder and sets the Y-axis title.
var builder = Charts.newLineChart();
builder.setYAxisTitle('Y-axis Title')
```
@param title The title for the Y-axis.
@return This builder, useful for chaining.*/setYAxisTitle(title:string):Charts.LineChartBuilder;
/**Sets the vertical axis title text style.

```
// Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setYAxisTitleTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setYAxisTitleTextStyle(textStyle:Charts.TextStyle):Charts.LineChartBuilder;
/**Makes the range axis into a logarithmic scale (requires all values to be positive). The range
axis are the vertical axis for vertical charts (such as line, area, or column) and the
horizontal axis for horizontal charts (such as bar).
@return This builder, useful for chaining.*/useLogScale():Charts.LineChartBuilder;}interface DataViewDefinitionBuilder{
/**Builds and returns the data view definition object that was built using this builder.
@return A data view definition object that was built using this builder.*/build():Charts.DataViewDefinition;
/**Sets the indexes of the columns to include in the data view as well as specifying role-column
information. This subset of column indexes refer to the columns of the data source that the
data view is derived from.

A column role describes the purpose of the data in that column: for example, a column might
hold data describing tooltip text, data point annotations, or uncertainty indicators. For more
details, see [DataTable Roles](/chart/interactive/docs/roles) in the Google Charts
documentation.

Assuming a spreadsheet with the following data in A1:C3:

```
"abc", 20, "blue"
"def", 30, "red"
"ghi", 40, "orange"
```

The following code creates a bar chart where each bar is a different color. The colors are
assigned via a style "role column".

```
var COLUMN_SPEC = [
  0, // categories
  1, // counts
  {sourceColumn: 2, role: 'style'}
];

function roleColumnChart() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  var viewSpec = Charts.newDataViewDefinition()
      .setColumns(COLUMN_SPEC)
      .build();
  var chartBuilder = sheet.newChart()
      .setChartType(Charts.ChartType.BAR)
      .setDataViewDefinition(viewSpec)
      .setOption('useFirstColumnAsDomain', true)
      .setPosition(5, 1, 0, 0)
      .setOption('hAxis', { title: 'Counts' })
      .setOption('vAxis', { title: 'Categories' })
      .addRange(sheet.getRange('A1:C3'));
  sheet.insertChart(chartBuilder.build());
};
```
@param columns An array of column indexes, or column descriptions (an object), to include in
    the data view. The column descriptions define a column role. The data table and the
    enumeration for data view columns are zero-based.
@return This builder, useful for chaining.*/setColumns(columns:Object[]):Charts.DataViewDefinitionBuilder;}interface DataViewDefinition{}interface CurveStyle{}interface _CurveStyle{
/**Straight lines without curve.*/NORMAL:CurveStyle;
/**The angles of the line are smoothed.*/SMOOTH:CurveStyle;}interface ColumnChartBuilder{
/**Builds the chart.
@return A Chart object, which can be embedded into documents, UI elements, or used as a static
    image.*/build():Charts.Chart;
/**Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
area or column charts), this means the horizontal axis is drawn from right to left. For
horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
bottom. For pie charts, this means the slices are drawn counterclockwise.

```
// Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
var builder = Charts.newPieChart();
builder.reverseCategories();
```
@return This builder, useful for chaining.*/reverseCategories():Charts.ColumnChartBuilder;
/**Sets the background color for the chart.

```
// Creates a line chart builder and sets the background color to gray
var builder = Charts.newLineChart();
builder.setBackgroundColor("gray");
```
@param cssValue The CSS value for the color (such as `"blue"` or `"#00f"`).
@return This builder, useful for chaining.*/setBackgroundColor(cssValue:string):Charts.ColumnChartBuilder;
/**Sets the colors for the lines in the chart.

```
// Creates a line chart builder and sets the first two lines to be drawn in green and red,
// respectively.
var builder = Charts.newLineChart();
builder.setColors(["green", "red"]);
```
@param cssValues An array of color CSS values, such as `["red", "#acf"]`. The nth element
    in the array represents the color of the nth line in the chart.
@return This builder, useful for chaining.*/setColors(cssValues:string[]):Charts.ColumnChartBuilder;
/**Sets the data source URL that is used to pull data in from an external source, such as Google
Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.

For more information about querying data sources, check out the [Google Charts documentation](/chart/interactive/docs/queries).
@param url The data source URL, including any query parameters.
@return This builder, useful for chaining.*/setDataSourceUrl(url:string):Charts.ColumnChartBuilder;
/**Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
for setting the data table without needing to call `build()`.
@param tableBuilder A data table builder. A new data table is created instantly as part of this
    call, so any further updates to the builder won't be reflected in the chart.
@return This builder, useful for chaining.*/setDataTable(tableBuilder:DataTableBuilder):Charts.ColumnChartBuilder;
/**Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
first column should be a string, and contain the horizontal axis labels. Any number of columns
can follow, all must be numeric. Each column is displayed as a separate line.
@param table The data table to use for the chart.
@return This builder, useful for chaining.*/setDataTable(table:DataTableSource):Charts.ColumnChartBuilder;
/**Sets the data view definition to use for the chart.
@param dataViewDefinition A data view definition object that defines the view that should be
    derived from the given data source for the chart drawing.
@return This builder, useful for chaining.*/setDataViewDefinition(dataViewDefinition:Charts.DataViewDefinition):Charts.ColumnChartBuilder;
/**Sets the dimensions for the chart.
@param width The width of the chart, in pixels.
@param height The height of the chart, in pixels.
@return This builder, useful for chaining.*/setDimensions(width:Integer,height:Integer):Charts.ColumnChartBuilder;
/**Sets the position of the legend with respect to the chart. By default, there is no legend.

```
// Creates a line chart builder and sets the legend position to right.
var builder = Charts.newLineChart();
builder.setLegendPosition(Charts.Position.RIGHT);
```
@param position The position of the legend.
@return This builder, useful for chaining.*/setLegendPosition(position:Charts.Position):Charts.ColumnChartBuilder;
/**Sets the text style of the chart legend.

```
// Creates a line chart builder and sets it up for a  blue, 26-point legend.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
var builder = Charts.newLineChart();
builder.setLegendTextStyle(style);
```
@param textStyle The text style to use for the chart legend.
@return This builder, useful for chaining.*/setLegendTextStyle(textStyle:Charts.TextStyle):Charts.ColumnChartBuilder;
/**Sets advanced options for this chart. See [the available options for
this chart](/chart/interactive/docs/gallery/columnchart). This method has no effect if the given option is invalid.

```
// Build a column chart with a 1-second animation duration.
var builder = Charts.newColumnChart();
builder.setOption('animation.duration', 1000);
var chart = builder.build();
```
@param option The option to set.
@param value The value to set.
@return This builder, useful for chaining.*/setOption(option:string,value:Object):Charts.ColumnChartBuilder;
/**Sets the range for the chart.

If any data points fall outside the range, the range is expanded to include those data
points.
@param start The value for the lowest grid line of the range axis.
@param end The value for the highest grid line of the range axis.
@return This builder, useful for chaining.*/setRange(start:number,end:number):Charts.ColumnChartBuilder;
/**Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
there is no stacking.
@return This builder, useful for chaining.*/setStacked():Charts.ColumnChartBuilder;
/**Sets the title of the chart. The title is displayed centered above the chart.

```
// Creates a line chart builder and title to 'My Line Chart'.
var builder = Charts.newLineChart();
builder.setTitle('My Line Chart')
```
@param chartTitle the chart title.
@return This builder, useful for chaining.*/setTitle(chartTitle:string):Charts.ColumnChartBuilder;
/**Sets the text style of the chart title.

```
// Creates a line chart builder and sets it up for a  blue, 26-point title.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
var builder = Charts.newLineChart();
builder.setTitleTextStyle(style);
```
@param textStyle The text style to use for the chart title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setTitleTextStyle(textStyle:Charts.TextStyle):Charts.ColumnChartBuilder;
/**Sets the horizontal axis text style.

```
// Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setXAxisTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setXAxisTextStyle(textStyle:Charts.TextStyle):Charts.ColumnChartBuilder;
/**Adds a title to the horizontal axis. The title is centered and appears below the axis value
labels.

```
// Creates a line chart builder and sets the X-axis title.
var builder = Charts.newLineChart();
builder.setTitle('X-axis Title')
```
@param title The title for the X-axis.
@return This builder, useful for chaining.*/setXAxisTitle(title:string):Charts.ColumnChartBuilder;
/**Sets the horizontal axis title text style.

```
// Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setXAxisTitleTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setXAxisTitleTextStyle(textStyle:Charts.TextStyle):Charts.ColumnChartBuilder;
/**Sets the vertical axis text style.

```
// Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setYAxisTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setYAxisTextStyle(textStyle:Charts.TextStyle):Charts.ColumnChartBuilder;
/**Adds a title to the vertical axis. The title is centered and appears to the left of the value
labels.

```
// Creates a line chart builder and sets the Y-axis title.
var builder = Charts.newLineChart();
builder.setYAxisTitle('Y-axis Title')
```
@param title The title for the Y-axis.
@return This builder, useful for chaining.*/setYAxisTitle(title:string):Charts.ColumnChartBuilder;
/**Sets the vertical axis title text style.

```
// Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setYAxisTitleTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setYAxisTitleTextStyle(textStyle:Charts.TextStyle):Charts.ColumnChartBuilder;
/**Makes the range axis into a logarithmic scale (requires all values to be positive). The range
axis are the vertical axis for vertical charts (such as line, area, or column) and the
horizontal axis for horizontal charts (such as bar).
@return This builder, useful for chaining.*/useLogScale():Charts.ColumnChartBuilder;}interface ChartType{}interface _ChartType{
/**Area chart*/AREA:ChartType;
/**Bar chart*/BAR:ChartType;
/**Bubble chart.*/BUBBLE:ChartType;
/**Candlestick chart.*/CANDLESTICK:ChartType;
/**Column chart*/COLUMN:ChartType;
/**Combo chart*/COMBO:ChartType;
/**Gauge chart.*/GAUGE:ChartType;
/**Geo chart.*/GEO:ChartType;
/**Histogram*/HISTOGRAM:ChartType;
/**Line chart*/LINE:ChartType;
/**Org chart.*/ORG:ChartType;
/**Pie chart*/PIE:ChartType;
/**Radar chart.*/RADAR:ChartType;
/**Scatter chart*/SCATTER:ChartType;
/**Sparkline chart.*/SPARKLINE:ChartType;
/**Stepped area chart.*/STEPPED_AREA:ChartType;
/**Table chart*/TABLE:ChartType;
/**Timeline chart.*/TIMELINE:ChartType;
/**Treemap chart.*/TREEMAP:ChartType;
/**Waterfall chart.*/WATERFALL:ChartType;}interface ChartOptions{
/**Returns a configured option for this chart.
@param option The string representing the desired option.
@return The value currently set for the specified option or `null` if the option was not
    set.*/get(option:string):Object;
/**Returns a configured option for this chart. If the chart option is not set, returns the default
value of this option if available, or returns `null` if the default value is not
available.
@param option The string representing the desired option.
@return The value currently set for the specified option. If the option was not set and the
    default value is available, returns the default value.*/getOrDefault(option:string):Object;}interface ChartMergeStrategy{}interface _ChartMergeStrategy{
/**Default. Charts merges the columns of multiple ranges.*/MERGE_COLUMNS:ChartMergeStrategy;
/**Charts merges the rows of multiple ranges.*/MERGE_ROWS:ChartMergeStrategy;}interface ChartHiddenDimensionStrategy{}interface _ChartHiddenDimensionStrategy{
/**Default; charts skips any hidden columns and hidden rows.*/IGNORE_BOTH:ChartHiddenDimensionStrategy;
/**Charts skips hidden columns only.*/IGNORE_COLUMNS:ChartHiddenDimensionStrategy;
/**Charts skips hidden rows only.*/IGNORE_ROWS:ChartHiddenDimensionStrategy;
/**Charts does not skip hidden columns or hidden rows.*/SHOW_BOTH:ChartHiddenDimensionStrategy;}interface Chart{
/**Return the data inside this object as a blob converted to the specified content type. This
method adds the appropriate extension to the filename—for example, "myfile.pdf". However, it
assumes that the part of the filename that follows the last period (if any) is an existing
extension that should be replaced. Consequently, "ShoppingList.12.25.2014" becomes
"ShoppingList.12.25.pdf".

To view the daily quotas for conversions, see [Quotas for Google
Services](https://developers.google.com/apps-script/guides/services/quotas). Newly created Google Workspace domains might be temporarily subject to stricter
quotas.
@param contentType The MIME type to convert to. For most blobs, `'application/pdf'` is
    the only valid option. For images in BMP, GIF, JPEG, or PNG format, any of `'image/bmp'`, `'image/gif'`, `'image/jpeg'`, or `'image/png'` are also
    valid. For a Google Docs document, `'text/markdown'` is also valid.
@return The data as a blob.*/getAs(contentType:string):Blob;
/**Return the data inside this object as a blob.
@return The data as a blob.*/getBlob():Blob;
/**Returns the options for this chart, such as height, colors, and axes.

The returned options are immutable.
@return The options for this chart, such as height, colors, and axes.*/getOptions():Charts.ChartOptions;}interface BarChartBuilder{
/**Builds the chart.
@return A Chart object, which can be embedded into documents, UI elements, or used as a static
    image.*/build():Charts.Chart;
/**Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
area or column charts), this means the horizontal axis is drawn from right to left. For
horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
bottom. For pie charts, this means the slices are drawn counterclockwise.

```
// Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
var builder = Charts.newPieChart();
builder.reverseCategories();
```
@return This builder, useful for chaining.*/reverseCategories():Charts.BarChartBuilder;
/**Reverses the direction in which the bars grow along the horizontal axis. By default, values
grow from left to right. Calling this method causes them to grow from right to left.
@return This builder, useful for chaining.*/reverseDirection():Charts.BarChartBuilder;
/**Sets the background color for the chart.

```
// Creates a line chart builder and sets the background color to gray
var builder = Charts.newLineChart();
builder.setBackgroundColor("gray");
```
@param cssValue The CSS value for the color (such as `"blue"` or `"#00f"`).
@return This builder, useful for chaining.*/setBackgroundColor(cssValue:string):Charts.BarChartBuilder;
/**Sets the colors for the lines in the chart.

```
// Creates a line chart builder and sets the first two lines to be drawn in green and red,
// respectively.
var builder = Charts.newLineChart();
builder.setColors(["green", "red"]);
```
@param cssValues An array of color CSS values, such as `["red", "#acf"]`. The nth element
    in the array represents the color of the nth line in the chart.
@return This builder, useful for chaining.*/setColors(cssValues:string[]):Charts.BarChartBuilder;
/**Sets the data source URL that is used to pull data in from an external source, such as Google
Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.

For more information about querying data sources, check out the [Google Charts documentation](/chart/interactive/docs/queries).
@param url The data source URL, including any query parameters.
@return This builder, useful for chaining.*/setDataSourceUrl(url:string):Charts.BarChartBuilder;
/**Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
for setting the data table without needing to call `build()`.
@param tableBuilder A data table builder. A new data table is created instantly as part of this
    call, so any further updates to the builder won't be reflected in the chart.
@return This builder, useful for chaining.*/setDataTable(tableBuilder:DataTableBuilder):Charts.BarChartBuilder;
/**Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
first column should be a string, and contain the horizontal axis labels. Any number of columns
can follow, all must be numeric. Each column is displayed as a separate line.
@param table The data table to use for the chart.
@return This builder, useful for chaining.*/setDataTable(table:DataTableSource):Charts.BarChartBuilder;
/**Sets the data view definition to use for the chart.
@param dataViewDefinition A data view definition object that defines the view that should be
    derived from the given data source for the chart drawing.
@return This builder, useful for chaining.*/setDataViewDefinition(dataViewDefinition:Charts.DataViewDefinition):Charts.BarChartBuilder;
/**Sets the dimensions for the chart.
@param width The width of the chart, in pixels.
@param height The height of the chart, in pixels.
@return This builder, useful for chaining.*/setDimensions(width:Integer,height:Integer):Charts.BarChartBuilder;
/**Sets the position of the legend with respect to the chart. By default, there is no legend.

```
// Creates a line chart builder and sets the legend position to right.
var builder = Charts.newLineChart();
builder.setLegendPosition(Charts.Position.RIGHT);
```
@param position The position of the legend.
@return This builder, useful for chaining.*/setLegendPosition(position:Charts.Position):Charts.BarChartBuilder;
/**Sets the text style of the chart legend.

```
// Creates a line chart builder and sets it up for a  blue, 26-point legend.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
var builder = Charts.newLineChart();
builder.setLegendTextStyle(style);
```
@param textStyle The text style to use for the chart legend.
@return This builder, useful for chaining.*/setLegendTextStyle(textStyle:Charts.TextStyle):Charts.BarChartBuilder;
/**Sets advanced options for this chart. See [the available options for
this chart](/chart/interactive/docs/gallery/barchart). This method has no effect if the given option is invalid.

```
// Build a bar chart with a 1-second animation duration.
var builder = Charts.newBarChart();
builder.setOption('animation.duration', 1000);
var chart = builder.build();
```
@param option The option to set.
@param value The value to set.
@return This builder, useful for chaining.*/setOption(option:string,value:Object):Charts.BarChartBuilder;
/**Sets the range for the chart.

If any data points fall outside the range, the range is expanded to include those data
points.
@param start The value for the lowest grid line of the range axis.
@param end The value for the highest grid line of the range axis.
@return This builder, useful for chaining.*/setRange(start:number,end:number):Charts.BarChartBuilder;
/**Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
there is no stacking.
@return This builder, useful for chaining.*/setStacked():Charts.BarChartBuilder;
/**Sets the title of the chart. The title is displayed centered above the chart.

```
// Creates a line chart builder and title to 'My Line Chart'.
var builder = Charts.newLineChart();
builder.setTitle('My Line Chart')
```
@param chartTitle the chart title.
@return This builder, useful for chaining.*/setTitle(chartTitle:string):Charts.BarChartBuilder;
/**Sets the text style of the chart title.

```
// Creates a line chart builder and sets it up for a  blue, 26-point title.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
var builder = Charts.newLineChart();
builder.setTitleTextStyle(style);
```
@param textStyle The text style to use for the chart title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setTitleTextStyle(textStyle:Charts.TextStyle):Charts.BarChartBuilder;
/**Sets the horizontal axis text style.

```
// Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setXAxisTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setXAxisTextStyle(textStyle:Charts.TextStyle):Charts.BarChartBuilder;
/**Adds a title to the horizontal axis. The title is centered and appears below the axis value
labels.

```
// Creates a line chart builder and sets the X-axis title.
var builder = Charts.newLineChart();
builder.setTitle('X-axis Title')
```
@param title The title for the X-axis.
@return This builder, useful for chaining.*/setXAxisTitle(title:string):Charts.BarChartBuilder;
/**Sets the horizontal axis title text style.

```
// Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setXAxisTitleTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setXAxisTitleTextStyle(textStyle:Charts.TextStyle):Charts.BarChartBuilder;
/**Sets the vertical axis text style.

```
// Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setYAxisTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setYAxisTextStyle(textStyle:Charts.TextStyle):Charts.BarChartBuilder;
/**Adds a title to the vertical axis. The title is centered and appears to the left of the value
labels.

```
// Creates a line chart builder and sets the Y-axis title.
var builder = Charts.newLineChart();
builder.setYAxisTitle('Y-axis Title')
```
@param title The title for the Y-axis.
@return This builder, useful for chaining.*/setYAxisTitle(title:string):Charts.BarChartBuilder;
/**Sets the vertical axis title text style.

```
// Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setYAxisTitleTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setYAxisTitleTextStyle(textStyle:Charts.TextStyle):Charts.BarChartBuilder;
/**Makes the range axis into a logarithmic scale (requires all values to be positive). The range
axis are the vertical axis for vertical charts (such as line, area, or column) and the
horizontal axis for horizontal charts (such as bar).
@return This builder, useful for chaining.*/useLogScale():Charts.BarChartBuilder;}interface AreaChartBuilder{
/**Builds the chart.
@return A Chart object, which can be embedded into documents, UI elements, or used as a static
    image.*/build():Charts.Chart;
/**Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
area or column charts), this means the horizontal axis is drawn from right to left. For
horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
bottom. For pie charts, this means the slices are drawn counterclockwise.

```
// Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
var builder = Charts.newPieChart();
builder.reverseCategories();
```
@return This builder, useful for chaining.*/reverseCategories():Charts.AreaChartBuilder;
/**Sets the background color for the chart.

```
// Creates a line chart builder and sets the background color to gray
var builder = Charts.newLineChart();
builder.setBackgroundColor("gray");
```
@param cssValue The CSS value for the color (such as `"blue"` or `"#00f"`).
@return This builder, useful for chaining.*/setBackgroundColor(cssValue:string):Charts.AreaChartBuilder;
/**Sets the colors for the lines in the chart.

```
// Creates a line chart builder and sets the first two lines to be drawn in green and red,
// respectively.
var builder = Charts.newLineChart();
builder.setColors(["green", "red"]);
```
@param cssValues An array of color CSS values, such as `["red", "#acf"]`. The nth element
    in the array represents the color of the nth line in the chart.
@return This builder, useful for chaining.*/setColors(cssValues:string[]):Charts.AreaChartBuilder;
/**Sets the data source URL that is used to pull data in from an external source, such as Google
Sheets. If a data source URL and a DataTable are provided, the data source URL is ignored.

For more information about querying data sources, check out the [Google Charts documentation](/chart/interactive/docs/queries).
@param url The data source URL, including any query parameters.
@return This builder, useful for chaining.*/setDataSourceUrl(url:string):Charts.AreaChartBuilder;
/**Sets the data table to use for the chart using a DataTableBuilder. This is a convenience method
for setting the data table without needing to call `build()`.
@param tableBuilder A data table builder. A new data table is created instantly as part of this
    call, so any further updates to the builder won't be reflected in the chart.
@return This builder, useful for chaining.*/setDataTable(tableBuilder:DataTableBuilder):Charts.AreaChartBuilder;
/**Sets the data table which contains the lines for the chart, as well as the X-axis labels. The
first column should be a string, and contain the horizontal axis labels. Any number of columns
can follow, all must be numeric. Each column is displayed as a separate line.
@param table The data table to use for the chart.
@return This builder, useful for chaining.*/setDataTable(table:DataTableSource):Charts.AreaChartBuilder;
/**Sets the data view definition to use for the chart.
@param dataViewDefinition A data view definition object that defines the view that should be
    derived from the given data source for the chart drawing.
@return This builder, useful for chaining.*/setDataViewDefinition(dataViewDefinition:Charts.DataViewDefinition):Charts.AreaChartBuilder;
/**Sets the dimensions for the chart.
@param width The width of the chart, in pixels.
@param height The height of the chart, in pixels.
@return This builder, useful for chaining.*/setDimensions(width:Integer,height:Integer):Charts.AreaChartBuilder;
/**Sets the position of the legend with respect to the chart. By default, there is no legend.

```
// Creates a line chart builder and sets the legend position to right.
var builder = Charts.newLineChart();
builder.setLegendPosition(Charts.Position.RIGHT);
```
@param position The position of the legend.
@return This builder, useful for chaining.*/setLegendPosition(position:Charts.Position):Charts.AreaChartBuilder;
/**Sets the text style of the chart legend.

```
// Creates a line chart builder and sets it up for a  blue, 26-point legend.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
var builder = Charts.newLineChart();
builder.setLegendTextStyle(style);
```
@param textStyle The text style to use for the chart legend.
@return This builder, useful for chaining.*/setLegendTextStyle(textStyle:Charts.TextStyle):Charts.AreaChartBuilder;
/**Sets advanced options for this chart. See [the available options for
this chart](/chart/interactive/docs/gallery/areachart). This method has no effect if the given option is invalid.

```
// Build an area chart with a 1-second animation duration.
var builder = Charts.newAreaChart();
builder.setOption('animation.duration', 1000);
var chart = builder.build();
```
@param option The option to set.
@param value The value to set.
@return This builder, useful for chaining.*/setOption(option:string,value:Object):Charts.AreaChartBuilder;
/**Sets the style for points in the line. By default, points have no particular styles, and only
the line is visible.

```
// Creates a line chart builder and sets large point style.
var builder = Charts.newLineChart();
builder.setPointStyle(Charts.PointStyle.LARGE);
```
@param style The style to use for points in the line.
@return This builder, useful for chaining.*/setPointStyle(style:Charts.PointStyle):Charts.AreaChartBuilder;
/**Sets the range for the chart.

If any data points fall outside the range, the range is expanded to include those data
points.
@param start The value for the lowest grid line of the range axis.
@param end The value for the highest grid line of the range axis.
@return This builder, useful for chaining.*/setRange(start:number,end:number):Charts.AreaChartBuilder;
/**Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
there is no stacking.
@return This builder, useful for chaining.*/setStacked():Charts.AreaChartBuilder;
/**Sets the title of the chart. The title is displayed centered above the chart.

```
// Creates a line chart builder and title to 'My Line Chart'.
var builder = Charts.newLineChart();
builder.setTitle('My Line Chart')
```
@param chartTitle the chart title.
@return This builder, useful for chaining.*/setTitle(chartTitle:string):Charts.AreaChartBuilder;
/**Sets the text style of the chart title.

```
// Creates a line chart builder and sets it up for a  blue, 26-point title.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
var builder = Charts.newLineChart();
builder.setTitleTextStyle(style);
```
@param textStyle The text style to use for the chart title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setTitleTextStyle(textStyle:Charts.TextStyle):Charts.AreaChartBuilder;
/**Sets the horizontal axis text style.

```
// Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setXAxisTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setXAxisTextStyle(textStyle:Charts.TextStyle):Charts.AreaChartBuilder;
/**Adds a title to the horizontal axis. The title is centered and appears below the axis value
labels.

```
// Creates a line chart builder and sets the X-axis title.
var builder = Charts.newLineChart();
builder.setTitle('X-axis Title')
```
@param title The title for the X-axis.
@return This builder, useful for chaining.*/setXAxisTitle(title:string):Charts.AreaChartBuilder;
/**Sets the horizontal axis title text style.

```
// Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setXAxisTitleTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setXAxisTitleTextStyle(textStyle:Charts.TextStyle):Charts.AreaChartBuilder;
/**Sets the vertical axis text style.

```
// Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setYAxisTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setYAxisTextStyle(textStyle:Charts.TextStyle):Charts.AreaChartBuilder;
/**Adds a title to the vertical axis. The title is centered and appears to the left of the value
labels.

```
// Creates a line chart builder and sets the Y-axis title.
var builder = Charts.newLineChart();
builder.setYAxisTitle('Y-axis Title')
```
@param title The title for the Y-axis.
@return This builder, useful for chaining.*/setYAxisTitle(title:string):Charts.AreaChartBuilder;
/**Sets the vertical axis title text style.

```
// Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setYAxisTitleTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setYAxisTitleTextStyle(textStyle:Charts.TextStyle):Charts.AreaChartBuilder;
/**Makes the range axis into a logarithmic scale (requires all values to be positive). The range
axis are the vertical axis for vertical charts (such as line, area, or column) and the
horizontal axis for horizontal charts (such as bar).
@return This builder, useful for chaining.*/useLogScale():Charts.AreaChartBuilder;}}const Charts:Charts;