<template>
  <div class="container">
      <div class="container-header">
        <h1>買い物リスト</h1>
        <router-link :to="{name: 'userPosts'}" class="new-button">ユーザーリスト</router-link>
        <router-link :to="{name: 'New'}" class="new-button">+ 新規登録</router-link>
      </div>
      <div class="index-table-wrapper">
        <div class="table-head">
          <span class="id-column">ID</span>
          <span>買うもの</span>
        </div>
        <ul class="table-body">
          <li v-for="item in items" :key="item.index">
            <div class="item-data">
              <span class="id-column">{{item.id}}</span>
              <span class="name-column">{{item.name}}</span>
            </div>
            <div class="item-menu">
              <form>
                <input type="submit" @click="deleteData(item.id)" value="削除"/>
              </form>
              <router-link :to="{name: 'Edit', params: {id: item.id}}">編集</router-link>
              </div>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
import Methods from '../../api/methods'
export default {
  name: 'itemsList',
  data () {
    return {
      items: ''
    }
  },
  created () {
    this.getData()
  },
  updated () {
    this.getData()
  },
  methods: {
    async getData () {
      let itemsData = await Methods.getItemsData()
      this.items = itemsData.data
    },
    async deleteData (itemId) {
      await Methods.deleteItem(itemId)
    }
  }
}
</script>
<style>
</style>
