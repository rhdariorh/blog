---
layout: post
title: Cómo implementar un fractal
---

Un fractal se trata de un conjunto (ya sea un dibujo, datos o cualquier otro tipo) que muestra autosimilitud a cualquier escala.

Imaginemos que nos encontramos ante un dibujo fractal ideal. Si aumentamos el dibujo una cierta escala veremos el mismo tipo de estructura. Si una vez aumentado, volvemos a realizar esta operación nos encontraremos de nuevo en la misma situación. Podríamos seguir aumentando la escala aumentando infinitas veces y el dibujo fractal seguiría mostrando el mismo tipo de estructura.

Esta definición de fractal es útil para comprender el concepto, pero en la realidad encontramos gran diversidad de estructuras fractales ya sean naturales (flores, nubes, minerales…) o artificiales (arte, estructuras de datos o incluso algoritmos de compresión) y todas ellas son finitas.

Computacionalmente únicamente se pueden representar gráficos fractales finitos. Es posible crear fractales que al aumentar la escala aparentemente sean infinitos desarrollando el fractal conforme se aumenta una zona específica pero realmente estamos tratando con fractales finitos con un nivel de profundidad determinado. El trabajo de este documento se enfoca en el uso de fractales en gráficos, para ello se tratan especialmente tres de los algoritmos más significativos y conocidos como son los algoritmos para desarrollar la curva de Koch, el triángulo de Sierpinski y el algoritmo de Mandelbrot. No obstante cabe destacar el algoritmo del fractal de Julia (conjuntos de Julia) el cual guarda mucha similitud con Mandelbrot.


![_config.yml]({{ site.baseurl }}/images/config.png)

The easiest way to make your first post is to edit this one. Go into /_posts/ and update the Hello World markdown file. For more instructions head over to the [Jekyll Now repository](https://github.com/barryclark/jekyll-now) on GitHub.