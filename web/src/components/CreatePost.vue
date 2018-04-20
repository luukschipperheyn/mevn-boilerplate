<template>
  <div class="posts">
    <h1>New Post</h1>
      <div class="form">
        <div>
          <input class="wide-input" type="text" name="title" placeholder="TITLE" v-model="title">
        </div>
        <div>
          <textarea name="body" rows="8" cols="80" v-model="body" placeholder="BODY"></textarea>
        </div>
        <div>
          <button v-if="!updating" class="btn" @click="createPost">
            <span >Create Post</span>
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
  name: 'NewPost',
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
  },
  methods: {
    createPost () {
      this.updating = true
      return PostsService.createPost({
        title: this.title,
        body: this.body
      }).then(response => {
        this.updating = false
        this.$emit('created', 'post')
        this.$router.push({
          name: 'EditPost',
          params: {
            postId: response.data._id
          }
        })
      })
    }
  }
}
</script>
<style type="text/css">
</style>
