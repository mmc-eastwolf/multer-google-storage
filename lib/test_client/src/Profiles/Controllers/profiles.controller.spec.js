"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var chai_1 = require("chai");
var sinon = require("sinon");
var profiles_controller_1 = require("../Controllers/profiles.controller");
describe('profiles controller create', function () {
    it('returns index view', function () {
        return __awaiter(this, void 0, void 0, function () {
            var file, body, req, res;
            return __generator(this, function (_a) {
                file = { path: 'test' };
                body = { title: 'test title', description: 'test description' };
                req = {};
                res = {
                    render: sinon.stub()
                };
                profiles_controller_1.createProfile(req, res);
                sinon.assert.calledWith(res.render, 'index', { layout: false, title: 'Please upload your application' });
                return [2 /*return*/];
            });
        });
    });
});
describe('profiles controller', function () {
    return __awaiter(this, void 0, void 0, function () {
        var ProfileRecord;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require('../Models/profiles.models'); })];
                case 1:
                    ProfileRecord = (_a.sent()).ProfileRecord;
                    beforeEach(function () {
                        sinon.stub(ProfileRecord, 'find');
                    });
                    afterEach(function () {
                        ProfileRecord.find.restore();
                    });
                    it('should return expected models', function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var expectedModels, req, res;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        expectedModels = [{}, {}];
                                        ProfileRecord.find.resolves(expectedModels);
                                        req = {};
                                        res = {
                                            json: sinon.stub()
                                        };
                                        return [4 /*yield*/, profiles_controller_1.viewProfiles(req, res)];
                                    case 1:
                                        _a.sent();
                                        sinon.assert.calledWith(res.json, expectedModels);
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                    return [2 /*return*/];
            }
        });
    });
});
describe('profiles controller upload', function () {
    return __awaiter(this, void 0, void 0, function () {
        var ProfileRecord, ProfilePrototype;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.resolve().then(function () { return require('../Models/profiles.models'); })];
                case 1:
                    ProfileRecord = (_a.sent()).ProfileRecord;
                    ProfilePrototype = ProfileRecord.prototype;
                    beforeEach(function () {
                        sinon.stub(ProfileRecord.prototype, 'save');
                        ProfilePrototype.save.callsFake(function () {
                            var currentRecord = this;
                            return Promise.resolve(currentRecord);
                        });
                    });
                    afterEach(function () {
                        ProfilePrototype.save.restore();
                    });
                    it('should call save ', function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var file, body, req, createdModels, res;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        file = { path: 'test' };
                                        body = { title: 'test title', description: 'test description' };
                                        req = { file: file, body: body };
                                        createdModels = {};
                                        res = {
                                            json: function (data) { return createdModels = data; }
                                        };
                                        return [4 /*yield*/, profiles_controller_1.uploadProfile(req, res)];
                                    case 1:
                                        _a.sent();
                                        sinon.assert.called(ProfileRecord.prototype.save);
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                    it('should create, save and return Profile', function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var file, body, req, createdModel, res;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        file = { path: 'test' };
                                        body = { title: 'test title', description: 'test description' };
                                        req = { file: file, body: body };
                                        createdModel = {};
                                        res = {
                                            json: function (data) { return createdModel = data; }
                                        };
                                        return [4 /*yield*/, profiles_controller_1.uploadProfile(req, res)];
                                    case 1:
                                        _a.sent();
                                        chai_1.expect(createdModel.fileName).to.equal(file.path);
                                        chai_1.expect(createdModel.title).to.equal(body.title);
                                        chai_1.expect(createdModel.description).to.equal(body.description);
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                    return [2 /*return*/];
            }
        });
    });
});
//# sourceMappingURL=profiles.controller.spec.js.map