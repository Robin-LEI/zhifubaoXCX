Page({
  data: {
    swiperList: [
      {
        img_url: '/resources/images/home_swiper_1.png',
        id: 1
      },
      {
        img_url: '/resources/images/home_swiper_2.png',
        id: 2
      }
    ],
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
      title: '推荐商品',
      icon: '/resources/images/rec.png',
      list: [
        {
          img_url: '/resources/images/1001.png',
          id: 1
        },
        {
          img_url: '/resources/images/1002.png',
          id: 2
        },
        {
          img_url: '/resources/images/1003.jpg',
          id: 3
        },
        {
          img_url: '/resources/images/1004.jpg',
          id: 4
        },
        {
          img_url: '/resources/images/1005.jpg',
          id: 5
        },
        {
          img_url: '/resources/images/1006.jpg',
          id: 6
        }
      ]
    }
  },
  onShow() {
    console.log('se')
  }
});