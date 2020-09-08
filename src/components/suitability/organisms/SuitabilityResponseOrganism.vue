<template>
  <v-list ref="list">
    <div ref="container"></div>
  </v-list>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';
import * as TYPES from '../../../store/suitability/types';
import SuitabilityResponseTyperMolecule from '../molecules/SuitabilityResponseTyperMolecule';
import SuitabilityAnswerMolecule from '../molecules/SuitabilityAnswerMolecule';
import Vue from 'vue';

const SuitabilityResponseTyperMoleculeClass = Vue.extend(SuitabilityResponseTyperMolecule);
const createSuitabilityResponseTyperMoleculeInstance = (propsData) => {
  return new SuitabilityResponseTyperMoleculeClass({ propsData });
};

const SuitabilityAnswerMoleculeClass = Vue.extend(SuitabilityAnswerMolecule);
const createSuitabilityAnswerMoleculeInstance = (propsData) => {
  return new SuitabilityAnswerMoleculeClass({ propsData });
};

const DELAY_BETWEEN_MESSAGES = 500;

export default {
  name: 'SuitabilityResponseOrganism',
  methods: {
    ...mapMutations('suitability', {
      nextMessage: TYPES.MUTATE_NEXT_MESSAGE,
      showFooter: TYPES.MUTATE_TOGGLE_FOOTER_VISIBILTY,
    }),
    onTypeComplete() {
      if (!this.isTheLastMessage) {
        this.nextMessage();
      } else {
        this.showFooter();
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
    addAnswer() {
      const { currentAnswer, nameInitial } = this;
      const propsData = {
        message: currentAnswer,
        showCursor: false,
        nameInitial,
      };
      const answerMoleculeInstance = createSuitabilityAnswerMoleculeInstance(propsData);
      answerMoleculeInstance.$mount()
      this.$refs.container.appendChild(answerMoleculeInstance.$el)
    },
  },
  computed: {
    ...mapGetters('suitability', {
      currentMessage: TYPES.CURRENT_MESSAGE,
      currentAnswer: TYPES.CURRENT_ANSWER,
      isTheLastMessage: TYPES.IS_CURRENT_MESSAGE_THE_LAST_ONE,
    }),
    ...mapState('suitability', {
      currentMessageIndex: state => state.currentMessageIndex,
      answersHistory: state => state.answersHistory,
      nameInitial: state => state.nameInitial,
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
    },
    answersHistory: {
      handler(answer) {
        if (answer) this.addAnswer();
      },
    },
  },
}
</script>
