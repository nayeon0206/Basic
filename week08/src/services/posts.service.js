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

  getPost = async (postId) => {
    return await this.#repository.getPostById(postId);
  };
}

export default new PostsService(postsRepository);
