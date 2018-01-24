// 公共组件引用入口 iview 在低版本ie上会报一些错的兼容性填充
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
import CheckboxGroup from './checkbox/group'
// 单选组件
import Radio from './radio'
import RadioGroup from './radio/group'
// 下拉级联组件
import Cascader from './cascader'
// 下拉弹层组件
import Dropdown from './dropdown'
// 自动完成
import AutoComplete from './auto-complete'
// 下拉列表级联
import SelectCascader from './select-cascader'
// 上传
import Upload from './upload'
// 圆环
import Circle from './circle'
// 星星评分组件
import Rate from './rate'
// 走马灯 || 轮播图组件
import Carousel from './carousel'
// 导出
export {
  Carousel,
  Rate,
  Circle,
  Upload,
  AutoComplete,
  SelectCascader,
  Dropdown,
  Radio,
  RadioGroup,
  Cascader,
  Checkbox,
  CheckboxGroup,
  Modal,
  Page,
  Cropper,
  DatePicker,
  Input,
  Select
}
