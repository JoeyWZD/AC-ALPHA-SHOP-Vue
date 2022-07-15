<template>
  <div class="main__cost part" v-show="cost.isShow">
    <div class="main__cost__container">
      <div class="main__cost__container__title">付款資訊</div>
      <div class="main__cost__container__form">
        <div class="main__cost__container__form__cardName">
          <label for="">持卡人姓名</label>
          <input type="text" placeholder="John Doe" />
        </div>

        <div class="main__cost__container__form__cardNums">
          <label for="">卡號</label>
          <input type="text" placeholder="1111 2222 3333 4444" />
        </div>

        <div class="main__cost__container__form__cardYear">
          <label for="">有效期限</label>
          <input type="text" placeholder="MM/YY" />
        </div>

        <div class="main__cost__container__form__cardCode">
          <label for="">CVC/CCV</label>
          <input type="text" placeholder="123" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialCost: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      cost: this.initialCost,
    };
  },
};
</script>