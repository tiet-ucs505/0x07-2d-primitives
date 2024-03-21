# Transformation Math #

## Augmented Matrix ##

Using Augmented Matrix to represent
$\mathbf{y}=A\mathbf{x}+\mathbf{b}$ as follows,

$$\begin{bmatrix}
\mathbf{y} \\
1
\end{bmatrix}
= \left[\begin{matrix}
&A& \\
0&\cdots&0
\end{matrix}
\mkern 0.5em
\bigg\rvert
\mkern 0.5em
\begin{matrix}
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


## Translation ##

Preserves distances and oriented angles

$$M_t\left(\begin{matrix}h\\
k\end{matrix}\right) =
\begin{bmatrix}
1&0&h \\ 
0&1&k \\
0&0&1
\end{bmatrix}$$

## Rotations ##

Preserves relative angles and distances

$$M_r\left(\theta\right) =
\begin{bmatrix}
\cos\theta&-\sin\theta&0 \\
\sin\theta&\cos\theta&0 \\
0&0&1
\end{bmatrix}$$


## Uniform Scaling ##

Preserves relative angles and ratio between distances

$$M_{u}\left(\lambda\right) =
\begin{bmatrix}
\lambda&0&0 \\
0&\lambda&0 \\ 
0&0&1
\end{bmatrix}$$


## Non-uniform Scaling and Shear ##

Preserves parallelism

$$M_{s}\left(\begin{matrix}s_x\\
s_y\end{matrix}\right) =
\begin{bmatrix}
s_x&0&0 \\ 
0&s_y&0 \\ 
0&0&1
\end{bmatrix}$$

$$M_{\mathrm{sh}}\left(\begin{matrix}h_x\\
h_y\end{matrix}\right) =
\begin{bmatrix}
1&h_y&0 \\ 
h_x&1&0 \\ 
0&0&1
\end{bmatrix}$$

