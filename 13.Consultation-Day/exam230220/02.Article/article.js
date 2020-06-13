class Article {
  #comments;
  #likes;

  constructor(title, creator) {
    this.title = title;
    this.creator = creator;

    this.#comments = {};
    this.#likes = new Set();
  }

  get likes() {
    if (this.#likes.size === 0) {
      return `${this.title} has 0 likes`;
    } else if (this.#likes.size === 1) {
      return `${[...this.#likes][0]} likes this article!`;
    } else {
      return `${[...this.#likes][0]} and ${
        this.#likes.size - 1
      } others like this article!`;
    }
  }

  like(username) {
    if (this.#likes.has(username)) {
      throw new Error(`You can't like the same article twice!`);
    } else if (this.creator === username) {
      throw new Error(`You can't like your own articles!`);
    } else {
      this.#likes.add(username);
      return `${username} liked ${this.title}!`;
    }
  }

  dislike(username) {
    if (this.#likes.has(username)) {
      this.#likes.delete(username);
      return `${username} disliked ${this.title}`;
    } else {
      throw new Error(`You can't dislike this article!`);
    }
  }

  comment(username, content, id) {
    if (id === undefined || this.#comments[id] === undefined) {
      const newId = Object.keys(this.#comments) + 1;
      this.#comments[newId] = {
        id: newId,
        username,
        content,
        repliles: {},
      };

      return `${username} commented on ${this.title}`;
    } else {
      const newId = `${id}.${
        Object.keys(this.#comments[id].repliles).length + 1
      }`;
      this.#comments[id].repliles[newId] = {
        id: newId,
        username,
        content,
      };

      return `You replied successfully`;
    }
  }

    toString(sortingType) {
        const result = [
            `Title: ${this.title}`,
            `Creator: ${this.creator}`,
            `Likes: ${this.#likes.size}`,
        ];

        if (sortingType == 'asc') {
            Object.keys(this.#comments).sort();
        } else if (sortingType == 'desc') {
            
        } else {
            
        }
  }
}

let art = new Article('My Article', 'Anny');
art.like('John');
console.log(art.likes);
art.dislike('John');
console.log(art.likes);
art.comment('Sammy', 'Some Content');
console.log(art.comment('Ammy', 'New Content'));
art.comment('Zane', 'Reply', 1);
art.comment('Jessy', 'Nice :)');
console.log(art.comment('SAmmy', 'Reply@', 1));
console.log();
console.log(art.toString('username'));
console.log();
art.like('Zane');
console.log(art.toString('desc'));