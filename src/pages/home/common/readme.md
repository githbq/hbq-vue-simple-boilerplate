# 公共组件文件夹

## 包含一些 `iviewui` 的组件的二次封装 以及 `cropperjs`

## 使用方法

```js
import { Cropper , Page , Modal } from 'components/common'
```

## plugin用法

```js
// 页面的入口js  例如: /pages/resume/index.js
// 在Vue import 之后
Vue.use(require('components/common/plugin'))
//然后 你就可以在具体的组件实例的 methods 去调用 message notify loading-bar 具体见相关组件的 readme.md
```