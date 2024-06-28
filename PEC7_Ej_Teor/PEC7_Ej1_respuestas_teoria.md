

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



d) ¿Qué son las route Guards? ¿Cómo se usan las guardas en Angular? Describe todas las guardas que existen en Angular

e) ¿Qué es la carga LAzy de los módulos de Angular? ¿Cómo se configura en Angular la carga lazy?

f) Compara las diferencias entre CanDeactivate y CanActivate guards en Angular. Proporciona ejemplos de cuándo se utilizaría cada uno

g) ¿Qué es/para qué son útiles los middlewares en el contexto de Angular? ¿Dónde estás usando middlewares en nuestra aplicación?

