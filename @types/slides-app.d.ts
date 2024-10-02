interface SlidesApp{
/**An enumeration of the types of alignment positions.*/AlignmentPosition:SlidesApp._AlignmentPosition;
/**An enumeration of the different arrow styles that a [`Line`](https://developers.google.com/apps-script/reference/slides/line.html) can have.*/ArrowStyle:SlidesApp._ArrowStyle;
/**An enumeration of the types of auto text.*/AutoTextType:SlidesApp._AutoTextType;
/**An enumeration of autofit types.*/AutofitType:SlidesApp._AutofitType;
/**An enumeration of the different merge states of a table cell.*/CellMergeState:SlidesApp._CellMergeState;
/**An enumeration of color types.*/ColorType:_ColorType;
/**An enumeration of values used to specify content alignment.*/ContentAlignment:SlidesApp._ContentAlignment;
/**An enumeration of the different dash styles that a [`Line`](https://developers.google.com/apps-script/reference/slides/line.html) can have.*/DashStyle:SlidesApp._DashStyle;
/**An enumeration of fill types.*/FillType:SlidesApp._FillType;
/**An enumeration of the categories of [`Line`](https://developers.google.com/apps-script/reference/slides/line.html).*/LineCategory:SlidesApp._LineCategory;
/**An enumeration of the types of [`LineFill`](https://developers.google.com/apps-script/reference/slides/line-fill.html).*/LineFillType:SlidesApp._LineFillType;
/**An enumeration of the types of [`Line`](https://developers.google.com/apps-script/reference/slides/line.html).*/LineType:SlidesApp._LineType;
/**An enumeration of the types of links.*/LinkType:SlidesApp._LinkType;
/**An enumeration of the types of list presets.*/ListPreset:SlidesApp._ListPreset;
/**An enumeration of the types of page backgrounds.*/PageBackgroundType:SlidesApp._PageBackgroundType;
/**An enumeration of the types of page elements.*/PageElementType:SlidesApp._PageElementType;
/**An enumeration of the types of pages.*/PageType:SlidesApp._PageType;
/**An enumeration of the types of paragraph alignment.*/ParagraphAlignment:SlidesApp._ParagraphAlignment;
/**An enumeration of the types of placeholders.*/PlaceholderType:SlidesApp._PlaceholderType;
/**An enumeration of the predefined layouts.*/PredefinedLayout:SlidesApp._PredefinedLayout;
/**An enumeration of the types of selections.*/SelectionType:SlidesApp._SelectionType;
/**An enumeration of the types of shapes.*/ShapeType:SlidesApp._ShapeType;
/**An enumeration of Sheets chart embed types.*/SheetsChartEmbedType:SlidesApp._SheetsChartEmbedType;
/**An enumeration of the ways Slides can be linked.*/SlideLinkingMode:SlidesApp._SlideLinkingMode;
/**An enumeration of the types of slide positions.*/SlidePosition:SlidesApp._SlidePosition;
/**An enumeration of the types of spacing modes.*/SpacingMode:SlidesApp._SpacingMode;
/**An enumeration of the types of text baseline offset.*/TextBaselineOffset:SlidesApp._TextBaselineOffset;
/**An enumeration of the types of text directions.*/TextDirection:SlidesApp._TextDirection;
/**An enumeration of theme colors.*/ThemeColorType:SlidesApp._ThemeColorType;
/**An enumeration of the types of video source.*/VideoSourceType:SlidesApp._VideoSourceType;
/**Creates and opens a new [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html).
@param name The name to be given to the created presentation.
@return the presentation with the given name.*/create(name:string):SlidesApp.Presentation;
/**Returns the currently active presentation to which the script is [container-bound](/apps-script/scripts_containers), or `null` if there is no
active presentation. To interact with a presentation to which the script is not
container-bound, use [`openById(id)`](https://developers.google.com/apps-script/reference/slides/slides-app.html#openById(String)) instead.

```
// Get the current presentation to which this script is bound.
var presentation = SlidesApp.getActivePresentation();
```

If the presentation is already open, the same presentation instance is returned.*/getActivePresentation():SlidesApp.Presentation;
/**Returns an instance of the presentation's user-interface environment that allows the script to
add features like menus, dialogs, and sidebars. A script can only interact with the UI for the
current instance of an open presentation, and only if the script is [bound](/apps-script/scripts_containers) to the presentation. For more information, see
the guides to [menus](/apps-script/guides/menus) and [dialogs and sidebars](/apps-script/guides/dialogs).

```
// Add a custom menu to the active presentation, including a separator and a sub-menu.
function onOpen(e) {
  SlidesApp.getUi()
      .createMenu('My Menu')
      .addItem('My menu item', 'myFunction')
      .addSeparator()
      .addSubMenu(SlidesApp.getUi().createMenu('My sub-menu')
          .addItem('One sub-menu item', 'mySecondFunction')
          .addItem('Another sub-menu item', 'myThirdFunction'))
      .addToUi();
}
```*/getUi():Ui;
/**Returns a new [`AffineTransformBuilder`](https://developers.google.com/apps-script/reference/slides/affine-transform-builder.html) to build an [`AffineTransform`](https://developers.google.com/apps-script/reference/slides/affine-transform.html). The builder
is preset with the identity affine transform.*/newAffineTransformBuilder():SlidesApp.AffineTransformBuilder;
/**Opens the [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html) with the given ID.

```
// Open a presentation by ID.
var presentation = SlidesApp.openById('docId');
```

If the presentation is already open, the same presentation instance is returned.
@return the presentation with the given ID*/openById(id:string):SlidesApp.Presentation;
/**Opens the [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html) with the given URL.

```
// Open a presentation by URL.
var presentation = SlidesApp.openByUrl('https://docs.google.com/presentation/d/docId/edit');
```

If the presentation is already open, the same presentation instance is returned.
@return the presentation with the given URL*/openByUrl(url:string):SlidesApp.Presentation;}module SlidesApp{interface WordArt{
/**Aligns the element to the specified alignment position on the page.
@param alignmentPosition The position to align this page element to on the page.
@return This page element, for chaining.*/alignOnPage(alignmentPosition:SlidesApp.AlignmentPosition):SlidesApp.WordArt;
/**Brings the page element forward on the page by one element.

The page element must not be in a group.
@return This page element, for chaining.*/bringForward():SlidesApp.WordArt;
/**Brings the page element to the front of the page.

The page element must not be in a group.
@return This page element, for chaining.*/bringToFront():SlidesApp.WordArt;
/**Duplicates the page element.

The duplicate page element is placed on the same page at the same position as the original.
@return The new duplicate of this page element.*/duplicate():SlidesApp.PageElement;
/**Returns the list of `ConnectionSite`s on the page element, or an empty list if the page
element does not have any connection sites.
@return The connection sites list, which may be empty if this element has no connection sites.*/getConnectionSites():SlidesApp.ConnectionSite[];
/**Returns the page element's alt text description. The description is combined with the title to
display and read alt text.
@return The page element's alt text description.*/getDescription():string;
/**Gets the element's height in points, which is the height of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@return The page element's inherent height in points, or `null` if the page element does
    not have a height.*/getHeight():number;
/**Returns the element's inherent height in points.

The page element's transform is relative to its inherent size. Use the inherent size in
conjunction with the element's transform to determine the element's final visual appearance.
@return The page element's inherent height in points, or `null` if the page element does
    not have a height.*/getInherentHeight():number;
/**Returns the element's inherent width in points.

The page element's transform is relative to its inherent size. Use the inherent size in
conjunction with the element's transform to determine the element's final visual appearance.
@return The page element's inherent width in points, or `null` if the page element does
    not have a width.*/getInherentWidth():number;
/**Returns the element's horizontal position in points, measured from the upper-left corner of the
page when the element has no rotation.
@return This element's horizontal position in points, from the upper-left corner of the page.*/getLeft():number;
/**Returns the [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) or `null` if there is no link.

```
var link = shape.getLink();
if (link != null) {
  Logger.log('Shape has a link of type: ' + link.getLinkType());
}
```*/getLink():SlidesApp.Link;
/**Returns the unique ID for this object. Object IDs used by pages and page elements share the
same namespace.
@return The unique ID for this object.*/getObjectId():string;
/**Returns the page element's type, represented as a [`PageElementType`](https://developers.google.com/apps-script/reference/slides/page-element-type.html) enum.
@return The page element's type.*/getPageElementType():SlidesApp.PageElementType;
/**Returns the group this page element belongs to, or `null` if the element is not in a
group.
@return The group this page element belongs to, or `null`.*/getParentGroup():SlidesApp.Group;
/**Returns the page this page element is on.
@return The page this element resides on.*/getParentPage():SlidesApp.Page;
/**Gets the text that is rendered as word art.
@return The text that is rendered as this word art.*/getRenderedText():string;
/**Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
means no rotation.
@return The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).*/getRotation():number;
/**Returns the page element's alt text title. The title is combined with the description to
display and read alt text.
@return The page element's alt text title.*/getTitle():string;
/**Gets the element's vertical position in points, measured from the upper-left corner of the page
when the element has no rotation.
@return This element's vertical position in points, from the upper-left corner of the page.*/getTop():number;
/**Returns the page element's transform.

The visual appearance of the page element is determined by its absolute transform. To
compute the absolute transform, preconcatenate a page element's transform with the transforms
of all of its parent groups. If the page element is not in a group, its absolute transform is
the same as the value in this field.
@return The page element's transform.*/getTransform():SlidesApp.AffineTransform;
/**Returns the element's width in points, which is the width of the element's bounding box when
the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@return The page element's inherent width in points, or `null` if the page element does
    not have a width.*/getWidth():number;
/**Preconcatenates the provided transform to the existing transform of the page element.

```
newTransform = argument * existingTransform
```

For example, to move a page elements 36 points to the left:

```
element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
    .setTranslateX(-36.0)
    .build());
```

You can also replace the page element's transform with [`setTransform(transform)`](https://developers.google.com/apps-script/reference/slides/word-art.html#setTransform(AffineTransform)).
@param transform The transform to preconcatenate onto this page element's transform.
@return This page element, for chaining.*/preconcatenateTransform(transform:SlidesApp.AffineTransform):SlidesApp.WordArt;
/**Removes the page element.

If after a remove operation, a `Group` contains only one or no page elements, the
group itself is also removed.

If a placeholder `PageElement` is removed on a master or layout, any empty inheriting
placeholders are also removed.*/remove():void;
/**Removes a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html).

```
shape.removeLink();
```*/removeLink():void;
/**Scales the element's height by the specified ratio. The element's height is the height of its
bounding box when the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param ratio The ratio to scale this page element's height by.
@return This page element, for chaining.*/scaleHeight(ratio:number):SlidesApp.WordArt;
/**Scales the element's width by the specified ratio. The element's width is the width of its
bounding box when the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param ratio The ratio to scale this page element's width by.
@return This page element, for chaining.*/scaleWidth(ratio:number):SlidesApp.WordArt;
/**Selects only the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) in the active presentation and removes any previous
selection. This is the same as calling [`select(replace)`](https://developers.google.com/apps-script/reference/slides/word-art.html#select(Boolean)) with `true`.

A script can only access the selection of the user who is running the script, and only if
the script is [bound](/apps-script/scripts_containers) to the presentation.

This sets the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) as the [`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var pageElement = slide.getPageElements()[0];
// Only select this page element and replace any previous selection.
pageElement.select();
```*/select():void;
/**Selects the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) in the active presentation.

A script can only access the selection of the user who is running the script, and only if
the script is [bound](/apps-script/scripts_containers) to the presentation.

Pass `true` to this method to select only the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) and remove any
previous selection. This also sets the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) as the
[`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).

Pass `false` to select multiple [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) objects. The [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html)
objects must be in the same [`Page`](https://developers.google.com/apps-script/reference/slides/page.html).

The following conditions must be met while selecting a page element using a `false`
parameter:

  1. The parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) object must be the [`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).
  1. There should not be multiple [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) objects selected.

To make sure that’s the case the preferred approach is to select the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html)
first using [`Page.selectAsCurrentPage()`](https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()) and then select the page elements in that page.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
// First select the slide page, as the current page selection.
slide.selectAsCurrentPage();
// Then select all the page elements in the selected slide page.
var pageElements = slide.getPageElements();
for (var i = 0; i < pageElements.length; i++) {
  pageElements[i].select(false);
}
```
@param replace If `true`, the selection replaces any previous selection; otherwise the
    selection is added to any previous selection.*/select(replace:boolean):void;
/**Sends the page element backward on the page by one element.

The page element must not be in a group.
@return This page element, for chaining.*/sendBackward():SlidesApp.WordArt;
/**Sends the page element to the back of the page.

The page element must not be in a group.
@return This page element, for chaining.*/sendToBack():SlidesApp.WordArt;
/**Sets the page element's alt text description.

The method is not supported for [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) elements.

```
// Set the first page element's alt text description to "new alt text description".
var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
pageElement.setDescription('new alt text description');
Logger.log(pageElement.getDescription());
```
@param description The string to set the alt text description to.
@return This page element.*/setDescription(description:string):SlidesApp.WordArt;
/**Sets the element's height in points, which is the height of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param height The new height of this page element to set, in points.
@return This page element, for chaining.*/setHeight(height:number):SlidesApp.WordArt;
/**Sets the element's horizontal position in points, measured from the upper-left corner of the
page when the element has no rotation.
@param left The new horizontal position to set, in points.
@return This page element, for chaining.*/setLeft(left:number):SlidesApp.WordArt;
/**Sets a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) to the given [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html) using the zero-based index of the slide.

```
// Set a link to the first slide of the presentation.
shape.setLinkSlide(0);
```
@param slideIndex The zero-based index to the slide.
@return the [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) that was set*/setLinkSlide(slideIndex:Integer):SlidesApp.Link;
/**Sets a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) to the given [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html), the link is set by the given slide ID.

```
// Set a link to the first slide of the presentation.
var slide = presentation.getSlides()[0];
shape.setLinkSlide(slide);
```
@param slide The [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html) to be linked.
@return the [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) that was set*/setLinkSlide(slide:SlidesApp.Slide):SlidesApp.Link;
/**Sets a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) to the given [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html) using the relative position of the slide.

```
// Set a link to the first slide of the presentation.
shape.setLinkSlide(SlideApp.SlidePosition.FIRST_SLIDE);
```
@param slidePosition The relative [`SlidePosition`](https://developers.google.com/apps-script/reference/slides/slide-position.html).
@return the [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) that was set*/setLinkSlide(slidePosition:SlidesApp.SlidePosition):SlidesApp.Link;
/**Sets a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) to the given non-empty URL string.

```
// Set a link to the URL.
shape.setLinkUrl("https://slides.google.com");
```
@param url The URL string.
@return the [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) that was set*/setLinkUrl(url:string):SlidesApp.Link;
/**Sets the element's clockwise rotation angle around its center in degrees.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param angle The new clockwise rotation angle to set, in degrees.
@return This page element, for chaining.*/setRotation(angle:number):SlidesApp.WordArt;
/**Sets the page element's alt text title.

The method is not supported for [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) elements.

```
// Set the first page element's alt text title to "new alt text title".
var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
pageElement.setTitle('new alt text title');
Logger.log(pageElement.getTitle());
```
@param title The string to set the alt text title to.
@return This page element.*/setTitle(title:string):SlidesApp.WordArt;
/**Sets the element's vertical position in points, measured from the upper-left corner of the page
when the element has no rotation.
@param top The new vertical position to set, in points.
@return This page element, for chaining.*/setTop(top:number):SlidesApp.WordArt;
/**Sets the transform of the page element with the provided transform.

Updating the transform of a group changes the absolute transform of the page elements in
that group, which can change their visual appearance.

Updating the transform of a page element that is in a group only changes the transform of
that page element; it doesn't affect the transforms of the group or other page elements in the
group.

For details on how transforms impact the visual appearance of page elements, see [`getTransform()`](https://developers.google.com/apps-script/reference/slides/word-art.html#getTransform()).
@param transform The transform that is set for this page element.
@return This element, for chaining.*/setTransform(transform:SlidesApp.AffineTransform):SlidesApp.WordArt;
/**Sets the element's width in points, which is the width of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param width The new width of this page element to set, in points.
@return This page element, for chaining.*/setWidth(width:number):SlidesApp.WordArt;}interface VideoSourceType{}interface _VideoSourceType{
/**A video source type that is not supported.*/UNSUPPORTED:VideoSourceType;
/**YouTube video.*/YOUTUBE:VideoSourceType;}interface Video{
/**Aligns the element to the specified alignment position on the page.
@param alignmentPosition The position to align this page element to on the page.
@return This page element, for chaining.*/alignOnPage(alignmentPosition:SlidesApp.AlignmentPosition):SlidesApp.Video;
/**Brings the page element forward on the page by one element.

The page element must not be in a group.
@return This page element, for chaining.*/bringForward():SlidesApp.Video;
/**Brings the page element to the front of the page.

The page element must not be in a group.
@return This page element, for chaining.*/bringToFront():SlidesApp.Video;
/**Duplicates the page element.

The duplicate page element is placed on the same page at the same position as the original.
@return The new duplicate of this page element.*/duplicate():SlidesApp.PageElement;
/**Returns the [`Border`](https://developers.google.com/apps-script/reference/slides/border.html) of the video.
@return The border setting for this video.*/getBorder():SlidesApp.Border;
/**Returns the list of `ConnectionSite`s on the page element, or an empty list if the page
element does not have any connection sites.
@return The connection sites list, which may be empty if this element has no connection sites.*/getConnectionSites():SlidesApp.ConnectionSite[];
/**Returns the page element's alt text description. The description is combined with the title to
display and read alt text.
@return The page element's alt text description.*/getDescription():string;
/**Gets the element's height in points, which is the height of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@return The page element's inherent height in points, or `null` if the page element does
    not have a height.*/getHeight():number;
/**Returns the element's inherent height in points.

The page element's transform is relative to its inherent size. Use the inherent size in
conjunction with the element's transform to determine the element's final visual appearance.
@return The page element's inherent height in points, or `null` if the page element does
    not have a height.*/getInherentHeight():number;
/**Returns the element's inherent width in points.

The page element's transform is relative to its inherent size. Use the inherent size in
conjunction with the element's transform to determine the element's final visual appearance.
@return The page element's inherent width in points, or `null` if the page element does
    not have a width.*/getInherentWidth():number;
/**Returns the element's horizontal position in points, measured from the upper-left corner of the
page when the element has no rotation.
@return This element's horizontal position in points, from the upper-left corner of the page.*/getLeft():number;
/**Returns the unique ID for this object. Object IDs used by pages and page elements share the
same namespace.
@return The unique ID for this object.*/getObjectId():string;
/**Returns the page element's type, represented as a [`PageElementType`](https://developers.google.com/apps-script/reference/slides/page-element-type.html) enum.
@return The page element's type.*/getPageElementType():SlidesApp.PageElementType;
/**Returns the group this page element belongs to, or `null` if the element is not in a
group.
@return The group this page element belongs to, or `null`.*/getParentGroup():SlidesApp.Group;
/**Returns the page this page element is on.
@return The page this element resides on.*/getParentPage():SlidesApp.Page;
/**Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
means no rotation.
@return The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).*/getRotation():number;
/**Gets the video source.
@return The source of this video.*/getSource():SlidesApp.VideoSourceType;
/**Gets an URL to the video thumbnail. This URL is tagged with the account of the requester.
Anyone with the URL effectively accesses the thumbnail as the original requester. Access to the
thumbnail may be lost if the presentation's sharing settings change. The URL expires after a
short period of time.
@return The URL of the video thumbnail.*/getThumbnailUrl():string;
/**Returns the page element's alt text title. The title is combined with the description to
display and read alt text.
@return The page element's alt text title.*/getTitle():string;
/**Gets the element's vertical position in points, measured from the upper-left corner of the page
when the element has no rotation.
@return This element's vertical position in points, from the upper-left corner of the page.*/getTop():number;
/**Returns the page element's transform.

The visual appearance of the page element is determined by its absolute transform. To
compute the absolute transform, preconcatenate a page element's transform with the transforms
of all of its parent groups. If the page element is not in a group, its absolute transform is
the same as the value in this field.
@return The page element's transform.*/getTransform():SlidesApp.AffineTransform;
/**Gets an URL to the video. The URL is valid as long as the source video exists and sharing
settings do not change. Returns `null` when the video source is not supported.
@return The URL of this video, or `null` if the video source is not supported.*/getUrl():string;
/**Gets the video source's unique identifier for this video.
@return The source ID for this video.*/getVideoId():string;
/**Returns the element's width in points, which is the width of the element's bounding box when
the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@return The page element's inherent width in points, or `null` if the page element does
    not have a width.*/getWidth():number;
/**Preconcatenates the provided transform to the existing transform of the page element.

```
newTransform = argument * existingTransform
```

For example, to move a page elements 36 points to the left:

```
element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
    .setTranslateX(-36.0)
    .build());
```

You can also replace the page element's transform with [`setTransform(transform)`](https://developers.google.com/apps-script/reference/slides/video.html#setTransform(AffineTransform)).
@param transform The transform to preconcatenate onto this page element's transform.
@return This page element, for chaining.*/preconcatenateTransform(transform:SlidesApp.AffineTransform):SlidesApp.Video;
/**Removes the page element.

If after a remove operation, a `Group` contains only one or no page elements, the
group itself is also removed.

If a placeholder `PageElement` is removed on a master or layout, any empty inheriting
placeholders are also removed.*/remove():void;
/**Scales the element's height by the specified ratio. The element's height is the height of its
bounding box when the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param ratio The ratio to scale this page element's height by.
@return This page element, for chaining.*/scaleHeight(ratio:number):SlidesApp.Video;
/**Scales the element's width by the specified ratio. The element's width is the width of its
bounding box when the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param ratio The ratio to scale this page element's width by.
@return This page element, for chaining.*/scaleWidth(ratio:number):SlidesApp.Video;
/**Selects only the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) in the active presentation and removes any previous
selection. This is the same as calling [`select(replace)`](https://developers.google.com/apps-script/reference/slides/video.html#select(Boolean)) with `true`.

A script can only access the selection of the user who is running the script, and only if
the script is [bound](/apps-script/scripts_containers) to the presentation.

This sets the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) as the [`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var pageElement = slide.getPageElements()[0];
// Only select this page element and replace any previous selection.
pageElement.select();
```*/select():void;
/**Selects the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) in the active presentation.

A script can only access the selection of the user who is running the script, and only if
the script is [bound](/apps-script/scripts_containers) to the presentation.

Pass `true` to this method to select only the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) and remove any
previous selection. This also sets the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) as the
[`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).

Pass `false` to select multiple [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) objects. The [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html)
objects must be in the same [`Page`](https://developers.google.com/apps-script/reference/slides/page.html).

The following conditions must be met while selecting a page element using a `false`
parameter:

  1. The parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) object must be the [`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).
  1. There should not be multiple [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) objects selected.

To make sure that’s the case the preferred approach is to select the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html)
first using [`Page.selectAsCurrentPage()`](https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()) and then select the page elements in that page.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
// First select the slide page, as the current page selection.
slide.selectAsCurrentPage();
// Then select all the page elements in the selected slide page.
var pageElements = slide.getPageElements();
for (var i = 0; i < pageElements.length; i++) {
  pageElements[i].select(false);
}
```
@param replace If `true`, the selection replaces any previous selection; otherwise the
    selection is added to any previous selection.*/select(replace:boolean):void;
/**Sends the page element backward on the page by one element.

The page element must not be in a group.
@return This page element, for chaining.*/sendBackward():SlidesApp.Video;
/**Sends the page element to the back of the page.

The page element must not be in a group.
@return This page element, for chaining.*/sendToBack():SlidesApp.Video;
/**Sets the page element's alt text description.

The method is not supported for [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) elements.

```
// Set the first page element's alt text description to "new alt text description".
var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
pageElement.setDescription('new alt text description');
Logger.log(pageElement.getDescription());
```
@param description The string to set the alt text description to.
@return This page element.*/setDescription(description:string):SlidesApp.Video;
/**Sets the element's height in points, which is the height of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param height The new height of this page element to set, in points.
@return This page element, for chaining.*/setHeight(height:number):SlidesApp.Video;
/**Sets the element's horizontal position in points, measured from the upper-left corner of the
page when the element has no rotation.
@param left The new horizontal position to set, in points.
@return This page element, for chaining.*/setLeft(left:number):SlidesApp.Video;
/**Sets the element's clockwise rotation angle around its center in degrees.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param angle The new clockwise rotation angle to set, in degrees.
@return This page element, for chaining.*/setRotation(angle:number):SlidesApp.Video;
/**Sets the page element's alt text title.

The method is not supported for [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) elements.

```
// Set the first page element's alt text title to "new alt text title".
var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
pageElement.setTitle('new alt text title');
Logger.log(pageElement.getTitle());
```
@param title The string to set the alt text title to.
@return This page element.*/setTitle(title:string):SlidesApp.Video;
/**Sets the element's vertical position in points, measured from the upper-left corner of the page
when the element has no rotation.
@param top The new vertical position to set, in points.
@return This page element, for chaining.*/setTop(top:number):SlidesApp.Video;
/**Sets the transform of the page element with the provided transform.

Updating the transform of a group changes the absolute transform of the page elements in
that group, which can change their visual appearance.

Updating the transform of a page element that is in a group only changes the transform of
that page element; it doesn't affect the transforms of the group or other page elements in the
group.

For details on how transforms impact the visual appearance of page elements, see [`getTransform()`](https://developers.google.com/apps-script/reference/slides/video.html#getTransform()).
@param transform The transform that is set for this page element.
@return This element, for chaining.*/setTransform(transform:SlidesApp.AffineTransform):SlidesApp.Video;
/**Sets the element's width in points, which is the width of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param width The new width of this page element to set, in points.
@return This page element, for chaining.*/setWidth(width:number):SlidesApp.Video;}interface ThemeColorType{}interface _ThemeColorType{
/**Represents the first accent color.*/ACCENT1:ThemeColorType;
/**Represents the second accent color.*/ACCENT2:ThemeColorType;
/**Represents the third accent color.*/ACCENT3:ThemeColorType;
/**Represents the fourth accent color.*/ACCENT4:ThemeColorType;
/**Represents the fifth accent color.*/ACCENT5:ThemeColorType;
/**Represents the sixth accent color.*/ACCENT6:ThemeColorType;
/**Represents the first dark color.*/DARK1:ThemeColorType;
/**Represents the second dark color.*/DARK2:ThemeColorType;
/**Represents the color to use for visited hyperlinks.*/FOLLOWED_HYPERLINK:ThemeColorType;
/**Represents the color to use for hyperlinks.*/HYPERLINK:ThemeColorType;
/**Represents the first light color.*/LIGHT1:ThemeColorType;
/**Represents the second light color.*/LIGHT2:ThemeColorType;
/**Represents a theme color that is not supported.*/UNSUPPORTED:ThemeColorType;}interface ThemeColor{
/**Get the type of this color.
@return The color type.*/getColorType():ColorType;
/**Get the theme color type of this color.*/getThemeColorType():SlidesApp.ThemeColorType;}interface TextStyle{
/**Returns the background color of the text, or `null` if there are multiple styles on the
text.*/getBackgroundColor():SlidesApp.Color;
/**Returns the vertical offset of text from its normal position, or `null` if there are
multiple styles on the text.*/getBaselineOffset():SlidesApp.TextBaselineOffset;
/**Returns the font family of the text, or `null` if there are multiple styles on the text.*/getFontFamily():string;
/**Returns the font size of the text in points, or `null` if there are multiple styles on
the text.*/getFontSize():number;
/**Returns the font weight of the text, or `null` if there are multiple styles on the text.

The weight is a multiple of 100 between 100 and 900, inclusive. This range corresponds to
the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with
non-numerical values disallowed. Weights greater than or equal to 700 are considered bold, in
which case [`isBold()`](https://developers.google.com/apps-script/reference/slides/text-style.html#isBold()) returns `true`. The default value is 400
("normal").*/getFontWeight():Integer;
/**Returns the foreground color of the text, or `null` if there are multiple styles on the
text.*/getForegroundColor():SlidesApp.Color;
/**Returns the [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) on the text, or `null` if there is no link or if the link is on
part of the text or if there are multiple links. Call [`hasLink()`](https://developers.google.com/apps-script/reference/slides/text-style.html#hasLink()) to determine whether
the text has no link.

```
var textLink = shape.getText().getTextStyle().getLink();
if (textLink != null) {
  Logger.log('Shape text has a link of type: ' + textLink.getLinkType());
}
```*/getLink():SlidesApp.Link;
/**Returns `true` if there is link on the text, `false` if not, or `null` if the
link is on part of the text or there are multiple links.

Links cannot be set on newline characters. Therefore, if the [`TextRange`](https://developers.google.com/apps-script/reference/slides/text-range.html) contains a
newline character, this method always returns either `null` or `false`.*/hasLink():boolean;
/**Returns `true` if the background of the text is transparent, `false` if not, or
`null` if there are multiple styles on the text.*/isBackgroundTransparent():boolean;
/**Returns `true` if the text is rendered as bold, `false` if not, or `null` if
there are multiple styles on the text.*/isBold():boolean;
/**Returns `true` if the text is italicized, `false` if not, or `null` if there
are multiple styles on the text.*/isItalic():boolean;
/**Returns `true` if the text is in small capital letters, `false` if not, or `null` if there are multiple styles on the text.*/isSmallCaps():boolean;
/**Returns `true` if the text is struck through, `false` if not, or `null` if
there are multiple styles on the text.*/isStrikethrough():boolean;
/**Returns `true` if the text is underlined, `false` if not, or `null` if there
are multiple styles on the text.*/isUnderline():boolean;
/**Removes a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html).

Removing a link removes the hyperlink foreground color and underline style on the text. If
possible, these styles are applied to match the text preceding the link.

```
text.getTextStyle().removeLink();
```*/removeLink():SlidesApp.TextStyle;
/**Sets the background color of the text to the given RGB values from 0 to 255.*/setBackgroundColor(red:Integer,green:Integer,blue:Integer):SlidesApp.TextStyle;
/**Sets the background color of the text.*/setBackgroundColor(color:SlidesApp.Color):SlidesApp.TextStyle;
/**Sets the background color of the text to the given [`ThemeColorType`](https://developers.google.com/apps-script/reference/slides/theme-color-type.html).*/setBackgroundColor(color:SlidesApp.ThemeColorType):SlidesApp.TextStyle;
/**Sets the background color of the text to the given hex color string.

The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
'#FFC0CB'.*/setBackgroundColor(hexColor:string):SlidesApp.TextStyle;
/**Sets the background color of the text to transparent.*/setBackgroundColorTransparent():SlidesApp.TextStyle;
/**Sets the vertical offset of the text relative to its normal position.*/setBaselineOffset(offset:SlidesApp.TextBaselineOffset):SlidesApp.TextStyle;
/**Sets whether the text should be rendered as bold.

Changing the text's boldness updates the font weight used to render the text.*/setBold(bold:boolean):SlidesApp.TextStyle;
/**Sets the font family of the text .*/setFontFamily(fontFamily:string):SlidesApp.TextStyle;
/**Sets the font family and weight of the text.

The weight is a multiple of 100 between 100 and 900, inclusive. This range corresponds to
the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with
non-numerical values disallowed. Weights greater than or equal to 700 are considered bold, in
which case [`isBold()`](https://developers.google.com/apps-script/reference/slides/text-style.html#isBold()) returns `true`. The default value is 400
("normal").*/setFontFamilyAndWeight(fontFamily:string,fontWeight:Integer):SlidesApp.TextStyle;
/**Sets the font size of the text, in points.*/setFontSize(fontSize:number):SlidesApp.TextStyle;
/**Sets the foreground color of the text to the given RGB values from 0 to 255.*/setForegroundColor(red:Integer,green:Integer,blue:Integer):SlidesApp.TextStyle;
/**Sets the foreground color of the text.*/setForegroundColor(foregroundColor:SlidesApp.Color):SlidesApp.TextStyle;
/**Sets the foreground color of the text to the given [`ThemeColorType`](https://developers.google.com/apps-script/reference/slides/theme-color-type.html).*/setForegroundColor(color:SlidesApp.ThemeColorType):SlidesApp.TextStyle;
/**Sets the foreground color of the text to the given hex color string.

The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
'#FFC0CB'.*/setForegroundColor(hexColor:string):SlidesApp.TextStyle;
/**Sets the whether the text is italicized.*/setItalic(italic:boolean):SlidesApp.TextStyle;
/**Sets a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) to the given [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html) using the zero-based index of the slide.

Setting a link changes the style of the text to be underlined and to have a [`ThemeColorType.HYPERLINK`](https://developers.google.com/apps-script/reference/slides/theme-color-type.html#HYPERLINK) foreground color. This can be changed via [`setForegroundColor(hexColor)`](https://developers.google.com/apps-script/reference/slides/text-style.html#setForegroundColor(String)) and [`setUnderline(underline)`](https://developers.google.com/apps-script/reference/slides/text-style.html#setUnderline(Boolean)).

Since links cannot be set on newline characters, newline characters in the [`TextRange`](https://developers.google.com/apps-script/reference/slides/text-range.html)
are ignored.

```
// Set a link to the first slide of the presentation.
text.getTextStyle().setLinkSlide(0);
```
@param slideIndex The zero-based index to the slide.*/setLinkSlide(slideIndex:Integer):SlidesApp.TextStyle;
/**Sets a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) to the given [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html), the link is set by the given slide ID.

Setting a link changes the style of the text to be underlined and to have a [`ThemeColorType.HYPERLINK`](https://developers.google.com/apps-script/reference/slides/theme-color-type.html#HYPERLINK) foreground color. This can be changed via [`setForegroundColor(hexColor)`](https://developers.google.com/apps-script/reference/slides/text-style.html#setForegroundColor(String)) and [`setUnderline(underline)`](https://developers.google.com/apps-script/reference/slides/text-style.html#setUnderline(Boolean)).

Since links cannot be set on newline characters, newline characters in the [`TextRange`](https://developers.google.com/apps-script/reference/slides/text-range.html)
are ignored.

```
// Set a link to the first slide of the presentation.
var slide = presentation.getSlides()[0];
text.getTextStyle().setLinkSlide(slide);
```
@param slide The [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html) to be linked.*/setLinkSlide(slide:SlidesApp.Slide):SlidesApp.TextStyle;
/**Sets a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) to the given [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html) using the relative position of the slide.

Setting a link changes the style of the text to be underlined and to have a [`ThemeColorType.HYPERLINK`](https://developers.google.com/apps-script/reference/slides/theme-color-type.html#HYPERLINK) foreground color. This can be changed via [`setForegroundColor(hexColor)`](https://developers.google.com/apps-script/reference/slides/text-style.html#setForegroundColor(String)) and [`setUnderline(underline)`](https://developers.google.com/apps-script/reference/slides/text-style.html#setUnderline(Boolean)).

Since links cannot be set on newline characters, newline characters in the [`TextRange`](https://developers.google.com/apps-script/reference/slides/text-range.html)
are ignored.

```
// Set a link to the first slide of the presentation.
text.getTextStyle().setLinkSlide(SlidesApp.SlidePosition.FIRST_SLIDE);
```
@param slidePosition The relative [`SlidePosition`](https://developers.google.com/apps-script/reference/slides/slide-position.html).*/setLinkSlide(slidePosition:SlidesApp.SlidePosition):SlidesApp.TextStyle;
/**Sets a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) to the given non-empty URL string.

Setting a link changes the style of the text to be underlined and to have a [`ThemeColorType.HYPERLINK`](https://developers.google.com/apps-script/reference/slides/theme-color-type.html#HYPERLINK) foreground color. This can be changed via [`setForegroundColor(hexColor)`](https://developers.google.com/apps-script/reference/slides/text-style.html#setForegroundColor(String)) and [`setUnderline(underline)`](https://developers.google.com/apps-script/reference/slides/text-style.html#setUnderline(Boolean)).

Since links cannot be set on newline characters, newline characters in the [`TextRange`](https://developers.google.com/apps-script/reference/slides/text-range.html)
are ignored.

```
// Set a link to the URL.
text.getTextStyle().setLinkUrl("https://slides.google.com");
```
@param url The URL string.*/setLinkUrl(url:string):SlidesApp.TextStyle;
/**Sets whether the text is rendered in small capital letters.*/setSmallCaps(smallCaps:boolean):SlidesApp.TextStyle;
/**Sets whether the text is struck through.*/setStrikethrough(strikethrough:boolean):SlidesApp.TextStyle;
/**Sets whether the text is underlined.*/setUnderline(underline:boolean):SlidesApp.TextStyle;}interface TextRange{
/**Appends a paragraph at the end of the text range. The paragraph maintains the styling of the
end of the current text range.

The provided text string is appended as a paragraph by adding at least one surrounding
newline character to the string.

When the provided text string contains newline characters (thus consisting of multiple
paragraphs), the final paragraph added is returned.
@param text The string to append as a paragraph.
@return the appended [`Paragraph`](https://developers.google.com/apps-script/reference/slides/paragraph.html).*/appendParagraph(text:string):SlidesApp.Paragraph;
/**Appends a copy of the provided text range to the end of the current text range.

The formatting of the inserted text will match that of the source text.
@param textRange The text range to append.
@return the text range representing the appended text*/appendRange(textRange:SlidesApp.TextRange):SlidesApp.TextRange;
/**Appends a copy of the provided text range to the end of the current text range.

If set to match the formatting of the destination text, [`AutoText`](https://developers.google.com/apps-script/reference/slides/auto-text.html) within the provided
text range are replaced with their rendered values. Furthermore, any non-text elements within
the provided text range are not appended.
@param textRange The text range to append.
@param matchSourceFormatting If `true`, match the formatting of the source text; if
    `false`, match the formatting of the destination text.
@return the text range representing the appended text*/appendRange(textRange:SlidesApp.TextRange,matchSourceFormatting:boolean):SlidesApp.TextRange;
/**Appends text at the end of the text range. The text maintains the styling of the end of the
existing text.
@param text The string to append.
@return the text range representing the appended text.*/appendText(text:string):SlidesApp.TextRange;
/**Returns the rendered text bounded by this range of the associated shape or table cell in a
format appropriate to display to end users.

AutoText elements, such as generated slide numbers, are replaced with their rendered values.
Any non-text elements in the range are omitted.*/asRenderedString():string;
/**Returns the raw text bounded by this range of the associated shape or table cell.

AutoText elements such as generated slide numbers and any non-text elements in the range are
replaced with the Unicode character U+E907.*/asString():string;
/**Clears the text bounded by this range.

Since the entire text in a Shape or TableCell must end in a newline, the final newline in
the text is not removed.*/clear():void;
/**Clears the text bounded by the start and end offsets in the range.

Since the text must end in a newline, the final newline in text is not removed even if it's
covered by the given offsets.
@param startOffset The number of characters past the start index of the current text range used
    to determine the inclusive start index of the range to clear. The start offset must be
    equal to or greater than 0 and less than or equal to `endOffset`. `startOffset`
    must also be less than the length of the current range.
@param endOffset The number of characters past the start index of the current text range used
    to determine the exclusive end index of the range to clear. The `endOffset` must be
    equal to or greater than `startOffset`. `endOffset` must also be less than or
    equal to the length of the current range.*/clear(startOffset:Integer,endOffset:Integer):void;
/**Returns all the ranges matching the search pattern in the current text range. The search is
case sensitive.
@param pattern The regular expression pattern to search; any backslashes in the pattern should
    be escaped.*/find(pattern:string):SlidesApp.TextRange[];
/**Returns all the ranges matching the search pattern in the current text range starting from the
start offset. The search is case sensitive.
@param pattern The regular expression pattern to search; any backslashes in the pattern should
    be escaped.
@param startOffset The number of characters past the start index of the current text range used
    to determine the inclusive start index of the range to search. `startOffset` must
    also be less than the length of the current range.*/find(pattern:string,startOffset:Integer):SlidesApp.TextRange[];
/**Returns the auto texts within the current text range.*/getAutoTexts():SlidesApp.AutoText[];
/**Returns the exclusive, 0-based index for the last character in this range. If the start and end
indices are equal, the range is considered to be empty.*/getEndIndex():Integer;
/**Returns the number of characters in this range.*/getLength():Integer;
/**Returns a collection of text ranges that correspond to all [`Link`](https://developers.google.com/apps-script/reference/slides/link.html)s within the current
text range or overlapping the current text range.

Each returned range is guaranteed to span one link when it is created. Text modifications
can cause it to no longer represent exactly one link.

Each [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) on the returned ranges can be accessed via [`TextStyle.getLink()`](https://developers.google.com/apps-script/reference/slides/text-style.html#getLink()).

```
// Accesses the first link on a TextRange object.
var linkTextRange = textRange.getLinks()[0];
var textStyle = linkTextRange.getTextStyle();
Logger.log(textStyle.hasLink()); // logs 'true'
var link = textStyle.getLink();  // Link object
```*/getLinks():SlidesApp.TextRange[];
/**Returns the paragraphs in lists that overlap the current text range.*/getListParagraphs():SlidesApp.Paragraph[];
/**Returns the [`ListStyle`](https://developers.google.com/apps-script/reference/slides/list-style.html) of the current text range.*/getListStyle():SlidesApp.ListStyle;
/**Returns the [`ParagraphStyle`](https://developers.google.com/apps-script/reference/slides/paragraph-style.html) of the current text range.*/getParagraphStyle():SlidesApp.ParagraphStyle;
/**Returns the paragraphs that overlap the current text range.*/getParagraphs():SlidesApp.Paragraph[];
/**Returns a new [`TextRange`](https://developers.google.com/apps-script/reference/slides/text-range.html) covering part of the range from which it is derived.
@param startOffset The number of characters past the start index of the current text range used
    to determine the inclusive start index of the returned range. The start offset must be
    equal to or greater than 0 and less than or equal to `endOffset`. `startOffset`
    must also be less than the length of the current range.
@param endOffset The number of characters past the start index of the current text range used
    to determine the exclusive end index of the returned range. The `endOffset` must be
    equal to or greater than `startOffset`. `endOffset` must also be less than or
    equal to the length of the current range.*/getRange(startOffset:Integer,endOffset:Integer):SlidesApp.TextRange;
/**Returns the text runs that overlap the current text range. A text run is a segment of text
where all the characters have the same text style.

Each returned range is only guaranteed to span one run when it is created. Text or style
modifications can cause it to no longer represent exactly one run.*/getRuns():SlidesApp.TextRange[];
/**Returns the inclusive, 0-based index for the first character in this range. If the start and
end indices are equal, the range is considered to be empty.*/getStartIndex():Integer;
/**Returns the text style of the range, or `null` if the range is empty.*/getTextStyle():SlidesApp.TextStyle;
/**Inserts a paragraph at the start offset. The paragraph maintains the styling of the current
text range at the start offset.

The provided text string is inserted as a paragraph by adding at least one surrounding
newline character to the string.

When the provided text string contains newline characters (thus consisting of multiple
paragraphs), the final paragraph added is returned.
@param startOffset The number of characters past the start index of the current text range used
    to determine the inclusive start index of the text to insert.
@param text The string to insert.
@return the inserted [`Paragraph`](https://developers.google.com/apps-script/reference/slides/paragraph.html).*/insertParagraph(startOffset:Integer,text:string):SlidesApp.Paragraph;
/**Inserts a copy of the provided text range at the start offset.

The formatting of the inserted text will match that of the source text.
@param startOffset The number of characters past the start index of the current text range used
    to determine the inclusive start index of the text to insert.
@param textRange The text range to insert.
@return the text range representing the inserted text*/insertRange(startOffset:Integer,textRange:SlidesApp.TextRange):SlidesApp.TextRange;
/**Inserts a copy of the provided text range at the start offset.

If set to match the formatting of the destination text, [`AutoText`](https://developers.google.com/apps-script/reference/slides/auto-text.html) within the provided
text range are replaced with their rendered values. Furthermore, any non-text elements within
the provided text range are not inserted.
@param startOffset The number of characters past the start index of the current text range used
    to determine the inclusive start index of the text to insert.
@param textRange The text range to insert.
@param matchSourceFormatting If `true`, match the formatting of the source text; if
    `false`, match the formatting of the destination text.
@return the text range representing the inserted text*/insertRange(startOffset:Integer,textRange:SlidesApp.TextRange,matchSourceFormatting:boolean):SlidesApp.TextRange;
/**Inserts text at the start offset. The text maintains the styling of the existing text at the
start offset.
@param startOffset The number of characters past the start index of the current text range used
    to determine the inclusive start index of the text to insert.
@param text The string to insert.
@return the text range representing the inserted text.*/insertText(startOffset:Integer,text:string):SlidesApp.TextRange;
/**Returns `true` if there are no characters in this range, and returns `false`
otherwise.*/isEmpty():boolean;
/**Replaces all instances of text matching find text with replace text. The search is case
insensitive.
@param findText The text to find.
@param replaceText The text to replace the matched text.
@return the number of occurrences changed*/replaceAllText(findText:string,replaceText:string):Integer;
/**Replaces all instances of text matching find text with replace text.
@param findText The text to find.
@param replaceText The text to replace the matched text.
@param matchCase If `true`, the search is case sensitive; if `false`, the search is
    case insensitive.
@return the number of occurrences changed*/replaceAllText(findText:string,replaceText:string,matchCase:boolean):Integer;
/**Selects only the [`TextRange`](https://developers.google.com/apps-script/reference/slides/text-range.html) in the active presentation and removes any previous
selection.

A script can only access the selection of the user who is running the script, and only if
the script is [bound](/apps-script/scripts_containers) to the presentation.

The parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the corresponding [`Shape`](https://developers.google.com/apps-script/reference/slides/shape.html) or the [`TableCell`](https://developers.google.com/apps-script/reference/slides/table-cell.html) is set
as the [`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()). The [`Shape`](https://developers.google.com/apps-script/reference/slides/shape.html) or the [`TableCell`](https://developers.google.com/apps-script/reference/slides/table-cell.html) is set as the [`selected page element`](https://developers.google.com/apps-script/reference/slides/selection.html#getPageElementRange()).

  The [`Selection`](https://developers.google.com/apps-script/reference/slides/selection.html) can be of two types:
  1. 1. Range of text, use select on a non-empty TextRange to select the range of the
      characters.
  1. 2. Cursor position, use an empty TextRange to place the cursor at the desired index.

```
var shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
shape.getText().setText("Hello");
// Range selection: Select the text range "He".
shape.getText().getRange(0, 2).select();
// Cursor selection: Place the cursor after "H" like "H|ello".
shape.getText().getRange(1, 1).select();
```*/select():void;
/**Sets the text bounded by this range of the associated shape or table cell. The text maintains
the styling of the start of the existing text.
@param newText The string to set as the new text.
@return the text range representing the set text*/setText(newText:string):SlidesApp.TextRange;}interface TextDirection{}interface _TextDirection{
/**The text goes from left to right.*/LEFT_TO_RIGHT:TextDirection;
/**The text goes from right to left.*/RIGHT_TO_LEFT:TextDirection;
/**A text direction that is not supported.*/UNSUPPORTED:TextDirection;}interface TextBaselineOffset{}interface _TextBaselineOffset{
/**The text is not vertically offset.*/NONE:TextBaselineOffset;
/**The text is vertically offset downwards.*/SUBSCRIPT:TextBaselineOffset;
/**The text is vertically offset upwards.*/SUPERSCRIPT:TextBaselineOffset;
/**An text baseline offset that is not supported.*/UNSUPPORTED:TextBaselineOffset;}interface TableRow{
/**Returns the cell at the specified index.
@param cellIndex The 0-based index of the cell to retrieve.
@return the cell.*/getCell(cellIndex:Integer):SlidesApp.TableCell;
/**Returns the 0-based index of the row.*/getIndex():Integer;
/**Returns the minimum height of the row in points. The actual height depends on the length of the
content of the cell.*/getMinimumHeight():number;
/**Returns the number of cells in this row.*/getNumCells():Integer;
/**Returns the table containing the current row.*/getParentTable():SlidesApp.Table;
/**Removes the table row.

If all the cells in the row are merged with other rows, the common rows spanned by these
cells are removed.

If no rows remain in the table after this removal, the whole table is removed.*/remove():void;}interface TableColumn{
/**Returns the cell at the specified index.
@param cellIndex The 0-based index of the cell to retrieve.*/getCell(cellIndex:Integer):SlidesApp.TableCell;
/**Returns the 0-based index of the column.*/getIndex():Integer;
/**Returns the number of cells in this column.*/getNumCells():Integer;
/**Returns the table containing the current column.*/getParentTable():SlidesApp.Table;
/**Returns the width of the column in points.*/getWidth():number;
/**Removes the table column.

If all the cells in the column are merged with other columns, the common columns spanned by
these cells are removed.

If no columns remain in the table after this removal, the whole table is removed.*/remove():void;}interface TableCellRange{
/**Returns the list of [`TableCell`](https://developers.google.com/apps-script/reference/slides/table-cell.html) instances.*/getTableCells():SlidesApp.TableCell[];}interface TableCell{
/**Returns the 0-based column index of the table cell.*/getColumnIndex():Integer;
/**Returns the column span of the table cell.*/getColumnSpan():Integer;
/**Returns the [`ContentAlignment`](https://developers.google.com/apps-script/reference/slides/content-alignment.html) of the text in the table cell.*/getContentAlignment():SlidesApp.ContentAlignment;
/**Returns the fill of the table cell.*/getFill():SlidesApp.Fill;
/**Returns the head cell of this table cell. Returns `null` if this cell has not been merged
or if this cell is the head cell.*/getHeadCell():SlidesApp.TableCell;
/**Returns the merge state of the table cell.*/getMergeState():SlidesApp.CellMergeState;
/**Returns the table column containing the current cell.*/getParentColumn():SlidesApp.TableColumn;
/**Returns the table row containing the current cell.*/getParentRow():SlidesApp.TableRow;
/**Returns the table containing the current cell.*/getParentTable():SlidesApp.Table;
/**Returns the 0-based row index of the table cell.*/getRowIndex():Integer;
/**Returns the row span of the table cell.*/getRowSpan():Integer;
/**Returns the text content of the table cell. Returns `null` if the cell is merged but is
not a head cell.

Text within a table cell always terminates with a newline character.*/getText():SlidesApp.TextRange;
/**Sets the [`ContentAlignment`](https://developers.google.com/apps-script/reference/slides/content-alignment.html) of the text in the table cell.*/setContentAlignment(contentAlignment:SlidesApp.ContentAlignment):SlidesApp.TableCell;}interface Table{
/**Aligns the element to the specified alignment position on the page.
@param alignmentPosition The position to align this page element to on the page.
@return This page element, for chaining.*/alignOnPage(alignmentPosition:SlidesApp.AlignmentPosition):SlidesApp.Table;
/**Appends a new column to the right of the last column of the table.
@return The new appended column.*/appendColumn():SlidesApp.TableColumn;
/**Appends a new row below the last row of the table.
@return The new appended row.*/appendRow():SlidesApp.TableRow;
/**Brings the page element forward on the page by one element.

The page element must not be in a group.
@return This page element, for chaining.*/bringForward():SlidesApp.Table;
/**Brings the page element to the front of the page.

The page element must not be in a group.
@return This page element, for chaining.*/bringToFront():SlidesApp.Table;
/**Duplicates the page element.

The duplicate page element is placed on the same page at the same position as the original.
@return The new duplicate of this page element.*/duplicate():SlidesApp.PageElement;
/**Returns the specified cell in the table.
@param rowIndex The row index of the cell to retrieve.
@param columnIndex The column index of the cell to retrieve.
@return The table cell retrieved.*/getCell(rowIndex:Integer,columnIndex:Integer):SlidesApp.TableCell;
/**Returns the specified column in the table.
@param columnIndex The 0-based column index.
@return The table column retrieved.*/getColumn(columnIndex:Integer):SlidesApp.TableColumn;
/**Returns the list of `ConnectionSite`s on the page element, or an empty list if the page
element does not have any connection sites.
@return The connection sites list, which may be empty if this element has no connection sites.*/getConnectionSites():SlidesApp.ConnectionSite[];
/**Returns the page element's alt text description. The description is combined with the title to
display and read alt text.
@return The page element's alt text description.*/getDescription():string;
/**Gets the element's height in points, which is the height of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@return The page element's inherent height in points, or `null` if the page element does
    not have a height.*/getHeight():number;
/**Returns the element's inherent height in points.

The page element's transform is relative to its inherent size. Use the inherent size in
conjunction with the element's transform to determine the element's final visual appearance.
@return The page element's inherent height in points, or `null` if the page element does
    not have a height.*/getInherentHeight():number;
/**Returns the element's inherent width in points.

The page element's transform is relative to its inherent size. Use the inherent size in
conjunction with the element's transform to determine the element's final visual appearance.
@return The page element's inherent width in points, or `null` if the page element does
    not have a width.*/getInherentWidth():number;
/**Returns the element's horizontal position in points, measured from the upper-left corner of the
page when the element has no rotation.
@return This element's horizontal position in points, from the upper-left corner of the page.*/getLeft():number;
/**Returns the number of columns in the table.
@return The number fo columns in this table.*/getNumColumns():Integer;
/**Returns the number of rows in the table.
@return The number of rows in this table.*/getNumRows():Integer;
/**Returns the unique ID for this object. Object IDs used by pages and page elements share the
same namespace.
@return The unique ID for this object.*/getObjectId():string;
/**Returns the page element's type, represented as a [`PageElementType`](https://developers.google.com/apps-script/reference/slides/page-element-type.html) enum.
@return The page element's type.*/getPageElementType():SlidesApp.PageElementType;
/**Returns the group this page element belongs to, or `null` if the element is not in a
group.
@return The group this page element belongs to, or `null`.*/getParentGroup():SlidesApp.Group;
/**Returns the page this page element is on.
@return The page this element resides on.*/getParentPage():SlidesApp.Page;
/**Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
means no rotation.
@return The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).*/getRotation():number;
/**Returns the specified row in the table.
@param rowIndex The index of the row to retrieve.
@return The table row retrieved.*/getRow(rowIndex:Integer):SlidesApp.TableRow;
/**Returns the page element's alt text title. The title is combined with the description to
display and read alt text.
@return The page element's alt text title.*/getTitle():string;
/**Gets the element's vertical position in points, measured from the upper-left corner of the page
when the element has no rotation.
@return This element's vertical position in points, from the upper-left corner of the page.*/getTop():number;
/**Returns the page element's transform.

The visual appearance of the page element is determined by its absolute transform. To
compute the absolute transform, preconcatenate a page element's transform with the transforms
of all of its parent groups. If the page element is not in a group, its absolute transform is
the same as the value in this field.
@return The page element's transform.*/getTransform():SlidesApp.AffineTransform;
/**Returns the element's width in points, which is the width of the element's bounding box when
the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@return The page element's inherent width in points, or `null` if the page element does
    not have a width.*/getWidth():number;
/**Inserts a new column at the specified index of the table.

If all the cells in the column to the left of the specified index are merged with other
columns, the new column is inserted to the right of the common columns spanned by these cells.
@param index The index at which to insert a new column.
@return The new inserted column.*/insertColumn(index:Integer):SlidesApp.TableColumn;
/**Inserts a new row at the specified index of the table.

If all the cells in the row above the specified index are merged with other rows, the new
row is inserted below the common rows spanned by these cells.
@param index The index at which to insert a new row.
@return The new inserted row.*/insertRow(index:Integer):SlidesApp.TableRow;
/**Preconcatenates the provided transform to the existing transform of the page element.

```
newTransform = argument * existingTransform
```

For example, to move a page elements 36 points to the left:

```
element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
    .setTranslateX(-36.0)
    .build());
```

You can also replace the page element's transform with [`setTransform(transform)`](https://developers.google.com/apps-script/reference/slides/table.html#setTransform(AffineTransform)).
@param transform The transform to preconcatenate onto this page element's transform.
@return This page element, for chaining.*/preconcatenateTransform(transform:SlidesApp.AffineTransform):SlidesApp.Table;
/**Removes the page element.

If after a remove operation, a `Group` contains only one or no page elements, the
group itself is also removed.

If a placeholder `PageElement` is removed on a master or layout, any empty inheriting
placeholders are also removed.*/remove():void;
/**Scales the element's height by the specified ratio. The element's height is the height of its
bounding box when the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param ratio The ratio to scale this page element's height by.
@return This page element, for chaining.*/scaleHeight(ratio:number):SlidesApp.Table;
/**Scales the element's width by the specified ratio. The element's width is the width of its
bounding box when the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param ratio The ratio to scale this page element's width by.
@return This page element, for chaining.*/scaleWidth(ratio:number):SlidesApp.Table;
/**Selects only the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) in the active presentation and removes any previous
selection. This is the same as calling [`select(replace)`](https://developers.google.com/apps-script/reference/slides/table.html#select(Boolean)) with `true`.

A script can only access the selection of the user who is running the script, and only if
the script is [bound](/apps-script/scripts_containers) to the presentation.

This sets the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) as the [`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var pageElement = slide.getPageElements()[0];
// Only select this page element and replace any previous selection.
pageElement.select();
```*/select():void;
/**Selects the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) in the active presentation.

A script can only access the selection of the user who is running the script, and only if
the script is [bound](/apps-script/scripts_containers) to the presentation.

Pass `true` to this method to select only the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) and remove any
previous selection. This also sets the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) as the
[`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).

Pass `false` to select multiple [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) objects. The [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html)
objects must be in the same [`Page`](https://developers.google.com/apps-script/reference/slides/page.html).

The following conditions must be met while selecting a page element using a `false`
parameter:

  1. The parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) object must be the [`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).
  1. There should not be multiple [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) objects selected.

To make sure that’s the case the preferred approach is to select the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html)
first using [`Page.selectAsCurrentPage()`](https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()) and then select the page elements in that page.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
// First select the slide page, as the current page selection.
slide.selectAsCurrentPage();
// Then select all the page elements in the selected slide page.
var pageElements = slide.getPageElements();
for (var i = 0; i < pageElements.length; i++) {
  pageElements[i].select(false);
}
```
@param replace If `true`, the selection replaces any previous selection; otherwise the
    selection is added to any previous selection.*/select(replace:boolean):void;
/**Sends the page element backward on the page by one element.

The page element must not be in a group.
@return This page element, for chaining.*/sendBackward():SlidesApp.Table;
/**Sends the page element to the back of the page.

The page element must not be in a group.
@return This page element, for chaining.*/sendToBack():SlidesApp.Table;
/**Sets the page element's alt text description.

The method is not supported for [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) elements.

```
// Set the first page element's alt text description to "new alt text description".
var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
pageElement.setDescription('new alt text description');
Logger.log(pageElement.getDescription());
```
@param description The string to set the alt text description to.
@return This page element.*/setDescription(description:string):SlidesApp.Table;
/**Sets the element's height in points, which is the height of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param height The new height of this page element to set, in points.
@return This page element, for chaining.*/setHeight(height:number):SlidesApp.Table;
/**Sets the element's horizontal position in points, measured from the upper-left corner of the
page when the element has no rotation.
@param left The new horizontal position to set, in points.
@return This page element, for chaining.*/setLeft(left:number):SlidesApp.Table;
/**Sets the element's clockwise rotation angle around its center in degrees.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param angle The new clockwise rotation angle to set, in degrees.
@return This page element, for chaining.*/setRotation(angle:number):SlidesApp.Table;
/**Sets the page element's alt text title.

The method is not supported for [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) elements.

```
// Set the first page element's alt text title to "new alt text title".
var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
pageElement.setTitle('new alt text title');
Logger.log(pageElement.getTitle());
```
@param title The string to set the alt text title to.
@return This page element.*/setTitle(title:string):SlidesApp.Table;
/**Sets the element's vertical position in points, measured from the upper-left corner of the page
when the element has no rotation.
@param top The new vertical position to set, in points.
@return This page element, for chaining.*/setTop(top:number):SlidesApp.Table;
/**Sets the transform of the page element with the provided transform.

Updating the transform of a group changes the absolute transform of the page elements in
that group, which can change their visual appearance.

Updating the transform of a page element that is in a group only changes the transform of
that page element; it doesn't affect the transforms of the group or other page elements in the
group.

For details on how transforms impact the visual appearance of page elements, see [`getTransform()`](https://developers.google.com/apps-script/reference/slides/table.html#getTransform()).
@param transform The transform that is set for this page element.
@return This element, for chaining.*/setTransform(transform:SlidesApp.AffineTransform):SlidesApp.Table;
/**Sets the element's width in points, which is the width of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param width The new width of this page element to set, in points.
@return This page element, for chaining.*/setWidth(width:number):SlidesApp.Table;}interface SpeakerSpotlight{
/**Aligns the element to the specified alignment position on the page.
@param alignmentPosition The position to align this page element to on the page.
@return This page element, for chaining.*/alignOnPage(alignmentPosition:SlidesApp.AlignmentPosition):SlidesApp.SpeakerSpotlight;
/**Brings the page element forward on the page by one element.

The page element must not be in a group.
@return This page element, for chaining.*/bringForward():SlidesApp.SpeakerSpotlight;
/**Brings the page element to the front of the page.

The page element must not be in a group.
@return This page element, for chaining.*/bringToFront():SlidesApp.SpeakerSpotlight;
/**Duplicates the page element.

The duplicate page element is placed on the same page at the same position as the original.
@return The new duplicate of this page element.*/duplicate():SlidesApp.PageElement;
/**Returns the [`Border`](https://developers.google.com/apps-script/reference/slides/border.html) of the speaker spotlight.

```
// Gets the first element on the page, which in
// this example is of type speaker spotlight.
const speakerSpotlight = slide.getPageElements()[0];
// Gets the border of the speaker spotlight.
const border = speakerSpotlight.getBorder();
```
@return The border of the speaker spotlight.*/getBorder():SlidesApp.Border;
/**Returns the list of `ConnectionSite`s on the page element, or an empty list if the page
element does not have any connection sites.
@return The connection sites list, which may be empty if this element has no connection sites.*/getConnectionSites():SlidesApp.ConnectionSite[];
/**Returns the page element's alt text description. The description is combined with the title to
display and read alt text.
@return The page element's alt text description.*/getDescription():string;
/**Gets the element's height in points, which is the height of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@return The page element's inherent height in points, or `null` if the page element does
    not have a height.*/getHeight():number;
/**Returns the element's inherent height in points.

The page element's transform is relative to its inherent size. Use the inherent size in
conjunction with the element's transform to determine the element's final visual appearance.
@return The page element's inherent height in points, or `null` if the page element does
    not have a height.*/getInherentHeight():number;
/**Returns the element's inherent width in points.

The page element's transform is relative to its inherent size. Use the inherent size in
conjunction with the element's transform to determine the element's final visual appearance.
@return The page element's inherent width in points, or `null` if the page element does
    not have a width.*/getInherentWidth():number;
/**Returns the element's horizontal position in points, measured from the upper-left corner of the
page when the element has no rotation.
@return This element's horizontal position in points, from the upper-left corner of the page.*/getLeft():number;
/**Returns the [`ShapeType`](https://developers.google.com/apps-script/reference/slides/shape-type.html) of the mask applied to the speaker spotlight, or `null` if
there is no mask.

```
// Gets the first element on the page, which in
// this example is of type speaker spotlight.
const speakerSpotlight = slide.getPageElements()[0];
// Gets the shape type of the mask on the speaker spotlight.
const maskShapeType = speakerSpotlight.getMaskShapeType();
```
@return The shape type of the speaker spotlight mask.*/getMaskShapeType():SlidesApp.ShapeType;
/**Returns the unique ID for this object. Object IDs used by pages and page elements share the
same namespace.
@return The unique ID for this object.*/getObjectId():string;
/**Returns the page element's type, represented as a [`PageElementType`](https://developers.google.com/apps-script/reference/slides/page-element-type.html) enum.
@return The page element's type.*/getPageElementType():SlidesApp.PageElementType;
/**Returns the group this page element belongs to, or `null` if the element is not in a
group.
@return The group this page element belongs to, or `null`.*/getParentGroup():SlidesApp.Group;
/**Returns the page this page element is on.
@return The page this element resides on.*/getParentPage():SlidesApp.Page;
/**Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
means no rotation.
@return The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).*/getRotation():number;
/**Returns the page element's alt text title. The title is combined with the description to
display and read alt text.
@return The page element's alt text title.*/getTitle():string;
/**Gets the element's vertical position in points, measured from the upper-left corner of the page
when the element has no rotation.
@return This element's vertical position in points, from the upper-left corner of the page.*/getTop():number;
/**Returns the page element's transform.

The visual appearance of the page element is determined by its absolute transform. To
compute the absolute transform, preconcatenate a page element's transform with the transforms
of all of its parent groups. If the page element is not in a group, its absolute transform is
the same as the value in this field.
@return The page element's transform.*/getTransform():SlidesApp.AffineTransform;
/**Returns the element's width in points, which is the width of the element's bounding box when
the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@return The page element's inherent width in points, or `null` if the page element does
    not have a width.*/getWidth():number;
/**Preconcatenates the provided transform to the existing transform of the page element.

```
newTransform = argument * existingTransform
```

For example, to move a page elements 36 points to the left:

```
element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
    .setTranslateX(-36.0)
    .build());
```

You can also replace the page element's transform with [`setTransform(transform)`](https://developers.google.com/apps-script/reference/slides/speaker-spotlight.html#setTransform(AffineTransform)).
@param transform The transform to preconcatenate onto this page element's transform.
@return This page element, for chaining.*/preconcatenateTransform(transform:SlidesApp.AffineTransform):SlidesApp.SpeakerSpotlight;
/**Removes the page element.

If after a remove operation, a `Group` contains only one or no page elements, the
group itself is also removed.

If a placeholder `PageElement` is removed on a master or layout, any empty inheriting
placeholders are also removed.*/remove():void;
/**Scales the element's height by the specified ratio. The element's height is the height of its
bounding box when the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param ratio The ratio to scale this page element's height by.
@return This page element, for chaining.*/scaleHeight(ratio:number):SlidesApp.SpeakerSpotlight;
/**Scales the element's width by the specified ratio. The element's width is the width of its
bounding box when the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param ratio The ratio to scale this page element's width by.
@return This page element, for chaining.*/scaleWidth(ratio:number):SlidesApp.SpeakerSpotlight;
/**Selects only the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) in the active presentation and removes any previous
selection. This is the same as calling [`select(replace)`](https://developers.google.com/apps-script/reference/slides/speaker-spotlight.html#select(Boolean)) with `true`.

A script can only access the selection of the user who is running the script, and only if
the script is [bound](/apps-script/scripts_containers) to the presentation.

This sets the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) as the [`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var pageElement = slide.getPageElements()[0];
// Only select this page element and replace any previous selection.
pageElement.select();
```*/select():void;
/**Selects the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) in the active presentation.

A script can only access the selection of the user who is running the script, and only if
the script is [bound](/apps-script/scripts_containers) to the presentation.

Pass `true` to this method to select only the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) and remove any
previous selection. This also sets the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) as the
[`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).

Pass `false` to select multiple [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) objects. The [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html)
objects must be in the same [`Page`](https://developers.google.com/apps-script/reference/slides/page.html).

The following conditions must be met while selecting a page element using a `false`
parameter:

  1. The parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) object must be the [`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).
  1. There should not be multiple [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) objects selected.

To make sure that’s the case the preferred approach is to select the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html)
first using [`Page.selectAsCurrentPage()`](https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()) and then select the page elements in that page.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
// First select the slide page, as the current page selection.
slide.selectAsCurrentPage();
// Then select all the page elements in the selected slide page.
var pageElements = slide.getPageElements();
for (var i = 0; i < pageElements.length; i++) {
  pageElements[i].select(false);
}
```
@param replace If `true`, the selection replaces any previous selection; otherwise the
    selection is added to any previous selection.*/select(replace:boolean):void;
/**Sends the page element backward on the page by one element.

The page element must not be in a group.
@return This page element, for chaining.*/sendBackward():SlidesApp.SpeakerSpotlight;
/**Sends the page element to the back of the page.

The page element must not be in a group.
@return This page element, for chaining.*/sendToBack():SlidesApp.SpeakerSpotlight;
/**Sets the page element's alt text description.

The method is not supported for [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) elements.

```
// Set the first page element's alt text description to "new alt text description".
var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
pageElement.setDescription('new alt text description');
Logger.log(pageElement.getDescription());
```
@param description The string to set the alt text description to.
@return This page element.*/setDescription(description:string):SlidesApp.SpeakerSpotlight;
/**Sets the element's height in points, which is the height of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param height The new height of this page element to set, in points.
@return This page element, for chaining.*/setHeight(height:number):SlidesApp.SpeakerSpotlight;
/**Sets the element's horizontal position in points, measured from the upper-left corner of the
page when the element has no rotation.
@param left The new horizontal position to set, in points.
@return This page element, for chaining.*/setLeft(left:number):SlidesApp.SpeakerSpotlight;
/**Sets the element's clockwise rotation angle around its center in degrees.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param angle The new clockwise rotation angle to set, in degrees.
@return This page element, for chaining.*/setRotation(angle:number):SlidesApp.SpeakerSpotlight;
/**Sets the page element's alt text title.

The method is not supported for [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) elements.

```
// Set the first page element's alt text title to "new alt text title".
var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
pageElement.setTitle('new alt text title');
Logger.log(pageElement.getTitle());
```
@param title The string to set the alt text title to.
@return This page element.*/setTitle(title:string):SlidesApp.SpeakerSpotlight;
/**Sets the element's vertical position in points, measured from the upper-left corner of the page
when the element has no rotation.
@param top The new vertical position to set, in points.
@return This page element, for chaining.*/setTop(top:number):SlidesApp.SpeakerSpotlight;
/**Sets the transform of the page element with the provided transform.

Updating the transform of a group changes the absolute transform of the page elements in
that group, which can change their visual appearance.

Updating the transform of a page element that is in a group only changes the transform of
that page element; it doesn't affect the transforms of the group or other page elements in the
group.

For details on how transforms impact the visual appearance of page elements, see [`getTransform()`](https://developers.google.com/apps-script/reference/slides/speaker-spotlight.html#getTransform()).
@param transform The transform that is set for this page element.
@return This element, for chaining.*/setTransform(transform:SlidesApp.AffineTransform):SlidesApp.SpeakerSpotlight;
/**Sets the element's width in points, which is the width of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param width The new width of this page element to set, in points.
@return This page element, for chaining.*/setWidth(width:number):SlidesApp.SpeakerSpotlight;}interface SpacingMode{}interface _SpacingMode{
/**Paragraph spacing is skipped between list elements.*/COLLAPSE_LISTS:SpacingMode;
/**Paragraph spacing is always rendered.*/NEVER_COLLAPSE:SpacingMode;
/**A spacing mode that is not supported.*/UNSUPPORTED:SpacingMode;}interface SolidFill{
/**Get the opacity of the color, in the interval from [0, 1.0], where 1.0 means fully opaque.*/getAlpha():number;
/**Get the color of the fill.*/getColor():SlidesApp.Color;}interface SlidePosition{}interface _SlidePosition{
/**The first slide in the presentation.*/FIRST_SLIDE:SlidePosition;
/**The last slide in the presentation.*/LAST_SLIDE:SlidePosition;
/**The next slide.*/NEXT_SLIDE:SlidePosition;
/**The previous slide.*/PREVIOUS_SLIDE:SlidePosition;}interface SlideLinkingMode{}interface _SlideLinkingMode{
/**Indicates that slides are linked.*/LINKED:SlideLinkingMode;
/**Indicates that slides aren't linked.*/NOT_LINKED:SlideLinkingMode;
/**A slide linking mode that isn't supported.*/UNSUPPORTED:SlideLinkingMode;}interface Slide{
/**Duplicates the slide.

The duplicate slide is created immediately following the original.
@return The duplicated slide.*/duplicate():SlidesApp.Slide;
/**Gets the page's background.
@return The page's background.*/getBackground():SlidesApp.PageBackground;
/**Gets the [`ColorScheme`](https://developers.google.com/apps-script/reference/slides/color-scheme.html) associated with the page.
@return The page's color scheme.*/getColorScheme():SlidesApp.ColorScheme;
/**Returns the list of [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) objects on the page.*/getGroups():SlidesApp.Group[];
/**Returns the list of [`Image`](https://developers.google.com/apps-script/reference/slides/image.html) objects on the page.*/getImages():SlidesApp.Image[];
/**Gets the layout that the slide is based on or `null` if the slide is not based on a
layout.*/getLayout():SlidesApp.Layout;
/**Returns the list of [`Line`](https://developers.google.com/apps-script/reference/slides/line.html) objects on the page.*/getLines():SlidesApp.Line[];
/**Returns the notes page associated with the slide.*/getNotesPage():SlidesApp.NotesPage;
/**Gets the unique ID for the page. Object IDs used by pages and page elements share the same
namespace.*/getObjectId():string;
/**Returns the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) on the page with the given ID, or `null` if none exists.
@param id The ID of the page element that is being retrieved.
@return The page element with the given ID.*/getPageElementById(id:string):SlidesApp.PageElement;
/**Returns the list of [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) objects rendered on the page.*/getPageElements():SlidesApp.PageElement[];
/**Gets the type of the page.
@return The page type.*/getPageType():SlidesApp.PageType;
/**Returns the placeholder [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) object for a specified [`PlaceholderType`](https://developers.google.com/apps-script/reference/slides/placeholder-type.html) or
`null` if a matching placeholder is not present.

If there are multiple placeholders with the same type, it returns the one with minimal
placeholder index. If there are multiple matching placeholders with the same index, it returns
the first placeholder from the page's page elements collection.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
```*/getPlaceholder(placeholderType:SlidesApp.PlaceholderType):SlidesApp.PageElement;
/**Returns the placeholder [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) object for a specified [`PlaceholderType`](https://developers.google.com/apps-script/reference/slides/placeholder-type.html) and
a placeholder index, or `null` if the placeholder is not present.

If there are multiple placeholders with the same type and index, it returns the first
placeholder from the page's page elements collection.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
```*/getPlaceholder(placeholderType:SlidesApp.PlaceholderType,placeholderIndex:Integer):SlidesApp.PageElement;
/**Returns the list of placeholder [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) objects in the page.

```
var master = SlidesApp.getActivePresentation().getMasters()[0];
Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
```*/getPlaceholders():SlidesApp.PageElement[];
/**Returns the list of [`Shape`](https://developers.google.com/apps-script/reference/slides/shape.html) objects on the page.*/getShapes():SlidesApp.Shape[];
/**Returns the list of [`SheetsChart`](https://developers.google.com/apps-script/reference/slides/sheets-chart.html) objects on the page.*/getSheetsCharts():SlidesApp.SheetsChart[];
/**Returns a [`SlideLinkingMode`](https://developers.google.com/apps-script/reference/slides/slide-linking-mode.html) indicating if the slide is linked to another slide.
@return The slide linking mode.*/getSlideLinkingMode():SlidesApp.SlideLinkingMode;
/**Returns the source [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html) ID or `null` if the slide is not linked.

A slide only has a source [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html) ID when it is linked to a slide within
another presentation.
@return The source presentation ID or `null`.*/getSourcePresentationId():string;
/**Returns the source slide ID or `null` if the slide is not linked.

A slide only has a source slide ID when it is linked to a slide within another presentation.
@return The source slide ID or `null`.*/getSourceSlideObjectId():string;
/**Returns the list of [`Table`](https://developers.google.com/apps-script/reference/slides/table.html) objects on the page.*/getTables():SlidesApp.Table[];
/**Returns the list of [`Video`](https://developers.google.com/apps-script/reference/slides/video.html) objects on the page.*/getVideos():SlidesApp.Video[];
/**Returns the list of [`WordArt`](https://developers.google.com/apps-script/reference/slides/word-art.html) objects on the page.*/getWordArts():SlidesApp.WordArt[];
/**Groups all the specified page elements.

There should be at least two page elements on the same page that are not already in another
group. Some page elements, such as [`Videos`](https://developers.google.com/apps-script/reference/slides/video.html), [`Tables`](https://developers.google.com/apps-script/reference/slides/table.html) and [`placeholder Shapes`](https://developers.google.com/apps-script/reference/slides/shape.html#getPlaceholderType()) cannot be grouped.
@param pageElements The elements to group together.
@return The new group.*/group(pageElements:SlidesApp.PageElement[]):SlidesApp.Group;
/**Inserts a copy of the provided [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a group between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var group = otherPresentationSlide.getGroups()[0];
currentPresentationSlide.insertGroup(group); // Also available for Layout, Master, and Page.
```
@param group The group to be copied and inserted.
@return The inserted group.*/insertGroup(group:SlidesApp.Group):SlidesApp.Group;
/**Inserts an image at the top left corner of the page with a default size from the specified
image blob.

Inserting the image fetches it from the [`BlobSource`](https://developers.google.com/apps-script/reference/slides/../base/blob-source.html) once and a copy is stored for
display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
megapixels, and must be in either in PNG, JPEG, or GIF format.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
// Get the Drive image file with the given ID.
var image = DriveApp.getFileById(fileId);
slide.insertImage(image);
```
@param blobSource The image data.
@return The inserted image.*/insertImage(blobSource:BlobSource):SlidesApp.Image;
/**Inserts an image on the page with the provided position and size from the specified image blob.

The image is fetched from the provided [`BlobSource`](https://developers.google.com/apps-script/reference/slides/../base/blob-source.html) once at insertion time and a copy
is stored for display inside the presentation. Images must be less than 50MB in size, cannot
exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF format.

In order to maintain the image's aspect ratio, the image is scaled and centered with respect
to the provided size.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
// Get the Drive image file with the given ID.
var image = DriveApp.getFileById(fileId);
var position = {left: 0, top: 0};
var size = {width: 300, height: 100};
slide.insertImage(image, position.left, position.top, size.width, size.height);
```
@param blobSource The image data.
@param left The horizontal position of the image in points, measured from the upper left corner
    of the page.
@param top The vertical position of the image in points, measured from the upper left corner of
    the page.
@param width The width of the image in points.
@param height The height of the image in points.
@return The inserted image.*/insertImage(blobSource:BlobSource,left:number,top:number,width:number,height:number):SlidesApp.Image;
/**Inserts a copy of the provided [`Image`](https://developers.google.com/apps-script/reference/slides/image.html) on the page.

The inserted images's position on this page is determined from the source image's position
on its respective page.

If the provided image is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted image.

If the provided image is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the image from the source
presentation. If the copied placeholder image is empty, nothing is inserted in the destination
presentation.

```
// Copy an image between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var image = otherPresentationSlide.getImages[0];
currentPresentationSlide.insertImage(image);
```
@param image The image to be copied and inserted.
@return The inserted image.*/insertImage(image:SlidesApp.Image):SlidesApp.Image;
/**Inserts an image at the top left corner of the page with a default size from the provided URL.

Inserting the image fetches it from the URL once and a copy is stored for display inside the
presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
in either in PNG, JPEG, or GIF format.

The provided URL must be publicly accessible and no larger than 2kB. The URL itself is saved
with the image and exposed via [`Image.getSourceUrl()`](https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()).
@param imageUrl The image URL.
@return The inserted image.*/insertImage(imageUrl:string):SlidesApp.Image;
/**Inserts an image on the page with the provided position and size from the provided URL.

Inserting the image fetches it from the URL once and a copy is stored for display inside the
presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
in either in PNG, JPEG, or GIF format.

The provided URL must be publicly accessible and no larger than 2kB. The URL itself is saved
with the image and exposed via [`Image.getSourceUrl()`](https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()).

In order to maintain the image's aspect ratio, the image is scaled and centered with respect
to the provided size.
@param imageUrl The image URL.
@param left The horizontal position of the image in points, measured from the upper left corner
    of the page.
@param top The vertical position of the image in points, measured from the upper left corner of
    the page.
@param width The width of the image in points.
@param height The height of the image in points.
@return The inserted image.*/insertImage(imageUrl:string,left:number,top:number,width:number,height:number):SlidesApp.Image;
/**Inserts a copy of the provided [`Line`](https://developers.google.com/apps-script/reference/slides/line.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a line between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var line = otherPresentationSlide.getLines[0];
currentPresentationSlide.insertLine(line);
```
@param line The line to be copied and inserted.
@return The inserted line.*/insertLine(line:SlidesApp.Line):SlidesApp.Line;
/**Inserts a line on the page.

```
// Insert a line in the first slide of the presentation.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var startPoint = {left: 10, top: 10};
var endPoint = {left: 40, top: 40};
slide.insertLine(
    SlidesApp.LineCategory.STRAIGHT,
    startPoint.left,
    startPoint.top,
    endPoint.left,
    endPoint.top);
```
@param lineCategory The category of the line to insert.
@param startLeft The horizontal position of the start point of the line, measured in points
    from the upper left corner of the page.
@param startTop The vertical position of the start point of the line, measured in points from
    the upper left corner of the page.
@param endLeft The horizontal position of the end point of the line, measured in points from
    the upper left corner of the page.
@param endTop The vertical position of the end point of the line, measured in points from the
    upper left corner of the page.
@return The inserted line.*/insertLine(lineCategory:SlidesApp.LineCategory,startLeft:number,startTop:number,endLeft:number,endTop:number):SlidesApp.Line;
/**Inserts a line on the page connecting two [`connection sites`](https://developers.google.com/apps-script/reference/slides/connection-site.html). The two
connection sites must be on this page.

```
// Insert a line in the first slide of the presentation connecting two shapes.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var shape1 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
var shape2 = slide.insertShape(SlidesApp.ShapeType.CLOUD);
slide.insertLine(
    SlidesApp.LineCategory.BENT,
    shape1.getConnectionSites()[0],
    shape2.getConnectionSites()[1]);
```
@param lineCategory The category of the line to insert.
@param startConnectionSite The connection site where the start of the line is to be connected.
@param endConnectionSite The connection site where the end of the line is to be connected.
@return The inserted line.*/insertLine(lineCategory:SlidesApp.LineCategory,startConnectionSite:SlidesApp.ConnectionSite,endConnectionSite:SlidesApp.ConnectionSite):SlidesApp.Line;
/**Inserts a copy of the provided [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a page element between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var pageElement = otherPresentationSlide.getPageElements()[0];

// Also available for Layout, Master, and Page.
currentPresentationSlide.insertPageElement(pageElement);
```
@param pageElement The page element to be copied and inserted.
@return The inserted page element.*/insertPageElement(pageElement:SlidesApp.PageElement):SlidesApp.PageElement;
/**Inserts a copy of the provided [`Shape`](https://developers.google.com/apps-script/reference/slides/shape.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a shape between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var shape = otherPresentationSlide.getShapes[0];
currentPresentationSlide.insertShape(shape); // Also available for Layout, Master, and Page.
```
@param shape The shape to be copied and inserted.
@return The inserted shape.*/insertShape(shape:SlidesApp.Shape):SlidesApp.Shape;
/**Inserts a shape on the page.

The shape is inserted with a default size at the top left corner of the page.

```
// Insert a shape in the first slide of the presentation.
var slide = SlidesApp.getActivePresentation().getSlides()[0];

// Also available for Layout, Master, and Page.
slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
```
@param shapeType The type of shape to insert.
@return The inserted shape.*/insertShape(shapeType:SlidesApp.ShapeType):SlidesApp.Shape;
/**Inserts a shape on the page.
@param shapeType The type of shape to insert.
@param left The horizontal position of the shape, measured from the upper left corner of the
    page.
@param top The vertical position of the shape, measured from the upper left corner of the page.
@param width The width of the shape.
@param height The height of the shape.
@return The inserted shape.*/insertShape(shapeType:SlidesApp.ShapeType,left:number,top:number,width:number,height:number):SlidesApp.Shape;
/**Inserts a copy of the provided [`SheetsChart`](https://developers.google.com/apps-script/reference/slides/sheets-chart.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a sheets chart between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var sheetsChart = otherPresentationSlide.getSheetsCharts[0];

// Also available for Layout, Master, and Page.
currentPresentationSlide.insertSheetsChart(sheetsChart);
```
@param sheetsChart The sheets chart to be copied and inserted.
@return The inserted sheets chart.*/insertSheetsChart(sheetsChart:SlidesApp.SheetsChart):SlidesApp.SheetsChart;
/**Inserts a Google Sheets chart on the page.

The chart is inserted with a default size at the top left corner of the page.

The inserted chart is linked with the source Google Sheets chart which allows it to be
updated. Other collaborators can see the link to the source spreadsheet.

```
var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
var chart = sheet.getCharts()[0];
// Insert the spreadsheet chart in the first slide.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
slide.insertSheetsChart(chart);
```
@param sourceChart The chart in a spreadsheet to be inserted in the page.
@return The inserted chart in the page.*/insertSheetsChart(sourceChart:SpreadsheetApp.EmbeddedChart):SlidesApp.SheetsChart;
/**Inserts a Google Sheets chart on the page with the provided position and size.

In order to maintain the chart's aspect ratio, the chart is scaled and centered with respect
to the provided size.

The inserted chart is linked with the source Google Sheets chart which allows it to be
updated. Other collaborators can see the link to the source spreadsheet.

```
var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
var chart = sheet.getCharts()[0];
// Insert the spreadsheet chart in the first slide.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var position = {left: 0, top: 0};
var size = {width: 200, height: 200};

// Also available for Layout, Master, and Page.
slide.insertSheetsChart(
    chart,
    position.left,
    position.top,
    size.width,
    size.height);
```
@param sourceChart The chart in a spreadsheet to be inserted in the page.
@param left The horizontal position of the chart in points, measured from the upper left corner
    of the page.
@param top The vertical position of the chart in points, measured from the upper left corner of
    the page.
@param width The width of the chart in points.
@param height The height of the chart in points.
@return The inserted chart in the page.*/insertSheetsChart(sourceChart:SpreadsheetApp.EmbeddedChart,left:number,top:number,width:number,height:number):SlidesApp.SheetsChart;
/**Inserts a Google Sheets chart as an [`Image`](https://developers.google.com/apps-script/reference/slides/image.html) on the page.

The image of the chart is inserted with a default size at the top left corner of the page.

The inserted image of chart is not linked with the source Google Sheets chart.

```
var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
var chart = sheet.getCharts()[0];
// Insert the spreadsheet chart in the first slide.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
slide.insertSheetsChartAsImage(chart); // Also available for Layout, Master, and Page.
```
@param sourceChart The chart in a spreadsheet to be inserted in the page.
@return The inserted image of the chart in the page.*/insertSheetsChartAsImage(sourceChart:SpreadsheetApp.EmbeddedChart):SlidesApp.Image;
/**Inserts a Google Sheets chart as an [`Image`](https://developers.google.com/apps-script/reference/slides/image.html) on the page with the provided position and
size.

In order to maintain the chart image's aspect ratio, the image is scaled and centered with
respect to the provided size.

The inserted image of the chart is not linked with the source Google Sheets chart.

```
var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
var chart = sheet.getCharts()[0];
// Insert the spreadsheet chart in the first slide.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var position = {left: 0, top: 0};
var size = {width: 200, height: 200};

// Also available for Layout, Master, and Page.
slide.insertSheetsChartAsImage(
    chart,
    position.left,
    position.right,
    size.width,
    size.height);
```
@param sourceChart The chart in a spreadsheet to be inserted in the page.
@param left The horizontal position of the chart in points, measured from the upper left corner
    of the page.
@param top The vertical position of the chart in points, measured from the upper left corner of
    the page.
@param width The width of the chart in points.
@param height The height of the chart in points.
@return The inserted image of the chart in the page.*/insertSheetsChartAsImage(sourceChart:SpreadsheetApp.EmbeddedChart,left:number,top:number,width:number,height:number):SlidesApp.Image;
/**Inserts a table on the page.

The table is centered on the page with default size and evenly distributed rows and columns.
@param numRows The number of rows in the table.
@param numColumns The number of columns in the table.
@return The inserted table.*/insertTable(numRows:Integer,numColumns:Integer):SlidesApp.Table;
/**Inserts a table on the page with the provided position and size.

Rows and columns are evenly distributed in the created table.
@param numRows The number of rows in the table.
@param numColumns The number of columns in the table.
@param left The horizontal position of the table, measured from the upper left corner of the
    page.
@param top The vertical position of the table, measured from the upper left corner of the page.
@param width The width of the table.
@param height The minimum height of the table. The actual height of the rendered table depends
    on factors such as text font size.
@return The inserted table.*/insertTable(numRows:Integer,numColumns:Integer,left:number,top:number,width:number,height:number):SlidesApp.Table;
/**Inserts a copy of the provided [`Table`](https://developers.google.com/apps-script/reference/slides/table.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a table between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var table = otherPresentationSlide.getTables[0];
currentPresentationSlide.insertTable(table); // Also available for Layout, Master, and Page.
```
@param table The table to be copied and inserted.
@return The inserted table.*/insertTable(table:SlidesApp.Table):SlidesApp.Table;
/**Inserts a text box [`Shape`](https://developers.google.com/apps-script/reference/slides/shape.html) containing the provided string on the page.

The text box shape is inserted with a default size at the top left corner of the page.

```
// Insert text box with "Hello" on the first slide of presentation.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
slide.insertTextBox('Hello'); // Also available for Layout, Master, and Page.
```
@param text The string the text box shape should contain.
@return The inserted text box shape.*/insertTextBox(text:string):SlidesApp.Shape;
/**Inserts a text box [`Shape`](https://developers.google.com/apps-script/reference/slides/shape.html) containing the provided string on the page.

```
// Insert text box with "Hello" on the first slide of presentation. This text box is a square
// with a length of 10 points on each side.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
slide.insertTextBox('Hello', 0, 0, 10, 10); // Also available for Layout, Master, and Page.
```
@param text The string the text box shape should contain.
@param left The horizontal position of the text box shape, measured from the upper left corner
    of the page.
@param top The vertical position of the text box shape, measured from the upper left corner of
    the page.
@param width The width of the text box shape.
@param height The height of the text box shape.
@return The inserted text box shape.*/insertTextBox(text:string,left:number,top:number,width:number,height:number):SlidesApp.Shape;
/**Inserts a copy of the provided [`Video`](https://developers.google.com/apps-script/reference/slides/video.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a video between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var video = otherPresentationSlide.getVideos[0];
currentPresentationSlide.insertVideo(video); // Also available for Layout, Master, and Page.
```
@param video The video to be copied and inserted.
@return The inserted video.*/insertVideo(video:SlidesApp.Video):SlidesApp.Video;
/**Inserts a video at the top left corner of the page with a default size.

Only YouTube videos are currently supported.
@param videoUrl The URL of the video to insert.
@return The inserted video.*/insertVideo(videoUrl:string):SlidesApp.Video;
/**Inserts a video on the page with the provided position and size.

Only YouTube videos are currently supported.
@param videoUrl The URL of the video to insert.
@param left The horizontal position of the video in points, measured from the upper left corner
    of the page.
@param top The vertical position of the video in points, measured from the upper left corner of
    the page.
@param width The width of the video in points.
@param height The height of the video in points.
@return The inserted video.*/insertVideo(videoUrl:string,left:number,top:number,width:number,height:number):SlidesApp.Video;
/**Inserts a copy of the provided [`WordArt`](https://developers.google.com/apps-script/reference/slides/word-art.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a word art between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var wordArt = otherPresentationSlide.getWordArts[0];

// Also available for Layout, Master, and Page.
currentPresentationSlide.insertWordArt(wordArt);
```
@param wordArt The group to be copied and inserted.
@return The inserted word art.*/insertWordArt(wordArt:SlidesApp.WordArt):SlidesApp.WordArt;
/**Returns whether the slide is skipped in the presentation mode.
@return `True` if the slide is skipped in the presentation mode.*/isSkipped():boolean;
/**Move the slide to the specified index.
@param index The index where the slide should be moved to, based on the slide arrangement
    before the move. The index should be between zero and the number of slides in the
    presentation, inclusive.*/move(index:Integer):void;
/**Refreshes the slide to reflect any changes made to the linked source slide. If this slide is
not linked, returns without making any changes.

The `refreshSlide` method copies the linked source slide's corresponding master and
layout pages into the slide's presentation if they do not already exist. If they do already
exist, they are likewise updated to reflect any changes made to the source.

__Note__: The refresh overwrites any changes made to the current
slide in order to reflect the state of the source slide.

```
var currentPresentation = SlidesApp.getActivePresentation();
var sourcePresentation = SlidesApp.openById('sourcePresentationId');
var sourceSlide = sourcePresentation.getSlides()[0];
var linkedSlide = currentPresentation.append(sourceSlide, SlidesApp.SlideLinkingMode.LINKED);

sourceSlide.insertText('hello world'); // Only the source slide has the text box.

linkedSlide.refreshSlide(); // The linked slide now has the text box.
```*/refreshSlide():void;
/**Removes the page.*/remove():void;
/**Replaces all instances of text matching find text with replace text. The search is case
insensitive.
@param findText The text to find.
@param replaceText The text to replace the matched text.
@return the number of occurrences changed*/replaceAllText(findText:string,replaceText:string):Integer;
/**Replaces all instances of text matching find text with replace text.
@param findText The text to find.
@param replaceText The text to replace the matched text.
@param matchCase If `true`, the search is case sensitive; if `false`, the search is
    case insensitive.
@return the number of occurrences changed*/replaceAllText(findText:string,replaceText:string,matchCase:boolean):Integer;
/**Selects the [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) in the active presentation as the [`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()) and removes any previous selection.

A script can only access the selection of the user who is running the script, and only if
the script is [bound](/apps-script/scripts_containers) to the presentation.

```
// Select the first slide as the current page selection and replace any previous selection.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
slide.selectAsCurrentPage(); // Also available for Layout, Master, and Page.
```*/selectAsCurrentPage():void;
/**Sets whether the slide is skipped in the presentation mode.
@param isSkipped `True` to skip the slide in the presentation mode.*/setSkipped(isSkipped:boolean):void;
/**Unlinks the current [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html) from its source slide. If this slide is not linked, returns
without making any changes.

```
var currentPresentation = SlidesApp.getActivePresentation();
var sourcePresentation = SlidesApp.openById('sourcePresentationId');
var sourceSlide = sourcePresentation.getSlides()[0];
var linkedSlide = currentPresentation.append(sourceSlide, SlidesApp.SlideLinkingMode.LINKED);

linkedSlide.unlink();

linkedSlide.getSourcePresentationId(); // returns null
linkedSlide.getSourceSlideObjectId();  // returns null
linkedSlide.getSlideLinkingMode();     // returns SlidesApp.SlideLinkingMode.NOT_LINKED
```*/unlink():void;}interface SheetsChartEmbedType{}interface _SheetsChartEmbedType{
/**Indicates that the chart is embedded as an image.*/IMAGE:SheetsChartEmbedType;
/**Represents a chart that is not supported and cannot be further classified.*/UNSUPPORTED:SheetsChartEmbedType;}interface SheetsChart{
/**Aligns the element to the specified alignment position on the page.
@param alignmentPosition The position to align this page element to on the page.
@return This page element, for chaining.*/alignOnPage(alignmentPosition:SlidesApp.AlignmentPosition):SlidesApp.SheetsChart;
/**Returns the chart as an image or `null` if the chart is not an embedded image.
@return This chart as an image, or `null` if the chart is not an embedded image.*/asImage():SlidesApp.Image;
/**Brings the page element forward on the page by one element.

The page element must not be in a group.
@return This page element, for chaining.*/bringForward():SlidesApp.SheetsChart;
/**Brings the page element to the front of the page.

The page element must not be in a group.
@return This page element, for chaining.*/bringToFront():SlidesApp.SheetsChart;
/**Duplicates the page element.

The duplicate page element is placed on the same page at the same position as the original.
@return The new duplicate of this page element.*/duplicate():SlidesApp.PageElement;
/**Gets the ID of the specific chart in the Google Sheets spreadsheet that is embedded.
@return The ID of the embedded chart.*/getChartId():Integer;
/**Returns the list of `ConnectionSite`s on the page element, or an empty list if the page
element does not have any connection sites.
@return The connection sites list, which may be empty if this element has no connection sites.*/getConnectionSites():SlidesApp.ConnectionSite[];
/**Returns the page element's alt text description. The description is combined with the title to
display and read alt text.
@return The page element's alt text description.*/getDescription():string;
/**Returns the embed type of the Sheets chart.
@return The embed type of this chart.*/getEmbedType():SlidesApp.SheetsChartEmbedType;
/**Gets the element's height in points, which is the height of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@return The page element's inherent height in points, or `null` if the page element does
    not have a height.*/getHeight():number;
/**Returns the element's inherent height in points.

The page element's transform is relative to its inherent size. Use the inherent size in
conjunction with the element's transform to determine the element's final visual appearance.
@return The page element's inherent height in points, or `null` if the page element does
    not have a height.*/getInherentHeight():number;
/**Returns the element's inherent width in points.

The page element's transform is relative to its inherent size. Use the inherent size in
conjunction with the element's transform to determine the element's final visual appearance.
@return The page element's inherent width in points, or `null` if the page element does
    not have a width.*/getInherentWidth():number;
/**Returns the element's horizontal position in points, measured from the upper-left corner of the
page when the element has no rotation.
@return This element's horizontal position in points, from the upper-left corner of the page.*/getLeft():number;
/**Returns the [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) or `null` if there is no link.

```
var link = shape.getLink();
if (link != null) {
  Logger.log('Shape has a link of type: ' + link.getLinkType());
}
```*/getLink():SlidesApp.Link;
/**Returns the unique ID for this object. Object IDs used by pages and page elements share the
same namespace.
@return The unique ID for this object.*/getObjectId():string;
/**Returns the page element's type, represented as a [`PageElementType`](https://developers.google.com/apps-script/reference/slides/page-element-type.html) enum.
@return The page element's type.*/getPageElementType():SlidesApp.PageElementType;
/**Returns the group this page element belongs to, or `null` if the element is not in a
group.
@return The group this page element belongs to, or `null`.*/getParentGroup():SlidesApp.Group;
/**Returns the page this page element is on.
@return The page this element resides on.*/getParentPage():SlidesApp.Page;
/**Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
means no rotation.
@return The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).*/getRotation():number;
/**Gets the ID of the Google Sheets spreadsheet that contains the source chart.
@return The ID of the spreadsheet that contains the source chart.*/getSpreadsheetId():string;
/**Returns the page element's alt text title. The title is combined with the description to
display and read alt text.
@return The page element's alt text title.*/getTitle():string;
/**Gets the element's vertical position in points, measured from the upper-left corner of the page
when the element has no rotation.
@return This element's vertical position in points, from the upper-left corner of the page.*/getTop():number;
/**Returns the page element's transform.

The visual appearance of the page element is determined by its absolute transform. To
compute the absolute transform, preconcatenate a page element's transform with the transforms
of all of its parent groups. If the page element is not in a group, its absolute transform is
the same as the value in this field.
@return The page element's transform.*/getTransform():SlidesApp.AffineTransform;
/**Returns the element's width in points, which is the width of the element's bounding box when
the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@return The page element's inherent width in points, or `null` if the page element does
    not have a width.*/getWidth():number;
/**Preconcatenates the provided transform to the existing transform of the page element.

```
newTransform = argument * existingTransform
```

For example, to move a page elements 36 points to the left:

```
element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
    .setTranslateX(-36.0)
    .build());
```

You can also replace the page element's transform with [`setTransform(transform)`](https://developers.google.com/apps-script/reference/slides/sheets-chart.html#setTransform(AffineTransform)).
@param transform The transform to preconcatenate onto this page element's transform.
@return This page element, for chaining.*/preconcatenateTransform(transform:SlidesApp.AffineTransform):SlidesApp.SheetsChart;
/**Refreshes the chart by replacing it with the latest version of the chart from Google Sheets. If
the chart is already up to date, does not make any change to the chart in the presentation.*/refresh():void;
/**Removes the page element.

If after a remove operation, a `Group` contains only one or no page elements, the
group itself is also removed.

If a placeholder `PageElement` is removed on a master or layout, any empty inheriting
placeholders are also removed.*/remove():void;
/**Removes a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html).

```
shape.removeLink();
```*/removeLink():void;
/**Scales the element's height by the specified ratio. The element's height is the height of its
bounding box when the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param ratio The ratio to scale this page element's height by.
@return This page element, for chaining.*/scaleHeight(ratio:number):SlidesApp.SheetsChart;
/**Scales the element's width by the specified ratio. The element's width is the width of its
bounding box when the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param ratio The ratio to scale this page element's width by.
@return This page element, for chaining.*/scaleWidth(ratio:number):SlidesApp.SheetsChart;
/**Selects only the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) in the active presentation and removes any previous
selection. This is the same as calling [`select(replace)`](https://developers.google.com/apps-script/reference/slides/sheets-chart.html#select(Boolean)) with `true`.

A script can only access the selection of the user who is running the script, and only if
the script is [bound](/apps-script/scripts_containers) to the presentation.

This sets the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) as the [`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var pageElement = slide.getPageElements()[0];
// Only select this page element and replace any previous selection.
pageElement.select();
```*/select():void;
/**Selects the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) in the active presentation.

A script can only access the selection of the user who is running the script, and only if
the script is [bound](/apps-script/scripts_containers) to the presentation.

Pass `true` to this method to select only the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) and remove any
previous selection. This also sets the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) as the
[`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).

Pass `false` to select multiple [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) objects. The [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html)
objects must be in the same [`Page`](https://developers.google.com/apps-script/reference/slides/page.html).

The following conditions must be met while selecting a page element using a `false`
parameter:

  1. The parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) object must be the [`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).
  1. There should not be multiple [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) objects selected.

To make sure that’s the case the preferred approach is to select the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html)
first using [`Page.selectAsCurrentPage()`](https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()) and then select the page elements in that page.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
// First select the slide page, as the current page selection.
slide.selectAsCurrentPage();
// Then select all the page elements in the selected slide page.
var pageElements = slide.getPageElements();
for (var i = 0; i < pageElements.length; i++) {
  pageElements[i].select(false);
}
```
@param replace If `true`, the selection replaces any previous selection; otherwise the
    selection is added to any previous selection.*/select(replace:boolean):void;
/**Sends the page element backward on the page by one element.

The page element must not be in a group.
@return This page element, for chaining.*/sendBackward():SlidesApp.SheetsChart;
/**Sends the page element to the back of the page.

The page element must not be in a group.
@return This page element, for chaining.*/sendToBack():SlidesApp.SheetsChart;
/**Sets the page element's alt text description.

The method is not supported for [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) elements.

```
// Set the first page element's alt text description to "new alt text description".
var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
pageElement.setDescription('new alt text description');
Logger.log(pageElement.getDescription());
```
@param description The string to set the alt text description to.
@return This page element.*/setDescription(description:string):SlidesApp.SheetsChart;
/**Sets the element's height in points, which is the height of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param height The new height of this page element to set, in points.
@return This page element, for chaining.*/setHeight(height:number):SlidesApp.SheetsChart;
/**Sets the element's horizontal position in points, measured from the upper-left corner of the
page when the element has no rotation.
@param left The new horizontal position to set, in points.
@return This page element, for chaining.*/setLeft(left:number):SlidesApp.SheetsChart;
/**Sets a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) to the given [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html) using the zero-based index of the slide.

```
// Set a link to the first slide of the presentation.
shape.setLinkSlide(0);
```
@param slideIndex The zero-based index to the slide.
@return the [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) that was set*/setLinkSlide(slideIndex:Integer):SlidesApp.Link;
/**Sets a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) to the given [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html), the link is set by the given slide ID.

```
// Set a link to the first slide of the presentation.
var slide = presentation.getSlides()[0];
shape.setLinkSlide(slide);
```
@param slide The [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html) to be linked.
@return the [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) that was set*/setLinkSlide(slide:SlidesApp.Slide):SlidesApp.Link;
/**Sets a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) to the given [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html) using the relative position of the slide.

```
// Set a link to the first slide of the presentation.
shape.setLinkSlide(SlideApp.SlidePosition.FIRST_SLIDE);
```
@param slidePosition The relative [`SlidePosition`](https://developers.google.com/apps-script/reference/slides/slide-position.html).
@return the [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) that was set*/setLinkSlide(slidePosition:SlidesApp.SlidePosition):SlidesApp.Link;
/**Sets a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) to the given non-empty URL string.

```
// Set a link to the URL.
shape.setLinkUrl("https://slides.google.com");
```
@param url The URL string.
@return the [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) that was set*/setLinkUrl(url:string):SlidesApp.Link;
/**Sets the element's clockwise rotation angle around its center in degrees.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param angle The new clockwise rotation angle to set, in degrees.
@return This page element, for chaining.*/setRotation(angle:number):SlidesApp.SheetsChart;
/**Sets the page element's alt text title.

The method is not supported for [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) elements.

```
// Set the first page element's alt text title to "new alt text title".
var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
pageElement.setTitle('new alt text title');
Logger.log(pageElement.getTitle());
```
@param title The string to set the alt text title to.
@return This page element.*/setTitle(title:string):SlidesApp.SheetsChart;
/**Sets the element's vertical position in points, measured from the upper-left corner of the page
when the element has no rotation.
@param top The new vertical position to set, in points.
@return This page element, for chaining.*/setTop(top:number):SlidesApp.SheetsChart;
/**Sets the transform of the page element with the provided transform.

Updating the transform of a group changes the absolute transform of the page elements in
that group, which can change their visual appearance.

Updating the transform of a page element that is in a group only changes the transform of
that page element; it doesn't affect the transforms of the group or other page elements in the
group.

For details on how transforms impact the visual appearance of page elements, see [`getTransform()`](https://developers.google.com/apps-script/reference/slides/sheets-chart.html#getTransform()).
@param transform The transform that is set for this page element.
@return This element, for chaining.*/setTransform(transform:SlidesApp.AffineTransform):SlidesApp.SheetsChart;
/**Sets the element's width in points, which is the width of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param width The new width of this page element to set, in points.
@return This page element, for chaining.*/setWidth(width:number):SlidesApp.SheetsChart;}interface ShapeType{}interface _ShapeType{
/**Curved arc shape. Corresponds to ECMA-376 ST_ShapeType 'arc'.*/ARC:ShapeType;
/**East arrow shape.*/ARROW_EAST:ShapeType;
/**North arrow shape.*/ARROW_NORTH:ShapeType;
/**Northeast arrow shape.*/ARROW_NORTH_EAST:ShapeType;
/**Bent arrow shape. Corresponds to ECMA-376 ST_ShapeType 'bentArrow'.*/BENT_ARROW:ShapeType;
/**Bent up arrow shape. Corresponds to ECMA-376 ST_ShapeType 'bentUpArrow'.*/BENT_UP_ARROW:ShapeType;
/**Bevel shape. Corresponds to ECMA-376 ST_ShapeType 'bevel'.*/BEVEL:ShapeType;
/**Block arc shape. Corresponds to ECMA-376 ST_ShapeType 'blockArc'.*/BLOCK_ARC:ShapeType;
/**Brace pair shape. Corresponds to ECMA-376 ST_ShapeType 'bracePair'.*/BRACE_PAIR:ShapeType;
/**Bracket pair shape. Corresponds to ECMA-376 ST_ShapeType 'bracketPair'.*/BRACKET_PAIR:ShapeType;
/**Can shape. Corresponds to ECMA-376 ST_ShapeType 'can'.*/CAN:ShapeType;
/**Chevron shape. Corresponds to ECMA-376 ST_ShapeType 'chevron'.*/CHEVRON:ShapeType;
/**Chord shape. Corresponds to ECMA-376 ST_ShapeType 'chord'.*/CHORD:ShapeType;
/**Cloud shape. Corresponds to ECMA-376 ST_ShapeType 'cloud'.*/CLOUD:ShapeType;
/**Callout cloud shape. Corresponds to ECMA-376 ST_ShapeType 'cloudCallout'.*/CLOUD_CALLOUT:ShapeType;
/**Corner shape. Corresponds to ECMA-376 ST_ShapeType 'corner'.*/CORNER:ShapeType;
/**Cube shape. Corresponds to ECMA-376 ST_ShapeType 'cube'.*/CUBE:ShapeType;
/**Curved down arrow shape. Corresponds to ECMA-376 ST_ShapeType 'curvedDownArrow'.*/CURVED_DOWN_ARROW:ShapeType;
/**Curved left arrow shape. Corresponds to ECMA-376 ST_ShapeType 'curvedLeftArrow'.*/CURVED_LEFT_ARROW:ShapeType;
/**Curved right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'curvedRightArrow'.*/CURVED_RIGHT_ARROW:ShapeType;
/**Curved up arrow shape. Corresponds to ECMA-376 ST_ShapeType 'curvedUpArrow'.*/CURVED_UP_ARROW:ShapeType;
/**Custom shape.*/CUSTOM:ShapeType;
/**Decagon shape. Corresponds to ECMA-376 ST_ShapeType 'decagon'.*/DECAGON:ShapeType;
/**Diagonal stripe shape. Corresponds to ECMA-376 ST_ShapeType 'diagStripe'.*/DIAGONAL_STRIPE:ShapeType;
/**Diamond shape. Corresponds to ECMA-376 ST_ShapeType 'diamond'.*/DIAMOND:ShapeType;
/**Dodecagon shape. Corresponds to ECMA-376 ST_ShapeType 'dodecagon'.*/DODECAGON:ShapeType;
/**Donut shape. Corresponds to ECMA-376 ST_ShapeType 'donut'.*/DONUT:ShapeType;
/**Double wave shape. Corresponds to ECMA-376 ST_ShapeType 'doubleWave'.*/DOUBLE_WAVE:ShapeType;
/**Down arrow shape. Corresponds to ECMA-376 ST_ShapeType 'downArrow'.*/DOWN_ARROW:ShapeType;
/**Callout down arrow shape. Corresponds to ECMA-376 ST_ShapeType 'downArrowCallout'.*/DOWN_ARROW_CALLOUT:ShapeType;
/**Ellipse shape. Corresponds to ECMA-376 ST_ShapeType 'ellipse'.*/ELLIPSE:ShapeType;
/**Ellipse ribbon shape. Corresponds to ECMA-376 ST_ShapeType 'ellipseRibbon'.*/ELLIPSE_RIBBON:ShapeType;
/**Ellipse ribbon 2 shape. Corresponds to ECMA-376 ST_ShapeType 'ellipseRibbon2'.*/ELLIPSE_RIBBON_2:ShapeType;
/**Alternate process flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartAlternateProcess'.*/FLOW_CHART_ALTERNATE_PROCESS:ShapeType;
/**Collate flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartCollate'.*/FLOW_CHART_COLLATE:ShapeType;
/**Connector flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartConnector'.*/FLOW_CHART_CONNECTOR:ShapeType;
/**Decision flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartDecision'.*/FLOW_CHART_DECISION:ShapeType;
/**Delay flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartDelay'.*/FLOW_CHART_DELAY:ShapeType;
/**Display flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartDisplay'.*/FLOW_CHART_DISPLAY:ShapeType;
/**Document flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartDocument'.*/FLOW_CHART_DOCUMENT:ShapeType;
/**Extract flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartExtract'.*/FLOW_CHART_EXTRACT:ShapeType;
/**Input output flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartInputOutput'.*/FLOW_CHART_INPUT_OUTPUT:ShapeType;
/**Internal storage flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartInternalStorage'.*/FLOW_CHART_INTERNAL_STORAGE:ShapeType;
/**Magnetic disk flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartMagneticDisk'.*/FLOW_CHART_MAGNETIC_DISK:ShapeType;
/**Magnetic drum flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartMagneticDrum'.*/FLOW_CHART_MAGNETIC_DRUM:ShapeType;
/**Magnetic tape flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartMagneticTape'.*/FLOW_CHART_MAGNETIC_TAPE:ShapeType;
/**Manual input flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartManualInput'.*/FLOW_CHART_MANUAL_INPUT:ShapeType;
/**Manual operation flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartManualOperation'.*/FLOW_CHART_MANUAL_OPERATION:ShapeType;
/**Merge flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartMerge'.*/FLOW_CHART_MERGE:ShapeType;
/**Multi-document flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartMultidocument'.*/FLOW_CHART_MULTIDOCUMENT:ShapeType;
/**Offline storage flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartOfflineStorage'.*/FLOW_CHART_OFFLINE_STORAGE:ShapeType;
/**Off-page connector flow shape. Corresponds to ECMA-376 ST_ShapeType
'flowChartOffpageConnector'.*/FLOW_CHART_OFFPAGE_CONNECTOR:ShapeType;
/**Online storage flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartOnlineStorage'.*/FLOW_CHART_ONLINE_STORAGE:ShapeType;
/**Or flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartOr'.*/FLOW_CHART_OR:ShapeType;
/**Predefined process flow shape. Corresponds to ECMA-376 ST_ShapeType
'flowChartPredefinedProcess'.*/FLOW_CHART_PREDEFINED_PROCESS:ShapeType;
/**Preparation flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartPreparation'.*/FLOW_CHART_PREPARATION:ShapeType;
/**Process flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartProcess'.*/FLOW_CHART_PROCESS:ShapeType;
/**Punched card flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartPunchedCard'.*/FLOW_CHART_PUNCHED_CARD:ShapeType;
/**Punched tape flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartPunchedTape'.*/FLOW_CHART_PUNCHED_TAPE:ShapeType;
/**Sort flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartSort'.*/FLOW_CHART_SORT:ShapeType;
/**Summing junction flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartSummingJunction'.*/FLOW_CHART_SUMMING_JUNCTION:ShapeType;
/**Terminator flow shape. Corresponds to ECMA-376 ST_ShapeType 'flowChartTerminator'.*/FLOW_CHART_TERMINATOR:ShapeType;
/**Folded corner shape. Corresponds to ECMA-376 ST_ShapeType 'foldedCorner'.*/FOLDED_CORNER:ShapeType;
/**Frame shape. Corresponds to ECMA-376 ST_ShapeType 'frame'.*/FRAME:ShapeType;
/**Half frame shape. Corresponds to ECMA-376 ST_ShapeType 'halfFrame'.*/HALF_FRAME:ShapeType;
/**Heart shape. Corresponds to ECMA-376 ST_ShapeType 'heart'.*/HEART:ShapeType;
/**Heptagon shape. Corresponds to ECMA-376 ST_ShapeType 'heptagon'.*/HEPTAGON:ShapeType;
/**Hexagon shape. Corresponds to ECMA-376 ST_ShapeType 'hexagon'.*/HEXAGON:ShapeType;
/**Home plate shape. Corresponds to ECMA-376 ST_ShapeType 'homePlate'.*/HOME_PLATE:ShapeType;
/**Horizontal scroll shape. Corresponds to ECMA-376 ST_ShapeType 'horizontalScroll'.*/HORIZONTAL_SCROLL:ShapeType;
/**Irregular seal 1 shape. Corresponds to ECMA-376 ST_ShapeType 'irregularSeal1'.*/IRREGULAR_SEAL_1:ShapeType;
/**Irregular seal 2 shape. Corresponds to ECMA-376 ST_ShapeType 'irregularSeal2'.*/IRREGULAR_SEAL_2:ShapeType;
/**Left arrow shape. Corresponds to ECMA-376 ST_ShapeType 'leftArrow'.*/LEFT_ARROW:ShapeType;
/**Callout left arrow shape. Corresponds to ECMA-376 ST_ShapeType 'leftArrowCallout'.*/LEFT_ARROW_CALLOUT:ShapeType;
/**Left brace shape. Corresponds to ECMA-376 ST_ShapeType 'leftBrace'.*/LEFT_BRACE:ShapeType;
/**Left bracket shape. Corresponds to ECMA-376 ST_ShapeType 'leftBracket'.*/LEFT_BRACKET:ShapeType;
/**Left right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'leftRightArrow'.*/LEFT_RIGHT_ARROW:ShapeType;
/**Callout left right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'leftRightArrowCallout'.*/LEFT_RIGHT_ARROW_CALLOUT:ShapeType;
/**Left right up arrow shape. Corresponds to ECMA-376 ST_ShapeType 'leftRightUpArrow'.*/LEFT_RIGHT_UP_ARROW:ShapeType;
/**Left up arrow shape. Corresponds to ECMA-376 ST_ShapeType 'leftUpArrow'.*/LEFT_UP_ARROW:ShapeType;
/**Lightning bolt shape. Corresponds to ECMA-376 ST_ShapeType 'lightningBolt'.*/LIGHTNING_BOLT:ShapeType;
/**Divide math shape. Corresponds to ECMA-376 ST_ShapeType 'mathDivide'.*/MATH_DIVIDE:ShapeType;
/**Equal math shape. Corresponds to ECMA-376 ST_ShapeType 'mathEqual'.*/MATH_EQUAL:ShapeType;
/**Minus math shape. Corresponds to ECMA-376 ST_ShapeType 'mathMinus'.*/MATH_MINUS:ShapeType;
/**Multiply math shape. Corresponds to ECMA-376 ST_ShapeType 'mathMultiply'.*/MATH_MULTIPLY:ShapeType;
/**Not equal math shape. Corresponds to ECMA-376 ST_ShapeType 'mathNotEqual'.*/MATH_NOT_EQUAL:ShapeType;
/**Plus math shape. Corresponds to ECMA-376 ST_ShapeType 'mathPlus'.*/MATH_PLUS:ShapeType;
/**Moon shape. Corresponds to ECMA-376 ST_ShapeType 'moon'.*/MOON:ShapeType;
/**Notched right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'notchedRightArrow'.*/NOTCHED_RIGHT_ARROW:ShapeType;
/**No smoking shape. Corresponds to ECMA-376 ST_ShapeType 'noSmoking'.*/NO_SMOKING:ShapeType;
/**Octagon shape. Corresponds to ECMA-376 ST_ShapeType 'octagon'.*/OCTAGON:ShapeType;
/**Parallelogram shape. Corresponds to ECMA-376 ST_ShapeType 'parallelogram'.*/PARALLELOGRAM:ShapeType;
/**Pentagon shape. Corresponds to ECMA-376 ST_ShapeType 'pentagon'.*/PENTAGON:ShapeType;
/**Pie shape. Corresponds to ECMA-376 ST_ShapeType 'pie'.*/PIE:ShapeType;
/**Plaque shape. Corresponds to ECMA-376 ST_ShapeType 'plaque'.*/PLAQUE:ShapeType;
/**Plus shape. Corresponds to ECMA-376 ST_ShapeType 'plus'.*/PLUS:ShapeType;
/**Quad-arrow shape. Corresponds to ECMA-376 ST_ShapeType 'quadArrow'.*/QUAD_ARROW:ShapeType;
/**Callout quad-arrow shape. Corresponds to ECMA-376 ST_ShapeType 'quadArrowCallout'.*/QUAD_ARROW_CALLOUT:ShapeType;
/**Rectangle shape. Corresponds to ECMA-376 ST_ShapeType 'rect'.*/RECTANGLE:ShapeType;
/**Ribbon shape. Corresponds to ECMA-376 ST_ShapeType 'ribbon'.*/RIBBON:ShapeType;
/**Ribbon 2 shape. Corresponds to ECMA-376 ST_ShapeType 'ribbon2'.*/RIBBON_2:ShapeType;
/**Right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'rightArrow'.*/RIGHT_ARROW:ShapeType;
/**Callout right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'rightArrowCallout'.*/RIGHT_ARROW_CALLOUT:ShapeType;
/**Right brace shape. Corresponds to ECMA-376 ST_ShapeType 'rightBrace'.*/RIGHT_BRACE:ShapeType;
/**Right bracket shape. Corresponds to ECMA-376 ST_ShapeType 'rightBracket'.*/RIGHT_BRACKET:ShapeType;
/**Right triangle shape. Corresponds to ECMA-376 ST_ShapeType 'rtTriangle'.*/RIGHT_TRIANGLE:ShapeType;
/**One round corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType 'round1Rect'.*/ROUND_1_RECTANGLE:ShapeType;
/**Two diagonal round corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType
'round2DiagRect'.*/ROUND_2_DIAGONAL_RECTANGLE:ShapeType;
/**Two same-side round corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType
'round2SameRect'.*/ROUND_2_SAME_RECTANGLE:ShapeType;
/**Round corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType 'roundRect'.*/ROUND_RECTANGLE:ShapeType;
/**Smiley face shape. Corresponds to ECMA-376 ST_ShapeType 'smileyFace'.*/SMILEY_FACE:ShapeType;
/**One snip corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType 'snip1Rect'.*/SNIP_1_RECTANGLE:ShapeType;
/**Two diagonal snip corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType 'snip2DiagRect'.*/SNIP_2_DIAGONAL_RECTANGLE:ShapeType;
/**Two same-side snip corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType
'snip2SameRect'.*/SNIP_2_SAME_RECTANGLE:ShapeType;
/**One snip one round corner rectangle shape. Corresponds to ECMA-376 ST_ShapeType
'snipRoundRect'.*/SNIP_ROUND_RECTANGLE:ShapeType;
/**Speech shape.*/SPEECH:ShapeType;
/**Star burst shape.*/STARBURST:ShapeType;
/**Ten pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star10'.*/STAR_10:ShapeType;
/**Twelve pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star12'.*/STAR_12:ShapeType;
/**Sixteen pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star16'.*/STAR_16:ShapeType;
/**Twenty four pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star24'.*/STAR_24:ShapeType;
/**Thirty two pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star32'.*/STAR_32:ShapeType;
/**Four pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star4'.*/STAR_4:ShapeType;
/**Five pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star5'.*/STAR_5:ShapeType;
/**Six pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star6'.*/STAR_6:ShapeType;
/**Seven pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star7'.*/STAR_7:ShapeType;
/**Eight pointed star shape. Corresponds to ECMA-376 ST_ShapeType 'star8'.*/STAR_8:ShapeType;
/**Striped right arrow shape. Corresponds to ECMA-376 ST_ShapeType 'stripedRightArrow'.*/STRIPED_RIGHT_ARROW:ShapeType;
/**Sun shape. Corresponds to ECMA-376 ST_ShapeType 'sun'.*/SUN:ShapeType;
/**Teardrop shape. Corresponds to ECMA-376 ST_ShapeType 'teardrop'.*/TEARDROP:ShapeType;
/**Text box shape.*/TEXT_BOX:ShapeType;
/**Trapezoid shape. Corresponds to ECMA-376 ST_ShapeType 'trapezoid'.*/TRAPEZOID:ShapeType;
/**Triangle shape. Corresponds to ECMA-376 ST_ShapeType 'triangle'.*/TRIANGLE:ShapeType;
/**A shape type that is not supported.*/UNSUPPORTED:ShapeType;
/**Up arrow shape. Corresponds to ECMA-376 ST_ShapeType 'upArrow'.*/UP_ARROW:ShapeType;
/**Callout up arrow shape. Corresponds to ECMA-376 ST_ShapeType 'upArrowCallout'.*/UP_ARROW_CALLOUT:ShapeType;
/**Up down arrow shape. Corresponds to ECMA-376 ST_ShapeType 'upDownArrow'.*/UP_DOWN_ARROW:ShapeType;
/**U-turn arrow shape. Corresponds to ECMA-376 ST_ShapeType 'uturnArrow'.*/UTURN_ARROW:ShapeType;
/**Vertical scroll shape. Corresponds to ECMA-376 ST_ShapeType 'verticalScroll'.*/VERTICAL_SCROLL:ShapeType;
/**Wave shape. Corresponds to ECMA-376 ST_ShapeType 'wave'.*/WAVE:ShapeType;
/**Callout wedge ellipse shape. Corresponds to ECMA-376 ST_ShapeType 'wedgeEllipseCallout'.*/WEDGE_ELLIPSE_CALLOUT:ShapeType;
/**Callout wedge rectangle shape. Corresponds to ECMA-376 ST_ShapeType 'wedgeRectCallout'.*/WEDGE_RECTANGLE_CALLOUT:ShapeType;
/**Callout wedge round rectangle shape. Corresponds to ECMA-376 ST_ShapeType
'wedgeRoundRectCallout'.*/WEDGE_ROUND_RECTANGLE_CALLOUT:ShapeType;}interface Shape{
/**Aligns the element to the specified alignment position on the page.
@param alignmentPosition The position to align this page element to on the page.
@return This page element, for chaining.*/alignOnPage(alignmentPosition:SlidesApp.AlignmentPosition):SlidesApp.Shape;
/**Brings the page element forward on the page by one element.

The page element must not be in a group.
@return This page element, for chaining.*/bringForward():SlidesApp.Shape;
/**Brings the page element to the front of the page.

The page element must not be in a group.
@return This page element, for chaining.*/bringToFront():SlidesApp.Shape;
/**Duplicates the page element.

The duplicate page element is placed on the same page at the same position as the original.
@return The new duplicate of this page element.*/duplicate():SlidesApp.PageElement;
/**Returns the [`Autofit`](https://developers.google.com/apps-script/reference/slides/autofit.html) of the text within this shape. This is `null` if the shape
doesn't allow text.
@return The autofit of the text within this shape.*/getAutofit():SlidesApp.Autofit;
/**Returns the [`Border`](https://developers.google.com/apps-script/reference/slides/border.html) of the shape.
@return The border setting of this shape.*/getBorder():SlidesApp.Border;
/**Returns the list of `ConnectionSite`s on the page element, or an empty list if the page
element does not have any connection sites.
@return The connection sites list, which may be empty if this element has no connection sites.*/getConnectionSites():SlidesApp.ConnectionSite[];
/**Returns the [`ContentAlignment`](https://developers.google.com/apps-script/reference/slides/content-alignment.html) of the text in the shape.
@return The alignment of text within this shape.*/getContentAlignment():SlidesApp.ContentAlignment;
/**Returns the page element's alt text description. The description is combined with the title to
display and read alt text.
@return The page element's alt text description.*/getDescription():string;
/**Returns the [`Fill`](https://developers.google.com/apps-script/reference/slides/fill.html) of the shape.
@return The fill setting of this shape.*/getFill():SlidesApp.Fill;
/**Gets the element's height in points, which is the height of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@return The page element's inherent height in points, or `null` if the page element does
    not have a height.*/getHeight():number;
/**Returns the element's inherent height in points.

The page element's transform is relative to its inherent size. Use the inherent size in
conjunction with the element's transform to determine the element's final visual appearance.
@return The page element's inherent height in points, or `null` if the page element does
    not have a height.*/getInherentHeight():number;
/**Returns the element's inherent width in points.

The page element's transform is relative to its inherent size. Use the inherent size in
conjunction with the element's transform to determine the element's final visual appearance.
@return The page element's inherent width in points, or `null` if the page element does
    not have a width.*/getInherentWidth():number;
/**Returns the element's horizontal position in points, measured from the upper-left corner of the
page when the element has no rotation.
@return This element's horizontal position in points, from the upper-left corner of the page.*/getLeft():number;
/**Returns the [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) or `null` if there is no link.

```
var link = shape.getLink();
if (link != null) {
  Logger.log('Shape has a link of type: ' + link.getLinkType());
}
```*/getLink():SlidesApp.Link;
/**Returns the unique ID for this object. Object IDs used by pages and page elements share the
same namespace.
@return The unique ID for this object.*/getObjectId():string;
/**Returns the page element's type, represented as a [`PageElementType`](https://developers.google.com/apps-script/reference/slides/page-element-type.html) enum.
@return The page element's type.*/getPageElementType():SlidesApp.PageElementType;
/**Returns the group this page element belongs to, or `null` if the element is not in a
group.
@return The group this page element belongs to, or `null`.*/getParentGroup():SlidesApp.Group;
/**Returns the page this page element is on.
@return The page this element resides on.*/getParentPage():SlidesApp.Page;
/**Returns the parent page element of the placeholder. Returns `null` if the shape is not a
placeholder or has no parent.
@return The parent page element of this shape placeholder, or `null` if this shape is not
    a placeholder or doesn't have a parent.*/getParentPlaceholder():SlidesApp.PageElement;
/**Returns the placeholder index of the shape. If two or more instances of the same placeholder
types are present in the same page, they each have their own unique index value. Returns `null` if the shape is not a placeholder.
@return This shape's placeholder index, or `null` if the shape is not a placeholder.*/getPlaceholderIndex():Integer;
/**Returns the placeholder type of the shape, or `PlaceholderType.NONE` if the shape is not
a placeholder.
@return The placeholder type of this shape.*/getPlaceholderType():SlidesApp.PlaceholderType;
/**Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
means no rotation.
@return The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).*/getRotation():number;
/**Returns the type of the shape.
@return The type of this shape.*/getShapeType():SlidesApp.ShapeType;
/**Returns the text content of the shape.

Text within a shape always terminates with a newline character.
@return The text content of this shape.*/getText():SlidesApp.TextRange;
/**Returns the page element's alt text title. The title is combined with the description to
display and read alt text.
@return The page element's alt text title.*/getTitle():string;
/**Gets the element's vertical position in points, measured from the upper-left corner of the page
when the element has no rotation.
@return This element's vertical position in points, from the upper-left corner of the page.*/getTop():number;
/**Returns the page element's transform.

The visual appearance of the page element is determined by its absolute transform. To
compute the absolute transform, preconcatenate a page element's transform with the transforms
of all of its parent groups. If the page element is not in a group, its absolute transform is
the same as the value in this field.
@return The page element's transform.*/getTransform():SlidesApp.AffineTransform;
/**Returns the element's width in points, which is the width of the element's bounding box when
the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@return The page element's inherent width in points, or `null` if the page element does
    not have a width.*/getWidth():number;
/**Preconcatenates the provided transform to the existing transform of the page element.

```
newTransform = argument * existingTransform
```

For example, to move a page elements 36 points to the left:

```
element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
    .setTranslateX(-36.0)
    .build());
```

You can also replace the page element's transform with [`setTransform(transform)`](https://developers.google.com/apps-script/reference/slides/shape.html#setTransform(AffineTransform)).
@param transform The transform to preconcatenate onto this page element's transform.
@return This page element, for chaining.*/preconcatenateTransform(transform:SlidesApp.AffineTransform):SlidesApp.Shape;
/**Removes the page element.

If after a remove operation, a `Group` contains only one or no page elements, the
group itself is also removed.

If a placeholder `PageElement` is removed on a master or layout, any empty inheriting
placeholders are also removed.*/remove():void;
/**Removes a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html).

```
shape.removeLink();
```*/removeLink():void;
/**Replaces this shape with an image provided by a [`BlobSource`](https://developers.google.com/apps-script/reference/slides/../base/blob-source.html).

The image is fetched from the provided [`BlobSource`](https://developers.google.com/apps-script/reference/slides/../base/blob-source.html) once at insertion time and a copy
is stored for display inside the presentation. Images must be less than 50MB in size, cannot
exceed 25 megapixels, and must be in PNG, JPEG, or GIF format.

In order to maintain the image's aspect ratio, the image is scaled and centered with respect
to the size of the existing shape.

```
var shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
// Get the Drive image file with the given ID.
var driveImage = DriveApp.getFileById(fileId);
shape.replaceWithImage(driveImage);
```
@param blobSource The image data.
@return The [`Image`](https://developers.google.com/apps-script/reference/slides/image.html) that replaced the shape.*/replaceWithImage(blobSource:BlobSource):SlidesApp.Image;
/**Replaces this shape with an image provided by a [`BlobSource`](https://developers.google.com/apps-script/reference/slides/../base/blob-source.html).

Inserting the image fetches it from the [`BlobSource`](https://developers.google.com/apps-script/reference/slides/../base/blob-source.html) once and a copy is stored for
display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
megapixels, and must be in either in PNG, JPEG, or GIF format.

```
var shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
// Get the Drive image file with the given ID.
var driveImage = DriveApp.getFileById(fileId);
// Replace and crop the replaced image.
shape.replaceWithImage(driveImage, true);
```
@param blobSource The image data.
@param crop If `true`, crops the image to fit the existing shape's size. Otherwise, the
    image is scaled and centered.
@return The [`Image`](https://developers.google.com/apps-script/reference/slides/image.html) that replaced the shape.*/replaceWithImage(blobSource:BlobSource,crop:boolean):SlidesApp.Image;
/**Replaces this shape with an image.

Inserting the image fetches it from the URL once and a copy is stored for display inside the
presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
in either in PNG, JPEG, or GIF format.

The provided URL must be publicly accessible and no larger than 2kB. The URL itself is saved
with the image and exposed via [`Image.getSourceUrl()`](https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()).

In order to maintain the image's aspect ratio, the image is scaled and centered with respect
to the size of the existing shape.
@param imageUrl The image URL to download the image from.
@return The [`Image`](https://developers.google.com/apps-script/reference/slides/image.html) that replaced the shape.*/replaceWithImage(imageUrl:string):SlidesApp.Image;
/**Replaces this shape with an image.

Inserting the image fetches it from the URL once and a copy is stored for display inside the
presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
in either in PNG, JPEG, or GIF format.

The provided URL must be no larger than 2kB. The URL itself is saved with the image and
exposed via [`Image.getSourceUrl()`](https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()).
@param imageUrl The image URL to download the image from.
@param crop If `true`, crops the image to fit the existing shape's size. Otherwise, the
    image is scaled and centered.
@return The [`Image`](https://developers.google.com/apps-script/reference/slides/image.html) that replaced the shape.*/replaceWithImage(imageUrl:string,crop:boolean):SlidesApp.Image;
/**Replaces this shape with a Google Sheets chart.

The chart is linked with the source Google Sheets chart which allows it to be updated. Other
collaborators can see the link to the source spreadsheet.

```
var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
var chart = sheet.getCharts()[0];
// Replace the shape with the Sheets chart.
var shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
shape.replaceWithSheetsChart(chart);
```
@param sourceChart The chart in a spreadsheet that replaces the shape.
@return The chart that replaced the shape.*/replaceWithSheetsChart(sourceChart:SpreadsheetApp.EmbeddedChart):SlidesApp.SheetsChart;
/**Replaces this shape with an image of a Google Sheets chart.

In order to maintain the Google Sheets chart's aspect ratio, the chart image is scaled and
centered with respect to the size of the existing shape.

The image of the chart is not linked with the source Google Sheets chart.

```
var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
var chart = sheet.getCharts()[0];
// Replace the shape with the Sheets chart as an image.
var shape = SlidesApp.getActivePresentation().getSlides()[0].getShapes()[0];
shape.replaceWithSheetsChartAsImage(chart);
```
@param sourceChart The chart in a spreadsheet that replaces the shape.
@return The image of the chart that replaced the shape.*/replaceWithSheetsChartAsImage(sourceChart:SpreadsheetApp.EmbeddedChart):SlidesApp.Image;
/**Scales the element's height by the specified ratio. The element's height is the height of its
bounding box when the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param ratio The ratio to scale this page element's height by.
@return This page element, for chaining.*/scaleHeight(ratio:number):SlidesApp.Shape;
/**Scales the element's width by the specified ratio. The element's width is the width of its
bounding box when the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param ratio The ratio to scale this page element's width by.
@return This page element, for chaining.*/scaleWidth(ratio:number):SlidesApp.Shape;
/**Selects only the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) in the active presentation and removes any previous
selection. This is the same as calling [`select(replace)`](https://developers.google.com/apps-script/reference/slides/shape.html#select(Boolean)) with `true`.

A script can only access the selection of the user who is running the script, and only if
the script is [bound](/apps-script/scripts_containers) to the presentation.

This sets the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) as the [`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var pageElement = slide.getPageElements()[0];
// Only select this page element and replace any previous selection.
pageElement.select();
```*/select():void;
/**Selects the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) in the active presentation.

A script can only access the selection of the user who is running the script, and only if
the script is [bound](/apps-script/scripts_containers) to the presentation.

Pass `true` to this method to select only the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) and remove any
previous selection. This also sets the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) as the
[`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).

Pass `false` to select multiple [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) objects. The [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html)
objects must be in the same [`Page`](https://developers.google.com/apps-script/reference/slides/page.html).

The following conditions must be met while selecting a page element using a `false`
parameter:

  1. The parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) object must be the [`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).
  1. There should not be multiple [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) objects selected.

To make sure that’s the case the preferred approach is to select the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html)
first using [`Page.selectAsCurrentPage()`](https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()) and then select the page elements in that page.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
// First select the slide page, as the current page selection.
slide.selectAsCurrentPage();
// Then select all the page elements in the selected slide page.
var pageElements = slide.getPageElements();
for (var i = 0; i < pageElements.length; i++) {
  pageElements[i].select(false);
}
```
@param replace If `true`, the selection replaces any previous selection; otherwise the
    selection is added to any previous selection.*/select(replace:boolean):void;
/**Sends the page element backward on the page by one element.

The page element must not be in a group.
@return This page element, for chaining.*/sendBackward():SlidesApp.Shape;
/**Sends the page element to the back of the page.

The page element must not be in a group.
@return This page element, for chaining.*/sendToBack():SlidesApp.Shape;
/**Sets the [`ContentAlignment`](https://developers.google.com/apps-script/reference/slides/content-alignment.html) of the text in the shape.

This method automatically deactivates text autofit properties on the updated shapes.
@param contentAlignment The alignment to set.
@return This shape, for chaining.*/setContentAlignment(contentAlignment:SlidesApp.ContentAlignment):SlidesApp.Shape;
/**Sets the page element's alt text description.

The method is not supported for [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) elements.

```
// Set the first page element's alt text description to "new alt text description".
var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
pageElement.setDescription('new alt text description');
Logger.log(pageElement.getDescription());
```
@param description The string to set the alt text description to.
@return This page element.*/setDescription(description:string):SlidesApp.Shape;
/**Sets the element's height in points, which is the height of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param height The new height of this page element to set, in points.
@return This page element, for chaining.*/setHeight(height:number):SlidesApp.Shape;
/**Sets the element's horizontal position in points, measured from the upper-left corner of the
page when the element has no rotation.
@param left The new horizontal position to set, in points.
@return This page element, for chaining.*/setLeft(left:number):SlidesApp.Shape;
/**Sets a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) to the given [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html) using the zero-based index of the slide.

```
// Set a link to the first slide of the presentation.
shape.setLinkSlide(0);
```
@param slideIndex The zero-based index to the slide.
@return the [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) that was set*/setLinkSlide(slideIndex:Integer):SlidesApp.Link;
/**Sets a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) to the given [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html), the link is set by the given slide ID.

```
// Set a link to the first slide of the presentation.
var slide = presentation.getSlides()[0];
shape.setLinkSlide(slide);
```
@param slide The [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html) to be linked.
@return the [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) that was set*/setLinkSlide(slide:SlidesApp.Slide):SlidesApp.Link;
/**Sets a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) to the given [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html) using the relative position of the slide.

```
// Set a link to the first slide of the presentation.
shape.setLinkSlide(SlideApp.SlidePosition.FIRST_SLIDE);
```
@param slidePosition The relative [`SlidePosition`](https://developers.google.com/apps-script/reference/slides/slide-position.html).
@return the [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) that was set*/setLinkSlide(slidePosition:SlidesApp.SlidePosition):SlidesApp.Link;
/**Sets a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) to the given non-empty URL string.

```
// Set a link to the URL.
shape.setLinkUrl("https://slides.google.com");
```
@param url The URL string.
@return the [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) that was set*/setLinkUrl(url:string):SlidesApp.Link;
/**Sets the element's clockwise rotation angle around its center in degrees.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param angle The new clockwise rotation angle to set, in degrees.
@return This page element, for chaining.*/setRotation(angle:number):SlidesApp.Shape;
/**Sets the page element's alt text title.

The method is not supported for [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) elements.

```
// Set the first page element's alt text title to "new alt text title".
var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
pageElement.setTitle('new alt text title');
Logger.log(pageElement.getTitle());
```
@param title The string to set the alt text title to.
@return This page element.*/setTitle(title:string):SlidesApp.Shape;
/**Sets the element's vertical position in points, measured from the upper-left corner of the page
when the element has no rotation.
@param top The new vertical position to set, in points.
@return This page element, for chaining.*/setTop(top:number):SlidesApp.Shape;
/**Sets the transform of the page element with the provided transform.

Updating the transform of a group changes the absolute transform of the page elements in
that group, which can change their visual appearance.

Updating the transform of a page element that is in a group only changes the transform of
that page element; it doesn't affect the transforms of the group or other page elements in the
group.

For details on how transforms impact the visual appearance of page elements, see [`getTransform()`](https://developers.google.com/apps-script/reference/slides/shape.html#getTransform()).
@param transform The transform that is set for this page element.
@return This element, for chaining.*/setTransform(transform:SlidesApp.AffineTransform):SlidesApp.Shape;
/**Sets the element's width in points, which is the width of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param width The new width of this page element to set, in points.
@return This page element, for chaining.*/setWidth(width:number):SlidesApp.Shape;}interface SelectionType{}interface _SelectionType{
/**Current page selection.*/CURRENT_PAGE:SelectionType;
/**No selection.*/NONE:SelectionType;
/**Page selection in the thumbnail flimstrip.*/PAGE:SelectionType;
/**Page element selection.*/PAGE_ELEMENT:SelectionType;
/**Table cell selection.*/TABLE_CELL:SelectionType;
/**Text selection.*/TEXT:SelectionType;
/**A selection type that is not supported.*/UNSUPPORTED:SelectionType;}interface Selection{
/**Returns the currently active [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) or `null` if there is no active page.

```
var selection = SlidesApp.getActivePresentation().getSelection();
var currentPage = selection.getCurrentPage();
if (currentPage != null) {
  Logger.log('Selected current active page ID: ' + currentPage.getObjectId());
}
```*/getCurrentPage():SlidesApp.Page;
/**Returns the [`PageElementRange`](https://developers.google.com/apps-script/reference/slides/page-element-range.html) collection of [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) instances that are
selected or `null` if there are no [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) instances selected.

```
var selection = SlidesApp.getActivePresentation().getSelection();
var selectionType = selection.getSelectionType();
if (selectionType == SlidesApp.SelectionType.PAGE_ELEMENT) {
  var currentPage = selection.getCurrentPage();
  var pageElements = selection.getPageElementRange().getPageElements();
  Logger.log('Number of page elements selected: ' + pageElements.length);
}
```*/getPageElementRange():SlidesApp.PageElementRange;
/**Returns the [`PageRange`](https://developers.google.com/apps-script/reference/slides/page-range.html) a collection of [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) instances in the flimstrip that are
selected or `null` if the selection is not of type [`SelectionType.PAGE`](https://developers.google.com/apps-script/reference/slides/selection-type.html#PAGE).

```
var selection = SlidesApp.getActivePresentation().getSelection();
var selectionType = selection.getSelectionType();
if (selectionType == SlidesApp.SelectionType.PAGE) {
  var pageRange = selection.getPageRange();
  Logger.log('Number of pages in the flimstrip selected: ' + pageRange.getPages().length);
}
}```*/getPageRange():SlidesApp.PageRange;
/**Returns the [`SelectionType`](https://developers.google.com/apps-script/reference/slides/selection-type.html).

```
var selection = SlidesApp.getActivePresentation().getSelection();
var selectionType = selection.getSelectionType();
if (selectionType == SlidesApp.SelectionType.CURRENT_PAGE) {
  var currentPage = selection.getCurrentPage();
  Logger.log('Selected current active page ID: ' + currentPage.getObjectId());
}
```*/getSelectionType():SlidesApp.SelectionType;
/**Returns the [`TableCellRange`](https://developers.google.com/apps-script/reference/slides/table-cell-range.html) collection of [`TableCell`](https://developers.google.com/apps-script/reference/slides/table-cell.html) instances that are selected
or `null` if there are no [`TableCell`](https://developers.google.com/apps-script/reference/slides/table-cell.html) instances selected.

```
var selection = SlidesApp.getActivePresentation().getSelection();
var selectionType = selection.getSelectionType();
if (selectionType == SlidesApp.SelectionType.TABLE_CELL) {
  var currentPage = selection.getCurrentPage();
  var tableCells = selection.getTableCellRange().getTableCells();
  var table = tableCells[0].getParentTable();
  Logger.log('Number of table cells selected: ' + tableCells.length);
}
```*/getTableCellRange():SlidesApp.TableCellRange;
/**Returns the [`TextRange`](https://developers.google.com/apps-script/reference/slides/text-range.html) that is selected or `null` if the selection is not of type
[`SelectionType.TEXT`](https://developers.google.com/apps-script/reference/slides/selection-type.html#TEXT).

The [`TextRange`](https://developers.google.com/apps-script/reference/slides/text-range.html) represents two scenarios:

1. Range of text selected. For example if a shape has text "Hello", and "He" is selected,
the returned range has [`TextRange.getStartIndex()`](https://developers.google.com/apps-script/reference/slides/text-range.html#getStartIndex()) = 0, and [`TextRange.getEndIndex()`](https://developers.google.com/apps-script/reference/slides/text-range.html#getEndIndex()) =
2.

2. Cursor position. For example if a shape has text "Hello", and cursor is after "H",
("H|ello"), the returned range has [`TextRange.getStartIndex()`](https://developers.google.com/apps-script/reference/slides/text-range.html#getStartIndex()) = 1 and [`TextRange.getEndIndex()`](https://developers.google.com/apps-script/reference/slides/text-range.html#getEndIndex()) = 1.

```
var selection = SlidesApp.getActivePresentation().getSelection();
var selectionType = selection.getSelectionType();
if (selectionType == SlidesApp.SelectionType.TEXT) {
  var currentPage = selection.getCurrentPage();
  var pageElement = selection.getPageElementRange().getPageElements()[0];
  var textRange = selection.getTextRange();
  Logger.log('Text selected: ' + textRange.asString());
}
```*/getTextRange():SlidesApp.TextRange;}interface Presentation{
/**Adds the given user to the list of editors for the [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html). If the user was already
on the list of viewers, this method promotes the user out of the list of viewers.
@param emailAddress The email address of the user to add.
@return This [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html), for chaining.*/addEditor(emailAddress:string):SlidesApp.Presentation;
/**Adds the given user to the list of editors for the [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html). If the user was already
on the list of viewers, this method promotes the user out of the list of viewers.
@param user A representation of the user to add.
@return This [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html), for chaining.*/addEditor(user:User):SlidesApp.Presentation;
/**Adds the given array of users to the list of editors for the [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html). If any of the
users were already on the list of viewers, this method promotes them out of the list of
viewers.
@param emailAddresses An array of email addresses of the users to add.
@return This [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html), for chaining.*/addEditors(emailAddresses:string[]):SlidesApp.Presentation;
/**Adds the given user to the list of viewers for the [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html). If the user was already
on the list of editors, this method has no effect.
@param emailAddress The email address of the user to add.
@return This [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html), for chaining.*/addViewer(emailAddress:string):SlidesApp.Presentation;
/**Adds the given user to the list of viewers for the [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html). If the user was already
on the list of editors, this method has no effect.
@param user A representation of the user to add.
@return This [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html), for chaining.*/addViewer(user:User):SlidesApp.Presentation;
/**Adds the given array of users to the list of viewers for the [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html). If any of the
users were already on the list of editors, this method has no effect for them.
@param emailAddresses An array of email addresses of the users to add.
@return This [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html), for chaining.*/addViewers(emailAddresses:string[]):SlidesApp.Presentation;
/**Appends a slide to the end of the presentation using the [`PredefinedLayout.BLANK`](https://developers.google.com/apps-script/reference/slides/predefined-layout.html#BLANK)
predefined layout based on the current master. The current master is one of the following:

  + The master of the current last slide.
  + The first master in the presentation, if there is no slide.
@return The new slide that is appended.*/appendSlide():SlidesApp.Slide;
/**Appends a slide to the end of the presentation using the specified layout based on the current
master. The current master is one of the following:

  + The master of the current last slide.
  + The first master in the presentation, if there is no slide.
@param layout The layout to use for the new slide; it should be present in the current master.
@return The new slide that is appended.*/appendSlide(layout:SlidesApp.Layout):SlidesApp.Slide;
/**Appends a slide to the end of the presentation using the specified predefined layout based on
the current master. The current master is one of the following:

  + The master of the current last slide.
  + The first master in the presentation, if there is no slide.
@param predefinedLayout The predefined layout to use for the new slide; it should be present in
    the current master.
@return The new slide that is appended.*/appendSlide(predefinedLayout:SlidesApp.PredefinedLayout):SlidesApp.Slide;
/**Appends a copy of the provided [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html) to the end of the presentation.

If the slide being copied is from a different presentation, the parent master and layout
pages are copied as well if they do not already exist in this presentation.

```
// Copy a slide from another presentation and appends it.
var otherPresentation = SlidesApp.openById('presentationId');
var currentPresentation = SlidesApp.getActivePresentation();
var slide = otherPresentation.getSlides()[0];
currentPresentation.appendSlide(slide);
```
@param slide The slide to be copied and appended.
@return The new slide that is appended.*/appendSlide(slide:SlidesApp.Slide):SlidesApp.Slide;
/**Appends a copy of the provided [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html) from the source presentation to the end of the
current presentation, and sets the slide link as specified by the [`SlideLinkingMode`](https://developers.google.com/apps-script/reference/slides/slide-linking-mode.html).

If the slide being copied is from a different presentation, the parent master and layout
pages are copied as well if they do not already exist in the current presentation.

If the link mode is [`SlideLinkingMode.LINKED`](https://developers.google.com/apps-script/reference/slides/slide-linking-mode.html#LINKED), the appended slide can be updated to
match the provided source slide when [`Slide.refreshSlide()`](https://developers.google.com/apps-script/reference/slides/slide.html#refreshSlide()) is called. Other collaborators
can see the link to the source slide. [`SlideLinkingMode.LINKED`](https://developers.google.com/apps-script/reference/slides/slide-linking-mode.html#LINKED) cannot be used with
source slides from the current presentation.

```
// Copy a slide from another presentation, then append and link it.
var sourcePresentation = SlidesApp.openById('presentationId');
var currentPresentation = SlidesApp.getActivePresentation();
var slide = sourcePresentation.getSlides()[0];
var appendedSlide = currentPresentation.appendSlide(slide, SlidesApp.SlideLinkingMode.LINKED);
```
@param slide The slide to be copied, appended, and linked.
@param linkingMode The link mode to use.
@return The new slide.*/appendSlide(slide:SlidesApp.Slide,linkingMode:SlidesApp.SlideLinkingMode):SlidesApp.Slide;
/**Gets the list of editors for this [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html).
@return An array of users with edit permission.*/getEditors():User[];
/**Gets the presentation's unique identifier. The presentation ID is used with `SlidesApp.openById()` to open a specific presentation instance.
@return The ID of this presentation.*/getId():string;
/**Gets the layouts in the presentation.
@return The list of layouts in this presentation.*/getLayouts():SlidesApp.Layout[];
/**Gets the masters in the presentation.
@return The list of masters in this presentation.*/getMasters():SlidesApp.Master[];
/**Gets the name or title of the presentation.
@return The title of this presentation.*/getName():string;
/**Gets the notes master of the presentation.
@return The notes master of the presentation.*/getNotesMaster():SlidesApp.NotesMaster;
/**Gets the page height of the notes master and notes pages in the presentation in points. They
all have the same page height.
@return The notes page height in points.*/getNotesPageHeight():number;
/**Gets the page width of the notes master and notes pages in the presentation in points. They all
have the same page width.
@return The notes page width in points.*/getNotesPageWidth():number;
/**Returns the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) with the given ID, or `null` if none exists.
@param id The ID of the page element that is being retrieved.
@return The page element with the given ID.*/getPageElementById(id:string):SlidesApp.PageElement;
/**Gets the page height of the slides, layouts, and masters in the presentation in points. They
all have the same page height.
@return The page height in points.*/getPageHeight():number;
/**Gets the page width of the slides, layouts, and masters in the presentation in points. They all
have the same page width.
@return The page width in points.*/getPageWidth():number;
/**Gets the user’s selection in the active presentation. A script can only access the selection of
the user who is running the script, and only if the script is [bound](/apps-script/scripts_containers) to the presentation.

Note that the selection returned is the current effective selection. As the script performs
various changes to the presentation, the selection is transformed to take them into account.
For example if two shapes A and B are selected, and then the script removes shape B, the
returned selection object is implicitly updated such that only shape A is selected.

```
// Gets the current active page that is selected in the active presentation.
var selection = SlidesApp.getActivePresentation().getSelection();
var currentPage = selection.getCurrentPage();
```
@return A representation of the user's selection, or `null` if the script is not bound to
    the presentation or if there is no valid user selection.*/getSelection():SlidesApp.Selection;
/**Returns the [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html) with the given ID, or `null` if none exists.
@param id The ID of the slide that is being retrieved.
@return The slide with the given ID.*/getSlideById(id:string):SlidesApp.Slide;
/**Gets the slides in the presentation.
@return The list of slides in this presentation.*/getSlides():SlidesApp.Slide[];
/**Retrieves the URL to access this presentation.

```
var presentation = SlidesApp.getActivePresentation();

// Send out the link to open the presentation.
MailApp.sendEmail("<email-address>", presentation.getName(), presentation.getUrl());
```
@return The URL to access the current presentation.*/getUrl():string;
/**Gets the list of viewers and commenters for this [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html).
@return An array of users with view or comment permission.*/getViewers():User[];
/**Inserts a slide at the specified index in the presentation using the [`PredefinedLayout.BLANK`](https://developers.google.com/apps-script/reference/slides/predefined-layout.html#BLANK) predefined layout based on the current master. The current master is
one of the following:

  + The master of the previous slide.
  + The master of the first slide, if the insertionIndex is zero.
  + The first master in the presentation, if there is no slide.
@param insertionIndex The zero-based index indicating where to insert the slide.
@return The new slide that is inserted.*/insertSlide(insertionIndex:Integer):SlidesApp.Slide;
/**Inserts a slide at the specified index in the presentation using the specified layout based on
the current master. The current master is one of the following:

  + The master of the previous slide.
  + The master of the first slide, if the insertionIndex is zero.
  + The first master in the presentation, if there is no slide.
@param insertionIndex The zero-based index indicating where to insert the slide.
@param layout The layout to use for the new slide; it should be present in the current master.
@return The new slide that is inserted.*/insertSlide(insertionIndex:Integer,layout:SlidesApp.Layout):SlidesApp.Slide;
/**Inserts a slide at the specified index in the presentation using the specified predefined
layout based on the current master. The current master is one of the following:

  + The master of the previous slide.
  + The master of the first slide, if the insertionIndex is zero.
  + The first master in the presentation, if there is no slide.
@param insertionIndex The zero-based index indicating where to insert the slide.
@param predefinedLayout The predefined layout to use for the new slide; it should be present in
    the current master.
@return The new slide that is inserted.*/insertSlide(insertionIndex:Integer,predefinedLayout:SlidesApp.PredefinedLayout):SlidesApp.Slide;
/**Inserts a copy of the provided [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html) at the specified index in the presentation.

If the slide being copied is from a different presentation, the parent master and layout
pages are copied as well if they do not already exist in this presentation.

```
// Copy a slide from another presentation and inserts it.
var otherPresentation = SlidesApp.openById('presentationId');
var currentPresentation = SlidesApp.getActivePresentation();
var slide = otherPresentation.getSlides()[0];
var insertionIndex = 1;
currentPresentation.insertSlide(insertionIndex, slide);
```
@param insertionIndex The zero-based index indicating where to insert the slide.
@param slide The slide to be copied and inserted.
@return The new slide that is inserted.*/insertSlide(insertionIndex:Integer,slide:SlidesApp.Slide):SlidesApp.Slide;
/**Inserts a copy of the provided [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html) from the source presentation into the specified
index in the current presentation, and sets the slide link as specified by the [`SlideLinkingMode`](https://developers.google.com/apps-script/reference/slides/slide-linking-mode.html).

If the slide being copied is from a different presentation, the parent master and layout
pages are copied as well if they do not already exist in the current presentation.

If the link mode is [`SlideLinkingMode.LINKED`](https://developers.google.com/apps-script/reference/slides/slide-linking-mode.html#LINKED), the inserted slide can be updated to
match the provided source slide when [`Slide.refreshSlide()`](https://developers.google.com/apps-script/reference/slides/slide.html#refreshSlide()) is called. Other collaborators
can see the link to the source slide. [`SlideLinkingMode.LINKED`](https://developers.google.com/apps-script/reference/slides/slide-linking-mode.html#LINKED) cannot be used with
source slides from the current presentation.

```
// Copy a slide from another presentation, then insert and link it.
var sourcePresentation = SlidesApp.openById('presentationId');
var currentPresentation = SlidesApp.getActivePresentation();
var slide = sourcePresentation.getSlides()[0];
var insertionIndex = 1;
var insertedSlide =
    currentPresentation.insertSlide(
    insertionIndex, slide, SlidesApp.SlideLinkingMode.LINKED);
```
@param insertionIndex The zero-based index indicating where to insert the slide.
@param slide The slide to be copied and inserted.
@param linkingMode The link mode to use.
@return The new slide.*/insertSlide(insertionIndex:Integer,slide:SlidesApp.Slide,linkingMode:SlidesApp.SlideLinkingMode):SlidesApp.Slide;
/**Removes the given user from the list of editors for the [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html). This method doesn't
block users from accessing the [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html) if they belong to a class of users who have
general access—for example, if the [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html) is shared with the user's entire
domain, or if the [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html) is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of viewers.
@param emailAddress The email address of the user to remove.
@return This [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html), for chaining.*/removeEditor(emailAddress:string):SlidesApp.Presentation;
/**Removes the given user from the list of editors for the [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html). This method doesn't
block users from accessing the [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html) if they belong to a class of users who have
general access—for example, if the [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html) is shared with the user's entire
domain, or if the [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html) is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of viewers.
@param user A representation of the user to remove.
@return This [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html), for chaining.*/removeEditor(user:User):SlidesApp.Presentation;
/**Removes the given user from the list of viewers and commenters for the [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html). This
method has no effect if the user is an editor, not a viewer or commenter. This method also
doesn't block users from accessing the [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html) if they belong to a class of users who
have general access—for example, if the [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html) is shared with the user's
entire domain, or if the [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html) is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of editors.
@param emailAddress The email address of the user to remove.
@return This [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html) for chaining.*/removeViewer(emailAddress:string):SlidesApp.Presentation;
/**Removes the given user from the list of viewers and commenters for the [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html). This
method has no effect if the user is an editor, not a viewer. This method also doesn't block
users from accessing the [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html) if they belong to a class of users who have general
access—for example, if the [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html) is shared with the user's entire domain, or
if the [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html) is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of editors.
@param user A representation of the user to remove.
@return This [`Presentation`](https://developers.google.com/apps-script/reference/slides/presentation.html) for chaining.*/removeViewer(user:User):SlidesApp.Presentation;
/**Replaces all instances of text matching find text with replace text. The search is case
insensitive.
@param findText The text to find.
@param replaceText The text to replace the matched text.
@return the number of occurrences changed*/replaceAllText(findText:string,replaceText:string):Integer;
/**Replaces all instances of text matching find text with replace text.
@param findText The text to find.
@param replaceText The text to replace the matched text.
@param matchCase If `true`, the search is case sensitive; if `false`, the search is
    case insensitive.
@return the number of occurrences changed*/replaceAllText(findText:string,replaceText:string,matchCase:boolean):Integer;
/**Saves the current `Presentation`. Causes pending updates to be flushed and applied.

The `saveAndClose()` method is automatically invoked at the end of script execution
for each open `Presentation`, even if the script execution terminated with an error.

A closed `Presentation` cannot be edited. Use one of the open methods on `SlidesApp` to reopen a given presentation for editing.*/saveAndClose():void;
/**Sets the name or title of the presentation.
@param name The name to set for this presentation.*/setName(name:string):void;}interface PredefinedLayout{}interface _PredefinedLayout{
/**Layout with a big number heading.*/BIG_NUMBER:PredefinedLayout;
/**Blank layout, with no placeholders.*/BLANK:PredefinedLayout;
/**Layout with a caption at the bottom.*/CAPTION_ONLY:PredefinedLayout;
/**Layout with a main point.*/MAIN_POINT:PredefinedLayout;
/**Layout with one title and one body, arranged in a single column.*/ONE_COLUMN_TEXT:PredefinedLayout;
/**Layout with a section title.*/SECTION_HEADER:PredefinedLayout;
/**Layout with a title and subtitle on one side and description on the other.*/SECTION_TITLE_AND_DESCRIPTION:PredefinedLayout;
/**Layout with a title and a subtitle.*/TITLE:PredefinedLayout;
/**Layout with a title and body.*/TITLE_AND_BODY:PredefinedLayout;
/**Layout with a title and two columns.*/TITLE_AND_TWO_COLUMNS:PredefinedLayout;
/**Layout with only a title.*/TITLE_ONLY:PredefinedLayout;
/**A layout that is not supported.*/UNSUPPORTED:PredefinedLayout;}interface Point{
/**Gets the horizontal coordinate, measured in points.*/getX():number;
/**Gets the vertical coordinate, measured in points.*/getY():number;}interface PlaceholderType{}interface _PlaceholderType{
/**Body text.*/BODY:PlaceholderType;
/**Title centered.*/CENTERED_TITLE:PlaceholderType;
/**Chart or graph.*/CHART:PlaceholderType;
/**Clip art image.*/CLIP_ART:PlaceholderType;
/**Date and time.*/DATE_AND_TIME:PlaceholderType;
/**Diagram.*/DIAGRAM:PlaceholderType;
/**Footer text.*/FOOTER:PlaceholderType;
/**Header text.*/HEADER:PlaceholderType;
/**Multimedia.*/MEDIA:PlaceholderType;
/**Not a Placeholder.*/NONE:PlaceholderType;
/**Any content type.*/OBJECT:PlaceholderType;
/**Picture.*/PICTURE:PlaceholderType;
/**Slide image.*/SLIDE_IMAGE:PlaceholderType;
/**Number of a slide.*/SLIDE_NUMBER:PlaceholderType;
/**Subtitle.*/SUBTITLE:PlaceholderType;
/**Table.*/TABLE:PlaceholderType;
/**Slide title.*/TITLE:PlaceholderType;
/**A placeholder type that is not supported.*/UNSUPPORTED:PlaceholderType;}interface PictureFill{
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
/**Gets a URL to the image.

This URL is tagged with the account of the requester, so anyone with the URL effectively
accesses the image as the original requester. Access to the image may be lost if the
presentation's sharing settings change. The URL expires after a short period of time.*/getContentUrl():string;
/**Gets the image's source URL, if available.

When an image is inserted by URL, returns the URL provided during image insertion.
@return the image URL or `null` if the image does not have a source URL*/getSourceUrl():string;}interface ParagraphStyle{
/**Returns the text end indentation for paragraphs in the [`TextRange`](https://developers.google.com/apps-script/reference/slides/text-range.html) in points, or `null` if there are multiple paragraph styles on the given text.

The side that corresponds to the end of the text is based on the current text direction.*/getIndentEnd():number;
/**Returns the indentation for the first line of paragraphs in the [`TextRange`](https://developers.google.com/apps-script/reference/slides/text-range.html) in points, or
`null` if there are multiple paragraph styles on the given text.*/getIndentFirstLine():number;
/**Returns the text start indentation for paragraphs in the [`TextRange`](https://developers.google.com/apps-script/reference/slides/text-range.html) in points, or `null` if there are multiple paragraph styles on the given text.

The side that corresponds to the start of the text is based on the current text direction.*/getIndentStart():number;
/**Returns the line spacing, or `null` if there are multiple paragraph styles on the given
text.

This is a value that corresponds to the space between lines, as a percentage of normal.
Normal is represented as 100.0.*/getLineSpacing():number;
/**Returns the [`ParagraphAlignment`](https://developers.google.com/apps-script/reference/slides/paragraph-alignment.html) of paragraphs in the [`TextRange`](https://developers.google.com/apps-script/reference/slides/text-range.html), or `null`
if there are multiple paragraph styles on the given text.*/getParagraphAlignment():SlidesApp.ParagraphAlignment;
/**Returns the extra space above paragraphs in the [`TextRange`](https://developers.google.com/apps-script/reference/slides/text-range.html) in points, or `null` if
there are multiple paragraph styles on the given text.*/getSpaceAbove():number;
/**Returns the extra space below paragraphs in the [`TextRange`](https://developers.google.com/apps-script/reference/slides/text-range.html) in points, or `null` if
there are multiple paragraph styles on the given text.*/getSpaceBelow():number;
/**Returns the [`SpacingMode`](https://developers.google.com/apps-script/reference/slides/spacing-mode.html) for paragraphs in the [`TextRange`](https://developers.google.com/apps-script/reference/slides/text-range.html), or `null` if
there are multiple paragraph styles on the given text.*/getSpacingMode():SlidesApp.SpacingMode;
/**Returns the [`TextDirection`](https://developers.google.com/apps-script/reference/slides/text-direction.html) for paragraphs in the [`TextRange`](https://developers.google.com/apps-script/reference/slides/text-range.html), or `null` if
there are multiple paragraph styles on the given text.*/getTextDirection():SlidesApp.TextDirection;
/**Sets the text end indentation for paragraphs in the [`TextRange`](https://developers.google.com/apps-script/reference/slides/text-range.html) in points.

The side that corresponds to the end of the text is based on the current text direction.*/setIndentEnd(indent:number):SlidesApp.ParagraphStyle;
/**Sets the indentation for the first line of paragraphs in the [`TextRange`](https://developers.google.com/apps-script/reference/slides/text-range.html) in points.*/setIndentFirstLine(indent:number):SlidesApp.ParagraphStyle;
/**Sets the text start indentation for paragraphs in the [`TextRange`](https://developers.google.com/apps-script/reference/slides/text-range.html) in points.

The side that corresponds to the start of the text is based on the current text direction.*/setIndentStart(indent:number):SlidesApp.ParagraphStyle;
/**Sets the line spacing.

This is a value that corresponds to the space between lines, as a percentage of normal.
Normal is represented as 100.0.*/setLineSpacing(spacing:number):SlidesApp.ParagraphStyle;
/**Sets the [`ParagraphAlignment`](https://developers.google.com/apps-script/reference/slides/paragraph-alignment.html) of paragraphs in the [`TextRange`](https://developers.google.com/apps-script/reference/slides/text-range.html).*/setParagraphAlignment(alignment:SlidesApp.ParagraphAlignment):SlidesApp.ParagraphStyle;
/**Sets the extra space above paragraphs in the [`TextRange`](https://developers.google.com/apps-script/reference/slides/text-range.html) in points.*/setSpaceAbove(space:number):SlidesApp.ParagraphStyle;
/**Sets the extra space below paragraphs in the [`TextRange`](https://developers.google.com/apps-script/reference/slides/text-range.html) in points.*/setSpaceBelow(space:number):SlidesApp.ParagraphStyle;
/**Sets the [`SpacingMode`](https://developers.google.com/apps-script/reference/slides/spacing-mode.html) for paragraphs in the [`TextRange`](https://developers.google.com/apps-script/reference/slides/text-range.html).*/setSpacingMode(mode:SlidesApp.SpacingMode):SlidesApp.ParagraphStyle;
/**Sets the [`TextDirection`](https://developers.google.com/apps-script/reference/slides/text-direction.html) for paragraphs in the [`TextRange`](https://developers.google.com/apps-script/reference/slides/text-range.html).*/setTextDirection(direction:SlidesApp.TextDirection):SlidesApp.ParagraphStyle;}interface ParagraphAlignment{}interface _ParagraphAlignment{
/**The paragraph is centered.*/CENTER:ParagraphAlignment;
/**The paragraph is aligned to the end of the line. Right-aligned for left-to-right text,
left-aligned otherwise.*/END:ParagraphAlignment;
/**The paragraph is justified.*/JUSTIFIED:ParagraphAlignment;
/**The paragraph is aligned to the start of the line. Left-aligned for left-to-right text,
right-aligned otherwise.*/START:ParagraphAlignment;
/**A paragraph alignment that is not supported.*/UNSUPPORTED:ParagraphAlignment;}interface Paragraph{
/**Returns the index of the paragraph's newline. Returns `null` if the newline has been
deleted.*/getIndex():Integer;
/**Returns a [`TextRange`](https://developers.google.com/apps-script/reference/slides/text-range.html) spanning the text in the paragraph ended by this object's newline
character. Returns `null` if the paragraph's newline has been deleted.*/getRange():SlidesApp.TextRange;}interface PageType{}interface _PageType{
/**A layout page.*/LAYOUT:PageType;
/**A master page.*/MASTER:PageType;
/**A slide page.*/SLIDE:PageType;
/**A page type that is not supported.*/UNSUPPORTED:PageType;}interface PageRange{
/**Returns the list of [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) instances.*/getPages():SlidesApp.Page[];}interface PageElementType{}interface _PageElementType{
/**Represents a collection of page elements joined as a single unit.*/GROUP:PageElementType;
/**Represents an image.*/IMAGE:PageElementType;
/**Represents a line.*/LINE:PageElementType;
/**Represents a generic shape that does not have a more specific classification.*/SHAPE:PageElementType;
/**Represents a linked chart embedded from Google Sheets.*/SHEETS_CHART:PageElementType;
/**Represents a speaker spotlight.*/SPEAKER_SPOTLIGHT:PageElementType;
/**Represents a table.*/TABLE:PageElementType;
/**Represents a page element that is not supported and cannot be further classified.*/UNSUPPORTED:PageElementType;
/**Represents a video.*/VIDEO:PageElementType;
/**Represents word art.*/WORD_ART:PageElementType;}interface PageElementRange{
/**Returns the list of [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) instances.*/getPageElements():SlidesApp.PageElement[];}interface PageElement{
/**Aligns the element to the specified alignment position on the page.
@param alignmentPosition The position to align this page element to on the page.
@return This page element, for chaining.*/alignOnPage(alignmentPosition:SlidesApp.AlignmentPosition):SlidesApp.PageElement;
/**Returns the page element as a group.
@return This page element as a group.*/asGroup():SlidesApp.Group;
/**Returns the page element as an image.
@return This page element as an image.*/asImage():SlidesApp.Image;
/**Returns the page element as a line.
@return This page element as a line.*/asLine():SlidesApp.Line;
/**Returns the page element as a shape.
@return This page element as a shape.*/asShape():SlidesApp.Shape;
/**Returns the page element as a linked chart embedded from Google Sheets.
@return The page element as a chart.*/asSheetsChart():SlidesApp.SheetsChart;
/**Returns the page element as a speaker spotlight.

```
const pageElement = slide.getPageElements()[0];
pageElement.asSpeakerSpotlight();
```
@return The page element as a speaker spotlight.*/asSpeakerSpotlight():SlidesApp.SpeakerSpotlight;
/**Returns the page element as a table.
@return This page element as a table.*/asTable():SlidesApp.Table;
/**Returns the page element as a video.
@return This page element as a video.*/asVideo():SlidesApp.Video;
/**Returns the page element as word art.
@return This page element as word art.*/asWordArt():SlidesApp.WordArt;
/**Brings the page element forward on the page by one element.

The page element must not be in a group.
@return This page element, for chaining.*/bringForward():SlidesApp.PageElement;
/**Brings the page element to the front of the page.

The page element must not be in a group.
@return This page element, for chaining.*/bringToFront():SlidesApp.PageElement;
/**Duplicates the page element.

The duplicate page element is placed on the same page at the same position as the original.
@return The new duplicate of this page element.*/duplicate():SlidesApp.PageElement;
/**Returns the list of `ConnectionSite`s on the page element, or an empty list if the page
element does not have any connection sites.
@return The connection sites list, which may be empty if this element has no connection sites.*/getConnectionSites():SlidesApp.ConnectionSite[];
/**Returns the page element's alt text description. The description is combined with the title to
display and read alt text.
@return The page element's alt text description.*/getDescription():string;
/**Gets the element's height in points, which is the height of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@return The page element's inherent height in points, or `null` if the page element does
    not have a height.*/getHeight():number;
/**Returns the element's inherent height in points.

The page element's transform is relative to its inherent size. Use the inherent size in
conjunction with the element's transform to determine the element's final visual appearance.
@return The page element's inherent height in points, or `null` if the page element does
    not have a height.*/getInherentHeight():number;
/**Returns the element's inherent width in points.

The page element's transform is relative to its inherent size. Use the inherent size in
conjunction with the element's transform to determine the element's final visual appearance.
@return The page element's inherent width in points, or `null` if the page element does
    not have a width.*/getInherentWidth():number;
/**Returns the element's horizontal position in points, measured from the upper-left corner of the
page when the element has no rotation.
@return This element's horizontal position in points, from the upper-left corner of the page.*/getLeft():number;
/**Returns the unique ID for this object. Object IDs used by pages and page elements share the
same namespace.
@return The unique ID for this object.*/getObjectId():string;
/**Returns the page element's type, represented as a [`PageElementType`](https://developers.google.com/apps-script/reference/slides/page-element-type.html) enum.
@return The page element's type.*/getPageElementType():SlidesApp.PageElementType;
/**Returns the group this page element belongs to, or `null` if the element is not in a
group.
@return The group this page element belongs to, or `null`.*/getParentGroup():SlidesApp.Group;
/**Returns the page this page element is on.
@return The page this element resides on.*/getParentPage():SlidesApp.Page;
/**Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
means no rotation.
@return The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).*/getRotation():number;
/**Returns the page element's alt text title. The title is combined with the description to
display and read alt text.
@return The page element's alt text title.*/getTitle():string;
/**Gets the element's vertical position in points, measured from the upper-left corner of the page
when the element has no rotation.
@return This element's vertical position in points, from the upper-left corner of the page.*/getTop():number;
/**Returns the page element's transform.

The visual appearance of the page element is determined by its absolute transform. To
compute the absolute transform, preconcatenate a page element's transform with the transforms
of all of its parent groups. If the page element is not in a group, its absolute transform is
the same as the value in this field.
@return The page element's transform.*/getTransform():SlidesApp.AffineTransform;
/**Returns the element's width in points, which is the width of the element's bounding box when
the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@return The page element's inherent width in points, or `null` if the page element does
    not have a width.*/getWidth():number;
/**Preconcatenates the provided transform to the existing transform of the page element.

```
newTransform = argument * existingTransform
```

For example, to move a page elements 36 points to the left:

```
element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
    .setTranslateX(-36.0)
    .build());
```

You can also replace the page element's transform with [`setTransform(transform)`](https://developers.google.com/apps-script/reference/slides/page-element.html#setTransform(AffineTransform)).
@param transform The transform to preconcatenate onto this page element's transform.
@return This page element, for chaining.*/preconcatenateTransform(transform:SlidesApp.AffineTransform):SlidesApp.PageElement;
/**Removes the page element.

If after a remove operation, a `Group` contains only one or no page elements, the
group itself is also removed.

If a placeholder `PageElement` is removed on a master or layout, any empty inheriting
placeholders are also removed.*/remove():void;
/**Scales the element's height by the specified ratio. The element's height is the height of its
bounding box when the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param ratio The ratio to scale this page element's height by.
@return This page element, for chaining.*/scaleHeight(ratio:number):SlidesApp.PageElement;
/**Scales the element's width by the specified ratio. The element's width is the width of its
bounding box when the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param ratio The ratio to scale this page element's width by.
@return This page element, for chaining.*/scaleWidth(ratio:number):SlidesApp.PageElement;
/**Selects only the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) in the active presentation and removes any previous
selection. This is the same as calling [`select(replace)`](https://developers.google.com/apps-script/reference/slides/page-element.html#select(Boolean)) with `true`.

A script can only access the selection of the user who is running the script, and only if
the script is [bound](/apps-script/scripts_containers) to the presentation.

This sets the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) as the [`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var pageElement = slide.getPageElements()[0];
// Only select this page element and replace any previous selection.
pageElement.select();
```*/select():void;
/**Selects the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) in the active presentation.

A script can only access the selection of the user who is running the script, and only if
the script is [bound](/apps-script/scripts_containers) to the presentation.

Pass `true` to this method to select only the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) and remove any
previous selection. This also sets the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) as the
[`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).

Pass `false` to select multiple [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) objects. The [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html)
objects must be in the same [`Page`](https://developers.google.com/apps-script/reference/slides/page.html).

The following conditions must be met while selecting a page element using a `false`
parameter:

  1. The parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) object must be the [`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).
  1. There should not be multiple [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) objects selected.

To make sure that’s the case the preferred approach is to select the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html)
first using [`Page.selectAsCurrentPage()`](https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()) and then select the page elements in that page.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
// First select the slide page, as the current page selection.
slide.selectAsCurrentPage();
// Then select all the page elements in the selected slide page.
var pageElements = slide.getPageElements();
for (var i = 0; i < pageElements.length; i++) {
  pageElements[i].select(false);
}
```
@param replace If `true`, the selection replaces any previous selection; otherwise the
    selection is added to any previous selection.*/select(replace:boolean):void;
/**Sends the page element backward on the page by one element.

The page element must not be in a group.
@return This page element, for chaining.*/sendBackward():SlidesApp.PageElement;
/**Sends the page element to the back of the page.

The page element must not be in a group.
@return This page element, for chaining.*/sendToBack():SlidesApp.PageElement;
/**Sets the page element's alt text description.

The method is not supported for [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) elements.

```
// Set the first page element's alt text description to "new alt text description".
var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
pageElement.setDescription('new alt text description');
Logger.log(pageElement.getDescription());
```
@param description The string to set the alt text description to.
@return This page element.*/setDescription(description:string):SlidesApp.PageElement;
/**Sets the element's height in points, which is the height of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param height The new height of this page element to set, in points.
@return This page element, for chaining.*/setHeight(height:number):SlidesApp.PageElement;
/**Sets the element's horizontal position in points, measured from the upper-left corner of the
page when the element has no rotation.
@param left The new horizontal position to set, in points.
@return This page element, for chaining.*/setLeft(left:number):SlidesApp.PageElement;
/**Sets the element's clockwise rotation angle around its center in degrees.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param angle The new clockwise rotation angle to set, in degrees.
@return This page element, for chaining.*/setRotation(angle:number):SlidesApp.PageElement;
/**Sets the page element's alt text title.

The method is not supported for [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) elements.

```
// Set the first page element's alt text title to "new alt text title".
var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
pageElement.setTitle('new alt text title');
Logger.log(pageElement.getTitle());
```
@param title The string to set the alt text title to.
@return This page element.*/setTitle(title:string):SlidesApp.PageElement;
/**Sets the element's vertical position in points, measured from the upper-left corner of the page
when the element has no rotation.
@param top The new vertical position to set, in points.
@return This page element, for chaining.*/setTop(top:number):SlidesApp.PageElement;
/**Sets the transform of the page element with the provided transform.

Updating the transform of a group changes the absolute transform of the page elements in
that group, which can change their visual appearance.

Updating the transform of a page element that is in a group only changes the transform of
that page element; it doesn't affect the transforms of the group or other page elements in the
group.

For details on how transforms impact the visual appearance of page elements, see [`getTransform()`](https://developers.google.com/apps-script/reference/slides/page-element.html#getTransform()).
@param transform The transform that is set for this page element.
@return This element, for chaining.*/setTransform(transform:SlidesApp.AffineTransform):SlidesApp.PageElement;
/**Sets the element's width in points, which is the width of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param width The new width of this page element to set, in points.
@return This page element, for chaining.*/setWidth(width:number):SlidesApp.PageElement;}interface PageBackgroundType{}interface _PageBackgroundType{
/**No fill, so the background is rendered white.*/NONE:PageBackgroundType;
/**A picture that is stretched to fill the page.*/PICTURE:PageBackgroundType;
/**A solid color fill.*/SOLID:PageBackgroundType;
/**A page background type that is not supported.*/UNSUPPORTED:PageBackgroundType;}interface PageBackground{
/**Get the stretched picture fill of this background, or `null` if the background fill type
is not [`PageBackgroundType.PICTURE`](https://developers.google.com/apps-script/reference/slides/page-background-type.html#PICTURE).*/getPictureFill():SlidesApp.PictureFill;
/**Get the solid fill of this background, or `null` if the background fill type is not
[`PageBackgroundType.SOLID`](https://developers.google.com/apps-script/reference/slides/page-background-type.html#SOLID).*/getSolidFill():SlidesApp.SolidFill;
/**Get the type of this page background.*/getType():SlidesApp.PageBackgroundType;
/**Whether the background is visible.*/isVisible():boolean;
/**Sets an image from the specified image blob as the page background. The image is stretched to
match the dimensions of the page.

Inserting the image fetches it from the [`BlobSource`](https://developers.google.com/apps-script/reference/slides/../base/blob-source.html) once and a copy is stored for
display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
megapixels, and must be in either in PNG, JPEG, or GIF format.
@param blobSource The image data.*/setPictureFill(blobSource:BlobSource):void;
/**Sets the image at the provided URL as the page background. The image is stretched to match the
dimensions of the page.

Inserting the image fetches it from the URL once and a copy is stored for display inside the
presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
in either in PNG, JPEG, or GIF format.

The provided URL must be publicly accessible and no larger than 2kB. The URL itself is saved
with the image and exposed via [`PictureFill.getSourceUrl()`](https://developers.google.com/apps-script/reference/slides/picture-fill.html#getSourceUrl()).
@param imageUrl The URL to download the image from.*/setPictureFill(imageUrl:string):void;
/**Sets the solid fill to the given RGB values.*/setSolidFill(red:Integer,green:Integer,blue:Integer):void;
/**Sets the solid fill to the given alpha and RGB values.*/setSolidFill(red:Integer,green:Integer,blue:Integer,alpha:number):void;
/**Sets the solid fill to the given [`Color`](https://developers.google.com/apps-script/reference/slides/color.html).*/setSolidFill(color:SlidesApp.Color):void;
/**Sets the solid fill to the given alpha and [`Color`](https://developers.google.com/apps-script/reference/slides/color.html).*/setSolidFill(color:SlidesApp.Color,alpha:number):void;
/**Sets the solid fill to the given [`ThemeColorType`](https://developers.google.com/apps-script/reference/slides/theme-color-type.html).*/setSolidFill(color:SlidesApp.ThemeColorType):void;
/**Sets the solid fill to the given alpha and [`ThemeColorType`](https://developers.google.com/apps-script/reference/slides/theme-color-type.html).*/setSolidFill(color:SlidesApp.ThemeColorType,alpha:number):void;
/**Sets the solid fill to the given hex color string.

The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
'#FFC0CB'.*/setSolidFill(hexString:string):void;
/**Sets the solid fill to the given alpha and hex color string.

The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
'#FFC0CB'.*/setSolidFill(hexString:string,alpha:number):void;
/**Sets the background to transparent.*/setTransparent():void;}interface Page{
/**Returns the page as a layout.
@return The page as a layout.*/asLayout():SlidesApp.Layout;
/**Returns the page as a master.
@return The page as a master.*/asMaster():SlidesApp.Master;
/**Returns the page as a slide.
@return The page as a slide.*/asSlide():SlidesApp.Slide;
/**Gets the page's background.
@return The page's background.*/getBackground():SlidesApp.PageBackground;
/**Gets the [`ColorScheme`](https://developers.google.com/apps-script/reference/slides/color-scheme.html) associated with the page.
@return The page's color scheme.*/getColorScheme():SlidesApp.ColorScheme;
/**Returns the list of [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) objects on the page.*/getGroups():SlidesApp.Group[];
/**Returns the list of [`Image`](https://developers.google.com/apps-script/reference/slides/image.html) objects on the page.*/getImages():SlidesApp.Image[];
/**Returns the list of [`Line`](https://developers.google.com/apps-script/reference/slides/line.html) objects on the page.*/getLines():SlidesApp.Line[];
/**Gets the unique ID for the page. Object IDs used by pages and page elements share the same
namespace.*/getObjectId():string;
/**Returns the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) on the page with the given ID, or `null` if none exists.
@param id The ID of the page element that is being retrieved.
@return The page element with the given ID.*/getPageElementById(id:string):SlidesApp.PageElement;
/**Returns the list of [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) objects rendered on the page.*/getPageElements():SlidesApp.PageElement[];
/**Gets the type of the page.
@return The page type.*/getPageType():SlidesApp.PageType;
/**Returns the placeholder [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) object for a specified [`PlaceholderType`](https://developers.google.com/apps-script/reference/slides/placeholder-type.html) or
`null` if a matching placeholder is not present.

If there are multiple placeholders with the same type, it returns the one with minimal
placeholder index. If there are multiple matching placeholders with the same index, it returns
the first placeholder from the page's page elements collection.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
```*/getPlaceholder(placeholderType:SlidesApp.PlaceholderType):SlidesApp.PageElement;
/**Returns the placeholder [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) object for a specified [`PlaceholderType`](https://developers.google.com/apps-script/reference/slides/placeholder-type.html) and
a placeholder index, or `null` if the placeholder is not present.

If there are multiple placeholders with the same type and index, it returns the first
placeholder from the page's page elements collection.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
```*/getPlaceholder(placeholderType:SlidesApp.PlaceholderType,placeholderIndex:Integer):SlidesApp.PageElement;
/**Returns the list of placeholder [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) objects in the page.

```
var master = SlidesApp.getActivePresentation().getMasters()[0];
Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
```*/getPlaceholders():SlidesApp.PageElement[];
/**Returns the list of [`Shape`](https://developers.google.com/apps-script/reference/slides/shape.html) objects on the page.*/getShapes():SlidesApp.Shape[];
/**Returns the list of [`SheetsChart`](https://developers.google.com/apps-script/reference/slides/sheets-chart.html) objects on the page.*/getSheetsCharts():SlidesApp.SheetsChart[];
/**Returns the list of [`Table`](https://developers.google.com/apps-script/reference/slides/table.html) objects on the page.*/getTables():SlidesApp.Table[];
/**Returns the list of [`Video`](https://developers.google.com/apps-script/reference/slides/video.html) objects on the page.*/getVideos():SlidesApp.Video[];
/**Returns the list of [`WordArt`](https://developers.google.com/apps-script/reference/slides/word-art.html) objects on the page.*/getWordArts():SlidesApp.WordArt[];
/**Groups all the specified page elements.

There should be at least two page elements on the same page that are not already in another
group. Some page elements, such as [`Videos`](https://developers.google.com/apps-script/reference/slides/video.html), [`Tables`](https://developers.google.com/apps-script/reference/slides/table.html) and [`placeholder Shapes`](https://developers.google.com/apps-script/reference/slides/shape.html#getPlaceholderType()) cannot be grouped.
@param pageElements The elements to group together.
@return The new group.*/group(pageElements:SlidesApp.PageElement[]):SlidesApp.Group;
/**Inserts a copy of the provided [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a group between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var group = otherPresentationSlide.getGroups()[0];
currentPresentationSlide.insertGroup(group); // Also available for Layout, Master, and Page.
```
@param group The group to be copied and inserted.
@return The inserted group.*/insertGroup(group:SlidesApp.Group):SlidesApp.Group;
/**Inserts an image at the top left corner of the page with a default size from the specified
image blob.

Inserting the image fetches it from the [`BlobSource`](https://developers.google.com/apps-script/reference/slides/../base/blob-source.html) once and a copy is stored for
display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
megapixels, and must be in either in PNG, JPEG, or GIF format.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
// Get the Drive image file with the given ID.
var image = DriveApp.getFileById(fileId);
slide.insertImage(image);
```
@param blobSource The image data.
@return The inserted image.*/insertImage(blobSource:BlobSource):SlidesApp.Image;
/**Inserts an image on the page with the provided position and size from the specified image blob.

The image is fetched from the provided [`BlobSource`](https://developers.google.com/apps-script/reference/slides/../base/blob-source.html) once at insertion time and a copy
is stored for display inside the presentation. Images must be less than 50MB in size, cannot
exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF format.

In order to maintain the image's aspect ratio, the image is scaled and centered with respect
to the provided size.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
// Get the Drive image file with the given ID.
var image = DriveApp.getFileById(fileId);
var position = {left: 0, top: 0};
var size = {width: 300, height: 100};
slide.insertImage(image, position.left, position.top, size.width, size.height);
```
@param blobSource The image data.
@param left The horizontal position of the image in points, measured from the upper left corner
    of the page.
@param top The vertical position of the image in points, measured from the upper left corner of
    the page.
@param width The width of the image in points.
@param height The height of the image in points.
@return The inserted image.*/insertImage(blobSource:BlobSource,left:number,top:number,width:number,height:number):SlidesApp.Image;
/**Inserts a copy of the provided [`Image`](https://developers.google.com/apps-script/reference/slides/image.html) on the page.

The inserted images's position on this page is determined from the source image's position
on its respective page.

If the provided image is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted image.

If the provided image is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the image from the source
presentation. If the copied placeholder image is empty, nothing is inserted in the destination
presentation.

```
// Copy an image between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var image = otherPresentationSlide.getImages[0];
currentPresentationSlide.insertImage(image);
```
@param image The image to be copied and inserted.
@return The inserted image.*/insertImage(image:SlidesApp.Image):SlidesApp.Image;
/**Inserts an image at the top left corner of the page with a default size from the provided URL.

Inserting the image fetches it from the URL once and a copy is stored for display inside the
presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
in either in PNG, JPEG, or GIF format.

The provided URL must be publicly accessible and no larger than 2kB. The URL itself is saved
with the image and exposed via [`Image.getSourceUrl()`](https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()).
@param imageUrl The image URL.
@return The inserted image.*/insertImage(imageUrl:string):SlidesApp.Image;
/**Inserts an image on the page with the provided position and size from the provided URL.

Inserting the image fetches it from the URL once and a copy is stored for display inside the
presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
in either in PNG, JPEG, or GIF format.

The provided URL must be publicly accessible and no larger than 2kB. The URL itself is saved
with the image and exposed via [`Image.getSourceUrl()`](https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()).

In order to maintain the image's aspect ratio, the image is scaled and centered with respect
to the provided size.
@param imageUrl The image URL.
@param left The horizontal position of the image in points, measured from the upper left corner
    of the page.
@param top The vertical position of the image in points, measured from the upper left corner of
    the page.
@param width The width of the image in points.
@param height The height of the image in points.
@return The inserted image.*/insertImage(imageUrl:string,left:number,top:number,width:number,height:number):SlidesApp.Image;
/**Inserts a copy of the provided [`Line`](https://developers.google.com/apps-script/reference/slides/line.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a line between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var line = otherPresentationSlide.getLines[0];
currentPresentationSlide.insertLine(line);
```
@param line The line to be copied and inserted.
@return The inserted line.*/insertLine(line:SlidesApp.Line):SlidesApp.Line;
/**Inserts a line on the page.

```
// Insert a line in the first slide of the presentation.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var startPoint = {left: 10, top: 10};
var endPoint = {left: 40, top: 40};
slide.insertLine(
    SlidesApp.LineCategory.STRAIGHT,
    startPoint.left,
    startPoint.top,
    endPoint.left,
    endPoint.top);
```
@param lineCategory The category of the line to insert.
@param startLeft The horizontal position of the start point of the line, measured in points
    from the upper left corner of the page.
@param startTop The vertical position of the start point of the line, measured in points from
    the upper left corner of the page.
@param endLeft The horizontal position of the end point of the line, measured in points from
    the upper left corner of the page.
@param endTop The vertical position of the end point of the line, measured in points from the
    upper left corner of the page.
@return The inserted line.*/insertLine(lineCategory:SlidesApp.LineCategory,startLeft:number,startTop:number,endLeft:number,endTop:number):SlidesApp.Line;
/**Inserts a line on the page connecting two [`connection sites`](https://developers.google.com/apps-script/reference/slides/connection-site.html). The two
connection sites must be on this page.

```
// Insert a line in the first slide of the presentation connecting two shapes.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var shape1 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
var shape2 = slide.insertShape(SlidesApp.ShapeType.CLOUD);
slide.insertLine(
    SlidesApp.LineCategory.BENT,
    shape1.getConnectionSites()[0],
    shape2.getConnectionSites()[1]);
```
@param lineCategory The category of the line to insert.
@param startConnectionSite The connection site where the start of the line is to be connected.
@param endConnectionSite The connection site where the end of the line is to be connected.
@return The inserted line.*/insertLine(lineCategory:SlidesApp.LineCategory,startConnectionSite:SlidesApp.ConnectionSite,endConnectionSite:SlidesApp.ConnectionSite):SlidesApp.Line;
/**Inserts a copy of the provided [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a page element between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var pageElement = otherPresentationSlide.getPageElements()[0];

// Also available for Layout, Master, and Page.
currentPresentationSlide.insertPageElement(pageElement);
```
@param pageElement The page element to be copied and inserted.
@return The inserted page element.*/insertPageElement(pageElement:SlidesApp.PageElement):SlidesApp.PageElement;
/**Inserts a copy of the provided [`Shape`](https://developers.google.com/apps-script/reference/slides/shape.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a shape between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var shape = otherPresentationSlide.getShapes[0];
currentPresentationSlide.insertShape(shape); // Also available for Layout, Master, and Page.
```
@param shape The shape to be copied and inserted.
@return The inserted shape.*/insertShape(shape:SlidesApp.Shape):SlidesApp.Shape;
/**Inserts a shape on the page.

The shape is inserted with a default size at the top left corner of the page.

```
// Insert a shape in the first slide of the presentation.
var slide = SlidesApp.getActivePresentation().getSlides()[0];

// Also available for Layout, Master, and Page.
slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
```
@param shapeType The type of shape to insert.
@return The inserted shape.*/insertShape(shapeType:SlidesApp.ShapeType):SlidesApp.Shape;
/**Inserts a shape on the page.
@param shapeType The type of shape to insert.
@param left The horizontal position of the shape, measured from the upper left corner of the
    page.
@param top The vertical position of the shape, measured from the upper left corner of the page.
@param width The width of the shape.
@param height The height of the shape.
@return The inserted shape.*/insertShape(shapeType:SlidesApp.ShapeType,left:number,top:number,width:number,height:number):SlidesApp.Shape;
/**Inserts a copy of the provided [`SheetsChart`](https://developers.google.com/apps-script/reference/slides/sheets-chart.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a sheets chart between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var sheetsChart = otherPresentationSlide.getSheetsCharts[0];

// Also available for Layout, Master, and Page.
currentPresentationSlide.insertSheetsChart(sheetsChart);
```
@param sheetsChart The sheets chart to be copied and inserted.
@return The inserted sheets chart.*/insertSheetsChart(sheetsChart:SlidesApp.SheetsChart):SlidesApp.SheetsChart;
/**Inserts a Google Sheets chart on the page.

The chart is inserted with a default size at the top left corner of the page.

The inserted chart is linked with the source Google Sheets chart which allows it to be
updated. Other collaborators can see the link to the source spreadsheet.

```
var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
var chart = sheet.getCharts()[0];
// Insert the spreadsheet chart in the first slide.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
slide.insertSheetsChart(chart);
```
@param sourceChart The chart in a spreadsheet to be inserted in the page.
@return The inserted chart in the page.*/insertSheetsChart(sourceChart:SpreadsheetApp.EmbeddedChart):SlidesApp.SheetsChart;
/**Inserts a Google Sheets chart on the page with the provided position and size.

In order to maintain the chart's aspect ratio, the chart is scaled and centered with respect
to the provided size.

The inserted chart is linked with the source Google Sheets chart which allows it to be
updated. Other collaborators can see the link to the source spreadsheet.

```
var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
var chart = sheet.getCharts()[0];
// Insert the spreadsheet chart in the first slide.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var position = {left: 0, top: 0};
var size = {width: 200, height: 200};

// Also available for Layout, Master, and Page.
slide.insertSheetsChart(
    chart,
    position.left,
    position.top,
    size.width,
    size.height);
```
@param sourceChart The chart in a spreadsheet to be inserted in the page.
@param left The horizontal position of the chart in points, measured from the upper left corner
    of the page.
@param top The vertical position of the chart in points, measured from the upper left corner of
    the page.
@param width The width of the chart in points.
@param height The height of the chart in points.
@return The inserted chart in the page.*/insertSheetsChart(sourceChart:SpreadsheetApp.EmbeddedChart,left:number,top:number,width:number,height:number):SlidesApp.SheetsChart;
/**Inserts a Google Sheets chart as an [`Image`](https://developers.google.com/apps-script/reference/slides/image.html) on the page.

The image of the chart is inserted with a default size at the top left corner of the page.

The inserted image of chart is not linked with the source Google Sheets chart.

```
var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
var chart = sheet.getCharts()[0];
// Insert the spreadsheet chart in the first slide.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
slide.insertSheetsChartAsImage(chart); // Also available for Layout, Master, and Page.
```
@param sourceChart The chart in a spreadsheet to be inserted in the page.
@return The inserted image of the chart in the page.*/insertSheetsChartAsImage(sourceChart:SpreadsheetApp.EmbeddedChart):SlidesApp.Image;
/**Inserts a Google Sheets chart as an [`Image`](https://developers.google.com/apps-script/reference/slides/image.html) on the page with the provided position and
size.

In order to maintain the chart image's aspect ratio, the image is scaled and centered with
respect to the provided size.

The inserted image of the chart is not linked with the source Google Sheets chart.

```
var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
var chart = sheet.getCharts()[0];
// Insert the spreadsheet chart in the first slide.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var position = {left: 0, top: 0};
var size = {width: 200, height: 200};

// Also available for Layout, Master, and Page.
slide.insertSheetsChartAsImage(
    chart,
    position.left,
    position.right,
    size.width,
    size.height);
```
@param sourceChart The chart in a spreadsheet to be inserted in the page.
@param left The horizontal position of the chart in points, measured from the upper left corner
    of the page.
@param top The vertical position of the chart in points, measured from the upper left corner of
    the page.
@param width The width of the chart in points.
@param height The height of the chart in points.
@return The inserted image of the chart in the page.*/insertSheetsChartAsImage(sourceChart:SpreadsheetApp.EmbeddedChart,left:number,top:number,width:number,height:number):SlidesApp.Image;
/**Inserts a table on the page.

The table is centered on the page with default size and evenly distributed rows and columns.
@param numRows The number of rows in the table.
@param numColumns The number of columns in the table.
@return The inserted table.*/insertTable(numRows:Integer,numColumns:Integer):SlidesApp.Table;
/**Inserts a table on the page with the provided position and size.

Rows and columns are evenly distributed in the created table.
@param numRows The number of rows in the table.
@param numColumns The number of columns in the table.
@param left The horizontal position of the table, measured from the upper left corner of the
    page.
@param top The vertical position of the table, measured from the upper left corner of the page.
@param width The width of the table.
@param height The minimum height of the table. The actual height of the rendered table depends
    on factors such as text font size.
@return The inserted table.*/insertTable(numRows:Integer,numColumns:Integer,left:number,top:number,width:number,height:number):SlidesApp.Table;
/**Inserts a copy of the provided [`Table`](https://developers.google.com/apps-script/reference/slides/table.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a table between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var table = otherPresentationSlide.getTables[0];
currentPresentationSlide.insertTable(table); // Also available for Layout, Master, and Page.
```
@param table The table to be copied and inserted.
@return The inserted table.*/insertTable(table:SlidesApp.Table):SlidesApp.Table;
/**Inserts a text box [`Shape`](https://developers.google.com/apps-script/reference/slides/shape.html) containing the provided string on the page.

The text box shape is inserted with a default size at the top left corner of the page.

```
// Insert text box with "Hello" on the first slide of presentation.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
slide.insertTextBox('Hello'); // Also available for Layout, Master, and Page.
```
@param text The string the text box shape should contain.
@return The inserted text box shape.*/insertTextBox(text:string):SlidesApp.Shape;
/**Inserts a text box [`Shape`](https://developers.google.com/apps-script/reference/slides/shape.html) containing the provided string on the page.

```
// Insert text box with "Hello" on the first slide of presentation. This text box is a square
// with a length of 10 points on each side.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
slide.insertTextBox('Hello', 0, 0, 10, 10); // Also available for Layout, Master, and Page.
```
@param text The string the text box shape should contain.
@param left The horizontal position of the text box shape, measured from the upper left corner
    of the page.
@param top The vertical position of the text box shape, measured from the upper left corner of
    the page.
@param width The width of the text box shape.
@param height The height of the text box shape.
@return The inserted text box shape.*/insertTextBox(text:string,left:number,top:number,width:number,height:number):SlidesApp.Shape;
/**Inserts a copy of the provided [`Video`](https://developers.google.com/apps-script/reference/slides/video.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a video between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var video = otherPresentationSlide.getVideos[0];
currentPresentationSlide.insertVideo(video); // Also available for Layout, Master, and Page.
```
@param video The video to be copied and inserted.
@return The inserted video.*/insertVideo(video:SlidesApp.Video):SlidesApp.Video;
/**Inserts a video at the top left corner of the page with a default size.

Only YouTube videos are currently supported.
@param videoUrl The URL of the video to insert.
@return The inserted video.*/insertVideo(videoUrl:string):SlidesApp.Video;
/**Inserts a video on the page with the provided position and size.

Only YouTube videos are currently supported.
@param videoUrl The URL of the video to insert.
@param left The horizontal position of the video in points, measured from the upper left corner
    of the page.
@param top The vertical position of the video in points, measured from the upper left corner of
    the page.
@param width The width of the video in points.
@param height The height of the video in points.
@return The inserted video.*/insertVideo(videoUrl:string,left:number,top:number,width:number,height:number):SlidesApp.Video;
/**Inserts a copy of the provided [`WordArt`](https://developers.google.com/apps-script/reference/slides/word-art.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a word art between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var wordArt = otherPresentationSlide.getWordArts[0];

// Also available for Layout, Master, and Page.
currentPresentationSlide.insertWordArt(wordArt);
```
@param wordArt The group to be copied and inserted.
@return The inserted word art.*/insertWordArt(wordArt:SlidesApp.WordArt):SlidesApp.WordArt;
/**Removes the page.*/remove():void;
/**Replaces all instances of text matching find text with replace text. The search is case
insensitive.
@param findText The text to find.
@param replaceText The text to replace the matched text.
@return the number of occurrences changed*/replaceAllText(findText:string,replaceText:string):Integer;
/**Replaces all instances of text matching find text with replace text.
@param findText The text to find.
@param replaceText The text to replace the matched text.
@param matchCase If `true`, the search is case sensitive; if `false`, the search is
    case insensitive.
@return the number of occurrences changed*/replaceAllText(findText:string,replaceText:string,matchCase:boolean):Integer;
/**Selects the [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) in the active presentation as the [`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()) and removes any previous selection.

A script can only access the selection of the user who is running the script, and only if
the script is [bound](/apps-script/scripts_containers) to the presentation.

```
// Select the first slide as the current page selection and replace any previous selection.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
slide.selectAsCurrentPage(); // Also available for Layout, Master, and Page.
```*/selectAsCurrentPage():void;}interface NotesPage{
/**Returns the list of [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) objects on the page.*/getGroups():SlidesApp.Group[];
/**Returns the list of [`Image`](https://developers.google.com/apps-script/reference/slides/image.html) objects on the page.*/getImages():SlidesApp.Image[];
/**Returns the list of [`Line`](https://developers.google.com/apps-script/reference/slides/line.html) objects on the page.*/getLines():SlidesApp.Line[];
/**Gets the unique ID for the page. Object IDs used by pages and page elements share the same
namespace.*/getObjectId():string;
/**Returns the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) on the page with the given ID, or `null` if none exists.
@param id The ID of the page element that is being retrieved.
@return The page element with the given ID.*/getPageElementById(id:string):SlidesApp.PageElement;
/**Returns the list of [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) objects rendered on the page.*/getPageElements():SlidesApp.PageElement[];
/**Returns the placeholder [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) object for a specified [`PlaceholderType`](https://developers.google.com/apps-script/reference/slides/placeholder-type.html) or
`null` if a matching placeholder is not present.

If there are multiple placeholders with the same type, it returns the one with minimal
placeholder index. If there are multiple matching placeholders with the same index, it returns
the first placeholder from the page's page elements collection.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
```*/getPlaceholder(placeholderType:SlidesApp.PlaceholderType):SlidesApp.PageElement;
/**Returns the placeholder [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) object for a specified [`PlaceholderType`](https://developers.google.com/apps-script/reference/slides/placeholder-type.html) and
a placeholder index, or `null` if the placeholder is not present.

If there are multiple placeholders with the same type and index, it returns the first
placeholder from the page's page elements collection.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
```*/getPlaceholder(placeholderType:SlidesApp.PlaceholderType,placeholderIndex:Integer):SlidesApp.PageElement;
/**Returns the list of placeholder [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) objects in the page.

```
var master = SlidesApp.getActivePresentation().getMasters()[0];
Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
```*/getPlaceholders():SlidesApp.PageElement[];
/**Returns the list of [`Shape`](https://developers.google.com/apps-script/reference/slides/shape.html) objects on the page.*/getShapes():SlidesApp.Shape[];
/**Returns the list of [`SheetsChart`](https://developers.google.com/apps-script/reference/slides/sheets-chart.html) objects on the page.*/getSheetsCharts():SlidesApp.SheetsChart[];
/**Gets the shape containing the speaker notes on the page.*/getSpeakerNotesShape():SlidesApp.Shape;
/**Returns the list of [`Table`](https://developers.google.com/apps-script/reference/slides/table.html) objects on the page.*/getTables():SlidesApp.Table[];
/**Returns the list of [`Video`](https://developers.google.com/apps-script/reference/slides/video.html) objects on the page.*/getVideos():SlidesApp.Video[];
/**Returns the list of [`WordArt`](https://developers.google.com/apps-script/reference/slides/word-art.html) objects on the page.*/getWordArts():SlidesApp.WordArt[];
/**Replaces all instances of text matching find text with replace text. The search is case
insensitive.
@param findText The text to find.
@param replaceText The text to replace the matched text.
@return the number of occurrences changed*/replaceAllText(findText:string,replaceText:string):Integer;
/**Replaces all instances of text matching find text with replace text.
@param findText The text to find.
@param replaceText The text to replace the matched text.
@param matchCase If `true`, the search is case sensitive; if `false`, the search is
    case insensitive.
@return the number of occurrences changed*/replaceAllText(findText:string,replaceText:string,matchCase:boolean):Integer;}interface NotesMaster{
/**Returns the list of [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) objects on the page.*/getGroups():SlidesApp.Group[];
/**Returns the list of [`Image`](https://developers.google.com/apps-script/reference/slides/image.html) objects on the page.*/getImages():SlidesApp.Image[];
/**Returns the list of [`Line`](https://developers.google.com/apps-script/reference/slides/line.html) objects on the page.*/getLines():SlidesApp.Line[];
/**Gets the unique ID for the page. Object IDs used by pages and page elements share the same
namespace.*/getObjectId():string;
/**Returns the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) on the page with the given ID, or `null` if none exists.
@param id The ID of the page element that is being retrieved.
@return The page element with the given ID.*/getPageElementById(id:string):SlidesApp.PageElement;
/**Returns the list of [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) objects rendered on the page.*/getPageElements():SlidesApp.PageElement[];
/**Returns the placeholder [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) object for a specified [`PlaceholderType`](https://developers.google.com/apps-script/reference/slides/placeholder-type.html) or
`null` if a matching placeholder is not present.

If there are multiple placeholders with the same type, it returns the one with minimal
placeholder index. If there are multiple matching placeholders with the same index, it returns
the first placeholder from the page's page elements collection.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
```*/getPlaceholder(placeholderType:SlidesApp.PlaceholderType):SlidesApp.PageElement;
/**Returns the placeholder [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) object for a specified [`PlaceholderType`](https://developers.google.com/apps-script/reference/slides/placeholder-type.html) and
a placeholder index, or `null` if the placeholder is not present.

If there are multiple placeholders with the same type and index, it returns the first
placeholder from the page's page elements collection.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
```*/getPlaceholder(placeholderType:SlidesApp.PlaceholderType,placeholderIndex:Integer):SlidesApp.PageElement;
/**Returns the list of placeholder [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) objects in the page.

```
var master = SlidesApp.getActivePresentation().getMasters()[0];
Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
```*/getPlaceholders():SlidesApp.PageElement[];
/**Returns the list of [`Shape`](https://developers.google.com/apps-script/reference/slides/shape.html) objects on the page.*/getShapes():SlidesApp.Shape[];
/**Returns the list of [`SheetsChart`](https://developers.google.com/apps-script/reference/slides/sheets-chart.html) objects on the page.*/getSheetsCharts():SlidesApp.SheetsChart[];
/**Returns the list of [`Table`](https://developers.google.com/apps-script/reference/slides/table.html) objects on the page.*/getTables():SlidesApp.Table[];
/**Returns the list of [`Video`](https://developers.google.com/apps-script/reference/slides/video.html) objects on the page.*/getVideos():SlidesApp.Video[];
/**Returns the list of [`WordArt`](https://developers.google.com/apps-script/reference/slides/word-art.html) objects on the page.*/getWordArts():SlidesApp.WordArt[];}interface Master{
/**Gets the page's background.
@return The page's background.*/getBackground():SlidesApp.PageBackground;
/**Gets the [`ColorScheme`](https://developers.google.com/apps-script/reference/slides/color-scheme.html) associated with the page.
@return The page's color scheme.*/getColorScheme():SlidesApp.ColorScheme;
/**Returns the list of [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) objects on the page.*/getGroups():SlidesApp.Group[];
/**Returns the list of [`Image`](https://developers.google.com/apps-script/reference/slides/image.html) objects on the page.*/getImages():SlidesApp.Image[];
/**Gets this master's layouts.*/getLayouts():SlidesApp.Layout[];
/**Returns the list of [`Line`](https://developers.google.com/apps-script/reference/slides/line.html) objects on the page.*/getLines():SlidesApp.Line[];
/**Gets the unique ID for the page. Object IDs used by pages and page elements share the same
namespace.*/getObjectId():string;
/**Returns the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) on the page with the given ID, or `null` if none exists.
@param id The ID of the page element that is being retrieved.
@return The page element with the given ID.*/getPageElementById(id:string):SlidesApp.PageElement;
/**Returns the list of [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) objects rendered on the page.*/getPageElements():SlidesApp.PageElement[];
/**Gets the type of the page.
@return The page type.*/getPageType():SlidesApp.PageType;
/**Returns the placeholder [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) object for a specified [`PlaceholderType`](https://developers.google.com/apps-script/reference/slides/placeholder-type.html) or
`null` if a matching placeholder is not present.

If there are multiple placeholders with the same type, it returns the one with minimal
placeholder index. If there are multiple matching placeholders with the same index, it returns
the first placeholder from the page's page elements collection.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
```*/getPlaceholder(placeholderType:SlidesApp.PlaceholderType):SlidesApp.PageElement;
/**Returns the placeholder [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) object for a specified [`PlaceholderType`](https://developers.google.com/apps-script/reference/slides/placeholder-type.html) and
a placeholder index, or `null` if the placeholder is not present.

If there are multiple placeholders with the same type and index, it returns the first
placeholder from the page's page elements collection.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
```*/getPlaceholder(placeholderType:SlidesApp.PlaceholderType,placeholderIndex:Integer):SlidesApp.PageElement;
/**Returns the list of placeholder [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) objects in the page.

```
var master = SlidesApp.getActivePresentation().getMasters()[0];
Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
```*/getPlaceholders():SlidesApp.PageElement[];
/**Returns the list of [`Shape`](https://developers.google.com/apps-script/reference/slides/shape.html) objects on the page.*/getShapes():SlidesApp.Shape[];
/**Returns the list of [`SheetsChart`](https://developers.google.com/apps-script/reference/slides/sheets-chart.html) objects on the page.*/getSheetsCharts():SlidesApp.SheetsChart[];
/**Returns the list of [`Table`](https://developers.google.com/apps-script/reference/slides/table.html) objects on the page.*/getTables():SlidesApp.Table[];
/**Returns the list of [`Video`](https://developers.google.com/apps-script/reference/slides/video.html) objects on the page.*/getVideos():SlidesApp.Video[];
/**Returns the list of [`WordArt`](https://developers.google.com/apps-script/reference/slides/word-art.html) objects on the page.*/getWordArts():SlidesApp.WordArt[];
/**Groups all the specified page elements.

There should be at least two page elements on the same page that are not already in another
group. Some page elements, such as [`Videos`](https://developers.google.com/apps-script/reference/slides/video.html), [`Tables`](https://developers.google.com/apps-script/reference/slides/table.html) and [`placeholder Shapes`](https://developers.google.com/apps-script/reference/slides/shape.html#getPlaceholderType()) cannot be grouped.
@param pageElements The elements to group together.
@return The new group.*/group(pageElements:SlidesApp.PageElement[]):SlidesApp.Group;
/**Inserts a copy of the provided [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a group between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var group = otherPresentationSlide.getGroups()[0];
currentPresentationSlide.insertGroup(group); // Also available for Layout, Master, and Page.
```
@param group The group to be copied and inserted.
@return The inserted group.*/insertGroup(group:SlidesApp.Group):SlidesApp.Group;
/**Inserts an image at the top left corner of the page with a default size from the specified
image blob.

Inserting the image fetches it from the [`BlobSource`](https://developers.google.com/apps-script/reference/slides/../base/blob-source.html) once and a copy is stored for
display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
megapixels, and must be in either in PNG, JPEG, or GIF format.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
// Get the Drive image file with the given ID.
var image = DriveApp.getFileById(fileId);
slide.insertImage(image);
```
@param blobSource The image data.
@return The inserted image.*/insertImage(blobSource:BlobSource):SlidesApp.Image;
/**Inserts an image on the page with the provided position and size from the specified image blob.

The image is fetched from the provided [`BlobSource`](https://developers.google.com/apps-script/reference/slides/../base/blob-source.html) once at insertion time and a copy
is stored for display inside the presentation. Images must be less than 50MB in size, cannot
exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF format.

In order to maintain the image's aspect ratio, the image is scaled and centered with respect
to the provided size.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
// Get the Drive image file with the given ID.
var image = DriveApp.getFileById(fileId);
var position = {left: 0, top: 0};
var size = {width: 300, height: 100};
slide.insertImage(image, position.left, position.top, size.width, size.height);
```
@param blobSource The image data.
@param left The horizontal position of the image in points, measured from the upper left corner
    of the page.
@param top The vertical position of the image in points, measured from the upper left corner of
    the page.
@param width The width of the image in points.
@param height The height of the image in points.
@return The inserted image.*/insertImage(blobSource:BlobSource,left:number,top:number,width:number,height:number):SlidesApp.Image;
/**Inserts a copy of the provided [`Image`](https://developers.google.com/apps-script/reference/slides/image.html) on the page.

The inserted images's position on this page is determined from the source image's position
on its respective page.

If the provided image is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted image.

If the provided image is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the image from the source
presentation. If the copied placeholder image is empty, nothing is inserted in the destination
presentation.

```
// Copy an image between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var image = otherPresentationSlide.getImages[0];
currentPresentationSlide.insertImage(image);
```
@param image The image to be copied and inserted.
@return The inserted image.*/insertImage(image:SlidesApp.Image):SlidesApp.Image;
/**Inserts an image at the top left corner of the page with a default size from the provided URL.

Inserting the image fetches it from the URL once and a copy is stored for display inside the
presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
in either in PNG, JPEG, or GIF format.

The provided URL must be publicly accessible and no larger than 2kB. The URL itself is saved
with the image and exposed via [`Image.getSourceUrl()`](https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()).
@param imageUrl The image URL.
@return The inserted image.*/insertImage(imageUrl:string):SlidesApp.Image;
/**Inserts an image on the page with the provided position and size from the provided URL.

Inserting the image fetches it from the URL once and a copy is stored for display inside the
presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
in either in PNG, JPEG, or GIF format.

The provided URL must be publicly accessible and no larger than 2kB. The URL itself is saved
with the image and exposed via [`Image.getSourceUrl()`](https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()).

In order to maintain the image's aspect ratio, the image is scaled and centered with respect
to the provided size.
@param imageUrl The image URL.
@param left The horizontal position of the image in points, measured from the upper left corner
    of the page.
@param top The vertical position of the image in points, measured from the upper left corner of
    the page.
@param width The width of the image in points.
@param height The height of the image in points.
@return The inserted image.*/insertImage(imageUrl:string,left:number,top:number,width:number,height:number):SlidesApp.Image;
/**Inserts a copy of the provided [`Line`](https://developers.google.com/apps-script/reference/slides/line.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a line between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var line = otherPresentationSlide.getLines[0];
currentPresentationSlide.insertLine(line);
```
@param line The line to be copied and inserted.
@return The inserted line.*/insertLine(line:SlidesApp.Line):SlidesApp.Line;
/**Inserts a line on the page.

```
// Insert a line in the first slide of the presentation.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var startPoint = {left: 10, top: 10};
var endPoint = {left: 40, top: 40};
slide.insertLine(
    SlidesApp.LineCategory.STRAIGHT,
    startPoint.left,
    startPoint.top,
    endPoint.left,
    endPoint.top);
```
@param lineCategory The category of the line to insert.
@param startLeft The horizontal position of the start point of the line, measured in points
    from the upper left corner of the page.
@param startTop The vertical position of the start point of the line, measured in points from
    the upper left corner of the page.
@param endLeft The horizontal position of the end point of the line, measured in points from
    the upper left corner of the page.
@param endTop The vertical position of the end point of the line, measured in points from the
    upper left corner of the page.
@return The inserted line.*/insertLine(lineCategory:SlidesApp.LineCategory,startLeft:number,startTop:number,endLeft:number,endTop:number):SlidesApp.Line;
/**Inserts a line on the page connecting two [`connection sites`](https://developers.google.com/apps-script/reference/slides/connection-site.html). The two
connection sites must be on this page.

```
// Insert a line in the first slide of the presentation connecting two shapes.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var shape1 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
var shape2 = slide.insertShape(SlidesApp.ShapeType.CLOUD);
slide.insertLine(
    SlidesApp.LineCategory.BENT,
    shape1.getConnectionSites()[0],
    shape2.getConnectionSites()[1]);
```
@param lineCategory The category of the line to insert.
@param startConnectionSite The connection site where the start of the line is to be connected.
@param endConnectionSite The connection site where the end of the line is to be connected.
@return The inserted line.*/insertLine(lineCategory:SlidesApp.LineCategory,startConnectionSite:SlidesApp.ConnectionSite,endConnectionSite:SlidesApp.ConnectionSite):SlidesApp.Line;
/**Inserts a copy of the provided [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a page element between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var pageElement = otherPresentationSlide.getPageElements()[0];

// Also available for Layout, Master, and Page.
currentPresentationSlide.insertPageElement(pageElement);
```
@param pageElement The page element to be copied and inserted.
@return The inserted page element.*/insertPageElement(pageElement:SlidesApp.PageElement):SlidesApp.PageElement;
/**Inserts a copy of the provided [`Shape`](https://developers.google.com/apps-script/reference/slides/shape.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a shape between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var shape = otherPresentationSlide.getShapes[0];
currentPresentationSlide.insertShape(shape); // Also available for Layout, Master, and Page.
```
@param shape The shape to be copied and inserted.
@return The inserted shape.*/insertShape(shape:SlidesApp.Shape):SlidesApp.Shape;
/**Inserts a shape on the page.

The shape is inserted with a default size at the top left corner of the page.

```
// Insert a shape in the first slide of the presentation.
var slide = SlidesApp.getActivePresentation().getSlides()[0];

// Also available for Layout, Master, and Page.
slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
```
@param shapeType The type of shape to insert.
@return The inserted shape.*/insertShape(shapeType:SlidesApp.ShapeType):SlidesApp.Shape;
/**Inserts a shape on the page.
@param shapeType The type of shape to insert.
@param left The horizontal position of the shape, measured from the upper left corner of the
    page.
@param top The vertical position of the shape, measured from the upper left corner of the page.
@param width The width of the shape.
@param height The height of the shape.
@return The inserted shape.*/insertShape(shapeType:SlidesApp.ShapeType,left:number,top:number,width:number,height:number):SlidesApp.Shape;
/**Inserts a copy of the provided [`SheetsChart`](https://developers.google.com/apps-script/reference/slides/sheets-chart.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a sheets chart between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var sheetsChart = otherPresentationSlide.getSheetsCharts[0];

// Also available for Layout, Master, and Page.
currentPresentationSlide.insertSheetsChart(sheetsChart);
```
@param sheetsChart The sheets chart to be copied and inserted.
@return The inserted sheets chart.*/insertSheetsChart(sheetsChart:SlidesApp.SheetsChart):SlidesApp.SheetsChart;
/**Inserts a Google Sheets chart on the page.

The chart is inserted with a default size at the top left corner of the page.

The inserted chart is linked with the source Google Sheets chart which allows it to be
updated. Other collaborators can see the link to the source spreadsheet.

```
var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
var chart = sheet.getCharts()[0];
// Insert the spreadsheet chart in the first slide.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
slide.insertSheetsChart(chart);
```
@param sourceChart The chart in a spreadsheet to be inserted in the page.
@return The inserted chart in the page.*/insertSheetsChart(sourceChart:SpreadsheetApp.EmbeddedChart):SlidesApp.SheetsChart;
/**Inserts a Google Sheets chart on the page with the provided position and size.

In order to maintain the chart's aspect ratio, the chart is scaled and centered with respect
to the provided size.

The inserted chart is linked with the source Google Sheets chart which allows it to be
updated. Other collaborators can see the link to the source spreadsheet.

```
var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
var chart = sheet.getCharts()[0];
// Insert the spreadsheet chart in the first slide.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var position = {left: 0, top: 0};
var size = {width: 200, height: 200};

// Also available for Layout, Master, and Page.
slide.insertSheetsChart(
    chart,
    position.left,
    position.top,
    size.width,
    size.height);
```
@param sourceChart The chart in a spreadsheet to be inserted in the page.
@param left The horizontal position of the chart in points, measured from the upper left corner
    of the page.
@param top The vertical position of the chart in points, measured from the upper left corner of
    the page.
@param width The width of the chart in points.
@param height The height of the chart in points.
@return The inserted chart in the page.*/insertSheetsChart(sourceChart:SpreadsheetApp.EmbeddedChart,left:number,top:number,width:number,height:number):SlidesApp.SheetsChart;
/**Inserts a Google Sheets chart as an [`Image`](https://developers.google.com/apps-script/reference/slides/image.html) on the page.

The image of the chart is inserted with a default size at the top left corner of the page.

The inserted image of chart is not linked with the source Google Sheets chart.

```
var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
var chart = sheet.getCharts()[0];
// Insert the spreadsheet chart in the first slide.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
slide.insertSheetsChartAsImage(chart); // Also available for Layout, Master, and Page.
```
@param sourceChart The chart in a spreadsheet to be inserted in the page.
@return The inserted image of the chart in the page.*/insertSheetsChartAsImage(sourceChart:SpreadsheetApp.EmbeddedChart):SlidesApp.Image;
/**Inserts a Google Sheets chart as an [`Image`](https://developers.google.com/apps-script/reference/slides/image.html) on the page with the provided position and
size.

In order to maintain the chart image's aspect ratio, the image is scaled and centered with
respect to the provided size.

The inserted image of the chart is not linked with the source Google Sheets chart.

```
var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
var chart = sheet.getCharts()[0];
// Insert the spreadsheet chart in the first slide.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var position = {left: 0, top: 0};
var size = {width: 200, height: 200};

// Also available for Layout, Master, and Page.
slide.insertSheetsChartAsImage(
    chart,
    position.left,
    position.right,
    size.width,
    size.height);
```
@param sourceChart The chart in a spreadsheet to be inserted in the page.
@param left The horizontal position of the chart in points, measured from the upper left corner
    of the page.
@param top The vertical position of the chart in points, measured from the upper left corner of
    the page.
@param width The width of the chart in points.
@param height The height of the chart in points.
@return The inserted image of the chart in the page.*/insertSheetsChartAsImage(sourceChart:SpreadsheetApp.EmbeddedChart,left:number,top:number,width:number,height:number):SlidesApp.Image;
/**Inserts a table on the page.

The table is centered on the page with default size and evenly distributed rows and columns.
@param numRows The number of rows in the table.
@param numColumns The number of columns in the table.
@return The inserted table.*/insertTable(numRows:Integer,numColumns:Integer):SlidesApp.Table;
/**Inserts a table on the page with the provided position and size.

Rows and columns are evenly distributed in the created table.
@param numRows The number of rows in the table.
@param numColumns The number of columns in the table.
@param left The horizontal position of the table, measured from the upper left corner of the
    page.
@param top The vertical position of the table, measured from the upper left corner of the page.
@param width The width of the table.
@param height The minimum height of the table. The actual height of the rendered table depends
    on factors such as text font size.
@return The inserted table.*/insertTable(numRows:Integer,numColumns:Integer,left:number,top:number,width:number,height:number):SlidesApp.Table;
/**Inserts a copy of the provided [`Table`](https://developers.google.com/apps-script/reference/slides/table.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a table between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var table = otherPresentationSlide.getTables[0];
currentPresentationSlide.insertTable(table); // Also available for Layout, Master, and Page.
```
@param table The table to be copied and inserted.
@return The inserted table.*/insertTable(table:SlidesApp.Table):SlidesApp.Table;
/**Inserts a text box [`Shape`](https://developers.google.com/apps-script/reference/slides/shape.html) containing the provided string on the page.

The text box shape is inserted with a default size at the top left corner of the page.

```
// Insert text box with "Hello" on the first slide of presentation.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
slide.insertTextBox('Hello'); // Also available for Layout, Master, and Page.
```
@param text The string the text box shape should contain.
@return The inserted text box shape.*/insertTextBox(text:string):SlidesApp.Shape;
/**Inserts a text box [`Shape`](https://developers.google.com/apps-script/reference/slides/shape.html) containing the provided string on the page.

```
// Insert text box with "Hello" on the first slide of presentation. This text box is a square
// with a length of 10 points on each side.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
slide.insertTextBox('Hello', 0, 0, 10, 10); // Also available for Layout, Master, and Page.
```
@param text The string the text box shape should contain.
@param left The horizontal position of the text box shape, measured from the upper left corner
    of the page.
@param top The vertical position of the text box shape, measured from the upper left corner of
    the page.
@param width The width of the text box shape.
@param height The height of the text box shape.
@return The inserted text box shape.*/insertTextBox(text:string,left:number,top:number,width:number,height:number):SlidesApp.Shape;
/**Inserts a copy of the provided [`Video`](https://developers.google.com/apps-script/reference/slides/video.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a video between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var video = otherPresentationSlide.getVideos[0];
currentPresentationSlide.insertVideo(video); // Also available for Layout, Master, and Page.
```
@param video The video to be copied and inserted.
@return The inserted video.*/insertVideo(video:SlidesApp.Video):SlidesApp.Video;
/**Inserts a video at the top left corner of the page with a default size.

Only YouTube videos are currently supported.
@param videoUrl The URL of the video to insert.
@return The inserted video.*/insertVideo(videoUrl:string):SlidesApp.Video;
/**Inserts a video on the page with the provided position and size.

Only YouTube videos are currently supported.
@param videoUrl The URL of the video to insert.
@param left The horizontal position of the video in points, measured from the upper left corner
    of the page.
@param top The vertical position of the video in points, measured from the upper left corner of
    the page.
@param width The width of the video in points.
@param height The height of the video in points.
@return The inserted video.*/insertVideo(videoUrl:string,left:number,top:number,width:number,height:number):SlidesApp.Video;
/**Inserts a copy of the provided [`WordArt`](https://developers.google.com/apps-script/reference/slides/word-art.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a word art between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var wordArt = otherPresentationSlide.getWordArts[0];

// Also available for Layout, Master, and Page.
currentPresentationSlide.insertWordArt(wordArt);
```
@param wordArt The group to be copied and inserted.
@return The inserted word art.*/insertWordArt(wordArt:SlidesApp.WordArt):SlidesApp.WordArt;
/**Removes the page.*/remove():void;
/**Replaces all instances of text matching find text with replace text. The search is case
insensitive.
@param findText The text to find.
@param replaceText The text to replace the matched text.
@return the number of occurrences changed*/replaceAllText(findText:string,replaceText:string):Integer;
/**Replaces all instances of text matching find text with replace text.
@param findText The text to find.
@param replaceText The text to replace the matched text.
@param matchCase If `true`, the search is case sensitive; if `false`, the search is
    case insensitive.
@return the number of occurrences changed*/replaceAllText(findText:string,replaceText:string,matchCase:boolean):Integer;
/**Selects the [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) in the active presentation as the [`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()) and removes any previous selection.

A script can only access the selection of the user who is running the script, and only if
the script is [bound](/apps-script/scripts_containers) to the presentation.

```
// Select the first slide as the current page selection and replace any previous selection.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
slide.selectAsCurrentPage(); // Also available for Layout, Master, and Page.
```*/selectAsCurrentPage():void;}interface ListStyle{
/**Applies the specified [`ListPreset`](https://developers.google.com/apps-script/reference/slides/list-preset.html) to all of the paragraphs that overlap with the text.

The nesting level of each paragraph is determined by counting leading tabs in front of each
paragraph. To avoid excess space between the glyphs and the corresponding paragraph, these
leading tabs are removed by this method.

If the paragraph immediately before paragraphs being updated is in a [`List`](https://developers.google.com/apps-script/reference/slides/list.html) with a
matching list preset and the paragraphs being updated are not already in a different list, the
paragraphs being updated are added to that preceding list.*/applyListPreset(listPreset:SlidesApp.ListPreset):SlidesApp.ListStyle;
/**Returns the rendered glyph for the text. Returns `null` if the text spans more than one
paragraph or the text is not in a list.*/getGlyph():string;
/**Returns the [`List`](https://developers.google.com/apps-script/reference/slides/list.html) the text is in, or `null` if none of the text is in a list, or
part of the text is in a list, or the text is in multiple lists. Call [`isInList()`](https://developers.google.com/apps-script/reference/slides/list-style.html#isInList()) to
determine whether the text is in a list.*/getList():SlidesApp.List;
/**Returns the 0-based nesting level of the text. Returns `null` if the text is not in a
list or there are mixed values.*/getNestingLevel():Integer;
/**Returns `true` if the text is in exactly one list, `false` if none of the text is
in a list, and `null` if only some of the text is in a list or if the text is in multiple
lists.*/isInList():boolean;
/**Removes the paragraphs that overlap with the text from any lists.

The nesting level of each paragraph is visually preserved by adding indent to the start of
the corresponding paragraph.*/removeFromList():SlidesApp.ListStyle;}interface ListPreset{}interface _ListPreset{
/**A list with a `ARROW3D`, `CIRCLE` and `SQUARE` glyphs for the first 3 list nesting levels.*/ARROW3D_CIRCLE_SQUARE:ListPreset;
/**A list with a `ARROW`, `DIAMOND` and `DISC` glyphs for the first 3 list nesting levels.*/ARROW_DIAMOND_DISC:ListPreset;
/**A list with `CHECKBOX` glyphs for all list nesting levels.*/CHECKBOX:ListPreset;
/**A list with a `DIAMONDX`, `ARROW3D` and `SQUARE` glyphs for the first 3 list nesting levels.*/DIAMONDX_ARROW3D_SQUARE:ListPreset;
/**A list with a `DIAMONDX`, `HOLLOWDIAMOND` and `SQUARE` glyphs for the first 3 list nesting
levels.*/DIAMONDX_HOLLOWDIAMOND_SQUARE:ListPreset;
/**A list with a `DIAMOND`, `CIRCLE` and `SQUARE` glyphs for the first 3 list nesting levels.*/DIAMOND_CIRCLE_SQUARE:ListPreset;
/**A list with `DIGIT`, `ALPHA` and `ROMAN` glyphs for the first 3 list nesting levels, followed
by periods.*/DIGIT_ALPHA_ROMAN:ListPreset;
/**A list with `DIGIT`, `ALPHA` and `ROMAN` glyphs for the first 3 list nesting levels, followed
by parenthesis.*/DIGIT_ALPHA_ROMAN_PARENS:ListPreset;
/**A list with `DIGIT` glyphs separated by periods, where each nesting level uses the previous
nesting level's glyph as a prefix. For example: '1.', '1.1.', '2.', '2.2.'.*/DIGIT_NESTED:ListPreset;
/**A list with a `DISC`, `CIRCLE` and `SQUARE` glyphs for the first 3 list nesting levels.*/DISC_CIRCLE_SQUARE:ListPreset;
/**A list with a `LEFTTRIANGLE`, `DIAMOND` and `DISC` glyphs for the first 3 list nesting levels.*/LEFTTRIANGLE_DIAMOND_DISC:ListPreset;
/**A list with a `STAR`, `CIRCLE` and `SQUARE` glyphs for the first 3 list nesting levels.*/STAR_CIRCLE_SQUARE:ListPreset;
/**A list with `UPPERALPHA`, `ALPHA` and `ROMAN` glyphs for the first 3 list nesting levels,
followed by periods.*/UPPERALPHA_ALPHA_ROMAN:ListPreset;
/**A list with `UPPERROMAN`, `UPPERALPHA` and `DIGIT` glyphs for the first 3 list nesting levels,
followed by periods.*/UPPERROMAN_UPPERALPHA_DIGIT:ListPreset;
/**A list with `ZERODIGIT`, `ALPHA` and `ROMAN` glyphs for the first 3 list nesting levels,
followed by periods.*/ZERODIGIT_ALPHA_ROMAN:ListPreset;}interface List{
/**Returns the ID of the list.*/getListId():string;
/**Returns all the [`Paragraphs`](https://developers.google.com/apps-script/reference/slides/paragraph.html) in the list.*/getListParagraphs():SlidesApp.Paragraph[];}interface LinkType{}interface _LinkType{
/**A link to a specific slide in this presentation, addressed by its ID.*/SLIDE_ID:LinkType;
/**A link to a specific slide in this presentation, addressed by its zero-based index.*/SLIDE_INDEX:LinkType;
/**A link to a specific slide in this presentation, addressed by its position.*/SLIDE_POSITION:LinkType;
/**A link type that is not supported.*/UNSUPPORTED:LinkType;
/**A link to an external web page.*/URL:LinkType;}interface Link{
/**Returns the [`LinkType`](https://developers.google.com/apps-script/reference/slides/link-type.html).

```
var link = shape.getLink();
if (link != null) {
  Logger.log('Shape has a link of type: ' + link.getLinkType());
}
```*/getLinkType():SlidesApp.LinkType;
/**Returns the linked [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html) for non-URL links types, if it exists. Returns `null` if
the slide doesn't exist in the presentation, or if the [`LinkType`](https://developers.google.com/apps-script/reference/slides/link-type.html) is [`LinkType.URL`](https://developers.google.com/apps-script/reference/slides/link-type.html#URL).

```
var link = shape.getLink();
if (link != null && link.getLinkType() != SlidesApp.LinkType.URL) {
  Logger.log('Shape has link to slide: ' + link.getLinkedSlide());
}
```*/getLinkedSlide():SlidesApp.Slide;
/**Returns the ID of the linked [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html) or `null` if the [`LinkType`](https://developers.google.com/apps-script/reference/slides/link-type.html) is not
[`LinkType.SLIDE_ID`](https://developers.google.com/apps-script/reference/slides/link-type.html#SLIDE_ID).

Note that the slide with the returned ID might not exist.

```
var link = shape.getLink();
if (link != null && link.getLinkType() == SlidesApp.LinkType.SLIDE_ID) {
  Logger.log('Shape has link to slide with ID: ' + link.getSlideId());
}
```*/getSlideId():string;
/**Returns the zero-based index of the linked [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html) or `null` if the [`LinkType`](https://developers.google.com/apps-script/reference/slides/link-type.html) is not [`LinkType.SLIDE_INDEX`](https://developers.google.com/apps-script/reference/slides/link-type.html#SLIDE_INDEX).

Note that the slide at the returned index might not exist.

```
var link = shape.getLink();
if (link != null && link.getLinkType() == SlidesApp.LinkType.SLIDE_INDEX) {
  Logger.log('Shape has link to slide with index: ' + link.getSlideIndex());
}
```*/getSlideIndex():Integer;
/**Returns the [`SlidePosition`](https://developers.google.com/apps-script/reference/slides/slide-position.html) of the linked [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html) or `null` if the [`LinkType`](https://developers.google.com/apps-script/reference/slides/link-type.html) is not [`LinkType.SLIDE_POSITION`](https://developers.google.com/apps-script/reference/slides/link-type.html#SLIDE_POSITION).

Note that the slide with the returned relative position might not exist.

```
var link = shape.getLink();
if (link != null && link.getLinkType() == SlidesApp.LinkType.SLIDE_POSITION) {
  Logger.log('Shape has link to slide with relative position: ' + link.getSlidePosition());
}
```*/getSlidePosition():SlidesApp.SlidePosition;
/**Returns the URL to the external web page or `null` if the [`LinkType`](https://developers.google.com/apps-script/reference/slides/link-type.html) is not [`LinkType.URL`](https://developers.google.com/apps-script/reference/slides/link-type.html#URL).

```
var link = shape.getLink();
if (link != null && link.getLinkType() == SlidesApp.LinkType.URL) {
  Logger.log('Shape has link to URL: ' + link.getUrl());
}
```*/getUrl():string;}interface LineType{}interface _LineType{
/**Bent connector 2 form. Corresponds to ECMA-376 ST_ShapeType 'bentConnector2'.*/BENT_CONNECTOR_2:LineType;
/**Bent connector 3 form. Corresponds to ECMA-376 ST_ShapeType 'bentConnector3'.*/BENT_CONNECTOR_3:LineType;
/**Bent connector 4 form. Corresponds to ECMA-376 ST_ShapeType 'bentConnector4'.*/BENT_CONNECTOR_4:LineType;
/**Bent connector 5 form. Corresponds to ECMA-376 ST_ShapeType 'bentConnector5'.*/BENT_CONNECTOR_5:LineType;
/**Curved connector 2 form. Corresponds to ECMA-376 ST_ShapeType 'curvedConnector2'.*/CURVED_CONNECTOR_2:LineType;
/**Curved connector 3 form. Corresponds to ECMA-376 ST_ShapeType 'curvedConnector3'.*/CURVED_CONNECTOR_3:LineType;
/**Curved connector 4 form. Corresponds to ECMA-376 ST_ShapeType 'curvedConnector4'.*/CURVED_CONNECTOR_4:LineType;
/**Curved connector 5 form. Corresponds to ECMA-376 ST_ShapeType 'curvedConnector5'.*/CURVED_CONNECTOR_5:LineType;
/**Straight connector 1 form. Corresponds to ECMA-376 ST_ShapeType 'straightConnector1'.*/STRAIGHT_CONNECTOR_1:LineType;
/**Straight line. Corresponds to ECMA-376 ST_ShapeType 'line'. This line type is not a connector.*/STRAIGHT_LINE:LineType;
/**A line type that is not supported.*/UNSUPPORTED:LineType;}interface LineFillType{}interface _LineFillType{
/**No fill, so the line or outline is transparent.*/NONE:LineFillType;
/**A solid color fill.*/SOLID:LineFillType;
/**A line fill type that is not supported.*/UNSUPPORTED:LineFillType;}interface LineFill{
/**Gets the type of the line fill.*/getFillType():SlidesApp.LineFillType;
/**Gets the solid fill of the line, or `null` if the fill type is not [`LineFillType.SOLID`](https://developers.google.com/apps-script/reference/slides/line-fill-type.html#SOLID).*/getSolidFill():SlidesApp.SolidFill;
/**Sets the solid fill to the given RGB values.*/setSolidFill(red:Integer,green:Integer,blue:Integer):void;
/**Sets the solid fill to the given alpha and RGB values.*/setSolidFill(red:Integer,green:Integer,blue:Integer,alpha:number):void;
/**Sets the solid fill to the given [`Color`](https://developers.google.com/apps-script/reference/slides/color.html).*/setSolidFill(color:SlidesApp.Color):void;
/**Sets the solid fill to the given alpha and [`Color`](https://developers.google.com/apps-script/reference/slides/color.html).*/setSolidFill(color:SlidesApp.Color,alpha:number):void;
/**Sets the solid fill to the given [`ThemeColorType`](https://developers.google.com/apps-script/reference/slides/theme-color-type.html).*/setSolidFill(color:SlidesApp.ThemeColorType):void;
/**Sets the solid fill to the given alpha and [`ThemeColorType`](https://developers.google.com/apps-script/reference/slides/theme-color-type.html).*/setSolidFill(color:SlidesApp.ThemeColorType,alpha:number):void;
/**Sets the solid fill to the given hex color string.

The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
'#FFC0CB'.*/setSolidFill(hexString:string):void;
/**Sets the solid fill to the given alpha and hex color string.

The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
'#FFC0CB'.*/setSolidFill(hexString:string,alpha:number):void;}interface LineCategory{}interface _LineCategory{
/**Bent connectors, including bent connector 2 to 5.*/BENT:LineCategory;
/**Curved connectors, including curved connector 2 to 5.*/CURVED:LineCategory;
/**Straight connectors, including straight connector 1.*/STRAIGHT:LineCategory;
/**A line category that is not supported.*/UNSUPPORTED:LineCategory;}interface Line{
/**Aligns the element to the specified alignment position on the page.
@param alignmentPosition The position to align this page element to on the page.
@return This page element, for chaining.*/alignOnPage(alignmentPosition:SlidesApp.AlignmentPosition):SlidesApp.Line;
/**Brings the page element forward on the page by one element.

The page element must not be in a group.
@return This page element, for chaining.*/bringForward():SlidesApp.Line;
/**Brings the page element to the front of the page.

The page element must not be in a group.
@return This page element, for chaining.*/bringToFront():SlidesApp.Line;
/**Duplicates the page element.

The duplicate page element is placed on the same page at the same position as the original.
@return The new duplicate of this page element.*/duplicate():SlidesApp.PageElement;
/**Returns the list of `ConnectionSite`s on the page element, or an empty list if the page
element does not have any connection sites.
@return The connection sites list, which may be empty if this element has no connection sites.*/getConnectionSites():SlidesApp.ConnectionSite[];
/**Gets the [`DashStyle`](https://developers.google.com/apps-script/reference/slides/dash-style.html) of the line.
@return The style of the dashing used with this line.*/getDashStyle():SlidesApp.DashStyle;
/**Returns the page element's alt text description. The description is combined with the title to
display and read alt text.
@return The page element's alt text description.*/getDescription():string;
/**Returns the end point of the line, measured from the upper-left corner of the page.
@return The ending point of the line.*/getEnd():SlidesApp.Point;
/**Gets the [`ArrowStyle`](https://developers.google.com/apps-script/reference/slides/arrow-style.html) of the arrow at the end of the line.
@return The style of the arrow at the end of this line.*/getEndArrow():SlidesApp.ArrowStyle;
/**Returns the connection at the end of the line, or `null` if there is no connection.
@return The connection at the end of the line.*/getEndConnection():SlidesApp.ConnectionSite;
/**Gets the element's height in points, which is the height of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@return The page element's inherent height in points, or `null` if the page element does
    not have a height.*/getHeight():number;
/**Returns the element's inherent height in points.

The page element's transform is relative to its inherent size. Use the inherent size in
conjunction with the element's transform to determine the element's final visual appearance.
@return The page element's inherent height in points, or `null` if the page element does
    not have a height.*/getInherentHeight():number;
/**Returns the element's inherent width in points.

The page element's transform is relative to its inherent size. Use the inherent size in
conjunction with the element's transform to determine the element's final visual appearance.
@return The page element's inherent width in points, or `null` if the page element does
    not have a width.*/getInherentWidth():number;
/**Returns the element's horizontal position in points, measured from the upper-left corner of the
page when the element has no rotation.
@return This element's horizontal position in points, from the upper-left corner of the page.*/getLeft():number;
/**Gets the [`LineCategory`](https://developers.google.com/apps-script/reference/slides/line-category.html) of the line.
@return The line category.*/getLineCategory():SlidesApp.LineCategory;
/**Gets the [`LineFill`](https://developers.google.com/apps-script/reference/slides/line-fill.html) of the line.
@return The fill setting of this line.*/getLineFill():SlidesApp.LineFill;
/**Gets the [`LineType`](https://developers.google.com/apps-script/reference/slides/line-type.html) of the line.
@return The type of this line.*/getLineType():SlidesApp.LineType;
/**Returns the [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) or `null` if there is no link.

```
var link = shape.getLink();
if (link != null) {
  Logger.log('Shape has a link of type: ' + link.getLinkType());
}
```*/getLink():SlidesApp.Link;
/**Returns the unique ID for this object. Object IDs used by pages and page elements share the
same namespace.
@return The unique ID for this object.*/getObjectId():string;
/**Returns the page element's type, represented as a [`PageElementType`](https://developers.google.com/apps-script/reference/slides/page-element-type.html) enum.
@return The page element's type.*/getPageElementType():SlidesApp.PageElementType;
/**Returns the group this page element belongs to, or `null` if the element is not in a
group.
@return The group this page element belongs to, or `null`.*/getParentGroup():SlidesApp.Group;
/**Returns the page this page element is on.
@return The page this element resides on.*/getParentPage():SlidesApp.Page;
/**Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
means no rotation.
@return The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).*/getRotation():number;
/**Returns the start point of the line, measured from the upper-left corner of the page.
@return The starting point of the line.*/getStart():SlidesApp.Point;
/**Gets the [`ArrowStyle`](https://developers.google.com/apps-script/reference/slides/arrow-style.html) of the arrow at the beginning of the line.
@return The style of the arrow at the beginning of this line.*/getStartArrow():SlidesApp.ArrowStyle;
/**Returns the connection at the beginning of the line, or `null` if there is no connection.
@return The connection at the beginning of the line.*/getStartConnection():SlidesApp.ConnectionSite;
/**Returns the page element's alt text title. The title is combined with the description to
display and read alt text.
@return The page element's alt text title.*/getTitle():string;
/**Gets the element's vertical position in points, measured from the upper-left corner of the page
when the element has no rotation.
@return This element's vertical position in points, from the upper-left corner of the page.*/getTop():number;
/**Returns the page element's transform.

The visual appearance of the page element is determined by its absolute transform. To
compute the absolute transform, preconcatenate a page element's transform with the transforms
of all of its parent groups. If the page element is not in a group, its absolute transform is
the same as the value in this field.
@return The page element's transform.*/getTransform():SlidesApp.AffineTransform;
/**Returns the thickness of the line in points.
@return The thickness of the line in points.*/getWeight():number;
/**Returns the element's width in points, which is the width of the element's bounding box when
the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@return The page element's inherent width in points, or `null` if the page element does
    not have a width.*/getWidth():number;
/**Returns `true` if the line is a connector, or `false` if not.

Connector is a type of line that is used to connect connections sites on applicable page
elements. Each end of the connector can be connected to at most one connection site.
@return `True` if the line is a connector, or `false` if not.*/isConnector():boolean;
/**Preconcatenates the provided transform to the existing transform of the page element.

```
newTransform = argument * existingTransform
```

For example, to move a page elements 36 points to the left:

```
element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
    .setTranslateX(-36.0)
    .build());
```

You can also replace the page element's transform with [`setTransform(transform)`](https://developers.google.com/apps-script/reference/slides/line.html#setTransform(AffineTransform)).
@param transform The transform to preconcatenate onto this page element's transform.
@return This page element, for chaining.*/preconcatenateTransform(transform:SlidesApp.AffineTransform):SlidesApp.Line;
/**Removes the page element.

If after a remove operation, a `Group` contains only one or no page elements, the
group itself is also removed.

If a placeholder `PageElement` is removed on a master or layout, any empty inheriting
placeholders are also removed.*/remove():void;
/**Removes a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html).

```
shape.removeLink();
```*/removeLink():void;
/**Reroutes the start and end of the line to the closest two connection sites on the connected
page elements. The start and end of the line must be connected to different page elements.
@return The line.*/reroute():SlidesApp.Line;
/**Scales the element's height by the specified ratio. The element's height is the height of its
bounding box when the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param ratio The ratio to scale this page element's height by.
@return This page element, for chaining.*/scaleHeight(ratio:number):SlidesApp.Line;
/**Scales the element's width by the specified ratio. The element's width is the width of its
bounding box when the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param ratio The ratio to scale this page element's width by.
@return This page element, for chaining.*/scaleWidth(ratio:number):SlidesApp.Line;
/**Selects only the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) in the active presentation and removes any previous
selection. This is the same as calling [`select(replace)`](https://developers.google.com/apps-script/reference/slides/line.html#select(Boolean)) with `true`.

A script can only access the selection of the user who is running the script, and only if
the script is [bound](/apps-script/scripts_containers) to the presentation.

This sets the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) as the [`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var pageElement = slide.getPageElements()[0];
// Only select this page element and replace any previous selection.
pageElement.select();
```*/select():void;
/**Selects the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) in the active presentation.

A script can only access the selection of the user who is running the script, and only if
the script is [bound](/apps-script/scripts_containers) to the presentation.

Pass `true` to this method to select only the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) and remove any
previous selection. This also sets the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) as the
[`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).

Pass `false` to select multiple [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) objects. The [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html)
objects must be in the same [`Page`](https://developers.google.com/apps-script/reference/slides/page.html).

The following conditions must be met while selecting a page element using a `false`
parameter:

  1. The parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) object must be the [`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).
  1. There should not be multiple [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) objects selected.

To make sure that’s the case the preferred approach is to select the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html)
first using [`Page.selectAsCurrentPage()`](https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()) and then select the page elements in that page.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
// First select the slide page, as the current page selection.
slide.selectAsCurrentPage();
// Then select all the page elements in the selected slide page.
var pageElements = slide.getPageElements();
for (var i = 0; i < pageElements.length; i++) {
  pageElements[i].select(false);
}
```
@param replace If `true`, the selection replaces any previous selection; otherwise the
    selection is added to any previous selection.*/select(replace:boolean):void;
/**Sends the page element backward on the page by one element.

The page element must not be in a group.
@return This page element, for chaining.*/sendBackward():SlidesApp.Line;
/**Sends the page element to the back of the page.

The page element must not be in a group.
@return This page element, for chaining.*/sendToBack():SlidesApp.Line;
/**Sets the [`DashStyle`](https://developers.google.com/apps-script/reference/slides/dash-style.html) of the line.
@param style The style of the dashing to set for this line.
@return This line, for chaining.*/setDashStyle(style:SlidesApp.DashStyle):SlidesApp.Line;
/**Sets the page element's alt text description.

The method is not supported for [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) elements.

```
// Set the first page element's alt text description to "new alt text description".
var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
pageElement.setDescription('new alt text description');
Logger.log(pageElement.getDescription());
```
@param description The string to set the alt text description to.
@return This page element.*/setDescription(description:string):SlidesApp.Line;
/**Sets the position of the end point of the line.

The line path may be adjusted after the position changes.
@param left The horizontal position of the end point of the line, measured in points from the
    upper left corner of the page.
@param top The vertical position of the end point of the line, measured in points from the
    upper left corner of the page.
@return This line, for chaining.*/setEnd(left:number,top:number):SlidesApp.Line;
/**Sets the position of the end point of the line.

The line path may be adjusted after the position changes.
@param point The end point of the line, whose position is measured from the upper left corner
    of the page.
@return This line, for chaining.*/setEnd(point:SlidesApp.Point):SlidesApp.Line;
/**Sets the [`ArrowStyle`](https://developers.google.com/apps-script/reference/slides/arrow-style.html) of the arrow at the end of the line.
@param style The style to set.
@return This line, for chaining.*/setEndArrow(style:SlidesApp.ArrowStyle):SlidesApp.Line;
/**Sets the connection at the end of the line. It moves the end of the line to the specified
connection site while keeping the other end intact.
@param connectionSite The connection site the end connection is updated to, or `null` if
    removing the end connection.
@return The line.*/setEndConnection(connectionSite:SlidesApp.ConnectionSite):SlidesApp.Line;
/**Sets the element's height in points, which is the height of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param height The new height of this page element to set, in points.
@return This page element, for chaining.*/setHeight(height:number):SlidesApp.Line;
/**Sets the element's horizontal position in points, measured from the upper-left corner of the
page when the element has no rotation.
@param left The new horizontal position to set, in points.
@return This page element, for chaining.*/setLeft(left:number):SlidesApp.Line;
/**Sets the [`LineCategory`](https://developers.google.com/apps-script/reference/slides/line-category.html) of the line.

You can only set the category on [`connectors`](https://developers.google.com/apps-script/reference/slides/line.html#isConnector()). The connector may be
rerouted after changing its category.
@param lineCategory The line category to set.
@return The line.*/setLineCategory(lineCategory:SlidesApp.LineCategory):SlidesApp.Line;
/**Sets a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) to the given [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html) using the zero-based index of the slide.

```
// Set a link to the first slide of the presentation.
shape.setLinkSlide(0);
```
@param slideIndex The zero-based index to the slide.
@return the [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) that was set*/setLinkSlide(slideIndex:Integer):SlidesApp.Link;
/**Sets a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) to the given [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html), the link is set by the given slide ID.

```
// Set a link to the first slide of the presentation.
var slide = presentation.getSlides()[0];
shape.setLinkSlide(slide);
```
@param slide The [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html) to be linked.
@return the [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) that was set*/setLinkSlide(slide:SlidesApp.Slide):SlidesApp.Link;
/**Sets a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) to the given [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html) using the relative position of the slide.

```
// Set a link to the first slide of the presentation.
shape.setLinkSlide(SlideApp.SlidePosition.FIRST_SLIDE);
```
@param slidePosition The relative [`SlidePosition`](https://developers.google.com/apps-script/reference/slides/slide-position.html).
@return the [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) that was set*/setLinkSlide(slidePosition:SlidesApp.SlidePosition):SlidesApp.Link;
/**Sets a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) to the given non-empty URL string.

```
// Set a link to the URL.
shape.setLinkUrl("https://slides.google.com");
```
@param url The URL string.
@return the [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) that was set*/setLinkUrl(url:string):SlidesApp.Link;
/**Sets the element's clockwise rotation angle around its center in degrees.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param angle The new clockwise rotation angle to set, in degrees.
@return This page element, for chaining.*/setRotation(angle:number):SlidesApp.Line;
/**Sets the position of the start point of the line.

The line path may be adjusted after the position changes.
@param left The horizontal position of the start point of the line, measured in points from the
    upper left corner of the page.
@param top The vertical position of the start point of the line, measured in points from the
    upper left corner of the page.
@return This line, for chaining.*/setStart(left:number,top:number):SlidesApp.Line;
/**Sets the position of the start point of the line.

The line path may be adjusted after the position changes.
@param point The start point of the line, whose position is measured from the upper left corner
    of the page.
@return This line, for chaining.*/setStart(point:SlidesApp.Point):SlidesApp.Line;
/**Sets the [`ArrowStyle`](https://developers.google.com/apps-script/reference/slides/arrow-style.html) of the arrow at the beginning of the line.
@param style The new arrow style to set.
@return This line, for chaining.*/setStartArrow(style:SlidesApp.ArrowStyle):SlidesApp.Line;
/**Sets the connection at the beginning of the line. It moves the start of the line to the
specified connection site while keeping the other end intact.
@param connectionSite The connection site the start connection is updated to, or `null`
    if removing the start connection.
@return The line.*/setStartConnection(connectionSite:SlidesApp.ConnectionSite):SlidesApp.Line;
/**Sets the page element's alt text title.

The method is not supported for [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) elements.

```
// Set the first page element's alt text title to "new alt text title".
var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
pageElement.setTitle('new alt text title');
Logger.log(pageElement.getTitle());
```
@param title The string to set the alt text title to.
@return This page element.*/setTitle(title:string):SlidesApp.Line;
/**Sets the element's vertical position in points, measured from the upper-left corner of the page
when the element has no rotation.
@param top The new vertical position to set, in points.
@return This page element, for chaining.*/setTop(top:number):SlidesApp.Line;
/**Sets the transform of the page element with the provided transform.

Updating the transform of a group changes the absolute transform of the page elements in
that group, which can change their visual appearance.

Updating the transform of a page element that is in a group only changes the transform of
that page element; it doesn't affect the transforms of the group or other page elements in the
group.

For details on how transforms impact the visual appearance of page elements, see [`getTransform()`](https://developers.google.com/apps-script/reference/slides/line.html#getTransform()).
@param transform The transform that is set for this page element.
@return This element, for chaining.*/setTransform(transform:SlidesApp.AffineTransform):SlidesApp.Line;
/**Sets the thickness of the line in points.
@param points The new thickness of the line in points.
@return This line, for chaining.*/setWeight(points:number):SlidesApp.Line;
/**Sets the element's width in points, which is the width of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param width The new width of this page element to set, in points.
@return This page element, for chaining.*/setWidth(width:number):SlidesApp.Line;}interface Layout{
/**Gets the page's background.
@return The page's background.*/getBackground():SlidesApp.PageBackground;
/**Gets the [`ColorScheme`](https://developers.google.com/apps-script/reference/slides/color-scheme.html) associated with the page.
@return The page's color scheme.*/getColorScheme():SlidesApp.ColorScheme;
/**Returns the list of [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) objects on the page.*/getGroups():SlidesApp.Group[];
/**Returns the list of [`Image`](https://developers.google.com/apps-script/reference/slides/image.html) objects on the page.*/getImages():SlidesApp.Image[];
/**Gets the name of the layout.*/getLayoutName():string;
/**Returns the list of [`Line`](https://developers.google.com/apps-script/reference/slides/line.html) objects on the page.*/getLines():SlidesApp.Line[];
/**Gets the master that the layout is based on.*/getMaster():SlidesApp.Master;
/**Gets the unique ID for the page. Object IDs used by pages and page elements share the same
namespace.*/getObjectId():string;
/**Returns the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) on the page with the given ID, or `null` if none exists.
@param id The ID of the page element that is being retrieved.
@return The page element with the given ID.*/getPageElementById(id:string):SlidesApp.PageElement;
/**Returns the list of [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) objects rendered on the page.*/getPageElements():SlidesApp.PageElement[];
/**Gets the type of the page.
@return The page type.*/getPageType():SlidesApp.PageType;
/**Returns the placeholder [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) object for a specified [`PlaceholderType`](https://developers.google.com/apps-script/reference/slides/placeholder-type.html) or
`null` if a matching placeholder is not present.

If there are multiple placeholders with the same type, it returns the one with minimal
placeholder index. If there are multiple matching placeholders with the same index, it returns
the first placeholder from the page's page elements collection.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE);
```*/getPlaceholder(placeholderType:SlidesApp.PlaceholderType):SlidesApp.PageElement;
/**Returns the placeholder [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) object for a specified [`PlaceholderType`](https://developers.google.com/apps-script/reference/slides/placeholder-type.html) and
a placeholder index, or `null` if the placeholder is not present.

If there are multiple placeholders with the same type and index, it returns the first
placeholder from the page's page elements collection.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var placeholder = slide.getPlaceholder(SlidesApp.PlaceholderType.CENTERED_TITLE, 0);
```*/getPlaceholder(placeholderType:SlidesApp.PlaceholderType,placeholderIndex:Integer):SlidesApp.PageElement;
/**Returns the list of placeholder [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) objects in the page.

```
var master = SlidesApp.getActivePresentation().getMasters()[0];
Logger.log('Number of placeholders in the master: ' + master.getPlaceholders().length);
```*/getPlaceholders():SlidesApp.PageElement[];
/**Returns the list of [`Shape`](https://developers.google.com/apps-script/reference/slides/shape.html) objects on the page.*/getShapes():SlidesApp.Shape[];
/**Returns the list of [`SheetsChart`](https://developers.google.com/apps-script/reference/slides/sheets-chart.html) objects on the page.*/getSheetsCharts():SlidesApp.SheetsChart[];
/**Returns the list of [`Table`](https://developers.google.com/apps-script/reference/slides/table.html) objects on the page.*/getTables():SlidesApp.Table[];
/**Returns the list of [`Video`](https://developers.google.com/apps-script/reference/slides/video.html) objects on the page.*/getVideos():SlidesApp.Video[];
/**Returns the list of [`WordArt`](https://developers.google.com/apps-script/reference/slides/word-art.html) objects on the page.*/getWordArts():SlidesApp.WordArt[];
/**Groups all the specified page elements.

There should be at least two page elements on the same page that are not already in another
group. Some page elements, such as [`Videos`](https://developers.google.com/apps-script/reference/slides/video.html), [`Tables`](https://developers.google.com/apps-script/reference/slides/table.html) and [`placeholder Shapes`](https://developers.google.com/apps-script/reference/slides/shape.html#getPlaceholderType()) cannot be grouped.
@param pageElements The elements to group together.
@return The new group.*/group(pageElements:SlidesApp.PageElement[]):SlidesApp.Group;
/**Inserts a copy of the provided [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a group between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var group = otherPresentationSlide.getGroups()[0];
currentPresentationSlide.insertGroup(group); // Also available for Layout, Master, and Page.
```
@param group The group to be copied and inserted.
@return The inserted group.*/insertGroup(group:SlidesApp.Group):SlidesApp.Group;
/**Inserts an image at the top left corner of the page with a default size from the specified
image blob.

Inserting the image fetches it from the [`BlobSource`](https://developers.google.com/apps-script/reference/slides/../base/blob-source.html) once and a copy is stored for
display inside the presentation. Images must be less than 50MB in size, cannot exceed 25
megapixels, and must be in either in PNG, JPEG, or GIF format.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
// Get the Drive image file with the given ID.
var image = DriveApp.getFileById(fileId);
slide.insertImage(image);
```
@param blobSource The image data.
@return The inserted image.*/insertImage(blobSource:BlobSource):SlidesApp.Image;
/**Inserts an image on the page with the provided position and size from the specified image blob.

The image is fetched from the provided [`BlobSource`](https://developers.google.com/apps-script/reference/slides/../base/blob-source.html) once at insertion time and a copy
is stored for display inside the presentation. Images must be less than 50MB in size, cannot
exceed 25 megapixels, and must be in either in PNG, JPEG, or GIF format.

In order to maintain the image's aspect ratio, the image is scaled and centered with respect
to the provided size.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
// Get the Drive image file with the given ID.
var image = DriveApp.getFileById(fileId);
var position = {left: 0, top: 0};
var size = {width: 300, height: 100};
slide.insertImage(image, position.left, position.top, size.width, size.height);
```
@param blobSource The image data.
@param left The horizontal position of the image in points, measured from the upper left corner
    of the page.
@param top The vertical position of the image in points, measured from the upper left corner of
    the page.
@param width The width of the image in points.
@param height The height of the image in points.
@return The inserted image.*/insertImage(blobSource:BlobSource,left:number,top:number,width:number,height:number):SlidesApp.Image;
/**Inserts a copy of the provided [`Image`](https://developers.google.com/apps-script/reference/slides/image.html) on the page.

The inserted images's position on this page is determined from the source image's position
on its respective page.

If the provided image is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted image.

If the provided image is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the image from the source
presentation. If the copied placeholder image is empty, nothing is inserted in the destination
presentation.

```
// Copy an image between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var image = otherPresentationSlide.getImages[0];
currentPresentationSlide.insertImage(image);
```
@param image The image to be copied and inserted.
@return The inserted image.*/insertImage(image:SlidesApp.Image):SlidesApp.Image;
/**Inserts an image at the top left corner of the page with a default size from the provided URL.

Inserting the image fetches it from the URL once and a copy is stored for display inside the
presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
in either in PNG, JPEG, or GIF format.

The provided URL must be publicly accessible and no larger than 2kB. The URL itself is saved
with the image and exposed via [`Image.getSourceUrl()`](https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()).
@param imageUrl The image URL.
@return The inserted image.*/insertImage(imageUrl:string):SlidesApp.Image;
/**Inserts an image on the page with the provided position and size from the provided URL.

Inserting the image fetches it from the URL once and a copy is stored for display inside the
presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
in either in PNG, JPEG, or GIF format.

The provided URL must be publicly accessible and no larger than 2kB. The URL itself is saved
with the image and exposed via [`Image.getSourceUrl()`](https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()).

In order to maintain the image's aspect ratio, the image is scaled and centered with respect
to the provided size.
@param imageUrl The image URL.
@param left The horizontal position of the image in points, measured from the upper left corner
    of the page.
@param top The vertical position of the image in points, measured from the upper left corner of
    the page.
@param width The width of the image in points.
@param height The height of the image in points.
@return The inserted image.*/insertImage(imageUrl:string,left:number,top:number,width:number,height:number):SlidesApp.Image;
/**Inserts a copy of the provided [`Line`](https://developers.google.com/apps-script/reference/slides/line.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a line between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var line = otherPresentationSlide.getLines[0];
currentPresentationSlide.insertLine(line);
```
@param line The line to be copied and inserted.
@return The inserted line.*/insertLine(line:SlidesApp.Line):SlidesApp.Line;
/**Inserts a line on the page.

```
// Insert a line in the first slide of the presentation.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var startPoint = {left: 10, top: 10};
var endPoint = {left: 40, top: 40};
slide.insertLine(
    SlidesApp.LineCategory.STRAIGHT,
    startPoint.left,
    startPoint.top,
    endPoint.left,
    endPoint.top);
```
@param lineCategory The category of the line to insert.
@param startLeft The horizontal position of the start point of the line, measured in points
    from the upper left corner of the page.
@param startTop The vertical position of the start point of the line, measured in points from
    the upper left corner of the page.
@param endLeft The horizontal position of the end point of the line, measured in points from
    the upper left corner of the page.
@param endTop The vertical position of the end point of the line, measured in points from the
    upper left corner of the page.
@return The inserted line.*/insertLine(lineCategory:SlidesApp.LineCategory,startLeft:number,startTop:number,endLeft:number,endTop:number):SlidesApp.Line;
/**Inserts a line on the page connecting two [`connection sites`](https://developers.google.com/apps-script/reference/slides/connection-site.html). The two
connection sites must be on this page.

```
// Insert a line in the first slide of the presentation connecting two shapes.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var shape1 = slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
var shape2 = slide.insertShape(SlidesApp.ShapeType.CLOUD);
slide.insertLine(
    SlidesApp.LineCategory.BENT,
    shape1.getConnectionSites()[0],
    shape2.getConnectionSites()[1]);
```
@param lineCategory The category of the line to insert.
@param startConnectionSite The connection site where the start of the line is to be connected.
@param endConnectionSite The connection site where the end of the line is to be connected.
@return The inserted line.*/insertLine(lineCategory:SlidesApp.LineCategory,startConnectionSite:SlidesApp.ConnectionSite,endConnectionSite:SlidesApp.ConnectionSite):SlidesApp.Line;
/**Inserts a copy of the provided [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a page element between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var pageElement = otherPresentationSlide.getPageElements()[0];

// Also available for Layout, Master, and Page.
currentPresentationSlide.insertPageElement(pageElement);
```
@param pageElement The page element to be copied and inserted.
@return The inserted page element.*/insertPageElement(pageElement:SlidesApp.PageElement):SlidesApp.PageElement;
/**Inserts a copy of the provided [`Shape`](https://developers.google.com/apps-script/reference/slides/shape.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a shape between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var shape = otherPresentationSlide.getShapes[0];
currentPresentationSlide.insertShape(shape); // Also available for Layout, Master, and Page.
```
@param shape The shape to be copied and inserted.
@return The inserted shape.*/insertShape(shape:SlidesApp.Shape):SlidesApp.Shape;
/**Inserts a shape on the page.

The shape is inserted with a default size at the top left corner of the page.

```
// Insert a shape in the first slide of the presentation.
var slide = SlidesApp.getActivePresentation().getSlides()[0];

// Also available for Layout, Master, and Page.
slide.insertShape(SlidesApp.ShapeType.RECTANGLE);
```
@param shapeType The type of shape to insert.
@return The inserted shape.*/insertShape(shapeType:SlidesApp.ShapeType):SlidesApp.Shape;
/**Inserts a shape on the page.
@param shapeType The type of shape to insert.
@param left The horizontal position of the shape, measured from the upper left corner of the
    page.
@param top The vertical position of the shape, measured from the upper left corner of the page.
@param width The width of the shape.
@param height The height of the shape.
@return The inserted shape.*/insertShape(shapeType:SlidesApp.ShapeType,left:number,top:number,width:number,height:number):SlidesApp.Shape;
/**Inserts a copy of the provided [`SheetsChart`](https://developers.google.com/apps-script/reference/slides/sheets-chart.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a sheets chart between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var sheetsChart = otherPresentationSlide.getSheetsCharts[0];

// Also available for Layout, Master, and Page.
currentPresentationSlide.insertSheetsChart(sheetsChart);
```
@param sheetsChart The sheets chart to be copied and inserted.
@return The inserted sheets chart.*/insertSheetsChart(sheetsChart:SlidesApp.SheetsChart):SlidesApp.SheetsChart;
/**Inserts a Google Sheets chart on the page.

The chart is inserted with a default size at the top left corner of the page.

The inserted chart is linked with the source Google Sheets chart which allows it to be
updated. Other collaborators can see the link to the source spreadsheet.

```
var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
var chart = sheet.getCharts()[0];
// Insert the spreadsheet chart in the first slide.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
slide.insertSheetsChart(chart);
```
@param sourceChart The chart in a spreadsheet to be inserted in the page.
@return The inserted chart in the page.*/insertSheetsChart(sourceChart:SpreadsheetApp.EmbeddedChart):SlidesApp.SheetsChart;
/**Inserts a Google Sheets chart on the page with the provided position and size.

In order to maintain the chart's aspect ratio, the chart is scaled and centered with respect
to the provided size.

The inserted chart is linked with the source Google Sheets chart which allows it to be
updated. Other collaborators can see the link to the source spreadsheet.

```
var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
var chart = sheet.getCharts()[0];
// Insert the spreadsheet chart in the first slide.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var position = {left: 0, top: 0};
var size = {width: 200, height: 200};

// Also available for Layout, Master, and Page.
slide.insertSheetsChart(
    chart,
    position.left,
    position.top,
    size.width,
    size.height);
```
@param sourceChart The chart in a spreadsheet to be inserted in the page.
@param left The horizontal position of the chart in points, measured from the upper left corner
    of the page.
@param top The vertical position of the chart in points, measured from the upper left corner of
    the page.
@param width The width of the chart in points.
@param height The height of the chart in points.
@return The inserted chart in the page.*/insertSheetsChart(sourceChart:SpreadsheetApp.EmbeddedChart,left:number,top:number,width:number,height:number):SlidesApp.SheetsChart;
/**Inserts a Google Sheets chart as an [`Image`](https://developers.google.com/apps-script/reference/slides/image.html) on the page.

The image of the chart is inserted with a default size at the top left corner of the page.

The inserted image of chart is not linked with the source Google Sheets chart.

```
var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
var chart = sheet.getCharts()[0];
// Insert the spreadsheet chart in the first slide.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
slide.insertSheetsChartAsImage(chart); // Also available for Layout, Master, and Page.
```
@param sourceChart The chart in a spreadsheet to be inserted in the page.
@return The inserted image of the chart in the page.*/insertSheetsChartAsImage(sourceChart:SpreadsheetApp.EmbeddedChart):SlidesApp.Image;
/**Inserts a Google Sheets chart as an [`Image`](https://developers.google.com/apps-script/reference/slides/image.html) on the page with the provided position and
size.

In order to maintain the chart image's aspect ratio, the image is scaled and centered with
respect to the provided size.

The inserted image of the chart is not linked with the source Google Sheets chart.

```
var sheet = SpreadsheetApp.openById('spreadsheetId').getSheets()[0];
var chart = sheet.getCharts()[0];
// Insert the spreadsheet chart in the first slide.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var position = {left: 0, top: 0};
var size = {width: 200, height: 200};

// Also available for Layout, Master, and Page.
slide.insertSheetsChartAsImage(
    chart,
    position.left,
    position.right,
    size.width,
    size.height);
```
@param sourceChart The chart in a spreadsheet to be inserted in the page.
@param left The horizontal position of the chart in points, measured from the upper left corner
    of the page.
@param top The vertical position of the chart in points, measured from the upper left corner of
    the page.
@param width The width of the chart in points.
@param height The height of the chart in points.
@return The inserted image of the chart in the page.*/insertSheetsChartAsImage(sourceChart:SpreadsheetApp.EmbeddedChart,left:number,top:number,width:number,height:number):SlidesApp.Image;
/**Inserts a table on the page.

The table is centered on the page with default size and evenly distributed rows and columns.
@param numRows The number of rows in the table.
@param numColumns The number of columns in the table.
@return The inserted table.*/insertTable(numRows:Integer,numColumns:Integer):SlidesApp.Table;
/**Inserts a table on the page with the provided position and size.

Rows and columns are evenly distributed in the created table.
@param numRows The number of rows in the table.
@param numColumns The number of columns in the table.
@param left The horizontal position of the table, measured from the upper left corner of the
    page.
@param top The vertical position of the table, measured from the upper left corner of the page.
@param width The width of the table.
@param height The minimum height of the table. The actual height of the rendered table depends
    on factors such as text font size.
@return The inserted table.*/insertTable(numRows:Integer,numColumns:Integer,left:number,top:number,width:number,height:number):SlidesApp.Table;
/**Inserts a copy of the provided [`Table`](https://developers.google.com/apps-script/reference/slides/table.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a table between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var table = otherPresentationSlide.getTables[0];
currentPresentationSlide.insertTable(table); // Also available for Layout, Master, and Page.
```
@param table The table to be copied and inserted.
@return The inserted table.*/insertTable(table:SlidesApp.Table):SlidesApp.Table;
/**Inserts a text box [`Shape`](https://developers.google.com/apps-script/reference/slides/shape.html) containing the provided string on the page.

The text box shape is inserted with a default size at the top left corner of the page.

```
// Insert text box with "Hello" on the first slide of presentation.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
slide.insertTextBox('Hello'); // Also available for Layout, Master, and Page.
```
@param text The string the text box shape should contain.
@return The inserted text box shape.*/insertTextBox(text:string):SlidesApp.Shape;
/**Inserts a text box [`Shape`](https://developers.google.com/apps-script/reference/slides/shape.html) containing the provided string on the page.

```
// Insert text box with "Hello" on the first slide of presentation. This text box is a square
// with a length of 10 points on each side.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
slide.insertTextBox('Hello', 0, 0, 10, 10); // Also available for Layout, Master, and Page.
```
@param text The string the text box shape should contain.
@param left The horizontal position of the text box shape, measured from the upper left corner
    of the page.
@param top The vertical position of the text box shape, measured from the upper left corner of
    the page.
@param width The width of the text box shape.
@param height The height of the text box shape.
@return The inserted text box shape.*/insertTextBox(text:string,left:number,top:number,width:number,height:number):SlidesApp.Shape;
/**Inserts a copy of the provided [`Video`](https://developers.google.com/apps-script/reference/slides/video.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a video between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var video = otherPresentationSlide.getVideos[0];
currentPresentationSlide.insertVideo(video); // Also available for Layout, Master, and Page.
```
@param video The video to be copied and inserted.
@return The inserted video.*/insertVideo(video:SlidesApp.Video):SlidesApp.Video;
/**Inserts a video at the top left corner of the page with a default size.

Only YouTube videos are currently supported.
@param videoUrl The URL of the video to insert.
@return The inserted video.*/insertVideo(videoUrl:string):SlidesApp.Video;
/**Inserts a video on the page with the provided position and size.

Only YouTube videos are currently supported.
@param videoUrl The URL of the video to insert.
@param left The horizontal position of the video in points, measured from the upper left corner
    of the page.
@param top The vertical position of the video in points, measured from the upper left corner of
    the page.
@param width The width of the video in points.
@param height The height of the video in points.
@return The inserted video.*/insertVideo(videoUrl:string,left:number,top:number,width:number,height:number):SlidesApp.Video;
/**Inserts a copy of the provided [`WordArt`](https://developers.google.com/apps-script/reference/slides/word-art.html) on the page.

The inserted element's position on this page is determined from the source element's
position on its respective page.

If the provided element is a placeholder being copied from within the current presentation,
properties that inherit from master or layout pages also inherit on the inserted element.

If the provided element is a placeholder being copied from a different presentation,
properties that inherit from master or layout pages are copied onto the element from the source
presentation.

```
// Copy a word art between presentations.
var otherPresentationSlide = SlidesApp.openById('presentationId').getSlides()[0];
var currentPresentationSlide = SlidesApp.getActivePresentation().getSlides()[0];
var wordArt = otherPresentationSlide.getWordArts[0];

// Also available for Layout, Master, and Page.
currentPresentationSlide.insertWordArt(wordArt);
```
@param wordArt The group to be copied and inserted.
@return The inserted word art.*/insertWordArt(wordArt:SlidesApp.WordArt):SlidesApp.WordArt;
/**Removes the page.*/remove():void;
/**Replaces all instances of text matching find text with replace text. The search is case
insensitive.
@param findText The text to find.
@param replaceText The text to replace the matched text.
@return the number of occurrences changed*/replaceAllText(findText:string,replaceText:string):Integer;
/**Replaces all instances of text matching find text with replace text.
@param findText The text to find.
@param replaceText The text to replace the matched text.
@param matchCase If `true`, the search is case sensitive; if `false`, the search is
    case insensitive.
@return the number of occurrences changed*/replaceAllText(findText:string,replaceText:string,matchCase:boolean):Integer;
/**Selects the [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) in the active presentation as the [`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()) and removes any previous selection.

A script can only access the selection of the user who is running the script, and only if
the script is [bound](/apps-script/scripts_containers) to the presentation.

```
// Select the first slide as the current page selection and replace any previous selection.
var slide = SlidesApp.getActivePresentation().getSlides()[0];
slide.selectAsCurrentPage(); // Also available for Layout, Master, and Page.
```*/selectAsCurrentPage():void;}interface Image{
/**Aligns the element to the specified alignment position on the page.
@param alignmentPosition The position to align this page element to on the page.
@return This page element, for chaining.*/alignOnPage(alignmentPosition:SlidesApp.AlignmentPosition):SlidesApp.Image;
/**Brings the page element forward on the page by one element.

The page element must not be in a group.
@return This page element, for chaining.*/bringForward():SlidesApp.Image;
/**Brings the page element to the front of the page.

The page element must not be in a group.
@return This page element, for chaining.*/bringToFront():SlidesApp.Image;
/**Duplicates the page element.

The duplicate page element is placed on the same page at the same position as the original.
@return The new duplicate of this page element.*/duplicate():SlidesApp.PageElement;
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
/**Return the data inside this image as a blob.
@return The image data as a blob.*/getBlob():Blob;
/**Returns the [`Border`](https://developers.google.com/apps-script/reference/slides/border.html) of the image.
@return The border of the image.*/getBorder():SlidesApp.Border;
/**Returns the list of `ConnectionSite`s on the page element, or an empty list if the page
element does not have any connection sites.
@return The connection sites list, which may be empty if this element has no connection sites.*/getConnectionSites():SlidesApp.ConnectionSite[];
/**Gets a URL to the image.

This URL is tagged with the account of the requester, so anyone with the URL effectively
accesses the image as the original requester. Access to the image may be lost if the
presentation's sharing settings change. The returned URL expires after a short period of time.*/getContentUrl():string;
/**Returns the page element's alt text description. The description is combined with the title to
display and read alt text.
@return The page element's alt text description.*/getDescription():string;
/**Gets the element's height in points, which is the height of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@return The page element's inherent height in points, or `null` if the page element does
    not have a height.*/getHeight():number;
/**Returns the element's inherent height in points.

The page element's transform is relative to its inherent size. Use the inherent size in
conjunction with the element's transform to determine the element's final visual appearance.
@return The page element's inherent height in points, or `null` if the page element does
    not have a height.*/getInherentHeight():number;
/**Returns the element's inherent width in points.

The page element's transform is relative to its inherent size. Use the inherent size in
conjunction with the element's transform to determine the element's final visual appearance.
@return The page element's inherent width in points, or `null` if the page element does
    not have a width.*/getInherentWidth():number;
/**Returns the element's horizontal position in points, measured from the upper-left corner of the
page when the element has no rotation.
@return This element's horizontal position in points, from the upper-left corner of the page.*/getLeft():number;
/**Returns the [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) or `null` if there is no link.

```
var link = shape.getLink();
if (link != null) {
  Logger.log('Shape has a link of type: ' + link.getLinkType());
}
```*/getLink():SlidesApp.Link;
/**Returns the unique ID for this object. Object IDs used by pages and page elements share the
same namespace.
@return The unique ID for this object.*/getObjectId():string;
/**Returns the page element's type, represented as a [`PageElementType`](https://developers.google.com/apps-script/reference/slides/page-element-type.html) enum.
@return The page element's type.*/getPageElementType():SlidesApp.PageElementType;
/**Returns the group this page element belongs to, or `null` if the element is not in a
group.
@return The group this page element belongs to, or `null`.*/getParentGroup():SlidesApp.Group;
/**Returns the page this page element is on.
@return The page this element resides on.*/getParentPage():SlidesApp.Page;
/**Returns the parent page element of the placeholder. Returns `null` if the image is not a
placeholder or has no parent.
@return The parent page element of this image placeholder, or `null` if this image is not
    a placeholder or doesn't have a parent.*/getParentPlaceholder():SlidesApp.PageElement;
/**Returns the index of the placeholder image. If two or more placeholder images on the same page
are the same type, they each have a unique index value. Returns `null` if the image isn't
a placeholder.
@return This image's placeholder index, or `null` if the image isn't a placeholder.*/getPlaceholderIndex():Integer;
/**Returns the placeholder type of the image, or `PlaceholderType.NONE` if the shape is not
a placeholder.
@return The placeholder type of this image.*/getPlaceholderType():SlidesApp.PlaceholderType;
/**Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
means no rotation.
@return The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).*/getRotation():number;
/**Gets the image's source URL, if available.

When an image is inserted by URL, returns the URL provided during image insertion.
@return The image URL or `null` if the image does not have a source URL.*/getSourceUrl():string;
/**Returns the page element's alt text title. The title is combined with the description to
display and read alt text.
@return The page element's alt text title.*/getTitle():string;
/**Gets the element's vertical position in points, measured from the upper-left corner of the page
when the element has no rotation.
@return This element's vertical position in points, from the upper-left corner of the page.*/getTop():number;
/**Returns the page element's transform.

The visual appearance of the page element is determined by its absolute transform. To
compute the absolute transform, preconcatenate a page element's transform with the transforms
of all of its parent groups. If the page element is not in a group, its absolute transform is
the same as the value in this field.
@return The page element's transform.*/getTransform():SlidesApp.AffineTransform;
/**Returns the element's width in points, which is the width of the element's bounding box when
the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@return The page element's inherent width in points, or `null` if the page element does
    not have a width.*/getWidth():number;
/**Preconcatenates the provided transform to the existing transform of the page element.

```
newTransform = argument * existingTransform
```

For example, to move a page elements 36 points to the left:

```
element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
    .setTranslateX(-36.0)
    .build());
```

You can also replace the page element's transform with [`setTransform(transform)`](https://developers.google.com/apps-script/reference/slides/image.html#setTransform(AffineTransform)).
@param transform The transform to preconcatenate onto this page element's transform.
@return This page element, for chaining.*/preconcatenateTransform(transform:SlidesApp.AffineTransform):SlidesApp.Image;
/**Removes the page element.

If after a remove operation, a `Group` contains only one or no page elements, the
group itself is also removed.

If a placeholder `PageElement` is removed on a master or layout, any empty inheriting
placeholders are also removed.*/remove():void;
/**Removes a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html).

```
shape.removeLink();
```*/removeLink():void;
/**Replaces this image with an image described by a [`BlobSource`](/apps-script/reference/base/blob-source) object.

Inserting the image fetches it from the [
`BlobSource`](/apps-script/reference/base/blob-source) once and a copy is stored for display inside the presentation.
Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in either in
PNG, JPEG, or GIF format.

In order to maintain the image's aspect ratio, the image is scaled and centered with respect
to the size of the existing image.

```
var image = SlidesApp.getActivePresentation().getSlides()[0].getImages()[0];
// Get the Drive image file with the given ID.
var driveImage = DriveApp.getFileById(fileId);
image.replace(driveImage);
```
@param blobSource The image data.
@return This `Image` after the replacement.*/replace(blobSource:BlobSource):SlidesApp.Image;
/**Replaces this image with an image described by a [`Image`](https://developers.google.com/apps-script/reference/slides/image.html) object, optionally cropping
the image to fit.

Inserting the image fetches it from the [
`BlobSource`](/apps-script/reference/base/blob-source) once and a copy is stored for display inside the presentation.
Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in either in
PNG, JPEG, or GIF format.

```
var image = SlidesApp.getActivePresentation().getSlides()[0].getImages()[0];
// Get the Drive image file with the given ID.
var driveImage = DriveApp.getFileById(fileId);
// Replace and crop the drive image.
image.replace(driveImage, true);
```
@param blobSource The image data.
@param crop If `true`, crops the image to fit the existing image's size. Otherwise, the
    image is scaled and centered.
@return This `Image` after the replacement.*/replace(blobSource:BlobSource,crop:boolean):SlidesApp.Image;
/**Replaces this image with another image downloaded from the provided URL.

Inserting the image fetches it from the URL once and a copy is stored for display inside the
presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
in either in PNG, JPEG, or GIF format.

The provided URL must be publicly accessible and no larger than 2kB. The URL itself is saved
with the image and exposed via [`getSourceUrl()`](https://developers.google.com/apps-script/reference/slides/image.html#getSourceUrl()).

In order to maintain the image's aspect ratio, the image is scaled and centered with respect
to the size of the existing image.
@param imageUrl The URL to download the image from.
@return This `Image` after the replacement.*/replace(imageUrl:string):SlidesApp.Image;
/**Replaces this image with another image downloaded from the provided URL, optionally cropping
the image to fit.

Inserting the image fetches it from the URL once and a copy is stored for display inside the
presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be
in either in PNG, JPEG, or GIF format.

The provided URL must be no larger than 2kB.
@param imageUrl The URL to download the image from.
@param crop If `true`, crops the image to fit the existing image's size. Otherwise, the
    image is scaled and centered.
@return This `Image` after the replacement.*/replace(imageUrl:string,crop:boolean):SlidesApp.Image;
/**Scales the element's height by the specified ratio. The element's height is the height of its
bounding box when the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param ratio The ratio to scale this page element's height by.
@return This page element, for chaining.*/scaleHeight(ratio:number):SlidesApp.Image;
/**Scales the element's width by the specified ratio. The element's width is the width of its
bounding box when the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param ratio The ratio to scale this page element's width by.
@return This page element, for chaining.*/scaleWidth(ratio:number):SlidesApp.Image;
/**Selects only the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) in the active presentation and removes any previous
selection. This is the same as calling [`select(replace)`](https://developers.google.com/apps-script/reference/slides/image.html#select(Boolean)) with `true`.

A script can only access the selection of the user who is running the script, and only if
the script is [bound](/apps-script/scripts_containers) to the presentation.

This sets the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) as the [`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var pageElement = slide.getPageElements()[0];
// Only select this page element and replace any previous selection.
pageElement.select();
```*/select():void;
/**Selects the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) in the active presentation.

A script can only access the selection of the user who is running the script, and only if
the script is [bound](/apps-script/scripts_containers) to the presentation.

Pass `true` to this method to select only the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) and remove any
previous selection. This also sets the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) as the
[`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).

Pass `false` to select multiple [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) objects. The [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html)
objects must be in the same [`Page`](https://developers.google.com/apps-script/reference/slides/page.html).

The following conditions must be met while selecting a page element using a `false`
parameter:

  1. The parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) object must be the [`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).
  1. There should not be multiple [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) objects selected.

To make sure that’s the case the preferred approach is to select the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html)
first using [`Page.selectAsCurrentPage()`](https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()) and then select the page elements in that page.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
// First select the slide page, as the current page selection.
slide.selectAsCurrentPage();
// Then select all the page elements in the selected slide page.
var pageElements = slide.getPageElements();
for (var i = 0; i < pageElements.length; i++) {
  pageElements[i].select(false);
}
```
@param replace If `true`, the selection replaces any previous selection; otherwise the
    selection is added to any previous selection.*/select(replace:boolean):void;
/**Sends the page element backward on the page by one element.

The page element must not be in a group.
@return This page element, for chaining.*/sendBackward():SlidesApp.Image;
/**Sends the page element to the back of the page.

The page element must not be in a group.
@return This page element, for chaining.*/sendToBack():SlidesApp.Image;
/**Sets the page element's alt text description.

The method is not supported for [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) elements.

```
// Set the first page element's alt text description to "new alt text description".
var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
pageElement.setDescription('new alt text description');
Logger.log(pageElement.getDescription());
```
@param description The string to set the alt text description to.
@return This page element.*/setDescription(description:string):SlidesApp.Image;
/**Sets the element's height in points, which is the height of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param height The new height of this page element to set, in points.
@return This page element, for chaining.*/setHeight(height:number):SlidesApp.Image;
/**Sets the element's horizontal position in points, measured from the upper-left corner of the
page when the element has no rotation.
@param left The new horizontal position to set, in points.
@return This page element, for chaining.*/setLeft(left:number):SlidesApp.Image;
/**Sets a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) to the given [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html) using the zero-based index of the slide.

```
// Set a link to the first slide of the presentation.
shape.setLinkSlide(0);
```
@param slideIndex The zero-based index to the slide.
@return the [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) that was set*/setLinkSlide(slideIndex:Integer):SlidesApp.Link;
/**Sets a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) to the given [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html), the link is set by the given slide ID.

```
// Set a link to the first slide of the presentation.
var slide = presentation.getSlides()[0];
shape.setLinkSlide(slide);
```
@param slide The [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html) to be linked.
@return the [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) that was set*/setLinkSlide(slide:SlidesApp.Slide):SlidesApp.Link;
/**Sets a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) to the given [`Slide`](https://developers.google.com/apps-script/reference/slides/slide.html) using the relative position of the slide.

```
// Set a link to the first slide of the presentation.
shape.setLinkSlide(SlideApp.SlidePosition.FIRST_SLIDE);
```
@param slidePosition The relative [`SlidePosition`](https://developers.google.com/apps-script/reference/slides/slide-position.html).
@return the [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) that was set*/setLinkSlide(slidePosition:SlidesApp.SlidePosition):SlidesApp.Link;
/**Sets a [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) to the given non-empty URL string.

```
// Set a link to the URL.
shape.setLinkUrl("https://slides.google.com");
```
@param url The URL string.
@return the [`Link`](https://developers.google.com/apps-script/reference/slides/link.html) that was set*/setLinkUrl(url:string):SlidesApp.Link;
/**Sets the element's clockwise rotation angle around its center in degrees.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param angle The new clockwise rotation angle to set, in degrees.
@return This page element, for chaining.*/setRotation(angle:number):SlidesApp.Image;
/**Sets the page element's alt text title.

The method is not supported for [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) elements.

```
// Set the first page element's alt text title to "new alt text title".
var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
pageElement.setTitle('new alt text title');
Logger.log(pageElement.getTitle());
```
@param title The string to set the alt text title to.
@return This page element.*/setTitle(title:string):SlidesApp.Image;
/**Sets the element's vertical position in points, measured from the upper-left corner of the page
when the element has no rotation.
@param top The new vertical position to set, in points.
@return This page element, for chaining.*/setTop(top:number):SlidesApp.Image;
/**Sets the transform of the page element with the provided transform.

Updating the transform of a group changes the absolute transform of the page elements in
that group, which can change their visual appearance.

Updating the transform of a page element that is in a group only changes the transform of
that page element; it doesn't affect the transforms of the group or other page elements in the
group.

For details on how transforms impact the visual appearance of page elements, see [`getTransform()`](https://developers.google.com/apps-script/reference/slides/image.html#getTransform()).
@param transform The transform that is set for this page element.
@return This element, for chaining.*/setTransform(transform:SlidesApp.AffineTransform):SlidesApp.Image;
/**Sets the element's width in points, which is the width of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param width The new width of this page element to set, in points.
@return This page element, for chaining.*/setWidth(width:number):SlidesApp.Image;}interface Group{
/**Aligns the element to the specified alignment position on the page.
@param alignmentPosition The position to align this page element to on the page.
@return This page element, for chaining.*/alignOnPage(alignmentPosition:SlidesApp.AlignmentPosition):SlidesApp.Group;
/**Brings the page element forward on the page by one element.

The page element must not be in a group.
@return This page element, for chaining.*/bringForward():SlidesApp.Group;
/**Brings the page element to the front of the page.

The page element must not be in a group.
@return This page element, for chaining.*/bringToFront():SlidesApp.Group;
/**Duplicates the page element.

The duplicate page element is placed on the same page at the same position as the original.
@return The new duplicate of this page element.*/duplicate():SlidesApp.PageElement;
/**Gets the collection of page elements in the group. The minimum size of a group is 2.
@return The list of page elements in this group.*/getChildren():SlidesApp.PageElement[];
/**Returns the list of `ConnectionSite`s on the page element, or an empty list if the page
element does not have any connection sites.
@return The connection sites list, which may be empty if this element has no connection sites.*/getConnectionSites():SlidesApp.ConnectionSite[];
/**Returns the page element's alt text description. The description is combined with the title to
display and read alt text.
@return The page element's alt text description.*/getDescription():string;
/**Gets the element's height in points, which is the height of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@return The page element's inherent height in points, or `null` if the page element does
    not have a height.*/getHeight():number;
/**Returns the element's inherent height in points.

The page element's transform is relative to its inherent size. Use the inherent size in
conjunction with the element's transform to determine the element's final visual appearance.
@return The page element's inherent height in points, or `null` if the page element does
    not have a height.*/getInherentHeight():number;
/**Returns the element's inherent width in points.

The page element's transform is relative to its inherent size. Use the inherent size in
conjunction with the element's transform to determine the element's final visual appearance.
@return The page element's inherent width in points, or `null` if the page element does
    not have a width.*/getInherentWidth():number;
/**Returns the element's horizontal position in points, measured from the upper-left corner of the
page when the element has no rotation.
@return This element's horizontal position in points, from the upper-left corner of the page.*/getLeft():number;
/**Returns the unique ID for this object. Object IDs used by pages and page elements share the
same namespace.
@return The unique ID for this object.*/getObjectId():string;
/**Returns the page element's type, represented as a [`PageElementType`](https://developers.google.com/apps-script/reference/slides/page-element-type.html) enum.
@return The page element's type.*/getPageElementType():SlidesApp.PageElementType;
/**Returns the group this page element belongs to, or `null` if the element is not in a
group.
@return The group this page element belongs to, or `null`.*/getParentGroup():SlidesApp.Group;
/**Returns the page this page element is on.
@return The page this element resides on.*/getParentPage():SlidesApp.Page;
/**Returns the element's clockwise rotation angle around its center in degrees, where zero degrees
means no rotation.
@return The rotation angle in degrees between 0 (inclusive) and 360 (exclusive).*/getRotation():number;
/**Returns the page element's alt text title. The title is combined with the description to
display and read alt text.
@return The page element's alt text title.*/getTitle():string;
/**Gets the element's vertical position in points, measured from the upper-left corner of the page
when the element has no rotation.
@return This element's vertical position in points, from the upper-left corner of the page.*/getTop():number;
/**Gets the page element's transform.

The initial transform for a newly created [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) is always the identity transform:
1.0 scale parameters, and 0.0 shear and translate parameters.
@return The page element's transform.*/getTransform():SlidesApp.AffineTransform;
/**Returns the element's width in points, which is the width of the element's bounding box when
the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@return The page element's inherent width in points, or `null` if the page element does
    not have a width.*/getWidth():number;
/**Preconcatenates the provided transform to the existing transform of the page element.

```
newTransform = argument * existingTransform
```

For example, to move a page elements 36 points to the left:

```
element.preconcatenateTransform(SlidesApp.newAffineTransformBuilder()
    .setTranslateX(-36.0)
    .build());
```

You can also replace the page element's transform with [`setTransform(transform)`](https://developers.google.com/apps-script/reference/slides/group.html#setTransform(AffineTransform)).
@param transform The transform to preconcatenate onto this page element's transform.
@return This page element, for chaining.*/preconcatenateTransform(transform:SlidesApp.AffineTransform):SlidesApp.Group;
/**Removes the page element.

If after a remove operation, a `Group` contains only one or no page elements, the
group itself is also removed.

If a placeholder `PageElement` is removed on a master or layout, any empty inheriting
placeholders are also removed.*/remove():void;
/**Scales the element's height by the specified ratio. The element's height is the height of its
bounding box when the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param ratio The ratio to scale this page element's height by.
@return This page element, for chaining.*/scaleHeight(ratio:number):SlidesApp.Group;
/**Scales the element's width by the specified ratio. The element's width is the width of its
bounding box when the element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param ratio The ratio to scale this page element's width by.
@return This page element, for chaining.*/scaleWidth(ratio:number):SlidesApp.Group;
/**Selects only the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) in the active presentation and removes any previous
selection. This is the same as calling [`select(replace)`](https://developers.google.com/apps-script/reference/slides/group.html#select(Boolean)) with `true`.

A script can only access the selection of the user who is running the script, and only if
the script is [bound](/apps-script/scripts_containers) to the presentation.

This sets the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) as the [`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
var pageElement = slide.getPageElements()[0];
// Only select this page element and replace any previous selection.
pageElement.select();
```*/select():void;
/**Selects the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) in the active presentation.

A script can only access the selection of the user who is running the script, and only if
the script is [bound](/apps-script/scripts_containers) to the presentation.

Pass `true` to this method to select only the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) and remove any
previous selection. This also sets the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) as the
[`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).

Pass `false` to select multiple [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) objects. The [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html)
objects must be in the same [`Page`](https://developers.google.com/apps-script/reference/slides/page.html).

The following conditions must be met while selecting a page element using a `false`
parameter:

  1. The parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) of the [`PageElement`](https://developers.google.com/apps-script/reference/slides/page-element.html) object must be the [`current page selection`](https://developers.google.com/apps-script/reference/slides/selection.html#getCurrentPage()).
  1. There should not be multiple [`Page`](https://developers.google.com/apps-script/reference/slides/page.html) objects selected.

To make sure that’s the case the preferred approach is to select the parent [`Page`](https://developers.google.com/apps-script/reference/slides/page.html)
first using [`Page.selectAsCurrentPage()`](https://developers.google.com/apps-script/reference/slides/page.html#selectAsCurrentPage()) and then select the page elements in that page.

```
var slide = SlidesApp.getActivePresentation().getSlides()[0];
// First select the slide page, as the current page selection.
slide.selectAsCurrentPage();
// Then select all the page elements in the selected slide page.
var pageElements = slide.getPageElements();
for (var i = 0; i < pageElements.length; i++) {
  pageElements[i].select(false);
}
```
@param replace If `true`, the selection replaces any previous selection; otherwise the
    selection is added to any previous selection.*/select(replace:boolean):void;
/**Sends the page element backward on the page by one element.

The page element must not be in a group.
@return This page element, for chaining.*/sendBackward():SlidesApp.Group;
/**Sends the page element to the back of the page.

The page element must not be in a group.
@return This page element, for chaining.*/sendToBack():SlidesApp.Group;
/**Sets the page element's alt text description.

The method is not supported for [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) elements.

```
// Set the first page element's alt text description to "new alt text description".
var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
pageElement.setDescription('new alt text description');
Logger.log(pageElement.getDescription());
```
@param description The string to set the alt text description to.
@return This page element.*/setDescription(description:string):SlidesApp.Group;
/**Sets the element's height in points, which is the height of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param height The new height of this page element to set, in points.
@return This page element, for chaining.*/setHeight(height:number):SlidesApp.Group;
/**Sets the element's horizontal position in points, measured from the upper-left corner of the
page when the element has no rotation.
@param left The new horizontal position to set, in points.
@return This page element, for chaining.*/setLeft(left:number):SlidesApp.Group;
/**Sets the element's clockwise rotation angle around its center in degrees.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param angle The new clockwise rotation angle to set, in degrees.
@return This page element, for chaining.*/setRotation(angle:number):SlidesApp.Group;
/**Sets the page element's alt text title.

The method is not supported for [`Group`](https://developers.google.com/apps-script/reference/slides/group.html) elements.

```
// Set the first page element's alt text title to "new alt text title".
var pageElement = SlidesApp.getActivePresentation().getSlides()[0].getPageElements()[0];
pageElement.setTitle('new alt text title');
Logger.log(pageElement.getTitle());
```
@param title The string to set the alt text title to.
@return This page element.*/setTitle(title:string):SlidesApp.Group;
/**Sets the element's vertical position in points, measured from the upper-left corner of the page
when the element has no rotation.
@param top The new vertical position to set, in points.
@return This page element, for chaining.*/setTop(top:number):SlidesApp.Group;
/**Sets the transform of the page element with the provided transform.

Updating the transform of a group changes the absolute transform of the page elements in
that group, which can change their visual appearance.

Updating the transform of a page element that is in a group only changes the transform of
that page element; it doesn't affect the transforms of the group or other page elements in the
group.

For details on how transforms impact the visual appearance of page elements, see [`getTransform()`](https://developers.google.com/apps-script/reference/slides/group.html#getTransform()).
@param transform The transform that is set for this page element.
@return This element, for chaining.*/setTransform(transform:SlidesApp.AffineTransform):SlidesApp.Group;
/**Sets the element's width in points, which is the width of the element's bounding box when the
element has no rotation.

This method isn't compatible with all page elements. To learn which page elements aren't
compatible with this method, refer to the [
sizing and positioning limitations](https://developers.google.com/apps-script/guides/slides/moving-elements#limitations).
@param width The new width of this page element to set, in points.
@return This page element, for chaining.*/setWidth(width:number):SlidesApp.Group;
/**Ungroups the elements of the group.

The group itself is removed.

Groups inside other groups cannot be ungrouped.*/ungroup():void;}interface FillType{}interface _FillType{
/**No fill, so the background is transparent.*/NONE:FillType;
/**A solid color fill.*/SOLID:FillType;
/**A fill type that is not supported.*/UNSUPPORTED:FillType;}interface Fill{
/**Get the solid fill of this background, or `null` if the fill type is not [`FillType.SOLID`](https://developers.google.com/apps-script/reference/slides/fill-type.html#SOLID).
@return The solid fill setting, or `null` if this fill type is not solid.*/getSolidFill():SlidesApp.SolidFill;
/**Get the type of this fill.
@return The type of this fill.*/getType():SlidesApp.FillType;
/**Whether the background is visible.
@return `true` if the background is visible; `false` otherwise.*/isVisible():boolean;
/**Sets the solid fill to the given RGB values.*/setSolidFill(red:Integer,green:Integer,blue:Integer):void;
/**Sets the solid fill to the given alpha and RGB values.*/setSolidFill(red:Integer,green:Integer,blue:Integer,alpha:number):void;
/**Sets the solid fill to the given [`Color`](https://developers.google.com/apps-script/reference/slides/color.html).*/setSolidFill(color:SlidesApp.Color):void;
/**Sets the solid fill to the given alpha and [`Color`](https://developers.google.com/apps-script/reference/slides/color.html).*/setSolidFill(color:SlidesApp.Color,alpha:number):void;
/**Sets the solid fill to the given [`ThemeColorType`](https://developers.google.com/apps-script/reference/slides/theme-color-type.html).*/setSolidFill(color:SlidesApp.ThemeColorType):void;
/**Sets the solid fill to the given alpha and [`ThemeColorType`](https://developers.google.com/apps-script/reference/slides/theme-color-type.html).*/setSolidFill(color:SlidesApp.ThemeColorType,alpha:number):void;
/**Sets the solid fill to the given hex color string.

The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
'#FFC0CB'.*/setSolidFill(hexString:string):void;
/**Sets the solid fill to the given alpha and hex color string.

The hex string must be in the format '#RRGGBB'. For example, pink would be represented as
'#FFC0CB'.*/setSolidFill(hexString:string,alpha:number):void;
/**Sets the background to transparent.*/setTransparent():void;}interface DashStyle{}interface _DashStyle{
/**Dashed line. Corresponds to ECMA-376 ST_PresetLineDashVal value 'dash'.*/DASH:DashStyle;
/**Alternating dashes and dots. Corresponds to ECMA-376 ST_PresetLineDashVal value 'dashDot'.*/DASH_DOT:DashStyle;
/**Dotted line. Corresponds to ECMA-376 ST_PresetLineDashVal value 'dot'.*/DOT:DashStyle;
/**Line with large dashes. Corresponds to ECMA-376 ST_PresetLineDashVal value 'lgDash'.*/LONG_DASH:DashStyle;
/**Alternating large dashes and dots. Corresponds to ECMA-376 ST_PresetLineDashVal value
'lgDashDot'.*/LONG_DASH_DOT:DashStyle;
/**Solid line. Corresponds to ECMA-376 ST_PresetLineDashVal value 'solid'. This is the default
dash style.*/SOLID:DashStyle;
/**A dash style that is not supported.*/UNSUPPORTED:DashStyle;}interface ContentAlignment{}interface _ContentAlignment{
/**Aligns the content to the bottom of the content holder. Corresponds to ECMA-376
ST_TextAnchoringType 'b'.*/BOTTOM:ContentAlignment;
/**Aligns the content to the middle of the content holder. Corresponds to ECMA-376
ST_TextAnchoringType 'ctr'.*/MIDDLE:ContentAlignment;
/**Aligns the content to the top of the content holder. Corresponds to ECMA-376
ST_TextAnchoringType 't'.*/TOP:ContentAlignment;
/**A content alignment that is not supported.*/UNSUPPORTED:ContentAlignment;}interface ConnectionSite{
/**Returns the index of the connection site. The index is unique among all the connection sites on
the same page element.

In most cases, it corresponds to the predefined connection site index from the ECMA-376
standard. More information on those connection sites can be found in the description of the
"cnx" attribute in section 20.1.9.9 and Annex H. "Predefined DrawingML Shape and Text
Geometries" of "Office Open XML File Formats-Fundamentals and Markup Language Reference", part
1 of [ECMA-376
5th edition](http://www.ecma-international.org/publications/standards/Ecma-376.htm).
@return The index of the connection site.*/getIndex():Integer;
/**Returns the `PageElement` that the connection site is on.
@return The page element of the connection site.*/getPageElement():SlidesApp.PageElement;}interface ColorScheme{
/**Returns the concrete [`Color`](https://developers.google.com/apps-script/reference/slides/color.html) associated with the [`ThemeColorType`](https://developers.google.com/apps-script/reference/slides/theme-color-type.html) in this color
scheme.

The returned color is guaranteed to not be an instance of [`ThemeColor`](https://developers.google.com/apps-script/reference/slides/theme-color.html).
@param theme The theme color to derive the concrete color from.
@return The concrete color corresponding the theme color type in this scheme.*/getConcreteColor(theme:SlidesApp.ThemeColorType):SlidesApp.Color;
/**Returns a list of all possible theme color types in a color scheme.
@return The possible theme color types in this scheme.*/getThemeColors():SlidesApp.ThemeColorType[];
/**Sets the concrete color associated with the [`ThemeColorType`](https://developers.google.com/apps-script/reference/slides/theme-color-type.html) in this color scheme to the
given color in RGB format.
@param type The theme color type.
@param red The red value of the color to set the theme color type to (between 0 and 255).
@param green The green value of the color to set the theme color type to (between 0 and 255).
@param blue The blue value of the color to set the theme color type to (between 0 and 255).
@return This color scheme, for chaining.*/setConcreteColor(type:SlidesApp.ThemeColorType,red:Integer,green:Integer,blue:Integer):SlidesApp.ColorScheme;
/**Sets the concrete color associated with the [`ThemeColorType`](https://developers.google.com/apps-script/reference/slides/theme-color-type.html) in this color scheme to the
given color.
@param type The theme color type.
@param color The color to set the theme color type to.
@return This color scheme, for chaining.*/setConcreteColor(type:SlidesApp.ThemeColorType,color:SlidesApp.Color):SlidesApp.ColorScheme;
/**Sets the concrete color associated with the [`ThemeColorType`](https://developers.google.com/apps-script/reference/slides/theme-color-type.html) in this color scheme to the
given color in HEX format.

The hex string must be in the format '#RRGGBB'.
@param type The theme color type.
@param hexColor The hex color to set the theme color type to, such as '#F304a7'.
@return This color scheme, for chaining.*/setConcreteColor(type:SlidesApp.ThemeColorType,hexColor:string):SlidesApp.ColorScheme;}interface Color{
/**Converts this color to an [`RgbColor`](https://developers.google.com/apps-script/reference/slides/../base/rgb-color.html).*/asRgbColor():RgbColor;
/**Converts this color to a [`ThemeColor`](https://developers.google.com/apps-script/reference/slides/theme-color.html).*/asThemeColor():SlidesApp.ThemeColor;
/**Get the type of this color.
@return The color type.*/getColorType():ColorType;}interface CellMergeState{}interface _CellMergeState{
/**The cell is merged and it is the head (i.e. upper left) cell within the merged set of cells.

As an example, assume the following table.

```
-------------------
|(0,0)|(0,1)|(0,2)|
-------------------
```

If the first two cells are merged to form the following table, cell (0,0) is the head cell and
(0,1) is a merged cell.

```
-------------------
|(0,0)      |(0,2)|
-------------------
```*/HEAD:CellMergeState;
/**The cell is merged but is not the head (i.e. upper left) cell.

As an example, assume the following table.

```
-------------------
|(0,0)|(0,1)|(0,2)|
-------------------
```

If the first two cells are merged to form the following table, cell (0,0) is the head cell and
(0,1) is a merged cell.

```
-------------------
|(0,0)      |(0,2)|
-------------------
```*/MERGED:CellMergeState;
/**The cell is not merged.*/NORMAL:CellMergeState;}interface Border{
/**Gets the [`DashStyle`](https://developers.google.com/apps-script/reference/slides/dash-style.html) of the border.*/getDashStyle():SlidesApp.DashStyle;
/**Gets the [`LineFill`](https://developers.google.com/apps-script/reference/slides/line-fill.html) of the border.*/getLineFill():SlidesApp.LineFill;
/**Gets the thickness of the border in points. Returns `null` if the element does not have a
border.*/getWeight():number;
/**Gets whether the border is visible or not.*/isVisible():boolean;
/**Sets the [`DashStyle`](https://developers.google.com/apps-script/reference/slides/dash-style.html) of the border.

Setting a [`DashStyle`](https://developers.google.com/apps-script/reference/slides/dash-style.html) on a transparent border makes it visible.*/setDashStyle(style:SlidesApp.DashStyle):SlidesApp.Border;
/**Sets the border to be transparent.*/setTransparent():SlidesApp.Border;
/**Sets the thickness of the border in points.

Setting a weight on a transparent border makes it visible.*/setWeight(points:number):SlidesApp.Border;}interface AutofitType{}interface _AutofitType{
/**Autofit isn't applied.*/NONE:AutofitType;
/**Resizes the shape to fit the text.*/SHAPE_AUTOFIT:AutofitType;
/**Shrinks the text on overflow.*/TEXT_AUTOFIT:AutofitType;
/**An autofit type that is not supported.*/UNSUPPORTED:AutofitType;}interface Autofit{
/**Sets the [`AutofitType`](https://developers.google.com/apps-script/reference/slides/autofit-type.html) of a shape to [`AutofitType.NONE`](https://developers.google.com/apps-script/reference/slides/autofit-type.html#NONE).
@return The autofit, for chaining.*/disableAutofit():SlidesApp.Autofit;
/**Gets the [`AutofitType`](https://developers.google.com/apps-script/reference/slides/autofit-type.html) of the shape.
@return The autofit type.*/getAutofitType():SlidesApp.AutofitType;
/**Gets the font scale applied to the shape. For shapes with [`AutofitType`](https://developers.google.com/apps-script/reference/slides/autofit-type.html) [`AutofitType.NONE`](https://developers.google.com/apps-script/reference/slides/autofit-type.html#NONE) or [`AutofitType.SHAPE_AUTOFIT`](https://developers.google.com/apps-script/reference/slides/autofit-type.html#SHAPE_AUTOFIT), this value is the default value of 1.
For [`AutofitType.TEXT_AUTOFIT`](https://developers.google.com/apps-script/reference/slides/autofit-type.html#TEXT_AUTOFIT), the value returned is what the original font size is
multiplied by to fit within the shape.
@return The font scale.*/getFontScale():number;
/**Gets the line spacing reduction applied to the shape. For shapes with [`AutofitType`](https://developers.google.com/apps-script/reference/slides/autofit-type.html)
[`AutofitType.NONE`](https://developers.google.com/apps-script/reference/slides/autofit-type.html#NONE) or [`AutofitType.SHAPE_AUTOFIT`](https://developers.google.com/apps-script/reference/slides/autofit-type.html#SHAPE_AUTOFIT), this value is the default value
of 0. For [`AutofitType.TEXT_AUTOFIT`](https://developers.google.com/apps-script/reference/slides/autofit-type.html#TEXT_AUTOFIT), the returned value is the amount of spacing
subtracted from the original spacing to make the text fit within the shape.
@return The line spacing.*/getLineSpacingReduction():number;}interface AutoTextType{}interface _AutoTextType{
/**A slide number.*/SLIDE_NUMBER:AutoTextType;
/**An auto text type that is not supported.*/UNSUPPORTED:AutoTextType;}interface AutoText{
/**Returns the type of auto text. Returns `null` if the auto text has been deleted.*/getAutoTextType():SlidesApp.AutoTextType;
/**Returns the index of the auto text. Returns `null` if the auto text has been deleted.*/getIndex():Integer;
/**Returns a [`TextRange`](https://developers.google.com/apps-script/reference/slides/text-range.html) spanning the auto text. Returns `null` if the auto text has
been deleted.*/getRange():SlidesApp.TextRange;}interface ArrowStyle{}interface _ArrowStyle{
/**Filled arrow. Corresponds to ECMA-376 ST_LineEndType value 'triangle'.*/FILL_ARROW:ArrowStyle;
/**Filled circle. Corresponds to ECMA-376 ST_LineEndType value 'oval'.*/FILL_CIRCLE:ArrowStyle;
/**Filled diamond. Corresponds to ECMA-376 ST_LineEndType value 'diamond'.*/FILL_DIAMOND:ArrowStyle;
/**Filled square.*/FILL_SQUARE:ArrowStyle;
/**No arrow.*/NONE:ArrowStyle;
/**Hollow arrow.*/OPEN_ARROW:ArrowStyle;
/**Hollow circle.*/OPEN_CIRCLE:ArrowStyle;
/**Hollow diamond.*/OPEN_DIAMOND:ArrowStyle;
/**Hollow square.*/OPEN_SQUARE:ArrowStyle;
/**Arrow with notched back. Corresponds to ECMA-376 ST_LineEndType value 'stealth'.*/STEALTH_ARROW:ArrowStyle;
/**An arrow style that is not supported.*/UNSUPPORTED:ArrowStyle;}interface AlignmentPosition{}interface _AlignmentPosition{
/**Align to the center.*/CENTER:AlignmentPosition;
/**Align to the horizontal center.*/HORIZONTAL_CENTER:AlignmentPosition;
/**Align to the vertical center.*/VERTICAL_CENTER:AlignmentPosition;}interface AffineTransformBuilder{
/**Creates an [`AffineTransform`](https://developers.google.com/apps-script/reference/slides/affine-transform.html) object initialized with the elements set in the builder.*/build():SlidesApp.AffineTransform;
/**Sets the X coordinate scaling element and returns the builder.*/setScaleX(scaleX:number):SlidesApp.AffineTransformBuilder;
/**Sets the Y coordinate scaling element and returns the builder.*/setScaleY(scaleY:number):SlidesApp.AffineTransformBuilder;
/**Sets the X coordinate shearing element and returns the builder.*/setShearX(shearX:number):SlidesApp.AffineTransformBuilder;
/**Sets the Y coordinate shearing element and returns the builder.*/setShearY(shearY:number):SlidesApp.AffineTransformBuilder;
/**Sets the X coordinate translation element in points, and returns the builder.*/setTranslateX(translateX:number):SlidesApp.AffineTransformBuilder;
/**Sets the Y coordinate translation element in points, and returns the builder.*/setTranslateY(translateY:number):SlidesApp.AffineTransformBuilder;}interface AffineTransform{
/**Gets the X coordinate scaling element.*/getScaleX():number;
/**Gets the Y coordinate scaling element.*/getScaleY():number;
/**Gets the X coordinate shearing element.*/getShearX():number;
/**Gets the Y coordinate shearing element.*/getShearY():number;
/**Gets the X coordinate translation element in points.*/getTranslateX():number;
/**Gets the Y coordinate translation element in points.*/getTranslateY():number;
/**Returns a new [`AffineTransformBuilder`](https://developers.google.com/apps-script/reference/slides/affine-transform-builder.html) based on this transform.*/toBuilder():SlidesApp.AffineTransformBuilder;}}const SlidesApp:SlidesApp;