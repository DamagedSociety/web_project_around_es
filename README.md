# Around the US

## Sobre mí

¡Hola! Soy Julián López, desarrollador junior, en proceso de formación en TripleTen, donde estoy adquiriendo habilidades en tecnologías clave como HTML, CSS, Git, React y Figma. Mi objetivo es dominar estas herramientas para convertirme en un desarrollador Full Stack aportando valor y soluciones en desarrollo de proyectos WEB.

## Descripción del proyecto

Around the US es una página interactiva concebida para que los usuarios puedan explorar, agregar fotografías de lugares, darles "me gusta" y eliminarlas. El proyecto partió de una maqueta estática maquetada en HTML y CSS, y mi rol se enfocó exclusivamente en el desarrollo de la lógica en JavaScript para dotar de interactividad a la interfaz.

Hasta esta etapa del desarrollo, me he encargado de implementar las siguientes funcionalidades principales:

- **Estructuración e integración de datos:** Creación y recorrido de arreglos de objetos (`initialCards`) para gestionar la información estructurada de las tarjetas (nombres y enlaces de imágenes) de forma modular y limpia.
- **Control de ventanas emergentes (modales):** Desarrollo de la lógica modular para la apertura y cierre de ventanas modales mediante la manipulación dinámica de clases en el DOM.
- **Sincronización y edición del perfil:** Captura de la información actual del usuario en la página (`textContent`) para precargar automáticamente los campos del formulario (`value`) al abrir el modal de edición.
- **Procesamiento de formularios:** Manejo del evento de envío (`submit`) para prevenir el comportamiento por defecto del navegador, actualizar en tiempo real los datos del perfil en el DOM y cerrar la ventana emergente tras guardar los cambios.

## Tecnologías utilizadas

**JavaScript (ES6+):**

- Manipulación del DOM (`querySelector`, control de clases y modificación de contenido)
- Gestión de eventos (`addEventListener`, objeto `event`, `preventDefault`)
- Estructuras de datos en JS (Objetos, Arreglos y métodos de iteración como `forEach`)
- Manejo de formularios y propiedades de campos (`value`, `textContent`)

**Git y GitHub (Control de versiones)**

## Instalación y uso

1. **Clona el repositorio:**
   Abre tu terminal y escribe el siguiente comando:

   ```bash
   git clone https://github.com/DamagedSociety/web_project_around_es.git

   ```

2. Abre el archivo en tu navegador:
   Navega hasta la carpeta del proyecto y abre el archivo index.html en tu navegador web de preferencia, o utiliza una extensión como "Live Server" en tu editor de código para una experiencia automática.

3. El proyecto también se encuentra desplegado y listo para su visualización en vivo en el siguiente enlace: https://damagedsociety.github.io/web_project_around_es/

## Planes de mejora

- Renderizar dinámicamente en el DOM las tarjetas de fotos a partir del arreglo de datos iniciales.

- Desarrollar la lógica para la ventanas emergente de "Agregar tarjeta".

- Agregar funcionalidad a los botones de eliminación de tarjetas y el botón de "Me gusta".
