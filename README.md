# perspective.ts


**perspective.ts** is a TypeScript library which allow you to transform a rectangle image into an arbitrary form of quadrilateral on a canvas element. It is used to draw an image using perspective on a canvas.

**perspective.ts** is a fork of [**perspective.js**](https://github.com/wanadev/perspective.js), which is itself a derivative work of the original [Futomi Hatano's **perspective.js**](http://www.html5.jp/test/perspective_canvas/demo1_en.html)


## Usage

```html
<script src="../dist/perspectivets.min.js"></script>
```

```js
var p = new Perspective(ctx, image);
p.draw({
  topLeftX: 30,
  topLeftY: 30,
  topRightX: 462,
  topRightY: 50,
  bottomRightX: 442,
  bottomRightY: 482,
  bottomLeftX: 10,
  bottomLeftY: 512,
});
```

### ES5 (also supports typescript)

```js
import Perspective from "perspectivets"

let p = new Perspective(ctx, img)
p.draw({
  topLeftX: 30,
  topLeftY: 30,
  topRightX: 462,
  topRightY: 50,
  bottomRightX: 442,
  bottomRightY: 482,
  bottomLeftX: 10,
  bottomLeftY: 512,
})
```

## Development

### Building

```
yarn build
```

### Testing

No automated tests. But you can manually test using the demo:

```
http-server
```

And then open http://localhost:8080/demo/ in your browser.

## License

    Copyright 2010 futomi  http://www.html5.jp/

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
