
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/3d/operator.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFwzZFxcb3BlcmF0b3IuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJyb3VuZCIsInR5cGUiLCJOb2RlIiwibmV4dEJ0biIsIm9uTG9hZCIsInRvdWNoZG93biIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJldmVudCIsIlRPVUNIX01PVkUiLCJkZWx0YSIsImdldERlbHRhIiwieCIsInkiLCJUT1VDSF9FTkQiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFDO0FBQ0YsaUJBQVEsSUFETjtBQUVGQyxNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ007QUFGTixLQURFO0FBS1JDLElBQUFBLE9BQU8sRUFBQztBQUNKLGlCQUFRLElBREo7QUFFSkYsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNNO0FBRko7QUFMQSxHQUhQO0FBZ0JMRSxFQUFBQSxNQWhCSyxvQkFnQks7QUFBQTs7QUFDTixRQUFJQyxTQUFTLEdBQUcsS0FBaEI7QUFDQSxTQUFLTCxLQUFMLENBQVdNLEVBQVgsQ0FBY1YsRUFBRSxDQUFDTSxJQUFILENBQVFLLFNBQVIsQ0FBa0JDLFdBQWhDLEVBQTRDLFVBQUNDLEtBQUQsRUFBUztBQUNqREosTUFBQUEsU0FBUyxHQUFHLElBQVo7QUFDSCxLQUZELEVBRUUsSUFGRjtBQUdBLFNBQUtMLEtBQUwsQ0FBV00sRUFBWCxDQUFjVixFQUFFLENBQUNNLElBQUgsQ0FBUUssU0FBUixDQUFrQkcsVUFBaEMsRUFBMkMsVUFBQ0QsS0FBRCxFQUFTO0FBQ2hELFVBQUcsQ0FBQ0osU0FBSixFQUFjO0FBRVY7QUFDSCxPQUorQyxDQUtoRDtBQUNBO0FBQ0E7OztBQUVBLFVBQUlNLEtBQUssR0FBR0YsS0FBSyxDQUFDRyxRQUFOLEVBQVo7QUFDQSxNQUFBLEtBQUksQ0FBQ1osS0FBTCxDQUFXYSxDQUFYLEdBQWUsS0FBSSxDQUFDYixLQUFMLENBQVdhLENBQVgsR0FBZUYsS0FBSyxDQUFDRSxDQUFwQztBQUNBLE1BQUEsS0FBSSxDQUFDYixLQUFMLENBQVdjLENBQVgsR0FBZSxLQUFJLENBQUNkLEtBQUwsQ0FBV2MsQ0FBWCxHQUFlSCxLQUFLLENBQUNHLENBQXBDO0FBQ0gsS0FaRCxFQVlFLElBWkY7QUFhQSxTQUFLZCxLQUFMLENBQVdNLEVBQVgsQ0FBY1YsRUFBRSxDQUFDTSxJQUFILENBQVFLLFNBQVIsQ0FBa0JRLFNBQWhDLEVBQTBDLFVBQUNOLEtBQUQsRUFBUztBQUMvQ0osTUFBQUEsU0FBUyxHQUFHLEtBQVo7O0FBQ0EsVUFBRyxLQUFJLENBQUNMLEtBQUwsQ0FBV2EsQ0FBWCxHQUFhLEdBQWIsSUFBb0IsS0FBSSxDQUFDYixLQUFMLENBQVdhLENBQVgsR0FBYSxHQUFqQyxJQUF1QyxLQUFJLENBQUNiLEtBQUwsQ0FBV2MsQ0FBWCxHQUFhLEtBQXBELElBQTJELEtBQUksQ0FBQ2QsS0FBTCxDQUFXYyxDQUFYLEdBQWEsS0FBM0UsRUFBaUY7QUFDN0UsUUFBQSxLQUFJLENBQUNkLEtBQUwsQ0FBV2EsQ0FBWCxHQUFlLEdBQWY7QUFDQSxRQUFBLEtBQUksQ0FBQ2IsS0FBTCxDQUFXYyxDQUFYLEdBQWUsS0FBZjtBQUNILE9BSEQsTUFHSztBQUNELFFBQUEsS0FBSSxDQUFDZCxLQUFMLENBQVdhLENBQVgsR0FBZSxDQUFmO0FBQ0EsUUFBQSxLQUFJLENBQUNiLEtBQUwsQ0FBV2MsQ0FBWCxHQUFlLENBQUMsR0FBaEI7QUFDSDtBQUNKLEtBVEQ7QUFVQSxTQUFLWCxPQUFMLENBQWFHLEVBQWIsQ0FBZ0IsWUFBaEIsRUFBNkIsWUFBVTtBQUNuQ1YsTUFBQUEsRUFBRSxDQUFDb0IsUUFBSCxDQUFZQyxTQUFaLENBQXNCLElBQXRCO0FBQ0gsS0FGRCxFQUVFLElBRkY7QUFJSCxHQWhESTtBQWtETEMsRUFBQUEsS0FsREssbUJBa0RJLENBRVIsQ0FwREksQ0FzREw7O0FBdERLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHJvdW5kOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBuZXh0QnRuOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGxldCB0b3VjaGRvd24gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJvdW5kLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULChldmVudCk9PntcclxuICAgICAgICAgICAgdG91Y2hkb3duID0gdHJ1ZTtcclxuICAgICAgICB9LHRoaXMpO1xyXG4gICAgICAgIHRoaXMucm91bmQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwoZXZlbnQpPT57ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZighdG91Y2hkb3duKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIC8vIHZhciByb3VuZGhpZ2hsaWdodCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucm91bmRIaWdobGlnaHQpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuYWRkQ2hpbGQocm91bmRoaWdobGlnaHQsMSxcImhpZ2hsaWdodFwiKTtcclxuICAgICAgICAgICAgLy8gcm91bmRoaWdobGlnaHQuc2V0UG9zaXRpb24oMzgwLDEzMS40KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkZWx0YSA9IGV2ZW50LmdldERlbHRhKCk7XHJcbiAgICAgICAgICAgIHRoaXMucm91bmQueCA9IHRoaXMucm91bmQueCArIGRlbHRhLng7XHJcbiAgICAgICAgICAgIHRoaXMucm91bmQueSA9IHRoaXMucm91bmQueSArIGRlbHRhLnk7XHJcbiAgICAgICAgfSx0aGlzKTtcclxuICAgICAgICB0aGlzLnJvdW5kLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIHRvdWNoZG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZih0aGlzLnJvdW5kLng8NDA1ICYmIHRoaXMucm91bmQueD4zNTUgJiZ0aGlzLnJvdW5kLnk+MTA2LjQmJnRoaXMucm91bmQueTwxNTYuNCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdW5kLnggPSAzODA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdW5kLnkgPSAxMzEuNDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdW5kLnggPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3VuZC55ID0gLTcwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5uZXh0QnRuLm9uKFwidG91Y2hzdGFydFwiLGZ1bmN0aW9uKCl7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCIzRFwiKTtcclxuICAgICAgICB9LHRoaXMpO1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==