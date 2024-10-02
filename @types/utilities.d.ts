interface Utilities{Charset:Utilities._Charset;DigestAlgorithm:_DigestAlgorithm;MacAlgorithm:Utilities._MacAlgorithm;RsaAlgorithm:Utilities._RsaAlgorithm;
/**Decodes a base-64 encoded string into a UTF-8 byte array.

```
// This is the base64 encoded form of "Google グループ"
var base64data = "R29vZ2xlIOOCsOODq+ODvOODlw==";

// This logs:
//     [71, 111, 111, 103, 108, 101, 32, -29, -126, -80,
//      -29, -125, -85, -29, -125, -68, -29, -125, -105]
var decoded = Utilities.base64Decode(base64data);
Logger.log(decoded);

// If we want a String instead of a byte array:
// This logs the original "Google グループ"
Logger.log(Utilities.newBlob(decoded).getDataAsString());
```
@param encoded An array of bytes of data to decode.
@return The raw data represented by the base-64 encoded argument as a byte array.*/base64Decode(encoded:string):Byte[];
/**Decodes a base-64 encoded string into a byte array in a specific character set.

```
// This is the base64 encoded form of "Google グループ"
var base64data = "R29vZ2xlIOOCsOODq+ODvOODlw==";

var decoded = Utilities.base64Decode(base64data, Utilities.Charset.UTF_8);

// This logs:
//     [71, 111, 111, 103, 108, 101, 32, -29, -126, -80,
//      -29, -125, -85, -29, -125, -68, -29, -125, -105]
Logger.log(decoded);

// If we want a String instead of a byte array:
// This logs the original "Google グループ"
Logger.log(Utilities.newBlob(decoded).getDataAsString());
```
@param encoded The string of data to decode.
@param charset A [`Charset`](https://developers.google.com/apps-script/reference/utilities/charset.html) specifying the charset of the input.
@return The raw data represented by the base-64 encoded argument as a byte array.*/base64Decode(encoded:string,charset:Utilities.Charset):Byte[];
/**Decodes a base-64 web-safe encoded string into a UTF-8 byte array.

```
// This is the base64 web-safe encoded form of "Google グループ"
var base64data = "R29vZ2xlIOOCsOODq-ODvOODlw==";

var decoded = Utilities.base64DecodeWebSafe(base64data);

// This logs:
//     [71, 111, 111, 103, 108, 101, 32, -29, -126, -80,
//      -29, -125, -85, -29, -125, -68, -29, -125, -105]
Logger.log(decoded);

// If we want a String instead of a byte array:
// This logs the original "Google グループ"
Logger.log(Utilities.newBlob(decoded).getDataAsString());
```
@param encoded An array of bytes of web-safe data to decode.
@return The raw data represented by the base-64 web-safe encoded argument as a byte array.*/base64DecodeWebSafe(encoded:string):Byte[];
/**Decodes a base-64 web-safe encoded string into a byte array in a specific character set.

```
// This is the base64 web-safe encoded form of "Google グループ"
var base64data = "R29vZ2xlIOOCsOODq-ODvOODlw==";

var decoded = Utilities.base64DecodeWebSafe(base64data, Utilities.Charset.UTF_8);

// This logs:
//     [71, 111, 111, 103, 108, 101, 32, -29, -126, -80,
//      -29, -125, -85, -29, -125, -68, -29, -125, -105]
Logger.log(decoded);

// If we want a String instead of a byte array:
// This logs the original "Google グループ"
Logger.log(Utilities.newBlob(decoded).getDataAsString());
```
@param encoded The string of web-safe data to decode.
@param charset A [`Charset`](https://developers.google.com/apps-script/reference/utilities/charset.html) specifying the charset of the input.
@return The raw data represented by the base-64 web-safe encoded argument as a byte array.*/base64DecodeWebSafe(encoded:string,charset:Utilities.Charset):Byte[];
/**Generates a base-64 encoded string from the given byte array. Base 64 is a common encoding
accepted by a variety of tools that cannot accept binary data. Base 64 is commonly used in
internet protocols such as email, HTTP, or in XML documents.

```
// Instantiates a blob here for clarity
var blob = Utilities.newBlob("A string here");

// Writes 'QSBzdHJpbmcgaGVyZQ==' to the log.
var encoded = Utilities.base64Encode(blob.getBytes());
Logger.log(encoded);
```
@param data A byte[] of data to encode.
@return The base-64 encoded representation of the passed in data.*/base64Encode(data:Byte[]):string;
/**Generates a base-64 encoded string from the given string. Base 64 is a common encoding accepted
by a variety of tools that cannot accept binary data. Base 64 is commonly used in internet
protocols such as email, HTTP, or in XML documents.

```
// Writes 'QSBzdHJpbmcgaGVyZQ==' to the log.
var encoded = Utilities.base64Encode("A string here");
Logger.log(encoded);
```
@param data The string to encode.
@return The base-64 encoded representation of the input string.*/base64Encode(data:string):string;
/**Generates a base-64 encoded string from the given string in a specific character set. A Charset
is a way of encoding characters such that they can be encoded. These are typically done in a
binary format, which can generally be incompatible with certain data transmission protocols. To
make the data compatible, they are generally encoded into base 64, which is a common encoding
accepted by a variety of tools that cannot accept binary data. Base 64 is commonly used in
internet protocols such as email, HTTP, or in XML documents.

```
// "Google Groups" in Katakana (Japanese)
var input = "Google グループ";

// Writes "R29vZ2xlIOOCsOODq+ODvOODlw==" to the log
var encoded = Utilities.base64Encode(input, Utilities.Charset.UTF_8);
Logger.log(encoded);

```
@param data The string of data to encode.
@param charset A `Charset` specifying the charset of the input.
@return The base-64 encoded representation of the input string with the given `Charset`.*/base64Encode(data:string,charset:Utilities.Charset):string;
/**Generates a base-64 web-safe encoded string from the given byte array. Base 64 is a common
encoding accepted by a variety of tools that cannot accept binary data. Base 64 web-safe is
commonly used in internet protocols such as email, HTTP, or in XML documents.

```
// Instantiates a blob here for clarity
var blob = Utilities.newBlob("A string here");

// Writes 'QSBzdHJpbmcgaGVyZQ==' to the log.
var encoded = Utilities.base64EncodeWebSafe(blob.getBytes());
Logger.log(encoded);
```
@param data An array of bytes of data to encode.
@return The base-64 web-safe encoded representation of the passed in data.*/base64EncodeWebSafe(data:Byte[]):string;
/**Generates a base-64 web-safe encoded string from the given string. Base 64 is a common encoding
accepted by a variety of tools that cannot accept binary data. Base 64 web-safe is commonly
used in internet protocols such as email, HTTP, or in XML documents.

```
// Writes 'QSBzdHJpbmcgaGVyZQ==' to the log.
var encoded = Utilities.base64EncodeWebSafe("A string here");
Logger.log(encoded);
```
@param data The string to encode.
@return The base-64 web-safe encoded representation of the input string.*/base64EncodeWebSafe(data:string):string;
/**Generates a base-64 web-safe encoded string from the given string in a specific character set.
A Charset is a way of encoding characters such that they can be encoded. These are typically
done in a binary format, which can generally be incompatible with certain data transmission
protocols. To make the data compatible, they are generally encoded into base 64, which is a
common encoding accepted by a variety of tools that cannot accept binary data. Base 64 web-safe
is commonly used in internet protocols such as email, HTTP, or in XML documents.

```
// "Google Groups" in Katakana (Japanese)
var input = "Google グループ";

// Writes "R29vZ2xlIOOCsOODq-ODvOODlw==" to the log
var encoded = Utilities.base64EncodeWebSafe(input, Utilities.Charset.UTF_8);
Logger.log(encoded);

```
@param data The string of data to encode.
@param charset A `Charset` specifying the charset of the input.
@return The base-64 web-safe encoded representation of the input string with the given `Charset`.*/base64EncodeWebSafe(data:string,charset:Utilities.Charset):string;
/**Compute a digest using the specified algorithm on the specified `Byte[]` value.

```
var input = Utilities.base64Decode("aW5wdXQgdG8gaGFzaA0K") // == base64encode("input to hash")
var digest = Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, input);
Logger.log(digest);
```
@param algorithm A [`DigestAlgorithm`](https://developers.google.com/apps-script/reference/utilities/digest-algorithm.html) to use.
@param value An input string value to compute a digest for.
@return A byte[] representing the output digest.*/computeDigest(algorithm:DigestAlgorithm,value:Byte[]):Byte[];
/**Compute a digest using the specified algorithm on the specified `String` value.

```
var digest = Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, "input to hash");
Logger.log(digest);
```
@param algorithm A [`DigestAlgorithm`](https://developers.google.com/apps-script/reference/utilities/digest-algorithm.html) to use.
@param value An input string value to compute a digest for.
@return A byte[] representing the output digest.*/computeDigest(algorithm:DigestAlgorithm,value:string):Byte[];
/**Compute a digest using the specified algorithm on the specified `String` value with the
given character set.

```
var digest = Utilities.computeDigest(Utilities.DigestAlgorithm.MD5,
                                     "input to hash",
                                     Utilities.Charset.US_ASCII);
Logger.log(digest);
```
@param algorithm A [`DigestAlgorithm`](https://developers.google.com/apps-script/reference/utilities/digest-algorithm.html) to use.
@param value An input string value to compute a digest for.
@param charset A [`Charset`](https://developers.google.com/apps-script/reference/utilities/charset.html) representing the input character set.
@return A byte[] representing the output digest.*/computeDigest(algorithm:DigestAlgorithm,value:string,charset:Utilities.Charset):Byte[];
/**Signs the provided value using HMAC-SHA256 with the given key.

```
// This writes an array of bytes to the log.
var input = Utilities.base64Decode("aW5wdXQgdG8gaGFzaA0K") // == base64encode("input to hash")
var key = Utilities.base64Decode("a2V5"); // == base64encode("key")
var signature = Utilities.computeHmacSha256Signature(input, key);
Logger.log(signature);
```
@param value The input value to generate a hash for.
@param key A key to use to generate the hash with.
@return A byte[] representing the output signature.*/computeHmacSha256Signature(value:Byte[],key:Byte[]):Byte[];
/**Signs the provided value using HMAC-SHA256 with the given key.

```
// This writes an array of bytes to the log.
var signature = Utilities.computeHmacSha256Signature("this is my input",
                                                      "my key - use a stronger one");
Logger.log(signature);
```
@param value The input value to generate a hash for.
@param key A key to use to generate the hash with.
@return A byte[] representing the output signature.*/computeHmacSha256Signature(value:string,key:string):Byte[];
/**Signs the provided value using HMAC-SHA256 with the given key and character set.

```
// This writes an array of bytes to the log.
var signature = Utilities.computeHmacSha256Signature("this is my input",
                                                     "my key - use a stronger one",
                                                     Utilities.Charset.US_ASCII);
Logger.log(signature);
```
@param value The input value to generate a hash for.
@param key A key to use to generate the hash with.
@param charset A [`Charset`](https://developers.google.com/apps-script/reference/utilities/charset.html) representing the input character set.
@return A byte[] representing the output signature.*/computeHmacSha256Signature(value:string,key:string,charset:Utilities.Charset):Byte[];
/**Compute a message authentication code using the specified algorithm on the specified key and
value.

```
// This writes an array of bytes to the log.
var input = Utilities.base64Decode("aW5wdXQgdG8gaGFzaA0K") // == base64encode("input to hash")
var key = Utilities.base64Decode("a2V5"); // == base64encode("key")
var signature = Utilities.computeHmacSignature(Utilities.MacAlgorithm.HMAC_MD5, input, key);
Logger.log(signature);
```
@param algorithm A [`MacAlgorithm`](https://developers.google.com/apps-script/reference/utilities/mac-algorithm.html) algorithm to use to hash the input value.
@param value The input value to generate a hash for.
@param key A key to use to generate the hash with.
@return A byte[] representing the output signature.*/computeHmacSignature(algorithm:Utilities.MacAlgorithm,value:Byte[],key:Byte[]):Byte[];
/**Compute a message authentication code using the specified algorithm on the specified key and
value.

```
// This writes an array of bytes to the log.
var signature = Utilities.computeHmacSignature(Utilities.MacAlgorithm.HMAC_MD5,
                                               "input to hash",
                                               "key");
Logger.log(signature);
```
@param algorithm A [`MacAlgorithm`](https://developers.google.com/apps-script/reference/utilities/mac-algorithm.html) algorithm to use to hash the input value.
@param value The input value to generate a hash for.
@param key A key to use to generate the hash with.
@return A byte[] representing the output signature.*/computeHmacSignature(algorithm:Utilities.MacAlgorithm,value:string,key:string):Byte[];
/**Compute a message authentication code using the specified algorithm on the specified key and
value.

```
// This writes an array of bytes to the log.
var signature = Utilities.computeHmacSignature(Utilities.MacAlgorithm.HMAC_MD5,
                                               "input to hash",
                                               "key",
                                               Utilities.Charset.US_ASCII);
Logger.log(signature);
```
@param algorithm A [`MacAlgorithm`](https://developers.google.com/apps-script/reference/utilities/mac-algorithm.html) algorithm to use to hash the input value.
@param value The input value to generate a hash for.
@param key A key to use to generate the hash with.
@param charset A [`Charset`](https://developers.google.com/apps-script/reference/utilities/charset.html) representing the input character set.
@return A byte[] representing the output signature.*/computeHmacSignature(algorithm:Utilities.MacAlgorithm,value:string,key:string,charset:Utilities.Charset):Byte[];
/**Signs the provided value using RSA-SHA1 with the given key.

```
// This writes an array of bytes to the log.
var signature = Utilities.computeRsaSha1Signature("this is my input",
    "-----BEGIN PRIVATE KEY-----
privatekeyhere
-----END PRIVATE KEY-----
");
Logger.log(signature);
```
@param value The input value to generate a hash for.
@param key A PEM formatted key to use to generate the signature.
@return A byte[] representing the output signature.*/computeRsaSha1Signature(value:string,key:string):Byte[];
/**Signs the provided value using RSA-SHA1 with the given key and charset.

```
// This writes an array of bytes to the log.
var signature = Utilities.computeRsaSha1Signature("this is my input",
    "-----BEGIN PRIVATE KEY-----
privatekeyhere
-----END PRIVATE KEY-----
"
    Utilities.Charset.US_ASCII);
Logger.log(signature);
```
@param value The input value to generate a hash for.
@param key A PEM formatted key to use to generate the signature.
@param charset A [`Charset`](https://developers.google.com/apps-script/reference/utilities/charset.html) representing the input character set.
@return A byte[] representing the output signature.*/computeRsaSha1Signature(value:string,key:string,charset:Utilities.Charset):Byte[];
/**Signs the provided value using RSA-SHA256 with the given key.

```
// This writes an array of bytes to the log.
var signature = Utilities.computeRsaSha256Signature("this is my input",
    "-----BEGIN PRIVATE KEY-----
privatekeyhere
-----END PRIVATE KEY-----
");
Logger.log(signature);
```
@param value The input value to generate a hash for.
@param key A PEM formatted key to use to generate the signature.
@return A byte[] representing the output signature.*/computeRsaSha256Signature(value:string,key:string):Byte[];
/**Signs the provided value using RSA-SHA256 with the given key.

```
// This writes an array of bytes to the log.
var signature = Utilities.computeRsaSha256Signature("this is my input",
    "-----BEGIN PRIVATE KEY-----
privatekeyhere
-----END PRIVATE KEY-----
");
Logger.log(signature);
```
@param value The input value to generate a hash for.
@param key A PEM formatted key to use to generate the signature.
@param charset A [`Charset`](https://developers.google.com/apps-script/reference/utilities/charset.html) representing the input character set.
@return A byte[] representing the output signature.*/computeRsaSha256Signature(value:string,key:string,charset:Utilities.Charset):Byte[];
/**Signs the provided value using the specified RSA algorithm with the given key.

```
// This writes an array of bytes to the log.
var signature = Utilities.computeRsaSignature(Utilities.RsaAlgorithm.RSA_SHA_256,
    "this is my input",
    "-----BEGIN PRIVATE KEY-----
privatekeyhere
-----END PRIVATE KEY-----
");
Logger.log(signature);
```
@param algorithm A [`RsaAlgorithm`](https://developers.google.com/apps-script/reference/utilities/rsa-algorithm.html) algorithm to use to hash the input value.
@param value The input value to generate a hash for.
@param key A PEM formatted key to use to generate the signature.
@return A byte[] representing the output signature.*/computeRsaSignature(algorithm:Utilities.RsaAlgorithm,value:string,key:string):Byte[];
/**Signs the provided value using the specified RSA algorithm with the given key and charset.

```
// This writes an array of bytes to the log.
var signature = Utilities.computeRsaSignature(Utilities.RsaAlgorithm.RSA_SHA_256,
    "this is my input",
    "-----BEGIN PRIVATE KEY-----
privatekeyhere
-----END PRIVATE KEY-----
",
    Utilities.Charset.US_ASCII);
Logger.log(signature);
```
@param algorithm A [`RsaAlgorithm`](https://developers.google.com/apps-script/reference/utilities/rsa-algorithm.html) algorithm to use to hash the input value.
@param value The input value to generate a hash for.
@param key A PEM formatted key to use to generate the signature.
@param charset A [`Charset`](https://developers.google.com/apps-script/reference/utilities/charset.html) representing the input character set.
@return A byte[] representing the output signature.*/computeRsaSignature(algorithm:Utilities.RsaAlgorithm,value:string,key:string,charset:Utilities.Charset):Byte[];
/**Formats date according to specification described in Java SE SimpleDateFormat class. Please
visit the specification at [
http://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html](http://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html)

```
// This formats the date as Greenwich Mean Time in the format
// year-month-dateThour-minute-second.
var formattedDate = Utilities.formatDate(new Date(), "GMT", "yyyy-MM-dd'T'HH:mm:ss'Z'");
Logger.log(formattedDate);
```
@param date A `Date` to format as a String.
@param timeZone The output timezone of the result.
@param format A format per the `SimpleDateFormat` specification.
@return The input date as a formatted string.*/formatDate(date:Date,timeZone:string,format:string):string;
/**Performs `sprintf`-like string formatting using '%'-style format strings.

```
// " 123.456000"
Utilities.formatString('%11.6f', 123.456);

// "   abc"
Utilities.formatString('%6s', 'abc');
```
@param template The format string that controls what gets returned.
@param args Objects to use to fill in the '%' placeholders in the template.
@return The formatted string.*/formatString(template:string,...args:Object[]):string;
/**Get a UUID as a string (equivalent to using the [`java.util.UUID.randomUUID()`](https://docs.oracle.com/javase/7/docs/api/java/util/UUID.html) method). This identifier is not guaranteed to be unique across
all time and space. As such, do not use in situations where guaranteed uniqueness is required.

```
//This assigns a UUID as a temporary ID for a data object you are creating in your script.
var myDataObject = {
   tempId: Utilities.getUuid();
};
```
@return A string representation of the UUID.*/getUuid():string;
/**`gzip`-compresses the provided [`Blob`](https://developers.google.com/apps-script/reference/utilities/../base/blob.html) data and returns it in a new [`Blob`](https://developers.google.com/apps-script/reference/utilities/../base/blob.html) object.

```
var textBlob = Utilities.newBlob("Some text to compress using gzip compression");

// Create the compressed blob.
var gzipBlob = Utilities.gzip(textBlob);
```
@param blob A [`Blob`](https://developers.google.com/apps-script/reference/utilities/../base/blob.html) object to compress using `gzip`.
@return A new [`Blob`](https://developers.google.com/apps-script/reference/utilities/../base/blob.html) containing the compressed data.*/gzip(blob:BlobSource):Blob;
/**`gzip`-compresses the provided [`Blob`](https://developers.google.com/apps-script/reference/utilities/../base/blob.html) data and returns it in a new [`Blob`](https://developers.google.com/apps-script/reference/utilities/../base/blob.html) object. This version of the method allows a filename to be specified.

```
var textBlob = Utilities.newBlob("Some text to compress using gzip compression");

// Create the compressed blob.
var gzipBlob = Utilities.gzip(textBlob, "text.gz");
```
@param blob A [`Blob`](https://developers.google.com/apps-script/reference/utilities/../base/blob.html) object to compress using `gzip`.
@param name The name of the `gzip` file to be created.
@return A new [`Blob`](https://developers.google.com/apps-script/reference/utilities/../base/blob.html) containing the compressed data.*/gzip(blob:BlobSource,name:string):Blob;
/**Return an object corresponding to the JSON string passed in.

```
// Returns the object { name: "John Smith", company: "Virginia Company"}
var obj = Utilities.jsonParse('{"name":"John Smith","company":"Virginia Company"}');
```
@deprecated
@param jsonString A String representation of a JavaScript object to deserialize.
@return A JavaScript object representation of the input.*/jsonParse(jsonString:string):Object;
/**Return a JSON string of the object passed in.

```
// Logs: {"name":"John Smith","company":"Virginia Company"}
var person = { name: "John Smith", company: "Virginia Company" };
var json = Utilities.jsonStringify(person);
Logger.log(json);
```
@deprecated
@param obj the JavaScript object to serialize to JSON
@return a JSON serialized JavaScript object*/jsonStringify(obj:Object):string;
/**Create a new Blob object from a byte array. Blobs are used in many Apps Script APIs that take
binary data as input.

```
// Creates a blob object from a byte array.
const data = [71, 79, 79, 71, 76, 69];
const blob = Utilities.newBlob(data);

// Logs the blob data as a string to the console.
console.log(blob.getDataAsString());
```
@param data The bytes for the blob.
@return The newly created Blob.*/newBlob(data:Byte[]):Blob;
/**Create a new Blob object from a byte array and content type. Blobs are used in many Apps Script
APIs that take binary data as input.

```
// Declares a byte array.
const data = [71, 79, 79, 71, 76, 69];

// Declares the content type of the blob.
const contentType = 'application/json';

// Creates a blob object from the byte array and content type.
const blob = Utilities.newBlob(data, contentType);

// Logs the blob data as a string to the console.
console.log(blob.getDataAsString());

// Logs the content type of the blob to the console.
console.log(blob.getContentType());
```
@param data The bytes for the blob.
@param contentType The content type of the blob - can be `null`.
@return The newly created Blob.*/newBlob(data:Byte[],contentType:string):Blob;
/**Create a new Blob object from a byte array, content type, and name. Blobs are used in many Apps
Script APIs that take binary data as input.

```
// Declares a byte array.
const data = [71, 79, 79, 71, 76, 69];

// Declares the content type of the blob.
const contentType = 'application/json';

// Declares the name of the blob.
const name = 'Example blob';

// Creates a blob object from the byte array, content type, and name.
const blob = Utilities.newBlob(data, contentType, name);

// Logs the blob data as a string to the console.
console.log('Blob data:', blob.getDataAsString());

// Logs the content type of the blob to the console.
console.log('Blob content type:', blob.getContentType());

// Logs the name of the blob to the console.
console.log('Blob name:', blob.getName());
```
@param data The bytes for the blob.
@param contentType - The content type of the blob - can be `null`.
@param name The name of the blob - can be `null`.
@return The newly created Blob.*/newBlob(data:Byte[],contentType:string,name:string):Blob;
/**Create a new Blob object from a string. Blobs are used in many Apps Script APIs that take
binary data as input.

```
// Declares a string for the blob.
const data = 'GOOGLE';

// Creates a blob object from a string.
const blob = Utilities.newBlob(data);

// Logs the blob data in byte array to the console.
console.log('Blob Data:', blob.getBytes());
```
@param data The string for the blob, assumed UTF-8.
@return The newly created Blob.*/newBlob(data:string):Blob;
/**Create a new Blob object from a string and content type. Blobs are used in many Apps Script
APIs that take binary data as input.

```
// Declares a string for the blob.
const data = 'GOOGLE';

// Declares the content type of blob.
const contentType = 'application/json';

// Creates a blob object from the string and content type.
const blob = Utilities.newBlob(data, contentType);

// Logs the blob data in byte array to the console.
console.log('Blob data:', blob.getBytes());

// Logs the content type of the blob to the console.
console.log(blob.getContentType());
```
@param data The string for the blob, assumed UTF-8.
@param contentType The content type of the blob - can be `null`.
@return The newly created Blob.*/newBlob(data:string,contentType:string):Blob;
/**Create a new Blob object from a string, content type, and name. Blobs are used in many Apps
Script APIs that take binary data as input.

```
// Declares a string for the blob.
const data = 'GOOGLE';

// Declares the content type of the blob.
const contentType = 'application/json';

// Declares the name of the blob.
const name = 'Example blob';

// Create a blob object from the string, content type, and name.
const blob = Utilities.newBlob(data, contentType, name);

// Logs the blob data in byte array to the console.
console.log('Blob data:', blob.getBytes());

// Logs the content type of the blob to the console.
console.log('Blob content type:', blob.getContentType());

// Logs the name of the blob to the console.
console.log('Blob name:', blob.getName());
```
@param data The string for the blob, assumed UTF-8.
@param contentType The content type of the blob - can be `null`.
@param name The name of the blob - can be `null`.
@return The newly created Blob.*/newBlob(data:string,contentType:string,name:string):Blob;
/**Returns a tabular 2D array representation of a CSV string.

```
// This creates a two-dimensional array of the format [[a, b, c], [d, e, f]]
var csvString = "a,b,c
d,e,f";
var data = Utilities.parseCsv(csvString);
```
@param csv A string containing a single or multiline data in comma-separated value (CSV)
    format.
@return A two-dimensional array containing the values in the CSV string.*/parseCsv(csv:string):string[][];
/**Returns a tabular 2D array representation of a CSV string using a custom delimiter.

```
// This creates a two-dimensional array of the format [[a, b, c], [d, e, f]]
var csvString = "a\tb\tc
d\te\tf";
var data = Utilities.parseCsv(csvString, '\t');
```
@param csv A string containing a single or multiline data in comma-separated value (CSV)
    format.
@param delimiter Between values.
@return A two-dimensional array containing the values in the CSV string.*/parseCsv(csv:string,delimiter:Char):string[][];
/**Parses the provided string date according to the specification described in the Java Standard
Edition `SimpleDateFormat` class. For more information, see the Java [`SimpleDateFormat` class](http://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html).

```
// This set of parameters parses the given string as a date in Greenwich Mean Time, formatted
// as year-month-dateThour-minute-second.
var date = Utilities.parseDate("1970-01-01 00:00:00", "GMT", "yyyy-MM-dd' 'HH:mm:ss");
Logger.log(date);
```
@param date A string value to parse as a date.
@param timeZone The output time zone.
@param format The date format per the `SimpleDateFormat` specification.
@return The input string as a date.*/parseDate(date:string,timeZone:string,format:string):Date;
/**Sleeps for specified number of milliseconds. Immediately puts the script to sleep for the
specified number of milliseconds. The maximum allowed value is 300000 (or 5 minutes).

```
// Creates a blob object from a string.
const data = 'GOOGLE';
const blob = Utilities.newBlob(data);

// Puts the script to sleep for 10,000 milliseconds (10 seconds).
Utilities.sleep(10000);

// Logs the blob data in byte array to the console.
console.log(blob.getBytes());
```
@param milliseconds The number of milliseconds to sleep.*/sleep(milliseconds:Integer):void;
/**Uncompresses a [`Blob`](https://developers.google.com/apps-script/reference/utilities/../base/blob.html) object and returns a [`Blob`](https://developers.google.com/apps-script/reference/utilities/../base/blob.html) containing the uncompressed
data.

```
var textBlob = Utilities.newBlob("Some text to compress using gzip compression");

// Create the compressed blob.
var gzipBlob = Utilities.gzip(textBlob, "text.gz");

// Uncompress the data.
var uncompressedBlob = Utilities.ungzip(gzipBlob);
```
@param blob The [`Blob`](https://developers.google.com/apps-script/reference/utilities/../base/blob.html) of compressed data.
@return A [`Blob`](https://developers.google.com/apps-script/reference/utilities/../base/blob.html) representing the decompressed data.*/ungzip(blob:BlobSource):Blob;
/**Takes a Blob representing a zip file and returns its component files.

```
var googleFavIconUrl = "https://www.google.com/favicon.ico";
var googleLogoUrl = "https://www.google.com/images/srpr/logo3w.png";

// Fetch the Google favicon.ico file and get the Blob data
var faviconBlob = UrlFetchApp.fetch(googleFavIconUrl).getBlob();
var logoBlob = UrlFetchApp.fetch(googleLogoUrl).getBlob();

// zip now references a blob containing an archive of both faviconBlob and logoBlob
var zip = Utilities.zip([faviconBlob, logoBlob], "google_images.zip");

// This now unzips the blobs
var files = Utilities.unzip(zip);
```
@param blob The zip file blob.
@return A Blob[] representing the component blobs, each named with the full path inside the
    zip.*/unzip(blob:BlobSource):Blob[];
/**Creates a new Blob object that is a zip file containing the data from the Blobs passed in.

```
var googleFavIconUrl = "https://www.google.com/favicon.ico";
var googleLogoUrl = "https://www.google.com/images/srpr/logo3w.png";

// Fetch the Google favicon.ico file and get the Blob data
var faviconBlob = UrlFetchApp.fetch(googleFavIconUrl).getBlob();
var logoBlob = UrlFetchApp.fetch(googleLogoUrl).getBlob();

// zip now references a blob containing an archive of both faviconBlob and logoBlob
var zip = Utilities.zip([faviconBlob, logoBlob]);
```
@param blobs A array of blobs to zip up.
@return A new blob containing the inputs as an archive.*/zip(blobs:BlobSource[]):Blob;
/**Creates a new Blob object that is a zip file containing the data from the Blobs passed in. This
version of the method allows a filename to be specified.

```
var googleFavIconUrl = "https://www.google.com/favicon.ico";
var googleLogoUrl = "https://www.google.com/images/srpr/logo3w.png";

// Fetch the Google favicon.ico file and get the Blob data
var faviconBlob = UrlFetchApp.fetch(googleFavIconUrl).getBlob();
var logoBlob = UrlFetchApp.fetch(googleLogoUrl).getBlob();

// zip now references a blob containing an archive of both faviconBlob and logoBlob
var zip = Utilities.zip([faviconBlob, logoBlob], "google_images.zip");
```
@param blobs A array of blobs to zip up.
@param name The name of the zip file to be created.
@return A new blob containing the inputs as an archive.*/zip(blobs:BlobSource[],name:string):Blob;}module Utilities{interface RsaAlgorithm{}interface _RsaAlgorithm{RSA_SHA_1:RsaAlgorithm;RSA_SHA_256:RsaAlgorithm;}interface MacAlgorithm{}interface _MacAlgorithm{HMAC_MD5:MacAlgorithm;HMAC_SHA_1:MacAlgorithm;HMAC_SHA_256:MacAlgorithm;HMAC_SHA_384:MacAlgorithm;HMAC_SHA_512:MacAlgorithm;}interface Charset{}interface _Charset{US_ASCII:Charset;UTF_8:Charset;}}const Utilities:Utilities;