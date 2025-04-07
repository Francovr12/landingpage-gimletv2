"use client"

import Link from "next/link"

export default function PoliticaDePrivacidadComponent() {
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
          <h1 className="text-3xl font-bold mb-8 text-center">Política de Privacidad</h1>

          <div className="space-y-8">
            <p className="text-purple-200/70 text-sm mb-8">
              Última actualización: {new Date().toLocaleDateString("es-AR")}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">1. Introducción</h2>
              <p className="mb-4 text-white/80">
                Gracias por visitar nuestro sitio web. En esta Política de Privacidad, te explicamos cómo recopilamos,
                utilizamos y protegemos tu información personal cuando utilizas nuestro sitio.
              </p>
              <p className="text-white/80">
                Nos comprometemos a proteger tu privacidad y a manejar tus datos personales con transparencia y de
                acuerdo con las leyes aplicables, incluyendo la Ley de Protección de Datos Personales de Argentina (Ley
                25.326) y, cuando corresponda, el Reglamento General de Protección de Datos (RGPD) de la Unión Europea.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">2. Información que recopilamos</h2>
              <p className="mb-4 text-white/80">Recopilamos la siguiente información personal:</p>
              <ul className="list-disc pl-6 mb-4 text-white/80">
                <li className="mb-2">
                  <strong className="text-white">Información que nos proporcionas:</strong> Cuando completas nuestro
                  formulario, recopilamos tu nombre y dirección de correo electrónico.
                </li>
                <li>
                  <strong className="text-white">Información recopilada automáticamente:</strong> Utilizamos Google
                  Analytics para recopilar información sobre cómo interactúas con nuestro sitio, incluyendo tu dirección
                  IP, tipo de navegador, páginas visitadas y tiempo de permanencia en el sitio.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">3. Cómo utilizamos tu información</h2>
              <p className="mb-4 text-white/80">Utilizamos la información que recopilamos para:</p>
              <ul className="list-disc pl-6 text-white/80">
                <li className="mb-2">Responder a tus consultas y solicitudes.</li>
                <li className="mb-2">
                  Enviarte comunicaciones ocasionales por correo electrónico, como boletines informativos o
                  actualizaciones sobre nuestros servicios.
                </li>
                <li className="mb-2">Mejorar nuestro sitio web y la experiencia del usuario.</li>
                <li>
                  Analizar tendencias de uso y estadísticas para entender mejor cómo los usuarios interactúan con
                  nuestro sitio.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">4. Base legal para el procesamiento</h2>
              <p className="mb-4 text-white/80">
                Procesamos tu información personal bajo las siguientes bases legales:
              </p>
              <ul className="list-disc pl-6 text-white/80">
                <li className="mb-2">
                  <strong className="text-white">Consentimiento:</strong> Al proporcionarnos tus datos a través de
                  nuestro formulario, consientes que los utilicemos para los fines descritos en esta política.
                </li>
                <li className="mb-2">
                  <strong className="text-white">Interés legítimo:</strong> Tenemos un interés legítimo en analizar cómo
                  los usuarios interactúan con nuestro sitio para mejorarlo.
                </li>
                <li>
                  <strong className="text-white">Obligación legal:</strong> En algunos casos, podemos estar obligados a
                  procesar tu información para cumplir con una obligación legal.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">5. Compartir información con terceros</h2>
              <p className="mb-4 text-white/80">
                No vendemos, alquilamos ni compartimos tu información personal con terceros para fines de marketing.
              </p>
              <p className="text-white/80">Sin embargo, podemos compartir tu información con:</p>
              <ul className="list-disc pl-6 text-white/80">
                <li className="mb-2">
                  <strong className="text-white">Proveedores de servicios:</strong> Trabajamos con terceros que nos
                  ayudan a operar nuestro sitio y a proporcionar nuestros servicios (como Google Analytics).
                </li>
                <li>
                  <strong className="text-white">Autoridades legales:</strong> Podemos divulgar tu información cuando
                  sea requerido por la ley o en respuesta a solicitudes legales válidas.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">6. Tus derechos</h2>
              <p className="mb-4 text-white/80">
                Tienes ciertos derechos con respecto a tus datos personales, que incluyen:
              </p>
              <ul className="list-disc pl-6 text-white/80">
                <li className="mb-2">Derecho a acceder a tus datos personales.</li>
                <li className="mb-2">Derecho a rectificar datos inexactos.</li>
                <li className="mb-2">Derecho a solicitar la eliminación de tus datos.</li>
                <li className="mb-2">Derecho a oponerte al procesamiento de tus datos.</li>
                <li className="mb-2">Derecho a retirar tu consentimiento en cualquier momento.</li>
                <li>Derecho a presentar una queja ante una autoridad de protección de datos.</li>
              </ul>
              <p className="mt-4 text-white/80">
                Para ejercer cualquiera de estos derechos, por favor contáctanos a través de la información
                proporcionada en la sección &quot;Contacto&quot;.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">7. Seguridad de datos</h2>
              <p className="text-white/80">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tus datos
                personales contra el acceso no autorizado, la pérdida o el daño. Sin embargo, ninguna transmisión de
                datos por Internet o sistema de almacenamiento electrónico puede garantizarse como 100% seguro.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">8. Retención de datos</h2>
              <p className="text-white/80">
                Conservamos tus datos personales solo durante el tiempo necesario para cumplir con los fines para los
                que fueron recopilados, a menos que la ley exija o permita un período de retención más largo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">9. Cambios a esta política</h2>
              <p className="text-white/80">
                Podemos actualizar esta Política de Privacidad ocasionalmente para reflejar cambios en nuestras
                prácticas o por otros motivos operativos, legales o regulatorios. Te recomendamos revisar esta política
                periódicamente para estar informado sobre cómo protegemos tu información.
              </p>
            </section>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Volver al inicio
            </Link>
          </div>
        </main>
      </div>

      {/* Fondo con gradiente */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black via-purple-950/10 to-black"></div>
    </div>
  )
}

