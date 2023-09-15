


export class Post {
  constructor(data) {
    this.body = data.body
    this.imgUrl = data.imgUrl //|| 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'
    this.creatorId = data.creatorId
    this.likeIds = data.likeIds
    this.id = data.id
    this.createdAt = data.createdAt
    this.creator = data.creator
  }
}