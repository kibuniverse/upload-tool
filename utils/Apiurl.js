"use strict";
exports.__esModule = true;
var ipUrl = 'http://127.0.0.1:8001/';
var servicePath = {
    sendChunkRequest: ipUrl + 'file_upload',
    mergeRequest: ipUrl + 'mergeReq',
    verify: ipUrl + 'verify'
};
exports["default"] = servicePath;
