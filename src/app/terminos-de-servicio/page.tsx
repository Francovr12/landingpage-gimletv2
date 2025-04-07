import dynamic from "next/dynamic"

// Metadatos para SEO
export const metadata = {
  title: "Términos de Servicio | GIMLET",
  description: "Términos de servicio de GIMLET",
}

// Importar el componente dinámicamente
const TerminosDeServicioComponent = dynamic(() => import("@/components/pages/terminos-de-servicio"), {
  ssr: true, // Podemos usar SSR ya que no hay problemas de hidratación como con la cámara
})

export default function TerminosDeServicioPage() {
  return <TerminosDeServicioComponent />
}

