<template>
  <div class="main">
    <div class="main__container">
      <!-- 結帳區標題&步驟 -->
      <CheckoutHeader :initial-orders="orders" />

      <!-- 結帳區表單 -->
      <div class="main__wrap">
        <!-- 地址 -->
        <CheckoutFormsAddress :initial-address="address" />

        <!-- 計算運費 -->
        <CheckoutFormsShip
          :initial-ship="ship"
          :initial-shipways="shipways"
          @change-ship-way="changeShipWay"
        />

        <!-- 付款 -->
        <CheckoutFormsCost :initial-cost="cost" />
      </div>

      <div class="main__basket">
        <div class="main__basket__container">
          <div class="main__basket__container__header">購物籃</div>

          <!-- 結帳區商品 -->
          <CheckoutItems
            :initial-items="items"
            @add-item-count="addItemCount"
            @reduce-item-count="reduceItemCount"
          />

          <!-- 價格區 -->
          <CheckoutPrice :initial-price="price" />
        </div>
      </div>

      <!-- 結帳區步驟 -->
      <CheckoutSteps
        :initial-steps="steps"
        @change-order-button="handleChangeOrderButton"
      />
    </div>
  </div>
</template>

<script>
import CheckoutHeader from "./../components/CheckoutHeader.vue";
import CheckoutItems from "./../components/CheckoutItems.vue";
import CheckoutSteps from "../components/CheckoutSteps.vue";
import CheckoutFormsAddress from "./../components/CheckoutFormsAddress.vue";
import CheckoutFormsCost from "./../components/CheckoutFormsCost.vue";
import CheckoutFormsShip from "./../components/CheckoutFormsShip.vue";
import CheckoutPrice from "./../components/CheckoutPrice.vue";

// 假資料區
// 購物商品假資料

const dummyData = {
  nowPage: 0,

  orders: [
    {
      id: 0,
      name: "寄送地址",
      number: "1",
      isFirstOrder: true,
      showLine: false,
      isActive: true,
      isChecked: false,
    },
    {
      id: 1,
      name: "運送方式",
      number: "2",
      isFirstOrder: false,
      showLine: true,
      isActive: false,
      isChecked: false,
    },
    {
      id: 2,
      name: "付款設定",
      number: "3",
      isFirstOrder: false,
      showLine: true,
      isActive: false,
      isChecked: false,
    },
  ],
  items: [
    {
      id: 0,
      name: "破壞補丁修身牛仔褲",
      price: 3999,
      image: require("./../assets/img/paint.png"),
      count: 1,
    },
    {
      id: 1,
      name: "刷色直筒牛仔褲",
      price: 1299,
      image: require("./../assets/img/paint1.png"),
      count: 1,
    },
  ],
  address: {
    isShow: true,
  },
  ship: {
    isShow: false,
  },
  cost: {
    isShow: false,
  },

  shipways: [
    {
      id: 0,
      name: "標準運送",
      time: "約3到7個工作天",
      price: "免費",
      isActive: true,
    },
    {
      id: 1,
      name: "DHL運送",
      time: "48小時",
      price: 500,
      isActive: false,
    },
  ],

  steps: [
    {
      id: 0,
      name: "&larr;&emsp; 上一步",
      isFirstStep: true,
    },
    {
      id: 1,
      name: "下一步 &emsp;&rarr;",
      isFirstStep: false,
    },
  ],
  price: {
    ship: "運費",
    shipPrice: "免費",
    total: "小計",
    totalPrice: 0,
  },
};

export default {
  components: {
    CheckoutHeader,
    CheckoutItems,
    CheckoutSteps,
    CheckoutFormsAddress,
    CheckoutFormsCost,
    CheckoutFormsShip,
    CheckoutPrice,
  },

  data() {
    return {
      nowPage: 0,
      orders: [],
      items: [],
      address: {},
      ship: {},
      cost: {},
      steps: {},
      price: {},
      shipways: [],
    };
  },

  created() {
    this.fetchdata(), this.totalPrice();
  },

  methods: {
    fetchdata() {
      const { items, orders, address, ship, cost, steps, price, shipways } =
        dummyData;
      this.items = items;
      this.orders = orders;
      this.address = address;
      this.ship = ship;
      this.cost = cost;
      this.steps = steps;
      this.price = price;
      this.shipways = shipways;
    },
    // 總金額的計算函式
    totalPrice() {
      this.price.totalPrice =
        this.items[0].price * this.items[0].count +
        this.items[1].price * this.items[1].count +
        (Number(this.price.shipPrice) ? this.price.shipPrice : 0);
    },

    // 按鈕事件 stepID可以幫我知道按的是上一步還是下一步
    handleChangeOrderButton(stepId) {
      // 按下一步時
      if (stepId === 1 && 0 <= this.nowPage < 2) {
        if (this.nowPage === 0) {
          // 上方步驟區改變
          this.orders[0].isChecked = true;
          this.orders[0].number = "&radic;";
          this.orders[1].isActive = "true";

          // 按鈕改變
          this.steps[0].isFirstStep = false;

          // 表格區改變
          this.address.isShow = false;
          this.ship.isShow = true;

          this.nowPage++;
        } else if (this.nowPage === 1) {
          this.orders[1].isChecked = true;
          this.orders[1].number = "&radic;";
          this.orders[2].isActive = "true";

          // 下一步按鈕改變完成下單
          this.steps[1].name = "完成下單";

          // 表格區改變
          this.ship.isShow = false;
          this.cost.isShow = true;
          this.nowPage++;
        }
      }
      // 按上一步時
      if (stepId === 0) {
        if (this.nowPage === 1) {
          this.orders[0].number = "1";
          this.orders[1].isActive = false;
          // 更改按鈕樣式
          this.steps[0].isFirstStep = true;

          // 表格區改變
          this.ship.isShow = false;
          this.address.isShow = true;

          this.nowPage--;
        } else if (this.nowPage === 2) {
          // 更改按鈕樣式
          this.orders[1].number = "2";
          this.orders[1].isChecked = false;
          this.orders[2].isActive = false;
          this.steps[1].name = "下一步 &emsp;&rarr;";

          // 表格區改變
          this.ship.isShow = true;
          this.cost.isShow = false;
          this.nowPage--;
        }
      }
    },

    // 判斷選哪一個運費方式
    changeShipWay(shipwayId) {
      if (shipwayId === 0) {
        this.shipways[0].isActive = true;
        this.shipways[1].isActive = false;
        this.price.shipPrice = this.shipways[shipwayId].price;
        this.totalPrice();
      } else {
        this.shipways[0].isActive = false;
        this.shipways[1].isActive = true;
        this.price.shipPrice = this.shipways[shipwayId].price;
        this.totalPrice();
      }
    },

    // 改變商品數量
    addItemCount(itemId) {
      this.items[itemId].count++;
      this.totalPrice();
    },
    reduceItemCount(itemId) {
      if (this.items[itemId].count > 0) {
        this.items[itemId].count--;
      }
      this.totalPrice();
    },
  },
};
</script>

<style lang="scss">
@import "/src/assets/style.scss";
</style>


