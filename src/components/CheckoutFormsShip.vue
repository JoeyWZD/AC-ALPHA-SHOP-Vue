<template>
  <div class="main__ship part" v-show="ship.isShow">
    <div class="main__ship__container">
      <div class="main__ship__container__title">運送方式</div>
      <div class="main__ship__container__group" >
        <div
          class="main__ship__container__group__items free"
          v-for="shipway in shipways"
          :key="shipway.id"
          :class="{checked:shipway.isActive}"
          @click.stop.prevent="changeShipWay(shipway.id)"
        >
          <input
            name="normal__ship"
            type="radio"
            value="normal__ship"
            class="free-radio free"
            :class="{checked:shipway.isActive}"
          />
          <div class="main__ship__container__group__items__words free">
            <h5>{{ shipway.name }}</h5>
            <p>{{ shipway.time }}</p>
          </div>
          <div class="main__ship__container__group__items__price free-price">
            {{ shipway.price }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialShip: {
      type: Object,
      require: true,
    },
    initialShipways: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      ship: this.initialShip,
      shipways: this.initialShipways      
    };
  },
  methods:{
    changeShipWay(shipwayId){
      this.$emit('change-ship-way', shipwayId)
    }
  }
};
</script>

<style scoped>
.main__ship__container__group__items:hover {
  border: 1px solid #202020;
}
</style>