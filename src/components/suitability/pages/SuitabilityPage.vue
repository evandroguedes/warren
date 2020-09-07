<template>
  <suitability-template />
</template>
<script>
import { mapActions } from 'vuex';
import * as TYPES from '../../../store/suitability/types';
import SuitabilityTemplate from '../templates/SuitabilityTemplate';

export default {
  name: 'SuitabilityPage',
  components: {
    SuitabilityTemplate,
  },
  methods: {
    async init() {
      return await this.postMessage({
        id: null,
        message: {},
      });
    },
    ...mapActions('suitability', {
      postMessage: TYPES.POST_MESSAGE,
    }),
  },
  async created() {
    return await this.init();
  },
}
</script>
