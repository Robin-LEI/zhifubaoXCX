Page({
  data: {
    swiperList: [],
    typeIntroList: [
      {
        icon: '/resources/images/fang.png',
        text: '全场包邮',
        id: 1
      },
      {
        icon: '/resources/images/flash.png',
        text: '先行赔付',
        id: 2
      },
      {
        icon: '/resources/images/yuan.png',
        text: '7天无理由',
        id: 3
      },
      {
        icon: '/resources/images/ling.png',
        text: '退货先补',
        id: 4
      }
    ],
    reco_goods: {
      title: '',
      icon: '',
      list: []
    },
    new_goods_list: []
  },
  onShow() {
    console.log('se')
  },
  onReady() {
    this.init()
  },
  init() {
    this.initSwiper();
    this.initReco();
    this.initLastGoods();
  },
  initLastGoods() {
    my.request({
      url: 'https://www.fastmock.site/mock/8a622a6c663c4636a86910b0eef8cbe5/api/index/list/last',
      method: 'post',
      dataType: 'json',
      success: (result) => {
        let {data, status} = result.data;
        if (status == 200) {
          this.setData({
            new_goods_list: data
          })
        }
      }
    });
  },
  initReco() {
    my.request({
      url: 'https://www.fastmock.site/mock/8a622a6c663c4636a86910b0eef8cbe5/api/index/list/reco',
      method: 'get',
      dataType: 'json',
      success: (result) => {
        let { data, status } = result.data;
        if (status == 200) {
          this.setData({
            reco_goods: {...data}
          });
        }
      }
    });
  },
  initSwiper() {
    my.request({
      url: 'https://www.fastmock.site/mock/8a622a6c663c4636a86910b0eef8cbe5/api/index/carousels',
      method: 'get',
      data: {},
      dataType: 'json',
      success: (result) => {
        let { data, status } = result.data;
        if (status == 200) {
          this.setData({
            swiperList: data
          })
        }
      }
    });
  }
});