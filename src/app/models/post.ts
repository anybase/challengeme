export class Post {
    id: number;
    content: string;
    createdDate: Date;
    ownerId: number;
    ownerName: string;
    ownerAvatar: string;
    challengeId: number;
    month: string;
    constructor(id, content,ownerAvatar, ownerId, ownerName, createdDate, challengeId) {
      this.id = id;
      this.content = content;
      this.createdDate = createdDate;
      this.ownerId = ownerId;
      this.ownerName = ownerName;
      this.challengeId = challengeId;
      this.ownerAvatar = ownerAvatar;
      this.month = this.createdDate != undefined? this.createdDate.toLocaleString("en-us", {month: "long"}):"";
    };
  }