import loadComponent from './asyncLoadComponent';
const _import_views = file => loadComponent(() => import(`../../pages/${file}`));
export const routeLayOutMap = [
  {
    path: '/',
    name: 'home',
    exact: true,
    component:_import_views('Home')
  },{
    path: '/ui/buttons',
    name: 'buttons',
    component:_import_views('UI/button')
  }, {
    path: '/ui/models',
    name: 'models',
    component:_import_views('UI/models')
  }, {
    path: '/ui/loadings',
    name: 'models',
    component:_import_views('UI/loading')
  }, {
    path: '/ui/messages',
    name: 'models',
    component:_import_views('UI/messages')
  }, {
    path: '/ui/notification',
    name: 'models',
    component:_import_views('UI/notification')
  },{
    path: '/404',
    name: 'nomatch',
    component:_import_views('NoMatch')
  }
];

export const routeNoLayOutMap = [
  {
    path: '/login',
    name: 'login',
    component:_import_views('Login')
  }
]