import { Module } from 'vuex';

import { RoutesListState, RootStateTypes } from 'store/interface/index';

const routesListModule: Module<RoutesListState, RootStateTypes> = {
	namespaced: true,
	state: {
		routesList: [
      {
        meta: {
          auth: ['admin', 'test'],
          icon: 'iconfont el-icon-menu',
          isAffix: true,
          isHide: false,
          isIframe: false,
          isKeepAlive: true,
          title: '首页',
          index: '1'
        },
        name: 'home',
        path: '/home'
      },
      {
        meta: {
          auth: ['admin', 'test'],
          icon: 'iconfont el-icon-s-grid',
          isAffix: true,
          isHide: false,
          isIframe: false,
          isKeepAlive: true,
          title: 'demo',
          index: '2'
        },
        name: 'demo',
        path: '/demo'
      },
      {
        meta: {
          auth: ['admin', 'test'],
          icon: 'iconfont el-icon-s-grid',
          isAffix: true,
          isHide: false,
          isIframe: false,
          isKeepAlive: true,
          title: 'icon',
          index: '3'
        },
        name: 'icon',
        path: '/icon'
      }
    ],
	},
	mutations: {
		// 设置路由，菜单中使用到
		getRoutesList(state: any, data: Array<object>) {
			state.routesList = data;
		},
	},
	actions: {
		// 设置路由，菜单中使用到
		async setRoutesList({ commit }, data: any) {
			commit('getRoutesList', data);
		},
	},
};

export default routesListModule;
