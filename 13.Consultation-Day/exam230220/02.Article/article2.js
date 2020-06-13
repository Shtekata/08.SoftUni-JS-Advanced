class Article {
  #comments;
  #likes;

  constructor(title, creator) {
    this.title = title;
    this.creator = creator;

    this.#comments = [];
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
    if (id === undefined || this.#comments[id - 1] === undefined) {
      const newId = this.#comments.length + 1;
      this.#comments.push({
        id: newId,
        username,
        content,
        replies: [],
      });

      return `${username} commented on ${this.title}`;
    } else {
      const newId = this.#comments[id - 1].replies.length + 1;
      this.#comments[id - 1].replies.push({
        id: newId,
        username,
        content,
      });

      return `You replied successfully`;
    }
  }

  toString(sortingType) {
    const result = [
      `Title: ${this.title}`,
      `Creator: ${this.creator}`,
      `Likes: ${this.#likes.size}`,
      `Comments:`,
    ];

    if (sortingType == 'asc') {
      this.#comments.forEach((x, i) => {
        result.push(`-- ${i + 1}. ${x.username}: ${x.content}`);
        x.replies.forEach((y, z) => {
          result.push(`--- ${i + 1}.${z + 1}. ${y.username}: ${y.content}`);
        });
      });
    } else if (sortingType == 'desc') {
      for (let i = this.#comments.length - 1; i >= 0; i--) {
        const x = this.#comments[i];
        result.push(`-- ${i + 1}. ${x.username}: ${x.content}`);
        if (x.replies.length > 0) {
          for (let j = x.replies.length; j > 0; j--) {
            const y = x.replies[j - 1];
            result.push(`--- ${i + 1}.${j}. ${y.username}: ${y.content}`);
          }
        }
      }
    } else {
      const comments = this.#comments.slice();
      comments.sort(Article.comparator);

      comments.forEach((x) => {
        result.push(`-- ${x.id}. ${x.username}: ${x.content}`);
        const replies = x.replies.slice();
        replies.sort(Article.comparator);
        replies.forEach((y) => {
          result.push(`--- ${x.id}.${y.id}. ${y.username}: ${y.content}`);
        });
      });
    }
    return result.join('\n');
  }

  static comparator(x, y) {
    return x.username.localeCompare(y.username);
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
