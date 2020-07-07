export default {
  pages: [
    'pages/habit/index',
    'pages/award/index'
  ],
  window: {
    navigationBarTitleText: 'betterMe',
    navigationBarBackgroundColor: '#282c34'
  },
  tabBar: {
    color: "#707070",
    selectedColor: "#5E125C",
    list: [
      {
        pagePath: "pages/habit/index",
        iconPath: './assets/sun.png',
        selectedIconPath: './assets/habit-checked.png',
        text: "习惯"
      },
      {
        pagePath: "pages/award/index",
        iconPath: './assets/gift.png',
        selectedIconPath: './assets/award-checked.png',
        text: "奖励"
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
  }
};
