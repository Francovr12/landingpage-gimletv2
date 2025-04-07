export {}

import { NextResponse } from "next/server"

// Función para validar el formato de email
function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Asegúrate de que esta función esté exportada correctamente como una exportación nombrada
export async function POST(request: Request) {
  try {
    // Obtener los datos del formulario
    const data = await request.json()
    const { name, email, message } = data

    // Validar que los campos requeridos estén presentes
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Todos los campos son obligatorios" }, { status: 400 })
    }

    // Validar formato de email
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "El formato del email no es válido" }, { status: 400 })
    }

    // Configuración de EmailJS
    const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const EMAILJS_USER_ID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY


    // Verificar que las variables de entorno estén configuradas
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_USER_ID) {
      console.error("Faltan variables de entorno para EmailJS")
      return NextResponse.json({ error: "Error de configuración del servidor" }, { status: 500 })
    }

    // Preparar los datos para EmailJS
    const emailjsData = {
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_USER_ID,
      template_params: {
        from_name: name,
        reply_to: email,
        message: message,
      },
    }

    try {
      // Enviar datos a EmailJS
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailjsData),
      })

      // Verificar respuesta
      if (!response.ok) {
        const errorText = await response.text()
        console.error("Error de EmailJS:", errorText)
        return NextResponse.json(
          {
            error: "Error al enviar el email",
            details: errorText,
          },
          { status: response.status },
        )
      }

      // Respuesta exitosa
      return NextResponse.json({
        success: true,
        message: "¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.",
      })
    } catch (fetchError) {
      console.error("Error al comunicarse con EmailJS:", fetchError)
      return NextResponse.json(
        {
          error: "Error al comunicarse con el servicio de email",
          details: fetchError instanceof Error ? fetchError.message : "Error desconocido",
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Error al procesar la solicitud:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}

