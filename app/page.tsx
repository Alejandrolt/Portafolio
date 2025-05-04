import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-gray-950/80 dark:border-gray-800">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-xl font-bold md:text-2xl">
            Alejandro Largo Toro
          </h1>
          <nav>
            <ul className="flex space-x-4 md:space-x-6">
              <li>
                <a
                  href="#proyectos"
                  className="text-sm font-bold hover:text-primary transition-colors"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#experiencia"
                  className="text-sm font-bold hover:text-primary transition-colors"
                >
                  Experiencia
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-sm font-bold hover:text-primary transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container py-8 space-y-4">
        {/* Hero Section */}
        <section className="py-12 md:py-12">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Desarrollador de Software
              </h2>
              <p className="text-xl text-gray-500 dark:text-gray-400">
                Construyendo soluciones tecnológicas innovadoras y eficientes
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <a href="#proyectos">
                    Ver proyectos <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#contacto">Contactar</a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div className="absolute inset-1 bg-white dark:bg-gray-900 rounded-full overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src="img/foto1.png"
                      alt="Alejandro Largo Toro"
                      fill
                      sizes="(max-width: 768px) 256px, 320px"
                      className="object-center"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tecnologías</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center bg-orange-100 dark:bg-orange-900/20 rounded-xl mb-2">
                <Image src="img/html.png" alt="HTML" width={50} height={50} />
              </div>
              <span className="text-sm font-medium">HTML</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center bg-blue-100 dark:bg-blue-900/20 rounded-xl mb-2">
                <Image src="img/css.png" alt="CSS" width={50} height={50} />
              </div>
              <span className="text-sm font-medium">CSS</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center bg-pink-100 dark:bg-pink-900/20 rounded-xl mb-2">
                <Image src="img/sass.png" alt="SASS" width={50} height={50} />
              </div>
              <span className="text-sm font-medium">SASS</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center bg-yellow-100 dark:bg-yellow-900/20 rounded-xl mb-2">
                <Image
                  src="img/js.png"
                  alt="JavaScript"
                  width={50}
                  height={50}
                />
              </div>
              <span className="text-sm font-medium">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center bg-blue-100 dark:bg-blue-900/20 rounded-xl mb-2">
                <Image
                  src="img/python.png"
                  alt="Python"
                  width={50}
                  height={50}
                />
              </div>
              <span className="text-sm font-medium">Python</span>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="py-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Sobre Mí</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Soy un desarrollador de software apasionado por construir
              soluciones tecnológicas innovadoras y eficientes. Tengo
              experiencia en tecnologías como HTML, CSS, SCSS, JavaScript y
              Python, y me enfoco en crear productos que combinan funcionalidad,
              rendimiento y una excelente experiencia de usuario.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experiencia" className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            Experiencia Profesional
          </h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>

            {/* Freelance */}
            <div className="relative mb-16">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-white bg-blue-600 rounded-full">
                      2024 - Presente
                    </span>
                    <h3 className="text-xl font-bold mb-2">Freelance</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      Desarrollador
                    </p>
                    <div className="space-y-2">
                      <p className="flex items-center md:justify-end">
                        <span>
                          Diseño y desarrollo de interfaces front y backend para
                          la creación de plataformas web orientadas a gestión de
                          usuarios para ecommerce (emprendedores y pymes).
                        </span>
                      </p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2 md:justify-end">
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                        Optimización
                      </Badge>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                        Tecnología
                      </Badge>
                      <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
                        Proactividad
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
                  <div className="w-8 h-8 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>
            </div>

            {/* Audifarma */}
            <div className="relative mb-16">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
                  <div className="w-8 h-8 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-purple-500"></div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-white bg-purple-600 rounded-full">
                      2022 - Presente
                    </span>
                    <h3 className="text-xl font-bold mb-2">Audifarma</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      Aux Estrategia Servicios
                    </p>
                    <div className="space-y-2">
                      <p className="flex items-center">
                        <span>
                          Garantizar el correcto cumplimiento de los niveles de
                          servicio de la unidad de negocio asignada,
                          implementado herramientas tecnológicas de mejora y
                          optimización de procesos realizando desarrollos
                          propios (Excel y Phyton).
                        </span>
                      </p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
                        Optimizacion
                      </Badge>
                      <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100">
                        Tecnologia
                      </Badge>
                      <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100">
                        Mejora Continua
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Apostar */}
            <div className="relative mb-16">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-white bg-green-600 rounded-full">
                      2018 - 2020
                    </span>
                    <h3 className="text-xl font-bold mb-2">Apostar</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      Técnico Electronico
                    </p>
                    <div className="space-y-2">
                      <p className="flex items-center md:justify-end">
                        <span>
                          Gestionar y supervisar el correcto funcionamiento e
                          interconectividad de los equipos tecnológicos
                          asignados a los casinos de la organización,
                          garantizando la transmisión de datos y comunicación
                          con los entes regulatorios.
                        </span>
                      </p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2 md:justify-end">
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                        Supervisión
                      </Badge>
                      <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                        Soporte Técnico
                      </Badge>
                      <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100">
                        Gestión
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
                  <div className="w-8 h-8 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
              </div>
            </div>

            {/* Media Commerce */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 hidden md:block"></div>
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
                  <div className="w-8 h-8 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-orange-500"></div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-white bg-orange-600 rounded-full">
                      2010 - 2017
                    </span>
                    <h3 className="text-xl font-bold mb-2">Media Commerce</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      Tecnico Inalambrico
                    </p>
                    <div className="space-y-2">
                      <p className="flex items-center">
                        <span>
                          Gestionar y apoyar la ejecución de proyectos enfocados
                          en la administración de las redes inalámbricas de la
                          organización, garantizando la optimización de la misma
                          y la interconexión de los usuarios.
                        </span>
                      </p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                        Proyectos
                      </Badge>
                      <Badge className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-100">
                        Optimización
                      </Badge>
                      <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100">
                        Inventario
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="proyectos" className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12">Proyectos</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Proyecto de Películas"
                  width={400}
                  height={200}
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Aplicación de Películas</CardTitle>
                <CardDescription>
                  Aplicación web que permite a los usuarios buscar películas y
                  explorar detalles de cada una. Utiliza una API para obtener
                  datos actualizados de películas en tiempo real.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Tecnologías utilizadas</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>React</Badge>
                    <Badge>React Router</Badge>
                    <Badge>Axios</Badge>
                    <Badge>TMDb API</Badge>
                    <Badge>CSS Modules</Badge>
                  </div>
                </div>
                <Button asChild>
                  <a
                    href="https://alejandrolt.github.io/goit-react-hw-05-movies/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver proyecto <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Proyecto 2"
                  width={400}
                  height={200}
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Nombre del Proyecto 2</CardTitle>
                <CardDescription>
                  Otra descripción. Puedes incluir enlaces a demos, capturas de
                  pantalla o más detalles técnicos.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Tecnologías utilizadas</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>HTML</Badge>
                    <Badge>CSS</Badge>
                    <Badge>JavaScript</Badge>
                  </div>
                </div>
                <Button asChild>
                  <a
                    href="https://github.com/tuusuario/proyecto2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver en GitHub <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer/Contact Section */}
      <footer id="contacto" className="bg-gray-900 text-white py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Contacto</h2>
          <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-gray-800 p-3 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400">Email</h3>
                  <a
                    href="mailto:alejandrolt54@gmail.com"
                    className="text-lg hover:text-blue-400 transition-colors"
                  >
                    alejandrolt54@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gray-800 p-3 rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400">
                    Teléfono
                  </h3>
                  <a
                    href="https://wa.me/573117439052?text=Hola,%20vi%20tu%20portafolio%20y%20quiero%20más%20información."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-green-400 transition-colors"
                  >
                    +57 3117439052
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-gray-800 p-3 rounded-full">
                  <Linkedin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400">
                    LinkedIn
                  </h3>
                  <a
                    href="https://www.linkedin.com/in/alejandro-largo-toro-6a2a80232"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-blue-400 transition-colors"
                  >
                    AlejandroLT
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gray-800 p-3 rounded-full">
                  <Github className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400">GitHub</h3>
                  <a
                    href="https://github.com/Alejandrolt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-purple-400 transition-colors"
                  >
                    Alejandrolt
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center text-gray-400">
            <p>
              &copy; 2025 Alejandro Largo Toro. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
