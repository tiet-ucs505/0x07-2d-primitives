// let getDom = (...args) => (document.querySelector(...args))
const getDom = document.querySelector.bind(document)

function canvasReset(sel) {
  const canvas = getDom(sel)

  // Let the page reset as per Flex's and Floats
  canvas.width = 5
  canvas.height = 1

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
