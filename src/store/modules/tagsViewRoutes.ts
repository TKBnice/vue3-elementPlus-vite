import { Module } from 'vuex';
// 此处加上 `.ts` 后缀报错，具体原因不详
import { TagsViewRoutesState, RootStateTypes } from 'store/interface/index';

const tagsViewRoutesModule: Module<TagsViewRoutesState, RootStateTypes> = {
	namespaced: true,
	state: {
		tagsViewRoutes: [
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
		// 设置 TagsView 路由
		getTagsViewRoutes(state: any, data: Array<string>) {
			state.tagsViewRoutes = data;
		},
	},
	actions: {
		// 设置 TagsView 路由
		async setTagsViewRoutes({ commit }, data: Array<string>) {
			commit('getTagsViewRoutes', data);
		},
	},
};

export default tagsViewRoutesModule;
