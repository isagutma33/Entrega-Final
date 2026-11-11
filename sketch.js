let foto;

// 0 = inicio
// 1 = LA CURA
// 2 = SIFRINITA
// 3 = MADRID
// 4 = 911
// 5 = IBIZA

let pantalla = 0;
let recuerdo = 0;

async function setup() {
  // Crea el espacio donde vamos a dibujar.
  // 900 es el ancho y 650 es el alto.
  createCanvas(900, 650);

  // Define la tipografía de los textos.
  textFont("Arial");

  foto = await loadImage("assets/images.jpeg");
}

function draw() {
  background(248, 242, 229);

  noStroke();
  textAlign(LEFT, TOP);

  if (pantalla === 0) {
    image(foto, 45, 135, 300, 300);

    fill(180, 40, 50);
    textSize(13);
    text("UN UNIVERSO MUSICAL PARA EXPLORAR", 45, 25);

    fill(30);
    textSize(45);
    text("ALEJANDRO SAAVEDRA", 45, 55);

    textSize(17);
    text("Conoce sus historias a través de su música.", 45, 115);

    textSize(13);
    text("ALEJANDRO / SU UNIVERSO", 60, 440);

    fill(180, 40, 50);
    textSize(24);
    text("DETRÁS DE LAS CANCIONES", 345, 175);

    fill(30);
    textSize(18);
    text(
      "Una invitación a conocer a Alejandro Saavedra a través de cinco canciones de su álbum El malo soy yo x tener corazón.",
      345, 220, 490, 110
    );

    textSize(16);
    text(
      "Deseo, recuerdos, encuentros y fiestas. Escoge una canción para descubrir su historia.",
      345, 345, 490, 70
    );

    fill(180, 40, 50);
    rect(45, 460, 810, 3);

    fill(30);
    textSize(20);
    text("EXPLORA SUS CANCIONES", 45, 480);

    fill(180, 40, 50);
    rect(45, 525, 150, 50, 8);
    rect(210, 525, 150, 50, 8);
    rect(375, 525, 150, 50, 8);
    rect(540, 525, 150, 50, 8);
    rect(705, 525, 150, 50, 8);

    fill(255);
    textSize(16);
    textAlign(CENTER, CENTER);
    text("LA CURA", 120, 550);
    text("SIFRINITA", 285, 550);
    text("MADRID", 450, 550);
    text("911", 615, 550);
    text("IBIZA", 780, 550);

    textAlign(LEFT, TOP);
    fill(80);
    textSize(13);
    text("Cinco historias distintas dentro de un mismo universo.", 45, 605);
  } else {
    fill(180, 40, 50);
    rect(45, 30, 160, 45, 8);

    fill(255);
    textSize(15);
    textAlign(CENTER, CENTER);
    text("VOLVER AL INICIO", 125, 52);

    textAlign(LEFT, TOP);
    fill(30);
    textSize(42);

    const canciones = ["LA CURA", "SIFRINITA", "MADRID", "911", "IBIZA"];
    text(canciones[pantalla - 1], 45, 120);

       // Espacio provisional de las otras canciones.
    if (pantalla > 1) {
      fill(220, 211, 193);
      rect(45, 200, 810, 330);

      fill(80);
      textSize(18);
      text(
        "Aquí irán las imágenes y los objetos de esta canción.",
        75, 340
      );
    }

    // ESCENA DE LA CURA
    if (pantalla === 1) {

      // Instrucción para el visitante.
      fill(80);
      textSize(16);
      text("Toca una fotografía para descubrir un recuerdo.", 45, 175);

      // Marcos blancos de las tres fotografías.
      fill(255);
      rect(60, 220, 230, 250);
      rect(335, 220, 230, 250);
      rect(610, 220, 230, 250);

      // Espacios donde después irán las imágenes.
      fill(210, 193, 175);
      rect(70, 230, 210, 190);

      fill(185, 160, 150);
      rect(345, 230, 210, 190);

      fill(205, 175, 165);
      rect(620, 230, 210, 190);

      // Nombres debajo de las fotografías.
      fill(30);
      textSize(15);
      textAlign(CENTER, CENTER);

      text("EL REENCUENTRO", 175, 445);
      text("EL DESEO", 450, 445);
      text("EL APEGO", 725, 445);

      textAlign(LEFT, TOP);

      // Una línea roja señala la fotografía seleccionada.
      fill(180, 40, 50);

      if (recuerdo === 1) {
        rect(60, 480, 230, 4);
      }

      if (recuerdo === 2) {
        rect(335, 480, 230, 4);
      }

      if (recuerdo === 3) {
        rect(610, 480, 230, 4);
      }

      // Texto que aparece según la fotografía seleccionada.
      fill(30);
      textSize(18);

      if (recuerdo === 0) {
        text(
          "Hay vínculos que siguen presentes en los recuerdos.",
          60, 520, 780, 90
        );
      }

      if (recuerdo === 1) {
        text(
          "Volver a ver a esa persona hace que regresen emociones que parecían guardadas.",
          60, 520, 780, 90
        );
      }

      if (recuerdo === 2) {
        text(
          "El encuentro deja ver que todavía existe atracción y ganas de acercarse.",
          60, 520, 780, 90
        );
      }

      if (recuerdo === 3) {
        text(
          "Esa persona aparece como una contradicción: un mal necesario y, al mismo tiempo, una cura.",
          60, 520, 780, 90
        );
      }
    }
  }
}

function mousePressed() {

  // Revisamos los botones si estamos en el inicio.
  if (pantalla === 0) {

    // Todos los botones están en esta misma franja vertical.
    if (mouseY > 525 && mouseY < 575) {

      // LA CURA
      if (mouseX > 45 && mouseX < 195) {
        pantalla = 1;
      }

      // SIFRINITA
      else if (mouseX > 210 && mouseX < 360) {
        pantalla = 2;
      }

      // MADRID
      else if (mouseX > 375 && mouseX < 525) {
        pantalla = 3;
      }

      // 911
      else if (mouseX > 540 && mouseX < 690) {
        pantalla = 4;
      }

      // IBIZA
      else if (mouseX > 705 && mouseX < 855) {
        pantalla = 5;
      }
    }

  } else {

        // Detectamos los clics en las fotografías de LA CURA.
    if (pantalla === 1) {

      // Las tres fotografías ocupan la misma franja vertical.
      if (mouseY > 220 && mouseY < 470) {

        if (mouseX > 60 && mouseX < 290) {
          recuerdo = 1;
        }

        else if (mouseX > 335 && mouseX < 565) {
          recuerdo = 2;
        }

        else if (mouseX > 610 && mouseX < 840) {
          recuerdo = 3;
        }
      }
    }

    // En una canción, revisamos el botón para volver.
    if (
      mouseX > 45 && mouseX < 205 &&
      mouseY > 30 && mouseY < 75
    ) {
      pantalla = 0;
      recuerdo = 0;
    }
  }
}