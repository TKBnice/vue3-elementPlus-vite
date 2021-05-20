<template>
  <el-aside
    class="layout-aside"
    :class="setCollapseWidth"
    v-if="clientWidth > 900"
  >
    <Logo v-if="setShowLogo" />
    <el-scrollbar class="flex-auto" ref="layoutAsideScrollbarRef">
      <SubBar :menuList="menuList" :class="setCollapseWidth" />
    </el-scrollbar>
  </el-aside>
  <el-drawer
    v-model="getThemeConfig.isCollapse"
    :with-header="false"
    direction="ltr"
    size="220px"
    v-else
  >
    <el-aside class="layout-aside w100 h100">
      <Logo v-if="setShowLogo" />
      <el-scrollbar class="flex-auto" ref="layoutAsideScrollbarRef">
        <SubBar :menuList="menuList" />
      </el-scrollbar>
    </el-aside>
  </el-drawer>
</template>

<script lang="ts">
  import {
    ref,
    toRefs,
    reactive,
    computed,
    watch,
    getCurrentInstance,
    onBeforeMount,
    onUnmounted
  } from 'vue'
  import { useStore } from 'store/index'
  import Logo from './logo/index.vue'
  import SubBar from './navMenu/subBar.vue'

  export default {
    name: 'layoutAside',
    components: { Logo, SubBar },
    setup() {
      const store = useStore()
      const state: any = reactive({
        menuList: [
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
              title: '首页2',
              index: '2'
            },
            name: 'home2',
            path: '/home2'
          }
        ],
        clientWidth: ''
      })

      // 获取布局配置信息
      const getThemeConfig = computed(() => {
        return store.state.themeConfig
      })

      // 设置显示/隐藏 logo
      const setShowLogo = computed(() => {
        let { isShowLogo } = store.state.themeConfig
        return isShowLogo
      })

      const setCollapseWidth = computed(() => {
        let { layout, isCollapse, menuBar } = store.state.themeConfig
        let asideBrColor =
          menuBar === '#FFFFFF' ||
          menuBar === '#FFF' ||
          menuBar === '#fff' ||
          menuBar === '#ffffff'
            ? 'layout-el-aside-br-color'
            : ''
        if (layout === 'columns') {
          // 分栏布局，菜单收起时宽度给 1px
          if (isCollapse) {
            return ['layout-aside-width1', asideBrColor]
          } else {
            return ['layout-aside-width-default', asideBrColor]
          }
        } else {
          // 其它布局给 64px
          if (isCollapse) {
            return ['layout-aside-width64', asideBrColor]
          } else {
            return ['layout-aside-width-default', asideBrColor]
          }
        }
      })

      // 设置菜单导航是否固定（移动端）
      const initMenuFixed = (clientWidth: number) => {
        state.clientWidth = clientWidth
      }

          // 设置/过滤路由（非静态路由/是否显示在菜单中）
      const setFilterRoutes = () => {
        state.menuList = filterRoutesFun(store.state.routesList.routesList)
      }

      // 路由过滤递归函数
      const filterRoutesFun = (arr: Array<object>) => {
        return arr
          .filter((item: any) => !item.meta.isHide)
          .map((item: any) => {
            item = Object.assign({}, item)
            if (item.children) item.children = filterRoutesFun(item.children)
            return item
          })
      }

      // 页面加载前
      onBeforeMount(() => {
        initMenuFixed(document.body.clientWidth)
        setFilterRoutes()
      })

      // 页面卸载时
      onUnmounted(() => {})
      return {
        getThemeConfig,
        setShowLogo,
        setCollapseWidth,
        ...toRefs(state)
      }
    }
  }
</script>
