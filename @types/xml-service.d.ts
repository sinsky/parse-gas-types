interface XmlService {
  /**An enumeration representing the types of XML content nodes.*/ ContentTypes: XmlService._ContentType;
  /**Creates an unattached [`CDATASection`](https://developers.google.com/apps-script/reference/xml-service/cdata.html) node with the given value.
@param text the value to set
@return the newly created `CDATASection` node*/ createCdata(
    text: string,
  ): XmlService.Cdata;
  /**Creates an unattached [`Comment`](https://developers.google.com/apps-script/reference/xml-service/comment.html) node with the given value.
@param text the value to set
@return the newly created `Comment` node*/ createComment(
    text: string,
  ): XmlService.Comment;
  /**Creates an unattached [`DocumentType`](https://developers.google.com/apps-script/reference/xml-service/doc-type.html) node for the root [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node
with the given name.
@param elementName the name of the root `Element` node to specify in the `DocType`
    declaration
@return the newly created `DocumentType` node*/ createDocType(
    elementName: string,
  ): XmlService.DocType;
  /**Creates an unattached [`DocumentType`](https://developers.google.com/apps-script/reference/xml-service/doc-type.html) node for the root [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node
with the given name, and the given system ID for the external subset data.
@param elementName the name of the root `Element` node to specify in the `DocType`
    declaration
@param systemId the system ID of the external subset data to set
@return the newly created `DocumentType` node*/ createDocType(
    elementName: string,
    systemId: string,
  ): XmlService.DocType;
  /**Creates an unattached [`DocumentType`](https://developers.google.com/apps-script/reference/xml-service/doc-type.html) node for the root [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node
with the given name, and the given public ID and system ID for the external subset data.
@param elementName the name of the root `Element` node to specify in the `DocType`
    declaration
@param publicId the public ID of the external subset data to set
@param systemId the system ID of the external subset data to set
@return the newly created `DocumentType` node*/ createDocType(
    elementName: string,
    publicId: string,
    systemId: string,
  ): XmlService.DocType;
  /**Creates an empty XML document.
@return the newly created document*/ createDocument(): XmlService.Document;
  /**Creates an XML document with the given root [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node.
@param rootElement the root `Element` node to set
@return the newly created document*/ createDocument(
    rootElement: XmlService.Element,
  ): XmlService.Document;
  /**Creates an unattached [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node with the given local name and no namespace.
@param name the local name to set
@return the newly created `Element` node*/ createElement(
    name: string,
  ): XmlService.Element;
  /**Creates an unattached [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node with the given local name and namespace.
@param name the local name to set
@param namespace the namespace to set
@return the newly created `Element` node*/ createElement(
    name: string,
    namespace: XmlService.Namespace,
  ): XmlService.Element;
  /**Creates an unattached [`Text`](https://developers.google.com/apps-script/reference/xml-service/text.html) node with the given value.
@param text the value to set
@return the newly created `Text` node*/ createText(
    text: string,
  ): XmlService.Text;
  /**Creates a [`Format`](https://developers.google.com/apps-script/reference/xml-service/format.html) object for outputting a compact XML document. The formatter
defaults to `UTF-8` encoding, no indentation, and no additional line breaks, but includes
the XML declaration and its encoding.

```
// Log an XML document in compact form.
var xml = '<root><a><b>Text!</b><b>More text!</b></a></root>';
var document = XmlService.parse(xml);
var output = XmlService.getCompactFormat()
    .format(document);
Logger.log(output);
```
@return the newly created formatter*/ getCompactFormat(): XmlService.Format;
  /**Creates a [`Namespace`](https://developers.google.com/apps-script/reference/xml-service/namespace.html) with the given URI.
@param uri the URI for the namespace
@return the newly created namespace*/ getNamespace(
    uri: string,
  ): XmlService.Namespace;
  /**Creates a [`Namespace`](https://developers.google.com/apps-script/reference/xml-service/namespace.html) with the given prefix and URI.
@param prefix the prefix for the namespace
@param uri the URI for the namespace
@return the newly created namespace*/ getNamespace(
    prefix: string,
    uri: string,
  ): XmlService.Namespace;
  /**Creates a [`Namespace`](https://developers.google.com/apps-script/reference/xml-service/namespace.html) that represents the absence of a real namespace.
@return the newly created namespace*/ getNoNamespace(): XmlService.Namespace;
  /**Creates a [`Format`](https://developers.google.com/apps-script/reference/xml-service/format.html) object for outputting a human-readable XML document. The formatter
defaults to `UTF-8` encoding, two-space indentation, `\r
` line separators after
every node, and includes the XML declaration and its encoding.

```
// Log an XML document in human-readable form.
var xml = '<root><a><b>Text!</b><b>More text!</b></a></root>';
var document = XmlService.parse(xml);
var output = XmlService.getPrettyFormat()
    .format(document);
Logger.log(output);
```
@return the newly created formatter*/ getPrettyFormat(): XmlService.Format;
  /**Creates a [`Format`](https://developers.google.com/apps-script/reference/xml-service/format.html) object for outputting a raw XML document. The formatter defaults to
`UTF-8` encoding, no indentation and no line breaks other than those provided in the XML
document itself, and includes the XML declaration and its encoding.

```
// Log an XML document in raw form.
var xml = '<root><a><b>Text!</b><b>More text!</b></a></root>';
var document = XmlService.parse(xml);
var output = XmlService.getRawFormat()
    .format(document);
Logger.log(output);
```
@return the newly created formatter*/ getRawFormat(): XmlService.Format;
  /**Creates a [`Namespace`](https://developers.google.com/apps-script/reference/xml-service/namespace.html) with the standard `xml` prefix.
@return the newly created namespace*/ getXmlNamespace(): XmlService.Namespace;
  /**Creates an [`Document`](https://developers.google.com/apps-script/reference/xml-service/document.html) from the given XML, without validating the XML.

```
var xml = '<root><a><b>Text!</b><b>More text!</b></a></root>';
var doc = XmlService.parse(xml);
```
@param xml the XML to parse
@return the newly created document*/ parse(xml: string): XmlService.Document;
}
module XmlService {
  interface Text {
    /**Appends the given text to any content that already exists in the node.
@param text the text to append to the node
@return the `Text` node, for chaining*/ append(text: string): XmlService.Text;
    /**Detaches the node from its parent [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node. If the node does not have a parent,
this method has no effect.
@return the detached node*/ detach(): XmlService.Content;
    /**Gets the node's parent [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node. If the node does not have a parent, this method
returns `null`.
@return the parent `Element` node*/ getParentElement(): XmlService.Element;
    /**Gets the text value of the `Text` node.
@return the text value of the `Text` node*/ getText(): string;
    /**Gets the text value of all nodes that are direct or indirect children of the node, in the order
they appear in the document.
@return the text value of all nodes that are direct or indirect children of the node*/ getValue(): string;
    /**Sets the text value of the `Text` node.
@param text the text value to set
@return the `Text` node, for chaining*/ setText(text: string): XmlService.Text;
  }
  interface ProcessingInstruction {
    /**Detaches the node from its parent [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node. If the node does not have a parent,
this method has no effect.
@return the detached node*/ detach(): XmlService.Content;
    /**Gets the raw data for every instruction in the `ProcessingInstruction` node.
@return the raw data for every instruction in the `ProcessingInstruction` node*/ getData(): string;
    /**Gets the node's parent [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node. If the node does not have a parent, this method
returns `null`.
@return the parent `Element` node*/ getParentElement(): XmlService.Element;
    /**Gets the target for the `ProcessingInstruction` node.
@return the target for the `ProcessingInstruction` node*/ getTarget(): string;
    /**Gets the text value of all nodes that are direct or indirect children of the node, in the order
they appear in the document.
@return the text value of all nodes that are direct or indirect children of the node*/ getValue(): string;
  }
  interface Namespace {
    /**Gets the prefix for the namespace.
@return the prefix for the namespace*/ getPrefix(): string;
    /**Gets the URI for the namespace.
@return the URI for the namespace*/ getURI(): string;
  }
  interface Format {
    /**Outputs the given [`Document`](https://developers.google.com/apps-script/reference/xml-service/document.html) as a formatted string.
@param document the document to format
@return the formatted document*/ format(document: XmlService.Document): string;
    /**Outputs the given [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node as a formatted string.
@param element the element to format
@return the formatted element*/ format(element: XmlService.Element): string;
    /**Sets the character encoding that the formatter should use. The `encoding` argument must
be an accepted XML encoding like `ISO-8859-1`, `US-ASCII`, `UTF-8`, or `UTF-16`.

```
// Log an XML document with encoding that does not support certain special characters.
var xml = '<root><a><b>ಠ‿ಠ</b><b>ಠ‿ಠ</b></a></root>';
var document = XmlService.parse(xml);
var output = XmlService.getRawFormat()
    .setEncoding('ISO-8859-1')
    .format(document);
Logger.log(output);
```
@param encoding the encoding to use
@return the formatter, for chaining*/ setEncoding(
      encoding: string,
    ): XmlService.Format;
    /**Sets the string used to indent child nodes relative to their parents. Setting an indent other
than `null` will cause the formatter to insert a line break after every node.

```
// Log an XML document with each child node indented four spaces.
var xml = '<root><a><b>Text!</b><b>More text!</b></a></root>';
var document = XmlService.parse(xml);
var output = XmlService.getCompactFormat()
    .setIndent('    ')
    .format(document);
Logger.log(output);
```
@param indent the indent to use
@return the formatter, for chaining*/ setIndent(
      indent: string,
    ): XmlService.Format;
    /**Sets the string to insert whenever the formatter would normally insert a line break. The three
pre-defined formatters have different conditions under which they insert a line break. The
default line separator is `\r
`.

```
// Log an XML document with several spaces and a pipe character in place of line breaks.
var xml = '<root><a><b>Text!</b><b>More text!</b></a></root>';
var document = XmlService.parse(xml);
var output = XmlService.getRawFormat()
    .setLineSeparator(' | ')
    .format(document);
Logger.log(output);
```
@param separator the separator to use
@return the formatter, for chaining*/ setLineSeparator(
      separator: string,
    ): XmlService.Format;
    /**Sets whether the formatter should omit the XML declaration, such as `<?xml version="1.0"
encoding="UTF-8"?>`.
@param omitDeclaration `true` to omit the XML declaration; `false` to include it
@return the formatter, for chaining*/ setOmitDeclaration(
      omitDeclaration: boolean,
    ): XmlService.Format;
    /**Sets whether the formatter should omit the encoding in the XML declaration, such as the
encoding field in `<?xml version="1.0" encoding="UTF-8"?>`.
@param omitEncoding `true` to omit the encoding in the XML declaration; `false` to
    include it
@return the formatter, for chaining*/ setOmitEncoding(
      omitEncoding: boolean,
    ): XmlService.Format;
  }
  interface EntityRef {
    /**Detaches the node from its parent [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node. If the node does not have a parent,
this method has no effect.
@return the detached node*/ detach(): XmlService.Content;
    /**Gets the name of the `EntityReference` node.
@return the name of the `EntityReference` node*/ getName(): string;
    /**Gets the node's parent [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node. If the node does not have a parent, this method
returns `null`.
@return the parent `Element` node*/ getParentElement(): XmlService.Element;
    /**Gets the public ID of the `EntityReference` node. If the node does not have a public ID,
this method returns `null`.
@return the public ID of the `EntityReference` node, or `null` if it has none*/ getPublicId(): string;
    /**Gets the system ID of the `EntityReference` node. If the node does not have a system ID,
this method returns `null`.
@return the system ID of the `EntityReference` node, or `null` if it has none*/ getSystemId(): string;
    /**Gets the text value of all nodes that are direct or indirect children of the node, in the order
they appear in the document.
@return the text value of all nodes that are direct or indirect children of the node*/ getValue(): string;
    /**Sets the name of the `EntityReference` node.
@param name the name to set
@return the `EntityReference` node, for chaining*/ setName(
      name: string,
    ): XmlService.EntityRef;
    /**Sets the public ID of the `EntityReference` node.
@param id the public ID to set
@return the `EntityReference` node, for chaining*/ setPublicId(
      id: string,
    ): XmlService.EntityRef;
    /**Sets the system ID of the `EntityReference` node.
@param id the system ID to set
@return the `EntityReference` node, for chaining*/ setSystemId(
      id: string,
    ): XmlService.EntityRef;
  }
  interface Element {
    /**Inserts the given node at the given index among all nodes that are immediate children of the
`Element` node. The `content` argument can be a [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) object or any
node object that corresponds to a type listed in [`ContentType`](https://developers.google.com/apps-script/reference/xml-service/content-type.html).
@param index the index at which to insert the node among all nodes that are immediate children
    of the `Element` node
@param content the node to insert
@return the `Element` node, for chaining*/ addContent(
      index: Integer,
      content: XmlService.Content,
    ): XmlService.Element;
    /**Appends the given node as the last child of the `Element` node. The `content`
argument can be a [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) object or any node object that corresponds to a type
listed in [`ContentType`](https://developers.google.com/apps-script/reference/xml-service/content-type.html).
@param content the node to append
@return the `Element` node, for chaining*/ addContent(
      content: XmlService.Content,
    ): XmlService.Element;
    /**Creates unattached copies of all nodes that are immediate children of the {@code Element} node.
@return an array of unattached copies of all nodes that are immediate children of the
    {@code Element} node*/ cloneContent(): XmlService.Content[];
    /**Detaches the node from its parent [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node. If the node does not have a parent,
this method has no effect.
@return the detached node*/ detach(): XmlService.Content;
    /**Gets all nodes that are immediate children of the {@code Element} node.
@return an array of all nodes that are immediate children of the {@code Element} node*/ getAllContent(): XmlService.Content[];
    /**Gets the attribute for this `Element` node with the given name and no namespace. If there
is no such attribute, this method returns `null`.
@param name the name of the attribute
@return the attribute, or `null` if there is no attribute with the given name and no
    namespace*/ getAttribute(name: string): XmlService.Attribute;
    /**Gets the attribute for this `Element` node with the given name and namespace. If there is
no such node, this method returns `null`.
@param name the name of the attribute
@param namespace the namespace of the attribute
@return the attribute, or `null` if there is no attribute with the given name and
    namespace*/ getAttribute(
      name: string,
      namespace: XmlService.Namespace,
    ): XmlService.Attribute;
    /**Gets all attributes for this `Element` node, in the order they appear in the document.
@return an array of all attributes for this `Element` node*/ getAttributes(): XmlService.Attribute[];
    /**Gets the first `Element` node with the given name and no namespace that is an immediate
child of this `Element` node. If there is no such node, this method returns `null`.
@param name the name of the child `Element` node
@return the `Element` node, or `null` if there is no immediate child `Element` node with the given name and no namespace*/ getChild(
      name: string,
    ): XmlService.Element;
    /**Gets the first `Element` node with the given name and namespace that is an immediate
child of this `Element` node. If there is no such node, this method returns `null`.
@param name the name of the child `Element` node
@param namespace the namespace of the child `Element` node
@return the `Element` node, or `null` if there is no immediate child `Element` node with the given name and namespace*/ getChild(
      name: string,
      namespace: XmlService.Namespace,
    ): XmlService.Element;
    /**Gets the text value of the node with the given name and no namespace, if the node is an
immediate child of the `Element` node. If there is no such node, this method returns
`null`.
@param name the name of the child node
@return the text value of the child node, or `null` if there is no immediate child node
    with the given name and no namespace*/ getChildText(name: string): string;
    /**Gets the text value of the node with the given name and namespace, if the node is an immediate
child of the `Element` node. If there is no such node, this method returns `null`.
@param name the name of the child node
@param namespace the namespace of the child node
@return the text value of the child node, or `null` if there is no immediate child node
    with the given name and namespace*/ getChildText(
      name: string,
      namespace: XmlService.Namespace,
    ): string;
    /**Gets all `Element` nodes that are immediate children of this `Element` node, in the
order they appear in the document.
@return an array of all `Element` nodes that are immediate children of this `Element` node*/ getChildren(): XmlService.Element[];
    /**Gets all `Element` nodes with the given name and no namespace that are immediate children
of this `Element` node, in the order they appear in the document.
@param name the name of the child `Element` nodes
@return an array of all `Element` nodes with the given name and no namespace that are
    immediate children of this `Element` node*/ getChildren(
      name: string,
    ): XmlService.Element[];
    /**Gets all `Element` nodes with the given name and namespace that are immediate children of
this `Element` node, in the order they appear in the document.
@param name the name of the child `Element` nodes
@param namespace the namespace of the child `Element` nodes
@return an array of all `Element` nodes with the given name and namespace that are
    immediate children of this `Element` node*/ getChildren(
      name: string,
      namespace: XmlService.Namespace,
    ): XmlService.Element[];
    /**Gets the node at the given index among all nodes that are immediate children of the
{@code Element} node. If there is no node at the given index, this method returns `null`.
@param index the index for the node among all nodes that are immediate children of the
    {@code Element} node
@return the node, or `null` if there is no node at the given index*/ getContent(
      index: Integer,
    ): XmlService.Content;
    /**Gets the number of nodes that are immediate children of the {@code Element} node.
@return the number of nodes that are immediate children of the {@code Element} node*/ getContentSize(): Integer;
    /**Gets all nodes that are direct or indirect children of the {@code Element} node, in the order they
appear in the document.
@return an array of all nodes that are direct or indirect children of the {@code Element} node*/ getDescendants(): XmlService.Content[];
    /**Gets the XML document that contains the {@code Element} node.
@return the document that contains the {@code Element} node*/ getDocument(): XmlService.Document;
    /**Gets the local name of the `Element` node. If the node has a namespace prefix, use [`getQualifiedName()`](https://developers.google.com/apps-script/reference/xml-service/element.html#getQualifiedName()) or [`getNamespace()`](https://developers.google.com/apps-script/reference/xml-service/element.html#getNamespace()).[`getPrefix()`](https://developers.google.com/apps-script/reference/xml-service/namespace.html#getPrefix()) to
get the prefix.
@return the local name of the `Element` node*/ getName(): string;
    /**Gets the namespace for the `Element` node.
@return the namespace for the `Element` node*/ getNamespace(): XmlService.Namespace;
    /**Gets the namespace with the given prefix for the `Element` node.
@param prefix the prefix for the namespace
@return the namespace with the given prefix for the `Element` node*/ getNamespace(
      prefix: string,
    ): XmlService.Namespace;
    /**Gets the node's parent [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node. If the node does not have a parent, this method
returns `null`.
@return the parent `Element` node*/ getParentElement(): XmlService.Element;
    /**Gets the local name and namespace prefix of the `Element` node, in the form `[namespacePrefix]:[localName]`. If the node does not have a namespace prefix, use [`getName()`](https://developers.google.com/apps-script/reference/xml-service/element.html#getName()).
@return the local name and namespace prefix of the `Element` node, in the form `[namespacePrefix]:[localName]`*/ getQualifiedName(): string;
    /**Gets the text value of the `Element` node.
@return the text value of the `Element` node*/ getText(): string;
    /**Gets the text value of all nodes that are direct or indirect children of the node, in the order
they appear in the document.
@return the text value of all nodes that are direct or indirect children of the node*/ getValue(): string;
    /**Determines whether this `Element` node is a direct or indirect parent of a given `Element` node.
@param other the other `Element` node
@return `true` if this `Element` node is a direct or indirect parent of the given
    `Element` node; `false` if not*/ isAncestorOf(
      other: XmlService.Element,
    ): boolean;
    /**Determines whether the `Element` node is the document's root node.
@return `true` if the `Element` node is the document's root node; `false` if
    not*/ isRootElement(): boolean;
    /**Removes the attribute for this `Element` node with the given name and no namespace, if
such an attribute exists.
@param attributeName the name of the attribute
@return `true` if the attribute existed and was removed; `false` if not*/ removeAttribute(
      attributeName: string,
    ): boolean;
    /**Removes the attribute for this `Element` node with the given name and namespace, if such
an attribute exists.
@param attributeName the name of the attribute
@param namespace the namespace of the attribute
@return `true` if the attribute existed and was removed; `false` if not*/ removeAttribute(
      attributeName: string,
      namespace: XmlService.Namespace,
    ): boolean;
    /**Removes the given attribute for this `Element` node, if such an attribute exists.
@param attribute the attribute
@return `true` if the attribute existed and was removed; `false` if not*/ removeAttribute(
      attribute: XmlService.Attribute,
    ): boolean;
    /**Removes all nodes that are immediate children of the {@code Element} node.
@return an array of all nodes that were immediate children of the {@code Element} node before they
    were removed*/ removeContent(): XmlService.Content[];
    /**Removes the node at the given index among all nodes that are immediate children of the
{@code Element} node. If there is no node at the given index, this method returns `null`.
@param index the index for the node among all nodes that are immediate children of the
    {@code Element} node
@return the node that was removed, or `null` if there is no node at the given index*/ removeContent(
      index: Integer,
    ): XmlService.Content;
    /**Removes the given node, if the node is an immediate child of the {@code Element} node. The `content` argument can be a [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) object or any node object that corresponds to a
type listed in [`ContentType`](https://developers.google.com/apps-script/reference/xml-service/content-type.html).
@param content the node to remove
@return `true` if the node was an immediate child and was removed; `false` if not*/ removeContent(
      content: XmlService.Content,
    ): boolean;
    /**Sets the attribute for this `Element` node with the given name, value, and no namespace.
@param name the name of the attribute to set
@param value the value of the attribute to set
@return the `Element` node, for chaining*/ setAttribute(
      name: string,
      value: string,
    ): XmlService.Element;
    /**Sets the attribute for this `Element` node with the given name, value, and namespace.
@param name the name of the attribute to set
@param value the value of the attribute to set
@param namespace the namespace of the attribute to set
@return the `Element` node, for chaining*/ setAttribute(
      name: string,
      value: string,
      namespace: XmlService.Namespace,
    ): XmlService.Element;
    /**Sets the given attribute for this `Element` node.
@param attribute the attribute to set
@return the `Element` node, for chaining*/ setAttribute(
      attribute: XmlService.Attribute,
    ): XmlService.Element;
    /**Sets the local name of the `Element` node. To set a namespace prefix for the node, use
[`setNamespace(namespace)`](https://developers.google.com/apps-script/reference/xml-service/element.html#setNamespace(Namespace)) in conjunction with [`XmlService.getNamespace(prefix, uri)`](https://developers.google.com/apps-script/reference/xml-service/xml-service.html#getNamespace(String,String)).
@param name the local name to set
@return the `Element` node, for chaining*/ setName(
      name: string,
    ): XmlService.Element;
    /**Sets the namespace for the `Element` node.
@param namespace the namespace to set
@return the `Element` node, for chaining*/ setNamespace(
      namespace: XmlService.Namespace,
    ): XmlService.Element;
    /**Sets the text value of the `Element` node. If the node already contains a text value or
any child nodes, this method overwrites the old content. To append or insert content instead,
use [`addContent(content)`](https://developers.google.com/apps-script/reference/xml-service/element.html#addContent(Content)) or [`addContent(index, content)`](https://developers.google.com/apps-script/reference/xml-service/element.html#addContent(Integer,Content)).
@param text the text to set
@return the `Element` node, for chaining*/ setText(
      text: string,
    ): XmlService.Element;
  }
  interface Document {
    /**Inserts the given node at the given index among all nodes that are immediate children of the
document. The `content` argument can be a [`Content`](https://developers.google.com/apps-script/reference/xml-service/content.html) object or any node object
that corresponds to a type listed in [`ContentType`](https://developers.google.com/apps-script/reference/xml-service/content-type.html). Note, however, that a document
can only have one child [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node, which is implicitly the root `Element`
node.
@param index the index at which to insert the node among all nodes that are immediate children
    of the document
@param content the node to insert
@return the document, for chaining*/ addContent(
      index: Integer,
      content: XmlService.Content,
    ): XmlService.Document;
    /**Appends the given node to the end of the document. The `content` argument can be a [`Content`](https://developers.google.com/apps-script/reference/xml-service/content.html) object or any node object that corresponds to a type listed in [`ContentType`](https://developers.google.com/apps-script/reference/xml-service/content-type.html). Note, however, that a document can only have one child [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html)
node, which is implicitly the root `Element` node.
@param content the node to append
@return the document, for chaining*/ addContent(
      content: XmlService.Content,
    ): XmlService.Document;
    /**Creates unattached copies of all nodes that are immediate children of the document.
@return an array of unattached copies of all nodes that are immediate children of the
    document*/ cloneContent(): XmlService.Content[];
    /**Detaches and returns the document's root [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node. If the document does not have
a root `Element` node, this method returns `null`.
@return the detached `Element` node, or `null` if the document does not have a root
    `Element` node*/ detachRootElement(): XmlService.Element;
    /**Gets all nodes that are immediate children of the document.
@return an array of all nodes that are immediate children of the document*/ getAllContent(): XmlService.Content[];
    /**Gets the node at the given index among all nodes that are immediate children of the
document. If there is no node at the given index, this method returns `null`.
@param index the index for the node among all nodes that are immediate children of the
    document
@return the node, or `null` if there is no node at the given index*/ getContent(
      index: Integer,
    ): XmlService.Content;
    /**Gets the number of nodes that are immediate children of the document.
@return the number of nodes that are immediate children of the document*/ getContentSize(): Integer;
    /**Gets all nodes that are direct or indirect children of the document, in the order they
appear in the document.
@return an array of all nodes that are direct or indirect children of the document*/ getDescendants(): XmlService.Content[];
    /**Gets the document's [`DocType`](https://developers.google.com/apps-script/reference/xml-service/doc-type.html) declaration. If the document does not have a `DocumentType` node, this method returns `null`.
@return the `DocumentType` node, or `null` if the document does not have a `DocumentType` node*/ getDocType(): XmlService.DocType;
    /**Gets the document's root [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node. If the document does not have a root `Element` node, this method returns `null`.
@return the root `Element` node, or `null` if the document does not have a root
    `Element` node*/ getRootElement(): XmlService.Element;
    /**Determines whether the document has a root [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node.
@return `true` if the document has a root `Element` node; `false` if not*/ hasRootElement(): boolean;
    /**Removes all nodes that are immediate children of the document.
@return an array of all nodes that were immediate children of the document before they
    were removed*/ removeContent(): XmlService.Content[];
    /**Removes the node at the given index among all nodes that are immediate children of the
document. If there is no node at the given index, this method returns `null`.
@param index the index for the node among all nodes that are immediate children of the
    document
@return the node that was removed, or `null` if there is no node at the given index*/ removeContent(
      index: Integer,
    ): XmlService.Content;
    /**Removes the given node, if the node is an immediate child of the document. The `content` argument can be a [`Content`](https://developers.google.com/apps-script/reference/xml-service/content.html) object or any node object that corresponds to a
type listed in [`ContentType`](https://developers.google.com/apps-script/reference/xml-service/content-type.html).
@param content the node to remove
@return `true` if the node was an immediate child and was removed; `false` if not*/ removeContent(
      content: XmlService.Content,
    ): boolean;
    /**Sets the document's [`DocType`](https://developers.google.com/apps-script/reference/xml-service/doc-type.html) declaration. If the document already has a different
`DocType` node, this method overwrites the old node. This method throws an exception if
the document already contains the same `DocType` node that is being set.
@param docType the `DocumentType` to set
@return the document, for chaining*/ setDocType(
      docType: XmlService.DocType,
    ): XmlService.Document;
    /**Sets the document's root [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node. If the document already has a root `Element` node, this method overwrites the old node.
@param element the root `Element` node to set
@return the document, for chaining*/ setRootElement(
      element: XmlService.Element,
    ): XmlService.Document;
  }
  interface DocType {
    /**Detaches the node from its parent [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node. If the node does not have a parent,
this method has no effect.
@return the detached node*/ detach(): XmlService.Content;
    /**Gets the name of the root [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node specified in the `DocType` declaration.
@return the name of the root `Element` node specified in the `DocType` declaration*/ getElementName(): string;
    /**Gets the internal subset data for the `DocumentType` node.
@return the internal subset data*/ getInternalSubset(): string;
    /**Gets the node's parent [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node. If the node does not have a parent, this method
returns `null`.
@return the parent `Element` node*/ getParentElement(): XmlService.Element;
    /**Gets the public ID of the external subset data for the `DocumentType` node.
@return the public ID of the external subset data*/ getPublicId(): string;
    /**Gets the system ID of the external subset data for the `DocumentType` node.
@return the system ID of the external subset data*/ getSystemId(): string;
    /**Gets the text value of all nodes that are direct or indirect children of the node, in the order
they appear in the document.
@return the text value of all nodes that are direct or indirect children of the node*/ getValue(): string;
    /**Sets the name of the root [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node to specify in the `DocType`
declaration.
@param name the name of the root `Element` node to specify in the `DocType`
    declaration
@return the `DocumentType` node, for chaining*/ setElementName(
      name: string,
    ): XmlService.DocType;
    /**Sets the internal subset data for the `DocumentType` node.
@param data the internal subset data to set
@return the `DocumentType` node, for chaining*/ setInternalSubset(
      data: string,
    ): XmlService.DocType;
    /**Sets the public ID of the external subset data for the `DocumentType` node.
@param id the public ID of the external subset data to set
@return the `DocumentType` node, for chaining*/ setPublicId(
      id: string,
    ): XmlService.DocType;
    /**Sets the system ID of the external subset data for the `DocumentType` node.
@param id the system ID of the external subset data to set
@return the `DocumentType` node, for chaining*/ setSystemId(
      id: string,
    ): XmlService.DocType;
  }
  interface ContentType {}
  interface _ContentType {
    /**An XML [`CDATASection`](https://developers.google.com/apps-script/reference/xml-service/cdata.html) node.*/ CDATA: ContentType;
    /**An XML [`Comment`](https://developers.google.com/apps-script/reference/xml-service/comment.html) node.*/ COMMENT: ContentType;
    /**An XML [`DocumentType`](https://developers.google.com/apps-script/reference/xml-service/doc-type.html) node.*/ DOCTYPE: ContentType;
    /**An XML [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node.*/ ELEMENT: ContentType;
    /**An XML [`EntityReference`](https://developers.google.com/apps-script/reference/xml-service/entity-ref.html) node.*/ ENTITYREF: ContentType;
    /**An XML [`ProcessingInstruction`](https://developers.google.com/apps-script/reference/xml-service/processing-instruction.html) node.*/ PROCESSINGINSTRUCTION: ContentType;
    /**An XML [`Text`](https://developers.google.com/apps-script/reference/xml-service/text.html) node.*/ TEXT: ContentType;
  }
  interface Content {
    /**Casts the node as a [`CDATASection`](https://developers.google.com/apps-script/reference/xml-service/cdata.html) node for the purposes of autocomplete. If the
node's [`ContentType`](https://developers.google.com/apps-script/reference/xml-service/content-type.html) is not already `CDATA`, this method returns `null`.
@return the `CDATASection` node*/ asCdata(): XmlService.Cdata;
    /**Casts the node as a [`Comment`](https://developers.google.com/apps-script/reference/xml-service/comment.html) node for the purposes of autocomplete. If the node's
[`ContentType`](https://developers.google.com/apps-script/reference/xml-service/content-type.html) is not already `COMMENT`, this method returns `null`.
@return the `Comment` node, or `null` if the node's content type is not [`COMMENT`](https://developers.google.com/apps-script/reference/xml-service/content-type.html)*/ asComment(): XmlService.Comment;
    /**Casts the node as a [`DocumentType`](https://developers.google.com/apps-script/reference/xml-service/doc-type.html) node for the purposes of autocomplete. If
the node's [`ContentType`](https://developers.google.com/apps-script/reference/xml-service/content-type.html) is not already `DOCTYPE`, this method returns `null`.
@return the `DocumentType` node*/ asDocType(): XmlService.DocType;
    /**Casts the node as an [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node for the purposes of autocomplete. If the node's
[`ContentType`](https://developers.google.com/apps-script/reference/xml-service/content-type.html) is not already `ELEMENT`, this method returns `null`.
@return the `Element` node*/ asElement(): XmlService.Element;
    /**Casts the node as a [`EntityReference`](https://developers.google.com/apps-script/reference/xml-service/entity-ref.html) node for the purposes of autocomplete.
If the node's [`ContentType`](https://developers.google.com/apps-script/reference/xml-service/content-type.html) is not already `ENTITYREF`, this method returns
`null`.
@return the `EntityReference` node*/ asEntityRef(): XmlService.EntityRef;
    /**Casts the node as a [`ProcessingInstruction`](https://developers.google.com/apps-script/reference/xml-service/processing-instruction.html) node for the purposes of autocomplete. If
the node's [`ContentType`](https://developers.google.com/apps-script/reference/xml-service/content-type.html) is not already `PROCESSINGINSTRUCTION`, this method
returns `null`.
@return the `ProcessingInstruction` node*/ asProcessingInstruction(): XmlService.ProcessingInstruction;
    /**Casts the node as a [`Text`](https://developers.google.com/apps-script/reference/xml-service/text.html) node for the purposes of autocomplete. If the node's [`ContentType`](https://developers.google.com/apps-script/reference/xml-service/content-type.html) is not already `TEXT`, this method returns `null`.
@return the `Text` node*/ asText(): XmlService.Text;
    /**Detaches the node from its parent [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node. If the node does not have a parent,
this method has no effect.
@return the detached node*/ detach(): XmlService.Content;
    /**Gets the node's parent [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node. If the node does not have a parent, this method
returns `null`.
@return the parent `Element` node*/ getParentElement(): XmlService.Element;
    /**Gets the node's content type.
@return the node's content type*/ getType(): XmlService.ContentType;
    /**Gets the text value of all nodes that are direct or indirect children of the node, in the order
they appear in the document.
@return the text value of all nodes that are direct or indirect children of the node*/ getValue(): string;
  }
  interface Comment {
    /**Detaches the node from its parent [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node. If the node does not have a parent,
this method has no effect.
@return the detached node*/ detach(): XmlService.Content;
    /**Gets the node's parent [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node. If the node does not have a parent, this method
returns `null`.
@return the parent `Element` node*/ getParentElement(): XmlService.Element;
    /**Gets the text value of the `Comment` node.
@return the text value of the `Comment` node*/ getText(): string;
    /**Gets the text value of all nodes that are direct or indirect children of the node, in the order
they appear in the document.
@return the text value of all nodes that are direct or indirect children of the node*/ getValue(): string;
    /**Sets the text value of the `Comment` node.
@param text the text value to set
@return the `Comment` node, for chaining*/ setText(
      text: string,
    ): XmlService.Comment;
  }
  interface Cdata {
    /**Appends the given text to any content that already exists in the node.
@param text the text to append to the node
@return the `Text` node, for chaining*/ append(text: string): XmlService.Text;
    /**Detaches the node from its parent [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node. If the node does not have a parent,
this method has no effect.
@return the detached node*/ detach(): XmlService.Content;
    /**Gets the node's parent [`Element`](https://developers.google.com/apps-script/reference/xml-service/element.html) node. If the node does not have a parent, this method
returns `null`.
@return the parent `Element` node*/ getParentElement(): XmlService.Element;
    /**Gets the text value of the `Text` node.
@return the text value of the `Text` node*/ getText(): string;
    /**Gets the text value of all nodes that are direct or indirect children of the node, in the order
they appear in the document.
@return the text value of all nodes that are direct or indirect children of the node*/ getValue(): string;
    /**Sets the text value of the `Text` node.
@param text the text value to set
@return the `Text` node, for chaining*/ setText(text: string): XmlService.Text;
  }
  interface Attribute {
    /**Gets the local name of the attribute. If the attribute has a namespace prefix, use [`getNamespace()`](https://developers.google.com/apps-script/reference/xml-service/attribute.html#getNamespace()).[`getPrefix()`](https://developers.google.com/apps-script/reference/xml-service/namespace.html#getPrefix()) to get the prefix.
@return the local name of the attribute*/ getName(): string;
    /**Gets the namespace for the attribute.
@return the namespace for the attribute*/ getNamespace(): XmlService.Namespace;
    /**Gets the value of the attribute.
@return the value of the attribute*/ getValue(): string;
    /**Sets the local name of the attribute. To set a namespace prefix for the attribute, use [`setNamespace(namespace)`](https://developers.google.com/apps-script/reference/xml-service/attribute.html#setNamespace(Namespace)) in conjunction with [`XmlService.getNamespace(prefix, uri)`](https://developers.google.com/apps-script/reference/xml-service/xml-service.html#getNamespace(String,String)).
@param name the local name to set
@return the attribute, for chaining*/ setName(
      name: string,
    ): XmlService.Attribute;
    /**Sets the namespace for the attribute. The namespace must have a prefix.
@param namespace the namespace to set
@return the attribute, for chaining*/ setNamespace(
      namespace: XmlService.Namespace,
    ): XmlService.Attribute;
    /**Sets the value of the attribute.
@param value the value to set
@return the attribute, for chaining*/ setValue(
      value: string,
    ): XmlService.Attribute;
  }
}
const XmlService: XmlService;
