# PRUEBA TÉCNICA FRONTEND DEVELOPER

## Descripción del Proyecto

Este proyecto React tiene como objetivo evaluar tu desempeño en el consumo de diversas APIs y la implementación de programación funcional. La prueba técnica consta de dos pantallas:

### `Pantalla 1: Login`

1. Implementar un login social que permita al usuario autenticarse mediante Facebook, Twitter o Google.
2. Asegurar el funcionamiento del login.

### `Pantalla 2: Listado de Página`

1. El acceso a esta pantalla está condicionado a que el usuario se haya autenticado en la Pantalla 1.
2. Mostrar información obtenida de la API a través de la cual se ha autenticado el usuario (Nombre, email, foto, etc.).
3. Desarrollar un listado paginado de 5 registros por página, consumiendo datos de la API proporcionada (https://reqres.in). Listado de usuarios: GET /api/users (utilizando query params "page" para la paginación).

## Funcionalidades Adicionales

Además de las funcionalidades básicas, la interfaz debe incluir:

1. Obtener datos de un usuario: GET /api/users/{id}
2. Crear un usuario: POST /api/users (campos del body: name, job)
3. Editar usuario: PATCH /api/users/{id}

## Diseño y Distribución de la Interfaz

Aunque no se busca un perfil de diseñador o UX, se espera una distribución clara y accesible para el usuario.

## Tecnologías Utilizadas

Es imperativo utilizar las siguientes tecnologías durante el desarrollo:

1. React
2. Redux (hooks)
3. Axios
4. Styled Components

Se valora positivamente el uso adicional de Redux Sagas, React Context, y la implementación de pruebas unitarias con Jest.

## Metodologías de Trabajo y Requisitos Técnicos

El desarrollo debe realizarse en React orientado a funciones y hooks. La aplicación final debe ser responsive y adaptativa, garantizando una experiencia de usuario coherente desde escritorio hasta dispositivos móviles.
