import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"
import { Ad } from "../models/Ad.js"

class AdsService {
  async getAds() {
    const res = await api.get('api/ads')

    AppState.ads = res.data.map(ad => new Ad(ad))

    logger.log('here is our ad array: ', AppState.ads)
  }
}


export const adsService = new AdsService
