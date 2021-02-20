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
2. app.acss 全局的样式文件，可选的，可以定义一些公共的全局样式
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

# 全局对象与全局样式
1. getApp() 获取app.js中定义的全局对象、全局变量、自定义方法等

# 标题栏
```js
app.json
私有页面，只能修改window
window: {
  defaultTitle: "项目名称",
  titleBarColor: "标题栏背景颜色",
}
```

# 导航栏(选项卡) tabBar (在app.json中进行配置)
1. textColor: 文字颜色
2. selectedColor: 文字选中后的颜色
3. backgroundColor: 背景颜色
4. items: [{pagePath: '页面路径', name: '文字', icon: '未选中的icon', activeIcon: '选中的icon'}]

# navigator
1. hover-class="手指按下去"
2. hover-start-time="按住多少ms出现点击状态"
3. hover-stay-time="手指释放多少ms后恢复到原始状态"
4. url="/pages/xxx/xxx"
5. open-type
  - navigate值(默认值)为保留(隐藏)当前页面，把新的页面展示
  - 值为redirect，销毁当前页面，跳转到新页面，不能在返回到前一页面
  - navigateBack可以返回前一页面，redirect不能使用navigateBack
  - switchTab 跳转到tabBar页面

# 导航api
1. my.navigateTo
2. my.redirectTo
3. my.navigateBack 不需要设置url
4. my.switchTab

# 数据绑定
```js
data: {
  value: 'xxx',
  form: {
    name: '',
    age: '',
    hobby: []
  }
}

```

```axml
<view>{{value}}</view>
<view>{{form.name}}</view>
```

# 条件渲染
```js
data: {
  flag: true,
  age: 1
}
```
```axml
<view a:if="{{flag}}"></view>

<view a:if="{{age > 1 && age < 3>}}"></view>
<view a:elif="{{age > 4 && age < 8 }}"></view>
<view a:else></view>

<view hidden="{{true}}">这里的内容会被隐藏，不会被显示出来</view>
```

# 列表渲染
```js
data: {
  arr: [1,2,3]
}
<view a:for="{{arr}}" a:for-item="item" a:for-index="index2">{{item + '---' + index2}}</view>
```

# block
1. 不会渲染成一个真正的元素
2. 减少外围元素嵌套层数过多

# 事件
1. tap
> 点击
2. longTap
> 长按点击事件
3. touchStart
> 开始触摸
4. touchMove
> 触摸后移动
5. touchEnd
> 人为结束，触摸结束
6. touchCancel
> 系统打断，比如来电