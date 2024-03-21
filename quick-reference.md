# Quick Reference #

## Geometry Definition ##

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

## `DOMMatrix` interface ##

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

### `DOMMatrix.multiplySelf` function ###

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

### Pattern of its usage ###

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

## Rendering Canvas in 2D ##

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

## Further Resources ##

1. [Snap SVG](http://snapsvg.io/)
