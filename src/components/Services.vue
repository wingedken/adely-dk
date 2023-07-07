<template>
	<div class="services bodyPadding" id="services">
		<div class="inner">
			<div class="serviceGroup">
				<h1 class="primaryHeading">
					{{ serviceData.heading }}
				</h1>
				<p class="primaryDescription">{{ serviceData.description }}</p>
			</div>
      <div class="servicesGroup">
        <div
            class="serviceGroup"
            v-for="(group, index) in serviceData.serviceGroups"
            :key="index"
        >
          <h2 class="serviceTitle">
            <span>{{ group.title }}</span>
            <SectionBorder :color="`black`" />
          </h2>

          <div class="serviceContent">
            <ServiceDropdown
                :serviceData="service"
                v-for="(service, serviceIndex) in group.services"
                :key="serviceIndex"
            />
          </div>
        </div>
      </div>
		</div>
		<SectionBorder class="not-in-mobile" :color="`black`" />
	</div>
</template>

<script>
import ServiceDropdown from "@/components/ServiceDropdown.vue";
import SectionBorder from "@/components/SectionBorder.vue";
export default {
	name: "ServicesComponent",
	components: {
		ServiceDropdown,
		SectionBorder,
	},
	props: {
		serviceData: Object,
	},
};
</script>

<style lang="scss" scoped>
@import "@/components/Defaults.scss";
.services {
	.inner {
		display: grid;
		grid-template-columns: 30% auto;
		margin-bottom: 102px;
		gap: 30px;
	}
  .servicesGroup {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    .serviceGroup {
      margin-right: 16px;
    }
  }
	.serviceGroup {
		.primaryHeading {
			font-weight: 400;
			font-size: 61px;
			line-height: 125%;
      margin-bottom: 27px;
		}
    .primaryDescription {
      font-size: 20px;
    }
		.serviceTitle {
			span {
				display: block;
				margin-bottom: 32px;
				font-family: "font-heading";
				font-weight: 400;
				font-size: 39px;
				line-height: 125%;
			}
		}
	}
}
@media screen and (max-width: 900px) {
	.services {
		.inner {
			grid-template-columns: 1fr 1fr;
			gap: 35px;
		}
	}
}
@media screen and (max-width: 500px) {
  .not-in-mobile {
    display: none !important;
  }
	.services {
    .servicesGroup {
      display: block;
      .serviceGroup {
        margin: 35px 0 0 0;
        h2 {
          span {
            font-size: 34px !important;
          }
        }
      }
    }
    .primaryHeading {
      font-size: 44px !important;
    }
    .primaryDescription {
      font-size: 25px !important;
      font-weight: normal !important;
      margin-top: 25px !important;
      color: #2d2d2d !important;
    }
		.inner {
			grid-template-columns: 1fr;
			gap: 35px;
		}
		.sectionBorder {
			display: block;
		}
	}
}
</style>
