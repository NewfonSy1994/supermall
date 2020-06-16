<template>
  <div class="cart">
    <Nav-bar>
      <template #center>
        <div class="navbar">购物车()</div>
      </template>
    </Nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Cart",
  components: {
    NavBar
  }
};
</script>

<style lang='less' scoped>
.cart {
  background-color: #e099a3;
  color: #fff;
}
</style>
