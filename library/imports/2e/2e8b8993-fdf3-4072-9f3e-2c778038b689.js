"use strict";
cc._RF.push(module, '2e8b8mT/fNAcp8+LHeAOLaJ', 'operator');
// script/3d/operator.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    round: {
      "default": null,
      type: cc.Node
    },
    nextBtn: {
      "default": null,
      type: cc.Node
    }
  },
  onLoad: function onLoad() {
    var _this = this;

    var touchdown = false;
    this.round.on(cc.Node.EventType.TOUCH_START, function (event) {
      touchdown = true;
    }, this);
    this.round.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      if (!touchdown) {
        return;
      } // var roundhighlight = cc.instantiate(this.roundHighlight);
      // this.node.addChild(roundhighlight,1,"highlight");
      // roundhighlight.setPosition(380,131.4);


      var delta = event.getDelta();
      _this.round.x = _this.round.x + delta.x;
      _this.round.y = _this.round.y + delta.y;
    }, this);
    this.round.on(cc.Node.EventType.TOUCH_END, function (event) {
      touchdown = false;

      if (_this.round.x < 405 && _this.round.x > 355 && _this.round.y > 106.4 && _this.round.y < 156.4) {
        _this.round.x = 380;
        _this.round.y = 131.4;
      } else {
        _this.round.x = 0;
        _this.round.y = -700;
      }
    });
    this.nextBtn.on("touchstart", function () {
      cc.director.loadScene("3D");
    }, this);
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();