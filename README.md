# Around the US

## Sobre mí

¡Hola! Soy Julián López, desarrollador junior, en proceso de formación en TripleTen, donde estoy adquiriendo habilidades en tecnologías clave como HTML, CSS, Javascript, TypeScript, React y Figma. Mi objetivo es dominar estas herramientas para convertirme en un desarrollador Full Stack aportando valor y soluciones en desarrollo de proyectos WEB.

## Descripción del proyecto

Around the US es una página interactiva concebida para que los usuarios puedan explorar, agregar fotografías de tarjetas, darles "me gusta", actualizar su perfil y avatar, y eliminar contenido de forma persistente. El proyecto partió de una maqueta estática en HTML y CSS, refactorizada bajo los principios de la Programación Orientada a Objetos (POO), fuertemente tipada con TypeScript y conectada a un servidor mediante una clase `Api` dedicada.

Hasta esta etapa del desarrollo, me he encargado de implementar las siguientes funcionalidades principales:

- **Estructuración e integración de datos y Servidor (`Api.ts`):** Creación de la clase `Api` para centralizar todas las solicitudes HTTP (`GET`, `POST`, `PATCH`, `PUT`, `DELETE`), implementando un método genérico de manejo de respuestas (`res.ok`), manejo robusto de errores en bloques `try...catch` y autenticación basada en encabezados con token personalizado.
- **Carga inicial asíncrona optimizada:** Sincronización y renderizado de la información del usuario y las tarjetas iniciales mediante `Promise.all`, garantizando que la aplicación cargue de manera eficiente solo después de recibir los datos del servidor.
- **Control de ventanas emergentes (modales) y UX:** Desarrollo de una jerarquía de clases modales mediante herencia (`Popup` como clase base, `PopupWithImage`, `PopupWithForm` y `PopupWithConfirmation` como clases hijas). Manejo de apertura y cierre mediante la manipulación dinámica de clases en el DOM, cierre por clic en el overlay comparando `event.target === event.currentTarget`, y cierre mediante la tecla `Escape` con escuchadores globales gestionados dinámicamente.
- **Sincronización y edición del perfil y avatar:** Encapsulamiento de la lógica de usuario mediante la clase `UserInfo`, permitiendo capturar la información actual y actualizar en tiempo real los datos del perfil y la imagen de avatar en el DOM tras la persistencia en el servidor.
- **Validación de formularios en tiempo real (`FormValidator.ts`):** Implementación de la validación orientada a objetos en la clase `FormValidator` utilizando un objeto de configuración (`defaultFormConfig`). Control de mensajes de error personalizados en el DOM basados en las reglas nativas del navegador (`required`, `minlength`, `maxlength`, `type="url"`) y gestión del estado del botón de envío (`submit`), activándolo solo cuando todos los campos son válidos y reseteando los estados al abrir modales.
- **Procesamiento de formularios y estados de carga (UX):** Manejo del evento de envío (`submit`) a través de `PopupWithForm`, recolectando los datos tipados de los inputs, enviándolos al servidor e implementando indicadores visuales de carga dinámica ("Guardando...", "Eliminando...") en los botones de acción hasta completar la respuesta.
- **Renderizado dinámico de tarjetas:** Creación de tarjetas en el DOM a partir del arreglo de datos obtenidos de la API utilizando la clase `Card` para la estructura individual y la clase `Section` para la inserción y renderizado organizado mediante el elemento `<template>`.
- **Creación de nuevas tarjetas:** Implementación de la ventana emergente "Nuevo lugar" con su respectivo controlador asíncrono para enviar los datos al servidor, instanciar nuevos elementos e insertarlos al inicio del contenedor.
- **Gestión interactiva de tarjetas (Likes y Borrado seguro):**
  - **Sistema de Me gusta:** Envío de solicitudes `PUT` y `DELETE` para alternar el estado de los likes, actualizando dinámicamente el color del icono del corazón según la respuesta del servidor.
  - **Eliminación con confirmación:** Creación de la clase `PopupWithConfirmation` para solicitar una validación explícita del usuario antes de proceder con la petición `DELETE` en el servidor y remover el nodo visual de la tarjeta de forma segura.

## Tecnologías utilizadas

**JavaScript (ES6+) y TypeScript:**

- **Programación Asíncrona:** Uso de `async/await`, promesas, `Promise.all` y consumo de APIs REST mediante la API nativa `fetch`.
- **Manipulación avanzada del DOM:** Selección de elementos (`querySelector`, `querySelectorAll`), clonación de elementos dinámicos mediante `<template>` (`cloneNode`), inserción de nodos (`prepend`) y modificación de clases CSS (`classList.add`, `classList.remove`, `classList.toggle`).
- **Arquitectura de módulos en ES6:** Separación de la lógica en múltiples archivos mediante directivas `import` y `export`.
- **Gestión de eventos y propagación:** Asignación de escuchadores (`addEventListener`), manejo del objeto de evento (`event.target`, `event.currentTarget`, `event.key`), prevención de recargas de página (`event.preventDefault`) y gestión de eventos globales en `document`.
- **API de validación de formularios en JS:** Control de validez nativa (`validity.valid`, `validationMessage`), recorrido de inputs con métodos de arreglos (`Array.from`, `some`, `forEach`) y alteración del estado de botones de envío (`disabled`).
- **Tipado estático y robusto:** Interfaces avanzadas para modelado de datos de API y formularios (`CardData`, `ApiCard`, `ApiUserInfo`, `FormValues`, `FormValidatorConfig`, `UserInfoSelectors`), clases tipadas y modificadores de acceso (`private`, `public`, `protected`).
- **Principio de Encapsulamiento y Herencia:** Jerarquía de clases modales (`Popup`, `PopupWithImage`, `PopupWithForm`, `PopupWithConfirmation`) y separación de responsabilidades en componentes independientes (`Card`, `Section`, `UserInfo`, `FormValidator`, `Api`).

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

- Autenticación avanzada de usuarios: Implementar pantallas de registro e inicio de sesión con tokens de sesión persistentes.
- Migración a Frameworks Modernos: Reestructurar el proyecto utilizando componentes y un ecosistema basado en React para optimizar el rendimiento y la escalabilidad del lado del cliente.
