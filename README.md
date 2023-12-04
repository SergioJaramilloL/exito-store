# Éxito store

## Descripción:

Esta es una aplicación web que permite a los usuarios poder elegir entre un stock de productos comunmente vendidos en las tiendas Éxito. El usuario puede agregar los productos que desee al carrito de compras y luego realizar la compra de los mismos, puede explorar la aplicación el siguiente enlace: [Éxito store](https://exito-store.vercel.app)

### Nota:

Esta aplicación y la API consumida están alojadas en un servidor gratuito. Esto significa que si no se usa durante un período de tiempo, el servidor se apagará. Esto puede causar un retraso en la primera solicitud de API. Por favor sea paciente.

### Cómo funciona:

Al usar la aplicación, verá una página de inicio donde se muestran todos los productos ofrecidos, en cada producto tiene dos opciones ( Agregar al carrito ó ver el detalle del producto ). Al dar click en el botón de agregar al carrito, se agregará el producto al carrito de compras, el cual se puede visualizar en la parte superior derecha de la página. Al dar click en el botón de ver detalle, se mostrará una página con la información del producto, en esta página se puede agregar el producto al carrito de compras. En la página del carrito de compras se puede visualizar los productos agregados, se puede eliminar un producto del carrito y se puede realizar la compra de los productos agregados.

## Prerequisitos

- [Git](https://git-scm.com/downloads)
- [Node.js and npm](https://nodejs.org) Node >= 18.15 LTS, npm >= 9.5.x

## Developing

1. Clone el repositorio

2. Ejecute `npm install` para instalar las dependencias del servidor.

3. Configure el entorno ejecutando `cp .env.example .env.local`

4. Actualice `.env.local` con la información requerida, solo hay una variable de entorno requerida:

   - `BASE_URL=http://localhost:3000` - Esta es la URL del servidor de apollo que se consumirá.

5. Ejecute `npm run dev` para iniciar el servidor de desarrollo.
