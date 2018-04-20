<template>
  <div class="posts">
    <h1>Edit Post</h1>
      <div class="form">
        <div class="">
          <a href="#" @click.prevent="deletePost()">Delete</a>
        </div>
        <div>
          <input class="wide-input" type="text" name="title" placeholder="TITLE" v-model="title">
        </div>
        <div>
          <textarea name="body" rows="8" cols="80" v-model="body" placeholder="BODY"></textarea>
        </div>
        <div>
          <button v-if="!updating" class="btn" @click="updatePost">
            <span >Update Post</span>
          </button>
          <pulse-loader v-else />
        </div>
      </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  name: 'EditPost',
  components: {
    PulseLoader
  },
  data () {
    return {
      title: '',
      body: '',
      updating: false
    }
  },
  mounted () {
    this.getPost()
  },
  methods: {
    getPost () {
      return PostsService.getPost(this.$route.params.postId).then(response => {
        this.title = response.data.title
        this.body = response.data.body
      })
    },
    deletePost () {
      if (confirm('Delete Post?')) {
        PostsService.deletePost({
          id: this.$route.params.postId
        }).then(() => {
          this.$emit('deleted', 'post')
          this.$router.push({
            name: 'Posts'
          })
        })
      }
    },
    updatePost () {
      this.updating = true
      return PostsService.updatePost({
        id: this.$route.params.postId,
        title: this.title,
        body: this.body
      }).then(response => {
        this.updating = false
        this.$emit('updated', 'post')
      })
    }
  },
  watch: {
    '$route.params.postId': function (postId) {
      this.getPost()
    }
  }
}
</script>
<style type="text/css">
</style>
