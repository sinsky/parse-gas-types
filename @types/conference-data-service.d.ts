interface ConferenceDataService {
  /**The [`ConferenceErrorType`](https://developers.google.com/apps-script/reference/conference-data/conference-error-type.html) enumeration.*/ ConferenceErrorType: ConferenceDataService._ConferenceErrorType;
  /**The [`EntryPointFeature`](https://developers.google.com/apps-script/reference/conference-data/entry-point-feature.html) enumeration.*/ EntryPointFeature: ConferenceDataService._EntryPointFeature;
  /**The [`EntryPointType`](https://developers.google.com/apps-script/reference/conference-data/entry-point-type.html) enumeration.*/ EntryPointType: ConferenceDataService._EntryPointType;
  /**Returns a new, empty [`ConferenceDataBuilder`](https://developers.google.com/apps-script/reference/conference-data/conference-data-builder.html).
@return a new, empty [`ConferenceDataBuilder`](https://developers.google.com/apps-script/reference/conference-data/conference-data-builder.html)*/ newConferenceDataBuilder(): ConferenceDataService.ConferenceDataBuilder;
  /**Returns a new, empty [`ConferenceError`](https://developers.google.com/apps-script/reference/conference-data/conference-error.html).
@return a new, empty [`ConferenceError`](https://developers.google.com/apps-script/reference/conference-data/conference-error.html)*/ newConferenceError(): ConferenceDataService.ConferenceError;
  /**Returns a new, empty [`ConferenceParameter`](https://developers.google.com/apps-script/reference/conference-data/conference-parameter.html).
@return a new, empty [`ConferenceParameter`](https://developers.google.com/apps-script/reference/conference-data/conference-parameter.html)*/ newConferenceParameter(): ConferenceDataService.ConferenceParameter;
  /**Returns a new, empty [`EntryPoint`](https://developers.google.com/apps-script/reference/conference-data/entry-point.html).
@return a new, empty [`EntryPoint`](https://developers.google.com/apps-script/reference/conference-data/entry-point.html)*/ newEntryPoint(): ConferenceDataService.EntryPoint;
}
module ConferenceDataService {
  interface EntryPointType {}
  interface _EntryPointType {
    /**A link to more information about entry points into a conference. A conference can have zero or
one `MORE` entry points. A conference with only a `MORE` entry point is not valid.*/ MORE: EntryPointType;
    /**A phone entry point for a conference. A conference can have zero or more `PHONE` entry
points.*/ PHONE: EntryPointType;
    /**A SIP entry point for a conference. A conference can have zero or one `SIP` entry points.*/ SIP: EntryPointType;
    /**A video entry point for a conference. A conference can have zero or one `VIDEO` entry
points.*/ VIDEO: EntryPointType;
  }
  interface EntryPointFeature {}
  interface _EntryPointFeature {
    /**Applies to PHONE entry point only. A call to a toll number is charged to the calling party. A
number can't be toll and toll-free at the same time.*/ TOLL: EntryPointFeature;
    /**Applies to PHONE entry point only. For the calling party, a call to a toll-free number is free
of charge. A number can't be toll and toll-free at the same time.*/ TOLL_FREE: EntryPointFeature;
    /**Do not use. Here only as a default value for compatibility reasons.*/ UNKNOWN_FEATURE: EntryPointFeature;
  }
  interface EntryPoint {
    /**Adds the feature of the entry point, such as being toll or toll-free.
@param feature The feature to set.
@return this object, for chaining*/ addFeature(
      feature: ConferenceDataService.EntryPointFeature,
    ): ConferenceDataService.EntryPoint;
    /**An access code for accessing the conference. Maximum length 128 characters. Optional.
@param accessCode The access code to set.
@return this object, for chaining*/ setAccessCode(
      accessCode: string,
    ): ConferenceDataService.EntryPoint;
    /**Sets the type of this entry point. Required.
@param entryPointType The entry point type to set.
@return this object, for chaining*/ setEntryPointType(
      entryPointType: ConferenceDataService.EntryPointType,
    ): ConferenceDataService.EntryPoint;
    /**A meeting code for accessing the conference. Maximum length 128 characters. Optional.
@param meetingCode The meeting code to set.
@return this object, for chaining*/ setMeetingCode(
      meetingCode: string,
    ): ConferenceDataService.EntryPoint;
    /**A passcode for accessing the conference. Maximum length 128 characters. Optional.
@param passcode The passcode to set.
@return this object, for chaining*/ setPasscode(
      passcode: string,
    ): ConferenceDataService.EntryPoint;
    /**A password code for accessing the conference. Maximum length 128 characters. Optional.
@param password The password to set.
@return this object, for chaining*/ setPassword(
      password: string,
    ): ConferenceDataService.EntryPoint;
    /**A PIN code for accessing the conference. Maximum length 128 characters. Optional.
@param pin The PIN code to set.
@return this object, for chaining*/ setPin(
      pin: string,
    ): ConferenceDataService.EntryPoint;
    /**The CLDR/ISO 3166 region code for the country associated with this entry point. Applicable only
to phone entry point types. Optional.
@param regionCode The regionCode to set.
@return this object, for chaining*/ setRegionCode(
      regionCode: string,
    ): ConferenceDataService.EntryPoint;
    /**Sets the URI for joining the conference through this entry point. For [`PHONE`](https://developers.google.com/apps-script/reference/conference-data/entry-point-type.html#PHONE) entry points, the prefix `tel:` is required. For [`SIP`](https://developers.google.com/apps-script/reference/conference-data/entry-point-type.html#SIP) entry points, the prefix `sip:` is required. For [`VIDEO`](https://developers.google.com/apps-script/reference/conference-data/entry-point-type.html#VIDEO) and [`MORE`](https://developers.google.com/apps-script/reference/conference-data/entry-point-type.html#MORE) entry points, the prefixes
`http:` or `https:` are required. Maximum length 1300 characters. Required.
@param uri The URI to set.
@return this object, for chaining*/ setUri(
      uri: string,
    ): ConferenceDataService.EntryPoint;
  }
  interface ConferenceParameter {
    /**Sets the key of this [`ConferenceParameter`](https://developers.google.com/apps-script/reference/conference-data/conference-parameter.html). The maximum length for this field is 50
characters. Required.
@param key The key to set.
@return this object, for chaining*/ setKey(
      key: string,
    ): ConferenceDataService.ConferenceParameter;
    /**Sets the value of this [`ConferenceParameter`](https://developers.google.com/apps-script/reference/conference-data/conference-parameter.html). The maximum length for this field is 1024
characters. Required.
@param value The value to set.
@return this object, for chaining*/ setValue(
      value: string,
    ): ConferenceDataService.ConferenceParameter;
  }
  interface ConferenceErrorType {}
  interface _ConferenceErrorType {
    /**An authentication error during conference data generation.*/ AUTHENTICATION: ConferenceErrorType;
    /**The user is not allowed to use the selected conference solution (but might be allowed to use
other solutions offered by the add-on).*/ CONFERENCE_SOLUTION_FORBIDDEN: ConferenceErrorType;
    /**A permanent error during conference data generation.*/ PERMANENT: ConferenceErrorType;
    /**The user isn't allowed to perform an action in the third-party conferencing system.*/ PERMISSION_DENIED: ConferenceErrorType;
    /**A temporary error during conference data generation.*/ TEMPORARY: ConferenceErrorType;
    /**An unknown error during conference data generation.*/ UNKNOWN: ConferenceErrorType;
  }
  interface ConferenceError {
    /**If the error type is [`AUTHENTICATION`](https://developers.google.com/apps-script/reference/conference-data/conference-error-type.html#AUTHENTICATION), the add-on must
provide a URL calling back into the add-on to allow users to log in. The maximum length for
this field is 1800 characters.
@param authenticationUrl The authentication URL to set.
@return this object, for chaining*/ setAuthenticationUrl(
      authenticationUrl: string,
    ): ConferenceDataService.ConferenceError;
    /**Sets the error type of this [`ConferenceError`](https://developers.google.com/apps-script/reference/conference-data/conference-error.html).
@param conferenceErrorType The type of error to set.
@return this object, for chaining*/ setConferenceErrorType(
      conferenceErrorType: ConferenceDataService.ConferenceErrorType,
    ): ConferenceDataService.ConferenceError;
  }
  interface ConferenceDataBuilder {
    /**Adds a [`ConferenceParameter`](https://developers.google.com/apps-script/reference/conference-data/conference-parameter.html) to this [`ConferenceData`](https://developers.google.com/apps-script/reference/conference-data/conference-data.html). The maximum number of
parameters per [`ConferenceData`](https://developers.google.com/apps-script/reference/conference-data/conference-data.html) is 300.
@param conferenceParameter The parameter to add.
@return This builder, for chaining.*/ addConferenceParameter(
      conferenceParameter: ConferenceDataService.ConferenceParameter,
    ): ConferenceDataService.ConferenceDataBuilder;
    /**Adds an [`EntryPoint`](https://developers.google.com/apps-script/reference/conference-data/entry-point.html) to this [`ConferenceData`](https://developers.google.com/apps-script/reference/conference-data/conference-data.html). The maximum number of entry points
per [`ConferenceData`](https://developers.google.com/apps-script/reference/conference-data/conference-data.html) is 300.
@param entryPoint The entry point to add.
@return This builder, for chaining.*/ addEntryPoint(
      entryPoint: ConferenceDataService.EntryPoint,
    ): ConferenceDataService.ConferenceDataBuilder;
    /**Builds and validates the [`ConferenceData`](https://developers.google.com/apps-script/reference/conference-data/conference-data.html).
@return the validated conference data*/ build(): ConferenceDataService.ConferenceData;
    /**Sets the conference ID of this [`ConferenceData`](https://developers.google.com/apps-script/reference/conference-data/conference-data.html). The maximum length for this field is 512
characters.
@param conferenceId The ID to set.
@return This builder, for chaining.*/ setConferenceId(
      conferenceId: string,
    ): ConferenceDataService.ConferenceDataBuilder;
    /**Sets the conference solution ID defined in the addon's manifest. The value must be specified
and populates conference's name and iconUrl values.

Note that the field is required for GSuite add-ons whereas it's ignored for Conferencing
add-ons
@param conferenceSolutionId The ID matching the manifest.
@return This builder, for chaining.*/ setConferenceSolutionId(
      conferenceSolutionId: string,
    ): ConferenceDataService.ConferenceDataBuilder;
    /**Sets the [`ConferenceError`](https://developers.google.com/apps-script/reference/conference-data/conference-error.html) of this [`ConferenceData`](https://developers.google.com/apps-script/reference/conference-data/conference-data.html), indicating that the conference
was not successfully created.
@param conferenceError The error to set.
@return This builder, for chaining.*/ setError(
      conferenceError: ConferenceDataService.ConferenceError,
    ): ConferenceDataService.ConferenceDataBuilder;
    /**Sets the additional notes of this [`ConferenceData`](https://developers.google.com/apps-script/reference/conference-data/conference-data.html), such as instructions from the
administrator or legal notices. Can contain HTML. The maximum length for this field is 2048
characters.
@param notes The additional notes to set.
@return This builder, for chaining.*/ setNotes(
      notes: string,
    ): ConferenceDataService.ConferenceDataBuilder;
  }
  interface ConferenceData {
    printJson(): string;
  }
}
const ConferenceDataService: ConferenceDataService;
