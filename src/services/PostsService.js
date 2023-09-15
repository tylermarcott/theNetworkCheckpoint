

import { api } from "./AxiosService.js"
import { logger } from "../utils/Logger.js"


class PostsService {

  async getPosts() {
    const res = await api.get('/api/posts')
    logger.log('here is our posts!', res.data)

    // TODO: now I have to create a spot in my appstate to put the posts!
  }


}



export const postsService = new PostsService