

a) ¿Qué es y cómo funciona el elemento <RouterLink> en Angular?

Este elemento es una directiva que se utiliza para crear enlaces que son de navegación dentro de una aplicación Angular. Nos va a permitir definir rutas que al hacer click sobre ellas se nos van a cargar componentes en específicos sin la necesidad de que se recarge de forma completa la página por lo que se va a conseguir que la navegación se realize de una forma más eficiente.

b) Explica la diferencia entre routerLink y routerLinkActive ¿Qué otras directivas se pueden utilizar con el router en Angular?

Las dos son directivas y se utilizan para:

-routerLink se utiliza para definir la ruta que tiene que seguir un enlace

-routerLinkActive se utiliza para añadir clases Css a un enlace cuando la ruta esté activa, esto significa que la ruta de la página en la que estemos coincida con la que se ha puesto en la ruta del enlace

Otras directivas que se pueden utilizar son:

-router-outlet nos va a marcar el sitio dentro de una plantilla en donde deben de rederizarse los componentes que pertenecen a las rutas

-ng-template con *ngIf y routerLinkActive nos permite manejar de forma condicional la rederización de los enlaces que tiene la ruta activa

c) Describe el servicio ActivatedRouteSnapshot ¿Cómo se utiliza y en que casos es útil?

Sirve para obtener datos de la ruta de una forma más fácil y directa, ya que se consigue al inicializar el componente, por lo que no vamos a tener que estar pendiente de los cambios posteriores en la ruta.

ActivatedRouteSnapshot se usa para acceder a un parámetro de una ruta. Esto nos será útil cuando se necesiten leer estos datos que se están pasado al inicio de la carga del componente.

d) ¿Qué son las route Guards? ¿Cómo se usan las guardas en Angular? Describe todas las guardas que existen en Angular

Son funciones que nos van a permitir controlar el acceso a las rutas de una aplicación. Estas van a controlar si una ruta va a poder ser activada o no o por ejemplo también si un módulo se va a poder cargar o no.

Para usarlas los que tenemos que definir una clase que esté formada por alguna de las interfaces guardadas de angular para así posteriormente añadir la guarda dentro de la configuración de rutas para aquellas rutas que queremos proteger.

Los tipos de guarda son:

-CanLoad que controlará si se puede cargar un módulo o no
-Resolve que va cargar los datos que son necesarios para un compoenente antes de que este sea mostrado
-CanDesactivate que va a controlar si se puede desactivar una ruta
-CanActivate que va a controlar si se puede activar una ruta

e) ¿Qué es la carga LAzy de los módulos de Angular? ¿Cómo se configura en Angular la carga lazy?

La carga LAzy se utiliza para optimizar la carga de módulos, ya que estos solo se van a cargar si son necesarios. Ya que si no se utiliza esta técnica todos los módulos se van a cargar desde el principio. Esta técnica nos va a permitir mejorar el rendimiento inicial de la aplicación al no tener que cargar todos los módulos.

Para configurar la carga Lazy, primero tenemos que  crear un módulo con un componente asociado utilizando el comando ng generate module feature --route feature --module app.module. Luego, vamos a definir las rutas internas de ese módulo en un archivo de enrutamiento, como feature-routing.module.ts. Finalmente, en el archivo de enrutamiento principal (app-routing.module.ts), configuramos la ruta para cargar el módulo de forma Lazy utilizando loadChildren.


f) Compara las diferencias entre CanDeactivate y CanActivate guards en Angular. Proporciona ejemplos de cuándo se utilizaría cada uno

CanDeActivate se utiliza como una especie de guardían que va a decidir si podemos salir de una página web o no. Esto es muy útil debido a que cuando estamos en una página donde hemos echo algún cambio pero estos no han sido guardados y la vamos a cerrar o salir, CanDeActivate nos va a mostrar un mensaaje de confirmación para asegurarnos de que realmente queremos salir de esta página sin que los cambias se hayan guardado.

CanActivate se usa para proteger páginas que necesitan que estemos odentificados o que contemos con unos permisos especiales para poder entrar. Como por ejemplo, se usa para asegurarnos de que aquellas personas que han iniciado sesión puedan entran a una página de administración.

g) ¿Qué es/para qué son útiles los middlewares en el contexto de Angular? ¿Dónde estás usando middlewares en nuestra aplicación?

Son filtros que se utilizan para las solicitudes y respuestas HTTP. Pueden obtener y modificar estas solicitudes y respuestas antes de que lleguen a su destino. Esto por ejemplo lo podemos usar para manejar errores de una manera más centralizada. Se implementa a traves de interceptores HTTP, ya que estos obtienen una solicitud HTTP y modificarla y luego dejar que siga su destino, lo mismo lo pueden hacer con la respuesta antes de que llegue a su destino final.

Se ha utilizado en la aplicación para manejar las solicitudes HTTP que salen y las respuestas que nos llegan para añadir tokens de autentificación a estas solicitudes y también se ha utilizado para proteger las rutas de acceso restringido a la aplicación.