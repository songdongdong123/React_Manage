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
    exact: true,
    component:_import_views('UI/button')
  }, {
    path: '/ui/models',
    name: 'models',
    exact: true,
    component:_import_views('UI/models')
  },{
    path: '/404',
    name: 'nomatch',
    exact: true,
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