interface Logger {
  /**Clears the log.*/ clear(): void;
  /**Returns a complete list of messages in the current log. This method can be used to save or
email the entire log output generated during script execution.

```
// Generate a log, then email it to the person who ran the script.
var files = DriveApp.getFiles();
while (files.hasNext()) {
  Logger.log(files.next().getName());
}
var recipient = Session.getActiveUser().getEmail();
var subject = 'A list of files in your Google Drive';
var body = Logger.getLog();
MailApp.sendEmail(recipient, subject, body);
```
@return the log from the logging console*/ getLog(): string;
  /**Writes the string to the logging console. To view the logged output, select __View > Show
logs__. This can be very useful for debugging scripts.
@param data the message to log
@return the Logger, for chaining.*/ log(data: Object): Logger;
  /**Writes a formatted string to the logging console, using the format and values provided. The
string can include multiple `%s` placeholders, which are replaced with corresponding
values from the list of arguments, converted to strings.

```
// Log the number of Google Groups you belong to.
var groups = GroupsApp.getGroups();
Logger.log('You are a member of %s Google Groups.', groups.length);
```
@param format a format string that contains as many instances of `%s` as the number of
    `values` arguments
@param values a variable number of values to insert into the format string
@return the Logger, for chaining*/ log(
    format: string,
    ...values: Object[]
  ): Logger;
}
const Logger: Logger;
