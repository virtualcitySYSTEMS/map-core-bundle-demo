import * as vcs from '@vcmap/core';
import * as ol from 'ol';
import Circle from 'ol/geom/Circle';
import LinearRing from 'ol/geom/LinearRing';
import LineString from 'ol/geom/LineString';
import MultiLineString from 'ol/geom/MultiLineString';
import MultiPoint from 'ol/geom/MultiPoint';
import MultiPolygon from 'ol/geom/MultiPolygon';
import Point from 'ol/geom/Point';
import Polygon from 'ol/geom/Polygon';
import * as cesium from '@vcmap-cesium/engine';
import Fill from 'ol/style/Fill';
import Icon from 'ol/style/Icon';
import Image from 'ol/style/Image';
import RegularShape from 'ol/style/RegularShape';
import Stroke from 'ol/style/Stroke';
import Style from 'ol/style/Style';
import Text from 'ol/style/Text';

window.vcs = vcs;
window.ol = {
    geom: {
        Circle,
        LinearRing,
        LineString,
        MultiLineString,
        MultiPoint,
        MultiPolygon,
        Point,
        Polygon,
    },
    style: {
        Fill,
        Icon,
        Image,
        RegularShape,
        Stroke,
        Style,
        Text,
    },
    ...ol,
};
window.cesium = cesium;
window.CESIUM_BASE_URL = './assets/cesium/';