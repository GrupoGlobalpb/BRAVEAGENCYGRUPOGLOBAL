import React from 'react';

const CookiesPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <article className="prose lg:prose-xl">
        <h1>Política de Cookies</h1>
        <p className="text-gray-500">Última actualización: 24 de julio de 2025</p>

        <h2>¿Qué son las cookies?</h2>
        <p>
          Una cookie es un pequeño archivo de texto que un sitio web almacena en su computadora o dispositivo móvil cuando visita el sitio. Permite que el sitio web recuerde sus acciones y preferencias (como inicio de sesión, idioma, tamaño de fuente y otras preferencias de visualización) durante un período de tiempo, para que no tenga que volver a ingresarlas cada vez que regrese al sitio o navegue de una página a otra.
        </p>

        <h2>¿Cómo utilizamos las cookies?</h2>
        <p>
          Utilizamos cookies para varios propósitos, que incluyen:
        </p>
        <ul>
          <li><strong>Cookies Esenciales:</strong> Estas cookies son necesarias para que el sitio web funcione y no se pueden desactivar en nuestros sistemas. Generalmente, solo se configuran en respuesta a acciones realizadas por usted que equivalen a una solicitud de servicios, como establecer sus preferencias de privacidad, iniciar sesión o completar formularios.</li>
          <li><strong>Cookies de Rendimiento y Análisis:</strong> Estas cookies nos permiten contar las visitas y las fuentes de tráfico para poder medir y mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y las menos populares y a ver cómo se mueven los visitantes por el sitio.</li>
          <li><strong>Cookies de Funcionalidad:</strong> Estas cookies permiten que el sitio web proporcione una funcionalidad y personalización mejoradas. Pueden ser establecidas por nosotros o por proveedores externos cuyos servicios hemos agregado a nuestras páginas.</li>
        </ul>

        <h2>Cómo controlar las cookies</h2>
        <p>
          Puede controlar y/o eliminar las cookies como desee; para obtener más detalles, consulte aboutcookies.org. Puede eliminar todas las cookies que ya están en su computadora y puede configurar la mayoría de los navegadores para evitar que se coloquen. Sin embargo, si hace esto, es posible que deba ajustar manualmente algunas preferencias cada vez que visite un sitio y que algunos servicios y funcionalidades no funcionen.
        </p>
        
        <h2>Contacto</h2>
        <p>
          Si tiene alguna pregunta sobre nuestra política de cookies, contáctenos en: <a href="mailto:antonio.atencioncliente@gmail.com">antonio.atencioncliente@gmail.com</a>.
        </p>
      </article>
    </div>
  );
};

export default CookiesPolicy;
