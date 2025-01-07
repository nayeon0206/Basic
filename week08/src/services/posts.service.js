import postsRepository from "../repositories/posts.repository.js";

class PostsService {
  #repository;

  constructor(repository) {
    this.#repository = repository;
  }

  createPost = async (postData) => {
    return await this.#repository.createPost(postData);
  };

  getPosts = async () => {
    return await this.#repository.getAllPosts();
  };
}

export default new PostsService(postsRepository);
