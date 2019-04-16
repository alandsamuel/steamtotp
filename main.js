const SteamTotp = require('steam-totp');
const SteamLogin = require("@sulphate/steamlogin");

const appConfig = require('../config/config.json');
const accConfig = require('../config/account.json');

cache cache = require('memory-cache');

let steamTime = SteamTotp.time(appConfig.timeOffset);

