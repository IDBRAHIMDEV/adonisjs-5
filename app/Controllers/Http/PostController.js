'use strict'

const { validateAll } = use('Validator');
const Post = use('App/Models/Post')

class PostController {

  create ({ view }) {
    return view.render('posts.create');
  }


  async store ({ request, response, session, auth }) {

    const rules = {
      title: 'required',
      tag: 'required',
      content: 'required|min:5'
    }

    const validation = await validateAll(request.all(), rules)

    if(validation.fails()) {

      session.withErrors(validation.messages())
             .flashAll()

      return response.redirect('back');
    }

    const {title, tag, content} = request.all()

    const post = new Post()

    post.fill({
      title,
      content,
      tag_id: tag,
      user_id: auth.user.id
    })

    await post.save()

    return response.route('home');
  }

}

module.exports = PostController
