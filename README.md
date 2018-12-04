## Instrucciones de juego

### PC

Usa el ratón para moverte por los menús y utiliza las flechas izq y dcha para mover al personaje y conseguir ascender entre plataformas

### MOVIL

Para moverte por los menús utiliza la entrada tactil. Para mover al personaje se usa el magnetómetro del dispositivo. Gira el movil o tablet para poder manejar al personaje.

Puedes jugar a GualAPP haciendo click en este enlace [https://grupo9web.github.io/GualAPP/]


## Gual App - Documento de Diseño


## 1. Introducción

Este es el documento de diseño de *Gual App*, un videojuego web desarrollado en *HTML5*  como práctica de la asignatura *Juegos para web y redes sociales* del Grado de Diseño y Desarrollo de Videojuegos de la *Universidad Rey Juan Carlos*. 


### 1.1 Concepto del juego

*Gual App* es un videojuego en el que ayudaremos a Juan de las Nieves en su escalada por "El Muro". Durante a esta, nuestro personaje deberá enfrentarse a la dificultad de subir por las plataformas de hielo, que no son siempre seguras, y al ataque de un caminante azul.

### 1.2 Características principales. 

El juego se basa en los siguientes principios: 

* **Mecánica sencilla**: la mecánica del juego es muy simple, el jugador solo podrá saltar hacia un lado u otro para ir subiendo el muro a la vez que esquiva las amenazas. 

* **Juego infinito**: el muro es infinito, por lo que el juego nunca se acabará, irán apareciendo las plataformas y power ups de manera aleatoria. El objetivo será alcanzar la mayor puntuación posible.

* **Dificultad progresiva**: puesto que el juego es infinito, la distancia a la que Juan puede saltar se verá reducida a medida que suba, debido al cansancio que esto conlleva, de modo que le será cada vez más difícil escalar. 

### 1.3 Género

*Gual App* será un juego de plataformas con *scroll* vertical, del género *doodle jump*, en el que el objetivo es ir subir lo más alto posible sin morir únicamente utilizando sus saltos para avanzar.


### 1.4 Propósito y público objetivo

El principal objetivo de *Gual App* es ofrecer a los fans de *Juego de Tronos* una alternativa al *Doodle Jump* ambientada en su universo de ficción favorito, con una jugabilidad y mecánicas mejoradas con respecto al título anterior. 

*Gual App* está orientado a jugadores de cualquier edad, ya sean jugadores hardcore, los que perseguirán conseguir la mayor puntuación posible, o jugadores casual, cuyo principal objetivo será obtener momentos de ocio de forma esporádica.


## 2. Mecánicas del juego

El jugador tendrá que ascender el muro que separa los 7 reinos de las tierras salvajes. Para ello nuestro personaje, Juan de las Nieves, tendrá que ir saltando de plataforma en plataforma hasta conseguir su record. Para añadir dificultad al juego se incluirán obstáculos como flechas, plataformas móviles y frágiles.

### 2.1 Cámara

La perspectiva del videojuego será 2D en forma de scroll vertical. La cámara ascenderá a la misma vez que el jugador vaya subiendo con las plataformas.

#### 2.1.2 Periféricos y controles

Para moverte por los menús se utilizará el ratón en PC y entrada táctil en dispositivos móviles. Para jugar se utilizarán las teclas de flecha izquierda y derecha en PC y en dispositivos móviles se usará el giroscopio del dispositivo.

### 2.2 Puntuación

La puntuación de la partida se basará en lo alto que consigas llegar ascendiendo el muro. Se incluirá una tabla de puntuaciones donde se indique el récord del jugador.

### 2.3 Guardar/Cargar

Se guardará el récord de puntuación de la sesión actual.
### 2.4 Interacción entre elementos

Gual App se basa en un scroll vertical que representa la ascensión del muro mediante saltos con nuestro personaje. La forma de avanzar de nuestro personaje será mediante el salto a las plataformas que se generen aleatoriamente, que en nuestro caso serán cubos de hielo sobresalientes a la superficie del muro. Por otro lado, hemos decidido que cuando el jugador llegue a un límite lateral del muro se le transporte al opuesto.

En cuanto al salto, se producirá con una determinada desviación lateral en función de la orientación del móvil o botón que pulsemos. Si el jugador no presiona ninguna tecla, nuestro personaje saltará de forma totalmente vertical, sin ninguna desviación.

Un enemigo se encargará de lanzar piedras desde la parte de arriba del muro. Si estos objetos colisionan con nuestro personaje, provocará la pérdida de la partida.
Se le brindarán al personaje power ups que aparecerán aleatoriamente sobre las plataformas y le darán algunas ayudas para escalar el muro.

## 2.5 Personajes

### 2.5.1 Jugador

-   **Nombre del Personaje**: Juan de las Nieves.
-   **Descripción:**  Muchacho moreno, con complexión atlética, cara alargada, ojos grises y una personalidad entrañable.
-   **Concepto:**  En su huida de Invernalia, nuestro protagonista Juan se encuentra con un imprevisto peor que los que le acechan: El Muro. Su objetivo será escalarlo para deshacerse de los caminantes azules.
-   **Encuentro:**  Se trata de uno de los personajes con los que jugaremos, por lo que no hay un encuentro como tal, siempre estará presente en la acción.
-   **Armas:** Sus únicas armas son su agilidad y su destreza.

### 2.5.2 Enemigo
-   **Nombre del Personaje:**  Caminante Azul
-   **Descripción:**  Criatura humanoide alta con una carne pálida como la leche, ojos azules que arden como el hielo.
-   **Encuentro:**  Está presente en todo momento durante el juego.
-   **Armas:**  En la parte superior del muro tiene una gran cantidad de piedras, que tirará en el borde para intentar impactar sobre Juan.


## 3. Interfaz

En este apartado se detallará la interfaz de *Gual App*, especificando por un lado el __flujo de actividades__ que compondrán la aplicación y por otro mostrando una versión inicial de las __pantallas__ previstas.

  
 
### 3.1 Diagrama de flujo

El siguiente diagrama de flujo describe los estados en los que se puede encontrar nuestro juego *Gual App* y las posibles transiciones entre los mismos según las acciones del usuario.

![Error en carga de Diagrama de Flujo](https://i.imgur.com/vM2vgre.png)

A continuación se muestra un diagrama de estados adicional que describe las posibilidades y situaciones que pueden suceder durante el estado de *Juego*:

![Error en carga de Diagrama de Flujo, Juego](https://i.imgur.com/RfZIUDV.png)


### 3.2 Menú de Inicio

![Error en carga de Menu de Inicio](https://i.imgur.com/MfDozWZ.png)


 **1. Botón de Jugar**: se inicia la partida directamente, dado que no existe menú de selección de dificultad, la cual incrementará progresivamente.
 **2. Botón de Récord**:  permite visualizar la máxima puntuación obtenida.
 **3. Botón de Opciones**:  al pulsarlo nos llevará a la pantalla de *Opciones*.
 **4. Créditos**: da acceso a la información pertinente sobre nuestro equipo de desarrollo.

### 3.3 Nivel

Al tratarse de un juego de **plataformas infinito**, el juego constará de un único nivel. El tutorial y toda la trama se desarrollará en este mismo escenario. Nuestro objetivo consistirá en escalar _El Muro_, consiguiendo la mayor puntuación posible, para poder superar tanto a  nosotros mismos como a nuestros amigos.

El enemigo al que nos debemos enfrentar será un caminante azul, que intentará cesar nuestra subida mediante el empleo de elementos arrojadizos como piedras. Durante nuestro ascenso iremos encontrando diferentes objetos que nos servirán para hacer nuestra escalada más amena.

Respecto a la música y los efectos de sonido, se compondrá una obra principal de un carácter épico/acción que será acompañada de unos efectos sonoros que representarán las diferentes acciones que se desarrollan dentro del juego, estas acciones van desde realizar un salto hasta morir en nuestro ascenso.


 
### 3.4 Menú de Opciones

Se implementará una aplicación multilingüe, de modo que en esta pantalla se podrá cambiar de idioma, así como inhabilitar el sonido del juego.

![Error en carga de Menu Opciones](https://i.imgur.com/xFDGESY.png)

 **1. Idioma**: permite el cambio de los textos del juego entre varios idiomas.
 **2. Sonido**:  activa o desactiva el sonido del juego.
 

### 3.5 Ranking

En esta pantalla se mostrará un *Ranking* con las **10 mejores** puntuaciones conseguidas. Como se ve se podrá volver a la pantalla de inicio desde esta pulsando en el botón *Volver*.

![Error en carga de Ranking](https://i.imgur.com/lboxcLg.png)


### 3.6 Créditos

A continuación se muestra el diseño de la pantalla de *Créditos*.  

![Error en carga de Créditos](https://i.imgur.com/vxMCsXL.png)


### 3.7 Pantalla de Juego

Hemos capturado un frame del juego en movimiento, de modo que quedaría así:

![Error en carga de Pantalla de Juego](https://i.imgur.com/tkM3bIc.png)


**1. Jugador**: se inicia la partida directamente, dado que no existe menú de selección de dificultad, la cual incrementará progresivamente.
 **2. Plataformas**:  único punto de apoyo en la escalada del muro.
 **3. Zona superior**:  ofrecerá al jugador información relativa al origen de los proyectiles que deberá evitar en su ascenso.
**4. Proyectil**: el jugador tendrá que esquivar los proyectiles que el caminante azul le tire para evitar morir.

Como se ha descrito anteriormente, el juego no dispone de un menú de selección de dificultad dado que esta se incrementará de manera progresiva cuanto más alto llegue el jugador.

### 3.8 Game Over

Cuando el usuario falla al subirse a una plataforma y cae al vacío, o reciba el impacto de una piedra que haya lanzado el caminante azul, se acaba su partida, y da paso a una nueva pantalla que notifica al jugador de esto mismo, el **Game Over** mostrando la puntuación obtenida finalmente, del siguiente modo:

![Error en carga de Game Over](https://i.imgur.com/7O42fRe.png)


## 4. Arte y Música

*Gual App* está inspirada en la exitosa saga de fantasía *Canción de hielo y fuego*, a la hora de representarlo se ha decidido emplear pixel art, dándole así un aspecto único y cartoon que busca simpatizar con todos los públicos.

Se diseñarán modelos 2D para el **jugador**, el **enemigo** de la cima del muro y el propio **muro**. Preferiblemente, el estilo de la página web deberá estar en consonancia con el del juego en sí (las nubes, el decorado, etc).

Acorde con este simpático estilo artístico, se pretende incluir una serie de tonadillas musicales propias alegres y sencillas para acompañar la acción sin cansar al jugador.
