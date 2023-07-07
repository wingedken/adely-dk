<template>
	<div class="home view">
		<header id="header" class="header bodyPadding">
			<video
				src="/dev/images/WRJ Media - Billeder/Forside/hero-video.mp4"
				class="backgroundVideo"
				autoplay="true"
				muted="true"
				loop
			></video>
			<Transition appear>
				<h1 class="pageHeading">
					Fremtidens <br />
					digitale <br />
					løsninger
				</h1>
			</Transition>
			<Transition appear>
				<p class="tagline">
					Web, video og 3D-løsninger fra<br />fremtiden til dig.
				</p>
			</Transition>
		</header>
		<main class="main">
			<section
				:class="`latest bodyPadding ${inCinematic ? 'cinematic' : ''}`"
				id="latest"
			>
				<div class="inner" @click.once="playLatest">
					<article>
						<div class="content">
							<h2 class="heading" style="width: max-content">
								Seneste video
							</h2>
							<p class="description">
								Her kan du se vores seneste kommercielle video,
								der præsenterer nogle af vores ydelser på en
								engagerende måde.
								<br />
								<br />
								Hold øje med fremtidige opdateringer, selvom
								pingvinen, vores hårdt arbejdende fiktive
								maskot, sjældent har brug for kunder - så bliv
								med os og oplev vores fantastiske produkter i
								handling på vores spændene youtube kanal.
							</p>
						</div>
						<img
							class="arrow"
							src="/dev/images/WRJ Media - Billeder/wide-arrow.svg"
							alt="Wide arrow"
						/>
					</article>
					<div
						href="#middle"
						:class="[
							'video-section',
							inCinematic ? 'video-container' : '',
						]"
					>
						<div class="controls">
							<button class="skip back" @click.stop="skipBack">
								<img src="/dev/images/back.svg" alt="" />
							</button>
							<button class="skip forward">
								<img
									src="/dev/images/forward.svg"
									alt=""
									@click.stop="skipForward"
								/>
							</button>
							<button
								class="playpause"
								@click.stop="playpause"
								:style="`padding-left: ${playing ? 0 : 5}px;`"
							>
								<img
									v-if="!playing"
									src="/dev/images/play.png"
									alt=""
								/>
								<img
									v-else
									src="/dev/images/pause-icon.png"
									alt=""
								/>
							</button>
						</div>
						<video
							:src="pageData.latest"
							ref="latestVideo"
							@click="toggleCinematic"
							@play="
								() => {
									togglePlaying(true);
								}
							"
							@pause="
								() => {
									togglePlaying(false);
								}
							"
							unmuted
						></video>
					</div>
				</div>
				<SectionBorder color="black" />
			</section>
			<section class="about bodyPadding" id="about">
				<article class="about_content">
					<h1 class="heading">Vores vision</h1>
					<p class="paragraph">
						Uanset hvilke tjenester WRJ Media arbejder med
						fællesnævner er, at kvalitet, faglighed og fokus på
						detaljer er højt værdsat. <br /><br />Vi tilstræber at
						skabe en sammenhængende identitet mellem alle
						virksomhedens eksterne kommunikationskanaler, og
						skræddersy løsninger, der passer til virksomhedens
						profil, vision og kernepunkter.
					</p>
				</article>
				<article class="about_content">
					<h1 class="heading">Vores historie</h1>
					<p class="paragraph">
						Det hele startede med William, han solgte en mindre
						virksomhed tilbage i 2018, fordi han blev ansat som
						marketingansvarlig i en virksomhed i vækst, men gnisten
						for hjemmesider var der stadig. Så han startede WRJ
						Media! <br /><br />Siden da har vi samarbejdet med CG
						Shift, som er et animationsproduktionsbureau, hvilket
						gør at vi kan levere holistiske designløsninger under ét
						tag.
					</p>
				</article>
				<div class="about image-section">
					<img
						src="/dev/images/WRJ Media - Billeder/Forside/william_portreat.png"
						alt=""
						class="person"
						style="display: block"
					/>
					<a
						href="https://www.linkedin.com/in/williamrossjepsen"
						class="linkedin"
						target="_blank"
					>
						<b
							>William Ross Jepsen <br />
							Direktør, WRJ Media</b
						>
					</a>
				</div>
				<footer class="footer">
					<SectionBorder color="black" />
				</footer>
			</section>
			<Services :serviceData="pageData.services" />
			<section class="featured bodyPadding" id="featured">
				<h1 class="heading">Udvalgte projekter</h1>
				<CaseCard
					:position="index % 2 > 0 ? 'right' : 'left'"
					v-for="(workCase, index) in pageData.featured"
					:key="index"
					:data="workCase"
				/>
				<SectionBorder :color="'black'" />
			</section>
			<section class="customers bodyPadding">
				<article class="twoColumns logo-section">
					<h2 class="heading">Vores kunder</h2>
					<div class="customersGrid">
						<img
							src="/dev/images/WRJ Media - Billeder/Forside/Customers/Logos/davano.svg"
							alt=""
							class="DAVANO"
						/>
						<img
							src="/dev/images/WRJ Media - Billeder/Forside/Customers/Logos/bio-circle.svg"
							alt=""
							class="BIO-CIRCLE"
						/>
						<img
							src="/dev/images/WRJ Media - Billeder/Forside/Customers/Logos/opfrisk.svg"
							alt=""
							class="OPFRISK"
						/>
						<img
							src="/dev/images/WRJ Media - Billeder/Forside/Customers/Logos/flowy.svg"
							alt=""
							class="FLOWY"
						/>
						<img
							src="/dev/images/WRJ Media - Billeder/Forside/Customers/Logos/ready-2-clean.svg"
							alt=""
							class="READY-2-CLEAN"
						/>
						<img
							src="/dev/images/WRJ Media - Billeder/Forside/Customers/Logos/plejekassen.svg"
							alt=""
							class="PLEJEKASSEN"
						/>
						<img
							src="/dev/images/WRJ Media - Billeder/Forside/Customers/Logos/hairkompagniet.svg"
							alt=""
							class="HAIRKOMPAGNIET"
						/>
						<img
							src="/dev/images/WRJ Media - Billeder/Forside/Customers/Logos/plant-et-trae.svg"
							alt=""
							class="PLANT-ET-TRAE"
						/>
					</div>
				</article>
				<SectionBorder class="only-mobile" :color="'black'" />
				<article class="twoColumns reports">
					<h3 class="heading">Hvad siger de om os</h3>
					<section class="reportsInner">
						<article
							class="reportCard"
							v-for="report in pageData.reports"
							:key="report.id"
						>
							<h3 class="quote">"{{ report.quote }}"</h3>
							<img
								:src="report.customerLogo"
								alt=""
								class="customerLogo"
							/>
							<div class="customerInner">
								<p class="customerName">
									{{ report.customerName }}
								</p>
								<p class="customerPerson">
									{{ report.customerPerson }}
								</p>
							</div>
							<SectionBorder
								style="margin-top: 30px"
								:color="`rgba(0, 0, 0, 0.5)`"
							/>
						</article>
					</section>
				</article>
			</section>
		</main>
	</div>
</template>

<script setup>
import pageData from "@/components/homepage.json";
</script>

<script>
import SectionBorder from "@/components/SectionBorder.vue";
import CaseCard from "@/components/CaseCard.vue";
import emitter from "tiny-emitter/instance";
import Services from "@/components/Services.vue";
export default {
	name: "HomeView",
	components: { SectionBorder, CaseCard, Services },
	mounted() {
		let body = document.body;
		if (!body) return;
		body.style.backgroundColor = "";
	},
	data() {
		return {
			inCinematic: false,
			//playing: false,
		};
	},
	methods: {
		toggleCinematic() {
			this.inCinematic = !this.inCinematic;
			if (this.inCinematic) {
				const element = document.getElementById('latest');
                 element.scrollIntoView({ behavior: 'smooth' });
				this.stopLatest();
			}
		},
		playLatest() {
			try {
				this.$refs.latestVideo.play();
				this.togglePlaying(true);
			} catch (e) {
				console.log(e);
			}
		},
		stopLatest() {
			const video = this.$refs.latestVideo;
			if (!video || this.inCinematic) {
				return;
			}
			video.pause();
			video.currentTime = 0;
		},
		skipBack() {
			const video = this.$refs.latestVideo;
			const currentTime = video.currentTime;
			video.currentTime = currentTime - 5;
		},
		skipForward() {
			const video = this.$refs.latestVideo;
			const currentTime = video.currentTime;
			video.currentTime = currentTime + 5;
		},
		playpause() {
			const video = this.$refs.latestVideo;
			const playing = this.playing;
			if (playing) {
				video.pause();
				this.playing = false;
				return;
			}
			video.play();
			this.playing = true;
		},
		togglePlaying(state) {
			this.playing = state;
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
	},
};
</script>

<style lang="scss" scoped>
@import "@/components/Defaults.scss";
.home {
	flex-grow: 1;
	&.v-enter-from,
	&.v-leave-to {
		opacity: 0;
	}
}
header.header {
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-bottom: 50px; //50
	background-position: 50%, 50%;
	background-size: cover;
	background-repeat: no-repeat;
	text-align: center;
	position: relative;
	margin-bottom: 174px; //174
	& > * {
		position: relative;
	}
	.backgroundVideo {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		// object-fit: fill;
		object-fit: cover;
	}
	.tagline {
		margin-bottom: 10px;
		color: white;
		width: max-content;
		transition-delay: 0.35s;
		font-size: 25px;
		font-weight: 400;
		&.v-enter-from {
			transform: translateY(20px); //20
			transform-origin: 50%;//50
			opacity: 0;
		}
	}
	.pageHeading {
		font-size: 95px;
		line-height: 103%;
		font-weight: 500;
		margin-bottom: 30px;
		transition-delay: 0.15s;
		color: white;
		&.v-enter-from {
			transform: translateY(25px);
			transform-origin: 50%;
			opacity: 0;
		}
	}
}
main.main {
	section.latest {
		.inner {
			height: max-content;
			display: flex;
			//max-height: 90vh;
			transition-property: margin-top;
			transition-timing-function: ease;
			transition-duration: 350ms;
			padding-bottom: 140px; //

			.video-section.video-container {
				position: relative;
				width: 100%;
				height: 100vh;
				overflow: hidden;
			}

			.video-section.video-container video {
				position: absolute;
				top: 50%; //50
				left: 50%;// 50
				transform: translate(-50%, -50%); //50 -50

				background-size: cover;
				min-width: 100%;
				min-height: 100%;
				width: auto;
				height: auto;
			}
			.video-section {
				flex-grow: 2;
				width: 600px;
				transition-property: opacity, max-width, transform;
				transition-timing-function: ease;
				transition-duration: 350ms;
				position: relative;
				cursor: pointer;
				height: inherit;
				video {
					width: 100%;
					height: auto;
				}
				.controls {
					position: absolute;
					left: 20px;
					bottom: 20px;
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 8px;
					z-index: 1;
					button {
						cursor: pointer;
					}
					.skip {
						height: 35px;
						width: 35px;
						display: flex;
						justify-content: center;
						align-items: center;
						border-radius: 50%;
						background-color: rgb(252, 247, 240, 0.5);
						&.forward {
							margin-bottom: 12px;
						}
					}
					.playpause {
						height: 50px;
						width: 50px;
						border-radius: 50%;
						display: flex;
						justify-content: center;
						align-items: center;
						padding-left: 5px;
						background-color: rgb(252, 247, 240, 0.5);
					}
				}
			}
		}
		.arrow {
			margin-top: 50px;
		}
		.content {
			width: 500px;
		}
		article {
			width: 800px;
			max-width: 40%;
			margin-right: 200px;
			transition-property: opacity, width, transform, margin-right;
			transition-timing-function: ease;
			transition-duration: 850ms;
			overflow: hidden;
			.heading {
				font-weight: 400;
				font-size: 61px;
				line-height: 125%;
			}
			.description {
				font-weight: 400;
				font-size: 20px;
				line-height: 135%;
				margin-top: 20px;
			}
		}
	}
	section.about {
		display: grid;
		grid-template-columns: 1fr 1fr max-content;
		grid-template-areas: ". . person" "footer footer footer";
		width: 100%;
		gap: 50px;
		padding-top: 59px;
		padding-bottom: 56px;
		.person {
			height: 500px;
			grid-area: person;
		}
		.heading {
			color: black;
			font-weight: 400;
			font-size: 61px;
			line-height: 125%;
		}
		.image-section {
			a {
				display: block;
				margin-top: 10px;
			}
		}
		p {
			font-weight: 400;
			font-size: 20px;
			line-height: 135%;
			max-width: 580px;
			margin-top: 27px;
		}
	}
	section.featured {
		margin-top: 57px;
		.heading {
			font-weight: 400;
			font-size: 61px;
			line-height: 125%;
			margin-bottom: 64px;
		}
	}
	section.customers {
		margin: 72px 0 159px 0;
		h2.heading {
			font-weight: 400;
			font-size: 61px;
			line-height: 125%;
		}
		h3.heading {
			font-weight: 400;
			font-size: 49px;
			line-height: 125%;
			font-style: normal;
		}
		.twoColumns:first-of-type {
			margin-bottom: 149px;
		}
		.customersGrid {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			gap: 18px;
			height: max-content;
			width: 80%;
			align-items: center;

			img {
				display: flex;
				align-items: center;
				justify-content: center;
				max-width: 90px;
				max-height: 90px;
				object-fit: contain;
			}
		}
		.reports {
			width: 100%;
			margin: 75px 0;
			.reportCard {
				width: 75%;
				margin-bottom: 60px;
				&:last-of-type {
					margin-bottom: 0;
				}
				.quote {
					font-weight: 450;
					font-size: 24px;
					line-height: 125%;
					margin-bottom: 10px;
					font-weight: normal;
				}
				.customerLogo {
					height: 60px;
					width: 60px;
					border-radius: 3px;
					margin-top: 18px;
				}
				.customerInner {
					margin-bottom: 10px;
					.customerName {
						font-weight: bold;
						font-weight: 600;
						margin-top: 0px;
						font-size: 20px !important;
						line-height: 130%;
					}
					.customerPerson {
						color: rgba(0, 0, 0, 0.5);
						font-weight: 400;
						font-size: 20px;
						line-height: 135%;
					}
				}
			}
		}
	}
	footer.footer {
		grid-area: footer;
		display: flex;
		flex-direction: column;
		.cta {
			margin-right: auto;
			display: flex;
			margin-bottom: 18px;
			padding: 5px 10px;
		}
	}
}
.only-mobile {
	display: none;
}
@media screen and (min-width: 900px) {
	main.main section.latest.cinematic {
		height: max-content;
		.inner {
			margin-top: -50px;
			max-height: max-content;
			height: max-content;
			cursor: default;
		}
		video {
			cursor: default;
			height: 200px;
		}
		article {
			width: 0px;
			margin-right: 0;
			transform: scale(0.7);
		}
		.controls {
			left: 50px !important;
			bottom: 50px !important;
		}
	}
}
@media screen and (min-width: 1450px) {
	.about {
		.image-section {
			position: relative;
			a {
				position: absolute;
				bottom: 0;
				right: calc(100% + 20px);
				width: max-content;
			}
		}
	}
}
@media screen and (max-width: 900px) {
	main.main {
		section.about {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-areas: ". person" ". person" "footer footer";
		}
		section.featured {
			.heading {
				font-size: 50px;
				margin-bottom: 64px;
			}
		}
		footer.footer {
			grid-area: footer;
			display: flex;
			flex-direction: column;
			.cta {
				margin-right: auto;
				display: flex;
				margin-bottom: 20px;
				padding: 5px 10px;
			}
		}
	}
}
@media screen and (max-width: 1250px) {
	main.main section.latest {
		margin-top: 20px;
		.arrow {
			display: none;
		}
		.inner {
			max-height: max-content;
			flex-direction: column;
			.video-section {
				width: 100%;
				margin-top: 30px;
				cursor: default;
			}

			article {
				width: 100%;
				max-width: 100%;
			}
			.content {
				width: 100%;
				height: max-content;
			}
		}
	}
}
@media screen and (max-width: 500px) {
	.tagline {
		margin-top: 5px;
		font-size: 20px !important;
	}
	.logo-section {
		margin-top: 80px;
	}
	.only-mobile {
		display: block;
	}

	.video-section {
		margin-top: 59px !important;
	}

	section.latest {
		.inner {
			padding-bottom: 66px !important;
		}
	}
	.customersGrid {
		justify-content: center;
		margin-top: 20px;
		img {
			width: 85px !important;
			height: 85px !important;
		}
	}
	header.header {
		margin-bottom: 78px !important;
		.pageHeading {
			font-size: 64px;
		}
	}
	section.about {
		.person {
			height: 450px !important;
			grid-area: person;
		}
		.linkedin {
			display: none !important;
		}
	}
	.heading,
	.primaryHeading {
		font-size: 44px !important;
	}
	.description,
	.paragraph {
		font-size: 20px !important;
		font-weight: normal !important;
		margin-top: 25px !important;
		color: #2d2d2d !important;
	}
	main.main {
		section.about {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-areas: "." "." "person" "footer";
			.person {
				width: 100%;
			}
		}
		section.featured {
			margin-top: 80px;
			.heading {
				font-size: 40px;
				margin-bottom: 10px;
				padding: 10px 0;
			}
			.sectionBorder {
				display: block;
			}
		}
		section.customers {
			margin: 30px 0;
			h2.heading {
				font-size: 35px;
			}
			h3.heading {
				font-size: 30px;
			}
			.customersGrid {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr 1fr;
				gap: 10px;
				width: 100%;

				img {
					width: 100%;
					height: 100%;
					object-fit: contain;
				}
			}
			.twoColumns:first-of-type {
				margin-bottom: 80px;
			}
			.reports {
				margin: 30px 0;
				.heading {
					font-size: 34px !important;
					margin-top: 55px !important;
				}
				.reportCard {
					width: 100%;
					margin-bottom: 20px;
					.quote {
						font-size: 18px;
						color: #2b2b2b;
						margin-top: 55px !important;
					}
					.customerInner {
						margin-bottom: 10px;
						.customerName {
							font-weight: bold;
							font-size: 15px;
						}
						.customerPerson {
							color: rgba(0, 0, 0, 0.5) !important;
							font-size: 16px;
						}
					}
				}
			}
		}
		footer.footer {
			grid-area: footer;
			display: flex;
			flex-direction: column;
			.cta {
				margin-right: auto;
				display: flex;
				margin-bottom: 20px;
				padding: 5px 10px;
			}
		}
	}
	footer.primaryFooter {
		height: unset;
		padding: 30px 20px 100px 20px;
		flex-shrink: 0;
		display: flex;
		.twoColumns {
			grid-template-columns: 1fr auto;
		}
		flex-direction: column;
		.backToTop {
			font-size: 15px;
			svg {
				height: 15px;
				width: 15px;
			}
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
					font-weight: bold;
					margin-bottom: 10px;
					font-size: 20px;
					padding: 5px 10px;
				}
				a {
					padding: 5px 10px;
					width: max-content;
				}
			}
		}
		.copy {
			display: flex;
			width: 100%;
			gap: 100px;
			color: lightgray;
			margin-top: auto;
			justify-content: center;
			opacity: 0.6;
			* {
				color: white;
			}
		}
		* {
			color: white;
		}
	}
	.twoColumns {
		grid-template-columns: 1fr;
		gap: 20px;
	}
}
</style>
