# 文件类型
1. html---axml
2. css---acss
3. index > 下面的所有文件都需要是index命名的

[支付宝小程序官方文档](https://mini.open.alipay.com/channel/miniIndex.htm)

[开发文档](https://opendocs.alipay.com/mini/developer)

[开发平台创建小程序](https://open.alipay.com/mini/dev/create)

# 前端商城Id：2021002128610896

# 全局配置文件
1. app.js 全局的配置文件，必须的
2. app.acss 全局的样式文件，可选的
3. app.json 项目配置，必须的

# 小程序生命周期
1. onLaunch--初始化完成时执行，只执行一次
2. onShow--页面展示的时候触发
3. onHide--页面隐藏的时候触发
4. onError--程序出错时执行

# page的生命周期
1. onLoad--每个页面执行一次，加载时执行
2. onReady--初次渲染完成，只会执行一次
3. onShow--页面显示的时候执行，可以执行多次，在onReady之前执行
4. onHide
5. onUnload--页面卸载的时候执行

# 事件
1. onTap="tapName"
2. 标题点击事件 onTitleClick() {}
3. 触底 onReachBottom() {}
4. 下拉刷新 onPullDownRefresh 需要在.json文件中设置 "pullRefresh": true
5. 分享 onShareAppMessage
