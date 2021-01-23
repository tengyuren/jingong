"use strict";
cc._RF.push(module, '5c033PcS05I2YPIvgRHDVdI', 'over');
// script/3d/over.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    againBtn: {
      "default": null,
      type: cc.Node
    },
    scoreLabel: {
      "default": null,
      type: cc.Label
    }
  },
  onLoad: function onLoad() {
    this.againBtn.on("touchstart", function () {
      cc.director.loadScene("3D");
    }, this);
    var score = Number(cc.sys.localStorage.getItem("score"));
    this.scoreLabel.string = "最终得分" + score;
    cc.sys.localStorage.setItem("score", 0);
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();