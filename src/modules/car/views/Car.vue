<template lang="pug">
  #car
    router-view
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

/**
 * Car module container.
 */
@Component
export default class Car extends Vue {}
</script>
