interface FormApp {
  /**An enumeration of types of image alignment.*/ Alignment: FormApp._Alignment;
  /**An enumeration of types of destinations that can store form responses.*/ DestinationType: FormApp._DestinationType;
  /**An enumeration of types of form [`Feedbacks`](https://developers.google.com/apps-script/reference/forms/quiz-feedback.html).*/ FeedbackType: FormApp._FeedbackType;
  /**An enumeration of types of form [`Items`](https://developers.google.com/apps-script/reference/forms/item.html).*/ ItemType: FormApp._ItemType;
  /**An enumeration of possible behaviors for navigating pages.*/ PageNavigationType: FormApp._PageNavigationType;
  /**Creates and returns a new [`Form`](https://developers.google.com/apps-script/reference/forms/form.html). Throws an exception if the given title is `null`
or empty.

```
// Create and open a form.
var form = FormApp.create('Form Name');
```
@param title the name of the new form
@return the new form*/ create(title: string): FormApp.Form;
  /**Returns an instance of a CheckboxGridValidationBuilder which can be used to set validation on a
[`CheckboxGridItem`](https://developers.google.com/apps-script/reference/forms/checkbox-grid-item.html).*/ createCheckboxGridValidation(): FormApp.CheckboxGridValidationBuilder;
  /**Returns an instance of a CheckboxValidationBuilder which can be used to set validation on a
[`CheckboxItem`](https://developers.google.com/apps-script/reference/forms/checkbox-item.html).*/ createCheckboxValidation(): FormApp.CheckboxValidationBuilder;
  /**Returns an instance of a QuizFeedbackBuilder which can be used to set feedback on a gradeable
[`Item`](https://developers.google.com/apps-script/reference/forms/item.html).*/ createFeedback(): FormApp.QuizFeedbackBuilder;
  /**Returns an instance of a GridValidationBuilder which can be used to set validation on a [`GridItem`](https://developers.google.com/apps-script/reference/forms/grid-item.html).*/ createGridValidation(): FormApp.GridValidationBuilder;
  /**Returns an instance of a ParagraphTextValidationBuilder which can be used to set validation on
a [`ParagraphTextItem`](https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html).*/ createParagraphTextValidation(): FormApp.ParagraphTextValidationBuilder;
  /**Returns an instance of a TextValidationBuilder which can be used to set validation on a [`TextItem`](https://developers.google.com/apps-script/reference/forms/text-item.html).*/ createTextValidation(): FormApp.TextValidationBuilder;
  /**Returns the form to which the script is [container-bound](/apps-script/scripts_containers). To interact with forms to which the
script is not container-bound, use [`openById(id)`](https://developers.google.com/apps-script/reference/forms/form-app.html#openById(String)) or [`openByUrl(url)`](https://developers.google.com/apps-script/reference/forms/form-app.html#openByUrl(String))
instead.

```
// Get the form to which this script is bound.
var form = FormApp.getActiveForm();
```
@return the form to which the script is bound, or `null` if the script is not bound to a
    form*/ getActiveForm(): FormApp.Form;
  /**Returns an instance of the form editor's user-interface environment that allows the script to
add features like menus, dialogs, and sidebars. A script can only interact with the UI for the
current instance of an open form editor (not the view that a respondent sees), and only if the
script is [bound](/apps-script/scripts_containers) to the form. For more
information, see the guides to [menus](/apps-script/guides/menus) and [dialogs and sidebars](/apps-script/guides/dialogs).

```
// Add a custom menu to the active form, including a separator and a sub-menu.
function onOpen(e) {
  FormApp.getUi()
      .createMenu('My Menu')
      .addItem('My menu item', 'myFunction')
      .addSeparator()
      .addSubMenu(FormApp.getUi().createMenu('My sub-menu')
          .addItem('One sub-menu item', 'mySecondFunction')
          .addItem('Another sub-menu item', 'myThirdFunction'))
      .addToUi();
}
```
@return an instance of this form's user-interface environment*/ getUi(): Ui;
  /**Returns the [`Form`](https://developers.google.com/apps-script/reference/forms/form.html) with the specified ID. Throws an exception if the ID is invalid or the
user does not have permission to open the form.

```
// Open a form by ID.
var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
```
@param id the ID of the form to open
@return the form with the given ID*/ openById(id: string): FormApp.Form;
  /**Returns the [`Form`](https://developers.google.com/apps-script/reference/forms/form.html) with the specified URL. Throws an exception if the URL is invalid or
the user does not have permission to open the form.

```
// Open a form by URL.
var form = FormApp.openByUrl(
    'https://docs.google.com/forms/d/1234567890abcdefghijklmnopqrstuvwxyz_a1b2c3/edit'
    );
```
@param url the URL of the form to open
@return the form with the given URL*/ openByUrl(url: string): FormApp.Form;
}
module FormApp {
  interface VideoItem {
    /**Creates a copy of this item and appends it to the end of the form.
@return a duplicate of this [`VideoItem`](https://developers.google.com/apps-script/reference/forms/video-item.html), for chaining*/ duplicate(): FormApp.VideoItem;
    /**Gets the video's horizontal alignment.
@return the horizontal alignment*/ getAlignment(): FormApp.Alignment;
    /**Gets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's help text or description text*/ getHelpText(): string;
    /**Gets the item's unique identifier.
@return the item's ID*/ getId(): Integer;
    /**Gets the index of the item among all the items in the form.
@return the index of the item*/ getIndex(): Integer;
    /**Gets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's title or header text*/ getTitle(): string;
    /**Gets the item's type, represented as an [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html).
@return the item's type*/ getType(): FormApp.ItemType;
    /**Gets the video's width in pixels.
@return the width in pixels*/ getWidth(): Integer;
    /**Sets the video's horizontal alignment.
@param alignment the horizontal alignment
@return this [`VideoItem`](https://developers.google.com/apps-script/reference/forms/video-item.html), for chaining*/ setAlignment(
      alignment: FormApp.Alignment,
    ): FormApp.VideoItem;
    /**Sets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param text the new help text
@return this [`VideoItem`](https://developers.google.com/apps-script/reference/forms/video-item.html), for chaining*/ setHelpText(
      text: string,
    ): FormApp.VideoItem;
    /**Sets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param title the new title or header text
@return this [`VideoItem`](https://developers.google.com/apps-script/reference/forms/video-item.html), for chaining*/ setTitle(
      title: string,
    ): FormApp.VideoItem;
    /**Sets the video itself from a given YouTube URL or YouTube video ID.
@param youtubeUrl the YouTube URL or ID
@return this [`VideoItem`](https://developers.google.com/apps-script/reference/forms/video-item.html), for chaining*/ setVideoUrl(
      youtubeUrl: string,
    ): FormApp.VideoItem;
    /**Sets the video's width in pixels. Only the video's width can be set. Height is set
automatically to maintain the video's proportions.
@param width the width in pixels
@return this [`VideoItem`](https://developers.google.com/apps-script/reference/forms/video-item.html), for chaining*/ setWidth(
      width: Integer,
    ): FormApp.VideoItem;
  }
  interface TimeItem {
    /**Creates a new [`ItemResponse`](https://developers.google.com/apps-script/reference/forms/item-response.html) for this time item. The arguments `hour` and `minute` are best represented as integers from `0` to `23` and from `0` to
`59`, respectively. If they exceed those bounds, they behave as a clock would: for
example, `10, 90` is interpreted as 11:30, and `-1, 60` is intepreted as 00:00.
@param hour the hour, represented as an integer from `0` to `23`
@param minute the minute of the hour, represented as an integer from `0` to `59`
@return the item response*/ createResponse(
      hour: Integer,
      minute: Integer,
    ): FormApp.ItemResponse;
    /**Creates a copy of this item and appends it to the end of the form.
@return a duplicate of this [`TimeItem`](https://developers.google.com/apps-script/reference/forms/time-item.html), for chaining*/ duplicate(): FormApp.TimeItem;
    /**Returns the feedback that is shown to respondents when they respond to a gradeable question.
@return the feedback, if any.*/ getGeneralFeedback(): FormApp.QuizFeedback;
    /**Gets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's help text or description text*/ getHelpText(): string;
    /**Gets the item's unique identifier.
@return the item's ID*/ getId(): Integer;
    /**Gets the index of the item among all the items in the form.
@return the index of the item*/ getIndex(): Integer;
    /**Returns the point value of a gradeable item.
@return the number of points a question is worth.*/ getPoints(): Integer;
    /**Gets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's title or header text*/ getTitle(): string;
    /**Gets the item's type, represented as an [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html).
@return the item's type*/ getType(): FormApp.ItemType;
    /**Determines whether the respondent must answer the question.
@return whether the respondent must answer the question*/ isRequired(): boolean;
    /**Sets the feedback to be shown to respondents when they respond to a gradeable question that
doesn't have a correct or incorrect answer (ie questions that require manual grading).
@param feedback the new feedback
@return this [`TimeItem`](https://developers.google.com/apps-script/reference/forms/time-item.html), for chaining*/ setGeneralFeedback(
      feedback: FormApp.QuizFeedback,
    ): FormApp.TimeItem;
    /**Sets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param text the new help text
@return this [`TimeItem`](https://developers.google.com/apps-script/reference/forms/time-item.html), for chaining*/ setHelpText(
      text: string,
    ): FormApp.TimeItem;
    /**Sets the number of points a gradeable item is worth. The default for new items is 0.
@param points the number of a points a question item is worth
@return this [`TimeItem`](https://developers.google.com/apps-script/reference/forms/time-item.html), for chaining*/ setPoints(
      points: Integer,
    ): FormApp.TimeItem;
    /**Sets whether the respondent must answer the question.
@param enabled whether the respondent must answer the question
@return the current item (for chaining)*/ setRequired(
      enabled: boolean,
    ): FormApp.TimeItem;
    /**Sets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param title the new title or header text
@return this [`TimeItem`](https://developers.google.com/apps-script/reference/forms/time-item.html), for chaining*/ setTitle(
      title: string,
    ): FormApp.TimeItem;
  }
  interface TextValidationBuilder {
    /**Requires text item to be a number.
@return this [`TextValidation`](https://developers.google.com/apps-script/reference/forms/text-validation.html), for chaining*/ requireNumber(): FormApp.TextValidationBuilder;
    /**Requires text item to be a number between start and end, inclusive.
@param start the lower bounds of the inclusive range
@param end the upper bounds of the inclusive range
@return this [`TextValidation`](https://developers.google.com/apps-script/reference/forms/text-validation.html), for chaining*/ requireNumberBetween(
      start: number,
      end: number,
    ): FormApp.TextValidationBuilder;
    /**Requires text item to be a number equal to value specified.
@param number the value which the item must be equal to.
@return this [`TextValidation`](https://developers.google.com/apps-script/reference/forms/text-validation.html), for chaining*/ requireNumberEqualTo(
      number: number,
    ): FormApp.TextValidationBuilder;
    /**Requires text item to be a number greater than the value specified.
@param number the value which the item must be greater than.
@return this [`TextValidation`](https://developers.google.com/apps-script/reference/forms/text-validation.html), for chaining*/ requireNumberGreaterThan(
      number: number,
    ): FormApp.TextValidationBuilder;
    /**Requires text item to be a number greater than or equal to the value specified.
@param number the value which the item must be greater than or equal to.
@return this [`TextValidation`](https://developers.google.com/apps-script/reference/forms/text-validation.html), for chaining*/ requireNumberGreaterThanOrEqualTo(
      number: number,
    ): FormApp.TextValidationBuilder;
    /**Requires text item to be a number less than the value specified.
@param number the value which the item must be greater than.
@return this [`TextValidation`](https://developers.google.com/apps-script/reference/forms/text-validation.html), for chaining*/ requireNumberLessThan(
      number: number,
    ): FormApp.TextValidationBuilder;
    /**Requires text item to be a number less than or equal to the value specified.
@param number the value which the item must be less than or equal to.
@return this [`TextValidation`](https://developers.google.com/apps-script/reference/forms/text-validation.html), for chaining*/ requireNumberLessThanOrEqualTo(
      number: number,
    ): FormApp.TextValidationBuilder;
    /**Requires text item to be a number not between start and end, inclusive.
@param start the lower bounds of the inclusive range
@param end the upper bounds of the inclusive range
@return this [`TextValidation`](https://developers.google.com/apps-script/reference/forms/text-validation.html), for chaining*/ requireNumberNotBetween(
      start: number,
      end: number,
    ): FormApp.TextValidationBuilder;
    /**Requires text item to be a number not equal to the value specified.
@param number the value which the item must not be equal to.
@return this [`TextValidation`](https://developers.google.com/apps-script/reference/forms/text-validation.html), for chaining*/ requireNumberNotEqualTo(
      number: number,
    ): FormApp.TextValidationBuilder;
    /**Requires response to contain pattern.
@param pattern text must contain pattern
@return this for chaining*/ requireTextContainsPattern(
      pattern: string,
    ): FormApp.TextValidationBuilder;
    /**Requires response to not contain pattern.
@param pattern text must not contain pattern
@return this for chaining*/ requireTextDoesNotContainPattern(
      pattern: string,
    ): FormApp.TextValidationBuilder;
    /**Requires response to not match pattern.
@param pattern text must not match pattern
@return this for chaining*/ requireTextDoesNotMatchPattern(
      pattern: string,
    ): FormApp.TextValidationBuilder;
    /**Requires text item to be an email address.
@return this [`TextValidation`](https://developers.google.com/apps-script/reference/forms/text-validation.html), for chaining*/ requireTextIsEmail(): FormApp.TextValidationBuilder;
    /**Requires text item to be a URL.
@return this [`TextValidation`](https://developers.google.com/apps-script/reference/forms/text-validation.html), for chaining*/ requireTextIsUrl(): FormApp.TextValidationBuilder;
    /**Requires response length to be greater than or equal to value.
@param number paragraph text length must be greater than this value
@return this for chaining*/ requireTextLengthGreaterThanOrEqualTo(
      number: Integer,
    ): FormApp.TextValidationBuilder;
    /**Requires response length to be less than value.
@param number paragraph text length must be less than or equal to this value
@return this for chaining*/ requireTextLengthLessThanOrEqualTo(
      number: Integer,
    ): FormApp.TextValidationBuilder;
    /**Requires response to match pattern.
@param pattern text must match pattern
@return this for chaining*/ requireTextMatchesPattern(
      pattern: string,
    ): FormApp.TextValidationBuilder;
    /**Requires text item to be a whole number.
@return this [`TextValidation`](https://developers.google.com/apps-script/reference/forms/text-validation.html), for chaining*/ requireWholeNumber(): FormApp.TextValidationBuilder;
  }
  interface TextValidation {}
  interface TextItem {
    /**Removes any data validation for this text item.
@return this [`TextItem`](https://developers.google.com/apps-script/reference/forms/text-item.html), for chaining*/ clearValidation(): FormApp.TextItem;
    /**Creates a new [`ItemResponse`](https://developers.google.com/apps-script/reference/forms/item-response.html) for this text item.
@param response an answer to the question posed by the item
@return the item response*/ createResponse(
      response: string,
    ): FormApp.ItemResponse;
    /**Creates a copy of this item and appends it to the end of the form.
@return a duplicate of this [`TextItem`](https://developers.google.com/apps-script/reference/forms/text-item.html), for chaining*/ duplicate(): FormApp.TextItem;
    /**Returns the feedback that is shown to respondents when they respond to a gradeable question.
@return the feedback, if any.*/ getGeneralFeedback(): FormApp.QuizFeedback;
    /**Gets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's help text or description text*/ getHelpText(): string;
    /**Gets the item's unique identifier.
@return the item's ID*/ getId(): Integer;
    /**Gets the index of the item among all the items in the form.
@return the index of the item*/ getIndex(): Integer;
    /**Returns the point value of a gradeable item.
@return the number of points a question is worth.*/ getPoints(): Integer;
    /**Gets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's title or header text*/ getTitle(): string;
    /**Gets the item's type, represented as an [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html).
@return the item's type*/ getType(): FormApp.ItemType;
    /**Determines whether the respondent must answer the question.
@return whether the respondent must answer the question*/ isRequired(): boolean;
    /**Sets the feedback to be shown to respondents when they respond to a gradeable question that
doesn't have a correct or incorrect answer (ie questions that require manual grading).
@param feedback the new feedback
@return this [`TextItem`](https://developers.google.com/apps-script/reference/forms/text-item.html), for chaining*/ setGeneralFeedback(
      feedback: FormApp.QuizFeedback,
    ): FormApp.TextItem;
    /**Sets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param text the new help text
@return this [`TextItem`](https://developers.google.com/apps-script/reference/forms/text-item.html), for chaining*/ setHelpText(
      text: string,
    ): FormApp.TextItem;
    /**Sets the number of points a gradeable item is worth. The default for new items is 0.
@param points the number of a points a question item is worth
@return this [`TextItem`](https://developers.google.com/apps-script/reference/forms/text-item.html), for chaining*/ setPoints(
      points: Integer,
    ): FormApp.TextItem;
    /**Sets whether the respondent must answer the question.
@param enabled whether the respondent must answer the question
@return the current item (for chaining)*/ setRequired(
      enabled: boolean,
    ): FormApp.TextItem;
    /**Sets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param title the new title or header text
@return this [`TextItem`](https://developers.google.com/apps-script/reference/forms/text-item.html), for chaining*/ setTitle(
      title: string,
    ): FormApp.TextItem;
    /**Sets the data validation for this text item. Passing in null or a validation without any
require functions called will remove any prior validation.
@param validation a TextValidation to apply to this item.
@return this [`TextItem`](https://developers.google.com/apps-script/reference/forms/text-item.html), for chaining*/ setValidation(
      validation: FormApp.TextValidation,
    ): FormApp.TextItem;
  }
  interface SectionHeaderItem {
    /**Creates a copy of this item and appends it to the end of the form.
@return a duplicate of this [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html), for chaining*/ duplicate(): FormApp.SectionHeaderItem;
    /**Gets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's help text or description text*/ getHelpText(): string;
    /**Gets the item's unique identifier.
@return the item's ID*/ getId(): Integer;
    /**Gets the index of the item among all the items in the form.
@return the index of the item*/ getIndex(): Integer;
    /**Gets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's title or header text*/ getTitle(): string;
    /**Gets the item's type, represented as an [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html).
@return the item's type*/ getType(): FormApp.ItemType;
    /**Sets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param text the new help text
@return this [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html), for chaining*/ setHelpText(
      text: string,
    ): FormApp.SectionHeaderItem;
    /**Sets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param title the new title or header text
@return this [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html), for chaining*/ setTitle(
      title: string,
    ): FormApp.SectionHeaderItem;
  }
  interface ScaleItem {
    /**Creates a new [`ItemResponse`](https://developers.google.com/apps-script/reference/forms/item-response.html) for this scale item. Throws an exception if the `response` argument is outside the bounds set for the item.
@param response a value answer for this scale item
@return the item response*/ createResponse(
      response: Integer,
    ): FormApp.ItemResponse;
    /**Creates a copy of this item and appends it to the end of the form.
@return a duplicate of this [`ScaleItem`](https://developers.google.com/apps-script/reference/forms/scale-item.html), for chaining*/ duplicate(): FormApp.ScaleItem;
    /**Returns the feedback that is shown to respondents when they respond to a gradeable question.
@return the feedback, if any.*/ getGeneralFeedback(): FormApp.QuizFeedback;
    /**Gets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's help text or description text*/ getHelpText(): string;
    /**Gets the item's unique identifier.
@return the item's ID*/ getId(): Integer;
    /**Gets the index of the item among all the items in the form.
@return the index of the item*/ getIndex(): Integer;
    /**Gets the label for the scale's lower bound, if any.
@return the label for the scale's lower bound*/ getLeftLabel(): string;
    /**Gets the scale's lower bound.
@return the scale's lower bound*/ getLowerBound(): Integer;
    /**Returns the point value of a gradeable item.
@return the number of points a question is worth.*/ getPoints(): Integer;
    /**Gets the label for the scale's upper bound, if any.
@return the label for the scale's upper bound*/ getRightLabel(): string;
    /**Gets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's title or header text*/ getTitle(): string;
    /**Gets the item's type, represented as an [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html).
@return the item's type*/ getType(): FormApp.ItemType;
    /**Gets the scale's upper bound.
@return the scale's upper bound*/ getUpperBound(): Integer;
    /**Determines whether the respondent must answer the question.
@return whether the respondent must answer the question*/ isRequired(): boolean;
    /**Sets the scale's lower and upper bounds. The lower bound must be `0` or `1`. The
upper bound must be between `3` and `10`, inclusive. A new scale defaults to a
lower bound of `1` and an upper bound of `5`.

Throws a scripting exception if the given values are outside the permitted limits. Decimals
are truncated to the preceding integer.
@param lower the new lower bound
@param upper the new upper bound
@return this [`ScaleItem`](https://developers.google.com/apps-script/reference/forms/scale-item.html), for chaining*/ setBounds(
      lower: Integer,
      upper: Integer,
    ): FormApp.ScaleItem;
    /**Sets the feedback to be shown to respondents when they respond to a gradeable question that
doesn't have a correct or incorrect answer (ie questions that require manual grading).
@param feedback the new feedback
@return this [`ScaleItem`](https://developers.google.com/apps-script/reference/forms/scale-item.html), for chaining*/ setGeneralFeedback(
      feedback: FormApp.QuizFeedback,
    ): FormApp.ScaleItem;
    /**Sets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param text the new help text
@return this [`ScaleItem`](https://developers.google.com/apps-script/reference/forms/scale-item.html), for chaining*/ setHelpText(
      text: string,
    ): FormApp.ScaleItem;
    /**Sets labels for the scale's lower and upper bounds.
@param lower the new label for the lower bound
@param upper the new label for the upper bound
@return this [`ScaleItem`](https://developers.google.com/apps-script/reference/forms/scale-item.html), for chaining*/ setLabels(
      lower: string,
      upper: string,
    ): FormApp.ScaleItem;
    /**Sets the number of points a gradeable item is worth. The default for new items is 0.
@param points the number of a points a question item is worth
@return this [`ScaleItem`](https://developers.google.com/apps-script/reference/forms/scale-item.html), for chaining*/ setPoints(
      points: Integer,
    ): FormApp.ScaleItem;
    /**Sets whether the respondent must answer the question.
@param enabled whether the respondent must answer the question
@return the current item (for chaining)*/ setRequired(
      enabled: boolean,
    ): FormApp.ScaleItem;
    /**Sets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param title the new title or header text
@return this [`ScaleItem`](https://developers.google.com/apps-script/reference/forms/scale-item.html), for chaining*/ setTitle(
      title: string,
    ): FormApp.ScaleItem;
  }
  interface RatingItem {
    /**Creates a copy of this item and appends it to the end of the form.
@return a duplicate of this [`RatingItem`](https://developers.google.com/apps-script/reference/forms/rating-item.html), for chaining*/ duplicate(): FormApp.RatingItem;
    /**Returns the feedback that is shown to respondents when they respond to a gradeable question.
@return the feedback, if any.*/ getGeneralFeedback(): FormApp.QuizFeedback;
    /**Gets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's help text or description text*/ getHelpText(): string;
    /**Gets the item's unique identifier.
@return the item's ID*/ getId(): Integer;
    /**Gets the index of the item among all the items in the form.
@return the index of the item*/ getIndex(): Integer;
    /**Returns the point value of a gradeable item.
@return the number of points a question is worth.*/ getPoints(): Integer;
    /**Gets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's title or header text*/ getTitle(): string;
    /**Gets the item's type, represented as an [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html).
@return the item's type*/ getType(): FormApp.ItemType;
    /**Determines whether the respondent must answer the question.
@return whether the respondent must answer the question*/ isRequired(): boolean;
  }
  interface QuizFeedbackBuilder {
    /**Adds a link to the feedback's supplemental material.
@param url the link to display under the display text
@return this [`QuizFeedbackBuilder`](https://developers.google.com/apps-script/reference/forms/quiz-feedback-builder.html), for chaining*/ addLink(
      url: string,
    ): FormApp.QuizFeedbackBuilder;
    /**Adds a link to the feedback's supplemental material.
@param url the link to display under the display text
@param displayText the text to display for the link
@return this [`QuizFeedbackBuilder`](https://developers.google.com/apps-script/reference/forms/quiz-feedback-builder.html), for chaining*/ addLink(
      url: string,
      displayText: string,
    ): FormApp.QuizFeedbackBuilder;
    /**Builds a Feedback of the corresponding type for this builder.
@return [`QuizFeedback`](https://developers.google.com/apps-script/reference/forms/quiz-feedback.html)*/ build(): FormApp.QuizFeedback;
    /**Returns a copy of this builder.
@return [`QuizFeedbackBuilder`](https://developers.google.com/apps-script/reference/forms/quiz-feedback-builder.html)*/ copy(): FormApp.QuizFeedbackBuilder;
    /**Sets the feedback text.
@param text the new text
@return this [`QuizFeedbackBuilder`](https://developers.google.com/apps-script/reference/forms/quiz-feedback-builder.html), for chaining*/ setText(
      text: string,
    ): FormApp.QuizFeedbackBuilder;
  }
  interface QuizFeedback {
    /**Gets a list of the URLs associated with the Feedback. These are displayed to the user as a list
of helpful links.
@return a list of the URLs associated with the Feedback*/ getLinkUrls(): string[];
    /**Gets the Feedback's display text. This text is shown to the user after they've submitted a
response.
@return the Feedback's text*/ getText(): string;
  }
  interface ParagraphTextValidationBuilder {
    /**Requires response to contain pattern.
@param pattern text must contain pattern
@return this for chaining*/ requireTextContainsPattern(
      pattern: string,
    ): FormApp.ParagraphTextValidationBuilder;
    /**Requires response to not contain pattern.
@param pattern text must not contain pattern
@return this for chaining*/ requireTextDoesNotContainPattern(
      pattern: string,
    ): FormApp.ParagraphTextValidationBuilder;
    /**Requires response to not match pattern.
@param pattern text must not match pattern
@return this for chaining*/ requireTextDoesNotMatchPattern(
      pattern: string,
    ): FormApp.ParagraphTextValidationBuilder;
    /**Requires response length to be greater than or equal to value.
@param number paragraph text length must be greater than this value
@return this for chaining*/ requireTextLengthGreaterThanOrEqualTo(
      number: Integer,
    ): FormApp.ParagraphTextValidationBuilder;
    /**Requires response length to be less than value.
@param number paragraph text length must be less than or equal to this value
@return this for chaining*/ requireTextLengthLessThanOrEqualTo(
      number: Integer,
    ): FormApp.ParagraphTextValidationBuilder;
    /**Requires response to match pattern.
@param pattern text must match pattern
@return this for chaining*/ requireTextMatchesPattern(
      pattern: string,
    ): FormApp.ParagraphTextValidationBuilder;
  }
  interface ParagraphTextValidation {}
  interface ParagraphTextItem {
    /**Removes any data validation for this paragraph text item.
@return this [`ParagraphTextItem`](https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html), for chaining*/ clearValidation(): FormApp.ParagraphTextItem;
    /**Creates a new [`ItemResponse`](https://developers.google.com/apps-script/reference/forms/item-response.html) for this paragraph text item.
@param response an answer to the question posed by the item
@return the item response*/ createResponse(
      response: string,
    ): FormApp.ItemResponse;
    /**Creates a copy of this item and appends it to the end of the form.
@return a duplicate of this [`ParagraphTextItem`](https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html), for chaining*/ duplicate(): FormApp.ParagraphTextItem;
    /**Returns the feedback that is shown to respondents when they respond to a gradeable question.
@return the feedback, if any.*/ getGeneralFeedback(): FormApp.QuizFeedback;
    /**Gets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's help text or description text*/ getHelpText(): string;
    /**Gets the item's unique identifier.
@return the item's ID*/ getId(): Integer;
    /**Gets the index of the item among all the items in the form.
@return the index of the item*/ getIndex(): Integer;
    /**Returns the point value of a gradeable item.
@return the number of points a question is worth.*/ getPoints(): Integer;
    /**Gets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's title or header text*/ getTitle(): string;
    /**Gets the item's type, represented as an [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html).
@return the item's type*/ getType(): FormApp.ItemType;
    /**Determines whether the respondent must answer the question.
@return whether the respondent must answer the question*/ isRequired(): boolean;
    /**Sets the feedback to be shown to respondents when they respond to a gradeable question that
doesn't have a correct or incorrect answer (ie questions that require manual grading).
@param feedback the new feedback
@return this [`ParagraphTextItem`](https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html), for chaining*/ setGeneralFeedback(
      feedback: FormApp.QuizFeedback,
    ): FormApp.ParagraphTextItem;
    /**Sets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param text the new help text
@return this [`ParagraphTextItem`](https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html), for chaining*/ setHelpText(
      text: string,
    ): FormApp.ParagraphTextItem;
    /**Sets the number of points a gradeable item is worth. The default for new items is 0.
@param points the number of a points a question item is worth
@return this [`ParagraphTextItem`](https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html), for chaining*/ setPoints(
      points: Integer,
    ): FormApp.ParagraphTextItem;
    /**Sets whether the respondent must answer the question.
@param enabled whether the respondent must answer the question
@return the current item (for chaining)*/ setRequired(
      enabled: boolean,
    ): FormApp.ParagraphTextItem;
    /**Sets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param title the new title or header text
@return this [`ParagraphTextItem`](https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html), for chaining*/ setTitle(
      title: string,
    ): FormApp.ParagraphTextItem;
    /**Sets the data validation for this paragraph text item. Passing in null or a validation without
any require functions called will remove any prior validation.
@param validation a ParagraphTextValidation to apply to this item.
@return this [`ParagraphTextItem`](https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html), for chaining*/ setValidation(
      validation: FormApp.ParagraphTextValidation,
    ): FormApp.ParagraphTextItem;
  }
  interface PageNavigationType {}
  interface _PageNavigationType {
    /**Continue to the next page of the form after completing the current page.*/ CONTINUE: PageNavigationType;
    /**Jump to a specified page of the form after completing the current page.*/ GO_TO_PAGE: PageNavigationType;
    /**Restart the form from the beginning, without clearing answers entered so far, after completing
the current page.*/ RESTART: PageNavigationType;
    /**Submit the form response after completing the current page.*/ SUBMIT: PageNavigationType;
  }
  interface PageBreakItem {
    /**Creates a copy of this item and appends it to the end of the form.
@return a duplicate of this [`PageBreakItem`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), for chaining*/ duplicate(): FormApp.PageBreakItem;
    /**Gets the [`PageBreakItem`](https://developers.google.com/apps-script/reference/forms/page-break-item.html) that the form will jump to after completing the page before this
page break (that is, upon reaching this page break by normal linear progression through the
form).
@return the page break to jump to after completing the page before this page break, or `null` if none is set*/ getGoToPage(): FormApp.PageBreakItem;
    /**Gets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's help text or description text*/ getHelpText(): string;
    /**Gets the item's unique identifier.
@return the item's ID*/ getId(): Integer;
    /**Gets the index of the item among all the items in the form.
@return the index of the item*/ getIndex(): Integer;
    /**Gets the type of page navigation that occurs after completing the page before this page break
(that is, upon reaching this page break by normal linear progression through the form).
@return the navigation action to take after completing the page before this page break*/ getPageNavigationType(): FormApp.PageNavigationType;
    /**Gets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's title or header text*/ getTitle(): string;
    /**Gets the item's type, represented as an [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html).
@return the item's type*/ getType(): FormApp.ItemType;
    /**Sets the page to jump to after completing the page before this page break (that is, upon
reaching this page break by normal linear progression through the form). If the previous page
contained a [`MultipleChoiceItem`](https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html) or [`ListItem`](https://developers.google.com/apps-script/reference/forms/list-item.html) with a navigation option, that
navigation overrules this navigation.
@param goToPageItem the page break to jump to after completing the page before this page break
@return this [`PageBreakItem`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), for chaining*/ setGoToPage(
      goToPageItem: FormApp.PageBreakItem,
    ): FormApp.PageBreakItem;
    /**Sets the type of page navigation that occurs after completing the page before this page break
(that is, upon reaching this page break by normal linear progression through the form). If the
page contained a [`MultipleChoiceItem`](https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html) or [`ListItem`](https://developers.google.com/apps-script/reference/forms/list-item.html) with a navigation option, that
navigation overrules this navigation.
@param navigationType the navigation action to take after completing the page before this page
    break
@return this [`PageBreakItem`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), for chaining*/ setGoToPage(
      navigationType: FormApp.PageNavigationType,
    ): FormApp.PageBreakItem;
    /**Sets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param text the new help text
@return this [`PageBreakItem`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), for chaining*/ setHelpText(
      text: string,
    ): FormApp.PageBreakItem;
    /**Sets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param title the new title or header text
@return this [`PageBreakItem`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), for chaining*/ setTitle(
      title: string,
    ): FormApp.PageBreakItem;
  }
  interface MultipleChoiceItem {
    /**Creates a new choice.
@param value the choice's value, which respondents see as a label when viewing the form
@return the new choice*/ createChoice(value: string): FormApp.Choice;
    /**Creates a new choice.
@param value the choice's value, which respondents see as a label when viewing the form
@param isCorrect whether the choice is a correct answer
@return the new choice*/ createChoice(
      value: string,
      isCorrect: boolean,
    ): FormApp.Choice;
    /**Creates a new choice with a page-navigation option that jumps to a given page-break item. This
is equivalent to [`createChoice(value, navigationType)`](https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html#createChoice(String,PageNavigationType)) with `navigationType` set to `FormApp.PageNavigationType.GO_TO_PAGE`. Choices that use page
navigation cannot be combined in the same item with choices that do not use page navigation.

The page navigation occurs after the respondent completes a page that contains the option,
and only if the respondent chose that option. If the respondent chose multiple options with
page-navigation instructions on the same page, only the last navigation option has any effect.
Page navigation also has no effect on the last page of a form.
@param value the choice's value, which respondents see as a label when viewing the form
@param navigationItem the item to navigate to
@return the new choice*/ createChoice(
      value: string,
      navigationItem: FormApp.PageBreakItem,
    ): FormApp.Choice;
    /**Creates a new choice with a page-navigation option. Choices that use page navigation cannot be
combined in the same item with choices that do not use page navigation.

The page navigation occurs after the respondent completes a page that contains the option,
and only if the respondent chose that option. If the respondent chose multiple options with
page-navigation instructions on the same page, only the last navigation option has any effect.
Page navigation also has no effect on the last page of a form.
@param value the choice's value, which respondents see as a label when viewing the form
@param navigationType the choice's navigation type
@return the new choice*/ createChoice(
      value: string,
      navigationType: FormApp.PageNavigationType,
    ): FormApp.Choice;
    /**Creates a new [`ItemResponse`](https://developers.google.com/apps-script/reference/forms/item-response.html) for this multiple-choice item. Throws an exception if the
`response` argument does not match a valid choice for this item, unless [`showOtherOption(enabled)`](https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html#showOtherOption(Boolean)) is set to `true`.
@param response a valid answer for this multiple-choice item
@return the item response*/ createResponse(
      response: string,
    ): FormApp.ItemResponse;
    /**Creates a copy of this item and appends it to the end of the form.
@return a duplicate of this [`MultipleChoiceItem`](https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html), for chaining*/ duplicate(): FormApp.MultipleChoiceItem;
    /**Gets all choices for an item.
@return an array of choices*/ getChoices(): FormApp.Choice[];
    /**Returns the feedback that is shown to respondents when they respond correctly to a question.
@return the feedback, if any.*/ getFeedbackForCorrect(): FormApp.QuizFeedback;
    /**Returns the feedback that is shown to respondents when they respond incorrectly to a question.
@return the feedback, if any.*/ getFeedbackForIncorrect(): FormApp.QuizFeedback;
    /**Gets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's help text or description text*/ getHelpText(): string;
    /**Gets the item's unique identifier.
@return the item's ID*/ getId(): Integer;
    /**Gets the index of the item among all the items in the form.
@return the index of the item*/ getIndex(): Integer;
    /**Returns the point value of a gradeable item.
@return the number of points a question is worth.*/ getPoints(): Integer;
    /**Gets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's title or header text*/ getTitle(): string;
    /**Gets the item's type, represented as an [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html).
@return the item's type*/ getType(): FormApp.ItemType;
    /**Determines whether the item has an "other" option.
@return `true` if the item has an "other" option; `false` if not*/ hasOtherOption(): boolean;
    /**Determines whether the respondent must answer the question.
@return whether the respondent must answer the question*/ isRequired(): boolean;
    /**Sets the choices for an item from an array of strings. Throws an exception if the given array
is empty.

```
// Open a form by ID and add a new list item.
var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
var item = form.addListItem();
item.setTitle('Do you prefer cats or dogs?');
item.setChoiceValues(['Dogs', 'Cats']);
```
@param values the array of choice values, which respondents see as labels when viewing the form
@return this [`MultipleChoiceItem`](https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html), for chaining*/ setChoiceValues(
      values: string[],
    ): FormApp.MultipleChoiceItem;
    /**Sets an array of choices for an item. Throws an exception if the given array is empty or
contains a `null` element.

```
// Open a form by ID and add a new list item.
var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
var item = form.addListItem();
item.setTitle('Do you prefer cats or dogs?')
item.setChoices([
    item.createChoice('Cats'),
    item.createChoice('Dogs')
]);
```
@param choices an array of choices
@return this [`MultipleChoiceItem`](https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html), for chaining*/ setChoices(
      choices: FormApp.Choice[],
    ): FormApp.MultipleChoiceItem;
    /**Sets the feedback to be shown to respondents when they respond correctly to a question.

```
// Open a form by ID and add a new list item.
var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
var item = form.addListItem();
item.setTitle('Do you prefer cats or dogs?');
// Set "Dogs" as the correct answer to this question.
item.setChoices([
  item.createChoice('Dogs', true),
  item.createChoice('Cats', false)]);
// Add feedback which will be shown for correct responses; ie "Dogs".
item.setFeedbackForCorrect(
    FormApp.createFeedback().setDisplayText("Dogs rule, cats drool.").build());
```
@param feedback the new feedback. A null value will clear the feedback.
@return this [`MultipleChoiceItem`](https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html), for chaining*/ setFeedbackForCorrect(
      feedback: FormApp.QuizFeedback,
    ): FormApp.MultipleChoiceItem;
    /**Sets the feedback to be shown to respondents when they respond incorrectly to a question.
@param feedback the new feedback
@return this [`MultipleChoiceItem`](https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html), for chaining*/ setFeedbackForIncorrect(
      feedback: FormApp.QuizFeedback,
    ): FormApp.MultipleChoiceItem;
    /**Sets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param text the new help text
@return this [`MultipleChoiceItem`](https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html), for chaining*/ setHelpText(
      text: string,
    ): FormApp.MultipleChoiceItem;
    /**Sets the number of points a gradeable item is worth. The default for new items is 0.
@param points the number of a points a question item is worth
@return this [`MultipleChoiceItem`](https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html), for chaining*/ setPoints(
      points: Integer,
    ): FormApp.MultipleChoiceItem;
    /**Sets whether the respondent must answer the question.
@param enabled whether the respondent must answer the question
@return the current item (for chaining)*/ setRequired(
      enabled: boolean,
    ): FormApp.MultipleChoiceItem;
    /**Sets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param title the new title or header text
@return this [`MultipleChoiceItem`](https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html), for chaining*/ setTitle(
      title: string,
    ): FormApp.MultipleChoiceItem;
    /**Sets whether the item has an "other" option. The default for a new [`CheckboxItem`](https://developers.google.com/apps-script/reference/forms/checkbox-item.html) or
[`MultipleChoiceItem`](https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html) is `false`.
@param enabled `true` if the item has an "other" option; `false` if not
@return this [`MultipleChoiceItem`](https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html), for chaining*/ showOtherOption(
      enabled: boolean,
    ): FormApp.MultipleChoiceItem;
  }
  interface ListItem {
    /**Creates a new choice.
@param value the choice's value, which respondents see as a label when viewing the form
@return the new choice*/ createChoice(value: string): FormApp.Choice;
    /**Creates a new choice.
@param value the choice's value, which respondents see as a label when viewing the form
@param isCorrect whether the choice is a correct answer
@return the new choice*/ createChoice(
      value: string,
      isCorrect: boolean,
    ): FormApp.Choice;
    /**Creates a new choice with a page-navigation option that jumps to a given page-break item. This
is equivalent to [`createChoice(value, navigationType)`](https://developers.google.com/apps-script/reference/forms/list-item.html#createChoice(String,PageNavigationType)) with `navigationType` set to `FormApp.PageNavigationType.GO_TO_PAGE`. Choices that use page
navigation cannot be combined in the same item with choices that do not use page navigation.

The page navigation occurs after the respondent completes a page that contains the option,
and only if the respondent chose that option. If the respondent chose multiple options with
page-navigation instructions on the same page, only the last navigation option has any effect.
Page navigation also has no effect on the last page of a form.
@param value the choice's value, which respondents see as a label when viewing the form
@param navigationItem the item to navigate to
@return the new choice*/ createChoice(
      value: string,
      navigationItem: FormApp.PageBreakItem,
    ): FormApp.Choice;
    /**Creates a new choice with a page-navigation option. Choices that use page navigation cannot be
combined in the same item with choices that do not use page navigation.

The page navigation occurs after the respondent completes a page that contains the option,
and only if the respondent chose that option. If the respondent chose multiple options with
page-navigation instructions on the same page, only the last navigation option has any effect.
Page navigation also has no effect on the last page of a form.
@param value the choice's value, which respondents see as a label when viewing the form
@param navigationType the choice's navigation type
@return the new choice*/ createChoice(
      value: string,
      navigationType: FormApp.PageNavigationType,
    ): FormApp.Choice;
    /**Creates a new [`ItemResponse`](https://developers.google.com/apps-script/reference/forms/item-response.html) for this list item. Throws an exception if the `response` argument does not match a valid choice for this item.
@param response a valid answer for this list item
@return the item response*/ createResponse(
      response: string,
    ): FormApp.ItemResponse;
    /**Creates a copy of this item and appends it to the end of the form.
@return a duplicate of this [`ListItem`](https://developers.google.com/apps-script/reference/forms/list-item.html), for chaining*/ duplicate(): FormApp.ListItem;
    /**Gets all choices for an item.
@return an array of choices*/ getChoices(): FormApp.Choice[];
    /**Returns the feedback that is shown to respondents when they respond correctly to a question.
@return the feedback, if any.*/ getFeedbackForCorrect(): FormApp.QuizFeedback;
    /**Returns the feedback that is shown to respondents when they respond incorrectly to a question.
@return the feedback, if any.*/ getFeedbackForIncorrect(): FormApp.QuizFeedback;
    /**Gets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's help text or description text*/ getHelpText(): string;
    /**Gets the item's unique identifier.
@return the item's ID*/ getId(): Integer;
    /**Gets the index of the item among all the items in the form.
@return the index of the item*/ getIndex(): Integer;
    /**Returns the point value of a gradeable item.
@return the number of points a question is worth.*/ getPoints(): Integer;
    /**Gets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's title or header text*/ getTitle(): string;
    /**Gets the item's type, represented as an [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html).
@return the item's type*/ getType(): FormApp.ItemType;
    /**Determines whether the respondent must answer the question.
@return whether the respondent must answer the question*/ isRequired(): boolean;
    /**Sets the choices for an item from an array of strings. Throws an exception if the given array
is empty.

```
// Open a form by ID and add a new list item.
var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
var item = form.addListItem();
item.setTitle('Do you prefer cats or dogs?');
item.setChoiceValues(['Dogs', 'Cats']);
```
@param values the array of choice values, which respondents see as labels when viewing the form
@return this [`ListItem`](https://developers.google.com/apps-script/reference/forms/list-item.html), for chaining*/ setChoiceValues(
      values: string[],
    ): FormApp.ListItem;
    /**Sets an array of choices for an item. Throws an exception if the given array is empty or
contains a `null` element.

```
// Open a form by ID and add a new list item.
var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
var item = form.addListItem();
item.setTitle('Do you prefer cats or dogs?')
item.setChoices([
    item.createChoice('Cats'),
    item.createChoice('Dogs')
]);
```
@param choices an array of choices
@return this [`ListItem`](https://developers.google.com/apps-script/reference/forms/list-item.html), for chaining*/ setChoices(
      choices: FormApp.Choice[],
    ): FormApp.ListItem;
    /**Sets the feedback to be shown to respondents when they respond correctly to a question.

```
// Open a form by ID and add a new list item.
var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
var item = form.addListItem();
item.setTitle('Do you prefer cats or dogs?');
// Set "Dogs" as the correct answer to this question.
item.setChoices([
  item.createChoice('Dogs', true),
  item.createChoice('Cats', false)]);
// Add feedback which will be shown for correct responses; ie "Dogs".
item.setFeedbackForCorrect(
    FormApp.createFeedback().setDisplayText("Dogs rule, cats drool.").build());
```
@param feedback the new feedback. A null value will clear the feedback.
@return this [`ListItem`](https://developers.google.com/apps-script/reference/forms/list-item.html), for chaining*/ setFeedbackForCorrect(
      feedback: FormApp.QuizFeedback,
    ): FormApp.ListItem;
    /**Sets the feedback to be shown to respondents when they respond incorrectly to a question.
@param feedback the new feedback
@return this [`ListItem`](https://developers.google.com/apps-script/reference/forms/list-item.html), for chaining*/ setFeedbackForIncorrect(
      feedback: FormApp.QuizFeedback,
    ): FormApp.ListItem;
    /**Sets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param text the new help text
@return this [`ListItem`](https://developers.google.com/apps-script/reference/forms/list-item.html), for chaining*/ setHelpText(
      text: string,
    ): FormApp.ListItem;
    /**Sets the number of points a gradeable item is worth. The default for new items is 0.
@param points the number of a points a question item is worth
@return this [`ListItem`](https://developers.google.com/apps-script/reference/forms/list-item.html), for chaining*/ setPoints(
      points: Integer,
    ): FormApp.ListItem;
    /**Sets whether the respondent must answer the question.
@param enabled whether the respondent must answer the question
@return the current item (for chaining)*/ setRequired(
      enabled: boolean,
    ): FormApp.ListItem;
    /**Sets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param title the new title or header text
@return this [`ListItem`](https://developers.google.com/apps-script/reference/forms/list-item.html), for chaining*/ setTitle(
      title: string,
    ): FormApp.ListItem;
  }
  interface ItemType {}
  interface _ItemType {
    /**A question item that allows the respondent to select one or more checkboxes, as well as an
optional "other" field.*/ CHECKBOX: ItemType;
    /**A question item, presented as a grid of columns and rows, that allows the respondent to select
multiple choices per row from a sequence of checkboxes.*/ CHECKBOX_GRID: ItemType;
    /**A question item that allows the respondent to indicate a date.*/ DATE: ItemType;
    /**A question item that allows the respondent to indicate a date and time.*/ DATETIME: ItemType;
    /**A question item that allows the respondent to indicate a length of time.*/ DURATION: ItemType;
    /**A question item that lets the respondent upload a file.*/ FILE_UPLOAD: ItemType;
    /**A question item, presented as a grid of columns and rows, that allows the respondent to select
one choice per row from a sequence of radio buttons.*/ GRID: ItemType;
    /**A layout item that displays an image.*/ IMAGE: ItemType;
    /**A question item that allows the respondent to select one choice from a drop-down list.*/ LIST: ItemType;
    /**A question item that allows the respondent to select one choice from a list of radio buttons or
an optional "other" field.*/ MULTIPLE_CHOICE: ItemType;
    /**A layout item that marks the start of a page.*/ PAGE_BREAK: ItemType;
    /**A question item that allows the respondent to enter a block of text.*/ PARAGRAPH_TEXT: ItemType;
    /**A question item that allows the respondent to give a rating.*/ RATING: ItemType;
    /**A question item that allows the respondent to choose one option from a numbered sequence of
radio buttons.*/ SCALE: ItemType;
    /**A layout item that visually indicates the start of a section.*/ SECTION_HEADER: ItemType;
    /**A question item that allows the respondent to enter a single line of text.*/ TEXT: ItemType;
    /**A question item that allows the respondent to indicate a time of day.*/ TIME: ItemType;
    /**A layout item that displays a YouTube video.*/ VIDEO: ItemType;
  }
  interface ItemResponse {
    /**Gets the feedback that was given for the respondent's submitted answer.
@return a `QuizFeedback` for the question item*/ getFeedback(): Object;
    /**Gets the question item that this response answers.
@return the question item that this response answers*/ getItem(): FormApp.Item;
    /**Gets the answer that the respondent submitted. For most types of question items, this returns a
`String`.

For [`CheckboxItem`](https://developers.google.com/apps-script/reference/forms/checkbox-item.html) questions, this returns a `String[]` array containing the
responder's choices. The order of the strings in the array may vary.

For [`GridItem`](https://developers.google.com/apps-script/reference/forms/grid-item.html) questions, this returns a `String[]` array in which the answer at
index `n` corresponds to the question at row `n + 1` in the grid. If a respondent
did not answer a question in the grid, that answer is returned as `''`.

For [`CheckboxGridItem`](https://developers.google.com/apps-script/reference/forms/checkbox-grid-item.html) questions, this returns a `String[][]` array in which the
answers at row index `n` corresponds to the question at row `n + 1` in the checkbox
grid. If a respondent did not answer a question in the grid, that answer is returned as `''`.
@return a `String` or `String[]` or `String[][]` of answers to the question
    item*/ getResponse(): Object;
    /**Gets the score for the respondent's submitted answer.
@return a `Double` representing the score for the question item*/ getScore(): Object;
    /**Sets the feedback that should be displayed for the respondent's submitted answer.

This method does not actually save the feedback in Forms until [`Form.submitGrades(responses)`](https://developers.google.com/apps-script/reference/forms/form.html#submitGrades(FormResponse)) is called with the updated FormResponses. See `setScore()` for an example.
@return a `ItemResponse` for chaining*/ setFeedback(
      feedback: Object,
    ): FormApp.ItemResponse;
    /**Sets the score for the respondent's submitted answer. A null value will clear the existing
score.

This method does not actually save the score in Forms until [`Form.submitGrades(responses)`](https://developers.google.com/apps-script/reference/forms/form.html#submitGrades(FormResponse)) is called with the updated FormResponses.

```
// For a multiple choice question with options: "Always true", "Sometimes true", and "Never",
// award half credit for responses that answered "Sometimes true".
var formResponses = FormApp.getActiveForm().getResponses();
// Go through each form response
for (var i = 0; i < formResponses.length; i++) {
  var response = formResponses[i];
  var items = FormApp.getActiveForm().getItems();
  // Assume it's the first item
  var item = items[0];
  var itemResponse = response.getGradableResponseForItem(item);
  // Give half credit for "Sometimes true".
  if (itemResponse != null && itemResponse.getResponse() == 'Sometimes true') {
    var points = item.asMultipleChoiceItem().getPoints();
    itemResponse.setScore(points * .5);
    // This saves the grade, but does not submit to Forms yet.
    response.withItemGrade(itemResponse);
  }
}
// Grades are actually submitted to Forms here.
FormApp.getActiveForm().submitGrades(formResponses);
```
@return a `ItemResponse` for chaining*/ setScore(
      score: Object,
    ): FormApp.ItemResponse;
  }
  interface Item {
    /**Returns the item as a checkbox grid item. Throws a scripting exception if the [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html) was not already `CHECKBOX_GRID`.
@return the checkbox grid item*/ asCheckboxGridItem(): FormApp.CheckboxGridItem;
    /**Returns the item as a checkbox item. Throws a scripting exception if the [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html) was not already `CHECKBOX`.
@return the checkbox item*/ asCheckboxItem(): FormApp.CheckboxItem;
    /**Returns the item as a date item. Throws a scripting exception if the [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html) was not already `DATE`.
@return the date item*/ asDateItem(): FormApp.DateItem;
    /**Returns the item as a date-time item. Throws a scripting exception if the [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html) was not already `DATETIME`.
@return the date-time item*/ asDateTimeItem(): FormApp.DateTimeItem;
    /**Returns the item as a duration item. Throws a scripting exception if the [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html) was not already `DURATION`.
@return the duration item*/ asDurationItem(): FormApp.DurationItem;
    /**Returns the item as a grid item. Throws a scripting exception if the [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html) was not already `GRID`.
@return the grid item*/ asGridItem(): FormApp.GridItem;
    /**Returns the item as an image item. Throws a scripting exception if the [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html) was not already `IMAGE`.
@return the image item*/ asImageItem(): FormApp.ImageItem;
    /**Returns the item as a list item. Throws a scripting exception if the [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html) was not already `LIST`.
@return the list item*/ asListItem(): FormApp.ListItem;
    /**Returns the item as a multiple-choice item. Throws a scripting exception if the [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html) was not already `MULTIPLE_CHOICE`.
@return the multiple-choice item*/ asMultipleChoiceItem(): FormApp.MultipleChoiceItem;
    /**Returns the item as a page-break item. Throws a scripting exception if the [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html) was not already `PAGE_BREAK`.
@return the page-break item*/ asPageBreakItem(): FormApp.PageBreakItem;
    /**Returns the item as a paragraph-text item. Throws a scripting exception if the [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html) was not already `PARAGRAPH_TEXT`.
@return the paragraph-text item*/ asParagraphTextItem(): FormApp.ParagraphTextItem;
    /**Returns the item as a scale item. Throws a scripting exception if the [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html) was not already `SCALE`.
@return the scale item*/ asScaleItem(): FormApp.ScaleItem;
    /**Returns the item as a section-header item. Throws a scripting exception if the [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html) was not already `SECTION_HEADER`.
@return the section-header item*/ asSectionHeaderItem(): FormApp.SectionHeaderItem;
    /**Returns the item as a text item. Throws a scripting exception if the [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html) was not already `TEXT`.
@return the text item*/ asTextItem(): FormApp.TextItem;
    /**Returns the item as a time item. Throws a scripting exception if the [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html) was not already `TIME`.
@return the time item*/ asTimeItem(): FormApp.TimeItem;
    /**Returns the item as a video item. Throws a scripting exception if the [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html) was not already `VIDEO`.
@return the video item*/ asVideoItem(): FormApp.VideoItem;
    /**Creates a copy of this item and appends it to the end of the form.
@return a duplicate of this [`Item`](https://developers.google.com/apps-script/reference/forms/item.html), for chaining*/ duplicate(): FormApp.Item;
    /**Gets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's help text or description text*/ getHelpText(): string;
    /**Gets the item's unique identifier.
@return the item's ID*/ getId(): Integer;
    /**Gets the index of the item among all the items in the form.
@return the index of the item*/ getIndex(): Integer;
    /**Gets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's title or header text*/ getTitle(): string;
    /**Gets the item's type, represented as an [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html).
@return the item's type*/ getType(): FormApp.ItemType;
    /**Sets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param text the new help text
@return this [`Item`](https://developers.google.com/apps-script/reference/forms/item.html), for chaining*/ setHelpText(
      text: string,
    ): FormApp.Item;
    /**Sets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param title the new title or header text
@return this [`Item`](https://developers.google.com/apps-script/reference/forms/item.html), for chaining*/ setTitle(
      title: string,
    ): FormApp.Item;
  }
  interface ImageItem {
    /**Creates a copy of this item and appends it to the end of the form.
@return a duplicate of this [`ImageItem`](https://developers.google.com/apps-script/reference/forms/image-item.html), for chaining*/ duplicate(): FormApp.ImageItem;
    /**Gets the image's horizontal alignment.
@return the horizontal alignment*/ getAlignment(): FormApp.Alignment;
    /**Gets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's help text or description text*/ getHelpText(): string;
    /**Gets the item's unique identifier.
@return the item's ID*/ getId(): Integer;
    /**Gets the image that is currently assigned to the item.
@return the image data*/ getImage(): Blob;
    /**Gets the index of the item among all the items in the form.
@return the index of the item*/ getIndex(): Integer;
    /**Gets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's title or header text*/ getTitle(): string;
    /**Gets the item's type, represented as an [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html).
@return the item's type*/ getType(): FormApp.ItemType;
    /**Gets the image's width in pixels.
@return the width in pixels*/ getWidth(): Integer;
    /**Sets the image's horizontal alignment.
@param alignment the horizontal alignment
@return this [`ImageItem`](https://developers.google.com/apps-script/reference/forms/image-item.html), for chaining*/ setAlignment(
      alignment: FormApp.Alignment,
    ): FormApp.ImageItem;
    /**Sets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param text the new help text
@return this [`ImageItem`](https://developers.google.com/apps-script/reference/forms/image-item.html), for chaining*/ setHelpText(
      text: string,
    ): FormApp.ImageItem;
    /**Sets the image itself.
@param image the image data
@return this [`ImageItem`](https://developers.google.com/apps-script/reference/forms/image-item.html), for chaining*/ setImage(
      image: BlobSource,
    ): FormApp.ImageItem;
    /**Sets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param title the new title or header text
@return this [`ImageItem`](https://developers.google.com/apps-script/reference/forms/image-item.html), for chaining*/ setTitle(
      title: string,
    ): FormApp.ImageItem;
    /**Sets the image's width in pixels. Only the image's width can be set. Height is set
automatically to maintain the image's proportions.
@param width the width in pixels
@return this [`ImageItem`](https://developers.google.com/apps-script/reference/forms/image-item.html), for chaining*/ setWidth(
      width: Integer,
    ): FormApp.ImageItem;
  }
  interface GridValidationBuilder {
    /**Requires limit of one response per column for a grid item.
@return this validation builder, for chaining*/ requireLimitOneResponsePerColumn(): FormApp.GridValidationBuilder;
  }
  interface GridValidation {}
  interface GridItem {
    /**Removes any data validation for this grid item.
@return this item, for chaining*/ clearValidation(): FormApp.GridItem;
    /**Creates a new [`ItemResponse`](https://developers.google.com/apps-script/reference/forms/item-response.html) for this grid item. The argument `responses` must be a
`String[]` array containing as many values as the number of rows in the grid. A `null` element for a non-required grid question indicates no response to that row. Throws an
exception if any of the values does not match a valid choice.
@param responses an array of valid answers for this grid item
@return the item response*/ createResponse(
      responses: string[],
    ): FormApp.ItemResponse;
    /**Creates a copy of this item and appends it to the end of the form.
@return a duplicate of this [`GridItem`](https://developers.google.com/apps-script/reference/forms/grid-item.html), for chaining*/ duplicate(): FormApp.GridItem;
    /**Gets the values for every column in the grid.
@return an array of column values, which respondents see as labels when viewing the form*/ getColumns(): string[];
    /**Gets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's help text or description text*/ getHelpText(): string;
    /**Gets the item's unique identifier.
@return the item's ID*/ getId(): Integer;
    /**Gets the index of the item among all the items in the form.
@return the index of the item*/ getIndex(): Integer;
    /**Gets the values for every row in the grid.
@return an array of row values, which respondents see as labels when viewing the form*/ getRows(): string[];
    /**Gets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's title or header text*/ getTitle(): string;
    /**Gets the item's type, represented as an [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html).
@return the item's type*/ getType(): FormApp.ItemType;
    /**Determines whether the respondent must answer the question.
@return whether the respondent must answer the question*/ isRequired(): boolean;
    /**Sets the columns of the grid based on an array of values. Throws an exception if the given
array is empty.
@param columns an array of column values, which respondents see as labels when viewing the form
@return this item, for chaining*/ setColumns(
      columns: string[],
    ): FormApp.GridItem;
    /**Sets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param text the new help text
@return this [`GridItem`](https://developers.google.com/apps-script/reference/forms/grid-item.html), for chaining*/ setHelpText(
      text: string,
    ): FormApp.GridItem;
    /**Sets whether the respondent must answer the question.
@param enabled whether the respondent must answer the question
@return the current item (for chaining)*/ setRequired(
      enabled: boolean,
    ): FormApp.GridItem;
    /**Sets the rows of the grid based on an array of values. Throws an exception if the given array
is empty.
@param rows an array of row values, which respondents see as labels when viewing the form
@return this item, for chaining*/ setRows(rows: string[]): FormApp.GridItem;
    /**Sets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param title the new title or header text
@return this [`GridItem`](https://developers.google.com/apps-script/reference/forms/grid-item.html), for chaining*/ setTitle(
      title: string,
    ): FormApp.GridItem;
    /**Sets the data validation for this grid item. Passing in null or a validation without any
require functions called will remove any prior validation.
@param validation a GridValidation to apply to this item.
@return this [`GridItem`](https://developers.google.com/apps-script/reference/forms/grid-item.html), for chaining*/ setValidation(
      validation: FormApp.GridValidation,
    ): FormApp.GridItem;
  }
  interface FormResponse {
    /**Generates a URL that can be used to edit a response that has already been submitted. If the
[`Form.setAllowResponseEdits(enabled)`](https://developers.google.com/apps-script/reference/forms/form.html#setAllowResponseEdits(Boolean)) setting is disabled, the link leads to a page that
explains that editing form responses is disabled. Anyone who visits the link can edit the
response, although they need an account with access to the form if the [`Form.setRequireLogin(requireLogin)`](https://developers.google.com/apps-script/reference/forms/form.html#setRequireLogin(Boolean)) setting is enabled. If the [`Form.setCollectEmail(collect)`](https://developers.google.com/apps-script/reference/forms/form.html#setCollectEmail(Boolean))
setting is enabled, the form records the email address of the user who edited the response
instead of the email address of the original respondent.

For a form response that the script has created but not yet submitted, this method returns
`null`.

```
// Opens the Forms file by its ID.
// If you created your script from within a Google Forms file, you can
// use FormApp.getActiveForm() instead.
// TODO(developer): Replace the ID with your own.
const form = FormApp.openById('abc123456');

// Gets the first form response.
const formResponse = form.getResponses()[0];

// Gets the edit URL for the first form response and logs it to the console.
const editUrl = formResponse.getEditResponseUrl();
console.log(editUrl);
```
@return The URL to change a submitted response.*/ getEditResponseUrl(): string;
    /**Gets all item responses contained in a form response, in the same order that the items appear
in the form. This method works similarly to [`getItemResponses()`](https://developers.google.com/apps-script/reference/forms/form-response.html#getItemResponses()), but to allow for grading
a missing answer, it still returns an [`ItemResponse`](https://developers.google.com/apps-script/reference/forms/item-response.html) if the corresponding [`Item`](https://developers.google.com/apps-script/reference/forms/item.html)
can be graded (ie has a point value), even if there isn't an actual response. However, if the
[`Item`](https://developers.google.com/apps-script/reference/forms/item.html) isn't gradable, this method excludes that item from its returned array.

```
// Opens the Forms file by its ID.
// If you created your script from within a Google Forms file, you can
// use FormApp.getActiveForm() instead.
// TODO(developer): Replace the ID with your own.
const form = FormApp.openById('abc123456');

// Gets an array of the form's responses.
const formResponses = form.getResponses();

// Gets the item responses contained in each form response.
for (const formResponse of formResponses){
  const gradableItemsResponses = formResponse.getGradableItemResponses();

  // Logs the title and score for each item response to the console.
  for (const gradableItemsResponse of gradableItemsResponses) {
    console.log(`${gradableItemsResponse.getItem().getTitle()}
       score ${gradableItemsResponse.getScore()}`);
  }
}
```
@return An array of responses to every question item within the form for which the respondent
    could receive a score.*/ getGradableItemResponses(): FormApp.ItemResponse[];
    /**Gets the item response contained in a form response for a given item. This method works
similarly to [`getResponseForItem(item)`](https://developers.google.com/apps-script/reference/forms/form-response.html#getResponseForItem(Item)), but to allow for grading a missing answer, it still
returns an [`ItemResponse`](https://developers.google.com/apps-script/reference/forms/item-response.html) if the corresponding [`Item`](https://developers.google.com/apps-script/reference/forms/item.html) can be graded (ie has a point
value), even if there isn't an actual response. However, if the [`Item`](https://developers.google.com/apps-script/reference/forms/item.html) isn't gradable,
this method returns `null`.

```
// Opens the Forms file by its ID.
// If you created your script from within a Google Forms file, you can
// use FormApp.getActiveForm() instead.
// TODO(developer): Replace the ID with your own.
const form = FormApp.openById('abc123456');

// Gets an array of the form's responses.
const formResponses = form.getResponses();

// Gets the item responses contained in a form response.
for (const formResponse of formResponses) {
  const formItemResponses = formResponse.getGradableItemResponses();

  // Logs the title and score for responses to the first item of the form.
  const itemResponse = formResponse.getGradableResponseForItem(formItemResponses[0].getItem());
  console.log(`${itemResponse.getItem().getTitle()} score ${itemResponse.getScore()}`);
}
```
@return The response for a given item, or `null` if none exists and the item is ungraded.*/ getGradableResponseForItem(
      item: FormApp.Item,
    ): FormApp.ItemResponse;
    /**Gets the ID of the form response. This method returns `null` if the form response has not
been submitted.

```
// Opens the Forms file by its ID.
// If you created your script from within a Google Forms file, you can
// use FormApp.getActiveForm() instead.
// TODO(developer): Replace the ID with your own.
const form = FormApp.openById('abc123456');

// Gets an array of the form's responses.
const formResponses = form.getResponses();

// Loops through the form responses and logs the ID for each form response to the console.
for (const formResponse of formResponses) {
  console.log(`Response ID: ${formResponse.getId()}`);
}
```
@return The ID of the form response, or `null` if the form response has not been
    submitted.*/ getId(): string;
    /**Gets all item responses contained in a form response, in the same order that the items appear
in the form. If the form response does not contain a response for a given [`TextItem`](https://developers.google.com/apps-script/reference/forms/text-item.html),
[`DateItem`](https://developers.google.com/apps-script/reference/forms/date-item.html), [`TimeItem`](https://developers.google.com/apps-script/reference/forms/time-item.html), or [`ParagraphTextItem`](https://developers.google.com/apps-script/reference/forms/paragraph-text-item.html), the [`ItemResponse`](https://developers.google.com/apps-script/reference/forms/item-response.html)
returned for that item will have an empty string as the response. If the form response omits a
response for any other item type, this method excludes that item from its returned array.

```
// Opens the Forms file by its ID.
// If you created your script from within a Google Forms file, you can
// use FormApp.getActiveForm() instead.
// TODO(developer): Replace the ID with your own.
const form = FormApp.openById('abc123456');

// Gets the responses to the form.
const formResponses = form.getResponses();

// Iterates over the responses.
for (const formResponse of formResponses) {

  // Gets the item responses from each form response.
  const itemResponses = formResponse.getItemResponses();

  // Iterates over the item responses.
  for (const itemResponse of itemResponses) {

    // Logs the items' questions and responses to the console.
    console.log(`Response to the question '${itemResponse.getItem().getTitle()}' was
      '${itemResponse.getResponse()}'`);
  }
}
```
@return An array of responses to every question item within the form for which the respondent
    provided an answer.*/ getItemResponses(): FormApp.ItemResponse[];
    /**Gets the email address of the person who submitted a response, if the [`Form.setCollectEmail(collect)`](https://developers.google.com/apps-script/reference/forms/form.html#setCollectEmail(Boolean)) setting is enabled.

For a form response that the script has created but not yet submitted, this method returns
`null`.

```
// Opens the Forms file by its ID.
// If you created your script from within a Google Forms file, you can
// use FormApp.getActiveForm() instead.
// TODO(developer): Replace the ID with your own.
const form = FormApp.openById('abc123456');

// Gets an array of the form's responses.
const formResponses = form.getResponses();

// Loops through the responses and logs each respondent's email to the console.
// To collect respondent emails, ensure that Form.setCollectEmail(collect) is set to true.
for (const formResponse of formResponses) {
  console.log(`Respondent Email: ${formResponse.getRespondentEmail()}`);
}
```
@return The email address of the person who submitted this response, if available, or `null` if the script created this response but has not yet submitted it.*/ getRespondentEmail(): string;
    /**Gets the item response contained in this form response for a given item.

```
// Opens the Forms file by its ID.
// If you created your script from within a Google Forms file, you can
// use FormApp.getActiveForm() instead.
// TODO(developer): Replace the ID with your own.
const form = FormApp.openById('abc123456');

// Gets the first item on the form.
const item = form.getItems()[0];

// Gets an array of the form's responses.
const formResponses = form.getResponses();

// Loops through the responses and logs each response to the first item to the console.
for (const formResponse of formResponses) {
  const itemResponse = formResponse.getResponseForItem(item);
  console.log(itemResponse.getResponse());
}
```
@return The response for a given item, or `null` if none exists.*/ getResponseForItem(
      item: FormApp.Item,
    ): FormApp.ItemResponse;
    /**Gets the timestamp for a form response submission.

For a form response that the script has created but not yet submitted, this method returns
`null`.

```
// Opens the Forms file by its ID.
// If you created your script from within a Google Forms file, you can
// use FormApp.getActiveForm() instead.
// TODO(developer): Replace the ID with your own.
const form = FormApp.openById('abc123456');

// Gets an array of the form's responses.
const formResponses = form.getResponses();

// Loops through the responses and logs the timestamp of each response to the console.
for (const formResponse of formResponses) {
  console.log(`Timestamp: ${formResponse.getTimestamp()}`);
}
```
@return The timestamp at which this response was submitted, or `null` if the script
    created this response but has not yet submitted it.*/ getTimestamp(): Date;
    /**Submits the response. Throws a scripting exception if the response has already been submitted.

```
// Opens the Forms file by its ID.
// If you created your script from within a Google Forms file, you can
// use FormApp.getActiveForm() instead.
// TODO(developer): Replace the ID with your own.
const form = FormApp.openById('abc123456');

// Creates an empty response for the form.
const formResponse = form.createResponse();

// Submits an empty response.
formResponse.submit();
```
@return A newly created response saved to the form's response store.*/ submit(): FormApp.FormResponse;
    /**Generates a URL for the form in which the answers are pre-filled based on the answers in this
form response.

```
// Opens the Forms file by its ID.
// If you created your script from within a Google Forms file, you can
// use FormApp.getActiveForm() instead.
// TODO(developer): Replace the ID with your own.
const form = FormApp.openById('abc123456');

// Gets the first form response.
const formResponse = form.getResponses()[0];

// Generates and logs the URL of a pre-filled form response based on the answers
// of the first form response.
const prefilledUrl = formResponse.toPrefilledUrl();
console.log(prefilledUrl);
```
@return The URL for a form with pre-filled answers.*/ toPrefilledUrl(): string;
    /**Adds the given item response's grades to a form response. This method applies only to form
responses that have already been submitted, and only affects stored grades once they are
submitted. This method also only updates the item response's grades; it does not affect the
actual response (since the response has already been submitted). If this method is called
multiple times for the same item, only the last grade is retained. If the ItemResponse contains
no grades, this method will remove grades for the item.

```
// Programmatically award partial credit for a given response
var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
var formResponses = form.getResponses();
var formItems = form.getItems();
for (var i = 0; i < formResponses.length; i++) {
  var formResponse = formResponses[i];
  for (var j = 0; j < formItems.length; j++) {
    var item = formItems[j];
    var points = item.asMultipleChoiceItem().getPoints();
    var itemResponse = formResponse.getGradableResponseForItem(item);
    Logger.log('Award half credit for answers containing the word "Kennedy"');
    var answer = itemResponse.getResponse();
    if (answer != null && answer.includes('Kennedy')) {
      itemResponse.setScore(points / 2);
      formResponse.withItemGrade(itemResponse);
    }
  }
}
form.submitGrades(formResponses);
```
@return this [`FormResponse`](https://developers.google.com/apps-script/reference/forms/form-response.html), for chaining*/ withItemGrade(
      gradedResponse: FormApp.ItemResponse,
    ): FormApp.FormResponse;
    /**Adds the given item response to a form response. This method applies only to form responses
that the script has created but not yet submitted; it cannot affect stored responses. If this
method is called multiple times for the same item, only the last item response is retained.

```
// Opens the Forms file by its ID.
// If you created your script from within a Google Forms file, you can
// use FormApp.getActiveForm() instead.
// TODO(developer): Replace the ID with your own.
const form = FormApp.openById('abc123456');

// Creates a response for the form.
const formResponse = form.createResponse();

// Appends a checkbox item to the form.
const item = form.addCheckboxItem();

// Sets the title of the item to 'Which items are ice cream flavors?'
item.setTitle('Which items are ice cream flavors?');

// Sets choices for the item.
item.setChoices([
item.createChoice('Vanilla'),
item.createChoice('Strawberry'),
item.createChoice('Brick')
]);

// Creates a response for the item.
const response = item.createResponse(['Vanilla', 'Strawberry']);

// Adds the item response to the form response.
formResponse.withItemResponse(response);

// Submits the form response.
formResponse.submit();
```
@return This [`FormResponse`](https://developers.google.com/apps-script/reference/forms/form-response.html), for chaining.*/ withItemResponse(
      response: FormApp.ItemResponse,
    ): FormApp.FormResponse;
  }
  interface Form {
    /**Appends a new question item, presented as a grid of columns and rows, that allows the
respondent to select multiple choices per row from a sequence of checkboxes.

```
// Opens the Forms file by its URL. If you created your script from within a
// Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Adds a checkbox grid item.
const item = form.addCheckboxGridItem();

// Sets the title 'Where did you celebrate New Year's?'
item.setTitle('Where did you celebrate New Year's?');

// Sets the grid's rows and columns.
item.setRows(['New York', 'San Francisco', 'London'])
  .setColumns(['2014', '2015', '2016', '2017']);
```
@return The newly created item.*/ addCheckboxGridItem(): FormApp.CheckboxGridItem;
    /**Appends a new question item that allows the respondent to select one or more checkboxes, as
well as an optional "other" field.

```
// Opens the Forms file by its URL. If you created your script from within a
// Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Adds a checkbox item.
const item = form.addCheckboxItem();

// Sets the title of the checkbox item to 'Do you prefer cats or dogs?'
item.setTitle('Do you prefer cats or dogs?');

// Sets the choices.
item.setChoiceValues(['Cats', 'Dogs']);
```
@return The newly created item.*/ addCheckboxItem(): FormApp.CheckboxItem;
    /**Appends a new question item that allows the respondent to indicate a date.

```
// Opens the Forms file by its URL. If you created your script from within a
// Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Adds a date item.
const item = form.addDateItem();

// Sets the title to 'When were you born?'
item.setTitle('When were you born?');

// Sets the description for the date item.
item.setHelpText('Some helper text.');
```
@return The newly created item.*/ addDateItem(): FormApp.DateItem;
    /**Appends a new question item that allows the respondent to indicate a date and time.

```
// Opens the Forms file by its URL. If you created your script from within a
// Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Adds a question with date and time inputs.
const item = form.addDateTimeItem();

// Sets the title to 'When were you born?'
item.setTitle('When were you born?');

// Sets the question as required.
item.setRequired(true);
```
@return The newly created item.*/ addDateTimeItem(): FormApp.DateTimeItem;
    /**Appends a new question item that allows the respondent to indicate a length of time.

```
// Opens the Forms file by its URL. If you created your script from within a
// Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Adds a question with a duration input.
const item = form.addDurationItem();

// Sets the title to 'How long can you hold your breath?'
item.setTitle('How long can you hold your breath?');

// Sets the question as required.
item.setRequired(true);
```
@return The newly created item.*/ addDurationItem(): FormApp.DurationItem;
    /**Adds the given user to the list of editors for the [`Form`](https://developers.google.com/apps-script/reference/forms/form.html). If the user was already
on the list of viewers, this method promotes the user out of the list of viewers.
@param emailAddress The email address of the user to add.
@return This [`Form`](https://developers.google.com/apps-script/reference/forms/form.html), for chaining.*/ addEditor(
      emailAddress: string,
    ): FormApp.Form;
    /**Adds the given user to the list of editors for the [`Form`](https://developers.google.com/apps-script/reference/forms/form.html). If the user was already
on the list of viewers, this method promotes the user out of the list of viewers.
@param user A representation of the user to add.
@return This [`Form`](https://developers.google.com/apps-script/reference/forms/form.html), for chaining.*/ addEditor(
      user: User,
    ): FormApp.Form;
    /**Adds the given array of users to the list of editors for the [`Form`](https://developers.google.com/apps-script/reference/forms/form.html). If any of the
users were already on the list of viewers, this method promotes them out of the list of
viewers.
@param emailAddresses An array of email addresses of the users to add.
@return This [`Form`](https://developers.google.com/apps-script/reference/forms/form.html), for chaining.*/ addEditors(
      emailAddresses: string[],
    ): FormApp.Form;
    /**Appends a new question item, presented as a grid of columns and rows, that allows the
respondent to select one choice per row from a sequence of radio buttons.

```
// Opens the Forms file by its URL. If you created your script from within a
// Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Adds a multiple choice grid.
const item = form.addGridItem();

// Sets the title to 'Rate your interests.'
item.setTitle('Rate your interests');

// Sets the grid's rows and columns.
item.setRows(['Cars', 'Computers', 'Celebrities'])
  .setColumns(['Boring', 'So-so', 'Interesting']);
```
@return The newly created item.*/ addGridItem(): FormApp.GridItem;
    /**Appends a new layout item that displays an image.

```
// Opens the Forms file by its URL. If you created your script from within a
// Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Adds an image item.
const item = form.addImageItem();

// Gets the Google icon to use as the image.
const img = UrlFetchApp.fetch('https://fonts.gstatic.com/s/i/productlogos/googleg/v6/web-24dp/logo_googleg_color_1x_web_24dp.png');

// Sets the image, title, and description for the item.
item.setTitle('Google icon').setHelpText('Google icon').setImage(img);
```
@return The newly created item.*/ addImageItem(): FormApp.ImageItem;
    /**Appends a new question item that allows the respondent to select one choice from a dropdown
list.

```
// Opens the Forms file by its URL. If you created your script from within a
// Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Adds a dropdown list to the form.
const item = form.addListItem();

// Sets the title to 'Do you prefer cats or dogs?'
item.setTitle('Do you prefer cats or dogs?');

// Sets the description to 'This is description text...'
item.setHelpText('This is description text...');

// Creates and adds choices to the dropdown list.
item.setChoices([
  item.createChoice('dog'),
  item.createChoice('cat')
]);
```
@return The newly created item.*/ addListItem(): FormApp.ListItem;
    /**Adds a new question item that allows the respondent to select one choice from a list of radio
buttons or an optional "other" field.

```
// Opens the Forms file by its URL. If you created your script from within a
// Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Adds a multiple choice item to the form.
const item = form.addMultipleChoiceItem();

// Sets the title.
item.setTitle('What is your favorite ice cream flavor?');

// Creates some choice items.
const vanilla = item.createChoice('vanilla');
const chocolate = item.createChoice('chocolate');
const strawberry = item.createChoice('strawberry');

// Sets the choices.
item.setChoices([vanilla, chocolate, strawberry]);
```
@return The newly created item.*/ addMultipleChoiceItem(): FormApp.MultipleChoiceItem;
    /**Adds a new layout item that marks the start of a page.

```
// Opens the Forms file by its URL. If you created your script from within a
// Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Adds page break items to create a second and third page for the form.
const pageTwo = form.addPageBreakItem();
const pageThree = form.addPageBreakItem();

// Sets the titles for the pages.
pageTwo.setTitle('Page two');
pageThree.setTitle('Page three');

// Upon completion of the first page, sets the form to navigate to the third page.
pageTwo.setGoToPage(pageThree);

// Upon completion of the second page, sets the form to navigate back to the first page.
pageThree.setGoToPage(FormApp.PageNavigationType.RESTART);
```
@return The newly created item.*/ addPageBreakItem(): FormApp.PageBreakItem;
    /**Adds a new question item that allows the respondent to enter a block of text.

```
// Opens the form by its URL. If you created your script from within a
// Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Adds the paragraph text item.
const item = form.addParagraphTextItem();

// Sets the title to 'What is your address?'
item.setTitle('What is your address?');
```
@return The newly created item.*/ addParagraphTextItem(): FormApp.ParagraphTextItem;
    /**Appends a new question item that allows the respondent to choose one option from a numbered
sequence of radio buttons.

```
// Opens the Forms file by its URL. If you created your script from within a
// Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Adds the scale item.
const item = form.addScaleItem();

// Sets the title of the scale item to 'Choose a number.'
item.setTitle('Choose a number');

// Sets the scale to 1-5.
item.setBounds(1, 5);

// Sets the label for the lower and upper bounds.
item.setLabels('Lowest', 'Highest');
```
@return The newly created item.*/ addScaleItem(): FormApp.ScaleItem;
    /**Appends a new layout item that visually indicates the start of a section.

```
 // Opens the Forms file by its URL. If you created your script from within a
// Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Adds the section heading item.
const item = form.addSectionHeaderItem();

// Sets the title to 'Title of new section.'
item.setTitle('Title of new section');

// Sets the description.
item.setHelpText('Description of new section');
```
@return The newly created item.*/ addSectionHeaderItem(): FormApp.SectionHeaderItem;
    /**Appends a new question item that allows the respondent to enter a single line of text.

```
// Opens the Forms file by its URL. If you created your script from within a
// Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Adds a single-line text item.
const item = form.addTextItem();

// Sets the title to 'What is your name?'
item.setTitle('What is your name?');
```
@return The newly created item.*/ addTextItem(): FormApp.TextItem;
    /**Appends a new question item that allows the respondent to indicate a time of day.

```
// Opens the Forms file by its URL. If you created your script from within a
// Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Adds a question with a time input.
const item = form.addTimeItem();

// Sets the title to 'What time do you usually wake up in the morning?'
item.setTitle('What time do you usually wake up in the morning?');
```
@return The newly created item.*/ addTimeItem(): FormApp.TimeItem;
    /**Appends a new layout item that displays a video.

```
// Opens the Forms file by its URL. If you created your script from within a
// Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Adds a video item.
const item = form.addVideoItem();

// Sets the title, description, and video.
item.setTitle('YouTube video')
  .setHelpText('Send content automatically via Google Sheets and Apps Script')
  .setVideoUrl('https://youtu.be/xxgQr-jSu9o');

// Sets the alignment to the center.
item.setAlignment(FormApp.Alignment.CENTER);
```
@return The newly created item.*/ addVideoItem(): FormApp.VideoItem;
    /**Determines whether the form displays a link to edit a response after submitting it.

Regardless of this setting, the method [`FormResponse.getEditResponseUrl()`](https://developers.google.com/apps-script/reference/forms/form-response.html#getEditResponseUrl()) allows a
script author who has edit access to the form to generate a URL that can be used to edit a
response.

```
// Opens the Forms file by its URL. If you created your script from within a
// Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Checks if the form displays a link to edit a response after submitting it.
// The default is false. To let people edit their responses, use
// form.setAllowResponseEdits(true).
const edit = form.canEditResponse();

// If the form doesn't let people edit responses, logs false to the console.
console.log(edit);
```
@return `true` if the form displays an "Edit your response" link; `false` if it
    doesn't.*/ canEditResponse(): boolean;
    /**Determines whether the form collects respondents' email addresses.

```
// Opens the Forms file by its URL. If you created your script from within a
// Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Sets the form to not collect respondents' email addresses.
form.setCollectEmail(false);

// Checks whether the form collects respondents' email addresses and logs it to the console.
const bool = form.collectsEmail();

console.log(bool);
```
@return `true` if the form collects email addresses; `false` if it doesn't.*/ collectsEmail(): boolean;
    /**Creates a new response to the form. To answer a question item, create an [`ItemResponse`](https://developers.google.com/apps-script/reference/forms/item-response.html)
from the item, then attach it to this form response by calling [`FormResponse.withItemResponse(response)`](https://developers.google.com/apps-script/reference/forms/form-response.html#withItemResponse(ItemResponse)). To save the assembled response, call [`FormResponse.submit()`](https://developers.google.com/apps-script/reference/forms/form-response.html#submit()).
@return The newly created form response.*/ createResponse(): FormApp.FormResponse;
    /**Deletes all submitted responses from the form's response store. This method does not delete
copies of responses stored in an external response destination (like a spreadsheet), but does
clear the form's summary view.

Beware: this method is irreversible.
@return This [`Form`](https://developers.google.com/apps-script/reference/forms/form.html), for chaining.*/ deleteAllResponses(): FormApp.Form;
    /**Deletes the given item. Throws a scripting exception if the item has already been deleted.

```
// Opens the Forms file by its URL. If you created your script from within
// a Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Gets all of the items from the form.
const items = form.getItems();

// Finds a paragraph text item and deletes it.
const item = items.find(item => item.getType() === FormApp.ItemType.PARAGRAPH_TEXT);
if (item) {
  form.deleteItem(item);
}
```
@param item The item to be deleted.*/ deleteItem(item: FormApp.Item): void;
    /**Deletes the item at a given index among all the items in the form. Throws a scripting exception
if no item exists at the given index.

```
// Opens the Forms file by its URL. If you created your script from within
// a Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Gets all the items from the form.
const items = form.getItems();

// Finds the index of a paragraph text item and deletes it by the item's index.
const index = items.findIndex(item => item.getType() === FormApp.ItemType.PARAGRAPH_TEXT);
if (index !== -1) {
  form.deleteItem(index);
}
```
@param index The index of the item among all the items in the form.*/ deleteItem(
      index: Integer,
    ): void;
    /**Deletes a single response from the form's response store. This method does not delete copies of
responses stored in an external response destination (like a spreadsheet), but does remove the
response from the form's summary view. The response ID can be retrieved with [`FormResponse.getId()`](https://developers.google.com/apps-script/reference/forms/form-response.html#getId()).

__Warning__: This method is irreversible.
@param responseId The ID of the form response to delete.
@return This [`Form`](https://developers.google.com/apps-script/reference/forms/form.html), for chaining.*/ deleteResponse(
      responseId: string,
    ): FormApp.Form;
    /**Gets the form's confirmation message.

```
// Opens the Forms file by its URL. If you created your script from within
// a Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Sets the confirmation message to display after someone submits the form.
form.setConfirmationMessage('You successfully submitted the form.');

// Gets the confirmation message and logs it to the console.
const message = form.getConfirmationMessage();

console.log(message);
```
@return The form's confirmation message.*/ getConfirmationMessage(): string;
    /**Gets the custom message that is displayed if the form is not accepting responses, or an empty
string if no custom message is set.

```
// Opens the Forms file by its URL. If you created your script from within a
// Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Sets a custom closed form message to display to the user when the form
// no longer accepts responses.
form.setCustomClosedFormMessage('The form is no longer accepting responses.');

// Gets the custom message set for the form and logs it to the console.
const message = form.getCustomClosedFormMessage();

console.log(message);
```
@return The custom message to display if the form is not accepting responses, or an empty
    string if no custom message is set.*/ getCustomClosedFormMessage(): string;
    /**Gets the form's description.

```
// Opens the Forms file by its URL. If you created your script from within
// a Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Sets the form description.
form.setDescription('This is the form description.');

// Gets the form description and logs it to the console.
const description = form.getDescription();

console.log(description);
```
@return The form's description.*/ getDescription(): string;
    /**Gets the ID of the form's response destination.

```
// Opens the Forms file by its URL. If you created your script from within
// a Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Creates a spreadsheet to use as the response destination.
const ss = SpreadsheetApp.create('Test_Spreadsheet');

// Updates the form's response destination.
form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

// Gets the ID of the form's response destination and logs it to the console.
const destinationId = form.getDestinationId();

console.log(destinationId);
```
@return The ID of the form's response destination.*/ getDestinationId(): string;
    /**Gets the type of the form's response destination.

```
// Opens the Forms file by its URL. If you created your script from within
// a Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc1234556/edit');

// Gets the type of the form's response destination and logs it to the console.
const destinationType = form.getDestinationType().name();

console.log(destinationType);
```
@return The type of the form's response destination.*/ getDestinationType(): FormApp.DestinationType;
    /**Gets the URL that can be used to access the form's edit mode.

```
// Opens the form by its URL. If you created your script from within
// a Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Gets the URL that accesses the form's edit mode and logs it to the console.
const url = form.getEditUrl();

console.log(url);
```
@return The URL to edit the form.*/ getEditUrl(): string;
    /**Gets the list of editors for this [`Form`](https://developers.google.com/apps-script/reference/forms/form.html).
@return An array of users with edit permission.*/ getEditors(): User[];
    /**Gets the ID of the form.

```
// Opens the form by its URL. If you created your script from within
// a Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Gets the ID of the form and logs it to the console.
const id = form.getId();

console.log(id);
```
@return The ID of the form.*/ getId(): string;
    /**Gets the item with a given ID. Returns `null` if the ID does not correspond to an item in
the form.

```
// Opens the Forms file by its URL. If you created your script from within
// a Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Gets the ID of the first item on the form.
const itemId = form.getItems()[0].getId();

// Gets the item from the ID.
const item = form.getItemById(itemId);

// Gets the name of the item type and logs it to the console.
const type = item.getType().name();

console.log(type);
```
@param id The item's ID.
@return The item with the given ID, or `null` if the item does not exist in the form.*/ getItemById(
      id: Integer,
    ): FormApp.Item;
    /**Gets an array of all items in the form.

```
// Opens the Forms file by its URL. If you created your script from within
// a Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Gets the list of items in the form.
const items = form.getItems();

// Gets the type for each item and logs them to the console.
const types = items.map((item) => item.getType().name());

console.log(types);
```
@return An array of all items in the form.*/ getItems(): FormApp.Item[];
    /**Gets an array of all items of a given type.

```
// Opens the Forms file by its URL. If you created your script from within
// a Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Gets a list of all checkbox items on the form.
const items = form.getItems(FormApp.ItemType.CHECKBOX);

// Gets the title of each checkbox item and logs them to the console.
const checkboxItemsTitle = items.map((item) => item.asCheckboxItem().getTitle());
console.log(checkboxItemsTitle);
```
@param itemType The type of items to retrieve.
@return An array of all items of that type.*/ getItems(
      itemType: FormApp.ItemType,
    ): FormApp.Item[];
    /**Gets the URL that can be used to respond to the form.

```
// Opens the Forms file by its URL. If you created your script from within
// a Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Gets the URL to respond to the form and logs it to the console.
const url = form.getPublishedUrl();
console.log(url);
```
@return The URL to respond to the form.*/ getPublishedUrl(): string;
    /**Gets a single form response based on its response ID. Response IDs can be retrieved from [`FormResponse.getId()`](https://developers.google.com/apps-script/reference/forms/form-response.html#getId()).
@param responseId The ID for the form response.
@return The form response.*/ getResponse(
      responseId: string,
    ): FormApp.FormResponse;
    /**Gets an array of all of the form's responses.
@return An array of all of the form's responses.*/ getResponses(): FormApp.FormResponse[];
    /**Gets an array of all of the form's responses after a given date and time.
@param timestamp The earliest date and time for which form responses should be returned.
@return The list of form responses.*/ getResponses(
      timestamp: Date,
    ): FormApp.FormResponse[];
    /**Determines whether the order of the questions on each page of the form is randomized.
@return `true` if the order of the questions on each page of the form is randomized;
    `false` if not.*/ getShuffleQuestions(): boolean;
    /**Gets the URL that can be used to view a summary of the form's responses. Unless [`setPublishingSummary(enabled)`](https://developers.google.com/apps-script/reference/forms/form.html#setPublishingSummary(Boolean)) is set to `true`, only the users with edit permission to the
form is able to access the URL.

```
// Opens the Forms file by its URL. If you created your script from within
// a Google Forms file, you can use FormApp.getActiveForm() instead.
// Opens the form by its URL.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Gets the URL to view a summary of the form's responses and logs it to the console.
const url = form.getSummaryUrl();
console.log(url);
```
@return The URL to view a summary of responses.*/ getSummaryUrl(): string;
    /**Gets the form's title.

```
// Opens the Forms file by its URL. If you created your script from within
// a Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Sets the title of the form to 'For_Testing.'
form.setTitle('For_Testing');

// Gets the title of the form and logs it to the console.
const title = form.getTitle();
console.log(title);
```
@return The form's title.*/ getTitle(): string;
    /**Determines whether the form allows only one response per respondent. If the value is `true`, the script cannot submit form responses at all.
@return `true` if the form allows only one response per respondent; `false` if not.*/ hasLimitOneResponsePerUser(): boolean;
    /**Determines whether the form displays a progress bar.

```
// Opens the Forms file by its URL. If you created your script from within
// a Google Forms file, you can use FormApp.getActiveForm() instead.
// Opens the form by its URL.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Displays the progress bar on the form.
form.setProgressBar(true);

// Checks if the form displays a progress bar and logs it to the console.
console.log(form.hasProgressBar());
```
@return `true` if the form displays a progress bar; `false` if it doesn't.*/ hasProgressBar(): boolean;
    /**Determines whether the form displays a link to submit another response after a respondent
completes the form.

```
// Opens the Forms file by its URL. If you created your script from within
// a Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Sets the form to display a link to submit another
// response after someone submits the form.
form.setShowLinkToRespondAgain(true);

// Checks if the form displays a 'Submit another response' link and logs it to the console.
console.log(form.hasRespondAgainLink());
```
@return `true` if the form displays a "Submit another response" link; `false` if it
    doesn't.*/ hasRespondAgainLink(): boolean;
    /**Determines whether the form is currently accepting responses.

```
// Opens the Forms file by its URL. If you created your script from within
// a Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Sets the form to accept responses.
form.setAcceptingResponses(true);

// Checks if the form is accepting responses or not and logs it to the console.
const accepting = form.isAcceptingResponses();
console.log(accepting);
```
@return `true` if the form is accepting responses; `false` if it isn't.*/ isAcceptingResponses(): boolean;
    /**Determines whether the form displays a link to view a summary of responses after a respondent
completes the form.

```
// Opens the Forms file by its URL. If you created your script from within
// a Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Sets the form to display a link to a summary of
// the responses after someone submits the form.
form.setPublishingSummary(true);

// Checks if the form displays a "See previous responses" link and logs it to the console.
const publishingLink = form.isPublishingSummary();
console.log(publishingLink);
```
@return `true` if the form displays a "See previous responses" link; `false` if it
    doesn't.*/ isPublishingSummary(): boolean;
    /**Determines whether the form is a quiz.

```
// Opens the Forms file by its URL. If you created your script from within
// a Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Sets the form as a quiz.
form.setIsQuiz(true);

// Checks if the form is a quiz or not and logs it to the console.
console.log(form.isQuiz());
```
@return `true` if the form is accepting responses; `false` if it isn't.*/ isQuiz(): boolean;
    /**Moves a given item to a given index among all the items in the form. Throws a scripting
exception if the given index is out of bounds.

```
// Opens the Forms file by its URL. If you created your script from within
// a Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Gets the first item.
const item = form.getItems()[0];

// Moves the item to be the last item.
form.moveItem(item, form.getItems().length - 1);
```
@param item The item to move.
@param toIndex The new index for the item among all the items in the form.
@return The item that was moved.*/ moveItem(
      item: FormApp.Item,
      toIndex: Integer,
    ): FormApp.Item;
    /**Moves an item at a given index among all the items in the form to another given index. Throws a
scripting exception if the `to` index is out of bounds.

```
// Opens the Forms file by its URL. If you created your script from within
// a Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Moves the first item to be the last item.
form.moveItem(0, form.getItems().length - 1);
```
@param from The current index of the item among all the items in the form.
@param to The new index for the item among all the items in the form.
@return The item that was moved.*/ moveItem(
      from: Integer,
      to: Integer,
    ): FormApp.Item;
    /**Unlinks the form from its current response destination. The unlinked former destination still
retains a copy of all previous responses. All forms, including those that do not have a
destination set explicitly, [save a
copy of responses in the form's response store](https://support.google.com/drive/answer/2917686). If the form does not currently have a
response destination, this method has no effect.

```
// Opens the Forms file by its URL. If you created your script from within
// a Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Opens a spreadsheet to use for the response destination.
// TODO(developer): Replace the URL with your own.
const ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/abc123456/edit');

// Updates the form's response destination to the spreadsheet.
form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

// Unlinks the form from the spreadsheet.
form.removeDestination();
```
@return This [`Form`](https://developers.google.com/apps-script/reference/forms/form.html), for chaining.*/ removeDestination(): FormApp.Form;
    /**Removes the given user from the list of editors for the [`Form`](https://developers.google.com/apps-script/reference/forms/form.html). This method doesn't
block users from accessing the [`Form`](https://developers.google.com/apps-script/reference/forms/form.html) if they belong to a class of users who have
general access—for example, if the [`Form`](https://developers.google.com/apps-script/reference/forms/form.html) is shared with the user's entire
domain, or if the [`Form`](https://developers.google.com/apps-script/reference/forms/form.html) is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of viewers.
@param emailAddress The email address of the user to remove.
@return This [`Form`](https://developers.google.com/apps-script/reference/forms/form.html), for chaining.*/ removeEditor(
      emailAddress: string,
    ): FormApp.Form;
    /**Removes the given user from the list of editors for the [`Form`](https://developers.google.com/apps-script/reference/forms/form.html). This method doesn't
block users from accessing the [`Form`](https://developers.google.com/apps-script/reference/forms/form.html) if they belong to a class of users who have
general access—for example, if the [`Form`](https://developers.google.com/apps-script/reference/forms/form.html) is shared with the user's entire
domain, or if the [`Form`](https://developers.google.com/apps-script/reference/forms/form.html) is in a shared drive that the user can access.

For Drive files, this also removes the user from the list of viewers.
@param user A representation of the user to remove.
@return This [`Form`](https://developers.google.com/apps-script/reference/forms/form.html), for chaining.*/ removeEditor(
      user: User,
    ): FormApp.Form;
    /**Determines whether the form requires respondents to log in to an account in the same domain or
a subdomain before responding.

```
// Opens the Forms file by its URL. If you created your script from within
// a Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Checks if the form requires respondents to log in to a Google Workspace account
// before responding and logs it to the console.
const login = form.requiresLogin();
console.log(login);
```
@return `true` if the form requires users to log in; `false` if it doesn't.*/ requiresLogin(): boolean;
    /**Sets whether the form is currently accepting responses. The default for new forms is `true`.

```
// Opens the Forms file by its URL. If you created your script from within a
// Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Sets the form to accept responses.
form.setAcceptingResponses(true);

// Checks whether the form is accepting responses or not and logs it to the console.
console.log(form.isAcceptingResponses());
```
@param enabled `true` if the form should accept responses; `false` if it shouldn't.
@return This [`Form`](https://developers.google.com/apps-script/reference/forms/form.html), for chaining.*/ setAcceptingResponses(
      enabled: boolean,
    ): FormApp.Form;
    /**Sets whether the form displays a link to edit a response after submitting it. The default for
new forms is `false`.

Regardless of this setting, the method [`FormResponse.getEditResponseUrl()`](https://developers.google.com/apps-script/reference/forms/form-response.html#getEditResponseUrl()) allows a
script author who has edit permission to the form to generate a URL that can be used to edit a
response.

```
// Opens the Forms file by its URL. If you created your script from within a
// Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Shows "Edit your response" link after someone submits the form.
form.setAllowResponseEdits(true);

// Checks whether the option to edit the form after a user submits it is set to true or not
// and logs it to the console.
console.log(form.canEditResponse());
```
@param enabled `true` if the form should display an "Edit your response" link; `false` if not.
@return This [`Form`](https://developers.google.com/apps-script/reference/forms/form.html), for chaining.*/ setAllowResponseEdits(
      enabled: boolean,
    ): FormApp.Form;
    /**Sets whether the form collects respondents' email addresses. The default for new forms is
`false`.

```
// Opens the Forms file by its URL. If you created your script from within a
// Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Sets the form to collect respondents' email addresses.
form.setCollectEmail(true);

// Checks whether the value is set to true or false and logs it to the console.
const collect = form.collectsEmail();
console.log(collect);
```
@param collect `true` if the form should collect email addresses; `false` if it
    doesn't.
@return This [`Form`](https://developers.google.com/apps-script/reference/forms/form.html), for chaining.*/ setCollectEmail(
      collect: boolean,
    ): FormApp.Form;
    /**Sets the form's confirmation message.

```
// Opens the Forms file by its URL. If you created your script from within a
// Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Sets a custom confirmation message to display after someone submits the form.
form.setConfirmationMessage('Your form has been successfully submitted.');

// Gets the confirmation message set for the form and logs it to the console.
const message = form.getConfirmationMessage();
console.log(message);
```
@param message The form's new confirmation message.
@return This [`Form`](https://developers.google.com/apps-script/reference/forms/form.html), for chaining.*/ setConfirmationMessage(
      message: string,
    ): FormApp.Form;
    /**Sets the message to display if the form is not accepting responses. If no message is set, the
form uses a default message.

```
// Opens the Forms file by its URL. If you created your script from within a
// Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Sets the form to not accept responses.
form.setAcceptingResponses(false);

// Sets a custom closed form message to display to the user.
form.setCustomClosedFormMessage('The form is no longer accepting responses.');

// Gets the custom message set for the form and logs it to the console.
const message = form.getCustomClosedFormMessage();
console.log(message);
```
@param message The message to display if the form is not accepting responses.
@return This [`Form`](https://developers.google.com/apps-script/reference/forms/form.html), for chaining.*/ setCustomClosedFormMessage(
      message: string,
    ): FormApp.Form;
    /**Sets the form's description.
@param description The form's new description.
@return This [`Form`](https://developers.google.com/apps-script/reference/forms/form.html), for chaining.*/ setDescription(
      description: string,
    ): FormApp.Form;
    /**Sets the destination where form responses are saved. All forms, including those that do not
have a destination set explicitly, [save a copy of responses in the form's
response store](https://support.google.com/drive/answer/2917686).
@param type The type of the form's response destination.
@param id The ID of the form's response destination.
@return This [`Form`](https://developers.google.com/apps-script/reference/forms/form.html), for chaining.*/ setDestination(
      type: FormApp.DestinationType,
      id: string,
    ): FormApp.Form;
    /**Sets whether the form is a quiz. The default for new forms is `false`.

Graded questions are only allowed in Quizzes, so setting this to `false` causes all
grading options to be removed from all questions.

Quiz settings are only available in the new Forms UI; making a form a Quiz opts the form
into using the new UI.

```
// Opens the Forms file by its URL. If you created your script from within a
// Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Makes the form a quiz.
form.setIsQuiz(true);

// Checks whether the form is a quiz or not and logs it to the console.
console.log(form.isQuiz());
```
@param enabled `true` if quiz features should be enabled for the form; `false` if
    not.
@return This [`Form`](https://developers.google.com/apps-script/reference/forms/form.html), for chaining.*/ setIsQuiz(
      enabled: boolean,
    ): FormApp.Form;
    /**Sets whether the form allows only one response per respondent. The default for new forms is
`false`. If the value is set to `true`, the script cannot submit form responses at
all.
@param enabled `true` if the form should allow only one response per respondent; `false` if not.
@return This [`Form`](https://developers.google.com/apps-script/reference/forms/form.html), for chaining.*/ setLimitOneResponsePerUser(
      enabled: boolean,
    ): FormApp.Form;
    /**Sets whether the form has a progress bar. The default for new forms is `false`.

```
// Opens the Forms file by its URL. If you created your script from within
// a Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Displays the progress bar on the form.
form.setProgressBar(true);

// Checks whether the form has a progress bar and logs it to the console.
console.log(form.hasProgressBar());
```
@param enabled `true` if the form displays a progress bar; `false` if it doesn't.
@return This [`Form`](https://developers.google.com/apps-script/reference/forms/form.html), for chaining.*/ setProgressBar(
      enabled: boolean,
    ): FormApp.Form;
    /**Sets whether the form displays a link to view a summary of responses after a respondent submits
the form. The default for new forms is `false`.
@param enabled `true` if the form should display a "See previous responses" link; `false` if not.
@return This [`Form`](https://developers.google.com/apps-script/reference/forms/form.html), for chaining.*/ setPublishingSummary(
      enabled: boolean,
    ): FormApp.Form;
    /**Sets whether the form requires respondents to log in to an account in the same domain or a
subdomain before responding. The default for new forms is `false` unless a domain
administrator changes the default.

This feature is available only for forms created by Google Workspace users. Users of other
types of Google accounts can't be required to log in.

```
// Opens the Forms file by its URL. If you created your script from within
// a Google Forms file, you can use FormApp.getActiveForm() instead.
// TODO(developer): Replace the URL with your own.
const form = FormApp.openByUrl('https://docs.google.com/forms/d/abc123456/edit');

// Sets the form so that users must log in to their Google Workspace account.
form.setRequireLogin(true);

// Checks whether the form requires login or not and logs it to the console.
console.log(form.requiresLogin());
```
@param requireLogin `true` if the form requires users to log in; `false` if it
    doesn't.
@return The current form (for chaining).*/ setRequireLogin(
      requireLogin: boolean,
    ): FormApp.Form;
    /**Sets whether the form displays a link to submit another response after a respondent completes
the form. The default for new forms is `true`.
@param enabled `true` if the form should display a "Submit another response" link; `false` if not.
@return This [`Form`](https://developers.google.com/apps-script/reference/forms/form.html), for chaining.*/ setShowLinkToRespondAgain(
      enabled: boolean,
    ): FormApp.Form;
    /**Sets whether the order of the questions on each page of the form is randomized.
@param shuffle `true` if the order of the questions on each page of the form should be
    randomized; `false` if not.
@return This [`Form`](https://developers.google.com/apps-script/reference/forms/form.html), for chaining.*/ setShuffleQuestions(
      shuffle: boolean,
    ): FormApp.Form;
    /**Sets the form's title.
@param title The form's new title.
@return This [`Form`](https://developers.google.com/apps-script/reference/forms/form.html), for chaining.*/ setTitle(
      title: string,
    ): FormApp.Form;
    /**Converts a long URL for a form to a short URL. Throws an exception if the long URL does not
belong to Google Forms.
@param url The URL to shorten.
@return A URL in the form `http://goo.gl/forms/1234`.*/ shortenFormUrl(
      url: string,
    ): string;
    /**Submits grades for the given FormResponses.

If your code includes an `onFormSubmit` trigger, calling `submitGrades()`
triggers the `onFormSubmit` condition and causes an infinite loop. To prevent the
infinite loop, add code that checks whether grades already exist before calling `submitGrades()`.
@param responses An array of all of the form's responses.
@return This [`Form`](https://developers.google.com/apps-script/reference/forms/form.html), for chaining.*/ submitGrades(
      responses: FormApp.FormResponse[],
    ): FormApp.Form;
  }
  interface FeedbackType {}
  interface _FeedbackType {
    /**Feedback that is automatically displayed to respondents for a question answered correctly.
Correct feedback can only be attached to a question type that supports autograding (e.g. radio,
checkbox, select)*/ CORRECT: FeedbackType;
    /**Feedback that is automatically displayed to respondents when they submit their response.
General feedback can only be attached to question types that do not support auto-grading, but
are gradeable (ie everything but grid)*/ GENERAL: FeedbackType;
    /**Feedback that is automatically displayed to respondents for a question answered incorrectly.
Incorrect feedback can only be attached to a question type that supports autograding (e.g.
radio, checkbox, select)*/ INCORRECT: FeedbackType;
  }
  interface DurationItem {
    /**Creates a new [`ItemResponse`](https://developers.google.com/apps-script/reference/forms/item-response.html) for this date item. The arguments `hours`, `minutes`, and `seconds` are best represented as integers from `0` to `72` for
`hours` and `0` to `59` for `minutes` and `seconds`. Values that
exceed those bounds are clamped: for example, `24, 60, 90` is interpreted as 24:59:59.
@param hours the hours, represented as an integer from `0` to `72`
@param minutes the minutes, represented as an integer from `0` to `59`
@param seconds the seconds, represented as an integer from `0` to `59`
@return the item response*/ createResponse(
      hours: Integer,
      minutes: Integer,
      seconds: Integer,
    ): FormApp.ItemResponse;
    /**Creates a copy of this item and appends it to the end of the form.
@return a duplicate of this [`DurationItem`](https://developers.google.com/apps-script/reference/forms/duration-item.html), for chaining*/ duplicate(): FormApp.DurationItem;
    /**Returns the feedback that is shown to respondents when they respond to a gradeable question.
@return the feedback, if any.*/ getGeneralFeedback(): FormApp.QuizFeedback;
    /**Gets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's help text or description text*/ getHelpText(): string;
    /**Gets the item's unique identifier.
@return the item's ID*/ getId(): Integer;
    /**Gets the index of the item among all the items in the form.
@return the index of the item*/ getIndex(): Integer;
    /**Returns the point value of a gradeable item.
@return the number of points a question is worth.*/ getPoints(): Integer;
    /**Gets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's title or header text*/ getTitle(): string;
    /**Gets the item's type, represented as an [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html).
@return the item's type*/ getType(): FormApp.ItemType;
    /**Determines whether the respondent must answer the question.
@return whether the respondent must answer the question*/ isRequired(): boolean;
    /**Sets the feedback to be shown to respondents when they respond to a gradeable question that
doesn't have a correct or incorrect answer (ie questions that require manual grading).
@param feedback the new feedback
@return this [`DurationItem`](https://developers.google.com/apps-script/reference/forms/duration-item.html), for chaining*/ setGeneralFeedback(
      feedback: FormApp.QuizFeedback,
    ): FormApp.DurationItem;
    /**Sets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param text the new help text
@return this [`DurationItem`](https://developers.google.com/apps-script/reference/forms/duration-item.html), for chaining*/ setHelpText(
      text: string,
    ): FormApp.DurationItem;
    /**Sets the number of points a gradeable item is worth. The default for new items is 0.
@param points the number of a points a question item is worth
@return this [`DurationItem`](https://developers.google.com/apps-script/reference/forms/duration-item.html), for chaining*/ setPoints(
      points: Integer,
    ): FormApp.DurationItem;
    /**Sets whether the respondent must answer the question.
@param enabled whether the respondent must answer the question
@return the current item (for chaining)*/ setRequired(
      enabled: boolean,
    ): FormApp.DurationItem;
    /**Sets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param title the new title or header text
@return this [`DurationItem`](https://developers.google.com/apps-script/reference/forms/duration-item.html), for chaining*/ setTitle(
      title: string,
    ): FormApp.DurationItem;
  }
  interface DestinationType {}
  interface _DestinationType {
    /**A Google Sheets spreadsheet as a destination for form responses.*/ SPREADSHEET: DestinationType;
  }
  interface DateTimeItem {
    /**Creates a new [`ItemResponse`](https://developers.google.com/apps-script/reference/forms/item-response.html) for this date-time item. The seconds field of the `Date` object is ignored; by default, the year, month, day, hour, and minute fields are used. If
[`setIncludesYear(enabled)`](https://developers.google.com/apps-script/reference/forms/date-time-item.html#setIncludesYear(Boolean)) is set to `false`, the year is
ignored as well.
@param response a `Date` object that represents a month, day, hour, minute, and possibly
    year
@return the item response*/ createResponse(
      response: Date,
    ): FormApp.ItemResponse;
    /**Creates a copy of this item and appends it to the end of the form.
@return a duplicate of this [`DateTimeItem`](https://developers.google.com/apps-script/reference/forms/date-time-item.html), for chaining*/ duplicate(): FormApp.DateTimeItem;
    /**Returns the feedback that is shown to respondents when they respond to a gradeable question.
@return the feedback, if any.*/ getGeneralFeedback(): FormApp.QuizFeedback;
    /**Gets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's help text or description text*/ getHelpText(): string;
    /**Gets the item's unique identifier.
@return the item's ID*/ getId(): Integer;
    /**Gets the index of the item among all the items in the form.
@return the index of the item*/ getIndex(): Integer;
    /**Returns the point value of a gradeable item.
@return the number of points a question is worth.*/ getPoints(): Integer;
    /**Gets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's title or header text*/ getTitle(): string;
    /**Gets the item's type, represented as an [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html).
@return the item's type*/ getType(): FormApp.ItemType;
    /**Determines whether the date item includes a year option.
@return `true` if the date includes a year setting; `false` if not*/ includesYear(): boolean;
    /**Determines whether the respondent must answer the question.
@return whether the respondent must answer the question*/ isRequired(): boolean;
    /**Sets the feedback to be shown to respondents when they respond to a gradeable question that
doesn't have a correct or incorrect answer (ie questions that require manual grading).
@param feedback the new feedback
@return this [`DateTimeItem`](https://developers.google.com/apps-script/reference/forms/date-time-item.html), for chaining*/ setGeneralFeedback(
      feedback: FormApp.QuizFeedback,
    ): FormApp.DateTimeItem;
    /**Sets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param text the new help text
@return this [`DateTimeItem`](https://developers.google.com/apps-script/reference/forms/date-time-item.html), for chaining*/ setHelpText(
      text: string,
    ): FormApp.DateTimeItem;
    /**Sets whether the date item includes a year setting. The default for new date items is `true`.
@param enableYear `true` if the date includes a year setting; `false` if not
@return this [`DateTimeItem`](https://developers.google.com/apps-script/reference/forms/date-time-item.html), for chaining*/ setIncludesYear(
      enableYear: boolean,
    ): FormApp.DateTimeItem;
    /**Sets the number of points a gradeable item is worth. The default for new items is 0.
@param points the number of a points a question item is worth
@return this [`DateTimeItem`](https://developers.google.com/apps-script/reference/forms/date-time-item.html), for chaining*/ setPoints(
      points: Integer,
    ): FormApp.DateTimeItem;
    /**Sets whether the respondent must answer the question.
@param enabled whether the respondent must answer the question
@return the current item (for chaining)*/ setRequired(
      enabled: boolean,
    ): FormApp.DateTimeItem;
    /**Sets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param title the new title or header text
@return this [`DateTimeItem`](https://developers.google.com/apps-script/reference/forms/date-time-item.html), for chaining*/ setTitle(
      title: string,
    ): FormApp.DateTimeItem;
  }
  interface DateItem {
    /**Creates a new [`ItemResponse`](https://developers.google.com/apps-script/reference/forms/item-response.html) for this date item. The time fields of the `Date`
object are ignored; by default, only the year, month, and day fields are used. If [`setIncludesYear(enabled)`](https://developers.google.com/apps-script/reference/forms/date-item.html#setIncludesYear(Boolean)) is set to `false`, the year is
ignored as well.
@param response a `Date` object that represents a month, day, and possibly year
@return the item response*/ createResponse(
      response: Date,
    ): FormApp.ItemResponse;
    /**Creates a copy of this item and appends it to the end of the form.
@return a duplicate of this [`DateItem`](https://developers.google.com/apps-script/reference/forms/date-item.html), for chaining*/ duplicate(): FormApp.DateItem;
    /**Returns the feedback that is shown to respondents when they respond to a gradeable question.
@return the feedback, if any.*/ getGeneralFeedback(): FormApp.QuizFeedback;
    /**Gets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's help text or description text*/ getHelpText(): string;
    /**Gets the item's unique identifier.
@return the item's ID*/ getId(): Integer;
    /**Gets the index of the item among all the items in the form.
@return the index of the item*/ getIndex(): Integer;
    /**Returns the point value of a gradeable item.
@return the number of points a question is worth.*/ getPoints(): Integer;
    /**Gets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's title or header text*/ getTitle(): string;
    /**Gets the item's type, represented as an [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html).
@return the item's type*/ getType(): FormApp.ItemType;
    /**Determines whether the date item includes a year option.
@return `true` if the date includes a year setting; `false` if not*/ includesYear(): boolean;
    /**Determines whether the respondent must answer the question.
@return whether the respondent must answer the question*/ isRequired(): boolean;
    /**Sets the feedback to be shown to respondents when they respond to a gradeable question that
doesn't have a correct or incorrect answer (ie questions that require manual grading).
@param feedback the new feedback
@return this [`DateItem`](https://developers.google.com/apps-script/reference/forms/date-item.html), for chaining*/ setGeneralFeedback(
      feedback: FormApp.QuizFeedback,
    ): FormApp.DateItem;
    /**Sets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param text the new help text
@return this [`DateItem`](https://developers.google.com/apps-script/reference/forms/date-item.html), for chaining*/ setHelpText(
      text: string,
    ): FormApp.DateItem;
    /**Sets whether the date item includes a year setting. The default for new date items is `true`.
@param enableYear `true` if the date includes a year setting; `false` if not
@return this [`DateItem`](https://developers.google.com/apps-script/reference/forms/date-item.html), for chaining*/ setIncludesYear(
      enableYear: boolean,
    ): FormApp.DateItem;
    /**Sets the number of points a gradeable item is worth. The default for new items is 0.
@param points the number of a points a question item is worth
@return this [`DateItem`](https://developers.google.com/apps-script/reference/forms/date-item.html), for chaining*/ setPoints(
      points: Integer,
    ): FormApp.DateItem;
    /**Sets whether the respondent must answer the question.
@param enabled whether the respondent must answer the question
@return the current item (for chaining)*/ setRequired(
      enabled: boolean,
    ): FormApp.DateItem;
    /**Sets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param title the new title or header text
@return this [`DateItem`](https://developers.google.com/apps-script/reference/forms/date-item.html), for chaining*/ setTitle(
      title: string,
    ): FormApp.DateItem;
  }
  interface Choice {
    /**Gets the [`PageBreakItem`](https://developers.google.com/apps-script/reference/forms/page-break-item.html) set as a [`GO_TO_PAGE`](https://developers.google.com/apps-script/reference/forms/page-navigation-type.html) destination
if the responder selects this choice and completes the current page. This method applies only
to choices associated with [`MultipleChoiceItems`](https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html); for other choices,
it returns `null`.
@return the [`GO_TO_PAGE`](https://developers.google.com/apps-script/reference/forms/page-navigation-type.html) destination for this choice, or `null` if there is none*/ getGotoPage(): FormApp.PageBreakItem;
    /**Gets the [`PageNavigationType`](https://developers.google.com/apps-script/reference/forms/page-navigation-type.html) that occurs if the responder selects this choice and
completes the current page. This method applies only to choices associated with [`MultipleChoiceItems`](https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html); for other choices, it returns `null`.
@return the navigation action for this choice, or `null` if there is none*/ getPageNavigationType(): FormApp.PageNavigationType;
    /**Gets the choice's value, which respondents see as a label when viewing the form.
@return the choice's value*/ getValue(): string;
    /**Gets whether the choice is a correct answer for the question. This method only applies to
questions that are part of a quiz; for non-quiz forms, it returns false.
@return Whether the choice is a correct answer.*/ isCorrectAnswer(): boolean;
  }
  interface CheckboxValidationBuilder {
    /**Require at least this many choices to be selected.
@return this [`CheckboxValidationBuilder`](https://developers.google.com/apps-script/reference/forms/checkbox-validation-builder.html), for chaining*/ requireSelectAtLeast(
      number: Integer,
    ): FormApp.CheckboxValidationBuilder;
    /**Require at most this many choices to be selected.
@return this [`CheckboxValidationBuilder`](https://developers.google.com/apps-script/reference/forms/checkbox-validation-builder.html), for chaining*/ requireSelectAtMost(
      number: Integer,
    ): FormApp.CheckboxValidationBuilder;
    /**Require exactly this many choices to be selected.
@return this [`CheckboxValidationBuilder`](https://developers.google.com/apps-script/reference/forms/checkbox-validation-builder.html), for chaining*/ requireSelectExactly(
      number: Integer,
    ): FormApp.CheckboxValidationBuilder;
  }
  interface CheckboxValidation {}
  interface CheckboxItem {
    /**Removes any data validation for this checkbox item.
@return this [`CheckboxItem`](https://developers.google.com/apps-script/reference/forms/checkbox-item.html), for chaining*/ clearValidation(): FormApp.CheckboxItem;
    /**Creates a new choice.
@param value the choice's value, which respondents see as a label when viewing the form
@return the new choice*/ createChoice(value: string): FormApp.Choice;
    /**Creates a new choice.
@param value the choice's value, which respondents see as a label when viewing the form
@param isCorrect whether the choice is a correct answer
@return the new choice*/ createChoice(
      value: string,
      isCorrect: boolean,
    ): FormApp.Choice;
    /**Creates a new [`ItemResponse`](https://developers.google.com/apps-script/reference/forms/item-response.html) for this checkbox item. The argument `responses` is a
`String[]` array containing values that need to be checked. Throws an exception if any
value does not match a valid choice for this item, unless [`showOtherOption(enabled)`](https://developers.google.com/apps-script/reference/forms/checkbox-item.html#showOtherOption(Boolean)) is set to `true`.
@param responses an array of valid answers for this multiple-choice item
@return the item response*/ createResponse(
      responses: string[],
    ): FormApp.ItemResponse;
    /**Creates a copy of this item and appends it to the end of the form.
@return a duplicate of this [`CheckboxItem`](https://developers.google.com/apps-script/reference/forms/checkbox-item.html), for chaining*/ duplicate(): FormApp.CheckboxItem;
    /**Gets all choices for an item.
@return an array of choices*/ getChoices(): FormApp.Choice[];
    /**Returns the feedback that is shown to respondents when they respond correctly to a question.
@return the feedback, if any.*/ getFeedbackForCorrect(): FormApp.QuizFeedback;
    /**Returns the feedback that is shown to respondents when they respond incorrectly to a question.
@return the feedback, if any.*/ getFeedbackForIncorrect(): FormApp.QuizFeedback;
    /**Gets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's help text or description text*/ getHelpText(): string;
    /**Gets the item's unique identifier.
@return the item's ID*/ getId(): Integer;
    /**Gets the index of the item among all the items in the form.
@return the index of the item*/ getIndex(): Integer;
    /**Returns the point value of a gradeable item.
@return the number of points a question is worth.*/ getPoints(): Integer;
    /**Gets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's title or header text*/ getTitle(): string;
    /**Gets the item's type, represented as an [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html).
@return the item's type*/ getType(): FormApp.ItemType;
    /**Determines whether the item has an "other" option.
@return `true` if the item has an "other" option; `false` if not*/ hasOtherOption(): boolean;
    /**Determines whether the respondent must answer the question.
@return whether the respondent must answer the question*/ isRequired(): boolean;
    /**Sets the choices for an item from an array of strings. Throws an exception if the given array
is empty.

```
// Open a form by ID and add a new list item.
var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
var item = form.addListItem();
item.setTitle('Do you prefer cats or dogs?');
item.setChoiceValues(['Dogs', 'Cats']);
```
@param values the array of choice values, which respondents see as labels when viewing the form
@return this [`CheckboxItem`](https://developers.google.com/apps-script/reference/forms/checkbox-item.html), for chaining*/ setChoiceValues(
      values: string[],
    ): FormApp.CheckboxItem;
    /**Sets an array of choices for an item. Throws an exception if the given array is empty or
contains a `null` element.

```
// Open a form by ID and add a new list item.
var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
var item = form.addListItem();
item.setTitle('Do you prefer cats or dogs?')
item.setChoices([
    item.createChoice('Cats'),
    item.createChoice('Dogs')
]);
```
@param choices an array of choices
@return this [`CheckboxItem`](https://developers.google.com/apps-script/reference/forms/checkbox-item.html), for chaining*/ setChoices(
      choices: FormApp.Choice[],
    ): FormApp.CheckboxItem;
    /**Sets the feedback to be shown to respondents when they respond correctly to a question.

```
// Open a form by ID and add a new list item.
var form = FormApp.openById('1234567890abcdefghijklmnopqrstuvwxyz');
var item = form.addListItem();
item.setTitle('Do you prefer cats or dogs?');
// Set "Dogs" as the correct answer to this question.
item.setChoices([
  item.createChoice('Dogs', true),
  item.createChoice('Cats', false)]);
// Add feedback which will be shown for correct responses; ie "Dogs".
item.setFeedbackForCorrect(
    FormApp.createFeedback().setDisplayText("Dogs rule, cats drool.").build());
```
@param feedback the new feedback. A null value will clear the feedback.
@return this [`CheckboxItem`](https://developers.google.com/apps-script/reference/forms/checkbox-item.html), for chaining*/ setFeedbackForCorrect(
      feedback: FormApp.QuizFeedback,
    ): FormApp.CheckboxItem;
    /**Sets the feedback to be shown to respondents when they respond incorrectly to a question.
@param feedback the new feedback
@return this [`CheckboxItem`](https://developers.google.com/apps-script/reference/forms/checkbox-item.html), for chaining*/ setFeedbackForIncorrect(
      feedback: FormApp.QuizFeedback,
    ): FormApp.CheckboxItem;
    /**Sets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param text the new help text
@return this [`CheckboxItem`](https://developers.google.com/apps-script/reference/forms/checkbox-item.html), for chaining*/ setHelpText(
      text: string,
    ): FormApp.CheckboxItem;
    /**Sets the number of points a gradeable item is worth. The default for new items is 0.
@param points the number of a points a question item is worth
@return this [`CheckboxItem`](https://developers.google.com/apps-script/reference/forms/checkbox-item.html), for chaining*/ setPoints(
      points: Integer,
    ): FormApp.CheckboxItem;
    /**Sets whether the respondent must answer the question.
@param enabled whether the respondent must answer the question
@return the current item (for chaining)*/ setRequired(
      enabled: boolean,
    ): FormApp.CheckboxItem;
    /**Sets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param title the new title or header text
@return this [`CheckboxItem`](https://developers.google.com/apps-script/reference/forms/checkbox-item.html), for chaining*/ setTitle(
      title: string,
    ): FormApp.CheckboxItem;
    /**Sets the data validation for this checkbox item. Passing in null or a validation without any
require functions called will remove any prior validation.
@param validation a CheckboxValidation to apply to this item.
@return this [`CheckboxItem`](https://developers.google.com/apps-script/reference/forms/checkbox-item.html), for chaining*/ setValidation(
      validation: FormApp.CheckboxValidation,
    ): FormApp.CheckboxItem;
    /**Sets whether the item has an "other" option. The default for a new [`CheckboxItem`](https://developers.google.com/apps-script/reference/forms/checkbox-item.html) or
[`MultipleChoiceItem`](https://developers.google.com/apps-script/reference/forms/multiple-choice-item.html) is `false`.
@param enabled `true` if the item has an "other" option; `false` if not
@return this [`CheckboxItem`](https://developers.google.com/apps-script/reference/forms/checkbox-item.html), for chaining*/ showOtherOption(
      enabled: boolean,
    ): FormApp.CheckboxItem;
  }
  interface CheckboxGridValidationBuilder {
    /**Requires limit of one response per column for a grid item.
@return this validation builder, for chaining*/ requireLimitOneResponsePerColumn(): FormApp.CheckboxGridValidationBuilder;
  }
  interface CheckboxGridValidation {}
  interface CheckboxGridItem {
    /**Removes any data validation for this grid item.
@return this item, for chaining*/ clearValidation(): FormApp.CheckboxGridItem;
    /**Creates a new [`ItemResponse`](https://developers.google.com/apps-script/reference/forms/item-response.html) for this checkbox grid item. The argument `responses`
must be a `String[][]` array of arrays containing as many values as the number of inputs
in the checkbox grid. A `null` element for a non-required checkbox grid question
indicates no response to that row. Throws an exception if any of the values does not match a
valid choice.
@param responses an array of arrays of valid answers for this checkbox grid item
@return the item response*/ createResponse(
      responses: string[][],
    ): FormApp.ItemResponse;
    /**Creates a copy of this item and appends it to the end of the form.
@return a duplicate of this [`CheckboxGridItem`](https://developers.google.com/apps-script/reference/forms/checkbox-grid-item.html), for chaining*/ duplicate(): FormApp.CheckboxGridItem;
    /**Gets the values for every column in the grid.
@return an array of column values, which respondents see as labels when viewing the form*/ getColumns(): string[];
    /**Gets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's help text or description text*/ getHelpText(): string;
    /**Gets the item's unique identifier.
@return the item's ID*/ getId(): Integer;
    /**Gets the index of the item among all the items in the form.
@return the index of the item*/ getIndex(): Integer;
    /**Gets the values for every row in the grid.
@return an array of row values, which respondents see as labels when viewing the form*/ getRows(): string[];
    /**Gets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@return the item's title or header text*/ getTitle(): string;
    /**Gets the item's type, represented as an [`ItemType`](https://developers.google.com/apps-script/reference/forms/item-type.html).
@return the item's type*/ getType(): FormApp.ItemType;
    /**Determines whether the respondent must answer the question.
@return whether the respondent must answer the question*/ isRequired(): boolean;
    /**Sets the columns of the grid based on an array of values. Throws an exception if the given
array is empty.
@param columns an array of column values, which respondents see as labels when viewing the form
@return this item, for chaining*/ setColumns(
      columns: string[],
    ): FormApp.CheckboxGridItem;
    /**Sets the item's help text (sometimes called description text for layout items like [`ImageItems`](https://developers.google.com/apps-script/reference/forms/image-item.html), [`PageBreakItems`](https://developers.google.com/apps-script/reference/forms/page-break-item.html), and [`SectionHeaderItems`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param text the new help text
@return this [`CheckboxGridItem`](https://developers.google.com/apps-script/reference/forms/checkbox-grid-item.html), for chaining*/ setHelpText(
      text: string,
    ): FormApp.CheckboxGridItem;
    /**Sets whether the respondent must answer the question.
@param enabled whether the respondent must answer the question
@return the current item (for chaining)*/ setRequired(
      enabled: boolean,
    ): FormApp.CheckboxGridItem;
    /**Sets the rows of the grid based on an array of values. Throws an exception if the given array
is empty.
@param rows an array of row values, which respondents see as labels when viewing the form
@return this item, for chaining*/ setRows(
      rows: string[],
    ): FormApp.CheckboxGridItem;
    /**Sets the item's title (sometimes called header text, in the case of a [`SectionHeaderItem`](https://developers.google.com/apps-script/reference/forms/section-header-item.html)).
@param title the new title or header text
@return this [`CheckboxGridItem`](https://developers.google.com/apps-script/reference/forms/checkbox-grid-item.html), for chaining*/ setTitle(
      title: string,
    ): FormApp.CheckboxGridItem;
    /**Sets the data validation for this checkbox grid item. Passing in null or a validation without
any require functions called will remove any prior validation.
@param validation a CheckboxGridValidation to apply to this item.
@return this [`CheckboxGridItem`](https://developers.google.com/apps-script/reference/forms/checkbox-grid-item.html), for chaining*/ setValidation(
      validation: FormApp.CheckboxGridValidation,
    ): FormApp.CheckboxGridItem;
  }
  interface Alignment {}
  interface _Alignment {
    /**Align the image to the center of the form.*/ CENTER: Alignment;
    /**Align the image to the left side of the form.*/ LEFT: Alignment;
    /**Align the image to the right side of the form.*/ RIGHT: Alignment;
  }
}
const FormApp: FormApp;
