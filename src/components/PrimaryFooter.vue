<template>
	<footer
		class="primaryFooter bodyPadding"
		@mouseenter="startInvertCursor"
		@mouseleave="endInvertCursor"
	>
		<div class="inner twoColumns">
			<button
				@click="scrolltotop"
				class="backToTop"
				@mouseenter="
					(e) => {
						startHovering(e, true);
					}
				"
				@mouseleave="endHovering"
			>
				Tilbage til toppen
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
					<path
						d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
					/>
				</svg>
			</button>
			<div class="content flexContainer">
				<div class="container">
					<h4 class="heading">Kontakt</h4>
					<a
						@mouseenter="
							(e) => {
								startHovering(e, true);
							}
						"
						@mouseleave="endHovering"
						href="mailto:info@wrj.dk"
						class="contactMail"
						>info@wrj.dk</a
					>
					<a
						@mouseenter="
							(e) => {
								startHovering(e, true);
							}
						"
						@mouseleave="endHovering"
						href="tel:+45 41162116"
						class="contactTel"
						>+(45) 41 16 21 16</a
					>
				</div>
				<div class="container">
					<h4 class="heading">Følg os</h4>
					<a
						href=""
						target="_blank"
						@mouseenter="
							(e) => {
								startHovering(e, true);
							}
						"
						@mouseleave="endHovering"
						>Facebook</a
					>
					<a
						href=""
						target="_blank"
						@mouseenter="
							(e) => {
								startHovering(e, true);
							}
						"
						@mouseleave="endHovering"
						>Instagram</a
					>
					<a
						href=""
						target="_blank"
						@mouseenter="
							(e) => {
								startHovering(e, true);
							}
						"
						@mouseleave="endHovering"
						>LinkedIn</a
					>
				</div>
			</div>
		</div>
		<div class="copy">
			<p>Cookies</p>
			<p>Ophavsret &copy;2023 | WRJ Media</p>
		</div>
	</footer>
</template>

<script>
import emitter from "tiny-emitter/instance";
export default {
	name: "PrimaryFooter",

	methods: {
		startHovering(e, footerLink) {
			let target = e.currentTarget;
			emitter.emit("hoveredOverElement", {
				elem: target,
				footerLink: footerLink,
			});
		},
		endHovering() {
			emitter.emit("stopHover");
		},
		startInvertCursor() {
			emitter.emit("invertCursorColor", true);
		},
		endInvertCursor() {
			emitter.emit("invertCursorColor", false);
		},
		scrolltotop() {
			window.scrollTo(0, 0);
		},
	},
};
</script>

<style lang="scss" scoped>
footer.primaryFooter {
	height: 40vh;
	background-color: black;
	padding: 50px 50px;
	flex-shrink: 0;
	display: flex;
	flex-direction: column;
	.backToTop {
		font-weight: bold;
		font-size: 20px;
		display: flex;
		align-items: center;
		padding: 5px 10px;
		width: max-content;
		height: max-content;
		background-color: transparent;
		cursor: pointer;
		svg {
			height: 25px;
			width: 25px;
			margin-left: 5px;
			path {
				fill: white;
			}
		}
	}
	.content {
		.container {
			display: flex;
			flex-direction: column;
			.heading {
				font-weight: bold;
				margin-bottom: 10px;
				font-size: 20px;
				padding: 5px 10px;
				font-family: "font-regular";
			}
			a {
				padding: 5px 10px;
				width: max-content;
			}
		}
	}
	.copy {
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 20px;
		color: lightgray;
		margin-top: auto;
		* {
			color: inherit;
		}
	}
	* {
		color: white;
	}
}

@media screen and (max-width: 500px) {
	footer.primaryFooter {
		height: unset;
		padding: 30px 20px 100px 20px;
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
    margin-top: 165px;
		.backToTop {
			font-weight: 600;
			font-size: 20px;
			line-height: 130%;
			svg {
				height: 15px;
				width: 15px;
			}
		}
    .backToTop {
      display: none;
    }
		.content {
			display: flex;
			justify-content: center;
			width: 100%;
			.container {
				display: flex;
				flex-direction: column;
				width: max-content;
				.heading {
					margin-bottom: 10px;
					font-weight: 600;
					font-size: 20px;
					line-height: 130%;
					padding: 5px 10px;
				}
				a {
					font-weight: 400;
					font-size: 20px;
					line-height: 180%;
					width: max-content;
				}
			}
		}
		.copy {
			color: lightgray;
			gap: unset;
			padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
			& > * {
				color: inherit;
				flex-grow: 1;
			}
      p {
        font-size: 20px;
        margin-top: 20px;
        opacity: .6;
      }
		}
		* {
			color: white;
		}
    .flexContainer {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-top: 40px;

        a {
          font-size: 16px;
        }
      }
    }
	}
	.twoColumns {
		grid-template-columns: 1fr;
		gap: 20px;
	}
}
</style>