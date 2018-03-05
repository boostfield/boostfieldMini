const Fetch = require('../service/Fetch')
const Api = require('../service/Api')

class Service {
  static getCases() {
    return Fetch.getLoading(Api.getCases)
  }

  static getCaseDetail(id) {
    return Fetch.getLoading(Api.getCaseDetail + id)
  }
}

module.exports = Service