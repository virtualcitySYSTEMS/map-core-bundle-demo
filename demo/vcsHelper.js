/**
 * @param {import("@vcmap/core").VcsApp} vcsApp
 * @param {string} url
 * @returns {Promise<void>}
 */
async function loadContext(vcsApp, url) {
    const config = await fetch(url).then(response => response.json());
    const context = new window.vcs.Context(config);
    await vcsApp.addContext(context);
}

/**
 * Creates a new VcsApp instance, sets the map target and loads a configuration file
 * @returns {Promise<void>}
 */
async function init() {
    document.querySelector('#vcmap-core').onload = () => {
        // init App and load a config file
        const vcsApp = new window.vcs.VcsApp();
        vcsApp.maps.setTarget('myMapUUID');
        loadContext(vcsApp, 'https://new.virtualcitymap.de/map.config.json');
        // set cesium base url
        window.CESIUM_BASE_URL = '../dist/assets/cesium/';
        // adding helper instance to window
        window.vcsApp = vcsApp;
    }
}

/**
 * @param {VcsMap} map
 * @param {boolean} [out=false]
 * @param {number} [zoomFactor]
 * @returns {Promise<void>}
 */
async function zoom(map, out = false, zoomFactor = 2) {
    const viewpoint = await map.getViewpoint();
    if (out) {
        viewpoint.distance *= zoomFactor;
    } else {
        viewpoint.distance /= zoomFactor;
    }
    viewpoint.animate = true;
    viewpoint.duration = 0.5;
    viewpoint.cameraPosition = null;
    await map.gotoViewpoint(viewpoint);
}

/**
 * @param {MapCollection} maps
 * @param {string} mapName - name as defined in the context
 * @returns {Promise<void>}
 */
async function setActiveMap(maps, mapName) {
    await maps.setActiveMap(mapName);
}

function drawFeature(app, geometryType) {
    let layer = app.layers.getByKey('_demoDrawingLayer');
    if (!layer) {
        layer = new vcs.VectorLayer({
            name: '_demoDrawingLayer',
            vectorProperties: {
                altitudeMode: 'clampToGround',
            }
        });
        // layer style
        const style = new vcs.VectorStyleItem({
            fill: {
                color: '#ff0000',
            },
            stroke: {
                color: '#ffffff',
                width: 1,
            },
            image: {
                color: '#00ff00',
                src: '../dist/assets/cesium/Assets/Textures/pin.svg',
                scale: 10,
            },
        });
        layer.setStyle(style);
        app.layers.add(layer);
    }
    layer.activate();
    const session = vcs.startCreateFeatureSession(app, layer, geometryType);
    // adapt the features style
    const featureCreatedDestroy = session.featureCreated.addEventListener(feature => {
        if (feature.getGeometry() instanceof ol.geom.Point && layer.getFeatures().length > 1) {
            const pinStyle = new vcs.VectorStyleItem({});
            pinStyle.image = new ol.style.Icon({
                color: '#0000ff',
                src: './dist/assets/cesium/Assets/Textures/pin.svg',
            });
            feature.setStyle(pinStyle.style);
        }
    });
    // to draw only a single feature, stop the session, after creationFinished was fired
    const finishedDestroy = session.creationFinished.addEventListener(() => session.stop());
    const destroy = () => {
        featureCreatedDestroy();
        finishedDestroy();
    }
    return destroy;
}