import postsService from "../services/posts.service.js";

class PostsController {
  #service;

  constructor(service) {
    this.#service = service;
  }

  createPost = async (req, res) => {
    const { title, content, password } = req.body;
    const post = await this.#service.createPost({ title, content, password });
    return res.status(201).json({ data: post });
  };

  getPosts = async (req, res) => {
    const posts = await this.#service.getPosts();
    return res.status(200).json({ data: posts });
  };

  getPost = async (req, res) => {
    const { postId } = req.params;
    const posts = await this.#service.getPost(+postId);
    return res.status(200).json({ data: posts });
  };
}

export default new PostsController(postsService);
