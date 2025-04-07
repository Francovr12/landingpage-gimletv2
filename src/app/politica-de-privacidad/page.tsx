import dynamic from "next/dynamic"

// Metadatos para SEO
export const metadata = {
  title: "Política de Privacidad | GIMLET",
  description: "Política de privacidad de GIMLET",
}

// Importar el componente dinámicamente
const PoliticaDePrivacidadComponent = dynamic(() => import("@/components/pages/politica-de-privacidad"), {
  ssr: true, // Podemos usar SSR ya que no hay problemas de hidratación como con la cámara
})

export default function PoliticaDePrivacidadPage() {
  return <PoliticaDePrivacidadComponent />
}

