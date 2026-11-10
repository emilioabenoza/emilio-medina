# Emilio Medina · Vista previa V3

Evolución controlada de la V2, sin rediseño, publicación ni WordPress. Rama **revision-web-v3**. Hay materiales gráficos pendientes: el detalle completo está en [el informe de V3](docs/REVISION-V3.md).

## Ver la web en tu ordenador

1. [Descarga la V3 en ZIP](https://github.com/emilioabenoza/emilio-medina/archive/refs/heads/revision-web-v3.zip).
2. Descomprime el ZIP.
3. Busca **index.html**, haz clic derecho y elige **Abrir con → Safari** (o Chrome / Firefox).
4. Usa el menú y las flechas de Proyectos y Cómo puedo ayudarte. Las categorías de Proyectos abren el filtro correcto.

No abras los HTML dentro del ZIP ni muevas assets, style.css o site.js. No necesitas instalar nada. Los filtros funcionan sin conexión y no dependen de fetch, módulos o un servicio externo. En GitHub, los HTML se muestran como código: hay que descargar la carpeta para ver el diseño.

## Qué se conserva

Diseño, fuente, paleta, fondo blanco, espaciados generales, foto principal, titular y cuatro destacados de Inicio; galerías y estructura de fichas; tres párrafos iniciales y retrato de Sobre mí; diseño de Formación.

## Qué se revisa

Textos de 19 fichas, incluida Palo Alto; CONNECTUS completado con las confirmaciones de Emilio; nuevo vídeo de XXI; desplegables accesibles, enlaces de filtro y anclas; textos literales de Formación; presentación integrada de colegiación; simplificación de reconocimientos y clientes; cuatro logos de clientes adicionales; correo emedina@emiliomedina.com.

El formulario sigue desactivado y el correo es la alternativa visible. Los logotipos de premios, Col·legi, icono oficial de LinkedIn y nuevas fotografías aún no se han incorporado porque faltan los archivos originales. No se presentan como añadidos.

## Entrega y control

- [Cambios, fuentes, materiales pendientes y pruebas](docs/REVISION-V3.md)
- [Resultados de las pruebas V3](docs/pruebas-v3.json)
- [Fuentes y pendientes por proyecto](docs/projects-v3-fuentes.json)
- [Inventario de logos](docs/logotipos.json)
- VERSION-3.sha256: manifiesto de los archivos de esta revisión.

135 comprobaciones de composición en Chromium: 375, 390, 768, 1024 y 1440 px. También filtros y desplegables por teclado. Safari en iPhone real sigue pendiente.

## V2 protegida

[Descargar la V2 intacta](https://github.com/emilioabenoza/emilio-medina/archive/refs/heads/backup-web-v2.zip).

Fuente y respaldo: revision-web-v2 y backup-web-v2 apuntan al commit **3a88520fa789f428b5b0749bebf177e496d1bdf7**. Las ramas main, primera-version-v1 y revision-web-v2 no se sustituyen. Los informes y manifiestos V1/V2 conservados son referencias históricas de esas ramas, no comprobaciones del contenido modificado de V3.

No se ha activado GitHub Pages, desplegado, fusionado ni migrado a WordPress. El repositorio sigue siendo público; la vista previa se abre localmente.
