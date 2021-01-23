
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/login/btn_play.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a1c03zZiOBJaay2f44Zbhd1', 'btn_play');
// script/login/btn_play.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {},
  onLoad: function onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStartCallback, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEndCallback, this);
  },
  onTouchStartCallback: function onTouchStartCallback() {
    this.node.width = 190;
    this.node.height = 55; // 调用微信授权函数

    wx.getSetting({
      success: function success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          console.log('success');
          wx.showToast({
            title: '登录请求中',
            icon: 'loading'
          });
          wx.getUserInfo({
            success: function success(res) {
              // app.globalData.userInfo=res.userInfo;
              // console.log(app.globalData)
              setTimeout(function () {
                wx.hideToast(); //   wx.reLaunch({
                //     url: '../user_message/user_message',
                //   })
              }, 200);
            }
          });
        } else {
          wx.authorize({
            scope: 'scope.userInfo',
            success: function success() {
              // 跳转
              console.log("jump to new page");
            }
          });
        }
      }
    });
  },
  onTouchEndCallback: function onTouchEndCallback() {
    console.log("songkai");
    this.node.width = 195;
    this.node.height = 60;
  },
  onDestroy: function onDestroy() {},
  update: function update(dt) {},
  onKeyDown: function onKeyDown(event) {},
  onKeyUp: function onKeyUp(event) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsb2dpblxcYnRuX3BsYXkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsIm9uTG9hZCIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsIm9uVG91Y2hTdGFydENhbGxiYWNrIiwiVE9VQ0hfRU5EIiwib25Ub3VjaEVuZENhbGxiYWNrIiwid2lkdGgiLCJoZWlnaHQiLCJ3eCIsImdldFNldHRpbmciLCJzdWNjZXNzIiwicmVzIiwiYXV0aFNldHRpbmciLCJjb25zb2xlIiwibG9nIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZ2V0VXNlckluZm8iLCJzZXRUaW1lb3V0IiwiaGlkZVRvYXN0IiwiYXV0aG9yaXplIiwic2NvcGUiLCJvbkRlc3Ryb3kiLCJ1cGRhdGUiLCJkdCIsIm9uS2V5RG93biIsImV2ZW50Iiwib25LZXlVcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFNTEMsRUFBQUEsS0FOSyxtQkFNSSxDQUVSLENBUkk7QUFTTEMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCLFNBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhUCxFQUFFLENBQUNRLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsV0FBL0IsRUFBNEMsS0FBS0Msb0JBQWpELEVBQXVFLElBQXZFO0FBQ0EsU0FBS0wsSUFBTCxDQUFVQyxFQUFWLENBQWFQLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxTQUFSLENBQWtCRyxTQUEvQixFQUEwQyxLQUFLQyxrQkFBL0MsRUFBbUUsSUFBbkU7QUFFSCxHQWJJO0FBY0xGLEVBQUFBLG9CQWRLLGtDQWNrQjtBQUNuQixTQUFLTCxJQUFMLENBQVVRLEtBQVYsR0FBZ0IsR0FBaEI7QUFDQSxTQUFLUixJQUFMLENBQVVTLE1BQVYsR0FBaUIsRUFBakIsQ0FGbUIsQ0FHbkI7O0FBQ0FDLElBQUFBLEVBQUUsQ0FBQ0MsVUFBSCxDQUFjO0FBQ1pDLE1BQUFBLE9BQU8sRUFBRSxpQkFBQUMsR0FBRyxFQUFJO0FBQ2QsWUFBSUEsR0FBRyxDQUFDQyxXQUFKLENBQWdCLGdCQUFoQixDQUFKLEVBQXVDO0FBQ3JDO0FBQ0FDLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDQU4sVUFBQUEsRUFBRSxDQUFDTyxTQUFILENBQWE7QUFDWEMsWUFBQUEsS0FBSyxFQUFFLE9BREk7QUFFWEMsWUFBQUEsSUFBSSxFQUFFO0FBRkssV0FBYjtBQUlBVCxVQUFBQSxFQUFFLENBQUNVLFdBQUgsQ0FBZTtBQUNiUixZQUFBQSxPQUFPLEVBQUUsaUJBQUFDLEdBQUcsRUFBSTtBQUNkO0FBQ0E7QUFDQVEsY0FBQUEsVUFBVSxDQUFDLFlBQVU7QUFDbkJYLGdCQUFBQSxFQUFFLENBQUNZLFNBQUgsR0FEbUIsQ0FFckI7QUFDQTtBQUNBO0FBQ0MsZUFMUyxFQUtSLEdBTFEsQ0FBVjtBQU1EO0FBVlksV0FBZjtBQVlELFNBbkJELE1Bb0JJO0FBQ0ZaLFVBQUFBLEVBQUUsQ0FBQ2EsU0FBSCxDQUFhO0FBQ1hDLFlBQUFBLEtBQUssRUFBQyxnQkFESztBQUVYWixZQUFBQSxPQUZXLHFCQUVEO0FBQ1I7QUFDQUcsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDRDtBQUxVLFdBQWI7QUFPRDtBQUNGO0FBL0JXLEtBQWQ7QUFrQ0gsR0FwREk7QUFxRExULEVBQUFBLGtCQXJESyxnQ0FxRGU7QUFDaEJRLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDQSxTQUFLaEIsSUFBTCxDQUFVUSxLQUFWLEdBQWdCLEdBQWhCO0FBQ0EsU0FBS1IsSUFBTCxDQUFVUyxNQUFWLEdBQWlCLEVBQWpCO0FBQ0gsR0F6REk7QUEwRExnQixFQUFBQSxTQTFESyx1QkEwRFEsQ0FFWixDQTVESTtBQTZETEMsRUFBQUEsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWMsQ0FFckIsQ0EvREk7QUFnRUxDLEVBQUFBLFNBaEVLLHFCQWdFTUMsS0FoRU4sRUFnRWEsQ0FFakIsQ0FsRUk7QUFtRUxDLEVBQUFBLE9BbkVLLG1CQW1FSUQsS0FuRUosRUFtRVcsQ0FFZjtBQXJFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgIFxyXG4gICAgfSxcclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydENhbGxiYWNrLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmRDYWxsYmFjaywgdGhpcyk7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgb25Ub3VjaFN0YXJ0Q2FsbGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLndpZHRoPTE5MFxyXG4gICAgICAgIHRoaXMubm9kZS5oZWlnaHQ9NTVcclxuICAgICAgICAvLyDosIPnlKjlvq7kv6HmjojmnYPlh73mlbBcclxuICAgICAgICB3eC5nZXRTZXR0aW5nKHtcclxuICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuICAgICAgICAgICAgICAvLyDlt7Lnu4/mjojmnYPvvIzlj6/ku6Xnm7TmjqXosIPnlKggZ2V0VXNlckluZm8g6I635Y+W5aS05YOP5pi156ew77yM5LiN5Lya5by55qGGXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKVxyXG4gICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+eZu+W9leivt+axguS4rScsXHJcbiAgICAgICAgICAgICAgICBpY29uIDonbG9hZGluZydcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAvLyBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbz1yZXMudXNlckluZm87XHJcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFwcC5nbG9iYWxEYXRhKVxyXG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guaGlkZVRvYXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgIC8vICAgd3gucmVMYXVuY2goe1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgdXJsOiAnLi4vdXNlcl9tZXNzYWdlL3VzZXJfbWVzc2FnZScsXHJcbiAgICAgICAgICAgICAgICAgIC8vICAgfSlcclxuICAgICAgICAgICAgICAgICAgfSwyMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICB3eC5hdXRob3JpemUoe1xyXG4gICAgICAgICAgICAgICAgc2NvcGU6J3Njb3BlLnVzZXJJbmZvJyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIOi3s+i9rFxyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImp1bXAgdG8gbmV3IHBhZ2VcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBvblRvdWNoRW5kQ2FsbGJhY2soKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNvbmdrYWlcIilcclxuICAgICAgICB0aGlzLm5vZGUud2lkdGg9MTk1XHJcbiAgICAgICAgdGhpcy5ub2RlLmhlaWdodD02MFxyXG4gICAgfSxcclxuICAgIG9uRGVzdHJveSAoKSB7XHJcbiAgICAgICBcclxuICAgIH0sXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgXHJcbiAgICB9LFxyXG4gICAgb25LZXlEb3duIChldmVudCkge1xyXG4gICAgICBcclxuICAgIH0sXHJcbiAgICBvbktleVVwIChldmVudCkge1xyXG4gICAgICAgXHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=