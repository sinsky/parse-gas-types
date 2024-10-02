interface Session {
  /**Gets information about the current user. If security policies do not allow access to the user's
identity, [`User.getEmail()`](https://developers.google.com/apps-script/reference/base/user.html#getEmail()) returns a blank string. The circumstances in which the
email address is available vary: for example, the user's email address is not available in any
context that allows a script to run without that user's authorization, like a simple `onOpen(e)` or `onEdit(e)` trigger, a custom function in Google Sheets, or a web app
deployed to "execute as me" (that is, authorized by the developer instead of the user).
However, these restrictions generally do not apply if the developer runs the script themselves
or belongs to the same Google Workspace domain as the user.

```
// Log the email address of the person running the script.
var email = Session.getActiveUser().getEmail();
Logger.log(email);
```
@return the current user*/ getActiveUser(): User;
  /**Gets the language setting of the current user as a string—for example, `en` for English.

```
// Log the language setting of the person running the script.
Logger.log(Session.getActiveUserLocale());
```
@return a string that represents the user's language setting*/ getActiveUserLocale(): string;
  /**Gets information about the user under whose authority the script is running. If the script is a
web app set to "execute as me" (the developer), this returns the developer's user account. If
the script is running under an [installable
trigger](/apps-script/understanding_triggers), this returns the account of the user who created the trigger. In most other
scenarios, this returns the same account as [`getActiveUser()`](https://developers.google.com/apps-script/reference/base/session.html#getActiveUser()).

```
// Log the email address of the user under whose authority the script is running.
var email = Session.getEffectiveUser().getEmail();
Logger.log(email);
```
@return the user under whose authority the script is running*/ getEffectiveUser(): User;
  /**Gets the time zone of the script. New scripts default to the owner's time zone, but the
script's time zone can be changed by clicking __File > Project properties__ in the script
editor. Note that spreadsheets have a separate time zone, which can be changed by clicking
__File > Spreadsheet settings__ in Google Sheets. Spreadsheet time zones that differ from
the script time zone are a frequent source of scripting bugs.

```
// Log the time zone of the script.
var timeZone = Session.getScriptTimeZone();
Logger.log(timeZone);
```
@return the time zone of the script*/ getScriptTimeZone(): string;
  /**Gets a temporary key that is unique to the active user but does not reveal the user identity.
The temporary key rotates every 30 days and is unique to the script.

```
// Log the temporary key of the person running the script.
Logger.log(Session.getTemporaryActiveUserKey());
```
@return the temporary active user key*/ getTemporaryActiveUserKey(): string;
  /**Gets the time zone of the script. New scripts default to the owner's time zone, but the
script's time zone can be changed by clicking __File > Project properties__ in the script
editor. Note that spreadsheets have a separate time zone, which can be changed by clicking
__File > Spreadsheet settings__ in Google Sheets. Spreadsheet time zones that differ from
the script time zone are a frequent source of scripting bugs.

```
// Log the time zone of the script.
var timeZone = Session.getTimeZone();
Logger.log(timeZone);
```
@deprecated
@return the time zone of the script*/ getTimeZone(): string;
  /**Gets information about the current user.
@deprecated
@return the currently signed in user*/ getUser(): User;
}
const Session: Session;
