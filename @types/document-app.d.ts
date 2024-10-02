interface DocumentApp {
  /**The [`Attribute`](https://developers.google.com/apps-script/reference/document/attribute.html) enumeration.*/ Attribute: DocumentApp._Attribute;
  /**The [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html) enumeration.*/ ElementType: DocumentApp._ElementType;
  /**The ~~[`FontFamily`](https://developers.google.com/apps-script/reference/document/font-family.html)~~ enumeration.*/ FontFamily: DocumentApp._FontFamily;
  /**The [`GlyphType`](https://developers.google.com/apps-script/reference/document/glyph-type.html) enumeration.*/ GlyphType: DocumentApp._GlyphType;
  /**The [`HorizontalAlignment`](https://developers.google.com/apps-script/reference/document/horizontal-alignment.html) enumeration.*/ HorizontalAlignment: DocumentApp._HorizontalAlignment;
  /**The [`ParagraphHeading`](https://developers.google.com/apps-script/reference/document/paragraph-heading.html) enumeration.*/ ParagraphHeading: DocumentApp._ParagraphHeading;
  /**The [`PositionedLayout`](https://developers.google.com/apps-script/reference/document/positioned-layout.html) enumeration.*/ PositionedLayout: DocumentApp._PositionedLayout;
  /**The [`TextAlignment`](https://developers.google.com/apps-script/reference/document/text-alignment.html) enumeration.*/ TextAlignment: DocumentApp._TextAlignment;
  /**The [`VerticalAlignment`](https://developers.google.com/apps-script/reference/document/vertical-alignment.html) enumeration.*/ VerticalAlignment: DocumentApp._VerticalAlignment;
  /**The [`TabType`](https://developers.google.com/apps-script/reference/document/tab-type.html) enumeration.*/ TabType: DocumentApp._TabType;
  /**Creates and returns a new document.

```
// Create and open a new document.
var doc = DocumentApp.create('Document Name');
```
@param name The new document's name.
@return The new document instance.*/ create(name: string): DocumentApp.Document;
  /**Returns the document to which the script is [container-bound](/apps-script/scripts_containers). To interact with document to which
the script is not container-bound, use [`openById(id)`](https://developers.google.com/apps-script/reference/document/document-app.html#openById(String)) or [`openByUrl(url)`](https://developers.google.com/apps-script/reference/document/document-app.html#openByUrl(String))
instead.

```
// Get the document to which this script is bound.
var doc = DocumentApp.getActiveDocument();
```
@return the document instance*/ getActiveDocument(): DocumentApp.Document;
  /**Returns an instance of the document's user-interface environment that allows the script to add
features like menus, dialogs, and sidebars. A script can only interact with the UI for the
current instance of an open document, and only if the script is [bound](/apps-script/scripts_containers) to the document. For more information, see the
guides to [menus](/apps-script/guides/menus) and [dialogs and sidebars](/apps-script/guides/dialogs).

```
// Add a custom menu to the active document, including a separator and a sub-menu.
function onOpen(e) {
  DocumentApp.getUi()
      .createMenu('My Menu')
      .addItem('My menu item', 'myFunction')
      .addSeparator()
      .addSubMenu(DocumentApp.getUi().createMenu('My sub-menu')
          .addItem('One sub-menu item', 'mySecondFunction')
          .addItem('Another sub-menu item', 'myThirdFunction'))
      .addToUi();
}
```
@return an instance of this document's user-interface environment*/ getUi(): Ui;
  /**Returns the document with the specified ID. If the script is container-bound to the document,
use [`getActiveDocument()`](https://developers.google.com/apps-script/reference/document/document-app.html#getActiveDocument()) instead.

```
// Open a document by ID.
// TODO(developer): Replace the ID with your own.
var doc = DocumentApp.openById('DOCUMENT_ID');
```
@param id The ID of the document to open.
@return The document instance.*/ openById(id: string): DocumentApp.Document;
  /**Opens and returns the document with the specified URL. If the script is container-bound to the
document, use [`getActiveDocument()`](https://developers.google.com/apps-script/reference/document/document-app.html#getActiveDocument()) instead.

```
// Open a document by URL.
var doc = DocumentApp.openByUrl(
    'https://docs.google.com/document/d/1234567890abcdefghijklmnopqrstuvwxyz_a1b2c3/edit');
```
@param url the URL of the document to open
@return the document instance*/ openByUrl(url: string): DocumentApp.Document;
}
module DocumentApp {
  interface VerticalAlignment {}
  interface _VerticalAlignment {
    /**The bottom-alignment option.*/ BOTTOM: VerticalAlignment;
    /**The center-alignment option.*/ CENTER: VerticalAlignment;
    /**The top-alignment option.*/ TOP: VerticalAlignment;
  }
  interface UnsupportedElement {
    /**Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a
parent.
@return The new copy.*/ copy(): DocumentApp.UnsupportedElement;
    /**Retrieves the element's attributes.

The result is an object containing a property for each valid element attribute where each
property name corresponds to an item in the `DocumentApp.Attribute` enumeration.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Append a styled paragraph.
var par = body.appendParagraph('A bold, italicized paragraph.');
par.setBold(true);
par.setItalic(true);

// Retrieve the paragraph's attributes.
var atts = par.getAttributes();

// Log the paragraph attributes.
for (var att in atts) {
  Logger.log(att + ":" + atts[att]);
}
```
@return The element's attributes.*/ getAttributes(): Object;
    /**Retrieves the element's next sibling element.

The next sibling has the same parent and follows the current element.
@return The next sibling element.*/ getNextSibling(): DocumentApp.Element;
    /**Retrieves the element's parent element.

The parent element contains the current element.
@return The parent element.*/ getParent(): DocumentApp.ContainerElement;
    /**Retrieves the element's previous sibling element.

The previous sibling has the same parent and precedes the current element.
@return The previous sibling element.*/ getPreviousSibling(): DocumentApp.Element;
    /**Retrieves the element's [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html).

Use `getType()` to determine the exact type of a given element.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Obtain the first element in the active tab's body.

var firstChild = body.getChild(0);

// Use getType() to determine the element's type.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  Logger.log('The first element is a paragraph.');
} else {
  Logger.log('The first element is not a paragraph.');
}
```
@return The element type.*/ getType(): DocumentApp.ElementType;
    /**Determines whether the element is at the end of the [`Document`](https://developers.google.com/apps-script/reference/document/document.html).
@return Whether the element is at the end of the tab.*/ isAtDocumentEnd(): boolean;
    /**Merges the element with the preceding sibling of the same type.

Only elements of the same [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html) can be merged. Any child elements contained in
the current element are moved to the preceding sibling element.

The current element is removed from the document.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Example 1: Merge paragraphs
// Append two paragraphs to the document's active tab.
var par1 = body.appendParagraph('Paragraph 1.');
var par2 = body.appendParagraph('Paragraph 2.');
// Merge the newly added paragraphs into a single paragraph.
par2.merge();

// Example 2: Merge table cells
// Create a two-dimensional array containing the table's cell contents.
var cells = [
['Row 1, Cell 1', 'Row 1, Cell 2'],
['Row 2, Cell 1', 'Row 2, Cell 2']
];
// Build a table from the array.
var table = body.appendTable(cells);
// Get the first row in the table.
 var row = table.getRow(0);
// Get the two cells in this row.
var cell1 = row.getCell(0);
var cell2 = row.getCell(1);
// Merge the current cell into its preceding sibling element.
var merged = cell2.merge();
```
@return The merged element.*/ merge(): DocumentApp.UnsupportedElement;
    /**Removes the element from its parent.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab()
var body = documentTab.getBody();

// Remove all images in the active tab's body.
var imgs = body.getImages();
for (var i = 0; i < imgs.length; i++) {
  imgs[i].removeFromParent();
}
```
@return The removed element.*/ removeFromParent(): DocumentApp.UnsupportedElement;
    /**Sets the element's attributes.

The specified attributes parameter must be an object where each property name is an item in
the `DocumentApp.Attribute` enumeration and each property value is the new value to be
applied.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Define a custom paragraph style.
var style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.RIGHT;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
style[DocumentApp.Attribute.FONT_SIZE] = 18;
style[DocumentApp.Attribute.BOLD] = true;

// Append a plain paragraph.
var par = body.appendParagraph('A paragraph with custom style.');

// Apply the custom style.
par.setAttributes(style);
```
@param attributes The element's attributes.
@return The current element.*/ setAttributes(
      attributes: Object,
    ): DocumentApp.UnsupportedElement;
  }
  interface TextAlignment {}
  interface _TextAlignment {
    /**The normal text alignment.*/ NORMAL: TextAlignment;
    /**The subscript text alignment.*/ SUBSCRIPT: TextAlignment;
    /**The superscript text alignment.*/ SUPERSCRIPT: TextAlignment;
  }
  interface Text {
    /**Adds the specified text to the end of this text region.

```
// Opens the Docs file by its URL. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the URL with your own.
const doc = DocumentApp.openByUrl('https://docs.google.com/document/d/DOCUMENT_ID/edit');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Adds the text, 'Sample body text,' to the end of the tab body.
const text = body.editAsText().appendText('Sample body text');
```
@param text The text to append.
@return The current element.*/ appendText(text: string): DocumentApp.Text;
    /**Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a
parent.
@return The new copy.*/ copy(): DocumentApp.Text;
    /**Deletes a range of text.

```
// Opens the Docs file by its URL. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the URL with your own.
const doc = DocumentApp.openByUrl('https://docs.google.com/document/d/DOCUMENT_ID/edit');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Deletes the first 10 characters in the body.
 const text = body.editAsText().deleteText(0, 9);
```
@param startOffset The character offset of the first character to delete.
@param endOffsetInclusive The character offset of the last character to delete.
@return The current element.*/ deleteText(
      startOffset: Integer,
      endOffsetInclusive: Integer,
    ): DocumentApp.Text;
    /**Obtains a [`Text`](https://developers.google.com/apps-script/reference/document/text.html) version of the current element, for editing.

Use `editAsText` for manipulating the elements contents as rich text. The `editAsText` mode ignores non-text elements (such as [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) and [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html)).

Child elements fully contained within a deleted text range are removed from the element.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Insert two paragraphs separated by a paragraph containing an
// horizontal rule.
body.insertParagraph(0, "An editAsText sample.");
body.insertHorizontalRule(0);
body.insertParagraph(0, "An example.");

// Delete " sample.

 An" removing the horizontal rule in the process.
body.editAsText().deleteText(14, 25);
```
@return a text version of the current element*/ editAsText(): DocumentApp.Text;
    /**Searches the contents of the element for the specified text pattern using regular expressions.

A subset of the JavaScript regular expression features are not fully supported, such as
capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block
contained in the current element.
@param searchPattern the pattern to search for
@return a search result indicating the position of the search text, or null if there is no
    match*/ findText(searchPattern: string): DocumentApp.RangeElement;
    /**Searches the contents of the element for the specified text pattern, starting from a given
search result.

A subset of the JavaScript regular expression features are not fully supported, such as
capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block
contained in the current element.
@param searchPattern the pattern to search for
@param from the search result to search from
@return a search result indicating the next position of the search text, or null if there is no
    match*/ findText(
      searchPattern: string,
      from: DocumentApp.RangeElement,
    ): DocumentApp.RangeElement;
    /**Retrieves the element's attributes.

The result is an object containing a property for each valid element attribute where each
property name corresponds to an item in the `DocumentApp.Attribute` enumeration.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Append a styled paragraph.
var par = body.appendParagraph('A bold, italicized paragraph.');
par.setBold(true);
par.setItalic(true);

// Retrieve the paragraph's attributes.
var atts = par.getAttributes();

// Log the paragraph attributes.
for (var att in atts) {
  Logger.log(att + ":" + atts[att]);
}
```
@return The element's attributes.*/ getAttributes(): Object;
    /**Retrieves the attributes at the specified character offset.

The result is an object containing a property for each valid text attribute where each
property name corresponds to an item in the `DocumentApp.Attribute` enumeration.

```
// Opens the Docs file by its URL. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the URL with your own.
const doc = DocumentApp.openByUrl('https://docs.google.com/document/d/DOCUMENT_ID/edit');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Declares style attributes.
const style = {}
style[DocumentApp.Attribute.BOLD] = true;
style[DocumentApp.Attribute.ITALIC] = true;
style[DocumentApp.Attribute.FONT_SIZE] = 29;

// Sets the style attributes to the tab's body.
const text = body.editAsText();
text.setAttributes(style);

// Gets the style attributes applied to the eleventh character in the
// body and logs them to the console.
const attributes = text.getAttributes(10);
console.log(attributes);
```
@param offset The character offset.
@return The element's attributes.*/ getAttributes(offset: Integer): Object;
    /**Retrieves the background color setting.
@return the background color, formatted in CSS notation (like `'#ffffff'`), or null
    if the element contains multiple values for this attribute*/ getBackgroundColor(): string;
    /**Retrieves the background color at the specified character offset.

```
// Opens the Docs file by its URL. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the URL with your own.
const doc = DocumentApp.openByUrl('https://docs.google.com/document/d/DOCUMENT_ID');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Sets the background color of the first 3 characters in the body.
const text = body.editAsText().setBackgroundColor(0, 2, '#FFC0CB');

// Gets the background color of the first character in the body.
const backgroundColor = text.getBackgroundColor(0);

// Logs the background color to the console.
console.log(backgroundColor);
```
@param offset The character offset.
@return The background color, formatted in CSS notation (like `'#ffffff'`).*/ getBackgroundColor(
      offset: Integer,
    ): string;
    /**Retrieves the font family setting. The name can be any font from the Font menu in Docs or [Google Fonts](https://www.google.com/fonts), and is case-sensitive. The methods `getFontFamily()` and [`setFontFamily(fontFamilyName)`](https://developers.google.com/apps-script/reference/document/text.html#setFontFamily(String)) now use string names for fonts instead of
the ~~[`FontFamily`](https://developers.google.com/apps-script/reference/document/font-family.html)~~ enum. Although this enum is
deprecated, it will remain available for compatibility with older scripts.
@return the font family, or null if the element contains multiple values for this attribute*/ getFontFamily(): string;
    /**Retrieves the font family at the specified character offset. The name can be any font from the
Font menu in Docs or [Google Fonts](https://www.google.com/fonts), and is
case-sensitive. The methods `getFontFamily()` and `setFontFamily(fontFamilyName)`
now use string names for fonts instead of the ~~[`FontFamily`](https://developers.google.com/apps-script/reference/document/font-family.html)~~ enum. Although this enum is
deprecated, it will remain available for compatibility with older scripts.

```
// Opens the Docs file by its URL. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the URL with your own.
const doc = DocumentApp.openByUrl('https://docs.google.com/document/d/DOCUMENT_ID/edit');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Sets the font of the first 16 characters to Impact.
const text = body.editAsText().setFontFamily(0, 15, 'Impact');

// Gets the font family of the 16th character in the tab body.
const fontFamily = text.getFontFamily(15);

// Logs the font family to the console.
console.log(fontFamily);
```
@param offset The character offset.
@return The font family.*/ getFontFamily(offset: Integer): string;
    /**Retrieves the font size setting.
@return the font size, or null if the element contains multiple values for this attribute*/ getFontSize(): number;
    /**Retrieves the font size at the specified character offset.

```
// Opens the Docs file by its URL. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the URL with your own.
const doc = DocumentApp.openByUrl('https://docs.google.com/document/d/DOCUMENT_ID/edit');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Sets the font size of the first 13 characters to 15.
const text = body.editAsText().setFontSize(0, 12, 15);

// Gets the font size of the first character.
const fontSize = text.getFontSize(0);

// Logs the font size to the console.
console.log(fontSize);
```
@param offset The character offset.
@return The font size.*/ getFontSize(offset: Integer): number;
    /**Retrieves the foreground color setting.
@return the foreground color, formatted in CSS notation (like `'#ffffff'`), or null
    if the element contains multiple values for this attribute*/ getForegroundColor(): string;
    /**Retrieves the foreground color at the specified character offset.

```
// Opens the Docs file by its URL. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the URL with your own.
const doc = DocumentApp.openByUrl('https://docs.google.com/document/d/DOCUMENT_ID/edit');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Sets the foreground color of the first 3 characters in the tab body.
const text = body.editAsText().setForegroundColor(0, 2, '#0000FF');

// Gets the foreground color of the first character in the tab body.
const foregroundColor = text.getForegroundColor(0);

// Logs the foreground color to the console.
console.log(foregroundcolor);
```
@param offset The character offset.
@return The foreground color, formatted in CSS notation (like `'#ffffff'`).*/ getForegroundColor(
      offset: Integer,
    ): string;
    /**Retrieves the link url.
@return the link url, or null if the element contains multiple values for this attribute*/ getLinkUrl(): string;
    /**Retrieves the link URL at the specified character offset.

```
// Opens the Docs file by its URL. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the URL with your own.
const doc = DocumentApp.openByUrl('https://docs.google.com/document/d/DOCUMENT_ID/edit');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Applies a link to the first 10 characters in the body.
const text = body.editAsText().setLinkUrl(0, 9, 'https://www.example.com/');

// Gets the URL of the link from the first character.
const link = text.getLinkUrl(0);

// Logs the link URL to the console.
console.log(link);
```
@param offset The character offset.
@return The link URL.*/ getLinkUrl(offset: Integer): string;
    /**Retrieves the element's next sibling element.

The next sibling has the same parent and follows the current element.
@return The next sibling element.*/ getNextSibling(): DocumentApp.Element;
    /**Retrieves the element's parent element.

The parent element contains the current element.
@return The parent element.*/ getParent(): DocumentApp.ContainerElement;
    /**Retrieves the element's previous sibling element.

The previous sibling has the same parent and precedes the current element.
@return The previous sibling element.*/ getPreviousSibling(): DocumentApp.Element;
    /**Retrieves the contents of the element as a text string.
@return the contents of the element as text string*/ getText(): string;
    /**Gets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.
@return the type of text alignment, or `null` if the text contains multiple types of text
    alignments or if the text alignment has never been set*/ getTextAlignment(): DocumentApp.TextAlignment;
    /**Gets the text alignment for a single character. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.

```
// Opens the Docs file by its URL. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the URL with your own.
const doc = DocumentApp.openByUrl('https://docs.google.com/document/d/DOCUMENT_ID/edit');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Sets the text alignment of the tab's body to NORMAL.
const text = body.editAsText().setTextAlignment(DocumentApp.TextAlignment.NORMAL);

// Gets the text alignment of the ninth character.
const alignment = text.getTextAlignment(8);

// Logs the text alignment to the console.
console.log(alignment.toString());
```
@param offset The offset of the character.
@return The type of text alignment, or `null` if the text alignment has never been set.*/ getTextAlignment(
      offset: Integer,
    ): DocumentApp.TextAlignment;
    /**Retrieves the set of text indices that correspond to the start of distinct text formatting
runs.

```
// Opens the Docs file by its URL. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the URL with your own.
const doc = DocumentApp.openByUrl('https://docs.google.com/document/d/DOCUMENT_ID/edit');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Gets the text indices at which text formatting changes.
const indices = body.editAsText().getTextAttributeIndices();

// Logs the indices to the console.
console.log(indices.toString());
```
@return The set of text indices at which text formatting changes.*/ getTextAttributeIndices(): Integer[];
    /**Retrieves the element's [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html).

Use `getType()` to determine the exact type of a given element.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Obtain the first element in the active tab's body.

var firstChild = body.getChild(0);

// Use getType() to determine the element's type.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  Logger.log('The first element is a paragraph.');
} else {
  Logger.log('The first element is not a paragraph.');
}
```
@return The element type.*/ getType(): DocumentApp.ElementType;
    /**Inserts the specified text at the given character offset.

```
// Opens the Docs file by its URL. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the URL with your own.
const doc = DocumentApp.openByUrl('https://docs.google.com/document/d/DOCUMENT_ID/edit');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Inserts the text, 'Sample inserted text', at the start of the body content.
const text = body.editAsText().insertText(0, 'Sample inserted text');
```
@param offset The character offset at which to insert the text.
@param text The text to insert.
@return The current element.*/ insertText(
      offset: Integer,
      text: string,
    ): DocumentApp.Text;
    /**Determines whether the element is at the end of the [`Document`](https://developers.google.com/apps-script/reference/document/document.html).
@return Whether the element is at the end of the tab.*/ isAtDocumentEnd(): boolean;
    /**Retrieves the bold setting.
@return whether the text is bold, or null if the element contains multiple values for this
    attribute*/ isBold(): boolean;
    /**Retrieves the bold setting at the specified character offset.

```
// Opens the Docs file by its URL. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the URL with your own.
const doc = DocumentApp.openByUrl('https://docs.google.com/document/d/DOCUMENT_ID/edit');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Bolds the first 4 characters in the tab body.
const text = body.editAsText().setBold(0, 3, true);

// Gets whether or not the text is bold.
const bold = text.editAsText().isBold(0);

// Logs the text's bold setting to the console
console.log(bold);
```
@param offset The character offset.
@return The bold setting.*/ isBold(offset: Integer): boolean;
    /**Retrieves the italic setting.
@return whether the text is italic, or null if the element contains multiple values for this
    attribute*/ isItalic(): boolean;
    /**Retrieves the italic setting at the specified character offset.

```
// Opens the Docs file by its URL. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the URL with your own.
const doc = DocumentApp.openByUrl('https://docs.google.com/document/d/DOCUMENT_ID/edit');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Sets the first 13 characters of the tab body to italic.
const text = body.editAsText().setItalic(0, 12, true);

// Gets whether the fifth character in the tab body is set to
// italic and logs it to the console.
const italic = text.isItalic(4);
console.log(italic);
```
@param offset The character offset.
@return The italic setting.*/ isItalic(offset: Integer): boolean;
    /**Retrieves the strikethrough setting.
@return whether the text is strikethrough, or null if the element contains multiple values for
    this attribute*/ isStrikethrough(): boolean;
    /**Retrieves the strikethrough setting at the specified character offset.

```
// Opens the Docs file by its URL. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the URL with your own.
const doc = DocumentApp.openByUrl('https://docs.google.com/document/d/DOCUMENT_ID/edit');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Sets the first 17 characters of the tab body to strikethrough.
const text = body.editAsText().setStrikethrough(0, 16, true);

// Gets whether the first character in the tab body is set to
// strikethrough and logs it to the console.
const strikethrough = text.isStrikethrough(0);
console.log(strikethrough);
```
@param offset The character offset.
@return The strikethrough setting.*/ isStrikethrough(offset: Integer): boolean;
    /**Retrieves the underline setting.
@return whether the text is underlined, or null if the element contains multiple values for
    this attribute*/ isUnderline(): boolean;
    /**Retrieves the underline setting at the specified character offset.

```
// Opens the Docs file by its URL. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the URL with your own.
const doc = DocumentApp.openByUrl('https://docs.google.com/document/d/DOCUMENT_ID/edit');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Sets the first 13 characters of the tab body to underline.
const text = body.editAsText().setUnderline(0, 12, false);

// Gets whether the first character in the tab body is set to
// underline and logs it to the console
const underline = text.editAsText().isUnderline(0);
console.log(underline);
```
@param offset The character offset.
@return The underline setting.*/ isUnderline(offset: Integer): boolean;
    /**Merges the element with the preceding sibling of the same type.

Only elements of the same [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html) can be merged. Any child elements contained in
the current element are moved to the preceding sibling element.

The current element is removed from the document.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Example 1: Merge paragraphs
// Append two paragraphs to the document's active tab.
var par1 = body.appendParagraph('Paragraph 1.');
var par2 = body.appendParagraph('Paragraph 2.');
// Merge the newly added paragraphs into a single paragraph.
par2.merge();

// Example 2: Merge table cells
// Create a two-dimensional array containing the table's cell contents.
var cells = [
['Row 1, Cell 1', 'Row 1, Cell 2'],
['Row 2, Cell 1', 'Row 2, Cell 2']
];
// Build a table from the array.
var table = body.appendTable(cells);
// Get the first row in the table.
 var row = table.getRow(0);
// Get the two cells in this row.
var cell1 = row.getCell(0);
var cell2 = row.getCell(1);
// Merge the current cell into its preceding sibling element.
var merged = cell2.merge();
```
@return The merged element.*/ merge(): DocumentApp.Text;
    /**Removes the element from its parent.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab()
var body = documentTab.getBody();

// Remove all images in the active tab's body.
var imgs = body.getImages();
for (var i = 0; i < imgs.length; i++) {
  imgs[i].removeFromParent();
}
```
@return The removed element.*/ removeFromParent(): DocumentApp.Text;
    /**Replaces all occurrences of a given text pattern with a given replacement string, using regular
expressions.

The search pattern is passed as a string, not a JavaScript regular expression object.
Because of this you'll need to escape any backslashes in the pattern.

This methods uses Google's [RE2](https://github.com/google/re2) regular
expression library, which limits the [supported syntax](https://github.com/google/re2/wiki/Syntax).

The provided regular expression pattern is independently matched against each text block
contained in the current element.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Clear the text surrounding "Apps Script", with or without text.
body.replaceText("^.*Apps ?Script.*$", "Apps Script");
```
@param searchPattern the regex pattern to search for
@param replacement the text to use as replacement
@return the current element*/ replaceText(
      searchPattern: string,
      replacement: string,
    ): DocumentApp.Element;
    /**Applies the specified attributes to the given character range.

The specified attributes parameter must be an object where each property name is an item in
the `DocumentApp.Attribute` enumeration and each property value is the new value to be
applied.

```
// Opens the Docs file by its URL. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the URL with your own.
const doc = DocumentApp.openByUrl('https://docs.google.com/document/d/DOCUMENT_ID/edit');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Declares style attributes for font size and font family.
const style = {}
style[DocumentApp.Attribute.FONT_SIZE] = 20 ;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Impact';

// Sets the style attributes to the first 9 characters in the tab's body.
const text = body.setAttributes(0, 8, style);
```
@param startOffset The text range's start offset.
@param endOffsetInclusive The text range's end offset.
@param attributes The element's attributes.
@return The current element.*/ setAttributes(
      startOffset: Integer,
      endOffsetInclusive: Integer,
      attributes: Object,
    ): DocumentApp.Text;
    /**Sets the element's attributes.

The specified attributes parameter must be an object where each property name is an item in
the `DocumentApp.Attribute` enumeration and each property value is the new value to be
applied.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Define a custom paragraph style.
var style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.RIGHT;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
style[DocumentApp.Attribute.FONT_SIZE] = 18;
style[DocumentApp.Attribute.BOLD] = true;

// Append a plain paragraph.
var par = body.appendParagraph('A paragraph with custom style.');

// Apply the custom style.
par.setAttributes(style);
```
@param attributes The element's attributes.
@return The current element.*/ setAttributes(
      attributes: Object,
    ): DocumentApp.Text;
    /**Sets the background color for the specified character range.

```
// Opens the Docs file by its URL. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the URL with your own.
const doc = DocumentApp.openByUrl('https://docs.google.com/document/d/DOCUMENT_ID/edit');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Sets the background color of the first 3 characters in the
// tab body to hex color #0000FF.
const text = body.editAsText().setBackgroundColor(0, 2, '#0000FF');
```
@param startOffset The text range's start offset.
@param endOffsetInclusive The text range's end offset.
@param color The background color, formatted in CSS notation (like `'#ffffff'`).
@return The current element.*/ setBackgroundColor(
      startOffset: Integer,
      endOffsetInclusive: Integer,
      color: string,
    ): DocumentApp.Text;
    /**Sets the background color.
@param color the background color, formatted in CSS notation (like `'#ffffff'`)
@return the current element*/ setBackgroundColor(
      color: string,
    ): DocumentApp.Text;
    /**Sets the bold setting.
@param bold the bold setting
@return the current element*/ setBold(bold: boolean): DocumentApp.Text;
    /**Sets the bold setting for the specified character range.

```
// Opens the Docs file by its URL. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the URL with your own.
const doc = DocumentApp.openByUrl('https://docs.google.com/document/d/DOCUMENT_ID/edit');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Sets the first 11 characters in the tab's body to bold.
const text = body.editAsText().setBold(0, 10, true);
```
@param startOffset The text range's start offset.
@param endOffsetInclusive The text range's end offset.
@param bold The bold setting.
@return The current element.*/ setBold(
      startOffset: Integer,
      endOffsetInclusive: Integer,
      bold: boolean,
    ): DocumentApp.Text;
    /**Sets the font family for the specified character range. The name can be any font from the Font
menu in Docs or [Google Fonts](https://www.google.com/fonts), and is case-sensitive.
Unrecognized font names will render as Arial. The methods [`getFontFamily(offset)`](https://developers.google.com/apps-script/reference/document/text.html#getFontFamily(Integer)) and
`setFontFamily(fontFamilyName)` now use string names for fonts instead of the ~~[`FontFamily`](https://developers.google.com/apps-script/reference/document/font-family.html)~~ enum. Although this enum is
deprecated, it will remain available for compatibility with older scripts.

```
// Opens the Docs file by its URL. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the URL with your own.
const doc = DocumentApp.openByUrl('https://docs.google.com/document/d/DOCUMENT_ID/edit');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Sets the font of the first 4 characters in the tab's body to Roboto.
const text = body.editAsText().setFontFamily(0, 3, 'Roboto');
```
@param startOffset The text range's start offset.
@param endOffsetInclusive The text range's end offset.
@param fontFamilyName The name of the font family, from the Font menu in Docs or Google Fonts.
@return The current element.*/ setFontFamily(
      startOffset: Integer,
      endOffsetInclusive: Integer,
      fontFamilyName: string,
    ): DocumentApp.Text;
    /**Sets the font family. The name can be any font from the Font menu in Docs or [Google Fonts](https://www.google.com/fonts), and is case-sensitive. Unrecognized font
names will render as Arial. The methods [`getFontFamily()`](https://developers.google.com/apps-script/reference/document/text.html#getFontFamily()) and `setFontFamily(fontFamilyName)` now use string names for fonts instead of the ~~[`FontFamily`](https://developers.google.com/apps-script/reference/document/font-family.html)~~ enum. Although this enum is
deprecated, it will remain available for compatibility with older scripts.
@param fontFamilyName the name of the font family, from the Font menu in Docs or Google Fonts
@return the current element*/ setFontFamily(
      fontFamilyName: string,
    ): DocumentApp.Text;
    /**Sets the font size for the specified character range.

```
// Opens the Docs file by its URL. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the URL with your own.
const doc = DocumentApp.openByUrl('https://docs.google.com/document/d/DOCUMENT_ID/edit');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Sets the size of the first 11 characters in the tab's body to 12.
const text = body.editAsText().setFontSize(0, 10, 12);
```
@param startOffset The text range's start offset.
@param endOffsetInclusive The text range's end offset.
@param size The font size.
@return The current element.*/ setFontSize(
      startOffset: Integer,
      endOffsetInclusive: Integer,
      size: number,
    ): DocumentApp.Text;
    /**Sets the font size.
@param size the font size
@return the current element*/ setFontSize(size: number): DocumentApp.Text;
    /**Sets the foreground color for the specified character range.

```
// Opens the Docs file by its URL. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the URL with your own.
const doc = DocumentApp.openByUrl('https://docs.google.com/document/d/DOCUMENT_ID/edit');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Sets the foreground color of the first 2 characters in the
// tab's body to hex color #FF0000.
const text = body.editAsText().setForegroundColor(0, 1, '#FF0000');

// Gets the foreground color for the second character in the tab's body.
const foregroundColor = text.getForegroundColor(1);

//  Logs the foreground color to the console.
console.log(foregroundColor);
```
@param startOffset The text range's start offset.
@param endOffsetInclusive The text range's end offset.
@param color The foreground color, formatted in CSS notation (like `'#ffffff'`).
@return The current element.*/ setForegroundColor(
      startOffset: Integer,
      endOffsetInclusive: Integer,
      color: string,
    ): DocumentApp.Text;
    /**Sets the foreground color.
@param color the foreground color, formatted in CSS notation (like `'#ffffff'`)
@return the current element*/ setForegroundColor(
      color: string,
    ): DocumentApp.Text;
    /**Sets the italic setting.
@param italic the italic setting
@return the current element*/ setItalic(italic: boolean): DocumentApp.Text;
    /**Sets the italic setting for the specified character range.

```
// Opens the Docs file by its URL. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the URL with your own.
const doc = DocumentApp.openByUrl('https://docs.google.com/document/d/DOCUMENT_ID/edit');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Sets the first 11 characters in the tab's body to italic.
const text = body.editAsText().setItalic(0, 10, true);
```
@param startOffset The text range's start offset.
@param endOffsetInclusive The text range's end offset.
@param italic The italic setting.
@return The current element.*/ setItalic(
      startOffset: Integer,
      endOffsetInclusive: Integer,
      italic: boolean,
    ): DocumentApp.Text;
    /**Sets the link URL for the specified character range.

```
// Opens the Docs file by its URL. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the URL with your own.
const doc = DocumentApp.openByUrl('https://docs.google.com/document/d/DOCUMENT_ID/edit');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Applies a link to the first 11 characters in the body.
const text = body.editAsText().setLinkUrl(0, 10, 'https://example.com');
```
@param startOffset The text range's start offset.
@param endOffsetInclusive The text range's end offset.
@param url The link URL.
@return The current element.*/ setLinkUrl(
      startOffset: Integer,
      endOffsetInclusive: Integer,
      url: string,
    ): DocumentApp.Text;
    /**Sets the link url.
@param url the link url
@return the current element*/ setLinkUrl(url: string): DocumentApp.Text;
    /**Sets the strikethrough setting.
@param strikethrough the strikethrough setting
@return the current element*/ setStrikethrough(
      strikethrough: boolean,
    ): DocumentApp.Text;
    /**Sets the strikethrough setting for the specified character range.

```
// Opens the Docs file by its URL. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the URL with your own.
const doc = DocumentApp.openByUrl('https://docs.google.com/document/d/DOCUMENT_ID/edit');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Sets the first 11 characters in the tab's body to strikethrough.
const text = body.editAsText().setStrikethrough(0, 10, true);
```
@param startOffset The text range's start offset.
@param endOffsetInclusive The text range's end offset.
@param strikethrough The strikethrough setting.
@return The current element.*/ setStrikethrough(
      startOffset: Integer,
      endOffsetInclusive: Integer,
      strikethrough: boolean,
    ): DocumentApp.Text;
    /**Sets the text contents.

```
// Opens the Docs file by its URL. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the URL with your own.
const doc = DocumentApp.openByUrl('https://docs.google.com/document/d/DOCUMENT_ID/edit');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Replaces the contents of the body with the text, 'New body text.'
const text = body.editAsText().setText('New body text.');
```
@param text The new text contents.
@return The current element.*/ setText(text: string): DocumentApp.Text;
    /**Sets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.

```
// Make the entire first paragraph in the active tab be superscript.
var documentTab = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
var text = documentTab.getBody().getParagraphs()[0].editAsText();
text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
```
@param textAlignment the type of text alignment to apply
@return the current element*/ setTextAlignment(
      textAlignment: DocumentApp.TextAlignment,
    ): DocumentApp.Text;
    /**Sets the text alignment for a given character range. The available types of alignment are
`DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and
`DocumentApp.TextAlignment.SUPERSCRIPT`.

```
// Make the first character in the first paragraph of the active tab be superscript.
var documentTab = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
var text = documentTab.getBody().getParagraphs()[0].editAsText();
text.setTextAlignment(0, 0, DocumentApp.TextAlignment.SUPERSCRIPT);
```
@param startOffset The start offset of the character range.
@param endOffsetInclusive The end offset of the character range (inclusive).
@param textAlignment The type of text alignment to apply.
@return The current element.*/ setTextAlignment(
      startOffset: Integer,
      endOffsetInclusive: Integer,
      textAlignment: DocumentApp.TextAlignment,
    ): DocumentApp.Text;
    /**Sets the underline setting.
@param underline the underline setting
@return the current element*/ setUnderline(
      underline: boolean,
    ): DocumentApp.Text;
    /**Sets the underline setting for the specified character range.

```
// Opens the Docs file by its URL. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the URL with your own.
const doc = DocumentApp.openByUrl('https://docs.google.com/document/d/DOCUMENT_ID/edit');

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Sets the first 11 characters in the tab's body to underline.
const text = body.editAsText().setUnderline(0, 10, true);
```
@param startOffset The text range's start offset.
@param endOffsetInclusive The text range's end offset.
@param underline The underline setting.
@return The current element.*/ setUnderline(
      startOffset: Integer,
      endOffsetInclusive: Integer,
      underline: boolean,
    ): DocumentApp.Text;
  }
  interface TableRow {
    /**Creates and appends a new [`TableCell`](https://developers.google.com/apps-script/reference/document/table-cell.html).
@return the new table cell*/ appendTableCell(): DocumentApp.TableCell;
    /**Appends the given [`TableCell`](https://developers.google.com/apps-script/reference/document/table-cell.html).
@param tableCell the table cell to append
@return the appended table cell*/ appendTableCell(
      tableCell: DocumentApp.TableCell,
    ): DocumentApp.TableCell;
    /**Appends the given [`TableCell`](https://developers.google.com/apps-script/reference/document/table-cell.html) containing the specified text.
@param textContents the cell's text contents
@return the appended table cell element*/ appendTableCell(
      textContents: string,
    ): DocumentApp.TableCell;
    /**Clears the contents of the element.
@return The current element.*/ clear(): DocumentApp.TableRow;
    /**Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a
parent.
@return The new copy.*/ copy(): DocumentApp.TableRow;
    /**Obtains a [`Text`](https://developers.google.com/apps-script/reference/document/text.html) version of the current element, for editing.

Use `editAsText` for manipulating the elements contents as rich text. The `editAsText` mode ignores non-text elements (such as [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) and [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html)).

Child elements fully contained within a deleted text range are removed from the element.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Insert two paragraphs separated by a paragraph containing an
// horizontal rule.
body.insertParagraph(0, "An editAsText sample.");
body.insertHorizontalRule(0);
body.insertParagraph(0, "An example.");

// Delete " sample.

 An" removing the horizontal rule in the process.
body.editAsText().deleteText(14, 25);
```
@return a text version of the current element*/ editAsText(): DocumentApp.Text;
    /**Searches the contents of the element for a descendant of the specified type.
@param elementType The type of element to search for.
@return A search result indicating the position of the search element.*/ findElement(
      elementType: DocumentApp.ElementType,
    ): DocumentApp.RangeElement;
    /**Searches the contents of the element for a descendant of the specified type, starting from the
specified [`RangeElement`](https://developers.google.com/apps-script/reference/document/range-element.html).

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Define the search parameters.
var searchType = DocumentApp.ElementType.PARAGRAPH;
var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
var searchResult = null;

// Search until the paragraph is found.
while (searchResult = body.findElement(searchType, searchResult)) {
  var par = searchResult.getElement().asParagraph();
  if (par.getHeading() == searchHeading) {
    // Found one, update and stop.
    par.setText('This is the first header.');
    return;
  }
}
```
@param elementType The type of element to search for.
@param from The search result to search from.
@return A search result indicating the next position of the search element.*/ findElement(
      elementType: DocumentApp.ElementType,
      from: DocumentApp.RangeElement,
    ): DocumentApp.RangeElement;
    /**Searches the contents of the element for the specified text pattern using regular expressions.

A subset of the JavaScript regular expression features are not fully supported, such as
capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block
contained in the current element.
@param searchPattern the pattern to search for
@return a search result indicating the position of the search text, or null if there is no
    match*/ findText(searchPattern: string): DocumentApp.RangeElement;
    /**Searches the contents of the element for the specified text pattern, starting from a given
search result.

A subset of the JavaScript regular expression features are not fully supported, such as
capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block
contained in the current element.
@param searchPattern the pattern to search for
@param from the search result to search from
@return a search result indicating the next position of the search text, or null if there is no
    match*/ findText(
      searchPattern: string,
      from: DocumentApp.RangeElement,
    ): DocumentApp.RangeElement;
    /**Retrieves the element's attributes.

The result is an object containing a property for each valid element attribute where each
property name corresponds to an item in the `DocumentApp.Attribute` enumeration.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Append a styled paragraph.
var par = body.appendParagraph('A bold, italicized paragraph.');
par.setBold(true);
par.setItalic(true);

// Retrieve the paragraph's attributes.
var atts = par.getAttributes();

// Log the paragraph attributes.
for (var att in atts) {
  Logger.log(att + ":" + atts[att]);
}
```
@return The element's attributes.*/ getAttributes(): Object;
    /**Retrieves the [`TableCell`](https://developers.google.com/apps-script/reference/document/table-cell.html) at the specified cell index.
@param cellIndex the index of the cell to retrieve
@return the table cell*/ getCell(cellIndex: Integer): DocumentApp.TableCell;
    /**Retrieves the child element at the specified child index.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Obtain the first element in the tab.
var firstChild = body.getChild(0);

// If it's a paragraph, set its contents.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  firstChild.asParagraph().setText("This is the first paragraph.");
}
```
@param childIndex The index of the child element to retrieve.
@return The child element at the specified index.*/ getChild(
      childIndex: Integer,
    ): DocumentApp.Element;
    /**Retrieves the child index for the specified child element.
@param child The child element for which to retrieve the index.
@return The child index.*/ getChildIndex(child: DocumentApp.Element): Integer;
    /**Retrieves the link url.
@return the link url, or null if the element contains multiple values for this attribute*/ getLinkUrl(): string;
    /**Retrieves the minimum height, in points.
@return the minimum height, in points*/ getMinimumHeight(): number;
    /**Retrieves the element's next sibling element.

The next sibling has the same parent and follows the current element.
@return The next sibling element.*/ getNextSibling(): DocumentApp.Element;
    /**Retrieves the number of cells in the row.
@return the number of cells*/ getNumCells(): Integer;
    /**Retrieves the number of children.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Log the number of elements in the tab.
Logger.log("There are " + body.getNumChildren() +
    " elements in the tab's body.");
```
@return The number of children.*/ getNumChildren(): Integer;
    /**Retrieves the element's parent element.

The parent element contains the current element.
@return The parent element.*/ getParent(): DocumentApp.ContainerElement;
    /**Retrieves the [`Table`](https://developers.google.com/apps-script/reference/document/table.html) containing the current row.
@return the table containing the current row*/ getParentTable(): DocumentApp.Table;
    /**Retrieves the element's previous sibling element.

The previous sibling has the same parent and precedes the current element.
@return The previous sibling element.*/ getPreviousSibling(): DocumentApp.Element;
    /**Retrieves the contents of the element as a text string.
@return the contents of the element as text string*/ getText(): string;
    /**Gets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.
@return the type of text alignment, or `null` if the text contains multiple types of text
    alignments or if the text alignment has never been set*/ getTextAlignment(): DocumentApp.TextAlignment;
    /**Retrieves the element's [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html).

Use `getType()` to determine the exact type of a given element.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Obtain the first element in the active tab's body.

var firstChild = body.getChild(0);

// Use getType() to determine the element's type.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  Logger.log('The first element is a paragraph.');
} else {
  Logger.log('The first element is not a paragraph.');
}
```
@return The element type.*/ getType(): DocumentApp.ElementType;
    /**Creates and inserts a new [`TableCell`](https://developers.google.com/apps-script/reference/document/table-cell.html) at the specified index.
@param childIndex the index at which to insert the element
@return the new table cell*/ insertTableCell(
      childIndex: Integer,
    ): DocumentApp.TableCell;
    /**Inserts the given [`TableCell`](https://developers.google.com/apps-script/reference/document/table-cell.html) at the specified index.
@param childIndex the index at which to insert the element
@param tableCell the table cell to insert
@return the inserted table cell*/ insertTableCell(
      childIndex: Integer,
      tableCell: DocumentApp.TableCell,
    ): DocumentApp.TableCell;
    /**Inserts the given [`TableCell`](https://developers.google.com/apps-script/reference/document/table-cell.html) at the specified index, containing the given text.
@param childIndex the index at which to insert the element
@param textContents the cell's text contents
@return the inserted table cell*/ insertTableCell(
      childIndex: Integer,
      textContents: string,
    ): DocumentApp.TableCell;
    /**Determines whether the element is at the end of the [`Document`](https://developers.google.com/apps-script/reference/document/document.html).
@return Whether the element is at the end of the tab.*/ isAtDocumentEnd(): boolean;
    /**Merges the element with the preceding sibling of the same type.

Only elements of the same [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html) can be merged. Any child elements contained in
the current element are moved to the preceding sibling element.

The current element is removed from the document.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Example 1: Merge paragraphs
// Append two paragraphs to the document's active tab.
var par1 = body.appendParagraph('Paragraph 1.');
var par2 = body.appendParagraph('Paragraph 2.');
// Merge the newly added paragraphs into a single paragraph.
par2.merge();

// Example 2: Merge table cells
// Create a two-dimensional array containing the table's cell contents.
var cells = [
['Row 1, Cell 1', 'Row 1, Cell 2'],
['Row 2, Cell 1', 'Row 2, Cell 2']
];
// Build a table from the array.
var table = body.appendTable(cells);
// Get the first row in the table.
 var row = table.getRow(0);
// Get the two cells in this row.
var cell1 = row.getCell(0);
var cell2 = row.getCell(1);
// Merge the current cell into its preceding sibling element.
var merged = cell2.merge();
```
@return The merged element.*/ merge(): DocumentApp.TableRow;
    /**Removes the [`TableCell`](https://developers.google.com/apps-script/reference/document/table-cell.html) at the specified cell index.
@param cellIndex the index of the cell to remove
@return the removed cell*/ removeCell(
      cellIndex: Integer,
    ): DocumentApp.TableCell;
    /**Removes the specified child element.
@param child the child element to remove
@return the current element*/ removeChild(
      child: DocumentApp.Element,
    ): DocumentApp.TableRow;
    /**Removes the element from its parent.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab()
var body = documentTab.getBody();

// Remove all images in the active tab's body.
var imgs = body.getImages();
for (var i = 0; i < imgs.length; i++) {
  imgs[i].removeFromParent();
}
```
@return The removed element.*/ removeFromParent(): DocumentApp.TableRow;
    /**Replaces all occurrences of a given text pattern with a given replacement string, using regular
expressions.

The search pattern is passed as a string, not a JavaScript regular expression object.
Because of this you'll need to escape any backslashes in the pattern.

This methods uses Google's [RE2](https://github.com/google/re2) regular
expression library, which limits the [supported syntax](https://github.com/google/re2/wiki/Syntax).

The provided regular expression pattern is independently matched against each text block
contained in the current element.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Clear the text surrounding "Apps Script", with or without text.
body.replaceText("^.*Apps ?Script.*$", "Apps Script");
```
@param searchPattern the regex pattern to search for
@param replacement the text to use as replacement
@return the current element*/ replaceText(
      searchPattern: string,
      replacement: string,
    ): DocumentApp.Element;
    /**Sets the element's attributes.

The specified attributes parameter must be an object where each property name is an item in
the `DocumentApp.Attribute` enumeration and each property value is the new value to be
applied.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Define a custom paragraph style.
var style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.RIGHT;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
style[DocumentApp.Attribute.FONT_SIZE] = 18;
style[DocumentApp.Attribute.BOLD] = true;

// Append a plain paragraph.
var par = body.appendParagraph('A paragraph with custom style.');

// Apply the custom style.
par.setAttributes(style);
```
@param attributes The element's attributes.
@return The current element.*/ setAttributes(
      attributes: Object,
    ): DocumentApp.TableRow;
    /**Sets the link url.
@param url the link url
@return the current element*/ setLinkUrl(url: string): DocumentApp.TableRow;
    /**Sets the minimum height, in points.
@param minHeight the minimum height, in points
@return the current element*/ setMinimumHeight(
      minHeight: number,
    ): DocumentApp.TableRow;
    /**Sets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.

```
// Make the entire first paragraph in the active tab be superscript.
var documentTab = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
var text = documentTab.getBody().getParagraphs()[0].editAsText();
text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
```
@param textAlignment the type of text alignment to apply
@return the current element*/ setTextAlignment(
      textAlignment: DocumentApp.TextAlignment,
    ): DocumentApp.TableRow;
  }
  interface TableOfContents {
    /**Clears the contents of the element.
@return The current element.*/ clear(): DocumentApp.TableOfContents;
    /**Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a
parent.
@return The new copy.*/ copy(): DocumentApp.TableOfContents;
    /**Obtains a [`Text`](https://developers.google.com/apps-script/reference/document/text.html) version of the current element, for editing.

Use `editAsText` for manipulating the elements contents as rich text. The `editAsText` mode ignores non-text elements (such as [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) and [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html)).

Child elements fully contained within a deleted text range are removed from the element.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Insert two paragraphs separated by a paragraph containing an
// horizontal rule.
body.insertParagraph(0, "An editAsText sample.");
body.insertHorizontalRule(0);
body.insertParagraph(0, "An example.");

// Delete " sample.

 An" removing the horizontal rule in the process.
body.editAsText().deleteText(14, 25);
```
@return a text version of the current element*/ editAsText(): DocumentApp.Text;
    /**Searches the contents of the element for a descendant of the specified type.
@param elementType The type of element to search for.
@return A search result indicating the position of the search element.*/ findElement(
      elementType: DocumentApp.ElementType,
    ): DocumentApp.RangeElement;
    /**Searches the contents of the element for a descendant of the specified type, starting from the
specified [`RangeElement`](https://developers.google.com/apps-script/reference/document/range-element.html).

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Define the search parameters.
var searchType = DocumentApp.ElementType.PARAGRAPH;
var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
var searchResult = null;

// Search until the paragraph is found.
while (searchResult = body.findElement(searchType, searchResult)) {
  var par = searchResult.getElement().asParagraph();
  if (par.getHeading() == searchHeading) {
    // Found one, update and stop.
    par.setText('This is the first header.');
    return;
  }
}
```
@param elementType The type of element to search for.
@param from The search result to search from.
@return A search result indicating the next position of the search element.*/ findElement(
      elementType: DocumentApp.ElementType,
      from: DocumentApp.RangeElement,
    ): DocumentApp.RangeElement;
    /**Searches the contents of the element for the specified text pattern using regular expressions.

A subset of the JavaScript regular expression features are not fully supported, such as
capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block
contained in the current element.
@param searchPattern the pattern to search for
@return a search result indicating the position of the search text, or null if there is no
    match*/ findText(searchPattern: string): DocumentApp.RangeElement;
    /**Searches the contents of the element for the specified text pattern, starting from a given
search result.

A subset of the JavaScript regular expression features are not fully supported, such as
capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block
contained in the current element.
@param searchPattern the pattern to search for
@param from the search result to search from
@return a search result indicating the next position of the search text, or null if there is no
    match*/ findText(
      searchPattern: string,
      from: DocumentApp.RangeElement,
    ): DocumentApp.RangeElement;
    /**Retrieves the element's attributes.

The result is an object containing a property for each valid element attribute where each
property name corresponds to an item in the `DocumentApp.Attribute` enumeration.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Append a styled paragraph.
var par = body.appendParagraph('A bold, italicized paragraph.');
par.setBold(true);
par.setItalic(true);

// Retrieve the paragraph's attributes.
var atts = par.getAttributes();

// Log the paragraph attributes.
for (var att in atts) {
  Logger.log(att + ":" + atts[att]);
}
```
@return The element's attributes.*/ getAttributes(): Object;
    /**Retrieves the child element at the specified child index.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Obtain the first element in the tab.
var firstChild = body.getChild(0);

// If it's a paragraph, set its contents.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  firstChild.asParagraph().setText("This is the first paragraph.");
}
```
@param childIndex The index of the child element to retrieve.
@return The child element at the specified index.*/ getChild(
      childIndex: Integer,
    ): DocumentApp.Element;
    /**Retrieves the child index for the specified child element.
@param child The child element for which to retrieve the index.
@return The child index.*/ getChildIndex(child: DocumentApp.Element): Integer;
    /**Retrieves the link url.
@return the link url, or null if the element contains multiple values for this attribute*/ getLinkUrl(): string;
    /**Retrieves the element's next sibling element.

The next sibling has the same parent and follows the current element.
@return The next sibling element.*/ getNextSibling(): DocumentApp.Element;
    /**Retrieves the number of children.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Log the number of elements in the tab.
Logger.log("There are " + body.getNumChildren() +
    " elements in the tab's body.");
```
@return The number of children.*/ getNumChildren(): Integer;
    /**Retrieves the element's parent element.

The parent element contains the current element.
@return The parent element.*/ getParent(): DocumentApp.ContainerElement;
    /**Retrieves the element's previous sibling element.

The previous sibling has the same parent and precedes the current element.
@return The previous sibling element.*/ getPreviousSibling(): DocumentApp.Element;
    /**Retrieves the contents of the element as a text string.
@return the contents of the element as text string*/ getText(): string;
    /**Gets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.
@return the type of text alignment, or `null` if the text contains multiple types of text
    alignments or if the text alignment has never been set*/ getTextAlignment(): DocumentApp.TextAlignment;
    /**Retrieves the element's [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html).

Use `getType()` to determine the exact type of a given element.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Obtain the first element in the active tab's body.

var firstChild = body.getChild(0);

// Use getType() to determine the element's type.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  Logger.log('The first element is a paragraph.');
} else {
  Logger.log('The first element is not a paragraph.');
}
```
@return The element type.*/ getType(): DocumentApp.ElementType;
    /**Determines whether the element is at the end of the [`Document`](https://developers.google.com/apps-script/reference/document/document.html).
@return Whether the element is at the end of the tab.*/ isAtDocumentEnd(): boolean;
    /**Removes the element from its parent.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab()
var body = documentTab.getBody();

// Remove all images in the active tab's body.
var imgs = body.getImages();
for (var i = 0; i < imgs.length; i++) {
  imgs[i].removeFromParent();
}
```
@return The removed element.*/ removeFromParent(): DocumentApp.TableOfContents;
    /**Replaces all occurrences of a given text pattern with a given replacement string, using regular
expressions.

The search pattern is passed as a string, not a JavaScript regular expression object.
Because of this you'll need to escape any backslashes in the pattern.

This methods uses Google's [RE2](https://github.com/google/re2) regular
expression library, which limits the [supported syntax](https://github.com/google/re2/wiki/Syntax).

The provided regular expression pattern is independently matched against each text block
contained in the current element.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Clear the text surrounding "Apps Script", with or without text.
body.replaceText("^.*Apps ?Script.*$", "Apps Script");
```
@param searchPattern the regex pattern to search for
@param replacement the text to use as replacement
@return the current element*/ replaceText(
      searchPattern: string,
      replacement: string,
    ): DocumentApp.Element;
    /**Sets the element's attributes.

The specified attributes parameter must be an object where each property name is an item in
the `DocumentApp.Attribute` enumeration and each property value is the new value to be
applied.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Define a custom paragraph style.
var style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.RIGHT;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
style[DocumentApp.Attribute.FONT_SIZE] = 18;
style[DocumentApp.Attribute.BOLD] = true;

// Append a plain paragraph.
var par = body.appendParagraph('A paragraph with custom style.');

// Apply the custom style.
par.setAttributes(style);
```
@param attributes The element's attributes.
@return The current element.*/ setAttributes(
      attributes: Object,
    ): DocumentApp.TableOfContents;
    /**Sets the link url.
@param url the link url
@return the current element*/ setLinkUrl(
      url: string,
    ): DocumentApp.TableOfContents;
    /**Sets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.

```
// Make the entire first paragraph in the active tab be superscript.
var documentTab = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
var text = documentTab.getBody().getParagraphs()[0].editAsText();
text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
```
@param textAlignment the type of text alignment to apply
@return the current element*/ setTextAlignment(
      textAlignment: DocumentApp.TextAlignment,
    ): DocumentApp.TableOfContents;
  }
  interface TableCell {
    /**Creates and appends a new [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html).

The [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html) will be contained in a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@return the new horizontal rule*/ appendHorizontalRule(): DocumentApp.HorizontalRule;
    /**Creates and appends a new [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) from the specified image blob.

The [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) will be contained in a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@param image the image data
@return the new image*/ appendImage(image: BlobSource): DocumentApp.InlineImage;
    /**Appends the given [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html).

The [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) will be contained in a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@param image the image data
@return the appended image*/ appendImage(
      image: DocumentApp.InlineImage,
    ): DocumentApp.InlineImage;
    /**Appends the given [`ListItem`](https://developers.google.com/apps-script/reference/document/list-item.html).
@param listItem the list item to append
@return the appended list item*/ appendListItem(
      listItem: DocumentApp.ListItem,
    ): DocumentApp.ListItem;
    /**Creates and appends a new [`ListItem`](https://developers.google.com/apps-script/reference/document/list-item.html).
@param text the text contents
@return the new list item*/ appendListItem(text: string): DocumentApp.ListItem;
    /**Appends the given [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@param paragraph the paragraph to append
@return the appended paragraph*/ appendParagraph(
      paragraph: DocumentApp.Paragraph,
    ): DocumentApp.Paragraph;
    /**Creates and appends a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@param text the text contents
@return the new paragraph*/ appendParagraph(
      text: string,
    ): DocumentApp.Paragraph;
    /**Creates and appends a new [`Table`](https://developers.google.com/apps-script/reference/document/table.html).
@return the new table*/ appendTable(): DocumentApp.Table;
    /**Appends the given [`Table`](https://developers.google.com/apps-script/reference/document/table.html).
@param table the table to append
@return the appended table*/ appendTable(
      table: DocumentApp.Table,
    ): DocumentApp.Table;
    /**Appends a new [`Table`](https://developers.google.com/apps-script/reference/document/table.html) containing the specified cells.
@param cells the text contents of the table cells to add to the new table
@return the appended table*/ appendTable(cells: string[][]): DocumentApp.Table;
    /**Clears the contents of the element.
@return The current element.*/ clear(): DocumentApp.TableCell;
    /**Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a
parent.
@return The new copy.*/ copy(): DocumentApp.TableCell;
    /**Obtains a [`Text`](https://developers.google.com/apps-script/reference/document/text.html) version of the current element, for editing.

Use `editAsText` for manipulating the elements contents as rich text. The `editAsText` mode ignores non-text elements (such as [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) and [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html)).

Child elements fully contained within a deleted text range are removed from the element.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Insert two paragraphs separated by a paragraph containing an
// horizontal rule.
body.insertParagraph(0, "An editAsText sample.");
body.insertHorizontalRule(0);
body.insertParagraph(0, "An example.");

// Delete " sample.

 An" removing the horizontal rule in the process.
body.editAsText().deleteText(14, 25);
```
@return a text version of the current element*/ editAsText(): DocumentApp.Text;
    /**Searches the contents of the element for a descendant of the specified type.
@param elementType The type of element to search for.
@return A search result indicating the position of the search element.*/ findElement(
      elementType: DocumentApp.ElementType,
    ): DocumentApp.RangeElement;
    /**Searches the contents of the element for a descendant of the specified type, starting from the
specified [`RangeElement`](https://developers.google.com/apps-script/reference/document/range-element.html).

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Define the search parameters.
var searchType = DocumentApp.ElementType.PARAGRAPH;
var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
var searchResult = null;

// Search until the paragraph is found.
while (searchResult = body.findElement(searchType, searchResult)) {
  var par = searchResult.getElement().asParagraph();
  if (par.getHeading() == searchHeading) {
    // Found one, update and stop.
    par.setText('This is the first header.');
    return;
  }
}
```
@param elementType The type of element to search for.
@param from The search result to search from.
@return A search result indicating the next position of the search element.*/ findElement(
      elementType: DocumentApp.ElementType,
      from: DocumentApp.RangeElement,
    ): DocumentApp.RangeElement;
    /**Searches the contents of the element for the specified text pattern using regular expressions.

A subset of the JavaScript regular expression features are not fully supported, such as
capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block
contained in the current element.
@param searchPattern the pattern to search for
@return a search result indicating the position of the search text, or null if there is no
    match*/ findText(searchPattern: string): DocumentApp.RangeElement;
    /**Searches the contents of the element for the specified text pattern, starting from a given
search result.

A subset of the JavaScript regular expression features are not fully supported, such as
capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block
contained in the current element.
@param searchPattern the pattern to search for
@param from the search result to search from
@return a search result indicating the next position of the search text, or null if there is no
    match*/ findText(
      searchPattern: string,
      from: DocumentApp.RangeElement,
    ): DocumentApp.RangeElement;
    /**Retrieves the element's attributes.

The result is an object containing a property for each valid element attribute where each
property name corresponds to an item in the `DocumentApp.Attribute` enumeration.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Append a styled paragraph.
var par = body.appendParagraph('A bold, italicized paragraph.');
par.setBold(true);
par.setItalic(true);

// Retrieve the paragraph's attributes.
var atts = par.getAttributes();

// Log the paragraph attributes.
for (var att in atts) {
  Logger.log(att + ":" + atts[att]);
}
```
@return The element's attributes.*/ getAttributes(): Object;
    /**Retrieves the background color.
@return the background color, formatted in CSS notation (like `'#ffffff'`)*/ getBackgroundColor(): string;
    /**Retrieves the child element at the specified child index.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Obtain the first element in the tab.
var firstChild = body.getChild(0);

// If it's a paragraph, set its contents.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  firstChild.asParagraph().setText("This is the first paragraph.");
}
```
@param childIndex The index of the child element to retrieve.
@return The child element at the specified index.*/ getChild(
      childIndex: Integer,
    ): DocumentApp.Element;
    /**Retrieves the child index for the specified child element.
@param child The child element for which to retrieve the index.
@return The child index.*/ getChildIndex(child: DocumentApp.Element): Integer;
    /**Retrieves the column span, which is the number of columns of table cells this cell spans.
Non-merged cells have a col span of 1.
@return the column span or 0 for a cell which is merged over by another cell*/ getColSpan(): Integer;
    /**Retrieves the link url.
@return the link url, or null if the element contains multiple values for this attribute*/ getLinkUrl(): string;
    /**Retrieves the element's next sibling element.

The next sibling has the same parent and follows the current element.
@return The next sibling element.*/ getNextSibling(): DocumentApp.Element;
    /**Retrieves the number of children.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Log the number of elements in the tab.
Logger.log("There are " + body.getNumChildren() +
    " elements in the tab's body.");
```
@return The number of children.*/ getNumChildren(): Integer;
    /**Retrieves the bottom padding, in points.
@return the bottom padding, in points*/ getPaddingBottom(): number;
    /**Retrieves the left padding, in points.
@return the left padding, in points*/ getPaddingLeft(): number;
    /**Retrieves the right padding, in points.
@return the right padding, in points*/ getPaddingRight(): number;
    /**Retrieves the top padding, in points.
@return the top padding, in points*/ getPaddingTop(): number;
    /**Retrieves the element's parent element.

The parent element contains the current element.
@return The parent element.*/ getParent(): DocumentApp.ContainerElement;
    /**Retrieves the [`TableRow`](https://developers.google.com/apps-script/reference/document/table-row.html) containing the current [`TableCell`](https://developers.google.com/apps-script/reference/document/table-cell.html).
@return the table row containing the current cell*/ getParentRow(): DocumentApp.TableRow;
    /**Retrieves the [`Table`](https://developers.google.com/apps-script/reference/document/table.html) containing the current [`TableCell`](https://developers.google.com/apps-script/reference/document/table-cell.html).
@return the table containing the current cell*/ getParentTable(): DocumentApp.Table;
    /**Retrieves the element's previous sibling element.

The previous sibling has the same parent and precedes the current element.
@return The previous sibling element.*/ getPreviousSibling(): DocumentApp.Element;
    /**Retrieves the row span, which is the number of rows of table cells this cell spans. Non-merged
cells have a row span of 1.
@return the row span or 0 for a cell which is merged over by another cell*/ getRowSpan(): Integer;
    /**Retrieves the contents of the element as a text string.
@return the contents of the element as text string*/ getText(): string;
    /**Gets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.
@return the type of text alignment, or `null` if the text contains multiple types of text
    alignments or if the text alignment has never been set*/ getTextAlignment(): DocumentApp.TextAlignment;
    /**Retrieves the element's [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html).

Use `getType()` to determine the exact type of a given element.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Obtain the first element in the active tab's body.

var firstChild = body.getChild(0);

// Use getType() to determine the element's type.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  Logger.log('The first element is a paragraph.');
} else {
  Logger.log('The first element is not a paragraph.');
}
```
@return The element type.*/ getType(): DocumentApp.ElementType;
    /**Retrieves the [`VerticalAlignment`](https://developers.google.com/apps-script/reference/document/vertical-alignment.html).
@return the vertical alignment*/ getVerticalAlignment(): DocumentApp.VerticalAlignment;
    /**Retrieves the width of the column containing the cell, in points.
@return the column width, in points*/ getWidth(): number;
    /**Creates and inserts a new [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html) at the specified index.

The horizontal rule will be contained in a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@param childIndex the index at which to insert the element
@return the new horizontal rule*/ insertHorizontalRule(
      childIndex: Integer,
    ): DocumentApp.HorizontalRule;
    /**Creates and inserts an [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) from the specified image blob, at the specified
index.

The image will be contained in a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@param childIndex the index at which to insert the element
@param image the image data
@return the inserted inline image*/ insertImage(
      childIndex: Integer,
      image: BlobSource,
    ): DocumentApp.InlineImage;
    /**Inserts the given [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) at the specified index.

The image will be contained in a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@param childIndex the index at which to insert the element
@param image the image to insert
@return the inserted inline image*/ insertImage(
      childIndex: Integer,
      image: DocumentApp.InlineImage,
    ): DocumentApp.InlineImage;
    /**Inserts the given [`ListItem`](https://developers.google.com/apps-script/reference/document/list-item.html) at the specified index.
@param childIndex the index at which to insert the element
@param listItem the list item to insert
@return inserted new list item*/ insertListItem(
      childIndex: Integer,
      listItem: DocumentApp.ListItem,
    ): DocumentApp.ListItem;
    /**Creates and inserts a new [`ListItem`](https://developers.google.com/apps-script/reference/document/list-item.html) at the specified index.
@param childIndex the index at which to insert the element
@param text the text contents
@return the new list item*/ insertListItem(
      childIndex: Integer,
      text: string,
    ): DocumentApp.ListItem;
    /**Inserts the given [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html) at the specified index.
@param childIndex the index at which to insert the element
@param paragraph the paragraph to insert
@return the inserted paragraph*/ insertParagraph(
      childIndex: Integer,
      paragraph: DocumentApp.Paragraph,
    ): DocumentApp.Paragraph;
    /**Creates and inserts a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html) at the specified index.
@param childIndex the index at which to insert the element
@param text the text contents
@return the new paragraph*/ insertParagraph(
      childIndex: Integer,
      text: string,
    ): DocumentApp.Paragraph;
    /**Creates and inserts a new [`Table`](https://developers.google.com/apps-script/reference/document/table.html) at the specified index.
@param childIndex the index at which to insert the element
@return the new table*/ insertTable(childIndex: Integer): DocumentApp.Table;
    /**Inserts the given [`Table`](https://developers.google.com/apps-script/reference/document/table.html) at the specified index.
@param childIndex the index at which to insert the element
@param table the table to insert
@return the inserted table*/ insertTable(
      childIndex: Integer,
      table: DocumentApp.Table,
    ): DocumentApp.Table;
    /**Creates and inserts a new [`Table`](https://developers.google.com/apps-script/reference/document/table.html) containing the specified cells, at the specified index.
@param childIndex the index at which to insert
@param cells the text contents of the table cells to add to the new table
@return the new table*/ insertTable(
      childIndex: Integer,
      cells: string[][],
    ): DocumentApp.Table;
    /**Determines whether the element is at the end of the [`Document`](https://developers.google.com/apps-script/reference/document/document.html).
@return Whether the element is at the end of the tab.*/ isAtDocumentEnd(): boolean;
    /**Merges the element with the preceding sibling of the same type.

Only elements of the same [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html) can be merged. Any child elements contained in
the current element are moved to the preceding sibling element.

The current element is removed from the document.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Example 1: Merge paragraphs
// Append two paragraphs to the document's active tab.
var par1 = body.appendParagraph('Paragraph 1.');
var par2 = body.appendParagraph('Paragraph 2.');
// Merge the newly added paragraphs into a single paragraph.
par2.merge();

// Example 2: Merge table cells
// Create a two-dimensional array containing the table's cell contents.
var cells = [
['Row 1, Cell 1', 'Row 1, Cell 2'],
['Row 2, Cell 1', 'Row 2, Cell 2']
];
// Build a table from the array.
var table = body.appendTable(cells);
// Get the first row in the table.
 var row = table.getRow(0);
// Get the two cells in this row.
var cell1 = row.getCell(0);
var cell2 = row.getCell(1);
// Merge the current cell into its preceding sibling element.
var merged = cell2.merge();
```
@return The merged element.*/ merge(): DocumentApp.TableCell;
    /**Removes the specified child element.
@param child the child element to remove
@return the current element*/ removeChild(
      child: DocumentApp.Element,
    ): DocumentApp.TableCell;
    /**Removes the element from its parent.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab()
var body = documentTab.getBody();

// Remove all images in the active tab's body.
var imgs = body.getImages();
for (var i = 0; i < imgs.length; i++) {
  imgs[i].removeFromParent();
}
```
@return The removed element.*/ removeFromParent(): DocumentApp.TableCell;
    /**Replaces all occurrences of a given text pattern with a given replacement string, using regular
expressions.

The search pattern is passed as a string, not a JavaScript regular expression object.
Because of this you'll need to escape any backslashes in the pattern.

This methods uses Google's [RE2](https://github.com/google/re2) regular
expression library, which limits the [supported syntax](https://github.com/google/re2/wiki/Syntax).

The provided regular expression pattern is independently matched against each text block
contained in the current element.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Clear the text surrounding "Apps Script", with or without text.
body.replaceText("^.*Apps ?Script.*$", "Apps Script");
```
@param searchPattern the regex pattern to search for
@param replacement the text to use as replacement
@return the current element*/ replaceText(
      searchPattern: string,
      replacement: string,
    ): DocumentApp.Element;
    /**Sets the element's attributes.

The specified attributes parameter must be an object where each property name is an item in
the `DocumentApp.Attribute` enumeration and each property value is the new value to be
applied.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Define a custom paragraph style.
var style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.RIGHT;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
style[DocumentApp.Attribute.FONT_SIZE] = 18;
style[DocumentApp.Attribute.BOLD] = true;

// Append a plain paragraph.
var par = body.appendParagraph('A paragraph with custom style.');

// Apply the custom style.
par.setAttributes(style);
```
@param attributes The element's attributes.
@return The current element.*/ setAttributes(
      attributes: Object,
    ): DocumentApp.TableCell;
    /**Sets the background color.
@param color the background color, formatted in CSS notation (like `'#ffffff'`)
@return the current element*/ setBackgroundColor(
      color: string,
    ): DocumentApp.TableCell;
    /**Sets the link url.
@param url the link url
@return the current element*/ setLinkUrl(url: string): DocumentApp.TableCell;
    /**Sets the bottom padding, in points.
@param paddingBottom the bottom padding, in points
@return the current element*/ setPaddingBottom(
      paddingBottom: number,
    ): DocumentApp.TableCell;
    /**Sets the left padding, in points.
@param paddingLeft the left padding, in points
@return the current element*/ setPaddingLeft(
      paddingLeft: number,
    ): DocumentApp.TableCell;
    /**Sets the right padding, in points.
@param paddingRight The right padding, in points.
@return The current element.*/ setPaddingRight(
      paddingRight: number,
    ): DocumentApp.TableCell;
    /**Sets the top padding, in points.
@param paddingTop the top padding, in points
@return the current element*/ setPaddingTop(
      paddingTop: number,
    ): DocumentApp.TableCell;
    /**Sets the contents as plain text.

Note: existing contents are cleared.
@param text the new text contents
@return the current element*/ setText(text: string): DocumentApp.TableCell;
    /**Sets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.

```
// Make the entire first paragraph in the active tab be superscript.
var documentTab = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
var text = documentTab.getBody().getParagraphs()[0].editAsText();
text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
```
@param textAlignment the type of text alignment to apply
@return the current element*/ setTextAlignment(
      textAlignment: DocumentApp.TextAlignment,
    ): DocumentApp.TableCell;
    /**Sets the vertical alignment.
@param alignment the vertical alignment
@return the current element*/ setVerticalAlignment(
      alignment: DocumentApp.VerticalAlignment,
    ): DocumentApp.TableCell;
    /**Sets the width of the column containing the current cell, in points.
@param width the column width, in points
@return the current element*/ setWidth(width: number): DocumentApp.TableCell;
  }
  interface Table {
    /**Creates and appends a new [`TableRow`](https://developers.google.com/apps-script/reference/document/table-row.html).
@return the new table row element*/ appendTableRow(): DocumentApp.TableRow;
    /**Appends the given [`TableRow`](https://developers.google.com/apps-script/reference/document/table-row.html).

```
// Opens the Docs file by its ID. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Gets the first table in the tab and copies the second row.
const table = body.getTables()[0];
const row = table.getChild(1).copy();

// Adds the copied row to the bottom of the table.
const tableRow = table.appendTableRow(row);
```
@param tableRow The table row to append.
@return The appended table row element.*/ appendTableRow(
      tableRow: DocumentApp.TableRow,
    ): DocumentApp.TableRow;
    /**Clears the contents of the element.
@return The current element.*/ clear(): DocumentApp.Table;
    /**Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a
parent.
@return The new copy.*/ copy(): DocumentApp.Table;
    /**Obtains a [`Text`](https://developers.google.com/apps-script/reference/document/text.html) version of the current element, for editing.

Use `editAsText` for manipulating the elements contents as rich text. The `editAsText` mode ignores non-text elements (such as [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) and [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html)).

Child elements fully contained within a deleted text range are removed from the element.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Insert two paragraphs separated by a paragraph containing an
// horizontal rule.
body.insertParagraph(0, "An editAsText sample.");
body.insertHorizontalRule(0);
body.insertParagraph(0, "An example.");

// Delete " sample.

 An" removing the horizontal rule in the process.
body.editAsText().deleteText(14, 25);
```
@return a text version of the current element*/ editAsText(): DocumentApp.Text;
    /**Searches the contents of the element for a descendant of the specified type.
@param elementType The type of element to search for.
@return A search result indicating the position of the search element.*/ findElement(
      elementType: DocumentApp.ElementType,
    ): DocumentApp.RangeElement;
    /**Searches the contents of the element for a descendant of the specified type, starting from the
specified [`RangeElement`](https://developers.google.com/apps-script/reference/document/range-element.html).

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Define the search parameters.
var searchType = DocumentApp.ElementType.PARAGRAPH;
var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
var searchResult = null;

// Search until the paragraph is found.
while (searchResult = body.findElement(searchType, searchResult)) {
  var par = searchResult.getElement().asParagraph();
  if (par.getHeading() == searchHeading) {
    // Found one, update and stop.
    par.setText('This is the first header.');
    return;
  }
}
```
@param elementType The type of element to search for.
@param from The search result to search from.
@return A search result indicating the next position of the search element.*/ findElement(
      elementType: DocumentApp.ElementType,
      from: DocumentApp.RangeElement,
    ): DocumentApp.RangeElement;
    /**Searches the contents of the element for the specified text pattern using regular expressions.

A subset of the JavaScript regular expression features are not fully supported, such as
capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block
contained in the current element.
@param searchPattern the pattern to search for
@return a search result indicating the position of the search text, or null if there is no
    match*/ findText(searchPattern: string): DocumentApp.RangeElement;
    /**Searches the contents of the element for the specified text pattern, starting from a given
search result.

A subset of the JavaScript regular expression features are not fully supported, such as
capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block
contained in the current element.
@param searchPattern the pattern to search for
@param from the search result to search from
@return a search result indicating the next position of the search text, or null if there is no
    match*/ findText(
      searchPattern: string,
      from: DocumentApp.RangeElement,
    ): DocumentApp.RangeElement;
    /**Retrieves the element's attributes.

The result is an object containing a property for each valid element attribute where each
property name corresponds to an item in the `DocumentApp.Attribute` enumeration.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Append a styled paragraph.
var par = body.appendParagraph('A bold, italicized paragraph.');
par.setBold(true);
par.setItalic(true);

// Retrieve the paragraph's attributes.
var atts = par.getAttributes();

// Log the paragraph attributes.
for (var att in atts) {
  Logger.log(att + ":" + atts[att]);
}
```
@return The element's attributes.*/ getAttributes(): Object;
    /**Retrieves the border color.

```
// Opens the Docs file by its ID. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Gets the first table.
const table = body.getTables()[0];

// Sets the border color of the first table.
table.setBorderColor('#00FF00');

// Logs the border color of the first table to the console.
console.log(table.getBorderColor());
```
@return The border color, formatted in CSS notation (like `'#ffffff'`).*/ getBorderColor(): string;
    /**Retrieves the border width, in points.

```
// Opens the Docs file by its ID. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Gets the first table.
const table = body.getTables()[0];

// Sets the border width of the first table.
table.setBorderWidth(20);

// Logs the border width of the first table.
console.log(table.getBorderWidth());

```
@return The border width, in points.*/ getBorderWidth(): number;
    /**Retrieves the [`TableCell`](https://developers.google.com/apps-script/reference/document/table-cell.html) at the specified row and cell indices.

```
// Opens the Docs file by its ID. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Gets the first table.
const table = body.getTables()[0];

// Gets the cell of the table's third row and second column.
const cell = table.getCell(2, 1);

// Logs the cell text to the console.
console.log(cell.getText());
```
@param rowIndex The index of the row containing the cell to retrieve.
@param cellIndex The index of the cell to retrieve.
@return The table cell.*/ getCell(
      rowIndex: Integer,
      cellIndex: Integer,
    ): DocumentApp.TableCell;
    /**Retrieves the child element at the specified child index.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Obtain the first element in the tab.
var firstChild = body.getChild(0);

// If it's a paragraph, set its contents.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  firstChild.asParagraph().setText("This is the first paragraph.");
}
```
@param childIndex The index of the child element to retrieve.
@return The child element at the specified index.*/ getChild(
      childIndex: Integer,
    ): DocumentApp.Element;
    /**Retrieves the child index for the specified child element.
@param child The child element for which to retrieve the index.
@return The child index.*/ getChildIndex(child: DocumentApp.Element): Integer;
    /**Retrieves the width of the specified table column, in points.

```
// Opens the Docs file by its ID. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Gets the first table.
const table = body.getTables()[0];

// Sets the width of the second column to 100 points.
const columnWidth = table.setColumnWidth(1, 100);

// Gets the width of the second column and logs it to the console.
console.log(columnWidth.getColumnWidth(1));

```
@param columnIndex The column index.
@return The column width, in points.*/ getColumnWidth(
      columnIndex: Integer,
    ): number;
    /**Retrieves the link url.
@return the link url, or null if the element contains multiple values for this attribute*/ getLinkUrl(): string;
    /**Retrieves the element's next sibling element.

The next sibling has the same parent and follows the current element.
@return The next sibling element.*/ getNextSibling(): DocumentApp.Element;
    /**Retrieves the number of children.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Log the number of elements in the tab.
Logger.log("There are " + body.getNumChildren() +
    " elements in the tab's body.");
```
@return The number of children.*/ getNumChildren(): Integer;
    /**Retrieves the number of [`TableRows`](https://developers.google.com/apps-script/reference/document/table-row.html).

```
// Opens the Docs file by its ID. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Gets the first table.
const table = body.getTables()[0];

// Logs the number of rows of the first table to the console.
console.log(table.getNumRows());
```
@return The number of table rows.*/ getNumRows(): Integer;
    /**Retrieves the element's parent element.

The parent element contains the current element.
@return The parent element.*/ getParent(): DocumentApp.ContainerElement;
    /**Retrieves the element's previous sibling element.

The previous sibling has the same parent and precedes the current element.
@return The previous sibling element.*/ getPreviousSibling(): DocumentApp.Element;
    /**Retrieves the [`TableRow`](https://developers.google.com/apps-script/reference/document/table-row.html) at the specified row index.

```
// Opens the Docs file by its ID. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Gets the first table and logs the text of first row to the console.
const table = body.getTables()[0];
console.log(table.getRow(0).getText());
```
@param rowIndex The index of the row to retrieve.
@return The table row.*/ getRow(rowIndex: Integer): DocumentApp.TableRow;
    /**Retrieves the contents of the element as a text string.
@return the contents of the element as text string*/ getText(): string;
    /**Gets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.
@return the type of text alignment, or `null` if the text contains multiple types of text
    alignments or if the text alignment has never been set*/ getTextAlignment(): DocumentApp.TextAlignment;
    /**Retrieves the element's [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html).

Use `getType()` to determine the exact type of a given element.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Obtain the first element in the active tab's body.

var firstChild = body.getChild(0);

// Use getType() to determine the element's type.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  Logger.log('The first element is a paragraph.');
} else {
  Logger.log('The first element is not a paragraph.');
}
```
@return The element type.*/ getType(): DocumentApp.ElementType;
    /**Creates and inserts a new [`TableRow`](https://developers.google.com/apps-script/reference/document/table-row.html) at the specified index.
@param childIndex the index at which to insert the element
@return the current element*/ insertTableRow(
      childIndex: Integer,
    ): DocumentApp.TableRow;
    /**Inserts the given [`TableRow`](https://developers.google.com/apps-script/reference/document/table-row.html) at the specified index.
@param childIndex the index at which to insert the element
@param tableRow the table row to insert
@return the inserted table row element*/ insertTableRow(
      childIndex: Integer,
      tableRow: DocumentApp.TableRow,
    ): DocumentApp.TableRow;
    /**Determines whether the element is at the end of the [`Document`](https://developers.google.com/apps-script/reference/document/document.html).
@return Whether the element is at the end of the tab.*/ isAtDocumentEnd(): boolean;
    /**Removes the specified child element.

```
// Opens the Docs file by its ID. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Gets the first table.
const table = body.getTables()[0];

// Finds the first table row and removes it.
const element = table.findElement(DocumentApp.ElementType.TABLE_ROW);
table.removeChild(element.getElement());
```
@param child The child element to remove.
@return The current element.*/ removeChild(
      child: DocumentApp.Element,
    ): DocumentApp.Table;
    /**Removes the element from its parent.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab()
var body = documentTab.getBody();

// Remove all images in the active tab's body.
var imgs = body.getImages();
for (var i = 0; i < imgs.length; i++) {
  imgs[i].removeFromParent();
}
```
@return The removed element.*/ removeFromParent(): DocumentApp.Table;
    /**Removes the [`TableRow`](https://developers.google.com/apps-script/reference/document/table-row.html) at the specified row index.

```
// Opens the Docs file by its ID. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Gets the first table and removes its second row.
const table = body.getTables()[0];
table.removeRow(1);
```
@param rowIndex The index of the row to remove.
@return The removed row.*/ removeRow(rowIndex: Integer): DocumentApp.TableRow;
    /**Replaces all occurrences of a given text pattern with a given replacement string, using regular
expressions.

The search pattern is passed as a string, not a JavaScript regular expression object.
Because of this you'll need to escape any backslashes in the pattern.

This methods uses Google's [RE2](https://github.com/google/re2) regular
expression library, which limits the [supported syntax](https://github.com/google/re2/wiki/Syntax).

The provided regular expression pattern is independently matched against each text block
contained in the current element.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Clear the text surrounding "Apps Script", with or without text.
body.replaceText("^.*Apps ?Script.*$", "Apps Script");
```
@param searchPattern the regex pattern to search for
@param replacement the text to use as replacement
@return the current element*/ replaceText(
      searchPattern: string,
      replacement: string,
    ): DocumentApp.Element;
    /**Sets the element's attributes.

The specified attributes parameter must be an object where each property name is an item in
the `DocumentApp.Attribute` enumeration and each property value is the new value to be
applied.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Define a custom paragraph style.
var style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.RIGHT;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
style[DocumentApp.Attribute.FONT_SIZE] = 18;
style[DocumentApp.Attribute.BOLD] = true;

// Append a plain paragraph.
var par = body.appendParagraph('A paragraph with custom style.');

// Apply the custom style.
par.setAttributes(style);
```
@param attributes The element's attributes.
@return The current element.*/ setAttributes(
      attributes: Object,
    ): DocumentApp.Table;
    /**Sets the border color.

```
// Opens the Docs file by its ID. If you created your script from within a
// Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Gets the first table.
const table = body.getTables()[0];

// Sets the border color of the table to green.
table.setBorderColor('#00FF00');
```
@param color The border color, formatted in CSS notation (like `'#ffffff'`).
@return The current element.*/ setBorderColor(color: string): DocumentApp.Table;
    /**Sets the border width, in points.
@param width the border width, in points
@return the current element*/ setBorderWidth(width: number): DocumentApp.Table;
    /**Sets the width of the specified column, in points.
@param columnIndex the column index
@param width the border width, in points
@return the current element*/ setColumnWidth(
      columnIndex: Integer,
      width: number,
    ): DocumentApp.Table;
    /**Sets the link url.
@param url the link url
@return the current element*/ setLinkUrl(url: string): DocumentApp.Table;
    /**Sets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.

```
// Make the entire first paragraph in the active tab be superscript.
var documentTab = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
var text = documentTab.getBody().getParagraphs()[0].editAsText();
text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
```
@param textAlignment the type of text alignment to apply
@return the current element*/ setTextAlignment(
      textAlignment: DocumentApp.TextAlignment,
    ): DocumentApp.Table;
  }
  interface TabType {}
  interface _TabType {
    /**The type corresponding to [`DocumentTab`](https://developers.google.com/apps-script/reference/document/document-tab.html).*/ DOCUMENT_TAB: TabType;
  }
  interface Tab {
    /**Retrieves the tab contents as a [`DocumentTab`](https://developers.google.com/apps-script/reference/document/document-tab.html).
@return The tab as a [`DocumentTab`](https://developers.google.com/apps-script/reference/document/document-tab.html).*/ asDocumentTab(): DocumentApp.DocumentTab;
    /**Retrieves the child tabs nested within this tab.
@return The child tabs nested within this tab.*/ getChildTabs(): DocumentApp.Tab[];
    /**Retrieves the ID of the tab.
@return The ID of the tab.*/ getId(): string;
    /**Retrieves the 0-based index of the tab within the parent.
@return The index of the tab within the parent.*/ getIndex(): Integer;
    /**Retrieves the title of the tab.
@return The title of the tab.*/ getTitle(): string;
    /**Retrieves the type of tab.

Use this method to determine the content type of this [`Tab`](https://developers.google.com/apps-script/reference/document/tab.html) before casting to the more
specific type using [`asDocumentTab()`](https://developers.google.com/apps-script/reference/document/tab.html#asDocumentTab()).

```
var tab = DocumentApp.getActiveDocument().getActiveTab();
// Use getType() to determine the tab's type before casting.
if (tab.getType() == DocumentApp.TabType.DOCUMENT_TAB) {
  // It's a document tab, write some text to it.
  tab.asDocumentTab().setText('Hello World!');
} else {
 // There are currently no types other than DOCUMENT_TAB.
}
```
@return The tab's type.*/ getType(): DocumentApp.TabType;
  }
  interface RichLink {
    /**Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a
parent.
@return The new copy.*/ copy(): DocumentApp.RichLink;
    /**Retrieves the element's attributes.

The result is an object containing a property for each valid element attribute where each
property name corresponds to an item in the `DocumentApp.Attribute` enumeration.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Append a styled paragraph.
var par = body.appendParagraph('A bold, italicized paragraph.');
par.setBold(true);
par.setItalic(true);

// Retrieve the paragraph's attributes.
var atts = par.getAttributes();

// Log the paragraph attributes.
for (var att in atts) {
  Logger.log(att + ":" + atts[att]);
}
```
@return The element's attributes.*/ getAttributes(): Object;
    /**Returns the [MIME type](https://developers.google.com/drive/api/v3/mime-types) of
the link, which is available when the item is a link to a Drive file and `null`
otherwise.

For example, if the link points to a Google Docs file, this returns the string 

```
application/vnd.google-apps.document```

.
@return The MIME type of the link, if available.*/ getMimeType(): string;
    /**Retrieves the element's next sibling element.

The next sibling has the same parent and follows the current element.
@return The next sibling element.*/ getNextSibling(): DocumentApp.Element;
    /**Retrieves the element's parent element.

The parent element contains the current element.
@return The parent element.*/ getParent(): DocumentApp.ContainerElement;
    /**Retrieves the element's previous sibling element.

The previous sibling has the same parent and precedes the current element.
@return The previous sibling element.*/ getPreviousSibling(): DocumentApp.Element;
    /**Returns the link's displayed title. This title matches the title of the linked resource at the
time of the insertion or last update of the link. For example, if this link points to a Google
Docs document titled "Analysis," this returns `Analysis`.
@return The display title of the link.*/ getTitle(): string;
    /**Retrieves the element's [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html).

Use `getType()` to determine the exact type of a given element.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Obtain the first element in the active tab's body.

var firstChild = body.getChild(0);

// Use getType() to determine the element's type.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  Logger.log('The first element is a paragraph.');
} else {
  Logger.log('The first element is not a paragraph.');
}
```
@return The element type.*/ getType(): DocumentApp.ElementType;
    /**Returns the URL of the resource.
@return The URL of the resource.*/ getUrl(): string;
    /**Determines whether the element is at the end of the [`Document`](https://developers.google.com/apps-script/reference/document/document.html).
@return Whether the element is at the end of the tab.*/ isAtDocumentEnd(): boolean;
    /**Merges the element with the preceding sibling of the same type.

Only elements of the same [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html) can be merged. Any child elements contained in
the current element are moved to the preceding sibling element.

The current element is removed from the document.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Example 1: Merge paragraphs
// Append two paragraphs to the document's active tab.
var par1 = body.appendParagraph('Paragraph 1.');
var par2 = body.appendParagraph('Paragraph 2.');
// Merge the newly added paragraphs into a single paragraph.
par2.merge();

// Example 2: Merge table cells
// Create a two-dimensional array containing the table's cell contents.
var cells = [
['Row 1, Cell 1', 'Row 1, Cell 2'],
['Row 2, Cell 1', 'Row 2, Cell 2']
];
// Build a table from the array.
var table = body.appendTable(cells);
// Get the first row in the table.
 var row = table.getRow(0);
// Get the two cells in this row.
var cell1 = row.getCell(0);
var cell2 = row.getCell(1);
// Merge the current cell into its preceding sibling element.
var merged = cell2.merge();
```
@return The merged element.*/ merge(): DocumentApp.RichLink;
    /**Removes the element from its parent.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab()
var body = documentTab.getBody();

// Remove all images in the active tab's body.
var imgs = body.getImages();
for (var i = 0; i < imgs.length; i++) {
  imgs[i].removeFromParent();
}
```
@return The removed element.*/ removeFromParent(): DocumentApp.RichLink;
    /**Sets the element's attributes.

The specified attributes parameter must be an object where each property name is an item in
the `DocumentApp.Attribute` enumeration and each property value is the new value to be
applied.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Define a custom paragraph style.
var style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.RIGHT;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
style[DocumentApp.Attribute.FONT_SIZE] = 18;
style[DocumentApp.Attribute.BOLD] = true;

// Append a plain paragraph.
var par = body.appendParagraph('A paragraph with custom style.');

// Apply the custom style.
par.setAttributes(style);
```
@param attributes The element's attributes.
@return The current element.*/ setAttributes(
      attributes: Object,
    ): DocumentApp.RichLink;
  }
  interface RangeElement {
    /**Gets the [`Element`](https://developers.google.com/apps-script/reference/document/element.html) that corresponds to this `RangeElement`.

```
// Log debug information about a range element.
Logger.log('Element type: ' + rangeElement.getElement().getType());
if (rangeElement.isPartial()) {
  Logger.log('The character range begins at ' + rangeElement.getStartOffset());
  Logger.log('The character range ends at ' + rangeElement.getEndOffsetInclusive());
} else {
  Logger.log('The entire range element is included.');
}
```
@return the element that corresponds to this `RangeElement`*/ getElement(): DocumentApp.Element;
    /**Gets the position of the end of a partial range within the range element. If the element is a
[`Text`](https://developers.google.com/apps-script/reference/document/text.html) element and [`isPartial()`](https://developers.google.com/apps-script/reference/document/range-element.html#isPartial()) returns `true`, the offset is the number of characters before the last
character in the range (that is, the index of the last character in the range); in any other
case, this method returns `-1`.
@return for [`Text`](https://developers.google.com/apps-script/reference/document/text.html) elements, the
    number of character before the last character in the range; for other elements, `-1`*/ getEndOffsetInclusive(): Integer;
    /**Gets the position of the start of a partial range within the range element. If the element is a
[`Text`](https://developers.google.com/apps-script/reference/document/text.html) element and [`isPartial()`](https://developers.google.com/apps-script/reference/document/range-element.html#isPartial()) returns `true`, the offset is the number of characters before the start of
the range (that is, the index of the first character in the range); in any other case, this
method returns `-1`.
@return for [`Text`](https://developers.google.com/apps-script/reference/document/text.html) elements, the
    number of characters before the start of the range; for other elements, `-1`*/ getStartOffset(): Integer;
    /**Determines whether this range element covers the entire element or a partial selection of the
element's characters. The beginning and end of a partial range element's range can be
determined using [`getStartOffset()`](https://developers.google.com/apps-script/reference/document/range-element.html#getStartOffset()) and [`getEndOffsetInclusive()`](https://developers.google.com/apps-script/reference/document/range-element.html#getEndOffsetInclusive()), respectively.
@return `true` if the element is partially included; `false` if not*/ isPartial(): boolean;
  }
  interface RangeBuilder {
    /**Adds an entire [`Element`](https://developers.google.com/apps-script/reference/document/element.html) to this `RangeBuilder`.
@param element the element to be added
@return this builder, for chaining*/ addElement(
      element: DocumentApp.Element,
    ): DocumentApp.RangeBuilder;
    /**Adds a partial [`Text`](https://developers.google.com/apps-script/reference/document/text.html) element to this `RangeBuilder`.
@param textElement the text element to be partially added
@param startOffset the number of characters before the first character to be included (that is,
    the index of the first character in the range)
@param endOffsetInclusive the number of characters before the last character to be included
    (that is, the index of the last character in the range)
@return this builder, for chaining*/ addElement(
      textElement: DocumentApp.Text,
      startOffset: Integer,
      endOffsetInclusive: Integer,
    ): DocumentApp.RangeBuilder;
    /**Adds two entire elements, and all elements between them, to this `RangeBuilder`.
@param startElement the first element to be added
@param endElementInclusive the last element to be added
@return this builder, for chaining*/ addElementsBetween(
      startElement: DocumentApp.Element,
      endElementInclusive: DocumentApp.Element,
    ): DocumentApp.RangeBuilder;
    /**Adds two partial [`Text`](https://developers.google.com/apps-script/reference/document/text.html) elements, and all elements between them, to the `RangeBuilder`.
@param startTextElement the first text element to be partially added
@param startOffset the number of characters before the first character of `startTextElement` to be included (that is, the index of the first character in the range)
@param endTextElementInclusive the last text element to be partially added
@param endOffsetInclusive the number of characters before the last character of `endTextElementInclusive` to be included (that is, the index of the last character in the
    range)
@return this builder, for chaining*/ addElementsBetween(
      startTextElement: DocumentApp.Text,
      startOffset: Integer,
      endTextElementInclusive: DocumentApp.Text,
      endOffsetInclusive: Integer,
    ): DocumentApp.RangeBuilder;
    /**Adds the contents of another `Range` to this `RangeBuilder`.
@param range the range whose elements should be added
@return this builder, for chaining*/ addRange(
      range: DocumentApp.Range,
    ): DocumentApp.RangeBuilder;
    /**Constructs a `Range` from the settings applied to the builder.
@return the newly constructed range*/ build(): DocumentApp.Range;
    /**Gets all elements in this `Range`, including any partial [`Text`](https://developers.google.com/apps-script/reference/document/text.html) elements (for example, in the case
of a selection that includes only part of a `Text` element). To determine whether a
`Text` element is only partially included in the range, see [`RangeElement.isPartial()`](https://developers.google.com/apps-script/reference/document/range-element.html#isPartial()).
@return an array of elements, in the order they appear in the document*/ getRangeElements(): DocumentApp.RangeElement[];
    /**Gets all elements that the user has selected in the open instance of the document, including
any partially selected [`Text`](https://developers.google.com/apps-script/reference/document/text.html)
elements.
@deprecated
@return an array of selected or partially selected elements, in the order they appear in the
    document*/ getSelectedElements(): DocumentApp.RangeElement[];
  }
  interface Range {
    /**Gets all elements in this `Range`, including any partial [`Text`](https://developers.google.com/apps-script/reference/document/text.html) elements (for example, in the case
of a selection that includes only part of a `Text` element). To determine whether a
`Text` element is only partially included in the range, see [`RangeElement.isPartial()`](https://developers.google.com/apps-script/reference/document/range-element.html#isPartial()).
@return an array of elements, in the order they appear in the document*/ getRangeElements(): DocumentApp.RangeElement[];
    /**Gets all elements that the user has selected in the open instance of the document, including
any partially selected [`Text`](https://developers.google.com/apps-script/reference/document/text.html)
elements.
@deprecated
@return an array of selected or partially selected elements, in the order they appear in the
    document*/ getSelectedElements(): DocumentApp.RangeElement[];
  }
  interface PositionedLayout {}
  interface _PositionedLayout {
    /**The image is positioned above the text.*/ ABOVE_TEXT: PositionedLayout;
    /**The image breaks the text on the left and right.*/ BREAK_BOTH: PositionedLayout;
    /**The image breaks the text on the left.*/ BREAK_LEFT: PositionedLayout;
    /**The image breaks the text on the right.*/ BREAK_RIGHT: PositionedLayout;
    /**The image is wrapped by text.*/ WRAP_TEXT: PositionedLayout;
  }
  interface PositionedImage {
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
@return The data as a blob.*/ getAs(contentType: string): Blob;
    /**Return the data inside this object as a blob.
@return The data as a blob.*/ getBlob(): Blob;
    /**Retrieves the image's height, in pixels.
@return the image's height, in pixels*/ getHeight(): Integer;
    /**Gets the image's ID.
@return the image ID*/ getId(): string;
    /**Gets an enum value that represents how the image is laid out.
@return the image layout*/ getLayout(): DocumentApp.PositionedLayout;
    /**Gets the image's offset, in points, from the paragraph's left.
@return the image offset from the left paragraph's left*/ getLeftOffset(): number;
    /**Gets the [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html) the image is anchored to.
@return the parent paragraph*/ getParagraph(): DocumentApp.Paragraph;
    /**Gets the image's offset, in points, from the paragraph's top.
@return the image offset from the left paragraph's top*/ getTopOffset(): number;
    /**Retrieves the image's width, in pixels.
@return the image's width, in pixels*/ getWidth(): Integer;
    /**Sets the image's height, in pixels.
@param height the image's height, in pixels
@return the current object*/ setHeight(
      height: Integer,
    ): DocumentApp.PositionedImage;
    /**Sets the definition of how the image is laid out.
@param layout an enum representing the layout mode
@return this object for chaining*/ setLayout(
      layout: DocumentApp.PositionedLayout,
    ): DocumentApp.PositionedImage;
    /**Sets the image's offset, in points, from the paragraph's left.
@param offset offset from the paragraph's left
@return this object for chaining*/ setLeftOffset(
      offset: number,
    ): DocumentApp.PositionedImage;
    /**Sets the image's offset, in points, from the paragraph's top.
@param offset offset from the paragraph's top
@return this object for chaining*/ setTopOffset(
      offset: number,
    ): DocumentApp.PositionedImage;
    /**Sets the image's width, in pixels.
@param width the image's width, in pixels
@return the current object*/ setWidth(
      width: Integer,
    ): DocumentApp.PositionedImage;
  }
  interface Position {
    /**Gets the element that contains this `Position`. This will be either a [`Text`](https://developers.google.com/apps-script/reference/document/text.html)
element or a container element like [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html). In either case, the relative
position within the element can be determined with [`getOffset()`](https://developers.google.com/apps-script/reference/document/position.html#getOffset()).
@return the container or [`Text`](https://developers.google.com/apps-script/reference/document/text.html) element in which this `Position` object is located*/ getElement(): DocumentApp.Element;
    /**Gets this `Position`'s relative location within the element that contains it. If the
element is a [`Text`](https://developers.google.com/apps-script/reference/document/text.html) element, the offset is the number of characters before the `Position` (that is, the index of the character after this `Position`); for any other
element, the offset is the number of child elements before this `Position` within the
same container element (that is, the index of the child element after the `Position`).
@return for [`Text`](https://developers.google.com/apps-script/reference/document/text.html) elements, the number of characters before this `Position`; for
    other elements, the number of child elements before this `Position` within the same
    container element*/ getOffset(): Integer;
    /**Creates an artificial [`Text`](https://developers.google.com/apps-script/reference/document/text.html) element that represents the text and formatting of the
[`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html) or [`ListItem`](https://developers.google.com/apps-script/reference/document/list-item.html) that contains the `Position`, either directly or through a chain of child elements. To determine the `Position`'s offset in the returned `Text` element, use [`getSurroundingTextOffset()`](https://developers.google.com/apps-script/reference/document/position.html#getSurroundingTextOffset()).
@return an element equivalent to the result of calling [`editAsText()`](https://developers.google.com/apps-script/reference/document/paragraph.html#editAsText())
    on the [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html) or [`ListItem`](https://developers.google.com/apps-script/reference/document/list-item.html) that contains the `Position`, either directly or through a chain of child elements*/ getSurroundingText(): DocumentApp.Text;
    /**Gets the offset of this `Position` within the [`Text`](https://developers.google.com/apps-script/reference/document/text.html) element returned by [`getSurroundingText()`](https://developers.google.com/apps-script/reference/document/position.html#getSurroundingText()). The offset is the number of characters before the `Position`
(that is, the index of the character after this `Position`).
@return the number of characters before this `Position` in the [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html) or [`ListItem`](https://developers.google.com/apps-script/reference/document/list-item.html) that contains the `Position`, either directly or through a chain of child elements*/ getSurroundingTextOffset(): Integer;
    /**Creates and inserts a new [`Bookmark`](https://developers.google.com/apps-script/reference/document/bookmark.html) at this `Position`.
@return the new bookmark*/ insertBookmark(): DocumentApp.Bookmark;
    /**Creates and inserts a new [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) at this `Position` from the specified image
blob.
@param image the image data to insert at this `Position`
@return the new image element, or `null` if the element in which this `Position` is
    located does not allow images to be inserted*/ insertInlineImage(
      image: BlobSource,
    ): DocumentApp.InlineImage;
    /**Inserts the specified text at this `Position`. This method creates a new [`Text`](https://developers.google.com/apps-script/reference/document/text.html)
element, even if the string is inserted within an existing `Text` element, so that it is
easy to style the new element.
@param text the string to insert at this `Position`
@return the new text element, or `null` if the element in which this `Position` is
    located does not allow text to be inserted*/ insertText(
      text: string,
    ): DocumentApp.Text;
  }
  interface Person {
    /**Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a
parent.
@return The new copy.*/ copy(): DocumentApp.Person;
    /**Retrieves the element's attributes.

The result is an object containing a property for each valid element attribute where each
property name corresponds to an item in the `DocumentApp.Attribute` enumeration.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Append a styled paragraph.
var par = body.appendParagraph('A bold, italicized paragraph.');
par.setBold(true);
par.setItalic(true);

// Retrieve the paragraph's attributes.
var atts = par.getAttributes();

// Log the paragraph attributes.
for (var att in atts) {
  Logger.log(att + ":" + atts[att]);
}
```
@return The element's attributes.*/ getAttributes(): Object;
    /**Returns the person's email address.
@return The email address of the person.*/ getEmail(): string;
    /**Returns the person's display name, if set.
@return The display name of the person link, or `null` if the element displays the email
    address instead.*/ getName(): string;
    /**Retrieves the element's next sibling element.

The next sibling has the same parent and follows the current element.
@return The next sibling element.*/ getNextSibling(): DocumentApp.Element;
    /**Retrieves the element's parent element.

The parent element contains the current element.
@return The parent element.*/ getParent(): DocumentApp.ContainerElement;
    /**Retrieves the element's previous sibling element.

The previous sibling has the same parent and precedes the current element.
@return The previous sibling element.*/ getPreviousSibling(): DocumentApp.Element;
    /**Retrieves the element's [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html).

Use `getType()` to determine the exact type of a given element.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Obtain the first element in the active tab's body.

var firstChild = body.getChild(0);

// Use getType() to determine the element's type.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  Logger.log('The first element is a paragraph.');
} else {
  Logger.log('The first element is not a paragraph.');
}
```
@return The element type.*/ getType(): DocumentApp.ElementType;
    /**Determines whether the element is at the end of the [`Document`](https://developers.google.com/apps-script/reference/document/document.html).
@return Whether the element is at the end of the tab.*/ isAtDocumentEnd(): boolean;
    /**Merges the element with the preceding sibling of the same type.

Only elements of the same [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html) can be merged. Any child elements contained in
the current element are moved to the preceding sibling element.

The current element is removed from the document.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Example 1: Merge paragraphs
// Append two paragraphs to the document's active tab.
var par1 = body.appendParagraph('Paragraph 1.');
var par2 = body.appendParagraph('Paragraph 2.');
// Merge the newly added paragraphs into a single paragraph.
par2.merge();

// Example 2: Merge table cells
// Create a two-dimensional array containing the table's cell contents.
var cells = [
['Row 1, Cell 1', 'Row 1, Cell 2'],
['Row 2, Cell 1', 'Row 2, Cell 2']
];
// Build a table from the array.
var table = body.appendTable(cells);
// Get the first row in the table.
 var row = table.getRow(0);
// Get the two cells in this row.
var cell1 = row.getCell(0);
var cell2 = row.getCell(1);
// Merge the current cell into its preceding sibling element.
var merged = cell2.merge();
```
@return The merged element.*/ merge(): DocumentApp.Person;
    /**Removes the element from its parent.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab()
var body = documentTab.getBody();

// Remove all images in the active tab's body.
var imgs = body.getImages();
for (var i = 0; i < imgs.length; i++) {
  imgs[i].removeFromParent();
}
```
@return The removed element.*/ removeFromParent(): DocumentApp.Person;
    /**Sets the element's attributes.

The specified attributes parameter must be an object where each property name is an item in
the `DocumentApp.Attribute` enumeration and each property value is the new value to be
applied.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Define a custom paragraph style.
var style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.RIGHT;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
style[DocumentApp.Attribute.FONT_SIZE] = 18;
style[DocumentApp.Attribute.BOLD] = true;

// Append a plain paragraph.
var par = body.appendParagraph('A paragraph with custom style.');

// Apply the custom style.
par.setAttributes(style);
```
@param attributes The element's attributes.
@return The current element.*/ setAttributes(
      attributes: Object,
    ): DocumentApp.Person;
  }
  interface ParagraphHeading {}
  interface _ParagraphHeading {
    /**The highest heading option.*/ HEADING1: ParagraphHeading;
    /**The second heading option.*/ HEADING2: ParagraphHeading;
    /**The third heading option*/ HEADING3: ParagraphHeading;
    /**The fourth heading option.*/ HEADING4: ParagraphHeading;
    /**The fifth heading option.*/ HEADING5: ParagraphHeading;
    /**The lowest heading option.*/ HEADING6: ParagraphHeading;
    /**The heading option for normal text.*/ NORMAL: ParagraphHeading;
    /**The subtitle heading option.*/ SUBTITLE: ParagraphHeading;
    /**The title heading option.*/ TITLE: ParagraphHeading;
  }
  interface Paragraph {
    /**Creates and inserts a new [`PositionedImage`](https://developers.google.com/apps-script/reference/document/positioned-image.html) from the specified image blob.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Gets the first paragraph from the body.
const paragraph = body.getParagraphs()[0];

// Fetches the specified image URL.
const image =
  UrlFetchApp.fetch('https://fonts.gstatic.com/s/i/productlogos/apps_script/v10/web-24dp/logo_apps_script_color_1x_web_24dp.png');

// Adds the image to the tab, anchored to the first paragraph.
paragraph.addPositionedImage(image);
```
@param image The image data.
@return The new positioned image.*/ addPositionedImage(
      image: BlobSource,
    ): DocumentApp.PositionedImage;
    /**Creates and appends a new [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html).

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Gets the first paragraph from the body.
const paragraph = body.getParagraphs()[0];

// Adds a horizontal line under the first paragraph.
paragraph.appendHorizontalRule();
```
@return The new horizontal rule.*/ appendHorizontalRule(): DocumentApp.HorizontalRule;
    /**Creates and appends a new [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) from the specified image blob.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Gets the first paragraph from the body.
const paragraph = body.getParagraphs()[0];

// Fetches the image from the specified image URL.
const image = UrlFetchApp
  .fetch('https://fonts.gstatic.com/s/i/productlogos/apps_script/v10/web-96dp/logo_apps_script_color_1x_web_96dp.png');

// Adds the image to the first paragraph.
paragraph.appendInlineImage(image);
```
@param image The image data.
@return The appended image.*/ appendInlineImage(
      image: BlobSource,
    ): DocumentApp.InlineImage;
    /**Appends the given [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html).

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Gets the first paragraph from the body.
const paragraph = body.getParagraphs()[0];

// Makes a copy of the first image in the body.
const image = body.getImages()[0].copy();;

// Adds the image to the first paragraph.
paragraph.appendInlineImage(image);
```
@param image The image data.
@return The appended image.*/ appendInlineImage(
      image: DocumentApp.InlineImage,
    ): DocumentApp.InlineImage;
    /**Creates and appends a new [`PageBreak`](https://developers.google.com/apps-script/reference/document/page-break.html).

Note: [`PageBreaks`](https://developers.google.com/apps-script/reference/document/page-break.html) may not be contained within [`TableCells`](https://developers.google.com/apps-script/reference/document/table-cell.html).
If the current element is contained in a table cell, an exception will be thrown.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Gets the first paragraph from the body.
const paragraph = body.getParagraphs()[0];

// Adds a page break after the first paragraph.
paragraph.appendPageBreak();
```
@return The new page break element.*/ appendPageBreak(): DocumentApp.PageBreak;
    /**Appends the given [`PageBreak`](https://developers.google.com/apps-script/reference/document/page-break.html).

Note: [`PageBreaks`](https://developers.google.com/apps-script/reference/document/page-break.html) can't be contained within [`TableCells`](https://developers.google.com/apps-script/reference/document/table-cell.html).
If the current element exists in a table cell, the script throws an exception.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Gets the first paragraph from the body.
const paragraph = body.getParagraphs()[0];

// Adds a page break after the first paragraph.
const pageBreak = paragraph.appendPageBreak();

// Makes a copy of the page break.
const newPageBreak = pageBreak.copy();

// Adds the copied page break to the paragraph.
paragraph.appendPageBreak(newPageBreak);
```
@param pageBreak The page break to append.
@return The appended page break element.*/ appendPageBreak(
      pageBreak: DocumentApp.PageBreak,
    ): DocumentApp.PageBreak;
    /**Appends the given [`Text`](https://developers.google.com/apps-script/reference/document/text.html) element.

```
 // Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Gets the text from the first paragraph in the body.
const paragraph1 = body.getParagraphs()[0];
const text = paragraph1.getText();

// Gets the third paragraph in the body.
const paragraph3 = body.getParagraphs()[2];

// Adds the text from the first paragraph to the third paragraph.
paragraph3.appendText(text);
```
@param text The text element to append.
@return The appended text element.*/ appendText(
      text: DocumentApp.Text,
    ): DocumentApp.Text;
    /**Creates and appends a new [`Text`](https://developers.google.com/apps-script/reference/document/text.html) element with the specified contents.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Gets the first paragraph from the body.
const paragraph = body.getParagraphs()[0];

// Adds a string to the paragraph.
paragraph.appendText('This is a new sentence.');
```
@param text The text contents.
@return The new text element.*/ appendText(text: string): DocumentApp.Text;
    /**Clears the contents of the element.
@return The current element.*/ clear(): DocumentApp.Paragraph;
    /**Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a
parent.
@return The new copy.*/ copy(): DocumentApp.Paragraph;
    /**Obtains a [`Text`](https://developers.google.com/apps-script/reference/document/text.html) version of the current element, for editing.

Use `editAsText` for manipulating the elements contents as rich text. The `editAsText` mode ignores non-text elements (such as [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) and [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html)).

Child elements fully contained within a deleted text range are removed from the element.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Insert two paragraphs separated by a paragraph containing an
// horizontal rule.
body.insertParagraph(0, "An editAsText sample.");
body.insertHorizontalRule(0);
body.insertParagraph(0, "An example.");

// Delete " sample.

 An" removing the horizontal rule in the process.
body.editAsText().deleteText(14, 25);
```
@return a text version of the current element*/ editAsText(): DocumentApp.Text;
    /**Searches the contents of the element for a descendant of the specified type.
@param elementType The type of element to search for.
@return A search result indicating the position of the search element.*/ findElement(
      elementType: DocumentApp.ElementType,
    ): DocumentApp.RangeElement;
    /**Searches the contents of the element for a descendant of the specified type, starting from the
specified [`RangeElement`](https://developers.google.com/apps-script/reference/document/range-element.html).

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Define the search parameters.
var searchType = DocumentApp.ElementType.PARAGRAPH;
var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
var searchResult = null;

// Search until the paragraph is found.
while (searchResult = body.findElement(searchType, searchResult)) {
  var par = searchResult.getElement().asParagraph();
  if (par.getHeading() == searchHeading) {
    // Found one, update and stop.
    par.setText('This is the first header.');
    return;
  }
}
```
@param elementType The type of element to search for.
@param from The search result to search from.
@return A search result indicating the next position of the search element.*/ findElement(
      elementType: DocumentApp.ElementType,
      from: DocumentApp.RangeElement,
    ): DocumentApp.RangeElement;
    /**Searches the contents of the element for the specified text pattern using regular expressions.

A subset of the JavaScript regular expression features are not fully supported, such as
capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block
contained in the current element.
@param searchPattern the pattern to search for
@return a search result indicating the position of the search text, or null if there is no
    match*/ findText(searchPattern: string): DocumentApp.RangeElement;
    /**Searches the contents of the element for the specified text pattern, starting from a given
search result.

A subset of the JavaScript regular expression features are not fully supported, such as
capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block
contained in the current element.
@param searchPattern the pattern to search for
@param from the search result to search from
@return a search result indicating the next position of the search text, or null if there is no
    match*/ findText(
      searchPattern: string,
      from: DocumentApp.RangeElement,
    ): DocumentApp.RangeElement;
    /**Retrieves the [`HorizontalAlignment`](https://developers.google.com/apps-script/reference/document/horizontal-alignment.html).

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Gets the first paragraph from the body.
const paragraph = body.getParagraphs()[0];

// Sets the horizontal alignment to left for the first paragraph.
paragraph.setAlignment(DocumentApp.HorizontalAlignment.LEFT);

// Gets the horizontal alignment of the first paragraph and logs it to the console.
console.log(paragraph.getAlignment().toString());
```
@return The alignment.*/ getAlignment(): DocumentApp.HorizontalAlignment;
    /**Retrieves the element's attributes.

The result is an object containing a property for each valid element attribute where each
property name corresponds to an item in the `DocumentApp.Attribute` enumeration.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Append a styled paragraph.
var par = body.appendParagraph('A bold, italicized paragraph.');
par.setBold(true);
par.setItalic(true);

// Retrieve the paragraph's attributes.
var atts = par.getAttributes();

// Log the paragraph attributes.
for (var att in atts) {
  Logger.log(att + ":" + atts[att]);
}
```
@return The element's attributes.*/ getAttributes(): Object;
    /**Retrieves the child element at the specified child index.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Obtain the first element in the tab.
var firstChild = body.getChild(0);

// If it's a paragraph, set its contents.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  firstChild.asParagraph().setText("This is the first paragraph.");
}
```
@param childIndex The index of the child element to retrieve.
@return The child element at the specified index.*/ getChild(
      childIndex: Integer,
    ): DocumentApp.Element;
    /**Retrieves the child index for the specified child element.
@param child The child element for which to retrieve the index.
@return The child index.*/ getChildIndex(child: DocumentApp.Element): Integer;
    /**Retrieves the [`ParagraphHeading`](https://developers.google.com/apps-script/reference/document/paragraph-heading.html).

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Gets the body contents of the tab by its ID.
// TODO(developer): Replace the ID with your own.
const body = doc.getTab(TAB_ID).asDocumentTab().getBody();

// Adds a paragraph to the body.
const paragraph = body.appendParagraph('Title heading');

// Sets the paragraph heading style to 'Title.'
paragraph.setHeading(DocumentApp.ParagraphHeading.TITLE);

// Gets the heading style and logs it to the console.
console.log(paragraph.getHeading().toString());
```
@return The heading.*/ getHeading(): DocumentApp.ParagraphHeading;
    /**Retrieves the end indentation, in points.
@return the end indentation, in points*/ getIndentEnd(): number;
    /**Retrieves the first line indentation, in points.
@return the first line indentation, in points*/ getIndentFirstLine(): number;
    /**Retrieves the start indentation.
@return the start indentation*/ getIndentStart(): number;
    /**Retrieves the line spacing, in points.
@return the line spacing, in points*/ getLineSpacing(): number;
    /**Retrieves the link url.
@return the link url, or null if the element contains multiple values for this attribute*/ getLinkUrl(): string;
    /**Retrieves the element's next sibling element.

The next sibling has the same parent and follows the current element.
@return The next sibling element.*/ getNextSibling(): DocumentApp.Element;
    /**Retrieves the number of children.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Log the number of elements in the tab.
Logger.log("There are " + body.getNumChildren() +
    " elements in the tab's body.");
```
@return The number of children.*/ getNumChildren(): Integer;
    /**Retrieves the element's parent element.

The parent element contains the current element.
@return The parent element.*/ getParent(): DocumentApp.ContainerElement;
    /**Gets a [`PositionedImage`](https://developers.google.com/apps-script/reference/document/positioned-image.html) by the image's ID.
@param id the image id
@return the positioned image*/ getPositionedImage(
      id: string,
    ): DocumentApp.PositionedImage;
    /**Gets all [`PositionedImage`](https://developers.google.com/apps-script/reference/document/positioned-image.html) objects anchored to the paragraph.
@return a list of positioned images*/ getPositionedImages(): DocumentApp.PositionedImage[];
    /**Retrieves the element's previous sibling element.

The previous sibling has the same parent and precedes the current element.
@return The previous sibling element.*/ getPreviousSibling(): DocumentApp.Element;
    /**Retrieves the spacing after the element, in points.
@return the spacing after the element, in points*/ getSpacingAfter(): number;
    /**Retrieves the spacing before the element, in points.
@return the spacing before the element, in points*/ getSpacingBefore(): number;
    /**Retrieves the contents of the element as a text string.
@return the contents of the element as text string*/ getText(): string;
    /**Gets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.
@return the type of text alignment, or `null` if the text contains multiple types of text
    alignments or if the text alignment has never been set*/ getTextAlignment(): DocumentApp.TextAlignment;
    /**Retrieves the element's [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html).

Use `getType()` to determine the exact type of a given element.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Obtain the first element in the active tab's body.

var firstChild = body.getChild(0);

// Use getType() to determine the element's type.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  Logger.log('The first element is a paragraph.');
} else {
  Logger.log('The first element is not a paragraph.');
}
```
@return The element type.*/ getType(): DocumentApp.ElementType;
    /**Creates and inserts a [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html) at the specified index.
@param childIndex the index at which to insert the element
@return the new horizontal rule element*/ insertHorizontalRule(
      childIndex: Integer,
    ): DocumentApp.HorizontalRule;
    /**Creates and inserts a new [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) from the specified image blob, at the specified
index.
@param childIndex the index at which to insert the element
@param image the image data
@return the inserted inline image element*/ insertInlineImage(
      childIndex: Integer,
      image: BlobSource,
    ): DocumentApp.InlineImage;
    /**Inserts the given [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) at the specified index.
@param childIndex the index at which to insert the element
@param image the image data
@return the inserted inline image element*/ insertInlineImage(
      childIndex: Integer,
      image: DocumentApp.InlineImage,
    ): DocumentApp.InlineImage;
    /**Creates and inserts a new [`PageBreak`](https://developers.google.com/apps-script/reference/document/page-break.html) at the specified index.

Note: [`PageBreaks`](https://developers.google.com/apps-script/reference/document/page-break.html) may not be contained within [`TableCells`](https://developers.google.com/apps-script/reference/document/table-cell.html).
If the current element is contained in a table cell, an exception will be thrown.
@param childIndex the index at which to insert the element
@return the new page break element*/ insertPageBreak(
      childIndex: Integer,
    ): DocumentApp.PageBreak;
    /**Inserts the given [`PageBreak`](https://developers.google.com/apps-script/reference/document/page-break.html) at the specified index.

Note: [`PageBreaks`](https://developers.google.com/apps-script/reference/document/page-break.html) may not be contained within [`TableCells`](https://developers.google.com/apps-script/reference/document/table-cell.html).
If the current element is contained in a table cell, an exception will be thrown.
@param childIndex the index at which to insert the element
@param pageBreak the p[age break to insert
@return the inserted page break element*/ insertPageBreak(
      childIndex: Integer,
      pageBreak: DocumentApp.PageBreak,
    ): DocumentApp.PageBreak;
    /**Inserts the given [`Text`](https://developers.google.com/apps-script/reference/document/text.html) element at the specified index, with the specified text
contents.
@param childIndex the index at which to insert the element
@param text the text element to insert
@return the inserted text element*/ insertText(
      childIndex: Integer,
      text: DocumentApp.Text,
    ): DocumentApp.Text;
    /**Creates and inserts a new text element at the specified index.
@param childIndex the index at which to insert the element
@param text the text contents
@return the new text element*/ insertText(
      childIndex: Integer,
      text: string,
    ): DocumentApp.Text;
    /**Determines whether the element is at the end of the [`Document`](https://developers.google.com/apps-script/reference/document/document.html).
@return Whether the element is at the end of the tab.*/ isAtDocumentEnd(): boolean;
    /**Retrieves the left-to-right setting.
@return the left-to-right setting*/ isLeftToRight(): boolean;
    /**Merges the element with the preceding sibling of the same type.

Only elements of the same [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html) can be merged. Any child elements contained in
the current element are moved to the preceding sibling element.

The current element is removed from the document.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Example 1: Merge paragraphs
// Append two paragraphs to the document's active tab.
var par1 = body.appendParagraph('Paragraph 1.');
var par2 = body.appendParagraph('Paragraph 2.');
// Merge the newly added paragraphs into a single paragraph.
par2.merge();

// Example 2: Merge table cells
// Create a two-dimensional array containing the table's cell contents.
var cells = [
['Row 1, Cell 1', 'Row 1, Cell 2'],
['Row 2, Cell 1', 'Row 2, Cell 2']
];
// Build a table from the array.
var table = body.appendTable(cells);
// Get the first row in the table.
 var row = table.getRow(0);
// Get the two cells in this row.
var cell1 = row.getCell(0);
var cell2 = row.getCell(1);
// Merge the current cell into its preceding sibling element.
var merged = cell2.merge();
```
@return The merged element.*/ merge(): DocumentApp.Paragraph;
    /**Removes the specified child element.
@param child the child element to remove
@return the current element*/ removeChild(
      child: DocumentApp.Element,
    ): DocumentApp.Paragraph;
    /**Removes the element from its parent.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab()
var body = documentTab.getBody();

// Remove all images in the active tab's body.
var imgs = body.getImages();
for (var i = 0; i < imgs.length; i++) {
  imgs[i].removeFromParent();
}
```
@return The removed element.*/ removeFromParent(): DocumentApp.Paragraph;
    /**Removes a [`PositionedImage`](https://developers.google.com/apps-script/reference/document/positioned-image.html) by the image's ID.
@param id the image id
@return whether or not the specified image was removed*/ removePositionedImage(
      id: string,
    ): boolean;
    /**Replaces all occurrences of a given text pattern with a given replacement string, using regular
expressions.

The search pattern is passed as a string, not a JavaScript regular expression object.
Because of this you'll need to escape any backslashes in the pattern.

This methods uses Google's [RE2](https://github.com/google/re2) regular
expression library, which limits the [supported syntax](https://github.com/google/re2/wiki/Syntax).

The provided regular expression pattern is independently matched against each text block
contained in the current element.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Clear the text surrounding "Apps Script", with or without text.
body.replaceText("^.*Apps ?Script.*$", "Apps Script");
```
@param searchPattern the regex pattern to search for
@param replacement the text to use as replacement
@return the current element*/ replaceText(
      searchPattern: string,
      replacement: string,
    ): DocumentApp.Element;
    /**Sets the [`HorizontalAlignment`](https://developers.google.com/apps-script/reference/document/horizontal-alignment.html).
@param alignment the horizontal alignment
@return the current element*/ setAlignment(
      alignment: DocumentApp.HorizontalAlignment,
    ): DocumentApp.Paragraph;
    /**Sets the element's attributes.

The specified attributes parameter must be an object where each property name is an item in
the `DocumentApp.Attribute` enumeration and each property value is the new value to be
applied.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Define a custom paragraph style.
var style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.RIGHT;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
style[DocumentApp.Attribute.FONT_SIZE] = 18;
style[DocumentApp.Attribute.BOLD] = true;

// Append a plain paragraph.
var par = body.appendParagraph('A paragraph with custom style.');

// Apply the custom style.
par.setAttributes(style);
```
@param attributes The element's attributes.
@return The current element.*/ setAttributes(
      attributes: Object,
    ): DocumentApp.Paragraph;
    /**Sets the [`ParagraphHeading`](https://developers.google.com/apps-script/reference/document/paragraph-heading.html).
@param heading the heading
@return the current element*/ setHeading(
      heading: DocumentApp.ParagraphHeading,
    ): DocumentApp.Paragraph;
    /**Sets the end indentation, in points.
@param indentEnd the end indentation, in points
@return the current element*/ setIndentEnd(
      indentEnd: number,
    ): DocumentApp.Paragraph;
    /**Sets the first line indentation, in points.
@param indentFirstLine the first line indentation, in points
@return the current element*/ setIndentFirstLine(
      indentFirstLine: number,
    ): DocumentApp.Paragraph;
    /**Sets the start indentation, in points.
@param indentStart the start indentation, in points
@return the current element*/ setIndentStart(
      indentStart: number,
    ): DocumentApp.Paragraph;
    /**Sets the left-to-right setting.
@param leftToRight the left-to-right setting
@return the current element*/ setLeftToRight(
      leftToRight: boolean,
    ): DocumentApp.Paragraph;
    /**Sets the line spacing, as a quantity indicating the number of lines to use for spacing.
@param multiplier the number of lines
@return the current element*/ setLineSpacing(
      multiplier: number,
    ): DocumentApp.Paragraph;
    /**Sets the link url.
@param url the link url
@return the current element*/ setLinkUrl(url: string): DocumentApp.Paragraph;
    /**Sets the spacing after the element, in points.
@param spacingAfter the spacing after the element, in points
@return the current element*/ setSpacingAfter(
      spacingAfter: number,
    ): DocumentApp.Paragraph;
    /**Sets the spacing before the element, in points.
@param spacingBefore the spacing before the element, in points
@return the current element*/ setSpacingBefore(
      spacingBefore: number,
    ): DocumentApp.Paragraph;
    /**Sets the contents of the paragraph as text.

Note: existing contents are cleared.
@param text the new text contents*/ setText(text: string): void;
    /**Sets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.

```
// Make the entire first paragraph in the active tab be superscript.
var documentTab = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
var text = documentTab.getBody().getParagraphs()[0].editAsText();
text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
```
@param textAlignment the type of text alignment to apply
@return the current element*/ setTextAlignment(
      textAlignment: DocumentApp.TextAlignment,
    ): DocumentApp.Paragraph;
  }
  interface PageBreak {
    /**Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a
parent.
@return The new copy.*/ copy(): DocumentApp.PageBreak;
    /**Retrieves the element's attributes.

The result is an object containing a property for each valid element attribute where each
property name corresponds to an item in the `DocumentApp.Attribute` enumeration.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Append a styled paragraph.
var par = body.appendParagraph('A bold, italicized paragraph.');
par.setBold(true);
par.setItalic(true);

// Retrieve the paragraph's attributes.
var atts = par.getAttributes();

// Log the paragraph attributes.
for (var att in atts) {
  Logger.log(att + ":" + atts[att]);
}
```
@return The element's attributes.*/ getAttributes(): Object;
    /**Retrieves the element's next sibling element.

The next sibling has the same parent and follows the current element.
@return The next sibling element.*/ getNextSibling(): DocumentApp.Element;
    /**Retrieves the element's parent element.

The parent element contains the current element.
@return The parent element.*/ getParent(): DocumentApp.ContainerElement;
    /**Retrieves the element's previous sibling element.

The previous sibling has the same parent and precedes the current element.
@return The previous sibling element.*/ getPreviousSibling(): DocumentApp.Element;
    /**Retrieves the element's [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html).

Use `getType()` to determine the exact type of a given element.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Obtain the first element in the active tab's body.

var firstChild = body.getChild(0);

// Use getType() to determine the element's type.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  Logger.log('The first element is a paragraph.');
} else {
  Logger.log('The first element is not a paragraph.');
}
```
@return The element type.*/ getType(): DocumentApp.ElementType;
    /**Determines whether the element is at the end of the [`Document`](https://developers.google.com/apps-script/reference/document/document.html).
@return Whether the element is at the end of the tab.*/ isAtDocumentEnd(): boolean;
    /**Removes the element from its parent.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab()
var body = documentTab.getBody();

// Remove all images in the active tab's body.
var imgs = body.getImages();
for (var i = 0; i < imgs.length; i++) {
  imgs[i].removeFromParent();
}
```
@return The removed element.*/ removeFromParent(): DocumentApp.PageBreak;
    /**Sets the element's attributes.

The specified attributes parameter must be an object where each property name is an item in
the `DocumentApp.Attribute` enumeration and each property value is the new value to be
applied.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Define a custom paragraph style.
var style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.RIGHT;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
style[DocumentApp.Attribute.FONT_SIZE] = 18;
style[DocumentApp.Attribute.BOLD] = true;

// Append a plain paragraph.
var par = body.appendParagraph('A paragraph with custom style.');

// Apply the custom style.
par.setAttributes(style);
```
@param attributes The element's attributes.
@return The current element.*/ setAttributes(
      attributes: Object,
    ): DocumentApp.PageBreak;
  }
  interface NamedRange {
    /**Gets the ID of this `NamedRange`. The ID is unique within the tab.
@return The range's ID, which is unique within the tab.*/ getId(): string;
    /**Gets the name of this `NamedRange`. The name is not necessarily unique.
@return The range's name, which is not necessarily unique.*/ getName(): string;
    /**Gets the range of elements associated with this `NamedRange`.
@return The range of elements associated with the name and ID.*/ getRange(): DocumentApp.Range;
    /**Removes this `NamedRange` from the tab. This method doesn't delete the contents of the
range; it merely the removes the reference. Calling this method on a `NamedRange` that
has already been removed has no effect.*/ remove(): void;
  }
  interface ListItem {
    /**Creates and inserts a new [`PositionedImage`](https://developers.google.com/apps-script/reference/document/positioned-image.html) from the specified image blob.
@param image the image data
@return the new positioned image*/ addPositionedImage(
      image: BlobSource,
    ): DocumentApp.PositionedImage;
    /**Creates and appends a new [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html).
@return the new horizontal rule*/ appendHorizontalRule(): DocumentApp.HorizontalRule;
    /**Creates and appends a new [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) from the specified image blob.
@param image the image data
@return the appended image*/ appendInlineImage(
      image: BlobSource,
    ): DocumentApp.InlineImage;
    /**Appends the given [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html).
@param image the image data
@return the appended image*/ appendInlineImage(
      image: DocumentApp.InlineImage,
    ): DocumentApp.InlineImage;
    /**Creates and appends a new [`PageBreak`](https://developers.google.com/apps-script/reference/document/page-break.html).

Note: [`PageBreaks`](https://developers.google.com/apps-script/reference/document/page-break.html) may not be contained within [`TableCells`](https://developers.google.com/apps-script/reference/document/table-cell.html).
If the current element is contained in a table cell, an exception will be thrown.
@return the new page break element*/ appendPageBreak(): DocumentApp.PageBreak;
    /**Appends the given [`PageBreak`](https://developers.google.com/apps-script/reference/document/page-break.html).

Note: [`PageBreaks`](https://developers.google.com/apps-script/reference/document/page-break.html) may not be contained within [`TableCells`](https://developers.google.com/apps-script/reference/document/table-cell.html).
If the current element is contained in a table cell, an exception will be thrown.
@param pageBreak the page break to append
@return the appended page break element*/ appendPageBreak(
      pageBreak: DocumentApp.PageBreak,
    ): DocumentApp.PageBreak;
    /**Appends the given [`Text`](https://developers.google.com/apps-script/reference/document/text.html) element.
@param text the text element to append
@return the appended text element*/ appendText(
      text: DocumentApp.Text,
    ): DocumentApp.Text;
    /**Creates and appends a new [`Text`](https://developers.google.com/apps-script/reference/document/text.html) element with the specified contents.
@param text the text contents
@return the new text element*/ appendText(text: string): DocumentApp.Text;
    /**Clears the contents of the element.
@return The current element.*/ clear(): DocumentApp.ListItem;
    /**Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a
parent.
@return The new copy.*/ copy(): DocumentApp.ListItem;
    /**Obtains a [`Text`](https://developers.google.com/apps-script/reference/document/text.html) version of the current element, for editing.

Use `editAsText` for manipulating the elements contents as rich text. The `editAsText` mode ignores non-text elements (such as [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) and [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html)).

Child elements fully contained within a deleted text range are removed from the element.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Insert two paragraphs separated by a paragraph containing an
// horizontal rule.
body.insertParagraph(0, "An editAsText sample.");
body.insertHorizontalRule(0);
body.insertParagraph(0, "An example.");

// Delete " sample.

 An" removing the horizontal rule in the process.
body.editAsText().deleteText(14, 25);
```
@return a text version of the current element*/ editAsText(): DocumentApp.Text;
    /**Searches the contents of the element for a descendant of the specified type.
@param elementType The type of element to search for.
@return A search result indicating the position of the search element.*/ findElement(
      elementType: DocumentApp.ElementType,
    ): DocumentApp.RangeElement;
    /**Searches the contents of the element for a descendant of the specified type, starting from the
specified [`RangeElement`](https://developers.google.com/apps-script/reference/document/range-element.html).

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Define the search parameters.
var searchType = DocumentApp.ElementType.PARAGRAPH;
var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
var searchResult = null;

// Search until the paragraph is found.
while (searchResult = body.findElement(searchType, searchResult)) {
  var par = searchResult.getElement().asParagraph();
  if (par.getHeading() == searchHeading) {
    // Found one, update and stop.
    par.setText('This is the first header.');
    return;
  }
}
```
@param elementType The type of element to search for.
@param from The search result to search from.
@return A search result indicating the next position of the search element.*/ findElement(
      elementType: DocumentApp.ElementType,
      from: DocumentApp.RangeElement,
    ): DocumentApp.RangeElement;
    /**Searches the contents of the element for the specified text pattern using regular expressions.

A subset of the JavaScript regular expression features are not fully supported, such as
capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block
contained in the current element.
@param searchPattern the pattern to search for
@return a search result indicating the position of the search text, or null if there is no
    match*/ findText(searchPattern: string): DocumentApp.RangeElement;
    /**Searches the contents of the element for the specified text pattern, starting from a given
search result.

A subset of the JavaScript regular expression features are not fully supported, such as
capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block
contained in the current element.
@param searchPattern the pattern to search for
@param from the search result to search from
@return a search result indicating the next position of the search text, or null if there is no
    match*/ findText(
      searchPattern: string,
      from: DocumentApp.RangeElement,
    ): DocumentApp.RangeElement;
    /**Retrieves the [`HorizontalAlignment`](https://developers.google.com/apps-script/reference/document/horizontal-alignment.html).
@return the alignment*/ getAlignment(): DocumentApp.HorizontalAlignment;
    /**Retrieves the element's attributes.

The result is an object containing a property for each valid element attribute where each
property name corresponds to an item in the `DocumentApp.Attribute` enumeration.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Append a styled paragraph.
var par = body.appendParagraph('A bold, italicized paragraph.');
par.setBold(true);
par.setItalic(true);

// Retrieve the paragraph's attributes.
var atts = par.getAttributes();

// Log the paragraph attributes.
for (var att in atts) {
  Logger.log(att + ":" + atts[att]);
}
```
@return The element's attributes.*/ getAttributes(): Object;
    /**Retrieves the child element at the specified child index.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Obtain the first element in the tab.
var firstChild = body.getChild(0);

// If it's a paragraph, set its contents.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  firstChild.asParagraph().setText("This is the first paragraph.");
}
```
@param childIndex The index of the child element to retrieve.
@return The child element at the specified index.*/ getChild(
      childIndex: Integer,
    ): DocumentApp.Element;
    /**Retrieves the child index for the specified child element.
@param child The child element for which to retrieve the index.
@return The child index.*/ getChildIndex(child: DocumentApp.Element): Integer;
    /**Retrieves the list item's [`GlyphType`](https://developers.google.com/apps-script/reference/document/glyph-type.html).
@return the glyph type*/ getGlyphType(): DocumentApp.GlyphType;
    /**Retrieves the [`ParagraphHeading`](https://developers.google.com/apps-script/reference/document/paragraph-heading.html).
@return the heading*/ getHeading(): DocumentApp.ParagraphHeading;
    /**Retrieves the end indentation, in points.
@return the end indentation, in points*/ getIndentEnd(): number;
    /**Retrieves the first line indentation, in points.
@return the first line indentation, in points*/ getIndentFirstLine(): number;
    /**Retrieves the start indentation.
@return the start indentation*/ getIndentStart(): number;
    /**Retrieves the line spacing, in points.
@return the line spacing, in points*/ getLineSpacing(): number;
    /**Retrieves the link url.
@return the link url, or null if the element contains multiple values for this attribute*/ getLinkUrl(): string;
    /**Retrieves the list ID.
@return the list ID*/ getListId(): string;
    /**Retrieves the list item's nesting level.

By default, list items have a nesting level of zero. The nesting level determines the glyph
that is used by the list item.
@return the nesting level*/ getNestingLevel(): Integer;
    /**Retrieves the element's next sibling element.

The next sibling has the same parent and follows the current element.
@return The next sibling element.*/ getNextSibling(): DocumentApp.Element;
    /**Retrieves the number of children.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Log the number of elements in the tab.
Logger.log("There are " + body.getNumChildren() +
    " elements in the tab's body.");
```
@return The number of children.*/ getNumChildren(): Integer;
    /**Retrieves the element's parent element.

The parent element contains the current element.
@return The parent element.*/ getParent(): DocumentApp.ContainerElement;
    /**Gets a [`PositionedImage`](https://developers.google.com/apps-script/reference/document/positioned-image.html) by the image's ID.
@param id the image id
@return the positioned image*/ getPositionedImage(
      id: string,
    ): DocumentApp.PositionedImage;
    /**Gets all [`PositionedImage`](https://developers.google.com/apps-script/reference/document/positioned-image.html) objects anchored to the paragraph.
@return a list of positioned images*/ getPositionedImages(): DocumentApp.PositionedImage[];
    /**Retrieves the element's previous sibling element.

The previous sibling has the same parent and precedes the current element.
@return The previous sibling element.*/ getPreviousSibling(): DocumentApp.Element;
    /**Retrieves the spacing after the element, in points.
@return the spacing after the element, in points*/ getSpacingAfter(): number;
    /**Retrieves the spacing before the element, in points.
@return the spacing before the element, in points*/ getSpacingBefore(): number;
    /**Retrieves the contents of the element as a text string.
@return the contents of the element as text string*/ getText(): string;
    /**Gets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.
@return the type of text alignment, or `null` if the text contains multiple types of text
    alignments or if the text alignment has never been set*/ getTextAlignment(): DocumentApp.TextAlignment;
    /**Retrieves the element's [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html).

Use `getType()` to determine the exact type of a given element.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Obtain the first element in the active tab's body.

var firstChild = body.getChild(0);

// Use getType() to determine the element's type.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  Logger.log('The first element is a paragraph.');
} else {
  Logger.log('The first element is not a paragraph.');
}
```
@return The element type.*/ getType(): DocumentApp.ElementType;
    /**Creates and inserts a [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html) at the specified index.
@param childIndex the index at which to insert the element
@return the new horizontal rule element*/ insertHorizontalRule(
      childIndex: Integer,
    ): DocumentApp.HorizontalRule;
    /**Creates and inserts a new [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) from the specified image blob, at the specified
index.
@param childIndex the index at which to insert the element
@param image the image data
@return the inserted inline image element*/ insertInlineImage(
      childIndex: Integer,
      image: BlobSource,
    ): DocumentApp.InlineImage;
    /**Inserts the given [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) at the specified index.
@param childIndex the index at which to insert the element
@param image the image data
@return the inserted inline image element*/ insertInlineImage(
      childIndex: Integer,
      image: DocumentApp.InlineImage,
    ): DocumentApp.InlineImage;
    /**Creates and inserts a new [`PageBreak`](https://developers.google.com/apps-script/reference/document/page-break.html) at the specified index.

Note: [`PageBreaks`](https://developers.google.com/apps-script/reference/document/page-break.html) may not be contained within [`TableCells`](https://developers.google.com/apps-script/reference/document/table-cell.html).
If the current element is contained in a table cell, an exception will be thrown.
@param childIndex the index at which to insert the element
@return the new page break element*/ insertPageBreak(
      childIndex: Integer,
    ): DocumentApp.PageBreak;
    /**Inserts the given [`PageBreak`](https://developers.google.com/apps-script/reference/document/page-break.html) at the specified index.

Note: [`PageBreaks`](https://developers.google.com/apps-script/reference/document/page-break.html) may not be contained within [`TableCells`](https://developers.google.com/apps-script/reference/document/table-cell.html).
If the current element is contained in a table cell, an exception will be thrown.
@param childIndex the index at which to insert the element
@param pageBreak the p[age break to insert
@return the inserted page break element*/ insertPageBreak(
      childIndex: Integer,
      pageBreak: DocumentApp.PageBreak,
    ): DocumentApp.PageBreak;
    /**Inserts the given [`Text`](https://developers.google.com/apps-script/reference/document/text.html) element at the specified index, with the specified text
contents.
@param childIndex the index at which to insert the element
@param text the text element to insert
@return the inserted text element*/ insertText(
      childIndex: Integer,
      text: DocumentApp.Text,
    ): DocumentApp.Text;
    /**Creates and inserts a new text element at the specified index.
@param childIndex the index at which to insert the element
@param text the text contents
@return the new text element*/ insertText(
      childIndex: Integer,
      text: string,
    ): DocumentApp.Text;
    /**Determines whether the element is at the end of the [`Document`](https://developers.google.com/apps-script/reference/document/document.html).
@return Whether the element is at the end of the tab.*/ isAtDocumentEnd(): boolean;
    /**Retrieves the left-to-right setting.
@return the left-to-right setting*/ isLeftToRight(): boolean;
    /**Merges the element with the preceding sibling of the same type.

Only elements of the same [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html) can be merged. Any child elements contained in
the current element are moved to the preceding sibling element.

The current element is removed from the document.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Example 1: Merge paragraphs
// Append two paragraphs to the document's active tab.
var par1 = body.appendParagraph('Paragraph 1.');
var par2 = body.appendParagraph('Paragraph 2.');
// Merge the newly added paragraphs into a single paragraph.
par2.merge();

// Example 2: Merge table cells
// Create a two-dimensional array containing the table's cell contents.
var cells = [
['Row 1, Cell 1', 'Row 1, Cell 2'],
['Row 2, Cell 1', 'Row 2, Cell 2']
];
// Build a table from the array.
var table = body.appendTable(cells);
// Get the first row in the table.
 var row = table.getRow(0);
// Get the two cells in this row.
var cell1 = row.getCell(0);
var cell2 = row.getCell(1);
// Merge the current cell into its preceding sibling element.
var merged = cell2.merge();
```
@return The merged element.*/ merge(): DocumentApp.ListItem;
    /**Removes the specified child element.
@param child the child element to remove
@return the current element*/ removeChild(
      child: DocumentApp.Element,
    ): DocumentApp.ListItem;
    /**Removes the element from its parent.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab()
var body = documentTab.getBody();

// Remove all images in the active tab's body.
var imgs = body.getImages();
for (var i = 0; i < imgs.length; i++) {
  imgs[i].removeFromParent();
}
```
@return The removed element.*/ removeFromParent(): DocumentApp.ListItem;
    /**Removes a [`PositionedImage`](https://developers.google.com/apps-script/reference/document/positioned-image.html) by the image's ID.
@return whether or not the specified image was removed*/ removePositionedImage(
      id: string,
    ): boolean;
    /**Replaces all occurrences of a given text pattern with a given replacement string, using regular
expressions.

The search pattern is passed as a string, not a JavaScript regular expression object.
Because of this you'll need to escape any backslashes in the pattern.

This methods uses Google's [RE2](https://github.com/google/re2) regular
expression library, which limits the [supported syntax](https://github.com/google/re2/wiki/Syntax).

The provided regular expression pattern is independently matched against each text block
contained in the current element.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Clear the text surrounding "Apps Script", with or without text.
body.replaceText("^.*Apps ?Script.*$", "Apps Script");
```
@param searchPattern the regex pattern to search for
@param replacement the text to use as replacement
@return the current element*/ replaceText(
      searchPattern: string,
      replacement: string,
    ): DocumentApp.Element;
    /**Sets the [`HorizontalAlignment`](https://developers.google.com/apps-script/reference/document/horizontal-alignment.html).
@param alignment the horizontal alignment
@return the current element*/ setAlignment(
      alignment: DocumentApp.HorizontalAlignment,
    ): DocumentApp.ListItem;
    /**Sets the element's attributes.

The specified attributes parameter must be an object where each property name is an item in
the `DocumentApp.Attribute` enumeration and each property value is the new value to be
applied.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Define a custom paragraph style.
var style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.RIGHT;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
style[DocumentApp.Attribute.FONT_SIZE] = 18;
style[DocumentApp.Attribute.BOLD] = true;

// Append a plain paragraph.
var par = body.appendParagraph('A paragraph with custom style.');

// Apply the custom style.
par.setAttributes(style);
```
@param attributes The element's attributes.
@return The current element.*/ setAttributes(
      attributes: Object,
    ): DocumentApp.ListItem;
    /**Sets the list item's [`GlyphType`](https://developers.google.com/apps-script/reference/document/glyph-type.html).
@param glyphType the glyph type
@return the current element*/ setGlyphType(
      glyphType: DocumentApp.GlyphType,
    ): DocumentApp.ListItem;
    /**Sets the [`ParagraphHeading`](https://developers.google.com/apps-script/reference/document/paragraph-heading.html).
@param heading the heading
@return the current element*/ setHeading(
      heading: DocumentApp.ParagraphHeading,
    ): DocumentApp.ListItem;
    /**Sets the end indentation, in points.
@param indentEnd the end indentation, in points
@return the current element*/ setIndentEnd(
      indentEnd: number,
    ): DocumentApp.ListItem;
    /**Sets the first line indentation, in points.
@param indentFirstLine the first line indentation, in points
@return the current element*/ setIndentFirstLine(
      indentFirstLine: number,
    ): DocumentApp.ListItem;
    /**Sets the start indentation, in points.
@param indentStart the start indentation, in points
@return the current element*/ setIndentStart(
      indentStart: number,
    ): DocumentApp.ListItem;
    /**Sets the left-to-right setting.
@param leftToRight the left-to-right setting
@return the current element*/ setLeftToRight(
      leftToRight: boolean,
    ): DocumentApp.ListItem;
    /**Sets the line spacing, as a quantity indicating the number of lines to use for spacing.
@param multiplier the number of lines
@return the current element*/ setLineSpacing(
      multiplier: number,
    ): DocumentApp.ListItem;
    /**Sets the link url.
@param url the link url
@return the current element*/ setLinkUrl(url: string): DocumentApp.ListItem;
    /**Sets the list ID.

The list ID is set to the same value for the specified [`ListItem`](https://developers.google.com/apps-script/reference/document/list-item.html). The two [`ListItems`](https://developers.google.com/apps-script/reference/document/list-item.html) will be treated as members of the same list.
@param listItem the list item whose list ID to use
@return the current element*/ setListId(
      listItem: DocumentApp.ListItem,
    ): DocumentApp.ListItem;
    /**Sets the list item's nesting level.

By default, list items have a nesting level of zero. The nesting level determines the glyph
that is used by the list item.
@param nestingLevel the nesting level
@return the current element*/ setNestingLevel(
      nestingLevel: Integer,
    ): DocumentApp.ListItem;
    /**Sets the spacing after the element, in points.
@param spacingAfter the spacing after the element, in points
@return the current element*/ setSpacingAfter(
      spacingAfter: number,
    ): DocumentApp.ListItem;
    /**Sets the spacing before the element, in points.
@param spacingBefore the spacing before the element, in points
@return the current element*/ setSpacingBefore(
      spacingBefore: number,
    ): DocumentApp.ListItem;
    /**Sets the contents of the list item as text.

Note: existing contents are cleared.
@param text the new text contents*/ setText(text: string): void;
    /**Sets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.

```
// Make the entire first paragraph in the active tab be superscript.
var documentTab = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
var text = documentTab.getBody().getParagraphs()[0].editAsText();
text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
```
@param textAlignment the type of text alignment to apply
@return the current element*/ setTextAlignment(
      textAlignment: DocumentApp.TextAlignment,
    ): DocumentApp.ListItem;
  }
  interface InlineImage {
    /**Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a
parent.
@return The new copy.*/ copy(): DocumentApp.InlineImage;
    /**Returns the image's alternate description.
@return the alternate title, or `null` if the element does not have an alternate title*/ getAltDescription(): string;
    /**Returns the image's alternate title.
@return the alternate title, or `null` if the element does not have an alternate title*/ getAltTitle(): string;
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
@return The data as a blob.*/ getAs(contentType: string): Blob;
    /**Retrieves the element's attributes.

The result is an object containing a property for each valid element attribute where each
property name corresponds to an item in the `DocumentApp.Attribute` enumeration.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Append a styled paragraph.
var par = body.appendParagraph('A bold, italicized paragraph.');
par.setBold(true);
par.setItalic(true);

// Retrieve the paragraph's attributes.
var atts = par.getAttributes();

// Log the paragraph attributes.
for (var att in atts) {
  Logger.log(att + ":" + atts[att]);
}
```
@return The element's attributes.*/ getAttributes(): Object;
    /**Return the data inside this object as a blob.
@return The data as a blob.*/ getBlob(): Blob;
    /**Retrieves the image's height, in pixels.
@return the image's height, in pixels*/ getHeight(): Integer;
    /**Retrieves the link URL.
@return the link URL, or `null` if the element contains multiple values for this
    attribute.*/ getLinkUrl(): string;
    /**Retrieves the element's next sibling element.

The next sibling has the same parent and follows the current element.
@return The next sibling element.*/ getNextSibling(): DocumentApp.Element;
    /**Retrieves the element's parent element.

The parent element contains the current element.
@return The parent element.*/ getParent(): DocumentApp.ContainerElement;
    /**Retrieves the element's previous sibling element.

The previous sibling has the same parent and precedes the current element.
@return The previous sibling element.*/ getPreviousSibling(): DocumentApp.Element;
    /**Retrieves the element's [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html).

Use `getType()` to determine the exact type of a given element.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Obtain the first element in the active tab's body.

var firstChild = body.getChild(0);

// Use getType() to determine the element's type.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  Logger.log('The first element is a paragraph.');
} else {
  Logger.log('The first element is not a paragraph.');
}
```
@return The element type.*/ getType(): DocumentApp.ElementType;
    /**Retrieves the image's width, in pixels.
@return the image's width, in pixels*/ getWidth(): Integer;
    /**Determines whether the element is at the end of the [`Document`](https://developers.google.com/apps-script/reference/document/document.html).
@return Whether the element is at the end of the tab.*/ isAtDocumentEnd(): boolean;
    /**Merges the element with the preceding sibling of the same type.

Only elements of the same [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html) can be merged. Any child elements contained in
the current element are moved to the preceding sibling element.

The current element is removed from the document.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Example 1: Merge paragraphs
// Append two paragraphs to the document's active tab.
var par1 = body.appendParagraph('Paragraph 1.');
var par2 = body.appendParagraph('Paragraph 2.');
// Merge the newly added paragraphs into a single paragraph.
par2.merge();

// Example 2: Merge table cells
// Create a two-dimensional array containing the table's cell contents.
var cells = [
['Row 1, Cell 1', 'Row 1, Cell 2'],
['Row 2, Cell 1', 'Row 2, Cell 2']
];
// Build a table from the array.
var table = body.appendTable(cells);
// Get the first row in the table.
 var row = table.getRow(0);
// Get the two cells in this row.
var cell1 = row.getCell(0);
var cell2 = row.getCell(1);
// Merge the current cell into its preceding sibling element.
var merged = cell2.merge();
```
@return The merged element.*/ merge(): DocumentApp.InlineImage;
    /**Removes the element from its parent.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab()
var body = documentTab.getBody();

// Remove all images in the active tab's body.
var imgs = body.getImages();
for (var i = 0; i < imgs.length; i++) {
  imgs[i].removeFromParent();
}
```
@return The removed element.*/ removeFromParent(): DocumentApp.InlineImage;
    /**Sets the image's alternate description. If the given title is `null`, sets the
description to the empty string.
@param description the alternate title
@return the current object*/ setAltDescription(
      description: string,
    ): DocumentApp.InlineImage;
    /**Sets the image's alternate title. If the given title is `null`, sets the title to the
empty string.
@param title the alternate title
@return the current object*/ setAltTitle(
      title: string,
    ): DocumentApp.InlineImage;
    /**Sets the element's attributes.

The specified attributes parameter must be an object where each property name is an item in
the `DocumentApp.Attribute` enumeration and each property value is the new value to be
applied.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Define a custom paragraph style.
var style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.RIGHT;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
style[DocumentApp.Attribute.FONT_SIZE] = 18;
style[DocumentApp.Attribute.BOLD] = true;

// Append a plain paragraph.
var par = body.appendParagraph('A paragraph with custom style.');

// Apply the custom style.
par.setAttributes(style);
```
@param attributes The element's attributes.
@return The current element.*/ setAttributes(
      attributes: Object,
    ): DocumentApp.InlineImage;
    /**Sets the image's height, in pixels.
@param height the image's height, in pixels
@return the current object*/ setHeight(
      height: Integer,
    ): DocumentApp.InlineImage;
    /**Sets the link URL. If the given URL is `null` or an empty string, this method will create
a link with an empty URL that may display as "Invalid link" in Google Docs.
@param url the link URL
@return the current object*/ setLinkUrl(url: string): DocumentApp.InlineImage;
    /**Sets the image's width, in pixels.
@param width the image's width, in pixels
@return the current object*/ setWidth(width: Integer): DocumentApp.InlineImage;
  }
  interface InlineDrawing {
    /**Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a
parent.
@return The new copy.*/ copy(): DocumentApp.InlineDrawing;
    /**Returns the drawing's alternate description.
@return the alternate title, or `null` if the element does not have an alternate title*/ getAltDescription(): string;
    /**Returns the drawing's alternate title.
@return the alternate title, or `null` if the element does not have an alternate title*/ getAltTitle(): string;
    /**Retrieves the element's attributes.

The result is an object containing a property for each valid element attribute where each
property name corresponds to an item in the `DocumentApp.Attribute` enumeration.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Append a styled paragraph.
var par = body.appendParagraph('A bold, italicized paragraph.');
par.setBold(true);
par.setItalic(true);

// Retrieve the paragraph's attributes.
var atts = par.getAttributes();

// Log the paragraph attributes.
for (var att in atts) {
  Logger.log(att + ":" + atts[att]);
}
```
@return The element's attributes.*/ getAttributes(): Object;
    /**Retrieves the element's next sibling element.

The next sibling has the same parent and follows the current element.
@return The next sibling element.*/ getNextSibling(): DocumentApp.Element;
    /**Retrieves the element's parent element.

The parent element contains the current element.
@return The parent element.*/ getParent(): DocumentApp.ContainerElement;
    /**Retrieves the element's previous sibling element.

The previous sibling has the same parent and precedes the current element.
@return The previous sibling element.*/ getPreviousSibling(): DocumentApp.Element;
    /**Retrieves the element's [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html).

Use `getType()` to determine the exact type of a given element.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Obtain the first element in the active tab's body.

var firstChild = body.getChild(0);

// Use getType() to determine the element's type.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  Logger.log('The first element is a paragraph.');
} else {
  Logger.log('The first element is not a paragraph.');
}
```
@return The element type.*/ getType(): DocumentApp.ElementType;
    /**Determines whether the element is at the end of the [`Document`](https://developers.google.com/apps-script/reference/document/document.html).
@return Whether the element is at the end of the tab.*/ isAtDocumentEnd(): boolean;
    /**Merges the element with the preceding sibling of the same type.

Only elements of the same [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html) can be merged. Any child elements contained in
the current element are moved to the preceding sibling element.

The current element is removed from the document.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Example 1: Merge paragraphs
// Append two paragraphs to the document's active tab.
var par1 = body.appendParagraph('Paragraph 1.');
var par2 = body.appendParagraph('Paragraph 2.');
// Merge the newly added paragraphs into a single paragraph.
par2.merge();

// Example 2: Merge table cells
// Create a two-dimensional array containing the table's cell contents.
var cells = [
['Row 1, Cell 1', 'Row 1, Cell 2'],
['Row 2, Cell 1', 'Row 2, Cell 2']
];
// Build a table from the array.
var table = body.appendTable(cells);
// Get the first row in the table.
 var row = table.getRow(0);
// Get the two cells in this row.
var cell1 = row.getCell(0);
var cell2 = row.getCell(1);
// Merge the current cell into its preceding sibling element.
var merged = cell2.merge();
```
@return The merged element.*/ merge(): DocumentApp.InlineDrawing;
    /**Removes the element from its parent.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab()
var body = documentTab.getBody();

// Remove all images in the active tab's body.
var imgs = body.getImages();
for (var i = 0; i < imgs.length; i++) {
  imgs[i].removeFromParent();
}
```
@return The removed element.*/ removeFromParent(): DocumentApp.InlineDrawing;
    /**Sets the drawing's alternate description. If the given title is `null`, sets the
description to the empty string.
@param description the alternate title
@return the current object*/ setAltDescription(
      description: string,
    ): DocumentApp.InlineDrawing;
    /**Sets the drawing's alternate title. If the given title is `null`, sets the title to the
empty string.
@param title the alternate title
@return the current object*/ setAltTitle(
      title: string,
    ): DocumentApp.InlineDrawing;
    /**Sets the element's attributes.

The specified attributes parameter must be an object where each property name is an item in
the `DocumentApp.Attribute` enumeration and each property value is the new value to be
applied.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Define a custom paragraph style.
var style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.RIGHT;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
style[DocumentApp.Attribute.FONT_SIZE] = 18;
style[DocumentApp.Attribute.BOLD] = true;

// Append a plain paragraph.
var par = body.appendParagraph('A paragraph with custom style.');

// Apply the custom style.
par.setAttributes(style);
```
@param attributes The element's attributes.
@return The current element.*/ setAttributes(
      attributes: Object,
    ): DocumentApp.InlineDrawing;
  }
  interface HorizontalRule {
    /**Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a
parent.
@return The new copy.*/ copy(): DocumentApp.HorizontalRule;
    /**Retrieves the element's attributes.

The result is an object containing a property for each valid element attribute where each
property name corresponds to an item in the `DocumentApp.Attribute` enumeration.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Append a styled paragraph.
var par = body.appendParagraph('A bold, italicized paragraph.');
par.setBold(true);
par.setItalic(true);

// Retrieve the paragraph's attributes.
var atts = par.getAttributes();

// Log the paragraph attributes.
for (var att in atts) {
  Logger.log(att + ":" + atts[att]);
}
```
@return The element's attributes.*/ getAttributes(): Object;
    /**Retrieves the element's next sibling element.

The next sibling has the same parent and follows the current element.
@return The next sibling element.*/ getNextSibling(): DocumentApp.Element;
    /**Retrieves the element's parent element.

The parent element contains the current element.
@return The parent element.*/ getParent(): DocumentApp.ContainerElement;
    /**Retrieves the element's previous sibling element.

The previous sibling has the same parent and precedes the current element.
@return The previous sibling element.*/ getPreviousSibling(): DocumentApp.Element;
    /**Retrieves the element's [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html).

Use `getType()` to determine the exact type of a given element.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Obtain the first element in the active tab's body.

var firstChild = body.getChild(0);

// Use getType() to determine the element's type.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  Logger.log('The first element is a paragraph.');
} else {
  Logger.log('The first element is not a paragraph.');
}
```
@return The element type.*/ getType(): DocumentApp.ElementType;
    /**Determines whether the element is at the end of the [`Document`](https://developers.google.com/apps-script/reference/document/document.html).
@return Whether the element is at the end of the tab.*/ isAtDocumentEnd(): boolean;
    /**Removes the element from its parent.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab()
var body = documentTab.getBody();

// Remove all images in the active tab's body.
var imgs = body.getImages();
for (var i = 0; i < imgs.length; i++) {
  imgs[i].removeFromParent();
}
```
@return The removed element.*/ removeFromParent(): DocumentApp.HorizontalRule;
    /**Sets the element's attributes.

The specified attributes parameter must be an object where each property name is an item in
the `DocumentApp.Attribute` enumeration and each property value is the new value to be
applied.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Define a custom paragraph style.
var style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.RIGHT;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
style[DocumentApp.Attribute.FONT_SIZE] = 18;
style[DocumentApp.Attribute.BOLD] = true;

// Append a plain paragraph.
var par = body.appendParagraph('A paragraph with custom style.');

// Apply the custom style.
par.setAttributes(style);
```
@param attributes The element's attributes.
@return The current element.*/ setAttributes(
      attributes: Object,
    ): DocumentApp.HorizontalRule;
  }
  interface HorizontalAlignment {}
  interface _HorizontalAlignment {
    /**The center-alignment option.*/ CENTER: HorizontalAlignment;
    /**The justify-alignment option.*/ JUSTIFY: HorizontalAlignment;
    /**The left-alignment option.*/ LEFT: HorizontalAlignment;
    /**The right-alignment option.*/ RIGHT: HorizontalAlignment;
  }
  interface HeaderSection {
    /**Creates and appends a new [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html).

The [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html) will be contained in a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@return The new horizontal rule.*/ appendHorizontalRule(): DocumentApp.HorizontalRule;
    /**Creates and appends a new [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) from the specified image blob.

The image will be contained in a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@param image The image data.
@return The appended image.*/ appendImage(
      image: BlobSource,
    ): DocumentApp.InlineImage;
    /**Appends the given [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html).

The [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) will be contained in a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).

Use this version of `appendImage` when appending a copy of an existing [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html).
@param image The image data.
@return The appended image.*/ appendImage(
      image: DocumentApp.InlineImage,
    ): DocumentApp.InlineImage;
    /**Appends the given [`ListItem`](https://developers.google.com/apps-script/reference/document/list-item.html).

Use this version of `appendListItem` when appending a copy of an existing [`ListItem`](https://developers.google.com/apps-script/reference/document/list-item.html).
@param listItem The list item to append.
@return The appended list item.*/ appendListItem(
      listItem: DocumentApp.ListItem,
    ): DocumentApp.ListItem;
    /**Creates and appends a new [`ListItem`](https://developers.google.com/apps-script/reference/document/list-item.html) containing the specified text contents.

Consecutive list items are added as part of the same list.
@param text The list item's text contents.
@return The new list item.*/ appendListItem(text: string): DocumentApp.ListItem;
    /**Appends the given [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).

Use this version of `appendParagraph` when appending a copy of an existing [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@param paragraph The paragraph to append.
@return The appended paragraph.*/ appendParagraph(
      paragraph: DocumentApp.Paragraph,
    ): DocumentApp.Paragraph;
    /**Creates and appends a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html) containing the specified text contents.
@param text The paragraph's text contents.
@return The new paragraph.*/ appendParagraph(
      text: string,
    ): DocumentApp.Paragraph;
    /**Creates and appends a new [`Table`](https://developers.google.com/apps-script/reference/document/table.html).

This method will also append an empty paragraph after the table, since Google Docs documents
cannot end with a table.
@return The new table.*/ appendTable(): DocumentApp.Table;
    /**Appends the given [`Table`](https://developers.google.com/apps-script/reference/document/table.html).

Use this version of `appendTable` when appending a copy of an existing [`Table`](https://developers.google.com/apps-script/reference/document/table.html).
This method will also append an empty paragraph after the table, since Google Docs documents
cannot end with a table.
@param table The table to append.
@return The appended table.*/ appendTable(
      table: DocumentApp.Table,
    ): DocumentApp.Table;
    /**Appends a new [`Table`](https://developers.google.com/apps-script/reference/document/table.html) containing a [`TableCell`](https://developers.google.com/apps-script/reference/document/table-cell.html) for each specified string value.

This method will also append an empty paragraph after the table, since Google Docs documents
cannot end with a table.
@param cells The text contents of the table cells to add to the new table.
@return The appended table.*/ appendTable(cells: string[][]): DocumentApp.Table;
    /**Clears the contents of the element.
@return The current element.*/ clear(): DocumentApp.HeaderSection;
    /**Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a
parent.
@return The new copy.*/ copy(): DocumentApp.HeaderSection;
    /**Obtains a [`Text`](https://developers.google.com/apps-script/reference/document/text.html) version of the current element, for editing.

Use `editAsText` for manipulating the elements contents as rich text. The `editAsText` mode ignores non-text elements (such as [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) and [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html)).

Child elements fully contained within a deleted text range are removed from the element.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Insert two paragraphs separated by a paragraph containing an
// horizontal rule.
body.insertParagraph(0, "An editAsText sample.");
body.insertHorizontalRule(0);
body.insertParagraph(0, "An example.");

// Delete " sample.

 An" removing the horizontal rule in the process.
body.editAsText().deleteText(14, 25);
```
@return a text version of the current element*/ editAsText(): DocumentApp.Text;
    /**Searches the contents of the element for a descendant of the specified type.
@param elementType The type of element to search for.
@return A search result indicating the position of the search element.*/ findElement(
      elementType: DocumentApp.ElementType,
    ): DocumentApp.RangeElement;
    /**Searches the contents of the element for a descendant of the specified type, starting from the
specified [`RangeElement`](https://developers.google.com/apps-script/reference/document/range-element.html).

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Define the search parameters.
var searchType = DocumentApp.ElementType.PARAGRAPH;
var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
var searchResult = null;

// Search until the paragraph is found.
while (searchResult = body.findElement(searchType, searchResult)) {
  var par = searchResult.getElement().asParagraph();
  if (par.getHeading() == searchHeading) {
    // Found one, update and stop.
    par.setText('This is the first header.');
    return;
  }
}
```
@param elementType The type of element to search for.
@param from The search result to search from.
@return A search result indicating the next position of the search element.*/ findElement(
      elementType: DocumentApp.ElementType,
      from: DocumentApp.RangeElement,
    ): DocumentApp.RangeElement;
    /**Searches the contents of the element for the specified text pattern using regular expressions.

A subset of the JavaScript regular expression features are not fully supported, such as
capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block
contained in the current element.
@param searchPattern the pattern to search for
@return a search result indicating the position of the search text, or null if there is no
    match*/ findText(searchPattern: string): DocumentApp.RangeElement;
    /**Searches the contents of the element for the specified text pattern, starting from a given
search result.

A subset of the JavaScript regular expression features are not fully supported, such as
capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block
contained in the current element.
@param searchPattern the pattern to search for
@param from the search result to search from
@return a search result indicating the next position of the search text, or null if there is no
    match*/ findText(
      searchPattern: string,
      from: DocumentApp.RangeElement,
    ): DocumentApp.RangeElement;
    /**Retrieves the element's attributes.

The result is an object containing a property for each valid element attribute where each
property name corresponds to an item in the `DocumentApp.Attribute` enumeration.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Append a styled paragraph.
var par = body.appendParagraph('A bold, italicized paragraph.');
par.setBold(true);
par.setItalic(true);

// Retrieve the paragraph's attributes.
var atts = par.getAttributes();

// Log the paragraph attributes.
for (var att in atts) {
  Logger.log(att + ":" + atts[att]);
}
```
@return The element's attributes.*/ getAttributes(): Object;
    /**Retrieves the child element at the specified child index.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Obtain the first element in the tab.
var firstChild = body.getChild(0);

// If it's a paragraph, set its contents.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  firstChild.asParagraph().setText("This is the first paragraph.");
}
```
@param childIndex The index of the child element to retrieve.
@return The child element at the specified index.*/ getChild(
      childIndex: Integer,
    ): DocumentApp.Element;
    /**Retrieves the child index for the specified child element.
@param child The child element for which to retrieve the index.
@return The child index.*/ getChildIndex(child: DocumentApp.Element): Integer;
    /**Retrieves all the [`Footnotes`](https://developers.google.com/apps-script/reference/document/footnote.html) contained in the section.
@deprecated
@return The section footnotes.*/ getFootnotes(): DocumentApp.Footnote[];
    /**Retrieves all the [`InlineImages`](https://developers.google.com/apps-script/reference/document/inline-image.html) contained in the section.
@return The section images.*/ getImages(): DocumentApp.InlineImage[];
    /**Retrieves the link url.
@deprecated
@return the link url, or null if the element contains multiple values for this attribute*/ getLinkUrl(): string;
    /**Retrieves all the [`ListItems`](https://developers.google.com/apps-script/reference/document/list-item.html) contained in the section.
@return The section list items.*/ getListItems(): DocumentApp.ListItem[];
    /**Retrieves the element's next sibling element.

The next sibling has the same parent and follows the current element.
@deprecated
@return The next sibling element.*/ getNextSibling(): DocumentApp.Element;
    /**Retrieves the number of children.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Log the number of elements in the tab.
Logger.log("There are " + body.getNumChildren() +
    " elements in the tab's body.");
```
@return The number of children.*/ getNumChildren(): Integer;
    /**Retrieves all the [`Paragraphs`](https://developers.google.com/apps-script/reference/document/paragraph.html) contained in the section (including [`ListItems`](https://developers.google.com/apps-script/reference/document/list-item.html)).
@return The section paragraphs.*/ getParagraphs(): DocumentApp.Paragraph[];
    /**Retrieves the element's parent element.

The parent element contains the current element.
@return The parent element.*/ getParent(): DocumentApp.ContainerElement;
    /**Retrieves the element's previous sibling element.

The previous sibling has the same parent and precedes the current element.
@deprecated
@return The previous sibling element.*/ getPreviousSibling(): DocumentApp.Element;
    /**Retrieves all the [`Tables`](https://developers.google.com/apps-script/reference/document/table.html) contained in the section.
@return The section tables.*/ getTables(): DocumentApp.Table[];
    /**Retrieves the contents of the element as a text string.
@return the contents of the element as text string*/ getText(): string;
    /**Gets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.
@return the type of text alignment, or `null` if the text contains multiple types of text
    alignments or if the text alignment has never been set*/ getTextAlignment(): DocumentApp.TextAlignment;
    /**Retrieves the element's [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html).

Use `getType()` to determine the exact type of a given element.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Obtain the first element in the active tab's body.

var firstChild = body.getChild(0);

// Use getType() to determine the element's type.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  Logger.log('The first element is a paragraph.');
} else {
  Logger.log('The first element is not a paragraph.');
}
```
@return The element type.*/ getType(): DocumentApp.ElementType;
    /**Creates and inserts a new [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html) at the specified index.

The [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html) will be contained in a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@param childIndex The index at which to insert the element.
@return The new horizontal rule.*/ insertHorizontalRule(
      childIndex: Integer,
    ): DocumentApp.HorizontalRule;
    /**Creates and inserts an [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) from the specified image blob, at the specified
index.
@param childIndex The index at which to insert the element.
@param image The image data.
@return The inserted inline image.*/ insertImage(
      childIndex: Integer,
      image: BlobSource,
    ): DocumentApp.InlineImage;
    /**Inserts the given [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) at the specified index.

The image will be contained in a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@param childIndex The index at which to insert the element.
@param image The image to insert.
@return The inserted inline image.*/ insertImage(
      childIndex: Integer,
      image: DocumentApp.InlineImage,
    ): DocumentApp.InlineImage;
    /**Inserts the given [`ListItem`](https://developers.google.com/apps-script/reference/document/list-item.html) at the specified index.
@param childIndex The index at which to insert.
@param listItem The list item to insert.
@return The inserted list item.*/ insertListItem(
      childIndex: Integer,
      listItem: DocumentApp.ListItem,
    ): DocumentApp.ListItem;
    /**Creates and inserts a new [`ListItem`](https://developers.google.com/apps-script/reference/document/list-item.html) at the specified index, containing the specified
text contents.
@param childIndex The index at which to insert.
@param text The list item's text contents.
@return The new list item.*/ insertListItem(
      childIndex: Integer,
      text: string,
    ): DocumentApp.ListItem;
    /**Inserts the given [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html) at the specified index.
@param childIndex The index at which to insert.
@param paragraph The paragraph to insert.
@return The inserted paragraph.*/ insertParagraph(
      childIndex: Integer,
      paragraph: DocumentApp.Paragraph,
    ): DocumentApp.Paragraph;
    /**Creates and inserts a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html) at the specified index, containing the specified
text contents.
@param childIndex The index at which to insert.
@param text The paragraph's text contents.
@return The new paragraph.*/ insertParagraph(
      childIndex: Integer,
      text: string,
    ): DocumentApp.Paragraph;
    /**Creates and inserts a new [`Table`](https://developers.google.com/apps-script/reference/document/table.html) at the specified index.
@param childIndex The index at which to insert.
@return The new table.*/ insertTable(childIndex: Integer): DocumentApp.Table;
    /**Inserts the given [`Table`](https://developers.google.com/apps-script/reference/document/table.html) at the specified index.
@param childIndex The index at which to insert.
@param table The table to insert.
@return The inserted table.*/ insertTable(
      childIndex: Integer,
      table: DocumentApp.Table,
    ): DocumentApp.Table;
    /**Creates and inserts a new [`Table`](https://developers.google.com/apps-script/reference/document/table.html) containing the specified cells, at the specified index.
@param childIndex The index at which to insert.
@param cells The text contents of the table cells to add to the new table.
@return The new table.*/ insertTable(
      childIndex: Integer,
      cells: string[][],
    ): DocumentApp.Table;
    /**Determines whether the element is at the end of the [`Document`](https://developers.google.com/apps-script/reference/document/document.html).
@deprecated
@return Whether the element is at the end of the tab.*/ isAtDocumentEnd(): boolean;
    /**Removes the specified child element.
@param child The child element to remove.
@return The current element.*/ removeChild(
      child: DocumentApp.Element,
    ): DocumentApp.HeaderSection;
    /**Removes the element from its parent.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab()
var body = documentTab.getBody();

// Remove all images in the active tab's body.
var imgs = body.getImages();
for (var i = 0; i < imgs.length; i++) {
  imgs[i].removeFromParent();
}
```
@return The removed element.*/ removeFromParent(): DocumentApp.HeaderSection;
    /**Replaces all occurrences of a given text pattern with a given replacement string, using regular
expressions.

The search pattern is passed as a string, not a JavaScript regular expression object.
Because of this you'll need to escape any backslashes in the pattern.

This methods uses Google's [RE2](https://github.com/google/re2) regular
expression library, which limits the [supported syntax](https://github.com/google/re2/wiki/Syntax).

The provided regular expression pattern is independently matched against each text block
contained in the current element.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Clear the text surrounding "Apps Script", with or without text.
body.replaceText("^.*Apps ?Script.*$", "Apps Script");
```
@param searchPattern the regex pattern to search for
@param replacement the text to use as replacement
@return the current element*/ replaceText(
      searchPattern: string,
      replacement: string,
    ): DocumentApp.Element;
    /**Sets the element's attributes.

The specified attributes parameter must be an object where each property name is an item in
the `DocumentApp.Attribute` enumeration and each property value is the new value to be
applied.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Define a custom paragraph style.
var style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.RIGHT;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
style[DocumentApp.Attribute.FONT_SIZE] = 18;
style[DocumentApp.Attribute.BOLD] = true;

// Append a plain paragraph.
var par = body.appendParagraph('A paragraph with custom style.');

// Apply the custom style.
par.setAttributes(style);
```
@param attributes The element's attributes.
@return The current element.*/ setAttributes(
      attributes: Object,
    ): DocumentApp.HeaderSection;
    /**Sets the link url.
@deprecated
@param url the link url
@return the current element*/ setLinkUrl(
      url: string,
    ): DocumentApp.HeaderSection;
    /**Sets the contents as plain text.

Note: existing contents are cleared.
@param text The new text contents.
@return The current element.*/ setText(text: string): DocumentApp.HeaderSection;
    /**Sets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.

```
// Make the entire first paragraph in the active tab be superscript.
var documentTab = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
var text = documentTab.getBody().getParagraphs()[0].editAsText();
text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
```
@param textAlignment the type of text alignment to apply
@return the current element*/ setTextAlignment(
      textAlignment: DocumentApp.TextAlignment,
    ): DocumentApp.HeaderSection;
  }
  interface GlyphType {}
  interface _GlyphType {
    /**The default bullet, circular and filled.*/ BULLET: GlyphType;
    /**A hollow bullet.*/ HOLLOW_BULLET: GlyphType;
    /**A latin, lowercase bullet.*/ LATIN_LOWER: GlyphType;
    /**A latin, uppercase bullet.*/ LATIN_UPPER: GlyphType;
    /**A number based bullet.*/ NUMBER: GlyphType;
    /**A roman numeral, lowercase bullet.*/ ROMAN_LOWER: GlyphType;
    /**A roman numeral, uppercase bullet.*/ ROMAN_UPPER: GlyphType;
    /**A square bullet.*/ SQUARE_BULLET: GlyphType;
  }
  interface FootnoteSection {
    /**Appends the given [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).

Use this version of `appendParagraph` when appending a copy of an existing [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@param paragraph The paragraph to append.
@return The appended paragraph.*/ appendParagraph(
      paragraph: DocumentApp.Paragraph,
    ): DocumentApp.Paragraph;
    /**Creates and appends a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html) containing the specified text contents.
@param text The paragraph's text contents.
@return The new paragraph.*/ appendParagraph(
      text: string,
    ): DocumentApp.Paragraph;
    /**Clears the contents of the element.
@return The current element.*/ clear(): DocumentApp.FootnoteSection;
    /**Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a
parent.
@return The new copy.*/ copy(): DocumentApp.FootnoteSection;
    /**Obtains a [`Text`](https://developers.google.com/apps-script/reference/document/text.html) version of the current element, for editing.

Use `editAsText` for manipulating the elements contents as rich text. The `editAsText` mode ignores non-text elements (such as [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) and [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html)).

Child elements fully contained within a deleted text range are removed from the element.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Insert two paragraphs separated by a paragraph containing an
// horizontal rule.
body.insertParagraph(0, "An editAsText sample.");
body.insertHorizontalRule(0);
body.insertParagraph(0, "An example.");

// Delete " sample.

 An" removing the horizontal rule in the process.
body.editAsText().deleteText(14, 25);
```
@return a text version of the current element*/ editAsText(): DocumentApp.Text;
    /**Searches the contents of the element for a descendant of the specified type.
@param elementType The type of element to search for.
@return A search result indicating the position of the search element.*/ findElement(
      elementType: DocumentApp.ElementType,
    ): DocumentApp.RangeElement;
    /**Searches the contents of the element for a descendant of the specified type, starting from the
specified [`RangeElement`](https://developers.google.com/apps-script/reference/document/range-element.html).

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Define the search parameters.
var searchType = DocumentApp.ElementType.PARAGRAPH;
var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
var searchResult = null;

// Search until the paragraph is found.
while (searchResult = body.findElement(searchType, searchResult)) {
  var par = searchResult.getElement().asParagraph();
  if (par.getHeading() == searchHeading) {
    // Found one, update and stop.
    par.setText('This is the first header.');
    return;
  }
}
```
@param elementType The type of element to search for.
@param from The search result to search from.
@return A search result indicating the next position of the search element.*/ findElement(
      elementType: DocumentApp.ElementType,
      from: DocumentApp.RangeElement,
    ): DocumentApp.RangeElement;
    /**Searches the contents of the element for the specified text pattern using regular expressions.

A subset of the JavaScript regular expression features are not fully supported, such as
capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block
contained in the current element.
@param searchPattern the pattern to search for
@return a search result indicating the position of the search text, or null if there is no
    match*/ findText(searchPattern: string): DocumentApp.RangeElement;
    /**Searches the contents of the element for the specified text pattern, starting from a given
search result.

A subset of the JavaScript regular expression features are not fully supported, such as
capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block
contained in the current element.
@param searchPattern the pattern to search for
@param from the search result to search from
@return a search result indicating the next position of the search text, or null if there is no
    match*/ findText(
      searchPattern: string,
      from: DocumentApp.RangeElement,
    ): DocumentApp.RangeElement;
    /**Retrieves the element's attributes.

The result is an object containing a property for each valid element attribute where each
property name corresponds to an item in the `DocumentApp.Attribute` enumeration.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Append a styled paragraph.
var par = body.appendParagraph('A bold, italicized paragraph.');
par.setBold(true);
par.setItalic(true);

// Retrieve the paragraph's attributes.
var atts = par.getAttributes();

// Log the paragraph attributes.
for (var att in atts) {
  Logger.log(att + ":" + atts[att]);
}
```
@return The element's attributes.*/ getAttributes(): Object;
    /**Retrieves the child element at the specified child index.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Obtain the first element in the tab.
var firstChild = body.getChild(0);

// If it's a paragraph, set its contents.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  firstChild.asParagraph().setText("This is the first paragraph.");
}
```
@param childIndex The index of the child element to retrieve.
@return The child element at the specified index.*/ getChild(
      childIndex: Integer,
    ): DocumentApp.Element;
    /**Retrieves the child index for the specified child element.
@param child The child element for which to retrieve the index.
@return The child index.*/ getChildIndex(child: DocumentApp.Element): Integer;
    /**Retrieves all the [`Footnotes`](https://developers.google.com/apps-script/reference/document/footnote.html) contained in the section.
@deprecated
@return The section footnotes.*/ getFootnotes(): DocumentApp.Footnote[];
    /**Retrieves the link url.
@deprecated
@return the link url, or null if the element contains multiple values for this attribute*/ getLinkUrl(): string;
    /**Retrieves the element's next sibling element.

The next sibling has the same parent and follows the current element.
@return The next sibling element.*/ getNextSibling(): DocumentApp.Element;
    /**Retrieves the number of children.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Log the number of elements in the tab.
Logger.log("There are " + body.getNumChildren() +
    " elements in the tab's body.");
```
@return The number of children.*/ getNumChildren(): Integer;
    /**Retrieves all the [`Paragraphs`](https://developers.google.com/apps-script/reference/document/paragraph.html) contained in the section (including [`ListItems`](https://developers.google.com/apps-script/reference/document/list-item.html)).
@return The section paragraphs.*/ getParagraphs(): DocumentApp.Paragraph[];
    /**Retrieves the element's parent element.

The parent element contains the current element.
@return The parent element.*/ getParent(): DocumentApp.ContainerElement;
    /**Retrieves the element's previous sibling element.

The previous sibling has the same parent and precedes the current element.
@return The previous sibling element.*/ getPreviousSibling(): DocumentApp.Element;
    /**Retrieves the contents of the element as a text string.
@return the contents of the element as text string*/ getText(): string;
    /**Gets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.
@return the type of text alignment, or `null` if the text contains multiple types of text
    alignments or if the text alignment has never been set*/ getTextAlignment(): DocumentApp.TextAlignment;
    /**Retrieves the element's [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html).

Use `getType()` to determine the exact type of a given element.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Obtain the first element in the active tab's body.

var firstChild = body.getChild(0);

// Use getType() to determine the element's type.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  Logger.log('The first element is a paragraph.');
} else {
  Logger.log('The first element is not a paragraph.');
}
```
@return The element type.*/ getType(): DocumentApp.ElementType;
    /**Inserts the given [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html) at the specified index.
@param childIndex The index at which to insert.
@param paragraph The paragraph to insert.
@return The inserted paragraph.*/ insertParagraph(
      childIndex: Integer,
      paragraph: DocumentApp.Paragraph,
    ): DocumentApp.Paragraph;
    /**Creates and inserts a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html) at the specified index, containing the specified
text contents.
@param childIndex The index at which to insert.
@param text The paragraph's text contents.
@return The new paragraph.*/ insertParagraph(
      childIndex: Integer,
      text: string,
    ): DocumentApp.Paragraph;
    /**Determines whether the element is at the end of the [`Document`](https://developers.google.com/apps-script/reference/document/document.html).
@deprecated
@return Whether the element is at the end of the tab.*/ isAtDocumentEnd(): boolean;
    /**Removes the specified child element.
@param child The child element to remove.
@return The current element.*/ removeChild(
      child: DocumentApp.Element,
    ): DocumentApp.FootnoteSection;
    /**Removes the element from its parent.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab()
var body = documentTab.getBody();

// Remove all images in the active tab's body.
var imgs = body.getImages();
for (var i = 0; i < imgs.length; i++) {
  imgs[i].removeFromParent();
}
```
@return The removed element.*/ removeFromParent(): DocumentApp.FootnoteSection;
    /**Replaces all occurrences of a given text pattern with a given replacement string, using regular
expressions.

The search pattern is passed as a string, not a JavaScript regular expression object.
Because of this you'll need to escape any backslashes in the pattern.

This methods uses Google's [RE2](https://github.com/google/re2) regular
expression library, which limits the [supported syntax](https://github.com/google/re2/wiki/Syntax).

The provided regular expression pattern is independently matched against each text block
contained in the current element.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Clear the text surrounding "Apps Script", with or without text.
body.replaceText("^.*Apps ?Script.*$", "Apps Script");
```
@param searchPattern the regex pattern to search for
@param replacement the text to use as replacement
@return the current element*/ replaceText(
      searchPattern: string,
      replacement: string,
    ): DocumentApp.Element;
    /**Sets the element's attributes.

The specified attributes parameter must be an object where each property name is an item in
the `DocumentApp.Attribute` enumeration and each property value is the new value to be
applied.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Define a custom paragraph style.
var style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.RIGHT;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
style[DocumentApp.Attribute.FONT_SIZE] = 18;
style[DocumentApp.Attribute.BOLD] = true;

// Append a plain paragraph.
var par = body.appendParagraph('A paragraph with custom style.');

// Apply the custom style.
par.setAttributes(style);
```
@param attributes The element's attributes.
@return The current element.*/ setAttributes(
      attributes: Object,
    ): DocumentApp.FootnoteSection;
    /**Sets the link url.
@deprecated
@param url the link url
@return the current element*/ setLinkUrl(
      url: string,
    ): DocumentApp.FootnoteSection;
    /**Sets the contents as plain text.

Note: existing contents are cleared.
@param text The new text contents.
@return The current element.*/ setText(
      text: string,
    ): DocumentApp.FootnoteSection;
    /**Sets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.

```
// Make the entire first paragraph in the active tab be superscript.
var documentTab = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
var text = documentTab.getBody().getParagraphs()[0].editAsText();
text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
```
@param textAlignment the type of text alignment to apply
@return the current element*/ setTextAlignment(
      textAlignment: DocumentApp.TextAlignment,
    ): DocumentApp.FootnoteSection;
  }
  interface Footnote {
    /**Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a
parent.
@return The new copy.*/ copy(): DocumentApp.Footnote;
    /**Retrieves the element's attributes.

The result is an object containing a property for each valid element attribute where each
property name corresponds to an item in the `DocumentApp.Attribute` enumeration.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Append a styled paragraph.
var par = body.appendParagraph('A bold, italicized paragraph.');
par.setBold(true);
par.setItalic(true);

// Retrieve the paragraph's attributes.
var atts = par.getAttributes();

// Log the paragraph attributes.
for (var att in atts) {
  Logger.log(att + ":" + atts[att]);
}
```
@return The element's attributes.*/ getAttributes(): Object;
    /**Retrieves the contents of the footnote element.
@return the footnote section*/ getFootnoteContents(): DocumentApp.FootnoteSection;
    /**Retrieves the element's next sibling element.

The next sibling has the same parent and follows the current element.
@return The next sibling element.*/ getNextSibling(): DocumentApp.Element;
    /**Retrieves the element's parent element.

The parent element contains the current element.
@return The parent element.*/ getParent(): DocumentApp.ContainerElement;
    /**Retrieves the element's previous sibling element.

The previous sibling has the same parent and precedes the current element.
@return The previous sibling element.*/ getPreviousSibling(): DocumentApp.Element;
    /**Retrieves the element's [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html).

Use `getType()` to determine the exact type of a given element.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Obtain the first element in the active tab's body.

var firstChild = body.getChild(0);

// Use getType() to determine the element's type.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  Logger.log('The first element is a paragraph.');
} else {
  Logger.log('The first element is not a paragraph.');
}
```
@return The element type.*/ getType(): DocumentApp.ElementType;
    /**Determines whether the element is at the end of the [`Document`](https://developers.google.com/apps-script/reference/document/document.html).
@return Whether the element is at the end of the tab.*/ isAtDocumentEnd(): boolean;
    /**Removes the element from its parent.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab()
var body = documentTab.getBody();

// Remove all images in the active tab's body.
var imgs = body.getImages();
for (var i = 0; i < imgs.length; i++) {
  imgs[i].removeFromParent();
}
```
@return The removed element.*/ removeFromParent(): DocumentApp.Footnote;
    /**Sets the element's attributes.

The specified attributes parameter must be an object where each property name is an item in
the `DocumentApp.Attribute` enumeration and each property value is the new value to be
applied.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Define a custom paragraph style.
var style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.RIGHT;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
style[DocumentApp.Attribute.FONT_SIZE] = 18;
style[DocumentApp.Attribute.BOLD] = true;

// Append a plain paragraph.
var par = body.appendParagraph('A paragraph with custom style.');

// Apply the custom style.
par.setAttributes(style);
```
@param attributes The element's attributes.
@return The current element.*/ setAttributes(
      attributes: Object,
    ): DocumentApp.Footnote;
  }
  interface FooterSection {
    /**Creates and appends a new [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html).

The [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html) will be contained in a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@return The new horizontal rule.*/ appendHorizontalRule(): DocumentApp.HorizontalRule;
    /**Creates and appends a new [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) from the specified image blob.

The image will be contained in a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@param image The image data.
@return The appended image.*/ appendImage(
      image: BlobSource,
    ): DocumentApp.InlineImage;
    /**Appends the given [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html).

The [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) will be contained in a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).

Use this version of `appendImage` when appending a copy of an existing [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html).
@param image The image data.
@return The appended image.*/ appendImage(
      image: DocumentApp.InlineImage,
    ): DocumentApp.InlineImage;
    /**Appends the given [`ListItem`](https://developers.google.com/apps-script/reference/document/list-item.html).

Use this version of `appendListItem` when appending a copy of an existing [`ListItem`](https://developers.google.com/apps-script/reference/document/list-item.html).
@param listItem The list item to append.
@return The appended list item.*/ appendListItem(
      listItem: DocumentApp.ListItem,
    ): DocumentApp.ListItem;
    /**Creates and appends a new [`ListItem`](https://developers.google.com/apps-script/reference/document/list-item.html) containing the specified text contents.

Consecutive list items are added as part of the same list.
@param text The list item's text contents.
@return The new list item.*/ appendListItem(text: string): DocumentApp.ListItem;
    /**Appends the given [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).

Use this version of `appendParagraph` when appending a copy of an existing [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@param paragraph The paragraph to append.
@return The appended paragraph.*/ appendParagraph(
      paragraph: DocumentApp.Paragraph,
    ): DocumentApp.Paragraph;
    /**Creates and appends a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html) containing the specified text contents.
@param text The paragraph's text contents.
@return The new paragraph.*/ appendParagraph(
      text: string,
    ): DocumentApp.Paragraph;
    /**Creates and appends a new [`Table`](https://developers.google.com/apps-script/reference/document/table.html).

This method will also append an empty paragraph after the table, since Google Docs documents
cannot end with a table.
@return The new table.*/ appendTable(): DocumentApp.Table;
    /**Appends the given [`Table`](https://developers.google.com/apps-script/reference/document/table.html).

Use this version of `appendTable` when appending a copy of an existing [`Table`](https://developers.google.com/apps-script/reference/document/table.html).
This method will also append an empty paragraph after the table, since Google Docs documents
cannot end with a table.
@param table The table to append.
@return The appended table.*/ appendTable(
      table: DocumentApp.Table,
    ): DocumentApp.Table;
    /**Appends a new [`Table`](https://developers.google.com/apps-script/reference/document/table.html) containing a [`TableCell`](https://developers.google.com/apps-script/reference/document/table-cell.html) for each specified string value.

This method will also append an empty paragraph after the table, since Google Docs documents
cannot end with a table.
@param cells The text contents of the table cells to add to the new table.
@return The appended table.*/ appendTable(cells: string[][]): DocumentApp.Table;
    /**Clears the contents of the element.
@return The current element.*/ clear(): DocumentApp.FooterSection;
    /**Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a
parent.
@return The new copy.*/ copy(): DocumentApp.FooterSection;
    /**Obtains a [`Text`](https://developers.google.com/apps-script/reference/document/text.html) version of the current element, for editing.

Use `editAsText` for manipulating the elements contents as rich text. The `editAsText` mode ignores non-text elements (such as [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) and [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html)).

Child elements fully contained within a deleted text range are removed from the element.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Insert two paragraphs separated by a paragraph containing an
// horizontal rule.
body.insertParagraph(0, "An editAsText sample.");
body.insertHorizontalRule(0);
body.insertParagraph(0, "An example.");

// Delete " sample.

 An" removing the horizontal rule in the process.
body.editAsText().deleteText(14, 25);
```
@return a text version of the current element*/ editAsText(): DocumentApp.Text;
    /**Searches the contents of the element for a descendant of the specified type.
@param elementType The type of element to search for.
@return A search result indicating the position of the search element.*/ findElement(
      elementType: DocumentApp.ElementType,
    ): DocumentApp.RangeElement;
    /**Searches the contents of the element for a descendant of the specified type, starting from the
specified [`RangeElement`](https://developers.google.com/apps-script/reference/document/range-element.html).

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Define the search parameters.
var searchType = DocumentApp.ElementType.PARAGRAPH;
var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
var searchResult = null;

// Search until the paragraph is found.
while (searchResult = body.findElement(searchType, searchResult)) {
  var par = searchResult.getElement().asParagraph();
  if (par.getHeading() == searchHeading) {
    // Found one, update and stop.
    par.setText('This is the first header.');
    return;
  }
}
```
@param elementType The type of element to search for.
@param from The search result to search from.
@return A search result indicating the next position of the search element.*/ findElement(
      elementType: DocumentApp.ElementType,
      from: DocumentApp.RangeElement,
    ): DocumentApp.RangeElement;
    /**Searches the contents of the element for the specified text pattern using regular expressions.

A subset of the JavaScript regular expression features are not fully supported, such as
capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block
contained in the current element.
@param searchPattern the pattern to search for
@return a search result indicating the position of the search text, or null if there is no
    match*/ findText(searchPattern: string): DocumentApp.RangeElement;
    /**Searches the contents of the element for the specified text pattern, starting from a given
search result.

A subset of the JavaScript regular expression features are not fully supported, such as
capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block
contained in the current element.
@param searchPattern the pattern to search for
@param from the search result to search from
@return a search result indicating the next position of the search text, or null if there is no
    match*/ findText(
      searchPattern: string,
      from: DocumentApp.RangeElement,
    ): DocumentApp.RangeElement;
    /**Retrieves the element's attributes.

The result is an object containing a property for each valid element attribute where each
property name corresponds to an item in the `DocumentApp.Attribute` enumeration.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Append a styled paragraph.
var par = body.appendParagraph('A bold, italicized paragraph.');
par.setBold(true);
par.setItalic(true);

// Retrieve the paragraph's attributes.
var atts = par.getAttributes();

// Log the paragraph attributes.
for (var att in atts) {
  Logger.log(att + ":" + atts[att]);
}
```
@return The element's attributes.*/ getAttributes(): Object;
    /**Retrieves the child element at the specified child index.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Obtain the first element in the tab.
var firstChild = body.getChild(0);

// If it's a paragraph, set its contents.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  firstChild.asParagraph().setText("This is the first paragraph.");
}
```
@param childIndex The index of the child element to retrieve.
@return The child element at the specified index.*/ getChild(
      childIndex: Integer,
    ): DocumentApp.Element;
    /**Retrieves the child index for the specified child element.
@param child The child element for which to retrieve the index.
@return The child index.*/ getChildIndex(child: DocumentApp.Element): Integer;
    /**Retrieves all the [`Footnotes`](https://developers.google.com/apps-script/reference/document/footnote.html) contained in the section.
@deprecated
@return The section footnotes.*/ getFootnotes(): DocumentApp.Footnote[];
    /**Retrieves all the [`InlineImages`](https://developers.google.com/apps-script/reference/document/inline-image.html) contained in the section.
@return The section images.*/ getImages(): DocumentApp.InlineImage[];
    /**Retrieves the link url.
@deprecated
@return the link url, or null if the element contains multiple values for this attribute*/ getLinkUrl(): string;
    /**Retrieves all the [`ListItems`](https://developers.google.com/apps-script/reference/document/list-item.html) contained in the section.
@return The section list items.*/ getListItems(): DocumentApp.ListItem[];
    /**Retrieves the element's next sibling element.

The next sibling has the same parent and follows the current element.
@deprecated
@return The next sibling element.*/ getNextSibling(): DocumentApp.Element;
    /**Retrieves the number of children.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Log the number of elements in the tab.
Logger.log("There are " + body.getNumChildren() +
    " elements in the tab's body.");
```
@return The number of children.*/ getNumChildren(): Integer;
    /**Retrieves all the [`Paragraphs`](https://developers.google.com/apps-script/reference/document/paragraph.html) contained in the section (including [`ListItems`](https://developers.google.com/apps-script/reference/document/list-item.html)).
@return The section paragraphs.*/ getParagraphs(): DocumentApp.Paragraph[];
    /**Retrieves the element's parent element.

The parent element contains the current element.
@return The parent element.*/ getParent(): DocumentApp.ContainerElement;
    /**Retrieves the element's previous sibling element.

The previous sibling has the same parent and precedes the current element.
@deprecated
@return The previous sibling element.*/ getPreviousSibling(): DocumentApp.Element;
    /**Retrieves all the [`Tables`](https://developers.google.com/apps-script/reference/document/table.html) contained in the section.
@return The section tables.*/ getTables(): DocumentApp.Table[];
    /**Retrieves the contents of the element as a text string.
@return the contents of the element as text string*/ getText(): string;
    /**Gets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.
@return the type of text alignment, or `null` if the text contains multiple types of text
    alignments or if the text alignment has never been set*/ getTextAlignment(): DocumentApp.TextAlignment;
    /**Retrieves the element's [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html).

Use `getType()` to determine the exact type of a given element.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Obtain the first element in the active tab's body.

var firstChild = body.getChild(0);

// Use getType() to determine the element's type.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  Logger.log('The first element is a paragraph.');
} else {
  Logger.log('The first element is not a paragraph.');
}
```
@return The element type.*/ getType(): DocumentApp.ElementType;
    /**Creates and inserts a new [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html) at the specified index.

The [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html) will be contained in a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@param childIndex The index at which to insert the element.
@return The new horizontal rule.*/ insertHorizontalRule(
      childIndex: Integer,
    ): DocumentApp.HorizontalRule;
    /**Creates and inserts an [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) from the specified image blob, at the specified
index.
@param childIndex The index at which to insert the element.
@param image The image data.
@return The inserted inline image.*/ insertImage(
      childIndex: Integer,
      image: BlobSource,
    ): DocumentApp.InlineImage;
    /**Inserts the given [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) at the specified index.

The image will be contained in a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@param childIndex The index at which to insert the element.
@param image The image to insert.
@return The inserted inline image.*/ insertImage(
      childIndex: Integer,
      image: DocumentApp.InlineImage,
    ): DocumentApp.InlineImage;
    /**Inserts the given [`ListItem`](https://developers.google.com/apps-script/reference/document/list-item.html) at the specified index.
@param childIndex The index at which to insert.
@param listItem The list item to insert.
@return The inserted list item.*/ insertListItem(
      childIndex: Integer,
      listItem: DocumentApp.ListItem,
    ): DocumentApp.ListItem;
    /**Creates and inserts a new [`ListItem`](https://developers.google.com/apps-script/reference/document/list-item.html) at the specified index, containing the specified
text contents.
@param childIndex The index at which to insert.
@param text The list item's text contents.
@return The new list item.*/ insertListItem(
      childIndex: Integer,
      text: string,
    ): DocumentApp.ListItem;
    /**Inserts the given [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html) at the specified index.
@param childIndex The index at which to insert.
@param paragraph The paragraph to insert.
@return The inserted paragraph.*/ insertParagraph(
      childIndex: Integer,
      paragraph: DocumentApp.Paragraph,
    ): DocumentApp.Paragraph;
    /**Creates and inserts a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html) at the specified index, containing the specified
text contents.
@param childIndex The index at which to insert.
@param text The paragraph's text contents.
@return The new paragraph.*/ insertParagraph(
      childIndex: Integer,
      text: string,
    ): DocumentApp.Paragraph;
    /**Creates and inserts a new [`Table`](https://developers.google.com/apps-script/reference/document/table.html) at the specified index.
@param childIndex The index at which to insert.
@return The new table.*/ insertTable(childIndex: Integer): DocumentApp.Table;
    /**Inserts the given [`Table`](https://developers.google.com/apps-script/reference/document/table.html) at the specified index.
@param childIndex The index at which to insert.
@param table The table to insert.
@return The inserted table.*/ insertTable(
      childIndex: Integer,
      table: DocumentApp.Table,
    ): DocumentApp.Table;
    /**Creates and inserts a new [`Table`](https://developers.google.com/apps-script/reference/document/table.html) containing the specified cells, at the specified index.
@param childIndex The index at which to insert.
@param cells The text contents of the table cells to add to the new table.
@return The new table.*/ insertTable(
      childIndex: Integer,
      cells: string[][],
    ): DocumentApp.Table;
    /**Determines whether the element is at the end of the [`Document`](https://developers.google.com/apps-script/reference/document/document.html).
@deprecated
@return Whether the element is at the end of the tab.*/ isAtDocumentEnd(): boolean;
    /**Removes the specified child element.
@param child The child element to remove.
@return The current element.*/ removeChild(
      child: DocumentApp.Element,
    ): DocumentApp.FooterSection;
    /**Removes the element from its parent.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab()
var body = documentTab.getBody();

// Remove all images in the active tab's body.
var imgs = body.getImages();
for (var i = 0; i < imgs.length; i++) {
  imgs[i].removeFromParent();
}
```
@return The removed element.*/ removeFromParent(): DocumentApp.FooterSection;
    /**Replaces all occurrences of a given text pattern with a given replacement string, using regular
expressions.

The search pattern is passed as a string, not a JavaScript regular expression object.
Because of this you'll need to escape any backslashes in the pattern.

This methods uses Google's [RE2](https://github.com/google/re2) regular
expression library, which limits the [supported syntax](https://github.com/google/re2/wiki/Syntax).

The provided regular expression pattern is independently matched against each text block
contained in the current element.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Clear the text surrounding "Apps Script", with or without text.
body.replaceText("^.*Apps ?Script.*$", "Apps Script");
```
@param searchPattern the regex pattern to search for
@param replacement the text to use as replacement
@return the current element*/ replaceText(
      searchPattern: string,
      replacement: string,
    ): DocumentApp.Element;
    /**Sets the element's attributes.

The specified attributes parameter must be an object where each property name is an item in
the `DocumentApp.Attribute` enumeration and each property value is the new value to be
applied.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Define a custom paragraph style.
var style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.RIGHT;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
style[DocumentApp.Attribute.FONT_SIZE] = 18;
style[DocumentApp.Attribute.BOLD] = true;

// Append a plain paragraph.
var par = body.appendParagraph('A paragraph with custom style.');

// Apply the custom style.
par.setAttributes(style);
```
@param attributes The element's attributes.
@return The current element.*/ setAttributes(
      attributes: Object,
    ): DocumentApp.FooterSection;
    /**Sets the link url.
@deprecated
@param url the link url
@return the current element*/ setLinkUrl(
      url: string,
    ): DocumentApp.FooterSection;
    /**Sets the contents as plain text.

Note: existing contents are cleared.
@param text The new text contents.
@return The current element.*/ setText(text: string): DocumentApp.FooterSection;
    /**Sets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.

```
// Make the entire first paragraph in the active tab be superscript.
var documentTab = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
var text = documentTab.getBody().getParagraphs()[0].editAsText();
text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
```
@param textAlignment the type of text alignment to apply
@return the current element*/ setTextAlignment(
      textAlignment: DocumentApp.TextAlignment,
    ): DocumentApp.FooterSection;
  }
  interface FontFamily {}
  interface _FontFamily {
    /**The Amaranth font family.
@deprecated*/ AMARANTH: FontFamily;
    /**The Arial font family.
@deprecated*/ ARIAL: FontFamily;
    /**The Arial Black font family.
@deprecated*/ ARIAL_BLACK: FontFamily;
    /**The Arial Narrow font family.
@deprecated*/ ARIAL_NARROW: FontFamily;
    /**The Arvo font family.
@deprecated*/ ARVO: FontFamily;
    /**The Calibri font family.
@deprecated*/ CALIBRI: FontFamily;
    /**The Cambria font family.
@deprecated*/ CAMBRIA: FontFamily;
    /**The Comic Sans MS font family.
@deprecated*/ COMIC_SANS_MS: FontFamily;
    /**The Consolas font family.
@deprecated*/ CONSOLAS: FontFamily;
    /**The Corsiva font family.
@deprecated*/ CORSIVA: FontFamily;
    /**The Courier New font family.
@deprecated*/ COURIER_NEW: FontFamily;
    /**The Dancing Script font family.
@deprecated*/ DANCING_SCRIPT: FontFamily;
    /**The Droid Sans font family.
@deprecated*/ DROID_SANS: FontFamily;
    /**The Droid Serif font family.
@deprecated*/ DROID_SERIF: FontFamily;
    /**The Garamond font family.
@deprecated*/ GARAMOND: FontFamily;
    /**The Georgia font family.
@deprecated*/ GEORGIA: FontFamily;
    /**The Gloria Hallelujah font family.
@deprecated*/ GLORIA_HALLELUJAH: FontFamily;
    /**The Great Vibes font family.
@deprecated*/ GREAT_VIBES: FontFamily;
    /**The Lobster font family.
@deprecated*/ LOBSTER: FontFamily;
    /**The Merriweather font family.
@deprecated*/ MERRIWEATHER: FontFamily;
    /**The Pacifico font family.
@deprecated*/ PACIFICO: FontFamily;
    /**The Philosopher font family.
@deprecated*/ PHILOSOPHER: FontFamily;
    /**The Poiret One font family
@deprecated*/ POIRET_ONE: FontFamily;
    /**The Quattrocento font family.
@deprecated*/ QUATTROCENTO: FontFamily;
    /**The Roboto font family
@deprecated*/ ROBOTO: FontFamily;
    /**The Shadows Into Light font family.
@deprecated*/ SHADOWS_INTO_LIGHT: FontFamily;
    /**The Syncopate font family.
@deprecated*/ SYNCOPATE: FontFamily;
    /**The Tahoma font family.
@deprecated*/ TAHOMA: FontFamily;
    /**The Times New Roman font family.
@deprecated*/ TIMES_NEW_ROMAN: FontFamily;
    /**The Trebuchet MS font family.
@deprecated*/ TREBUCHET_MS: FontFamily;
    /**The Ubuntu font family.
@deprecated*/ UBUNTU: FontFamily;
    /**The Verdana font family.
@deprecated*/ VERDANA: FontFamily;
  }
  interface EquationSymbol {
    /**Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a
parent.
@return The new copy.*/ copy(): DocumentApp.EquationSymbol;
    /**Retrieves the element's attributes.

The result is an object containing a property for each valid element attribute where each
property name corresponds to an item in the `DocumentApp.Attribute` enumeration.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Append a styled paragraph.
var par = body.appendParagraph('A bold, italicized paragraph.');
par.setBold(true);
par.setItalic(true);

// Retrieve the paragraph's attributes.
var atts = par.getAttributes();

// Log the paragraph attributes.
for (var att in atts) {
  Logger.log(att + ":" + atts[att]);
}
```
@return The element's attributes.*/ getAttributes(): Object;
    /**Retrieves the code corresponding to the equation symbol.
@return the symbol code*/ getCode(): string;
    /**Retrieves the element's next sibling element.

The next sibling has the same parent and follows the current element.
@return The next sibling element.*/ getNextSibling(): DocumentApp.Element;
    /**Retrieves the element's parent element.

The parent element contains the current element.
@return The parent element.*/ getParent(): DocumentApp.ContainerElement;
    /**Retrieves the element's previous sibling element.

The previous sibling has the same parent and precedes the current element.
@return The previous sibling element.*/ getPreviousSibling(): DocumentApp.Element;
    /**Retrieves the element's [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html).

Use `getType()` to determine the exact type of a given element.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Obtain the first element in the active tab's body.

var firstChild = body.getChild(0);

// Use getType() to determine the element's type.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  Logger.log('The first element is a paragraph.');
} else {
  Logger.log('The first element is not a paragraph.');
}
```
@return The element type.*/ getType(): DocumentApp.ElementType;
    /**Determines whether the element is at the end of the [`Document`](https://developers.google.com/apps-script/reference/document/document.html).
@return Whether the element is at the end of the tab.*/ isAtDocumentEnd(): boolean;
    /**Merges the element with the preceding sibling of the same type.

Only elements of the same [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html) can be merged. Any child elements contained in
the current element are moved to the preceding sibling element.

The current element is removed from the document.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Example 1: Merge paragraphs
// Append two paragraphs to the document's active tab.
var par1 = body.appendParagraph('Paragraph 1.');
var par2 = body.appendParagraph('Paragraph 2.');
// Merge the newly added paragraphs into a single paragraph.
par2.merge();

// Example 2: Merge table cells
// Create a two-dimensional array containing the table's cell contents.
var cells = [
['Row 1, Cell 1', 'Row 1, Cell 2'],
['Row 2, Cell 1', 'Row 2, Cell 2']
];
// Build a table from the array.
var table = body.appendTable(cells);
// Get the first row in the table.
 var row = table.getRow(0);
// Get the two cells in this row.
var cell1 = row.getCell(0);
var cell2 = row.getCell(1);
// Merge the current cell into its preceding sibling element.
var merged = cell2.merge();
```
@return The merged element.*/ merge(): DocumentApp.EquationSymbol;
    /**Removes the element from its parent.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab()
var body = documentTab.getBody();

// Remove all images in the active tab's body.
var imgs = body.getImages();
for (var i = 0; i < imgs.length; i++) {
  imgs[i].removeFromParent();
}
```
@return The removed element.*/ removeFromParent(): DocumentApp.EquationSymbol;
    /**Sets the element's attributes.

The specified attributes parameter must be an object where each property name is an item in
the `DocumentApp.Attribute` enumeration and each property value is the new value to be
applied.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Define a custom paragraph style.
var style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.RIGHT;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
style[DocumentApp.Attribute.FONT_SIZE] = 18;
style[DocumentApp.Attribute.BOLD] = true;

// Append a plain paragraph.
var par = body.appendParagraph('A paragraph with custom style.');

// Apply the custom style.
par.setAttributes(style);
```
@param attributes The element's attributes.
@return The current element.*/ setAttributes(
      attributes: Object,
    ): DocumentApp.EquationSymbol;
  }
  interface EquationFunctionArgumentSeparator {
    /**Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a
parent.
@return The new copy.*/ copy(): DocumentApp.EquationFunctionArgumentSeparator;
    /**Retrieves the element's attributes.

The result is an object containing a property for each valid element attribute where each
property name corresponds to an item in the `DocumentApp.Attribute` enumeration.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Append a styled paragraph.
var par = body.appendParagraph('A bold, italicized paragraph.');
par.setBold(true);
par.setItalic(true);

// Retrieve the paragraph's attributes.
var atts = par.getAttributes();

// Log the paragraph attributes.
for (var att in atts) {
  Logger.log(att + ":" + atts[att]);
}
```
@return The element's attributes.*/ getAttributes(): Object;
    /**Retrieves the element's next sibling element.

The next sibling has the same parent and follows the current element.
@return The next sibling element.*/ getNextSibling(): DocumentApp.Element;
    /**Retrieves the element's parent element.

The parent element contains the current element.
@return The parent element.*/ getParent(): DocumentApp.ContainerElement;
    /**Retrieves the element's previous sibling element.

The previous sibling has the same parent and precedes the current element.
@return The previous sibling element.*/ getPreviousSibling(): DocumentApp.Element;
    /**Retrieves the element's [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html).

Use `getType()` to determine the exact type of a given element.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Obtain the first element in the active tab's body.

var firstChild = body.getChild(0);

// Use getType() to determine the element's type.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  Logger.log('The first element is a paragraph.');
} else {
  Logger.log('The first element is not a paragraph.');
}
```
@return The element type.*/ getType(): DocumentApp.ElementType;
    /**Determines whether the element is at the end of the [`Document`](https://developers.google.com/apps-script/reference/document/document.html).
@return Whether the element is at the end of the tab.*/ isAtDocumentEnd(): boolean;
    /**Merges the element with the preceding sibling of the same type.

Only elements of the same [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html) can be merged. Any child elements contained in
the current element are moved to the preceding sibling element.

The current element is removed from the document.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Example 1: Merge paragraphs
// Append two paragraphs to the document's active tab.
var par1 = body.appendParagraph('Paragraph 1.');
var par2 = body.appendParagraph('Paragraph 2.');
// Merge the newly added paragraphs into a single paragraph.
par2.merge();

// Example 2: Merge table cells
// Create a two-dimensional array containing the table's cell contents.
var cells = [
['Row 1, Cell 1', 'Row 1, Cell 2'],
['Row 2, Cell 1', 'Row 2, Cell 2']
];
// Build a table from the array.
var table = body.appendTable(cells);
// Get the first row in the table.
 var row = table.getRow(0);
// Get the two cells in this row.
var cell1 = row.getCell(0);
var cell2 = row.getCell(1);
// Merge the current cell into its preceding sibling element.
var merged = cell2.merge();
```
@return The merged element.*/ merge(): DocumentApp.EquationFunctionArgumentSeparator;
    /**Removes the element from its parent.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab()
var body = documentTab.getBody();

// Remove all images in the active tab's body.
var imgs = body.getImages();
for (var i = 0; i < imgs.length; i++) {
  imgs[i].removeFromParent();
}
```
@return The removed element.*/ removeFromParent(): DocumentApp.EquationFunctionArgumentSeparator;
    /**Sets the element's attributes.

The specified attributes parameter must be an object where each property name is an item in
the `DocumentApp.Attribute` enumeration and each property value is the new value to be
applied.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Define a custom paragraph style.
var style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.RIGHT;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
style[DocumentApp.Attribute.FONT_SIZE] = 18;
style[DocumentApp.Attribute.BOLD] = true;

// Append a plain paragraph.
var par = body.appendParagraph('A paragraph with custom style.');

// Apply the custom style.
par.setAttributes(style);
```
@param attributes The element's attributes.
@return The current element.*/ setAttributes(
      attributes: Object,
    ): DocumentApp.EquationFunctionArgumentSeparator;
  }
  interface EquationFunction {
    /**Clears the contents of the element.
@return The current element.*/ clear(): DocumentApp.EquationFunction;
    /**Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a
parent.
@return The new copy.*/ copy(): DocumentApp.EquationFunction;
    /**Obtains a [`Text`](https://developers.google.com/apps-script/reference/document/text.html) version of the current element, for editing.

Use `editAsText` for manipulating the elements contents as rich text. The `editAsText` mode ignores non-text elements (such as [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) and [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html)).

Child elements fully contained within a deleted text range are removed from the element.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Insert two paragraphs separated by a paragraph containing an
// horizontal rule.
body.insertParagraph(0, "An editAsText sample.");
body.insertHorizontalRule(0);
body.insertParagraph(0, "An example.");

// Delete " sample.

 An" removing the horizontal rule in the process.
body.editAsText().deleteText(14, 25);
```
@return a text version of the current element*/ editAsText(): DocumentApp.Text;
    /**Searches the contents of the element for a descendant of the specified type.
@param elementType The type of element to search for.
@return A search result indicating the position of the search element.*/ findElement(
      elementType: DocumentApp.ElementType,
    ): DocumentApp.RangeElement;
    /**Searches the contents of the element for a descendant of the specified type, starting from the
specified [`RangeElement`](https://developers.google.com/apps-script/reference/document/range-element.html).

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Define the search parameters.
var searchType = DocumentApp.ElementType.PARAGRAPH;
var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
var searchResult = null;

// Search until the paragraph is found.
while (searchResult = body.findElement(searchType, searchResult)) {
  var par = searchResult.getElement().asParagraph();
  if (par.getHeading() == searchHeading) {
    // Found one, update and stop.
    par.setText('This is the first header.');
    return;
  }
}
```
@param elementType The type of element to search for.
@param from The search result to search from.
@return A search result indicating the next position of the search element.*/ findElement(
      elementType: DocumentApp.ElementType,
      from: DocumentApp.RangeElement,
    ): DocumentApp.RangeElement;
    /**Searches the contents of the element for the specified text pattern using regular expressions.

A subset of the JavaScript regular expression features are not fully supported, such as
capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block
contained in the current element.
@param searchPattern the pattern to search for
@return a search result indicating the position of the search text, or null if there is no
    match*/ findText(searchPattern: string): DocumentApp.RangeElement;
    /**Searches the contents of the element for the specified text pattern, starting from a given
search result.

A subset of the JavaScript regular expression features are not fully supported, such as
capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block
contained in the current element.
@param searchPattern the pattern to search for
@param from the search result to search from
@return a search result indicating the next position of the search text, or null if there is no
    match*/ findText(
      searchPattern: string,
      from: DocumentApp.RangeElement,
    ): DocumentApp.RangeElement;
    /**Retrieves the element's attributes.

The result is an object containing a property for each valid element attribute where each
property name corresponds to an item in the `DocumentApp.Attribute` enumeration.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Append a styled paragraph.
var par = body.appendParagraph('A bold, italicized paragraph.');
par.setBold(true);
par.setItalic(true);

// Retrieve the paragraph's attributes.
var atts = par.getAttributes();

// Log the paragraph attributes.
for (var att in atts) {
  Logger.log(att + ":" + atts[att]);
}
```
@return The element's attributes.*/ getAttributes(): Object;
    /**Retrieves the child element at the specified child index.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Obtain the first element in the tab.
var firstChild = body.getChild(0);

// If it's a paragraph, set its contents.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  firstChild.asParagraph().setText("This is the first paragraph.");
}
```
@param childIndex The index of the child element to retrieve.
@return The child element at the specified index.*/ getChild(
      childIndex: Integer,
    ): DocumentApp.Element;
    /**Retrieves the child index for the specified child element.
@param child The child element for which to retrieve the index.
@return The child index.*/ getChildIndex(child: DocumentApp.Element): Integer;
    /**Retrieves the code corresponding to the equation function.
@return the function code*/ getCode(): string;
    /**Retrieves the link url.
@return the link url, or null if the element contains multiple values for this attribute*/ getLinkUrl(): string;
    /**Retrieves the element's next sibling element.

The next sibling has the same parent and follows the current element.
@return The next sibling element.*/ getNextSibling(): DocumentApp.Element;
    /**Retrieves the number of children.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Log the number of elements in the tab.
Logger.log("There are " + body.getNumChildren() +
    " elements in the tab's body.");
```
@return The number of children.*/ getNumChildren(): Integer;
    /**Retrieves the element's parent element.

The parent element contains the current element.
@return The parent element.*/ getParent(): DocumentApp.ContainerElement;
    /**Retrieves the element's previous sibling element.

The previous sibling has the same parent and precedes the current element.
@return The previous sibling element.*/ getPreviousSibling(): DocumentApp.Element;
    /**Retrieves the contents of the element as a text string.
@return the contents of the element as text string*/ getText(): string;
    /**Gets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.
@return the type of text alignment, or `null` if the text contains multiple types of text
    alignments or if the text alignment has never been set*/ getTextAlignment(): DocumentApp.TextAlignment;
    /**Retrieves the element's [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html).

Use `getType()` to determine the exact type of a given element.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Obtain the first element in the active tab's body.

var firstChild = body.getChild(0);

// Use getType() to determine the element's type.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  Logger.log('The first element is a paragraph.');
} else {
  Logger.log('The first element is not a paragraph.');
}
```
@return The element type.*/ getType(): DocumentApp.ElementType;
    /**Determines whether the element is at the end of the [`Document`](https://developers.google.com/apps-script/reference/document/document.html).
@return Whether the element is at the end of the tab.*/ isAtDocumentEnd(): boolean;
    /**Merges the element with the preceding sibling of the same type.

Only elements of the same [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html) can be merged. Any child elements contained in
the current element are moved to the preceding sibling element.

The current element is removed from the document.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Example 1: Merge paragraphs
// Append two paragraphs to the document's active tab.
var par1 = body.appendParagraph('Paragraph 1.');
var par2 = body.appendParagraph('Paragraph 2.');
// Merge the newly added paragraphs into a single paragraph.
par2.merge();

// Example 2: Merge table cells
// Create a two-dimensional array containing the table's cell contents.
var cells = [
['Row 1, Cell 1', 'Row 1, Cell 2'],
['Row 2, Cell 1', 'Row 2, Cell 2']
];
// Build a table from the array.
var table = body.appendTable(cells);
// Get the first row in the table.
 var row = table.getRow(0);
// Get the two cells in this row.
var cell1 = row.getCell(0);
var cell2 = row.getCell(1);
// Merge the current cell into its preceding sibling element.
var merged = cell2.merge();
```
@return The merged element.*/ merge(): DocumentApp.EquationFunction;
    /**Removes the element from its parent.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab()
var body = documentTab.getBody();

// Remove all images in the active tab's body.
var imgs = body.getImages();
for (var i = 0; i < imgs.length; i++) {
  imgs[i].removeFromParent();
}
```
@return The removed element.*/ removeFromParent(): DocumentApp.EquationFunction;
    /**Replaces all occurrences of a given text pattern with a given replacement string, using regular
expressions.

The search pattern is passed as a string, not a JavaScript regular expression object.
Because of this you'll need to escape any backslashes in the pattern.

This methods uses Google's [RE2](https://github.com/google/re2) regular
expression library, which limits the [supported syntax](https://github.com/google/re2/wiki/Syntax).

The provided regular expression pattern is independently matched against each text block
contained in the current element.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Clear the text surrounding "Apps Script", with or without text.
body.replaceText("^.*Apps ?Script.*$", "Apps Script");
```
@param searchPattern the regex pattern to search for
@param replacement the text to use as replacement
@return the current element*/ replaceText(
      searchPattern: string,
      replacement: string,
    ): DocumentApp.Element;
    /**Sets the element's attributes.

The specified attributes parameter must be an object where each property name is an item in
the `DocumentApp.Attribute` enumeration and each property value is the new value to be
applied.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Define a custom paragraph style.
var style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.RIGHT;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
style[DocumentApp.Attribute.FONT_SIZE] = 18;
style[DocumentApp.Attribute.BOLD] = true;

// Append a plain paragraph.
var par = body.appendParagraph('A paragraph with custom style.');

// Apply the custom style.
par.setAttributes(style);
```
@param attributes The element's attributes.
@return The current element.*/ setAttributes(
      attributes: Object,
    ): DocumentApp.EquationFunction;
    /**Sets the link url.
@param url the link url
@return the current element*/ setLinkUrl(
      url: string,
    ): DocumentApp.EquationFunction;
    /**Sets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.

```
// Make the entire first paragraph in the active tab be superscript.
var documentTab = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
var text = documentTab.getBody().getParagraphs()[0].editAsText();
text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
```
@param textAlignment the type of text alignment to apply
@return the current element*/ setTextAlignment(
      textAlignment: DocumentApp.TextAlignment,
    ): DocumentApp.EquationFunction;
  }
  interface Equation {
    /**Clears the contents of the element.
@return The current element.*/ clear(): DocumentApp.Equation;
    /**Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a
parent.
@return The new copy.*/ copy(): DocumentApp.Equation;
    /**Obtains a [`Text`](https://developers.google.com/apps-script/reference/document/text.html) version of the current element, for editing.

Use `editAsText` for manipulating the elements contents as rich text. The `editAsText` mode ignores non-text elements (such as [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) and [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html)).

Child elements fully contained within a deleted text range are removed from the element.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Insert two paragraphs separated by a paragraph containing an
// horizontal rule.
body.insertParagraph(0, "An editAsText sample.");
body.insertHorizontalRule(0);
body.insertParagraph(0, "An example.");

// Delete " sample.

 An" removing the horizontal rule in the process.
body.editAsText().deleteText(14, 25);
```
@return a text version of the current element*/ editAsText(): DocumentApp.Text;
    /**Searches the contents of the element for a descendant of the specified type.
@param elementType The type of element to search for.
@return A search result indicating the position of the search element.*/ findElement(
      elementType: DocumentApp.ElementType,
    ): DocumentApp.RangeElement;
    /**Searches the contents of the element for a descendant of the specified type, starting from the
specified [`RangeElement`](https://developers.google.com/apps-script/reference/document/range-element.html).

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Define the search parameters.
var searchType = DocumentApp.ElementType.PARAGRAPH;
var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
var searchResult = null;

// Search until the paragraph is found.
while (searchResult = body.findElement(searchType, searchResult)) {
  var par = searchResult.getElement().asParagraph();
  if (par.getHeading() == searchHeading) {
    // Found one, update and stop.
    par.setText('This is the first header.');
    return;
  }
}
```
@param elementType The type of element to search for.
@param from The search result to search from.
@return A search result indicating the next position of the search element.*/ findElement(
      elementType: DocumentApp.ElementType,
      from: DocumentApp.RangeElement,
    ): DocumentApp.RangeElement;
    /**Searches the contents of the element for the specified text pattern using regular expressions.

A subset of the JavaScript regular expression features are not fully supported, such as
capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block
contained in the current element.
@param searchPattern the pattern to search for
@return a search result indicating the position of the search text, or null if there is no
    match*/ findText(searchPattern: string): DocumentApp.RangeElement;
    /**Searches the contents of the element for the specified text pattern, starting from a given
search result.

A subset of the JavaScript regular expression features are not fully supported, such as
capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block
contained in the current element.
@param searchPattern the pattern to search for
@param from the search result to search from
@return a search result indicating the next position of the search text, or null if there is no
    match*/ findText(
      searchPattern: string,
      from: DocumentApp.RangeElement,
    ): DocumentApp.RangeElement;
    /**Retrieves the element's attributes.

The result is an object containing a property for each valid element attribute where each
property name corresponds to an item in the `DocumentApp.Attribute` enumeration.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Append a styled paragraph.
var par = body.appendParagraph('A bold, italicized paragraph.');
par.setBold(true);
par.setItalic(true);

// Retrieve the paragraph's attributes.
var atts = par.getAttributes();

// Log the paragraph attributes.
for (var att in atts) {
  Logger.log(att + ":" + atts[att]);
}
```
@return The element's attributes.*/ getAttributes(): Object;
    /**Retrieves the child element at the specified child index.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Obtain the first element in the tab.
var firstChild = body.getChild(0);

// If it's a paragraph, set its contents.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  firstChild.asParagraph().setText("This is the first paragraph.");
}
```
@param childIndex The index of the child element to retrieve.
@return The child element at the specified index.*/ getChild(
      childIndex: Integer,
    ): DocumentApp.Element;
    /**Retrieves the child index for the specified child element.
@param child The child element for which to retrieve the index.
@return The child index.*/ getChildIndex(child: DocumentApp.Element): Integer;
    /**Retrieves the link url.
@return the link url, or null if the element contains multiple values for this attribute*/ getLinkUrl(): string;
    /**Retrieves the element's next sibling element.

The next sibling has the same parent and follows the current element.
@return The next sibling element.*/ getNextSibling(): DocumentApp.Element;
    /**Retrieves the number of children.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Log the number of elements in the tab.
Logger.log("There are " + body.getNumChildren() +
    " elements in the tab's body.");
```
@return The number of children.*/ getNumChildren(): Integer;
    /**Retrieves the element's parent element.

The parent element contains the current element.
@return The parent element.*/ getParent(): DocumentApp.ContainerElement;
    /**Retrieves the element's previous sibling element.

The previous sibling has the same parent and precedes the current element.
@return The previous sibling element.*/ getPreviousSibling(): DocumentApp.Element;
    /**Retrieves the contents of the element as a text string.
@return the contents of the element as text string*/ getText(): string;
    /**Gets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.
@return the type of text alignment, or `null` if the text contains multiple types of text
    alignments or if the text alignment has never been set*/ getTextAlignment(): DocumentApp.TextAlignment;
    /**Retrieves the element's [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html).

Use `getType()` to determine the exact type of a given element.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Obtain the first element in the active tab's body.

var firstChild = body.getChild(0);

// Use getType() to determine the element's type.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  Logger.log('The first element is a paragraph.');
} else {
  Logger.log('The first element is not a paragraph.');
}
```
@return The element type.*/ getType(): DocumentApp.ElementType;
    /**Determines whether the element is at the end of the [`Document`](https://developers.google.com/apps-script/reference/document/document.html).
@return Whether the element is at the end of the tab.*/ isAtDocumentEnd(): boolean;
    /**Merges the element with the preceding sibling of the same type.

Only elements of the same [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html) can be merged. Any child elements contained in
the current element are moved to the preceding sibling element.

The current element is removed from the document.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Example 1: Merge paragraphs
// Append two paragraphs to the document's active tab.
var par1 = body.appendParagraph('Paragraph 1.');
var par2 = body.appendParagraph('Paragraph 2.');
// Merge the newly added paragraphs into a single paragraph.
par2.merge();

// Example 2: Merge table cells
// Create a two-dimensional array containing the table's cell contents.
var cells = [
['Row 1, Cell 1', 'Row 1, Cell 2'],
['Row 2, Cell 1', 'Row 2, Cell 2']
];
// Build a table from the array.
var table = body.appendTable(cells);
// Get the first row in the table.
 var row = table.getRow(0);
// Get the two cells in this row.
var cell1 = row.getCell(0);
var cell2 = row.getCell(1);
// Merge the current cell into its preceding sibling element.
var merged = cell2.merge();
```
@return The merged element.*/ merge(): DocumentApp.Equation;
    /**Removes the element from its parent.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab()
var body = documentTab.getBody();

// Remove all images in the active tab's body.
var imgs = body.getImages();
for (var i = 0; i < imgs.length; i++) {
  imgs[i].removeFromParent();
}
```
@return The removed element.*/ removeFromParent(): DocumentApp.Equation;
    /**Replaces all occurrences of a given text pattern with a given replacement string, using regular
expressions.

The search pattern is passed as a string, not a JavaScript regular expression object.
Because of this you'll need to escape any backslashes in the pattern.

This methods uses Google's [RE2](https://github.com/google/re2) regular
expression library, which limits the [supported syntax](https://github.com/google/re2/wiki/Syntax).

The provided regular expression pattern is independently matched against each text block
contained in the current element.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Clear the text surrounding "Apps Script", with or without text.
body.replaceText("^.*Apps ?Script.*$", "Apps Script");
```
@param searchPattern the regex pattern to search for
@param replacement the text to use as replacement
@return the current element*/ replaceText(
      searchPattern: string,
      replacement: string,
    ): DocumentApp.Element;
    /**Sets the element's attributes.

The specified attributes parameter must be an object where each property name is an item in
the `DocumentApp.Attribute` enumeration and each property value is the new value to be
applied.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Define a custom paragraph style.
var style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.RIGHT;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
style[DocumentApp.Attribute.FONT_SIZE] = 18;
style[DocumentApp.Attribute.BOLD] = true;

// Append a plain paragraph.
var par = body.appendParagraph('A paragraph with custom style.');

// Apply the custom style.
par.setAttributes(style);
```
@param attributes The element's attributes.
@return The current element.*/ setAttributes(
      attributes: Object,
    ): DocumentApp.Equation;
    /**Sets the link url.
@param url the link url
@return the current element*/ setLinkUrl(url: string): DocumentApp.Equation;
    /**Sets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.

```
// Make the entire first paragraph in the active tab be superscript.
var documentTab = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
var text = documentTab.getBody().getParagraphs()[0].editAsText();
text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
```
@param textAlignment the type of text alignment to apply
@return the current element*/ setTextAlignment(
      textAlignment: DocumentApp.TextAlignment,
    ): DocumentApp.Equation;
  }
  interface ElementType {}
  interface _ElementType {
    /**The type corresponding to the [`Body`](https://developers.google.com/apps-script/reference/document/body.html) element.*/ BODY_SECTION: ElementType;
    /**The type corresponding to the `~~CommentSection~~` element.*/ COMMENT_SECTION: ElementType;
    /**The type corresponding to the [`Date`](https://developers.google.com/apps-script/reference/document/date.html)
element.*/ DATE: ElementType;
    /**The type corresponding to the [`Equation`](https://developers.google.com/apps-script/reference/document/equation.html) element.*/ EQUATION: ElementType;
    /**The type corresponding to the [`EquationFunction`](https://developers.google.com/apps-script/reference/document/equation-function.html) element.*/ EQUATION_FUNCTION: ElementType;
    /**The type corresponding to the [`EquationFunctionArgumentSeparator`](https://developers.google.com/apps-script/reference/document/equation-function-argument-separator.html)
element.*/ EQUATION_FUNCTION_ARGUMENT_SEPARATOR: ElementType;
    /**The type corresponding to the [`EquationSymbol`](https://developers.google.com/apps-script/reference/document/equation-symbol.html) element.*/ EQUATION_SYMBOL: ElementType;
    /**The type corresponding to the [`FooterSection`](https://developers.google.com/apps-script/reference/document/footer-section.html) element.*/ FOOTER_SECTION: ElementType;
    /**The type corresponding to the [`Footnote`](https://developers.google.com/apps-script/reference/document/footnote.html) element.*/ FOOTNOTE: ElementType;
    /**The type corresponding to the [`FootnoteSection`](https://developers.google.com/apps-script/reference/document/footnote-section.html) element.*/ FOOTNOTE_SECTION: ElementType;
    /**The type corresponding to the [`HeaderSection`](https://developers.google.com/apps-script/reference/document/header-section.html) element.*/ HEADER_SECTION: ElementType;
    /**The type corresponding to the [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html) element.*/ HORIZONTAL_RULE: ElementType;
    /**The type corresponding to the [`InlineDrawing`](https://developers.google.com/apps-script/reference/document/inline-drawing.html) element.*/ INLINE_DRAWING: ElementType;
    /**The type corresponding to the [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) element.*/ INLINE_IMAGE: ElementType;
    /**The type corresponding to the [`ListItem`](https://developers.google.com/apps-script/reference/document/list-item.html) element.*/ LIST_ITEM: ElementType;
    /**The type corresponding to the [`PageBreak`](https://developers.google.com/apps-script/reference/document/page-break.html) element.*/ PAGE_BREAK: ElementType;
    /**The type corresponding to the [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html) element.*/ PARAGRAPH: ElementType;
    /**The type corresponding to the [`Person`](https://developers.google.com/apps-script/reference/document/person.html) element.*/ PERSON: ElementType;
    /**The type corresponding to the [`RichLink`](https://developers.google.com/apps-script/reference/document/rich-link.html) element.*/ RICH_LINK: ElementType;
    /**The type corresponding to the [`Table`](https://developers.google.com/apps-script/reference/document/table.html) element.*/ TABLE: ElementType;
    /**The type corresponding to the [`TableCell`](https://developers.google.com/apps-script/reference/document/table-cell.html) element.*/ TABLE_CELL: ElementType;
    /**The type corresponding to the [`TableOfContents`](https://developers.google.com/apps-script/reference/document/table-of-contents.html) element.*/ TABLE_OF_CONTENTS: ElementType;
    /**The type corresponding to the [`TableRow`](https://developers.google.com/apps-script/reference/document/table-row.html) element.*/ TABLE_ROW: ElementType;
    /**The type corresponding to the [`Text`](https://developers.google.com/apps-script/reference/document/text.html)
element.*/ TEXT: ElementType;
    /**The type corresponding to [`UnsupportedElement`](https://developers.google.com/apps-script/reference/document/unsupported-element.html). Unsupported elements
represent document portions that do not support scripting.*/ UNSUPPORTED: ElementType;
  }
  interface Element {
    /**Returns the current element as a [`Body`](https://developers.google.com/apps-script/reference/document/body.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asBody(): DocumentApp.Body;
    /**Returns the current element as a [`Date`](https://developers.google.com/apps-script/reference/document/date.html).

When you know an element is a [`Date`](https://developers.google.com/apps-script/reference/document/date.html), use this method to set its type as a [`Date`](https://developers.google.com/apps-script/reference/document/date.html). Doing so lets autocomplete in the Apps Script editor show you the methods you can use
with a [`Date`](https://developers.google.com/apps-script/reference/document/date.html).
@return The current element with its type set as [`Date`](https://developers.google.com/apps-script/reference/document/date.html).*/ asDate(): DocumentApp.Date;
    /**Returns the current element as an [`Equation`](https://developers.google.com/apps-script/reference/document/equation.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asEquation(): DocumentApp.Equation;
    /**Returns the current element as a [`EquationFunction`](https://developers.google.com/apps-script/reference/document/equation-function.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asEquationFunction(): DocumentApp.EquationFunction;
    /**Returns the current element as a [`EquationFunctionArgumentSeparator`](https://developers.google.com/apps-script/reference/document/equation-function-argument-separator.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asEquationFunctionArgumentSeparator(): DocumentApp.EquationFunctionArgumentSeparator;
    /**Returns the current element as a [`EquationSymbol`](https://developers.google.com/apps-script/reference/document/equation-symbol.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asEquationSymbol(): DocumentApp.EquationSymbol;
    /**Returns the current element as a [`FooterSection`](https://developers.google.com/apps-script/reference/document/footer-section.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asFooterSection(): DocumentApp.FooterSection;
    /**Returns the current element as a [`Footnote`](https://developers.google.com/apps-script/reference/document/footnote.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asFootnote(): DocumentApp.Footnote;
    /**Returns the current element as a [`FootnoteSection`](https://developers.google.com/apps-script/reference/document/footnote-section.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asFootnoteSection(): DocumentApp.FootnoteSection;
    /**Returns the current element as a [`HeaderSection`](https://developers.google.com/apps-script/reference/document/header-section.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asHeaderSection(): DocumentApp.HeaderSection;
    /**Returns the current element as a [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asHorizontalRule(): DocumentApp.HorizontalRule;
    /**Returns the current element as a [`InlineDrawing`](https://developers.google.com/apps-script/reference/document/inline-drawing.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asInlineDrawing(): DocumentApp.InlineDrawing;
    /**Returns the current element as a [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asInlineImage(): DocumentApp.InlineImage;
    /**Returns the current element as a [`ListItem`](https://developers.google.com/apps-script/reference/document/list-item.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asListItem(): DocumentApp.ListItem;
    /**Returns the current element as a [`PageBreak`](https://developers.google.com/apps-script/reference/document/page-break.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asPageBreak(): DocumentApp.PageBreak;
    /**Returns the current element as a [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asParagraph(): DocumentApp.Paragraph;
    /**Returns the current element as a [`Person`](https://developers.google.com/apps-script/reference/document/person.html).

When you know an element is a [`Person`](https://developers.google.com/apps-script/reference/document/person.html), use this method to set its type as a person.
Doing so lets autocomplete in the Apps Script editor show you the methods you can use with a
person element.
@return The current element with its type set as [`Person`](https://developers.google.com/apps-script/reference/document/person.html).*/ asPerson(): DocumentApp.Person;
    /**Returns the current element as a [`RichLink`](https://developers.google.com/apps-script/reference/document/rich-link.html), for example, a link to a Google Sheets file.

When you know an element is a [`RichLink`](https://developers.google.com/apps-script/reference/document/rich-link.html), use this method to set its type as a [`RichLink`](https://developers.google.com/apps-script/reference/document/rich-link.html). Doing so lets autocomplete in the Apps Script editor show you the methods you can
use with a [`RichLink`](https://developers.google.com/apps-script/reference/document/rich-link.html).
@return The current element with its type set as [`RichLink`](https://developers.google.com/apps-script/reference/document/rich-link.html).*/ asRichLink(): DocumentApp.RichLink;
    /**Returns the current element as a [`Table`](https://developers.google.com/apps-script/reference/document/table.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asTable(): DocumentApp.Table;
    /**Returns the current element as a [`TableCell`](https://developers.google.com/apps-script/reference/document/table-cell.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asTableCell(): DocumentApp.TableCell;
    /**Returns the current element as a [`TableOfContents`](https://developers.google.com/apps-script/reference/document/table-of-contents.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asTableOfContents(): DocumentApp.TableOfContents;
    /**Returns the current element as a [`TableRow`](https://developers.google.com/apps-script/reference/document/table-row.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asTableRow(): DocumentApp.TableRow;
    /**Returns the current element as a [`Text`](https://developers.google.com/apps-script/reference/document/text.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asText(): DocumentApp.Text;
    /**Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a
parent.
@return The new copy.*/ copy(): DocumentApp.Element;
    /**Retrieves the element's attributes.

The result is an object containing a property for each valid element attribute where each
property name corresponds to an item in the `DocumentApp.Attribute` enumeration.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Append a styled paragraph.
var par = body.appendParagraph('A bold, italicized paragraph.');
par.setBold(true);
par.setItalic(true);

// Retrieve the paragraph's attributes.
var atts = par.getAttributes();

// Log the paragraph attributes.
for (var att in atts) {
  Logger.log(att + ":" + atts[att]);
}
```
@return The element's attributes.*/ getAttributes(): Object;
    /**Retrieves the element's next sibling element.

The next sibling has the same parent and follows the current element.
@return The next sibling element.*/ getNextSibling(): DocumentApp.Element;
    /**Retrieves the element's parent element.

The parent element contains the current element.
@return The parent element.*/ getParent(): DocumentApp.ContainerElement;
    /**Retrieves the element's previous sibling element.

The previous sibling has the same parent and precedes the current element.
@return The previous sibling element.*/ getPreviousSibling(): DocumentApp.Element;
    /**Retrieves the element's [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html).

Use `getType()` to determine the exact type of a given element.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Obtain the first element in the active tab's body.

var firstChild = body.getChild(0);

// Use getType() to determine the element's type.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  Logger.log('The first element is a paragraph.');
} else {
  Logger.log('The first element is not a paragraph.');
}
```
@return The element type.*/ getType(): DocumentApp.ElementType;
    /**Determines whether the element is at the end of the [`Document`](https://developers.google.com/apps-script/reference/document/document.html).
@return Whether the element is at the end of the tab.*/ isAtDocumentEnd(): boolean;
    /**Merges the element with the preceding sibling of the same type.

Only elements of the same [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html) can be merged. Any child elements contained in
the current element are moved to the preceding sibling element.

The current element is removed from the document.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Example 1: Merge paragraphs
// Append two paragraphs to the document's active tab.
var par1 = body.appendParagraph('Paragraph 1.');
var par2 = body.appendParagraph('Paragraph 2.');
// Merge the newly added paragraphs into a single paragraph.
par2.merge();

// Example 2: Merge table cells
// Create a two-dimensional array containing the table's cell contents.
var cells = [
['Row 1, Cell 1', 'Row 1, Cell 2'],
['Row 2, Cell 1', 'Row 2, Cell 2']
];
// Build a table from the array.
var table = body.appendTable(cells);
// Get the first row in the table.
 var row = table.getRow(0);
// Get the two cells in this row.
var cell1 = row.getCell(0);
var cell2 = row.getCell(1);
// Merge the current cell into its preceding sibling element.
var merged = cell2.merge();
```
@return The merged element.*/ merge(): DocumentApp.Element;
    /**Removes the element from its parent.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab()
var body = documentTab.getBody();

// Remove all images in the active tab's body.
var imgs = body.getImages();
for (var i = 0; i < imgs.length; i++) {
  imgs[i].removeFromParent();
}
```
@return The removed element.*/ removeFromParent(): DocumentApp.Element;
    /**Sets the element's attributes.

The specified attributes parameter must be an object where each property name is an item in
the `DocumentApp.Attribute` enumeration and each property value is the new value to be
applied.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Define a custom paragraph style.
var style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.RIGHT;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
style[DocumentApp.Attribute.FONT_SIZE] = 18;
style[DocumentApp.Attribute.BOLD] = true;

// Append a plain paragraph.
var par = body.appendParagraph('A paragraph with custom style.');

// Apply the custom style.
par.setAttributes(style);
```
@param attributes The element's attributes.
@return The current element.*/ setAttributes(
      attributes: Object,
    ): DocumentApp.Element;
  }
  interface DocumentTab {
    /**Adds a [`Bookmark`](https://developers.google.com/apps-script/reference/document/bookmark.html) at the given [`Position`](https://developers.google.com/apps-script/reference/document/position.html).

```
// Opens the Docs file and retrieves the tab by its IDs. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument().getActiveTab() instead.
// TODO(developer): Replace the IDs with your own.
const documentTab = DocumentApp.openById(DOCUMENT_ID).getTab(TAB_ID).asDocumentTab();

// Gets the tab body and adds a paragraph.
const paragraph = documentTab.getBody().appendParagraph('My new paragraph.');

// Creates a position at the first character of the paragraph text.
const position = documentTab.newPosition(paragraph.getChild(0), 0);

// Adds a bookmark at the first character of the paragraph text.
const bookmark = documentTab.addBookmark(position);

// Logs the bookmark ID to the console.
console.log(bookmark.getId());
```
@param position The position of the new bookmark.
@return The new bookmark.*/ addBookmark(
      position: DocumentApp.Position,
    ): DocumentApp.Bookmark;
    /**Adds a tab footer section, if none exists.

```
// Opens the Docs file and retrieves the tab by its IDs. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument().getActiveTab() instead.
// TODO(developer): Replace the IDs with your own.
const documentTab = DocumentApp.openById(DOCUMENT_ID).getTab(TAB_ID).asDocumentTab();

// Adds a footer to the tab.
const footer = documentTab.addFooter();

// Sets the footer text to 'This is a footer.'
footer.setText('This is a footer');
```
@return The tab footer.*/ addFooter(): DocumentApp.FooterSection;
    /**Adds a tab header section, if none exists.

```
// Opens the Docs file and retrieves the tab by its IDs. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument().getActiveTab() instead.
// TODO(developer): Replace the IDs with your own.
const documentTab = DocumentApp.openById(DOCUMENT_ID).getTab(TAB_ID).asDocumentTab();

// Adds a header to the tab.
const header = documentTab.addHeader();

// Sets the header text to 'This is a header.'
header.setText('This is a header');
```
@return The tab header.*/ addHeader(): DocumentApp.HeaderSection;
    /**Adds a [`NamedRange`](https://developers.google.com/apps-script/reference/document/named-range.html), which is a [`Range`](https://developers.google.com/apps-script/reference/document/range.html) that has a name and ID to use for
later retrieval. Names aren't necessarily unique, even across tabs; several different ranges in
the same document can share the same name, much like a class in HTML. By contrast, IDs are
unique within the document, like an ID in HTML. After you add a `NamedRange` you can't
modify it, you can only remove it.

Any script that accesses the tab can access a `NamedRange`. To avoid unintended
conflicts between scripts, consider prefixing range names with a unique string.

```
// Creates a named range that includes every table in a tab by its ID.
// TODO(developer): Replace the IDs with your own.
var documentTab = DocumentApp.openById(DOCUMENT_ID).getTab(TAB_ID).asDocumentTab();
var rangeBuilder = documentTab.newRange();
var tables = documentTab.getBody().getTables();
for (var i = 0; i < tables.length; i++) {
  rangeBuilder.addElement(tables[i]);
}
documentTab.addNamedRange('Tab t.0 tables', rangeBuilder.build());
```
@param name The name for the range, which doesn't need to be unique; range names must be
    between 1-256 characters.
@param range The range of elements to associate with the name; the range can be a [search result](https://developers.google.com/apps-script/reference/document/body.html#findText(String)) or manually constructed with [`newRange()`](https://developers.google.com/apps-script/reference/document/document-tab.html#newRange()).
@return The `NamedRange`.*/ addNamedRange(
      name: string,
      range: DocumentApp.Range,
    ): DocumentApp.NamedRange;
    /**Retrieves the tab's [`Body`](https://developers.google.com/apps-script/reference/document/body.html).

Tabs may contain different types of sections (for example, [`HeaderSection`](https://developers.google.com/apps-script/reference/document/header-section.html), [`FooterSection`](https://developers.google.com/apps-script/reference/document/footer-section.html)). The active section for a tab is the [`Body`](https://developers.google.com/apps-script/reference/document/body.html).

Element methods in `DocumentTab` delegate to the [`Body`](https://developers.google.com/apps-script/reference/document/body.html).

```
// Opens the Docs file and retrieves the tab by its IDs. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument().getActiveTab() instead.
// TODO(developer): Replace the IDs with your own.
const documentTab = DocumentApp.openById(DOCUMENT_ID).getTab(TAB_ID).asDocumentTab();

// Gets the tab body.
const body = documentTab.getBody();

// Gets the body text and logs it to the console.
console.log(body.getText());
```
@return The tab's body section.*/ getBody(): DocumentApp.Body;
    /**Gets the [`Bookmark`](https://developers.google.com/apps-script/reference/document/bookmark.html) with the given ID. This method returns `null` if no such `Bookmark` exists within this tab.

```
// Opens the Docs file and retrieves the tab by its IDs. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument().getActiveTab() instead.
// TODO(developer): Replace the IDs with your own.
const documentTab = DocumentApp.openById(DOCUMENT_ID).getTab(TAB_ID).asDocumentTab();

// Gets the bookmark by its ID.
const bookmark = documentTab.getBookmark('id.xyz654321');

// If the bookmark exists within the tab, logs the character offset of its position to the
// console. Otherwise, logs 'No bookmark exists with the given ID.' to the console.
if (bookmark) {
  console.log(bookmark.getPosition().getOffset());
} else {
  console.log('No bookmark exists with the given ID.');
}
```
@param id The ID for the `Bookmark`.
@return The `Bookmark` with the given ID, or `null` if no such `Bookmark`
    exists within the tab.*/ getBookmark(id: string): DocumentApp.Bookmark;
    /**Gets all [`Bookmark`](https://developers.google.com/apps-script/reference/document/bookmark.html) objects in the tab.

```
// Opens the Docs file and retrieves the tab by its IDs. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument().getActiveTab() instead.
// TODO(developer): Replace the IDs with your own.
const documentTab = DocumentApp.openById(DOCUMENT_ID).getTab(TAB_ID).asDocumentTab();

// Gets all of the bookmarks in the tab.
const bookmarks = documentTab.getBookmarks();

// Logs the number of bookmarks in the tab to the console.
console.log(bookmarks.length);
```
@return An array of the `Bookmark` objects in the tab.*/ getBookmarks(): DocumentApp.Bookmark[];
    /**Retrieves the tab's footer section, if one exists.

```
// Opens the Docs file and retrieves the tab by its IDs. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument().getActiveTab() instead.
// TODO(developer): Replace the IDs with your own.
const documentTab = DocumentApp.openById(DOCUMENT_ID).getTab(TAB_ID).asDocumentTab();

// Gets the text of the tab's footer and logs it to the console.
console.log(documentTab.getFooter().getText());
```
@return The tab's footer.*/ getFooter(): DocumentApp.FooterSection;
    /**Retrieves all the [`Footnote`](https://developers.google.com/apps-script/reference/document/footnote.html) elements in the tab's body.

Calls to `getFootnotes` cause an iteration over the tab's elements. For large tabs,
avoid unnecessary calls to this method.

```
// Opens the Docs file and retrieves the tab by its IDs. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument().getActiveTab() instead.
// TODO(developer): Replace the IDs with your own.
const documentTab = DocumentApp.openById(DOCUMENT_ID).getTab(TAB_ID).asDocumentTab();

// Gets the first footnote.
const footnote = documentTab.getFootnotes()[0];

// Logs footnote contents to the console.
console.log(footnote.getFootnoteContents().getText());
```
@return The tab's footnotes.*/ getFootnotes(): DocumentApp.Footnote[];
    /**Retrieves the tab's header section, if one exists.

```
// Opens the Docs file and retrieves the tab by its IDs. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument().getActiveTab() instead.
// TODO(developer): Replace the IDs with your own.
const documentTab = DocumentApp.openById(DOCUMENT_ID).getTab(TAB_ID).asDocumentTab();

// Gets the text of the tab's header and logs it to the console.
console.log(documentTab.getHeader().getText());
```
@return The tab's header.*/ getHeader(): DocumentApp.HeaderSection;
    /**Gets the [`NamedRange`](https://developers.google.com/apps-script/reference/document/named-range.html) with the given ID. This method returns `null` if no such
`NamedRange` exists in the tab. Names are not necessarily unique, even across tabs;
several different ranges in the same document may share the same name, much like a class in
HTML. By contrast, IDs are unique within the tab, like an ID in HTML.
@param id The range's ID, which is unique within the tab.
@return The `NamedRange` with the given ID, or `null` if no such range exists in
    the tab.*/ getNamedRangeById(id: string): DocumentApp.NamedRange;
    /**Gets all [`NamedRange`](https://developers.google.com/apps-script/reference/document/named-range.html) objects in the tab.

A `NamedRange` can be accessed by any script that accesses the tab. To avoid
unintended conflicts between scripts, consider prefixing range names with a unique string.
@return An array of the `NamedRange` objects in the tab, possibly including multiple
    ranges with the same name.*/ getNamedRanges(): DocumentApp.NamedRange[];
    /**Gets all [`NamedRange`](https://developers.google.com/apps-script/reference/document/named-range.html) objects in the tab with the given name. Names are not necessarily
unique, even across tabs; several different ranges in the same document may share the same
name, much like a class in HTML. By contrast, IDs are unique within the tab, like an ID in
HTML.

A `NamedRange` can be accessed by any script that accesses the tab. To avoid
unintended conflicts between scripts, consider prefixing range names with a unique string.
@param name The range's name, which is not necessarily unique.
@return An array of the `NamedRange` objects in the tab with the given name.*/ getNamedRanges(
      name: string,
    ): DocumentApp.NamedRange[];
    /**Creates a new [`Position`](https://developers.google.com/apps-script/reference/document/position.html), which is a reference to a location in the tab, relative to a
specific element. The user's cursor is represented as a `Position`, among other uses.

```
// Append a paragraph, then place the user's cursor after the first word of the new paragraph.
// TODO(developer): Replace the IDs with your own.
var doc = DocumentApp.openById(DOCUMENT_ID);
var documentTab = doc.getTab(TAB_ID).asDocumentTab();
var paragraph = documentTab.getBody().appendParagraph('My new paragraph.');
var position = documentTab.newPosition(paragraph.getChild(0), 2);
doc.setCursor(position);
```
@param element The element that contains the newly created `Position` to; this must be
    either a [`Text`](https://developers.google.com/apps-script/reference/document/text.html) element or a container element like [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@param offset For [`Text`](https://developers.google.com/apps-script/reference/document/text.html) elements, the number of characters before the `Position`;
    for other elements, the number of child elements before the `Position` within the
    same container element.
@return The new `Position`.*/ newPosition(
      element: DocumentApp.Element,
      offset: Integer,
    ): DocumentApp.Position;
    /**Creates a builder used to construct [`Range`](https://developers.google.com/apps-script/reference/document/range.html) objects from tab elements.

```
// Change the user's selection to a range that includes every table in the tab.
// TODO(developer): Replace the IDs with your own.
var doc = DocumentApp.openById(DOCUMENT_ID);
var documentTab = doc.getTab(TAB_ID).asDocumentTab();
var rangeBuilder = documentTab.newRange();
var tables = documentTab.getBody().getTables();
for (var i = 0; i < tables.length; i++) {
  rangeBuilder.addElement(tables[i]);
}
doc.setSelection(rangeBuilder.build());
```
@return The new builder.*/ newRange(): DocumentApp.RangeBuilder;
  }
  interface Document {
    /**Adds a [`Bookmark`](https://developers.google.com/apps-script/reference/document/bookmark.html) at the given [`Position`](https://developers.google.com/apps-script/reference/document/position.html) to the first tab or, for scripts that are
[bound](/apps-script/scripts_containers) to a document, the active tab. To add a
bookmark to any tab, use the [`DocumentTab.addBookmark(position)`](https://developers.google.com/apps-script/reference/document/document-tab.html#addBookmark(Position)) method.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Gets the active or first tab's body and adds a paragraph.
const paragraph = doc.getBody().appendParagraph('My new paragraph.');

// Creates a position at the first character of the paragraph text.
const position = doc.newPosition(paragraph.getChild(0), 0);

// Adds a bookmark at the first character of the paragraph text.
const bookmark = doc.addBookmark(position);

// Logs the bookmark ID to the console.
console.log(bookmark.getId());
```

}
@param position The position of the new bookmark.
@return The new bookmark.*/ addBookmark(
      position: DocumentApp.Position,
    ): DocumentApp.Bookmark;
    /**Adds the given user to the list of editors for the [`Document`](https://developers.google.com/apps-script/reference/document/document.html). If the user was already
on the list of viewers, this method promotes the user out of the list of viewers.
@param emailAddress The email address of the user to add.
@return This [`Document`](https://developers.google.com/apps-script/reference/document/document.html), for chaining.*/ addEditor(
      emailAddress: string,
    ): DocumentApp.Document;
    /**Adds the given user to the list of editors for the [`Document`](https://developers.google.com/apps-script/reference/document/document.html). If the user was already
on the list of viewers, this method promotes the user out of the list of viewers.
@param user A representation of the user to add.
@return This [`Document`](https://developers.google.com/apps-script/reference/document/document.html), for chaining.*/ addEditor(
      user: User,
    ): DocumentApp.Document;
    /**Adds the given array of users to the list of editors for the [`Document`](https://developers.google.com/apps-script/reference/document/document.html). If any of the
users were already on the list of viewers, this method promotes them out of the list of
viewers.
@param emailAddresses An array of email addresses of the users to add.
@return This [`Document`](https://developers.google.com/apps-script/reference/document/document.html), for chaining.*/ addEditors(
      emailAddresses: string[],
    ): DocumentApp.Document;
    /**Adds a footer section, if none exists, to the first tab or, for scripts that are [bound](/apps-script/scripts_containers) to a document, the active tab. To add a footer
section to any tab, use the [`DocumentTab.addFooter()`](https://developers.google.com/apps-script/reference/document/document-tab.html#addFooter()) method.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Adds a footer to the document's active or first tab.
const footer = doc.addFooter();

// Sets the footer text to 'This is a footer.'
footer.setText('This is a footer');
```
@return The tab footer.*/ addFooter(): DocumentApp.FooterSection;
    /**Adds a header section, if none exists, to the first tab or, for scripts that are [bound](/apps-script/scripts_containers) to a document, the active tab. To add a header
section to any tab, use the [`DocumentTab.addHeader()`](https://developers.google.com/apps-script/reference/document/document-tab.html#addHeader()) method.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Adds a header to the document's active or first tab.
const header = doc.addHeader();

// Sets the header text to 'This is a header.'
header.setText('This is a header');
```
@return The tab header.*/ addHeader(): DocumentApp.HeaderSection;
    /**Adds a [`NamedRange`](https://developers.google.com/apps-script/reference/document/named-range.html), which is a [`Range`](https://developers.google.com/apps-script/reference/document/range.html) that has a name and ID to use for
later retrieval, in the first tab or, for scripts that are [bound](/apps-script/scripts_containers) to a document, the active tab. To add a `NamedRange` in any tab, use the [`DocumentTab.addNamedRange(name, range)`](https://developers.google.com/apps-script/reference/document/document-tab.html#addNamedRange(String,Range)) method. Names aren't
necessarily unique; several different ranges in the same document can share the same name, much
like a class in HTML. By contrast, IDs are unique within the document, like an ID in HTML.
After you add a `NamedRange` to a document, you can't modify it, you can only remove it.

Any script that accesses the document can access a `NamedRange`. To avoid unintended
conflicts between scripts, consider prefixing range names with a unique string.

```
// Creates a named range that includes every table in the active tab.
var doc = DocumentApp.getActiveDocument();
var rangeBuilder = doc.newRange();
var tables = doc.getBody().getTables();
for (var i = 0; i < tables.length; i++) {
  rangeBuilder.addElement(tables[i]);
}
// Adds the named range to the document's active tab.
doc.addNamedRange('Document tables', rangeBuilder.build());
```
@param name The name for the range, which doesn't need to be unique; range names must be
    between 1-256 characters.
@param range The range of elements to associate with the name; the range can be [the active selection](https://developers.google.com/apps-script/reference/document/document.html#getSelection()), a [search result](https://developers.google.com/apps-script/reference/document/body.html#findText(String)), or manually constructed with [`newRange()`](https://developers.google.com/apps-script/reference/document/document.html#newRange()).
@return The `NamedRange`.*/ addNamedRange(
      name: string,
      range: DocumentApp.Range,
    ): DocumentApp.NamedRange;
    /**Adds the given user to the list of viewers for the [`Document`](https://developers.google.com/apps-script/reference/document/document.html). If the user was already
on the list of editors, this method has no effect.
@param emailAddress The email address of the user to add.
@return This [`Document`](https://developers.google.com/apps-script/reference/document/document.html), for chaining.*/ addViewer(
      emailAddress: string,
    ): DocumentApp.Document;
    /**Adds the given user to the list of viewers for the [`Document`](https://developers.google.com/apps-script/reference/document/document.html). If the user was already
on the list of editors, this method has no effect.
@param user A representation of the user to add.
@return This [`Document`](https://developers.google.com/apps-script/reference/document/document.html), for chaining.*/ addViewer(
      user: User,
    ): DocumentApp.Document;
    /**Adds the given array of users to the list of viewers for the [`Document`](https://developers.google.com/apps-script/reference/document/document.html). If any of the
users were already on the list of editors, this method has no effect for them.
@param emailAddresses An array of email addresses of the users to add.
@return This [`Document`](https://developers.google.com/apps-script/reference/document/document.html), for chaining.*/ addViewers(
      emailAddresses: string[],
    ): DocumentApp.Document;
    /**Gets the user's currently active [`Tab`](https://developers.google.com/apps-script/reference/document/tab.html) in the document. A script can only access the
active tab of the user who is running the script, and only if the script is [bound](/apps-script/scripts_containers) to the document.

```
// Display a dialog box that shows the title of the tab that the
// user is currently viewing.
const tab = DocumentApp.getActiveDocument().getActiveTab();
DocumentApp.getUi().alert('ID of selected tab: ' + tab.getTitle());
```
@return The user's currently active [`Tab`](https://developers.google.com/apps-script/reference/document/tab.html), or `null` if the script is not bound to
    the document.*/ getActiveTab(): DocumentApp.Tab;
    /**Retrieves the current `Document` contents as a blob of the specified type.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Gets the document as a PDF.
const pdf = doc.getAs('application/pdf');

// Logs the name of the PDF to the console.
console.log(pdf.getName());
```
@param contentType The MIME type to convert to; `'application/pdf'` and `'text/markdown'` are supported.
@return The current document as a blob.*/ getAs(contentType: string): Blob;
    /**Retrieves the current `Document` contents as a blob.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Retrieves the current document's contents as a blob and logs it to the console.
console.log(doc.getBlob().getContentType());
```
@return The current document as a blob.*/ getBlob(): Blob;
    /**Retrieves the first tab's [`Body`](https://developers.google.com/apps-script/reference/document/body.html) or, for scripts that are [bound](/apps-script/scripts_containers) to a document, the active tab's `DocumentBodySection`. To get the `DocumentBodySection` of any tab, use the [`DocumentTab.getBody()`](https://developers.google.com/apps-script/reference/document/document-tab.html#getBody()) method.

Tabs may contain different types of sections (for example, [`HeaderSection`](https://developers.google.com/apps-script/reference/document/header-section.html), [`FooterSection`](https://developers.google.com/apps-script/reference/document/footer-section.html)). The active section for a tab is the [`Body`](https://developers.google.com/apps-script/reference/document/body.html).

Element methods in `Document` delegate to the active [`Body`](https://developers.google.com/apps-script/reference/document/body.html).

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Gets the active or first tab's body.
const body = doc.getBody();

// Gets the body text and logs it to the console.
console.log(body.getText());
```
@return The tab body section.*/ getBody(): DocumentApp.Body;
    /**Gets the [`Bookmark`](https://developers.google.com/apps-script/reference/document/bookmark.html) with the given ID in the first tab or, for scripts that are [bound](/apps-script/scripts_containers) to a document, the active tab. To get a
bookmark in any tab, use the [`DocumentTab.getBookmark(id)`](https://developers.google.com/apps-script/reference/document/document-tab.html#getBookmark(String)) method. This method returns `null` if no such `Bookmark` exists within the tab.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Gets the bookmark by its ID in the document's active or first tab.
const bookmark = doc.getBookmark('id.xyz654321');

// If the bookmark exists, logs the character offset of its position to the console.
// otherwise, logs 'No bookmark exists with the given ID.' to the console.
if (bookmark) {
  console.log(bookmark.getPosition().getOffset());
} else {
  console.log('No bookmark exists with the given ID.');
}
```
@param id The ID for the `Bookmark`.
@return The `Bookmark` with the given ID, or `null` if no such `Bookmark`
    exists within the tab.*/ getBookmark(id: string): DocumentApp.Bookmark;
    /**Gets all [`Bookmark`](https://developers.google.com/apps-script/reference/document/bookmark.html) objects in the first tab or, for scripts that are [bound](/apps-script/scripts_containers) to a document, the active tab. To get all
bookmarks in any tab, use the [`DocumentTab.getBookmarks()`](https://developers.google.com/apps-script/reference/document/document-tab.html#getBookmarks()) method.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Gets all of the bookmarks in the document's active or first tab.
const bookmarks = doc.getBookmarks();

// Logs the number of bookmarks in the tab to the console.
console.log(bookmarks.length);
```
@return An array of the `Bookmark` objects in the tab.*/ getBookmarks(): DocumentApp.Bookmark[];
    /**Gets the user's cursor in the active tab. A script can only access the cursor of the user who
is running the script, and only if the script is [bound](/apps-script/scripts_containers) to the document.

```
// Insert some text at the cursor position and make it bold.
var cursor = DocumentApp.getActiveDocument().getCursor();
if (cursor) {
  // Attempt to insert text at the cursor position. If the insertion returns null, the cursor's
  // containing element doesn't allow insertions, so show the user an error message.
  var element = cursor.insertText('ಠ‿ಠ');
  if (element) {
    element.setBold(true);
  } else {
    DocumentApp.getUi().alert('Cannot insert text here.');
  }
} else {
  DocumentApp.getUi().alert('Cannot find a cursor.');
}
```
@return A representation of the user's cursor, or `null` if the user does not have a
    cursor placed in the tab or if the script is not bound to the document.*/ getCursor(): DocumentApp.Position;
    /**Gets the list of editors for this [`Document`](https://developers.google.com/apps-script/reference/document/document.html).
@return An array of users with edit permission.*/ getEditors(): User[];
    /**Retrieves the first tab's footer section or, for scripts that are [bound](/apps-script/scripts_containers) to a document, the active tab's footer
section. To get the footer section of any tab, use the [`DocumentTab.getFooter()`](https://developers.google.com/apps-script/reference/document/document-tab.html#getFooter()) method.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Gets the text of the active or first tab's footer and logs it to the console.
console.log(doc.getFooter().getText());
```
@return The tab's footer.*/ getFooter(): DocumentApp.FooterSection;
    /**Retrieves all the [`Footnote`](https://developers.google.com/apps-script/reference/document/footnote.html) elements in the first tab's body or, for scripts that are [bound](/apps-script/scripts_containers) to a document, the active tab's body. To get
all the footnotes in any tab, use the [`DocumentTab.getFootnotes()`](https://developers.google.com/apps-script/reference/document/document-tab.html#getFootnotes()) method.

Calls to `getFootnotes` cause an iteration over the tab's elements. For large tabs,
avoid unnecessary calls to this method.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Gets the first footnote in the active or first tab's body.
const footnote = doc.getFootnotes()[0];

// Logs footnote contents to the console.
console.log(footnote.getFootnoteContents().getText());
```
@return The tab's footnotes.*/ getFootnotes(): DocumentApp.Footnote[];
    /**Retrieves the first tab's header section or, for scripts that are [bound](/apps-script/scripts_containers) to a document, the active tab's header
section. To get the header section of any tab, use the [`DocumentTab.getHeader()`](https://developers.google.com/apps-script/reference/document/document-tab.html#getHeader()) method.

```
// Opens the Docs file by its ID. If you created your script from within
// a Google Docs file, you can use DocumentApp.getActiveDocument() instead.
// TODO(developer): Replace the ID with your own.
const doc = DocumentApp.openById(DOCUMENT_ID);

// Gets the text of the active or first tab's header and logs it to the console.
console.log(doc.getHeader().getText());
```
@return The tab's header.*/ getHeader(): DocumentApp.HeaderSection;
    /**Retrieves the document's unique identifier. The document ID is used with `DocumentApp.openById()` to open a specific document instance.
@return The document's ID.*/ getId(): string;
    /**Gets the document's language code. This is the language shown in the document editor's __File
> Language__, which may not be the actual language that the document contains.
@return The document language, or `null` if not defined.*/ getLanguage(): string;
    /**Retrieves the title of the document.
@return The document title.*/ getName(): string;
    /**Gets the [`NamedRange`](https://developers.google.com/apps-script/reference/document/named-range.html) with the given ID in the first tab or, for scripts that are [bound](/apps-script/scripts_containers) to a document, the active tab. To get the
`NamedRange` with the given ID in any tab, use the [`DocumentTab.getNamedRangeById(id)`](https://developers.google.com/apps-script/reference/document/document-tab.html#getNamedRangeById(String))
method. This method returns `null` if no such `NamedRange` exists in the tab. Names
are not necessarily unique, even across tabs; several different ranges in the same tab may
share the same name, much like a class in HTML. By contrast, IDs are unique within the tab,
like an ID in HTML.
@param id The range's ID, which is unique within the tab.
@return The `NamedRange` with the given ID, or `null` if no such range exists in
    the tab.*/ getNamedRangeById(id: string): DocumentApp.NamedRange;
    /**Gets all [`NamedRange`](https://developers.google.com/apps-script/reference/document/named-range.html) objects in the first tab or, for scripts that are [bound](/apps-script/scripts_containers) to a document, the active tab. To get all
`NamedRange` objects in any tab, use the [`DocumentTab.getNamedRanges()`](https://developers.google.com/apps-script/reference/document/document-tab.html#getNamedRanges()) method.

A `NamedRange` can be accessed by any script that accesses the tab. To avoid
unintended conflicts between scripts, consider prefixing range names with a unique string.
@return An array of the `NamedRange` objects in the tab, possibly including multiple
    ranges with the same name.*/ getNamedRanges(): DocumentApp.NamedRange[];
    /**Gets all [`NamedRange`](https://developers.google.com/apps-script/reference/document/named-range.html) objects with the given name in the first tab or, for scripts that
are [bound](/apps-script/scripts_containers) to a document, the active tab. To get
all `NamedRange` objects in any tab, use the [`DocumentTab.getNamedRanges(name)`](https://developers.google.com/apps-script/reference/document/document-tab.html#getNamedRanges(String)) method. Names are not necessarily unique, even across tabs; several different ranges in
the same tab may share the same name, much like a class in HTML. By contrast, IDs are unique
within the tab, like an ID in HTML.

A `NamedRange` can be accessed by any script that accesses the document. To avoid
unintended conflicts between scripts, consider prefixing range names with a unique string.
@param name The range's name, which is not necessarily unique.
@return An array of the `NamedRange` objects in the tab with the given name.*/ getNamedRanges(
      name: string,
    ): DocumentApp.NamedRange[];
    /**Gets the user's selection in the active tab. A script can only access the selection of the user
who is running the script, and only if the script is [bound](/apps-script/scripts_containers) to the document.

```
// Display a dialog box that tells the user how many elements are included in the selection.
var selection = DocumentApp.getActiveDocument().getSelection();
if (selection) {
  var elements = selection.getRangeElements();
  DocumentApp.getUi().alert('Number of selected elements: ' + elements.length);
} else {
  DocumentApp.getUi().alert('Nothing is selected.');
}
```
@return A representation of the user's selection, or `null` if the user does not have
    anything selected in the tab, if only the end of a paragraph is selected, if only the end
    of a paragraph and a new line are selected, or if the script is not bound to the document.*/ getSelection(): DocumentApp.Range;
    /**Gets all language codes that are supported in Google Docs files.
@return An array of language codes.*/ getSupportedLanguageCodes(): string[];
    /**Gets the [`Tab`](https://developers.google.com/apps-script/reference/document/tab.html) with the specified ID. This method returns `null` if no such `Tab` exists. Can access tabs at any nesting level.
@param tabId The ID of the tab to get.
@return The `Tab` with the specified ID, or `null` if no such `Tab` exists.*/ getTab(
      tabId: string,
    ): DocumentApp.Tab;
    /**Gets all unnested [`Tab`](https://developers.google.com/apps-script/reference/document/tab.html)s that are part of the document.

Tabs can contain child tabs, a tab nested within another tab. Child tabs are accessible
using [`Tab.getChildTabs()`](https://developers.google.com/apps-script/reference/document/tab.html#getChildTabs()).
@return The list of all `Tab`s that are part of the document.*/ getTabs(): DocumentApp.Tab[];
    /**Retrieves the URL to access the current document.

```
var doc = DocumentApp.getActiveDocument();

// Send out the link to open the document.
MailApp.sendEmail("<email-address>", doc.getName(), doc.getUrl());
```
@return The URL to access the current document.*/ getUrl(): string;
    /**Gets the list of viewers and commenters for this [`Document`](https://developers.google.com/apps-script/reference/document/document.html).
@return An array of users with view or comment permission.*/ getViewers(): User[];
    /**Creates a new [`Position`](https://developers.google.com/apps-script/reference/document/position.html), which is a reference to a location in the tab, relative to a
specific element in the first tab or, for scripts that are [bound](/apps-script/scripts_containers) to a document, the active tab. To create a
`Position` relative to a location in any tab, use the [`DocumentTab.newPosition(element, offset)`](https://developers.google.com/apps-script/reference/document/document-tab.html#newPosition(Element,Integer))
method. The user's cursor is represented as a `Position`, among other uses.

```
// Append a paragraph to the active tab, then place the user's cursor after the first word of
// the new paragraph.
var doc = DocumentApp.getActiveDocument();
var paragraph = doc.getBody().appendParagraph('My new paragraph.');
var position = doc.newPosition(paragraph.getChild(0), 2);
doc.setCursor(position);
```
@param element The element that should contain the new `Position`; this must be either a
    [`Text`](https://developers.google.com/apps-script/reference/document/text.html) element or a container element like [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@param offset For [`Text`](https://developers.google.com/apps-script/reference/document/text.html) elements, the number of characters before the `Position`;
    for other elements, the number of child elements before the `Position` within the
    same container element.
@return The new `Position`.*/ newPosition(
      element: DocumentApp.Element,
      offset: Integer,
    ): DocumentApp.Position;
    /**Creates a builder used to construct [`Range`](https://developers.google.com/apps-script/reference/document/range.html) objects from tab elements in the
first tab or, for scripts that are [bound](/apps-script/scripts_containers) to a
document, the active tab. To create a builder used to construct `DocumentRange` objects
from tab elements in any tab, use the [`DocumentTab.newRange()`](https://developers.google.com/apps-script/reference/document/document-tab.html#newRange()) method.

```
// Change the user's selection to a range that includes every table in the active tab.
var doc = DocumentApp.getActiveDocument();
var rangeBuilder = doc.newRange();
var tables = doc.getBody().getTables();
for (var i = 0; i < tables.length; i++) {
  rangeBuilder.addElement(tables[i]);
}
doc.setSelection(rangeBuilder.build());
```
@return The new builder.*/ newRange(): DocumentApp.RangeBuilder;
    /**Removes the given user from the list of editors for the [`Document`](https://developers.google.com/apps-script/reference/document/document.html). This method doesn't
block users from accessing the [`Document`](https://developers.google.com/apps-script/reference/document/document.html) if they belong to a class of users who have
general access—for example, if the [`Document`](https://developers.google.com/apps-script/reference/document/document.html) is shared with the user's entire
domain, or if the [`Document`](https://developers.google.com/apps-script/reference/document/document.html) is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of viewers.
@param emailAddress The email address of the user to remove.
@return This [`Document`](https://developers.google.com/apps-script/reference/document/document.html), for chaining.*/ removeEditor(
      emailAddress: string,
    ): DocumentApp.Document;
    /**Removes the given user from the list of editors for the [`Document`](https://developers.google.com/apps-script/reference/document/document.html). This method doesn't
block users from accessing the [`Document`](https://developers.google.com/apps-script/reference/document/document.html) if they belong to a class of users who have
general access—for example, if the [`Document`](https://developers.google.com/apps-script/reference/document/document.html) is shared with the user's entire
domain, or if the [`Document`](https://developers.google.com/apps-script/reference/document/document.html) is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of viewers.
@param user A representation of the user to remove.
@return This [`Document`](https://developers.google.com/apps-script/reference/document/document.html), for chaining.*/ removeEditor(
      user: User,
    ): DocumentApp.Document;
    /**Removes the given user from the list of viewers and commenters for the [`Document`](https://developers.google.com/apps-script/reference/document/document.html). This
method has no effect if the user is an editor, not a viewer or commenter. This method also
doesn't block users from accessing the [`Document`](https://developers.google.com/apps-script/reference/document/document.html) if they belong to a class of users who
have general access—for example, if the [`Document`](https://developers.google.com/apps-script/reference/document/document.html) is shared with the user's
entire domain, or if the [`Document`](https://developers.google.com/apps-script/reference/document/document.html) is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of editors.
@param emailAddress The email address of the user to remove.
@return This [`Document`](https://developers.google.com/apps-script/reference/document/document.html) for chaining.*/ removeViewer(
      emailAddress: string,
    ): DocumentApp.Document;
    /**Removes the given user from the list of viewers and commenters for the [`Document`](https://developers.google.com/apps-script/reference/document/document.html). This
method has no effect if the user is an editor, not a viewer. This method also doesn't block
users from accessing the [`Document`](https://developers.google.com/apps-script/reference/document/document.html) if they belong to a class of users who have general
access—for example, if the [`Document`](https://developers.google.com/apps-script/reference/document/document.html) is shared with the user's entire domain, or
if the [`Document`](https://developers.google.com/apps-script/reference/document/document.html) is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of editors.
@param user A representation of the user to remove.
@return This [`Document`](https://developers.google.com/apps-script/reference/document/document.html) for chaining.*/ removeViewer(
      user: User,
    ): DocumentApp.Document;
    /**Saves the current `Document`. Causes pending updates to be flushed and applied.

The `saveAndClose()` method is automatically invoked at the end of script execution
for each open editable `Document`.

A closed `Document` can't be edited. Use `DocumentApp.openById()` to reopen a
given document for editing.*/ saveAndClose(): void;
    /**Sets the user's selected [`Tab`](https://developers.google.com/apps-script/reference/document/tab.html) in the current document to the tab with the specified ID.

```
const doc = DocumentApp.getActiveDocument()

// Sets the user's selected tab by its ID.
// TODO(developer): Replace the ID with your own.
const tab = doc.setActiveTab(TAB_ID);
```
@param tabId The ID of the tab to set as active.*/ setActiveTab(
      tabId: string,
    ): void;
    /**Sets the user's cursor, given a [`Position`](https://developers.google.com/apps-script/reference/document/position.html). A script can only access the cursor of the
user who is running the script, and only if the script is [bound](/apps-script/scripts_containers) to the document.

Providing a [`Position`](https://developers.google.com/apps-script/reference/document/position.html) from an inactive [`Tab`](https://developers.google.com/apps-script/reference/document/tab.html) switches the user's active tab.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();

// Append a paragraph, then place the user's cursor after the first word of the new paragraph.
var paragraph = documentTab.getBody().appendParagraph('My new paragraph.');
var position = documentTab.newPosition(paragraph.getChild(0), 2);
doc.setCursor(position);
```
@param position The new cursor location.
@return This `Document`, for chaining.*/ setCursor(
      position: DocumentApp.Position,
    ): DocumentApp.Document;
    /**Sets the document's language code. This is the language shown in the document editor's __File
> Language__, which may not be the actual language that the document contains. Use [`getSupportedLanguageCodes()`](https://developers.google.com/apps-script/reference/document/document.html#getSupportedLanguageCodes()) to get all the valid language codes.
@param languageCode The language code.
@return This `Document`, for chaining.*/ setLanguage(
      languageCode: string,
    ): DocumentApp.Document;
    /**Sets the document title.
@param name The new document title.
@return The current document.*/ setName(name: string): DocumentApp.Document;
    /**Sets the user's selection in the active tab, given a [`Range`](https://developers.google.com/apps-script/reference/document/range.html). A script can only
access the selection of the user who is running the script, and only if the script is [bound](/apps-script/scripts_containers) to the document.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();

// Change the user's selection to a range that includes every table in the document.
var rangeBuilder = documentTab.newRange();
var tables = documentTab.getBody().getTables();
for (var i = 0; i < tables.length; i++) {
  rangeBuilder.addElement(tables[i]);
}
doc.setSelection(rangeBuilder.build());
```
@param range The new range of elements to select.
@return This `Document`, for chaining.*/ setSelection(
      range: DocumentApp.Range,
    ): DocumentApp.Document;
  }
  interface Date {
    /**Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a
parent.
@return The new copy.*/ copy(): DocumentApp.Date;
    /**Retrieves the element's attributes.

The result is an object containing a property for each valid element attribute where each
property name corresponds to an item in the `DocumentApp.Attribute` enumeration.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Append a styled paragraph.
var par = body.appendParagraph('A bold, italicized paragraph.');
par.setBold(true);
par.setItalic(true);

// Retrieve the paragraph's attributes.
var atts = par.getAttributes();

// Log the paragraph attributes.
for (var att in atts) {
  Logger.log(att + ":" + atts[att]);
}
```
@return The element's attributes.*/ getAttributes(): Object;
    /**Returns the display value that's rendered in the document. The display value uses the UTC
timezone and the date's locale. For example, `Jul 16, 2021`.
@return The display value.*/ getDisplayText(): string;
    /**Returns the date's locale used for the display value. For example, `en`.
@return The locale of the date.*/ getLocale(): string;
    /**Retrieves the element's next sibling element.

The next sibling has the same parent and follows the current element.
@return The next sibling element.*/ getNextSibling(): DocumentApp.Element;
    /**Retrieves the element's parent element.

The parent element contains the current element.
@return The parent element.*/ getParent(): DocumentApp.ContainerElement;
    /**Retrieves the element's previous sibling element.

The previous sibling has the same parent and precedes the current element.
@return The previous sibling element.*/ getPreviousSibling(): DocumentApp.Element;
    /**Returns the timestamp associated with the date.
@return The timestamp.*/ getTimestamp(): Date;
    /**Retrieves the element's [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html).

Use `getType()` to determine the exact type of a given element.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Obtain the first element in the active tab's body.

var firstChild = body.getChild(0);

// Use getType() to determine the element's type.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  Logger.log('The first element is a paragraph.');
} else {
  Logger.log('The first element is not a paragraph.');
}
```
@return The element type.*/ getType(): DocumentApp.ElementType;
    /**Determines whether the element is at the end of the [`Document`](https://developers.google.com/apps-script/reference/document/document.html).
@return Whether the element is at the end of the tab.*/ isAtDocumentEnd(): boolean;
    /**Merges the element with the preceding sibling of the same type.

Only elements of the same [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html) can be merged. Any child elements contained in
the current element are moved to the preceding sibling element.

The current element is removed from the document.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Example 1: Merge paragraphs
// Append two paragraphs to the document's active tab.
var par1 = body.appendParagraph('Paragraph 1.');
var par2 = body.appendParagraph('Paragraph 2.');
// Merge the newly added paragraphs into a single paragraph.
par2.merge();

// Example 2: Merge table cells
// Create a two-dimensional array containing the table's cell contents.
var cells = [
['Row 1, Cell 1', 'Row 1, Cell 2'],
['Row 2, Cell 1', 'Row 2, Cell 2']
];
// Build a table from the array.
var table = body.appendTable(cells);
// Get the first row in the table.
 var row = table.getRow(0);
// Get the two cells in this row.
var cell1 = row.getCell(0);
var cell2 = row.getCell(1);
// Merge the current cell into its preceding sibling element.
var merged = cell2.merge();
```
@return The merged element.*/ merge(): DocumentApp.Date;
    /**Removes the element from its parent.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab()
var body = documentTab.getBody();

// Remove all images in the active tab's body.
var imgs = body.getImages();
for (var i = 0; i < imgs.length; i++) {
  imgs[i].removeFromParent();
}
```
@return The removed element.*/ removeFromParent(): DocumentApp.Date;
    /**Sets the element's attributes.

The specified attributes parameter must be an object where each property name is an item in
the `DocumentApp.Attribute` enumeration and each property value is the new value to be
applied.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Define a custom paragraph style.
var style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.RIGHT;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
style[DocumentApp.Attribute.FONT_SIZE] = 18;
style[DocumentApp.Attribute.BOLD] = true;

// Append a plain paragraph.
var par = body.appendParagraph('A paragraph with custom style.');

// Apply the custom style.
par.setAttributes(style);
```
@param attributes The element's attributes.
@return The current element.*/ setAttributes(
      attributes: Object,
    ): DocumentApp.Date;
  }
  interface ContainerElement {
    /**Returns the current element as a [`Body`](https://developers.google.com/apps-script/reference/document/body.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asBody(): DocumentApp.Body;
    /**Returns the current element as an [`Equation`](https://developers.google.com/apps-script/reference/document/equation.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asEquation(): DocumentApp.Equation;
    /**Returns the current element as a [`FooterSection`](https://developers.google.com/apps-script/reference/document/footer-section.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asFooterSection(): DocumentApp.FooterSection;
    /**Returns the current element as a [`FootnoteSection`](https://developers.google.com/apps-script/reference/document/footnote-section.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asFootnoteSection(): DocumentApp.FootnoteSection;
    /**Returns the current element as a [`HeaderSection`](https://developers.google.com/apps-script/reference/document/header-section.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asHeaderSection(): DocumentApp.HeaderSection;
    /**Returns the current element as a [`ListItem`](https://developers.google.com/apps-script/reference/document/list-item.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asListItem(): DocumentApp.ListItem;
    /**Returns the current element as a [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asParagraph(): DocumentApp.Paragraph;
    /**Returns the current element as a [`Table`](https://developers.google.com/apps-script/reference/document/table.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asTable(): DocumentApp.Table;
    /**Returns the current element as a [`TableCell`](https://developers.google.com/apps-script/reference/document/table-cell.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asTableCell(): DocumentApp.TableCell;
    /**Returns the current element as a [`TableOfContents`](https://developers.google.com/apps-script/reference/document/table-of-contents.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asTableOfContents(): DocumentApp.TableOfContents;
    /**Returns the current element as a [`TableRow`](https://developers.google.com/apps-script/reference/document/table-row.html).

Use this method to aid auto-complete whenever a given element is known to be of a specific
type.
@return The current element.*/ asTableRow(): DocumentApp.TableRow;
    /**Clears the contents of the element.
@return The current element.*/ clear(): DocumentApp.ContainerElement;
    /**Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a
parent.
@return The new copy.*/ copy(): DocumentApp.ContainerElement;
    /**Obtains a [`Text`](https://developers.google.com/apps-script/reference/document/text.html) version of the current element, for editing.

Use `editAsText` for manipulating the elements contents as rich text. The `editAsText` mode ignores non-text elements (such as [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) and [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html)).

Child elements fully contained within a deleted text range are removed from the element.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Insert two paragraphs separated by a paragraph containing an
// horizontal rule.
body.insertParagraph(0, "An editAsText sample.");
body.insertHorizontalRule(0);
body.insertParagraph(0, "An example.");

// Delete " sample.

 An" removing the horizontal rule in the process.
body.editAsText().deleteText(14, 25);
```
@return a text version of the current element*/ editAsText(): DocumentApp.Text;
    /**Searches the contents of the element for a descendant of the specified type.
@param elementType The type of element to search for.
@return A search result indicating the position of the search element.*/ findElement(
      elementType: DocumentApp.ElementType,
    ): DocumentApp.RangeElement;
    /**Searches the contents of the element for a descendant of the specified type, starting from the
specified [`RangeElement`](https://developers.google.com/apps-script/reference/document/range-element.html).

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Define the search parameters.
var searchType = DocumentApp.ElementType.PARAGRAPH;
var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
var searchResult = null;

// Search until the paragraph is found.
while (searchResult = body.findElement(searchType, searchResult)) {
  var par = searchResult.getElement().asParagraph();
  if (par.getHeading() == searchHeading) {
    // Found one, update and stop.
    par.setText('This is the first header.');
    return;
  }
}
```
@param elementType The type of element to search for.
@param from The search result to search from.
@return A search result indicating the next position of the search element.*/ findElement(
      elementType: DocumentApp.ElementType,
      from: DocumentApp.RangeElement,
    ): DocumentApp.RangeElement;
    /**Searches the contents of the element for the specified text pattern using regular expressions.

A subset of the JavaScript regular expression features are not fully supported, such as
capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block
contained in the current element.
@param searchPattern the pattern to search for
@return a search result indicating the position of the search text, or null if there is no
    match*/ findText(searchPattern: string): DocumentApp.RangeElement;
    /**Searches the contents of the element for the specified text pattern, starting from a given
search result.

A subset of the JavaScript regular expression features are not fully supported, such as
capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block
contained in the current element.
@param searchPattern the pattern to search for
@param from the search result to search from
@return a search result indicating the next position of the search text, or null if there is no
    match*/ findText(
      searchPattern: string,
      from: DocumentApp.RangeElement,
    ): DocumentApp.RangeElement;
    /**Retrieves the element's attributes.

The result is an object containing a property for each valid element attribute where each
property name corresponds to an item in the `DocumentApp.Attribute` enumeration.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Append a styled paragraph.
var par = body.appendParagraph('A bold, italicized paragraph.');
par.setBold(true);
par.setItalic(true);

// Retrieve the paragraph's attributes.
var atts = par.getAttributes();

// Log the paragraph attributes.
for (var att in atts) {
  Logger.log(att + ":" + atts[att]);
}
```
@return The element's attributes.*/ getAttributes(): Object;
    /**Retrieves the child element at the specified child index.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Obtain the first element in the tab.
var firstChild = body.getChild(0);

// If it's a paragraph, set its contents.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  firstChild.asParagraph().setText("This is the first paragraph.");
}
```
@param childIndex The index of the child element to retrieve.
@return The child element at the specified index.*/ getChild(
      childIndex: Integer,
    ): DocumentApp.Element;
    /**Retrieves the child index for the specified child element.
@param child The child element for which to retrieve the index.
@return The child index.*/ getChildIndex(child: DocumentApp.Element): Integer;
    /**Retrieves the link url.
@return the link url, or null if the element contains multiple values for this attribute*/ getLinkUrl(): string;
    /**Retrieves the element's next sibling element.

The next sibling has the same parent and follows the current element.
@return The next sibling element.*/ getNextSibling(): DocumentApp.Element;
    /**Retrieves the number of children.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Log the number of elements in the tab.
Logger.log("There are " + body.getNumChildren() +
    " elements in the tab's body.");
```
@return The number of children.*/ getNumChildren(): Integer;
    /**Retrieves the element's parent element.

The parent element contains the current element.
@return The parent element.*/ getParent(): DocumentApp.ContainerElement;
    /**Retrieves the element's previous sibling element.

The previous sibling has the same parent and precedes the current element.
@return The previous sibling element.*/ getPreviousSibling(): DocumentApp.Element;
    /**Retrieves the contents of the element as a text string.
@return the contents of the element as text string*/ getText(): string;
    /**Gets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.
@return the type of text alignment, or `null` if the text contains multiple types of text
    alignments or if the text alignment has never been set*/ getTextAlignment(): DocumentApp.TextAlignment;
    /**Retrieves the element's [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html).

Use `getType()` to determine the exact type of a given element.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Obtain the first element in the active tab's body.

var firstChild = body.getChild(0);

// Use getType() to determine the element's type.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  Logger.log('The first element is a paragraph.');
} else {
  Logger.log('The first element is not a paragraph.');
}
```
@return The element type.*/ getType(): DocumentApp.ElementType;
    /**Determines whether the element is at the end of the [`Document`](https://developers.google.com/apps-script/reference/document/document.html).
@return Whether the element is at the end of the tab.*/ isAtDocumentEnd(): boolean;
    /**Merges the element with the preceding sibling of the same type.

Only elements of the same [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html) can be merged. Any child elements contained in
the current element are moved to the preceding sibling element.

The current element is removed from the document.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Example 1: Merge paragraphs
// Append two paragraphs to the document's active tab.
var par1 = body.appendParagraph('Paragraph 1.');
var par2 = body.appendParagraph('Paragraph 2.');
// Merge the newly added paragraphs into a single paragraph.
par2.merge();

// Example 2: Merge table cells
// Create a two-dimensional array containing the table's cell contents.
var cells = [
['Row 1, Cell 1', 'Row 1, Cell 2'],
['Row 2, Cell 1', 'Row 2, Cell 2']
];
// Build a table from the array.
var table = body.appendTable(cells);
// Get the first row in the table.
 var row = table.getRow(0);
// Get the two cells in this row.
var cell1 = row.getCell(0);
var cell2 = row.getCell(1);
// Merge the current cell into its preceding sibling element.
var merged = cell2.merge();
```
@return The merged element.*/ merge(): DocumentApp.ContainerElement;
    /**Removes the element from its parent.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab()
var body = documentTab.getBody();

// Remove all images in the active tab's body.
var imgs = body.getImages();
for (var i = 0; i < imgs.length; i++) {
  imgs[i].removeFromParent();
}
```
@return The removed element.*/ removeFromParent(): DocumentApp.ContainerElement;
    /**Replaces all occurrences of a given text pattern with a given replacement string, using regular
expressions.

The search pattern is passed as a string, not a JavaScript regular expression object.
Because of this you'll need to escape any backslashes in the pattern.

This methods uses Google's [RE2](https://github.com/google/re2) regular
expression library, which limits the [supported syntax](https://github.com/google/re2/wiki/Syntax).

The provided regular expression pattern is independently matched against each text block
contained in the current element.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Clear the text surrounding "Apps Script", with or without text.
body.replaceText("^.*Apps ?Script.*$", "Apps Script");
```
@param searchPattern the regex pattern to search for
@param replacement the text to use as replacement
@return the current element*/ replaceText(
      searchPattern: string,
      replacement: string,
    ): DocumentApp.Element;
    /**Sets the element's attributes.

The specified attributes parameter must be an object where each property name is an item in
the `DocumentApp.Attribute` enumeration and each property value is the new value to be
applied.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Define a custom paragraph style.
var style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.RIGHT;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
style[DocumentApp.Attribute.FONT_SIZE] = 18;
style[DocumentApp.Attribute.BOLD] = true;

// Append a plain paragraph.
var par = body.appendParagraph('A paragraph with custom style.');

// Apply the custom style.
par.setAttributes(style);
```
@param attributes The element's attributes.
@return The current element.*/ setAttributes(
      attributes: Object,
    ): DocumentApp.ContainerElement;
    /**Sets the link url.
@param url the link url
@return the current element*/ setLinkUrl(
      url: string,
    ): DocumentApp.ContainerElement;
    /**Sets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.

```
// Make the entire first paragraph in the active tab be superscript.
var documentTab = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
var text = documentTab.getBody().getParagraphs()[0].editAsText();
text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
```
@param textAlignment the type of text alignment to apply
@return the current element*/ setTextAlignment(
      textAlignment: DocumentApp.TextAlignment,
    ): DocumentApp.ContainerElement;
  }
  interface Bookmark {
    /**Gets the ID of the `Bookmark`. The ID is unique within the [`DocumentTab`](https://developers.google.com/apps-script/reference/document/document-tab.html).
@return The `Bookmark`'s ID, which is unique within the `DocumentTab`.*/ getId(): string;
    /**Gets the [`Position`](https://developers.google.com/apps-script/reference/document/position.html) of the `Bookmark` within the [`DocumentTab`](https://developers.google.com/apps-script/reference/document/document-tab.html). The `Position` remains accurate so long as the `Bookmark` is not deleted, even if the script
changes the document structure.
@return The position of the `Bookmark`.*/ getPosition(): DocumentApp.Position;
    /**Deletes the `Bookmark`. Calling this method on a `Bookmark` that has already been
deleted has no effect.*/ remove(): void;
  }
  interface Body {
    /**Creates and appends a new [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html).

The [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html) will be contained in a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@return The new horizontal rule.*/ appendHorizontalRule(): DocumentApp.HorizontalRule;
    /**Creates and appends a new [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) from the specified image blob.

The image will be contained in a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@param image The image data.
@return The appended image.*/ appendImage(
      image: BlobSource,
    ): DocumentApp.InlineImage;
    /**Appends the given [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html).

The [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) will be contained in a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).

Use this version of `appendImage` when appending a copy of an existing [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html).
@param image The image data.
@return The appended image.*/ appendImage(
      image: DocumentApp.InlineImage,
    ): DocumentApp.InlineImage;
    /**Appends the given [`ListItem`](https://developers.google.com/apps-script/reference/document/list-item.html).

Use this version of `appendListItem` when appending a copy of an existing [`ListItem`](https://developers.google.com/apps-script/reference/document/list-item.html).
@param listItem The list item to append.
@return The appended list item.*/ appendListItem(
      listItem: DocumentApp.ListItem,
    ): DocumentApp.ListItem;
    /**Creates and appends a new [`ListItem`](https://developers.google.com/apps-script/reference/document/list-item.html) containing the specified text contents.

Consecutive list items are added as part of the same list.
@param text The list item's text contents.
@return The new list item.*/ appendListItem(text: string): DocumentApp.ListItem;
    /**Creates and appends a new [`PageBreak`](https://developers.google.com/apps-script/reference/document/page-break.html).

The [`PageBreak`](https://developers.google.com/apps-script/reference/document/page-break.html) will be contained in a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@return The new page break.*/ appendPageBreak(): DocumentApp.PageBreak;
    /**Appends the given [`PageBreak`](https://developers.google.com/apps-script/reference/document/page-break.html).

The [`PageBreak`](https://developers.google.com/apps-script/reference/document/page-break.html) will be contained in a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).

Use this version of `appendPageBreak` when appending a copy of an existing [`PageBreak`](https://developers.google.com/apps-script/reference/document/page-break.html).
@param pageBreak The page break to append.
@return The appended page break.*/ appendPageBreak(
      pageBreak: DocumentApp.PageBreak,
    ): DocumentApp.PageBreak;
    /**Appends the given [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).

Use this version of `appendParagraph` when appending a copy of an existing [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@param paragraph The paragraph to append.
@return The appended paragraph.*/ appendParagraph(
      paragraph: DocumentApp.Paragraph,
    ): DocumentApp.Paragraph;
    /**Creates and appends a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html) containing the specified text contents.
@param text The paragraph's text contents.
@return The new paragraph.*/ appendParagraph(
      text: string,
    ): DocumentApp.Paragraph;
    /**Creates and appends a new [`Table`](https://developers.google.com/apps-script/reference/document/table.html).

This method will also append an empty paragraph after the table, since Google Docs documents
cannot end with a table.
@return The new table.*/ appendTable(): DocumentApp.Table;
    /**Appends the given [`Table`](https://developers.google.com/apps-script/reference/document/table.html).

Use this version of `appendTable` when appending a copy of an existing [`Table`](https://developers.google.com/apps-script/reference/document/table.html).
This method will also append an empty paragraph after the table, since Google Docs documents
cannot end with a table.
@param table The table to append.
@return The appended table.*/ appendTable(
      table: DocumentApp.Table,
    ): DocumentApp.Table;
    /**Appends a new [`Table`](https://developers.google.com/apps-script/reference/document/table.html) containing a [`TableCell`](https://developers.google.com/apps-script/reference/document/table-cell.html) for each specified string value.

This method will also append an empty paragraph after the table, since Google Docs documents
cannot end with a table.
@param cells The text contents of the table cells to add to the new table.
@return The appended table.*/ appendTable(cells: string[][]): DocumentApp.Table;
    /**Clears the contents of the element.
@return The current element.*/ clear(): DocumentApp.Body;
    /**Returns a detached, deep copy of the current element.

Any child elements present in the element are also copied. The new element doesn't have a
parent.
@return The new copy.*/ copy(): DocumentApp.Body;
    /**Obtains a [`Text`](https://developers.google.com/apps-script/reference/document/text.html) version of the current element, for editing.

Use `editAsText` for manipulating the elements contents as rich text. The `editAsText` mode ignores non-text elements (such as [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) and [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html)).

Child elements fully contained within a deleted text range are removed from the element.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Insert two paragraphs separated by a paragraph containing an
// horizontal rule.
body.insertParagraph(0, "An editAsText sample.");
body.insertHorizontalRule(0);
body.insertParagraph(0, "An example.");

// Delete " sample.

 An" removing the horizontal rule in the process.
body.editAsText().deleteText(14, 25);
```
@return a text version of the current element*/ editAsText(): DocumentApp.Text;
    /**Searches the contents of the element for a descendant of the specified type.
@param elementType The type of element to search for.
@return A search result indicating the position of the search element.*/ findElement(
      elementType: DocumentApp.ElementType,
    ): DocumentApp.RangeElement;
    /**Searches the contents of the element for a descendant of the specified type, starting from the
specified [`RangeElement`](https://developers.google.com/apps-script/reference/document/range-element.html).

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Define the search parameters.
var searchType = DocumentApp.ElementType.PARAGRAPH;
var searchHeading = DocumentApp.ParagraphHeading.HEADING1;
var searchResult = null;

// Search until the paragraph is found.
while (searchResult = body.findElement(searchType, searchResult)) {
  var par = searchResult.getElement().asParagraph();
  if (par.getHeading() == searchHeading) {
    // Found one, update and stop.
    par.setText('This is the first header.');
    return;
  }
}
```
@param elementType The type of element to search for.
@param from The search result to search from.
@return A search result indicating the next position of the search element.*/ findElement(
      elementType: DocumentApp.ElementType,
      from: DocumentApp.RangeElement,
    ): DocumentApp.RangeElement;
    /**Searches the contents of the element for the specified text pattern using regular expressions.

A subset of the JavaScript regular expression features are not fully supported, such as
capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block
contained in the current element.
@param searchPattern the pattern to search for
@return a search result indicating the position of the search text, or null if there is no
    match*/ findText(searchPattern: string): DocumentApp.RangeElement;
    /**Searches the contents of the element for the specified text pattern, starting from a given
search result.

A subset of the JavaScript regular expression features are not fully supported, such as
capture groups and mode modifiers.

The provided regular expression pattern is independently matched against each text block
contained in the current element.
@param searchPattern the pattern to search for
@param from the search result to search from
@return a search result indicating the next position of the search text, or null if there is no
    match*/ findText(
      searchPattern: string,
      from: DocumentApp.RangeElement,
    ): DocumentApp.RangeElement;
    /**Retrieves the element's attributes.

The result is an object containing a property for each valid element attribute where each
property name corresponds to an item in the `DocumentApp.Attribute` enumeration.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Append a styled paragraph.
var par = body.appendParagraph('A bold, italicized paragraph.');
par.setBold(true);
par.setItalic(true);

// Retrieve the paragraph's attributes.
var atts = par.getAttributes();

// Log the paragraph attributes.
for (var att in atts) {
  Logger.log(att + ":" + atts[att]);
}
```
@return The element's attributes.*/ getAttributes(): Object;
    /**Retrieves the child element at the specified child index.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Obtain the first element in the tab.
var firstChild = body.getChild(0);

// If it's a paragraph, set its contents.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  firstChild.asParagraph().setText("This is the first paragraph.");
}
```
@param childIndex The index of the child element to retrieve.
@return The child element at the specified index.*/ getChild(
      childIndex: Integer,
    ): DocumentApp.Element;
    /**Retrieves the child index for the specified child element.
@param child The child element for which to retrieve the index.
@return The child index.*/ getChildIndex(child: DocumentApp.Element): Integer;
    /**Retrieves all the [`Footnotes`](https://developers.google.com/apps-script/reference/document/footnote.html) contained in the section.
@deprecated
@return The section footnotes.*/ getFootnotes(): DocumentApp.Footnote[];
    /**Retrieves the set of attributes for the provided `ParagraphHeading`.
@param paragraphHeading The heading whose attributes should be retrieved.
@return A map of the attributes and their current values.*/ getHeadingAttributes(
      paragraphHeading: DocumentApp.ParagraphHeading,
    ): Object;
    /**Retrieves all the [`InlineImages`](https://developers.google.com/apps-script/reference/document/inline-image.html) contained in the section.
@return The section images.*/ getImages(): DocumentApp.InlineImage[];
    /**Retrieves the link url.
@deprecated
@return the link url, or null if the element contains multiple values for this attribute*/ getLinkUrl(): string;
    /**Retrieves all the [`ListItems`](https://developers.google.com/apps-script/reference/document/list-item.html) contained in the section.
@return The section list items.*/ getListItems(): DocumentApp.ListItem[];
    /**Retrieves the bottom margin, in points.
@return The bottom margin, in points.*/ getMarginBottom(): number;
    /**Retrieves the left margin, in points.
@return The left margin, in points.*/ getMarginLeft(): number;
    /**Retrieves the right margin.
@return The right margin, in points.*/ getMarginRight(): number;
    /**Retrieves the top margin.
@return The top margin, in points.*/ getMarginTop(): number;
    /**Retrieves the element's next sibling element.

The next sibling has the same parent and follows the current element.
@deprecated
@return The next sibling element.*/ getNextSibling(): DocumentApp.Element;
    /**Retrieves the number of children.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Log the number of elements in the tab.
Logger.log("There are " + body.getNumChildren() +
    " elements in the tab's body.");
```
@return The number of children.*/ getNumChildren(): Integer;
    /**Retrieves the page height, in points.
@return The page height, in points.*/ getPageHeight(): number;
    /**Retrieves the page width, in points.
@return The page width, in points.*/ getPageWidth(): number;
    /**Retrieves all the [`Paragraphs`](https://developers.google.com/apps-script/reference/document/paragraph.html) contained in the section (including [`ListItems`](https://developers.google.com/apps-script/reference/document/list-item.html)).
@return The section paragraphs.*/ getParagraphs(): DocumentApp.Paragraph[];
    /**Retrieves the element's parent element.

The parent element contains the current element.
@return The parent element.*/ getParent(): DocumentApp.ContainerElement;
    /**Retrieves the element's previous sibling element.

The previous sibling has the same parent and precedes the current element.
@deprecated
@return The previous sibling element.*/ getPreviousSibling(): DocumentApp.Element;
    /**Retrieves all the [`Tables`](https://developers.google.com/apps-script/reference/document/table.html) contained in the section.
@return The section tables.*/ getTables(): DocumentApp.Table[];
    /**Retrieves the contents of the element as a text string.
@return the contents of the element as text string*/ getText(): string;
    /**Gets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.
@return the type of text alignment, or `null` if the text contains multiple types of text
    alignments or if the text alignment has never been set*/ getTextAlignment(): DocumentApp.TextAlignment;
    /**Retrieves the element's [`ElementType`](https://developers.google.com/apps-script/reference/document/element-type.html).

Use `getType()` to determine the exact type of a given element.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Obtain the first element in the active tab's body.

var firstChild = body.getChild(0);

// Use getType() to determine the element's type.
if (firstChild.getType() == DocumentApp.ElementType.PARAGRAPH) {
  Logger.log('The first element is a paragraph.');
} else {
  Logger.log('The first element is not a paragraph.');
}
```
@return The element type.*/ getType(): DocumentApp.ElementType;
    /**Creates and inserts a new [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html) at the specified index.

The [`HorizontalRule`](https://developers.google.com/apps-script/reference/document/horizontal-rule.html) will be contained in a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@param childIndex The index at which to insert the element.
@return The new horizontal rule.*/ insertHorizontalRule(
      childIndex: Integer,
    ): DocumentApp.HorizontalRule;
    /**Creates and inserts an [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) from the specified image blob, at the specified
index.
@param childIndex The index at which to insert the element.
@param image The image data.
@return The inserted inline image.*/ insertImage(
      childIndex: Integer,
      image: BlobSource,
    ): DocumentApp.InlineImage;
    /**Inserts the given [`InlineImage`](https://developers.google.com/apps-script/reference/document/inline-image.html) at the specified index.

The image will be contained in a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@param childIndex The index at which to insert the element.
@param image The image to insert.
@return The inserted inline image.*/ insertImage(
      childIndex: Integer,
      image: DocumentApp.InlineImage,
    ): DocumentApp.InlineImage;
    /**Inserts the given [`ListItem`](https://developers.google.com/apps-script/reference/document/list-item.html) at the specified index.
@param childIndex The index at which to insert.
@param listItem The list item to insert.
@return The inserted list item.*/ insertListItem(
      childIndex: Integer,
      listItem: DocumentApp.ListItem,
    ): DocumentApp.ListItem;
    /**Creates and inserts a new [`ListItem`](https://developers.google.com/apps-script/reference/document/list-item.html) at the specified index, containing the specified
text contents.
@param childIndex The index at which to insert.
@param text The list item's text contents.
@return The new list item.*/ insertListItem(
      childIndex: Integer,
      text: string,
    ): DocumentApp.ListItem;
    /**Creates and inserts a new [`PageBreak`](https://developers.google.com/apps-script/reference/document/page-break.html) at the specified index.

The [`PageBreak`](https://developers.google.com/apps-script/reference/document/page-break.html) will be contained in a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@param childIndex The index at which to insert the element.
@return The new page break.*/ insertPageBreak(
      childIndex: Integer,
    ): DocumentApp.PageBreak;
    /**Inserts the given [`PageBreak`](https://developers.google.com/apps-script/reference/document/page-break.html) at the specified index.

The [`PageBreak`](https://developers.google.com/apps-script/reference/document/page-break.html) will be contained in a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html).
@param childIndex The index at which to insert the element.
@param pageBreak The page break to insert.
@return The inserted page break.*/ insertPageBreak(
      childIndex: Integer,
      pageBreak: DocumentApp.PageBreak,
    ): DocumentApp.PageBreak;
    /**Inserts the given [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html) at the specified index.
@param childIndex The index at which to insert.
@param paragraph The paragraph to insert.
@return The inserted paragraph.*/ insertParagraph(
      childIndex: Integer,
      paragraph: DocumentApp.Paragraph,
    ): DocumentApp.Paragraph;
    /**Creates and inserts a new [`Paragraph`](https://developers.google.com/apps-script/reference/document/paragraph.html) at the specified index, containing the specified
text contents.
@param childIndex The index at which to insert.
@param text The paragraph's text contents.
@return The new paragraph.*/ insertParagraph(
      childIndex: Integer,
      text: string,
    ): DocumentApp.Paragraph;
    /**Creates and inserts a new [`Table`](https://developers.google.com/apps-script/reference/document/table.html) at the specified index.
@param childIndex The index at which to insert.
@return The new table.*/ insertTable(childIndex: Integer): DocumentApp.Table;
    /**Inserts the given [`Table`](https://developers.google.com/apps-script/reference/document/table.html) at the specified index.
@param childIndex The index at which to insert.
@param table The table to insert.
@return The inserted table.*/ insertTable(
      childIndex: Integer,
      table: DocumentApp.Table,
    ): DocumentApp.Table;
    /**Creates and inserts a new [`Table`](https://developers.google.com/apps-script/reference/document/table.html) containing the specified cells, at the specified index.
@param childIndex The index at which to insert.
@param cells The text contents of the table cells to add to the new table.
@return The new table.*/ insertTable(
      childIndex: Integer,
      cells: string[][],
    ): DocumentApp.Table;
    /**Determines whether the element is at the end of the [`Document`](https://developers.google.com/apps-script/reference/document/document.html).
@deprecated
@return Whether the element is at the end of the tab.*/ isAtDocumentEnd(): boolean;
    /**Removes the specified child element.
@param child The child element to remove.
@return The current element.*/ removeChild(
      child: DocumentApp.Element,
    ): DocumentApp.Body;
    /**Replaces all occurrences of a given text pattern with a given replacement string, using regular
expressions.

The search pattern is passed as a string, not a JavaScript regular expression object.
Because of this you'll need to escape any backslashes in the pattern.

This methods uses Google's [RE2](https://github.com/google/re2) regular
expression library, which limits the [supported syntax](https://github.com/google/re2/wiki/Syntax).

The provided regular expression pattern is independently matched against each text block
contained in the current element.

```
var body = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab().getBody();

// Clear the text surrounding "Apps Script", with or without text.
body.replaceText("^.*Apps ?Script.*$", "Apps Script");
```
@param searchPattern the regex pattern to search for
@param replacement the text to use as replacement
@return the current element*/ replaceText(
      searchPattern: string,
      replacement: string,
    ): DocumentApp.Element;
    /**Sets the element's attributes.

The specified attributes parameter must be an object where each property name is an item in
the `DocumentApp.Attribute` enumeration and each property value is the new value to be
applied.

```
var doc = DocumentApp.getActiveDocument();
var documentTab = doc.getActiveTab().asDocumentTab();
var body = documentTab.getBody();

// Define a custom paragraph style.
var style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =
    DocumentApp.HorizontalAlignment.RIGHT;
style[DocumentApp.Attribute.FONT_FAMILY] = 'Calibri';
style[DocumentApp.Attribute.FONT_SIZE] = 18;
style[DocumentApp.Attribute.BOLD] = true;

// Append a plain paragraph.
var par = body.appendParagraph('A paragraph with custom style.');

// Apply the custom style.
par.setAttributes(style);
```
@param attributes The element's attributes.
@return The current element.*/ setAttributes(
      attributes: Object,
    ): DocumentApp.Body;
    /**Sets the attributes for the provided `ParagraphHeading`.
@param paragraphHeading The heading whose attributes should be set.
@param attributes A map of attributes and the values to set them to.
@return The current element.*/ setHeadingAttributes(
      paragraphHeading: DocumentApp.ParagraphHeading,
      attributes: Object,
    ): DocumentApp.Body;
    /**Sets the link url.
@deprecated
@param url the link url
@return the current element*/ setLinkUrl(url: string): DocumentApp.Body;
    /**Sets the bottom margin, in points.
@param marginBottom The bottom margin, in points.
@return The current element.*/ setMarginBottom(
      marginBottom: number,
    ): DocumentApp.Body;
    /**Sets the left margin, in points.
@param marginLeft The left margin, in points.
@return The current element.*/ setMarginLeft(
      marginLeft: number,
    ): DocumentApp.Body;
    /**Sets the right margin, in points.
@param marginRight The right margin.
@return The current element.*/ setMarginRight(
      marginRight: number,
    ): DocumentApp.Body;
    /**Sets the top margin.
@param marginTop The top margin, in points.
@return The current element.*/ setMarginTop(
      marginTop: number,
    ): DocumentApp.Body;
    /**Sets the page height, in points.
@param pageHeight The page height, in points.
@return The current element.*/ setPageHeight(
      pageHeight: number,
    ): DocumentApp.Body;
    /**Sets the page width, in points.
@param pageWidth The page width, in points.
@return The current element.*/ setPageWidth(
      pageWidth: number,
    ): DocumentApp.Body;
    /**Sets the contents as plain text.

Note: existing contents are cleared.
@param text The new text contents.
@return The current element.*/ setText(text: string): DocumentApp.Body;
    /**Sets the text alignment. The available types of alignment are `DocumentApp.TextAlignment.NORMAL`, `DocumentApp.TextAlignment.SUBSCRIPT`, and `DocumentApp.TextAlignment.SUPERSCRIPT`.

```
// Make the entire first paragraph in the active tab be superscript.
var documentTab = DocumentApp.getActiveDocument().getActiveTab().asDocumentTab();
var text = documentTab.getBody().getParagraphs()[0].editAsText();
text.setTextAlignment(DocumentApp.TextAlignment.SUPERSCRIPT);
```
@param textAlignment the type of text alignment to apply
@return the current element*/ setTextAlignment(
      textAlignment: DocumentApp.TextAlignment,
    ): DocumentApp.Body;
  }
  interface Attribute {}
  interface _Attribute {
    /**The background color of an element (Paragraph, Table, etc) or document.*/ BACKGROUND_COLOR: Attribute;
    /**The font weight setting, for rich text.*/ BOLD: Attribute;
    /**The border color, for table elements.*/ BORDER_COLOR: Attribute;
    /**The border width in points, for table elements.*/ BORDER_WIDTH: Attribute;
    /**The code contents, for equation elements.*/ CODE: Attribute;
    /**The font family setting, for rich text.*/ FONT_FAMILY: Attribute;
    /**The font size setting in points, for rich text.*/ FONT_SIZE: Attribute;
    /**The foreground color setting, for rich text.*/ FOREGROUND_COLOR: Attribute;
    /**The glyph type, for list item elements.*/ GLYPH_TYPE: Attribute;
    /**The heading type, for paragraph elements (for example, `DocumentApp.ParagraphHeading.HEADING1`).*/ HEADING: Attribute;
    /**The height setting, for image elements.*/ HEIGHT: Attribute;
    /**The horizontal alignment, for paragraph elements (for example, `DocumentApp.HorizontalAlignment.CENTER`).*/ HORIZONTAL_ALIGNMENT: Attribute;
    /**The end indentation setting in points, for paragraph elements.*/ INDENT_END: Attribute;
    /**The first line indentation setting in points, for paragraph elements.*/ INDENT_FIRST_LINE: Attribute;
    /**The start indentation setting in points, for paragraph elements.*/ INDENT_START: Attribute;
    /**The font style setting, for rich text.*/ ITALIC: Attribute;
    /**The text direction setting, for rich text.*/ LEFT_TO_RIGHT: Attribute;
    /**The line spacing setting as a multiplier, for paragraph elements.*/ LINE_SPACING: Attribute;
    /**The link URL, for rich text. The default link style (foreground color, underline) is
automatically applied.*/ LINK_URL: Attribute;
    /**The ID of the encompassing list, for list item elements.*/ LIST_ID: Attribute;
    /**The bottom margin setting in points, for paragraph elements.*/ MARGIN_BOTTOM: Attribute;
    /**The left margin setting in points, for paragraph elements.*/ MARGIN_LEFT: Attribute;
    /**The right margin setting in points, for paragraph elements.*/ MARGIN_RIGHT: Attribute;
    /**The top margin setting in points, for paragraph elements.*/ MARGIN_TOP: Attribute;
    /**The minimum height setting in points, for table row elements.*/ MINIMUM_HEIGHT: Attribute;
    /**The item nesting level, for list item elements.*/ NESTING_LEVEL: Attribute;
    /**The bottom padding setting in points, for table cell elements.*/ PADDING_BOTTOM: Attribute;
    /**The left padding setting in points, for table cell elements.*/ PADDING_LEFT: Attribute;
    /**The right padding setting in points, for table cell elements.*/ PADDING_RIGHT: Attribute;
    /**The top padding setting in points, for table cell elements.*/ PADDING_TOP: Attribute;
    /**The page height setting in points, for documents.*/ PAGE_HEIGHT: Attribute;
    /**The page width setting in points, for documents.*/ PAGE_WIDTH: Attribute;
    /**The bottom spacing setting in points, for paragraph elements.*/ SPACING_AFTER: Attribute;
    /**The top spacing setting in points, for paragraph elements.*/ SPACING_BEFORE: Attribute;
    /**The strike-through setting, for rich text.*/ STRIKETHROUGH: Attribute;
    /**The underline setting, for rich text.*/ UNDERLINE: Attribute;
    /**The vertical alignment setting, for table cell elements.*/ VERTICAL_ALIGNMENT: Attribute;
    /**The width setting, for table cell and image elements.*/ WIDTH: Attribute;
  }
}
const DocumentApp: DocumentApp;
