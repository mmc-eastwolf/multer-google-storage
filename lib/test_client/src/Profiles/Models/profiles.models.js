"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var profileSchema = new mongoose.Schema({
    title: String,
    description: String,
    fileName: String
});
exports.ProfileRecord = mongoose.model('Profile', profileSchema);
//# sourceMappingURL=profiles.models.js.map