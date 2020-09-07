<template>
  <div ref="container"></div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';
import * as TYPES from '../../../store/suitability/types';
import SuitabilityResponseTyperMolecule from '../molecules/SuitabilityResponseTyperMolecule';
import Vue from 'vue'

const SuitabilityResponseTyperMoleculeClass = Vue.extend(SuitabilityResponseTyperMolecule)
const createSuitabilityResponseTyperMoleculeInstance = (propsData) => {
  return new SuitabilityResponseTyperMoleculeClass({ propsData })
};

const DELAY_BETWEEN_MESSAGES = 500;

export default {
  name: 'SuitabilityResponseOrganism',
  components: {
  },
  methods: {
    ...mapMutations('suitability', {
      nextMessage: TYPES.NEXT_MESSAGE,
    }),
    onTypeComplete() {
      if (!this.isTheLastMessage) {
        this.nextMessage();
      }
    },
    addMessage() {
      const propsData = {
        message: this.currentMessage,
        onComplete: this.onTypeComplete,
        showCursor: false,
      };
      const responseTyperMoleculeInstance = createSuitabilityResponseTyperMoleculeInstance(propsData);
      responseTyperMoleculeInstance.$mount()
      this.$refs.container.appendChild(responseTyperMoleculeInstance.$el)
    },
  },
  computed: {
    ...mapGetters('suitability', {
      currentMessage: TYPES.CURRENT_MESSAGE,
      isTheLastMessage: TYPES.IS_CURRENT_MESSAGE_THE_LAST_ONE,
    }),
    ...mapState('suitability', {
      currentMessageIndex: state => state.currentMessageIndex,
    }),
    isTheFirstMessage() {
      return this.currentMessageIndex === 0;
    },
  },
  watch: {
    currentMessage: {
      handler(message) {
        const delay = this.isTheFirstMessage ? 0 : DELAY_BETWEEN_MESSAGES;
        if (message) setTimeout(this.addMessage, delay);
      },
      immediate: true
    }
  },
}
</script>
