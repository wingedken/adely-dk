<template>
	<div class="caseView view">
		<header class="header bodyPadding">
			<img
				v-if="caseData.caseImage"
				:src="caseData.caseImage"
				alt=""
				class="caseImg"
			/>
			<h5 class="title" >
				{{ caseData.title }}
        <img src="/dev/images/WRJ Media - Billeder/arrow-down.svg" class="only-mobile" alt="arrow-down">
			</h5>
		</header>
    <SectionBorder class="only-desktop"  color="black" />
		<main class="main">
			<div class="mainGrid bodyPadding">
				<h3 class="semiTitle" >
					Om projektet
				</h3>
				<p class="description" >
					{{ caseData.description }}
				</p>
        <div class="py-76 only-mobile">
          <SectionBorder class="bodyPadding" color="black" />
        </div>
				<div class="contentContainer">
					<h3 class="semiTitle" >
						Service

            <SectionBorder class="bodyPadding only-mobile mt-2" color="black" />
					</h3>
					<h2
						class="contentTitle"

					>
						{{ caseData.service }}
					</h2>
				</div>
        <div class="flex">
          <div class="contentContainer" v-if="caseData.programs">
            <h3 class="semiTitle" >
              Programmer
              <SectionBorder class="bodyPadding only-mobile mt-2" color="black" />
            </h3>
            <h2
                class="contentTitle"
                
            >
              {{ caseData.programs.join(", ") }}
            </h2>
          </div>
          <div class="contentContainer">
            <h3 class="semiTitle" >
              Industri
              <SectionBorder class="bodyPadding only-mobile mt-2" color="black" />
            </h3>
            <h2
                class="contentTitle"
                
            >
              {{ caseData.customer }}
            </h2>
          </div>
        </div>
			</div>
      <div class="py-76 px-24 only-mobile">
        <SectionBorder class="bodyPadding" color="black" />
      </div>
			<div class="bodyPadding only-desktop">
				<SectionBorder class="bodyPadding" color="black" />
			</div>
			<CaseGallery
				class="bodyPadding"
				v-if="caseData.gallery && caseData.gallery.length > 0"
				:items="caseData.gallery"
			/>
			<div class="bodyPadding only-desktop">
				<SectionBorder class="bodyPadding" color="black" />
			</div>
      <div class="py-76 px-24 only-mobile">
        <SectionBorder class="bodyPadding" color="black" />
      </div>

			<section class="otherCases bodyPadding">
				<h1 class="otherCasesTitle" >
					Flere cases
				</h1>
        <div>

          <TransitionGroup
              class="scrollContainer"
              name="otherCases"
              tag="div"
          >
            <div
                class="caseCard firstCard"
                :key="otherCasesOffset"
                v-if="otherCases[otherCasesOffset]"
            >
              <img
                  :src="otherCases[otherCasesOffset]?.caseImage"
                  alt=""
                  class="caseImg"
              />
              <div class="content">
                <router-link
                    class="caseTitle"

                    @mouseenter="startHovering"
                    @mouseleave="endHovering"
                    :to="`/case/${otherCases[otherCasesOffset]?.pathId}`"
                ><h3>{{
                    otherCases[otherCasesOffset]?.title
                  }}</h3></router-link
                >
              </div>
            </div>
            <div
                class="caseCard lastCard"
                :key="otherCasesOffset + 1"
                v-if="otherCases[otherCasesOffset + 1]"
            >
              <img
                  :src="otherCases[otherCasesOffset + 1]?.caseImage"
                  alt=""
                  class="caseImg"
              />
              <div class="content">
                <router-link
                    class="caseTitle"
                    @mouseenter="startHovering"
                    @mouseleave="endHovering"
                    :to="`/case/${
									otherCases[otherCasesOffset + 1]?.pathId
								}`"
                >{{
                    otherCases[otherCasesOffset + 1]?.title
                  }}</router-link
                >
              </div>
            </div>
          </TransitionGroup>
          <div class="buttonContainer">
            <button
                class="scrollButton scrollBack"
                @click="scrollBackwards"
                @mouseenter="startHovering"
                @mouseleave="endHovering"
            >
              <img
                  style="transform: scaleX(-1)"
                  src="/dev/images/WRJ Media - Billeder/arrow.svg"
                  alt=""
              />
            </button>
            <span style="font-family: 'font-regular'; font-weight: bold; font-size: 18px">Bladr</span>
            <button
                class="scrollButton scrollForwards"
                @click="scrollForwards"
                @mouseenter="startHovering"
                @mouseleave="endHovering"
            >
              <img
                  src="/dev/images/WRJ Media - Billeder/arrow.svg"
                  alt=""
              />
            </button>
          </div>
        </div>
			</section>
		</main>
	</div>
</template>

<script>
import cases from "@/cases.json";
import SectionBorder from "@/components/SectionBorder.vue";
import emitter from "tiny-emitter/instance";
import CaseGallery from "@/components/CaseGallery.vue";
export default {
	name: "CaseView",
	data() {
		return {
			caseData: {},
			otherCases: [],
			otherCasesOffset: 0,
		};
	},
	components: {
		SectionBorder,
		CaseGallery,
	},
	mounted() {
		this.fetchCaseData();
		this.fetchOtherCases();
	},
	computed: {
		activeOtherCases() {
			let offset = this.otherCasesOffset;
			return [...this.otherCases].splice(offset, 2);
		},
	},
	watch: {
		"$route.params.caseId": function () {
			this.fetchCaseData();
			this.otherCasesOffset = 0;
		},
	},
	methods: {
		fetchCaseData() {
			let id = this.$route.params.caseId;
			let _case = cases.find((o) => {
				return o.pathId == id;
			});
			this.caseData = _case;
			this.fetchOtherCases();
			emitter.emit("changeBackgroundColor", _case.backgroundColor);
		},
		fetchOtherCases() {
			let filteredList = cases.filter((o) => {
				return o.pathId != this.caseData.pathId;
			});
			this.otherCases = filteredList;
		},
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
		scrollForwards() {
			if (this.otherCasesOffset == this.otherCases.length - 1) return;
			this.otherCasesOffset++;
		},
		scrollBackwards() {
			if (this.otherCasesOffset == 0) return;
			this.otherCasesOffset--;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "@/components/Defaults.scss";
.caseView {
	padding-top: 200px;
	padding-bottom: 100px;
	&.v-enter-from,
	&.v-leave-to {
		opacity: 0;
	}
	header.header {
		.caseImg {
			aspect-ratio: 2 / 1;
			width: 100%;
			max-height: 1200px;
			object-fit: fill;
		}
	}
	.title {
		font-weight: 400;
		margin-top: 60px;
		font-size: 96px;
		line-height: 125%;
		margin-bottom: 64px;
	}
	main.main {
		.mainGrid {
			display: grid;
			flex-wrap: wrap;
			grid-template-rows: 1fr max-content;
			grid-template-columns: 25% 1fr;
			grid-template-areas: ". description description" ". . .";
			column-gap: 100px;
			row-gap: 50px;
			margin: 30px 0;
			.contentTitle {
				font-weight: 400;
				font-size: 39px;
				line-height: 125%;
			}
			.semiTitle {
				margin-bottom: 10px;
				min-width: 300px;
				max-width: 500px;
				font-weight: 400;
				font-size: 20px;
				line-height: 135%;
			}
			.description {
				font-weight: 400;
				font-size: 20px;
				line-height: 135%;
				grid-area: description;
        width: 60%;
			}
		}
		.img {
			width: 100%;
			margin-top: 30px;
		}
		.otherCases {
			margin-top: 50px;
			width: 100vw;
			display: flex;
      gap: 250px;
      overflow: hidden;
      padding: 0;

			.otherCases-move,
			.otherCases-enter-active,
			.otherCases-leave-active {
				transition-duration: 500ms;
				transition-property: all;
			}
			.otherCases-leave-active {
				position: absolute;
			}
			.firstCard.otherCases-enter-from,
			.firstCard.otherCases-leave-to {
				opacity: 0;
				transform: translateX(-100vw);
			}
			.lastCard.otherCases-enter-from,
			.lastCard.otherCases-leave-to {
				opacity: 0;
				transform: translateX(200vw);
			}
			.flexContainer {
				align-items: flex-start;
			}
			.otherCasesTitle {
				margin-bottom: 15px;
				color: black;
				font-weight: 400;
				font-size: 49px;
				line-height: 125%;
        padding: 0 0 0 clamp(10px, 3vw, 50px);
        min-width: max-content;
			}
			.buttonContainer {
				display: flex;
				align-items: center;
				// justify-content: center;
				gap: 20px;
        margin-top: 35px;
			}
			.scrollButton {
				z-index: 2;
				background: transparent;
				cursor: pointer;
			}
			.scrollContainer {
				width: calc(100% + 50px);
				display: flex;
				gap: 60px;
				align-items: center;
				.caseCard {
					width: 60vw;
          max-height: 500px;
					max-width: 40vw;
					aspect-ratio: 5 / 3;
					display: flex;
					flex-direction: column;
					.caseImg {
						height: auto;
						width: 100%;
						object-fit: fill;
						flex-grow: 1;
						margin-bottom: 10px;
					}
					.content {
						display: flex;
						align-items: flex-end;
						justify-content: space-between;
						.caseTitle {
							height: max-content;
							font-weight: 400;
							font-size: 38px;
							line-height: 175%;
						}
						.readMore {
							font-size: 20px;
							padding: 5px 10px;
						}
					}
					&:first-of-type {
						margin-left: 0;
					}
					&:last-of-type {
						margin-right: 0;
					}
				}
			}
		}
	}
}
.only-mobile {
  display: none;
}

@media screen and (max-width: 1500px) {
	.caseView {
		main.main {
			.mainGrid {
				grid-template-columns: 1fr 1fr !important;
				grid-template-areas: ". description" ". ." ". ." !important;
			}
		}
	}
}

@media screen and (max-width: 1000px) {
	.caseView {
		main.main {
			.mainGrid {
				display: flex;
				flex-direction: column;
				gap: 20px;
			}
		}
		.otherCases {
			.scrollContainer {
				padding: 0 !important;
			}
			.buttonContainer {
				padding: 0 !important;
				margin: 0 auto !important;
			}
		}
	}
}
@media screen and (max-width: 500px) {
  .only-desktop {
    display: none;
  }
  .only-mobile {
    display: block;
  }
  .contentContainer {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 15px;

    .semiTitle, .contentTitle {
      width: max-content;
      margin: 0 !important;
      font-size: 20px !important;
      min-width: max-content !important;
    }
  }
  .caseGallery {
    margin: 0;
  }
  .otherCases {
    flex-direction: column;
    margin-top: 0 !important;
    gap: 10px !important;
    padding: 0 24px !important;

    .otherCasesTitle {
      padding: 0 !important;
    }
  }
	.caseView {
		padding-top: 0;
    padding-bottom: 0;
    .header {
      position: relative;
      padding: 0;
      .caseImg {
        max-height: 100vh !important;
        object-position: 75%;
        height: 100vh;
        object-fit: cover !important;
      }
      .title {
        position: absolute;
        z-index: 10;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: max-content;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
          margin-top: 60px;
        }
      }
    }
		.title {
			font-size: 50px;
		}
		main.main {
			.mainGrid {
				grid-template-columns: 1fr;
				gap: 10px;
        .description {
          width: 100%;
        }
				.flex {
          width: 100%;
					flex-direction: column;
          margin-top: -7px;
				}
				.contentTitle {
					margin-bottom: 10px;
					font-size: 25px;
          font-family: font-regular;
				}
				.semiTitle {
          margin-top: 70px;
					margin-bottom: 25px;
          font-size: 48px;
				}
			}
			.otherCases {
				.scrollContainer {
					padding: 0 0 20px 0;
					gap: 25px;
					.caseCard {
						width: 88vw;
            height: 250px;
            max-width: 100vw;
						.content {
							padding: 0;
							.caseTitle {
								font-size: 30px;
							}
							.readMore {
								font-size: 15px;
								padding: 0;
							}
						}
					}
				}
        .buttonContainer {
          margin-top: 30px !important;
        }
			}
		}
	}
}
</style>