---
title: "Why Does the Dot Product Use Cosine?"
description: "A short explanation about why cos appears in the formula for dot product."
date: "Aug 06 2026"
tags: ["Mathematics"]
---


When I first came across the geometric formula for dot product, I was not sure about why we had cosine function applied there (like why not any other function like sine and tangent). After going through different interpretations online, it finally clicked for me and now this blog is my attempt to explain the intuition behind it.

## What is a Dot Product?

A dot product is an operation that takes two vectors and produces a single scalar value.

The algebraic definition of a vector dot product looks something like this for vector $a$ and $b$ :

$$  
\mathbf{a} \cdot \mathbf{b} = \sum_{i=1}^{n} a_i b_i = a_1 b_1 + a_2 b_2 + \dots + a_n b_n  
$$

In machine learning the algebraic formula is used to calculate dot product mostly because vectors are typically represented by their components. You will need to have all the components of the vector for this to be useful.

There exists another geometrical formula for calculating the dot product between two vectors without direct need for vector components:

$$
\mathbf{a} \cdot \mathbf{b} = \|\mathbf{a}\| \|\mathbf{b}\| \cos(\theta)
$$

This formula is useful when you know the magnitude of the vectors and the angle (θ) between them.


## Why Cosine?
The dot product, as we know (or don't, no worries), is used to understand how well two vectors align and how large they are.
<div align="center">
<img width="776" height="341" alt="image" src="https://github.com/user-attachments/assets/cd8dedde-b8a4-47a7-a5eb-f64ad9e435dd" />

*Figure 1: components of a vector*
</div>

A 2d vector can be decomposed into 2 components, a horizontal and a vertical component. And, since we are only concerned with the alignment of vector $a$ and $b$, we'll only care about the component of vector $a$ that points in the direction of vector $b$ (projection of vector $a$ onto $b$) shown in figure 1 by the black line on top of the vector $b$ line in this case. 

**Intuition for projection:**
 Projection can be thought of as shining a flashlight perpendicular to the vector $b$, and the shadow cast by $a$ onto $b$ is its projection. Below, I have demonstrated this by holding this marker in an angle and having a light shine from above. The shadow formed is the projection of vector $a$ onto the floor, the vector $b$.

<div align="center">
  <img width="1729" height="1008" alt="image" src="https://github.com/user-attachments/assets/3e542f0d-16d2-49cd-a822-a076efd385fe" />

<img width="480" height="502" alt="WhatsAppVideo2026-08-06at8 30 35PM-ezgif com-video-to-gif-converter" src="https://github.com/user-attachments/assets/0df480b8-c30e-456f-88b7-5934eaf83af8" />

*Figure 2: projection intuition with flashlight example*
</div>

One way to interpret dot product is as the magnitude of a vector multiplied by the magnitude of projection of the other vector onto it.

So, we know the magnitude of vector $b$, but we can't take the entire vector $a$'s magnitude here as we are only measuring alignment of vector $a$ on the direction of $b$, so we need magnitude of the projection.

we can make a right triangle by dropping a perpendicular line form the tip of vector $a$ onto vector $b$ as shown in figure below. I've labeled the sides, and the 90 degree angle formed between the projection line and the adjacent side.

<div align="center">
<img width="780" height="352" alt="image" src="https://github.com/user-attachments/assets/7a5b2965-2db4-48e3-b8c8-832664edb4cb" />

*Figure 3: right angle triangle formation*
</div>

From the trig definitions, we know these ratios to be true:

<div align="center">
<img width="1199" height="540" alt="image" src="https://github.com/user-attachments/assets/bc52513a-a8cd-44a7-87e7-fb84153a9916" />

*Figure 4: trigonometric ratios*
</div>

The projection of $a$ onto $b$ is equal to the adjacent side of this right angled triangle (indicated by *adj* in figure 2 above), so we need to calculate what the adjacent is in this triangle, and from the trigonometric ratios we have, we can observe that only cos relates adjacent (the side we are interested in) and hypotenuse, which is something we know, the magnitude of $||a||$. Therefore, we use the cos ratio to find the magnitude of the projection of $a$ onto $b$.

<div align="center">
<img width="964" height="429" alt="image" src="https://github.com/user-attachments/assets/f89cdeb0-1f47-4f61-8b3d-a0975ed10454" />

 *Figure 4: finding the adjacent side*
</div>

Therefore, the magnitude of the projection is: 

$$ 
\|\mathbf{a}\|  \cos(\theta) 
$$

as the magnitude of the projection of $a$ onto $b$.

So, the overall dot product, of $a$ and $b$ is then,

the projected magnitude of $a$ onto $b$ times the magnitude of $b$

**i.e.**

$$
\mathbf{a} \cdot \mathbf{b} = \|\mathbf{a}\| \|\mathbf{b}\| \cos(\theta)
$$

**Note**: *dot product is commutative, so:*

$$
\mathbf{a} \cdot \mathbf{b} = \mathbf{b} \cdot \mathbf{a}
$$

Also, using cosine makes sense because of how it behaves. When the angle $θ$ is 0 degrees, we have $cosθ = 1$, which is maximum alignment and can be thought of as the entire vector contributing to the projection. In the case when the vectors are perpendicular, then $θ$ becomes 90 degrees and $cosθ$ becomes 0, so no alignment, there's no component of one vector in the direction of other.

Finally, if the vectors are pointing in the opposite direction then, $θ$ is 180 degrees, so $cosθ$ becomes -1 and the projection is in the opposite direction making the dot product negative.

Basically,

$$
\begin{aligned}
\theta &= 0^\circ \quad &&\cos\theta = 1 &&\\
\theta &= 90^\circ \quad &&\cos\theta = 0 &&\\
\theta &= 180^\circ \quad &&\cos\theta = -1
\end{aligned}
$$

So, the cosine function in dot product was not arbitrary. It appears naturally when calculating projection, and most importantly makes intuitive sense. 


<div align="center">
 
**ADIOS**
</div>
