"use client"

import type React from "react"
import { useState, useEffect } from "react"

export default function DarkModeProvider({ children }: { children: React.ReactNode }) {
  // Inicializamos con null para evitar renderizado en el servidor
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Marcar que el componente está montado
    setMounted(true)

    // Detectar preferencia del usuario
    const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setIsDarkMode(userPrefersDark)

    // Opcional: escuchar cambios en la preferencia del sistema
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches)

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  // No renderizar nada hasta que estemos en el cliente
  if (!mounted) {
    return <>{children}</>
  }

  return <div className={isDarkMode ? "dark" : ""}>{children}</div>
}


