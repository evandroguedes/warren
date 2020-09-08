<template>
  <v-form ref="form" v-model="valid">
    <div ref="form-container">
      <inputs-reply-form-atom
        :items="currentReplyForm.result.items"
        :mutate-answers="mutateAnswers"
        :is-valid-form="valid"
        :action="action"
        v-if="hasInputs()" />
      <buttons-reply-form-atom
        :items="currentReplyForm.result.items"
        :mutate-answers="mutateAnswers"
        :action="action"
        v-if="hasButtons()" />
    </div>
  </v-form>
</template>
<script>
import InputsReplyFormAtom from '../atoms/InputsReplyFormAtom';
import ButtonsReplyFormAtom from '../atoms/ButtonsReplyFormAtom';

export default {
  name: 'SuitabilityReplyFormMolecule',
  data: () => ({
    valid: false,
  }),
  props: {
    currentReplyForm: {
      type: Object,
    },
    mutateAnswers: {
      type: Function,
      required: true,
    },
    action: {
      type: Function,
      required: true,
    },
  },
  components: {
    InputsReplyFormAtom,
    ButtonsReplyFormAtom,
  },
  methods: {
    hasInputs() {
      return this.currentReplyForm?.has?.inputs;
    },
    hasButtons() {
      return this.currentReplyForm?.has?.buttons;
    },
  },
}
</script>
