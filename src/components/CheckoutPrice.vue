<template>
  <div class="main__basket__container__total">
    <div class="main__basket__container__total__ship">
      <div class="main__basket__container__total__ship__word">{{price.ship}}</div>
      <div class="main__basket__container__total__ship__price">{{price.shipPrice}}</div>
    </div>

    <div class="main__basket__container__total__note">
      <div class="main__basket__container__total__note__word">{{price.total}}</div>
      <div class="main__basket__container__total__note__price">${{price.totalPrice}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialPrice: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      price: this.initialPrice,
    };
  },
};
</script>