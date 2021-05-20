<template>
	<div class="h100">
		<router-view v-slot="{ Component }">
			<transition :name="setTransitionName" mode="out-in">
				<keep-alive  :include="keepAliveNameList">
					<component :is="Component" :key="refreshRouterViewKey" class="w100" />
				</keep-alive>
			</transition>
		</router-view>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs, reactive} from 'vue';
import { useStore } from 'store/index';
export default defineComponent({
	name: 'layoutAppMain',
	setup() {
		const store = useStore();
		const state: any = reactive({
			refreshRouterViewKey: null,
			keepAliveNameList: [],
			keepAliveNameNewList: [],
		});
				// 设置主界面切换动画
		const setTransitionName = computed(() => {
			return store.state.themeConfig.animation;
		});
		return {
			setTransitionName,
			...toRefs(state),
		};
	},
});
</script>
