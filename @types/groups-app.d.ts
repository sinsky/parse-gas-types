interface GroupsApp {
  Role: GroupsApp._Role;
  /**Retrieves the group having the specified email address. Throws an exception if the group does
not exist or if you do not have permission to see it.

Here is an example that gets a group by its email address and outputs whether the current
user is a member. Before running, replace the sample email address with a real group's email.

```
var group = GroupsApp.getGroupByEmail("example@googlegroups.com");
var currentUser = Session.getActiveUser();
if (group.hasUser(currentUser)) {
  Logger.log("You are a member of this group.");
}
else {
  Logger.log("You are not a member of this group.");
}
```
@param email The email address of the group to retrieve.
@return The group with the specified email address.*/ getGroupByEmail(
    email: string,
  ): GroupsApp.Group;
  /**Retrieves all the groups of which you are a direct member (or a pending member). This is an
empty list if you are not in any groups. Throws an exception if the group does not exist or if
you do not have permission to see it.

Here's an example of how to print the email address for every group the user belongs to:

```
function showMyGroups() {
  var groups = GroupsApp.getGroups();
  var str = 'You are in ' + groups.length + ' groups: ';
  for (var i = 0; i < groups.length; i++) {
    var group = groups[i];
    str = str + group.getEmail() + ' ';
  }
  Logger.log(str);
}
```

Note that if you are a member of a group, B, which is itself a member of another group, A, then
you are _indirectly_ subscribed to group A. Even though you receive copies of messages
sent to the "parent" group A, you are not actually subscribed to that group.

You can use [`Group.getRole(email)`](https://developers.google.com/apps-script/reference/groups/group.html#getRole(String)) to determine if you are an existing or pending
member of the returned groups.
@return The list of groups of which the user is a direct member.*/ getGroups(): GroupsApp.Group[];
}
module GroupsApp {
  interface Role {}
  interface _Role {
    /**A user who has been banned from a group and cannot attempt to join it.*/ BANNED: Role;
    /**A user who has been invited to join a group by an owner or manager of the group but who has not
yet accepted the invitation.*/ INVITED: Role;
    /**The manager of a group.*/ MANAGER: Role;
    /**A user who is a member of this group but is neither an owner nor a manager.*/ MEMBER: Role;
    /**The owner of a group.*/ OWNER: Role;
    /**A user who has requested to join a group but who has not yet been approved by an owner or
manager.*/ PENDING: Role;
  }
  interface Group {
    /**Gets this group's email address.

This example lists the email address of all the groups the user belongs to.

```
function listMyGroupEmails() {
  var groups = GroupsApp.getGroups();
  for (var i = 0; i < groups.length; i++) {
    console.log(groups[i].getEmail());
  }
}
```
@return The group's email address.*/ getEmail(): string;
    /**Retrieves the direct child groups of the group. Throws an exception if you do not have
permission to view the group's member list.

In addition to this method, you can use the [Admin SDK Directory](/apps-script/advanced/admin-sdk-directory) advanced service to
retrieve group members in a domain.

```
function listGroupMembers() {
  var GROUP_EMAIL = "example@googlegroups.com";
  var group = GroupsApp.getGroupByEmail(GROUP_EMAIL);
  var childGroups = group.getGroups();
  console.log("Group " + GROUP_EMAIL + " has " + childGroups.length + " groups:");
  for (var i = 0; i < childGroups.length; i++) {
    var childGroup = childGroups[i];
    console.log(childGroup.getEmail());
  }
}
```
@return All the direct child groups of the group.*/ getGroups(): GroupsApp.Group[];
    /**Retrieves a user's role in the context of the group. A user who is a direct member of a group
has exactly one role within that group. Throws an exception if the user is not a member of the
group or if you do not have permission to view the group's member list.

This example lists the owners of a group:

```
var group = GroupsApp.getGroupByEmail("example@googlegroups.com");
var users = group.getUsers();
console.log('These are the group owners:');
for (var i = 0; i < users.length; i++) {
  var user = users[i];
  if (group.getRole(user.getEmail()) == GroupsApp.Role.OWNER) {
    console.log(user.getEmail());
  }
}
```
@param email A user's email address.
@return That user's role within the group.*/ getRole(
      email: string,
    ): GroupsApp.Role;
    /**Retrieves a user's role in the context of the group. A user who is a direct member of a group
has exactly one role within that group. Throws an exception if the user is not a member of the
group or if you do not have permission to view the group's member list.

This example lists the owners of a group:

```
var group = GroupsApp.getGroupByEmail("example@googlegroups.com");
var users = group.getUsers();
console.log('These are the group owners:');
for (var i = 0; i < users.length; i++) {
  var user = users[i];
  if (group.getRole(user) == GroupsApp.Role.OWNER) {
    console.log(user.getEmail());
  }
}
```
@param user The user whose role to retrieve.
@return That user's role within the group.*/ getRole(
      user: User,
    ): GroupsApp.Role;
    /**Retrieves users' roles in the context of the group. A user who is a direct member of a group
has exactly one role within that group. Throws an exception if any user is not a member of the
group or if you do not have permission to view the group's member list.

This example lists the owners of a group:

```
var group = GroupsApp.getGroupByEmail("example@googlegroups.com");
var users = group.getUsers();
var roles = group.getRoles(users);
console.log('These are the group owners:');
for (var i = 0; i < users.length; i++) {
  if (roles[i] == GroupsApp.Role.OWNER) {
    console.log(users[i].getEmail());
  }
}
```
@param users The users whose roles are requested.
@return The roles of those users within the group.*/ getRoles(
      users: User[],
    ): GroupsApp.Role[];
    /**Gets the direct members of the group that have a known corresponding Google account. Throws an
exception if you don't have permission to view the group's member list or the member emails.

Note: if you are a member of a group B which is itself a member of another group A then you
are _indirectly_ subscribed to group A. Although you receive copies of messages sent to
it, you are not actually subscribed to the parent group A.

Here's an example which shows the members of a group. Before running it, replace the email
address of the group with that of one on your domain.

```
function listGroupMembers() {
  var GROUP_EMAIL = "example@googlegroups.com";
  var group = GroupsApp.getGroupByEmail(GROUP_EMAIL);
  var users = group.getUsers();
  console.log("Group " + GROUP_EMAIL + " has " + users.length + " members:");
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    console.log(user.getEmail());
  }
}
```

In addition to this method, you can use the [Admin SDK Directory](/apps-script/advanced/admin-sdk-directory) advanced service to
retrieve group members in a domain.
@return All the direct members of the group.*/ getUsers(): User[];
    /**Tests if a group is a direct member of this group. The method does not return `true` if
the tested group is nested more than one level below this group. Throws an exception if you do
not have permission to view the group's member list.

```
var group = GroupsApp.getGroupByEmail("example@googlegroups.com");
var childGroup = GroupsApp.getGroupByEmail("childgroup@googlegroups.com");
if (group.hasGroup(childGroup)) {
  console.log("childgroup@googlegroups.com is a child group");
}
```
@param group The group whose membership to test.
@return `true` if that group is a child group of this group; `false` otherwise.*/ hasGroup(
      group: GroupsApp.Group,
    ): boolean;
    /**Tests if a group is a direct member of this group. The method does not return `true` if
the tested group is nested more than one level below this group. Throws an exception if you do
not have permission to view the group's member list.

```
var group = GroupsApp.getGroupByEmail("example@googlegroups.com");
if (group.hasGroup("childgroup@googlegroups.com")) {
  console.log("childgroup@googlegroups.com is a child group");
}
```
@param email A group's email address.
@return `true` if that group is a child group of this group; `false` otherwise.*/ hasGroup(
      email: string,
    ): boolean;
    /**Tests if a user is a direct member of the group. Throws an exception if you do not have
permission to view the group's member list.

Here's an example which checks if the current user is a member of a group:

```
var group = GroupsApp.getGroupByEmail("example@googlegroups.com");
var currentUser = Session.getActiveUser();
if (group.hasUser(currentUser.getEmail())) {
  console.log("You are a member");
}
```
@param email A user's email address.
@return `true` if that user is a member of the group; `false` otherwise.*/ hasUser(
      email: string,
    ): boolean;
    /**Tests if a user is a direct member of the group. Throws an exception if you do not have
permission to view the group's member list.

Here's an example which checks if the current user is a member of a group:

```
var group = GroupsApp.getGroupByEmail("example@googlegroups.com");
var currentUser = Session.getActiveUser();
if (group.hasUser(currentUser)) {
  console.log("You are a member");
}
```
@param user The user whose membership to test.
@return `true` if that user is a member of the group; `false` otherwise.*/ hasUser(
      user: User,
    ): boolean;
  }
}
const GroupsApp: GroupsApp;
