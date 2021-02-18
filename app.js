App({
  name: '支付宝',
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
    console.log('onShow')
  },
  onHide() {
    console.log('隐藏')
  },
  onError() {
    console.log('发生错误')
  }
});
