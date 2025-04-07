"use client"

import { useState } from "react"

interface EmailJSParams {
  from_name: string
  reply_to: string
  message: string
  [key: string]: string
}

export function useEmailJS() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const sendEmail = async (serviceId: string, templateId: string, userId: string, templateParams: EmailJSParams) => {
    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: userId,
          template_params: templateParams,
        }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(errorText || "Error al enviar el email")
      }

      setSuccess(true)
      return true
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error desconocido")
      return false
    } finally {
      setLoading(false)
    }
  }

  return { sendEmail, loading, error, success }
}

// Ejemplo de uso:
/*
import { useEmailJS } from '@/components/emailjs-client'

export default function ContactForm() {
  const { sendEmail, loading, error, success } = useEmailJS()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const message = e.target.message.value
    
    await sendEmail(
      'your_service_id',
      'your_template_id',
      'your_user_id',
      {
        from_name: name,
        reply_to: email,
        message: message
      }
    )
  }
  
  return (
    <form onSubmit={handleSubmit}>\
      {/* Campos del formulario */ 
/*    </form>
  )
}
*/

