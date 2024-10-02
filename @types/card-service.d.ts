interface CardService{
/**The [`BorderType`](https://developers.google.com/apps-script/reference/card-service/border-type.html) enumeration.*/BorderType:CardService._BorderType;
/**The [`ChipListLayout`](https://developers.google.com/apps-script/reference/card-service/chip-list-layout.html) enumeration.*/ChipListLayout:CardService._ChipListLayout;
/**The [`ComposedEmailType`](https://developers.google.com/apps-script/reference/card-service/composed-email-type.html) enumeration.*/ComposedEmailType:CardService._ComposedEmailType;
/**The [`ContentType`](https://developers.google.com/apps-script/reference/card-service/content-type.html) enumeration.*/ContentType:CardService._ContentType;
/**The [`GridItemLayout`](https://developers.google.com/apps-script/reference/card-service/grid-item-layout.html) enumeration.*/GridItemLayout:CardService._GridItemLayout;
/**The [`HorizontalAlignment`](https://developers.google.com/apps-script/reference/card-service/horizontal-alignment.html) enumeration.*/HorizontalAlignment:CardService._HorizontalAlignment;
/**The [`Icon`](https://developers.google.com/apps-script/reference/card-service/icon.html) enumeration.*/Icon:CardService._Icon;
/**The [`ImageButtonStyle`](https://developers.google.com/apps-script/reference/card-service/image-button-style.html) enumeration.*/ImageButtonStyle:CardService._ImageButtonStyle;
/**The [`ImageCropType`](https://developers.google.com/apps-script/reference/card-service/image-crop-type.html) enumeration.*/ImageCropType:CardService._ImageCropType;
/**The [`ImageStyle`](https://developers.google.com/apps-script/reference/card-service/image-style.html) enumeration.*/ImageStyle:CardService._ImageStyle;
/**The [`InputType`](https://developers.google.com/apps-script/reference/card-service/input-type.html) enumeration.*/InputType:CardService._InputType;
/**The [`LoadIndicator`](https://developers.google.com/apps-script/reference/card-service/load-indicator.html) enumeration.*/LoadIndicator:CardService._LoadIndicator;
/**The [`OnClose`](https://developers.google.com/apps-script/reference/card-service/on-close.html) enumeration.*/OnClose:CardService._OnClose;
/**The [`OpenAs`](https://developers.google.com/apps-script/reference/card-service/open-as.html) enumeration.*/OpenAs:CardService._OpenAs;
/**The [`SelectionInputType`](https://developers.google.com/apps-script/reference/card-service/selection-input-type.html) enumeration.*/SelectionInputType:CardService._SelectionInputType;
/**The [`TextButtonStyle`](https://developers.google.com/apps-script/reference/card-service/text-button-style.html) enumeration.*/TextButtonStyle:CardService._TextButtonStyle;
/**The [`UpdateDraftBodyType`](https://developers.google.com/apps-script/reference/card-service/update-draft-body-type.html) enumeration.*/UpdateDraftBodyType:CardService._UpdateDraftBodyType;
/**The [`DisplayStyle`](https://developers.google.com/apps-script/reference/card-service/display-style.html) enumeration.*/DisplayStyle:CardService._DisplayStyle;
/**The [`SwitchControlType`](https://developers.google.com/apps-script/reference/card-service/switch-control-type.html) enumeration.*/SwitchControlType:CardService._SwitchControlType;
/**Creates a new [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html).
@return An empty Action.*/newAction():CardService.Action;
/**Creates a new [`ActionResponseBuilder`](https://developers.google.com/apps-script/reference/card-service/action-response-builder.html).
@return An empty ActionResponse builder.*/newActionResponseBuilder():CardService.ActionResponseBuilder;
/**Creates a new [`ActionStatus`](https://developers.google.com/apps-script/reference/card-service/action-status.html).

Only available for Google Chat apps. Not available for Google Workspace Add-ons.

```
const actionStatus = CardService.newActionStatus()
    .setStatusCode(CardService.Status.OK)
    .setUserFacingMessage('Success');
```
@return An empty ActionStatus.*/newActionStatus():CardService.ActionStatus;
/**Creates a new [`Attachment`](https://developers.google.com/apps-script/reference/card-service/attachment.html).
@return An empty attachment.*/newAttachment():CardService.Attachment;
/**Creates a new [`AuthorizationAction`](https://developers.google.com/apps-script/reference/card-service/authorization-action.html).
@return An empty AuthorizationAction.*/newAuthorizationAction():CardService.AuthorizationAction;
/**Creates a new [`AuthorizationException`](https://developers.google.com/apps-script/reference/card-service/authorization-exception.html).
@return An empty AuthorizationException.*/newAuthorizationException():CardService.AuthorizationException;
/**Creates a new [`BorderStyle`](https://developers.google.com/apps-script/reference/card-service/border-style.html).
@return An empty BorderStyle.*/newBorderStyle():CardService.BorderStyle;
/**Creates a new [`ButtonSet`](https://developers.google.com/apps-script/reference/card-service/button-set.html).
@return An empty ButtonSet.*/newButtonSet():CardService.ButtonSet;
/**Creates a new [`CalendarEventActionResponseBuilder`](https://developers.google.com/apps-script/reference/card-service/calendar-event-action-response-builder.html).
@return An empty [`CalendarEventActionResponseBuilder`](https://developers.google.com/apps-script/reference/card-service/calendar-event-action-response-builder.html).*/newCalendarEventActionResponseBuilder():CardService.CalendarEventActionResponseBuilder;
/**Creates a new [`CardAction`](https://developers.google.com/apps-script/reference/card-service/card-action.html).
@return An empty CardAction.*/newCardAction():CardService.CardAction;
/**Creates a new Card builder.
@return An empty Card builder.*/newCardBuilder():CardService.CardBuilder;
/**Creates a new [`CardHeader`](https://developers.google.com/apps-script/reference/card-service/card-header.html).
@return An empty CardHeader.*/newCardHeader():CardService.CardHeader;
/**Creates a new [`CardSection`](https://developers.google.com/apps-script/reference/card-service/card-section.html).
@return An empty CardSection.*/newCardSection():CardService.CardSection;
/**Creates a new [`CardWithId`](https://developers.google.com/apps-script/reference/card-service/card-with-id.html). This is used to send a card in a Google Chat message. card ID
is a unique identifier for a card in a message when sending multiple cards.

Only available for Google Chat apps. Not available for Google Workspace Add-ons.

```
const cardSection = CardService.newCardSection();
cardSection.addWidget(
    CardService.newTextParagraph().setText('This is a text paragraph widget.'));

const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle('Card title'))
    .addSection(cardSection)
    .build();

const cardWithId = CardService.newCardWithId()
    .setCardId('card_id')
    .setCard(card);
```
@return An empty [`CardWithId`](https://developers.google.com/apps-script/reference/card-service/card-with-id.html).*/newCardWithId():CardService.CardWithId;
/**Creates a new [`ChatActionResponse`](https://developers.google.com/apps-script/reference/card-service/chat-action-response.html).

Only available for Google Chat apps. Not available for Google Workspace Add-ons.

```
const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle('Card title')).build();
const dialog = CardService.newDialog()
    .setBody(card);

const dialogAction = CardService.newDialogAction()
    .setDialog(dialog)

const chatActionResponse = CardService.newChatActionResponse()
    .setResponseType(CardService.ResponseType.DIALOG)
    .setDialogAction(dialogAction);
```
@return An empty [`ChatActionResponse`](https://developers.google.com/apps-script/reference/card-service/chat-action-response.html).*/newChatActionResponse():CardService.ChatActionResponse;
/**Creates a new [`ChatResponseBuilder`](https://developers.google.com/apps-script/reference/card-service/chat-response-builder.html).

Only available for Google Chat apps. Not available for Google Workspace Add-ons.

```
const cardSection = CardService.newCardSection();
cardSection.addWidget(
    CardService.newTextParagraph().setText('This is a text paragraph widget.'));

const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle('Card title'))
    .addSection(cardSection)
    .build();

const cardWithId = CardService.newCardWithId()
    .setCardId('card_id')
    .setCard(card);

const chatResponse = CardService.newChatResponseBuilder()
    .addCardsV2(cardWithId)
    .build();
```
@return An empty ChatResponseBuilder.*/newChatResponseBuilder():CardService.ChatResponseBuilder;
/**Creates a new [`Chip`](https://developers.google.com/apps-script/reference/card-service/chip.html).

Only available for Google Chat apps. Not available for Google Workspace Add-ons.

[Developer Preview](https://developers.google.com/workspace/preview).
@return An empty Chip.*/newChip():CardService.Chip;
/**Creates a new [`ChipList`](https://developers.google.com/apps-script/reference/card-service/chip-list.html).

Only available for Google Chat apps. Not available for Google Workspace Add-ons.

[Developer Preview](https://developers.google.com/workspace/preview).
@return An empty ChipList.*/newChipList():CardService.ChipList;
/**Creates a new [`CollapseControl`](https://developers.google.com/apps-script/reference/card-service/collapse-control.html).

Only available for Google Chat apps. Not available for Google Workspace Add-ons.

```
const collapseControl = CardService.newCollapseControl()
    .setHorizontalAlign(CardService.HorizontalAlignment.START)
    .setExpandButton(CardService.newTextButton().setText('Expand'))
    .setCollapseButton(CardService.newTextButton().setText('Collapse'));
```

[Developer Preview](https://developers.google.com/workspace/preview).
@return An empty CollapseControl.*/newCollapseControl():CardService.CollapseControl;
/**Creates a new [`Column`](https://developers.google.com/apps-script/reference/card-service/column.html).

Available for Google Chat apps and Google Workspace Add-ons.

```
const columnWidget = CardService.newTextParagraph();
const column = CardService.newColumn()
    .setHorizontalSizeStyle(CardService.HorizontalSizeStyle.FILL_AVAILABLE_SPACE)
    .setHorizontalAlignment(CardService.HorizontalAlignment.CENTER)
    .setVerticalAlignment(CardService.VerticalAlignment.CENTER)
    .addWidget(columnWidget);
```
@return An empty Column.*/newColumn():CardService.Column;
/**Creates a new set of [`Columns`](https://developers.google.com/apps-script/reference/card-service/columns.html).

Available for Google Chat apps and Google Workspace Add-ons.

```
const firstColumn = CardService.newColumn()
    .setHorizontalSizeStyle(CardService.HorizontalSizeStyle.FILL_AVAILABLE_SPACE)
    .setHorizontalAlignment(CardService.HorizontalAlignment.CENTER)
    .setVerticalAlignment(CardService.VerticalAlignment.CENTER);
const secondColumn = CardService.newColumn()
    .setHorizontalSizeStyle(CardService.HorizontalSizeStyle.FILL_AVAILABLE_SPACE)
    .setHorizontalAlignment(CardService.HorizontalAlignment.CENTER)
    .setVerticalAlignment(CardService.VerticalAlignment.CENTER);
const columns = CardService.newColumns()
    .addColumn(column)
    .addColumn(secondColumn)
    .setWrapStyle(CardService.WrapStyle.WRAP);
```
@return An empty set of Columns.*/newColumns():CardService.Columns;
/**Creates a new [`ComposeActionResponseBuilder`](https://developers.google.com/apps-script/reference/card-service/compose-action-response-builder.html).
@return An empty ComposeActionResponse builder.*/newComposeActionResponseBuilder():CardService.ComposeActionResponseBuilder;
/**Creates a new [`DatePicker`](https://developers.google.com/apps-script/reference/card-service/date-picker.html).
@return An empty DatePicker.*/newDatePicker():CardService.DatePicker;
/**Creates a new [`DateTimePicker`](https://developers.google.com/apps-script/reference/card-service/date-time-picker.html).
@return An empty DateTimePicker.*/newDateTimePicker():CardService.DateTimePicker;
/**Creates a new [`DecoratedText`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html).
@return An empty DecoratedText.*/newDecoratedText():CardService.DecoratedText;
/**Creates a new [`Dialog`](https://developers.google.com/apps-script/reference/card-service/dialog.html).

Only available for Google Chat apps. Not available for Google Workspace Add-ons.

```
const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle('Card title')).build();

// Sets the card of the dialog.
const dialog = CardService.newDialog()
    .setBody(card);
```
@return An empty [`Dialog`](https://developers.google.com/apps-script/reference/card-service/dialog.html).*/newDialog():CardService.Dialog;
/**Creates a new [`DialogAction`](https://developers.google.com/apps-script/reference/card-service/dialog-action.html).

Only available for Google Chat apps. Not available for Google Workspace Add-ons.

```
const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle('Card title')).build();
const dialog = CardService.newDialog()
    .setBody(card);

const dialogAction = CardService.newDialogAction()
    .setDialog(dialog)
```
@return An empty [`DialogAction`](https://developers.google.com/apps-script/reference/card-service/dialog-action.html).*/newDialogAction():CardService.DialogAction;
/**Creates a new [`Divider`](https://developers.google.com/apps-script/reference/card-service/divider.html). The following sample builds a simple card with 2 paragraphs
separated by a divider.

```
function buildCard() {
    let cardSection1TextParagraph1 = CardService.newTextParagraph()
        .setText('Hello world!');

    let cardSection1Divider1 = CardService.newDivider();

    let cardSection1TextParagraph2 = CardService.newTextParagraph()
        .setText('Hello world!');

    let cardSection1 = CardService.newCardSection()
        .addWidget(cardSection1TextParagraph1)
        .addWidget(cardSection1Divider1)
        .addWidget(cardSection1TextParagraph2);

    let card = CardService.newCardBuilder()
        .addSection(cardSection1)
        .build();

   return card;
}
```
@return A divider.*/newDivider():CardService.Divider;
/**Creates a new [`DriveItemsSelectedActionResponseBuilder`](https://developers.google.com/apps-script/reference/card-service/drive-items-selected-action-response-builder.html).
@return An empty [`DriveItemsSelectedActionResponseBuilder`](https://developers.google.com/apps-script/reference/card-service/drive-items-selected-action-response-builder.html).*/newDriveItemsSelectedActionResponseBuilder():CardService.DriveItemsSelectedActionResponseBuilder;
/**Creates a new [`EditorFileScopeActionResponseBuilder`](https://developers.google.com/apps-script/reference/card-service/editor-file-scope-action-response-builder.html).
@return An empty [`EditorFileScopeActionResponseBuilder`](https://developers.google.com/apps-script/reference/card-service/editor-file-scope-action-response-builder.html).*/newEditorFileScopeActionResponseBuilder():CardService.EditorFileScopeActionResponseBuilder;
/**Creates a new [`FixedFooter`](https://developers.google.com/apps-script/reference/card-service/fixed-footer.html).
@return An empty FixedFooter.*/newFixedFooter():CardService.FixedFooter;
/**Creates a new [`Grid`](https://developers.google.com/apps-script/reference/card-service/grid.html).
@return An empty Grid.*/newGrid():CardService.Grid;
/**Creates a new [`GridItem`](https://developers.google.com/apps-script/reference/card-service/grid-item.html).
@return An empty GridItem.*/newGridItem():CardService.GridItem;
/**Creates a new [`IconImage`](https://developers.google.com/apps-script/reference/card-service/icon-image.html).
@return An empty icon image.*/newIconImage():CardService.IconImage;
/**Creates a new [`Image`](https://developers.google.com/apps-script/reference/card-service/image.html).
@return An empty Image.*/newImage():CardService.Image;
/**Creates a new [`ImageButton`](https://developers.google.com/apps-script/reference/card-service/image-button.html).
@return An empty ImageButton.*/newImageButton():CardService.ImageButton;
/**Creates a new [`ImageComponent`](https://developers.google.com/apps-script/reference/card-service/image-component.html).
@return An empty ImageComponent.*/newImageComponent():CardService.ImageComponent;
/**Creates a new [`ImageCropStyle`](https://developers.google.com/apps-script/reference/card-service/image-crop-style.html).
@return An empty ImageCropStyle.*/newImageCropStyle():CardService.ImageCropStyle;
/**Creates a new ~~[`KeyValue`](https://developers.google.com/apps-script/reference/card-service/key-value.html)~~.
@return An empty KeyValue.*/newKeyValue():CardService.KeyValue;
/**Creates a new [`LinkPreview`](https://developers.google.com/apps-script/reference/card-service/link-preview.html).

```
const decoratedText = CardService.newDecoratedText()
    .setTopLabel('Hello')
    .setText('Hi!');

const cardSection = CardService.newCardSection()
    .addWidget(decoratedText);

const card = CardService.newCardBuilder()
    .addSection(cardSection)
    .build();

const linkPreview = CardService.newLinkPreview()
    .setPreviewCard(card)
    .setTitle('Smart chip title');
```
@return An empty LinkPreview.*/newLinkPreview():CardService.LinkPreview;
/**Creates a new [`MaterialIcon`](https://developers.google.com/apps-script/reference/card-service/material-icon.html).

Available for Google Chat apps and Google Workspace Add-ons.

```
const materialIcon = CardService.newMaterialIcon().setName('check_box').setFill(true);

const cardSection = CardService.newCardSection();
cardSection.addWidget(
    CardService.newDecoratedText()
         .setStartIcon(
              CardService.newIconImage().setMaterialIcon(materialIcon))
         .setText('sasha@example.com')));

const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle('Card Title'))
    .addSection(cardSection)
    .build();
```
@return An empty MaterialIcon.*/newMaterialIcon():CardService.MaterialIcon;
/**Creates a new [`Navigation`](https://developers.google.com/apps-script/reference/card-service/navigation.html).
@return An empty Navigation.*/newNavigation():CardService.Navigation;
/**Creates a new [`Notification`](https://developers.google.com/apps-script/reference/card-service/notification.html).
@return An empty Notification.*/newNotification():CardService.Notification;
/**Creates a new [`OpenLink`](https://developers.google.com/apps-script/reference/card-service/open-link.html).
@return An empty OpenLink.*/newOpenLink():CardService.OpenLink;
/**Creates a new [`OverflowMenu`](https://developers.google.com/apps-script/reference/card-service/overflow-menu.html).

Only available for Google Chat apps. Not available for Google Workspace Add-ons.

[Developer Preview](https://developers.google.com/workspace/preview).
@return An empty OverflowMenu.*/newOverflowMenu():CardService.OverflowMenu;
/**Creates a new [`OverflowMenuItem`](https://developers.google.com/apps-script/reference/card-service/overflow-menu-item.html).

Only available for Google Chat apps. Not available for Google Workspace Add-ons.

[Developer Preview](https://developers.google.com/workspace/preview).
@return An empty OverflowMenuItem.*/newOverflowMenuItem():CardService.OverflowMenuItem;
/**Creates a new [`SelectionInput`](https://developers.google.com/apps-script/reference/card-service/selection-input.html).
@return An empty SelectionInput.*/newSelectionInput():CardService.SelectionInput;
/**Creates a new [`Suggestions`](https://developers.google.com/apps-script/reference/card-service/suggestions.html).
@return An empty Suggestions.*/newSuggestions():CardService.Suggestions;
/**Creates a new [`SuggestionsResponseBuilder`](https://developers.google.com/apps-script/reference/card-service/suggestions-response-builder.html).
@return An empty SuggestionsResponse builder.*/newSuggestionsResponseBuilder():CardService.SuggestionsResponseBuilder;
/**Creates a new [`Switch`](https://developers.google.com/apps-script/reference/card-service/switch.html).
@return An empty Switch.*/newSwitch():CardService.Switch;
/**Creates a new [`TextButton`](https://developers.google.com/apps-script/reference/card-service/text-button.html).
@return An empty TextButton.*/newTextButton():CardService.TextButton;
/**Creates a new [`TextInput`](https://developers.google.com/apps-script/reference/card-service/text-input.html).
@return An empty TextInput.*/newTextInput():CardService.TextInput;
/**Creates a new [`TextParagraph`](https://developers.google.com/apps-script/reference/card-service/text-paragraph.html).
@return An empty TextParagraph.*/newTextParagraph():CardService.TextParagraph;
/**Creates a new [`TimePicker`](https://developers.google.com/apps-script/reference/card-service/time-picker.html).
@return An empty TimePicker.*/newTimePicker():CardService.TimePicker;
/**Creates a new [`UniversalActionResponseBuilder`](https://developers.google.com/apps-script/reference/card-service/universal-action-response-builder.html).
@return An empty UniversalActionResponse builder.*/newUniversalActionResponseBuilder():CardService.UniversalActionResponseBuilder;
/**Creates a new [`UpdateDraftActionResponseBuilder`](https://developers.google.com/apps-script/reference/card-service/update-draft-action-response-builder.html).
@return An empty UpdateDraftActionResponseBuilder.*/newUpdateDraftActionResponseBuilder():CardService.UpdateDraftActionResponseBuilder;
/**Creates a new [`UpdateDraftBccRecipientsAction`](https://developers.google.com/apps-script/reference/card-service/update-draft-bcc-recipients-action.html);
@return An empty UpdateDraftBccRecipientsAction.*/newUpdateDraftBccRecipientsAction():CardService.UpdateDraftBccRecipientsAction;
/**Creates a new [`UpdateDraftBodyAction`](https://developers.google.com/apps-script/reference/card-service/update-draft-body-action.html).
@return An empty UpdateDraftBodyAction.*/newUpdateDraftBodyAction():CardService.UpdateDraftBodyAction;
/**Creates a new [`UpdateDraftCcRecipientsAction`](https://developers.google.com/apps-script/reference/card-service/update-draft-cc-recipients-action.html).
@return An Empty UpdateDraftCcRecipientsAction.*/newUpdateDraftCcRecipientsAction():CardService.UpdateDraftCcRecipientsAction;
/**Creates a new [`UpdateDraftSubjectAction`](https://developers.google.com/apps-script/reference/card-service/update-draft-subject-action.html).
@return An empty UpdateDraftSubjectAction.*/newUpdateDraftSubjectAction():CardService.UpdateDraftSubjectAction;
/**Creates a new [`UpdateDraftToRecipientsAction`](https://developers.google.com/apps-script/reference/card-service/update-draft-to-recipients-action.html).
@return An empty UpdateDraftToRecipientsAction.*/newUpdateDraftToRecipientsAction():CardService.UpdateDraftToRecipientsAction;
/**Creates a new [`Validation`](https://developers.google.com/apps-script/reference/card-service/validation.html).

Available for Google Chat apps and Google Workspace Add-ons.

```
const validation = CardService.newValidation()
    .setCharacterLimit(5)
    .setInputType(CardService.InputType.EMAIL);
```

[Developer Preview](https://developers.google.com/workspace/preview).
@return An empty validation.*/newValidation():CardService.Validation;}module CardService{interface WrapStyle{}interface _WrapStyle{
/**No wrapping. Default.*/NOWRAP:WrapStyle;
/**Wraps the content for any widgets in a column.*/WRAP:WrapStyle;}interface Widget{}interface VerticalAlignment{}interface _VerticalAlignment{
/**Vertically places the content at the bottom of the container.*/BOTTOM:VerticalAlignment;
/**Vertically places the content at the center of the container. Default.*/CENTER:VerticalAlignment;
/**Vertically places the content at the top of the container.*/TOP:VerticalAlignment;}interface Validation{
/**Sets the character limit of the widget.

Available for Google Chat apps and Google Workspace Add-ons.
@param characterLimit The character limit to set. Note that this restriction is only effective
    for [`TextInput`](https://developers.google.com/apps-script/reference/card-service/text-input.html) and is ignored for other widgets.
@return This object, for chaining.*/setCharacterLimit(characterLimit:Integer):CardService.Validation;
/**Sets the input type of the widget.

Available for Google Chat apps and Google Workspace Add-ons.
@param inputType The [`InputType`](https://developers.google.com/apps-script/reference/card-service/input-type.html) to set.
@return This object, for chaining.*/setInputType(inputType:CardService.InputType):CardService.Validation;}interface UpdatedWidget{
/**Adds a new item that can be selected.

```
const updatedWidget = CardService.newUpdatedWidget()
    .addItem("item_one_title", "item_one_value", false, "item_one_uri", "item_one_bottom_text")
   .addItem("item_two_title", "item_two_value", false, "item_two_uri", "item_two_bottom_text");
```

Only available for Google Chat apps. Not available for Google Workspace Add-ons.
@param text The text to be shown for this item. Non-string primitive arguments are converted to
    strings automatically.
@param value The form input value that is sent via the callback. Non-string primitive arguments
    are converted to strings automatically.
@param selected Whether the item is selected by default. If the selection input only accepts
    one value (such as for radio buttons or a dropdown menu), only set this field for one item.
@param startIconUri For multiselect menus, the URL for the icon displayed next to the item's
    text field. Supports PNG and JPEG files.
@param bottomText For multiselect menus, a text description or label that's displayed below the
    item's text field.
@return This object, for chaining.*/addItem(text:Object,value:Object,selected:boolean,startIconUri:Object,bottomText:Object):CardService.UpdatedWidget;}interface UpdateDraftToRecipientsAction{
/**Updates the To recipients of an email draft.
@param toRecipientEmails The To recipients to insert to the email draft.
@return This object, for chaining.*/addUpdateToRecipients(toRecipientEmails:string[]):CardService.UpdateDraftToRecipientsAction;}interface UpdateDraftSubjectAction{
/**Updates the subject line of an email draft.
@param subject The subject line to insert to the email draft.
@return This object, for chaining.*/addUpdateSubject(subject:string):CardService.UpdateDraftSubjectAction;}interface UpdateDraftCcRecipientsAction{
/**Updates the Cc recipients of an email draft.
@param ccRecipientEmails The Cc recipients to insert to the email draft.
@return This object, for chaining.*/addUpdateCcRecipients(ccRecipientEmails:string[]):CardService.UpdateDraftCcRecipientsAction;}interface UpdateDraftBodyType{}interface _UpdateDraftBodyType{
/**Update actions insert content at the end of the message body. If an email signature is present,
in Gmail on the web, the update action inserts after the user's signature. In the Gmail mobile
app, the update action inserts before the user's signature.*/INSERT_AT_END:UpdateDraftBodyType;
/**Update actions insert content at the start of message body.*/INSERT_AT_START:UpdateDraftBodyType;
/**Default. Update actions insert content at the current cursor position, replacing any selected
content.*/IN_PLACE_INSERT:UpdateDraftBodyType;}interface UpdateDraftBodyAction{
/**Adds the specified content to the draft body. The type of the `content` is specified by
[`ContentType`](https://developers.google.com/apps-script/reference/card-service/content-type.html).
@param content The content to insert to the email draft.
@param contentType The content type of the content to be inserted.
@return This object, for chaining.*/addUpdateContent(content:string,contentType:CardService.ContentType):CardService.UpdateDraftBodyAction;
/**Sets the [`UpdateDraftBodyType`](https://developers.google.com/apps-script/reference/card-service/update-draft-body-type.html) of this update action on the draft body. For example,
inserting content at the start, end, or cursor position of the draft body.
@param updateType The type of update to be performed on an email draft.
@return This object, for chaining.*/setUpdateType(updateType:CardService.UpdateDraftBodyType):CardService.UpdateDraftBodyAction;}interface UpdateDraftBccRecipientsAction{
/**Updates the Bcc recipients of an email draft.
@param bccRecipientEmails The Bcc recipients to insert to the email draft.
@return This object, for chaining.*/addUpdateBccRecipients(bccRecipientEmails:string[]):CardService.UpdateDraftBccRecipientsAction;}interface UpdateDraftActionResponseBuilder{
/**Builds the current update draft action response and validates it.
@return A validated draft action response.*/build():CardService.UpdateDraftActionResponse;
/**Sets an action that updates the email Bcc recipients of a draft.
@param updateDraftBccRecipientsAction The action that updates the draft Bcc recipients.
@return This object, for chaining.*/setUpdateDraftBccRecipientsAction(updateDraftBccRecipientsAction:CardService.UpdateDraftBccRecipientsAction):CardService.UpdateDraftActionResponseBuilder;
/**Set an action that updates the email body of a draft.
@param updateDraftBodyAction The action that updates the draft body.
@return This object, for chaining.*/setUpdateDraftBodyAction(updateDraftBodyAction:CardService.UpdateDraftBodyAction):CardService.UpdateDraftActionResponseBuilder;
/**Sets an action that updates the Cc recipients of a draft.
@param updateDraftCcRecipientsAction The action that updates the draft Cc recipients.
@return This object, for chaining.*/setUpdateDraftCcRecipientsAction(updateDraftCcRecipientsAction:CardService.UpdateDraftCcRecipientsAction):CardService.UpdateDraftActionResponseBuilder;
/**Sets an action that updates the subject line of a draft.
@param updateDraftSubjectAction The action that updates the subject line.
@return This object, for chaining.*/setUpdateDraftSubjectAction(updateDraftSubjectAction:CardService.UpdateDraftSubjectAction):CardService.UpdateDraftActionResponseBuilder;
/**Sets an action that updates the To recipients of a draft.
@param updateDraftToRecipientsAction The action that updates the To recipients.
@return This object, for chaining.*/setUpdateDraftToRecipientsAction(updateDraftToRecipientsAction:CardService.UpdateDraftToRecipientsAction):CardService.UpdateDraftActionResponseBuilder;}interface UpdateDraftActionResponse{printJson():string;}interface UniversalActionResponseBuilder{
/**Builds the current universal action response and validates it.
@return A validated UniversalActionResponse.*/build():CardService.UniversalActionResponse;
/**Displays the add-on with the specified cards.
@param cardObjects An array of [`Card`](https://developers.google.com/apps-script/reference/card-service/card.html)s to display.
@return This object, for chaining.*/displayAddOnCards(cardObjects:Object[]):CardService.UniversalActionResponseBuilder;
/**Sets the URL to open when the universal action is selected.
@param openLink The link object to use.
@return This object, for chaining.*/setOpenLink(openLink:CardService.OpenLink):CardService.UniversalActionResponseBuilder;}interface UniversalActionResponse{printJson():string;}interface TimePicker{
/**Sets the field name that identifies this picker in the event object that is generated when
there is a UI interaction. The field name is visible to the user. Required; the specified field
name must be unique.
@param fieldName The name to assign to this input.
@return This picker, for chaining.*/setFieldName(fieldName:string):CardService.TimePicker;
/**Sets the prefilled hours value to set in the input field.
@param hours The default hour value placed in the input, range from 0 to 23. It is always
    represented as a string in the form callback parameters.
@return This picker, for chaining.*/setHours(hours:Integer):CardService.TimePicker;
/**Sets the prefilled minutes value to set in the input field.
@param minutes The default minutes value placed in the input, range from 0 to 59. It is always
    represented as a string in the form callback parameters.
@return This picker, for chaining.*/setMinutes(minutes:Integer):CardService.TimePicker;
/**Sets an [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) that the script performs whenever the picker input changes.
@param action The action to take.
@return This picker, for chaining.*/setOnChangeAction(action:CardService.Action):CardService.TimePicker;
/**Sets the title displayed above the input field.
@param title The input field title.
@return This picker, for chaining.*/setTitle(title:string):CardService.TimePicker;}interface TextParagraph{
/**Sets the maximum number of lines of text that are displayed in the widget. If the text exceeds
the specified maximum number of lines, the excess content is concealed behind a "show more"
button. If the text is equal or shorter than the specified maximum number of lines, a "show
more" button isn't displayed.

Only available for Google Chat apps. Not available for Google Workspace Add-ons.

[Developer Preview](https://developers.google.com/workspace/preview).
@param maxLines The maximum number of lines of text that are displayed.
@return This object, for chaining.*/setMaxLines(maxLines:Integer):CardService.TextParagraph;
/**Sets the text of the paragraph. Required.
@param text The text to display.
@return This object, for chaining.*/setText(text:string):CardService.TextParagraph;}interface TextInput{
/**Sets the key that identifies this text input in the event object that is generated when there
is a UI interaction. Not visible to the user. Required, must be unique.
@param fieldName The key that is used to identify this input.
@return This object, for chaining.*/setFieldName(fieldName:string):CardService.TextInput;
/**Sets a hint for the text input. Used to give the user extra guidance on what to input. For
example, a hint could describe formatting ("xxx-xxx-xxxx") for a phone number field.
@param hint The text hint to display below the input field. This text is always visible.
@return This object, for chaining.*/setHint(hint:string):CardService.TextInput;
/**Sets whether the input text shows on one line or multiple lines.
@param multiline The multiline setting.
@return This object, for chaining.*/setMultiline(multiline:boolean):CardService.TextInput;
/**Sets an action to be performed whenever the text input changes.
@param action The action to take.
@return This object, for chaining.*/setOnChangeAction(action:CardService.Action):CardService.TextInput;
/**Sets the suggestions for autocompletion in the text field.
@param suggestions The collection of suggestions to use.
@return This object, for chaining.*/setSuggestions(suggestions:CardService.Suggestions):CardService.TextInput;
/**Sets the callback action to fetch suggestions based on user input for autocompletion. The
[`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`SuggestionsResponse`](https://developers.google.com/apps-script/reference/card-service/suggestions-response.html) object.

```
var action = CardService.newAction()
    .setFunctionName('suggestionCallback')
    .setParameters({'numSuggestions': 3});

CardService.newTextInput()
    .setFieldName('option-field')
    .setTitle('Option Selected')
    .setSuggestionsAction(action);

// ...

function suggestionCallback(e) {
  var suggestions = CardService.newSuggestions();
  var numSuggestions = parseInt(e.parameter['numSuggestions']);
  for(var i = 1; i <= numSuggestions; i++) {
    suggestions.addSuggestion('Suggestion ' + i);
  }
  return CardService.newSuggestionsResponseBuilder()
      .setSuggestions(suggestions)
      .build();
}
```
@param suggestionsAction The action that fetches suggestions for this input.
@return This object, for chaining.*/setSuggestionsAction(suggestionsAction:CardService.Action):CardService.TextInput;
/**Sets the title to be shown above the input field. Required.
@param title The text label for this input.
@return This object, for chaining.*/setTitle(title:string):CardService.TextInput;
/**Sets the validation rule for this widget.

```
const validation = CardService.newValidation()
  .setCharacterLimit('10')
  .setType(CardService.InputType.TEXT);

const input = CardService.newTextInput()
  .setFieldName('text_name_xxx1')
  .setTitle('Max 10 characters')
  .setValidation(validation);
```

[Developer Preview](https://developers.google.com/workspace/preview).
@param validation The validation rule for this [`TextInput`](https://developers.google.com/apps-script/reference/card-service/text-input.html) widget.
@return This object, for chaining.*/setValidation(validation:CardService.Validation):CardService.TextInput;
/**Sets the pre-filled value to be set in the input field.
@param value The default value placed in the input. It is always represented as a string in the
    form callback parameters.
@return This object, for chaining.*/setValue(value:string):CardService.TextInput;}interface TextButtonStyle{}interface _TextButtonStyle{
/**Normal text button with no border.

[Developer Preview](https://developers.google.com/workspace/preview).*/BORDERLESS:TextButtonStyle;
/**Text button with colored background.*/FILLED:TextButtonStyle;
/**Normal text button with an alternative middle ground between filled and outlined buttons.

[Developer Preview](https://developers.google.com/workspace/preview).*/FILLED_TONAL:TextButtonStyle;
/**Normal text button with clear background. Default.*/OUTLINED:TextButtonStyle;
/**DO NOT USE. Deprecated version of OUTLINED. Do not remove the field until it is confirmed not
being used by any apps.*/TEXT:TextButtonStyle;}interface TextButton{
/**Sets the alternative text of the button for accessibility. If unset, defaults to the text that
displays on the button.
@param altText The alternative text to assign to this button.
@return This object, for chaining.*/setAltText(altText:string):CardService.TextButton;
/**Sets an authorization action that opens a URL to the authorization flow when the object is
clicked. This opens the URL in a new window. When the user finishes the authorization flow and
returns to the application, the add-on reloads.

A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/text-button.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/text-button.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/text-button.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/text-button.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/text-button.html#setComposeAction(Action,ComposedEmailType)) set.

```
// ...

var action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);

```
@param action The object that specifies the authorization action to take when this element is
    clicked.
@return This object, for chaining.*/setAuthorizationAction(action:CardService.AuthorizationAction):CardService.TextButton;
/**Sets the background color for [`TextButtonStyle.FILLED`](https://developers.google.com/apps-script/reference/card-service/text-button-style.html#FILLED) button. If unset for a [`TextButtonStyle.FILLED`](https://developers.google.com/apps-script/reference/card-service/text-button-style.html#FILLED) button, the button uses the secondary color defined in the add-on [manifest](/gmail/add-ons/concepts/manifests#manifest_structure_for_gmail_add-ons).
This method is a no-op for [`TextButtonStyle.OUTLINED`](https://developers.google.com/apps-script/reference/card-service/text-button-style.html#OUTLINED) buttons.
@param backgroundColor The color in #rgb format.
@return This object, for chaining.*/setBackgroundColor(backgroundColor:string):CardService.TextButton;
/**Sets an action that composes a draft email when the object is clicked. A UI object can only
have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/text-button.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/text-button.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/text-button.html#setOnClickOpenLinkAction(Action)),
[`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/text-button.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/text-button.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ComposeActionResponse`](https://developers.google.com/apps-script/reference/card-service/compose-action-response.html) object configured using [`ComposeActionResponseBuilder.setGmailDraft(draft)`](https://developers.google.com/apps-script/reference/card-service/compose-action-response-builder.html#setGmailDraft(GmailDraft)).

__Note__: This method doesn't set a __compose action__ that is
used to [extend the compose UI](/gmail/add-ons/how-tos/extending-compose-ui).
Rather, this method connects this UI element to an [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) that [composes draft messages](/gmail/add-ons/how-tos/compose) in Apps Script that are
opened in Gmail when the action completes. 

```
// ...

var action = CardService.newAction().setFunctionName('composeEmailCallback');
CardService.newTextButton()
    .setText('Compose Email')
    .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);

// ...

function composeEmailCallback() {
  var thread = GmailApp.getThreadById(e.threadId);
  var draft = thread.createDraftReply('This is a reply');
  return CardService.newComposeActionResponseBuilder()
      .setGmailDraft(draft)
      .build();
}
```
@param action The object that specifies the compose action to take when this element is
    clicked.
@param composedEmailType An enum value that specifies whether the composed draft is a
    standalone or reply draft.
@return This object, for chaining.*/setComposeAction(action:CardService.Action,composedEmailType:CardService.ComposedEmailType):CardService.TextButton;
/**Sets whether the button is disabled. A disabled button is greyed out and cannot be clicked.
@param disabled The disabled state.
@return This object, for chaining.*/setDisabled(disabled:boolean):CardService.TextButton;
/**Sets a predefined [`Icon`](https://developers.google.com/apps-script/reference/card-service/icon.html) to display on the button. Either this or [`setIconUrl(url)`](https://developers.google.com/apps-script/reference/card-service/text-button.html#setIconUrl(String))
must be used to define the button image.
@param icon One of the predefined [`Icon`](https://developers.google.com/apps-script/reference/card-service/icon.html) values.
@return This object, for chaining.*/setIcon(icon:CardService.Icon):CardService.TextButton;
/**Sets the URL of an image to use as this button's icon. Either this or [`setIcon(icon)`](https://developers.google.com/apps-script/reference/card-service/text-button.html#setIcon(Icon)) must be
used to define the button image.
@param url The URL address of a hosted image to use as this button's icon.
@return This object, for chaining.*/setIconUrl(url:string):CardService.TextButton;
/**Sets the material design icon.

```
const textButton = CardService.newTextButton()
   .setMaterialIcon(CardService.newMaterialIcon().setName('search'));
```
@param icon The material design icon.
@return This object, for chaining.*/setMaterialIcon(icon:CardService.MaterialIcon):CardService.TextButton;
/**Sets an action that executes when the object is clicked. A UI object can only have one of
[`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/text-button.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/text-button.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/text-button.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/text-button.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/text-button.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ActionResponse`](https://developers.google.com/apps-script/reference/card-service/action-response.html) object.

```
// ...

var action = CardService.newAction().setFunctionName('notificationCallback');
CardService.newTextButton().setText('Create notification').setOnClickAction(action);

// ...

function notificationCallback() {
  return CardService.newActionResponseBuilder()
      .setNotification(CardService.newNotification()
          .setText("Some info to display to user"))
      .build();
}
```
@param action The action to take when this element is clicked.
@return This object, for chaining.*/setOnClickAction(action:CardService.Action):CardService.TextButton;
/**Sets an action that opens a URL in a tab when the object is clicked. Use this function when the
URL needs to be built or when you need to take other actions in addition to creating the [`OpenLink`](https://developers.google.com/apps-script/reference/card-service/open-link.html) object. A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/text-button.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/text-button.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/text-button.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/text-button.html#setAuthorizationAction(AuthorizationAction)), or
[`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/text-button.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ActionResponse`](https://developers.google.com/apps-script/reference/card-service/action-response.html) object configured using [`ActionResponseBuilder.setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/action-response-builder.html#setOpenLink(OpenLink)).

```
// ...

var action = CardService.newAction().setFunctionName('openLinkCallback');
CardService.newTextButton().setText('Open Link').setOnClickOpenLinkAction(action);

// ...

function openLinkCallback() {
  return CardService.newActionResponseBuilder()
      .setOpenLink(CardService.newOpenLink()
          .setUrl('https://www.google.com'))
      .build();
}
```
@param action The object that specifies the open link action to take when this element is
    clicked.
@return This object, for chaining.*/setOnClickOpenLinkAction(action:CardService.Action):CardService.TextButton;
/**Sets a URL to be opened when the object is clicked. Use this function when the URL is already
known and only needs to be opened. A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/text-button.html#setOpenLink(OpenLink)),
[`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/text-button.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/text-button.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/text-button.html#setAuthorizationAction(AuthorizationAction)),
or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/text-button.html#setComposeAction(Action,ComposedEmailType)) set.
@param openLink An [`OpenLink`](https://developers.google.com/apps-script/reference/card-service/open-link.html) object describing the URL to open.
@return This object, for chaining.*/setOpenLink(openLink:CardService.OpenLink):CardService.TextButton;
/**Sets a pop-up menu to be opened when the object is clicked. Each item in the menu can specify
an action to be triggered when clicked. Nested menus are not supported, actions for menu items
should not specify an overflow menu.

Only available for Google Chat apps. Not available for Google Workspace Add-ons.

```
  var overflowMenuItem = CardService.newOverflowMenuItem()
    .setStartIcon(CardService.newIconImage()
    .setIconUrl("https://www.google.com/images/branding/googleg/1x/googleg_standard_color_64dp.png"))
    .setText("Open Link")
    .setOpenLink(CardService.newOpenLink()
        .setUrl("https://www.google.com"));

var overflowMenu = CardService.newOverflowMenu()
    .addMenuItem(overflowMenuItem).build();
```

[Developer Preview](https://developers.google.com/workspace/preview).
@param menu The object that specifies the overflow menu to display when this element is
    clicked.
@return This object, for chaining.*/setOverflowMenu(menu:CardService.OverflowMenu):CardService.TextButton;
/**Sets the text that displays on the button.
@param text The text that appears on the button.
@return This object, for chaining.*/setText(text:string):CardService.TextButton;
/**Sets the button style. If unset, it defaults to [`TextButtonStyle.OUTLINED`](https://developers.google.com/apps-script/reference/card-service/text-button-style.html#OUTLINED) button.

```
const button = CardService.newTextButton()
      .setText("Filled")
      .setTextButtonStyle(CardService.TextButtonStyle.FILLED)
      .setOpenLink(CardService.newOpenLink()
        .setUrl("www.google.com"));
```
@param textButtonStyle The button style.
@return This object, for chaining.*/setTextButtonStyle(textButtonStyle:CardService.TextButtonStyle):CardService.TextButton;}interface SwitchControlType{}interface _SwitchControlType{
/**Checkbox-styled control for a switch widget.*/CHECK_BOX:SwitchControlType;
/**Toggle-styled control for a switch widget. Default.*/SWITCH:SwitchControlType;}interface Switch{
/**Sets the control type of the switch. Defaults to `SWITCH`.
@param controlType The switch control type.
@return This object, for chaining.*/setControlType(controlType:CardService.SwitchControlType):CardService.Switch;
/**Sets the key that identifies this switch in the event object that is generated when there is a
UI interaction. Not visible to the user. Required.

Unlike other form fields, this field name does not need to be unique. The form input values
for switches using the same field name are returned as an array. The array consists of the
values for all enabled switches with that field name.
@param fieldName The key that is used to identify this switch.
@return This object, for chaining.*/setFieldName(fieldName:string):CardService.Switch;
/**Sets the action to take when the switch is toggled.
@param action The action to take when the switch is toggled.
@return This object, for chaining.*/setOnChangeAction(action:CardService.Action):CardService.Switch;
/**Sets whether this switch should start as selected or unselected.
@param selected The starting switch state setting.
@return This object, for chaining.*/setSelected(selected:boolean):CardService.Switch;
/**Sets the value that is sent as the form input when this switch is toggled on.
@param value The value associated with the name when the switch is on. When this is sent to the
    form callback, it is always represented as a string.
@return This object, for chaining.*/setValue(value:string):CardService.Switch;}interface SuggestionsResponseBuilder{
/**Builds the current suggestions response and validates it.
@return A validated SuggestionsResponse.*/build():CardService.SuggestionsResponse;
/**Sets the suggestions used in auto complete in text fields.
@param suggestions The [`Suggestions`](https://developers.google.com/apps-script/reference/card-service/suggestions.html) to use.
@return This object.*/setSuggestions(suggestions:CardService.Suggestions):CardService.SuggestionsResponseBuilder;}interface SuggestionsResponse{printJson():string;}interface Suggestions{
/**Add a text suggestion.
@param suggestion The suggestion text.
@return This object, for chaining.*/addSuggestion(suggestion:string):CardService.Suggestions;
/**Add a list of text suggestions.
@param suggestions An array of string suggestions.
@return This object, for chaining.*/addSuggestions(suggestions:Object[]):CardService.Suggestions;}interface Status{}interface _Status{
/**The operation was aborted, typically due to a concurrency issue such as a sequencer check
failure or transaction abort. HTTP Mapping: 409 Conflict*/ABORTED:Status;
/**The entity that a client attempted to create already exists. HTTP Mapping: 409 Conflict*/ALREADY_EXISTS:Status;
/**HTTP Mapping: 499 Client Closed Request*/CANCELLED:Status;
/**Unrecoverable data loss or corruption. HTTP Mapping: 500 Internal Server Error.*/DATA_LOSS:Status;
/**HTTP Mapping: 504 Gateway Timeout*/DEADLINE_EXCEEDED:Status;
/**The operation was rejected because the system is not in a state required for the operation's
execution. HTTP Mapping: 400 Bad Request*/FAILED_PRECONDITION:Status;
/**Internal errors. This means that some invariants expected by the underlying system have been
broken. This error code is reserved for serious errors. HTTP Mapping: 500 Internal Server
Error*/INTERNAL:Status;
/**The client specified an invalid argument. HTTP Mapping: 400 Bad Request*/INVALID_ARGUMENT:Status;
/**HTTP Mapping: 404 Not Found*/NOT_FOUND:Status;
/**HTTP Mapping: 200 OK*/OK:Status;
/**The operation was attempted past the valid range. HTTP Mapping: 400 Bad Request*/OUT_OF_RANGE:Status;
/**HTTP Mapping: 403 Forbidden*/PERMISSION_DENIED:Status;
/**HTTP Mapping: 429 Too Many Requests*/RESOURCE_EXHAUSTED:Status;
/**HTTP Mapping: 401 Unauthorized*/UNAUTHENTICATED:Status;
/**HTTP Mapping: 503 Service Unavailable*/UNAVAILABLE:Status;
/**HTTP Mapping: 501 Not Implemented*/UNIMPLEMENTED:Status;
/**Unknown error. HTTP Mapping: 500 Internal Server Error*/UNKNOWN:Status;}interface SelectionInputType{}interface _SelectionInputType{
/**Checkbox input style. Default.*/CHECK_BOX:SelectionInputType;
/**Dropdown menu selection input style.*/DROPDOWN:SelectionInputType;
/**A multiselect menu for static or dynamic data.*/MULTI_SELECT:SelectionInputType;
/**Radio button input style. At most one item in the group can be selected.*/RADIO_BUTTON:SelectionInputType;
/**A set of switches. Users can turn on one or more switches.*/SWITCH:SelectionInputType;}interface SelectionInput{
/**Adds a new item that can be selected.
@param text The text to be shown for this item. Non-string primitive arguments are converted to
    strings automatically.
@param value The form input value that is sent via the callback. Non-string primitive arguments
    are converted to strings automatically.
@param selected Whether the item is selected by default. If the selection input only accepts
    one value (such as for radio buttons or a dropdown menu), only set this field for one item.
@return This object, for chaining.*/addItem(text:Object,value:Object,selected:boolean):CardService.SelectionInput;
/**Adds a new item that can be selected, for multi-select menus.

```
const multiSelect = CardService.newSelectionInput()
    .setType(CardService.SelectionInputType.MULTI_SELECT)
    .setFieldName("multiselect")
    .setTitle("A multi select input example.")
    .addMultiSelectItem("Contact 1", "contact-1", false,
       "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
       "Contact one description")
    .addMultiSelectItem("Contact 2", "contact-2", false,
       "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
       "Contact two description")
    .addMultiSelectItem("Contact 3", "contact-3", false,
       "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
       "Contact three description")
    .addMultiSelectItem("Contact 4", "contact-4", false,
       "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
       "Contact four description")
    .addMultiSelectItem("Contact 5", "contact-5", false,
       "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
       "Contact five description");
```
@param text The text to be shown for this item. Non-string primitive arguments are converted to
    strings automatically.
@param value The form input value that is sent via the callback. Non-string primitive arguments
    are converted to strings automatically.
@param selected Whether the item is selected by default. If the selection input only accepts
    one value (such as for radio buttons or a dropdown menu), only set this field for one item.
@param startIconUri For multiselect menus, the URL for the icon displayed next to the item's
    text field. Supports PNG and JPEG files.
@param bottomText For multiselect menus, a text description or label that's displayed below the
    item's text field.
@return This object, for chaining.*/addMultiSelectItem(text:Object,value:Object,selected:boolean,startIconUri:Object,bottomText:Object):CardService.SelectionInput;
/**Sets external data source, such as a relational data base.

```
const multiSelect = CardService.newSelectionInput()
    .setType(CardService.SelectionInputType.MULTI_SELECT)
    .setFieldName("contacts")
    .setTitle("Selected contacts")
    .addMultiSelectItem("Contact 3", "contact-3", false,
       "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
       "Contact three description")
    .setMultiSelectMaxSelectedItems(5)
    .setMultiSelectMinQueryLength(2)
    .setExternalDataSource(CardService.newAction().setFunctionName("getContacts"));
```
@param action The external data source.
@return This object, for chaining.*/setExternalDataSource(action:CardService.Action):CardService.SelectionInput;
/**Sets the key that identifies this selection input in the event object that is generated when
there is a UI interaction. Not visible to the user. Required, must be unique.
@param fieldName The name to assign to this input.
@return This object, for chaining.*/setFieldName(fieldName:string):CardService.SelectionInput;
/**Sets the maximum number of items that a user can select.

```
const multiSelect = CardService.newSelectionInput()
    .setType(CardService.SelectionInputType.MULTI_SELECT)
    .setFieldName("multiselect")
    .setTitle("A multi select input example.")
    .setMultiSelectMaxSelectedItems(3)
    .addMultiSelectItem("Contact 1", "contact-1", false,
       "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
       "Contact one description")
    .addMultiSelectItem("Contact 2", "contact-2", false,
       "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
       "Contact two description")
    .addMultiSelectItem("Contact 3", "contact-3", false,
       "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
       "Contact three description")
    .addMultiSelectItem("Contact 4", "contact-4", false,
       "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
       "Contact four description")
    .addMultiSelectItem("Contact 5", "contact-5", false,
       "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
       "Contact five description");
```
@param maxSelectedItems The maximum number of items.
@return This object, for chaining.*/setMultiSelectMaxSelectedItems(maxSelectedItems:Integer):CardService.SelectionInput;
/**Sets the number of text characters that a user inputs before the app queries autocomplete and
displays suggested items on the card.

```
const multiSelect = CardService.newSelectionInput()
    .setType(CardService.SelectionInputType.MULTI_SELECT)
    .setFieldName("multiselect")
    .setTitle("A multi select input example.")
    .setMultiSelectMinQueryLength(1)
    .addMultiSelectItem("Contact 1", "contact-1", false,
       "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
       "Contact one description")
    .addMultiSelectItem("Contact 2", "contact-2", false,
       "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
       "Contact two description")
    .addMultiSelectItem("Contact 3", "contact-3", false,
       "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
       "Contact three description")
    .addMultiSelectItem("Contact 4", "contact-4", false,
       "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
       "Contact four description")
    .addMultiSelectItem("Contact 5", "contact-5", false,
       "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
       "Contact five description");
```
@param queryLength The number of text characters.
@return This object, for chaining.*/setMultiSelectMinQueryLength(queryLength:Integer):CardService.SelectionInput;
/**Sets an [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) to be performed whenever the selection input changes.
@param action The action to take.
@return This object, for chaining.*/setOnChangeAction(action:CardService.Action):CardService.SelectionInput;
/**Sets a data source from Google Workspace. Used to populate items in a multiselect menu.

```
const multiSelect = CardService.newSelectionInput()
    .setType(CardService.SelectionInputType.MULTI_SELECT)
    .setFieldName("contacts")
    .setTitle("Selected contacts")
    .setPlatformDataSource(
       CardService.newPlatformDataSource()
         .setCommonDataSource(CardService.CommonDataSource.USER));
```

Only available for Google Chat apps. Not available for Google Workspace Add-ons.
@param platformDataSource The data source.
@return This object, for chaining.*/setPlatformDataSource(platformDataSource:CardService.PlatformDataSource):CardService.SelectionInput;
/**Sets the title to be shown ahead of the input field.
@param title The input field title.
@return This object, for chaining.*/setTitle(title:string):CardService.SelectionInput;
/**Sets the type of this input. Defaults to `CHECKBOX`.
@param type The selection type.
@return This object, for chaining.*/setType(type:CardService.SelectionInputType):CardService.SelectionInput;}interface ResponseType{}interface _ResponseType{
/**Presents a dialog.*/DIALOG:ResponseType;
/**Post as a new message in the topic.*/NEW_MESSAGE:ResponseType;
/**Privately ask the user for additional authentication or configuration.*/REQUEST_CONFIG:ResponseType;
/**Default type that's handled as `NEW_MESSAGE`.*/TYPE_UNSPECIFIED:ResponseType;
/**Update the Chat app's message. This is only permitted on a `CARD_CLICKED` event where
the message sender type is `BOT`.*/UPDATE_MESSAGE:ResponseType;
/**Update the cards on a user's message. This is only permitted as a response to a `MESSAGE` event with a matched URL, or a `CARD_CLICKED` event where the message sender
type is `HUMAN`. Text is ignored.*/UPDATE_USER_MESSAGE_CARDS:ResponseType;
/**Widget text autocomplete options query.*/UPDATE_WIDGET:ResponseType;}interface PlatformDataSource{
/**Sets the data source from Google Workspace.

```
const platformDataSource = CardService.newPlatformDataSource()
     .setCommonDataSource(CardService.CommonDataSource.USER);

const multiSelect = CardService.newSelectionInput()
    .setType(CardService.SelectionInputType.MULTI_SELECT)
    .setFieldName("contacts")
    .setTitle("Selected contacts")
    .setMultiSelectMaxSelectedItems(5)
    .setMultiSelectMinQueryLength(1)
    .setPlatformDataSource(platformDataSource);
```

Only available for Google Chat apps. Not available for Google Workspace Add-ons.
@param commonDataSource The data source to be set.
@return This object, for chaining.*/setCommonDataSource(commonDataSource:CardService.CommonDataSource):CardService.PlatformDataSource;
/**Used to populate spaces in multiselect menu.

```
const chatSpaceDataSource = CardService.newChatSpaceDataSource()
    .setDefaultToCurrentSpace(true);

const chatClientDataSource = CardService.newChatClientDataSource()
    .setSpaceDataSource(chatSpaceDataSource);

const hostAppDataSource = CardService.newHostAppDataSource()
    .setChatDataSource(chatClientDataSource);

const platformDataSource = CardService.newPlatformDataSource()
    .setHostAppDataSource(hostAppDataSource);

const multiSelect = CardService.newSelectionInput()
    .setType(CardService.SelectionInputType.MULTI_SELECT)
    .setFieldName("contacts")
    .setTitle("Selected contacts")
    .setMultiSelectMaxSelectedItems(5)
    .setMultiSelectMinQueryLength(1)
    .setPlatformDataSource(platformDataSource);
```

Only available for Google Chat apps. Not available for Google Workspace Add-ons.
@param hostAppDataSource The data source to be set.
@return This object, for chaining.*/setHostAppDataSource(hostAppDataSource:CardService.HostAppDataSource):CardService.PlatformDataSource;}interface OverflowMenuItem{
/**Sets an authorization action that opens a URL to the authorization flow when the object is
clicked. This opens the URL in a new window. When the user finishes the authorization flow and
returns to the application, the add-on reloads.

A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/overflow-menu-item.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/overflow-menu-item.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/overflow-menu-item.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/overflow-menu-item.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/overflow-menu-item.html#setComposeAction(Action,ComposedEmailType)) set.

```
// ...

var action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);

```
@param action The object that specifies the authorization action to take when this element is
    clicked.
@return This object, for chaining.*/setAuthorizationAction(action:CardService.AuthorizationAction):CardService.OverflowMenuItem;
/**Sets an action that composes a draft email when the object is clicked. A UI object can only
have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/overflow-menu-item.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/overflow-menu-item.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/overflow-menu-item.html#setOnClickOpenLinkAction(Action)),
[`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/overflow-menu-item.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/overflow-menu-item.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ComposeActionResponse`](https://developers.google.com/apps-script/reference/card-service/compose-action-response.html) object configured using [`ComposeActionResponseBuilder.setGmailDraft(draft)`](https://developers.google.com/apps-script/reference/card-service/compose-action-response-builder.html#setGmailDraft(GmailDraft)).

__Note__: This method doesn't set a __compose action__ that is
used to [extend the compose UI](/gmail/add-ons/how-tos/extending-compose-ui).
Rather, this method connects this UI element to an [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) that [composes draft messages](/gmail/add-ons/how-tos/compose) in Apps Script that are
opened in Gmail when the action completes. 

```
// ...

var action = CardService.newAction().setFunctionName('composeEmailCallback');
CardService.newTextButton()
    .setText('Compose Email')
    .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);

// ...

function composeEmailCallback() {
  var thread = GmailApp.getThreadById(e.threadId);
  var draft = thread.createDraftReply('This is a reply');
  return CardService.newComposeActionResponseBuilder()
      .setGmailDraft(draft)
      .build();
}
```
@param action The object that specifies the compose action to take when this element is
    clicked.
@param composedEmailType An enum value that specifies whether the composed draft is a
    standalone or reply draft.
@return This object, for chaining.*/setComposeAction(action:CardService.Action,composedEmailType:CardService.ComposedEmailType):CardService.OverflowMenuItem;
/**Sets whether the menu item is disabled. A disabled item is greyed out and cannot be clicked.
@param disabled The disabled state.
@return This object, for chaining.*/setDisabled(disabled:boolean):CardService.OverflowMenuItem;
/**Sets an action that executes when the object is clicked. A UI object can only have one of
[`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/overflow-menu-item.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/overflow-menu-item.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/overflow-menu-item.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/overflow-menu-item.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/overflow-menu-item.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ActionResponse`](https://developers.google.com/apps-script/reference/card-service/action-response.html) object.

```
// ...

var action = CardService.newAction().setFunctionName('notificationCallback');
CardService.newTextButton().setText('Create notification').setOnClickAction(action);

// ...

function notificationCallback() {
  return CardService.newActionResponseBuilder()
      .setNotification(CardService.newNotification()
          .setText("Some info to display to user"))
      .build();
}
```
@param action The action to take when this element is clicked.
@return This object, for chaining.*/setOnClickAction(action:CardService.Action):CardService.OverflowMenuItem;
/**Sets an action that opens a URL in a tab when the object is clicked. Use this function when the
URL needs to be built or when you need to take other actions in addition to creating the [`OpenLink`](https://developers.google.com/apps-script/reference/card-service/open-link.html) object. A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/overflow-menu-item.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/overflow-menu-item.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/overflow-menu-item.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/overflow-menu-item.html#setAuthorizationAction(AuthorizationAction)), or
[`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/overflow-menu-item.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ActionResponse`](https://developers.google.com/apps-script/reference/card-service/action-response.html) object configured using [`ActionResponseBuilder.setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/action-response-builder.html#setOpenLink(OpenLink)).

```
// ...

var action = CardService.newAction().setFunctionName('openLinkCallback');
CardService.newTextButton().setText('Open Link').setOnClickOpenLinkAction(action);

// ...

function openLinkCallback() {
  return CardService.newActionResponseBuilder()
      .setOpenLink(CardService.newOpenLink()
          .setUrl('https://www.google.com'))
      .build();
}
```
@param action The object that specifies the open link action to take when this element is
    clicked.
@return This object, for chaining.*/setOnClickOpenLinkAction(action:CardService.Action):CardService.OverflowMenuItem;
/**Sets a URL to be opened when the object is clicked. Use this function when the URL is already
known and only needs to be opened. A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/overflow-menu-item.html#setOpenLink(OpenLink)),
[`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/overflow-menu-item.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/overflow-menu-item.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/overflow-menu-item.html#setAuthorizationAction(AuthorizationAction)),
or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/overflow-menu-item.html#setComposeAction(Action,ComposedEmailType)) set.
@param openLink An [`OpenLink`](https://developers.google.com/apps-script/reference/card-service/open-link.html) object describing the URL to open.
@return This object, for chaining.*/setOpenLink(openLink:CardService.OpenLink):CardService.OverflowMenuItem;
/**Sets the menu item's leading icon.
@param icon The icon to display.
@return This object, for chaining.*/setStartIcon(icon:CardService.IconImage):CardService.OverflowMenuItem;
/**Sets the title of the menu item. Required.
@param text The text to display.
@return This object, for chaining.*/setText(text:string):CardService.OverflowMenuItem;}interface OverflowMenu{
/**Adds a menu item.

[Developer Preview](https://developers.google.com/workspace/preview).
@param menuItem The menu item to add.
@return This object, for chaining.*/addMenuItem(menuItem:CardService.OverflowMenuItem):CardService.OverflowMenu;}interface OpenLink{
/**Sets the behavior of the URL action when the URL window or tab is closed.
@param onClose The closing setting.
@return This object, for chaining.*/setOnClose(onClose:CardService.OnClose):CardService.OpenLink;
/**Sets the behavior of URL when it is opened.
@param openAs The opening setting.
@return This object, for chaining.*/setOpenAs(openAs:CardService.OpenAs):CardService.OpenLink;
/**Sets the URL to be opened. The URL must match a prefix [whitelisted in
the manifest](/gmail/add-ons/concepts/manifests#manifest_structure_for_gmail_add-ons).
@param url The URL to open.
@return This object, for chaining.*/setUrl(url:string):CardService.OpenLink;}interface OpenAs{}interface _OpenAs{
/**Open in a full window or tab. Default.*/FULL_SIZE:OpenAs;
/**Open as an overlay such as a pop-up.*/OVERLAY:OpenAs;}interface OnClose{}interface _OnClose{
/**Do nothing on close. Default.*/NOTHING:OnClose;
/**Reloads the add-on on when the window closes.

If [`OpenAs.OVERLAY`](https://developers.google.com/apps-script/reference/card-service/open-as.html#OVERLAY) is also set, then the main card is blocked until the overlay
window is closed and the add-on has finished reloading.*/RELOAD:OnClose;
/**Reload the add-on on closing the URL. This action differs from [`RELOAD`](https://developers.google.com/apps-script/reference/card-service/on-close.html#RELOAD) in that it does
not block the main card while showing an [`OpenAs.OVERLAY`](https://developers.google.com/apps-script/reference/card-service/open-as.html#OVERLAY) window.
@deprecated*/RELOAD_ADD_ON:OnClose;}interface Notification{
/**Sets the text to show in the notification. Required.
@param text The notification text.
@return This object, for chaining.*/setText(text:string):CardService.Notification;}interface Navigation{
/**Pops a card from the navigation stack. Can be chained with other card navigation actions.
@return This object, for chaining.*/popCard():CardService.Navigation;
/**Pops to the specified card by its card name. Can be chained with other card navigation actions.
@param cardName The name of the card to navigate to.
@return This object, for chaining.*/popToNamedCard(cardName:string):CardService.Navigation;
/**Pops the card stack to the root card. Can be chained with other card navigation actions.
@return This object, for chaining.*/popToRoot():CardService.Navigation;printJson():string;
/**Pushes the given card onto the stack. Can be chained with other card navigation actions.
@param card A card to add to the stack.
@return This object, for chaining.*/pushCard(card:CardService.Card):CardService.Navigation;
/**Does an in-place replacement of the current card. Can be chained with other card navigation
actions.
@param card A card to replace the current card with.
@return This object, for chaining.*/updateCard(card:CardService.Card):CardService.Navigation;}interface MaterialIcon{
/**Whether the icon renders as filled. Default value is `false`.

To preview different icon settings, go to [Google
Font Icons](https://fonts.google.com/icons) and adjust the settings under __Customize__.

```
const materialIcon = CardService.newMaterialIcon()
    .setName('search')
    .setFill(true);
```
@param fill Whether the icon is filled.
@return This object, for chaining.*/setFill(fill:boolean):CardService.MaterialIcon;
/**Weight and grade affect a symbol’s thickness. Adjustments to grade are more granular than
adjustments to weight and have a small impact on the size of the symbol. Choose from {-25, 0,
200}. If absent, default value is 0. If any other value is specified, the default value is
used.

To preview different icon settings, go to [Google
Font Icons](https://fonts.google.com/icons) and adjust the settings under __Customize__.

```
const materialIcon = CardService.newMaterialIcon()
    .setName('search')
    .setGrade(200);
```
@param grade The icon's grade.
@return This object, for chaining.*/setGrade(grade:Integer):CardService.MaterialIcon;
/**Sets the name of the icon. Required.

The icon name defined in [Google Font Icon](https://fonts.google.com/icons), For
example, `check_box`.

Any invalid names are abandoned and replaced with an empty string and results in the icon
failing to render.

```
const materialIcon = CardService.newMaterialIcon().setName('search');
```
@param name The name of the icon.
@return This object, for chaining.*/setName(name:string):CardService.MaterialIcon;
/**The stroke weight of the icon. Choose from {100, 200, 300, 400, 500, 600, 700}. If absent,
default value is 400. If any other value is specified, the default value is used.

To preview different icon settings, go to [Google
Font Icons](https://fonts.google.com/icons) and adjust the settings under __Customize__.

```
const materialIcon = CardService.newMaterialIcon()
    .setName('search')
    .setWeight(700);
```
@param weight The stroke weight of the icon.
@return This object, for chaining.*/setWeight(weight:Integer):CardService.MaterialIcon;}interface LoadIndicator{}interface _LoadIndicator{
/**Do not use an indicator.*/NONE:LoadIndicator;
/**Use a spinner indicator. Default.*/SPINNER:LoadIndicator;}interface LinkPreview{printJson():string;
/**Sets the title that displays in the link preview above the preview card. If unset, the link
preview displays the header of the `PreviewCard`.

```
const linkPreview = CardService.newLinkPreview()
    .setLinkPreviewTitle("Link preview title");
```
@param title The title of the link preview.
@return This object, for chaining.*/setLinkPreviewTitle(title:string):CardService.LinkPreview;
/**Sets the card that displays information about a link from a third-party or non-Google service.

```
const decoratedText = CardService.newDecoratedText()
    .setTopLabel('Hello')
    .setText('Hi!');

const cardSection = CardService.newCardSection()
    .addWidget(decoratedText);

const card = CardService.newCardBuilder()
    .addSection(cardSection)
    .build();

const linkPreview = CardService.newLinkPreview()
    .setPreviewCard(card)
    .setTitle('Smart chip title');
```
@param previewCard The preview card.
@return This object, for chaining.*/setPreviewCard(previewCard:CardService.Card):CardService.LinkPreview;
/**Sets the title that displays in the smart chip for the link preview. If unset, the smart chip
displays the header of the `PreviewCard`.

```
const linkPreview = CardService.newLinkPreview()
    .setTitle('Smart chip title');
```
@param title The title of the smart chip.
@return This object, for chaining.*/setTitle(title:string):CardService.LinkPreview;}interface KeyValue{
/**Sets an authorization action that opens a URL to the authorization flow when the object is
clicked. This opens the URL in a new window. When the user finishes the authorization flow and
returns to the application, the add-on reloads.

A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/key-value.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/key-value.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/key-value.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/key-value.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/key-value.html#setComposeAction(Action,ComposedEmailType)) set.

```
// ...

var action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);

```
@param action The object that specifies the authorization action to take when this element is
    clicked.
@return This object, for chaining.*/setAuthorizationAction(action:CardService.AuthorizationAction):CardService.KeyValue;
/**Sets the label text to be used as the key. Displayed below the text-content.
@deprecated
@param text The label text. Note: It doesn't support [basic HTML formatting](/gmail/add-ons/concepts/widgets#text_formatting).
@return This object, for chaining.*/setBottomLabel(text:string):CardService.KeyValue;
/**Sets the [`Button`](https://developers.google.com/apps-script/reference/card-service/button.html) that is displayed to the right of the context. A ~~[`KeyValue`](https://developers.google.com/apps-script/reference/card-service/key-value.html)~~ can
only support one button, one switch or one icon.
@deprecated
@param button The button to add.
@return This object, for chaining.*/setButton(button:CardService.Button):CardService.KeyValue;
/**Sets an action that composes a draft email when the object is clicked. A UI object can only
have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/key-value.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/key-value.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/key-value.html#setOnClickOpenLinkAction(Action)),
[`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/key-value.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/key-value.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ComposeActionResponse`](https://developers.google.com/apps-script/reference/card-service/compose-action-response.html) object configured using [`ComposeActionResponseBuilder.setGmailDraft(draft)`](https://developers.google.com/apps-script/reference/card-service/compose-action-response-builder.html#setGmailDraft(GmailDraft)).

__Note__: This method doesn't set a __compose action__ that is
used to [extend the compose UI](/gmail/add-ons/how-tos/extending-compose-ui).
Rather, this method connects this UI element to an [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) that [composes draft messages](/gmail/add-ons/how-tos/compose) in Apps Script that are
opened in Gmail when the action completes. 

```
// ...

var action = CardService.newAction().setFunctionName('composeEmailCallback');
CardService.newTextButton()
    .setText('Compose Email')
    .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);

// ...

function composeEmailCallback() {
  var thread = GmailApp.getThreadById(e.threadId);
  var draft = thread.createDraftReply('This is a reply');
  return CardService.newComposeActionResponseBuilder()
      .setGmailDraft(draft)
      .build();
}
```
@param action The object that specifies the compose action to take when this element is
    clicked.
@param composedEmailType An enum value that specifies whether the composed draft is a
    standalone or reply draft.
@return This object, for chaining.*/setComposeAction(action:CardService.Action,composedEmailType:CardService.ComposedEmailType):CardService.KeyValue;
/**Sets the text to be used as the value. Supports [basic HTML formatting](/gmail/add-ons/concepts/widgets#text_formatting). Required.
@deprecated
@param text The text content for this widget.
@return This object, for chaining.*/setContent(text:string):CardService.KeyValue;
/**Sets the icon to be used as the key.
@deprecated
@param icon One of the predefined [`Icon`](https://developers.google.com/apps-script/reference/card-service/icon.html) values.
@return This object, for chaining.*/setIcon(icon:CardService.Icon):CardService.KeyValue;
/**Sets the alternative text for the icon.
@deprecated
@param altText The alternative text for the icon.
@return This object, for chaining.*/setIconAltText(altText:string):CardService.KeyValue;
/**Sets the URL of the icon to be used as the key.
@deprecated
@param url The URL address of a hosted image to use as an icon.
@return This object, for chaining.*/setIconUrl(url:string):CardService.KeyValue;
/**Sets whether the value text should be displayed on a single line or multiple lines.
@deprecated
@param multiline The multiline setting.
@return This object, for chaining.*/setMultiline(multiline:boolean):CardService.KeyValue;
/**Sets an action that executes when the object is clicked. A UI object can only have one of
[`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/key-value.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/key-value.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/key-value.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/key-value.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/key-value.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ActionResponse`](https://developers.google.com/apps-script/reference/card-service/action-response.html) object.

```
// ...

var action = CardService.newAction().setFunctionName('notificationCallback');
CardService.newTextButton().setText('Create notification').setOnClickAction(action);

// ...

function notificationCallback() {
  return CardService.newActionResponseBuilder()
      .setNotification(CardService.newNotification()
          .setText("Some info to display to user"))
      .build();
}
```
@param action The action to take when this element is clicked.
@return This object, for chaining.*/setOnClickAction(action:CardService.Action):CardService.KeyValue;
/**Sets an action that opens a URL in a tab when the object is clicked. Use this function when the
URL needs to be built or when you need to take other actions in addition to creating the [`OpenLink`](https://developers.google.com/apps-script/reference/card-service/open-link.html) object. A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/key-value.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/key-value.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/key-value.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/key-value.html#setAuthorizationAction(AuthorizationAction)), or
[`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/key-value.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ActionResponse`](https://developers.google.com/apps-script/reference/card-service/action-response.html) object configured using [`ActionResponseBuilder.setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/action-response-builder.html#setOpenLink(OpenLink)).

```
// ...

var action = CardService.newAction().setFunctionName('openLinkCallback');
CardService.newTextButton().setText('Open Link').setOnClickOpenLinkAction(action);

// ...

function openLinkCallback() {
  return CardService.newActionResponseBuilder()
      .setOpenLink(CardService.newOpenLink()
          .setUrl('https://www.google.com'))
      .build();
}
```
@param action The object that specifies the open link action to take when this element is
    clicked.
@return This object, for chaining.*/setOnClickOpenLinkAction(action:CardService.Action):CardService.KeyValue;
/**Sets a URL to be opened when the object is clicked. Use this function when the URL is already
known and only needs to be opened. A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/key-value.html#setOpenLink(OpenLink)),
[`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/key-value.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/key-value.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/key-value.html#setAuthorizationAction(AuthorizationAction)),
or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/key-value.html#setComposeAction(Action,ComposedEmailType)) set.
@param openLink An [`OpenLink`](https://developers.google.com/apps-script/reference/card-service/open-link.html) object describing the URL to open.
@return This object, for chaining.*/setOpenLink(openLink:CardService.OpenLink):CardService.KeyValue;
/**Sets the [`Switch`](https://developers.google.com/apps-script/reference/card-service/switch.html) that is displayed to the right of the content. A ~~[`KeyValue`](https://developers.google.com/apps-script/reference/card-service/key-value.html)~~ can
only support one button, one switch or one icon.
@deprecated
@param switchToSet The switch to add.
@return This object, for chaining.*/setSwitch(switchToSet:CardService.Switch):CardService.KeyValue;
/**Sets the label text to be used as the key. Displayed above the text-content.
@deprecated
@param text The label text. Note: It doesn't support [basic HTML formatting](/gmail/add-ons/concepts/widgets#text_formatting).
@return This object, for chaining.*/setTopLabel(text:string):CardService.KeyValue;
/**Sets the optional [`IconImage`](https://developers.google.com/apps-script/reference/card-service/icon-image.html) that is displayed to the right of the content. A ~~[`KeyValue`](https://developers.google.com/apps-script/reference/card-service/key-value.html)~~ can only support one button, one switch or one icon.
@deprecated
@param endIcon The icon to add.
@return This object, for chaining.*/setEndIcon(endIcon:CardService.IconImage):CardService.KeyValue;
/**Sets the optional [`IconImage`](https://developers.google.com/apps-script/reference/card-service/icon-image.html) to display before the text content.
@deprecated
@param startIcon The icon to display.
@return This object, for chaining.*/setStartIcon(startIcon:CardService.IconImage):CardService.KeyValue;}interface Interaction{}interface _Interaction{
/**Default value. The `action` executes as normal.*/INTERACTION_UNSPECIFIED:Interaction;
/**Opens a dialog, a card-based interface that Chat apps use to interact with users.*/OPEN_DIALOG:Interaction;}interface InputType{}interface _InputType{
/**Accept an email address.*/EMAIL:InputType;
/**Accept a floating-point number.*/FLOAT:InputType;
/**Accept an integer.*/INTEGER:InputType;
/**Accept regular text.*/TEXT:InputType;}interface ImageStyle{}interface _ImageStyle{
/**Crop to a circle shape.*/CIRCLE:ImageStyle;
/**No cropping. Default.*/SQUARE:ImageStyle;}interface ImageCropType{}interface _ImageCropType{
/**Circle shape crop style.*/CIRCLE:ImageCropType;
/**Rectangle shape crop style with 4:3 ratio.*/RECTANGLE_4_3:ImageCropType;
/**Rectangle shape crop style with custom ratio.*/RECTANGLE_CUSTOM:ImageCropType;
/**Square shape crop style.*/SQUARE:ImageCropType;}interface ImageCropStyle{
/**Sets the aspect ratio to use if the crop type is `RECTANGLE_CUSTOM`. The ratio must
be a positive value.
@param ratio The ratio to apply.
@return This object, for chaining.*/setAspectRatio(ratio:number):CardService.ImageCropStyle;
/**Sets the crop type for the image. Default is SQUARE.
@param type The crop type.
@return This object, for chaining.*/setImageCropType(type:CardService.ImageCropType):CardService.ImageCropStyle;}interface ImageComponent{
/**Sets the alternative text of the image.
@param altText The alt_text to set for the image.
@return This object, for chaining.*/setAltText(altText:string):CardService.ImageComponent;
/**Sets the border style applied to the image.
@param borderStyle The BorderStyle object to apply.
@return This object, for chaining.*/setBorderStyle(borderStyle:CardService.BorderStyle):CardService.ImageComponent;
/**Sets the crop style for the image.
@param imageCropStyle The ImageCropStyle object to apply.
@return This object, for chaining.*/setCropStyle(imageCropStyle:CardService.ImageCropStyle):CardService.ImageComponent;
/**Sets the URL of the image.
@param url The URL.
@return This object, for chaining.*/setImageUrl(url:string):CardService.ImageComponent;}interface ImageButtonStyle{}interface _ImageButtonStyle{
/**Image button with no border. Default.*/BORDERLESS:ImageButtonStyle;
/**Image button with colored background.*/FILLED:ImageButtonStyle;
/**Image button with an alternative middle ground between filled and outlined buttons.*/FILLED_TONAL:ImageButtonStyle;
/**Image button with clear background.*/OUTLINED:ImageButtonStyle;}interface ImageButton{
/**Sets the alternative text of the button for accessibility. Required.
@param altText The alternative text to assign to this button.
@return This object, for chaining.*/setAltText(altText:string):CardService.ImageButton;
/**Sets an authorization action that opens a URL to the authorization flow when the object is
clicked. This opens the URL in a new window. When the user finishes the authorization flow and
returns to the application, the add-on reloads.

A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/image-button.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/image-button.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/image-button.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/image-button.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/image-button.html#setComposeAction(Action,ComposedEmailType)) set.

```
// ...

var action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);

```
@param action The object that specifies the authorization action to take when this element is
    clicked.
@return This object, for chaining.*/setAuthorizationAction(action:CardService.AuthorizationAction):CardService.ImageButton;
/**Sets an action that composes a draft email when the object is clicked. A UI object can only
have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/image-button.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/image-button.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/image-button.html#setOnClickOpenLinkAction(Action)),
[`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/image-button.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/image-button.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ComposeActionResponse`](https://developers.google.com/apps-script/reference/card-service/compose-action-response.html) object configured using [`ComposeActionResponseBuilder.setGmailDraft(draft)`](https://developers.google.com/apps-script/reference/card-service/compose-action-response-builder.html#setGmailDraft(GmailDraft)).

__Note__: This method doesn't set a __compose action__ that is
used to [extend the compose UI](/gmail/add-ons/how-tos/extending-compose-ui).
Rather, this method connects this UI element to an [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) that [composes draft messages](/gmail/add-ons/how-tos/compose) in Apps Script that are
opened in Gmail when the action completes. 

```
// ...

var action = CardService.newAction().setFunctionName('composeEmailCallback');
CardService.newTextButton()
    .setText('Compose Email')
    .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);

// ...

function composeEmailCallback() {
  var thread = GmailApp.getThreadById(e.threadId);
  var draft = thread.createDraftReply('This is a reply');
  return CardService.newComposeActionResponseBuilder()
      .setGmailDraft(draft)
      .build();
}
```
@param action The object that specifies the compose action to take when this element is
    clicked.
@param composedEmailType An enum value that specifies whether the composed draft is a
    standalone or reply draft.
@return This object, for chaining.*/setComposeAction(action:CardService.Action,composedEmailType:CardService.ComposedEmailType):CardService.ImageButton;
/**Sets a predefined [`Icon`](https://developers.google.com/apps-script/reference/card-service/icon.html) to display on the button. Either this or [`setIconUrl(url)`](https://developers.google.com/apps-script/reference/card-service/image-button.html#setIconUrl(String))
must be used to define the button image.
@param icon One of the predefined [`Icon`](https://developers.google.com/apps-script/reference/card-service/icon.html) values.
@return This object, for chaining.*/setIcon(icon:CardService.Icon):CardService.ImageButton;
/**Sets the URL of an image to use as this button's icon. Either this or [`setIcon(icon)`](https://developers.google.com/apps-script/reference/card-service/image-button.html#setIcon(Icon)) must be
used to define the button image.
@param url The URL address of a hosted image to use as this button's icon.
@return This object, for chaining.*/setIconUrl(url:string):CardService.ImageButton;
/**Sets the button style. If unset, it defaults to [`ImageButtonStyle.BORDERLESS`](https://developers.google.com/apps-script/reference/card-service/image-button-style.html#BORDERLESS) button.

Only available for Google Chat apps. Not available for Google Workspace Add-ons.

```
const imageButton = CardService.newImageButton()
   .setImageButtonStyle(CardService.ImageButtonStyle.BORDERLESS);
```

[Developer Preview](https://developers.google.com/workspace/preview).
@param imageButtonStyle The button style.
@return This object, for chaining.*/setImageButtonStyle(imageButtonStyle:CardService.ImageButtonStyle):CardService.ImageButton;
/**Sets the material design icon.

```
const imageButton = CardService.newImageButton()
   .setMaterialIcon(CardService.newMaterialIcon().setName('search'));
```
@param icon The material design icon.
@return This object, for chaining.*/setMaterialIcon(icon:CardService.MaterialIcon):CardService.ImageButton;
/**Sets an action that executes when the object is clicked. A UI object can only have one of
[`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/image-button.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/image-button.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/image-button.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/image-button.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/image-button.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ActionResponse`](https://developers.google.com/apps-script/reference/card-service/action-response.html) object.

```
// ...

var action = CardService.newAction().setFunctionName('notificationCallback');
CardService.newTextButton().setText('Create notification').setOnClickAction(action);

// ...

function notificationCallback() {
  return CardService.newActionResponseBuilder()
      .setNotification(CardService.newNotification()
          .setText("Some info to display to user"))
      .build();
}
```
@param action The action to take when this element is clicked.
@return This object, for chaining.*/setOnClickAction(action:CardService.Action):CardService.ImageButton;
/**Sets an action that opens a URL in a tab when the object is clicked. Use this function when the
URL needs to be built or when you need to take other actions in addition to creating the [`OpenLink`](https://developers.google.com/apps-script/reference/card-service/open-link.html) object. A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/image-button.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/image-button.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/image-button.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/image-button.html#setAuthorizationAction(AuthorizationAction)), or
[`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/image-button.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ActionResponse`](https://developers.google.com/apps-script/reference/card-service/action-response.html) object configured using [`ActionResponseBuilder.setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/action-response-builder.html#setOpenLink(OpenLink)).

```
// ...

var action = CardService.newAction().setFunctionName('openLinkCallback');
CardService.newTextButton().setText('Open Link').setOnClickOpenLinkAction(action);

// ...

function openLinkCallback() {
  return CardService.newActionResponseBuilder()
      .setOpenLink(CardService.newOpenLink()
          .setUrl('https://www.google.com'))
      .build();
}
```
@param action The object that specifies the open link action to take when this element is
    clicked.
@return This object, for chaining.*/setOnClickOpenLinkAction(action:CardService.Action):CardService.ImageButton;
/**Sets a URL to be opened when the object is clicked. Use this function when the URL is already
known and only needs to be opened. A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/image-button.html#setOpenLink(OpenLink)),
[`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/image-button.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/image-button.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/image-button.html#setAuthorizationAction(AuthorizationAction)),
or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/image-button.html#setComposeAction(Action,ComposedEmailType)) set.
@param openLink An [`OpenLink`](https://developers.google.com/apps-script/reference/card-service/open-link.html) object describing the URL to open.
@return This object, for chaining.*/setOpenLink(openLink:CardService.OpenLink):CardService.ImageButton;
/**Sets a pop-up menu to be opened when the object is clicked. Each item in the menu can specify
an action to be triggered when clicked. Nested menus are not supported, actions for menu items
should not specify an overflow menu.

Only available for Google Chat apps. Not available for Google Workspace Add-ons.

```
  var overflowMenuItem = CardService.newOverflowMenuItem()
    .setStartIcon(CardService.newIconImage()
    .setIconUrl("https://www.google.com/images/branding/googleg/1x/googleg_standard_color_64dp.png"))
    .setText("Open Link")
    .setOpenLink(CardService.newOpenLink()
        .setUrl("https://www.google.com"));

var overflowMenu = CardService.newOverflowMenu()
    .addMenuItem(overflowMenuItem).build();
```

[Developer Preview](https://developers.google.com/workspace/preview).
@param menu The object that specifies the overflow menu to display when this element is
    clicked.
@return This object, for chaining.*/setOverflowMenu(menu:CardService.OverflowMenu):CardService.ImageButton;}interface Image{
/**Sets the alternative text of the image for accessibility. Required.
@param altText The alternative text to assign to this image.
@return This object, for chaining.*/setAltText(altText:string):CardService.Image;
/**Sets an authorization action that opens a URL to the authorization flow when the object is
clicked. This opens the URL in a new window. When the user finishes the authorization flow and
returns to the application, the add-on reloads.

A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/image.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/image.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/image.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/image.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/image.html#setComposeAction(Action,ComposedEmailType)) set.

```
// ...

var action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);

```
@param action The object that specifies the authorization action to take when this element is
    clicked.
@return This object, for chaining.*/setAuthorizationAction(action:CardService.AuthorizationAction):CardService.Image;
/**Sets an action that composes a draft email when the object is clicked. A UI object can only
have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/image.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/image.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/image.html#setOnClickOpenLinkAction(Action)),
[`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/image.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/image.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ComposeActionResponse`](https://developers.google.com/apps-script/reference/card-service/compose-action-response.html) object configured using [`ComposeActionResponseBuilder.setGmailDraft(draft)`](https://developers.google.com/apps-script/reference/card-service/compose-action-response-builder.html#setGmailDraft(GmailDraft)).

__Note__: This method doesn't set a __compose action__ that is
used to [extend the compose UI](/gmail/add-ons/how-tos/extending-compose-ui).
Rather, this method connects this UI element to an [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) that [composes draft messages](/gmail/add-ons/how-tos/compose) in Apps Script that are
opened in Gmail when the action completes. 

```
// ...

var action = CardService.newAction().setFunctionName('composeEmailCallback');
CardService.newTextButton()
    .setText('Compose Email')
    .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);

// ...

function composeEmailCallback() {
  var thread = GmailApp.getThreadById(e.threadId);
  var draft = thread.createDraftReply('This is a reply');
  return CardService.newComposeActionResponseBuilder()
      .setGmailDraft(draft)
      .build();
}
```
@param action The object that specifies the compose action to take when this element is
    clicked.
@param composedEmailType An enum value that specifies whether the composed draft is a
    standalone or reply draft.
@return This object, for chaining.*/setComposeAction(action:CardService.Action,composedEmailType:CardService.ComposedEmailType):CardService.Image;
/**Sets the image to use by providing its URL or data string. Required.

The provided URL can either be a publicly accessible URL or a base64 encoded image string.
To obtain the latter, you can use the following code to create an encoded image string from an
image in your Google Drive, then store that string for later use with [`setImageUrl(url)`](https://developers.google.com/apps-script/reference/card-service/image.html#setImageUrl(String)). This method prevents the need for your add-on to access a publicly
available image URL:

```
// The following assumes you have the image to use in Google Drive and have its ID.
var imageBytes = DriveApp.getFileById(imageID).getBlob().getBytes();
var encodedImageURL = "data:image/jpeg;base64," + Utilities.base64Encode(imageBytes);

// You can store encodeImageURL and use it as a parameter to Image.setImageUrl(url).
```
@param url The URL address of a hosted image to use, or an encoded image string.
@return This object, for chaining.*/setImageUrl(url:string):CardService.Image;
/**Sets an action that executes when the object is clicked. A UI object can only have one of
[`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/image.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/image.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/image.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/image.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/image.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ActionResponse`](https://developers.google.com/apps-script/reference/card-service/action-response.html) object.

```
// ...

var action = CardService.newAction().setFunctionName('notificationCallback');
CardService.newTextButton().setText('Create notification').setOnClickAction(action);

// ...

function notificationCallback() {
  return CardService.newActionResponseBuilder()
      .setNotification(CardService.newNotification()
          .setText("Some info to display to user"))
      .build();
}
```
@param action The action to take when this element is clicked.
@return This object, for chaining.*/setOnClickAction(action:CardService.Action):CardService.Image;
/**Sets an action that opens a URL in a tab when the object is clicked. Use this function when the
URL needs to be built or when you need to take other actions in addition to creating the [`OpenLink`](https://developers.google.com/apps-script/reference/card-service/open-link.html) object. A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/image.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/image.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/image.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/image.html#setAuthorizationAction(AuthorizationAction)), or
[`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/image.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ActionResponse`](https://developers.google.com/apps-script/reference/card-service/action-response.html) object configured using [`ActionResponseBuilder.setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/action-response-builder.html#setOpenLink(OpenLink)).

```
// ...

var action = CardService.newAction().setFunctionName('openLinkCallback');
CardService.newTextButton().setText('Open Link').setOnClickOpenLinkAction(action);

// ...

function openLinkCallback() {
  return CardService.newActionResponseBuilder()
      .setOpenLink(CardService.newOpenLink()
          .setUrl('https://www.google.com'))
      .build();
}
```
@param action The object that specifies the open link action to take when this element is
    clicked.
@return This object, for chaining.*/setOnClickOpenLinkAction(action:CardService.Action):CardService.Image;
/**Sets a URL to be opened when the object is clicked. Use this function when the URL is already
known and only needs to be opened. A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/image.html#setOpenLink(OpenLink)),
[`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/image.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/image.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/image.html#setAuthorizationAction(AuthorizationAction)),
or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/image.html#setComposeAction(Action,ComposedEmailType)) set.
@param openLink An [`OpenLink`](https://developers.google.com/apps-script/reference/card-service/open-link.html) object describing the URL to open.
@return This object, for chaining.*/setOpenLink(openLink:CardService.OpenLink):CardService.Image;}interface IconImage{
/**Sets the alternative text of the URL which is used for accessibility.
@param altText The alternative text.
@return This object, for chaining.*/setAltText(altText:string):CardService.IconImage;
/**Sets the predefined icon if the URL is not set. Default is NONE.
@param icon One of the predefined [`Icon`](https://developers.google.com/apps-script/reference/card-service/icon.html) values.
@return This object, for chaining.*/setIcon(icon:CardService.Icon):CardService.IconImage;
/**Sets the URL of the icon if the icon is not set.
@param url The URL address of a hosted image to use as an icon.
@return This object, for chaining.*/setIconUrl(url:string):CardService.IconImage;
/**Sets the crop style for the image. The crop type options you can use for icons are `SQUARE` and `CIRCLE`. Default is `SQUARE`.
@param imageCropType The ImageCropType option to apply.
@return This object, for chaining.*/setImageCropType(imageCropType:CardService.ImageCropType):CardService.IconImage;
/**Sets the material design icon.

```
const iconImage = CardService.newIconImage()
    .setMaterialIcon(CardService.newMaterialIcon().setName('search'));
```
@param icon The material icon.
@return This object, for chaining.*/setMaterialIcon(icon:CardService.MaterialIcon):CardService.IconImage;}interface Icon{}interface _Icon{
/**![Airplane flight icon](https://www.gstatic.com/images/icons/material/system/1x/flight_grey600_48dp.png)*/AIRPLANE:Icon;
/**![Bookmark icon](https://www.gstatic.com/images/icons/material/system/1x/bookmark_grey600_48dp.png)*/BOOKMARK:Icon;
/**![Bus icon](https://www.gstatic.com/images/icons/material/system/1x/directions_bus_grey600_48dp.png)*/BUS:Icon;
/**![Car icon](https://www.gstatic.com/images/icons/material/system/1x/directions_car_grey600_48dp.png)*/CAR:Icon;
/**![Clock icon](https://www.gstatic.com/images/icons/material/system/1x/schedule_grey600_48dp.png)*/CLOCK:Icon;
/**![Confirmation number icon](https://www.gstatic.com/images/icons/material/system/1x/confirmation_num_grey600_48dp.png)*/CONFIRMATION_NUMBER_ICON:Icon;
/**![Description icon](https://www.gstatic.com/images/icons/material/system/1x/subject_grey600_48dp.png)*/DESCRIPTION:Icon;
/**![Dollar icon](https://www.gstatic.com/images/icons/material/system/1x/attach_money_grey600_48dp.png)*/DOLLAR:Icon;
/**![Email icon](https://www.gstatic.com/images/icons/material/system/1x/email_grey600_48dp.png)*/EMAIL:Icon;
/**![Email icon](https://www.gstatic.com/images/icons/material/system/1x/people_grey600_48dp.png)*/EVENT_PERFORMER:Icon;
/**![Event seat icon](https://www.gstatic.com/images/icons/material/system/1x/event_seat_grey600_48dp.png)*/EVENT_SEAT:Icon;
/**![Flight arrival icon](https://www.gstatic.com/images/icons/material/system/1x/flight_land_grey600_48dp.png)*/FLIGHT_ARRIVAL:Icon;
/**![Flight departure icon](https://www.gstatic.com/images/icons/material/system/1x/flight_takeoff_grey600_48dp.png)*/FLIGHT_DEPARTURE:Icon;
/**![Hotel icon](https://www.gstatic.com/images/icons/material/system/1x/hotel_grey600_48dp.png)*/HOTEL:Icon;
/**![Hotel icon](https://www.gstatic.com/images/icons/material/system/1x/star_grey600_48dp.png)*/HOTEL_ROOM_TYPE:Icon;
/**![Invite icon](https://www.gstatic.com/images/icons/material/system/1x/event_grey600_48dp.png)*/INVITE:Icon;
/**![Map pin icon](https://www.gstatic.com/images/icons/material/system/1x/place_grey600_48dp.png)*/MAP_PIN:Icon;
/**![Membershipt icon](https://www.gstatic.com/images/icons/material/system/1x/card_membership_grey600_48dp.png)*/MEMBERSHIP:Icon;
/**![Multiple people icon](https://www.gstatic.com/images/icons/material/system/1x/people_grey600_48dp.png)*/MULTIPLE_PEOPLE:Icon;
/**No icon. Default.*/NONE:Icon;
/**![Offer icon](https://www.gstatic.com/images/icons/material/system/1x/local_offer_grey600_48dp.png)*/OFFER:Icon;
/**![Person icon](https://www.gstatic.com/images/icons/material/system/1x/person_grey600_48dp.png)*/PERSON:Icon;
/**![Phone icon](https://www.gstatic.com/images/icons/material/system/1x/call_grey600_48dp.png)*/PHONE:Icon;
/**![Restaurant icon](https://www.gstatic.com/images/icons/material/system/1x/restaurant_grey600_48dp.png)*/RESTAURANT_ICON:Icon;
/**![Shopping cart icon](https://www.gstatic.com/images/icons/material/system/1x/shopping_cart_grey600_48dp.png)*/SHOPPING_CART:Icon;
/**![Star icon](https://www.gstatic.com/images/icons/material/system/1x/star_grey600_48dp.png)*/STAR:Icon;
/**![Store icon](https://www.gstatic.com/images/icons/material/system/1x/store_grey600_48dp.png)*/STORE:Icon;
/**![Ticket icon](https://www.gstatic.com/images/icons/material/system/1x/local_attraction_grey600_48dp.png)*/TICKET:Icon;
/**![Train icon](https://www.gstatic.com/images/icons/material/system/1x/train_grey600_48dp.png)*/TRAIN:Icon;
/**![Video camera icon](https://www.gstatic.com/images/icons/material/system/1x/videocam_grey600_48dp.png)*/VIDEO_CAMERA:Icon;
/**![Video play icon](https://www.gstatic.com/images/icons/material/system/1x/play_circle_filled_grey600_48dp.png)*/VIDEO_PLAY:Icon;}interface HostAppDataSource{
/**Sets the data source from Google Chat.

```
const chatSpaceDataSource = CardService.newChatSpaceDataSource()
    .setDefaultToCurrentSpace(true);

const chatClientDataSource = CardService.newChatClientDataSource()
    .setSpaceDataSource(chatSpaceDataSource);

const hostAppDataSource = CardService.newHostAppDataSource()
    .setChatDataSource(chatClientDataSource);
```

Only available for Google Chat apps. Not available for Google Workspace Add-ons.
@param chatClientDataSource The data source to be set.
@return This object, for chaining.*/setChatDataSource(chatClientDataSource:CardService.ChatClientDataSource):CardService.HostAppDataSource;}interface HorizontalSizeStyle{}interface _HorizontalSizeStyle{
/**Sizes the [`Widget`](https://developers.google.com/apps-script/reference/card-service/widget.html) to fill the available horizontal space of a [`Column`](https://developers.google.com/apps-script/reference/card-service/column.html). If the
other column has more space, the widget can fill the space beyond the space of its own column.
Default.*/FILL_AVAILABLE_SPACE:HorizontalSizeStyle;
/**Resizes the [`Widget`](https://developers.google.com/apps-script/reference/card-service/widget.html) to fill the least amount of horizontal space in a [`Column`](https://developers.google.com/apps-script/reference/card-service/column.html).
The minimum space is based on the size of the widget. If the widget is smaller than the space
of the column, it doesn't expand to fill the space.*/FILL_MINIMUM_SPACE:HorizontalSizeStyle;}interface HorizontalAlignment{}interface _HorizontalAlignment{
/**Align the widget to the center.*/CENTER:HorizontalAlignment;
/**Align the widget to the end of the sentence side.*/END:HorizontalAlignment;
/**Align the widget to the start of the sentence side.*/START:HorizontalAlignment;}interface GridItemLayout{}interface _GridItemLayout{
/**The title and subtitle are shown above the grid item's image.*/TEXT_ABOVE:GridItemLayout;
/**The title and subtitle are shown below the grid item's image.*/TEXT_BELOW:GridItemLayout;}interface GridItem{
/**Sets the identifier for the grid item. When a user clicks this grid item, this ID is returned
in the parent grid's on_click call back parameters.
@param id The ID.
@return This object, for chaining.*/setIdentifier(id:string):CardService.GridItem;
/**Sets the image for this grid item.
@param image The ImageComponent object.
@return This object, for chaining.*/setImage(image:CardService.ImageComponent):CardService.GridItem;
/**Sets the layout of text and image for the grid item. Default is TEXT_BELOW
@param layout The layout setting.
@return This object, for chaining.*/setLayout(layout:CardService.GridItemLayout):CardService.GridItem;
/**Sets the subtitle of the grid item.
@param subtitle The subtitle text.
@return This object, for chaining.*/setSubtitle(subtitle:string):CardService.GridItem;
/**Sets the horizontal alignment of the grid item. Default is START.
@param alignment The alignment setting.
@return This object, for chaining.*/setTextAlignment(alignment:CardService.HorizontalAlignment):CardService.GridItem;
/**Sets the title text of the grid item.
@param title The title text.
@return This object, for chaining.*/setTitle(title:string):CardService.GridItem;}interface Grid{
/**Adds a new grid item to the grid.
@param gridItem The grid item to add.
@return This object, for chaining.*/addItem(gridItem:CardService.GridItem):CardService.Grid;
/**Sets an authorization action that opens a URL to the authorization flow when the object is
clicked. This opens the URL in a new window. When the user finishes the authorization flow and
returns to the application, the add-on reloads.

A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/grid.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/grid.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/grid.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/grid.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/grid.html#setComposeAction(Action,ComposedEmailType)) set.

```
// ...

var action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);

```
@param action The object that specifies the authorization action to take when this element is
    clicked.
@return This object, for chaining.*/setAuthorizationAction(action:CardService.AuthorizationAction):CardService.Grid;
/**Sets the border style applied to each grid item. Default is NO_BORDER.
@param borderStyle The border style to apply.
@return This object, for chaining.*/setBorderStyle(borderStyle:CardService.BorderStyle):CardService.Grid;
/**Sets an action that composes a draft email when the object is clicked. A UI object can only
have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/grid.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/grid.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/grid.html#setOnClickOpenLinkAction(Action)),
[`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/grid.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/grid.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ComposeActionResponse`](https://developers.google.com/apps-script/reference/card-service/compose-action-response.html) object configured using [`ComposeActionResponseBuilder.setGmailDraft(draft)`](https://developers.google.com/apps-script/reference/card-service/compose-action-response-builder.html#setGmailDraft(GmailDraft)).

__Note__: This method doesn't set a __compose action__ that is
used to [extend the compose UI](/gmail/add-ons/how-tos/extending-compose-ui).
Rather, this method connects this UI element to an [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) that [composes draft messages](/gmail/add-ons/how-tos/compose) in Apps Script that are
opened in Gmail when the action completes. 

```
// ...

var action = CardService.newAction().setFunctionName('composeEmailCallback');
CardService.newTextButton()
    .setText('Compose Email')
    .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);

// ...

function composeEmailCallback() {
  var thread = GmailApp.getThreadById(e.threadId);
  var draft = thread.createDraftReply('This is a reply');
  return CardService.newComposeActionResponseBuilder()
      .setGmailDraft(draft)
      .build();
}
```
@param action The object that specifies the compose action to take when this element is
    clicked.
@param composedEmailType An enum value that specifies whether the composed draft is a
    standalone or reply draft.
@return This object, for chaining.*/setComposeAction(action:CardService.Action,composedEmailType:CardService.ComposedEmailType):CardService.Grid;
/**The number of columns to display in the grid. If shown in the right side panel, you can display
1-2 columns and the default value is 1. If shown in a dialog, you can display 2-3 columns and
the default value is 2.
@param numColumns The number of columns.
@return This object, for chaining.*/setNumColumns(numColumns:Integer):CardService.Grid;
/**Sets an action that executes when the object is clicked. A UI object can only have one of
[`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/grid.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/grid.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/grid.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/grid.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/grid.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ActionResponse`](https://developers.google.com/apps-script/reference/card-service/action-response.html) object.

```
// ...

var action = CardService.newAction().setFunctionName('notificationCallback');
CardService.newTextButton().setText('Create notification').setOnClickAction(action);

// ...

function notificationCallback() {
  return CardService.newActionResponseBuilder()
      .setNotification(CardService.newNotification()
          .setText("Some info to display to user"))
      .build();
}
```
@param action The action to take when this element is clicked.
@return This object, for chaining.*/setOnClickAction(action:CardService.Action):CardService.Grid;
/**Sets an action that opens a URL in a tab when the object is clicked. Use this function when the
URL needs to be built or when you need to take other actions in addition to creating the [`OpenLink`](https://developers.google.com/apps-script/reference/card-service/open-link.html) object. A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/grid.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/grid.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/grid.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/grid.html#setAuthorizationAction(AuthorizationAction)), or
[`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/grid.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ActionResponse`](https://developers.google.com/apps-script/reference/card-service/action-response.html) object configured using [`ActionResponseBuilder.setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/action-response-builder.html#setOpenLink(OpenLink)).

```
// ...

var action = CardService.newAction().setFunctionName('openLinkCallback');
CardService.newTextButton().setText('Open Link').setOnClickOpenLinkAction(action);

// ...

function openLinkCallback() {
  return CardService.newActionResponseBuilder()
      .setOpenLink(CardService.newOpenLink()
          .setUrl('https://www.google.com'))
      .build();
}
```
@param action The object that specifies the open link action to take when this element is
    clicked.
@return This object, for chaining.*/setOnClickOpenLinkAction(action:CardService.Action):CardService.Grid;
/**Sets a URL to be opened when the object is clicked. Use this function when the URL is already
known and only needs to be opened. A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/grid.html#setOpenLink(OpenLink)),
[`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/grid.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/grid.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/grid.html#setAuthorizationAction(AuthorizationAction)),
or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/grid.html#setComposeAction(Action,ComposedEmailType)) set.
@param openLink An [`OpenLink`](https://developers.google.com/apps-script/reference/card-service/open-link.html) object describing the URL to open.
@return This object, for chaining.*/setOpenLink(openLink:CardService.OpenLink):CardService.Grid;
/**Sets the title text of the grid. The text must be a plain string with no formatting.
@param title The title text.
@return This object, for chaining.*/setTitle(title:string):CardService.Grid;}interface FixedFooter{
/**Set the primary button in the fixed footer. The primary button must be a [`TextButtonStyle.FILLED`](https://developers.google.com/apps-script/reference/card-service/text-button-style.html#FILLED) button. If the background color is unset for the primary button, the
button uses the primary color defined in the add-on [manifest](/gmail/add-ons/concepts/manifests#manifest_structure_for_gmail_add-ons).
@param button The button to add.
@return This object, for chaining.*/setPrimaryButton(button:CardService.TextButton):CardService.FixedFooter;
/**Set the secondary button in the fixed footer. The secondary button must be a [`TextButtonStyle.OUTLINED`](https://developers.google.com/apps-script/reference/card-service/text-button-style.html#OUTLINED) button. This method does nothing if [`setPrimaryButton(button)`](https://developers.google.com/apps-script/reference/card-service/fixed-footer.html#setPrimaryButton(TextButton)) isn't called to set the primary button.
@param button The button to add.
@return This object, for chaining.*/setSecondaryButton(button:CardService.TextButton):CardService.FixedFooter;}interface EditorFileScopeActionResponseBuilder{
/**Builds the current Editor action response.
@return A validated [`EditorFileScopeActionResponse`](https://developers.google.com/apps-script/reference/card-service/editor-file-scope-action-response.html).*/build():CardService.EditorFileScopeActionResponse;
/**Requests the `drive.file` scope for the current active Editor document.

```
// Display a permissions dialog to the user, requesting `drive.file` scope for the current
// document on behalf of this add-on.
CardService.newEditorFileScopeActionResponseBuilder()
    .requestFileScopeForActiveDocument()
    .build();
```

Note: To call this method, you must add the `drive.file` scope to the add-on's
manifest.
@return This object, for chaining.*/requestFileScopeForActiveDocument():CardService.EditorFileScopeActionResponseBuilder;}interface EditorFileScopeActionResponse{printJson():string;}interface DriveItemsSelectedActionResponseBuilder{
/**Builds the current Drive action response.
@return A validated [`DriveItemsSelectedActionResponse`](https://developers.google.com/apps-script/reference/card-service/drive-items-selected-action-response.html).*/build():CardService.DriveItemsSelectedActionResponse;
/**Specifies that the response requests file scope for the contextually-relevant item in Drive.
@param itemId ID of the Drive item to request file scope for.
@return This object, for chaining.*/requestFileScope(itemId:string):CardService.DriveItemsSelectedActionResponseBuilder;}interface DriveItemsSelectedActionResponse{printJson():string;}interface Divider{}interface DisplayStyle{}interface _DisplayStyle{
/**Show the card header at the bottom of add-on content over existing content.*/PEEK:DisplayStyle;
/**Show the card by replacing existing content.*/REPLACE:DisplayStyle;}interface DialogAction{
/**Sets the action status of `DialogAction`.

```
const actionStatus = CardService.newActionStatus()
   .setStatusCode(CardService.Status.OK);

const dialogAction = CardService.newDialogAction()
   .setActionStatus(actionStatus);
```
@param actionStatus The [`ActionStatus`](https://developers.google.com/apps-script/reference/card-service/action-status.html) to use.
@return This object, for chaining.*/setActionStatus(actionStatus:CardService.ActionStatus):CardService.DialogAction;
/**Sets the dialog of the `DialogAction`.

```
const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle("card title")).build();

// Sets the card of the dialog.
const dialog = CardService.newDialog()
    .setBody(card);

const dialogAction = CardService.newDialogAction()
   .setDialog(dialog)
```
@param dialog The [`Dialog`](https://developers.google.com/apps-script/reference/card-service/dialog.html) to use.
@return This object, for chaining.*/setDialog(dialog:CardService.Dialog):CardService.DialogAction;}interface Dialog{
/**Sets the card of the `Dialog`.

```
const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle('Card title')).build();

// Sets the card of the dialog.
const dialog = CardService.newDialog()
    .setBody(card);
```
@param card The [`Card`](https://developers.google.com/apps-script/reference/card-service/card.html) to use.
@return This object, for chaining.*/setBody(card:CardService.Card):CardService.Dialog;}interface DecoratedText{
/**Sets an authorization action that opens a URL to the authorization flow when the object is
clicked. This opens the URL in a new window. When the user finishes the authorization flow and
returns to the application, the add-on reloads.

A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setComposeAction(Action,ComposedEmailType)) set.

```
// ...

var action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);

```
@param action The object that specifies the authorization action to take when this element is
    clicked.
@return This object, for chaining.*/setAuthorizationAction(action:CardService.AuthorizationAction):CardService.DecoratedText;
/**Sets the label text to be used as the key and is displayed below the text content.
@param text The label text.
@return This object, for chaining.*/setBottomLabel(text:string):CardService.DecoratedText;
/**Sets the [`Button`](https://developers.google.com/apps-script/reference/card-service/button.html) that is displayed to the right of the text. A [`DecoratedText`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html) can
only support one button or one switch.
@param button The button to add.
@return This object, for chaining.*/setButton(button:CardService.Button):CardService.DecoratedText;
/**Sets an action that composes a draft email when the object is clicked. A UI object can only
have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOnClickOpenLinkAction(Action)),
[`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ComposeActionResponse`](https://developers.google.com/apps-script/reference/card-service/compose-action-response.html) object configured using [`ComposeActionResponseBuilder.setGmailDraft(draft)`](https://developers.google.com/apps-script/reference/card-service/compose-action-response-builder.html#setGmailDraft(GmailDraft)).

__Note__: This method doesn't set a __compose action__ that is
used to [extend the compose UI](/gmail/add-ons/how-tos/extending-compose-ui).
Rather, this method connects this UI element to an [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) that [composes draft messages](/gmail/add-ons/how-tos/compose) in Apps Script that are
opened in Gmail when the action completes. 

```
// ...

var action = CardService.newAction().setFunctionName('composeEmailCallback');
CardService.newTextButton()
    .setText('Compose Email')
    .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);

// ...

function composeEmailCallback() {
  var thread = GmailApp.getThreadById(e.threadId);
  var draft = thread.createDraftReply('This is a reply');
  return CardService.newComposeActionResponseBuilder()
      .setGmailDraft(draft)
      .build();
}
```
@param action The object that specifies the compose action to take when this element is
    clicked.
@param composedEmailType An enum value that specifies whether the composed draft is a
    standalone or reply draft.
@return This object, for chaining.*/setComposeAction(action:CardService.Action,composedEmailType:CardService.ComposedEmailType):CardService.DecoratedText;
/**Sets the optional [`IconImage`](https://developers.google.com/apps-script/reference/card-service/icon-image.html) that is displayed to the right of the content. A [`DecoratedText`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html) can only support one button, one switch or one icon.
@param endIcon The icon to add.
@return This object, for chaining.*/setEndIcon(endIcon:CardService.IconImage):CardService.DecoratedText;
/**Sets an action that executes when the object is clicked. A UI object can only have one of
[`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ActionResponse`](https://developers.google.com/apps-script/reference/card-service/action-response.html) object.

```
// ...

var action = CardService.newAction().setFunctionName('notificationCallback');
CardService.newTextButton().setText('Create notification').setOnClickAction(action);

// ...

function notificationCallback() {
  return CardService.newActionResponseBuilder()
      .setNotification(CardService.newNotification()
          .setText("Some info to display to user"))
      .build();
}
```
@param action The action to take when this element is clicked.
@return This object, for chaining.*/setOnClickAction(action:CardService.Action):CardService.DecoratedText;
/**Sets an action that opens a URL in a tab when the object is clicked. Use this function when the
URL needs to be built or when you need to take other actions in addition to creating the [`OpenLink`](https://developers.google.com/apps-script/reference/card-service/open-link.html) object. A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setAuthorizationAction(AuthorizationAction)), or
[`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ActionResponse`](https://developers.google.com/apps-script/reference/card-service/action-response.html) object configured using [`ActionResponseBuilder.setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/action-response-builder.html#setOpenLink(OpenLink)).

```
// ...

var action = CardService.newAction().setFunctionName('openLinkCallback');
CardService.newTextButton().setText('Open Link').setOnClickOpenLinkAction(action);

// ...

function openLinkCallback() {
  return CardService.newActionResponseBuilder()
      .setOpenLink(CardService.newOpenLink()
          .setUrl('https://www.google.com'))
      .build();
}
```
@param action The object that specifies the open link action to take when this element is
    clicked.
@return This object, for chaining.*/setOnClickOpenLinkAction(action:CardService.Action):CardService.DecoratedText;
/**Sets a URL to be opened when the object is clicked. Use this function when the URL is already
known and only needs to be opened. A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOpenLink(OpenLink)),
[`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setAuthorizationAction(AuthorizationAction)),
or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html#setComposeAction(Action,ComposedEmailType)) set.
@param openLink An [`OpenLink`](https://developers.google.com/apps-script/reference/card-service/open-link.html) object describing the URL to open.
@return This object, for chaining.*/setOpenLink(openLink:CardService.OpenLink):CardService.DecoratedText;
/**Sets the optional [`IconImage`](https://developers.google.com/apps-script/reference/card-service/icon-image.html) to display before the text content.
@param startIcon The icon to display.
@return This object, for chaining.*/setStartIcon(startIcon:CardService.IconImage):CardService.DecoratedText;
/**Sets the [`Switch`](https://developers.google.com/apps-script/reference/card-service/switch.html) that is displayed to the right of the content. A [`DecoratedText`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html)
can only support one button or one switch.
@param switchToSet The switch to add.
@return This object, for chaining.*/setSwitchControl(switchToSet:CardService.Switch):CardService.DecoratedText;
/**Sets the text to be used as the value. Supports [basic HTML formatting](/gmail/add-ons/concepts/widgets#text_formatting). Required.
@param text The text content for this widget.
@return This object, for chaining.*/setText(text:string):CardService.DecoratedText;
/**Sets the label text to be used as the key and is displayed above the text content.
@param text The label text.
@return This object, for chaining.*/setTopLabel(text:string):CardService.DecoratedText;
/**Sets whether the value text should be displayed on a single line or multiple lines.
@param wrapText If `true`, the text is wrapped and displayed on multiple lines. Otherwise
    the text is truncated.
@return This object, for chaining.*/setWrapText(wrapText:boolean):CardService.DecoratedText;
/**Sets the icon to be used as the key.
@deprecated
@param icon One of the predefined [`Icon`](https://developers.google.com/apps-script/reference/card-service/icon.html) values.
@return This object, for chaining.*/setIcon(icon:CardService.Icon):CardService.DecoratedText;
/**Sets the alternative text for the icon.
@deprecated
@param altText The alternative text for the icon.
@return This object, for chaining.*/setIconAltText(altText:string):CardService.DecoratedText;
/**Sets the URL of the icon to be used as the key.
@deprecated
@param url The URL address of a hosted image to use as an icon.
@return This object, for chaining.*/setIconUrl(url:string):CardService.DecoratedText;}interface DateTimePicker{
/**Sets the field name that identifies this picker in the event object that is generated when
there is a UI interaction. The field name is visible to the user. Required; the specified field
name must be unique.
@param fieldName The name to assign to this input.
@return This picker, for chaining.*/setFieldName(fieldName:string):CardService.DateTimePicker;
/**Sets an [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) that the script performs whenever the picker input changes.
@param action The action to take.
@return This picker, for chaining.*/setOnChangeAction(action:CardService.Action):CardService.DateTimePicker;
/**Sets the number of minutes that the time zone should be offset from UTC. If set, the date and
time is displayed in the specified time zone. If not set, the time is displayed in the user's
time zone.
@param timeZoneOffsetMins The number of minutes that the time zone is offset from UTC.
@return This picker, for chaining.*/setTimeZoneOffsetInMins(timeZoneOffsetMins:Integer):CardService.DateTimePicker;
/**Sets the title displayed above the input field.
@param title The input field title.
@return This picker, for chaining.*/setTitle(title:string):CardService.DateTimePicker;
/**Sets the prefilled value to be set in the input field.
@param valueMsEpoch The default value placed in the input as a number, in milliseconds since
    the epoch. It is always represented as a string in the form callback parameters.
@return This picker, for chaining.*/setValueInMsSinceEpoch(valueMsEpoch:number):CardService.DateTimePicker;
/**Sets the prefilled value to be set in the input field.
@param valueMsEpoch The default value placed in the input as a string, in milliseconds since
    the epoch. It is always represented as a string in the form callback parameters.
@return This picker, for chaining.*/setValueInMsSinceEpoch(valueMsEpoch:string):CardService.DateTimePicker;}interface DatePicker{
/**Sets the field name that identifies this picker in the event object that is generated when
there is a UI interaction. The field name is visible to the user. Required; the specified field
name must be unique.
@param fieldName The name to assign to this input.
@return This picker, for chaining.*/setFieldName(fieldName:string):CardService.DatePicker;
/**Sets an [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) that the script performs whenever the picker input changes.
@param action The action to take.
@return This picker, for chaining.*/setOnChangeAction(action:CardService.Action):CardService.DatePicker;
/**Sets the title displayed above the input field.
@param title The input field title.
@return This picker, for chaining.*/setTitle(title:string):CardService.DatePicker;
/**Sets the prefilled value to be set in the input field.
@param valueMsEpoch The default value placed in the input as a number, in milliseconds since
    the epoch. Only the date of the epoch time is used, and the time of the epoch time is
    discarded. It is always represented as a string in the form callback parameters.
@return This picker, for chaining.*/setValueInMsSinceEpoch(valueMsEpoch:number):CardService.DatePicker;
/**Sets the prefilled value to be set in the input field.
@param valueMsEpoch The default value placed in the input as a string, in milliseconds since
    the epoch. Only the date of the epoch time is used, and the time of the epoch time is
    discarded. It is always represented as a string in the form callback parameters.
@return This picker, for chaining.*/setValueInMsSinceEpoch(valueMsEpoch:string):CardService.DatePicker;}interface ContentType{}interface _ContentType{
/**Indicates that the generated content is formatted as HTML, but this content cannot be edited
after it is generated.*/IMMUTABLE_HTML:ContentType;
/**Indicates that the generated content is formatted as HTML. The content can be edited after it
is generated.*/MUTABLE_HTML:ContentType;
/**Indicates that the generated content is plain text. Default.*/TEXT:ContentType;}interface ComposedEmailType{}interface _ComposedEmailType{
/**A draft that is a reply to another message. Default.*/REPLY_AS_DRAFT:ComposedEmailType;
/**A draft that is a standalone message.*/STANDALONE_DRAFT:ComposedEmailType;}interface ComposeActionResponseBuilder{
/**Builds the current compose action response and validates it.
@return A validated [`ComposeActionResponse`](https://developers.google.com/apps-script/reference/card-service/compose-action-response.html).*/build():CardService.ComposeActionResponse;
/**Sets the draft [`GmailMessage`](https://developers.google.com/apps-script/reference/card-service/../gmail/gmail-message.html) created
using [`GmailMessage.createDraftReply(body)`](https://developers.google.com/apps-script/reference/card-service/../gmail/gmail-message.html#createDraftReply(String)) or
similar functions.
@param draft The [`GmailDraft`](https://developers.google.com/apps-script/reference/card-service/../gmail/gmail-draft.html) to use.
@return This object, for chaining.*/setGmailDraft(draft:GmailApp.GmailDraft):CardService.ComposeActionResponseBuilder;}interface ComposeActionResponse{printJson():string;}interface CommonDataSource{}interface _CommonDataSource{
/**Default value. Don't use.*/UNKNOWN:CommonDataSource;
/**Google Workspace users.*/USER:CommonDataSource;}interface Columns{
/**Adds a [`Column`](https://developers.google.com/apps-script/reference/card-service/column.html) to the Columns widget. Columns are displayed in the order in which
they're added. You can add up to two columns.

```
const columns = CardService.newColumns()
    .addColumn(CardService.newColumn());
```
@param column A child column to add to the Columns widget.
@return This object, for chaining.*/addColumn(column:CardService.Column):CardService.Columns;
/**Sets the wrap style of the columns, controls how the column resizes based on screen width.

```
const columns = CardService.newColumns()
    .addColumn(CardService.newColumn())
    .setWrapStyle(CardService.WrapStyle.WRAP);
```
@param wrapStyle The wrap style to set for the columns.
@return This object, for chaining.*/setWrapStyle(wrapStyle:CardService.WrapStyle):CardService.Columns;}interface Column{
/**Adds a widget to the column.

Widgets are displayed in the order they are added. You can add the following widgets to a
column:

  + [`TextParagraph`](https://developers.google.com/apps-script/reference/card-service/text-paragraph.html)
  + [`Image`](https://developers.google.com/apps-script/reference/card-service/image.html)
  + [`DecoratedText`](https://developers.google.com/apps-script/reference/card-service/decorated-text.html)
  + [`ButtonSet`](https://developers.google.com/apps-script/reference/card-service/button-set.html)
  + [`TextInput`](https://developers.google.com/apps-script/reference/card-service/text-input.html)
  + [`SelectionInput`](https://developers.google.com/apps-script/reference/card-service/selection-input.html)
  + [`DateTimePicker`](https://developers.google.com/apps-script/reference/card-service/date-time-picker.html)

```
const column = CardService.newColumn()
    .addWidget(CardService.newTextParagraph()
       .setText('This is a text paragraph widget'));
```
@param widget The widget to add to the column.
@return This object, for chaining.*/addWidget(widget:CardService.Widget):CardService.Column;
/**Sets the [`HorizontalAlignment`](https://developers.google.com/apps-script/reference/card-service/horizontal-alignment.html) of the [`Column`](https://developers.google.com/apps-script/reference/card-service/column.html). Optional.

```
const column = CardService.newColumn()
    .setHorizontalAlignment(CardService.HorizontalAlignment.CENTER);
```
@param horizontalAlignment The horizontal alignment of the column.
@return This object, for chaining.*/setHorizontalAlignment(horizontalAlignment:CardService.HorizontalAlignment):CardService.Column;
/**Sets the [`HorizontalSizeStyle`](https://developers.google.com/apps-script/reference/card-service/horizontal-size-style.html) of the Column. Optional.

```
const column = CardService.newColumn()
    .setHorizontalSizeStyle(CardService.HorizontalSizeStyle.FILL_AVAILABLE_SPACE);
```
@param horizontalSizeStyle The horizontal size of the column.
@return This object, for chaining.*/setHorizontalSizeStyle(horizontalSizeStyle:CardService.HorizontalSizeStyle):CardService.Column;
/**Sets the [`VerticalAlignment`](https://developers.google.com/apps-script/reference/card-service/vertical-alignment.html) of the [`Column`](https://developers.google.com/apps-script/reference/card-service/column.html). Optional.

```
const column = CardService.newColumn()
    .setVerticalAlignment(CardService.VerticalAlignment.CENTER);
```
@param verticalAlignment The vertical alignment of the column.
@return This object, for chaining.*/setVerticalAlignment(verticalAlignment:CardService.VerticalAlignment):CardService.Column;}interface CollapseControl{
/**Sets the [`Button`](https://developers.google.com/apps-script/reference/card-service/button.html) that is displayed for "show less" button. Optional.  \

Must be set together with collapse button.

```
const collapseControl = CardService.newCollapseControl()
    .setCollapseButton(collapseButton);
```
@param button The collapse button to set.
@return This object, for chaining.*/setCollapseButton(button:CardService.Button):CardService.CollapseControl;
/**Sets the [`Button`](https://developers.google.com/apps-script/reference/card-service/button.html) that is displayed for "show more" button. Optional.  \

Must be set together with collapse button.

```
const collapseControl = CardService.newCollapseControl()
    .setExpandButton(expandButton);
```
@param button The expand button to set.
@return This object, for chaining.*/setExpandButton(button:CardService.Button):CardService.CollapseControl;
/**Sets the [`HorizontalAlignment`](https://developers.google.com/apps-script/reference/card-service/horizontal-alignment.html) of the [`CollapseControl`](https://developers.google.com/apps-script/reference/card-service/collapse-control.html). Optional. *

```
const collapseControl = CardService.newCollapseControl()
    .setHorizontalAlign(CardService.HorizontalAlignment.START);
```
@param horizontalAlignment The horizontal alignment of the CollapseControl widget.
@return This object, for chaining.*/setHorizontalAlign(horizontalAlignment:CardService.HorizontalAlignment):CardService.CollapseControl;}interface ChipListLayout{}interface _ChipListLayout{
/**The chips scroll horizontally if they don't fit in the available space.*/HORIZONTAL_SCROLLABLE:ChipListLayout;
/**The chip list wraps to the next line if there isn't enough horizontal space. Default.*/WRAPPED:ChipListLayout;}interface ChipList{
/**Adds a chip.
@param chip The chip to add.
@return This object, for chaining.*/addChip(chip:CardService.Chip):CardService.ChipList;
/**Sets the chip list layout. If unset, it defaults to [`ChipListLayout.WRAPPED`](https://developers.google.com/apps-script/reference/card-service/chip-list-layout.html#WRAPPED) layout.

```
var chip = CardService.newChip();
// Finish building the text chip...

var chipList = CardService.newChipList()
    .setLayout(CardService.ChipListLayout.HORIZONTAL_SCROLLABLE)
    .addChip(chip);
```
@param layout The chip list layout.
@return This object, for chaining.*/setLayout(layout:CardService.ChipListLayout):CardService.ChipList;}interface Chip{
/**Sets the alternative text of the chip for accessibility. If unset, defaults to the text that
displays on the chip.
@param altText The alternative text to assign to this chip.
@return This object, for chaining.*/setAltText(altText:string):CardService.Chip;
/**Sets an authorization action that opens a URL to the authorization flow when the object is
clicked. This opens the URL in a new window. When the user finishes the authorization flow and
returns to the application, the add-on reloads.

A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/chip.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/chip.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/chip.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/chip.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/chip.html#setComposeAction(Action,ComposedEmailType)) set.

```
// ...

var action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);

```
@param action The object that specifies the authorization action to take when this element is
    clicked.
@return This object, for chaining.*/setAuthorizationAction(action:CardService.AuthorizationAction):CardService.Chip;
/**Sets an action that composes a draft email when the object is clicked. A UI object can only
have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/chip.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/chip.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/chip.html#setOnClickOpenLinkAction(Action)),
[`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/chip.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/chip.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ComposeActionResponse`](https://developers.google.com/apps-script/reference/card-service/compose-action-response.html) object configured using [`ComposeActionResponseBuilder.setGmailDraft(draft)`](https://developers.google.com/apps-script/reference/card-service/compose-action-response-builder.html#setGmailDraft(GmailDraft)).

__Note__: This method doesn't set a __compose action__ that is
used to [extend the compose UI](/gmail/add-ons/how-tos/extending-compose-ui).
Rather, this method connects this UI element to an [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) that [composes draft messages](/gmail/add-ons/how-tos/compose) in Apps Script that are
opened in Gmail when the action completes. 

```
// ...

var action = CardService.newAction().setFunctionName('composeEmailCallback');
CardService.newTextButton()
    .setText('Compose Email')
    .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);

// ...

function composeEmailCallback() {
  var thread = GmailApp.getThreadById(e.threadId);
  var draft = thread.createDraftReply('This is a reply');
  return CardService.newComposeActionResponseBuilder()
      .setGmailDraft(draft)
      .build();
}
```
@param action The object that specifies the compose action to take when this element is
    clicked.
@param composedEmailType An enum value that specifies whether the composed draft is a
    standalone or reply draft.
@return This object, for chaining.*/setComposeAction(action:CardService.Action,composedEmailType:CardService.ComposedEmailType):CardService.Chip;
/**Sets whether the chip is disabled. A disabled chip is greyed out and cannot be clicked.

```
const chip = CardService.newChip()
    .setLabel("bug Report")
    .setDisabled(true);
```
@param disabled The disabled state.
@return This object, for chaining.*/setDisabled(disabled:boolean):CardService.Chip;
/**Sets the icon to be used as the chip.

```
const chip = CardService.newChip()
    .setIcon(CardService.newIconImage()
       .setMaterialIcon(CardService.newMaterialIcon().setName("bug_report")));
```
@param icon One of the predefined [`IconImage`](https://developers.google.com/apps-script/reference/card-service/icon-image.html) values.
@return This object, for chaining.*/setIcon(icon:CardService.IconImage):CardService.Chip;
/**Sets the title of the chip. Required.

```
const chip = CardService.newChip()
    .setLabel("bug Report");
```
@param label The text to display.
@return This object, for chaining.*/setLabel(label:string):CardService.Chip;
/**Sets an action that executes when the object is clicked. A UI object can only have one of
[`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/chip.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/chip.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/chip.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/chip.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/chip.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ActionResponse`](https://developers.google.com/apps-script/reference/card-service/action-response.html) object.

```
// ...

var action = CardService.newAction().setFunctionName('notificationCallback');
CardService.newTextButton().setText('Create notification').setOnClickAction(action);

// ...

function notificationCallback() {
  return CardService.newActionResponseBuilder()
      .setNotification(CardService.newNotification()
          .setText("Some info to display to user"))
      .build();
}
```
@param action The action to take when this element is clicked.
@return This object, for chaining.*/setOnClickAction(action:CardService.Action):CardService.Chip;
/**Sets an action that opens a URL in a tab when the object is clicked. Use this function when the
URL needs to be built or when you need to take other actions in addition to creating the [`OpenLink`](https://developers.google.com/apps-script/reference/card-service/open-link.html) object. A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/chip.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/chip.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/chip.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/chip.html#setAuthorizationAction(AuthorizationAction)), or
[`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/chip.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ActionResponse`](https://developers.google.com/apps-script/reference/card-service/action-response.html) object configured using [`ActionResponseBuilder.setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/action-response-builder.html#setOpenLink(OpenLink)).

```
// ...

var action = CardService.newAction().setFunctionName('openLinkCallback');
CardService.newTextButton().setText('Open Link').setOnClickOpenLinkAction(action);

// ...

function openLinkCallback() {
  return CardService.newActionResponseBuilder()
      .setOpenLink(CardService.newOpenLink()
          .setUrl('https://www.google.com'))
      .build();
}
```
@param action The object that specifies the open link action to take when this element is
    clicked.
@return This object, for chaining.*/setOnClickOpenLinkAction(action:CardService.Action):CardService.Chip;
/**Sets a URL to be opened when the object is clicked. Use this function when the URL is already
known and only needs to be opened. A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/chip.html#setOpenLink(OpenLink)),
[`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/chip.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/chip.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/chip.html#setAuthorizationAction(AuthorizationAction)),
or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/chip.html#setComposeAction(Action,ComposedEmailType)) set.
@param openLink An [`OpenLink`](https://developers.google.com/apps-script/reference/card-service/open-link.html) object describing the URL to open.
@return This object, for chaining.*/setOpenLink(openLink:CardService.OpenLink):CardService.Chip;}interface ChatSpaceDataSource{
/**If set to `true`, the multi select menu selects the current Google Chat space as an item
by default.

```
const chatSpaceDataSource = CardService.newChatSpaceDataSource()
    .setDefaultToCurrentSpace(true);
```

Only available for Google Chat apps. Not available for Google Workspace Add-ons.
@param defaultToCurrentSpace The boolean to be set.
@return This object, for chaining.*/setDefaultToCurrentSpace(defaultToCurrentSpace:boolean):CardService.ChatSpaceDataSource;}interface ChatResponseBuilder{
/**Sets the card field of the message. This is used to send a card in a Google Chat message. Each
card is associated with a unique id, [`CardWithId`](https://developers.google.com/apps-script/reference/card-service/card-with-id.html) object should be built and be used with
this method.

```
const cardSection = CardService.newCardSection();
cardSection.addWidget(
    CardService.newTextParagraph().setText('This is a text paragraph widget.'));

const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle('Card title'))
    .addSection(cardSection)
    .build();

const cardWithId = CardService.newCardWithId()
    .setCardId('card_id')
    .setCard(card);

const chatResponse = CardService.newChatResponseBuilder()
    .addCardsV2(cardWithId)
    .build();
```
@param cardWithId The [`CardWithId`](https://developers.google.com/apps-script/reference/card-service/card-with-id.html) to use.
@return This object, for chaining.*/addCardsV2(cardWithId:CardService.CardWithId):CardService.ChatResponseBuilder;
/**Builds the current action response and validates it.
@return A validated ChatResponse.*/build():CardService.ChatResponse;
/**Sets the action response field of the message.

```
// Build the card.
const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle('card title')).build();

// Creates the dialog.
const dialog = CardService.newDialog()
    .setBody(card);

// Creates the dialog action.
const dialogAction = CardService.newDialogAction()
   .setDialog(dialog)

// Creates the action response and sets the type to DIALOG.
const actionResponse = CardService.newChatActionResponse()
       .setDialogAction(dialogAction).setResponseType(CardService.Type.DIALOG);

// Creates the Chat response and sets the action response.
const chatResponse = CardService.newChatResponseBuilder()
       .setActionResponse(actionResponse)
    .build();
```
@param actionResponse The [`ChatActionResponse`](https://developers.google.com/apps-script/reference/card-service/chat-action-response.html) to use.
@return This object, for chaining.*/setActionResponse(actionResponse:CardService.ChatActionResponse):CardService.ChatResponseBuilder;
/**Sets the text of the Chat message.

```
const chatResponse = CardService.newChatResponseBuilder()
       .setText('Example text')
    .build();
```
@param text The text to use.
@return This object, for chaining.*/setText(text:string):CardService.ChatResponseBuilder;}interface ChatResponse{printJson():string;}interface ChatClientDataSource{
/**A data source that populates Google Chat spaces as selection items for a multiselect menu. Only
populates spaces that the user is a member of.

```
const chatSpaceDataSource = CardService.newChatSpaceDataSource()
    .setDefaultToCurrentSpace(true);

const chatClientDataSource = CardService.newChatClientDataSource()
    .setSpaceDataSource(chatSpaceDataSource);
```

Only available for Google Chat apps. Not available for Google Workspace Add-ons.
@param spaceDataSource The data source to be set.
@return This object, for chaining.*/setSpaceDataSource(spaceDataSource:CardService.ChatSpaceDataSource):CardService.ChatClientDataSource;}interface ChatActionResponse{
/**Sets the dialog action to an event related to a dialog.

```
const card = CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader().setTitle('Card title')).build();
const dialog = CardService.newDialog()
    .setBody(card);

const dialogAction = CardService.newDialogAction()
   .setDialog(dialog)

const chatActionResponse = CardService.newChatActionResponse()
   .setResponseType(CardService.Type.DIALOG)
   .setDialogAction(dialogAction);
```
@param dialogAction The dialog action to set.
@return This object, for chaining.*/setDialogAction(dialogAction:CardService.DialogAction):CardService.ChatActionResponse;
/**The type of Chat app response.

```
const chatActionResponse = CardService.newChatActionResponse()
   .setResponseType(CardService.Type.DIALOG)
```
@param responseType The response type.
@return This object, for chaining.*/setResponseType(responseType:CardService.ResponseType):CardService.ChatActionResponse;
/**Sets the updated widget, used to provide autocomplete options for a widget.

```
const updatedWidget = CardService.newUpdatedWidget()
    .addItem("Contact 1", "contact-1", false,
       "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
       "Contact one description")
    .addItem("Contact 2", "contact-2", false,
       "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
       "Contact two description")
    .addItem("Contact 3", "contact-3", false,
       "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
       "Contact three description")
    .addItem("Contact 4", "contact-4", false,
       "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
       "Contact four description")
    .addItem("Contact 5", "contact-5", false,
       "https://www.gstatic.com/images/branding/product/2x/contacts_48dp.png",
       "Contact five description");

const actionResponse = CardService.newChatActionResponse()
    .setUpdatedWidget(updatedWidget)
    .setResponseType(CardService.ResponseType.UPDATE_WIDGET);
```

Only available for Google Chat apps. Not available for Google Workspace Add-ons.
@param updatedWidget The updated widget to be set.
@return This object, for chaining.*/setUpdatedWidget(updatedWidget:CardService.UpdatedWidget):CardService.ChatActionResponse;
/**The URL for users to authenticate or configure. Only for the `REQUEST_CONFIG` response
type.

```
const chatActionResponse = CardService.newChatActionResponse()
   .setResponseType(CardService.Type.REQUEST_CONFIG)
   .setUrl('https://www.google.com');
```
@param url The URL to send.
@return This object, for chaining.*/setUrl(url:string):CardService.ChatActionResponse;}interface CardWithId{
/**Sets the card of the `cardWithId`.

```
const cardHeader = CardService.newCardHeader()
    .setTitle('Card Header Title')
    .setSubtitle('Card Header Subtitle');

const card = CardService.newCardBuilder()
    .setHeader(cardHeader)
    .build();

const cardWithId = CardService.newCardWithId()
    .setCard(card);
```
@param card The [`Card`](https://developers.google.com/apps-script/reference/card-service/card.html) to use.
@return This object, for chaining.*/setCard(card:CardService.Card):CardService.CardWithId;
/**Sets the unique card ID of the `cardWithId`.

```
const cardWithId = CardService.newCardWithId();

// Sets the card ID of the cardWithId.
cardWithId.setCardId('card_id');
```
@param id The text to use.
@return This object, for chaining.*/setCardId(id:string):CardService.CardWithId;}interface CardSection{
/**Adds the given widget to this section. Widgets are shown in the order they were added. You
can't add more than 100 widgets to a card section.
@param widget A widget to add to the section.
@return This object, for chaining.*/addWidget(widget:CardService.Widget):CardService.CardSection;
/**Sets the customizable expand and collapse buttons of the section. These buttons are shown only
if the section is collapsible. If this field isn't set, default buttons are used.

Only available for Google Chat apps. Not available for Google Workspace Add-ons.

[Developer Preview](https://developers.google.com/workspace/preview).
@param collapseControl The collapse control setting.
@return This object, for chaining.*/setCollapseControl(collapseControl:CardService.CollapseControl):CardService.CardSection;
/**Sets whether the section can be collapsed.
@param collapsible The collapsible setting.
@return This object, for chaining.*/setCollapsible(collapsible:boolean):CardService.CardSection;
/**Sets the header of the section. Optional.
@param header The header text.
@return This object, for chaining.*/setHeader(header:string):CardService.CardSection;
/**Sets the number of widgets that are still shown when this section is collapsed. The widgets
shown are always the first ones that were added.
@param numUncollapsibleWidgets The number of widgets to show.
@return This object, for chaining.*/setNumUncollapsibleWidgets(numUncollapsibleWidgets:Integer):CardService.CardSection;}interface CardHeader{
/**Sets the alternative text for the header image.
@param imageAltText The alternative text for the header image.
@return This object, for chaining.*/setImageAltText(imageAltText:string):CardService.CardHeader;
/**Sets the cropping of the icon in the card header. Defaults to no crop. Optional.
@param imageStyle The style setting.
@return This object, for chaining.*/setImageStyle(imageStyle:CardService.ImageStyle):CardService.CardHeader;
/**Sets the image to use in the header by providing its URL or data string.

The provided URL can either be a publicly accessible URL or a base64 encoded image string.
To obtain the latter, you can use the following code to create an encoded image string from an
image in your Google Drive, then store that string for later use with [`setImageUrl(imageUrl)`](https://developers.google.com/apps-script/reference/card-service/card-header.html#setImageUrl(String)). This method prevents the need for your add-on to access a publicly
available image URL:

```
// The following assumes you have the image to use in Google Drive and have its ID.
var imageBytes = DriveApp.getFileById(imageID).getBlob().getBytes();
var encodedImageURL = "data:image/jpeg;base64," + Utilities.base64Encode(imageBytes);

// You can store encodeImageURL and use it as a parameter to CardHeader.setImageUrl(imageUrl).
```
@param imageUrl The URL address of a hosted image to use, or an encoded image string.
@return This object, for chaining.*/setImageUrl(imageUrl:string):CardService.CardHeader;
/**Sets the subtitle of the card header. Optional.
@param subtitle The header subtitle text.
@return This object, for chaining.*/setSubtitle(subtitle:string):CardService.CardHeader;
/**Sets the title of the card header. Required.
@param title The header text.
@return This object, for chaining.*/setTitle(title:string):CardService.CardHeader;}interface CardBuilder{
/**Adds a [`CardAction`](https://developers.google.com/apps-script/reference/card-service/card-action.html) to this Card.
@param cardAction The [`CardAction`](https://developers.google.com/apps-script/reference/card-service/card-action.html) to use.
@return This object, for chaining.*/addCardAction(cardAction:CardService.CardAction):CardService.CardBuilder;
/**Adds a section to this card. You can't add more than 100 sections to a card.
@param section The [`CardSection`](https://developers.google.com/apps-script/reference/card-service/card-section.html) to use.
@return This object, for chaining.*/addSection(section:CardService.CardSection):CardService.CardBuilder;
/**Builds the current card and validates it.
@return A validated card.*/build():CardService.Card;
/**Sets the display style for this card.

If the display style is set to `DisplayStyle.REPLACE`, the card is shown by replacing
the view of top card in the card stack.

If the display style is set to `DisplayStyle.PEEK`, the header of the card appears at
the bottom of the sidebar, partially covering the current top card of the stack. Clicking the
header pops the card into the card stack. If the card has no header, a generated header is used
instead.

`DisplayStyle` only works for card returned from contextual trigger function.
@param displayStyle The [`DisplayStyle`](https://developers.google.com/apps-script/reference/card-service/display-style.html) to set.
@return This object, for chaining.*/setDisplayStyle(displayStyle:CardService.DisplayStyle):CardService.CardBuilder;
/**Sets a fixed footer for this card.
@param fixedFooter The [`FixedFooter`](https://developers.google.com/apps-script/reference/card-service/fixed-footer.html) to use.
@return This object, for chaining.*/setFixedFooter(fixedFooter:CardService.FixedFooter):CardService.CardBuilder;
/**Sets the header for this card.
@param cardHeader The [`CardHeader`](https://developers.google.com/apps-script/reference/card-service/card-header.html) to use.
@return This object, for chaining.*/setHeader(cardHeader:CardService.CardHeader):CardService.CardBuilder;
/**Sets the name for this card. The name can be used for [navigation](/gmail/add-ons/how-tos/navigation).
@param name The name.
@return This object, for chaining.*/setName(name:string):CardService.CardBuilder;
/**Sets the peek card header.

The peek card is set on the first card returned from a contextual trigger function. It is
used as a descriptive placeholder widget so that users can navigate from a homepage stack to
the contextual stack.
@param peekCardHeader The [`CardHeader`](https://developers.google.com/apps-script/reference/card-service/card-header.html) to set.
@return This object, for chaining.*/setPeekCardHeader(peekCardHeader:CardService.CardHeader):CardService.CardBuilder;}interface CardAction{
/**Sets an authorization action that opens a URL to the authorization flow when the object is
clicked. This opens the URL in a new window. When the user finishes the authorization flow and
returns to the application, the add-on reloads.

A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/card-action.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/card-action.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/card-action.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/card-action.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/card-action.html#setComposeAction(Action,ComposedEmailType)) set.

```
// ...

var action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);

```
@param action The object that specifies the authorization action to take when this element is
    clicked.
@return This object, for chaining.*/setAuthorizationAction(action:CardService.AuthorizationAction):CardService.CardAction;
/**Sets an action that composes a draft email when the object is clicked. A UI object can only
have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/card-action.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/card-action.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/card-action.html#setOnClickOpenLinkAction(Action)),
[`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/card-action.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/card-action.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ComposeActionResponse`](https://developers.google.com/apps-script/reference/card-service/compose-action-response.html) object configured using [`ComposeActionResponseBuilder.setGmailDraft(draft)`](https://developers.google.com/apps-script/reference/card-service/compose-action-response-builder.html#setGmailDraft(GmailDraft)).

__Note__: This method doesn't set a __compose action__ that is
used to [extend the compose UI](/gmail/add-ons/how-tos/extending-compose-ui).
Rather, this method connects this UI element to an [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) that [composes draft messages](/gmail/add-ons/how-tos/compose) in Apps Script that are
opened in Gmail when the action completes. 

```
// ...

var action = CardService.newAction().setFunctionName('composeEmailCallback');
CardService.newTextButton()
    .setText('Compose Email')
    .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);

// ...

function composeEmailCallback() {
  var thread = GmailApp.getThreadById(e.threadId);
  var draft = thread.createDraftReply('This is a reply');
  return CardService.newComposeActionResponseBuilder()
      .setGmailDraft(draft)
      .build();
}
```
@param action The object that specifies the compose action to take when this element is
    clicked.
@param composedEmailType An enum value that specifies whether the composed draft is a
    standalone or reply draft.
@return This object, for chaining.*/setComposeAction(action:CardService.Action,composedEmailType:CardService.ComposedEmailType):CardService.CardAction;
/**Sets an action that executes when the object is clicked. A UI object can only have one of
[`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/card-action.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/card-action.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/card-action.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/card-action.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/card-action.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ActionResponse`](https://developers.google.com/apps-script/reference/card-service/action-response.html) object.

```
// ...

var action = CardService.newAction().setFunctionName('notificationCallback');
CardService.newTextButton().setText('Create notification').setOnClickAction(action);

// ...

function notificationCallback() {
  return CardService.newActionResponseBuilder()
      .setNotification(CardService.newNotification()
          .setText("Some info to display to user"))
      .build();
}
```
@param action The action to take when this element is clicked.
@return This object, for chaining.*/setOnClickAction(action:CardService.Action):CardService.CardAction;
/**Sets an action that opens a URL in a tab when the object is clicked. Use this function when the
URL needs to be built or when you need to take other actions in addition to creating the [`OpenLink`](https://developers.google.com/apps-script/reference/card-service/open-link.html) object. A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/card-action.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/card-action.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/card-action.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/card-action.html#setAuthorizationAction(AuthorizationAction)), or
[`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/card-action.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ActionResponse`](https://developers.google.com/apps-script/reference/card-service/action-response.html) object configured using [`ActionResponseBuilder.setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/action-response-builder.html#setOpenLink(OpenLink)).

```
// ...

var action = CardService.newAction().setFunctionName('openLinkCallback');
CardService.newTextButton().setText('Open Link').setOnClickOpenLinkAction(action);

// ...

function openLinkCallback() {
  return CardService.newActionResponseBuilder()
      .setOpenLink(CardService.newOpenLink()
          .setUrl('https://www.google.com'))
      .build();
}
```
@param action The object that specifies the open link action to take when this element is
    clicked.
@return This object, for chaining.*/setOnClickOpenLinkAction(action:CardService.Action):CardService.CardAction;
/**Sets a URL to be opened when the object is clicked. Use this function when the URL is already
known and only needs to be opened. A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/card-action.html#setOpenLink(OpenLink)),
[`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/card-action.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/card-action.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/card-action.html#setAuthorizationAction(AuthorizationAction)),
or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/card-action.html#setComposeAction(Action,ComposedEmailType)) set.
@param openLink An [`OpenLink`](https://developers.google.com/apps-script/reference/card-service/open-link.html) object describing the URL to open.
@return This object, for chaining.*/setOpenLink(openLink:CardService.OpenLink):CardService.CardAction;
/**Sets the menu text for this action.
@param text The menu item text.
@return This object, for chaining.*/setText(text:string):CardService.CardAction;}interface Card{printJson():string;}interface CalendarEventActionResponseBuilder{
/**Specifies that the response should add the attachments to the Calendar event when the
associated UI action is taken.
@param attachments An array of [`Attachment`](https://developers.google.com/apps-script/reference/card-service/attachment.html)s to add.
@return This object, for chaining.*/addAttachments(attachments:CardService.Attachment[]):CardService.CalendarEventActionResponseBuilder;
/**Specifies that the response should add the indicated attendees to the Calendar event when the
associated UI action is taken.
@param emails An array of email addresses to add to the event.
@return This object, for chaining.*/addAttendees(emails:string[]):CardService.CalendarEventActionResponseBuilder;
/**Builds the current Calendar event action response and validates it.
@return A validated [`CalendarEventActionResponse`](https://developers.google.com/apps-script/reference/card-service/calendar-event-action-response.html).*/build():CardService.CalendarEventActionResponse;
/**Specifies that the response should set the indicated conference data to the Calendar event when
the associated UI action is taken.
@param conferenceData Conference data to set to the event, created by an add on.
@return This object, for chaining.*/setConferenceData(conferenceData:ConferenceDataService.ConferenceData):CardService.CalendarEventActionResponseBuilder;}interface CalendarEventActionResponse{printJson():string;}interface ButtonSet{
/**Adds a button.
@param button The button to add.
@return This object, for chaining.*/addButton(button:CardService.Button):CardService.ButtonSet;}interface Button{
/**Sets an authorization action that opens a URL to the authorization flow when the object is
clicked. This opens the URL in a new window. When the user finishes the authorization flow and
returns to the application, the add-on reloads.

A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/button.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/button.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/button.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/button.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/button.html#setComposeAction(Action,ComposedEmailType)) set.

```
// ...

var action = CardService.newAuthorizationAction().setAuthorizationUrl('url');
CardService.newTextButton().setText('Authorize').setAuthorizationAction(action);

```
@param action The object that specifies the authorization action to take when this element is
    clicked.
@return This object, for chaining.*/setAuthorizationAction(action:CardService.AuthorizationAction):CardService.Button;
/**Sets an action that composes a draft email when the object is clicked. A UI object can only
have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/button.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/button.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/button.html#setOnClickOpenLinkAction(Action)),
[`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/button.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/button.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ComposeActionResponse`](https://developers.google.com/apps-script/reference/card-service/compose-action-response.html) object configured using [`ComposeActionResponseBuilder.setGmailDraft(draft)`](https://developers.google.com/apps-script/reference/card-service/compose-action-response-builder.html#setGmailDraft(GmailDraft)).

__Note__: This method doesn't set a __compose action__ that is
used to [extend the compose UI](/gmail/add-ons/how-tos/extending-compose-ui).
Rather, this method connects this UI element to an [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) that [composes draft messages](/gmail/add-ons/how-tos/compose) in Apps Script that are
opened in Gmail when the action completes. 

```
// ...

var action = CardService.newAction().setFunctionName('composeEmailCallback');
CardService.newTextButton()
    .setText('Compose Email')
    .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT);

// ...

function composeEmailCallback() {
  var thread = GmailApp.getThreadById(e.threadId);
  var draft = thread.createDraftReply('This is a reply');
  return CardService.newComposeActionResponseBuilder()
      .setGmailDraft(draft)
      .build();
}
```
@param action The object that specifies the compose action to take when this element is
    clicked.
@param composedEmailType An enum value that specifies whether the composed draft is a
    standalone or reply draft.
@return This object, for chaining.*/setComposeAction(action:CardService.Action,composedEmailType:CardService.ComposedEmailType):CardService.Button;
/**Sets an action that executes when the object is clicked. A UI object can only have one of
[`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/button.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/button.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/button.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/button.html#setAuthorizationAction(AuthorizationAction)), or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/button.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ActionResponse`](https://developers.google.com/apps-script/reference/card-service/action-response.html) object.

```
// ...

var action = CardService.newAction().setFunctionName('notificationCallback');
CardService.newTextButton().setText('Create notification').setOnClickAction(action);

// ...

function notificationCallback() {
  return CardService.newActionResponseBuilder()
      .setNotification(CardService.newNotification()
          .setText("Some info to display to user"))
      .build();
}
```
@param action The action to take when this element is clicked.
@return This object, for chaining.*/setOnClickAction(action:CardService.Action):CardService.Button;
/**Sets an action that opens a URL in a tab when the object is clicked. Use this function when the
URL needs to be built or when you need to take other actions in addition to creating the [`OpenLink`](https://developers.google.com/apps-script/reference/card-service/open-link.html) object. A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/button.html#setOpenLink(OpenLink)), [`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/button.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/button.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/button.html#setAuthorizationAction(AuthorizationAction)), or
[`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/button.html#setComposeAction(Action,ComposedEmailType)) set.

The [`Action`](https://developers.google.com/apps-script/reference/card-service/action.html) parameter must specify a callback function that returns a [`ActionResponse`](https://developers.google.com/apps-script/reference/card-service/action-response.html) object configured using [`ActionResponseBuilder.setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/action-response-builder.html#setOpenLink(OpenLink)).

```
// ...

var action = CardService.newAction().setFunctionName('openLinkCallback');
CardService.newTextButton().setText('Open Link').setOnClickOpenLinkAction(action);

// ...

function openLinkCallback() {
  return CardService.newActionResponseBuilder()
      .setOpenLink(CardService.newOpenLink()
          .setUrl('https://www.google.com'))
      .build();
}
```
@param action The object that specifies the open link action to take when this element is
    clicked.
@return This object, for chaining.*/setOnClickOpenLinkAction(action:CardService.Action):CardService.Button;
/**Sets a URL to be opened when the object is clicked. Use this function when the URL is already
known and only needs to be opened. A UI object can only have one of [`setOpenLink(openLink)`](https://developers.google.com/apps-script/reference/card-service/button.html#setOpenLink(OpenLink)),
[`setOnClickAction(action)`](https://developers.google.com/apps-script/reference/card-service/button.html#setOnClickAction(Action)), [`setOnClickOpenLinkAction(action)`](https://developers.google.com/apps-script/reference/card-service/button.html#setOnClickOpenLinkAction(Action)), [`setAuthorizationAction(action)`](https://developers.google.com/apps-script/reference/card-service/button.html#setAuthorizationAction(AuthorizationAction)),
or [`setComposeAction(action, composedEmailType)`](https://developers.google.com/apps-script/reference/card-service/button.html#setComposeAction(Action,ComposedEmailType)) set.
@param openLink An [`OpenLink`](https://developers.google.com/apps-script/reference/card-service/open-link.html) object describing the URL to open.
@return This object, for chaining.*/setOpenLink(openLink:CardService.OpenLink):CardService.Button;
/**Sets a pop-up menu to be opened when the object is clicked. Each item in the menu can specify
an action to be triggered when clicked. Nested menus are not supported, actions for menu items
should not specify an overflow menu.

Only available for Google Chat apps. Not available for Google Workspace Add-ons.

```
  var overflowMenuItem = CardService.newOverflowMenuItem()
    .setStartIcon(CardService.newIconImage()
    .setIconUrl("https://www.google.com/images/branding/googleg/1x/googleg_standard_color_64dp.png"))
    .setText("Open Link")
    .setOpenLink(CardService.newOpenLink()
        .setUrl("https://www.google.com"));

var overflowMenu = CardService.newOverflowMenu()
    .addMenuItem(overflowMenuItem).build();
```

[Developer Preview](https://developers.google.com/workspace/preview).
@param menu The object that specifies the overflow menu to display when this element is
    clicked.
@return This object, for chaining.*/setOverflowMenu(menu:CardService.OverflowMenu):CardService.Button;}interface BorderType{}interface _BorderType{
/**No border style.*/NO_BORDER:BorderType;
/**Stroke border style.*/STROKE:BorderType;}interface BorderStyle{
/**Sets the corner radius of the border, for example 8.
@param radius The corner radius to be applied to the border.
@return This object, for chaining.*/setCornerRadius(radius:Integer):CardService.BorderStyle;
/**Sets the color of the border.
@param color The color in #RGB format to be applied to the border.
@return This object, for chaining.*/setStrokeColor(color:string):CardService.BorderStyle;
/**Sets the type of the border.
@param type The border type.
@return This object, for chaining.*/setType(type:CardService.BorderType):CardService.BorderStyle;}interface AuthorizationException{printJson():string;
/**Sets the authorization URL that user is taken to from the authorization prompt. Required.
@param authUrl The authorization URL to set.
@return This object, for chaining.*/setAuthorizationUrl(authUrl:string):CardService.AuthorizationException;
/**The name of a function to call to generate a custom authorization prompt. Optional.
@param callback The name of the function that generates a custom authorization prompt.
@return This object, for chaining.*/setCustomUiCallback(callback:string):CardService.AuthorizationException;
/**Sets the name that is displayed to the user when asking for authorization. Required.
@param name The display name.
@return This object, for chaining.*/setResourceDisplayName(name:string):CardService.AuthorizationException;
/**Triggers this exception to be thrown.*/throwException():void;}interface AuthorizationAction{
/**Sets the authorization URL that user is taken to from the authorization prompt. Required.
@param authorizationUrl The authorization URL to set.
@return This object, for chaining.*/setAuthorizationUrl(authorizationUrl:string):CardService.AuthorizationAction;}interface Attachment{
/**Sets the icon URL for the attachment.
@param iconUrl The URL address of the attachment icon.
@return This object, for chaining.*/setIconUrl(iconUrl:string):CardService.Attachment;
/**Sets the MIME type for the attachment.
@param mimeType The MIME type of the content in the attachment resource.
@return This object, for chaining.*/setMimeType(mimeType:string):CardService.Attachment;
/**Sets the resource URL for the attachment.
@param resourceUrl The URL address of a resource.
@return This object, for chaining.*/setResourceUrl(resourceUrl:string):CardService.Attachment;
/**Sets the title for the attachment.
@param title The title of the attachment.
@return This object, for chaining.*/setTitle(title:string):CardService.Attachment;}interface ActionStatus{
/**Represents the status for a request to either open or submit a dialog.

```
const actionStatus = CardService.newActionStatus()
    .setStatusCode(CardService.Status.OK)
```
@param statusCode The status code.
@return This object, for chaining.*/setStatusCode(statusCode:CardService.Status):CardService.ActionStatus;
/**The message to send users about the status of their request. If unset, a generic message based
on the `Status` is sent.

```
const actionStatus = CardService.newActionStatus()
    .setUserFacingMessage('Success');
```
@param message The message to send.
@return This object, for chaining.*/setUserFacingMessage(message:string):CardService.ActionStatus;}interface ActionResponseBuilder{
/**Builds the current action response and validates it.
@return A validated ActionResponse.*/build():CardService.ActionResponse;
/**Sets the response to a [`Navigation`](https://developers.google.com/apps-script/reference/card-service/navigation.html) action.
@param navigation The [`Navigation`](https://developers.google.com/apps-script/reference/card-service/navigation.html) to use.
@return This object, for chaining.*/setNavigation(navigation:CardService.Navigation):CardService.ActionResponseBuilder;
/**Sets the notification to display when the action is activated.
@param notification The [`Notification`](https://developers.google.com/apps-script/reference/card-service/notification.html) to use.
@return This object, for chaining.*/setNotification(notification:CardService.Notification):CardService.ActionResponseBuilder;
/**Sets the URL to navigate to when the action is activated.
@param openLink The [`OpenLink`](https://developers.google.com/apps-script/reference/card-service/open-link.html) to use.
@return This object, for chaining.*/setOpenLink(openLink:CardService.OpenLink):CardService.ActionResponseBuilder;
/**Sets a flag to indicate that this action changed the existing data state. For example, if the
action created a task or updated contact information. When this flag is set to true, services
such as Gmail can attempt to clear any cached state data associated with this action.
@param stateChanged Whether this action has changed the existing state data. Defaults to false.
@return This object, for chaining.*/setStateChanged(stateChanged:boolean):CardService.ActionResponseBuilder;}interface ActionResponse{printJson():string;}interface Action{
/**Adds the names of the widgets that this Action needs for a valid submission. If the widgets in
this list don't have a value when this Action is invoked, the form submission is aborted.

Only available for Google Chat apps. Not available for Google Workspace Add-ons.

```
var textInput = CardService.newTextInput()
    .setFieldName("text_input_1")
    .setTitle("Text input title")

// Creates a footer button that requires an input from the above TextInput Widget.
var action = CardService.newAction()
    .setFunctionName("notificationCallback")
    .addRequiredWidget("text_input_1");
var fixedFooter =
      CardService
          .newFixedFooter()
          .setPrimaryButton(
              CardService
                  .newTextButton()
                  .setText("help")
                  .setOnClickAction(action));
```
@param requiredWidget The name of the widget required by this Action.
@return This object, for chaining.*/addRequiredWidget(requiredWidget:string):CardService.Action;
/**Indicates whether this Action requires inputs from all widgets.

Only available for Google Chat apps. Not available for Google Workspace Add-ons.

```
// Creates a button with an action that requires inputs from all widgets.
const button = CardService.newTextButton()
    .setText('Create notification')
    .setOnClickAction(
        CardService.newAction()
            .setAllWidgetsAreRequired(true));
```
@param allWidgetsAreRequired Whether the action requires inputs from all widgets. Defaults to
    `false`.
@return This object, for chaining.*/setAllWidgetsAreRequired(allWidgetsAreRequired:boolean):CardService.Action;
/**Sets the name of the callback function to be called. Required.
@param functionName The name of the function. You can use functions from included libraries,
    such as `Library.libFunction1`.
@return This object, for chaining.*/setFunctionName(functionName:string):CardService.Action;
/**Sets the interaction with a user, only required when opening a dialog. If unspecified, the app
responds by executing an `Action` like opening a link or running a function—as normal.

Only available for Google Chat apps. Not available for Google Workspace Add-ons.

```
const action = CardService.newAction()
    .setFunctionName('handleDialog')
    .setInteraction(CardService.Interaction.OPEN_DIALOG);
```
@param interaction The interaction to specify.
@return This object, for chaining.*/setInteraction(interaction:CardService.Interaction):CardService.Action;
/**Sets the loading indicator that displays while the action is in progress.
@param loadIndicator The indicator to display.
@return This object, for chaining.*/setLoadIndicator(loadIndicator:CardService.LoadIndicator):CardService.Action;setMethodName(functionName:string):CardService.Action;
/**Allows custom parameters to be passed to the callback function. Optional.
@param parameters Both keys and values must be strings.
@return This object, for chaining.*/setParameters(parameters:Object):CardService.Action;
/**Indicates whether form values are determined by the client's values or the server's values
after an action response updates the form's [`Card`](https://developers.google.com/apps-script/reference/card-service/card.html). When set to `true`, the
client's values persist after the server response. When set to `false`, the server's
values overwrite the form values. Defaults to `false`.

Persisting the client values helps prevent situations where a form changes unexpectedly
after a user makes an edit. For example, if a user makes an edit to a [`TextInput`](https://developers.google.com/apps-script/reference/card-service/text-input.html) after
submitting a form, but before the server responds. If the values are persisted, the edit the
user made remains after the server response updates the [`Card`](https://developers.google.com/apps-script/reference/card-service/card.html); otherwise the form value
returns to the value that the user originally submitted to the form.

Persisting client values can interfere with your script's ability to clear form fields or
override form values, so avoid turning on persistence for that type of functionality. Without
persistence, it's recommended that you use the [`LoadIndicator.SPINNER`](https://developers.google.com/apps-script/reference/card-service/load-indicator.html#SPINNER) for events,
because this locks the UI and prevents user edits before the server responds. Alternatively,
you can use [`LoadIndicator.NONE`](https://developers.google.com/apps-script/reference/card-service/load-indicator.html#NONE) and make sure every element in the form has an onChange
action.

```
// Creates a button with an action that persists the client's values as the on-click action.
const button = CardService.newTextButton()
    .setText('Create notification')
    .setOnClickAction(
        CardService.newAction()
            .setPersistValues(true)
            .setFunctionName('functionName'));
```
@param persistValues Whether to persist values. Defaults to `false`.
@return This object, for chaining.*/setPersistValues(persistValues:boolean):CardService.Action;}}const CardService:CardService;