import { logger } from "../utils/Logger.js"

class AdsService {
  async getAds() {
    logger.log('hello from ads service!')
  }
}


export const adsService = new AdsService
