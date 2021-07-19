<template>
  <div id="shopping-container">
    <div class="container">
        <div class="container-header">
          <h1>買い物リスト編集</h1>
        </div>
        <div class="item-form-wrapper">
          <p class="form-label">買うもの</p>
          <form>
            <input type="text" v-model="itemName">
            <input type="submit" @click="updateData" value="変更する"/>
          </form>
        </div>
      </div>
  </div>
</template>
<script>
import Methods from '../../api/methods'
export default {
  name: 'new',
  created () {
    this.getData()
  },
  data () {
    return {
      item: '',
      itemName: ''
    }
  },
  methods: {
    async getData () {
      let itemData = await Methods.getEditData(this.$route.params.id)
      this.itemName = itemData.data[0].name
    },
    async updateData () {
      await Methods.updateItem(this.itemName, this.$route.params.id)
      this.$router.push({ name: 'ItemsList' })
    }
  }
}
</script>
<style>
</style>
