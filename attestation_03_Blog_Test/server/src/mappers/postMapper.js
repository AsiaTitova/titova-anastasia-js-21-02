class PostMapper {
  mapThirdPartyPostList(posts) {
    if (!posts) {
      return null;
    }
    return {
      data: posts.data,
      page: posts.page,
      total: posts.total,
      limit: posts.limit
    }
  }
}

module.exports = new PostMapper();
