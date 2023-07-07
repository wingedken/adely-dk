<template>
	<div class="cookieConsent">
		<p>
      Vi bruger Cookies, er det fint med dig?
      <button @click="acceptCookie" class="responsiveBtn">Acceptér</button>
    </p>
		<button @click="acceptCookie" class="consentButton">Acceptér</button>
	</div>
</template>

<script>
import emitter from "tiny-emitter/instance";
export default {
	name: "CookieConsent",
	methods: {
		acceptCookie() {
			localStorage.setItem("cookieConsent", "true");
			emitter.emit("setCookieConsent");
		},
	},
};
</script>

<style lang="scss" scoped>
.cookieConsent {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 75px;
	transition-property: bottom;
	transition-duration: 250ms;
	transition-timing-function: ease;
	background-color: rgba(0, 0, 0, 0.35);
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
  .responsiveBtn {
    display: none;
  }
	p, b {
		color: white;
	}
	button {
		padding: 5px 10px;
		border-radius: 5px;
		background-color: rgb(252, 247, 240);
		cursor: pointer;
	}
	&.v-leave-to,
	&.v-enter-from {
		bottom: -75px;
	}
}


@media screen and (max-width: 900px) {
  .cookieConsent {
    top: 0;
    bottom: unset;
    background-color: rgba(255, 255, 255, 0.30);
    flex-direction: column;
    align-items: center;
    gap: 0px;
    justify-content: center;

    .responsiveBtn {
      display: inline-block;
      padding: 2px 5px;
      font-size: 14px;
      margin-left: 5px;
    }

    .consentButton {
      display: none;
    }

    p {
      text-align: center;
      word-break: break-all;
      padding: 0 5px;
    }
  }
}
</style>