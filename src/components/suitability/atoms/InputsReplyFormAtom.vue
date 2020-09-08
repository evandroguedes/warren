<template>
  <v-row>
    <v-col cols="10" v-for="(item, index) in items" :key="index">
      <v-text-field
        v-model="value[index]"
        :placeholder="masks[item.mask].placeholder"
        :rules="masks[item.mask].rule"
        required
        full-width
        filled
        autofocus
      />
    </v-col>
    <v-col cols="2">
      <v-btn
        class="mr-4"
        color="secondary"
        :disabled="!isValidForm"
        block
        rounded
        x-large>
        OK
      </v-btn>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'InputsReplyFormAtom',
  data: () => ({
    masks: {
      name: {
        placeholder: 'Digite seu nome',
        rule: [
          value => !!value || 'Precisamos saber seu nome',
        ],
      },
    },
    value: {},
  }),
  props: {
    items: {
      type: Array,
      required: true,
    },
    isValidForm: {
      type: Boolean,
      required: true,
    }
  },
}
</script>
