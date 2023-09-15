

import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

export class ProfileService {
  async getProfileById(profileId) {


    const res = await api.get(`api/profiles/${profileId}`)

    logger.log('got the following profile:', res.data)

    //TODO: have to create a space for activeProfile in appstate
  }
}


export const profileService = new ProfileService()