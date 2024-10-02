interface ContentService{MimeType:ContentService._MimeType;
/**Create a new [`TextOutput`](https://developers.google.com/apps-script/reference/content/text-output.html) object.

```
function doGet() {
  var output = ContentService.createTextOutput();
  output.append("Hello world!");
  return output;
}
```
@return the new TextOutput object.*/createTextOutput():ContentService.TextOutput;
/**Create a new [`TextOutput`](https://developers.google.com/apps-script/reference/content/text-output.html) object that can serve the given content.

```
function doGet() {
  var output = ContentService.createTextOutput("Hello world!");
  return output;
}
```
@param content the content to serve.
@return the new TextOutput object.*/createTextOutput(content:string):ContentService.TextOutput;}module ContentService{interface TextOutput{
/**Appends new content to the content that will be served.
@param addedContent the content to append
@return this TextOutput itself, useful for chaining*/append(addedContent:string):ContentService.TextOutput;
/**Clears the current content.
@return this TextOutput itself, useful for chaining*/clear():ContentService.TextOutput;
/**Tells browsers to download rather than display this content.

Some browsers will ignore this setting. Setting this to null will clear it back to the
default behavior of displaying rather than downloading.
@param filename the filename to tell the browser to use
@return the TextOutput object, useful for chaining*/downloadAsFile(filename:string):ContentService.TextOutput;
/**Gets the content that will be served.
@return the content that will be served*/getContent():string;
/**Returns the file name to download this file as, or null if it should be displayed rather than
downloaded.
@return the file name*/getFileName():string;
/**Get the mime type this content will be served with.
@return the mime type this will be served with*/getMimeType():ContentService.MimeType;
/**Sets the content that will be served.
@param content the content to serve
@return this TextOutput itself, useful for chaining*/setContent(content:string):ContentService.TextOutput;
/**Sets the mime type for content that will be served. The default is plain text.
@param mimeType the mime type
@return this TextOutput itself, useful for chaining*/setMimeType(mimeType:ContentService.MimeType):ContentService.TextOutput;}interface MimeType{}interface _MimeType{
/**CSV Mime Type*/CSV:MimeType;
/**ICAL Mime Type*/ICAL:MimeType;
/**JAVASCRIPT Mime Type*/JAVASCRIPT:MimeType;
/**JSON Mime Type*/JSON:MimeType;
/**TEXT Mime Type*/TEXT:MimeType;
/**VCARD Mime Type*/VCARD:MimeType;}}const ContentService:ContentService;