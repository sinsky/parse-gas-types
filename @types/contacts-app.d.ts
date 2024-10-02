interface ContactsApp {
  ExtendedField: ContactsApp._ExtendedField;
  Field: ContactsApp._Field;
  Gender: ContactsApp._Gender;
  Month: _Month;
  Priority: ContactsApp._Priority;
  Sensitivity: ContactsApp._Sensitivity;
  /**Creates a new contact.

```
// The code below creates a new contact with the name "John Doe" and the email address
// "john.doe@example.com".
var contact = ContactsApp.createContact('John', 'Doe', 'john.doe@example.com');
```
@deprecated
@param givenName the first name of the contact
@param familyName the last name of the contact
@param email the email address of the contact
@return the newly created Contact object*/ createContact(
    givenName: string,
    familyName: string,
    email: string,
  ): ContactsApp.Contact;
  /**Creates a contact group with the given name

```
// The code below creates a new contact group named "Work Friends"
var group = ContactsApp.createContactGroup("Work Friends");
```
@deprecated
@param name the name of the new contact group
@return the newly created contact group*/ createContactGroup(
    name: string,
  ): ContactsApp.ContactGroup;
  /**Deletes the contact.

```
// The code below retrieves a contact with the email address "john.doe@example.com"
// and then deletes that contact.
var contact = ContactsApp.getContact('john.doe@example.com');
ContactsApp.deleteContact(contact);
```
@deprecated
@param contact the contact to be deleted*/ deleteContact(
    contact: ContactsApp.Contact,
  ): void;
  /**Deletes the contact group

```
// The code below creates deletes the contact group named "Work Friends"
var group = ContactsApp.getContactGroup("Work Friends");
ContactsApp.deleteContactGroup(group);
```
@deprecated
@param group the contact group to delete*/ deleteContactGroup(
    group: ContactsApp.ContactGroup,
  ): void;
  /**Finds a Contact with the given email address.
@deprecated
@param email the email address of the contact to be found
@return the Contact containing that email address*/ findByEmailAddress(
    email: string,
  ): ContactsApp.Contact;
  /**Finds a contact group of the given name.
@deprecated
@param name the name of the contact group to find
@return the contact group matching the given name*/ findContactGroup(
    name: string,
  ): ContactsApp.ContactGroup;
  /**Get all the contacts belonging to this user.
@deprecated
@return all the contacts for this user*/ getAllContacts(): ContactsApp.Contact[];
  /**Gets a contact by the email address.

If multiple contacts share the same email address, the method favors those contacts who have
marked the email address as primary; if none of the contacts had the email address marked as
primary or multiple contacts had the email address marked as primary, then it returns the first
result in the sorted contacts order.

```
// The code below retrieves a contact with the email address "john.doe@example.com".
var contact = ContactsApp.getContact('john.doe@example.com');
```
@deprecated
@param emailAddress the email address of the contact
@return the contact containing that email address*/ getContact(
    emailAddress: string,
  ): ContactsApp.Contact;
  /**Gets the contact with this id.

```
// The code below retrieves the contact with the id
// "http://www.google.com/m8/feeds/contacts/john.doe%40example.com/base/7c86afde08d34ca5"
var id = 'http://www.google.com/m8/feeds/contacts/john.doe%40example.com/base/7c86afde08d34c';
var contact = ContactApp.getContactById(id);
```
@deprecated
@param id the id of the contact to retrieve
@return the matching contact or null*/ getContactById(
    id: string,
  ): ContactsApp.Contact;
  /**Gets a contact group with the given name, or returns null if no such contact group is found.

```
// The code below returns the contact group with the name "Work Friends"
var group  = ContactsApp.getContactGroup('Work Friends');
```
@deprecated
@param name the name of the contact group to match
@return the matching contact group or null if no matching contact group is found*/ getContactGroup(
    name: string,
  ): ContactsApp.ContactGroup;
  /**Gets a contact group with the given id, or returns null if no such contact group is found.

```
// The code below returns the contact group with the id
// "http://www.google.com/m8/feeds/groups/john.doe%40example.com/base/54eefbb093fdecb"
var id = "http://www.google.com/m8/feeds/groups/john.doe%40example.com/base/54eefbb093fdecb";
var group  = ContactsApp.getContactGroupById(id);
```
@deprecated
@param id the id of the contact group to match
@return the matching contact group or null if no matching contact group is found*/ getContactGroupById(
    id: string,
  ): ContactsApp.ContactGroup;
  /**Gets the complete list of the user's contact groups.

A user can have a list of Contacts, and potentially a list of Contact Groups also. Each
Contact Group can contain Contacts. This method returns a list of all the Contact Groups.

```
// The retrieves all the contract groups for the user and then logs the group name of each
// contact group.
var groups  = ContactsApp.getContactGroups();
for (var i = 0; i < groups.length; i++) {
  Logger.log(groups[i].getName());
}
```
@deprecated
@return an array of the user's contact groups*/ getContactGroups(): ContactsApp.ContactGroup[];
  /**Gets all of the user's contacts.

```
// The code below will retrieve all the user's contacts
var contacts = ContactsApp.getContacts();
```
@deprecated
@return an array of all the user's contacts*/ getContacts(): ContactsApp.Contact[];
  /**Get contacts matching an address.

```
// The code below returns an array of contacts where the contact's address contains
// "San Francisco'.
var contacts = ContactsApp.getContactsByAddress('San Francisco');
```
@deprecated
@param query the string to search for in contact's addresses
@return an array of matching contacts*/ getContactsByAddress(
    query: string,
  ): ContactsApp.Contact[];
  /**Get contacts matching an address, limited to a specific field.

```
// The code below returns an array of contacts where the contact's address contains
// "San Francisco" in the Home address field.
var contacts = ContactsApp.getContactsByAddress('San Francisco',
                                                ContactsApp.Field.HOME_ADDRESS);
```
@deprecated
@param query the string to search for in contact's addresses
@param label the field to search within
@return an array of matching contacts*/ getContactsByAddress(
    query: string,
    label: ContactsApp.Field,
  ): ContactsApp.Contact[];
  /**Get contacts matching an address, limited to the specified custom address label.

```
// The code below returns an array of contacts where the contact's address contains
// "San Francisco" in a custom address label (created by the user) called
// "vacation".
var contacts = ContactsApp.getContactsByAddress('San Francisco', 'vacation');
```
@deprecated
@param query the string to search for in contact's addresses with the specified custom address
    label
@param label the custom address label to search within
@return an array of matching contacts*/ getContactsByAddress(
    query: string,
    label: string,
  ): ContactsApp.Contact[];
  /**Get contacts matching the company field.

```
// The code below returns an array of contacts where the contact's company field
// contains "Google".
var contacts = ContactsApp.getContactsByCompany('Google');
```
@deprecated
@param query the string to search for in contact's company field
@return an array of matching contacts*/ getContactsByCompany(
    query: string,
  ): ContactsApp.Contact[];
  /**Get contacts matching a given value in a custom field.

The custom field can be specified by a String or as one of the ContactsApp.ExtendedField
values.

```
// The code below returns an array of contacts where the contact's custom field
// named "Favorite Sport" contains "tennis".
var contacts = ContactsApp.getContactsByCustomField('tennis', 'Favorite Sport');
```
@deprecated
@param query the string to search for in contact's custom field
@param label the custom field to search within
@return an array of matching contacts*/ getContactsByCustomField(
    query: Object,
    label: ContactsApp.ExtendedField,
  ): ContactsApp.Contact[];
  /**Get contacts matching a given month and day for a particular standard field.

```
// The code below returns an array of contacts where the contact's "Birthday" field
// contains April for the month and 19 for the day.
var contacts = ContactsApp.getContactsByDate(ContactsApp.Month.APRIL, 19,
                                              ContactsApp.Field.BIRTHDAY);
```
@deprecated
@param month the month to match, as one of the values from ContactsApp.Month
@param day the day to match
@param label the field to search within, from ContactsApp.Field
@return an array of matching contacts*/ getContactsByDate(
    month: Month,
    day: Integer,
    label: ContactsApp.Field,
  ): ContactsApp.Contact[];
  /**Get contacts matching a given month, day, and year for a particular standard field.

```
// The code below returns an array of contacts where the contact's "Birthday" field
// contains April for the month, 19 for the day, and 1950 for the year.
var contacts = ContactsApp.getContactsByDate(ContactsApp.Month.APRIL, 19, 1950,
                                             ContactsApp.Field.BIRTHDAY);
```
@deprecated
@param month the month to match, as one of the values from ContactsApp.Month
@param day the day to match
@param year the year to match, can be null
@param label the field to search within, from ContactsApp.Field
@return an array of matching contacts*/ getContactsByDate(
    month: Month,
    day: Integer,
    year: Integer,
    label: ContactsApp.Field,
  ): ContactsApp.Contact[];
  /**Get contacts matching a given month, day, and year for a particular custom field.

```
// The code below returns an array of contacts where the contact's custom "Start Date" field
// contains April for the month, 19 for the day, and 2011 for the year.
var contacts = ContactsApp.getContactsByDate(ContactsApp.Month.APRIL, 19, 2011, 'Start Date');
```
@deprecated
@param month the month to match, as one of the values from ContactsApp.Month
@param day the day to match
@param year the year to match, can be null
@param label the custom field to search within
@return an array of matching contacts*/ getContactsByDate(
    month: Month,
    day: Integer,
    year: Integer,
    label: string,
  ): ContactsApp.Contact[];
  /**Get contacts matching a given month and day for a particular custom field.

```
// The code below returns an array of contacts where the contact's custom "Start Date" field
// contains April for the month and 19 for the day.
var contacts = ContactsApp.getContactsByDate(ContactsApp.Month.APRIL, 19, 'Start Date');
```
@deprecated
@param month the month to match, as one of the values from ContactsApp.Month
@param day the day to match
@param label the custom field to search within
@return an array of matching contacts*/ getContactsByDate(
    month: Month,
    day: Integer,
    label: string,
  ): ContactsApp.Contact[];
  /**Get contacts matching an email address.

```
// The code below returns an array of contacts where the contact's email address contains
// "john.doe@example.com'.
var contacts = ContactsApp.getContactsByEmailAddress('john.doe@example.com');
```
@deprecated
@param query the string to search for in contact email addresses
@return an array of matching contacts*/ getContactsByEmailAddress(
    query: string,
  ): ContactsApp.Contact[];
  /**Get contacts matching an email address, limited to a specific field.

```
// The code below returns an array of contacts where the contact's email address contains
// "john.doe@example.com" in the Home email field.
var contacts = ContactsApp.getContactsByEmailAddress('john.doe@example.com',
                                                     ContactsApp.Field.HOME_EMAIL);
```
@deprecated
@param query the string to search for in contact email addresses
@param label the field to search within
@return an array of matching contacts*/ getContactsByEmailAddress(
    query: string,
    label: ContactsApp.Field,
  ): ContactsApp.Contact[];
  /**Get contacts matching an email address, limited to the specified custom email address label.

```
// The code below returns an array of contacts where the contact's email address contains
// "john.doe@example.com" in a custom email address label (created by the user) called
// "alternate".
var contacts = ContactsApp.getContactsByEmailAddress('john.doe@example.com', 'alternate');
```
@deprecated
@param query the string to search for in contact email addresses with the specified custom
    email address label
@param label the custom email address label to search within
@return an array of matching contacts*/ getContactsByEmailAddress(
    query: string,
    label: string,
  ): ContactsApp.Contact[];
  /**Get the contacts in a given ContactGroup.

```
// The code below returns an array of contacts in the ContactGroup with the name
// "Work Friends".
var group  = ContactsApp.getContactGroup('Work Friends');
var contacts = ContactsApp.getContactsByGroup(group);
```
@deprecated
@param group the group of contacts
@return an array of of contacts in the given group*/ getContactsByGroup(
    group: ContactsApp.ContactGroup,
  ): ContactsApp.Contact[];
  /**Get contacts matching an instant messaging address.

```
// The code below returns an array of contacts where the contact's instant messaging address
// contains "ChatWithJohnDoe" in any instant messaging field.
var contacts = ContactsApp.getContactsByIM('ChatWithJohnDoe');
```
@deprecated
@param query the string to search for in contact's instant messaging addresses
@return an array of matching contacts*/ getContactsByIM(
    query: string,
  ): ContactsApp.Contact[];
  /**Get contacts matching an instant messaging address, limited to a specific field.

```
// The code below returns an array of contacts where the contact's instant messaging address
// contains "ChatWithJohnDoe" in the AIM instant messaging field.
var contacts = ContactsApp.getContactsByIM('ChatWithJohnDoe',
                                            ContactsApp.Field.AIM);
```
@deprecated
@param query the string to search for in contact's instant messaging addresses
@param label the field to search within
@return an array of matching contacts*/ getContactsByIM(
    query: string,
    label: ContactsApp.Field,
  ): ContactsApp.Contact[];
  /**Get contacts matching an instant messaging address, limited to the specified custom instant
messaging label.

```
// The code below returns an array of contacts where the contact's instant messaging address
// contains "ChatWithJohnDoe" in a custom instant messaging label (created by the user) called
// "eBuddy".
var contacts = ContactsApp.getContactsByIM('ChatWithJohnDoe', 'eBuddy');
```
@deprecated
@param query the string to search for in contact's instant messaging addresses with the
    specified custom instant messaging label
@param label the custom instant messaging label to search within
@return an array of matching contacts*/ getContactsByIM(
    query: string,
    label: string,
  ): ContactsApp.Contact[];
  /**Get contacts matching the job title field.

```
// The code below returns an array of contacts where the contact's job title field
// contains "Product Manager".
var contacts = ContactsApp.getContactsByJobTitle('Product Manager');
```
@deprecated
@param query the string to search for in contact's job title field
@return an array of matching contacts*/ getContactsByJobTitle(
    query: string,
  ): ContactsApp.Contact[];
  /**Get contacts matching a name.

```
// The code below returns an array of contacts where the contact name contains "John"
var contacts = ContactsApp.getContactsByName('John');
```
@deprecated
@param query the string to search for in contact names
@return an array of matching contacts*/ getContactsByName(
    query: string,
  ): ContactsApp.Contact[];
  /**Get contacts matching a name, limited to a specific field.

```
// The code below returns an array of contacts where the contact name contains "John"
// in the Given Name field.
var contacts = ContactsApp.getContactsByName('John', ContactsApp.Field.GIVEN_NAME);
```
@deprecated
@param query the string to search for in contact names
@param label the field to search within
@return an array of matching contacts*/ getContactsByName(
    query: string,
    label: ContactsApp.Field,
  ): ContactsApp.Contact[];
  /**Get contacts matching the notes field.

```
// The code below returns an array of contacts where the contact's notes field
// contains "sent birthday card".
var contacts = ContactsApp.getContactsByNotes('sent birthday card');
```
@deprecated
@param query the string to search for in contact's notes field
@return an array of matching contacts*/ getContactsByNotes(
    query: string,
  ): ContactsApp.Contact[];
  /**Get contacts matching a phone number.

This method will expand out lettered phone numbers, so if you search for '212-555-CODE' and
you have '212-555-2633' in your contacts or vice versa, the method will find the appropriate
contact.

```
// The code below returns an array of contacts where the contact's phone number contains
// "212-555-1234' in any phone number field.
var contacts = ContactsApp.getContactsByPhone('212-555-1234');
```
@deprecated
@param query the string to search for in contact's phone numbers
@return an array of matching contacts*/ getContactsByPhone(
    query: string,
  ): ContactsApp.Contact[];
  /**Get contacts matching a phone number, limited to a specific field.

This method will expand out lettered phone numbers, so if you search for '212-555-CODE' and
you have '212-555-2633' in your contacts or vice versa, the method will find the appropriate
contact.

```
// The code below returns an array of contacts where the contact's phone number contains
// "212-555-1234" in the Home phone number field.
var contacts = ContactsApp.getContactsByPhone('212-555-1234',
                                              ContactsApp.Field.HOME_PHONE);
```
@deprecated
@param query the string to search for in contact's phone numbers
@param label the field to search within
@return an array of matching contacts*/ getContactsByPhone(
    query: string,
    label: ContactsApp.Field,
  ): ContactsApp.Contact[];
  /**Get contacts matching a phone number, limited to the specified custom phone number label.

This method will expand out lettered phone numbers, so if you search for '212-555-CODE' and
you have '212-555-2633' in your contacts or vice versa, the method will find the appropriate
contact.

```
// The code below returns an array of contacts where the contact's phone number contains
// "212-555-1234" in a custom phone number label (created by the user) called
// "alternate".
var contacts = ContactsApp.getContactsByPhone('212-555-1234', 'alternate');
```
@deprecated
@param query the string to search for in contact's phone numbers with the specified custom
    phone number label
@param label the custom phone number label to search within
@return an array of matching contacts*/ getContactsByPhone(
    query: string,
    label: string,
  ): ContactsApp.Contact[];
  /**Get contacts matching a URL.

```
// The code below returns an array of contacts where the contact's URL contains
// "www.example.com' in any URL field.
var contacts = ContactsApp.getContactsByUrl('www.example.com');
```
@deprecated
@param query the string to search for in contact's URLs
@return an array of matching contacts*/ getContactsByUrl(
    query: string,
  ): ContactsApp.Contact[];
  /**Get contacts matching a URL, limited to a specific field.

```
// The code below returns an array of contacts where the contact's URL contains
// "www.example.com" in the Work URL field.
var contacts = ContactsApp.getContactsByUrl('www.example.com',
                                            ContactsApp.Field.WORK_WEBSITE);
```
@deprecated
@param query the string to search for in contact's URLs
@param label the field to search within
@return an array of matching contacts*/ getContactsByUrl(
    query: string,
    label: ContactsApp.Field,
  ): ContactsApp.Contact[];
  /**Get contacts matching a URL, limited to the specified custom URL label.

```
// The code below returns an array of contacts where the contact's URL contains
// "www.example.com" in a custom URL label (created by the user) called
// "alternate work".
var contacts = ContactsApp.getContactsByUrl('www.example.com', 'alternate work');
```
@deprecated
@param query the string to search for in contact's URLs with the specified custom URL label
@param label the custom URL label to search within
@return an array of matching contacts*/ getContactsByUrl(
    query: string,
    label: string,
  ): ContactsApp.Contact[];
}
module ContactsApp {
  interface UrlField {
    /**Deletes this URL field.

```
// Retrieves and deletes the Blog URL field for contact 'John
// Doe'
var contacts = ContactsApp.getContactsByName('John Doe');
var urlFields = contacts[0].getUrls(ContactsApp.Field.BLOG);
urlFields[0].deleteUrlField();
```
@deprecated*/ deleteUrlField(): void;
    /**Get the address for this field.

```
// Logs the address for the 'Home Address' field for contact 'John Doe'.
// Can be used similarly for other fields that contain addresses.
var contacts = ContactsApp.getContactsByName('John Doe');
var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
Logger.log(homeAddress[0].getAddress());
```
@return the address as a string*/ getAddress(): string;
    /**Gets the label for this field. This may be a Field, ExtendedField, or a String.

```
// Logs the label for all the address fields associated with contact
// 'John Doe'. This method can be similarly called for any field that has
// a label.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
for (var i = 0; i < addressFields.length; i++) {
  Logger.log(addressFields[i].getLabel());
}
```
@return the label for this field*/ getLabel(): Object;
    /**Gets whether this is the primary field value.

```
// Logs whether or not the first address field associated with contact
// 'John Doe' is labeled as primary. This method can be similarly called
// for any field.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
Logger.log(addressFields[0].isPrimary());
```
@return whether this is primary*/ isPrimary(): boolean;
    /**Sets the address of this field.

```
// Sets the address for the 'Home Address' field for contact 'John Doe'.
// Can be used similarly for other fields that contain addresses.
var contacts = ContactsApp.getContactsByName('John Doe');
var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
homeAddress[0].setAddress('123 Main St, Raleigh, NC, 27601');
```
@param address the new address
@return this field, useful for chaining*/ setAddress(
      address: string,
    ): ContactsApp.UrlField;
    /**Sets this field to primary.

```
// Sets the the first address field associated with contact 'John Doe'
// as primary. This method can be similarly called for any field.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
addressFields[0].setAsPrimary();
```
@return this FieldValue for chaining*/ setAsPrimary(): ContactsApp.UrlField;
    /**Sets the label of this field.

```
// Sets the label to 'Work' for the first address field associated
// with contact 'John Doe'. This method can be similarly called for any
// field that has a label.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
addressFields[0].setLabel(ContactsApp.Field.WORK_ADDRESS);
```
@param field the new standard label
@return this FieldValue for chaining*/ setLabel(
      field: ContactsApp.Field,
    ): ContactsApp.UrlField;
    /**Sets the label of this field.

```
// Sets the label to 'Apartment' for the first address field associated
// with contact 'John Doe'. This method can be similarly called for any
// field that has a label.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
addressFields[0].setLabel('Apartment');
```
@param label the new label for this field
@return this field, useful for chaining*/ setLabel(
      label: string,
    ): ContactsApp.UrlField;
  }
  interface Sensitivity {}
  interface _Sensitivity {
    /**confidential sensitivity
@deprecated*/ CONFIDENTIAL: Sensitivity;
    /**normal sensitivity
@deprecated*/ NORMAL: Sensitivity;
    /**personal sensitivity
@deprecated*/ PERSONAL: Sensitivity;
    /**private sensitivity
@deprecated*/ PRIVATE: Sensitivity;
  }
  interface Priority {}
  interface _Priority {
    /**high priority
@deprecated*/ HIGH: Priority;
    /**low priority
@deprecated*/ LOW: Priority;
    /**normal priority
@deprecated*/ NORMAL: Priority;
  }
  interface PhoneField {
    /**Deletes this phone number field.

```
// Retrieves and deletes the work phone number field for contact 'John
// Doe'
var contacts = ContactsApp.getContactsByName('John Doe');
var phoneFields = contacts[0].getPhones(ContactsApp.Field.WORK_PHONE);
phoneFields[0].deletePhoneField();
```
@deprecated*/ deletePhoneField(): void;
    /**Gets the label for this field. This may be a Field, ExtendedField, or a String.

```
// Logs the label for all the address fields associated with contact
// 'John Doe'. This method can be similarly called for any field that has
// a label.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
for (var i = 0; i < addressFields.length; i++) {
  Logger.log(addressFields[i].getLabel());
}
```
@return the label for this field*/ getLabel(): Object;
    /**Get the phone number for this field.

```
// Logs the work phone number for contact 'John Doe'
var contacts = ContactsApp.getContactsByName('John Doe');
var phoneFields = contacts[0].getPhones(ContactsApp.Field.WORK_PHONE);
Logger.log(phoneFields[0].getPhoneNumber());
```
@deprecated
@return the number as a string*/ getPhoneNumber(): string;
    /**Gets whether this is the primary field value.

```
// Logs whether or not the first address field associated with contact
// 'John Doe' is labeled as primary. This method can be similarly called
// for any field.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
Logger.log(addressFields[0].isPrimary());
```
@return whether this is primary*/ isPrimary(): boolean;
    /**Sets this field to primary.

```
// Sets the the first address field associated with contact 'John Doe'
// as primary. This method can be similarly called for any field.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
addressFields[0].setAsPrimary();
```
@return this FieldValue for chaining*/ setAsPrimary(): ContactsApp.PhoneField;
    /**Sets the label of this field.

```
// Sets the label to 'Work' for the first address field associated
// with contact 'John Doe'. This method can be similarly called for any
// field that has a label.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
addressFields[0].setLabel(ContactsApp.Field.WORK_ADDRESS);
```
@param field the new standard label
@return this FieldValue for chaining*/ setLabel(
      field: ContactsApp.Field,
    ): ContactsApp.PhoneField;
    /**Sets the label of this field.

```
// Sets the label to 'Apartment' for the first address field associated
// with contact 'John Doe'. This method can be similarly called for any
// field that has a label.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
addressFields[0].setLabel('Apartment');
```
@param label the new label for this field
@return this field, useful for chaining*/ setLabel(
      label: string,
    ): ContactsApp.PhoneField;
    /**Sets the phone number for this field.

```
// Sets the work phone number for contact 'John Doe'
var contacts = ContactsApp.getContactsByName('John Doe');
var phoneFields = contacts[0].getPhones(ContactsApp.Field.WORK_PHONE);
phoneFields[0].setPhoneNumber('212-555-1234');
```
@deprecated
@param number the new number
@return this field, useful for chaining*/ setPhoneNumber(
      number: string,
    ): ContactsApp.PhoneField;
  }
  interface IMField {
    /**Deletes this instant messaging field.

```
// Retrieves and deletes the AIM instant messaging field for contact 'John
// Doe'
var contacts = ContactsApp.getContactsByName('John Doe');
var imFields = contacts[0].getIMs(ContactsApp.Field.AIM);
imFields[0].deleteIMField();
```
@deprecated*/ deleteIMField(): void;
    /**Get the address for this field.

```
// Logs the address for the 'Home Address' field for contact 'John Doe'.
// Can be used similarly for other fields that contain addresses.
var contacts = ContactsApp.getContactsByName('John Doe');
var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
Logger.log(homeAddress[0].getAddress());
```
@return the address as a string*/ getAddress(): string;
    /**Gets the label for this field. This may be a Field, ExtendedField, or a String.

```
// Logs the label for all the address fields associated with contact
// 'John Doe'. This method can be similarly called for any field that has
// a label.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
for (var i = 0; i < addressFields.length; i++) {
  Logger.log(addressFields[i].getLabel());
}
```
@return the label for this field*/ getLabel(): Object;
    /**Gets whether this is the primary field value.

```
// Logs whether or not the first address field associated with contact
// 'John Doe' is labeled as primary. This method can be similarly called
// for any field.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
Logger.log(addressFields[0].isPrimary());
```
@return whether this is primary*/ isPrimary(): boolean;
    /**Sets the address of this field.

```
// Sets the address for the 'Home Address' field for contact 'John Doe'.
// Can be used similarly for other fields that contain addresses.
var contacts = ContactsApp.getContactsByName('John Doe');
var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
homeAddress[0].setAddress('123 Main St, Raleigh, NC, 27601');
```
@param address the new address
@return this field, useful for chaining*/ setAddress(
      address: string,
    ): ContactsApp.IMField;
    /**Sets this field to primary.

```
// Sets the the first address field associated with contact 'John Doe'
// as primary. This method can be similarly called for any field.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
addressFields[0].setAsPrimary();
```
@return this FieldValue for chaining*/ setAsPrimary(): ContactsApp.IMField;
    /**Sets the label of this field.

```
// Sets the label to 'Work' for the first address field associated
// with contact 'John Doe'. This method can be similarly called for any
// field that has a label.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
addressFields[0].setLabel(ContactsApp.Field.WORK_ADDRESS);
```
@param field the new standard label
@return this FieldValue for chaining*/ setLabel(
      field: ContactsApp.Field,
    ): ContactsApp.IMField;
    /**Sets the label of this field.

```
// Sets the label to 'Apartment' for the first address field associated
// with contact 'John Doe'. This method can be similarly called for any
// field that has a label.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
addressFields[0].setLabel('Apartment');
```
@param label the new label for this field
@return this field, useful for chaining*/ setLabel(
      label: string,
    ): ContactsApp.IMField;
  }
  interface Gender {}
  interface _Gender {
    /**female gender
@deprecated*/ FEMALE: Gender;
    /**male gender
@deprecated*/ MALE: Gender;
  }
  interface Field {}
  interface _Field {
    /**the contact's AIM identifier
@deprecated*/ AIM: Field;
    /**the contact's anniversary
@deprecated*/ ANNIVERSARY: Field;
    /**the contact's assistant's phone number
@deprecated*/ ASSISTANT_PHONE: Field;
    /**the contact's birthday
@deprecated*/ BIRTHDAY: Field;
    /**the contact's blog URL
@deprecated*/ BLOG: Field;
    /**the contact's callback phone number
@deprecated*/ CALLBACK_PHONE: Field;
    /**the contact's company
@deprecated*/ COMPANY: Field;
    /**the contact's family (last) name
@deprecated*/ FAMILY_NAME: Field;
    /**the contact's FTP URL
@deprecated*/ FTP: Field;
    /**the contact's full name
@deprecated*/ FULL_NAME: Field;
    /**the contact's given (first) name
@deprecated*/ GIVEN_NAME: Field;
    /**the contact's Google Talk identifier
@deprecated*/ GOOGLE_TALK: Field;
    /**the contact's Google Voice number
@deprecated*/ GOOGLE_VOICE: Field;
    /**the contact's home address
@deprecated*/ HOME_ADDRESS: Field;
    /**the contact's home email address
@deprecated*/ HOME_EMAIL: Field;
    /**the contact's home fax number
@deprecated*/ HOME_FAX: Field;
    /**the contact's home page URL
@deprecated*/ HOME_PAGE: Field;
    /**the contact's home phone number
@deprecated*/ HOME_PHONE: Field;
    /**the contact's home website URL
@deprecated*/ HOME_WEBSITE: Field;
    /**the contact's ICQ identifier
@deprecated*/ ICQ: Field;
    /**the contact's initials
@deprecated*/ INITIALS: Field;
    /**the contact's Jabber identifier
@deprecated*/ JABBER: Field;
    /**the contact's job title
@deprecated*/ JOB_TITLE: Field;
    /**the contact's maiden name
@deprecated*/ MAIDEN_NAME: Field;
    /**the contact's main phone number
@deprecated*/ MAIN_PHONE: Field;
    /**the contact's middle name
@deprecated*/ MIDDLE_NAME: Field;
    /**the contact's mobile phone number
@deprecated*/ MOBILE_PHONE: Field;
    /**the contact's MSN identifier
@deprecated*/ MSN: Field;
    /**the contact's nickname
@deprecated*/ NICKNAME: Field;
    /**notes about the contact
@deprecated*/ NOTES: Field;
    /**the contact's pager number
@deprecated*/ PAGER: Field;
    /**the prefix for the contact's name
@deprecated*/ PREFIX: Field;
    /**the contact's profile URL
@deprecated*/ PROFILE: Field;
    /**the contact's QQ identifer
@deprecated*/ QQ: Field;
    /**the contact's short name
@deprecated*/ SHORT_NAME: Field;
    /**the contact's Skype identifier
@deprecated*/ SKYPE: Field;
    /**the suffix for the contact's name
@deprecated*/ SUFFIX: Field;
    /**the contact's work address
@deprecated*/ WORK_ADDRESS: Field;
    /**the contact's work email address
@deprecated*/ WORK_EMAIL: Field;
    /**the contact's work fax number
@deprecated*/ WORK_FAX: Field;
    /**the contact's work phone number
@deprecated*/ WORK_PHONE: Field;
    /**the contact's work website URL
@deprecated*/ WORK_WEBSITE: Field;
    /**the contact's Yahoo instant messaging identifier
@deprecated*/ YAHOO: Field;
  }
  interface ExtendedField {}
  interface _ExtendedField {
    /**the contact's billing information
@deprecated*/ BILLING_INFORMATION: ExtendedField;
    /**the contact's directory server
@deprecated*/ DIRECTORY_SERVER: ExtendedField;
    /**the contact's gender
@deprecated*/ GENDER: ExtendedField;
    /**the contact's hobby
@deprecated*/ HOBBY: ExtendedField;
    /**the contact's home information
@deprecated*/ HOME: ExtendedField;
    /**the contact's language
@deprecated*/ LANGUAGE: ExtendedField;
    /**the contact's mileage
@deprecated*/ MILEAGE: ExtendedField;
    /**the contact's other information
@deprecated*/ OTHER: ExtendedField;
    /**the contact's priority
@deprecated*/ PRIORITY: ExtendedField;
    /**the contact's sensitivity
@deprecated*/ SENSITIVITY: ExtendedField;
    /**the contact's user information
@deprecated*/ USER: ExtendedField;
    /**the contact's work information
@deprecated*/ WORK: ExtendedField;
  }
  interface EmailField {
    /**Deletes this email address from the Contact.

```
// Retrieves and deletes the work email address for contact 'John Doe'
var contacts = ContactsApp.getContactsByName('John Doe');
var workEmail = contacts[0].getEmails(ContactsApp.Field.WORK_EMAIL);
workEmail[0].deleteEmailField();
```
@deprecated*/ deleteEmailField(): void;
    /**Get the address for this field.

```
// Logs the address for the 'Home Address' field for contact 'John Doe'.
// Can be used similarly for other fields that contain addresses.
var contacts = ContactsApp.getContactsByName('John Doe');
var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
Logger.log(homeAddress[0].getAddress());
```
@return the address as a string*/ getAddress(): string;
    /**Returns the display name for this email address.

```
// Logs the display name for the the work email address for contact 'John Doe'
var contacts = ContactsApp.getContactsByName('John Doe');
var workEmail = contacts[0].getEmails(ContactsApp.Field.WORK_EMAIL);
Logger.log(workEmail[0].getDisplayName());
```
@deprecated
@return the display name for this email*/ getDisplayName(): string;
    /**Gets the label for this field. This may be a Field, ExtendedField, or a String.

```
// Logs the label for all the address fields associated with contact
// 'John Doe'. This method can be similarly called for any field that has
// a label.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
for (var i = 0; i < addressFields.length; i++) {
  Logger.log(addressFields[i].getLabel());
}
```
@return the label for this field*/ getLabel(): Object;
    /**Gets whether this is the primary field value.

```
// Logs whether or not the first address field associated with contact
// 'John Doe' is labeled as primary. This method can be similarly called
// for any field.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
Logger.log(addressFields[0].isPrimary());
```
@return whether this is primary*/ isPrimary(): boolean;
    /**Sets the address of this field.

```
// Sets the address for the 'Home Address' field for contact 'John Doe'.
// Can be used similarly for other fields that contain addresses.
var contacts = ContactsApp.getContactsByName('John Doe');
var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
homeAddress[0].setAddress('123 Main St, Raleigh, NC, 27601');
```
@param address the new address
@return this field, useful for chaining*/ setAddress(
      address: string,
    ): ContactsApp.EmailField;
    /**Sets this field to primary.

```
// Sets the the first address field associated with contact 'John Doe'
// as primary. This method can be similarly called for any field.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
addressFields[0].setAsPrimary();
```
@return this FieldValue for chaining*/ setAsPrimary(): ContactsApp.EmailField;
    /**Sets the display name for this email address.

```
// Sets the display name to 'Doe, John' for the the work email address for contact 'John Doe'
var contacts = ContactsApp.getContactsByName('John Doe');
var workEmail = contacts[0].getEmails(ContactsApp.Field.WORK_EMAIL);
workEmail[0].setDisplayName('Doe, John');
```
@deprecated
@param name the new display name for this email address
@return this email field, useful for chaining*/ setDisplayName(
      name: string,
    ): ContactsApp.EmailField;
    /**Sets the label of this field.

```
// Sets the label to 'Work' for the first address field associated
// with contact 'John Doe'. This method can be similarly called for any
// field that has a label.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
addressFields[0].setLabel(ContactsApp.Field.WORK_ADDRESS);
```
@param field the new standard label
@return this FieldValue for chaining*/ setLabel(
      field: ContactsApp.Field,
    ): ContactsApp.EmailField;
    /**Sets the label of this field.

```
// Sets the label to 'Apartment' for the first address field associated
// with contact 'John Doe'. This method can be similarly called for any
// field that has a label.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
addressFields[0].setLabel('Apartment');
```
@param label the new label for this field
@return this field, useful for chaining*/ setLabel(
      label: string,
    ): ContactsApp.EmailField;
  }
  interface DateField {
    /**Deletes this date.

```
// Deletes all the dates that are set for contact 'John Doe'
var contacts = ContactsApp.getContactsByName('John Doe');
var dates = contacts[0].getDates();
for (var i = 0; i < dates.length; i++) {
  dates[i].deleteDateField();
}
```
@deprecated*/ deleteDateField(): void;
    /**Gets the day of the month for this date.

Note: For standard JavaScript Date objects the [
`getDay()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay) method returns the day of the week instead.

```
// Logs the day of the birthday for contact 'John Doe'
var contacts = ContactsApp.getContactsByName('John Doe');
var birthday = contacts[0].getDates(ContactsApp.Field.BIRTHDAY)[0];
Logger.log(birthday.getDay());
```
@deprecated
@return the day of the month*/ getDay(): Integer;
    /**Gets the label for this field. This may be a Field, ExtendedField, or a String.

```
// Logs the label for all the address fields associated with contact
// 'John Doe'. This method can be similarly called for any field that has
// a label.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
for (var i = 0; i < addressFields.length; i++) {
  Logger.log(addressFields[i].getLabel());
}
```
@return the label for this field*/ getLabel(): Object;
    /**Gets the month for this date.

```
// Logs the month of the birthday for contact 'John Doe'
var contacts = ContactsApp.getContactsByName('John Doe');
var birthday = contacts[0].getDates(ContactsApp.Field.BIRTHDAY)[0];
Logger.log(birthday.getMonth());
```
@deprecated
@return the month*/ getMonth(): Month;
    /**Gets the year for this date.

```
// Logs the year of the birthday for contact 'John Doe'
var contacts = ContactsApp.getContactsByName('John Doe');
var birthday = contacts[0].getDates(ContactsApp.Field.BIRTHDAY)[0];
Logger.log(birthday.getYear());
```
@deprecated
@return the year*/ getYear(): Integer;
    /**Sets the date to this day, without a year.

This method only applies to date fields that don't require a year, such as birthdays.

```
// Sets the birthday for contact 'John Doe' to April 1
var contacts = ContactsApp.getContactsByName('John Doe');
var birthday = contacts[0].getDates(ContactsApp.Field.BIRTHDAY)[0];
birthday.setDate(ContactsApp.Month.APRIL, 1);
```
@deprecated
@param month the month
@param day the day
@return this date, useful for chaining*/ setDate(
      month: Month,
      day: Integer,
    ): ContactsApp.DateField;
    /**Sets the date to this day.

```
// Sets the birthday for contact 'John Doe' to April 1, 1980
var contacts = ContactsApp.getContactsByName('John Doe');
var birthday = contacts[0].getDates(ContactsApp.Field.BIRTHDAY)[0];
birthday.setDate(ContactsApp.Month.APRIL, 1, 1980);
```
@deprecated
@param month the month
@param day the day
@param year the year
@return this date, useful for chaining*/ setDate(
      month: Month,
      day: Integer,
      year: Integer,
    ): ContactsApp.DateField;
    /**Sets the label of this field, such as 'Birthday' or 'Anniversary'.

```
// Retrieves the first date that's set for contact 'John Doe' and re-labels
// it as an anniversary
var contacts = ContactsApp.getContactsByName('John Doe');
var firstDate = contacts[0].getDates()[0];
firstDate.setLabel(ContactsApp.Field.ANNIVERSARY);
```
@deprecated
@param label the new standard label
@return this field, useful for chaining*/ setLabel(
      label: ContactsApp.Field,
    ): ContactsApp.DateField;
    /**Sets the label of this field.

```
// Sets the label to 'Apartment' for the first address field associated
// with contact 'John Doe'. This method can be similarly called for any
// field that has a label.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
addressFields[0].setLabel('Apartment');
```
@param label the new label for this field
@return this field, useful for chaining*/ setLabel(
      label: string,
    ): ContactsApp.DateField;
  }
  interface CustomField {
    /**Deletes this field.

```
var contacts = ContactsApp.getContactsByName('John Doe');
var fields = contacts[0].getCustomFields();
for (var i = 0; i < fields.length; i++) {
  if (fields[i].getLabel() == 'foo') {
    fields[i].deleteCustomField();
  }
}
```
@deprecated*/ deleteCustomField(): void;
    /**Gets the label for this field. This may be a Field, ExtendedField, or a String.

```
// Logs the label for all the address fields associated with contact
// 'John Doe'. This method can be similarly called for any field that has
// a label.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
for (var i = 0; i < addressFields.length; i++) {
  Logger.log(addressFields[i].getLabel());
}
```
@return the label for this field*/ getLabel(): Object;
    /**Gets the value of the field.

```
// Logs the value of all the custom fields for contact 'John Doe'
var contacts = ContactsApp.getContactsByName('John Doe');
var fields = contacts[0].getCustomFields();
for (var i in fields) {
  Logger.log(fields[i].getValue());
}
```
@deprecated
@return the value stored in the field*/ getValue(): Object;
    /**Sets the label of this field.

```
// Sets the first custom field associated with contact 'John Doe' to use 'Mail application' as
// a label, with 'Gmail' as the value.
var contacts = ContactsApp.getContactsByName('John Doe');
var field = contacts[0].getCustomFields()[0];
field.setLabel('Mail application');
field.setValue('Gmail');
```
@deprecated
@param field the new standard label
@return this field, useful for chaining*/ setLabel(
      field: ContactsApp.ExtendedField,
    ): ContactsApp.CustomField;
    /**Sets the label of this field.

```
// Sets the label to 'Apartment' for the first address field associated
// with contact 'John Doe'. This method can be similarly called for any
// field that has a label.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
addressFields[0].setLabel('Apartment');
```
@param label the new label for this field
@return this field, useful for chaining*/ setLabel(
      label: string,
    ): ContactsApp.CustomField;
    /**Sets the value of this field.

```
// Sets the first custom field associated with contact 'John Doe' to use 'Mail application' as
// a label, with 'Gmail' as the value.
var contacts = ContactsApp.getContactsByName('John Doe');
var field = contacts[0].getCustomFields()[0];
field.setLabel('Mail application');
field.setValue('Gmail');
```
@deprecated
@param value the new value
@return this field, useful for chaining*/ setValue(
      value: Object,
    ): ContactsApp.CustomField;
  }
  interface ContactGroup {
    /**Adds the given contact to this group

```
// The code below creates a new contact and adds it to the "Work Friends" contact group
var contact = ContactsApp.createContact('John', 'Doe', 'john.doe@example.com');
var group = ContactsApp.getContactGroup('Work Friends');
group.addContact(contact);
```
@deprecated
@param contact the contact to be added to the group
@return this contact group*/ addContact(
      contact: ContactsApp.Contact,
    ): ContactsApp.ContactGroup;
    /**Deletes this contact group.

Deletes non-system groups only; system groups cannot be deleted.

```
// The code below retrieves a contact group named "Work Friends" and deletes it
var group = ContactsApp.getContactGroup('Work Friends');
group.deleteGroup();
```
@deprecated*/ deleteGroup(): void;
    /**Gets all the contacts in this contact group.

```
// The code below retrieves all the contacts in the group named "Work Friends"
var group = ContactsApp.getContactGroup('Work Friends');
var contacts = group.getContacts();
```
@deprecated
@return the contacts in this group*/ getContacts(): ContactsApp.Contact[];
    /**Returns the name of this group.
@deprecated
@return the name of this group*/ getGroupName(): string;
    /**Gets the id of this contact group.

```
// The code below retrieves a contact group named "Work Friends" and gets its id
var group = ContactsApp.getContactGroup('Work Friends');
var id = group.getId();
```
@deprecated
@return the id of this group*/ getId(): string;
    /**Gets the name of this contact group.

```
// The code below creates a new contact group and then retrieves its name
var group = ContactsApp.createContactGroup('Work Friends');
var name = group.getName();
```
@deprecated
@return this name of this contact group*/ getName(): string;
    /**Gets a boolean value to determine whether this contact group is a system group (undeletable) or
not.

Systems groups are a set of groups that are predefined in Google Contacts, such as "My
Contacts", "Family", "Coworkers", etc. The name of a system group usually contains the words
"System Group".

```
// The code below retrieves two contact groups, then logs whether or not
// each is a system group.
var myGroup = ContactsApp.getContactGroup('Work Friends');
var systemGroup = ContactsApp.getContactGroup('System Group: Coworkers');
Logger.log(myGroup.isSystemGroup()); // Returns false, if the group exists.
Logger.log(systemGroup.isSystemGroup()); // Returns true.
```
@deprecated
@return whether or not this contact group is a system group*/ isSystemGroup(): boolean;
    /**Removes the given contact from this group

```
// The code below retrieves all the contacts named "John Doe' and removes them from the
// "Work Friends" contact group
var contacts = ContactsApp.getContactsByName('John Doe');
var group = ContactsApp.getContactGroup('Work Friends');
for (var i in contacts) {
  group.removeContact(contacts[i]);
}
```
@deprecated
@param contact the contact to be removed from the group
@return this contact group*/ removeContact(
      contact: ContactsApp.Contact,
    ): ContactsApp.ContactGroup;
    /**Sets the name of this group.
@deprecated
@param name the name to set for this group*/ setGroupName(name: string): void;
    /**Sets the name of this contact group.

```
// The code below retrieves the contact group named "Work Friends" and renames it to
// "Work Buddies"
var group = ContactsApp.getContactGroup('Work Friends');
group.setName('Work Buddies');
```
@deprecated
@param name the new name for the contact group
@return this contact group*/ setName(name: string): ContactsApp.ContactGroup;
  }
  interface Contact {
    /**Adds an address to the contact with either a standard or custom label.

The label can be either from ContactsApp.Field or a custom label string.

```
// The code below retrieves a contact named "John Doe" and adds the address
// "123 Main St, Some City, NY 10011" with the the ContactsApp.Field.WORK_ADDRESS label.
var contacts = ContactsApp.getContactsByName('John Doe');
var address = contacts[0].addAddress(ContactsApp.Field.WORK_ADDRESS,
                                    '123 Main St, Some City, NY 10011');
```
@deprecated
@param label the label of the new address, either from ContactsApp.Field or a custom string
@param address the new address
@return the newly created field*/ addAddress(
      label: Object,
      address: string,
    ): ContactsApp.AddressField;
    /**Adds a company to the contact.

```
// The code below retrieves a contact named "John Doe" and adds the company "Google" and the
// job title "Product Manager".
var contacts = ContactsApp.getContactsByName('John Doe');
var url = contacts[0].addCompany('Google', 'Product Manager');
```
@deprecated
@param company the name of the company to add to this contact
@param title the job title associated with this contact for this company
@return the newly created field*/ addCompany(
      company: string,
      title: string,
    ): ContactsApp.CompanyField;
    /**Adds a custom field to the contact with either an extended or custom label.

The label can be either from ContactsApp.ExtendedField or a custom label string.

```
// The code below retrieves a contact named "John Doe" and adds the custom field
// ContactsApp.ExtendedField.HOBBY with the value "hiking".
// Note that ContactsApp.ExtendedField.HOBBY is not the same as a custom field named 'HOBBY'.
var contacts = ContactsApp.getContactsByName('John Doe');
contacts[0].addCustomField(ContactsApp.ExtendedField.HOBBY, 'hiking');
```
@deprecated
@param label the label of the new address, either from ContactsApp.ExtendedField or a custom
    string
@param content the value to store in the custom field
@return the newly created field*/ addCustomField(
      label: Object,
      content: Object,
    ): ContactsApp.CustomField;
    /**Adds a date to the contact with either an standard or custom label.

The label can be either from ContactsApp.Field or a custom label string.

```
// The code below retrieves a contact named "John Doe" and adds a
// ContactsApp.ExtendedField.BIRTHDAY with the value "April 19, 1950".
var contacts = ContactsApp.getContactsByName('John Doe');
var birthday = contacts[0].addDate(ContactsApp.Field.BIRTHDAY,
                                   ContactsApp.Month.APRIL, 19, 1950);
```
@deprecated
@param label the label of the new date, either from ContactsApp.Field or a custom string
@param month the month, from ContactApps.Month
@param day the day
@param year the year
@return the newly created date*/ addDate(
      label: Object,
      month: Month,
      day: Integer,
      year: Integer,
    ): ContactsApp.DateField;
    /**Add an email address with a standard label (home, work, etc.) or a custom label

```
// The code below retrieves a contact named "John Doe" and adds the email address
// "j.doe@example.com" to the ContactsApp.Field.HOME_EMAIL label.
var contacts = ContactsApp.getContactsByName('John Doe');
var emailField = contacts[0].addEmail(ContactsApp.Field.HOME_EMAIL, 'j.doe@example.com');
```
@deprecated
@param label the label of the new email, either from ContactsApp.Field or a custom string
@param address the new email address
@return the newly added field*/ addEmail(
      label: Object,
      address: string,
    ): ContactsApp.EmailField;
    /**Adds an IM address to the contact with either a standard or custom label.

The label can be either from ContactsApp.Field or a custom label string.

```
// The code below retrieves a contact named "John Doe" and adds the IM address "ChatWithJohn"
// with the the ContactsApp.Field.AIM label.
var contacts = ContactsApp.getContactsByName('John Doe');
var email = contacts[0].addIM(ContactsApp.Field.AIM, 'ChatWithJohn');
```
@deprecated
@param label the label of the new IM address, either from ContactsApp.Field or a custom string
@param address the new IM address
@return the newly created field*/ addIM(
      label: Object,
      address: string,
    ): ContactsApp.IMField;
    /**Adds a phone number to the contact with either a standard or custom label.

The label can be either from ContactsApp.Field or a custom label string.

```
// The code below retrieves a contact named "John Doe" and adds the phone number
// "212-555-1234" with the the ContactsApp.Field.WORK_PHONE label.
var contacts = ContactsApp.getContactsByName('John Doe');
var phone = contacts[0].addPhone(ContactsApp.Field.WORK_PHONE, '212-555-1234');
```
@deprecated
@param label the label of the new phone number, either from ContactsApp.Field or a custom
    string
@param number the new phone number
@return the newly created field*/ addPhone(
      label: Object,
      number: string,
    ): ContactsApp.PhoneField;
    /**Adds this contact to the given contact group.

```
// The code below creates a new contact and then adds it to the contact group named
// "Work Friends"
var contact = ContactsApp.createContact('John', 'Doe', 'john.doe@example.com');
var group = ContactsApp.getContactGroup('Work Friends');
contact = contact.addToGroup(group);
```
@deprecated
@param group the contact group to add this contact to
@return this contact*/ addToGroup(
      group: ContactsApp.ContactGroup,
    ): ContactsApp.Contact;
    /**Adds a URL to the contact with either a standard or custom label.

The label can be either from ContactsApp.Field or a custom label string.

```
// The code below retrieves a contact named "John Doe" and adds the URL
// "http://www.example.com" with the the ContactsApp.Field.WORK_WEBSITE label.
var contacts = ContactsApp.getContactsByName('John Doe');
var url = contacts[0].addUrl(ContactsApp.Field.WORK_WEBSITE, 'http://www.example.com');
```
@deprecated
@param label the label of the new address, either from ContactsApp.Field or a custom string
@param url the new URL
@return the newly created field*/ addUrl(
      label: Object,
      url: string,
    ): ContactsApp.UrlField;
    /**Deletes this contact.

```
var contacts = ContactsApp.getContactsByName('John Doe');
for (var i in contacts) {
  contacts[i].deleteContact();
}
```
@deprecated*/ deleteContact(): void;
    /**Gets all the addresses for this contact.

```
// The code below logs the addresses of all the contacts whose names contain "John Doe"
var contacts = ContactsApp.getContactsByName('John Doe');
for (var i in contacts) {
  Logger.log(contacts[i].getAddresses());
}
```
@deprecated
@return a list of addresses*/ getAddresses(): ContactsApp.AddressField[];
    /**Gets all the addresses for this contact matching a particular field.

The label can be either from ContactsApp.Field or a custom label string.

```
// The code below retrieves a contact named "John Doe" and logs the addresses
// associated with that contact that are in the ContactsApp.Field.WORK_ADDRESS label.
var contacts = ContactsApp.getContactsByName('John Doe');
var addresses = contacts[0].getAddresses(ContactsApp.Field.WORK_ADDRESS);
for (var i in addresses) {
  Logger.log(addresses[i].getAddress());
}
```
@deprecated
@param label the label to match, either from ContactsApp.Field or a custom string
@return a list of addresses*/ getAddresses(
      label: Object,
    ): ContactsApp.AddressField[];
    /**Gets all the companies for this contact.

```
// The code below logs the company names of all the contacts whose names contain "John Doe"
var contacts = ContactsApp.getContactsByName('John Doe');
for (var i in contacts) {
  var companies = contacts[i].getCompanies();
  for (var j in companies) {
    Logger.log(companies[j].getCompanyName());
  }
}
```
@deprecated
@return a list of companies*/ getCompanies(): ContactsApp.CompanyField[];
    /**Gets all the contact groups that contain this contact.

```
// The code below gets a contact named "John Doe" and retrieves all the contact groups that
// the contact belongs to
var contacts = ContactsApp.getContactsByName('John Doe');
var groups = contacts[0].getContactGroups();
```
@deprecated
@return the groups containing this contact*/ getContactGroups(): ContactsApp.ContactGroup[];
    /**Gets all the custom fields for this contact.

```
// The code below retrieves a contact named "John Doe" and logs the custom fields
// associated with that contact
var contacts = ContactsApp.getContactsByName('John Doe');
var fields = contacts[0].getCustomFields();
for (var i in fields) {
  Logger.log(fields[i].getValue());
}
```
@deprecated
@return a list of custom fields*/ getCustomFields(): ContactsApp.CustomField[];
    /**Gets all the custom fields for this contact matching a particular field.

The label can be either a standard label from ContactsApp.ExtendedField or a custom label
string.

```
// The code below retrieves a contact named "John Doe" and logs the custom fields
// associated with that contact that are in the ContactsApp.ExtendedField.HOBBY label.
var contacts = ContactsApp.getContactsByName('John Doe');
var hobbies = contacts[0].getCustomFields(ContactsApp.ExtendedField.HOBBY);
for (var i in hobbies) {
  Logger.log(hobbies[i].getValue());
}
```
@deprecated
@param label the label to match, either from ContactsApp.ExtendedField or a custom string
@return a list of custom fields*/ getCustomFields(
      label: Object,
    ): ContactsApp.CustomField[];
    /**Gets all the dates for this contact.

```
// The code below retrieves a contact named "John Doe" and logs the label of the date
// associated with that contact
var contacts = ContactsApp.getContactsByName('John Doe');
var dates = contacts[0].getDates();
for (var i in dates) {
  Logger.log(dates[i].getLabel());
}
```
@deprecated
@return a list of dates*/ getDates(): ContactsApp.DateField[];
    /**Gets all the dates for this contact matching a particular field.

The label can be either a standard label from ContactsApp.Field or a custom label string.

```
// The code below retrieves a contact named "John Doe" and logs the day of the month
// associated with that contact that are in the ContactsApp.Field.BIRTHDAY label.
var contacts = ContactsApp.getContactsByName('John Doe');
var birthdays = contacts[0].getDates(ContactsApp.Field.BIRTHDAY);
for (var i in birthdays) {
  Logger.log(birthdays[i].getDay());
}
```
@deprecated
@param label the label to match, either from ContactsApp.Field or a custom string
@return a list of dates*/ getDates(label: Object): ContactsApp.DateField[];
    /**Gets a list of the email addresses available for this Contact.
@deprecated
@return a list of email addresses available for this Contact*/ getEmailAddresses(): string[];
    /**Gets the email addresses of this contact.

```
// The code below retrieves a contact named "John Doe" and logs the email addresses
// associated with that contact
var contacts = ContactsApp.getContactsByName('John Doe');
var emails = contacts[0].getEmails();
for (var i in emails) {
  Logger.log(emails[i].getAddress());
}
```
@deprecated
@return the list of email addresses for the the contact*/ getEmails(): ContactsApp.EmailField[];
    /**Gets the email addresses for this contact matching a particular field.

The label can be either a standard label from ContactsApp.Field or a custom label string.

```
// The code below retrieves a contact named "John Doe" and logs the email addresses
// associated with that contact that are in the ContactsApp.Field.HOME_EMAIL label.
var contacts = ContactsApp.getContactsByName('John Doe');
var emails = contacts[0].getEmails(ContactsApp.Field.HOME_EMAIL);
for (var i in emails) {
  Logger.log(emails[i].getAddress());
}
```
@deprecated
@param label the label to match, either from ContactsApp.Field or a custom string
@return the list of email addresses for the the contact*/ getEmails(
      label: Object,
    ): ContactsApp.EmailField[];
    /**Gets the family name (last name) of the contact as a string.

```
// The code below logs the family name of all the contacts whose names contain "John"
var contacts = ContactsApp.getContactsByName('John');
for (var i in contacts) {
  Logger.log(contacts[i].getFamilyName());
}
```
@deprecated
@return the family name of the contact*/ getFamilyName(): string;
    /**Gets the full name (given name and last name) of the contact as a string.

```
// The code below logs the full name of all the contacts whose names contain "John"
var contacts = ContactsApp.getContactsByName('John');
for (var i in contacts) {
  Logger.log(contacts[i].getFullName());
}
```
@deprecated
@return the full name of the contact*/ getFullName(): string;
    /**Gets the given name (first name) of the contact as a string.

```
// The code below logs the given name of all the contacts whose names contain "Smith"
var contacts = ContactsApp.getContactsByName('Smith');
for (var i in contacts) {
  Logger.log(contacts[i].getGivenName());
}
```
@deprecated
@return the given name of the contact*/ getGivenName(): string;
    /**Gets the home address of this Contact, or empty string if none exists.
@deprecated
@return the home address of this Contact, or empty string if none exists*/ getHomeAddress(): string;
    /**Gets the home fax number of this Contact or empty string if none exists.
@deprecated
@return the home fax number of this Contact or empty string if none exists*/ getHomeFax(): string;
    /**Gets the home phone number of this Contact or empty string if none exists.
@deprecated
@return the home phone number of this Contact or empty string if none exists*/ getHomePhone(): string;
    /**Gets all the IM addresses for this contact.

```
// The code below logs the IM addresses of all the contacts whose names contain "John Doe"
var contacts = ContactsApp.getContactsByName('John Doe');
for (var i in contacts) {
  Logger.log(contacts[i].getIMs());
}
```
@deprecated
@return a list of IM addresses*/ getIMs(): ContactsApp.IMField[];
    /**Gets all the IM addresses for this contact matching a particular field.

The label can be either from ContactsApp.Field or a custom label string.

```
// The code below retrieves a contact named "John Doe" and logs the IM addresses
// associated with that contact that are in the ContactsApp.Field.GOOGLE_TALK label.
var contacts = ContactsApp.getContactsByName('John Doe');
var imAddresses = contacts[0].getIMs(ContactsApp.Field.GOOGLE_TALK);
for (var i in imAddresses) {
  Logger.log(imAddresses[i].getAddress());
}
```
@deprecated
@param label the label to match, either from ContactsApp.Field or a custom string
@return a list of IM addresses*/ getIMs(label: Object): ContactsApp.IMField[];
    /**Returns the unique id of this contact.

```
var contact = ContactsApp.createContact('John', 'Doe', 'john.doe@example.com');
var id = contact.getId();
```
@deprecated
@return the id of this contact*/ getId(): string;
    /**Gets the contact's initials.

```
// The code below logs the initials of all the contacts whose names contain "John Doe"
var contacts = ContactsApp.getContactsByName('John Doe');
for (var i in contacts) {
  Logger.log(contacts[i].getInitials());
}
```
@deprecated
@return the initials of the contact*/ getInitials(): string;
    /**Gets the date this contact was last updated.

```
// The code below logs the last updated date of all the contacts whose names contain
// "John Doe"
var contacts = ContactsApp.getContactsByName('John Doe');
for (var i in contacts) {
  Logger.log(contacts[i].getLastUpdated());
}
```
@deprecated
@return the date this contact was last updated*/ getLastUpdated(): Date;
    /**Gets the maiden name of the contact as a string.

```
// The code below logs the maiden name of all the contacts whose names contain "Jane"
var contacts = ContactsApp.getContactsByName('Jane');
for (var i in contacts) {
  Logger.log(contacts[i].getMaidenName());
}
```
@deprecated
@return the maiden name of the contact*/ getMaidenName(): string;
    /**Gets the middle name of the contact as a string.

```
// The code below logs the middle name of all the contacts whose names contain "Smith"
var contacts = ContactsApp.getContactsByName('Smith');
for (var i in contacts) {
  Logger.log(contacts[i].getMiddleName());
}
```
@deprecated
@return the middle name of the contact*/ getMiddleName(): string;
    /**Gets the mobile phone number of this Contact or empty string if none exists.
@deprecated
@return the mobile phone number of this Contact or empty string if none exists*/ getMobilePhone(): string;
    /**Gets the nickname of the contact as a string.

```
// The code below logs the nickname of all the contacts whose names contain "John Doe"
var contacts = ContactsApp.getContactsByName('John Doe');
for (var i in contacts) {
  Logger.log(contacts[i].getNickname());
}
```
@deprecated
@return the nickname of the contact*/ getNickname(): string;
    /**Gets the notes associated with this contact, or an empty string if there are no notes.

```
// The code below logs the notes of all the contacts whose names contain "John Doe"
var contacts = ContactsApp.getContactsByName('John Doe');
for (var i in contacts) {
  Logger.log(contacts[i].getNotes());
}
```
@deprecated
@return the notes associated with this contact*/ getNotes(): string;
    /**Gets the pager phone number of this Contact or empty string if none exists.
@deprecated
@return the pager phone number of this Contact or empty string if none exists*/ getPager(): string;
    /**Gets all the phone numbers for this contact.

```
// The code below logs the phone numbers of all the contacts whose names contain "John Doe"
var contacts = ContactsApp.getContactsByName('John Doe');
for (var i in contacts) {
  Logger.log(contacts[i].getPhones());
}
```
@deprecated
@return a list of phone numbers*/ getPhones(): ContactsApp.PhoneField[];
    /**Gets all the phone numbers for this contact matching a particular field.

The label can be either from ContactsApp.Field or a custom label string.

```
// The code below retrieves a contact named "John Doe" and logs the phone numbers
// associated with that contact that are in the ContactsApp.Field.WORK_PHONE label.
var contacts = ContactsApp.getContactsByName('John Doe');
var phones = contacts[0].getPhones(ContactsApp.Field.WORK_PHONE);
for (var i in phones) {
  Logger.log(phones[i].getPhoneNumber());
}
```
@deprecated
@param label the label to match, either from ContactsApp.Field or a custom string
@return a list of phone numbers*/ getPhones(
      label: Object,
    ): ContactsApp.PhoneField[];
    /**Gets the prefix to the contact's name.

```
// The code below logs the prefix of all the contacts whose names contain "John Doe"
var contacts = ContactsApp.getContactsByName('John Doe');
for (var i in contacts) {
  Logger.log(contacts[i].getPrefix());
}
```
@deprecated
@return the prefix of the contact's name*/ getPrefix(): string;
    /**Gets the primary email address of the contact as a string.

```
// The code below logs the primary email address of all the contacts whose names contain
// "John Doe"
var contacts = ContactsApp.getContactsByName('John Doe');
for (var i in contacts) {
  Logger.log(contacts[i].getPrimaryEmail());
}
```
@deprecated
@return the primary email address of the contact*/ getPrimaryEmail(): string;
    /**Gets the short name of the contact as a string.

```
// The code below logs the short name of all the contacts whose names contain "Johnathan"
var contacts = ContactsApp.getContactsByName('Johnathan');
for (var i in contacts) {
  Logger.log(contacts[i].getShortName());
}
```
@deprecated
@return the short name of the contact*/ getShortName(): string;
    /**Gets the suffix to the contact's name.

```
// The code below logs the suffix of all the contacts whose names contain "John Doe"
var contacts = ContactsApp.getContactsByName('John Doe');
for (var i in contacts) {
  Logger.log(contacts[i].getSuffix());
}
```
@deprecated
@return the suffix of the contact's name*/ getSuffix(): string;
    /**Gets all the URLs for this contact.

```
// The code below logs the URLs of all the contacts whose names contain "John Doe"
var contacts = ContactsApp.getContactsByName('John Doe');
for (var i in contacts) {
  Logger.log(contacts[i].getUrls());
}
```
@deprecated
@return a list of URLs*/ getUrls(): ContactsApp.UrlField[];
    /**Gets all the URLs for this contact matching a particular field.

The label can be either from ContactsApp.Field or a custom label string.

```
// The code below retrieves a contact named "John Doe" and logs the URLs
// associated with that contact that are in the ContactsApp.Field.WORK_WEBSITE label.
var contacts = ContactsApp.getContactsByName('John Doe');
var urls = contacts[0].getUrls(ContactsApp.Field.WORK_WEBSITE);
for (var i in urls) {
  Logger.log(urls[i].getAddress());
}
```
@deprecated
@param label the label to match, either from ContactsApp.Field or a custom string
@return a list of URLs*/ getUrls(label: Object): ContactsApp.UrlField[];
    /**Gets the user defined value associated with the given key.
@deprecated
@param key the key can be any basic type (String, int, etc.)
@return the user defined content that has been stored with this key*/ getUserDefinedField(
      key: string,
    ): string;
    /**Gets all the user defined fields for this Contact and returns them as the properties of a
JavaScript Object.
@deprecated
@return the user defined fields for this Contact, as properties of a JavaScript Object*/ getUserDefinedFields(): Object;
    /**Gets the work address of this Contact, or empty string if none exists.
@deprecated
@return the work address of this Contact, or empty string if none exists*/ getWorkAddress(): string;
    /**Gets the work fax number of this Contact or empty string if none exists.
@deprecated
@return the work fax number of this Contact or empty string if none exists*/ getWorkFax(): string;
    /**Gets the work phone number of this Contact or empty string if none exists.
@deprecated
@return the work phone number of this Contact or empty string if none exists*/ getWorkPhone(): string;
    /**Removes this contact from the given contact group.

```
// The code below gets all the contacts named "John Doe" and then removes each of them from
// the "Work Friends" contact group
var contacts = ContactsApp.getContactsByName('John Doe');
var group = ContactsApp.getContactGroup('Work Friends');
for (var i in contacts) {
  contacts[i] = contacts[i].removeFromGroup(group);
}
```
@deprecated
@param group the contact group to remove this contact from
@return this contact*/ removeFromGroup(
      group: ContactsApp.ContactGroup,
    ): ContactsApp.Contact;
    /**Sets the family name (last name) of the contact.

```
// The code below changes the family name of all the contacts whose names are "John Doe"
// to "Doe-Smith"
var contacts = ContactsApp.getContactsByName('John Doe');
for (var i in contacts) {
  contacts[i].setFamilyName('Doe-Smith');
}
```
@deprecated
@param familyName the new family name of the contact
@return this contact*/ setFamilyName(familyName: string): ContactsApp.Contact;
    /**Sets the full name (given name and last name) of the contact.

```
// The code below changes the full name of all the contacts whose names are "John Doe"
// to "Johnny Doe"
var contacts = ContactsApp.getContactsByName('John Doe');
for (var i in contacts) {
  contacts[i].setFullName('Johnny Doe');
}
```
@deprecated
@param fullName the new full name of the contact
@return this contact*/ setFullName(fullName: string): ContactsApp.Contact;
    /**Sets the given name (first name) of the contact.

```
// The code below changes the given name of all the contacts whose names are "John Doe"
// to "Johnny"
var contacts = ContactsApp.getContactsByName('John Doe');
for (var i in contacts) {
  contacts[i].setGivenName('Johnny');
}
```
@deprecated
@param givenName the new given name of the contact
@return this contact*/ setGivenName(givenName: string): ContactsApp.Contact;
    /**Sets the home address of this Contact.
@deprecated
@param addr the home address to set*/ setHomeAddress(addr: string): void;
    /**Sets the home fax number of this Contact.
@deprecated
@param phone the home fax number to set*/ setHomeFax(phone: string): void;
    /**Sets the home phone number of this Contact.
@deprecated
@param phone the home phone number to set*/ setHomePhone(phone: string): void;
    /**Sets the contact's initials.

```
// The code below sets the initials of all the contacts whose names are "Johnathan Doe"
// to "JD"
var contacts = ContactsApp.getContactsByName('Johnathan Doe');
for (var i in contacts) {
  contacts[i].setInitials('JD');
}
```
@deprecated
@param initials the new initials of the contact
@return this contact*/ setInitials(initials: string): ContactsApp.Contact;
    /**Sets the maiden name of the contact.

```
// The code below changes the maiden name of all the contacts whose names are "Jane Doe"
// to "Smith"
var contacts = ContactsApp.getContactsByName('Jane Doe');
for (var i in contacts) {
  contacts[i].setMaidenName('Smith');
}
```
@deprecated
@param maidenName the new maiden name of the contact
@return this contact*/ setMaidenName(maidenName: string): ContactsApp.Contact;
    /**Sets the middle name of the contact.

```
// The code below changes the middle name of all the contacts whose names are "John Doe"
// to "Danger"
var contacts = ContactsApp.getContactsByName('John Doe');
for (var i in contacts) {
  contacts[i].setMiddleName('Danger');
}
```
@deprecated
@param middleName the new middle name of the contact
@return this contact*/ setMiddleName(middleName: string): ContactsApp.Contact;
    /**Sets the mobile phone number of this Contact.
@deprecated
@param phone the mobile phone number to set*/ setMobilePhone(
      phone: string,
    ): void;
    /**Sets the nickname of the contact.

```
// The code below changes the nickname of all the contacts whose names are "John Doe"
// to "JohnnyD"
var contacts = ContactsApp.getContactsByName('John Doe');
for (var i in contacts) {
  contacts[i].setNickname('JohnnyD');
}
```
@deprecated
@param nickname the new nickname of the contact
@return this contact*/ setNickname(nickname: string): ContactsApp.Contact;
    /**Sets the notes associated with this contact.

```
// The code below sets the notes of all the contacts whose names are "John Doe"
// to "Met him at the hackathon"
var contacts = ContactsApp.getContactsByName('John Doe');
for (var i in contacts) {
  contacts[i].setNotes('Met him at the hackathon');
}
```
@deprecated
@param notes the notes to be stored for this contact
@return this contact*/ setNotes(notes: string): ContactsApp.Contact;
    /**Sets the pager number of this Contact.
@deprecated
@param phone the pager number to set*/ setPager(phone: string): void;
    /**Sets the prefix to the contact's name.

```
// The code below sets the prefix of all the contacts whose names are "Johnathan Doe"
// to "Mr"
var contacts = ContactsApp.getContactsByName('Johnathan Doe');
for (var i in contacts) {
  contacts[i].setPrefix('Mr');
}
```
@deprecated
@param prefix the new prefix of the contact's name
@return this contact*/ setPrefix(prefix: string): ContactsApp.Contact;
    /**Sets the primary email address of this Contact.
@deprecated
@param primaryEmail the primary email address to set*/ setPrimaryEmail(
      primaryEmail: string,
    ): void;
    /**Sets the short name of the contact.

```
// The code below changes the short name of all the contacts whose names are "Johnathan Doe"
// to "John"
var contacts = ContactsApp.getContactsByName('Johnathan Doe');
for (var i in contacts) {
  contacts[i].setShortName('John');
}
```
@deprecated
@param shortName the new short name of the contact
@return this contact*/ setShortName(shortName: string): ContactsApp.Contact;
    /**Sets the suffix to the contact's name.

```
// The code below sets the suffix of all the contacts whose names are "Johnathan Doe"
// to "Jr"
var contacts = ContactsApp.getContactsByName('Johnathan Doe');
for (var i in contacts) {
  contacts[i].setSuffix('Jr');
}
```
@deprecated
@param suffix the new suffix of the contact's name
@return this contact*/ setSuffix(suffix: string): ContactsApp.Contact;
    /**Sets a single user defined field for this Contact, to be stored with a given key.
@deprecated
@param key the key can be any basic type (String, int, etc.)
@param value the value can be any basic type (String, int, etc.)*/ setUserDefinedField(
      key: string,
      value: string,
    ): void;
    /**Sets the user defined fields for this Contact with the properties of the given Object.
@deprecated
@param o an Object with one or more properties in the form {key: value}*/ setUserDefinedFields(
      o: Object,
    ): void;
    /**Sets the work address of this Contact.
@deprecated
@param addr the work address to set*/ setWorkAddress(addr: string): void;
    /**Sets the work fax number of this Contact.
@deprecated
@param phone the work fax number to set*/ setWorkFax(phone: string): void;
    /**Sets the work phone number of this Contact.
@deprecated
@param phone the work phone number to set*/ setWorkPhone(phone: string): void;
  }
  interface CompanyField {
    /**Deletes this company field.

```
// Deletes the first company associated with contact 'John Doe'
var contacts = ContactsApp.getContactsByName('John Doe');
var company = contacts[0].getCompanies()[0];
company.deleteCompanyField();
```
@deprecated*/ deleteCompanyField(): void;
    /**Gets the company name.

```
// Logs company name for all companies associated with contact 'John Doe'
var contacts = ContactsApp.getContactsByName('John Doe');
var companies = contacts[0].getCompanies();
for (var i in companies) {
  Logger.log(companies[i].getCompanyName());
}
```
@deprecated
@return the name of the company*/ getCompanyName(): string;
    /**Gets the job title.

```
// Logs job title for all companies associated with contact 'John Doe'
var contacts = ContactsApp.getContactsByName('John Doe');
var companies = contacts[0].getCompanies();
for (var i in companies) {
  Logger.log(companies[i].getJobTitle());
}
```
@deprecated
@return the job title*/ getJobTitle(): string;
    /**Gets whether this is the primary company.

```
// Logs true or false depending on whether each company is the primary
// company for contact 'John Doe'
var contacts = ContactsApp.getContactsByName('John Doe');
var companies = contacts[0].getCompanies();
for (var i in companies) {
  Logger.log(companies[i].isPrimary());
}
```
@deprecated
@return whether this is primary*/ isPrimary(): boolean;
    /**Sets this company as the primary company, and unsets whatever company was previously primary.

```
// Sets the first company associated with contact 'John Doe' as primary
var contacts = ContactsApp.getContactsByName('John Doe');
var company = contacts[0].getCompanies()[0];
company.setAsPrimary();
```
@deprecated
@return this company field, useful for chaining*/ setAsPrimary(): ContactsApp.CompanyField;
    /**Sets the company name.

```
// Sets the company name for the first company associated with contact 'John Doe'
var contacts = ContactsApp.getContactsByName('John Doe');
var company = contacts[0].getCompanies()[0];
company.setCompanyName('ACME Corp');
```
@deprecated
@param company the new name for the company
@return this company field, useful for chaining*/ setCompanyName(
      company: string,
    ): ContactsApp.CompanyField;
    /**Sets the job title.

```
// Sets the job title for the first company associated with contact 'John Doe'
var contacts = ContactsApp.getContactsByName('John Doe');
var company = contacts[0].getCompanies()[0];
company.setJobTitle('Manager');
```
@deprecated
@param title the new job title for the contact at this company
@return this company field, useful for chaining*/ setJobTitle(
      title: string,
    ): ContactsApp.CompanyField;
  }
  interface AddressField {
    /**Deletes this address field.

```
// The code below deletes the home addresses for a contact named "John Doe"
var contacts = ContactsApp.getContactsByName('John Doe');
var homeAddresses = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
for (var i in homeAddresses) {
  homeAddresses[i].deleteAddressField();
}
```
@deprecated*/ deleteAddressField(): void;
    /**Get the address for this field.

```
// Logs the address for the 'Home Address' field for contact 'John Doe'.
// Can be used similarly for other fields that contain addresses.
var contacts = ContactsApp.getContactsByName('John Doe');
var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
Logger.log(homeAddress[0].getAddress());
```
@return the address as a string*/ getAddress(): string;
    /**Gets the label for this field. This may be a Field, ExtendedField, or a String.

```
// Logs the label for all the address fields associated with contact
// 'John Doe'. This method can be similarly called for any field that has
// a label.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
for (var i = 0; i < addressFields.length; i++) {
  Logger.log(addressFields[i].getLabel());
}
```
@return the label for this field*/ getLabel(): Object;
    /**Gets whether this is the primary field value.

```
// Logs whether or not the first address field associated with contact
// 'John Doe' is labeled as primary. This method can be similarly called
// for any field.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
Logger.log(addressFields[0].isPrimary());
```
@return whether this is primary*/ isPrimary(): boolean;
    /**Sets the address of this field.

```
// Sets the address for the 'Home Address' field for contact 'John Doe'.
// Can be used similarly for other fields that contain addresses.
var contacts = ContactsApp.getContactsByName('John Doe');
var homeAddress = contacts[0].getAddresses(ContactsApp.Field.HOME_ADDRESS);
homeAddress[0].setAddress('123 Main St, Raleigh, NC, 27601');
```
@param address the new address
@return this field, useful for chaining*/ setAddress(
      address: string,
    ): ContactsApp.AddressField;
    /**Sets this field to primary.

```
// Sets the the first address field associated with contact 'John Doe'
// as primary. This method can be similarly called for any field.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
addressFields[0].setAsPrimary();
```
@return this FieldValue for chaining*/ setAsPrimary(): ContactsApp.AddressField;
    /**Sets the label of this field.

```
// Sets the label to 'Work' for the first address field associated
// with contact 'John Doe'. This method can be similarly called for any
// field that has a label.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
addressFields[0].setLabel(ContactsApp.Field.WORK_ADDRESS);
```
@param field the new standard label
@return this FieldValue for chaining*/ setLabel(
      field: ContactsApp.Field,
    ): ContactsApp.AddressField;
    /**Sets the label of this field.

```
// Sets the label to 'Apartment' for the first address field associated
// with contact 'John Doe'. This method can be similarly called for any
// field that has a label.
var contacts = ContactsApp.getContactsByName('John Doe');
var addressFields = contacts[0].getAddresses();
addressFields[0].setLabel('Apartment');
```
@param label the new label for this field
@return this field, useful for chaining*/ setLabel(
      label: string,
    ): ContactsApp.AddressField;
  }
}
const ContactsApp: ContactsApp;
