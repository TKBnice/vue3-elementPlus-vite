<template>
  <div class="layout-navbars-container">
    <BreadcrumbIndex />
    <TagsView />
  </div>
</template>

<script lang="ts">
  import { computed } from 'vue'
  import { useStore } from 'store/index'
  import BreadcrumbIndex from './breadcrumb/index.vue'
  import TagsView from './tagsView/tagsView.vue'
  export default {
    name: 'layoutNavBars',
    components: { BreadcrumbIndex,TagsView },
    setup() {
      const store = useStore()
      // 获取布局配置信息
      const getThemeConfig = computed(() => store.state.themeConfig)
      // 展开/收起左侧菜单点击
      const onThemeConfigChange = () => {
        store.state.themeConfig.isCollapse = !store.state.themeConfig.isCollapse
      }
      return {
        getThemeConfig,
        onThemeConfigChange
      }
    }
  }
</script>

<style scoped lang="scss">
  .layout-navbars-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
</style>
