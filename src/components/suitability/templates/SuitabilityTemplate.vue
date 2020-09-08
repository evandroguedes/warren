<template>
  <v-app>
    <v-app-bar app flat dark>
      <v-toolbar-title class="text-caption">ABRA SUA CONTA</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-sheet
          :color="'grey darken-3'"
          class="px-3 pt-3 pb-3"
          >
          <v-skeleton-loader
            ref="skeleton"
            type="list-item-avatar-three-line"
            class="mx-auto"
            v-if="!hasResponse()" />
          <suitability-response-organism v-if="hasResponse()" />
        </v-sheet>
        <suitability-response-footer-organism />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import { mapState } from 'vuex';
import SuitabilityResponseOrganism from '../organisms/SuitabilityResponseOrganism';
import SuitabilityResponseFooterOrganism from '../organisms/SuitabilityResponseFooterOrganism';

export default {
  name: 'SuitabilityTemplate',
  components: {
    SuitabilityResponseOrganism,
    SuitabilityResponseFooterOrganism,
  },
  methods: {
    hasResponse() {
      return this.messages.length > 0;
    },
  },
  computed: {
    ...mapState('suitability', {
      messages: state => state.messages,
    }),
  },
}
</script>
