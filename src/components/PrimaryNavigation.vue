<template>
	<div
		:class="`primaryNavigation bodyPadding ${
			touchDevice ? 'touchDevice' : ''
		}`"
	>
		<nav class="navigation">
			<li class="listItem logo" v-if="$route.name === 'home' || window?.innerWidth > 500">
				<a href="/" class="link">
					<img
						:src="logourl"
						style="height: 32px; width: auto"
						alt=""
					/>
				</a>
			</li>
			<ul v-if="$route.name == 'home'" class="list">
				<li class="listItem">
					<button @click="scrollTo('about')" class="link">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 576 512"
						>
							<path
								d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm96-96c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zm128-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
							/>
						</svg>
						<span>Om os</span>
					</button>
				</li>
				<li class="listItem">
					<button @click="scrollTo('services')" class="link">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path
								d="M176 56V96H336V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zM128 96V56c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56V96v32V480H128V128 96zM64 96H96V480H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zM448 480H416V96h32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64z"
							/>
						</svg>
						<span>Ydelser</span>
					</button>
				</li>
				<li class="listItem">
					<button @click="scrollTo('featured')" class="link">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path
								d="M448 96V224H288V96H448zm0 192V416H288V288H448zM224 224H64V96H224V224zM64 288H224V416H64V288zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
							/>
						</svg>
						<span>Arbejde</span>
					</button>
				</li>
			</ul>
			<router-link
				to="/"
        class="go-back"
				v-if="$route.name != 'home'"
				style="
					display: flex;
					align-items: center;
					gap: 20px;
					font-weight: 600;
					font-size: 20px;
					line-height: 125%;
				"
			>
				<img
					:src="window?.innerWidth < 500 ? '/dev/images/WRJ Media - Billeder/wide-arrow-left.svg' : '/dev/images/WRJ Media - Billeder/wide-arrow-left.svg'"
					alt=""
				/>
				Forrige side
			</router-link>
      <li class="listItem logo mr-0" v-if="$route.name != 'home' && window?.innerWidth < 500">
        <a href="/" class="link">
          <img
              src="/dev/images/logo.svg"
              style="height: 32px; width: auto"
              alt=""
          />
        </a>
      </li>
		</nav>
	</div>
</template>

<script>
export default {
	name: "PrimaryNavigation",
	data() {
		return {
			menuOpen: false,
			touchDevice: false,
			logourl: "",
      window: window
		};
	},
	mounted() {
		if (this.isTouchDevice()) {
			this.touchDevice = true;
		} else {
			this.touchDevice = false;
		}
		this.getLogoUrl();
	},
	methods: {
		getLogoUrl() {
			const route = this.$route;
			if (route.name == "home") {
				this.logourl = "/dev/images/logo.svg";
				return;
			}
			this.logourl = "/dev/images/wrj-media-2023-sort.svg";
		},
		scrollTo(selector) {
			let elem = document.getElementById(selector);
			if (!elem) return;
			let bounding = elem.getBoundingClientRect();
			window.scrollTo(0, Math.floor(bounding.top));
		},
		isTouchDevice() {
			return (
				"ontouchstart" in window ||
				navigator.maxTouchPoints > 0 ||
				navigator.msMaxTouchPoints > 0
			);
		},
	},
	watch: {
		$route: function () {
			this.getLogoUrl();
		},
	},
};
</script>

<style lang="scss" scoped>
.primaryNavigation {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	padding: 40px 50px;
	display: flex;
	z-index: 999;

	nav.navigation {
		margin: auto 0;
		width: 100%;
		display: flex;
		align-items: center;
		li.logo {
			margin-right: auto;
			a {
				display: flex;
				align-items: center;
				padding: 5px 10px;
			}
			.circle {
				height: 2rem;
				width: 2rem;
				background-color: whitesmoke;
				border-radius: 50%;
				margin-right: 10px;
			}
		}
		ul.list {
			display: flex;
			align-items: center;
			&.hidden {
				visibility: hidden;
				width: 0;
				overflow: hidden;
			}
			li.listItem {
				text-transform: uppercase;
				button {
					background-color: transparent;
					display: flex;
					align-items: center;
					padding: 5px 10px;
					svg {
						height: 20px;
						width: 20px;
						margin-right: 5px;
						display: none;
					}
					span {
						color: white;
						text-transform: uppercase;
					}
				}

				&:not(:first-child) {
					margin-left: 20px;
				}
			}
		}
	}
}

@media screen and (max-width: 900px) {
	.primaryNavigation.touchDevice {
		position: fixed;
		top: unset;
		bottom: 20px;
		left: 10px;
		right: 10px;
		background-color: rgba(211, 211, 211, 0.6);
		border-radius: 15px;
		backdrop-filter: blur(4px);
		padding: 5px 10px !important;
		height: unset;

    nav.navigation {
      justify-content: space-between;
    }

    .navigation {
      padding: 0 20px;
      .go-back {
        color: white;
        img {
          transform: rotate(360deg) !important;
        }
      }
      ul.list {
        li.listItem {
          flex-shrink: 0;
          margin-left: 3px !important;
          cursor: pointer;
          button {
            padding: 0 8px;
            flex-direction: column;
            align-items: center;
            span {
              font-weight: 600;
              font-size: 14px;
            }
            svg {
              margin-bottom: 5px;
              margin-right: unset;
              display: none;
            }
          }

          &:not(:first-child) {
            margin-left: 5px;
          }
        }
      }
    }
	}
}
</style>