# zpfe 走马灯 || 轮播图组件 powered by iview.carousel
<https://www.iviewui.com/components/carousel>

```html
 <Carousel autoplay v-model="carouselValue" loop>
        <CarouselItem>
            <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">4</div>
        </CarouselItem>
    </Carousel>
```
```js
import { Carousel, CarouselItem } from 'components/common/carousel'

data:{
    carouselValue:2
}
```