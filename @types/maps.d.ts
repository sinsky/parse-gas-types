interface Maps{DirectionFinder:Maps.DirectionFinderEnums;StaticMap:Maps.StaticMapEnums;
/**Decodes an encoded polyline string back into an array of points.

```
// Decodes a string representation of the latitudes and longitudes of Minneapolis and Milwaukee
// respectively.
var polyline = 'qvkpG`qhxPbgyI_zq_@';
var points = Maps.decodePolyline(polyline);
for (var i = 0; i < points.length; i+= 2) {
  Logger.log('%s, %s', points[i], points[i+1]);
}
```
@param polyline An encoded polyline to decode.
@return An array of latitude longitude pairs (lat0, long0, lat1, long1, ...).*/decodePolyline(polyline:string):number[];
/**Encodes an array of points into a string.

```
// The latitudes and longitudes of New York and Boston respectively.
var points = [40.77, -73.97, 42.34, -71.04];
var polyline = Maps.encodePolyline(points);
```
@param points An array of latitude/longitude pairs to encode.
@return An encoded string representing those points.*/encodePolyline(points:number[]):string;
/**Creates a new DirectionFinder object.
@return A new direction finder object.*/newDirectionFinder():Maps.DirectionFinder;
/**Creates an ElevationSampler object.
@return A new elevation sampler object.*/newElevationSampler():Maps.ElevationSampler;
/**Creates a new Geocoder object.
@return A new geocoder object.*/newGeocoder():Maps.Geocoder;
/**Creates a new StaticMap object.
@return A new static map object.*/newStaticMap():Maps.StaticMap;
/**Enables the use of an externally established [Google Maps APIs Premium Plan](https://developers.google.com/maps/premium/) account,
to leverage additional [quota
allowances](https://developers.google.com/maps/premium/usage-limits). Your client ID and signing key can be obtained from the Google Enterprise
Support Portal. Set these values to `null` to go back to using the default quota
allowances.

__Note__: This method doesn't work with API keys. Additionally,
please note that Premium Plan is no longer available for new customers. If you don't already
have a Premium Plan license, please don't call [`setAuthentication(clientId, signingKey)`](https://developers.google.com/apps-script/reference/maps/maps.html#setAuthentication(String,String)). You are able to use
the [`Maps`](https://developers.google.com/apps-script/reference/maps/maps.html) methods with the default quota allowances.

```
Maps.setAuthentication('gme-123456789', 'VhSEZvOXVSdnlxTnpJcUE');
```
@param clientId A client identifier.
@param signingKey A private signing key.*/setAuthentication(clientId:string,signingKey:string):void;}module Maps{interface Type{}interface _Type{
/**A hybrid of the satellite and roadmap maps, showing a transparent layer of major streets and
place names on the satellite map.*/HYBRID:Type;
/**A standard roadmap, as is normally shown on the Google Maps website.*/ROADMAP:Type;
/**A satellite map.*/SATELLITE:Type;
/**A physical relief map, showing terrain and vegetation.*/TERRAIN:Type;}interface StaticMapEnums{Color:Maps._Color;Format:Maps._Format;MarkerSize:Maps._MarkerSize;Type:Maps._Type;}interface StaticMap{
/**Adds a new address to the current path definition.

```
// Creates a map and adds a path from New York to Boston.
var map = Maps.newStaticMap()
    .beginPath()
    .addAddress('New York, NY')
    .addAddress('Boston, MA')
    .endPath();
```
@param address An address to add.
@return This map instance, for chaining.*/addAddress(address:string):Maps.StaticMap;
/**Adds a marker to the map using a point (lat/lng).

```
// Creates a map and adds a marker at the specified coordinates.
var map = Maps.newStaticMap().addMarker(40.741799, -74.004207);
```
@param latitude The latitude of the new marker.
@param longitude The longitude of the new marker.
@return This map instance, for chaining.*/addMarker(latitude:number,longitude:number):Maps.StaticMap;
/**Adds a marker to the map using an address.

```
// Creates a map and adds a marker at the specified address.
var map = Maps.newStaticMap().addMarker('76 9th Ave, New York NY');
```
@param address The address at wich to place the new marker.
@return This map instance, for chaining.*/addMarker(address:string):Maps.StaticMap;
/**Adds a path to the map using an array of points.

```
// Creates a map and adds a path from New York to Boston.
var map = Maps.newStaticMap()
    .addPath([40.714353, -74.005973, 42.358431, -71.059773]);
```
@param points An array of latitude/longitude pairs that define the path.
@return This map instance, for chaining.*/addPath(points:number[]):Maps.StaticMap;
/**Adds a path to the map using an encoded polyline.

```
// Creates a map and adds a path from New York to Boston.
var polyline = Maps.encodePolyline([40.714353, -74.005973, 42.358431, -71.059773]);
var map = Maps.newStaticMap().addPath(polyline);
```
@param polyline An encoded polyline.
@return This map instance, for chaining.*/addPath(polyline:string):Maps.StaticMap;
/**Adds a new point (lat/lng) to the current path definition.

```
// Creates a map and adds a path from New York to Boston.
var map = Maps.newStaticMap()
    .beginPath()
    .addPoint(40.714353, -74.005973)
    .addPoint(42.358431, -71.059773)
    .endPath();
```
@param latitude The latitude of the point.
@param longitude The longitude of the point.
@return This map instance, for chaining.*/addPoint(latitude:number,longitude:number):Maps.StaticMap;
/**Adds a point (lat/lng) location that must be visible in the map.

```
// Creates a map where New York and Boston are visible.
var map = Maps.newStaticMap()
    .addVisible(40.714353, -74.005973);
    .addVisible(42.358431, -71.059773)
```
@param latitude The latitude of the point.
@param longitude The longitude of the point.
@return This map instance, for chaining.*/addVisible(latitude:number,longitude:number):Maps.StaticMap;
/**Adds an address location that must be visible in the map.

```
// Creates a map where New York and Boston are visible.
var map = Maps.newStaticMap()
    .addVisible('New York, NY')
    .addVisible('Boston, MA');
```
@param address An address that must be visible in the map.
@return This map instance, for chaining.*/addVisible(address:string):Maps.StaticMap;
/**Starts a new path definition. Calls to `addAddress()` and `addPoint()` define each
new vertex in the path. The path is completed when `endPath()` is called.

```
// Creates a map and adds a path from New York to Boston.
var map = Maps.newStaticMap()
    .beginPath()
    .addAddress('New York, NY')
    .addAddress('Boston, MA')
    .endPath();
```
@return This map instance, for chaining.*/beginPath():Maps.StaticMap;
/**Clears the current set of markers.

```
var map = Maps.newStaticMap();
// ...
// Do something interesting here ...
// ...
// Remove all markers on the map.
map.clearMarkers();
```
@return This map instance, for chaining.*/clearMarkers():Maps.StaticMap;
/**Clear the current set of paths.

```
var map = Maps.newStaticMap();
// ...
// Do something interesting here ...
// ...
// Remove all paths on the map.
map.clearPaths();
```
@return This map instance, for chaining.*/clearPaths():Maps.StaticMap;
/**Clears the current set of visible locations.

```
var map = Maps.newStaticMap();
// ...
// Do something interesting here ...
// ...
// Remove all visible locations created with addVisible().
map.clearVisibles();
```
@return This map instance, for chaining.*/clearVisibles():Maps.StaticMap;
/**Completes a path definition started with beginPath().

```
// Creates a map and adds a path from New York to Boston.
var map = Maps.newStaticMap()
    .beginPath()
    .addAddress('New York, NY')
    .addAddress('Boston, MA')
    .endPath();
```
@return This map instance, for chaining.*/endPath():Maps.StaticMap;
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
/**Gets the image data as a [`Blob`](https://developers.google.com/apps-script/reference/maps/../base/blob.html).

```
// Creates a map centered on Times Square and saves it to Google Drive.
var map = Maps.newStaticMap().setCenter('Times Square, New York, NY');
DocsList.createFile(map);  // You can call map.getBlob() explicitly or use it
                           // implicitly by passing the map where a blob is expected.
```
@return An image of the map in the selected image format.*/getBlob():Blob;
/**Gets the raw image data as a byte array.

In general, prefer using [`getBlob()`](https://developers.google.com/apps-script/reference/maps/static-map.html#getBlob()) which allows for simpler interactions with other
services.

```
// Creates a map centered on Times Square and saves it to Google Drive.
var map = Maps.newStaticMap().setCenter('Times Square, New York, NY');
DocsList.createFile(Utilities.newBlob(map.getMapImage(), 'image/png', 'map.png'));
```
@return An image of the map in the selected image format.*/getMapImage():Byte[];
/**Gets the URL of the map image.

```
// Creates a map centered on Times Square and gets the URL.
var map = Maps.newStaticMap().setCenter('Times Square, New York, NY');
// All static map URLs require an API key.
Logger.log(map.getMapUrl() + "&key=YOUR_API_KEY");
```
@return URL The map image URL.*/getMapUrl():string;
/**Sets the center of the map using a point (lat/lng).

```
// Creates a map centered on Times Square, using its coordinates.
var map = Maps.newStaticMap().setCenter(40.759011, -73.984472);
```
@param latitude The latitude of the center.
@param longitude The longitude of the center.
@return This map instance, for chaining.*/setCenter(latitude:number,longitude:number):Maps.StaticMap;
/**Sets the center of the map using an address.

```
// Creates a map centered on Times Square, using its address.
var map = Maps.newStaticMap().setCenter('Times Square, New York, NY');
```
@param address The address of the center.
@return This map instance, for chaining.*/setCenter(address:string):Maps.StaticMap;
/**Sets the custom marker image to use when creating new markers. Markers that have already been
added are not affected.

```
// Creates a map with markers set to be medium sized, black, and labeled with the number "1".
var map = Maps.newStaticMap()
    .setCustomMarkerStyle('http://www.example.com/marker.png', false);
```
@param imageUrl Specifies a URL to use as the marker's custom icon. Images may be in PNG, JPEG
    or GIF formats, though PNG is recommended.
@param useShadow Indicates that the marker should have a shadow generated, based on the image's
    visible region and its opacity/transparency.
@return This map instance, for chaining.*/setCustomMarkerStyle(imageUrl:string,useShadow:boolean):Maps.StaticMap;
/**Sets the format of the map image.

```
// Creates a map with the image format set to PNG.
var map = Maps.newStaticMap().setFormat(Maps.StaticMap.Format.PNG);
```
@param format A constant value from [`Format`](https://developers.google.com/apps-script/reference/maps/format.html).
@return This map instance, for chaining.*/setFormat(format:string):Maps.StaticMap;
/**Sets the language to be used for text on the map (where avaialbe).

```
// Creates a map with the language set to French.
var map = Maps.newStaticMap().setLanguage('fr');
```
@param language A BCP-47 language identifier.
@return This map instance, for chaining.*/setLanguage(language:string):Maps.StaticMap;
/**Sets the type of map to be shown.

```
// Creates a satellite map.
var map = Maps.newStaticMap().setMapType(Maps.StaticMap.Type.SATELLITE);
```
@param mapType A constant value from [`Type`](https://developers.google.com/apps-script/reference/maps/type.html).
@return This map instance, for chaining.*/setMapType(mapType:string):Maps.StaticMap;
/**Sets the marker style to use when creating new markers. Markers that have already been added
are not affected.

```
// Creates a map with markers set to be medium sized, black, and labeled with the number "1".
var map = Maps.newStaticMap()
    .setMarkerStyle(Maps.StaticMap.MarkerSize.MID, Maps.StaticMap.Color.BLACK , '1');
```
@param size A constant value from [`MarkerSize`](https://developers.google.com/apps-script/reference/maps/marker-size.html).
@param color A string in the format "0xrrggbb" or a constant value from [`Color`](https://developers.google.com/apps-script/reference/maps/color.html).
@param label A string containing a single character A-Z or 0-9.
@return This map instance, for chaining.*/setMarkerStyle(size:string,color:string,label:string):Maps.StaticMap;
/**Sets whether or not to use specialized tile sets for mobile devices.

```
// Creates a map that uses mobile-friendly tiles.
var map = Maps.newStaticMap().setMobile(true);
```
@param useMobileTiles Whether or not to use mobile tiles.
@return This map instance, for chaining.*/setMobile(useMobileTiles:boolean):Maps.StaticMap;
/**Sets the path style to use when creating new paths. Paths that have already been added are not
affected.

```
// Creates a map with paths set to be 1 pixel wide with a black line and a white fill.
var map = Maps.newStaticMap()
    .setPathStyle(1, Maps.StaticMap.Color.BLACK , 'red');
```
@param weight The width of lines in pixels.
@param color The line color, as a string in the format "0xrrggbb" or a constant value from
    [`Color`](https://developers.google.com/apps-script/reference/maps/color.html).
@param fillColor The fill color, a string in the format "0xrrggbb" or a constant value from
    [`Color`](https://developers.google.com/apps-script/reference/maps/color.html).
@return This map instance, for chaining.*/setPathStyle(weight:Integer,color:string,fillColor:string):Maps.StaticMap;
/**Sets the width and height of the map image in pixels.

```
// Creates a map 400px wide by 300px high.
var map = Maps.newStaticMap().setSize(400, 300);
```
@param width The width of the image in pixels.
@param height The height of the image in pixels.
@return This map instance, for chaining.*/setSize(width:Integer,height:Integer):Maps.StaticMap;
/**Sets the zoom factor, or magnification level, used for the map.

```
// Creates a map with a zoom factor of 10.
var map = Maps.newStaticMap().setZoom(10);
```
@param zoom A value from zero to 21, inclusive.
@return This map instance, for chaining.*/setZoom(zoom:Integer):Maps.StaticMap;}interface Mode{}interface _Mode{
/**Bicycling directions via bicycle paths and preferred streets (where available).*/BICYCLING:Mode;
/**Driving directions via roads.*/DRIVING:Mode;
/**Transit directions via public transit routes (where available). This mode requires that you set
either the departure or arrival time.

```
// Log all available data for a public-transit trip.
var directions = Maps.newDirectionFinder()
    .setOrigin('The Cloisters, New York, NY')
    .setDestination('JFK airport, New York, NY')
    .setMode(Maps.DirectionFinder.Mode.TRANSIT)
    .setDepart(new Date())
    .getDirections();
var route = directions.routes[0];
Logger.log(route);
```*/TRANSIT:Mode;
/**Walking directions via pedestrian paths and sidewalks (where available).*/WALKING:Mode;}interface MarkerSize{}interface _MarkerSize{
/**Medium sized markers (largest available).*/MID:MarkerSize;
/**Small sized markers. Labels will not be visible on markers of this size.*/SMALL:MarkerSize;
/**Tiny sized markets (smallest available). Labels will not be visible on markers of this size.*/TINY:MarkerSize;}interface Geocoder{
/**Gets the approximate geographic points for a given address.

```
// Gets the geographic coordinates for Times Square.
var response = Maps.newGeocoder().geocode('Times Square, New York, NY');
for (var i = 0; i < response.results.length; i++) {
  var result = response.results[i];
  Logger.log('%s: %s, %s', result.formatted_address, result.geometry.location.lat,
      result.geometry.location.lng);
}
```
@param address an address
@return a JSON Object containing the geocoding data, as described [here](/maps/documentation/geocoding/#JSON)*/geocode(address:string):Object;
/**Gets the approximate addresses for a given geographic point.

```
// Gets the address of a point in Times Square.
var response = Maps.newGeocoder().reverseGeocode(40.758577, -73.984464);
for (var i = 0; i < response.results.length; i++) {
  var result = response.results[i];
  Logger.log('%s: %s, %s', result.formatted_address, result.geometry.location.lat,
      result.geometry.location.lng);
}
```
@param latitude the latitude of the point
@param longitude the longitude of the point
@return a JSON Object containing the reverse geocoding data, as described [here](/maps/documentation/geocoding/#ReverseGeocoding)*/reverseGeocode(latitude:number,longitude:number):Object;
/**Sets the bounds of an area that should be given extra preference in the results.

```
// Creates a Geocoder that prefers points in the area of Manhattan.
var geocoder = Maps.newGeocoder()
    .setBounds(40.699642, -74.021072, 40.877569, -73.908548);
```
@param swLatitude the latitude of the south west corner of the bounds
@param swLongitude the longitude of the south west corner of the bounds
@param neLatitude the latitude of the north east corner of the bounds
@param neLongitude the longitude of the north east corner of the bounds
@return the Geocoder object to facilitate chaining of calls*/setBounds(swLatitude:number,swLongitude:number,neLatitude:number,neLongitude:number):Maps.Geocoder;
/**Sets the language to be used in the results.

```
// Creates a Geocoder with the language set to French.
var geocoder = Maps.newGeocoder().setLanguage('fr');
```
@param language a BCP-47 language identifier
@return the Geocoder object to facilitate chaining of calls.*/setLanguage(language:string):Maps.Geocoder;
/**Sets a region to use when interpreting location names. The supported region codes correspond to
the ccTLDs supported by Google Maps. For example, the region code "uk" corresponds to
"maps.google.co.uk".

```
// Creates a Geocoder with the region set to France.
var geocoder = Maps.newGeocoder().setRegion('fr');
```
@param region the region code to use
@return the Geocoder object to facilitate chaining of calls*/setRegion(region:string):Maps.Geocoder;}interface Format{}interface _Format{
/**GIF format.*/GIF:Format;
/**JPEG format.*/JPG:Format;
/**Non-progressive JPEG format.*/JPG_BASELINE:Format;
/**8-bit PNG format.*/PNG:Format;
/**32-bit PNG format.*/PNG32:Format;
/**8-bit PNG format.*/PNG8:Format;}interface ElevationSampler{
/**Returns elevation data for a single point (lat/lng).

```
// Gets the elevation of Times Square using a point.
var data = Maps.newElevationSampler().sampleLocation(40.759011, -73.984472);
Logger.log(data.results[0].elevation);
```
@param latitude the latitude of the point to sample
@param longitude the longitude of the point to sample
@return a JSON Object containing the elevation data, as described [here](/maps/documentation/elevation/#ElevationResponses)*/sampleLocation(latitude:number,longitude:number):Object;
/**Returns elevation data for a series of points (lat/lng).

```
// Gets the elevation of Times Square and Central Park using points.
var data = Maps.newElevationSampler().sampleLocations([
    // Times Square
    40.759011, -73.984472,
    // Central Park
    40.777052, -73.975464
]);
Logger.log('Times Square: ' + data.results[0].elevation);
Logger.log('Central Park: ' + data.results[1].elevation);
```
@param points an array of latitude/longitude pairs
@return a JSON Object containing the elevation data, as described [here](/maps/documentation/elevation/#ElevationResponses)*/sampleLocations(points:number[]):Object;
/**Returns elevation data for the points in an encoded polyline.

```
// Gets the elevation of Times Square and Central Park using a polyline.
var data = Maps.newElevationSampler().sampleLocations('yvwwF|aqbMwoBiw@');
Logger.log('Times Square: ' + data.results[0].elevation);
Logger.log('Central Park: ' + data.results[1].elevation);
```
@param encodedPolyline an encoded polyline of points to sample
@return a JSON Object containing the elevation data, as described [here](/maps/documentation/elevation/#ElevationResponses)*/sampleLocations(encodedPolyline:string):Object;
/**Returns elevation data for a number of samples along a line, defined using a series of points.

```
// Gets the elevation of five points between Times Square and Central Park.
var data = Maps.newElevationSampler().samplePath([
    // Times Square
    40.759011, -73.984472,
    // Central Park
    40.777052, -73.975464
], 5);
for (var i = 0; i < data.results.length; i++) {
  Logger.log(data.results[i].elevation);
}
```
@param points an array of latitude/longitude pairs defining a path to sample over
@param numSamples the number of points to sample along the path of points
@return a JSON Object containing the elevation data, as described [here](/maps/documentation/elevation/#ElevationResponses)*/samplePath(points:number[],numSamples:Integer):Object;
/**Returns elevation data for a number of samples along a line, defined using an encoded polyline.

```
// Gets the elevation of five points between Times Square and Central Park.
var data = Maps.newElevationSampler().samplePath('yvwwF|aqbMwoBiw@', 5);
for (var i = 0; i < data.results.length; i++) {
  Logger.log(data.results[i].elevation);
}
```
@param encodedPolyline an encoded polyline of points defining a path to sample over
@param numSamples the number of points to sample along the path of points
@return a JSON Object containing the elevation data, as described [here](/maps/documentation/elevation/#ElevationResponses)*/samplePath(encodedPolyline:string,numSamples:Integer):Object;}interface DirectionFinderEnums{Avoid:Maps._Avoid;Mode:Maps._Mode;}interface DirectionFinder{
/**Adds a waypoint that the route must pass through, using a point (lat/lng).

```
// Creates a DirectionFinder with a wapoint at Lincoln Center.
var directionFinder = Maps.newDirectionFinder().addWaypoint(40.772628, -73.984243);
```
@param latitude Latitude of the waypoint.
@param longitude Longitude of the waypoint.
@return The DirectionFinder object to facilitate chaining of calls.*/addWaypoint(latitude:number,longitude:number):Maps.DirectionFinder;
/**Adds a waypoint that the route must pass through, using an address.

```
// Creates a DirectionFinder with a wapoint at Lincoln Center.
var directionFinder = Maps.newDirectionFinder().addWaypoint('Lincoln Center, New York, NY');
```
@param address An address.
@return The DirectionFinder object to facilitate chaining of calls.*/addWaypoint(address:string):Maps.DirectionFinder;
/**Clears the current set of waypoints.

```
var directionFinder = Maps.newDirectionFinder()
// ...
// Do something interesting here ...
// ...
// Remove all waypoints added with addWaypoint().
directionFinder.clearWaypoints();
```
@return the DirectionFinder object to facilitate chaining of calls*/clearWaypoints():Maps.DirectionFinder;
/**Gets the directions using the origin, destination, and other options that were set.

```
// Logs how long it would take to walk from Times Square to Central Park.
var directions = Maps.newDirectionFinder()
    .setOrigin('Times Square, New York, NY')
    .setDestination('Central Park, New York, NY')
    .setMode(Maps.DirectionFinder.Mode.WALKING)
    .getDirections();
Logger.log(directions.routes[0].legs[0].duration.text);
```
@return a JSON object containing the set of routes for the directions, as described [here](/maps/documentation/directions/#JSON)*/getDirections():Object;
/**Sets whether or not alternative routes should be returned, instead of just the highest ranked
route (defaults to false). If true, the resulting object's `routes` array may
contain multiple entries.

```
// Creates a DirectionFinder with alernative routes enabled.
var directionFinder = Maps.newDirectionFinder().setAlternatives(true);
```
@param useAlternatives true to return alternative routes, false otherwise
@return the DirectionFinder object to facilitate chaining of calls*/setAlternatives(useAlternatives:boolean):Maps.DirectionFinder;
/**Sets the desired time of arrival (when applicable).

```
// Creates a DirectionFinder with an arrival time of 2 hours from now.
var now = new Date();
var arrive = new Date(now.getTime() + (2 * 60 * 60 * 1000));
var directionFinder = Maps.newDirectionFinder().setArrive(arrive);
```
@param time the time of arrival
@return the DirectionFinder object to facilitate chaining of calls*/setArrive(time:Date):Maps.DirectionFinder;
/**Sets whether to avoid certain types of restrictions.

```
// Creates a DirectionFinder that avoid highways.
var directionFinder = Maps.newDirectionFinder().setAvoid(Maps.DirectionFinder.Avoid.HIGHWAYS);
```
@param avoid a constant value from [`Avoid`](https://developers.google.com/apps-script/reference/maps/avoid.html)
@return the DirectionFinder object to facilitate chaining of calls*/setAvoid(avoid:string):Maps.DirectionFinder;
/**Sets the desired time of departure (when applicable).

```
// Creates a DirectionFinder with a departure time of 1 hour from now.
var now = new Date();
var depart = new Date(now.getTime() + (1 * 60 * 60 * 1000));
var directionFinder = Maps.newDirectionFinder().setDepart(depart);
```
@param time the time of departure
@return The DirectionFinder object to facilitate chaining of calls.*/setDepart(time:Date):Maps.DirectionFinder;
/**Sets the ending location for which to calculate directions to, using a point (lat/lng).

```
// Creates a DirectionFinder with the destination set to Central Park.
var directionFinder = Maps.newDirectionFinder().setDestination(40.777052, -73.975464);
```
@param latitude the latitude of the ending location
@param longitude the longitude of the ending location
@return the DirectionFinder object to facilitate chaining of calls*/setDestination(latitude:number,longitude:number):Maps.DirectionFinder;
/**Sets the ending location for which to calculate directions to, using an address.

```
// Creates a DirectionFinder with the destination set to Central Park.
var directionFinder = Maps.newDirectionFinder().setDestination('Central Park, New York, NY');
```
@param address the ending address
@return the DirectionFinder object to facilitate chaining of calls*/setDestination(address:string):Maps.DirectionFinder;
/**Sets the language to be used for the directions.

```
// Creates a DirectionFinder with the language set to French.
var directionFinder = Maps.newDirectionFinder().setLanguage('fr');
```
@param language a BCP-47 language identifier
@return the DirectionFinder object to facilitate chaining of calls*/setLanguage(language:string):Maps.DirectionFinder;
/**Sets the mode of travel (defaults to driving).

```
// Creates a DirectionFinder with the mode set to walking.
var directionFinder = Maps.newDirectionFinder().setMode(Maps.DirectionFinder.Mode.WALKING);
```
@param mode a constant value from [`Mode`](https://developers.google.com/apps-script/reference/maps/mode.html)
@return the DirectionFinder object to facilitate chaining of calls*/setMode(mode:string):Maps.DirectionFinder;
/**Sets whether or not to optimize the provided route by rearranging the waypoints in a more
efficient order (defaults to false).

```
// Creates a DirectionFinder with wapoint optimization enabled.
var directionFinder = Maps.newDirectionFinder().setOptimizeWaypoints(true);
```
@param optimizeOrder true to optimize the order, or false otherwise
@return the DirectionFinder object to facilitate chaining of calls*/setOptimizeWaypoints(optimizeOrder:boolean):Maps.DirectionFinder;
/**Sets the starting location from which to calculate directions, using a point (lat/lng).

```
// Creates a DirectionFinder with the origin set to Times Square.
var directionFinder = Maps.newDirectionFinder().setOrigin(40.759011, -73.984472);
```
@param latitude the latitude of the starting location
@param longitude the longitude of the starting location
@return the DirectionFinder object to facilitate chaining of calls*/setOrigin(latitude:number,longitude:number):Maps.DirectionFinder;
/**Sets the starting location from which to calculate directions, using an address.

```
// Creates a DirectionFinder with the origin set to Times Square.
var directionFinder = Maps.newDirectionFinder().setOrigin('Times Square, New York, NY');
```
@param address the starting address
@return the DirectionFinder instance to facilitate chaining of calls*/setOrigin(address:string):Maps.DirectionFinder;
/**Sets a region to use when interpreting location names. The supported region codes correspond to
the ccTLDs supported by Google Maps. For example, the region code "uk" corresponds to
"maps.google.co.uk".

```
// Creates a DirectionFinder with the region set to France.
var directionFinder = Maps.newDirectionFinder().setRegion('fr');
```
@param region the region code to use
@return the DirectionFinder object to facilitate chaining of calls*/setRegion(region:string):Maps.DirectionFinder;}interface Color{}interface _Color{BLACK:Color;BLUE:Color;BROWN:Color;GRAY:Color;GREEN:Color;ORANGE:Color;PURPLE:Color;RED:Color;WHITE:Color;YELLOW:Color;}interface Avoid{}interface _Avoid{
/**Avoid highways.*/HIGHWAYS:Avoid;
/**Avoid tolls.*/TOLLS:Avoid;}}const Maps:Maps;