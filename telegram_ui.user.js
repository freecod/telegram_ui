// ==UserScript==
// @id              TelegramUI
// @name            Telegram UI
// @namespace       http://www.freecod.ru/
// @version         0.0.1
// @author          freecod < https://github.com/freecod >
// @description     Few new features for web version telegram
// @updateURL       
// @downloadURL     
// ==/UserScript==

(function () {
  var styleTable = 'li.im_dialog_wrap {width: 103px;height: 103px;float: left;}li.im_dialog_wrap > a {min-width: 103px;min-height: 103px;}div.im_dialog_photo {position: absolute;left: 27px;top: 27px;}span.im_dialog_badge {position: absolute;right: 20px;top: 20px;z-index: 100;}i.im_dialog_pinned {position: absolute;right: 10px;top: 20px;z-index: 90;}div.im_dialog_peer {position: absolute;top: 5px;max-width: 71px;width: 100%;text-align: center;}div.im_dialog_date {display: none;}div.im_dialog_message {position: absolute;bottom: 5px;max-width: 71px;}.im_dialogs_scrollable_wrap .active a.im_dialog {margin-right: 0;}';
  var head = document.getElementsByTagName('head') [0];
  var styles = document.createElement('style');
  styles.innerHTML = styleTable;
  head.appendChild(styles);
  var scrollDiv = document.getElementsByClassName('im_dialogs_scrollable_wrap') [0];
  scrollDiv.trigger('scrollend');
}) ();
