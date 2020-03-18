'use strict';

function Thermostat() {
  this.MINIMUM_TEMP = 10;
  this.powerSavingMode = true;
  this.temperature = 20;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
}

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMP;
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
}

Thermostat.prototype.switchPowerSavingModeOff = function() {
  return this.powerSavingMode = false;
}

Thermostat.prototype.up = function() {
  this.temperature += 1;
}

Thermostat.prototype.down = function(){
  if(this.isMinimumTemperature()) {
    return
  } 
  this.temperature -= 1;
}