interface LockService {
  /**Gets a lock that prevents any user of the current document from concurrently running a section
of code. A code section guarded by a document lock can be executed simultaneously by script
instances running in the context of different documents, but by no more than one execution for
any given document. Note that the lock is not actually acquired until [`Lock.tryLock(timeoutInMillis)`](https://developers.google.com/apps-script/reference/lock/lock.html#tryLock(Integer))
or [`Lock.waitLock(timeoutInMillis)`](https://developers.google.com/apps-script/reference/lock/lock.html#waitLock(Integer)) is called. If this method is called outside of the context of a
containing document (such as from a standalone script or webapp), `null` is returned.
@return a lock scoped to the script and current document, or `null` if called from a
    standalone script or webapp*/ getDocumentLock(): LockService.Lock;
  /**Gets a lock that prevents any user from concurrently running a section of code. A code section
guarded by a script lock cannot be executed simultaneously regardless of the identity of the
user. Note that the lock is not actually acquired until [`Lock.tryLock(timeoutInMillis)`](https://developers.google.com/apps-script/reference/lock/lock.html#tryLock(Integer)) or [`Lock.waitLock(timeoutInMillis)`](https://developers.google.com/apps-script/reference/lock/lock.html#waitLock(Integer)) is called.
@return a lock scoped to the script*/ getScriptLock(): LockService.Lock;
  /**Gets a lock that prevents the current user from concurrently running a section of code. A code
section guarded by a user lock can be executed simultaneously by different users, but by no
more than one execution for any given user. The lock is "private" to the user. Note that the
lock is not actually acquired until [`Lock.tryLock(timeoutInMillis)`](https://developers.google.com/apps-script/reference/lock/lock.html#tryLock(Integer)) or [`Lock.waitLock(timeoutInMillis)`](https://developers.google.com/apps-script/reference/lock/lock.html#waitLock(Integer)) is
called.
@return a lock scoped to the script and current user*/ getUserLock(): LockService.Lock;
}
module LockService {
  interface Lock {
    /**Returns true if the lock was acquired. This method will return false if [`tryLock(timeoutInMillis)`](https://developers.google.com/apps-script/reference/lock/lock.html#tryLock(Integer)) or
[`waitLock(timeoutInMillis)`](https://developers.google.com/apps-script/reference/lock/lock.html#waitLock(Integer)) were never called, timed out before the lock could be retrieved, or if [`releaseLock()`](https://developers.google.com/apps-script/reference/lock/lock.html#releaseLock()) was called.

```
var lock = LockService.getScriptLock();
lock.tryLock(10000);
if (!lock.hasLock()) {
  Logger.log('Could not obtain lock after 10 seconds.');
}
```
@return true if the lock was acquired, false otherwise*/ hasLock(): boolean;
    /**Releases the lock, allowing other processes waiting on the lock to continue. The lock is
automatically released when the script terminates, but for efficiency it is best to release it
as soon as you no longer need exclusive access to a section of code. This method has no effect
if the lock has not been acquired.

Note that if you are working with a spreadsheet, you should call SpreadsheetApp.flush()
prior to releasing the lock, to commit all pending changes to the spreadsheet while you still
have exclusive access to it.

```
var lock = LockService.getScriptLock();
lock.waitLock(10000);
// Do some work on a shared resource.
lock.releaseLock();
```*/ releaseLock(): void;
    /**Attempts to acquire the lock, timing out after the provided number of milliseconds. This method
has no effect if the lock has already been acquired.

```
var lock = LockService.getScriptLock();
var success = lock.tryLock(10000);
if (!success) {
  Logger.log('Could not obtain lock after 10 seconds.');
}
```
@param timeoutInMillis how long to wait to acquire the lock, in milliseconds
@return true if the lock was acquired, false otherwise*/ tryLock(
      timeoutInMillis: Integer,
    ): boolean;
    /**Attempts to acquire the lock, timing out with an exception after the provided number of
milliseconds. This method is the same as [`tryLock(timeoutInMillis)`](https://developers.google.com/apps-script/reference/lock/lock.html#tryLock(Integer)) except that it throws an exception
when the lock could not be acquired instead of returning false.

```
var lock = LockService.getScriptLock();
try {
  lock.waitLock(10000);
} catch (e) {
  Logger.log('Could not obtain lock after 10 seconds.');
}
```
@param timeoutInMillis how long to wait to acquire the lock, in milliseconds*/ waitLock(
      timeoutInMillis: Integer,
    ): void;
  }
}
const LockService: LockService;
