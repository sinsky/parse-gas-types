interface MailApp {
  /**Returns the number of recipients you can send emails to for the rest of the day. The returned
value is valid for the current execution and might vary between executions.

Quotas are based on the number of email recipients. For specific quota information, see [Quotas for Google
Services](https://developers.google.com/apps-script/guides/services/quotas).

```
var emailQuotaRemaining = MailApp.getRemainingDailyQuota();
Logger.log("Remaining email quota: " + emailQuotaRemaining);
```
@return The number of emails remaining that the script can send.*/ getRemainingDailyQuota(): Integer;
  /**Sends an email message. This variation of the method is much more flexible, allowing for many
more options.

```
// This code fetches the Google and YouTube logos, inlines them in an email
// and sends the email
function inlineImage() {
  var googleLogoUrl = "https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_74x24dp.png";
  var youtubeLogoUrl =
        "https://developers.google.com/youtube/images/YouTube_logo_standard_white.png";
  var googleLogoBlob = UrlFetchApp
                         .fetch(googleLogoUrl)
                         .getBlob()
                         .setName("googleLogoBlob");
  var youtubeLogoBlob = UrlFetchApp
                          .fetch(youtubeLogoUrl)
                          .getBlob()
                          .setName("youtubeLogoBlob");
  MailApp.sendEmail({
    to: "recipient@example.com",
    subject: "Logos",
    htmlBody: "inline Google Logo<img src='cid:googleLogo'> images! <br>" +
              "inline YouTube Logo <img src='cid:youtubeLogo'>",
    inlineImages:
      {
        googleLogo: googleLogoBlob,
        youtubeLogo: youtubeLogoBlob
      }
  });
}
```
@param message a JavaScript object representing an email message*/ sendEmail(
    message: Object,
  ): void;
  /**Sends an email message.

```
MailApp.sendEmail("recipient@example.com",
                  "TPS reports",
                  "Where are the TPS reports?");
```
@param recipient the addresses of the recipients, separated by commas
@param subject the subject line
@param body the body of the email*/ sendEmail(
    recipient: string,
    subject: string,
    body: string,
  ): void;
  /**Sends an email message with optional arguments.

```
// Send an email with two attachments: a file from Google Drive (as a PDF) and an HTML file.
var file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
var blob = Utilities.newBlob('Insert any HTML content here', 'text/html', 'my_document.html');
MailApp.sendEmail('mike@example.com', 'Attachment example', 'Two files are attached.', {
    name: 'Automatic Emailer Script',
    attachments: [file.getAs(MimeType.PDF), blob]
});
```
@param recipient the addresses of the recipients, separated by commas
@param subject the subject line
@param body the body of the email
@param options a JavaScript object that specifies advanced parameters, as listed below*/ sendEmail(
    recipient: string,
    subject: string,
    body: string,
    options: Object,
  ): void;
  /**Sends an email message. This method allows a user to easily specify a Reply-To address for the
sent message that can differ from the sender.

```
MailApp.sendEmail("recipient@example.com",
                  "replies@example.com",
                  "TPS report status",
                  "What is the status of those TPS reports?");
```
@param to the addresses of the recipients, separated by commas
@param replyTo the reply-to address
@param subject the subject line
@param body the body of the email in plain text*/ sendEmail(
    to: string,
    replyTo: string,
    subject: string,
    body: string,
  ): void;
}
const MailApp: MailApp;
