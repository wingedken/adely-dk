<template>
	<div
		v-if="!isTouchDevice()"
		:class="`cursor ${hovering ? 'hovering' : ''} ${
			this.contentOpen ? 'open' : ''
		}${invertColors ? 'inverted' : ''}`"
		ref="cursor"
	>
		<div
			:style="`margin-top: ${this.targetHeight}px;`"
			:class="`content ${contentOpen ? 'open' : ''}`"
			ref="content"
		>
			{{ content }}
		</div>
	</div>
	<div
		v-if="!isTouchDevice()"
		:class="`pointer ${invertColors ? 'inverted' : ''}`"
		ref="pointer"
	></div>
</template>

<script>
import emitter from "tiny-emitter/instance";
export default {
	name: "CurSor",
	data() {
		return {
			xPos: 0,
			yPos: 0,
			targetWidth: 0,
			targetHeight: 0,
			customHeight: 0,
			targetX: 0,
			targetY: 0,
			cursorX: 0,
			cursorY: 0,
			hovering: false,
			listener: null,
			contentOpen: false,
			content: "",
			footerLink: false,
			invertColors: false,
		};
	},
	mounted() {
		if (this.isTouchDevice()) return;
		this.addMoveListener();
		emitter.on("hoveredOverElement", this.hoveredOverElement);
		emitter.on("stopHover", this.stopHovering);
		emitter.on("openCursorContent", this.openContent);
		emitter.on("closeCursorContent", this.closeContent);
		emitter.on("invertCursorColor", this.invertColor);
	},
	beforeUnmount() {
		emitter.off("hoveredOverElement", this.hoveredOverElement);
		emitter.off("stopHover", this.stopHovering);
		emitter.off("openCursorContent", this.openContent);
		emitter.off("closeCursorContent", this.closeContent);
		emitter.off("invertCursorColor", this.invertColor);
	},
	methods: {
		isTouchDevice() {
			return (
				"ontouchstart" in window ||
				navigator.maxTouchPoints > 0 ||
				navigator.msMaxTouchPoints > 0
			);
		},
		invertColor(state) {
			this.invertColors = state;
		},
		addMoveListener() {
			document.addEventListener("mousemove", this.onMouseMove);
		},
		onMouseMove(e) {
			if (this.hovering) {
				this.$refs.cursor.setAttribute(
					"style",
					`transform: translate(${this.targetX}px, ${
						this.targetY
					}px); width: ${this.targetWidth}px; height: ${
						this.contentOpen ? this.customHeight : this.targetHeight
					}px;`
				);
			} else {
				this.$refs.cursor.setAttribute(
					"style",
					`transform: translate(${e.pageX - 15}px, ${
						e.pageY - 15
					}px); width: 30px; height: 30px;`
				);
				this.cursorX = e.pageX;
				this.cursorY = e.pageY;
			}
			this.$refs.pointer.setAttribute(
				"style",
				`left: ${e.pageX}px; top: ${e.pageY}px;`
			);
		},
		stopHovering() {
			this.hovering = false;
			this.footerLink = false;
			emitter.emit("closeCursorContent");
			this.$refs.pointer.setAttribute(
				"style",
				`left: ${this.cursorX}px; top: ${this.cursorY}px;`
			);
			this.$refs.cursor.setAttribute(
				"style",
				`left: ${this.cursorX - 15}px; top: ${
					this.cursorY - 15
				}px; width: 30px; height: 30px;`
			);
		},
		hoveredOverElement({ elem, footerLink }) {
			let bounding = elem.getBoundingClientRect();
			this.hovering = true;
			if (footerLink) {
				this.footerLink = true;
			}
			this.$nextTick(() => {
				this.targetX = elem.offsetLeft;
				this.targetY = elem.offsetTop;
				this.targetWidth = bounding.width;
				this.targetHeight = bounding.height;
				this.$refs.cursor.setAttribute(
					"style",
					`transform: translate(${this.targetX}px, ${
						this.targetY
					}px); width: ${this.targetWidth}px; height: ${
						this.contentOpen ? this.customHeight : this.targetHeight
					}px;`
				);
			});
		},
		openContent(content) {
			this.contentOpen = true;
			this.content = content;
			this.$nextTick(() => {
				let contentHeight =
					this.$refs.content.getBoundingClientRect().height;
				this.customHeight = this.targetHeight + contentHeight + 20;
				this.$refs.cursor.setAttribute(
					"style",
					`transform: translate(${this.targetX}px, ${this.targetY}px); width: ${this.targetWidth}px; height: ${this.customHeight}px;`
				);
			});
		},
		closeContent() {
			this.content = "";
			this.contentOpen = false;
			this.customHeight = 0;
			this.$refs.cursor.setAttribute(
				"style",
				`transform: translate(${this.targetX}px, ${this.targetY}px); width: ${this.targetWidth}px; height: ${this.targetHeight}px;`
			);
		},
	},
};
</script>

<style lang="scss" scoped>
@import "@/components/Defaults.scss";
.cursor {
	position: absolute;
	height: 30px;
	width: 30px;
	z-index: 9998;
	border-radius: 50%;
	transition-property: width, height, border-radius, transform, border;
	transition-duration: 0.05s;
	transition-timing-function: ease-out;
	background-color: transparent;
	border: 2px solid rgb(0, 0, 0);
	pointer-events: none;
	overflow: hidden;
	top: 0;
	left: 0;
	&.inverted {
		border: 2px solid white;
	}
	&.hovering {
		transition-duration: 200ms;
		border-radius: 5px;
	}
	&.hovering:not(.footerLink) {
		border-radius: 5px;
		.pointer {
			background-color: black;
		}
	}
	&.open {
		background-color: $primaryBackground;
	}
	.content {
		transition: opacity;
		transition-duration: 300ms;
		transition-delay: 200ms;
		transition-timing-function: ease;
		padding: 0 10px;
		opacity: 0;
		&.open {
			opacity: 1;
		}
	}
}
.pointer {
	position: absolute;
	height: 5px;
	width: 5px;
	z-index: 9999;
	border-radius: 50%;
	transform: translate(-50%, -50%);
	background-color: rgb(0, 0, 0);
	pointer-events: none;
	transition: background-color;
	transition-duration: 200ms;
	transition-timing-function: ease;
	&.inverted {
		background-color: white;
	}
	&.hovering {
		border-radius: 5px;
		transform: translate(0, 0);
	}
}
</style>
