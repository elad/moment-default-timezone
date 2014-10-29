var moment = require('moment-timezone');

// Create a moment before setting any timezone stuff. Should default to local time.
// I'm in Israel so that's GMT+02:00.
var local_time = moment();

// Set the default timezone to New York, which is at GMT-04:00.
moment.tz.setDefault('America/New_York');

// Create a moment after setting the default.
var new_york = moment();

// Set the default timezone to Los Angeles, which is at GMT-07:00.
moment.tz.setDefault('America/Los_Angeles');

// Create a moment after setting the default again.
var los_angeles = moment();

// Clone the local time moment.
var cloned_local_time = moment(local_time);

// Clone the New York moment.
var cloned_new_york = moment(new_york);

// Clone the Los Angeles moment.
var cloned_los_angeles = moment(los_angeles);

// Print everything to see how we did.
console.log('Local time      :', local_time.format(),         '    Timezone:', local_time._zn);
console.log('New York        :', new_york.format(),           '    Timezone:', new_york._zn);
console.log('Los Angeles     :', los_angeles.format(),        '    Timezone:', los_angeles._zn);
console.log('Local time  [*] :', cloned_local_time.format(),  '    Timezone:', cloned_local_time._zn);
console.log('New York    [*] :', cloned_new_york.format(),    '    Timezone:', cloned_new_york._zn);
console.log('Los Angeles [*] :', cloned_los_angeles.format(), '    Timezone:', cloned_los_angeles._zn);
