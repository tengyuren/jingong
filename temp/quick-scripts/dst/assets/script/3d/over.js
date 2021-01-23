
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/3d/over.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFwzZFxcb3Zlci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImFnYWluQnRuIiwidHlwZSIsIk5vZGUiLCJzY29yZUxhYmVsIiwiTGFiZWwiLCJvbkxvYWQiLCJvbiIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwic2NvcmUiLCJOdW1iZXIiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RyaW5nIiwic2V0SXRlbSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFDO0FBQ0wsaUJBQVEsSUFESDtBQUVMQyxNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ007QUFGSCxLQUREO0FBS1JDLElBQUFBLFVBQVUsRUFBQztBQUNQLGlCQUFRLElBREQ7QUFFUEYsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNRO0FBRkQ7QUFMSCxHQUhQO0FBZ0JMQyxFQUFBQSxNQWhCSyxvQkFnQks7QUFDTixTQUFLTCxRQUFMLENBQWNNLEVBQWQsQ0FBaUIsWUFBakIsRUFBOEIsWUFBVTtBQUNwQ1YsTUFBQUEsRUFBRSxDQUFDVyxRQUFILENBQVlDLFNBQVosQ0FBc0IsSUFBdEI7QUFDSCxLQUZELEVBRUUsSUFGRjtBQUdBLFFBQUlDLEtBQUssR0FBR0MsTUFBTSxDQUFDZCxFQUFFLENBQUNlLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsT0FBNUIsQ0FBRCxDQUFsQjtBQUNBLFNBQUtWLFVBQUwsQ0FBZ0JXLE1BQWhCLEdBQXlCLFNBQU9MLEtBQWhDO0FBQ0FiLElBQUFBLEVBQUUsQ0FBQ2UsR0FBSCxDQUFPQyxZQUFQLENBQW9CRyxPQUFwQixDQUE0QixPQUE1QixFQUFvQyxDQUFwQztBQUNILEdBdkJJO0FBeUJMQyxFQUFBQSxLQXpCSyxtQkF5QkksQ0FFUixDQTNCSSxDQTZCTDs7QUE3QkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgYWdhaW5CdG46e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2NvcmVMYWJlbDp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5MYWJlbCxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5hZ2FpbkJ0bi5vbihcInRvdWNoc3RhcnRcIixmdW5jdGlvbigpeyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiM0RcIik7XHJcbiAgICAgICAgfSx0aGlzKTtcclxuICAgICAgICB2YXIgc2NvcmUgPSBOdW1iZXIoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2NvcmVcIikpO1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBcIuacgOe7iOW+l+WIhlwiK3Njb3JlO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNjb3JlXCIsMCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19