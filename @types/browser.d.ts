interface Browser {
  Buttons: _ButtonSet;
  /**Pops up a dialog box with a text input box in the user's browser.

The inputBox method raises a client-side input box that displays the given prompt to the
user.Note that this function causes the server-side script to be suspended.It resumes
automatically after the user clears the dialog,but JDBC connections don 't persist across the
suspension.

```
// The code below sets the value of name to the name input by the user, or 'cancel '.
var name = Browser.inputBox('Enter your name ');
```

This method is not recommended. Instead, use a [UI prompt](/apps-script/guides/dialogs#prompt_dialogs).
@param prompt The text to be displayed in the dialog box.
@return The text entered by the user (or 'cancel ' for a canceled or dismissed dialog).*/ inputBox(
    prompt: string,
  ): string;
  /**Pops up a dialog box with a text input box in the user's browser.

The inputBox method raises a client-side input box that displays the given prompt to the
user,and offers a choice of buttons to be displayed.Note that this function causes the
server-side script to be suspended.It resumes automatically after the user clears the dialog,
but JDBC connections don 't persist across the suspension.

```
// The code below sets the value of name to the name input by the user, or 'cancel '.
var name = Browser.inputBox('Enter your name ', Browser.Buttons.OK_CANCEL);
```

This method is not recommended. Instead, use a [UI prompt](/apps-script/guides/dialogs#prompt_dialogs).
@param prompt The text to be displayed in the dialog box.
@param buttons The type of button set to use.
@return The text entered by the user (or 'cancel ' for a canceled or dismissed dialog).*/ inputBox(
    prompt: string,
    buttons: ButtonSet,
  ): string;
  /**Pops up a dialog box with a text input box in the user's browser.

The inputBox method raises a client side input box with the given title,that displays the
given prompt to the user,and offers a choice of buttons to be displayed.Note that this
function causes the server-side script to be suspended.It resumes automatically after the user
clears the dialog,but JDBC connections don 't persist across the suspension.

```
// The code below sets the value of name to the name input by the user, or 'cancel '.
var name = Browser.inputBox('ID Check', 'Enter your name ', Browser.Buttons.OK_CANCEL);
```

This method is not recommended. Instead, use a [UI prompt](/apps-script/guides/dialogs#prompt_dialogs).
@param title The title for the dialog box.
@param prompt The text to be displayed in the dialog box.
@param buttons The type of button set to use.
@return The text entered by the user (or 'cancel ' for a canceled or dismissed dialog).*/ inputBox(
    title: string,
    prompt: string,
    buttons: ButtonSet,
  ): string;
  /**Pops up a dialog box with the given message and an OK button in the user's browser.

The msgBox method raises a client-side message box that displays the given message to the
user.Note that this method causes the server-side script to be suspended.It resumes
automatically after the user clears the dialog,but JDBC connections don 't persist across the
suspension.

```
// The code below displays "hello world" in a dialog box with an OK button
Browser.msgBox('hello world ');
```

This method is not recommended. Instead, use a [UI alert](/apps-script/guides/dialogs#alert_dialogs) dialog.
@param prompt The text to be displayed in the dialog box.
@return The lower case text of the button that is clicked by the user (or 'cancel ' for a
    dismissed dialog).*/ msgBox(prompt: string): string;
  /**Pops up a dialog box with the given message and specified buttons in the user's browser.

The msgBox method raises a client-side message box that displays the given message to the
user,and offers a choice of buttons to be displayed.Note that this method causes the
server-side script to be suspended.It resumes automatically after the user clears the dialog,
but JDBC connections don 't persist across the suspension.

```
// The code below displays "hello world" in a dialog box with OK and Cancel buttons.
Browser.msgBox('hello world ', Browser.Buttons.OK_CANCEL);
```

This method is not recommended. Instead, use a [UI alert](/apps-script/guides/dialogs#alert_dialogs) dialog.
@param prompt The text to be displayed in the dialog box.
@param buttons The type of button set to use.
@return The lower case text of the button that is clicked by the user (or 'cancel ' for a
    dismissed dialog).*/ msgBox(prompt: string, buttons: ButtonSet): string;
  /**Pops up a dialog box with the given title, message and specified buttons in the user's browser.

The msgBox method raises a client-side message box with the given title,that displays the
given message to the user,and offers a choice of buttons to be displayed.Note that this
method causes the server-side script to be suspended.It resumes automatically after the user
clears the dialog,but JDBC connections don 't persist across the suspension.

```
// The code below displays "hello world" in a dialog box with a custom title and Yes and
// No buttons
Browser.msgBox('Greetings', 'hello world ', Browser.Buttons.YES_NO);
```

This method is not recommended. Instead, use a [UI alert](/apps-script/guides/dialogs#alert_dialogs) dialog.
@param title The title of the dialog box.
@param prompt The text to be displayed in the dialog box.
@param buttons The type of button set to use.
@return The lower case text of the button that is clicked by the user (or 'cancel ' for a
    dismissed dialog).*/ msgBox(
    title: string,
    prompt: string,
    buttons: ButtonSet,
  ): string;
}
const Browser: Browser;
