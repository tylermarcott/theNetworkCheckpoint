

import { api } from "./AxiosService.js"
import { logger } from "../utils/Logger.js"
import { AppState } from "../AppState.js"
import { Post } from "../models/Post.js"


class PostsService {

  async getPosts() {
    const res = await api.get('/api/posts')
    logger.log('here is our posts!', res.data)

    //NOTE: make sure to check the path to our data. In this case, all the posts were an additional level deeper than normal.
    AppState.posts = res.data.posts.map(post => new Post(post))

    logger.log('posts in our appstate:', AppState.posts)
  }


}



export const postsService = new PostsService