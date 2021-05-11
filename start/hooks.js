
const { hooks } = require('@adonisjs/ignitor')
const pluralize = require('pluralize')

hooks.after.providersBooted(() => {

  const View = use('View')

  const Tag = use('App/Models/Tag')

  Tag.all()
     .then(tags => {
       View.global('tags', tags)
     })
     .catch(() => {})


     View.global('paginationArray', nbPage => {
       return Array.from(new Array(nbPage), (value, index) => index + 1)
     })

     View.global('pluralize', (singular, length) => {
      return pluralize(singular, length)
    })

})


