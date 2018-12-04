var loop, controller;

var bCanvas = document.getElementById("lienzo");
var lienzo = bCanvas.getContext("2d");

var menuCanvas = document.getElementById("menu");
var lienzoScore = menuCanvas.getContext("2d");

var tCanvas = document.getElementById("topCanvas");
var ctx = tCanvas.getContext("2d");



var anchoBotCanvas = bCanvas.width;
var altoBotCanvas = bCanvas.height;
var altoTopCanvasight = tCanvas.height;

//Variables para la carga de imágenes
var background = new Image();
background.src = "Assets/Wall/wall.png";

var topBackgorund = new Image();
topBackgorund.src = "Assets/Wall/topwall.png"

var plataformasImg = new Image();
plataformasImg.src = "Assets/Plataformas/plataforma.png"

var plataformasImg2 = new Image();
plataformasImg2.src = "Assets/Plataformas/plataforma2.png"

var dragonSprite = new Image();
dragonSprite.src = "Assets/PowerUp/pu1.png";

var jon = new Image();
jon.src = 'Assets/Jon/Jon.png';


var jonLeft = new Image();
jonLeft.src = 'Assets/Jon/JonI.png';

var jonRight = new Image();
jonRight.src = 'Assets/Jon/JonD.png';

var jonDragon = new Image();
jonDragon.src = "Assets/drogonn.png";

var powerup2 = new Image();
powerup2.src = "Assets/PowerUp/purplePowerup.png";

var powerup3 = new Image();
powerup3.src = "Assets/PowerUp/bluePowerup.png"

var powerup2Sprite = new Image();
powerup2Sprite.src = "Assets/Jon/pu2Sprite.png";
var powerup2SpriteI = new Image();
powerup2SpriteI.src = "Assets/Jon/pu2SpriteI.png";
var powerup2SpriteD = new Image();
powerup2SpriteD.src = "Assets/Jon/pu2SpriteD.png";

var powerup3Sprite = new Image();
powerup3Sprite.src = "Assets/Jon/pu3Sprite.png";
var powerup3SpriteI = new Image();
powerup3SpriteI.src = "Assets/Jon/pu3SpriteI.png";
var powerup3SpriteD = new Image();
powerup3SpriteD.src = "Assets/Jon/pu3SpriteD.png";


//Sprites de enemigo + pierda
espanha = document.getElementById('sprite');
espania = document.getElementById('walker');




//Variables para el desarrollo del juego
var platformCount = 8;
var gravity = 0.2;
var vx = 0.5;
var vy = -9;
var posYbelow;
var position = 0;
var plataformas = [];
var powerup;
var puType = Math.round(Math.random() * 2);
var score = 0;
var jumpCounter = 3;

var doubleJump = false;
var invertContols = false;

var isPowerUp = false; //Para que no se cambien los sprites cuando estemos con un poweUp activo.
var androidDerecha = false;
var androidIzquierda = false;
var firstRun = true;
var userName;
var specialSprites = false;
var scoreUploaded = false;
var newLevel = 0;
var mejoresPuntuaciones = new Array();
var android = false;




//Variables para la gestión del menu
var menu = document.getElementById("menu");
var cmenu = menu.getContext("2d");

var container = document.getElementById("container");
container.style.display = "none";

var mouseX;
var mouseY;

/*
 * LanguajeSelected = 0  -->Español
 *
 * LanguajeSelected = 1  -->Ingles
 * */

var languajeSelected = 0;
var mute = false;




var audio = document.getElementById('cancion_fondo');
var sonidoSalto = document.getElementById('sonidoSaltoNormal');
var sonidoSaltoLargo = document.getElementById('sonidoSaltoLargo');
var sonidoPowerUp = document.getElementById('sonidoPowerUp');
var sonidoChoquePiedra = document.getElementById('sonidoChoquePiedra');
var sonidoDragon = document.getElementById('sonidoDragon');
var sonidoMuerte = document.getElementById('sonidoMuerte');


//Estados
/*
 * Estado menu = 0;
 * Estado Jugando = 1;
 * Estado Scores = 2;
 * Estado Opciones = 3;
 * Estado Creditos = 4;
 * Estado GameOver = 5;
 *
 * */
var curretStateId = 0;
var playing = false;

const gameStates = {
    currentState: undefined,
    startGame() {

        if (!mute) {
            audio.src = 'musica/Musica Principal 2.mp3';
            audio.load();
            audio.volume = 0.1;
            audio.play();
        }

        container.style.display = "initial";
        menu.style.display = "none"
        curretStateId = 1;
        playing = true;
        if (!firstRun) {
            reset();
        };
        firstRun = false;
    },
    setUp() {

        if (!mute) {
            audio.src = 'musica/Dueto Rains of Castamere.mp3';
            audio.load();
            audio.play();
            audio.volume = 0.1;
        }
        gameStates.currentState = gameStates.menuSetup()
        gameStates.currentState;
    },
    menu() {

        document.addEventListener('click', mouseCliked, false);

    },
    menuSetup() {
        playing = false;
        drawMenu();
        curretStateId = 0;
        gameStates.currentState = gameStates.menu();
        gameStates.currentState;
    },
    gameOver() {

        //Cuando se acabe el juego, se sube la puntuación a la caché
        if (!scoreUploaded) {
            scoreUploaded = true;
            mejoresPuntuaciones.push(new puntuacionNombre(userName, score));

            localStorage.setItem("arrayPuntuaciones", JSON.stringify(mejoresPuntuaciones));
            mejoresPuntuaciones = JSON.parse(localStorage.getItem("arrayPuntuaciones"));

            mejoresPuntuaciones.sort(sortNumber);
        }


        container.style.display = "none";
        menu.style.display = "initial"
        playing = false;
        gameStates.currentState = gameStates.showGameOver();
        gameStates.currentState;
    },
    showScore() {
        drawScores();
        curretStateId = 2;
    },
    showOptions() {
        drawOpciones()
        curretStateId = 3;
    },
    showCredits() {
        drawCredits();
        curretStateId = 4;
    },
    showGameOver() {
        drawGameOver();
        curretStateId = 5;
    },
};




window.onload = function () {
    //getMobileOperatingSystem();

    //var viewport = document.getElementById("viewport");
    var screenHeight = screen.availHeight;
    var screenWitdth = screen.availWidth;

    /*
     * EFECTOS DE SONIDO
     */

    //salto normal
    sonidoSalto.src = 'bancoSonidos/Salto normal.mp3';
    sonidoSalto.load();
    sonidoSalto.volume = 0.1;
    //salto largo
    sonidoSaltoLargo.src = 'bancoSonidos/Salto largo.mp3';
    sonidoSaltoLargo.load();
    sonidoSaltoLargo.volume = 0.1;

    //powerup
    sonidoPowerUp.src = 'bancoSonidos/Powerup.mp3'
    sonidoPowerUp.load();
    sonidoPowerUp.volume = 0.1

    //Choque piedra o muerto
    sonidoChoquePiedra.src = 'bancoSonidos/choque piedra nuevo.mp3'
    sonidoChoquePiedra.load();
    sonidoChoquePiedra.volume = 0.7;

    //Choque piedra o muerto
    sonidoMuerte.src = 'bancoSonidos/sonidoMuerte.mp3'
    sonidoMuerte.load();
    sonidoMuerte.volume = 0.3;

    //Dragon
    sonidoDragon.src = 'bancoSonidos/sonidoDragon.mp3'
    sonidoDragon.load();
    sonidoDragon.volume = 0.3;

    if (screenHeight === 640) {
        document.querySelector("meta[name=viewport]").setAttribute(
            'content',
            'width=device-width, initial-scale=0.6, maximum-scale=0.6, user-scalable=0');
    } else if (screenHeight === 732) {
        document.querySelector("meta[name=viewport]").setAttribute(
            'content',
            'width=device-width, initial-scale=0.7, maximum-scale=0.7, user-scalable=0');
    } else {
        document.querySelector("meta[name=viewport]").setAttribute(
            'content',
            'width=device-width, initial-scale=0.8, maximum-scale=0.8, user-scalable=0');
    }
    document.body.addEventListener('touchmove', function (e) {
        e.preventDefault();
    });



    gameStates.currentState = gameStates.setUp()
    gameStates.currentState;


    //localStorage.clear();

    if (localStorage.getItem("arrayPuntuaciones") != null) {
        mejoresPuntuaciones = JSON.parse(localStorage.getItem("arrayPuntuaciones"));
    }

    mejoresPuntuaciones.sort(sortNumber);

    var nombreCorrecto = false;
    while (!nombreCorrecto) {
        userName = prompt("Please enter your name", "Hulioooo");
        if (userName == null) {
            userName = "Jugador";
        }
        if (userName.length <= 10)
            nombreCorrecto = true;
        else
            window.alert("La longitud del nombre debe ser menor a 10 caracteres incluyendo espacios");
    }
};


function drawMenu() {
    var img = new Image();
    if (languajeSelected === 1) {
        img.src = "Assets/Main_Menu_Eng.png"
    } else if (languajeSelected === 0) {
        img.src = "Assets/Main_Menu_Esp.png"
    }
    img.onload = function () {
        cmenu.drawImage(img, 0, 0, img.width, img.height, 0, 0, menu.width, menu.height);
    };
}


function drawScores() {
    var img = new Image();

    var img = new Image();
    if (languajeSelected === 1) {
        img.src = "Assets/AA_Menu_Ranking_Ing.png"
    } else if (languajeSelected === 0) {
        img.src = "Assets/AA_Menu_Ranking_Esp.png"
    }


    img.onload = function () {
        cmenu.drawImage(img, 0, 0, img.width, img.height, 0, 0, menu.width, menu.height);
        lienzoScore.font = '30px WallApp';

        for (var i = 0; i < mejoresPuntuaciones.length; i++) {
            if (i == 0) lienzoScore.fillStyle = '#ffcc00'
            else if (i == 1) lienzoScore.fillStyle = '#808080'
            else if (i == 2) lienzoScore.fillStyle = '#994d00'
            else lienzoScore.fillStyle = '#000000'
            if (i < 10) lienzoScore.fillText(mejoresPuntuaciones[i].nombre + ": " + mejoresPuntuaciones[i].puntuacion, anchoBotCanvas / 2 - 150, i * 45 + 416);
        }
    };
}

function drawOpciones() {
    var img = new Image();

    if (languajeSelected === 1 && mute) {
        img.src = "Assets/opcionesEnglishDisabled.png"
    } else if (languajeSelected === 0 && mute) {
        img.src = "Assets/opcionesEspDesactivado.png"
    } else if (languajeSelected === 1 && !mute) {
        img.src = "Assets/opcionesEnglishEnabled.png"
    } else if (languajeSelected === 0 && !mute) {
        img.src = "Assets/opcionesEspActivado.png"
    }


    img.onload = function () {
        cmenu.drawImage(img, 0, 0, img.width, img.height, 0, 0, menu.width, menu.height);
    };
}

function drawCredits() {
    var img = new Image();

    if (languajeSelected === 1) {
        img.src = "Assets/AA_Creditos_eng.png"
    } else if (languajeSelected === 0) {
        img.src = "Assets/AA_Creditos_esp.png"
    }

    img.onload = function () {
        cmenu.drawImage(img, 0, 0, img.width, img.height, 0, 0, menu.width, menu.height);
    };
}


function drawGameOver() {
    var img = new Image();

    if (languajeSelected === 1) {
        img.src = "Assets/AA_Game_Over_Eng.png"
    } else if (languajeSelected === 0) {
        img.src = "Assets//AA_Game_Over_Esp.png"
    }

    img.onload = function () {
        cmenu.drawImage(img, 0, 0, img.width, img.height, 0, 0, menu.width, menu.height);

        ///////////////////////////////////////////////////////////// PINTAR LA PUNTACION DE LA PARTIDA //////////////////////////////////////////

        //lienzoScore.fillText(mejoresPuntuaciones[i].nombre + ": " + mejoresPuntuaciones[i].puntuacion, anchoBotCanvas / 2 - 150, i * 45 + 416);
        /*
        lienzoScore.font = '40px WallApp';
        lienzoScore.fillText(userName + ": ", anchoBotCanvas / 2 - 200, i * 45 + 120);
        lienzoScore.font = '60px WallApp';
        window.alert("la longitud de user name es" + userName.length)
        lienzoScore.fillText(score, anchoBotCanvas / 2 - 20 + userName.length, i * 45 + 120);
        lienzoScore.font = '40px WallApp';
        if (score < 100)
            lienzoScore.fillText("PTS", anchoBotCanvas / 2 + 50 + userName.length, i * 45 + 120);
            
        if (score>=100 && score <1000)
            lienzoScore.fillText("PTS", anchoBotCanvas / 2 + 80 + userName.length, i * 45 + 120);
        
        if(score >= 1000 && score <10000)
            lienzoScore.fillText("PTS", anchoBotCanvas / 2 + 110 + userName.length, i * 45 + 120);
        if(score >=10000)
            lienzoScore.fillText("PTS", anchoBotCanvas / 2 + 110 + userName.length, i * 45 + 120);
            */
        lienzoScore.font = '40px WallApp';
        lienzoScore.fillText(userName + ": " + score, anchoBotCanvas / 2 - 200, i * 45 + 120);



    };
}

// Botones que serán empleados para avanzar entre estados.
var botonJugar = new Button(110, 381, 371, 447);
var botonScore = new Button(110, 381, 475, 550);
var botonOpciones = new Button(110, 381, 575, 650);
var botonCreditos = new Button(110, 381, 675, 750);
var botonIdioma = new Button(110, 381, 437, 507)
var botonMute = new Button(110, 381, 671, 741)

var botonReplay = new Button(110, 381, 615, 674);
var botonBackMenu = new Button(110, 381, 706, 763);
var botonCerrar = new Button(22, 168, 15, 60);

var boton1 = new Button(284, 500, 147, 207);



function mouseCliked(e) {
    mouseX = e.pageX - menu.offsetLeft;
    mouseY = e.pageY - menu.offsetTop;
    if (botonJugar.checkClicked() && curretStateId === 0) {
        gameStates.currentState = gameStates.startGame();
        gameStates.currentState;
    }
    if (botonScore.checkClicked() && curretStateId === 0) {
        gameStates.currentState = gameStates.showScore();
        gameStates.currentState;
    }
    if (botonOpciones.checkClicked() && curretStateId === 0) {
        gameStates.currentState = gameStates.showOptions();
        gameStates.currentState;
    }
    if (botonCreditos.checkClicked() && curretStateId === 0) {
        gameStates.currentState = gameStates.showCredits();
        gameStates.currentState;
    }
    if (botonCerrar.checkClicked() && (curretStateId > 1 || curretStateId < 5)) {
        gameStates.currentState = gameStates.menuSetup();
        gameStates.currentState;
    }
    if (botonBackMenu.checkClicked() && curretStateId === 5) {
        playing = false;
        gameStates.currentState = gameStates.setUp();
        gameStates.currentState;
    }
    if (botonReplay.checkClicked() && curretStateId === 5) {
        gameStates.currentState = gameStates.startGame();
        gameStates.currentState;
    }
    if (botonIdioma.checkClicked() && curretStateId === 3) {
        if (languajeSelected == 0) {
            languajeSelected = 1;
        } else if (languajeSelected == 1) {
            languajeSelected = 0;
        }
        drawOpciones();
    }
    if (botonMute.checkClicked() && curretStateId === 3) {
        if (mute) {
            mute = false;
            var audio = document.getElementById('cancion_fondo');
            audio.src = 'musica/Dueto Rains of Castamere.mp3';
            audio.load();
            audio.volume = 0.1;
            audio.play();
        } else {
            mute = true;
            var audio = document.getElementById('cancion_fondo');
            audio.pause();

        }

        drawOpciones();

    }


}

function Button(xL, xR, yT, yB) {
    this.xLeft = xL;
    this.xRight = xR;
    this.yTop = yT;
    this.yBotton = yB;
}



Button.prototype.checkClicked = function () {
    if (this.xLeft <= mouseX && mouseX <= this.xRight && this.yTop <= mouseY && mouseY <= this.yBotton)
        return true
};



/////////////////////////////////////////////////////// VARIABLE MEJORES PUNTUACIONES ////////////////


function puntuacionNombre(nombre, puntuacion) {
    this.nombre = nombre;
    this.puntuacion = puntuacion;
}



function Button(xL, xR, yT, yB) {
    this.xLeft = xL;
    this.xRight = xR;
    this.yTop = yT;
    this.yBotton = yB;
}



var Player = function () {

    this.x = anchoBotCanvas / 2 - 50;
    this.y = altoBotCanvas - 150;

    this.x_vel = 0;
    this.y_vel = 0;

    this.isDead = false;

    this.ancho = 50;
    this.alto = 63;


    this.jumping = true;
    this.saltado = true;

    this.spriteState = 0;

};

var player = new Player();

function Platform() {
    this.ancho = 100;
    this.alto = 30;

    this.x = Math.random() * (anchoBotCanvas - this.ancho);
    this.y = position;

    this.vx = Math.round(Math.random()); //Velocidad positiva o negativa, se refleja como 0 o 1, en caso de ser 0 se moficiará

    if (this.vx == 0) this.vx = -1; //Si la velocidad ha salido 0, la ponemos a -1

    this.puntuado = false;
    this.saltado = false;

    position += (altoBotCanvas / platformCount);


    if (score > 2500) {
        this.probabilidad = [0, 0, 1, 1, 2, 2, 2];
        if (newLevel == 3) {
            setDificultad();
            newLevel++;
        }
    } else if (score > 1500) {
        this.probabilidad = [0, 0, 1, 1, 2, 2];
        if (newLevel == 2) {
            setDificultad();
            newLevel++;
        }
    } else if (score > 250) {
        this.probabilidad = [0, 0, 0, 1, 2, 2];
        if (newLevel == 1) {
            setDificultad();
            newLevel++;
        }
    } else if (score > 100) {
        this.probabilidad = [0, 0, 0, 1, 2];
        if (newLevel == 0) {
            setDificultad();
            newLevel++;
        }
    } else {
        this.probabilidad = [0];
    }
    //Una vez tenemos la probabilidad, la asignamos sobre el tipo
    this.type = this.probabilidad[Math.floor(Math.random() * this.probabilidad.length)];

};

for (var i = 0; i < platformCount; i++) {
    plataformas.push(new Platform());
}



player.x = plataformas[plataformas.length - 1].x + 20;
player.y = plataformas[plataformas.length - 1].y - player.alto + 10;



var enemy = function () {

    // Set cube size
    this.x = 150;
    this.y = 40;
    this.width = 36;
    this.height = 65;

    // Direction: True -> / False <- 
    this.vx = true;

    // Projectile array, just one arrow at the same time
    this.attack = [];

    // Main method to control enemy IA

    this.drawEnemy = function () {

        // Move the character through the canvas
        this.move();

        // Projectile generation
        //setTimeout(this.shoot.bind(this), 5000);
        this.shoot();

        // Draw in the top canvas
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(espania, 0, 0, this.width, this.height, this.x, this.y, 36, 65);

        // Draw projectiles
        this.attack.forEach(function (arrow) {
            arrow.draw();
            arrow.collision(player);
        });

        // Delete the arrow as it leaves the bottom canvas 
        if (this.attack.length > 0) {
            if (!this.attack[0].existence) {
                this.attack.pop();
            }
        }

    }


    // Increase or decrease X pos as direction marks
    this.move = function () {

        if (this.vx) {
            this.x++;
        } else if (!this.vx) {
            this.x--;
        }
        this.checkPos();

    }

    // Check pos in canvas to set direction
    this.checkPos = function () {
        if (this.vx && (this.x + this.width) >= 500) {
            this.vx = false;
        } else if (!this.vx && this.x <= 0) {
            this.vx = true;
        }
    }

    this.shoot = function () {

        if (this.attack.length < 1) {
            this.attack.push(new arrow((this.x + 25), (this.y + 50), 3));
        }
    }

}

function arrow(positionX, positionY, vY) {

    // Public
    this.posX = positionX;
    this.posY = positionY;
    this.posYbelow = 0;
    this.vy = vY;

    this.projectileWidth = 21;
    this.projectileHeight = 16;

    this.posCanvas = false;
    this.existence = true;


    this.fall = function () {
        if (this.posCanvas) {
            this.posYbelow += this.vy;
        } else if (!this.posCanvas) {
            this.posY += this.vy;
        }
    }

    this.draw = function () {

        // Draw the arrow in both canvas and set delay between them
        if (this.posY < altoTopCanvasight && this.posYbelow <= altoBotCanvas) {
            // Top canvas
            this.fall();
            ctx.drawImage(espanha, 0, 0, this.projectileWidth, this.projectileHeight, this.posX, this.posY, 21, 16);

            // Collider
            ctx.rect(this.posX, this.posY, this.projectileWidth, this.proejctileHeight);
            ctx.stroke();

        } else if (this.posY > altoTopCanvasight && this.posYbelow <= altoBotCanvas) {

            if (!this.posCanvas) {
                // Transition
                setTimeout(this.cloudDelay.bind(this), 3000);
            } else {
                // Bottom canvas
                this.fall();
                lienzo.drawImage(espanha, 0, 0, this.projectileWidth, this.projectileHeight, this.posX, this.posYbelow, 21, 16);
               
                // Collider
                lienzo.rect(this.posX, this.posYbelow, this.projectileWidth, this.proejctileHeight);
                lienzo.stroke();
            }

        } else {
            // Delete arrow
            this.existence = false;
        }

    }

    this.cloudDelay = function () {
        this.posCanvas = true;
    }


    this.collision = function (player) {
        if (playing) {
            if (player.x < this.posX && (player.x + player.ancho) > (this.posX + this.projectileWidth) &&
                (this.posYbelow + this.projectileHeight > player.y) && (this.posYbelow + this.projectileHeight) < (player.y + player.alto + 10)) {
                sonidoChoquePiedra.play();
                this.existence = false;
                gravity = 0.5;
                player.isDead = true;
            }
        }
    }
}

var enem = new enemy;





function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        android = true;

        document.getElementsByClassName("canvas").style.height = "auto";
        document.getElementsByClassName("canvas").style.width = "100%";
        /*
        document.getElementById("lienzo").style.height = "auto";
        document.getElementById("lienzo").style.width = "100%";
        */
        //document.documentElement.requestFullscreen();
        //window.scrollTo(0,1);


        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}



function pintaPersonaje(boolAux) {
    lienzo.drawImage(background, 0, 0);
    ctx.drawImage(topBackgorund, 0, 0);
    gestionPuntuacion();
    if (player.spriteState == 0) lienzo.drawImage(jon, player.x, player.y);
    if (player.spriteState == 1) lienzo.drawImage(jonLeft, player.x, player.y);
    if (player.spriteState == 2) lienzo.drawImage(jonRight, player.x, player.y);
    if (player.spriteState == 3) lienzo.drawImage(jonDragon, player.x - 150, player.y - 62);
    if (player.spriteState == 4) lienzo.drawImage(powerup2Sprite, player.x, player.y);
    if (player.spriteState == 4 && controller.left || androidIzquierda) lienzo.drawImage(powerup2SpriteI, player.x, player.y);
    if (player.spriteState == 4 && controller.right || androidDerecha) lienzo.drawImage(powerup2SpriteD, player.x, player.y);
    if (player.spriteState == 5) lienzo.drawImage(powerup3Sprite, player.x, player.y);
    if (player.spriteState == 5 && controller.left || androidIzquierda) lienzo.drawImage(powerup3SpriteI, player.x, player.y);
    if (player.spriteState == 5 && controller.right || androidDerecha) lienzo.drawImage(powerup3SpriteD, player.x, player.y);

    if (powerup.type == 0 && !isPowerUp) lienzo.drawImage(dragonSprite, powerup.x, powerup.y);
    else if (powerup.type == 1 && !isPowerUp) lienzo.drawImage(powerup2, powerup.x, powerup.y);
    else if (powerup.type == 2 && !isPowerUp) lienzo.drawImage(powerup3, powerup.x, powerup.y);

}

function pintaPlataformas() {

    for (var i = 0; i < platformCount; i++) {
        var aux = plataformas[i];
        if (!plataformas[i].saltado && plataformas[i].type == 1 || plataformas[i].type == 0) lienzo.drawImage(
            plataformasImg, plataformas[i].x, plataformas[i].y);
        else if (plataformas[i].type == 2 && !plataformas[i].saltado) lienzo.drawImage(plataformasImg2, plataformas[i].x,
            plataformas[i].y);

    }
}



function gestionColisiones() {
    if (playing && !player.isDead) {
        for (var i = 0; i < plataformas.length; i++) {
            var auxPlat = plataformas[i];
            if (player.y_vel > 0 && (player.x + 15 < auxPlat.x + auxPlat.ancho) && (player.x + player.ancho -
                    15 > auxPlat.x) &&
                (player.y + player.alto > auxPlat.y) && (player.y + player.alto < auxPlat.y + auxPlat.alto)) {
                if (!auxPlat.saltado) {
                    if (doubleJump || invertContols) {
                        if (doubleJump) {
                            player.y_vel = 2 * vy;
                            sonidoSaltoLargo.play();
                        }
                        if (invertContols) {
                            sonidoSalto.play();
                            player.y_vel = vy;
                        }
                        jumpCounter--;
                    } else {
                        player.y_vel = vy;
                        sonidoSalto.play();
                    }
                }

                if (auxPlat.type == 2) {
                    plataformas[i].saltado = true;
                }

                if (!auxPlat.puntuado) {
                    if (!player.isDead) {
                        score += 10;
                    }
                    plataformas[i].puntuado = true;
                }

                if (jumpCounter == 0) {

                    doubleJump = false;
                    invertContols = false;

                    jumpCounter = 3;
                    player.spriteState = 0;

                    specialSprites = false;
                    isPowerUp = false;
                }

            }

            player.saltado = true;

            //Colisiones con los power ups
            if (player.y_vel > 0 && powerup.x > player.x && (powerup.x + powerup.ancho) < (player.x + player.ancho) &&
                (powerup.y > player.y) && (powerup.y + powerup.alto < player.y + player.alto)
            ) {

                if (powerup.type == 0 && !isPowerUp) {
                    player.y_vel = -20;
                    gravity = 0.1;
                    sonidoDragon.play();
                    dragonSprite.src = "Assets/PowerUp/pu2.png";


                    player.spriteState = 3;

                    specialSprites = true;
                    isPowerUp = true;

                    if (!player.isDead) score += 50;

                    //Intervalo para el PU
                    function intervalTrigger() {
                        return window.setInterval(function () {
                            puType = Math.round(Math.random() * 2);
                            gravity = 0.2;
                            dragonSprite.src = "Assets/PowerUp/pu1.png";

                            window.clearInterval(id);
                        }, 800);
                    };

                    function spriteChanger() {
                        return window.setInterval(function () {
                            player.spriteState = 0;
                            isPowerUp = false;
                            specialSprites = false;
                            window.clearInterval(id2);
                        }, 1500);
                    };
                    var id = intervalTrigger();
                    var id2 = spriteChanger();


                } else if (powerup.type == 1 && !isPowerUp) {
                    sonidoPowerUp.play();
                    powerup2.src = "pu2.png";

                    doubleJump = true;

                    player.spriteState = 4;

                    //specialSprites = true;
                    isPowerUp = true;

                    if (!player.isDead) score += 50;

                    //Intervalo para el PU
                    function intervalTrigger() {
                        return window.setInterval(function () {
                            puType = Math.round(Math.random() * 2);
                            powerup2.src = "Assets/PowerUp/purplePowerup.png";

                            window.clearInterval(id);
                        }, 800);
                    };
                    var id = intervalTrigger();

                } else if (powerup.type == 2 && !isPowerUp) {

                    powerup3.src = "pu2.png";

                    invertContols = true;
                    player.spriteState = 5;
                    jumpCounter = 5;

                    isPowerUp = true;

                    //Intervalo para el PU
                    function intervalTrigger() {
                        return window.setInterval(function () {
                            puType = Math.round(Math.random() * 3);
                            powerup3.src = "Assets/PowerUp/bluePowerup.png";
                            window.clearInterval(id);
                        }, 800);
                    };
                    var id = intervalTrigger();
                }
            }
        }
    }
}


function reset() {

    playing = true;
    position = 0;
    score = 0;
    gravity = 0.2;
    player.isDead = false;

    newLevel = 0;
    jumpCounter = 0;
    isPowerUp = false;
    specialSprites = false;
    doubleJump = false;
    invertContols = false;

    player = new Player();

    enem = new enemy();
    plataformas = [];
    for (var i = 0; i < platformCount; i++) {
        plataformas.push(new Platform());
    }

    //Para que el jugador salga en una plataforma determinada
    player.x = plataformas[7].x + plataformas[7].ancho / 2;
    player.y = plataformas[7].y - player.alto - 10;

}


function gameOver() {

    player.x = -player.ancho - 10;
    player.y = -100;
    player.y_vel = 0;
    gravity = 0;

    sonidoMuerte.play();

    player.isDead = "fifty";

    if (playing) {
        gameStates.currentState = gameStates.gameOver();
        gameStates.currentState;
    }

}


function gestionPowerUp() {


    if (plataformas[0].type == 0 || plataformas[0].type == 1) {
        powerup = {
            ancho: 25,
            alto: 25,
            render: true,
            type: puType,

            x: plataformas[2].x + plataformas[2].ancho / 2 - 25 / 2,
            y: plataformas[2].y - plataformas[2].alto,
        }
    } else {
        powerup = {
            ancho: 25,
            alto: 25,
            render: false,
            type: -1,

            x: -25,
            y: -25,
        }
    }

}

function setDificultad() {

    document.getElementById("levelup").style.top = $("#lienzo").offset().top + 25 + "px";
    document.getElementById("levelup").style.left = $("#lienzo").offset().left + 75 + "px";
    document.getElementById("levelup").style.display = 'block'

    function intervalTrigger() {
        return window.setInterval(function () {
            document.getElementById("levelup").style.display = 'none'
            window.clearInterval(id);
        }, 1000);
    };
    var id = intervalTrigger();
}

function gestionPuntuacion() {
    lienzo.font = "30px Impact";
    lienzo.fillText(score, 10, 590);


}

//Controlador de las movidas de teclado
controller = {


    left: false,
    right: false,
    up: false,


    keyListener: function (event) {

        var key_state = (event.type == "keydown") ? true : false;
        if (playing) {
            switch (event.keyCode) {

                case 37: //Flecha izquierda
                    controller.left = key_state;
                    break;
                case 38: //Flecha derecha
                    controller.up = key_state;
                    break;
                case 39: //Flecha de salto.
                    controller.right = key_state;
                    break;

            }
        }
    }
};

loop = function () {


    if (playing) {

        //Gestión de la velocidad y de los sprites:

        if (controller.left || androidIzquierda && !specialSprites) {
            if (!isPowerUp) player.spriteState = 1;
            if (invertContols) player.x_vel += vx;
            else player.x_vel -= vx;
        } else if (controller.right || androidDerecha && !specialSprites) {
            if (!isPowerUp) player.spriteState = 2;
            if (invertContols) player.x_vel -= vx;
            else player.x_vel += vx;
        } else if (!specialSprites) {
            if (!isPowerUp) player.spriteState = 0;
        }

        //Gestión del movimiento del personaje:
        if (player.y >= (altoBotCanvas / 2) - (player.alto / 2)) {
            player.y += player.y_vel;
            player.y_vel += gravity;
        } else {
            plataformas.forEach(function (p, i) {

                if (player.y_vel < 0) {
                    p.y -= player.y_vel;
                    if (this.enem.attack[0] != null) {
                        // Primero determinamos si se está pintando por abajo
                        if (this.enem.attack[0].posYbelow <= 0) {} else {
                            this.enem.attack[0].posYbelow -= (player.y_vel / 10);
                        }
                    }
                }

                if (p.y > altoBotCanvas) {
                    plataformas[i] = new Platform();
                    plataformas[i].y = p.y - altoBotCanvas;
                }

            });

            player.y_vel += gravity;

            if (player.y_vel >= 0) {
                player.y += player.y_vel;
                player.y_vel += gravity;
            }
        }

        plataformas.forEach(function (p, i) {
            if (p.type == 1) {
                if (p.x < 0 || p.x + p.ancho > anchoBotCanvas) {
                    p.vx *= -1;
                }
                p.x += p.vx;
            }
        });


        player.x += player.x_vel;

        player.x_vel *= 0.9; //Eje X

        //Si se sale por la parte izquierda del canvas...
        if (player.x < -32) {
            player.x = 520;
        } else if (player.x > 520) {
            //Si se sale por laparte derecha...
            player.x = -32;
        }

        if (player.y > 580 && player.isDead != "fifty") {
            player.isDead = "true";
        }

        if (player.isDead == "true") gameOver();

    }


    lienzo.clearRect(0, 0, bCanvas.width, bCanvas.height);
    ctx.clearRect(0, 0, anchoBotCanvas, altoBotCanvas);

    console.log(isPowerUp);
    gestionPowerUp();
    gestionColisiones()
    pintaPersonaje();
    enem.drawEnemy();
    pintaPlataformas();
    window.requestAnimationFrame(loop);

}

function sortNumber(a, b) {
    return b.puntuacion - a.puntuacion;
}

function orientation(event) {
    if (playing) {
        if (event.gamma > 5) {
            androidDerecha = true;
        } else {
            androidDerecha = false;
        }
        if (event.gamma < -5) {
            androidIzquierda = true;
        } else {
            androidIzquierda = false;
        }
    }
}

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", orientation, false);
} else {
    console.log("DeviceOrientationEvent is not supported");
}

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.screen.orientation.lock("portrait-primary");
window.requestAnimationFrame(loop);