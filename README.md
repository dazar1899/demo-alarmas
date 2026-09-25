# Alarmas compartidas — aplicación web

Este repositorio contiene un prototipo navegable para demostrar las pantallas y controles de la aplicación. Se puede probar en un navegador, sin instalar una base de datos ni configurar un servidor.

## Cómo ejecutarlo

1. Instale **Node.js 22.18 o superior de la serie 22**, o **Node.js 24.12 o superior**, con npm.
2. Descargue este repositorio o clónelo y entre en la carpeta del proyecto:

   ```sh
   git clone https://github.com/dazar1899/demo-alarmas.git
   cd demo-alarmas
   ```

   Si descargó el ZIP desde GitHub, descomprímalo y abra una terminal dentro de la carpeta que contiene `package.json`.

3. Instale las dependencias y arranque la aplicación:

   ```sh
   npm ci
   npm run dev
   ```

4. Abra en el navegador la dirección **Local** que muestra la terminal. Normalmente es `http://localhost:5173/`. Deje esa terminal abierta mientras prueba la aplicación.

## Recorrido sugerido para la evaluación

1. En **Ingresar**, escriba cualquier usuario y contraseña no vacíos y pulse **Ingresar**. El acceso es de demostración; no se necesita una cuenta real.
2. En **Inicio**, pulse **Crear alarma**. Cambie **Tipo** entre Personal y Grupal; al elegir Grupal aparece el campo **Grupo**. Escriba una descripción, elija una fecha y pulse **Crear**.
3. Regrese a **Inicio** y, en la tarjeta de **Alarmas pendientes**, pulse **Ver más**. Seleccione una alarma o **Seleccionar todo** y pruebe **Aceptar**, **Rechazar** o **Aceptar seleccionadas**.
4. En **Inicio**, pulse el botón de tres puntos de una alarma de **Alarmas de Hoy** para abrir **Alarma sonando**. Pulse **Posponer**, cambie los minutos con `+` y `−` y pulse **Aceptar** o **Cancelar**. También puede probar **Detener**.
5. Use el menú lateral para visitar **Grupos**, **Calendario** y **Amigos**. En Grupos pruebe **Crear grupo** y **Agregar** integrantes; en Calendario, **Anteriores** y **Siguientes**; en Amigos, el botón para agregar amigos y las solicitudes.

En una pantalla estrecha, abra el menú lateral con el botón de menú de la esquina superior izquierda.

## Alcance de la demostración

Las pantallas, la navegación y los controles son interactivos, pero **no hay backend ni almacenamiento permanente**. Las decisiones y datos de ejemplo pueden restablecerse al recargar la página. Los enlaces de crear cuenta y recuperar contraseña no forman parte del flujo implementado.

Para comprobar que el proyecto compila, ejecute `npm run build`. La web está hecha con Vue, Vite, Tailwind CSS y Flowbite; la aplicación móvil está en un repositorio separado.
