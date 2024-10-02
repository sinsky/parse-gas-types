interface PropertiesService {
  /**Gets a property store (for this script only) that all users can access within the open
document, spreadsheet, or form. It is only available if the script is published and executing
as an add-on or if it is [bound](https://developers.google.com/apps-script/scripts_containers) to a Google file
type. When document properties are not available this method returns `null`. Document
properties created by a script are not accessible outside that script, even by other scripts
accessing the same document.
@return a property store for this script only that all users of the current document can
    access, or `null` if the script is not either an add-on or bound to a Google
    Workspace file*/ getDocumentProperties(): PropertiesService.Properties;
  /**Gets a property store that all users can access, but only within this script.
@return a property store that all users of the script can access*/ getScriptProperties(): PropertiesService.Properties;
  /**Gets a property store that only the current user can access, and only within this script.
@return a property store that only the current user of the script can access*/ getUserProperties(): PropertiesService.Properties;
}
module PropertiesService {
  interface Properties {
    /**Deletes all properties in the current `Properties` store.

```
// Deletes all user properties.
var userProperties = PropertiesService.getUserProperties();
userProperties.deleteAllProperties();
```
@return this `Properties` store, for chaining*/ deleteAllProperties(): PropertiesService.Properties;
    /**Deletes the property with the given key in the current `Properties` store.

```
// Deletes the user property 'nickname'.
var userProperties = PropertiesService.getUserProperties();
userProperties.deleteProperty('nickname');
```
@param key the key for the property to delete
@return this `Properties` store, for chaining*/ deleteProperty(
      key: string,
    ): PropertiesService.Properties;
    /**Gets all keys in the current `Properties` store.

```
// Sets several properties, then logs the value of each key.
var scriptProperties = PropertiesService.getScriptProperties();
scriptProperties.setProperties({
  'cow': 'moo',
  'sheep': 'baa',
  'chicken': 'cluck'
});
var keys = scriptProperties.getKeys();
Logger.log('Animals known:');
for (var i = 0; i < keys.length; i++) {
  Logger.log(keys[i]);
}
```
@return an array of all keys in the current `Properties` store*/ getKeys(): string[];
    /**Gets a copy of all key-value pairs in the current `Properties` store. Note that the
returned object is not a live view of the store. Consequently, changing the properties on the
returned object will not automatically update them in storage, or vice versa.

```
// Sets several script properties, then retrieves them and logs them.
var scriptProperties = PropertiesService.getScriptProperties();
scriptProperties.setProperties({
  'cow': 'moo',
  'sheep': 'baa',
  'chicken': 'cluck'
});

var animalSounds = scriptProperties.getProperties();

// Logs:
// A chicken goes cluck!
// A cow goes moo!
// A sheep goes baa!
for (var kind in animalSounds) {
  Logger.log('A %s goes %s!', kind, animalSounds[kind]);
}
```
@return a copy of all key-value pairs in the current `Properties` store*/ getProperties(): Object;
    /**Gets the value associated with the given key in the current `Properties` store, or `null` if no such key exists.

```
// Gets the user property 'nickname'.
var userProperties = PropertiesService.getUserProperties();
var nickname = userProperties.getProperty('nickname');
Logger.log(nickname);
```
@param key the key for the property value to retrieve
@return the value associated with the given key in the current `Properties` store*/ getProperty(
      key: string,
    ): string;
    /**Sets all key-value pairs from the given object in the current `Properties` store.

```
// Sets multiple user properties at once.
var userProperties = PropertiesService.getUserProperties();
var newProperties = {nickname: 'Bob', region: 'US', language: 'EN'};
userProperties.setProperties(newProperties);
```
@param properties an object containing key-values pairs to set
@return this `Properties` store, for chaining*/ setProperties(
      properties: Object,
    ): PropertiesService.Properties;
    /**Sets all key-value pairs from the given object in the current `Properties` store,
optionally deleting all other properties in the store.

```
// Sets multiple user properties at once while deleting all other user properties.
var userProperties = PropertiesService.getUserProperties();
var newProperties = {nickname: 'Bob', region: 'US', language: 'EN'};
userProperties.setProperties(newProperties, true);
```
@param properties an object containing key-values pairs to set
@param deleteAllOthers `true` to delete all other key-value pairs in the properties
    object; `false` to not
@return this `Properties` store, for chaining*/ setProperties(
      properties: Object,
      deleteAllOthers: boolean,
    ): PropertiesService.Properties;
    /**Sets the given key-value pair in the current `Properties` store.

```
// Sets the user property 'nickname' to 'Bobby'.
var userProperties = PropertiesService.getUserProperties();
userProperties.setProperty('nickname', 'Bobby');
```
@param key the key for the property
@param value the value to associate with the key
@return this `Properties` store, for chaining*/ setProperty(
      key: string,
      value: string,
    ): PropertiesService.Properties;
  }
}
const PropertiesService: PropertiesService;
