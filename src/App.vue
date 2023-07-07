<template>
	<PrimaryNavigation />
	<Transition appear>
		<router-view />
	</Transition>
	<PrimaryFooter />
	<Transition>
		<CookieConsent v-if="!cookieAccepted" />
	</Transition>
	<!-- <Cursor /> -->
</template>

<script>
import PrimaryNavigation from "@/components/PrimaryNavigation.vue";
import emitter from "tiny-emitter/instance";
import CookieConsent from "@/components/CookieConsent.vue";
import PrimaryFooter from './components/PrimaryFooter.vue';
export default {
	name: "VueApp",
	components: {
		PrimaryNavigation,
		CookieConsent,
		PrimaryFooter
	},
	data() {
		return {
			backgroundColor: "",
			cookieAccepted: true,
		};
	},
	mounted() {
		emitter.on("changeBackgroundColor", this.changeBackground);
		emitter.on("setCookieConsent", this.checkCookie);
		this.checkCookie();
	},
	beforeUnmount() {
		emitter.off("setCookieConsent", this.checkCookie);
	},
	methods: {
		changeBackground(newVal) {
			let body = document.body;
			if (!body) return;
			body.style.backgroundColor = newVal;
		},
		checkCookie() {
			const cookieStorage = localStorage.getItem("cookieConsent");
			if (cookieStorage == "true") {
				this.cookieAccepted = true;
			} else {
				this.cookieAccepted = false;
			}
		},
	},
};
</script>

<style lang="scss">
@import "@/components/Defaults.scss";
* {
	font-family: "font-regular";
}
::-webkit-scrollbar {
	display: none;
}
</style>
