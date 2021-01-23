
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/login/btn_play_copy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsb2dpblxcYnRuX3BsYXlfY29weS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsIm9uVG91Y2hTdGFydENhbGxiYWNrIiwiVE9VQ0hfRU5EIiwib25Ub3VjaEVuZENhbGxiYWNrIiwidXJsIiwid2lkdGgiLCJoZWlnaHQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZSIsInJlc3BvbnNlVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsImRhdGEiLCJzZW5kIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBTUxDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUNoQixTQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYU4sRUFBRSxDQUFDTyxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFdBQS9CLEVBQTRDLEtBQUtDLG9CQUFqRCxFQUF1RSxJQUF2RTtBQUNBLFNBQUtMLElBQUwsQ0FBVUMsRUFBVixDQUFhTixFQUFFLENBQUNPLElBQUgsQ0FBUUMsU0FBUixDQUFrQkcsU0FBL0IsRUFBMEMsS0FBS0Msa0JBQS9DLEVBQW1FLElBQW5FO0FBRUgsR0FWSTtBQVdMRixFQUFBQSxvQkFYSyxrQ0FXa0I7QUFDbkJHLElBQUFBLEdBQUcsR0FBQyw0QkFBSixDQURtQixDQUVuQjs7QUFDQSxTQUFLUixJQUFMLENBQVVTLEtBQVYsR0FBZ0IsR0FBaEI7QUFDQSxTQUFLVCxJQUFMLENBQVVVLE1BQVYsR0FBaUIsRUFBakI7QUFDQSxRQUFJQyxHQUFHLEdBQUcsSUFBSUMsY0FBSixFQUFWOztBQUNBRCxJQUFBQSxHQUFHLENBQUNFLGtCQUFKLEdBQXlCLFlBQVk7QUFDakMsVUFBSUYsR0FBRyxDQUFDRyxVQUFKLElBQWtCLENBQWxCLElBQXdCSCxHQUFHLENBQUNJLE1BQUosSUFBYyxHQUFkLElBQXFCSixHQUFHLENBQUNJLE1BQUosR0FBYSxHQUE5RCxFQUFvRTtBQUNoRSxZQUFJQyxRQUFRLEdBQUdMLEdBQUcsQ0FBQ00sWUFBbkI7QUFDQUMsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILFFBQVo7QUFDSDtBQUNKLEtBTEQ7O0FBTUFMLElBQUFBLEdBQUcsQ0FBQ1MsSUFBSixDQUFTLE1BQVQsRUFBaUJaLEdBQWpCLEVBQXNCLElBQXRCO0FBQ0FHLElBQUFBLEdBQUcsQ0FBQ1UsZ0JBQUosQ0FBcUIsY0FBckIsRUFBcUMsa0JBQXJDO0FBQ0FDLElBQUFBLElBQUksR0FBQyxrQkFBTDtBQUNBWCxJQUFBQSxHQUFHLENBQUNZLElBQUosQ0FBU0QsSUFBVDtBQUVILEdBNUJJO0FBNkJMZixFQUFBQSxrQkE3QkssZ0NBNkJlO0FBQ2hCVyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0EsU0FBS25CLElBQUwsQ0FBVVMsS0FBVixHQUFnQixHQUFoQjtBQUNBLFNBQUtULElBQUwsQ0FBVVUsTUFBVixHQUFpQixFQUFqQjtBQUNILEdBakNJO0FBbUNMYyxFQUFBQSxLQW5DSyxtQkFtQ0ksQ0FFUjtBQXJDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0Q2FsbGJhY2ssIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZENhbGxiYWNrLCB0aGlzKTtcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBvblRvdWNoU3RhcnRDYWxsYmFjaygpIHtcclxuICAgICAgICB1cmw9XCJodHRwOi8vMTIxLjM2LjIxOS4yMTE6ODA4MFwiXHJcbiAgICAgICAgLy8gdXJsPVwiaHR0cDovL2xvY2FsaG9zdDo4MDgwXCJcclxuICAgICAgICB0aGlzLm5vZGUud2lkdGg9MTkwXHJcbiAgICAgICAgdGhpcy5ub2RlLmhlaWdodD01NVxyXG4gICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDQwMCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICBkYXRhPSd7XCJteXNxbFwiOlwidGVzdFwifSdcclxuICAgICAgICB4aHIuc2VuZChkYXRhKTtcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBvblRvdWNoRW5kQ2FsbGJhY2soKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNvbmdrYWlcIilcclxuICAgICAgICB0aGlzLm5vZGUud2lkdGg9MTk1XHJcbiAgICAgICAgdGhpcy5ub2RlLmhlaWdodD02MFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgXHJcbn0pO1xyXG4iXX0=