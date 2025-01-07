import { prisma } from "../prisma/prisma.js";

class PostRepository {
  //# orm 을 class 밖에서 함부로 호출할 수 없다.
  #orm;

  constructor(orm) {
    this.#orm = orm;
  }

  createPost = async ({ title, content, password }) => {
    return await this.#orm.posts.create({
      data: { title, content, password },
    });
  };

  getAllPosts = async () => {
    return await this.#orm.posts.findMany();
  };

  getPostById = async (postId) => {
    return await this.#orm.posts.findUnique({ where: { postId } });
  };
}

export default new PostRepository(prisma);
