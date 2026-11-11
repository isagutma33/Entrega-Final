let foto;

async function setup() {
  // Crea el espacio donde vamos a dibujar.
  // 900 es el ancho y 650 es el alto.
  createCanvas(900, 650);

  // Define la tipografía de los textos.
  textFont("Arial");

  foto = await loadImage("assets/images.jpeg");
}

function draw() {
  // Fondo
  background(248, 242, 229);

//Foto del artista 
  image(foto, 45, 135, 300, 300);

  noStroke();

  // Las coordenadas de los textos parten
  // desde su esquina superior izquierda.
  textAlign(LEFT, TOP);

  // Texto pequeño de presentación.
  fill(180, 40, 50);
  textSize(13);
  text("UN UNIVERSO MUSICAL PARA EXPLORAR", 45, 25);

  // Nombre del artista.
  fill(30);
  textSize(45);
  text("ALEJANDRO SAAVEDRA", 45, 55);

  // Frase de bienvenida.
  textSize(17);
  text("Conoce sus historias a través de su música.", 45, 115);

 // Texto pequeño debajo de la fotografía.
  fill(30);
  textSize(13);
  text("ALEJANDRO / SU UNIVERSO", 60, 440);

  // Título de la presentación.
  fill(180, 40, 50);
  textSize(24);
  text("DETRÁS DE LAS CANCIONES", 345, 175);

  // Presentación del proyecto.
  fill(30);
  textSize(18);
  text(
    "Una invitación a conocer a Alejandro Saavedra a través de cinco canciones de su álbum El malo soy yo x tener corazón.",
    345, 220, 490, 110
  );

  // Invitación a explorar.
  textSize(16);
  text(
    "Deseo, recuerdos, encuentros y fiestas. Escoge una canción para descubrir su historia.",
    345, 345, 490, 70
  );

  // Línea roja que separa la presentación del menú.
  fill(180, 40, 50);
  rect(45, 460, 810, 3);

  // Título de la sección.
  fill(30);
  textSize(20);
  textAlign(LEFT, TOP);
  text("EXPLORA SUS CANCIONES", 45, 480);

  // Fondos de los cinco botones.
  fill(180, 40, 50);

  rect(45, 525, 150, 50, 8);
  rect(210, 525, 150, 50, 8);
  rect(375, 525, 150, 50, 8);
  rect(540, 525, 150, 50, 8);
  rect(705, 525, 150, 50, 8);

  // Nombres de las canciones.
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);

  text("LA CURA", 120, 550);
  text("SIFRINITA", 285, 550);
  text("MADRID", 450, 550);
  text("911", 615, 550);
  text("IBIZA", 780, 550);

  // Regresamos a la alineación anterior.
  textAlign(LEFT, TOP);

  // Frase debajo del menú.
  fill(80);
  textSize(13);
  text(
    "Cinco historias distintas dentro de un mismo universo.",
    45, 605
  );

}
