<template>
  <div class="app-wrapper">
    <component :is="layout" />
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed, ref } from 'vue'
  import { useStore } from 'store/index'
  import Defaults from './main/index.vue'

  export default defineComponent({
    name: 'Layout',
    components: {
      Defaults
    },
    setup() {
      const store = useStore()
      const layout = computed(() => store.state.themeConfig.layout)
      return {
        layout
      }
    }
  })
</script>

<style lang="scss" scoped>
  .app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
