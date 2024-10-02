interface CacheService {
  /**Gets the cache instance scoped to the current document and script. Document caches are specific
to the current document which contains the script. Use these to store script information that
is specific to the current document. If this method is called outside of the context of a
containing document (such as from a standalone script or web app), this method returns `null`.

```
// Gets a cache that is specific to the current document containing the script
var cache = CacheService.getDocumentCache();
```
@return a document cache instance, or `null` if there is no containing document*/ getDocumentCache(): CacheService.Cache;
  /**Gets the cache instance scoped to the script. Script caches are common to all users of the
script. Use these to store information that is not specific to the current user.

```
// Gets a cache that is common to all users of the script
var cache = CacheService.getScriptCache();
```
@return a script cache instance*/ getScriptCache(): CacheService.Cache;
  /**Gets the cache instance scoped to the current user and script. User caches are specific to the
current user of the script. Use these to store script information that is specific to the
current user.

```
// Gets a cache that is specific to the current user of the script
var cache = CacheService.getUserCache();
```
@return a user cache instance*/ getUserCache(): CacheService.Cache;
}
module CacheService {
  interface Cache {
    /**Gets the cached value for the given key, or null if none is found.

```
// Gets the value from the cache for the key 'foo '.
var value = cache.get('foo ');
```
@param key the key to look up in the cache
@return the cached value, or null if none was found*/ get(key: string): string;
    /**Returns a JavaScript Object containing all key/value pairs found in the cache for an array of
keys.

```
// Gets a set of values from the cache
var values = cache.getAll(['foo', 'x', 'missing ']);
// If there were values in the cache for 'foo ' and 'x ' but not 'missing ', then 'values ' would
// be: {'foo': 'somevalue', 'x': 'othervalue '}
```
@param keys the keys to lookup
@return a JavaScript Object containing the key/value pairs for all keys found in the cache*/ getAll(
      keys: string[],
    ): Object;
    /**Adds a key/value pair to the cache.

The maximum length of a key is 250 characters. The maximum amount of data that can be stored
per key is 100KB. The value will expire from the cache after 600 seconds (10 minutes).

The cap for cached items is 1,000. If more than 1,000 items are written, the cache stores
the 900 items farthest from expiration. This limit might change.

```
// Puts the value 'bar ' into the cache using the key 'foo '
cache.put('foo', 'bar ');
```
@param key the key to store the value under
@param value the value to be cached*/ put(key: string, value: string): void;
    /**Adds a key/value pair to the cache, with an expiration time (in seconds).

The maximum length of a key is 250 characters. The maximum amount of data that can be stored
per key is 100KB. The specified expiration time is only a suggestion; cached data may be
removed before this time if a lot of data is cached.

The cap for cached items is 1,000. If more than 1,000 items are written, the cache stores
the 900 items farthest from expiration. This limit might change.

```
// Puts the value 'bar ' into the cache using the key 'foo ', but only for the next 20 seconds.
cache.put('foo', 'bar ', 20);
```
@param key the key to store the value under
@param value the value to be cached
@param expirationInSeconds the maximum time the value remains in the cache, in seconds. The
    minimum is 1 second and the maximum is 21600 seconds (6 hours).*/ put(
      key: string,
      value: string,
      expirationInSeconds: Integer,
    ): void;
    /**Adds a set of key/value pairs to the cache.

Similar to repeated calls to "put", but more efficient as it only makes one call to the
memcache server to set all values. The maximum length of a key is 250 characters. The maximum
amount of data that can be stored per key is 100KB. The values will expire from the cache after
600 seconds (10 minutes).

The cap for cached items is 1,000. If more than 1,000 items are written, the cache stores
the 900 items farthest from expiration. This limit might change.

```
// Puts a set of values into the cache with the keys 'foo', 'x ', and 'key '.
var values = {
  'foo': 'bar ',
  'x':'y ',
  'key': 'value '
};
cache.putAll(values);
```
@param values a JavaScript Object containing string keys and values*/ putAll(
      values: Object,
    ): void;
    /**Adds a set of key/value pairs to the cache, with an expiration time (in seconds).

Similar to repeated calls to "put", but more efficient as it only makes one call to the
memcache server to set all values. The maximum length of a key is 250 characters. The maximum
amount of data that can be stored per key is 100KB. The specified expiration time is only a
suggestion; cached data may be removed before this time if a lot of data is cached.

The cap for cached items is 1,000. If more than 1,000 items are written, the cache stores
the 900 items farthest from expiration. This limit might change.

```
// Puts a set of values into the cache with the keys 'foo', 'x ', and 'key '.
var values = {
  'foo': 'bar ',
  'x':'y ',
  'key': 'value '
};
cache.putAll(values, 20);
```
@param values A JavaScript Object containing string keys and values
@param expirationInSeconds The maximum time the value remains in the cache, in seconds The
    minimum allowed expiration is 1 second, and the maximum allowed expiration is 21600 seconds
    (6 hours). The default expiration is 600 seconds (10 minutes).*/ putAll(
      values: Object,
      expirationInSeconds: Integer,
    ): void;
    /**Removes an entry from the cache using the given key.

```
// Removes any cache entries for 'foo '
cache.remove('foo ');
```
@param key the key to remove from the cache*/ remove(key: string): void;
    /**Removes a set of entries from the cache.

```
// Removes entries from the cache with keys 'foo ' and 'x '
cache.removeAll(['foo', 'x ']);
```
@param keys the array of keys to remove*/ removeAll(keys: string[]): void;
  }
}
const CacheService: CacheService;
