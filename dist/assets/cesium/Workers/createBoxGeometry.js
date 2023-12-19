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
  BoxGeometry_default
} from "./chunk-ZA25DG4Y.js";
import "./chunk-MPAZH4BF.js";
import "./chunk-QMEMZIJI.js";
import "./chunk-EW2GWJYB.js";
import "./chunk-X4SU25DT.js";
import "./chunk-PFQBCKBM.js";
import "./chunk-QJ3DFBH3.js";
import "./chunk-DUHWWBQQ.js";
import "./chunk-LLUNNUJV.js";
import "./chunk-PCJWUS4M.js";
import "./chunk-N3JIFFX2.js";
import "./chunk-AHKEZ2OE.js";
import "./chunk-ABADGKYE.js";
import "./chunk-WXTV4ATB.js";
import "./chunk-4MFFIWUA.js";
import {
  defined_default
} from "./chunk-6BTKZDRG.js";

// packages/engine/Source/Workers/createBoxGeometry.js
function createBoxGeometry(boxGeometry, offset) {
  if (defined_default(offset)) {
    boxGeometry = BoxGeometry_default.unpack(boxGeometry, offset);
  }
  return BoxGeometry_default.createGeometry(boxGeometry);
}
var createBoxGeometry_default = createBoxGeometry;
export {
  createBoxGeometry_default as default
};
