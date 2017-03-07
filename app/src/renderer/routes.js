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
    path: '*',
    redirect: '/'
  }
]
