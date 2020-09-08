<template>
  <v-row>
    <v-col lg="10" sm="9" md="9" xs="9" v-for="(item, index) in items" :key="index">
      <v-text-field
        v-model="localStateAnswers"
        :placeholder="masks[item.mask].placeholder"
        :rules="masks[item.mask].rule"
        v-mask="masks[item.mask].mask"
        required
        full-width
        filled
        autofocus
      />
    </v-col>
    <v-col lg="2" sm="3" md="3" xs="3">
      <v-btn
        class="mr-4"
        color="secondary"
        :disabled="!isValidForm"
        @click="action"
        block
        rounded
        x-large>
        OK
      </v-btn>
    </v-col>
  </v-row>
</template>
<script>
import AwesomeMask from 'awesome-mask';

export default {
  name: 'InputsReplyFormAtom',
  data: () => ({
    masks: {
      name: {
        placeholder: 'Digite seu nome',
        rule: [
          value => !!value || 'Precisamos saber seu nome',
        ],
        mask: '',
      },
      integer: {
        placeholder: '', 
        rule: [],
        mask: '999',
      },
      currency: {
        placeholder: '',
        rule: [],
        mask: '99999999999999999',
      },
      email: {
        placeholder: '',
        rule: [
          value => !!value || 'Precisamos saber seu email',
        ],
        mask: '',
      },
    },
    localStateAnswers: '',
  }),
  props: {
    items: {
      type: Array,
      required: true,
    },
    isValidForm: {
      type: Boolean,
      required: true,
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
  directives: {
    'mask': AwesomeMask
  },
  watch: {
    localStateAnswers: {
      handler(answers) {
        this.mutateAnswers(answers);
      },
      immediate: true
    }
  },
}
</script>
