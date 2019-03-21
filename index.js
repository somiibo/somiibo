//BOT OBJ
var bot = (function() {

  const {ipcRenderer} = require('electron')
  const remote = require('electron').remote;
  const _ = require('lodash');

  // New Database (0.2.21)
  var temp_dbPath = (ipcRenderer.sendSync('getGlobal', 'mainState').path_userDataDir)
  const low = require('lowdb')
  const FileSync = require('lowdb/adapters/FileSync')
  const db = low(new FileSync(temp_dbPath + 'db_settings.json'))
  const db_stats = low(new FileSync(temp_dbPath + 'db_stats.json'))

  const defaultSettingsAll = ipcRenderer.sendSync('getGlobal', 'mainState').datastorage.bot_meta.bot_settings

  var local_Tab = ''
  var local_TabKey = ''
  var local_BotId = ''
  var local_botModule = {}

  var LOCAL_OBJ_MAINSTATE;

  var local_userSettingsBot;
  var local_userSettingsGlobals;
  var local_promoList;
  var local_breaksEnabled = false;
  var local_botStats = {};
  local_botStats.started = 0;
  local_botStats.elapsed = 0;
  local_botStats.status = "stopped";
  local_botStats.stats = "";

  const botDelay = 30
  const botDelayRandom = 30
  // const waitTimeout = 10000 //4500
  const waitTimeout = 10000 //4500
  var RUNDELAY_ORIGINAL = 1000;
  var RUNDELAY = RUNDELAY_ORIGINAL;
  var BOT_BREAKING = false;
  var local_promoRate = 0;

  var timeStart;
  var timeBreak;
  var timeBreakReset = true;
  var timeCur;

  var timeToRefreshAt = 0;
  // var refreshFreq = 18060000;
  var refreshFreq = 5000;


  var timeToBreakAt = 0;
  var timeToResumeAt = 0;
  var breakFreq = 0
  var breakFreqUnit = 0
  var breakLength = 0
  var breakLengthUnit = 0;

  var trackingTimer = 0;
  var promoTimer = 0;
  var botStatsTimer = 0;
  var promoAttempts = 0;

  var timer_cacheFix = 0;


  var protocol = 'init';
  var waitTimer = 0;
  var waitCounterVar = setInterval(_waitCounter, 10);
  var waiting = false;

  var respectBreaks = true;

  // var environment = remote.getGlobal('mainState').env
  var environment = ipcRenderer.sendSync('getGlobal', 'mainState').env
  // var devEmail = (remote.getGlobal('mainState').user.settings_profile_email == 'qweqwe@gmail.com')
  var devEmail = (ipcRenderer.sendSync('getGlobal', 'mainState').user.settings_profile_email == 'qweqwe@gmail.com')
  var devLogEnabled = false;

  var customProxyList;
  var customProxyListLength;

  var returnObj = {};
  var currentReturnKey = '';

  var timeoutSaver;

  function _selectElement (elem) {
    if (_getStatus() == 'stopped') { return }
    var currentCommand = 'selectElement'

    return new Promise(function(resolve, reject) {
      _waitForProperty(currentCommand, 'clear').then(function(result) {
        ipcRenderer.send('module.command', local_TabKey, [currentCommand, elem])
        _waitForProperty(currentCommand, 'set').then(function(result) {
          _consoleLogProtocol('selecting element ['+JSON.stringify(elem,null, 2)+']');
          resolve()
        })
      })
    });
  }



function _cacheFix() {
  if (local_botModule.respectCacheClear == true) {
    remote.getCurrentWebContents().session.clearCache(function(){
      // callback
      _consoleLog('@@@ CACHE CLEARED')

    });
    remote.getCurrentWebContents().session.clearStorageData(
      {
          storages: [
              'appcache',
              'cookies',
              'filesystem',
              'indexdb',
              'localstorage',
              'shadercache', // this was clearing the cache (Specifically firebase login on main window) when the partition was the same
              'websql',
              'serviceworkers'
          ],
          quotas: [
              'temporary',
              'persistent',
              'syncable'
          ]
      },
      function() {
        // callback
        _consoleLog('@@@ STORAGE CLEARED')

      }
  );

    // send to webview
    ipcRenderer.send('module.command', local_TabKey, ['cacheFix']);


  } else {
    _consoleLog('@@@ CACHE/STORAGE NOT CLEARED BC THIS MODULE DOES NOT RESPECT THIS FUNCTION')
  }
  return true;


}


  return {
    selectElement: _selectElement,
    cacheFix: _cacheFix

  };
})();

module.exports = bot;
