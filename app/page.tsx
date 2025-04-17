import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PrimaryButton } from "@/components/ui/primary-button"
import StatsCard from "@/components/stats-card"
import BlogCard from "@/components/blog-card"
import SolutionsSection from "@/components/solutions-section"
import VideoSlider from "@/components/video-slider"
import { blogPosts } from "@/lib/blog-data"
import { portfolioProjects, categories } from "@/lib/portfolio-data"
import PartnersSlider from "@/components/partners-slider"
import { Metadata } from "next"

export default function Home() {
  return (
    <main className="min-h-screen bg-black bg-gradienteImgHome bg-repeat bg-cover text-white">
      {/* Hero Section */}
      <section className=" mx-auto pt-40 pb-16 px-5 md:px-0">
        <div className="">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-regular mb-2 text-left">
              Estratégias que <br/>geram resultados
            </h1>
          </div>
          <div className="flex items-center justify-end mt-8 md:ml-[35%] mb-16">
            <p className="text-[#fc4c01] whitespace-nowrap text-2xl font-thin mr-4">We are the action</p>
            <div className="h-[5px] w-screen bg-gradient-to-r from-[#fc4c01] to-purple-600"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-white mb-8 font-light tracking-wider text-left">
              <strong>Com 10 anos de história</strong>, a TSA Comunica se transformou em um hub de negócios para aumentar sua visibilidade, engajar seu público e fortalecer sua marca no mercado.
            </p>
          </div>
          <div className="flex justify-center">
            <PrimaryButton>
              <Link href="/contato">
                FALE COM UM ESPECIALISTA
              </Link>
            </PrimaryButton>
          </div>
        </div>

        <div className="mt-28 max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto">
          <StatsCard title="Mais de" value="400" description="Clientes atendidos" />
          <StatsCard title="Mais de" value="100M" description="Em Faturamento gerado" />
          <StatsCard title="Mais de" value="3mil" description="Projetos realizados" />
        </div>
      </section>

      {/* Solutions Section */}
      <section className="max-w-[1180px] mx-auto px-4 py-16">
        <SolutionsSection />
      </section>

      {/* About Us Section */}
      <section className="max-w-[1180px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col text-center justify-center items-center md:items-start md:pr-20">
            <h2 className="text-4xl font-regular md:text-left mb-10 text-center">Sobre nós</h2>
            <p className="text-gray-300 mb-10 md:text-left">
            Na TSA Business Hub, nossa jornada começou em 2017 com uma missão clara:<strong>ajudar empresas a se destacarem por meio de estratégias integradas de branding e marketing</strong>. Desde então, temos nos dedicado a entender as necessidades específicas de cada cliente e a entregar soluções personalizadas que geram resultados reais.
            </p>
            <PrimaryButton className="px-6 py-3 text-sm max-w-52">
              <Link href="/sobre">
                SAIBA MAIS
              </Link> 
            </PrimaryButton>
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/image/home/sobre-nos-imagem.png"
              alt="Team photo"
              width={600}
              height={400}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section - Updated to match design and use portfolio data */}
      <section className="py-5 md:py-16">
        <div className="max-w-[1180px] mx-auto bg-black rounded-2xl p-5 md:p-20">
          <h2 className="text-4xl font-regular mb-2 text-center">
            CASES DE <span className="text-[#fc4c01] font-bold">GRANDE</span> SUCESSO
          </h2>

          <div className="grid grid-cols-12 gap-4 my-16">
            {/* First row */}
            <div className="col-span-12 md:col-span-4 row-span-2">
              <Link href={`/cases?id=${portfolioProjects[0]?.id}`} className="block h-full">
                <div className="relative rounded-xl overflow-hidden h-full bg-red-500">
                  <Image
                    src={portfolioProjects[0]?.alternativeBanner || portfolioProjects[0]?.mainImage}
                    alt={portfolioProjects[0]?.title || "Case"}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                    <p className="text-sm opacity-80">{portfolioProjects[0]?.client || "Cliente"}</p>
                    <h3 className="text-xl font-bold">{portfolioProjects[0]?.title || "Título"}</h3>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-span-12 md:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
                {/* Top row of smaller cases */}
                {portfolioProjects.slice(1, 4).map((project, index) => (
                  <Link key={project.id} href={`/cases?id=${project.id}`} className="block">
                    <div className="relative rounded-xl overflow-hidden aspect-square bg-blue-500">
                      <Image
                        src={project.alternativeBanner || project.mainImage}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                        <p className="text-xs opacity-80">{project.client}</p>
                        <h3 className="text-sm font-bold">{project.title}</h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Second row */}
            <div className="col-span-12 md:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                {/* Bottom row of medium cases */}
                {portfolioProjects.slice(4, 8).map((project) => (
                  <Link key={project.id} href={`/cases?id=${project.id}`} className="block">
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#fc4c01]">
                      <Image
                        src={project.alternativeBanner || project.mainImage}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                        <p className="text-sm opacity-80">{project.client}</p>
                        <h3 className="text-lg font-bold">{project.title}</h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <PrimaryButton className="px-6 py-3 md:text-sm">
              <Link href="/cases" className="flex text-center">
                CONFIRA OUTROS CASES <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* International Section */}
      <section className="max-w-[1180px] mx-auto px-4 py-5 md:py-16">
        <div className="bg-radial from-[#000000] from-40% to-[#6e00db] rounded-3xl p-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 space-y-4 mb-8 md:mb-0 flex flex-col justify-between">
              {/* Country Cards */}
              <div className="bg-linearToBr from-[#6e00db] to-[#000000] backdrop-blur-sm rounded-3xl p-0 flex flex-col">
                <div className="flex flex-row justify-center items-center mb-1 rounded-t-3xl p-2 bg-[#10021B]">
                  <Image
                    src={"/image/home/bandeira-brasil.png"}
                    alt="Bandeira do Brasil"
                    width={45}
                    height={25}
                    className="mr-4"
                  />
                  <h3 className="text-xl font-light">Brasil</h3>
                </div>
                
                <div className="p-3 rounded-b-3xl flex flex-wrap justify-between">
                 <Image
                    src={"/image/home/logos/oster-logo.png"}
                    alt="Logo Oster"
                    width={40}
                    height={25}
                    className="mb-2"
                  />
                  <Image
                    src={"/image/home/logos/tecnofeal-logo.png"}
                    alt="Logo Tecnofeal"
                    width={75}
                    height={25}
                    className="mb-2"
                  />
                  <Image
                    src={"/image/home/logos/black-decker-logo.png"}
                    alt="Logo Black+Decker"
                    width={40}
                    height={25}
                    className="mb-2"
                  />
                  <Image
                    src={"/image/home/logos/adere-logo.png"}
                    alt="Logo Adere"
                    width={50}
                    height={25}
                    className="mb-2"
                  />
                  <Image
                    src={"/image/home/logos/huehoco-logo.png"}
                    alt="Logo Huehoco ACP do Brasil"
                    width={130}
                    height={25}
                    className=""
                  />
                  <Image
                    src={"/image/home/logos/sib-logo.png"}
                    alt="Logo SI do Brasil"
                    width={80}
                    height={25}
                    className=""
                  />
                </div>
              </div>

              <div className="bg-linearToBr from-[#6e00db] to-[#000000] backdrop-blur-sm rounded-3xl p-0 flex flex-col">
                <div className="flex flex-row justify-center items-center mb-1 rounded-t-3xl p-2 bg-[#10021B]">
                  <Image
                    src={"/image/home/bandeira-uruguai.png"}
                    alt="Bandeira do Uruguai"
                    width={45}
                    height={25}
                    className="mr-4"
                  />
                  <h3 className="text-xl font-light">Uruguai</h3>
                </div>
                
                <div className="p-2 rounded-b-3xl flex flex-wrap justify-center">
                 <Image
                    src={"/image/home/logos/tiotom-logo.png"}
                    alt="Logo Tio Tom"
                    width={110}
                    height={25}
                    className="mb-2"
                  />
                  <Image
                    src={"/image/home/logos/lafiesta-logo.png"}
                    alt="Logo La Fiesta Punta"
                    width={110}
                    height={25}
                    className="mb-2"
                  />
                </div>
              </div>

              <div className="bg-linearToBr from-[#6e00db] to-[#000000] backdrop-blur-sm rounded-3xl p-0 flex flex-col min-h-36">
                <div className="flex flex-row justify-center items-center mb-1 rounded-t-3xl p-2 bg-[#10021B]">
                  <Image
                    src={"/image/home/bandeira-alemanha.png"}
                    alt="Bandeira da Alemanha"
                    width={45}
                    height={25}
                    className="mr-4"
                  />
                  <h3 className="text-xl font-light">Alemanha</h3>
                </div>
                
                <div className="p-3 rounded-b-3xl flex flex-wrap justify-center items-center h-full">
                 <Image
                    src={"/image/home/logos/huehoco-ale-logo.png"}
                    alt="Logo Huehoco Group"
                    width={150}
                    height={25}
                    className="mb-2"
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-3/4 pl-0 md:pl-8">
              <div className="rounded-lg overflow-hidden h-full">
                <Image
                  src="/image/home/mapa-tsa2.png"
                  alt="Mapa internacional"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersSlider />

      {/* Feedback Section */}
      <section className="max-w-[1180px] mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-2 text-center">Feedback</h2>
        <p className="text-center text-lg mb-8">
          O que <strong className="text-[#fc4c01]">nossos clientes</strong> dizem
        </p>

        <div className="max-w-3xl mx-auto">
          <VideoSlider />

          <div className="flex justify-center mt-8">
            <PrimaryButton className="px-6 py-3 text-xs md:text-sm">
              <Link href="/contato">
                SAIBA O QUE NOS TORNA ÚNICOS
              </Link>
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* Blog Section - Updated to use blog data */}
      <section className="max-w-[1180px] mx-auto px-4 py-5 md:py-16">
        <div className="bg-[#1a1a1a] rounded-xl p-5 md:p-20">
          <h2 className="text-3xl font-regular mb-8 text-center">
            Descubra insights e tendências <br />
            do marketing como um todo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="flex justify-center">
            <Link href="/blog">
              <PrimaryButton className="px-6 py-3 text-sm">
                <Link href="/blog" className="flex">
                  VER TODOS OS ARTIGOS <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

