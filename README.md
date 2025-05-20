# Clean Architecture - Kata "Users"

## Descripción general

### Requirimientos funcionales

- Mostrar lista de usuarios.
- Añadir un usuario nuevo.
- Un usuario debe de contener nombre, email y password como campos obligatorios.
- El email debe de ser un email válido.
- La password debe ser minimo 8 caracteres, al menos una letra y un número.
- La app debería mostrar un error si se intenta añadir dos usuarios con el mismo email.

  **Bola Extra**:

- Añade la dirección como parte de la información necesaria para el usuario (dirección, código postal, ciudad).
- Sólo puede existir un usuario por dominio (1 usuario con gmail, etc...).

### Plataforma de desarrollo

- La UI será una app de linea de comandos o terminal.
- Todos los datos en memoria, sin persistencia entre ejecuciones.
- El origen de los datos podrá ser en un futuro una API o Base de Datos.
- La UI podrá cambiar en un futuro a una web app, mobile app, o desktop app.
- Las reglas de negocio deben ser validadas mediante test unitarios.
- En los tests, las dependencias serán reemplazadas por dependencias fake manuales.
- Hay que crear tambien tests de igualdad para los value objects y entidades.
- Usa MVP para la capa de presentación.

## Parte 1 - Entidades

- Definir entidades y value objects
- Las reglas empresariales deben estar testeadas creando test unitarios.
- Reglas:

  - El usuario debe tener nombre, email y password como obligatorios.
  - El email debe de ser un email válido.
  - La password debe ser de una longitud mínima de 8 caracteres, tener al menos una letra y un número.
  - Dos instancias de un mismo email deben de ser iguales.
  - Dos intancias de una misma password deben ser iguales en una comparación.
  - Dos intancias de user, con el mismo id, deben ser iguales en una comparación

  **Bola Extra**:

  - Añade la dirección como parte de la información necesaria para el usuario (dirección, código postal, ciudad).
