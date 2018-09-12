# my html canvas boilerplate

I keep forgetting the the arcana of creating a webpage and rendering to the' HTML5 canvas.

## The canvas and context 

```javascript
const cnv = document.getElementById('your canvas id')
const ctx = cnv.getContext('2d')
```

## Images 

```javascript
const img = new Image()
img.src = 'http://you image url'
img.onload = function() {
    ctx.drawImage(img, x, y, w, h)
}˝˝˝
```

