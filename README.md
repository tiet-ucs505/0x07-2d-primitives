# 0x07 : 2D Primitives #

|                  |                          |
|------------------|--------------------------|
| Code             | 0x07                     |
| Submission Opens | Wed 3 Apr 2024 17:00 hrs |
| Deadline         | Mon 8 Apr 2024 08:00 hrs |
| Weightage        | 3 marks                  |


## Objective ##

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
  
## Lab Exercise ##

Available on branch `example`.

## Assignment ##

1. Choose a shape at random.
2. Approximate it using explicit draw functions.
3. Enable the transformer interface, and listen for its
   signals on the `console`.
4. Add event listeners on transformer to update the
   drawing on canvas respectively.

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
  cost,sint,-sint,cost,0,0
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
