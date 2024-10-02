interface GmailApp {
  /**Creates a draft email message. The size of the email (including headers) is [quota limited](/apps-script/guides/services/quotas#current_limitations).

```
// The code below creates a draft email with the current date and time.
var now = new Date();
GmailApp.createDraft("mike@example.com", "current time", "The time is: " + now.toString());
```
@param recipient comma separated list of email addresses
@param subject subject of the email
@param body body of the email
@return the newly created GmailDraft*/ createDraft(
    recipient: string,
    subject: string,
    body: string,
  ): GmailApp.GmailDraft;
  /**Creates a draft email message with optional arguments. The email can contain plain text or an
HTML body. The size of the email (including headers, but excluding attachments) is [quota limited](/apps-script/guides/services/quotas#current_limitations).

```
// Create a draft email with a file from Google Drive attached as a PDF.
var file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
GmailApp.createDraft('mike@example.com', 'Attachment example', 'Please see attached file.', {
    attachments: [file.getAs(MimeType.PDF)],
    name: 'Automatic Emailer Script'
});
```
@param recipient the addresses of the recipient
@param subject the subject line
@param body the body of the email
@param options a JavaScript object that specifies advanced parameters, as listed below
@return the newly created GmailDraft*/ createDraft(
    recipient: string,
    subject: string,
    body: string,
    options: Object,
  ): GmailApp.GmailDraft;
  /**Create a new user label of the given name.

```
// Creates the label @FOO and logs label: FOO
Logger.log("label: " + GmailApp.createLabel("FOO"));
```
@param name the name of the new label
@return the newly created label*/ createLabel(
    name: string,
  ): GmailApp.GmailLabel;
  /**Deletes the specified label.

```
// Have to get the label by name first
var label = GmailApp.getUserLabelByName("FOO");
GmailApp.deleteLabel(label);
```
@param label the label to delete
@return the Gmail service, useful for chaining*/ deleteLabel(
    label: GmailApp.GmailLabel,
  ): GmailApp;
  /**Gets a list of the emails that are set up as aliases for this account in Gmail.

You can send a message from any of these aliases by using the "from" optional argument.

```
// Log the aliases for this Gmail account and send an email as the first one.
var me = Session.getActiveUser().getEmail();
var aliases = GmailApp.getAliases();
Logger.log(aliases);
if (aliases.length > 0) {
  GmailApp.sendEmail(me, 'From an alias', 'A message from an alias!', {'from': aliases[0]});
} else {
  GmailApp.sendEmail(me, 'No aliases found', 'You have no aliases.');
}
```
@return an array of aliases for this account*/ getAliases(): string[];
  /**Gets all classic Google Hangouts threads and Google Chat threads until Google switches all
users of classic Hangouts to Chat later this year. To learn more, see [Learn
about the switch from classic Hangouts to Google Chat](https://support.google.com/chat/answer/9854901).

This call fails when the size of all threads is too large for the system to handle. Where
the thread size is unknown, and potentially very large, use the 'paged' call, and specify
ranges of the threads to retrieve in each call.

```
var threads = GmailApp.getChatThreads();
Logger.log("# of chat threads: " + threads.length);
```
@deprecated
@return An array of chat threads from Gmail.*/ getChatThreads(): GmailApp.GmailThread[];
  /**Gets a range of classic Google Hangouts threads and Google Chat threads until Google switches
all users of classic Hangouts to Chat later this year. To learn more, see [Learn
about the switch from classic Hangouts to Google Chat](https://support.google.com/chat/answer/9854901).

```
// Get first 50 chat threads
var threads = GmailApp.getChatThreads(0,50);
// Will log no more than 50.0
Logger.log(threads.length);
Logger.log(threads[0].getFirstMessageSubject());
```
@deprecated
@param start the index of the first thread to retrieve
@param max the maximum number of threads to retrieve
@return an array of chat Gmail threads*/ getChatThreads(
    start: Integer,
    max: Integer,
  ): GmailApp.GmailThread[];
  /**Retrieve an email message draft by ID.

Use this in conjunction with getId() on Gmail drafts.

```
// Get the first draft message in your drafts folder
var draft = GmailApp.getDrafts()[0];
// Get its ID
var draftId = draft.getId();
// Now fetch the same draft using that ID.
var draftById = GmailApp.getDraft(draftId);
// Should always log true as they should be the same message
Logger.log(draft.getMessage().getSubject() == draftById.getMessage().getSubject());
```
@param draftId the ID of the draft to retrieve
@return the draft with the given ID*/ getDraft(
    draftId: string,
  ): GmailApp.GmailDraft;
  /**Retrieves all draft messages.

```
// Logs the number of draft messages
var drafts = GmailApp.getDraftMessages();
Logger.log(drafts.length);
```
@return an array of draft Gmail messages*/ getDraftMessages(): GmailApp.GmailMessage[];
  /**Gets all Gmail draft messages.

```
var drafts = GmailApp.getDrafts();
for (var i = 0; i < drafts.length; i++) {
  Logger.log(drafts[i].getId());
}
```
@return an array of Gmail draft messages*/ getDrafts(): GmailApp.GmailDraft[];
  /**Retrieves all Inbox threads irrespective of labels.

This call will fail when the size of all threads is too large for the system to handle.
Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
specify ranges of the threads to retrieve in each call.

```
// Log the subject lines of your Inbox
var threads = GmailApp.getInboxThreads();
for (var i = 0; i < threads.length; i++) {
  Logger.log(threads[i].getFirstMessageSubject());
}
```
@return an array of Gmail threads in the Inbox*/ getInboxThreads(): GmailApp.GmailThread[];
  /**Retrieves a range of Inbox threads irrespective of labels.

```
// Log the subject lines of up to the first 50 emails in your Inbox
var threads = GmailApp.getInboxThreads(0, 50);
for (var i = 0; i < threads.length; i++) {
  Logger.log(threads[i].getFirstMessageSubject());
}
```
@param start the index of the first thread to retrieve
@param max the maximum number of threads to retrieve
@return an array of Gmail threads in the Inbox*/ getInboxThreads(
    start: Integer,
    max: Integer,
  ): GmailApp.GmailThread[];
  /**Gets the number of unread threads in the inbox.

```
Logger.log("Messages unread in inbox: " + GmailApp.getInboxUnreadCount());
```
@return the number of threads in the inbox that have unread messages*/ getInboxUnreadCount(): Integer;
  /**Gets a message by ID.

Use this in conjunction with getId() on Gmail messages.

```
// Get the first message in the first thread of your inbox
var message = GmailApp.getInboxThreads(0, 1)[0].getMessages()[0];
// Get its ID
var messageId = message.getId();
// Now fetch the same message using that ID.
var messageById = GmailApp.getMessageById(messageId);
// Should always log true as they should be the same message
Logger.log(message.getSubject() == messageById.getSubject());
```
@param id the ID of the message to retrieve
@return the message with the given ID*/ getMessageById(
    id: string,
  ): GmailApp.GmailMessage;
  /**Retrieve all messages in the specified thread.

```
// Log all the subject lines in the first thread of your inbox
var thread = GmailApp.getInboxThreads(0, 1)[0];
var messages = GmailApp.getMessagesForThread(thread);
for (var i = 0 ; i < messages.length; i++) {
  Logger.log("subject: " + messages[i].getSubject());
}
```
@param thread the thread of messages to retrieve
@return array of messages corresponding to this thread*/ getMessagesForThread(
    thread: GmailApp.GmailThread,
  ): GmailApp.GmailMessage[];
  /**Retrieve all messages in the specified threads.

```
// Log the subject lines of all messages in the first two threads of your inbox
var thread = GmailApp.getInboxThreads(0, 2);
var messages = GmailApp.getMessagesForThreads(thread);
for (var i = 0 ; i < messages.length; i++) {
  for (var j = 0; j < messages[i].length; j++) {
    Logger.log("subject: " + messages[i][j].getSubject());
  }
}
```
@param threads the threads of messages to retrieve
@return an array of arrays of messages, where each item in the outer array corresponds to a
    thread and the inner array contains the messages in that thread*/ getMessagesForThreads(
    threads: GmailApp.GmailThread[],
  ): GmailApp.GmailMessage[][];
  /**Retrieves all Priority Inbox threads irrespective of labels.

This call will fail when the size of all threads is too large for the system to handle.
Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
specify ranges of the threads to retrieve in each call.

```
Logger.log("# of messages in your Priority Inbox: " +
           GmailApp.getPriorityInboxThreads().length);
```
@return an array of Gmail threads in the Priority Inbox*/ getPriorityInboxThreads(): GmailApp.GmailThread[];
  /**Retrieves a range of Priority Inbox threads irrespective of labels.

```
// Will log some number 2 or less
Logger.log("# of messages in your Priority Inbox: " +
           GmailApp.getPriorityInboxThreads(0, 2).length);
```
@param start the index of the first thread to retrieve
@param max the maximum number of threads to retrieve
@return an array of Gmail threads in the Priority Inbox*/ getPriorityInboxThreads(
    start: Integer,
    max: Integer,
  ): GmailApp.GmailThread[];
  /**Gets the number of unread threads in the Priority Inbox.

```
Logger.log("Number of unread emails in your Priority Inbox : " +
           GmailApp.getPriorityInboxUnreadCount());
```
@return the number of threads in the Priority Inbox that have unread messages*/ getPriorityInboxUnreadCount(): Integer;
  /**Retrieves all spam threads irrespective of labels.

This call will fail when the size of all threads is too large for the system to handle.
Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
specify ranges of the threads to retrieve in each call.

```
Logger.log("# of total spam threads: " + GmailApp.getSpamThreads().length);
```
@return an array of Gmail threads in the spam folder*/ getSpamThreads(): GmailApp.GmailThread[];
  /**Retrieves a range of spam threads irrespective of labels.

```
// Will log a number at most 5
Logger.log("# of total spam threads: " + GmailApp.getSpamThreads(0, 5).length);
```
@param start the index of the first thread to retrieve
@param max the maximum number of threads to retrieve
@return an array of Gmail threads in the spam folder*/ getSpamThreads(
    start: Integer,
    max: Integer,
  ): GmailApp.GmailThread[];
  /**Gets the number of unread threads that are spam.

```
// Unless you actually read stuff in your spam folder, this should be the same as
// the number of messages in your spam folder.
Logger.log("# unread threads that are spam: " + GmailApp.getSpamUnreadCount());
```
@return the number spam threads that have unread messages*/ getSpamUnreadCount(): Integer;
  /**Retrieves all starred threads irrespective of labels.

This call will fail when the size of all threads is too large for the system to handle.
Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
specify ranges of the threads to retrieve in each call.

```
// Logs the number of starred threads
Logger.log("# Starred threads: " + GmailApp.getStarredThreads().length);
```
@return an array of starred Gmail threads*/ getStarredThreads(): GmailApp.GmailThread[];
  /**Retrieves a range of starred threads irrespective of labels.

```
// Logs the number of starred threads to a maximum of 5
Logger.log("# Starred threads: " + GmailApp.getStarredThreads(0, 5).length);
```
@param start the index of the first thread to retrieve
@param max the maximum number of threads to retrieve
@return an array of starred Gmail threads*/ getStarredThreads(
    start: Integer,
    max: Integer,
  ): GmailApp.GmailThread[];
  /**Gets the number of unread threads that are starred.

```
Logger.log("# unread and starred: " + GmailApp.getStarredUnreadCount());
```
@return the number of starred threads that have unread messages*/ getStarredUnreadCount(): Integer;
  /**Gets a thread by ID.

Use this in conjunction with getId() on Gmail threads.

```
// Gets the first inbox thread.
const firstThread = GmailApp.getInboxThreads(0,1)[0];
// Gets the same thread by ID.
const threadById = GmailApp.getThreadById(firstThread.getId());
// Verifies that they are the same.
console.log(firstThread.getFirstMessageSubject() === threadById.getFirstMessageSubject());
```
@param id The ID of the thread to retrieve.
@return The thread with the given ID or `null` if not found.*/ getThreadById(
    id: string,
  ): GmailApp.GmailThread;
  /**Retrieves all trash threads irrespective of labels.

This call will fail when the size of all threads is too large for the system to handle.
Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
specify ranges of the threads to retrieve in each call.

```
Logger.log("# of total trash threads: " + GmailApp.getTrashThreads().length);
```
@return an array of Gmail threads in the trash*/ getTrashThreads(): GmailApp.GmailThread[];
  /**Retrieves a range of trash threads irrespective of labels.

```
// Will log a number at most 5
Logger.log("# of total trash threads: " + GmailApp.getTrashThreads(0, 5).length);
```
@param start the index of the first thread to retrieve
@param max the maximum number of threads to retrieve
@return an array of Gmail threads in the trash*/ getTrashThreads(
    start: Integer,
    max: Integer,
  ): GmailApp.GmailThread[];
  /**Retrieves a label given the label name.

```
var labelObject = GmailApp.getUserLabelByName("myLabel");
```
@param name the name of the label to retrieve
@return the Gmail label with the given name*/ getUserLabelByName(
    name: string,
  ): GmailApp.GmailLabel;
  /**Retrieves a list of user-created labels.

```
// Logs all of the names of your labels
var labels = GmailApp.getUserLabels();
for (var i = 0; i < labels.length; i++) {
  Logger.log("label: " + labels[i].getName());
}
```
@return array of user created labels*/ getUserLabels(): GmailApp.GmailLabel[];
  /**Marks this message read and forces the message to refresh.

```
// Mark the first message in the first thread of your inbox as read
var message = GmailApp.getInboxThreads(0, 1)[0].getMessages()[0];
GmailApp.markMessageRead(message);
```
@param message the message to mark as read
@return the Gmail service, useful for chaining*/ markMessageRead(
    message: GmailApp.GmailMessage,
  ): GmailApp;
  /**Marks this message unread and forces the message to refresh.

```
// Mark the first message in the first thread of your inbox as unread
var message = GmailApp.getInboxThreads(0, 1)[0].getMessages()[0];
GmailApp.markMessageUnread(message);
```
@param message the message to mark as unread
@return the Gmail service, useful for chaining*/ markMessageUnread(
    message: GmailApp.GmailMessage,
  ): GmailApp;
  /**Marks these messages read and forces the messages to refresh.

```
// Mark first three messages in the first inbox thread as read.
// Assumes that the first inbox thread has 3 messages in it.
var threadMessages = GmailApp.getInboxThreads(0, 1)[0].getMessages();
var messages = [threadMessages[0], threadMessages[1], threadMessages[2]];
GmailApp.markMessagesRead(thread.getMessages());
```
@param messages an array of messages to mark as read
@return the Gmail service, useful for chaining*/ markMessagesRead(
    messages: GmailApp.GmailMessage[],
  ): GmailApp;
  /**Marks these messages unread and forces the messages to refresh.

```
// Mark first three messages in the first inbox thread as unread.
// Assumes that the first inbox thread has 3 messages in it
var threadMessages = GmailApp.getInboxThreads(0, 1)[0].getMessages();
var messages = [threadMessages[0], threadMessages[1], threadMessages[2]];
GmailApp.markMessagesUnread(thread.getMessages());
```
@param messages an array of messages to mark as unread
@return the Gmail service, useful for chaining*/ markMessagesUnread(
    messages: GmailApp.GmailMessage[],
  ): GmailApp;
  /**Marks this thread as important and forces the thread to refresh.

```
// Marks first inbox thread as important
var thread = GmailApp.getInboxThreads(0, 1)[0];
GmailApp.markThreadImportant(thread);
```
@param thread the thread to mark as important
@return the Gmail service, useful for chaining*/ markThreadImportant(
    thread: GmailApp.GmailThread,
  ): GmailApp;
  /**Marks this thread as read and forces the thread to refresh.

```
// Marks first inbox thread as read
var thread = GmailApp.getInboxThreads(0, 1)[0];
GmailApp.markThreadRead(thread);
```
@param thread the thread to mark as read
@return the Gmail service, useful for chaining*/ markThreadRead(
    thread: GmailApp.GmailThread,
  ): GmailApp;
  /**Marks this thread as unimportant and forces the thread to refresh.

```
// Marks first inbox thread as unimportant
var thread = GmailApp.getInboxThreads(0, 1)[0];
GmailApp.markThreadUnimportant(thread);
```
@param thread the thread to mark as unimportant
@return the Gmail service, useful for chaining*/ markThreadUnimportant(
    thread: GmailApp.GmailThread,
  ): GmailApp;
  /**Marks this thread unread and forces the thread to refresh.

```
// Marks first inbox thread as unread
var thread = GmailApp.getInboxThreads(0, 1)[0];
GmailApp.markThreadUnread(thread);
```
@param thread the thread to mark as unread
@return the Gmail service, useful for chaining*/ markThreadUnread(
    thread: GmailApp.GmailThread,
  ): GmailApp;
  /**Marks these threads as important and forces the threads to refresh.

```
// Marks first two threads in inbox as important
var threads = GmailApp.getInboxThreads(0, 2);
GmailApp.markThreadsImportant(threads);
```
@param threads an array of threads to mark as important
@return the Gmail service, useful for chaining*/ markThreadsImportant(
    threads: GmailApp.GmailThread[],
  ): GmailApp;
  /**Marks these threads as read and forces the threads to refresh.

```
// Marks first two threads in inbox as read
var threads = GmailApp.getInboxThreads(0, 2);
GmailApp.markThreadsRead(threads);
```
@param threads an array of threads to mark as read
@return the Gmail service, useful for chaining*/ markThreadsRead(
    threads: GmailApp.GmailThread[],
  ): GmailApp;
  /**Marks these threads as unimportant and forces the threads to refresh.

```
// Marks first two threads in inbox as unimportant
var threads = GmailApp.getInboxThreads(0, 2);
GmailApp.markThreadsUnimportant(threads);
```
@param threads an array of threads to mark as unimportant
@return the Gmail service, useful for chaining*/ markThreadsUnimportant(
    threads: GmailApp.GmailThread[],
  ): GmailApp;
  /**Marks these threads as unread and forces the threads to refresh.

```
// Marks first two threads in inbox as unread
var threads = GmailApp.getInboxThreads(0, 2);
GmailApp.markThreadsUnread(threads);
```
@param threads an array of threads to mark as unread
@return the Gmail service, useful for chaining*/ markThreadsUnread(
    threads: GmailApp.GmailThread[],
  ): GmailApp;
  /**Moves the message to the trash and forces the message to refresh.

```
// Move the first message in your inbox to trash
var firstThread = GmailApp.getInboxThreads(0,1)[0];
var firstMessage = firstThread.getMessages()[0];
GmailApp.moveMessageToTrash(firstMessage);
```
@param message the message to be trashed
@return the Gmail service (useful for chaining)*/ moveMessageToTrash(
    message: GmailApp.GmailMessage,
  ): GmailApp;
  /**Moves the specified messages to the trash and forces the messages to refresh.

```
// Move first two messages in your inbox to trash
var firstThread = GmailApp.getInboxThreads(0,1)[0];
var messages = firstThread.getMessages();
var toDelete = [messages[0], messages[1]];
GmailApp.moveMessagesToTrash(toDelete);
```
@param messages the messages to be trashed
@return the Gmail service (useful for chaining)*/ moveMessagesToTrash(
    messages: GmailApp.GmailMessage[],
  ): GmailApp;
  /**Moves this thread to the archive and forces the thread to refresh.

```
// Archive the first thread in your inbox
var firstThread = GmailApp.getInboxThreads(0,1)[0];
GmailApp.moveThreadToArchive(firstThread);
```
@param thread the thread to be archive
@return the Gmail service, useful for chaining*/ moveThreadToArchive(
    thread: GmailApp.GmailThread,
  ): GmailApp;
  /**Moves this thread to the inbox and forces the thread to refresh.

```
// Find a thread not already in your inbox
var thread = GmailApp.search("-in:inbox")[0]; // Get the first one
GmailApp.moveThreadToInbox(thread);
```
@param thread the thread to be moved to the inbox
@return the Gmail service, useful for chaining*/ moveThreadToInbox(
    thread: GmailApp.GmailThread,
  ): GmailApp;
  /**Moves this thread to spam and forces the thread to refresh.

```
// Tag first thread in inbox as spam
var firstThread = GmailApp.getInboxThreads(0,1)[0];
GmailApp.moveThreadToSpam(firstThread);
```
@param thread the thread to be moved to spam
@return the Gmail service, useful for chaining*/ moveThreadToSpam(
    thread: GmailApp.GmailThread,
  ): GmailApp;
  /**Moves this thread to the trash and forces the thread to refresh.

```
// Move first thread in inbox to trash
var firstThread = GmailApp.getInboxThreads(0,1)[0];
GmailApp.moveThreadToTrash(firstThread);
```
@param thread the thread to be trashed
@return the Gmail service, useful for chaining*/ moveThreadToTrash(
    thread: GmailApp.GmailThread,
  ): GmailApp;
  /**Moves these threads to the archive and forces the threads to refresh.

```
// Move first two threads in your inbox to the archive
var firstTwoThreads = GmailApp.getInboxThreads(0,2);
GmailApp.moveThreadsToArchive(firstTwoThreads);
```
@param threads an array of threads to be archived
@return the Gmail service, useful for chaining*/ moveThreadsToArchive(
    threads: GmailApp.GmailThread[],
  ): GmailApp;
  /**Moves these threads to the inbox and forces the threads to refresh.

```
// Find two threads not already in your inbox
var firstTwoThreads = GmailApp.search("-in:inbox", 0, 2);
GmailApp.moveThreadsToInbox(firstTwoThreads);
```
@param threads an array of threads to be moved to the inbox
@return the Gmail service, useful for chaining*/ moveThreadsToInbox(
    threads: GmailApp.GmailThread[],
  ): GmailApp;
  /**Moves these threads to spam and forces the threads to refresh.

```
// Move first two threads in your inbox to spam
var firstTwoThreads = GmailApp.getInboxThreads(0,2);
GmailApp.moveThreadsToSpam(firstTwoThreads);
```
@param threads an array of threads to be moved to spam
@return the Gmail service, useful for chaining*/ moveThreadsToSpam(
    threads: GmailApp.GmailThread[],
  ): GmailApp;
  /**Moves these threads to the trash and forces the threads to refresh.

```
// Move first two threads in your inbox to trash
var firstTwoThreads = GmailApp.getInboxThreads(0,2);
GmailApp.moveThreadsToTrash(firstTwoThreads);
```
@param threads an array of threads to be trashed
@return the Gmail service, useful for chaining*/ moveThreadsToTrash(
    threads: GmailApp.GmailThread[],
  ): GmailApp;
  /**Reloads the message and associated state from Gmail (useful in case the labels, read state,
etc., have changed).

```
var firstThread = GmailApp.getInboxThreads(0,1)[0];
var firstMessage = firstThread.getMessages()[0];
// ...Do something that may take a while here....
GmailApp.refreshMessage(firstMessage);
// ...Do more stuff with firstMessage...
```
@param message the message to be refreshed
@return the Gmail service, useful for chaining*/ refreshMessage(
    message: GmailApp.GmailMessage,
  ): GmailApp;
  /**Reloads the messages and associated state from Gmail (useful in case the labels, read state,
etc., have changed).

```
var firstThread = GmailApp.getInboxThreads(0,1)[0];
var coupleOfMessages = firstThread.getMessages().slice(0, 2);
// ...Do something that may take a while here....
GmailApp.refreshMessages(coupleOfMessages);
// ...Do more stuff with coupleOfMessages...
```
@param messages the messages to be refreshed
@return the Gmail service, useful for chaining*/ refreshMessages(
    messages: GmailApp.GmailMessage[],
  ): GmailApp;
  /**Reloads the thread and associated state from Gmail (useful in case the labels, read state,
etc., have changed).

```
var firstThread = GmailApp.getInboxThreads(0,1)[0];
// ...Do something that may take a while here....
GmailApp.refreshThread(firstThread);
// ... Do more stuff with the thread ...
```
@param thread the thread to be refreshed
@return the Gmail service, useful for chaining*/ refreshThread(
    thread: GmailApp.GmailThread,
  ): GmailApp;
  /**Reloads the threads and associated state from Gmail (useful in case the labels, read state,
etc., have changed).

```
var threads = GmailApp.getInboxThreads(0, 3);
// ...Do something that may take a while here....
GmailApp.refreshThreads(threads);
// ... Do more stuff with threads ...
```
@param threads the threads to be refreshed
@return the Gmail service, useful for chaining*/ refreshThreads(
    threads: GmailApp.GmailThread[],
  ): GmailApp;
  /**Search Gmail with the given query.

This call will fail when the size of all threads is too large for the system to handle.
Where the thread size is unknown, and potentially very large, please use the 'paged' call, and
specify ranges of the threads to retrieve in each call.

```
// Find starred messages with subject IMPORTANT
var threads = GmailApp.search('is:starred subject:"IMPORTANT"');
```
@param query the search query, as you would type it into Gmail
@return an array of Gmail threads matching this query*/ search(
    query: string,
  ): GmailApp.GmailThread[];
  /**Search Gmail with the given query.

```
// Find starred messages with subject IMPORTANT and return second batch of 10.
// Assumes there are at least 11 of them, otherwise this will return an empty array.
var threads = GmailApp.search('is:starred subject:"IMPORTANT"', 10, 10);
```
@param query the search query, as you would type it into Gmail
@param start the index of the starting thread
@param max the maximum number of threads to return
@return an array of Gmail threads matching this query*/ search(
    query: string,
    start: Integer,
    max: Integer,
  ): GmailApp.GmailThread[];
  /**Sends an email message. The size of the email (including headers) is [quota limited](/apps-script/guides/services/quotas#current_limitations).

```
// The code below will send an email with the current date and time.
var now = new Date();
GmailApp.sendEmail("mike@example.com", "current time", "The time is: " + now.toString());
```
@param recipient comma separated list of email addresses
@param subject subject of the email (250 characters maximum)
@param body body of the email
@return the Gmail service, useful for chaining*/ sendEmail(
    recipient: string,
    subject: string,
    body: string,
  ): GmailApp;
  /**Sends an email message with optional arguments. The email can contain plain text or an HTML
body. The size of the email (including headers, but excluding attachments) is [quota limited](/apps-script/guides/services/quotas#current_limitations).

```
// Send an email with a file from Google Drive attached as a PDF.
var file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
GmailApp.sendEmail('mike@example.com', 'Attachment example', 'Please see the attached file.', {
    attachments: [file.getAs(MimeType.PDF)],
    name: 'Automatic Emailer Script'
});
```
@param recipient the addresses of the recipient
@param subject the subject line (250 characters maximum)
@param body the body of the email
@param options a JavaScript object that specifies advanced parameters, as listed below
@return the Gmail service, useful for chaining*/ sendEmail(
    recipient: string,
    subject: string,
    body: string,
    options: Object,
  ): GmailApp;
  /**Sets the [current message
access token](/workspace/add-ons/concepts/gsuite-scopes#access_tokens) that enables the script to access the current [`GmailMessage`](https://developers.google.com/apps-script/reference/gmail/gmail-message.html) properties.

Only [Google Workspace Add-on](/workspace/add-ons/gmail) projects using Gmail [current message scopes](/workspace/add-ons/concepts/gsuite-scopes#gmail_add-on_scopes)
require this method.

```
function handleAddonActionEvent(e) {
  var accessToken = e.messageMetadata.accessToken;
  var messageId = e.messageMetadata.messageId;
  GmailApp.setCurrentMessageAccessToken(accessToken);
  var mailMessage = GmailApp.getMessageById(messageId);
  // Do something with mailMessage
}
```
@param accessToken the temporary access token obtained from a Gmail add-on [action event object](/gmail/add-ons/concepts/actions#action_event_objects).*/ setCurrentMessageAccessToken(
    accessToken: string,
  ): void;
  /**Adds a star to this message and forces the message to refresh.

```
// Stars the first message in the first thread in your inbox
var firstThread = GmailApp.getInboxThreads(0,1)[0];
var message = firstThread.getMessages()[0];
GmailApp.starMessage(message);
```
@param message the message to star
@return the Gmail service, useful for chaining*/ starMessage(
    message: GmailApp.GmailMessage,
  ): GmailApp;
  /**Adds stars to these messages and forces the messages to refresh.

```
// Stars the first three messages in the first thread in your inbox
var firstThread = GmailApp.getInboxThreads(0,1)[0];
var coupleOfMessages = firstThread.getMessages().slice(0, 3);
GmailApp.starMessages(coupleOfMessages);
```
@param messages an array of messages to star
@return the Gmail service, useful for chaining*/ starMessages(
    messages: GmailApp.GmailMessage[],
  ): GmailApp;
  /**Removes a star from this message and forces the message to refresh.

```
// Unstars the first message in the first thread in your inbox
var firstThread = GmailApp.getInboxThreads(0,1)[0];
var message = firstThread.getMessages()[0];
GmailApp.unstarMessage(message);
```
@param message the message to unstar
@return the Gmail service, useful for chaining*/ unstarMessage(
    message: GmailApp.GmailMessage,
  ): GmailApp;
  /**Removes stars from these messages and forces the messages to refresh.

```
// Unstars the first three messages in the first thread in your inbox
var firstThread = GmailApp.getInboxThreads(0,1)[0];
var coupleOfMessages = firstThread.getMessages().slice(0, 3);
GmailApp.unstarMessages(coupleOfMessages);
```
@param messages an array of messages to unstar
@return the Gmail service, useful for chaining*/ unstarMessages(
    messages: GmailApp.GmailMessage[],
  ): GmailApp;
}
module GmailApp {
  interface GmailThread {
    /**Adds this label to the thread.

```
// Add label MyLabel to the first thread in the inbox
var label = GmailApp.getUserLabelByName("MyLabel");
var firstThread = GmailApp.getInboxThreads(0,1)[0];
firstThread.addLabel(label);
```
@param label the label to apply to this thread
@return this thread, useful for chaining*/ addLabel(
      label: GmailApp.GmailLabel,
    ): GmailApp.GmailThread;
    /**Creates a draft message replying to the sender of the last message in this thread using the
reply-to address. The size of the email (including headers) is [quota limited](/apps-script/guides/services/quotas#current_limitations).

```
// Create a draft reply to the message author with an acknowledgement.
var firstThread = GmailApp.getInboxThreads(0,1)[0];
firstThread.createDraftReply("Got your message");
```
@param body the body of the email
@return the newly created draft message*/ createDraftReply(
      body: string,
    ): GmailApp.GmailDraft;
    /**Creates a draft message replying to the sender of the last message in this thread using the
reply-to address, with optional arguments.

The email can contain both plain text and an HTML body. The size of the email (including
headers) is [quota
limited](/apps-script/guides/services/quotas#current_limitations).

```
// Create a draft response with an HTML text body.
var firstThread = GmailApp.getInboxThreads(0,1)[0];
firstThread.createDraftReply("incapable of HTML", {
  htmlBody: "<b>some HTML body text</b>",
  cc: "another@example.com"
});
```
@param body the body of the email
@param options a JavaScript object that specifies advanced parameters, as listed below
@return the newly created draft message*/ createDraftReply(
      body: string,
      options: Object,
    ): GmailApp.GmailDraft;
    /**Creates a draft message replying to the sender of the last message in this thread, using the
reply-to address and all recipients of this message. The size of the email (including headers)
is [quota limited](/apps-script/guides/services/quotas#current_limitations).

```
// Create a draft reply to all recipients (except those bcc'd) of the last email in this
// thread.
var firstThread = GmailApp.getInboxThreads(0,1)[0];
var message = firstThread.getMessages()[0];
message.createDraftReplyAll("Got your message");
```
@param body the body of the email
@return the newly created draft message*/ createDraftReplyAll(
      body: string,
    ): GmailApp.GmailDraft;
    /**Creates a draft message replying to the sender of the last message in this thread, using the
reply-to address and all recipients, with optional arguments.

The email can contain both plain text and an HTML body. The size of the email (including
headers) is [quota
limited](/apps-script/guides/services/quotas#current_limitations).

```
// Create a draft reply, using an HTML text body, to all recipients (except those bcc'd) of
// the last email of in this thread.
var firstThread = GmailApp.getInboxThreads(0,1)[0];
firstThread.createDraftReplyAll("incapable of HTML", {
  htmlBody: "<b>some HTML body text</b>",
  cc: "another@example.com"
});
```
@param body the body of the email
@param options a JavaScript object that specifies advanced parameters, as listed below
@return the newly created draft message*/ createDraftReplyAll(
      body: string,
      options: Object,
    ): GmailApp.GmailDraft;
    /**Gets the subject of the first message in the thread.

```
// Log the subject of the first message in the first thread in the inbox
var firstThread = GmailApp.getInboxThreads(0,1)[0];
Logger.log(firstThread.getFirstMessageSubject());
```
@return the subject of the first message in the thread*/ getFirstMessageSubject(): string;
    /**Gets the ID of this thread. The ID of a thread varies based on the messages it contains; for a
consistent ID for a particular message in the thread, call `getMessages()[0].getId()`
instead.

```
// Log the subject of the first message in the first thread in the inbox.
var firstThread = GmailApp.getInboxThreads(0,1)[0];
var id = firstThread.getId();
// Get same thread by its ID.
var thread = GmailApp.getThreadById(id);
Logger.log(thread.getFirstMessageSubject() == firstThread.getFirstMessageSubject()); // True
```
@return the ID of this thread*/ getId(): string;
    /**Returns the user-created labels on this thread.

```
// Log the names of the labels attached to the first thread in the inbox
var firstThread = GmailApp.getInboxThreads(0,1)[0];
var labels = firstThread.getLabels();
for (var i = 0; i < labels.length; i++) {
  Logger.log(labels[i].getName());
}
```
@return an array of labels for this thread*/ getLabels(): GmailApp.GmailLabel[];
    /**Gets the date of this thread's most recent message.

```
// Log the date of the most recent message on the first thread in the inbox
var firstThread = GmailApp.getInboxThreads(0,1)[0];
Logger.log(firstThread.getLastMessageDate());
```
@return the date of the most recent message in the thread*/ getLastMessageDate(): Date;
    /**Returns the number of messages in the thread.

```
// Log the number of messages in the thread
var firstThread = GmailApp.getInboxThreads(0,1)[0];
Logger.log(firstThread.getMessageCount());
```
@return the number of messages in the thread*/ getMessageCount(): Integer;
    /**Gets the messages in this thread.

```
// Log the subjects of the messages in the thread
var firstThread = GmailApp.getInboxThreads(0,1)[0];
var messages = firstThread.getMessages();
for (var i = 0; i < messages.length; i++) {
  Logger.log(messages[i].getSubject());
}
```
@return an array of Gmail messages in this thread*/ getMessages(): GmailApp.GmailMessage[];
    /**Gets a permalink for this thread.

Note that this only works with the classic Gmail interface, not Inbox.

```
// Logs the permalink for the first thread in the inbox
var thread = GmailApp.getInboxThreads(0,1)[0];
Logger.log(thread.getPermalink());
```
@return the permalink for this thread*/ getPermalink(): string;
    /**Returns whether the thread has any starred messages.

```
// Log if this thread has starred messages
var firstThread = GmailApp.getInboxThreads(0,1)[0];
Logger.log('has starred : ' + firstThread.hasStarredMessages());
```
@return true if the thread has any starred messages*/ hasStarredMessages(): boolean;
    /**Returns whether the thread is marked as important.

```
// Log if this thread is marked as important
var firstThread = GmailApp.getInboxThreads(0,1)[0];
Logger.log('Important? : ' + firstThread.isImportant());
```
@return Whether the thread is marked as important.*/ isImportant(): boolean;
    /**Returns whether the thread is labeled a chat.

```
// Log if this thread is a chat
var firstThread = GmailApp.getInboxThreads(0,1)[0];
Logger.log('is in chats? : ' + firstThread.isInChats());
```
@return true if the thread is labeled a chat*/ isInChats(): boolean;
    /**Returns whether the thread is in the inbox.

```
// Log if this thread is in the inbox
var firstThread = GmailApp.getInboxThreads(0,1)[0];
Logger.log('is in the inbox? : ' + firstThread.isInInbox());
```
@return true if the thread is in the inbox*/ isInInbox(): boolean;
    /**Returns true if this thread is in the priority inbox; returns false otherwise.

```
// Log if this thread is in the priority inbox
var firstThread = GmailApp.getPriorityInboxThreads(0,1)[0];
Logger.log("is in priority inbox? " + firstThread.isInPriorityInbox());
```
@return true if the thread is in the priority inbox*/ isInPriorityInbox(): boolean;
    /**Returns whether the thread is marked as spam.

```
// Log if this thread is in the spam folder
var firstThread = GmailApp.getInboxThreads(0,1)[0];
Logger.log('Spam? ' + firstThread.isInSpam());
```
@return Whether this thread is marked as spam.*/ isInSpam(): boolean;
    /**Returns whether the thread is in the trash.

```
// Log if this thread is in the trash
var firstThread = GmailApp.getInboxThreads(0,1)[0];
Logger.log('Trashed? ' + firstThread.isInTrash());
```
@return true if the thread is in the trash*/ isInTrash(): boolean;
    /**Returns whether the thread has any unread messages.

```
// Log if this thread is unread
var firstThread = GmailApp.getInboxThreads(0,1)[0];
Logger.log('Unread? ' + firstThread.isUnread());
```
@return true if there are unread messages*/ isUnread(): boolean;
    /**Marks this thread as important.

```
// Mark first inbox thread as important
var firstThread = GmailApp.getInboxThreads(0,1)[0];
firstThread.markImportant();
```
@return this thread, useful for chaining*/ markImportant(): GmailApp.GmailThread;
    /**Marks this thread as read.

```
// Mark first inbox thread as read
var firstThread = GmailApp.getInboxThreads(0,1)[0];
firstThread.markRead();
```
@return this thread, useful for chaining*/ markRead(): GmailApp.GmailThread;
    /**Marks this thread as unimportant.

```
// Mark first inbox thread as unimportant
var firstThread = GmailApp.getInboxThreads(0,1)[0];
firstThread.markUnimportant();
```
@return this thread, useful for chaining*/ markUnimportant(): GmailApp.GmailThread;
    /**Marks this thread as unread.

```
// Mark first inbox thread as unread
var firstThread = GmailApp.getInboxThreads(0,1)[0];
firstThread.markUnread();
```
@return this thread, useful for chaining*/ markUnread(): GmailApp.GmailThread;
    /**Moves this thread to the archive.

```
// Archive first inbox thread
var firstThread = GmailApp.getInboxThreads(0,1)[0];
firstThread.moveToArchive();
```
@return this thread, useful for chaining*/ moveToArchive(): GmailApp.GmailThread;
    /**Moves this thread to the inbox.

```
// Move first non-inbox thread to inbox
var firstThread = GmailApp.search("-in:inbox")[0];
firstThread.moveToInbox();
```
@return this thread, useful for chaining*/ moveToInbox(): GmailApp.GmailThread;
    /**Moves this thread to spam.

```
// Move first inbox thread to spam
var firstThread = GmailApp.getInboxThreads(0,1)[0];
firstThread.moveToSpam();
```
@return this thread, useful for chaining*/ moveToSpam(): GmailApp.GmailThread;
    /**Moves this thread to the trash.

```
// Move first inbox thread to trash
var firstThread = GmailApp.getInboxThreads(0,1)[0];
firstThread.moveToTrash();
```
@return this thread, useful for chaining*/ moveToTrash(): GmailApp.GmailThread;
    /**Reloads this thread, and associated state from Gmail (useful in case the labels, read state,
etc., have changed).

```
var firstThread = GmailApp.getInboxThreads(0,1)[0];
// ...Do something that may take a while here....
firstThread.refresh(); // Make sure it's up-to-date
// ...Do more stuff with firstThread ...
```
@return this thread, useful for chaining*/ refresh(): GmailApp.GmailThread;
    /**Removes this label from the thread.

```
var myLabel = GmailApp.getUserLabelByName('<your label>');
var threads = myLabel.getThreads();
for (var x in threads) {
  var thread = threads[x];
  thread.removeLabel(myLabel);
}
```
@param label the label to remove from this thread
@return this thread, useful for chaining*/ removeLabel(
      label: GmailApp.GmailLabel,
    ): GmailApp.GmailThread;
    /**Reply to the sender of the last message on this thread using the replyTo address.

Note that the total size of the email (including all headers) may not exceed 20KB.

```
// Respond to author of last email in thread with acknowledgment
var firstThread = GmailApp.getInboxThreads(0,1)[0];
firstThread.reply("Got your message");
```
@param body the body of the email
@return this thread, useful for chaining*/ reply(
      body: string,
    ): GmailApp.GmailThread;
    /**Reply to the sender of the last message on this thread using the replyTo address, with optional
arguments. The email can contain both plain text, and also an HTML body. Note that the total
size of the email (including all headers, but excluding attachments) may not exceed 20KB.

```
// Respond with HTML body text.
var firstThread = GmailApp.getInboxThreads(0,1)[0];
firstThread.reply("incapable of HTML", {
  htmlBody: "some HTML body text",
  noReply: true
});
```
@param body the body of the email
@param options a JavaScript object that specifies advanced parameters, as listed below
@return this thread, useful for chaining*/ reply(
      body: string,
      options: Object,
    ): GmailApp.GmailThread;
    /**Reply to the sender (using the replyTo address), and all recipients of the last message on this
thread.

Note that the total size of the email (including all headers) may not exceed 20KB.

```
// Respond to all with acknowledgment to the first thread in the inbox
var firstThread = GmailApp.getInboxThreads(0,1)[0];
firstThread.replyAll("Got your message");
```
@param body the body of the email
@return this thread, useful for chaining*/ replyAll(
      body: string,
    ): GmailApp.GmailThread;
    /**Reply to the sender (using the `replyTo` address), and all recipients of the last message
on this thread, with optional arguments. The email can contain both plain text, and also an
HTML body. Note that the total size of the email (including all headers, but excluding
attachments) may not exceed 20KB.

```
// Respond with HTML body text.
var firstThread = GmailApp.getInboxThreads(0,1)[0];
firstThread.replyAll("incapable of HTML", {
  htmlBody: "some HTML body text",
  noReply: true
});
```
@param body the body of the email
@param options a JavaScript object that specifies advanced parameters, as listed below
@return this thread, useful for chaining*/ replyAll(
      body: string,
      options: Object,
    ): GmailApp.GmailThread;
  }
  interface GmailMessage {
    /**Creates a draft message replying to the sender of this message using the reply-to address. The
size of the email (including headers) is [quota limited](/apps-script/guides/services/quotas#current_limitations).

```
// Create a draft reply to the original message with an acknowledgment.
var firstThread = GmailApp.getInboxThreads(0,1)[0];
var message = firstThread.getMessages()[0];
message.createDraftReply("Got your message");
```
@param body The body of the email.
@return The newly created draft message.*/ createDraftReply(
      body: string,
    ): GmailApp.GmailDraft;
    /**Creates a draft message replying to the sender of this message using the reply-to address, with
optional arguments.

The email can contain both plain text and an HTML body. The size of the email (including
headers) is [quota
limited](/apps-script/guides/services/quotas#current_limitations).

```
// Create a draft response with an HTML text body.
var firstThread = GmailApp.getInboxThreads(0,1)[0];
var message = firstThread.getMessages()[0];
message.createDraftReply("incapable of HTML", {
  htmlBody: "<b>some HTML body text</b>",
  cc: "another@example.com"
});
```
@param body The body of the email.
@param options A JavaScript object that specifies advanced parameters, as listed below.
@return The newly created draft message.*/ createDraftReply(
      body: string,
      options: Object,
    ): GmailApp.GmailDraft;
    /**Creates a draft message replying to the sender using the reply-to address and all recipients of
this message. The size of the email (including headers) is [quota limited](/apps-script/guides/services/quotas#current_limitations).

```
// Create a draft response to all recipients (except those bcc'd) with an acknowledgment.
var firstThread = GmailApp.getInboxThreads(0,1)[0];
var message = firstThread.getMessages()[0];
message.createDraftReplyAll("Got your message");
```
@param body The body of the email.
@return The newly created draft message.*/ createDraftReplyAll(
      body: string,
    ): GmailApp.GmailDraft;
    /**Creates a draft message replying to the sender of this message using the reply-to address and
all recipients, with optional arguments.

The email can contain both plain text and an HTML body. The size of the email (including
headers) is [quota
limited](/apps-script/guides/services/quotas#current_limitations).

```
// Create a draft response to all recipients (except those bcc'd) using an HTML text body.
var firstThread = GmailApp.getInboxThreads(0,1)[0];
var message = firstThread.getMessages()[0];
message.createDraftReplyAll("incapable of HTML", {
  htmlBody: "<b>some HTML body text</b>",
  cc: "another@example.com"
});
```
@param body The body of the email.
@param options A JavaScript object that specifies advanced parameters, as listed below.
@return The newly created draft message.*/ createDraftReplyAll(
      body: string,
      options: Object,
    ): GmailApp.GmailDraft;
    /**Forwards this message to new recipients. The size of the email (including headers) is [quota limited](/apps-script/guides/services/quotas#current_limitations).

```
// Forward first message of first inbox thread to recipient1 & recipient2, both @example.com
var firstThread = GmailApp.getInboxThreads(0,1)[0];
var message = firstThread.getMessages()[0];
message.forward("recipient1@example.com,recipient2@example.com");
```
@param recipient A comma-separated list of email addresses.
@return This message, useful for chaining.*/ forward(
      recipient: string,
    ): GmailApp.GmailMessage;
    /**Forwards this message to new recipients, with optional arguments.

The email can contain both plain text, and also an HTML body. The size of the email
(including headers) is [quota
limited](/apps-script/guides/services/quotas#current_limitations).

```
var firstThread = GmailApp.getInboxThreads(0,1)[0];
var message = firstThread.getMessages()[0];
message.forward("recipient1@example.com,recipient2@example.com", {
  cc: "myboss@example.com",
  bcc: "mybosses-boss@example.com,vp@example.com"
});
```
@param recipient A comma-separated list of email addresses.
@param options A JavaScript object that specifies advanced parameters, as listed below.
@return This message, useful for chaining.*/ forward(
      recipient: string,
      options: Object,
    ): GmailApp.GmailMessage;
    /**Gets all the attachments for this message.
@return An array of Blob attachments for this message.*/ getAttachments(): GmailApp.GmailAttachment[];
    /**Gets all the attachments for this message.
@param options A JavaScript object that specifies advanced parameters, as listed below.
@return An array of Blob attachments for this message.*/ getAttachments(
      options: Object,
    ): GmailApp.GmailAttachment[];
    /**Gets the comma-separated recipients bcc'd on this message.

This is empty for all received messages, by definition.

```
var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
var message = thread.getMessages()[0]; // Get first message
Logger.log(message.getBcc()); // Log bcc'd addresses
```
@return The comma-separated recipients bcc'd on this message.*/ getBcc(): string;
    /**Gets the HTML content of the body of this message.

```
var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
var message = thread.getMessages()[0]; // Get first message
Logger.log(message.getBody()); // Log contents of the body
```
@return The body content of this message.*/ getBody(): string;
    /**Gets the comma-separated recipients cc'd on this message.

```
var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
var message = thread.getMessages()[0]; // Get first message
Logger.log(message.getCc()); // Log cc'd addresses
```
@return The comma-separated recipients cc'd on this message.*/ getCc(): string;
    /**Gets the date and time of this message.

```
var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
var message = thread.getMessages()[0]; // Get first message
Logger.log(message.getDate()); // Log date and time of the message
```
@return The date and time of this message.*/ getDate(): Date;
    /**Gets the sender of this message.

```
var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
var message = thread.getMessages()[0]; // Get first message
Logger.log(message.getFrom()); // Log from address of the message
```
@return The email address of the message sender.*/ getFrom(): string;
    /**Gets the value of an RFC 2822 header given the header name.

```
var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox.
var message = thread.getMessages()[0];         // Get the first message.
Logger.log(message.getHeader("Message-ID"));   // Logs the Message-ID RFC 2822 header.
```
@param name The name of the RFC header, without the colon separating it from the value.
@return The value of the header, or an empty string if the header doesn't exist in the message.*/ getHeader(
      name: string,
    ): string;
    /**Gets the ID of this message.

```
var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
var message = thread.getMessages()[0]; // Get first message
var id = message.getId();
var messageById = GmailApp.getMessageById(id);
Logger.log(message.getSubject() == messageById.getMessage()); // Always logs true
```
@return The message ID.*/ getId(): string;
    /**Gets the content of the body of this message without HTML formatting. This is more complex than
`getBody()` and takes longer.

```
var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
var message = thread.getMessages()[0]; // Get first message
Logger.log(message.getPlainBody()); // Log contents of the body
```
@return The plain body content of this message.*/ getPlainBody(): string;
    /**Gets the raw content of this message. This is equivalent to "Show Original" in the Gmail UI.
@return The raw content of this message.*/ getRawContent(): string;
    /**Gets the reply-to address of this message (usually the sender).

```
var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
var message = thread.getMessages()[0]; // Get first message
Logger.log(message.getReplyTo()); // Logs reply-to address
```
@return The email address for replies.*/ getReplyTo(): string;
    /**Gets the subject of this message.

```
var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
var message = thread.getMessages()[0]; // Get first message
Logger.log(message.getSubject()); // Log subject line
```
@return The subject of this message.*/ getSubject(): string;
    /**Gets the thread that contains this message.

```
var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
var message = thread.getMessages()[0]; // Get first message
Logger.log(message.getThread().getFirstMessageSubject() ==
           thread.getFirstMessageSubject()); // Always logs true
```
@return The GmailThread that contains this message.*/ getThread(): GmailApp.GmailThread;
    /**Gets the comma-separated recipients of this message.

```
var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
var message = thread.getMessages()[0]; // Get first message
Logger.log(message.getTo()); // Log the recipient of message
```
@return The comma-separated recipients of this message.*/ getTo(): string;
    /**Gets whether this message is a draft.

```
var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
var message = thread.getMessages()[0]; // Get first message
Logger.log("is draft? " + message.isDraft());
```
@return Whether this message is a draft.*/ isDraft(): boolean;
    /**Gets whether this message is a chat.

```
var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
var message = thread.getMessages()[0]; // Get first message
Logger.log("is a chat? " + message.isInChats());
```
@return Whether this message is a chat.*/ isInChats(): boolean;
    /**Gets whether this message is in the inbox.

```
var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
var message = thread.getMessages()[0]; // Get first message
Logger.log("is in inbox? " + message.isInInbox());
```
@return Whether this message is in the inbox.*/ isInInbox(): boolean;
    /**Returns `true` if this message is in the priority inbox; returns `false` otherwise.

```
var thread = GmailApp.getPriorityInboxThreads(0,1)[0]; // Get first thread in priority inbox
var messages = thread.getMessages();
for (var i = 0; i < messages.length; i++) {
  // At least one of the messages is in priority inbox
  Logger.log("is in priority inbox? " + messages[i].isInPriorityInbox());
}
```
@return Whether this message is in the priority inbox.*/ isInPriorityInbox(): boolean;
    /**Gets whether this message is in the trash.

```
var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
var message = thread.getMessages()[0]; // Get first message
Logger.log("is in the trash? " + message.isInTrash());
```
@return Whether this message is in the trash.*/ isInTrash(): boolean;
    /**Gets whether this message is starred.

```
var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
var message = thread.getMessages()[0]; // Get first message
Logger.log("is starred? " + message.isStarred());
```
@return Whether this message is starred.*/ isStarred(): boolean;
    /**Gets whether this message is unread.

```
var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
var message = thread.getMessages()[0]; // Get first message
Logger.log("is unread? " + message.isUnread());
```
@return The unread status of this message.*/ isUnread(): boolean;
    /**Marks the message as read.

```
var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
var message = thread.getMessages()[0]; // Get first message
message.markRead(); // Mark as read
```
@return This GmailMessage, useful for chaining.*/ markRead(): GmailApp.GmailMessage;
    /**Marks the message as unread.

```
var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
var message = thread.getMessages()[0]; // Get first message
message.markUnread(); // Mark as unread
```
@return This GmailMessage, useful for chaining.*/ markUnread(): GmailApp.GmailMessage;
    /**Moves the message to the trash.

```
var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
var message = thread.getMessages()[0]; // Get first message
message.moveToTrash(); // Move message to trash
```
@return This GmailMessage, useful for chaining.*/ moveToTrash(): GmailApp.GmailMessage;
    /**Reloads this message and associated state from Gmail (useful in case the labels, read state,
etc., have changed).

```
var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
var message = thread.getMessages()[0]; // Get first message
// .. Do bunch of stuff here
message.refresh(); // Make sure it's up to date
// Do more stuff to message
```
@return This message for chaining.*/ refresh(): GmailApp.GmailMessage;
    /**Replies to the sender of this message using the reply-to address. The size of the email
(including headers) is [quota
limited](/apps-script/guides/services/quotas#current_limitations).

```
// Respond to author of message with acknowledgment
var firstThread = GmailApp.getInboxThreads(0,1)[0];
var message = firstThread.getMessages()[0];
message.reply("Got your message");
```
@param body The body of the email.
@return This message, useful for chaining.*/ reply(
      body: string,
    ): GmailApp.GmailMessage;
    /**Replies to the sender of this message using the reply-to address, with optional arguments.

The email can contain both plain text, and also an HTML body. The size of the email
(including headers) is [quota
limited](/apps-script/guides/services/quotas#current_limitations).

```
// Respond with HTML body text
var firstThread = GmailApp.getInboxThreads(0,1)[0];
var message = firstThread.getMessages()[0];
message.reply("incapable of HTML", {
  htmlBody: "<b>some HTML body text</b>",
  noReply: true
});
```
@param body The body of the email.
@param options A JavaScript object that specifies advanced parameters, as listed below.
@return This message, useful for chaining.*/ reply(
      body: string,
      options: Object,
    ): GmailApp.GmailMessage;
    /**Replies to the sender using the reply-to address and all recipients of this message. The size
of the email (including headers) is [quota limited](/apps-script/guides/services/quotas#current_limitations).

```
// Respond to all recipients (except bcc'd) of last email in thread with acknowledgment
var firstThread = GmailApp.getInboxThreads(0,1)[0];
var message = firstThread.getMessages()[0];
message.replyAll("Got your message");
```
@param body The body of the email.
@return This message,useful for chaining.*/ replyAll(
      body: string,
    ): GmailApp.GmailMessage;
    /**Replies to the sender of this message using the reply-to address and all recipients, with
optional arguments.

The email can contain both plain text, and also an HTML body. The size of the email
(including headers) is [quota
limited](/apps-script/guides/services/quotas#current_limitations).

```
// Respond with HTML body text
var firstThread = GmailApp.getInboxThreads(0,1)[0];
var message = firstThread.getMessages()[0];
messageThread.replyAll("incapable of HTML", {
  htmlBody: "<b>some HTML body text</b>",
  noReply: true
});
```
@param body The body of the email.
@param options A JavaScript object that specifies advanced parameters, as listed below.
@return This message, useful for chaining.*/ replyAll(
      body: string,
      options: Object,
    ): GmailApp.GmailMessage;
    /**Stars the message.

```
var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
var message = thread.getMessages()[0]; // Get first message
message.star(); // Star the message
```
@return This GmailMessage, useful for chaining.*/ star(): GmailApp.GmailMessage;
    /**Unstars the message.

```
var thread = GmailApp.getInboxThreads(0,1)[0]; // Get first thread in inbox
var message = thread.getMessages()[0]; // Get first message
message.unstar(); // Unstar the message
```
@return This GmailMessage, useful for chaining.*/ unstar(): GmailApp.GmailMessage;
  }
  interface GmailLabel {
    /**Adds this label to the given thread and forces the thread to refresh ([`GmailThread.refresh()`](https://developers.google.com/apps-script/reference/gmail/gmail-thread.html#refresh())).

```
// label the first thread in the inbox with the label MyLabel
var label = GmailApp.getUserLabelByName("MyLabel");
var firstThread = GmailApp.getInboxThreads(0,1)[0];
label.addToThread(firstThread);
```
@param thread The thread to be labeled.
@return This label, for chaining.*/ addToThread(
      thread: GmailApp.GmailThread,
    ): GmailApp.GmailLabel;
    /**Adds this label to the given threads and forces the threads to refresh. You can add labels for
up to 100 threads per batch.

```
// label the first three threads in the inbox with the label MyLabel
var label = GmailApp.getUserLabelByName("MyLabel");
var threads = GmailApp.getInboxThreads(0,3);
label.addToThreads(threads);
```
@param threads An array of threads to be labeled.
@return This label, for chaining.*/ addToThreads(
      threads: GmailApp.GmailThread[],
    ): GmailApp.GmailLabel;
    /**Deletes this label.

```
var label = GmailApp.getUserLabelByName("MyLabel");
label.deleteLabel();
```*/ deleteLabel(): void;
    /**Gets the name of this label.

```
var label = GmailApp.getUserLabelByName("MyLabel");
Logger.log(label.getName()); //logs MyLabel
```
@return The name of the label.*/ getName(): string;
    /**Gets the threads that are marked with this label.

This calls fail when the size of all threads is too large for the system to handle. Where
the thread size is unknown, and potentially very large, please use [`getThreads(start, max)`](https://developers.google.com/apps-script/reference/gmail/gmail-label.html#getThreads(Integer,Integer)) and specify ranges of the threads to retrieve in each call.

```
// Log the subject lines of the threads labeled with MyLabel
var label = GmailApp.getUserLabelByName("MyLabel");
var threads = label.getThreads();
for (var i = 0; i < threads.length; i++) {
  Logger.log(threads[i].getFirstMessageSubject());
}
```
@return An array of threads marked with this label.*/ getThreads(): GmailApp.GmailThread[];
    /**Gets a range of threads marked with this label.

```
// log the subject lines of up to the first 30 threads with the label MyLabel
var label = GmailApp.getUserLabelByName("MyLabel");
var threads = label.getThreads(0, 30);
for (var i = 0; i < threads.length; i++) {
  Logger.log(threads[i].getFirstMessageSubject());
}
```
@param start The index of the starting thread.
@param max The maximum number of threads to return.
@return An array of threads marked with this label.*/ getThreads(
      start: Integer,
      max: Integer,
    ): GmailApp.GmailThread[];
    /**Gets the number of unread threads tagged with this label.

```
// log the number of unread threads labeled with MyLabel
var label = GmailApp.getUserLabelByName("MyLabel");
Logger.log(label.getUnreadCount());
```
@return The number of unread labeled threads.*/ getUnreadCount(): Integer;
    /**Removes this label from the given thread and forces the thread to refresh.

```
// remove the label MyLabel from the first thread in the inbox
var label = GmailApp.getUserLabelByName("MyLabel");
var firstThread = GmailApp.getInboxThreads(0,1)[0];
label.removeFromThread(firstThread);
```
@param thread The thread be unlabeled.
@return This label, for chaining.*/ removeFromThread(
      thread: GmailApp.GmailThread,
    ): GmailApp.GmailLabel;
    /**Removes this label from the given threads and forces the threads to refresh. You can remove
labels for up to 100 threads per batch.

```
// remove the label MyLabel from the first three threads in the inbox
var label = GmailApp.getUserLabelByName("MyLabel");
var threads = GmailApp.getInboxThreads(0,3);
label.removeFromThreads(threads);
```
@param threads An array of threads to be unlabeled.
@return This label, for chaining.*/ removeFromThreads(
      threads: GmailApp.GmailThread[],
    ): GmailApp.GmailLabel;
  }
  interface GmailDraft {
    /**Deletes this draft message.

```
var draft = GmailApp.getDrafts()[0]; // The first draft message in the drafts folder
draft.deleteDraft();
draft.getMessage(); // Throws exception.
```*/ deleteDraft(): void;
    /**Gets the ID of this draft message.

```
var draft = GmailApp.getDrafts()[0]; // The first draft message in the drafts folder
var draftId = draft.getId();
var draftById = GmailApp.getDraft(draftId);
Logger.log(draft.getMessage().getSubject() == draftById.getMessage().getSubject());
```
@return the draft ID*/ getId(): string;
    /**Returns a GmailMessage representing this draft.

```
var draft = GmailApp.getDrafts()[0]; // The first draft message in the drafts folder
var message = draft.getMessage();
Logger.log(message.getSubject());
```
@return the message that represents the contents of this draft*/ getMessage(): GmailApp.GmailMessage;
    /**Returns the ID of the [`GmailMessage`](https://developers.google.com/apps-script/reference/gmail/gmail-message.html) representing this draft.

```
var draft = GmailApp.getDrafts()[0]; // The first draft message in the drafts folder
var messageId = draft.getMessageId();
Logger.log(messageId == draft.getMessage().getId());
```
@return the message ID*/ getMessageId(): string;
    /**Sends this draft email message. The size of the email (including headers) is [quota limited](/apps-script/guides/services/quotas#current_limitations).

```
var draft = GmailApp.getDrafts()[0]; // The first draft message in the drafts folder
var msg = draft.send(); // Send it
Logger.log(msg.getDate()); // Should be approximately the current timestamp
```
@return the newly sent message*/ send(): GmailApp.GmailMessage;
    /**Replaces the contents of this draft message. The size of the email (including headers) is [quota limited](/apps-script/guides/services/quotas#current_limitations).

```
// The code below will update a draft email with the current date and time.
var draft = GmailApp.getDrafts()[0]; // The first draft message in the drafts folder
var now = new Date();
draft.update("mike@example.com", "current time", "The time is: " + now.toString());
```
@param recipient comma separated list of email addresses
@param subject subject of the email (250 characters maximum)
@param body body of the email
@return the newly updated draft*/ update(
      recipient: string,
      subject: string,
      body: string,
    ): GmailApp.GmailDraft;
    /**Replaces the contents of this draft message using optional arguments. The email can contain
plain text or an HTML body. The size of the email (including headers) is [quota limited](/apps-script/guides/services/quotas#current_limitations).

```
// Update a draft email with a file from Google Drive attached as a PDF.
var draft = GmailApp.getDrafts()[0]; // The first draft message in the drafts folder
var file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
draft.update('mike@example.com', 'Attachment example', 'Please see attached file.', {
    attachments: [file.getAs(MimeType.PDF)],
    name: 'Automatic Emailer Script'
});
```
@param recipient comma separated list of email addresses
@param subject subject of the email (250 characters maximum)
@param body body of the email
@param options a JavaScript object that specifies advanced parameters, as listed below
@return the newly updated draft*/ update(
      recipient: string,
      subject: string,
      body: string,
      options: Object,
    ): GmailApp.GmailDraft;
  }
  interface GmailAttachment {
    /**Returns a copy of this blob.
@return The new copy.*/ copyBlob(): Blob;
    /**Gets all the blobs that are contained within this (possibly composite) blob.
@deprecated
@return The blobs contained within the blob.*/ getAllBlobs(): Blob[];
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
    /**Gets the data stored in this blob.
@return The stored bytes.*/ getBytes(): Byte[];
    /**Gets the content type of the bytes in this blob.
@return The content type of this data, if known, or `null`.*/ getContentType(): string;
    /**Gets the data of this blob as a String with UTF-8 encoding.
@return The data as a string.*/ getDataAsString(): string;
    /**Gets the data of this blob as a string with the specified encoding.
@param charset The charset to use in encoding the data in this blob as a string.
@return The data as a string.*/ getDataAsString(charset: string): string;
    /**Gets the SHA1 content hash for this attachment. This method does not count against the Gmail
read quota.
@return The SHA1 content hash, as a string.*/ getHash(): string;
    /**Gets the name of this blob.
@return The name of this data, if known, or `null`.*/ getName(): string;
    /**Gets the size of this attachment. This method is faster than calling [`getBytes()`](https://developers.google.com/apps-script/reference/gmail/gmail-attachment.html#getBytes())`.length` and does not count against the Gmail read quota.
@return The size of the attachment, in bytes.*/ getSize(): Integer;
    /**Returns whether this blob is a Google Workspace file (Sheets, Docs, etc.).
@return `true` if this blob is a Google Workspace file; `false` if not.*/ isGoogleType(): boolean;
    /**Sets the data stored in this blob.
@param data The new data.
@return This blob, for chaining.*/ setBytes(data: Byte[]): Blob;
    /**Sets the content type of the bytes in this blob.
@param contentType The new contentType.
@return This blob, for chaining.*/ setContentType(contentType: string): Blob;
    /**Sets the content type of the bytes in this blob based on the file extension. The contentType is
`null` if it cannot be guessed from its extension.
@return This blob, for chaining.*/ setContentTypeFromExtension(): Blob;
    /**Sets the data of this blob from a string with UTF-8 encoding.
@param string The string data.
@return This blob, for chaining.*/ setDataFromString(string: string): Blob;
    /**Sets the data of this blob from a string with the specified encoding.
@param string The string data.
@param charset The charset to use in interpreting the string as bytes.
@return This blob, for chaining.*/ setDataFromString(
      string: string,
      charset: string,
    ): Blob;
    /**Sets the name of this blob.
@param name The new name.
@return This blob, for chaining.*/ setName(name: string): Blob;
  }
}
const GmailApp: GmailApp;
