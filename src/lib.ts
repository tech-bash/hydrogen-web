/*
Copyright 2021 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

export {Platform} from "./platform/web/Platform.js";
export {Client, LoadStatus} from "./matrix/Client.js";
// export main view & view models
export {createNavigation, createRouter} from "./domain/navigation/index.js";
export {RootViewModel} from "./domain/RootViewModel.js";
export {RootView} from "./platform/web/ui/RootView.js";
export {SessionViewModel} from "./domain/session/SessionViewModel.js";
export {SessionView} from "./platform/web/ui/session/SessionView.js";
export {RoomViewModel} from "./domain/session/room/RoomViewModel.js";
export {RoomView} from "./platform/web/ui/session/room/RoomView.js";
export {TimelineViewModel} from "./domain/session/room/timeline/TimelineViewModel.js";
export {TimelineView} from "./platform/web/ui/session/room/TimelineView";
