<template>
	<div class="caseGallery">
		<img
			v-for="(item, index) in items"
			:key="index"
			:src="item"
			alt=""
			class="galleryItem"
		/>
	</div>
</template>

<script>
export default {
	name: "CaseGallery",
	props: {
		items: Array,
	},
};
</script>

<style lang="scss" scoped>
.caseGallery {
	width: 100%;
	margin: 50px 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
	.galleryItem {
		width: 100%;
		height: auto;
		object-fit: cover;
	}
}

@media screen and (max-width: 500px) {
	.caseGallery {
		grid-template-columns: 1fr;
	}
}
</style>
