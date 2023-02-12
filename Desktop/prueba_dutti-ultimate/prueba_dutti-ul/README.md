# Antes de empezar:
- Para reportar tu trabajo debes crear un repositorio GIT público.

- Crea tantos commits como consideres necesario. Parte de nuestra evaluación se basa en como afrontas los problemas y la única forma que tenemos de verlo es mediante commits. Esta parte puede ser más decisiva que la calidad de la entrega.
- En el comentario del commit especifica los cambios que has realizado, así como explicaciones o aportaciones que consideres importante comentar. Valoraremos especialmente que los commits estén bien documentados
- En caso de que surjan dudas intenta buscar alternativas y justifícalas en el mensaje de commit.

# Tasks.

1.  RE-Estructura el proyecto como mejor consideres. 
    1.  Como mínimo se debe crear un modulo a parte para la autenticación y registro.
    2.  Implementa Interficies  o clases  para los tipos de datos que consideres.
2. Implementa un sistema de login/registro que persista los datos correctamente.
   1. Puedes utilizar:
      1. LocalStorage, 
      2. Alguna api externa
      3. Implementar servicio propio con Nodejs.
3. Implementa el patron de diseño redux para la gestion del listado de naves.
   1. No es necesario implementar redux para todo el aplicativo, solo para la gestión de naves.
4.  Implementa la carga de multiples "páginas" en el apartado de ships.
    1.   Actualmente solo carga una página de la api.
    2.   Revisar la API para saber como consumir el resto de páginas. https://swapi.dev/
5.  Implementa test unitarios para el modulo de login/registro.
6.  Añade imágenes a las CARDS de naves: Puedes usar esta api  'https://starwars-visualguide.com/assets/img/starships/' + ID_DE NAVE -->  https://starwars-visualguide.com/assets/img/starships/5.jpg
7.  Suponiendo que esta página tiene un numero elevado de usuarios simultáneos, implementa las mejoras que consideres oportunas para evitar la saturación del servidor.
    1.  Si alguna de las medidas no es de código, comentalas a continuación en este Readme.


# Getting Started 

`npm i`  for install
Run `npm run start` for a dev server. 
Navigate to `http://localhost:4200/`.


# Notas del desarrollador:

1. Actualización del proyecto a la ultima versíon de Angular y librerias.
2. Reestructuración de carpetas.
3. Creación del modulo auth para aplicar seguridad a las rutas.
4. Implementación del AuthGuard para aplicar protección a las rutas.
5. Instalación de Firebase como servidor para el login y registro del proyecto.
6. Añadido el boton de logout para probar la autentificación.
7. Instalación de la libreria Ngrx para manejar el estado del proyecto.
8. Creación de los servicios para consumir las apis.
9. He cambiado las naves por los personajes ya que las naves la mayoria de imagenes daban error.
10. Implementación del paginado.
11. Impementación del spinner.
12. Añadido foto y descripción del personaje al modal.
13. Implementación de interfaces
14. Test unitarios para login.
15. Para mi lo mas complicado fue sacar tiempo de mi familia para la prueba y lo que más valoro,
pero cuando haces lo que te gusta intentas cualquier cosa. Gracias por la oportunidad.




