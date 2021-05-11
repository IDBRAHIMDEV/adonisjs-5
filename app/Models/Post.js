'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Post extends Model {

  static boot () {
    super.boot()

    this.addTrait('Slugify')
  }

  static scopeForRetreivePosts (builder) {

     return builder
              .with('tag')
              .with('user')
              .with('replies')
              .whereNull('parent_id')
  }

  static castDates (field, value) {

       if(['created_at', 'updated_at'].includes(field)) {
           return `${ value.fromNow(true) } ago`
       }
  }

  tag () {
    return this.belongsTo('App/Models/Tag')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }

  replies () {
    return this.hasMany('App/Models/Post', 'id', 'parent_id').orderBy('created_at', 'desc')
  }

}

module.exports = Post
