interface HtmlService{
/**An enum representing the sandbox modes that can be used for client-side `HtmlService`
scripts.*/SandboxMode:HtmlService._SandboxMode;
/**An enum representing the `X-Frame-Options` modes that can be used for client-side `HtmlService` scripts.*/XFrameOptionsMode:HtmlService._XFrameOptionsMode;
/**Creates a new [`HtmlOutput`](https://developers.google.com/apps-script/reference/html/html-output.html) object that can be returned from the script.

```
var output = HtmlService.createHtmlOutput();
```
@return the new HtmlOutput object*/createHtmlOutput():HtmlService.HtmlOutput;
/**Creates a new [`HtmlOutput`](https://developers.google.com/apps-script/reference/html/html-output.html) object from a [`BlobSource`](https://developers.google.com/apps-script/reference/html/../base/blob-source.html) resource.

```
function createFromBlob(blob) {
  var output = HtmlService.createHtmlOutput(blob);
  return output;
}
```
@param blob the object to get HTML out of
@return the new `HtmlOutput` object*/createHtmlOutput(blob:BlobSource):HtmlService.HtmlOutput;
/**Creates a new [`HtmlOutput`](https://developers.google.com/apps-script/reference/html/html-output.html) object that can be returned from the script.

```
var output = HtmlService.createHtmlOutput('<b>Hello world!</b>');
```
@param html the content to serve
@return the new HtmlOutput object*/createHtmlOutput(html:string):HtmlService.HtmlOutput;
/**Creates a new [`HtmlOutput`](https://developers.google.com/apps-script/reference/html/html-output.html) object from a file in the code editor.

```
var output = HtmlService.createHtmlOutputFromFile('myPage');
```
@param filename the name of the file to use
@return the new `HtmlOutput` object*/createHtmlOutputFromFile(filename:string):HtmlService.HtmlOutput;
/**Creates a new [`HtmlTemplate`](https://developers.google.com/apps-script/reference/html/html-template.html) object from a [`BlobSource`](https://developers.google.com/apps-script/reference/html/../base/blob-source.html) resource.

```
function createFromBlob(blob) {
  var template = HtmlService.createTemplate(blob);
  return output;
}
```
@param blob The object to get HTML out of.
@return the new `HtmlTemplate` object*/createTemplate(blob:BlobSource):HtmlService.HtmlTemplate;
/**Creates a new [`HtmlTemplate`](https://developers.google.com/apps-script/reference/html/html-template.html) object that can be returned from the script.

```
var template = HtmlService.createTemplate('<b>The time is &lt;?= new Date() ?&gt;</b>');
```
@param html the content of the template
@return the new `HtmlTemplate` object*/createTemplate(html:string):HtmlService.HtmlTemplate;
/**Creates a new [`HtmlTemplate`](https://developers.google.com/apps-script/reference/html/html-template.html) object from a file in the code editor.

```
var template = HtmlService.createTemplateFromFile('myTemplate');
```
@param filename the name of the file to use
@return the new `HtmlTemplate` object*/createTemplateFromFile(filename:string):HtmlService.HtmlTemplate;
/**Gets the user-agent string for the current browser. Returns `null` for most script
executions if not used in a web app's `doGet()` or `doPost()` function.
@return the user-agent string*/getUserAgent():string;}module HtmlService{interface XFrameOptionsMode{}interface _XFrameOptionsMode{
/**No `X-Frame-Options` header will be set. This will let any site iframe the page, so the
developer should implement their own protection against clickjacking.*/ALLOWALL:XFrameOptionsMode;
/**Sets the default value for the `X-Frame-Options` header, which preserves normal security
assumptions. If a script does not set an `X-Frame-Options` mode, Apps Script uses this
mode as the default.*/DEFAULT:XFrameOptionsMode;}interface SandboxMode{}interface _SandboxMode{
/**A legacy sandbox mode that emulates ECMAScript 5 strict mode using only the features available
in ECMAScript 3. This mode was the default prior to February 2014.

`EMULATED` was [sunset as of December 10,
2015](/apps-script/guides/support/sunset). All scripts attempting use `EMULATED` will now use `IFRAME` instead.*/EMULATED:SandboxMode;
/**A sandbox mode that uses iframe sandboxing instead of the Caja sandbox technology used by the
`EMULATED` and `NATIVE` modes. This mode is the default for new scripts as of
November 12, 2015 and for all scripts as of July 6, 2016.

This mode imposes many fewer restrictions than the other sandbox modes and runs fastest, but
does not work at all in certain older browsers, including Internet Explorer 9.*/IFRAME:SandboxMode;
/**A sandbox mode that is built on top of ECMAScript 5 strict mode. A sandbox mode built on top of
ECMAScript 5 strict mode. This mode was [sunset as
of July 6, 2016](/apps-script/guides/support/sunset). All scripts now use `IFRAME` mode.*/NATIVE:SandboxMode;}interface HtmlTemplate{
/**Evaluates this template and returns an [`HtmlOutput`](https://developers.google.com/apps-script/reference/html/html-output.html) object. Any properties set on this
`HtmlTemplate` object will be in scope when evaluating. To debug errors in a template,
examine the code using the [`getCode()`](https://developers.google.com/apps-script/reference/html/html-template.html#getCode()) method.

```
// A template which evaluates to whatever is bound to 'foo'.
var template = HtmlService.createTemplate('<?= foo ?>');
template.foo = 'Hello World!';
Logger.log(template.evaluate().getContent());  // will log 'Hello World!'
```
@return an HtmlOutput object*/evaluate():HtmlService.HtmlOutput;
/**Generates a string of JavaScript code, based on the template file, that can be evaluated. This
method produces a string of JavaScript code based on the template file. Calling 

```
eval(<code>)```

 will return a new [`HtmlOutput`](https://developers.google.com/apps-script/reference/html/html-output.html) object with the content of the
template after running all embedded server scripts. The generated code is intended to be
human-readable, and so if you need to debug a template you can call 

```
Logger.log(<code>)```

 to see what was produced.

Evaluating this code will implicitly bind in all variables in the current scope. In general,
it's preferable to use the [`evaluate()`](https://developers.google.com/apps-script/reference/html/html-template.html#evaluate()) method, which takes explicit bindings.

```
var template = HtmlService.createTemplate('<b>The time is &lt;?= new Date() ?&gt;</b>');
Logger.log(template.getCode());
```
@return a string based on the template, which can be evaluated*/getCode():string;
/**Generates a string of JavaScript code that can be evaluated, with each line of the code
containing the original line from the template as a comment. This method produces a string of
JavaScript code based on the template file. Calling `eval(<code>)` will return
a new [`HtmlOutput`](https://developers.google.com/apps-script/reference/html/html-output.html) object with the content of the template after running all embedded
server scripts. The generated code is intended to be human-readable, and so if you need to
debug a template you can call `Logger.log(<code>)` to see what was produced.

Evaluating this code will implicitly bind in all variables in the current scope. In general,
it's preferable to use the [`evaluate()`](https://developers.google.com/apps-script/reference/html/html-template.html#evaluate()) method, which takes explicit bindings.

```
var template = HtmlService.createTemplate('<b>The time is &lt;?= new Date() ?&gt;</b>');
Logger.log(template.getCodeWithComments());
```
@return an string based on the template, which can be evaluated*/getCodeWithComments():string;
/**Returns the unprocessed content of this template.

```
var template = HtmlService.createTemplate('<b>The time is &lt;?= new Date() ?&gt;</b>');
Logger.log(template.getRawContent());
```
@return the template's raw content*/getRawContent():string;}interface HtmlOutputMetaTag{
/**Gets the content of this meta tag.
@return the content of this meta tag.*/getContent():string;
/**Gets the name of this `HtmlOutputMetaTag`.
@return the name of this meta tag.*/getName():string;}interface HtmlOutput{
/**Adds a meta tag to the page. Meta tags included directly in an Apps Script HTML file are
ignored. Only the following meta tags are allowed:

```
<meta name="apple-mobile-web-app-capable" content="..."/>
<meta name="google-site-verification" content="..."/>
<meta name="mobile-web-app-capable" content="..."/>
<meta name="viewport" content="..."/>
```

```
var output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
output.addMetaTag('viewport', 'width=device-width, initial-scale=1');
```
@param name The value of the meta tag's name attribute.
@param content The value of the meta tag's content attribute.
@return This output, for chaining.*/addMetaTag(name:string,content:string):HtmlService.HtmlOutput;
/**Appends new content to the content of this `HtmlOutput`. Use this only for content from a
trusted source, because it is not escaped.

```
// Log "<b>Hello, world!</b><p>Hello again, world.</p>"
var output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
output.append('<p>Hello again, world.</p>');
Logger.log(output.getContent());
```
@param addedContent The content to append.
@return This output, for chaining.*/append(addedContent:string):HtmlService.HtmlOutput;
/**Appends new content to the content of this `HtmlOutput`, using contextual escaping.

This method correctly escapes content based on the current state of the `HtmlOutput`,
so that the result is a safe string with no markup or side affects. Use this instead of using
append whenever you are adding content from an untrusted source, such as from a user, to avoid
accidentally allowing a cross site scripting (XSS) bug where content or markup that you append
causes unexpected code execution.

```
// Log "<b>Hello, world!</b>&lt;p&gt;Hello again, world.&lt;/p&gt;"
var output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
output.appendUntrusted('<p>Hello again, world.</p>');
Logger.log(output.getContent());
```
@param addedContent The content to append.
@return This output, for chaining.*/appendUntrusted(addedContent:string):HtmlService.HtmlOutput;
/**Returns an [`HtmlTemplate`](https://developers.google.com/apps-script/reference/html/html-template.html) backed by this `HtmlOutput`. This method can be used to
build up a template incrementally. Future changes to `HtmlOutput` affect the contents of
the `HtmlTemplate` as well.

```
var output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
var template = output.asTemplate();
```
@return The new `HtmlTemplate`.*/asTemplate():HtmlService.HtmlTemplate;
/**Clears the current content.

```
var output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
output.clear();
```
@return This output, for chaining.*/clear():HtmlService.HtmlOutput;
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
/**Gets the content of this `HtmlOutput`.

```
// Log "<b>Hello, world!</b>"
var output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
Logger.log(output.getContent());
```
@return The content that is served.*/getContent():string;
/**Gets the URL for a favicon link tag added to the page by calling [`setFaviconUrl(iconUrl)`](https://developers.google.com/apps-script/reference/html/html-output.html#setFaviconUrl(String)). Favicon link tags included directly in an Apps Script HTML file are
ignored.

```
var output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
output.setFaviconUrl('http://www.example.com/image.png');
Logger.log(output.getFaviconUrl());
```
@return The URL of the favicon image.*/getFaviconUrl():string;
/**Gets the initial height of the [custom dialog](https://developers.google.com/apps-script/guides/dialogs) in Google
Docs, Sheets, or Forms. If the `HtmlOutput` is published as a web app instead, this
method returns `null`. To resize a dialog that is already open, call [
`google.script.host.setHeight(height)`](https://developers.google.com/apps-script/guides/html/communication#resizing_dialogs_in_google_apps) in client-side code.

```
var output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
output.setHeight(200);
Logger.log(output.getHeight());
```
@return The height, in pixels.*/getHeight():Integer;
/**Gets an array of objects that represent meta tags added to the page by calling [`addMetaTag(name, content)`](https://developers.google.com/apps-script/reference/html/html-output.html#addMetaTag(String,String)). Meta tags included directly in an Apps Script HTML file are
ignored.

```
var output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
output.addMetaTag('viewport', 'width=device-width, initial-scale=1');

var tags = output.getMetaTags();
Logger.log('<meta name="%s" content="%s"/>', tags[0].getName(), tags[0].getContent());
```
@return An array of objects that represent meta tags added to the page by calling [`addMetaTag(name, content)`](https://developers.google.com/apps-script/reference/html/html-output.html#addMetaTag(String,String)).*/getMetaTags():HtmlService.HtmlOutputMetaTag[];
/**Gets the title of the output page. Note that the <title> HTML element is ignored.

```
var output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
Logger.log(output.getTitle());
```
@return The title of the page.*/getTitle():string;
/**Gets the initial width of the [custom dialog](https://developers.google.com/apps-script/guides/dialogs) in Google
Docs, Sheets, or Forms. If the `HtmlOutput` is published as a web app instead, this
method returns `null`. To resize a dialog that is already open, call [
`google.script.host.setWidth(width)`](https://developers.google.com/apps-script/guides/html/communication#resizing_dialogs_in_google_apps) in client-side code.

```
var output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
output.setWidth(200);
Logger.log(output.getWidth());
```
@return The width in pixels.*/getWidth():Integer;
/**Sets the content of this `HtmlOutput`.

```
var output = HtmlService.createHtmlOutput();
output.setContent('<b>Hello, world!</b>');
```
@param content The content to serve.
@return This output, for chaining.*/setContent(content:string):HtmlService.HtmlOutput;
/**Adds a link tag for a favicon to the page. Favicon link tags included directly in an Apps
Script HTML file are ignored.

```
var output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
output.setFaviconUrl('http://www.example.com/image.png');
```
@param iconUrl The URL of the favicon image, with the image extension indicating the image
    type.
@return This output, for chaining.*/setFaviconUrl(iconUrl:string):HtmlService.HtmlOutput;
/**Sets the initial height of the [custom dialog](https://developers.google.com/apps-script/guides/dialogs) in Google
Docs, Sheets, or Forms. If the `HtmlOutput` is published as a web app instead, this
method has no effect. To resize a dialog that is already open, call [
`google.script.host.setHeight(height)`](https://developers.google.com/apps-script/guides/html/communication#resizing_dialogs_in_google_apps) in client-side code.

```
var output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
output.setHeight(200);
```
@param height The new height in pixels; `null` results in a default value.
@return This output, for chaining.*/setHeight(height:Integer):HtmlService.HtmlOutput;
/**This method now has no effect — previously it set the [`sandbox
mode`](https://developers.google.com/apps-script/reference/html/sandbox-mode.html) used for client-side scripts. To protect users from being served malicious HTML or
JavaScript, client-side code served from HTML service executes in a security sandbox that
imposes restrictions on the code. Originally this method allowed script authors to choose
between different versions of the sandbox, but now all scripts now use `IFRAME` mode
regardless of what sandbox mode is set. For more information, see the [guide to restrictions in HTML service](/apps-script/guides/html/restrictions).

The `IFRAME` mode imposes many fewer restrictions than the other sandbox modes and
runs fastest, but does not work at all in certain older browsers, including Internet Explorer
9. The sandbox mode can be read in a client-side script by inspecting `google.script.sandbox.mode`. Note that this property returns the actual mode on the client,
which may differ from the mode requested on the server if the requested mode is not supported
in the user's browser.

```
<!-- Read the sandbox mode (in a client-side script). -->
<script>
  alert(google.script.sandbox.mode);
</script>
```
@param mode The sandbox mode to use.
@return This output, for chaining.*/setSandboxMode(mode:HtmlService.SandboxMode):HtmlService.HtmlOutput;
/**Sets the title of the output page. For web apps, this is the title of the entire page, while
for `HtmlOutput` shown in Google Sheets, this is the dialog title.

```
var output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
output.setTitle('My First Page');
```
@param title The new title.
@return This output, for chaining.*/setTitle(title:string):HtmlService.HtmlOutput;
/**Sets the initial width of a [custom dialog](https://developers.google.com/apps-script/guides/dialogs) in Google
Docs, Sheets, or Forms. If the `HtmlOutput` is published as a web app instead, this
method has no effect. To resize a dialog that is already open, call [
`google.script.host.setWidth(width)`](https://developers.google.com/apps-script/guides/html/communication#resizing_dialogs_in_google_apps) in client-side code.

```
var output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
output.setWidth(200);
```
@param width The new width in pixels; `null` results in a default value.
@return This output, for chaining.*/setWidth(width:Integer):HtmlService.HtmlOutput;
/**Sets the state of the page's `X-Frame-Options` header, which controls clickjacking
prevention.

Setting [`XFrameOptionsMode.ALLOWALL`](https://developers.google.com/apps-script/reference/html/x-frame-options-mode.html#ALLOWALL) lets any site iframe the page, so the
developer should implement their own protection against clickjacking.

If a script does not set an `X-Frame-Options` mode, Apps Script uses [`XFrameOptionsMode.DEFAULT`](https://developers.google.com/apps-script/reference/html/x-frame-options-mode.html#DEFAULT) mode as the default.

```
// Serve HTML with no X-Frame-Options header (in Apps Script server-side code).
var output = HtmlService.createHtmlOutput('<b>Hello, world!</b>');
output.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
```
@param mode The XFrame options mode to set.
@return This output, for chaining.*/setXFrameOptionsMode(mode:HtmlService.XFrameOptionsMode):HtmlService.HtmlOutput;}}const HtmlService:HtmlService;