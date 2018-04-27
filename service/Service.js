const Fetch = require('../service/Fetch')
const Api = require('../service/Api')

class Service {
  static getCases() {
    return Fetch.getLoading(Api.getCases).then((data) => {
      for (let index in data) {
        data[index] = {
          title: data[index].title.rendered,
          subTitle: data[index].excerpt.rendered.substring(data[index].excerpt.rendered.indexOf('<p>') + 3, data[index].excerpt.rendered.indexOf('</p>')) + '...',
          imageUrl: data[index]._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url,
          month: new Date(data[index].date).getMonth() + 1,
          day: new Date(data[index].date).getDate(),
          id: data[index].id,
          link: data[index].link
        }
      }
      return data
    })
  }

  static getCaseDetail(id) {
    return Fetch.getLoading(Api.getCaseDetail + id)
  }
}

module.exports = Service