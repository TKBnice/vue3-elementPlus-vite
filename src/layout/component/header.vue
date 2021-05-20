<template>
	<el-header class="layout-header" :height="50">
		<NavBarsIndex />
	</el-header>
</template>

<script lang="ts">
import { computed } from 'vue';
import { useStore } from 'store/index';
import NavBarsIndex from './navBars/index.vue';
export default {
	name: 'layoutHeader',
	components: { NavBarsIndex },
	setup() {
		const store = useStore();
		return {};
	},
};
</script>
