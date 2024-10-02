interface Ui {
  /**An enum representing predetermined, localized dialog buttons returned by an [alert](https://developers.google.com/apps-script/reference/base/ui.html#alert(String)) or [`PromptResponse.getSelectedButton()`](https://developers.google.com/apps-script/reference/base/prompt-response.html#getSelectedButton()) to indicate
which button in a dialog the user clicked.*/ Button: _Button;
  /**An enum representing predetermined, localized sets of one or more dialog buttons that can be
added to an [alert](https://developers.google.com/apps-script/reference/base/ui.html#alert(String,ButtonSet)) or a [prompt](https://developers.google.com/apps-script/reference/base/ui.html#prompt(String,ButtonSet)).*/ ButtonSet: _ButtonSet;
  /**Opens a dialog box in the user's editor with the given message and an "OK" button. This method
suspends the server-side script while the dialog is open. The script resumes after the user
dismisses the dialog, but [`Jdbc`](https://developers.google.com/apps-script/reference/base/../jdbc/jdbc.html)
connections and [`LockService`](https://developers.google.com/apps-script/reference/base/../lock/lock-service.html) locks don't
persist across the suspension. For more information, see the [guide to dialogs and sidebars](/apps-script/guides/dialogs).

```
// Display "Hello, world" in a dialog box with an "OK" button. The user can also close the
// dialog by clicking the close button in its title bar.
SpreadsheetApp.getUi().alert('Hello, world');
```
@param prompt The message to display in the dialog box.
@return The button the user clicked.*/ alert(prompt: string): Button;
  /**Opens a dialog box in the user's editor with the given message and set of buttons. This method
suspends the server-side script while the dialog is open. The script resumes after the user
dismisses the dialog, but [`Jdbc`](https://developers.google.com/apps-script/reference/base/../jdbc/jdbc.html)
connections and [`LockService`](https://developers.google.com/apps-script/reference/base/../lock/lock-service.html) locks don't
persist across the suspension. For more information, see the [guide to dialogs and sidebars](/apps-script/guides/dialogs).

```
// Display a dialog box with a message and "Yes" and "No" buttons. The user can also close the
// dialog by clicking the close button in its title bar.
var ui = SpreadsheetApp.getUi();
var response = ui.alert('Are you sure you want to continue?', ui.ButtonSet.YES_NO);

// Process the user's response.
if (response == ui.Button.YES) {
  Logger.log('The user clicked "Yes."');
} else {
  Logger.log('The user clicked "No" or the close button in the dialog\'s title bar.');
}
```
@param prompt The message to display in the dialog box.
@param buttons The button set to display in the dialog box.
@return The button the user clicked.*/ alert(
    prompt: string,
    buttons: ButtonSet,
  ): Button;
  /**Opens a dialog box in the user's editor with the given title, message, and set of buttons. This
method suspends the server-side script while the dialog is open. The script resumes after the
user dismisses the dialog, but [`Jdbc`](https://developers.google.com/apps-script/reference/base/../jdbc/jdbc.html)
connections and [`LockService`](https://developers.google.com/apps-script/reference/base/../lock/lock-service.html) locks don't
persist across the suspension. For more information, see the [guide to dialogs and sidebars](/apps-script/guides/dialogs).

```
// Display a dialog box with a title, message, and "Yes" and "No" buttons. The user can also
// close the dialog by clicking the close button in its title bar.
var ui = SpreadsheetApp.getUi();
var response = ui.alert('Confirm', 'Are you sure you want to continue?', ui.ButtonSet.YES_NO);

// Process the user's response.
if (response == ui.Button.YES) {
  Logger.log('The user clicked "Yes."');
} else {
  Logger.log('The user clicked "No" or the close button in the dialog\'s title bar.');
}
```
@param title The title to display above the dialog box.
@param prompt The message to display in the dialog box.
@param buttons The button set to display in the dialog box.
@return The button the user clicked.*/ alert(
    title: string,
    prompt: string,
    buttons: ButtonSet,
  ): Button;
  /**Creates a builder that can be used to insert a sub-menu into the editor's Extensions menu. The
menu isn't actually be updated until [`Menu.addToUi()`](https://developers.google.com/apps-script/reference/base/menu.html#addToUi()) is called. If the script is running
as an add-on, the sub-menu name matches the add-on's name in the web store; if the script is [bound](/apps-script/scripts_containers) to the document directly, the sub-menu name
matches the script's name. For more information, see the [guide to menus](/apps-script/guides/menus).

```
// Add an item to the Add-on menu, under a sub-menu whose name is set automatically.
function onOpen(e) {
  SpreadsheetApp.getUi()
      .createAddonMenu()
      .addItem('Show', 'showSidebar')
      .addToUi();
}
```
@return The new menu builder.*/ createAddonMenu(): Menu;
  /**Creates a builder that can be used to add a menu to the editor's user interface. The menu isn't
actually be added until [`Menu.addToUi()`](https://developers.google.com/apps-script/reference/base/menu.html#addToUi()) is called. For more information, see the [guide to menus](/apps-script/guides/menus). The label for a top-level menu should be
in headline case (all major words capitalized), although the label for a sub-menu should be in
sentence case (only the first word capitalized). If the script is published as an [add-on](/gsuite/add-ons/overview), the `caption` parameter is ignored and the
menu is added as a sub-menu of the Extensions menu, equivalent to [`createAddonMenu()`](https://developers.google.com/apps-script/reference/base/ui.html#createAddonMenu()).

```
// Add a custom menu to the active document, including a separator and a sub-menu.
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
@param caption The label for the menu, with all major words capitalized for a top-level menu,
    or only the first word capitalized for a sub-menu.
@return The new menu builder.*/ createMenu(caption: string): Menu;
  /**Opens an input dialog box in the user's editor with the given message and an "OK" button. This
method suspends the server-side script while the dialog is open. The script resumes after the
user dismisses the dialog, but [`Jdbc`](https://developers.google.com/apps-script/reference/base/../jdbc/jdbc.html)
connections and [`LockService`](https://developers.google.com/apps-script/reference/base/../lock/lock-service.html) locks don't
persist across the suspension. For more information, see the [guide to dialogs and sidebars](/apps-script/guides/dialogs).

```
// Display a dialog box with a message, input field, and an "OK" button. The user can also
// close the dialog by clicking the close button in its title bar.
var ui = SpreadsheetApp.getUi();
var response = ui.prompt('Enter your name:');

// Process the user's response.
if (response.getSelectedButton() == ui.Button.OK) {
  Logger.log('The user\'s name is %s.', response.getResponseText());
} else {
  Logger.log('The user clicked the close button in the dialog\'s title bar.');
}
```
@param prompt The message to display in the dialog box.
@return A representation of the user's response.*/ prompt(
    prompt: string,
  ): PromptResponse;
  /**Opens an input dialog box in the user's editor with the given message and set of buttons. This
method suspends the server-side script while the dialog is open. The script resumes after the
user dismisses the dialog, but [`Jdbc`](https://developers.google.com/apps-script/reference/base/../jdbc/jdbc.html)
connections and [`LockService`](https://developers.google.com/apps-script/reference/base/../lock/lock-service.html) locks don't
persist across the suspension. For more information, see the [guide to dialogs and sidebars](/apps-script/guides/dialogs).

```
// Display a dialog box with a message, input field, and "Yes" and "No" buttons. The user can
// also close the dialog by clicking the close button in its title bar.
var ui = SpreadsheetApp.getUi();
var response = ui.prompt('May I know your name?', ui.ButtonSet.YES_NO);

// Process the user's response.
if (response.getSelectedButton() == ui.Button.YES) {
  Logger.log('The user\'s name is %s.', response.getResponseText());
} else if (response.getSelectedButton() == ui.Button.NO) {
  Logger.log('The user didn\'t want to provide a name.');
} else {
  Logger.log('The user clicked the close button in the dialog\'s title bar.');
}
```
@param prompt The message to display in the dialog box.
@param buttons The button set to display in the dialog box.
@return A representation of the user's response.*/ prompt(
    prompt: string,
    buttons: ButtonSet,
  ): PromptResponse;
  /**Opens an input dialog box in the user's editor with the given title, message, and set of
buttons. This method suspends the server-side script while the dialog is open. The script
resumes after the user dismisses the dialog, but [`Jdbc`](https://developers.google.com/apps-script/reference/base/../jdbc/jdbc.html) connections and [`LockService`](https://developers.google.com/apps-script/reference/base/../lock/lock-service.html) locks don't persist across the
suspension. For more information, see the [guide to
dialogs and sidebars](/apps-script/guides/dialogs).

```
// Display a dialog box with a title, message, input field, and "Yes" and "No" buttons. The
// user can also close the dialog by clicking the close button in its title bar.
var ui = SpreadsheetApp.getUi();
var response = ui.prompt('Getting to know you', 'May I know your name?', ui.ButtonSet.YES_NO);

// Process the user's response.
if (response.getSelectedButton() == ui.Button.YES) {
  Logger.log('The user\'s name is %s.', response.getResponseText());
} else if (response.getSelectedButton() == ui.Button.NO) {
  Logger.log('The user didn\'t want to provide a name.');
} else {
  Logger.log('The user clicked the close button in the dialog\'s title bar.');
}
```
@param title The title to display above the dialog box.
@param prompt The message to display in the dialog box.
@param buttons The button set to display in the dialog box.
@return A representation of the user's response.*/ prompt(
    title: string,
    prompt: string,
    buttons: ButtonSet,
  ): PromptResponse;
  /**Opens a dialog box in the user's editor with custom client-side content. This method does
_not_ suspend the server-side script while the dialog is open. To communicate with the
server-side script, the client-side component must make asynchronous callbacks using the [`google.script`](/apps-script/guides/html/communication) API for [`HtmlService`](https://developers.google.com/apps-script/reference/base/../html/html-service.html). To close the dialog
programmatically, call [
`google.script.host.close()`](/apps-script/guides/html/#serve_html_as_a_google_docs_sheets_or_forms_user_interface) on the client side of an `HtmlService` web
app. For more information, see the [guide to dialogs and
sidebars](/apps-script/guides/dialogs).

```
// Display a dialog box with custom HtmlService content.
var htmlOutput = HtmlService
    .createHtmlOutput('<p>A change of speed, a change of style...</p>')
    .setTitle('My add-on')
    .setWidth(250)
    .setHeight(300);
SpreadsheetApp.getUi().showDialog(htmlOutput);
```
@deprecated
@param userInterface An [`HtmlOutput`](https://developers.google.com/apps-script/reference/base/../html/html-output.html)
    representing the interface to display.*/ showDialog(
    userInterface: Object,
  ): void;
  /**Opens a modal dialog box in the user's editor with custom client-side content. This method does
_not_ suspend the server-side script while the dialog is open. To communicate with the
server-side script, the client-side component must make asynchronous callbacks using the [`google.script`](/apps-script/guides/html/communication) API for [`HtmlService`](https://developers.google.com/apps-script/reference/base/../html/html-service.html). To close the dialog
programmatically, call [
`google.script.host.close()`](/apps-script/guides/html/#serve_html_as_a_google_docs_sheets_or_forms_user_interface) on the client side of an `HtmlService` web
app. For more information, see the [guide to dialogs and
sidebars](/apps-script/guides/dialogs).

Modal dialogs prevent the user from interacting with anything other than the dialog. By
contrast, [modeless dialogs](https://developers.google.com/apps-script/reference/base/ui.html#showModelessDialog(Object,String)) and [sidebars](https://developers.google.com/apps-script/reference/base/ui.html#showSidebar(Object)) let the user interact with the editor. In almost all cases, a
modal dialog or sidebar is a better choice than a modeless dialog.

```
// Display a modal dialog box with custom HtmlService content.
var htmlOutput = HtmlService
    .createHtmlOutput('<p>A change of speed, a change of style...</p>')
    .setWidth(250)
    .setHeight(300);
SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'My add-on');
```
@param userInterface An [`HtmlOutput`](https://developers.google.com/apps-script/reference/base/../html/html-output.html)
    representing the interface to display.
@param title The title of the dialog; overrides any title set by calling `setTitle()` on
    the `userInterface` object.*/ showModalDialog(
    userInterface: Object,
    title: string,
  ): void;
  /**Opens a modeless dialog box in the user's editor with custom client-side content. This method
does _not_ suspend the server-side script while the dialog is open. To communicate with
the server-side script, the client-side component must make asynchronous callbacks using the [`google.script`](/apps-script/guides/html/communication) API for [`HtmlService`](https://developers.google.com/apps-script/reference/base/../html/html-service.html). To close the dialog
programmatically, call [
`google.script.host.close()`](/apps-script/guides/html/#serve_html_as_a_google_docs_sheets_or_forms_user_interface) on the client side of an `HtmlService` web
app. For more information, see the [guide to dialogs and
sidebars](/apps-script/guides/dialogs).

Modeless dialogs let the user interact with the editor behind the dialog. By contrast,
[modal dialogs](https://developers.google.com/apps-script/reference/base/ui.html#showModalDialog(Object,String)) do not. In almost all cases, a modal
dialog or [sidebar](https://developers.google.com/apps-script/reference/base/ui.html#showSidebar(Object)) is a better choice than a modeless dialog.

```
// Display a modeless dialog box with custom HtmlService content.
var htmlOutput = HtmlService
    .createHtmlOutput('<p>A change of speed, a change of style...</p>')
    .setWidth(250)
    .setHeight(300);
SpreadsheetApp.getUi().showModelessDialog(htmlOutput, 'My add-on');
```
@param userInterface An [`HtmlOutput`](https://developers.google.com/apps-script/reference/base/../html/html-output.html)
    representing the interface to display.
@param title The title of the dialog; overrides any title set by calling `setTitle()` on
    the `userInterface` object.*/ showModelessDialog(
    userInterface: Object,
    title: string,
  ): void;
  /**Opens a sidebar in the user's editor with custom client-side content. This method does
_not_ suspend the server-side script while the sidebar is open. To communicate with the
server-side script, the client-side component must make asynchronous callbacks using the [`google.script`](/apps-script/guides/html/communication) API for [`HtmlService`](https://developers.google.com/apps-script/reference/base/../html/html-service.html). To close the sidebar
programmatically, call [
`google.script.host.close()`](/apps-script/guides/html/#serve_html_as_a_google_docs_sheets_or_forms_user_interface) on the client side of an `HtmlService` web
app. For more information, see the [guide to dialogs and
sidebars](/apps-script/guides/dialogs).

The sidebar displays on the right side of the editor for users whose environments use a
left-to-right language and on the left side of the editor for right-to-left languages. All
sidebars shown by scripts are 300 pixels wide.

```
// Display a sidebar with custom HtmlService content.
var htmlOutput = HtmlService
    .createHtmlOutput('<p>A change of speed, a change of style...</p>')
    .setTitle('My add-on');
SpreadsheetApp.getUi().showSidebar(htmlOutput);
```
@param userInterface An [`HtmlOutput`](https://developers.google.com/apps-script/reference/base/../html/html-output.html)
    representing the interface to display.*/ showSidebar(
    userInterface: Object,
  ): void;
}
