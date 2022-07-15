<template>
  <div class="main__header">
    <div class="main__header__container">
      <div class="main__header__container__title">結帳</div>
      <div class="main__header__container__steps">
        <div
          class="main__header__container__steps__group"
          v-for="order in orders"
          :key="order.id"
        >
          <div
            class="main__header__container__steps__group__circle"
            :class="{
              checked: order.isChecked,
              active: order.isActive,
              FirstOrder: order.isFirstOrder,
            }"
            v-html="order.number"
          >
          </div>
          <span
            class="main__header__container__steps__group__line"
            :class="{ active: order.isActive }"
            v-show="order.showLine"
          ></span>
          <div class="main__header__container__steps__group__word">
            {{ order.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialOrders: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      orders: this.initialOrders,
    };
  },
};
</script>



<style scoped>
</style>