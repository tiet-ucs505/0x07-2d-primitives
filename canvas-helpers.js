// let getDom = (...args) => (document.querySelector(...args))
const getDom = document.querySelector.bind(document)

function canvasReset(sel) {
  const canvas = getDom(sel)

  // Get Dom Sizes
  const {bb:{width: W, height: H}} = getCanvas(sel)

  // Reset Canvas Sizes
  canvas.width = parseFloat(W)
  canvas.height = parseFloat(H)
}

function getCanvas(sel, context='2d') {
  const canvas = getDom(sel)
  return {
    canvas,
    ctx: canvas.getContext(context),
    bb: canvas.getBoundingClientRect()
  }
}
