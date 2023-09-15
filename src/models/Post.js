


export class Post {
  constructor(data) {
    this.body = data.body
    this.img = data.imgUrl
    this.creatorId = data.creatorId
    this.likeIds = data.likeIds
    this.id = data.id
    this.createdAt = data.createdAt
    this.creator = data.creator
  }
}