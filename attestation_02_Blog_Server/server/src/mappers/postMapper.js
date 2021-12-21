class PostMapper {
  mapThirdPartyPostList(posts) {
    return {
      data: posts.data,
      page: posts.page + 1,
      total: posts.total,
      limit: posts.limit,
    }
  }
}

module.exports = new PostMapper();
