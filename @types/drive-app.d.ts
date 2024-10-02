interface DriveApp{
/**An enum representing classes of users who can access a file or folder, besides any individual
users who have been explicitly given access.*/Access:DriveApp._Access;
/**An enum representing the permissions granted to users who can access a file or folder, besides
any individual users who have been explicitly given access.*/Permission:DriveApp._Permission;
/**Adds the given file to the root of the user's Drive. This method does not move the file out of its
existing parent folder; a file can have more than one parent simultaneously.
@deprecated
@param child The child file to add.
@return The new parent of the file added as a child.*/addFile(child:DriveApp.File):DriveApp.Folder;
/**Adds the given folder to the root of the user's Drive. This method does not move the folder out of
its existing parent folder; a folder can have more than one parent simultaneously.
@deprecated
@param child The child folder to add.
@return The new parent of the folder added as a child.*/addFolder(child:DriveApp.Folder):DriveApp.Folder;
/**Resumes a file iteration using a continuation token from a previous iterator. This method is
useful if processing an iterator in one execution exceeds the maximum execution time.
Continuation tokens are generally valid for one week.

```
// Continues getting a list of all 'Untitled document' files in the user's Drive.
// Creates a file iterator named 'previousIterator'.
const previousIterator = DriveApp.getFilesByName('Untitled document');

// Gets continuation token from the previous file iterator.
const continuationToken = previousIterator.getContinuationToken();

// Creates a new iterator using the continuation token from the previous file iterator.
const newIterator = DriveApp.continueFileIterator(continuationToken);

// Resumes the file iteration using a continuation token from 'firstIterator' and
// logs the file name.
if (newIterator.hasNext()) {
  const file = newIterator.next();
  console.log(file.getName());
}
```
@param continuationToken A continuation token from a previous file iterator.
@return A collection of files that remained in a previous iterator when the continuation token
    was generated.*/continueFileIterator(continuationToken:string):DriveApp.FileIterator;
/**Resumes a folder iteration using a continuation token from a previous iterator. This method is
useful if processing an iterator in one execution exceeds the maximum execution time.
Continuation tokens are generally valid for one week.

```
// Continues getting a list of all folders in user's Drive.
// Creates a folder iterator named 'previousIterator'.
const previousIterator = DriveApp.getFolders();

// Gets continuation token from the previous folder iterator.
const continuationToken = previousIterator.getContinuationToken();

// Creates a new iterator using the continuation token from the previous folder iterator.
const newIterator = DriveApp.continueFolderIterator(continuationToken);

// Resumes the folder iteration using a continuation token from the previous iterator and logs
// the folder name.
if (newIterator.hasNext()) {
  const folder = newIterator.next();
  console.log(folder.getName());
}
```
@param continuationToken A continuation token from a previous folder iterator.
@return A collection of folders that remained in a previous iterator when the continuation
    token was generated.*/continueFolderIterator(continuationToken:string):DriveApp.FolderIterator;
/**Creates a file in the root of the user's Drive from a given `Blob` of arbitrary data.

```
// Create an image file in Google Drive using the Maps service.
var blob = Maps.newStaticMap().setCenter('76 9th Avenue, New York NY').getBlob();
DriveApp.createFile(blob);
```
@param blob The data for the new file.
@return The new file.*/createFile(blob:BlobSource):DriveApp.File;
/**Creates a text file in the root of the user's Drive with the given name and contents. Throws an
exception if `content` is larger than 50 MB.

```
// Create a text file with the content "Hello, world!"
DriveApp.createFile('New Text File', 'Hello, world!');
```
@param name The name of the new file.
@param content The content for the new file.
@return The new file.*/createFile(name:string,content:string):DriveApp.File;
/**Creates a file in the root of the user's Drive with the given name, contents, and MIME type. Throws
an exception if `content` is larger than 10MB.

```
// Create an HTML file with the content "Hello, world!"
DriveApp.createFile('New HTML File', '<b>Hello, world!</b>', MimeType.HTML);
```
@param name The name of the new file.
@param content The content for the new file.
@param mimeType The MIME type of the new file.
@return The new file.*/createFile(name:string,content:string,mimeType:string):DriveApp.File;
/**Creates a folder in the root of the user's Drive with the given name.
@param name The name of the new folder.
@return The new folder.*/createFolder(name:string):DriveApp.Folder;
/**Creates a shortcut to the provided Drive item ID, and returns it.
@param targetId The file ID of the target file or folder.
@return The new shortcut.*/createShortcut(targetId:string):DriveApp.File;
/**Creates a shortcut to the provided Drive item ID and resource key, and returns it. A resource
key is an additional parameter that needs to be passed to access the target file or folder that
has been shared using a link.

```
// Creates shortcuts for all folders in the user's drive that have a specific name.
// TODO(developer): Replace 'Test-Folder' with a valid folder name in your drive.
const folders = DriveApp.getFoldersByName('Test-Folder');

// Iterates through all folders named 'Test-Folder'.
while (folders.hasNext()) {
  const folder = folders.next();

  // Creates a shortcut to the provided Drive item ID and resource key, and returns it.
  DriveApp.createShortcutForTargetIdAndResourceKey(folder.getId(), folder.getResourceKey());
}
```
@param targetId The ID of the target file or folder.
@param targetResourceKey The resource key of the target file or folder.
@return The new shortcut.*/createShortcutForTargetIdAndResourceKey(targetId:string,targetResourceKey:string):DriveApp.File;
/**Enables or disables enforceSingleParent behavior for all calls affecting item parents.

See the [ Simplifying Google Drive’s folder structure and sharing models](https://cloud.google.com/blog/products/g-suite/simplifying-google-drives-folder-structure-and-sharing-models) blog for
more details.

```
// Enables enforceSingleParent behavior for all calls affecting item parents.
DriveApp.enforceSingleParent(true);
```
@param value The new state of the enforceSingleParent flag.*/enforceSingleParent(value:boolean):void;
/**Gets the file with the given ID. Throws a scripting exception if the file does not exist or the
user does not have permission to access it.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace 'Test' with your file name.
const files = DriveApp.getFilesByName('Test');

if (files.hasNext()) {
  // Gets the ID of each file in the list.
  const fileId = files.next().getId();

  // Gets the file name using its ID and logs it to the console.
  console.log(DriveApp.getFileById(fileId).getName());
}
```
@param id The ID of the file.
@return The file with the given ID.*/getFileById(id:string):DriveApp.File;
/**Gets the file with the given ID and resource key. Resource keys are an additional parameter
which need to be passed to access files that have been shared using a link.

Throws a scripting exception if the file doesn't exist or the user doesn't have permission
to access it.

```
// Gets a list of all files in Drive with the given name.
// TODO(developer): Replace 'Test' with your file name.
const files = DriveApp.getFilesByName('Test');
if (files.hasNext()) {

  // Gets the first file in the list.
  const file = files.next();

  // Gets the ID and resource key.
  const key = file.getResourceKey();
  const id = file.getId();

  // Logs the file name to the console using its ID and resource key.
  console.log(DriveApp.getFileByIdAndResourceKey(id, key).getName());
}
```
@param id The ID of the file.
@param resourceKey The resource key of the folder.
@return The file with the given ID.*/getFileByIdAndResourceKey(id:string,resourceKey:string):DriveApp.File;
/**Gets a collection of all files in the user's Drive.
@return A collection of all files in the user's Drive.*/getFiles():DriveApp.FileIterator;
/**Gets a collection of all files in the user's Drive that have the given name.
@param name The name of the files to find.
@return A collection of all files in the user's Drive that have the given name.*/getFilesByName(name:string):DriveApp.FileIterator;
/**Gets a collection of all files in the user's Drive that have the given MIME type.
@param mimeType The MIME type of the files to find.
@return A collection of all files in the user's Drive that have the given MIME
    type.*/getFilesByType(mimeType:string):DriveApp.FileIterator;
/**Gets the folder with the given ID. Throws a scripting exception if the folder does not exist or
the user does not have permission to access it.
@param id The ID of the folder.
@return The folder with the given ID.*/getFolderById(id:string):DriveApp.Folder;
/**Gets the folder with the given ID and resource key. Resource keys are an additional parameter
which need to be passed to access folders that have been shared using a link.

Throws a scripting exception if the folder doesn't exist or the user doesn't have permission
to access it.
@param id The ID of the folder.
@param resourceKey The resource key of the folder.
@return The folder with the given ID.*/getFolderByIdAndResourceKey(id:string,resourceKey:string):DriveApp.Folder;
/**Gets a collection of all folders in the user's Drive.
@return A collection of all folders in the user's Drive.*/getFolders():DriveApp.FolderIterator;
/**Gets a collection of all folders in the user's Drive that have the given name.
@param name The name of the folders to find.
@return A collection of all folders in the user's Drive that have the given name.*/getFoldersByName(name:string):DriveApp.FolderIterator;
/**Gets the folder at the root of the user's Drive.

```
// Gets the user's My Drive folder and logs its name to the console.
console.log(DriveApp.getRootFolder().getName());

// Logs the Drive owner's name to the console.
console.log(DriveApp.getRootFolder().getOwner().getName());
```
@return The root folder of the user's Drive.*/getRootFolder():DriveApp.Folder;
/**Gets the number of bytes the user is allowed to store in Drive.

```
// Gets the number of bytes the user can store in Drive and logs it to the console.
console.log(DriveApp.getStorageLimit());
```
@return The number of bytes the user is allowed to store in Drive.*/getStorageLimit():Integer;
/**Gets the number of bytes the user is currently storing in Drive.

```
// Gets the number of bytes the user is currently storing in Drive and logs it to the console.
console.log(DriveApp.getStorageUsed());
```
@return The number of bytes the user is currently storing in Drive.*/getStorageUsed():Integer;
/**Gets a collection of all the files in the trash of the user's Drive.

```
// Gets a list of all the files in the trash of the user's Drive.
const trashFiles = DriveApp.getTrashedFiles();

// Logs the trash file names to the console.
while (trashFiles.hasNext()) {
  const file = trashFiles.next();
  console.log(file.getName());
}
```
@return A collection of files in the trash.*/getTrashedFiles():DriveApp.FileIterator;
/**Gets a collection of all the folders in the trash of the user's Drive.

```
// Gets a collection of all the folders in the trash of the user's Drive.
const trashFolders = DriveApp.getTrashedFolders();

// Logs the trash folder names to the console.
while (trashFolders.hasNext()) {
  const folder = trashFolders.next();
  console.log(folder.getName());
}
```
@return A collection of folders in the trash.*/getTrashedFolders():DriveApp.FolderIterator;
/**Removes the given file from the root of the user's Drive. This method does not delete the file, but
if a file is removed from all of its parents, it cannot be seen in Drive except by searching
for it or using the "All items" view.
@deprecated
@param child The child file to remove.
@return The previous parent of the child.*/removeFile(child:DriveApp.File):DriveApp.Folder;
/**Removes the given folder from the root of the user's Drive. This method does not delete the folder
or its contents, but if a folder is removed from all of its parents, it cannot be seen in Drive
except by searching for it or using the "All items" view.
@deprecated
@param child The child folder to remove.
@return The previous parent of the child.*/removeFolder(child:DriveApp.Folder):DriveApp.Folder;
/**Gets a collection of all files in the user's Drive that match the given search
criteria. The search criteria are detailed in the [Google Drive SDK documentation](/drive/api/v2/ref-search-terms). Note that the Drive
service uses v2 of the Drive API and some query fields differ from v3. Review the [field
differences between v2 and v3](/drive/api/guides/v2-to-v3-reference#resource_field_differences_between_v2_and_v3).

The `params` argument is a query string that can contain string values, so take care
to escape quotation marks correctly (for example `"title contains 'Gulliver\\'s
Travels'"` or `'title contains "Gulliver\'s Travels"'`).

```
// Logs the name of every file in the user's Drive that modified after February 28,
// 2022 whose name contains "untitled.""
var files = DriveApp.searchFiles(
    'modifiedDate > "2022-02-28" and title contains "untitled"');
while (files.hasNext()) {
  var file = files.next();
  console.log(file.getName());
}
```
@param params The search criteria, as detailed in the [Google Drive SDK documentation](/drive/api/v2/ref-search-terms).
@return A collection of all files in the user's Drive that match the search
    criteria.*/searchFiles(params:string):DriveApp.FileIterator;
/**Gets a collection of all folders in the user's Drive that match the given search
criteria. The search criteria are detailed in the [Google Drive SDK documentation](/drive/api/v2/ref-search-terms). Note that the Drive
service uses v2 of the Drive API and some query fields differ from v3. Review the [field
differences between v2 and v3](/drive/api/guides/v2-to-v3-reference#resource_field_differences_between_v2_and_v3).

The `params` argument is a query string that can contain string values, so take care
to escape quotation marks correctly (for example `"title contains 'Gulliver\\'s
Travels'"` or `'title contains "Gulliver\'s Travels"'`).

```
// Logs the name of every folder in the user's Drive that you own and is starred.
var folders = DriveApp.searchFolders('starred = true and "me" in owners');
while (folders.hasNext()) {
  var folder = folders.next();
  console.log(folder.getName());
}
```
@param params The search criteria, as detailed in the [Google Drive SDK documentation](/drive/api/v2/ref-search-terms).
@return A collection of all folders in the user's Drive that match the search
    criteria.*/searchFolders(params:string):DriveApp.FolderIterator;}module DriveApp{interface User{
/**Gets the domain name associated with the user's account.

```
// Log the domain names associated with all users who have edit access to a file.
var file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
var editors = file.getEditors();
for (var i = 0; i < editors.length; i++) {
  Logger.log(editors[i].getDomain());
}
```
@return the domain name associated with the user's account*/getDomain():string;
/**Gets the user's email address. The user's email address is only available if the user has
chosen to share the address from the Google+ account settings page, or if the user belongs to
the same domain as the user running the script and the domain administrator has allowed all
users within the domain to see other users' email addresses.

```
// Log the email address of all users who have edit access to a file.
var file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
var editors = file.getEditors();
for (var i = 0; i < editors.length; i++) {
  Logger.log(editors[i].getEmail());
}
```
@return the user's email's address, or a blank string if the email address is not available*/getEmail():string;
/**Gets the user's name. This method returns `null` if the user's name is not available.

```
// Log the names of all users who have edit access to a file.
var file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
var editors = file.getEditors();
for (var i = 0; i < editors.length; i++) {
  Logger.log(editors[i].getName());
}
```
@return the user's name, or `null` if the name is not available*/getName():string;
/**Gets the URL for the user's photo. This method returns `null` if the user's photo is not
available.

```
// Log the URLs for the photos of all users who have edit access to a file.
var file = DriveApp.getFileById('1234567890abcdefghijklmnopqrstuvwxyz');
var editors = file.getEditors();
for (var i = 0; i < editors.length; i++) {
  Logger.log(editors[i].getPhotoUrl());
}
```
@return the URL for the user's photo, or `null` if the photo is not available*/getPhotoUrl():string;
/**Gets the user's email address.

```
// Log the email address of the person running the script.
Logger.log(Session.getActiveUser().getUserLoginId());
```
@deprecated
@return The user's email's address.*/getUserLoginId():string;}interface Permission{}interface _Permission{
/**Users who can access the file or folder are able only to view it, copy it, or comment on it.
Passing this value to [`File.setSharing(accessType, permissionType)`](https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)) throws an exception if
the type of file does not support it.*/COMMENT:Permission;
/**Users who can access the file or folder are able to edit it. Unless [`File.setShareableByEditors(shareable)`](https://developers.google.com/apps-script/reference/drive/file.html#setShareableByEditors(Boolean)) is set to `false`, users can also change the sharing
settings. Passing this value to [`File.setSharing(accessType, permissionType)`](https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)) throws an
exception if the type of file does not support it.*/EDIT:Permission;
/**Users who can edit, trash, and move content within a shared drive. This value can be returned,
but passing it to [`File.setSharing(accessType, permissionType)`](https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)) throws an exception.*/FILE_ORGANIZER:Permission;
/**The user does not have any permissions for the file or folder. This value can be returned, but
passing it to [`File.setSharing(accessType, permissionType)`](https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)) throws an exception unless it
is set in combination with [`Access.ANYONE`](https://developers.google.com/apps-script/reference/drive/access.html#ANYONE).*/NONE:Permission;
/**Users who can organize files and folders within a shared drive. This value can be returned, but
passing it to [`File.setSharing(accessType, permissionType)`](https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)) throws an exception.*/ORGANIZER:Permission;
/**The user owns the file or folder. This value can be returned, but passing it to [`File.setSharing(accessType, permissionType)`](https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)) throws an exception.*/OWNER:Permission;
/**Users who can access the file or folder are able only to view it or copy it. Passing this value
to [`File.setSharing(accessType, permissionType)`](https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)) throws an exception if the type of file
does not support it.*/VIEW:Permission;}interface FolderIterator{
/**Gets a token that can be used to resume this iteration at a later time. This method is useful
if processing an iterator in one execution would exceed the maximum execution time.
Continuation tokens are generally valid for one week.
@return a continuation token that can be used to resume this iteration with the items that
    remained in the iterator when the token was generated*/getContinuationToken():string;
/**Determines whether calling [`next()`](https://developers.google.com/apps-script/reference/drive/folder-iterator.html#next()) will return an item.
@return `true` if [`next()`](https://developers.google.com/apps-script/reference/drive/folder-iterator.html#next()) will return an item; `false` if not*/hasNext():boolean;
/**Gets the next item in the collection of files or folders. Throws an exception if no items
remain.
@return the next item in the collection*/next():DriveApp.Folder;}interface Folder{
/**Adds the given user to the list of editors for the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html). If the user was already
on the list of viewers, this method promotes the user out of the list of viewers.
@param emailAddress The email address of the user to add.
@return This [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html), for chaining.*/addEditor(emailAddress:string):DriveApp.Folder;
/**Adds the given user to the list of editors for the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html). If the user was already
on the list of viewers, this method promotes the user out of the list of viewers.
@param user A representation of the user to add.
@return This [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html), for chaining.*/addEditor(user:User):DriveApp.Folder;
/**Adds the given array of users to the list of editors for the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html). If any of the
users were already on the list of viewers, this method promotes them out of the list of
viewers.
@param emailAddresses An array of email addresses of the users to add.
@return This [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html), for chaining.*/addEditors(emailAddresses:string[]):DriveApp.Folder;
/**Adds the given file to the current folder. This method does not move the file out of its
existing parent folder; a file can have more than one parent simultaneously.
@deprecated
@param child The child file to add.
@return The new parent of the file added as a child.*/addFile(child:DriveApp.File):DriveApp.Folder;
/**Adds the given folder to the current folder. This method does not move the folder out of
its existing parent folder; a folder can have more than one parent simultaneously.
@deprecated
@param child The child folder to add.
@return The new parent of the folder added as a child.*/addFolder(child:DriveApp.Folder):DriveApp.Folder;
/**Adds the given user to the list of viewers for the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html). If the user was already
on the list of editors, this method has no effect.
@param emailAddress The email address of the user to add.
@return This [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html), for chaining.*/addViewer(emailAddress:string):DriveApp.Folder;
/**Adds the given user to the list of viewers for the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html). If the user was already
on the list of editors, this method has no effect.
@param user A representation of the user to add.
@return This [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html), for chaining.*/addViewer(user:User):DriveApp.Folder;
/**Adds the given array of users to the list of viewers for the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html). If any of the
users were already on the list of editors, this method has no effect for them.
@param emailAddresses An array of email addresses of the users to add.
@return This [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html), for chaining.*/addViewers(emailAddresses:string[]):DriveApp.Folder;
/**Creates a file in the current folder from a given `Blob` of arbitrary data.

```
// Create an image file in Google Drive using the Maps service.
var blob = Maps.newStaticMap().setCenter('76 9th Avenue, New York NY').getBlob();
DriveApp.getRootFolder().createFile(blob);
```
@param blob The data for the new file.
@return The new file.*/createFile(blob:BlobSource):DriveApp.File;
/**Creates a text file in the current folder with the given name and contents. Throws an
exception if `content` is larger than 50 MB.

```
// Create a text file with the content "Hello, world!"
DriveApp.getRootFolder().createFile('New Text File', 'Hello, world!');
```
@param name The name of the new file.
@param content The content for the new file.
@return The new file.*/createFile(name:string,content:string):DriveApp.File;
/**Creates a file in the current folder with the given name, contents, and MIME type. Throws
an exception if `content` is larger than 10MB.

```
// Create an HTML file with the content "Hello, world!"
DriveApp.getRootFolder().createFile('New HTML File', '<b>Hello, world!</b>', MimeType.HTML);
```
@param name The name of the new file.
@param content The content for the new file.
@param mimeType The MIME type of the new file.
@return The new file.*/createFile(name:string,content:string,mimeType:string):DriveApp.File;
/**Creates a folder in the current folder with the given name.
@param name The name of the new folder.
@return The new folder.*/createFolder(name:string):DriveApp.Folder;
/**Creates a shortcut to the provided Drive item ID, and returns it.
@param targetId The file ID of the target file or folder.
@return The new shortcut.*/createShortcut(targetId:string):DriveApp.File;
/**Creates a shortcut to the provided Drive item ID and resource key, and returns it. A resource
key is an additional parameter that needs to be passed to access the target file or folder that
has been shared using a link.

```
// Creates shortcuts for all folders in the user's drive that have a specific name.
// TODO(developer): Replace 'Test-Folder' with a valid folder name in your drive.
const folders = DriveApp.getFoldersByName('Test-Folder');

// Iterates through all folders named 'Test-Folder'.
while (folders.hasNext()) {
  const folder = folders.next();

  // Creates a shortcut to the provided Drive item ID and resource key, and returns it.
  DriveApp.createShortcutForTargetIdAndResourceKey(folder.getId(), folder.getResourceKey());
}
```
@param targetId The ID of the target file or folder.
@param targetResourceKey The resource key of the target file or folder.
@return The new shortcut.*/createShortcutForTargetIdAndResourceKey(targetId:string,targetResourceKey:string):DriveApp.File;
/**Gets the permission granted to the given user.
@param email the email address of the user whose permissions should be checked
@return the permissions granted to the user*/getAccess(email:string):DriveApp.Permission;
/**Gets the permission granted to the given user.
@param user a representation of the user whose permissions should be checked
@return the permissions granted to the user*/getAccess(user:User):DriveApp.Permission;
/**Gets the date the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) was created.
@return the date the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) was created*/getDateCreated():Date;
/**Gets the description for the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html).
@return the description for the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html)*/getDescription():string;
/**Gets the list of editors for this [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html). If the user who executes the script
does not have edit access to the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html), this method returns an empty array.

```
// Gets a folder by its ID.
// TODO(developer): Replace the folder ID with your own.
const folder = DriveApp.getFolderById('1234567890abcdefghijklmnopqrstuvwxyz');

// Gets the list of editors and logs their names to the console.
const editors = folder.getEditors();
for (editor of editors) {
  console.log(editor.getName());
}
```
@return The list of editors for this [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) if the user has edit access or an
    empty array otherwise.*/getEditors():DriveApp.User[];
/**Gets a collection of all files that are children of the current folder.
@return A collection of all files that are children of the current folder.*/getFiles():DriveApp.FileIterator;
/**Gets a collection of all files that are children of the current folder and have the given name.
@param name The name of the files to find.
@return A collection of all files that are children of the current folder and have the given name.*/getFilesByName(name:string):DriveApp.FileIterator;
/**Gets a collection of all files that are children of the current folder and have the given MIME type.
@param mimeType The MIME type of the files to find.
@return A collection of all files that are children of the current folder and have the given MIME
    type.*/getFilesByType(mimeType:string):DriveApp.FileIterator;
/**Gets a collection of all folders that are children of the current folder.
@return A collection of all folders that are children of the current folder.*/getFolders():DriveApp.FolderIterator;
/**Gets a collection of all folders that are children of the current folder and have the given name.
@param name The name of the folders to find.
@return A collection of all folders that are children of the current folder and have the given name.*/getFoldersByName(name:string):DriveApp.FolderIterator;
/**Gets the ID of the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html).
@return the ID of the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html)*/getId():string;
/**Gets the date the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) was last updated.
@return the date the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) was last updated*/getLastUpdated():Date;
/**Gets the name of the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html).
@return the name of the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html)*/getName():string;
/**Gets the owner of this [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html).

```
// Gets a folder by its ID.
// TODO(developer): Replace the folder ID with your own.
const folder = DriveApp.getFolderById('1234567890abcdefghijklmnopqrstuvwxyz');

// Gets the owner of the folder and logs the name to the console.
const folderOwner = folder.getOwner();
console.log(folderOwner.getName());
```
@return The owner of this [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html).*/getOwner():DriveApp.User;
/**Gets a collection of folders that are immediate parents of the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html).
@return a collection of folders that are immediate parents of the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html)*/getParents():DriveApp.FolderIterator;
/**Gets the resource key of the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) that is required to access items that
have been shared using a link.
@return The resource key of the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html).*/getResourceKey():string;
/**Gets whether this [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) is eligible to apply the security update that
requires a resource key for access when it's shared using a link.

Drive requires a resource key to access some files or folders that have been shared using a
link. This change is part of a security update. The update is turned on by default for eligible
files and folders. To turn the resource key requirement on or off for eligible files, use
`setSecurityUpdateEnabled`.

Learn more about the [Security update for Google Drive](https://support.google.com/a/answer/10685032).
@return Whether the resource key requirement can be applied for the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html).*/getSecurityUpdateEligible():boolean;
/**Gets whether this [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) requires a resource key for access when it's
shared using a link. This requirement is turned on by default for eligible files and folders.
To turn the resource key requirement on or off for eligible files, use 

```
setSecurityUpdateEnabled```

.

Learn more about the [Security update for Google Drive](https://support.google.com/a/answer/10685032).
@return Whether the resource key requirement is enabled for this [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html).*/getSecurityUpdateEnabled():boolean;
/**Gets which class of users can access the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html), besides any individual
users who have been explicitly given access.
@return which class of users can access the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html)*/getSharingAccess():DriveApp.Access;
/**Gets the permission granted to those users who can access the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html),
besides any individual users who have been explicitly given access.
@return the permissions granted to users who can access the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html)*/getSharingPermission():DriveApp.Permission;
/**Gets the number of bytes used to store the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) in Drive. Note that
Google Workspace application files do not count toward Drive storage limits and thus return
`0` bytes.
@return the number of bytes used to store the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) in Drive*/getSize():Integer;
/**Gets the URL that can be used to open the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) in a Google App like
Drive or Docs.
@return the URL that can be used to view this [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) in a Google App like
    Drive or Docs*/getUrl():string;
/**Gets the list of viewers and commenters for this [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html). If the user who
executes the script does not have edit access to the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html), this method
returns an empty array.

```
// Gets a folder by its ID.
// TODO(developer): Replace the folder ID with your own.
const folder = DriveApp.getFolderById('1234567890abcdefghijklmnopqrstuvwxyz');

// Gets the list of viewers and logs their names to the console.
const viewers = folder.getViewers();
for (viewer of viewers) {
  console.log(viewer.getName());
}
```
@return The list of viewers and commenters for this [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) if the user has edit
    access or an empty array otherwise.*/getViewers():DriveApp.User[];
/**Determines whether users with edit permissions to the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) are allowed to
share with other users or change the permissions.
@return `true` if users with edit permissions are allowed to share with other users or
    change the permissions; `false` if not*/isShareableByEditors():boolean;
/**Determines whether the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) has been starred in the user's Drive.
@return `true` if the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) is starred in the user's Drive; `false` if not*/isStarred():boolean;
/**Determines whether the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) is in the trash of the user's Drive.
@return `true` if the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) is in the trash of the user's Drive;
    `false` if not*/isTrashed():boolean;
/**Moves this item to the provided destination folder.

The current user must be the owner of the file or have at least edit access to the item's
current parent folder in order to move the item to the destination folder.
@param destination The folder that becomes the new parent.
@return This [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html), for chaining.*/moveTo(destination:DriveApp.Folder):DriveApp.Folder;
/**Removes the given user from the list of editors for the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html). This method doesn't
block users from accessing the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) if they belong to a class of users who have
general access—for example, if the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) is shared with the user's entire
domain, or if the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of viewers.
@param emailAddress The email address of the user to remove.
@return This [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html), for chaining.*/removeEditor(emailAddress:string):DriveApp.Folder;
/**Removes the given user from the list of editors for the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html). This method doesn't
block users from accessing the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) if they belong to a class of users who have
general access—for example, if the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) is shared with the user's entire
domain, or if the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of viewers.
@param user A representation of the user to remove.
@return This [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html), for chaining.*/removeEditor(user:User):DriveApp.Folder;
/**Removes the given file from the current folder. This method does not delete the file, but
if a file is removed from all of its parents, it cannot be seen in Drive except by searching
for it or using the "All items" view.
@deprecated
@param child The child file to remove.
@return The previous parent of the child.*/removeFile(child:DriveApp.File):DriveApp.Folder;
/**Removes the given folder from the current folder. This method does not delete the folder
or its contents, but if a folder is removed from all of its parents, it cannot be seen in Drive
except by searching for it or using the "All items" view.
@deprecated
@param child The child folder to remove.
@return The previous parent of the child.*/removeFolder(child:DriveApp.Folder):DriveApp.Folder;
/**Removes the given user from the list of viewers and commenters for the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html). This
method has no effect if the user is an editor, not a viewer or commenter. This method also
doesn't block users from accessing the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) if they belong to a class of users who
have general access—for example, if the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) is shared with the user's
entire domain, or if the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of editors.
@param emailAddress The email address of the user to remove.
@return This [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) for chaining.*/removeViewer(emailAddress:string):DriveApp.Folder;
/**Removes the given user from the list of viewers and commenters for the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html). This
method has no effect if the user is an editor, not a viewer. This method also doesn't block
users from accessing the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) if they belong to a class of users who have general
access—for example, if the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) is shared with the user's entire domain, or
if the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of editors.
@param user A representation of the user to remove.
@return This [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) for chaining.*/removeViewer(user:User):DriveApp.Folder;
/**Revokes the access to the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) granted to the given user. This method doesn't
block users from accessing the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) if they belong to a class of users who
have general access — for example, if the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) is shared with the user's
entire domain.
@param emailAddress The email address of the user whose access should be revoked.
@return This [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html), for chaining.*/revokePermissions(emailAddress:string):DriveApp.Folder;
/**Revokes the access to the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) granted to the given user. This method doesn't
block users from accessing the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) if they belong to a class of users who
have general access — for example, if the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) is shared with the user's
entire domain.
@param user A representation of the user whose access should be revoked.
@return This [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html), for chaining.*/revokePermissions(user:User):DriveApp.Folder;
/**Gets a collection of all files that are children of the current folder and match the given search
criteria. The search criteria are detailed in the [Google Drive SDK documentation](/drive/api/v2/ref-search-terms). Note that the Drive
service uses v2 of the Drive API and some query fields differ from v3. Review the [field
differences between v2 and v3](/drive/api/guides/v2-to-v3-reference#resource_field_differences_between_v2_and_v3).

The `params` argument is a query string that can contain string values, so take care
to escape quotation marks correctly (for example `"title contains 'Gulliver\\'s
Travels'"` or `'title contains "Gulliver\'s Travels"'`).

```
// Logs the name of every file that are children of the current folder and modified after February 28,
// 2022 whose name contains "untitled.""
var files = DriveApp.getRootFolder().searchFiles(
    'modifiedDate > "2022-02-28" and title contains "untitled"');
while (files.hasNext()) {
  var file = files.next();
  console.log(file.getName());
}
```
@param params The search criteria, as detailed in the [Google Drive SDK documentation](/drive/api/v2/ref-search-terms).
@return A collection of all files that are children of the current folder and match the search
    criteria.*/searchFiles(params:string):DriveApp.FileIterator;
/**Gets a collection of all folders that are children of the current folder and match the given search
criteria. The search criteria are detailed in the [Google Drive SDK documentation](/drive/api/v2/ref-search-terms). Note that the Drive
service uses v2 of the Drive API and some query fields differ from v3. Review the [field
differences between v2 and v3](/drive/api/guides/v2-to-v3-reference#resource_field_differences_between_v2_and_v3).

The `params` argument is a query string that can contain string values, so take care
to escape quotation marks correctly (for example `"title contains 'Gulliver\\'s
Travels'"` or `'title contains "Gulliver\'s Travels"'`).

```
// Logs the name of every folder that are children of the current folder and you own and is starred.
var folders = DriveApp.getRootFolder().searchFolders('starred = true and "me" in owners');
while (folders.hasNext()) {
  var folder = folders.next();
  console.log(folder.getName());
}
```
@param params The search criteria, as detailed in the [Google Drive SDK documentation](/drive/api/v2/ref-search-terms).
@return A collection of all folders that are children of the current folder and match the search
    criteria.*/searchFolders(params:string):DriveApp.FolderIterator;
/**Sets the description for the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html).
@param description the new description for the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html)
@return this [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html), for chaining*/setDescription(description:string):DriveApp.Folder;
/**Sets the name of the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html).
@param name the new name of the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html)
@return this [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html), for chaining*/setName(name:string):DriveApp.Folder;
/**Changes the owner of the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html). This method also gives the previous owner
explicit edit access to the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html).
@param emailAddress the email address of the user who should become the new owner
@return this [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html), for chaining*/setOwner(emailAddress:string):DriveApp.Folder;
/**Changes the owner of the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html). This method also gives the previous owner
explicit edit access to the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html).
@param user a representation of the user who should become the new owner
@return this [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html), for chaining*/setOwner(user:User):DriveApp.Folder;
/**Sets whether the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) requires a resource key for access when it's
shared using a link. Eligible files and folders are enabled by default.

Learn more about the [Security update for Google Drive](https://support.google.com/a/answer/10685032).
@param enabled Whether to enable the resource key requirement for the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html).
@return This [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html), for chaining.*/setSecurityUpdateEnabled(enabled:boolean):DriveApp.Folder;
/**Sets whether users with edit permissions to the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) are allowed to share
with other users or change the permissions. The default for a new [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) is
`true`.
@param shareable `true` if users with edit permissions should be allowed to share with
    other users or change the permissions; `false` if not
@return this [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html), for chaining*/setShareableByEditors(shareable:boolean):DriveApp.Folder;
/**Sets which class of users can access the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) and what permissions
those users are granted, besides any individual users who have been explicitly given access.

```
// Creates a folder that anyone on the Internet can read from and write to. (Domain
// administrators can prohibit this setting for users of a Google Workspace domain.)
var folder = DriveApp.createFolder('Shared Folder');
folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
```
@param accessType which class of users should be able to access the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html)
@param permissionType the permissions that should be granted to users who can access the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html)
@return this [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html), for chaining*/setSharing(accessType:DriveApp.Access,permissionType:DriveApp.Permission):DriveApp.Folder;
/**Sets whether the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) is starred in the user's Drive. The default for
new [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html)s is `false`.
@param starred `true` if the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) should be starred in the user's
    Drive; `false` if not
@return this [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html), for chaining*/setStarred(starred:boolean):DriveApp.Folder;
/**Sets whether the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) is in the trash of the user's Drive. Only the
owner may trash the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html). The default for new [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html)s is `false`.
@param trashed `true` if the [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html) should be moved to the trash of
    the user's Drive; `false` if not
@return this [`Folder`](https://developers.google.com/apps-script/reference/drive/folder.html), for chaining*/setTrashed(trashed:boolean):DriveApp.Folder;}interface FileIterator{
/**Gets a token that can be used to resume this iteration at a later time. This method is useful
if processing an iterator in one execution would exceed the maximum execution time.
Continuation tokens are generally valid for one week.
@return a continuation token that can be used to resume this iteration with the items that
    remained in the iterator when the token was generated*/getContinuationToken():string;
/**Determines whether calling [`next()`](https://developers.google.com/apps-script/reference/drive/file-iterator.html#next()) will return an item.
@return `true` if [`next()`](https://developers.google.com/apps-script/reference/drive/file-iterator.html#next()) will return an item; `false` if not*/hasNext():boolean;
/**Gets the next item in the collection of files or folders. Throws an exception if no items
remain.
@return the next item in the collection*/next():DriveApp.File;}interface File{
/**Add the given user to the list of commenters for the [`File`](https://developers.google.com/apps-script/reference/drive/file.html). If the user was
already on the list of viewers, this method promotes the user out of the list of viewers.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace 'cloudysanfrancisco@gmail.com' with the email address that you
// want to add as a commenter.
while (files.hasNext()) {
  const file = files.next();
  email = 'cloudysanfrancisco@gmail.com';
  console.log(file.addCommenter(email));
}
```
@param emailAddress The email address of the user to add.
@return This [`File`](https://developers.google.com/apps-script/reference/drive/file.html), for chaining.*/addCommenter(emailAddress:string):DriveApp.File;
/**Add the given user to the list of commenters for the [`File`](https://developers.google.com/apps-script/reference/drive/file.html). If the user was
already on the list of viewers, this method promotes the user out of the list of viewers.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace the file name with your own.
const files = DriveApp.getFilesByName('Test');

// Adds the active user as a commenter.
while (files.hasNext()) {
  const file = files.next();
  file.addCommenter(Session.getActiveUser());
}
```
@param user A representation of the user to add.
@return This [`File`](https://developers.google.com/apps-script/reference/drive/file.html), for chaining.*/addCommenter(user:User):DriveApp.File;
/**Add the given array of users to the list of commenters for the [`File`](https://developers.google.com/apps-script/reference/drive/file.html). If any
of the users were already on the list of viewers, this method promotes them out of the list of
viewers.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace the file name with your own.
const files = DriveApp.getFilesByName('Test');

while (files.hasNext()) {
  const file = files.next();
  // TODO(developer): Replace 'cloudysanfrancisco@gmail.com' and
  // 'baklavainthebalkans@gmail.com' with the email addresses to add as commenters.
  const emails = ['cloudysanfrancisco@gmail.com','baklavainthebalkans@gmail.com'];
  console.log(file.addCommenters(emails));
}
```
@param emailAddresses An array of email addresses of the users to add.
@return This [`File`](https://developers.google.com/apps-script/reference/drive/file.html), for chaining.*/addCommenters(emailAddresses:string[]):DriveApp.File;
/**Adds the given user to the list of editors for the [`File`](https://developers.google.com/apps-script/reference/drive/file.html). If the user was already
on the list of viewers, this method promotes the user out of the list of viewers.
@param emailAddress The email address of the user to add.
@return This [`File`](https://developers.google.com/apps-script/reference/drive/file.html), for chaining.*/addEditor(emailAddress:string):DriveApp.File;
/**Adds the given user to the list of editors for the [`File`](https://developers.google.com/apps-script/reference/drive/file.html). If the user was already
on the list of viewers, this method promotes the user out of the list of viewers.
@param user A representation of the user to add.
@return This [`File`](https://developers.google.com/apps-script/reference/drive/file.html), for chaining.*/addEditor(user:User):DriveApp.File;
/**Adds the given array of users to the list of editors for the [`File`](https://developers.google.com/apps-script/reference/drive/file.html). If any of the
users were already on the list of viewers, this method promotes them out of the list of
viewers.
@param emailAddresses An array of email addresses of the users to add.
@return This [`File`](https://developers.google.com/apps-script/reference/drive/file.html), for chaining.*/addEditors(emailAddresses:string[]):DriveApp.File;
/**Adds the given user to the list of viewers for the [`File`](https://developers.google.com/apps-script/reference/drive/file.html). If the user was already
on the list of editors, this method has no effect.
@param emailAddress The email address of the user to add.
@return This [`File`](https://developers.google.com/apps-script/reference/drive/file.html), for chaining.*/addViewer(emailAddress:string):DriveApp.File;
/**Adds the given user to the list of viewers for the [`File`](https://developers.google.com/apps-script/reference/drive/file.html). If the user was already
on the list of editors, this method has no effect.
@param user A representation of the user to add.
@return This [`File`](https://developers.google.com/apps-script/reference/drive/file.html), for chaining.*/addViewer(user:User):DriveApp.File;
/**Adds the given array of users to the list of viewers for the [`File`](https://developers.google.com/apps-script/reference/drive/file.html). If any of the
users were already on the list of editors, this method has no effect for them.
@param emailAddresses An array of email addresses of the users to add.
@return This [`File`](https://developers.google.com/apps-script/reference/drive/file.html), for chaining.*/addViewers(emailAddresses:string[]):DriveApp.File;
/**Gets the permission granted to the given user.
@param email the email address of the user whose permissions should be checked
@return the permissions granted to the user*/getAccess(email:string):DriveApp.Permission;
/**Gets the permission granted to the given user.
@param user a representation of the user whose permissions should be checked
@return the permissions granted to the user*/getAccess(user:User):DriveApp.Permission;
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
/**Gets the date the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) was created.
@return the date the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) was created*/getDateCreated():Date;
/**Gets the description for the [`File`](https://developers.google.com/apps-script/reference/drive/file.html).
@return the description for the [`File`](https://developers.google.com/apps-script/reference/drive/file.html)*/getDescription():string;
/**Gets the URL that can be used to download the file. Only users with permission to open the file
in Google Drive can access the URL. You can use this URL in a browser to download the file, but
you can't use to fetch the file with [`UrlFetchApp`](https://developers.google.com/apps-script/reference/drive/../url-fetch/url-fetch-app.html). If you want the contents of the
file in the script, use [`getBlob()`](https://developers.google.com/apps-script/reference/drive/file.html#getBlob()).

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace the file name with your own.
const files = DriveApp.getFilesByName('Test');

// Loops through the files and logs the download URLs to the console.
while (files.hasNext()) {
  const file = files.next();
  console.log(file.getDownloadUrl());
}
```
@return The URL that can be used to download the file.*/getDownloadUrl():string;
/**Gets the list of editors for this [`File`](https://developers.google.com/apps-script/reference/drive/file.html). If the user who executes the script
does not have edit access to the [`File`](https://developers.google.com/apps-script/reference/drive/file.html), this method returns an empty array.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace the file name with your own.
const files = DriveApp.getFilesByName('Test');

// Loops through the files.
while (files.hasNext()) {
  const file = files.next();

  // Adds the email addresses in the array as editors of each file.
  // TODO(developer): Replace 'cloudysanfrancisco@gmail.com'
  // and 'baklavainthebalkans@gmail.com' with valid email addresses.
  file.addEditors(['cloudysanfrancisco@gmail.com', 'baklavainthebalkans@gmail.com']);

  // Gets a list of the file editors.
  const editors = file.getEditors();

  // For each file, logs the editors' email addresses to the console.
  for (const editor of editors) {
    console.log(editor.getEmail());
  }
}
```
@return If the user has edit access for this [`File`](https://developers.google.com/apps-script/reference/drive/file.html), returns the list of
    editors. If the user doesn't have edit access, returns an empty array.*/getEditors():DriveApp.User[];
/**Gets the ID of the [`File`](https://developers.google.com/apps-script/reference/drive/file.html).
@return the ID of the [`File`](https://developers.google.com/apps-script/reference/drive/file.html)*/getId():string;
/**Gets the date the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) was last updated.
@return the date the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) was last updated*/getLastUpdated():Date;
/**Gets the MIME type of the file.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace the file name with your own.
const files = DriveApp.getFilesByName('Test');

// Loops through the files and logs the MIME type to the console.
while (files.hasNext()) {
  const file = files.next();
  console.log(file.getMimeType());
}
```
@return The MIME type of the file.*/getMimeType():string;
/**Gets the name of the [`File`](https://developers.google.com/apps-script/reference/drive/file.html).
@return the name of the [`File`](https://developers.google.com/apps-script/reference/drive/file.html)*/getName():string;
/**Gets the file owner.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace the file name with your own.
const files = DriveApp.getFilesByName('Test');

// Loops through the files and logs the names of the file owners to the console.
while (files.hasNext()) {
  const file = files.next();
  console.log(file.getOwner().getName());
}
```
@return The file owner.*/getOwner():DriveApp.User;
/**Gets a collection of folders that are immediate parents of the [`File`](https://developers.google.com/apps-script/reference/drive/file.html).
@return a collection of folders that are immediate parents of the [`File`](https://developers.google.com/apps-script/reference/drive/file.html)*/getParents():DriveApp.FolderIterator;
/**Gets the resource key of the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) that is required to access items that
have been shared using a link.
@return The resource key of the [`File`](https://developers.google.com/apps-script/reference/drive/file.html).*/getResourceKey():string;
/**Gets whether this [`File`](https://developers.google.com/apps-script/reference/drive/file.html) is eligible to apply the security update that
requires a resource key for access when it's shared using a link.

Drive requires a resource key to access some files or folders that have been shared using a
link. This change is part of a security update. The update is turned on by default for eligible
files and folders. To turn the resource key requirement on or off for eligible files, use
`setSecurityUpdateEnabled`.

Learn more about the [Security update for Google Drive](https://support.google.com/a/answer/10685032).
@return Whether the resource key requirement can be applied for the [`File`](https://developers.google.com/apps-script/reference/drive/file.html).*/getSecurityUpdateEligible():boolean;
/**Gets whether this [`File`](https://developers.google.com/apps-script/reference/drive/file.html) requires a resource key for access when it's
shared using a link. This requirement is turned on by default for eligible files and folders.
To turn the resource key requirement on or off for eligible files, use 

```
setSecurityUpdateEnabled```

.

Learn more about the [Security update for Google Drive](https://support.google.com/a/answer/10685032).
@return Whether the resource key requirement is enabled for this [`File`](https://developers.google.com/apps-script/reference/drive/file.html).*/getSecurityUpdateEnabled():boolean;
/**Gets which class of users can access the [`File`](https://developers.google.com/apps-script/reference/drive/file.html), besides any individual
users who have been explicitly given access.
@return which class of users can access the [`File`](https://developers.google.com/apps-script/reference/drive/file.html)*/getSharingAccess():DriveApp.Access;
/**Gets the permission granted to those users who can access the [`File`](https://developers.google.com/apps-script/reference/drive/file.html),
besides any individual users who have been explicitly given access.
@return the permissions granted to users who can access the [`File`](https://developers.google.com/apps-script/reference/drive/file.html)*/getSharingPermission():DriveApp.Permission;
/**Gets the number of bytes used to store the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) in Drive. Note that
Google Workspace application files do not count toward Drive storage limits and thus return
`0` bytes.
@return the number of bytes used to store the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) in Drive*/getSize():Integer;
/**If this is a Shortcut, returns the ID of the item it points to.

Otherwise it returns `null`.

```
// The ID of the file for which to make a shortcut and the ID of
// the folder to which you want to add the shortcut.
// TODO(developer): Replace the file and folder IDs with your IDs.
const fileId = 'abc123456';
const folderId = 'xyz987654';

// Gets the folder to add the shortcut to.
const folder = DriveApp.getFolderById(folderId);

// Creates a shortcut of the file and moves it to the specified folder.
const shortcut = DriveApp.createShortcut(fileId).moveTo(folder);

// Logs the target ID of the shortcut.
console.log(`${shortcut.getName()}=${shortcut.getTargetId()}`);
```
@return The target item ID.*/getTargetId():string;
/**If this is a Shortcut, returns the mime type of the item it points to.

Otherwise it returns `null`.

```
// The ID of the file for which to make a shortcut and the ID of
// the folder to which you want to add the shortcut.
// TODO(developer): Replace the file and folder IDs with your IDs.
const fileId = 'abc123456';
const folderId = 'xyz987654';

// Gets the folder to add the shortcut to.
const folder = DriveApp.getFolderById(folderId);

// Creates a shortcut of the file and moves it to the specified folder.
const shortcut = DriveApp.createShortcut(fileId).moveTo(folder);

// Logs the MIME type of the file that the shortcut points to.
console.log(`MIME type of the shortcut: ${shortcut.getTargetMimeType()}`);
```
@return The target item mime type.*/getTargetMimeType():string;
/**If the file is a shortcut, returns the resource key of the item it points to. A resource key is
an additional parameter that you need to pass to access files that have been shared using a
link.

If the file isn't a shortcut, it returns `null`.

```
// Gets a file by its ID.
// TODO(developer): Replace 'abc123456' with your file ID.
const file = DriveApp.getFileById('abc123456');

// If the file is a shortcut, returns the resource key of the file that it points to.
console.log(file.getTargetResourceKey());
```
@return The target item's resource key or `null` if the file is not a shortcut.*/getTargetResourceKey():string;
/**Gets a thumbnail image for the file, or `null` if no thumbnail exists.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace the file name with your own.
const files = DriveApp.getFilesByName('Test');

// Loops through the files.
while (files.hasNext()) {
  const file = files.next();

  // Logs the thumbnail image for each file to the console as a blob,
  // or null if no thumbnail exists.
  console.log(file.getThumbnail());
}
```
@return The thumbnail image for the file.*/getThumbnail():Blob;
/**Gets the URL that can be used to open the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) in a Google App like
Drive or Docs.
@return the URL that can be used to view this [`File`](https://developers.google.com/apps-script/reference/drive/file.html) in a Google App like
    Drive or Docs*/getUrl():string;
/**Gets the list of viewers and commenters for this [`File`](https://developers.google.com/apps-script/reference/drive/file.html). If the user who
executes the script does not have edit access to the [`File`](https://developers.google.com/apps-script/reference/drive/file.html), this method
returns an empty array.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace the file name with your own.
const files = DriveApp.getFilesByName('Test');

// Loops through the files.
while (files.hasNext()) {
  const file = files.next();

  // For each file, logs the viewers' email addresses to the console.
  const viewers = file.getViewers();
  for (viewer of viewers) {
    console.log(viewer.getEmail());
  }
}
```
@return If the user has edit access for this [`File`](https://developers.google.com/apps-script/reference/drive/file.html), returns the list of
    viewers and commenters. If the user doesn't have edit access, returns an empty array.*/getViewers():DriveApp.User[];
/**Determines whether users with edit permissions to the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) are allowed to
share with other users or change the permissions.
@return `true` if users with edit permissions are allowed to share with other users or
    change the permissions; `false` if not*/isShareableByEditors():boolean;
/**Determines whether the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) has been starred in the user's Drive.
@return `true` if the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) is starred in the user's Drive; `false` if not*/isStarred():boolean;
/**Determines whether the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) is in the trash of the user's Drive.
@return `true` if the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) is in the trash of the user's Drive;
    `false` if not*/isTrashed():boolean;
/**Creates a copy of the file.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace the file name with your own.
const files = DriveApp.getFilesByName('Test');

// Loops through the files.
while (files.hasNext()) {
  const file = files.next();

  // Creates a copy of each file and logs the file name to the console.
  console.log(file.makeCopy().getName());
}
```
@return The new copy.*/makeCopy():DriveApp.File;
/**Creates a copy of the file in the destination directory.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace the file name with your own.
const files = DriveApp.getFilesByName('Test');

// Loops through the files.
while (files.hasNext()) {
  const file = files.next();

  // Creates a copy of each file and adds it to the specified folder.
  // TODO(developer): Replace the folder ID with your own.
  const destination = DriveApp.getFolderById('123456abcxyz');
  const copiedFile = file.makeCopy(destination);

  // Logs the file names to the console.
  console.log(copiedFile.getName());
}
```
@param destination The directory to copy the file into.
@return The new copy.*/makeCopy(destination:DriveApp.Folder):DriveApp.File;
/**Creates a copy of the file and names it with the name provided.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace the file name with your own.
const files = DriveApp.getFilesByName('Test');

// Loops through the files.
while (files.hasNext()) {
  const file = files.next();

  // Creates a copy of each file and sets the name to 'Test-Copy.'
  const filename = file.makeCopy('Test-Copy');

  // Logs the copied file's name to the console.
  console.log(filename.getName());
}
```
@param name The filename that should be applied to the new copy.
@return The new copy.*/makeCopy(name:string):DriveApp.File;
/**Creates a copy of the file in the destination directory and names it with the name provided.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace the file name with your own.
const files = DriveApp.getFilesByName('Test');

// Loops through the files.
while (files.hasNext()) {
  const file = files.next();

  // Creates a copy of each file, sets the file name, and adds the copied file
  // to the specified folder.
  // TODO(developer): Replace the folder ID with your own.
  const destination = DriveApp.getFolderById('123456abcxyz');
  const copiedFile = file.makeCopy('Test-Copy', destination);

  // Logs the file names to the console.
  console.log(copiedFile.getName());
}
```
@param name The filename that should be applied to the new copy.
@param destination The directory to copy the file into.
@return The new copy.*/makeCopy(name:string,destination:DriveApp.Folder):DriveApp.File;
/**Moves this item to the provided destination folder.

The current user must be the owner of the file or have at least edit access to the item's
current parent folder in order to move the item to the destination folder.
@param destination The folder that becomes the new parent.
@return This [`File`](https://developers.google.com/apps-script/reference/drive/file.html), for chaining.*/moveTo(destination:DriveApp.Folder):DriveApp.File;
/**Removes the given user from the list of commenters for the [`File`](https://developers.google.com/apps-script/reference/drive/file.html). This method
does not block users from access the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) if they belong to a class of users
who have general access — for example, if the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) is shared with the user's
entire domain.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace the file name with your own.
const files = DriveApp.getFilesByName('Test');

// Loops through the files.
while (files.hasNext()) {
  const file = files.next();

  // Removes the given user from the list of commenters for each file.
  // TODO(developer): Replace the email with the email of the user you want to remove.
  file.removeCommenter('cloudysanfrancisco@gmail.com');
}
```
@param emailAddress The email address of the user to remove.
@return This [`File`](https://developers.google.com/apps-script/reference/drive/file.html), for chaining.*/removeCommenter(emailAddress:string):DriveApp.File;
/**Removes the given user from the list of commenters for the [`File`](https://developers.google.com/apps-script/reference/drive/file.html). This method
does not block users from access the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) if they belong to a class of users
who have general access — for example, if the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) is shared with the user's
entire domain.

```
// Gets a list of all files in Google Drive with the given name.
// TODO(developer): Replace the file name with your own.
const files = DriveApp.getFilesByName('Test');

// Loops through the files.
while (files.hasNext()) {
  const file = files.next();

  // Removes the given user from the list of commenters for each file.
  console.log(file.removeCommenter(Session.getActiveUser()));
}
```
@param user A representation of the user to remove.
@return This [`File`](https://developers.google.com/apps-script/reference/drive/file.html), for chaining.*/removeCommenter(user:User):DriveApp.File;
/**Removes the given user from the list of editors for the [`File`](https://developers.google.com/apps-script/reference/drive/file.html). This method doesn't
block users from accessing the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) if they belong to a class of users who have
general access—for example, if the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) is shared with the user's entire
domain, or if the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of viewers.
@param emailAddress The email address of the user to remove.
@return This [`File`](https://developers.google.com/apps-script/reference/drive/file.html), for chaining.*/removeEditor(emailAddress:string):DriveApp.File;
/**Removes the given user from the list of editors for the [`File`](https://developers.google.com/apps-script/reference/drive/file.html). This method doesn't
block users from accessing the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) if they belong to a class of users who have
general access—for example, if the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) is shared with the user's entire
domain, or if the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of viewers.
@param user A representation of the user to remove.
@return This [`File`](https://developers.google.com/apps-script/reference/drive/file.html), for chaining.*/removeEditor(user:User):DriveApp.File;
/**Removes the given user from the list of viewers and commenters for the [`File`](https://developers.google.com/apps-script/reference/drive/file.html). This
method has no effect if the user is an editor, not a viewer or commenter. This method also
doesn't block users from accessing the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) if they belong to a class of users who
have general access—for example, if the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) is shared with the user's
entire domain, or if the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of editors.
@param emailAddress The email address of the user to remove.
@return This [`File`](https://developers.google.com/apps-script/reference/drive/file.html) for chaining.*/removeViewer(emailAddress:string):DriveApp.File;
/**Removes the given user from the list of viewers and commenters for the [`File`](https://developers.google.com/apps-script/reference/drive/file.html). This
method has no effect if the user is an editor, not a viewer. This method also doesn't block
users from accessing the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) if they belong to a class of users who have general
access—for example, if the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) is shared with the user's entire domain, or
if the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of editors.
@param user A representation of the user to remove.
@return This [`File`](https://developers.google.com/apps-script/reference/drive/file.html) for chaining.*/removeViewer(user:User):DriveApp.File;
/**Revokes the access to the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) granted to the given user. This method doesn't
block users from accessing the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) if they belong to a class of users who
have general access — for example, if the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) is shared with the user's
entire domain.
@param emailAddress The email address of the user whose access should be revoked.
@return This [`File`](https://developers.google.com/apps-script/reference/drive/file.html), for chaining.*/revokePermissions(emailAddress:string):DriveApp.File;
/**Revokes the access to the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) granted to the given user. This method doesn't
block users from accessing the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) if they belong to a class of users who
have general access — for example, if the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) is shared with the user's
entire domain.
@param user A representation of the user whose access should be revoked.
@return This [`File`](https://developers.google.com/apps-script/reference/drive/file.html), for chaining.*/revokePermissions(user:User):DriveApp.File;
/**Overwrites the content of the file with a given replacement. Throws an exception if `content` is larger than 10MB.

Beware: this change is irreversible.

```
// Creates a text file with the content 'Hello, world!'
file = DriveApp.createFile('New Text File', 'Hello, world!');

// Logs the content of the text file to the console.
console.log(file.getBlob().getDataAsString());

// Updates the content of the text file to 'Updated text!'
file.setContent('Updated text!')

// Logs content of the text file to the console.
console.log(file.getBlob().getDataAsString());
```
@param content The new content for the file.
@return This [`File`](https://developers.google.com/apps-script/reference/drive/file.html), for chaining.*/setContent(content:string):DriveApp.File;
/**Sets the description for the [`File`](https://developers.google.com/apps-script/reference/drive/file.html).
@param description the new description for the [`File`](https://developers.google.com/apps-script/reference/drive/file.html)
@return this [`File`](https://developers.google.com/apps-script/reference/drive/file.html), for chaining*/setDescription(description:string):DriveApp.File;
/**Sets the name of the [`File`](https://developers.google.com/apps-script/reference/drive/file.html).
@param name the new name of the [`File`](https://developers.google.com/apps-script/reference/drive/file.html)
@return this [`File`](https://developers.google.com/apps-script/reference/drive/file.html), for chaining*/setName(name:string):DriveApp.File;
/**Changes the owner of the [`File`](https://developers.google.com/apps-script/reference/drive/file.html). This method also gives the previous owner
explicit edit access to the [`File`](https://developers.google.com/apps-script/reference/drive/file.html).
@param emailAddress the email address of the user who should become the new owner
@return this [`File`](https://developers.google.com/apps-script/reference/drive/file.html), for chaining*/setOwner(emailAddress:string):DriveApp.File;
/**Changes the owner of the [`File`](https://developers.google.com/apps-script/reference/drive/file.html). This method also gives the previous owner
explicit edit access to the [`File`](https://developers.google.com/apps-script/reference/drive/file.html).
@param user a representation of the user who should become the new owner
@return this [`File`](https://developers.google.com/apps-script/reference/drive/file.html), for chaining*/setOwner(user:User):DriveApp.File;
/**Sets whether the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) requires a resource key for access when it's
shared using a link. Eligible files and folders are enabled by default.

Learn more about the [Security update for Google Drive](https://support.google.com/a/answer/10685032).
@param enabled Whether to enable the resource key requirement for the [`File`](https://developers.google.com/apps-script/reference/drive/file.html).
@return This [`File`](https://developers.google.com/apps-script/reference/drive/file.html), for chaining.*/setSecurityUpdateEnabled(enabled:boolean):DriveApp.File;
/**Sets whether users with edit permissions to the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) are allowed to share
with other users or change the permissions. The default for a new [`File`](https://developers.google.com/apps-script/reference/drive/file.html) is
`true`.
@param shareable `true` if users with edit permissions should be allowed to share with
    other users or change the permissions; `false` if not
@return this [`File`](https://developers.google.com/apps-script/reference/drive/file.html), for chaining*/setShareableByEditors(shareable:boolean):DriveApp.File;
/**Sets which class of users can access the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) and what permissions
those users are granted, besides any individual users who have been explicitly given access.

```
// Creates a folder that anyone on the Internet can read from and write to. (Domain
// administrators can prohibit this setting for users of a Google Workspace domain.)
var folder = DriveApp.createFolder('Shared Folder');
folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.EDIT);
```
@param accessType which class of users should be able to access the [`File`](https://developers.google.com/apps-script/reference/drive/file.html)
@param permissionType the permissions that should be granted to users who can access the [`File`](https://developers.google.com/apps-script/reference/drive/file.html)
@return this [`File`](https://developers.google.com/apps-script/reference/drive/file.html), for chaining*/setSharing(accessType:DriveApp.Access,permissionType:DriveApp.Permission):DriveApp.File;
/**Sets whether the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) is starred in the user's Drive. The default for
new [`File`](https://developers.google.com/apps-script/reference/drive/file.html)s is `false`.
@param starred `true` if the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) should be starred in the user's
    Drive; `false` if not
@return this [`File`](https://developers.google.com/apps-script/reference/drive/file.html), for chaining*/setStarred(starred:boolean):DriveApp.File;
/**Sets whether the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) is in the trash of the user's Drive. Only the
owner may trash the [`File`](https://developers.google.com/apps-script/reference/drive/file.html). The default for new [`File`](https://developers.google.com/apps-script/reference/drive/file.html)s is `false`.
@param trashed `true` if the [`File`](https://developers.google.com/apps-script/reference/drive/file.html) should be moved to the trash of
    the user's Drive; `false` if not
@return this [`File`](https://developers.google.com/apps-script/reference/drive/file.html), for chaining*/setTrashed(trashed:boolean):DriveApp.File;}interface Access{}interface _Access{
/**Anyone on the Internet can find and access. No sign-in required.

Domain administrators can prohibit this setting for users of a Google Workspace domain. If
the setting is disabled, passing this value to [`File.setSharing(accessType, permissionType)`](https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)) throws an exception.*/ANYONE:Access;
/**Anyone who has the link can access. No sign-in required.

Domain administrators can prohibit this setting for users of a Google Workspace domain. If
the setting is disabled, passing this value to [`File.setSharing(accessType, permissionType)`](https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)) throws an exception.*/ANYONE_WITH_LINK:Access;
/**People in your domain can find and access. Sign-in required.

This setting is available only for users of a Google Workspace domain. For other types of
Google accounts, passing this value to [`File.setSharing(accessType, permissionType)`](https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)) throws
an exception.*/DOMAIN:Access;
/**People in your domain who have the link can access. Sign-in required.

This setting is available only for users of a Google Workspace domain. For other types of
Google accounts, passing this value to [`File.setSharing(accessType, permissionType)`](https://developers.google.com/apps-script/reference/drive/file.html#setSharing(Access,Permission)) throws
an exception.*/DOMAIN_WITH_LINK:Access;
/**Only people explicitly granted permission can access. Sign-in required.*/PRIVATE:Access;}}const DriveApp:DriveApp;