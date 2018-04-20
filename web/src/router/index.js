import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Posts from '@/components/Posts'
import CreatePost from '@/components/CreatePost'
import EditPost from '@/components/EditPost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/posts',
          name: 'Posts',
          component: Posts,
          children: [
            {
              path: ':postId',
              name: 'EditPost',
              component: EditPost
            },
            {
              path: 'create',
              name: 'CreatePost',
              component: CreatePost
            }
          ]
        }
      ]
    }
  ]
})
