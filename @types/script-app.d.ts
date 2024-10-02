interface ScriptApp {
  /**An enumeration that identifies which categories of authorized services Apps Script is able to
execute through a triggered function.*/ AuthMode: ScriptApp._AuthMode;
  /**An enumeration denoting the authorization status of a script.*/ AuthorizationStatus: ScriptApp._AuthorizationStatus;
  /**An enumeration denoting the type of triggered event.*/ EventType: ScriptApp._EventType;
  /**An enumeration denoting how the script was installed to the user as an add-on.*/ InstallationSource: ScriptApp._InstallationSource;
  /**An enumeration denoting the source of the event that causes the trigger to fire.*/ TriggerSource: ScriptApp._TriggerSource;
  /**An enumeration representing the days of the week.*/ WeekDay: _Weekday;
  /**Removes the given trigger so it no longer runs.

```
// Deletes all triggers in the current project.
var triggers = ScriptApp.getProjectTriggers();
for (var i = 0; i < triggers.length; i++) {
  ScriptApp.deleteTrigger(triggers[i]);
}
```
@param trigger The trigger to delete.*/ deleteTrigger(
    trigger: ScriptApp.Trigger,
  ): void;
  /**Gets an object used to determine whether the user needs to authorize this script to use one or
more services, and to provide the URL for an authorization dialog. If the script is published
as an [add-on](/gsuite/add-ons/overview) that uses [installable triggers](/apps-script/understanding_triggers), this information can be
used to control access to sections of code for which the user lacks the necessary
authorization. Alternately, the add-on can ask the user to open the URL for the authorization
dialog to resolve the problem.

```
var authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL);
status = authInfo.getAuthorizationStatus();
url = authInfo.getAuthorizationUrl();
```
@param authMode the authorization mode for which authorization information is requested; in
    almost all cases, the value for `authMode` should be `ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL)`, since no other authorization mode
    requires that users grant authorization
@return an object that can provide information about the user's authorization status*/ getAuthorizationInfo(
    authMode: ScriptApp.AuthMode,
  ): ScriptApp.AuthorizationInfo;
  /**Gets an [OpenID Connect](/identity/protocols/OpenIDConnect) identity token for the
effective user, if the `openid` scope has been granted. This scope is not included
by default, and you must add it as an [explicit scope](/apps-script/concepts/scopes#setting_explicit_scopes) in the manifest
file to request it. Include the scopes `https://www.googleapis.com/auth/userinfo.email` or `https://www.googleapis.com/auth/userinfo.profile` to return additional
user information in the token.

The returned ID token is an encoded [JSON Web Token (JWT)](https://jwt.io/), and
it must be decoded to extract information from it. The following examples shows how to decode
the token and extract the effective user's Google profile ID.

```
var idToken = ScriptApp.getIdentityToken();
var body = idToken.split('.')[1];
var decoded = Utilities.newBlob(Utilities.base64Decode(body)).getDataAsString();
var payload = JSON.parse(decoded);
var profileId = payload.sub;
Logger.log('Profile ID: ' + profileId);
```

See the [OpenID Connect](/identity/protocols/OpenIDConnect#obtainuserinfo)
documentation for the full list of fields (claims) returned.
@return The identity token if available; otherwise `null`.*/ getIdentityToken(): string;
  /**Returns an enum value that indicates how the script came to be installed as an add-on for the
current user (for example, whether the user installed it personally through the Chrome Web
Store, or whether a domain administrator installed it for all users).
@return The source of installation.*/ getInstallationSource(): ScriptApp.InstallationSource;
  /**Gets the OAuth 2.0 [access
token](https://datatracker.ietf.org/doc/html/rfc6749#section-1.4) for the effective user. If the script's OAuth scopes are sufficient to authorize
another Google API that normally requires its own OAuth flow (like [Google Picker](/apps-script/guides/dialogs#file-open_dialogs)), scripts can bypass the
second authorization prompt by passing this token instead. The token expires after a time (a
few minutes at minimum); scripts should handle authorization failures and call this method to
obtain a fresh token when needed.

The token returned by this method only includes scopes that the script currently needs.
Scopes that were previously authorized but are no longer used by the script are not included in
the returned token. If additional OAuth scopes are needed beyond what the script itself
requires, they can be [specified](/apps-script/concepts/scopes#setting_explicit_scopes) in the script's
manifest file.
@return A string representation of the OAuth 2.0 token.*/ getOAuthToken(): string;
  /**Gets the project key of the current script. The project key is a unique identifier for scripts
and used to compose the callback URL used in conjunction with [`newStateToken()`](https://developers.google.com/apps-script/reference/script/script-app.html#newStateToken()).

When called in a [library](/apps-script/guides/libraries), this returns the
project key of the outer-most script being executed.
@deprecated
@return The project key of the current script.*/ getProjectKey(): string;
  /**Gets all installable triggers associated with the current project and current user.

```
Logger.log('Current project has ' + ScriptApp.getProjectTriggers().length + ' triggers.');
```
@return An array of the current user's triggers associated with this project.*/ getProjectTriggers(): ScriptApp.Trigger[];
  /**Gets the script project's unique ID. This is the preferred method to get the unique identifier
for the script project as opposed to ~~[`getProjectKey()`](https://developers.google.com/apps-script/reference/script/script-app.html#getProjectKey())~~. This ID can be used in all places
where project key was previously provided.
@return The script project's ID.*/ getScriptId(): string;
  /**Gets all installable triggers associated with the current project and current user.

```
Logger.log('Current script has ' + ScriptApp.getScriptTriggers().length + ' triggers.');
```
@deprecated
@return An array of the current user's triggers associated with this project.*/ getScriptTriggers(): ScriptApp.Trigger[];
  /**Gets an object used to control publishing the script as a web app.

```
// Get the URL of the published web app.
var url = ScriptApp.getService().getUrl();
```
@return An object used to observe and control publishing the script as a web app.*/ getService(): ScriptApp.Service;
  /**Gets all installable triggers owned by this user in the given document, for this script or
add-on only. This method cannot be used to see the triggers attached to other scripts.

```
var doc = DocumentApp.getActiveDocument();
var triggers = ScriptApp.getUserTriggers(doc);
// Log the handler function for the first trigger in the array.
Logger.log(triggers[0].getHandlerFunction());
```
@param document A Google Docs file that may contain installable triggers.
@return An array of triggers owned by this user in the given document.*/ getUserTriggers(
    document: DocumentApp.Document,
  ): ScriptApp.Trigger[];
  /**Gets all installable triggers owned by this user in the given form, for this script or add-on
only. This method cannot be used to see the triggers attached to other scripts.

```
var form = FormApp.getActiveForm();
var triggers = ScriptApp.getUserTriggers(form);
// Log the trigger source for the first trigger in the array.
Logger.log(triggers[0].getTriggerSource());
```
@param form A Google Forms file that may contain installable triggers.
@return An array of triggers owned by this user in the given form.*/ getUserTriggers(
    form: FormApp.Form,
  ): ScriptApp.Trigger[];
  /**Gets all installable triggers owned by this user in the given spreadsheet, for this script or
add-on only. This method cannot be used to see the triggers attached to other scripts.

```
var ss = SpreadsheetApp.getActiveSpreadsheet();
var triggers = ScriptApp.getUserTriggers(ss);
// Log the event type for the first trigger in the array.
Logger.log(triggers[0].getEventType());
```
@param spreadsheet A Google Sheets file that may contain installable triggers.
@return An array of triggers owned by this user in the given spreadsheet.*/ getUserTriggers(
    spreadsheet: SpreadsheetApp.Spreadsheet,
  ): ScriptApp.Trigger[];
  /**Invalidates the authorization the effective user has to execute the current script. Used to
invalidate any permissions for the current script. This is especially useful for functions
tagged as one-shot authorization. Since one-shot authorization functions can only be called the
first run after the script has acquired authorization, if you wish to perform an action
afterwards, you must revoke any authorization the script had, so the user can see the
authorization dialog again.

```
ScriptApp.invalidateAuth();
```*/ invalidateAuth(): void;
  /**Creates a builder for a state token that can be used in a callback API (like an OAuth flow).

```
// Generate a callback URL, given the name of a callback function. The script does not need to
// be published as a web app; the /usercallback URL suffix replaces /edit in any script's URL.
function getCallbackURL(callbackFunction) {
  // IMPORTANT: Replace string below with the URL from your script, minus the /edit at the end.
  var scriptUrl = 'https://script.google.com/macros/d/1234567890abcdefghijklmonpqrstuvwxyz';
  var urlSuffix = '/usercallback?state=';
  var stateToken = ScriptApp.newStateToken()
      .withMethod(callbackFunction)
      .withTimeout(120)
      .createToken();
  return scriptUrl + urlSuffix + stateToken;
}
```

In most OAuth2 flows, the `state` token is passed to the authorization endpoint
directly (not as part of the callback URL), and the authorization endpoint then passes it as
part of the callback URL.

For example:

  + The script redirects the user to OAuth2 authorize URL: `https://accounts.google.com/o/oauth2/auth?state=token_generated_with_this_method&callback_uri=https://script.google.com/macros/d/1234567890abcdefghijklmonpqrstuvwxyz/usercallback&other_oauth2_parameters`
  + The user clicks authorize, and the OAuth2 authorization page redirects the user back to
      `https://script.google.com/macros/d/1234567890abcdefghijklmonpqrstuvwxyz/usercallback?state=token_generated_with_this_method&other_params_that_include_tokens_or_grants`
  + The above redirect (back to `http://script.google.com/...`), causes the browser
      request to `/usercallback`, which invokes the method specified by [`StateTokenBuilder.withMethod(method)`](https://developers.google.com/apps-script/reference/script/state-token-builder.html#withMethod(String)).
@return An object used to continue the state-token-building process.*/ newStateToken(): ScriptApp.StateTokenBuilder;
  /**Begins the process of creating an installable trigger that, when fired, calls a given function.

```
// Creates an edit trigger for a spreadsheet identified by ID.
ScriptApp.newTrigger('myFunction')
    .forSpreadsheet('1234567890abcdefghijklmnopqrstuvwxyz_a1b2c3')
    .onEdit()
    .create();
```
@param functionName The function to call when the trigger fires. You can use functions from
    included libraries, such as `Library.libFunction1`.
@return An object used to continue the trigger-building process.*/ newTrigger(
    functionName: string,
  ): ScriptApp.TriggerBuilder;
}
module ScriptApp {
  interface TriggerSource {}
  interface _TriggerSource {
    /**Google Calendar causes the trigger to fire.*/ CALENDAR: TriggerSource;
    /**A time-driven event causes the trigger to fire.*/ CLOCK: TriggerSource;
    /**Google Docs causes the trigger to fire.*/ DOCUMENTS: TriggerSource;
    /**Google Forms causes the trigger to fire.*/ FORMS: TriggerSource;
    /**Google Sheets causes the trigger to fire.*/ SPREADSHEETS: TriggerSource;
  }
  interface TriggerBuilder {
    /**Creates and returns a [`DocumentTriggerBuilder`](https://developers.google.com/apps-script/reference/script/document-trigger-builder.html) tied to the given document.

```
ScriptApp.newTrigger('myFunction')
  .forDocument(DocumentApp.getActiveDocument())
  .onOpen()
  .create();
```
@param document the document
@return the new DocumentTriggerBuilder*/ forDocument(
      document: DocumentApp.Document,
    ): ScriptApp.DocumentTriggerBuilder;
    /**Creates and returns a [`DocumentTriggerBuilder`](https://developers.google.com/apps-script/reference/script/document-trigger-builder.html) tied to the document with the given ID.

```
ScriptApp.newTrigger('myFunction')
  .forDocument('1234567890abcdefghijklmnopqrstuvwxyz')
  .onOpen()
  .create();
```
@param key the ID for the document
@return the new DocumentTriggerBuilder*/ forDocument(
      key: string,
    ): ScriptApp.DocumentTriggerBuilder;
    /**Creates and returns a [`FormTriggerBuilder`](https://developers.google.com/apps-script/reference/script/form-trigger-builder.html) tied to the given form.

```
ScriptApp.newTrigger('myFunction')
  .forForm(FormApp.getActiveForm())
  .onFormSubmit()
  .create();
```
@param form the form
@return the new FormTriggerBuilder*/ forForm(
      form: FormApp.Form,
    ): ScriptApp.FormTriggerBuilder;
    /**Creates and returns a [`FormTriggerBuilder`](https://developers.google.com/apps-script/reference/script/form-trigger-builder.html) tied to the form with the given ID.

```
ScriptApp.newTrigger('myFunction')
  .forForm('1234567890abcdefghijklmnopqrstuvwxyz')
  .onFormSubmit()
  .create();
```
@param key the ID for the form
@return the new FormTriggerBuilder*/ forForm(
      key: string,
    ): ScriptApp.FormTriggerBuilder;
    /**Creates and returns a [`SpreadsheetTriggerBuilder`](https://developers.google.com/apps-script/reference/script/spreadsheet-trigger-builder.html) tied to the given spreadsheet.

```
ScriptApp.newTrigger('myFunction')
  .forSpreadsheet(SpreadsheetApp.getActive())
  .onEdit()
  .create();
```
@param sheet the spreadsheet
@return the new SpreadsheetTriggerBuilder*/ forSpreadsheet(
      sheet: SpreadsheetApp.Spreadsheet,
    ): ScriptApp.SpreadsheetTriggerBuilder;
    /**Creates and returns a [`SpreadsheetTriggerBuilder`](https://developers.google.com/apps-script/reference/script/spreadsheet-trigger-builder.html) tied to the spreadsheet with the given
ID.

```
ScriptApp.newTrigger('myFunction')
  .forSpreadsheet('1234567890abcdefghijklmnopqrstuvwxyz')
  .onEdit()
  .create();
```
@param key the ID for the spreadsheet
@return the new SpreadsheetTriggerBuilder*/ forSpreadsheet(
      key: string,
    ): ScriptApp.SpreadsheetTriggerBuilder;
    /**Returns a builder for building calendar triggers.
@param emailId email ID of the user calendar the trigger monitors.
@return The new CalendarTriggerBuilder.*/ forUserCalendar(
      emailId: string,
    ): ScriptApp.CalendarTriggerBuilder;
    /**Creates and returns a [`ClockTriggerBuilder`](https://developers.google.com/apps-script/reference/script/clock-trigger-builder.html) for building time-based triggers.

```
ScriptApp.newTrigger('myFunction')
  .timeBased()
  .atDate(2013, 10, 31)
  .create();
```
@return the new ClockTriggerBuilder*/ timeBased(): ScriptApp.ClockTriggerBuilder;
  }
  interface Trigger {
    /**Returns the event type that the trigger fires on.

```
var triggers = ScriptApp.getProjectTriggers();
for (var i = 0; i < triggers.length; i++) {
  if (triggers[i].getEventType() == ScriptApp.EventType.CLOCK) {
    // Some code here - other options are:
    // ScriptApp.EventType.ON_EDIT
    // ScriptApp.EventType.ON_FORM_SUBMIT
    // ScriptApp.EventType.ON_OPEN
  }
}
```
@return the event type that this is a trigger for*/ getEventType(): ScriptApp.EventType;
    /**Returns the function that will be called when the trigger fires.

```
// Create a trigger for the script.
ScriptApp.newTrigger('myFunction').forSpreadsheet('id of my spreadsheet').onEdit().create();
Logger.log(ScriptApp.getProjectTriggers()[0].getHandlerFunction()); // logs "myFunction"
```
@return the method name*/ getHandlerFunction(): string;
    /**Returns the source of events that will cause the trigger to fire.

For example, a spreadsheet onEdit trigger would return SPREADSHEETS, or a time based trigger
would return CLOCK.

```
var triggers = ScriptApp.getProjectTriggers();
for (var i = 0; i < triggers.length; i++) {
  if (triggers[i].getTriggerSource() == ScriptApp.TriggerSource.CLOCK) {
    Logger.log(triggers[i].getUniqueId() + " source is clock");
  } else if (triggers[i].getTriggerSource() == ScriptApp.TriggerSource.SPREADSHEETS) {
    Logger.log(triggers[i].getUniqueId() + " source is spreadsheets");
  }
}
```
@return the publisher this is a trigger for*/ getTriggerSource(): ScriptApp.TriggerSource;
    /**Returns the id specific to the source.

For example, if the trigger source is a spreadsheet, this would be the id of the
spreadsheet. For clock events this returns null.
@return the id of the entity in the publisher that this is a trigger for*/ getTriggerSourceId(): string;
    /**Returns a unique identifier that can be used to distinguish triggers from each other.
@return the unique identifier of the trigger*/ getUniqueId(): string;
  }
  interface StateTokenBuilder {
    /**Constructs an encrypted string representation of the state token.

```
var stateToken = ScriptApp.newStateToken().createToken();
```
@return an encrypted string representing the token*/ createToken(): string;
    /**Adds an argument to the token. This method can be called multiple times.

```
var stateToken = ScriptApp.newStateToken().withArgument('myField', 'myValue').createToken();
```
@param name the name of the argument
@param value the value of the argument
@return the state token builder, for chaining*/ withArgument(
      name: string,
      value: string,
    ): ScriptApp.StateTokenBuilder;
    /**Sets a callback function. The default is a function named `callback()`.

```
var stateToken = ScriptApp.newStateToken().withMethod('myCallback').createToken();
```
@param method The name of the callback function, represented as a string without parentheses or
    arguments. You can use functions from included libraries, such as 

```
    Library.libFunction1```

.
@return the state token builder, for chaining*/ withMethod(
      method: string,
    ): ScriptApp.StateTokenBuilder;
    /**Sets the duration (in seconds) for which the token is valid. The defaults is 60 seconds; the
maximum duration is 3600 seconds (1 hour).

```
var stateToken = ScriptApp.newStateToken().withTimeout(60).createToken();
```
@param seconds the duration for which the token is valid; the maximum value is `3600`
@return the state token builder, for chaining*/ withTimeout(
      seconds: Integer,
    ): ScriptApp.StateTokenBuilder;
  }
  interface SpreadsheetTriggerBuilder {
    /**Creates the trigger and returns it.
@return The created trigger.*/ create(): ScriptApp.Trigger;
    /**Specifies a trigger that will fire when the spreadsheet's content or structure is changed.

```
var sheet = SpreadsheetApp.getActive();
ScriptApp.newTrigger("myFunction")
  .forSpreadsheet(sheet)
  .onChange()
  .create();
```
@return a builder for chaining*/ onChange(): ScriptApp.SpreadsheetTriggerBuilder;
    /**Specifies a trigger that will fire when the spreadsheet is edited.

```
var sheet = SpreadsheetApp.getActive();
ScriptApp.newTrigger("myFunction")
  .forSpreadsheet(sheet)
  .onEdit()
  .create();
```
@return a builder for chaining*/ onEdit(): ScriptApp.SpreadsheetTriggerBuilder;
    /**Specifies a trigger that will fire when the spreadsheet has a form submitted to it.

```
var sheet = SpreadsheetApp.getActive();
ScriptApp.newTrigger("myFunction")
  .forSpreadsheet(sheet)
  .onFormSubmit()
  .create();
```
@return A builder for chaining.*/ onFormSubmit(): ScriptApp.SpreadsheetTriggerBuilder;
    /**Specifies a trigger that will fire when the spreadsheet is opened.

```
var sheet = SpreadsheetApp.getActive();
ScriptApp.newTrigger("myFunction")
  .forSpreadsheet(sheet)
  .onOpen()
  .create();
```
@return a builder for chaining*/ onOpen(): ScriptApp.SpreadsheetTriggerBuilder;
  }
  interface Service {
    /**Disables the script from being accessed as a web app. This method is equivalent to opening the
"Publish > Deploy as web app" dialog and clicking "disable web app".

```
ScriptApp.getService().disable();
```
@deprecated*/ disable(): void;
    /**Returns the URL of the web app, if it has been deployed; otherwise returns `null`. If you
are running the development mode web app, this returns the development mode url.

```
// Mail the URL of the published web app.
MailApp.sendMail("myself@example.com", "My Snazzy App",
  "My new app is now available at " + ScriptApp.getService().getUrl());
```
@return the URL of the web app*/ getUrl(): string;
    /**Returns `true` if the script is accessible as a web app.
@return `true` if the script is published as a web app; `false` if not*/ isEnabled(): boolean;
  }
  interface InstallationSource {}
  interface _InstallationSource {
    /**Add-on was installed by the administrator for the user's domain.*/ APPS_MARKETPLACE_DOMAIN_ADD_ON: InstallationSource;
    /**Script is not running as an add-on.*/ NONE: InstallationSource;
    /**Add-on was installed by the user from the Chrome Web Store.*/ WEB_STORE_ADD_ON: InstallationSource;
  }
  interface FormTriggerBuilder {
    /**Creates and returns the new trigger.
@return The new trigger.*/ create(): ScriptApp.Trigger;
    /**Specifies a trigger that will fire when a response is submitted to the form.

```
var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
ScriptApp.newTrigger('myFunction')
    .forForm(form)
    .onFormSubmit()
    .create();
```
@return this [`FormTriggerBuilder`](https://developers.google.com/apps-script/reference/script/form-trigger-builder.html), for chaining*/ onFormSubmit(): ScriptApp.FormTriggerBuilder;
    /**Specifies a trigger that will fire when the form's edit view is opened.

```
var form = FormApp.getActiveForm();
ScriptApp.newTrigger('myFunction')
    .forForm(form)
    .onOpen()
    .create();
```
@return This [`FormTriggerBuilder`](https://developers.google.com/apps-script/reference/script/form-trigger-builder.html), for chaining.*/ onOpen(): ScriptApp.FormTriggerBuilder;
  }
  interface EventType {}
  interface _EventType {
    /**The trigger fires once the time-driven event reaches a specific time.*/ CLOCK: EventType;
    /**The trigger fires once the user changes the Google Sheets file (for example, by adding a row,
which counts as a change instead of an edit).*/ ON_CHANGE: EventType;
    /**The trigger fires once the user edits the Google Sheets file (for example, by entering a new
value into a cell, which counts as an edit instead of a change).*/ ON_EDIT: EventType;
    /**The trigger fires once an event gets created, updated, or deleted on the specified Google
Calendar.*/ ON_EVENT_UPDATED: EventType;
    /**The trigger fires once the user responds to a Google Form. This trigger is available either in
the Google Form itself or in the Google Sheets file that the form sends its responses to.*/ ON_FORM_SUBMIT: EventType;
    /**The trigger fires once the user opens the Google Docs, Sheets, or Forms file.*/ ON_OPEN: EventType;
  }
  interface DocumentTriggerBuilder {
    /**Creates and returns the new trigger.
@return The new trigger.*/ create(): ScriptApp.Trigger;
    /**Specifies a trigger that will fire when the document is opened.

```
var document = DocumentApp.getActiveDocument();
ScriptApp.newTrigger('myFunction')
  .forDocument(document)
  .onOpen()
  .create();
```
@return This [`DocumentTriggerBuilder`](https://developers.google.com/apps-script/reference/script/document-trigger-builder.html), for chaining.*/ onOpen(): ScriptApp.DocumentTriggerBuilder;
  }
  interface ClockTriggerBuilder {
    /**Specifies the minimum duration (in milliseconds) after the current time that the trigger runs.
The actual duration might vary, but won't be less than your specified minimum.

```
// Creates a trigger that runs 10 minutes later
ScriptApp.newTrigger("myFunction")
  .timeBased()
  .after(10 * 60 * 1000)
  .create();
```
@param durationMilliseconds The minimum duration (in milliseconds) after the current time when
    the trigger should run.
@return The builder, for chaining.*/ after(
      durationMilliseconds: Integer,
    ): ScriptApp.ClockTriggerBuilder;
    /**Specifies when the trigger runs.

```
// Creates a trigger for December 1, 2012
var triggerDay = new Date(2012, 11, 1);
ScriptApp.newTrigger("myFunction")
  .timeBased()
  .at(triggerDay)
  .create();
```
@param date A Date object representing when the trigger should run.
@return The builder, for chaining.*/ at(
      date: Date,
    ): ScriptApp.ClockTriggerBuilder;
    /**Specifies that the trigger fires on the given date, by default near midnight (+/- 15 minutes).

```
// Schedules for January 1st, 2013
ScriptApp.newTrigger("myFunction")
  .timeBased()
  .atDate(2013, 1, 1)
  .create();
```
@param year The calendar year to schedule the trigger.
@param month The calendar month to schedule the trigger (should be a number between 1 and 12,
    inclusive).
@param day The calendar day to schedule the trigger (should be a number between 1 and 31,
    inclusive).
@return The builder, for chaining.*/ atDate(
      year: Integer,
      month: Integer,
      day: Integer,
    ): ScriptApp.ClockTriggerBuilder;
    /**Specifies the hour the trigger at which the trigger runs.

```
// Runs between 5am-6am in the timezone of the script
ScriptApp.newTrigger("myFunction")
  .timeBased()
  .atHour(5)
  .everyDays(1) // Frequency is required if you are using atHour() or nearMinute()
  .create();
```
@param hour The hour at which to fire.
@return The builder, for chaining.*/ atHour(
      hour: Integer,
    ): ScriptApp.ClockTriggerBuilder;
    /**Creates the trigger.
@return The newly created, scheduled trigger.*/ create(): ScriptApp.Trigger;
    /**Specifies to run the trigger every `n` days.

```
ScriptApp.newTrigger("myFunction")
  .timeBased()
  .everyDays(3)
  .create();
```
@param n The number of days between executions.
@return The builder, for chaining.*/ everyDays(
      n: Integer,
    ): ScriptApp.ClockTriggerBuilder;
    /**Specifies to run the trigger every `n` hours.

```
ScriptApp.newTrigger("myFunction")
  .timeBased()
  .everyHours(12)
  .create();
```
@param n The number of hours between executions.
@return The builder, for chaining.*/ everyHours(
      n: Integer,
    ): ScriptApp.ClockTriggerBuilder;
    /**Specifies to run the trigger every `n` minutes. `n` must be 1, 5, 10, 15 or 30.

```
ScriptApp.newTrigger("myFunction")
  .timeBased()
  .everyMinutes(10)
  .create();
```
@param n The number of minutes between executions.
@return The builder, for chaining.*/ everyMinutes(
      n: Integer,
    ): ScriptApp.ClockTriggerBuilder;
    /**Specifies to run the trigger every `n` weeks.

```
ScriptApp.newTrigger("myFunction")
  .timeBased()
  .everyWeeks(2)
  .onWeekDay(ScriptApp.WeekDay.FRIDAY)
  .create();
```
@param n The number of weeks between executions.
@return The builder, for chaining.*/ everyWeeks(
      n: Integer,
    ): ScriptApp.ClockTriggerBuilder;
    /**Specifies the timezone for the specified dates/time when the trigger runs. By default, the
timezone is that of the script.

The list of valid timezone strings corresponds with the valid timezone strings listed by [Joda.org](http://joda-time.sourceforge.net/timezones.html). An invalid timezone string
causes the script to throw an error.

```
// Schedule the trigger to execute at noon every day in the US/Pacific time zone
ScriptApp.newTrigger("myFunction")
  .timeBased()
  .atHour(12)
  .everyDays(1)
  .inTimezone("America/Los_Angeles")
  .create();
```
@param timezone The timezone with which to treat time information in the event.
@return This [`ClockTriggerBuilder`](https://developers.google.com/apps-script/reference/script/clock-trigger-builder.html), for chaining.*/ inTimezone(
      timezone: string,
    ): ScriptApp.ClockTriggerBuilder;
    /**Specifies the minute at which the trigger runs (plus or minus 15 minutes). If `nearMinute()` is not called, a random minute value is used.

```
// Runs at approximately 5:30am in the timezone of the script
ScriptApp.newTrigger("myFunction")
  .timeBased()
  .atHour(5)
  .nearMinute(30)
  .everyDays(1) // Frequency is required if you are using atHour() or nearMinute()
  .create();
```
@param minute The minute at which to fire.
@return The builder, for chaining.*/ nearMinute(
      minute: Integer,
    ): ScriptApp.ClockTriggerBuilder;
    /**Specifies the date in the month that the trigger runs.

```
// Schedules for the first of every month
ScriptApp.newTrigger("myFunction")
  .timeBased()
  .onMonthDay(1)
  .create();
```
@param day The day of the month the trigger should be scheduled for.
@return The builder, for chaining.*/ onMonthDay(
      day: Integer,
    ): ScriptApp.ClockTriggerBuilder;
    /**Specifies the day of the week that the trigger runs.

```
ScriptApp.newTrigger("myFunction")
  .timeBased()
  .onWeekDay(ScriptApp.WeekDay.FRIDAY)
  .create();
```
@param day The day of the week to fire.
@return The builder, for chaining.*/ onWeekDay(
      day: Weekday,
    ): ScriptApp.ClockTriggerBuilder;
  }
  interface CalendarTriggerBuilder {
    /**Creates the trigger and returns it.
@return The new trigger.*/ create(): ScriptApp.Trigger;
    /**Specifies a trigger that fires when a calendar entry is created, updated, or deleted.
@return This [`CalendarTriggerBuilder`](https://developers.google.com/apps-script/reference/script/calendar-trigger-builder.html), for chaining.*/ onEventUpdated(): ScriptApp.CalendarTriggerBuilder;
  }
  interface AuthorizationStatus {}
  interface _AuthorizationStatus {
    /**The user has granted this script all the authorization it currently requires.*/ NOT_REQUIRED: AuthorizationStatus;
    /**The user needs to authorize this script to use one or more services. In most cases, the script
prompts the user for authorization the next time it runs; however, if the script is published
as an [add-on](/gsuite/add-ons/overview) that uses [installable triggers](/apps-script/understanding_triggers), the trigger runs the
script without prompting for authorization but throws an exception if the script attempts to
call the unauthorized service.*/ REQUIRED: AuthorizationStatus;
  }
  interface AuthorizationInfo {
    /**Gets a value that indicates whether the user needs to authorize this script to use one or more
services (for example, `ScriptApp.AuthorizationStatus.REQUIRED`).

```
// Log the authorization status (REQUIRED or NOT_REQUIRED).
var authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL);
Logger.log(authInfo.getAuthorizationStatus());
```
@return the authorization status*/ getAuthorizationStatus(): ScriptApp.AuthorizationStatus;
    /**Gets the authorization URL that can be used to grant access to the script. This method returns
`null` if no authorization is required. The page at the URL will close automatically if
it is accessed and the script does not require any authorization.

```
// Log the URL used to grant access to the script.
var authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL);
Logger.log(authInfo.getAuthorizationUrl());
```
@return a URL that can be used to authorize the script*/ getAuthorizationUrl(): string;
  }
  interface AuthMode {}
  interface _AuthMode {
    /**A mode that allows access to a limited subset of services for use in custom spreadsheet
functions. Some of these services — including read-only access to Spreadsheet service —
normally require authorization, but are permitted without authorization when used in a custom
function. Because custom functions do not include an event parameter, this value is never
returned; it is documented only to demonstrate that custom functions run in their own
authorization mode.*/ CUSTOM_FUNCTION: AuthMode;
    /**A mode that allows access to all services that require authorization. This mode occurs when an
add-on or a script executes as the result of any trigger other than the cases described for
`LIMITED` or `NONE`.*/ FULL: AuthMode;
    /**A mode that allows access to a limited subset of services. This mode occurs when an add-on or a
script [bound](/apps-script/scripts_containers) to a document executes an `onOpen(e)` or `onEdit(e)` simple trigger, except in the case described for `NONE`.*/ LIMITED: AuthMode;
    /**A mode that does not allow access to any services that require authorization. This mode occurs
when an add-on executes an `onOpen(e)` simple trigger, and the user has installed an
add-on in a different document but the add-on has not been used in the current document.*/ NONE: AuthMode;
  }
}
const ScriptApp: ScriptApp;
