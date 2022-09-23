"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function loggeable(construct) {
    construct.prototype.warn = function (message) {
        console.warn(message);
    };
    construct.prototype.table = function (table) {
        console.table(table);
    };
}
let Logger = class Logger {
};
Logger = __decorate([
    loggeable
], Logger);
let logger = new Logger();
logger.warn("hey paul")(logger).table({ name: "paul", age: 98 });
