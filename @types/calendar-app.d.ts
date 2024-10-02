interface CalendarApp{
/**An enum representing the named colors available in the Calendar service.*/Color:CalendarApp._Color;
/**An enum representing the named event colors available in the Calendar service.*/EventColor:CalendarApp._EventColor;
/**An enum representing the statuses a guest can have for an event.*/GuestStatus:CalendarApp._GuestStatus;
/**An enum representing the months of the year.*/Month:_Month;
/**An enum representing the visibility of an event.*/Visibility:CalendarApp._Visibility;
/**An enum representing the days of the week.*/Weekday:_Weekday;
/**Creates a new all-day event.

```
// Creates an all-day event for the moon landing and logs the ID.
var event = CalendarApp.getDefaultCalendar().createAllDayEvent('Apollo 11 Landing ',
    new Date('July 20,1969 '));
Logger.log('Event ID: ' + event.getId());
```
@param title The title of the event.
@param date The date of the event (only the day is used; the time is ignored).
@return The created event.*/createAllDayEvent(title:string,date:Date):CalendarApp.CalendarEvent;
/**Creates a new all-day event that can span multiple days.

```
// Creates an all-day event for the Woodstock festival (August 15th to 17th) and logs the ID.
var event = CalendarApp.getDefaultCalendar().createAllDayEvent('Woodstock Festival ',
    new Date('August 15,1969 '),
    new Date('August 18,1969 '));
Logger.log('Event ID: ' + event.getId());
```
@param title The title of the event.
@param startDate The date when the event starts (only the day is used; the time is ignored).
@param endDate The date when the event ends (only the day is used; the time is ignored). The
    end date is exclusive.
@return The created event.*/createAllDayEvent(title:string,startDate:Date,endDate:Date):CalendarApp.CalendarEvent;
/**Creates a new all-day event that can span multiple days.

```
// Creates an all-day event for the Woodstock festival (August 15th to 17th) and logs the ID.
var event = CalendarApp.getDefaultCalendar().createAllDayEvent('Woodstock Festival ',
    new Date('August 15,1969 '),
    new Date('August 18,1969 '),
    {location: 'Bethel,White Lake,New York,U.S.', sendInvites: true});
Logger.log('Event ID: ' + event.getId());
```
@param title The title of the event.
@param startDate The date when the event starts (only the day is used; the time is ignored).
@param endDate The date when the event ends (only the day is used; the time is ignored). The
    end date is exclusive.
@param options A JavaScript object that specifies advanced parameters, as listed below.
@return The created event.*/createAllDayEvent(title:string,startDate:Date,endDate:Date,options:Object):CalendarApp.CalendarEvent;
/**Creates a new all-day event.

```
// Creates an all-day event for the moon landing and logs the ID.
var event = CalendarApp.getDefaultCalendar().createAllDayEvent('Apollo 11 Landing ',
    new Date('July 20,1969 '),
    {location: 'The Moon '});
Logger.log('Event ID: ' + event.getId());
```
@param title The title of the event.
@param date The date of the event (only the day is used; the time is ignored).
@param options A JavaScript object that specifies advanced parameters, as listed below.
@return The created event.*/createAllDayEvent(title:string,date:Date,options:Object):CalendarApp.CalendarEvent;
/**Creates a new all-day event series.

```
// Creates an event series for a no-meetings day, taking place every Wednesday in 2013.
var eventSeries = CalendarApp.getDefaultCalendar().createAllDayEventSeries('No Meetings ',
    new Date('January 2,2013 03: 00: 00 PM EST '),
    CalendarApp.newRecurrence().addWeeklyRule()
        .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
        .until(new Date('January 1,2014 ')));
Logger.log('Event Series ID: ' + eventSeries.getId());
```
@param title the title of the events in the series
@param startDate the date of the first event in the series (only the day is used; the time is
    ignored)
@param recurrence the recurrence settings of the event series
@return the created event series*/createAllDayEventSeries(title:string,startDate:Date,recurrence:CalendarApp.EventRecurrence):CalendarApp.CalendarEventSeries;
/**Creates a new all-day event series.

```
// Creates an event series for a no-meetings day, taking place every Wednesday in 2013.
var eventSeries = CalendarApp.getDefaultCalendar().createAllDayEventSeries('No Meetings ',
    new Date('January 2,2013 03: 00: 00 PM EST '),
    CalendarApp.newRecurrence().addWeeklyRule()
        .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
        .until(new Date('January 1,2014 ')),
    {guests: 'everyone@example.com '});
Logger.log('Event Series ID: ' + eventSeries.getId());
```
@param title the title of the events in the series
@param startDate the date of the first event in the series (only the day is used; the time is
    ignored)
@param recurrence the recurrence settings of the event series
@param options a JavaScript object that specifies advanced parameters, as listed below
@return the created event series*/createAllDayEventSeries(title:string,startDate:Date,recurrence:CalendarApp.EventRecurrence,options:Object):CalendarApp.CalendarEventSeries;
/**Creates a new calendar, owned by the user.

```
// Creates a new calendar named "Travel Plans".
var calendar = CalendarApp.createCalendar('Travel Plans ');
Logger.log('Created the calendar"%s", with the ID "%s".',
    calendar.getName(), calendar.getId());
```
@param name the name of the new calendar
@return the newly created calendar*/createCalendar(name:string):CalendarApp.Calendar;
/**Creates a new calendar, owned by the user.

```
// Creates a new calendar named "Travel Plans" with a description and color.
var calendar = CalendarApp.createCalendar('Travel Plans', {
  description: 'A calendar to plan my travel schedule.',
  color: CalendarApp.Color.BLUE
});
Logger.log('Created the calendar "%s", with the ID "%s".',
    calendar.getName(), calendar.getId());
```
@param name the name of the new calendar
@param options a JavaScript object that specifies advanced parameters, as listed below
@return the newly created calendar*/createCalendar(name:string,options:Object):CalendarApp.Calendar;
/**Creates a new event.

If no time zone is specified, the time values are interpreted in the context of the script's
time zone, which may be different than the calendar's time zone.

```
// Creates an event for the moon landing and logs the ID.
var event = CalendarApp.getDefaultCalendar().createEvent('Apollo 11 Landing',
    new Date('July 20, 1969 20:00:00 UTC'),
    new Date('July 21, 1969 21:00:00 UTC'));
Logger.log('Event ID: ' + event.getId());
```
@param title the title of the event
@param startTime the date and time when the event starts
@param endTime the date and time when the event ends
@return the created event*/createEvent(title:string,startTime:Date,endTime:Date):CalendarApp.CalendarEvent;
/**Creates a new event.

If no time zone is specified, the time values are interpreted in the context of the script's
time zone, which may be different than the calendar's time zone.

```
// Creates an event for the moon landing and logs the ID.
var event = CalendarApp.getDefaultCalendar().createEvent('Apollo 11 Landing',
    new Date('July 20, 1969 20:00:00 UTC'),
    new Date('July 20, 1969 21:00:00 UTC'),
    {location: 'The Moon'});
Logger.log('Event ID: ' + event.getId());
```
@param title the title of the event
@param startTime the date and time when the event starts
@param endTime the date and time when the event ends
@param options a JavaScript object that specifies advanced parameters, as listed below
@return the created event*/createEvent(title:string,startTime:Date,endTime:Date,options:Object):CalendarApp.CalendarEvent;
/**Creates an event from a free-form description.

The description should use the same format as the UI's ["Quick Add"](http://support.google.com/calendar/answer/36604) feature.

```
// Creates a new event and logs its ID.
var event = CalendarApp.getDefaultCalendar()
    .createEventFromDescription('Lunch with Mary, Friday at 1PM');
Logger.log('Event ID: ' + event.getId());
```
@param description a free-form description of the event
@return the created event*/createEventFromDescription(description:string):CalendarApp.CalendarEvent;
/**Creates a new event series.

```
// Creates an event series for a team meeting, taking place every Tuesday and Thursday in 2013.
var eventSeries = CalendarApp.getDefaultCalendar().createEventSeries('Team Meeting',
    new Date('January 1, 2013 03:00:00 PM EST'),
    new Date('January 1, 2013 04:00:00 PM EST'),
    CalendarApp.newRecurrence().addWeeklyRule()
        .onlyOnWeekdays([CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY])
        .until(new Date('January 1, 2014')));
Logger.log('Event Series ID: ' + eventSeries.getId());
```
@param title the title of the events in the series
@param startTime the date and time when the first event in the series starts
@param endTime the date and time when the first event in the series ends
@param recurrence the recurrence settings of the event series
@return the created event series*/createEventSeries(title:string,startTime:Date,endTime:Date,recurrence:CalendarApp.EventRecurrence):CalendarApp.CalendarEventSeries;
/**Creates a new event series.

```
// Creates an event series for a team meeting, taking place every Tuesday and Thursday in 2013.
var eventSeries = CalendarApp.getDefaultCalendar().createEventSeries('Team Meeting',
    new Date('January 1, 2013 03:00:00 PM EST'),
    new Date('January 1, 2013 04:00:00 PM EST'),
    CalendarApp.newRecurrence().addWeeklyRule()
        .onlyOnWeekdays([CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY])
        .until(new Date('January 1, 2014')),
    {location: 'Conference Room'});
Logger.log('Event Series ID: ' + eventSeries.getId());
```
@param title the title of the events in the series
@param startTime the date and time when the first event in the series starts
@param endTime the date and time when the first event in the series ends
@param recurrence the recurrence settings of the event series
@param options a JavaScript object that specifies advanced parameters, as listed below
@return the created event series*/createEventSeries(title:string,startTime:Date,endTime:Date,recurrence:CalendarApp.EventRecurrence,options:Object):CalendarApp.CalendarEventSeries;
/**Gets all calendars that the user owns or is subscribed to.

```
// Determines how many calendars the user can access.
var calendars = CalendarApp.getAllCalendars();
Logger.log('This user owns or is subscribed to %s calendars.',
    calendars.length);
```
@return all calendars that the user can access*/getAllCalendars():CalendarApp.Calendar[];
/**Gets all calendars that the user owns.

```
// Determines how many calendars the user owns.
var calendars = CalendarApp.getAllOwnedCalendars();
Logger.log('This user owns %s calendars.', calendars.length);
```
@return all calendars that the user owns*/getAllOwnedCalendars():CalendarApp.Calendar[];
/**Gets the calendar with the given ID.

```
// Gets the public calendar "US Holidays" by ID.
var calendar = CalendarApp.getCalendarById(
    'en.usa#holiday@group.v.calendar.google.com');
Logger.log('The calendar is named "%s".', calendar.getName());
```
@param id the calendar ID
@return the calendar with the given ID, or `null` if the calendar does not exist, if the
    user cannot access it, or if the user is not subscribed to the calendar*/getCalendarById(id:string):CalendarApp.Calendar;
/**Gets all calendars with a given name that the user owns or is subscribed to. Names are not
case-sensitive.

```
// Gets the public calendar named "US Holidays".
var calendars = CalendarApp.getCalendarsByName('US Holidays');
Logger.log('Found %s matching calendars.', calendars.length);
```
@param name the calendar name
@return all calendars with this name that the user can access*/getCalendarsByName(name:string):CalendarApp.Calendar[];
/**Gets the color of the calendar.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');

// Gets the color of the calendar and logs it to the console.
// For the default calendar, you can use CalendarApp.getColor() instead.
const calendarColor = calendar.getColor();
console.log(calendarColor);
```
@return A hexadecimal color string ("#rrggbb").*/getColor():string;
/**Gets the user's default calendar.

```
// Determines the time zone of the user's default calendar.
var calendar = CalendarApp.getDefaultCalendar();
Logger.log('My default calendar is set to the time zone "%s".',
    calendar.getTimeZone());
```
@return the user's default calendar*/getDefaultCalendar():CalendarApp.Calendar;
/**Gets the description of the calendar.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');

// Sets the description of the calendar to 'Test description.'
calendar.setDescription('Test description');

// Gets the description of the calendar and logs it to the console.
// For the default calendar, you can use CalendarApp.getDescription() instead.
const description = calendar.getDescription();
console.log(description);
```
@return The description of this calendar.*/getDescription():string;
/**Gets the event with the given ID. If the series belongs to a calendar other than the default
calendar, this method must be called from that calendar. Calling [`getEventById(iCalId)`](https://developers.google.com/apps-script/reference/calendar/calendar-app.html#getEventById(String)) only
returns an event in the default calendar.

Multiple events may have the same ID if they are part of an event series. In this case this
method returns only the first event from that series.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com')

// Creates an event for the moon landing.
const event = calendar.createEvent('Apollo 11 Landing',
  new Date('July 20, 1969 20:05:00 UTC'),
  new Date('July 20, 1969 20:17:00 UTC'));

// Gets the calendar event ID and logs it to the console.
const iCalId = event.getId();
console.log(iCalId);

// Gets the event by its ID and logs the title of the event to the console.
// For the default calendar, you can use CalendarApp.getEventById(iCalId) instead.
const myEvent = calendar.getEventById(iCalId);
console.log(myEvent.getTitle());
```
@param iCalId ID of the event.
@return The event with the given ID, or `null` if the event doesn't exist or the user
    cannot access it.*/getEventById(iCalId:string):CalendarApp.CalendarEvent;
/**Gets the event series with the given ID. If the ID given is for a single [`CalendarEvent`](https://developers.google.com/apps-script/reference/calendar/calendar-event.html),
then a [`CalendarEventSeries`](https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html) is returned with a single event in the series. Note that if
the event series belongs to a calendar other than the default calendar, this method must be
called from that [`CalendarApp`](https://developers.google.com/apps-script/reference/calendar/calendar-app.html); calling [`getEventSeriesById(iCalId)`](https://developers.google.com/apps-script/reference/calendar/calendar-app.html#getEventSeriesById(String))
directly only returns an event series that exists in the default calendar.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');

// Creates an event series for a daily team meeting from 1 PM to 2 PM.
// The series adds the daily event from January 1, 2023 through December 31, 2023.
const eventSeries = calendar.createEventSeries('Team meeting',
  new Date('Jan 1, 2023 13:00:00'),
  new Date('Jan 1, 2023 14:00:00'),
  CalendarApp.newRecurrence().addDailyRule().until(new Date('Jan 1, 2024')));

// Gets the ID of the event series.
const iCalId = eventSeries.getId();

// Gets the event series by its ID and logs the series title to the console.
// For the default calendar, you can use CalendarApp.getEventSeriesById(iCalId) instead.
console.log(calendar.getEventSeriesById(iCalId).getTitle());
```
@param iCalId ID of the event series.
@return The series with the given ID, or `null` if the series doesn't exist or the user
    cannot access it.*/getEventSeriesById(iCalId:string):CalendarApp.CalendarEventSeries;
/**Gets all events that occur within a given time range.

This method returns events that start during the given time range, end during the time
range, or encompass the time range. If no time zone is specified, the time values are
interpreted in the context of the script's time zone, which may be different from the
calendar's time zone.

```
// Determines how many events are happening in the next two hours.
var now = new Date();
var twoHoursFromNow = new Date(now.getTime() + (2 * 60 * 60 * 1000));
var events = CalendarApp.getDefaultCalendar().getEvents(now, twoHoursFromNow);
Logger.log('Number of events: ' + events.length);
```
@param startTime the start of the time range
@param endTime the end of the time range, non-inclusive
@return the events that occur within the time range*/getEvents(startTime:Date,endTime:Date):CalendarApp.CalendarEvent[];
/**Gets all events that occur within a given time range and meet the specified criteria.

This method returns events that start during the given time range, ends during the time
range, or encompasses the time range. If no time zone is specified, the time values are
interpreted in the context of the script's time zone, which may be different from the
calendar's time zone.

Be aware that filtering on `author`, `search`, or `statusFilters` takes
place after applying `start` and `max`. This means that the number of events
returned may be less than `max`, even though additional events meet the criteria.

```
// Determines how many events are happening in the next two hours that contain the term
// "meeting".
var now = new Date();
var twoHoursFromNow = new Date(now.getTime() + (2 * 60 * 60 * 1000));
var events = CalendarApp.getDefaultCalendar().getEvents(now, twoHoursFromNow,
    {search: 'meeting'});
Logger.log('Number of events: ' + events.length);
```
@param startTime the start of the time range
@param endTime the end of the time range, non-inclusive
@param options a JavaScript object that specifies advanced parameters, as listed below
@return the events that take place within the time range and match the criteria*/getEvents(startTime:Date,endTime:Date,options:Object):CalendarApp.CalendarEvent[];
/**Gets all events that occur on a given day.

This method returns events if they start during the given day, end during the day, or
encompass the day.

Note that only the date portion of the Date object is used, and the time portion is ignored.
The date is interpreted as midnight that day to midnight the next day in the calendar's time
zone.

```
// Determines how many events are happening today.
var today = new Date();
var events = CalendarApp.getDefaultCalendar().getEventsForDay(today);
Logger.log('Number of events: ' + events.length);
```
@param date the date to retrieve events for (only the day is used; the time is ignored)
@return the events that occur on the given date*/getEventsForDay(date:Date):CalendarApp.CalendarEvent[];
/**Gets all events that occur on a given day and meet specified criteria.

This method returns events if they start during the given day, end during the day, or
encompass the day.

Note that only the date portion of the Date object is used, and the time portion is ignored.
The date is interpreted as midnight that day to midnight the next day in the calendar's time
zone.

Be aware that filtering on `author`, `search`, or `statusFilters` takes
place after applying `start` and `max`. This means that the number of events
returned may be less than `max`, even though additional events meet the criteria.

```
// Determines how many events are happening today and contain the term "meeting".
var today = new Date();
var events = CalendarApp.getDefaultCalendar().getEventsForDay(today, {search: 'meeting'});
Logger.log('Number of events: ' + events.length);
```
@param date the date to retrieve events for (only the day is used; the time is ignored)
@param options advanced filtering options
@return the events that occur on the given date and match the criteria*/getEventsForDay(date:Date,options:Object):CalendarApp.CalendarEvent[];
/**Gets the ID of the calendar. The ID for a user's default calendar is their email address.

```
// Opens the calendar by its ID.
// To get the user's default calendar, use CalendarApp.getDefaultCalendar().
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');

// Gets the ID of the calendar and logs it to the console.
const calendarId = calendar.getId();
console.log(calendarId);
```
@return The ID of the calendar.*/getId():string;
/**Gets the name of the calendar.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');

// Gets the name of the calendar and logs it to the console.
// For the default calendar, you can use CalendarApp.getName() instead.
const calendarName = calendar.getName();
console.log(calendarName);
```
@return This calendar's name.*/getName():string;
/**Gets the calendar with the given ID, if the user owns it.

To find a calendar ID, click the arrow next to the calendar's name in Google Calendar and
select __Calendar settings__. The ID is shown near the bottom of the settings
page.

```
// Gets a (non-existent) private calendar by ID.
var calendar = CalendarApp.getOwnedCalendarById(
    '123456789@group.calendar.google.com');
Logger.log('The calendar is named "%s".', calendar.getName());
```
@param id the calendar id
@return the calendar with the given ID, or `null` if the calendar does not exist or the
    user does not own it*/getOwnedCalendarById(id:string):CalendarApp.Calendar;
/**Gets all calendars with a given name that the user owns. Names are not case-sensitive.

```
// Gets a private calendar named "Travel Plans".
var calendars = CalendarApp.getOwnedCalendarsByName('Travel Plans');
Logger.log('Found %s matching calendars.', calendars.length);
```
@param name the calendar name
@return all calendars with this name that the user owns*/getOwnedCalendarsByName(name:string):CalendarApp.Calendar[];
/**Gets the time zone of the calendar.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');

// Gets the time zone of the calendar and logs it to the console.
// For the default calendar, you can use CalendarApp.getTimeZone() instead.
const timeZone = calendar.getTimeZone();
console.log(timeZone);
```
@return The time zone, specified in "long" format (for example, "America/New_York", as listed
    by [Joda.org](http://joda-time.sourceforge.net/timezones.html)).*/getTimeZone():string;
/**Determines whether the calendar is hidden in the user interface.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');

// Determines whether the calendar is hidden in the user interface and logs it to the console.
// For the default calendar, you can use CalendarApp.isHidden() instead.
const isHidden = calendar.isHidden();
console.log(isHidden);
```
@return `true` if the calendar is hidden in the user interface; `false` if it
    isn't.*/isHidden():boolean;
/**Determines whether the calendar is the primary calendar for the effective user.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');

// Determines whether the calendar is the default calendar for
// the effective user and logs it to the console.
// For the default calendar, you can use CalendarApp.isMyPrimaryCalendar() instead.
const isMyPrimaryCalendar = calendar.isMyPrimaryCalendar();
console.log(isMyPrimaryCalendar);
```
@return `true` if the calendar is the default calendar for the effective user; `false` if it isn't.*/isMyPrimaryCalendar():boolean;
/**Determines whether the calendar is owned by you.

```
// Gets a calendar by its ID. To get the user's default calendar, use
// CalendarApp.getDefault() instead.
// TODO(developer): Replace the ID with the calendar ID that you want to use.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Determines whether the calendar is owned by you and logs it.
console.log(calendar.isOwnedByMe());
```
@return `true` if the calendar is owned by you; `false` if not.*/isOwnedByMe():boolean;
/**Determines whether the calendar's events are displayed in the user interface.

```
// Gets the user's default calendar. To get a different calendar, use getCalendarById()
// instead.
const calendar = CalendarApp.getDefaultCalendar();

// Determines whether the calendar's events are displayed in the user interface and logs it.
console.log(calendar.isSelected());
```
@return `true` if the calendar's events are displayed in the user interface; `false` if not*/isSelected():boolean;
/**Creates a new recurrence object, which can be used to create rules for event recurrence.

```
// Creates an event series for a no-meetings day, taking place every Wednesday in 2013.
var recurrence = CalendarApp.newRecurrence().addWeeklyRule()
    .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
    .until(new Date('January 1, 2014'));
var eventSeries = CalendarApp.getDefaultCalendar().createAllDayEventSeries('No Meetings',
    new Date('January 2, 2013 03:00:00 PM EST'),
    recurrence);
Logger.log('Event Series ID: ' + eventSeries.getId());
```
@return a new recurrence object with no rules set (behaves as a weekly recurrence)*/newRecurrence():CalendarApp.EventRecurrence;
/**Sets the color of the calendar.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');

// Sets the color of the calendar to pink using the Calendar Color enum.
// For the default calendar, you can use CalendarApp.setColor() instead.
calendar.setColor(CalendarApp.Color.PINK);
```
@param color A [`CalendarApp.Color`](https://developers.google.com/apps-script/reference/calendar/color.html) or a hexadecimal color string
    ("#rrggbb").
@return This calendar for chaining.*/setColor(color:string):CalendarApp.Calendar;
/**Sets the description of a calendar.

```
// Gets the user's default calendar. To get a different calendar, use getCalendarById()
// instead.
const calendar = CalendarApp.getDefaultCalendar();

// Sets the description of the calendar.
// TODO(developer): Update the string with the description that you want to use.
calendar.setDescription('Updated calendar description.')
```
@param description the description of this calendar
@return this calendar for chaining*/setDescription(description:string):CalendarApp.Calendar;
/**Sets whether the calendar is visible in the user interface.
@param hidden `true` to hide the calendar in the user interface; `false` to show it
@return this calendar for chaining*/setHidden(hidden:boolean):CalendarApp.Calendar;
/**Sets the name of the calendar.

```
// Gets the user's default calendar. To get a different calendar, use getCalendarById()
// instead.
const calendar = CalendarApp.getDefaultCalendar();

// Sets the name of the calendar.
// TODO(developer): Update the string with the name that you want to use.
calendar.setName('Example calendar name');
```
@param name the new name
@return this calendar for chaining*/setName(name:string):CalendarApp.Calendar;
/**Sets whether the calendar's events are displayed in the user interface.

```
// Gets the user's default calendar. To get a different calendar, use getCalendarById()
// instead.
const calendar = CalendarApp.getDefaultCalendar();

// Selects the calendar so that its events are displayed in the user interface. To
// unselect the calendar, set the parameter to false.
calendar.setSelected(true);
```
@param selected `true` to show the calendar's events in the user interface; `false`
    to hide them
@return this calendar for chaining*/setSelected(selected:boolean):CalendarApp.Calendar;
/**Sets the time zone of the calendar.

```
// Gets the user's default calendar. To get a different calendar, use getCalendarById()
// instead.
const calendar = CalendarApp.getDefaultCalendar();

// Sets the time zone of the calendar to America/New York (US/Eastern) time.
calendar.setTimeZone('America/New_York');
```
@param timeZone The time zone, specified in "long" format (such as "America/New_York", as
    listed by [Joda.org](http://joda-time.sourceforge.net/timezones.html)).
@return This calendar for chaining.*/setTimeZone(timeZone:string):CalendarApp.Calendar;
/**Subscribes the user to the calendar with the given ID, if the user is allowed to subscribe.

```
// Subscribe to the calendar "US Holidays".
var calendar = CalendarApp.subscribeToCalendar(
    'en.usa#holiday@group.v.calendar.google.com');
Logger.log('Subscribed to the calendar "%s".', calendar.getName());
```
@param id the ID of the calendar to subscribe to
@return the newly subscribed to calendar*/subscribeToCalendar(id:string):CalendarApp.Calendar;
/**Subscribes the user to the calendar with the given ID, if the user is allowed to subscribe.

```
// Subscribe to the calendar "US Holidays", and set it to the color blue.
var calendar = CalendarApp.subscribeToCalendar(
    'en.usa#holiday@group.v.calendar.google.com',
    { color: CalendarApp.Color.BLUE });
Logger.log('Subscribed to the calendar "%s".', calendar.getName());
```
@param id The ID of the calendar to subscribe to.
@param options A JavaScript object that specifies advanced parameters, as listed below.
@return The newly subscribed calendar.*/subscribeToCalendar(id:string,options:Object):CalendarApp.Calendar;}module CalendarApp{interface Visibility{}interface _Visibility{
/**The event is private. This value is provided for compatibility reasons.*/CONFIDENTIAL:Visibility;
/**Uses the default visibility for events on the calendar.*/DEFAULT:Visibility;
/**The event is private and only event attendees may view event details.*/PRIVATE:Visibility;
/**The event is public and event details are visible to all readers of the calendar.*/PUBLIC:Visibility;}interface RecurrenceRule{
/**Adds a rule that excludes occurrences on a daily basis.

```
// Creates a rule that recurs every week after the first 30 days.
var recurrence = CalendarApp.newRecurrence().addWeeklyRule().addDailyExclusion().times(30);
```
@return the new RecurrenceRule*/addDailyExclusion():CalendarApp.RecurrenceRule;
/**Adds a rule that causes the event to recur on a daily basis.

```
// Creates a rule that recurs every day for ten days.
var recurrence = CalendarApp.newRecurrence().addDailyRule().times(10);
```
@return the new RecurrenceRule*/addDailyRule():CalendarApp.RecurrenceRule;
/**Adds a rule that causes the event to recur on a specific date.
@return this EventRecurrence for chaining*/addDate(date:Date):CalendarApp.EventRecurrence;
/**Adds a rule that excludes an occurrence for a specific date.
@return this EventRecurrence for chaining*/addDateExclusion(date:Date):CalendarApp.EventRecurrence;
/**Adds a rule that excludes occurrences on a monthly basis.

By default the exclusion is applied on the same day of the month as the first event in the
series, but this can be altered by calling [`onlyOnMonthDay(day)`](https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDay(Integer)) or [`onlyOnMonthDays(days)`](https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDays(Integer)).
@return the new RecurrenceRule*/addMonthlyExclusion():CalendarApp.RecurrenceRule;
/**Adds a rule that causes the event to recur on a monthly basis.

By default the event recurs on the same day of the month as the first event in the series,
but this can be altered by calling [`onlyOnMonthDay(day)`](https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDay(Integer)) or [`onlyOnMonthDays(days)`](https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDays(Integer)).

```
// Creates a rule that recurs every month for three months.
var recurrence = CalendarApp.newRecurrence().addMonthlyRule().times(4);
```
@return the new RecurrenceRule*/addMonthlyRule():CalendarApp.RecurrenceRule;
/**Adds a rule that excludes occurrences on a weekly basis.

By default the exclusion is applied on the same day of the week as the first event in the
series, but this can be altered by calling [`onlyOnWeekday(day)`](https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekday(Weekday)) or [`onlyOnWeekdays(days)`](https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekdays(Weekday)).

```
// Creates a rule that recurs every day except the first four Wednesdays.
var recurrence = CalendarApp.newRecurrence().addDailyRule()
    .addWeeklyExclusion().onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY).times(4);
```
@return the new RecurrenceRule*/addWeeklyExclusion():CalendarApp.RecurrenceRule;
/**Adds a rule that causes the event to recur on a weekly basis.

By default the event recurs on the same day of the week as the first event in the series,
but this can be altered by calling [`onlyOnWeekday(day)`](https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekday(Weekday)) or [`onlyOnWeekdays(days)`](https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekdays(Weekday)).

```
// Creates a rule that recurs every week for ten weeks.
var recurrence = CalendarApp.newRecurrence().addWeeklyRule().times(10);
```
@return the new RecurrenceRule*/addWeeklyRule():CalendarApp.RecurrenceRule;
/**Adds a rule that excludes occurrences on a yearly basis.

By default the exclusion is applied on the same day of the year as the first event in the
series, but this can be altered by calling [`onlyOnYearDay(day)`](https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDay(Integer)) or [`onlyOnYearDays(days)`](https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDays(Integer)).
@return the new RecurrenceRule*/addYearlyExclusion():CalendarApp.RecurrenceRule;
/**Adds a rule that causes the event to recur on a yearly basis.

By default the event recurs on the same day of the year as the first event in the series,
but this can be altered by calling [`onlyOnYearDay(day)`](https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDay(Integer)) or [`onlyOnYearDays(days)`](https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDays(Integer)).
@return the new RecurrenceRule*/addYearlyRule():CalendarApp.RecurrenceRule;
/**Configures the rule to only apply at this interval of the rule's time unit.

```
// Creates a rule that recurs every fourth week.
var recurrence = CalendarApp.newRecurrence().addWeeklyRule().interval(4);
```
@param interval the interval in the rule's time unit
@return this RecurrenceRule for chaining*/interval(interval:Integer):CalendarApp.RecurrenceRule;
/**Configures the rule to only apply to a specific month.

```
// Creates a rule that recurs every week in February.
var recurrence = CalendarApp.newRecurrence()
    .addWeeklyRule().onlyInMonth(CalendarApp.Month.FEBRUARY);
```
@param month the month
@return this RecurrenceRule for chaining*/onlyInMonth(month:Month):CalendarApp.RecurrenceRule;
/**Configures the rule to only apply to specific months.

```
// Creates a rule that recurs every week in February and March.
var recurrence = CalendarApp.newRecurrence()
    .addWeeklyRule().onlyInMonths([CalendarApp.Month.FEBRUARY, CalendarApp.Month.MARCH]);
```
@param months the months
@return this RecurrenceRule for chaining*/onlyInMonths(months:Month[]):CalendarApp.RecurrenceRule;
/**Configures the rule to only apply to a specific day of the month.

```
// Creates a rule that recurs every month on the fifth day of the month.
var recurrence = CalendarApp.newRecurrence().addMonthlyRule().onlyOnMonthDay(5);
```
@param day the day of the month
@return this RecurrenceRule for chaining*/onlyOnMonthDay(day:Integer):CalendarApp.RecurrenceRule;
/**Configures the rule to only apply to specific days of the month.

```
// Creates a rule that recurs every month on the first and fifteenth day of the month.
var recurrence = CalendarApp.newRecurrence().addMonthlyRule().onlyOnMonthDays([1, 15]);
```
@param days the days of the month
@return this RecurrenceRule for chaining*/onlyOnMonthDays(days:Integer[]):CalendarApp.RecurrenceRule;
/**Configures the rule to only apply to a specific week of the year.

```
// Creates a rule that recurs on the fifth week of every year.
var recurrence = CalendarApp.newRecurrence().addWeeklyRule().onlyOnWeek(5);
```
@param week the week
@return this RecurrenceRule for chaining*/onlyOnWeek(week:Integer):CalendarApp.RecurrenceRule;
/**Configures the rule to only apply to a specific day of the week.

```
// Creates a rule that recurs every week on Wednesdays.
var recurrence = CalendarApp.newRecurrence()
    .addWeeklyRule().onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY);
```
@param day the day of the week
@return this RecurrenceRule for chaining*/onlyOnWeekday(day:Weekday):CalendarApp.RecurrenceRule;
/**Configures the rule to only apply to specific days of the week.

```
// Creates a rule that recurs every week on Tuesdays and Thursdays.
var recurrence = CalendarApp.newRecurrence()
    .addWeeklyRule().onlyOnWeekdays(
        [CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY]);
```
@param days the days of the week
@return this RecurrenceRule for chaining*/onlyOnWeekdays(days:Weekday[]):CalendarApp.RecurrenceRule;
/**Configures the rule to only apply to specific weeks of the year.

```
// Creates a rule that recurs on the fifth and tenth weeks of every year.
var recurrence = CalendarApp.newRecurrence().addWeeklyRule().onlyOnWeeks([5, 10]);
```
@param weeks the weeks
@return this RecurrenceRule for chaining*/onlyOnWeeks(weeks:Integer[]):CalendarApp.RecurrenceRule;
/**Configures the rule to only apply to a specific day of the year.

```
// Creates a rule that recurs every year on February 15 (the 46th day).
var recurrence = CalendarApp.newRecurrence().addYearlyRule().onlyOnYearDay(46);
```
@param day the day of the year
@return this RecurrenceRule for chaining*/onlyOnYearDay(day:Integer):CalendarApp.RecurrenceRule;
/**Configures the rule to only apply to specific days of the year.

```
// Creates a rule that recurs every year on January 20 and February 15.
var recurrence = CalendarApp.newRecurrence().addYearlyRule().onlyOnYearDay([20, 46]);
```
@param days the days of the year
@return this RecurrenceRule for chaining*/onlyOnYearDays(days:Integer[]):CalendarApp.RecurrenceRule;
/**Sets the time zone for this recurrence. This affects the date and time that events recur on,
and whether the event shifts with daylight savings time. Defaults to the calendar's time zone.
@param timeZone the time zone, specified in "long" format (e.g., 'America/New_York', as listed
    by [Joda.org](http://joda-time.sourceforge.net/timezones.html))
@return this EventRecurrence for chaining*/setTimeZone(timeZone:string):CalendarApp.EventRecurrence;
/**Configures the rule to end after a given number of occurrences.

```
// Creates a rule that recurs every day for ten days.
var recurrence = CalendarApp.newRecurrence().addDailyRule().times(10);
```
@param times the number of times to recur
@return this RecurrenceRule for chaining*/times(times:Integer):CalendarApp.RecurrenceRule;
/**Configures the rule to end on a given date (inclusive).

```
// Creates a rule that recurs every day through the end of 2013.
var recurrence = CalendarApp.newRecurrence()
    .addDailyRule().until(new Date('December 31, 2013'));
```
@return this RecurrenceRule for chaining*/until(endDate:Date):CalendarApp.RecurrenceRule;
/**Configures which day a week starts on, for the purposes of applying the rule.

```
// Creates a weekly rule where weeks start on Monday.
var recurrence = CalendarApp.newRecurrence()
    .addWeeklyRule().weekStartsOn(CalendarApp.Weekday.MONDAY);
```
@param day the day on which the week starts
@return this RecurrenceRule for chaining*/weekStartsOn(day:Weekday):CalendarApp.RecurrenceRule;}interface GuestStatus{}interface _GuestStatus{
/**The guest has been invited, but has not indicated whether they are attending.*/INVITED:GuestStatus;
/**The guest has indicated they might attend.*/MAYBE:GuestStatus;
/**The guest has indicated they are not attending.*/NO:GuestStatus;
/**The guest is the owner of the event.*/OWNER:GuestStatus;
/**The guest has indicated they are attending.*/YES:GuestStatus;}interface EventType{}interface _EventType{
/**The event is a special all-day event with an annual recurrence.*/BIRTHDAY:EventType;
/**The event is a regular event.*/DEFAULT:EventType;
/**The event is a focus-time event.*/FOCUS_TIME:EventType;
/**The event is an event from Gmail.*/FROM_GMAIL:EventType;
/**The event is an out-of-office event.*/OUT_OF_OFFICE:EventType;
/**The event is a working location event.*/WORKING_LOCATION:EventType;}interface EventRecurrence{
/**Adds a rule that excludes occurrences on a daily basis.

```
// Creates a rule that recurs every week after the first 30 days.
var recurrence = CalendarApp.newRecurrence().addWeeklyRule().addDailyExclusion().times(30);
```
@return the new RecurrenceRule*/addDailyExclusion():CalendarApp.RecurrenceRule;
/**Adds a rule that causes the event to recur on a daily basis.

```
// Creates a rule that recurs every day for ten days.
var recurrence = CalendarApp.newRecurrence().addDailyRule().times(10);
```
@return the new RecurrenceRule*/addDailyRule():CalendarApp.RecurrenceRule;
/**Adds a rule that causes the event to recur on a specific date.
@return this EventRecurrence for chaining*/addDate(date:Date):CalendarApp.EventRecurrence;
/**Adds a rule that excludes an occurrence for a specific date.
@return this EventRecurrence for chaining*/addDateExclusion(date:Date):CalendarApp.EventRecurrence;
/**Adds a rule that excludes occurrences on a monthly basis.

By default the exclusion is applied on the same day of the month as the first event in the
series, but this can be altered by calling [`RecurrenceRule.onlyOnMonthDay(day)`](https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDay(Integer)) or [`RecurrenceRule.onlyOnMonthDays(days)`](https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDays(Integer)).
@return the new RecurrenceRule*/addMonthlyExclusion():CalendarApp.RecurrenceRule;
/**Adds a rule that causes the event to recur on a monthly basis.

By default the event recurs on the same day of the month as the first event in the series,
but this can be altered by calling [`RecurrenceRule.onlyOnMonthDay(day)`](https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDay(Integer)) or [`RecurrenceRule.onlyOnMonthDays(days)`](https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnMonthDays(Integer)).

```
// Creates a rule that recurs every month for three months.
var recurrence = CalendarApp.newRecurrence().addMonthlyRule().times(4);
```
@return the new RecurrenceRule*/addMonthlyRule():CalendarApp.RecurrenceRule;
/**Adds a rule that excludes occurrences on a weekly basis.

By default the exclusion is applied on the same day of the week as the first event in the
series, but this can be altered by calling [`RecurrenceRule.onlyOnWeekday(day)`](https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekday(Weekday)) or [`RecurrenceRule.onlyOnWeekdays(days)`](https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekdays(Weekday)).

```
// Creates a rule that recurs every day except the first four Wednesdays.
var recurrence = CalendarApp.newRecurrence().addDailyRule()
    .addWeeklyExclusion().onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY).times(4);
```
@return the new RecurrenceRule*/addWeeklyExclusion():CalendarApp.RecurrenceRule;
/**Adds a rule that causes the event to recur on a weekly basis.

By default the event recurs on the same day of the week as the first event in the series,
but this can be altered by calling [`RecurrenceRule.onlyOnWeekday(day)`](https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekday(Weekday)) or [`RecurrenceRule.onlyOnWeekdays(days)`](https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnWeekdays(Weekday)).

```
// Creates a rule that recurs every week for ten weeks.
var recurrence = CalendarApp.newRecurrence().addWeeklyRule().times(10);
```
@return the new RecurrenceRule*/addWeeklyRule():CalendarApp.RecurrenceRule;
/**Adds a rule that excludes occurrences on a yearly basis.

By default the exclusion is applied on the same day of the year as the first event in the
series, but this can be altered by calling [`RecurrenceRule.onlyOnYearDay(day)`](https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDay(Integer)) or [`RecurrenceRule.onlyOnYearDays(days)`](https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDays(Integer)).
@return the new RecurrenceRule*/addYearlyExclusion():CalendarApp.RecurrenceRule;
/**Adds a rule that causes the event to recur on a yearly basis.

By default the event recurs on the same day of the year as the first event in the series,
but this can be altered by calling [`RecurrenceRule.onlyOnYearDay(day)`](https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDay(Integer)) or [`RecurrenceRule.onlyOnYearDays(days)`](https://developers.google.com/apps-script/reference/calendar/recurrence-rule.html#onlyOnYearDays(Integer)).
@return the new RecurrenceRule*/addYearlyRule():CalendarApp.RecurrenceRule;
/**Sets the time zone for this recurrence. This affects the date and time that events recur on,
and whether the event shifts with daylight savings time. Defaults to the calendar's time zone.
@param timeZone the time zone, specified in "long" format (e.g., 'America/New_York', as listed
    by [Joda.org](http://joda-time.sourceforge.net/timezones.html))
@return this EventRecurrence for chaining*/setTimeZone(timeZone:string):CalendarApp.EventRecurrence;}interface EventGuest{
/**Gets the number of additional people that this guest has said are attending.
@return the number of additional people this guest has said are attending*/getAdditionalGuests():Integer;
/**Gets the email address of the guest.
@return the guest's email address*/getEmail():string;
/**Gets the status of the guest for the event.
@return the status of this guest*/getGuestStatus():CalendarApp.GuestStatus;
/**Gets the name of the guest. If the name of the guest is not available, this method returns the
guest's email address.
@return the guest's name, or the guest's email address if the name is not available*/getName():string;
/**Gets the status of the guest for the event.
@deprecated
@return the status of this guest*/getStatus():string;}interface EventColor{}interface _EventColor{
/**Blue (`"9"`), referred to as "Blueberry" in th Calendar UI.*/BLUE:EventColor;
/**Cyan (`"7"`), referred to as "Lavender" in th Calendar UI.*/CYAN:EventColor;
/**Gray (`"8"`), referred to as "Graphite" in th Calendar UI.*/GRAY:EventColor;
/**Green (`"10"`), referred to as "Basil" in th Calendar UI.*/GREEN:EventColor;
/**Mauve (`"3"`),, referred to as "Grape" in th Calendar UI.*/MAUVE:EventColor;
/**Orange (`"6"`), referred to as "Tangerine" in th Calendar UI.*/ORANGE:EventColor;
/**Pale Blue (`"1"`), referred to as "Peacock" in th Calendar UI.*/PALE_BLUE:EventColor;
/**Pale Green (`"2"`), referred to as "Sage" in th Calendar UI.*/PALE_GREEN:EventColor;
/**Pale Red (`"4"`), referred to as "Flamingo" in th Calendar UI.*/PALE_RED:EventColor;
/**Red (`"11"`), referred to as "Tomato" in th Calendar UI.*/RED:EventColor;
/**Yellow (`"5"`), referred to as "Banana" in th Calendar UI.*/YELLOW:EventColor;}interface Color{}interface _Color{
/**Blue (`#2952A3`).*/BLUE:Color;
/**Brown (`#8D6F47`).*/BROWN:Color;
/**Charcoal (`#4E5D6C`).*/CHARCOAL:Color;
/**Chestnut (`#865A5A`).*/CHESTNUT:Color;
/**Gray (`#5A6986`).*/GRAY:Color;
/**Green (`#0D7813`).*/GREEN:Color;
/**Indigo (`#5229A3`).*/INDIGO:Color;
/**Lime (`#528800`).*/LIME:Color;
/**Mustard (`#88880E`).*/MUSTARD:Color;
/**Olive (`#6E6E41`).*/OLIVE:Color;
/**Orange (`#BE6D00`).*/ORANGE:Color;
/**Pink (`#B1365F`).*/PINK:Color;
/**Plum (`#705770`).*/PLUM:Color;
/**Purple (`#7A367A`).*/PURPLE:Color;
/**Red (`#A32929`).*/RED:Color;
/**Red-Orange (`#B1440E`).*/RED_ORANGE:Color;
/**Sea Blue (`#29527A`).*/SEA_BLUE:Color;
/**Slate (`#4A716C`).*/SLATE:Color;
/**Teal (`#28754E`).*/TEAL:Color;
/**Turquoise (`#1B887A`).*/TURQOISE:Color;
/**Yellow (`#AB8B00`).*/YELLOW:Color;}interface CalendarEventSeries{
/**Adds a new email reminder to the event. The reminder must be at least 5 minutes, and at most 4
weeks (40320 minutes), before the event.

```
// Gets an event by its ID. For an event series, use getEventSeriesById(iCalId) instead.
// TODO(developer): Replace the string with the event ID that you want to get.
const event = CalendarApp.getEventById('abc123456');

// Adds an email notification for 15 minutes before the event.
event.addEmailReminder(15);
```
@param minutesBefore the number of minutes before the event
@return this [`CalendarEventSeries`](https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html) for chaining*/addEmailReminder(minutesBefore:Integer):CalendarApp.CalendarEventSeries;
/**Adds a guest to the event.

```
// Example 1: Add a guest to one event
function addAttendeeToEvent() {
  // Replace the below values with your own
  let attendeeEmail = 'user@example.com'; // Email address of the person you need to add
  let calendarId = 'calendar_123@group.calendar.google.com'; // ID of calendar containing event
  let eventId = '123abc'; // ID of event instance

  let calendar = CalendarApp.getCalendarById(calendarId);
  if (calendar === null) {
    // Calendar not found
    console.log('Calendar not found', calendarId);
    return;
    }
  let event = calendar.getEventById(eventId);
  if (event === null) {
    // Event not found
    console.log('Event not found', eventId);
    return;
    }
  event.addGuest(attendeeEmail);
  }

// Example 2: Add a guest to all events on a calendar within a specified timeframe
function addAttendeeToAllEvents(){
// Replace the following values with your own
  let attendeeEmail = 'user@example.com'; // Email address of the person you need to add
  let calendarId = 'calendar_123@group.calendar.google.com'; // ID of calendar with the events
  let startDate = new Date("YYYY-MM-DD"); // The first date to add the guest to the events
  let endDate = new Date("YYYY-MM-DD"); // The last date to add the guest to the events

  let calendar = CalendarApp.getCalendarById(calendarId);
    if (calendar === null) {
    // Calendar not found
    console.log('Calendar not found', calendarId);
    return;
  }
  // Get the events within the specified timeframe
  let calEvents = calendar.getEvents(startDate,endDate);
  console.log(calEvents.length); // Checks how many events are found
  // Loop through all events and add the attendee to each of them
  for (var i = 0; i < calEvents.length; i++) {
  let event = calEvents[i];
  event.addGuest(attendeeEmail);
  }
}
```
@param email The email address of the guest.
@return This [`CalendarEventSeries`](https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html) for chaining.*/addGuest(email:string):CalendarApp.CalendarEventSeries;
/**Adds a new pop-up notification to the event. The notification must be at least 5 minutes, and
at most 4 weeks (40320 minutes), before the event.

```
// Gets an event by its ID. For an event series, use getEventSeriesById(iCalId) instead.
// TODO(developer): Replace the string with the event ID that you want to get.
const event = CalendarApp.getEventById('abc123456');

// Adds a pop-up notification for 15 minutes before the event.
event.addPopupReminder(15);
```
@param minutesBefore the number of minutes before the event
@return this [`CalendarEventSeries`](https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html) for chaining*/addPopupReminder(minutesBefore:Integer):CalendarApp.CalendarEventSeries;
/**Adds a new SMS reminder to the event. The reminder must be at least 5 minutes, and at most 4
weeks (40320 minutes), before the event.
@param minutesBefore the number of minutes before the event
@return this [`CalendarEventSeries`](https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html) for chaining*/addSmsReminder(minutesBefore:Integer):CalendarApp.CalendarEventSeries;
/**Determines whether people can add themselves as guests to a Calendar event.

```
// Gets an event by its ID. For an event series, use getEventSeriesById(iCalId) instead.
// TODO(developer): Replace the string with the event ID that you want to get.
const event = CalendarApp.getEventById('abc123456');

// Determines whether people can add themselves as guests to the event and logs it.
console.log(event.anyoneCanAddSelf());
```
@return `true` if non-guests can add themselves to the event; `false` if not*/anyoneCanAddSelf():boolean;
/**Deletes the event series.*/deleteEventSeries():void;
/**Deletes a key/value tag from the event.
@param key the tag key
@return this [`CalendarEventSeries`](https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html) for chaining*/deleteTag(key:string):CalendarApp.CalendarEventSeries;
/**Gets all keys for tags that have been set on the event.
@return an array of string keys*/getAllTagKeys():string[];
/**Returns the color of the calendar event.

```
// Gets an event by its ID. For an event series, use getEventSeriesById(iCalId) instead.
// TODO(developer): Replace the string with the event ID that you want to get.
const event = CalendarApp.getEventById('abc123456');

// Gets the color of the calendar event and logs it.
const eventColor = event.getColor();
console.log(eventColor);
```
@return The string representation of the event color, as an index (1-11) of values from [`CalendarApp.EventColor`](https://developers.google.com/apps-script/reference/calendar/event-color.html).*/getColor():string;
/**Gets the creators of an event.

```
// Gets an event by its ID. For an event series, use getEventSeriesById(iCalId) instead.
// TODO(developer): Replace the string with the event ID that you want to get.
const event = CalendarApp.getEventById('abc123456');

// Gets a list of the creators of the event and logs it.
console.log(event.getCreators());
```
@return the email addresses of the event's creators*/getCreators():string[];
/**Gets the date the event was created. You must have access to the calendar.

```
// Opens the calendar by using its ID.
// To get the user's default calendar use CalendarApp.getDefault() instead.
// TODO(developer): Replace the calendar ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 1st, 2023 that takes place
// between 8:10 AM and 4:25 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 01, 2023 08:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];

if (event) {
 // If an event exists within the given time frame, gets the date that the event
 // was created and logs it.
 const eventCreated = event.getDateCreated();
 console.log(eventCreated);
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return the date of creation*/getDateCreated():Date;
/**Gets the description of the event. You must have edit access to the calendar.

```
// Opens the calendar by its ID.
// To get the user's default calendar use CalendarApp.getDefault() instead.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 4th, 2023 that takes place
between 4:00 PM and 5:00 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 04, 2023 16:00:00'), new Date('Feb 04, 2023 17:00:00'))[0];

if (event) {
 // If an event exists within the given time frame, sets the description of the event.
 event.setDescription('Important meeting');

 // Gets the description of the event and logs it.
 const description = event.getDescription();
 console.log(description);
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return the description*/getDescription():string;
/**Gets the minute values for all email reminders for the event. You must have edit access to the
calendar.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 4th, 2023 that takes place
between 5:00 PM and 6:00 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 04, 2023 15:00:00'), new Date('Feb 04, 2023 18:00:00'))[0];

if (event) {
 // If an event exists within the given time frame, adds email reminders for the user to be
 // sent at 4 and 7 minutes before the event.
 event.addEmailReminder(4);
 event.addEmailReminder(7);

 // Gets the minute values for all email reminders that are set up for the user for this event
 // and logs it.
 const emailReminder = event.getEmailReminders();
 console.log(emailReminder);
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return an array in which each value corresponds to the number of minutes before the event that
    a reminder triggers*/getEmailReminders():Integer[];
/**Get the [`EventType`](https://developers.google.com/apps-script/reference/calendar/event-type.html) of this event.
@return The event type.*/getEventType():CalendarApp.EventType;
/**Gets a guest by email address.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 25th, 2023 that takes place
// between 5:00 PM and 5:25 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 25,2023 17:00:00'), new Date('Feb 25,2023 17:25:00'))[0];

// Gets a guest by email address.
const guestEmailId = event.getGuestByEmail('alex@example.com');

// If the email address corresponds to an event guest, logs the email address.
if (guestEmailId) {
  console.log(guestEmailId.getEmail());
}
```
@param email the address of the guest
@return the guest, or null if the email address does not correspond to a guest*/getGuestByEmail(email:string):CalendarApp.EventGuest;
/**Gets the guests for the event, not including the event owner.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 25th, 2023 that takes place
// between 5:00 PM and 5:25 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 25,2023 17:00:00'), new Date('Feb 25,2023 17:25:00'))[0];

// Adds two guests to the event by using their email addresses.
event.addGuest('alex@example.com');
event.addGuest('cruz@example.com');

// Gets the guests list for the event.
const guestList = event.getGuestList();

// Loops through the list to get all the guests and logs their email addresses.
for (const guest of guestList){
  console.log(guest.getEmail());
}
```
@return an array of the guests*/getGuestList():CalendarApp.EventGuest[];
/**Gets the guests for the event, potentially including the event owners.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 25th, 2023 that takes place
// between 5:00 PM and 5:25 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 25,2023 17:00:00'), new Date('Feb 25,2023 17:25:00'))[0];

// Gets the guests list for the event, including the owner of the event.
const guestList = event.getGuestList(true);

// Loops through the list to get all the guests and logs it.
for (const guest of guestList) {
  console.log(guest.getEmail());
}
```
@param includeOwner whether to include the owners as a guest
@return an array of the guests*/getGuestList(includeOwner:boolean):CalendarApp.EventGuest[];
/**Gets the unique iCalUID of the event. Note that the iCalUID and the event [`id`](/calendar/v3/reference/events#resource-representations) used by the
[Calendar v3 API](/calendar/v3/reference/) and [Calendar advanced service](/apps-script/advanced/calendar) are not identical and
cannot be used interchangeably. One difference in their semantics is that in recurring events
all occurrences of one event have different `ids` while they all share the same iCalUIDs.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for January 5th, 2023 that takes place
// between 9:00 AM and 9:25 AM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Jan 05, 2023 09:00:00'), new Date('Jan 05, 2023 09:25:00'))[0];

// Gets the ID of the event and logs it.
console.log(event.getId());
```
@return the iCalUID of the event*/getId():string;
/**Gets the date the event was last updated.

```
// Opens the calendar by its ID. You must have view access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 1st, 2023 that takes place
between 4:00 PM and 5:00 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 01, 2023 16:00:00'), new Date('Feb 01, 2023 17:00:00'))[0];

// Gets the date the event was last updated and logs it.
const eventUpdatedDate = event.getLastUpdated();
console.log(eventUpdatedDate);
```
@return the last updated date*/getLastUpdated():Date;
/**Gets the location of the event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 1st, 2023 that takes place
// between 4:10 PM and 4:25 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 01, 2023 16:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];

if (event) {
 // If an event exists within the given time frame, sets the location of the event to Mumbai.
 event.setLocation('Mumbai');

 // Gets the location of the event and logs it.
 const eventLocation = event.getLocation();
 console.log(eventLocation);
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return the event location*/getLocation():string;
/**Gets the event status (such as attending or invited) of the effective user. Always returns
`GuestStatus.OWNER` if the effective user is the owner of the event.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.');

// Gets the first event from the calendar for February 1st, 2023 that takes place
// between 4:10 PM and 4:25 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 01, 2023 16:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];

if (event) {
 // If an event exists within the given time frame, gets the event status of
 // the effective user and logs it.
 const myStatus = event.getMyStatus();
 console.log(myStatus.toString());
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return the status*/getMyStatus():CalendarApp.GuestStatus;
/**Get the ID of the calendar where this event was originally created.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 25th, 2023 that takes place
// between 4:00 PM and 4:25 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 25,2023 16:00:00'), new Date('Feb 25,2023 16:25:00'))[0];

if (event) {
 // If an event exists within the given time frame, gets the ID of the calendar where the
 // event was originally created and logs it.
 const calendarId = event.getOriginalCalendarId();
 console.log(calendarId);
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return the ID of the original calendar*/getOriginalCalendarId():string;
/**Gets the minute values for all pop-up reminders for the event.

```
  // Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 4th, 2023 that takes place
// between 5:05 PM and 5:35 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 04, 2023 17:05:00'), new Date('Feb 04, 2023 17:35:00'))[0];

if (event) {
 // If an event exists within the given time frame, adds two pop-up reminders to the event.
 // The first reminder pops up 5 minutes before the event starts and the second reminder
 // pops up 3 minutes before the event starts.
 event.addPopupReminder(3);
 event.addPopupReminder(5);

 // Gets the minute values for all pop-up reminders for the event and logs it.
 const popUpReminder = event.getPopupReminders();
 console.log(popUpReminder);
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return an array in which each value corresponds to the number of minutes before the event that
    a reminder triggers*/getPopupReminders():Integer[];
/**Gets the minute values for all SMS reminders for the event.
@return an array in which each value corresponds to the number of minutes before the event that
    a reminder triggers*/getSmsReminders():Integer[];
/**Gets a tag value of the event.
@param key the key
@return the tag value*/getTag(key:string):string;
/**Gets the title of the event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for January 31st, 2023 that takes place
// between 9:05 AM and 9:15 AM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Jan 31, 2023 09:05:00'), new Date('Jan 31, 2023 09:15:00'))[0];

if (event) {
 // If an event exists within the given time frame, logs the title of the event.
 console.log(event.getTitle());
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return the title*/getTitle():string;
/**Gets the visibility of the event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 1st, 2023 that takes place
// between 4:10 PM and 4:25 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 01, 2023 16:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];

if (event) {
 // If an event exists within the given time frame, gets the visibility of the event
 // and logs it.
 const eventVisibility = event.getVisibility();
 console.log(eventVisibility.toString());
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return the visibility value*/getVisibility():CalendarApp.Visibility;
/**Determines whether guests can invite other guests.

```
// Opens the calendar by its ID. You must have view access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 1st, 2023 that takes place
// between 9:35 AM and 9:40 AM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 01, 2023 09:35:00'), new Date('Feb 01, 2023 09:40:00'))[0];

if (event) {
 // If an event exists within the given time frame, determines whether guests can invite
 // other guests and logs it.
 console.log(event.guestsCanInviteOthers());
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return `true` if guests can invite others; `false` if not*/guestsCanInviteOthers():boolean;
/**Determines whether guests can modify the event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 1st, 2023 that takes place
// between 9:35 AM and 9:40 AM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 01, 2023 09:35:00'), new Date('Feb 01, 2023 09:40:00'))[0];

if (event) {
 // If an event exists within the given time frame, sets the event so that guests can't
 // modify it.
 event.setGuestsCanModify(false);

 // Determines whether guests can modify the event and logs it.
 console.log(event.guestsCanModify());
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return `true` if guests can modify the event; `false` if not*/guestsCanModify():boolean;
/**Determines whether guests can see other guests.

```
// Opens the calendar by its ID. You must have view access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 1st, 2023 that takes place
// between 9:35 AM and 9:40 AM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 01, 2023 09:35:00'), new Date('Feb 01, 2023 09:40:00'))[0];

if (event) {
 // If an event exists within the given time frame, determines whether guests can see other
 // guests and logs it.
 console.log(event.guestsCanSeeGuests());
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return `true` if guests can see other guests; `false` if not*/guestsCanSeeGuests():boolean;
/**Determines whether you're the owner of the event.

```
// Opens the calendar by its ID. You must have view access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for January 31st, 2023 that takes place
// between 9:05 AM and 9:15 AM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Jan 31, 2023 09:05:00'), new Date('Jan 31, 2023 09:15:00'))[0];

if (event) {
 // If an event exists within the given time frame, determines whether you're the owner
 // of the event and logs it.
 console.log(event.isOwnedByMe());
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return `true` if the event is owned by the effective user; `false` if not*/isOwnedByMe():boolean;
/**Removes all reminders from the event.

```
// Opens the calendar by its ID. You must have edit access to the calendar
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 1st, 2023 that takes place
// between 4:10 PM and 4:25 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 1,2023 16:10:00'), new Date('Feb 1,2023 16:25:00'))[0];

if (event) {
 // If an event exists within the given time frame, removes all reminders from the event.
 event.removeAllReminders();
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return this [`CalendarEventSeries`](https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html) for chaining*/removeAllReminders():CalendarApp.CalendarEventSeries;
/**Removes a guest from the event.

```
// Example 1: Remove a guest from one event
function removeGuestFromEvent() {
  // Replace the below values with your own
  let attendeeEmail = 'user@example.com'; // Email address of the person you need to remove
  let calendarId = 'calendar_123@group.calendar.google.com'; // ID of calendar containing event
  let eventId = '123abc'; // ID of event instance

  let calendar = CalendarApp.getCalendarById(calendarId);
  if (calendar === null) {
    // Calendar not found
    console.log('Calendar not found', calendarId);
    return;
    }
  let event = calendar.getEventById(eventId);
  if (event === null) {
    // Event not found
    console.log('Event not found', eventId);
    return;
    }
  event.removeGuest(attendeeEmail);
  }

// Example 2: Remove a guest from all events on a calendar within a specified timeframe
function removeGuestFromAllEvents(){
// Replace the following values with your own
  let attendeeEmail = 'user@example.com'; // Email address of the person you need to remove
  let calendarId = 'calendar_123@group.calendar.google.com'; // ID of calendar with the events
  let startDate = new Date("YYYY-MM-DD"); // The first date to remove the guest from the events
  let endDate = new Date("YYYY-MM-DD"); // The last date to remove the attendee from the events

  let calendar = CalendarApp.getCalendarById(calendarId);
    if (calendar === null) {
    // Calendar not found
    console.log('Calendar not found', calendarId);
    return;
  }
  // Get the events within the specified timeframe
  let calEvents = calendar.getEvents(startDate,endDate);
  console.log(calEvents.length); // Checks how many events are found
  // Loop through all events and remove the attendee from each of them
  for (var i = 0; i < calEvents.length; i++) {
  let event = calEvents[i];
  event.removeGuest(attendeeEmail);
  }
}
```
@param email the email address of the guest
@return this [`CalendarEventSeries`](https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html) for chaining*/removeGuest(email:string):CalendarApp.CalendarEventSeries;
/**Resets the reminders using the calendar's default settings.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 1st, 2023 that takes place
// between 4:10 PM and 4:25 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 1, 2023 16:10:00'), new Date('Feb 1, 2023 16:25:00'))[0];

if (event) {
 // If an event exists within the given time frame, resets the reminders using the calendar's
 // default settings.
 event.resetRemindersToDefault();
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return this [`CalendarEventSeries`](https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html) for chaining*/resetRemindersToDefault():CalendarApp.CalendarEventSeries;
/**Sets whether non-guests can add themselves to the event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 15th, 2023 that takes place
// between 3:30 PM and 4:30 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 15, 2023 15:30:00'), new Date('Feb 15, 2023 16:30:00'))[0];

if (event) {
 // If an event exists within the given time frame, sets the event so that non-guests
 // can't add themselves to the event.
 event.setAnyoneCanAddSelf(false);
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@param anyoneCanAddSelf whether anyone can invite themselves
@return this [`CalendarEventSeries`](https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html) for chaining*/setAnyoneCanAddSelf(anyoneCanAddSelf:boolean):CalendarApp.CalendarEventSeries;
/**Sets the color of the calendar event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 1st, 2023 that takes place
// between 4:10 PM and 4:25 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 01, 2023 16:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];

if (event) {
 // If an event exists within the given time frame, sets the color of the calendar event to
 // green.
 event.setColor(CalendarApp.EventColor.GREEN);
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@param color An integer color index as a string, or a value from [`CalendarApp.EventColor`](https://developers.google.com/apps-script/reference/calendar/event-color.html).
@return This calendar event, for chaining.*/setColor(color:string):CalendarApp.CalendarEventSeries;
/**Sets the description of the event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 4th, 2023 that takes place
// between 5:05 PM and 5:35 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 04, 2023 17:05:00'), new Date('Feb 04, 2023 17:35:00'))[0];

if (event) {
 // If an event exists within the given time frame, sets the description of the event to
 // 'Meeting.'
 event.setDescription('Meeting');
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@param description the new description
@return this [`CalendarEventSeries`](https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html) for chaining*/setDescription(description:string):CalendarApp.CalendarEventSeries;
/**Sets whether guests can invite other guests.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own. You must have edit access to the calendar.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 1st, 2023 that takes place
// between 9:35 AM and 9:40 AM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 01, 2023 09:35:00'), new Date('Feb 01, 2023 09:40:00'))[0];

if (event) {
 // If an event exists within the given time frame, sets the event so that guests can invite
 // other guests.
 event.setGuestsCanInviteOthers(true);
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@param guestsCanInviteOthers whether guests can invite others
@return this [`CalendarEventSeries`](https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html) for chaining*/setGuestsCanInviteOthers(guestsCanInviteOthers:boolean):CalendarApp.CalendarEventSeries;
/**Sets whether guests can modify the event.
@param guestsCanModify whether guests can modify the event
@return this [`CalendarEventSeries`](https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html) for chaining*/setGuestsCanModify(guestsCanModify:boolean):CalendarApp.CalendarEventSeries;
/**Sets whether guests can see other guests.
@param guestsCanSeeGuests whether guests can see others
@return this [`CalendarEventSeries`](https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html) for chaining*/setGuestsCanSeeGuests(guestsCanSeeGuests:boolean):CalendarApp.CalendarEventSeries;
/**Sets the location of the event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 1st, 2023 that takes place
// between 4:10 PM and 4:25 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 01, 2023 16:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];

if (event) {
 // If an event exists within the given time frame, sets the location of the event to Noida.
 event.setLocation('Noida');
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@param location the new location
@return this [`CalendarEventSeries`](https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html) for chaining*/setLocation(location:string):CalendarApp.CalendarEventSeries;
/**Sets the event status (such as attending or invited) of the effective user.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 1st, 2023 that takes place
// between 4:10 PM and 4:25 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 01, 2023 16:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];

if (event) {
 // If an event exists within the given time frame, sets the event status for the current user
 to maybe.
 event.setMyStatus(CalendarApp.GuestStatus.MAYBE);
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@param status the new status
@return this [`CalendarEventSeries`](https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html) for chaining*/setMyStatus(status:CalendarApp.GuestStatus):CalendarApp.CalendarEventSeries;
/**Sets the recurrence rules for an all-day event series. Applying this method changes a regular
event series into an all-day event series.

```
// Sets the events in a series to take place every Wednesday in 2013.
var eventSeries = CalendarApp.getDefaultCalendar().getEventSeriesById('123456789@google.com');
var startDate = new Date('January 2, 2013 03:00:00 PM EST');
var recurrence = CalendarApp.newRecurrence().addWeeklyRule()
    .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
    .until(new Date('January 1, 2014'));
eventSeries.setRecurrence(recurrence, startDate);
```
@param recurrence the recurrence rules to use
@param startDate the date of the first event in the series (only the day is used; the time is
    ignored)
@return this CalendarEventSeries for chaining*/setRecurrence(recurrence:CalendarApp.EventRecurrence,startDate:Date):CalendarApp.CalendarEventSeries;
/**Sets the recurrence rules for this event series. Applying this method changes an all-day event
series into a regular event series.

```
// Sets the events in a series to take place from 3pm to 4pm every Tuesday and Thursday in
// 2013.
var eventSeries = CalendarApp.getDefaultCalendar().getEventSeriesById('123456789@google.com');
var startTime = new Date('January 1, 2013 03:00:00 PM EST');
var endTime = new Date('January 1, 2013 04:00:00 PM EST');
var recurrence = CalendarApp.newRecurrence().addWeeklyRule()
     .onlyOnWeekdays([CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY])
     .until(new Date('January 1, 2014'));
eventSeries.setRecurrence(recurrence, startTime, endTime);
```
@param recurrence the recurrence rules to use
@param startTime the date and time when the first event in the series starts
@param endTime the date and time when the first event in the series ends
@return this CalendarEventSeries for chaining*/setRecurrence(recurrence:CalendarApp.EventRecurrence,startTime:Date,endTime:Date):CalendarApp.CalendarEventSeries;
/**Sets a key/value tag on the event, for storing custom metadata.
@param key the tag key
@param value the tag value
@return this [`CalendarEventSeries`](https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html) for chaining*/setTag(key:string,value:string):CalendarApp.CalendarEventSeries;
/**Sets the title of the event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for January 31st, 2023 that takes place
// between 9:05 AM and 9:15 AM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Jan 31, 2023 09:05:00'), new Date('Jan 31, 2023 09:15:00'))[0];

if (event) {
 // If an event exists within the given time frame, changes its title to Event1.
 event.setTitle('Event1');
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@param title the new title
@return this [`CalendarEventSeries`](https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html) for chaining*/setTitle(title:string):CalendarApp.CalendarEventSeries;
/**Sets the visibility of the event.
@return this [`CalendarEventSeries`](https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html) for chaining*/setVisibility(visibility:CalendarApp.Visibility):CalendarApp.CalendarEventSeries;}interface CalendarEvent{
/**Adds a new email reminder to the event. The reminder must be at least 5 minutes, and at most 4
weeks (40320 minutes), before the event.

```
// Gets an event by its ID. For an event series, use getEventSeriesById(iCalId) instead.
// TODO(developer): Replace the string with the event ID that you want to get.
const event = CalendarApp.getEventById('abc123456');

// Adds an email notification for 15 minutes before the event.
event.addEmailReminder(15);
```
@param minutesBefore the number of minutes before the event
@return this [`CalendarEvent`](https://developers.google.com/apps-script/reference/calendar/calendar-event.html) for chaining*/addEmailReminder(minutesBefore:Integer):CalendarApp.CalendarEvent;
/**Adds a guest to the event.

```
// Example 1: Add a guest to one event
function addAttendeeToEvent() {
  // Replace the below values with your own
  let attendeeEmail = 'user@example.com'; // Email address of the person you need to add
  let calendarId = 'calendar_123@group.calendar.google.com'; // ID of calendar containing event
  let eventId = '123abc'; // ID of event instance

  let calendar = CalendarApp.getCalendarById(calendarId);
  if (calendar === null) {
    // Calendar not found
    console.log('Calendar not found', calendarId);
    return;
    }
  let event = calendar.getEventById(eventId);
  if (event === null) {
    // Event not found
    console.log('Event not found', eventId);
    return;
    }
  event.addGuest(attendeeEmail);
  }

// Example 2: Add a guest to all events on a calendar within a specified timeframe
function addAttendeeToAllEvents(){
// Replace the following values with your own
  let attendeeEmail = 'user@example.com'; // Email address of the person you need to add
  let calendarId = 'calendar_123@group.calendar.google.com'; // ID of calendar with the events
  let startDate = new Date("YYYY-MM-DD"); // The first date to add the guest to the events
  let endDate = new Date("YYYY-MM-DD"); // The last date to add the guest to the events

  let calendar = CalendarApp.getCalendarById(calendarId);
    if (calendar === null) {
    // Calendar not found
    console.log('Calendar not found', calendarId);
    return;
  }
  // Get the events within the specified timeframe
  let calEvents = calendar.getEvents(startDate,endDate);
  console.log(calEvents.length); // Checks how many events are found
  // Loop through all events and add the attendee to each of them
  for (var i = 0; i < calEvents.length; i++) {
  let event = calEvents[i];
  event.addGuest(attendeeEmail);
  }
}
```
@param email The email address of the guest.
@return This [`CalendarEvent`](https://developers.google.com/apps-script/reference/calendar/calendar-event.html) for chaining.*/addGuest(email:string):CalendarApp.CalendarEvent;
/**Adds a new pop-up notification to the event. The notification must be at least 5 minutes, and
at most 4 weeks (40320 minutes), before the event.

```
// Gets an event by its ID. For an event series, use getEventSeriesById(iCalId) instead.
// TODO(developer): Replace the string with the event ID that you want to get.
const event = CalendarApp.getEventById('abc123456');

// Adds a pop-up notification for 15 minutes before the event.
event.addPopupReminder(15);
```
@param minutesBefore the number of minutes before the event
@return this [`CalendarEvent`](https://developers.google.com/apps-script/reference/calendar/calendar-event.html) for chaining*/addPopupReminder(minutesBefore:Integer):CalendarApp.CalendarEvent;
/**Adds a new SMS reminder to the event. The reminder must be at least 5 minutes, and at most 4
weeks (40320 minutes), before the event.
@param minutesBefore the number of minutes before the event
@return this [`CalendarEvent`](https://developers.google.com/apps-script/reference/calendar/calendar-event.html) for chaining*/addSmsReminder(minutesBefore:Integer):CalendarApp.CalendarEvent;
/**Determines whether people can add themselves as guests to a Calendar event.

```
// Gets an event by its ID. For an event series, use getEventSeriesById(iCalId) instead.
// TODO(developer): Replace the string with the event ID that you want to get.
const event = CalendarApp.getEventById('abc123456');

// Determines whether people can add themselves as guests to the event and logs it.
console.log(event.anyoneCanAddSelf());
```
@return `true` if non-guests can add themselves to the event; `false` if not*/anyoneCanAddSelf():boolean;
/**Deletes a Calendar event.

```
// Gets an event by its ID.
// TODO(developer): Replace the string with the ID of the event that you want to delete.
const event = CalendarApp.getEventById('abc123456');

// Deletes the event.
event.deleteEvent();
```*/deleteEvent():void;
/**Deletes a key/value tag from the event.
@param key the tag key
@return this [`CalendarEvent`](https://developers.google.com/apps-script/reference/calendar/calendar-event.html) for chaining*/deleteTag(key:string):CalendarApp.CalendarEvent;
/**Gets the date on which this all-day calendar event ends. (If this is not an all-day event, then
this method throws an exception.) The returned `Date` represents midnight at the
beginning of the day after the event ends _in the script's time zone_. To use the
calendar's time zone instead, call [`getEndTime()`](https://developers.google.com/apps-script/reference/calendar/calendar-event.html#getEndTime()).

```
// Gets the user's default calendar. To get a different calendar, use getCalendarById()
// instead.
const calendar = CalendarApp.getDefaultCalendar();

// Creates an event named 'My all-day event' for May 16, 2023.
const event = calendar.createAllDayEvent('My all-day event', new Date('May 16, 2023'));

// Gets the event's end date and logs it.
const endDate = event.getAllDayEndDate();
console.log(endDate);
```
@return this all-day calendar event's end date*/getAllDayEndDate():Date;
/**Gets the date on which this all-day calendar event begins. (If this is not an all-day event,
then this method throws an exception.) The returned `Date` represents midnight at the
beginning of the day on which the event starts _in the script's time zone_. To use the
calendar's time zone instead, call [`getStartTime()`](https://developers.google.com/apps-script/reference/calendar/calendar-event.html#getStartTime()).

```
// Gets the user's default calendar. To get a different calendar, use getCalendarById()
// instead.
const calendar = CalendarApp.getDefaultCalendar();

// Creates an event named 'My all-day event' for May 16, 2023.
const event = calendar.createAllDayEvent('My all-day event', new Date('May 16, 2023'));

// Gets the event's start date and logs it.
const startDate = event.getAllDayStartDate();
console.log(startDate);
```
@return this all-day calendar event's start date*/getAllDayStartDate():Date;
/**Gets all keys for tags that have been set on the event.
@return an array of string keys*/getAllTagKeys():string[];
/**Returns the color of the calendar event.

```
// Gets an event by its ID. For an event series, use getEventSeriesById(iCalId) instead.
// TODO(developer): Replace the string with the event ID that you want to get.
const event = CalendarApp.getEventById('abc123456');

// Gets the color of the calendar event and logs it.
const eventColor = event.getColor();
console.log(eventColor);
```
@return The string representation of the event color, as an index (1-11) of values from [`CalendarApp.EventColor`](https://developers.google.com/apps-script/reference/calendar/event-color.html).*/getColor():string;
/**Gets the creators of an event.

```
// Gets an event by its ID. For an event series, use getEventSeriesById(iCalId) instead.
// TODO(developer): Replace the string with the event ID that you want to get.
const event = CalendarApp.getEventById('abc123456');

// Gets a list of the creators of the event and logs it.
console.log(event.getCreators());
```
@return the email addresses of the event's creators*/getCreators():string[];
/**Gets the date the event was created. You must have access to the calendar.

```
// Opens the calendar by using its ID.
// To get the user's default calendar use CalendarApp.getDefault() instead.
// TODO(developer): Replace the calendar ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 1st, 2023 that takes place
// between 8:10 AM and 4:25 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 01, 2023 08:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];

if (event) {
 // If an event exists within the given time frame, gets the date that the event
 // was created and logs it.
 const eventCreated = event.getDateCreated();
 console.log(eventCreated);
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return the date of creation*/getDateCreated():Date;
/**Gets the description of the event. You must have edit access to the calendar.

```
// Opens the calendar by its ID.
// To get the user's default calendar use CalendarApp.getDefault() instead.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 4th, 2023 that takes place
between 4:00 PM and 5:00 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 04, 2023 16:00:00'), new Date('Feb 04, 2023 17:00:00'))[0];

if (event) {
 // If an event exists within the given time frame, sets the description of the event.
 event.setDescription('Important meeting');

 // Gets the description of the event and logs it.
 const description = event.getDescription();
 console.log(description);
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return the description*/getDescription():string;
/**Gets the minute values for all email reminders for the event. You must have edit access to the
calendar.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 4th, 2023 that takes place
between 5:00 PM and 6:00 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 04, 2023 15:00:00'), new Date('Feb 04, 2023 18:00:00'))[0];

if (event) {
 // If an event exists within the given time frame, adds email reminders for the user to be
 // sent at 4 and 7 minutes before the event.
 event.addEmailReminder(4);
 event.addEmailReminder(7);

 // Gets the minute values for all email reminders that are set up for the user for this event
 // and logs it.
 const emailReminder = event.getEmailReminders();
 console.log(emailReminder);
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return an array in which each value corresponds to the number of minutes before the event that
    a reminder triggers*/getEmailReminders():Integer[];
/**Gets the date and time at which this calendar event ends. You must have access to the calendar.
For non–all-day events, this is the instant in time at which the event was defined to
end. For all-day events, which only store an end date (not a date and time), this is midnight
at the beginning of the day after the event ends _in the calendar's time zone_. This
allows meaningful comparison of end times for all types of events; however, it does not
necessarily preserve the original day-of-year unmodified.

For [all-day events](https://developers.google.com/apps-script/reference/calendar/calendar-event.html#isAllDayEvent()), [`getAllDayEndDate()`](https://developers.google.com/apps-script/reference/calendar/calendar-event.html#getAllDayEndDate()) should almost
always be called in preference to this method.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 1st, 2023 that takes place
// between 4:00 PM and 5:00 PM.
const event =
  calendar.getEvents(new Date('Feb 01, 2023 16:00:00'), new Date('Feb 01, 2023 17:00:00'))[0];

if (event) {
 // If an event exists within the given time frame, gets the date and time at which the
 // event ends and logs it.
 console.log(event.getEndTime());
} else {
 // If no event exists within the given time frame, logs that info to the console.
 console.log('No events exist for the specified range');
}
```
@return this calendar event's end time*/getEndTime():Date;
/**Gets the series of recurring events that this event belongs to. You must have access to the
calendar. A [`CalendarEventSeries`](https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html) object is returned even if this event doesn't belong to
a series, so that you can add new recurrence settings.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 18th, 2023 that takes place between
// 1:00 PM and 2:00 PM.
const event =
  calendar.getEvents(new Date('Feb 18, 2023 13:00:00'), new Date('Feb 18, 2023 14:00:00'))[0];

if (event) {
 // If an event exists within the given time frame, gets the event series for the event
 // and sets the color to pale green.
 event.getEventSeries().setColor(CalendarApp.EventColor.PALE_GREEN);
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return the event series this event belongs to, or a new event series if it does not yet belong
    to a series*/getEventSeries():CalendarApp.CalendarEventSeries;
/**Get the [`EventType`](https://developers.google.com/apps-script/reference/calendar/event-type.html) of this event.
@return The event type.*/getEventType():CalendarApp.EventType;
/**Gets a guest by email address.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 25th, 2023 that takes place
// between 5:00 PM and 5:25 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 25,2023 17:00:00'), new Date('Feb 25,2023 17:25:00'))[0];

// Gets a guest by email address.
const guestEmailId = event.getGuestByEmail('alex@example.com');

// If the email address corresponds to an event guest, logs the email address.
if (guestEmailId) {
  console.log(guestEmailId.getEmail());
}
```
@param email the address of the guest
@return the guest, or null if the email address does not correspond to a guest*/getGuestByEmail(email:string):CalendarApp.EventGuest;
/**Gets the guests for the event, not including the event owner.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 25th, 2023 that takes place
// between 5:00 PM and 5:25 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 25,2023 17:00:00'), new Date('Feb 25,2023 17:25:00'))[0];

// Adds two guests to the event by using their email addresses.
event.addGuest('alex@example.com');
event.addGuest('cruz@example.com');

// Gets the guests list for the event.
const guestList = event.getGuestList();

// Loops through the list to get all the guests and logs their email addresses.
for (const guest of guestList){
  console.log(guest.getEmail());
}
```
@return an array of the guests*/getGuestList():CalendarApp.EventGuest[];
/**Gets the guests for the event, potentially including the event owners.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 25th, 2023 that takes place
// between 5:00 PM and 5:25 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 25,2023 17:00:00'), new Date('Feb 25,2023 17:25:00'))[0];

// Gets the guests list for the event, including the owner of the event.
const guestList = event.getGuestList(true);

// Loops through the list to get all the guests and logs it.
for (const guest of guestList) {
  console.log(guest.getEmail());
}
```
@param includeOwner whether to include the owners as a guest
@return an array of the guests*/getGuestList(includeOwner:boolean):CalendarApp.EventGuest[];
/**Gets the unique iCalUID of the event. Note that the iCalUID and the event [`id`](/calendar/v3/reference/events#resource-representations) used by the
[Calendar v3 API](/calendar/v3/reference/) and [Calendar advanced service](/apps-script/advanced/calendar) are not identical and
cannot be used interchangeably. One difference in their semantics is that in recurring events
all occurrences of one event have different `ids` while they all share the same iCalUIDs.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for January 5th, 2023 that takes place
// between 9:00 AM and 9:25 AM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Jan 05, 2023 09:00:00'), new Date('Jan 05, 2023 09:25:00'))[0];

// Gets the ID of the event and logs it.
console.log(event.getId());
```
@return the iCalUID of the event*/getId():string;
/**Gets the date the event was last updated.

```
// Opens the calendar by its ID. You must have view access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 1st, 2023 that takes place
between 4:00 PM and 5:00 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 01, 2023 16:00:00'), new Date('Feb 01, 2023 17:00:00'))[0];

// Gets the date the event was last updated and logs it.
const eventUpdatedDate = event.getLastUpdated();
console.log(eventUpdatedDate);
```
@return the last updated date*/getLastUpdated():Date;
/**Gets the location of the event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 1st, 2023 that takes place
// between 4:10 PM and 4:25 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 01, 2023 16:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];

if (event) {
 // If an event exists within the given time frame, sets the location of the event to Mumbai.
 event.setLocation('Mumbai');

 // Gets the location of the event and logs it.
 const eventLocation = event.getLocation();
 console.log(eventLocation);
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return the event location*/getLocation():string;
/**Gets the event status (such as attending or invited) of the effective user. Always returns
`GuestStatus.OWNER` if the effective user is the owner of the event.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.');

// Gets the first event from the calendar for February 1st, 2023 that takes place
// between 4:10 PM and 4:25 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 01, 2023 16:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];

if (event) {
 // If an event exists within the given time frame, gets the event status of
 // the effective user and logs it.
 const myStatus = event.getMyStatus();
 console.log(myStatus.toString());
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return the status*/getMyStatus():CalendarApp.GuestStatus;
/**Get the ID of the calendar where this event was originally created.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 25th, 2023 that takes place
// between 4:00 PM and 4:25 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 25,2023 16:00:00'), new Date('Feb 25,2023 16:25:00'))[0];

if (event) {
 // If an event exists within the given time frame, gets the ID of the calendar where the
 // event was originally created and logs it.
 const calendarId = event.getOriginalCalendarId();
 console.log(calendarId);
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return the ID of the original calendar*/getOriginalCalendarId():string;
/**Gets the minute values for all pop-up reminders for the event.

```
  // Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 4th, 2023 that takes place
// between 5:05 PM and 5:35 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 04, 2023 17:05:00'), new Date('Feb 04, 2023 17:35:00'))[0];

if (event) {
 // If an event exists within the given time frame, adds two pop-up reminders to the event.
 // The first reminder pops up 5 minutes before the event starts and the second reminder
 // pops up 3 minutes before the event starts.
 event.addPopupReminder(3);
 event.addPopupReminder(5);

 // Gets the minute values for all pop-up reminders for the event and logs it.
 const popUpReminder = event.getPopupReminders();
 console.log(popUpReminder);
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return an array in which each value corresponds to the number of minutes before the event that
    a reminder triggers*/getPopupReminders():Integer[];
/**Gets the minute values for all SMS reminders for the event.
@return an array in which each value corresponds to the number of minutes before the event that
    a reminder triggers*/getSmsReminders():Integer[];
/**Gets the date and time at which this calendar event begins. For non–all-day events, this
is the instant in time at which the event was defined to start. For all-day events, which only
store a start date (not a date and time), this is midnight at the beginning of the day on which
the event starts _in the calendar's time zone_. This allows meaningful comparison of
start times for all types of events; however, it is not necessarily preserve the original
day-of-year unmodified.

For [all-day events](https://developers.google.com/apps-script/reference/calendar/calendar-event.html#isAllDayEvent()), [`getAllDayStartDate()`](https://developers.google.com/apps-script/reference/calendar/calendar-event.html#getAllDayStartDate()) should
almost always be called in preference to this method.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 1st, 2023 that takes place
// between 4:10 PM and 4:25 PM.
const event =
  calendar.getEvents(new Date('Feb 01, 2023 16:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];

// Gets the date and time at which this calendar event begins and logs it.
const startTime = event.getStartTime();
console.log(startTime);
```
@return this calendar event's start time*/getStartTime():Date;
/**Gets a tag value of the event.
@param key the key
@return the tag value*/getTag(key:string):string;
/**Gets the title of the event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for January 31st, 2023 that takes place
// between 9:05 AM and 9:15 AM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Jan 31, 2023 09:05:00'), new Date('Jan 31, 2023 09:15:00'))[0];

if (event) {
 // If an event exists within the given time frame, logs the title of the event.
 console.log(event.getTitle());
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return the title*/getTitle():string;
/**Gets the visibility of the event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 1st, 2023 that takes place
// between 4:10 PM and 4:25 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 01, 2023 16:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];

if (event) {
 // If an event exists within the given time frame, gets the visibility of the event
 // and logs it.
 const eventVisibility = event.getVisibility();
 console.log(eventVisibility.toString());
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return the visibility value*/getVisibility():CalendarApp.Visibility;
/**Determines whether guests can invite other guests.

```
// Opens the calendar by its ID. You must have view access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 1st, 2023 that takes place
// between 9:35 AM and 9:40 AM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 01, 2023 09:35:00'), new Date('Feb 01, 2023 09:40:00'))[0];

if (event) {
 // If an event exists within the given time frame, determines whether guests can invite
 // other guests and logs it.
 console.log(event.guestsCanInviteOthers());
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return `true` if guests can invite others; `false` if not*/guestsCanInviteOthers():boolean;
/**Determines whether guests can modify the event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 1st, 2023 that takes place
// between 9:35 AM and 9:40 AM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 01, 2023 09:35:00'), new Date('Feb 01, 2023 09:40:00'))[0];

if (event) {
 // If an event exists within the given time frame, sets the event so that guests can't
 // modify it.
 event.setGuestsCanModify(false);

 // Determines whether guests can modify the event and logs it.
 console.log(event.guestsCanModify());
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return `true` if guests can modify the event; `false` if not*/guestsCanModify():boolean;
/**Determines whether guests can see other guests.

```
// Opens the calendar by its ID. You must have view access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 1st, 2023 that takes place
// between 9:35 AM and 9:40 AM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 01, 2023 09:35:00'), new Date('Feb 01, 2023 09:40:00'))[0];

if (event) {
 // If an event exists within the given time frame, determines whether guests can see other
 // guests and logs it.
 console.log(event.guestsCanSeeGuests());
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return `true` if guests can see other guests; `false` if not*/guestsCanSeeGuests():boolean;
/**Determines whether this is an all-day event.

```
// Opens the calendar by its ID. You must have view access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for January 31st, 2023 that takes place
// between 9:05 AM and 9:15 AM.
const event =
  calendar.getEvents(new Date('Jan 31, 2023 09:05:00'), new Date('Jan 31, 2023 09:15:00'))[0];

// Determines whether this event is an all-day event and logs it.
console.log(event.isAllDayEvent());
```
@return `true` if the event is all-day; `false` if not*/isAllDayEvent():boolean;
/**Determines whether you're the owner of the event.

```
// Opens the calendar by its ID. You must have view access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for January 31st, 2023 that takes place
// between 9:05 AM and 9:15 AM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Jan 31, 2023 09:05:00'), new Date('Jan 31, 2023 09:15:00'))[0];

if (event) {
 // If an event exists within the given time frame, determines whether you're the owner
 // of the event and logs it.
 console.log(event.isOwnedByMe());
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return `true` if the event is owned by the effective user; `false` if not*/isOwnedByMe():boolean;
/**Determines whether the event is part of an event series.

```
// Opens the calendar by its ID. You must have view access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for Januart 31st, 2023 that takes place
// between 9:00 AM and 10:00 AM.
const event =
  calendar.getEvents(new Date('Jan 31, 2023 09:00:00'), new Date('Jan 31, 2023 10:00:00'))[0];

if (event) {
 // If an event exists within the given time frame, determines whether the event is part of an
 // event series and logs it.
 console.log(event.isRecurringEvent());
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return `true` if the event is part of an event series; `false` if not*/isRecurringEvent():boolean;
/**Removes all reminders from the event.

```
// Opens the calendar by its ID. You must have edit access to the calendar
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 1st, 2023 that takes place
// between 4:10 PM and 4:25 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 1,2023 16:10:00'), new Date('Feb 1,2023 16:25:00'))[0];

if (event) {
 // If an event exists within the given time frame, removes all reminders from the event.
 event.removeAllReminders();
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return this [`CalendarEvent`](https://developers.google.com/apps-script/reference/calendar/calendar-event.html) for chaining*/removeAllReminders():CalendarApp.CalendarEvent;
/**Removes a guest from the event.

```
// Example 1: Remove a guest from one event
function removeGuestFromEvent() {
  // Replace the below values with your own
  let attendeeEmail = 'user@example.com'; // Email address of the person you need to remove
  let calendarId = 'calendar_123@group.calendar.google.com'; // ID of calendar containing event
  let eventId = '123abc'; // ID of event instance

  let calendar = CalendarApp.getCalendarById(calendarId);
  if (calendar === null) {
    // Calendar not found
    console.log('Calendar not found', calendarId);
    return;
    }
  let event = calendar.getEventById(eventId);
  if (event === null) {
    // Event not found
    console.log('Event not found', eventId);
    return;
    }
  event.removeGuest(attendeeEmail);
  }

// Example 2: Remove a guest from all events on a calendar within a specified timeframe
function removeGuestFromAllEvents(){
// Replace the following values with your own
  let attendeeEmail = 'user@example.com'; // Email address of the person you need to remove
  let calendarId = 'calendar_123@group.calendar.google.com'; // ID of calendar with the events
  let startDate = new Date("YYYY-MM-DD"); // The first date to remove the guest from the events
  let endDate = new Date("YYYY-MM-DD"); // The last date to remove the attendee from the events

  let calendar = CalendarApp.getCalendarById(calendarId);
    if (calendar === null) {
    // Calendar not found
    console.log('Calendar not found', calendarId);
    return;
  }
  // Get the events within the specified timeframe
  let calEvents = calendar.getEvents(startDate,endDate);
  console.log(calEvents.length); // Checks how many events are found
  // Loop through all events and remove the attendee from each of them
  for (var i = 0; i < calEvents.length; i++) {
  let event = calEvents[i];
  event.removeGuest(attendeeEmail);
  }
}
```
@param email the email address of the guest
@return this [`CalendarEvent`](https://developers.google.com/apps-script/reference/calendar/calendar-event.html) for chaining*/removeGuest(email:string):CalendarApp.CalendarEvent;
/**Resets the reminders using the calendar's default settings.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 1st, 2023 that takes place
// between 4:10 PM and 4:25 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 1, 2023 16:10:00'), new Date('Feb 1, 2023 16:25:00'))[0];

if (event) {
 // If an event exists within the given time frame, resets the reminders using the calendar's
 // default settings.
 event.resetRemindersToDefault();
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@return this [`CalendarEvent`](https://developers.google.com/apps-script/reference/calendar/calendar-event.html) for chaining*/resetRemindersToDefault():CalendarApp.CalendarEvent;
/**Sets the date of the event. Applying this method changes a regular event into an all-day event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 17th, 2023 that takes place
// between 4:00 PM and 5:00 PM.
const event =
  calendar.getEvents(new Date('Feb 17, 2023 16:00:00'), new Date('Feb 17, 2023 17:00:00'))[0];

if (event) {
 // If an event exists within the given time frame, sets the date of the event and updates
 // it to an all-day event.
 event.setAllDayDate(new Date('Feb 17, 2023'));
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@param date the date for the event (the time is ignored)
@return this CalendarEvent for chaining*/setAllDayDate(date:Date):CalendarApp.CalendarEvent;
/**Sets the dates of the event. Applying this method changes a regular event into an all-day
event.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 18th, 2023 that takes place
// between 4:00 PM and 5:00 PM.
const event =
  calendar.getEvents(new Date('Feb 18, 2023 16:00:00'), new Date('Feb 18, 2023 17:00:00'))[0];

if (event) {
 // If an event exists within the given time frame, sets the event to be an all-day event from
 // Feb 18th, 2023 until Feb 25th, 2023. Applying this method changes a regular event into an
 // all-day event.
 event.setAllDayDates(new Date('Feb 18, 2023'), new Date('Feb 25, 2023'));
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@param startDate the date when the event starts (the time is ignored)
@param endDate the date when the event ends (the time is ignored)
@return this CalendarEvent for chaining*/setAllDayDates(startDate:Date,endDate:Date):CalendarApp.CalendarEvent;
/**Sets whether non-guests can add themselves to the event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 15th, 2023 that takes place
// between 3:30 PM and 4:30 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 15, 2023 15:30:00'), new Date('Feb 15, 2023 16:30:00'))[0];

if (event) {
 // If an event exists within the given time frame, sets the event so that non-guests
 // can't add themselves to the event.
 event.setAnyoneCanAddSelf(false);
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@param anyoneCanAddSelf whether anyone can invite themselves
@return this [`CalendarEvent`](https://developers.google.com/apps-script/reference/calendar/calendar-event.html) for chaining*/setAnyoneCanAddSelf(anyoneCanAddSelf:boolean):CalendarApp.CalendarEvent;
/**Sets the color of the calendar event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 1st, 2023 that takes place
// between 4:10 PM and 4:25 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 01, 2023 16:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];

if (event) {
 // If an event exists within the given time frame, sets the color of the calendar event to
 // green.
 event.setColor(CalendarApp.EventColor.GREEN);
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@param color An integer color index as a string, or a value from [`CalendarApp.EventColor`](https://developers.google.com/apps-script/reference/calendar/event-color.html).
@return This calendar event, for chaining.*/setColor(color:string):CalendarApp.CalendarEvent;
/**Sets the description of the event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 4th, 2023 that takes place
// between 5:05 PM and 5:35 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 04, 2023 17:05:00'), new Date('Feb 04, 2023 17:35:00'))[0];

if (event) {
 // If an event exists within the given time frame, sets the description of the event to
 // 'Meeting.'
 event.setDescription('Meeting');
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@param description the new description
@return this [`CalendarEvent`](https://developers.google.com/apps-script/reference/calendar/calendar-event.html) for chaining*/setDescription(description:string):CalendarApp.CalendarEvent;
/**Sets whether guests can invite other guests.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own. You must have edit access to the calendar.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 1st, 2023 that takes place
// between 9:35 AM and 9:40 AM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 01, 2023 09:35:00'), new Date('Feb 01, 2023 09:40:00'))[0];

if (event) {
 // If an event exists within the given time frame, sets the event so that guests can invite
 // other guests.
 event.setGuestsCanInviteOthers(true);
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@param guestsCanInviteOthers whether guests can invite others
@return this [`CalendarEvent`](https://developers.google.com/apps-script/reference/calendar/calendar-event.html) for chaining*/setGuestsCanInviteOthers(guestsCanInviteOthers:boolean):CalendarApp.CalendarEvent;
/**Sets whether guests can modify the event.
@param guestsCanModify whether guests can modify the event
@return this [`CalendarEvent`](https://developers.google.com/apps-script/reference/calendar/calendar-event.html) for chaining*/setGuestsCanModify(guestsCanModify:boolean):CalendarApp.CalendarEvent;
/**Sets whether guests can see other guests.
@param guestsCanSeeGuests whether guests can see others
@return this [`CalendarEvent`](https://developers.google.com/apps-script/reference/calendar/calendar-event.html) for chaining*/setGuestsCanSeeGuests(guestsCanSeeGuests:boolean):CalendarApp.CalendarEvent;
/**Sets the location of the event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 1st, 2023 that takes place
// between 4:10 PM and 4:25 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 01, 2023 16:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];

if (event) {
 // If an event exists within the given time frame, sets the location of the event to Noida.
 event.setLocation('Noida');
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@param location the new location
@return this [`CalendarEvent`](https://developers.google.com/apps-script/reference/calendar/calendar-event.html) for chaining*/setLocation(location:string):CalendarApp.CalendarEvent;
/**Sets the event status (such as attending or invited) of the effective user.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for February 1st, 2023 that takes place
// between 4:10 PM and 4:25 PM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Feb 01, 2023 16:10:00'), new Date('Feb 01, 2023 16:25:00'))[0];

if (event) {
 // If an event exists within the given time frame, sets the event status for the current user
 to maybe.
 event.setMyStatus(CalendarApp.GuestStatus.MAYBE);
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@param status the new status
@return this [`CalendarEvent`](https://developers.google.com/apps-script/reference/calendar/calendar-event.html) for chaining*/setMyStatus(status:CalendarApp.GuestStatus):CalendarApp.CalendarEvent;
/**Sets a key/value tag on the event, for storing custom metadata.
@param key the tag key
@param value the tag value
@return this [`CalendarEvent`](https://developers.google.com/apps-script/reference/calendar/calendar-event.html) for chaining*/setTag(key:string,value:string):CalendarApp.CalendarEvent;
/**Sets the dates and times for the start and end of the event. Applying this method changes an
all-day event into a regular event.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Declares a start time of 11:00 AM on February 20th, 2023 and an end time of 12:00 PM on
// February 20th, 2023.
const startTime = new Date('Feb 20,2023 11:00:00');
const endTime = new Date('Feb 20, 2023  12:00:00');

// Creates an all-day event on February 20th, 2023.
const event = calendar.createAllDayEvent('Meeting', new Date('Feb 20,2023'));

// Updates the all-day event to a regular event by setting a start and end time for the event.
event.setTime(startTime, endTime);
```
@param startTime the new start of the event
@param endTime the new end of the event
@return this CalendarEvent for chaining*/setTime(startTime:Date,endTime:Date):CalendarApp.CalendarEvent;
/**Sets the title of the event.

```
// Opens the calendar by its ID. You must have edit access to the calendar.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Gets the first event from the calendar for January 31st, 2023 that takes place
// between 9:05 AM and 9:15 AM.
// For an event series, use calendar.getEventSeriesById('abc123456@google.com');
// and replace the series ID with your own.
const event =
  calendar.getEvents(new Date('Jan 31, 2023 09:05:00'), new Date('Jan 31, 2023 09:15:00'))[0];

if (event) {
 // If an event exists within the given time frame, changes its title to Event1.
 event.setTitle('Event1');
} else {
 // If no event exists within the given time frame, logs that information to the console.
 console.log('No events exist for the specified range');
}
```
@param title the new title
@return this [`CalendarEvent`](https://developers.google.com/apps-script/reference/calendar/calendar-event.html) for chaining*/setTitle(title:string):CalendarApp.CalendarEvent;
/**Sets the visibility of the event.
@return this [`CalendarEvent`](https://developers.google.com/apps-script/reference/calendar/calendar-event.html) for chaining*/setVisibility(visibility:CalendarApp.Visibility):CalendarApp.CalendarEvent;}interface Calendar{
/**Creates a new all-day event.

```
// Creates an all-day event for the moon landing and logs the ID.
var event = CalendarApp.getDefaultCalendar().createAllDayEvent('Apollo 11 Landing',
    new Date('July 20, 1969'));
Logger.log('Event ID: ' + event.getId());
```
@param title The title of the event.
@param date The date of the event (only the day is used; the time is ignored).
@return The created event.*/createAllDayEvent(title:string,date:Date):CalendarApp.CalendarEvent;
/**Creates a new all-day event that can span multiple days.

```
// Creates an all-day event for the Woodstock festival (August 15th to 17th) and logs the ID.
var event = CalendarApp.getDefaultCalendar().createAllDayEvent('Woodstock Festival',
    new Date('August 15, 1969'),
    new Date('August 18, 1969'));
Logger.log('Event ID: ' + event.getId());
```
@param title The title of the event.
@param startDate The date when the event starts (only the day is used; the time is ignored).
@param endDate The date when the event ends (only the day is used; the time is ignored). The
    end date is exclusive.
@return The created event.*/createAllDayEvent(title:string,startDate:Date,endDate:Date):CalendarApp.CalendarEvent;
/**Creates a new all-day event that can span multiple days.

```
// Creates an all-day event for the Woodstock festival (August 15th to 17th) and logs the ID.
var event = CalendarApp.getDefaultCalendar().createAllDayEvent('Woodstock Festival',
    new Date('August 15, 1969'),
    new Date('August 18, 1969'),
    {location: 'Bethel, White Lake, New York, U.S.', sendInvites: true});
Logger.log('Event ID: ' + event.getId());
```
@param title The title of the event.
@param startDate The date when the event starts (only the day is used; the time is ignored).
@param endDate The date when the event ends (only the day is used; the time is ignored). The
    end date is exclusive.
@param options A JavaScript object that specifies advanced parameters, as listed below.
@return The created event.*/createAllDayEvent(title:string,startDate:Date,endDate:Date,options:Object):CalendarApp.CalendarEvent;
/**Creates a new all-day event.

```
// Creates an all-day event for the moon landing and logs the ID.
var event = CalendarApp.getDefaultCalendar().createAllDayEvent('Apollo 11 Landing',
    new Date('July 20, 1969'),
    {location: 'The Moon'});
Logger.log('Event ID: ' + event.getId());
```
@param title The title of the event.
@param date The date of the event (only the day is used; the time is ignored).
@param options A JavaScript object that specifies advanced parameters, as listed below.
@return The created event.*/createAllDayEvent(title:string,date:Date,options:Object):CalendarApp.CalendarEvent;
/**Creates a new all-day event series.

```
// Creates an event series for a no-meetings day, taking place every Wednesday in 2013.
var eventSeries = CalendarApp.getDefaultCalendar().createAllDayEventSeries('No Meetings',
    new Date('January 2, 2013 03:00:00 PM EST'),
    CalendarApp.newRecurrence().addWeeklyRule()
        .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
        .until(new Date('January 1, 2014')));
Logger.log('Event Series ID: ' + eventSeries.getId());
```
@param title the title of the events in the series
@param startDate the date of the first event in the series (only the day is used; the time is
    ignored)
@param recurrence the recurrence settings of the event series
@return the created event series*/createAllDayEventSeries(title:string,startDate:Date,recurrence:CalendarApp.EventRecurrence):CalendarApp.CalendarEventSeries;
/**Creates a new all-day event series.

```
// Creates an event series for a no-meetings day, taking place every Wednesday in 2013.
var eventSeries = CalendarApp.getDefaultCalendar().createAllDayEventSeries('No Meetings',
    new Date('January 2, 2013 03:00:00 PM EST'),
    CalendarApp.newRecurrence().addWeeklyRule()
        .onlyOnWeekday(CalendarApp.Weekday.WEDNESDAY)
        .until(new Date('January 1, 2014')),
    {guests: 'everyone@example.com'});
Logger.log('Event Series ID: ' + eventSeries.getId());
```
@param title the title of the events in the series
@param startDate the date of the first event in the series (only the day is used; the time is
    ignored)
@param recurrence the recurrence settings of the event series
@param options a JavaScript object that specifies advanced parameters, as listed below
@return the created event series*/createAllDayEventSeries(title:string,startDate:Date,recurrence:CalendarApp.EventRecurrence,options:Object):CalendarApp.CalendarEventSeries;
/**Creates a new event.

If no time zone is specified, the time values are interpreted in the context of the script's
time zone, which may be different than the calendar's time zone.

```
// Creates an event for the moon landing and logs the ID.
var event = CalendarApp.getDefaultCalendar().createEvent('Apollo 11 Landing',
    new Date('July 20, 1969 20:00:00 UTC'),
    new Date('July 21, 1969 21:00:00 UTC'));
Logger.log('Event ID: ' + event.getId());
```
@param title the title of the event
@param startTime the date and time when the event starts
@param endTime the date and time when the event ends
@return the created event*/createEvent(title:string,startTime:Date,endTime:Date):CalendarApp.CalendarEvent;
/**Creates a new event.

If no time zone is specified, the time values are interpreted in the context of the script's
time zone, which may be different than the calendar's time zone.

```
// Creates an event for the moon landing and logs the ID.
var event = CalendarApp.getDefaultCalendar().createEvent('Apollo 11 Landing',
    new Date('July 20, 1969 20:00:00 UTC'),
    new Date('July 20, 1969 21:00:00 UTC'),
    {location: 'The Moon'});
Logger.log('Event ID: ' + event.getId());
```
@param title the title of the event
@param startTime the date and time when the event starts
@param endTime the date and time when the event ends
@param options a JavaScript object that specifies advanced parameters, as listed below
@return the created event*/createEvent(title:string,startTime:Date,endTime:Date,options:Object):CalendarApp.CalendarEvent;
/**Creates an event from a free-form description.

The description should use the same format as the UI's ["Quick Add"](http://support.google.com/calendar/answer/36604) feature.

```
// Creates a new event and logs its ID.
var event = CalendarApp.getDefaultCalendar()
    .createEventFromDescription('Lunch with Mary, Friday at 1PM');
Logger.log('Event ID: ' + event.getId());
```
@param description a free-form description of the event
@return the created event*/createEventFromDescription(description:string):CalendarApp.CalendarEvent;
/**Creates a new event series.

```
// Creates an event series for a team meeting, taking place every Tuesday and Thursday in 2013.
var eventSeries = CalendarApp.getDefaultCalendar().createEventSeries('Team Meeting',
    new Date('January 1, 2013 03:00:00 PM EST'),
    new Date('January 1, 2013 04:00:00 PM EST'),
    CalendarApp.newRecurrence().addWeeklyRule()
        .onlyOnWeekdays([CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY])
        .until(new Date('January 1, 2014')));
Logger.log('Event Series ID: ' + eventSeries.getId());
```
@param title the title of the events in the series
@param startTime the date and time when the first event in the series starts
@param endTime the date and time when the first event in the series ends
@param recurrence the recurrence settings of the event series
@return the created event series*/createEventSeries(title:string,startTime:Date,endTime:Date,recurrence:CalendarApp.EventRecurrence):CalendarApp.CalendarEventSeries;
/**Creates a new event series.

```
// Creates an event series for a team meeting, taking place every Tuesday and Thursday in 2013.
var eventSeries = CalendarApp.getDefaultCalendar().createEventSeries('Team Meeting',
    new Date('January 1, 2013 03:00:00 PM EST'),
    new Date('January 1, 2013 04:00:00 PM EST'),
    CalendarApp.newRecurrence().addWeeklyRule()
        .onlyOnWeekdays([CalendarApp.Weekday.TUESDAY, CalendarApp.Weekday.THURSDAY])
        .until(new Date('January 1, 2014')),
    {location: 'Conference Room'});
Logger.log('Event Series ID: ' + eventSeries.getId());
```
@param title the title of the events in the series
@param startTime the date and time when the first event in the series starts
@param endTime the date and time when the first event in the series ends
@param recurrence the recurrence settings of the event series
@param options a JavaScript object that specifies advanced parameters, as listed below
@return the created event series*/createEventSeries(title:string,startTime:Date,endTime:Date,recurrence:CalendarApp.EventRecurrence,options:Object):CalendarApp.CalendarEventSeries;
/**Deletes the calendar permanently. A user can only delete a calendar they own.

```
// Creates a calendar to delete.
const calendar = CalendarApp.createCalendar('Test');

// Deletes the 'Test' calendar permanently.
calendar.deleteCalendar();
```*/deleteCalendar():void;
/**Gets the color of the calendar.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');

// Gets the color of the calendar and logs it to the console.
// For the default calendar, you can use CalendarApp.getColor() instead.
const calendarColor = calendar.getColor();
console.log(calendarColor);
```
@return A hexadecimal color string ("#rrggbb").*/getColor():string;
/**Gets the description of the calendar.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');

// Sets the description of the calendar to 'Test description.'
calendar.setDescription('Test description');

// Gets the description of the calendar and logs it to the console.
// For the default calendar, you can use CalendarApp.getDescription() instead.
const description = calendar.getDescription();
console.log(description);
```
@return The description of this calendar.*/getDescription():string;
/**Gets the event with the given ID. If the series belongs to a calendar other than the default
calendar, this method must be called from that calendar. Calling [`CalendarApp.getEventById(iCalId)`](https://developers.google.com/apps-script/reference/calendar/calendar-app.html#getEventById(String)) only
returns an event in the default calendar.

Multiple events may have the same ID if they are part of an event series. In this case this
method returns only the first event from that series.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com')

// Creates an event for the moon landing.
const event = calendar.createEvent('Apollo 11 Landing',
  new Date('July 20, 1969 20:05:00 UTC'),
  new Date('July 20, 1969 20:17:00 UTC'));

// Gets the calendar event ID and logs it to the console.
const iCalId = event.getId();
console.log(iCalId);

// Gets the event by its ID and logs the title of the event to the console.
// For the default calendar, you can use CalendarApp.getEventById(iCalId) instead.
const myEvent = calendar.getEventById(iCalId);
console.log(myEvent.getTitle());
```
@param iCalId ID of the event.
@return The event with the given ID, or `null` if the event doesn't exist or the user
    cannot access it.*/getEventById(iCalId:string):CalendarApp.CalendarEvent;
/**Gets the event series with the given ID. If the ID given is for a single [`CalendarEvent`](https://developers.google.com/apps-script/reference/calendar/calendar-event.html),
then a [`CalendarEventSeries`](https://developers.google.com/apps-script/reference/calendar/calendar-event-series.html) is returned with a single event in the series. Note that if
the event series belongs to a calendar other than the default calendar, this method must be
called from that [`Calendar`](https://developers.google.com/apps-script/reference/calendar/calendar.html); calling [`CalendarApp.getEventSeriesById(iCalId)`](https://developers.google.com/apps-script/reference/calendar/calendar-app.html#getEventSeriesById(String))
directly only returns an event series that exists in the default calendar.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');

// Creates an event series for a daily team meeting from 1 PM to 2 PM.
// The series adds the daily event from January 1, 2023 through December 31, 2023.
const eventSeries = calendar.createEventSeries('Team meeting',
  new Date('Jan 1, 2023 13:00:00'),
  new Date('Jan 1, 2023 14:00:00'),
  CalendarApp.newRecurrence().addDailyRule().until(new Date('Jan 1, 2024')));

// Gets the ID of the event series.
const iCalId = eventSeries.getId();

// Gets the event series by its ID and logs the series title to the console.
// For the default calendar, you can use CalendarApp.getEventSeriesById(iCalId) instead.
console.log(calendar.getEventSeriesById(iCalId).getTitle());
```
@param iCalId ID of the event series.
@return The series with the given ID, or `null` if the series doesn't exist or the user
    cannot access it.*/getEventSeriesById(iCalId:string):CalendarApp.CalendarEventSeries;
/**Gets all events that occur within a given time range.

This method returns events that start during the given time range, end during the time
range, or encompass the time range. If no time zone is specified, the time values are
interpreted in the context of the script's time zone, which may be different from the
calendar's time zone.

```
// Determines how many events are happening in the next two hours.
var now = new Date();
var twoHoursFromNow = new Date(now.getTime() + (2 * 60 * 60 * 1000));
var events = CalendarApp.getDefaultCalendar().getEvents(now, twoHoursFromNow);
Logger.log('Number of events: ' + events.length);
```
@param startTime the start of the time range
@param endTime the end of the time range, non-inclusive
@return the events that occur within the time range*/getEvents(startTime:Date,endTime:Date):CalendarApp.CalendarEvent[];
/**Gets all events that occur within a given time range and meet the specified criteria.

This method returns events that start during the given time range, ends during the time
range, or encompasses the time range. If no time zone is specified, the time values are
interpreted in the context of the script's time zone, which may be different from the
calendar's time zone.

Be aware that filtering on `author`, `search`, or `statusFilters` takes
place after applying `start` and `max`. This means that the number of events
returned may be less than `max`, even though additional events meet the criteria.

```
// Determines how many events are happening in the next two hours that contain the term
// "meeting".
var now = new Date();
var twoHoursFromNow = new Date(now.getTime() + (2 * 60 * 60 * 1000));
var events = CalendarApp.getDefaultCalendar().getEvents(now, twoHoursFromNow,
    {search: 'meeting'});
Logger.log('Number of events: ' + events.length);
```
@param startTime the start of the time range
@param endTime the end of the time range, non-inclusive
@param options a JavaScript object that specifies advanced parameters, as listed below
@return the events that take place within the time range and match the criteria*/getEvents(startTime:Date,endTime:Date,options:Object):CalendarApp.CalendarEvent[];
/**Gets all events that occur on a given day.

This method returns events if they start during the given day, end during the day, or
encompass the day.

Note that only the date portion of the Date object is used, and the time portion is ignored.
The date is interpreted as midnight that day to midnight the next day in the calendar's time
zone.

```
// Determines how many events are happening today.
var today = new Date();
var events = CalendarApp.getDefaultCalendar().getEventsForDay(today);
Logger.log('Number of events: ' + events.length);
```
@param date the date to retrieve events for (only the day is used; the time is ignored)
@return the events that occur on the given date*/getEventsForDay(date:Date):CalendarApp.CalendarEvent[];
/**Gets all events that occur on a given day and meet specified criteria.

This method returns events if they start during the given day, end during the day, or
encompass the day.

Note that only the date portion of the Date object is used, and the time portion is ignored.
The date is interpreted as midnight that day to midnight the next day in the calendar's time
zone.

Be aware that filtering on `author`, `search`, or `statusFilters` takes
place after applying `start` and `max`. This means that the number of events
returned may be less than `max`, even though additional events meet the criteria.

```
// Determines how many events are happening today and contain the term "meeting".
var today = new Date();
var events = CalendarApp.getDefaultCalendar().getEventsForDay(today, {search: 'meeting'});
Logger.log('Number of events: ' + events.length);
```
@param date the date to retrieve events for (only the day is used; the time is ignored)
@param options advanced filtering options
@return the events that occur on the given date and match the criteria*/getEventsForDay(date:Date,options:Object):CalendarApp.CalendarEvent[];
/**Gets the ID of the calendar. The ID for a user's default calendar is their email address.

```
// Opens the calendar by its ID.
// To get the user's default calendar, use CalendarApp.getDefaultCalendar().
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');

// Gets the ID of the calendar and logs it to the console.
const calendarId = calendar.getId();
console.log(calendarId);
```
@return The ID of the calendar.*/getId():string;
/**Gets the name of the calendar.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');

// Gets the name of the calendar and logs it to the console.
// For the default calendar, you can use CalendarApp.getName() instead.
const calendarName = calendar.getName();
console.log(calendarName);
```
@return This calendar's name.*/getName():string;
/**Gets the time zone of the calendar.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');

// Gets the time zone of the calendar and logs it to the console.
// For the default calendar, you can use CalendarApp.getTimeZone() instead.
const timeZone = calendar.getTimeZone();
console.log(timeZone);
```
@return The time zone, specified in "long" format (for example, "America/New_York", as listed
    by [Joda.org](http://joda-time.sourceforge.net/timezones.html)).*/getTimeZone():string;
/**Determines whether the calendar is hidden in the user interface.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');

// Determines whether the calendar is hidden in the user interface and logs it to the console.
// For the default calendar, you can use CalendarApp.isHidden() instead.
const isHidden = calendar.isHidden();
console.log(isHidden);
```
@return `true` if the calendar is hidden in the user interface; `false` if it
    isn't.*/isHidden():boolean;
/**Determines whether the calendar is the primary calendar for the effective user.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');

// Determines whether the calendar is the default calendar for
// the effective user and logs it to the console.
// For the default calendar, you can use CalendarApp.isMyPrimaryCalendar() instead.
const isMyPrimaryCalendar = calendar.isMyPrimaryCalendar();
console.log(isMyPrimaryCalendar);
```
@return `true` if the calendar is the default calendar for the effective user; `false` if it isn't.*/isMyPrimaryCalendar():boolean;
/**Determines whether the calendar is owned by you.

```
// Gets a calendar by its ID. To get the user's default calendar, use
// CalendarApp.getDefault() instead.
// TODO(developer): Replace the ID with the calendar ID that you want to use.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Determines whether the calendar is owned by you and logs it.
console.log(calendar.isOwnedByMe());
```
@return `true` if the calendar is owned by you; `false` if not.*/isOwnedByMe():boolean;
/**Determines whether the calendar's events are displayed in the user interface.

```
// Gets the user's default calendar. To get a different calendar, use getCalendarById()
// instead.
const calendar = CalendarApp.getDefaultCalendar();

// Determines whether the calendar's events are displayed in the user interface and logs it.
console.log(calendar.isSelected());
```
@return `true` if the calendar's events are displayed in the user interface; `false` if not*/isSelected():boolean;
/**Sets the color of the calendar.

```
// Opens the calendar by its ID.
// TODO(developer): Replace the ID with your own.
const calendar = CalendarApp.getCalendarById('222larabrown@gmail.com');

// Sets the color of the calendar to pink using the Calendar Color enum.
// For the default calendar, you can use CalendarApp.setColor() instead.
calendar.setColor(CalendarApp.Color.PINK);
```
@param color A [`CalendarApp.Color`](https://developers.google.com/apps-script/reference/calendar/color.html) or a hexadecimal color string
    ("#rrggbb").
@return This calendar for chaining.*/setColor(color:string):CalendarApp.Calendar;
/**Sets the description of a calendar.

```
// Gets the user's default calendar. To get a different calendar, use getCalendarById()
// instead.
const calendar = CalendarApp.getDefaultCalendar();

// Sets the description of the calendar.
// TODO(developer): Update the string with the description that you want to use.
calendar.setDescription('Updated calendar description.')
```
@param description the description of this calendar
@return this calendar for chaining*/setDescription(description:string):CalendarApp.Calendar;
/**Sets whether the calendar is visible in the user interface.
@param hidden `true` to hide the calendar in the user interface; `false` to show it
@return this calendar for chaining*/setHidden(hidden:boolean):CalendarApp.Calendar;
/**Sets the name of the calendar.

```
// Gets the user's default calendar. To get a different calendar, use getCalendarById()
// instead.
const calendar = CalendarApp.getDefaultCalendar();

// Sets the name of the calendar.
// TODO(developer): Update the string with the name that you want to use.
calendar.setName('Example calendar name');
```
@param name the new name
@return this calendar for chaining*/setName(name:string):CalendarApp.Calendar;
/**Sets whether the calendar's events are displayed in the user interface.

```
// Gets the user's default calendar. To get a different calendar, use getCalendarById()
// instead.
const calendar = CalendarApp.getDefaultCalendar();

// Selects the calendar so that its events are displayed in the user interface. To
// unselect the calendar, set the parameter to false.
calendar.setSelected(true);
```
@param selected `true` to show the calendar's events in the user interface; `false`
    to hide them
@return this calendar for chaining*/setSelected(selected:boolean):CalendarApp.Calendar;
/**Sets the time zone of the calendar.

```
// Gets the user's default calendar. To get a different calendar, use getCalendarById()
// instead.
const calendar = CalendarApp.getDefaultCalendar();

// Sets the time zone of the calendar to America/New York (US/Eastern) time.
calendar.setTimeZone('America/New_York');
```
@param timeZone The time zone, specified in "long" format (such as "America/New_York", as
    listed by [Joda.org](http://joda-time.sourceforge.net/timezones.html)).
@return This calendar for chaining.*/setTimeZone(timeZone:string):CalendarApp.Calendar;
/**Unsubscribes the user from a calendar. A user can't unsubscribe from calendars listed under the
__My calendars__ list. They can unsubscribe from calendars listed under __Other
calendars__.

```
// Gets the calendar by its ID.
// TODO(developer): Replace the calendar ID with the calendar ID that you want to get.
const calendar = CalendarApp.getCalendarById('abc123456@group.calendar.google.com');

// Unsubscribes the user from the calendar.
const result = calendar.unsubscribeFromCalendar();
```*/unsubscribeFromCalendar():void;}}const CalendarApp:CalendarApp;