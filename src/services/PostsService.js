

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

  //FIXME: why is this not reactive? look into this. I have to refresh to get my post to show up, but my delete doesn't need refresh
  async createPost(postData) {
    logger.log('creating post with the following data:', postData)
    const res = await api.post('/api/posts', postData)

    const newPost = new Post(res.data)

    AppState.posts.push(newPost)

    return newPost
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