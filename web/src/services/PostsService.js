import Api from '@/services/Api'
import Vue from 'vue'

const TAG = 'Post'

export default {
  fetchPosts () {
    return Api().get('/posts')
      .catch((err) => {
        Vue.toasted.error(TAG + ' fetch failed: ' + err.response.data.message, {
          duration: 5000
        })
      })
  },

  createPost (params) {
    return Api().post('/posts', params)
      .then((res) => {
        Vue.toasted.success(TAG + ' created')
        return res
      })
      .catch((err) => {
        Vue.toasted.error(TAG + ' creation failed: ' + err.response.data.message, {
          duration: 5000
        })
      })
  },

  updatePost (params) {
    return Api().put('/posts/' + params.id, params)
      .then(() => {
        Vue.toasted.success(TAG + ' updated')
      })
      .catch((err) => {
        Vue.toasted.error(TAG + ' update failed: ' + err.response.data.message, {
          duration: 5000
        })
      })
  },

  getPost (id) {
    return Api().get('/posts/' + id)
      .catch((err) => {
        Vue.toasted.error(TAG + ' fetch failed: ' + err.response.data.message, {
          duration: 5000
        })
      })
  },

  deletePost (params) {
    return Api().delete('/posts/' + params.id)
      .then(() => {
        Vue.toasted.success(TAG + ' deleted')
      })
      .catch((err) => {
        Vue.toasted.error(TAG + ' deletion failed: ' + err.response.data.message, {
          duration: 5000
        })
      })
  }
}
