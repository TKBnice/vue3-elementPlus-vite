<template>
	<div class="layout-navbars-breadcrumb-index">
		<Breadcrumb />
    <!-- 可以后面新增用户信息等组件 -->
	</div>
</template>

<script lang="ts">
import Breadcrumb from '../breadcrumb/breadcrumb.vue';

export default {
	name: 'layoutBreadcrumbIndex',
	components: { Breadcrumb },
};
</script>

<style scoped lang="scss">
.layout-navbars-breadcrumb-index {
	height: 50px;
	display: flex;
	align-items: center;
	padding-right: 15px;
	background: var(--bg-topBar);
	overflow: hidden;
	border-bottom: 1px solid #f1f2f3;
}
</style>
