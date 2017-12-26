# cropper 图片剪裁组件 powered by vue-cropperjs -> cropperjs
<https://www.npmjs.com/package/cropperjs>

## Props
- imgSrc:string
    - 远程图片url 或者  base64 字符串
- ref="cropper"
    - 可以通过 `ref` 的方式获取实例的引用 
    - 调用 `this.$refs.cropper.getImgBase64()` 获取当前的剪切区base64
- 更多参数看具体的代码

```html
<Cropper :imgSrc="imgSrc" ref="cropper"/>
 <input type="file" name="image" accept="image/*"
                    style="font-size: 1.2em; padding: 10px 0;"
                    @change="setImage"
                />
```

```js
{
  methods:{
    setImage(e) {
      let file
      //在IE9下 没有e.target.files属性,而是 e.target.value 属性直接拿到了本地真实文件路径字符串
      if (!e.target.files && e.target.value) {
        // 走上传逻辑
      } else {
        file = e.target.files[0];
        if (!file.type.includes('image/')) {
          alert('请选择图片文件')
          return;
        }
        if (typeof FileReader === 'function') {
          const reader = new FileReader()
          reader.onload = (event) => {
            this.imgSrc = event.target.result
            this.$refs.cropper.$on('on-img-load', (base64) => {
              // this.croppedSrc = base64
            })
          };

          reader.readAsDataURL(file)

        } else {
          console.error('Sorry, FileReader API not supported')
        }
      }
    },
    testRef() {
      //获取剪裁的结果base64
      this.croppedSrc = this.$refs.cropper.getImgBase64()
    },
  }
}
```