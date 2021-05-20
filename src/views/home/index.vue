<template>
  <div>
    <HelloWorld></HelloWorld>
      <el-button @click="addCount">count is: {{ count }}</el-button>
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent } from 'vue'
  import { useStore } from 'store/index'
  import HelloWorld from '@/components/HelloWorld.vue'

  export default defineComponent({
    name: 'App',
    components: {
      HelloWorld
    },
    setup() {
      const store = useStore()

      const count: any = computed({
        get() {
          return store.state.app.count
        },
        set(value) {
          store.commit('increment', value)
        }
      })

      function addCount() {
        count.value += 1
      }

      return {
        count,
        addCount
      }
    }
  })
</script>

<style></style>
