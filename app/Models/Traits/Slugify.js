'use strict'

const slugify = use('slugify')

class Slugify {
  register (Model) {

    Model.addHook('afterCreate', modeInstance => {


      if(modeInstance.title) {

        let slug = slugify(modeInstance.title, {
          lower: true
        })

        modeInstance.slug = `${slug}-${modeInstance.id}`
        modeInstance.save()
      }



    })

  }
}

module.exports = Slugify
