"use strict";
cc._RF.push(module, '254b1hfMBlPhrkgR5ylTOic', 'btn_play_copy');
// script/login/btn_play_copy.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStartCallback, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEndCallback, this);
  },
  onTouchStartCallback: function onTouchStartCallback() {
    url = "http://121.36.219.211:8080"; // url="http://localhost:8080"

    this.node.width = 190;
    this.node.height = 55;
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) {
        var response = xhr.responseText;
        console.log(response);
      }
    };

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    data = '{"mysql":"test"}';
    xhr.send(data);
  },
  onTouchEndCallback: function onTouchEndCallback() {
    console.log("songkai");
    this.node.width = 195;
    this.node.height = 60;
  },
  start: function start() {}
});

cc._RF.pop();