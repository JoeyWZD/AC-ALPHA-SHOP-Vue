<template>
  <div>
    <div
      class="main__basket__container__item"
      v-for="item in items"
      :key="item.id"
    >
      <div>
        <img
          class="main__basket__container__item__img"
          :src="item.image"
          alt=""
        />
      </div>
      <div class="main__basket__container__item__info">
        <div class="main__basket__container__item__info__title">
          {{ item.name }}
        </div>
        <div class="main__basket__container__item__info__count">
          <button
            class="main__basket__container__item__info__count__addBtn add"
            @click.stop.prevent="addCount(item.id)"
          >
            +
          </button>
          <div class="main__basket__container__item__info__count__num">
            {{ item.count }}
          </div>
          <button
            class="main__basket__container__item__info__count__reduceBtn reduce"
            @click.stop.prevent="reduceCount(item.id)"
          >
            -
          </button>
        </div>
        <div class="main__basket__container__item__info__price">
          ${{ item.price }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialItems: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      items: this.initialItems,
    };
  },
  methods: {
    addCount(itemId){
      this.$emit('add-item-count', itemId)
    },
    reduceCount(itemId){
      this.$emit('reduce-item-count', itemId)
    }
  }
};
</script>