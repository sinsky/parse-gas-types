interface UserProperties {
  /**Deletes all properties.

```
UserProperties.deleteAllProperties();
```
@deprecated
@return this object, for chaining*/ deleteAllProperties(): UserProperties;
  /**Deletes the property with the given key.

```
UserProperties.deleteProperty('special');
```
@deprecated
@param key key for property to delete
@return this object, for chaining*/ deleteProperty(key: string): UserProperties;
  /**Get all of the available keys.
@deprecated*/ getKeys(): string[];
  /**Get all of the available properties at once.

This gives a copy, not a live view, so changing the properties on the returned object won't
update them in storage and vice versa.

```
UserProperties.setProperties({
  "cow"     : "moo",
  "sheep"   : "baa",
  "chicken" : "cluck"
});

// Logs "A cow goes: moo"
Logger.log("A cow goes: %s", UserProperties.getProperty("cow"));

// This makes a copy. Any changes that happen here will not
// be written back to properties.
var animalSounds = UserProperties.getProperties();

// Logs:
// A chicken goes cluck!
// A cow goes moo!
// A sheep goes baa!
for(var kind in animalSounds) {
  Logger.log("A %s goes %s!", kind, animalSounds[kind]);
}
```
@deprecated
@return a copy of the properties containing key-value pairs*/ getProperties(): Object;
  /**Returns the value associated with the provided key, or null if there is no such value.

```
var specialValue = UserProperties.getProperty('special');
```
@deprecated
@param key key for the value to retrieve
@return the value associated with the key*/ getProperty(key: string): string;
  /**Bulk-sets all the properties drawn from the given object.

```
UserProperties.setProperties({special: 'sauce', 'meaning': 42});
```
@deprecated
@param properties an object containing the properties to set.
@return this object, for chaining*/ setProperties(
    properties: Object,
  ): UserProperties;
  /**Bulk-sets all the properties drawn from the given object.

```
// This deletes all other properties
UserProperties.setProperties({special: 'sauce', 'meaning': 42}, true);
```
@deprecated
@param properties an object containing the properties to set.
@param deleteAllOthers whether to delete all existing properties.
@return this object, for chaining*/ setProperties(
    properties: Object,
    deleteAllOthers: boolean,
  ): UserProperties;
  /**Persists the specified in value with the provided key. Any existing value associated with this
key will be overwritten.

```
UserProperties.setProperty('special', 'sauce');
```
@deprecated
@param key key for property
@param value value to associate with the key
@return this object, for chaining*/ setProperty(
    key: string,
    value: string,
  ): UserProperties;
}
const UserProperties: UserProperties;
