interface Blob{
/**Returns a copy of this blob.
@return The new copy.*/copyBlob():Blob;
/**Gets all the blobs that are contained within this (possibly composite) blob.
@deprecated
@return The blobs contained within the blob.*/getAllBlobs():Blob[];
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
/**Gets the data stored in this blob.
@return The stored bytes.*/getBytes():Byte[];
/**Gets the content type of the bytes in this blob.
@return The content type of this data, if known, or `null`.*/getContentType():string;
/**Gets the data of this blob as a String with UTF-8 encoding.
@return The data as a string.*/getDataAsString():string;
/**Gets the data of this blob as a string with the specified encoding.
@param charset The charset to use in encoding the data in this blob as a string.
@return The data as a string.*/getDataAsString(charset:string):string;
/**Gets the name of this blob.
@return The name of this data, if known, or `null`.*/getName():string;
/**Returns whether this blob is a Google Workspace file (Sheets, Docs, etc.).
@return `true` if this blob is a Google Workspace file; `false` if not.*/isGoogleType():boolean;
/**Sets the data stored in this blob.
@param data The new data.
@return This blob, for chaining.*/setBytes(data:Byte[]):Blob;
/**Sets the content type of the bytes in this blob.
@param contentType The new contentType.
@return This blob, for chaining.*/setContentType(contentType:string):Blob;
/**Sets the content type of the bytes in this blob based on the file extension. The contentType is
`null` if it cannot be guessed from its extension.
@return This blob, for chaining.*/setContentTypeFromExtension():Blob;
/**Sets the data of this blob from a string with UTF-8 encoding.
@param string The string data.
@return This blob, for chaining.*/setDataFromString(string:string):Blob;
/**Sets the data of this blob from a string with the specified encoding.
@param string The string data.
@param charset The charset to use in interpreting the string as bytes.
@return This blob, for chaining.*/setDataFromString(string:string,charset:string):Blob;
/**Sets the name of this blob.
@param name The new name.
@return This blob, for chaining.*/setName(name:string):Blob;}