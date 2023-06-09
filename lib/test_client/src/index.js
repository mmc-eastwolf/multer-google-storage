"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var chalk = require("chalk");
var profiles_routes_1 = require("./Profiles/Routes/profiles.routes");
//declare out start up logic
var appStart = function () {
    var app = express();
    //setup our features (of which there is one)
    var profilesViews = profiles_routes_1.default(app);
    //setup our view engine
    app.set('view engine', 'pug');
    //start the app
    app.listen('3002', function () { return console.log(chalk.green('Server listening on port 3002')); });
};
appStart();
//# sourceMappingURL=index.js.map