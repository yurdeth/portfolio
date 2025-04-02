import Link from "next/link"
import { ArrowUpRight, Dribbble, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function PortfolioPage() {
  // Project data
  const projects = [
    {
      id: 1,
      url: "https://ecommerce.creativetools.space",
      title: "Rediseño E-commerce",
      description: "Investigación UX, Diseño UI",
      icon: "🛒",
      color: "bg-blue-100 dark:bg-blue-950",
      iconColor: "text-blue-500",
    },
    {
      id: 2,
      url: "https://ecommerce.creativetools.space",
      title: "Dashboard Financiero",
      description: "Diseño UI, Prototipado",
      icon: "📊",
      color: "bg-teal-100 dark:bg-teal-950",
      iconColor: "text-teal-500",
    },
    {
      id: 3,
      url: "https://ecommerce.creativetools.space",
      title: "App de Salud",
      description: "Investigación UX, Diseño UI",
      icon: "❤️",
      color: "bg-rose-100 dark:bg-rose-950",
      iconColor: "text-rose-500",
    },
    {
      id: 4,
      url: "https://ecommerce.creativetools.space",
      title: "Plataforma de Reservas de Viajes",
      description: "Diseño UI, Pruebas de Usuario",
      icon: "✈️",
      color: "bg-amber-100 dark:bg-amber-950",
      iconColor: "text-amber-500",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Angel Gabriel
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link href="#projects" className="text-sm font-medium hover:text-primary">
              Proyectos
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              Sobre mí
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contacto
            </Link>
          </nav>
          <Button asChild size="sm">
            <Link href="#contact">Contáctame</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Diseñador UI/UX creando experiencias digitales <span className="text-primary">cautivadoras</span>
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Hola, soy Angel Vasquez. Un Diseñador UI/UX Junior apasionado por crear interfaces de usuario intuitivas y atractivas que resuelven problemas reales.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="#projects">Ver Mi Trabajo</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#about">Sobre Mí</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-muted py-20">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">Proyectos Destacados</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {projects.map((project) => (
                <Link
                  href={project.url}
                  key={project.id}
                  className="group transition-all hover:scale-[1.02]"
                  target={`_blank`}
                >
                  <Card className="h-full overflow-hidden border-2 transition-all hover:border-primary">
                    <CardHeader className={`${project.color} flex h-32 items-center justify-center`}>
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background text-4xl shadow-sm">
                        {project.icon}
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <h3 className="mb-2 font-bold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </CardContent>
                    <CardFooter className="border-t p-4">
                      <span className="flex items-center text-sm font-medium text-primary">
                        Ver Proyecto <ArrowUpRight className="ml-1 h-4 w-4" />
                      </span>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">Sobre Mí</h2>
            <div className="rounded-xl bg-muted p-8">
              <p className="mb-4 text-lg">
                Soy un Diseñador UI/UX Junior con pasión por crear experiencias de usuario intuitivas y atractivas. Mi
                enfoque combina el diseño estético con el pensamiento centrado en el usuario para construir interfaces que son tanto
                bellas como funcionales.
              </p>
              <p className="mb-4 text-lg">
                Con formación en diseño gráfico y una creciente experiencia en experiencia de usuario, aporto una perspectiva
                única a cada proyecto. Estoy constantemente aprendiendo y ampliando mis habilidades para mantenerme a la vanguardia
                de las tendencias y mejores prácticas de diseño.
              </p>
              <p className="text-lg">
                Actualmente estoy buscando oportunidades para colaborar en proyectos emocionantes y contribuir a un
                equipo de diseño con visión de futuro.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-primary py-20 text-primary-foreground">
          <div className="container text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Trabajemos Juntos</h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl">
              Actualmente estoy disponible para trabajo freelance y abierto a oportunidades de tiempo completo. Si deseas hablar sobre un
              proyecto o simplemente saludar, ¡contáctame!
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="mailto:contact@angelgabriel.com">
                <Mail className="mr-2 h-5 w-5" /> angelvasquezoficial@gmail.com
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Angel Gabriel. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com"
                className="text-muted-foreground hover:text-primary"
                aria-label="LinkedIn" target="_blank"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://github.com/yurdeth" className="text-muted-foreground hover:text-primary" aria-label="GitHub" target="_blank">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

