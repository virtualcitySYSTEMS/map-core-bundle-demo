/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.109.3
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import {
  EllipseOutlineGeometry_default
} from "./chunk-JB2LWGH4.js";
import "./chunk-QIKODV5G.js";
import "./chunk-MPAZH4BF.js";
import "./chunk-RW6LU2CJ.js";
import "./chunk-EW2GWJYB.js";
import "./chunk-X4SU25DT.js";
import "./chunk-PFQBCKBM.js";
import "./chunk-QJ3DFBH3.js";
import "./chunk-DUHWWBQQ.js";
import "./chunk-LLUNNUJV.js";
import {
  Cartesian3_default,
  Ellipsoid_default
} from "./chunk-PCJWUS4M.js";
import "./chunk-N3JIFFX2.js";
import "./chunk-AHKEZ2OE.js";
import "./chunk-ABADGKYE.js";
import "./chunk-WXTV4ATB.js";
import "./chunk-4MFFIWUA.js";
import {
  defined_default
} from "./chunk-6BTKZDRG.js";

// packages/engine/Source/Workers/createEllipseOutlineGeometry.js
function createEllipseOutlineGeometry(ellipseGeometry, offset) {
  if (defined_default(offset)) {
    ellipseGeometry = EllipseOutlineGeometry_default.unpack(ellipseGeometry, offset);
  }
  ellipseGeometry._center = Cartesian3_default.clone(ellipseGeometry._center);
  ellipseGeometry._ellipsoid = Ellipsoid_default.clone(ellipseGeometry._ellipsoid);
  return EllipseOutlineGeometry_default.createGeometry(ellipseGeometry);
}
var createEllipseOutlineGeometry_default = createEllipseOutlineGeometry;
export {
  createEllipseOutlineGeometry_default as default
};
