'use strict'

const Post = use('App/Models/Post')

class HomeController {

  async index ({ view, request }) {

    const posts = await Post.query()
                            .forRetreivePosts()
                            .paginate(request.input('page'), 2)


    return view.render('posts/index', {
      posts
    })
  }

  async own ({ view, request, auth }) {

    const posts = await Post.query()
                          .forRetreivePosts()
                          .where('user_id', '=', auth.user.id)
                          .paginate(request.input('page'), 2)


    return view.render('posts/index', {
     posts
    })
  }

  async unanswered ({ view, request }) {

    const posts = await Post.query()
                            .forRetreivePosts()
                            .doesntHave('replies')
                            .paginate(request.input('page'), 2)


      return view.render('posts/index', {
        posts
      })
  }

  async show ({ view, params }) {

    const post = await Post.query()
                     .forRetreivePosts()
                     .with('replies.user')
                     .where('slug', '=', params.slug)
                     .firstOrFail()

    return view.render('posts/show', {
      post: post.toJSON()
    })

  }

  async postsByTag ({ view, params }) {

    const posts = await Post.query()
    .with('tag')
    .with('user')
    .whereHas('tag', query => {
      query.where('slug', '=', params.slug)
    })
    .whereNull('parent_id')
    .fetch()


    return view.render('posts/index', {
    posts
    })
  }

}

module.exports = HomeController
