"use strict";
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