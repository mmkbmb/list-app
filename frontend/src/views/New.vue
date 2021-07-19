<template>
  <div id="shopping-container">
    <div class="container">
        <div class="container-header">
          <h1>買い物リスト作成</h1>
        </div>
        <div class="item-form-wrapper">
          <p class="form-label">買うもの</p>
          <form>
            <input type="text" v-model="itemName">
            <input type="submit" @click="createData" value="作成する"/>
          </form>
        </div>
      </div>
  </div>
</template>
<script>
import Methods from '../../api/methods'
export default {
  name: 'new',
  data () {
    return {
      itemName: ''
    }
  },
  methods: {
    async createData () {
      await Methods.createItem(this.itemName, this.$router)
      this.$router.push({ name: 'ItemsList' })
    }
  }
}
</script>
<style>
</style>
