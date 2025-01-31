---
layout: post
title: La pipeline 3D de la animación
image: images/cover/pipeline_animacion.jpg
---

La creación de contenido 3D y más concretamente la animación 3D conlleva una
serie de pasos <b>desde la idea hasta el resultado final</b>. Este proceso de creación se divide
en preproducción, producción y postproducción que forman la tubería o pipeline de un
estudio de animación.

<div class="contenedorImagenPost">
	<img src="{{ site.baseurl }}/images/pipeline_animacion/animation_pipeline.jpg" alt=" Pipeline de producción de animación 3D. Por Andrew Bean."/>
	Pipeline de producción de animación 3D.
</div>

### Preproducción

La preproducción es la etapa inicial la cual conlleva un gran proceso creativo.
En el caso de una producción de animación se generan ideas, <b>se crea la historia
que se quiere contar</b> y se escribe, se hacen primeros bocetos de cómo va a ser el
desarrollo de la historia visualmente en los llamados storyboards, guiones visuales
sin movimiento. Se diseña en dibujos 2D cómo van a ser las animaciones en los
llamados animatics, en los cuales también se suelen añadir sonidos provisionales, se diseña el entorno y los personajes. 

<div class="contenedorVideoPost">
	<div class="videoPost">
		<iframe src="https://www.youtube.com/embed/qAe-u-xDab0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	</div>
	Ejemplo de animatic.
</div>

Es una etapa muy importante pues define el desarrollo tanto de la producción como de la postproducción. 
Las decisiones artísticas tomadas en esta etapa suelen ser afinadas durante la producción y postproducción.

### Producción

La producción es la etapa en la que se transforma las ideas y la historia creada
en preproducción en modelos 3D, animaciones de estos modelos y la iluminación
de la escena. Este proceso, o subetapas de la pipeline de animación, se conoce
como la tubería de creación 3D comúnmente llamada por su equivalente en ingles
pipeline 3D, en el cual la postproducción también tiene un papel importante. La
producción 3D se puede dividir, de forma general, en los siguientes pasos, alguno
de ellos paralelizables:

*	<b>Layout</b> es la etapa en la cual se crean las escenas 3D de una forma basta y
	general. Por norma general, a la hora de hacer el layout todavía no se han
	terminado de crear los modelos 3D finales por lo que en su lugar se utilizan
	objetos simples como cubos, cilindros, esferas o modelados simples de objetos o 
	personajes. La función del layout es montar la escena posicionando los
	diferentes objetos en la posición que deben estar y añadir pequeñas animaciones 
	extremadamente simples que dan una idea general del espacio por el que se van a mover los o
	bjetos y cómo va estar configurada la escena según se ha establecido en preproducción. 
	Posteriormente, durante el desarrollo de la producción se van sustituyendo los modelos 
	provisionales por los finales y las animaciones además de la iluminación.
	
*	El <b>modelado 3D</b> consiste en la creación de la geometría 3D de los objetos
	que van a formar las escenas, tanto de los personajes como del entorno a
	partir los diseños 2D previamente creados en preproducción.
	
*	<b>Texturizado</b> y <b>shading</b>. El texturizado es el proceso en el cual se aplica a los
	objetos de la escena los colores con los que se van a visualizar. Estos colores
	pueden añadirse a partir de imágenes textura como puede ser el caso de una
	imagen de tierra que se aplica a un plano o texturas procedurales las cuales
	son creadas aplicando un algoritmo. El shading hace referencia al comportamiento 
	de los objetos ante la iluminación de la escena. El texturizado y
	el shading están extremadamente ligados pudiéndose considerar uno. Las
	texturas se utilizan para determinar comportamientos de la luz a lo largo
	del objeto pudiendo, por ejemplo, tener un comportamiento diferente de la
	luz en diferentes zonas de un mismo objeto.

*	<b>Rigging</b> es un proceso necesario previo a la animación de los modelos. Esta
	etapa consiste en definir y limitar cómo las diferentes partes de cada objeto
	puede moverse. Por ejemplo, a un personaje humanoide se le añaden huesos
	y articulaciones invisibles en el resultado final que determinan qué partes
	del personaje están articuladas, en qué direcciones se puede mover y en qué
	magnitud (véase la Figura 1.2). Al igual sucede con el rigging facial o el
	rigging de un vehículo o cualquier objeto animable.

	<img src="{{ site.baseurl }}/images/pipeline_animacion/rigging.png" alt="Ejemplo de la estructura de huesos de un rigging básico de un personaje 3D." style="max-width:50%;" class="center"/>
	
*	<b>Animación</b>. Una vez el rigging está hecho, el animador puede empezar a
	animar los objetos siguiendo lo establecido en los animatics diseñados en
	preproducción. La animación es un proceso muy importante para conseguir
	transmitir el mensaje deseado al espectador y consume gran parte del tiempo
	de producción pues es un trabajo muy preciso y manual. De hecho, gran
	parte del personal se dedica a esta fase de la producción. No importa cuan
	bien esté hecho el resto del proceso si la animación no está bien cuidada y
	no logra transmitir el mensaje.

*	<b>Efectos visuales</b>, o más conocido por su acrónimo VFX del inglés visual effects, 
	es la fase que permite añadir efectos visuales y animaciones difícilmente
	logrables usando las técnicas de la etapa de animación. Así puede ser la incorporación 
	de agua, pelo, fuego, humo, explosiones, objetos deformables,
	fracturas... Pese a que estos efectos tienen una alta componenente procedural, 
	también deben tener la suficiente capacidad de control como para que
	los encargados de la dirección de arte puedan decidir su comportamiento
	pese a no ajustarse a comportamientos físicamente plausibles.
	
*	<b>Iluminación</b>. En esta etapa se añaden luces a la escena. Gracias a la iluminación 
	los objetos y personajes no tienen un aspecto plano. Es importante
	no solo a la hora de hacer un producto visualmente agradable, sino que la
	iluminación crea los ambientes acordes a la situación, enfatizando el mensaje
	y siendo parte de la transmisión del mensaje.

*	<b>Renderizado</b>. Última etapa de producción. El renderizado es un término que
	hace referencia a la generación de la imagen a partir de los datos de la
	escena, siendo estos datos los generados tras todo el proceso de producción
	comentado.
	Normalmente la imagen es renderizada en capas separadas diferenciando
	entre personajes, fondo, sombras o cualquier aspecto relevante para la producción. De esta manera, si se detecta algún problema en el renderizado que
	conlleve la modificación en alguna etapa anterior, no será necesario volver a
	renderizar todas las partes de una escena sino únicamente la capa afectada.
	Por ejemplo, un problema en las sombras de la escena, renderizar únicamente las sombras permite ahorrar tiempo y costes. Además, separar en capas
	permite ajustar el resultado final como se comenta seguidamente en la etapa
	de postproducción.
	
	
### Postproducción

La postproducción es la etapa final en la que se termina de montar y retocar el
producto hasta estar listo para publicar y/o distribuir en el caso de que ese sea
el propósito. La labor principal de la postproducción es la siguiente:

*	Composición, efectos visuales 2D y corrección de color. En esta etapa se
	combinan las capas renderizadas en producción, este proceso se denomina
	composición o compositing. A la hora de combinar las capas se pueden hacer
	todos los retoques que se vean necesarios y ajustar las propiedades de cada
	capa. Se hacen correcciones de color haciendo consistente la apariencia de
	todo el metraje pese a las diferencias que pudiera haber entre varios renders.
	Además, se añaden efectos visuales 2D sobre estas capas los cuales, por
	norma general, son menos costosos computacionalmente que los VFX 3D
	realizados en producción. Por ejemplo, destellos de luz, polvo o desenfoques
	de movimiento. Finalmente, se unen todas las secuencias en el montaje de
	vídeo y el producto está finalizado.

<hr>

## Bibliografía

Payam Adib. 3d Animation Pipeline. Dream Farm Studios, 2020. URL:  https://dreamfarmstudios.com/blog/3d-animation-pipeline/ .

Chris Casmenco. 3D Production Pipeline. Anim8, February 2018. URL: https://animeight.com/2018/02/21/3d-production-pipeline/

Extraido y modificado de mi Trabajo de Fin de Grado de Ingeniería Multimedia:
Darío Rodríguez Hernández. Herramienta para la creación procedural de nubes atmosféricas en Blender. Septiembre 2021. Universitat de Valencia.

<hr>

