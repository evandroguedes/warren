<template>
  <v-footer app class="suitability-response-footer-organism" v-if="shouldShowFooter">
    <suitability-reply-form-molecule :current-reply-form="currentReplyForm" />
  </v-footer>
</template>
<script>
import { mapGetters, mapState } from 'vuex';
import * as TYPES from '../../../store/suitability/types';
import SuitabilityReplyFormMolecule from '../molecules/SuitabilityReplyFormMolecule';

export default {
  name: 'SuitabilityResponseFooterOrganism',
  components: {
    SuitabilityReplyFormMolecule,
  },
  computed: {
    ...mapGetters('suitability', {
      currentReplyForm: TYPES.CURRENT_REPLY_FORM,
    }),
    ...mapState('suitability', {
      shouldShowFooter: state => state.shouldShowFooter,
    }),
  },
}
</script>
<style scoped>
  .suitability-response-footer-organism {
    display: inherit
  }
</style>