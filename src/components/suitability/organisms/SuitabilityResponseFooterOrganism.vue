<template>
  <v-footer app class="suitability-response-footer-organism" v-if="shouldShowFooter">
    <suitability-reply-form-molecule
      :current-reply-form="currentReplyForm"
      :answers-state="answersState"
      :mutate-answers="mutateAnswers"
      :action="postAnswer" />
  </v-footer>
</template>
<script>
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex';
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
      answersState: state => state.answers,
    }),
  },
  methods: {
    ...mapMutations('suitability', {
      mutateAnswers: TYPES.MUTATE_ANSWERS,
    }),
    ...mapActions('suitability', {
      postAnswer: TYPES.POST_ANSWER,
    }),
  },
}
</script>
<style scoped>
  .suitability-response-footer-organism {
    display: inherit
  }
</style>