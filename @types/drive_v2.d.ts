/**The Google Drive API allows clients to access resources from Google Drive.*/
interface Drive_v2 {
  About: Drive_v2.Drive.V2.Collection.AboutCollection;
  Apps: Drive_v2.Drive.V2.Collection.AppsCollection;
  Changes: Drive_v2.Drive.V2.Collection.ChangesCollection;
  Channels: Drive_v2.Drive.V2.Collection.ChannelsCollection;
  Children: Drive_v2.Drive.V2.Collection.ChildrenCollection;
  Comments: Drive_v2.Drive.V2.Collection.CommentsCollection;
  Drives: Drive_v2.Drive.V2.Collection.DrivesCollection;
  Files: Drive_v2.Drive.V2.Collection.FilesCollection;
  Parents: Drive_v2.Drive.V2.Collection.ParentsCollection;
  Permissions: Drive_v2.Drive.V2.Collection.PermissionsCollection;
  Properties: Drive_v2.Drive.V2.Collection.PropertiesCollection;
  Replies: Drive_v2.Drive.V2.Collection.RepliesCollection;
  Revisions: Drive_v2.Drive.V2.Collection.RevisionsCollection;
  Teamdrives: Drive_v2.Drive.V2.Collection.TeamdrivesCollection;
  /**Create a new instance of Channel*/
  newChannel(): Drive_v2.Drive.V2.Schema.Channel;
  /**Create a new instance of ChildReference*/
  newChildReference(): Drive_v2.Drive.V2.Schema.ChildReference;
  /**Create a new instance of Comment*/
  newComment(): Drive_v2.Drive.V2.Schema.Comment;
  /**Create a new instance of CommentContext*/
  newCommentContext(): Drive_v2.Drive.V2.Schema.CommentContext;
  /**Create a new instance of CommentReply*/
  newCommentReply(): Drive_v2.Drive.V2.Schema.CommentReply;
  /**Create a new instance of ContentRestriction*/
  newContentRestriction(): Drive_v2.Drive.V2.Schema.ContentRestriction;
  /**Create a new instance of Drive*/
  newDrive(): Drive_v2.Drive.V2.Schema.Drive;
  /**Create a new instance of DriveBackgroundImageFile*/
  newDriveBackgroundImageFile(): Drive_v2.Drive.V2.Schema.DriveBackgroundImageFile;
  /**Create a new instance of DriveCapabilities*/
  newDriveCapabilities(): Drive_v2.Drive.V2.Schema.DriveCapabilities;
  /**Create a new instance of DriveRestrictions*/
  newDriveRestrictions(): Drive_v2.Drive.V2.Schema.DriveRestrictions;
  /**Create a new instance of File*/
  newFile(): Drive_v2.Drive.V2.Schema.File;
  /**Create a new instance of FileCapabilities*/
  newFileCapabilities(): Drive_v2.Drive.V2.Schema.FileCapabilities;
  /**Create a new instance of FileImageMediaMetadata*/
  newFileImageMediaMetadata(): Drive_v2.Drive.V2.Schema.FileImageMediaMetadata;
  /**Create a new instance of FileImageMediaMetadataLocation*/
  newFileImageMediaMetadataLocation(): Drive_v2.Drive.V2.Schema.FileImageMediaMetadataLocation;
  /**Create a new instance of FileIndexableText*/
  newFileIndexableText(): Drive_v2.Drive.V2.Schema.FileIndexableText;
  /**Create a new instance of FileLabelInfo*/
  newFileLabelInfo(): Drive_v2.Drive.V2.Schema.FileLabelInfo;
  /**Create a new instance of FileLabels*/
  newFileLabels(): Drive_v2.Drive.V2.Schema.FileLabels;
  /**Create a new instance of FileLinkShareMetadata*/
  newFileLinkShareMetadata(): Drive_v2.Drive.V2.Schema.FileLinkShareMetadata;
  /**Create a new instance of FileShortcutDetails*/
  newFileShortcutDetails(): Drive_v2.Drive.V2.Schema.FileShortcutDetails;
  /**Create a new instance of FileThumbnail*/
  newFileThumbnail(): Drive_v2.Drive.V2.Schema.FileThumbnail;
  /**Create a new instance of FileVideoMediaMetadata*/
  newFileVideoMediaMetadata(): Drive_v2.Drive.V2.Schema.FileVideoMediaMetadata;
  /**Create a new instance of Label*/
  newLabel(): Drive_v2.Drive.V2.Schema.Label;
  /**Create a new instance of LabelFieldModification*/
  newLabelFieldModification(): Drive_v2.Drive.V2.Schema.LabelFieldModification;
  /**Create a new instance of LabelModification*/
  newLabelModification(): Drive_v2.Drive.V2.Schema.LabelModification;
  /**Create a new instance of ModifyLabelsRequest*/
  newModifyLabelsRequest(): Drive_v2.Drive.V2.Schema.ModifyLabelsRequest;
  /**Create a new instance of ParentReference*/
  newParentReference(): Drive_v2.Drive.V2.Schema.ParentReference;
  /**Create a new instance of Permission*/
  newPermission(): Drive_v2.Drive.V2.Schema.Permission;
  /**Create a new instance of PermissionPermissionDetails*/
  newPermissionPermissionDetails(): Drive_v2.Drive.V2.Schema.PermissionPermissionDetails;
  /**Create a new instance of PermissionTeamDrivePermissionDetails*/
  newPermissionTeamDrivePermissionDetails(): Drive_v2.Drive.V2.Schema.PermissionTeamDrivePermissionDetails;
  /**Create a new instance of Property*/
  newProperty(): Drive_v2.Drive.V2.Schema.Property;
  /**Create a new instance of Revision*/
  newRevision(): Drive_v2.Drive.V2.Schema.Revision;
  /**Create a new instance of TeamDrive*/
  newTeamDrive(): Drive_v2.Drive.V2.Schema.TeamDrive;
  /**Create a new instance of TeamDriveBackgroundImageFile*/
  newTeamDriveBackgroundImageFile(): Drive_v2.Drive.V2.Schema.TeamDriveBackgroundImageFile;
  /**Create a new instance of TeamDriveCapabilities*/
  newTeamDriveCapabilities(): Drive_v2.Drive.V2.Schema.TeamDriveCapabilities;
  /**Create a new instance of TeamDriveRestrictions*/
  newTeamDriveRestrictions(): Drive_v2.Drive.V2.Schema.TeamDriveRestrictions;
  /**Create a new instance of User*/
  newUser(): Drive_v2.Drive.V2.Schema.User;
  /**Create a new instance of UserPicture*/
  newUserPicture(): Drive_v2.Drive.V2.Schema.UserPicture;
}
module Drive_v2 {
  module Drive {
    module V2 {
      module Schema {
        /**Output only. The user's profile picture.*/
        interface UserPicture {
          /**Output Only.A URL that points to a profile picture of this user.*/
          url: string;
        }
        /**Information about a Drive user.*/
        interface User {
          /**Output only.A plain text displayable name for this user.*/
          displayName: string;
          /**Output only.The email address of the user.*/
          emailAddress: string;
          /**Output only.Whether this user is the same as the authenticated user for whom the request was made.*/
          isAuthenticatedUser: boolean;
          /**Output only.This is always `drive#user`.*/
          kind: string;
          /**Output only.The user 's ID as visible in the permissions collection.*/
          permissionId: string;
          /**Output only. The user's profile picture.*/
          picture: Drive_v2.Drive.V2.Schema.UserPicture;
        }
        /**A set of restrictions that apply to this Team Drive or items inside this Team Drive.*/
        interface TeamDriveRestrictions {
          /**Whether administrative privileges on this Team Drive are required to modify restrictions.*/
          adminManagedRestrictions: boolean;
          /**Whether the options to copy,print,or download files inside this Team Drive,should be disabled for readers and commenters.When this restriction is set to `true`,it will override the similarly named field to `true`for any file inside this Team Drive.*/
          copyRequiresWriterPermission: boolean;
          /**Whether access to this Team Drive and items inside this Team Drive is restricted to users of the domain to which this Team Drive belongs.This restriction may be overridden by other sharing policies controlled outside of this Team Drive.*/
          domainUsersOnly: boolean;
          /**If true,only users with the organizer role can share folders.If false,users with either the organizer role or the file organizer role can share folders.*/
          sharingFoldersRequiresOrganizerPermission: boolean;
          /**Whether access to items inside this Team Drive is restricted to members of this Team Drive.*/
          teamMembersOnly: boolean;
        }
        /**A list of Team Drives.*/
        interface TeamDriveList {
          /**The list of Team Drives.*/
          items: Drive_v2.Drive.V2.Schema.TeamDrive[];
          /**This is always `drive#teamDriveList`*/
          kind: string;
          /**The page token for the next page of Team Drives.*/
          nextPageToken: string;
        }
        /**Capabilities the current user has on this Team Drive.*/
        interface TeamDriveCapabilities {
          /**Whether the current user can add children to folders in this Team Drive.*/
          canAddChildren: boolean;
          /**Whether the current user can change the `copyRequiresWriterPermission`restriction of this Team Drive.*/
          canChangeCopyRequiresWriterPermissionRestriction: boolean;
          /**Whether the current user can change the `domainUsersOnly`restriction of this Team Drive.*/
          canChangeDomainUsersOnlyRestriction: boolean;
          /**Whether the current user can change the `sharingFoldersRequiresOrganizerPermission`restriction of this Team Drive.*/
          canChangeSharingFoldersRequiresOrganizerPermissionRestriction: boolean;
          /**Whether the current user can change the background of this Team Drive.*/
          canChangeTeamDriveBackground: boolean;
          /**Whether the current user can change the `teamMembersOnly`restriction of this Team Drive.*/
          canChangeTeamMembersOnlyRestriction: boolean;
          /**Whether the current user can comment on files in this Team Drive.*/
          canComment: boolean;
          /**Whether the current user can copy files in this Team Drive.*/
          canCopy: boolean;
          /**Whether the current user can delete children from folders in this Team Drive.*/
          canDeleteChildren: boolean;
          /**Whether the current user can delete this Team Drive.Attempting to delete the Team Drive may still fail if there are untrashed items inside the Team Drive.*/
          canDeleteTeamDrive: boolean;
          /**Whether the current user can download files in this Team Drive.*/
          canDownload: boolean;
          /**Whether the current user can edit files in this Team Drive*/
          canEdit: boolean;
          /**Whether the current user can list the children of folders in this Team Drive.*/
          canListChildren: boolean;
          /**Whether the current user can add members to this Team Drive or remove them or change their role.*/
          canManageMembers: boolean;
          /**Whether the current user can read the revisions resource of files in this Team Drive.*/
          canReadRevisions: boolean;
          /**Deprecated: Use `canDeleteChildren`or `canTrashChildren`instead.*/
          canRemoveChildren: boolean;
          /**Whether the current user can rename files or folders in this Team Drive.*/
          canRename: boolean;
          /**Whether the current user can rename this Team Drive.*/
          canRenameTeamDrive: boolean;
          /**Whether the current user can reset the Team Drive restrictions to defaults.*/
          canResetTeamDriveRestrictions: boolean;
          /**Whether the current user can share files or folders in this Team Drive.*/
          canShare: boolean;
          /**Whether the current user can trash children from folders in this Team Drive.*/
          canTrashChildren: boolean;
        }
        /**An image file and cropping parameters from which a background image for this Team Drive is set.This is a write only field;it can only be set on `drive.teamdrives.update`requests that don 't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set.*/
        interface TeamDriveBackgroundImageFile {
          /**The ID of an image file in Drive to use for the background image.*/
          id: string;
          /**The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high.*/
          width: number;
          /**The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side of the cropping area divided by the width of the entire image.*/
          xCoordinate: number;
          /**The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of the cropping area divided by the height of the entire image.*/
          yCoordinate: number;
        }
        /**Deprecated: Use the `drive` collection instead.*/
        interface TeamDrive {
          /**An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on `drive.teamdrives.update` requests that don't set `themeId`.When specified,all fields of the `backgroundImageFile`must be set.*/
          backgroundImageFile: Drive_v2.Drive.V2.Schema.TeamDriveBackgroundImageFile;
          /**A short-lived link to this Team Drive 's background image.*/
          backgroundImageLink: string;
          /**Capabilities the current user has on this Team Drive.*/
          capabilities: Drive_v2.Drive.V2.Schema.TeamDriveCapabilities;
          /**The color of this Team Drive as an RGB hex string. It can only be set on a `drive.teamdrives.update` request that does not set `themeId`.*/
          colorRgb: string;
          /**The time at which the Team Drive was created (RFC 3339 date-time).*/
          createdDate: string;
          /**The ID of this Team Drive which is also the ID of the top level folder of this Team Drive.*/
          id: string;
          /**This is always `drive#teamDrive`*/
          kind: string;
          /**The name of this Team Drive.*/
          name: string;
          /**The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`.*/
          orgUnitId: string;
          /**A set of restrictions that apply to this Team Drive or items inside this Team Drive.*/
          restrictions: Drive_v2.Drive.V2.Schema.TeamDriveRestrictions;
          /**The ID of the theme from which the background image and color will be set. The set of possible `teamDriveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.teamdrives.insert` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb`or `backgroundImageFile`.*/
          themeId: string;
        }
        interface StartPageToken {
          /**Identifies what kind of resource this is.Value: the fixed string `"drive#startPageToken"`.*/
          kind: string;
          /**The starting page token for listing changes.*/
          startPageToken: string;
        }
        /**A list of revisions of a file.*/
        interface RevisionList {
          /**The ETag of the list.*/
          etag: string;
          /**The list of revisions.If nextPageToken is populated,then this list may be incomplete and an additional page of results should be fetched.*/
          items: Drive_v2.Drive.V2.Schema.Revision[];
          /**This is always `drive#revisionList`.*/
          kind: string;
          /**The page token for the next page of revisions.This field will be absent if the end of the revisions list has been reached.If the token is rejected for any reason,it should be discarded and pagination should be restarted from the first page of results.*/
          nextPageToken: string;
          /**A link back to this list.*/
          selfLink: string;
        }
        /**A revision of a file.Some resource methods(such as `revisions.update`)require a `revisionId`.Use the `revisions.list`method to retrieve the ID for a revision.*/
        interface Revision {
          /**Output only.Short term download URL for the file.This will only be populated on files with content stored in Drive.*/
          downloadUrl: string;
          /**Output only.The ETag of the revision.*/
          etag: string;
          /**Output only.Links for exporting Docs Editors files to specific formats.*/
          exportLinks: Object;
          /**Output only.The size of the revision in bytes.This will only be populated on files with content stored in Drive.*/
          fileSize: string;
          /**Output only.The ID of the revision.*/
          id: string;
          /**Output only.This is always `drive#revision`.*/
          kind: string;
          /**Output only.The last user to modify this revision.This field is only populated when the last modification was performed by a signed-in user.*/
          lastModifyingUser: Drive_v2.Drive.V2.Schema.User;
          /**Output only.Name of the last user to modify this revision.*/
          lastModifyingUserName: string;
          /**Output only.An MD5 checksum for the content of this revision.This will only be populated on files with content stored in Drive.*/
          md5Checksum: string;
          /**Output only.The MIME type of the revision.*/
          mimeType: string;
          /**Last time this revision was modified(formatted RFC 3339 timestamp).*/
          modifiedDate: string;
          /**Output only.The original filename when this revision was created.This will only be populated on files with content stored in Drive.*/
          originalFilename: string;
          /**Whether this revision is pinned to prevent automatic purging.If not set,the revision is automatically purged 30 days after newer content is uploaded.This field can only be modified on files with content stored in Drive,excluding Docs Editors files.Revisions can also be pinned when they are created through the drive.files.insert/update/copy by using the pinned query parameter.Pinned revisions are stored indefinitely using additional storage quota,up to a maximum of 200 revisions.*/
          pinned: boolean;
          /**Whether subsequent revisions will be automatically republished.This is only populated and can only be modified for Docs Editors files.*/
          publishAuto: boolean;
          /**Whether this revision is published.This is only populated and can only be modified for Docs Editors files.*/
          published: boolean;
          /**Output only.A link to the published revision.This is only populated for Google Sites files.*/
          publishedLink: string;
          /**Whether this revision is published outside the domain.This is only populated and can only be modified for Docs Editors files.*/
          publishedOutsideDomain: boolean;
          /**Output only.A link back to this revision.*/
          selfLink: string;
        }
        /**A collection of properties,key-value pairs that are either public or private to an application.*/
        interface PropertyList {
          /**The ETag of the list.*/
          etag: string;
          /**The list of properties.*/
          items: Drive_v2.Drive.V2.Schema.Property[];
          /**This is always `drive#propertyList`.*/
          kind: string;
          /**The link back to this list.*/
          selfLink: string;
        }
        /**A key-value pair attached to a file that is either public or private to an application.The following limits apply to file properties: *Maximum of 100 properties total per file*Maximum of 30 private properties per app*Maximum of 30 public properties*Maximum of 124 bytes size limit on(key+value)string in UTF-8 encoding for a single property Some resource methods(such as `properties.update`)require a `propertyKey`.Use the `properties.list`method to retrieve the key for a property.*/
        interface Property {
          /**Output only.ETag of the property.*/
          etag: string;
          /**The key of this property.*/
          key: string;
          /**Output only.This is always `drive#property`.*/
          kind: string;
          /**Output only.The link back to this property.*/
          selfLink: string;
          /**The value of this property.*/
          value: string;
          /**The visibility of this property.Allowed values are PRIVATE(default)and PUBLIC.Private properties can only be retrieved using an authenticated request.An authenticated request uses an access token obtained with a OAuth 2 client ID.You cannot use an API key to retrieve private properties.*/
          visibility: string;
        }
        interface PermissionTeamDrivePermissionDetails {
          /**Output only.Deprecated: Use `permissionDetails/additionalRoles`instead.*/
          additionalRoles: string[];
          /**Output only.Deprecated: Use `permissionDetails/inherited`instead.*/
          inherited: boolean;
          /**Output only.Deprecated: Use `permissionDetails/inheritedFrom`instead.*/
          inheritedFrom: string;
          /**Output only.Deprecated: Use `permissionDetails/role`instead.*/
          role: string;
          /**Output only.Deprecated: Use `permissionDetails/permissionType`instead.*/
          teamDrivePermissionType: string;
        }
        interface PermissionPermissionDetails {
          /**Output only.Additional roles for this user.Only `commenter`is currently possible,though more may be supported in the future.*/
          additionalRoles: string[];
          /**Output only.Whether this permission is inherited.This field is always populated.This is an output-only field.*/
          inherited: boolean;
          /**Output only.The ID of the item from which this permission is inherited.This is an output-only field.*/
          inheritedFrom: string;
          /**Output only.The permission type for this user.While new values may be added in future,the following are currently possible: *`file`*`member`*/
          permissionType: string;
          /**Output only.The primary role for this user.While new values may be added in the future,the following are currently possible: *`organizer`*`fileOrganizer`*`writer`*`reader`*/
          role: string;
        }
        /**A list of permissions associated with a file.*/
        interface PermissionList {
          /**The ETag of the list.*/
          etag: string;
          /**The list of permissions.*/
          items: Drive_v2.Drive.V2.Schema.Permission[];
          /**This is always `drive#permissionList`.*/
          kind: string;
          /**The page token for the next page of permissions.This field will be absent if the end of the permissions list has been reached.If the token is rejected for any reason,it should be discarded,and pagination should be restarted from the first page of results.*/
          nextPageToken: string;
          /**A link back to this list.*/
          selfLink: string;
        }
        /**An ID for a user or group as seen in Permission items.*/
        interface PermissionId {
          /**The permission ID.*/
          id: string;
          /**This is always `drive#permissionId`.*/
          kind: string;
        }
        /**A permission for a file.A permission grants a user,group,domain,or the world access to a file or a folder hierarchy.Some resource methods(such as `permissions.update`)require a `permissionId`.Use the `permissions.list`method to retrieve the ID for a file,folder,or shared drive.*/
        interface Permission {
          /**Additional roles for this user.Only `commenter`is currently allowed,though more may be supported in the future.*/
          additionalRoles: string[];
          /**Output only.Deprecated.*/
          authKey: string;
          /**Output only.Whether the account associated with this permission has been deleted.This field only pertains to user and group permissions.*/
          deleted: boolean;
          /**Output only.The domain name of the entity this permission refers to.This is an output-only field which is present when the permission type is `user`,`group`or `domain`.*/
          domain: string;
          /**Output only.The email address of the user or group this permission refers to.This is an output-only field which is present when the permission type is `user`or `group`.*/
          emailAddress: string;
          /**Output only.The ETag of the permission.*/
          etag: string;
          /**The time at which this permission will expire(RFC 3339 date-time).Expiration dates have the following restrictions: -They can only be set on user and group permissions-The date must be in the future-The date cannot be more than a year in the future-The date can only be set on drive.permissions.update or drive.permissions.patch requests*/
          expirationDate: string;
          /**The ID of the user this permission refers to,and identical to the `permissionId`in the About and Files resources.When making a `drive.permissions.insert`request,exactly one of the `id`or `value`fields must be specified unless the permission type is `anyone`,in which case both `id`and `value`are ignored.*/
          id: string;
          /**Output only.This is always `drive#permission`.*/
          kind: string;
          /**Output only.The name for this permission.*/
          name: string;
          /**Whether the account associated with this permission is a pending owner.Only populated for `user`type permissions for files that are not in a shared drive.*/
          pendingOwner: boolean;
          /**Output only.Details of whether the permissions on this shared drive item are inherited or directly on this item.This is an output-only field which is present only for shared drive items.*/
          permissionDetails: Drive_v2.Drive.V2.Schema.PermissionPermissionDetails[];
          /**Output only.A link to the profile photo,if available.*/
          photoLink: string;
          /**The primary role for this user.While new values may be supported in the future,the following are currently allowed: *`owner`*`organizer`*`fileOrganizer`*`writer`*`reader`*/
          role: string;
          /**Output only.A link back to this permission.*/
          selfLink: string;
          /**Output only.Deprecated: Use `permissionDetails`instead.*/
          teamDrivePermissionDetails: Drive_v2.Drive.V2.Schema.PermissionTeamDrivePermissionDetails[];
          /**The account type.Allowed values are: *`user`*`group`*`domain`*`anyone`*/
          type: string;
          /**The email address or domain name for the entity.This is used during inserts and is not populated in responses.When making a `drive.permissions.insert`request,exactly one of the `id`or `value`fields must be specified unless the permission type is `anyone`,in which case both `id`and `value`are ignored.*/
          value: string;
          /**Indicates the view for this permission.Only populated for permissions that belong to a view.`published`is the only supported value.*/
          view: string;
          /**Whether the link is required for this permission.*/
          withLink: boolean;
        }
        /**A reference to a file 's parent. A file can only have one parent folder; specifying multiple parents isn't supported.Some resource methods(such as `parents.get`)require a `parentId`.Use the `parents.list`method to retrieve the ID for a parent.*/
        interface ParentReference {
          /**The ID of the parent.*/
          id: string;
          /**Output only.Whether or not the parent is the root folder.*/
          isRoot: boolean;
          /**Output only.This is always `drive#parentReference`.*/
          kind: string;
          /**Output only.A link to the parent.*/
          parentLink: string;
          /**Output only.A link back to this reference.*/
          selfLink: string;
        }
        /**A list of a file 's parents.*/
        interface ParentList {
          /**The ETag of the list.*/
          etag: string;
          /**The list of parents.*/
          items: Drive_v2.Drive.V2.Schema.ParentReference[];
          /**This is always `drive#parentList`.*/
          kind: string;
          /**A link back to this list.*/
          selfLink: string;
        }
        /**Response to a ModifyLabels request. This contains only those labels which were added or updated by the request.*/
        interface ModifyLabelsResponse {
          /**This is always `drive#modifyLabelsResponse`*/
          kind: string;
          /**The list of labels which were added or updated by the request.*/
          modifiedLabels: Drive_v2.Drive.V2.Schema.Label[];
        }
        /**A request to modify the set of labels on a file. This request may contain many modifications that will either all succeed or all fail atomically.*/
        interface ModifyLabelsRequest {
          /**This is always `drive#modifyLabelsRequest`.*/
          kind: string;
          /**The list of modifications to apply to the labels on the file.*/
          labelModifications: Drive_v2.Drive.V2.Schema.LabelModification[];
        }
        /**A modification to a label on a file. A LabelModification can be used to apply a label to a file, update an existing label on a file, or remove a label from a file.*/
        interface LabelModification {
          /**The list of modifications to this label's fields.*/
          fieldModifications: Drive_v2.Drive.V2.Schema.LabelFieldModification[];
          /**This is always `drive#labelModification`.*/
          kind: string;
          /**The ID of the label to modify.*/
          labelId: string;
          /**If true,the label will be removed from the file.*/
          removeLabel: boolean;
        }
        /**A list of labels applied to a file.*/
        interface LabelList {
          /**The list of labels.*/
          items: Drive_v2.Drive.V2.Schema.Label[];
          /**This is always `drive#labelList`*/
          kind: string;
          /**The page token for the next page of labels.This field will be absent if the end of the list has been reached.If the token is rejected for any reason,it should be discarded,and pagination should be restarted from the first page of results.*/
          nextPageToken: string;
        }
        /**A modification to a label 's field.*/
        interface LabelFieldModification {
          /**The ID of the field to be modified.*/
          fieldId: string;
          /**This is always `drive#labelFieldModification`.*/
          kind: string;
          /**Replaces the value of a dateString Field with these new values. The string must be in the RFC 3339 full-date format: YYYY-MM-DD.*/
          setDateValues: string[];
          /**Replaces the value of an `integer` field with these new values.*/
          setIntegerValues: string[];
          /**Replaces a `selection` field with these new values.*/
          setSelectionValues: string[];
          /**Sets the value of a `text` field.*/
          setTextValues: string[];
          /**Replaces a `user` field with these new values. The values must be valid email addresses.*/
          setUserValues: string[];
          /**Unsets the values for this field.*/
          unsetValues: boolean;
        }
        /**Representation of field, which is a typed key-value pair.*/
        interface LabelField {
          /**Only present if valueType is dateString. RFC 3339 formatted date: YYYY-MM-DD.*/
          dateString: string[];
          /**The identifier of this label field.*/
          id: string;
          /**Only present if `valueType` is `integer`.*/
          integer: string[];
          /**This is always `drive#labelField`.*/
          kind: string;
          /**Only present if `valueType` is `selection`*/
          selection: string[];
          /**Only present if `valueType` is `text`.*/
          text: string[];
          /**Only present if `valueType` is `user`.*/
          user: Drive_v2.Drive.V2.Schema.User[];
          /**The field type. While new values may be supported in the future, the following are currently allowed: * `dateString` * `integer` * `selection` * `text` * `user`*/
          valueType: string;
        }
        /**Representation of a label and label fields.*/
        interface Label {
          /**A map of the fields on the label, keyed by the field's ID.*/
          fields: Object;
          /**The ID of the label.*/
          id: string;
          /**This is always `drive#label`*/
          kind: string;
          /**The revision ID of the label.*/
          revisionId: string;
        }
        /**A list of generated IDs which can be provided in insert requests*/
        interface GeneratedIds {
          /**The IDs generated for the requesting user in the specified space.*/
          ids: string[];
          /**This is always `drive#generatedIds`*/
          kind: string;
          /**The type of file that can be created with these IDs.*/
          space: string;
        }
        /**Output only.Metadata about video media.This will only be present for video types.*/
        interface FileVideoMediaMetadata {
          /**Output only.The duration of the video in milliseconds.*/
          durationMillis: string;
          /**Output only.The height of the video in pixels.*/
          height: Integer;
          /**Output only.The width of the video in pixels.*/
          width: Integer;
        }
        /**A thumbnail for the file.This will only be used if a standard thumbnail cannot be generated.*/
        interface FileThumbnail {
          /**The URL-safe Base64 encoded bytes of the thumbnail image.It should conform to RFC 4648 section 5.*/
          image: Byte[];
          /**The MIME type of the thumbnail.*/
          mimeType: string;
        }
        /**Shortcut file details.Only populated for shortcut files,which have the mimeType field set to `application/vnd.google-apps.shortcut`.Can only be set on `files.insert`requests.*/
        interface FileShortcutDetails {
          /**The ID of the file that this shortcut points to.Can only be set on `files.insert`requests.*/
          targetId: string;
          /**Output only.The MIME type of the file that this shortcut points to.The value of this field is a snapshot of the target 's MIME type, captured when the shortcut is created.*/
          targetMimeType: string;
          /**Output only. The ResourceKey for the target file.*/
          targetResourceKey: string;
        }
        /**A list of files.*/
        interface FileList {
          /**The ETag of the list.*/
          etag: string;
          /**Whether the search process was incomplete. If true, then some search results may be missing, since all documents were not searched. This may occur when searching multiple drives with the "allDrives" corpora, but all corpora could not be searched. When this happens, it is suggested that clients narrow their query by choosing a different corpus such as "default" or "drive".*/
          incompleteSearch: boolean;
          /**The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.*/
          items: Drive_v2.Drive.V2.Schema.File[];
          /**This is always `drive#fileList`.*/
          kind: string;
          /**A link to the next page of files.*/
          nextLink: string;
          /**The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.*/
          nextPageToken: string;
          /**A link back to this list.*/
          selfLink: string;
        }
        /**Contains details about the link URLs that clients are using to refer to this item.*/
        interface FileLinkShareMetadata {
          /**Output only. Whether the file is eligible for security update.*/
          securityUpdateEligible: boolean;
          /**Output only. Whether the security update is enabled for this file.*/
          securityUpdateEnabled: boolean;
        }
        /**A group of labels for the file.*/
        interface FileLabels {
          /**Output only. Deprecated.*/
          hidden: boolean;
          /**Output only. Whether the file has been modified by this user.*/
          modified: boolean;
          /**Output only. Deprecated: Use `copyRequiresWriterPermission` instead.*/
          restricted: boolean;
          /**Whether this file is starred by the user.*/
          starred: boolean;
          /**Whether this file has been trashed. This label applies to all users accessing the file; however, only owners are allowed to see and untrash files.*/
          trashed: boolean;
          /**Whether this file has been viewed by this user.*/
          viewed: boolean;
        }
        /**Output only. An overview of the labels on the file.*/
        interface FileLabelInfo {
          /**Output only. The set of labels on the file as requested by the label IDs in the `includeLabels` parameter. By default, no labels are returned.*/
          labels: Drive_v2.Drive.V2.Schema.Label[];
        }
        /**Indexable text attributes for the file (can only be written)*/
        interface FileIndexableText {
          /**The text to be indexed for this file.*/
          text: string;
        }
        /**Output only. Geographic location information stored in the image.*/
        interface FileImageMediaMetadataLocation {
          /**Output only. The altitude stored in the image.*/
          altitude: number;
          /**Output only. The latitude stored in the image.*/
          latitude: number;
          /**Output only. The longitude stored in the image.*/
          longitude: number;
        }
        /**Output only. Metadata about image media. This will only be present for image types, and its contents will depend on what can be parsed from the image content.*/
        interface FileImageMediaMetadata {
          /**Output only. The aperture used to create the photo (f-number).*/
          aperture: number;
          /**Output only. The make of the camera used to create the photo.*/
          cameraMake: string;
          /**Output only. The model of the camera used to create the photo.*/
          cameraModel: string;
          /**Output only. The color space of the photo.*/
          colorSpace: string;
          /**Output only. The date and time the photo was taken (EXIF format timestamp).*/
          date: string;
          /**Output only. The exposure bias of the photo (APEX value).*/
          exposureBias: number;
          /**Output only. The exposure mode used to create the photo.*/
          exposureMode: string;
          /**Output only. The length of the exposure, in seconds.*/
          exposureTime: number;
          /**Output only. Whether a flash was used to create the photo.*/
          flashUsed: boolean;
          /**Output only. The focal length used to create the photo, in millimeters.*/
          focalLength: number;
          /**Output only. The height of the image in pixels.*/
          height: Integer;
          /**Output only. The ISO speed used to create the photo.*/
          isoSpeed: Integer;
          /**Output only. The lens used to create the photo.*/
          lens: string;
          /**Output only. Geographic location information stored in the image.*/
          location: Drive_v2.Drive.V2.Schema.FileImageMediaMetadataLocation;
          /**Output only. The smallest f-number of the lens at the focal length used to create the photo (APEX value).*/
          maxApertureValue: number;
          /**Output only. The metering mode used to create the photo.*/
          meteringMode: string;
          /**Output only. The number of clockwise 90 degree rotations applied from the image's original orientation.*/
          rotation: Integer;
          /**Output only.The type of sensor used to create the photo.*/
          sensor: string;
          /**Output only.The distance to the subject of the photo,in meters.*/
          subjectDistance: Integer;
          /**Output only.The white balance mode used to create the photo.*/
          whiteBalance: string;
          /**Output only.The width of the image in pixels.*/
          width: Integer;
        }
        /**Output only.Capabilities the current user has on this file.Each capability corresponds to a fine-grained action that a user may take.*/
        interface FileCapabilities {
          /**Output only.Whether the current user is the pending owner of the file.Not populated for shared drive files.*/
          canAcceptOwnership: boolean;
          /**Output only.Whether the current user can add children to this folder.This is always false when the item is not a folder.*/
          canAddChildren: boolean;
          /**Output only.Whether the current user can add a folder from another drive(different shared drive or My Drive)to this folder.This is false when the item is not a folder.Only populated for items in shared drives.*/
          canAddFolderFromAnotherDrive: boolean;
          /**Output only.Whether the current user can add a parent for the item without removing an existing parent in the same request.Not populated for shared drive files.*/
          canAddMyDriveParent: boolean;
          /**Output only.Whether the current user can change the `copyRequiresWriterPermission`restriction of this file.*/
          canChangeCopyRequiresWriterPermission: boolean;
          /**Output only.Deprecated.*/
          canChangeRestrictedDownload: boolean;
          /**Output only.Whether the current user can change the securityUpdateEnabled field on link share metadata.*/
          canChangeSecurityUpdateEnabled: boolean;
          /**Output only.Whether the current user can comment on this file.*/
          canComment: boolean;
          /**Output only.Whether the current user can copy this file.For an item in a shared drive,whether the current user can copy non-folder descendants of this item,or this item itself if it is not a folder.*/
          canCopy: boolean;
          /**Output only.Whether the current user can delete this file.*/
          canDelete: boolean;
          /**Output only.Whether the current user can delete children of this folder.This is false when the item is not a folder.Only populated for items in shared drives.*/
          canDeleteChildren: boolean;
          /**Output only.Whether the current user can download this file.*/
          canDownload: boolean;
          /**Output only.Whether the current user can edit this file.Other factors may limit the type of changes a user can make to a file.For example,see `canChangeCopyRequiresWriterPermission`or `canModifyContent`.*/
          canEdit: boolean;
          /**Output only.Whether the current user can list the children of this folder.This is always false when the item is not a folder.*/
          canListChildren: boolean;
          /**Output only.Whether the current user can modify the content of this file.*/
          canModifyContent: boolean;
          /**Deprecated: Output only.Use one of `canModifyEditorContentRestriction`,`canModifyOwnerContentRestriction`or `canRemoveContentRestriction`.*/
          canModifyContentRestriction: boolean;
          /**Output only.Whether the current user can add or modify content restrictions on the file which are editor restricted.*/
          canModifyEditorContentRestriction: boolean;
          /**Output only.Whether the current user can modify the labels on the file.*/
          canModifyLabels: boolean;
          /**Output only.Whether the current user can add or modify content restrictions which are owner restricted.*/
          canModifyOwnerContentRestriction: boolean;
          /**Output only.Whether the current user can move children of this folder outside of the shared drive.This is false when the item is not a folder.Only populated for items in shared drives.*/
          canMoveChildrenOutOfDrive: boolean;
          /**Output only.Deprecated: Use `canMoveChildrenOutOfDrive`instead.*/
          canMoveChildrenOutOfTeamDrive: boolean;
          /**Output only.Whether the current user can move children of this folder within this drive.This is false when the item is not a folder.Note that a request to move the child may still fail depending on the current user 's access to the child and to the destination folder.*/
          canMoveChildrenWithinDrive: boolean;
          /**Output only. Deprecated: Use `canMoveChildrenWithinDrive` instead.*/
          canMoveChildrenWithinTeamDrive: boolean;
          /**Output only. Deprecated: Use `canMoveItemOutOfDrive` instead.*/
          canMoveItemIntoTeamDrive: boolean;
          /**Output only. Whether the current user can move this item outside of this drive by changing its parent. Note that a request to change the parent of the item may still fail depending on the new parent that is being added.*/
          canMoveItemOutOfDrive: boolean;
          /**Output only. Deprecated: Use `canMoveItemOutOfDrive` instead.*/
          canMoveItemOutOfTeamDrive: boolean;
          /**Output only. Whether the current user can move this item within this drive. Note that a request to change the parent of the item may still fail depending on the new parent that is being added and the parent that is being removed.*/
          canMoveItemWithinDrive: boolean;
          /**Output only. Deprecated: Use `canMoveItemWithinDrive` instead.*/
          canMoveItemWithinTeamDrive: boolean;
          /**Output only. Deprecated: Use `canMoveItemWithinDrive` or `canMoveItemOutOfDrive` instead.*/
          canMoveTeamDriveItem: boolean;
          /**Output only. Whether the current user can read the shared drive to which this file belongs. Only populated for items in shared drives.*/
          canReadDrive: boolean;
          /**Output only. Whether the current user can read the labels on the file.*/
          canReadLabels: boolean;
          /**Output only. Whether the current user can read the revisions resource of this file. For a shared drive item, whether revisions of non-folder descendants of this item, or this item itself if it is not a folder, can be read.*/
          canReadRevisions: boolean;
          /**Output only. Deprecated: Use `canReadDrive` instead.*/
          canReadTeamDrive: boolean;
          /**Output only. Whether the current user can remove children from this folder. This is always false when the item is not a folder. For a folder in a shared drive, use `canDeleteChildren` or `canTrashChildren` instead.*/
          canRemoveChildren: boolean;
          /**Output only. Whether there is a content restriction on the file that can be removed by the current user.*/
          canRemoveContentRestriction: boolean;
          /**Output only. Whether the current user can remove a parent from the item without adding another parent in the same request. Not populated for shared drive files.*/
          canRemoveMyDriveParent: boolean;
          /**Output only. Whether the current user can rename this file.*/
          canRename: boolean;
          /**Output only. Whether the current user can modify the sharing settings for this file.*/
          canShare: boolean;
          /**Output only. Whether the current user can move this file to trash.*/
          canTrash: boolean;
          /**Output only. Whether the current user can trash children of this folder. This is false when the item is not a folder. Only populated for items in shared drives.*/
          canTrashChildren: boolean;
          /**Output only. Whether the current user can restore this file from trash.*/
          canUntrash: boolean;
        }
        /**The metadata for a file. Some resource methods (such as `files.update`) require a `fileId`. Use the `files.list` method to retrieve the ID for a file.*/
        interface File {
          /**Output only. A link for opening the file in a relevant Google editor or viewer.*/
          alternateLink: string;
          /**Output only. Whether this file is in the Application Data folder.*/
          appDataContents: boolean;
          /**Output only. Deprecated: Use `capabilities/canComment` instead.*/
          canComment: boolean;
          /**Output only. Deprecated: Use `capabilities/canReadRevisions` instead.*/
          canReadRevisions: boolean;
          /**Output only. Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.*/
          capabilities: Drive_v2.Drive.V2.Schema.FileCapabilities;
          /**Restrictions for accessing the content of the file. Only populated if such a restriction exists.*/
          contentRestrictions: Drive_v2.Drive.V2.Schema.ContentRestriction[];
          /**Whether the options to copy, print, or download this file, should be disabled for readers and commenters.*/
          copyRequiresWriterPermission: boolean;
          /**Output only. Deprecated: Use `capabilities/canCopy` instead.*/
          copyable: boolean;
          /**Create time for this file (formatted RFC 3339 timestamp).*/
          createdDate: string;
          /**Output only. A link to open this file with the user's default app for this file.Only populated when the drive.apps.readonly scope is used.*/
          defaultOpenWithLink: string;
          /**A short description of the file.*/
          description: string;
          /**Output only.Short lived download URL for the file.This field is only populated for files with content stored in Google Drive;it is not populated for Google Docs or shortcut files.*/
          downloadUrl: string;
          /**Output only.ID of the shared drive the file resides in.Only populated for items in shared drives.*/
          driveId: string;
          /**Output only.Deprecated: Use `capabilities/canEdit`instead.*/
          editable: boolean;
          /**Output only.A link for embedding the file.*/
          embedLink: string;
          /**Output only.ETag of the file.*/
          etag: string;
          /**Output only.Whether this file has been explicitly trashed,as opposed to recursively trashed.*/
          explicitlyTrashed: boolean;
          /**Output only.Links for exporting Docs Editors files to specific formats.*/
          exportLinks: Object;
          /**Output only.The final component of `fullFileExtension`with trailing text that does not appear to be part of the extension removed.This field is only populated for files with content stored in Google Drive;it is not populated for Docs Editors or shortcut files.*/
          fileExtension: string;
          /**Output only.Size in bytes of blobs and first party editor files.Won 't be populated for files that have no size, like shortcuts and folders.*/
          fileSize: string;
          /**Folder color as an RGB hex string if the file is a folder or a shortcut to a folder. The list of supported colors is available in the folderColorPalette field of the About resource. If an unsupported color is specified, it will be changed to the closest color in the palette.*/
          folderColorRgb: string;
          /**Output only. The full file extension; extracted from the title. May contain multiple concatenated extensions, such as "tar.gz". Removing an extension from the title does not clear this field; however, changing the extension on the title does update this field. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.*/
          fullFileExtension: string;
          /**Output only. Whether there are permissions directly on this file. This field is only populated for items in shared drives.*/
          hasAugmentedPermissions: boolean;
          /**Output only. Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field.*/
          hasThumbnail: boolean;
          /**Output only. The ID of the file's head revision.This field is only populated for files with content stored in Google Drive;it is not populated for Docs Editors or shortcut files.*/
          headRevisionId: string;
          /**Output only.A link to the file 's icon.*/
          iconLink: string;
          /**The ID of the file.*/
          id: string;
          /**Output only. Metadata about image media. This will only be present for image types, and its contents will depend on what can be parsed from the image content.*/
          imageMediaMetadata: Drive_v2.Drive.V2.Schema.FileImageMediaMetadata;
          /**Indexable text attributes for the file (can only be written)*/
          indexableText: Drive_v2.Drive.V2.Schema.FileIndexableText;
          /**Output only. Whether the file was created or opened by the requesting app.*/
          isAppAuthorized: boolean;
          /**Output only. The type of file. This is always `drive#file`.*/
          kind: string;
          /**Output only. An overview of the labels on the file.*/
          labelInfo: Drive_v2.Drive.V2.Schema.FileLabelInfo;
          /**A group of labels for the file.*/
          labels: Drive_v2.Drive.V2.Schema.FileLabels;
          /**Output only. The last user to modify this file. This field is only populated when the last modification was performed by a signed-in user.*/
          lastModifyingUser: Drive_v2.Drive.V2.Schema.User;
          /**Output only. Name of the last user to modify this file.*/
          lastModifyingUserName: string;
          /**Last time this file was viewed by the user (formatted RFC 3339 timestamp).*/
          lastViewedByMeDate: string;
          /**Contains details about the link URLs that clients are using to refer to this item.*/
          linkShareMetadata: Drive_v2.Drive.V2.Schema.FileLinkShareMetadata;
          /**Deprecated.*/
          markedViewedByMeDate: string;
          /**Output only. An MD5 checksum for the content of this file. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.*/
          md5Checksum: string;
          /**The MIME type of the file. This is only mutable on update when uploading new content. This field can be left blank, and the mimetype will be determined from the uploaded content's MIME type.*/
          mimeType: string;
          /**Last time this file was modified by the user(formatted RFC 3339 timestamp).Note that setting modifiedDate will also update the modifiedByMe date for the user which set the date.*/
          modifiedByMeDate: string;
          /**Last time this file was modified by anyone(formatted RFC 3339 timestamp).This is only mutable on update when the setModifiedDate parameter is set.*/
          modifiedDate: string;
          /**Output only.A map of the id of each of the user 's apps to a link to open this file with that app. Only populated when the drive.apps.readonly scope is used.*/
          openWithLinks: Object;
          /**The original filename of the uploaded content if available, or else the original value of the `title` field. This is only available for files with binary content in Google Drive.*/
          originalFilename: string;
          /**Output only. Whether the file is owned by the current user. Not populated for items in shared drives.*/
          ownedByMe: boolean;
          /**Output only. Name(s) of the owner(s) of this file. Not populated for items in shared drives.*/
          ownerNames: string[];
          /**Output only. The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives.*/
          owners: Drive_v2.Drive.V2.Schema.User[];
          /**The ID of the parent folder containing the file.A file can only have one parent folder;specifying multiple parents isn 't supported. If not specified as part of an insert request, the file is placed directly in the user's My Drive folder.If not specified as part of a copy request,the file inherits any discoverable parent of the source file.Update requests must use the `addParents`and `removeParents`parameters to modify the parents list.*/
          parents: Drive_v2.Drive.V2.Schema.ParentReference[];
          /**Output only.List of permission IDs for users with access to this file.*/
          permissionIds: string[];
          /**Output only.The list of permissions for users with access to this file.Not populated for items in shared drives.*/
          permissions: Drive_v2.Drive.V2.Schema.Permission[];
          /**The list of properties.*/
          properties: Drive_v2.Drive.V2.Schema.Property[];
          /**Output only.The number of quota bytes used by this file.*/
          quotaBytesUsed: string;
          /**Output only.A key needed to access the item via a shared link.*/
          resourceKey: string;
          /**Output only.A link back to this file.*/
          selfLink: string;
          /**Output only.The SHA1 checksum associated with this file,if available.This field is only populated for files with content stored in Google Drive;it is not populated for Docs Editors or shortcut files.*/
          sha1Checksum: string;
          /**Output only.The SHA256 checksum associated with this file,if available.This field is only populated for files with content stored in Google Drive;it is not populated for Docs Editors or shortcut files.*/
          sha256Checksum: string;
          /**Output only.Deprecated: Use `capabilities/canShare`instead.*/
          shareable: boolean;
          /**Output only.Whether the file has been shared.Not populated for items in shared drives.*/
          shared: boolean;
          /**Time at which this file was shared with the user(formatted RFC 3339 timestamp).*/
          sharedWithMeDate: string;
          /**Output only.User that shared the item with the current user,if available.*/
          sharingUser: Drive_v2.Drive.V2.Schema.User;
          /**Shortcut file details.Only populated for shortcut files,which have the mimeType field set to `application/vnd.google-apps.shortcut`.Can only be set on `files.insert`requests.*/
          shortcutDetails: Drive_v2.Drive.V2.Schema.FileShortcutDetails;
          /**Output only.The list of spaces which contain the file.Supported values are `drive`,`appDataFolder`and `photos`.*/
          spaces: string[];
          /**Output only.Deprecated: Use `driveId`instead.*/
          teamDriveId: string;
          /**A thumbnail for the file.This will only be used if a standard thumbnail cannot be generated.*/
          thumbnail: Drive_v2.Drive.V2.Schema.FileThumbnail;
          /**Output only.A short-lived link to the file 's thumbnail, if available. Typically lasts on the order of hours. Not intended for direct usage on web applications due to [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), consider using a proxy server. Only populated when the requesting app can access the file's content.If the file isn 't shared publicly, the URL returned in `Files.thumbnailLink` must be fetched using a credentialed request.*/
          thumbnailLink: string;
          /**Output only. The thumbnail version for use in thumbnail cache invalidation.*/
          thumbnailVersion: string;
          /**The title of this file. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the title is constant.*/
          title: string;
          /**The time that the item was trashed (formatted RFC 3339 timestamp). Only populated for items in shared drives.*/
          trashedDate: string;
          /**Output only. If the file has been explicitly trashed, the user who trashed it. Only populated for items in shared drives.*/
          trashingUser: Drive_v2.Drive.V2.Schema.User;
          /**Output only. The permissions for the authenticated user on this file.*/
          userPermission: Drive_v2.Drive.V2.Schema.Permission;
          /**Output only. A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the requesting user.*/
          version: string;
          /**Output only. Metadata about video media. This will only be present for video types.*/
          videoMediaMetadata: Drive_v2.Drive.V2.Schema.FileVideoMediaMetadata;
          /**Output only. A link for downloading the content of the file in a browser using cookie based authentication. In cases where the content is shared publicly, the content can be downloaded without any credentials.*/
          webContentLink: string;
          /**Output only. A link only available on public folders for viewing their static web assets (HTML, CSS, JS, etc) via Google Drive's Website Hosting.*/
          webViewLink: string;
          /**Whether writers can share the document with other users.Not populated for items in shared drives.*/
          writersCanShare: boolean;
        }
        /**A set of restrictions that apply to this shared drive or items inside this shared drive.*/
        interface DriveRestrictions {
          /**Whether administrative privileges on this shared drive are required to modify restrictions.*/
          adminManagedRestrictions: boolean;
          /**Whether the options to copy,print,or download files inside this shared drive,should be disabled for readers and commenters.When this restriction is set to `true`,it will override the similarly named field to `true`for any file inside this shared drive.*/
          copyRequiresWriterPermission: boolean;
          /**Whether access to this shared drive and items inside this shared drive is restricted to users of the domain to which this shared drive belongs.This restriction may be overridden by other sharing policies controlled outside of this shared drive.*/
          domainUsersOnly: boolean;
          /**Whether access to items inside this shared drive is restricted to its members.*/
          driveMembersOnly: boolean;
          /**If true,only users with the organizer role can share folders.If false,users with either the organizer role or the file organizer role can share folders.*/
          sharingFoldersRequiresOrganizerPermission: boolean;
        }
        /**A list of shared drives.*/
        interface DriveList {
          /**The list of shared drives.If nextPageToken is populated,then this list may be incomplete and an additional page of results should be fetched.*/
          items: Drive_v2.Drive.V2.Schema.Drive[];
          /**This is always `drive#driveList`*/
          kind: string;
          /**The page token for the next page of shared drives.This will be absent if the end of the list has been reached.If the token is rejected for any reason,it should be discarded,and pagination should be restarted from the first page of results.*/
          nextPageToken: string;
        }
        /**Output only.Capabilities the current user has on this shared drive.*/
        interface DriveCapabilities {
          /**Output only.Whether the current user can add children to folders in this shared drive.*/
          canAddChildren: boolean;
          /**Output only.Whether the current user can change the `copyRequiresWriterPermission`restriction of this shared drive.*/
          canChangeCopyRequiresWriterPermissionRestriction: boolean;
          /**Output only.Whether the current user can change the `domainUsersOnly`restriction of this shared drive.*/
          canChangeDomainUsersOnlyRestriction: boolean;
          /**Output only.Whether the current user can change the background of this shared drive.*/
          canChangeDriveBackground: boolean;
          /**Output only.Whether the current user can change the `driveMembersOnly`restriction of this shared drive.*/
          canChangeDriveMembersOnlyRestriction: boolean;
          /**Output only.Whether the current user can change the `sharingFoldersRequiresOrganizerPermission`restriction of this shared drive.*/
          canChangeSharingFoldersRequiresOrganizerPermissionRestriction: boolean;
          /**Output only.Whether the current user can comment on files in this shared drive.*/
          canComment: boolean;
          /**Output only.Whether the current user can copy files in this shared drive.*/
          canCopy: boolean;
          /**Output only.Whether the current user can delete children from folders in this shared drive.*/
          canDeleteChildren: boolean;
          /**Output only.Whether the current user can delete this shared drive.Attempting to delete the shared drive may still fail if there are untrashed items inside the shared drive.*/
          canDeleteDrive: boolean;
          /**Output only.Whether the current user can download files in this shared drive.*/
          canDownload: boolean;
          /**Output only.Whether the current user can edit files in this shared drive*/
          canEdit: boolean;
          /**Output only.Whether the current user can list the children of folders in this shared drive.*/
          canListChildren: boolean;
          /**Output only.Whether the current user can add members to this shared drive or remove them or change their role.*/
          canManageMembers: boolean;
          /**Output only.Whether the current user can read the revisions resource of files in this shared drive.*/
          canReadRevisions: boolean;
          /**Output only.Whether the current user can rename files or folders in this shared drive.*/
          canRename: boolean;
          /**Output only.Whether the current user can rename this shared drive.*/
          canRenameDrive: boolean;
          /**Output only.Whether the current user can reset the shared drive restrictions to defaults.*/
          canResetDriveRestrictions: boolean;
          /**Output only.Whether the current user can share files or folders in this shared drive.*/
          canShare: boolean;
          /**Output only.Whether the current user can trash children from folders in this shared drive.*/
          canTrashChildren: boolean;
        }
        /**An image file and cropping parameters from which a background image for this shared drive is set.This is a write only field;it can only be set on `drive.drives.update`requests that don 't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set.*/
        interface DriveBackgroundImageFile {
          /**The ID of an image file in Google Drive to use for the background image.*/
          id: string;
          /**The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high.*/
          width: number;
          /**The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side of the cropping area divided by the width of the entire image.*/
          xCoordinate: number;
          /**The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of the cropping area divided by the height of the entire image.*/
          yCoordinate: number;
        }
        /**Representation of a shared drive. Some resource methods (such as `drives.update`) require a `driveId`. Use the `drives.list` method to retrieve the ID for a shared drive.*/
        interface Drive {
          /**An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on `drive.drives.update` requests that don't set `themeId`.When specified,all fields of the `backgroundImageFile`must be set.*/
          backgroundImageFile: Drive_v2.Drive.V2.Schema.DriveBackgroundImageFile;
          /**Output only.A short-lived link to this shared drive 's background image.*/
          backgroundImageLink: string;
          /**Output only. Capabilities the current user has on this shared drive.*/
          capabilities: Drive_v2.Drive.V2.Schema.DriveCapabilities;
          /**The color of this shared drive as an RGB hex string. It can only be set on a `drive.drives.update` request that does not set `themeId`.*/
          colorRgb: string;
          /**The time at which the shared drive was created (RFC 3339 date-time).*/
          createdDate: string;
          /**Whether the shared drive is hidden from default view.*/
          hidden: boolean;
          /**Output only. The ID of this shared drive which is also the ID of the top level folder of this shared drive.*/
          id: string;
          /**Output only. This is always `drive#drive`*/
          kind: string;
          /**The name of this shared drive.*/
          name: string;
          /**Output only. The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`.*/
          orgUnitId: string;
          /**A set of restrictions that apply to this shared drive or items inside this shared drive.*/
          restrictions: Drive_v2.Drive.V2.Schema.DriveRestrictions;
          /**The ID of the theme from which the background image and color will be set. The set of possible `driveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.drives.insert` request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set `colorRgb`or `backgroundImageFile`.*/
          themeId: string;
        }
        /**A restriction for accessing the content of the file.*/
        interface ContentRestriction {
          /**Whether the content restriction can only be modified or removed by a user who owns the file.For files in shared drives,any user with `organizer`capabilities can modify or remove this content restriction.*/
          ownerRestricted: boolean;
          /**Whether the content of the file is read-only.If a file is read-only,a new revision of the file may not be added,comments may not be added or modified,and the title of the file may not be modified.*/
          readOnly: boolean;
          /**Reason for why the content of the file is restricted.This is only mutable on requests that also set `readOnly=true`.*/
          reason: string;
          /**Output only.The user who set the content restriction.Only populated if `readOnly`is true.*/
          restrictingUser: Drive_v2.Drive.V2.Schema.User;
          /**The time at which the content restriction was set(formatted RFC 3339 timestamp).Only populated if readOnly is true.*/
          restrictionDate: string;
          /**Output only.Whether the content restriction was applied by the system,for example due to an esignature.Users cannot modify or remove system restricted content restrictions.*/
          systemRestricted: boolean;
          /**Output only.The type of the content restriction.Currently the only possible value is `globalContentRestriction`.*/
          type: string;
        }
        /**A list of replies to a comment on a file in Google Drive.*/
        interface CommentReplyList {
          /**The list of replies.If nextPageToken is populated,then this list may be incomplete and an additional page of results should be fetched.*/
          items: Drive_v2.Drive.V2.Schema.CommentReply[];
          /**This is always `drive#commentReplyList`.*/
          kind: string;
          /**A link to the next page of replies.*/
          nextLink: string;
          /**The page token for the next page of replies.This will be absent if the end of the replies list has been reached.If the token is rejected for any reason,it should be discarded,and pagination should be restarted from the first page of results.*/
          nextPageToken: string;
          /**A link back to this list.*/
          selfLink: string;
        }
        /**A comment on a file in Google Drive.Some resource methods(such as `replies.update`)require a `replyId`.Use the `replies.list`method to retrieve the ID for a reply.*/
        interface CommentReply {
          /**Output only.The author of the reply.The author 's email address and permission ID will not be populated.*/
          author: Drive_v2.Drive.V2.Schema.User;
          /**The plain text content used to create this reply. This is not HTML safe and should only be used as a starting point to make edits to a reply's content.This field is required on inserts if no verb is specified(resolve/reopen).*/
          content: string;
          /**The date when this reply was first created.*/
          createdDate: string;
          /**Output only.Whether this reply has been deleted.If a reply has been deleted the content will be cleared and this will only represent a reply that once existed.*/
          deleted: boolean;
          /**Output only.HTML formatted content for this reply.*/
          htmlContent: string;
          /**Output only.This is always `drive#commentReply`.*/
          kind: string;
          /**The date when this reply was last modified.*/
          modifiedDate: string;
          /**Output only.The ID of the reply.*/
          replyId: string;
          /**The action this reply performed to the parent comment.When creating a new reply this is the action to be perform to the parent comment.Possible values are: *`resolve`-To resolve a comment.*`reopen`-To reopen(un-resolve)a comment.*/
          verb: string;
        }
        /**A list of comments on a file in Google Drive.*/
        interface CommentList {
          /**The list of comments.If nextPageToken is populated,then this list may be incomplete and an additional page of results should be fetched.*/
          items: Drive_v2.Drive.V2.Schema.Comment[];
          /**This is always `drive#commentList`.*/
          kind: string;
          /**A link to the next page of comments.*/
          nextLink: string;
          /**The page token for the next page of comments.This will be absent if the end of the comments list has been reached.If the token is rejected for any reason,it should be discarded,and pagination should be restarted from the first page of results.*/
          nextPageToken: string;
          /**A link back to this list.*/
          selfLink: string;
        }
        /**The context of the file which is being commented on.*/
        interface CommentContext {
          /**The MIME type of the context snippet.*/
          type: string;
          /**Data representation of the segment of the file being commented on.In the case of a text file for example,this would be the actual text that the comment is about.*/
          value: string;
        }
        /**A comment on a file in Google Drive.Some resource methods(such as `comments.update`)require a `commentId`.Use the `comments.list`method to retrieve the ID for a comment in a file.*/
        interface Comment {
          /**A region of the document represented as a JSON string.For details on defining anchor properties,refer to[    Add comments and replies](https: //developers.google.com/drive/api/v2/manage-comments).*/
          anchor: string;
          /**Output only. The author of the comment. The author's email address and permission ID will not be populated.*/
          author: Drive_v2.Drive.V2.Schema.User;
          /**Output only. The ID of the comment.*/
          commentId: string;
          /**The plain text content used to create this comment. This is not HTML safe and should only be used as a starting point to make edits to a comment's content.*/
          content: string;
          /**The context of the file which is being commented on.*/
          context: Drive_v2.Drive.V2.Schema.CommentContext;
          /**The date when this comment was first created.*/
          createdDate: string;
          /**Output only. Whether this comment has been deleted. If a comment has been deleted the content will be cleared and this will only represent a comment that once existed.*/
          deleted: boolean;
          /**Output only. The file which this comment is addressing.*/
          fileId: string;
          /**Output only. The title of the file which this comment is addressing.*/
          fileTitle: string;
          /**Output only. HTML formatted content for this comment.*/
          htmlContent: string;
          /**Output only. This is always `drive#comment`.*/
          kind: string;
          /**The date when this comment or any of its replies were last modified.*/
          modifiedDate: string;
          /**Output only. Replies to this post.*/
          replies: Drive_v2.Drive.V2.Schema.CommentReply[];
          /**Output only. A link back to this comment.*/
          selfLink: string;
          /**Output only. The status of this comment. Status can be changed by posting a reply to a comment with the desired status. * `open` - The comment is still open. * `resolved` - The comment has been resolved by one of its replies.*/
          status: string;
        }
        /**A reference to a folder's child. Some resource methods (such as `children.get`) require a `childId`. Use the `children.list` method to retrieve the ID of the child.*/
        interface ChildReference {
          /**Output only. A link to the child.*/
          childLink: string;
          /**The ID of the child.*/
          id: string;
          /**Output only. This is always `drive#childReference`.*/
          kind: string;
          /**Output only. A link back to this reference.*/
          selfLink: string;
        }
        /**A list of children of a file.*/
        interface ChildList {
          /**The ETag of the list.*/
          etag: string;
          /**The list of children. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.*/
          items: Drive_v2.Drive.V2.Schema.ChildReference[];
          /**This is always `drive#childList`.*/
          kind: string;
          /**A link to the next page of children.*/
          nextLink: string;
          /**The page token for the next page of children. This will be absent if the end of the children list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.*/
          nextPageToken: string;
          /**A link back to this list.*/
          selfLink: string;
        }
        /**A notification channel used to watch for resource changes.*/
        interface Channel {
          /**The address where notifications are delivered for this channel.*/
          address: string;
          /**Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.*/
          expiration: string;
          /**A UUID or similar unique string that identifies this channel.*/
          id: string;
          /**Identifies this as a notification channel used to watch for changes to a resource, which is `api#channel`.*/
          kind: string;
          /**Additional parameters controlling delivery channel behavior. Optional.*/
          params: Object;
          /**A Boolean value to indicate whether payload is wanted. Optional.*/
          payload: boolean;
          /**An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.*/
          resourceId: string;
          /**A version-specific identifier for the watched resource.*/
          resourceUri: string;
          /**An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.*/
          token: string;
          /**The type of delivery mechanism used for this channel. Valid values are "web_hook" or "webhook".*/
          type: string;
        }
        /**A list of changes for a user.*/
        interface ChangeList {
          /**The ETag of the list.*/
          etag: string;
          /**The list of changes. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.*/
          items: Drive_v2.Drive.V2.Schema.Change[];
          /**This is always `drive#changeList`.*/
          kind: string;
          /**The current largest change ID.*/
          largestChangeId: string;
          /**The starting page token for future changes. This will be present only if the end of the current changes list has been reached.*/
          newStartPageToken: string;
          /**A link to the next page of changes.*/
          nextLink: string;
          /**The page token for the next page of changes. This will be absent if the end of the changes list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.*/
          nextPageToken: string;
          /**A link back to this list.*/
          selfLink: string;
        }
        /**Representation of a change to a file or shared drive.*/
        interface Change {
          /**The type of the change. Possible values are `file` and `drive`.*/
          changeType: string;
          /**Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access.*/
          deleted: boolean;
          /**The updated state of the shared drive. Present if the changeType is drive, the user is still a member of the shared drive, and the shared drive has not been deleted.*/
          drive: Drive_v2.Drive.V2.Schema.Drive;
          /**The ID of the shared drive associated with this change.*/
          driveId: string;
          /**The updated state of the file. Present if the type is file and the file has not been removed from this list of changes.*/
          file: Drive_v2.Drive.V2.Schema.File;
          /**The ID of the file associated with this change.*/
          fileId: string;
          /**The ID of the change.*/
          id: string;
          /**This is always `drive#change`.*/
          kind: string;
          /**The time of this modification.*/
          modificationDate: string;
          /**A link back to this change.*/
          selfLink: string;
          /**Deprecated: Use `drive` instead.*/
          teamDrive: Drive_v2.Drive.V2.Schema.TeamDrive;
          /**Deprecated: Use `driveId` instead.*/
          teamDriveId: string;
          /**Deprecated: Use `changeType` instead.*/
          type: string;
        }
        /**A list of third-party applications which the user has installed or given access to Google Drive.*/
        interface AppList {
          /**List of app IDs that the user has specified to use by default. The list is in reverse-priority order (lowest to highest).*/
          defaultAppIds: string[];
          /**The ETag of the list.*/
          etag: string;
          /**The list of apps.*/
          items: Drive_v2.Drive.V2.Schema.App[];
          /**This is always `drive#appList`.*/
          kind: string;
          /**A link back to this list.*/
          selfLink: string;
        }
        interface AppIcons {
          /**Category of the icon. Allowed values are: * `application` - icon for the application * `document` - icon for a file associated with the app * `documentShared` - icon for a shared file associated with the app*/
          category: string;
          /**URL for the icon.*/
          iconUrl: string;
          /**Size of the icon. Represented as the maximum of the width and height.*/
          size: Integer;
        }
        /**The apps resource provides a list of the apps that a user has installed, with information about each app's supported MIME types, file extensions, and other details. Some resource methods (such as `apps.get`) require an `appId`. Use the `apps.list` method to retrieve the ID for an installed application.*/
        interface App {
          /**Whether the app is authorized to access data on the user's Drive.*/
          authorized: boolean;
          /**The template url to create a new file with this app in a given folder. The template will contain {folderId} to be replaced by the folder to create the new file in.*/
          createInFolderTemplate: string;
          /**The url to create a new file with this app.*/
          createUrl: string;
          /**Whether the app has drive-wide scope. An app with drive-wide scope can access all files in the user's drive.*/
          hasDriveWideScope: boolean;
          /**The various icons for the app.*/
          icons: Drive_v2.Drive.V2.Schema.AppIcons[];
          /**The ID of the app.*/
          id: string;
          /**Whether the app is installed.*/
          installed: boolean;
          /**This is always `drive#app`.*/
          kind: string;
          /**A long description of the app.*/
          longDescription: string;
          /**The name of the app.*/
          name: string;
          /**The type of object this app creates (e.g. Chart). If empty, the app name should be used instead.*/
          objectType: string;
          /**The template url for opening files with this app. The template will contain `{ids}` and/or `{exportIds}` to be replaced by the actual file ids. See Open Files for the full documentation.*/
          openUrlTemplate: string;
          /**The list of primary file extensions.*/
          primaryFileExtensions: string[];
          /**The list of primary mime types.*/
          primaryMimeTypes: string[];
          /**The ID of the product listing for this app.*/
          productId: string;
          /**A link to the product listing for this app.*/
          productUrl: string;
          /**The list of secondary file extensions.*/
          secondaryFileExtensions: string[];
          /**The list of secondary mime types.*/
          secondaryMimeTypes: string[];
          /**A short description of the app.*/
          shortDescription: string;
          /**Whether this app supports creating new objects.*/
          supportsCreate: boolean;
          /**Whether this app supports importing from Docs Editors.*/
          supportsImport: boolean;
          /**Whether this app supports opening more than one file.*/
          supportsMultiOpen: boolean;
          /**Whether this app supports creating new files when offline.*/
          supportsOfflineCreate: boolean;
          /**Whether the app is selected as the default handler for the types it supports.*/
          useByDefault: boolean;
        }
        interface AboutTeamDriveThemes {
          /**Deprecated: Use `driveThemes/backgroundImageLink` instead.*/
          backgroundImageLink: string;
          /**Deprecated: Use `driveThemes/colorRgb` instead.*/
          colorRgb: string;
          /**Deprecated: Use `driveThemes/id` instead.*/
          id: string;
        }
        interface AboutQuotaBytesByService {
          /**The storage quota bytes used by the service.*/
          bytesUsed: string;
          /**The service's name, e.g. DRIVE, GMAIL, or PHOTOS.*/
          serviceName: string;
        }
        interface AboutMaxUploadSizes {
          /**The max upload size for this type.*/
          size: string;
          /**The file type.*/
          type: string;
        }
        interface AboutImportFormats {
          /**The imported file's content type to convert from.*/
          source: string;
          /**The possible content types to convert to.*/
          targets: string[];
        }
        interface AboutFeatures {
          /**The name of the feature.*/
          featureName: string;
          /**The request limit rate for this feature, in queries per second.*/
          featureRate: number;
        }
        interface AboutExportFormats {
          /**The content type to convert from.*/
          source: string;
          /**The possible content types to convert to.*/
          targets: string[];
        }
        interface AboutDriveThemes {
          /**A link to this theme's background image.*/
          backgroundImageLink: string;
          /**The color of this theme as an RGB hex string.*/
          colorRgb: string;
          /**The ID of the theme.*/
          id: string;
        }
        interface AboutAdditionalRoleInfoRoleSets {
          /**The supported additional roles with the primary role.*/
          additionalRoles: string[];
          /**A primary permission role.*/
          primaryRole: string;
        }
        interface AboutAdditionalRoleInfo {
          /**The supported additional roles per primary role.*/
          roleSets: Drive_v2.Drive.V2.Schema.AboutAdditionalRoleInfoRoleSets[];
          /**The content type that this additional role info applies to.*/
          type: string;
        }
        /**An item with user information and settings.*/
        interface About {
          /**Information about supported additional roles per file type. The most specific type takes precedence.*/
          additionalRoleInfo: Drive_v2.Drive.V2.Schema.AboutAdditionalRoleInfo[];
          /**Whether the user can create shared drives.*/
          canCreateDrives: boolean;
          /**Deprecated: Use `canCreateDrives` instead.*/
          canCreateTeamDrives: boolean;
          /**The domain sharing policy for the current user. Possible values are: * `allowed` * `allowedWithWarning` * `incomingOnly` * `disallowed`*/
          domainSharingPolicy: string;
          /**A list of themes that are supported for shared drives.*/
          driveThemes: Drive_v2.Drive.V2.Schema.AboutDriveThemes[];
          /**The ETag of the item.*/
          etag: string;
          /**The allowable export formats.*/
          exportFormats: Drive_v2.Drive.V2.Schema.AboutExportFormats[];
          /**List of additional features enabled on this account.*/
          features: Drive_v2.Drive.V2.Schema.AboutFeatures[];
          /**The palette of allowable folder colors as RGB hex strings.*/
          folderColorPalette: string[];
          /**The allowable import formats.*/
          importFormats: Drive_v2.Drive.V2.Schema.AboutImportFormats[];
          /**A boolean indicating whether the authenticated app is installed by the authenticated user.*/
          isCurrentAppInstalled: boolean;
          /**This is always `drive#about`.*/
          kind: string;
          /**The user's language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/).*/
          languageCode: string;
          /**The largest change id.*/
          largestChangeId: string;
          /**List of max upload sizes for each file type. The most specific type takes precedence.*/
          maxUploadSizes: Drive_v2.Drive.V2.Schema.AboutMaxUploadSizes[];
          /**The name of the current user.*/
          name: string;
          /**The current user's ID as visible in the permissions collection.*/
          permissionId: string;
          /**The amount of storage quota used by different Google services.*/
          quotaBytesByService: Drive_v2.Drive.V2.Schema.AboutQuotaBytesByService[];
          /**The total number of quota bytes. This is only relevant when quotaType is LIMITED.*/
          quotaBytesTotal: string;
          /**The number of quota bytes used by Google Drive.*/
          quotaBytesUsed: string;
          /**The number of quota bytes used by all Google apps (Drive, Picasa, etc.).*/
          quotaBytesUsedAggregate: string;
          /**The number of quota bytes used by trashed items.*/
          quotaBytesUsedInTrash: string;
          /**The type of the user's storage quota. Possible values are: * `LIMITED` * `UNLIMITED`*/
          quotaType: string;
          /**The number of remaining change ids, limited to no more than 2500.*/
          remainingChangeIds: string;
          /**The id of the root folder.*/
          rootFolderId: string;
          /**A link back to this item.*/
          selfLink: string;
          /**Deprecated: Use `driveThemes` instead.*/
          teamDriveThemes: Drive_v2.Drive.V2.Schema.AboutTeamDriveThemes[];
          /**The authenticated user.*/
          user: Drive_v2.Drive.V2.Schema.User;
        }
      }
      module Collection {
        interface TeamdrivesCollection {
          /**Deprecated: Use `drives.get` instead.
@param teamDriveId The ID of the Team Drive*/
          get(teamDriveId: string): Drive_v2.Drive.V2.Schema.TeamDrive;
          /**Deprecated: Use `drives.get` instead.
@param teamDriveId The ID of the Team Drive
@param optionalArgs Optional arguments.*/
          get(
            teamDriveId: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.TeamDrive;
          /**Deprecated: Use `drives.insert` instead.
@param requestId Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned.*/
          insert(
            resource: Drive.V2.Schema.TeamDrive,
            requestId: string,
          ): Drive_v2.Drive.V2.Schema.TeamDrive;
          /**Deprecated: Use `drives.list` instead.*/
          list(): Drive_v2.Drive.V2.Schema.TeamDriveList;
          /**Deprecated: Use `drives.list` instead.
@param optionalArgs Optional arguments.*/
          list(optionalArgs: Object): Drive_v2.Drive.V2.Schema.TeamDriveList;
          /**Deprecated: Use `drives.delete` instead.
@param teamDriveId The ID of the Team Drive*/
          remove(teamDriveId: string): void;
          /**Deprecated: Use `drives.update` instead.
@param teamDriveId The ID of the Team Drive*/
          update(
            resource: Drive.V2.Schema.TeamDrive,
            teamDriveId: string,
          ): Drive_v2.Drive.V2.Schema.TeamDrive;
          /**Deprecated: Use `drives.update` instead.
@param teamDriveId The ID of the Team Drive
@param optionalArgs Optional arguments.*/
          update(
            resource: Drive.V2.Schema.TeamDrive,
            teamDriveId: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.TeamDrive;
        }
        interface RevisionsCollection {
          /**Gets a specific revision.
@param fileId The ID of the file.
@param revisionId The ID of the revision.*/
          get(
            fileId: string,
            revisionId: string,
          ): Drive_v2.Drive.V2.Schema.Revision;
          /**Lists a file's revisions.
@param fileId The ID of the file.*/
          list(fileId: string): Drive_v2.Drive.V2.Schema.RevisionList;
          /**Lists a file's revisions.
@param fileId The ID of the file.
@param optionalArgs Optional arguments.*/
          list(
            fileId: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.RevisionList;
          /**Updates a revision.
@param fileId The ID for the file.
@param revisionId The ID for the revision.*/
          patch(
            resource: Drive.V2.Schema.Revision,
            fileId: string,
            revisionId: string,
          ): Drive_v2.Drive.V2.Schema.Revision;
          /**Permanently deletes a file version. You can only delete revisions for files with binary content, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
@param fileId The ID of the file.
@param revisionId The ID of the revision.*/
          remove(fileId: string, revisionId: string): void;
          /**Updates a revision.
@param fileId The ID for the file.
@param revisionId The ID for the revision.*/
          update(
            resource: Drive.V2.Schema.Revision,
            fileId: string,
            revisionId: string,
          ): Drive_v2.Drive.V2.Schema.Revision;
        }
        interface RepliesCollection {
          /**Gets a reply.
@param fileId The ID of the file.
@param commentId The ID of the comment.
@param replyId The ID of the reply.*/
          get(
            fileId: string,
            commentId: string,
            replyId: string,
          ): Drive_v2.Drive.V2.Schema.CommentReply;
          /**Gets a reply.
@param fileId The ID of the file.
@param commentId The ID of the comment.
@param replyId The ID of the reply.
@param optionalArgs Optional arguments.*/
          get(
            fileId: string,
            commentId: string,
            replyId: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.CommentReply;
          /**Creates a new reply to the given comment.
@param fileId The ID of the file.
@param commentId The ID of the comment.*/
          insert(
            resource: Drive.V2.Schema.CommentReply,
            fileId: string,
            commentId: string,
          ): Drive_v2.Drive.V2.Schema.CommentReply;
          /**Lists all of the replies to a comment.
@param fileId The ID of the file.
@param commentId The ID of the comment.*/
          list(
            fileId: string,
            commentId: string,
          ): Drive_v2.Drive.V2.Schema.CommentReplyList;
          /**Lists all of the replies to a comment.
@param fileId The ID of the file.
@param commentId The ID of the comment.
@param optionalArgs Optional arguments.*/
          list(
            fileId: string,
            commentId: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.CommentReplyList;
          /**Updates an existing reply.
@param fileId The ID of the file.
@param commentId The ID of the comment.
@param replyId The ID of the reply.*/
          patch(
            resource: Drive.V2.Schema.CommentReply,
            fileId: string,
            commentId: string,
            replyId: string,
          ): Drive_v2.Drive.V2.Schema.CommentReply;
          /**Deletes a reply.
@param fileId The ID of the file.
@param commentId The ID of the comment.
@param replyId The ID of the reply.*/
          remove(fileId: string, commentId: string, replyId: string): void;
          /**Updates an existing reply.
@param fileId The ID of the file.
@param commentId The ID of the comment.
@param replyId The ID of the reply.*/
          update(
            resource: Drive.V2.Schema.CommentReply,
            fileId: string,
            commentId: string,
            replyId: string,
          ): Drive_v2.Drive.V2.Schema.CommentReply;
        }
        interface PropertiesCollection {
          /**Gets a property by its key.
@param fileId The ID of the file.
@param propertyKey The key of the property.*/
          get(
            fileId: string,
            propertyKey: string,
          ): Drive_v2.Drive.V2.Schema.Property;
          /**Gets a property by its key.
@param fileId The ID of the file.
@param propertyKey The key of the property.
@param optionalArgs Optional arguments.*/
          get(
            fileId: string,
            propertyKey: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.Property;
          /**Adds a property to a file, or updates it if it already exists.
@param fileId The ID of the file.*/
          insert(
            resource: Drive.V2.Schema.Property,
            fileId: string,
          ): Drive_v2.Drive.V2.Schema.Property;
          /**Lists a file's properties.
@param fileId The ID of the file.*/
          list(fileId: string): Drive_v2.Drive.V2.Schema.PropertyList;
          /**Updates a property.
@param fileId The ID of the file.
@param propertyKey The key of the property.*/
          patch(
            resource: Drive.V2.Schema.Property,
            fileId: string,
            propertyKey: string,
          ): Drive_v2.Drive.V2.Schema.Property;
          /**Updates a property.
@param fileId The ID of the file.
@param propertyKey The key of the property.
@param optionalArgs Optional arguments.*/
          patch(
            resource: Drive.V2.Schema.Property,
            fileId: string,
            propertyKey: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.Property;
          /**Deletes a property.
@param fileId The ID of the file.
@param propertyKey The key of the property.*/
          remove(fileId: string, propertyKey: string): void;
          /**Deletes a property.
@param fileId The ID of the file.
@param propertyKey The key of the property.
@param optionalArgs Optional arguments.*/
          remove(
            fileId: string,
            propertyKey: string,
            optionalArgs: Object,
          ): void;
          /**Updates a property.
@param fileId The ID of the file.
@param propertyKey The key of the property.*/
          update(
            resource: Drive.V2.Schema.Property,
            fileId: string,
            propertyKey: string,
          ): Drive_v2.Drive.V2.Schema.Property;
          /**Updates a property.
@param fileId The ID of the file.
@param propertyKey The key of the property.
@param optionalArgs Optional arguments.*/
          update(
            resource: Drive.V2.Schema.Property,
            fileId: string,
            propertyKey: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.Property;
        }
        interface PermissionsCollection {
          /**Gets a permission by ID.
@param fileId The ID for the file or shared drive.
@param permissionId The ID for the permission.*/
          get(
            fileId: string,
            permissionId: string,
          ): Drive_v2.Drive.V2.Schema.Permission;
          /**Gets a permission by ID.
@param fileId The ID for the file or shared drive.
@param permissionId The ID for the permission.
@param optionalArgs Optional arguments.*/
          get(
            fileId: string,
            permissionId: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.Permission;
          /**Returns the permission ID for an email address.
@param email The email address for which to return a permission ID*/
          getIdForEmail(email: string): Drive_v2.Drive.V2.Schema.PermissionId;
          /**Inserts a permission for a file or shared drive. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
@param fileId The ID for the file or shared drive.*/
          insert(
            resource: Drive.V2.Schema.Permission,
            fileId: string,
          ): Drive_v2.Drive.V2.Schema.Permission;
          /**Inserts a permission for a file or shared drive. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
@param fileId The ID for the file or shared drive.
@param optionalArgs Optional arguments.*/
          insert(
            resource: Drive.V2.Schema.Permission,
            fileId: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.Permission;
          /**Lists a file's or shared drive's permissions.
@param fileId The ID for the file or shared drive.*/
          list(fileId: string): Drive_v2.Drive.V2.Schema.PermissionList;
          /**Lists a file's or shared drive's permissions.
@param fileId The ID for the file or shared drive.
@param optionalArgs Optional arguments.*/
          list(
            fileId: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.PermissionList;
          /**Updates a permission using patch semantics. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
@param fileId The ID for the file or shared drive.
@param permissionId The ID for the permission.*/
          patch(
            resource: Drive.V2.Schema.Permission,
            fileId: string,
            permissionId: string,
          ): Drive_v2.Drive.V2.Schema.Permission;
          /**Updates a permission using patch semantics. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
@param fileId The ID for the file or shared drive.
@param permissionId The ID for the permission.
@param optionalArgs Optional arguments.*/
          patch(
            resource: Drive.V2.Schema.Permission,
            fileId: string,
            permissionId: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.Permission;
          /**Deletes a permission from a file or shared drive. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
@param fileId The ID for the file or shared drive.
@param permissionId The ID for the permission.*/
          remove(fileId: string, permissionId: string): void;
          /**Deletes a permission from a file or shared drive. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
@param fileId The ID for the file or shared drive.
@param permissionId The ID for the permission.
@param optionalArgs Optional arguments.*/
          remove(
            fileId: string,
            permissionId: string,
            optionalArgs: Object,
          ): void;
          /**Updates a permission. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
@param fileId The ID for the file or shared drive.
@param permissionId The ID for the permission.*/
          update(
            resource: Drive.V2.Schema.Permission,
            fileId: string,
            permissionId: string,
          ): Drive_v2.Drive.V2.Schema.Permission;
          /**Updates a permission. **Warning:** Concurrent permissions operations on the same file are not supported; only the last update is applied.
@param fileId The ID for the file or shared drive.
@param permissionId The ID for the permission.
@param optionalArgs Optional arguments.*/
          update(
            resource: Drive.V2.Schema.Permission,
            fileId: string,
            permissionId: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.Permission;
        }
        interface ParentsCollection {
          /**Gets a specific parent reference.
@param fileId The ID of the file.
@param parentId The ID of the parent.*/
          get(
            fileId: string,
            parentId: string,
          ): Drive_v2.Drive.V2.Schema.ParentReference;
          /**Adds a parent folder for a file.
@param fileId The ID of the file.*/
          insert(
            resource: Drive.V2.Schema.ParentReference,
            fileId: string,
          ): Drive_v2.Drive.V2.Schema.ParentReference;
          /**Adds a parent folder for a file.
@param fileId The ID of the file.
@param optionalArgs Optional arguments.*/
          insert(
            resource: Drive.V2.Schema.ParentReference,
            fileId: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.ParentReference;
          /**Lists a file's parents.
@param fileId The ID of the file.*/
          list(fileId: string): Drive_v2.Drive.V2.Schema.ParentList;
          /**Removes a parent from a file.
@param fileId The ID of the file.
@param parentId The ID of the parent.*/
          remove(fileId: string, parentId: string): void;
          /**Removes a parent from a file.
@param fileId The ID of the file.
@param parentId The ID of the parent.
@param optionalArgs Optional arguments.*/
          remove(fileId: string, parentId: string, optionalArgs: Object): void;
        }
        interface FilesCollection {
          /**Creates a copy of the specified file.
@param fileId The ID of the file to copy.*/
          copy(
            resource: Drive.V2.Schema.File,
            fileId: string,
          ): Drive_v2.Drive.V2.Schema.File;
          /**Creates a copy of the specified file.
@param fileId The ID of the file to copy.
@param optionalArgs Optional arguments.*/
          copy(
            resource: Drive.V2.Schema.File,
            fileId: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.File;
          /**Permanently deletes all of the user's trashed files.*/
          emptyTrash(): void;
          /**Permanently deletes all of the user's trashed files.
@param optionalArgs Optional arguments.*/
          emptyTrash(optionalArgs: Object): void;
          /**Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.
@param fileId The ID of the file.
@param mimeType Required. The MIME type of the format requested for this export.*/
          export(fileId: string, mimeType: string): void;
          /**Generates a set of file IDs which can be provided in insert or copy requests.*/
          generateIds(): Drive_v2.Drive.V2.Schema.GeneratedIds;
          /**Generates a set of file IDs which can be provided in insert or copy requests.
@param optionalArgs Optional arguments.*/
          generateIds(
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.GeneratedIds;
          /** Gets a file's metadata or content by ID. If you provide the URL parameter `alt=media`, then the response includes the file contents in the response body. Downloading content with `alt=media` only works if the file is stored in Drive. To download Google Docs, Sheets, and Slides use [`files.export`](/drive/api/reference/rest/v2/files/export) instead. For more information, see [Download & export files](/drive/api/guides/manage-downloads).
@param fileId The ID for the file in question.*/
          get(fileId: string): Drive_v2.Drive.V2.Schema.File;
          /** Gets a file's metadata or content by ID. If you provide the URL parameter `alt=media`, then the response includes the file contents in the response body. Downloading content with `alt=media` only works if the file is stored in Drive. To download Google Docs, Sheets, and Slides use [`files.export`](/drive/api/reference/rest/v2/files/export) instead. For more information, see [Download & export files](/drive/api/guides/manage-downloads).
@param fileId The ID for the file in question.
@param optionalArgs Optional arguments.*/
          get(
            fileId: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.File;
          /** Inserts a new file. This method supports an *\/upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*\/*` Note: Specify a valid MIME type, rather than the literal `*\/*` value. The literal `*\/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/drive/api/guides/manage-uploads). Apps creating shortcuts with `files.insert` must specify the MIME type `application/vnd.google-apps.shortcut`. Apps should specify a file extension in the `title` property when inserting files with the API. For example, an operation to insert a JPEG file should specify something like `"title": "cat.jpg"` in the metadata. Subsequent `GET` requests include the read-only `fileExtension` property populated with the extension originally specified in the `title` property. When a Google Drive user requests to download a file, or when the file is downloaded through the sync client, Drive builds a full filename (with extension) based on the title. In cases where the extension is missing, Drive attempts to determine the extension based on the file's MIME type.*/
          insert(resource: Drive.V2.Schema.File): Drive_v2.Drive.V2.Schema.File;
          /** Inserts a new file. This method supports an *\/upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*\/*` Note: Specify a valid MIME type, rather than the literal `*\/*` value. The literal `*\/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/drive/api/guides/manage-uploads). Apps creating shortcuts with `files.insert` must specify the MIME type `application/vnd.google-apps.shortcut`. Apps should specify a file extension in the `title` property when inserting files with the API. For example, an operation to insert a JPEG file should specify something like `"title": "cat.jpg"` in the metadata. Subsequent `GET` requests include the read-only `fileExtension` property populated with the extension originally specified in the `title` property. When a Google Drive user requests to download a file, or when the file is downloaded through the sync client, Drive builds a full filename (with extension) based on the title. In cases where the extension is missing, Drive attempts to determine the extension based on the file's MIME type.
@param mediaData Media blob to upload. Accepts: "*\/*". Max size: 5497558138880.*/
          insert(
            resource: Drive.V2.Schema.File,
            mediaData: Blob,
          ): Drive_v2.Drive.V2.Schema.File;
          /** Inserts a new file. This method supports an *\/upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*\/*` Note: Specify a valid MIME type, rather than the literal `*\/*` value. The literal `*\/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/drive/api/guides/manage-uploads). Apps creating shortcuts with `files.insert` must specify the MIME type `application/vnd.google-apps.shortcut`. Apps should specify a file extension in the `title` property when inserting files with the API. For example, an operation to insert a JPEG file should specify something like `"title": "cat.jpg"` in the metadata. Subsequent `GET` requests include the read-only `fileExtension` property populated with the extension originally specified in the `title` property. When a Google Drive user requests to download a file, or when the file is downloaded through the sync client, Drive builds a full filename (with extension) based on the title. In cases where the extension is missing, Drive attempts to determine the extension based on the file's MIME type.
@param mediaData Media blob to upload. Accepts: "*\/*". Max size: 5497558138880.
@param optionalArgs Optional arguments.*/
          insert(
            resource: Drive.V2.Schema.File,
            mediaData: Blob,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.File;
          /** Lists the user's files. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for files & folders](/drive/api/guides/search-files) guide. *Note:* This method returns *all* files by default, including trashed files. If you don't want trashed files to appear in the list, use the `trashed=false` query parameter to remove trashed files from the results.*/
          list(): Drive_v2.Drive.V2.Schema.FileList;
          /** Lists the user's files. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for files & folders](/drive/api/guides/search-files) guide. *Note:* This method returns *all* files by default, including trashed files. If you don't want trashed files to appear in the list, use the `trashed=false` query parameter to remove trashed files from the results.
@param optionalArgs Optional arguments.*/
          list(optionalArgs: Object): Drive_v2.Drive.V2.Schema.FileList;
          /**Lists the labels on a file.
@param fileId The ID for the file.*/
          listLabels(fileId: string): Drive_v2.Drive.V2.Schema.LabelList;
          /**Lists the labels on a file.
@param fileId The ID for the file.
@param optionalArgs Optional arguments.*/
          listLabels(
            fileId: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.LabelList;
          /**Modifies the set of labels applied to a file. Returns a list of the labels that were added or modified.
@param fileId The ID of the file to which the labels belong.*/
          modifyLabels(
            resource: Drive.V2.Schema.ModifyLabelsRequest,
            fileId: string,
          ): Drive_v2.Drive.V2.Schema.ModifyLabelsResponse;
          /**Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.
@param fileId The ID of the file to update.*/
          patch(
            resource: Drive.V2.Schema.File,
            fileId: string,
          ): Drive_v2.Drive.V2.Schema.File;
          /**Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.
@param fileId The ID of the file to update.
@param optionalArgs Optional arguments.*/
          patch(
            resource: Drive.V2.Schema.File,
            fileId: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.File;
          /**Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive, the user must be an `organizer` on the parent folder. If the target is a folder, all descendants owned by the user are also deleted.
@param fileId The ID of the file to delete.*/
          remove(fileId: string): void;
          /**Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive, the user must be an `organizer` on the parent folder. If the target is a folder, all descendants owned by the user are also deleted.
@param fileId The ID of the file to delete.
@param optionalArgs Optional arguments.*/
          remove(fileId: string, optionalArgs: Object): void;
          /**Set the file's updated time to the current server time.
@param fileId The ID of the file to update.*/
          touch(fileId: string): Drive_v2.Drive.V2.Schema.File;
          /**Set the file's updated time to the current server time.
@param fileId The ID of the file to update.
@param optionalArgs Optional arguments.*/
          touch(
            fileId: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.File;
          /**Moves a file to the trash. The currently authenticated user must own the file or be at least a `fileOrganizer` on the parent for shared drive files.
@param fileId The ID of the file to trash.*/
          trash(fileId: string): Drive_v2.Drive.V2.Schema.File;
          /**Moves a file to the trash. The currently authenticated user must own the file or be at least a `fileOrganizer` on the parent for shared drive files.
@param fileId The ID of the file to trash.
@param optionalArgs Optional arguments.*/
          trash(
            fileId: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.File;
          /**Restores a file from the trash. The currently authenticated user must own the file or be at least a `fileOrganizer` on the parent for shared drive files.
@param fileId The ID of the file to untrash.*/
          untrash(fileId: string): Drive_v2.Drive.V2.Schema.File;
          /**Restores a file from the trash. The currently authenticated user must own the file or be at least a `fileOrganizer` on the parent for shared drive files.
@param fileId The ID of the file to untrash.
@param optionalArgs Optional arguments.*/
          untrash(
            fileId: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.File;
          /** Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as `modifiedDate`. This method supports patch semantics. This method supports an *\/upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*\/*` Note: Specify a valid MIME type, rather than the literal `*\/*` value. The literal `*\/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/drive/api/guides/manage-uploads).
@param fileId The ID of the file to update.*/
          update(
            resource: Drive.V2.Schema.File,
            fileId: string,
          ): Drive_v2.Drive.V2.Schema.File;
          /** Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as `modifiedDate`. This method supports patch semantics. This method supports an *\/upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*\/*` Note: Specify a valid MIME type, rather than the literal `*\/*` value. The literal `*\/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/drive/api/guides/manage-uploads).
@param fileId The ID of the file to update.
@param mediaData Media blob to upload. Accepts: "*\/*". Max size: 5497558138880.*/
          update(
            resource: Drive.V2.Schema.File,
            fileId: string,
            mediaData: Blob,
          ): Drive_v2.Drive.V2.Schema.File;
          /** Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as `modifiedDate`. This method supports patch semantics. This method supports an *\/upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:*`*\/*` Note: Specify a valid MIME type, rather than the literal `*\/*` value. The literal `*\/*` is only used to indicate that any valid MIME type can be uploaded. For more information on uploading files, see [Upload file data](/drive/api/guides/manage-uploads).
@param fileId The ID of the file to update.
@param mediaData Media blob to upload. Accepts: "*\/*". Max size: 5497558138880.
@param optionalArgs Optional arguments.*/
          update(
            resource: Drive.V2.Schema.File,
            fileId: string,
            mediaData: Blob,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.File;
          /**Subscribes to changes to a file.
@param fileId The ID for the file in question.*/
          watch(
            resource: Drive.V2.Schema.Channel,
            fileId: string,
          ): Drive_v2.Drive.V2.Schema.Channel;
          /**Subscribes to changes to a file.
@param fileId The ID for the file in question.
@param optionalArgs Optional arguments.*/
          watch(
            resource: Drive.V2.Schema.Channel,
            fileId: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.Channel;
        }
        interface DrivesCollection {
          /**Gets a shared drive's metadata by ID.
@param driveId The ID of the shared drive.*/
          get(driveId: string): Drive_v2.Drive.V2.Schema.Drive;
          /**Gets a shared drive's metadata by ID.
@param driveId The ID of the shared drive.
@param optionalArgs Optional arguments.*/
          get(
            driveId: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.Drive;
          /**Hides a shared drive from the default view.
@param driveId The ID of the shared drive.*/
          hide(driveId: string): Drive_v2.Drive.V2.Schema.Drive;
          /**Creates a new shared drive.
@param requestId Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already exists a 409 error will be returned.*/
          insert(
            resource: Drive.V2.Schema.Drive,
            requestId: string,
          ): Drive_v2.Drive.V2.Schema.Drive;
          /** Lists the user's shared drives. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for shared drives](/drive/api/guides/search-shareddrives) guide.*/
          list(): Drive_v2.Drive.V2.Schema.DriveList;
          /** Lists the user's shared drives. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for shared drives](/drive/api/guides/search-shareddrives) guide.
@param optionalArgs Optional arguments.*/
          list(optionalArgs: Object): Drive_v2.Drive.V2.Schema.DriveList;
          /**Permanently deletes a shared drive for which the user is an `organizer`. The shared drive cannot contain any untrashed items.
@param driveId The ID of the shared drive.*/
          remove(driveId: string): void;
          /**Permanently deletes a shared drive for which the user is an `organizer`. The shared drive cannot contain any untrashed items.
@param driveId The ID of the shared drive.
@param optionalArgs Optional arguments.*/
          remove(driveId: string, optionalArgs: Object): void;
          /**Restores a shared drive to the default view.
@param driveId The ID of the shared drive.*/
          unhide(driveId: string): Drive_v2.Drive.V2.Schema.Drive;
          /**Updates the metadata for a shared drive.
@param driveId The ID of the shared drive.*/
          update(
            resource: Drive.V2.Schema.Drive,
            driveId: string,
          ): Drive_v2.Drive.V2.Schema.Drive;
          /**Updates the metadata for a shared drive.
@param driveId The ID of the shared drive.
@param optionalArgs Optional arguments.*/
          update(
            resource: Drive.V2.Schema.Drive,
            driveId: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.Drive;
        }
        interface CommentsCollection {
          /**Gets a comment by ID.
@param fileId The ID of the file.
@param commentId The ID of the comment.*/
          get(
            fileId: string,
            commentId: string,
          ): Drive_v2.Drive.V2.Schema.Comment;
          /**Gets a comment by ID.
@param fileId The ID of the file.
@param commentId The ID of the comment.
@param optionalArgs Optional arguments.*/
          get(
            fileId: string,
            commentId: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.Comment;
          /**Creates a new comment on the given file.
@param fileId The ID of the file.*/
          insert(
            resource: Drive.V2.Schema.Comment,
            fileId: string,
          ): Drive_v2.Drive.V2.Schema.Comment;
          /**Lists a file's comments.
@param fileId The ID of the file.*/
          list(fileId: string): Drive_v2.Drive.V2.Schema.CommentList;
          /**Lists a file's comments.
@param fileId The ID of the file.
@param optionalArgs Optional arguments.*/
          list(
            fileId: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.CommentList;
          /**Updates an existing comment.
@param fileId The ID of the file.
@param commentId The ID of the comment.*/
          patch(
            resource: Drive.V2.Schema.Comment,
            fileId: string,
            commentId: string,
          ): Drive_v2.Drive.V2.Schema.Comment;
          /**Deletes a comment.
@param fileId The ID of the file.
@param commentId The ID of the comment.*/
          remove(fileId: string, commentId: string): void;
          /**Updates an existing comment.
@param fileId The ID of the file.
@param commentId The ID of the comment.*/
          update(
            resource: Drive.V2.Schema.Comment,
            fileId: string,
            commentId: string,
          ): Drive_v2.Drive.V2.Schema.Comment;
        }
        interface ChildrenCollection {
          /**Gets a specific child reference.
@param folderId The ID of the folder.
@param childId The ID of the child.*/
          get(
            folderId: string,
            childId: string,
          ): Drive_v2.Drive.V2.Schema.ChildReference;
          /**Inserts a file into a folder.
@param folderId The ID of the folder.*/
          insert(
            resource: Drive.V2.Schema.ChildReference,
            folderId: string,
          ): Drive_v2.Drive.V2.Schema.ChildReference;
          /**Inserts a file into a folder.
@param folderId The ID of the folder.
@param optionalArgs Optional arguments.*/
          insert(
            resource: Drive.V2.Schema.ChildReference,
            folderId: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.ChildReference;
          /**Lists a folder's children.
@param folderId The ID of the folder.*/
          list(folderId: string): Drive_v2.Drive.V2.Schema.ChildList;
          /**Lists a folder's children.
@param folderId The ID of the folder.
@param optionalArgs Optional arguments.*/
          list(
            folderId: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.ChildList;
          /**Removes a child from a folder.
@param folderId The ID of the folder.
@param childId The ID of the child.*/
          remove(folderId: string, childId: string): void;
          /**Removes a child from a folder.
@param folderId The ID of the folder.
@param childId The ID of the child.
@param optionalArgs Optional arguments.*/
          remove(folderId: string, childId: string, optionalArgs: Object): void;
        }
        interface ChannelsCollection {
          /**Stops watching resources through this channel.*/
          stop(resource: Drive.V2.Schema.Channel): void;
        }
        interface ChangesCollection {
          /**Deprecated: Use `changes.getStartPageToken` and `changes.list` to retrieve recent changes.
@param changeId The ID of the change.*/
          get(changeId: string): Drive_v2.Drive.V2.Schema.Change;
          /**Deprecated: Use `changes.getStartPageToken` and `changes.list` to retrieve recent changes.
@param changeId The ID of the change.
@param optionalArgs Optional arguments.*/
          get(
            changeId: string,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.Change;
          /**Gets the starting pageToken for listing future changes.*/
          getStartPageToken(): Drive_v2.Drive.V2.Schema.StartPageToken;
          /**Gets the starting pageToken for listing future changes.
@param optionalArgs Optional arguments.*/
          getStartPageToken(
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.StartPageToken;
          /**Lists the changes for a user or shared drive.*/
          list(): Drive_v2.Drive.V2.Schema.ChangeList;
          /**Lists the changes for a user or shared drive.
@param optionalArgs Optional arguments.*/
          list(optionalArgs: Object): Drive_v2.Drive.V2.Schema.ChangeList;
          /**Subscribe to changes for a user.*/
          watch(
            resource: Drive.V2.Schema.Channel,
          ): Drive_v2.Drive.V2.Schema.Channel;
          /**Subscribe to changes for a user.
@param optionalArgs Optional arguments.*/
          watch(
            resource: Drive.V2.Schema.Channel,
            optionalArgs: Object,
          ): Drive_v2.Drive.V2.Schema.Channel;
        }
        interface AppsCollection {
          /**Gets a specific app.
@param appId The ID of the app.*/
          get(appId: string): Drive_v2.Drive.V2.Schema.App;
          /**Lists a user's installed apps.*/
          list(): Drive_v2.Drive.V2.Schema.AppList;
          /**Lists a user's installed apps.
@param optionalArgs Optional arguments.*/
          list(optionalArgs: Object): Drive_v2.Drive.V2.Schema.AppList;
        }
        interface AboutCollection {
          /**Gets the information about the current user along with Drive API settings*/
          get(): Drive_v2.Drive.V2.Schema.About;
          /**Gets the information about the current user along with Drive API settings
@param optionalArgs Optional arguments.*/
          get(optionalArgs: Object): Drive_v2.Drive.V2.Schema.About;
        }
      }
    }
  }
}
const Drive_v2: Drive_v2;
