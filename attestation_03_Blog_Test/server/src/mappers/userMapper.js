class UserMapper {
  mapThirdPartyUserToUserShort(user) {
    if (!user) {
      return null;
    }
    return {
      id: user.id,
      picture: user.picture,
      firstName: user.firstName,
    }
  }

  mapThirdPartyUserToUser(user) {
    if (!user) {
      return null;
    }
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
    if (!posts) {
      return null;
    }
    const postList = posts.data.map(post => ({
      id: post.id,
      image: post.image,
      text: post.text,
    }))
    return {
      data: postList,
      page: posts.page,
      total: posts.total,
      limit: posts.limit
    }
  }

  mapThirdPartyUserList(users) {
    if (!users) {
      return null;
    }
    return {
      data: users.data,
      page: users.page,
      total: users.total,
      limit: users.limit
    }
  }
}

module.exports = new UserMapper()
