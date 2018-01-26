# 文件上传 兼容IE9及以上 power by vue-upload-component
- <https://www.npmjs.com/package/vue-upload-component>
- <https://lian-yue.github.io/vue-upload-component/#/zh-cn/documents>

### 操作上传
```html
<template>
  <div id="root" class="zp">
    <Upload 
    ref="fileUploader"
    name="content"
    v-model="files"
    post-action="http://i.zhaopin.com/resume/uploadextend/uploadimage?at=eab321ec0dc94b48b106a5bb0a16d527&rt=98a739be827647b2bdd7ad54d4a83505&filetype=1" 
    @input-file="inputFile"
  >
  <div style="border:2px solid red; paddding:10px;">点此上传文件</div>
  </Upload>
  <button @click="startUpload">开始上传</button>
  </div>
</template>
```
```js
import { Upload } from 'components/common'
export default {
  components: {
    Upload
  },
  data () {
    return {
      files: []
    }
  },
  methods: {
    startUpload () {
      this.$refs.fileUploader.upload()
    },
    inputFile (e) {
    }
  }
};
```

### 方法
#### 调用此方法上传`this.$refs.upload.upload()`
#### 调用此方法停止上传`this.$refs.upload.stopUpload()`

### `input-file` 事件用法
```js
 inputFile(newFile, oldFile) {
      if (newFile && !oldFile) {
        // 添加文件
      }

      if (newFile && oldFile) {
        // 更新文件

        // 开始上传
        if (newFile.active !== oldFile.active) {
          console.log('Start upload', newFile.active, newFile)

          // 限定最小字节
          if (newFile.size >= 0 && newFile.size < 100 * 1024) {
            newFile = this.$refs.upload.update(newFile, {error: 'size'})
          }
        }

        // 上传进度
        if (newFile.progress !== oldFile.progress) {
          console.log('progress', newFile.progress, newFile)
        }

        // 上传错误
        if (newFile.error !== oldFile.error) {
          console.log('error', newFile.error, newFile)
        }

        // 上传成功
        if (newFile.success !== oldFile.success) {
          console.log('success', newFile.success, newFile)
        }
      }

      if (!newFile && oldFile) {
        // 删除文件

        // 自动删除 服务器上的文件
        if (oldFile.success && oldFile.response.id) {
          // $.ajax({
          //   type: 'DELETE',
          //   url: '/file/delete?id=' + oldFile.response.id,
          // });
        }
      }

      // 自动上传
      if (Boolean(newFile) !== Boolean(oldFile) || oldFile.error !== newFile.error) {
        if (!this.$refs.upload.active) {
          this.$refs.upload.active = true
        }
      }
    }
  }
```