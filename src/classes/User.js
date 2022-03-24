class User {
  constructor(fullname, position, photo, testimonial) {
    this.fullname = fullname;
    this.position = position;
    this.photo = photo;
    this.testimonial = testimonial;
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
