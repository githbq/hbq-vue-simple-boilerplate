
import LoadingBar from './loading-bar'
import Message from './message'
import Notice from './notice'

export const install = function (Vue, opts = {}) {
  Vue.prototype.$Loading = LoadingBar
  Vue.prototype.$Message = Message
  Vue.prototype.$Notice = Notice
}
