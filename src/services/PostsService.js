

import { api } from "./AxiosService.js"
import { logger } from "../utils/Logger.js"
import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"


class PostsService {

  async getPosts() {
    const res = await api.get('/api/posts')

    //NOTE: make sure to check the path to our data. In this case, all the posts were an additional level deeper than normal.
    AppState.posts = res.data.posts.map(post => new Post(post))
    AppState.nextUrl = res.data.older
    AppState.previousUrl = res.data.newer
    logger.log('here is our data:', res.data.posts)
  }

  // TODO: start here
  // FIXME: need to fix error with create. It is giving me an error but still writing data to api. That means I am getting an error trying to put it back in my appstate. Also, I do not get my posts to  show up when I create them, have to manually refresh.
  async createPost(postData) {
    logger.log('creating post with the following data:', postData)
    const res = api.post('/api/posts', postData)

    logger.log('created a post with the following data:', res.data)

    logger.log('body here from data:', res.data.body)
    // AppState.posts.push(new Post(res))
  }

  async deletePost(postId) {
    const res = await api.delete(`api/posts/${postId}`)
    logger.log('deleted post with the following data:', res.data)

    let indexToRemove = AppState.posts.findIndex(post => post.id == postId)

    AppState.posts.splice(indexToRemove, 1)
  }

  async changePage(pageUrl) {
    const res = await api.get(pageUrl)
    AppState.posts = res.data.posts.map(post => new Post(post))
    logger.log('here is our newer appstate.posts:', res.data.posts)
    AppState.nextUrl = res.data.older
    AppState.previousUrl = res.data.newer
  }

}



export const postsService = new PostsService