const app = getApp();

Page({
  data() {
    return {
      name: 'robin',
      isShow: false,
      images: ''
    }
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
    console.log('onReady')
    console.log(app.name)
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
    my.stopPullDownRefresh();

  },
  onReachBottom() {
    // 页面被拉到底部
    console.log('onReachBottom')
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'hello title',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
  goDetail() {
    my.redirectTo({
      url: "/pages/details/details"
    });
  },
  clickMe() {
    this.setData({
      isShow: true
    }, () => {
      this.draw();
    })
  },
  draw() {
    let _this = this;
    console.log(1222)
    const ctx = my.createCanvasContext('canvas');
    ctx.drawImage('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2376494174,834673303&fm=26&gp=0.jpg', 100, 0, 260, 400);
    console.log(ctx)
    ctx.setFontSize(36);
    ctx.setFillStyle('#333');
    ctx.fillText('姓名：Robin', 100, 100 + 400);
    ctx.fillText('年龄：20', 100, 150 + 400);
    ctx.fillText('地址：生物', 100, 200 + 400);
    ctx.fillText('城市：上海', 100, 250 + 400);
    ctx.fillText('身份证：xxxxxxxxx', 100, 300 + 400);
    ctx.draw(true, () => {
      ctx.toTempFilePath({
        success(res) {
          console.log(res.filePath)
          let filePath = res.apFilePath;
          if (filePath) {
            _this.setData({
              images: filePath
            }, () => {
              console.log(_this.data.images)
            });
          }
        }
      })
    });
  },
  clickClose() {
    this.setData({
      isShow: false
    })
  },
  clickSave() {
    my.saveImage({
      url: this.data.images,
      showActionSheet: true,
      success: () => {
        my.alert({
          title: '保存成功'
        });
      }
    });
  }
});
