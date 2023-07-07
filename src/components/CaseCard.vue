<template>
	<article
		class="caseCard"
		:style="`margin-${position == 'right' ? 'left' : 'right'}: auto;`"
	>
		<img class="image" :src="data.images[0]" alt="" />
		<div class="content">
			<h1 class="heading">{{ data.title }}</h1>
			<p class="description">{{ data.description }}</p>
			<router-link
				@mouseenter="startHovering"
				@mouseleave="endHovering"
				@mouseup="endHovering"
				:to="`/case/${data.pathId}`"
				class="cta"
			>
				Læs mere
				<img src="/dev/images/WRJ Media - Billeder/arrow.svg" alt="" />
			</router-link>
		</div>
	</article>
</template>

<script>
import emitter from "tiny-emitter/instance";
export default {
	name: "CaseCard",
	props: {
		position: String,
		data: Object,
	},
	methods: {
		startHovering(e) {
			let target = e.currentTarget;
			emitter.emit("hoveredOverElement", { elem: target });
		},
		endHovering() {
			emitter.emit("stopHover");
		},
	},
};
</script>

<style lang="scss" scoped>
.caseCard {
	max-width: 57.7%;
	margin-bottom: 150px;
	.image {
		width: 100%;
		aspect-ratio: 2 / 1;
		margin-bottom: 70px;
		object-fit: cover;
	}
	.content {
		max-width: 70%;
		.heading {
			font-weight: 400;
			font-size: 49px;
			line-height: 125%;
			color: black;
      margin-bottom: 19px;
		}
		.description {
			margin-bottom: 53px;
			color: rgb(28, 28, 28);
			font-weight: 400;
			font-size: 20px;
			line-height: 135%;
		}
		.cta {
			padding: 5px 10px;
			margin-left: -10px;
			display: flex;
			align-items: center;
			gap: 20px;
			justify-content: flex-start;
			width: max-content;
			font-weight: 600;
			font-size: 20px;
			line-height: 125%;
		}
	}
}
@media screen and (max-width: 500px) {
	.caseCard {
		height: max-content;
		width: 100%;
		max-width: unset;
		position: relative;
		margin-bottom: 70px;
    .image {
      margin-bottom: 15px !important;
    }
		.content {
			position: relative;
			margin-top: auto;
			max-width: unset;
      background-color: transparent;
			.heading {
        font-size: 30px;
				position: relative;
				z-index: 1;
        margin-bottom: 25px;
			}
			.description {
				margin-bottom: 10px;
				position: relative;
				z-index: 1;
			}
			.cta {
				position: relative;
        margin-top: 25px;
				z-index: 1;
			}
			&:after {
				content: "";
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				height: 120%;
			}
		}
	}
}
</style>
