<template>
  <div>
    {{messages}}
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import * as TYPES from '../store/suitability/types';

export default {
  name: 'HelloWorld',
  methods: {
    ...mapActions('suitability', {
      postMessage: TYPES.POST_MESSAGE,
    }),
  },
  computed: mapGetters('suitability',{
    messages: TYPES.SPLITTED_MESSAGES,
  }),
  async created() {
    await this.postMessage({
      id: null,
      message: {},
    });
  },
}
</script>
