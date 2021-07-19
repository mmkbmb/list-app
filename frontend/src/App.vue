<template>
  <div id="app">
    <header>
      <a href="/" class="header-logo">買い物アプリ</a>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "./css/style.css";
</style>
