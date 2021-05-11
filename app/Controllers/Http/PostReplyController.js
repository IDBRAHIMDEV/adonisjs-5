'use strict'
const { validateAll } = use('Validator');
const Post = use('App/Models/Post')

class PostReplyController {

   async store ({ request, response, session, auth, params }) {

    const post = await Post.query()
                          .where('slug', '=', params.slug)
                          .firstOrFail()

    const rules = {
      content: 'required|min:5'
    }

    const validation = await validateAll(request.all(), rules)

    if(validation.fails()) {

      session.withErrors(validation.messages())
             .flashAll()

      return response.redirect('back');
    }

    const {content} = request.all()

    const reply = new Post()

    reply.fill({
      content,
      parent_id: post.id,
      user_id: auth.user.id
    })

    await reply.save()

    return response.redirect('back');
   }
}

module.exports = PostReplyController
