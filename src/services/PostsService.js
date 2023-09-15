

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

  async createPost(postData) {
    logger.log('creating post with the following data:', postData)
    const res = api.post('/api/posts', postData)

    logger.log('created a post with the following data:', res.data)
    AppState.posts.push(new Post(res.data))
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