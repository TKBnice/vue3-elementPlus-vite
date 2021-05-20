// 接口类型声明

export interface App {
	count: 0;
}

// 布局配置
export interface ThemeConfigState {
	globalTitle:string;
	layout:string;
	menuBar:string;
	animation:string;
	isCollapse: boolean;
	isShowLogo: boolean;
	isFixedHeader: boolean;
	isBreadcrumb: boolean;
	isBreadcrumbIcon: boolean;
	isCacheTagsView: boolean;
}

export interface RoutesListState {
	routesList: Array<object>;
}

export interface TagsViewRoutesState {
	tagsViewRoutes: Array<object>;
}

// 主接口(顶级类型声明)
export interface RootStateTypes {
	themeConfig: ThemeConfigState;
  app:App;
	routesList:RoutesListState;
	tagsViewRoutes:TagsViewRoutesState;
}
