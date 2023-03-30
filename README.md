# core-bundle-demo

This project demonstrates how to
- bundle the [@vcmap/core](https://github.com/virtualcitySYSTEMS/map-core) using [vite](https://vitejs.dev/)
- use the bundled js within a html page
- use the API for basic navigation and drawing functionalities

During the bundle process a namespace is created:
- `vcs` containing all [@vcmap/core](https://github.com/virtualcitySYSTEMS/map-core) API, e.g. `new vcs.VcsApp()`
- `cesium` containing all [@vcmap-cesium/engine](https://cesium.com/learn/cesiumjs/ref-doc/index.html) API, e.g. `new cesium.Primitive()`
- `ol` containing a selected set of [ol](https://openlayers.org/en/latest/apidoc/) API, e.g. `new ol.Feature()`

> OpenLayers is only partially contained, since it does not provide a flat hierarchy!
> If you need more ol functionalities, feel free to adapt the [index.js](index.js)
> You will need to rebuild the library [see building](#building)

## Demo

Just copy `dist/` and `demo/` on a web server like Apache and open `{HOST}/demo/index.html` in a browser.

# Building

The dist folder contains the bundled library and required cesium assets.
You can adapt the class provided via namespace by changing the [index.js](index.js).
To build the bundled core library you can run `npm run build`, which will start the vite build process.
