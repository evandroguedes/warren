<template>
  <v-form ref="form" v-model="valid">
    <div ref="form-container">
      <inputs-reply-form-atom :items="currentReplyForm.result.items" :is-valid-form="valid" />
    </div>
  </v-form>
</template>
<script>
import InputsReplyFormAtom from '../atoms/InputsReplyFormAtom';

export default {
  name: 'SuitabilityReplyFormMolecule',
  data: () => ({
    valid: false,
  }),
  props: {
    currentReplyForm: {
      type: Object,
    },
  },
  components: {
    InputsReplyFormAtom,
  },
}
</script>
