class User {
  constructor(fullname, position, photo) {
    this.fullname = fullname;
    this.position = position;
    this.photo = photo;
  }

  getFullname() {
    return this.fullname;
  }

  setFullname(fullname) {
    this.fullname = fullname;
  }

  getPosition() {
    return this.position;
  }

  setPosition(position) {
    this.position = position;
  }
}

export default User;
