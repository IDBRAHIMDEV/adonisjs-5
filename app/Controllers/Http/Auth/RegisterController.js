'use strict'

const { validateAll } = use('Validator');

class RegisterController {

  index ({ view }) {
    return view.render('auth/register')
  }

  async store ({ request, response, session, auth }) {

    const rules = {
      email: 'required|unique:users,email',
      username: 'required|unique:users,username',
      password: 'required|min:5',
    }

    const validation = await validateAll(request.all(), rules)

    if(validation.fails()) {

      session.withErrors(validation.messages())
             .flashAll()

      return response.redirect('back');
    }

    const User = use('App/Models/User');

    const {email, username, password} = request.all()

    const user = new User();

    // user.email = email;
    // user.username = username;
    // user.password = password;

    user.fill({
      email,
      username,
      password
    })

    await user.save();

    return response.route('home')

  }

}

module.exports = RegisterController
