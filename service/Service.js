const Fetch = require('../service/Fetch')
const Api = require('../service/Api')

class Service {
  static getCases() {
    return Fetch.getLoading(Api.getCases)
  }
}

module.exports = Service