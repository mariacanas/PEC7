

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

g) ¿Qué es/para qué son útiles los middlewares en el contexto de Angular? ¿Dónde estás usando middlewares en nuestra aplicación?

