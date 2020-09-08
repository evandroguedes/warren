<template>
  <v-row>
    <v-col cols="12" sm="4" v-for="(item, index) in items" :key="index">
      <v-btn
        class="mr-4"
        color="secondary"
        @click="submit(item)"
        block
        rounded
        x-large>
        {{ item.label.title }}
      </v-btn>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'ButtonsReplyFormAtom',
  data: () => ({
    localStateAnswers: [],
  }),
  props: {
    items: {
      type: Array,
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
  methods: {
    submit(item) {
      this.mutateAnswers(item.value);
      this.action({ label: item.label.title });
    },
  },
}
</script>
