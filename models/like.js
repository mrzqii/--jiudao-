import {
  HTTP
} from '../util/http.js'
class LikeModel extends HTTP {
  constructor() {
    super()
  }

  getClassicLikeStatus(cid, type, success) {
    var params = {
      url: 'classic/' + type + '/' + cid + '/favor',
      success: success
    }
    this.request(params)
  }

  getBookLikeStatus(bid, type, success) {
    var params = {
      url: 'book/' + type + '/' + bid + '/favor',
      success: success
    }
    this.request(params)
  }

  like(like_or_cancel, art_id, category) {
    let url = like_or_cancel === 'cancel' ? 'like/cancel' : 'like'
    this.request({
      url: url,
      method: 'POST',
      data: {
        art_id: art_id,
        type: category
      },
      success: (data) => {
        console.log(data)
      }
    })
  }
}

export {
  LikeModel
}