'use strict';

function Thermostat() {
  this.MINIMUM_TEMP = 10;
  this.temperature = 20;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
}

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMP;
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