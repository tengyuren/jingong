
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/education/dialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ce2cmAPVhJwa4Mp0Uu6/D+', 'dialog');
// script/education/dialog.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    nextBtn: {
      "default": null,
      type: cc.Node
    },
    dialog: {
      "default": null,
      type: cc.Label
    },
    step: 1
  },
  dialogChange: function dialogChange() {
    this.step += 1;

    if (this.step == 2) {
      this.dialog.string = "接下来我们一起去了解一下工\n训中心吧！";
    } else if (this.step == 3) {
      this.dialog.string = "加苏尔真帅！！！";
    }
  },
  onLoad: function onLoad() {
    this.nextBtn.on("touchstart", this.dialogChange, this);
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlZHVjYXRpb25cXGRpYWxvZy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm5leHRCdG4iLCJ0eXBlIiwiTm9kZSIsImRpYWxvZyIsIkxhYmVsIiwic3RlcCIsImRpYWxvZ0NoYW5nZSIsInN0cmluZyIsIm9uTG9hZCIsIm9uIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxPQUFPLEVBQUM7QUFDSixpQkFBUSxJQURKO0FBRUpDLE1BQUFBLElBQUksRUFBQ0wsRUFBRSxDQUFDTTtBQUZKLEtBREE7QUFLUkMsSUFBQUEsTUFBTSxFQUFDO0FBQ0gsaUJBQVEsSUFETDtBQUVIRixNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ1E7QUFGTCxLQUxDO0FBU1JDLElBQUFBLElBQUksRUFBQztBQVRHLEdBSFA7QUFlTEMsRUFBQUEsWUFBWSxFQUFDLHdCQUFVO0FBQ25CLFNBQUtELElBQUwsSUFBVyxDQUFYOztBQUNBLFFBQUcsS0FBS0EsSUFBTCxJQUFhLENBQWhCLEVBQWtCO0FBQ2QsV0FBS0YsTUFBTCxDQUFZSSxNQUFaLEdBQXFCLHNCQUFyQjtBQUNILEtBRkQsTUFHSyxJQUFHLEtBQUtGLElBQUwsSUFBYSxDQUFoQixFQUFrQjtBQUNuQixXQUFLRixNQUFMLENBQVlJLE1BQVosR0FBcUIsVUFBckI7QUFDSDtBQUNKLEdBdkJJO0FBeUJMQyxFQUFBQSxNQXpCSyxvQkF5Qks7QUFDTixTQUFLUixPQUFMLENBQWFTLEVBQWIsQ0FBZ0IsWUFBaEIsRUFBNkIsS0FBS0gsWUFBbEMsRUFBK0MsSUFBL0M7QUFDSCxHQTNCSTtBQTZCTEksRUFBQUEsS0E3QkssbUJBNkJJLENBRVIsQ0EvQkksQ0FpQ0w7O0FBakNLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIG5leHRCdG46e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGlhbG9nOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkxhYmVsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RlcDoxLFxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIGRpYWxvZ0NoYW5nZTpmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuc3RlcCs9MTtcclxuICAgICAgICBpZih0aGlzLnN0ZXAgPT0gMil7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nLnN0cmluZyA9IFwi5o6l5LiL5p2l5oiR5Lus5LiA6LW35Y675LqG6Kej5LiA5LiL5belXFxu6K6t5Lit5b+D5ZCn77yBXCJcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLnN0ZXAgPT0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nLnN0cmluZyA9IFwi5Yqg6IuP5bCU55yf5biF77yB77yB77yBXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5uZXh0QnRuLm9uKFwidG91Y2hzdGFydFwiLHRoaXMuZGlhbG9nQ2hhbmdlLHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==