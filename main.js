// Switcher State
// ----------------------------------------------------
let visible = 'Canvas'	// or 'refimg'
let invisible = 'Refimg'
const canvasSel = '#myCanvas'
const refimgSel = '#refImg'
const sels = {
  Canvas: canvasSel,
  Refimg: refimgSel,
}
const icons = {
  Canvas: 'wallet',
  Refimg: 'image',
}
const saveFunctions = {
  Canvas : saveCanvas,
  Refimg : saveRefimg,
}


function main() {
  const experiment = new Experiment()

  // Update Candidate Details
  updateCandidateDetails(Experiment)

  // Set up refimg
  setupRefimg()

  // Set up canvas
  flipVisible('Canvas')

  // --------------------------------------------------
  // Canvas Setup
  // --------------------------------------------------
  canvasReset(canvasSel)
  const {canvas, ctx, bb} = getCanvas(canvasSel)


  // --------------------------------------------------
  // Geometry
  // --------------------------------------------------
  const path = Experiment.createGeometry()

  // --------------------------------------------------
  // Transform
  // --------------------------------------------------
  // The scale rotate and translate transformations
  // have been computed as a combined matrix, before
  // being initialised here.
  const transform = Experiment.getBaseTransform()

  // --------------------------------------------------
  // Render Styles
  // --------------------------------------------------
  const styles = Experiment.getBaseStyles()

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  // Apply transform to path
  const pathToDraw = new Path2D()
  pathToDraw.addPath(path, transform)
  
  ctx.fillStyle = styles.fill.c
  ctx.fill(pathToDraw, styles.fill.r)

  ctx.lineWidth = styles.stroke.w
  ctx.strokeStyle = styles.stroke.c
  ctx.stroke(pathToDraw)
}

function updateCandidateDetails({rollNo,name}) {
  let isValidRollNo, isValidName
  isValidRollNo = (isValidName = false)

  // Validate RollNo
  rollNo = Number(rollNo)
  isValidRollNo = !isNaN(rollNo) && 9999999 < rollNo
  if (!isValidRollNo) {
    console.warn({invalidRollNo: rollNo})
  }

  // Validate Name
  const titleCasePat = /^[A-Z][a-z]+( [A-Z][a-z]+)*$/
  name = String(name).trim()
  isValidName = titleCasePat.test(name)
  if (!isValidName) {
    console.warn({invalidName: name})
  }
  
  if (isValidRollNo && isValidName) {
    document.querySelector('#by')
      .textContent = `By: ${name} (${rollNo})`
  }
}

function saveCanvas() {
  const link = document.createElement('a');
  const {canvas, ctx, bb} = getCanvas(canvasSel)
  link.download = `${rollNo}-${slug(document.title)}-canvas.png`;
  link.href = canvas.toDataURL()
  link.click();  
}

function saveRefimg() {
  console.warn({saveRefimg: 'Not Implemented.'})
}

function saveVisible() {
  return saveFunctions[visible]()
}

function flipVisible(name) {
  if (name != visible) {
    // Swap
    [visible, invisible] = [invisible, visible]
  }

  document.querySelector(sels[visible])
    .classList.remove('hidden')
  document.querySelector(sels[invisible])
    .classList.add('hidden')

  document.querySelector('#switchButtonIcon')
    .name = icons[invisible]
  document.querySelector('#switchButtonText')
    .textContent = `Show ${invisible}`
}

function setupRefimg() {
  document.querySelector(refimgSel)
    .src = `./assets/${rollNo}-${slug(document.title)}-refimg.png`
}
