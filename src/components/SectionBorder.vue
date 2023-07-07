<template>
	<Transition appear>
		<div :style="`background-color: ${color}`" class="sectionBorder"></div>
	</Transition>
</template>

<script>
export default {
	name: "SectionBorder",
	props: {
		color: String,
	},
};
</script>

<style lang="scss" scoped>
.sectionBorder {
	height: 1px;
	border-radius: 1px;
	width: 100%;
	transition-delay: 0.7s;
	margin: 0 auto;
	transition-timing-function: ease-in-out;
	&.v-enter-from {
		width: 0;
	}
}
</style>
