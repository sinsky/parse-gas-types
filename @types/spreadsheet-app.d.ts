interface SpreadsheetApp{
/**An enumeration of the types of series used to calculate auto-filled values.*/AutoFillSeries:SpreadsheetApp._AutoFillSeries;
/**An enumeration of the possible banding themes.*/BandingTheme:SpreadsheetApp._BandingTheme;
/**An enumeration of conditional formatting boolean criteria.*/BooleanCriteria:SpreadsheetApp._BooleanCriteria;
/**An enumeration of the valid styles for setting borders on a [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html).*/BorderStyle:SpreadsheetApp._BorderStyle;
/**An enumeration of possible color types.*/ColorType:_ColorType;
/**An enumeration of the possible paste types.*/CopyPasteType:SpreadsheetApp._CopyPasteType;
/**An enumeration of the possible data execution error codes.*/DataExecutionErrorCode:SpreadsheetApp._DataExecutionErrorCode;
/**An enumeration of the possible data execution states.*/DataExecutionState:SpreadsheetApp._DataExecutionState;
/**An enumeration of the possible data source parameter types.*/DataSourceParameterType:SpreadsheetApp._DataSourceParameterType;
/**An enumeration of possible data source refresh scopes.*/DataSourceRefreshScope:SpreadsheetApp._DataSourceRefreshScope;
/**An enumeration of the possible data source types.*/DataSourceType:SpreadsheetApp._DataSourceType;
/**An enumeration representing the data validation criteria that can be set on a range.*/DataValidationCriteria:SpreadsheetApp._DataValidationCriteria;
/**An enumeration of date time grouping rule.*/DateTimeGroupingRuleType:SpreadsheetApp._DateTimeGroupingRuleType;
/**An enumeration of possible developer metadata location types.*/DeveloperMetadataLocationType:SpreadsheetApp._DeveloperMetadataLocationType;
/**An enumeration of the possible developer metadata visibilities.*/DeveloperMetadataVisibility:SpreadsheetApp._DeveloperMetadataVisibility;
/**An enumeration of the possible dimensions of a spreadsheet.*/Dimension:SpreadsheetApp._Dimension;
/**A enumeration of the possible directions that one can move within a spreadsheet using the arrow
keys.*/Direction:SpreadsheetApp._Direction;
/**An enumeration of possible frequency types.*/FrequencyType:SpreadsheetApp._FrequencyType;
/**An enumeration of the positions that the group control toggle can be in.*/GroupControlTogglePosition:SpreadsheetApp._GroupControlTogglePosition;
/**An enumeration of conditional format gradient interpolation types.*/InterpolationType:SpreadsheetApp._InterpolationType;
/**An enumeration of the functions that may be used to summarize values in a pivot table.*/PivotTableSummarizeFunction:SpreadsheetApp._PivotTableSummarizeFunction;
/**An enumeration of the ways that a pivot value may be displayed.*/PivotValueDisplayType:SpreadsheetApp._PivotValueDisplayType;
/**An enumeration representing the parts of a spreadsheet that can be protected from edits.*/ProtectionType:SpreadsheetApp._ProtectionType;
/**An enumeration of the possible intervals that can be used in spreadsheet recalculation.*/RecalculationInterval:SpreadsheetApp._RecalculationInterval;
/**An enumeration of relative date options for calculating a value to be used in date-based [`BooleanCriteria`](https://developers.google.com/apps-script/reference/spreadsheet/boolean-criteria.html).*/RelativeDate:SpreadsheetApp._RelativeDate;
/**An enumeration of the different types of sheets that can exist in a spreadsheet.*/SheetType:SpreadsheetApp._SheetType;
/**An enumeration of sort order.*/SortOrder:SpreadsheetApp._SortOrder;
/**An enumeration of valid text directions.*/TextDirection:SpreadsheetApp._TextDirection;
/**An enumeration of the preset delimiters for split text to columns.*/TextToColumnsDelimiter:SpreadsheetApp._TextToColumnsDelimiter;
/**An enumeration of possible theme color types.*/ThemeColorType:SpreadsheetApp._ThemeColorType;
/**An enumeration of value types returned by [`Range.getValue()`](https://developers.google.com/apps-script/reference/spreadsheet/range.html#getValue()) and [`Range.getValues()`](https://developers.google.com/apps-script/reference/spreadsheet/range.html#getValues()) from the Range class of the Spreadsheet service. The enumeration values
listed below are in addition to `Number`, `Boolean`, `Date`, or `String`.*/ValueType:SpreadsheetApp._ValueType;
/**An enumeration of the strategies used for wrapping cells.*/WrapStrategy:SpreadsheetApp._WrapStrategy;
/**Creates a new spreadsheet with the given name.

```
// The code below creates a new spreadsheet "Finances" and logs the URL for it
var ssNew = SpreadsheetApp.create("Finances");
Logger.log(ssNew.getUrl());
```
@param name The name for the spreadsheet.
@return a new spreadsheet*/create(name:string):SpreadsheetApp.Spreadsheet;
/**Creates a new spreadsheet with the given name and the specified number of rows and columns.

```
// The code below creates a new spreadsheet "Finances" with 50 rows and 5 columns and logs the
// URL for it
var ssNew = SpreadsheetApp.create("Finances", 50, 5);
Logger.log(ssNew.getUrl());
```
@param name The name for the spreadsheet.
@param rows The number of rows for the spreadsheet.
@param columns The number of columns for the spreadsheet.
@return a new spreadsheet*/create(name:string,rows:Integer,columns:Integer):SpreadsheetApp.Spreadsheet;
/**Turns data execution on for all types of data sources.

Data execution throws an exception if the data source type isn't turned on. Use this method
to turn data execution on for all data source types.

```
// Turns data execution on for all types of data sources.
SpreadsheetApp.enableAllDataSourcesExecution();

// Opens the spreadsheet file by its ID. If you created your script from a Google Sheets file,
// use SpreadsheetApp.getActiveSpreadsheet().
// TODO(developer): Replace the ID with your own.
const ss = SpreadsheetApp.openById('abc123456');

// Gets the first data source sheet in the spreadsheet and refreshes the data.
ss.getDataSourceSheets()[0].refreshData();
```*/enableAllDataSourcesExecution():void;
/**Turns data execution on for BigQuery data sources.

Data execution for BigQuery data source throws an exception if not turned on.

```
// Turns data execution on for BigQuery data sources.
SpreadsheetApp.enableBigQueryExecution();

// Opens the spreadsheet file by its ID. If you created your script from a Google Sheets file,
// use SpreadsheetApp.getActiveSpreadsheet().
// TODO(developer): Replace the ID with your own.
const ss = SpreadsheetApp.openById('abc123456');

// Gets the first data source sheet in the spreadsheet and refreshes the BigQuery data.
ss.getDataSourceSheets()[0].refreshData();
```*/enableBigQueryExecution():void;
/**Turns data execution on for Looker data sources.

Data execution for Looker data source throws an exception if not turned on.

```
// Turns data execution on for Looker data sources.
SpreadsheetApp.enableLookerExecution();

// Opens the spreadsheet file by its ID. If you created your script from a Google Sheets file,
// use SpreadsheetApp.getActiveSpreadsheet().
// TODO(developer): Replace the ID with your own.
const ss = SpreadsheetApp.openById('abc123456');

// Gets the first data source sheet in the spreadsheet and refreshes the associated Looker
// data.
ss.getDataSourceSheets()[0].refreshData();
```*/enableLookerExecution():void;
/**Applies all pending Spreadsheet changes.

Spreadsheet operations are sometimes bundled together to improve performance, such as when
doing multiple calls to Range.getValue(). However, sometimes you may want to make sure that all
pending changes are made right away, for instance to show users data as a script is executing.

```
// The code below changes the background color of cells A1 and B1 twenty times. You should be
// able to see the updates live in the spreadsheet. If flush() is not called, the updates may
// be applied live or may all be applied at once when the script completes.
function colors() {
  var sheet = SpreadsheetApp.getActiveSheet();
  for (var i = 0; i < 20; i++) {
    if ((i % 2) == 0) {
      sheet.getRange('A1').setBackground('green');
      sheet.getRange('B1').setBackground('red');
    } else {
      sheet.getRange('A1').setBackground('red');
      sheet.getRange('B1').setBackground('green');
    }
    SpreadsheetApp.flush();
  }
}
```*/flush():void;
/**Returns the currently active spreadsheet, or `null` if there is none.

Functions that are run in the context of a spreadsheet can get a reference to the
corresponding Spreadsheet object by calling this function.

```
// The code below logs the URL for the active spreadsheet.
Logger.log(SpreadsheetApp.getActive().getUrl());
```
@return the active Spreadsheet object*/getActive():SpreadsheetApp.Spreadsheet;
/**Returns the selected range in the active sheet, or `null` if there is no active range. If
multiple ranges are selected this method returns only the last selected range.

This generally means the range that a user has selected in the active sheet, but in a custom
function it refers to the cell being actively recalculated.

```
// The code below logs the background color for the active range.
var colorObject = SpreadsheetApp.getActiveRange().getBackgroundObject();
// Assume the color has ColorType.RGB.
Logger.log(colorObject.asRgbColor().asHexString());
```
@return The active range.*/getActiveRange():SpreadsheetApp.Range;
/**Returns the list of active ranges in the active sheet or `null` if there are no ranges
selected. The active range containing the current highlighted cell is placed last in the list.

If there is a single range selected, this behaves as a [`getActiveRange()`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app.html#getActiveRange()) call.

```
// Returns the list of active ranges.
var rangeList = SpreadsheetApp.getActiveRangeList();
```
@return the list of active ranges*/getActiveRangeList():SpreadsheetApp.RangeList;
/**Gets the active sheet in a spreadsheet.

The active sheet in a spreadsheet is the sheet that is being displayed in the spreadsheet
UI.

```
// The code below logs the name of the active sheet.
Logger.log(SpreadsheetApp.getActiveSheet().getName());
```
@return the active Sheet object*/getActiveSheet():SpreadsheetApp.Sheet;
/**Returns the currently active spreadsheet, or `null` if there is none.

Functions that are run in the context of a spreadsheet can get a reference to the
corresponding [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html) object by calling this function.

```
// The code below logs the URL for the active spreadsheet.
Logger.log(SpreadsheetApp.getActiveSpreadsheet().getUrl());
```
@return the active Spreadsheet object*/getActiveSpreadsheet():SpreadsheetApp.Spreadsheet;
/**Returns the current (highlighted) cell that is selected in one of the active ranges in the
active sheet or `null` if there is no current cell.

```
// Returns the current highlighted cell in the one of the active ranges.
var currentCell = SpreadsheetApp.getCurrentCell();
```
@return the current cell*/getCurrentCell():SpreadsheetApp.Range;
/**Returns the current [`Selection`](https://developers.google.com/apps-script/reference/spreadsheet/selection.html) in the spreadsheet.

```
var selection = SpreadsheetApp.getSelection();
var currentCell = selection.getCurrentCell();
```
@return the current selection*/getSelection():SpreadsheetApp.Selection;
/**Returns an instance of the spreadsheet's user-interface environment that allows the script to
add features like menus, dialogs, and sidebars. A script can only interact with the UI for the
current instance of an open spreadsheet, and only if the script is [bound](/apps-script/scripts_containers) to the spreadsheet. For more information, see
the guides to [menus](/apps-script/guides/menus) and [dialogs and sidebars](/apps-script/guides/dialogs).

```
// Add a custom menu to the active spreadsheet, including a separator and a sub-menu.
function onOpen(e) {
  SpreadsheetApp.getUi()
      .createMenu('My Menu')
      .addItem('My menu item', 'myFunction')
      .addSeparator()
      .addSubMenu(SpreadsheetApp.getUi().createMenu('My sub-menu')
          .addItem('One sub-menu item', 'mySecondFunction')
          .addItem('Another sub-menu item', 'myThirdFunction'))
      .addToUi();
}
```
@return an instance of this spreadsheet's user-interface environment*/getUi():Ui;
/**Creates a builder for a [`CellImage`](https://developers.google.com/apps-script/reference/spreadsheet/cell-image.html).

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets cell A1 on Sheet1.
const range = sheet.getRange('A1');

// Builds an image using a source URL.
const cellImage = SpreadsheetApp.newCellImage()
  .setSourceUrl('https://www.gstatic.com/images/branding/productlogos/apps_script/v10/web-64dp/logo_apps_script_color_1x_web_64dp.png')
  .build();

// Sets the image in cell A1.
range.setValue(cellImage);
```
@return The new builder.*/newCellImage():SpreadsheetApp.CellImageBuilder;
/**Creates a builder for a [`Color`](https://developers.google.com/apps-script/reference/spreadsheet/color.html).

```
var rgbColor = SpreadsheetApp.newColor().setRgbColor("#FF0000").build();
```
@return The new builder.*/newColor():SpreadsheetApp.ColorBuilder;
/**Creates a builder for a conditional formatting rule.

```
// Adds a conditional format rule to a sheet that causes all cells in range A1:B3 to turn red
// if they contain a number between 1 and 10.
var sheet = SpreadsheetApp.getActive().getActiveSheet();
var range = sheet.getRange('A1:B3');
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenNumberBetween(1, 10)
    .setBackground("#FF0000")
    .setRanges([range])
    .build()
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);

```
@return the new builder.*/newConditionalFormatRule():SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Creates a builder for a [`DataSourceSpec`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec.html).

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Enables BigQuery.
SpreadsheetApp.enableBigQueryExecution();

// Builds a data source specification.
// TODO (developer): Update the project ID to your own Google Cloud project ID.
const dataSourceSpec = SpreadsheetApp.newDataSourceSpec()
  .asBigQuery()
  .setProjectId('project-id-1')
  .setTableProjectId('bigquery-public-data')
  .setDatasetId('ncaa_basketball')
  .setTableId('mbb_historical_teams_games')
  .build();

// Adds the data source and its data to the spreadsheet.
ss.insertDataSourceSheet(dataSourceSpec);
```
@return The new builder.*/newDataSourceSpec():SpreadsheetApp.DataSourceSpecBuilder;
/**Creates a builder for a data validation rule.

```
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = SpreadsheetApp.newDataValidation()
    .requireNumberBetween(1, 100)
    .setAllowInvalid(false)
    .setHelpText('Number must be between 1 and 100.')
    .build();
cell.setDataValidation(rule);
```
@return The new builder.*/newDataValidation():SpreadsheetApp.DataValidationBuilder;
/**Creates a builder for a [`FilterCriteria`](https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria.html).

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Sets the range to A1:D20.
const range = sheet.getRange('A1:D20');

// Creates a filter and applies it to the specified range.
range.createFilter();

// Gets the current filter for the range and creates filter criteria that only shows cells
// that aren't empty.
const filter = range.getFilter();
const criteria = SpreadsheetApp.newFilterCriteria().whenCellNotEmpty().build();

// Sets the criteria to  column C.
filter.setColumnFilterCriteria(3, criteria);
```
@return the new builder*/newFilterCriteria():SpreadsheetApp.FilterCriteriaBuilder;
/**Creates a builder for a Rich Text value.

```
// Sets cell A1 to have the text "Hello world", with "Hello" bolded.
var cell = SpreadsheetApp.getActive().getRange('A1');
var bold = SpreadsheetApp.newTextStyle().setBold(true).build();
var value = SpreadsheetApp.newRichTextValue()
    .setText("Hello world")
    .setTextStyle(0, 5, bold)
    .build();
cell.setRichTextValue(value);
```
@return The new builder.*/newRichTextValue():SpreadsheetApp.RichTextValueBuilder;
/**Creates a builder for a text style.

```
// Sets range A1:B3 to have red, size 22, bolded, underlined text.
var range = SpreadsheetApp.getActive().getRange('A1:B3');
var style = SpreadsheetApp.newTextStyle()
    .setForegroundColor("red")
    .setFontSize(22)
    .setBold(true)
    .setUnderline(true)
    .build();
range.setTextStyle(style);
```
@return The new builder.*/newTextStyle():SpreadsheetApp.TextStyleBuilder;
/**Opens the spreadsheet that corresponds to the given File object.

```
// Get any starred spreadsheets from Google Drive, then open the spreadsheets and log the name
// of the first sheet within each spreadsheet.
var files = DriveApp.searchFiles(
    'starred = true and mimeType = "' + MimeType.GOOGLE_SHEETS + '"');
while (files.hasNext()) {
  var spreadsheet = SpreadsheetApp.open(files.next());
  var sheet = spreadsheet.getSheets()[0];
  Logger.log(sheet.getName());
}
```
@param file The file to open.
@return the spreadsheet*/open(file:DriveApp.File):SpreadsheetApp.Spreadsheet;
/**Opens the spreadsheet with the given ID. A spreadsheet ID can be extracted from its URL. For
example, the spreadsheet ID in the URL `https://docs.google.com/spreadsheets/d/abc1234567/edit#gid=0` is "abc1234567".

```
// The code below opens a spreadsheet using its ID and logs the name for it.
// Note that the spreadsheet is NOT physically opened on the client side.
// It is opened on the server only (for modification by the script).
var ss = SpreadsheetApp.openById("abc1234567");
Logger.log(ss.getName());
```
@param id The unique identifier for the spreadsheet.
@return the Spreadsheet object with the given id*/openById(id:string):SpreadsheetApp.Spreadsheet;
/**Opens the spreadsheet with the given URL. Throws a scripting exception if the URL doesn't exist
or the user doesn't have permission to access it.

```
// Opens a spreadsheet by its URL and logs its name.
// Note that the spreadsheet doesn't physically open on the client side.
// It opens on the server only (for modification by the script).
var ss = SpreadsheetApp.openByUrl(
    'https://docs.google.com/spreadsheets/d/abc1234567/edit');
console.log(ss.getName());
```
@param url The URL for the spreadsheet.
@return The spreadsheet object with the given URL.*/openByUrl(url:string):SpreadsheetApp.Spreadsheet;
/**Sets the specified range as the [`active range`](https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getActiveRange()), with the top
left cell in the range as the [`current cell`](https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getCurrentCell()).

The spreadsheet UI displays the sheet that contains the chosen range and selects the cells
defined in the chosen range.

```
// The code below sets range C1:D4 in the first sheet as the active range.
var range = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0].getRange('C1:D4');
SpreadsheetApp.setActiveRange(range);

var selection = SpreadsheetApp.getSelection();
// Current cell: C1
var currentCell = selection.getCurrentCell();
// Active Range: C1:D4
var activeRange = selection.getActiveRange();
```
@param range The range to be made the active range.
@return the new active Range*/setActiveRange(range:SpreadsheetApp.Range):SpreadsheetApp.Range;
/**Sets the specified list of ranges as the [`active ranges`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app.html#getActiveRangeList()). The last
range in the list is set as the [`active range`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app.html#getActiveRange()).

```
// The code below sets ranges [D4, B2:C4] in the active sheet as the active ranges.
var rangeList = SpreadsheetApp.getActiveSheet().getRanges(['D4', 'B2:C4']);
SpreadsheetApp.setActiveRangeList(rangeList);

var selection = SpreadsheetApp.getSelection();
// Current cell: B2
var currentCell = selection.getCurrentCell();
// Active range: B2:C4
var activeRange = selection.getActiveRange();
// Active range list: [D4, B2:C4]
var activeRangeList = selection.getActiveRangeList();
```
@param rangeList The list of ranges to select.
@return the newly selected list of ranges*/setActiveRangeList(rangeList:SpreadsheetApp.RangeList):SpreadsheetApp.RangeList;
/**Sets the active sheet in a spreadsheet. The Google Sheets UI displays the chosen sheet unless
the sheet belongs to a different spreadsheet.

```
// The code below makes the 2nd sheet active in the active spreadsheet.
var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
SpreadsheetApp.setActiveSheet(spreadsheet.getSheets()[1]);
```
@param sheet The new active sheet.
@return the sheet that has been made the new active sheet*/setActiveSheet(sheet:SpreadsheetApp.Sheet):SpreadsheetApp.Sheet;
/**Sets the active sheet in a spreadsheet, with the option to restore the most recent selection
within that sheet. The Google Sheets UI displays the chosen sheet unless the sheet belongs to a
different spreadsheet.

```
var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
var firstSheet = spreadsheet.getSheets()[0];
var secondSheet = spreadsheet.getSheets()[1];
// Set the first sheet as the active sheet and select the range D4:F4.
spreadsheet.setActiveSheet(firstSheet).getRange('D4:F4').activate();

// Switch to the second sheet to do some work.
spreadsheet.setActiveSheet(secondSheet);
// Switch back to first sheet, and restore its selection.
spreadsheet.setActiveSheet(firstSheet, true);

// The selection of first sheet is restored, and it logs D4:F4
var range = spreadsheet.getActiveSheet().getSelection().getActiveRange();
Logger.log(range.getA1Notation());
```
@param sheet The new active sheet.
@param restoreSelection If `true`, the most recent selection of the new active sheet
    becomes selected again as the new sheet becomes active; if `false`, the new sheet
    becomes active without changing the current selection.
@return the new active sheet*/setActiveSheet(sheet:SpreadsheetApp.Sheet,restoreSelection:boolean):SpreadsheetApp.Sheet;
/**Sets the active spreadsheet.

```
// The code below makes the spreadsheet with key "1234567890" the active spreadsheet
var ss = SpreadsheetApp.openById("1234567890");
SpreadsheetApp.setActiveSpreadsheet(ss);
```
@param newActiveSpreadsheet The Spreadsheet to be made the active spreadsheet.*/setActiveSpreadsheet(newActiveSpreadsheet:SpreadsheetApp.Spreadsheet):void;
/**Sets the specified cell as the [`current cell`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app.html#getCurrentCell()).

If the specified cell is present in an already selected range, then that range becomes the
active range with the cell as the current cell.

If the specified cell is not present in any selected range, then the existing selection is
removed and the cell becomes the current cell and the active range.

__Note:__The specified [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) must consist of one cell, otherwise this method
throws an exception.

```
// The code below sets the cell B5 in the first sheet as the current cell.
var cell = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0].getRange('B5');
SpreadsheetApp.setCurrentCell(cell);

var selection = SpreadsheetApp.getSelection();
// Current cell: B5
var currentCell = selection.getCurrentCell();
```
@param cell The cell to set as the current cell.
@return the newly set current cell*/setCurrentCell(cell:SpreadsheetApp.Range):SpreadsheetApp.Range;}module SpreadsheetApp{interface WrapStrategy{}interface _WrapStrategy{
/**Clip lines that are longer than the cell width.*/CLIP:WrapStrategy;
/**Overflow lines into the next cell, so long as that cell is empty. If the next cell over is
non-empty, this behaves the same as `CLIP`.*/OVERFLOW:WrapStrategy;
/**Wrap lines that are longer than the cell width onto a new line. Single words that are longer
than a line are wrapped at the character level.*/WRAP:WrapStrategy;}interface ValueType{}interface _ValueType{
/**The value type when the cell contains an image.*/IMAGE:ValueType;}interface ThemeColorType{}interface _ThemeColorType{
/**Represents the first accent color.*/ACCENT1:ThemeColorType;
/**Represents the second accent color.*/ACCENT2:ThemeColorType;
/**Represents the third accent color.*/ACCENT3:ThemeColorType;
/**Represents the fourth accent color.*/ACCENT4:ThemeColorType;
/**Represents the fifth accent color.*/ACCENT5:ThemeColorType;
/**Represents the sixth accent color.*/ACCENT6:ThemeColorType;
/**Represents the color to use for chart's background.*/BACKGROUND:ThemeColorType;
/**Represents the color to use for hyperlinks.*/HYPERLINK:ThemeColorType;
/**Represents the text color.*/TEXT:ThemeColorType;
/**Represents a theme color that is not supported.*/UNSUPPORTED:ThemeColorType;}interface ThemeColor{
/**Get the type of this color.
@return The color type.*/getColorType():ColorType;
/**Gets the theme color type of this color.
@return The theme color type.*/getThemeColorType():SpreadsheetApp.ThemeColorType;}interface TextToColumnsDelimiter{}interface _TextToColumnsDelimiter{
/**`","` delimiter.*/COMMA:TextToColumnsDelimiter;
/**`"."` delimiter.*/PERIOD:TextToColumnsDelimiter;
/**`";"` delimiter.*/SEMICOLON:TextToColumnsDelimiter;
/**`" "` delimiter.*/SPACE:TextToColumnsDelimiter;}interface TextStyleBuilder{
/**Creates a text style from this builder.
@return A text style created from this builder.*/build():SpreadsheetApp.TextStyle;
/**Sets whether or not the text is bold.
@param bold Whether or not the text is bold.
@return The builder for chaining.*/setBold(bold:boolean):SpreadsheetApp.TextStyleBuilder;
/**Sets the text font family, such as "Arial".
@param fontFamily The desired font family.
@return The builder for chaining.*/setFontFamily(fontFamily:string):SpreadsheetApp.TextStyleBuilder;
/**Sets the text font size in points.
@param fontSize The desired font size.
@return The builder for chaining.*/setFontSize(fontSize:Integer):SpreadsheetApp.TextStyleBuilder;
/**Sets the text font color.
@param cssString The desired font color in CSS notation (such as `'#ffffff'` or `'white'`).
@return The builder for chaining.*/setForegroundColor(cssString:string):SpreadsheetApp.TextStyleBuilder;
/**Sets the text font color.
@param color The desired font color.
@return The builder for chaining.*/setForegroundColorObject(color:SpreadsheetApp.Color):SpreadsheetApp.TextStyleBuilder;
/**Sets whether or not the text is italic.
@param italic Whether or not the text is italic.
@return The builder for chaining.*/setItalic(italic:boolean):SpreadsheetApp.TextStyleBuilder;
/**Sets whether or not the text has strikethrough.
@param strikethrough Whether or not the text has strikethrough.
@return The builder for chaining.*/setStrikethrough(strikethrough:boolean):SpreadsheetApp.TextStyleBuilder;
/**Sets whether or not the text is underlined.
@param underline Whether or not the text is underlined.
@return The builder for chaining.*/setUnderline(underline:boolean):SpreadsheetApp.TextStyleBuilder;}interface TextStyle{
/**Creates a text style builder initialized with the values of this text style.
@return A builder from this text style.*/copy():SpreadsheetApp.TextStyleBuilder;
/**Gets the font family of the text. Returns `null` if the font family isn't set or the
corresponding [`RichTextValue`](https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value.html) has multiple runs with different font
families.
@return The font family of the text (for example, "Arial") or `null`.*/getFontFamily():string;
/**Gets the font size of the text in points. Returns `null` if the font size isn't set or
the corresponding [`RichTextValue`](https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value.html) has multiple runs with different font
sizes.
@return The font size of the text or `null`.*/getFontSize():Integer;
/**Gets the font color of the text. Returns `null` if the font color isn't set or the
corresponding [`RichTextValue`](https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value.html) has multiple runs with different font
colors.
@deprecated
@return The font color of the text as a hex CSS value (for example, "#ff0000") or `null`.*/getForegroundColor():string;
/**Gets the font color of the text. Returns `null` if the font color isn't set or the
corresponding [`RichTextValue`](https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value.html) has multiple runs with different font
colors.
@return The font color of the text or `null`.*/getForegroundColorObject():SpreadsheetApp.Color;
/**Gets whether or not the text is bold. Returns `null` if bold isn't set or the
corresponding [`RichTextValue`](https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value.html) has multiple runs with different bold
settings.
@return Whether or not the cell is bold, or `null`.*/isBold():boolean;
/**Gets whether or not the cell is italic. Returns `null` if italic isn't set or the
corresponding [`RichTextValue`](https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value.html) has multiple runs with different italic
settings.
@return Whether or not the cell is italic, or `null`.*/isItalic():boolean;
/**Gets whether or not the cell has strikethrough. Returns `null` if strikethrough isn't set
or the corresponding [`RichTextValue`](https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value.html) has multiple runs with different
strikethrough settings.
@return Whether or not the cell has strikethrough, or `null`.*/isStrikethrough():boolean;
/**Gets whether or not the cell is underlined. Returns `null` if underline isn't set or the
corresponding [`RichTextValue`](https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value.html) has multiple runs with different underline
settings.
@return Whether or not the cell is underlined, or `null`.*/isUnderline():boolean;}interface TextRotation{
/**Gets the angle between standard text orientation and the current text orientation. For
left-to-right text, positive angles are in the counterclockwise direction. If the text is set
to stack vertically, this method returns `0`.
@return The degrees between standard text rotation and the current text rotation.*/getDegrees():Integer;
/**Returns `true` if the text is stacked vertically; returns `false` otherwise.
@return Whether or not the text is stacked vertically.*/isVertical():boolean;}interface TextFinder{
/**Returns all cells matching the search criteria.
@return All the matching cells.*/findAll():SpreadsheetApp.Range[];
/**Returns the next cell matching the search criteria.
@return The next matching cell, or `null` if there are no previous matches.*/findNext():SpreadsheetApp.Range;
/**Returns the previous cell matching the search criteria.
@return The previous matching cell, or `null` if there are no previous matches.*/findPrevious():SpreadsheetApp.Range;
/**Returns the current cell matching the search criteria.
@return The current matching cell, or `null` if there are no further matches.*/getCurrentMatch():SpreadsheetApp.Range;
/**If `true`, configures the search to ignore diacritics while matching; otherwise the
search matches diacritics. A diacritic is a sign, such as an accent or cedilla, which when
written above or below a letter indicates a difference in pronunciation from the same letter
when unmarked or differently marked.
@param ignoreDiacritics Whether the search considers diacritics.
@return This text finder, for chaining.*/ignoreDiacritics(ignoreDiacritics:boolean):SpreadsheetApp.TextFinder;
/**If `true`, configures the search to match the search text's case exactly, otherwise the
search defaults to case-insensitive matching.
@param matchCase Whether the matching is case-sensitive.
@return This text finder, for chaining.*/matchCase(matchCase:boolean):SpreadsheetApp.TextFinder;
/**If `true`, configures the search to match the entire contents of a cell; otherwise, the
search defaults to partial matching.
@param matchEntireCell Whether the entire cell is matched.
@return This text finder, for chaining.*/matchEntireCell(matchEntireCell:boolean):SpreadsheetApp.TextFinder;
/**If `true`, configures the search to return matches that appear within formula text;
otherwise cells with formulas are considered based on their displayed value.
@param matchFormulaText Whether the search examines formula text.
@return This text finder, for chaining.*/matchFormulaText(matchFormulaText:boolean):SpreadsheetApp.TextFinder;
/**Replaces all matches with the specified text. Returns the number of occurrences replaced, which
may be different from the number of matched cells.
@param replaceText The text that replaces the text in the matched cells.
@return The number of occurrences replaced.*/replaceAllWith(replaceText:string):Integer;
/**Replaces the search text in the currently matched cell with the specified text and returns the
number of occurrences replaced.
@param replaceText The text that replaces the content in the currently matched cell.
@return The number of occurrences replaced.*/replaceWith(replaceText:string):Integer;
/**Configures the search to start searching immediately after the specified cell range.
@param startRange The cell range after which the search should start.
@return This text finder, for chaining.*/startFrom(startRange:SpreadsheetApp.Range):SpreadsheetApp.TextFinder;
/**If `true`, configures the search to interpret the search string as a regular expression;
otherwise the search interprets the search string as normal text. For more details on how to
use regular expressions, refer to the [
Find and replace support page.](https://support.google.com/docs/answer/62754?p=spreadsheets_find_replace&visit_id=1-636603693162634183-3185740572&rd=1)
@param useRegEx Whether to interpret the search string as a regular expression.
@return This text finder, for chaining.*/useRegularExpression(useRegEx:boolean):SpreadsheetApp.TextFinder;}interface TextDirection{}interface _TextDirection{
/**Left-to-right text direction.*/LEFT_TO_RIGHT:TextDirection;
/**Right-to-left text direction.*/RIGHT_TO_LEFT:TextDirection;}interface SpreadsheetTheme{
/**Returns the concrete [`Color`](https://developers.google.com/apps-script/reference/spreadsheet/color.html) for a valid theme color type. Throws exception if the theme
color type is not set in the current theme.
@param themeColorType Theme color type.
@return Concrete color.*/getConcreteColor(themeColorType:SpreadsheetApp.ThemeColorType):SpreadsheetApp.Color;
/**Returns the font family of the theme, or `null` if it's a `null` theme.
@return The theme font family.*/getFontFamily():string;
/**Returns a list of all possible theme color types for the current theme.
@return A list of theme colors.*/getThemeColors():SpreadsheetApp.ThemeColorType[];
/**Sets the concrete color associated with the [`ThemeColorType`](https://developers.google.com/apps-script/reference/spreadsheet/theme-color-type.html) in this color scheme to the
given color in RGB format.
@param themeColorType The theme color type.
@param red The value of red channel.
@param green The value of green channel.
@param blue The value of blue channel.
@return The theme, for chaining.*/setConcreteColor(themeColorType:SpreadsheetApp.ThemeColorType,red:Integer,green:Integer,blue:Integer):SpreadsheetApp.SpreadsheetTheme;
/**Sets the concrete color associated with the [`ThemeColorType`](https://developers.google.com/apps-script/reference/spreadsheet/theme-color-type.html) in this color scheme to the
given color.
@param themeColorType The theme color type.
@param color The color.
@return The theme, for chaining.*/setConcreteColor(themeColorType:SpreadsheetApp.ThemeColorType,color:SpreadsheetApp.Color):SpreadsheetApp.SpreadsheetTheme;
/**Sets the font family for the theme.
@param fontFamily The new theme font family.
@return This theme, for chaining.*/setFontFamily(fontFamily:string):SpreadsheetApp.SpreadsheetTheme;}interface Spreadsheet{
/**Adds developer metadata with the specified key to the top-level spreadsheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Adds the key 'NAME' in the developer metadata for the spreadsheet.
ss.addDeveloperMetadata('NAME')

// Gets the first developer metadata object and logs its key.
const developerMetaData = ss.getDeveloperMetadata()[0]
console.log(developerMetaData.getKey())
```
@param key The key for the new developer metadata.
@return This spreadsheet, for chaining.*/addDeveloperMetadata(key:string):SpreadsheetApp.Spreadsheet;
/**Adds developer metadata with the specified key and visibility to the spreadsheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Adds the key 'NAME' in the developer metadata for the spreadsheet and sets the visibility
// to the developer project that created the metadata.
ss.addDeveloperMetadata('NAME', SpreadsheetApp.DeveloperMetadataVisibility.PROJECT);

// Gets the first developer metadata object and logs its key and visibility setting.
const developerMetaData = ss.getDeveloperMetadata()[0];
console.log(developerMetaData.getKey());
console.log(`Key: ${developerMetaData.getKey()},
.             Visibility: ${developerMetaData.getVisibility()}`);
```
@param key The key for the new developer metadata.
@param visibility The visibility of the new developer metadata.
@return This spreadsheet, for chaining.*/addDeveloperMetadata(key:string,visibility:SpreadsheetApp.DeveloperMetadataVisibility):SpreadsheetApp.Spreadsheet;
/**Adds developer metadata with the specified key and value to the spreadsheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Adds the key 'NAME' and sets the value to 'GOOGLE' in the developer metadata for the
// spreadsheet.
ss.addDeveloperMetadata('NAME', 'GOOGLE');

// Gets the first developer metadata object and logs its key and value.
const developerMetaData = ss.getDeveloperMetadata()[0];
console.log(developerMetaData.getKey());
console.log(`Key: ${developerMetaData.getKey()}, Value: ${developerMetaData.getValue()}`);
```
@param key The key for the new developer metadata.
@param value The value for the new developer metadata.
@return This spreadsheet, for chaining.*/addDeveloperMetadata(key:string,value:string):SpreadsheetApp.Spreadsheet;
/**Adds developer metadata with the specified key, value, and visibility to the spreadsheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Adds the key 'NAME', sets the value to 'GOOGLE', and sets the visibility
// to any developer project with document access.
ss.addDeveloperMetadata('NAME', 'GOOGLE', SpreadsheetApp.DeveloperMetadataVisibility.DOCUMENT);

// Gets the first developer metadata object and logs its key, value, and visibility setting.
const developerMetaData = ss.getDeveloperMetadata()[0];
console.log(`Key: ${developerMetaData.getKey()},
             Value: ${developerMetaData.getValue()},
             Visibility: ${developerMetaData.getVisibility()}`);
```
@param key The key for the new developer metadata.
@param value The value for the new developer metadata.
@param visibility The visibility of the new developer metadata.
@return This spreadsheet, for chaining.*/addDeveloperMetadata(key:string,value:string,visibility:SpreadsheetApp.DeveloperMetadataVisibility):SpreadsheetApp.Spreadsheet;
/**Adds the given user to the list of editors for the [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html). If the user was already
on the list of viewers, this method promotes the user out of the list of viewers.
@param emailAddress The email address of the user to add.
@return This [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html), for chaining.*/addEditor(emailAddress:string):SpreadsheetApp.Spreadsheet;
/**Adds the given user to the list of editors for the [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html). If the user was already
on the list of viewers, this method promotes the user out of the list of viewers.
@param user A representation of the user to add.
@return This [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html), for chaining.*/addEditor(user:User):SpreadsheetApp.Spreadsheet;
/**Adds the given array of users to the list of editors for the [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html). If any of the
users were already on the list of viewers, this method promotes them out of the list of
viewers.
@param emailAddresses An array of email addresses of the users to add.
@return This [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html), for chaining.*/addEditors(emailAddresses:string[]):SpreadsheetApp.Spreadsheet;
/**Creates a new menu in the Spreadsheet UI.

Each menu entry runs a user-defined function. Usually, you want to call it from the `onOpen()` function so that the menu is automatically created when the spreadsheet is loaded.

```
// The onOpen function is executed automatically every time a Spreadsheet is loaded
function onOpen() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var menuEntries = [];
  // When the user clicks on "addMenuExample" then "Menu Entry 1", the function function1 is
  // executed.
  menuEntries.push({name: "Menu Entry 1", functionName: "function1"});
  menuEntries.push(null); // line separator
  menuEntries.push({name: "Menu Entry 2", functionName: "function2"});

  ss.addMenu("addMenuExample", menuEntries);
}
```
@param name The name of the menu to be created.
@param subMenus An array of JavaScript maps with `name` and `functionName` parameters. You can use functions from included libraries, such as 

```
    Library.libFunction1```

.*/addMenu(name:string,subMenus:Object[]):void;
/**Adds the given user to the list of viewers for the [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html). If the user was already
on the list of editors, this method has no effect.
@param emailAddress The email address of the user to add.
@return This [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html), for chaining.*/addViewer(emailAddress:string):SpreadsheetApp.Spreadsheet;
/**Adds the given user to the list of viewers for the [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html). If the user was already
on the list of editors, this method has no effect.
@param user A representation of the user to add.
@return This [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html), for chaining.*/addViewer(user:User):SpreadsheetApp.Spreadsheet;
/**Adds the given array of users to the list of viewers for the [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html). If any of the
users were already on the list of editors, this method has no effect for them.
@param emailAddresses An array of email addresses of the users to add.
@return This [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html), for chaining.*/addViewers(emailAddresses:string[]):SpreadsheetApp.Spreadsheet;
/**Appends a row to the bottom of the current data region in the sheet. If a cell's content begins
with `=`, it's interpreted as a formula.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Appends a new row with 3 columns to the bottom of the current
// data region in the sheet containing the values in the array.
sheet.appendRow(["a man", "a plan", "panama"]);
```
@param rowContents An array of values to insert after the last row in the sheet.
@return The sheet, useful for method chaining.*/appendRow(rowContents:Object[]):SpreadsheetApp.Sheet;
/**Sets the width of the given column to fit its contents.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

sheet.getRange('a1').setValue('Whenever it is a damp, drizzly November in my soul...');

// Sets the first column to a width which fits the text
sheet.autoResizeColumn(1);
```
@param columnPosition The position of the given column to resize.
@return the sheet, useful for method chaining*/autoResizeColumn(columnPosition:Integer):SpreadsheetApp.Sheet;
/**Copies the spreadsheet and returns the new one.

```
// This code makes a copy of the current spreadsheet and names it appropriately
var ss = SpreadsheetApp.getActiveSpreadsheet();
ss.copy("Copy of " + ss.getName());
```
@param name The name of the copy.
@return This spreadsheet, for chaining.*/copy(name:string):SpreadsheetApp.Spreadsheet;
/**Returns a [`DeveloperMetadataFinder`](https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata-finder.html) for finding developer metadata within the scope of
this spreadsheet. By default this considers all metadata associated with the spreadsheet,
sheets, rows, and columns.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Adds developer metadata to the spreadsheet.
ss.addDeveloperMetadata('NAME', 'CHARLIE');
ss.addDeveloperMetadata('COMPANY', 'EXAMPLE ORGANIZATION');
ss.addDeveloperMetadata('TECHNOLOGY', 'JAVASCRIPT');

// Creates a developer metadata finder.
const developerMetadataFinder = ss.createDeveloperMetadataFinder();

// Finds the developer metadata objects with 'COMPANY' as the key.
const googleMetadataFromSpreadsheet = developerMetadataFinder.withKey('COMPANY').find();

// Gets the first result of developer metadata that has the key 'COMPANY' and logs its value.
console.log(googleMetadataFromSpreadsheet[0].getValue());
```
@return A developer metadata finder to search for metadata in the scope of this spreadsheet.*/createDeveloperMetadataFinder():SpreadsheetApp.DeveloperMetadataFinder;
/**Creates a text finder for the spreadsheet, which can be used to find and replace text within
the spreadsheet. The search starts from the first sheet of the spreadsheet.

```
var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

// Creates  a text finder.
var textFinder = spreadsheet.createTextFinder('dog');

// Returns the first occurrence of 'dog' in the spreadsheet.
var firstOccurrence = textFinder.findNext();

// Replaces the last found occurrence of 'dog' with 'cat' and returns the number
// of occurrences replaced.
var numOccurrencesReplaced = findOccurrence.replaceWith('cat');
```
@param findText The text to search for.
@return The [`TextFinder`](https://developers.google.com/apps-script/reference/spreadsheet/text-finder.html) for the spreadsheet.*/createTextFinder(findText:string):SpreadsheetApp.TextFinder;
/**Deletes the currently active sheet.

```
// The code below deletes the currently active sheet and stores the new active sheet in a
// variable
var newSheet = SpreadsheetApp.getActiveSpreadsheet().deleteActiveSheet();
```
@return The new active sheet.*/deleteActiveSheet():SpreadsheetApp.Sheet;
/**Deletes the column at the given column position.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
// Columns start at "1" - this deletes the first column
sheet.deleteColumn(1);
```
@param columnPosition The position of the column, starting at 1 for the first column.
@return the sheet, useful for method chaining*/deleteColumn(columnPosition:Integer):SpreadsheetApp.Sheet;
/**Deletes a number of columns starting at the given column position.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
// Columns start at "1" - this deletes the first two columns
sheet.deleteColumns(1, 2);
```
@param columnPosition The position of the first column to delete.
@param howMany The number of columns to delete.*/deleteColumns(columnPosition:Integer,howMany:Integer):void;
/**Deletes the row at the given row position.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
// Rows start at "1" - this deletes the first row
sheet.deleteRow(1);
```
@param rowPosition The position of the row, starting at 1 for the first row.
@return the sheet, useful for method chaining*/deleteRow(rowPosition:Integer):SpreadsheetApp.Sheet;
/**Deletes a number of rows starting at the given row position.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
// Rows start at "1" - this deletes the first two rows
sheet.deleteRows(1, 2);
```
@param rowPosition The position of the first row to delete.
@param howMany The number of rows to delete.*/deleteRows(rowPosition:Integer,howMany:Integer):void;
/**Deletes the specified sheet.

```
// The code below deletes the specified sheet.
var ss = SpreadsheetApp.getActive();
var sheet = ss.getSheetByName('My Sheet');
ss.deleteSheet(sheet);
```
@param sheet The sheet to delete.*/deleteSheet(sheet:SpreadsheetApp.Sheet):void;
/**Duplicates the active sheet and makes it the active sheet.

```
// The code below makes a duplicate of the active sheet
SpreadsheetApp.getActiveSpreadsheet().duplicateActiveSheet();
```
@return The new sheet.*/duplicateActiveSheet():SpreadsheetApp.Sheet;
/**Returns the active cell in this sheet.

__Note:__ It's preferable to use [`getCurrentCell()`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#getCurrentCell()), which returns the current
highlighted cell.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
// Returns the active cell
var cell = sheet.getActiveCell();
```
@return the current active cell*/getActiveCell():SpreadsheetApp.Range;
/**Returns the selected range in the active sheet, or `null` if there is no active range. If
multiple ranges are selected this method returns only the last selected range.

The term "active range" refers to the range that a user has selected in the active sheet,
but in a custom function it refers to the cell being actively recalculated.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
var activeRange = sheet.getActiveRange();
```
@return the active range*/getActiveRange():SpreadsheetApp.Range;
/**Returns the list of active ranges in the active sheet or `null` if there are no active
ranges.

If there is a single range selected, this behaves as a [`getActiveRange()`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#getActiveRange()) call.

```
var sheet = SpreadsheetApp.getActiveSheet();
// Returns the list of active ranges.
var activeRangeList = sheet.getActiveRangeList();
```
@return the list of active ranges*/getActiveRangeList():SpreadsheetApp.RangeList;
/**Gets the active sheet in a spreadsheet.

The active sheet in a spreadsheet is the sheet that is being displayed in the spreadsheet
UI.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
```
@return The active sheet in the spreadsheet.*/getActiveSheet():SpreadsheetApp.Sheet;
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
/**Returns all the bandings in this spreadsheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets spreadsheet, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets an array of the bandings in the spreadsheet.
const bandings = ss.getBandings();

// Logs the range of the first banding in the spreadsheet to the console.
console.log(bandings[0].getRange().getA1Notation());
```
@return The bandings in this spreadsheet.*/getBandings():SpreadsheetApp.Banding[];
/**Return the data inside this object as a blob.
@return The data as a blob.*/getBlob():Blob;
/**Gets the width in pixels of the given column.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Columns start at 1
Logger.log(sheet.getColumnWidth(1));
```
@param columnPosition The position of the column to examine.
@return column width in pixels*/getColumnWidth(columnPosition:Integer):Integer;
/**Returns the current cell in the active sheet or `null` if there is no current cell. The
current cell is the cell that has focus in the Google Sheets UI, and is highlighted by a dark
border. There is never more than one current cell. When a user selects one or more cell ranges,
one of the cells in the selection is the current cell.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
// Returns the current highlighted cell in the one of the active ranges.
var currentCell = sheet.getCurrentCell();
```
@return the current cell*/getCurrentCell():SpreadsheetApp.Range;
/**Returns a [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) corresponding to the dimensions in which data is present.

This is functionally equivalent to creating a Range bounded by A1 and
(Sheet.getLastColumn(), Sheet.getLastRow()).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This represents ALL the data
var range = sheet.getDataRange();
var values = range.getValues();

// This logs the spreadsheet in CSV format with a trailing comma
for (var i = 0; i < values.length; i++) {
  var row = "";
  for (var j = 0; j < values[i].length; j++) {
    if (values[i][j]) {
      row = row + values[i][j];
    }
    row = row + ",";
  }
  Logger.log(row);
}
```
@return a range consisting of all the data in the spreadsheet*/getDataRange():SpreadsheetApp.Range;
/**Gets all the data source formulas.

```
// Opens the spreadsheet by its ID. If you created your script from within a Google Sheets
// file, use SpreadsheetApp.getActiveSpreadsheet().
// TODO(developer): Replace the ID with your own.
const ss = SpreadsheetApp.openById('abc123456');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets an array of the data source formulas on Sheet1.
// To get an array of data source formulas for the entire spreadsheet,
// replace 'sheet' with 'ss'.
const dataSourceFormulas = sheet.getDataSourceFormulas();

// Logs the first data source formula in the array.
console.log(dataSourceFormulas[0].getFormula());
```
@return A list of data source formulas.*/getDataSourceFormulas():SpreadsheetApp.DataSourceFormula[];
/**Gets all the data source pivot tables.

```
// Opens the spreadsheet file by its ID. If you created your script from a Google Sheets file,
// use SpreadsheetApp.getActiveSpreadsheet().
// TODO(developer): Replace the ID with your own.
const ss = SpreadsheetApp.openById('abc123456');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets an array of the data source pivot tables on Sheet1.
// To get an array of data source pivot tables for the entire
// spreadsheet, replace 'sheet' with 'ss'.
const dataSourcePivotTables = sheet.getDataSourcePivotTables();

// Logs the last time that the first pivot table in the array was refreshed.
console.log(dataSourcePivotTables[0].getStatus().getLastRefreshedTime());
```
@return A list of data source pivot tables.*/getDataSourcePivotTables():SpreadsheetApp.DataSourcePivotTable[];
/**Gets the refresh schedules of this spreadsheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Activates BigQuery operations for the connected spreadsheet.
SpreadsheetApp.enableBigQueryExecution();

// Gets the frequency type of the first referesh schedule in the array.
const frequencyType = ss.getDataSourceRefreshSchedules()[0]
                        .getFrequency()
                        .getFrequencyType()
                        .toString();

// Logs the frequency type to the console.
console.log(frequencyType);
```
@return The refresh schedules of this spreadsheet.*/getDataSourceRefreshSchedules():SpreadsheetApp.DataSourceRefreshSchedule[];
/**Returns all the data source sheets in the spreadsheet.

```
// Turns data execution on for BigQuery data sources.
SpreadsheetApp.enableBigQueryExecution();

// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets spreadsheet, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets the first data source sheet in the spreadsheet.
const dataSource = ss.getDataSourceSheets()[0];

// Gets the name of the data source sheet.
console.log(dataSource.asSheet().getName());
```
@return An array of all the data source sheets.*/getDataSourceSheets():SpreadsheetApp.DataSourceSheet[];
/**Gets all the data source tables.

```
// Opens the spreadsheet file by its ID. If you created your script from a Google Sheets file,
// use SpreadsheetApp.getActiveSpreadsheet().
// TODO(developer): Replace the ID with your own.
const ss = SpreadsheetApp.openById('abc123456');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets an array of data source tables on Sheet1.
// To get an array of data source tables for the entire spreadsheet,
// replace 'sheet' with 'ss'.
const dataSourceTables = sheet.getDataSourceTables();

// Logs the last completed data execution time on the first data source table.
console.log(dataSourceTables[0].getStatus().getLastExecutionTime());
```
@return A list of data source tables.*/getDataSourceTables():SpreadsheetApp.DataSourceTable[];
/**Returns all the data sources in the spreadsheet.

```
// Turns data execution on for BigQuery data sources.
SpreadsheetApp.enableBigQueryExecution();

// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets spreadsheet, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets the data sources on the spreadsheet.
const dataSources = ss.getDataSources();

// Logs the name of the first column on the first data source.
console.log(dataSources[0].getColumns()[0].getName());
```
@return An array of all the data sources.*/getDataSources():SpreadsheetApp.DataSource[];
/**Gets the developer metadata associated with the top-level spreadsheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets spreadsheet, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Adds 'Google' as a key to the spreadsheet metadata.
ss.addDeveloperMetadata('Google');

// Gets the spreadsheet's metadata.
const ssMetadata = ss.getDeveloperMetadata();

// Gets the first set of the spreadsheet's metadata and logs the key to the console.
console.log(ssMetadata[0].getKey());
```
@return The developer metadata associated with this range.*/getDeveloperMetadata():SpreadsheetApp.DeveloperMetadata[];
/**Gets the list of editors for this [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html).
@return An array of users with edit permission.*/getEditors():User[];
/**Returns the URL for the form that sends its responses to this spreadsheet, or `null` if
this spreadsheet has no associated form. If multiple forms send responses to this spreadsheet,
the form URL returned is indeterminate. As an alternative, per sheet form URL associations can
be retrieved through the [`Sheet.getFormUrl()`](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getFormUrl()) method.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets spreadsheet, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets the form URL from the spreadsheet.
const formUrl = ss.getFormUrl();

// Logs the form URL to the console.
console.log(formUrl);
```
@return The URL for the form that places its responses in this spreadsheet, or `null` if
    this spreadsheet doesn't have an associated form.*/getFormUrl():string;
/**Returns the number of frozen columns.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

Logger.log("Number of frozen columns: %s", sheet.getFrozenColumns());
```
@return the number of frozen columns*/getFrozenColumns():Integer;
/**Returns the number of frozen rows.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

Logger.log("Number of frozen rows: %s", sheet.getFrozenRows());
```
@return the number of frozen rows*/getFrozenRows():Integer;
/**Gets a unique identifier for this spreadsheet. A spreadsheet ID can be extracted from its URL.
For example, the spreadsheet ID in the URL
https://docs.google.com/spreadsheets/d/abc1234567/edit#gid=0 is "abc1234567".

```
// The code below logs the ID for the active spreadsheet.
Logger.log(SpreadsheetApp.getActiveSpreadsheet().getId());
```
@return The unique ID (or key) for the spreadsheet.*/getId():string;
/**Returns all over-the-grid images on the sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets spreadsheet, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the over-the-grid images from Sheet1.
// To get the over-the-grid images from the entire spreadsheet, use ss.getImages() instead.
const images = sheet.getImages();

// For each image, logs the anchor cell in A1 notation.
for (const image of images) {
 console.log(image.getAnchorCell().getA1Notation());
}
```
@return An array of over-the-grid images.*/getImages():SpreadsheetApp.OverGridImage[];
/**Returns the threshold value used during iterative calculation. When the results of successive
calculation differ by less than this value, the iterative calculation stops.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets spreadsheet, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Sets the iterative calculation convergence threshold for the spreadsheet.
ss.setIterativeCalculationConvergenceThreshold(2);

// Logs the threshold to the console.
console.log(ss.getIterativeCalculationConvergenceThreshold());
```
@return The convergence threshold.*/getIterativeCalculationConvergenceThreshold():number;
/**Returns the position of the last column that has content.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This logs the value in the very last cell of this sheet
var lastRow = sheet.getLastRow();
var lastColumn = sheet.getLastColumn();
var lastCell = sheet.getRange(lastRow, lastColumn);
Logger.log(lastCell.getValue());
```
@return the last column of the sheet that contains content*/getLastColumn():Integer;
/**Returns the position of the last row that has content.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This logs the value in the very last cell of this sheet
var lastRow = sheet.getLastRow();
var lastColumn = sheet.getLastColumn();
var lastCell = sheet.getRange(lastRow, lastColumn);
Logger.log(lastCell.getValue());
```
@return the last row of the sheet that contains content*/getLastRow():Integer;
/**Returns the maximum number of iterations to use during iterative calculation.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets spreadsheet, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Sets the max iterative calculation cycles for the spreadsheet.
ss.setMaxIterativeCalculationCycles(10);

// Logs the max iterative calculation cycles to the console.
console.log(ss.getMaxIterativeCalculationCycles());
```
@return The maximum number of calculation iterations.*/getMaxIterativeCalculationCycles():Integer;
/**Gets the name of the document.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
Logger.log(ss.getName());
```
@return The name of the spreadsheet.*/getName():string;
/**Gets all the named ranges in this spreadsheet.

```
// The code below logs the name of the first named range.
var namedRanges = SpreadsheetApp.getActiveSpreadsheet().getNamedRanges();
for (var i = 0; i < namedRanges.length; i++) {
  Logger.log(namedRanges[i].getName());
}
```
@return An array of all the named ranges in the spreadsheet.*/getNamedRanges():SpreadsheetApp.NamedRange[];
/**Returns the number of sheets in this spreadsheet.

```
// The code below logs the number of sheets in the active spreadsheet.
Logger.log(SpreadsheetApp.getActiveSpreadsheet().getNumSheets());
```
@return The number of sheets in the spreadsheet.*/getNumSheets():Integer;
/**Returns the owner of the document, or `null` for a document in a shared drive.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var owner = ss.getOwner();
Logger.log(owner.getEmail());
```
@return The owner of the document, or `null` if the document is in a shared drive.*/getOwner():User;
/**Returns the list of predefined themes.

```
// The code below returns the list of predefined themes.
var predefinedThemesList = SpreadsheetApp.getActiveSpreadsheet()
                               .getPredefinedSpreadsheetThemes();
```
@return List of predefined themes.*/getPredefinedSpreadsheetThemes():SpreadsheetApp.SpreadsheetTheme[];
/**Gets an array of objects representing all protected ranges or sheets in the spreadsheet.

```
// Remove all range protections in the spreadsheet that the user has permission to edit.
var ss = SpreadsheetApp.getActive();
var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);
for (var i = 0; i < protections.length; i++) {
  var protection = protections[i];
  if (protection.canEdit()) {
    protection.remove();
  }
}
```

```
// Remove all sheet protections in the spreadsheet that the user has permission to edit.
var ss = SpreadsheetApp.getActive();
var protections = ss.getProtections(SpreadsheetApp.ProtectionType.SHEET);
for (var i = 0; i < protections.length; i++) {
  var protection = protections[i];
  if (protection.canEdit()) {
    protection.remove();
  }
}
```
@param type The type of protected area, either `SpreadsheetApp.ProtectionType.RANGE` or
    `SpreadsheetApp.ProtectionType.SHEET`.
@return An array of objects representing all protected ranges or sheets in the spreadsheet.*/getProtections(type:SpreadsheetApp.ProtectionType):SpreadsheetApp.Protection[];
/**Returns the range as specified in A1 notation or R1C1 notation.

```
// Get a range A1:D4 on sheet titled "Invoices"
var ss = SpreadsheetApp.getActiveSpreadsheet();
var range = ss.getRange("Invoices!A1:D4");

// Get cell A1 on the first sheet
var sheet = ss.getSheets()[0];
var cell = sheet.getRange("A1");
```
@param a1Notation The range to return, as specified in A1 notation or R1C1 notation.
@return the range at the location designated*/getRange(a1Notation:string):SpreadsheetApp.Range;
/**Returns a named range, or `null` if no range with the given name is found. If multiple
sheets of the spreadsheet use the same range name, specify the sheet name without additional
quotation marks — for example, `getRangeByName('TaxRates')` or `getRangeByName('Sheet Name!TaxRates')`, but not `getRangeByName('"Sheet
Name"!TaxRates')`.

```
// Log the number of columns for the range named 'TaxRates' in the active spreadsheet.
var range = SpreadsheetApp.getActiveSpreadsheet().getRangeByName('TaxRates');
if (range != null) {
  Logger.log(range.getNumColumns());
}
```
@param name The name of the range to get.
@return The range of cells with the given name.*/getRangeByName(name:string):SpreadsheetApp.Range;
/**Returns the [`RangeList`](https://developers.google.com/apps-script/reference/spreadsheet/range-list.html) collection representing the ranges in the same sheet specified
by a non-empty list of A1 notations or R1C1 notations.

```
// Get a list of ranges A1:D4, F1:H4.
var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
var rangeList  = sheet.getRangeList(['A1:D4', 'F1:H4']);
```
@param a1Notations The list of ranges to return, as specified in A1 notation or R1C1 notation.
@return the range list at the location designated*/getRangeList(a1Notations:string[]):SpreadsheetApp.RangeList;
/**Returns the calculation interval for this spreadsheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets spreadsheet, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Logs the calculation interval for the spreadsheet to the console.
console.log(ss.getRecalculationInterval().toString());
```
@return The calculation interval for this spreadsheet.*/getRecalculationInterval():SpreadsheetApp.RecalculationInterval;
/**Gets the height in pixels of the given row.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Rows start at 1
Logger.log(sheet.getRowHeight(1));
```
@param rowPosition The position of the row to examine.
@return row height in pixels*/getRowHeight(rowPosition:Integer):Integer;
/**Returns the current [`Selection`](https://developers.google.com/apps-script/reference/spreadsheet/selection.html) in the spreadsheet.

```
var selection = SpreadsheetApp.getActiveSpreadsheet().getSelection();
var currentCell = selection.getCurrentCell();
```
@return the current selection*/getSelection():SpreadsheetApp.Selection;
/**Returns a sheet with the given name.

If multiple sheets have the same name, the leftmost one is returned. Returns `null` if
there is no sheet with the given name.

```
// The code below logs the index of a sheet named "Expenses"
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Expenses");
if (sheet != null) {
  Logger.log(sheet.getIndex());
}
```
@param name The name of the sheet to get.
@return The sheet with the given name.*/getSheetByName(name:string):SpreadsheetApp.Sheet;
/**Returns the ID of the sheet represented by this object.

This is an ID for the sheet that is unique to the spreadsheet. The ID is a monotonically
increasing integer assigned at sheet creation time that is independent of sheet position. This
is useful in conjunction with methods such as [`Range.copyFormatToRange(gridId, column, columnEnd, row, rowEnd)`](https://developers.google.com/apps-script/reference/spreadsheet/range.html#copyFormatToRange(Integer,Integer,Integer,Integer,Integer)) that take a `gridId` parameter rather than a [`Sheet`](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html) instance.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

Logger.log(sheet.getSheetId());
```
@return an ID for the sheet unique to the spreadsheet*/getSheetId():Integer;
/**Returns the sheet name.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

Logger.log(sheet.getSheetName());
```
@return the name of the sheet*/getSheetName():string;
/**Returns a ~~[`PageProtection`](https://developers.google.com/apps-script/reference/spreadsheet/page-protection.html)~~ instance describing the permissions for the current sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var permissions = sheet.getSheetProtection();

permissions.setProtected(true);
permissions.addUser("user@example.com");

// Logs the users that have access to edit this sheet. Note that this
// is different from access to the entire spreadsheet - getUsers()
// only returns users if permissions.isProtected() is set to true.
var users = permissions.getUsers();
Logger.log(users);
```
@deprecated
@return an object describing sheet access permissions*/getSheetProtection():SpreadsheetApp.PageProtection;
/**Returns the rectangular grid of values for this range starting at the given coordinates. A -1
value given as the row or column position is equivalent to getting the very last row or column
that has data in the sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// The two samples below produce the same output
var values = sheet.getSheetValues(1, 1, 3, 3);
Logger.log(values);

var range = sheet.getRange(1, 1, 3, 3);
values = range.getValues();
Logger.log(values);
```
@param startRow The position of the starting row.
@param startColumn The position of the starting column.
@param numRows The number of rows to return values for.
@param numColumns The number of columns to return values for.
@return a two-dimensional array of values*/getSheetValues(startRow:Integer,startColumn:Integer,numRows:Integer,numColumns:Integer):Object[][];
/**Gets all the sheets in this spreadsheet.

```
// The code below logs the name of the second sheet
var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
if (sheets.length > 1) {
  Logger.log(sheets[1].getName());
}
```
@return An array of all the sheets in the spreadsheet.*/getSheets():SpreadsheetApp.Sheet[];
/**Gets the spreadsheet locale.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets spreadsheet, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets the spreadsheet locale.
const ssLocale = ss.getSpreadsheetLocale();

// Logs the locale to the console.
console.log(ssLocale);
```
@return The spreadsheet locale.*/getSpreadsheetLocale():string;
/**Returns the current theme of the spreadsheet, or `null` if no theme is applied.

```
// The code below returns the current theme of the spreadsheet.
var currentTheme = SpreadsheetApp.getActiveSpreadsheet().getSpreadsheetTheme();
```
@return The current applied theme.*/getSpreadsheetTheme():SpreadsheetApp.SpreadsheetTheme;
/**Gets the time zone for the spreadsheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets spreadsheet, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Sets the time zone of the spreadsheet.
ss.setSpreadsheetTimeZone('America/New_York');

// Gets the time zone of the spreadsheet.
const ssTimeZone = ss.getSpreadsheetTimeZone();

// Logs the time zone to the console.
console.log(ssTimeZone);
```
@return The time zone, specified in "long" format (for example, "America/New_York", as listed
    by [Joda.org](http://joda-time.sourceforge.net/timezones.html)).*/getSpreadsheetTimeZone():string;
/**Returns the URL for the given spreadsheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
Logger.log(ss.getUrl());
```
@return The URL for the given spreadsheet.*/getUrl():string;
/**Gets the list of viewers and commenters for this [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html).
@return An array of users with view or comment permission.*/getViewers():User[];
/**Hides the column or columns in the given range.

```
let ss = SpreadsheetApp.getActiveSpreadsheet();
let sheet = ss.getSheets()[0];

// This hides the first column
let range = sheet.getRange("A1");
sheet.hideColumn(range);

// This hides the first 3 columns
let range = sheet.getRange("A:C");
sheet.hideColumn(range);
```
@param column The column range to hide.*/hideColumn(column:SpreadsheetApp.Range):void;
/**Hides the rows in the given range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This hides the first row
var range = sheet.getRange("A1");
sheet.hideRow(range);
```
@param row The row range to hide.*/hideRow(row:SpreadsheetApp.Range):void;
/**Inserts a column after the given column position.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This inserts a column after the first column position
sheet.insertColumnAfter(1);
```
@param afterPosition The column after which the new column should be added.
@return the sheet, useful for method chaining*/insertColumnAfter(afterPosition:Integer):SpreadsheetApp.Sheet;
/**Inserts a column before the given column position.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This inserts a column in the first column position
sheet.insertColumnBefore(1);
```
@param beforePosition The column before which the new column should be added.
@return the sheet, useful for method chaining*/insertColumnBefore(beforePosition:Integer):SpreadsheetApp.Sheet;
/**Inserts a given number of columns after the given column position.

```
let ss = SpreadsheetApp.getActiveSpreadsheet();
let sheet = ss.getSheets()[0];

// Inserts two columns after the first column on the first sheet of the spreadsheet.
sheet.insertColumnsAfter(1,2);
```
@param afterPosition The column after which the new column should be added.
@param howMany The number of columns to insert.
@return the sheet, useful for method chaining*/insertColumnsAfter(afterPosition:Integer,howMany:Integer):SpreadsheetApp.Sheet;
/**Inserts a number of columns before the given column position.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This inserts five columns before the first column
sheet.insertColumnsBefore(1, 5);
```
@param beforePosition The column before which the new column should be added.
@param howMany The number of columns to insert.
@return the sheet, useful for method chaining*/insertColumnsBefore(beforePosition:Integer,howMany:Integer):SpreadsheetApp.Sheet;
/**Inserts a new [`DataSourceSheet`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-sheet.html) in the spreadsheet and starts data execution. As a
side effect, this also makes the new sheet the active sheet.

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for specific data source
type.

```
// Activates BigQuery operations.
SpreadsheetApp.enableBigQueryExecution();

// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Builds a data source specification.
// TODO (developer): Update the project ID to your own Google Cloud project ID.
const dataSourceSpec = SpreadsheetApp.newDataSourceSpec()
 .asBigQuery()
 .setProjectId('project-id-1')
 .setTableProjectId('bigquery-public-data')
 .setDatasetId('ncaa_basketball')
 .setTableId('mbb_historical_teams_games')
 .build();

// Adds the data source and its data to the spreadsheet.
ss.insertDataSourceSheet(dataSourceSpec);
```
@param spec The data source specification to insert with.
@return The new data source sheet.*/insertDataSourceSheet(spec:SpreadsheetApp.DataSourceSpec):SpreadsheetApp.DataSourceSheet;
/**Inserts a [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html) as an image in the document at a given row and column. The image
size is retrieved from the blob contents. The maximum supported blob size is 2MB.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var blob = Utilities.newBlob(binaryData, 'image/png', 'MyImageName');
sheet.insertImage(blob, 1, 1);
```
@param blobSource The blob containing the image contents, MIME type, and (optionally) name.
@param column The column position.
@param row The row position.
@return The inserted image.*/insertImage(blobSource:BlobSource,column:Integer,row:Integer):SpreadsheetApp.OverGridImage;
/**Inserts a [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html) as an image in the document at a given row and column, with a
pixel offset. The image size is retrieved from the blob contents. The maximum supported blob
size is 2MB.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var blob = Utilities.newBlob(binaryData, 'image/png', 'MyImageName');
sheet.insertImage(blob, 1, 1, 10, 10);
```
@param blobSource The blob containing the image contents, MIME type, and (optionally) name.
@param column The column position.
@param row The row position.
@param offsetX The horizontal offset from cell corner in pixels.
@param offsetY The vertical offset from cell corner in pixels.
@return The inserted image.*/insertImage(blobSource:BlobSource,column:Integer,row:Integer,offsetX:Integer,offsetY:Integer):SpreadsheetApp.OverGridImage;
/**Inserts an image in the document at a given row and column.

The provided URL must be publicly accessible.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

sheet.insertImage("https://www.google.com/images/srpr/logo3w.png", 1, 1);
```
@param url The URL of the image.
@param column The grid column position.
@param row The grid row position.
@return The inserted image.*/insertImage(url:string,column:Integer,row:Integer):SpreadsheetApp.OverGridImage;
/**Inserts an image in the document at a given row and column, with a pixel offset.

The provided URL must be publicly accessible.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

sheet.insertImage("https://www.google.com/images/srpr/logo3w.png", 1, 1, 10, 10);
```
@param url The URL for the image.
@param column The column position.
@param row The row position.
@param offsetX The horizontal offset from cell corner in pixels.
@param offsetY The vertical offset from cell corner in pixels.
@return The Inserted image.*/insertImage(url:string,column:Integer,row:Integer,offsetX:Integer,offsetY:Integer):SpreadsheetApp.OverGridImage;
/**Inserts a row after the given row position.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This inserts a row after the first row position
sheet.insertRowAfter(1);
```
@param afterPosition The row after which the new row should be added.
@return the sheet, useful for method chaining*/insertRowAfter(afterPosition:Integer):SpreadsheetApp.Sheet;
/**Inserts a row before the given row position.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This inserts a row before the first row position
sheet.insertRowBefore(1);
```
@param beforePosition The row before which the new row should be added.
@return the sheet, useful for method chaining*/insertRowBefore(beforePosition:Integer):SpreadsheetApp.Sheet;
/**Inserts a number of rows after the given row position.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This inserts five rows after the first row
sheet.insertRowsAfter(1, 5);
```
@param afterPosition The row after which the new rows should be added.
@param howMany The number of rows to insert.
@return the sheet, useful for method chaining*/insertRowsAfter(afterPosition:Integer,howMany:Integer):SpreadsheetApp.Sheet;
/**Inserts a number of rows before the given row position.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This inserts five rows before the first row
sheet.insertRowsBefore(1, 5);
```
@param beforePosition The row before which the new rows should be added.
@param howMany The number of rows to insert.
@return the sheet, useful for method chaining*/insertRowsBefore(beforePosition:Integer,howMany:Integer):SpreadsheetApp.Sheet;
/**Inserts a new sheet into the spreadsheet, using a default sheet name. The new sheet becomes the
active sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
ss.insertSheet();
```
@return The new sheet.*/insertSheet():SpreadsheetApp.Sheet;
/**Inserts a new sheet into the spreadsheet at the given index. The new sheet becomes the active
sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
ss.insertSheet(1);
```
@param sheetIndex The index of the newly created sheet. To insert a sheet as the first one in
    the spreadsheet, set it to 0.
@return The new sheet.*/insertSheet(sheetIndex:Integer):SpreadsheetApp.Sheet;
/**Inserts a new sheet into the spreadsheet at the given index and uses optional advanced
arguments. The new sheet becomes the active sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var templateSheet = ss.getSheetByName('Sales');
ss.insertSheet(1, {template: templateSheet});
```
@param sheetIndex The index of the newly created sheet. To insert a sheet as the first one in
    the spreadsheet, set it to 0.
@param options Optional JavaScript advanced arguments.
@return The new sheet.*/insertSheet(sheetIndex:Integer,options:Object):SpreadsheetApp.Sheet;
/**Inserts a new sheet into the spreadsheet, using a default sheet name and optional advanced
arguments. The new sheet becomes the active sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var templateSheet = ss.getSheetByName('Sales');
ss.insertSheet({template: templateSheet});
```
@param options Optional JavaScript advanced arguments, listed below.
@return The new sheet.*/insertSheet(options:Object):SpreadsheetApp.Sheet;
/**Inserts a new sheet into the spreadsheet with the given name. The new sheet becomes the active
sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
ss.insertSheet('My New Sheet');
```
@param sheetName The name of the new sheet.
@return The new sheet.*/insertSheet(sheetName:string):SpreadsheetApp.Sheet;
/**Inserts a new sheet into the spreadsheet with the given name at the given index. The new sheet
becomes the active sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
ss.insertSheet('My New Sheet', 1);
```
@param sheetName The name of the new sheet.
@param sheetIndex The index of the newly created sheet. To insert a sheet as the first one in
    the spreadsheet, set it to 0.
@return The new sheet.*/insertSheet(sheetName:string,sheetIndex:Integer):SpreadsheetApp.Sheet;
/**Inserts a new sheet into the spreadsheet with the given name at the given index and uses
optional advanced arguments. The new sheet becomes the active sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var templateSheet = ss.getSheetByName('Sales');
ss.insertSheet('My New Sheet', 1, {template: templateSheet});
```
@param sheetName The name of the new sheet.
@param sheetIndex The index of the newly inserted sheet. To insert a sheet as the first one in
    a spreadsheet, set it to 0.
@param options Optional JavaScript advanced arguments.
@return The new sheet.*/insertSheet(sheetName:string,sheetIndex:Integer,options:Object):SpreadsheetApp.Sheet;
/**Inserts a new sheet into the spreadsheet with the given name and uses optional advanced
arguments. The new sheet becomes the active sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var templateSheet = ss.getSheetByName('Sales');
ss.insertSheet('My New Sheet', {template: templateSheet});
```
@param sheetName The name of the new sheet.
@param options Optional JavaScript advanced arguments.
@return The new sheet.*/insertSheet(sheetName:string,options:Object):SpreadsheetApp.Sheet;
/**Inserts a new sheet in the spreadsheet, creates a [`DataSourceTable`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-table.html) spanning the
entire sheet with the given data source specification, and starts data execution. As a side
effect, makes the new sheet the active sheet.

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for specific data source
type.

```
// Activates BigQuery operations.
SpreadsheetApp.enableBigQueryExecution();

// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Adds a sheet and sets cell A1 as the parameter cell.
const parameterCell = ss.insertSheet('parameterSheet').getRange('A1');

// Sets the value of the parameter cell to 'Duke'.
parameterCell.setValue('Duke');

const query = 'select * from `bigquery-public-data`.`ncaa_basketball`.' +
  '`mbb_historical_tournament_games` WHERE win_school_ncaa = @SCHOOL';

// Adds a data source with a query parameter.
// TODO(developer): Update the project ID to your own Google Cloud project ID.
const dataSourceSpec = SpreadsheetApp.newDataSourceSpec()
 .asBigQuery()
 .setProjectId('project-id-1')
 .setRawQuery(query)
 .setParameterFromCell('SCHOOL', 'parameterSheet!A1')
 .build();

// Adds sheets for the data source and data source table to the spreadsheet.
ss.insertSheetWithDataSourceTable(dataSourceSpec);
```
@param spec The data source specification to insert with.
@return The new sheet.*/insertSheetWithDataSourceTable(spec:SpreadsheetApp.DataSourceSpec):SpreadsheetApp.Sheet;
/**Indicates whether the document allows anonymous viewing. As this is no longer supported in the
[new version of Google Sheets](https://support.google.com/drive/answer/3541068), use
[`File.getSharingAccess()`](https://developers.google.com/apps-script/reference/spreadsheet/../drive/file.html#getSharingAccess()) and [`File.getSharingPermission()`](https://developers.google.com/apps-script/reference/spreadsheet/../drive/file.html#getSharingPermission()) instead.

```
// Determine if the document allows anonymous viewing via the Drive API.
var ss = SpreadsheetApp.getActiveSpreadsheet();
var file = DriveApp.getFileById(ss.getId());
var access = file.getSharingAccess();
var permission = file.getSharingPermission();
var isAnonymousAccess =
    access == DriveApp.Access.ANYONE || access == DriveApp.Access.ANYONE_WITH_LINK;
var isAnonymousEdit = isAnonymousAccess && permission != DriveApp.Permission.NONE;
```
@deprecated
@return `true` if the document allows anonymous viewing, `false` otherwise.*/isAnonymousView():boolean;
/**Indicates whether the document allows edits from anonymous users. As this is no longer
supported in the [new version of
Google Sheets](https://support.google.com/drive/answer/3541068), use [`File.getSharingAccess()`](https://developers.google.com/apps-script/reference/spreadsheet/../drive/file.html#getSharingAccess()) and [`File.getSharingPermission()`](https://developers.google.com/apps-script/reference/spreadsheet/../drive/file.html#getSharingPermission()) instead.

```
// Determine if the document allow anonymous edits via the Drive API.
var ss = SpreadsheetApp.getActiveSpreadsheet();
var file = DriveApp.getFileById(ss.getId());
var access = file.getSharingAccess();
var permission = file.getSharingPermission();
var isAnonymousAccess =
    access == DriveApp.Access.ANYONE || access == DriveApp.Access.ANYONE_WITH_LINK;
var isAnonymousEdit = isAnonymousAccess && permission == DriveApp.Permission.EDIT;
```
@deprecated
@return `true` if the document allows anonymous editing, `false` otherwise.*/isAnonymousWrite():boolean;
/**Returns whether the given column is hidden by the user.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Columns start at 1
Logger.log(sheet.isColumnHiddenByUser(1));
```
@param columnPosition The position of the column to examine.
@return `true` if the column is hidden, `false` otherwise.*/isColumnHiddenByUser(columnPosition:Integer):boolean;
/**Returns whether iterative calculation is activated in this spreadsheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets spreadsheet, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Activates iterative calculation on the spreadsheet.
ss.setIterativeCalculationEnabled(true);

// Logs whether iterative calculation is activated for the spreadsheet.
console.log(ss.isIterativeCalculationEnabled());
```
@return `true` if iterative calculation is activated, `false` otherwise.*/isIterativeCalculationEnabled():boolean;
/**Returns whether the given row is hidden by a filter (not a filter view).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Rows start at 1
Logger.log(sheet.isRowHiddenByFilter(1));
```
@param rowPosition The position of the row to examine.
@return `true` if the row is hidden, `false` otherwise.*/isRowHiddenByFilter(rowPosition:Integer):boolean;
/**Returns whether the given row is hidden by the user.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Rows start at 1
Logger.log(sheet.isRowHiddenByUser(1));
```
@param rowPosition The position of the row to examine.
@return `true` if the row is hidden, `false` otherwise.*/isRowHiddenByUser(rowPosition:Integer):boolean;
/**Moves the active sheet to the given position in the list of sheets. Throws an exception if the
position is negative or greater than the number of sheets.

```
// This example assumes that there are 2 sheets in the current
// active spreadsheet: one named "first" in position 1 and another named "second"
// in position 2.
var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
// Gets the "first" sheet and activates it.
var sheet = spreadsheet.getSheetByName("first").activate();

// Logs 'Current index of sheet: 1'
console.log("Current index of sheet: %s", sheet.getIndex());

spreadsheet.moveActiveSheet(2);

// Logs 'New index of sheet: 2'
console.log("New index of sheet: %s", sheet.getIndex());
```
@param pos The 1-index position to move the active sheet to in the list of sheets.*/moveActiveSheet(pos:Integer):void;
/**Creates a new [`SheetType.OBJECT`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html#OBJECT) sheet and moves the provided chart to it. If the chart
is already on its own sheet, that sheet is returned without creating a new one.

```
var sheet = SpreadsheetApp.getActiveSheet();
var chart = sheet.newChart().setPosition(1, 1, 0, 0).build();
sheet.insertChart(chart);
var objectSheet = SpreadsheetApp.getActive().moveChartToObjectSheet(chart);
```
@param chart The chart to move.
@return The sheet that the chart is on.*/moveChartToObjectSheet(chart:SpreadsheetApp.EmbeddedChart):SpreadsheetApp.Sheet;
/**Refreshes all supported data sources and their linked data source objects, skipping invalid
data source objects.

Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for
specific data source type.

```
// Activates BigQuery operations.
SpreadsheetApp.enableBigQueryExecution();

// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets the first data source sheet on the spreadsheet.
const dataSheet = ss.getDataSourceSheets()[0];

// Refreshes all data sources on the spreadsheet.
ss.refreshAllDataSources();

// Logs the last refreshed time of the first data source sheet.
console.log(`Last refresh time: ${dataSheet.getStatus().getLastRefreshedTime()}`);
```*/refreshAllDataSources():void;
/**Removes the given user from the list of editors for the [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html). This method doesn't
block users from accessing the [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html) if they belong to a class of users who have
general access—for example, if the [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html) is shared with the user's entire
domain, or if the [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html) is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of viewers.
@param emailAddress The email address of the user to remove.
@return This [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html), for chaining.*/removeEditor(emailAddress:string):SpreadsheetApp.Spreadsheet;
/**Removes the given user from the list of editors for the [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html). This method doesn't
block users from accessing the [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html) if they belong to a class of users who have
general access—for example, if the [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html) is shared with the user's entire
domain, or if the [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html) is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of viewers.
@param user A representation of the user to remove.
@return This [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html), for chaining.*/removeEditor(user:User):SpreadsheetApp.Spreadsheet;
/**Removes a menu that was added by [`addMenu(name, subMenus)`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#addMenu(String,Object)). The `name` argument
should have the same value as the corresponding call to [`addMenu(name, subMenus)`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#addMenu(String,Object)).

```
// The onOpen function is executed automatically every time a Spreadsheet is loaded
function onOpen() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.addMenu("badMenu", [{name: "remove bad menu", functionName: "removeBadMenu"},
                                       {name: "foo", functionName: "foo"}]);
}
function removeBadMenu() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.removeMenu("badMenu");  // name must match the name used when added the menu
}
function foo(){
// Do nothing
}
```
@param name The name of the menu to remove.*/removeMenu(name:string):void;
/**Deletes a named range with the given name. Throws an exception if no range with the given name
is found in the spreadsheet.

```
// The code below creates a new named range "foo", and then remove it.
var ss = SpreadsheetApp.getActiveSpreadsheet();
ss.setNamedRange("foo", ss.getActiveRange());
ss.removeNamedRange("foo");
```
@param name The range name.*/removeNamedRange(name:string):void;
/**Removes the given user from the list of viewers and commenters for the [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html). This
method has no effect if the user is an editor, not a viewer or commenter. This method also
doesn't block users from accessing the [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html) if they belong to a class of users who
have general access—for example, if the [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html) is shared with the user's
entire domain, or if the [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html) is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of editors.
@param emailAddress The email address of the user to remove.
@return This [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html) for chaining.*/removeViewer(emailAddress:string):SpreadsheetApp.Spreadsheet;
/**Removes the given user from the list of viewers and commenters for the [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html). This
method has no effect if the user is an editor, not a viewer. This method also doesn't block
users from accessing the [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html) if they belong to a class of users who have general
access—for example, if the [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html) is shared with the user's entire domain, or
if the [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html) is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of editors.
@param user A representation of the user to remove.
@return This [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html) for chaining.*/removeViewer(user:User):SpreadsheetApp.Spreadsheet;
/**Renames the document.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
ss.rename("This is the new name");
```
@param newName The new name for the document.*/rename(newName:string):void;
/**Renames the current active sheet to the given new name.

```
// The code below renames the active sheet to "Hello world"
SpreadsheetApp.getActiveSpreadsheet().renameActiveSheet("Hello world");
```
@param newName The new name for the current active sheet.*/renameActiveSheet(newName:string):void;
/**Removes the applied theme and sets the default theme on the spreadsheet.

```
// The code below applies default theme on the spreadsheet.
SpreadsheetApp.getActiveSpreadsheet().resetSpreadsheetTheme();
```
@return The default theme.*/resetSpreadsheetTheme():SpreadsheetApp.SpreadsheetTheme;
/**Sets the specified range as the [`active range`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#getActiveRange()) in the active sheet, with
the top left cell in the range as the [`current cell`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#getCurrentCell()).

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
var range = sheet.getRange('A1:D4');
sheet.setActiveRange(range);

var selection = sheet.getSelection();
// Current cell: A1
var currentCell = selection.getCurrentCell();
// Active Range: A1:D4
var activeRange = selection.getActiveRange();
```
@param range The range to set as the active range.
@return the newly active range*/setActiveRange(range:SpreadsheetApp.Range):SpreadsheetApp.Range;
/**Sets the specified list of ranges as the [`active ranges`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#getActiveRangeList()) in the
active sheet. The last range in the list is set as the [`active range`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#getActiveRange()).

```
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['D4', 'B2:C4']);
sheet.setActiveRangeList(rangeList);

var selection = sheet.getSelection();
// Current cell: B2
var currentCell = selection.getCurrentCell();
// Active range: B2:C4
var activeRange = selection.getActiveRange();
// Active range list: [D4, B2:C4]
var activeRangeList = selection.getActiveRangeList();
```
@param rangeList The list of ranges to select.
@return the newly selected list of ranges*/setActiveRangeList(rangeList:SpreadsheetApp.RangeList):SpreadsheetApp.RangeList;
/**Sets the active selection region for this sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:D4");
sheet.setActiveSelection(range);
```
@param range The range to set as the active selection.
@return the newly active range*/setActiveSelection(range:SpreadsheetApp.Range):SpreadsheetApp.Range;
/**Sets the active selection, as specified in A1 notation or R1C1 notation.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

sheet.setActiveSelection("A1:D4");
```
@param a1Notation The range to set as active, as specified in A1 notation or R1C1 notation.
@return the newly active range*/setActiveSelection(a1Notation:string):SpreadsheetApp.Range;
/**Sets the given sheet to be the active sheet in the spreadsheet. The Google Sheets UI displays
the chosen sheet unless the sheet belongs to a different spreadsheet.

```
// The code below makes the first sheet active in the active spreadsheet.
var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
spreadsheet.setActiveSheet(spreadsheet.getSheets()[0]);
```
@param sheet The sheet to set as the active sheet.
@return The active sheet.*/setActiveSheet(sheet:SpreadsheetApp.Sheet):SpreadsheetApp.Sheet;
/**Sets the given sheet to be the active sheet in the spreadsheet, with an option to restore the
most recent selection within that sheet. The Google Sheets UI displays the chosen sheet unless
the sheet belongs to a different spreadsheet.

```
var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
var firstSheet = spreadsheet.getSheets()[0];
var secondSheet = spreadsheet.getSheets()[1];
// Set the first sheet as the active sheet and select the range D4:F4.
spreadsheet.setActiveSheet(firstSheet).getRange('D4:F4').activate();

// Switch to the second sheet to do some work.
spreadsheet.setActiveSheet(secondSheet);
// Switch back to first sheet, and restore its selection.
spreadsheet.setActiveSheet(firstSheet, true);

// The selection of first sheet is restored, and it logs D4:F4
var range = spreadsheet.getActiveSheet().getSelection().getActiveRange();
Logger.log(range.getA1Notation());
```
@param sheet The new active sheet.
@param restoreSelection Tf `true`, the most recent selection of the new active sheet
    becomes selected again as the new sheet becomes active; if `false`, the new sheet
    becomes active without changing the current selection.
@return The new active sheet.*/setActiveSheet(sheet:SpreadsheetApp.Sheet,restoreSelection:boolean):SpreadsheetApp.Sheet;
/**Sets the document's policy on anonymous reading and writing. As this is no longer supported in
the [new version of Google Sheets](https://support.google.com/drive/answer/3541068),
use [`File.setSharing(accessType, permissionType)`](https://developers.google.com/apps-script/reference/spreadsheet/../drive/file.html#setSharing(Access,Permission)) as an alternative.

```
// Set the document's policy on anonymous reading and writing via the Drive API.
var ss = SpreadsheetApp.getActiveSpreadsheet();
var file = DriveApp.getFileById(ss.getId());

// Set anonymous read.
file.setSharing(DriveApi.Access.ANYONE, DriveApi.Permission.VIEW);

// Set anonymous write.
file.setSharing(DriveApi.Access.ANYONE, DriveApi.Permission.EDIT);

// Disable anonymous access.
file.setSharing(DriveApi.Access.PRIVATE, file.getSharingPermission());
```
@deprecated
@param anonymousReadAllowed `true` to allow anonymous reads; `false` otherwise.
@param anonymousWriteAllowed `true` to allow anonymous reads; `false` otherwise.*/setAnonymousAccess(anonymousReadAllowed:boolean,anonymousWriteAllowed:boolean):void;
/**Sets the width of the given column in pixels.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Sets the first column to a width of 200 pixels
sheet.setColumnWidth(1, 200);
```
@param columnPosition The position of the given column to set.
@param width The width in pixels to set it to.
@return the sheet, useful for method chaining*/setColumnWidth(columnPosition:Integer,width:Integer):SpreadsheetApp.Sheet;
/**Sets the specified cell as the [`current cell`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#getCurrentCell()).

If the specified cell is present in an already selected range, then that range becomes the
active range with the cell as the current cell.

If the specified cell is not present in any selected range, then any existing selection is
removed and the cell becomes the current cell and the active range.

__Note:__The specified [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) must consist of one cell, otherwise it throws an
exception.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
var cell = sheet.getRange('B5');
sheet.setCurrentCell(cell);

var selection = sheet.getSelection();
// Current cell: B5
var currentCell = selection.getCurrentCell();
```
@param cell The cell to set as the current cell.
@return the newly set current cell*/setCurrentCell(cell:SpreadsheetApp.Range):SpreadsheetApp.Range;
/**Freezes the given number of columns. If zero, no columns are frozen.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Freezes the first column
sheet.setFrozenColumns(1);
```
@param columns The number of columns to freeze.*/setFrozenColumns(columns:Integer):void;
/**Freezes the given number of rows. If zero, no rows are frozen.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Freezes the first row
sheet.setFrozenRows(1);
```
@param rows The number of rows to freeze.*/setFrozenRows(rows:Integer):void;
/**Sets the minimum threshold value for iterative calculation. When the results of successive
calculation differ by less than this value, the iterative calculation stops. This value must be
non-negative, and defaults to 0.05.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets spreadsheet, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Sets the iterative calculation convergence threshold for the spreadsheet.
ss.setIterativeCalculationConvergenceThreshold(2);

// Logs the threshold to the console.
console.log(ss.getIterativeCalculationConvergenceThreshold());
```
@param minThreshold The minimum convergence threshold (must be non-negative).
@return This spreadsheet, for chaining.*/setIterativeCalculationConvergenceThreshold(minThreshold:number):SpreadsheetApp.Spreadsheet;
/**Sets whether iterative calculation is activated in this spreadsheet. If the maximum number of
calculation cycles and convergence threshold have not previously been set when the calculation
is activated, they default to 50 and 0.05 respectively. If either has been set previously, they
retain their previous values.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets spreadsheet, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Activates iterative calculation on the spreadsheet.
ss.setIterativeCalculationEnabled(true);

// Logs whether iterative calculation is activated for the spreadsheet.
console.log(ss.isIterativeCalculationEnabled());
```
@param isEnabled `true` if iterative calculation should be enabled; `false`
    otherwise.
@return This spreadsheet, for chaining.*/setIterativeCalculationEnabled(isEnabled:boolean):SpreadsheetApp.Spreadsheet;
/**Sets the maximum number of calculation iterations that should be performed during iterative
calculation. This value must be between 1 and 10,000 (inclusive), and defaults to 50.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets spreadsheet, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Sets the max iterative calculation cycles for the spreadsheet.
ss.setMaxIterativeCalculationCycles(10);

// Logs the max iterative calculation cycles to the console.
console.log(ss.getMaxIterativeCalculationCycles());
```
@param maxIterations The maximum number of calculation iterations (between 1 and 10,000).
@return This spreadsheet, for chaining.*/setMaxIterativeCalculationCycles(maxIterations:Integer):SpreadsheetApp.Spreadsheet;
/**Names a range.

```
// The code below creates a new named range "TaxRates" in the active spreadsheet
var ss = SpreadsheetApp.getActiveSpreadsheet();
ss.setNamedRange("TaxRates", SpreadsheetApp.getActiveRange());
```
@param name The name to give the range.
@param range The range specification.*/setNamedRange(name:string,range:SpreadsheetApp.Range):void;
/**Sets how often this spreadsheet should recalculate.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Sets the  calculation interval for the spreadsheet to 'ON_CHANGE'.
const interval = ss.setRecalculationInterval(SpreadsheetApp.RecalculationInterval.ON_CHANGE);

// Logs the calculation interval to the console.
console.log(interval);
```
@param recalculationInterval The new recalculation interval.
@return This spreadsheet, for chaining.*/setRecalculationInterval(recalculationInterval:SpreadsheetApp.RecalculationInterval):SpreadsheetApp.Spreadsheet;
/**Sets the row height of the given row in pixels. By default, rows grow to fit cell contents. If
you want to force rows to a specified height, use [`Sheet.setRowHeightsForced(startRow, numRows, height)`](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#setRowHeightsForced(Integer,Integer,Integer)).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Sets the first row to a height of 200 pixels
sheet.setRowHeight(1, 200);
```
@param rowPosition The row position to change.
@param height The height in pixels to set it to.
@return The sheet, useful for method chaining.*/setRowHeight(rowPosition:Integer,height:Integer):SpreadsheetApp.Sheet;
/**Sets the permissions for the current sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var permissions = sheet.getSheetProtection();

// This copies the permissions on the first sheet to the second sheet
var sheetToClonePermissionsTo = ss.getSheets()[1];
sheetToClonePermissionsTo.setSheetProtection(permissions);
```
@deprecated
@param permissions The access permissions object to set on this sheet.*/setSheetProtection(permissions:SpreadsheetApp.PageProtection):void;
/**Sets the spreadsheet locale.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets spreadsheet, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Sets the spreadsheet locale.
ss.setSpreadsheetLocale('fr');

// Gets the spreadsheet locale.
const ssLocale = ss.getSpreadsheetLocale();

// Logs the locale to the console.
console.log(ssLocale);
```
@param locale The locale code to use (for example, 'en', 'fr', or 'en_US').*/setSpreadsheetLocale(locale:string):void;
/**Sets a theme on the spreadsheet.

```
var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
// The code below sets the second predefined theme as the current theme of the spreadsheet.
var predefinedThemesList = spreadsheet.getPredefinedSpreadsheetThemes();
spreadsheet.setSpreadsheetTheme(predefinedThemesList[1]);
```
@param theme The theme to apply.
@return The new current theme.*/setSpreadsheetTheme(theme:SpreadsheetApp.SpreadsheetTheme):SpreadsheetApp.SpreadsheetTheme;
/**Sets the time zone for the spreadsheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets spreadsheet, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Sets the time zone of the spreadsheet.
ss.setSpreadsheetTimeZone('America/New_York');

// Gets the time zone of the spreadsheet.
const ssTimeZone = ss.getSpreadsheetTimeZone();

// Logs the time zone to the console.
console.log(ssTimeZone);
```
@param timezone The time zone, specified in "long" format (for example, "America/New_York", as
    listed by [Joda.org](http://joda-time.sourceforge.net/timezones.html)).*/setSpreadsheetTimeZone(timezone:string):void;
/**Displays a custom user interface component in a dialog centered in the user's browser's
viewport. The server-side script's execution is _not_ suspended. To communicate with the
server side, the user interface component must make asynchronous callbacks to the server-side
script.

If the server-side script previously displayed a dialog that has not yet been dismissed,
then the existing dialog is replaced with the newly requested dialog's user interface.

The following code snippet displays a simple [`HtmlService`](https://developers.google.com/apps-script/reference/spreadsheet/../html/html-service.html) application in a dialog with the
specified title, height, and width:

```
var htmlApp = HtmlService
    .createHtmlOutput('<p>A change of speed, a change of style...</p>')
    .setTitle('My HtmlService Application')
    .setWidth(250)
    .setHeight(300);

SpreadsheetApp.getActiveSpreadsheet().show(htmlApp);

// The script resumes execution immediately after showing the dialog.
```
@param userInterface An [`HtmlOutput`](https://developers.google.com/apps-script/reference/spreadsheet/../html/html-output.html).*/show(userInterface:Object):void;
/**Sorts a sheet by column, ascending.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Sorts the sheet by the first column, ascending
sheet.sort(1);
```
@param columnPosition The column to sort by.
@return the sheet, useful for method chaining*/sort(columnPosition:Integer):SpreadsheetApp.Sheet;
/**Sorts a sheet by column. Takes a parameter to specify ascending or descending.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Sorts the sheet by the first column, descending
sheet.sort(1, false);
```
@param columnPosition The column to sort by.
@param ascending `true` for ascending sorts, `false` for descending.
@return the sheet, useful for method chaining*/sort(columnPosition:Integer,ascending:boolean):SpreadsheetApp.Sheet;
/**Shows a popup window in the lower right corner of the spreadsheet with the given message.

```
// Show a popup with the message "Task started".
SpreadsheetApp.getActiveSpreadsheet().toast('Task started');
```
@param msg The message to be shown in the toast.*/toast(msg:string):void;
/**Shows a popup window in the lower right corner of the spreadsheet with the given message and
title.

```
// Show a popup with the title "Status" and the message "Task started".
SpreadsheetApp.getActiveSpreadsheet().toast('Task started', 'Status');
```
@param msg The message to be shown in the toast.
@param title The optional title of the toast.*/toast(msg:string,title:string):void;
/**Shows a popup window in the lower right corner of the spreadsheet with the given title and
message, that stays visible for a certain length of time.

```
// Show a 3-second popup with the title "Status" and the message "Task started".
SpreadsheetApp.getActiveSpreadsheet().toast('Task started', 'Status', 3);
```
@param msg The message to be shown in the toast.
@param title The optional title of the toast.
@param timeoutSeconds The timeout in seconds; if `null`, the toast defaults to 5 seconds;
    if negative, the toast remains until dismissed.*/toast(msg:string,title:string,timeoutSeconds:number):void;
/**Unhides the column in the given range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This unhides the first column if it was previously hidden
var range = sheet.getRange("A1");
sheet.unhideColumn(range);
```
@param column The range to unhide, if hidden.*/unhideColumn(column:SpreadsheetApp.Range):void;
/**Unhides the row in the given range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This unhides the first row if it was previously hidden
var range = sheet.getRange("A1");
sheet.unhideRow(range);
```
@param row The range to unhide, if hidden.*/unhideRow(row:SpreadsheetApp.Range):void;
/**Updates a menu that was added by [`addMenu(name, subMenus)`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#addMenu(String,Object)). Works exactly like [`addMenu(name, subMenus)`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#addMenu(String,Object)).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var menuEntries = [];
menuEntries.push({name: "Lone Menu Entry", functionName: "function1"});
ss.updateMenu("addMenuExample", menuEntries);
```
@param name The name of the menu to update.
@param subMenus An array of JavaScript maps with `name` and `functionName` parameters. You can use functions from included libraries, such as 

```
    Library.libFunction1```

.*/updateMenu(name:string,subMenus:Object[]):void;
/**Waits until all the current executions in the spreadsheet complete, timing out after the
provided number of seconds. Throws an exception if the executions are not completed when timing
out, but does not cancel the data executions.
@param timeoutInSeconds The time to wait for data executions, in seconds. The maximum is 300
    seconds.*/waitForAllDataExecutionsCompletion(timeoutInSeconds:Integer):void;}interface SortSpec{
/**Returns the background color used for sorting, or `null` if absent.
@return The background color.*/getBackgroundColor():SpreadsheetApp.Color;
/**Gets the data source column the sort spec acts on. Returns `null` if this sort spec is
not acting on a data source column.
@return The data source column the sort spec acts on.*/getDataSourceColumn():SpreadsheetApp.DataSourceColumn;
/**Returns the dimension index or `null` if not linked to a local filter.
@return The dimension index.*/getDimensionIndex():Integer;
/**Returns the foreground color used for sorting, or `null` if absent.
@return The foreground color.*/getForegroundColor():SpreadsheetApp.Color;
/**Returns the sort order.
@return The sort order.*/getSortOrder():SpreadsheetApp.SortOrder;
/**Returns whether the sort order is ascending.
@return `true` if the sort order is ascending, or `false` otherwise.*/isAscending():boolean;}interface SortOrder{}interface _SortOrder{
/**Ascending sort order.*/ASCENDING:SortOrder;
/**Descending sort order.*/DESCENDING:SortOrder;}interface Slicer{
/**Returns the background color of the slicer in CSS notation (such as '#ffffff').
@deprecated
@return The background color of this slicer. Returns `null` if no color is set.*/getBackgroundColor():string;
/**Return the background [`Color`](https://developers.google.com/apps-script/reference/spreadsheet/color.html) of the slicer.
@return The background color of this slicer. Returns `null` if no color is set.*/getBackgroundColorObject():SpreadsheetApp.Color;
/**Returns the column position (relative to the data range of the slicer) on which the filter is
applied in the slicer, or `null` if the column position is not set. This should be
1-indexed position of the column similar to filter.
@return The column position of this slicer.*/getColumnPosition():Integer;
/**Gets information about where the slicer is positioned in the sheet.
@return An object containing the slicer's container position.*/getContainerInfo():SpreadsheetApp.ContainerInfo;
/**Returns the filter criteria of the slicer, or `null` if the filter criteria is not set.
@return The filter criteria of this slicer.*/getFilterCriteria():SpreadsheetApp.FilterCriteria;
/**Gets the data range on which the slicer is applied to.
@return The slicer range.*/getRange():SpreadsheetApp.Range;
/**Returns the title of the slicer.
@return This slicer, for chaining.*/getTitle():string;
/**Gets the horizontal alignment of the title.
@return The horizontal alignment of this slicer's title.*/getTitleHorizontalAlignment():string;
/**Returns the text style of the slicer's title.
@return The text style of this slicer's title.*/getTitleTextStyle():SpreadsheetApp.TextStyle;
/**Returns whether the given slicer is applied to pivot tables.
@return `true` if this slicer is applied to pivot tables, otherwise `false`.*/isAppliedToPivotTables():boolean;
/**Deletes the slicer.*/remove():void;
/**Sets if the given slicer should be applied to pivot tables in the worksheet.
@param applyToPivotTables Specifies whether this slicer should apply to pivot tables.
@return This slicer, for chaining.*/setApplyToPivotTables(applyToPivotTables:boolean):SpreadsheetApp.Slicer;
/**Sets the background color of the slicer. A `null` value resets the background color.
@param color The new background color of this slicer in CSS notation (such as '#ffffff').
@return This slicer, for chaining.*/setBackgroundColor(color:string):SpreadsheetApp.Slicer;
/**Sets the background [`Color`](https://developers.google.com/apps-script/reference/spreadsheet/color.html) of the slicer. A `null` value resets the background
color.
@param color The new background color of this slicer.
@return This slicer, for chaining.*/setBackgroundColorObject(color:SpreadsheetApp.Color):SpreadsheetApp.Slicer;
/**Sets the column index and filtering criteria of the slicer. A `null` value resets the
slicer filter.
@param columnPosition The new column position of this slicer.
@param filterCriteria The new filter criteria of this slicer.
@return This slicer, for chaining.*/setColumnFilterCriteria(columnPosition:Integer,filterCriteria:SpreadsheetApp.FilterCriteria):SpreadsheetApp.Slicer;
/**Sets the position where the slicer appears on the sheet. The anchor row and column position
indices are 1-indexed.
@param anchorRowPos The slicer's top side is anchored in this row.
@param anchorColPos The slicer's top side is anchored in this col.
@param offsetX The horizontal offset from cell corner in pixels.
@param offsetY The vertical offset from cell corner in pixels.
@return This slicer, for chaining.*/setPosition(anchorRowPos:Integer,anchorColPos:Integer,offsetX:Integer,offsetY:Integer):SpreadsheetApp.Slicer;
/**Sets the data range on which the slicer is applied.
@param rangeApi The new range for this slicer.
@return This slicer, for chaining.*/setRange(rangeApi:SpreadsheetApp.Range):SpreadsheetApp.Slicer;
/**Sets the title of the slicer. An empty title resets the title to default value.
@param title The new title of this slicer.
@return This slicer, for chaining.*/setTitle(title:string):SpreadsheetApp.Slicer;
/**Sets the horizontal alignment of the title in the slicer. A `null` value resets the
alignment.
@param horizontalAlignment The new horizontal alignment of this slicer's title.
@return This slicer, for chaining.*/setTitleHorizontalAlignment(horizontalAlignment:string):SpreadsheetApp.Slicer;
/**Sets the text style of the slicer.
@param textStyle The new text style of the slicer's title.
@return This slicer, for chaining.*/setTitleTextStyle(textStyle:SpreadsheetApp.TextStyle):SpreadsheetApp.Slicer;}interface SheetType{}interface _SheetType{
/**A sheet containing a [`DataSource`](https://developers.google.com/apps-script/reference/spreadsheet/data-source.html).*/DATASOURCE:SheetType;
/**A sheet containing a grid. This is the default type.*/GRID:SheetType;
/**A sheet containing a single embedded object such as an [`EmbeddedChart`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart.html).*/OBJECT:SheetType;}interface Sheet{
/**Activates this sheet. Does not alter the sheet itself, only the parent's notion of the active
sheet.

```
// This example assumes there is a sheet named "first"
var ss = SpreadsheetApp.getActiveSpreadsheet();
var first = ss.getSheetByName("first");
first.activate();
```
@return The newly active sheet.*/activate():SpreadsheetApp.Sheet;
/**Adds developer metadata with the specified key to the sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Adds the key 'NAME' to the developer metadata for the sheet.
sheet.addDeveloperMetadata('NAME');

// Gets the updated metadata info and logs it to the console.
console.log(sheet.getDeveloperMetadata()[0].getKey());
```
@param key The key for the new developer metadata.
@return This sheet, for chaining.*/addDeveloperMetadata(key:string):SpreadsheetApp.Sheet;
/**Adds developer metadata with the specified key and visibility to the sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Adds the key 'NAME' and sets the developer metadata visibility to PROJECT
// for the sheet.
sheet.addDeveloperMetadata('NAME', SpreadsheetApp.DeveloperMetadataVisibility.PROJECT);

// Gets the updated metadata info and logs it to the console.
const developerMetaData = sheet.getDeveloperMetadata()[0];
console.log(developerMetaData.getKey());
console.log(developerMetaData.getVisibility().toString());
```
@param key The key for the new developer metadata.
@param visibility The visibility of the new developer metadata.
@return This sheet, for chaining.*/addDeveloperMetadata(key:string,visibility:SpreadsheetApp.DeveloperMetadataVisibility):SpreadsheetApp.Sheet;
/**Adds developer metadata with the specified key and value to the sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Adds the key 'COMPANY' with the value 'TECH' to the developer metadata for the sheet.
sheet.addDeveloperMetadata('COMPANY', 'TECH');

// Gets the updated metadata info and logs it to the console.
const developerMetaData = sheet.getDeveloperMetadata()[0];
console.log(developerMetaData.getKey());
console.log(developerMetaData.getValue());
```
@param key The key for the new developer metadata.
@param value The value for the new developer metadata.
@return This sheet, for chaining.*/addDeveloperMetadata(key:string,value:string):SpreadsheetApp.Sheet;
/**Adds developer metadata with the specified key, value, and visibility to the sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Adds the key 'COMPANY' with the value 'TECH' to the developer metadata and sets the
// visibility to DOCUMENT for the sheet.
sheet.addDeveloperMetadata(
  'COMPANY',
  'TECH',
  SpreadsheetApp.DeveloperMetadataVisibility.DOCUMENT);

// Gets the updated metadata info and logs it to the console.
const developerMetaData = sheet.getDeveloperMetadata()[0];
console.log(developerMetaData.getKey());
console.log(developerMetaData.getValue());
console.log(developerMetaData.getVisibility().toString());
```
@param key The key for the new developer metadata.
@param value The value for the new developer metadata.
@param visibility The visibility of the new developer metadata.
@return This sheet, for chaining.*/addDeveloperMetadata(key:string,value:string,visibility:SpreadsheetApp.DeveloperMetadataVisibility):SpreadsheetApp.Sheet;
/**Appends a row to the bottom of the current data region in the sheet. If a cell's content begins
with `=`, it's interpreted as a formula.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Appends a new row with 3 columns to the bottom of the current
// data region in the sheet containing the values in the array.
sheet.appendRow(["a man", "a plan", "panama"]);
```
@param rowContents An array of values to insert after the last row in the sheet.
@return The sheet, useful for method chaining.*/appendRow(rowContents:Object[]):SpreadsheetApp.Sheet;
/**Returns the sheet as a [`DataSourceSheet`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-sheet.html) if the sheet is of type [`SheetType.DATASOURCE`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html#DATASOURCE), or `null` otherwise.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can useSpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the data source sheet value if the sheet is of type
// SpreadsheetApp.SheetType.DATASOURCE, otherwise this returns a null value.
const dataSourceSheet = sheet.asDataSourceSheet();

// Gets the data source sheet value and logs it to the console.
console.log(dataSourceSheet);
console.log(sheet.getType().toString());
```
@return A data source sheet.*/asDataSourceSheet():SpreadsheetApp.DataSourceSheet;
/**Sets the width of the given column to fit its contents.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

sheet.getRange('a1').setValue('Whenever it is a damp, drizzly November in my soul...');

// Sets the first column to a width which fits the text
sheet.autoResizeColumn(1);
```
@param columnPosition The position of the given column to resize.
@return the sheet, useful for method chaining*/autoResizeColumn(columnPosition:Integer):SpreadsheetApp.Sheet;
/**Sets the width of all columns starting at the given column position to fit their contents.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Sets the first 15 columns to a width that fits their text.
sheet.autoResizeColumns(1, 15);
```
@param startColumn The starting column to auto-resize.
@param numColumns The number of columns to auto-resize.
@return This sheet, for chaining.*/autoResizeColumns(startColumn:Integer,numColumns:Integer):SpreadsheetApp.Sheet;
/**Sets the height of all rows starting at the given row position to fit their contents.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Sets the first 15 rows to a height that fits their text.
sheet.autoResizeRows(1, 15);
```
@param startRow The starting row to auto-resize.
@param numRows The number of rows to auto-resize.
@return This sheet, for chaining.*/autoResizeRows(startRow:Integer,numRows:Integer):SpreadsheetApp.Sheet;
/**Clears the sheet of content and formatting information.

```
// This example assumes there is a sheet named "first"
var ss = SpreadsheetApp.getActiveSpreadsheet();
var first = ss.getSheetByName("first");
first.clear();
```
@return The cleared sheet.*/clear():SpreadsheetApp.Sheet;
/**Clears the sheet of contents and/or format, as specified with the given advanced options.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
sheet.clear({ formatOnly: true, contentsOnly: true });
```
@param options A JavaScript map containing advanced options, listed below.
@return This sheet, for chaining.*/clear(options:Object):SpreadsheetApp.Sheet;
/**Removes all conditional format rules from the sheet. Equivalent to calling [`setConditionalFormatRules(rules)`](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#setConditionalFormatRules(ConditionalFormatRule)) with an empty array as input.

```
var sheet = SpreadsheetApp.getActiveSheet();
sheet.clearConditionalFormatRules();
```*/clearConditionalFormatRules():void;
/**Clears the sheet of contents, while preserving formatting information.

```
// This example assumes there is a sheet named "first"
var ss = SpreadsheetApp.getActiveSpreadsheet();
var first = ss.getSheetByName("first");
first.clearContents();
```
@return This sheet, for chaining.*/clearContents():SpreadsheetApp.Sheet;
/**Clears the sheet of formatting, while preserving contents.

Formatting refers to how data is formatted as allowed by choices under the "Format" menu
(ex: bold, italics, conditional formatting) and not width or height of cells.

```
// This example assumes there is a sheet named "first"
var ss = SpreadsheetApp.getActiveSpreadsheet();
var first = ss.getSheetByName("first");
first.clearFormats();
```
@return This sheet, for chaining.*/clearFormats():SpreadsheetApp.Sheet;
/**Clears the sheet of all notes.

```
// This example assumes there is a sheet named "first"
var ss = SpreadsheetApp.getActiveSpreadsheet();
var first = ss.getSheetByName("first");
first.clearNotes();
```
@return This sheet, for chaining.*/clearNotes():SpreadsheetApp.Sheet;
/**Collapses all column groups on the sheet.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

// All column groups on the sheet are collapsed.
sheet.collapseAllColumnGroups();
```
@return This sheet, for chaining.*/collapseAllColumnGroups():SpreadsheetApp.Sheet;
/**Collapses all row groups on the sheet.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

// All row groups on the sheet are collapsed.
sheet.collapseAllRowGroups();
```
@return This sheet, for chaining.*/collapseAllRowGroups():SpreadsheetApp.Sheet;
/**Copies the sheet to a given spreadsheet, which can be the same spreadsheet as the source. The
copied sheet is named "Copy of [original name]".

```
var source = SpreadsheetApp.getActiveSpreadsheet();
var sheet = source.getSheets()[0];

var destination = SpreadsheetApp.openById('ID_GOES HERE');
sheet.copyTo(destination);
```
@param spreadsheet The spreadsheet to copy this sheet to, which can be the same spreadsheet as
    the source.
@return The new sheet, for chaining.*/copyTo(spreadsheet:SpreadsheetApp.Spreadsheet):SpreadsheetApp.Sheet;
/**Returns a [`DeveloperMetadataFinder`](https://developers.google.com/apps-script/reference/spreadsheet/developer-metadata-finder.html) for finding developer metadata within the scope of
this sheet. Metadata is in the scope of a particular sheet if it is either associated with the
sheet itself, or associated with a row, column, or range on that sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Adds developer metadata for testing.
sheet.addDeveloperMetadata('CITY', 'PARIS');

// Creates the developer metadata finder.
const metadatafinder = sheet.createDeveloperMetadataFinder();

// Finds the metadata with value 'PARIS' and displays its key in the console.
console.log(metadatafinder.withValue('PARIS').find()[0].getKey());
```
@return A developer metadata finder to search for metadata in the scope of this sheet.*/createDeveloperMetadataFinder():SpreadsheetApp.DeveloperMetadataFinder;
/**Creates a text finder for the sheet, which can find and replace text within the sheet.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

// Creates  a text finder.
var textFinder = sheet.createTextFinder('dog');

// Returns the first occurrence of 'dog' in the sheet.
var firstOccurrence = textFinder.findNext();

// Replaces the last found occurrence of 'dog' with 'cat' and returns the number
// of occurrences replaced.
var numOccurrencesReplaced = findOccurrence.replaceWith('cat');
```
@param findText The text to search for.
@return The [`TextFinder`](https://developers.google.com/apps-script/reference/spreadsheet/text-finder.html) for the sheet.*/createTextFinder(findText:string):SpreadsheetApp.TextFinder;
/**Deletes the column at the given column position.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
// Columns start at "1" - this deletes the first column
sheet.deleteColumn(1);
```
@param columnPosition The position of the column, starting at 1 for the first column.
@return the sheet, useful for method chaining*/deleteColumn(columnPosition:Integer):SpreadsheetApp.Sheet;
/**Deletes a number of columns starting at the given column position.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
// Columns start at "1" - this deletes the first two columns
sheet.deleteColumns(1, 2);
```
@param columnPosition The position of the first column to delete.
@param howMany The number of columns to delete.*/deleteColumns(columnPosition:Integer,howMany:Integer):void;
/**Deletes the row at the given row position.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
// Rows start at "1" - this deletes the first row
sheet.deleteRow(1);
```
@param rowPosition The position of the row, starting at 1 for the first row.
@return the sheet, useful for method chaining*/deleteRow(rowPosition:Integer):SpreadsheetApp.Sheet;
/**Deletes a number of rows starting at the given row position.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
// Rows start at "1" - this deletes the first two rows
sheet.deleteRows(1, 2);
```
@param rowPosition The position of the first row to delete.
@param howMany The number of rows to delete.*/deleteRows(rowPosition:Integer,howMany:Integer):void;
/**Expands all column groups on the sheet. This method requires at least one column group.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

// All column groups on the sheet are expanded.
sheet.expandAllColumnGroups();
```
@return This sheet, for chaining.*/expandAllColumnGroups():SpreadsheetApp.Sheet;
/**Expands all row groups on the sheet. This method requires at least one row group.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

// All row groups on the sheet are expanded.
sheet.expandAllRowGroups();
```
@return This sheet, for chaining.*/expandAllRowGroups():SpreadsheetApp.Sheet;
/**Expands all column groups up to the given depth, and collapses all others.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

// All column groups of depth 2 and lower are expanded, and groups with depth
// 3 and higher are collapsed.
sheet.expandColumnGroupsUpToDepth(2);
```
@param groupDepth The group depth up to which to expand the column groups.
@return This sheet, for chaining.*/expandColumnGroupsUpToDepth(groupDepth:Integer):SpreadsheetApp.Sheet;
/**Expands all row groups up to the given depth, and collapses all others.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

// All row groups of depth 2 and lower are expanded, and groups with depth
// 3 and higher are collapsed.
sheet.expandRowGroupsUpToDepth(2);
```
@param groupDepth The group depth up to which to expand the row groups.
@return This sheet, for chaining.*/expandRowGroupsUpToDepth(groupDepth:Integer):SpreadsheetApp.Sheet;
/**Returns the active cell in this sheet.

__Note:__ It's preferable to use [`getCurrentCell()`](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getCurrentCell()), which returns the current
highlighted cell.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
// Returns the active cell
var cell = sheet.getActiveCell();
```
@return the current active cell*/getActiveCell():SpreadsheetApp.Range;
/**Returns the selected range in the active sheet, or `null` if there is no active range. If
multiple ranges are selected this method returns only the last selected range.

The term "active range" refers to the range that a user has selected in the active sheet,
but in a custom function it refers to the cell being actively recalculated.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
var activeRange = sheet.getActiveRange();
```
@return the active range*/getActiveRange():SpreadsheetApp.Range;
/**Returns the list of active ranges in the active sheet or `null` if there are no active
ranges.

If there is a single range selected, this behaves as a [`getActiveRange()`](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getActiveRange()) call.

```
var sheet = SpreadsheetApp.getActiveSheet();
// Returns the list of active ranges.
var activeRangeList = sheet.getActiveRangeList();
```
@return the list of active ranges*/getActiveRangeList():SpreadsheetApp.RangeList;
/**Returns all the bandings in this sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the banding info for the sheet.
const bandings = sheet.getBandings();

// Gets info on the bandings' second row color and logs it to the console.
for (const banding of bandings) {
  console.log(banding.getSecondRowColor());
}
```
@return All the bandings in this sheet.*/getBandings():SpreadsheetApp.Banding[];
/**Returns an array of charts on this sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var charts = sheet.getCharts();

for (var i in charts) {
  var chart = charts[i];
  // Do something with the chart
}
```
@return An array of charts.*/getCharts():SpreadsheetApp.EmbeddedChart[];
/**Returns the column group at the given index and group depth.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

// Returns the group whose control index is at column 2 and has a depth of 1, or
// null if the group doesn’t exist.
var columnGroup = sheet.getColumnGroup(2, 1);
```
@param columnIndex The column index of the group control toggle or an index within the group.
@param groupDepth The depth of the group.
@return The column group at the control index and depth, or throws an exception if the group
    doesn’t exist.*/getColumnGroup(columnIndex:Integer,groupDepth:Integer):SpreadsheetApp.Group;
/**Returns the [`GroupControlTogglePosition`](https://developers.google.com/apps-script/reference/spreadsheet/group-control-toggle-position.html) for all column groups on the sheet.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

// GroupControlTogglePosition.AFTER if the column grouping control toggle is shown after the
// group.
var columnGroupControlPosition = sheet.getColumnGroupControlPosition();
```
@return `true` if the column grouping control toggle is shown after the group on this
    sheet and `false` otherwise.*/getColumnGroupControlPosition():SpreadsheetApp.GroupControlTogglePosition;
/**Returns the group depth of the column at the given index.

The group depth indicates how many groups overlap with the column. This can range between
zero and eight.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

// 1 if there is a group over columns 1 through 3
var groupDepth = sheet.getColumnGroupDepth(1);
```
@param columnIndex The index of the column.
@return The group depth of the column at the given index.*/getColumnGroupDepth(columnIndex:Integer):Integer;
/**Gets the width in pixels of the given column.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Columns start at 1
Logger.log(sheet.getColumnWidth(1));
```
@param columnPosition The position of the column to examine.
@return column width in pixels*/getColumnWidth(columnPosition:Integer):Integer;
/**Get all conditional format rules in this sheet.

```
// Logs the conditional format rules in a sheet.
var rules = SpreadsheetApp.getActiveSheet().getConditionalFormatRules();
for (var i = 0; i < rules.length; i++) {
  var rule = rules[i];
  Logger.log(rule);
}
```
@return An array of all rules in the sheet.*/getConditionalFormatRules():SpreadsheetApp.ConditionalFormatRule[];
/**Returns the current cell in the active sheet or `null` if there is no current cell. The
current cell is the cell that has focus in the Google Sheets UI, and is highlighted by a dark
border. There is never more than one current cell. When a user selects one or more cell ranges,
one of the cells in the selection is the current cell.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
// Returns the current highlighted cell in the one of the active ranges.
var currentCell = sheet.getCurrentCell();
```
@return the current cell*/getCurrentCell():SpreadsheetApp.Range;
/**Returns a [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) corresponding to the dimensions in which data is present.

This is functionally equivalent to creating a Range bounded by A1 and
(Sheet.getLastColumn(), Sheet.getLastRow()).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This represents ALL the data
var range = sheet.getDataRange();
var values = range.getValues();

// This logs the spreadsheet in CSV format with a trailing comma
for (var i = 0; i < values.length; i++) {
  var row = "";
  for (var j = 0; j < values[i].length; j++) {
    if (values[i][j]) {
      row = row + values[i][j];
    }
    row = row + ",";
  }
  Logger.log(row);
}
```
@return a range consisting of all the data in the spreadsheet*/getDataRange():SpreadsheetApp.Range;
/**Gets all the data source formulas.

```
// Opens the spreadsheet by its ID. If you created your script from within a Google Sheets
// file, use SpreadsheetApp.getActiveSpreadsheet().
// TODO(developer): Replace the ID with your own.
const ss = SpreadsheetApp.openById('abc123456');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets an array of the data source formulas on Sheet1.
// To get an array of data source formulas for the entire spreadsheet,
// replace 'sheet' with 'ss'.
const dataSourceFormulas = sheet.getDataSourceFormulas();

// Logs the first data source formula in the array.
console.log(dataSourceFormulas[0].getFormula());
```
@return A list of data source formulas.*/getDataSourceFormulas():SpreadsheetApp.DataSourceFormula[];
/**Gets all the data source pivot tables.

```
// Opens the spreadsheet file by its ID. If you created your script from a Google Sheets file,
// use SpreadsheetApp.getActiveSpreadsheet().
// TODO(developer): Replace the ID with your own.
const ss = SpreadsheetApp.openById('abc123456');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets an array of the data source pivot tables on Sheet1.
// To get an array of data source pivot tables for the entire
// spreadsheet, replace 'sheet' with 'ss'.
const dataSourcePivotTables = sheet.getDataSourcePivotTables();

// Logs the last time that the first pivot table in the array was refreshed.
console.log(dataSourcePivotTables[0].getStatus().getLastRefreshedTime());
```
@return A list of data source pivot tables.*/getDataSourcePivotTables():SpreadsheetApp.DataSourcePivotTable[];
/**Gets all the data source tables.

```
// Opens the spreadsheet file by its ID. If you created your script from a Google Sheets file,
// use SpreadsheetApp.getActiveSpreadsheet().
// TODO(developer): Replace the ID with your own.
const ss = SpreadsheetApp.openById('abc123456');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets an array of data source tables on Sheet1.
// To get an array of data source tables for the entire spreadsheet,
// replace 'sheet' with 'ss'.
const dataSourceTables = sheet.getDataSourceTables();

// Logs the last completed data execution time on the first data source table.
console.log(dataSourceTables[0].getStatus().getLastExecutionTime());
```
@return A list of data source tables.*/getDataSourceTables():SpreadsheetApp.DataSourceTable[];
/**Get all developer metadata associated with this sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Adds developer metadata for testing.
sheet.addDeveloperMetadata('CITY', 'PARIS');

// Gets all the developer metadata for the sheet.
const developerMetaDataList = sheet.getDeveloperMetadata();

// Logs the developer metadata to the console.
for (const developerMetaData of developerMetaDataList) {
  console.log(developerMetaData.getKey());
}
```
@return The developer metadata associated with this sheet.*/getDeveloperMetadata():SpreadsheetApp.DeveloperMetadata[];
/**Returns an array of drawings on the sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets all the drawings from the sheet.
const allDrawings = sheet.getDrawings();

 // Logs the number of drawings present on the sheet.
console.log(allDrawings.length);
```
@return The list of drawings on this sheet.*/getDrawings():SpreadsheetApp.Drawing[];
/**Returns the filter in this sheet, or `null` if there is no filter.

```
// Gets the filter on the active sheet.
let ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
```
@return The filter.*/getFilter():SpreadsheetApp.Filter;
/**Returns the URL for the form that sends its responses to this sheet, or `null` if this
sheet has no associated form.

```
var sheet = SpreadsheetApp.getActiveSheet();
var url = sheet.getFormUrl();
```
@return The URL for the form that places its responses in this sheet, or `null` if this
    sheet doesn't have an associated form.*/getFormUrl():string;
/**Returns the number of frozen columns.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

Logger.log("Number of frozen columns: %s", sheet.getFrozenColumns());
```
@return the number of frozen columns*/getFrozenColumns():Integer;
/**Returns the number of frozen rows.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

Logger.log("Number of frozen rows: %s", sheet.getFrozenRows());
```
@return the number of frozen rows*/getFrozenRows():Integer;
/**Returns all over-the-grid images on the sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets spreadsheet, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the over-the-grid images from Sheet1.
// To get the over-the-grid images from the entire spreadsheet, use ss.getImages() instead.
const images = sheet.getImages();

// For each image, logs the anchor cell in A1 notation.
for (const image of images) {
 console.log(image.getAnchorCell().getA1Notation());
}
```
@return An array of over-the-grid images.*/getImages():SpreadsheetApp.OverGridImage[];
/**Gets the position of the sheet in its parent spreadsheet. Starts at 1.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
// Note that the JavaScript index is 0, but this logs 1
var sheet = ss.getSheets()[0];
// ... because spreadsheets are 1-indexed
Logger.log(sheet.getIndex());
```
@return The position of the sheet in its parent spreadsheet.*/getIndex():Integer;
/**Returns the position of the last column that has content.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This logs the value in the very last cell of this sheet
var lastRow = sheet.getLastRow();
var lastColumn = sheet.getLastColumn();
var lastCell = sheet.getRange(lastRow, lastColumn);
Logger.log(lastCell.getValue());
```
@return the last column of the sheet that contains content*/getLastColumn():Integer;
/**Returns the position of the last row that has content.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This logs the value in the very last cell of this sheet
var lastRow = sheet.getLastRow();
var lastColumn = sheet.getLastColumn();
var lastCell = sheet.getRange(lastRow, lastColumn);
Logger.log(lastCell.getValue());
```
@return the last row of the sheet that contains content*/getLastRow():Integer;
/**Returns the current number of columns in the sheet, regardless of content.

```
// This example assumes there is a sheet named "first"
var ss = SpreadsheetApp.getActiveSpreadsheet();
var first = ss.getSheetByName("first");
Logger.log(first.getMaxColumns());
```
@return The maximum width of the sheet.*/getMaxColumns():Integer;
/**Returns the current number of rows in the sheet, regardless of content.

```
// This example assumes there is a sheet named "first"
var ss = SpreadsheetApp.getActiveSpreadsheet();
var first = ss.getSheetByName("first");
Logger.log(first.getMaxRows());
```
@return The maximum height of the sheet.*/getMaxRows():Integer;
/**Returns the name of the sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
Logger.log(sheet.getName());
```
@return The name of the sheet.*/getName():string;
/**Gets all the named ranges in this sheet.

```
// The code below logs the name of the first named range.
var namedRanges = SpreadsheetApp.getActiveSheet().getNamedRanges();
if (namedRanges.length > 1) {
  Logger.log(namedRanges[0].getName());
}
```
@return An array of all the named ranges in the sheet.*/getNamedRanges():SpreadsheetApp.NamedRange[];
/**Returns the [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html) that contains this sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
// parent is identical to ss
var parent = sheet.getParent();
```
@return The parent spreadsheet.*/getParent():SpreadsheetApp.Spreadsheet;
/**Returns all the pivot tables on this sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets all the pivot table info for the sheet.
const pivotTables = sheet.getPivotTables();

// Logs the pivot tables to the console.
for (const pivotTable of pivotTables) {
  console.log(pivotTable.getSourceDataRange().getValues());
}
```
@return The pivot tables on this sheet.*/getPivotTables():SpreadsheetApp.PivotTable[];
/**Gets an array of objects representing all protected ranges in the sheet, or a single-element
array representing the protection on the sheet itself.

```
// Remove all range protections in the spreadsheet that the user has permission to edit.
var sheet = SpreadsheetApp.getActiveSheet();
var protections = sheet.getProtections(SpreadsheetApp.ProtectionType.RANGE);
for (var i = 0; i < protections.length; i++) {
  var protection = protections[i];
  if (protection.canEdit()) {
    protection.remove();
  }
}
```

```
// Remove sheet protection from the active sheet, if the user has permission to edit it.
var sheet = SpreadsheetApp.getActiveSheet();
var protection = sheet.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
if (protection && protection.canEdit()) {
  protection.remove();
}
```
@param type The type of protected area, either `SpreadsheetApp.ProtectionType.RANGE` or
    `SpreadsheetApp.ProtectionType.SHEET`.
@return An array of objects representing all protected ranges in the sheet, or a single-element
    array representing the protection on the sheet itself.*/getProtections(type:SpreadsheetApp.ProtectionType):SpreadsheetApp.Protection[];
/**Returns the range with the top left cell at the given coordinates.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
// Passing only two arguments returns a "range" with a single cell.
var range = sheet.getRange(1, 1);
var values = range.getValues();
Logger.log(values[0][0]);
```
@param row The row index of the cell to return; row indexing starts with 1.
@param column The column index of the cell to return; column indexing starts with 1.
@return A range containing only this cell.*/getRange(row:Integer,column:Integer):SpreadsheetApp.Range;
/**Returns the range with the top left cell at the given coordinates, and with the given number of
rows.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
// When the "numRows" argument is used, only a single column of data is returned.
var range = sheet.getRange(1, 1, 3);
var values = range.getValues();

// Prints 3 values from the first column, starting from row 1.
for (var row in values) {
  for (var col in values[row]) {
    Logger.log(values[row][col]);
  }
}
```
@param row The starting row index of the range; row indexing starts with 1.
@param column The column index of the range; column indexing starts with 1.
@param numRows The number of rows to return.
@return A range containing a single column of data with the number of rows specified.*/getRange(row:Integer,column:Integer,numRows:Integer):SpreadsheetApp.Range;
/**Returns the range with the top left cell at the given coordinates with the given number of rows
and columns.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange(1, 1, 3, 3);
var values = range.getValues();

// Print values from a 3x3 box.
for (var row in values) {
  for (var col in values[row]) {
    Logger.log(values[row][col]);
  }
}
```
@param row The starting row index of the range; row indexing starts with 1.
@param column The starting column index of the range; column indexing starts with 1.
@param numRows The number of rows to return.
@param numColumns The number of columns to return.
@return A range corresponding to the area specified.*/getRange(row:Integer,column:Integer,numRows:Integer,numColumns:Integer):SpreadsheetApp.Range;
/**Returns the range as specified in A1 notation or R1C1 notation.

```
// Get a range A1:D4 on sheet titled "Invoices"
var ss = SpreadsheetApp.getActiveSpreadsheet();
var range = ss.getRange("Invoices!A1:D4");

// Get cell A1 on the first sheet
var sheet = ss.getSheets()[0];
var cell = sheet.getRange("A1");
```
@param a1Notation The range to return, as specified in A1 notation or R1C1 notation.
@return the range at the location designated*/getRange(a1Notation:string):SpreadsheetApp.Range;
/**Returns the [`RangeList`](https://developers.google.com/apps-script/reference/spreadsheet/range-list.html) collection representing the ranges in the same sheet specified
by a non-empty list of A1 notations or R1C1 notations.

```
// Get a list of ranges A1:D4, F1:H4.
var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
var rangeList  = sheet.getRangeList(['A1:D4', 'F1:H4']);
```
@param a1Notations The list of ranges to return, as specified in A1 notation or R1C1 notation.
@return the range list at the location designated*/getRangeList(a1Notations:string[]):SpreadsheetApp.RangeList;
/**Returns the row group at the given index and group depth.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

// Returns the group whose control index is at row 2 and has a depth of 1, or
// null if the group doesn’t exist.
var rowGroup = sheet.getRowGroup(2, 1);
```
@param rowIndex The row index of the group control toggle or an index within the group.
@param groupDepth The depth of the group.
@return The row group at the control index and depth, or throws an exception if the group
    doesn’t exist.*/getRowGroup(rowIndex:Integer,groupDepth:Integer):SpreadsheetApp.Group;
/**Returns the [`GroupControlTogglePosition`](https://developers.google.com/apps-script/reference/spreadsheet/group-control-toggle-position.html) for all row groups on the sheet.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

// GroupControlTogglePosition.AFTER if the row grouping control toggle is shown after the
// group.
var rowGroupControlPosition = sheet.getRowGroupControlPosition();
```
@return `true` if the row grouping control toggle is shown after the group on this sheet
    and `false` otherwise.*/getRowGroupControlPosition():SpreadsheetApp.GroupControlTogglePosition;
/**Returns the group depth of the row at the given index.

The group depth indicates how many groups overlap with the row. This can range between zero
and eight.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

// 1 if there is a group over rows 1 through 3
var groupDepth = sheet.getRowGroupDepth(1);
```
@param rowIndex The index of the row.
@return The group depth of the row at the given index.*/getRowGroupDepth(rowIndex:Integer):Integer;
/**Gets the height in pixels of the given row.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Rows start at 1
Logger.log(sheet.getRowHeight(1));
```
@param rowPosition The position of the row to examine.
@return row height in pixels*/getRowHeight(rowPosition:Integer):Integer;
/**Returns the current [`Selection`](https://developers.google.com/apps-script/reference/spreadsheet/selection.html) in the spreadsheet.

```
var selection = SpreadsheetApp.getActiveSpreadsheet().getSelection();
var currentCell = selection.getCurrentCell();
```
@return the current selection*/getSelection():SpreadsheetApp.Selection;
/**Returns the ID of the sheet represented by this object.

This is an ID for the sheet that is unique to the spreadsheet. The ID is a monotonically
increasing integer assigned at sheet creation time that is independent of sheet position. This
is useful in conjunction with methods such as [`Range.copyFormatToRange(gridId, column, columnEnd, row, rowEnd)`](https://developers.google.com/apps-script/reference/spreadsheet/range.html#copyFormatToRange(Integer,Integer,Integer,Integer,Integer)) that take a `gridId` parameter rather than a [`Sheet`](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html) instance.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

Logger.log(sheet.getSheetId());
```
@return an ID for the sheet unique to the spreadsheet*/getSheetId():Integer;
/**Returns the sheet name.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

Logger.log(sheet.getSheetName());
```
@return the name of the sheet*/getSheetName():string;
/**Returns a ~~[`PageProtection`](https://developers.google.com/apps-script/reference/spreadsheet/page-protection.html)~~ instance describing the permissions for the current sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var permissions = sheet.getSheetProtection();

permissions.setProtected(true);
permissions.addUser("user@example.com");

// Logs the users that have access to edit this sheet. Note that this
// is different from access to the entire spreadsheet - getUsers()
// only returns users if permissions.isProtected() is set to true.
var users = permissions.getUsers();
Logger.log(users);
```
@deprecated
@return an object describing sheet access permissions*/getSheetProtection():SpreadsheetApp.PageProtection;
/**Returns the rectangular grid of values for this range starting at the given coordinates. A -1
value given as the row or column position is equivalent to getting the very last row or column
that has data in the sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// The two samples below produce the same output
var values = sheet.getSheetValues(1, 1, 3, 3);
Logger.log(values);

var range = sheet.getRange(1, 1, 3, 3);
values = range.getValues();
Logger.log(values);
```
@param startRow The position of the starting row.
@param startColumn The position of the starting column.
@param numRows The number of rows to return values for.
@param numColumns The number of columns to return values for.
@return a two-dimensional array of values*/getSheetValues(startRow:Integer,startColumn:Integer,numRows:Integer,numColumns:Integer):Object[][];
/**Returns an array of slicers on the sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets all slicers in the spreadsheet.
const slicers = sheet.getSlicers();

// Logs the slicer titles to the console.
for (const slicer of slicers) {
  console.log(slicer.getTitle());
}
```
@return The list of slicers on this sheet.*/getSlicers():SpreadsheetApp.Slicer[];
/**Gets the sheet tab color, or `null` if the sheet tab has no color.

```
// This example assumes there is a sheet named "first"
var ss = SpreadsheetApp.getActiveSpreadsheet();
var first = ss.getSheetByName("first");
var color = first.getTabColor();
```
@deprecated
@return Color code in CSS notation (such as `'#ffffff'`).*/getTabColor():string;
/**Gets the sheet tab color, or `null` if the sheet tab has no color.

```
// This example assumes there is a sheet named "Sheet1"
var ss = SpreadsheetApp.getActiveSpreadsheet();
var first = ss.getSheetByName("Sheet1");
var color = first.getTabColorObject();
```
@return The sheet tab color, or `null` if the sheet tab has no color.*/getTabColorObject():SpreadsheetApp.Color;
/**Returns the type of the sheet.

The default type of sheet is [`SheetType.GRID`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html#GRID). A sheet that contains a single embedded
object such as an [`EmbeddedChart`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart.html) is an [`SheetType.OBJECT`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html#OBJECT) sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
Logger.log(sheet.getType());
```
@return The type of the sheet.*/getType():SpreadsheetApp.SheetType;
/**Returns `true` if the sheet's gridlines are hidden; otherwise returns `false`.
Gridlines are visible by default.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Checks if the spreadsheet has hidden gridelines and logs the result to the console.
console.log(sheet.hasHiddenGridlines());
```
@return `true` if gridlines are hidden; `false` otherwise.*/hasHiddenGridlines():boolean;
/**Hides the column or columns in the given range.

```
let ss = SpreadsheetApp.getActiveSpreadsheet();
let sheet = ss.getSheets()[0];

// This hides the first column
let range = sheet.getRange("A1");
sheet.hideColumn(range);

// This hides the first 3 columns
let range = sheet.getRange("A:C");
sheet.hideColumn(range);
```
@param column The column range to hide.*/hideColumn(column:SpreadsheetApp.Range):void;
/**Hides a single column at the given index. Use 1-index for this method.

To hide more than one column using an index, use [`hideColumns(columnIndex, numColumns)`](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#hideColumns(Integer,Integer)).

To hide more than one column using a range, use [`hideColumn()`](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#hideColumn(Range)).

```
let ss = SpreadsheetApp.getActiveSpreadsheet();
let sheet = ss.getSheets()[0];
// Hides the first column
sheet.hideColumns(1);
```
@param columnIndex The index of the column to hide.*/hideColumns(columnIndex:Integer):void;
/**Hides one or more consecutive columns starting at the given index. Use 1-index for this method.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
// Hides the first three columns
sheet.hideColumns(1, 3);
```
@param columnIndex The starting index of the columns to hide.
@param numColumns The number of columns to hide.*/hideColumns(columnIndex:Integer,numColumns:Integer):void;
/**Hides the rows in the given range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This hides the first row
var range = sheet.getRange("A1");
sheet.hideRow(range);
```
@param row The row range to hide.*/hideRow(row:SpreadsheetApp.Range):void;
/**Hides the row at the given index.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
// Hides the first row
sheet.hideRows(1);
```
@param rowIndex The index of the row to hide.*/hideRows(rowIndex:Integer):void;
/**Hides one or more consecutive rows starting at the given index.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
// Hides the first three rows
sheet.hideRows(1, 3);
```
@param rowIndex The starting index of the rows to hide.
@param numRows The number of rows to hide.*/hideRows(rowIndex:Integer,numRows:Integer):void;
/**Hides this sheet. Has no effect if the sheet is already hidden. If this method is called on the
only visible sheet, it throws an exception.

```
var sheet = SpreadsheetApp.getActiveSheet();
sheet.hideSheet();
```
@return The current sheet.*/hideSheet():SpreadsheetApp.Sheet;
/**Adds a new chart to this sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This creates a simple bar chart from the first three rows
// of the first two columns of the spreadsheet
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B4"))
    .setPosition(5, 5, 0, 0)
    .setOption("title", "Dynamic Chart")
    .build();
sheet.insertChart(chart);
```
@param chart The chart to insert.*/insertChart(chart:SpreadsheetApp.EmbeddedChart):void;
/**Inserts a column after the given column position.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This inserts a column after the first column position
sheet.insertColumnAfter(1);
```
@param afterPosition The column after which the new column should be added.
@return the sheet, useful for method chaining*/insertColumnAfter(afterPosition:Integer):SpreadsheetApp.Sheet;
/**Inserts a column before the given column position.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This inserts a column in the first column position
sheet.insertColumnBefore(1);
```
@param beforePosition The column before which the new column should be added.
@return the sheet, useful for method chaining*/insertColumnBefore(beforePosition:Integer):SpreadsheetApp.Sheet;
/**Inserts a blank column in a sheet at the specified location.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
// Shifts all columns by one
sheet.insertColumns(1);
```
@param columnIndex The index indicating where to insert a column.*/insertColumns(columnIndex:Integer):void;
/**Inserts one or more consecutive blank columns in a sheet starting at the specified location.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
// Shifts all columns by three
sheet.insertColumns(1, 3);
```
@param columnIndex The index indicating where to insert a column.
@param numColumns The number of columns to insert.*/insertColumns(columnIndex:Integer,numColumns:Integer):void;
/**Inserts a given number of columns after the given column position.

```
let ss = SpreadsheetApp.getActiveSpreadsheet();
let sheet = ss.getSheets()[0];

// Inserts two columns after the first column on the first sheet of the spreadsheet.
sheet.insertColumnsAfter(1,2);
```
@param afterPosition The column after which the new column should be added.
@param howMany The number of columns to insert.
@return the sheet, useful for method chaining*/insertColumnsAfter(afterPosition:Integer,howMany:Integer):SpreadsheetApp.Sheet;
/**Inserts a number of columns before the given column position.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This inserts five columns before the first column
sheet.insertColumnsBefore(1, 5);
```
@param beforePosition The column before which the new column should be added.
@param howMany The number of columns to insert.
@return the sheet, useful for method chaining*/insertColumnsBefore(beforePosition:Integer,howMany:Integer):SpreadsheetApp.Sheet;
/**Inserts a [`BlobSource`](https://developers.google.com/apps-script/reference/spreadsheet/../base/blob-source.html) as an image in the document at a given row and column. The image
size is retrieved from the blob contents. The maximum supported blob size is 2MB.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var blob = Utilities.newBlob(binaryData, 'image/png', 'MyImageName');
sheet.insertImage(blob, 1, 1);
```
@param blobSource The blob containing the image contents, MIME type, and (optionally) name.
@param column The column position.
@param row The row position.
@return The inserted image.*/insertImage(blobSource:BlobSource,column:Integer,row:Integer):SpreadsheetApp.OverGridImage;
/**Inserts a [`BlobSource`](https://developers.google.com/apps-script/reference/spreadsheet/../base/blob-source.html) as an image in the document at a given row and column, with a
pixel offset. The image size is retrieved from the blob contents. The maximum supported blob
size is 2MB.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var blob = Utilities.newBlob(binaryData, 'image/png', 'MyImageName');
sheet.insertImage(blob, 1, 1, 10, 10);
```
@param blobSource The blob containing the image contents, MIME type, and (optionally) name.
@param column The column position.
@param row The row position.
@param offsetX The horizontal offset from cell corner in pixels.
@param offsetY The vertical offset from cell corner in pixels.
@return The inserted image.*/insertImage(blobSource:BlobSource,column:Integer,row:Integer,offsetX:Integer,offsetY:Integer):SpreadsheetApp.OverGridImage;
/**Inserts an image in the document at a given row and column.

The provided URL must be publicly accessible.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

sheet.insertImage("https://www.google.com/images/srpr/logo3w.png", 1, 1);
```
@param url The URL of the image.
@param column The grid column position.
@param row The grid row position.
@return The inserted image.*/insertImage(url:string,column:Integer,row:Integer):SpreadsheetApp.OverGridImage;
/**Inserts an image in the document at a given row and column, with a pixel offset.

The provided URL must be publicly accessible.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

sheet.insertImage("https://www.google.com/images/srpr/logo3w.png", 1, 1, 10, 10);
```
@param url The URL for the image.
@param column The column position.
@param row The row position.
@param offsetX The horizontal offset from cell corner in pixels.
@param offsetY The vertical offset from cell corner in pixels.
@return The Inserted image.*/insertImage(url:string,column:Integer,row:Integer,offsetX:Integer,offsetY:Integer):SpreadsheetApp.OverGridImage;
/**Inserts a row after the given row position.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This inserts a row after the first row position
sheet.insertRowAfter(1);
```
@param afterPosition The row after which the new row should be added.
@return the sheet, useful for method chaining*/insertRowAfter(afterPosition:Integer):SpreadsheetApp.Sheet;
/**Inserts a row before the given row position.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This inserts a row before the first row position
sheet.insertRowBefore(1);
```
@param beforePosition The row before which the new row should be added.
@return the sheet, useful for method chaining*/insertRowBefore(beforePosition:Integer):SpreadsheetApp.Sheet;
/**Inserts a blank row in a sheet at the specified location.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
// Shifts all rows down by one
sheet.insertRows(1);
```
@param rowIndex The index indicating where to insert a row.*/insertRows(rowIndex:Integer):void;
/**Inserts one or more consecutive blank rows in a sheet starting at the specified location.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
// Shifts all rows down by three
sheet.insertRows(1, 3);
```
@param rowIndex The index indicating where to insert a row.
@param numRows The number of rows to insert.*/insertRows(rowIndex:Integer,numRows:Integer):void;
/**Inserts a number of rows after the given row position.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This inserts five rows after the first row
sheet.insertRowsAfter(1, 5);
```
@param afterPosition The row after which the new rows should be added.
@param howMany The number of rows to insert.
@return the sheet, useful for method chaining*/insertRowsAfter(afterPosition:Integer,howMany:Integer):SpreadsheetApp.Sheet;
/**Inserts a number of rows before the given row position.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This inserts five rows before the first row
sheet.insertRowsBefore(1, 5);
```
@param beforePosition The row before which the new rows should be added.
@param howMany The number of rows to insert.
@return the sheet, useful for method chaining*/insertRowsBefore(beforePosition:Integer,howMany:Integer):SpreadsheetApp.Sheet;
/**Adds a new slicer to this sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range of the sheet.
const range = sheet.getRange('A1:D10');

// Inserts the slicer with a random range into the sheet.
const insertSlicers = sheet.insertSlicer(range.randomize(), 1, 10);

// Logs the insert slicer result to the console.
console.log(insertSlicers);
```
@param range The range over which slicer slicer is created.
@param anchorRowPos The slicer's top side is anchored in this row.
@param anchorColPos The slicer's top side is anchored in this col.
@return The newly inserted slicer.*/insertSlicer(range:SpreadsheetApp.Range,anchorRowPos:Integer,anchorColPos:Integer):SpreadsheetApp.Slicer;
/**Adds a new slicer to this sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range.
const range = sheet.getRange('A1:D10');

// Inserts a slicer using the random range function.
const insertSlicers = sheet.insertSlicer(range.randomize(), 1, 10, 0, 0);

// Logs the insert slicer result to the console.
console.log(insertSlicers);
```
@param range The range over which slicer slicer is created.
@param anchorRowPos The slicer's top side is anchored in this row.
@param anchorColPos The slicer's top side is anchored in this col.
@param offsetX The horizontal offset from cell corner in pixels.
@param offsetY The vertical offset from cell corner in pixels.
@return The newly inserted slicer.*/insertSlicer(range:SpreadsheetApp.Range,anchorRowPos:Integer,anchorColPos:Integer,offsetX:Integer,offsetY:Integer):SpreadsheetApp.Slicer;
/**Returns whether the given column is hidden by the user.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Columns start at 1
Logger.log(sheet.isColumnHiddenByUser(1));
```
@param columnPosition The position of the column to examine.
@return `true` if the column is hidden, `false` otherwise.*/isColumnHiddenByUser(columnPosition:Integer):boolean;
/**Returns `true` if this sheet layout is right-to-left. Returns `false` if the sheet
uses the default left-to-right layout.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Checks if a spreadsheet is ordered from right to left and logs the result to the console.
console.log(sheet.isRightToLeft());
```
@return `true` if right-to-left; `false` otherwise.*/isRightToLeft():boolean;
/**Returns whether the given row is hidden by a filter (not a filter view).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Rows start at 1
Logger.log(sheet.isRowHiddenByFilter(1));
```
@param rowPosition The position of the row to examine.
@return `true` if the row is hidden, `false` otherwise.*/isRowHiddenByFilter(rowPosition:Integer):boolean;
/**Returns whether the given row is hidden by the user.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Rows start at 1
Logger.log(sheet.isRowHiddenByUser(1));
```
@param rowPosition The position of the row to examine.
@return `true` if the row is hidden, `false` otherwise.*/isRowHiddenByUser(rowPosition:Integer):boolean;
/**Returns `true` if the sheet is currently hidden.

```
var sheet = SpreadsheetApp.getActiveSheet();
if (sheet.isSheetHidden()) {
  // do something...
}
```
@return `true` if the sheet is hidden, `false` otherwise.*/isSheetHidden():boolean;
/**Moves the columns selected by the given range to the position indicated by the `destinationIndex`. The `columnSpec` itself does not have to exactly represent an entire
column or group of columns to move—it selects all columns that the range spans.

```
// The code below moves rows A-B to destination index 5.
// This results in those columns becoming columns C-D.
var sheet = SpreadsheetApp.getActiveSheet();
// Selects column A and column B to be moved.
var columnSpec = sheet.getRange("A1:B1");
sheet.moveColumns(columnSpec, 5);
```
@param columnSpec A range spanning the columns that should be moved.
@param destinationIndex The index that the columns should be moved to. Note that this index is
    based on the coordinates before the columns are moved. Existing data is shifted right to
    make room for the moved columns while the source columns are removed from the grid.
    Therefore, the data may end up at a different index than originally specified.*/moveColumns(columnSpec:SpreadsheetApp.Range,destinationIndex:Integer):void;
/**Moves the rows selected by the given range to the position indicated by the `destinationIndex`. The `rowSpec` itself does not have to exactly represent an entire row
or group of rows to move—it selects all rows that the range spans.

```
// The code below moves rows 1-2 to destination index 5.
// This results in those rows becoming rows 3-4.
var sheet = SpreadsheetApp.getActiveSheet();
// Selects row 1 and row 2 to be moved.
var rowSpec = sheet.getRange("A1:A2");
sheet.moveRows(rowSpec, 5);
```
@param rowSpec A range spanning the rows that should be moved.
@param destinationIndex The index that the rows should be moved to. Note that this index is
    based on the coordinates before the rows are moved. Existing data is shifted down to make
    room for the moved rows while the source rows are removed from the grid. Therefore, the
    data may end up at a different index than originally specified.*/moveRows(rowSpec:SpreadsheetApp.Range,destinationIndex:Integer):void;
/**Returns a builder to create a new chart for this sheet.

This example shows how to create a new chart:

```
var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B8");
var chartBuilder = sheet.newChart();
chartBuilder.addRange(range)
    .setChartType(Charts.ChartType.LINE)
    .setPosition(2, 2, 0, 0)
    .setOption('title', 'My Line Chart!');
sheet.insertChart(chartBuilder.build());
```
@return A builder to create a new chart.*/newChart():SpreadsheetApp.EmbeddedChartBuilder;
/**Creates an object that can protect the sheet from being edited except by users who have
permission. Until the script actually changes the list of editors for the sheet (by calling
[`Protection.removeEditor(emailAddress)`](https://developers.google.com/apps-script/reference/spreadsheet/protection.html#removeEditor(String)), [`Protection.removeEditor(user)`](https://developers.google.com/apps-script/reference/spreadsheet/protection.html#removeEditor(User)), [`Protection.removeEditors(emailAddresses)`](https://developers.google.com/apps-script/reference/spreadsheet/protection.html#removeEditors(String)), [`Protection.addEditor(emailAddress)`](https://developers.google.com/apps-script/reference/spreadsheet/protection.html#addEditor(String)), [`Protection.addEditor(user)`](https://developers.google.com/apps-script/reference/spreadsheet/protection.html#addEditor(User)), [`Protection.addEditors(emailAddresses)`](https://developers.google.com/apps-script/reference/spreadsheet/protection.html#addEditors(String)), or setting a new
value for [`Protection.setDomainEdit(editable)`](https://developers.google.com/apps-script/reference/spreadsheet/protection.html#setDomainEdit(Boolean))), the permissions mirror those of the
spreadsheet itself, which effectively means that the sheet remains unprotected. If the sheet is
already protected, this method returns an object representing its existing protection settings.
A protected sheet may include unprotected regions.

```
// Protect the active sheet, then remove all other users from the list of editors.
var sheet = SpreadsheetApp.getActiveSheet();
var protection = sheet.protect().setDescription('Sample protected sheet');

// Ensure the current user is an editor before removing others. Otherwise, if the user's edit
// permission comes from a group, the script throws an exception upon removing the group.
var me = Session.getEffectiveUser();
protection.addEditor(me);
protection.removeEditors(protection.getEditors());
if (protection.canDomainEdit()) {
  protection.setDomainEdit(false);
}
```
@return An object representing the protection settings.*/protect():SpreadsheetApp.Protection;
/**Removes a chart from the parent sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This removes all the embedded charts from the spreadsheet
var charts = sheet.getCharts();
for (var i in charts) {
  sheet.removeChart(charts[i]);
}
```
@param chart The chart to remove.*/removeChart(chart:SpreadsheetApp.EmbeddedChart):void;
/**Sets the specified range as the [`active range`](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getActiveRange()) in the active sheet, with
the top left cell in the range as the [`current cell`](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getCurrentCell()).

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
var range = sheet.getRange('A1:D4');
sheet.setActiveRange(range);

var selection = sheet.getSelection();
// Current cell: A1
var currentCell = selection.getCurrentCell();
// Active Range: A1:D4
var activeRange = selection.getActiveRange();
```
@param range The range to set as the active range.
@return the newly active range*/setActiveRange(range:SpreadsheetApp.Range):SpreadsheetApp.Range;
/**Sets the specified list of ranges as the [`active ranges`](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getActiveRangeList()) in the
active sheet. The last range in the list is set as the [`active range`](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getActiveRange()).

```
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['D4', 'B2:C4']);
sheet.setActiveRangeList(rangeList);

var selection = sheet.getSelection();
// Current cell: B2
var currentCell = selection.getCurrentCell();
// Active range: B2:C4
var activeRange = selection.getActiveRange();
// Active range list: [D4, B2:C4]
var activeRangeList = selection.getActiveRangeList();
```
@param rangeList The list of ranges to select.
@return the newly selected list of ranges*/setActiveRangeList(rangeList:SpreadsheetApp.RangeList):SpreadsheetApp.RangeList;
/**Sets the active selection region for this sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:D4");
sheet.setActiveSelection(range);
```
@param range The range to set as the active selection.
@return the newly active range*/setActiveSelection(range:SpreadsheetApp.Range):SpreadsheetApp.Range;
/**Sets the active selection, as specified in A1 notation or R1C1 notation.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

sheet.setActiveSelection("A1:D4");
```
@param a1Notation The range to set as active, as specified in A1 notation or R1C1 notation.
@return the newly active range*/setActiveSelection(a1Notation:string):SpreadsheetApp.Range;
/**Sets the position of the column group control toggle on the sheet.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
sheet.setColumnGroupControlPosition(SpreadsheetApp.GroupControlTogglePosition.AFTER);
```
@param position The position of the column group control toggle.
@return This sheet, for chaining.*/setColumnGroupControlPosition(position:SpreadsheetApp.GroupControlTogglePosition):SpreadsheetApp.Sheet;
/**Sets the width of the given column in pixels.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Sets the first column to a width of 200 pixels
sheet.setColumnWidth(1, 200);
```
@param columnPosition The position of the given column to set.
@param width The width in pixels to set it to.
@return the sheet, useful for method chaining*/setColumnWidth(columnPosition:Integer,width:Integer):SpreadsheetApp.Sheet;
/**Sets the width of the given columns in pixels.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Sets the first three columns to a width of 200 pixels
sheet.setColumnWidths(1, 3, 200);
```
@param startColumn The starting column position to change.
@param numColumns The number of columns to change.
@param width The width in pixels to set it to.
@return This sheet, for chaining.*/setColumnWidths(startColumn:Integer,numColumns:Integer,width:Integer):SpreadsheetApp.Sheet;
/**Replaces all currently existing conditional format rules in the sheet with the input rules.
Rules are evaluated in their input order.

```
// Remove one of the existing conditional format rules.
var sheet = SpreadsheetApp.getActiveSheet();
var rules = sheet.getConditionalFormatRules();
rules.splice(1, 1); // Deletes the 2nd format rule.
sheet.setConditionalFormatRules(rules);
```
@param rules The new conditional format rules.*/setConditionalFormatRules(rules:SpreadsheetApp.ConditionalFormatRule[]):void;
/**Sets the specified cell as the [`current cell`](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getCurrentCell()).

If the specified cell is present in an already selected range, then that range becomes the
active range with the cell as the current cell.

If the specified cell is not present in any selected range, then any existing selection is
removed and the cell becomes the current cell and the active range.

__Note:__The specified [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) must consist of one cell, otherwise it throws an
exception.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
var cell = sheet.getRange('B5');
sheet.setCurrentCell(cell);

var selection = sheet.getSelection();
// Current cell: B5
var currentCell = selection.getCurrentCell();
```
@param cell The cell to set as the current cell.
@return the newly set current cell*/setCurrentCell(cell:SpreadsheetApp.Range):SpreadsheetApp.Range;
/**Freezes the given number of columns. If zero, no columns are frozen.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Freezes the first column
sheet.setFrozenColumns(1);
```
@param columns The number of columns to freeze.*/setFrozenColumns(columns:Integer):void;
/**Freezes the given number of rows. If zero, no rows are frozen.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Freezes the first row
sheet.setFrozenRows(1);
```
@param rows The number of rows to freeze.*/setFrozenRows(rows:Integer):void;
/**Hides or reveals the sheet gridlines.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can us eSpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Hides the gridlines in the sheet.
sheet.setHiddenGridlines(true);
```
@param hideGridlines If `true`, hide gridlines in this sheet; otherwise show the
    gridlines.
@return This sheet, for chaining.*/setHiddenGridlines(hideGridlines:boolean):SpreadsheetApp.Sheet;
/**Sets the sheet name.

```
// This example assumes there is a sheet named "first"
var ss = SpreadsheetApp.getActiveSpreadsheet();
var first = ss.getSheetByName("first");
first.setName("not first anymore");
```
@param name The new name for the sheet.
@return This sheet, for chaining.*/setName(name:string):SpreadsheetApp.Sheet;
/**Sets or unsets the sheet layout to right-to-left.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Sets the sheet layout, so that the sheet is ordered from right to left.
sheet.setRightToLeft(true);
```
@param rightToLeft If `true`, the sheet layout is set to right-to-left, with cell A1 at
    the top right corner. If `false`, the sheet layout is set to the default
    left-to-right, with cell A1 at the top left.
@return This sheet, for chaining.*/setRightToLeft(rightToLeft:boolean):SpreadsheetApp.Sheet;
/**Sets the position of the row group control toggle on the sheet.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
sheet.setRowGroupControlPosition(SpreadsheetApp.GroupControlTogglePosition.AFTER);
```
@param position The position of the row group control toggle.
@return This sheet, for chaining.*/setRowGroupControlPosition(position:SpreadsheetApp.GroupControlTogglePosition):SpreadsheetApp.Sheet;
/**Sets the row height of the given row in pixels. By default, rows grow to fit cell contents. If
you want to force rows to a specified height, use [`setRowHeightsForced(startRow, numRows, height)`](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#setRowHeightsForced(Integer,Integer,Integer)).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Sets the first row to a height of 200 pixels
sheet.setRowHeight(1, 200);
```
@param rowPosition The row position to change.
@param height The height in pixels to set it to.
@return The sheet, useful for method chaining.*/setRowHeight(rowPosition:Integer,height:Integer):SpreadsheetApp.Sheet;
/**Sets the height of the given rows in pixels. By default, rows grow to fit cell contents. If you
want to force rows to a specified height, use [`setRowHeightsForced(startRow, numRows, height)`](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#setRowHeightsForced(Integer,Integer,Integer)).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Sets the first three rows to a height of 20 pixels
sheet.setRowHeights(1, 3, 20);
```
@param startRow The starting row position to change.
@param numRows The number of rows to change.
@param height The height in pixels to set it to.
@return This sheet, for chaining.*/setRowHeights(startRow:Integer,numRows:Integer,height:Integer):SpreadsheetApp.Sheet;
/**Sets the height of the given rows in pixels. By default, rows grow to fit cell contents. When
you use `setRowHeightsForced`, rows are forced to the specified height even if the
cell contents are taller than the row height.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Sets the first three rows to a height of 5 pixels.
sheet.setRowHeightsForced(1, 3, 5);
```
@param startRow The starting row position to change.
@param numRows The number of rows to change.
@param height The height in pixels to set it to.
@return This sheet, for chaining.*/setRowHeightsForced(startRow:Integer,numRows:Integer,height:Integer):SpreadsheetApp.Sheet;
/**Sets the permissions for the current sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var permissions = sheet.getSheetProtection();

// This copies the permissions on the first sheet to the second sheet
var sheetToClonePermissionsTo = ss.getSheets()[1];
sheetToClonePermissionsTo.setSheetProtection(permissions);
```
@deprecated
@param permissions The access permissions object to set on this sheet.*/setSheetProtection(permissions:SpreadsheetApp.PageProtection):void;
/**Sets the sheet tab color.

```
// This example assumes there is a sheet named "first"
var ss = SpreadsheetApp.getActiveSpreadsheet();
var first = ss.getSheetByName("first");
first.setTabColor("ff0000"); // Set the color to red.
first.setTabColor(null); // Unset the color.
```
@param color A color code in CSS notation (like `'#ffffff'` or `'white'`), or
    `null` to reset the tab color.
@return This sheet, for chaining.*/setTabColor(color:string):SpreadsheetApp.Sheet;
/**Sets the sheet tab color.

```
// This example assumes there is a sheet named "Sheet1"
var ss = SpreadsheetApp.getActiveSpreadsheet();
var first = ss.getSheetByName("Sheet1");
var color = SpreadsheetApp.newColor()
    .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT1)
    .build();
first.setTabColorObject(color); // Set the color to theme accent 1.
first.setTabColorObject(null); // Unset the color.
```
@param color The sheet tab color to set.
@return This sheet, for chaining.*/setTabColorObject(color:SpreadsheetApp.Color):SpreadsheetApp.Sheet;
/**Unhides the column at the given index.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
// Unhides the first column
sheet.showColumns(1);
```
@param columnIndex The index of the column to unhide.*/showColumns(columnIndex:Integer):void;
/**Unhides one or more consecutive columns starting at the given index.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
// Unhides the first three columns
sheet.showColumns(1, 3);
```
@param columnIndex The starting index of the columns to unhide.
@param numColumns The number of columns to unhide.*/showColumns(columnIndex:Integer,numColumns:Integer):void;
/**Unhides the row at the given index.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
// Unhides the first row
sheet.showRows(1);
```
@param rowIndex The index of the row to unhide.*/showRows(rowIndex:Integer):void;
/**Unhides one or more consecutive rows starting at the given index.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
// Unhides the first three rows
sheet.showRows(1, 3);
```
@param rowIndex The starting index of the rows to unhide.
@param numRows The number of rows to unhide.*/showRows(rowIndex:Integer,numRows:Integer):void;
/**Makes the sheet visible. Has no effect if the sheet is already visible.

```
var sheet = SpreadsheetApp.getActiveSheet();
sheet.showSheet();
```
@return The current sheet.*/showSheet():SpreadsheetApp.Sheet;
/**Sorts a sheet by column, ascending.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Sorts the sheet by the first column, ascending
sheet.sort(1);
```
@param columnPosition The column to sort by.
@return the sheet, useful for method chaining*/sort(columnPosition:Integer):SpreadsheetApp.Sheet;
/**Sorts a sheet by column. Takes a parameter to specify ascending or descending.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Sorts the sheet by the first column, descending
sheet.sort(1, false);
```
@param columnPosition The column to sort by.
@param ascending `true` for ascending sorts, `false` for descending.
@return the sheet, useful for method chaining*/sort(columnPosition:Integer,ascending:boolean):SpreadsheetApp.Sheet;
/**Unhides the column in the given range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This unhides the first column if it was previously hidden
var range = sheet.getRange("A1");
sheet.unhideColumn(range);
```
@param column The range to unhide, if hidden.*/unhideColumn(column:SpreadsheetApp.Range):void;
/**Unhides the row in the given range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This unhides the first row if it was previously hidden
var range = sheet.getRange("A1");
sheet.unhideRow(range);
```
@param row The range to unhide, if hidden.*/unhideRow(row:SpreadsheetApp.Range):void;
/**Updates the chart on this sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This code is going to loop through all the charts and change them to
// column charts
var charts = sheet.getCharts();
for (var i in charts) {
  var chart = charts[i];
  var newChart = chart
      .modify()
      .setChartType(Charts.ChartType.COLUMN)
      .build();
  sheet.updateChart(newChart);
}
```
@param chart The chart to update.*/updateChart(chart:SpreadsheetApp.EmbeddedChart):void;}interface Selection{
/**Returns the selected range in the active sheet, or `null` if there is no active range. If
multiple ranges are selected this method returns only the last selected range.

```
var selection = SpreadsheetApp.getActiveSpreadsheet().getSelection();
var activeRange = selection.getActiveRange();
```
@return The active range.*/getActiveRange():SpreadsheetApp.Range;
/**Returns the list of active ranges in the active sheet or `null` if there are no active
ranges.

If there is a single range selected, this behaves as a [`getActiveRange()`](https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getActiveRange()) call.

```
var sheet = SpreadsheetApp.getActiveSheet();
// Returns the list of active ranges.
var activeRangeList = sheet.getActiveRangeList();
```
@return The list of active ranges.*/getActiveRangeList():SpreadsheetApp.RangeList;
/**Returns the active sheet in the spreadsheet.

```
var selection = SpreadsheetApp.getActiveSpreadsheet().getSelection();
var activeSheet = selection.getActiveSheet();
```
@return The active sheet in the spreadsheet.*/getActiveSheet():SpreadsheetApp.Sheet;
/**Returns the current (highlighted) cell that is selected in one of the active ranges or `null` if there is no current cell.

```
var selection = SpreadsheetApp.getActiveSpreadsheet().getSelection();
// Returns the current highlighted cell in the one of the active ranges.
var currentCell = selection.getCurrentCell();
```
@return The current cell.*/getCurrentCell():SpreadsheetApp.Range;
/**Starting from the [`current cell`](https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getCurrentCell()) and [`active range`](https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getActiveRange())
and moving in the given direction, returns an adjusted range where the appropriate edge of the
range has been shifted to cover the [`next data cell`](https://developers.google.com/apps-script/reference/spreadsheet/range.html#getNextDataCell(Direction)) while still
covering the current cell. If the active range is unbounded along the [`dimension`](https://developers.google.com/apps-script/reference/spreadsheet/dimension.html) of the direction, the original active range is returned. If there is no current cell
or active range, `null` is returned. This is equivalent to selecting a range in the
editor and hitting `Ctrl+Shift+[arrow key]`.

```
// Assume the active spreadsheet is blank.
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// Makes C3 the current cell and C3:E5 the active range.
sheet.getRange('C3:E5').activate();
// Logs 'C1:E3'
console.log(SpreadsheetApp.getSelection()
                          .getNextDataRange(SpreadsheetApp.Direction.UP)
                          .getA1Notation());
```
@param direction The direction in which to find the next data region edge cell.
@return The adjusted range that includes the data cell, or `null` if there is no
    selection.*/getNextDataRange(direction:SpreadsheetApp.Direction):SpreadsheetApp.Range;}interface RichTextValueBuilder{
/**Creates a Rich Text value from this builder.
@return A Rich Text value created from this builder.*/build():SpreadsheetApp.RichTextValue;
/**Sets the link URL for the given substring of this value, or clears it if `linkUrl` is
`null`.

```
// Creates a Rich Text value for the text "foo no baz" with "foo" pointing to
// "https://bar.foo" and "baz" to "https://abc.xyz".
// "foo" is underlined with the default link color, whereas "baz" has its text style
// overridden by a call to `setTextStyle`, and is therefore black and bold with no underlining.
const boldStyle = SpreadsheetApp.newTextStyle()
    .setUnderline(false)
    .setBold(true)
    .setForegroundColor("#000000")
    .build();
const value = SpreadsheetApp.newRichTextValue()
    .setText("foo no baz")
    .setLinkUrl(0, 3, "https://bar.foo")
    .setLinkUrl(7, 10, "https://abc.xyz")
    .setTextStyle(7, 10, boldStyle)
    .build();
```
@param startOffset The start offset for the substring, inclusive.
@param endOffset The end offset for the substring, exclusive.
@param linkUrl The link URL being set.
@return This builder, for chaining.*/setLinkUrl(startOffset:Integer,endOffset:Integer,linkUrl:string):SpreadsheetApp.RichTextValueBuilder;
/**Sets the link URL for the entire value, or clears it if `linkUrl` is `null`.

```
// Creates a Rich Text value for the text "Foo" which points to "https://bar.foo".
const value = SpreadsheetApp.newRichTextValue()
    .setText("Foo")
    .setLinkUrl("https://bar.foo")
    .build();
```
@param linkUrl The link URL being set.
@return This builder, for chaining.*/setLinkUrl(linkUrl:string):SpreadsheetApp.RichTextValueBuilder;
/**Sets the text for this value and clears any existing text style. When creating a new Rich Text
value, this should be called before [`setTextStyle(startOffset, endOffset, textStyle)`](https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value-builder.html#setTextStyle(Integer,Integer,TextStyle)).
@param text The text for this value.
@return This builder, for chaining.*/setText(text:string):SpreadsheetApp.RichTextValueBuilder;
/**Applies a text style to the given substring of this value. Offsets are 0 based and are relative
to the cell's text value. Does nothing if `textStyle` is `null`.

```
// Creates a Rich Text value for the text "HelloWorld", with "Hello" bolded, and "World"
// italicized.
var bold = SpreadsheetApp.newTextStyle().setBold(true).build();
var italic = SpreadsheetApp.newTextStyle().setItalic(true).build();
var value = SpreadsheetApp.newRichTextValue()
    .setText("HelloWorld")
    .setTextStyle(0, 5, bold)
    .setTextStyle(5, 10, italic)
    .build();
```
@param startOffset The start offset for the substring, inclusive.
@param endOffset The end offset for the substring, exclusive.
@param textStyle The text style being set.
@return This builder, for chaining.*/setTextStyle(startOffset:Integer,endOffset:Integer,textStyle:SpreadsheetApp.TextStyle):SpreadsheetApp.RichTextValueBuilder;
/**Applies a text style to the entire value. Previously set text styles are only affected if they
are directly overwritten by values within `textStyle`. Does nothing if `textStyle`
is `null`.

```
// Creates a Rich Text value for the text "HelloWorld" with "Hello" bolded and italicized,
// and "World" only italicized.
var bold = SpreadsheetApp.newTextStyle().setBold(true).build();
var italic = SpreadsheetApp.newTextStyle().setItalic(true).build();
var value = SpreadsheetApp.newRichTextValue()
    .setText("HelloWorld")
    .setTextStyle(0, 5, bold)
    .setTextStyle(italic)
    .build();
```
@param textStyle The text style being set.
@return This builder, for chaining.*/setTextStyle(textStyle:SpreadsheetApp.TextStyle):SpreadsheetApp.RichTextValueBuilder;}interface RichTextValue{
/**Returns a builder for a Rich Text value initialized with the values of this Rich Text value.
@return A builder for a Rich Text value.*/copy():SpreadsheetApp.RichTextValueBuilder;
/**Gets the end index of this value in the cell.
@return The end index of this value in the cell.*/getEndIndex():Integer;
/**Returns the link URL for this value.
@return The link URL for this value, or `null` if there is no link or if there are
    multiple different links.*/getLinkUrl():string;
/**Returns the link URL for the text from `startOffset` to `endOffset`. Offsets are 0
based and relative to the cell's text, with the start offset being inclusive and the end offset
being exclusive.
@param startOffset The start offset.
@param endOffset The end offset.
@return The link URL for this value, or `null` if there is no link or if multiple
    different links are in the given range.*/getLinkUrl(startOffset:Integer,endOffset:Integer):string;
/**Returns the Rich Text string split into an array of runs, wherein each run is the longest
possible substring having a consistent text style.
@return An array of runs.*/getRuns():SpreadsheetApp.RichTextValue[];
/**Gets the start index of this value in the cell.
@return The start index of this value in the cell.*/getStartIndex():Integer;
/**Returns the text of this value.
@return The text of this value.*/getText():string;
/**Returns the text style of this value.
@return The text style of this value.*/getTextStyle():SpreadsheetApp.TextStyle;
/**Returns the text style of the text from `startOffset` to `endOffset`. Offsets are 0
based and relative to the cell's text, with the start offset being inclusive and the end offset
being exclusive.
@param startOffset The start offset.
@param endOffset The end offset.
@return The text style of the given substring of this value.*/getTextStyle(startOffset:Integer,endOffset:Integer):SpreadsheetApp.TextStyle;}interface RelativeDate{}interface _RelativeDate{
/**Dates that fall within the past month period.*/PAST_MONTH:RelativeDate;
/**Dates that fall within the past week period.*/PAST_WEEK:RelativeDate;
/**Dates that fall within the past year period.*/PAST_YEAR:RelativeDate;
/**Dates compared against the current date.*/TODAY:RelativeDate;
/**Dates compared against the date after the current date.*/TOMORROW:RelativeDate;
/**Dates compared against the date before the current date.*/YESTERDAY:RelativeDate;}interface RecalculationInterval{}interface _RecalculationInterval{
/**Recalculate when values are changed, and every hour.*/HOUR:RecalculationInterval;
/**Recalculate when values are changed, and every minute.*/MINUTE:RecalculationInterval;
/**Recalculate only when values are changed.*/ON_CHANGE:RecalculationInterval;}interface RangeList{
/**Selects the list of [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) instances. The last range in the list is set as the [`active range`](https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getActiveRange()).

__Note:__ This provides a way to multi-select a number of ranges.

```
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['D4', 'B2:C4']);
rangeList.activate();

var selection = sheet.getSelection();
// Current cell: B2
var currentCell = selection.getCurrentCell();
// Active range: B2:C4
var activeRange = selection.getActiveRange();
// Active range list: [D4, B2:C4]
var activeRangeList = selection.getActiveRangeList();
```
@return The list of active ranges, for chaining.*/activate():SpreadsheetApp.RangeList;
/**Break all horizontally- or vertically-merged cells contained within the range list into
individual cells again.

Calling this function on a range list is equivalent to selecting a set of ranges and
selecting the __Format > Merge > Unmerge__ Sheets menu item.

```
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.breakApart();
```
@return This range list, for chaining.*/breakApart():SpreadsheetApp.RangeList;
/**Changes the state of the checkboxes in the range to “checked”. Ignores the cells in the range
which currently do not contain either the checked or unchecked value configured.

```
// Changes the state of cells which currently contain either the checked or unchecked value
// configured in the ranges D4 and E6 to 'checked'.
var rangeList = SpreadsheetApp.getActive().getRangeList(['D4', 'E6']);
rangeList.check();
```
@return This range list, for chaining.*/check():SpreadsheetApp.RangeList;
/**Clears the range of contents, formats, and data validation rules for each [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) in
the range list.

```
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.clear();
```
@return This range list, for chaining.*/clear():SpreadsheetApp.RangeList;
/**Clears the range of contents, format, data validation rules, and comments, as specified with
the given options. By default all data is cleared.

```
// The code below clears the contents of the following ranges A:A and C:C in the active sheet,
// but preserves the format, data validation rules, and comments.
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.clear({contentsOnly: true});
```
@param options A JavaScript object that specifies advanced parameters, as listed below.
@return This range list, for chaining.*/clear(options:Object):SpreadsheetApp.RangeList;
/**Clears the content of each [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) in the range list, leaving the formatting intact.

```
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.clearContent();
```
@return This range list, for chaining.*/clearContent():SpreadsheetApp.RangeList;
/**Clears the data validation rules for each [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) in the range list.

```
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.clearDataValidations();
```
@return This range list, for chaining.*/clearDataValidations():SpreadsheetApp.RangeList;
/**Clears text formatting for each [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) in the range list.

This clears text formatting for each range, but does not reset any number formatting rules.

```
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.clearFormat();
```
@return This range list, for chaining.*/clearFormat():SpreadsheetApp.RangeList;
/**Clears the note for each [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) in the range list.

```
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.clearNote();
```
@return This range list, for chaining.*/clearNote():SpreadsheetApp.RangeList;
/**Returns a list of one or more [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) instances in the same sheet.
@return The list of ranges.*/getRanges():SpreadsheetApp.Range[];
/**Inserts checkboxes into each cell in the range, configured with `true` for checked and
`false` for unchecked. Sets the value of all cells in the range to `false`.

```
var rangeList = SpreadsheetApp.getActive().getRangeList(['D4', 'E6']);

// Inserts checkboxes into each cell in the ranges D4 and E6 configured with 'true' for checked
// and 'false' for unchecked. Also, sets the value of each cell in the ranges D4 and E6 to
// 'false'.
rangeList.insertCheckboxes();
```
@return This range list, for chaining.*/insertCheckboxes():SpreadsheetApp.RangeList;
/**Inserts checkboxes into each cell in the range, configured with a custom value for checked and
the empty string for unchecked. Sets the value of each cell in the range to the empty string.

```
var rangeList = SpreadsheetApp.getActive().getRangeList(['D4', 'E6']);

// Inserts checkboxes into each cell in the ranges D4 and E6 configured with 'yes' for checked
// and the empty string for unchecked. Also, sets the value of each cell in the ranges D4 and
// E6 to the empty string.
rangeList.insertCheckboxes('yes');
```
@param checkedValue The checked value for the checkbox data validation.
@return This range list, for chaining.*/insertCheckboxes(checkedValue:Object):SpreadsheetApp.RangeList;
/**Inserts checkboxes into each cell in the range, configured with custom values for the checked
and unchecked states. Sets the value of each cell in the range to the custom unchecked value.

```
var rangeList = SpreadsheetApp.getActive().getRangeList(['D4', 'E6']);

// Inserts checkboxes into each cell in the ranges D4 and E6 configured with 'yes' for checked
// and 'no' for unchecked. Also, sets the value of each cell in the ranges D4 and E6 to 'no'.
rangeList.insertCheckboxes('yes', 'no');
```
@param checkedValue The checked value for the checkbox data validation.
@param uncheckedValue The unchecked value for the checkbox data validation.
@return This range list, for chaining.*/insertCheckboxes(checkedValue:Object,uncheckedValue:Object):SpreadsheetApp.RangeList;
/**Removes all checkboxes from the range. Clears the data validation of each cell, and
additionally clears its value if the cell contains either the checked or unchecked value.

```
var range = SpreadsheetApp.getActive().getRange('A1:B10');

// Inserts checkboxes and sets each cell value to 'no' in the range A1:B10.
range.insertCheckboxes('yes', 'no');

var rangeList1 = SpreadsheetApp.getActive().getRangeList(['A1', 'A3']);
rangeList1.setValue('yes');
// Removes the checkbox data validation in cells A1 and A3 and clears their value.
rangeList1.removeCheckboxes();

var rangeList2 = SpreadsheetApp.getActive().getRangeList(['A5', 'A7']);
rangeList2.setValue('random');
// Removes the checkbox data validation in cells A5 and A7 but does not clear their value.
rangeList2.removeCheckboxes();
```
@return This range list, for chaining.*/removeCheckboxes():SpreadsheetApp.RangeList;
/**Sets the background color for each [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) in the range list. Color is represented in
in CSS notation; for example, `'#ffffff'` or `'white'`.

```
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.setBackground('red');
```
@param color The background color code in CSS notation such as `'#ffffff'` or `'white'`; a `null` value resets the color.
@return This range list, for chaining.*/setBackground(color:string):SpreadsheetApp.RangeList;
/**Sets the background to the given RGB color. This is a convenience wrapper around a [`setBackground(color)`](https://developers.google.com/apps-script/reference/spreadsheet/range-list.html#setBackground(String)) call.

```
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['A:A', 'C:C']);
// Sets the background to red for each range in the range list.
rangeList.setBackgroundRGB(255, 0, 0);
```
@param red The red value in RGB notation.
@param green The green value in RGB notation.
@param blue The blue value in RGB notation.
@return This range list, for chaining.*/setBackgroundRGB(red:Integer,green:Integer,blue:Integer):SpreadsheetApp.RangeList;
/**Sets the border property for each [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) in the range list. The valid values are
`true` (on), `false` (off) and `null` (no change).

```
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['A2:B4', 'C1:D4']);
// Sets borders on the top and bottom of the ranges A2:B4 and C1:D4, but leaves the left and
// right unchanged.
rangeList.setBorder(true, null, true, null, false, false);
```
@param top `true` for border, `false` for none, `null` for no change.
@param left `true` for border, `false` for none, `null` for no change.
@param bottom `true` for border, `false` for none, `null` for no change.
@param right `true` for border, `false` for none, `null` for no change.
@param vertical `true` for internal vertical borders, `false` for none, `null` for no change.
@param horizontal `true` for internal horizontal borders, `false` for none, `null` for no change.
@return This range list, for chaining.*/setBorder(top:boolean,left:boolean,bottom:boolean,right:boolean,vertical:boolean,horizontal:boolean):SpreadsheetApp.RangeList;
/**Sets the border property with color and/or style for each [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) in the range list.
Valid values are `true` (on), `false` (off) and `null` (no change). Color is
represented in in CSS notation; for example, `'#ffffff'` or `'white'`.

```
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['A2:B4', 'C1:D4']);
// Sets borders on the top and bottom, but leaves the left and right unchanged of the ranges
// A2:B4 and C1:D4. Also sets the color to 'red', and the border to 'DASHED'.
rangeList.setBorder(
    true, null, true, null, false, false, 'red', SpreadsheetApp.BorderStyle.DASHED);
```
@param top `true` for border, `false` for none, `null` for no change.
@param left `true` for border, `false` for none, `null` for no change.
@param bottom `true` for border, `false` for none, `null` for no change.
@param right `true` for border, `false` for none, `null` for no change.
@param vertical `true` for internal vertical borders, `false` for none, `null` for no change.
@param horizontal `true` for internal horizontal borders, `false` for none, `null` for no change.
@param color The border color in CSS notation like `'#ffffff'` or `'white'`, `null` for default color (black).
@param style The style for the borders, `null` for default style (solid).
@return This range list, for chaining.*/setBorder(top:boolean,left:boolean,bottom:boolean,right:boolean,vertical:boolean,horizontal:boolean,color:string,style:SpreadsheetApp.BorderStyle):SpreadsheetApp.RangeList;
/**Sets the font color for each [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) in the range list. Color is represented in in CSS
notation; for example, `'#ffffff'` or `'white'`.

```
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.setFontColor('red');
```
@param color The font color in CSS notation such as `'#ffffff'` or `'white'`; a
    `null` value resets the color.
@return This range list, for chaining.*/setFontColor(color:string):SpreadsheetApp.RangeList;
/**Sets the font family for each [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) in the range list. The font family is described
by a string identifier such as `Arial` or `Roboto`.

```
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.setFontFamily('Roboto');
```
@param fontFamily The font family to set; a `null` value resets the font family.
@return This range list, for chaining.*/setFontFamily(fontFamily:string):SpreadsheetApp.RangeList;
/**Sets the font line style for each [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) in the range list. The line styles options
are `'underline'`, `'line-through'`, or `'none'`.

```
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.setFontLine('line-through');
```
@param fontLine The font line style, either `'underline'`, `'line-through'`, or
    `'none'`; a `null` value resets the font line style.
@return This range list, for chaining.*/setFontLine(fontLine:string):SpreadsheetApp.RangeList;
/**Sets the font size (in points) for each [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) in the range list.

```
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.setFontSize(20);
```
@param size A font point size.
@return This range list, for chaining.*/setFontSize(size:Integer):SpreadsheetApp.RangeList;
/**Set the font style for each [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) in the range list. The font style options are
`'italic'` or `'normal'`.

```
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.setFontStyle("italic");
```
@param fontStyle The font style, either `'italic'` or `'normal'`; a `null`
    value resets the font style.
@return This range list, for chaining.*/setFontStyle(fontStyle:string):SpreadsheetApp.RangeList;
/**Set the font weight for each [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) in the range list. The font weight options are
`'normal'` or `'bold'`.

```
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.setFontWeight('bold');
```
@param fontWeight The font weight, either `'bold'` or `'normal'`; a `null`
    value resets the font weight.
@return This range list, for chaining.*/setFontWeight(fontWeight:string):SpreadsheetApp.RangeList;
/**Updates the formula for each [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) in the range list. The given formula must be in
A1 notation.

```
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['A11', 'C11']);
rangeList.setFormula('=SUM(B1:B10)');
```
@param formula A string representing the formula to set.
@return This range list, for chaining.*/setFormula(formula:string):SpreadsheetApp.RangeList;
/**Updates the formula for each [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) in the range list. The given formula must be in
R1C1 notation.

```
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['A11', 'C11']);
// This sets the formula to be the sum of the 3 rows above B5
rangeList.setFormulaR1C1('=SUM(R[-3]C[0]:R[-1]C[0])');
```
@param formula A string formula.
@return This range list, for chaining.*/setFormulaR1C1(formula:string):SpreadsheetApp.RangeList;
/**Set the horizontal alignment for each [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) in the range list. The alignment options
are `'left'`, `'center'`, or `'right'`.

```
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.setHorizontalAlignment("center");
```
@param alignment The alignment, either `'left'`, `'center'` or `'normal'`; a
    `null` value resets the alignment.
@return This range list, for chaining.*/setHorizontalAlignment(alignment:string):SpreadsheetApp.RangeList;
/**Sets the note text for each [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) in the range list.

```
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.setNote('This is a note');
```
@param note The note text to set; a `null` value removes the note.
@return This range list, for chaining.*/setNote(note:string):SpreadsheetApp.RangeList;
/**Sets the number or date format for each [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) in the range list.

The accepted formatting patterns are described in the [Sheets API date and number formatting guide](/sheets/api/guides/formats).

```
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['A1:A10', 'C1:C10']);
// Always show 3 decimal points for the specified ranges.
rangeList.setNumberFormat('0.000');
```
@param numberFormat A number format string.
@return This range list, for chaining.*/setNumberFormat(numberFormat:string):SpreadsheetApp.RangeList;
/**Sets whether or not each [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) in the range list should show hyperlinks.

```
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['A1:A10', 'C1:C10']);
// Show hyperlinks for all the ranges.
rangeList.setShowHyperlink(true);
```
@param showHyperlink Whether or not to show the hyperlink.
@return This range list, for chaining.*/setShowHyperlink(showHyperlink:boolean):SpreadsheetApp.RangeList;
/**Sets the text direction for the cells in each [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) in the range list. If a
specified direction is `null`, the direction is inferred and then set.

```
// Sets right-to-left text direction each range in the range list.
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['A1:A10', 'C1:C10']);
rangeList.setTextDirection(SpreadsheetApp.TextDirection.RIGHT_TO_LEFT);
```
@param direction The desired text direction; if `null` the direction is inferred before
    setting.
@return This range list, for chaining.*/setTextDirection(direction:SpreadsheetApp.TextDirection):SpreadsheetApp.RangeList;
/**Sets the text rotation settings for the cells in each [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) in the range list. The
input corresponds to the angle between the standard text orientation and the desired
orientation. An input of zero indicates that the text is set to the standard orientation.

For left to right text direction, positive angles are in the counterclockwise direction,
whereas for right to left they are in the clockwise direction.

```
// Sets the cells in the ranges A1:A10 and C1:C10 to have text rotated up 45 degrees.
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['A1:A10', 'C1:C10']);
rangeList.setTextRotation(45);
```
@param degrees The desired angle between the standard orientation and the desired orientation.
    For left to right text, positive angles are in the counterclockwise direction.
@return This range list, for chaining.*/setTextRotation(degrees:Integer):SpreadsheetApp.RangeList;
/**Sets the value for each [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) in the range list. The value can be numeric, string,
boolean or date. If it begins with '=' it is interpreted as a formula.

```
var sheet = SpreadsheetApp.getActiveSheet();
// Set value of 100 to each range in the range list.
var rangeList = sheet.getRangeList(['A:A', 'C:C']);
rangeList.setValue(100);
```
@param value The value for the range.
@return This range list, for chaining.*/setValue(value:Object):SpreadsheetApp.RangeList;
/**Set the vertical alignment for each [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) in the range list. The alignment options
are `'top'`, `'middle'` or `'bottom'`.

```
// Sets the vertical alignment to middle for the list of ranges.
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['D4', 'B2:C4']);
rangeList.setVerticalAlignment("middle");
```
@param alignment The alignment, either `'top'`, `'middle'` or `'bottom'`; a
    `null` value resets the alignment.
@return This range list, for chaining.*/setVerticalAlignment(alignment:string):SpreadsheetApp.RangeList;
/**Sets whether or not to stack the text for the cells for each [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) in the range
list. If the text is stacked vertically, the degree text rotation setting is ignored.

```
// Sets all cell's in ranges D4 and B2:D4 to have vertically stacked text.
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['D4', 'B2:C4']);
rangeList.setVerticalText(true);
```
@param isVertical Whether or not to stack the text.
@return This range list, for chaining.*/setVerticalText(isVertical:boolean):SpreadsheetApp.RangeList;
/**Set text wrapping for each [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) in the range list. Cells with wrap enabled resize
to display their full content. Cells with wrap disabled display as much as possible in the cell
without resizing or running to multiple lines.

```
// Enable text wrap for the list of ranges.
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['D4', 'B2:C4']);
rangeList.setWrap(true);
```
@param isWrapEnabled Whether to wrap text or not.
@return This range list, for chaining.*/setWrap(isWrapEnabled:boolean):SpreadsheetApp.RangeList;
/**Sets the text wrapping strategy for each [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) in the range list.

```
// Sets the list of ranges to use the clip wrap strategy.
var sheet = SpreadsheetApp.getActiveSheet();
var rangeList = sheet.getRangeList(['D4', 'B2:C4']);
rangeList.setWrapStrategy(SpreadsheetApp.WrapStrategy.CLIP);
```
@param strategy The desired wrapping strategy.
@return This range list, for chaining.*/setWrapStrategy(strategy:SpreadsheetApp.WrapStrategy):SpreadsheetApp.RangeList;
/**Trims the whitespace (such as spaces, tabs, or new lines) in every cell in this range list.
Removes all whitespace from the start and end of each cell's text, and reduces any subsequence
of remaining whitespace characters to a single space.

__Note__: If the resulting trimmed text starts with a '+' or '='
character, the text remains as a string value and isn't interpreted as a formula.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
var range = sheet.getRange('A1:A4');
range.activate();
range.setValues(
    [' preceding space', 'following space ', 'two  middle  spaces', '   =SUM(1,2)']);

var rangeList = sheet.getRangeList(['A1', 'A2', 'A3', 'A4']);
rangeList.trimWhitespace();

var values = range.getValues();
// Values are ['preceding space', 'following space', 'two middle spaces', '=SUM(1,2)']
```
@return This range list, for chaining.*/trimWhitespace():SpreadsheetApp.RangeList;
/**Changes the state of the checkboxes in the range to “unchecked”. Ignores the cells in the range
which currently do not contain either the checked or unchecked value configured.

```
// Changes the state of cells which currently contain either the checked or unchecked value
// configured in the ranges D4 and E6 to 'unchecked'.
var rangeList = SpreadsheetApp.getActive().getRangeList(['D4', 'E6']);
rangeList.uncheck();
```
@return This range list, for chaining.*/uncheck():SpreadsheetApp.RangeList;}interface Range{
/**Sets the specified range as the [`active range`](https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getActiveRange()), with the top
left cell in the range as the [`current cell`](https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getCurrentCell()).

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
var range = sheet.getRange('A1:D10');
range.activate();

var selection = sheet.getSelection();
// Current cell: A1
var currentCell = selection.getCurrentCell();
// Active Range: A1:D10
var activeRange = selection.getActiveRange();
```
@return This range, for chaining.*/activate():SpreadsheetApp.Range;
/**Sets the specified cell as the [`current cell`](https://developers.google.com/apps-script/reference/spreadsheet/selection.html#getCurrentCell()).

If the specified cell is present in an existing range, then that range becomes the active
range with the cell as the current cell.

If the specified cell is not present in any existing range, then the existing selection is
removed and the cell becomes the current cell and the active range.

__Note:__ The specified [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) must consist of one cell, otherwise it throws an
exception.

```
// Gets the first sheet of the spreadsheet.
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

// Gets the cell B5 and sets it as the active cell.
var range = sheet.getRange('B5');
var currentCell = range.activateAsCurrentCell();

// Logs the activated cell.
console.log(currentCell.getA1Notation());
```
@return This range, for chaining.*/activateAsCurrentCell():SpreadsheetApp.Range;
/**Adds developer metadata with the specified key to the range.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets row 2 on the sheet.
const range = sheet.getRange('2:2');

// Adds the key 'NAME' to the developer metadata for row 2.
range.addDeveloperMetadata('NAME');

// Gets the metadata and logs it to the console.
const developerMetaData = range.getDeveloperMetadata()[0];
console.log(developerMetaData.getKey());
```
@param key The key for the new developer metadata.
@return This range, for chaining.*/addDeveloperMetadata(key:string):SpreadsheetApp.Range;
/**Adds developer metadata with the specified key and visibility to the range.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets row 2 on Sheet1.
const range = sheet.getRange('2:2');

// Adds the key 'NAME' and sets the developer metadata visibility to 'DOCUMENT'
// for row 2 on Sheet1.
range.addDeveloperMetadata('NAME', SpreadsheetApp.DeveloperMetadataVisibility.DOCUMENT);

// Gets the updated metadata info and logs it to the console.
const developerMetaData = range.getDeveloperMetadata()[0];
console.log(developerMetaData.getKey());
console.log(developerMetaData.getVisibility().toString());
```
@param key The key for the new developer metadata.
@param visibility The visibility of the new developer metadata.
@return This range, for chaining.*/addDeveloperMetadata(key:string,visibility:SpreadsheetApp.DeveloperMetadataVisibility):SpreadsheetApp.Range;
/**Adds developer metadata with the specified key and value to the range.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets row 2 of Sheet1.
const range = sheet.getRange('2:2');

// Adds the key 'NAME' and sets the value to 'GOOGLE' for the metadata of row 2.
range.addDeveloperMetadata('NAME', 'GOOGLE');

// Gets the metadata and logs it to the console.
const developerMetaData = range.getDeveloperMetadata()[0];
console.log(developerMetaData.getKey());
console.log(developerMetaData.getValue());
```
@param key The key for the new developer metadata.
@param value The value for the new developer metadata.
@return This range, for chaining.*/addDeveloperMetadata(key:string,value:string):SpreadsheetApp.Range;
/**Adds developer metadata with the specified key, value, and visibility to the range.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets row 2 on the sheet.
const range = sheet.getRange('2:2');

// Adds the key 'NAME', sets the value to 'GOOGLE', and sets the visibility
// to PROJECT for row 2 on the sheet.
range.addDeveloperMetadata(
  'NAME',
  'GOOGLE',
  SpreadsheetApp.DeveloperMetadataVisibility.PROJECT);

// Gets the updated metadata info and logs it to the console.
const developerMetaData = range.getDeveloperMetadata()[0];
console.log(developerMetaData.getKey());
console.log(developerMetaData.getValue());
console.log(developerMetaData.getVisibility().toString());
```
@param key The key for the new developer metadata.
@param value The value for the new developer metadata.
@param visibility The visibility of the new developer metadata.
@return This range, for chaining.*/addDeveloperMetadata(key:string,value:string,visibility:SpreadsheetApp.DeveloperMetadataVisibility):SpreadsheetApp.Range;
/**Applies a default column banding theme to the range. By default, the banding has header and no
footer color.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets row 2 on the sheet.
const range = sheet.getRange('2:2');

// Applies column banding to row 2.
const colBanding = range.applyColumnBanding();

// Gets the first banding on the sheet and logs the color of the header column.
console.log(sheet.getBandings()[0].getHeaderColumnColorObject().asRgbColor().asHexString());

// Gets the first banding on the sheet and logs the color of the second column.
console.log(sheet.getBandings()[0].getSecondColumnColorObject().asRgbColor().asHexString());
```
@return The new banding.*/applyColumnBanding():SpreadsheetApp.Banding;
/**Applies a specified column banding theme to the range. By default, the banding has header and
no footer color.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets row 2 on the sheet.
const range = sheet.getRange('2:2');

// Applies the INDIGO color banding theme to the columns in row 2.
const colBanding = range.applyColumnBanding(SpreadsheetApp.BandingTheme.INDIGO);

// Gets the first banding on the sheet and logs the color of the second column.
console.log(sheet.getBandings()[0].getSecondColumnColorObject().asRgbColor().asHexString());
```
@param bandingTheme A color theme to apply to the columns in the range.
@return The new banding.*/applyColumnBanding(bandingTheme:SpreadsheetApp.BandingTheme):SpreadsheetApp.Banding;
/**Applies a specified column banding theme to the range with specified header and footer
settings.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets rows 12-22 on the sheet.
const range = sheet.getRange('12:22');

// Applies the BLUE color banding theme to rows 12-22.
// Sets the header visibility to false and the footer visibility to true.
const colBanding = range.applyColumnBanding(SpreadsheetApp.BandingTheme.BLUE, false, true);

// Gets the banding color and logs it to the console.
console.log(sheet.getBandings()[0].getSecondColumnColorObject().asRgbColor().asHexString());

// Gets the header color object and logs it to the console. Returns null because the header
// visibility is set to false.
console.log(sheet.getBandings()[0].getHeaderColumnColorObject());

// Gets the footer color and logs it to the console.
console.log(sheet.getBandings()[0].getFooterColumnColorObject().asRgbColor().asHexString());
```
@param bandingTheme A color theme to apply to the columns in the range.
@param showHeader If `true`, the banding theme header color is applied to the first
    column.
@param showFooter If `true`, the banding theme footer color is applied to the last
    column.
@return The new banding.*/applyColumnBanding(bandingTheme:SpreadsheetApp.BandingTheme,showHeader:boolean,showFooter:boolean):SpreadsheetApp.Banding;
/**Applies a default row banding theme to the range. By default, the banding has header and no
footer color.

```
// Opens the spreadsheet by its URL. If you created your script from within a Google Sheets
// spreadsheet, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets rows 1-30 on Sheet1.
const range = sheet.getRange('1:30');

// Applies row banding to rows 1-30.
range.applyRowBanding();

// Gets the hex color of the second banded row.
const secondRowColor = range.getBandings()[0]
                            .getSecondRowColorObject()
                            .asRgbColor()
                            .asHexString();

// Logs the hex color to console.
console.log(secondRowColor);
```
@return The banding.*/applyRowBanding():SpreadsheetApp.Banding;
/**Applies a specified row banding theme to the range. By default, the banding has header and no
footer color.

```
// Opens the spreadsheet by its URL. If you created your script from within a Google Sheets
// spreadsheet, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets rows 1-30 on Sheet1.
const range = sheet.getRange('1:30');

// Applies the INDIGO row banding theme to rows 1-30.
range.applyRowBanding(SpreadsheetApp.BandingTheme.INDIGO);

// Gets the hex color of the second banded row.
const secondRowColor = range.getBandings()[0]
                            .getSecondRowColorObject()
                            .asRgbColor()
                            .asHexString();

// Logs the hex color to console.
console.log(secondRowColor);
```
@param bandingTheme A color theme to apply to the rows in the range.
@return The new banding.*/applyRowBanding(bandingTheme:SpreadsheetApp.BandingTheme):SpreadsheetApp.Banding;
/**Applies a specified row banding theme to the range with specified header and footer settings.

```
// Opens the spreadsheet by its URL. If you created your script from within a Google Sheets
// spreadsheet, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets rows 1-30 on Sheet1.
const range = sheet.getRange('1:30');

// Applies the INDIGO row banding to rows 1-30 and
// specifies to hide the header and show the footer.
range.applyRowBanding(SpreadsheetApp.BandingTheme.INDIGO, false, true);
```
@param bandingTheme A color theme to apply to the rows in the range.
@param showHeader If `true`, the banding theme header color is applied to the first row.
@param showFooter If `true`, the banding theme footer color is applied to the last row.
@return The new banding.*/applyRowBanding(bandingTheme:SpreadsheetApp.BandingTheme,showHeader:boolean,showFooter:boolean):SpreadsheetApp.Banding;
/**Fills the `destinationRange` with data based on the data in this range. The new values
are also determined by the specified `series` type. The destination range must contain
this range and extend it in only one direction. For example, the following fills `A1:A20`
with a series of increasing numbers based on the current values in `A1:A4`:

```
var sheet = SpreadsheetApp.getActiveSheet();

// Has values [1, 2, 3, 4].
var sourceRange = sheet.getRange("A1:A4");
// The range to fill with values.
var destination = sheet.getRange("A1:A20");

// Inserts new values in A5:A20, continuing the pattern expressed in A1:A4
sourceRange.autoFill(destination, SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);

```
@param destination The range to be auto-filled with values. The destination range should
    contain this range and extend it in only one direction (upwards, downwards, left, or
    right).
@param series The type of autoFill series that should be used to calculate new values. The
    effect of this series differs based on the type and amount of source data.*/autoFill(destination:SpreadsheetApp.Range,series:SpreadsheetApp.AutoFillSeries):void;
/**Calculates a range to fill with new data based on neighboring cells and automatically fills
that range with new values based on the data contained in this range. These new values are also
determined by the specified `series` type.

The calculated destination range considers the surrounding data to determine where the new
values should be inserted: if there is data to the immediate left or right of a column that is
being auto-filled, new values only extend as far as this adjacent data.

For example, if `A1:A20` is filled with a series of increasing numbers and this method
is called on the range `B1:B4` which contains a series of dates, new values are only
inserted into `B5:B20`. In this way, these new values "stick" to the cells that contain
values in column A.

```
var sheet = SpreadsheetApp.getActiveSheet();

// A1:A20 has values [1, 2, 3, ... 20].
// B1:B4 has values [1/1/2017, 1/2/2017, ...]
var sourceRange = sheet.getRange("B1:B4");

// Results in B5:B20 having values [1/5/2017, ... 1/20/2017]
sourceRange.autoFillToNeighbor(SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
```
@param series The type of autoFill series that should be used to calculate new values. The
    effect of this series differs based on the type and amount of source data.*/autoFillToNeighbor(series:SpreadsheetApp.AutoFillSeries):void;
/**Break any multi-column cells in the range into individual cells again.

Calling this function on a range is equivalent to selecting a range and clicking
__Format__ <span aria-label="and then">></span> __Merge cells__ <span aria-label="and
then">></span> __Unmerge__.

```
// Opens the spreadsheet by its URL. If you created your script from within a Google Sheets
// spreadsheet, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1:C6 on Sheet1.
const range = sheet.getRange('A1:C6');

// Unmerges the range A1:C6 into individual cells.
range.breakApart();
```
@return This range, for chaining.*/breakApart():SpreadsheetApp.Range;
/**Determines whether the user has permission to edit every cell in the range. The spreadsheet
owner is always able to edit protected ranges and sheets.

```
// Opens the spreadsheet by its URL. If you created your script from within a Google Sheets
// spreadsheet, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1:C6 on Sheet1.
const range = sheet.getRange('A1:C6');

// Logs whether the user has permission to edit every cell in the range.
console.log(range.canEdit());
```
@return `true` if the user has permission to edit every cell in the range; `false`
    otherwise.*/canEdit():boolean;
/**Changes the state of the checkboxes in the range to “checked”. Ignores the cells in the range
which currently do not contain either the checked or unchecked value configured.

```
// Changes the state of cells which currently contain either the checked or unchecked value
// configured in the range A1:B10 to 'checked'.
var range = SpreadsheetApp.getActive().getRange('A1:B10');
range.check();
```
@return This range, for chaining.*/check():SpreadsheetApp.Range;
/**Clears the range of contents and formats.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:D10");
range.clear();
```
@return This range, for chaining.*/clear():SpreadsheetApp.Range;
/**Clears the range of contents, format, data validation rules, and/or comments, as specified with
the given advanced options. By default all data is cleared.

```
// The code below clears range C2:G7 in the active sheet, but preserves the format,
// data validation rules, and comments.
SpreadsheetApp.getActiveSheet().getRange(2, 3, 6, 5).clear({contentsOnly: true});
```
@param options A JavaScript object that specifies advanced parameters, as listed below.
@return This range, for chaining.*/clear(options:Object):SpreadsheetApp.Range;
/**Clears the content of the range, leaving the formatting intact.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:D10");
range.clearContent();
```
@return This range, for chaining.*/clearContent():SpreadsheetApp.Range;
/**Clears the data validation rules for the range.

```
// Clear the data validation rules for cells A1:B5.
var range = SpreadsheetApp.getActive().getRange('A1:B5');
range.clearDataValidations();
```
@return This range, for chaining.*/clearDataValidations():SpreadsheetApp.Range;
/**Clears formatting for this range.

This clears text formatting for the cell or cells in the range, but does not reset any
number formatting rules.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:D10");
range.clearFormat();
```
@return This range, for chaining.*/clearFormat():SpreadsheetApp.Range;
/**Clears the note in the given cell or cells.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:D10");
range.clearNote();
```
@return This range, for chaining.*/clearNote():SpreadsheetApp.Range;
/**Collapses all groups that are wholly contained within the range. If no group is fully within
the range, the deepest expanded group that is partially within the range is collapsed.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
var range = sheet.getActiveRange();

// All row and column groups within the range are collapsed.
range.collapseGroups();
```
@return This range, for chaining.*/collapseGroups():SpreadsheetApp.Range;
/**Copy the formatting of the range to the given location. If the destination is larger or smaller
than the source range then the source is repeated or truncated accordingly. Note that this
method copies the formatting only.

For a detailed description of the gridId parameter, see [`getGridId()`](https://developers.google.com/apps-script/reference/spreadsheet/range.html#getGridId()).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var source = ss.getSheets()[0];

var range = source.getRange("B2:D4");

// This copies the formatting in B2:D4 in the source sheet to
// D4:F6 in the sheet with gridId 1555299895. Note that you can get the gridId
// of a sheet by calling sheet.getSheetId() or range.getGridId().
range.copyFormatToRange(1555299895, 4, 6, 4, 6);
```
@param gridId The unique ID of the sheet within the spreadsheet, irrespective of position.
@param column The first column of the target range.
@param columnEnd The end column of the target range.
@param row The start row of the target range.
@param rowEnd The end row of the target range.*/copyFormatToRange(gridId:Integer,column:Integer,columnEnd:Integer,row:Integer,rowEnd:Integer):void;
/**Copy the formatting of the range to the given location. If the destination is larger or smaller
than the source range then the source is repeated or truncated accordingly. Note that this
method copies the formatting only.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var source = ss.getSheets()[0];
var destination = ss.getSheets()[1];

var range = source.getRange("B2:D4");

// This copies the formatting in B2:D4 in the source sheet to
// D4:F6 in the second sheet
range.copyFormatToRange(destination, 4, 6, 4, 6);
```
@param sheet The target sheet.
@param column The first column of the target range.
@param columnEnd The end column of the target range.
@param row The start row of the target range.
@param rowEnd The end row of the target range.*/copyFormatToRange(sheet:SpreadsheetApp.Sheet,column:Integer,columnEnd:Integer,row:Integer,rowEnd:Integer):void;
/**Copies the data from a range of cells to another range of cells. Both the values and formatting
are copied.

```
// The code below copies the first 5 columns over to the 6th column.
var sheet = SpreadsheetApp.getActiveSheet();
var rangeToCopy = sheet.getRange(1, 1, sheet.getMaxRows(), 5);
rangeToCopy.copyTo(sheet.getRange(1, 6));
```
@param destination A destination range to copy to; only the top-left cell position is relevant.*/copyTo(destination:SpreadsheetApp.Range):void;
/**Copies the data from a range of cells to another range of cells. By default both the values and
formatting are copied, but this can be overridden using advanced arguments.

```
// The code below copies only the values of the first 5 columns over to the 6th column.
var sheet = SpreadsheetApp.getActiveSheet();
sheet.getRange("A:E").copyTo(sheet.getRange("F1"), {contentsOnly:true});
```
@param destination A destination range to copy to; only the top-left cell position is relevant.
@param options A JavaScript object that specifies advanced parameters, as listed below.*/copyTo(destination:SpreadsheetApp.Range,options:Object):void;
/**Copies the data from a range of cells to another range of cells.

```
// The code below copies only the values of the first 5 columns over to the 6th column.
var sheet = SpreadsheetApp.getActiveSheet();
sheet.getRange("A:E").copyTo(sheet.getRange("F1"), SpreadsheetApp.CopyPasteType.PASTE_VALUES,
false);
```
@param destination A destination range to copy to; only the top-left cell position is relevant.
@param copyPasteType A type that specifies how the range contents are pasted to the
    destination.
@param transposed Whether the range should be pasted in its transposed orientation.*/copyTo(destination:SpreadsheetApp.Range,copyPasteType:SpreadsheetApp.CopyPasteType,transposed:boolean):void;
/**Copy the content of the range to the given location. If the destination is larger or smaller
than the source range then the source is repeated or truncated accordingly.

For a detailed description of the gridId parameter, see [`getGridId()`](https://developers.google.com/apps-script/reference/spreadsheet/range.html#getGridId()).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var source = ss.getSheets()[0];

var range = source.getRange("B2:D4");

// This copies the data in B2:D4 in the source sheet to
// D4:F6 in the sheet with gridId 0
range.copyValuesToRange(0, 4, 6, 4, 6);
```
@param gridId The unique ID of the sheet within the spreadsheet, irrespective of position.
@param column The first column of the target range.
@param columnEnd The end column of the target range.
@param row The start row of the target range.
@param rowEnd The end row of the target range.*/copyValuesToRange(gridId:Integer,column:Integer,columnEnd:Integer,row:Integer,rowEnd:Integer):void;
/**Copy the content of the range to the given location. If the destination is larger or smaller
than the source range then the source is repeated or truncated accordingly.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var source = ss.getSheets()[0];
var destination = ss.getSheets()[1];

var range = source.getRange("B2:D4");

// This copies the data in B2:D4 in the source sheet to
// D4:F6 in the second sheet
range.copyValuesToRange(destination, 4, 6, 4, 6);
```
@param sheet The target sheet.
@param column The first column of the target range.
@param columnEnd The end column of the target range.
@param row The start row of the target range.
@param rowEnd The end row of the target range.*/copyValuesToRange(sheet:SpreadsheetApp.Sheet,column:Integer,columnEnd:Integer,row:Integer,rowEnd:Integer):void;
/**Creates an empty data source pivot table from the data source, anchored at the first cell in
this range.

This example shows how to create and configure a new data source pivot table.

```
var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
var anchorCell = spreadsheet.getSheets()[0].getRange('A1');
var dataSource = spreadsheet.getDataSources()[0];

var pivotTable = anchorCell.createDataSourcePivotTable(dataSource);
pivotTable.addRowGroup('dataColumnA');
pivotTable.addColumnGroup('dataColumnB');
pivotTable.addPivotValue('dataColumnC', SpreadsheetApp.PivotTableSummarizeFunction.SUM);
pivotTable.addFilter('dataColumnA',
                     SpreadsheetApp.newFilterCriteria().whenTextStartsWith('A').build());
```
@param dataSource The data source to create the pivot table from.
@return The newly created data source pivot table.*/createDataSourcePivotTable(dataSource:SpreadsheetApp.DataSource):SpreadsheetApp.DataSourcePivotTable;
/**Creates an empty data source table from the data source, anchored at the first cell in this
range.

This example shows how to create and configure a new data source table.

```
var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
var anchorCell = spreadsheet.getSheets()[0].getRange('A1');
var dataSource = spreadsheet.getDataSources()[0];

var dataSourceTable = anchorCell.createDataSourceTable(dataSource);
    .addColumns('dataColumnA', 'dataColumnB', 'dataColumnC')
    .addSortSpec('dataColumnA', /* ascending= *\/ true)
    .addSortSpec('dataColumnB', /* ascending= *\/ false);
```
@param dataSource The data source to create the pivot table from.
@return The newly created data source table.*/createDataSourceTable(dataSource:SpreadsheetApp.DataSource):SpreadsheetApp.DataSourceTable;
/**Returns a DeveloperMetadataFinderApi for finding developer metadata within the scope of this
range. Metadata is within the scope of the range only if it is wholly contained within that
range. For example, metadata associated with the row ‘3:3’ is not in the scope of a range
‘A1:D5’ but is within the scope of a range ‘1:5’.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1:C6.
const range = sheet.getRange('A1:C6');

// Creates a developer metadata finder to search for metadata in the scope of this range.
const developerMetaDataFinder = range.createDeveloperMetadataFinder();

// Logs information about the developer metadata finder to the console.
const developerMetaData = developerMetaDataFinder.find()[0];
console.log(developerMetaData.getKey());
console.log(developerMetaData.getValue());
console.log(developerMetaData.getVisibility().toString());
```
@return A developer metadata finder to search for metadata in the scope of this range.*/createDeveloperMetadataFinder():SpreadsheetApp.DeveloperMetadataFinder;
/**Creates a filter and applies it to the specified range on the sheet. You can't create more than
one filter on a sheet. To access and modify your filter after you create it, use [`getFilter()`](https://developers.google.com/apps-script/reference/spreadsheet/range.html#getFilter()) or [`Sheet.getFilter()`](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getFilter()).

```
let ss = SpreadsheetApp.getActiveSheet();
let range = ss.getRange("A1:C20");

// Creates a new filter and applies it to the range A1:C20 on the active sheet.
function createFilter() {
  range.createFilter();
}
// Gets the filter and applies criteria that only shows cells that aren't empty.
function getFilterAddCriteria() {
  let filter = range.getFilter();
  let criteria = SpreadsheetApp.newFilterCriteria()
    .whenCellNotEmpty()
    .build();
  filter.setColumnFilterCriteria(2, criteria);
}
```

Use this method to create filters for [`Grid`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html) sheets, the default type of sheet.
Grid sheets are sheets that aren't connected to a database. To create other types of filters,
refer to the following:

  + Create a pivot table filter with [`PivotTable.addFilter(sourceDataColumn, filterCriteria)`](https://developers.google.com/apps-script/reference/spreadsheet/pivot-table.html#addFilter(Integer,FilterCriteria))
  + Create a filter for a sheet connected to a database with [`DataSourceSheet.addFilter(columnName, filterCriteria)`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-sheet.html#addFilter(String,FilterCriteria))
  + Create a filter for a pivot table connected to a database with [`DataSourcePivotTable.addFilter(columnName, filterCriteria)`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-pivot-table.html#addFilter(String,FilterCriteria))
@return The new filter.*/createFilter():SpreadsheetApp.Filter;
/**Creates an empty pivot table from the specified `sourceData` anchored at the first cell
in this range.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets cell A1 as a range in order to place the pivot table.
const range = sheet.getRange('A1');

// Gets the range of the source data for the pivot table.
const dataRange = sheet.getRange('E12:G20');

// Creates an empty pivot table from the specified source data.
const pivotTable = range.createPivotTable(dataRange);

// Logs the values from the pivot table's source data to the console.
console.log(pivotTable.getSourceDataRange().getValues());
```
@param sourceData The data to create the pivot table from.
@return The newly created [`PivotTable`](https://developers.google.com/apps-script/reference/spreadsheet/pivot-table.html).*/createPivotTable(sourceData:SpreadsheetApp.Range):SpreadsheetApp.PivotTable;
/**Creates a text finder for the range, which can find and replace text in this range.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
var range = sheet.getActiveRange();

// Creates  a text finder for the range.
var textFinder = range.createTextFinder('dog');

// Returns the first occurrence of 'dog'.
var firstOccurrence = textFinder.findNext();

// Replaces the last found occurrence of 'dog' with 'cat' and returns the number
// of occurrences replaced.
var numOccurrencesReplaced = textFinder.replaceWith('cat');
```
@param findText The text to search for.
@return The [`TextFinder`](https://developers.google.com/apps-script/reference/spreadsheet/text-finder.html) for the range*/createTextFinder(findText:string):SpreadsheetApp.TextFinder;
/**Deletes this range of cells. Existing data in the sheet along the provided dimension is shifted
towards the deleted range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:D10");
range.deleteCells(SpreadsheetApp.Dimension.COLUMNS);
```
@param shiftDimension The dimension along which to shift existing data.*/deleteCells(shiftDimension:SpreadsheetApp.Dimension):void;
/**Expands the collapsed groups whose range or control toggle intersects with this range. The
control toggle location is the index at which the control toggle is shown, directly before or
after the group depending on settings. If there is more than one group at the same location,
the shallowest group is expanded.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
var range = sheet.getActiveRange();

// All row and column groups within the range are expanded.
range.expandGroups();
```
@return This range, for chaining.*/expandGroups():SpreadsheetApp.Range;
/**Returns a string description of the range, in A1 notation.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange(1, 1, 2, 5);

// Logs "A1:E2"
Logger.log(range.getA1Notation());
```
@return The string description of the range in A1 notation.*/getA1Notation():string;
/**Returns the background color of the top-left cell in the range (for example, `'#ffffff'`).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var cell = sheet.getRange("B5");
Logger.log(cell.getBackground());
```
@return The color code of the background.*/getBackground():string;
/**Returns the background color of the top-left cell in the range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var cell = sheet.getRange("B5");
Logger.log(cell.getBackgroundObject().asRgbColor().asHexString());
```
@return The background color of the top-left cell in the range.*/getBackgroundObject():SpreadsheetApp.Color;
/**Returns the background colors of the cells in the range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("B5:C6");
var bgColors = range.getBackgroundObjects();
for (var i in bgColors) {
  for (var j in bgColors[i]) {
    Logger.log(bgColors[i][j].asRgbColor().asHexString());
  }
}
```
@return A two-dimensional array of background colors.*/getBackgroundObjects():SpreadsheetApp.Color[][];
/**Returns the background colors of the cells in the range (for example, `'#ffffff'`).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("B5:C6");
var bgColors = range.getBackgrounds();
for (var i in bgColors) {
  for (var j in bgColors[i]) {
    Logger.log(bgColors[i][j]);
  }
}
```
@return A two-dimensional array of color codes of the backgrounds.*/getBackgrounds():string[][];
/**Returns all the bandings that are applied to any cells in this range.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Sets a range.
const range = sheet.getRange('A1:K50');

// Gets the banding info for the range.
const bandings = range.getBandings();

// Logs the second row color for each banding to the console.
for (let banding of bandings) {
  console.log(banding.getSecondRowColor());
}
```
@return All the bandings that are applied to any cells in this range.*/getBandings():SpreadsheetApp.Banding[];
/**Returns a given cell within a range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("B2:D4");

// The row and column here are relative to the range
// getCell(1,1) in this code returns the cell at B2
var cell = range.getCell(1, 1);
Logger.log(cell.getValue());
```
@param row The row of the cell relative to the range.
@param column The column of the cell relative to the range.
@return A range containing a single cell at the specified coordinates.*/getCell(row:Integer,column:Integer):SpreadsheetApp.Range;
/**Returns the starting column position for this range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("B2:D4");
// Logs "2.0"
Logger.log(range.getColumn());
```
@return The range's starting column position in the spreadsheet.*/getColumn():Integer;
/**Returns a copy of the range expanded in the four cardinal [`Direction`](https://developers.google.com/apps-script/reference/spreadsheet/direction.html)s to cover all
adjacent cells with data in them. If the range is surrounded by empty cells not including those
along the diagonals, the range itself is returned. This is similar to selecting the range and
typing `Ctrl+A` in the editor.

```
// Assume the active spreadsheet is blank.
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
sheet.getRange("C2").setValue(100);
sheet.getRange("B3").setValue(100);
sheet.getRange("D3").setValue(100);
sheet.getRange("C4").setValue(100);
// Logs "B2:D4"
Logger.log(sheet.getRange("C3").getDataRegion().getA1Notation());
```
@return The range's data region or a range for the entire spreadsheet.*/getDataRegion():SpreadsheetApp.Range;
/**Returns a copy of the range expanded [`Direction.UP`](https://developers.google.com/apps-script/reference/spreadsheet/direction.html#UP) and [`Direction.DOWN`](https://developers.google.com/apps-script/reference/spreadsheet/direction.html#DOWN) if the
specified dimension is [`Dimension.ROWS`](https://developers.google.com/apps-script/reference/spreadsheet/dimension.html#ROWS), or [`Direction.NEXT`](https://developers.google.com/apps-script/reference/spreadsheet/direction.html#NEXT) and [`Direction.PREVIOUS`](https://developers.google.com/apps-script/reference/spreadsheet/direction.html#PREVIOUS) if the dimension is [`Dimension.COLUMNS`](https://developers.google.com/apps-script/reference/spreadsheet/dimension.html#COLUMNS). The expansion of the range
is based on detecting data next to the range that is organized like a table. The expanded range
covers all adjacent cells with data in them along the specified dimension including the table
boundaries. If the original range is surrounded by empty cells along the specified dimension,
the range itself is returned. This method is similar to selecting the range and typing 

```
Ctrl+Space```

 for columns or `Shift+Space` for rows in the editor.

```
// Assume the active spreadsheet is blank.
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
sheet.getRange("C2").setValue(100);
sheet.getRange("B3").setValue(100);
sheet.getRange("D3").setValue(100);
sheet.getRange("C4").setValue(100);
// Logs "C2:C4"
Logger.log(sheet.getRange("C3").getDataRegion(SpreadsheetApp.Dimension.ROWS).getA1Notation());
// Logs "B3:D3"
Logger.log(
    sheet.getRange("C3").getDataRegion(SpreadsheetApp.Dimension.COLUMNS).getA1Notation());
```
@param dimension The dimension along which to expand the range.
@return The range's data region or a range covering each column or each row spanned by the
    original range.*/getDataRegion(dimension:SpreadsheetApp.Dimension):SpreadsheetApp.Range;
/**Returns the [`DataSourceFormula`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-formula.html) for the first cell in the range, or `null` if
the cell doesn't contain a data source formula.

```
// Opens the spreadsheet file by its ID. If you created your script from a Google Sheets file,
// use SpreadsheetApp.getActiveSpreadsheet().
// TODO(developer): Replace the ID with your own.
const ss = SpreadsheetApp.openById('abc123456');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1 on Sheet1.
const range = sheet.getRange('A1');

// Gets the data source formula from cell A1.
const dataSourceFormula = range.getDataSourceFormula();

// Gets the formula.
const formula = dataSourceFormula.getFormula();

// Logs the formula.
console.log(formula);
```
@return The [`DataSourceFormula`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-formula.html) for the cell.*/getDataSourceFormula():SpreadsheetApp.DataSourceFormula;
/**Returns the [`DataSourceFormula`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-formula.html)s for the cells in the range.

```
// Opens the spreadsheet file by its ID. If you created your script from a Google Sheets file,
// use SpreadsheetApp.getActiveSpreadsheet().
// TODO(developer): Replace the ID with your own.
const ss = SpreadsheetApp.openById('abc123456');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1:B5 on Sheet1.
const range = sheet.getRange('A1:B5');

// Gets an array of the data source formulas in the range A1:B5.
const dataSourceFormulas = range.getDataSourceFormulas();

// Logs the first formula in the array.
console.log(dataSourceFormulas[0].getFormula());
```
@return An array of [`DataSourceFormula`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-formula.html)s.*/getDataSourceFormulas():SpreadsheetApp.DataSourceFormula[];
/**Gets all the data source pivot tables intersecting with the range.

```
// Opens the spreadsheet file by its ID. If you created your script from a Google Sheets file,
// use SpreadsheetApp.getActiveSpreadsheet().
// TODO(developer): Replace the ID with your own.
const ss = SpreadsheetApp.openById('abc123456');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1:G50 on Sheet1.
const range = sheet.getRange('A1:G50');

// Gets an array of the data source pivot tables in the range A1:G50.
const dataSourcePivotTables = range.getDataSourcePivotTables();

// Logs the last time that the first pivot table in the array was refreshed.
console.log(dataSourcePivotTables[0].getStatus().getLastRefreshedTime());
```
@return A list of data source pivot tables.*/getDataSourcePivotTables():SpreadsheetApp.DataSourcePivotTable[];
/**Gets all the data source tables intersecting with the range.

```
// Opens the spreadsheet file by its ID. If you created your script from a Google Sheets file,
// use SpreadsheetApp.getActiveSpreadsheet().
// TODO(developer): Replace the ID with your own.
const ss = SpreadsheetApp.openById('abc123456');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1:G50 on Sheet1.
const range = sheet.getRange('A1:G50');

// Gets the first data source table in the range A1:G50.
const dataSourceTable = range.getDataSourceTables()[0];

// Logs the time of the last completed data execution on the data source table.
console.log(dataSourceTable.getStatus().getLastExecutionTime());
```
@return A list of data source tables.*/getDataSourceTables():SpreadsheetApp.DataSourceTable[];
/**Returns a URL for the data in this range, which can be used to create charts and queries.

## Code.gs

```
function doGet() {
  var ss = SpreadsheetApp.openById('1khO6hBWTNNyvyyxvob7aoZTI9ZvlqqASNeq0e29Tw2c');
  var sheet = ss.getSheetByName('ContinentData');
  var range = sheet.getRange('A1:B8');

  var template = HtmlService.createTemplateFromFile('piechart');
  template.dataSourceUrl = range.getDataSourceUrl();
  return template.evaluate();
}
```

 

## piechart.html

```
<!DOCTYPE html>
<html>
  <head>
    <!--Load the AJAX API-->
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      // Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages': ['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(queryData);

      function queryData() {
        var query = new google.visualization.Query('<?= dataSourceUrl ?>');
        query.send(drawChart);
      }

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart(response) {
        if (response.isError()) {
          alert('Error: ' + response.getMessage() + ' ' + response.getDetailedMessage());
          return;
        }
        var data = response.getDataTable();

        // Set chart options.
        var options = {
          title: 'Population by Continent',
          width: 400,
          height: 300
        };

        // Instantiate and draw the chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
    </script>
  </head>
  <body>
    <!-- Div that holds the pie chart. -->
    <div id="chart_div"></div>
  </body>
</html>
```
@return A URL for this range as a data source that can be passed to other APIs such as charts.*/getDataSourceUrl():string;
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
@return the data as a datatable.*/getDataTable():DataTable;
/**Return the data inside this range as a DataTable.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("A1:B7");

// Calling this method with "true" sets the first line to be the title of the axes
var datatable = range.getDataTable(true);

// Note that this doesn't build an EmbeddedChart, so you can't just use
// Sheet#insertChart(). To do that, use sheet.newChart().addRange() instead.
var chart = Charts.newBarChart()
    .setDataTable(datatable)
    .setOption("title", "Your Title Here")
    .build();
```
@param firstRowIsHeader Whether to treat the first row as a header.
@return The data as a datatable.*/getDataTable(firstRowIsHeader:boolean):DataTable;
/**Returns the data validation rule for the top-left cell in the range. If data validation has not
been set on the cell, this method returns `null`.

```
// Log information about the data validation rule for cell A1.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = cell.getDataValidation();
if (rule != null) {
  var criteria = rule.getCriteriaType();
  var args = rule.getCriteriaValues();
  Logger.log('The data validation rule is %s %s', criteria, args);
} else {
  Logger.log('The cell does not have a data validation rule.')
}
```
@return The data validation rule for the top-left cell in the range.*/getDataValidation():SpreadsheetApp.DataValidation;
/**Returns the data validation rules for all cells in the range. If data validation has not been
set on a given cell, this method returns `null` for that cell's position in the array.

```
// Change existing data validation rules that require a date in 2013 to require a date in 2014.
var oldDates = [new Date('1/1/2013'), new Date('12/31/2013')];
var newDates = [new Date('1/1/2014'), new Date('12/31/2014')];
var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
var rules = range.getDataValidations();

for (var i = 0; i < rules.length; i++) {
  for (var j = 0; j < rules[i].length; j++) {
    var rule = rules[i][j];

    if (rule != null) {
      var criteria = rule.getCriteriaType();
      var args = rule.getCriteriaValues();

      if (criteria == SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN
          && args[0].getTime() == oldDates[0].getTime()
          && args[1].getTime() == oldDates[1].getTime()) {
        // Create a builder from the existing rule, then change the dates.
        rules[i][j] = rule.copy().withCriteria(criteria, newDates).build();
      }
    }
  }
}
range.setDataValidations(rules);
```
@return A two-dimensional array of data validation rules associated with the cells in the
    range.*/getDataValidations():SpreadsheetApp.DataValidation[][];
/**Gets the developer metadata associated with this range.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets row 2 on Sheet1.
const range = sheet.getRange('2:2');

// Adds metadata to row 2.
range.addDeveloperMetadata('NAME', 'GOOGLE');

// Logs the metadata to console.
for (const metadata of range.getDeveloperMetadata()) {
  console.log(`${metadata.getKey()}: ${metadata.getValue()}`);
}
```
@return The developer metadata associated with this range.*/getDeveloperMetadata():SpreadsheetApp.DeveloperMetadata[];
/**Returns the displayed value of the top-left cell in the range. The value is a `String`.
The displayed value takes into account date, time and currency formatting formatting, including
formats applied automatically by the spreadsheet's locale setting. Empty cells return an empty
string.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets cell A30 and sets its value to 'Test code.'
const cell = sheet.getRange('A30');
cell.setValue('Test code');

// Gets the value and logs it to the console.
console.log(cell.getDisplayValue());
```
@return The displayed value in this cell.*/getDisplayValue():string;
/**Returns the rectangular grid of values for this range.

Returns a two-dimensional array of displayed values, indexed by row, then by column. The
values are `String` objects. The displayed value takes into account date, time and
currency formatting, including formats applied automatically by the spreadsheet's locale
setting. Empty cells are represented by an empty string in the array. Remember that while a
range index starts at `1, 1`, the JavaScript array is indexed from `[0][0]`.

```
// The code below gets the displayed values for the range C2:G8
// in the active spreadsheet.  Note that this is a JavaScript array.
var values = SpreadsheetApp.getActiveSheet().getRange(2, 3, 6, 4).getDisplayValues();
Logger.log(values[0][0]);
```
@return A two-dimensional array of values.*/getDisplayValues():string[][];
/**Returns the filter on the sheet this range belongs to, or `null` if there is no filter on
the sheet.

```
let ss = SpreadsheetApp.getActiveSheet();
let range = ss.getRange("A1:C20");
// Gets the existing filter on the sheet that the given range belongs to.
let filter = range.getFilter();
```
@return The filter.*/getFilter():SpreadsheetApp.Filter;
/**Returns the font color of the cell in the top-left corner of the range, in CSS notation (such
as `'#ffffff'` or `'white'`).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("B2:D4");

Logger.log(range.getFontColor());
```
@deprecated
@return The font color in CSS notation (such as `'#ffffff'` or `'white'`).*/getFontColor():string;
/**Returns the font color of the cell in the top-left corner of the range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("B2:D4");

Logger.log(range.getFontColorObject().asRgbColor().asHexString());
```
@return The font color of the top-left cell in the range.*/getFontColorObject():SpreadsheetApp.Color;
/**Returns the font colors of the cells in the range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("B2:D4");

var results = range.getFontColorObjects();

for (var i in results) {
  for (var j in results[i]) {
    Logger.log(results[i][j].asRgbColor().asHexString());
  }
}
```
@return A two-dimensional array of font colors associated with cells in the range.*/getFontColorObjects():SpreadsheetApp.Color[][];
/**Returns the font colors of the cells in the range in CSS notation (such as `'#ffffff'` or
`'white'`).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("B2:D4");

var results = range.getFontColors();

for (var i in results) {
  for (var j in results[i]) {
    Logger.log(results[i][j]);
  }
}
```
@deprecated
@return A two-dimensional array of font colors associated with cells in the range.*/getFontColors():string[][];
/**Returns the font families of the cells in the range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("B2:D4");

var results = range.getFontFamilies();

for (var i in results) {
  for (var j in results[i]) {
    Logger.log(results[i][j]);
  }
}
```
@return A two-dimensional array of font families associated with cells in the range.*/getFontFamilies():string[][];
/**Returns the font family of the cell in the top-left corner of the range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("B2:D4");

Logger.log(range.getFontFamily());
```
@return The font family of the cell.*/getFontFamily():string;
/**Gets the line style of the cell in the top-left corner of the range (`'underline'`,
`'line-through'`, or `'none'`).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("B2:D4");

Logger.log(range.getFontLine());
```
@return The font line.*/getFontLine():string;
/**Gets the line style of the cells in the range (`'underline'`, `'line-through'`, or
`'none'`).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("B2:D4");

var results = range.getFontLines();

for (var i in results) {
  for (var j in results[i]) {
    Logger.log(results[i][j]);
  }
}
```
@return A two-dimensional array of font lines associated with cells in the range.*/getFontLines():string[][];
/**Returns the font size in point size of the cell in the top-left corner of the range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("B2:D4");

Logger.log(range.getFontSize());
```
@return The font size in point size.*/getFontSize():Integer;
/**Returns the font sizes of the cells in the range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("B2:D4");

var results = range.getFontSizes();

for (var i in results) {
  for (var j in results[i]) {
    Logger.log(results[i][j]);
  }
}
```
@return A two-dimensional array of font sizes of text associated with cells in the range.*/getFontSizes():Integer[][];
/**Returns the font style (`'italic'` or `'normal'`) of the cell in the top-left
corner of the range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("B2:D4");

Logger.log(range.getFontStyle());
```
@return The font style of the text in the cell.*/getFontStyle():string;
/**Returns the font styles of the cells in the range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("B2:D4");

var results = range.getFontStyles();

for (var i in results) {
  for (var j in results[i]) {
    Logger.log(results[i][j]);
  }
}
```
@return A two-dimensional array of font styles of text associated with cells in the range.*/getFontStyles():string[][];
/**Returns the font weight (normal/bold) of the cell in the top-left corner of the range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("B2:D4");

Logger.log(range.getFontWeight());
```
@return The font weight of the text in the cell.*/getFontWeight():string;
/**Returns the font weights of the cells in the range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("B2:D4");

var results = range.getFontWeights();

for (var i in results) {
  for (var j in results[i]) {
    Logger.log(results[i][j]);
  }
}
```
@return A two-dimensional array of font weights of text associated with cells in the range.*/getFontWeights():string[][];
/**Returns the formula (A1 notation) for the top-left cell of the range, or an empty string if the
cell is empty or doesn't contain a formula.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This assumes you have a function in B5 that sums up
// B2:B4
var range = sheet.getRange("B5");

// Logs the calculated value and the formula
Logger.log("Calculated value: %s Formula: %s",
           range.getValue(),
           range.getFormula());
```
@return The formula for the cell.*/getFormula():string;
/**Returns the formula (R1C1 notation) for a given cell, or `null` if none.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("B5");
var formula = range.getFormulaR1C1();
Logger.log(formula);
```
@return The formula in R1C1 notation.*/getFormulaR1C1():string;
/**Returns the formulas (A1 notation) for the cells in the range. Entries in the 2D array are
empty strings for cells with no formula.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("B5:C6");
var formulas = range.getFormulas();
for (var i in formulas) {
  for (var j in formulas[i]) {
    Logger.log(formulas[i][j]);
  }
}
```
@return A two-dimensional array of formulas in string format.*/getFormulas():string[][];
/**Returns the formulas (R1C1 notation) for the cells in the range. Entries in the 2D array are
`null` for cells with no formula.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("B5:C6");
var formulas = range.getFormulasR1C1();
for (var i in formulas) {
  for (var j in formulas[i]) {
    Logger.log(formulas[i][j]);
  }
}
```
@return A two-dimensional array of formulas in R1C1 notation.*/getFormulasR1C1():string[][];
/**Returns the grid ID of the range's parent sheet. IDs are random non-negative int values.

```
// Log the grid ID of the first sheet (by tab position) in the spreadsheet.
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("B2:D4");

Logger.log(range.getGridId());
```
@return The grid ID of the parent sheet.*/getGridId():Integer;
/**Returns the height of the range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("B2:D4");
// logs 3.0
Logger.log(range.getHeight());
```
@return The height of the range.*/getHeight():Integer;
/**Returns the horizontal alignment of the text (left/center/right) of the cell in the top-left
corner of the range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("B2:D4");

Logger.log(range.getHorizontalAlignment());
```
@return The horizontal alignment of the text in the cell.*/getHorizontalAlignment():string;
/**Returns the horizontal alignments of the cells in the range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("B2:D4");

var results = range.getHorizontalAlignments();

for (var i in results) {
  for (var j in results[i]) {
    Logger.log(results[i][j]);
  }
}
```
@return A two-dimensional array of horizontal alignments of text associated with cells in the
    range.*/getHorizontalAlignments():string[][];
/**Returns the end column position.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("B2:D4");
// Logs "4.0"
Logger.log(range.getLastColumn());
```
@return The range's ending column position in the spreadsheet.*/getLastColumn():Integer;
/**Returns the end row position.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("B2:D4");
// Logs "4.0"
Logger.log(range.getLastRow());
```
@return The range's ending row position in the spreadsheet.*/getLastRow():Integer;
/**Returns an array of [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) objects representing merged cells that either are fully
within the current range, or contain at least one cell in the current range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B3");

var mergedRanges = range.getMergedRanges();
for (var i = 0; i < mergedRanges.length; i++) {
  Logger.log(mergedRanges[i].getA1Notation());
  Logger.log(mergedRanges[i].getDisplayValue());
}
```
@return An array of [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) objects, representing merged cells overlapping the range.*/getMergedRanges():SpreadsheetApp.Range[];
/**Starting at the cell in the first column and row of the range, returns the next cell in the
given direction that is the edge of a contiguous range of cells with data in them or the cell
at the edge of the spreadsheet in that direction. This is equivalent to typing 

```
Ctrl+[arrow key]```

 in the editor.

```
// Assume the active spreadsheet is blank.
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("C3:E5");
// Logs "C1"
Logger.log(range.getNextDataCell(SpreadsheetApp.Direction.UP).getA1Notation());
```
@param direction The direction in which to find the next data region edge cell.
@return The data region edge cell or the cell at the edge of the spreadsheet.*/getNextDataCell(direction:SpreadsheetApp.Direction):SpreadsheetApp.Range;
/**Returns the note associated with the given range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("B2:D4");

Logger.log(range.getNote());
```
@return The note associated with the given cell.*/getNote():string;
/**Returns the notes associated with the cells in the range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("B2:D4");

var results = range.getNotes();

for (var i in results) {
  for (var j in results[i]) {
    Logger.log(results[i][j]);
  }
}
```
@return A two-dimensional array of notes associated with cells in the range.*/getNotes():string[][];
/**Returns the number of columns in this range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("B2:D5");
Logger.log(range.getNumColumns());
```
@return The number of columns in this range.*/getNumColumns():Integer;
/**Returns the number of rows in this range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("B2:D5");
Logger.log(range.getNumRows());
```
@return The number of rows in this range.*/getNumRows():Integer;
/**Get the number or date formatting of the top-left cell of the given range. The returned format
patterns are described in the [Sheets API
documentation](/sheets/api/guides/formats).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var cell = sheet.getRange("C4");
Logger.log(cell.getNumberFormat());
```
@return The number format of the top-left cell of the range.*/getNumberFormat():string;
/**Returns the number or date formats for the cells in the range. The returned format patterns are
described in the [Sheets API documentation](/sheets/api/guides/formats).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("B5:C6");
var formats = range.getNumberFormats();
for (var i in formats) {
  for (var j in formats[i]) {
    Logger.log(formats[i][j]);
  }
}
```
@return A two-dimensional array of number formats.*/getNumberFormats():string[][];
/**Returns the Rich Text value for the top left cell of the range, or `null` if the cell
value is not text.

```
// Gets the Rich Text value of cell D4.
var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("D4:F6");
var richText = range.getRichTextValue();
console.log(richText.getText());
```
@return The Rich Text value of the top left cell in the range, or `null` if the cell
    value is not text.*/getRichTextValue():SpreadsheetApp.RichTextValue;
/**Returns the Rich Text values for the cells in the range.

```
// Gets the Rich Text values for all cells in range B5:C6
var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("B5:C6");
var values = range.getRichTextValues();

for (var i = 0; i < values.length; i++) {
  for (var j = 0; j < values[i].length; j++) {
    console.log(values[i][j].getText());
  }
}
```
@return A two-dimensional array of Rich Text values.*/getRichTextValues():SpreadsheetApp.RichTextValue[][];
/**Returns the row position for this range. Identical to [getRowIndex()](/apps-script/reference/spreadsheet/range#getrowindex).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("B2");
Logger.log(range.getRow());
```
@return The row position of the range.*/getRow():Integer;
/**Returns the row position for this range. Identical to [getRow()](/apps-script/reference/spreadsheet/range#getrow).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("B2");
Logger.log(range.getRowIndex());
```
@return The row position of the range.*/getRowIndex():Integer;
/**Returns the sheet this range belongs to.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1:D10 on Sheet1.
const range = sheet.getRange('A1:D10');

// Gets the sheet that the range belongs to.
const rangeSheet = range.getSheet();

// Gets the sheet name and logs it to the console.
console.log(rangeSheet.getName());
```
@return The sheet that this range belongs to.*/getSheet():SpreadsheetApp.Sheet;
/**Returns the text direction for the top left cell of the range. Returns `null` if the cell
text direction is determined with automatic detection.

```
// Get the text direction of cell B1.
var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("B1:D4");
Logger.log(range.getTextDirection());
```
@return The text direction of the top left cell in the range.*/getTextDirection():SpreadsheetApp.TextDirection;
/**Returns the text directions for the cells in the range. Entries in the 2D array are `null` for cells using automatic detection.

```
// Get the text directions for all cells in range B5:C6
var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("B5:C6");
var directions = range.getTextDirections();

for (var i = 0; i < directions.length; i++) {
  for (var j = 0; j < directions[i].length; j++) {
    Logger.log(directions[i][j]);
  }
}
```
@return A two-dimensional array of text directions.*/getTextDirections():SpreadsheetApp.TextDirection[][];
/**Returns the text rotation settings for the top left cell of the range.

```
// Log the text rotation settings for a cell.
var sheet = SpreadsheetApp.getActiveSheet();

var cell = sheet.getRange("A1");
Logger.log(cell.getTextRotation());
```
@return The text rotation settings.*/getTextRotation():SpreadsheetApp.TextRotation;
/**Returns the text rotation settings for the cells in the range.

```
var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("B2:D4");

var results = range.getTextRotations();

for (var i in results) {
  for (var j in results[i]) {
    var rotation = results[i][j];
    Logger.log("Cell [%s, %s] has text rotation: %v", i, j, rotation);
  }
}
```
@return A two-dimensional array of text rotations associated with cells in the range.*/getTextRotations():SpreadsheetApp.TextRotation[][];
/**Returns the text style for the top left cell of the range.

```
// Get the text style of cell D4.
var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("D4:F6");
var style = range.getTextStyle();
Logger.log(style);
```
@return The text style of the top left cell in the range.*/getTextStyle():SpreadsheetApp.TextStyle;
/**Returns the text styles for the cells in the range.

```
// Get the text styles for all cells in range B5:C6
var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("B5:C6");
var styles = range.getTextStyles();

for (var i = 0; i < styles.length; i++) {
  for (var j = 0; j < styles[i].length; j++) {
    Logger.log(styles[i][j]);
  }
}
```
@return A two-dimensional array of text styles.*/getTextStyles():SpreadsheetApp.TextStyle[][];
/**Returns the value of the top-left cell in the range. The value may be of type `Number`,
`Boolean`, `Date`, or `String` depending on the value of the cell. Empty
cells return an empty string.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1:D10 on Sheet1.
const range = sheet.getRange('A1:D10');

// Gets the value of the top-left cell in the range and logs it to the console.
console.log(range.getValue());

```
@return The value in this cell.*/getValue():Object;
/**Returns the rectangular grid of values for this range.

Returns a two-dimensional array of values, indexed by row, then by column. The values may be
of type `Number`, `Boolean`, `Date`, or `String`, depending on the
value of the cell. Empty cells are represented by an empty string in the array. Remember that
while a range index starts at `1, 1`, the JavaScript array is indexed from `[0][0]`.

```
// The code below gets the values for the range C2:G8
// in the active spreadsheet.  Note that this is a JavaScript array.
var values = SpreadsheetApp.getActiveSheet().getRange(2, 3, 6, 4).getValues();
Logger.log(values[0][0]);
```

In web apps, a `Date` value isn't a legal parameter. `getValues()` fails to return
data to a web app if the range contains a cell with a `Date` value. Instead, transform
all the values retrieved from the sheet to a supported JavaScript primitive like a `Number`, `Boolean`, or `String`.
@return A two-dimensional array of values.*/getValues():Object[][];
/**Returns the vertical alignment (top/middle/bottom) of the cell in the top-left corner of the
range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("B2:D4");

Logger.log(range.getVerticalAlignment());
```
@return The vertical alignment of the text in the cell.*/getVerticalAlignment():string;
/**Returns the vertical alignments of the cells in the range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("B2:D4");

var results = range.getVerticalAlignments();

for (var i in results) {
  for (var j in results[i]) {
    Logger.log(results[i][j]);
  }
}
```
@return A two-dimensional array of vertical alignments of text associated with cells in the
    range.*/getVerticalAlignments():string[][];
/**Returns the width of the range in columns.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1:D10 on Sheet1.
const range = sheet.getRange('A1:D10');

// Gets the width of the range in number of columns and logs it to the console.
console.log(range.getWidth());
```
@return The number of columns in the range.*/getWidth():Integer;
/**Returns whether the text in the cell wraps. To get more granular wrap strategy, use [`getWrapStrategy()`](https://developers.google.com/apps-script/reference/spreadsheet/range.html#getWrapStrategy()).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("B2:D4");

Logger.log(range.getWrap());
```
@return Whether the text in this cell wraps or not.*/getWrap():boolean;
/**Returns the text wrapping strategies for the cells in the range.

```
// Get the text wrapping strategies for all cells in range B5:C6
var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("B5:C6");
var strategies = range.getWrapStrategies();

for (var i = 0; i < strategies.length; i++) {
  for (var j = 0; j < strategies[i].length; j++) {
    Logger.log(strategies[i][j]);
  }
}
```
@return A two-dimensional array of text wrapping strategies.*/getWrapStrategies():SpreadsheetApp.WrapStrategy[][];
/**Returns the text wrapping strategy for the top left cell of the range.

```
// Get the text wrapping strategy of cell B1.
var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("B1:D4");
Logger.log(range.getWrapStrategy());
```
@return The text wrapping strategy of the top left cell in the range.*/getWrapStrategy():SpreadsheetApp.WrapStrategy;
/**Returns whether the text in the cells wrap. To get more granular wrap strategy, use [`getWrapStrategies()`](https://developers.google.com/apps-script/reference/spreadsheet/range.html#getWrapStrategies()).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("B2:D4");

var results = range.getVerticalAlignments();

for (var i in results) {
  for (var j in results[i]) {
    var isWrapped = results[i][j];
    if (isWrapped) {
       Logger.log("Cell [%s, %s] has wrapped text", i, j);
    }
  }
}
```
@return A two-dimensional array of vertical alignments of text associated with cells in the
    range.*/getWraps():boolean[][];
/**Inserts empty cells into this range. The new cells retain any formatting present in the cells
previously occupying this range. Existing data in the sheet along the provided dimension is
shifted away from the inserted range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:D10");
range.insertCells(SpreadsheetApp.Dimension.COLUMNS);
```
@param shiftDimension The dimension along which to shift existing data.
@return This range, for chaining.*/insertCells(shiftDimension:SpreadsheetApp.Dimension):SpreadsheetApp.Range;
/**Inserts checkboxes into each cell in the range, configured with `true` for checked and
`false` for unchecked. Sets the value of all cells in the range to `false`.

```
var range = SpreadsheetApp.getActive().getRange('A1:B10');

// Inserts checkboxes into each cell in the range A1:B10 configured with 'true' for checked
// and 'false' for unchecked. Also, sets the value of each cell in the range A1:B10 to 'false'.
range.insertCheckboxes();
```
@return This range, for chaining.*/insertCheckboxes():SpreadsheetApp.Range;
/**Inserts checkboxes into each cell in the range, configured with a custom value for checked and
the empty string for unchecked. Sets the value of each cell in the range to the empty string.

```
var range = SpreadsheetApp.getActive().getRange('A1:B10');

// Inserts checkboxes into each cell in the range A1:B10 configured with 'yes' for checked
// and the empty string for unchecked. Also, sets the value of each cell in the range A1:B10 to
//  the empty string.
range.insertCheckboxes('yes');
```
@param checkedValue The checked value for the checkbox data validation.
@return This range, for chaining.*/insertCheckboxes(checkedValue:Object):SpreadsheetApp.Range;
/**Inserts checkboxes into each cell in the range, configured with custom values for the checked
and unchecked states. Sets the value of each cell in the range to the custom unchecked value.

```
var range = SpreadsheetApp.getActive().getRange('A1:B10');

// Inserts checkboxes into each cell in the range A1:B10 configured with 'yes' for checked
// and 'no' for unchecked. Also, sets the value of each cell in the range A1:B10 to 'no'.
range.insertCheckboxes('yes', 'no');
```
@param checkedValue The checked value for the checkbox data validation.
@param uncheckedValue The unchecked value for the checkbox data validation.
@return This range, for chaining.*/insertCheckboxes(checkedValue:Object,uncheckedValue:Object):SpreadsheetApp.Range;
/**Returns `true` if the range is totally blank.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("B2:D4");

Logger.log(range.isBlank());
```
@return `true` if the range is blank; `false` otherwise.*/isBlank():boolean;
/**Returns whether all cells in the range have their checkbox state as 'checked'. Returns `null` if some cells are checked and the rest unchecked, or if some cells do not have checkbox
data validation.

```
var range = SpreadsheetApp.getActive().getRange('A1:A3');

// Inserts checkboxes and sets each cell value to 'no' in the range A1:A3.
range.insertCheckboxes('yes', 'no');

var range1 = SpreadsheetApp.getActive().getRange('A1');
range1.setValue('yes');
// Sets the value of isRange1Checked as true as it contains the checked value.
var isRange1Checked = range1.isChecked();

var range2 = SpreadsheetApp.getActive().getRange('A2');
range2.setValue('no');
// Sets the value of isRange2Checked as false as it contains the unchecked value.
var isRange2Checked = range2.isChecked();

var range3 = SpreadsheetApp.getActive().getRange('A3');
range3.setValue('random');
// Sets the value of isRange3Checked as null, as it contains an invalid checkbox value.
var isRange3Checked = range3.isChecked();
```
@return `true`, if all cells in the range are checked, `false` if all cells in the
    range are unchecked, or `null` if any of the cells are unchecked or do not have
    checkbox data validation.*/isChecked():boolean;
/**Determines whether the end of the range is bound to a particular column. For example, for the
ranges `A1:B10` or `B:B`, which are bound to columns at the end of the range, this
method returns `true`; for the ranges `3:7` or `A1:5`, which are bound only
to particular rows at the end of the range, this method returns `false`.

```
 // Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1:D10 on Sheet1.
const range = sheet.getRange('A1:D10');

// Determines if the end of the range is bound to a particular column and logs it to the
// console.
console.log(range.isEndColumnBounded());
```
@return `true` if the end of the range is bound to a particular column; `false`
    otherwise.*/isEndColumnBounded():boolean;
/**Determines whether the end of the range is bound to a particular row. For example, for the
ranges `A1:B10` or `3:7`, which are bound to rows at the end of the range, this
method returns `true`; for the ranges `B:B` or `A1:C`, which are bound only
to particular columns at the end of the range, this method returns `false`.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1:D10 on Sheet1.
const range = sheet.getRange('A1:D10');

// Determines if the end of the range is bound to a particular row and logs it to the console.
console.log(range.isEndRowBounded());
```
@return `true` if the end of the range is bound to a particular row; `false`
    otherwise.*/isEndRowBounded():boolean;
/**Returns `true` if the cells in the current range overlap any merged cells.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B3");

// True if any of the cells in A1:B3 is included in a merge.
var isPartOfMerge = range.isPartOfMerge();
```
@return `true` if the range overlaps any merged cells, otherwise returns `false`.*/isPartOfMerge():boolean;
/**Determines whether the start of the range is bound to a particular column. For example, for the
ranges `A1:B10` or `B:B`, which are bound to columns at the start of the range,
this method returns `true`; for the range `3:7`, which is bound only to a row at
the start of the range, this method returns `false`.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1:D10 on Sheet1.
const range = sheet.getRange('A1:D10');

// Determines if the start of the range is bound to a particular column and logs it to the
// console.
console.log(range.isStartColumnBounded());
```
@return `true` if the start of the range is bound to a particular column; `false`
    otherwise.*/isStartColumnBounded():boolean;
/**Determines whether the start of the range is bound to a particular row. For example, for the
ranges `A1:B10` or `3:7`, which are bound to rows at the start of the range, this
method returns `true`; for the range `B:B`, which is bound only to a particular
column at the start of the range, this method returns `false`.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range A1:D10 on Sheet1.
const range = sheet.getRange('A1:D10');

// Determines if the start of the range is bound to a particular row and logs it to the
// console.
console.log(range.isStartRowBounded());
```
@return `true` if the start of the range is bound to a particular row; `false`
    otherwise.*/isStartRowBounded():boolean;
/**Merges the cells in the range together into a single block.

```
var sheet = SpreadsheetApp.getActiveSheet();

// The code below 2-dimensionally merges the cells in A1 to B3
sheet.getRange('A1:B3').merge();
```
@return This range, for chaining.*/merge():SpreadsheetApp.Range;
/**Merge the cells in the range across the columns of the range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// The code below merges cells C5:E5 into one cell
var range1 = sheet.getRange("C5:E5");
range1.mergeAcross();

// The code below creates 2 horizontal cells, F5:H5 and F6:H6
var range2 = sheet.getRange("F5:H6");
range2.mergeAcross();
```
@return This range, for chaining.*/mergeAcross():SpreadsheetApp.Range;
/**Merges the cells in the range together.

```
var sheet = SpreadsheetApp.getActiveSheet();

// The code below vertically merges the cells in A1 to A10
sheet.getRange('A1:A10').mergeVertically();

// The code below creates 3 merged columns: B1 to B10, C1 to C10, and D1 to D10
sheet.getRange('B1:D10').mergeVertically();
```
@return This range, for chaining.*/mergeVertically():SpreadsheetApp.Range;
/**Cut and paste (both format and values) from this range to the target range.

```
// The code below moves the first 5 columns over to the 6th column
var sheet = SpreadsheetApp.getActiveSheet()
sheet.getRange("A1:E").moveTo(sheet.getRange("F1"));
```
@param target A target range to copy this range to; only the top-left cell position is
    relevant.*/moveTo(target:SpreadsheetApp.Range):void;
/**Returns a new range that is offset from this range by the given number of rows and columns
(which can be negative). The new range is the same size as the original range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var cell = sheet.getRange("A1");

// newCell references B2
var newCell = cell.offset(1, 1);
```
@param rowOffset The number of rows down from the range's top-left cell; negative values
    represent rows up from the range's top-left cell.
@param columnOffset The number of columns right from the range's top-left cell; negative values
    represent columns left from the range's top-left cell.
@return This range, for chaining.*/offset(rowOffset:Integer,columnOffset:Integer):SpreadsheetApp.Range;
/**Returns a new range that is relative to the current range, whose upper left point is offset
from the current range by the given rows and columns, and with the given height in cells.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var cell = sheet.getRange("A1");

// newCell references B2:B3
var newRange = cell.offset(1, 1, 2);
```
@param rowOffset The number of rows down from the range's top-left cell; negative values
    represent rows up from the range's top-left cell.
@param columnOffset The number of columns right from the range's top-left cell; negative values
    represent columns left from the range's top-left cell.
@param numRows The height in rows of the new range.
@return This range, for chaining.*/offset(rowOffset:Integer,columnOffset:Integer,numRows:Integer):SpreadsheetApp.Range;
/**Returns a new range that is relative to the current range, whose upper left point is offset
from the current range by the given rows and columns, and with the given height and width in
cells.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var cell = sheet.getRange("A1");

// newCell references B2:C3
var newRange = cell.offset(1, 1, 2, 2);
```
@param rowOffset The number of rows down from the range's top-left cell; negative values
    represent rows up from the range's top-left cell.
@param columnOffset The number of columns right from the range's top-left cell; negative values
    represent columns left from the range's top-left cell.
@param numRows The height in rows of the new range.
@param numColumns The width in columns of the new range.
@return This range, for chaining.*/offset(rowOffset:Integer,columnOffset:Integer,numRows:Integer,numColumns:Integer):SpreadsheetApp.Range;
/**Creates an object that can protect the range from being edited except by users who have
permission. Until the script actually changes the list of editors for the range (by calling
[`Protection.removeEditor(emailAddress)`](https://developers.google.com/apps-script/reference/spreadsheet/protection.html#removeEditor(String)), [`Protection.removeEditor(user)`](https://developers.google.com/apps-script/reference/spreadsheet/protection.html#removeEditor(User)), [`Protection.removeEditors(emailAddresses)`](https://developers.google.com/apps-script/reference/spreadsheet/protection.html#removeEditors(String)), [`Protection.addEditor(emailAddress)`](https://developers.google.com/apps-script/reference/spreadsheet/protection.html#addEditor(String)), [`Protection.addEditor(user)`](https://developers.google.com/apps-script/reference/spreadsheet/protection.html#addEditor(User)), [`Protection.addEditors(emailAddresses)`](https://developers.google.com/apps-script/reference/spreadsheet/protection.html#addEditors(String)), or setting a new
value for [`Protection.setDomainEdit(editable)`](https://developers.google.com/apps-script/reference/spreadsheet/protection.html#setDomainEdit(Boolean))), the permissions mirror those of the
spreadsheet itself, which effectively means that the range remains unprotected. If the range is
already protected, this method creates a new protected range that overlaps the existing one. If
a cell is protected by multiple protected ranges and any of them prevent a particular user from
editing the cell, then that user is not permitted to edit the cell.

```
// Protect range A1:B10, then remove all other users from the list of editors.
var ss = SpreadsheetApp.getActive();
var range = ss.getRange('A1:B10');
var protection = range.protect().setDescription('Sample protected range');

// Ensure the current user is an editor before removing others. Otherwise, if the user's edit
// permission comes from a group, the script throws an exception upon removing the group.
var me = Session.getEffectiveUser();
protection.addEditor(me);
protection.removeEditors(protection.getEditors());
if (protection.canDomainEdit()) {
  protection.setDomainEdit(false);
}
```
@return An object representing the protection settings.*/protect():SpreadsheetApp.Protection;
/**Randomizes the order of the rows in the given range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("A1:C7");

// Randomizes the range
range.randomize();
```
@return This range, for chaining.*/randomize():SpreadsheetApp.Range;
/**Removes all checkboxes from the range. Clears the data validation of each cell, and
additionally clears its value if the cell contains either the checked or unchecked value.

```
var range = SpreadsheetApp.getActive().getRange('A1:B10');

// Inserts checkboxes and sets each cell value to 'no' in the range A1:B10.
range.insertCheckboxes('yes', 'no');

var range1 = SpreadsheetApp.getActive().getRange('A1');
range1.setValue('yes');
// Removes the checkbox data validation in cell A1 and clears its value.
range1.removeCheckboxes();

var range2 = SpreadsheetApp.getActive().getRange('A2');
range2.setValue('random');
// Removes the checkbox data validation in cell A2 but does not clear its value.
range2.removeCheckboxes();
```
@return This range, for chaining.*/removeCheckboxes():SpreadsheetApp.Range;
/**Removes rows within this range that contain values that are duplicates of values in any
previous row. Rows with identical values but different letter cases, formatting, or formulas
are considered to be duplicates. This method also removes duplicates rows hidden from view (for
example, due to a filter). Content outside of this range isn't removed.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("B1:D7");

// Remove duplicate rows in the range.
range.removeDuplicates();
```
@return The resulting range after removing duplicates. The size of the range is reduced by a
    row for every row removed.*/removeDuplicates():SpreadsheetApp.Range;
/**Removes rows within this range that contain values in the specified columns that are duplicates
of values any previous row. Rows with identical values but different letter cases, formatting,
or formulas are considered to be duplicates. This method also removes duplicates rows hidden
from view (for example, due to a filter). Content outside of this range isn't removed.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("B1:D7");

// Remove rows which have duplicate values in column B.
range.removeDuplicates([2]);

// Remove rows which have duplicate values in both columns B and D.
range.removeDuplicates([2,4]);
```
@param columnsToCompare The columns to analyze for duplicate values. If no columns are provided
    then all columns are analyzed for duplicates.
@return The resulting range after removing duplicates. The size of the range is reduced by a
    row for every row removed.*/removeDuplicates(columnsToCompare:Integer[]):SpreadsheetApp.Range;
/**Sets the background color of all cells in the range in CSS notation (such as `'#ffffff'`
or `'white'`).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("B2:D5");
range.setBackground("red");
```
@param color A color code in CSS notation (such as `'#ffffff'` or `'white'`); a
    `null` value resets the color.
@return This range, for chaining.*/setBackground(color:string):SpreadsheetApp.Range;
/**Sets the background color of all cells in the range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var bgColor = SpreadsheetApp.newColor()
    .setThemeColor(SpreadsheetApp.ThemeColorType.BACKGROUND)
    .build();

var range = sheet.getRange("B2:D5");
range.setBackgroundObject(bgColor);
```
@param color The background color to set; `null` value resets the background color.
@return This range, for chaining.*/setBackgroundObject(color:SpreadsheetApp.Color):SpreadsheetApp.Range;
/**Sets a rectangular grid of background colors (must match dimensions of this range).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var colorAccent1 = SpreadsheetApp.newColor()
    .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT1)
    .build();
var colorAccent2 = SpreadsheetApp.newColor()
    .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT2)
    .build();
var colorAccent3 = SpreadsheetApp.newColor()
    .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT3)
    .build();
var colorAccent4 = SpreadsheetApp.newColor()
    .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT4)
    .build();

var colors = [
  [colorAccent1, colorAccent2],
  [colorAccent3, colorAccent4]
];

var cell = sheet.getRange("B5:C6");
cell.setBackgroundObjects(colors);
```
@param color A two-dimensional array of colors; `null` values reset the color.
@return This range, for chaining.*/setBackgroundObjects(color:SpreadsheetApp.Color[][]):SpreadsheetApp.Range;
/**Sets the background to the given color using RGB values (integers between 0 and 255 inclusive).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var cell = sheet.getRange("B2");

// Sets the background to white
cell.setBackgroundRGB(255, 255, 255);

// Sets the background to red
cell.setBackgroundRGB(255, 0, 0);
```
@param red The red value in RGB notation.
@param green The green value in RGB notation.
@param blue The blue value in RGB notation.
@return This range, for chaining.*/setBackgroundRGB(red:Integer,green:Integer,blue:Integer):SpreadsheetApp.Range;
/**Sets a rectangular grid of background colors (must match dimensions of this range). The colors
are in CSS notation (such as `'#ffffff'` or `'white'`).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var colors = [
  ["red", "white", "blue"],
  ["#FF0000", "#FFFFFF", "#0000FF"] // These are the hex equivalents
];

var cell = sheet.getRange("B5:D6");
cell.setBackgrounds(colors);
```
@param color A two-dimensional array of colors in CSS notation (such as `'#ffffff'` or
    `'white'`); `null` values reset the color.
@return This range, for chaining.*/setBackgrounds(color:string[][]):SpreadsheetApp.Range;
/**Sets the border property. Valid values are `true` (on), `false` (off) and `null` (no change).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var cell = sheet.getRange("B2");
// Sets borders on the top and bottom, but leaves the left and right unchanged
cell.setBorder(true, null, true, null, false, false);
```
@param top `true` for border, `false` for none, `null` for no change.
@param left `true` for border, `false` for none, `null` for no change.
@param bottom `true` for border, `false` for none, `null` for no change.
@param right `true` for border, `false` for none, `null` for no change.
@param vertical `true` for internal vertical borders, `false` for none, `null` for no change.
@param horizontal `true` for internal horizontal borders, `false` for none, `null` for no change.
@return This range, for chaining.*/setBorder(top:boolean,left:boolean,bottom:boolean,right:boolean,vertical:boolean,horizontal:boolean):SpreadsheetApp.Range;
/**Sets the border property with color and/or style. Valid values are `true` (on), `false` (off) and `null` (no change). For color, use Color in CSS notation (such as `'#ffffff'` or `'white'`).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var cell = sheet.getRange("B2");
// Sets borders on the top and bottom, but leaves the left and right unchanged
// Also sets the color to "red", and the border to "DASHED".
cell.setBorder(true, null, true, null, false, false, "red", SpreadsheetApp.BorderStyle.DASHED);
```
@param top `true` for border, `false` for none, `null` for no change.
@param left `true` for border, `false` for none, `null` for no change.
@param bottom `true` for border, `false` for none, `null` for no change.
@param right `true` for border, `false` for none, `null` for no change.
@param vertical `true` for internal vertical borders, `false` for none, `null` for no change.
@param horizontal `true` for internal horizontal borders, `false` for none, `null` for no change.
@param color A color in CSS notation (such as `'#ffffff'` or `'white'`), `null` for default color (black).
@param style A style for the borders, `null` for default style (solid).
@return This range, for chaining.*/setBorder(top:boolean,left:boolean,bottom:boolean,right:boolean,vertical:boolean,horizontal:boolean,color:string,style:SpreadsheetApp.BorderStyle):SpreadsheetApp.Range;
/**Sets one data validation rule for all cells in the range.

```
// Set the data validation rule for cell A1 to require a value from B1:B10.
var cell = SpreadsheetApp.getActive().getRange('A1');
var range = SpreadsheetApp.getActive().getRange('B1:B10');
var rule = SpreadsheetApp.newDataValidation().requireValueInRange(range).build();
cell.setDataValidation(rule);
```
@param rule The data validation rule to set, or `null` to remove data validation.
@return This range, for chaining.*/setDataValidation(rule:SpreadsheetApp.DataValidation):SpreadsheetApp.Range;
/**Sets the data validation rules for all cells in the range. This method takes a two-dimensional
array of data validations, indexed by row then by column. The array dimensions must correspond
to the range dimensions.

```
// Set the data validation rules for Sheet1!A1:B5 to require a value from Sheet2!A1:A10.
var destinationRange = SpreadsheetApp.getActive().getSheetByName('Sheet1').getRange('A1:B5');
var sourceRange = SpreadsheetApp.getActive().getSheetByName('Sheet2').getRange('A1:A10');
var rule = SpreadsheetApp.newDataValidation().requireValueInRange(sourceRange).build();
var rules = destinationRange.getDataValidations();
for (var i = 0; i < rules.length; i++) {
  for (var j = 0; j < rules[i].length; j++) {
    rules[i][j] = rule;
  }
}
destinationRange.setDataValidations(rules);
```
@param rules A two-dimensional array of data validation rules to set; `null` values
    remove data validation.
@return This range, for chaining.*/setDataValidations(rules:SpreadsheetApp.DataValidation[][]):SpreadsheetApp.Range;
/**Sets the font color in CSS notation (such as `'#ffffff'` or `'white'`).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var cell = sheet.getRange("B2");
cell.setFontColor("red");
```
@param color The font color in CSS notation (such as `'#ffffff'` or `'white'`); a
    `null` value resets the color.
@return This range, for chaining.*/setFontColor(color:string):SpreadsheetApp.Range;
/**Sets the font color of the given range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var color = SpreadsheetApp.newColor()
    .setThemeColor(SpreadsheetApp.ThemeColorType.TEXT)
    .build();

var cell = sheet.getRange("B2");
cell.setFontColor(color);
```
@param color The font color to set; a `null` value resets the color.
@return This range, for chaining.*/setFontColorObject(color:SpreadsheetApp.Color):SpreadsheetApp.Range;
/**Sets a rectangular grid of font colors (must match dimensions of this range).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var colorAccent1 = SpreadsheetApp.newColor()
    .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT1)
    .build();
var colorAccent2 = SpreadsheetApp.newColor()
    .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT2)
    .build();
var colorAccent3 = SpreadsheetApp.newColor()
    .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT3)
    .build();
var colorAccent4 = SpreadsheetApp.newColor()
    .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT4)
    .build();

var colors = [
  [colorAccent1, colorAccent2],
  [colorAccent3, colorAccent4]
];

var cell = sheet.getRange("B5:C6");
cell.setFontColorObjects(colors);
```
@param colors A two-dimensional array of colors; `null` values reset the font color.
@return This range, for chaining.*/setFontColorObjects(colors:SpreadsheetApp.Color[][]):SpreadsheetApp.Range;
/**Sets a rectangular grid of font colors (must match dimensions of this range). The colors are in
CSS notation (such as `'#ffffff'` or `'white'`).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var colors = [
  ["red", "white", "blue"],
  ["#FF0000", "#FFFFFF", "#0000FF"] // These are the hex equivalents
];

var cell = sheet.getRange("B5:D6");
cell.setFontColors(colors);
```
@param colors A two-dimensional array of colors in CSS notation (such as `'#ffffff'` or
    `'white'`); `null` values reset the color.
@return This range, for chaining.*/setFontColors(colors:Object[][]):SpreadsheetApp.Range;
/**Sets a rectangular grid of font families (must match dimensions of this range). Examples of
font families are "Arial" or "Helvetica".

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var fonts = [
  ["Arial", "Helvetica", "Verdana"],
  ["Courier New", "Arial", "Helvetica]
];

var cell = sheet.getRange("B2:D3");
cell.setFontFamilies(fonts);
```
@param fontFamilies A two-dimensional array of font families; `null` values reset the
    font family.
@return This range, for chaining.*/setFontFamilies(fontFamilies:Object[][]):SpreadsheetApp.Range;
/**Sets the font family, such as "Arial" or "Helvetica".

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var cell = sheet.getRange("B2");
cell.setFontFamily("Helvetica");
```
@param fontFamily The font family to set; a `null` value resets the font family.
@return This range, for chaining.*/setFontFamily(fontFamily:string):SpreadsheetApp.Range;
/**Sets the font line style of the given range (`'underline'`, `'line-through'`, or
`'none'`).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var cell = sheet.getRange("B2");
cell.setFontLine("line-through");
```
@param fontLine The font line style, either `'underline'`, `'line-through'`, or
    `'none'`; a `null` value resets the font line style.
@return This range, for chaining.*/setFontLine(fontLine:string):SpreadsheetApp.Range;
/**Sets a rectangular grid of line styles (must match dimensions of this range).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// The size of the two-dimensional array must match the size of the range.
var fontLines = [
  ["underline", "line-through", "none"]
];

var range = sheet.getRange("B2:D2");
range.setFontLines(fontLines);
```
@param fontLines A two-dimensional array of font line styles (`'underline'`, `'line-through'`, or `'none'`); `null` values reset the font line style.
@return This range, for chaining.*/setFontLines(fontLines:Object[][]):SpreadsheetApp.Range;
/**Sets the font size, with the size being the point size to use.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var cell = sheet.getRange("B2");
cell.setFontSize(20);
```
@param size A font size in point size.
@return This range, for chaining.*/setFontSize(size:Integer):SpreadsheetApp.Range;
/**Sets a rectangular grid of font sizes (must match dimensions of this range). The sizes are in
points.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// The size of the two-dimensional array must match the size of the range.
var fontSizes = [
  [16, 20, 24]
];

var range = sheet.getRange("B2:D2");
range.setFontSizes(fontSizes);
```
@param sizes A two-dimensional array of sizes.
@return This range, for chaining.*/setFontSizes(sizes:Object[][]):SpreadsheetApp.Range;
/**Set the font style for the given range (`'italic'` or `'normal'`).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var cell = sheet.getRange("B2");
cell.setFontStyle("italic");
```
@param fontStyle The font style, either `'italic'` or `'normal'`; a `null`
    value resets the font style.
@return This range, for chaining.*/setFontStyle(fontStyle:string):SpreadsheetApp.Range;
/**Sets a rectangular grid of font styles (must match dimensions of this range).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// The size of the two-dimensional array must match the size of the range.
var fontStyles = [
  ["italic", "normal"]
];

var range = sheet.getRange("B2:C2");
range.setFontStyles(fontStyles);
```
@param fontStyles A two-dimensional array of font styles, either `'italic'` or `'normal'`; `null` values reset the font style.
@return This range, for chaining.*/setFontStyles(fontStyles:Object[][]):SpreadsheetApp.Range;
/**Set the font weight for the given range (normal/bold).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var cell = sheet.getRange("B2");
cell.setFontWeight("bold");
```
@param fontWeight The font weight, either `'bold'` or `'normal'`; a `null`
    value resets the font weight.
@return This range, for chaining.*/setFontWeight(fontWeight:string):SpreadsheetApp.Range;
/**Sets a rectangular grid of font weights (must match dimensions of this range). An example of a
font weight is "bold".

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// The size of the two-dimensional array must match the size of the range.
var fontStyles = [
  [ "bold", "bold", "normal" ]
];

var range = sheet.getRange("B2:D2");
range.setFontWeights(fontStyles);
```
@param fontWeights A two-dimensional array of font weights, either `'bold'` or `'normal'`; `null` values reset the font weight.
@return This range, for chaining.*/setFontWeights(fontWeights:Object[][]):SpreadsheetApp.Range;
/**Updates the formula for this range. The given formula must be in A1 notation.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var cell = sheet.getRange("B5");
cell.setFormula("=SUM(B3:B4)");
```
@param formula A string representing the formula to set for the cell.
@return This range, for chaining.*/setFormula(formula:string):SpreadsheetApp.Range;
/**Updates the formula for this range. The given formula must be in R1C1 notation.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var cell = sheet.getRange("B5");
// This sets the formula to be the sum of the 3 rows above B5
cell.setFormulaR1C1("=SUM(R[-3]C[0]:R[-1]C[0])");
```
@param formula A string formula.
@return This range, for chaining.*/setFormulaR1C1(formula:string):SpreadsheetApp.Range;
/**Sets a rectangular grid of formulas (must match dimensions of this range). The given formulas
must be in A1 notation. This method takes a two-dimensional array of formulas, indexed by row,
then by column. The array dimensions must correspond to the range dimensions.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This sets the formulas to be a row of sums, followed by a row of averages right below.
// The size of the two-dimensional array must match the size of the range.
var formulas = [
  ["=SUM(B2:B4)", "=SUM(C2:C4)", "=SUM(D2:D4)"],
  ["=AVERAGE(B2:B4)", "=AVERAGE(C2:C4)", "=AVERAGE(D2:D4)"]
];

var cell = sheet.getRange("B5:D6");
cell.setFormulas(formulas);
```
@param formulas A two-dimensional string array of formulas.
@return This range, for chaining.*/setFormulas(formulas:string[][]):SpreadsheetApp.Range;
/**Sets a rectangular grid of formulas (must match dimensions of this range). The given formulas
must be in R1C1 notation.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This creates formulas for a row of sums, followed by a row of averages.
var sumOfRowsAbove = "=SUM(R[-3]C[0]:R[-1]C[0])";
var averageOfRowsAbove = "=AVERAGE(R[-4]C[0]:R[-2]C[0])";

// The size of the two-dimensional array must match the size of the range.
var formulas = [
  [sumOfRowsAbove, sumOfRowsAbove, sumOfRowsAbove],
  [averageOfRowsAbove, averageOfRowsAbove, averageOfRowsAbove]
];

var cell = sheet.getRange("B5:D6");
// This sets the formula to be the sum of the 3 rows above B5.
cell.setFormulasR1C1(formulas);
```
@param formulas A two-dimensional array of formulas in R1C1 format.
@return This range, for chaining.*/setFormulasR1C1(formulas:string[][]):SpreadsheetApp.Range;
/**Set the horizontal (left to right) alignment for the given range (left/center/right).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var cell = sheet.getRange("B2");
cell.setHorizontalAlignment("center");
```
@param alignment The alignment, either `'left'`, `'center'` or `'normal'`; a
    `null` value resets the alignment.
@return This range, for chaining.*/setHorizontalAlignment(alignment:string):SpreadsheetApp.Range;
/**Sets a rectangular grid of horizontal alignments. see [`setHorizontalAlignment(alignment)`](https://developers.google.com/apps-script/reference/spreadsheet/range.html#setHorizontalAlignment(String))

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// The size of the two-dimensional array must match the size of the range.
var horizontalAlignments = [
  [ "left", "right", "center" ]
];

var range = sheet.getRange("B2:D2");
range.setHorizontalAlignments(horizontalAlignments);
```
@param alignments A two-dimensional array of alignments, either `'left'`, `'center'` or `'normal'`; a `null` value resets the alignment.
@return This range, for chaining.*/setHorizontalAlignments(alignments:Object[][]):SpreadsheetApp.Range;
/**Sets the note to the given value.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var cell = sheet.getRange("B2");
cell.setNote("This is a note");
```
@param note The note value to set for the range; a `null` value removes the note.
@return This range, for chaining.*/setNote(note:string):SpreadsheetApp.Range;
/**Sets a rectangular grid of notes (must match dimensions of this range).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// The size of the two-dimensional array must match the size of the range.
var notes = [
  ["it goes", "like this", "the fourth, the fifth"],
  ["the minor fall", "and the", "major lift"]
];

var cell = sheet.getRange("B2:D3");
cell.setNotes(notes)
```
@param notes A two-dimensional array of notes; `null` values remove the note.
@return This range, for chaining.*/setNotes(notes:Object[][]):SpreadsheetApp.Range;
/**Sets the number or date format to the given formatting string. The accepted format patterns are
described in the [Sheets API documentation](/sheets/api/guides/formats).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var cell = sheet.getRange("B2");
// Always show 3 decimal points
cell.setNumberFormat("0.000");
```
@param numberFormat A number format string.
@return This range, for chaining.*/setNumberFormat(numberFormat:string):SpreadsheetApp.Range;
/**Sets a rectangular grid of number or date formats (must match dimensions of this range). The
values are format pattern strings as described in the [
Sheets API documentation](/sheets/api/guides/formats).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// The size of the two-dimensional array must match the size of the range.
var formats = [
  [ "0.000", "0,000,000", "$0.00" ]
];

var range = sheet.getRange("B2:D2");
range.setNumberFormats(formats);
```
@param numberFormats A two-dimensional array of number formats.
@return This range, for chaining.*/setNumberFormats(numberFormats:Object[][]):SpreadsheetApp.Range;
/**Sets the Rich Text value for the cells in the range.

```
// Sets all cells in range B2:D4 to have the text "Hello world", with "Hello" bolded.
var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("B2:D4");
var bold = SpreadsheetApp.newTextStyle()
    .setBold(true)
    .build();
var richText = SpreadsheetApp.newRichTextValue()
    .setText("Hello world")
    .setTextStyle(0, 5, bold)
    .build();
range.setRichTextValue(richText);
```
@param value The desired Rich Text value.
@return This range, for chaining.*/setRichTextValue(value:SpreadsheetApp.RichTextValue):SpreadsheetApp.Range;
/**Sets a rectangular grid of Rich Text values.

```
// Sets the cells in range A1:A2 to have Rich Text values.
var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:A2");
var bold = SpreadsheetApp.newTextStyle()
    .setBold(true)
    .build();
var italic = SpreadsheetApp.newTextStyle()
    .setItalic(true)
    .build();
var richTextA1 = SpreadsheetApp.newRichTextValue()
    .setText("This cell is bold")
    .setTextStyle(bold)
    .build();
var richTextA2 = SpreadsheetApp.newRichTextValue()
    .setText("bold words, italic words")
    .setTextStyle(0, 11, bold)
    .setTextStyle(12, 24, italic)
    .build();
range.setRichTextValues([[richTextA1], [richTextA2]]);
```
@param values The desired Rich Text values.
@return This range, for chaining.*/setRichTextValues(values:SpreadsheetApp.RichTextValue[][]):SpreadsheetApp.Range;
/**Sets whether or not the range should show hyperlinks.

```
// Opens the spreadsheet file by its URL. If you created your script from within a
// Google Sheets file, you can useSpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets Sheet1 by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets cell A30 and sets its hyperlink value.
const range = sheet.getRange('A30');
range.setValue('https://www.example.com');

// Sets cell A30 to show hyperlinks.
range.setShowHyperlink(true);
```
@param showHyperlink Whether or not to show the hyperlink.
@return This range, for chaining.*/setShowHyperlink(showHyperlink:boolean):SpreadsheetApp.Range;
/**Sets the text direction for the cells in the range. If a specified direction is `null`,
the direction is inferred and then set.

```
// Sets right-to-left text direction for the range.
var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("B5:C6");
range.setTextDirection(SpreadsheetApp.TextDirection.RIGHT_TO_LEFT);
```
@param direction The desired text direction; if `null` the direction is inferred before
    setting.
@return This range, for chaining.*/setTextDirection(direction:SpreadsheetApp.TextDirection):SpreadsheetApp.Range;
/**Sets a rectangular grid of text directions. If a specified direction is `null`, the
direction is inferred and then set.

```
// Copies all of the text directions from range A1:B2 over to range C5:D6.
var sheet = SpreadsheetApp.getActiveSheet();
var range1 = sheet.getRange("A1:B2");
var range2 = sheet.getRange("C5:D6");

range2.setTextRotations(range1.getTextDirections());
```
@param directions The desired text directions; if a specified direction is `null` it is
    inferred before setting.
@return This range, for chaining.*/setTextDirections(directions:SpreadsheetApp.TextDirection[][]):SpreadsheetApp.Range;
/**Sets the text rotation settings for the cells in the range. The input corresponds to the angle
between the standard text orientation and the desired orientation. An input of zero indicates
that the text is set to the standard orientation.

For left to right text direction, positive angles are in the counterclockwise direction,
whereas for right to left they are in the clockwise direction.

```
// Sets all cell's in range B2:D4 to have text rotated up 45 degrees.
var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("B2:D4");

range.setTextRotation(45);
```
@param degrees The desired angle between the standard orientation and the desired orientation.
    For left to right text, positive angles are in the counterclockwise direction.
@return This range, for chaining.*/setTextRotation(degrees:Integer):SpreadsheetApp.Range;
/**Sets the text rotation settings for the cells in the range.

```
// Sets all cell's in range B2:D4 to have the same text rotation settings as cell A1.
var sheet = SpreadsheetApp.getActiveSheet();

var rotation = sheet.getRange("A1").getTextRotation();

sheet.getRange("B2:D4").setTextRotation(rotation);

```
@param rotation The desired text rotation settings.
@return This range, for chaining.*/setTextRotation(rotation:SpreadsheetApp.TextRotation):SpreadsheetApp.Range;
/**Sets a rectangular grid of text rotations.

```
// Copies all of the text rotations from range A1:B2 over to range C5:D6.
var sheet = SpreadsheetApp.getActiveSheet();
var range1 = sheet.getRange("A1:B2");
var range2 = sheet.getRange("C5:D6");

range2.setTextRotations(range1.getTextRotations());
```
@param rotations The desired text rotation settings.
@return This range, for chaining.*/setTextRotations(rotations:SpreadsheetApp.TextRotation[][]):SpreadsheetApp.Range;
/**Sets the text style for the cells in the range.

```
// Sets the cells in range C5:D6 to have underlined size 15 font.
var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("C5:D6");
var style = SpreadsheetApp.newTextStyle()
    .setFontSize(15)
    .setUnderline(true)
    .build();
range.setTextStyle(style);
```
@param style The desired text style.
@return This range, for chaining.*/setTextStyle(style:SpreadsheetApp.TextStyle):SpreadsheetApp.Range;
/**Sets a rectangular grid of text styles.

```
// Sets text styles for cells in range A1:B2
var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B2");
var bold = SpreadsheetApp.newTextStyle()
    .setBold(true)
    .build();
var otherStyle = SpreadsheetApp.newTextStyle()
    .setBold(true)
    .setUnderline(true)
    .setItalic(true)
    .setForegroundColor("#335522")
    .setFontSize(44)
    .build();
range.setTextStyles([[bold, otherStyle], [otherStyle, bold]]);
```
@param styles The desired text styles.
@return This range, for chaining.*/setTextStyles(styles:SpreadsheetApp.TextStyle[][]):SpreadsheetApp.Range;
/**Sets the value of the range. The value can be numeric, string, boolean or date. If it begins
with `'='` it is interpreted as a formula.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var cell = sheet.getRange("B2");
cell.setValue(100);
```
@param value The value for the range.
@return This range, for chaining.*/setValue(value:Object):SpreadsheetApp.Range;
/**Sets a rectangular grid of values (must match dimensions of this range). If a value begins with
`=`, it's interpreted as a formula.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// The size of the two-dimensional array must match the size of the range.
var values = [
  [ "2.000", "1,000,000", "$2.99" ]
];

var range = sheet.getRange("B2:D2");
range.setValues(values);
```
@param values A two-dimensional array of values.
@return This range, for chaining.*/setValues(values:Object[][]):SpreadsheetApp.Range;
/**Set the vertical (top to bottom) alignment for the given range (top/middle/bottom).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var cell = sheet.getRange("B2");
cell.setVerticalAlignment("middle");
```
@param alignment The alignment, either `'top'`, `'middle'` or `'bottom'`; a
    `null` value resets the alignment.
@return This range, for chaining.*/setVerticalAlignment(alignment:string):SpreadsheetApp.Range;
/**Sets a rectangular grid of vertical alignments (must match dimensions of this range).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// The size of the two-dimensional array must match the size of the range.
var alignments = [
  [ "top", "middle", "bottom" ]
];

var range = sheet.getRange("B2:D2");
range.setVerticalAlignments(alignments);
```
@param alignments A two-dimensional array of alignments, either `'top'`, `'middle'`
    or `'bottom'`; a `null` value resets the alignment.
@return This range, for chaining.*/setVerticalAlignments(alignments:Object[][]):SpreadsheetApp.Range;
/**Sets whether or not to stack the text for the cells in the range. If the text is stacked
vertically, the degree text rotation setting is ignored.

```
// Sets all cell's in range B2:D4 to have vertically stacked text.
var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("B2:D4");

range.setVerticalText(true);
```
@param isVertical Whether or not to stack the text.
@return This range, for chaining.*/setVerticalText(isVertical:boolean):SpreadsheetApp.Range;
/**Set the cell wrap of the given range.

Cells with wrap enabled (the default) resize to display their full content. Cells with wrap
disabled display as much as possible in the cell without resizing or running to multiple lines.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var cell = sheet.getRange("B2");
cell.setWrap(true);
```
@param isWrapEnabled Whether to wrap text or not.
@return This range, for chaining.*/setWrap(isWrapEnabled:boolean):SpreadsheetApp.Range;
/**Sets a rectangular grid of wrap strategies.

```
// Copies all of the wrap strategies from range A1:B2 over to range C5:D6.
var sheet = SpreadsheetApp.getActiveSheet();
var range1 = sheet.getRange("A1:B2");
var range2 = sheet.getRange("C5:D6");

range2.setWrapStrategies(range1.getWrapStrategies());
```
@param strategies The desired wrapping strategies.
@return This range, for chaining.*/setWrapStrategies(strategies:SpreadsheetApp.WrapStrategy[][]):SpreadsheetApp.Range;
/**Sets the text wrapping strategy for the cells in the range.

```
// Sets all cells in range B2:D4 to use the clip wrap strategy.
var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("B2:D4");

range.setWrapStrategy(SpreadsheetApp.WrapStrategy.CLIP);
```
@param strategy The desired wrapping strategy.
@return This range, for chaining.*/setWrapStrategy(strategy:SpreadsheetApp.WrapStrategy):SpreadsheetApp.Range;
/**Sets a rectangular grid of word wrap policies (must match dimensions of this range). Cells with
wrap enabled (the default) resize to display their full content. Cells with wrap disabled
display as much as possible in the cell without resizing or running to multiple lines.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// The size of the two-dimensional array must match the size of the range.
var wraps = [
  [ true, true, false ]
];

var range = sheet.getRange("B2:D2");
range.setWraps(wraps);
```
@param isWrapEnabled A two-dimensional array of wrap variables that determine whether to wrap
    text in a cell or not.
@return This range, for chaining.*/setWraps(isWrapEnabled:Object[][]):SpreadsheetApp.Range;
/**Changes the column grouping depth of the range by the specified amount.

This has the effect of creating, modifying, or deleting groups that intersect with the
range. For positive deltas, groups are created and/or modified; for negative deltas, groups are
destroyed and/or modified.

This has no effect when decreasing the group depth below zero or above eight.

If the [`column group control position`](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getColumnGroupControlPosition()) is
[`BEFORE`](https://developers.google.com/apps-script/reference/spreadsheet/group-control-toggle-position.html#BEFORE), this throws an error when attempting to shift
the depth of the first row.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
var range = sheet.getActiveRange();

// The column grouping depth is increased by 1.
range.shiftColumnGroupDepth(1);

// The column grouping depth is decreased by 1.
range.shiftColumnGroupDepth(-1);
```
@param delta The amount by which to change the column group depth of this range.
@return This range, for chaining.*/shiftColumnGroupDepth(delta:Integer):SpreadsheetApp.Range;
/**Changes the row grouping depth of the range by the specified amount.

This has the effect of creating, modifying, or deleting groups that intersect with the
range. For positive deltas, groups are created and/or modified; for negative deltas, groups are
destroyed and/or modified.

This has no effect when decreasing the group depth below zero or above eight.

If the [`row group control position`](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html#getRowGroupControlPosition()) is [`BEFORE`](https://developers.google.com/apps-script/reference/spreadsheet/group-control-toggle-position.html#BEFORE), this throws an error when attempting to shift the
depth of the first row.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
var range = sheet.getActiveRange();

// The row grouping depth is increased by 1.
range.shiftRowGroupDepth(1);

// The row grouping depth is decreased by 1.
range.shiftRowGroupDepth(-1);
```
@param delta The amount by which to change the row group depth of this range.
@return This range, for chaining.*/shiftRowGroupDepth(delta:Integer):SpreadsheetApp.Range;
/**Sorts the cells in the given range, by column and order specified.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var range = sheet.getRange("A1:C7");

// Sorts by the values in the first column (A)
range.sort(1);

// Sorts by the values in the second column (B)
range.sort(2);

// Sorts descending by column B
range.sort({column: 2, ascending: false});

// Sorts descending by column B, then ascending by column A
// Note the use of an array
range.sort([{column: 2, ascending: false}, {column: 1, ascending: true}]);

// For rows that are sorted in ascending order, the "ascending" parameter is
// optional, and just an integer with the column can be used instead. Note that
// in general, keeping the sort specification consistent results in more readable
// code. You can express the earlier sort as:
range.sort([{column: 2, ascending: false}, 1]);

// Alternatively, if you want all columns to be in ascending order, you can use
// the following (this makes column 2 ascending)
range.sort([2, 1]);
// ... which is equivalent to
range.sort([{column: 2, ascending: true}, {column: 1, ascending: true}]);
```
@param sortSpecObj The columns to sort by.
@return This range, for chaining.*/sort(sortSpecObj:Object):SpreadsheetApp.Range;
/**Splits a column of text into multiple columns based on an auto-detected delimiter.

```
// A1:A3 has the following values:
//           A                  B                 C
// 1 |one,one,one      |                 |                 |
// 2 |two,two,two      |                 |                 |
// 3 |three,three,three|                 |                 |

var range = SpreadsheetApp.getActiveSheet().getRange("A1:A3");
range.splitTextToColumns();

// Result after spliting the text to columns:
//           A                  B                 C
// 1 |one              |one              |one              |
// 2 |two              |two              |two              |
// 3 |three            |three            |three            |
```*/splitTextToColumns():void;
/**Splits a column of text into multiple columns based on the specified delimiter.

```
// A1:A3 has the following values:
//           A                  B                 C
// 1 |one;one;one      |                 |                 |
// 2 |two;two;two      |                 |                 |
// 3 |three;three;three|                 |                 |

var range = SpreadsheetApp.getActiveSheet().getRange("A1:A3");
range.splitTextToColumns(SpreadsheetApp.TextToColumnsDelimiter.SEMICOLON);

// Result after spliting the text to columns:
//           A                  B                 C
// 1 |one              |one              |one              |
// 2 |two              |two              |two              |
// 3 |three            |three            |three            |
```
@param delimiter The preset delimiter to split on.*/splitTextToColumns(delimiter:SpreadsheetApp.TextToColumnsDelimiter):void;
/**Splits a column of text into multiple columns using the specified string as a custom delimiter.

```
// A1:A3 has the following values:
//           A                  B                 C
// 1 |one#one#one      |                 |                 |
// 2 |two#two#two      |                 |                 |
// 3 |three#three#three|                 |                 |

var range = SpreadsheetApp.getActiveSheet().getRange("A1:A3");
range.splitTextToColumns('#');

// Result after spliting the text to columns:
//           A                  B                 C
// 1 |one              |one              |one              |
// 2 |two              |two              |two              |
// 3 |three            |three            |three            |
```
@param delimiter The custom delimiter to split on.*/splitTextToColumns(delimiter:string):void;
/**Trims the whitespace (such as spaces, tabs, or new lines) in every cell in this range. Removes
all whitespace from the start and end of each cell's text, and reduces any subsequence of
remaining whitespace characters to a single space.

__Note__: If the resulting trimmed text starts with a '+' or '='
character, the text remains as a string value and isn't interpreted as a formula.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
var range = sheet.getRange('A1:A4');
range.activate();
range.setValues(
    [' preceding space', 'following space ', 'two  middle  spaces', '   =SUM(1,2)'])

range.trimWhitespace();

var values = range.getValues();
// Values are ['preceding space', 'following space', 'two middle spaces', '=SUM(1,2)']
```
@return This range, for chaining.*/trimWhitespace():SpreadsheetApp.Range;
/**Changes the state of the checkboxes in the range to “unchecked”. Ignores the cells in the range
which currently do not contain either the checked or unchecked value configured.

```
// Changes the state of cells which currently contain either the checked or unchecked value
// configured in the range A1:B10 to 'unchecked'.
var range = SpreadsheetApp.getActive().getRange('A1:B10');
range.uncheck();
```
@return This range, for chaining.*/uncheck():SpreadsheetApp.Range;
/**Returns top, left, bottom, and right border for the first cell in the range.
@return The borders for the first cell in the range.*/getBorder():SpreadsheetApp.Borders;
/**Returns top, left, bottom, and right borders for all the enclosed cells.
@return The borders for the enclosed cells.*/getBorders():SpreadsheetApp.Borders[][];}interface ProtectionType{}interface _ProtectionType{
/**Protection for a range.*/RANGE:ProtectionType;
/**Protection for a sheet.*/SHEET:ProtectionType;}interface Protection{
/**Adds the given user to the list of editors for the protected sheet or range. This method does
not automatically give the user permission to edit the spreadsheet itself; to do that in
addition, call [`Spreadsheet.addEditor(emailAddress)`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#addEditor(String)).

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Adds an editor to the spreadsheet using an email address.
// TODO(developer): Replace the email address with a valid email.
ss.addEditor('cloudysanfrancisco@gmail.com');

// Gets a sheet by its name and protects it.
const sheet = ss.getSheetByName('Sheet1');
const sampleProtectedSheet = sheet.protect();

// Adds an editor of the protected sheet using an email address.
// TODO(developer): Replace the email address with a valid email.
sampleProtectedSheet.addEditor('cloudysanfrancisco@gmail.com');

// Gets the editors of the protected sheet.
const editors = sampleProtectedSheet.getEditors();

// Logs the editors' email addresses to the console.
for (const editor of editors) {
  console.log(editor.getEmail());
}
```
@param emailAddress The email address of the user to add.
@return The object representing the protection settings, for chaining.*/addEditor(emailAddress:string):SpreadsheetApp.Protection;
/**Adds the given user to the list of editors for the protected sheet or range. This method does
not automatically give the user permission to edit the spreadsheet itself; to do that in
addition, call [`Spreadsheet.addEditor(user)`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#addEditor(User)).

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Protects the sheet.
const sampleProtectedSheet = sheet.protect();

// Adds the active user as an editor of the protected sheet.
sampleProtectedSheet.addEditor(Session.getActiveUser());

// Gets the editors of the protected sheet.
const editors = sampleProtectedSheet.getEditors();

// Logs the editors' email addresses to the console.
for (const editor of editors) {
  console.log(editor.getEmail());
}
```
@param user A representation of the user to add.
@return The object representing the protection settings, for chaining.*/addEditor(user:User):SpreadsheetApp.Protection;
/**Adds the given array of users to the list of editors for the protected sheet or range. This
method does not automatically give the users permission to edit the spreadsheet itself; to do
that in addition, call [`Spreadsheet.addEditors(emailAddresses)`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html#addEditors(String)).

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Creates variables for the email addresses to add as editors.
// TODO(developer): Replace the email addresses with valid ones.
const TEST_EMAIL_1 = 'cloudysanfrancisco@gmail.com';
const TEST_EMAIL_2 = 'baklavainthebalkans@gmail.com';

// Protects the sheet.
const sampleProtectedSheet = sheet.protect();

// Adds editors to the protected sheet using the email address variables.
sampleProtectedSheet.addEditors([TEST_EMAIL_1, TEST_EMAIL_2]);

// Gets the editors of the protected sheet.
const editors = sampleProtectedSheet.getEditors();

// Logs the editors' email addresses to the console.
for (const editor of editors) {
  console.log(editor.getEmail());
}
```
@param emailAddresses An array of email addresses of the users to add.
@return The object representing the protection settings, for chaining.*/addEditors(emailAddresses:string[]):SpreadsheetApp.Protection;
/**Adds the specified target audience as an editor of the protected range.
@param audienceId The ID of the target audience to add.
@return The object representing the protection settings, for chaining.*/addTargetAudience(audienceId:string):SpreadsheetApp.Protection;
/**Determines whether all users in the domain that owns the spreadsheet have permission to edit
the protected range or sheet. Throws an exception if the user does not have permission to edit
the protected range or sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Protects the sheet.
const sampleProtectedSheet = sheet.protect();

// Logs whether domain users have permission to edit the protected sheet to the console.
console.log(sampleProtectedSheet.canDomainEdit());
```
@return `true` if all users in the domain that owns the spreadsheet have permission to
    edit the protected range or sheet; `false` if they don't.*/canDomainEdit():boolean;
/**Determines whether the user has permission to edit the protected range or sheet. The
spreadsheet owner is always able to edit protected ranges and sheets.

```
// Remove all range protections in the spreadsheet that the user has permission to edit.
var ss = SpreadsheetApp.getActive();
var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);
for (var i = 0; i < protections.length; i++) {
  var protection = protections[i];
  if (protection.canEdit()) {
    protection.remove();
  }
}
```
@return `true` if the user has permission to edit the protected range or sheet; `false` if not*/canEdit():boolean;
/**Gets the description of the protected range or sheet. If no description is set, this method
returns an empty string.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Protects the sheet and sets the description.
const sampleProtectedSheet = sheet.protect().setDescription('Sample sheet is protected');

// Gets the description of the protected sheet and logs it to the console.
const sampleProtectedSheetDescription = sampleProtectedSheet.getDescription();
console.log(sampleProtectedSheetDescription);
```
@return The description of the protected range or sheet, or an empty string if no description
    is set.*/getDescription():string;
/**Gets the list of editors for the protected range or sheet. Throws an exception if the user does
not have permission to edit the protected range or sheet.

```
// Protect the active sheet, then remove all other users from the list of editors.
var sheet = SpreadsheetApp.getActiveSheet();
var protection = sheet.protect().setDescription('Sample protected sheet');

// Ensure the current user is an editor before removing others. Otherwise, if the user's edit
// permission comes from a group, the script throws an exception upon removing the group.
var me = Session.getEffectiveUser();
protection.addEditor(me);
protection.removeEditors(protection.getEditors());
if (protection.canDomainEdit()) {
  protection.setDomainEdit(false);
}
```
@return an array of users with permission to edit the protected range or sheet*/getEditors():User[];
/**Gets the type of the protected area, either [`RANGE`](https://developers.google.com/apps-script/reference/spreadsheet/protection-type.html#RANGE) or [`SHEET`](https://developers.google.com/apps-script/reference/spreadsheet/protection-type.html#SHEET).

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Protects the sheet.
const sampleProtectedSheet = sheet.protect();

// Gets the type of the protected area.
const protectionType = sampleProtectedSheet.getProtectionType();

// Logs 'SHEET'to the console since the type of the protected area is a sheet.
console.log(protectionType.toString());

```
@return The type of protected area, either [`RANGE`](https://developers.google.com/apps-script/reference/spreadsheet/protection-type.html#RANGE) or [`SHEET`](https://developers.google.com/apps-script/reference/spreadsheet/protection-type.html#SHEET).*/getProtectionType():SpreadsheetApp.ProtectionType;
/**Gets the range that is being protected. If the protection applies to the sheet instead of a
range, this method returns a range that spans the entire sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Gets the range 'A1:B10' of Sheet1.
const range = sheet.getRange('A1:B10');

// Makes cells A1:B10 a protected range.
const sampleProtectedRange = range.protect();

// Gets the protected ranges on the sheet.
const protections = sheet.getProtections(SpreadsheetApp.ProtectionType.RANGE);

// Logs the A1 notation of the first protected range on the sheet.
console.log(protections[0].getRange().getA1Notation());
```
@return The range that is being protected.*/getRange():SpreadsheetApp.Range;
/**Gets the name of the protected range if it is associated with a named range. Returns `null` if the protection is not associated with a named range. Note that scripts must explicitly
call [`setRangeName(rangeName)`](https://developers.google.com/apps-script/reference/spreadsheet/protection.html#setRangeName(String)) to associate a protected range with a named range; calling
[`Range.protect()`](https://developers.google.com/apps-script/reference/spreadsheet/range.html#protect()) to create a protection from a `Range` that happens to be a
named range, without calling `setRangeName(rangeName)`, is not sufficient to associate
them. However, creating a protected range from a named range in the Google Sheets UI associates
them automatically.

```
// Protect a named range in a spreadsheet and log the name of the protected range.
var ss = SpreadsheetApp.getActive();
var range = ss.getRange('A1:B10');
var protection = range.protect();
ss.setNamedRange('Test', range);       // Create a named range.
protection.setRangeName('Test');       // Associate the protection with the named range.
Logger.log(protection.getRangeName()); // Verify the name of the protected range.
```
@return the name of the protected named range, or `null` if the protected range is not
    associated with a named range*/getRangeName():string;
/**Returns the IDs of the target audiences that can edit the protected range.
@return An array of the IDs of target audiences.*/getTargetAudiences():TargetAudience[];
/**Gets an array of unprotected ranges within a protected sheet. If the `Protection` object
corresponds to a protected range instead of a protected sheet, this method returns an empty
array. To change the unprotected ranges, use [`setUnprotectedRanges(ranges)`](https://developers.google.com/apps-script/reference/spreadsheet/protection.html#setUnprotectedRanges(Range)) to set a
new array of ranges; to re-protect the entire sheet, set an empty array.

```
// Unprotect cells E2:F5 in addition to any other unprotected ranges in the protected sheet.
var sheet = SpreadsheetApp.getActiveSheet();
var protection = sheet.protect();
var unprotected = protection.getUnprotectedRanges();
unprotected.push(sheet.getRange('E2:F5'));
protection.setUnprotectedRanges(unprotected);
```
@return an array of unprotected ranges within a protected sheet*/getUnprotectedRanges():SpreadsheetApp.Range[];
/**Determines if the protected area is using "warning based" protection. Warning-based protection
means that every user can edit data in the area, except editing prompts a warning asking the
user to confirm the edit. By default, protected ranges or sheets are not warning-based. To
change to the warning state, use [`setWarningOnly(warningOnly)`](https://developers.google.com/apps-script/reference/spreadsheet/protection.html#setWarningOnly(Boolean)).

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit')

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Protects the sheet.
const sampleProtectedSheet = sheet.protect();

// Sets the warning status for the protected sheet as true.
sampleProtectedSheet.setWarningOnly(true);

const protectedSheetWarningStatus = sampleProtectedSheet.isWarningOnly();

// Logs the warning status of the protected sheet to the console.
console.log(protectedSheetWarningStatus);
```
@return `true` if the protected range or sheet is only using warning-based protection.*/isWarningOnly():boolean;
/**Unprotects the range or sheet.

```
// Remove all range protections in the spreadsheet that the user has permission to edit.
var ss = SpreadsheetApp.getActive();
var protections = ss.getProtections(SpreadsheetApp.ProtectionType.RANGE);
for (var i = 0; i < protections.length; i++) {
  var protection = protections[i];
  if (protection.canEdit()) {
    protection.remove();
  }
}
```

```
// Remove sheet protection from the active sheet, if the user has permission to edit it.
var sheet = SpreadsheetApp.getActiveSheet();
var protection = sheet.getProtections(SpreadsheetApp.ProtectionType.SHEET)[0];
if (protection && protection.canEdit()) {
  protection.remove();
}
```*/remove():void;
/**Removes the given user from the list of editors for the protected sheet or range. Note that if
the user is a member of a Google Group that has edit permission, or if all users in the domain
have edit permission, the user are still be able to edit the protected area. Neither the owner
of the spreadsheet nor the current user can be removed.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Creates a variable for an email address.
// TODO(developer): Replace the email address with a valid one.
const TEST_EMAIL = 'baklavainthebalkans@gmail.com';

// Protects the sheet.
const sampleProtectedSheet = sheet.protect();

// Adds an editor to the protected sheet using the email address variable.
sampleProtectedSheet.addEditor(TEST_EMAIL);

// Removes the editor from the protected sheet using the email address variable.
sampleProtectedSheet.removeEditor(TEST_EMAIL);

// Gets the editors of the protected sheet.
const editors = sampleProtectedSheet.getEditors();

// Logs the editors' email addresses to the console.
for (const editor of editors) {
  console.log(editor.getEmail());
}
```
@param emailAddress The email address of the user to remove.
@return The object representing the protection settings, for chaining.*/removeEditor(emailAddress:string):SpreadsheetApp.Protection;
/**Removes the given user from the list of editors for the protected sheet or range. Note that if
the user is a member of a Google Group that has edit permission, or if all users in the domain
have edit permission, the user is still be able to edit the protected area as well. Neither the
owner of the spreadsheet nor the current user can be removed.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets a sheet by its name.
const sheet = ss.getSheetByName('Sheet1');

// Protects the sheet.
const sampleProtectedSheet = sheet.protect();

// Removes the active user from the editors of the protected sheet.
sampleProtectedSheet.removeEditor(Session.getActiveUser());

// Gets the editors of the protected sheet.
const editors = sampleProtectedSheet.getEditors();

// Logs the editors' email addresses to the console.
for (const editor of editors) {
  console.log(editor.getEmail());
}
```
@param user A representation of the user to remove.
@return the object representing the protection settings, for chaining*/removeEditor(user:User):SpreadsheetApp.Protection;
/**Removes the given array of users from the list of editors for the protected sheet or range.
Note that if any of the users are members of a Google Group that has edit permission, or if all
users in the domain have edit permission, those users are still be able to edit the protected
area. Neither the owner of the spreadsheet nor the current user can be removed.

```
// Protect the active sheet, then remove all other users from the list of editors.
var sheet = SpreadsheetApp.getActiveSheet();
var protection = sheet.protect().setDescription('Sample protected sheet');

// Ensure the current user is an editor before removing others. Otherwise, if the user's edit
// permission comes from a group, the script throws an exception upon removing the group.
var me = Session.getEffectiveUser();
protection.addEditor(me);
protection.removeEditors(protection.getEditors());
if (protection.canDomainEdit()) {
  protection.setDomainEdit(false);
}
```
@param emailAddresses An array of email addresses of the users to remove.
@return the object representing the protection settings, for chaining*/removeEditors(emailAddresses:string[]):SpreadsheetApp.Protection;
/**Removes the specified target audience as an editor of the protected range.
@param audienceId The ID of the target audience to remove.
@return The object representing the protection settings, for chaining.*/removeTargetAudience(audienceId:string):SpreadsheetApp.Protection;
/**Sets the description of the protected range or sheet.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets the sheet 'Sheet1' by its name.
const sheet = ss.getSheetByName('Sheet1');

// Protects the sheet.
const sampleProtectedSheet = sheet.protect();

// Sets the sheet description to 'Sheet1 is protected.'
sampleProtectedSheet.setDescription('Sheet1 is protected');

// Gets the description of the protected sheet.
const sampleProtectedSheetDescription = sampleProtectedSheet.getDescription();

// Logs the description of the protected sheet to the console.
console.log(sampleProtectedSheetDescription);
```
@param description The description of the protected range or sheet.
@return The object representing the protection settings, for chaining.*/setDescription(description:string):SpreadsheetApp.Protection;
/**Sets whether all users in the domain that owns the spreadsheet have permission to edit the
protected range or sheet. Note that any users who have explicit edit permission are able to
edit the protected area regardless of this setting. Throws an exception if the spreadsheet does
not belong to a Google Workspace domain (that is, if it is owned by a gmail.com account).
@param editable `true` if all users in the domain that owns the spreadsheet should have
    permission to edit the protected range or sheet; `false` if not.
@return the object representing the protection settings, for chaining*/setDomainEdit(editable:boolean):SpreadsheetApp.Protection;
/**Associates the protected range with an existing named range. If the named range covers a
different area from the current protected range, this method moves the protection to cover the
the named range instead. The named range must be on the same sheet as the current protected
range. Note that scripts must explicitly call this method to associate a protected range with a
named range; calling [`Range.protect()`](https://developers.google.com/apps-script/reference/spreadsheet/range.html#protect()) to create a protection from a `Range`
that happens to be a named range, without calling `setRangeName(rangeName)`, is not
sufficient to associate them. However, creating a protected range from a named range in the
Google Sheets UI associates them automatically.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Protects cells A1:D10 on Sheet1.
const sheet = ss.getSheetByName('Sheet1');
const protectedRange = sheet.getRange('A1:D10').protect();

// Logs the current protected range, A1:D10.
console.log(protectedRange.getRange().getA1Notation());

// Creates a named range for cells E1:J10 called 'NewRange.'
const newRange = sheet.getRange('E1:J10');
ss.setNamedRange('NewRange', newRange);
const namedRange = ss.getNamedRanges()[0];

// Updates the protected range to the named range, 'NewRange.'
// This updates the protected range on Sheet1 from A1:D10 to E1:J10.
protectedRange.setNamedRange(namedRange);

// Logs the updated protected range to the console.
console.log(protectedRange.getRange().getA1Notation());
```
@param namedRange The existing named range to associate with the protected range.
@return The object representing the protection settings, for chaining.*/setNamedRange(namedRange:SpreadsheetApp.NamedRange):SpreadsheetApp.Protection;
/**Adjusts the range that is being protected. If the given range covers a different area from the
current protected range, this method moves the protection to cover the new range instead.

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Protects cells A1:D10 on Sheet1 of the spreadsheet.
const sheet = ss.getSheetByName('Sheet1');
const protectedRange = sheet.getRange('A1:D10').protect();

// Logs the original protected range, A1:D10, to the console.
console.log(protectedRange.getRange().getA1Notation());

// Gets the range E1:J10.
const newRange = sheet.getRange('E1:J10');

// Updates the protected range to E1:J10.
protectedRange.setRange(newRange);

// Logs the updated protected range to the console.
console.log(protectedRange.getRange().getA1Notation());
```
@param range The new range to protect from edits.
@return The object representing the protection settings, for chaining.*/setRange(range:SpreadsheetApp.Range):SpreadsheetApp.Protection;
/**Associates the protected range with an existing named range. If the named range covers a
different area from the current protected range, this method moves the protection to cover the
the named range instead. The named range must be on the same sheet as the current protected
range. Note that scripts must explicitly call this method to associate a protected range with a
named range; calling [`Range.protect()`](https://developers.google.com/apps-script/reference/spreadsheet/range.html#protect()) to create a protection from a `Range`
that happens to be a named range, without calling `setRangeName(rangeName)`, is not
sufficient to associate them. However, creating a protected range from a named range in the
Google Sheets UI associates them automatically.

```
// Protect a named range in a spreadsheet and log the name of the protected range.
var ss = SpreadsheetApp.getActive();
var range = ss.getRange('A1:B10');
var protection = range.protect();
ss.setNamedRange('Test', range);       // Create a named range.
protection.setRangeName('Test');       // Associate the protection with the named range.
Logger.log(protection.getRangeName()); // Verify the name of the protected range.
```
@param rangeName The name of the named range to be protected.
@return the object representing the protection settings, for chaining*/setRangeName(rangeName:string):SpreadsheetApp.Protection;
/**Unprotects the given array of ranges within a protected sheet. Throws an exception if the
`Protection` object corresponds to a protected range instead of a protected sheet or if
any of the ranges are not on the protected sheet. To change the unprotected ranges, set a new
array of ranges; to re-protect the entire sheet, set an empty array.

```
// Protect the active sheet except B2:C5, then remove all other users from the list of editors.
var sheet = SpreadsheetApp.getActiveSheet();
var protection = sheet.protect().setDescription('Sample protected sheet');
var unprotected = sheet.getRange('B2:C5');
protection.setUnprotectedRanges([unprotected]);

// Ensure the current user is an editor before removing others. Otherwise, if the user's edit
// permission comes from a group, the script throws an exception upon removing the group.
var me = Session.getEffectiveUser();
protection.addEditor(me);
protection.removeEditors(protection.getEditors());
if (protection.canDomainEdit()) {
  protection.setDomainEdit(false);
}
```
@param ranges The array of ranges to leave unprotected within a protected sheet.
@return the object representing the protection settings, for chaining*/setUnprotectedRanges(ranges:SpreadsheetApp.Range[]):SpreadsheetApp.Protection;
/**Sets whether or not this protected range is using "warning based" protection. Warning-based
protection means that every user can edit data in the area, except editing prompts a warning
asking the user to confirm the edit. By default, protected ranges or sheets are not
warning-based. To check warning state, use [`isWarningOnly()`](https://developers.google.com/apps-script/reference/spreadsheet/protection.html#isWarningOnly()).

```
// Opens the spreadsheet file by its URL. If you created your script from within
// a Google Sheets file, you can use SpreadsheetApp.getActiveSpreadsheet() instead.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Gets the sheet 'Sheet1' by its name.
const sheet = ss.getSheetByName('Sheet1');

// Protects the sheet and sets the protection to warning-based.
const sampleProtectedSheet = sheet.protect().setWarningOnly(true);

// Logs whether the protected sheet is warning-based to the console.
console.log(sampleProtectedSheet.isWarningOnly());
```
@return The object representing the protection settings, for chaining.*/setWarningOnly(warningOnly:boolean):SpreadsheetApp.Protection;}interface PivotValueDisplayType{}interface _PivotValueDisplayType{
/**Default. Displays pivot values as the actual value and not as a function of another value.*/DEFAULT:PivotValueDisplayType;
/**Displays pivot values as a percent of the total for that column.*/PERCENT_OF_COLUMN_TOTAL:PivotValueDisplayType;
/**Displays pivot values as a percent of the grand total.*/PERCENT_OF_GRAND_TOTAL:PivotValueDisplayType;
/**Displays pivot values as a percent of the total for that row.*/PERCENT_OF_ROW_TOTAL:PivotValueDisplayType;}interface PivotValue{
/**Returns the display type describing how this pivot value is currently displayed in the table.
@return the display type for this pivot value*/getDisplayType():SpreadsheetApp.PivotValueDisplayType;
/**Returns the formula used to calculate this value. If this value is not a calculated field this
method returns `null`.
@return the pivot value for chaining*/getFormula():string;
/**Returns the [`PivotTable`](https://developers.google.com/apps-script/reference/spreadsheet/pivot-table.html) which this value belongs to.
@return the pivot table this value belongs to*/getPivotTable():SpreadsheetApp.PivotTable;
/**Returns the number of the source data column the pivot value summarizes. This index is 1-based,
if this group summarizes source data in column "A" of the spreadsheet this method returns
`1`.
@return The source data column number.*/getSourceDataColumn():Integer;
/**Returns the data source column the pivot value summarizes. Returns `null` if the pivot
table is not a {DataSourcePivotTableApi}.
@return The source data source column the pivot value summarizes.*/getSourceDataSourceColumn():SpreadsheetApp.DataSourceColumn;
/**Returns this group’s summarization function.
@return the group's summarization function*/getSummarizedBy():SpreadsheetApp.PivotTableSummarizeFunction;
/**Remove this value from the pivot table.*/remove():void;
/**Sets the display name for this value in the pivot table.
@param name The display name to set.
@return the pivot value for chaining*/setDisplayName(name:string):SpreadsheetApp.PivotValue;
/**Sets the formula used to calculate this value. If this value is not a calculated field this
method results in an error.
@param formula The formula to use to calculate this value.
@return the pivot value for chaining*/setFormula(formula:string):SpreadsheetApp.PivotValue;
/**Displays this value in the pivot table as a function of another value.
@param displayType The way to display the values.
@return the pivot value for chaining*/showAs(displayType:SpreadsheetApp.PivotValueDisplayType):SpreadsheetApp.PivotValue;
/**Sets the summarization function.
@param summarizeFunction The function to use to summarize data in this value's source data
    column.
@return the pivot value for chaining*/summarizeBy(summarizeFunction:SpreadsheetApp.PivotTableSummarizeFunction):SpreadsheetApp.PivotValue;}interface PivotTableSummarizeFunction{}interface _PivotTableSummarizeFunction{
/**The [AVERAGE](https://support.google.com/docs/answer/3093615) function*/AVERAGE:PivotTableSummarizeFunction;
/**The [COUNT](https://support.google.com/docs/answer/3093620) function*/COUNT:PivotTableSummarizeFunction;
/**The [COUNTA](https://support.google.com/docs/answer/3093991) function*/COUNTA:PivotTableSummarizeFunction;
/**The [COUNTUNIQUE](https://support.google.com/docs/answer/3093405) function*/COUNTUNIQUE:PivotTableSummarizeFunction;
/**A custom function, this value is only valid for calculated fields.*/CUSTOM:PivotTableSummarizeFunction;
/**The [MAX](https://support.google.com/docs/answer/3094013) function*/MAX:PivotTableSummarizeFunction;
/**The [MEDIAN](https://support.google.com/docs/answer/3094025) function*/MEDIAN:PivotTableSummarizeFunction;
/**The [MIN](https://support.google.com/docs/answer/3094017) function*/MIN:PivotTableSummarizeFunction;
/**The [PRODUCT](https://support.google.com/docs/answer/3093502) function*/PRODUCT:PivotTableSummarizeFunction;
/**The [STDEV](https://support.google.com/docs/answer/3094054) function*/STDEV:PivotTableSummarizeFunction;
/**The [STDEVP](https://support.google.com/docs/answer/3094105) function*/STDEVP:PivotTableSummarizeFunction;
/**The [SUM](https://support.google.com/docs/answer/3093669) function*/SUM:PivotTableSummarizeFunction;
/**The [VAR](https://support.google.com/docs/answer/3094063) function*/VAR:PivotTableSummarizeFunction;
/**The [VARP](https://support.google.com/docs/answer/3094113) function*/VARP:PivotTableSummarizeFunction;}interface PivotTable{
/**Creates a new pivot value in the pivot table calculated from the specified `formula` with
the specified `name`.
@param name The name for this calculated pivot value.
@param formula The formula used to calculate this value.
@return the newly created [`PivotValue`](https://developers.google.com/apps-script/reference/spreadsheet/pivot-value.html)*/addCalculatedPivotValue(name:string,formula:string):SpreadsheetApp.PivotValue;
/**Defines a new pivot column grouping in the pivot table. The specified `sourceDataColumn`
indicates the column in the source data this grouping is based on.
@param sourceDataColumn The number of the column this group summarizes. This index represents
    the absolute number of the column in the spreadsheet; `1` representing column "A,"
    `2` representing column B, etc.
@return the newly created [`PivotGroup`](https://developers.google.com/apps-script/reference/spreadsheet/pivot-group.html)*/addColumnGroup(sourceDataColumn:Integer):SpreadsheetApp.PivotGroup;
/**Creates a new pivot filter for the pivot table. The specified `sourceDataColumn`
indicates the column in the source data this filter operates on.
@param sourceDataColumn The number of the column this group summarizes. This index represents
    the absolute number of the column in the spreadsheet; `1` representing column "A,"
    `2` representing column B, etc.
@param filterCriteria The filter criteria used to perform the filtering.
@return the newly created [`PivotFilter`](https://developers.google.com/apps-script/reference/spreadsheet/pivot-filter.html)*/addFilter(sourceDataColumn:Integer,filterCriteria:SpreadsheetApp.FilterCriteria):SpreadsheetApp.PivotFilter;
/**Defines a new pivot value in the pivot table with the specified `summarizeFunction`. The
specified `sourceDataColumn` indicates the column in the source data this value is based
on.
@param sourceDataColumn The number of the column this group summarizes. This index represents
    the absolute number of the column in the spreadsheet; `1` representing column "A,"
    `2` representing column B, etc.
@return the newly created [`PivotValue`](https://developers.google.com/apps-script/reference/spreadsheet/pivot-value.html)*/addPivotValue(sourceDataColumn:Integer,summarizeFunction:SpreadsheetApp.PivotTableSummarizeFunction):SpreadsheetApp.PivotValue;
/**Defines a new pivot row grouping in the pivot table. The specified `sourceDataColumn`
indicates the column in the source data this grouping is based on.
@param sourceDataColumn The number of the column this group summarizes. This index represents
    the absolute number of the column in the spreadsheet; `1` representing column "A,"
    `2` representing column B, etc.
@return the newly created [`PivotGroup`](https://developers.google.com/apps-script/reference/spreadsheet/pivot-group.html)*/addRowGroup(sourceDataColumn:Integer):SpreadsheetApp.PivotGroup;
/**Returns the pivot table as a data source pivot table if the pivot table is linked to a [`DataSource`](https://developers.google.com/apps-script/reference/spreadsheet/data-source.html), or `null` otherwise.
@return A data source pivot table.*/asDataSourcePivotTable():SpreadsheetApp.DataSourcePivotTable;
/**Returns the [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) representing the cell where this pivot table is anchored.
@return this pivot table's anchor cell*/getAnchorCell():SpreadsheetApp.Range;
/**Returns an ordered list of the column groups in this pivot table.
@return the column groups in this pivot table*/getColumnGroups():SpreadsheetApp.PivotGroup[];
/**Returns an ordered list of the filters in this pivot table.
@return the filters in this pivot table*/getFilters():SpreadsheetApp.PivotFilter[];
/**Returns an ordered list of the pivot values in this pivot table.
@return the pivot values in this pivot table*/getPivotValues():SpreadsheetApp.PivotValue[];
/**Returns an ordered list of the row groups in this pivot table.
@return the row groups in this pivot table*/getRowGroups():SpreadsheetApp.PivotGroup[];
/**Returns the source data range on which the pivot table is constructed.
@return The source data range of this pivot table.*/getSourceDataRange():SpreadsheetApp.Range;
/**Returns whether values are displayed as rows or columns.
@return whether values are displayed as rows or columns*/getValuesDisplayOrientation():SpreadsheetApp.Dimension;
/**Deletes this pivot table. Further operations on this pivot table results in an error.*/remove():void;
/**Sets the layout of this pivot table to display values as columns or rows.
@param dimension The dimension indicating how to display pivot values.
@return the pivot table for chaining*/setValuesDisplayOrientation(dimension:SpreadsheetApp.Dimension):SpreadsheetApp.PivotTable;}interface PivotGroupLimit{
/**Gets the count limit on rows or columns in the pivot group.
@return The count limit on rows or columns.*/getCountLimit():Integer;
/**Returns the pivot group the limit belongs to.
@return The pivot group.*/getPivotGroup():SpreadsheetApp.PivotGroup;
/**Removes the pivot group limit.*/remove():void;
/**Sets the count limit on rows or columns in the pivot group.
@param countLimit The count limit on rows or columns to set. Must be positive.
@return The pivot group limit, for chaining.*/setCountLimit(countLimit:Integer):SpreadsheetApp.PivotGroupLimit;}interface PivotGroup{
/**Adds a manual grouping rule for this pivot group.
@param groupName The name of this grouping rule.
@param groupMembers The values that are included in this grouping rule.
@return the pivot group for chaining.*/addManualGroupingRule(groupName:string,groupMembers:Object[]):SpreadsheetApp.PivotGroup;
/**Returns whether labels are displayed as repeated.
@return `true` if labels are repeated; otherwise returns `false`.*/areLabelsRepeated():boolean;
/**Removes any grouping rules from this pivot group.
@return the pivot group for chaining.*/clearGroupingRule():SpreadsheetApp.PivotGroup;
/**Removes any sorting applied to this group.
@return the pivot group for chaining.*/clearSort():SpreadsheetApp.PivotGroup;
/**Returns the date-time grouping rule on the pivot group, or `null` if no date-time
grouping rule is set.
@return The date-time grouping rule.*/getDateTimeGroupingRule():SpreadsheetApp.DateTimeGroupingRule;
/**Returns whether this is a row or column group.
@return the dimension representing this group's type*/getDimension():SpreadsheetApp.Dimension;
/**Returns the pivot group limit on the pivot group. Returns `null` if no pivot group limit
is set.
@return The pivot group limit.*/getGroupLimit():SpreadsheetApp.PivotGroupLimit;
/**Returns the index of this pivot group in the current group order.
@return the pivot group's index*/getIndex():Integer;
/**Returns the [`PivotTable`](https://developers.google.com/apps-script/reference/spreadsheet/pivot-table.html) which this grouping belongs to.
@return the pivot table this group belongs to.*/getPivotTable():SpreadsheetApp.PivotTable;
/**Returns the number of the source data column this group summarizes. This index is 1-based, if
this group summarizes source data in column "A" of the spreadsheet this method returns `1`.
@return the source data column number*/getSourceDataColumn():Integer;
/**Returns the data source column the pivot group operates on. Returns `null` if the pivot
table is not a {DataSourcePivotTableApi}.
@return The data source column the pivot group operates on.*/getSourceDataSourceColumn():SpreadsheetApp.DataSourceColumn;
/**Hides repeated labels for this grouping. If labels are already hidden this results in a no-op.
If this method is called before there are multiple row or column groupings, when an additional
grouping is added repeated labels are hidden.
@return the pivot group for chaining.*/hideRepeatedLabels():SpreadsheetApp.PivotGroup;
/**Returns `true` if the sort is ascending, returns `false` if the sort order is
descending.
@return `true` if the sort order is ascending.*/isSortAscending():boolean;
/**Moves this group to the specified position in the current list of row or column groups. These
indices are 0-based. For example, if this group should be moved to the first position this
method should be called with `0`.
@param index The index to move this grouping to.
@return the pivot group for chaining.*/moveToIndex(index:Integer):SpreadsheetApp.PivotGroup;
/**Removes this pivot group from the table.*/remove():void;
/**Removes the manual grouping rule with the specified `groupName`.
@param groupName The name of the grouping rule to remove.
@return the pivot group for chaining.*/removeManualGroupingRule(groupName:string):SpreadsheetApp.PivotGroup;
/**Resets the display name of this group in the pivot table to its default value.
@return the pivot group for chaining.*/resetDisplayName():SpreadsheetApp.PivotGroup;
/**Sets the date-time grouping rule on the pivot group.

To remove the rule, use [`clearGroupingRule()`](https://developers.google.com/apps-script/reference/spreadsheet/pivot-group.html#clearGroupingRule()).
@param dateTimeGroupingRuleType The rule type to set.
@return The pivot group, for chaining.*/setDateTimeGroupingRule(dateTimeGroupingRuleType:SpreadsheetApp.DateTimeGroupingRuleType):SpreadsheetApp.PivotGroup;
/**Sets the display name of this group in the pivot table.
@param name The display name to set.
@return the pivot group for chaining*/setDisplayName(name:string):SpreadsheetApp.PivotGroup;
/**Sets the pivot group limit on the pivot group. The operation is only supported for [`DataSourcePivotTable`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-pivot-table.html).
@param countLimit The count limit of rows or columns to set. Must be positive.
@return The pivot group for chaining.*/setGroupLimit(countLimit:Integer):SpreadsheetApp.PivotGroup;
/**Sets a histogram grouping rule for this pivot group. A histogram rule organizes values in a
source data column into buckets of a constant size. All values from `minValue` to `maxValue` are placed into groups of size `interval`. All values below `minValue`
are placed into one bucket, as are all values greater than `maxValue`.
@param minValue The minimum value for items to be placed into buckets. Values less than this
    are combined into a single bucket.
@param maxValue The maximum value for items to be placed into buckets. Values greater than this
    are combined into a single bucket.
@return the pivot group for chaining.*/setHistogramGroupingRule(minValue:Integer,maxValue:Integer,intervalSize:Integer):SpreadsheetApp.PivotGroup;
/**When there is more than one row or column grouping, this method displays this grouping's label
for each entry of the subsequent grouping. If labels are already repeated this results in a
no-op. If this method is called before there are multiple row or column groupings, when an
additional grouping is added repeated labels are shown.
@return the pivot group for chaining.*/showRepeatedLabels():SpreadsheetApp.PivotGroup;
/**Sets whether to show total values for this pivot group in the table.
@param showTotals Whether to show totals or not.
@return the pivot group for chaining.*/showTotals(showTotals:boolean):SpreadsheetApp.PivotGroup;
/**Sets the sort order to be ascending.
@return the pivot group for chaining.*/sortAscending():SpreadsheetApp.PivotGroup;
/**Sorts this group by the specified [`PivotValue`](https://developers.google.com/apps-script/reference/spreadsheet/pivot-value.html) for the values from the `oppositeGroupValues`.

```
// Sorts the item group by the "SUM of Quantity" pivot value for the specified salespersons.
var sheet = SpreadsheetApp.getActiveSheet();
var pivotTable = sheet.getPivotTables()[0];
var itemGroup = pivotTable.getRowGroups()[0];
var sumQuantityValue = pivotTable.getPivotValues()[0];
itemGroup.sortBy(sumQuantityValue, ['Beth', 'Amir', 'Devyn']);
```
@param value The pivot value to sort by.
@param oppositeGroupValues The values of an opposite pivot group (a column group if sorting a
    row group, or a row group if sorting a column group) that are used to sort. The order of
    these values determines precedence for tie breaking.
@return the pivot group for chaining.*/sortBy(value:SpreadsheetApp.PivotValue,oppositeGroupValues:Object[]):SpreadsheetApp.PivotGroup;
/**Sets the sort order to be descending.
@return the pivot group for chaining.*/sortDescending():SpreadsheetApp.PivotGroup;
/**Returns whether total values are currently shown for this pivot group.
@return `true` if total values are displayed for this pivot group; otherwise returns
    `false`.*/totalsAreShown():boolean;}interface PivotFilter{
/**Returns the filter criteria for this pivot filter.
@return the filter criteria for this pivot filter*/getFilterCriteria():SpreadsheetApp.FilterCriteria;
/**Returns the [`PivotTable`](https://developers.google.com/apps-script/reference/spreadsheet/pivot-table.html) that this filter belongs to.
@return the pivot table this filter belongs to*/getPivotTable():SpreadsheetApp.PivotTable;
/**Returns the number of the source data column this filter operates on. These indices are
1-based, for example if this filter applies to data in column A of the spreadsheet this method
returns "1."
@return the number of the source data column this filter applies to*/getSourceDataColumn():Integer;
/**Returns the data source column the filter operates on. Returns `null` if the pivot table
is not a {DataSourcePivotTableApi}.
@return The data source column the filter operates on.*/getSourceDataSourceColumn():SpreadsheetApp.DataSourceColumn;
/**Removes this pivot filter from the pivot table.*/remove():void;
/**Sets the filter criteria for this pivot filter.
@param filterCriteria The filter criteria to set.
@return the pivot filter for chaining*/setFilterCriteria(filterCriteria:SpreadsheetApp.FilterCriteria):SpreadsheetApp.PivotFilter;}interface PageProtection{
/**Adds a user to the list of users who can edit the sheet, if it is protected.

```
// Add the "user@example.com" user to the list of users who can edit this sheet
var sheet = SpreadsheetApp.getActiveSheet();
var permissions = sheet.getSheetProtection();
permissions.addUser('user@example.com');
permissions.setProtected(true);
sheet.setSheetProtection(permissions);
```
@deprecated
@param email The email of the user to add.*/addUser(email:string):void;
/**Returns a list of the email addresses of the users who can edit this sheet.

If sheet protection is disabled, the value returned by this call is meaningless.
@deprecated
@return an array of email addresses of users who can edit this sheet*/getUsers():string[];
/**Indicates whether the sheet has sheet protection enabled or not.

```
// Determine whether or not sheet protection is enabled
var sheet = SpreadsheetApp.getActiveSheet();
var permissions = sheet.getSheetProtection();
var isProtected = permissions.isProtected();
```
@deprecated
@return whether the sheet has sheet protection enabled or not*/isProtected():boolean;
/**Removes a user from the list of users who can edit the sheet.

```
// Remove the "user@example.com" user to the list of users who can edit this sheet
var sheet = SpreadsheetApp.getActiveSheet();
var permissions = sheet.getSheetProtection();
permissions.removeUser('user@example.com');
permissions.setProtected(true);
sheet.setSheetProtection(permissions);
```
@deprecated
@param user The email address of the user to remove.*/removeUser(user:string):void;
/**Sets the protection status for the sheet.

```
// Enables sheet protection for  this sheet
var sheet = SpreadsheetApp.getActiveSheet();
var permissions = sheet.getSheetProtection();
permissions.setProtected(true);
sheet.setSheetProtection(permissions);
```
@deprecated
@param protection `true` to enable sheet protection, `false` to disable sheet
    protection.*/setProtected(protection:boolean):void;}interface OverGridImage{
/**Assigns the function with the specified function name to this image.
@param functionName The name of the function being specified. This must be a public top level
    function, not one ending in underscore such as `privateFunction_`.
@return This image, for chaining.*/assignScript(functionName:string):SpreadsheetApp.OverGridImage;
/**Returns the alt text description for this image.
@return The alt text description.*/getAltTextDescription():string;
/**Returns the alt text title for this image.
@return The alt text title.*/getAltTextTitle():string;
/**Returns the cell where an image is anchored.
@return The anchor cell.*/getAnchorCell():SpreadsheetApp.Range;
/**Returns the horizontal pixel offset from the anchor cell.
@return The horizontal pixel offset.*/getAnchorCellXOffset():Integer;
/**Returns the vertical pixel offset from the anchor cell.
@return The vertical pixel offset.*/getAnchorCellYOffset():Integer;
/**Returns the actual height of this image in pixels.

```
// Logs the height of all images in a spreadsheet
var images = SpreadsheetApp.getActiveSpreadsheet().getImages();
for (var i = 0; i < images.length; i++) {
  Logger.log(images[i].getHeight());
}
```
@return The height of the image in pixels.*/getHeight():Integer;
/**Returns the inherent height of this image in pixels.
@return The inherent height in pixels.*/getInherentHeight():Integer;
/**Returns the inherent height of this image in pixels.
@return The inherent width in pixels.*/getInherentWidth():Integer;
/**Returns the name of the function assigned to this image.
@return The name of the function.*/getScript():string;
/**Returns the sheet this image appears on.

```
// Logs the parent sheet of all images in a spreadsheet
var images = SpreadsheetApp.getActiveSpreadsheet().getImages();
for (var i = 0; i < images.length; i++) {
  Logger.log(images[i].getSheet());
}
```
@return The sheet the image appears on.*/getSheet():SpreadsheetApp.Sheet;
/**Gets the image's source URL; returns `null` if the URL is unavailable. If the image was
inserted by URL using an API, this method returns the URL provided during image insertion.
@return The image URL if available; returns `null` if the image is unavailable or doesn't
    have a source URL.*/getUrl():string;
/**Returns the actual width of this image in pixels.

```
// Logs the width of all images in a spreadsheet
var images = SpreadsheetApp.getActiveSpreadsheet().getImages();
for (var i = 0; i < images.length; i++) {
  Logger.log(images[i].getWidth());
}
```
@return The width of the image in pixels.*/getWidth():Integer;
/**Deletes this image from the spreadsheet. Any further operation on the image results in a script
error.

```
// Deletes all images in a spreadsheet
var images = SpreadsheetApp.getActiveSpreadsheet().getImages();
for (var i = 0; i < images.length; i++) {
  images[i].remove();
}
```*/remove():void;
/**Replaces this image with the one specified by the provided [`BlobSource`](https://developers.google.com/apps-script/reference/spreadsheet/../base/blob-source.html). The maximum
supported blob size is 2MB.
@param blob The new image as a Blob.
@return This image, for chaining.*/replace(blob:BlobSource):SpreadsheetApp.OverGridImage;
/**Replaces this image with the one from the specified URL.
@param url The URL of the new image.
@return This image, for chaining.*/replace(url:string):SpreadsheetApp.OverGridImage;
/**Resets this image to its inherent dimensions.
@return This image, for chaining.*/resetSize():SpreadsheetApp.OverGridImage;
/**Sets the alt-text description for this image.
@param description The new alt text description for the image.
@return This image, for chaining.*/setAltTextDescription(description:string):SpreadsheetApp.OverGridImage;
/**Sets the alt text title for this image.
@param title The new alt text title for the image.
@return This image, for chaining.*/setAltTextTitle(title:string):SpreadsheetApp.OverGridImage;
/**Sets the cell where an image is anchored.
@param cell The new anchor cell.
@return This image, for chaining.*/setAnchorCell(cell:SpreadsheetApp.Range):SpreadsheetApp.OverGridImage;
/**Sets the horizontal pixel offset from the anchor cell.
@param offset The new horizonal pixel offset.
@return This image, for chaining.*/setAnchorCellXOffset(offset:Integer):SpreadsheetApp.OverGridImage;
/**Sets the vertical pixel offset from the anchor cell.
@param offset The new vertical pixel offset.
@return This image, for chaining.*/setAnchorCellYOffset(offset:Integer):SpreadsheetApp.OverGridImage;
/**Sets the actual height of this image in pixels.
@param height The desired height in pixels.
@return The image for chaining.*/setHeight(height:Integer):SpreadsheetApp.OverGridImage;
/**Sets the actual width of this image in pixels.
@param width The desired width in pixels.
@return The image for chaining.*/setWidth(width:Integer):SpreadsheetApp.OverGridImage;}interface NamedRange{
/**Gets the name of this named range.
@return the name of this named range*/getName():string;
/**Gets the range referenced by this named range.
@return the spreadsheet range that is associated with this named range*/getRange():SpreadsheetApp.Range;
/**Deletes this named range.

```
// The code below deletes all the named ranges in the spreadsheet.
var namedRanges = SpreadsheetApp.getActive().getNamedRanges();
for (var i = 0; i < namedRanges.length; i++) {
  namedRanges[i].remove();
}
```*/remove():void;
/**Sets/updates the name of the named range.

```
// The code below updates the name for the first named range.
var namedRanges = SpreadsheetApp.getActiveSpreadsheet().getNamedRanges();
if (namedRanges.length > 1) {
  namedRanges[0].setName("UpdatedNamedRange");
}
```
@param name The new name of the named range.
@return the range whose name was set by the call*/setName(name:string):SpreadsheetApp.NamedRange;
/**Sets/updates the range for this named range.
@param range The spreadsheet range to associate with this named range.
@return the named range for which the spreadsheet range was set*/setRange(range:SpreadsheetApp.Range):SpreadsheetApp.NamedRange;}interface LookerDataSourceSpecBuilder{
/**Builds a data source specification from the settings in this builder. Must use `as...()`
to specify a data source type before building.

The following code sample builds a BigQuery DataSource Spec.

```
var bigQueryDataSourceSpec = SpreadsheetApp.newDataSourceSpec().asBigQuery();
// TODO(developer): Replace with the required dataset, project and table IDs.
bigQueryDataSourceSpec.setDatasetId("my data set id");
bigQueryDataSourceSpec.setProjectId("my project id");
bigQueryDataSourceSpec.setTableId("my table id");

bigQueryDataSourceSpec.build();

```

The following code sample builds a Looker DataSource Spec.

```
var lookerDataSourceSpecBuilder = SpreadsheetApp.newDataSourceSpec().asLooker();
var lookerSpec = lookerDataSourceSpecBuilder.setExploreName("my explore name")
                                            .setInstanceUrl("my instance url")
                                            .setModelName("my model name")
                                            .build();
```
@return The data source specification.*/build():SpreadsheetApp.DataSourceSpec;
/**Creates a [`DataSourceSpecBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec-builder.html) based on this data source's settings.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');
var spec = ss.getDataSources()[0].getSpec();

var newSpec = spec.copy();
```
@return The builder.*/copy():SpreadsheetApp.DataSourceSpecBuilder;
/**Gets the name of the Looker explore in the model.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

var lookerDataSourceSpec = ss.getDataSources()[0].getSpec().asLooker();
var exploreName = lookerDataSourceSpec.getExploreName();
Logger.log(exploreName);
```
@return The name of the Looker explore.*/getExploreName():string;
/**Gets the URL of the Looker instance.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

var lookerDataSourceSpec = ss.getDataSources()[0].getSpec().asLooker();
var instanceUrl = lookerDataSourceSpec.getInstanceUrl();
Logger.log(instanceUrl);
```
@return The URL of the Looker instance.*/getInstanceUrl():string;
/**Gets the name of the Looker model in the instance.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

var lookerDataSourceSpec = ss.getDataSources()[0].getSpec().asLooker();
var modelName = lookerDataSourceSpec.getModelName();
Logger.log(modelName);
```
@return The name of the Looker model.*/getModelName():string;
/**Gets the parameters of the data source.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');
var spec = ss.getDataSources()[0].getSpec();
var parameters = spec.getParameters();
```

This method is only available for BigQuery data sources.
@return The parameter list.*/getParameters():SpreadsheetApp.DataSourceParameter[];
/**Gets the type of the data source.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');
var spec = ss.getDataSources()[0].getSpec();
var type = spec.getType();
```
@return The data source type.*/getType():SpreadsheetApp.DataSourceType;
/**Removes all the parameters.

```
var specBuilder = SpreadsheetApp.newDataSourceSpec();
specBuilder.removeAllParameters();
```
@return The builder, for chaining.*/removeAllParameters():SpreadsheetApp.LookerDataSourceSpecBuilder;
/**Removes the specified parameter.

```
var specBuilder = SpreadsheetApp.newDataSourceSpec();
specBuilder.removeParameter("x");
```
@param parameterName The name of the parameter to remove.
@return The builder, for chaining.*/removeParameter(parameterName:string):SpreadsheetApp.LookerDataSourceSpecBuilder;
/**Sets the explore name in the Looker model.

```
var lookerDataSourceSpecBuilder = SpreadsheetApp.newDataSourceSpec().asLooker();
// TODO(developer): replace explore name with your own
lookerDataSourceSpecBuilder.setExploreName("my explore name");
```
@param exploreName The explore name in the selected Looker model.
@return This builder, for chaining.*/setExploreName(exploreName:string):SpreadsheetApp.LookerDataSourceSpecBuilder;
/**Sets the instance URL for Looker.

```
var lookerDataSourceSpecBuilder = SpreadsheetApp.newDataSourceSpec().asLooker();
 // TODO(developer): replace instance url with your own
lookerDataSourceSpecBuilder.setInstanceUrl("my instance url");
```
@param instanceUrl The URL of the Looker instance.
@return The builder, for chaining.*/setInstanceUrl(instanceUrl:string):SpreadsheetApp.LookerDataSourceSpecBuilder;
/**Sets the Looker model name in the Looker instance.

```
var lookerDataSourceSpecBuilder = SpreadsheetApp.newDataSourceSpec().asLooker();
// TODO(developer): replace model name with your own
lookerDataSourceSpecBuilder.setModelName("my model name");
```
@param modelName The model name in the Looker instance.
@return The builder, for chaining.*/setModelName(modelName:string):SpreadsheetApp.LookerDataSourceSpecBuilder;
/**Adds a parameter, or if the parameter with the name exists, updates its source cell for data
source spec builders of type [`DataSourceType.BIGQUERY`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-type.html#BIGQUERY).

This method is only available for BigQuery data sources.

```
var specBuilder = SpreadsheetApp.newDataSourceSpec().asBigQuery();
specBuilder.setParameterFromCell("x", "A1");
var bigQuerySpec = specBuilder.build();
```
@param parameterName The parameter name.
@param sourceCell The source cell, as specified in A1 notation.
@return The builder, for chaining.*/setParameterFromCell(parameterName:string,sourceCell:string):SpreadsheetApp.LookerDataSourceSpecBuilder;}interface LookerDataSourceSpec{
/**Creates a [`DataSourceSpecBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec-builder.html) based on this data source's settings.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');
var spec = ss.getDataSources()[0].getSpec();

var newSpec = spec.copy();
```
@return The builder.*/copy():SpreadsheetApp.DataSourceSpecBuilder;
/**Gets the name of the Looker explore in the model.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

var lookerDataSourceSpec = ss.getDataSources()[0].getSpec().asLooker();
var exploreName = lookerDataSourceSpec.getExploreName();
Logger.log(exploreName);
```
@return The name of the Looker explore.*/getExploreName():string;
/**Gets the URL of the Looker instance.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

var lookerDataSourceSpec = ss.getDataSources()[0].getSpec().asLooker();
var instanceUrl = lookerDataSourceSpec.getInstanceUrl();
Logger.log(instanceUrl);
```
@return The URL of the Looker instance.*/getInstanceUrl():string;
/**Gets the name of the Looker model in the instance.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

var lookerDataSourceSpec = ss.getDataSources()[0].getSpec().asLooker();
var modelName = lookerDataSourceSpec.getModelName();
Logger.log(modelName);
```
@return The name of the Looker model.*/getModelName():string;
/**Gets the parameters of the data source.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');
var spec = ss.getDataSources()[0].getSpec();
var parameters = spec.getParameters();
```

This method is only available for BigQuery data sources.
@return The parameter list.*/getParameters():SpreadsheetApp.DataSourceParameter[];
/**Gets the type of the data source.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');
var spec = ss.getDataSources()[0].getSpec();
var type = spec.getType();
```
@return The data source type.*/getType():SpreadsheetApp.DataSourceType;}interface InterpolationType{}interface _InterpolationType{
/**Infer the maximum number as a specific interpolation point for a gradient condition.*/MAX:InterpolationType;
/**Infer the minimum number as a specific interpolation point for a gradient condition.*/MIN:InterpolationType;
/**Use the number as as specific interpolation point for a gradient condition.*/NUMBER:InterpolationType;
/**Use the number as a percentage interpolation point for a gradient condition.*/PERCENT:InterpolationType;
/**Use the number as a percentile interpolation point for a gradient condition.*/PERCENTILE:InterpolationType;}interface GroupControlTogglePosition{}interface _GroupControlTogglePosition{
/**The position where the control toggle is after the group (at higher indices).*/AFTER:GroupControlTogglePosition;
/**The position where the control toggle is before the group (at lower indices).*/BEFORE:GroupControlTogglePosition;}interface Group{
/**Collapses this group.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
var range = sheet.getRange(2:3);
range.shiftRowGroupDepth(1);
var group = sheet.getRowGroup(2, 1);

// Collapses this group.
group.collapse();
```
@return this group, for chaining*/collapse():SpreadsheetApp.Group;
/**Expands this group.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
var range = sheet.getRange(2:3);
range.shiftRowGroupDepth(1);
var group = sheet.getRowGroup(2, 1);

// Expands this group.
group.expand();
```
@return this group, for chaining*/expand():SpreadsheetApp.Group;
/**Returns the control toggle index of this group. This is the index just before the range when
the control toggle is shown before the group, or the index just after the range otherwise.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
sheet.setRowGroupControlAfter(true);
var range = sheet.getRange(2:3);
range.shiftRowGroupDepth(1);
var group = sheet.getRowGroup(2, 1);

// Returns 4
var controlIndex = group.getControlIndex();
```
@return the control toggle index of this group*/getControlIndex():Integer;
/**Returns the depth of this group.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
var range = sheet.getRange(2:3);
range.shiftRowGroupDepth(1);
var group = sheet.getRowGroup(2, 1);

// Returns 1 if the group is at depth 1.
var depth = group.getDepth();
```
@return the depth of this group*/getDepth():Integer;
/**Returns the range over which this group exists.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
var range = sheet.getRange(2:3);
range.shiftRowGroupDepth(1);
var group = sheet.getRowGroup(1, 1);

// Returns the range 2:3 if the group is over rows 2:3
range = group.getRange();
```
@return the range over which the group exists*/getRange():SpreadsheetApp.Range;
/**Returns `true` if this group is collapsed.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
var range = sheet.getRange(2:3);
range.shiftRowGroupDepth(1);
var group = sheet.getRowGroup(2, 1);

// Returns true if the group is collapsed.
var isCollapsed = group.isCollapsed();
```
@return `true` if this group is collapsed; returns `false` otherwise*/isCollapsed():boolean;
/**Removes this group from the sheet, reducing the group depth of the [`range`](https://developers.google.com/apps-script/reference/spreadsheet/group.html#getRange()) by
one. This may modify other groups. After calling this, the group object becomes invalid to use.

```
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
var range = sheet.getRange(2:3);
range.shiftRowGroupDepth(1);
var group = sheet.getRowGroup(2, 1);

// Removes this group
var range = group.remove();
```*/remove():void;}interface GradientCondition{
/**Gets the color set for the maximum value of this gradient condition. Returns an empty string if
the color hasn't been set.
@deprecated
@return The color set for the maximum value of this gradient condition or an empty string.*/getMaxColor():string;
/**Gets the color set for the maximum value of this gradient condition. Returns `null` if
the color hasn't been set.
@return The color set for the maximum value of this gradient condition or `null`.*/getMaxColorObject():SpreadsheetApp.Color;
/**Gets the interpolation type for the maximum value of this gradient condition. Returns `null` if the gradient max type hasn't been set.
@return the interpolation type for the maximum value of this gradient condition or `null`*/getMaxType():SpreadsheetApp.InterpolationType;
/**Gets the max value of this gradient condition. Returns an empty string if the [`InterpolationType`](https://developers.google.com/apps-script/reference/spreadsheet/interpolation-type.html) is `MAX` or if the max value hasn't been
set.
@return the maximum value if specified or an empty string*/getMaxValue():string;
/**Gets the color set for the mid-point value of this gradient condition. Returns an empty string
if the color hasn't been set.
@deprecated
@return The color set for the midpoint value of this gradient condition or an empty string.*/getMidColor():string;
/**Gets the color set for the midpoint value of this gradient condition. Returns `null` if
the color hasn't been set.
@return The color set for the midpoint value of this gradient condition or `null`.*/getMidColorObject():SpreadsheetApp.Color;
/**Gets the interpolation type for the mid-point value of this gradient condition. Returns `null` if the gradient mid type hasn't been set.
@return the interpolation type for the mid-point value of this gradient condition or `null`*/getMidType():SpreadsheetApp.InterpolationType;
/**Gets the mid-point value of this gradient condition. Returns an empty string if the gradient
mid value hasn't been set.
@return the mid-point value or an empty string*/getMidValue():string;
/**Gets the color set for the minimum value of this gradient condition. Returns an empty string if
the color hasn't been set.
@deprecated
@return The color set for the minimum value of this gradient condition or an empty string.*/getMinColor():string;
/**Gets the color set for the minimum value of this gradient condition. Returns `null` if
the color hasn't been set.
@return The color set for the minimum value of this gradient condition or `null`.*/getMinColorObject():SpreadsheetApp.Color;
/**Gets the interpolation type for the minimum value of this gradient condition. Returns `null` if the gradient min type hasn't been set.
@return the interpolation type for the minimum value of this gradient condition or `null`*/getMinType():SpreadsheetApp.InterpolationType;
/**Gets the minimum value of this gradient condition. Returns an empty string if the [`InterpolationType`](https://developers.google.com/apps-script/reference/spreadsheet/interpolation-type.html) is `MIN` or if the min value hasn't been
set.
@return the minimum value if specified or an empty string*/getMinValue():string;}interface FrequencyType{}interface _FrequencyType{
/**Refresh daily.*/DAILY:FrequencyType;
/**The frequency type is unsupported.*/FREQUENCY_TYPE_UNSUPPORTED:FrequencyType;
/**Refresh monthly, on given days of the month.*/MONTHLY:FrequencyType;
/**Refresh weekly, on given days of the week.*/WEEKLY:FrequencyType;}interface FilterCriteriaBuilder{
/**Assembles the filter criteria using the settings you add to the criteria builder.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
let criteria = SpreadsheetApp.newFilterCriteria() // Creates a criteria builder.
                             .whenCellNotEmpty() // Adds settings to the builder.
                             .build();          // Assembles the criteria.
filter.setColumnFilterCriteria(2, criteria);
```
@return A representation of the filter criteria.*/build():SpreadsheetApp.FilterCriteria;
/**Copies this filter criteria and creates a criteria builder that you can apply to another
filter.

You can use this method with any type of filter. If you're using a sheet filter, you can
copy the criteria to another column.

```
let ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
// Makes a copy of the filter criteria applied to column C.
let criteria = filter.getColumnFilterCriteria(3).copy().build();
// Applies the copied criteria to column B. The copied criteria overwrites any existing
// criteria on column B.
filter.setColumnFilterCriteria(2, criteria);
```
@return A filter criteria builder based on this filter criteria.*/copy():SpreadsheetApp.FilterCriteriaBuilder;
/**Returns the criteria's boolean type, for example, `CELL_EMPTY`. To learn about the types
of boolean criteria, see the [`BooleanCriteria`](https://developers.google.com/apps-script/reference/spreadsheet/boolean-criteria.html) enum.

People often use this method to add boolean condition criteria to a filter without replacing
existing criteria.

  + To get the arguments for the criteria, use [`getCriteriaValues()`](https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html#getCriteriaValues()).
  + To use the criteria type and criteria values to create or modify filter criteria, see
      [`withCriteria(criteria, args)`](https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html#withCriteria(BooleanCriteria,Object)).

You can use this method for any type of filter. If the filter criteria isn't a boolean
condition, returns `null`.

```
let ss = SpreadsheetApp.getActiveSheet();
// Gets the filter on the active sheet.
let filter = ss.getFilter();
// Gets the criteria type and returns a string representing the criteria type object.
let criteriaType = filter.getColumnFilterCriteria(2)
                         .getCriteriaType()
                         .toString();
// Logs the criteria type.
console.log(criteriaType);
```
@return The type of boolean criteria, or `null` if the criteria isn't a boolean
    condition.*/getCriteriaType():SpreadsheetApp.BooleanCriteria;
/**Returns an array of arguments for boolean criteria. Some boolean criteria types don't have
arguments and return an empty array, for example, `CELL_NOT_EMPTY`.

People often use this method to add boolean condition criteria to a filter without replacing
existing criteria.

<ul>
  + To get the boolean criteria type, use [`getCriteriaType()`](https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html#getCriteriaType()).
  + To use the criteria type and criteria values to create or modify a filter criteria, see
      [`withCriteria(criteria, args)`](https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html#withCriteria(BooleanCriteria,Object)).
      

You can use this method for any type of filter.
      

```
let ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
// Gets the values of the boolean criteria and logs them. For example, if the boolean
// condition is whenNumberGreaterThan(10), then the logged value is 10.
let criteriaValues = filter.getColumnFilterCriteria(2).getCriteriaValues();
console.log(criteriaValues);
```
@return An array of arguments appropriate to the boolean criteria type. The number of arguments
    and their type match the corresponding `when...()` method of the [`FilterCriteriaBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html) class.*/getCriteriaValues():Object[];
/**Returns the values that the filter hides.

Use this criteria with filters on [`Grid`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html) sheets, the default type of sheet.
Returns `null` if you call this method for other types of filters.

```
let ss = SpreadsheetApp.getActiveSheet();
let range = ss.getRange("A1:C20");
let filter = range.getFilter();
// Gets the filter criteria applied to column B, then gets the hidden values.
let filterCriteria = filter.getColumnFilterCriteria(2).getHiddenValues();
// Logs the hidden values.
console.log(filterCriteria);
```
@return An array of values that the filter hides.*/getHiddenValues():string[];
/**Returns the background color used as filter criteria. Cells with this background color remain
visible.

Use this criteria with filters on [`Grid`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html) sheets, the default type of sheet.
Returns `null` if you call this method for other types of filters.

```
let ss = SpreadsheetApp.getActiveSheet();
let range = ss.getRange("A1:C20");
// Logs the background color that column B is filtered by as a hexadecimal string.
let filter = range.getFilter();
let color = filter.getColumnFilterCriteria(2)
                  .getVisibleBackgroundColor()
                  .asRgbColor()
                  .asHexString();
console.log(color);
```
@return The background color used as filter criteria.*/getVisibleBackgroundColor():SpreadsheetApp.Color;
/**Returns the foreground color used as a filter criteria. Cells with this foreground color remain
visible.

Use this criteria with filters on [`Grid`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html) sheets, the default type of sheet.
Returns `null` if you call this method for other types of filters.

```
let ss = SpreadsheetApp.getActiveSheet();
let range = ss.getRange("A1:C20");
// Logs the foreground color that column B is filtered by as a hexadecimal string.
let filter = range.getFilter();
let color = filter.getColumnFilterCriteria(2)
                  .getVisibleForegroundColor()
                  .asRgbColor()
                  .asHexString();
console.log(color);
```
@return The foreground color used as a filter criteria.*/getVisibleForegroundColor():SpreadsheetApp.Color;
/**Returns the values that the pivot table filter shows.

This criteria is only for filters on pivot tables that aren't connected to a database.
Returns an empty array for other types of filters.

```
let ss = SpreadsheetApp.getActiveSheet();
// Gets the first pivot table on the sheet, then gets the visible values of its first filter.
pivotTable = ss.getPivotTables()[0];
pivotFilterValues = pivotTable.getFilters()[0].getFilterCriteria().getVisibleValues();
// Logs the visible values.
console.log(pivotFilterValues);
```
@return An array of values that the pivot table filter shows.*/getVisibleValues():string[];
/**Sets the values to hide. Clears any existing visible or hidden values.

You can only use this criteria for filters on [`Grid`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html) sheets, the default
type of sheet.

```
// Gets the existing filter on the range.
const ss = SpreadsheetApp.getActiveSheet();
let range = ss.getRange("A1:C20");
let filter = range.getFilter();
// Sets the values to hide and applies the criteria to column C.
let criteria = SpreadsheetApp.newFilterCriteria()
                             .setHiddenValues(["Hello", "World"])
                             .build();
filter.setColumnFilterCriteria(3, criteria);
```
@param values The list of values to hide.
@return This builder, for chaining.*/setHiddenValues(values:string[]):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets the background color used as filter criteria. Cells with this background color remain
visible. Setting a background color filter criteria removes any current color filter criteria
from this builder.

You can only use this criteria for filters on [`Grid`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html) sheets, the default
type of sheet.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
// Creates criteria that filters by background color and sets it to column B.
let color = SpreadsheetApp.newColor().setRgbColor("#185ABC").build();
let criteria = SpreadsheetApp.newFilterCriteria()
                             .setVisibleBackgroundColor(color)
                             .build();
filter.setColumnFilterCriteria(2, criteria);
```
@param visibleBackgroundColor The background color to set. The color must be an RGB-style
    color. This method doesn't support theme colors.
@return This builder, for chaining.*/setVisibleBackgroundColor(visibleBackgroundColor:SpreadsheetApp.Color):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets the foreground color used as filter criteria. Cells with this foreground color remain
visible. Setting a foreground color filter criteria removes any current color filter criteria
from this builder.

You can only use this criteria for filters on [`Grid`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html) sheets, the default
type of sheet.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
// Creates criteria that filters by foreground color and sets it to column B.
let color = SpreadsheetApp.newColor().setRgbColor("#185ABC").build();
let criteria = SpreadsheetApp.newFilterCriteria()
                             .setVisibleForegroundColor(color)
                             .build();
filter.setColumnFilterCriteria(2, criteria);
```
@param visibleForegroundColor The foreground color to set. The color must be an RGB-style
    color. This method doesn't support theme colors.
@return This builder, for chaining.*/setVisibleForegroundColor(visibleForegroundColor:SpreadsheetApp.Color):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets the values to show on a pivot table. Clears any existing visible or hidden values.

You can only use this criteria for filters on pivot tables that aren't connected to a
database.

```
// Gets the active sheet.
const ss = SpreadsheetApp.getActiveSheet();
// Gets the first pivot table on the sheet and adds a filter to it that
// sets the visible values to "Northeast" and "Southwest."
let pivotTable = ss.getPivotTables()[0];
let criteria = SpreadsheetApp.newFilterCriteria()
                             .setVisibleValues(["Northeast", "Southwest"])
                             .build();
pivotTable.addFilter(2, criteria);
```
@param values The list of values to show.
@return This builder, for chaining.*/setVisibleValues(values:string[]):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets the filter criteria to show empty cells.

You can use this criteria with any type of filter.

```
// Gets the existing filter on the range.
const ss = SpreadsheetApp.getActiveSheet();
let range = ss.getRange("A1:C20");
let filter = range.getFilter();
// Sets criteria to column B that only shows empty cells.
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenCellEmpty()
                             .build();
filter.setColumnFilterCriteria(2, criteria);
```
@return This builder, for chaining.*/whenCellEmpty():SpreadsheetApp.FilterCriteriaBuilder;
/**Sets the filter criteria to show cells that aren't empty.

You can use this criteria with any type of filter.

```
// Gets the existing filter on the range.
const ss = SpreadsheetApp.getActiveSheet();
let range = ss.getRange("A1:C20");
let filter = range.getFilter();
// Sets criteria to column B that only shows cells that aren't empty.
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenCellNotEmpty()
                             .build();
filter.setColumnFilterCriteria(2, criteria);
```
@return This builder, for chaining.*/whenCellNotEmpty():SpreadsheetApp.FilterCriteriaBuilder;
/**Sets filter criteria that shows cells with dates that are after the specified date.

You can use this criteria with any type of filter. If you use this criteria with data that's
connected to a database, the data type of the column you're filtering by must be a date. If the
data isn't connected to a database, the data type of the column you're filtering by doesn't
need to be a date, but if it's not, you might get unexpected results.

```
// Gets the existing filter on the range.
const ss = SpreadsheetApp.getActiveSheet();
let range = ss.getRange("A1:C20");
let filter = range.getFilter();
// Creates criteria that only shows cells with dates after June 1, 2022
// and sets it to column A.
let date = new Date("June 1, 2022");
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenDateAfter(date)
                             .build();
filter.setColumnFilterCriteria(1, criteria);
```
@param date The latest date to hide.
@return This builder, for chaining.*/whenDateAfter(date:Date):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets filter criteria that shows cells with dates that are after the specified relative date. To
view the relative date options, refer to [Enum `RelativeDate`](/apps-script/reference/spreadsheet/relative-date).

You can use this criteria with any type of filter. If you use this criteria with data that's
connected to a database, the data type of the column you're filtering by must be a date. If the
data isn't connected to a database, the data type of the column you're filtering by doesn't
need to be a date, but if it's not, you might get unexpected results.

```
// Gets the existing filter on the range.
const ss = SpreadsheetApp.getActiveSheet();
let range = ss.getRange("A1:C20");
let filter = range.getFilter();
// Creates criteria that only shows cells with dates after today's date
// and sets it to column A.
let date = SpreadsheetApp.RelativeDate.TODAY;
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenDateAfter(date)
                             .build();
filter.setColumnFilterCriteria(1, criteria);
```
@param date The latest relative date.
@return This builder, for chaining.*/whenDateAfter(date:SpreadsheetApp.RelativeDate):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets filter criteria that shows cells with dates that are before the specified date.

You can use this criteria with any type of filter. If you use this criteria with data that's
connected to a database, the data type of the column you're filtering by must be a date. If the
data isn't connected to a database, the data type of the column you're filtering by doesn't
need to be a date, but if it's not, you might get unexpected results.

```
// Gets the existing filter on the range.
const ss = SpreadsheetApp.getActiveSheet();
let range = ss.getRange("A1:C20");
let filter = range.getFilter();
// Creates criteria that only shows cells with dates before June 1, 2022
// and sets it to column A.
let date = new Date("June 1, 2022");
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenDateBefore(date)
                             .build();
filter.setColumnFilterCriteria(1, criteria);
```
@param date The earliest date to hide.
@return This builder, for chaining.*/whenDateBefore(date:Date):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets filter criteria that shows cells with dates that are before the specified relative date.
To view the relative date options, refer to [Enum `RelativeDate`](/apps-script/reference/spreadsheet/relative-date).

You can use this criteria with any type of filter. If you use this criteria with data that's
connected to a database, the data type of the column you're filtering by must be a date. If the
data isn't connected to a database, the data type of the column you're filtering by doesn't
need to be a date, but if it's not, you might get unexpected results.

```
// Gets the existing filter on the range.
const ss = SpreadsheetApp.getActiveSheet();
let range = ss.getRange("A1:C20");
let filter = range.getFilter();
// Creates criteria that only shows cells with dates before today's date
// and sets it to column A.
let date = SpreadsheetApp.RelativeDate.TODAY;
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenDateBefore(date)
                             .build();
filter.setColumnFilterCriteria(1, criteria);
```
@param date The earliest relative date to hide.
@return This builder, for chaining.*/whenDateBefore(date:SpreadsheetApp.RelativeDate):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets filter criteria that shows cells with dates that are equal to the specified date.

You can use this criteria with any type of filter. If you use this criteria with data that's
connected to a database, the data type of the column you're filtering by must be a date. If the
data isn't connected to a database, the data type of the column you're filtering by doesn't
need to be a date, but if it's not, you might get unexpected results.

```
// Gets the existing filter on the range.
const ss = SpreadsheetApp.getActiveSheet();
let range = ss.getRange("A1:C20");
let filter = range.getFilter();
// Creates criteria that only shows cells with dates equal to June 1, 2022
// and sets it to column A.
let date = new Date("June 1, 2022");
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenDateEqualTo(date)
                             .build();
filter.setColumnFilterCriteria(1, criteria);
```
@param date The date that cell values must match.
@return This builder, for chaining.*/whenDateEqualTo(date:Date):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets filter criteria that shows cells with dates that are equal to the specified relative date.
To view the relative date options, refer to [Enum `RelativeDate`](/apps-script/reference/spreadsheet/relative-date).

You can use this criteria with any type of filter. If you use this criteria with data that's
connected to a database, the data type of the column you're filtering by must be a date. If the
data isn't connected to a database, the data type of the column you're filtering by doesn't
need to be a date, but if it's not, you might get unexpected results.

```
// Gets the existing filter on the range.
const ss = SpreadsheetApp.getActiveSheet();
let range = ss.getRange("A1:C20");
let filter = range.getFilter();
// Creates criteria that only shows cells with dates that fall within the past month
// and sets it to column A.
let date = SpreadsheetApp.RelativeDate.PAST_MONTH;
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenDateEqualTo(date)
                             .build();
filter.setColumnFilterCriteria(1, criteria);
```
@param date The relative date that cell values must match.
@return This builder, for chaining.*/whenDateEqualTo(date:SpreadsheetApp.RelativeDate):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets the filter criteria to show cells with dates that are equal to any of the specified dates.

You can only use this criteria with data connected to a database. For example, use this
criteria with filters on a [`DataSource`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html) sheet, a sheet that's connected to a
database, or a [`DataSourcePivotTable`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-pivot-table.html), a pivot table created from a [`DataSource`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html) sheet.

```
// Gets the sheet that's connected to a database.
let ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data Sheet");
let dataSheet = ss.asDataSourceSheet();
// Adds criteria to the "date" column that shows cells with any of the below dates.
let date1 = new Date("June 1, 2022");
let date2 = new Date("June 2, 2022");
let date3 = new Date("June 3, 2022");
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenDateEqualToAny([date1, date2, date3])
                             .build();
dataSheet.addFilter("date", criteria);
```
@param dates The dates to show.
@return This builder, for chaining.*/whenDateEqualToAny(dates:Date[]):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets the filter criteria to show cells that aren't equal to the specified date.

You can only use this criteria with data connected to a database. For example, use this
criteria with filters on a [`DataSource`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html) sheet, a sheet that's connected to a
database, or a [`DataSourcePivotTable`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-pivot-table.html), a pivot table created from a [`DataSource`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html) sheet.

The data type of the column you're filtering by must be a date.

```
// Gets a pivot table that's connected to a database.
let ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pivot Table Sheet");
let dataPivotTable = ss.getDataSourcePivotTables()[0];
// Creates criteria that only shows cells that don't equal June 16, 2022
// and sets it to the "date" column.
let date = new Date("June 16, 2022");
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenDateNotEqualTo(date)
                             .build();
dataPivotTable.addFilter("date", criteria);
```
@param date The date to hide.
@return This builder, for chaining.*/whenDateNotEqualTo(date:Date):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets the filter criteria to show cells with dates that aren't equal to any of the specified
dates.

You can only use this criteria with data connected to a database. For example, use this
criteria with filters on a [`DataSource`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html) sheet, a sheet that's connected to a
database, or a [`DataSourcePivotTable`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-pivot-table.html), a pivot table created from a [`DataSource`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html) sheet.

```
// Gets the sheet that's connected to a database.
let ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data Sheet");
let dataSheet = ss.asDataSourceSheet();
// Adds criteria to the "date" column that hides cells with any of the below dates.
let date1 = new Date("June 1, 2022");
let date2 = new Date("June 2, 2022");
let date3 = new Date("June 3, 2022");
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenDateNotEqualToAny([date1, date2, date3])
                             .build();
dataSheet.addFilter("date", criteria);
```
@param dates The dates to hide.
@return This builder, for chaining.*/whenDateNotEqualToAny(dates:Date[]):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets the filter criteria to show cells with a specified formula (such as `=B:B<C:C`) that
evaluates to `true`.

You can only use this criteria to filter data that isn't connected to a database.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
// Creates criteria that shows the rows where the value in column B is less than the value in
// column C and sets it to column A.
let formula = "=B:B<C:C";
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenFormulaSatisfied(formula)
                             .build();
filter.setColumnFilterCriteria(1, criteria);
```
@param formula A custom formula that evaluates to `true` if the input is valid.
@return This builder, for chaining.*/whenFormulaSatisfied(formula:string):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets the filter criteria to show cells with a number that falls between, or is either of, 2
specified numbers.

You can use this criteria with any type of filter. If you use this criteria with data that's
connected to a database, the data type of the column you're filtering by must be a number. If
the data isn't connected to a database, the data type of the column you're filtering by doesn't
need to be a number, but if it's not, you might get unexpected results.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
// Creates criteria that only shows cells with numbers that fall between 1-25, inclusively,
// and sets it to column A.
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenNumberBetween(1, 25)
                             .build();
filter.setColumnFilterCriteria(1, criteria);
```
@param start The lowest number to show.
@param end The highest number to show.
@return This builder, for chaining.*/whenNumberBetween(start:number,end:number):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets the filter criteria to show cells with a number that's equal to the specified number.

You can use this criteria with any type of filter. If you use this criteria with data that's
connected to a database, the data type of the column you're filtering by must be a number. If
the data isn't connected to a database, the data type of the column you're filtering by doesn't
need to be a number, but if it's not, you might get unexpected results.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
// Creates criteria that only shows cells that are equal to 25 and sets it to column B.
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenNumberEqualTo(25)
                             .build();
filter.setColumnFilterCriteria(2, criteria);
```
@param number The number to show.
@return This builder, for chaining.*/whenNumberEqualTo(number:number):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets the filter criteria to show cells with a number that's equal to any of the specified
numbers.

You can only use this criteria with data connected to a database. For example, use this
criteria with filters on a [`DataSource`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html) sheet, a sheet that's connected to a
database, or a [`DataSourcePivotTable`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-pivot-table.html), a pivot table created from a [`DataSource`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html) sheet.

```
// Gets the sheet that's connected to a database.
let ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data Sheet");
let dataSheet = ss.asDataSourceSheet();
// Adds criteria to the "amount" column that only shows cells with the number 10, 20, or 30.
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenNumberEqualToAny([10,20,30])
                             .build();
dataSheet.addFilter("amount", criteria);
```
@param numbers The numbers to show.
@return This builder, for chaining.*/whenNumberEqualToAny(numbers:number[]):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets the filter criteria to show cells with a number greater than the specified number

You can use this criteria with any type of filter. If you use this criteria with data that's
connected to a database, the data type of the column you're filtering by must be a number. If
the data isn't connected to a database, the data type of the column you're filtering by doesn't
need to be a number, but if it's not, you might get unexpected results.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
// Creates criteria that shows cells greater than 10 and sets it to column B.
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenNumberGreaterThan(10)
                             .build();
filter.setColumnFilterCriteria(2, criteria);
```
@param number The highest number to hide.
@return This builder, for chaining.*/whenNumberGreaterThan(number:number):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets the filter criteria to show cells with a number greater than or equal to the specified
number.

You can use this criteria with any type of filter. If you use this criteria with data that's
connected to a database, the data type of the column you're filtering by must be a number. If
the data isn't connected to a database, the data type of the column you're filtering by doesn't
need to be a number, but if it's not, you might get unexpected results.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
// Creates criteria that shows cells greater than or equal to 10 and sets it to column B.
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenNumberGreaterThanOrEqualTo(10)
                             .build();
filter.setColumnFilterCriteria(2, criteria);
```
@param number The lowest number to show.
@return This builder, for chaining.*/whenNumberGreaterThanOrEqualTo(number:number):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets the filter criteria to show cells with a number that's less than the specified number.

You can use this criteria with any type of filter. If you use this criteria with data that's
connected to a database, the data type of the column you're filtering by must be a number. If
the data isn't connected to a database, the data type of the column you're filtering by doesn't
need to be a number, but if it's not, you might get unexpected results.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
// Creates criteria that shows cells less than 10 and sets it to column B.
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenNumberLessThan(10)
                             .build();
filter.setColumnFilterCriteria(2, criteria);
```
@param number The lowest number to hide.
@return This builder, for chaining.*/whenNumberLessThan(number:number):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets the filter criteria to show cells with a number less than or equal to the specified
number.

You can use this criteria with any type of filter. If you use this criteria with data that's
connected to a database, the data type of the column you're filtering by must be a number. If
the data isn't connected to a database, the data type of the column you're filtering by doesn't
need to be a number, but if it's not, you might get unexpected results.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
// Creates criteria that shows cells less than or equal to 10 and sets it to column B.
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenNumberLessThanOrEqualTo(10)
                             .build();
filter.setColumnFilterCriteria(2, criteria);
```
@param number The highest number to show.
@return This builder, for chaining.*/whenNumberLessThanOrEqualTo(number:number):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets the filter criteria to show cells with a number doesn't fall between, and is neither of, 2
specified numbers.

You can use this criteria with any type of filter. If you use this criteria with data that's
connected to a database, the data type of the column you're filtering by must be a number. If
the data isn't connected to a database, the data type of the column you're filtering by doesn't
need to be a number, but if it's not, you might get unexpected results.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
// Creates criteria that hides cells with numbers that fall between 1-25, inclusively,
// and sets it to column B.
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenNumberNotBetween(1, 25)
                             .build();
filter.setColumnFilterCriteria(2, criteria);
```
@param start The lowest number hide.
@param end The highest number to hide.
@return This builder, for chaining.*/whenNumberNotBetween(start:number,end:number):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets the filter criteria to show cells with a number that isn't equal to the specified number.

You can use this criteria with any type of filter. If you use this criteria with data that's
connected to a database, the data type of the column you're filtering by must be a number. If
the data isn't connected to a database, the data type of the column you're filtering by doesn't
need to be a number, but if it's not, you might get unexpected results.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
// Creates criteria that hides cells that are equal to 25 and sets it to column B.
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenNumberNotEqualTo(25)
                             .build();
filter.setColumnFilterCriteria(2, criteria);
```
@param number The number to hide.
@return This builder, for chaining.*/whenNumberNotEqualTo(number:number):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets the filter criteria to show cells with a number that isn't equal to any of the specified
numbers.

You can only use this criteria with data connected to a database. For example, use this
criteria with filters on a [`DataSource`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html) sheet, a sheet that's connected to a
database, or a [`DataSourcePivotTable`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-pivot-table.html), a pivot table created from a [`DataSource`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html) sheet.

```
// Gets the sheet that's connected to a database.
let ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data Sheet");
let dataSheet = ss.asDataSourceSheet();
// Adds criteria to the "amount" column that hides cells with the number 10, 20, or 30.
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenNumberNotEqualToAny([10,20,30])
                             .build();
dataSheet.addFilter("amount", criteria);
```
@param numbers The numbers to hide.
@return This builder, for chaining.*/whenNumberNotEqualToAny(numbers:number[]):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets the filter criteria to show cells with text that contains the specified text. The text
isn't case-sensitive.

You can use this criteria with any type of filter.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
// Creates criteria that shows cells that contain "Northwest" and sets it to column B.
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenTextContains("Northwest")
                             .build();
filter.setColumnFilterCriteria(2, criteria);
```
@param text The text that the cell must contain.
@return This builder, for chaining.*/whenTextContains(text:string):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets the filter criteria to show cells with text that doesn't contain the specified text. The
text isn't case-sensitive.

You can use this criteria with any type of filter.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
// Creates criteria that hides cells that contain "Northwest" and sets it to column B.
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenTextDoesNotContain("Northwest")
                             .build();
filter.setColumnFilterCriteria(2, criteria);
```
@param text The text that the cell must not contain.
@return This builder, for chaining.*/whenTextDoesNotContain(text:string):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets the filter criteria to show cells with text that ends with the specified text. The text
isn't case-sensitive.

You can use this criteria with any type of filter.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
// Creates criteria that shows cells with text that ends with "est" and sets it to column B.
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenTextEndsWith("est")
                             .build();
filter.setColumnFilterCriteria(2, criteria);
```
@param text Text that the end of the cell's text must contain.
@return This builder, for chaining.*/whenTextEndsWith(text:string):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets the filter criteria to show cells with text that's equal to the specified text. The text
isn't case-sensitive.

You can use this criteria with any type of filter.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
// Creates criteria that shows cells with text that equals "hello" and sets it to column B.
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenTextEqualTo("hello")
                             .build();
filter.setColumnFilterCriteria(2, criteria);
```
@param text The text that the cell's text must equal.
@return This builder, for chaining.*/whenTextEqualTo(text:string):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets the filter criteria to show cells with text that's equal to any of the specified text
values. The text isn't case-sensitive.

You can only use this criteria with data connected to a database. For example, use this
criteria with filters on a [`DataSource`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html) sheet, a sheet that's connected to a
database, or a [`DataSourcePivotTable`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-pivot-table.html), a pivot table created from a [`DataSource`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html) sheet.

```
// Gets the sheet that's connected to a database.
let ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data Sheet");
let dataSheet = ss.asDataSourceSheet();
// Adds criteria to the "category" column that shows cells with the text "tech" or "business."
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenTextEqualToAny(["tech","business"])
                             .build();
dataSheet.addFilter("category", criteria);
```
@param texts The text values that a cell must equal.
@return This builder, for chaining.*/whenTextEqualToAny(texts:string[]):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets the filter criteria to show cells with text that isn't equal to the specified text. The
text isn't case-sensitive.

You can only use this criteria with data connected to a database. For example, use this
criteria with filters on a [`DataSource`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html) sheet, a sheet that's connected to a
database, or a [`DataSourcePivotTable`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-pivot-table.html), a pivot table created from a [`DataSource`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html) sheet.

```
// Gets the sheet that's connected to a database.
let ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data Sheet");
let dataSheet = ss.asDataSourceSheet();
// Adds criteria to the "category" column that hides cells with text equal to "tech."
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenTextNotEqualTo("tech")
                             .build();
dataSheet.addFilter("category", criteria);
```
@param text The text that the cell's text can't equal.
@return This builder, for chaining.*/whenTextNotEqualTo(text:string):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets the filter criteria to show cells with text that isn't equal to any of the specified
values. The text isn't case-sensitive.

You can only use this criteria with data connected to a database. For example, use this
criteria with filters on a [`DataSource`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html) sheet, a sheet that's connected to a
database, or a [`DataSourcePivotTable`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-pivot-table.html), a pivot table created from a [`DataSource`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html) sheet.

```
// Gets the sheet that's connected to a database.
let ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data Sheet");
let dataSheet = ss.asDataSourceSheet();
// Adds criteria to the "category" column that hides cells with the text "tech" or "business."
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenTextNotEqualToAny(["tech","business"])
                             .build();
dataSheet.addFilter("category", criteria);
```
@param texts The text values that a cell can't equal.
@return This builder, for chaining.*/whenTextNotEqualToAny(texts:string[]):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets the filter criteria to show cells with text that starts with the specified text. The text
isn't case-sensitive.

You can use this criteria with any type of filter.

```
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
// Creates criteria that shows cells with text that starts with "pre" and sets it to column B.
let criteria = SpreadsheetApp.newFilterCriteria()
                             .whenTextStartsWith("pre")
                             .build();
filter.setColumnFilterCriteria(2, criteria);
```
@param text Text that the start of the cell's text must contain.
@return This builder, for chaining.*/whenTextStartsWith(text:string):SpreadsheetApp.FilterCriteriaBuilder;
/**Sets the filter criteria to a boolean condition defined by [`BooleanCriteria`](https://developers.google.com/apps-script/reference/spreadsheet/boolean-criteria.html) values, such
as `CELL_EMPTY` or `NUMBER_GREATER_THAN`. To copy the boolean condition from
existing criteria, define the parameters for this method using [`getCriteriaType()`](https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html#getCriteriaType()) and [`getCriteriaValues()`](https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html#getCriteriaValues()) on an
existing criteria.

You can use this criteria with any type of filter, but some [`BooleanCriteria`](https://developers.google.com/apps-script/reference/spreadsheet/boolean-criteria.html) aren't
applicable for all filters.

```
// Builds a filter criteria that is based on existing boolean conditions from another criteria.
// Gets the existing filter on the sheet.
const ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
// Gets the existing boolean conditions applied to Column B and adds criteria to column C that
// has the same boolean conditions and additional criteria that hides the value, "Northwest."
let filter = ss.getFilter();
let filterCriteria = filter.getColumnFilterCriteria(2);
let criteria = SpreadsheetApp.newFilterCriteria()
    .withCriteria(filterCriteria.getCriteriaType(), filterCriteria.getCriteriaValues())
    .setHiddenValues(["Northwest"])
    .build();
filter.setColumnFilterCriteria(3, criteria);
```
@param criteria The type of boolean criteria.
@param args An array of arguments appropriate to the criteria type; the number of arguments and
    their type match the corresponding `when...()` methods above.
@return This builder, for chaining.*/withCriteria(criteria:SpreadsheetApp.BooleanCriteria,args:Object[]):SpreadsheetApp.FilterCriteriaBuilder;}interface FilterCriteria{
/**Copies this filter criteria and creates a criteria builder that you can apply to another
filter.

You can use this method with any type of filter. If you're using a sheet filter, you can
copy the criteria to another column.

```
let ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
// Makes a copy of the filter criteria applied to column C.
let criteria = filter.getColumnFilterCriteria(3).copy().build();
// Applies the copied criteria to column B. The copied criteria overwrites any existing
// criteria on column B.
filter.setColumnFilterCriteria(2, criteria);
```
@return A filter criteria builder based on this filter criteria.*/copy():SpreadsheetApp.FilterCriteriaBuilder;
/**Returns the criteria's boolean type, for example, `CELL_EMPTY`. To learn about the types
of boolean criteria, see the [`BooleanCriteria`](https://developers.google.com/apps-script/reference/spreadsheet/boolean-criteria.html) enum.

People often use this method to add boolean condition criteria to a filter without replacing
existing criteria.

  + To get the arguments for the criteria, use [`getCriteriaValues()`](https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria.html#getCriteriaValues()).
  + To use the criteria type and criteria values to create or modify filter criteria, see
      [`FilterCriteriaBuilder.withCriteria(criteria, args)`](https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html#withCriteria(BooleanCriteria,Object)).

You can use this method for any type of filter. If the filter criteria isn't a boolean
condition, returns `null`.

```
let ss = SpreadsheetApp.getActiveSheet();
// Gets the filter on the active sheet.
let filter = ss.getFilter();
// Gets the criteria type and returns a string representing the criteria type object.
let criteriaType = filter.getColumnFilterCriteria(2)
                         .getCriteriaType()
                         .toString();
// Logs the criteria type.
console.log(criteriaType);
```
@return The type of boolean criteria, or `null` if the criteria isn't a boolean
    condition.*/getCriteriaType():SpreadsheetApp.BooleanCriteria;
/**Returns an array of arguments for boolean criteria. Some boolean criteria types don't have
arguments and return an empty array, for example, `CELL_NOT_EMPTY`.

People often use this method to add boolean condition criteria to a filter without replacing
existing criteria.

<ul>
  + To get the boolean criteria type, use [`getCriteriaType()`](https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria.html#getCriteriaType()).
  + To use the criteria type and criteria values to create or modify a filter criteria, see
      [`FilterCriteriaBuilder.withCriteria(criteria, args)`](https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html#withCriteria(BooleanCriteria,Object)).
      

You can use this method for any type of filter.
      

```
let ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
// Gets the values of the boolean criteria and logs them. For example, if the boolean
// condition is whenNumberGreaterThan(10), then the logged value is 10.
let criteriaValues = filter.getColumnFilterCriteria(2).getCriteriaValues();
console.log(criteriaValues);
```
@return An array of arguments appropriate to the boolean criteria type. The number of arguments
    and their type match the corresponding `when...()` method of the [`FilterCriteriaBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html) class.*/getCriteriaValues():Object[];
/**Returns the values that the filter hides.

Use this criteria with filters on [`Grid`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html) sheets, the default type of sheet.
Returns `null` if you call this method for other types of filters.

```
let ss = SpreadsheetApp.getActiveSheet();
let range = ss.getRange("A1:C20");
let filter = range.getFilter();
// Gets the filter criteria applied to column B, then gets the hidden values.
let filterCriteria = filter.getColumnFilterCriteria(2).getHiddenValues();
// Logs the hidden values.
console.log(filterCriteria);
```
@return An array of values that the filter hides.*/getHiddenValues():string[];
/**Returns the background color used as filter criteria. Cells with this background color remain
visible.

Use this criteria with filters on [`Grid`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html) sheets, the default type of sheet.
Returns `null` if you call this method for other types of filters.

```
let ss = SpreadsheetApp.getActiveSheet();
let range = ss.getRange("A1:C20");
// Logs the background color that column B is filtered by as a hexadecimal string.
let filter = range.getFilter();
let color = filter.getColumnFilterCriteria(2)
                  .getVisibleBackgroundColor()
                  .asRgbColor()
                  .asHexString();
console.log(color);
```
@return The background color used as filter criteria.*/getVisibleBackgroundColor():SpreadsheetApp.Color;
/**Returns the foreground color used as a filter criteria. Cells with this foreground color remain
visible.

Use this criteria with filters on [`Grid`](https://developers.google.com/apps-script/reference/spreadsheet/sheet-type.html) sheets, the default type of sheet.
Returns `null` if you call this method for other types of filters.

```
let ss = SpreadsheetApp.getActiveSheet();
let range = ss.getRange("A1:C20");
// Logs the foreground color that column B is filtered by as a hexadecimal string.
let filter = range.getFilter();
let color = filter.getColumnFilterCriteria(2)
                  .getVisibleForegroundColor()
                  .asRgbColor()
                  .asHexString();
console.log(color);
```
@return The foreground color used as a filter criteria.*/getVisibleForegroundColor():SpreadsheetApp.Color;
/**Returns the values that the pivot table filter shows.

This criteria is only for filters on pivot tables that aren't connected to a database.
Returns an empty array for other types of filters.

```
let ss = SpreadsheetApp.getActiveSheet();
// Gets the first pivot table on the sheet, then gets the visible values of its first filter.
pivotTable = ss.getPivotTables()[0];
pivotFilterValues = pivotTable.getFilters()[0].getFilterCriteria().getVisibleValues();
// Logs the visible values.
console.log(pivotFilterValues);
```
@return An array of values that the pivot table filter shows.*/getVisibleValues():string[];}interface Filter{
/**Gets the filter criteria on the specified column, or `null` if the column doesn't have
filter criteria applied to it.

To get more details about the filter criteria, chain this method with methods from the
[`FilterCriteria`](https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria.html) class.

```
let ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
  // Gets the filter criteria applied to column B of the active sheet
  // and logs the hidden values.
let filterCriteria = filter.getColumnFilterCriteria(2).getHiddenValues();
console.log(filterCriteria);
```
@param columnPosition The 1-indexed position of the column. For example, column B's index is 2.
@return The filter criteria.*/getColumnFilterCriteria(columnPosition:Integer):SpreadsheetApp.FilterCriteria;
/**Gets the range this filter applies to.

```
// Gets the existing filter on the active sheet.
let ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
// Logs the range that the filter applies to in A1 notation.
console.log(filter.getRange().getA1Notation());
```
@return The filter's range. To get the range in A1 notation, chain this method with [`Range.getA1Notation()`](https://developers.google.com/apps-script/reference/spreadsheet/range.html#getA1Notation()).*/getRange():SpreadsheetApp.Range;
/**Removes this filter.

```
// Removes the filter from the active sheet.
let ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
filter.remove();
```*/remove():void;
/**Removes the filter criteria from the specified column.

```
// Removes the filter criteria from column B.
let ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
filter.removeColumnFilterCriteria(2);
```
@param columnPosition The 1-indexed position of the column. For example, column B's index is 2.
@return The filter, for chaining.*/removeColumnFilterCriteria(columnPosition:Integer):SpreadsheetApp.Filter;
/**Sets the filter criteria on the specified column. First, create the filter criteria builder
using [`SpreadsheetApp.newFilterCriteria()`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app.html#newFilterCriteria()). Then add criteria to the builder
using the [`FilterCriteriaBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder.html) class. After you've built your criteria, set it as the
`filterCriteria` parameter for this method.

```
let ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
// Builds the filter criteria to use as a parameter for setColumnFilterCriteria.
const criteria = SpreadsheetApp.newFilterCriteria()
                             .setHiddenValues(["Hello", "World"])
                             .build();
// Sets the filter criteria for column C.
filter.setColumnFilterCriteria(3, criteria);
```
@param columnPosition The 1-indexed position of the column. For example, column B's index is 2.
@param filterCriteria The filter criteria to set. If you set the criteria to `null`, it
    removes filter criteria from the specified column. You can also use [`removeColumnFilterCriteria(columnPosition)`](https://developers.google.com/apps-script/reference/spreadsheet/filter.html#removeColumnFilterCriteria(Integer)).
@return The filter, for chaining.*/setColumnFilterCriteria(columnPosition:Integer,filterCriteria:SpreadsheetApp.FilterCriteria):SpreadsheetApp.Filter;
/**Sorts the filtered range by the specified column, excluding the first row (the header row) in
the range this filter applies to.

```
// Gets the existing filter and sorts it by column B in ascending order.
let ss = SpreadsheetApp.getActiveSheet();
let filter = ss.getFilter();
filter.sort(2, true);
```
@param columnPosition The 1-indexed position of the column. For example, column B's index is 2.
@param ascending If `true`, sorts the filtered range in ascending order; if `false`, sorts the filtered range in descending order.
@return The filter, for chaining.*/sort(columnPosition:Integer,ascending:boolean):SpreadsheetApp.Filter;
/**If the filter sorts the specified column, gets the sort specification, or `null` if the
filter doesn't sort the column.
@param columnPosition The 1-indexed position of the column. For example, column B's index is 2.
@return The sort specification.*/getColumnSortSpec(columnPosition:Integer):SpreadsheetApp.SortSpec;}interface EmbeddedTableChartBuilder{
/**Adds a range to the chart this builder modifies. Does not add the range if it has already been
added to the chart.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param range The range to add.
@return this builder, for chaining*/addRange(range:SpreadsheetApp.Range):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the chart type to AreaChart and returns an [`EmbeddedAreaChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html).
@return a builder for an area chart*/asAreaChart():SpreadsheetApp.EmbeddedAreaChartBuilder;
/**Sets the chart type to BarChart and returns an [`EmbeddedBarChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html).
@return a builder for a bar chart*/asBarChart():SpreadsheetApp.EmbeddedBarChartBuilder;
/**Sets the chart type to ColumnChart and returns an [`EmbeddedColumnChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html).
@return a builder for a column chart*/asColumnChart():SpreadsheetApp.EmbeddedColumnChartBuilder;
/**Sets the chart type to ComboChart and returns an [`EmbeddedComboChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html).
@return a builder for a combo chart*/asComboChart():SpreadsheetApp.EmbeddedComboChartBuilder;
/**Sets the chart type to HistogramChart and returns an [`EmbeddedHistogramChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html).
@return a builder for a histogram chart*/asHistogramChart():SpreadsheetApp.EmbeddedHistogramChartBuilder;
/**Sets the chart type to LineChart and returns an [`EmbeddedLineChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html).
@return a builder for a line chart*/asLineChart():SpreadsheetApp.EmbeddedLineChartBuilder;
/**Sets the chart type to PieChart and returns an [`EmbeddedPieChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html).
@return a builder for a pie chart*/asPieChart():SpreadsheetApp.EmbeddedPieChartBuilder;
/**Sets the chart type to ScatterChart and returns an [`EmbeddedScatterChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html).
@return a builder for a scatter chart*/asScatterChart():SpreadsheetApp.EmbeddedScatterChartBuilder;
/**Sets the chart type to TableChart and returns an [`EmbeddedTableChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html).
@return a builder for a table chart*/asTableChart():SpreadsheetApp.EmbeddedTableChartBuilder;
/**Builds the chart to reflect all changes made to it.

This method does not automatically draw the chart on top of the spreadsheet. A new chart
must be inserted via `sheet.insertChart(chart)`, and an existing chart should be updated
via `sheet.updateChart(chart)`.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@return the created chart, which must still be added to the spreadsheet*/build():SpreadsheetApp.EmbeddedChart;
/**Removes all ranges from the chart this builder modifies.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This code updates the chart to use only the new ranges while preserving the existing
// formatting of the chart.
var chart = sheet.getCharts()[0];
var newChart = chart
    .modify()
    .clearRanges()
    .addRange(sheet.getRange("A1:A5"))
    .addRange(sheet.getRange("B1:B5"))
    .build();
sheet.updateChart(newChart);
```
@return this builder, for chaining*/clearRanges():SpreadsheetApp.EmbeddedChartBuilder;
/**Sets whether to enable paging through the data.

The default behavior is paging disabled. If paging is enabled the default page size is 10.
@param enablePaging `true` if paging should be enabled, `false` otherwise.
@return This builder, useful for chaining.*/enablePaging(enablePaging:boolean):SpreadsheetApp.EmbeddedTableChartBuilder;
/**Enables paging and sets the number of rows in each page.

The default page size is 10.

```
// Creates a table chart builder and enables paging with page size of 5.
var builder = Charts.newTableChart();
builder.enablePaging(5);
```
@param pageSize The number of rows in each page of the table.
@return This builder, useful for chaining.*/enablePaging(pageSize:Integer):SpreadsheetApp.EmbeddedTableChartBuilder;
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
@return This builder, useful for chaining.*/enablePaging(pageSize:Integer,startPage:Integer):SpreadsheetApp.EmbeddedTableChartBuilder;
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
@return This builder, useful for chaining.*/enableRtlTable(rtlEnabled:boolean):SpreadsheetApp.EmbeddedTableChartBuilder;
/**Sets whether to sort columns when the user clicks a column heading.

If sorting is enabled, when users click on the column header the rows are automatically
sorted. The default behavior is sorting enabled.
@param enableSorting `true` to enable sorting by clicking on column headers, `false` otherwise.
@return This builder, useful for chaining.*/enableSorting(enableSorting:boolean):SpreadsheetApp.EmbeddedTableChartBuilder;
/**Returns the current chart type.
@return the chart type*/getChartType():Charts.ChartType;
/**Return the chart [`ContainerInfo`](https://developers.google.com/apps-script/reference/spreadsheet/container-info.html), which encapsulates where the chart appears on the
sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0);

// This method returns the exact same data as Chart#getContainerInfo()
var containerInfo = chartBuilder.getContainer();

// Logs the values we used in setPosition()
Logger.log("Anchor Column: %s\r
Anchor Row %s\r
Offset X %s\r
Offset Y %s",
          containerInfo.getAnchorColumn(),
          containerInfo.getAnchorRow(),
          containerInfo.getOffsetX(),
          containerInfo.getOffsetY());
```
@return an object containing the chart container's position*/getContainer():SpreadsheetApp.ContainerInfo;
/**Returns a copy of the list of ranges currently providing data for this chart. Use [`addRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html#addRange(Range)) and [`removeRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html#removeRange(Range)) to modify this list.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0);

var ranges = chartBuilder.getRanges();

// There's only one range as a data source for this chart,
// so this logs "A1:B8"
for (var i in ranges) {
  var range = ranges[i];
  Logger.log(range.getA1Notation());
}
```
@return an array of ranges that serve as the chart to be built's data source*/getRanges():SpreadsheetApp.Range[];
/**Removes the specified range from the chart this builder modifies. Does not throw an error if
the range is not in this chart.

The range removed must match up with a range added via [`addRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html#addRange(Range));
otherwise no change is made to the chart. This method cannot be used to partially remove values
from a range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var firstRange = sheet.getRange("A1:B5");
var secondRange = sheet.getRange("A6:B8");

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(firstRange)
    // This range will render in a different color
    .addRange(secondRange)
    .setPosition(5, 5, 0, 0);

// Note that you can use either of these two formats, but the range
// MUST match up with a range that was added via addRange(), or it
// will not be removed, and will not throw an exception
chartBuilder.removeRange(firstRange);
chartBuilder.removeRange(sheet.getRange("A6:B8"));

var chart = chartBuilder.build();

sheet.insertChart(chart);
```
@param range The range to remove.
@return this builder, for chaining*/removeRange(range:SpreadsheetApp.Range):SpreadsheetApp.EmbeddedChartBuilder;
/**Changes the type of chart. Not all embedded chart types are currently supported. See [`ChartType`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param type The type to change this chart into.
@return this builder, for chaining*/setChartType(type:Charts.ChartType):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the row number for the first row in the data table.

The default row number of the first row is 1.

```
// Creates a table chart builder and sets the first row to be 2.
var builder = Charts.newTableChart();
builder.setFirstRowNumber(2);
```
@param number The row number for the first row in the data table.
@return This builder, useful for chaining.*/setFirstRowNumber(number:Integer):SpreadsheetApp.EmbeddedTableChartBuilder;
/**Sets the strategy to use for hidden rows and columns. Defaults to [`IGNORE_ROWS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param strategy The strategy to use for hidden rows and columns.
@return this builder, for chaining*/setHiddenDimensionStrategy(strategy:Charts.ChartHiddenDimensionStrategy):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the index of the column according to which the table should be initially sorted
(ascending).

The column os sorted in ascending order and is marked with a small arrow indicating that.

```
// Creates a table chart builder and sorts it by the second column (ascending).
var builder = Charts.newTableChart();
builder.setInitialSortingAscending(2);
```
@param column The number of the column according to which the table should be initially sorted.
@return This builder, useful for chaining.*/setInitialSortingAscending(column:Integer):SpreadsheetApp.EmbeddedTableChartBuilder;
/**Sets the index of the column according to which the table should be initially sorted
(descending).

The column os sorted in descending order and is marked with a a small arrow indicating that.

```
// Creates a table chart builder and sorts it by the second column (descending).
var builder = Charts.newTableChart();
builder.setInitialSortingDescending(2);
```
@param column The number of the column according to which the table should be initially sorted.
@return This builder, useful for chaining.*/setInitialSortingDescending(column:Integer):SpreadsheetApp.EmbeddedTableChartBuilder;
/**Sets the merge strategy to use when more than one range exists. If [`MERGE_ROWS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html), rows are merged; if [`MERGE_COLUMNS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html), columns are merged. Defaults to [`MERGE_COLUMNS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B10");
var range2 = sheet.getRange("C:C10");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .addRange(range2)
    .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param mergeStrategy The merge strategy to use.
@return this builder, for chaining*/setMergeStrategy(mergeStrategy:Charts.ChartMergeStrategy):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the number of rows or columns of the range that should be treated as headers.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setNumHeaders(1)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param headers The number of rows or columns to treat as headers. Negative values cause headers
    to be auto-detected.
@return this builder, for chaining*/setNumHeaders(headers:Integer):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets advanced options for this chart. To view a list of the available options, see [Chart
configuration options](https://developers.google.com/apps-script/chart-configuration-options).

This method doesn't validate the option you specify is valid for this chart type nor if the
value is of the correct format/structure.

This example shows how to change the title and set a legend.

```
builder.setOption('title', 'Earnings projections');
builder.setOption('legend', {position: 'top', textStyle: {color: 'blue', fontSize: 16}});
```
@param option The name of the option.
@param value The value of the option.
@return This builder, for chaining.*/setOption(option:string,value:Object):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the position, changing where the chart appears on the sheet. `anchorRowPos` and
`anchorColPos` are 1-indexed.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param anchorRowPos The chart's top side is anchored in this row.
@param anchorColPos The chart's left side is anchored in this column.
@param offsetX The chart's upper right-hand corner is offset by this many pixels.
@param offsetY The chart's lower left-hand corner is offset by this many pixels.
@return this builder, for chaining*/setPosition(anchorRowPos:Integer,anchorColPos:Integer,offsetX:Integer,offsetY:Integer):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets whether the chart's rows and columns are transposed. If set to `true`, the rows and
columns are switched. Defaults to `false`.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setTransposeRowsAndColumns(true)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param transpose If `true`, the rows and columns used to construct the chart are
    transposed.
@return this builder, for chaining*/setTransposeRowsAndColumns(transpose:boolean):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets whether to show the row number as the first column of the table.

The default behavior is not showing row numbers.
@param showRowNumber `true` if the first column of the table should show the row number,
    `false` otherwise.
@return This builder, useful for chaining.*/showRowNumberColumn(showRowNumber:boolean):SpreadsheetApp.EmbeddedTableChartBuilder;
/**Sets whether alternating color style is assigned to odd and even rows of a table chart.

The default behavior is the rows having alternating color style.
@param alternate `true` if color styles should be alternating, `false` otherwise.
@return This builder, useful for chaining.*/useAlternatingRowStyle(alternate:boolean):SpreadsheetApp.EmbeddedTableChartBuilder;}interface EmbeddedScatterChartBuilder{
/**Adds a range to the chart this builder modifies. Does not add the range if it has already been
added to the chart.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param range The range to add.
@return this builder, for chaining*/addRange(range:SpreadsheetApp.Range):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the chart type to AreaChart and returns an [`EmbeddedAreaChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html).
@return a builder for an area chart*/asAreaChart():SpreadsheetApp.EmbeddedAreaChartBuilder;
/**Sets the chart type to BarChart and returns an [`EmbeddedBarChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html).
@return a builder for a bar chart*/asBarChart():SpreadsheetApp.EmbeddedBarChartBuilder;
/**Sets the chart type to ColumnChart and returns an [`EmbeddedColumnChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html).
@return a builder for a column chart*/asColumnChart():SpreadsheetApp.EmbeddedColumnChartBuilder;
/**Sets the chart type to ComboChart and returns an [`EmbeddedComboChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html).
@return a builder for a combo chart*/asComboChart():SpreadsheetApp.EmbeddedComboChartBuilder;
/**Sets the chart type to HistogramChart and returns an [`EmbeddedHistogramChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html).
@return a builder for a histogram chart*/asHistogramChart():SpreadsheetApp.EmbeddedHistogramChartBuilder;
/**Sets the chart type to LineChart and returns an [`EmbeddedLineChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html).
@return a builder for a line chart*/asLineChart():SpreadsheetApp.EmbeddedLineChartBuilder;
/**Sets the chart type to PieChart and returns an [`EmbeddedPieChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html).
@return a builder for a pie chart*/asPieChart():SpreadsheetApp.EmbeddedPieChartBuilder;
/**Sets the chart type to ScatterChart and returns an [`EmbeddedScatterChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html).
@return a builder for a scatter chart*/asScatterChart():SpreadsheetApp.EmbeddedScatterChartBuilder;
/**Sets the chart type to TableChart and returns an [`EmbeddedTableChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html).
@return a builder for a table chart*/asTableChart():SpreadsheetApp.EmbeddedTableChartBuilder;
/**Builds the chart to reflect all changes made to it.

This method does not automatically draw the chart on top of the spreadsheet. A new chart
must be inserted via `sheet.insertChart(chart)`, and an existing chart should be updated
via `sheet.updateChart(chart)`.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@return the created chart, which must still be added to the spreadsheet*/build():SpreadsheetApp.EmbeddedChart;
/**Removes all ranges from the chart this builder modifies.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This code updates the chart to use only the new ranges while preserving the existing
// formatting of the chart.
var chart = sheet.getCharts()[0];
var newChart = chart
    .modify()
    .clearRanges()
    .addRange(sheet.getRange("A1:A5"))
    .addRange(sheet.getRange("B1:B5"))
    .build();
sheet.updateChart(newChart);
```
@return this builder, for chaining*/clearRanges():SpreadsheetApp.EmbeddedChartBuilder;
/**Returns the current chart type.
@return the chart type*/getChartType():Charts.ChartType;
/**Return the chart [`ContainerInfo`](https://developers.google.com/apps-script/reference/spreadsheet/container-info.html), which encapsulates where the chart appears on the
sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0);

// This method returns the exact same data as Chart#getContainerInfo()
var containerInfo = chartBuilder.getContainer();

// Logs the values we used in setPosition()
Logger.log("Anchor Column: %s\r
Anchor Row %s\r
Offset X %s\r
Offset Y %s",
          containerInfo.getAnchorColumn(),
          containerInfo.getAnchorRow(),
          containerInfo.getOffsetX(),
          containerInfo.getOffsetY());
```
@return an object containing the chart container's position*/getContainer():SpreadsheetApp.ContainerInfo;
/**Returns a copy of the list of ranges currently providing data for this chart. Use [`addRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html#addRange(Range)) and [`removeRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html#removeRange(Range)) to modify this list.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0);

var ranges = chartBuilder.getRanges();

// There's only one range as a data source for this chart,
// so this logs "A1:B8"
for (var i in ranges) {
  var range = ranges[i];
  Logger.log(range.getA1Notation());
}
```
@return an array of ranges that serve as the chart to be built's data source*/getRanges():SpreadsheetApp.Range[];
/**Removes the specified range from the chart this builder modifies. Does not throw an error if
the range is not in this chart.

The range removed must match up with a range added via [`addRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html#addRange(Range));
otherwise no change is made to the chart. This method cannot be used to partially remove values
from a range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var firstRange = sheet.getRange("A1:B5");
var secondRange = sheet.getRange("A6:B8");

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(firstRange)
    // This range will render in a different color
    .addRange(secondRange)
    .setPosition(5, 5, 0, 0);

// Note that you can use either of these two formats, but the range
// MUST match up with a range that was added via addRange(), or it
// will not be removed, and will not throw an exception
chartBuilder.removeRange(firstRange);
chartBuilder.removeRange(sheet.getRange("A6:B8"));

var chart = chartBuilder.build();

sheet.insertChart(chart);
```
@param range The range to remove.
@return this builder, for chaining*/removeRange(range:SpreadsheetApp.Range):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the background color for the chart.

```
// Creates a line chart builder and sets the background color to gray
var builder = Charts.newLineChart();
builder.setBackgroundColor("gray");
```
@param cssValue The CSS value for the color (such as `"blue"` or `"#00f"`).
@return This builder, useful for chaining.*/setBackgroundColor(cssValue:string):SpreadsheetApp.EmbeddedScatterChartBuilder;
/**Changes the type of chart. Not all embedded chart types are currently supported. See [`ChartType`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param type The type to change this chart into.
@return this builder, for chaining*/setChartType(type:Charts.ChartType):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the colors for the lines in the chart.

```
// Creates a line chart builder and sets the first two lines to be drawn in green and red,
// respectively.
var builder = Charts.newLineChart();
builder.setColors(["green", "red"]);
```
@param cssValues An array of color CSS values, such as `["red", "#acf"]`. The nth element
    in the array represents the color of the nth line in the chart.
@return This builder, useful for chaining.*/setColors(cssValues:string[]):SpreadsheetApp.EmbeddedScatterChartBuilder;
/**Sets the strategy to use for hidden rows and columns. Defaults to [`IGNORE_ROWS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param strategy The strategy to use for hidden rows and columns.
@return this builder, for chaining*/setHiddenDimensionStrategy(strategy:Charts.ChartHiddenDimensionStrategy):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the position of the legend with respect to the chart. By default, there is no legend.

```
// Creates a line chart builder and sets the legend position to right.
var builder = Charts.newLineChart();
builder.setLegendPosition(Charts.Position.RIGHT);
```
@param position The position of the legend.
@return This builder, useful for chaining.*/setLegendPosition(position:Charts.Position):SpreadsheetApp.EmbeddedScatterChartBuilder;
/**Sets the text style of the chart legend.

```
// Creates a line chart builder and sets it up for a  blue, 26-point legend.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
var builder = Charts.newLineChart();
builder.setLegendTextStyle(style);
```
@param textStyle The text style to use for the chart legend.
@return This builder, useful for chaining.*/setLegendTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedScatterChartBuilder;
/**Sets the merge strategy to use when more than one range exists. If [`MERGE_ROWS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html), rows are merged; if [`MERGE_COLUMNS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html), columns are merged. Defaults to [`MERGE_COLUMNS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B10");
var range2 = sheet.getRange("C:C10");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .addRange(range2)
    .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param mergeStrategy The merge strategy to use.
@return this builder, for chaining*/setMergeStrategy(mergeStrategy:Charts.ChartMergeStrategy):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the number of rows or columns of the range that should be treated as headers.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setNumHeaders(1)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param headers The number of rows or columns to treat as headers. Negative values cause headers
    to be auto-detected.
@return this builder, for chaining*/setNumHeaders(headers:Integer):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets advanced options for this chart. To view a list of the available options, see [Chart
configuration options](https://developers.google.com/apps-script/chart-configuration-options).

This method doesn't validate the option you specify is valid for this chart type nor if the
value is of the correct format/structure.

This example shows how to change the title and set a legend.

```
builder.setOption('title', 'Earnings projections');
builder.setOption('legend', {position: 'top', textStyle: {color: 'blue', fontSize: 16}});
```
@param option The name of the option.
@param value The value of the option.
@return This builder, for chaining.*/setOption(option:string,value:Object):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the style for points in the line. By default, points have no particular styles, and only
the line is visible.

```
// Creates a line chart builder and sets large point style.
var builder = Charts.newLineChart();
builder.setPointStyle(Charts.PointStyle.LARGE);
```
@param style The style to use for points in the line.
@return This builder, useful for chaining.*/setPointStyle(style:Charts.PointStyle):SpreadsheetApp.EmbeddedScatterChartBuilder;
/**Sets the position, changing where the chart appears on the sheet. `anchorRowPos` and
`anchorColPos` are 1-indexed.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param anchorRowPos The chart's top side is anchored in this row.
@param anchorColPos The chart's left side is anchored in this column.
@param offsetX The chart's upper right-hand corner is offset by this many pixels.
@param offsetY The chart's lower left-hand corner is offset by this many pixels.
@return this builder, for chaining*/setPosition(anchorRowPos:Integer,anchorColPos:Integer,offsetX:Integer,offsetY:Integer):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the title of the chart. The title is displayed centered above the chart.

```
// Creates a line chart builder and title to 'My Line Chart'.
var builder = Charts.newLineChart();
builder.setTitle('My Line Chart')
```
@param chartTitle the chart title.
@return This builder, useful for chaining.*/setTitle(chartTitle:string):SpreadsheetApp.EmbeddedScatterChartBuilder;
/**Sets the text style of the chart title.

```
// Creates a line chart builder and sets it up for a  blue, 26-point title.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
var builder = Charts.newLineChart();
builder.setTitleTextStyle(style);
```
@param textStyle The text style to use for the chart title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setTitleTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedScatterChartBuilder;
/**Sets whether the chart's rows and columns are transposed. If set to `true`, the rows and
columns are switched. Defaults to `false`.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setTransposeRowsAndColumns(true)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param transpose If `true`, the rows and columns used to construct the chart are
    transposed.
@return this builder, for chaining*/setTransposeRowsAndColumns(transpose:boolean):SpreadsheetApp.EmbeddedChartBuilder;
/**Makes the horizontal axis into a logarithmic scale (requires all values to be positive).
@return This builder, useful for chaining.*/setXAxisLogScale():SpreadsheetApp.EmbeddedScatterChartBuilder;
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
@return This builder, useful for chaining.*/setXAxisRange(start:number,end:number):SpreadsheetApp.EmbeddedScatterChartBuilder;
/**Sets the horizontal axis text style.

```
// Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setXAxisTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setXAxisTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedScatterChartBuilder;
/**Adds a title to the horizontal axis. The title is centered and appears below the axis value
labels.

```
// Creates a line chart builder and sets the X-axis title.
var builder = Charts.newLineChart();
builder.setTitle('X-axis Title')
```
@param title The title for the X-axis.
@return This builder, useful for chaining.*/setXAxisTitle(title:string):SpreadsheetApp.EmbeddedScatterChartBuilder;
/**Sets the horizontal axis title text style.

```
// Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setXAxisTitleTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setXAxisTitleTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedScatterChartBuilder;
/**Makes the vertical axis into a logarithmic scale (requires all values to be positive).
@return This builder, useful for chaining.*/setYAxisLogScale():SpreadsheetApp.EmbeddedScatterChartBuilder;
/**Sets the range for the vertical axis of the chart. If any data points fall outside the range,
the range is expanded to include those data points.

```
// Creates a scatter chart builder and sets the Y-axis range to be 0 to 100.
var builder = Charts.newTableChart();
builder.setYAxisRange(0, 100);
```
@param start The value for the lowest grid line of the vertical axis.
@param end The value for the highest grid line of the vertical axis.
@return This builder, useful for chaining.*/setYAxisRange(start:number,end:number):SpreadsheetApp.EmbeddedScatterChartBuilder;
/**Sets the vertical axis text style.

```
// Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setYAxisTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setYAxisTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedScatterChartBuilder;
/**Adds a title to the vertical axis. The title is centered and appears to the left of the value
labels.

```
// Creates a line chart builder and sets the Y-axis title.
var builder = Charts.newLineChart();
builder.setYAxisTitle('Y-axis Title')
```
@param title The title for the Y-axis.
@return This builder, useful for chaining.*/setYAxisTitle(title:string):SpreadsheetApp.EmbeddedScatterChartBuilder;
/**Sets the vertical axis title text style.

```
// Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setYAxisTitleTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setYAxisTitleTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedScatterChartBuilder;}interface EmbeddedPieChartBuilder{
/**Adds a range to the chart this builder modifies. Does not add the range if it has already been
added to the chart.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param range The range to add.
@return this builder, for chaining*/addRange(range:SpreadsheetApp.Range):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the chart type to AreaChart and returns an [`EmbeddedAreaChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html).
@return a builder for an area chart*/asAreaChart():SpreadsheetApp.EmbeddedAreaChartBuilder;
/**Sets the chart type to BarChart and returns an [`EmbeddedBarChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html).
@return a builder for a bar chart*/asBarChart():SpreadsheetApp.EmbeddedBarChartBuilder;
/**Sets the chart type to ColumnChart and returns an [`EmbeddedColumnChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html).
@return a builder for a column chart*/asColumnChart():SpreadsheetApp.EmbeddedColumnChartBuilder;
/**Sets the chart type to ComboChart and returns an [`EmbeddedComboChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html).
@return a builder for a combo chart*/asComboChart():SpreadsheetApp.EmbeddedComboChartBuilder;
/**Sets the chart type to HistogramChart and returns an [`EmbeddedHistogramChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html).
@return a builder for a histogram chart*/asHistogramChart():SpreadsheetApp.EmbeddedHistogramChartBuilder;
/**Sets the chart type to LineChart and returns an [`EmbeddedLineChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html).
@return a builder for a line chart*/asLineChart():SpreadsheetApp.EmbeddedLineChartBuilder;
/**Sets the chart type to PieChart and returns an [`EmbeddedPieChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html).
@return a builder for a pie chart*/asPieChart():SpreadsheetApp.EmbeddedPieChartBuilder;
/**Sets the chart type to ScatterChart and returns an [`EmbeddedScatterChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html).
@return a builder for a scatter chart*/asScatterChart():SpreadsheetApp.EmbeddedScatterChartBuilder;
/**Sets the chart type to TableChart and returns an [`EmbeddedTableChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html).
@return a builder for a table chart*/asTableChart():SpreadsheetApp.EmbeddedTableChartBuilder;
/**Builds the chart to reflect all changes made to it.

This method does not automatically draw the chart on top of the spreadsheet. A new chart
must be inserted via `sheet.insertChart(chart)`, and an existing chart should be updated
via `sheet.updateChart(chart)`.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@return the created chart, which must still be added to the spreadsheet*/build():SpreadsheetApp.EmbeddedChart;
/**Removes all ranges from the chart this builder modifies.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This code updates the chart to use only the new ranges while preserving the existing
// formatting of the chart.
var chart = sheet.getCharts()[0];
var newChart = chart
    .modify()
    .clearRanges()
    .addRange(sheet.getRange("A1:A5"))
    .addRange(sheet.getRange("B1:B5"))
    .build();
sheet.updateChart(newChart);
```
@return this builder, for chaining*/clearRanges():SpreadsheetApp.EmbeddedChartBuilder;
/**Returns the current chart type.
@return the chart type*/getChartType():Charts.ChartType;
/**Return the chart [`ContainerInfo`](https://developers.google.com/apps-script/reference/spreadsheet/container-info.html), which encapsulates where the chart appears on the
sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0);

// This method returns the exact same data as Chart#getContainerInfo()
var containerInfo = chartBuilder.getContainer();

// Logs the values we used in setPosition()
Logger.log("Anchor Column: %s\r
Anchor Row %s\r
Offset X %s\r
Offset Y %s",
          containerInfo.getAnchorColumn(),
          containerInfo.getAnchorRow(),
          containerInfo.getOffsetX(),
          containerInfo.getOffsetY());
```
@return an object containing the chart container's position*/getContainer():SpreadsheetApp.ContainerInfo;
/**Returns a copy of the list of ranges currently providing data for this chart. Use [`addRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html#addRange(Range)) and [`removeRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html#removeRange(Range)) to modify this list.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0);

var ranges = chartBuilder.getRanges();

// There's only one range as a data source for this chart,
// so this logs "A1:B8"
for (var i in ranges) {
  var range = ranges[i];
  Logger.log(range.getA1Notation());
}
```
@return an array of ranges that serve as the chart to be built's data source*/getRanges():SpreadsheetApp.Range[];
/**Removes the specified range from the chart this builder modifies. Does not throw an error if
the range is not in this chart.

The range removed must match up with a range added via [`addRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html#addRange(Range));
otherwise no change is made to the chart. This method cannot be used to partially remove values
from a range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var firstRange = sheet.getRange("A1:B5");
var secondRange = sheet.getRange("A6:B8");

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(firstRange)
    // This range will render in a different color
    .addRange(secondRange)
    .setPosition(5, 5, 0, 0);

// Note that you can use either of these two formats, but the range
// MUST match up with a range that was added via addRange(), or it
// will not be removed, and will not throw an exception
chartBuilder.removeRange(firstRange);
chartBuilder.removeRange(sheet.getRange("A6:B8"));

var chart = chartBuilder.build();

sheet.insertChart(chart);
```
@param range The range to remove.
@return this builder, for chaining*/removeRange(range:SpreadsheetApp.Range):SpreadsheetApp.EmbeddedChartBuilder;
/**Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
area or column charts), this means the horizontal axis is drawn from right to left. For
horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
bottom. For pie charts, this means the slices are drawn counterclockwise.

```
// Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
var builder = Charts.newPieChart();
builder.reverseCategories();
```
@return This builder, useful for chaining.*/reverseCategories():SpreadsheetApp.EmbeddedPieChartBuilder;
/**Sets the chart to be three-dimensional.
@return This builder, useful for chaining.*/set3D():SpreadsheetApp.EmbeddedPieChartBuilder;
/**Sets the background color for the chart.

```
// Creates a line chart builder and sets the background color to gray
var builder = Charts.newLineChart();
builder.setBackgroundColor("gray");
```
@param cssValue The CSS value for the color (such as `"blue"` or `"#00f"`).
@return This builder, useful for chaining.*/setBackgroundColor(cssValue:string):SpreadsheetApp.EmbeddedPieChartBuilder;
/**Changes the type of chart. Not all embedded chart types are currently supported. See [`ChartType`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param type The type to change this chart into.
@return this builder, for chaining*/setChartType(type:Charts.ChartType):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the colors for the lines in the chart.

```
// Creates a line chart builder and sets the first two lines to be drawn in green and red,
// respectively.
var builder = Charts.newLineChart();
builder.setColors(["green", "red"]);
```
@param cssValues An array of color CSS values, such as `["red", "#acf"]`. The nth element
    in the array represents the color of the nth line in the chart.
@return This builder, useful for chaining.*/setColors(cssValues:string[]):SpreadsheetApp.EmbeddedPieChartBuilder;
/**Sets the strategy to use for hidden rows and columns. Defaults to [`IGNORE_ROWS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param strategy The strategy to use for hidden rows and columns.
@return this builder, for chaining*/setHiddenDimensionStrategy(strategy:Charts.ChartHiddenDimensionStrategy):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the position of the legend with respect to the chart. By default, there is no legend.

```
// Creates a line chart builder and sets the legend position to right.
var builder = Charts.newLineChart();
builder.setLegendPosition(Charts.Position.RIGHT);
```
@param position The position of the legend.
@return This builder, useful for chaining.*/setLegendPosition(position:Charts.Position):SpreadsheetApp.EmbeddedPieChartBuilder;
/**Sets the text style of the chart legend.

```
// Creates a line chart builder and sets it up for a  blue, 26-point legend.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
var builder = Charts.newLineChart();
builder.setLegendTextStyle(style);
```
@param textStyle The text style to use for the chart legend.
@return This builder, useful for chaining.*/setLegendTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedPieChartBuilder;
/**Sets the merge strategy to use when more than one range exists. If [`MERGE_ROWS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html), rows are merged; if [`MERGE_COLUMNS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html), columns are merged. Defaults to [`MERGE_COLUMNS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B10");
var range2 = sheet.getRange("C:C10");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .addRange(range2)
    .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param mergeStrategy The merge strategy to use.
@return this builder, for chaining*/setMergeStrategy(mergeStrategy:Charts.ChartMergeStrategy):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the number of rows or columns of the range that should be treated as headers.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setNumHeaders(1)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param headers The number of rows or columns to treat as headers. Negative values cause headers
    to be auto-detected.
@return this builder, for chaining*/setNumHeaders(headers:Integer):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets advanced options for this chart. To view a list of the available options, see [Chart
configuration options](https://developers.google.com/apps-script/chart-configuration-options).

This method doesn't validate the option you specify is valid for this chart type nor if the
value is of the correct format/structure.

This example shows how to change the title and set a legend.

```
builder.setOption('title', 'Earnings projections');
builder.setOption('legend', {position: 'top', textStyle: {color: 'blue', fontSize: 16}});
```
@param option The name of the option.
@param value The value of the option.
@return This builder, for chaining.*/setOption(option:string,value:Object):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the position, changing where the chart appears on the sheet. `anchorRowPos` and
`anchorColPos` are 1-indexed.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param anchorRowPos The chart's top side is anchored in this row.
@param anchorColPos The chart's left side is anchored in this column.
@param offsetX The chart's upper right-hand corner is offset by this many pixels.
@param offsetY The chart's lower left-hand corner is offset by this many pixels.
@return this builder, for chaining*/setPosition(anchorRowPos:Integer,anchorColPos:Integer,offsetX:Integer,offsetY:Integer):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the title of the chart. The title is displayed centered above the chart.

```
// Creates a line chart builder and title to 'My Line Chart'.
var builder = Charts.newLineChart();
builder.setTitle('My Line Chart')
```
@param chartTitle the chart title.
@return This builder, useful for chaining.*/setTitle(chartTitle:string):SpreadsheetApp.EmbeddedPieChartBuilder;
/**Sets the text style of the chart title.

```
// Creates a line chart builder and sets it up for a  blue, 26-point title.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
var builder = Charts.newLineChart();
builder.setTitleTextStyle(style);
```
@param textStyle The text style to use for the chart title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setTitleTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedPieChartBuilder;
/**Sets whether the chart's rows and columns are transposed. If set to `true`, the rows and
columns are switched. Defaults to `false`.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setTransposeRowsAndColumns(true)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param transpose If `true`, the rows and columns used to construct the chart are
    transposed.
@return this builder, for chaining*/setTransposeRowsAndColumns(transpose:boolean):SpreadsheetApp.EmbeddedChartBuilder;}interface EmbeddedLineChartBuilder{
/**Adds a range to the chart this builder modifies. Does not add the range if it has already been
added to the chart.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param range The range to add.
@return this builder, for chaining*/addRange(range:SpreadsheetApp.Range):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the chart type to AreaChart and returns an [`EmbeddedAreaChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html).
@return a builder for an area chart*/asAreaChart():SpreadsheetApp.EmbeddedAreaChartBuilder;
/**Sets the chart type to BarChart and returns an [`EmbeddedBarChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html).
@return a builder for a bar chart*/asBarChart():SpreadsheetApp.EmbeddedBarChartBuilder;
/**Sets the chart type to ColumnChart and returns an [`EmbeddedColumnChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html).
@return a builder for a column chart*/asColumnChart():SpreadsheetApp.EmbeddedColumnChartBuilder;
/**Sets the chart type to ComboChart and returns an [`EmbeddedComboChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html).
@return a builder for a combo chart*/asComboChart():SpreadsheetApp.EmbeddedComboChartBuilder;
/**Sets the chart type to HistogramChart and returns an [`EmbeddedHistogramChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html).
@return a builder for a histogram chart*/asHistogramChart():SpreadsheetApp.EmbeddedHistogramChartBuilder;
/**Sets the chart type to LineChart and returns an [`EmbeddedLineChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html).
@return a builder for a line chart*/asLineChart():SpreadsheetApp.EmbeddedLineChartBuilder;
/**Sets the chart type to PieChart and returns an [`EmbeddedPieChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html).
@return a builder for a pie chart*/asPieChart():SpreadsheetApp.EmbeddedPieChartBuilder;
/**Sets the chart type to ScatterChart and returns an [`EmbeddedScatterChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html).
@return a builder for a scatter chart*/asScatterChart():SpreadsheetApp.EmbeddedScatterChartBuilder;
/**Sets the chart type to TableChart and returns an [`EmbeddedTableChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html).
@return a builder for a table chart*/asTableChart():SpreadsheetApp.EmbeddedTableChartBuilder;
/**Builds the chart to reflect all changes made to it.

This method does not automatically draw the chart on top of the spreadsheet. A new chart
must be inserted via `sheet.insertChart(chart)`, and an existing chart should be updated
via `sheet.updateChart(chart)`.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@return the created chart, which must still be added to the spreadsheet*/build():SpreadsheetApp.EmbeddedChart;
/**Removes all ranges from the chart this builder modifies.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This code updates the chart to use only the new ranges while preserving the existing
// formatting of the chart.
var chart = sheet.getCharts()[0];
var newChart = chart
    .modify()
    .clearRanges()
    .addRange(sheet.getRange("A1:A5"))
    .addRange(sheet.getRange("B1:B5"))
    .build();
sheet.updateChart(newChart);
```
@return this builder, for chaining*/clearRanges():SpreadsheetApp.EmbeddedChartBuilder;
/**Returns the current chart type.
@return the chart type*/getChartType():Charts.ChartType;
/**Return the chart [`ContainerInfo`](https://developers.google.com/apps-script/reference/spreadsheet/container-info.html), which encapsulates where the chart appears on the
sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0);

// This method returns the exact same data as Chart#getContainerInfo()
var containerInfo = chartBuilder.getContainer();

// Logs the values we used in setPosition()
Logger.log("Anchor Column: %s\r
Anchor Row %s\r
Offset X %s\r
Offset Y %s",
          containerInfo.getAnchorColumn(),
          containerInfo.getAnchorRow(),
          containerInfo.getOffsetX(),
          containerInfo.getOffsetY());
```
@return an object containing the chart container's position*/getContainer():SpreadsheetApp.ContainerInfo;
/**Returns a copy of the list of ranges currently providing data for this chart. Use [`addRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html#addRange(Range)) and [`removeRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html#removeRange(Range)) to modify this list.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0);

var ranges = chartBuilder.getRanges();

// There's only one range as a data source for this chart,
// so this logs "A1:B8"
for (var i in ranges) {
  var range = ranges[i];
  Logger.log(range.getA1Notation());
}
```
@return an array of ranges that serve as the chart to be built's data source*/getRanges():SpreadsheetApp.Range[];
/**Removes the specified range from the chart this builder modifies. Does not throw an error if
the range is not in this chart.

The range removed must match up with a range added via [`addRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html#addRange(Range));
otherwise no change is made to the chart. This method cannot be used to partially remove values
from a range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var firstRange = sheet.getRange("A1:B5");
var secondRange = sheet.getRange("A6:B8");

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(firstRange)
    // This range will render in a different color
    .addRange(secondRange)
    .setPosition(5, 5, 0, 0);

// Note that you can use either of these two formats, but the range
// MUST match up with a range that was added via addRange(), or it
// will not be removed, and will not throw an exception
chartBuilder.removeRange(firstRange);
chartBuilder.removeRange(sheet.getRange("A6:B8"));

var chart = chartBuilder.build();

sheet.insertChart(chart);
```
@param range The range to remove.
@return this builder, for chaining*/removeRange(range:SpreadsheetApp.Range):SpreadsheetApp.EmbeddedChartBuilder;
/**Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
area or column charts), this means the horizontal axis is drawn from right to left. For
horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
bottom. For pie charts, this means the slices are drawn counterclockwise.

```
// Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
var builder = Charts.newPieChart();
builder.reverseCategories();
```
@return This builder, useful for chaining.*/reverseCategories():SpreadsheetApp.EmbeddedLineChartBuilder;
/**Sets the background color for the chart.

```
// Creates a line chart builder and sets the background color to gray
var builder = Charts.newLineChart();
builder.setBackgroundColor("gray");
```
@param cssValue The CSS value for the color (such as `"blue"` or `"#00f"`).
@return This builder, useful for chaining.*/setBackgroundColor(cssValue:string):SpreadsheetApp.EmbeddedLineChartBuilder;
/**Changes the type of chart. Not all embedded chart types are currently supported. See [`ChartType`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param type The type to change this chart into.
@return this builder, for chaining*/setChartType(type:Charts.ChartType):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the colors for the lines in the chart.

```
// Creates a line chart builder and sets the first two lines to be drawn in green and red,
// respectively.
var builder = Charts.newLineChart();
builder.setColors(["green", "red"]);
```
@param cssValues An array of color CSS values, such as `["red", "#acf"]`. The nth element
    in the array represents the color of the nth line in the chart.
@return This builder, useful for chaining.*/setColors(cssValues:string[]):SpreadsheetApp.EmbeddedLineChartBuilder;
/**Sets the style to use for curves in the chart. See [`CurveStyle`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/curve-style.html) for allowed curve
styles.

```
// Creates a line chart builder and curves the lines in the chart.
var builder = Charts.newLineChart();
builder.setCurveStyle(Charts.CurveStyle.SMOOTH)
```
@param style The style for curves in the chart.
@return This builder, useful for chaining.*/setCurveStyle(style:Charts.CurveStyle):SpreadsheetApp.EmbeddedLineChartBuilder;
/**Sets the strategy to use for hidden rows and columns. Defaults to [`IGNORE_ROWS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param strategy The strategy to use for hidden rows and columns.
@return this builder, for chaining*/setHiddenDimensionStrategy(strategy:Charts.ChartHiddenDimensionStrategy):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the position of the legend with respect to the chart. By default, there is no legend.

```
// Creates a line chart builder and sets the legend position to right.
var builder = Charts.newLineChart();
builder.setLegendPosition(Charts.Position.RIGHT);
```
@param position The position of the legend.
@return This builder, useful for chaining.*/setLegendPosition(position:Charts.Position):SpreadsheetApp.EmbeddedLineChartBuilder;
/**Sets the text style of the chart legend.

```
// Creates a line chart builder and sets it up for a  blue, 26-point legend.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
var builder = Charts.newLineChart();
builder.setLegendTextStyle(style);
```
@param textStyle The text style to use for the chart legend.
@return This builder, useful for chaining.*/setLegendTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedLineChartBuilder;
/**Sets the merge strategy to use when more than one range exists. If [`MERGE_ROWS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html), rows are merged; if [`MERGE_COLUMNS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html), columns are merged. Defaults to [`MERGE_COLUMNS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B10");
var range2 = sheet.getRange("C:C10");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .addRange(range2)
    .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param mergeStrategy The merge strategy to use.
@return this builder, for chaining*/setMergeStrategy(mergeStrategy:Charts.ChartMergeStrategy):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the number of rows or columns of the range that should be treated as headers.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setNumHeaders(1)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param headers The number of rows or columns to treat as headers. Negative values cause headers
    to be auto-detected.
@return this builder, for chaining*/setNumHeaders(headers:Integer):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets advanced options for this chart. To view a list of the available options, see [Chart
configuration options](https://developers.google.com/apps-script/chart-configuration-options).

This method doesn't validate the option you specify is valid for this chart type nor if the
value is of the correct format/structure.

This example shows how to change the title and set a legend.

```
builder.setOption('title', 'Earnings projections');
builder.setOption('legend', {position: 'top', textStyle: {color: 'blue', fontSize: 16}});
```
@param option The name of the option.
@param value The value of the option.
@return This builder, for chaining.*/setOption(option:string,value:Object):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the style for points in the line. By default, points have no particular styles, and only
the line is visible.

```
// Creates a line chart builder and sets large point style.
var builder = Charts.newLineChart();
builder.setPointStyle(Charts.PointStyle.LARGE);
```
@param style The style to use for points in the line.
@return This builder, useful for chaining.*/setPointStyle(style:Charts.PointStyle):SpreadsheetApp.EmbeddedLineChartBuilder;
/**Sets the position, changing where the chart appears on the sheet. `anchorRowPos` and
`anchorColPos` are 1-indexed.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param anchorRowPos The chart's top side is anchored in this row.
@param anchorColPos The chart's left side is anchored in this column.
@param offsetX The chart's upper right-hand corner is offset by this many pixels.
@param offsetY The chart's lower left-hand corner is offset by this many pixels.
@return this builder, for chaining*/setPosition(anchorRowPos:Integer,anchorColPos:Integer,offsetX:Integer,offsetY:Integer):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the range for the chart.

If any data points fall outside the range, the range is expanded to include those data
points.
@param start The value for the lowest grid line of the range axis.
@param end The value for the highest grid line of the range axis.
@return This builder, useful for chaining.*/setRange(start:number,end:number):SpreadsheetApp.EmbeddedLineChartBuilder;
/**Sets the title of the chart. The title is displayed centered above the chart.

```
// Creates a line chart builder and title to 'My Line Chart'.
var builder = Charts.newLineChart();
builder.setTitle('My Line Chart')
```
@param chartTitle the chart title.
@return This builder, useful for chaining.*/setTitle(chartTitle:string):SpreadsheetApp.EmbeddedLineChartBuilder;
/**Sets the text style of the chart title.

```
// Creates a line chart builder and sets it up for a  blue, 26-point title.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
var builder = Charts.newLineChart();
builder.setTitleTextStyle(style);
```
@param textStyle The text style to use for the chart title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setTitleTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedLineChartBuilder;
/**Sets whether the chart's rows and columns are transposed. If set to `true`, the rows and
columns are switched. Defaults to `false`.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setTransposeRowsAndColumns(true)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param transpose If `true`, the rows and columns used to construct the chart are
    transposed.
@return this builder, for chaining*/setTransposeRowsAndColumns(transpose:boolean):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the horizontal axis text style.

```
// Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setXAxisTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setXAxisTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedLineChartBuilder;
/**Adds a title to the horizontal axis. The title is centered and appears below the axis value
labels.

```
// Creates a line chart builder and sets the X-axis title.
var builder = Charts.newLineChart();
builder.setTitle('X-axis Title')
```
@param title The title for the X-axis.
@return This builder, useful for chaining.*/setXAxisTitle(title:string):SpreadsheetApp.EmbeddedLineChartBuilder;
/**Sets the horizontal axis title text style.

```
// Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setXAxisTitleTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setXAxisTitleTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedLineChartBuilder;
/**Sets the vertical axis text style.

```
// Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setYAxisTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setYAxisTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedLineChartBuilder;
/**Adds a title to the vertical axis. The title is centered and appears to the left of the value
labels.

```
// Creates a line chart builder and sets the Y-axis title.
var builder = Charts.newLineChart();
builder.setYAxisTitle('Y-axis Title')
```
@param title The title for the Y-axis.
@return This builder, useful for chaining.*/setYAxisTitle(title:string):SpreadsheetApp.EmbeddedLineChartBuilder;
/**Sets the vertical axis title text style.

```
// Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setYAxisTitleTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setYAxisTitleTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedLineChartBuilder;
/**Makes the range axis into a logarithmic scale (requires all values to be positive). The range
axis are the vertical axis for vertical charts (such as line, area, or column) and the
horizontal axis for horizontal charts (such as bar).
@return This builder, useful for chaining.*/useLogScale():SpreadsheetApp.EmbeddedLineChartBuilder;}interface EmbeddedHistogramChartBuilder{
/**Adds a range to the chart this builder modifies. Does not add the range if it has already been
added to the chart.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param range The range to add.
@return this builder, for chaining*/addRange(range:SpreadsheetApp.Range):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the chart type to AreaChart and returns an [`EmbeddedAreaChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html).
@return a builder for an area chart*/asAreaChart():SpreadsheetApp.EmbeddedAreaChartBuilder;
/**Sets the chart type to BarChart and returns an [`EmbeddedBarChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html).
@return a builder for a bar chart*/asBarChart():SpreadsheetApp.EmbeddedBarChartBuilder;
/**Sets the chart type to ColumnChart and returns an [`EmbeddedColumnChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html).
@return a builder for a column chart*/asColumnChart():SpreadsheetApp.EmbeddedColumnChartBuilder;
/**Sets the chart type to ComboChart and returns an [`EmbeddedComboChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html).
@return a builder for a combo chart*/asComboChart():SpreadsheetApp.EmbeddedComboChartBuilder;
/**Sets the chart type to HistogramChart and returns an [`EmbeddedHistogramChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html).
@return a builder for a histogram chart*/asHistogramChart():SpreadsheetApp.EmbeddedHistogramChartBuilder;
/**Sets the chart type to LineChart and returns an [`EmbeddedLineChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html).
@return a builder for a line chart*/asLineChart():SpreadsheetApp.EmbeddedLineChartBuilder;
/**Sets the chart type to PieChart and returns an [`EmbeddedPieChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html).
@return a builder for a pie chart*/asPieChart():SpreadsheetApp.EmbeddedPieChartBuilder;
/**Sets the chart type to ScatterChart and returns an [`EmbeddedScatterChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html).
@return a builder for a scatter chart*/asScatterChart():SpreadsheetApp.EmbeddedScatterChartBuilder;
/**Sets the chart type to TableChart and returns an [`EmbeddedTableChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html).
@return a builder for a table chart*/asTableChart():SpreadsheetApp.EmbeddedTableChartBuilder;
/**Builds the chart to reflect all changes made to it.

This method does not automatically draw the chart on top of the spreadsheet. A new chart
must be inserted via `sheet.insertChart(chart)`, and an existing chart should be updated
via `sheet.updateChart(chart)`.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@return the created chart, which must still be added to the spreadsheet*/build():SpreadsheetApp.EmbeddedChart;
/**Removes all ranges from the chart this builder modifies.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This code updates the chart to use only the new ranges while preserving the existing
// formatting of the chart.
var chart = sheet.getCharts()[0];
var newChart = chart
    .modify()
    .clearRanges()
    .addRange(sheet.getRange("A1:A5"))
    .addRange(sheet.getRange("B1:B5"))
    .build();
sheet.updateChart(newChart);
```
@return this builder, for chaining*/clearRanges():SpreadsheetApp.EmbeddedChartBuilder;
/**Returns the current chart type.
@return the chart type*/getChartType():Charts.ChartType;
/**Return the chart [`ContainerInfo`](https://developers.google.com/apps-script/reference/spreadsheet/container-info.html), which encapsulates where the chart appears on the
sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0);

// This method returns the exact same data as Chart#getContainerInfo()
var containerInfo = chartBuilder.getContainer();

// Logs the values we used in setPosition()
Logger.log("Anchor Column: %s\r
Anchor Row %s\r
Offset X %s\r
Offset Y %s",
          containerInfo.getAnchorColumn(),
          containerInfo.getAnchorRow(),
          containerInfo.getOffsetX(),
          containerInfo.getOffsetY());
```
@return an object containing the chart container's position*/getContainer():SpreadsheetApp.ContainerInfo;
/**Returns a copy of the list of ranges currently providing data for this chart. Use [`addRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html#addRange(Range)) and [`removeRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html#removeRange(Range)) to modify this list.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0);

var ranges = chartBuilder.getRanges();

// There's only one range as a data source for this chart,
// so this logs "A1:B8"
for (var i in ranges) {
  var range = ranges[i];
  Logger.log(range.getA1Notation());
}
```
@return an array of ranges that serve as the chart to be built's data source*/getRanges():SpreadsheetApp.Range[];
/**Removes the specified range from the chart this builder modifies. Does not throw an error if
the range is not in this chart.

The range removed must match up with a range added via [`addRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html#addRange(Range));
otherwise no change is made to the chart. This method cannot be used to partially remove values
from a range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var firstRange = sheet.getRange("A1:B5");
var secondRange = sheet.getRange("A6:B8");

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(firstRange)
    // This range will render in a different color
    .addRange(secondRange)
    .setPosition(5, 5, 0, 0);

// Note that you can use either of these two formats, but the range
// MUST match up with a range that was added via addRange(), or it
// will not be removed, and will not throw an exception
chartBuilder.removeRange(firstRange);
chartBuilder.removeRange(sheet.getRange("A6:B8"));

var chart = chartBuilder.build();

sheet.insertChart(chart);
```
@param range The range to remove.
@return this builder, for chaining*/removeRange(range:SpreadsheetApp.Range):SpreadsheetApp.EmbeddedChartBuilder;
/**Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
area or column charts), this means the horizontal axis is drawn from right to left. For
horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
bottom. For pie charts, this means the slices are drawn counterclockwise.

```
// Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
var builder = Charts.newPieChart();
builder.reverseCategories();
```
@return This builder, useful for chaining.*/reverseCategories():SpreadsheetApp.EmbeddedHistogramChartBuilder;
/**Sets the background color for the chart.

```
// Creates a line chart builder and sets the background color to gray
var builder = Charts.newLineChart();
builder.setBackgroundColor("gray");
```
@param cssValue The CSS value for the color (such as `"blue"` or `"#00f"`).
@return This builder, useful for chaining.*/setBackgroundColor(cssValue:string):SpreadsheetApp.EmbeddedHistogramChartBuilder;
/**Changes the type of chart. Not all embedded chart types are currently supported. See [`ChartType`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param type The type to change this chart into.
@return this builder, for chaining*/setChartType(type:Charts.ChartType):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the colors for the lines in the chart.

```
// Creates a line chart builder and sets the first two lines to be drawn in green and red,
// respectively.
var builder = Charts.newLineChart();
builder.setColors(["green", "red"]);
```
@param cssValues An array of color CSS values, such as `["red", "#acf"]`. The nth element
    in the array represents the color of the nth line in the chart.
@return This builder, useful for chaining.*/setColors(cssValues:string[]):SpreadsheetApp.EmbeddedHistogramChartBuilder;
/**Sets the strategy to use for hidden rows and columns. Defaults to [`IGNORE_ROWS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param strategy The strategy to use for hidden rows and columns.
@return this builder, for chaining*/setHiddenDimensionStrategy(strategy:Charts.ChartHiddenDimensionStrategy):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the position of the legend with respect to the chart. By default, there is no legend.

```
// Creates a line chart builder and sets the legend position to right.
var builder = Charts.newLineChart();
builder.setLegendPosition(Charts.Position.RIGHT);
```
@param position The position of the legend.
@return This builder, useful for chaining.*/setLegendPosition(position:Charts.Position):SpreadsheetApp.EmbeddedHistogramChartBuilder;
/**Sets the text style of the chart legend.

```
// Creates a line chart builder and sets it up for a  blue, 26-point legend.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
var builder = Charts.newLineChart();
builder.setLegendTextStyle(style);
```
@param textStyle The text style to use for the chart legend.
@return This builder, useful for chaining.*/setLegendTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedHistogramChartBuilder;
/**Sets the merge strategy to use when more than one range exists. If [`MERGE_ROWS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html), rows are merged; if [`MERGE_COLUMNS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html), columns are merged. Defaults to [`MERGE_COLUMNS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B10");
var range2 = sheet.getRange("C:C10");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .addRange(range2)
    .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param mergeStrategy The merge strategy to use.
@return this builder, for chaining*/setMergeStrategy(mergeStrategy:Charts.ChartMergeStrategy):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the number of rows or columns of the range that should be treated as headers.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setNumHeaders(1)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param headers The number of rows or columns to treat as headers. Negative values cause headers
    to be auto-detected.
@return this builder, for chaining*/setNumHeaders(headers:Integer):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets advanced options for this chart. To view a list of the available options, see [Chart
configuration options](https://developers.google.com/apps-script/chart-configuration-options).

This method doesn't validate the option you specify is valid for this chart type nor if the
value is of the correct format/structure.

This example shows how to change the title and set a legend.

```
builder.setOption('title', 'Earnings projections');
builder.setOption('legend', {position: 'top', textStyle: {color: 'blue', fontSize: 16}});
```
@param option The name of the option.
@param value The value of the option.
@return This builder, for chaining.*/setOption(option:string,value:Object):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the position, changing where the chart appears on the sheet. `anchorRowPos` and
`anchorColPos` are 1-indexed.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param anchorRowPos The chart's top side is anchored in this row.
@param anchorColPos The chart's left side is anchored in this column.
@param offsetX The chart's upper right-hand corner is offset by this many pixels.
@param offsetY The chart's lower left-hand corner is offset by this many pixels.
@return this builder, for chaining*/setPosition(anchorRowPos:Integer,anchorColPos:Integer,offsetX:Integer,offsetY:Integer):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the range for the chart.

If any data points fall outside the range, the range is expanded to include those data
points.
@param start The value for the lowest grid line of the range axis.
@param end The value for the highest grid line of the range axis.
@return This builder, useful for chaining.*/setRange(start:number,end:number):SpreadsheetApp.EmbeddedHistogramChartBuilder;
/**Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
there is no stacking.
@return This builder, useful for chaining.*/setStacked():SpreadsheetApp.EmbeddedHistogramChartBuilder;
/**Sets the title of the chart. The title is displayed centered above the chart.

```
// Creates a line chart builder and title to 'My Line Chart'.
var builder = Charts.newLineChart();
builder.setTitle('My Line Chart')
```
@param chartTitle the chart title.
@return This builder, useful for chaining.*/setTitle(chartTitle:string):SpreadsheetApp.EmbeddedHistogramChartBuilder;
/**Sets the text style of the chart title.

```
// Creates a line chart builder and sets it up for a  blue, 26-point title.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
var builder = Charts.newLineChart();
builder.setTitleTextStyle(style);
```
@param textStyle The text style to use for the chart title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setTitleTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedHistogramChartBuilder;
/**Sets whether the chart's rows and columns are transposed. If set to `true`, the rows and
columns are switched. Defaults to `false`.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setTransposeRowsAndColumns(true)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param transpose If `true`, the rows and columns used to construct the chart are
    transposed.
@return this builder, for chaining*/setTransposeRowsAndColumns(transpose:boolean):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the horizontal axis text style.

```
// Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setXAxisTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setXAxisTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedHistogramChartBuilder;
/**Adds a title to the horizontal axis. The title is centered and appears below the axis value
labels.

```
// Creates a line chart builder and sets the X-axis title.
var builder = Charts.newLineChart();
builder.setTitle('X-axis Title')
```
@param title The title for the X-axis.
@return This builder, useful for chaining.*/setXAxisTitle(title:string):SpreadsheetApp.EmbeddedHistogramChartBuilder;
/**Sets the horizontal axis title text style.

```
// Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setXAxisTitleTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setXAxisTitleTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedHistogramChartBuilder;
/**Sets the vertical axis text style.

```
// Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setYAxisTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setYAxisTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedHistogramChartBuilder;
/**Adds a title to the vertical axis. The title is centered and appears to the left of the value
labels.

```
// Creates a line chart builder and sets the Y-axis title.
var builder = Charts.newLineChart();
builder.setYAxisTitle('Y-axis Title')
```
@param title The title for the Y-axis.
@return This builder, useful for chaining.*/setYAxisTitle(title:string):SpreadsheetApp.EmbeddedHistogramChartBuilder;
/**Sets the vertical axis title text style.

```
// Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setYAxisTitleTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setYAxisTitleTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedHistogramChartBuilder;
/**Makes the range axis into a logarithmic scale (requires all values to be positive). The range
axis are the vertical axis for vertical charts (such as line, area, or column) and the
horizontal axis for horizontal charts (such as bar).
@return This builder, useful for chaining.*/useLogScale():SpreadsheetApp.EmbeddedHistogramChartBuilder;}interface EmbeddedComboChartBuilder{
/**Adds a range to the chart this builder modifies. Does not add the range if it has already been
added to the chart.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param range The range to add.
@return this builder, for chaining*/addRange(range:SpreadsheetApp.Range):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the chart type to AreaChart and returns an [`EmbeddedAreaChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html).
@return a builder for an area chart*/asAreaChart():SpreadsheetApp.EmbeddedAreaChartBuilder;
/**Sets the chart type to BarChart and returns an [`EmbeddedBarChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html).
@return a builder for a bar chart*/asBarChart():SpreadsheetApp.EmbeddedBarChartBuilder;
/**Sets the chart type to ColumnChart and returns an [`EmbeddedColumnChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html).
@return a builder for a column chart*/asColumnChart():SpreadsheetApp.EmbeddedColumnChartBuilder;
/**Sets the chart type to ComboChart and returns an [`EmbeddedComboChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html).
@return a builder for a combo chart*/asComboChart():SpreadsheetApp.EmbeddedComboChartBuilder;
/**Sets the chart type to HistogramChart and returns an [`EmbeddedHistogramChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html).
@return a builder for a histogram chart*/asHistogramChart():SpreadsheetApp.EmbeddedHistogramChartBuilder;
/**Sets the chart type to LineChart and returns an [`EmbeddedLineChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html).
@return a builder for a line chart*/asLineChart():SpreadsheetApp.EmbeddedLineChartBuilder;
/**Sets the chart type to PieChart and returns an [`EmbeddedPieChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html).
@return a builder for a pie chart*/asPieChart():SpreadsheetApp.EmbeddedPieChartBuilder;
/**Sets the chart type to ScatterChart and returns an [`EmbeddedScatterChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html).
@return a builder for a scatter chart*/asScatterChart():SpreadsheetApp.EmbeddedScatterChartBuilder;
/**Sets the chart type to TableChart and returns an [`EmbeddedTableChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html).
@return a builder for a table chart*/asTableChart():SpreadsheetApp.EmbeddedTableChartBuilder;
/**Builds the chart to reflect all changes made to it.

This method does not automatically draw the chart on top of the spreadsheet. A new chart
must be inserted via `sheet.insertChart(chart)`, and an existing chart should be updated
via `sheet.updateChart(chart)`.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@return the created chart, which must still be added to the spreadsheet*/build():SpreadsheetApp.EmbeddedChart;
/**Removes all ranges from the chart this builder modifies.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This code updates the chart to use only the new ranges while preserving the existing
// formatting of the chart.
var chart = sheet.getCharts()[0];
var newChart = chart
    .modify()
    .clearRanges()
    .addRange(sheet.getRange("A1:A5"))
    .addRange(sheet.getRange("B1:B5"))
    .build();
sheet.updateChart(newChart);
```
@return this builder, for chaining*/clearRanges():SpreadsheetApp.EmbeddedChartBuilder;
/**Returns the current chart type.
@return the chart type*/getChartType():Charts.ChartType;
/**Return the chart [`ContainerInfo`](https://developers.google.com/apps-script/reference/spreadsheet/container-info.html), which encapsulates where the chart appears on the
sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0);

// This method returns the exact same data as Chart#getContainerInfo()
var containerInfo = chartBuilder.getContainer();

// Logs the values we used in setPosition()
Logger.log("Anchor Column: %s\r
Anchor Row %s\r
Offset X %s\r
Offset Y %s",
          containerInfo.getAnchorColumn(),
          containerInfo.getAnchorRow(),
          containerInfo.getOffsetX(),
          containerInfo.getOffsetY());
```
@return an object containing the chart container's position*/getContainer():SpreadsheetApp.ContainerInfo;
/**Returns a copy of the list of ranges currently providing data for this chart. Use [`addRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html#addRange(Range)) and [`removeRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html#removeRange(Range)) to modify this list.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0);

var ranges = chartBuilder.getRanges();

// There's only one range as a data source for this chart,
// so this logs "A1:B8"
for (var i in ranges) {
  var range = ranges[i];
  Logger.log(range.getA1Notation());
}
```
@return an array of ranges that serve as the chart to be built's data source*/getRanges():SpreadsheetApp.Range[];
/**Removes the specified range from the chart this builder modifies. Does not throw an error if
the range is not in this chart.

The range removed must match up with a range added via [`addRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html#addRange(Range));
otherwise no change is made to the chart. This method cannot be used to partially remove values
from a range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var firstRange = sheet.getRange("A1:B5");
var secondRange = sheet.getRange("A6:B8");

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(firstRange)
    // This range will render in a different color
    .addRange(secondRange)
    .setPosition(5, 5, 0, 0);

// Note that you can use either of these two formats, but the range
// MUST match up with a range that was added via addRange(), or it
// will not be removed, and will not throw an exception
chartBuilder.removeRange(firstRange);
chartBuilder.removeRange(sheet.getRange("A6:B8"));

var chart = chartBuilder.build();

sheet.insertChart(chart);
```
@param range The range to remove.
@return this builder, for chaining*/removeRange(range:SpreadsheetApp.Range):SpreadsheetApp.EmbeddedChartBuilder;
/**Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
area or column charts), this means the horizontal axis is drawn from right to left. For
horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
bottom. For pie charts, this means the slices are drawn counterclockwise.

```
// Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
var builder = Charts.newPieChart();
builder.reverseCategories();
```
@return This builder, useful for chaining.*/reverseCategories():SpreadsheetApp.EmbeddedComboChartBuilder;
/**Sets the background color for the chart.

```
// Creates a line chart builder and sets the background color to gray
var builder = Charts.newLineChart();
builder.setBackgroundColor("gray");
```
@param cssValue The CSS value for the color (such as `"blue"` or `"#00f"`).
@return This builder, useful for chaining.*/setBackgroundColor(cssValue:string):SpreadsheetApp.EmbeddedComboChartBuilder;
/**Changes the type of chart. Not all embedded chart types are currently supported. See [`ChartType`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param type The type to change this chart into.
@return this builder, for chaining*/setChartType(type:Charts.ChartType):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the colors for the lines in the chart.

```
// Creates a line chart builder and sets the first two lines to be drawn in green and red,
// respectively.
var builder = Charts.newLineChart();
builder.setColors(["green", "red"]);
```
@param cssValues An array of color CSS values, such as `["red", "#acf"]`. The nth element
    in the array represents the color of the nth line in the chart.
@return This builder, useful for chaining.*/setColors(cssValues:string[]):SpreadsheetApp.EmbeddedComboChartBuilder;
/**Sets the strategy to use for hidden rows and columns. Defaults to [`IGNORE_ROWS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param strategy The strategy to use for hidden rows and columns.
@return this builder, for chaining*/setHiddenDimensionStrategy(strategy:Charts.ChartHiddenDimensionStrategy):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the position of the legend with respect to the chart. By default, there is no legend.

```
// Creates a line chart builder and sets the legend position to right.
var builder = Charts.newLineChart();
builder.setLegendPosition(Charts.Position.RIGHT);
```
@param position The position of the legend.
@return This builder, useful for chaining.*/setLegendPosition(position:Charts.Position):SpreadsheetApp.EmbeddedComboChartBuilder;
/**Sets the text style of the chart legend.

```
// Creates a line chart builder and sets it up for a  blue, 26-point legend.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
var builder = Charts.newLineChart();
builder.setLegendTextStyle(style);
```
@param textStyle The text style to use for the chart legend.
@return This builder, useful for chaining.*/setLegendTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedComboChartBuilder;
/**Sets the merge strategy to use when more than one range exists. If [`MERGE_ROWS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html), rows are merged; if [`MERGE_COLUMNS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html), columns are merged. Defaults to [`MERGE_COLUMNS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B10");
var range2 = sheet.getRange("C:C10");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .addRange(range2)
    .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param mergeStrategy The merge strategy to use.
@return this builder, for chaining*/setMergeStrategy(mergeStrategy:Charts.ChartMergeStrategy):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the number of rows or columns of the range that should be treated as headers.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setNumHeaders(1)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param headers The number of rows or columns to treat as headers. Negative values cause headers
    to be auto-detected.
@return this builder, for chaining*/setNumHeaders(headers:Integer):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets advanced options for this chart. To view a list of the available options, see [Chart
configuration options](https://developers.google.com/apps-script/chart-configuration-options).

This method doesn't validate the option you specify is valid for this chart type nor if the
value is of the correct format/structure.

This example shows how to change the title and set a legend.

```
builder.setOption('title', 'Earnings projections');
builder.setOption('legend', {position: 'top', textStyle: {color: 'blue', fontSize: 16}});
```
@param option The name of the option.
@param value The value of the option.
@return This builder, for chaining.*/setOption(option:string,value:Object):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the position, changing where the chart appears on the sheet. `anchorRowPos` and
`anchorColPos` are 1-indexed.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param anchorRowPos The chart's top side is anchored in this row.
@param anchorColPos The chart's left side is anchored in this column.
@param offsetX The chart's upper right-hand corner is offset by this many pixels.
@param offsetY The chart's lower left-hand corner is offset by this many pixels.
@return this builder, for chaining*/setPosition(anchorRowPos:Integer,anchorColPos:Integer,offsetX:Integer,offsetY:Integer):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the range for the chart.

If any data points fall outside the range, the range is expanded to include those data
points.
@param start The value for the lowest grid line of the range axis.
@param end The value for the highest grid line of the range axis.
@return This builder, useful for chaining.*/setRange(start:number,end:number):SpreadsheetApp.EmbeddedComboChartBuilder;
/**Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
there is no stacking.
@return This builder, useful for chaining.*/setStacked():SpreadsheetApp.EmbeddedComboChartBuilder;
/**Sets the title of the chart. The title is displayed centered above the chart.

```
// Creates a line chart builder and title to 'My Line Chart'.
var builder = Charts.newLineChart();
builder.setTitle('My Line Chart')
```
@param chartTitle the chart title.
@return This builder, useful for chaining.*/setTitle(chartTitle:string):SpreadsheetApp.EmbeddedComboChartBuilder;
/**Sets the text style of the chart title.

```
// Creates a line chart builder and sets it up for a  blue, 26-point title.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
var builder = Charts.newLineChart();
builder.setTitleTextStyle(style);
```
@param textStyle The text style to use for the chart title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setTitleTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedComboChartBuilder;
/**Sets whether the chart's rows and columns are transposed. If set to `true`, the rows and
columns are switched. Defaults to `false`.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setTransposeRowsAndColumns(true)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param transpose If `true`, the rows and columns used to construct the chart are
    transposed.
@return this builder, for chaining*/setTransposeRowsAndColumns(transpose:boolean):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the horizontal axis text style.

```
// Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setXAxisTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setXAxisTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedComboChartBuilder;
/**Adds a title to the horizontal axis. The title is centered and appears below the axis value
labels.

```
// Creates a line chart builder and sets the X-axis title.
var builder = Charts.newLineChart();
builder.setTitle('X-axis Title')
```
@param title The title for the X-axis.
@return This builder, useful for chaining.*/setXAxisTitle(title:string):SpreadsheetApp.EmbeddedComboChartBuilder;
/**Sets the horizontal axis title text style.

```
// Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setXAxisTitleTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setXAxisTitleTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedComboChartBuilder;
/**Sets the vertical axis text style.

```
// Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setYAxisTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setYAxisTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedComboChartBuilder;
/**Adds a title to the vertical axis. The title is centered and appears to the left of the value
labels.

```
// Creates a line chart builder and sets the Y-axis title.
var builder = Charts.newLineChart();
builder.setYAxisTitle('Y-axis Title')
```
@param title The title for the Y-axis.
@return This builder, useful for chaining.*/setYAxisTitle(title:string):SpreadsheetApp.EmbeddedComboChartBuilder;
/**Sets the vertical axis title text style.

```
// Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setYAxisTitleTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setYAxisTitleTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedComboChartBuilder;
/**Makes the range axis into a logarithmic scale (requires all values to be positive). The range
axis are the vertical axis for vertical charts (such as line, area, or column) and the
horizontal axis for horizontal charts (such as bar).
@return This builder, useful for chaining.*/useLogScale():SpreadsheetApp.EmbeddedComboChartBuilder;}interface EmbeddedColumnChartBuilder{
/**Adds a range to the chart this builder modifies. Does not add the range if it has already been
added to the chart.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param range The range to add.
@return this builder, for chaining*/addRange(range:SpreadsheetApp.Range):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the chart type to AreaChart and returns an [`EmbeddedAreaChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html).
@return a builder for an area chart*/asAreaChart():SpreadsheetApp.EmbeddedAreaChartBuilder;
/**Sets the chart type to BarChart and returns an [`EmbeddedBarChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html).
@return a builder for a bar chart*/asBarChart():SpreadsheetApp.EmbeddedBarChartBuilder;
/**Sets the chart type to ColumnChart and returns an [`EmbeddedColumnChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html).
@return a builder for a column chart*/asColumnChart():SpreadsheetApp.EmbeddedColumnChartBuilder;
/**Sets the chart type to ComboChart and returns an [`EmbeddedComboChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html).
@return a builder for a combo chart*/asComboChart():SpreadsheetApp.EmbeddedComboChartBuilder;
/**Sets the chart type to HistogramChart and returns an [`EmbeddedHistogramChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html).
@return a builder for a histogram chart*/asHistogramChart():SpreadsheetApp.EmbeddedHistogramChartBuilder;
/**Sets the chart type to LineChart and returns an [`EmbeddedLineChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html).
@return a builder for a line chart*/asLineChart():SpreadsheetApp.EmbeddedLineChartBuilder;
/**Sets the chart type to PieChart and returns an [`EmbeddedPieChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html).
@return a builder for a pie chart*/asPieChart():SpreadsheetApp.EmbeddedPieChartBuilder;
/**Sets the chart type to ScatterChart and returns an [`EmbeddedScatterChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html).
@return a builder for a scatter chart*/asScatterChart():SpreadsheetApp.EmbeddedScatterChartBuilder;
/**Sets the chart type to TableChart and returns an [`EmbeddedTableChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html).
@return a builder for a table chart*/asTableChart():SpreadsheetApp.EmbeddedTableChartBuilder;
/**Builds the chart to reflect all changes made to it.

This method does not automatically draw the chart on top of the spreadsheet. A new chart
must be inserted via `sheet.insertChart(chart)`, and an existing chart should be updated
via `sheet.updateChart(chart)`.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@return the created chart, which must still be added to the spreadsheet*/build():SpreadsheetApp.EmbeddedChart;
/**Removes all ranges from the chart this builder modifies.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This code updates the chart to use only the new ranges while preserving the existing
// formatting of the chart.
var chart = sheet.getCharts()[0];
var newChart = chart
    .modify()
    .clearRanges()
    .addRange(sheet.getRange("A1:A5"))
    .addRange(sheet.getRange("B1:B5"))
    .build();
sheet.updateChart(newChart);
```
@return this builder, for chaining*/clearRanges():SpreadsheetApp.EmbeddedChartBuilder;
/**Returns the current chart type.
@return the chart type*/getChartType():Charts.ChartType;
/**Return the chart [`ContainerInfo`](https://developers.google.com/apps-script/reference/spreadsheet/container-info.html), which encapsulates where the chart appears on the
sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0);

// This method returns the exact same data as Chart#getContainerInfo()
var containerInfo = chartBuilder.getContainer();

// Logs the values we used in setPosition()
Logger.log("Anchor Column: %s\r
Anchor Row %s\r
Offset X %s\r
Offset Y %s",
          containerInfo.getAnchorColumn(),
          containerInfo.getAnchorRow(),
          containerInfo.getOffsetX(),
          containerInfo.getOffsetY());
```
@return an object containing the chart container's position*/getContainer():SpreadsheetApp.ContainerInfo;
/**Returns a copy of the list of ranges currently providing data for this chart. Use [`addRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html#addRange(Range)) and [`removeRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html#removeRange(Range)) to modify this list.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0);

var ranges = chartBuilder.getRanges();

// There's only one range as a data source for this chart,
// so this logs "A1:B8"
for (var i in ranges) {
  var range = ranges[i];
  Logger.log(range.getA1Notation());
}
```
@return an array of ranges that serve as the chart to be built's data source*/getRanges():SpreadsheetApp.Range[];
/**Removes the specified range from the chart this builder modifies. Does not throw an error if
the range is not in this chart.

The range removed must match up with a range added via [`addRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html#addRange(Range));
otherwise no change is made to the chart. This method cannot be used to partially remove values
from a range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var firstRange = sheet.getRange("A1:B5");
var secondRange = sheet.getRange("A6:B8");

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(firstRange)
    // This range will render in a different color
    .addRange(secondRange)
    .setPosition(5, 5, 0, 0);

// Note that you can use either of these two formats, but the range
// MUST match up with a range that was added via addRange(), or it
// will not be removed, and will not throw an exception
chartBuilder.removeRange(firstRange);
chartBuilder.removeRange(sheet.getRange("A6:B8"));

var chart = chartBuilder.build();

sheet.insertChart(chart);
```
@param range The range to remove.
@return this builder, for chaining*/removeRange(range:SpreadsheetApp.Range):SpreadsheetApp.EmbeddedChartBuilder;
/**Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
area or column charts), this means the horizontal axis is drawn from right to left. For
horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
bottom. For pie charts, this means the slices are drawn counterclockwise.

```
// Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
var builder = Charts.newPieChart();
builder.reverseCategories();
```
@return This builder, useful for chaining.*/reverseCategories():SpreadsheetApp.EmbeddedColumnChartBuilder;
/**Sets the background color for the chart.

```
// Creates a line chart builder and sets the background color to gray
var builder = Charts.newLineChart();
builder.setBackgroundColor("gray");
```
@param cssValue The CSS value for the color (such as `"blue"` or `"#00f"`).
@return This builder, useful for chaining.*/setBackgroundColor(cssValue:string):SpreadsheetApp.EmbeddedColumnChartBuilder;
/**Changes the type of chart. Not all embedded chart types are currently supported. See [`ChartType`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param type The type to change this chart into.
@return this builder, for chaining*/setChartType(type:Charts.ChartType):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the colors for the lines in the chart.

```
// Creates a line chart builder and sets the first two lines to be drawn in green and red,
// respectively.
var builder = Charts.newLineChart();
builder.setColors(["green", "red"]);
```
@param cssValues An array of color CSS values, such as `["red", "#acf"]`. The nth element
    in the array represents the color of the nth line in the chart.
@return This builder, useful for chaining.*/setColors(cssValues:string[]):SpreadsheetApp.EmbeddedColumnChartBuilder;
/**Sets the strategy to use for hidden rows and columns. Defaults to [`IGNORE_ROWS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param strategy The strategy to use for hidden rows and columns.
@return this builder, for chaining*/setHiddenDimensionStrategy(strategy:Charts.ChartHiddenDimensionStrategy):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the position of the legend with respect to the chart. By default, there is no legend.

```
// Creates a line chart builder and sets the legend position to right.
var builder = Charts.newLineChart();
builder.setLegendPosition(Charts.Position.RIGHT);
```
@param position The position of the legend.
@return This builder, useful for chaining.*/setLegendPosition(position:Charts.Position):SpreadsheetApp.EmbeddedColumnChartBuilder;
/**Sets the text style of the chart legend.

```
// Creates a line chart builder and sets it up for a  blue, 26-point legend.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
var builder = Charts.newLineChart();
builder.setLegendTextStyle(style);
```
@param textStyle The text style to use for the chart legend.
@return This builder, useful for chaining.*/setLegendTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedColumnChartBuilder;
/**Sets the merge strategy to use when more than one range exists. If [`MERGE_ROWS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html), rows are merged; if [`MERGE_COLUMNS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html), columns are merged. Defaults to [`MERGE_COLUMNS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B10");
var range2 = sheet.getRange("C:C10");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .addRange(range2)
    .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param mergeStrategy The merge strategy to use.
@return this builder, for chaining*/setMergeStrategy(mergeStrategy:Charts.ChartMergeStrategy):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the number of rows or columns of the range that should be treated as headers.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setNumHeaders(1)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param headers The number of rows or columns to treat as headers. Negative values cause headers
    to be auto-detected.
@return this builder, for chaining*/setNumHeaders(headers:Integer):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets advanced options for this chart. To view a list of the available options, see [Chart
configuration options](https://developers.google.com/apps-script/chart-configuration-options).

This method doesn't validate the option you specify is valid for this chart type nor if the
value is of the correct format/structure.

This example shows how to change the title and set a legend.

```
builder.setOption('title', 'Earnings projections');
builder.setOption('legend', {position: 'top', textStyle: {color: 'blue', fontSize: 16}});
```
@param option The name of the option.
@param value The value of the option.
@return This builder, for chaining.*/setOption(option:string,value:Object):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the position, changing where the chart appears on the sheet. `anchorRowPos` and
`anchorColPos` are 1-indexed.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param anchorRowPos The chart's top side is anchored in this row.
@param anchorColPos The chart's left side is anchored in this column.
@param offsetX The chart's upper right-hand corner is offset by this many pixels.
@param offsetY The chart's lower left-hand corner is offset by this many pixels.
@return this builder, for chaining*/setPosition(anchorRowPos:Integer,anchorColPos:Integer,offsetX:Integer,offsetY:Integer):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the range for the chart.

If any data points fall outside the range, the range is expanded to include those data
points.
@param start The value for the lowest grid line of the range axis.
@param end The value for the highest grid line of the range axis.
@return This builder, useful for chaining.*/setRange(start:number,end:number):SpreadsheetApp.EmbeddedColumnChartBuilder;
/**Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
there is no stacking.
@return This builder, useful for chaining.*/setStacked():SpreadsheetApp.EmbeddedColumnChartBuilder;
/**Sets the title of the chart. The title is displayed centered above the chart.

```
// Creates a line chart builder and title to 'My Line Chart'.
var builder = Charts.newLineChart();
builder.setTitle('My Line Chart')
```
@param chartTitle the chart title.
@return This builder, useful for chaining.*/setTitle(chartTitle:string):SpreadsheetApp.EmbeddedColumnChartBuilder;
/**Sets the text style of the chart title.

```
// Creates a line chart builder and sets it up for a  blue, 26-point title.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
var builder = Charts.newLineChart();
builder.setTitleTextStyle(style);
```
@param textStyle The text style to use for the chart title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setTitleTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedColumnChartBuilder;
/**Sets whether the chart's rows and columns are transposed. If set to `true`, the rows and
columns are switched. Defaults to `false`.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setTransposeRowsAndColumns(true)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param transpose If `true`, the rows and columns used to construct the chart are
    transposed.
@return this builder, for chaining*/setTransposeRowsAndColumns(transpose:boolean):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the horizontal axis text style.

```
// Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setXAxisTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setXAxisTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedColumnChartBuilder;
/**Adds a title to the horizontal axis. The title is centered and appears below the axis value
labels.

```
// Creates a line chart builder and sets the X-axis title.
var builder = Charts.newLineChart();
builder.setTitle('X-axis Title')
```
@param title The title for the X-axis.
@return This builder, useful for chaining.*/setXAxisTitle(title:string):SpreadsheetApp.EmbeddedColumnChartBuilder;
/**Sets the horizontal axis title text style.

```
// Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setXAxisTitleTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setXAxisTitleTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedColumnChartBuilder;
/**Sets the vertical axis text style.

```
// Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setYAxisTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setYAxisTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedColumnChartBuilder;
/**Adds a title to the vertical axis. The title is centered and appears to the left of the value
labels.

```
// Creates a line chart builder and sets the Y-axis title.
var builder = Charts.newLineChart();
builder.setYAxisTitle('Y-axis Title')
```
@param title The title for the Y-axis.
@return This builder, useful for chaining.*/setYAxisTitle(title:string):SpreadsheetApp.EmbeddedColumnChartBuilder;
/**Sets the vertical axis title text style.

```
// Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setYAxisTitleTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setYAxisTitleTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedColumnChartBuilder;
/**Makes the range axis into a logarithmic scale (requires all values to be positive). The range
axis are the vertical axis for vertical charts (such as line, area, or column) and the
horizontal axis for horizontal charts (such as bar).
@return This builder, useful for chaining.*/useLogScale():SpreadsheetApp.EmbeddedColumnChartBuilder;}interface EmbeddedChartBuilder{
/**Adds a range to the chart this builder modifies. Does not add the range if it has already been
added to the chart.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param range The range to add.
@return this builder, for chaining*/addRange(range:SpreadsheetApp.Range):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the chart type to AreaChart and returns an [`EmbeddedAreaChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html).
@return a builder for an area chart*/asAreaChart():SpreadsheetApp.EmbeddedAreaChartBuilder;
/**Sets the chart type to BarChart and returns an [`EmbeddedBarChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html).
@return a builder for a bar chart*/asBarChart():SpreadsheetApp.EmbeddedBarChartBuilder;
/**Sets the chart type to ColumnChart and returns an [`EmbeddedColumnChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html).
@return a builder for a column chart*/asColumnChart():SpreadsheetApp.EmbeddedColumnChartBuilder;
/**Sets the chart type to ComboChart and returns an [`EmbeddedComboChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html).
@return a builder for a combo chart*/asComboChart():SpreadsheetApp.EmbeddedComboChartBuilder;
/**Sets the chart type to HistogramChart and returns an [`EmbeddedHistogramChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html).
@return a builder for a histogram chart*/asHistogramChart():SpreadsheetApp.EmbeddedHistogramChartBuilder;
/**Sets the chart type to LineChart and returns an [`EmbeddedLineChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html).
@return a builder for a line chart*/asLineChart():SpreadsheetApp.EmbeddedLineChartBuilder;
/**Sets the chart type to PieChart and returns an [`EmbeddedPieChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html).
@return a builder for a pie chart*/asPieChart():SpreadsheetApp.EmbeddedPieChartBuilder;
/**Sets the chart type to ScatterChart and returns an [`EmbeddedScatterChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html).
@return a builder for a scatter chart*/asScatterChart():SpreadsheetApp.EmbeddedScatterChartBuilder;
/**Sets the chart type to TableChart and returns an [`EmbeddedTableChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html).
@return a builder for a table chart*/asTableChart():SpreadsheetApp.EmbeddedTableChartBuilder;
/**Builds the chart to reflect all changes made to it.

This method does not automatically draw the chart on top of the spreadsheet. A new chart
must be inserted via `sheet.insertChart(chart)`, and an existing chart should be updated
via `sheet.updateChart(chart)`.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@return the created chart, which must still be added to the spreadsheet*/build():SpreadsheetApp.EmbeddedChart;
/**Removes all ranges from the chart this builder modifies.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This code updates the chart to use only the new ranges while preserving the existing
// formatting of the chart.
var chart = sheet.getCharts()[0];
var newChart = chart
    .modify()
    .clearRanges()
    .addRange(sheet.getRange("A1:A5"))
    .addRange(sheet.getRange("B1:B5"))
    .build();
sheet.updateChart(newChart);
```
@return this builder, for chaining*/clearRanges():SpreadsheetApp.EmbeddedChartBuilder;
/**Returns the current chart type.
@return the chart type*/getChartType():Charts.ChartType;
/**Return the chart [`ContainerInfo`](https://developers.google.com/apps-script/reference/spreadsheet/container-info.html), which encapsulates where the chart appears on the
sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0);

// This method returns the exact same data as Chart#getContainerInfo()
var containerInfo = chartBuilder.getContainer();

// Logs the values we used in setPosition()
Logger.log("Anchor Column: %s\r
Anchor Row %s\r
Offset X %s\r
Offset Y %s",
          containerInfo.getAnchorColumn(),
          containerInfo.getAnchorRow(),
          containerInfo.getOffsetX(),
          containerInfo.getOffsetY());
```
@return an object containing the chart container's position*/getContainer():SpreadsheetApp.ContainerInfo;
/**Returns a copy of the list of ranges currently providing data for this chart. Use [`addRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder.html#addRange(Range)) and [`removeRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder.html#removeRange(Range)) to modify this list.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0);

var ranges = chartBuilder.getRanges();

// There's only one range as a data source for this chart,
// so this logs "A1:B8"
for (var i in ranges) {
  var range = ranges[i];
  Logger.log(range.getA1Notation());
}
```
@return an array of ranges that serve as the chart to be built's data source*/getRanges():SpreadsheetApp.Range[];
/**Removes the specified range from the chart this builder modifies. Does not throw an error if
the range is not in this chart.

The range removed must match up with a range added via [`addRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder.html#addRange(Range));
otherwise no change is made to the chart. This method cannot be used to partially remove values
from a range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var firstRange = sheet.getRange("A1:B5");
var secondRange = sheet.getRange("A6:B8");

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(firstRange)
    // This range will render in a different color
    .addRange(secondRange)
    .setPosition(5, 5, 0, 0);

// Note that you can use either of these two formats, but the range
// MUST match up with a range that was added via addRange(), or it
// will not be removed, and will not throw an exception
chartBuilder.removeRange(firstRange);
chartBuilder.removeRange(sheet.getRange("A6:B8"));

var chart = chartBuilder.build();

sheet.insertChart(chart);
```
@param range The range to remove.
@return this builder, for chaining*/removeRange(range:SpreadsheetApp.Range):SpreadsheetApp.EmbeddedChartBuilder;
/**Changes the type of chart. Not all embedded chart types are currently supported. See [`ChartType`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param type The type to change this chart into.
@return this builder, for chaining*/setChartType(type:Charts.ChartType):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the strategy to use for hidden rows and columns. Defaults to [`IGNORE_ROWS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param strategy The strategy to use for hidden rows and columns.
@return this builder, for chaining*/setHiddenDimensionStrategy(strategy:Charts.ChartHiddenDimensionStrategy):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the merge strategy to use when more than one range exists. If [`MERGE_ROWS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html), rows are merged; if [`MERGE_COLUMNS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html), columns are merged. Defaults to [`MERGE_COLUMNS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B10");
var range2 = sheet.getRange("C:C10");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .addRange(range2)
    .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param mergeStrategy The merge strategy to use.
@return this builder, for chaining*/setMergeStrategy(mergeStrategy:Charts.ChartMergeStrategy):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the number of rows or columns of the range that should be treated as headers.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setNumHeaders(1)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param headers The number of rows or columns to treat as headers. Negative values cause headers
    to be auto-detected.
@return this builder, for chaining*/setNumHeaders(headers:Integer):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets advanced options for this chart. To view a list of the available options, see [Chart
configuration options](https://developers.google.com/apps-script/chart-configuration-options).

This method doesn't validate the option you specify is valid for this chart type nor if the
value is of the correct format/structure.

This example shows how to change the title and set a legend.

```
builder.setOption('title', 'Earnings projections');
builder.setOption('legend', {position: 'top', textStyle: {color: 'blue', fontSize: 16}});
```
@param option The name of the option.
@param value The value of the option.
@return This builder, for chaining.*/setOption(option:string,value:Object):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the position, changing where the chart appears on the sheet. `anchorRowPos` and
`anchorColPos` are 1-indexed.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param anchorRowPos The chart's top side is anchored in this row.
@param anchorColPos The chart's left side is anchored in this column.
@param offsetX The chart's upper right-hand corner is offset by this many pixels.
@param offsetY The chart's lower left-hand corner is offset by this many pixels.
@return this builder, for chaining*/setPosition(anchorRowPos:Integer,anchorColPos:Integer,offsetX:Integer,offsetY:Integer):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets whether the chart's rows and columns are transposed. If set to `true`, the rows and
columns are switched. Defaults to `false`.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setTransposeRowsAndColumns(true)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param transpose If `true`, the rows and columns used to construct the chart are
    transposed.
@return this builder, for chaining*/setTransposeRowsAndColumns(transpose:boolean):SpreadsheetApp.EmbeddedChartBuilder;}interface EmbeddedChart{
/**Casts to a data source chart instance if the chart is a data source chart, or `null`
otherwise.
@return The data source chart.*/asDataSourceChart():SpreadsheetApp.DataSourceChart;
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
/**Returns a stable identifier for the chart that is unique across the spreadsheet containing the
chart or `null` if the chart is not in a spreadsheet.
@return A stable chart identifier.*/getChartId():Integer;
/**Returns information about where the chart is positioned within a sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0)
    .build();

var containerInfo = chart.getContainerInfo();

// Logs the values we used in setPosition()
Logger.log("Anchor Column: %s\r
Anchor Row %s\r
Offset X %s\r
Offset Y %s",
          containerInfo.getAnchorColumn(),
          containerInfo.getAnchorRow(),
          containerInfo.getOffsetX(),
          containerInfo.getOffsetY());
```
@return an object containing the chart container's position*/getContainerInfo():SpreadsheetApp.ContainerInfo;
/**Returns the strategy to use for handling hidden rows and columns. Defaults to [`IGNORE_ROWS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
    .setPosition(5, 5, 0, 0)
    .build()

// Logs the strategy to use for hidden rows and columns which is
// Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS in this case.
Logger.log(chart.getHiddenDimensionStrategy());
```
@return The strategy to use for hidden rows and columns.*/getHiddenDimensionStrategy():Charts.ChartHiddenDimensionStrategy;
/**Returns the merge strategy used when more than one range exists. If [`MERGE_ROWS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html#MERGE_ROWS), row are merged; if [`MERGE_COLUMNS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html#MERGE_COLUMNS), columns are merged. Defaults to [`MERGE_COLUMNS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html#MERGE_COLUMNS).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B10");
var range2 = sheet.getRange("C1:C10");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .addRange(range2)
    .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
    .setPosition(5, 5, 0, 0)
    .build()

// Logs whether rows of multiple ranges are merged, which is MERGE_ROWS in this case.
Logger.log(chart.getMergeStrategy());
```
@return [`MERGE_ROWS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html#MERGE_ROWS) if rows are merged across multiple
    ranges; [`MERGE_COLUMNS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html#MERGE_COLUMNS) if columns are merged
    across multiple ranges*/getMergeStrategy():Charts.ChartMergeStrategy;
/**Returns the number of rows or columns the range that are treated as headers.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setNumHeaders(1)
    .setPosition(5, 5, 0, 0)
    .build()

// Logs the number of rows or columns to use as headers, which is 1 in this case.
Logger.log(chart.getHeaders());
```
@return The number of rows or columns treated as headers. Negative values indicate the headers
    are auto-detected.*/getNumHeaders():Integer;
/**Returns the options for this chart, such as height, colors, and axes.

The returned options are immutable.
@return The options for this chart, such as height, colors, and axes.*/getOptions():Charts.ChartOptions;
/**Returns the ranges that this chart uses as a data source.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0)
    .build();

var ranges = chart.getRanges();

// There's only one range as a data source for this chart,
// so this logs "A1:B8"
for (var i in ranges) {
  var range = ranges[i];
  Logger.log(range.getA1Notation());
}
```
@return an array of ranges that serve as this chart's data source*/getRanges():SpreadsheetApp.Range[];
/**If `true`, the rows and columns used to populate the chart are switched. Defaults to
`false`.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .addRange(range)
    .setChartType(Charts.ChartType.BAR)
    .setTransposeRowsAndColumns(true)
    .setPosition(5, 5, 0, 0)
    .build()

// Logs whether rows and columns should be transposed, which is true in this case.
Logger.log(chart.getTransposeRowsAndColumns());
```
@return `true` if the rows and columns used to construct the chart are transposed.*/getTransposeRowsAndColumns():boolean;
/**Returns an [`EmbeddedChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-chart-builder.html) that can be used to modify this chart. Invoke `sheet.updateChart(chart)` to save any changes.

```
var sheet = SpreadsheetApp.getActiveSheet();
var chart = sheet.getCharts()[0];
chart = chart.modify()
    .setOption('width', 800)
    .setOption('height', 640)
    .setPosition(5, 5, 0, 0)
    .build();
sheet.updateChart(chart);
```
@return a builder for creating embedded charts*/modify():SpreadsheetApp.EmbeddedChartBuilder;}interface EmbeddedBarChartBuilder{
/**Adds a range to the chart this builder modifies. Does not add the range if it has already been
added to the chart.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param range The range to add.
@return this builder, for chaining*/addRange(range:SpreadsheetApp.Range):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the chart type to AreaChart and returns an [`EmbeddedAreaChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html).
@return a builder for an area chart*/asAreaChart():SpreadsheetApp.EmbeddedAreaChartBuilder;
/**Sets the chart type to BarChart and returns an [`EmbeddedBarChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html).
@return a builder for a bar chart*/asBarChart():SpreadsheetApp.EmbeddedBarChartBuilder;
/**Sets the chart type to ColumnChart and returns an [`EmbeddedColumnChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html).
@return a builder for a column chart*/asColumnChart():SpreadsheetApp.EmbeddedColumnChartBuilder;
/**Sets the chart type to ComboChart and returns an [`EmbeddedComboChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html).
@return a builder for a combo chart*/asComboChart():SpreadsheetApp.EmbeddedComboChartBuilder;
/**Sets the chart type to HistogramChart and returns an [`EmbeddedHistogramChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html).
@return a builder for a histogram chart*/asHistogramChart():SpreadsheetApp.EmbeddedHistogramChartBuilder;
/**Sets the chart type to LineChart and returns an [`EmbeddedLineChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html).
@return a builder for a line chart*/asLineChart():SpreadsheetApp.EmbeddedLineChartBuilder;
/**Sets the chart type to PieChart and returns an [`EmbeddedPieChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html).
@return a builder for a pie chart*/asPieChart():SpreadsheetApp.EmbeddedPieChartBuilder;
/**Sets the chart type to ScatterChart and returns an [`EmbeddedScatterChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html).
@return a builder for a scatter chart*/asScatterChart():SpreadsheetApp.EmbeddedScatterChartBuilder;
/**Sets the chart type to TableChart and returns an [`EmbeddedTableChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html).
@return a builder for a table chart*/asTableChart():SpreadsheetApp.EmbeddedTableChartBuilder;
/**Builds the chart to reflect all changes made to it.

This method does not automatically draw the chart on top of the spreadsheet. A new chart
must be inserted via `sheet.insertChart(chart)`, and an existing chart should be updated
via `sheet.updateChart(chart)`.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@return the created chart, which must still be added to the spreadsheet*/build():SpreadsheetApp.EmbeddedChart;
/**Removes all ranges from the chart this builder modifies.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This code updates the chart to use only the new ranges while preserving the existing
// formatting of the chart.
var chart = sheet.getCharts()[0];
var newChart = chart
    .modify()
    .clearRanges()
    .addRange(sheet.getRange("A1:A5"))
    .addRange(sheet.getRange("B1:B5"))
    .build();
sheet.updateChart(newChart);
```
@return this builder, for chaining*/clearRanges():SpreadsheetApp.EmbeddedChartBuilder;
/**Returns the current chart type.
@return the chart type*/getChartType():Charts.ChartType;
/**Return the chart [`ContainerInfo`](https://developers.google.com/apps-script/reference/spreadsheet/container-info.html), which encapsulates where the chart appears on the
sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0);

// This method returns the exact same data as Chart#getContainerInfo()
var containerInfo = chartBuilder.getContainer();

// Logs the values we used in setPosition()
Logger.log("Anchor Column: %s\r
Anchor Row %s\r
Offset X %s\r
Offset Y %s",
          containerInfo.getAnchorColumn(),
          containerInfo.getAnchorRow(),
          containerInfo.getOffsetX(),
          containerInfo.getOffsetY());
```
@return an object containing the chart container's position*/getContainer():SpreadsheetApp.ContainerInfo;
/**Returns a copy of the list of ranges currently providing data for this chart. Use [`addRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html#addRange(Range)) and [`removeRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html#removeRange(Range)) to modify this list.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0);

var ranges = chartBuilder.getRanges();

// There's only one range as a data source for this chart,
// so this logs "A1:B8"
for (var i in ranges) {
  var range = ranges[i];
  Logger.log(range.getA1Notation());
}
```
@return an array of ranges that serve as the chart to be built's data source*/getRanges():SpreadsheetApp.Range[];
/**Removes the specified range from the chart this builder modifies. Does not throw an error if
the range is not in this chart.

The range removed must match up with a range added via [`addRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html#addRange(Range));
otherwise no change is made to the chart. This method cannot be used to partially remove values
from a range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var firstRange = sheet.getRange("A1:B5");
var secondRange = sheet.getRange("A6:B8");

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(firstRange)
    // This range will render in a different color
    .addRange(secondRange)
    .setPosition(5, 5, 0, 0);

// Note that you can use either of these two formats, but the range
// MUST match up with a range that was added via addRange(), or it
// will not be removed, and will not throw an exception
chartBuilder.removeRange(firstRange);
chartBuilder.removeRange(sheet.getRange("A6:B8"));

var chart = chartBuilder.build();

sheet.insertChart(chart);
```
@param range The range to remove.
@return this builder, for chaining*/removeRange(range:SpreadsheetApp.Range):SpreadsheetApp.EmbeddedChartBuilder;
/**Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
area or column charts), this means the horizontal axis is drawn from right to left. For
horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
bottom. For pie charts, this means the slices are drawn counterclockwise.

```
// Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
var builder = Charts.newPieChart();
builder.reverseCategories();
```
@return This builder, useful for chaining.*/reverseCategories():SpreadsheetApp.EmbeddedBarChartBuilder;
/**Reverses the direction in which the bars grow along the horizontal axis. By default, values
grow from left to right. Calling this method causes them to grow from right to left.
@return This builder, useful for chaining.*/reverseDirection():SpreadsheetApp.EmbeddedBarChartBuilder;
/**Sets the background color for the chart.

```
// Creates a line chart builder and sets the background color to gray
var builder = Charts.newLineChart();
builder.setBackgroundColor("gray");
```
@param cssValue The CSS value for the color (such as `"blue"` or `"#00f"`).
@return This builder, useful for chaining.*/setBackgroundColor(cssValue:string):SpreadsheetApp.EmbeddedBarChartBuilder;
/**Changes the type of chart. Not all embedded chart types are currently supported. See [`ChartType`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param type The type to change this chart into.
@return this builder, for chaining*/setChartType(type:Charts.ChartType):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the colors for the lines in the chart.

```
// Creates a line chart builder and sets the first two lines to be drawn in green and red,
// respectively.
var builder = Charts.newLineChart();
builder.setColors(["green", "red"]);
```
@param cssValues An array of color CSS values, such as `["red", "#acf"]`. The nth element
    in the array represents the color of the nth line in the chart.
@return This builder, useful for chaining.*/setColors(cssValues:string[]):SpreadsheetApp.EmbeddedBarChartBuilder;
/**Sets the strategy to use for hidden rows and columns. Defaults to [`IGNORE_ROWS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param strategy The strategy to use for hidden rows and columns.
@return this builder, for chaining*/setHiddenDimensionStrategy(strategy:Charts.ChartHiddenDimensionStrategy):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the position of the legend with respect to the chart. By default, there is no legend.

```
// Creates a line chart builder and sets the legend position to right.
var builder = Charts.newLineChart();
builder.setLegendPosition(Charts.Position.RIGHT);
```
@param position The position of the legend.
@return This builder, useful for chaining.*/setLegendPosition(position:Charts.Position):SpreadsheetApp.EmbeddedBarChartBuilder;
/**Sets the text style of the chart legend.

```
// Creates a line chart builder and sets it up for a  blue, 26-point legend.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
var builder = Charts.newLineChart();
builder.setLegendTextStyle(style);
```
@param textStyle The text style to use for the chart legend.
@return This builder, useful for chaining.*/setLegendTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedBarChartBuilder;
/**Sets the merge strategy to use when more than one range exists. If [`MERGE_ROWS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html), rows are merged; if [`MERGE_COLUMNS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html), columns are merged. Defaults to [`MERGE_COLUMNS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B10");
var range2 = sheet.getRange("C:C10");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .addRange(range2)
    .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param mergeStrategy The merge strategy to use.
@return this builder, for chaining*/setMergeStrategy(mergeStrategy:Charts.ChartMergeStrategy):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the number of rows or columns of the range that should be treated as headers.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setNumHeaders(1)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param headers The number of rows or columns to treat as headers. Negative values cause headers
    to be auto-detected.
@return this builder, for chaining*/setNumHeaders(headers:Integer):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets advanced options for this chart. To view a list of the available options, see [Chart
configuration options](https://developers.google.com/apps-script/chart-configuration-options).

This method doesn't validate the option you specify is valid for this chart type nor if the
value is of the correct format/structure.

This example shows how to change the title and set a legend.

```
builder.setOption('title', 'Earnings projections');
builder.setOption('legend', {position: 'top', textStyle: {color: 'blue', fontSize: 16}});
```
@param option The name of the option.
@param value The value of the option.
@return This builder, for chaining.*/setOption(option:string,value:Object):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the position, changing where the chart appears on the sheet. `anchorRowPos` and
`anchorColPos` are 1-indexed.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param anchorRowPos The chart's top side is anchored in this row.
@param anchorColPos The chart's left side is anchored in this column.
@param offsetX The chart's upper right-hand corner is offset by this many pixels.
@param offsetY The chart's lower left-hand corner is offset by this many pixels.
@return this builder, for chaining*/setPosition(anchorRowPos:Integer,anchorColPos:Integer,offsetX:Integer,offsetY:Integer):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the range for the chart.

If any data points fall outside the range, the range is expanded to include those data
points.
@param start The value for the lowest grid line of the range axis.
@param end The value for the highest grid line of the range axis.
@return This builder, useful for chaining.*/setRange(start:number,end:number):SpreadsheetApp.EmbeddedBarChartBuilder;
/**Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
there is no stacking.
@return This builder, useful for chaining.*/setStacked():SpreadsheetApp.EmbeddedBarChartBuilder;
/**Sets the title of the chart. The title is displayed centered above the chart.

```
// Creates a line chart builder and title to 'My Line Chart'.
var builder = Charts.newLineChart();
builder.setTitle('My Line Chart')
```
@param chartTitle the chart title.
@return This builder, useful for chaining.*/setTitle(chartTitle:string):SpreadsheetApp.EmbeddedBarChartBuilder;
/**Sets the text style of the chart title.

```
// Creates a line chart builder and sets it up for a  blue, 26-point title.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
var builder = Charts.newLineChart();
builder.setTitleTextStyle(style);
```
@param textStyle The text style to use for the chart title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setTitleTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedBarChartBuilder;
/**Sets whether the chart's rows and columns are transposed. If set to `true`, the rows and
columns are switched. Defaults to `false`.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setTransposeRowsAndColumns(true)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param transpose If `true`, the rows and columns used to construct the chart are
    transposed.
@return this builder, for chaining*/setTransposeRowsAndColumns(transpose:boolean):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the horizontal axis text style.

```
// Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setXAxisTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setXAxisTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedBarChartBuilder;
/**Adds a title to the horizontal axis. The title is centered and appears below the axis value
labels.

```
// Creates a line chart builder and sets the X-axis title.
var builder = Charts.newLineChart();
builder.setTitle('X-axis Title')
```
@param title The title for the X-axis.
@return This builder, useful for chaining.*/setXAxisTitle(title:string):SpreadsheetApp.EmbeddedBarChartBuilder;
/**Sets the horizontal axis title text style.

```
// Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setXAxisTitleTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setXAxisTitleTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedBarChartBuilder;
/**Sets the vertical axis text style.

```
// Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setYAxisTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setYAxisTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedBarChartBuilder;
/**Adds a title to the vertical axis. The title is centered and appears to the left of the value
labels.

```
// Creates a line chart builder and sets the Y-axis title.
var builder = Charts.newLineChart();
builder.setYAxisTitle('Y-axis Title')
```
@param title The title for the Y-axis.
@return This builder, useful for chaining.*/setYAxisTitle(title:string):SpreadsheetApp.EmbeddedBarChartBuilder;
/**Sets the vertical axis title text style.

```
// Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setYAxisTitleTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setYAxisTitleTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedBarChartBuilder;
/**Makes the range axis into a logarithmic scale (requires all values to be positive). The range
axis are the vertical axis for vertical charts (such as line, area, or column) and the
horizontal axis for horizontal charts (such as bar).
@return This builder, useful for chaining.*/useLogScale():SpreadsheetApp.EmbeddedBarChartBuilder;}interface EmbeddedAreaChartBuilder{
/**Adds a range to the chart this builder modifies. Does not add the range if it has already been
added to the chart.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param range The range to add.
@return this builder, for chaining*/addRange(range:SpreadsheetApp.Range):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the chart type to AreaChart and returns an [`EmbeddedAreaChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html).
@return a builder for an area chart*/asAreaChart():SpreadsheetApp.EmbeddedAreaChartBuilder;
/**Sets the chart type to BarChart and returns an [`EmbeddedBarChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-bar-chart-builder.html).
@return a builder for a bar chart*/asBarChart():SpreadsheetApp.EmbeddedBarChartBuilder;
/**Sets the chart type to ColumnChart and returns an [`EmbeddedColumnChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-column-chart-builder.html).
@return a builder for a column chart*/asColumnChart():SpreadsheetApp.EmbeddedColumnChartBuilder;
/**Sets the chart type to ComboChart and returns an [`EmbeddedComboChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-combo-chart-builder.html).
@return a builder for a combo chart*/asComboChart():SpreadsheetApp.EmbeddedComboChartBuilder;
/**Sets the chart type to HistogramChart and returns an [`EmbeddedHistogramChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-histogram-chart-builder.html).
@return a builder for a histogram chart*/asHistogramChart():SpreadsheetApp.EmbeddedHistogramChartBuilder;
/**Sets the chart type to LineChart and returns an [`EmbeddedLineChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-line-chart-builder.html).
@return a builder for a line chart*/asLineChart():SpreadsheetApp.EmbeddedLineChartBuilder;
/**Sets the chart type to PieChart and returns an [`EmbeddedPieChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-pie-chart-builder.html).
@return a builder for a pie chart*/asPieChart():SpreadsheetApp.EmbeddedPieChartBuilder;
/**Sets the chart type to ScatterChart and returns an [`EmbeddedScatterChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-scatter-chart-builder.html).
@return a builder for a scatter chart*/asScatterChart():SpreadsheetApp.EmbeddedScatterChartBuilder;
/**Sets the chart type to TableChart and returns an [`EmbeddedTableChartBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-table-chart-builder.html).
@return a builder for a table chart*/asTableChart():SpreadsheetApp.EmbeddedTableChartBuilder;
/**Builds the chart to reflect all changes made to it.

This method does not automatically draw the chart on top of the spreadsheet. A new chart
must be inserted via `sheet.insertChart(chart)`, and an existing chart should be updated
via `sheet.updateChart(chart)`.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@return the created chart, which must still be added to the spreadsheet*/build():SpreadsheetApp.EmbeddedChart;
/**Removes all ranges from the chart this builder modifies.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

// This code updates the chart to use only the new ranges while preserving the existing
// formatting of the chart.
var chart = sheet.getCharts()[0];
var newChart = chart
    .modify()
    .clearRanges()
    .addRange(sheet.getRange("A1:A5"))
    .addRange(sheet.getRange("B1:B5"))
    .build();
sheet.updateChart(newChart);
```
@return this builder, for chaining*/clearRanges():SpreadsheetApp.EmbeddedChartBuilder;
/**Returns the current chart type.
@return the chart type*/getChartType():Charts.ChartType;
/**Return the chart [`ContainerInfo`](https://developers.google.com/apps-script/reference/spreadsheet/container-info.html), which encapsulates where the chart appears on the
sheet.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0);

// This method returns the exact same data as Chart#getContainerInfo()
var containerInfo = chartBuilder.getContainer();

// Logs the values we used in setPosition()
Logger.log("Anchor Column: %s\r
Anchor Row %s\r
Offset X %s\r
Offset Y %s",
          containerInfo.getAnchorColumn(),
          containerInfo.getAnchorRow(),
          containerInfo.getOffsetX(),
          containerInfo.getOffsetY());
```
@return an object containing the chart container's position*/getContainer():SpreadsheetApp.ContainerInfo;
/**Returns a copy of the list of ranges currently providing data for this chart. Use [`addRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html#addRange(Range)) and [`removeRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html#removeRange(Range)) to modify this list.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(sheet.getRange("A1:B8"))
    .setPosition(5, 5, 0, 0);

var ranges = chartBuilder.getRanges();

// There's only one range as a data source for this chart,
// so this logs "A1:B8"
for (var i in ranges) {
  var range = ranges[i];
  Logger.log(range.getA1Notation());
}
```
@return an array of ranges that serve as the chart to be built's data source*/getRanges():SpreadsheetApp.Range[];
/**Removes the specified range from the chart this builder modifies. Does not throw an error if
the range is not in this chart.

The range removed must match up with a range added via [`addRange(range)`](https://developers.google.com/apps-script/reference/spreadsheet/embedded-area-chart-builder.html#addRange(Range));
otherwise no change is made to the chart. This method cannot be used to partially remove values
from a range.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var firstRange = sheet.getRange("A1:B5");
var secondRange = sheet.getRange("A6:B8");

var chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(firstRange)
    // This range will render in a different color
    .addRange(secondRange)
    .setPosition(5, 5, 0, 0);

// Note that you can use either of these two formats, but the range
// MUST match up with a range that was added via addRange(), or it
// will not be removed, and will not throw an exception
chartBuilder.removeRange(firstRange);
chartBuilder.removeRange(sheet.getRange("A6:B8"));

var chart = chartBuilder.build();

sheet.insertChart(chart);
```
@param range The range to remove.
@return this builder, for chaining*/removeRange(range:SpreadsheetApp.Range):SpreadsheetApp.EmbeddedChartBuilder;
/**Reverses the drawing of series in the domain axis. For vertical-range charts (such as line,
area or column charts), this means the horizontal axis is drawn from right to left. For
horizontal-range charts (such as bar charts), this means the vertical axis is drawn from top to
bottom. For pie charts, this means the slices are drawn counterclockwise.

```
// Creates a pie chart builder and sets drawing of the slices in a counter-clockwise manner.
var builder = Charts.newPieChart();
builder.reverseCategories();
```
@return This builder, useful for chaining.*/reverseCategories():SpreadsheetApp.EmbeddedAreaChartBuilder;
/**Sets the background color for the chart.

```
// Creates a line chart builder and sets the background color to gray
var builder = Charts.newLineChart();
builder.setBackgroundColor("gray");
```
@param cssValue The CSS value for the color (such as `"blue"` or `"#00f"`).
@return This builder, useful for chaining.*/setBackgroundColor(cssValue:string):SpreadsheetApp.EmbeddedAreaChartBuilder;
/**Changes the type of chart. Not all embedded chart types are currently supported. See [`ChartType`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-type.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param type The type to change this chart into.
@return this builder, for chaining*/setChartType(type:Charts.ChartType):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the colors for the lines in the chart.

```
// Creates a line chart builder and sets the first two lines to be drawn in green and red,
// respectively.
var builder = Charts.newLineChart();
builder.setColors(["green", "red"]);
```
@param cssValues An array of color CSS values, such as `["red", "#acf"]`. The nth element
    in the array represents the color of the nth line in the chart.
@return This builder, useful for chaining.*/setColors(cssValues:string[]):SpreadsheetApp.EmbeddedAreaChartBuilder;
/**Sets the strategy to use for hidden rows and columns. Defaults to [`IGNORE_ROWS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-hidden-dimension-strategy.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setHiddenDimensionStrategy(Charts.ChartHiddenDimensionStrategy.IGNORE_COLUMNS)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param strategy The strategy to use for hidden rows and columns.
@return this builder, for chaining*/setHiddenDimensionStrategy(strategy:Charts.ChartHiddenDimensionStrategy):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the position of the legend with respect to the chart. By default, there is no legend.

```
// Creates a line chart builder and sets the legend position to right.
var builder = Charts.newLineChart();
builder.setLegendPosition(Charts.Position.RIGHT);
```
@param position The position of the legend.
@return This builder, useful for chaining.*/setLegendPosition(position:Charts.Position):SpreadsheetApp.EmbeddedAreaChartBuilder;
/**Sets the text style of the chart legend.

```
// Creates a line chart builder and sets it up for a  blue, 26-point legend.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
var builder = Charts.newLineChart();
builder.setLegendTextStyle(style);
```
@param textStyle The text style to use for the chart legend.
@return This builder, useful for chaining.*/setLegendTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedAreaChartBuilder;
/**Sets the merge strategy to use when more than one range exists. If [`MERGE_ROWS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html), rows are merged; if [`MERGE_COLUMNS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html), columns are merged. Defaults to [`MERGE_COLUMNS`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/chart-merge-strategy.html).

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B10");
var range2 = sheet.getRange("C:C10");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .addRange(range2)
    .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_ROWS)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param mergeStrategy The merge strategy to use.
@return this builder, for chaining*/setMergeStrategy(mergeStrategy:Charts.ChartMergeStrategy):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the number of rows or columns of the range that should be treated as headers.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setNumHeaders(1)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param headers The number of rows or columns to treat as headers. Negative values cause headers
    to be auto-detected.
@return this builder, for chaining*/setNumHeaders(headers:Integer):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets advanced options for this chart. To view a list of the available options, see [Chart
configuration options](https://developers.google.com/apps-script/chart-configuration-options).

This method doesn't validate the option you specify is valid for this chart type nor if the
value is of the correct format/structure.

This example shows how to change the title and set a legend.

```
builder.setOption('title', 'Earnings projections');
builder.setOption('legend', {position: 'top', textStyle: {color: 'blue', fontSize: 16}});
```
@param option The name of the option.
@param value The value of the option.
@return This builder, for chaining.*/setOption(option:string,value:Object):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the style for points in the line. By default, points have no particular styles, and only
the line is visible.

```
// Creates a line chart builder and sets large point style.
var builder = Charts.newLineChart();
builder.setPointStyle(Charts.PointStyle.LARGE);
```
@param style The style to use for points in the line.
@return This builder, useful for chaining.*/setPointStyle(style:Charts.PointStyle):SpreadsheetApp.EmbeddedAreaChartBuilder;
/**Sets the position, changing where the chart appears on the sheet. `anchorRowPos` and
`anchorColPos` are 1-indexed.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param anchorRowPos The chart's top side is anchored in this row.
@param anchorColPos The chart's left side is anchored in this column.
@param offsetX The chart's upper right-hand corner is offset by this many pixels.
@param offsetY The chart's lower left-hand corner is offset by this many pixels.
@return this builder, for chaining*/setPosition(anchorRowPos:Integer,anchorColPos:Integer,offsetX:Integer,offsetY:Integer):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the range for the chart.

If any data points fall outside the range, the range is expanded to include those data
points.
@param start The value for the lowest grid line of the range axis.
@param end The value for the highest grid line of the range axis.
@return This builder, useful for chaining.*/setRange(start:number,end:number):SpreadsheetApp.EmbeddedAreaChartBuilder;
/**Uses stacked lines, meaning that line and bar values are stacked (accumulated). By default,
there is no stacking.
@return This builder, useful for chaining.*/setStacked():SpreadsheetApp.EmbeddedAreaChartBuilder;
/**Sets the title of the chart. The title is displayed centered above the chart.

```
// Creates a line chart builder and title to 'My Line Chart'.
var builder = Charts.newLineChart();
builder.setTitle('My Line Chart')
```
@param chartTitle the chart title.
@return This builder, useful for chaining.*/setTitle(chartTitle:string):SpreadsheetApp.EmbeddedAreaChartBuilder;
/**Sets the text style of the chart title.

```
// Creates a line chart builder and sets it up for a  blue, 26-point title.
var textStyleBuilder = Charts.newTextStyle().setColor('#0000FF').setFontSize(26);
var style = textStyleBuilder.build();
var builder = Charts.newLineChart();
builder.setTitleTextStyle(style);
```
@param textStyle The text style to use for the chart title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setTitleTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedAreaChartBuilder;
/**Sets whether the chart's rows and columns are transposed. If set to `true`, the rows and
columns are switched. Defaults to `false`.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

var range = sheet.getRange("A1:B5");
var chart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(range)
    .setTransposeRowsAndColumns(true)
    .setPosition(5, 5, 0, 0)
    .build();

sheet.insertChart(chart);
```
@param transpose If `true`, the rows and columns used to construct the chart are
    transposed.
@return this builder, for chaining*/setTransposeRowsAndColumns(transpose:boolean):SpreadsheetApp.EmbeddedChartBuilder;
/**Sets the horizontal axis text style.

```
// Creates a line chart builder and sets the X-axis text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setXAxisTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setXAxisTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedAreaChartBuilder;
/**Adds a title to the horizontal axis. The title is centered and appears below the axis value
labels.

```
// Creates a line chart builder and sets the X-axis title.
var builder = Charts.newLineChart();
builder.setTitle('X-axis Title')
```
@param title The title for the X-axis.
@return This builder, useful for chaining.*/setXAxisTitle(title:string):SpreadsheetApp.EmbeddedAreaChartBuilder;
/**Sets the horizontal axis title text style.

```
// Creates a line chart builder and sets the X-axis title text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setXAxisTitleTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setXAxisTitleTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedAreaChartBuilder;
/**Sets the vertical axis text style.

```
// Creates a line chart builder and sets the Y-axis text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setYAxisTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setYAxisTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedAreaChartBuilder;
/**Adds a title to the vertical axis. The title is centered and appears to the left of the value
labels.

```
// Creates a line chart builder and sets the Y-axis title.
var builder = Charts.newLineChart();
builder.setYAxisTitle('Y-axis Title')
```
@param title The title for the Y-axis.
@return This builder, useful for chaining.*/setYAxisTitle(title:string):SpreadsheetApp.EmbeddedAreaChartBuilder;
/**Sets the vertical axis title text style.

```
// Creates a line chart builder and sets the Y-axis title text style to blue, 18-point font.
var textStyle = Charts.newTextStyle().setColor('blue').setFontSize(18).build();
var builder = Charts.newLineChart();
builder.setYAxisTitleTextStyle(textStyle);
```
@param textStyle The text style to use for the horizontal axis title. You can create a [`TextStyleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/text-style-builder.html) object by calling [`Charts.newTextStyle()`](https://developers.google.com/apps-script/reference/spreadsheet/../charts/charts.html#newTextStyle()).
@return This builder, useful for chaining.*/setYAxisTitleTextStyle(textStyle:Charts.TextStyle):SpreadsheetApp.EmbeddedAreaChartBuilder;
/**Makes the range axis into a logarithmic scale (requires all values to be positive). The range
axis are the vertical axis for vertical charts (such as line, area, or column) and the
horizontal axis for horizontal charts (such as bar).
@return This builder, useful for chaining.*/useLogScale():SpreadsheetApp.EmbeddedAreaChartBuilder;}interface Drawing{
/**Gets information about where the drawing is positioned in the sheet.
@return An object containing the drawing's container position.*/getContainerInfo():SpreadsheetApp.ContainerInfo;
/**Returns the actual height of this drawing in pixels.

```
// Logs the height of all drawings in a sheet
var drawings = SpreadsheetApp.getActiveSheet().getDrawings();
for (var i = 0; i < drawings.length; i++) {
  Logger.log(drawings[i].getHeight());
}
```
@return The height of the drawing in pixels.*/getHeight():Integer;
/**Returns the name of the macro attached to this drawing.

```
// Logs the macro name of all drawings on the active sheet.
var drawings = SpreadsheetApp.getActiveSheet().getDrawings();
for (var i = 0; i < drawings.length; i++) {
  Logger.log(drawings[i].getOnAction());
}
```
@return The macro name attached to this drawing.*/getOnAction():string;
/**Returns the sheet this drawing appears on.

```
// Logs the parent sheet of all drawings on the active sheet.
var drawings = SpreadsheetApp.getActiveSheet().getDrawings();
for (var i = 0; i < drawings.length; i++) {
  Logger.log(drawings[i].getSheet());
}
```
@return The sheet the drawing appears on.*/getSheet():SpreadsheetApp.Sheet;
/**Returns the actual width of this drawing in pixels.

```
// Logs the width of all drawings in a sheet
var drawings = SpreadsheetApp.getActiveSheet().getDrawings();
for (var i = 0; i < drawings.length; i++) {
  Logger.log(drawings[i].getWidth());
}
```
@return The width of the drawing in pixels.*/getWidth():Integer;
/**Returns the z-index of this drawing.

```
// Logs the z-index of all drawings on the active sheet.
var drawings = SpreadsheetApp.getActiveSheet().getDrawings();
for (var i = 0; i < drawings.length; i++) {
  Logger.log(drawings[i].getZIndex());
}
```
@return Z-Index of this drawing.*/getZIndex():number;
/**Deletes this drawing from the spreadsheet. Any further operation on the drawing results in a
script error.

```
// Deletes all drawings from the active sheet.
var drawings = SpreadsheetApp.getActiveSheet().getDrawings();
for (var i = 0; i < drawings.length; i++) {
  drawings[i].remove();
}
```*/remove():void;
/**Sets the actual height of this drawing in pixels.
@param height The desired height in pixels.
@return This drawing, for chaining.*/setHeight(height:Integer):SpreadsheetApp.Drawing;
/**Assigns a macro function to this drawing.
@param macroName Name of the macro function.
@return This drawing, for chaining.*/setOnAction(macroName:string):SpreadsheetApp.Drawing;
/**Sets the position where the drawing appears on the sheet. The anchor row and column position
indices are 1-indexed.
@param anchorRowPos The drawing's top side is anchored in this row.
@param anchorColPos The drawing's top side is anchored in this col.
@param offsetX The horizontal offset from the cell corner in pixels.
@param offsetY The vertical offset from the cell corner in pixels.
@return This drawing, for chaining.*/setPosition(anchorRowPos:Integer,anchorColPos:Integer,offsetX:Integer,offsetY:Integer):SpreadsheetApp.Drawing;
/**Sets the actual width of this drawing in pixels.
@param width The desired width in pixels.
@return This drawing, for chaining.*/setWidth(width:Integer):SpreadsheetApp.Drawing;
/**Sets the z-index of this drawing.
@param zIndex Z-Index of this drawing.
@return This drawing, for chaining.*/setZIndex(zIndex:number):SpreadsheetApp.Drawing;}interface Direction{}interface _Direction{
/**The direction of increasing row indices.*/DOWN:Direction;
/**The direction of increasing column indices.*/NEXT:Direction;
/**The direction of decreasing column indices.*/PREVIOUS:Direction;
/**The direction of decreasing row indices.*/UP:Direction;}interface Dimension{}interface _Dimension{
/**The column (vertical) dimension.*/COLUMNS:Dimension;
/**The row (horizontal) dimension.*/ROWS:Dimension;}interface DeveloperMetadataVisibility{}interface _DeveloperMetadataVisibility{
/**Document-visible metadata is accessible from any developer project with access to the document.*/DOCUMENT:DeveloperMetadataVisibility;
/**Project-visible metadata is only visible to and accessible by the developer project that
created the metadata. Do not use project-visible developer metadata as a security mechanism or
to store secrets. It can be exposed to users with view access to the document.*/PROJECT:DeveloperMetadataVisibility;}interface DeveloperMetadataLocationType{}interface _DeveloperMetadataLocationType{
/**The location type for developer metadata associated with a column.*/COLUMN:DeveloperMetadataLocationType;
/**The location type for developer metadata associated with a row.*/ROW:DeveloperMetadataLocationType;
/**The location type for developer metadata associated with a whole sheet.*/SHEET:DeveloperMetadataLocationType;
/**The location type for developer metadata associated with the top-level spreadsheet.*/SPREADSHEET:DeveloperMetadataLocationType;}interface DeveloperMetadataLocation{
/**Returns the [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) for the column location of this metadata, or `null` if the
location type is not `DeveloperMetadataLocationType.COLUMN`.
@return The [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) for the column location of this metadata, or `null` if the
    location type is not `DeveloperMetadataLocationType.COLUMN`.*/getColumn():SpreadsheetApp.Range;
/**Gets the type of location.
@return The location type.*/getLocationType():SpreadsheetApp.DeveloperMetadataLocationType;
/**Returns the [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) for the row location of this metadata, or `null` if the
location type is not `DeveloperMetadataLocationType.ROW`.
@return The [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) for the row location of this metadata, or `null` if the
    location type is not `DeveloperMetadataLocationType.ROW`.*/getRow():SpreadsheetApp.Range;
/**Returns the [`Sheet`](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html) location of this metadata, or `null` if the location type is
not `DeveloperMetadataLocationType.SHEET`.
@return The [`Sheet`](https://developers.google.com/apps-script/reference/spreadsheet/sheet.html) location of this metadata, or `null` if the location type is
    not `DeveloperMetadataLocationType.SHEET`.*/getSheet():SpreadsheetApp.Sheet;
/**Returns the [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html) location of this metadata, or `null` if the location
type is not `DeveloperMetadataLocationType.SPREADSHEET`.
@return The [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet.html) location of this metadata, or `null` if the location
    type is not `DeveloperMetadataLocationType.SPREADSHEET`.*/getSpreadsheet():SpreadsheetApp.Spreadsheet;}interface DeveloperMetadataFinder{
/**Executes this search and returns the matching metadata.
@return The developer metadata that match the search criteria.*/find():SpreadsheetApp.DeveloperMetadata[];
/**Configures the search to consider intersecting locations that have metadata. This option is
only valid for range-scoped searches.
@return The developer metadata finder, for chaining.*/onIntersectingLocations():SpreadsheetApp.DeveloperMetadataFinder;
/**Limits this search to consider only metadata that match the specified ID.
@param id The ID to match when searching for metadata.
@return The developer metadata finder, for chaining.*/withId(id:Integer):SpreadsheetApp.DeveloperMetadataFinder;
/**Limits this search to consider only metadata that match the specified key.
@param key The key to match when searching for metadata.
@return The developer metadata finder, for chaining.*/withKey(key:string):SpreadsheetApp.DeveloperMetadataFinder;
/**Limits this search to consider only metadata that match the specified location type.
@param locationType The location type to match when searching for metadata.
@return The developer metadata finder, for chaining.*/withLocationType(locationType:SpreadsheetApp.DeveloperMetadataLocationType):SpreadsheetApp.DeveloperMetadataFinder;
/**Limits this search to consider only metadata that match the specified value.
@param value The value to match when searching for metadata.
@return The developer metadata finder, for chaining.*/withValue(value:string):SpreadsheetApp.DeveloperMetadataFinder;
/**Limits this search to consider only metadata that match the specified visibility.
@param visibility The visibility to match when searching for metadata.
@return The developer metadata finder, for chaining.*/withVisibility(visibility:SpreadsheetApp.DeveloperMetadataVisibility):SpreadsheetApp.DeveloperMetadataFinder;}interface DeveloperMetadata{
/**Returns the unique ID associated with this developer metadata.
@return The unique ID associated with this developer metadata.*/getId():Integer;
/**Returns the key associated with this developer metadata.
@return The key associated with this developer metadata.*/getKey():string;
/**Returns the location of this developer metadata.
@return The location of this developer metadata.*/getLocation():SpreadsheetApp.DeveloperMetadataLocation;
/**Returns the value associated with this developer metadata, or `null` if this metadata has
no value.
@return The value associated with this developer metadata, or `null` if this metadata has
    no value.*/getValue():string;
/**Returns the visibility of this developer metadata.
@return The visibility of this developer metadata.*/getVisibility():SpreadsheetApp.DeveloperMetadataVisibility;
/**Moves this developer metadata to the specified column. If the specified range does not
represent a single column this throws an exception.
@param column The range representing the column that is the new location for this developer
    metadata.
@return The developer metadata, for chaining.*/moveToColumn(column:SpreadsheetApp.Range):SpreadsheetApp.DeveloperMetadata;
/**Moves this developer metadata to the specified row. If the specified range does not represent a
single row this throws an exception.
@param row The range representing the row that is the new location for this developer metadata.
@return The developer metadata, for chaining.*/moveToRow(row:SpreadsheetApp.Range):SpreadsheetApp.DeveloperMetadata;
/**Moves this developer metadata to the specified sheet.
@param sheet The sheet that is the new location for this developer metata.
@return The developer metadata, for chaining.*/moveToSheet(sheet:SpreadsheetApp.Sheet):SpreadsheetApp.DeveloperMetadata;
/**Moves this developer metadata to the top-level spreadsheet.
@return The developer metadata, for chaining.*/moveToSpreadsheet():SpreadsheetApp.DeveloperMetadata;
/**Deletes this metadata.*/remove():void;
/**Sets the key of this developer metadata to the specified value.
@param key The new key to set for this metadata.
@return The developer metadata, for chaining.*/setKey(key:string):SpreadsheetApp.DeveloperMetadata;
/**Sets the value associated with this developer metadata to the specified value.
@param value The new value to set for this metadata.
@return The developer metadata, for chaining.*/setValue(value:string):SpreadsheetApp.DeveloperMetadata;
/**Sets the visibility of this developer metadata to the specified visibility.
@param visibility The new visibility to set for this metadata.
@return The developer metadata, for chaining.*/setVisibility(visibility:SpreadsheetApp.DeveloperMetadataVisibility):SpreadsheetApp.DeveloperMetadata;}interface DateTimeGroupingRuleType{}interface _DateTimeGroupingRuleType{
/**Group date-time by day and month, for example `22-Nov`.*/DAY_MONTH:DateTimeGroupingRuleType;
/**Group date-time by day of month, from 1 to 31.*/DAY_OF_MONTH:DateTimeGroupingRuleType;
/**Group date-time by day of week, for example `Sunday`.*/DAY_OF_WEEK:DateTimeGroupingRuleType;
/**Group date-time by day of year, from 1 to 366.*/DAY_OF_YEAR:DateTimeGroupingRuleType;
/**Group date-time by hour using a 24-hour system, from 0 to 23.*/HOUR:DateTimeGroupingRuleType;
/**Group date-time by hour and minute using a 24-hour system, for example `19:45`.*/HOUR_MINUTE:DateTimeGroupingRuleType;
/**Group date-time by hour and minute using a 12-hour system, for example `7:45 PM`.*/HOUR_MINUTE_AMPM:DateTimeGroupingRuleType;
/**Group date-time by minute, from 0 to 59.*/MINUTE:DateTimeGroupingRuleType;
/**Group date-time by month, for example `Nov`.*/MONTH:DateTimeGroupingRuleType;
/**Group date-time by quarter, for example Q1 (which represents Jan-Mar).*/QUARTER:DateTimeGroupingRuleType;
/**Group date-time by second, from 0 to 59.*/SECOND:DateTimeGroupingRuleType;
/**A date-time grouping rule type that is not supported.*/UNSUPPORTED:DateTimeGroupingRuleType;
/**Group date-time by year, for example 2008.*/YEAR:DateTimeGroupingRuleType;
/**Group date-time by year and month, for example `2008-Nov`.*/YEAR_MONTH:DateTimeGroupingRuleType;
/**Group date-time by year, month, and day, for example `2008-11-22`.*/YEAR_MONTH_DAY:DateTimeGroupingRuleType;
/**Group date-time by year and quarter, for example `2008 Q4` .*/YEAR_QUARTER:DateTimeGroupingRuleType;}interface DateTimeGroupingRule{
/**Gets the type of the date-time grouping rule.
@return The rule type.*/getRuleType():SpreadsheetApp.DateTimeGroupingRuleType;}interface DataValidationCriteria{}interface _DataValidationCriteria{
/**Requires that the input is a custom value or a boolean; rendered as a checkbox.*/CHECKBOX:DataValidationCriteria;
/**Requires that the input makes the given formula evaluate to `true`.*/CUSTOM_FORMULA:DataValidationCriteria;
/**Requires a date that is after the given value.*/DATE_AFTER:DataValidationCriteria;
/**Requires a date that is before the given value.*/DATE_BEFORE:DataValidationCriteria;
/**Requires a date that is between the given values.*/DATE_BETWEEN:DataValidationCriteria;
/**Requires a date that is equal to the given value.*/DATE_EQUAL_TO:DataValidationCriteria;
/**Requires a date.*/DATE_IS_VALID_DATE:DataValidationCriteria;
/**Requires a date that is not between the given values.*/DATE_NOT_BETWEEN:DataValidationCriteria;
/**Require a date that is on or after the given value.*/DATE_ON_OR_AFTER:DataValidationCriteria;
/**Requires a date that is on or before the given value.*/DATE_ON_OR_BEFORE:DataValidationCriteria;
/**Requires a number that is between the given values.*/NUMBER_BETWEEN:DataValidationCriteria;
/**Requires a number that is equal to the given value.*/NUMBER_EQUAL_TO:DataValidationCriteria;
/**Require a number that is greater than the given value.*/NUMBER_GREATER_THAN:DataValidationCriteria;
/**Requires a number that is greater than or equal to the given value.*/NUMBER_GREATER_THAN_OR_EQUAL_TO:DataValidationCriteria;
/**Requires a number that is less than the given value.*/NUMBER_LESS_THAN:DataValidationCriteria;
/**Requires a number that is less than or equal to the given value.*/NUMBER_LESS_THAN_OR_EQUAL_TO:DataValidationCriteria;
/**Requires a number that is not between the given values.*/NUMBER_NOT_BETWEEN:DataValidationCriteria;
/**Requires a number that is not equal to the given value.*/NUMBER_NOT_EQUAL_TO:DataValidationCriteria;
/**Requires that the input contains the given value.*/TEXT_CONTAINS:DataValidationCriteria;
/**Requires that the input does not contain the given value.*/TEXT_DOES_NOT_CONTAIN:DataValidationCriteria;
/**Requires that the input is equal to the given value.*/TEXT_EQUAL_TO:DataValidationCriteria;
/**Requires that the input is in the form of an email address.*/TEXT_IS_VALID_EMAIL:DataValidationCriteria;
/**Requires that the input is in the form of a URL.*/TEXT_IS_VALID_URL:DataValidationCriteria;
/**Requires that the input is equal to one of the given values.*/VALUE_IN_LIST:DataValidationCriteria;
/**Requires that the input is equal to a value in the given range.*/VALUE_IN_RANGE:DataValidationCriteria;}interface DataValidationBuilder{
/**Constructs a data validation rule from the settings applied to the builder.
@return a representation of the data validation rule*/build():SpreadsheetApp.DataValidation;
/**Creates a builder for a data validation rule based on this rule's settings.

```
// Change existing data validation rules that require a date in 2013 to require a date in 2014.
var oldDates = [new Date('1/1/2013'), new Date('12/31/2013')];
var newDates = [new Date('1/1/2014'), new Date('12/31/2014')];
var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
var rules = range.getDataValidations();

for (var i = 0; i < rules.length; i++) {
  for (var j = 0; j < rules[i].length; j++) {
    var rule = rules[i][j];

    if (rule != null) {
      var criteria = rule.getCriteriaType();
      var args = rule.getCriteriaValues();

      if (criteria == SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN
          && args[0].getTime() == oldDates[0].getTime()
          && args[1].getTime() == oldDates[1].getTime()) {
        // Create a builder from the existing rule, then change the dates.
        rules[i][j] = rule.copy().withCriteria(criteria, newDates).build();
      }
    }
  }
}
range.setDataValidations(rules);
```
@return a builder based on this rule's settings*/copy():SpreadsheetApp.DataValidationBuilder;
/**Returns `true` if the rule shows a warning when input fails data validation, or `false` if it rejects the input entirely. The default for new data validation rules is `true`.
@return `true` if the rule allows input that fails data validation; `false` if not*/getAllowInvalid():boolean;
/**Gets the rule's criteria type as defined in the [`DataValidationCriteria`](https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria.html) enum. To get the
arguments for the criteria, use [`getCriteriaValues()`](https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#getCriteriaValues()). To use these values to create or
modify a data validation rule, see [`withCriteria(criteria, args)`](https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#withCriteria(DataValidationCriteria,Object)).

```
// Log information about the data validation rule for cell A1.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = cell.getDataValidation();
if (rule != null) {
  var criteria = rule.getCriteriaType();
  var args = rule.getCriteriaValues();
  Logger.log('The data validation rule is %s %s', criteria, args);
} else {
  Logger.log('The cell does not have a data validation rule.')
}
```
@return the type of data validation criteria*/getCriteriaType():SpreadsheetApp.DataValidationCriteria;
/**Gets an array of arguments for the rule's criteria. To get the criteria type, use [`getCriteriaType()`](https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#getCriteriaType()). To use these values to create or modify a data validation rule, see [`withCriteria(criteria, args)`](https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#withCriteria(DataValidationCriteria,Object)).

```
// Log information about the data validation rule for cell A1.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = cell.getDataValidation();
if (rule != null) {
  var criteria = rule.getCriteriaType();
  var args = rule.getCriteriaValues();
  Logger.log('The data validation rule is %s %s', criteria, args);
} else {
  Logger.log('The cell does not have a data validation rule.')
}
```
@return an array of arguments appropriate to the rule's criteria type; the number of arguments
    and their type match the corresponding `require...()` method of the [`DataValidationBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html) class*/getCriteriaValues():Object[];
/**Gets the rule's help text, or `null` if no help text is set.
@return the rule's help text, or `null` if no help text is set*/getHelpText():string;
/**Sets the data validation rule to require that the input is a boolean value; this value is
rendered as a checkbox.

```
// Set the data validation for cell A1 to require a boolean value; the value is rendered as a
// checkbox.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = SpreadsheetApp.newDataValidation().requireCheckbox().build();
cell.setDataValidation(rule);
```
@return this builder, for chaining*/requireCheckbox():SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to require that the input is the specified value or blank. When
the input matches the specified value the cell is rendered as a checked checkbox. When the
input is blank the cell is rendered as an unchecked checkbox.

```
// Set the data validation for cell A1 to require a custom checked value that is rendered as a
// checkbox.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = SpreadsheetApp.newDataValidation().requireCheckbox('APPROVED').build();
cell.setDataValidation(rule);
```
@param checkedValue The value assigned to a checked box.
@return this builder, for chaining*/requireCheckbox(checkedValue:Object):SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to require that the input is one of the specified values. When
the input is `checkedValue` the cell is rendered as a checked checkbox. When the
input is `uncheckedValue` the cell is rendered as an unchecked checkbox.

```
// Set the data validation for cell A1 to require custom checked values that are rendered as a
// checkbox.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = SpreadsheetApp.newDataValidation().requireCheckbox('APPROVED', 'PENDING').build();
cell.setDataValidation(rule);
```
@param checkedValue The value assigned to a checked box.
@param uncheckedValue The value assigned to an unchecked box.
@return this builder, for chaining*/requireCheckbox(checkedValue:Object,uncheckedValue:Object):SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to require a date.

```
// Set the data validation for cell A1 to require a date.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = SpreadsheetApp.newDataValidation().requireDate().build();
cell.setDataValidation(rule);
```
@return this builder, for chaining*/requireDate():SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to require a date after the given value. The time fields of the
`Date` object are ignored; only the day, month, and year fields are used.

```
// Set the data validation for cell A1 to require a date after January 1, 2013.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = SpreadsheetApp.newDataValidation().requireDateAfter(new Date('1/1/2013')).build();
cell.setDataValidation(rule);
```
@param date The latest unacceptable date.
@return this builder, for chaining*/requireDateAfter(date:Date):SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to require a date before the given value. The time fields of the
`Date` object are ignored; only the day, month, and year fields are used.

```
// Set the data validation for cell A1 to require a date before January 1, 2013.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = SpreadsheetApp.newDataValidation().requireDateBefore(new Date('1/1/2013')).build();
cell.setDataValidation(rule);
```
@param date The earliest unacceptable date.
@return this builder, for chaining*/requireDateBefore(date:Date):SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to require a date that falls between, or is either of, two
specified dates. The time fields of the `Date` objects are ignored; only the day, month,
and year fields are used.

```
// Set the data validation for cell A1 to require a date in 2013.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = SpreadsheetApp.newDataValidation()
    .requireDateBetween(new Date('1/1/2013'), new Date('12/31/2013')).build();
cell.setDataValidation(rule);
```
@param start The earliest acceptable date.
@param end The latest acceptable date.
@return this builder, for chaining*/requireDateBetween(start:Date,end:Date):SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to require a date equal to the given value. The time fields of
the `Date` object are ignored; only the day, month, and year fields are used.

```
// Set the data validation for cell A1 to require a date equal to January 1, 2013.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = SpreadsheetApp.newDataValidation().requireDateEqualTo(new Date('1/1/2013'))
    .build();
cell.setDataValidation(rule);
```
@param date The sole acceptable date.
@return this builder, for chaining*/requireDateEqualTo(date:Date):SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to require a date that does not fall between, and is neither of,
two specified dates. The time fields of the `Date` objects are ignored; only the day,
month, and year fields are used.

```
// Set the data validation for cell A1 to require a date not in 2013.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = SpreadsheetApp.newDataValidation()
    .requireDateNotBetween(new Date('1/1/2013'), new Date('12/31/2013')).build();
cell.setDataValidation(rule);
```
@param start The earliest unacceptable date.
@param end The latest unacceptable date.
@return this builder, for chaining*/requireDateNotBetween(start:Date,end:Date):SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to require a date on or after the given value. The time fields of
the `Date` object are ignored; only the day, month, and year fields are used.

```
// Set the data validation for cell A1 to require a date on or after January 1, 2013.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = SpreadsheetApp.newDataValidation()
    .requireDateOnOrAfter(new Date('1/1/2013')).build();
cell.setDataValidation(rule);
```
@param date The earliest acceptable date.
@return this builder, for chaining*/requireDateOnOrAfter(date:Date):SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to require a date on or before the given value. The time fields
of the `Date` object are ignored; only the day, month, and year fields are used.

```
// Set the data validation for cell A1 to require a date on or before January 1, 2013.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = SpreadsheetApp.newDataValidation()
    .requireDateOnOrBefore(new Date('1/1/2013')).build();
cell.setDataValidation(rule);
```
@param date The latest acceptable date.
@return this builder, for chaining*/requireDateOnOrBefore(date:Date):SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to require that the given formula evaluates to `true`.

```
// Set the data validation for cell A1 to equal B1 with a custom formula.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = SpreadsheetApp.newDataValidation().requireFormulaSatisfied('=EQ(A1,B1)').build();
cell.setDataValidation(rule);
```
@param formula A custom formula that evaluates to `true` if the input is valid.
@return this builder, for chaining*/requireFormulaSatisfied(formula:string):SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to require a number that falls between, or is either of, two
specified numbers.

```
// Set the data validation for cell A1 to require a number between 1 and 10.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = SpreadsheetApp.newDataValidation().requireNumberBetween(1, 10).build();
cell.setDataValidation(rule);
```
@param start The lowest acceptable value.
@param end The highest acceptable value.
@return this builder, for chaining*/requireNumberBetween(start:number,end:number):SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to require a number equal to the given value.

```
// Set the data validation for cell A1 to require a number equal to 3.1415926536.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = SpreadsheetApp.newDataValidation().requireNumberEqualTo(3.1415926536).build();
cell.setDataValidation(rule);
```
@param number The sole acceptable value.
@return this builder, for chaining*/requireNumberEqualTo(number:number):SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to require a number greater than the given value.

```
// Set the data validation for cell A1 to require a number greater than 0.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = SpreadsheetApp.newDataValidation().requireNumberGreaterThan(0).build();
cell.setDataValidation(rule);
```
@param number The highest unacceptable value.
@return this builder, for chaining*/requireNumberGreaterThan(number:number):SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to require a number greater than or equal to the given value.

```
// Set the data validation for cell A1 to require a number greater than or equal to 0.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = SpreadsheetApp.newDataValidation().requireNumberGreaterThanOrEqualTo(0).build();
cell.setDataValidation(rule);
```
@param number The lowest acceptable value.
@return this builder, for chaining*/requireNumberGreaterThanOrEqualTo(number:number):SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to require a number less than the given value.

```
// Set the data validation for cell A1 to require a number less than 0.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = SpreadsheetApp.newDataValidation().requireNumberLessThan(0).build();
cell.setDataValidation(rule);
```
@param number The lowest unacceptable value.
@return this builder, for chaining*/requireNumberLessThan(number:number):SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to require a number less than or equal to the given value.

```
// Set the data validation for cell A1 to require a number less than or equal to 0.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = SpreadsheetApp.newDataValidation().requireNumberLessThanOrEqualTo(0).build();
cell.setDataValidation(rule);
```
@param number The highest acceptable value.
@return this builder, for chaining*/requireNumberLessThanOrEqualTo(number:number):SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to require a number that does not fall between, and is neither
of, two specified numbers.

```
// Set the data validation for cell A1 to require a number not between 1 and 10.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = SpreadsheetApp.newDataValidation().requireNumberNotBetween(1, 10).build();
cell.setDataValidation(rule);
```
@param start The lowest unacceptable value.
@param end The highest unacceptable value.
@return this builder, for chaining*/requireNumberNotBetween(start:number,end:number):SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to require a number not equal to the given value.

```
// Set the data validation for cell A1 to require a number not equal to 0.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = SpreadsheetApp.newDataValidation().requireNumberNotEqualTo(0).build();
cell.setDataValidation(rule);
```
@param number The sole unacceptable value.
@return this builder, for chaining*/requireNumberNotEqualTo(number:number):SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to require that the input contains the given value.

```
// Set the data validation for cell A1 to require any value that includes "Google".
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = SpreadsheetApp.newDataValidation().requireTextContains('Google').build();
cell.setDataValidation(rule);
```
@param text The value that the input must contain.
@return this builder, for chaining*/requireTextContains(text:string):SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to require that the input does not contain the given value.

```
// Set the data validation for cell A1 to require any value that does not include "@".
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = SpreadsheetApp.newDataValidation().requireTextDoesNotContain('@').build();
cell.setDataValidation(rule);
```
@param text The value that the input must not contain.
@return this builder, for chaining*/requireTextDoesNotContain(text:string):SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to require that the input is equal to the given value.

```
// Set the data validation for cell A1 to require "Yes".
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = SpreadsheetApp.newDataValidation().requireTextEqualTo('Yes').build();
cell.setDataValidation(rule);
```
@param text The sole acceptable value.
@return this builder, for chaining*/requireTextEqualTo(text:string):SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to require that the input is in the form of an email address.

```
// Set the data validation for cell A1 to require text in the form of an email address.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = SpreadsheetApp.newDataValidation().requireTextIsEmail().build();
cell.setDataValidation(rule);
```
@return this builder, for chaining*/requireTextIsEmail():SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to require that the input is in the form of a URL.

```
// Set the data validation for cell A1 to require text in the form of a URL.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = SpreadsheetApp.newDataValidation().requireTextIsUrl().build();
cell.setDataValidation(rule);
```
@return this builder, for chaining*/requireTextIsUrl():SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to require that the input is equal to one of the given values.

```
// Set the data validation for cell A1 to require "Yes" or "No", with a dropdown menu.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = SpreadsheetApp.newDataValidation().requireValueInList(['Yes', 'No']).build();
cell.setDataValidation(rule);
```
@param values An array of acceptable values.
@return this builder, for chaining*/requireValueInList(values:string[]):SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to require that the input is equal to one of the given values,
with an option to hide the dropdown menu.

```
// Set the data validation for cell A1 to require "Yes" or "No", with no dropdown menu.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = SpreadsheetApp.newDataValidation().requireValueInList(['Yes', 'No'], false).build();
cell.setDataValidation(rule);
```
@param values An array of acceptable values.
@param showDropdown `true` if the spreadsheet should show a dropdown menu for the values;
    `false` if not.
@return this builder, for chaining*/requireValueInList(values:string[],showDropdown:boolean):SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to require that the input is equal to a value in the given range.

```
// Set the data validation for cell A1 to require a value from B1:B10, with a dropdown menu.
var cell = SpreadsheetApp.getActive().getRange('A1');
var range = SpreadsheetApp.getActive().getRange('B1:B10');
var rule = SpreadsheetApp.newDataValidation().requireValueInRange(range).build();
cell.setDataValidation(rule);
```
@param range A range that contains the acceptable values.
@return this builder, for chaining*/requireValueInRange(range:SpreadsheetApp.Range):SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to require that the input is equal to a value in the given range,
with an option to hide the dropdown menu.

```
// Set the data validation for cell A1 to require value from B1:B10, with no dropdown menu.
var cell = SpreadsheetApp.getActive().getRange('A1');
var range = SpreadsheetApp.getActive().getRange('B1:B10');
var rule = SpreadsheetApp.newDataValidation().requireValueInRange(range, false).build();
cell.setDataValidation(rule);
```
@param range A range that contains the acceptable values.
@param showDropdown `true` if the spreadsheet should show a dropdown menu for the values;
    `false` if not.
@return this builder, for chaining*/requireValueInRange(range:SpreadsheetApp.Range,showDropdown:boolean):SpreadsheetApp.DataValidationBuilder;
/**Sets whether to show a warning when input fails data validation or whether to reject the input
entirely. The default for new data validation rules is `true`.
@param allowInvalidData `true` if the rule should allow input that fails data validation;
    `false` if not.
@return this builder, for chaining*/setAllowInvalid(allowInvalidData:boolean):SpreadsheetApp.DataValidationBuilder;
/**Sets the help text that appears when the user hovers over the cell on which data validation is
set.
@param helpText The help text to set.
@return this builder, for chaining*/setHelpText(helpText:string):SpreadsheetApp.DataValidationBuilder;
/**Sets the data validation rule to criteria defined by [`DataValidationCriteria`](https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria.html) values,
typically taken from the [`criteria`](https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#getCriteriaType()) and [`arguments`](https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#getCriteriaValues()) of an existing rule.

```
// Change existing data validation rules that require a date in 2013 to require a date in 2014.
var oldDates = [new Date('1/1/2013'), new Date('12/31/2013')];
var newDates = [new Date('1/1/2014'), new Date('12/31/2014')];
var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
var rules = range.getDataValidations();

for (var i = 0; i < rules.length; i++) {
  for (var j = 0; j < rules[i].length; j++) {
    var rule = rules[i][j];

    if (rule != null) {
      var criteria = rule.getCriteriaType();
      var args = rule.getCriteriaValues();

      if (criteria == SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN
          && args[0].getTime() == oldDates[0].getTime()
          && args[1].getTime() == oldDates[1].getTime()) {
        // Create a builder from the existing rule, then change the dates.
        rules[i][j] = rule.copy().withCriteria(criteria, newDates).build();
      }
    }
  }
}
range.setDataValidations(rules);
```
@param criteria The type of data validation criteria.
@param args An array of arguments appropriate to the criteria type; the number of arguments and
    their type match the corresponding `require...()` method above.
@return this builder, for chaining*/withCriteria(criteria:SpreadsheetApp.DataValidationCriteria,args:Object[]):SpreadsheetApp.DataValidationBuilder;}interface DataValidation{
/**Creates a builder for a data validation rule based on this rule's settings.

```
// Change existing data validation rules that require a date in 2013 to require a date in 2014.
var oldDates = [new Date('1/1/2013'), new Date('12/31/2013')];
var newDates = [new Date('1/1/2014'), new Date('12/31/2014')];
var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());
var rules = range.getDataValidations();

for (var i = 0; i < rules.length; i++) {
  for (var j = 0; j < rules[i].length; j++) {
    var rule = rules[i][j];

    if (rule != null) {
      var criteria = rule.getCriteriaType();
      var args = rule.getCriteriaValues();

      if (criteria == SpreadsheetApp.DataValidationCriteria.DATE_BETWEEN
          && args[0].getTime() == oldDates[0].getTime()
          && args[1].getTime() == oldDates[1].getTime()) {
        // Create a builder from the existing rule, then change the dates.
        rules[i][j] = rule.copy().withCriteria(criteria, newDates).build();
      }
    }
  }
}
range.setDataValidations(rules);
```
@return a builder based on this rule's settings*/copy():SpreadsheetApp.DataValidationBuilder;
/**Returns `true` if the rule shows a warning when input fails data validation, or `false` if it rejects the input entirely. The default for new data validation rules is `true`.
@return `true` if the rule allows input that fails data validation; `false` if not*/getAllowInvalid():boolean;
/**Gets the rule's criteria type as defined in the [`DataValidationCriteria`](https://developers.google.com/apps-script/reference/spreadsheet/data-validation-criteria.html) enum. To get the
arguments for the criteria, use [`getCriteriaValues()`](https://developers.google.com/apps-script/reference/spreadsheet/data-validation.html#getCriteriaValues()). To use these values to create or
modify a data validation rule, see [`DataValidationBuilder.withCriteria(criteria, args)`](https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#withCriteria(DataValidationCriteria,Object)).

```
// Log information about the data validation rule for cell A1.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = cell.getDataValidation();
if (rule != null) {
  var criteria = rule.getCriteriaType();
  var args = rule.getCriteriaValues();
  Logger.log('The data validation rule is %s %s', criteria, args);
} else {
  Logger.log('The cell does not have a data validation rule.')
}
```
@return the type of data validation criteria*/getCriteriaType():SpreadsheetApp.DataValidationCriteria;
/**Gets an array of arguments for the rule's criteria. To get the criteria type, use [`getCriteriaType()`](https://developers.google.com/apps-script/reference/spreadsheet/data-validation.html#getCriteriaType()). To use these values to create or modify a data validation rule, see [`DataValidationBuilder.withCriteria(criteria, args)`](https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html#withCriteria(DataValidationCriteria,Object)).

```
// Log information about the data validation rule for cell A1.
var cell = SpreadsheetApp.getActive().getRange('A1');
var rule = cell.getDataValidation();
if (rule != null) {
  var criteria = rule.getCriteriaType();
  var args = rule.getCriteriaValues();
  Logger.log('The data validation rule is %s %s', criteria, args);
} else {
  Logger.log('The cell does not have a data validation rule.')
}
```
@return an array of arguments appropriate to the rule's criteria type; the number of arguments
    and their type match the corresponding `require...()` method of the [`DataValidationBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/data-validation-builder.html) class*/getCriteriaValues():Object[];
/**Gets the rule's help text, or `null` if no help text is set.
@return the rule's help text, or `null` if no help text is set*/getHelpText():string;}interface DataSourceType{}interface _DataSourceType{
/**A BigQuery data source.*/BIGQUERY:DataSourceType;
/**A data source type that is not supported in Apps Script.*/DATA_SOURCE_TYPE_UNSUPPORTED:DataSourceType;
/**A Looker data source.*/LOOKER:DataSourceType;}interface DataSourceTableFilter{
/**Returns the data source column this filter applies to.
@return The data source column.*/getDataSourceColumn():SpreadsheetApp.DataSourceColumn;
/**Returns the [`DataSourceTable`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-table.html) that this filter belongs to.
@return The data source table, to which this filter belongs.*/getDataSourceTable():SpreadsheetApp.DataSourceTable;
/**Returns the filter criteria for this filter.
@return The filter criteria for this filter.*/getFilterCriteria():SpreadsheetApp.FilterCriteria;
/**Removes this filter from the data source object.*/remove():void;
/**Sets the filter criteria for this filter.
@param filterCriteria The filter criteria to set.
@return The filter for chaining.*/setFilterCriteria(filterCriteria:SpreadsheetApp.FilterCriteria):SpreadsheetApp.DataSourceTableFilter;}interface DataSourceTableColumn{
/**Gets the data source column.
@return The data source column.*/getDataSourceColumn():SpreadsheetApp.DataSourceColumn;
/**Removes the column from the [`DataSourceTable`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-table.html).*/remove():void;}interface DataSourceTable{
/**Adds columns to the data source table.
@param columnNames The list of the names of the columns to add.
@return The data source table, for chaining.*/addColumns(columnNames:string[]):SpreadsheetApp.DataSourceTable;
/**Adds a filter applied to the data source table.
@param columnName The name of the column to apply this filter to.
@param filterCriteria The filter criteria to apply.
@return The data source table, for chaining.*/addFilter(columnName:string,filterCriteria:SpreadsheetApp.FilterCriteria):SpreadsheetApp.DataSourceTable;
/**Adds a sort spec on a column in the data source table.
@param columnName The name of the column to sort.
@param ascending If `true`, sort the column in ascending order; if `false`, sort
    the column in descending order.
@return The data source sheet, for chaining.*/addSortSpec(columnName:string,ascending:boolean):SpreadsheetApp.DataSourceTable;
/**Adds a sort spec on a column in the data source table.
@param columnName The name of the column to sort.
@param sortOrder The sort order.
@return The data source sheet, for chaining.*/addSortSpec(columnName:string,sortOrder:SpreadsheetApp.SortOrder):SpreadsheetApp.DataSourceTable;
/**Cancels the data refresh associated with this object if it's currently running.

This example shows how to cancel a formula refresh.

```
const spreadsheet = SpreadsheetApp.getActive();
const formula = spreadsheet.getDataSourceFormulas()[0];
// Cancel the ongoing refresh on the formula.
formula.cancelDataRefresh();
```

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for specific data source
type.
@return The data object.*/cancelDataRefresh():SpreadsheetApp.DataSourceTable;
/**Refreshes the data of this object regardless of the current state. See [`refreshData()`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-table.html#refreshData()) for
more details. If you want to cancel a currently running refresh of this object, see [`cancelDataRefresh()`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-table.html#cancelDataRefresh()).

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for specific data source
type.
@return The data object.*/forceRefreshData():SpreadsheetApp.DataSourceTable;
/**Gets all the data source columns added to the data source table.
@return A list of data source table columns.*/getColumns():SpreadsheetApp.DataSourceTableColumn[];
/**Gets the data source the object is linked to.
@return The data source.*/getDataSource():SpreadsheetApp.DataSource;
/**Returns all filters applied to the data source table.
@return An array of all filters applied to the data source table.*/getFilters():SpreadsheetApp.DataSourceTableFilter[];
/**Gets the [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) this data source table spans.
@return The range.*/getRange():SpreadsheetApp.Range;
/**Returns the row limit for the data source table.
@return The row limit for the data source table, or `null` if no limit is set and the
    table uses the default max limit as in Google Sheets UI.*/getRowLimit():Integer;
/**Gets all the sort specs in the data source table.
@return A list of sort specs.*/getSortSpecs():SpreadsheetApp.SortSpec[];
/**Gets the data execution status of the object.
@return The data execution status.*/getStatus():SpreadsheetApp.DataExecutionStatus;
/**Returns whether the data source table is syncing all columns in the associated data source.
@return `True` if the data source table is syncing all columns in the associated data
    source, or `false` otherwise.*/isSyncingAllColumns():boolean;
/**Refreshes the data of the object.

Throws an exception if currently in [`error`](https://developers.google.com/apps-script/reference/spreadsheet/data-execution-state.html#ERROR) state. Use [`DataSource#updateSpec()`](https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)) to update the specification. The method is
preferred over [`forceRefreshData()`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-table.html#forceRefreshData()) to prevent unexpected edits on data source.

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for specific data source
type.
@return The data object.*/refreshData():SpreadsheetApp.DataSourceTable;
/**Removes all the columns in the data source table.
@return The data source table, for chaining.*/removeAllColumns():SpreadsheetApp.DataSourceTable;
/**Removes all the sort specs in the data source table.
@return The data source sheet, for chaining.*/removeAllSortSpecs():SpreadsheetApp.DataSourceTable;
/**Updates the row limit for the data source table. If the provided row limit is `null`,
then updates the data source table to use the default max row limit as in Google Sheets UI.
@param rowLimit The new row limit for the data table. If `null`, updates the table to use
    the default row limit.
@return The data source table, for chaining.*/setRowLimit(rowLimit:Integer):SpreadsheetApp.DataSourceTable;
/**Sync all current and future columns in the associated data source to the data source table.
@return The data source table, for chaining.*/syncAllColumns():SpreadsheetApp.DataSourceTable;
/**Waits until the current execution completes, timing out after the provided number of seconds.
Throws an exception if the execution is not completed when timing out, but does not cancel the
data execution.
@param timeoutInSeconds The time to wait for data execution, in seconds. The maximum is 300
    seconds.
@return The data execution status.*/waitForCompletion(timeoutInSeconds:Integer):SpreadsheetApp.DataExecutionStatus;}interface DataSourceSpecBuilder{
/**Gets the builder for BigQuery data source.
@return The BigQuery data source specification builder.*/asBigQuery():SpreadsheetApp.BigQueryDataSourceSpecBuilder;
/**Gets the builder for Looker data source.

```
var spec = SpreadsheetApp.newDataSourceSpec()
           .asLooker()
           .setInstanceUrl('https://looker_instance_url.com')
           .setModelName('model_name')
           .setExploreName('explore_name')
           .build();
```
@return The Looker data source specification builder.*/asLooker():SpreadsheetApp.LookerDataSourceSpecBuilder;
/**Builds a data source specification from the settings in this builder. Must use `as...()`
to specify a data source type before building.

The following code sample builds a BigQuery DataSource Spec.

```
var bigQueryDataSourceSpec = SpreadsheetApp.newDataSourceSpec().asBigQuery();
// TODO(developer): Replace with the required dataset, project and table IDs.
bigQueryDataSourceSpec.setDatasetId("my data set id");
bigQueryDataSourceSpec.setProjectId("my project id");
bigQueryDataSourceSpec.setTableId("my table id");

bigQueryDataSourceSpec.build();

```

The following code sample builds a Looker DataSource Spec.

```
var lookerDataSourceSpecBuilder = SpreadsheetApp.newDataSourceSpec().asLooker();
var lookerSpec = lookerDataSourceSpecBuilder.setExploreName("my explore name")
                                            .setInstanceUrl("my instance url")
                                            .setModelName("my model name")
                                            .build();
```
@return The data source specification.*/build():SpreadsheetApp.DataSourceSpec;
/**Creates a [`DataSourceSpecBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec-builder.html) based on this data source's settings.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');
var spec = ss.getDataSources()[0].getSpec();

var newSpec = spec.copy();
```
@return The builder.*/copy():SpreadsheetApp.DataSourceSpecBuilder;
/**Gets the parameters of the data source.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');
var spec = ss.getDataSources()[0].getSpec();
var parameters = spec.getParameters();
```

This method is only available for BigQuery data sources.
@return The parameter list.*/getParameters():SpreadsheetApp.DataSourceParameter[];
/**Gets the type of the data source.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');
var spec = ss.getDataSources()[0].getSpec();
var type = spec.getType();
```
@return The data source type.*/getType():SpreadsheetApp.DataSourceType;
/**Removes all the parameters.

```
var specBuilder = SpreadsheetApp.newDataSourceSpec();
specBuilder.removeAllParameters();
```
@return The builder, for chaining.*/removeAllParameters():SpreadsheetApp.DataSourceSpecBuilder;
/**Removes the specified parameter.

```
var specBuilder = SpreadsheetApp.newDataSourceSpec();
specBuilder.removeParameter("x");
```
@param parameterName The name of the parameter to remove.
@return The builder, for chaining.*/removeParameter(parameterName:string):SpreadsheetApp.DataSourceSpecBuilder;
/**Adds a parameter, or if the parameter with the name exists, updates its source cell for data
source spec builders of type [`DataSourceType.BIGQUERY`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-type.html#BIGQUERY).

This method is only available for BigQuery data sources.

```
var specBuilder = SpreadsheetApp.newDataSourceSpec().asBigQuery();
specBuilder.setParameterFromCell("x", "A1");
var bigQuerySpec = specBuilder.build();
```
@param parameterName The parameter name.
@param sourceCell The source cell, as specified in A1 notation.
@return The builder, for chaining.*/setParameterFromCell(parameterName:string,sourceCell:string):SpreadsheetApp.DataSourceSpecBuilder;}interface DataSourceSpec{
/**Gets the spec for BigQuery data source.
@return The BigQuery data source spec.*/asBigQuery():SpreadsheetApp.BigQueryDataSourceSpec;
/**Gets the spec for Looker data source.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');
var spec = ss.getDataSources()[0].getSpec().asLooker();
```
@return The Looker data source spec.*/asLooker():SpreadsheetApp.LookerDataSourceSpec;
/**Creates a [`DataSourceSpecBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec-builder.html) based on this data source's settings.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');
var spec = ss.getDataSources()[0].getSpec();

var newSpec = spec.copy();
```
@return The builder.*/copy():SpreadsheetApp.DataSourceSpecBuilder;
/**Gets the parameters of the data source.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');
var spec = ss.getDataSources()[0].getSpec();
var parameters = spec.getParameters();
```

This method is only available for BigQuery data sources.
@return The parameter list.*/getParameters():SpreadsheetApp.DataSourceParameter[];
/**Gets the type of the data source.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');
var spec = ss.getDataSources()[0].getSpec();
var type = spec.getType();
```
@return The data source type.*/getType():SpreadsheetApp.DataSourceType;}interface DataSourceSheetFilter{
/**Returns the data source column this filter applies to.
@return The data source column.*/getDataSourceColumn():SpreadsheetApp.DataSourceColumn;
/**Returns the [`DataSourceSheet`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-sheet.html) that this filter belongs to.
@return The data source sheet, to which this filter belongs.*/getDataSourceSheet():SpreadsheetApp.DataSourceSheet;
/**Returns the filter criteria for this filter.
@return The filter criteria for this filter.*/getFilterCriteria():SpreadsheetApp.FilterCriteria;
/**Removes this filter from the data source object.*/remove():void;
/**Sets the filter criteria for this filter.
@param filterCriteria The filter criteria to set.
@return The filter for chaining.*/setFilterCriteria(filterCriteria:SpreadsheetApp.FilterCriteria):SpreadsheetApp.DataSourceSheetFilter;}interface DataSourceSheet{
/**Adds a filter applied to the data source sheet.
@param columnName The name of the column to apply this filter to.
@param filterCriteria The filter criteria to apply.
@return The data source sheet, for method chaining.*/addFilter(columnName:string,filterCriteria:SpreadsheetApp.FilterCriteria):SpreadsheetApp.DataSourceSheet;
/**Returns the data source sheet as a regular sheet object.
@return The regular sheet.*/asSheet():SpreadsheetApp.Sheet;
/**Auto resizes the width of the specified column.
@param columnName The column name.
@return This data source sheet, for chaining.*/autoResizeColumn(columnName:string):SpreadsheetApp.DataSourceSheet;
/**Auto resizes the width of the specified columns.
@param columnNames The list of column names to update.
@return This data source sheet, for chaining.*/autoResizeColumns(columnNames:string[]):SpreadsheetApp.DataSourceSheet;
/**Cancels the data refresh associated with this object if it's currently running.

This example shows how to cancel a formula refresh.

```
const spreadsheet = SpreadsheetApp.getActive();
const formula = spreadsheet.getDataSourceFormulas()[0];
// Cancel the ongoing refresh on the formula.
formula.cancelDataRefresh();
```

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for specific data source
type.
@return The data object.*/cancelDataRefresh():SpreadsheetApp.DataSourceSheet;
/**Refreshes the data of this object regardless of the current state. See [`refreshData()`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-sheet.html#refreshData()) for
more details. If you want to cancel a currently running refresh of this object, see [`cancelDataRefresh()`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-sheet.html#cancelDataRefresh()).

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for specific data source
type.
@return The data object.*/forceRefreshData():SpreadsheetApp.DataSourceSheet;
/**Returns the width of the specified column.
@param columnName The column name.
@return The column's width, or `null` if the column uses the default width.*/getColumnWidth(columnName:string):Integer;
/**Gets the data source the object is linked to.
@return The data source.*/getDataSource():SpreadsheetApp.DataSource;
/**Returns all filters applied to the data source sheet.
@return An array of all filters applied to the data source sheet.*/getFilters():SpreadsheetApp.DataSourceSheetFilter[];
/**Returns all the values for the data source sheet for the provided column name.
@param columnName The data source column name to fetch values for.
@return A one-dimensional array of values.*/getSheetValues(columnName:string):Object[];
/**Returns all the values for the data source sheet for the provided column name from the provided
start row (based-1) and up to the provided `numRows`.
@param columnName The data source column name to fetch values for.
@param startRow The row position to start fetching values from.
@param numRows The number of rows to fetch.
@return A one-dimensional array of values.*/getSheetValues(columnName:string,startRow:Integer,numRows:Integer):Object[];
/**Gets all the sort specs in the data source sheet.
@return A list of sort specs.*/getSortSpecs():SpreadsheetApp.SortSpec[];
/**Gets the data execution status of the object.
@return The data execution status.*/getStatus():SpreadsheetApp.DataExecutionStatus;
/**Refreshes the data of the object.

Throws an exception if currently in [`error`](https://developers.google.com/apps-script/reference/spreadsheet/data-execution-state.html#ERROR) state. Use [`DataSource#updateSpec()`](https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)) to update the specification. The method is
preferred over [`forceRefreshData()`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-sheet.html#forceRefreshData()) to prevent unexpected edits on data source.

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for specific data source
type.
@return The data object.*/refreshData():SpreadsheetApp.DataSourceSheet;
/**Removes all filters applied to the data source sheet column.
@param columnName The name of the column to remove filters from.
@return The data source sheet, for method chaining.*/removeFilters(columnName:string):SpreadsheetApp.DataSourceSheet;
/**Removes the sort spec on a column in the data source sheet.
@param columnName The name of the column.
@return The data source sheet, for chaining.*/removeSortSpec(columnName:string):SpreadsheetApp.DataSourceSheet;
/**Sets the width of the specified column.
@param columnName The column name.
@param width The new width for the column.
@return This data source sheet, for chaining.*/setColumnWidth(columnName:string,width:Integer):SpreadsheetApp.DataSourceSheet;
/**Sets the width of the specified columns.
@param columnNames The list of column names to update.
@param width The new width for the columns.
@return This data source sheet, for chaining.*/setColumnWidths(columnNames:string[],width:Integer):SpreadsheetApp.DataSourceSheet;
/**Sets the sort spec on a column in the data source sheet.
@param columnName The name of the column to sort.
@param ascending If `true`, sort the column in ascending order; if `false`, sort
    the column in descending order.
@return The data source sheet, for chaining.*/setSortSpec(columnName:string,ascending:boolean):SpreadsheetApp.DataSourceSheet;
/**Sets the sort spec on a column in the data source sheet.
@param columnName The name of the column to sort.
@param sortOrder The sort order.
@return The data source sheet, for chaining.*/setSortSpec(columnName:string,sortOrder:SpreadsheetApp.SortOrder):SpreadsheetApp.DataSourceSheet;
/**Waits until the current execution completes, timing out after the provided number of seconds.
Throws an exception if the execution is not completed when timing out, but does not cancel the
data execution.
@param timeoutInSeconds The time to wait for data execution, in seconds. The maximum is 300
    seconds.
@return The data execution status.*/waitForCompletion(timeoutInSeconds:Integer):SpreadsheetApp.DataExecutionStatus;}interface DataSourceRefreshScope{}interface _DataSourceRefreshScope{
/**The refresh applies to all data sources in the spreadsheet.*/ALL_DATA_SOURCES:DataSourceRefreshScope;
/**The data source refresh scope is unsupported.*/DATA_SOURCE_REFRESH_SCOPE_UNSUPPORTED:DataSourceRefreshScope;}interface DataSourceRefreshScheduleFrequency{
/**Gets the days of the month as numbers (1-28) on which to refresh the data source. Only applies
if frequency type is monthly.
@return The days of the month on which to refresh.*/getDaysOfTheMonth():Integer[];
/**Gets the days of the week on which to refresh the data source. Only applies if the frequency
type is weekly.
@return The days of the week on which to refresh.*/getDaysOfTheWeek():Weekday[];
/**Gets the frequency type.
@return The frequency type.*/getFrequencyType():SpreadsheetApp.FrequencyType;
/**Gets the start hour (as a number 0-23) of the time interval during which the refresh schedule
runs. For example, if the start hour is 13 and the time interval's duration is 4 hours, then
the data source is refreshed between 1 p.m. and 5 p.m. The hour is in the timezone of the
spreadsheet.
@return The start hour.*/getStartHour():Integer;}interface DataSourceRefreshSchedule{
/**Gets the refresh schedule frequency, which specifies how often and when to refresh.
@return The refresh schedule frequency.*/getFrequency():SpreadsheetApp.DataSourceRefreshScheduleFrequency;
/**Gets the scope of this refresh schedule.
@return The refresh scope.*/getScope():SpreadsheetApp.DataSourceRefreshScope;
/**Gets the time window of the next run of this refresh schedule. Only applies if this refresh
schedule is enabled.
@return The time window of the next run.*/getTimeIntervalOfNextRun():TimeInterval;
/**Determines whether this refresh schedule is enabled.
@return Whether this refresh schedule is enabled.*/isEnabled():boolean;}interface DataSourcePivotTable{
/**Adds a new pivot column group based on the specified data source column.
@param columnName The data source column name the pivot group is based on.
@return The new pivot group.*/addColumnGroup(columnName:string):SpreadsheetApp.PivotGroup;
/**Adds a new filter based on the specified data source column with the specified filter criteria.
@param columnName The data source column name the filter is based on.
@param filterCriteria The criteria the filter uses.
@return The new filter.*/addFilter(columnName:string,filterCriteria:SpreadsheetApp.FilterCriteria):SpreadsheetApp.PivotFilter;
/**Adds a new pivot value based on the specified data source column without any summarize
function. For Looker measures only.

The following code shows how you can add a Looker measure as a pivot value.

```
// TODO(developer): Replace with your spreadsheet ID which has a Looker data source.
var spreadsheet = SpreadsheetApp.openById("abcd1234")
var datasource = spreadsheet.getDataSources()[0];
var pivotTable = datasource.createDataSourcePivotTableOnNewSheet();

pivotTable.addPivotValue("columnName");
```

This method is only available for Looker data sources.
@param columnName The data source column name the pivot value is based on.
@return The new pivot value.*/addPivotValue(columnName:string):SpreadsheetApp.PivotValue;
/**Adds a new pivot value based on the specified data source column with the specified summarize
function.

In order to add pivot values for Looker measures, use [`addPivotValue(columnName)`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-pivot-table.html#addPivotValue(String)).
@param columnName The data source column name the pivot value is based on.
@param summarizeFunction The summarize function the pivot value uses.
@return The new pivot value.*/addPivotValue(columnName:string,summarizeFunction:SpreadsheetApp.PivotTableSummarizeFunction):SpreadsheetApp.PivotValue;
/**Adds a new pivot row group based on the specified data source column.
@param columnName The data source column name the pivot group is based on.
@return The new pivot group.*/addRowGroup(columnName:string):SpreadsheetApp.PivotGroup;
/**Returns the data source pivot table as a regular pivot table object.
@return The pivot table.*/asPivotTable():SpreadsheetApp.PivotTable;
/**Cancels the data refresh associated with this object if it's currently running.

This example shows how to cancel a formula refresh.

```
const spreadsheet = SpreadsheetApp.getActive();
const formula = spreadsheet.getDataSourceFormulas()[0];
// Cancel the ongoing refresh on the formula.
formula.cancelDataRefresh();
```

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for specific data source
type.
@return The data object.*/cancelDataRefresh():SpreadsheetApp.DataSourcePivotTable;
/**Refreshes the data of this object regardless of the current state. See [`refreshData()`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-pivot-table.html#refreshData()) for
more details. If you want to cancel a currently running refresh of this object, see [`cancelDataRefresh()`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-pivot-table.html#cancelDataRefresh()).

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for specific data source
type.
@return The data object.*/forceRefreshData():SpreadsheetApp.DataSourcePivotTable;
/**Gets the data source the object is linked to.
@return The data source.*/getDataSource():SpreadsheetApp.DataSource;
/**Gets the data execution status of the object.
@return The data execution status.*/getStatus():SpreadsheetApp.DataExecutionStatus;
/**Refreshes the data of the object.

Throws an exception if currently in [`error`](https://developers.google.com/apps-script/reference/spreadsheet/data-execution-state.html#ERROR) state. Use [`DataSource#updateSpec()`](https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)) to update the specification. The method is
preferred over [`forceRefreshData()`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-pivot-table.html#forceRefreshData()) to prevent unexpected edits on data source.

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for specific data source
type.
@return The data object.*/refreshData():SpreadsheetApp.DataSourcePivotTable;
/**Waits until the current execution completes, timing out after the provided number of seconds.
Throws an exception if the execution is not completed when timing out, but does not cancel the
data execution.
@param timeoutInSeconds The time to wait for data execution, in seconds. The maximum is 300
    seconds.
@return The data execution status.*/waitForCompletion(timeoutInSeconds:Integer):SpreadsheetApp.DataExecutionStatus;}interface DataSourceParameterType{}interface _DataSourceParameterType{
/**The data source parameter is valued based on a cell.*/CELL:DataSourceParameterType;
/**A data source parameter type that is not supported in Apps Script.*/DATA_SOURCE_PARAMETER_TYPE_UNSUPPORTED:DataSourceParameterType;}interface DataSourceParameter{
/**Gets the parameter name.
@return The parameter name.*/getName():string;
/**Gets the source cell the parameter is valued based on, or `null` if the parameter type is
not [`DataSourceParameterType.CELL`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-parameter-type.html#CELL).
@return The source cell, as specified in A1 notation.*/getSourceCell():string;
/**Gets the parameter type.
@return The parameter type.*/getType():SpreadsheetApp.DataSourceParameterType;}interface DataSourceFormula{
/**Cancels the data refresh associated with this object if it's currently running.

This example shows how to cancel a formula refresh.

```
const spreadsheet = SpreadsheetApp.getActive();
const formula = spreadsheet.getDataSourceFormulas()[0];
// Cancel the ongoing refresh on the formula.
formula.cancelDataRefresh();
```

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for specific data source
type.
@return The data object.*/cancelDataRefresh():SpreadsheetApp.DataSourceFormula;
/**Refreshes the data of this object regardless of the current state. See [`refreshData()`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-formula.html#refreshData()) for
more details. If you want to cancel a currently running refresh of this object, see [`cancelDataRefresh()`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-formula.html#cancelDataRefresh()).

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for specific data source
type.
@return The data object.*/forceRefreshData():SpreadsheetApp.DataSourceFormula;
/**Returns the [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range.html) representing the cell where this data source formula is anchored.
@return The anchor cell.*/getAnchorCell():SpreadsheetApp.Range;
/**Gets the data source the object is linked to.
@return The data source.*/getDataSource():SpreadsheetApp.DataSource;
/**Returns the display value of the data source formula.
@return The display value.*/getDisplayValue():string;
/**Returns the formula for this data source formula.
@return The formula.*/getFormula():string;
/**Gets the data execution status of the object.
@return The data execution status.*/getStatus():SpreadsheetApp.DataExecutionStatus;
/**Refreshes the data of the object.

Throws an exception if currently in [`error`](https://developers.google.com/apps-script/reference/spreadsheet/data-execution-state.html#ERROR) state. Use [`DataSource#updateSpec()`](https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)) to update the specification. The method is
preferred over [`forceRefreshData()`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-formula.html#forceRefreshData()) to prevent unexpected edits on data source.

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for specific data source
type.
@return The data object.*/refreshData():SpreadsheetApp.DataSourceFormula;
/**Updates the formula.
@param formula The new formula.
@return The data source formula, for chaining.*/setFormula(formula:string):SpreadsheetApp.DataSourceFormula;
/**Waits until the current execution completes, timing out after the provided number of seconds.
Throws an exception if the execution is not completed when timing out, but does not cancel the
data execution.
@param timeoutInSeconds The time to wait for data execution, in seconds. The maximum is 300
    seconds.
@return The data execution status.*/waitForCompletion(timeoutInSeconds:Integer):SpreadsheetApp.DataExecutionStatus;}interface DataSourceColumn{
/**Gets the data source associated with the data source column.
@return The data source.*/getDataSource():SpreadsheetApp.DataSource;
/**Gets the formula for the data source column. Returns an empty string if the data source column
is not a [`calculated column`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-column.html#isCalculatedColumn()).
@return The formula.*/getFormula():string;
/**Gets the name for the data source column.
@return The column name.*/getName():string;
/**Returns whether the column has an array dependency.
@return `true` if the column has an array dependency, or `false` otherwise.*/hasArrayDependency():boolean;
/**Returns whether the column is a calculated column.
@return `true` if the column is a calculated column, or `false` otherwise.*/isCalculatedColumn():boolean;
/**Removes the data source column.

Only supported for [`calculated columns`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-column.html#isCalculatedColumn()).*/remove():void;
/**Sets the formula for the data source column.

Only supported for [`calculated columns`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-column.html#isCalculatedColumn()).
@param formula The new formula.
@return The data source column, for chaining.*/setFormula(formula:string):SpreadsheetApp.DataSourceColumn;
/**Sets the name of the data source column.

Only supported for [`calculated columns`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-column.html#isCalculatedColumn()).
@param name The name to set.
@return The data source column, for chaining.*/setName(name:string):SpreadsheetApp.DataSourceColumn;}interface DataSourceChart{
/**Cancels the data refresh associated with this object if it's currently running.

This example shows how to cancel a formula refresh.

```
const spreadsheet = SpreadsheetApp.getActive();
const formula = spreadsheet.getDataSourceFormulas()[0];
// Cancel the ongoing refresh on the formula.
formula.cancelDataRefresh();
```

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for specific data source
type.
@return The data object.*/cancelDataRefresh():SpreadsheetApp.DataSourceChart;
/**Refreshes the data of this object regardless of the current state. See [`refreshData()`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-chart.html#refreshData()) for
more details. If you want to cancel a currently running refresh of this object, see [`cancelDataRefresh()`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-chart.html#cancelDataRefresh()).

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for specific data source
type.
@return The data object.*/forceRefreshData():SpreadsheetApp.DataSourceChart;
/**Gets the data source the object is linked to.
@return The data source.*/getDataSource():SpreadsheetApp.DataSource;
/**Gets the data execution status of the object.
@return The data execution status.*/getStatus():SpreadsheetApp.DataExecutionStatus;
/**Refreshes the data of the object.

Throws an exception if currently in [`error`](https://developers.google.com/apps-script/reference/spreadsheet/data-execution-state.html#ERROR) state. Use [`DataSource#updateSpec()`](https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)) to update the specification. The method is
preferred over [`forceRefreshData()`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-chart.html#forceRefreshData()) to prevent unexpected edits on data source.

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for specific data source
type.
@return The data object.*/refreshData():SpreadsheetApp.DataSourceChart;
/**Waits until the current execution completes, timing out after the provided number of seconds.
Throws an exception if the execution is not completed when timing out, but does not cancel the
data execution.
@param timeoutInSeconds The time to wait for data execution, in seconds. The maximum is 300
    seconds.
@return The data execution status.*/waitForCompletion(timeoutInSeconds:Integer):SpreadsheetApp.DataExecutionStatus;}interface DataSource{
/**Cancels all currently running refreshes of data source objects linked to this data source.

This example shows how to cancel all the refreshes of a data source.

```
SpreadsheetApp.enableBigQueryExecution();
const dataSource = spreadsheet.getDataSources()[0];
dataSource.cancelAllLinkedDataSourceObjectRefreshes();
```

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for the specific data
source type.*/cancelAllLinkedDataSourceObjectRefreshes():void;
/**Creates a calculated column. This method is only available for BigQuery data sources.
@param name The name of the calculated column.
@param formula The calculated column formula.
@return The newly created calculated column.*/createCalculatedColumn(name:string,formula:string):SpreadsheetApp.DataSourceColumn;
/**Creates a data source pivot table from this data source in the first cell of a new sheet. As a
side effect, makes the new sheet the active sheet.
@return The newly created data source pivot table.*/createDataSourcePivotTableOnNewSheet():SpreadsheetApp.DataSourcePivotTable;
/**Creates a data source table from this data source in the first cell of a new sheet. As a side
effect, makes the new sheet the active sheet.

This method is only available for BigQuery data sources.
@return The newly created data source table.*/createDataSourceTableOnNewSheet():SpreadsheetApp.DataSourceTable;
/**Returns the calculated column in the data source that matches the column name.
@param columnName The name of the calculated column to get.
@return The calculated column that matches the column name, or `null` if there is no such
    calculated column.*/getCalculatedColumnByName(columnName:string):SpreadsheetApp.DataSourceColumn;
/**Returns all the calculated columns in the data source.

Data source specs of [`DataSourceType.LOOKER`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-type.html#LOOKER) type returns an empty array.
@return An array of all the calculated columns in the data source.*/getCalculatedColumns():SpreadsheetApp.DataSourceColumn[];
/**Returns all the columns in the data source.
@return An array of all the [`DataSourceColumn`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-column.html) in the data source.*/getColumns():SpreadsheetApp.DataSourceColumn[];
/**Returns the data source sheets associated with this data source.
@return An array of data source sheets.*/getDataSourceSheets():SpreadsheetApp.DataSourceSheet[];
/**Gets the data source specification.
@return The data source specification.*/getSpec():SpreadsheetApp.DataSourceSpec;
/**Refreshes all data source objects linked to the data source.

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for the specific data
source type.*/refreshAllLinkedDataSourceObjects():void;
/**Updates the data source specification and refreshes the data source objects linked with this
data source with the new specification.

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for the specific data
source type.

Throws an exception if the data source specification type is of a different type than the
current data source type.
@param spec The data source specification to update with.
@return The data source.*/updateSpec(spec:SpreadsheetApp.DataSourceSpec):SpreadsheetApp.DataSource;
/**Updates the data source specification and refreshes the linked [`data
source sheets`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-sheet.html) with the new specification.

Throws an exception if the data source type is not enabled. Use `SpreadsheetApp#enable...Execution()` methods to enable data execution for the specific data
source type.

Throws an exception if the data source specification type is of a different type than the
current data source type.
@param spec The data source specification to update with.
@param refreshAllLinkedObjects If `true`, also refreshes all the data source objects
    linked with this data source.
@return The data source.*/updateSpec(spec:SpreadsheetApp.DataSourceSpec,refreshAllLinkedObjects:boolean):SpreadsheetApp.DataSource;
/**Waits until all the current executions of the linked data source objects complete, timing out
after the provided number of seconds. Throws an exception if the executions are not completed
when timing out, but does not cancel the data executions.
@param timeoutInSeconds The time to wait for data executions, in seconds. The maximum is 300
    seconds.*/waitForAllDataExecutionsCompletion(timeoutInSeconds:Integer):void;}interface DataExecutionStatus{
/**Gets the error code of the data execution.
@return The error code.*/getErrorCode():SpreadsheetApp.DataExecutionErrorCode;
/**Gets the error message of the data execution. The message may be empty.
@return The error message.*/getErrorMessage():string;
/**Gets the state of the data execution.
@return The execution state.*/getExecutionState():SpreadsheetApp.DataExecutionState;
/**Gets the time the last data execution completed regardless of the execution state.
@return The last execution time, or `null` if there has never been a data execution.*/getLastExecutionTime():Date;
/**Gets the time the data last successfully refreshed.
@return The last successfully refreshed time, or `null` if there is never a successful
    data execution.*/getLastRefreshedTime():Date;
/**Returns `true` if the data from last successful execution is truncated, or `false`
otherwise.
@return `True` if the data from execution is truncated, or `false` otherwise.*/isTruncated():boolean;}interface DataExecutionState{}interface _DataExecutionState{
/**A data execution state is not supported in Apps Script.*/DATA_EXECUTION_STATE_UNSUPPORTED:DataExecutionState;
/**The data execution is completed and has errors.*/ERROR:DataExecutionState;
/**The data execution has not started.*/NOT_STARTED:DataExecutionState;
/**The data execution has started and is running.*/RUNNING:DataExecutionState;
/**The data execution is completed and successful.*/SUCCESS:DataExecutionState;}interface DataExecutionErrorCode{}interface _DataExecutionErrorCode{
/**A data execution error code that is not supported in Apps Script.*/DATA_EXECUTION_ERROR_CODE_UNSUPPORTED:DataExecutionErrorCode;
/**The database referenced by the data source is not found. Please update the data source [`specification`](https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)).*/DATA_NOT_FOUND:DataExecutionErrorCode;
/**The data execution returns duplicate column names. Please update the data source [`specification`](https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)).*/DUPLICATE_COLUMN_NAMES:DataExecutionErrorCode;
/**Data execution engine error. Use [`DataExecutionStatus.getErrorMessage()`](https://developers.google.com/apps-script/reference/spreadsheet/data-execution-status.html#getErrorMessage()) for details.*/ENGINE:DataExecutionErrorCode;
/**The data execution is interrupted. Please refresh later.*/INTERRUPTED:DataExecutionErrorCode;
/**The data execution has no error.*/NONE:DataExecutionErrorCode;
/**Other errors.*/OTHER:DataExecutionErrorCode;
/**Invalid data execution parameter. The source cell must exist and contain only a number or text.
Please update the data source [`specification`](https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)).*/PARAMETER_INVALID:DataExecutionErrorCode;
/**The user does not have access to the database referenced by the data source. Please update the
data source [`specification`](https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)) or contact the owner of the billing
project to request access.*/PERMISSION_DENIED:DataExecutionErrorCode;
/**The data execution timed out. Please update the data source [`specification`](https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)).*/TIME_OUT:DataExecutionErrorCode;
/**The data execution returns more cells than the limit. Please update the data source [`specification`](https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)).*/TOO_MANY_CELLS:DataExecutionErrorCode;
/**The data execution returns values that exceed the maximum characters allowed in a single cell.
Please update the data source [`specification`](https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)).*/TOO_MANY_CHARS_PER_CELL:DataExecutionErrorCode;
/**The data execution returns more columns than the limit. Please update the data source [`specification`](https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)).*/TOO_MANY_COLUMNS:DataExecutionErrorCode;
/**The data execution returns more rows than the limit. Please update the data source [`specification`](https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)).*/TOO_MANY_ROWS:DataExecutionErrorCode;
/**The data execution returns unsupported data type. Please update the data source [`specification`](https://developers.google.com/apps-script/reference/spreadsheet/data-source.html#updateSpec(DataSourceSpec)).

For BigQuery, `ARRAY` or `STRUCT` type is not supported.*/UNSUPPORTED_DATA_TYPE:DataExecutionErrorCode;}interface CopyPasteType{}interface _CopyPasteType{
/**Paste the column widths only.*/PASTE_COLUMN_WIDTHS:CopyPasteType;
/**Paste the color rules only.*/PASTE_CONDITIONAL_FORMATTING:CopyPasteType;
/**Paste the data validation only.*/PASTE_DATA_VALIDATION:CopyPasteType;
/**Paste the format only.*/PASTE_FORMAT:CopyPasteType;
/**Paste the formulas only.*/PASTE_FORMULA:CopyPasteType;
/**Paste values, formulas, formats and merges.*/PASTE_NORMAL:CopyPasteType;
/**Paste values, formulas, formats and merges but without borders.*/PASTE_NO_BORDERS:CopyPasteType;
/**Paste the values ONLY without formats, formulas or merges.*/PASTE_VALUES:CopyPasteType;}interface ContainerInfo{
/**The chart's left side is anchored in this column.
@return 1-indexed column (that is, column C is 3)*/getAnchorColumn():Integer;
/**The chart's top side is anchored in this row.
@return 1-indexed row (that is, row 5 returns 5)*/getAnchorRow():Integer;
/**The chart's upper left hand corner is offset from the anchor column by this many pixels.
@return the horizontal offset in pixels for the upper left hand corner of the chart*/getOffsetX():Integer;
/**The chart's upper left hand corner is offset from the anchor row by this many pixels.
@return the vertical offset in pixels for the upper left hand corner of the chart*/getOffsetY():Integer;}interface ConditionalFormatRuleBuilder{
/**Constructs a conditional format rule from the settings applied to the builder.
@return a representation of the conditional format rule*/build():SpreadsheetApp.ConditionalFormatRule;
/**Returns a rule builder preset with this rule's settings.
@return a builder based on this rule's settings*/copy():SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Retrieves the rule's [`BooleanCondition`](https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition.html) information if this rule uses
boolean condition criteria. Otherwise returns `null`.

```
// Log the boolean criteria type of the first conditional format rules of a sheet.
var rule = SpreadsheetApp.getActiveSheet().getConditionalFormatRules()[0];
var booleanCondition = rule.getBooleanCondition();
if (booleanCondition != null) {
  Logger.log(booleanCondition.getCriteriaType());
}
```
@return the boolean condition object, or `null` if the rule does not use a boolean
    condition.*/getBooleanCondition():SpreadsheetApp.BooleanCondition;
/**Retrieves the rule's [`GradientCondition`](https://developers.google.com/apps-script/reference/spreadsheet/gradient-condition.html) information, if this rule
uses gradient condition criteria. Otherwise returns `null`.

```
// Log the gradient minimum color of the first conditional format rule of a sheet.
var rule = SpreadsheetApp.getActiveSheet().getConditionalFormatRules()[0];
var gradientCondition = rule.getGradientCondition();
if (gradientCondition != null) {
  // Assume the color has ColorType.RGB.
  Logger.log(gradientCondition.getMinColorObject().asRgbColor().asHexString());
}
```
@return The gradient condition object, or `null` if the rule does not use a gradient
    condition.*/getGradientCondition():SpreadsheetApp.GradientCondition;
/**Retrieves the ranges to which this conditional format rule is applied.

```
// Log each range of the first conditional format rule of a sheet.
var rule = SpreadsheetApp.getActiveSheet().getConditionalFormatRules()[0];
var ranges = rule.getRanges();
for (var i = 0; i < ranges.length; i++) {
  Logger.log(ranges[i].getA1Notation());
}
```
@return the ranges to which this conditional format rule is applied.*/getRanges():SpreadsheetApp.Range[];
/**Sets the background color for the conditional format rule's format. Passing in `null`
removes the background color format setting from the rule.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
// background color to red if the cell has text equal to "hello".

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo("hello")
    .setBackground("#FF0000")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param color The desired color or `null` to clear.
@return the builder, for chaining*/setBackground(color:string):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the background color for the conditional format rule's format. Passing in `null`
removes the background color format setting from the rule.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
// background color to theme background color if the cell has text equal to "hello".

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var color = SpreadsheetApp.newColor()
    .setThemeColor(SpreadsheetApp.ThemeColorType.BACKGROUND)
    .build();
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo("hello")
    .setBackground(color)
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param color The desired color object or `null` to clear.
@return The builder, for chaining.*/setBackgroundObject(color:SpreadsheetApp.Color):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets text bolding for the conditional format rule's format. If `bold` is `true`,
the rule bolds text if the condition is met; if `false`, the rule removes any existing
bolding if the condition is met. Passing in `null` removes the bold format setting from
the rule.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn their
// text bold if the cell has text equal to "hello".

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo("hello")
    .setBold(true)
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param bold Whether or not the text should be bolded if the format condition is met; `null` removes this setting.
@return the builder, for chaining*/setBold(bold:boolean):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the font color for the conditional format rule's format. Passing in `null` removes
the font color format setting from the rule.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their font
// color to red if the cell has text equal to "hello".

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo("hello")
    .setFontColor("#FF0000")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param color The desired color or `null` to clear.
@return the builder, for chaining*/setFontColor(color:string):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the font color for the conditional format rule's format. Passing in `null` removes
the font color format setting from the rule.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their font
// color to theme text color if the cell has text equal to "hello".

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var color = SpreadsheetApp.newColor()
    .setThemeColor(SpreadsheetApp.ThemeColorType.TEXT)
    .build();
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo("hello")
    .setFontColor(color)
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param color The desired color object or `null` to clear.
@return The builder, for chaining.*/setFontColorObject(color:SpreadsheetApp.Color):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Clears the conditional format rule's gradient maxpoint value, and instead uses the maximum
value in the rule's ranges. Also sets the gradient's maxpoint color to the input color.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
// background color somewhere between white and red, based on their values in comparison to
// the ranges minimum and maximum values.

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .setGradientMaxpoint("#FF0000")
    .setGradientMinpoint("#FFFFFF")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param color The maxpoint color to set.
@return the builder, for chaining*/setGradientMaxpoint(color:string):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Clears the conditional format rule's gradient maxpoint value, and instead uses the maximum
value in the rule's ranges. Also sets the gradient's maxpoint color to the input color.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
// background color somewhere between theme text and background colors, based on their values
// in comparison to the ranges minimum and maximum values.

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var textColor = SpreadsheetApp.newColor()
    .setThemeColor(SpreadsheetApp.ThemeColorType.TEXT)
    .build();
var backgroundColor = SpreadsheetApp.newColor()
    .setThemeColor(SpreadsheetApp.ThemeColorType.BACKGROUND)
    .build();
var rule = SpreadsheetApp.newConditionalFormatRule()
    .setGradientMaxpoint(textColor)
    .setGradientMinpoint(backgroundColor)
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param color The maxpoint color object to set.
@return The builder, for chaining.*/setGradientMaxpointObject(color:SpreadsheetApp.Color):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional format rule's gradient maxpoint fields.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
// background color somewhere from theme accent 1, accent 2 to accent 3 colors, based on their
// values in comparison to the values 0, 50, and 100.

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var color1 = SpreadsheetApp.newColor()
    .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT1)
    .build();
var color2 = SpreadsheetApp.newColor()
    .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT2)
    .build();
var color3 = SpreadsheetApp.newColor()
    .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT3)
    .build();
var rule = SpreadsheetApp.newConditionalFormatRule()
    .setGradientMaxpointWithValue(color1, SpreadsheetApp.InterpolationType.NUMBER, "100")
    .setGradientMidpointWithValue(color2, SpreadsheetApp.InterpolationType.NUMBER, "50")
    .setGradientMinpointWithValue(color3, SpreadsheetApp.InterpolationType.NUMBER, "0")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param color The maxpoint color to set.
@param type The maxpoint interpolation type to set.
@param value The maxpoint value to set.
@return The builder, for chaining.*/setGradientMaxpointObjectWithValue(color:SpreadsheetApp.Color,type:SpreadsheetApp.InterpolationType,value:string):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional format rule's gradient maxpoint fields.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
// background color somewhere from red green to blue, based on their values in comparison to
// the values 0, 50, and 100.

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .setGradientMaxpointWithValue("#0000FF", SpreadsheetApp.InterpolationType.NUMBER, "100")
    .setGradientMidpointWithValue("#00FF00", SpreadsheetApp.InterpolationType.NUMBER, "50")
    .setGradientMinpointWithValue("#FF0000", SpreadsheetApp.InterpolationType.NUMBER, "0")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param color The maxpoint color to set.
@param type The maxpoint interpolation type to set.
@param value The maxpoint value to set.
@return the builder, for chaining*/setGradientMaxpointWithValue(color:string,type:SpreadsheetApp.InterpolationType,value:string):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional format rule's gradient midpoint fields. Clears all of the midpoint fields
if the passed in interpolation type is `null`.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
// background color somewhere from theme accent 1 to accent 2 to accent 3 colors, based on
// their values in comparison to the values 0, 50, and 100.

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var color1 = SpreadsheetApp.newColor()
    .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT1)
    .build();
var color2 = SpreadsheetApp.newColor()
    .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT2)
    .build();
var color3 = SpreadsheetApp.newColor()
    .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT3)
    .build();
var rule = SpreadsheetApp.newConditionalFormatRule()
    .setGradientMaxpointWithValue(color1, SpreadsheetApp.InterpolationType.NUMBER, "100")
    .setGradientMidpointWithValue(color2, SpreadsheetApp.InterpolationType.NUMBER, "50")
    .setGradientMinpointWithValue(color3, SpreadsheetApp.InterpolationType.NUMBER, "0")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param color The midpoint color to set.
@param type The midpoint interpolation type to set or `null` to clear.
@param value The midpoint value to set.
@return The builder, for chaining.*/setGradientMidpointObjectWithValue(color:SpreadsheetApp.Color,type:SpreadsheetApp.InterpolationType,value:string):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional format rule's gradient midpoint fields. Clears all of the midpoint fields
if the passed in interpolation type is `null`.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
// background color somewhere from red green to blue, based on their values in comparison to
// the values 0, 50, and 100.

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .setGradientMaxpointWithValue("#0000FF", SpreadsheetApp.InterpolationType.NUMBER, "100")
    .setGradientMidpointWithValue("#00FF00", SpreadsheetApp.InterpolationType.NUMBER, "50")
    .setGradientMinpointWithValue("#FF0000", SpreadsheetApp.InterpolationType.NUMBER, "0")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param color The midpoint color to set.
@param type The midpoint interpolation type to set or `null` to clear.
@param value The midpoint value to set.
@return the builder, for chaining*/setGradientMidpointWithValue(color:string,type:SpreadsheetApp.InterpolationType,value:string):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Clears the conditional format rule's gradient minpoint value, and instead uses the minimum
value in the rule's ranges. Also sets the gradient's minpoint color to the input color.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
// background color somewhere between white and red, based on their values in comparison to
// the ranges minimum and maximum values.

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .setGradientMaxpoint("#FF0000")
    .setGradientMinpoint("#FFFFFF")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param color The minpoint color to set.
@return the builder, for chaining*/setGradientMinpoint(color:string):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Clears the conditional format rule's gradient minpoint value, and instead uses the minimum
value in the rule's ranges. Also sets the gradient's minpoint color to the input color.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
// background color somewhere between theme text and background colors, based on their values
// in comparison to the ranges minimum and maximum values.

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var textColor = SpreadsheetApp.newColor()
    .setThemeColor(SpreadsheetApp.ThemeColorType.TEXT)
    .build();
var backgroundColor = SpreadsheetApp.newColor()
    .setThemeColor(SpreadsheetApp.ThemeColorType.BACKGROUND)
    .build();
var rule = SpreadsheetApp.newConditionalFormatRule()
    .setGradientMaxpoint(textColor)
    .setGradientMinpoint(backgroundColor)
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param color The minpoint color object to set.
@return The builder, for chaining.*/setGradientMinpointObject(color:SpreadsheetApp.Color):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional format rule's gradient minpoint fields.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
// background color somewhere from theme accent 1 to accent 2 to accent 3 colors, based on
// their values in comparison to the values 0, 50, and 100.

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var color1 = SpreadsheetApp.newColor()
    .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT1)
    .build();
var color2 = SpreadsheetApp.newColor()
    .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT2)
    .build();
var color3 = SpreadsheetApp.newColor()
    .setThemeColor(SpreadsheetApp.ThemeColorType.ACCENT3)
    .build();
var rule = SpreadsheetApp.newConditionalFormatRule()
    .setGradientMaxpointWithValue(color1, SpreadsheetApp.InterpolationType.NUMBER, "100")
    .setGradientMidpointWithValue(color2, SpreadsheetApp.InterpolationType.NUMBER, "50")
    .setGradientMinpointWithValue(color3, SpreadsheetApp.InterpolationType.NUMBER, "0")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param color The minpoint color to set.
@param type The minpoint interpolation type to set.
@param value The minpoint value to set.
@return The builder, for chaining.*/setGradientMinpointObjectWithValue(color:SpreadsheetApp.Color,type:SpreadsheetApp.InterpolationType,value:string):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional format rule's gradient minpoint fields.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to set their
// background color somewhere from red to green to blue, based on their values in comparison to
// the values 0, 50, and 100.

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .setGradientMaxpointWithValue("#0000FF", SpreadsheetApp.InterpolationType.NUMBER, "100")
    .setGradientMidpointWithValue("#00FF00", SpreadsheetApp.InterpolationType.NUMBER, "50")
    .setGradientMinpointWithValue("#FF0000", SpreadsheetApp.InterpolationType.NUMBER, "0")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param color The minpoint color to set.
@param type The minpoint interpolation type to set.
@param value The minpoint value to set.
@return the builder, for chaining*/setGradientMinpointWithValue(color:string,type:SpreadsheetApp.InterpolationType,value:string):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets text italics for the conditional format rule's format. If `italic` is `true`,
the rule italicises text if the condition is met; if `false`, the rule removes any
existing italicization if the condition is met. Passing in `null` removes the italic
format setting from the rule.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn their
// text italic if the cell has text equal to "hello".

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo("hello")
    .setItalic(true)
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param italic Whether or not the text should be italicised if the format condition is met;
    `null` removes this setting.
@return the builder, for chaining*/setItalic(italic:boolean):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets one or more ranges to which this conditional format rule is applied. This operation
replaces any existing ranges. Setting an empty array clears any existing ranges. A rule must
have at least one range.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 and range D4:F6
// to turn red if they contain a number between 1 and 10.
var sheet = SpreadsheetApp.getActiveSheet();
var rangeOne = sheet.getRange("A1:B3");
var rangeTwo = sheet.getRange("D4:F6");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenNumberBetween(1, 10)
    .setBackground("#FF0000")
    .setRanges([rangeOne, rangeTwo])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param ranges The ranges to which this conditional format rule is applied.
@return the builder, for chaining*/setRanges(ranges:SpreadsheetApp.Range[]):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets text strikethrough for the conditional format rule's format. If `strikethrough` is
`true`, the rule strikesthrough text if the condition is met; if `false`, the rule
removes any existing strikethrough formatting if the condition is met. Passing in `null`
removes the strikethrough format setting from the rule.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to strikethrough
// their text if the cell has text equal to "hello".

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo("hello")
    .setStrikethrough(true)
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param strikethrough Whether or not the text should be struckthrough if the format condition is
    met; `null` removes this setting.
@return the builder, for chaining*/setStrikethrough(strikethrough:boolean):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets text underlining for the conditional format rule's format. If `underline` is `true`, the rule underlines text if the condition is met; if `false`, the rule removes any
existing underlines if the condition is met. Passing in `null` removes the underline
format setting from the rule.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to underline
// their text if the cell has text equal to "hello".

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo("hello")
    .setUnderline(true)
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param underline Whether or not the text should be underlined if the format condition is met;
    `null` removes this setting.
@return the builder, for chaining*/setUnderline(underline:boolean):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional format rule to trigger when the cell is empty.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
// they are empty.
var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenCellEmpty()
    .setBackground("#FF0000")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@return the builder, for chaining*/whenCellEmpty():SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional format rule to trigger when the cell is not empty.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
// they are not empty.
var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenCellNotEmpty()
    .setBackground("#FF0000")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@return the builder, for chaining*/whenCellNotEmpty():SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional format rule to trigger when a date is after the given value.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
// they contain a date after 11/4/1993.

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenDateAfter(new Date("11/4/1993"))
    .setBackground("#FF0000")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param date The latest date.
@return the builder, for chaining*/whenDateAfter(date:Date):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional format rule to trigger when a date is after the given relative date.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
// they contain a date after today.

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenDateAfter(SpreadsheetApp.RelativeDate.TODAY)
    .setBackground("#FF0000")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param date The latest date relative to the date type selected.
@return the builder, for chaining*/whenDateAfter(date:SpreadsheetApp.RelativeDate):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional format rule to trigger when a date is before the given date.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
// they contain a date before 11/4/1993.

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenDateBefore(new Date("11/4/1993"))
    .setBackground("#FF0000")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param date The earliest unacceptable date.
@return the builder, for chaining*/whenDateBefore(date:Date):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional format rule to trigger when a date is before the given relative date.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
// they contain a date before today.

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenDateBefore(SpreadsheetApp.RelativeDate.TODAY)
    .setBackground("#FF0000")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param date The latest date relative to the date type selected.
@return the builder, for chaining*/whenDateBefore(date:SpreadsheetApp.RelativeDate):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional format rule to trigger when a date is equal to the given date.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
// they contain the date 11/4/1993.

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenDateEqualTo(new Date("11/4/1993"))
    .setBackground("#FF0000")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param date The sole acceptable date.
@return the builder, for chaining*/whenDateEqualTo(date:Date):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional format rule to trigger when a date is equal to the given relative date.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
// they contain todays date.

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenDateEqualTo(SpreadsheetApp.RelativeDate.TODAY)
    .setBackground("#FF0000")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param date The latest date relative to the date type selected.
@return the builder, for chaining*/whenDateEqualTo(date:SpreadsheetApp.RelativeDate):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional format rule to trigger when that the given formula evaluates to `true`.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
// they satisfy the condition "=EQ(B4, C3)".

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied("=EQ(B4, C3)")
    .setBackground("#FF0000")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param formula A custom formula that evaluates to `true` if the input is valid.
@return the builder, for chaining*/whenFormulaSatisfied(formula:string):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional format rule to trigger when a number falls between, or is either of, two
specified values.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
// they contain a number between 1 and 10.

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenNumberBetween(1, 10)
    .setBackground("#FF0000")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param start The lowest acceptable value.
@param end The highest acceptable value.
@return the builder, for chaining*/whenNumberBetween(start:number,end:number):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional format rule to trigger when a number is equal to the given value.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
// they contain the number 10.

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenNumberEqualTo(10)
    .setBackground("#FF0000")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param number The sole acceptable value.
@return the builder, for chaining*/whenNumberEqualTo(number:number):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional format rule to trigger when a number is greater than the given value.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red
// if they contain a number greater than 10.

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenNumberGreaterThan(10)
    .setBackground("#FF0000")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param number The highest unacceptable value.
@return the builder, for chaining*/whenNumberGreaterThan(number:number):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional format rule to trigger when a number is greater than or equal to the given
value.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
// they contain a number greater than or equal to 10.

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenNumberGreaterThanOrEqualTo(10)
    .setBackground("#FF0000")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param number The lowest acceptable value.
@return the builder, for chaining*/whenNumberGreaterThanOrEqualTo(number:number):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional conditional format rule to trigger when a number less than the given
value.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
// they contain a number less than 10.

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenNumberLessThan(10)
    .setBackground("#FF0000")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param number The lowest unacceptable value.
@return the builder, for chaining*/whenNumberLessThan(number:number):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional format rule to trigger when a number less than or equal to the given
value.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
// they contain a number less than or equal to 10.

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenNumberLessThanOrEqualTo(10)
    .setBackground("#FF0000")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param number The highest acceptable value.
@return the builder, for chaining*/whenNumberLessThanOrEqualTo(number:number):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional format rule to trigger when a number does not fall between, and is neither
of, two specified values.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
// they contain a number not between 1 and 10.

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenNumberNotBetween(1, 10)
    .setBackground("#FF0000")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param start The lowest unacceptable value.
@param end The highest unacceptable value.
@return the builder, for chaining*/whenNumberNotBetween(start:number,end:number):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional format rule to trigger when a number is not equal to the given value.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
// they don't contain the number 10.

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenNumberNotEqualTo(10)
    .setBackground("#FF0000")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param number The sole unacceptable value.
@return the builder, for chaining*/whenNumberNotEqualTo(number:number):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional format rule to trigger when that the input contains the given value.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
// they contain the text "hello".

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextContains("hello")
    .setBackground("#FF0000")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param text The value that the input must contain.
@return the builder, for chaining*/whenTextContains(text:string):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional format rule to trigger when that the input does not contain the given
value.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
// they don't contain the text "hello".

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextDoesNotContain("hello")
    .setBackground("#FF0000")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param text The value that the input must not contain.
@return the builder, for chaining*/whenTextDoesNotContain(text:string):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional format rule to trigger when that the input ends with the given value.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
// they end with the text "hello".

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEndsWith("hello")
    .setBackground("#FF0000")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param text Text to compare against the end of the string.
@return the builder, for chaining*/whenTextEndsWith(text:string):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional format rule to trigger when that the input is equal to the given value.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
// they have text equal to "hello".

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo("hello")
    .setBackground("#FF0000")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param text The sole acceptable value.
@return the builder, for chaining*/whenTextEqualTo(text:string):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional format rule to trigger when that the input starts with the given value.

```
// Adds a conditional format rule to a sheet that causes cells in range A1:B3 to turn red if
// they start with the text "hello".

var sheet = SpreadsheetApp.getActiveSheet();
var range = sheet.getRange("A1:B3");
var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextStartsWith("hello")
    .setBackground("#FF0000")
    .setRanges([range])
    .build();
var rules = sheet.getConditionalFormatRules();
rules.push(rule);
sheet.setConditionalFormatRules(rules);
```
@param text Text to compare against the beginning of the string.
@return the builder, for chaining*/whenTextStartsWith(text:string):SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Sets the conditional format rule to criteria defined by [`BooleanCriteria`](https://developers.google.com/apps-script/reference/spreadsheet/boolean-criteria.html) values,
typically taken from the [`criteria`](https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition.html#getCriteriaType()) and [`arguments`](https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition.html#getCriteriaValues()) of an
existing rule.

```
// Adds a new conditional format rule that is a copy of the first active
// conditional format rule, except it instead sets its cells to have a black
// background color.

var sheet = SpreadsheetApp.getActiveSheet();
var rules = sheet.getConditionalFormatRules();
var booleanCondition = rules[0].getBooleanCondition();
if (booleanCondition != null) {
  var rule = SpreadsheetApp.newConditionalFormatRule()
      .withCriteria(booleanCondition.getCriteriaType(),
         booleanCondition.getCriteriaValues())
      .setBackground("#000000")
      .setRanges(rule.getRanges())
      .build();
  rules.push(rule);
}
sheet.setConditionalFormatRules(rules);
```
@param criteria The type of conditional format criteria.
@param args An array of arguments appropriate to the criteria type; the number of arguments and
    their type match the corresponding `when...()` method above.
@return the builder, for chaining*/withCriteria(criteria:SpreadsheetApp.BooleanCriteria,args:Object[]):SpreadsheetApp.ConditionalFormatRuleBuilder;}interface ConditionalFormatRule{
/**Returns a rule builder preset with this rule's settings.
@return a builder based on this rule's settings*/copy():SpreadsheetApp.ConditionalFormatRuleBuilder;
/**Retrieves the rule's [`BooleanCondition`](https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition.html) information if this rule uses
boolean condition criteria. Otherwise returns `null`.

```
// Log the boolean criteria type of the first conditional format rules of a sheet.
var rule = SpreadsheetApp.getActiveSheet().getConditionalFormatRules()[0];
var booleanCondition = rule.getBooleanCondition();
if (booleanCondition != null) {
  Logger.log(booleanCondition.getCriteriaType());
}
```
@return the boolean condition object, or `null` if the rule does not use a boolean
    condition.*/getBooleanCondition():SpreadsheetApp.BooleanCondition;
/**Retrieves the rule's [`GradientCondition`](https://developers.google.com/apps-script/reference/spreadsheet/gradient-condition.html) information, if this rule
uses gradient condition criteria. Otherwise returns `null`.

```
// Log the gradient minimum color of the first conditional format rule of a sheet.
var rule = SpreadsheetApp.getActiveSheet().getConditionalFormatRules()[0];
var gradientCondition = rule.getGradientCondition();
if (gradientCondition != null) {
  // Assume the color has ColorType.RGB.
  Logger.log(gradientCondition.getMinColorObject().asRgbColor().asHexString());
}
```
@return The gradient condition object, or `null` if the rule does not use a gradient
    condition.*/getGradientCondition():SpreadsheetApp.GradientCondition;
/**Retrieves the ranges to which this conditional format rule is applied.

```
// Log each range of the first conditional format rule of a sheet.
var rule = SpreadsheetApp.getActiveSheet().getConditionalFormatRules()[0];
var ranges = rule.getRanges();
for (var i = 0; i < ranges.length; i++) {
  Logger.log(ranges[i].getA1Notation());
}
```
@return the ranges to which this conditional format rule is applied.*/getRanges():SpreadsheetApp.Range[];}interface ColorBuilder{
/**Converts this color to an [`RgbColor`](https://developers.google.com/apps-script/reference/spreadsheet/../base/rgb-color.html).
@return The RGB color.*/asRgbColor():RgbColor;
/**Converts this color to a [`ThemeColor`](https://developers.google.com/apps-script/reference/spreadsheet/theme-color.html).
@return The theme color.*/asThemeColor():SpreadsheetApp.ThemeColor;
/**Creates a color object from the settings supplied to the builder.
@return A color object created from this builder.*/build():SpreadsheetApp.Color;
/**Get the type of this color.
@return The color type.*/getColorType():ColorType;
/**Sets as RGB color.
@param cssString The RGB color in CSS notation (such as '#ffffff').
@return This builder, for chaining.*/setRgbColor(cssString:string):SpreadsheetApp.ColorBuilder;
/**Sets as theme color.
@param themeColorType The theme color type.
@return This builder, for chaining.*/setThemeColor(themeColorType:SpreadsheetApp.ThemeColorType):SpreadsheetApp.ColorBuilder;}interface Color{
/**Converts this color to an [`RgbColor`](https://developers.google.com/apps-script/reference/spreadsheet/../base/rgb-color.html).
@return The RGB color.*/asRgbColor():RgbColor;
/**Converts this color to a [`ThemeColor`](https://developers.google.com/apps-script/reference/spreadsheet/theme-color.html).
@return The theme color.*/asThemeColor():SpreadsheetApp.ThemeColor;
/**Get the type of this color.
@return The color type.*/getColorType():ColorType;}interface CellImageBuilder{
/**A field set to `ValueType.IMAGE`, representing the image value type.*/valueType:SpreadsheetApp._ValueType;
/**Creates the image value type needed to add an image to a cell. The image value is built from
the image properties added to the builder, such as the source URL.
@return A representation of the image to add to a cell.*/build():SpreadsheetApp.CellImage;
/**Returns the alt text description for this image.
@return The alt text description.*/getAltTextDescription():string;
/**Returns the alt text title for this image.
@return The alt text title.*/getAltTextTitle():string;
/**Returns a Google-hosted URL to the image. This URL is tagged with the account of the requester,
so anyone with the URL effectively accesses the image as the original requester. Access to the
image might be lost if the spreadsheet's sharing settings change. The returned URL expires
after a short period of time.
@return The Google-hosted URL of the image.*/getContentUrl():string;
/**Gets the image's source URL; returns `null` if the URL is unavailable. If the image was
inserted by URL using an API, this method returns the URL provided during image insertion.
@return The image URL if available; returns `null` if the image is unavailable or doesn't
    have a source URL.*/getUrl():string;
/**Sets the alt-text description for this image.
@param description The new alt text description for the image.
@return This image, for chaining.*/setAltTextDescription(description:string):SpreadsheetApp.CellImage;
/**Sets the alt text title for this image.
@param title The new alt text title for the image.
@return This image, for chaining.*/setAltTextTitle(title:string):SpreadsheetApp.CellImage;
/**Sets the image source URL.
@param url The URL for the image.
@return This builder, for chaining.*/setSourceUrl(url:string):SpreadsheetApp.CellImageBuilder;
/**Creates a builder that turns an image into an image value type so that you can place it into a
cell. Before an image is placed into a cell, it needs to be created as an image value type.
Then you can add it to a cell using [`Range.setValue(value)`](https://developers.google.com/apps-script/reference/spreadsheet/range.html#setValue(Object)) or [`Range.setValues(values)`](https://developers.google.com/apps-script/reference/spreadsheet/range.html#setValues(Object)).
@return A builder that creates an image value type based on the given image properties.*/toBuilder():SpreadsheetApp.CellImageBuilder;}interface CellImage{
/**A field set to `ValueType.IMAGE`, representing the image value type.*/valueType:SpreadsheetApp._ValueType;
/**Returns the alt text description for this image.
@return The alt text description.*/getAltTextDescription():string;
/**Returns the alt text title for this image.
@return The alt text title.*/getAltTextTitle():string;
/**Returns a Google-hosted URL to the image. This URL is tagged with the account of the requester,
so anyone with the URL effectively accesses the image as the original requester. Access to the
image might be lost if the spreadsheet's sharing settings change. The returned URL expires
after a short period of time.
@return The Google-hosted URL of the image.*/getContentUrl():string;
/**Gets the image's source URL; returns `null` if the URL is unavailable. If the image was
inserted by URL using an API, this method returns the URL provided during image insertion.
@return The image URL if available; returns `null` if the image is unavailable or doesn't
    have a source URL.*/getUrl():string;
/**Creates a builder that turns an image into an image value type so that you can place it into a
cell. Before an image is placed into a cell, it needs to be created as an image value type.
Then you can add it to a cell using [`Range.setValue(value)`](https://developers.google.com/apps-script/reference/spreadsheet/range.html#setValue(Object)) or [`Range.setValues(values)`](https://developers.google.com/apps-script/reference/spreadsheet/range.html#setValues(Object)).
@return A builder that creates an image value type based on the given image properties.*/toBuilder():SpreadsheetApp.CellImageBuilder;}interface Borders{
/**Returns the bottom border.
@return The bottom border.*/getBottom():SpreadsheetApp.Border;
/**Returns the left border.
@return The left border.*/getLeft():SpreadsheetApp.Border;
/**Returns the right border.
@return The right border.*/getRight():SpreadsheetApp.Border;
/**Returns the top border.
@return The top border.*/getTop():SpreadsheetApp.Border;}interface BorderStyle{}interface _BorderStyle{
/**Dashed line borders.*/DASHED:BorderStyle;
/**Dotted line borders.*/DOTTED:BorderStyle;
/**Two solid line borders.*/DOUBLE:BorderStyle;
/**Thin solid line borders.*/SOLID:BorderStyle;
/**Medium solid line borders.*/SOLID_MEDIUM:BorderStyle;
/**Thick solid line borders.*/SOLID_THICK:BorderStyle;}interface Border{
/**Returns the style of this border or `null` if the border does not contains a border
style.
@return The border style.*/getBorderStyle():SpreadsheetApp.BorderStyle;
/**Returns the color of this border or `null` if the color is not specified in this border.
@return The border color.*/getColor():SpreadsheetApp.Color;}interface BooleanCriteria{}interface _BooleanCriteria{
/**The criteria is met when a cell is empty.*/CELL_EMPTY:BooleanCriteria;
/**The criteria is met when a cell is not empty.*/CELL_NOT_EMPTY:BooleanCriteria;
/**The criteria is met when the input makes the given formula evaluate to `true`.*/CUSTOM_FORMULA:BooleanCriteria;
/**The criteria is met when a date is after the given value.*/DATE_AFTER:BooleanCriteria;
/**The criteria is met when a date is after the relative date value.*/DATE_AFTER_RELATIVE:BooleanCriteria;
/**The criteria is met when a date is before the given value.*/DATE_BEFORE:BooleanCriteria;
/**The criteria is met when a date is before the relative date value.*/DATE_BEFORE_RELATIVE:BooleanCriteria;
/**The criteria is met when a date is equal to the given value.*/DATE_EQUAL_TO:BooleanCriteria;
/**The criteria is met when a date is equal to the relative date value.*/DATE_EQUAL_TO_RELATIVE:BooleanCriteria;
/**The criteria is met when a date is not equal to the given value.*/DATE_NOT_EQUAL_TO:BooleanCriteria;
/**The criteria is met when a number that is between the given values.*/NUMBER_BETWEEN:BooleanCriteria;
/**The criteria is met when a number that is equal to the given value.*/NUMBER_EQUAL_TO:BooleanCriteria;
/**The criteria is met when a number that is greater than the given value.*/NUMBER_GREATER_THAN:BooleanCriteria;
/**The criteria is met when a number that is greater than or equal to the given value.*/NUMBER_GREATER_THAN_OR_EQUAL_TO:BooleanCriteria;
/**The criteria is met when a number that is less than the given value.*/NUMBER_LESS_THAN:BooleanCriteria;
/**The criteria is met when a number that is less than or equal to the given value.*/NUMBER_LESS_THAN_OR_EQUAL_TO:BooleanCriteria;
/**The criteria is met when a number that is not between the given values.*/NUMBER_NOT_BETWEEN:BooleanCriteria;
/**The criteria is met when a number that is not equal to the given value.*/NUMBER_NOT_EQUAL_TO:BooleanCriteria;
/**The criteria is met when the input contains the given value.*/TEXT_CONTAINS:BooleanCriteria;
/**The criteria is met when the input does not contain the given value.*/TEXT_DOES_NOT_CONTAIN:BooleanCriteria;
/**The criteria is met when the input ends with the given value.*/TEXT_ENDS_WITH:BooleanCriteria;
/**The criteria is met when the input is equal to the given value.*/TEXT_EQUAL_TO:BooleanCriteria;
/**The criteria is met when the input is not equal to the given value.*/TEXT_NOT_EQUAL_TO:BooleanCriteria;
/**The criteria is met when the input begins with the given value.*/TEXT_STARTS_WITH:BooleanCriteria;}interface BooleanCondition{
/**Gets the background color string for this boolean condition. Returns `null` if not set.

```
// Logs the boolean condition background color for each conditional format rule on a sheet.
var sheet = SpreadsheetApp.getActiveSheet();
var rules = sheet.getConditionalFormatRules();
for (int i = 0; i < rules.length; i++) {
  var color = rules[i].getBooleanCondition().getBackground();
  Logger.log("The background color for rule %s is %s", i, color);
}
```
@deprecated
@return The background color string, or `null` if not set for this condition.*/getBackground():string;
/**Gets the background color for this boolean condition. Returns `null` if not set.

```
// Logs the boolean condition background color for each conditional format rule on a sheet.
var sheet = SpreadsheetApp.getActiveSheet();
var rules = sheet.getConditionalFormatRules();
for (int i = 0; i < rules.length; i++) {
  var color = rules[i].getBooleanCondition().getBackgroundObject();
  Logger.log("The background color for rule %s is %s", i, color.asRgbColor().asHexString());
}
```
@return The background color, or `null` if not set for this condition.*/getBackgroundObject():SpreadsheetApp.Color;
/**Returns `true` if this boolean condition bolds the text and returns `false` if this
boolean condition removes bolding from the text. Returns `null` if bolding is unaffected.

```
// Logs the boolean condition font weight for each conditional format rule on a sheet.
var sheet = SpreadsheetApp.getActiveSheet();
var rules = sheet.getConditionalFormatRules();
for (int i = 0; i < rules.length; i++) {
  var bold = rules[i].getBooleanCondition().getBold();
  Logger.log("The font bold setting for rule %s is %b", i, weight);
}
```
@return whether or not the boolean condition bolds the text, or `null` if bolding is
    unaffected*/getBold():boolean;
/**Gets the rule's criteria type as defined in the [`BooleanCriteria`](https://developers.google.com/apps-script/reference/spreadsheet/boolean-criteria.html) enum. To get the
arguments for the criteria, use [`getCriteriaValues()`](https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition.html#getCriteriaValues()). To use these values to create or
modify a conditional formatting rule, see [`ConditionalFormatRuleBuilder.withCriteria(criteria, args)`](https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder.html#withCriteria(BooleanCriteria,Object)).

```
// Log information about the conditional formats on the active sheet that use
// boolean conditions.
var sheet = SpreadsheetApp.getActiveSheet;
var formats = sheet.getConditionalFormats();
sheet.getConditionalFormats().forEach(function(format) {
  var booleanCondition = format.getBooleanCondition();
  if (booleanCondition) {
    var criteria = booleanCondition.getCriteriaType();
    var args = booleanCondition.getCriteriaValues();
    Logger.log('The conditional format rule is %s %s', criteria, args);
  }
});
```
@return the type of conditional formatting criteria*/getCriteriaType():SpreadsheetApp.BooleanCriteria;
/**Gets an array of arguments for the rule's criteria. To get the criteria type, use [`getCriteriaType()`](https://developers.google.com/apps-script/reference/spreadsheet/boolean-condition.html#getCriteriaType()). To use these values to create or modify a conditional formatting rule, see
[`ConditionalFormatRuleBuilder.withCriteria(criteria, args)`](https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder.html#withCriteria(BooleanCriteria,Object)).

```
// Log information about the conditional formats on the active sheet that use
// boolean conditions.
var sheet = SpreadsheetApp.getActiveSheet;
var formats = sheet.getConditionalFormats();
sheet.getConditionalFormats().forEach(function(format) {
  var booleanCondition = format.getBooleanCondition();
  if (booleanCondition) {
    var criteria = booleanCondition.getCriteriaType();
    var args = booleanCondition.getCriteriaValues();
    Logger.log('The conditional format rule is %s %s', criteria, args);
  }
});
```
@return an array of arguments appropriate to the rule's criteria type; the number of arguments
    and their type match the corresponding `when...()` method of the [`ConditionalFormatRuleBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/conditional-format-rule-builder.html) class*/getCriteriaValues():Object[];
/**Gets the font color string for this boolean condition. Returns `null` if not set.

```
// Logs the boolean condition font color for each conditional format rule on a sheet.
var sheet = SpreadsheetApp.getActiveSheet();
var rules = sheet.getConditionalFormatRules();
for (int i = 0; i < rules.length; i++) {
  var color = rules[i].getBooleanCondition().getFontColor();
  Logger.log("The font color for rule %s is %s", i, color);
}
```
@deprecated
@return The font color string, or `null` if not set for this condition.*/getFontColor():string;
/**Gets the font color for this boolean condition. Returns `null` if not set.

```
// Logs the boolean condition font color for each conditional format rule on a sheet.
var sheet = SpreadsheetApp.getActiveSheet();
var rules = sheet.getConditionalFormatRules();
for (int i = 0; i < rules.length; i++) {
  var color = rules[i].getBooleanCondition().getFontColorObject();
  Logger.log("The font color for rule %s is %s", i, color.asRgbColor().asHexString());
}
```
@return The font color, or `null` if not set for this condition.*/getFontColorObject():SpreadsheetApp.Color;
/**Returns `true` if this boolean condition italicises the text and returns `false` if
this boolean condition removes italics from the text. Returns `null` if italics are
unaffected.

```
// Logs the boolean condition font style for each conditional format rule on a sheet.
var sheet = SpreadsheetApp.getActiveSheet();
var rules = sheet.getConditionalFormatRules();
for (int i = 0; i < rules.length; i++) {
  var italic = rules[i].getBooleanCondition().getItalic();
  Logger.log("The font italic setting for rule %s is %b", i, italic);
}
```
@return whether or not the boolean condition italicises the text, or `null` if
    italicising is unaffected*/getItalic():boolean;
/**Returns `true` if this boolean condition strikes through the text and returns `false` if this boolean condition removes strikethrough from the text. Returns `null` if
strikethrough is unaffected.

```
// Logs the boolean condition strikethrough setting for each conditional format rule on a
// sheet.
var sheet = SpreadsheetApp.getActiveSheet();
var rules = sheet.getConditionalFormatRules();
for (int i = 0; i < rules.length; i++) {
  var strikethrough = rules[i].getBooleanCondition().getStrikethrough();
  Logger.log("The font strikethrough setting for rule %s is %b", i, strikethrough);
}
```
@return whether or not the boolean condition strikes through the text, or `null` if
    strikethrough is unaffected*/getStrikethrough():boolean;
/**Returns `true` if this boolean condition underlines the text and returns `false` if
this boolean condition removes underlining from the text. Returns `null` if underlining
is unaffected.

```
// Logs the boolean condition underline setting for each conditional format rule on a sheet.
var sheet = SpreadsheetApp.getActiveSheet();
var rules = sheet.getConditionalFormatRules();
for (int i = 0; i < rules.length; i++) {
  var underline = rules[i].getBooleanCondition().getUnderline();
  Logger.log("The font underline setting for rule %s is %b", i, underline);
}
```
@return whether or not the boolean condition underlines the text, or `null` if
    underlining is unaffected*/getUnderline():boolean;}interface BigQueryDataSourceSpecBuilder{
/**Builds a data source specification from the settings in this builder. Must use `as...()`
to specify a data source type before building.

The following code sample builds a BigQuery DataSource Spec.

```
var bigQueryDataSourceSpec = SpreadsheetApp.newDataSourceSpec().asBigQuery();
// TODO(developer): Replace with the required dataset, project and table IDs.
bigQueryDataSourceSpec.setDatasetId("my data set id");
bigQueryDataSourceSpec.setProjectId("my project id");
bigQueryDataSourceSpec.setTableId("my table id");

bigQueryDataSourceSpec.build();

```

The following code sample builds a Looker DataSource Spec.

```
var lookerDataSourceSpecBuilder = SpreadsheetApp.newDataSourceSpec().asLooker();
var lookerSpec = lookerDataSourceSpecBuilder.setExploreName("my explore name")
                                            .setInstanceUrl("my instance url")
                                            .setModelName("my model name")
                                            .build();
```
@return The data source specification.*/build():SpreadsheetApp.DataSourceSpec;
/**Creates a [`DataSourceSpecBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec-builder.html) based on this data source's settings.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');
var spec = ss.getDataSources()[0].getSpec();

var newSpec = spec.copy();
```
@return The builder.*/copy():SpreadsheetApp.DataSourceSpecBuilder;
/**Gets the BigQuery dataset ID.
@return The dataset ID, or an empty string if the data source spec is defined by a raw query.*/getDatasetId():string;
/**Gets the parameters of the data source.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');
var spec = ss.getDataSources()[0].getSpec();
var parameters = spec.getParameters();
```

This method is only available for BigQuery data sources.
@return The parameter list.*/getParameters():SpreadsheetApp.DataSourceParameter[];
/**Gets the billing project ID.
@return The project ID.*/getProjectId():string;
/**Gets the raw query string.
@return The raw query string.*/getRawQuery():string;
/**Gets the BigQuery table ID.
@return The table ID, or an empty string if the data source spec is defined by a raw query.*/getTableId():string;
/**Gets the BigQuery project ID for the table.
@return The table project ID, or an empty string if the data source spec is defined by a raw
    query.*/getTableProjectId():string;
/**Gets the type of the data source.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');
var spec = ss.getDataSources()[0].getSpec();
var type = spec.getType();
```
@return The data source type.*/getType():SpreadsheetApp.DataSourceType;
/**Removes all the parameters.

```
var specBuilder = SpreadsheetApp.newDataSourceSpec();
specBuilder.removeAllParameters();
```
@return The builder, for chaining.*/removeAllParameters():SpreadsheetApp.BigQueryDataSourceSpecBuilder;
/**Removes the specified parameter.

```
var specBuilder = SpreadsheetApp.newDataSourceSpec();
specBuilder.removeParameter("x");
```
@param parameterName The name of the parameter to remove.
@return The builder, for chaining.*/removeParameter(parameterName:string):SpreadsheetApp.BigQueryDataSourceSpecBuilder;
/**Sets the BigQuery dataset ID.
@param datasetId The ID of the dataset.
@return This builder, for chaining.*/setDatasetId(datasetId:string):SpreadsheetApp.BigQueryDataSourceSpecBuilder;
/**Adds a parameter, or if the parameter with the name exists, updates its source cell for data
source spec builders of type [`DataSourceType.BIGQUERY`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-type.html#BIGQUERY).

This method is only available for BigQuery data sources.

```
var specBuilder = SpreadsheetApp.newDataSourceSpec().asBigQuery();
specBuilder.setParameterFromCell("x", "A1");
var bigQuerySpec = specBuilder.build();
```
@param parameterName The parameter name.
@param sourceCell The source cell, as specified in A1 notation.
@return The builder, for chaining.*/setParameterFromCell(parameterName:string,sourceCell:string):SpreadsheetApp.BigQueryDataSourceSpecBuilder;
/**Sets the billing BigQuery project ID.
@param projectId The ID of the billing project.
@return The builder, for chaining.*/setProjectId(projectId:string):SpreadsheetApp.BigQueryDataSourceSpecBuilder;
/**Sets the raw query string.
@param rawQuery The raw query string.
@return The builder, for chaining.*/setRawQuery(rawQuery:string):SpreadsheetApp.BigQueryDataSourceSpecBuilder;
/**Sets the BigQuery table ID.
@param tableId The ID of the table.
@return This builder, for chaining.*/setTableId(tableId:string):SpreadsheetApp.BigQueryDataSourceSpecBuilder;
/**Sets the BigQuery project ID for the table.
@param projectId The project ID of the BigQuery table.
@return The builder, for chaining.*/setTableProjectId(projectId:string):SpreadsheetApp.BigQueryDataSourceSpecBuilder;}interface BigQueryDataSourceSpec{
/**Creates a [`DataSourceSpecBuilder`](https://developers.google.com/apps-script/reference/spreadsheet/data-source-spec-builder.html) based on this data source's settings.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');
var spec = ss.getDataSources()[0].getSpec();

var newSpec = spec.copy();
```
@return The builder.*/copy():SpreadsheetApp.DataSourceSpecBuilder;
/**Gets the BigQuery dataset ID.
@return The dataset ID, or an empty string if the data source spec is defined by a raw query.*/getDatasetId():string;
/**Gets the parameters of the data source.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');
var spec = ss.getDataSources()[0].getSpec();
var parameters = spec.getParameters();
```

This method is only available for BigQuery data sources.
@return The parameter list.*/getParameters():SpreadsheetApp.DataSourceParameter[];
/**Gets the billing project ID.
@return The project ID.*/getProjectId():string;
/**Gets the raw query string.
@return The raw query string.*/getRawQuery():string;
/**Gets the BigQuery table ID.
@return The table ID, or an empty string if the data source spec is defined by a raw query.*/getTableId():string;
/**Gets the BigQuery project ID for the table.
@return The table project ID, or an empty string if the data source spec is defined by a raw
    query.*/getTableProjectId():string;
/**Gets the type of the data source.

```
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');
var spec = ss.getDataSources()[0].getSpec();
var type = spec.getType();
```
@return The data source type.*/getType():SpreadsheetApp.DataSourceType;}interface BandingTheme{}interface _BandingTheme{
/**A blue banding theme.*/BLUE:BandingTheme;
/**A brown banding theme.*/BROWN:BandingTheme;
/**A cyan banding theme.*/CYAN:BandingTheme;
/**A green banding theme.*/GREEN:BandingTheme;
/**A grey banding theme.*/GREY:BandingTheme;
/**An indigo banding theme.*/INDIGO:BandingTheme;
/**A light green banding theme.*/LIGHT_GREEN:BandingTheme;
/**A light grey banding theme.*/LIGHT_GREY:BandingTheme;
/**An orange banding theme.*/ORANGE:BandingTheme;
/**A pink banding theme.*/PINK:BandingTheme;
/**A teal banding theme.*/TEAL:BandingTheme;
/**A yellow banding theme.*/YELLOW:BandingTheme;}interface Banding{
/**Copies this banding to another range.
@param range The range to copy this banding to.
@return The new banding.*/copyTo(range:SpreadsheetApp.Range):SpreadsheetApp.Banding;
/**Returns the first column color that is alternating, or `null` if no color is set.
@deprecated
@return The color code in CSS notation (such as `'#ffffff'` or `'white'`), or
    `null` if no color is set.*/getFirstColumnColor():string;
/**Returns the first alternating column color in the banding, or `null` if no color is set.
@return The first alternating column color in the banding, or `null` if no color is set.*/getFirstColumnColorObject():SpreadsheetApp.Color;
/**Returns the first row color that is alternating or `null` if no color is set.
@deprecated
@return The color code in CSS notation (such as `'#ffffff'` or `'white'`), or
    `null` if no color is set.*/getFirstRowColor():string;
/**Returns the first alternating row color, or `null` if no color is set.
@return The first alternating row color in the banding, or `null` if no color is set.*/getFirstRowColorObject():SpreadsheetApp.Color;
/**Returns the color of the last column, or `null` if no color is set.
@deprecated
@return The color code in CSS notation (such as `'#ffffff'` or `'white'`), or
    `null` if no color is set.*/getFooterColumnColor():string;
/**Returns the color of the last column in the banding, or `null` if no color is set.
@return The last column color in the banding, or `null` if no color is set.*/getFooterColumnColorObject():SpreadsheetApp.Color;
/**Returns the color of the last row, or `null` if no color is set.
@deprecated
@return The color code in CSS notation (such as `'#ffffff'` or `'white'`), or
    `null` if no color is set.*/getFooterRowColor():string;
/**Returns the last row color in the banding, or `null` if no color is set.
@return The footer row color in the banding, or `null` if no color is set.*/getFooterRowColorObject():SpreadsheetApp.Color;
/**Returns the color of the header column, or `null` if no color is set.
@deprecated
@return The color code in CSS notation (such as `'#ffffff'` or `'white'`), or
    `null` if no color is set.*/getHeaderColumnColor():string;
/**Returns the color of the first column in the banding, or `null` if no color is set.
@return The first column color in the banding, or `null` if no color is set.*/getHeaderColumnColorObject():SpreadsheetApp.Color;
/**Returns the color of the header row or `null` if no color is set.
@deprecated
@return The color code in CSS notation (such as `'#ffffff'` or `'white'`), or
    `null` if no color is set.*/getHeaderRowColor():string;
/**Returns the color of the header row or `null` if no color is set.
@return The color of the header row; returns `null` if no color is set.*/getHeaderRowColorObject():SpreadsheetApp.Color;
/**Returns the range for this banding.
@return The range for this banding.*/getRange():SpreadsheetApp.Range;
/**Returns the second column color that is alternating, or `null` if no color is set.
@deprecated
@return The HEX color or `null` if no color is set.*/getSecondColumnColor():string;
/**Returns the second alternating column color in the banding, or `null` if no color is set.
@return The second alternating column color in the banding, or `null` if no color is set.*/getSecondColumnColorObject():SpreadsheetApp.Color;
/**Returns the second row color that is alternating or `null` if no color is set.
@deprecated
@return The color code in CSS notation (such as `'#ffffff'` or `'white'`), or
    `null` if no color is set.*/getSecondRowColor():string;
/**Returns the second alternating row color, or `null` if no color is set.
@return The second alternating row color in the banding, or `null` if no color is set.*/getSecondRowColorObject():SpreadsheetApp.Color;
/**Removes this banding.*/remove():void;
/**Sets the first column color that is alternating.
@param color The color code in CSS notation (such as `'#ffffff'` or `'white'`), or
    `null` to clear the color.
@return This banding, for chaining.*/setFirstColumnColor(color:string):SpreadsheetApp.Banding;
/**Sets the first alternating column color in the banding.
@param color The new first alternating column color in the banding; setting to `null`
    clears the color.
@return This banding, for chaining.*/setFirstColumnColorObject(color:SpreadsheetApp.Color):SpreadsheetApp.Banding;
/**Sets the first row color that is alternating.
@param color The color code in CSS notation (such as `'#ffffff'` or `'white'`), or
    `null` to clear the color.
@return This banding, for chaining.*/setFirstRowColor(color:string):SpreadsheetApp.Banding;
/**Sets the first alternating row color in the banding.
@param color The new first alternating color in the banding; setting to `null` clears the
    color.
@return This banding, for chaining.*/setFirstRowColorObject(color:SpreadsheetApp.Color):SpreadsheetApp.Banding;
/**Sets the color of the last column.
@param color The color code in CSS notation (such as `'#ffffff'` or `'white'`), or
    `null` to clear the color.
@return This banding, for chaining.*/setFooterColumnColor(color:string):SpreadsheetApp.Banding;
/**Sets the color of the last column in the banding.
@param color The new color of the last column in the banding; setting to `null` clears
    the color.
@return This banding, for chaining.*/setFooterColumnColorObject(color:SpreadsheetApp.Color):SpreadsheetApp.Banding;
/**Sets the color of the last row.
@param color The color code in CSS notation (such as `'#ffffff'` or `'white'`), or
    `null` to clear the color.
@return This banding, for chaining.*/setFooterRowColor(color:string):SpreadsheetApp.Banding;
/**Sets the color of the footer row in the banding.
@param color The new footer row color; setting to `null` clears the color.
@return This banding, for chaining.*/setFooterRowColorObject(color:SpreadsheetApp.Color):SpreadsheetApp.Banding;
/**Sets the color of the header column.
@param color The color code in CSS notation (such as `'#ffffff'` or `'white'`), or
    `null` to clear the color.
@return This banding, for chaining.*/setHeaderColumnColor(color:string):SpreadsheetApp.Banding;
/**Sets the color of the header column.
@param color The new header column color; setting to `null` clears the color.
@return This banding, for chaining.*/setHeaderColumnColorObject(color:SpreadsheetApp.Color):SpreadsheetApp.Banding;
/**Sets the color of the header row.
@param color The color code in CSS notation (such as `'#ffffff'` or `'white'`), or
    `null` to clear the color.
@return This banding, for chaining.*/setHeaderRowColor(color:string):SpreadsheetApp.Banding;
/**Sets the color of the header row.
@param color The new header row color; setting to `null` clears the color.
@return This banding, for chaining.*/setHeaderRowColorObject(color:SpreadsheetApp.Color):SpreadsheetApp.Banding;
/**Sets the range for this banding.
@param range The new range for this banding.
@return This banding, for chaining.*/setRange(range:SpreadsheetApp.Range):SpreadsheetApp.Banding;
/**Sets the second column color that is alternating.
@param color The color code in CSS notation (such as `'#ffffff'` or `'white'`), or
    `null` to clear the color.
@return This banding, for chaining.*/setSecondColumnColor(color:string):SpreadsheetApp.Banding;
/**Sets the second alternating column color in the banding.
@param color The new second alternating column color in the banding; setting to `null`
    clears the color.
@return This banding, for chaining.*/setSecondColumnColorObject(color:SpreadsheetApp.Color):SpreadsheetApp.Banding;
/**Sets the second row color that is alternating.
@param color The color code in CSS notation (such as `'#ffffff'` or `'white'`), or
    `null` to clear the color.
@return This banding, for chaining.*/setSecondRowColor(color:string):SpreadsheetApp.Banding;
/**Sets the second alternating color in the banding.
@param color The new second alternating color in the banding; setting to `null` clears
    the color.
@return This banding, for chaining.*/setSecondRowColorObject(color:SpreadsheetApp.Color):SpreadsheetApp.Banding;}interface AutoFillSeries{}interface _AutoFillSeries{
/**Auto-filling with this setting results in the empty cells in the expanded range being filled
with copies of the existing values.*/ALTERNATE_SERIES:AutoFillSeries;
/**Default. Auto-filling with this setting results in the empty cells in the expanded range being
filled with increments of the existing values.*/DEFAULT_SERIES:AutoFillSeries;}}const SpreadsheetApp:SpreadsheetApp;