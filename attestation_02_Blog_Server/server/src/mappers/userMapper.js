class UserMapper {
  mapThirdPartyUserToUser(user) {
    return {
      id: user.id,
      title: user.title,
      firstName: user.firstName,
      lastName: user.lastName,
      gender: user.gender,
      email: user.email,
      dateOfBirth: user.dateOfBirth,
      registerDate: user.registerDate,
      phone: user.phone,
      picture: user.picture,
    }
  }

  mapThirdPartyPostList(posts) {
    const postList = posts.data.map(post => ({
      id: post.id,
      image: post.image,
      text: post.text,
    }))

    return {
      data: postList,
      page: posts.page + 1,
      total: posts.total,
      limit: posts.limit,
    }
  }

  mapThirdPartyUserList(users) {
    return {
      data: users.data,
      page: users.page+1,
      total: users.total,
      limit: users.limit,
    }
  }
}

module.exports = new UserMapper()
