<template>
  <div class="posts">
    <div class="col-50">
      <h1>Posts</h1>
      <div class="">
        <router-link :to="{ name: 'CreatePost'}">Create post</router-link>
      </div>
      <div class="table-wrap">
        <table>
          <tr>
            <td width="100" align="center">Action</td>
            <td width="100">Title</td>
          </tr>
          <tr v-for="post in posts" :class="trClass(post._id)" v-bind:key="'post-' + post._id">
            <td align="center">
              <router-link v-bind:to="{ name: 'EditPost', params: { postId: post._id } }">Edit</router-link> |
              <a href="#" @click="deletePost(post._id)">Delete</a>
            </td>
            <td>{{ post.title }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="col-50">
      <router-view v-on:created="onCreated"></router-view>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'posts',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    getPosts () {
      return PostsService.fetchPosts(this.$route.params.mapId).then(response => {
        this.posts = response.data
      })
    },
    deletePost (id) {
      return PostsService.deletePost({ mapId: this.$route.params.mapId, id }).then(response => {
        return this.getPosts()
      })
    },
    onCreated () {
      this.getPosts()
    },
    trClass (id) {
      return {
        selected: this.$route.params.postId === id
      }
    }
  }
}
</script>
<style type="text/css">
  tr.selected {
    background: #2d51ab !important;
    color: white !important;
  }
  tr.selected * {
    color: white !important;
  }
</style>
