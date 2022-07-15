<template>
  <div class="main__address part" v-show="address.isShow">
    <div class="main__address__container">
      <div class="main__address__container__title">寄送地址</div>
      <div class="main__address__container__form">
        <div class="main__address__container__form__gender">
          <label>稱謂</label>
          <div class="main__address__container__form__gender__wrap">
            <select name="a-type" id="a-type">
              <option value="male">先生</option>
              <option value="female">小姐</option>
            </select>
          </div>
        </div>

        <div class="main__address__container__form__name">
          <label for="">姓名</label>
          <input type="text" placeholder="請輸入姓名" />
        </div>

        <div class="main__address__container__form__phone">
          <label for="">電話</label>
          <input type="text" placeholder="請輸入行動電話" />
        </div>

        <div class="main__address__container__form__email">
          <label for="">Email</label>
          <input type="text" placeholder="請輸入電子郵件" />
        </div>

        <div class="main__address__container__form__country">
          <label>縣市</label>
          <div class="main__address__container__form__country__wrap">
            <select name="a-type" id="a-type">
              <option value="">請選擇縣市</option>
              <option value="male">台北市</option>
              <option value="female">新北市</option>
            </select>
          </div>
        </div>

        <div class="main__address__container__form__address">
          <label for="">地址</label>
          <input type="text" placeholder="請輸入地址" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialAddress: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      address: this.initialAddress,
    };
  },
};
</script>