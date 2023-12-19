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
  PrimitivePipeline_default
} from "./chunk-34YUDLRP.js";
import {
  createTaskProcessorWorker_default
} from "./chunk-A4JVFBQ3.js";
import "./chunk-HQF437NJ.js";
import "./chunk-XTY7B2N6.js";
import "./chunk-O5AMBQ36.js";
import "./chunk-QT3MPEMI.js";
import "./chunk-MYZB7C4T.js";
import "./chunk-OYFCF4PL.js";
import "./chunk-RW6LU2CJ.js";
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
import "./chunk-6BTKZDRG.js";

// packages/engine/Source/Workers/combineGeometry.js
function combineGeometry(packedParameters, transferableObjects) {
  const parameters = PrimitivePipeline_default.unpackCombineGeometryParameters(
    packedParameters
  );
  const results = PrimitivePipeline_default.combineGeometry(parameters);
  return PrimitivePipeline_default.packCombineGeometryResults(
    results,
    transferableObjects
  );
}
var combineGeometry_default = createTaskProcessorWorker_default(combineGeometry);
export {
  combineGeometry_default as default
};
