"use client"

import Link from 'next/link';

export default function TerminosDeServicioComponent() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header simple */}
      <header className="bg-black/80 backdrop-blur-md py-4 border-b border-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-white font-bold text-xl tracking-tight">
              GIMLET
            </Link>
            <Link href="/" className="text-purple-400 hover:text-purple-300">
              Volver al inicio
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <main className="bg-black/40 border border-purple-900/50 backdrop-blur-sm rounded-xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-8 text-center">Términos de Servicio</h1>
          
          <div className="space-y-8">
            <p className="text-purple-200/70 text-sm mb-8">
              Última actualización: {new Date().toLocaleDateString('es-AR')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">1. Introducción</h2>
              <p className="mb-4 text-white/80">
                Bienvenido a nuestro sitio web. Estos Términos de Servicio (&quot;Términos&quot;) rigen tu acceso y uso de nuestro 
                sitio web, incluyendo cualquier contenido, funcionalidad y servicios ofrecidos en o a través del sitio.
              </p>
              <p className="text-white/80">
                Al acceder o utilizar nuestro sitio web, aceptas estar sujeto a estos Términos. Si no estás de acuerdo 
                con alguna parte de estos Términos, no debes acceder al sitio ni utilizar nuestros servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">2. Uso del sitio</h2>
              <p className="mb-4 text-white/80">
                Nuestro sitio web está destinado a usuarios que tienen al menos 18 años de edad. Al utilizar nuestro sitio, 
                declaras y garantizas que tienes al menos 18 años y que tienes la capacidad legal para aceptar estos Términos.
              </p>
              <p className="mb-4 text-white/80">
                Te comprometes a utilizar nuestro sitio solo para fines legales y de acuerdo con estos Términos. Específicamente, 
                aceptas no utilizar nuestro sitio:
              </p>
              <ul className="list-disc pl-6 text-white/80">
                <li className="mb-2">De manera que viole cualquier ley o regulación aplicable.</li>
                <li className="mb-2">Para explotar o dañar, o intentar explotar o dañar, a menores de cualquier manera.</li>
                <li className="mb-2">Para transmitir cualquier material que sea difamatorio, obsceno, indecente, ofensivo, 
                  violento, acosador, inflamatorio o de otro modo objetable.</li>
                <li className="mb-2">Para suplantar o intentar suplantar a nuestra empresa, a un empleado, a otro usuario o a 
                  cualquier otra persona o entidad.</li>
                <li className="mb-2">Para participar en cualquier otra conducta que restrinja o inhiba el uso o disfrute del 
                  sitio por parte de cualquier persona.</li>
                <li>Para utilizar el sitio de cualquier manera que pueda desactivar, sobrecargar, dañar o perjudicar el sitio 
                  o interferir con el uso del sitio por parte de cualquier otra persona.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">3. Propiedad intelectual</h2>
              <p className="mb-4 text-white/80">
                El sitio y todo su contenido, características y funcionalidad (incluyendo, pero no limitado a, toda la 
                información, software, texto, imágenes, marcas y diseños) son de nuestra propiedad o de nuestros licenciantes 
                y están protegidos por leyes de propiedad intelectual argentinas e internacionales.
              </p>
              <p className="text-white/80">
                No puedes reproducir, distribuir, modificar, crear obras derivadas, exhibir públicamente, ejecutar públicamente, 
                republicar, descargar, almacenar o transmitir cualquier material de nuestro sitio, excepto según lo permitido 
                por estos Términos o con nuestro consentimiento previo por escrito.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">4. Enlaces a otros sitios</h2>
              <p className="text-white/80">
                Nuestro sitio puede contener enlaces a sitios web de terceros que no son de nuestra propiedad ni están bajo 
                nuestro control. No tenemos control sobre, y no asumimos responsabilidad por, el contenido, las políticas de 
                privacidad o las prácticas de cualquier sitio web de terceros. No seremos responsables de ninguna pérdida o 
                daño relacionado con tu uso de sitios web de terceros. Te recomendamos que leas los términos y condiciones y 
                la política de privacidad de cualquier sitio web de terceros que visites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">5. Envío de información</h2>
              <p className="mb-4 text-white/80">
                Cualquier información que envíes a través de nuestro sitio, incluyendo a través de formularios de contacto, 
                debe ser precisa, legal y no violar los derechos de terceros. No debes enviar información que:
              </p>
              <ul className="list-disc pl-6 text-white/80">
                <li className="mb-2">Contenga virus, troyanos, gusanos, bombas lógicas u otro material malicioso o tecnológicamente dañino.</li>
                <li className="mb-2">Sea difamatoria, obscena, ofensiva, odiosa o inflamatoria.</li>
                <li className="mb-2">Promueva material sexualmente explícito, violencia o discriminación.</li>
                <li>Infrinja los derechos de propiedad intelectual de cualquier otra persona.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">6. Comunicaciones electrónicas</h2>
              <p className="text-white/80">
                Al proporcionarnos tu dirección de correo electrónico a través de nuestro sitio, aceptas recibir comunicaciones 
                electrónicas de nuestra parte. Estas comunicaciones pueden incluir correos electrónicos relacionados con tu uso 
                del sitio, actualizaciones sobre nuestros servicios o información promocional. Puedes optar por no recibir 
                comunicaciones promocionales siguiendo las instrucciones de cancelación de suscripción incluidas en dichas 
                comunicaciones.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">7. Limitación de responsabilidad</h2>
              <p className="mb-4 text-white/80">
                En la medida permitida por la ley aplicable, no seremos responsables por daños indirectos, incidentales, 
                especiales, consecuentes o punitivos, o cualquier pérdida de beneficios o ingresos, ya sea incurrida directa 
                o indirectamente, o cualquier pérdida de datos, uso, buena voluntad u otras pérdidas intangibles, resultantes de:
              </p>
              <ul className="list-disc pl-6 text-white/80">
                <li className="mb-2">Tu acceso o uso, o incapacidad para acceder o usar el sitio.</li>
                <li className="mb-2">Cualquier conducta o contenido de terceros en el sitio.</li>
                <li className="mb-2">Acceso no autorizado, uso o alteración de tus transmisiones o contenido.</li>
                <li>Cualquier información obtenida del sitio.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">8. Indemnización</h2>
              <p className="text-white/80">
                Aceptas defender, indemnizar y mantener indemne a nuestra empresa, sus afiliados, licenciantes y proveedores 
                de servicios, y sus respectivos funcionarios, directores, empleados, contratistas, agentes, licenciantes, 
                proveedores, sucesores y cesionarios de y contra cualquier reclamo, responsabilidad, daño, juicio, premio, 
                pérdida, costo, gasto o tarifa (incluidos honorarios razonables de abogados) que surjan de o estén relacionados 
                con tu violación de estos Términos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">9. Ley aplicable y jurisdicción</h2>
              <p className="text-white/80">
                Estos Términos se regirán e interpretarán de acuerdo con las leyes de la República Argentina, sin dar efecto 
                a ningún principio de conflicto de leyes. Cualquier acción legal o procedimiento que surja de o esté relacionado 
                con estos Términos o el sitio se presentará exclusivamente en los tribunales competentes de Buenos Aires, 
                Argentina, y por la presente consientes a la jurisdicción personal de dichos tribunales.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">10. Cambios a estos términos</h2>
              <p className="text-white/80">
                Podemos revisar y actualizar estos Términos de vez en cuando a nuestra sola discreción. Todos los cambios son 
                efectivos inmediatamente cuando los publicamos. Tu uso continuado del sitio después de la publicación de los 
                Términos revisados significa que aceptas y consientes a los cambios.
              </p>
            </section>
          </div>

          <div className="text-center mt-12">
            <Link href="/" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors">
              Volver al inicio
            </Link>
          </div>
        </main>
      </div>
      
      {/* Fondo con gradiente */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black via-purple-950/10 to-black"></div>
    </div>
  );
}
