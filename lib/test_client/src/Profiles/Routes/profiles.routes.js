"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var profiles_controller_1 = require("../Controllers/profiles.controller");
var upload_service_1 = require("../Services/upload.service");
var path = require("path");
var router = express_1.Router();
router.get('/', profiles_controller_1.createProfile);
router.post('/upload', upload_service_1.createUploadHandler.single('image'), profiles_controller_1.uploadProfile);
router.get('/profiles', profiles_controller_1.viewProfiles);
var profiles = function (app) {
    app.use('/', router);
    return path.resolve(__dirname, '../Views');
};
exports.default = profiles;
//# sourceMappingURL=profiles.routes.js.map