"use strict";
exports.__esModule = true;
exports.SpaceLocation = void 0;
var spacecraftName = 'Determination';
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
var daysToMars = getDaysToLocation(kilometersToMars);
console.log("".concat(spacecraftName, " would take ").concat(daysToMars, " days to get to Mars"));
function getDaysToLocation(kilometersAway) {
    var milesAway = kilometersAway * milesPerKilometer;
    var hours = milesAway / speedMph;
    return hours / 24;
}
var SpaceLocation = /** @class */ (function () {
    function SpaceLocation(name, kilometersAway) {
        this.name = name;
        this.kilometersAway = kilometersAway;
    }
    return SpaceLocation;
}());
exports.SpaceLocation = SpaceLocation;
var SpaceCraft = /** @class */ (function () {
    function SpaceCraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    SpaceCraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * milesPerKilometer;
        var hours = milesAway / this.speedMph;
        return hours / 24;
    };
    SpaceCraft.prototype.printDaysToLocation = function (location) {
        console.log("".concat(this.name, " would take ").concat(this.getDaysToLocation(location.kilometersAway), " days to get to ").concat(location.name, "."));
    };
    return SpaceCraft;
}());
