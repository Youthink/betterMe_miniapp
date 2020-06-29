module.exports = {
  pages: [
    'pages/index/index',
    'pages/habit/index'
  ],
  window: {
    navigationBarTitleText: 'Remax Wechat Template',
    navigationBarBackgroundColor: '#282c34'
  },
  tabBar: {
    list: [
      {
        "pagePath": "pages/habit/index",
        "text": "习惯"
      },
      {
        "pagePath": "pages/index/index",
        "text": "奖励"
      },
      /*
      {
        "pagePath": "pages/index/index",
        "text": "首页"
      },
      {
        "pagePath": "pages/index/index",
        "text": "小组"
      },
      {
        "pagePath": "pages/habit/index",
        "text": "我的"
        }
       */
    ]
  },
  useExtendedLib: {
    weui: true
  }
};
