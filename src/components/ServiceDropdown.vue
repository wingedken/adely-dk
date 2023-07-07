<template>
	<div class="serviceDropdown">
		<h3
			:class="`serviceTitle ${openState ? 'open' : ''}`"
			@click="toggleDropdown"
		>
			<span>{{ serviceData.title }}</span>
			<div class="icon" style="position: relative">
				<Transition>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
						class="horizontal"
					>
						<path
							d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
						/>
					</svg>
				</Transition>
				<Transition>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
						class="vertical"
					>
						<path
							d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
						/>
					</svg>
				</Transition>
			</div>
		</h3>
		<div class="content" :style="`height: ${contentHeight}px;`">
			<p class="contentInner" ref="contentInner">
				{{ serviceData.content }}
			</p>
		</div>
		<SectionBorder :color="`black`" />
	</div>
</template>
<script>
import SectionBorder from "@/components/SectionBorder.vue";
export default {
	name: "ServiceDropdown",
	components: {
		SectionBorder,
	},
	data() {
		return {
			openState: false,
			contentHeight: 0,
		};
	},
	props: {
		serviceData: Object,
	},
	methods: {
		toggleDropdown() {
			if (this.openState) {
				this.contentHeight = 0;
				this.openState = false;
				return;
			} else {
				let bounding = this.$refs.contentInner.getBoundingClientRect();
				if (bounding) {
					this.contentHeight = bounding.height + 10;
				}
				this.openState = true;
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.serviceDropdown {

  h3 {
    margin-top: 16px !important;
    margin-bottom: 20px !important;
    font-size: 21px !important;
  }
	.serviceTitle {
		font-size: 21px;
		padding: 5px 10px;
		margin: 5px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		font-weight: 450;
		line-height: 125%;
		cursor: pointer;
		.icon {
			height: 20px;
			width: 20px;
		}
		svg {
			position: absolute;
			top: 0;
			left: 0;
			height: 20px;
			width: 20px;
			transition: transform 200ms linear;
			&.vertical {
				transform: rotate(-90deg);
			}
		}

		&.open {
			position: relative;
			z-index: 9999;
			& ~ .content {
				padding: 0 10px;
			}
			svg.horizontal {
				transform: rotate(180deg);
			}
			svg.vertical {
				transform: rotate(0);
			}
		}
	}
	.content {
		overflow: hidden;
		transition: height padding;
		transition-duration: 200ms;
		transition-timing-function: ease;
		padding: 0 10px;
	}
}

@media screen and (max-width: 500px) {

  .serviceGroup {
    h2 {
      font-size: 24px !important;
    }
    .serviceDropdown {
      h3 {
        margin-top: 16px !important;
        margin-bottom: 20px !important;
        font-size: 20px !important;
      }
    }
  }
}
</style>
