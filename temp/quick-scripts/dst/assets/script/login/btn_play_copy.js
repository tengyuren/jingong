
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
    // url="http://121.36.219.211:8080"
    url = "http://localhost:8080";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsb2dpblxcYnRuX3BsYXlfY29weS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsIm9uVG91Y2hTdGFydENhbGxiYWNrIiwiVE9VQ0hfRU5EIiwib25Ub3VjaEVuZENhbGxiYWNrIiwidXJsIiwid2lkdGgiLCJoZWlnaHQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZSIsInJlc3BvbnNlVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsImRhdGEiLCJzZW5kIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBTUxDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUNoQixTQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYU4sRUFBRSxDQUFDTyxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFdBQS9CLEVBQTRDLEtBQUtDLG9CQUFqRCxFQUF1RSxJQUF2RTtBQUNBLFNBQUtMLElBQUwsQ0FBVUMsRUFBVixDQUFhTixFQUFFLENBQUNPLElBQUgsQ0FBUUMsU0FBUixDQUFrQkcsU0FBL0IsRUFBMEMsS0FBS0Msa0JBQS9DLEVBQW1FLElBQW5FO0FBRUgsR0FWSTtBQVdMRixFQUFBQSxvQkFYSyxrQ0FXa0I7QUFDbkI7QUFDQUcsSUFBQUEsR0FBRyxHQUFDLHVCQUFKO0FBQ0EsU0FBS1IsSUFBTCxDQUFVUyxLQUFWLEdBQWdCLEdBQWhCO0FBQ0EsU0FBS1QsSUFBTCxDQUFVVSxNQUFWLEdBQWlCLEVBQWpCO0FBQ0EsUUFBSUMsR0FBRyxHQUFHLElBQUlDLGNBQUosRUFBVjs7QUFDQUQsSUFBQUEsR0FBRyxDQUFDRSxrQkFBSixHQUF5QixZQUFZO0FBQ2pDLFVBQUlGLEdBQUcsQ0FBQ0csVUFBSixJQUFrQixDQUFsQixJQUF3QkgsR0FBRyxDQUFDSSxNQUFKLElBQWMsR0FBZCxJQUFxQkosR0FBRyxDQUFDSSxNQUFKLEdBQWEsR0FBOUQsRUFBb0U7QUFDaEUsWUFBSUMsUUFBUSxHQUFHTCxHQUFHLENBQUNNLFlBQW5CO0FBQ0FDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxRQUFaO0FBQ0g7QUFDSixLQUxEOztBQU1BTCxJQUFBQSxHQUFHLENBQUNTLElBQUosQ0FBUyxNQUFULEVBQWlCWixHQUFqQixFQUFzQixJQUF0QjtBQUNBRyxJQUFBQSxHQUFHLENBQUNVLGdCQUFKLENBQXFCLGNBQXJCLEVBQXFDLGtCQUFyQztBQUNBQyxJQUFBQSxJQUFJLEdBQUMsa0JBQUw7QUFDQVgsSUFBQUEsR0FBRyxDQUFDWSxJQUFKLENBQVNELElBQVQ7QUFFSCxHQTVCSTtBQTZCTGYsRUFBQUEsa0JBN0JLLGdDQTZCZTtBQUNoQlcsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNBLFNBQUtuQixJQUFMLENBQVVTLEtBQVYsR0FBZ0IsR0FBaEI7QUFDQSxTQUFLVCxJQUFMLENBQVVVLE1BQVYsR0FBaUIsRUFBakI7QUFDSCxHQWpDSTtBQW1DTGMsRUFBQUEsS0FuQ0ssbUJBbUNJLENBRVI7QUFyQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydENhbGxiYWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmRDYWxsYmFjaywgdGhpcyk7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgb25Ub3VjaFN0YXJ0Q2FsbGJhY2soKSB7XHJcbiAgICAgICAgLy8gdXJsPVwiaHR0cDovLzEyMS4zNi4yMTkuMjExOjgwODBcIlxyXG4gICAgICAgIHVybD1cImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiXHJcbiAgICAgICAgdGhpcy5ub2RlLndpZHRoPTE5MFxyXG4gICAgICAgIHRoaXMubm9kZS5oZWlnaHQ9NTVcclxuICAgICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgZGF0YT0ne1wibXlzcWxcIjpcInRlc3RcIn0nXHJcbiAgICAgICAgeGhyLnNlbmQoZGF0YSk7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgb25Ub3VjaEVuZENhbGxiYWNrKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzb25na2FpXCIpXHJcbiAgICAgICAgdGhpcy5ub2RlLndpZHRoPTE5NVxyXG4gICAgICAgIHRoaXMubm9kZS5oZWlnaHQ9NjBcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIFxyXG59KTtcclxuIl19