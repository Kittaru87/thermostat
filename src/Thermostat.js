'use strict';

function Thermostat() {
  this.MINIMUM_TEMP = 10;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this.powerSavingMode = true;
  this.temperature = 20;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
}

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMP;
}

Thermostat.prototype.isMaximumTemperature = function() {
  if(this.isPowerSavingModeOn() === false) {
    return this.temperature === this.MAX_TEMP_PSM_OFF;
  }
  return this.temperature === this.MAX_TEMP_PSM_ON;
}

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
}

Thermostat.prototype.switchPowerSavingModeOff = function() {
  return this.powerSavingMode = false;
}

Thermostat.prototype.switchPowerSavingModeOn = function() {
  return this.powerSavingMode = true;
}

Thermostat.prototype.up = function() {
  if(this.isMaximumTemperature()) {
    return
  }
  this.temperature += 1;
}

Thermostat.prototype.down = function(){
  if(this.isMinimumTemperature()) {
    return
  } 
  this.temperature -= 1;
}