<template>
  <div class="index">
    <ul>
      <li>
        <router-link :to="{ name: 'Posts' }">Posts</router-link>
      </li>
    </ul>
    <div class="">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
