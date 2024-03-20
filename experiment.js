class Experiment {
  canvasSel = '#myCanvas'
  transformControls
  fillControls
  styleControls

  constructor() {
    const Cls = this.constructor

    this.transformControls
      = new Controls('#transform-controls', {
	submitSel: '#transform-submit'
      })

    const handleTransforms = this.handleTransforms.bind(this)
    this.transformControls.el.addEventListener(
      'update', handleTransforms
    )
    this.transformControls.el.addEventListener(
      'submit', handleTransforms
    )

    // Uncomment to enable tranform controls
    // --------------------------------------------------
    // this.transformControls.unhide()


    // ------------------------------------------------
    // !!! BONUS
    // ------------------------------------------------
    // If you would like to similarly implement Fill
    // and Stroke style controls!
    this.fillControls
      = new Controls('#fill-controls', {
	submitSel: '#fill-submit'
      })
    // this.fillControls.unhide()

    this.styleControls
      = new Controls('#stroke-controls', {
	submitSel: '#stroke-submit'
      })
    // this.styleControls.unhide()

  }

  handleTransforms(e) {
    const {inputs} = this.transformControls
    console.log({handleTransforms:true, inputs})


    // ------------------------------------------------
    // TODO
    // ------------------------------------------------

  }

  static createGeometry () {
    // Polygon
    const starPos = [[109.173410, 82.265969],
		     [91.307462, 88.243337],
		     [86.103001, 106.349540],
		     [74.897306, 91.205122],
		     [56.069018, 91.850509],
		     [67.009463, 76.513378],
		     [60.577403, 58.806048],
		     [78.544665, 64.471595],
		     [93.397720, 52.882477],
		     [93.561654, 71.721109],
		    ]

    const path = new Path2D()
    path.moveTo(...starPos[0])
    for (const [x,y] of starPos.slice(1)) {
      path.lineTo(x,y)
    }
    path.closePath()

    
    // ------------------------------------------------
    // TODO
    // ------------------------------------------------


    return path
  }

  static getBaseTransform () {
    const transform = new DOMMatrix([
      4.045084971874737,
      2.938926261462366,
      -2.938926261462366,
      4.045084971874737,
      141.50730316701032,
      -328.7208986669682
    ])


    // ------------------------------------------------
    // TODO
    // ------------------------------------------------

    return transform
  }

  static getBaseStyles () {
    // Stroke with single color
    const stroke = {c: '#fd9322', w: 15}

    // Fill with evenodd rule and flat color
    const c = '#ffeaae'

    // Fill with evenodd rule and linear gradient
    // const [x0,y0]=[100,250], [x1,y1]=[325,475]
    // const c = ctx.createLinearGradient(x0, y0, x1, y1)
    // c.addColorStop(0, '#baf7da')
    // c.addColorStop(1, '#dabaf7')

    // Fill with evenodd rule and conic gradient
    // const [x,y]=[240,387], startAngle=-0.54
    // const c = ctx.createConicGradient(startAngle, x, y)
    // c.addColorStop(0, '#baf7da')
    // c.addColorStop(1, '#dabaf7')

    // Fill with evenodd rule and radial gradient
    // const [x0,y0,r0]=[240,387,170], [x1,y1,r1]=[100,358,35]
    // const c = ctx.createRadialGradient(x0,y0,r0,x1,y1,r1)
    // c.addColorStop(0, '#baf7da')
    // c.addColorStop(1, '#dabaf7')

    // Fill with evenodd rule and a pattern
    // const img = document.querySelector('#pattern')
    // const c = ctx.createPattern(img, 'repeat')
    // c.setTransform(new DOMMatrix([
    //   0.2,0,0,0.2,0,0
    // ]))

    const fill = {c, r: 'evenodd'}

    const styles = {stroke, fill}
    return styles
  }
}
