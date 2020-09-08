<template>
  <v-list-item dark>
    <v-list-item-content>
      <span class="text-right text-h6">{{ message }}</span>
    </v-list-item-content>
    <v-list-item-avatar>
      <v-avatar color="black" size="36">
        <span class="white--text text-subtitle-2">{{ nameInitial }}</span>
      </v-avatar>
    </v-list-item-avatar>
  </v-list-item>
</template>

<script>
export default {
  name: 'SuitabilityAnswerMolecule',
  data() {
    return {
      typeSpeed: 0,
      smartBackspace: false,
    }
  },
  props: {
    message: {
      type: [String, Number],
      required: true,
    },
    nameInitial: {
      type: [String, Number],
      required: true,
    },
  },
}
</script>
