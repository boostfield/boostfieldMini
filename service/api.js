const host = 'https://www.boostfield.com'

let Api = {
  'getCases': host + '/wp-json/wp/v2/posts?_embed&categories=18',
  'getCaseDetail': host + '/wp-json/wp/v2/posts/'
}

module.exports = Api