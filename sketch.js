let foto;

// 0 = inicio
// 1 = LA CURA
// 2 = SIFRINITA
// 3 = MADRID
// 4 = 911
// 5 = IBIZA

let pantalla = 0;
let recuerdo = 0;
let fraseSifrinita = false;
let labialX = 100;
let labialY = 400;
let arrastrandoLabial = false;
let desplazamientoLabialX = 0;
let desplazamientoLabialY = 0;
let estrellaX = 100;
let estrellaY = 330;
let arrastrandoEstrella = false;
let recorridoMadrid = 0;
let corazonX = 360;
let corazonY = 360;
let arrastrandoCorazon = false;
let corazonEntregado = false;
let personaEncontrada = false;

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

  

    // Las escenas de las canciones son las pantallas 1 a 5.
  if (pantalla >= 1 && pantalla <= 5) {
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

       // ESCENA DE IBIZA
    if (pantalla === 5) {

      // Instrucción.
      fill(80);
      textSize(16);
      text(
        "Explora la fiesta con el foco. Haz clic en quien destaca.",
        45, 175
      );

      // Fondo oscuro de la fiesta.
      fill(35, 28, 48);
      rect(45, 215, 810, 280);

      // Luces decorativas.
      fill(90, 45, 100);
      circle(160, 265, 70);

      fill(125, 45, 80);
      circle(430, 260, 85);

      fill(80, 55, 110);
      circle(740, 270, 65);

      // Personas del fondo.
      fill(85, 75, 100);

      circle(180, 345, 45);
      rect(155, 375, 50, 95, 10);

      circle(340, 330, 45);
      rect(315, 360, 50, 110, 10);

      circle(500, 350, 45);
      rect(475, 380, 50, 90, 10);

      // Persona que vamos a encontrar.
      // Primero aparece en un tono oscuro.
      fill(100, 65, 85);
      circle(680, 340, 50);
      rect(652, 375, 56, 95, 10);

      // Mientras no la encontremos, el foco sigue al mouse.
      if (personaEncontrada === false) {

        // El foco aparece solamente dentro de la fiesta.
        if (
          mouseX > 120 && mouseX < 780 &&
          mouseY > 290 && mouseY < 420
        ) {
          // El cuarto número controla la transparencia.
          fill(255, 225, 150, 90);
          circle(mouseX, mouseY, 150);
        }

        // Si el mouse pasa sobre ella, se ilumina.
        if (
          mouseX > 640 && mouseX < 720 &&
          mouseY > 300 && mouseY < 420
        ) {
          fill(230, 100, 110);
          circle(680, 340, 50);
          rect(652, 375, 56, 95, 10);

          fill(255);
          textSize(13);
          text("HAZ CLIC", 650, 280);
        }

      } else {

        // Una vez encontrada, la luz queda fija sobre ella.
        fill(255, 225, 150, 90);
        circle(680, 365, 200);

        // Dibujamos nuevamente a la persona iluminada.
        fill(230, 100, 110);
        circle(680, 340, 50);
        rect(652, 375, 56, 95, 10);
      }

      // Texto debajo de la escena.
      fill(30);
      textSize(18);

      if (personaEncontrada === false) {
        text(
          "Entre tantas personas, alguien llama su atención.",
          45, 530, 800, 80
        );
      } else {
        fill(180, 40, 50);
        textSize(24);
        text("ENTRE TODOS, ELLA", 45, 525);

        fill(30);
        textSize(17);
        text(
          "En medio de la fiesta, una persona destaca entre las demás. La canción cuenta esa atracción y las ganas de acercarse.",
          45, 565, 800, 65
        );
      }
    }

    // ESCENA DE 911
    if (pantalla === 4) {

      // Instrucción.
      fill(80);
      textSize(16);
      text(
        "Arrastra el corazón hasta ella y suéltalo en el recuadro.",
        45, 175
      );

      // Fondo de la escena.
      fill(235, 215, 205);
      rect(45, 215, 810, 280);

      // Zona donde debemos soltar el corazón.
      // Dibujamos el recuadro antes que los personajes.
      noFill();
      stroke(180, 40, 50);
      strokeWeight(2);
      rect(590, 250, 140, 220, 12);
      noStroke();

      // Personaje izquierdo.
      fill(45);
      circle(260, 290, 55);
      rect(230, 325, 60, 100, 10);

      // Piernas.
      stroke(45);
      strokeWeight(8);
      line(245, 420, 235, 460);
      line(275, 420, 285, 460);
      noStroke();

      // Personaje derecho.
      fill(180, 40, 50);
      circle(660, 290, 55);
      rect(630, 325, 60, 100, 10);

      stroke(180, 40, 50);
      strokeWeight(8);
      line(645, 420, 635, 460);
      line(675, 420, 685, 460);
      noStroke();

      // Corazón: dos círculos y un triángulo.
      // Todas sus partes dependen de la misma posición.
      fill(220, 45, 65);

      circle(corazonX - 15, corazonY - 10, 40);
      circle(corazonX + 15, corazonY - 10, 40);

      triangle(
        corazonX - 34, corazonY,
        corazonX + 34, corazonY,
        corazonX, corazonY + 40
      );

      // Texto debajo de la escena.
      fill(30);
      textSize(18);

      if (corazonEntregado === false) {
        text(
          "Una atracción tan intensa que se siente como una emergencia.",
          45, 530, 800, 80
        );
      } else {
        fill(180, 40, 50);
        textSize(24);
        text("ELLA LE ROBÓ EL CORAZÓN", 45, 525);

        fill(30);
        textSize(17);
        text(
          "La canción presenta la atracción como una emergencia amorosa: alguien que se lleva toda su atención.",
          45, 565, 800, 65
        );
      }
    }

    // ESCENA DE MADRID
    if (pantalla === 3) {

      fill(80);
      textSize(16);
      text(
        "Toma la estrella y arrástrala hacia la derecha.",
        45, 175
      );

      // Cielo nocturno.
      fill(40, 45, 75);
      rect(45, 215, 810, 280);

      // Pequeños puntos de luz.
      fill(255, 240, 195);
      circle(100, 250, 4);
      circle(240, 340, 5);
      circle(380, 245, 4);
      circle(550, 330, 4);
      circle(680, 250, 5);
      circle(800, 360, 4);

      // Personaje izquierdo.
      fill(230, 220, 205);
      circle(370, 405, 35);
      rect(350, 428, 40, 55, 8);

      // Personaje derecho.
      fill(180, 40, 50);
      circle(530, 405, 35);
      rect(510, 428, 40, 55, 8);

      // Palabras que permanecen después de descubrirlas.
      fill(255, 240, 195);
      textSize(18);

      if (recorridoMadrid >= 1) {
        text("RECUERDO", 230, 360);
      }

      if (recorridoMadrid >= 2) {
        text("REENCUENTRO", 420, 270);
      }

      if (recorridoMadrid >= 3) {
        text("DESPEDIDA", 650, 350);
      }

      // Estrella provisional formada por dos triángulos.
      fill(245, 205, 100);

      triangle(
        estrellaX, estrellaY - 30,
        estrellaX - 27, estrellaY + 17,
        estrellaX + 27, estrellaY + 17
      );

      triangle(
        estrellaX, estrellaY + 30,
        estrellaX - 27, estrellaY - 17,
        estrellaX + 27, estrellaY - 17
      );

      // Texto debajo de la escena.
      fill(30);
      textSize(18);

      if (recorridoMadrid < 3) {
        text(
          "Mueve la estrella para descubrir lo que dejó ese encuentro.",
          45, 530, 800, 80
        );
      } else {
        text(
          "El regreso de esa persona demuestra que el recuerdo sigue presente, junto con la posibilidad de otra despedida.",
          45, 530, 800, 90
        );
      }
    }

    // ESCENA DE SIFRINITA
    if (pantalla === 2) {

      // Instrucción.
      fill(80);
      textSize(16);
      text(
        "Arrastra el labial hasta la franja para descubrir el mensaje.",
        45, 175
      );

      // Fondo del espacio de baile.
      fill(230, 202, 199);
      rect(45, 215, 810, 250);

      // Luces decorativas.
      fill(245, 220, 180);
      circle(180, 270, 75);
      circle(700, 280, 100);

      // Primer personaje provisional.
      fill(45);
      circle(350, 290, 50);
      rect(325, 320, 50, 85, 10);

      // Brazos y piernas.
      stroke(45);
      strokeWeight(8);
      line(330, 335, 300, 365);
      line(370, 335, 400, 310);
      line(338, 400, 320, 440);
      line(362, 400, 380, 440);

      // Segundo personaje provisional.
      noStroke();
      fill(180, 40, 50);
      circle(530, 290, 50);
      rect(505, 320, 50, 85, 10);

      stroke(180, 40, 50);
      strokeWeight(8);
      line(510, 335, 480, 310);
      line(550, 335, 580, 365);
      line(518, 400, 500, 440);
      line(542, 400, 560, 440);
      noStroke();

      // Franja donde se revela la frase.
      fill(255);
      rect(260, 490, 550, 65, 8);

      textAlign(CENTER, CENTER);
      textSize(18);

      if (fraseSifrinita === false) {
        fill(100);
        text("Lleva el labial hasta aquí", 535, 522);
      } else {
        fill(180, 40, 50);
        text("Del baile a querer algo más.", 535, 522);
      }

      textAlign(LEFT, TOP);

      // Explicación que aparece al descubrir la frase.
      if (fraseSifrinita === true) {
        fill(30);
        textSize(17);
        text(
          "Una conexión que empieza bailando se convierte en ganas de intentar algo más.",
          45, 580, 800, 60
        );
      }

      // Dibujamos el labial al final para que quede encima.

      // Base negra.
      fill(30);
      rect(labialX, labialY, 35, 65, 4);

      // Parte metálica.
      fill(195, 170, 120);
      rect(labialX + 3, labialY - 15, 29, 20);

      // Barra roja.
      fill(190, 35, 55);
      rect(labialX + 7, labialY - 45, 21, 35, 5);
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
        fraseSifrinita = false;
        labialX = 100;
        labialY = 400;
        arrastrandoLabial = false;
      }

      // MADRID
      else if (mouseX > 375 && mouseX < 525) {
        pantalla = 3;
        estrellaX = 100;
        estrellaY = 330;
        recorridoMadrid = 0;
        arrastrandoEstrella = false;
      }

      // 911
      else if (mouseX > 540 && mouseX < 690) {
        pantalla = 4;
        corazonX = 360;
        corazonY = 360;
        corazonEntregado = false;
        arrastrandoCorazon = false;
      }

      // IBIZA
      else if (mouseX > 705 && mouseX < 855) {
        pantalla = 5;
        personaEncontrada = false;
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

    // Tomar el labial en SIFRINITA.
    if (pantalla === 2) {
      if (
        mouseX > labialX && mouseX < labialX + 35 &&
        mouseY > labialY - 45 && mouseY < labialY + 65
      ) {
        arrastrandoLabial = true;
        desplazamientoLabialX = mouseX - labialX;
        desplazamientoLabialY = mouseY - labialY;
      }
    }

    // Tomar la estrella en MADRID.
    if (pantalla === 3) {
      if (
        mouseX > estrellaX - 35 &&
        mouseX < estrellaX + 35 &&
        mouseY > estrellaY - 35 &&
        mouseY < estrellaY + 35
      ) {
        arrastrandoEstrella = true;
      }
    }

    // Tomar el corazón en 911.
    if (pantalla === 4 && corazonEntregado === false) {

      if (
        mouseX > corazonX - 40 &&
        mouseX < corazonX + 40 &&
        mouseY > corazonY - 35 &&
        mouseY < corazonY + 45
      ) {
        arrastrandoCorazon = true;
      }
    }

    // Encontrar a la persona en IBIZA.
    if (pantalla === 5) {

      if (
        mouseX > 640 && mouseX < 720 &&
        mouseY > 300 && mouseY < 420
      ) {
        personaEncontrada = true;
      }
    }

    // En una canción, revisamos el botón para volver.
    if (
      mouseX > 45 && mouseX < 205 &&
      mouseY > 30 && mouseY < 75
    ) {
      pantalla = 0;
      recuerdo = 0;
      arrastrandoLabial = false;
      arrastrandoEstrella = false;
      arrastrandoCorazon = false;
    }
  }
}

function mouseDragged() {

  // ARRASTRE DEL LABIAL EN SIFRINITA
  if (pantalla === 2 && arrastrandoLabial === true) {

    labialX = mouseX - desplazamientoLabialX;
    labialY = mouseY - desplazamientoLabialY;

    if (
      mouseX > 260 && mouseX < 810 &&
      mouseY > 490 && mouseY < 555
    ) {
      fraseSifrinita = true;
    }

    return false;
  }

  // ARRASTRE DE LA ESTRELLA EN MADRID
  if (pantalla === 3 && arrastrandoEstrella === true) {

    // Movemos la estrella dentro del cielo.
    if (
      mouseX > 80 && mouseX < 820 &&
      mouseY > 250 && mouseY < 370
    ) {
      estrellaX = mouseX;
      estrellaY = mouseY;

      // Cada zona revela una parte del recuerdo.
      // El número solo aumenta para conservar las palabras.

      if (estrellaX > 250 && recorridoMadrid < 1) {
        recorridoMadrid = 1;
      }

      if (estrellaX > 450 && recorridoMadrid < 2) {
        recorridoMadrid = 2;
      }

      if (estrellaX > 680 && recorridoMadrid < 3) {
        recorridoMadrid = 3;
      }
    }

    return false;
  }

  // ARRASTRE DEL CORAZÓN EN 911
  if (pantalla === 4 && arrastrandoCorazon === true) {

    // El corazón se mueve dentro del área de la escena.
    corazonX = constrain(mouseX, 85, 815);
    corazonY = constrain(mouseY, 250, 450);

    return false;
  }
}

function mouseReleased() {
  if (pantalla === 4 && arrastrandoCorazon) {
    corazonEntregado =
      corazonX >= 590 && corazonX <= 730 &&
      corazonY >= 250 && corazonY <= 470;
  }

  arrastrandoLabial = false;
  arrastrandoEstrella = false;
  arrastrandoCorazon = false;
}