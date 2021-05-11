'use strict'

const Response = require('@adonisjs/framework/src/Response');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Guest {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response, auth }, next) {

    let authenticated = false;

    try {

      authenticated = await auth.check()

    } catch {
      authenticated = false
    }

    if(authenticated) {
      return response.route('home')
    }

    // call next to advance the request
    await next()
  }
}

module.exports = Guest
