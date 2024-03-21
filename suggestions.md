# Suggestions #

## How to choose a shape ##

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

## How to implement transforms ##

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

