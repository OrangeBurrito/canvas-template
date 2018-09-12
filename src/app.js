const c = console
c.clear()
console.log('hello')


const cnv = document.querySelector('#cnv')
const ctx = cnv.getContext('2d')

window.onload = start

function start() {
    ctx.fillStyle = '#ddd'
    ctx.fillRect(0, 0, 608, 680)

    drawImage('./images/1.png', 0, 0, 50, 50)
    
}

function drawImage(dataUrl, x, y, w, h) {
    const img = new Image()
    img.src = dataUrl
    img.onload = () => {
        ctx.drawImage(img, x, y, w, h)
    }