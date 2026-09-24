# Alarmas compartidas — web

Prototipo navegable de las pantallas web. Las acciones son demostrativas: no hay servidor ni persistencia de alarmas.

## Tecnologías

- Vue 3, Vue Router 5, TypeScript 6 y Vite 8.
- Tailwind CSS 4 y Flowbite 4 para los estilos y componentes. Se reutilizan las clases de botones, campos y estados de foco que ya tenía el proyecto.
- Pinia 4 está instalada, aunque las vistas actuales no usan una tienda global.
- Fuente Inter. El proyecto original ya incluía un modal de Flowbite, un calendario con Datepicker y el menú lateral.

Flowbite corresponde a la versión web. La aplicación móvil se desarrolla por separado con Flutter.

## Ejecutar

Requiere Node.js 22.18 o 24.12 en adelante.

```sh
npm ci
npm run dev
```

Para comprobar el proyecto: `npm run build`.

## Pantallas

| Ruta | Vista |
| --- | --- |
| `/` | Login |
| `/inicio` | Inicio |
| `/amigos` | Amigos |
| `/grupos` | Grupos |
| `/grupos/crear` | Crear grupo |
| `/calendario` | Calendario |
| `/alarmas/crear` | Crear alarma personal o grupal |
| `/alarmas/pendientes` | Alarmas pendientes |
| `/alarmas/sonando` | Alarma sonando y panel para posponer |

Cada vista agregada tiene su propio commit `feat(...)` para que pueda revisarse por separado.
