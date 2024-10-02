interface UiApp{
/**Create a new UiInstance, which you can use to build a UI.

Use this in the entry point of your app to create a UI. For example:

```
function doGet(e) {
  var app = UiApp.createApplication();
  // Create a button tied to a server click handler.
  app.add(app.createButton('Click me!', app.createServerHandler('onClick')).setId('button'));
  // Create a button tied to a client click handler.
  app.add(app.createButton('Click me too!',
      app.createClientHandler().forEventSource().setText('Clicked!')));
  return app; // If you don't return the UiInstance, the change won't happen
}

function onClick(e) {
  var app = UiApp.getActiveApplication();
  app.getElementById('button').setText('Clicked!');
  return app;
}
```

Note that you cannot return a new UiInstance in an event handler from an existing
UiInstance.
@deprecated*/createApplication():void;
/**Gets the active UiInstance.

Use this in the context of an event handler to interact with the existing UI. For example:

```
function doGet(e) {
  var app = UiApp.createApplication();
  app.add(app.createButton('Click me!', app.createServerHandler('onClick')).setId('button'));
  return app;
}

function onClick(e) {
  var app = UiApp.getActiveApplication();
  app.getElementById('button').setText('Clicked!');
  return app;  // If you don't return the UiInstance, the change won't happen
}
```
@deprecated*/getActiveApplication():void;
/**Return the browser user-agent string, so that you can tailor your app as needed.
@deprecated
@return the user-agent string.*/getUserAgent():string;}const UiApp:UiApp;