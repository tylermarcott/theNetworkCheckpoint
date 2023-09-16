

import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"
import { Profile } from "../models/Profile.js"
import { logger } from "../utils/Logger.js"
import { Post } from "../models/Post.js"

export class ProfileService {
  async getProfileById(profileId) {
    const res = await api.get(`api/profiles/${profileId}`)
    AppState.activeProfile = new Profile(res.data)
    logger.log('here is out active profile:', AppState.activeProfile)
  }

  async getPostsById(profileId) {
    const res = await api.get(`api/posts?creatorId=${profileId}`)

    logger.log('got the following posts for the profile:', res.data)

    AppState.posts = res.data.posts.map(post => new Post(post))
  }

}


export const profileService = new ProfileService()