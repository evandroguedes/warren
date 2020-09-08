<template>
  <v-list-item dark>
    <v-list-item-avatar>
      <v-img :src="warrenAvatar"></v-img>
    </v-list-item-avatar>
    <v-list-item-content>
      <vue-typed-js
        :typeSpeed="typeSpeed"
        :smartBackspace="smartBackspace"
        :showCursor="showCursor"
        :strings="[message]"
        @onComplete="onComplete">
        <p class="typing"></p>
      </vue-typed-js>
    </v-list-item-content>
  </v-list-item>
</template>

<script>

export default {
  name: 'SuitabilityResponseTyperMolecule',
  data() {
    return {
      typeSpeed: 8,
      smartBackspace: false,
      warrenAvatar: 'logo.svg',
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
}
</script>
