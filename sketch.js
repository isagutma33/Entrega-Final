let foto; 

function preload() {
    foto = loadImage("assets/images.jpeg");
}

function setup() {
  // Crea el espacio donde vamos a dibujar.
  // 900 es el ancho y 650 es el alto.
  createCanvas(900, 650);

  // Define la tipografía de los textos.
  textFont("Arial");
}

function draw() {
  // Fondo
  background(248, 242, 229);

// Draw the picture at x=45, y=155, with a width and height of 300px.
  image(foto, 45, 155, 300, 300);

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

}
