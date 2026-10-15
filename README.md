# Around the US

## Sobre mí

¡Hola! Soy Julián López, desarrollador junior, en proceso de formación en [TripleTen](https://tripleten.com/trainer/web/lesson/115c8025-b948-49f0-91ac-c82e0ddf4a08/), donde estoy adquiriendo habilidades en tecnologías clave como HTML, CSS, Javascript, TypeScript, Git, React y Figma. Mi objetivo es dominar estas herramientas para convertirme en un desarrollador Full Stack aportando valor y soluciones en desarrollo de proyectos WEB.

## Descripción del proyecto

Around the US es una página interactiva concebida para que los usuarios puedan explorar, agregar fotografías de lugares, darles "me gusta" y eliminarlas. El proyecto partió de una maqueta estática maquetada en HTML y CSS, migrada y refactorizada bajo los principios de la Programación Orientada a Objetos (POO) y fuertemente tipada con TypeScript.

Hasta esta etapa del desarrollo, me he encargado de implementar las siguientes funcionalidades principales:

- **Estructuración e integración de datos:** Creación y recorrido de arreglos de objetos (`initialCards`) para gestionar la información estructurada de las tarjetas (nombres y enlaces de imágenes) de forma modular y limpia, apoyado por tipado estricto e interfaces en TypeScript.
- **Control de ventanas emergentes (modales) y UX:** Desarrollo de una jerarquía de clases modales mediante herencia (`Popup` como clase base, `PopupWithImage` y `PopupWithForm` como clases hijas). Manejo de apertura y cierre mediante la manipulación dinámica de clases en el DOM, cierre por clic en el overlay comparando `event.target === event.currentTarget`, y cierre mediante la tecla `Escape` con escuchadores globales gestionados dinámicamente.
- **Sincronización y edición del perfil:** Encapsulamiento de la lógica de usuario mediante la clase `UserInfo`, permitiendo capturar la información actual y actualizar de forma limpia los datos del perfil en el DOM.
- **Validación de formularios en tiempo real (`FormValidator.ts`):** Implementación de la validación orientada a objetos en la clase `FormValidator` utilizando un objeto de configuración (`defaultFormConfig`). Control de mensajes de error personalizados en el DOM basados en las reglas nativas del navegador (`required`, `minlength`, `maxlength`, `type="url"`) y gestión del estado del botón de envío (`submit`), activándolo solo cuando todos los campos son válidos y reseteando los estados al abrir modales.
- **Procesamiento de formularios:** Manejo del evento de envío (`submit`) para prevenir el comportamiento por defecto del navegador a través de `PopupWithForm`, recolectando los datos tipados de los inputs, actualizando la interfaz y cerrando la ventana emergente tras guardar los cambios.
- **Renderizado dinámico de tarjetas:** Creación de tarjetas en el DOM a partir del arreglo de datos iniciales utilizando la clase `Card` para la estructura individual y la clase `Section` para la inserción y renderizado organizado mediante el elemento `<template>`.
- **Creación de nuevas tarjetas:** Implementación de la ventana emergente "Agregar una tarjeta" con su respectivo controlador de envío para instanciar nuevos elementos e insertarlos al inicio del contenedor mediante el método `addItem()`.
- **Gestión de interacción en tarjetas:** Implementación de manejadores de eventos tipados dentro de la clase `Card` para alternar el estado del botón "Me gusta", eliminar tarjetas del DOM y abrir la vista ampliada de imágenes en el popup dedicado.

## Tecnologías utilizadas

**JavaScript (ES6+):**

- **Manipulación avanzada del DOM:** Selección de elementos (`querySelector`, `querySelectorAll`), clonación de elementos dinámicos mediante `<template>` (`cloneNode`), inserción de nodos (`prepend`) y modificación de clases CSS (`classList.add`, `classList.remove`, `classList.toggle`).
- **Arquitectura de módulos en ES6:** Separación de la lógica en múltiples archivos mediante directivas `import` y `export`.
- **Gestión de eventos y propagación:** Asignación de escuchadores (`addEventListener`), manejo del objeto de evento (`event.target`, `event.currentTarget`, `event.key`), prevención de recargas de página (`event.preventDefault`) y gestión de eventos globales en `document`.
- **API de validación de formularios en JS:** Control de validez nativa (`validity.valid`, `validationMessage`), recorrido de inputs con métodos de arreglos (`Array.from`, `some`, `forEach`) y alteración del estado de botones de envío (`disabled`).
- **Estructuras de datos:** Objetos, arreglos e iteración modular para el renderizado dinámico de contenido.

**Git y GitHub (Control de versiones)**

**TypeScript y Programación Orientada a Objetos:**

- **Tipado estático y robusto:** Interfaces para modelado de datos (`CardData`, `FormValues`, `UserData`, `FormValidatorConfig`), clases tipadas y modificadores de acceso (`private`, `public`, `protected`).
- **Principio de Encapsulamiento y Herencia:** Jerarquía de clases modales (`Popup`, `PopupWithImage`, `PopupWithForm`) y separación de responsabilidades en componentes independientes (`Card`, `Section`, `UserInfo`, `FormValidator`).

## Instalación y uso

1. **Clona el repositorio:**
   Abre tu terminal y escribe el siguiente comando:

   ```bash
   git clone [https://github.com/DamagedSociety/web_project_around_es.git](https://github.com/DamagedSociety/web_project_around_es.git)

   ```

2. Abre el archivo en tu navegador:
   Navega hasta la carpeta del proyecto y abre el archivo index.html en tu navegador web de preferencia, o utiliza una extensión como "Live Server" en tu editor de código para una experiencia automática.

3. El proyecto también se encuentra desplegado y listo para su visualización en vivo en el siguiente enlace: https://damagedsociety.github.io/web_project_around_es/

## Planes de mejora

- Integración con servidor (Backend): Conectar la aplicación con un servidor backend para guardar y mantener la persistencia de las tarjetas creadas, los "me gusta" y la información del perfil.
- Autenticación de usuarios: Implementar la lógica para permitir iniciar sesión y cerrar sesión de manera segura.
- Actualización de avatar: Agregar la funcionalidad para cambiar la foto de perfil del usuario.
