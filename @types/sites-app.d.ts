interface SitesApp{AttachmentType:SitesApp._AttachmentType;PageType:SitesApp._PageType;
/**Creates a new Site by copying an existing Site.

Warning: Copying a site takes time, from seconds to possibly many minutes, depending on the
size of the site. Although the method returns right away, the copy is still going on in the
background, and not all pages in the copied site are immediately available. This method can
also be used to instantiate a new site based on a given template.

```
// This creates a site. Note that this only works for Google Workspace domains.
// There is no version of this API for consumer accounts.
var site = SitesApp.createSite("examplepetstore.com",
                               "homepage",
                               "My Home Page",
                               "This is a new site I created!");

var siteCopy = SitesApp.copySite("examplepetstore.com",
                                 "homepage-clone",
                                 "Cloned Home Page",
                                 "Begun, these clone wars have.",
                                 site);
```
@deprecated
@param domain The Google Workspace hosted domain, such as examplepetstore.com.
@param name The webspace name found in the URL, such as mySite.
@param title The title of the site
@param summary The description of the site
@param site The Site to copy from. This can either be a site or a template. If the parameter is
    an existing site then the entire contents of the site will be copied. If the given Site is
    a template, then a new Site is created based on that template.
@return The site that was copied. Note that the copy is asynchronous, and the copy operation
    may still be ongoing even though a reference to the site has been returned.*/copySite(domain:string,name:string,title:string,summary:string,site:SitesApp.Site):SitesApp.Site;
/**Creates a new Site.

```
// This creates a site. Note that this only works for Google Workspace domains.
// There is no version of this API for consumer accounts.
var site = SitesApp.createSite("examplepetstore.com",
                               "homepage",
                               "My Home Page",
                               "This is a new site I created!");
```
@deprecated
@param domain The Google Workspace hosted domain, such as examplepetstore.com.
@param name The path name found in the URL, such as mySite.
@param title The title of the site.
@param summary The description of the site.
@return The created site.*/createSite(domain:string,name:string,title:string,summary:string):SitesApp.Site;
/**Returns the active page, if the script is hosted in a container, or `null` otherwise.

```
var site = SitesApp.getActivePage();
```
@deprecated
@return The active container if it is a sites page.*/getActivePage():SitesApp.Page;
/**Returns the active container, if the script is hosted in a container, or `null`
otherwise.

```
var site = SitesApp.getActiveSite();
```
@deprecated
@return The active container if it is a site.*/getActiveSite():SitesApp.Site;
/**Retrieves first 200 Sites belonging to this domain. To get all the sites, use the ~~[`getAllSites(domain, start, max)`](https://developers.google.com/apps-script/reference/sites/sites-app.html#getAllSites(String,Integer,Integer))~~ method to page through the results.

```
// This writes the first page of sites belonging to a Google Workspace
// domain to the log.
var sites = SitesApp.getAllSites("examplepetstore.com.");
for(var i in sites) {
  Logger.log(sites[i].getUrl());
}
```
@deprecated
@param domain The Google Workspace hosted domain, such as examplepetstore.com.
@return An array of sites belonging to the domain.*/getAllSites(domain:string):SitesApp.Site[];
/**Retrieves all Sites belonging to this domain.

```
// This writes the a list of sites in domain example.com to the log.
var pageStart = 0;
var pageSize = 50;
while (true) {
  Logger.log("Loading sites starting at %s", pageStart);
  var sites = SitesApp.getAllSites("examplepetstore.com", pageStart, pageSize);
  if (sites.length == 0) {
    break;
  }
  Logger.log("Got %s sites back", sites.length);
  pageStart += sites.length;
  for(var i in sites) {
    Logger.log("Found site: %s", sites[i].getUrl());
  }
}
```
@deprecated
@param domain The Google Workspace hosted domain, such as examplepetstore.com.
@param start The index of the first site to return.
@param max The maximum number of results to return.
@return An array of sites belonging to the domain.*/getAllSites(domain:string,start:Integer,max:Integer):SitesApp.Site[];
/**Retrieves a Page by url.

```
// This snippet retrieves the page at the given URL.
// Returns null if the page does not exist or if the URL given is invalid.
var page = SitesApp.getPageByUrl(
                    "https://sites.google.com/site/demositeappsscript/mylistpage");
Logger.log(page.getName());
```
@deprecated
@param url The public url.
@return A ~~[`Page`](https://developers.google.com/apps-script/reference/sites/page.html)~~ instance corresponding to the page at the URL or `null` if the
    page does not exist.*/getPageByUrl(url:string):SitesApp.Page;
/**Retrieves a Site for the given Google Site, if the user is a consumer who does not have a
hosted domain.

```
// Returns a Site instance
var site = SitesApp.getSite('mysite');
```
@deprecated
@param name The webspace name found in the URL, such as mySite.
@return A Site instance corresponding to a consumer site.*/getSite(name:string):SitesApp.Site;
/**Retrieves a Site for the given Google Site.

```
// Returns a Site instance
var site = SitesApp.getSite('example.com', 'mysite');
```
@deprecated
@param domain The Google Workspace hosted domain, such as examplepetstore.com.
@param name The webspace name found in the URL, such as mySite.
@return A Site instance corresponding to a hosted domain.*/getSite(domain:string,name:string):SitesApp.Site;
/**Retrieves a Site by url.

```
// This snippet retrieves the site at the given URL
// Throws an Invalid argument exception if the site does not exist or if
// the URL given is invalid
var site = SitesApp.getSiteByUrl("https://sites.google.com/site/demosite");
Logger.log(site.getName());
```
@deprecated
@param url The public url.
@return A Site found at the given URL.*/getSiteByUrl(url:string):SitesApp.Site;
/**Retrieves first page of Sites for a user, if the user is a consumer who does not have a hosted
domain.

```
// This writes the first page of sites owned by the user running
// the script to the log.
var sites = SitesApp.getSites();
for(var i in sites) {
  Logger.log(sites[i].getUrl());
}
```
@deprecated
@return An array of sites beloning to the user running the script.*/getSites():SitesApp.Site[];
/**Retrieves Sites for a user between the given bounds if the user is a consumer who does not have
a hosted domain.

```
var sites = SitesApp.getSites(25, 50);
for(var i in sites) {
  Logger.log(sites[i].getUrl());
}
```
@deprecated
@param start The index of the first site to return.
@param max The maximum number of results to return.
@return An array of all the sites owned for a user.*/getSites(start:Integer,max:Integer):SitesApp.Site[];
/**Retrieves first page of Sites belonging to this user in this domain.

```
// This writes the first page of sites owned by the user running
// the script to the log.
var sites = SitesApp.getSites("example.com");
for(var i in sites) {
  Logger.log(sites[i].getUrl());
}
```
@deprecated
@param domain The Google Workspace hosted domain, such as examplepetstore.com.
@return An array of sites beloning to the user running the script.*/getSites(domain:string):SitesApp.Site[];
/**Retrieves all Sites belonging to this user in this domain for the given range given.

```
// This writes the a list of sites owned by the user running
// the script in positions bounded by the start and max values to the log.
var sites = SitesApp.getSites("example.com", 25, 50);
for(var i in sites) {
  Logger.log(sites[i].getUrl());
}
```
@deprecated
@param domain The Google Workspace hosted domain, such as examplepetstore.com.
@param start The index of the first site to return.
@param max The maximum number of results to return.
@return An array of sites belonging to the user.*/getSites(domain:string,start:Integer,max:Integer):SitesApp.Site[];}module SitesApp{interface Site{
/**Add a new collaborator to the site

```
var site = SitesApp.getSite("example.com", "mysite");
site.addCollaborator("eric@example.com");
```
@deprecated
@param email The email of the user to add as a collaborator
@return this site for chaining*/addCollaborator(email:string):SitesApp.Site;
/**Add a new collaborator to the website

```
var site = SitesApp.getSite("example.com", "mysite");
var currentUser = Session.getActiveUser();
site.addCollaborator(currentUser);
```
@deprecated
@param user The user to add as a collaborator
@return this site for chaining*/addCollaborator(user:User):SitesApp.Site;
/**Adds the given user to the list of editors for the ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~. If the user was already
on the list of viewers, this method promotes the user out of the list of viewers.
@param emailAddress The email address of the user to add.
@return This ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~, for chaining.*/addEditor(emailAddress:string):SitesApp.Site;
/**Adds the given user to the list of editors for the ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~. If the user was already
on the list of viewers, this method promotes the user out of the list of viewers.
@param user A representation of the user to add.
@return This ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~, for chaining.*/addEditor(user:User):SitesApp.Site;
/**Adds the given array of users to the list of editors for the ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~. If any of the
users were already on the list of viewers, this method promotes them out of the list of
viewers.
@param emailAddresses An array of email addresses of the users to add.
@return This ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~, for chaining.*/addEditors(emailAddresses:string[]):SitesApp.Site;
/**Add a new owner to the website

```
var site = SitesApp.getSite("example.com", "mysite");
site.addOwner("eric@example.com");
```
@deprecated
@param email The email of the user to add as an owner
@return this site for chaining*/addOwner(email:string):SitesApp.Site;
/**Add a new owner to the website

```
var site = SitesApp.getSite("example.com", "mysite");
var currentUser = Session.getActiveUser();
site.addOwner(currentUser);
```
@deprecated
@param user The user to add as an owner
@return this site for chaining*/addOwner(user:User):SitesApp.Site;
/**Adds the given user to the list of viewers for the ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~. If the user was already
on the list of editors, this method has no effect.
@param emailAddress The email address of the user to add.
@return This ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~, for chaining.*/addViewer(emailAddress:string):SitesApp.Site;
/**Adds the given user to the list of viewers for the ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~. If the user was already
on the list of editors, this method has no effect.
@param user A representation of the user to add.
@return This ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~, for chaining.*/addViewer(user:User):SitesApp.Site;
/**Adds the given array of users to the list of viewers for the ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~. If any of the
users were already on the list of editors, this method has no effect for them.
@param emailAddresses An array of email addresses of the users to add.
@return This ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~, for chaining.*/addViewers(emailAddresses:string[]):SitesApp.Site;
/**Create a new Announcement
@deprecated
@param title The title of the Announcement page to create
@param html The HTML body of the page
@param parent The Parent page
@return The created ~~[`Page`](https://developers.google.com/apps-script/reference/sites/page.html)~~*/createAnnouncement(title:string,html:string,parent:SitesApp.Page):SitesApp.Page;
/**Create a new announcements page. Note that a parent site or page cannot have more than 500
child pages.

```
// This method can be called from both a Site instance
// as well as a Page instance
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];

site.createAnnouncementsPage("New Announcement",
                             "new-announcement",
                             "<h1>Your announcement goes here</h1>");

page.createAnnouncementsPage("New Announcement",
                             "new-announcement-child",
                             "<h1>Your announcement goes here</h1>");
```
@deprecated
@param title the page title
@param name the page name
@param html the page content
@return the newly created ~~[`Page`](https://developers.google.com/apps-script/reference/sites/page.html)~~*/createAnnouncementsPage(title:string,name:string,html:string):SitesApp.Page;
/**Deprecated. Replaced with createComment on ~~[`Page`](https://developers.google.com/apps-script/reference/sites/page.html)~~.

Create a new Comment.
@deprecated
@param inReplyTo a GData feed url - meaningless and broken
@param html the comment content
@param parent the parent the comments shows up on
@return the newly created ~~[`Comment`](https://developers.google.com/apps-script/reference/sites/comment.html)~~*/createComment(inReplyTo:string,html:string,parent:SitesApp.Page):SitesApp.Comment;
/**Create a new file-cabinet page. Note that a parent site or page cannot have more than 500 child
pages.

```
// This method can be called from either a site or a page.
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];

site.createFileCabinetPage("New File Cabinet",
                           "new-file-cabinet",
                           "<h1>Your HTML here</h1>");

page.createFileCabinetPage("New File Cabinet",
                             "new-file-cabinet-child",
                             "<h1>Your HTML here</h1>");
```
@deprecated
@param title the page title
@param name the page name
@param html the page content
@return The newly created ~~[`Page`](https://developers.google.com/apps-script/reference/sites/page.html)~~*/createFileCabinetPage(title:string,name:string,html:string):SitesApp.Page;
/**Deprecated. Replaced by createListItem on ~~[`Page`](https://developers.google.com/apps-script/reference/sites/page.html)~~.

Create a new ListItem.
@deprecated
@param html the item content - meaningless and broken.
@param columnNames the names of the columns, which are unnecessary
@param values the column values
@param parent the ListPage parent
@return the ~~[`ListItem`](https://developers.google.com/apps-script/reference/sites/list-item.html)~~ for chaining.*/createListItem(html:string,columnNames:string[],values:string[],parent:SitesApp.Page):SitesApp.ListItem;
/**Create a new list page. Note that a parent site or page cannot have more than 500 child pages.

```
// This method can be called from either a site or a page.
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];

site.createListPage("New List Page",
                    "new-list-page",
                    "<h1>Your List Page HTML here</h1>",
                    [ "col1", "col2" ]);

page.createListPage("New List Page",
                    "new-list-page-child",
                    "<h1>Your List Page HTML here</h1>",
                    [ "col1", "col2" ]);
```
@deprecated
@param title the page title
@param name the page name
@param html the page content
@param columnNames the column names used for the list
@return The newly created ~~[`Page`](https://developers.google.com/apps-script/reference/sites/page.html)~~*/createListPage(title:string,name:string,html:string,columnNames:string[]):SitesApp.Page;
/**Create a new page from a template. Note that a parent site or page cannot have more than 500
child pages.

```
// This method can be called from either a site or a page.
var site = SitesApp.getSite("example.com", "mysite");
var template = site.getTemplates()[0];

// If an invalid template is passed, this will throw an "Invalid Argument" error.
site.createPageFromTemplate("ClonedPage", "cloned-page", template);
```
@deprecated
@param title the page title
@param name the page name
@param template the template page
@return the newly created ~~[`Page`](https://developers.google.com/apps-script/reference/sites/page.html)~~*/createPageFromTemplate(title:string,name:string,template:SitesApp.Page):SitesApp.Page;
/**Deprecated. Replaced by createWebAttachment on ~~[`Page`](https://developers.google.com/apps-script/reference/sites/page.html)~~.

Create a new Web Attachment.
@deprecated
@param title the attachment title
@param url the url of the attachment
@param parent the parent page
@return this Attachment for chaining.*/createWebAttachment(title:string,url:string,parent:SitesApp.Page):SitesApp.Attachment;
/**Create a new web page. Note that a parent site or page cannot have more than 500 child pages.

```
// This method can be called from either a site or a page.
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];

site.createAnnouncementsPage("New Announcement",
                             "new-announcement",
                             "<h1>Your announcement goes here</h1>");

page.createAnnouncementsPage("New Announcement",
                             "new-announcement-child",
                             "<h1>Your announcement goes here</h1>");
```
@deprecated
@param title the page title
@param name the page name
@param html the page content
@return The newly created ~~[`Page`](https://developers.google.com/apps-script/reference/sites/page.html)~~*/createWebPage(title:string,name:string,html:string):SitesApp.Page;
/**Deletes this site.

```
var site = SitesApp.getSite('example.com', 'mysite');
site.deleteSite();
```
@deprecated*/deleteSite():void;
/**Gets an array of descendant pages (direct and indirect), up to a limit of 200 pages.

```
var site = SitesApp.getSite("example.com", "mysite");
var pages = site.getAllDescendants();
```
@deprecated
@return an array of direct and indirect child pages*/getAllDescendants():SitesApp.Page[];
/**Gets an array of descendant pages, with optional advanced arguments.

```
var site = SitesApp.getSite("example.com", "mysite");
var descendants = site.getAllDescendants({
  type: SitesApp.PageType.WEB_PAGE,
  start: 0,
  max: 25,
  includeDrafts: false,
  includeDeleted: true,
  search: "target"
});

for(var i in descendants) {
  Logger.log(descendants[i].getName());
}
```
@deprecated
@param options JavaScript object fields defined in the Advanced Arguments section below
@return an array of direct and indirect child pages of the given type*/getAllDescendants(options:Object):SitesApp.Page[];
/**Retrieves a list of announcements for the given Google Site.

```
var site = SitesApp.getSite("example.com", "mysite");

var pages = site.getAnnouncements();
for(var i in pages) {
  Logger.log(pages[i].getTitle());
}
```
@deprecated
@return an array of announcement @link Page} instances*/getAnnouncements():SitesApp.Page[];
/**Retrieves a list of announcements pages for the given Google Site.

```
var site = SitesApp.getSite("example.com", "mysite");

var pages = site.getAnnouncementsPages();
for(var i in pages) {
  Logger.log(pages[i].getTitle());
}
```
@deprecated
@return an array of ~~[`Page`](https://developers.google.com/apps-script/reference/sites/page.html)~~ instances*/getAnnouncementsPages():SitesApp.Page[];
/**Retrieves a list of attachments for the given Google Site.

```
var site = SitesApp.getSite("example.com", "mysite");

var attachments = site.getAttachments();
for(var i in attachments) {
  // Only hosted attachments have content types
  Logger.log(attachments[i].getContentType());
}
```
@deprecated
@return an array of ~~[`Attachment`](https://developers.google.com/apps-script/reference/sites/attachment.html)~~ instances*/getAttachments():SitesApp.Attachment[];
/**Gets a particular child page.

```
var site = SitesApp.getSite("example.com", "mysite");
var pages = site.getChildByName("childPage");
```
@deprecated
@param name the child page name
@return the child page*/getChildByName(name:string):SitesApp.Page;
/**Gets an array of child pages, up to a limit of 200 pages.

```
var site = SitesApp.getSite("example.com", "mysite");
var pages = site.getChildren();
```
@deprecated
@return an array of direct child pages*/getChildren():SitesApp.Page[];
/**Gets an array of child pages, with optional advanced arguments.

```
var site = SitesApp.getSite("example.com", "mysite");
var childPages = site.getChildren({
  type: SitesApp.PageType.WEB_PAGE,
  start: 0,
  max: 25,
  includeDrafts: false,
  includeDeleted: true,
  search: "target"
});

for(var i in childPages) {
  Logger.log(childPages[i].getName());
}
```
@deprecated
@param options JavaScript object fields defined in the Advanced Arguments section below
@return an array of direct child pages of the given type*/getChildren(options:Object):SitesApp.Page[];
/**Retrieves list of collaborators for the site

```
var collaborators = SitesApp.getSite('example.com', 'mysite').getCollaborators();
for(var i in collaborators) {
  Logger.log(collaborators[i].getEmail())
}
```
@deprecated
@return an array containing [`User`](https://developers.google.com/apps-script/reference/sites/../base/user.html) instances representing collaborators*/getCollaborators():User[];
/**Retrieves a list of comments for the given Google Site.

```
var site = SitesApp.getSite("example.com", "mysite");

var comments = site.getComments();
for(var i in comments) {
  Logger.log(comments[i].getContent());
}
```
@deprecated
@return an array of ~~[`Comment`](https://developers.google.com/apps-script/reference/sites/comment.html)~~ instances*/getComments():SitesApp.Comment[];
/**Gets the list of editors for this ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~.
@return An array of users with edit permission.*/getEditors():User[];
/**Retrieves a list of File Cabinet pages for the given Google Site.

```
var site = SitesApp.getSite("example.com", "mysite");

var pages = site.getFileCabinetPages();
for(var i in pages) {
  Logger.log(pages[i].getTitle());
}
```
@deprecated
@return an array of ~~[`Page`](https://developers.google.com/apps-script/reference/sites/page.html)~~ instances*/getFileCabinetPages():SitesApp.Page[];
/**Retrieves a list of site List items for the given Google Site.

```
var site = SitesApp.getSite("example.com", "mysite");

var listItems = site.getListItems();
for(var i in listItems) {
  Logger.log(listItems[i].getLastUpdated());
}
```
@deprecated
@return an array of ~~[`ListItem`](https://developers.google.com/apps-script/reference/sites/list-item.html)~~ instances*/getListItems():SitesApp.ListItem[];
/**Retrieves a list of site List pages for the given Google Site.

```
var site = SitesApp.getSite("example.com", "mysite");

var pages = site.getListPages();
for(var i in pages) {
  Logger.log(pages[i].getTitle());
}
```
@deprecated
@return an array of ~~[`Page`](https://developers.google.com/apps-script/reference/sites/page.html)~~ instances*/getListPages():SitesApp.Page[];
/**Return the name of the site

```
var name = SitesApp.getSite('example.com', 'mysite').getName();
```
@deprecated
@return the name of this Site instance*/getName():string;
/**Retrieves list of owners for the site

```
var owners = SitesApp.getSite('example.com', 'mysite').getOwners();
for(var i in owners) {
  Logger.log(owners[i].getEmail())
}
```
@deprecated
@return an array containing [`User`](https://developers.google.com/apps-script/reference/sites/../base/user.html) instances representing owners*/getOwners():User[];
/**Retrieves the feed url of this Site.

```
var site = SitesApp.getSite('example.com', 'mysite');
var url = site.getSelfLink();
```
@deprecated
@return the url of this Site's feed*/getSelfLink():string;
/**Return the siteName of the site

```
var site = SitesApp.getSite('example.com', 'mysite');
var url = site.getSelfLink();
```
@deprecated
@return the siteName of the site*/getSiteName():string;
/**Return the summary of the web site

```
var summary = SitesApp.getSite('example.com', 'mysite').getSummary();
```
@deprecated
@return the summary of this site*/getSummary():string;
/**Returns all template pages.

```
var templates = SitesApp.getSite('example.com', 'mysite').getTemplates();
for(var i in templates) {
  Logger.log(templates[i].getName())
}
```
@deprecated
@return an array containing ~~[`Page`](https://developers.google.com/apps-script/reference/sites/page.html)~~ instances representing templates*/getTemplates():SitesApp.Page[];
/**Gets the theme of the site

```
var theme = SitesApp.getSite('example.com', 'mysite').getTheme();
```
@deprecated
@return the theme of this site*/getTheme():string;
/**Return the title of the site

```
var title = SitesApp.getSite('example.com', 'mysite').getTitle();
```
@deprecated
@return the title of this site*/getTitle():string;
/**Retrieves the url of this Site.

```
var url = SitesApp.getSite('example.com', 'mysite').getUrl();
```
@deprecated
@return the url of this Site instance*/getUrl():string;
/**Gets the list of viewers and commenters for this ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~.
@return An array of users with view or comment permission.*/getViewers():User[];
/**Retrieves a list of web attachments for the given Google Site.

```
var site = SitesApp.getSite("example.com", "mysite");

var attachments = site.getWebAttachments();
for(var i in attachments) {
  // Only web attachments have URLs
  Logger.log(attachments[i].getUrl());
}
```
@deprecated
@return an array of ~~[`Attachment`](https://developers.google.com/apps-script/reference/sites/attachment.html)~~ instances*/getWebAttachments():SitesApp.Attachment[];
/**Retrieves a list of web pages for the given Google Site.

```
var site = SitesApp.getSite("example.com", "mysite");

var pages = site.getWebPages();
for(var i in pages) {
  Logger.log(pages[i].getTitle());
}
```
@deprecated
@return an array of ~~[`Page`](https://developers.google.com/apps-script/reference/sites/page.html)~~ instances*/getWebPages():SitesApp.Page[];
/**Removes a collaborator from the site by user email

```
// This snippet removes the user with the given email from the collaborators list
var site = SitesApp.getSite('example.com', 'mysite');
site.removeCollaborator("eric@example.com");
```
@deprecated
@param email The email of the user to remove from the collaborators
@return the site instance for method chaining*/removeCollaborator(email:string):SitesApp.Site;
/**Removes a collaborator from the site

```
// This snippet removes the current user from the list of collaborators
var site = SitesApp.getSite('example.com', 'mysite');
site.removeCollaborator(Session.getActiveUser());
```
@deprecated
@param user A user to remove from the list of collaborators
@return the site instance for method chaining*/removeCollaborator(user:User):SitesApp.Site;
/**Removes the given user from the list of editors for the ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~. This method doesn't
block users from accessing the ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~ if they belong to a class of users who have
general access—for example, if the ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~ is shared with the user's entire
domain, or if the ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~ is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of viewers.
@param emailAddress The email address of the user to remove.
@return This ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~, for chaining.*/removeEditor(emailAddress:string):SitesApp.Site;
/**Removes the given user from the list of editors for the ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~. This method doesn't
block users from accessing the ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~ if they belong to a class of users who have
general access—for example, if the ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~ is shared with the user's entire
domain, or if the ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~ is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of viewers.
@param user A representation of the user to remove.
@return This ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~, for chaining.*/removeEditor(user:User):SitesApp.Site;
/**Removes owner from the site by user email

```
// This snippet removes the user with the given email from the owners list
var site = SitesApp.getSite('example.com', 'mysite');
site.removeOwner("eric@example.com");
```
@deprecated
@param email The email of the user to remove from the owners
@return the site instance for method chaining*/removeOwner(email:string):SitesApp.Site;
/**Removes owner from the site

```
// This snippet removes the current user from the list of owners
var site = SitesApp.getSite('example.com', 'mysite');
site.removeOwner(Session.getActiveUser());
```
@deprecated
@param user A user to remove from the list of owners
@return the site instance for method chaining*/removeOwner(user:User):SitesApp.Site;
/**Removes the given user from the list of viewers and commenters for the ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~. This
method has no effect if the user is an editor, not a viewer or commenter. This method also
doesn't block users from accessing the ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~ if they belong to a class of users who
have general access—for example, if the ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~ is shared with the user's
entire domain, or if the ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~ is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of editors.
@param emailAddress The email address of the user to remove.
@return This ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~ for chaining.*/removeViewer(emailAddress:string):SitesApp.Site;
/**Removes the given user from the list of viewers and commenters for the ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~. This
method has no effect if the user is an editor, not a viewer. This method also doesn't block
users from accessing the ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~ if they belong to a class of users who have general
access—for example, if the ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~ is shared with the user's entire domain, or
if the ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~ is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of editors.
@param user A representation of the user to remove.
@return This ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~ for chaining.*/removeViewer(user:User):SitesApp.Site;
/**Gets an array of descendant pages that match a search query, up to a limit of 200 pages.

```
var site = SitesApp.getSite("example.com", "mysite");
var matches = site.search("targetText");

for(var i in matches) {
  Logger.log(matches[i].getName());
}
```
@deprecated
@param query the full text search query to match
@return an array of direct and indirect child pages of the given type*/search(query:string):SitesApp.Page[];
/**Gets an array of descendant pages that match a search query, with optional advanced arguments.

```
var site = SitesApp.getSite("example.com", "mysite");
var childPages = site.getChildren({
  type: SitesApp.PageType.WEB_PAGE,
  start: 0,
  max: 25,
  includeDrafts: false,
  includeDeleted: true,
  search: "target"
});

for(var i in childPages) {
  Logger.log(childPages[i].getName());
}
```
@deprecated
@param query the full text search query to match
@param options JavaScript object fields defined in the Advanced Arguments section below
@return an array of direct and indirect child pages of the given type*/search(query:string,options:Object):SitesApp.Page[];
/**Set the summary of the web site

```
var site = SitesApp.getSite("example.com", "mysite");
// All of the setter methods return the site instance so setters
// can be chained
site.setTitle("My Site")
    .setSummary("This is my site")
    .setTheme("simple");
```
@deprecated
@param summary A string summary describing the site
@return the site for method chaining*/setSummary(summary:string):SitesApp.Site;
/**Sets the theme of the site

Theme must be a valid theme string. For an exhaustive list, write a test method and pass an
invalid value to setTheme(). The script will throw a Service error and return an exhaustive
list of available themes. The list of available themes is also available under Manage
Site->Themes. Theme name strings are generally the same as the theme name on the Themes page in
lower cases with spaces and special characters removed. For example, the string for "Terra:
Water" would be "terrawater".

```
var site = SitesApp.getSite("example.com", "mysite");
// All of the setter methods return the site instance so setters
// can be chained
site.setTitle("My Site")
    .setSummary("This is my site")
    .setTheme("simple");
```
@deprecated
@param theme a string name for the theme to set for this ~~[`Site`](https://developers.google.com/apps-script/reference/sites/site.html)~~
@return the site for method chaining*/setTheme(theme:string):SitesApp.Site;
/**Set the title of the site

```
var site = SitesApp.getSite("example.com", "mysite");
// All of the setter methods return the site instance so setters
// can be chained
site.setTitle("My Site")
    .setSummary("This is my site")
    .setTheme("simple");
```
@deprecated
@param title the new title of the site
@return the site for method chaining*/setTitle(title:string):SitesApp.Site;}interface PageType{}interface _PageType{ANNOUNCEMENT:PageType;ANNOUNCEMENTS_PAGE:PageType;FILE_CABINET_PAGE:PageType;LIST_PAGE:PageType;WEB_PAGE:PageType;}interface Page{
/**Add a new column to the list. Only valid for list pages.

```
var site = SitesApp.getSite("example.com", "mysite");

var page = site.getChildByName("listpage");
// Only valid on List pages. Check for the type like so:
//     if(page.getPageType() == SitesApp.PageType.LIST_PAGE))
var columns = page.addColumn("new-column");
```
@deprecated
@param name the new column's name
@return the newly created column*/addColumn(name:string):SitesApp.Column;
/**Deprecated. Add a comment to the page.

```
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];

page.addComment("This is a comment created automatically by a script using the account " +
                "of the user running the script");
```
@deprecated
@param content the comment content
@return the newly created comment*/addComment(content:string):SitesApp.Comment;
/**Add an attachment to the page.

```
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];

// Create a new blob and attach it. Many useful functions also return
// blobs file uploads, URLFetch
var blob = Utilities.newBlob("Here is some data", "text/plain", "data.txt");

// Note that the filename must be unique or this call will fail
page.addHostedAttachment(blob);
```
@deprecated
@param blob the data for the attachment
@return the newly created attachment*/addHostedAttachment(blob:BlobSource):SitesApp.Attachment;
/**Add an attachment to the page. This version of the function allows for a description.

```
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];

// Create a new blob and attach it. Many useful: functions also return
// blobs file uploads, URLFetch
var blob = Utilities.newBlob("Here is some data", "text/plain", "data.txt");

// Note that the filename must be unique or this call will fail
page.addHostedAttachment(blob, "Some newly created data");
```
@deprecated
@param blob the data for the attachment
@param description a description of the attachment
@return the newly created attachment*/addHostedAttachment(blob:BlobSource,description:string):SitesApp.Attachment;
/**Add a list item to the list. Only valid for list pages.

```
var site = SitesApp.getSite("example.com", "mysite");

var page = site.getChildByName("listpage");
// Only valid on List pages. Check for the type like so:
//     if(page.getPageType() == SitesApp.PageType.LIST_PAGE))
// Returns only one item
page.addListItem([ "John", "Smith", "123 Main St"]);
```
@deprecated
@param values the values for each column
@return the newly created ~~[`ListItem`](https://developers.google.com/apps-script/reference/sites/list-item.html)~~*/addListItem(values:string[]):SitesApp.ListItem;
/**Add a web attachment to the page. Only valid for file cabinet pages.

Web attachments are links - they are not actually hosted by Google Sites.

```
var site = SitesApp.getSite("example.com", "mysite");
// fetch the child - this must be a File Cabinet page
// to programmatically check this, do a comparison:
//    if(page.getPageType() == SitesApp.PageType.FILE_CABINET_PAGE)
var page = site.getChildByName("files");
page.addWebAttachment("Google Robots file",
                      "This is Google's robots.txt file",
                      "http://www.google.com/robots.txt");
```
@deprecated
@param title the title of the attachment
@param description a description of the attachment
@param url the url of the file being attached
@return the newly created attachment*/addWebAttachment(title:string,description:string,url:string):SitesApp.Attachment;
/**Create an announcements for this page. Only valid for announcement pages.

```
var site = SitesApp.getSite("example.com", "mysite");

// This snippet will only work with announcement pages - this is different
// from a page that is an announcement (individual announcements). To check
// if this method can be called:
//    if(page.getPageType() == SitesApp.PageType.ANNOUNCEMENTS_PAGE))
var page = site.getChildByName("news");
page.createAnnouncement("Breaking news!", "<h1>Apps Script rocks!</h1>");
```
@deprecated
@param title the page title
@param html the page content
@return the newly created Announcements*/createAnnouncement(title:string,html:string):SitesApp.Page;
/**Create an announcements for this page. Only valid for announcement pages.

```
var site = SitesApp.getSite("example.com", "mysite");

// This snippet will only work with announcement pages - this is different
// from a page that is an announcement (individual announcements). To check
// if this method can be called:
//    if(page.getPageType() == SitesApp.PageType.ANNOUNCEMENTS_PAGE))
var page = site.getChildByName("news");
page.createAnnouncement("Breaking news!",
                        "<h1>Apps Script rocks!</h1>",
                        true);
```
@deprecated
@param title the page title
@param html the page content
@param asDraft whether to make the announcement a draft
@return the newly created Announcements*/createAnnouncement(title:string,html:string,asDraft:boolean):SitesApp.Page;
/**Create a new announcements page. Note that a parent site or page cannot have more than 500
child pages.

```
// This method can be called from both a Site instance
// as well as a Page instance
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];

site.createAnnouncementsPage("New Announcement",
                             "new-announcement",
                             "<h1>Your announcement goes here</h1>");

page.createAnnouncementsPage("New Announcement",
                             "new-announcement-child",
                             "<h1>Your announcement goes here</h1>");
```
@deprecated
@param title the page title
@param name the page name
@param html the page content
@return the newly created ~~[`Page`](https://developers.google.com/apps-script/reference/sites/page.html)~~*/createAnnouncementsPage(title:string,name:string,html:string):SitesApp.Page;
/**Create a new file-cabinet page. Note that a parent site or page cannot have more than 500 child
pages.

```
// This method can be called from either a site or a page.
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];

site.createFileCabinetPage("New File Cabinet",
                           "new-file-cabinet",
                           "<h1>Your HTML here</h1>");

page.createFileCabinetPage("New File Cabinet",
                             "new-file-cabinet-child",
                             "<h1>Your HTML here</h1>");
```
@deprecated
@param title the page title
@param name the page name
@param html the page content
@return The newly created ~~[`Page`](https://developers.google.com/apps-script/reference/sites/page.html)~~*/createFileCabinetPage(title:string,name:string,html:string):SitesApp.Page;
/**Create a new list page. Note that a parent site or page cannot have more than 500 child pages.

```
// This method can be called from either a site or a page.
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];

site.createListPage("New List Page",
                    "new-list-page",
                    "<h1>Your List Page HTML here</h1>",
                    [ "col1", "col2" ]);

page.createListPage("New List Page",
                    "new-list-page-child",
                    "<h1>Your List Page HTML here</h1>",
                    [ "col1", "col2" ]);
```
@deprecated
@param title the page title
@param name the page name
@param html the page content
@param columnNames the column names used for the list
@return The newly created ~~[`Page`](https://developers.google.com/apps-script/reference/sites/page.html)~~*/createListPage(title:string,name:string,html:string,columnNames:string[]):SitesApp.Page;
/**Create a new page from a template. Note that a parent site or page cannot have more than 500
child pages.

```
// This method can be called from either a site or a page.
var site = SitesApp.getSite("example.com", "mysite");
var template = site.getTemplates()[0];

// If an invalid template is passed, this will throw an "Invalid Argument" error.
site.createPageFromTemplate("ClonedPage", "cloned-page", template);
```
@deprecated
@param title the page title
@param name the page name
@param template the template page
@return the newly created ~~[`Page`](https://developers.google.com/apps-script/reference/sites/page.html)~~*/createPageFromTemplate(title:string,name:string,template:SitesApp.Page):SitesApp.Page;
/**Create a new web page. Note that a parent site or page cannot have more than 500 child pages.

```
// This method can be called from either a site or a page.
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];

site.createAnnouncementsPage("New Announcement",
                             "new-announcement",
                             "<h1>Your announcement goes here</h1>");

page.createAnnouncementsPage("New Announcement",
                             "new-announcement-child",
                             "<h1>Your announcement goes here</h1>");
```
@deprecated
@param title the page title
@param name the page name
@param html the page content
@return The newly created ~~[`Page`](https://developers.google.com/apps-script/reference/sites/page.html)~~*/createWebPage(title:string,name:string,html:string):SitesApp.Page;
/**Deletes this page.

```
var site = SitesApp.getSite("example.com", "mysite");

// Delete ALL the pages!
var pages = site.getAllDescendants();
for(var i in pages) {
  pages[i].deletePage();
}
```
@deprecated*/deletePage():void;
/**Gets an array of descendant pages (direct and indirect), up to a limit of 200 pages.

```
var site = SitesApp.getSite("example.com", "mysite");
var pages = site.getAllDescendants();
```
@deprecated
@return an array of direct and indirect child pages*/getAllDescendants():SitesApp.Page[];
/**Gets an array of descendant pages, with optional advanced arguments.

```
var site = SitesApp.getSite("example.com", "mysite");
var descendants = site.getAllDescendants({
  type: SitesApp.PageType.WEB_PAGE,
  start: 0,
  max: 25,
  includeDrafts: false,
  includeDeleted: true,
  search: "target"
});

for(var i in descendants) {
  Logger.log(descendants[i].getName());
}
```
@deprecated
@param options JavaScript object fields defined in the Advanced Arguments section below
@return an array of direct and indirect child pages of the given type*/getAllDescendants(options:Object):SitesApp.Page[];
/**Get the announcements for this page. Only valid for announcement pages.

```
var site = SitesApp.getSite("example.com", "mysite");

// This snippet will only work with announcement pages - this is different
// from a page that is an announcement (individual announcements). To check
// if this method can be called:
//    if(page.getPageType() == SitesApp.PageType.ANNOUNCEMENTS_PAGE))
var page = site.getChildByName("news");
var announcements = page.getAnnouncements();

for(var i in announcements) {
  Logger.log(announcements[i].getHtmlContent());
}
```
@deprecated
@return an array of Announcements*/getAnnouncements():SitesApp.Page[];
/**Get the announcements for this page. Only valid for announcement pages.

```
var site = SitesApp.getSite("example.com", "mysite");

// This snippet will only work with announcement pages - this is different
// from a page that is an announcement (individual announcements). To check
// if this method can be called:
//    if(page.getPageType() == SitesApp.PageType.ANNOUNCEMENTS_PAGE))
var page = site.getChildByName("news");
var announcements = page.getAnnouncements({ start: 0,
                                            max: 20,
                                            includeDrafts: false,
                                            includeDeleted: false,
                                            search: "Breaking" });

for(var i in announcements) {
  Logger.log(announcements[i].getHtmlContent());
}
```
@deprecated
@param optOptions A JavaScript object containing advanced parameters
@return an array of Announcements*/getAnnouncements(optOptions:Object):SitesApp.Page[];
/**Get the attachments for this page.

```
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];

var attachments = page.getAttachments();
for(var i in attachments) {
  Logger.log(attachments[i].getTitle());
}
```
@deprecated
@return an array of Attachments*/getAttachments():SitesApp.Attachment[];
/**Get the attachments for this page.

```
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];

// This returns only one attachment
var attachments = page.getAttachments({ start: 0, max: 1});
for(var i in attachments) {
  Logger.log(attachments[i].getTitle());
}
```
@deprecated
@param optOptions a JavaScript object containing optional parameters
@return an array of Attachments*/getAttachments(optOptions:Object):SitesApp.Attachment[];
/**Get the emails of the authors of the page

```
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];
var authors = page.getAuthors();

for(var i in authors) {
  Logger.log(authors[i]);
}
```
@deprecated
@return an array of author email addresses*/getAuthors():string[];
/**Gets a particular child page.

```
var site = SitesApp.getSite("example.com", "mysite");
var pages = site.getChildByName("childPage");
```
@deprecated
@param name the child page name
@return the child page*/getChildByName(name:string):SitesApp.Page;
/**Gets an array of child pages, up to a limit of 200 pages.

```
var site = SitesApp.getSite("example.com", "mysite");
var pages = site.getChildren();
```
@deprecated
@return an array of direct child pages*/getChildren():SitesApp.Page[];
/**Gets an array of child pages, with optional advanced arguments.

```
var site = SitesApp.getSite("example.com", "mysite");
var childPages = site.getChildren({
  type: SitesApp.PageType.WEB_PAGE,
  start: 0,
  max: 25,
  includeDrafts: false,
  includeDeleted: true,
  search: "target"
});

for(var i in childPages) {
  Logger.log(childPages[i].getName());
}
```
@deprecated
@param options JavaScript object fields defined in the Advanced Arguments section below
@return an array of direct child pages of the given type*/getChildren(options:Object):SitesApp.Page[];
/**Get the columns for the list. Only valid for list pages.

```
var site = SitesApp.getSite("example.com", "mysite");

var page = site.getChildByName("listpage");
// Only valid on List pages. Check for the type like so:
//     if(page.getPageType() == SitesApp.PageType.LIST_PAGE))
var columns = page.getColumns();

for(var i in columns) {
  Logger.log(columns[i].getName());
}
```
@deprecated
@return an array of ~~[`Column`](https://developers.google.com/apps-script/reference/sites/column.html)~~ instances*/getColumns():SitesApp.Column[];
/**Deprecated. Get the comments for this page.

```
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];

var comments = page.getComments();
for(var i in comments) {
  Logger.log(comments[i].getContent());
}
```
@deprecated
@return an array of Comments.*/getComments():SitesApp.Comment[];
/**Deprecated. Get the comments for this page.

```
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];

// Return only one comment
var comments = page.getComments({ start:0, max: 1});
for(var i in comments) {
  Logger.log(comments[i].getContent());
}
```
@deprecated
@param optOptions a JavaScript object containing optional parameters
@return an array of Comments.*/getComments(optOptions:Object):SitesApp.Comment[];
/**Return the date this page was first published.

```
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];
Logger.log(page.getName() + " was published " + page.getDatePublished());
```
@deprecated
@return the date of original publication*/getDatePublished():Date;
/**Get the HTML content of the page.

```
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];
Logger.log(page.getHtmlContent());
```
@deprecated
@return the html content*/getHtmlContent():string;
/**Returns whether the page is in draft mode. Only valid for announcements.

```
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];

Logger.log("Is this Announcement Page a draft?", page.getIsDraft());
```
@deprecated
@return whether the page is in draft mode*/getIsDraft():boolean;
/**Return the last edit date, which includes only content edits.

```
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];
Logger.log(page.getName() + " was last updated " + page.getLastEdited());
```
@deprecated
@return the date the page was last updated, including only content edits*/getLastEdited():Date;
/**Return the last updated date, which includes non-content changes like moving.

```
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];
Logger.log(page.getName() + " was last updated " + page.getLastUpdated());
```
@deprecated
@return the date the page was last updated with non-content changes*/getLastUpdated():Date;
/**Get the list items for the list. Only valid for list pages.

```
var site = SitesApp.getSite("example.com", "mysite");

var page = site.getChildByName("listpage");
// Only valid on List pages. Check for the type like so:
//     if(page.getPageType() == SitesApp.PageType.LIST_PAGE))
var items = page.getListItems();

for(var i in items) {
  Logger.log(items[i].getValueByName("Status"));
}
```
@deprecated
@return an array of ~~[`ListItem`](https://developers.google.com/apps-script/reference/sites/list-item.html)~~ instances*/getListItems():SitesApp.ListItem[];
/**Get the list items for the list. Only valid for list pages.

```
var site = SitesApp.getSite("example.com", "mysite");

var page = site.getChildByName("listpage");
// Only valid on List pages. Check for the type like so:
//     if(page.getPageType() == SitesApp.PageType.LIST_PAGE))
// Returns only one item
var items = page.getListItems({ start:0, max: 1 });

for(var i in items) {
  Logger.log(items[i].getValueByName("Status"));
}
```
@deprecated
@param optOptions A JavaScript object of optional parameters
@return an array of ~~[`ListItem`](https://developers.google.com/apps-script/reference/sites/list-item.html)~~ instances*/getListItems(optOptions:Object):SitesApp.ListItem[];
/**Return the page's name.

```
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];
Logger.log(page.getName());
```
@deprecated
@return the name of this page*/getName():string;
/**Deprecated. Replaced with getName for consistency.

```
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];
Logger.log(page.getPageName());
```
@deprecated
@return the name of this page*/getPageName():string;
/**Return the type of this page as a SitesApp.PageType enum.

```
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];
var pageType = page.getPageType();
if(pageType == SitesApp.PageType.WEB_PAGE) {
   Logger.log(page.getName() + " is a Web Page");
}
```
@deprecated
@return a PageType enum telling whether this is a Web, List, Announcement or File Cabinet Page*/getPageType():SitesApp.PageType;
/**Return the parent of this page.

```
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];
Logger.log(page.getName() + " parent: " + page.getParent().getName());
```
@deprecated
@return the parent page of this page*/getParent():SitesApp.Page;
/**Deprecated. Returns the gData feed link of this page.

```
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];
Logger.log(page.getSelfLink());
```
@deprecated
@return the gData feed link*/getSelfLink():string;
/**Returns the plain-text page content.

```
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];
Logger.log(page.getName() + " content: " + page.getTextContent());
```
@deprecated
@return the plain-text content of the page*/getTextContent():string;
/**Return the page's title.

```
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];
Logger.log(page.getTitle());
```
@deprecated
@return the title of this page*/getTitle():string;
/**Get the url of the page.

```
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];
Logger.log(page.getUrl());
```
@deprecated
@return the url of the page*/getUrl():string;
/**Returns whether a page has been deleted.
@deprecated
@return whether the page has been deleted*/isDeleted():boolean;
/**Returns whether this page is a copyable template.

```
var site = SitesApp.getSite("example.com", "mysite");
var firstTemplate = site.getTemplates()[0];
if(firstTemplate.isTemplate()) {
  Logger.log("This will always return true");
}
```
@deprecated
@return whether this page is a template*/isTemplate():boolean;
/**Publish this page as a copyable template.

```
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];

// Turn this page into a publishable template
page.publishedAsTemplate("template-name");
```
@deprecated
@param name The name of the new template
@return the newly published template*/publishAsTemplate(name:string):SitesApp.Page;
/**Gets an array of descendant pages that match a search query, up to a limit of 200 pages.

```
var site = SitesApp.getSite("example.com", "mysite");
var matches = site.search("targetText");

for(var i in matches) {
  Logger.log(matches[i].getName());
}
```
@deprecated
@param query the full text search query to match
@return an array of direct and indirect child pages of the given type*/search(query:string):SitesApp.Page[];
/**Gets an array of descendant pages that match a search query, with optional advanced arguments.

```
var site = SitesApp.getSite("example.com", "mysite");
var childPages = site.getChildren({
  type: SitesApp.PageType.WEB_PAGE,
  start: 0,
  max: 25,
  includeDrafts: false,
  includeDeleted: true,
  search: "target"
});

for(var i in childPages) {
  Logger.log(childPages[i].getName());
}
```
@deprecated
@param query the full text search query to match
@param options JavaScript object fields defined in the Advanced Arguments section below
@return an array of direct and indirect child pages of the given type*/search(query:string,options:Object):SitesApp.Page[];
/**Set the HTML content of the page.

```
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];
page.setHtmlContent("<h1>New Page Content</h1>");
```
@deprecated
@param html the new content
@return this Page for chaining*/setHtmlContent(html:string):SitesApp.Page;
/**Sets whether the page is in draft mode. Only valid for announcements.

```
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];

// Take the page out of draft mode
page.setIsDraft(false);
```
@deprecated
@param draft the new status
@return this Page for chaining*/setIsDraft(draft:boolean):SitesApp.Page;
/**Set this page's name.

```
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];
page.setName("new-name");
```
@deprecated
@param name the new name
@return this Page for chaining*/setName(name:string):SitesApp.Page;
/**Set the parent of this page.

```
var site = SitesApp.getSite("example.com", "mysite");
var child = site.getChildByName("childToBeMoved");
var parent = site.getChildByName("newParent");
child.setParent(parent);
```
@deprecated
@param parent the new parent
@return this Page for chaining*/setParent(parent:SitesApp.Page):SitesApp.Page;
/**Set the page's title.

```
var site = SitesApp.getSite("example.com", "mysite");
var page = site.getChildren()[0];
page.setTitle("New Title");
```
@deprecated
@param title the new title
@return this Page for chaining*/setTitle(title:string):SitesApp.Page;}interface ListItem{
/**Deletes this list item.

```
// This code sample deletes all list items from a List page
// Running this code sample against a Page that is a standard web page will
// cause getListItems() to throw an exception
var page = SitesApp.getSite('demositeappsscript').getChildByName('mylistpage');
var items = page.getListItems();
for(var i = 0; i < items.length; i++) {
  items[i].deleteListItem();
}
```
@deprecated*/deleteListItem():void;
/**Return the date this list item was first published.

```
var page = SitesApp.getSite('example.com', 'mysite').getChildByName('mylistpage');
var items = page.getListItems();
var date = items[0].getDatePublished();
```
@deprecated
@return the date of original publication*/getDatePublished():Date;
/**Return the date this comment was last updated.

```
var page = SitesApp.getSite('example.com', 'mysite').getChildByName('mylistpage');
var items = page.getListItems();
var date = items[0].getLastUpdated();
```
@deprecated
@return the last updated date*/getLastUpdated():Date;
/**Get the parent page of this list item.

```
var page = SitesApp.getSite('example.com', 'mysite').getChildByName('mylistpage');
var items = page.getListItems();
// parentPage will equal page
var parentPage = items[0].getParent();
```
@deprecated
@return the parent page*/getParent():SitesApp.Page;
/**Get the value of this ListItem for a numbered column.

```
var page = SitesApp.getSite("demositeappsscript").getChildByName("mylistpage");
var listItem = page.getListItems()[0];

// Remember that rows are 0 indexed. This returns the item in the first column
// of the list. If an index that is greater than the number of columns is used,
// the script will throw an "InvalidArgument: index" exception.
var value = listItem.getValueByIndex(5);
```
@deprecated
@param index the column to get the value of
@return the value of that column*/getValueByIndex(index:Integer):string;
/**Get the value of this ListItem for a named column.

```
var page = SitesApp.getSite("demositeappsscript").getChildByName("mylistpage");
var listItem = page.getListItems()[0];

// Suppose we have a column named "Owner" - this will let us fetch the value
// for the list item
var value = listItem.getValueByName("Owner");
Logger.log(value);
```
@deprecated
@param name the column to get the value of
@return the value of that column*/getValueByName(name:string):string;
/**Set the parent page of this list item.

```
var page = SitesApp.getSite('example.com', 'mysite').getChildByName('mylistpage');
var secondListPage = SitesApp.getSite('example.com', 'mysite')
                             .getChildByName('secondlistpage');
var items = page.getListItems();

// Returns secondListPage
var parentPage = items[0].setParent(secondListPage).getParent();
```
@deprecated
@param parent the new parent
@return this ListItem for chaining*/setParent(parent:SitesApp.Page):SitesApp.ListItem;
/**Set the value of this ListItem for a numbered column. For URL columns the value must be an
XHTML anchor tag, with XML entities escaped.

```
var page = SitesApp.getSite("example.com", "mysite").getChildByName("mylistpage");
var listItem = page.getListItems()[0];
listItem.setValueByIndex(1, 'This is the new value');
listItem.setValueByIndex(2, '<a href="http://www.example.com?a=1&amp;b=2">Example</a>');
```
@deprecated
@param index the column to set the value of
@param value the new value
@return this ListItem for chaining*/setValueByIndex(index:Integer,value:string):SitesApp.ListItem;
/**Set the value of this ListItem for a numbered column. For URL columns the value must be an
XHTML anchor tag, with XML entities escaped.

```
var page = SitesApp.getSite("demositeappsscript").getChildByName("mylistpage");
var listItem = page.getListItems()[0];
listItem.setValueByName('Owner', 'Eric');
listItem.setValueByName('Page', '<a href="http://www.example.com?a=1&amp;b=2">Example</a>');
```
@deprecated
@param name the column to set the value of
@param value the new value
@return this ListItem for chaining*/setValueByName(name:string,value:string):SitesApp.ListItem;}interface Comment{
/**Deletes this comment.

```
var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
var comments = pages[0].getComments();

// Let's delete all of Eric's comments
for(var i = 0; i < comments.length; i++) {
  if(comments[i].getAuthorEmail() == "eric@example.com") {
    comments[i].deleteComment();
  }
}
```
@deprecated*/deleteComment():void;
/**Gets the email address of the author of this comment.
@deprecated
@return the author's email*/getAuthorEmail():string;
/**Gets the name of the author of this comment.

```
var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
var comments = pages[0].getComments();
var comment = comments[0];
var authorEmail = comment.getAuthorEmail();
```
@deprecated
@return the author's name*/getAuthorName():string;
/**Return the content of this comment as a String.

```
var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
var comments = pages[0].getComments();
var content = comments[0].getContent()
```
@deprecated
@return the comment content*/getContent():string;
/**Return the date this comment was originally published.

```
var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
var comments = pages[0].getComments();
var date = comments[0].getDatePublished();
```
@deprecated
@return the date of original publication*/getDatePublished():Date;
/**Return the date this comment was last updated.

```
var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
var comments = pages[0].getComments();
var date = comments[0].getLastUpdated();
```
@deprecated
@return the last updated date*/getLastUpdated():Date;
/**Get the parent page of this comment.

```
var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
var comments = pages[0].getComments();
var comment = comments[0];

// parentPage should be the same page as pages[0]
var parentPage = comment.getParent();
```
@deprecated
@return the parent page*/getParent():SitesApp.Page;
/**Set the content of this comment.

```
var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
var comments = pages[0].getComments();
var comment = comments[0];
 comment.setContent("New Content");

// Note that this returns a Comment, so you can chain the method calls
var updatedContent = comment.setContent("New Content")
                            .getContent();
```
@deprecated
@param content the new content
@return this Comment for chaining*/setContent(content:string):SitesApp.Comment;
/**Set the parent page of this comment.

```
var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
var comments = pages[0].getComments();
var comment = comments[0];

// Let's say we want to move the comment to its parent's next neighbor ..
// This will only work if the example site has multiple children
var newParentPage = comment.setParent(pages[1]).getParent();
```
@deprecated
@param parent the new parent
@return this Comment for chaining*/setParent(parent:SitesApp.Page):SitesApp.Comment;}interface Column{
/**Deletes this column.

```
var page = SitesApp.getSite('example.com', 'mysite').getChildByName('mylistpage');
var columns = page.getColumns();
columns[0].deleteColumn();
```
@deprecated*/deleteColumn():void;
/**Gets the name of this column.

```
var page = SitesApp.getSite('example.com', 'mysite').getChildByName('mylistpage');
var columns = page.getColumns();
var name = columns[0].getName();
```
@deprecated
@return the column name*/getName():string;
/**Returns the List Page this column belongs to.

```
var page = SitesApp.getSite('example.com', 'mysite').getChildByName('mylistpage');
var columns = page.getColumns();

// This returns a reference to page
var parentPage = columns[0].getParent();
```
@deprecated
@return the page this column belongs to*/getParent():SitesApp.Page;
/**Sets the name of this column.

```
var page = SitesApp.getSite('example.com', 'mysite').getChildByName('mylistpage');
var columns = page.getColumns();
columns[0].setName("New Name");
```
@deprecated
@param name the new name
@return this Column for chaining*/setName(name:string):SitesApp.Column;}interface AttachmentType{}interface _AttachmentType{HOSTED:AttachmentType;WEB:AttachmentType;}interface Attachment{
/**Deletes this attachment.

```
var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
var attachments = pages[0].getAttachments();
attachments[0].deleteAttachment();
```
@deprecated*/deleteAttachment():void;
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
/**Return the type of this attachment (HOSTED or WEB).

```
var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
var attachments = pages[0].getAttachments();
var attType = attachments[0].getAttachmentType();

// This will log "Hosted"
Logger.log(attType);

// Since this returns an AttachmentType and not a String, for the
// purposes of equivalence we want to either do this or cast the
// type to a String
if(attType ==  SitesService.AttachmentType.HOSTED) {
  Logger.log("This is a match");
}

// The above is the same as
if(String(attType) == "Hosted") {
   Logger.log("This is also a match");
}
```
@deprecated
@return the attachment type*/getAttachmentType():SitesApp.AttachmentType;
/**Return the data inside this object as a blob.
@return The data as a blob.*/getBlob():Blob;
/**Return the mime type of this attachment. Fails for web attachments.

```
var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
var attachments = pages[0].getAttachments();
var contentType = attachments[0].getContentType();
```
@deprecated
@return the attachment mime type*/getContentType():string;
/**Return the date this attachment was first published.

```
var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
var attachments = pages[0].getAttachments();
var date = attachments[0].getDatePublished();
```
@deprecated
@return the date of original publication*/getDatePublished():Date;
/**Return the description of this attachment.

```
var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
var attachments = pages[0].getAttachments();
var description = attachments[0].getDescription();
```
@deprecated
@return the attachment description*/getDescription():string;
/**Return the date this attachment was last updated.

```
var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
var attachments = pages[0].getAttachments();
var date = attachments[0].getLastUpdated();
```
@deprecated
@return the last updated date*/getLastUpdated():Date;
/**Get the parent page of this attachment.

```
var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
var attachments = pages[0].getAttachments();

// This is equal to pages[0]
var parent = attachments[0].getParent();
```
@deprecated
@return the parent page*/getParent():SitesApp.Page;
/**Return the title of this attachment.

```
var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
var attachments = pages[0].getAttachments();
var title = attachments[0].getTitle();
```
@deprecated
@return the attachment title*/getTitle():string;
/**Return the download url for this attachment.

```
var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
var attachments = pages[0].getAttachments();
var url = attachments[0].getUrl();
```
@deprecated
@return the download url*/getUrl():string;
/**Set the mime type of this attachment. Fails for web attachments.

```
var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
var attachments = pages[0].getAttachments();
attachments[0].setContentType("text/plain");
```
@deprecated
@param contentType the new mime type
@return this Attachment for chaining*/setContentType(contentType:string):SitesApp.Attachment;
/**Set the descripton of this attachment.

```
var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
var attachments = pages[0].getAttachments();

// This is an example of chaining in action
attachments[0].setTitle("New Title")
              .setDescription("New Description");
```
@deprecated
@param description the new description
@return this Attachment for chaining*/setDescription(description:string):SitesApp.Attachment;
/**Set the actual data of this attachment. Fails for web attachments.

```
var pages = SitesApp.getSite('demositeappsscript').getChildren();
var attachments = pages[0].getAttachments();

// This snippet demonstrates how to create a new text blob and attach it
// to the page
var blob = Utilities.newBlob("This data is now the attachment content");

// We must set a filename since we created the blob from String data
// instead of something like a URL source
blob.setName("attachment.txt");
attachments[0].setTitle("New Title")
              .setDescription("New Description")
              .setContentType("text/plain")
              .setFrom(blob);
```
@deprecated
@param blob the new data
@return this Attachment for chaining*/setFrom(blob:BlobSource):SitesApp.Attachment;
/**Set the parent page of this attachment.

```
var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
var attachments = pages[0].getAttachments();
// Sets the parent page to be the next sibling
attachments[0].setParent(pages[1]);
```
@deprecated
@param parent the new parent
@return this Attachment for chaining*/setParent(parent:SitesApp.Page):SitesApp.Attachment;
/**Set the title of this attachment.

```
var pages = SitesApp.getSite('example.com', 'mysite').getChildren();
var attachments = pages[0].getAttachments();

// This is an example of chaining in action
attachments[0].setTitle("New Title")
              .setDescription("New Description");
```
@deprecated
@param title the new title
@return this Attachment for chaining*/setTitle(title:string):SitesApp.Attachment;
/**Sets the download url for this attachment. Only valid for web attachments.

```
var pages = SitesApp.getSite('demositeappsscript').getChildren();
var attachments = pages[0].getAttachments();

attachments[0].setTitle("New Web Attachment")
              .setDescription("New Description")
              .setUrl("http://example.com/files/your_file.txt");
```
@deprecated
@return this Attachment for chaining*/setUrl(url:string):SitesApp.Attachment;}}const SitesApp:SitesApp;