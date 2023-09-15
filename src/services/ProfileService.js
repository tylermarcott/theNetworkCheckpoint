

import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"
import { Profile } from "../models/Profile.js"
import { logger } from "../utils/Logger.js"

export class ProfileService {
  async getProfileById(profileId) {
    const res = await api.get(`api/profiles/${profileId}`)
    AppState.activeProfile = new Profile(res.data)
    logger.log('here is out active profile:', AppState.activeProfile)
  }
}


export const profileService = new ProfileService()