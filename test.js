const myCanvas = document.getElementById("myCanvas")
const ctx = myCanvas.getContext("2d")
 /** @type {HTMLCanvasElement} */
//Dash Line
ctx.beginPath()
ctx.setLineDash([5,15])
ctx.moveTo(0,50)
ctx.lineTo(300,50)
ctx.stroke()

const canv = document.getElementById('canvas')
if(canv.getContext){
    const context = canv.getContext('2d')
    const grad = context.createLinearGradient(0,0,canv.clientWidth,canv.clientHeight)

    grad.addColorStop(0,'yellow')
    grad.addColorStop(0.5,'red')
    grad.addColorStop(1,'blue')

    context.fillStyle=grad
    context.fillRect(0,0,canv.width,canv.height)
}