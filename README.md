# RETO R6

## Descripción del Proyecto

Este proyecto de desarrollo Frontend tiene como objetivo retar tu desempeño en el consumo de diversas APIs y la implementación de programación funcional. La aplicación debe ser creada en 6 días y consta de dos pantallas:

### `Pantalla 1: Login`

1. Implementar un login social que permita al usuario autenticarse mediante Facebook, Twitter o Google.
2. Asegurar el funcionamiento del login.

### `Pantalla 2: Listado de Página`

1. El acceso a esta pantalla está condicionado a que el usuario se haya autenticado en la Pantalla 1.
2. Mostrar información obtenida de la API a través de la cual se ha autenticado el usuario (Nombre, email o foto).
3. Desarrollar un listado paginado de 5 registros por página, consumiendo datos de la API proporcionada (https://reqres.in).

## Funcionalidades Adicionales

Además de las funcionalidades básicas, la interfaz debe incluir:

1. Obtener datos de un usuario: GET /api/users/{id}
2. Crear un usuario: POST /api/users
3. Editar usuario: PATCH /api/users/{id}

## Diseño y Distribución de la Interfaz

Lograr una distribución clara y accesible para el usuario.

## Tecnologías Utilizadas

El proyecto debe ser desarrollado con las siguientes tecnolgías:

1. React
2. Redux (hooks)
3. Redux Saga
4. React Context
5. Axios
6. Styled Components
7. React Testing Library + Jest

## Otros Requisitos Técnicos

La aplicación final debe ser responsive y adaptativa, garantizando una experiencia de usuario coherente desde escritorio hasta dispositivos móviles.
