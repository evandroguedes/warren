<template>
  <vue-typed-js
    :typeSpeed="typeSpeed"
    :smartBackspace="smartBackspace"
    :showCursor="showCursor"
    :strings="[message]"
    @onComplete="onComplete"
    @onStop="onStop">
    <p class="typing"></p>
  </vue-typed-js>
</template>

<script>

export default {
  name: 'SuitabilityResponseTyperMolecule',
  data() {
    return {
      typeSpeed: 25,
      smartBackspace: false,
    }
  },
  props: {
    message: {
      type: String,
      required: true,
    },
    onComplete: {
      type: Function,
    },
    showCursor: {
      type: Boolean,
      required: false,
      default: true,
    }
  },
  methods: {
    onStop() {
      console.log('stopped');
    },
  }
}
</script>
