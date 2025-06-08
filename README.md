# auroraaa

Feedback:

[+15] Metadata, Markup y Accesibilidad
Mejorar los textos alternativos de las imágenes y nombres de archivos, haciéndolos más descriptivos:
Apply to README.md, Ej:
<img src="/img/aurora-shield.jpg" alt="Aurora Escudo - Nos protegemos de tal cosa, ..." />
en lugar de:
<img src="/img/aurora1.jpg" alt="Aurora 1" />

[+15] Funcionalidad / Interactividad
Todos los links/botones funcionan, aunque hay interactividad que no hace nada, los estilos over son indicadores de acción, principalmente en sliders.
Si no habrá acción remover estados de hover

[+15] Diseño y estilo
Diseño coherente, tipografía hadoc, Paleta de colores consistente

[+15] Responsive
Diseño adaptativo
Imágenes no optimizadas, muy grandes para mobile.
Hace falta redimensionar y optimizar, ejemplo:
'backgroundn.jpg', mide '5304pxx8000px' y pesa 6.4mb, la imagen está sobradísima cuando el máximo total recomendado es 1920x1080, la imagen pude haberse reducido a más del 90%
Puedes ver la imagen optimizada en el mismo directorio '/backgroundn-optimized.jpg'.

Repetir este proceso para todas tus imágenes habría optimizado por mucho la carga en mobile, mejorando la experiencia en mobile, piensa en los usuarios que están con mal internet consumiendo tu sitio.

[+15] Contenido
Buena carga de contenido con sentido en la organización de secciones
La narrativa podría estar mejor conectada entre secciones

[+15] Creatividad
Estilo consistente, me hubiera gustado ver el contenido y creatividad más unificado, el contenido de trabajo con el about resulta un tanto disonante. Tu sección de fotografías, ilustraciones y animaciones pudo haber integrado de mejor manera el diseño general del sitio, el contenido dentro de la sección no está jerarquizado ni tiene descripciones relevantes de información que soporte o complente a la imagen, ej: 'Fraktsiya 1, 2, 3, ...' 
Un texto descriptivo de cada sección habría dado un mejor soporte

[+10] Calidad del código
+8
- Estilos repetidos, ej estilos repetidos en todas las páginas: [h1, swiper, imports de fonts]
- Tienes hojas de estilo globales definidos, estas definiciones te hubieran servido para no repetir el código, ya los tenías importados en layout.
- Importación de swiper duplicada. Import desde cdn en layout.astro e importaciones desde paquete npm declarado en package.json e importado en 
index.astro e inspo.astro. 

Considera que:
Da preferencia a importación con paquetes por encima de cdn.
Si ya declaraste una librería vía cdn, entonces omite el uso de package.json

- El directorio de '/img' va dentro de 
@see: https://docs.astro.build/en/guides/images/
