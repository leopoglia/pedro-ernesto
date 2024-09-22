'use client'

import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { JSX, SVGProps, useState, useEffect } from "react"
import { motion, useAnimation, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const controls = useAnimation()
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  const testimonials = [
    {
      name: "Caroline",
      avatar: "https://avatars.preply.com/i/logos/i/logos/e16394b4-d049-4d38-853f-1628fac7c7f9.jpeg",
      text: "Excelente professor, super dinâmico, paciente, tem uma didática incrível. Melhor professor da plataforma sem dúvida."
    },
    {
      name: "Benedito",
      avatar: "https://avatars.preply.com/i/logos/i/logos/9330618a-5bbe-471c-a044-73a8262d39d1.jpg",
      text: "Este é um review sincero sobre as aulas do Pedro: Provavelmente você pode notar um diferencial já na primeira aula - pois obstante dos outros colegas professores, Pedro teve coragem de me corrigir já na primeira aula, mesmo sabendo que a minha adesão à critica, em primeira mão, poderia me fazer procurar outro profissional, uma vez que o mesmo não me conhecia. Sempre muito pontual em relação ao horário que combinamos; muito divertido, eloquente e sucinto ajeitando o meu pronunciamento em cada palavra. Mais que professor, hoje tenho um amigo que melhorou muito meu vocabulário no inglês."
    },
    {
      name: "Nanda",
      avatar: "https://avatars.preply.com/i/logos/i/logos/825085e8-caaa-4837-a3fe-91c219f8a442",
      text: "O Pedro é um professor encantador! Seu diferencial é conseguir trazer para as aulas diversos elementos dos mais variados assuntos de forma personalizada para cada aluno. Eu super recomendo a experiência de ter aulas com ele e o parabenizo por sua dedicação e paciência."
    },
    {
      name: "Karen",
      avatar: "https://avatars.preply.com/i/logos/0b032d96-2126-4d73-adcb-2583ce361530.jpg",
      text: "Não consigo expressar com palavras a excelência do professor Pedro. Ele possui uma didática e metodologia excepcionais, aliadas a uma paciência incomparável e um comprometimento inabalável com o ensino. Sua pontualidade é exemplar, e sua disposição para acolher novas ideias é notável. Além de ser um professor dedicado e atencioso, que corrige nossa pronúncia incessantemente, Pedro transcende o papel de educador, revelando-se um verdadeiro mestre e amigo. Fulcralmente, eu gostaria de expressar minha profunda gratidão pelo trabalho excepcional e pela dedicação como professor de inglês. Sua paixão pela língua e seu comprometimento em proporcionar uma educação de qualidade são verdadeiramente inspiradores. A abordagem inovadora do professor e o esforço constante para garantir que todos os alunos compreendam e apreciem o inglês têm um impacto significativo em nosso aprendizado. Além disso, possui habilidade em tornar as aulas desafiadoras e envolventes. Nesse sentido, agradeço ao professor por ser um educador tão dedicado e por fazer a diferença em nossa jornada de aprendizado."
    },
    // {
    //   name: "Fabiana",
    //   avatar: "https://avatars.preply.com/i/logos/8914191.jpg",
    //   text: "Estou adorando as aulas, ele tem uma paciência incrível, super didático e creio que com ele aprenderei com eficiência e rapidez. Thanks Teacher."
    // },
    // {
    //   name: "Rosana",
    //   avatar: "https://avatars.preply.com/i/logos/8323878.jpg",
    //   text: "Excelente, professor! Objetivo, didático, com muito domínio do idioma."
    // },
    {
      name: "Franciele",
      avatar: "https://avatars.preply.com/i/logos/i/logos/6317032.6ebd01bf59.JPG",
      text: "Super indico o Pedro, ele é rápido, dinâmico, usa várias formas para ensinar, a aula e muito bem aproveitada, estou gostando bastante."
    },
    {
      name: "Ariane",
      avatar: "https://avatars.preply.com/i/logos/5175293.jpg",
      text: "Pedro é um ótimo professor, esta me ajudando muito na conversação, e me ajudando a me desenvolver muito com materiais que me desafiam com palavras mais complexas e temas difíceis de me expressar, e assim consigo me desenvolver muito, saindo das conversas básicas e me aprofundando. O meu foco é conversação e ele está me ajudando muito, sempre muito atencioso, e muito didático. Vale a pena fazer aulas com ele, recomendo!"
    },
    {
      name: "Fabio",
      avatar: "https://avatars.preply.com/i/logos/4979664.jpg",
      text: "Pedro é um professor excelente, paciente e muito inteligente. A aula flui muito bem com ele, pois ele sabe manter a conversa atrativa e também sabe mudar de assunto quando começa a ficar menos interessante. Recomendo para todos que procuram um bom professor focado na conversação."
    },
    {
      name: "Andre",
      avatar: "https://avatars.preply.com/i/logos/2783413.jpg",
      text: "Ótimo professor! Ótimo conteúdo programático, pronuncia e paciente, insiste na pronúncia te ajudando a treinar seu ouvido para que você não consiga só falar, mas também, ouvir e entender o inglês cotidiano. O melhor que tive até hoje!"
    }
  ]

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    })
  }, [controls])

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="flex flex-col min-h-[100dvh] p-4 text-base bg-gradient-to-b from-background to-muted">
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="px-4 lg:px-6 h-14 flex items-center sticky top-0 z-50 bg-background/80 backdrop-blur-sm"
      >
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <motion.span
            className="font-bold text-xl"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
          >
            Pedro Ernesto
          </motion.span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <div className="text-sm hidden lg:flex sm:gap-6 items-center">
            <Link href="#experience" className="font-medium hover:underline underline-offset-4" prefetch={false}>
              Experiência
            </Link>
            <Link href="#testimonials" className="font-medium hover:underline underline-offset-4" prefetch={false}>
              Testemunhos
            </Link>
          </div>
          <div className="ml-10 hidden lg:flex space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link target="_blank" href="https://preply.com/pt/professor/1977242">
                <Button variant="default">Preply</Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link target="_blank" href="https://wa.me/5522996039805">
                <Button variant="outline">WhatsApp</Button>
              </Link>
            </motion.div>
          </div>
        </nav>
      </motion.header>
      <main className="flex-1">
        <section id="about" className="w-full py-12 md:py-24">
          <div className="px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative aspect-square overflow-hidden rounded-xl lg:order-last"
              >
                <img
                  src="/pedro.jpg"
                  alt="Pedro"
                  className="object-cover w-full h-full"
                />
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col justify-center space-y-4"
              >
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Pedro Ernesto, o seu professor de inglês
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Sou um professor de inglês experiente com uma paixão por ajudar alunos de todos os níveis a melhorar as suas
                    competências linguísticas. Deixe-me guiá-lo na sua jornada para a fluência.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link target="_blank" href="https://preply.com/pt/professor/1977242">
                      <Button className="w-full sm:w-auto">Agende uma Aula</Button>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link target="_blank" href="https://wa.me/5522996039805">
                      <Button variant="outline" className="w-full sm:w-auto">Fale Comigo</Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="experience"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">A minha experiência de ensino</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ensino inglês há mais de 8 anos, ajudando estudantes de todas as idades e origens a melhorar
                  as suas competências linguísticas. A minha abordagem é adaptada às necessidades e ao estilo de aprendizagem de cada aluno.
                </p>
              </div>
            </div>
            <div className="mx-auto flex justify-center md:w-1/3 max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <motion.div
                variants={staggerChildren}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid gap-6"
              >
                <motion.div  className="flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-4">
                    <PencilIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Explicações individuais</h3>
                  <p className="text-muted-foreground">
                    Ofereço sessões de explicações individuais adaptadas às suas necessidades e objectivos específicos.
                  </p>
                </motion.div>
                <motion.div className="flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-4">
                    <UsersIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Aulas em grupo</h3>
                  <p className="text-muted-foreground">
                    Também dou aulas a pequenos grupos, proporcionando um ambiente de aprendizagem colaborativo e envolvente.
                  </p>
                </motion.div>
                <motion.div className="flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-4">
                    <LaptopIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Aulas online</h3>
                  <p className="text-muted-foreground">
                    Para maior comodidade, ofereço aulas online que pode assistir no conforto da sua própria casa.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          style={{ opacity }}
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32"
        >
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Opinião dos meus alunos</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ouça alguns dos alunos com quem tive o prazer de trabalhar.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-12">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar>
                        <AvatarImage src={testimonials[currentTestimonial].avatar} />
                        <AvatarFallback>{testimonials[currentTestimonial].name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">{testimonials[currentTestimonial].name}</p>
                        <p className="text-sm text-muted-foreground">Aluno(a)</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      &quot;{testimonials[currentTestimonial].text}&quot;
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentTestimonial(index)}
                    className={currentTestimonial === index ? "bg-primary text-primary-foreground" : ""}
                  >
                    {index + 1}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"
      >
        <p className="text-xs text-muted-foreground">&copy; 2024 Pedro Ernesto. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
        </nav>
      </motion.footer>
    </div>
  )
}

function PencilIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}

function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function LaptopIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  )
}