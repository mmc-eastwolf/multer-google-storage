"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var multer = require("multer");
var multer_google_storage_1 = require("multer-google-storage");
var createUploadHandler = multer({
    storage: new multer_google_storage_1.default()
});
exports.createUploadHandler = createUploadHandler;
//# sourceMappingURL=upload.service.js.map