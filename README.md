# Emilio Medina · Revisión web V2

Rama de trabajo: **revision-web-v2**. Versión castellana para revisión visual y funcional, sin publicar y sin WordPress.

## Abrir la vista previa navegable

1. Descarga esta rama: https://github.com/emilioabenoza/emilio-medina/archive/refs/heads/revision-web-v2.zip
2. Descomprime completamente el ZIP en tu ordenador.
3. Abre **index.html** con Safari, Chrome, Firefox o Edge. Mantén la carpeta assets, style.css y site.js junto a las páginas.
4. Recorre el menú y las fichas. En Proyectos, prueba los filtros. En una ventana estrecha, pulsa Menú para abrir la navegación.
5. Abre **comparacion-v1-v2.html** para revisar la comparación y la alternativa de imagen de portada. La alternativa NO sustituye la imagen actual.

No necesitas instalar Node, React o WordPress. No hay compilación, fetch de contenido ni módulos que requieran un servidor: los filtros y el menú funcionan con el JavaScript local incluido. El formulario sigue desactivado y muestra el correo.

En GitHub, abrir index.html muestra código. Para ver el diseño, descarga el ZIP y abre el archivo local. Descargar o abrir esta copia no activa ninguna publicación. En iPhone, el visor de archivos de iOS puede impedir cargar recursos locales: no es una prueba fiable en Safari; la prueba física de iPhone está pendiente.

## Qué cambió

- Se conserva la base visual y la arquitectura aprobadas: fondo blanco, coral corporativo, titular e imagen principal de playa/globo, cuatro destacados y retrato original.
- Dieciocho fichas, clasificadas en tres áreas, con filtros de botones accesibles. La Rambla y el Palau ya forman parte del portfolio principal.
- Contexto, Necesidad, Estrategia e Impacto, con aportación y créditos diferenciados. Ponferrada se identifica como proyecto ejecutivo con renders.
- Galerías con fotografías extraídas de los PDF y Museo de las Ciencias con una imagen de sala en lugar del pequeño mecanismo.
- Blog externo entre Formación y Contacto, enlaces a LinkedIn y los diez vídeos facilitados, sin reproductores automáticos ni rastreadores.
- Mayor presencia de las áreas en Cómo puedo ayudarte; formación pedagógica y UOC incorporadas según el encargo actual.
- Bloques separados de reconocimientos y doce logotipos de clientes, con selección documentada.
- Menú móvil real, controles táctiles, foco, movimiento reducido y tipografía fluida.

## Entrega y revisión

- [Informe de cambios, categorías y pendientes](docs/REVISION-V2.md)
- [Inventario de fotografías y extracción](docs/imagenes.json)
- [Inventario de logotipos y relaciones documentadas](docs/logotipos.json)
- [Resultados detallados de pruebas](docs/pruebas-responsive.json)
- [Fuentes y aportaciones por proyecto](projects.json)
- [Comparación visual navegable](comparacion-v1-v2.html)

No todos los materiales del mensaje pueden recuperarse como archivos: consulta el informe. La ausencia de una imagen no se ha cubierto con fotografías inventadas.

## Primera versión conservada

La rama **primera-version-v1** y main conservan la primera versión. Commit original: **04c5d9b76be407eeb8fb0144f0f9ff9785973de9**.

[Descargar V1](https://github.com/emilioabenoza/emilio-medina/archive/refs/heads/primera-version-v1.zip).

El manifiesto de V1 se conserva en docs/primera-version-v1.sha256 y corresponde a esa rama, no a los archivos modificados de V2. La huella de esta versión está en VERSION-2.sha256.

## Límites de esta revisión

Solo castellano. Safari en iPhone físico sigue pendiente; las pruebas realizadas son en Chromium. No se ha activado GitHub Pages, alojamiento, despliegue ni WordPress. El repositorio es público y sus archivos son visibles; eso no equivale a publicar la web como sitio navegable.
