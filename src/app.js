const c = console
c.clear()
console.log('hello')


const cnv = document.querySelector('#cnv')
const ctx = cnv.getContext('2d')

ctx.fillStyle = '#ddd'
ctx.fillRect(0, 0, 608, 680)

// draimagec
const img = document.getElementById('img1')
ctx.drawImage(img, 10, 10, 200, 100)
