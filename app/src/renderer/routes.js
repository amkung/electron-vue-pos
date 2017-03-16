export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('components/LandingPageView')
  },
  {
    path: '/dashboard',
    name: 'dashboard-page',
    component: require('components/DashboardPageView')
  },
  {
    path: '/member/search',
    name: 'member-search-page',
    component: require('components/MemberSearchPageView')
  },
  {
    path: '/member/add',
    name: 'member-add-page',
    component: require('components/MemberAddPageView')
  },
  {
    path: '/member/:id/edit',
    name: 'member-edit-page',
    component: require('components/MemberEditPageView')
  },
  // {
  //   path: '/member',
  //   name: 'genaral-member-page',
  //   component: require('components/MemberPageView'),
  //   children: [
  //       { path: '', component: require('components/MemberPageView/Index') },
  //       { path: 'search', component: require('components/MemberPageView/Search') },
  //       { path: 'add', component: require('components/MemberPageView/Add') }
  //     ]
  // },
  // {
  //   path: '/member/:id',
  //   name: 'member-page',
  //   component: require('components/MemberPageView'),
  //   children: [
  //       { path: 'edit', component: require('components/MemberPageView/Search') }
  //     ]
  // },
  {
    path: '*',
    redirect: '/'
  }
]
