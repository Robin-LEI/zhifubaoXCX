Page({
  data() {
    return {
      name: 'robin'
    }
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
    console.log('onReady')
  },
  onShow() {
    // 页面显示
    console.log('onShow')
  },
  onHide() {
    // 页面隐藏
    console.log('onHide')
  },
  onUnload() {
    // 页面被关闭
    console.log('onUnload')
  },
  onTitleClick() {
    // 标题被点击
    console.log('onTitleClick')
  },
  onPullDownRefresh() {
    // 页面被下拉
    console.log('onPullDownRefresh')
  },
  onReachBottom() {
    // 页面被拉到底部
    console.log('onReachBottom')
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
  goDetail() {
    my.redirectTo({
      url: "/pages/details/details"
    });
  }
});
