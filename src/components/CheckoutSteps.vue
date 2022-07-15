<template>
  <div class="main__step">
    <div class="main__step__container" >
      <button
        class="main__step__container__button"
        v-for="step in steps"
        :key="step.id"
        :class="{
          show: step.isFirstStep,
          w100: !step.isFirstStep,
          up: step.id === 0,
          down: step.id === 1,
        }"
        @click.stop.prevent="changeOrderButton(step.id)"
        v-html="step.name"
      >
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialSteps: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      steps: this.initialSteps,
    };
  },
  methods: {
    changeOrderButton(stepId){
      this.$emit('change-order-button', stepId)
    },
  },
};
</script>