const routes = [
    { path: '/', exact: true, component: 'Home' },
    { path: '/hotel-hn', component: 'HotelHN' },
    { path: '/hotel-hcm', component: 'HotelHCM' },
    { path: '/hotel-dn', component: 'HotelDN' },
    { path: '/hotel-hp', component: 'HotelHP' },
    { path: '/service', component: 'VietnamService' },
    { path: '/q&a', component: 'Policies' },
    { path: '/feature', component: 'Feature' },
    { path: '/breakfast', component: 'VietnamService' },
    { path: '/massage', component: 'VietnamService' },
    { path: '/rotenburo', component: 'VietnamService' },
    { path: '/contract', component: 'Contract' },
    { path: '/thankyou/:selectedCity', component: 'ThankYou' },
    { path: '/news', component: 'NewsList' },
    { path: '/news/:title', component: 'News' },
    { path: '/hai-ba-trung-detail/room', component: 'HBT1RoomDetail' },
    { path: '/kim-ma-2-detail/room', component: 'KM2RoomDetail' },
    { path: '/kim-ma-3-detail/room', component: 'KM3RoomDetail' },
    { path: '/linh-lang-detail/room', component: 'LLRoomDetail' },
    { path: '/thai-van-lung-1-detail/room', component: 'TVL1RoomDetail' },
    { path: '/thai-van-lung-2-detail/room', component: 'TVL2RoomDetail' },
    { path: '/le-thanh-ton-detail/room', component: 'LTTRoomDetail' },
    { path: '/annex-detail/room', component: 'AnnexRoomDetail' },
    { path: '/da-nang/room', component: 'DNRoomDetail' },
    { path: '/hai-phong/room', component: 'RoomDetail' },
    { path: '*', component: 'ErrorPage' },
    { path: '/feedback', component: 'FeedBack' }
  ];
  module.exports = routes;