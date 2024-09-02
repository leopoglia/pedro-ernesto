/**
 * v0 by Vercel.
 * @see https://v0.dev/t/pOU9f9JcWB7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] p-4">
      <header className="px-4 text-lg lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>

          <span className="font-bold text-xl">Pedro Ernesto</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <div className="hidden lg:flex sm:gap-6 items-center">
            <Link href="#" className="font-medium hover:underline underline-offset-4" prefetch={false}>
              Experiência
            </Link>
            <Link href="#" className="font-medium hover:underline underline-offset-4" prefetch={false}>
              Testemunhos
            </Link>
          </div>
          <div className="ml-10">
            <Link target="_blank" href="https://preply.com/pt/professor/1977242" className="mr-6 inline-flex h-12 items-center justify-center rounded-md bg-pink-500 px-8 font-medium text-white shadow transition-colors hover:bg-pink-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Preply
            </Link>

            <Link target="_blank" href="https://wa.me/5522996039805" className="inline-flex h-12 items-center justify-center rounded-md bg-green-500 px-8 font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Whatssap
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="px-4 md:px-6 xl:w-full xl:flex xl:justify-between">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:w-full 2xl:px-80">
              <img
                src="/pedro.jpg"
                width="550"
                height="550"
                alt="Pedro"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Pedro Ernesto, o seu professor de inglês
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Sou um professor de inglês experiente com uma paixão por ajudar alunos de todos os níveis a melhorar as suas
                    competências linguísticas. Deixe-me guiá-lo na sua jornada para a fluência.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-muted rounded-2xl">
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
            <div className="w-full mx-auto grid max-w-5xl items-center gap-6 py-12">
              {/* <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Classroom"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              /> */}
              <div className="w-full flex flex-col justify-center space-y-4">
                <ul className="grid gap-6 text-center">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Explicações individuais</h3>
                      <p className="text-muted-foreground">
                        Ofereço sessões de explicações individuais adaptadas às suas necessidades e objectivos específicos.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Aulas em grupo</h3>
                      <p className="text-muted-foreground">
                        Também dou aulas a pequenos grupos, proporcionando um ambiente de aprendizagem colaborativo e envolvente.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Aulas online</h3>
                      <p className="text-muted-foreground">
                        Para maior comodidade, ofereço aulas online que pode assistir no conforto da sua própria casa.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Opinião dos meus alunos</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ouvir alguns dos alunos com quem tive o prazer de trabalhar.
              </p>
            </div>
            <div className="mx-auto w-full max-w-3xl space-y-6">
              <div className="grid gap-4 rounded-lg bg-muted p-6">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://avatars.preply.com/i/logos/i/logos/e16394b4-d049-4d38-853f-1628fac7c7f9.jpeg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">Caroline</p>
                    <p className="text-sm text-muted-foreground">Aluna</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  &quot;Excelente professor, super dinâmico, paciente, tem uma didática incrível. Melhor professor da plataforma sem dúvida.&quot;
                </p>
              </div>
              <div className="grid gap-4 rounded-lg bg-muted p-6">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://avatars.preply.com/i/logos/i/logos/9330618a-5bbe-471c-a044-73a8262d39d1.jpg" />
                    <AvatarFallback>MR</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">Benedito</p>
                    <p className="text-sm text-muted-foreground">Aluno</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  &quot;Este é um review sincero sobre as aulas do Pedro: Provavelmente você pode notar um diferencial já na primeira aula - pois obstante dos outros colegas professores, Pedro teve coragem de me corrigir já na primeira aula, mesmo sabendo que a minha adesão à critica, em primeira mão, poderia me fazer procurar outro profissional, uma vez que o mesmo não me conhecia. Sempre muito pontual em relação ao horário que combinamos; muito divertido, eloquente e sucinto ajeitando o meu pronunciamento em cada palavra. Mais que professor, hoje tenho um amigo que melhorou muito meu vocabulário no inglês.&quot;
                </p>
              </div>

              <div className="grid gap-4 rounded-lg bg-muted p-6">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://avatars.preply.com/i/logos/i/logos/825085e8-caaa-4837-a3fe-91c219f8a442" />
                    <AvatarFallback>MR</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">Nanda</p>
                    <p className="text-sm text-muted-foreground">Aluna</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  &quot;O Pedro é um professor encantador! Seu diferencial é conseguir trazer para as aulas diversos elementos dos mais variados assuntos de forma personalizada para cada aluno. Eu super recomendo a experiência de ter aulas com ele e o parabenizo por sua dedicação e paciência.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Pedro Ernesto. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
        </nav>
      </footer>
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