

export class Profile {
  constructor(data) {
    this.bio = data.bio || 'None'
    this.coverImg = data.coverImg
    this.gitHub = data.gitHub || 'None'
    this.graduated = data.graduated
    this.linkedin = data.linkedin || 'None'
    this.resume = data.resume || 'None'
    this.picture = data.picture
    this.id = data.id
    this.class = data.class || 'None'
    this.name = data.name
  }
}