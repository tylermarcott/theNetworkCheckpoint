

import { api } from "./AxiosService.js"
import { logger } from "../utils/Logger.js"
import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"


class PostsService {

  async getPosts() {
    const res = await api.get('/api/posts')

    logger.log('here is our data before submitting to appstate. Trying to find pages:', res.data)

    //NOTE: make sure to check the path to our data. In this case, all the posts were an additional level deeper than normal.
    AppState.posts = res.data.posts.map(post => new Post(post))
    AppState.nextUrl = res.data.older
    AppState.previousUrl = res.data.newer
    logger.log('here is our data:', res.data.posts)
  }

  async changePage(pageUrl) {
    const res = await api.get(pageUrl)
    AppState.posts = res.data.posts
    logger.log('here is our newer appstate.posts:', res.data.posts)
    AppState.nextUrl = res.data.older
    AppState.previousUrl = res.data.newer
  }

}



export const postsService = new PostsService