interface DataStudioApp{
/**Creates a new Community Connector.
@return A new [`CommunityConnector`](https://developers.google.com/apps-script/reference/data-studio/community-connector.html) object.*/createCommunityConnector():DataStudioApp.CommunityConnector;}module DataStudioApp{interface UserError{printJson():string;
/**Sets the text of the debug error, which is only shown to admins.
@param text The error text.
@return This object, for chaining.*/setDebugText(text:string):DataStudioApp.UserError;
/**Sets the text of the user error.
@param text The error text.
@return This object, for chaining.*/setText(text:string):DataStudioApp.UserError;
/**Triggers this exception to be thrown.*/throwException():void;}interface TextInput{
/**Enables overriding for this config entry. If set to `true`, data source creators have the
option to enable this for report editors
@param allowOverride Whether or not this config entry can be overridden in reports.
@return This builder, for chaining.*/setAllowOverride(allowOverride:boolean):DataStudioApp.TextInput;
/**Sets the help text for this configuration entry.
@param helpText The helpText to set.
@return This builder, for chaining.*/setHelpText(helpText:string):DataStudioApp.TextInput;
/**Sets the unique ID for this configuration entry.
@param id The ID to set.
@return This builder, for chaining.*/setId(id:string):DataStudioApp.TextInput;
/**Sets the dynamic status for this configuration entry.

If a dynamic configuration entry is modified, subsequent configuration entries are cleared.
@param isDynamic The dynamic status to set.
@return This builder, for chaining.*/setIsDynamic(isDynamic:boolean):DataStudioApp.TextInput;
/**Sets the display name for this configuration entry.
@param name The name to set.
@return This builder, for chaining.*/setName(name:string):DataStudioApp.TextInput;
/**Sets the placeholder text for this configuration entry.
@param placeholder The placeholder text to set.
@return This builder, for chaining.*/setPlaceholder(placeholder:string):DataStudioApp.TextInput;}interface TextArea{
/**Enables overriding for this config entry. If set to `true`, data source creators have the
option to enable this for report editors.
@param allowOverride Whether or not this config entry can be overridden in reports.
@return This builder, for chaining.*/setAllowOverride(allowOverride:boolean):DataStudioApp.TextArea;
/**Sets the help text for this configuration entry.
@param helpText The helpText to set.
@return This builder, for chaining.*/setHelpText(helpText:string):DataStudioApp.TextArea;
/**Sets the unique ID for this configuration entry.
@param id The ID to set.
@return This builder, for chaining.*/setId(id:string):DataStudioApp.TextArea;
/**Sets the dynamic status for this configuration entry.

If a dynamic configuration entry is modified, subsequent configuration entries are cleared.
@param isDynamic The dynamic status to set.
@return This builder, for chaining.*/setIsDynamic(isDynamic:boolean):DataStudioApp.TextArea;
/**Sets the display name for this configuration entry.
@param name The name to set.
@return This builder, for chaining.*/setName(name:string):DataStudioApp.TextArea;
/**Sets the placeholder text for this configuration entry.
@param placeholder The placeholder text to set.
@return This builder, for chaining.*/setPlaceholder(placeholder:string):DataStudioApp.TextArea;}interface SetCredentialsResponse{
/**Validates this object and returns it in the format needed by Data Studio.
@return The validated [`SetCredentialsResponse`](https://developers.google.com/apps-script/reference/data-studio/set-credentials-response.html) object.*/build():Object;printJson():string;
/**Sets the valid status of this [`SetCredentialsResponse`](https://developers.google.com/apps-script/reference/data-studio/set-credentials-response.html). Set to `true` if the
credentials provided in the request were valid, `false`, otherwise.
@param isValid The valid status to set.
@return This builder, for chaining.*/setIsValid(isValid:boolean):DataStudioApp.SetCredentialsResponse;}interface SelectSingle{
/**Adds a new select option.
@param optionBuilder A builder for an option.
@return This builder, for chaining.*/addOption(optionBuilder:DataStudioApp.OptionBuilder):DataStudioApp.SelectSingle;
/**Enables overriding for this config entry. If set to `true`, data source creators have the
option to enable this for report editors.
@param allowOverride Whether or not this config entry can be overridden in reports.
@return This builder, for chaining.*/setAllowOverride(allowOverride:boolean):DataStudioApp.SelectSingle;
/**Sets the help text for this configuration entry.
@param helpText The helpText to set.
@return This builder, for chaining.*/setHelpText(helpText:string):DataStudioApp.SelectSingle;
/**Sets the unique ID for this configuration entry.
@param id The ID to set.
@return This builder, for chaining.*/setId(id:string):DataStudioApp.SelectSingle;
/**Sets the dynamic status for this configuration entry.

If a dynamic configuration entry is modified, subsequent configuration entries are cleared.
@param isDynamic The dynamic status to set.
@return This builder, for chaining.*/setIsDynamic(isDynamic:boolean):DataStudioApp.SelectSingle;
/**Sets the display name for this configuration entry.
@param name The name to set.
@return This builder, for chaining.*/setName(name:string):DataStudioApp.SelectSingle;}interface SelectMultiple{
/**Adds a new select option.
@param optionBuilder A builder for an option.
@return This builder, for chaining.*/addOption(optionBuilder:DataStudioApp.OptionBuilder):DataStudioApp.SelectMultiple;
/**Enables overriding for this config entry. If set to `true`, data source creators have the
option to enable this for report editors.
@param allowOverride Whether or not this config entry can be overridden in reports.
@return This builder, for chaining.*/setAllowOverride(allowOverride:boolean):DataStudioApp.SelectMultiple;
/**Sets the help text for this configuration entry.
@param helpText The help text to set.
@return This builder, for chaining.*/setHelpText(helpText:string):DataStudioApp.SelectMultiple;
/**Sets the unique ID for this configuration entry.
@param id The ID to set.
@return This builder, for chaining.*/setId(id:string):DataStudioApp.SelectMultiple;
/**Sets the dynamic status for this configuration entry.

If a dynamic configuration entry is modified, subsequent configuration entries are cleared.
@param isDynamic The dynamic status to set.
@return This builder, for chaining.*/setIsDynamic(isDynamic:boolean):DataStudioApp.SelectMultiple;
/**Sets the display name for this configuration entry.
@param name The name to set.
@return This builder, for chaining.*/setName(name:string):DataStudioApp.SelectMultiple;}interface OptionBuilder{
/**Sets the label of this option builder. Labels are the text that the user sees when selecting
one or more options from the dropdown.
@param label The label to set.
@return This builder, for chaining.*/setLabel(label:string):DataStudioApp.OptionBuilder;
/**Sets the value of this option builder. Values are what is passed to the code when a user
selects one or more options from the dropdown.
@param value The value to set.
@return This builder, for chaining.*/setValue(value:string):DataStudioApp.OptionBuilder;}interface Info{
/**Sets the unique ID for this configuration entry.
@param id The ID to set.
@return This builder, for chaining.*/setId(id:string):DataStudioApp.Info;
/**Sets the text for this configuration entry.
@param text The text to set.
@return This builder, for chaining.*/setText(text:string):DataStudioApp.Info;}interface GetSchemaResponse{
/**Validates this object and returns it in the format needed by Data Studio.
@return The validated [`GetSchemaResponse`](https://developers.google.com/apps-script/reference/data-studio/get-schema-response.html) object.*/build():Object;printJson():string;
/**Sets the [`Fields`](https://developers.google.com/apps-script/reference/data-studio/fields.html) of the builder.
@param fields The fields to set.
@return This builder, for chaining.*/setFields(fields:DataStudioApp.Fields):DataStudioApp.GetSchemaResponse;}interface GetDataResponse{
/**Adds multiple rows of data to this [`GetDataResponse`](https://developers.google.com/apps-script/reference/data-studio/get-data-response.html).
@param rows The rows of data to set.
@return This builder, for chaining.*/addAllRows(rows:string[][]):DataStudioApp.GetDataResponse;
/**Adds a row of data to this [`GetDataResponse`](https://developers.google.com/apps-script/reference/data-studio/get-data-response.html).
@param row The row of data to set.
@return This builder, for chaining.*/addRow(row:string[]):DataStudioApp.GetDataResponse;
/**Validates this object and returns it in the format needed by Data Studio.
@return The validated [`GetDataResponse`](https://developers.google.com/apps-script/reference/data-studio/get-data-response.html) object.*/build():Object;
/**Sets the [`Fields`](https://developers.google.com/apps-script/reference/data-studio/fields.html) of the builder.
@param fields The fields to set.
@return This builder, for chaining.*/setFields(fields:DataStudioApp.Fields):DataStudioApp.GetDataResponse;
/**Sets the filters applied status for this builder. Set to `true` if all filters were
successfully applied, `false` otherwise.
@param filtersApplied - The filters applied status to set.
@return This builder, for chaining.*/setFiltersApplied(filtersApplied:boolean):DataStudioApp.GetDataResponse;}interface GetAuthTypeResponse{
/**Validates this object and returns it in the format needed by Data Studio.
@return The validated [`GetAuthTypeResponse`](https://developers.google.com/apps-script/reference/data-studio/get-auth-type-response.html) object.*/build():Object;printJson():string;
/**Sets the [`AuthType`](https://developers.google.com/apps-script/reference/data-studio/auth-type.html) of the builder.
@param authType The authentication type to set.
@return This builder, for chaining.*/setAuthType(authType:DataStudioApp.AuthType):DataStudioApp.GetAuthTypeResponse;
/**Sets the help URL of the builder.

The help URL is an optional URL the user can visit to get help on setting up auth. This is
only supported for `USER_PASS`, `KEY`, and `USER_TOKEN`
authTypes.
@param helpUrl The help URL to set.
@return This builder, for chaining.*/setHelpUrl(helpUrl:string):DataStudioApp.GetAuthTypeResponse;}interface Fields{
/**Returns a view of this object as an array.

```
var fields = //reference to fields object.
fields.newDimension().setId('field1_id');
fields.newDimension().setId('field2_id');
fields.newDimension().setId('field3_id');

// Logging the ID of each field:
fields
  .asArray()
  .map(function(field) {
     Logger.log(field.getId());
  });
```
@return An array of [`Field`](https://developers.google.com/apps-script/reference/data-studio/field.html) objects.*/asArray():DataStudioApp.Field[];
/**Validates this object and returns it in the format needed by Data Studio.
@return The validated field data, represented as a list of objects.*/build():Object[];
/**Returns a new [`Fields`](https://developers.google.com/apps-script/reference/data-studio/fields.html) object filtered to [`Field`](https://developers.google.com/apps-script/reference/data-studio/field.html)s with an ID in `ids`.

```
var fields = //reference to fields object.
fields.newDimension().setId('field1_id');
fields.newDimension().setId('field2_id');
fields.newDimension().setId('field3_id');

// subsetFields is a Fields object that only contains field1 and field2.
var subsetFields = fields.forIds(['field1_id', 'field3_id']);
```
@param ids The IDs of fields that should be kept.
@return A new [`Fields`](https://developers.google.com/apps-script/reference/data-studio/fields.html) object.*/forIds(ids:string[]):DataStudioApp.Fields;
/**Returns the default dimension to be used for the set of fields. The default dimension is
selected automatically when a new visualization is made.
@return The dimension that is set as the default dimension, or `null` if no default
    dimension was set.*/getDefaultDimension():DataStudioApp.Field;
/**Returns the default metric to be used for the set of fields. The default metric is selected
automatically when a new visualization is made.
@return The metric that is set as the default metric, or `null` if no default metric was
    set.*/getDefaultMetric():DataStudioApp.Field;
/**Returns a field with a given ID, or `null` if no field with that ID is in this [`Fields`](https://developers.google.com/apps-script/reference/data-studio/fields.html) object.

```
var fields = //reference to fields object.
var field1 = fields.newDimension().setId('field1_id');

// byId is the same as field1.
var byId = fields.getFieldById('field1_id');

// byId2 is null.
var byId2 = fields.getFieldById('not present id');
```
@param fieldId The ID of the field to get.
@return The [`Field`](https://developers.google.com/apps-script/reference/data-studio/field.html) with the given ID, or `null` if no such field is contained
    within this [`Fields`](https://developers.google.com/apps-script/reference/data-studio/fields.html) object.*/getFieldById(fieldId:string):DataStudioApp.Field;
/**Returns a new dimension [`Field`](https://developers.google.com/apps-script/reference/data-studio/field.html).
@return A new dimension [`Field`](https://developers.google.com/apps-script/reference/data-studio/field.html).*/newDimension():DataStudioApp.Field;
/**Returns a new metric [`Field`](https://developers.google.com/apps-script/reference/data-studio/field.html).
@return A new metric [`Field`](https://developers.google.com/apps-script/reference/data-studio/field.html).*/newMetric():DataStudioApp.Field;
/**Sets the default dimension to be used for the set of fields. The default dimension is selected
automatically when a new visualization is made.
@param fieldId The ID of the field to use as the default dimension. This ID must be present in
    the set of fields.*/setDefaultDimension(fieldId:string):void;
/**Sets the default metric to be used for the set of fields. The default metric is selected
automatically when a new visualization is made.
@param fieldId The ID of the field to use as the default metric. This ID must be present in the
    set of fields.*/setDefaultMetric(fieldId:string):void;}interface FieldType{}interface _FieldType{
/**A `true` or `false` boolean value.*/BOOLEAN:FieldType;
/**A city such as Mountain View.*/CITY:FieldType;
/**A city code such as 1014044.*/CITY_CODE:FieldType;
/**A continent such as Americas.*/CONTINENT:FieldType;
/**A continent code such as 019.*/CONTINENT_CODE:FieldType;
/**A country such as United States.*/COUNTRY:FieldType;
/**A country code such as US.*/COUNTRY_CODE:FieldType;
/**Currency from AED.*/CURRENCY_AED:FieldType;
/**Currency from ALL.*/CURRENCY_ALL:FieldType;
/**Currency from ARS.*/CURRENCY_ARS:FieldType;
/**Currency from AUD.*/CURRENCY_AUD:FieldType;
/**Currency from BDT.*/CURRENCY_BDT:FieldType;
/**Currency from BGN.*/CURRENCY_BGN:FieldType;
/**Currency from BOB.*/CURRENCY_BOB:FieldType;
/**Currency from BRL.*/CURRENCY_BRL:FieldType;
/**Currency from CAD.*/CURRENCY_CAD:FieldType;
/**Currency from CDF.*/CURRENCY_CDF:FieldType;
/**Currency from CHF.*/CURRENCY_CHF:FieldType;
/**Currency from CLP.*/CURRENCY_CLP:FieldType;
/**Currency from CNY.*/CURRENCY_CNY:FieldType;
/**Currency from COP.*/CURRENCY_COP:FieldType;
/**Currency from CRC.*/CURRENCY_CRC:FieldType;
/**Currency from CZK.*/CURRENCY_CZK:FieldType;
/**Currency from DKK.*/CURRENCY_DKK:FieldType;
/**Currency from DOP.*/CURRENCY_DOP:FieldType;
/**Currency from EGP.*/CURRENCY_EGP:FieldType;
/**Currency from ETB.*/CURRENCY_ETB:FieldType;
/**Currency from EUR.*/CURRENCY_EUR:FieldType;
/**Currency from GBP.*/CURRENCY_GBP:FieldType;
/**Currency from HKD.*/CURRENCY_HKD:FieldType;
/**Currency from HRK.*/CURRENCY_HRK:FieldType;
/**Currency from HUF.*/CURRENCY_HUF:FieldType;
/**Currency from IDR.*/CURRENCY_IDR:FieldType;
/**Currency from ILS.*/CURRENCY_ILS:FieldType;
/**Currency from INR.*/CURRENCY_INR:FieldType;
/**Currency from IRR.*/CURRENCY_IRR:FieldType;
/**Currency from ISK.*/CURRENCY_ISK:FieldType;
/**Currency from JMD.*/CURRENCY_JMD:FieldType;
/**Currency from JPY.*/CURRENCY_JPY:FieldType;
/**Currency from KRW.*/CURRENCY_KRW:FieldType;
/**Currency from LKR.*/CURRENCY_LKR:FieldType;
/**Currency from LTL.*/CURRENCY_LTL:FieldType;
/**Currency from MNT.*/CURRENCY_MNT:FieldType;
/**Currency from MVR.*/CURRENCY_MVR:FieldType;
/**Currency from MXN.*/CURRENCY_MXN:FieldType;
/**Currency from MYR.*/CURRENCY_MYR:FieldType;
/**Currency from NGN.*/CURRENCY_NGN:FieldType;
/**Currency from NOK.*/CURRENCY_NOK:FieldType;
/**Currency from NZD.*/CURRENCY_NZD:FieldType;
/**Currency from PAB.*/CURRENCY_PAB:FieldType;
/**Currency from PEN.*/CURRENCY_PEN:FieldType;
/**Currency from PHP.*/CURRENCY_PHP:FieldType;
/**Currency from PKR.*/CURRENCY_PKR:FieldType;
/**Currency from PLN.*/CURRENCY_PLN:FieldType;
/**Currency from RON.*/CURRENCY_RON:FieldType;
/**Currency from RSD.*/CURRENCY_RSD:FieldType;
/**Currency from RUB.*/CURRENCY_RUB:FieldType;
/**Currency from SAR.*/CURRENCY_SAR:FieldType;
/**Currency from SEK.*/CURRENCY_SEK:FieldType;
/**Currency from SGD.*/CURRENCY_SGD:FieldType;
/**Currency from THB.*/CURRENCY_THB:FieldType;
/**Currency from TRY.*/CURRENCY_TRY:FieldType;
/**Currency from TWD.*/CURRENCY_TWD:FieldType;
/**Currency from TZS.*/CURRENCY_TZS:FieldType;
/**Currency from UAH.*/CURRENCY_UAH:FieldType;
/**Currency from USD.*/CURRENCY_USD:FieldType;
/**Currency from UYU.*/CURRENCY_UYU:FieldType;
/**Currency from VEF.*/CURRENCY_VEF:FieldType;
/**Currency from VND.*/CURRENCY_VND:FieldType;
/**Currency from YER.*/CURRENCY_YER:FieldType;
/**Currency from ZAR.*/CURRENCY_ZAR:FieldType;
/**Day in the format of DD such as 17.*/DAY:FieldType;
/**A number in the range of [0,6] with 0 representing Sunday.*/DAY_OF_WEEK:FieldType;
/**A duration of time in seconds.*/DURATION:FieldType;
/**Hour in the format of HH such as 13.*/HOUR:FieldType;
/**A hyperlink. Only use this for calculated fields with the [`HYPERLINK`](https://support.google.com/datastudio/answer/7431836)
function.*/HYPERLINK:FieldType;
/**An image. Only use this for calculated fields with the [`IMAGE`](https://support.google.com/datastudio/answer/7570489) function.*/IMAGE:FieldType;
/**An image link. Only use this for calculated fields with the [`HYPERLINK`](https://support.google.com/datastudio/answer/7431836) function
while using `IMAGE` for the link label.*/IMAGE_LINK:FieldType;
/**A latitude longitude pair such as 51.5074, -0.1278.*/LATITUDE_LONGITUDE:FieldType;
/**A metro such as San Francisco-Oakland-San Jose CA.*/METRO:FieldType;
/**A metro code such as 200807.*/METRO_CODE:FieldType;
/**Minute in the format of mm such as 12.*/MINUTE:FieldType;
/**Month in the format of MM such as 03.*/MONTH:FieldType;
/**Month and day in the format of MMDD such as 0317.*/MONTH_DAY:FieldType;
/**A decimal number.*/NUMBER:FieldType;
/**Decimal percentage (can be over 1.0). For example, 137% is represented as 1.37.*/PERCENT:FieldType;
/**Quarter in the format of 1, 2, 3, or 4).*/QUARTER:FieldType;
/**A region such as California.*/REGION:FieldType;
/**A region code such as CA.*/REGION_CODE:FieldType;
/**A sub-continent such as North America.*/SUB_CONTINENT:FieldType;
/**A sub-continent code such as 003.*/SUB_CONTINENT_CODE:FieldType;
/**Free-form text.*/TEXT:FieldType;
/**A URL as text such as https://google.com.*/URL:FieldType;
/**Week in the format of ww such as 07.*/WEEK:FieldType;
/**Year in the format of YYYY such as 2017.*/YEAR:FieldType;
/**Year and month in the format of YYYYMM such as 201703.*/YEAR_MONTH:FieldType;
/**Year, month, and day in the format of YYYYMMDD such as 20170317.*/YEAR_MONTH_DAY:FieldType;
/**Year, month, day, and hour in the format of YYYYMMDDHH such as 2017031703.*/YEAR_MONTH_DAY_HOUR:FieldType;
/**Year, month, day, hour, and minute in the format of YYYYMMDDHHmm such as 201703170230.*/YEAR_MONTH_DAY_MINUTE:FieldType;
/**Year, month, day, hour, minute, and second in the format of YYYYMMDDHHmmss such as
20170317023017.*/YEAR_MONTH_DAY_SECOND:FieldType;
/**Year and quarter in the format of YYYYQ such as 20171.*/YEAR_QUARTER:FieldType;
/**Year and week in the format of YYYYww such as 201707.*/YEAR_WEEK:FieldType;}interface Field{
/**Returns the [`AggregationType`](https://developers.google.com/apps-script/reference/data-studio/aggregation-type.html) of this [`Field`](https://developers.google.com/apps-script/reference/data-studio/field.html). [`AggregationType`](https://developers.google.com/apps-script/reference/data-studio/aggregation-type.html) determines
how Data Studio combines similar data into dimensions.
@return The aggregationType for this field.*/getAggregation():DataStudioApp.AggregationType;
/**Returns the description of this [`Field`](https://developers.google.com/apps-script/reference/data-studio/field.html). Descriptions are short explanations of a field's
purpose.
@return The description for this field.*/getDescription():string;
/**Returns the formula of this [`Field`](https://developers.google.com/apps-script/reference/data-studio/field.html). Formulas define a data transformation that Data
Studio runs at query-time.
@return The formula for this field.*/getFormula():string;
/**Returns the group of this [`Field`](https://developers.google.com/apps-script/reference/data-studio/field.html). Fields collected into a group are presented together
in the Data Studio UI.
@return The group for this field.*/getGroup():string;
/**Returns the ID of this [`Field`](https://developers.google.com/apps-script/reference/data-studio/field.html). IDs are unique per set of fields and are used in formulas
to refer to fields.
@return The ID for this field.*/getId():string;
/**Returns `true` if this field can be reaggregated, `false` otherwise.
@return `true` if this field can be reaggregated, `false` otherwise.*/getIsReaggregatable():boolean;
/**Returns the name of this [`Field`](https://developers.google.com/apps-script/reference/data-studio/field.html). Names are shown to the user to distinguish fields.
@return The name for this field.*/getName():string;
/**Returns the [`FieldType`](https://developers.google.com/apps-script/reference/data-studio/field-type.html) of this [`Field`](https://developers.google.com/apps-script/reference/data-studio/field.html).
@return The type for this field.*/getType():DataStudioApp.FieldType;
/**Returns `true` if this [`Field`](https://developers.google.com/apps-script/reference/data-studio/field.html) is the default metric or dimension.
@return `true` if this [`Field`](https://developers.google.com/apps-script/reference/data-studio/field.html) is the default metric or dimension; `false`
    otherwise.*/isDefault():boolean;
/**Returns `true` if this field is a dimension.
@return `true` if this field is a dimension; returns `false` otherwise.*/isDimension():boolean;
/**Returns `true` if this [`Field`](https://developers.google.com/apps-script/reference/data-studio/field.html) is hidden. You can use hidden fields in formulas,
but not in charts. You cannot hide fields containing formulas.
@return `true` if this [`Field`](https://developers.google.com/apps-script/reference/data-studio/field.html) is hidden; `false` otherwise.*/isHidden():boolean;
/**Returns `true` if this field is a metric.
@return `true` if this field is a metric; returns `false` otherwise.*/isMetric():boolean;
/**Sets the aggregation type of this [`Field`](https://developers.google.com/apps-script/reference/data-studio/field.html). [`AggregationType`](https://developers.google.com/apps-script/reference/data-studio/aggregation-type.html) determines how Data
Studio combines similar data into dimensions. This throws an error if called on a metric.
@param aggregation The aggregation type to set.
@return This builder, for chaining.*/setAggregation(aggregation:DataStudioApp.AggregationType):DataStudioApp.Field;
/**Sets the description of this [`Field`](https://developers.google.com/apps-script/reference/data-studio/field.html). Descriptions are short explanations of a field's
purpose.
@param description The description to set.
@return This builder, for chaining.*/setDescription(description:string):DataStudioApp.Field;
/**Sets the formula of this [`Field`](https://developers.google.com/apps-script/reference/data-studio/field.html). Formulas define a data transformation that Data Studio
runs at query-time.
@param formula The formula to set.
@return This builder, for chaining.*/setFormula(formula:string):DataStudioApp.Field;
/**Sets the group of this [`Field`](https://developers.google.com/apps-script/reference/data-studio/field.html). Fields collected into a group are presented together in
the Data Studio UI.
@param group The group to set.
@return This builder, for chaining.*/setGroup(group:string):DataStudioApp.Field;
/**Sets the ID of this [`Field`](https://developers.google.com/apps-script/reference/data-studio/field.html). IDs are unique per set of fields and are used in formulas to
refer to fields.
@param id The ID to set.
@return This builder, for chaining.*/setId(id:string):DataStudioApp.Field;
/**Sets the hidden status of this [`Field`](https://developers.google.com/apps-script/reference/data-studio/field.html). You can use hidden fields in formulas, but not in
charts. You cannot hide fields containing formulas.
@param isHidden The hidden status to set.
@return This builder, for chaining.*/setIsHidden(isHidden:boolean):DataStudioApp.Field;
/**Sets the reaggregation-permitted status for a [`Field`](https://developers.google.com/apps-script/reference/data-studio/field.html). Attempting to set an aggregation
type on a field that can't be reaggregated results in an error.
@param isReaggregatable The reaggregation-permitted status to set.
@return This builder, for chaining.*/setIsReaggregatable(isReaggregatable:boolean):DataStudioApp.Field;
/**Sets the name of this [`Field`](https://developers.google.com/apps-script/reference/data-studio/field.html). Names are shown to the user to distinguish fields.
@param name The name to set.
@return This builder, for chaining.*/setName(name:string):DataStudioApp.Field;
/**Sets the [`FieldType`](https://developers.google.com/apps-script/reference/data-studio/field-type.html) of this [`Field`](https://developers.google.com/apps-script/reference/data-studio/field.html).
@param type The type to set.
@return This builder, for chaining.*/setType(type:DataStudioApp.FieldType):DataStudioApp.Field;}interface DebugError{printJson():string;
/**Sets the text of the debug error, which is only shown to admins.
@param text The error text.
@return This object, for chaining.*/setText(text:string):DataStudioApp.DebugError;
/**Triggers this exception to be thrown.*/throwException():void;}interface Config{
/**Validates this object and returns it in the format needed by Data Studio.
@return The validated [`Config`](https://developers.google.com/apps-script/reference/data-studio/config.html) object.*/build():Object;
/**Returns a new checkbox configuration entry.
@return A new checkbox configuration entry.*/newCheckbox():DataStudioApp.Checkbox;
/**Returns a new info configuration entry.
@return A new info configuration entry.*/newInfo():DataStudioApp.Info;
/**Returns a new options builder.
@return A new options builder.*/newOptionBuilder():DataStudioApp.OptionBuilder;
/**Returns a new select multiple configuration entry.
@return A new select multiple configuration entry.*/newSelectMultiple():DataStudioApp.SelectMultiple;
/**Returns a new select single configuration entry.
@return A new select single configuration entry.*/newSelectSingle():DataStudioApp.SelectSingle;
/**Returns a new text area configuration entry.
@return A new text area configuration entry.*/newTextArea():DataStudioApp.TextArea;
/**Returns a new text input configuration entry.
@return A new text input configuration entry.*/newTextInput():DataStudioApp.TextInput;printJson():string;
/**If `true`, a date range is provided for getData() requests.
@param dateRangeRequired Whether or not a date range should be provided to `getData()`
    requests.
@return This builder, for chaining.*/setDateRangeRequired(dateRangeRequired:boolean):DataStudioApp.Config;
/**If `true`, `getConfig()` is called again with the current user configuration.
@param isSteppedConfig The stepped config status to set.
@return This builder, for chaining.*/setIsSteppedConfig(isSteppedConfig:boolean):DataStudioApp.Config;}interface CommunityConnector{
/**The [`AggregationType`](https://developers.google.com/apps-script/reference/data-studio/aggregation-type.html) enumeration.*/AggregationType:DataStudioApp._AggregationType;
/**The [`AuthType`](https://developers.google.com/apps-script/reference/data-studio/auth-type.html) enumeration.*/AuthType:DataStudioApp._AuthType;
/**The [`BigQueryParameterType`](https://developers.google.com/apps-script/reference/data-studio/big-query-parameter-type.html) enumeration.*/BigQueryParameterType:DataStudioApp._BigQueryParameterType;
/**The [`FieldType`](https://developers.google.com/apps-script/reference/data-studio/field-type.html) enumeration.*/FieldType:DataStudioApp._FieldType;
/**Returns a [`Config`](https://developers.google.com/apps-script/reference/data-studio/config.html) object. Use this object to add configuration entries.
@return A [`Config`](https://developers.google.com/apps-script/reference/data-studio/config.html) object.*/getConfig():DataStudioApp.Config;
/**Returns a [`Fields`](https://developers.google.com/apps-script/reference/data-studio/fields.html) object. Use this object to add metric and dimension [`Field`](https://developers.google.com/apps-script/reference/data-studio/field.html)s.
@return A [`Fields`](https://developers.google.com/apps-script/reference/data-studio/fields.html) object.*/getFields():DataStudioApp.Fields;
/**Returns a new [`GetAuthTypeResponse`](https://developers.google.com/apps-script/reference/data-studio/get-auth-type-response.html) object. Use this object to create a response for the
`getAuthType()` function you implement in your script project.
@return A new [`GetAuthTypeResponse`](https://developers.google.com/apps-script/reference/data-studio/get-auth-type-response.html) object.*/newAuthTypeResponse():DataStudioApp.GetAuthTypeResponse;
/**Returns a new [`BigQueryConfig`](https://developers.google.com/apps-script/reference/data-studio/big-query-config.html) object. Use this object to create a response for the
`getData()` function you implement in your script project.
@return A new [`BigQueryConfig`](https://developers.google.com/apps-script/reference/data-studio/big-query-config.html) object.*/newBigQueryConfig():DataStudioApp.BigQueryConfig;
/**Returns a new [`DebugError`](https://developers.google.com/apps-script/reference/data-studio/debug-error.html) object. Use this object to create debug errors.
@return A new [`DebugError`](https://developers.google.com/apps-script/reference/data-studio/debug-error.html) object.*/newDebugError():DataStudioApp.DebugError;
/**Returns a new [`GetDataResponse`](https://developers.google.com/apps-script/reference/data-studio/get-data-response.html) object. Use this object to create a response for the
`getData()` function you implement in your script project.
@return A new [`GetDataResponse`](https://developers.google.com/apps-script/reference/data-studio/get-data-response.html) object.*/newGetDataResponse():DataStudioApp.GetDataResponse;
/**Returns a new [`GetSchemaResponse`](https://developers.google.com/apps-script/reference/data-studio/get-schema-response.html) object. Use this object to create a response for the
`getSchema()` function you implement in your script project.
@return A new [`GetSchemaResponse`](https://developers.google.com/apps-script/reference/data-studio/get-schema-response.html) object.*/newGetSchemaResponse():DataStudioApp.GetSchemaResponse;
/**Returns a new [`SetCredentialsResponse`](https://developers.google.com/apps-script/reference/data-studio/set-credentials-response.html) object. Use this object to create a response for
the `setCredentials()` function you implement in your script project.
@return A new [`SetCredentialsResponse`](https://developers.google.com/apps-script/reference/data-studio/set-credentials-response.html) object.*/newSetCredentialsResponse():DataStudioApp.SetCredentialsResponse;
/**Returns a new [`UserError`](https://developers.google.com/apps-script/reference/data-studio/user-error.html) object. Use this object to create user errors.
@return A new [`UserError`](https://developers.google.com/apps-script/reference/data-studio/user-error.html) object.*/newUserError():DataStudioApp.UserError;}interface Checkbox{
/**Enables overriding for this config entry. If set to `true`, data source creators have the
option to enable this for report editors.
@param allowOverride Whether or not this config entry can be overridden in reports.
@return This builder, for chaining.*/setAllowOverride(allowOverride:boolean):DataStudioApp.Checkbox;
/**Sets the help text for this configuration entry.
@param helpText The helpText to set.
@return This builder, for chaining.*/setHelpText(helpText:string):DataStudioApp.Checkbox;
/**Sets the unique ID for this configuration entry.
@param id The ID to set.
@return This builder, for chaining.*/setId(id:string):DataStudioApp.Checkbox;
/**Sets the dynamic status for this configuration entry.

If a dynamic configuration entry is modified, subsequent configuration entries are cleared.
@param isDynamic The dynamic status to set.
@return This builder, for chaining.*/setIsDynamic(isDynamic:boolean):DataStudioApp.Checkbox;
/**Sets the display name for this configuration entry.
@param name The name to set.
@return This builder, for chaining.*/setName(name:string):DataStudioApp.Checkbox;}interface BigQueryParameterType{}interface _BigQueryParameterType{
/**Boolean.*/BOOL:BigQueryParameterType;
/**64-bit floating point number.*/FLOAT64:BigQueryParameterType;
/**64-bit integer.*/INT64:BigQueryParameterType;
/**String.*/STRING:BigQueryParameterType;}interface BigQueryConfig{
/**Adds a query parameter to this [`BigQueryConfig`](https://developers.google.com/apps-script/reference/data-studio/big-query-config.html).
@param name The parameter name.
@param type The parameter type.
@param value The parameter value.
@return This object, for chaining.*/addQueryParameter(name:string,type:DataStudioApp.BigQueryParameterType,value:string):DataStudioApp.BigQueryConfig;
/**Validates this object and returns it in the format needed by Data Studio.
@return The validated [`Config`](https://developers.google.com/apps-script/reference/data-studio/config.html) object.*/build():Object;printJson():string;
/**Sets the access token of this [`BigQueryConfig`](https://developers.google.com/apps-script/reference/data-studio/big-query-config.html).
@param accessToken The access token to set.
@return This object, for chaining.*/setAccessToken(accessToken:string):DataStudioApp.BigQueryConfig;
/**Sets the billing project ID of this [`BigQueryConfig`](https://developers.google.com/apps-script/reference/data-studio/big-query-config.html).
@param billingProjectId The billing project ID to set.
@return This object, for chaining.*/setBillingProjectId(billingProjectId:string):DataStudioApp.BigQueryConfig;
/**Sets the SQL query of this [`BigQueryConfig`](https://developers.google.com/apps-script/reference/data-studio/big-query-config.html).
@param query The query to set.
@return This object, for chaining.*/setQuery(query:string):DataStudioApp.BigQueryConfig;
/**Determines if the query is interpreted as standard or legacy SQL.
@param useStandardSql If `true`, the query is interpreted as standard SQL. If `false`, the query is interpreted as legacy SQL.
@return This object, for chaining.*/setUseStandardSql(useStandardSql:boolean):DataStudioApp.BigQueryConfig;}interface AuthType{}interface _AuthType{
/**API Key or Token needed.*/KEY:AuthType;
/**No authorization needed.*/NONE:AuthType;
/**OAuth2 authorization needed.*/OAUTH2:AuthType;
/**Path and key needed.*/PATH_KEY:AuthType;
/**Username, path, and password needed.*/PATH_USER_PASS:AuthType;
/**Username and password credentials needed.*/USER_PASS:AuthType;
/**Username and token needed.*/USER_TOKEN:AuthType;}interface AggregationType{}interface _AggregationType{
/**Auto. Use Auto for calculated fields which reference an aggregated field.*/AUTO:AggregationType;
/**Average.*/AVG:AggregationType;
/**Count.*/COUNT:AggregationType;
/**Count Distinct.*/COUNT_DISTINCT:AggregationType;
/**Max.*/MAX:AggregationType;
/**Min.*/MIN:AggregationType;
/**DEPRECATED: Use `AUTO` instead. No aggregation.
@deprecated*/NO_AGGREGATION:AggregationType;
/**Sum.*/SUM:AggregationType;}}const DataStudioApp:DataStudioApp;