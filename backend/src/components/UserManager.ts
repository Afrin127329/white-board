interface User {
  id: string;
  username: string;
  room: string;
  sender: string;
  reciever: string;
}

export class UserManager {
  private users: User[];
  constructor() {
    this.users = [];
  }

  // After the room is created
  createUser(
    id: string,
    username: string,
    room: string,
    sender: string,
    reciever: string
  ) {
    // a new user is created
    this.users.push({
      id,
      username,
      room,
      sender,
      reciever,
    });
  }
}
