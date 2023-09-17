

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

  //FIXME: ok so post DOES work, it's just adding my post to the bottom of the page instead of the top. When I refresh the page, it comes back up to the top
  async createPost(postData) {
    logger.log('creating post with the following data:', postData)
    const res = await api.post('/api/posts', postData)

    const newPost = new Post(res.data)

    // NOTE: have to use unshift to add post to the beginning of the list, instead of push which adds it to the END. This make post reactive and adds it to the newest slot.
    AppState.posts.unshift(newPost)

    logger.log('this is our posts array after we push the new post:', AppState.posts)

    return newPost
  }

  async deletePost(postId) {
    const res = await api.delete(`api/posts/${postId}`)
    logger.log('deleted post with the following data:', res.data)

    let indexToRemove = AppState.posts.findIndex(post => post.id == postId)

    AppState.posts.splice(indexToRemove, 1)
  }

  async searchForPostByKeyword(userInput) {
    const keyword = userInput.body

    logger.log('searching for posts with the following keyword in them:', keyword)

    //NOTE: STOP FORGETTING YOUR AWAITS BROOOOOOOOOOOO

    const res = await api.get(`api/posts?body=${keyword}`)

    logger.log('found the following posts with our keyword in them:', res.data)

    AppState.posts = res.data.posts.map(post => new Post(post))
  }

  async changePage(pageUrl) {
    const res = await api.get(pageUrl)
    AppState.posts = res.data.posts.map(post => new Post(post))
    logger.log('here is our newer appstate.posts:', res.data.posts)
    AppState.nextUrl = res.data.older
    AppState.previousUrl = res.data.newer
  }

  // TODO: so from what I understand is we are creating a like, and this is linked to the post?
  // I think I have to create a model for my like, which will include id, name and picture
  async likePost(postId) {
    // const res = await api.post(`api/posts/${postId}/likes`,)


  }

}



export const postsService = new PostsService