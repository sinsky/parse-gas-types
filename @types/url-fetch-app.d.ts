interface UrlFetchApp{
/**Makes a request to fetch a URL.

This works over HTTP as well as HTTPS.

```
// The code below logs the HTML code of the Google home page.
var response = UrlFetchApp.fetch("http://www.google.com/");
Logger.log(response.getContentText());
```
@param url The URL to fetch. The URL can have up to 2,082 characters.
@return The HTTP response data.*/fetch(url:string):UrlFetchApp.HTTPResponse;
/**Makes a request to fetch a URL using optional advanced parameters.

This works over HTTP as well as HTTPS.

```
// Make a GET request and log the returned content.
var response = UrlFetchApp.fetch('http://www.google.com/');
Logger.log(response.getContentText());
```

```
// Make a POST request with form data.
var resumeBlob = Utilities.newBlob('Hire me!', 'text/plain', 'resume.txt');
var formData = {
  'name': 'Bob Smith',
  'email': 'bob@example.com',
  'resume': resumeBlob
};
// Because payload is a JavaScript object, it is interpreted as
// as form data. (No need to specify contentType; it automatically
// defaults to either 'application/x-www-form-urlencoded'
// or 'multipart/form-data')
var options = {
  'method' : 'post',
  'payload' : formData
};
UrlFetchApp.fetch('https://httpbin.org/post', options);
```

```
// Make a POST request with a JSON payload.
var data = {
  'name': 'Bob Smith',
  'age': 35,
  'pets': ['fido', 'fluffy']
};
var options = {
  'method' : 'post',
  'contentType': 'application/json',
  // Convert the JavaScript object to a JSON string.
  'payload' : JSON.stringify(data)
};
UrlFetchApp.fetch('https://httpbin.org/post', options);
```
@param url The URL to fetch. The URL can have up to 2,082 characters.
@param params The optional JavaScript object specifying advanced parameters as defined below.
@return The HTTP response data.*/fetch(url:string,params:Object):UrlFetchApp.HTTPResponse;
/**Makes multiple requests to fetch multiple URLs using optional advanced parameters.

This works over HTTP as well as HTTPS.

```
// Make both a POST request with form data, and a GET request.
var resumeBlob = Utilities.newBlob('Hire me!', 'text/plain', 'resume.txt');
var formData = {
  'name': 'Bob Smith',
  'email': 'bob@example.com',
  'resume': resumeBlob
};
// Because payload is a JavaScript object, it is interpreted as
// as form data. (No need to specify contentType; it defaults to either
// 'application/x-www-form-urlencoded' or 'multipart/form-data')
var request1 = {
  'url': 'https://httpbin.org/post',
  'method' : 'post',
  'payload' : formData
};
// A request may also just be a URL.
var request2 = 'https://httpbin.org/get?key=value';
UrlFetchApp.fetchAll([request1, request2]);
```
@param requests An array of either URLs or JavaScript objects specifying requests as defined
    below.
@return An array of HTTP response data from each input request.*/fetchAll(requests:Object[]):UrlFetchApp.HTTPResponse[];
/**Returns the request that is made if the operation was invoked.

This method does not actually issue the request.

```
// The code below logs the value for every key of the returned map.
var response = UrlFetchApp.getRequest("http://www.google.com/");
for(i in response) {
  Logger.log(i + ": " + response[i]);
}
```
@param url The URL to look up. The URL can have up to 2,082 characters.
@return A map of Field Name to Value. The map has at least the following keys: `url`,
    `method`, `contentType`, `payload`, and `headers`.*/getRequest(url:string):Object;
/**Returns the request that is made if the operation were invoked.

This method does not actually issue the request.
@param url The URL to look up. The URL can have up to 2,082 characters.
@param params An optional JavaScript object specifying advanced parameters as defined below.
@return A map of Field Name to Value. The map has at least the following keys: `url`,
    `method`, `contentType`, `payload`, and `headers`.*/getRequest(url:string,params:Object):Object;}module UrlFetchApp{interface HTTPResponse{
/**Returns an attribute/value map of headers for the HTTP response, with headers that have
multiple values returned as arrays.

```
// The code below logs the HTTP headers from the response
// received when fetching the Google home page.
var response = UrlFetchApp.fetch("http://www.google.com/");
Logger.log(response.getAllHeaders());
```
@return a JavaScript key/value map of HTTP headers*/getAllHeaders():Object;
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
/**Gets the raw binary content of an HTTP response.

```
// The code below logs the value of the first byte of the Google home page.
var response = UrlFetchApp.fetch("http://www.google.com/");
Logger.log(response.getContent()[0]);
```
@return the content as a raw binary array*/getContent():Byte[];
/**Gets the content of an HTTP response encoded as a string.

```
// The code below logs the HTML code of the Google home page.
var response = UrlFetchApp.fetch("http://www.google.com/");
Logger.log(response.getContentText());
```
@return the content of the HTTP response, as a string*/getContentText():string;
/**Returns the content of an HTTP response encoded as a string of the given charset.

```
// The code below logs the HTML code of the Google home page with the UTF-8 charset.
var response = UrlFetchApp.fetch("http://www.google.com/");
Logger.log(response.getContentText("UTF-8"));
```
@param charset a string representing the charset to be used for encoding the HTTP response
    content
@return the content of the HTTP response, encoded using the given charset*/getContentText(charset:string):string;
/**Returns an attribute/value map of headers for the HTTP response.

```
// The code below logs the HTTP headers from the response
// received when fetching the Google home page.
var response = UrlFetchApp.fetch("http://www.google.com/");
Logger.log(response.getHeaders());
```
@return a JavaScript key/value map of HTTP headers*/getHeaders():Object;
/**Get the HTTP status code (200 for OK, etc.) of an HTTP response.

```
// The code below logs the HTTP status code from the response received
// when fetching the Google home page.
// It should be 200 if the request succeeded.
var response = UrlFetchApp.fetch("http://www.google.com/");
Logger.log(response.getResponseCode());
```
@return HTTP response code (e.g. 200 for OK)*/getResponseCode():Integer;}}const UrlFetchApp:UrlFetchApp;