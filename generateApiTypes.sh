#!/bin/bash

make_types -i src/apiTypes/PlaybackStateResponse.ts -p proxies.ts api-sample/playbackStateSample.json PlaybackState

make_types -i src/apiTypes/GetAvailableDevicesResponse.ts -p proxies.ts api-sample/availableDevicesSample.json GetAvailableDevicesResponse

make_types -i src/apiTypes/SearchResponse.ts -p proxies.ts api-sample/searchResponseSample.json SearchResponseSample

