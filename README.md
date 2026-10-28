# Huellitas de Salta — Veterinaria

Proyecto de práctica realizado con React y Vite para Programación Web II.

## Requisitos
- Node.js y npm instalados.
- Conexión a Internet para cargar imágenes y consultar la API.

## Cómo ejecutarlo
1. Descomprimir el archivo.
2. Abrir la carpeta `veterinaria-salta` en Visual Studio Code.
3. Abrir Terminal → Nueva terminal.
4. Ejecutar:

   ```bash
   npm install
   npm run dev
   ```

5. Abrir en el navegador la dirección que muestre la terminal (normalmente `http://localhost:5173`).

## Páginas
- Inicio: imágenes obtenidas de Dog CEO API.
- Servicios: array local de objetos con imágenes.
- Contacto: formulario y mapa de referencia de Salta Capital.

## Configuración del correo
El formulario usa EmailJS, pero no enviará correos hasta que configures una cuenta y reemplaces `TU_SERVICE_ID`, `TU_TEMPLATE_ID` y `TU_PUBLIC_KEY` en `src/pages/Contacto.jsx`. Crea una plantilla con los campos `nombre`, `email` y `mensaje`. No publiques claves privadas.

## Publicación
Para GitHub Pages, cambia `base` en `vite.config.js` por `"/veterinaria-salta/"` y configura la URL de `homepage` en `package.json` con tu usuario de GitHub. Después sigue las instrucciones de GitHub Pages y ejecuta `npm run deploy`.

## Importante
Este es un ejemplo académico. El mapa es una ubicación de referencia y no indica una clínica real. Confirma los datos y permisos de imágenes antes de usar el sitio comercialmente.
