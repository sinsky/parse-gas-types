interface Jdbc{
/**Attempts to establish a connection to the given Google Cloud SQL URL.
@param url A database URL of the form `jdbc:google:mysql://subname`.
@return A JdbcConnection object.*/getCloudSqlConnection(url:string):Jdbc.JdbcConnection;
/**Attempts to establish a connection to the given Google Cloud SQL URL.
@param url A database URL of the form `jdbc:google:mysql://subname`.
@param info Optional JavaScript object specifying advanced parameters as defined below.
@return A JdbcConnection object.*/getCloudSqlConnection(url:string,info:Object):Jdbc.JdbcConnection;
/**Attempts to establish a connection to the given Google Cloud SQL URL.
@param url A database URL of the form `jdbc:google:mysql://subname`.
@param userName The username to pass to the database.
@param password The user's password.
@return A JdbcConnection object.*/getCloudSqlConnection(url:string,userName:string,password:string):Jdbc.JdbcConnection;
/**Attempts to establish a connection to the given database URL.

```
var conn = Jdbc.getConnection('jdbc:mysql://yoursqlserver.example.com:3306/database_name');
```
@param url A database URL of the form `jdbc:subprotocol:subname`.
@return A JdbcConnection object.*/getConnection(url:string):Jdbc.JdbcConnection;
/**Attempts to establish a connection to the given database URL.

```
var conn = Jdbc.getConnection('jdbc:mysql://yoursqlserver.example.com:3306/database_name',
                              {user: 'username', password: 'password'});
```
@param url A database URL of the form `jdbc:subprotocol:subname`.
@param info Optional JavaScript object specifying advanced parameters as defined below.
@return A JdbcConnection object.*/getConnection(url:string,info:Object):Jdbc.JdbcConnection;
/**Attempts to establish a connection to the given database using a username and password.

```
var conn = Jdbc.getConnection('jdbc:mysql://yoursqlserver.example.com:3306/database_name',
                              'username', 'password');
```
@param url A database URL of the form `jdbc:subprotocol:subname`.
@param userName The username to pass to the database.
@param password The user's password.
@return A JdbcConnection object.*/getConnection(url:string,userName:string,password:string):Jdbc.JdbcConnection;
/**Create a date from milliseconds since epoch.
@param milliseconds Milliseconds since epoch.
@return A JdbcDate object.*/newDate(milliseconds:Integer):Jdbc.JdbcDate;
/**Create a time from milliseconds since epoch.
@param milliseconds Milliseconds since epoch.
@return A JdbcTime object.*/newTime(milliseconds:Integer):Jdbc.JdbcTime;
/**Create a timestamp from milliseconds since epoch.
@param milliseconds Milliseconds since epoch.
@return A JdbcTimestamp object.*/newTimestamp(milliseconds:Integer):Jdbc.JdbcTimestamp;
/**Create a date by parsing the SQL date string.
@param date A string containing a SQL date string.
@return A JdbcDate object.*/parseDate(date:string):Jdbc.JdbcDate;
/**Create a time by parsing the SQL time string.
@param time A string containing a SQL time string.
@return A JdbcTime object.*/parseTime(time:string):Jdbc.JdbcTime;
/**Create a timestamp by parsing the SQL timestamp string.
@param timestamp A string containing a SQL timestamp string.
@return A JdbcTimestamp object.*/parseTimestamp(timestamp:string):Jdbc.JdbcTimestamp;}module Jdbc{interface JdbcTimestamp{
/**For documentation of this method, see [
`java.sql.Timestamp#after(Timestamp)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#after(java.sql.Timestamp)).
@param when A timestamp to compare to.
@return `true` if and only if this timestampe is strictly later than the timestamp
    specified as a parameter; `false` otherwise.*/after(when:Jdbc.JdbcTimestamp):boolean;
/**For documentation of this method, see [
`java.sql.Timestamp#before(Timestamp)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#before(java.sql.Timestamp)).
@param when A timestamp to compare to.
@return `true` if and only if this timestamp is strictly earlier than the timestamp
    specified as a parameter; `false` otherwise.*/before(when:Jdbc.JdbcTimestamp):boolean;
/**For documentation of this method, see [

```
java.sql.Date#getDate()```

](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getDate()).
@return The day of the month represented by this timestamp. The value returned is between 1 and
    31 representing the day of the month that contains or begins with the instant in time
    represented by this timestamp, as interpreted in the local time zone.*/getDate():Integer;
/**For documentation of this method, see [

```
java.sql.Date#getHours()```

](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getHours()).
@return The hour represented by this object; the value is a number (0 through 23) representing
    the hour within the day that contains or begins with the instant in time represented by
    this object, as interpreted in the local time zone.*/getHours():Integer;
/**For documentation of this method, see [

```
java.sql.Date#getMinutes()```

](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getMinutes()).
@return The minutes past the hour represented by this object, as interpreted in the local time
    zone. The value is a number between 0 through 59 inclusive.*/getMinutes():Integer;
/**For documentation of this method, see [

```
java.sql.Date#getMonth()```

](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getMonth()).
@return The month that contains or begins with the instant in time represented by this
    timestamp. The value returned is between 0 and 11, with the value 0 representing January.*/getMonth():Integer;
/**For documentation of this method, see [

```
java.sql.Timestamp#getNanos()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#getNanos()).
@return This timestamp's fractional seconds value (nanoseconds).*/getNanos():Integer;
/**For documentation of this method, see [

```
java.sql.Date#getSeconds()```

](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getSeconds()).
@return The seconds past the minute represented by this object, as interpreted in the local
    time zone. The value is a number between 0 through 61 inclusive, whiere 60 and 61 are only
    possible for machines that take leap seconds into account.*/getSeconds():Integer;
/**For documentation of this method, see [

```
java.sql.Timestamp#getTime()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#getTime()).
@return The number of milliseconds since January 1, 1970, 00:00:00 GMT represented by this time
    object.*/getTime():Integer;
/**For documentation of this method, see [

```
java.sql.Date#getYear()```

](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getYear()).
@return A value that is the result of subtracting 1900 from the year that contains or begins
    with the instant in time represented by this timestampe, as interpreted in the local time
    zone.*/getYear():Integer;
/**For documentation of this method, see [

```
java.sql.Date#setDate(int)```

](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setDate(int)).
@param date The day of month to set. This timestamp is updated to represent a point in time
    within the specified day of month, with the year, month, hour, minute, and second the same
    as before, as interpreted in the local time zone. If the date was April 30, for example,
    and the date is set to 31, then it is treated as if it were on May 1, because April has
    only 30 days.*/setDate(date:Integer):void;
/**For documentation of this method, see [

```
java.sql.Date#setHours(int)```

](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setHours(int)).
@param hours The hour to set; this object is updated to represent a point in time within the
    specified hour of the day, with the year, month, date, minute, and second the same as
    before, as interpreted in the local time zone.*/setHours(hours:Integer):void;
/**For documentation of this method, see [

```
java.sql.Date#setMinutes(int)```

](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setMinutes(int)).
@param minutes The minutes to set; this object is updated to represent a point in time within
    the specified minute of the hour, with the year, month, date, hour, and second the same as
    before, as interpreted in the local time zone.*/setMinutes(minutes:Integer):void;
/**For documentation of this method, see [

```
java.sql.Date#setMonth(int)```

](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setMonth(int)).
@param month The month to set. This timestamp is updated to represent a point in time within
    the specified month, with the year, date, hour, minute, and second the same as before, as
    interpreted in the local time zone. If the date was October 31, for example, and the month
    is set to June, then the new date is treated as if it were on July 1, because June has only
    30 days.*/setMonth(month:Integer):void;
/**For documentation of this method, see [

```
java.sql.Timestamp#setNanos(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#setNanos(int)).
@param nanoseconds The new fractional seconds value.*/setNanos(nanoseconds:Integer):void;
/**For documentation of this method, see [

```
java.sql.Date#setSeconds(int)```

](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setSeconds(int)).
@param seconds The seconds to set; this object is updated to represent a point in time within
    the specified second of the minute, with the year, month, date, hour, and minute the same
    as before, as interpreted in the local time zone.*/setSeconds(seconds:Integer):void;
/**For documentation of this method, see [

```
java.sql.Timestamp#setTime(long)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Timestamp.html#setTime(long)).
@param milliseconds The time value to set. The value is milliseconds since January 1, 1970,
    00:00:00 GMT.*/setTime(milliseconds:Integer):void;
/**For documentation of this method, see [

```
java.sql.Date#setYear(int)```

](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setYear(int)).
@param year The year value to set; the timestamp's year is set to this value plus 1900. This
    timestamp is updated to represent a point in time within the specified year, with the
    month, date, hour, minute, and second the same as before, as interpreted in the local time
    zone. If the date was February 29, for example, and the year is set to a non-leap year,
    then the new date is treated as if it were on March 1.*/setYear(year:Integer):void;}interface JdbcTime{
/**For documentation of this method, see [
`java.sql.Date#after(Date)`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#after(java.util.Date)).
@param when A time to compare to.
@return `true` if and only if this time is strictly later than the time specified as a
    parameter; `false` otherwise.*/after(when:Jdbc.JdbcTime):boolean;
/**For documentation of this method, see [
`java.sql.Date#before(Date)`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#before(java.util.Date)).
@param when A time to compare to.
@return `true` if and only if this time is strictly earlier than the time specified as a
    parameter; `false` otherwise.*/before(when:Jdbc.JdbcTime):boolean;
/**For documentation of this method, see [

```
java.sql.Date#getHours()```

](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getHours()).
@return The hour represented by this object; the value is a number (0 through 23) representing
    the hour within the day that contains or begins with the instant in time represented by
    this object, as interpreted in the local time zone.*/getHours():Integer;
/**For documentation of this method, see [

```
java.sql.Date#getMinutes()```

](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getMinutes()).
@return The minutes past the hour represented by this object, as interpreted in the local time
    zone. The value is a number between 0 through 59 inclusive.*/getMinutes():Integer;
/**For documentation of this method, see [

```
java.sql.Date#getSeconds()```

](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getSeconds()).
@return The seconds past the minute represented by this object, as interpreted in the local
    time zone. The value is a number between 0 through 61 inclusive, whiere 60 and 61 are only
    possible for machines that take leap seconds into account.*/getSeconds():Integer;
/**For documentation of this method, see [

```
java.sql.Date#getTime()```

](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getTime()).
@return The number of milliseconds since January 1, 1970, 00:00:00 GMT represented by this time
    object.*/getTime():Integer;
/**For documentation of this method, see [

```
java.sql.Date#setHours(int)```

](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setHours(int)).
@param hours The hour to set; this object is updated to represent a point in time within the
    specified hour of the day, with the year, month, date, minute, and second the same as
    before, as interpreted in the local time zone.*/setHours(hours:Integer):void;
/**For documentation of this method, see [

```
java.sql.Date#setMinutes(int)```

](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setMinutes(int)).
@param minutes The minutes to set; this object is updated to represent a point in time within
    the specified minute of the hour, with the year, month, date, hour, and second the same as
    before, as interpreted in the local time zone.*/setMinutes(minutes:Integer):void;
/**For documentation of this method, see [

```
java.sql.Date#setSeconds(int)```

](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setSeconds(int)).
@param seconds The seconds to set; this object is updated to represent a point in time within
    the specified second of the minute, with the year, month, date, hour, and minute the same
    as before, as interpreted in the local time zone.*/setSeconds(seconds:Integer):void;
/**For documentation of this method, see [

```
java.sql.Time#setTime(long)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Time.html#setTime(long)).
@param milliseconds The time value to set. The value is milliseconds since January 1, 1970,
    00:00:00 GMT, while a negative number is milliseconds before that time.*/setTime(milliseconds:Integer):void;}interface JdbcStruct{
/**For documentation of this method, see [

```
java.sql.Struct#getAttributes()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Struct.html#getAttributes()).
@return The ordered attribute values of this structure.*/getAttributes():Object[];
/**For documentation of this method, see [

```
java.sql.Struct#getSQLTypeName()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Struct.html#getSQLTypeName()).
@return The fully-qualified type name of the SQL structured type that this structure
    represents.*/getSQLTypeName():string;}interface JdbcStatement{
/**For documentation of this method, see [
`java.sql.Statement#addBatch(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#addBatch(java.lang.String)).
@param sql The SQL command to add to this statement, typically an SQL `INSERT` or `UPDATE`.*/addBatch(sql:string):void;
/**For documentation of this method, see [

```
java.sql.Statement#cancel()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#cancel()).*/cancel():void;
/**For documentation of this method, see [

```
java.sql.Statement#clearBatch()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#clearBatch()).*/clearBatch():void;
/**For documentation of this method, see [

```
java.sql.Statement#clearWarnings()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#clearWarnings()).*/clearWarnings():void;
/**For documentation of this method, see [

```
java.sql.Statement#close()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#close()).*/close():void;
/**For documentation of this method, see [
`java.sql.Statement#execute(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String)).
@param sql The SQL statement to execute.
@return `true` if the first result is a result set; `false` if it is an update
    count or if there are no results.*/execute(sql:string):boolean;
/**For documentation of this method, see [
`java.sql.Statement#execute(String, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String,%20int)).
@param sql The SQL statement to execute.
@param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available
    for future retrieval; either `Jdbc.Statement.RETURN_GENERATED_KEYS` or `Jdbc.Statement.NO_GENERATED_KEYS`.
@return `true` if the first result is a result set; `false` if it is an update
    count or if there are no results.*/execute(sql:string,autoGeneratedKeys:Integer):boolean;
/**For documentation of this method, see [
`java.sql.Statement#execute(String, int[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String,%20int[])).
@param sql The SQL statement to execute.
@param columnIndexes The column indices in the whose auto-generated keys are made available for
    future retrieval.
@return `true` if the first result is a result set; `false` if it is an update
    count or if there are no results.*/execute(sql:string,columnIndexes:Integer[]):boolean;
/**For documentation of this method, see [
`java.sql.Statement#execute(String, String[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String,%20java.lang.String[])).
@param sql The SQL statement to execute.
@param columnNames The names of columns in the whose auto-generated keys are made available for
    future retrieval.
@return `true` if the first result is a result set; `false` if it is an update
    count or if there are no results.*/execute(sql:string,columnNames:string[]):boolean;
/**For documentation of this method, see [

```
java.sql.Statement#executeBatch()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeBatch()).
@return The update counts for each command in the batch, using the same order in which commands
    were added to the batch.*/executeBatch():Integer[];
/**For documentation of this method, see [
`java.sql.Statement#executeQuery(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeQuery(java.lang.String)).
@param sql The SQL statement to execute, typically a static `SELECT`.
@return A result set containing the results of the execution. This is never `null`.*/executeQuery(sql:string):Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.Statement#executeUpdate(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String)).
@param sql The SQL Data Manipulation Language statement to execute (such as `INSERT`,
    `UPDATE`, or `DELETE`), or else a statement that returns nothing (such as a DDL
    statement).
@return Either the row count for for Data Manipulation Language statements, or 0 for statements
    that return nothing.*/executeUpdate(sql:string):Integer;
/**For documentation of this method, see [
`java.sql.Statement#executeUpdate(String, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String,%20int)).
@param sql The SQL Data Manipulation Language statement to execute (such as `INSERT`,
    `UPDATE`, or `DELETE`), or else a statement that returns nothing (such as a DDL
    statement).
@param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available
    for future retrieval; either `Jdbc.Statement.RETURN_GENERATED_KEYS` or `Jdbc.Statement.NO_GENERATED_KEYS`.
@return Either the row count for for Data Manipulation Language statements, or 0 for statements
    that return nothing.*/executeUpdate(sql:string,autoGeneratedKeys:Integer):Integer;
/**For documentation of this method, see [
`java.sql.Statement#executeUpdate(String, int[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String,%20int[])).
@param sql The SQL Data Manipulation Language statement to execute (such as `INSERT`,
    `UPDATE`, or `DELETE`), or else a statement that returns nothing (such as a DDL
    statement).
@param columnIndexes The column indices in the whose auto-generated keys are made available for
    future retrieval.
@return Either the row count for for Data Manipulation Language statements, or 0 for statements
    that return nothing.*/executeUpdate(sql:string,columnIndexes:Integer[]):Integer;
/**For documentation of this method, see [
`java.sql.Statement#executeUpdate(String, String[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String,%20java.lang.String[])).
@param sql The SQL Data Manipulation Language statement to execute (such as `INSERT`,
    `UPDATE`, or `DELETE`), or else a statement that returns nothing (such as a DDL
    statement).
@param columnNames The names of columns in the whose auto-generated keys are made available for
    future retrieval.
@return Either the row count for for Data Manipulation Language statements, or 0 for statements
    that return nothing.*/executeUpdate(sql:string,columnNames:string[]):Integer;
/**For documentation of this method, see [

```
java.sql.Statement#getConnection()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getConnection()).
@return The connection that produced this statement.*/getConnection():Jdbc.JdbcConnection;
/**For documentation of this method, see [
`java.sql.Statement#getFetchDirection()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getFetchDirection()).
@return The default direction for result sets generated by this statement, which is either
    `Jdbc.ResultSet.FETCH_FORWARD` or `Jdbc.ResultSet.FETCH_REVERSE`.*/getFetchDirection():Integer;
/**For documentation of this method, see [

```
java.sql.Statement#getFetchSize()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getFetchSize()).
@return The default row fetch size for result sets generated from this statement.*/getFetchSize():Integer;
/**For documentation of this method, see [
`java.sql.Statement#getGeneratedKeys()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getGeneratedKeys()).
@return A result set containing the auto-generated keys generated by the execution of this
    statement.*/getGeneratedKeys():Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.Statement#getMaxFieldSize()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMaxFieldSize()).
@return The current column byte size limit for columns storing character and binary values; a
    value of zero indictates no limit.*/getMaxFieldSize():Integer;
/**For documentation of this method, see [

```
java.sql.Statement#getMaxRows()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMaxRows()).
@return The current maximum number of rows for a result set produced by this statement; a value
    of 0 indicates no limit.*/getMaxRows():Integer;
/**For documentation of this method, see [
`java.sql.Statement#getMoreResults()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMoreResults()).
@return `true` if the next result is a result set; `false` otherwise.*/getMoreResults():boolean;
/**For documentation of this method, see [
`java.sql.Statement#getMoreResults(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMoreResults(int)).
@param current A flag that indicates what happens to current result sets when retrieved. This
    value is one of `Jdbc.Statement.CLOSE_CURRENT_RESULT`, `Jdbc.Statement.KEEP_CURRENT_RESULT`, or `Jdbc.Statement.CLOSE_ALL_RESULTS`.
@return `true` if the next result is a result set; `false` otherwise.*/getMoreResults(current:Integer):boolean;
/**For documentation of this method, see [
`java.sql.Statement#getQueryTimeout()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getQueryTimeout()).
@return The current query timeout in seconds; a value of zero indicates no timeout.*/getQueryTimeout():Integer;
/**For documentation of this method, see [

```
java.sql.Statement#getResultSet()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSet()).
@return The current result set, or `null` if the result is an update count or there are
    no more results.*/getResultSet():Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.Statement#getResultSetConcurrency()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetConcurrency()).
@return The result set concurrency for result sets generated from this statement, which is
    either `Jdbc.ResultSet.CONCUR_READ_ONLY` or `Jdbc.ResultSet.CONCUR_UPDATABLE`.*/getResultSetConcurrency():Integer;
/**For documentation of this method, see [
`java.sql.Statement#getResultSetHoldability()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetHoldability()).
@return The result set holdability, which is either `Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT` or `Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT`.*/getResultSetHoldability():Integer;
/**For documentation of this method, see [
`java.sql.Statement#getResultSetType()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetType()).
@return The result set type for result sets generated from this statement, which is `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or
    `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`.*/getResultSetType():Integer;
/**For documentation of this method, see [
`java.sql.Statement#getUpdateCount()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getUpdateCount()).
@return The current result as an update count, or -1 if the current result is a result set or
    if there are no more results.*/getUpdateCount():Integer;
/**For documentation of this method, see [

```
java.sql.Statement#getWarnings()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getWarnings()).
@return The current set of warnings, or `null` if there are no warnings.*/getWarnings():string[];
/**For documentation of this method, see [

```
java.sql.Statement#isClosed()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#isClosed()).
@return `true` if this statement is closed; `false` otherwise.*/isClosed():boolean;
/**For documentation of this method, see [

```
java.sql.Statement#isPoolable()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#isPoolable()).
@return `true` if this statement is poolable; `false` otherwise.*/isPoolable():boolean;
/**For documentation of this method, see [
`java.sql.Statement#setCursorName(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setCursorName(java.lang.String)).
@param name The new cursor name, which must be unique within a connection.*/setCursorName(name:string):void;
/**For documentation of this method, see [
`java.sql.Statement#setEscapeProcessing(boolean)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setEscapeProcessing(boolean)).
@param enable If `true`, escape processing is enabled; otherwise it is disabled.*/setEscapeProcessing(enable:boolean):void;
/**For documentation of this method, see [
`java.sql.Statement#setFetchDirection(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setFetchDirection(int)).
@param direction The specified direction to set, which is either `Jdbc.ResultSet.FETCH_FORWARD` or `Jdbc.ResultSet.FETCH_REVERSE`.*/setFetchDirection(direction:Integer):void;
/**For documentation of this method, see [
`java.sql.Statement#setFetchSize(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setFetchSize(int)).
@param rows The number of rows to fetch.*/setFetchSize(rows:Integer):void;
/**For documentation of this method, see [
`java.sql.Statement#setMaxFieldSize(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setMaxFieldSize(int)).
@param max The new column byte size limit; a value of zero indicates no limit.*/setMaxFieldSize(max:Integer):void;
/**For documentation of this method, see [

```
java.sql.Statement#setMaxRows(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setMaxRows(int)).
@param max The maximum number of rows a result set generated by this statement can have. A
    value of 0 indicates no limit.*/setMaxRows(max:Integer):void;
/**For documentation of this method, see [
`java.sql.Statement#setPoolable(boolean)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setPoolable(boolean)).
@param poolable If `true`, requests that this statement be pooled; otherwise requests it
    not be pooled.*/setPoolable(poolable:boolean):void;
/**For documentation of this method, see [
`java.sql.Statement#setQueryTimeout(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setQueryTimeout(int)).
@param seconds The new query timeout in seconds; a value of 0 indicates no timeout.*/setQueryTimeout(seconds:Integer):void;}interface JdbcSavepoint{
/**For documentation of this method, see [
`java.sql.Savepoint#getSavepointId()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Savepoint.html#getSavepointId()).
@return The numeric ID of this savepoint.*/getSavepointId():Integer;
/**For documentation of this method, see [
`java.sql.Savepoint#getSavepointName()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Savepoint.html#getSavepointName()).
@return The name of this savepoint.*/getSavepointName():string;}interface JdbcSQLXML{
/**For documentation of this method, see [

```
java.sql.SQLXML#free()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/SQLXML.html#free()).*/free():void;
/**For documentation of this method, see [

```
java.sql.SQLXML#getString()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/SQLXML.html#getString()).
@return The string representation of the XML value designated by this SQLXML instance.*/getString():string;
/**For documentation of this method, see [
`java.sql.SQLXML#setString(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/SQLXML.html#setString(java.lang.String)).
@param value The string representation of the XML value to set.*/setString(value:string):void;}interface JdbcRowId{
/**For documentation of this method, see [

```
java.sql.RowId#getBytes()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/RowId.html#getBytes()).
@return The bytes representing the `ROWID` represented by this [`JdbcRowId`](https://developers.google.com/apps-script/reference/jdbc/jdbc-row-id.html).*/getBytes():Byte[];}interface JdbcResultSetMetaData{
/**For documentation of this method, see [
`java.sql.ResultSetMetaData#getCatalogName(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getCatalogName(int)).
@param column The index of the column to examine (the first column is 1, the second is 2, and
    so on).
@return The catalog name for the table in the designated column, or an empty string if not
    applicable.*/getCatalogName(column:Integer):string;
/**For documentation of this method, see [
`java.sql.ResultSetMetaData#getColumnClassName(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnClassName(int)).
@param column The index of the column to examine (the first column is 1, the second is 2, and
    so on).
@return The fully-qualified name of the class of the designated column's values.*/getColumnClassName(column:Integer):string;
/**For documentation of this method, see [
`java.sql.ResultSetMetaData#getColumnCount()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnCount()).
@return The number of columns in this result set.*/getColumnCount():Integer;
/**For documentation of this method, see [
`java.sql.ResultSetMetaData#getColumnDisplaySize(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnDisplaySize(int)).
@param column The index of the column to examine (the first column is 1, the second is 2, and
    so on).
@return The maximum number of characters allowed as the width of the designated columns.*/getColumnDisplaySize(column:Integer):Integer;
/**For documentation of this method, see [
`java.sql.ResultSetMetaData#getColumnLabel(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnLabel(int)).
@param column The index of the column to examine (the first column is 1, the second is 2, and
    so on).
@return The designated column's suggested title, usually specifed by a SQL `AS` clause.
    Returns the same as [`getColumnName(column)`](https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set-meta-data.html#getColumnName(Integer)) if an `AS` is not specified.*/getColumnLabel(column:Integer):string;
/**For documentation of this method, see [
`java.sql.ResultSetMetaData#getColumnName(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnName(int)).
@param column The index of the column to examine (the first column is 1, the second is 2, and
    so on).
@return The designated column's name.*/getColumnName(column:Integer):string;
/**For documentation of this method, see [
`java.sql.ResultSetMetaData#getColumnType(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnType(int)).
@param column The index of the column to examine (the first column is 1, the second is 2, and
    so on).
@return The [SQL
    type](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) of the designated column.*/getColumnType(column:Integer):Integer;
/**For documentation of this method, see [
`java.sql.ResultSetMetaData#getColumnTypeName(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getColumnTypeName(int)).
@param column The index of the column to examine (the first column is 1, the second is 2, and
    so on).
@return The designated column's database-specific type name. Returns the fully-qualifed type
    name if this is a user-defined type.*/getColumnTypeName(column:Integer):string;
/**For documentation of this method, see [
`java.sql.ResultSetMetaData#getPrecision(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getPrecision(int)).
@param column The index of the column to examine (the first column is 1, the second is 2, and
    so on).
@return The maximum column size for the given column. For numeric data, this is the maximum
    precision. For character data, this is the length in characters. For datetime data, this is
    the length in characters of the string representation (assuming the maximum allowed
    precision of the fractional seconds component). For binary data, this is the length in
    bytes. For the `ROWID` datatype, this is the length in bytes. Returns 0 for types
    where the column size is not applicable.*/getPrecision(column:Integer):Integer;
/**For documentation of this method, see [
`java.sql.ResultSetMetaData#getScale(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getScale(int)).
@param column The index of the column to examine (the first column is 1, the second is 2, and
    so on).
@return The designated columns's number of digits to right of the decimal point. Returns 0 for
    data types where the scale is not applicable.*/getScale(column:Integer):Integer;
/**For documentation of this method, see [
`java.sql.ResultSetMetaData#getSchemaName(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getSchemaName(int)).
@param column The index of the column to examine (the first column is 1, the second is 2, and
    so on).
@return The table schema of the designated column.*/getSchemaName(column:Integer):string;
/**For documentation of this method, see [
`java.sql.ResultSetMetaData#getTableName(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#getTableName(int)).
@param column The index of the column to examine (the first column is 1, the second is 2, and
    so on).
@return The table name of the designated column, or an empty string if not applicable.*/getTableName(column:Integer):string;
/**For documentation of this method, see [
`java.sql.ResultSetMetaData#isAutoIncrement(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isAutoIncrement(int)).
@param column The index of the column to examine (the first column is 1, the second is 2, and
    so on).
@return `true` if the specified column is automatically numbered; `false`
    otherwise.*/isAutoIncrement(column:Integer):boolean;
/**For documentation of this method, see [
`java.sql.ResultSetMetaData#isCaseSensitive(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isCaseSensitive(int)).
@param column The index of the column to examine (the first column is 1, the second is 2, and
    so on).
@return `true` if the specified column is case-sensitive; `false` otherwise.*/isCaseSensitive(column:Integer):boolean;
/**For documentation of this method, see [
`java.sql.ResultSetMetaData#isCurrency(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isCurrency(int)).
@param column The index of the column to examine (the first column is 1, the second is 2, and
    so on).
@return `true` if the specified column is a cash value; `false` otherwise.*/isCurrency(column:Integer):boolean;
/**For documentation of this method, see [
`java.sql.ResultSetMetaData#isDefinitelyWritable(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isDefinitelyWritable(int)).
@param column The index of the column to examine (the first column is 1, the second is 2, and
    so on).
@return `true` if writes to the designated column definitely succeed; `false`
    otherwise.*/isDefinitelyWritable(column:Integer):boolean;
/**For documentation of this method, see [
`java.sql.ResultSetMetaData#isNullable(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isNullable(int)).
@param column The index of the column to examine (the first column is 1, the second is 2, and
    so on).
@return The nullability status of the specified column, which is `Jdbc.ResultSetMetaData.columnNoNulls`, `Jdbc.ResultSetMetaData.columnNullable`, or
    `Jdbc.ResultSetMetaData.columnNullableUnknown`.*/isNullable(column:Integer):Integer;
/**For documentation of this method, see [
`java.sql.ResultSetMetaData#isReadOnly(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isReadOnly(int)).
@param column The index of the column to examine (the first column is 1, the second is 2, and
    so on).
@return `true` if the designated column is definitely non-writable; `false`
    otherwise.*/isReadOnly(column:Integer):boolean;
/**For documentation of this method, see [
`java.sql.ResultSetMetaData#isSearchable(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isSearchable(int)).
@param column The index of the column to examine (the first column is 1, the second is 2, and
    so on).
@return `true` if a where clause can use the specified column; `false` otherwise.*/isSearchable(column:Integer):boolean;
/**For documentation of this method, see [
`java.sql.ResultSetMetaData#isSigned(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isSigned(int)).
@param column The index of the column to examine (the first column is 1, the second is 2, and
    so on).
@return `true` if the values in the specified column are signed numbers; `false`
    otherwise.*/isSigned(column:Integer):boolean;
/**For documentation of this method, see [
`java.sql.ResultSetMetaData#isWritable(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSetMetaData.html#isWritable(int)).
@param column The index of the column to examine (the first column is 1, the second is 2, and
    so on).
@return `true` if it is possible to write to the designated column; `false`
    otherwise.*/isWritable(column:Integer):boolean;}interface JdbcResultSet{
/**For documentation of this method, see [

```
java.sql.ResultSet#absolute(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#absolute(int)).
@param row The number of the row to which the cursor moves to. A positive number indicates the
    row number counting from the start of the result set, while a negative number indicates the
    counting from the end of the result set.
@return `true` if the cursor is moved to a position in this result set; `false` if
    the cursor is before the first row or after the last row.*/absolute(row:Integer):boolean;
/**For documentation of this method, see [

```
java.sql.ResultSet#afterLast()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#afterLast()).*/afterLast():void;
/**For documentation of this method, see [

```
java.sql.ResultSet#beforeFirst()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#beforeFirst()).*/beforeFirst():void;
/**For documentation of this method, see [
`java.sql.ResultSet#cancelRowUpdates()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#cancelRowUpdates()).*/cancelRowUpdates():void;
/**For documentation of this method, see [

```
java.sql.ResultSet#clearWarnings()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#clearWarnings()).*/clearWarnings():void;
/**For documentation of this method, see [

```
java.sql.ResultSet#close()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#close()).*/close():void;
/**For documentation of this method, see [

```
java.sql.ResultSet#deleteRow()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#deleteRow()).*/deleteRow():void;
/**For documentation of this method, see [
`java.sql.ResultSet#findColumn(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#findColumn(java.lang.String)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@return The column index of the specified column.*/findColumn(columnLabel:string):Integer;
/**For documentation of this method, see [

```
java.sql.ResultSet#first()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#first()).
@return `true` if the cursor is on a valid row; `false` if there are no rows in the
    result set.*/first():boolean;
/**For documentation of this method, see [

```
java.sql.ResultSet#getArray(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getArray(int)).
@param columnIndex The index of the column to retrieve the data from (the first column is 1,
    the second is 2, and so on).
@return The value of the designated column in the current row of this result set as an array.*/getArray(columnIndex:Integer):Jdbc.JdbcArray;
/**For documentation of this method, see [
`java.sql.ResultSet#getArray(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getArray(java.lang.String)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@return The value of the designated column in the current row of this result set as an array.*/getArray(columnLabel:string):Jdbc.JdbcArray;
/**For documentation of this method, see [
`java.sql.ResultSet#getBigDecimal(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBigDecimal(int)).
@param columnIndex The index of the column to retrieve the data from (the first column is 1,
    the second is 2, and so on).
@return The column value; `null` if the value was SQL `NULL`.*/getBigDecimal(columnIndex:Integer):BigNumber;
/**For documentation of this method, see [
`java.sql.ResultSet#getBigDecimal(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBigDecimal(java.lang.String)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@return The column value; `null` if the value was SQL `NULL`.*/getBigDecimal(columnLabel:string):BigNumber;
/**For documentation of this method, see [

```
java.sql.ResultSet#getBlob(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBlob(int)).
@param columnIndex The index of the column to retrieve the data from (the first column is 1,
    the second is 2, and so on).
@return The value of the designated column in the current row of this result set as a blob.*/getBlob(columnIndex:Integer):Jdbc.JdbcBlob;
/**For documentation of this method, see [
`java.sql.ResultSet#getBlob(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBlob(java.lang.String)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@return The value of the designated column in the current row of this result set as a blob.*/getBlob(columnLabel:string):Jdbc.JdbcBlob;
/**For documentation of this method, see [

```
java.sql.ResultSet#getBoolean(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBoolean(int)).
@param columnIndex The index of the column to retrieve (the first column is 1, the second is 2,
    and so on).
@return The column value; `false` if the value was SQL `NULL`.*/getBoolean(columnIndex:Integer):boolean;
/**For documentation of this method, see [
`java.sql.ResultSet#getBoolean(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBoolean(java.lang.String)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@return The column value; `false` if the value was SQL `NULL`.*/getBoolean(columnLabel:string):boolean;
/**For documentation of this method, see [

```
java.sql.ResultSet#getByte(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getByte(int)).
@param columnIndex The index of the column to retrieve (the first column is 1, the second is 2,
    and so on).
@return The column value; 0 if the value was SQL `NULL`.*/getByte(columnIndex:Integer):Byte;
/**For documentation of this method, see [
`java.sql.ResultSet#getByte(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getByte(java.lang.String)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@return The column value; 0 if the value was SQL `NULL`.*/getByte(columnLabel:string):Byte;
/**For documentation of this method, see [

```
java.sql.ResultSet#getBytes(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBytes(int)).
@param columnIndex The index of the column to retrieve (the first column is 1, the second is 2,
    and so on).
@return The column value; `null` if the value was SQL `NULL`.*/getBytes(columnIndex:Integer):Byte[];
/**For documentation of this method, see [
`java.sql.ResultSet#getBytes(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getBytes(java.lang.String)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@return The column value; `null` if the value was SQL `NULL`.*/getBytes(columnLabel:string):Byte[];
/**For documentation of this method, see [

```
java.sql.ResultSet#getClob(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getClob(int)).
@param columnIndex The index of the column to retrieve the data from (the first column is 1,
    the second is 2, and so on).
@return The value of the designated column in the current row of this result set as a clob.*/getClob(columnIndex:Integer):Jdbc.JdbcClob;
/**For documentation of this method, see [
`java.sql.ResultSet#getClob(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getClob(java.lang.String)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@return The value of the designated column in the current row of this result set as a clob.*/getClob(columnLabel:string):Jdbc.JdbcClob;
/**For documentation of this method, see [
`java.sql.ResultSet#getConcurrency()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getConcurrency()).
@return The concurrency type, which is either `Jdbc.ResultSet.CONCUR_READ_ONLY` or `Jdbc.ResultSet.CONCUR_UPDATABLE`.*/getConcurrency():Integer;
/**For documentation of this method, see [

```
java.sql.ResultSet#getCursorName()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getCursorName()).
@return The SQL name for this result set's cursor.*/getCursorName():string;
/**For documentation of this method, see [

```
java.sql.ResultSet#getDate(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getDate(int)).
@param columnIndex The index of the column to retrieve (the first column is 1, the second is 2,
    and so on).
@return The column value; `null` if the value was SQL `NULL`.*/getDate(columnIndex:Integer):Jdbc.JdbcDate;
/**For documentation of this method, see [
`java.sql.ResultSet#getDate(int, Calendar)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getDate(int,%20java.util.Calendar)).
@param columnIndex The index of the column to retrieve (the first column is 1, the second is 2,
    and so on).
@param timeZone A time zone string used to construct [
    java.lang.Calendar](https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html) instance, which in turn is used to build the date. Several formats
    of time zone strings are recognized: short IDs (such as `PST`, `EST`, and
    `GMT`), long IDs (such as `US/Pacific` and `America/Los_Angeles`), and
    offsets (such as `GMT+6:30`).
@return The column value; `null` if the value was SQL `NULL`.*/getDate(columnIndex:Integer,timeZone:string):Jdbc.JdbcDate;
/**For documentation of this method, see [
`java.sql.ResultSet#getDate(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getDate(java.lang.String)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@return The column value; `null` if the value was SQL `NULL`.*/getDate(columnLabel:string):Jdbc.JdbcDate;
/**For documentation of this method, see [
`java.sql.ResultSet#getDate(String, Calendar)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getDate(java.lang.String,%20java.util.Calendar)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@param timeZone A time zone string used to construct [
    java.lang.Calendar](https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html) instance, which in turn is used to build the date. Several formats
    of time zone strings are recognized: short IDs (such as `PST`, `EST`, and
    `GMT`), long IDs (such as `US/Pacific` and `America/Los_Angeles`), and
    offsets (such as `GMT+6:30`).
@return The column value; `null` if the value was SQL `NULL`.*/getDate(columnLabel:string,timeZone:string):Jdbc.JdbcDate;
/**For documentation of this method, see [

```
java.sql.ResultSet#getDouble(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getDouble(int)).
@param columnIndex The index of the column to retrieve (the first column is 1, the second is 2,
    and so on).
@return The column value; 0 if the value was SQL `NULL`.*/getDouble(columnIndex:Integer):number;
/**For documentation of this method, see [
`java.sql.ResultSet#getDouble(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getDouble(java.lang.String)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@return The column value; 0 if the value was SQL `NULL`.*/getDouble(columnLabel:string):number;
/**For documentation of this method, see [
`java.sql.ResultSet#getFetchDirection()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getFetchDirection()).
@return The specified direction to set, which is either `Jdbc.ResultSet.FETCH_FORWARD` or
    `Jdbc.ResultSet.FETCH_REVERSE`.*/getFetchDirection():Integer;
/**For documentation of this method, see [

```
java.sql.ResultSet#getFetchSize()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getFetchSize()).
@return The current fetch size for this result set.*/getFetchSize():Integer;
/**For documentation of this method, see [

```
java.sql.ResultSet#getFloat(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getFloat(int)).
@param columnIndex The index of the column to retrieve (the first column is 1, the second is 2,
    and so on).
@return The column value; 0 if the value was SQL `NULL`.*/getFloat(columnIndex:Integer):number;
/**For documentation of this method, see [
`java.sql.ResultSet#getFloat(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getFloat(java.lang.String)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@return The column value; 0 if the value was SQL `NULL`.*/getFloat(columnLabel:string):number;
/**For documentation of this method, see [
`java.sql.ResultSet#getHoldability()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getHoldability()).
@return The holdability of this result set, which is either `Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT` or `Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT`.*/getHoldability():Integer;
/**For documentation of this method, see [

```
java.sql.ResultSet#getInt(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getInt(int)).
@param columnIndex The index of the column to retrieve (the first column is 1, the second is 2,
    and so on).
@return The column value; 0 if the value was SQL `NULL`.*/getInt(columnIndex:Integer):Integer;
/**For documentation of this method, see [
`java.sql.ResultSet#getInt(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getInt(java.lang.String)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@return The column value; 0 if the value was SQL `NULL`.*/getInt(columnLabel:string):Integer;
/**For documentation of this method, see [

```
java.sql.ResultSet#getLong(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getLong(int)).
@param columnIndex The index of the column to retrieve (the first column is 1, the second is 2,
    and so on).
@return The column value; 0 if the value was SQL `NULL`.*/getLong(columnIndex:Integer):Integer;
/**For documentation of this method, see [
`java.sql.ResultSet#getLong(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getLong(java.lang.String)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@return The column value; 0 if the value was SQL `NULL`.*/getLong(columnLabel:string):Integer;
/**For documentation of this method, see [

```
java.sql.ResultSet#getMetaData()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getMetaData()).
@return The number, types, and properties of this result set's columns.*/getMetaData():Jdbc.JdbcResultSetMetaData;
/**For documentation of this method, see [

```
java.sql.ResultSet#getNClob(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getNClob(int)).
@param columnIndex The index of the column to retrieve the data from (the first column is 1,
    the second is 2, and so on).
@return The column value of the current row.*/getNClob(columnIndex:Integer):Jdbc.JdbcClob;
/**For documentation of this method, see [
`java.sql.ResultSet#getNClob(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getNClob(java.lang.String)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@return The column value of the current row.*/getNClob(columnLabel:string):Jdbc.JdbcClob;
/**For documentation of this method, see [

```
java.sql.ResultSet#getNString(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getNString(int)).
@param columnIndex The index of the column to retrieve the data from (the first column is 1,
    the second is 2, and so on).
@return The column value of the current row; `null` if the value is SQL `NULL`.*/getNString(columnIndex:Integer):string;
/**For documentation of this method, see [
`java.sql.ResultSet#getNString(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getNString(java.lang.String)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@return The column value of the current row; `null` if the value is SQL `NULL`.*/getNString(columnLabel:string):string;
/**For documentation of this method, see [

```
java.sql.ResultSet#getObject(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getObject(int)).
@param columnIndex The index of the column to retrieve the data from (the first column is 1,
    the second is 2, and so on).
@return The value of the designated column in the current row of this result set.*/getObject(columnIndex:Integer):Object;
/**For documentation of this method, see [
`java.sql.ResultSet#getObject(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getObject(java.lang.String)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@return The value of the designated column in the current row of this result set.*/getObject(columnLabel:string):Object;
/**For documentation of this method, see [

```
java.sql.ResultSet#getRef(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getRef(int)).
@param columnIndex The index of the column to retrieve the data from (the first column is 1,
    the second is 2, and so on).
@return The value of the designated column in the current row of this result set as a
    reference.*/getRef(columnIndex:Integer):Jdbc.JdbcRef;
/**For documentation of this method, see [
`java.sql.ResultSet#getRef(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getRef(java.lang.String)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@return The value of the designated column in the current row of this result set as a
    reference.*/getRef(columnLabel:string):Jdbc.JdbcRef;
/**For documentation of this method, see [

```
java.sql.ResultSet#getRow()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getRow()).
@return The current row number, or 0 if there is no current row.*/getRow():Integer;
/**For documentation of this method, see [

```
java.sql.ResultSet#getRowId(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getRowId(int)).
@param columnIndex The index of the column to retrieve the data from (the first column is 1,
    the second is 2, and so on).
@return The column row ID value; `null` if the value is SQL `NULL`.*/getRowId(columnIndex:Integer):Jdbc.JdbcRowId;
/**For documentation of this method, see [
`java.sql.ResultSet#getRowId(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getRowId(java.lang.String)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@return The column row ID value; `null` if the value is SQL `NULL`.*/getRowId(columnLabel:string):Jdbc.JdbcRowId;
/**For documentation of this method, see [

```
java.sql.ResultSet#getSQLXML(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getSQLXML(int)).
@param columnIndex The index of the column to retrieve the data from (the first column is 1,
    the second is 2, and so on).
@return The column value of the current row.*/getSQLXML(columnIndex:Integer):Jdbc.JdbcSQLXML;
/**For documentation of this method, see [
`java.sql.ResultSet#getSQLXML(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getSQLXML(java.lang.String)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@return The column value of the current row.*/getSQLXML(columnLabel:string):Jdbc.JdbcSQLXML;
/**For documentation of this method, see [

```
java.sql.ResultSet#getShort(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getShort(int)).
@param columnIndex The index of the column to retrieve (the first column is 1, the second is 2,
    and so on).
@return The column value; 0 if the value was SQL `NULL`.*/getShort(columnIndex:Integer):Integer;
/**For documentation of this method, see [
`java.sql.ResultSet#getShort(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getShort(java.lang.String)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@return The column value; 0 if the value was SQL `NULL`.*/getShort(columnLabel:string):Integer;
/**For documentation of this method, see [

```
java.sql.ResultSet#getStatement()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getStatement()).
@return The statement that produced this result set, or `null` if the result set was
    produced some other way.*/getStatement():Jdbc.JdbcStatement;
/**For documentation of this method, see [

```
java.sql.ResultSet#getString(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getString(int)).
@param columnIndex The index of the column to retrieve (the first column is 1, the second is 2,
    and so on).
@return The column value; `null` if the value was SQL `NULL`.*/getString(columnIndex:Integer):string;
/**For documentation of this method, see [
`java.sql.ResultSet#getString(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getString(java.lang.String)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@return The column value; `null` if the value was SQL `NULL`.*/getString(columnLabel:string):string;
/**For documentation of this method, see [

```
java.sql.ResultSet#getTime(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTime(int)).
@param columnIndex The index of the column to retrieve (the first column is 1, the second is 2,
    and so on).
@return The column value; `null` if the value was SQL `NULL`.*/getTime(columnIndex:Integer):Jdbc.JdbcTime;
/**For documentation of this method, see [
`java.sql.ResultSet#getTime(int, Calendar)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTime(int,%20java.util.Calendar)).
@param columnIndex The index of the column to retrieve (the first column is 1, the second is 2,
    and so on).
@param timeZone A time zone string used to construct [
    java.lang.Calendar](https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html) instance, which in turn is used to build the date. Several formats
    of time zone strings are recognized: short IDs (such as `PST`, `EST`, and
    `GMT`), long IDs (such as `US/Pacific` and `America/Los_Angeles`), and
    offsets (such as `GMT+6:30`).
@return The column value; `null` if the value was SQL `NULL`.*/getTime(columnIndex:Integer,timeZone:string):Jdbc.JdbcTime;
/**For documentation of this method, see [
`java.sql.ResultSet#getTime(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTime(java.lang.String)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@return The column value; `null` if the value was SQL `NULL`.*/getTime(columnLabel:string):Jdbc.JdbcTime;
/**For documentation of this method, see [
`java.sql.ResultSet#getTime(String, Calendar)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTime(java.lang.String,%20java.util.Calendar)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@param timeZone A time zone string used to construct [
    java.lang.Calendar](https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html) instance, which in turn is used to build the date. Several formats
    of time zone strings are recognized: short IDs (such as `PST`, `EST`, and
    `GMT`), long IDs (such as `US/Pacific` and `America/Los_Angeles`), and
    offsets (such as `GMT+6:30`).
@return The column value; `null` if the value was SQL `NULL`.*/getTime(columnLabel:string,timeZone:string):Jdbc.JdbcTime;
/**For documentation of this method, see [
`java.sql.ResultSet#getTimestamp(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTimestamp(int)).
@param columnIndex The index of the column to retrieve (the first column is 1, the second is 2,
    and so on).
@return The column value; `null` if the value was SQL `NULL`.*/getTimestamp(columnIndex:Integer):Jdbc.JdbcTimestamp;
/**For documentation of this method, see [
`java.sql.ResultSet#getTimestamp(int, Calendar)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTimestamp(int,%20java.util.Calendar)).
@param columnIndex The index of the column to retrieve (the first column is 1, the second is 2,
    and so on).
@param timeZone A time zone string used to construct [
    java.lang.Calendar](https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html) instance, which in turn is used to build the date. Several formats
    of time zone strings are recognized: short IDs (such as `PST`, `EST`, and
    `GMT`), long IDs (such as `US/Pacific` and `America/Los_Angeles`), and
    offsets (such as `GMT+6:30`).
@return The column value; `null` if the value was SQL `NULL`.*/getTimestamp(columnIndex:Integer,timeZone:string):Jdbc.JdbcTimestamp;
/**For documentation of this method, see [
`java.sql.ResultSet#getTimestamp(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTimestamp(java.lang.String)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@return The column value; `null` if the value was SQL `NULL`.*/getTimestamp(columnLabel:string):Jdbc.JdbcTimestamp;
/**For documentation of this method, see [
`java.sql.ResultSet#getTimestamp(String, Calendar)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getTimestamp(java.lang.String,%20java.util.Calendar)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@param timeZone A time zone string used to construct [
    java.lang.Calendar](https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html) instance, which in turn is used to build the date. Several formats
    of time zone strings are recognized: short IDs (such as `PST`, `EST`, and
    `GMT`), long IDs (such as `US/Pacific` and `America/Los_Angeles`), and
    offsets (such as `GMT+6:30`).
@return The column value; `null` if the value was SQL `NULL`.*/getTimestamp(columnLabel:string,timeZone:string):Jdbc.JdbcTimestamp;
/**For documentation of this method, see [

```
java.sql.ResultSet#getType()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getType()).
@return The type of this result set, which is one of `Jdbc.ResultSet.TYPE_FORWARD_ONLY`,
    `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`.*/getType():Integer;
/**For documentation of this method, see [

```
java.sql.ResultSet#getURL(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getURL(int)).
@param columnIndex The index of the column to retrieve the data from (the first column is 1,
    the second is 2, and so on).
@return The URL value of the designated column in the current row of this result set.*/getURL(columnIndex:Integer):string;
/**For documentation of this method, see [
`java.sql.ResultSet#getURL(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#getURL(java.lang.String)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@return The URL value of the designated column in the current row of this result set.*/getURL(columnLabel:string):string;
/**Returns the current set of warnings reported by the driver.
@return The current set of warnings.*/getWarnings():string[];
/**For documentation of this method, see [

```
java.sql.ResultSet#insertRow()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#insertRow()).*/insertRow():void;
/**For documentation of this method, see [

```
java.sql.ResultSet#isAfterLast()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#isAfterLast()).
@return `true` if the cursor is after the last row; `false` if it is in any other
    position or if the result set contains no rows.*/isAfterLast():boolean;
/**For documentation of this method, see [

```
java.sql.ResultSet#isBeforeFirst()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#isBeforeFirst()).
@return `true` if the cursor is before the first row; `false` if it is in any other
    position or if the result set contains no rows.*/isBeforeFirst():boolean;
/**For documentation of this method, see [

```
java.sql.ResultSet#isClosed()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#isClosed()).
@return `true` if this result set is closed; `false` otherwise.*/isClosed():boolean;
/**For documentation of this method, see [

```
java.sql.ResultSet#isFirst()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#isFirst()).
@return `true` if the cursor is on the first row; `false` otherwise.*/isFirst():boolean;
/**For documentation of this method, see [

```
java.sql.ResultSet#isLast()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#isLast()).
@return `true` if the cursor is on the last row; `false` otherwise.*/isLast():boolean;
/**For documentation of this method, see [

```
java.sql.ResultSet#first()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#last()).
@return `true` if the cursor is on a valid row; `false` if there are no rows in the
    result set.*/last():boolean;
/**For documentation of this method, see [
`java.sql.ResultSet#moveToCurrentRow()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#moveToCurrentRow()).*/moveToCurrentRow():void;
/**For documentation of this method, see [
`java.sql.ResultSet#moveToInsertRow()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#moveToInsertRow()).*/moveToInsertRow():void;
/**For documentation of this method, see [

```
java.sql.ResultSet#next()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#next()).
@return `true` if the new current row is valid; `false` otherwise.*/next():boolean;
/**For documentation of this method, see [

```
java.sql.ResultSet#previous()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#previous()).
@return `true` if the cursor is on a valid row; `false` if the cursor is positioned
    before the first row.*/previous():boolean;
/**For documentation of this method, see [

```
java.sql.ResultSet#refreshRow()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#refreshRow()).*/refreshRow():void;
/**For documentation of this method, see [

```
java.sql.ResultSet#relative(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#relative(int)).
@param rows The number row steps to move the cursor. A positive number moves the cursor
    forward, while a negative number moves the cursor backward.
@return `true` if the cursor is on a row; `false` otherwise.*/relative(rows:Integer):boolean;
/**For documentation of this method, see [

```
java.sql.ResultSet#rowDeleted()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#rowDeleted()).
@return `true` if the current row was visibly deleted; `false` otherwise.*/rowDeleted():boolean;
/**For documentation of this method, see [

```
java.sql.ResultSet#rowInserted()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#rowInserted()).
@return `true` if the current row was visibly inserted; `false` otherwise.*/rowInserted():boolean;
/**For documentation of this method, see [

```
java.sql.ResultSet#rowUpdated()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#rowUpdated()).
@return `true` if the current row was visibly updated; `false` otherwise.*/rowUpdated():boolean;
/**For documentation of this method, see [
`java.sql.ResultSet#setFetchDirection(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#setFetchDirection(int)).
@param direction The specified direction to set, which is either `Jdbc.ResultSet.FETCH_FORWARD` or `Jdbc.ResultSet.FETCH_REVERSE`.*/setFetchDirection(direction:Integer):void;
/**For documentation of this method, see [
`java.sql.ResultSet#setFetchSize(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#setFetchSize(int)).
@param rows The number of rows to fetch.*/setFetchSize(rows:Integer):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateArray(int, Array)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateArray(int,%20java.sql.Array)).
@param columnIndex The index of the column to update (the first column is 1, the second is 2,
    and so on).
@param x The new column value.*/updateArray(columnIndex:Integer,x:Jdbc.JdbcArray):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateArray(String, Array)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateArray(java.lang.String,%20java.sql.Array)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@param x The new column value.*/updateArray(columnLabel:string,x:Jdbc.JdbcArray):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateBigDecimal(int, BigDecimal)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBigDecimal(int,%20java.math.BigDecimal)).
@param columnIndex The index of the column to update (the first column is 1, the second is 2,
    and so on).
@param x The new column value.*/updateBigDecimal(columnIndex:Integer,x:BigNumber):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateBigDecimal(String, BigDecimal)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBigDecimal(java.lang.String,%20java.math.BigDecimal)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@param x The new column value.*/updateBigDecimal(columnLabel:string,x:BigNumber):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateBlob(int, Blob)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBlob(int,%20java.sql.Blob)).
@param columnIndex The index of the column to update (the first column is 1, the second is 2,
    and so on).
@param x The new column value.*/updateBlob(columnIndex:Integer,x:Jdbc.JdbcBlob):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateRef(String, Blob)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBlob(java.lang.String,%20java.sql.Blob)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@param x The new column value.*/updateBlob(columnLabel:string,x:Jdbc.JdbcBlob):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateBoolean(int, boolean)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBoolean(int,%20boolean)).
@param columnIndex The index of the column to update (the first column is 1, the second is 2,
    and so on).
@param x The new column value.*/updateBoolean(columnIndex:Integer,x:boolean):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateBoolean(String, boolean)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBoolean(java.lang.String,%20boolean)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@param x The new column value.*/updateBoolean(columnLabel:string,x:boolean):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateByte(int, byte)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateByte(int,%20byte)).
@param columnIndex The index of the column to update (the first column is 1, the second is 2,
    and so on).
@param x The new column value.*/updateByte(columnIndex:Integer,x:Byte):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateByte(String, byte)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateByte(java.lang.String,%20byte)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@param x The new column value.*/updateByte(columnLabel:string,x:Byte):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateBytes(int, byte[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBytes(int,%20byte[])).
@param columnIndex The index of the column to update (the first column is 1, the second is 2,
    and so on).
@param x The new column value.*/updateBytes(columnIndex:Integer,x:Byte[]):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateBytes(String, byte[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateBytes(java.lang.String,%20byte[])).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@param x The new column value.*/updateBytes(columnLabel:string,x:Byte[]):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateClob(int, Clob)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateClob(int,%20java.sql.Clob)).
@param columnIndex The index of the column to update (the first column is 1, the second is 2,
    and so on).
@param x The new column value.*/updateClob(columnIndex:Integer,x:Jdbc.JdbcClob):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateClob(String, Clob)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateClob(java.lang.String,%20java.sql.Clob)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@param x The new column value.*/updateClob(columnLabel:string,x:Jdbc.JdbcClob):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateDate(int, Date)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateDate(int,%20java.sql.Date)).
@param columnIndex The index of the column to update (the first column is 1, the second is 2,
    and so on).
@param x The new column value.*/updateDate(columnIndex:Integer,x:Jdbc.JdbcDate):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateDate(String, Date)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateDate(java.lang.String,%20java.sql.Date)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@param x The new column value.*/updateDate(columnLabel:string,x:Jdbc.JdbcDate):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateDouble(int, double)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateDouble(int,%20double)).
@param columnIndex The index of the column to update (the first column is 1, the second is 2,
    and so on).
@param x The new column value.*/updateDouble(columnIndex:Integer,x:number):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateDouble(String, double)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateDouble(java.lang.String,%20double)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@param x The new column value.*/updateDouble(columnLabel:string,x:number):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateFloat(int, float)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateFloat(int,%20float)).
@param columnIndex The index of the column to update (the first column is 1, the second is 2,
    and so on).
@param x The new column value.*/updateFloat(columnIndex:Integer,x:number):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateFloat(String, float)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateFloat(java.lang.String,%20float)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@param x The new column value.*/updateFloat(columnLabel:string,x:number):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateInt(int, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateInt(int,%20int)).
@param columnIndex The index of the column to update (the first column is 1, the second is 2,
    and so on).
@param x The new column value.*/updateInt(columnIndex:Integer,x:Integer):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateInt(String, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateInt(java.lang.String,%20int)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@param x The new column value.*/updateInt(columnLabel:string,x:Integer):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateLong(int, long)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateLong(int,%20long)).
@param columnIndex The index of the column to update (the first column is 1, the second is 2,
    and so on).
@param x The new column value.*/updateLong(columnIndex:Integer,x:Integer):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateLong(String, long)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateLong(java.lang.String,%20long)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@param x The new column value.*/updateLong(columnLabel:string,x:Integer):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateNClob(int, NClob)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateNClob(int,%20java.sql.NClob)).
@param columnIndex The index of the column to update (the first column is 1, the second is 2,
    and so on).
@param x The new column value.*/updateNClob(columnIndex:Integer,x:Jdbc.JdbcClob):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateNClob(String, NClob)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateNClob(java.lang.String,%20java.sql.NClob)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@param x The new column value.*/updateNClob(columnLabel:string,x:Jdbc.JdbcClob):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateNString(int, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateNString(int,%20java.lang.String)).
@param columnIndex The index of the column to update (the first column is 1, the second is 2,
    and so on).
@param x The new column value.*/updateNString(columnIndex:Integer,x:string):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateNString(String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateNString(java.lang.String,%20java.lang.String)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@param x The new column value.*/updateNString(columnLabel:string,x:string):void;
/**For documentation of this method, see [

```
java.sql.ResultSet#updateNull(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateNull(int)).
@param columnIndex The index of the column to update (the first column is 1, the second is 2,
    and so on).*/updateNull(columnIndex:Integer):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateNull(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateNull(java.lang.String)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.*/updateNull(columnLabel:string):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateObject(int, Object)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateObject(int,%20java.lang.Object)).
@param columnIndex The index of the column to update (the first column is 1, the second is 2,
    and so on).
@param x The new column value.*/updateObject(columnIndex:Integer,x:Object):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateObject(int, Object, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateObject(int,%20java.lang.Object,%20int)).
@param columnIndex The index of the column to update (the first column is 1, the second is 2,
    and so on).
@param x The new column value.
@param scaleOrLength The number of digits after the decimal for `BigDecimal` types, or
    the length of data for `InputStream` or `Reader` types. Ignored for all other
    types.*/updateObject(columnIndex:Integer,x:Object,scaleOrLength:Integer):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateObject(String, Object)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateObject(java.lang.String,%20java.lang.Object)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@param x The new column value.*/updateObject(columnLabel:string,x:Object):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateObject(String, Object, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateObject(java.lang.String,%20java.lang.Object,%20int)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@param x The new column value.
@param scaleOrLength The number of digits after the decimal for `BigDecimal` types, or
    the length of data for `InputStream` or `Reader` types. Ignored for all other
    types.*/updateObject(columnLabel:string,x:Object,scaleOrLength:Integer):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateRef(int, Ref)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateRef(int,%20java.sql.Ref)).
@param columnIndex The index of the column to update (the first column is 1, the second is 2,
    and so on).
@param x The new column value.*/updateRef(columnIndex:Integer,x:Jdbc.JdbcRef):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateRef(String, Ref)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateRef(java.lang.String,%20java.sql.Ref)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@param x The new column value.*/updateRef(columnLabel:string,x:Jdbc.JdbcRef):void;
/**For documentation of this method, see [

```
java.sql.ResultSet#updateRow()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateRow()).*/updateRow():void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateRowId(int, RowId)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateRowId(int,%20java.sql.RowId)).
@param columnIndex The index of the column to update (the first column is 1, the second is 2,
    and so on).
@param x The new column value.*/updateRowId(columnIndex:Integer,x:Jdbc.JdbcRowId):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateRowId(String, RowId)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateRowId(java.lang.String,%20java.sql.RowId)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@param x The new column value.*/updateRowId(columnLabel:string,x:Jdbc.JdbcRowId):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateSQLXML(int, SQLXML)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateSQLXML(int,%20java.sql.SQLXML)).
@param columnIndex The index of the column to update (the first column is 1, the second is 2,
    and so on).
@param x The new column value.*/updateSQLXML(columnIndex:Integer,x:Jdbc.JdbcSQLXML):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateSQLXML(String, SQLXML)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateSQLXML(java.lang.String,%20java.sql.SQLXML)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@param x The new column value.*/updateSQLXML(columnLabel:string,x:Jdbc.JdbcSQLXML):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateShort(int, short)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateShort(int,%20short)).
@param columnIndex The index of the column to update (the first column is 1, the second is 2,
    and so on).
@param x The new column value.*/updateShort(columnIndex:Integer,x:Integer):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateShort(String, short)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateShort(java.lang.String,%20short)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@param x The new column value.*/updateShort(columnLabel:string,x:Integer):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateString(int, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateString(int,%20java.lang.String)).
@param columnIndex The index of the column to update (the first column is 1, the second is 2,
    and so on).
@param x The new column value.*/updateString(columnIndex:Integer,x:string):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateString(String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateString(java.lang.String,%20java.lang.String)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@param x The new column value.*/updateString(columnLabel:string,x:string):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateTime(int, Time)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateTime(int,%20java.sql.Time)).
@param columnIndex The index of the column to update (the first column is 1, the second is 2,
    and so on).
@param x The new column value.*/updateTime(columnIndex:Integer,x:Jdbc.JdbcTime):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateTime(String, Time)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateTime(java.lang.String,%20java.sql.Time)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@param x The new column value.*/updateTime(columnLabel:string,x:Jdbc.JdbcTime):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateTimestamp(int, Timestamp)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateTimestamp(int,%20java.sql.Timestamp)).
@param columnIndex The index of the column to update (the first column is 1, the second is 2,
    and so on).
@param x The new column value.*/updateTimestamp(columnIndex:Integer,x:Jdbc.JdbcTimestamp):void;
/**For documentation of this method, see [
`java.sql.ResultSet#updateTimestamp(String, Timestamp)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#updateTimestamp(java.lang.String,%20java.sql.Timestamp)).
@param columnLabel The label for the column, specified with the SQL AS clause. If the AS clause
    wasn't specified, then the label is the name of the column.
@param x The new column value.*/updateTimestamp(columnLabel:string,x:Jdbc.JdbcTimestamp):void;
/**For documentation of this method, see [

```
java.sql.ResultSet#wasNull()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/ResultSet.html#wasNull()).
@return `true` if the last column read was SQL `NULL`; `false` otherwise.*/wasNull():boolean;}interface JdbcRef{
/**For documentation of this method, see [

```
java.sql.Ref#getBaseTypeName()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Ref.html#getBaseTypeName()).
@return The fully-qualified SQL name of the SQL structured type this [`JdbcRef`](https://developers.google.com/apps-script/reference/jdbc/jdbc-ref.html)
    references.*/getBaseTypeName():string;
/**For documentation of this method, see [

```
java.sql.Ref#getObject()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Ref.html#getObject()).
@return The object that this [`JdbcRef`](https://developers.google.com/apps-script/reference/jdbc/jdbc-ref.html) references.*/getObject():Object;
/**For documentation of this method, see [
`java.sql.Ref#setObject(Object)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Ref.html#setObject(java.lang.Object)).
@param object The object to set as the refernence target.*/setObject(object:Object):void;}interface JdbcPreparedStatement{
/**For documentation of this method, see [
`java.sql.PreparedStatement#addBatch()`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#addBatch()).*/addBatch():void;
/**For documentation of this method, see [
`java.sql.Statement#addBatch(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#addBatch(java.lang.String)).
@param sql The SQL command to add to this statement, typically an SQL `INSERT` or `UPDATE`.*/addBatch(sql:string):void;
/**For documentation of this method, see [

```
java.sql.Statement#cancel()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#cancel()).*/cancel():void;
/**For documentation of this method, see [

```
java.sql.Statement#clearBatch()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#clearBatch()).*/clearBatch():void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#clearParameters()`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#clearParameters()).*/clearParameters():void;
/**For documentation of this method, see [

```
java.sql.Statement#clearWarnings()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#clearWarnings()).*/clearWarnings():void;
/**For documentation of this method, see [

```
java.sql.Statement#close()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#close()).*/close():void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#execute()`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#execute()).
@return `true` if the first result is a result set; `false` if the first result is
    an update count or there is no result.*/execute():boolean;
/**For documentation of this method, see [
`java.sql.Statement#execute(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String)).
@param sql The SQL statement to execute.
@return `true` if the first result is a result set; `false` if it is an update
    count or if there are no results.*/execute(sql:string):boolean;
/**For documentation of this method, see [
`java.sql.Statement#execute(String, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String,%20int)).
@param sql The SQL statement to execute.
@param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available
    for future retrieval; either `Jdbc.Statement.RETURN_GENERATED_KEYS` or `Jdbc.Statement.NO_GENERATED_KEYS`.
@return `true` if the first result is a result set; `false` if it is an update
    count or if there are no results.*/execute(sql:string,autoGeneratedKeys:Integer):boolean;
/**For documentation of this method, see [
`java.sql.Statement#execute(String, int[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String,%20int[])).
@param sql The SQL statement to execute.
@param columnIndexes The column indices in the whose auto-generated keys are made available for
    future retrieval.
@return `true` if the first result is a result set; `false` if it is an update
    count or if there are no results.*/execute(sql:string,columnIndexes:Integer[]):boolean;
/**For documentation of this method, see [
`java.sql.Statement#execute(String, String[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String,%20java.lang.String[])).
@param sql The SQL statement to execute.
@param columnNames The names of columns in the whose auto-generated keys are made available for
    future retrieval.
@return `true` if the first result is a result set; `false` if it is an update
    count or if there are no results.*/execute(sql:string,columnNames:string[]):boolean;
/**For documentation of this method, see [

```
java.sql.Statement#executeBatch()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeBatch()).
@return The update counts for each command in the batch, using the same order in which commands
    were added to the batch.*/executeBatch():Integer[];
/**For documentation of this method, see [
`java.sql.PreparedStatement#executeQuery()`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#executeQuery()).
@return A result set that contains the data produced by the query.*/executeQuery():Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.Statement#executeQuery(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeQuery(java.lang.String)).
@param sql The SQL statement to execute, typically a static `SELECT`.
@return A result set containing the results of the execution. This is never `null`.*/executeQuery(sql:string):Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.PreparedStatement#executeUpdate()`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#executeUpdate()).
@return The row count ofr SQL Data Manipulation Language statements, or 0 for SQL statements
    that return nothing.*/executeUpdate():Integer;
/**For documentation of this method, see [
`java.sql.Statement#executeUpdate(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String)).
@param sql The SQL Data Manipulation Language statement to execute (such as `INSERT`,
    `UPDATE`, or `DELETE`), or else a statement that returns nothing (such as a DDL
    statement).
@return Either the row count for for Data Manipulation Language statements, or 0 for statements
    that return nothing.*/executeUpdate(sql:string):Integer;
/**For documentation of this method, see [
`java.sql.Statement#executeUpdate(String, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String,%20int)).
@param sql The SQL Data Manipulation Language statement to execute (such as `INSERT`,
    `UPDATE`, or `DELETE`), or else a statement that returns nothing (such as a DDL
    statement).
@param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available
    for future retrieval; either `Jdbc.Statement.RETURN_GENERATED_KEYS` or `Jdbc.Statement.NO_GENERATED_KEYS`.
@return Either the row count for for Data Manipulation Language statements, or 0 for statements
    that return nothing.*/executeUpdate(sql:string,autoGeneratedKeys:Integer):Integer;
/**For documentation of this method, see [
`java.sql.Statement#executeUpdate(String, int[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String,%20int[])).
@param sql The SQL Data Manipulation Language statement to execute (such as `INSERT`,
    `UPDATE`, or `DELETE`), or else a statement that returns nothing (such as a DDL
    statement).
@param columnIndexes The column indices in the whose auto-generated keys are made available for
    future retrieval.
@return Either the row count for for Data Manipulation Language statements, or 0 for statements
    that return nothing.*/executeUpdate(sql:string,columnIndexes:Integer[]):Integer;
/**For documentation of this method, see [
`java.sql.Statement#executeUpdate(String, String[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String,%20java.lang.String[])).
@param sql The SQL Data Manipulation Language statement to execute (such as `INSERT`,
    `UPDATE`, or `DELETE`), or else a statement that returns nothing (such as a DDL
    statement).
@param columnNames The names of columns in the whose auto-generated keys are made available for
    future retrieval.
@return Either the row count for for Data Manipulation Language statements, or 0 for statements
    that return nothing.*/executeUpdate(sql:string,columnNames:string[]):Integer;
/**For documentation of this method, see [

```
java.sql.Statement#getConnection()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getConnection()).
@return The connection that produced this statement.*/getConnection():Jdbc.JdbcConnection;
/**For documentation of this method, see [
`java.sql.Statement#getFetchDirection()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getFetchDirection()).
@return The default direction for result sets generated by this statement, which is either
    `Jdbc.ResultSet.FETCH_FORWARD` or `Jdbc.ResultSet.FETCH_REVERSE`.*/getFetchDirection():Integer;
/**For documentation of this method, see [

```
java.sql.Statement#getFetchSize()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getFetchSize()).
@return The default row fetch size for result sets generated from this statement.*/getFetchSize():Integer;
/**For documentation of this method, see [
`java.sql.Statement#getGeneratedKeys()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getGeneratedKeys()).
@return A result set containing the auto-generated keys generated by the execution of this
    statement.*/getGeneratedKeys():Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.Statement#getMaxFieldSize()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMaxFieldSize()).
@return The current column byte size limit for columns storing character and binary values; a
    value of zero indictates no limit.*/getMaxFieldSize():Integer;
/**For documentation of this method, see [

```
java.sql.Statement#getMaxRows()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMaxRows()).
@return The current maximum number of rows for a result set produced by this statement; a value
    of 0 indicates no limit.*/getMaxRows():Integer;
/**For documentation of this method, see [
`java.sql.PreparedStatement#getMetaData()`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#getMetaData()).
@return The description of a result set's columns, or `NULL` if this metadata is
    unavailable.*/getMetaData():Jdbc.JdbcResultSetMetaData;
/**For documentation of this method, see [
`java.sql.Statement#getMoreResults()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMoreResults()).
@return `true` if the next result is a result set; `false` otherwise.*/getMoreResults():boolean;
/**For documentation of this method, see [
`java.sql.Statement#getMoreResults(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMoreResults(int)).
@param current A flag that indicates what happens to current result sets when retrieved. This
    value is one of `Jdbc.Statement.CLOSE_CURRENT_RESULT`, `Jdbc.Statement.KEEP_CURRENT_RESULT`, or `Jdbc.Statement.CLOSE_ALL_RESULTS`.
@return `true` if the next result is a result set; `false` otherwise.*/getMoreResults(current:Integer):boolean;
/**For documentation of this method, see [
`java.sql.PreparedStatement#getParameterMetaData()`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#getParameterMetaData()).
@return The parameter metadata, including the number, types, and properties for each parameter.*/getParameterMetaData():Jdbc.JdbcParameterMetaData;
/**For documentation of this method, see [
`java.sql.Statement#getQueryTimeout()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getQueryTimeout()).
@return The current query timeout in seconds; a value of zero indicates no timeout.*/getQueryTimeout():Integer;
/**For documentation of this method, see [

```
java.sql.Statement#getResultSet()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSet()).
@return The current result set, or `null` if the result is an update count or there are
    no more results.*/getResultSet():Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.Statement#getResultSetConcurrency()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetConcurrency()).
@return The result set concurrency for result sets generated from this statement, which is
    either `Jdbc.ResultSet.CONCUR_READ_ONLY` or `Jdbc.ResultSet.CONCUR_UPDATABLE`.*/getResultSetConcurrency():Integer;
/**For documentation of this method, see [
`java.sql.Statement#getResultSetHoldability()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetHoldability()).
@return The result set holdability, which is either `Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT` or `Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT`.*/getResultSetHoldability():Integer;
/**For documentation of this method, see [
`java.sql.Statement#getResultSetType()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetType()).
@return The result set type for result sets generated from this statement, which is `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or
    `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`.*/getResultSetType():Integer;
/**For documentation of this method, see [
`java.sql.Statement#getUpdateCount()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getUpdateCount()).
@return The current result as an update count, or -1 if the current result is a result set or
    if there are no more results.*/getUpdateCount():Integer;
/**For documentation of this method, see [

```
java.sql.Statement#getWarnings()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getWarnings()).
@return The current set of warnings, or `null` if there are no warnings.*/getWarnings():string[];
/**For documentation of this method, see [

```
java.sql.Statement#isClosed()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#isClosed()).
@return `true` if this statement is closed; `false` otherwise.*/isClosed():boolean;
/**For documentation of this method, see [

```
java.sql.Statement#isPoolable()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#isPoolable()).
@return `true` if this statement is poolable; `false` otherwise.*/isPoolable():boolean;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setArray(int, Array)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setArray(int,%20java.sql.Array)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setArray(parameterIndex:Integer,x:Jdbc.JdbcArray):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setBigDecimal(int, BigDecimal)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBigDecimal(int,%20java.math.BigDecimal)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setBigDecimal(parameterIndex:Integer,x:BigNumber):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setBlob(int, Clob)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBlob(int,%20java.sql.Blob)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setBlob(parameterIndex:Integer,x:Jdbc.JdbcBlob):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setBoolean(int, boolean)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBoolean(int,%20boolean)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setBoolean(parameterIndex:Integer,x:boolean):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setByte(int, byte)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setByte(int,%20byte)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setByte(parameterIndex:Integer,x:Byte):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setBytes(int, byte[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBytes(int,%20byte[])).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setBytes(parameterIndex:Integer,x:Byte[]):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setClob(int, Clob)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setClob(int,%20java.sql.Clob)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setClob(parameterIndex:Integer,x:Jdbc.JdbcClob):void;
/**For documentation of this method, see [
`java.sql.Statement#setCursorName(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setCursorName(java.lang.String)).
@param name The new cursor name, which must be unique within a connection.*/setCursorName(name:string):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setDate(int, Date)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setDate(int,%20java.sql.Date)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setDate(parameterIndex:Integer,x:Jdbc.JdbcDate):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setDate(int, Date, Calendar)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setDate(int,%20java.sql.Date,%20java.util.Calendar)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.
@param timeZone A time zone string used to construct [
    java.lang.Calendar](https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html) instance, which in turn is used to build the date. Several formats
    of time zone strings are recognized: short IDs (such as `PST`, `EST`, and
    `GMT`), long IDs (such as `US/Pacific` and `America/Los_Angeles`), and
    offsets (such as `GMT+6:30`).*/setDate(parameterIndex:Integer,x:Jdbc.JdbcDate,timeZone:string):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setDouble(int, double)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setDouble(int,%20double)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setDouble(parameterIndex:Integer,x:number):void;
/**For documentation of this method, see [
`java.sql.Statement#setEscapeProcessing(boolean)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setEscapeProcessing(boolean)).
@param enable If `true`, escape processing is enabled; otherwise it is disabled.*/setEscapeProcessing(enable:boolean):void;
/**For documentation of this method, see [
`java.sql.Statement#setFetchDirection(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setFetchDirection(int)).
@param direction The specified direction to set, which is either `Jdbc.ResultSet.FETCH_FORWARD` or `Jdbc.ResultSet.FETCH_REVERSE`.*/setFetchDirection(direction:Integer):void;
/**For documentation of this method, see [
`java.sql.Statement#setFetchSize(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setFetchSize(int)).
@param rows The number of rows to fetch.*/setFetchSize(rows:Integer):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setFloat(int, float)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setFloat(int,%20float)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setFloat(parameterIndex:Integer,x:number):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setInt(int, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setInt(int,%20int)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setInt(parameterIndex:Integer,x:Integer):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setLong(int, long)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setLong(int,%20long)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setLong(parameterIndex:Integer,x:Integer):void;
/**For documentation of this method, see [
`java.sql.Statement#setMaxFieldSize(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setMaxFieldSize(int)).
@param max The new column byte size limit; a value of zero indicates no limit.*/setMaxFieldSize(max:Integer):void;
/**For documentation of this method, see [

```
java.sql.Statement#setMaxRows(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setMaxRows(int)).
@param max The maximum number of rows a result set generated by this statement can have. A
    value of 0 indicates no limit.*/setMaxRows(max:Integer):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setNClob(int, NClob)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNClob(int,%20java.sql.NClob)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setNClob(parameterIndex:Integer,x:Jdbc.JdbcClob):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setNString(int, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNString(int,%20java.lang.String)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setNString(parameterIndex:Integer,x:string):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setNull(int, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNull(int,%20int)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param sqlType The [SQL
    type](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) of the specified parameter.*/setNull(parameterIndex:Integer,sqlType:Integer):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setNull(int, int, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNull(int,%20int,%20java.lang.String)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param sqlType The [SQL
    type](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) of the specified parameter.
@param typeName The fully-qualifed name of an SQL user-defined type. Ignored if the parameter
    isn't a user-defined type or `REF`.*/setNull(parameterIndex:Integer,sqlType:Integer,typeName:string):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setObject(int, Object)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setObject(int,%20java.lang.Object)).
@param index The index of the parameter to set (the first parameter is 1, the second is 2, and
    so on).
@param x The object containing the value to set the parameter to.*/setObject(index:Integer,x:Object):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setObject(int, Object, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setObject(int,%20java.lang.Object,%20int)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The object containing the value to set the parameter to.
@param targetSqlType The [SQL type](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) to send
    to the database.*/setObject(parameterIndex:Integer,x:Object,targetSqlType:Integer):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setObject(int, Object, int, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setObject(int,%20java.lang.Object,%20int,%20int)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The object containing the value to set the parameter to.
@param targetSqlType The [SQL type](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) to send
    to the database. The scale argument may further qualify this type.
@param scaleOrLength The number of digits after the decimal for `DECIMAL` or `NUMERIC` types, or the length of data for `InputStream` or `Reader` types.
    Ignored for all other types.*/setObject(parameterIndex:Integer,x:Object,targetSqlType:Integer,scaleOrLength:Integer):void;
/**For documentation of this method, see [
`java.sql.Statement#setPoolable(boolean)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setPoolable(boolean)).
@param poolable If `true`, requests that this statement be pooled; otherwise requests it
    not be pooled.*/setPoolable(poolable:boolean):void;
/**For documentation of this method, see [
`java.sql.Statement#setQueryTimeout(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setQueryTimeout(int)).
@param seconds The new query timeout in seconds; a value of 0 indicates no timeout.*/setQueryTimeout(seconds:Integer):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setRef(int, Ref)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setRef(int,%20java.sql.Ref)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The SQL `REF` value to set.*/setRef(parameterIndex:Integer,x:Jdbc.JdbcRef):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setRowId(int, RowId)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setRowId(int,%20java.sql.RowId)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setRowId(parameterIndex:Integer,x:Jdbc.JdbcRowId):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setSQLXML(int, SQLXML)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setSQLXML(int,%20java.sql.SQLXML)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setSQLXML(parameterIndex:Integer,x:Jdbc.JdbcSQLXML):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setShort(int, short)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setShort(int,%20short)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setShort(parameterIndex:Integer,x:Integer):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setString(int, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setString(int,%20java.lang.String)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setString(parameterIndex:Integer,x:string):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setTime(int, Time)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setTime(int,%20java.sql.Time)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setTime(parameterIndex:Integer,x:Jdbc.JdbcTime):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setTime(int, Time, Calendar)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setTime(int,%20java.sql.Time,%20java.util.Calendar)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.
@param timeZone A time zone string used to construct [
    java.lang.Calendar](https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html) instance, which in turn is used to build the date. Several formats
    of time zone strings are recognized: short IDs (such as `PST`, `EST`, and
    `GMT`), long IDs (such as `US/Pacific` and `America/Los_Angeles`), and
    offsets (such as `GMT+6:30`).*/setTime(parameterIndex:Integer,x:Jdbc.JdbcTime,timeZone:string):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setTimestamp(int, Timestamp)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setTimestamp(int,%20java.sql.Timestamp)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setTimestamp(parameterIndex:Integer,x:Jdbc.JdbcTimestamp):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setTimestamp(int, Timestamp, Calendar)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setTimestamp(int,%20java.sql.Timestamp,%20java.util.Calendar)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.
@param timeZone A time zone string used to construct [
    java.lang.Calendar](https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html) instance, which in turn is used to build the date. Several formats
    of time zone strings are recognized: short IDs (such as `PST`, `EST`, and
    `GMT`), long IDs (such as `US/Pacific` and `America/Los_Angeles`), and
    offsets (such as `GMT+6:30`).*/setTimestamp(parameterIndex:Integer,x:Jdbc.JdbcTimestamp,timeZone:string):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setURL(int, URL)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setURL(int,%20java.net.URL)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setURL(parameterIndex:Integer,x:string):void;}interface JdbcParameterMetaData{
/**For documentation of this method, see [
`java.sql.ParameterMetaData#getParameterClassName(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#getParameterClassName(int)).
@param param The index of the parameter to examine. The first parameter has an index of 1.
@return The fully-qualified Java class name that is used by the [`JdbcPreparedStatement.setObject(index, x)`](https://developers.google.com/apps-script/reference/jdbc/jdbc-prepared-statement.html#setObject(Integer,Object)) methods.*/getParameterClassName(param:Integer):string;
/**For documentation of this method, see [
`java.sql.ParameterMetaData#getParameterCount()`](https://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#getParameterCount()).
@return The number of parameters for which this metadata contains information.*/getParameterCount():Integer;
/**For documentation of this method, see [
`java.sql.ParameterMetaData#getParameterMode(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#getParameterMode(int)).
@param param The index of the parameter to examine. The first parameter has an index of 1.
@return The designated parameter's mode, which is one of `Jdbc.ParameterMetaData.parameterModeIn`, `Jdbc.ParameterMetaData.parameterModeOut`,
    `Jdbc.ParameterMetaData.parameterModeInOut`, or `Jdbc.ParameterMetaData.parameterModeUnknown`.*/getParameterMode(param:Integer):Integer;
/**For documentation of this method, see [
`java.sql.ParameterMetaData#getParameterType(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#getParameterType(int)).
@param param The index of the parameter to examine. The first parameter has an index of 1.
@return The designated parameter's [SQL type](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html).*/getParameterType(param:Integer):Integer;
/**For documentation of this method, see [
`java.sql.ParameterMetaData#getParameterTypeName(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#getParameterTypeName(int)).
@param param The index of the parameter to examine. The first parameter has an index of 1.
@return The designated parameter's database-specific type name. This is a fully-qualified type
    name if the parameter is a user-defined type.*/getParameterTypeName(param:Integer):string;
/**For documentation of this method, see [
`java.sql.ParameterMetaData#getPrecision(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#getPrecision(int)).
@param param The index of the parameter to examine. The first parameter has an index of 1.
@return The maximum column size for the given parameter. For numeric data, this is the maximum
    precision. For character data, this is the length in characters. For datetime data, this is
    the length in characters of the string representation (assuming the maximum allowed
    precision of the fractional seconds component). For binary data, this is the length in
    bytes. For the `ROWID` datatype, this is the length in bytes. Returns 0 for types
    where the column size is not applicable.*/getPrecision(param:Integer):Integer;
/**For documentation of this method, see [
`java.sql.ParameterMetaData#getScale(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#getScale(int)).
@param param The index of the parameter to examine. The first parameter has an index of 1.
@return The designated parameter's number of digits to right of the decimal point. Returns 0
    for data types where the scale is not applicable.*/getScale(param:Integer):Integer;
/**For documentation of this method, see [
`java.sql.ParameterMetaData#isNullable(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#isNullable(int)).
@param param The index of the parameter to examine. The first parameter has an index of 1.
@return The nullability status of the given parameter; one of `Jdbc.ParameterMetaData.parameterNoNulls`, `Jdbc.ParameterMetaData.parameterNullable`,
    or `Jdbc.ParameterMetaData.parameterNullableUnknown`.*/isNullable(param:Integer):Integer;
/**For documentation of this method, see [
`java.sql.ParameterMetaData#isSigned(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/ParameterMetaData.html#isSigned(int))).
@param param The index of the parameter to examine. The first parameter has an index of 1.
@return `true` if the specified parameter can accept signed number values; `false`
    otherwise.*/isSigned(param:Integer):boolean;}interface JdbcDate{
/**For documentation of this method, see [
`java.sql.Date#after(date)`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#after(java.util.Date)).
@param when A date to compare to.
@return `true` if and only if this date is strictly later than the provided date; `false` otherwise.*/after(when:Jdbc.JdbcDate):boolean;
/**For documentation of this method, see [
`java.sql.Date#before(date)`](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#before(java.util.Date)).
@param when A date to compare to.
@return `true` if and only if this date is strictly earlier than the provided date;
    `false` otherwise.*/before(when:Jdbc.JdbcDate):boolean;
/**For documentation of this method, see [

```
java.sql.Date#getDate()```

](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getDate()).
@return The day of the month represented by this date. The value is between 1 and 31.*/getDate():Integer;
/**For documentation of this method, see [

```
java.sql.Date#getMonth()```

](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getMonth()).
@return The number representing the month that contains or begins with the instant in time
    represented by this date. The value returned is between 0 and 11, with the value 0
    representing January.*/getMonth():Integer;
/**For documentation of this method, see [

```
java.sql.Date#getTime()```

](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getTime()).
@return The number of milliseconds since January 1, 1970, 00:00:00 GMT represented by this
    date.*/getTime():Integer;
/**For documentation of this method, see [

```
java.sql.Date#getYear()```

](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#getYear()).
@return The result of subtracting 1900 from the year that contains or begins with the instant
    in time represented by this date, as interpreted in the local time zone.*/getYear():Integer;
/**For documentation of this method, see [

```
java.sql.Date#setDate(int)```

](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setDate(int)).
@param date The day of the month to set. The value is between 1 and 31, modified as needed. For
    example, if the date was April 30, for example, and the date is set to 31, then it is
    treated as if it were on May 1, because April has only 30 days.*/setDate(date:Integer):void;
/**For documentation of this method, see [

```
java.sql.Date#setMonth(int)```

](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setMonth(int)).
@param month The month value to set. The value returned is between 0 and 11, with the value 0
    representing January.*/setMonth(month:Integer):void;
/**For documentation of this method, see [

```
java.sql.Date#setTime(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Date.html#setTime(long)).
@param milliseconds The number of milliseconds since January 1, 1970, 00:00:00 GMT, not to
    exceed the milliseconds representation for the year 8099. A negative number indicates the
    number of milliseconds before January 1, 1970, 00:00:00 GMT.*/setTime(milliseconds:Integer):void;
/**For documentation of this method, see [

```
java.sql.Date#setYear(int)```

](https://docs.oracle.com/javase/6/docs/api/java/util/Date.html#setYear(int)).
@param year The value to set the year with. This value plus 1900 is the resulting year the date
    has after this method executes.*/setYear(year:Integer):void;}interface JdbcDatabaseMetaData{
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#allProceduresAreCallable()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#allProceduresAreCallable()).
@return `true` if the user can call all of the procedures returned by [`getProcedures(catalog, schemaPattern, procedureNamePattern)`](https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data.html#getProcedures(String,String,String)); `false` otherwise.*/allProceduresAreCallable():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#allTablesAreSelectable()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#allTablesAreSelectable()).
@return `true` if the user can call all of the tables returned by [`getTables(catalog, schemaPattern, tableNamePattern, types)`](https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data.html#getTables(String,String,String,String)) in a `SELECT`
    statement; `false` otherwise.*/allTablesAreSelectable():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#autoCommitFailureClosesAllResultSets()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#autoCommitFailureClosesAllResultSets()).
@return `true` if, when `autoCommit` is `true`, a SQL exception indicates
    that all open result sets are closed, even if holdable. Returns `false` otherwise.*/autoCommitFailureClosesAllResultSets():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#dataDefinitionCausesTransactionCommit()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#dataDefinitionCausesTransactionCommit()).
@return `true` if a data definition statement within a transaction forces the transaction
    to commit; `false` otherwise.*/dataDefinitionCausesTransactionCommit():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#dataDefinitionIgnoredInTransactions()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#dataDefinitionIgnoredInTransactions()).
@return `true` if the database ignores a data definition statement within a transaction;
    `false` otherwise.*/dataDefinitionIgnoredInTransactions():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#deletesAreDetected(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#deletesAreDetected(int)).
@param type The result set type, which is `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`.
@return `true` if for the specified result set type a visible row delete is detected by
    calls to [`JdbcResultSet.rowDeleted()`](https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set.html#rowDeleted()). If `false`, the deleted rows are removed
    from the result set.*/deletesAreDetected(type:Integer):boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#doesMaxRowSizeIncludeBlobs()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#doesMaxRowSizeIncludeBlobs()).
@return `true` if SQL data types `LONGVARCHAR` and `LONGVARBINARY` are
    included in the size returned by [`getMaxRowSize()`](https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data.html#getMaxRowSize()); `false` otherwise.*/doesMaxRowSizeIncludeBlobs():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getAttributes(String, String, String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getAttributes(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String)).
@param catalog The catalog name to filter the search by, as it appears in the database. Passing
    an empty string retrieves those procedures without a catalog. Passing `null`
    incidates the catalog name isn't used to narrow the search.
@param schemaPattern The schema name pattern to filter the search by, as it appears in the
    database. Passing an empty string retrieves those procedures without a schema. Passing
    `null` incidates the schema name isn't used to narrow the search.
@param typeNamePattern The user-defined type name pattern; it must match the type name as it is
    stored in the database.
@param attributeNamePattern The attribute name pattern; it must match the attribute name as it
    is declared in the database.
@return A result set containing descriptions the attributes for a specified user-defined type
    available in the specified schema and catalog. Each row provides information about a
    specific attribute, ordered by `TYPE_CAT`, `TYPE_SCHEM`, `TYPE_NAME`, and
    `ORDINAL_POSITION`.*/getAttributes(catalog:string,schemaPattern:string,typeNamePattern:string,attributeNamePattern:string):Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getBestRowIdentifier(String, String, String, int, boolean)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getBestRowIdentifier(java.lang.String,%20java.lang.String,%20java.lang.String,%20int,%20boolean)).
@param catalog The catalog name to filter the search by, as it appears in the database. Passing
    an empty string retrieves those procedures without a catalog. Passing `null`
    incidates the catalog name isn't used to narrow the search.
@param schema The schema name to filter the search by, as it appears in the database. Passing
    an empty string retrieves those procedures without a schema. Passing `null` incidates
    the schema name isn't used to narrow the search.
@param table The table name. It must match the table name as it is stored in the database.
@param scope The scope of interest, using the same values as present in the `SCOPE`
    column description column.
@param nullable If `true`, include columns that are nullable; otherwise do not.
@return A result set containing the column descriptions that uniquely identify a row (one
    column description per row in the result set, ordered by `SCOPE`).*/getBestRowIdentifier(catalog:string,schema:string,table:string,scope:Integer,nullable:boolean):Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getCatalogSeparator()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getCatalogSeparator()).
@return The separator between a catalog and table name used by this database.*/getCatalogSeparator():string;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getCatalogTerm()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getCatalogTerm()).
@return The database vendor's preferred term for 'catalog'.*/getCatalogTerm():string;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getCatalogs()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getCatalogs()).
@return A result set containing the catalog names, one per row.*/getCatalogs():Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getClientInfoProperties()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getClientInfoProperties()).
@return A result set containing client info properties the driver supports, ordered by `NAME`, one per row.*/getClientInfoProperties():Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getColumnPrivileges(String, String, String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getColumnPrivileges(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String)).
@param catalog The catalog name to filter the search by, as it appears in the database. Passing
    an empty string retrieves those procedures without a catalog. Passing `null`
    incidates the catalog name isn't used to narrow the search.
@param schema The name of the schema to filter the search by, as it appears in the database.
    Passing an empty string retrieves those procedures without a schema. Passing `null`
    incidates the schema name isn't used to narrow the search.
@param table The table name. It must match the table name as it is stored in the database.
@param columnNamePattern The column name pattern to filter the search by. It must match the
    column name as it is stored in the database.
@return A result set containing the column privilege descriptions, one per row, ordered by
    `COLUMN_NAME` and `PRIVILEGE`.*/getColumnPrivileges(catalog:string,schema:string,table:string,columnNamePattern:string):Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getColumns(String, String, String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getColumns(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String)).
@param catalog The catalog name to filter the search by, as it appears in the database. Passing
    an empty string retrieves those procedures without a catalog. Passing `null`
    incidates the catalog name isn't used to narrow the search.
@param schemaPattern The schema name pattern to filter the search by, as it appears in the
    database. Passing an empty string retrieves those procedures without a schema. Passing
    `null` incidates the schema name isn't used to narrow the search.
@param tableNamePattern The table name pattern to filter the search by. It must match the table
    name as it is stored in the database.
@param columnNamePattern The column name pattern to filter the search by. It must match the
    column name as it is stored in the database.
@return A result set containing the column descriptions, one per row, ordered according to
    `TABLE_CAT`, `TABLE_SCHEM`, `TABLE_NAME`, and `ORDINAL_POSITION`.*/getColumns(catalog:string,schemaPattern:string,tableNamePattern:string,columnNamePattern:string):Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getConnection()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getConnection()).
@return The connection that produced this metadata.*/getConnection():Jdbc.JdbcConnection;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getCrossReference(String, String, String,
     String, String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getCrossReference(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String)).
@param parentCatalog A parent catalog name as it appears in the database. Passing an empty
    string retrieves those procedures without a catalog. Passing `null` incidates the
    catalog name isn't used in the selection criteria.
@param parentSchema A parent schema name as it appears in the database. Passing an empty string
    retrieves those procedures without a schema. Passing `null` incidates the schema name
    isn't used in the selection criteria.
@param parentTable The name of the parent table that exports the key. It must match the table
    name as it is stored in the database.
@param foreignCatalog A foreign catalog name as it appears in the database. Passing an empty
    string retrieves those procedures without a catalog. Passing `null` incidates the
    catalog name isn't used in the selection criteria.
@param foreignSchema A foreign schema name as it appears in the database. Passing an empty
    string retrieves those procedures without a schema. Passing `null` incidates the
    schema name isn't used in the selection criteria.
@param foreignTable The name of the foreign table that exports the key. It must match the table
    name as it is stored in the database.
@return An result set containing the foreign key column descriptions from the specified foreign
    key table that reference the primary key or the columns representing a unique constraint of
    the parent table. One column description is provided in each row of the result set, and
    they are ordered by `FKTABLE_CAT`, `FKTABLE_SCHEM`, `FKTABLE_NAME`, and
    `KEY_SEQ`.*/getCrossReference(parentCatalog:string,parentSchema:string,parentTable:string,foreignCatalog:string,foreignSchema:string,foreignTable:string):Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getDatabaseMajorVersion()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDatabaseMajorVersion()).
@return The major version number of the underlying database.*/getDatabaseMajorVersion():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getDatabaseMinorVersion()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDatabaseMinorVersion()).
@return The minor version number of the underlying database.*/getDatabaseMinorVersion():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getDatabaseProductName()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDatabaseProductName()).
@return The name of this database product.*/getDatabaseProductName():string;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getDatabaseProductVersion()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDatabaseProductVersion()).
@return The version number of this database product.*/getDatabaseProductVersion():string;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getDefaultTransactionIsolation()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDefaultTransactionIsolation()).
@return The database's default transaction isolation level, which is one of: `Jdbc.Connection.TRANSACTION_READ_UNCOMMITTED`, `Jdbc.Connection.TRANSACTION_READ_COMMITTED`, `Jdbc.Connection.TRANSACTION_REPEATABLE_READ`, `Jdbc.Connection.TRANSACTION_SERIALIZABLE`, or `Jdbc.Connection.TRANSACTION_NONE`.*/getDefaultTransactionIsolation():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getDriverMajorVersion()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDriverMajorVersion()).
@return The JDBC driver's major version number.*/getDriverMajorVersion():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getDriverMinorVersion()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDriverMinorVersion()).
@return The JDBC driver's minor version number.*/getDriverMinorVersion():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getDriverName()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDriverName()).
@return The name of this JDBC driver.*/getDriverName():string;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getDriverVersion()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getDriverVersion()).
@return The version number of this JDBC driver.*/getDriverVersion():string;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getImportedKeys(String, String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getExportedKeys(java.lang.String,%20java.lang.String,%20java.lang.String)).
@param catalog The catalog name to filter the search by, as it appears in the database. Passing
    an empty string retrieves those procedures without a catalog. Passing `null`
    incidates the catalog name isn't used to narrow the search.
@param schema The schema name to filter the search by, as it appears in the database. Passing
    an empty string retrieves those procedures without a schema. Passing `null` incidates
    the schema name isn't used to narrow the search.
@param table The table name. It must match the table name as it is stored in the database.
@return An result set containing the foreign key column descriptions for the primary key
    columns exported by the table. One column description is provided in each row of the result
    set, and they are ordered by `FKTABLE_CAT`, `FKTABLE_SCHEM`, `FKTABLE_NAME`, and `KEY_SEQ`.*/getExportedKeys(catalog:string,schema:string,table:string):Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getExtraNameCharacters()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getExtraNameCharacters()).
@return The extra characters that are avaiable for use in unquoted identifier names in addition
    to a-z, A-Z, 0-9, and _.*/getExtraNameCharacters():string;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getFunctionColumns(String, String, String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getFunctionColumns(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String)).
@param catalog The catalog name to filter the search by, as it appears in the database. Passing
    an empty string retrieves those procedures without a catalog. Passing `null`
    incidates the catalog name isn't used to narrow the search.
@param schemaPattern The schema name pattern to filter the search by, as it appears in the
    database. Passing an empty string retrieves those procedures without a schema. Passing
    `null` incidates the schema name isn't used to narrow the search.
@param functionNamePattern The function pattern, which match the function name as it is stored
    in the database.
@param columnNamePattern The parameter name pattern, which must match the parameter or column
    name as it is stored in the database.
@return A result set containing the descriptions of system and user function parameters
    available in the given catalog. Each row contains one function description, ordered
    according to `FUNCTION_CAT`, `FUNCTION_SCHEM`, `FUNCTION_NAME`, and
    `SPECIFIC_ NAME`.*/getFunctionColumns(catalog:string,schemaPattern:string,functionNamePattern:string,columnNamePattern:string):Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getFunctions(String, String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getFunctions(java.lang.String,%20java.lang.String,%20java.lang.String)).
@param catalog The catalog name to filter the search by, as it appears in the database. Passing
    an empty string retrieves those procedures without a catalog. Passing `null`
    incidates the catalog name isn't used to narrow the search.
@param schemaPattern The schema name pattern to filter the search by, as it appears in the
    database. Passing an empty string retrieves those procedures without a schema. Passing
    `null` incidates the schema name isn't used to narrow the search.
@param functionNamePattern The function pattern, which must match the function name as it is
    stored in the database.
@return A result set containing descriptions of the system and user functions available in the
    given catalog. Each row contains one function description, ordered according to `FUNCTION_CAT`, `FUNCTION_SCHEM`, `FUNCTION_NAME`, and `SPECIFIC_ NAME`.*/getFunctions(catalog:string,schemaPattern:string,functionNamePattern:string):Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getIdentifierQuoteString()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getIdentifierQuoteString()).
@return The string used to quote SQL identifiers. Defaults to a space (" ") if identifier
    quoting isn't supported.*/getIdentifierQuoteString():string;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getImportedKeys(String, String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getImportedKeys(java.lang.String,%20java.lang.String,%20java.lang.String)).
@param catalog The catalog name to filter the search by, as it appears in the database. Passing
    an empty string retrieves those procedures without a catalog. Passing `null`
    incidates the catalog name isn't used to narrow the search.
@param schema The schema name to filter the search by, as it appears in the database. Passing
    an empty string retrieves those procedures without a schema. Passing `null` incidates
    the schema name isn't used to narrow the search.
@param table The table name. It must match the table name as it is stored in the database.
@return An result set containing the column descriptions for the primary key columns referenced
    by the given table's foreign key columns (those imported by a table). One column
    description is provided in each row of the result set, and they are ordered by `PKTABLE_CAT`, `PKTABLE_SCHEM`, `PKTABLE_NAME`, and `KEY_SEQ`.*/getImportedKeys(catalog:string,schema:string,table:string):Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getIndexInfo(String, String, String, boolean, boolean)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getIndexInfo(java.lang.String,%20java.lang.String,%20java.lang.String,%20boolean,%20boolean)).
@param catalog The catalog name to filter the search by, as it appears in the database. Passing
    an empty string retrieves those procedures without a catalog. Passing `null`
    incidates the catalog name isn't used to narrow the search.
@param schema The schema name to filter the search by, as it appears in the database. Passing
    an empty string retrieves those procedures without a schema. Passing `null` incidates
    the schema name isn't used to narrow the search.
@param table The table name. It must match the table name as it is stored in the database.
@param unique If `true`, the method only return indices for unique values; otherwise it
    returns indices whether the values are unique or not.
@param approximate If `true`, the result is allowed to reflect approximate or out-of-data
    values; otherwise result accuracy is requested.
@return An result set containing the index and statistic column descriptions for the specified
    table. One column description is provided in each row of the result set, and they are
    ordered by `NON_UNIQUE`, `TYPE`, `INDEX_NAME`, and `ORDINAL_POSITION`.*/getIndexInfo(catalog:string,schema:string,table:string,unique:boolean,approximate:boolean):Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getJDBCMajorVersion()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getJDBCMajorVersion()).
@return The major JDBC version number for this driver.*/getJDBCMajorVersion():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getJDBCMinorVersion()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getJDBCMinorVersion()).
@return The minor JDBC version number for this driver.*/getJDBCMinorVersion():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getMaxBinaryLiteralLength()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxBinaryLiteralLength()).
@return The maximum number of hex characters this database allows in an inline binary literal.
    A response of 0 indicates there is no known limit.*/getMaxBinaryLiteralLength():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getMaxCatalogNameLength()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxCatalogNameLength()).
@return The maximum number of characters this database allows in a catalog name. A response of
    0 indicates there is no known limit.*/getMaxCatalogNameLength():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getMaxCharLiteralLength()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxCharLiteralLength()).
@return The maximum number of characters this database allows in a character literal. A
    response of 0 indicates there is no known limit.*/getMaxCharLiteralLength():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getMaxColumnNameLength()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnNameLength()).
@return The maximum number of characters this database allows in a column name. A response of 0
    indicates there is no known limit.*/getMaxColumnNameLength():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getMaxColumnsInGroupBy()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnsInGroupBy()).
@return The maximum number of columns this database allows in a `GROUP BY` clause. A
    response of 0 indicates there is no known limit.*/getMaxColumnsInGroupBy():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getMaxColumnsInIndex()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnsInIndex()).
@return The maximum number of columns this database allows in an index. A response of 0
    indicates there is no known limit.*/getMaxColumnsInIndex():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getMaxColumnsInOrderBy()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnsInOrderBy()).
@return The maximum number of columns this database allows in an `ORDER BY` clause. A
    response of 0 indicates there is no known limit.*/getMaxColumnsInOrderBy():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getMaxColumnsInSelect()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnsInSelect()).
@return The maximum number of columns this database allows in an `SELECT` list. A
    response of 0 indicates there is no known limit.*/getMaxColumnsInSelect():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getMaxColumnsInTable()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxColumnsInTable()).
@return The maximum number of columns this database allows in a table. A response of 0
    indicates there is no known limit.*/getMaxColumnsInTable():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getMaxConnections()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxConnections()).
@return The maximum number of concurrent connections to this database. A response of 0
    indicates there is no known limit.*/getMaxConnections():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getMaxCursorNameLength()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxCursorNameLength()).
@return The maximum number of characters that this database allows in a cursor name. A response
    of 0 indicates there is no known limit.*/getMaxCursorNameLength():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getMaxIndexLength()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxIndexLength()).
@return The maximum number of bytes this database allows for an index, including all its parts.
    A response of 0 indicates there is no known limit.*/getMaxIndexLength():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getMaxProcedureNameLength()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxProcedureNameLength()).
@return The maximum number of characters this database allows in a procedure name. A response
    of 0 indicates there is no known limit.*/getMaxProcedureNameLength():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getMaxRowSize()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxRowSize()).
@return The maximum number of bytes this database allows in a single row. A response of 0
    indicates there is no known limit.*/getMaxRowSize():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getMaxSchemaNameLength()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxSchemaNameLength()).
@return The maximum number of characters this database allows in a schema name. A response of 0
    indicates there is no known limit.*/getMaxSchemaNameLength():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getMaxStatementLength()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxStatementLength()).
@return The maximum number of characters this database allows in an SQL statement. A response
    of 0 indicates there is no known limit.*/getMaxStatementLength():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getMaxStatements()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxStatements()).
@return The maximum number of active statements to this database that can be open
    simultaneously. A response of 0 indicates there is no known limit.*/getMaxStatements():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getMaxTableNameLength()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxTableNameLength()).
@return The maximum number of characters this database allows in a table name. A response of 0
    indicates there is no known limit.*/getMaxTableNameLength():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getMaxTablesInSelect()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxTablesInSelect()).
@return The maximum number of tables this database allows in a `SELECT` statement. A
    response of 0 indicates there is no known limit.*/getMaxTablesInSelect():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getMaxUserNameLength()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getMaxUserNameLength()).
@return The maximum number of characters this database allows in a username. A response of 0
    indicates there is no known limit.*/getMaxUserNameLength():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getNumericFunctions()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getNumericFunctions()).
@return The comma-separated list of math functions available with this database. These are the
    Open/Open CLI math function names used in the JDBC function escape clause.*/getNumericFunctions():string;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getPrimaryKeys(String, String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getPrimaryKeys(java.lang.String,%20java.lang.String,%20java.lang.String)).
@param catalog The catalog name to filter the search by, as it appears in the database. Passing
    an empty string retrieves those procedures without a catalog. Passing `null`
    incidates the catalog name isn't used to narrow the search.
@param schema The schema name to filter the search by, as it appears in the database. Passing
    an empty string retrieves those procedures without a schema. Passing `null` incidates
    the schema name isn't used to narrow the search.
@param table The table name. It must match the table name as it is stored in the database.
@return An result set containing the column descriptions for the primary key columns, one per
    row, ordered by `COLUMN_NAME`.*/getPrimaryKeys(catalog:string,schema:string,table:string):Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getProcedureColumns(String, String, String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getProcedureColumns(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String)).
@param catalog The catalog name to filter the search by, as it appears in the database. Passing
    an empty string retrieves those procedures without a catalog. Passing `null`
    incidates the catalog name isn't used to narrow the search.
@param schemaPattern The schema name pattern to filter the search by, as it appears in the
    database. Passing an empty string retrieves those procedures without a schema. Passing
    `null` incidates the schema name isn't used to narrow the search.
@param procedureNamePattern The procedure name pattern to filter the search by. It must match
    the procedure name as it is stored in the database.
@param columnNamePattern The column name pattern to filter the search by. It must match the
    column name as it is stored in the database.
@return A result set containing the procedure and column descriptions, one per row.*/getProcedureColumns(catalog:string,schemaPattern:string,procedureNamePattern:string,columnNamePattern:string):Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getProcedureTerm()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getProcedureTerm()).
@return The database vendor's preferred term for 'procedure'.*/getProcedureTerm():string;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getProcedures(String, String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getProcedures(java.lang.String,%20java.lang.String,%20java.lang.String)).
@param catalog The catalog name to filter the search by, as it appears in the database. Passing
    an empty string retrieves those procedures without a catalog. Passing `null`
    incidates the catalog name isn't used to narrow the search.
@param schemaPattern The schema name pattern to filter the search by, as it appears in the
    database. Passing an empty string retrieves those procedures without a schema. Passing
    `null` incidates the schema name isn't used to narrow the search.
@param procedureNamePattern The procedure name pattern to filter the search by. It must match
    the procedure name as it is stored in the database.
@return A result set containing the procedure descriptions, one per row.*/getProcedures(catalog:string,schemaPattern:string,procedureNamePattern:string):Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getResultSetHoldability()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getResultSetHoldability()).
@return The database default holdability; one of `Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT` or `Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT`.*/getResultSetHoldability():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getRowIdLifetime()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getRowIdLifetime()).
@return The status indicatig the lifetime of a `ROWID`, which is one of `Jdbc.RowIdLifetime.ROWID_UNSUPPORTED`, `Jdbc.RowIdLifetime.ROWID_VALID_OTHER`, `Jdbc.RowIdLifetime.ROWID_VALID_SESSION`, `Jdbc.RowIdLifetime.ROWID_VALID_TRANSACTION`, or `Jdbc.RowIdLifetime.ROWID_VALID_FOREVER`.*/getRowIdLifetime():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getSQLKeywords()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSQLKeywords()).
@return The comma-separated list of all this database's SQL keywords that aren't also SQL:2003
    keywords.*/getSQLKeywords():string;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getSQLStateType()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSQLStateType()).
@return The type of `SQLSTATE`, which is either `sqlStateXOpen` or `sqlStateSQL`.*/getSQLStateType():Integer;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getSchemaTerm()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSchemaTerm()).
@return The database vendor's preferred term for 'schema'.*/getSchemaTerm():string;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getSchemas()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSchemas()).
@return A result set containing the schema descriptions, one per row.*/getSchemas():Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getSchemas()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSchemas()).
@param catalog The catalog name to filter the search by, as it appears in the database. Passing
    an empty string retrieves those procedures without a catalog. Passing `null`
    incidates the catalog name isn't used to narrow the search.
@param schemaPattern The schema name pattern to filter the search by, as it appears in the
    database. Passing an empty string retrieves those procedures without a schema. Passing
    `null` incidates the schema name isn't used to narrow the search.
@return A result set containing scheme descriptions available in this database, ordered by
    `TABLE_CATALOG` and `TABLE_SCHEM`.*/getSchemas(catalog:string,schemaPattern:string):Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getSearchStringEscape()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSearchStringEscape()).
@return The string that is used to escape wildcard characters such as '_' or '%'.*/getSearchStringEscape():string;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getStringFunctions()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getStringFunctions()).
@return The comma-separated list of string functions available with this database. These are
    the Open Group CLI string function names used in the JDBC function escape clause.*/getStringFunctions():string;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getSuperTables(String, String,String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSuperTables(java.lang.String,%20java.lang.String,%20java.lang.String)).
@param catalog The catalog name as it appears in the database. Passing an empty string
    retrieves those procedures without a catalog. Passing `null` incidates the catalog
    name isn't used in the selection criteria.
@param schemaPattern The schema name pattern to filter the search by, as it appears in the
    database. Passing an empty string retrieves those procedures without a schema.
@param tableNamePattern The table name pattern; may be a fully qualified name.
@return A result set containing descriptions of the table hierarchies defined in a particular
    schema in this database. Each row provides information about a specific table type. Tables
    without supers aren't listed.*/getSuperTables(catalog:string,schemaPattern:string,tableNamePattern:string):Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getSuperTypes(String, String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSuperTypes(java.lang.String,%20java.lang.String,%20java.lang.String)).
@param catalog The catalog name as it appears in the database. Passing an empty string
    retrieves those procedures without a catalog. Passing `null` incidates the catalog
    name isn't used in the selection criteria.
@param schemaPattern The schema name pattern to filter the search by, as it appears in the
    database. Passing an empty string retrieves those procedures without a schema.
@param typeNamePattern The user-defined type name pattern; may be a fully qualified name.
@return A result set containing descriptions of the user-defined type hierarchies defined in a
    particular schema in this database. Each row provides information about a specific
    user-defined type. Types without supers aren't listed.*/getSuperTypes(catalog:string,schemaPattern:string,typeNamePattern:string):Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getSystemFunctions()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getSystemFunctions()).
@return The comma-separated list of system functions available with this database. These are
    the Open Group CLI system function names used in the JDBC function escape clause.*/getSystemFunctions():string;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getTablePrivileges(String, String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getTablePrivileges(java.lang.String,%20java.lang.String,%20java.lang.String)).
@param catalog The catalog name to filter the search by, as it appears in the database. Passing
    an empty string retrieves those procedures without a catalog. Passing `null`
    incidates the catalog name isn't used to narrow the search.
@param schemaPattern The schema name pattern to filter the search by, as it appears in the
    database. Passing an empty string retrieves those procedures without a schema. Passing
    `null` incidates the schema name isn't used to narrow the search.
@param tableNamePattern The table name pattern to filter the search by. It must match the table
    name as it is stored in the database.
@return A result set containing the table privilege descriptions, one per row, ordered by
    `TABLE_CAT`, `TABLE_SCHEM`, `TABLE_NAME`, and `PRIVILEGE`.*/getTablePrivileges(catalog:string,schemaPattern:string,tableNamePattern:string):Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getTableTypes()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getTableTypes()).
@return A result set containing the table types, one per row.*/getTableTypes():Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getTables(String, String, String, String[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getTables(java.lang.String,%20java.lang.String,%20java.lang.String,%20java.lang.String[])).
@param catalog The catalog name to filter the search by, as it appears in the database. Passing
    an empty string retrieves those procedures without a catalog. Passing `null`
    incidates the catalog name isn't used to narrow the search.
@param schemaPattern The schema name pattern to filter the search by, as it appears in the
    database. Passing an empty string retrieves those procedures without a schema. Passing
    `null` incidates the schema name isn't used to narrow the search.
@param tableNamePattern The table name pattern to filter the search by. It must match the table
    name as it is stored in the database.
@param types A list of type types to return, each of which must be on the list that [`getTableTypes()`](https://developers.google.com/apps-script/reference/jdbc/jdbc-database-meta-data.html#getTableTypes()) returns. Passing `null` indictates that all table types are
    returned.
@return A result set containing the table descriptions, one per row, ordered according to
    `TABLE_TYPE`, `TABLE_CAT`, `TABLE_SCHEM`, and `TABLE_NAME`.*/getTables(catalog:string,schemaPattern:string,tableNamePattern:string,types:string[]):Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getTimeDateFunctions()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getTimeDateFunctions()).
@return The comma-separated list of time and date functions available with this database.*/getTimeDateFunctions():string;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getTypeInfo()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getTypeInfo()).
@return An result set containing the descriptions of data types supported by this database. One
    SQL type description is provided in each row of the result set, and they are ordered by
    `DATA_TYPE` and then by how closely the data type maps to the corresponding JDBC SQL
    type.*/getTypeInfo():Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getUDTs(String, String, String, int[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getUDTs(java.lang.String,%20java.lang.String,%20java.lang.String,%20int[])).
@param catalog The catalog name to filter the search by, as it appears in the database. Passing
    an empty string retrieves those procedures without a catalog. Passing `null`
    incidates the catalog name isn't used to narrow the search.
@param schemaPattern The schema name pattern to filter the search by, as it appears in the
    database. Passing an empty string retrieves those procedures without a schema. Passing
    `null` incidates the schema name isn't used to narrow the search.
@param typeNamePattern The type name pattern to filter the search by; may be a fully qualified
    name.
@param types A list of user-defined types (`JAVA_OBJECT`, `STRUCT`, or `DISTINCT`) to include. Passing `null` indictates that all types are returned.
@return A result set containing the user-defined type (UDT) descriptions, one per row, ordered
    according to `DATA_TYPE`, `TYPE_CAT`, `TYPE_SCHEM`, and `TYPE_NAME`.*/getUDTs(catalog:string,schemaPattern:string,typeNamePattern:string,types:Integer[]):Jdbc.JdbcResultSet;
/**For documentation of this method, see [

```
java.sql.DatabaseMetaData#getURL()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getURL()).
@return The URL for this database management system, or `null` if isn't generated.*/getURL():string;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getUserName()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getUserName()).
@return The username as known to this database.*/getUserName():string;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#getVersionColumns(String, String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#getVersionColumns(java.lang.String,%20java.lang.String,%20java.lang.String)).
@param catalog The catalog name to filter the search by, as it appears in the database. Passing
    an empty string retrieves those procedures without a catalog. Passing `null`
    incidates the catalog name isn't used to narrow the search.
@param schema The schema name to filter the search by, as it appears in the database. Passing
    an empty string retrieves those procedures without a schema. Passing `null` incidates
    the schema name isn't used to narrow the search.
@param table The table name. It must match the table name as it is stored in the database.
@return An unordered result set containing the column descriptions that are updated when any
    value in a row is updated (one column description per row in the result set).*/getVersionColumns(catalog:string,schema:string,table:string):Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#insertsAreDetected(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#insertsAreDetected(int)).
@param type The result set type, which is `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`.
@return `true` if for the specified result set type a visible row insert is detected by
    calls to [`JdbcResultSet.rowInserted()`](https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set.html#rowInserted()); `false` otherwise.*/insertsAreDetected(type:Integer):boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#isCatalogAtStart()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#isCatalogAtStart()).
@return `true` if a catalog appears at the start of a fully-qualified table name; `false` otherwise.*/isCatalogAtStart():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#isReadOnly()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#isReadOnly()).
@return `true` if the database is read-only; `false` otherwise.*/isReadOnly():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#locatorsUpdateCopy()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#locatorsUpdateCopy()).
@return `true` if updates made to a Large Object (LOB) are made to a copy of th LOB;
    `false` if updates are made directly to the LOB.*/locatorsUpdateCopy():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#nullPlusNonNullIsNull()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#nullPlusNonNullIsNull()).
@return `true` if concatenations of `NULL` and non-`NULL` values result in a
    `NULL`; `false` otherwise.*/nullPlusNonNullIsNull():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#nullsAreSortedAtEnd()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#nullsAreSortedAtEnd()).
@return `true` if `NULL` values are sorted to the end regardless of sort order
    (ascending or descending). Returns `false` otherwise.*/nullsAreSortedAtEnd():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#nullsAreSortedAtStart()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#nullsAreSortedAtStart()).
@return `true` if `NULL` values are sorted to the start regardless of sort order
    (ascending or descending). Returns `false` otherwise.*/nullsAreSortedAtStart():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#nullsAreSortedHigh()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#nullsAreSortedHigh()).
@return `true` if the `NULL` values are sorted high, meaning they are considered to
    have a value higher than others in the domain when sorting. Returns `false`
    otherwise.*/nullsAreSortedHigh():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#nullsAreSortedLow()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#nullsAreSortedLow()).
@return `true` if the `NULL` values are sorted low, meaning they are considered to
    have a value lower than others in the domain when sorting. Returns `false` otherwise.*/nullsAreSortedLow():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#othersDeletesAreVisible(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#othersDeletesAreVisible(int)).
@param type The result set type, which is `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`.
@return `true` if for the given result set type the deletes made by others are visible;
    `false` otherwise.*/othersDeletesAreVisible(type:Integer):boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#othersInsertsAreVisible(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#othersInsertsAreVisible(int)).
@param type The result set type, which is `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`.
@return `true` if for the given result set type the inserts made by others are visible;
    `false` otherwise.*/othersInsertsAreVisible(type:Integer):boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#othersUpdatesAreVisible(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#othersUpdatesAreVisible(int)).
@param type The result set type, which is `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`.
@return `true` if for the given result set type the updates made by others are visible;
    `false` otherwise.*/othersUpdatesAreVisible(type:Integer):boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#ownDeletesAreVisible(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#ownDeletesAreVisible(int)).
@param type The result set type, which is `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`.
@return `true` if for the given result set type the set's own deletes are visible; `false` otherwise.*/ownDeletesAreVisible(type:Integer):boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#ownInsertsAreVisible(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#ownInsertsAreVisible(int)).
@param type The result set type, which is `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`.
@return `true` if for the given result set type the set's own inserts are visible; `false` otherwise.*/ownInsertsAreVisible(type:Integer):boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#ownUpdatesAreVisible(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#ownUpdatesAreVisible(int)).
@param type The result set type, which is `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`.
@return `true` if for the given result set type the set's own updates are visible; `false` otherwise.*/ownUpdatesAreVisible(type:Integer):boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#storesLowerCaseIdentifiers()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesLowerCaseIdentifiers()).
@return `true` if the database treats mixed case unquoted SQL identifiers as
    case-insensitive and stores them in lowercase; `false` otherwise.*/storesLowerCaseIdentifiers():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#storesLowerCaseQuotedIdentifiers()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesLowerCaseQuotedIdentifiers()).
@return `true` if the database treats mixed case quoted SQL identifiers as
    case-insensitive and stores them in lowercase; `false` otherwise.*/storesLowerCaseQuotedIdentifiers():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#storesMixedCaseIdentifiers()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesMixedCaseIdentifiers()).
@return `true` if the database treats mixed case unquoted SQL identifiers as
    case-insensitive and stores them in mixed case; `false` otherwise.*/storesMixedCaseIdentifiers():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#storesMixedCaseQuotedIdentifiers()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesMixedCaseQuotedIdentifiers()).
@return `true` if the database treats mixed case quoted SQL identifiers as
    case-insensitive and stores them in mixed case; `false` otherwise.*/storesMixedCaseQuotedIdentifiers():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#storesUpperCaseIdentifiers()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesUpperCaseIdentifiers()).
@return `true` if the database treats mixed case unquoted SQL identifiers as
    case-insensitive and stores them in uppercase; `false` otherwise.*/storesUpperCaseIdentifiers():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#storesUpperCaseQuotedIdentifiers()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#storesUpperCaseQuotedIdentifiers()).
@return `true` if the database treats mixed case quoted SQL identifiers as
    case-insensitive and stores them in uppercase; `false` otherwise.*/storesUpperCaseQuotedIdentifiers():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsANSI92EntryLevelSQL()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsANSI92EntryLevelSQL()).
@return `true` if this database supports the ANSI92 entry level SQL grammar; `false` otherwise.*/supportsANSI92EntryLevelSQL():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsANSI92FullSQL()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsANSI92FullSQL()).
@return `true` if this database supports the ANSI92 full level SQL grammar; `false`
    otherwise.*/supportsANSI92FullSQL():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsANSI92IntermediateSQL()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsANSI92IntermediateSQL()).
@return `true` if this database supports the ANSI92 intermediate level SQL grammar;
    `false` otherwise.*/supportsANSI92IntermediateSQL():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsAlterTableWithAddColumn()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsAlterTableWithAddColumn()).
@return `true` if the database supports `ALTER TABLE` with add column; `false` otherwise.*/supportsAlterTableWithAddColumn():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsAlterTableWithDropColumn()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsAlterTableWithDropColumn()).
@return `true` if the database supports `ALTER TABLE` with drop column; `false` otherwise.*/supportsAlterTableWithDropColumn():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsBatchUpdates()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsBatchUpdates()).
@return `true` if the database supports batch updates; `false` otherwise.*/supportsBatchUpdates():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsCatalogsInDataManipulation()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCatalogsInDataManipulation()).
@return `true` if a data manipulation statement can include a catalog name; `false`
    otherwise.*/supportsCatalogsInDataManipulation():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsCatalogsInIndexDefinitions()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCatalogsInIndexDefinitions()).
@return `true` if an index definition statement can include a catalog name; `false`
    otherwise.*/supportsCatalogsInIndexDefinitions():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsCatalogsInPrivilegeDefinitions()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCatalogsInPrivilegeDefinitions()).
@return `true` if a privilege definition statement can include a catalog name; `false` otherwise.*/supportsCatalogsInPrivilegeDefinitions():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsCatalogsInProcedureCalls()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCatalogsInProcedureCalls()).
@return `true` if a procedure call statement can include a catalog name; `false`
    otherwise.*/supportsCatalogsInProcedureCalls():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsCatalogsInTableDefinitions()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCatalogsInTableDefinitions()).
@return `true` if a table definition statement can include a catalog name; `false`
    otherwise.*/supportsCatalogsInTableDefinitions():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsColumnAliasing()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsColumnAliasing()).
@return `true` if the database supports column aliasing; `false` otherwise.*/supportsColumnAliasing():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsConvert()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsConvert()).
@return `true` if this database supports the JDBC scalar function `CONVERT` for the
    conversion of one [JDBC type](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) to
    another; `false` otherwise.*/supportsConvert():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsConvert(int, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsConvert(int,%20int)).
@param fromType The [
    type](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) to convert from.
@param toType The [
    type](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) to convert to.
@return `true` if this database supports the JDBC scalar function `CONVERT` for the
    conversion of the specified JDBC types; `false` otherwise.*/supportsConvert(fromType:Integer,toType:Integer):boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsCoreSQLGrammar()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCoreSQLGrammar()).
@return `true` if this database supports the ODBC Core SQL grammar; `false`
    otherwise.*/supportsCoreSQLGrammar():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsCorrelatedSubqueries()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsCorrelatedSubqueries()).
@return `true` if this database supports correlated subqueries; `false` otherwise.*/supportsCorrelatedSubqueries():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsDataDefinitionAndDataManipulationTransactions()`
](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsDataDefinitionAndDataManipulationTransactions()).
@return `true` if this database supports both data definition and data manipulation
    statements within a transaction; `false` otherwise.*/supportsDataDefinitionAndDataManipulationTransactions():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsDataManipulationTransactionsOnly()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsDataManipulationTransactionsOnly()).
@return `true` if this database supports data manipulation statements within a
    transaction; `false` otherwise.*/supportsDataManipulationTransactionsOnly():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsDifferentTableCorrelationNames()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsDifferentTableCorrelationNames()).
@return `true` if table correlation names are supported and are restricted to be
    different frm the names of the tables in the database; `false` otherwise.*/supportsDifferentTableCorrelationNames():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsExpressionsInOrderBy()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsExpressionsInOrderBy()).
@return `true` if this database supports expressions in `ORDER BY` lists; `false` otherwise.*/supportsExpressionsInOrderBy():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsExtendedSQLGrammar()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsExtendedSQLGrammar()).
@return `true` if this database supports the ODBC Extended SQL grammar; `false`
    otherwise.*/supportsExtendedSQLGrammar():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsFullOuterJoins()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsFullOuterJoins()).
@return `true` if this database supports full nested outer joins; `false`
    otherwise.*/supportsFullOuterJoins():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsGetGeneratedKeys()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsGetGeneratedKeys()).
@return `true` if auto-generated keys can be retrieved after a statement is executed;
    `false` otherwise.*/supportsGetGeneratedKeys():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsGroupBy()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsGroupBy()).
@return `true` if this database supports some form of `GROUP BY` clause; `false` otherwise.*/supportsGroupBy():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsGroupByBeyondSelect()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsGroupByBeyondSelect()).
@return `true` if this database supports using columns that aren't in the `SELECT`
    statement in a `GROUP BY` clause, provided that all the columns in the `SELECT`
    statement are included in the `GROUP BY` clause. Returns `false` otherwise.*/supportsGroupByBeyondSelect():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsGroupByUnrelated()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsGroupByUnrelated()).
@return `true` if this database supports using a column that isn't in the `SELECT`
    statement in a `GROUP BY` clause; `false` otherwise.*/supportsGroupByUnrelated():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsIntegrityEnhancementFacility()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsIntegrityEnhancementFacility()).
@return `true` if this database supports the SQL Integrity Enhancement Facility; `false` otherwise.*/supportsIntegrityEnhancementFacility():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsLikeEscapeClause()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsLikeEscapeClause()).
@return `true` if this database supports specifying a `LIKE` escape clause; `false` otherwise.*/supportsLikeEscapeClause():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsLimitedOuterJoins()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsLimitedOuterJoins()).
@return `true` if this database provides limited support for outer joins; `false`
    otherwise.*/supportsLimitedOuterJoins():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsMinimumSQLGrammar()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMinimumSQLGrammar()).
@return `true` if this database supports the ODBC Minimum SQL grammar; `false`
    otherwise.*/supportsMinimumSQLGrammar():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsMixedCaseIdentifiers()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMixedCaseIdentifiers()).
@return `true` if the database treats mixed case unquoted SQL identifiers as
    case-sensitive and as a result stores them in mixed case; `false` otherwise.*/supportsMixedCaseIdentifiers():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsMixedCaseQuotedIdentifiers()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMixedCaseQuotedIdentifiers()).
@return `true` if the database treats mixed case quoted SQL identifiers as case-sensitive
    and as a result stores them in mixed case; `false` otherwise.*/supportsMixedCaseQuotedIdentifiers():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsMultipleOpenResults()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMultipleOpenResults()).
@return `true` if a callable statement can return multiple result sets simultenously;
    `false` otherwise.*/supportsMultipleOpenResults():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsMultipleResultSets()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMultipleResultSets()).
@return `true` if this database supports getting multiple result sets from a single
    execution call; `false` otherwise.*/supportsMultipleResultSets():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsMultipleTransactions()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsMultipleTransactions()).
@return `true` if this database supports having multiple transactions on different
    connections open at once; `false` otherwise.*/supportsMultipleTransactions():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsNamedParameters()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsNamedParameters()).
@return `true` if the database supports named parameters to callable statements; `false` otherwise.*/supportsNamedParameters():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsNonNullableColumns()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsNonNullableColumns()).
@return `true` if columns in this database may be defined as non-nullable; `false`
    otherwise.*/supportsNonNullableColumns():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsOpenCursorsAcrossCommit()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOpenCursorsAcrossCommit()).
@return `true` if this database supports keeping cursors always open across commits;
    `false` otherwise.*/supportsOpenCursorsAcrossCommit():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsOpenCursorsAcrossRollback()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOpenCursorsAcrossRollback()).
@return `true` if this database supports keeping cursors always open across rollbacks;
    `false` otherwise.*/supportsOpenCursorsAcrossRollback():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsOpenStatementsAcrossCommit()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOpenStatementsAcrossCommit()).
@return `true` if this database supports keeping statements always open across commits;
    `false` otherwise.*/supportsOpenStatementsAcrossCommit():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsOpenStatementsAcrossRollback()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOpenStatementsAcrossRollback()).
@return `true` if this database supports keeping statements always open across rollbacks;
    `false` otherwise.*/supportsOpenStatementsAcrossRollback():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsOrderByUnrelated()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOrderByUnrelated()).
@return `true` if this database supports using a column that isn't in the `SELECT`
    statement in an `ORDER BY` clause; `false` otherwise.*/supportsOrderByUnrelated():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsOuterJoins()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsOuterJoins()).
@return `true` if this database supports some form of outer join; `false`
    otherwise.*/supportsOuterJoins():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsPositionedDelete()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsPositionedDelete()).
@return `true` if this database supports positioned `DELETE` statements; `false` otherwise.*/supportsPositionedDelete():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsPositionedUpdate()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsPositionedUpdate()).
@return `true` if this database supports positioned `UPDATE` statements; `false` otherwise.*/supportsPositionedUpdate():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsResultSetConcurrency(int, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsResultSetConcurrency(int,%20int)).
@param type The result set type, which is `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`.
@param concurrency The concurrency type, which is either `Jdbc.ResultSet.CONCUR_READ_ONLY` or `Jdbc.ResultSet.CONCUR_UPDATABLE`.
@return `true` if this database supports the specified result set and concurrency type
    combination; `false` otherwise.*/supportsResultSetConcurrency(type:Integer,concurrency:Integer):boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsResultSetHoldability(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsResultSetHoldability(int)).
@param holdability A holdability constant to check; one of `Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT` or `Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT`.
@return `true` if the database the specified holdability; `false` otherwise.*/supportsResultSetHoldability(holdability:Integer):boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsResultSetType(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsResultSetType(int)).
@param type The result set type, which is `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`.
@return `true` if this database supports the specified result set type; `false`
    otherwise.*/supportsResultSetType(type:Integer):boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsSavepoints()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSavepoints()).
@return `true` if the database supports savepoints; `false` otherwise.*/supportsSavepoints():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsSchemasInDataManipulation()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSchemasInDataManipulation()).
@return `true` if a data manipulation statement can include a schema name; `false`
    otherwise.*/supportsSchemasInDataManipulation():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsSchemasInIndexDefinitions()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSchemasInIndexDefinitions()).
@return `true` if an index definition statement can include a schema name; `false`
    otherwise.*/supportsSchemasInIndexDefinitions():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsSchemasInPrivilegeDefinitions()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSchemasInPrivilegeDefinitions()).
@return `true` if an privilege definition statement can include a schema name; `false` otherwise.*/supportsSchemasInPrivilegeDefinitions():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsSchemasInProcedureCalls()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSchemasInProcedureCalls()).
@return `true` if a procedure call statement can include a schema name; `false`
    otherwise.*/supportsSchemasInProcedureCalls():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsSchemasInTableDefinitions()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSchemasInTableDefinitions()).
@return `true` if a table definition statement can include a schema name; `false`
    otherwise.*/supportsSchemasInTableDefinitions():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsSelectForUpdate()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSelectForUpdate()).
@return `true` if this database supports `SELECT FOR UPDATE` statements; `false` otherwise.*/supportsSelectForUpdate():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsStatementPooling()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsStatementPooling()).
@return `true` if the database supports statement pooling; `false` otherwise.*/supportsStatementPooling():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsStoredFunctionsUsingCallSyntax()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsStoredFunctionsUsingCallSyntax()).
@return `true` if the database supports invoking user-defined or vendor functions using
    the stored procedure escape syntax; `false` otherwise.*/supportsStoredFunctionsUsingCallSyntax():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsStoredProcedures()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsStoredProcedures()).
@return `true` if this database supports stored procedure calls that used the stored
    procedure escape syntax; `false` otherwise.*/supportsStoredProcedures():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsSubqueriesInComparisons()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSubqueriesInComparisons()).
@return `true` if this database supports subqueries in comparison expressions; `false` otherwise.*/supportsSubqueriesInComparisons():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsSubqueriesInExists()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSubqueriesInExists()).
@return `true` if this database supports subqueries in `EXISTS` expressions; `false` otherwise.*/supportsSubqueriesInExists():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsSubqueriesInIns()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSubqueriesInIns()).
@return `true` if this database supports subqueries in `IN` expressions; `false` otherwise.*/supportsSubqueriesInIns():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsSubqueriesInQuantifieds()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsSubqueriesInQuantifieds()).
@return `true` if this database supports subqueries in quantified expressions; `false` otherwise.*/supportsSubqueriesInQuantifieds():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsTableCorrelationNames()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsTableCorrelationNames()).
@return `true` if this database supports table corelation names; `false` otherwise.*/supportsTableCorrelationNames():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsTransactionIsolationLevel(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsTransactionIsolationLevel(int)).
@param level The transaction isolation level to determine the support of. This must be one of
    `Jdbc.Connection.TRANSACTION_READ_UNCOMMITTED`, `Jdbc.Connection.TRANSACTION_READ_COMMITTED`, `Jdbc.Connection.TRANSACTION_REPEATABLE_READ`, `Jdbc.Connection.TRANSACTION_SERIALIZABLE`, or `Jdbc.Connection.TRANSACTION_NONE`.
@return `true` if this database supports the given transaction isolation level; `false` otherwise.*/supportsTransactionIsolationLevel(level:Integer):boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsTransactions()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsTransactions()).
@return `true` if this database supports transactions; `false` otherwise.*/supportsTransactions():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsUnion()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsUnion()).
@return `true` if this database supports SQL `UNION`; `false` otherwise.*/supportsUnion():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#supportsUnionAll()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#supportsUnionAll()).
@return `true` if this database supports SQL `UNION ALL`; `false` otherwise.*/supportsUnionAll():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#updatesAreDetected(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#updatesAreDetected(int)).
@param type The result set type, which is `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`.
@return `true` if for the specified result set type a visible row update is detected by
    calls to [`JdbcResultSet.rowUpdated()`](https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set.html#rowUpdated()); `false` otherwise.*/updatesAreDetected(type:Integer):boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#usesLocalFilePerTable()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#usesLocalFilePerTable()).
@return `true` if the database stores each table in a separate local file; `false`
    otherwise.*/usesLocalFilePerTable():boolean;
/**For documentation of this method, see [
`java.sql.DatabaseMetaData#usesLocalFiles()`](https://docs.oracle.com/javase/6/docs/api/java/sql/DatabaseMetaData.html#usesLocalFiles()).
@return `true` if the database stores tables in a local file; `false` otherwise.*/usesLocalFiles():boolean;}interface JdbcConnection{
/**For documentation of this method, see [
`java.sql.Connection#clearWarnings()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#clearWarnings()).*/clearWarnings():void;
/**Release this connection's database and all associated resources.

```
var conn = Jdbc.getConnection("jdbc:mysql://<host>:<port>/<instance>", "user", "password");
conn.close();
```*/close():void;
/**Makes all pending changes permanent, releases database locks held by this [`JdbcConnection`](https://developers.google.com/apps-script/reference/jdbc/jdbc-connection.html).

```
var conn = Jdbc.getConnection("jdbc:mysql://<host>:<port>/<instance>", "user", "password");
conn.setAutoCommit(false);
var stmt = conn.prepareStatement("insert into person (lname,fname) values (?,?)");
var start = new Date();
for (var i = 0; i < 5000; i++) {
  // Objects are accessed using 1-based indexing
  stmt.setObject(1, 'firstName' + i);
  stmt.setObject(2, 'lastName' + i);
  stmt.addBatch();
}
var res = stmt.executeBatch();
conn.commit(); // When this returns, this is when changes are actually committed
conn.close();
```*/commit():void;
/**For documentation of this method, see [
`java.sql.Connection#createArrayOf(String, Object[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createArrayOf(java.lang.String,%20java.lang.Object[])).
@param typeName The database-specific SQL name of the array elemnents' type. Options include
    built-in types, user-defined types, or standard SQL types supported by the database.
@param elements The elements to populate in the returned object.
@return An array whose elements map to the specified SQL type.*/createArrayOf(typeName:string,elements:Object[]):Jdbc.JdbcArray;
/**Constructs a [`JdbcBlob`](https://developers.google.com/apps-script/reference/jdbc/jdbc-blob.html) instance. See also [

```
java.sql.Connection#createBlob()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createBlob()).

The object returned initially contains no data. You can use the `setBytes` methods of
[`JdbcBlob`](https://developers.google.com/apps-script/reference/jdbc/jdbc-blob.html) to set the data it should contain. The blob used here is not the same as the
blob created with [`Utilities.newBlob(data)`](https://developers.google.com/apps-script/reference/jdbc/../utilities/utilities.html#newBlob(Byte)). To convert
between the two formats, use the defined `getBytes()` and `setBytes()` methods.
Alternatively, both [`JdbcBlob`](https://developers.google.com/apps-script/reference/jdbc/jdbc-blob.html) and [`JdbcClob`](https://developers.google.com/apps-script/reference/jdbc/jdbc-clob.html) provide a `getAppsScriptBlob()`
convenience method for converting to a format that can be used by Apps Script.
@return An empty blob object.*/createBlob():Jdbc.JdbcBlob;
/**For documentation of this method, see [

```
java.sql.Connection#createClob()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createClob()).
@return An empty clob object.*/createClob():Jdbc.JdbcClob;
/**For documentation of this method, see [

```
java.sql.Connection#createNClob()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createNClob()).
@return An empty nclob object.*/createNClob():Jdbc.JdbcClob;
/**For documentation of this method, see [

```
java.sql.Connection#createSQLXML()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createSQLXML()).
@return An empty SQLXML object.*/createSQLXML():Jdbc.JdbcSQLXML;
/**Creates a [`JdbcStatement`](https://developers.google.com/apps-script/reference/jdbc/jdbc-statement.html) object for sending SQL statements to the database. See also [
`java.sql.Connection#createStatement()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createStatement()).

```
// This sample code assumes authentication is off
var conn = Jdbc.getConnection("jdbc:mysql://<host>:3306/<instance>")
var stmt = conn.createStatement();

stmt.setMaxRows(100);
var rs = stmt.execute("select * from person");

while(rs.next()) {
  // Do something
}

rs.close();
stmt.close();
conn.close();
```
@return A statement instance to execute queries with.*/createStatement():Jdbc.JdbcStatement;
/**Creates a [`JdbcStatement`](https://developers.google.com/apps-script/reference/jdbc/jdbc-statement.html) object for sending SQL statements to the database. See also [
`java.sql.Connection#createStatement(int, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createStatement(int,%20int)).

This version allows the result set type and concurrency to be overridden.

```
// This sample code assumes authentication is off
// For more information about this method, see documentation here:
//  http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createStatement(int, int)
var conn = Jdbc.getConnection("jdbc:mysql://<host>:3306/<instance>")
var stmt = conn.createStatement(Jdbc.ResultSet.TYPE_FORWARD_ONLY,
                                Jdbc.ResultSet.CONCUR_READ_ONLY);

stmt.setMaxRows(100);
var rs = stmt.execute("select * from person");

while(rs.next()) {
  // Do something
}

rs.close();
stmt.close();
conn.close();
```
@param resultSetType A result set type; one of `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE`.
@param resultSetConcurrency A concurrency type; either `Jdbc.ResultSet.CONCUR_READ_ONLY`
    or `Jdbc.ResultSet.CONCUR_UPDATABLE`.
@return A statement instance to execute queries with.*/createStatement(resultSetType:Integer,resultSetConcurrency:Integer):Jdbc.JdbcStatement;
/**Creates a [`JdbcStatement`](https://developers.google.com/apps-script/reference/jdbc/jdbc-statement.html) object for sending SQL statements to the database. See also [
`java.sql.Connection#createStatement(int, int, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createStatement(int,%20int,%20int)).

This version allows the result set type, concurrency and holdability to be overridden.

```
// This sample code assumes authentication is off
// For more information about this method, see documentation here:
//  http://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createStatement(int, int)
var conn = Jdbc.getConnection("jdbc:mysql://<host>:3306/<instance>")
var stmt = conn.createStatement(Jdbc.ResultSet.TYPE_FORWARD_ONLY,
                                Jdbc.ResultSet.CONCUR_READ_ONLY,
                                Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT);

stmt.setMaxRows(100);
var rs = stmt.execute("select * from person");

while(rs.next()) {
  // Do something
}

rs.close();
stmt.close();
conn.close();
```
@param resultSetType A result set type; one of `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE`.
@param resultSetConcurrency A concurrency type; either `Jdbc.ResultSet.CONCUR_READ_ONLY`
    or `Jdbc.ResultSet.CONCUR_UPDATABLE`.
@param resultSetHoldability A holdability setting; either `Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT` or `Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT`.
@return A statement instance to execute queries with.*/createStatement(resultSetType:Integer,resultSetConcurrency:Integer,resultSetHoldability:Integer):Jdbc.JdbcStatement;
/**For documentation of this method, see [
`java.sql.Connection#createStruct(String, Object[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#createStruct(java.lang.String,%20java.lang.Object[])).
@param typeName The database-specific SQL name of the array elemnents' type. Options include
    built-in types, user-defined types, or standard SQL types supported by the database.
@param attributes The attributes that populate the returned object.
@return A structure object that maps to the given SQL type and is populated with the given
    attributes.*/createStruct(typeName:string,attributes:Object[]):Jdbc.JdbcStruct;
/**For documentation of this method, see [
`java.sql.Connection#getAutoCommit()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#getAutoCommit()).
@return `true` if the connection's auto-commit mode is enabled; `false` otherwise.*/getAutoCommit():boolean;
/**or documentation of this method, see [

```
java.sql.Connection#getCatalog()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#getCatalog()).
@return The current catalog name or `null` if no name has been set.*/getCatalog():string;
/**For documentation of this method, see [
`java.sql.Connection#getHoldability()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#getHoldability()).
@return The holdability setting of the connection; either `Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT` or `Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT`.*/getHoldability():Integer;
/**For documentation of this method, see [

```
java.sql.Connection#getMetaData()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#getMetaData()).
@return The metadata of the database this connection connects to.*/getMetaData():Jdbc.JdbcDatabaseMetaData;
/**For documentation of this method, see [
`java.sql.Connection#getTransactionIsolation()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#getTransactionIsolation()).
@return The current transaction level, which is one of: `Jdbc.Connection.TRANSACTION_READ_UNCOMMITTED`, `Jdbc.Connection.TRANSACTION_READ_COMMITTED`, `Jdbc.Connection.TRANSACTION_REPEATABLE_READ`, `Jdbc.Connection.TRANSACTION_SERIALIZABLE`, or `Jdbc.Connection.TRANSACTION_NONE`.*/getTransactionIsolation():Integer;
/**For documentation of this method, see [

```
java.sql.Connection#getWarnings()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#getWarnings()).
@return An array of warning strings.*/getWarnings():string[];
/**For documentation of this method, see [

```
java.sql.Connection#isClosed()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#isClosed()).
@return `true` if the connection is closed; `false` otherwise.*/isClosed():boolean;
/**For documentation of this method, see [

```
java.sql.Connection#isReadOnly()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#isReadOnly()).
@return `true` if the connection is read-only; `false` otherwise.*/isReadOnly():boolean;
/**For documentation of this method, see [

```
java.sql.Connection#isValid(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#isValid(int)).
@param timeout The time in seconds to wait for the validation operation to complete. A value of
    0 indicates no timeout is applied.
@return `true` if the connection is valid; `false` otherwise. Also returns `false` if the timeout period expires before the operation completes.*/isValid(timeout:Integer):boolean;
/**For documentation of this method, see [
`java.sql.Connection#nativeSQL(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#nativeSQL(java.lang.String)).
@param sql An SQL statement that may contain one more more '?' placeholders.
@return The native form of the provided statement.*/nativeSQL(sql:string):string;
/**For documentation of this method, see [
`java.sql.Connection#prepareCall(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareCall(java.lang.String)).
@param sql An SQL statement that may contain one more more '?' placeholders, typically provided
    using JDBC call escape syntax.
@return A callable statement containing the pre-compiled SQL statement.*/prepareCall(sql:string):Jdbc.JdbcCallableStatement;
/**For documentation of this method, see [
`java.sql.Connection#prepareCall(String, int, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareCall(java.lang.String,%20int,%20int)).
@param sql An SQL statement that may contain one more more '?' placeholders, typically provided
    using JDBC call escape syntax.
@param resultSetType A result set type; one of `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE`.
@param resultSetConcurrency A concurrency type; either `Jdbc.ResultSet.CONCUR_READ_ONLY`
    or `Jdbc.ResultSet.CONCUR_UPDATABLE`.
@return A callable statement containing the pre-compiled SQL statement that produces result
    sets with the provided type and concurrency.*/prepareCall(sql:string,resultSetType:Integer,resultSetConcurrency:Integer):Jdbc.JdbcCallableStatement;
/**For documentation of this method, see [
`java.sql.Connection#prepareCall(String, int, int, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareCall(java.lang.String,%20int,%20int,%20int)).
@param sql An SQL statement that may contain one more more '?' placeholders, typically provided
    using JDBC call escape syntax.
@param resultSetType A result set type; one of `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE`.
@param resultSetConcurrency A concurrency type; either `Jdbc.ResultSet.CONCUR_READ_ONLY`
    or `Jdbc.ResultSet.CONCUR_UPDATABLE`.
@param resultSetHoldability A holdability setting; either `Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT` or `Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT`.
@return A callable statement containing the pre-compiled SQL statement that produces result
    sets with the provided type, concurrency.*/prepareCall(sql:string,resultSetType:Integer,resultSetConcurrency:Integer,resultSetHoldability:Integer):Jdbc.JdbcCallableStatement;
/**For documentation of this method, see [
`java.sql.Connection#prepareStatement(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareStatement(java.lang.String)).
@param sql An SQL statement that may contain one more more '?' IN parameter placeholders.
@return A prepared statement containing the pre-compiled SQL statement.*/prepareStatement(sql:string):Jdbc.JdbcPreparedStatement;
/**For documentation of this method, see [
`java.sql.Connection#prepareStatement(String, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareStatement(java.lang.String,%20int)).
@param sql An SQL statement that may contain one more more '?' IN parameter placeholders.
@param autoGeneratedKeys A flag that indicates whether auto-generated keys are returned; either
    `Jdbc.Statement.RETURN_GENERATED_KEYS` or `Jdbc.Statement.NO_GENERATED_KEYS`.
@return A prepared statement containing the pre-compiled SQL statement, possibly capable of
    returning auto-generated keys.*/prepareStatement(sql:string,autoGeneratedKeys:Integer):Jdbc.JdbcPreparedStatement;
/**For documentation of this method, see [
`java.sql.Connection#prepareStatement(String, int, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareStatement(java.lang.String,%20int,%20int)).
@param sql An SQL statement that may contain one more more '?' IN parameter placeholders.
@param resultSetType A result set type; one of `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE`.
@param resultSetConcurrency A concurrency type; either `Jdbc.ResultSet.CONCUR_READ_ONLY`
    or `Jdbc.ResultSet.CONCUR_UPDATABLE`.
@return A prepared statement containing the pre-compiled SQL statement that produces result
    sets with the provided type and concurrency.*/prepareStatement(sql:string,resultSetType:Integer,resultSetConcurrency:Integer):Jdbc.JdbcPreparedStatement;
/**For documentation of this method, see [
`java.sql.Connection#prepareStatement(String, int, int, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareStatement(java.lang.String,%20int,%20int,%20int)).
@param sql An SQL statement that may contain one more more '?' IN parameter placeholders.
@param resultSetType A result set type; one of `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or `Jdbc.ResultSet.TYPE_SCROLL_SENSITIVE`.
@param resultSetConcurrency A concurrency type; either `Jdbc.ResultSet.CONCUR_READ_ONLY`
    or `Jdbc.ResultSet.CONCUR_UPDATABLE`.
@param resultSetHoldability A holdability setting; either `Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT` or `Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT`.
@return A prepared statement containing the pre-compiled SQL statement that produces result
    sets with the provided type, concurrency, and holdability.*/prepareStatement(sql:string,resultSetType:Integer,resultSetConcurrency:Integer,resultSetHoldability:Integer):Jdbc.JdbcPreparedStatement;
/**For documentation of this method, see [
`java.sql.Connection#prepareStatement(String, int[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareStatement(java.lang.String,%20int[])).
@param sql An SQL statement that may contain one more more '?' IN parameter placeholders.
@param indices The column indices of columns that are returned from the inserted row or rows.
@return A prepared statement containing the pre-compiled SQL statement, capable of returning
    auto-generated keys specified by the provided column indices.*/prepareStatementByIndex(sql:string,indices:Integer[]):Jdbc.JdbcPreparedStatement;
/**For documentation of this method, see [
`java.sql.Connection#prepareStatement(String, String[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#prepareStatement(java.lang.String,%20java.lang.String[])).
@param sql An SQL statement that may contain one more more '?' IN parameter placeholders.
@param columnNames The column names that specify which columns the method should return from
    the inserted row or rows.
@return A prepared statement containing the pre-compiled SQL statement, capable of returning
    auto-generated keys specified by the provided column names.*/prepareStatementByName(sql:string,columnNames:string[]):Jdbc.JdbcPreparedStatement;
/**For documentation of this method, see [
`java.sql.Connection#releaseSavepoint(Savepoint)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#releaseSavepoint(java.sql.Savepoint)).
@param savepoint The save point to remove.*/releaseSavepoint(savepoint:Jdbc.JdbcSavepoint):void;
/**For documentation of this method, see [

```
java.sql.Connection#rollback()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#rollback()).*/rollback():void;
/**For documentation of this method, see [
`java.sql.Connection#rollback(Savepoint)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#rollback(java.sql.Savepoint)).
@param savepoint The save point to rollback to.*/rollback(savepoint:Jdbc.JdbcSavepoint):void;
/**For documentation of this method, see [
`java.sql.Connection#setAutoCommit(boolean)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#setAutoCommit(boolean)).
@param autoCommit If `true`, auto-commit mode is enabled; `false` disables.*/setAutoCommit(autoCommit:boolean):void;
/**For documentation of this method, see [
`java.sql.Connection#setCatalog(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#setCatalog(java.lang.String)).
@param catalog The name of a catalog (the subspace in the connection's database) in which to
    work.*/setCatalog(catalog:string):void;
/**For documentation of this method, see [
`java.sql.Connection#setHoldability(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#setHoldability(int)).
@param holdability The default holdability of [`JdbcResultSet`](https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set.html) objects created with this
    connection; either `Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT` or `Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT`.*/setHoldability(holdability:Integer):void;
/**For documentation of this method, see [
`java.sql.Connection#setReadOnly(boolean)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#setReadOnly(boolean)).
@param readOnly If `true`, read-only mode is enabled; `false` disables.*/setReadOnly(readOnly:boolean):void;
/**For documentation of this method, see [

```
java.sql.Connection#setSavepoint()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#setSavepoint()).
@return The new unnamed save point.*/setSavepoint():Jdbc.JdbcSavepoint;
/**For documentation of this method, see [
`java.sql.Connection#setSavepoint(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#setSavepoint(java.lang.String)).
@param name The name of the created save point.
@return The new named save point.*/setSavepoint(name:string):Jdbc.JdbcSavepoint;
/**For documentation of this method, see [
`java.sql.Connection#setTransactionIsolation(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Connection.html#setTransactionIsolation(int)).
@param level The transaction level to set, which is one of: `Jdbc.Connection.TRANSACTION_READ_UNCOMMITTED`, `Jdbc.Connection.TRANSACTION_READ_COMMITTED`, `Jdbc.Connection.TRANSACTION_REPEATABLE_READ`, `Jdbc.Connection.TRANSACTION_SERIALIZABLE`, or `Jdbc.Connection.TRANSACTION_NONE`.*/setTransactionIsolation(level:Integer):void;}interface JdbcClob{
/**For documentation of this method, see [

```
java.sql.Clob#truncate(long)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#free()).*/free():void;
/**Gets the content of this JdbcClob as an Apps Script blob.
@return A [`Blob`](https://developers.google.com/apps-script/reference/jdbc/../base/blob.html) that can be used directly by other Apps Script APIs.*/getAppsScriptBlob():Blob;
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
/**For documentation of this method, see [
`java.sql.Clob#getSubString(long, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#getSubString(long,%20int)).
@param position The index of the first character of the substring to extract. The first
    character is at index 1.
@param length The number of consecutive characters to copy (must be 0 or greater).
@return The retrieved substring.*/getSubString(position:Integer,length:Integer):string;
/**For documentation of this method, see [

```
java.sql.Clob#length()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#length()).
@return The length (in characters) of this clob.*/length():Integer;
/**For documentation of this method, see [
`java.sql.Clob#position(Clob, long)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#position(java.sql.Clob,%20long)).
@param search The clob object to search for.
@param start The position at which to begin searching; the first position is 1.
@return The position at which the specifed clob appears, or -1 if it is not present.*/position(search:Jdbc.JdbcClob,start:Integer):Integer;
/**For documentation of this method, see [
`java.sql.Clob#position(String, long)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#position(java.lang.String,%20long)).
@param search The substring to search for.
@param start The position at which to begin searching; the first position is 1.
@return The position at which the specifed substring appears, or -1 if it is not present.*/position(search:string,start:Integer):Integer;
/**Convenience method for writing a [`JdbcClob`](https://developers.google.com/apps-script/reference/jdbc/jdbc-clob.html) to a clob.
@param position The position at which writing to the clob starts; the first position is 1.
@param blobSource The blob source to write.
@return The number of characters written.*/setString(position:Integer,blobSource:BlobSource):Integer;
/**Convenience method for writing a [`JdbcClob`](https://developers.google.com/apps-script/reference/jdbc/jdbc-clob.html) to a clob.
@param position The position at which writing to the clob starts; the first position is 1.
@param blobSource The blob source to write.
@param offset The offset into the provided string where reading characters to write starts.
@param len The number of characters to write.
@return The number of characters written.*/setString(position:Integer,blobSource:BlobSource,offset:Integer,len:Integer):Integer;
/**For documentation of this method, see [
`java.sql.Clob#setString(long, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#setString(long,%20java.lang.String)).
@param position The position at which writing to the clob starts; the first position is 1.
@param value The string to write.
@return The number of characters written.*/setString(position:Integer,value:string):Integer;
/**For documentation of this method, see [
`java.sql.Clob#setString(long, String, int, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#setString(long,%20java.lang.String,%20int,%20int)).
@param position The position at which writing to the clob starts; the first position is 1.
@param value The string to write.
@param offset The offset into the provided string where reading characters to write starts.
@param len The number of characters to write.
@return The number of characters written.*/setString(position:Integer,value:string,offset:Integer,len:Integer):Integer;
/**For documentation of this method, see [

```
java.sql.Clob#truncate(long)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Clob.html#truncate(long)).
@param length The size (in bytes) of this clob after truncation.*/truncate(length:Integer):void;}interface JdbcCallableStatement{
/**For documentation of this method, see [
`java.sql.PreparedStatement#addBatch()`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#addBatch()).*/addBatch():void;
/**For documentation of this method, see [
`java.sql.Statement#addBatch(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#addBatch(java.lang.String)).
@param sql The SQL command to add to this statement, typically an SQL `INSERT` or `UPDATE`.*/addBatch(sql:string):void;
/**For documentation of this method, see [

```
java.sql.Statement#cancel()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#cancel()).*/cancel():void;
/**For documentation of this method, see [

```
java.sql.Statement#clearBatch()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#clearBatch()).*/clearBatch():void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#clearParameters()`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#clearParameters()).*/clearParameters():void;
/**For documentation of this method, see [

```
java.sql.Statement#clearWarnings()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#clearWarnings()).*/clearWarnings():void;
/**For documentation of this method, see [

```
java.sql.Statement#close()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#close()).*/close():void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#execute()`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#execute()).
@return `true` if the first result is a result set; `false` if the first result is
    an update count or there is no result.*/execute():boolean;
/**For documentation of this method, see [
`java.sql.Statement#execute(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String)).
@param sql The SQL statement to execute.
@return `true` if the first result is a result set; `false` if it is an update
    count or if there are no results.*/execute(sql:string):boolean;
/**For documentation of this method, see [
`java.sql.Statement#execute(String, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String,%20int)).
@param sql The SQL statement to execute.
@param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available
    for future retrieval; either `Jdbc.Statement.RETURN_GENERATED_KEYS` or `Jdbc.Statement.NO_GENERATED_KEYS`.
@return `true` if the first result is a result set; `false` if it is an update
    count or if there are no results.*/execute(sql:string,autoGeneratedKeys:Integer):boolean;
/**For documentation of this method, see [
`java.sql.Statement#execute(String, int[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String,%20int[])).
@param sql The SQL statement to execute.
@param columnIndexes The column indices in the whose auto-generated keys are made available for
    future retrieval.
@return `true` if the first result is a result set; `false` if it is an update
    count or if there are no results.*/execute(sql:string,columnIndexes:Integer[]):boolean;
/**For documentation of this method, see [
`java.sql.Statement#execute(String, String[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#execute(java.lang.String,%20java.lang.String[])).
@param sql The SQL statement to execute.
@param columnNames The names of columns in the whose auto-generated keys are made available for
    future retrieval.
@return `true` if the first result is a result set; `false` if it is an update
    count or if there are no results.*/execute(sql:string,columnNames:string[]):boolean;
/**For documentation of this method, see [

```
java.sql.Statement#executeBatch()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeBatch()).
@return The update counts for each command in the batch, using the same order in which commands
    were added to the batch.*/executeBatch():Integer[];
/**For documentation of this method, see [
`java.sql.PreparedStatement#executeQuery()`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#executeQuery()).
@return A result set that contains the data produced by the query.*/executeQuery():Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.Statement#executeQuery(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeQuery(java.lang.String)).
@param sql The SQL statement to execute, typically a static `SELECT`.
@return A result set containing the results of the execution. This is never `null`.*/executeQuery(sql:string):Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.PreparedStatement#executeUpdate()`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#executeUpdate()).
@return The row count ofr SQL Data Manipulation Language statements, or 0 for SQL statements
    that return nothing.*/executeUpdate():Integer;
/**For documentation of this method, see [
`java.sql.Statement#executeUpdate(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String)).
@param sql The SQL Data Manipulation Language statement to execute (such as `INSERT`,
    `UPDATE`, or `DELETE`), or else a statement that returns nothing (such as a DDL
    statement).
@return Either the row count for for Data Manipulation Language statements, or 0 for statements
    that return nothing.*/executeUpdate(sql:string):Integer;
/**For documentation of this method, see [
`java.sql.Statement#executeUpdate(String, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String,%20int)).
@param sql The SQL Data Manipulation Language statement to execute (such as `INSERT`,
    `UPDATE`, or `DELETE`), or else a statement that returns nothing (such as a DDL
    statement).
@param autoGeneratedKeys A flag that indicates whether auto-generated keys are made available
    for future retrieval; either `Jdbc.Statement.RETURN_GENERATED_KEYS` or `Jdbc.Statement.NO_GENERATED_KEYS`.
@return Either the row count for for Data Manipulation Language statements, or 0 for statements
    that return nothing.*/executeUpdate(sql:string,autoGeneratedKeys:Integer):Integer;
/**For documentation of this method, see [
`java.sql.Statement#executeUpdate(String, int[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String,%20int[])).
@param sql The SQL Data Manipulation Language statement to execute (such as `INSERT`,
    `UPDATE`, or `DELETE`), or else a statement that returns nothing (such as a DDL
    statement).
@param columnIndexes The column indices in the whose auto-generated keys are made available for
    future retrieval.
@return Either the row count for for Data Manipulation Language statements, or 0 for statements
    that return nothing.*/executeUpdate(sql:string,columnIndexes:Integer[]):Integer;
/**For documentation of this method, see [
`java.sql.Statement#executeUpdate(String, String[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#executeUpdate(java.lang.String,%20java.lang.String[])).
@param sql The SQL Data Manipulation Language statement to execute (such as `INSERT`,
    `UPDATE`, or `DELETE`), or else a statement that returns nothing (such as a DDL
    statement).
@param columnNames The names of columns in the whose auto-generated keys are made available for
    future retrieval.
@return Either the row count for for Data Manipulation Language statements, or 0 for statements
    that return nothing.*/executeUpdate(sql:string,columnNames:string[]):Integer;
/**For documentation of this method, see [
`java.sql.CallableStatement#getArray(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getArray(int)).
@param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the
    second is 2, and so on).
@return The value of a `ARRAY` parameter. Returns `null` if the value is `null`.*/getArray(parameterIndex:Integer):Jdbc.JdbcArray;
/**For documentation of this method, see [
`java.sql.CallableStatement#getArray(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getArray(java.lang.String)).
@param parameterName The name of the parameter.
@return The value of a `ARRAY` parameter. Returns `null` if the value is `null`.*/getArray(parameterName:string):Jdbc.JdbcArray;
/**For documentation of this method, see [
`java.sql.CallableStatement#getBigDecimal(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getBigDecimal(int)).
@param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the
    second is 2, and so on).
@return The value of a `NUMERIC` parameter in full precision. Returns `null` if the
    value is `null`.*/getBigDecimal(parameterIndex:Integer):BigNumber;
/**For documentation of this method, see [
`java.sql.CallableStatement#getBigDecimal(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getBigDecimal(java.lang.String)).
@param parameterName The name of the parameter.
@return The value of a `NUMERIC` parameter. Returns `null` if the value is `null`.*/getBigDecimal(parameterName:string):BigNumber;
/**For documentation of this method, see [
`java.sql.CallableStatement#getBlob(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getBlob(int)).
@param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the
    second is 2, and so on).
@return The value of a `BLOB` parameter. Returns `null` if the value is `null`.*/getBlob(parameterIndex:Integer):Jdbc.JdbcBlob;
/**For documentation of this method, see [
`java.sql.CallableStatement#getBlob(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getBlob(java.lang.String)).
@param parameterName The name of the parameter.
@return The value of a `BLOB` parameter. Returns `null` if the value is `null`.*/getBlob(parameterName:string):Jdbc.JdbcBlob;
/**For documentation of this method, see [
`java.sql.CallableStatement#getBoolean(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getBoolean(int)).
@param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the
    second is 2, and so on).
@return The value of a `BIT` or `BOOLEAN` parameter. Returns `false` if the
    value is `null`.*/getBoolean(parameterIndex:Integer):boolean;
/**For documentation of this method, see [
`java.sql.CallableStatement#getBoolean(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getBoolean(java.lang.String)).
@param parameterName The name of the parameter.
@return The value of a `BIT` or `BOOLEAN` parameter. Returns `false` if the
    value is `null`.*/getBoolean(parameterName:string):boolean;
/**For documentation of this method, see [
`java.sql.CallableStatement#getByte(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getByte(int)).
@param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the
    second is 2, and so on).
@return The value of a `TINYINT` parameter. Returns 0 if the value is `null`.*/getByte(parameterIndex:Integer):Byte;
/**For documentation of this method, see [
`java.sql.CallableStatement#getByte(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getByte(java.lang.String)).
@param parameterName The name of the parameter.
@return The value of a `TINYINT` parameter. Returns 0 if the value is `null`.*/getByte(parameterName:string):Byte;
/**For documentation of this method, see [
`java.sql.CallableStatement#getBytes(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getBytes(int)).
@param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the
    second is 2, and so on).
@return The value of a `BINARY` or `VARBINARY` parameter. Returns `null` if
    the value is `null`.*/getBytes(parameterIndex:Integer):Byte[];
/**For documentation of this method, see [
`java.sql.CallableStatement#getBytes(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getBytes(java.lang.String)).
@param parameterName The name of the parameter.
@return The value of a `BINARY` or `VARBINARY` parameter. Returns `null` if
    the value is `null`.*/getBytes(parameterName:string):Byte[];
/**For documentation of this method, see [
`java.sql.CallableStatement#getClob(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getClob(int)).
@param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the
    second is 2, and so on).
@return The value of a `CLOB` parameter. Returns `null` if the value is `null`.*/getClob(parameterIndex:Integer):Jdbc.JdbcClob;
/**For documentation of this method, see [
`java.sql.CallableStatement#getClob(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getClob(java.lang.String)).
@param parameterName The name of the parameter.
@return The value of a `CLOB` parameter. Returns `null` if the value is `null`.*/getClob(parameterName:string):Jdbc.JdbcClob;
/**For documentation of this method, see [

```
java.sql.Statement#getConnection()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getConnection()).
@return The connection that produced this statement.*/getConnection():Jdbc.JdbcConnection;
/**For documentation of this method, see [
`java.sql.CallableStatement#getDate(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getDate(int)).
@param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the
    second is 2, and so on).
@return The value of a `DATE` parameter. Returns `null` if the value is `null`.*/getDate(parameterIndex:Integer):Jdbc.JdbcDate;
/**For documentation of this method, see [
`java.sql.CallableStatement#getDate(int, Calendar)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getDate(int,%20java.util.Calendar)).
@param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the
    second is 2, and so on).
@param timeZone A time zone string used to construct [
    java.lang.Calendar](https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html) instance, which in turn is used to build the date. Several formats
    of time zone strings are recognized: short IDs (such as `PST`, `EST`, and
    `GMT`), long IDs (such as `US/Pacific` and `America/Los_Angeles`), and
    offsets (such as `GMT+6:30`).
@return The value of a `DATE` parameter. Returns `null` if the value is `null`.*/getDate(parameterIndex:Integer,timeZone:string):Jdbc.JdbcDate;
/**For documentation of this method, see [
`java.sql.CallableStatement#getDate(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getDate(java.lang.String)).
@param parameterName The name of the parameter.
@return The value of a `DATE` parameter. Returns `null` if the value is `null`.*/getDate(parameterName:string):Jdbc.JdbcDate;
/**For documentation of this method, see [
`java.sql.CallableStatement#getDate(String, Calendar)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getDate(java.lang.String,%20java.util.Calendar)).
@param parameterName The name of the parameter.
@param timeZone A time zone string used to construct [
    java.lang.Calendar](https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html) instance, which in turn is used to build the date. Several formats
    of time zone strings are recognized: short IDs (such as `PST`, `EST`, and
    `GMT`), long IDs (such as `US/Pacific` and `America/Los_Angeles`), and
    offsets (such as `GMT+6:30`).
@return The value of a `DATE` parameter. Returns `null` if the value is `null`.*/getDate(parameterName:string,timeZone:string):Jdbc.JdbcDate;
/**For documentation of this method, see [
`java.sql.CallableStatement#getDouble(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getDouble(int)).
@param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the
    second is 2, and so on).
@return The value of a `DOUBLE` parameter. Returns 0 if the value is `null`.*/getDouble(parameterIndex:Integer):number;
/**For documentation of this method, see [
`java.sql.CallableStatement#getDouble(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getDouble(java.lang.String)).
@param parameterName The name of the parameter.
@return The value of a `DOUBLE` parameter. Returns 0 if the value is `null`.*/getDouble(parameterName:string):number;
/**For documentation of this method, see [
`java.sql.Statement#getFetchDirection()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getFetchDirection()).
@return The default direction for result sets generated by this statement, which is either
    `Jdbc.ResultSet.FETCH_FORWARD` or `Jdbc.ResultSet.FETCH_REVERSE`.*/getFetchDirection():Integer;
/**For documentation of this method, see [

```
java.sql.Statement#getFetchSize()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getFetchSize()).
@return The default row fetch size for result sets generated from this statement.*/getFetchSize():Integer;
/**For documentation of this method, see [
`java.sql.CallableStatement#getFloat(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getFloat(int)).
@param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the
    second is 2, and so on).
@return The value of a `FLOAT` parameter. Returns 0 if the value is `null`.*/getFloat(parameterIndex:Integer):number;
/**For documentation of this method, see [
`java.sql.CallableStatement#getFloat(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getFloat(java.lang.String)).
@param parameterName The name of the parameter.
@return The value of a `FLOAT` parameter. Returns 0 if the value is `null`.*/getFloat(parameterName:string):number;
/**For documentation of this method, see [
`java.sql.Statement#getGeneratedKeys()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getGeneratedKeys()).
@return A result set containing the auto-generated keys generated by the execution of this
    statement.*/getGeneratedKeys():Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.CallableStatement#getInt(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getInt(int)).
@param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the
    second is 2, and so on).
@return The value of a `INTEGER` parameter. Returns 0 if the value is `null`.*/getInt(parameterIndex:Integer):Integer;
/**For documentation of this method, see [
`java.sql.CallableStatement#getInt(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getInt(java.lang.String)).
@param parameterName The name of the parameter.
@return The value of a `INTEGER` parameter. Returns 0 if the value is `null`.*/getInt(parameterName:string):Integer;
/**For documentation of this method, see [
`java.sql.CallableStatement#getLong(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getLong(int)).
@param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the
    second is 2, and so on).
@return The value of a `BIGINT` parameter. Returns 0 if the value is `null`.*/getLong(parameterIndex:Integer):Integer;
/**For documentation of this method, see [
`java.sql.CallableStatement#getLong(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getLong(java.lang.String)).
@param parameterName The name of the parameter.
@return The value of a `BIGINT` parameter. Returns 0 if the value is `null`.*/getLong(parameterName:string):Integer;
/**For documentation of this method, see [
`java.sql.Statement#getMaxFieldSize()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMaxFieldSize()).
@return The current column byte size limit for columns storing character and binary values; a
    value of zero indictates no limit.*/getMaxFieldSize():Integer;
/**For documentation of this method, see [

```
java.sql.Statement#getMaxRows()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMaxRows()).
@return The current maximum number of rows for a result set produced by this statement; a value
    of 0 indicates no limit.*/getMaxRows():Integer;
/**For documentation of this method, see [
`java.sql.PreparedStatement#getMetaData()`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#getMetaData()).
@return The description of a result set's columns, or `NULL` if this metadata is
    unavailable.*/getMetaData():Jdbc.JdbcResultSetMetaData;
/**For documentation of this method, see [
`java.sql.Statement#getMoreResults()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMoreResults()).
@return `true` if the next result is a result set; `false` otherwise.*/getMoreResults():boolean;
/**For documentation of this method, see [
`java.sql.Statement#getMoreResults(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getMoreResults(int)).
@param current A flag that indicates what happens to current result sets when retrieved. This
    value is one of `Jdbc.Statement.CLOSE_CURRENT_RESULT`, `Jdbc.Statement.KEEP_CURRENT_RESULT`, or `Jdbc.Statement.CLOSE_ALL_RESULTS`.
@return `true` if the next result is a result set; `false` otherwise.*/getMoreResults(current:Integer):boolean;
/**For documentation of this method, see [
`java.sql.CallableStatement#getNClob(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getNClob(int)).
@param parameterIndex An index indicating which paramater to register (the first parameter is
    1, the second is 2, and so on).
@return The value of a `NCLOB` parameter. Returns `null` if the value is `null`.*/getNClob(parameterIndex:Integer):Jdbc.JdbcClob;
/**For documentation of this method, see [
`java.sql.CallableStatement#getNClob(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getNClob(java.lang.String)).
@param parameterName The name of the parameter.
@return The value of a `NCLOB` parameter. Returns `null` if the value is `null`.*/getNClob(parameterName:string):Jdbc.JdbcClob;
/**For documentation of this method, see [
`java.sql.CallableStatement#getNString(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getNString(int)).
@param parameterIndex An index indicating which paramater to register (the first parameter is
    1, the second is 2, and so on).
@return A string that maps a `NCHAR`, `NVARCHAR`, or `LONGNVARCHAR` value.*/getNString(parameterIndex:Integer):string;
/**For documentation of this method, see [
`java.sql.CallableStatement#getNString(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getNString(java.lang.String)).
@param parameterName The name of the parameter.
@return A string that maps a `NCHAR`, `NVARCHAR`, or `LONGNVARCHAR` value.*/getNString(parameterName:string):string;
/**For documentation of this method, see [
`java.sql.CallableStatement#getObject(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getObject(int)).
@param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the
    second is 2, and so on).
@return An object holding the parameter value.*/getObject(parameterIndex:Integer):Object;
/**For documentation of this method, see [
`java.sql.CallableStatement#getObject(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getObject(java.lang.String)).
@param parameterName The name of the parameter.
@return An object holding the parameter value.*/getObject(parameterName:string):Object;
/**For documentation of this method, see [
`java.sql.PreparedStatement#getParameterMetaData()`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#getParameterMetaData()).
@return The parameter metadata, including the number, types, and properties for each parameter.*/getParameterMetaData():Jdbc.JdbcParameterMetaData;
/**For documentation of this method, see [
`java.sql.Statement#getQueryTimeout()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getQueryTimeout()).
@return The current query timeout in seconds; a value of zero indicates no timeout.*/getQueryTimeout():Integer;
/**For documentation of this method, see [
`java.sql.CallableStatement#getRef(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getRef(int)).
@param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the
    second is 2, and so on).
@return The value of a `REF` parameter. Returns `null` if the value is `null`.*/getRef(parameterIndex:Integer):Jdbc.JdbcRef;
/**For documentation of this method, see [
`java.sql.CallableStatement#getRef(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getRef(java.lang.String)).
@param parameterName The name of the parameter.
@return The value of a `REF` parameter. Returns `null` if the value is `null`.*/getRef(parameterName:string):Jdbc.JdbcRef;
/**For documentation of this method, see [

```
java.sql.Statement#getResultSet()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSet()).
@return The current result set, or `null` if the result is an update count or there are
    no more results.*/getResultSet():Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.Statement#getResultSetConcurrency()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetConcurrency()).
@return The result set concurrency for result sets generated from this statement, which is
    either `Jdbc.ResultSet.CONCUR_READ_ONLY` or `Jdbc.ResultSet.CONCUR_UPDATABLE`.*/getResultSetConcurrency():Integer;
/**For documentation of this method, see [
`java.sql.Statement#getResultSetHoldability()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetHoldability()).
@return The result set holdability, which is either `Jdbc.ResultSet.HOLD_CURSORS_OVER_COMMIT` or `Jdbc.ResultSet.CLOSE_CURSORS_AT_COMMIT`.*/getResultSetHoldability():Integer;
/**For documentation of this method, see [
`java.sql.Statement#getResultSetType()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getResultSetType()).
@return The result set type for result sets generated from this statement, which is `Jdbc.ResultSet.TYPE_FORWARD_ONLY`, `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`, or
    `Jdbc.ResultSet.TYPE_SCROLL_INSENSITIVE`.*/getResultSetType():Integer;
/**For documentation of this method, see [
`java.sql.CallableStatement#getRowId(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getRowId(int)).
@param parameterIndex An index indicating which paramater to register (the first parameter is
    1, the second is 2, and so on).
@return The `ROWID` value. Returns `null` if the parameter contains an SQL `NULL`.*/getRowId(parameterIndex:Integer):Jdbc.JdbcRowId;
/**For documentation of this method, see [
`java.sql.CallableStatement#getRowId(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getRowId(java.lang.String)).
@param parameterName The name of the parameter.
@return The `ROWID` value. Returns `null` if the parameter contains an SQL `NULL`.*/getRowId(parameterName:string):Jdbc.JdbcRowId;
/**For documentation of this method, see [
`java.sql.CallableStatement#getSQLXML(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getSQLXML(int)).
@param parameterIndex An index indicating which paramater to register (the first parameter is
    1, the second is 2, and so on).
@return A SQLXML object that maps to an SQL XML value.*/getSQLXML(parameterIndex:Integer):Jdbc.JdbcSQLXML;
/**For documentation of this method, see [
`java.sql.CallableStatement#getSQLXML(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getSQLXML(java.lang.String)).
@param parameterName The name of the parameter.
@return A SQLXML object that maps to an SQL XML value.*/getSQLXML(parameterName:string):Jdbc.JdbcSQLXML;
/**For documentation of this method, see [
`java.sql.CallableStatement#getShort(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getShort(int)).
@param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the
    second is 2, and so on).
@return The value of a `SMALLINT` parameter. Returns 0 if the value is `null`.*/getShort(parameterIndex:Integer):Integer;
/**For documentation of this method, see [
`java.sql.CallableStatement#getShort(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getShort(java.lang.String)).
@param parameterName The name of the parameter.
@return The value of a `SMALLINT` parameter. Returns 0 if the value is `null`.*/getShort(parameterName:string):Integer;
/**For documentation of this method, see [
`java.sql.CallableStatement#getString(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getString(int)).
@param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the
    second is 2, and so on).
@return The value of a `CHAR`, `VARCHAR`, or `LONGVARCHAR` parameter.*/getString(parameterIndex:Integer):string;
/**For documentation of this method, see [
`java.sql.CallableStatement#getString(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getString(java.lang.String)).
@param parameterName The name of the parameter.
@return The value of a `CHAR`, `VARCHAR`, or `LONGVARCHAR` parameter. Returns
    `null` if the value is `null`.*/getString(parameterName:string):string;
/**For documentation of this method, see [
`java.sql.CallableStatement#getTime(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getTime(int)).
@param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the
    second is 2, and so on).
@return The value of a `TIME` parameter. Returns `null` if the value is `null`.*/getTime(parameterIndex:Integer):Jdbc.JdbcTime;
/**For documentation of this method, see [
`java.sql.CallableStatement#getTime(int, Calendar)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getTime(int,%20java.util.Calendar)).
@param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the
    second is 2, and so on).
@param timeZone A time zone string used to construct [
    java.lang.Calendar](https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html) instance, which in turn is used to build the date. Several formats
    of time zone strings are recognized: short IDs (such as `PST`, `EST`, and
    `GMT`), long IDs (such as `US/Pacific` and `America/Los_Angeles`), and
    offsets (such as `GMT+6:30`).
@return The value of a `TIME` parameter. Returns `null` if the value is `null`.*/getTime(parameterIndex:Integer,timeZone:string):Jdbc.JdbcTime;
/**For documentation of this method, see [
`java.sql.CallableStatement#getTime(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getTime(java.lang.String)).
@param parameterName The name of the parameter.
@return The value of a `TIME` parameter. Returns `null` if the value is `null`.*/getTime(parameterName:string):Jdbc.JdbcTime;
/**For documentation of this method, see [
`java.sql.CallableStatement#getTime(String, Calendar)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getTime(java.lang.String,%20java.util.Calendar)).
@param parameterName The name of the parameter.
@param timeZone A time zone string used to construct [
    java.lang.Calendar](https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html) instance, which in turn is used to build the date. Several formats
    of time zone strings are recognized: short IDs (such as `PST`, `EST`, and
    `GMT`), long IDs (such as `US/Pacific` and `America/Los_Angeles`), and
    offsets (such as `GMT+6:30`).
@return The value of a `TIME` parameter. Returns `null` if the value is `null`.*/getTime(parameterName:string,timeZone:string):Jdbc.JdbcTime;
/**For documentation of this method, see [
`java.sql.CallableStatement#getTimestamp(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getTimestamp(int)).
@param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the
    second is 2, and so on).
@return The value of a `TIMESTAMP` parameter. Returns `null` if the value is `null`.*/getTimestamp(parameterIndex:Integer):Jdbc.JdbcTimestamp;
/**For documentation of this method, see [
`java.sql.CallableStatement#getTimestamp(int, Calendar)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getTimestamp(int,%20java.util.Calendar)).
@param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the
    second is 2, and so on).
@param timeZone A time zone string used to construct [
    java.lang.Calendar](https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html) instance, which in turn is used to build the date. Several formats
    of time zone strings are recognized: short IDs (such as `PST`, `EST`, and
    `GMT`), long IDs (such as `US/Pacific` and `America/Los_Angeles`), and
    offsets (such as `GMT+6:30`).
@return The value of a `TIMESTAMP` parameter. Returns `null` if the value is `null`.*/getTimestamp(parameterIndex:Integer,timeZone:string):Jdbc.JdbcTimestamp;
/**For documentation of this method, see [
`java.sql.CallableStatement#getTimestamp(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getTimestamp(java.lang.String)).
@param parameterName The name of the parameter.
@return The value of a `TIMESTAMP` parameter. Returns `null` if the value is `null`.*/getTimestamp(parameterName:string):Jdbc.JdbcTimestamp;
/**For documentation of this method, see [
`java.sql.CallableStatement#getTimestamp(String, Calendar)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getTimestamp(java.lang.String,%20java.util.Calendar)).
@param parameterName The name of the parameter.
@param timeZone A time zone string used to construct [
    java.lang.Calendar](https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html) instance, which in turn is used to build the date. Several formats
    of time zone strings are recognized: short IDs (such as `PST`, `EST`, and
    `GMT`), long IDs (such as `US/Pacific` and `America/Los_Angeles`), and
    offsets (such as `GMT+6:30`).
@return The value of a `TIMESTAMP` parameter. Returns `null` if the value is `null`.*/getTimestamp(parameterName:string,timeZone:string):Jdbc.JdbcTimestamp;
/**For documentation of this method, see [
`java.sql.CallableStatement#getURL(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getURL(int)).
@param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the
    second is 2, and so on).
@return The value of a `DATALINK` parameter as a string.*/getURL(parameterIndex:Integer):string;
/**For documentation of this method, see [
`java.sql.CallableStatement#getURL(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#getURL(java.lang.String)).
@param parameterName The name of the parameter.
@return The value of a `DATALINK` parameter. Returns `null` if the value is `null`.*/getURL(parameterName:string):string;
/**For documentation of this method, see [
`java.sql.Statement#getUpdateCount()`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getUpdateCount()).
@return The current result as an update count, or -1 if the current result is a result set or
    if there are no more results.*/getUpdateCount():Integer;
/**For documentation of this method, see [

```
java.sql.Statement#getWarnings()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#getWarnings()).
@return The current set of warnings, or `null` if there are no warnings.*/getWarnings():string[];
/**For documentation of this method, see [

```
java.sql.Statement#isClosed()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#isClosed()).
@return `true` if this statement is closed; `false` otherwise.*/isClosed():boolean;
/**For documentation of this method, see [

```
java.sql.Statement#isPoolable()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#isPoolable()).
@return `true` if this statement is poolable; `false` otherwise.*/isPoolable():boolean;
/**For documentation of this method, see [
`java.sql.CallableStatement#registerOutParameter(int, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#registerOutParameter(int,%20int)).
@param parameterIndex An index indicating which paramater to register (the first parameter is
    1, the second is 2, and so on).
@param sqlType The JDBC [type code](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) to
    register. If the parameter is of JDBC type `NUMERIC` or `DECIMAL`,
    use [`registerOutParameter(parameterIndex, sqlType, scale)`](https://developers.google.com/apps-script/reference/jdbc/jdbc-callable-statement.html#registerOutParameter(Integer,Integer,Integer)) instead.*/registerOutParameter(parameterIndex:Integer,sqlType:Integer):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#registerOutParameter(int, int, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#registerOutParameter(int,%20int,%20int)).
@param parameterIndex An index indicating which paramater to register (the first parameter is
    1, the second is 2, and so on).
@param sqlType The JDBC [type code](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) to
    register.
@param scale The desired number of digits to the right of the decimal point (must be zero or
    greater).*/registerOutParameter(parameterIndex:Integer,sqlType:Integer,scale:Integer):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#registerOutParameter(int, int, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#registerOutParameter(int,%20int,%20java.lang.String)).
@param parameterIndex The index of the parameter to retrieve (the first parameter is 1, the
    second is 2, and so on).
@param sqlType A [type
    code](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) value.
@param typeName The fully-qualified name of an SQL structured type.*/registerOutParameter(parameterIndex:Integer,sqlType:Integer,typeName:string):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#registerOutParameter(String, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#registerOutParameter(java.lang.String,%20int)).
@param parameterName The name of the parameter to be registered.
@param sqlType A [type
    code](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) value.*/registerOutParameter(parameterName:string,sqlType:Integer):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#registerOutParameter(String, int, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#registerOutParameter(java.lang.String,%20int,%20int)).
@param parameterName The name of the parameter to be registered.
@param sqlType A [type
    code](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) value.
@param scale The desired number of digits to the right of the decimal point, which must be zero
    or greater.*/registerOutParameter(parameterName:string,sqlType:Integer,scale:Integer):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#registerOutParameter(String, int, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#registerOutParameter(java.lang.String,%20int,%20java.lang.String)).
@param parameterName The name of the parameter to be registered.
@param sqlType A [type
    code](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) value.
@param typeName The fully-qualified name of an SQL structured type.*/registerOutParameter(parameterName:string,sqlType:Integer,typeName:string):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setArray(int, Array)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setArray(int,%20java.sql.Array)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setArray(parameterIndex:Integer,x:Jdbc.JdbcArray):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setBigDecimal(int, BigDecimal)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBigDecimal(int,%20java.math.BigDecimal)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setBigDecimal(parameterIndex:Integer,x:BigNumber):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#setBigDecimal(String, BigDecimal)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setBigDecimal(java.lang.String,%20java.math.BigDecimal)).
@param parameterName The name of the parameter to set.
@param x The parameter value to set.*/setBigDecimal(parameterName:string,x:BigNumber):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setBlob(int, Clob)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBlob(int,%20java.sql.Blob)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setBlob(parameterIndex:Integer,x:Jdbc.JdbcBlob):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#setBlob(String, Blob)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setBlob(java.lang.String,%20java.sql.Blob)).
@param parameterName The name of the parameter to set.
@param x A blob that maps to an SQL `BLOB` value.*/setBlob(parameterName:string,x:Jdbc.JdbcBlob):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setBoolean(int, boolean)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBoolean(int,%20boolean)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setBoolean(parameterIndex:Integer,x:boolean):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#setBoolean(String, boolean)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setBoolean(java.lang.String,%20boolean)).
@param parameterName The name of the parameter to set.
@param x The parameter value to set.*/setBoolean(parameterName:string,x:boolean):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setByte(int, byte)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setByte(int,%20byte)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setByte(parameterIndex:Integer,x:Byte):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#setByte(String, byte)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setByte(java.lang.String,%20byte)).
@param parameterName The name of the parameter to set.
@param x The parameter value to set.*/setByte(parameterName:string,x:Byte):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setBytes(int, byte[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setBytes(int,%20byte[])).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setBytes(parameterIndex:Integer,x:Byte[]):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#setBytes(String, byte[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setBytes(java.lang.String,%20byte[])).
@param parameterName The name of the parameter to set.
@param x The parameter value to set.*/setBytes(parameterName:string,x:Byte[]):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setClob(int, Clob)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setClob(int,%20java.sql.Clob)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setClob(parameterIndex:Integer,x:Jdbc.JdbcClob):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#setBlob(String, Clob)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setClob(java.lang.String,%20java.sql.Clob)).
@param parameterName The name of the parameter to set.
@param x A clob that maps to an SQL `CLOB` value.*/setClob(parameterName:string,x:Jdbc.JdbcClob):void;
/**For documentation of this method, see [
`java.sql.Statement#setCursorName(String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setCursorName(java.lang.String)).
@param name The new cursor name, which must be unique within a connection.*/setCursorName(name:string):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setDate(int, Date)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setDate(int,%20java.sql.Date)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setDate(parameterIndex:Integer,x:Jdbc.JdbcDate):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setDate(int, Date, Calendar)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setDate(int,%20java.sql.Date,%20java.util.Calendar)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.
@param timeZone A time zone string used to construct [
    java.lang.Calendar](https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html) instance, which in turn is used to build the date. Several formats
    of time zone strings are recognized: short IDs (such as `PST`, `EST`, and
    `GMT`), long IDs (such as `US/Pacific` and `America/Los_Angeles`), and
    offsets (such as `GMT+6:30`).*/setDate(parameterIndex:Integer,x:Jdbc.JdbcDate,timeZone:string):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#setDate(String, Date)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setDate(java.lang.String,%20java.sql.Date)).
@param parameterName The name of the parameter to set.
@param x The parameter value to set.*/setDate(parameterName:string,x:Jdbc.JdbcDate):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#setDate(String, Date, Calendar)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setDate(java.lang.String,%20java.sql.Date,%20java.util.Calendar)).
@param parameterName The name of the parameter to set.
@param x The parameter value to set.
@param timeZone A time zone string used to construct [
    java.lang.Calendar](https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html) instance, which in turn is used to build the date. Several formats
    of time zone strings are recognized: short IDs (such as `PST`, `EST`, and
    `GMT`), long IDs (such as `US/Pacific` and `America/Los_Angeles`), and
    offsets (such as `GMT+6:30`).*/setDate(parameterName:string,x:Jdbc.JdbcDate,timeZone:string):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setDouble(int, double)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setDouble(int,%20double)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setDouble(parameterIndex:Integer,x:number):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#setDouble(String, double)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setDouble(java.lang.String,%20double)).
@param parameterName The name of the parameter to set.
@param x The parameter value to set.*/setDouble(parameterName:string,x:number):void;
/**For documentation of this method, see [
`java.sql.Statement#setEscapeProcessing(boolean)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setEscapeProcessing(boolean)).
@param enable If `true`, escape processing is enabled; otherwise it is disabled.*/setEscapeProcessing(enable:boolean):void;
/**For documentation of this method, see [
`java.sql.Statement#setFetchDirection(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setFetchDirection(int)).
@param direction The specified direction to set, which is either `Jdbc.ResultSet.FETCH_FORWARD` or `Jdbc.ResultSet.FETCH_REVERSE`.*/setFetchDirection(direction:Integer):void;
/**For documentation of this method, see [
`java.sql.Statement#setFetchSize(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setFetchSize(int)).
@param rows The number of rows to fetch.*/setFetchSize(rows:Integer):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setFloat(int, float)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setFloat(int,%20float)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setFloat(parameterIndex:Integer,x:number):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#setFloat(String, float)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setFloat(java.lang.String,%20float)).
@param parameterName The name of the parameter to set.
@param x The parameter value to set.*/setFloat(parameterName:string,x:number):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setInt(int, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setInt(int,%20int)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setInt(parameterIndex:Integer,x:Integer):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#setInt(String, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setInt(java.lang.String,%20int)).
@param parameterName The name of the parameter to set.
@param x The parameter value to set.*/setInt(parameterName:string,x:Integer):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setLong(int, long)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setLong(int,%20long)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setLong(parameterIndex:Integer,x:Integer):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#setLong(String, long)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setLong(java.lang.String,%20long)).
@param parameterName The name of the parameter to set.
@param x The parameter value to set.*/setLong(parameterName:string,x:Integer):void;
/**For documentation of this method, see [
`java.sql.Statement#setMaxFieldSize(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setMaxFieldSize(int)).
@param max The new column byte size limit; a value of zero indicates no limit.*/setMaxFieldSize(max:Integer):void;
/**For documentation of this method, see [

```
java.sql.Statement#setMaxRows(int)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setMaxRows(int)).
@param max The maximum number of rows a result set generated by this statement can have. A
    value of 0 indicates no limit.*/setMaxRows(max:Integer):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setNClob(int, NClob)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNClob(int,%20java.sql.NClob)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setNClob(parameterIndex:Integer,x:Jdbc.JdbcClob):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#setNClob(String, NClob)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setNClob(java.lang.String,%20java.sql.NClob)).
@param parameterName The name of the parameter to set.
@param value The parameter value to set.*/setNClob(parameterName:string,value:Jdbc.JdbcClob):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setNString(int, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNString(int,%20java.lang.String)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setNString(parameterIndex:Integer,x:string):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#setNString(String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setNString(java.lang.String,%20java.lang.String)).
@param parameterName The name of the parameter to set.
@param value The parameter value to set.*/setNString(parameterName:string,value:string):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setNull(int, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNull(int,%20int)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param sqlType The [SQL
    type](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) of the specified parameter.*/setNull(parameterIndex:Integer,sqlType:Integer):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setNull(int, int, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setNull(int,%20int,%20java.lang.String)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param sqlType The [SQL
    type](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) of the specified parameter.
@param typeName The fully-qualifed name of an SQL user-defined type. Ignored if the parameter
    isn't a user-defined type or `REF`.*/setNull(parameterIndex:Integer,sqlType:Integer,typeName:string):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#setNull(String, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setNull(java.lang.String,%20int)).
@param parameterName The name of the parameter to set.
@param sqlType The SQL [
    type code](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html).*/setNull(parameterName:string,sqlType:Integer):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#setNull(String, int, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setNull(java.lang.String,%20int,%20java.lang.String)).
@param parameterName The name of the parameter to set.
@param sqlType The [SQL
    type](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html).
@param typeName The fully-qualified name of an SQL user-defined type; ignored if the parameter
    is not a user-defined type or SQL `REF` value.*/setNull(parameterName:string,sqlType:Integer,typeName:string):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setObject(int, Object)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setObject(int,%20java.lang.Object)).
@param index The index of the parameter to set (the first parameter is 1, the second is 2, and
    so on).
@param x The object containing the value to set the parameter to.*/setObject(index:Integer,x:Object):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setObject(int, Object, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setObject(int,%20java.lang.Object,%20int)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The object containing the value to set the parameter to.
@param targetSqlType The [SQL type](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) to send
    to the database.*/setObject(parameterIndex:Integer,x:Object,targetSqlType:Integer):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setObject(int, Object, int, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setObject(int,%20java.lang.Object,%20int,%20int)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The object containing the value to set the parameter to.
@param targetSqlType The [SQL type](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) to send
    to the database. The scale argument may further qualify this type.
@param scaleOrLength The number of digits after the decimal for `DECIMAL` or `NUMERIC` types, or the length of data for `InputStream` or `Reader` types.
    Ignored for all other types.*/setObject(parameterIndex:Integer,x:Object,targetSqlType:Integer,scaleOrLength:Integer):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#setObject(String, Object)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setObject(java.lang.String,%20java.lang.Object)).
@param parameterName The name of the parameter to set.
@param x The object containing the value to set.*/setObject(parameterName:string,x:Object):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#setObject(String, Object, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setObject(java.lang.String,%20java.lang.Object,%20int)).
@param parameterName The name of the parameter to set.
@param x The object containing the value to set.
@param targetSqlType The [SQL type](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) sent to
    the database.*/setObject(parameterName:string,x:Object,targetSqlType:Integer):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#setObject(String, Object, int, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setObject(java.lang.String,%20java.lang.Object,%20int,%20int)).
@param parameterName The name of the parameter to set.
@param x The object containing the value to set.
@param targetSqlType The [SQL type](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) sent to
    the database. The scale parameter may further qualify this type.
@param scale The number of digits after the decimal point for `DECIMAL` and `NUMERIC` types. Ignored for all other types.*/setObject(parameterName:string,x:Object,targetSqlType:Integer,scale:Integer):void;
/**For documentation of this method, see [
`java.sql.Statement#setPoolable(boolean)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setPoolable(boolean)).
@param poolable If `true`, requests that this statement be pooled; otherwise requests it
    not be pooled.*/setPoolable(poolable:boolean):void;
/**For documentation of this method, see [
`java.sql.Statement#setQueryTimeout(int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Statement.html#setQueryTimeout(int)).
@param seconds The new query timeout in seconds; a value of 0 indicates no timeout.*/setQueryTimeout(seconds:Integer):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setRef(int, Ref)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setRef(int,%20java.sql.Ref)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The SQL `REF` value to set.*/setRef(parameterIndex:Integer,x:Jdbc.JdbcRef):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setRowId(int, RowId)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setRowId(int,%20java.sql.RowId)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setRowId(parameterIndex:Integer,x:Jdbc.JdbcRowId):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#setRowId(String, RowId)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setRowId(java.lang.String,%20java.sql.RowId)).
@param parameterName The name of the parameter to set.
@param x The parameter value to set.*/setRowId(parameterName:string,x:Jdbc.JdbcRowId):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setSQLXML(int, SQLXML)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setSQLXML(int,%20java.sql.SQLXML)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setSQLXML(parameterIndex:Integer,x:Jdbc.JdbcSQLXML):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#setSQLXML(String, SQLXML)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setSQLXML(java.lang.String,%20java.sql.SQLXML)).
@param parameterName The name of the parameter to set.
@param xmlObject A SQLXML object that maps to an SQL XML value.*/setSQLXML(parameterName:string,xmlObject:Jdbc.JdbcSQLXML):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setShort(int, short)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setShort(int,%20short)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setShort(parameterIndex:Integer,x:Integer):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#setShort(String, short)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setShort(java.lang.String,%20short)).
@param parameterName The name of the parameter to set.
@param x The parameter value to set.*/setShort(parameterName:string,x:Integer):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setString(int, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setString(int,%20java.lang.String)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setString(parameterIndex:Integer,x:string):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#setString(String, String)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setString(java.lang.String,%20java.lang.String)).
@param parameterName The name of the parameter to set.
@param x The parameter value to set.*/setString(parameterName:string,x:string):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setTime(int, Time)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setTime(int,%20java.sql.Time)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setTime(parameterIndex:Integer,x:Jdbc.JdbcTime):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setTime(int, Time, Calendar)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setTime(int,%20java.sql.Time,%20java.util.Calendar)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.
@param timeZone A time zone string used to construct [
    java.lang.Calendar](https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html) instance, which in turn is used to build the date. Several formats
    of time zone strings are recognized: short IDs (such as `PST`, `EST`, and
    `GMT`), long IDs (such as `US/Pacific` and `America/Los_Angeles`), and
    offsets (such as `GMT+6:30`).*/setTime(parameterIndex:Integer,x:Jdbc.JdbcTime,timeZone:string):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#setTime(String, Time)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setTime(java.lang.String,%20java.sql.Time)).
@param parameterName The name of the parameter to set.
@param x The parameter value to set.*/setTime(parameterName:string,x:Jdbc.JdbcTime):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#setTime(String, Time, Calendar)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setTime(java.lang.String,%20java.sql.Time,%20java.util.Calendar)).
@param parameterName The name of the parameter to set.
@param x The parameter value to set.
@param timeZone A time zone string used to construct [
    java.lang.Calendar](https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html) instance, which in turn is used to build the date. Several formats
    of time zone strings are recognized: short IDs (such as `PST`, `EST`, and
    `GMT`), long IDs (such as `US/Pacific` and `America/Los_Angeles`), and
    offsets (such as `GMT+6:30`).*/setTime(parameterName:string,x:Jdbc.JdbcTime,timeZone:string):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setTimestamp(int, Timestamp)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setTimestamp(int,%20java.sql.Timestamp)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setTimestamp(parameterIndex:Integer,x:Jdbc.JdbcTimestamp):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setTimestamp(int, Timestamp, Calendar)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setTimestamp(int,%20java.sql.Timestamp,%20java.util.Calendar)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.
@param timeZone A time zone string used to construct [
    java.lang.Calendar](https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html) instance, which in turn is used to build the date. Several formats
    of time zone strings are recognized: short IDs (such as `PST`, `EST`, and
    `GMT`), long IDs (such as `US/Pacific` and `America/Los_Angeles`), and
    offsets (such as `GMT+6:30`).*/setTimestamp(parameterIndex:Integer,x:Jdbc.JdbcTimestamp,timeZone:string):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#setTimestamp(String, Timestamp)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setTimestamp(java.lang.String,%20java.sql.Timestamp)).
@param parameterName The name of the parameter to set.
@param x The parameter value to set.*/setTimestamp(parameterName:string,x:Jdbc.JdbcTimestamp):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#setTimestamp(String, Timestamp, Calendar)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setTimestamp(java.lang.String,%20java.sql.Timestamp,%20java.util.Calendar)).
@param parameterName The name of the parameter to set.
@param x The parameter value to set.
@param timeZone A time zone string used to construct [
    java.lang.Calendar](https://docs.oracle.com/javase/6/docs/api/java/util/Calendar.html) instance, which in turn is used to build the date. Several formats
    of time zone strings are recognized: short IDs (such as `PST`, `EST`, and
    `GMT`), long IDs (such as `US/Pacific` and `America/Los_Angeles`), and
    offsets (such as `GMT+6:30`).*/setTimestamp(parameterName:string,x:Jdbc.JdbcTimestamp,timeZone:string):void;
/**For documentation of this method, see [
`java.sql.PreparedStatement#setURL(int, URL)`](https://docs.oracle.com/javase/6/docs/api/java/sql/PreparedStatement.html#setURL(int,%20java.net.URL)).
@param parameterIndex The index of the parameter to set (the first parameter is 1, the second
    is 2, and so on).
@param x The parameter value to set.*/setURL(parameterIndex:Integer,x:string):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#setURL(String, URL)`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#setURL(java.lang.String,%20java.net.URL)).
@param parameterName The name of the parameter to set.
@param val The parameter value to set.*/setURL(parameterName:string,val:string):void;
/**For documentation of this method, see [
`java.sql.CallableStatement#wasNull()`](https://docs.oracle.com/javase/6/docs/api/java/sql/CallableStatement.html#wasNull()).
@return `true` if the last parameter read was `null`; returns `false`
    otherwise.*/wasNull():boolean;}interface JdbcBlob{
/**For documentation of this method, see [

```
java.sql.Blob#free()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#free()).*/free():void;
/**Gets the content of this JdbcBlob as an Apps Script blob.
@return A [`Blob`](https://developers.google.com/apps-script/reference/jdbc/../base/blob.html) that can be used directly by other Apps Script APIs.*/getAppsScriptBlob():Blob;
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
/**For documentation of this method, see [
`java.sql.Blob#getBytes(long, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#getBytes(long,%20int)).
@param position The ordinal position of the first byte in the blob value to be extracted; the
    first byte is at position 1.
@param length The number of consecutive bytes to copy; the value for length must be zero or
    greater.
@return A byte array containing up to the specified number of consecutive bytes from the blob
    value.*/getBytes(position:Integer,length:Integer):Byte[];
/**For documentation of this method, see [

```
java.sql.Blob#length()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#length()).
@return The number of bytes in this blob.*/length():Integer;
/**For documentation of this method, see [
`java.sql.Blob#position(byte[], long)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#position(byte[],%20long)).
@param pattern The byte array to search for.
@param start The position in the blob value where to beging searching; the first position is 1.
@return The position at which the specified pattern begins, or else -1 if the pattern is not
    found.*/position(pattern:Byte[],start:Integer):Integer;
/**For documentation of this method, see [
`java.sql.Blob#position(blob, long)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#position(java.sql.Blob,%20long)).
@param pattern The [`JdbcBlob`](https://developers.google.com/apps-script/reference/jdbc/jdbc-blob.html) indicating the value to search for.
@param start The position in the blob value where to beging searching; the first position is 1.
@return The position at which the specified pattern begins, or else -1 if the pattern is not
    found.*/position(pattern:Jdbc.JdbcBlob,start:Integer):Integer;
/**Convenience method for writing a [`JdbcBlob`](https://developers.google.com/apps-script/reference/jdbc/jdbc-blob.html) to this blob.
@param position The position in the blob at which to start writing; the first position is 1.
@param blobSource The source of data to write to this blob.
@return The number of bytes written.*/setBytes(position:Integer,blobSource:BlobSource):Integer;
/**Convenience method for writing a [`JdbcBlob`](https://developers.google.com/apps-script/reference/jdbc/jdbc-blob.html) to this blob.
@param position The position in the blob at which to start writing; the first position is 1.
@param blobSource The source of data to write to this blob.
@param offset The offset into the provided byte array at which to start reading bytes to set.
@param length The number of bytes to write to the blob.
@return The number of bytes written.*/setBytes(position:Integer,blobSource:BlobSource,offset:Integer,length:Integer):Integer;
/**For documentation of this method, see [
`java.sql.Blob#setBytes(long, byte[])`](https://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#setBytes(long,%20byte[])).
@param position The position in the blob at which to start writing; the first position is 1.
@param bytes The array of bytes to write to this blob.
@return The number of bytes written.*/setBytes(position:Integer,bytes:Byte[]):Integer;
/**For documentation of this method, see [
`java.sql.Blob#setBytes(long, byte[], int, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#setBytes(long,%20byte[],%20int,%20int)).
@param position The position in the blob at which to start writing; the first position is 1.
@param bytes The array of bytes to write to this blob.
@param offset The offset into the provided byte array at which to start reading bytes to set.
@param length The number of bytes to write to the blob.
@return The number of bytes written.*/setBytes(position:Integer,bytes:Byte[],offset:Integer,length:Integer):Integer;
/**For documentation of this method, see [

```
java.sql.Blob#truncate(long)```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Blob.html#truncate(long)).
@param length The size (in bytes) of this blob after truncation.*/truncate(length:Integer):void;}interface JdbcArray{
/**For documentation of this method, see [

```
java.sql.Array#free()```

](http://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#free()).*/free():void;
/**For documentation of this method, see [

```
java.sql.Array#getArray()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#getArray())
@return An object containing the ordered elements of the SQL array value.*/getArray():Object;
/**For documentation of this method, see [
`java.sql.Array#getArray(long, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#getArray(long,%20int)).
@param index The array index of the first element to retrieve, where the first element has an
    index of 1.
@param count The number of successive SQL array elements to retrieve.
@return An object containing up to the specified number of consecutive SQL array elements.*/getArray(index:Integer,count:Integer):Object;
/**For documentation of this method, see [

```
java.sql.Array#getBaseType()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#getBaseType()).
@return The [type
    code](https://docs.oracle.com/javase/6/docs/api/java/sql/Types.html) for the elements in this array.*/getBaseType():Integer;
/**For documentation of this method, see [

```
java.sql.Array#getBaseTypeName()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#getBaseTypeName()).
@return The database-specific name for the built-in base type or else the fully-qualified SQL
    type name for a base type that is a UDT.*/getBaseTypeName():string;
/**For documentation of this method, see [

```
java.sql.Array#getResultSet()```

](https://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#getResultSet()).
@return The [`JdbcResultSet`](https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set.html) containing one row for each of the elements in the array
    designated by this Array object, with the rows in ascending order based on the indices.*/getResultSet():Jdbc.JdbcResultSet;
/**For documentation of this method, see [
`java.sql.Array#getResultSet(long, int)`](https://docs.oracle.com/javase/6/docs/api/java/sql/Array.html#getResultSet(long,%20int)).
@param index The array index of the first element to retrieve, where the first element has an
    index of 1.
@param count The number of successive SQL array elements to retrieve.
@return A [`JdbcResultSet`](https://developers.google.com/apps-script/reference/jdbc/jdbc-result-set.html) containing up to the specified number of consecutive SQL array
    elements.*/getResultSet(index:Integer,count:Integer):Jdbc.JdbcResultSet;}}const Jdbc:Jdbc;