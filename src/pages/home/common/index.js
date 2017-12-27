// 公共组件引用入口

// iview 在低版本ie上会报一些错的兼容性填充
import './iview-polyfill'
// ivew的样式
import 'iview/dist/styles/iview.css'
// iview 样式重写
import './iview-rewrite.scss'
// 弹窗组件
import Modal from './modal'
// 分页组件
import Page from './page'
// 图片剪裁组件
import Cropper from './cropper'
// 日期组件
import DatePicker from './date-picker'
// 输入框组件
import Input from './input'
// 下拉列表组件
import Select from './select'
// 下拉列表组件
import Checkbox from './checkbox'
// 导出
export { Checkbox, Modal, Page, Cropper, DatePicker, Input, Select }
