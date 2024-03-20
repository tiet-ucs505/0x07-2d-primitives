# 0x07 : 2D Primitives #

## Identifier ##
+ **Name** : 
+ **Roll No** :

## Assignment ##

1. Draw a shape explicitly using canvas 2d draw
   functions.
3. Enable the transformer interface, and listen for its
   signals on the `console`.
4. Add event listeners on controls to apply transforms
   and update the drawing on canvas respectively.

### Step 1: Choose a shape ###
*(Suggested: 15 mins)*

Find a shape that impresses you.  It may be [an
icon](https://www.google.com/search?tbm=isch&q=icon&tbs=imgo:1),
[a
logo](https://www.google.com/search?tbm=isch&q=logo&tbs=imgo:1&chips=g_1:vector),
[a
glyph](https://www.google.com/search?tbm=isch&q=glyphs&tbs=imgo:1),
a physical object like [a
butterfly](https://www.google.com/search?tbm=isch&q=butterfly&tbs=imgo:1),
[a
wheel](https://www.google.com/search?tbm=isch&q=wheel&tbs=imgo:1),
or anything that appeals.  The complexity of shape is
upto the candidate to decide; but a good heuristic is
to spend a good half an hour to recreate the shape.
Also, remember that you shape (or the collection
thereof) shall finally be drawn with only one fill
style and one stroke style throughout.

Crop image to the region of interest, and rename it as  
`<roll-no>-0x07-2d-primitives-refimg.png`.  
Paste it into the [`./assets`](./assets/) folder.  It
should reflect in your `index.html`, upon click over
"Show Refimg."

There are plenty of options to modify the shape into
flat colours, and it's about creativity. It's common
place to use an image editor like
[GIMP](https://www.gimp.org/) and vector drawing
softwares like [Inkscape](https://inkscape.org/).
Commonly used operations would be like,
+ [Solarisation](https://www.google.com/search?hl=en&q=solarising%20an%20image)
+ [Histogram
  Equalisation](https://www.google.com/search?hl=en&q=histogram%20equalisation)
+ [Color
  Balance](https://www.google.com/search?hl=en&q=color%20balance)
+ Use a vector editor like Inkscape to import and trace
  the drawing as per your liking

### Step 2: Draw the shape ###
*(Suggested: 30 mins)*

Use [draw functions](#geometry-definition) to create
the shape so as to redefine and complete the function
[`Experiment.createGeometry`](./experiment.js#L56)

### Step 3. Transforms ###
*(Suggested: 45 mins)*

Define transformation matrix using [`DOMMatrix`
interface](#geometric-transformations); there is a math
refresher [here](#translation).  The task is 
1. To define functions that return transformation
matrices given transformation parameters; and 
2. To define transform composition function to apply
transforms using
[`DOMMatrix.multiplySelf()`](#dommatrixmultiplyself-function).

It's always advisable to start with the Identity
Matrix.

Use the functions as defined here to redefine and
complete the function
[`Experiment.getBaseTransform`](./experiment.js#L86)

### Step 4. Stylise ###
*(Suggested: 15 mins)*

Play around with the style definitions and make a copy
of each style generated.

Use the functions as defined here to redefine and
complete the function
[`Experiment.getBaseStyles`](./experiment.js#L104)

### Step 5. Create UI ###
*(Suggested: 50 mins)*

Uncomment the [Line 25 in
`experiment.js`](./experiment.js#L25) to enable
transform controls.  Open up the terminal and see how
changing the controls are reflected in the terminal.

Redefine and complete the function
[`Experiment.handleTransforms`](./experiment.js#L45) to
handle the inputs from UI.

### Step 6. Compile a collage ###
*(Suggested: 25 mins)*

Snapshot a few of your canvases using Download button;
and compile a collage using the same.  Rename the
collage as:  
`<roll-no>-0x07-2d-primitives-collage.png`  
Upload it to the form along with your submission.

## Candidate's Remarks ##

*[Statements within braces [] are comments,
placeholders and directive. Please remove them and /or
replace them with your response.]*

*[Q: Apart from the given objective, what did you try
to/ were able to achieve through this assignment.]*

*[Q: How difficult/ easy did you find doing this?
Reference it with the fact that you are supposed to
spend 3-4 hours on this problem.  1 hr in the Lab and
rest later.]*

*[Q: Do you think this exercise may help you solve a
real world problem that you may encounter? Please quote
an example if so.]*

## Acknowledgements ##

*[Are there any external resources, friends,
colleagues, mentors who have helped you do it. Please
acnowledge them.]*

## Canonical Details ##

### Objective ###

+ Use
  [`Path2D`](https://developer.mozilla.org/en-US/docs/Web/API/Path2D)
  to define primitives.
+ Define geometric transforms and apply using
  [`addPath`
  interface](https://developer.mozilla.org/en-US/docs/Web/API/Path2D/addPath),
  including
  + Rigid-body tranforms
  + Reflection
  + Shear
+ Rendering the canvas, *e.g.*
  + [Stroke
    outline](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke)
    with [Line
    type](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash),
    [Line
    width](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth),
    and
    [Color/Gradient/Pattern](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
  + [Fill
    Region](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fill)
    with
    [Color/Gradient/Pattern](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  
### Lab Exercise ###

Available on branch `example`.

## Quick Reference ##

### Geometry Definition ###

[`Path2D`](https://developer.mozilla.org/en-US/docs/Web/API/Path2D)

[`Path2D.moveTo(x,
y)`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo)  
Moves the starting point of a new sub-path to the `(x,
y)` coordinates.

[`Path2D.lineTo(x,
y)`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo)  
Connects the last point in the subpath to the `(x, y)`
coordinates with a straight line.

[`Path2D.arc(x, y, r, startAngle, endAngle,
counterclockwise=false)`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc)  
Adds an arc to the path which is centered at `(x, y)`
position with radius `r` starting at `startAngle` and
ending at `endAngle` going in the given direction by
`counterclockwise` (defaulting to clockwise).


[`Path2D.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, counterclockwise=false)`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse)  
Adds an elliptical arc to the path which is centered at
`(x, y)` position with the radii `radiusX` and
`radiusY` starting at `startAngle` and ending at
`endAngle` going in the given direction by
`counterclockwise` (defaulting to clockwise).
`startAngle` and `endAngle` are eccentric angles.  The
ellipse is rotated by `rotation` radians.

[`Path2D.rect(x, y, width, height)`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rect)  
Creates a path for a rectangle at position `(x, y)`
with a size that is determined by `width` and `height`.

[`Path2D.roundRect(x, y, width, height,
radii)`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/roundRect
)  
Creates a path for a rounded rectangle at position `(x,
y)` with a size that is determined by `width` and
`height` and the radii of the circular arc to be used
for the corners of the rectangle is determined by
`radii`, which may be one of `all`, `[all]`, `[tlBr,
trBl]`, `[tl,trBl,bl]` or `[tl,tr,br,bl]`.

### Geometric Transformations ###

Using Augmented Matrix to represent
$\mathbf{y}=A\mathbf{x}+\mathbf{b}$ as follows,

$$\begin{bmatrix}
\mathbf{y} \\
1
\end{bmatrix}
= \left[\begin{matrix}
&A& \\
0&\cdots&0
\end{matrix}\;\bigg\rvert\;\begin{matrix}
\mathbf{b} \\
1
\end{matrix}\right]\begin{bmatrix}
\mathbf{x} \\
1
\end{bmatrix}$$

Or equivalently as,

$$\widehat{\mathbf{y}} = M\widehat{\mathbf{x}} $$

This exercise will cover only affine transformations.
The augmented representation, however, is equally
capable to represent projective transformations as
well.

#### Usage ####

##### `DOMMatrix` interface #####

Define a transformation matrix by initialising
[`DOMMatrix`](https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix)
and apply using [`addPath`
interface](https://developer.mozilla.org/en-US/docs/Web/API/Path2D/addPath)

`DOMMatrix` supports either a 6-value format or
16-value format.

The 6-value format, *i.e.* $[a,b,c,d,e,f]$ is used for
2D, with an easy mnemonic over
$\mathbf{y}=A\mathbf{x}+\mathbf{b}$; so that
$$A=\begin{bmatrix}a&c\\b&d\end{bmatrix}\qquad
\mathbf{b}=\begin{bmatrix}e\\f\end{bmatrix}$$

The 16-value format is column-major sequence of 16
numbers representing a $4\times4$ matrix.

##### `DOMMatrix.multiplySelf` function #####

```javascript
let A, B
// A = DOMMatrix([...])
// B = DOMMatrix([...])

A.multiplySelf(B)
```

Modifies the matrix by post-multiplying it with the
specified `DOMMatrix`. This is equivalent to the dot
product $A\cdot B$, where matrix `A` is the source
matrix and `B` is the matrix given as an input to the
method. 

##### Pattern of its usage #####

The pattern of usage here is to create a new path
`pathToDraw` that bears the ephemeral transformation
`transform` over `path` and render it as and when
necessary.

```javascript
// path and some values defined already
let a,b,sint,cost

let pathToDraw, transform

// translate to a,b
transform = new DOMMatrix();
[transform.e, transform.f] = [a,b];
pathToDraw = new Path2D().addPath(path, transform)
ctx.fill(pathToDraw)

// transform again later
transform = new DOMMatrix([
  sint,-cost,cost,sint,0,0
]);
pathToDraw = new Path2D().addPath(path, transform)
ctx.fill(pathToDraw)
```

#### Translation ####

Preserves distances and oriented angles

$$M_t\left(\begin{matrix}h\\k\end{matrix}\right) =
\begin{bmatrix}
1&0&h \\ 0&1&k \\ 0&0&1
\end{bmatrix}$$

#### Rotations ####

Preserves relative angles and distances

$$M_r\left(\theta\right) =
\begin{bmatrix}
\cos\theta&-\sin\theta&0 \\ \sin\theta&\cos\theta&0 \\ 0&0&1
\end{bmatrix}$$


#### Uniform Scaling ####

Preserves relative angles and ratio between distances
$$M_{u}\left(\lambda\right) =
\begin{bmatrix}
\lambda&0&0 \\ 0&\lambda&0 \\ 0&0&1
\end{bmatrix}$$


#### Non-uniform Scaling and Shear ####

Preserves parallelism
$$M_{s}\left(\begin{matrix}s_x\\s_y\end{matrix}\right) =
\begin{bmatrix}
s_x&0&0 \\ 0&s_y&0 \\ 0&0&1
\end{bmatrix}$$

$$M_{sh}\left(\begin{matrix}h_x\\h_y\end{matrix}\right) =
\begin{bmatrix}
1&h_y&0 \\ h_x&1&0 \\ 0&0&1
\end{bmatrix}$$

### Rendering Canvas in 2D ###

The
[`CanvasRenderingContext2D`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc)

[`CanvasRenderingContext2D.stroke(path=null)`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke)  
Strokes (outlines) the current or given `path` with the
current stroke style.


[`CanvasRenderingContext2D.fill(pathOrRule=null,fillRule=Null)`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fill)  
Fills the current or given path with the current
`fillStyle`, based on `fillRule` which may be one of
`nonzero` or `evenodd`.

[`CanvasRenderingContext2D.fillStyle`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle)
[`CanvasRenderingContext2D.strokeStyle`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeStyle)  
One of the following:

+ A string parsed as CSS
  [`<color>`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
  value.
+ A
  [`CanvasGradient`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient)
  object (a linear or radial gradient).
+ A
  [`CanvasPattern`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasPattern)
  object (a repeating image).

[`CanvasRenderingContext2D.lineWidth`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth)  
Sets the thickness of lines.

[`CanvasRenderingContext2D.setLineDash(segments)`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash)  
Sets the line dash pattern used when stroking lines. It
uses an array of values that specify alternating
lengths of lines and gaps which describe the pattern.

### Further Resources ###

1. [Snap SVG](http://snapsvg.io/)
