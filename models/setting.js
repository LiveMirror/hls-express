var mongoose = require('mongoose');
var SettingSchema = require('../schemas/Setting');
var Setting = mongoose.model('Setting', SettingSchema);

module.exports = Setting;