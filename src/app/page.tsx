"use client"

import { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import dynamic from "next/dynamic"

// Componentes de sección
import HeroSection from "@/components/hero-section"
import WorksSection from "@/components/works-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

// Importar el componente de servicios con carga dinámica para evitar problemas de hidratación
const ServicesSection = dynamic(() => import("@/components/services-section-simple"), {
  ssr: false,
  loading: () => (
    <div className="py-20 px-4 flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
})

// Definir las secciones para facilitar la navegación
const sections = [
  { id: "inicio", label: "INICIO" },
  { id: "servicios", label: "SERVICIOS" },
  { id: "trabajos", label: "TRABAJOS" },
  { id: "contacto", label: "CONTACTO" },
]

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")
  const [mounted, setMounted] = useState(false)

  // Función mejorada para detectar la sección activa
  const detectActiveSection = useCallback(() => {
    if (typeof window === "undefined") return

    const scrollPosition = window.scrollY + window.innerHeight / 3

    // Recorremos las secciones en orden inverso para manejar correctamente el solapamiento
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i].id)
      if (!section) continue

      const sectionTop = section.offsetTop
      const sectionBottom = sectionTop + section.offsetHeight

      // Si la posición de desplazamiento está dentro de los límites de la sección
      if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
        setActiveSection(sections[i].id)
        break
      }
    }
  }, [])

  // Asegurarse de que el componente esté montado antes de renderizar
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const handleScroll = () => {
      // Detectar si hemos desplazado más allá del umbral para cambiar el estilo de la barra de navegación
      setScrolled(window.scrollY > 50)

      // Detectar la sección activa
      detectActiveSection()
    }

    // Configurar el detector de desplazamiento
    window.addEventListener("scroll", handleScroll)

    // Ejecutar una vez al inicio para establecer la sección correcta
    detectActiveSection()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [mounted, detectActiveSection])

  const scrollToSection = (id: string) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(id)
      if (element) {
        // Usar un pequeño offset para evitar que el encabezado fijo oculte el contenido
        const offset = 80
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        })
      }
    }
  }

  // Asegurarse de que el componente esté montado antes de renderizar
  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Navbar */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-black/80 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo - Ahora a la izquierda */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-white font-bold text-xl tracking-tight">GIMLET</span>
            </Link>

            {/* Desktop Navigation - Centrado y mejorado */}
            <nav className="hidden md:flex items-center justify-center gap-1 bg-black/30 backdrop-blur-sm rounded-full px-2 py-1 border border-purple-900/20">
              {sections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "px-4 py-2 rounded-full transition-all duration-300 text-sm tracking-wide",
                    activeSection === item.id
                      ? "bg-purple-600/80 text-white font-medium"
                      : "text-white/70 hover:text-white hover:bg-white/10",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Botones de acción - A la derecha */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                className="bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => scrollToSection("contacto")}
              >
                Contáctanos
              </Button>

              <Link href="/entrevista-virtual">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white border border-purple-500">
                  Trabajá con Nosotros
                </Button>
              </Link>
            </div>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-black/95 border-purple-900/30">
                <div className="flex flex-col gap-6 mt-10">
                  {sections.map((item) => (
                    <SheetTrigger asChild key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={cn(
                          "text-left py-2 px-4 rounded-lg transition-colors",
                          activeSection === item.id
                            ? "bg-purple-600/20 text-white font-medium"
                            : "text-white/70 hover:text-white hover:bg-white/5",
                        )}
                      >
                        {item.label}
                      </button>
                    </SheetTrigger>
                  ))}
                  <SheetTrigger asChild>
                    <Button
                      className="bg-purple-600 hover:bg-purple-700 text-white mt-4"
                      onClick={() => scrollToSection("contacto")}
                    >
                      Contáctanos
                    </Button>
                  </SheetTrigger>
                  <SheetTrigger asChild>
                    <Link href="/entrevista-virtual">
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white mt-2 w-full border border-purple-500">
                        Trabajá con Nosotros
                      </Button>
                    </Link>
                  </SheetTrigger>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="overflow-hidden">
        <HeroSection />
        <ServicesSection />
        <WorksSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

