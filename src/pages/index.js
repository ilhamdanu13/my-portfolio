import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BsArrowRight } from "react-icons/bs";
import { SiTailwindcss, SiExpress, SiMysql } from "react-icons/si";
import {
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoMongodb,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import Image from "next/image";
import Gradient2 from "@/./assets/images/Gradient2.png";
import Gradient3 from "@/./assets/images/Gradient3.png";
import DigitalPa from "@/assets/projects/project-digitalpa.webp";
import Suma from "@/assets/projects/project-suma.webp";
import TheButterfly from "@/assets/projects/project-thebutterfly.webp";
import WebDev from "@/assets/projects/webdev.webp";
import Ai from "@/assets/projects/ai.webp";
import ScrollTop from "@/components/ScrollTop";
import Head from 'next/head'

export default function Home() {
  return (
    

    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-79BXLN2207"></script>
        <script dangerouslySetInnerHTML={{ __html:` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-79BXLN2207');` }}>
         
        </script>
      </Head>

      <main className="bg-[#091427] font-poppins">
        <section
          id="/"
          className="bg-[url('../assets/images/Gradient1.png')] md:bg-cover relative lg:mb-32 mb-16"
        >
          <div className=" md:py-10 mx-auto container">
            <Navbar />

            <div
              id="about"
              className="container px-4 md:px-16 lg:px-24 flex md:flex-row flex-col-reverse gap-y-4"
            >
              <div className="md:w-2/3">
                <h1 className="text-[#868490] text-xl md:text-2xl lg:text-3xl font-semibold lg:mb-10 mb-5 hidden md:block">
                  FULLSTACK WEB DEVELOPER
                </h1>

                <div className="md:flex flex-col gap-y-4 mb-8 md:mb-5 lg:mb-8 hidden">
                  <span className="font-semibold text-white text-2xl lg:text-4xl  ">
                    Ilham Danu
                  </span>
                  <div className=" border-b-4 rounded border-[#F8E7A1] w-max md:w-36 lg:w-52 mb-3"></div>
                </div>

                <p className="text-[#868490] lg:text-xl lg:leading-9 mb-9 md:mb-5 lg:mb-9 md:w-5/6 lg:w-2/3">
                  An adaptive and fast learner Fullstack Web Developer. Now using
                  React, React Native, Express and other Javascript frameworks to
                  develop web and mobile apps. Have made several projects such as
                  an e-wallet web app using Next, ticket movie web & mobile app
                  using React, and more. Also can work well as part of team,
                  hardworker and eager to learn.
                </p>

                <div className="flex items-center gap-x-10">
                  <span className="text-xl text-[#F8E7A1] ">Let's Talk</span>
                  <BsArrowRight className="w-6 h-6 text-[#F8E7A1]" />
                </div>
              </div>

              <div className="md:w-1/3">
                <img src="/Profile.jpg" alt="profile" />
              </div>

              <div className="md:hidden">
                <h1 className="text-[#868490] text-xl md:text-3xl font-semibold ">
                  FULLSTACK WEB DEVELOPER
                </h1>

                <div className="flex flex-col gap-y-4">
                  <span className="font-semibold text-white text-2xl md:text-4xl  ">
                    Ilham Danu
                  </span>
                  <div className=" border-b-4 rounded border-[#F8E7A1] w-max md:w-52 mb-3"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="absolute  lg:-top-36 md:top-0 top-40 z-0">
            <Image src={Gradient2} alt="gradient" />
          </div>
        </section>

        {/* Tagline 1*/}
        <section className="mb-16 container mx-auto md:px-16 lg:px-0">
          {/* Desktop */}
          <div className="md:mb-24 hidden lg:flex lg:flex-row flex-col lg:justify-center text-center font-bold">
            <div className="md:text-2xl lg:text-3xl uppercase font-syne text-white">
              <h2 className="md:mb-5 text-center">
                <i>" From Vision to Reality</i>
              </h2>
              <h2 className="md:mb-5">
                <i>
                  engineered to{" "}
                  <span className="text-primary">
                    propel your business into the
                  </span>
                </i>
              </h2>
              <h2>
                <i className="text-center text-primary">
                  forefront of innovation.
                </i>{" "}
                "
              </h2>
            </div>
          </div>

          {/* Mobile */}
          <div className="container mx-auto text-lg md:text-2xl lg:text-3xl uppercase font-syne text-white font-bold lg:hidden text-center">
            <h2>
              <i>
                " From Vision to Reality{" "}
                <span className="text-primary">Build High Performance Ads </span>
                engineered to{" "}
                <span className="text-primary">
                  propel your business into the{" "}
                </span>
                <span className="text-center text-primary">
                  forefront of innovation.
                </span>{" "}
                "
              </i>
            </h2>
          </div>
        </section>

        {/* Technologies */}
        <section className=" lg:mb-32 mb-16 relative">
          <div className="container mx-auto px-4 md:px-0 ">
            <div className="flex flex-col justify-center items-center gap-y-2">
              <h1 className="text-white text-3xl font-poppins text-center md:border-0 border-b-4 border-[#F8E7A1]">
                Technologies
              </h1>
              <div className=" border-b-4 rounded border-[#F8E7A1] md:w-1/6 mb-12"></div>
            </div>

            <div className="flex flex-row flex-wrap justify-between items-center gap-4 md:gap-20 lg:gap-4 p-9 bg-black/30">
              <BiLogoJavascript className="text-white w-20 h-20 md:w-24 md:h-24" />
              <BiLogoNodejs className="text-white w-20 h-20 md:w-24 md:h-24" />
              <SiExpress className="text-white w-20 h-20 md:w-24 md:h-24" />
              <BiLogoReact className="text-white w-20 h-20 md:w-24 md:h-24" />
              <TbBrandNextjs className="text-white w-20 h-20 md:w-24 md:h-24" />
              <SiTailwindcss className="text-white w-20 h-20 md:w-24 md:h-24" />
              <SiMysql className="text-white w-20 h-20 md:w-24 md:h-24" />
              <BiLogoMongodb className="text-white w-20 h-20 md:w-24 md:h-24" />
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="absolute top-0 md:top-72 lg:top-0 right-0 z-0">
            <Image src={Gradient3} alt="gradient" />
          </div>
        </section>

        <section
          id="services"
          className="container mx-auto px-4 md:px-16 lg:px-24 flex flex-col lg:flex-row lg:justify-between items-center mb-8 md:mb-16 lg:mb-24"
        >
          <div className="mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-5xl md:text-center lg:text-left text-white lg:w-3/4 leading-relaxed">
              My Awesome Service
            </h2>
          </div>

          <div className="flex flex-col">
            <div className="bg-white/10 p-4 md:p-8 flex flex-col md:flex-row md:items-center gap-y-4 gap-x-8 mb-8 rounded z-50">
              <Image
                src={WebDev}
                alt="Web App"
                width={200}
                height={200}
                className="rounded object-cover w-full md:w-max"
              />

              <div className="text-white flex flex-col justify-center gap-y-2">
                <span className="text-white text-2xl w-max">Web Development</span>
                <div className="flex justify-between">
                  <span className="text-xl">6+ Project</span>
                  {/* <BsArrowRight className="text-[#F8E7A1] w-8 h-8 md:hidden" /> */}
                </div>
              </div>

              {/* <div>
                <BsArrowRight className="text-[#F8E7A1] w-8 h-8 hidden md:block" />
              </div> */}
            </div>

            <div className="bg-white/10 p-4 md:p-8 flex flex-col md:flex-row md:items-center gap-y-4 gap-x-8 rounded z-50">
              <Image
                src={Ai}
                alt="Web App"
                width={200}
                height={200}
                className="rounded object-cover w-full md:w-max"
              />

              <div className="text-white flex flex-col justify-center gap-y-2">
                <span className="text-white text-2xl">Machine Learning</span>
                <div className="flex justify-between">
                  <span className="text-xl">5+ Project</span>
                  {/* <BsArrowRight className="text-[#F8E7A1] w-8 h-8 md:hidden" /> */}
                </div>
              </div>

              {/* <div>
                <BsArrowRight className="text-[#F8E7A1] w-8 h-8 hidden md:block" />
              </div> */}
            </div>
          </div>
        </section>

        <section className="container mx-auto mb-8 md:mb-16 lg:mb-24">
          <div className="lg:flex lg:flex-row flex-col lg:justify-center text-center font-bold">
            <div className="text-lg md:text-2xl lg:text-3xl uppercase font-syne text-white">
              <h2 className="md:mb-5 text-center">
                <i>" turn your website into</i>
              </h2>

              <h2>
                <i className="text-center text-primary">
                  sales & revenue generator.
                </i>{" "}
                "
              </h2>
            </div>
          </div>
        </section>

        <section
          id="portfolios"
          className="container mx-auto px-4 mb-8 md:mb-16 lg:mb-32"
        >
          <div className="">
            <div className="flex flex-col justify-center items-center gap-y-2">
              <h1 className="text-white text-2xl md:text-3xl font-poppins text-center md:border-0 border-b-4 border-[#F8E7A1] ">
                Latest Projects
              </h1>
              <div className=" border-b-4 rounded border-[#F8E7A1] md:w-1/6 mb-12"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <Link
                href={"https://digital-pa.com.sg"}
                target="_blank"
                className="flex flex-col items-center gap-y-4 bg-white/10 p-4 lg:p-8 rounded z-50"
              >
                <Image
                  src={DigitalPa}
                  alt="project-digitalpa"
                  width={500}
                  height={500}
                  className="rounded"
                />
                <span className="text-xl lg:text-2xl font-medium">
                  Digital-PA
                </span>
                <span className="lg:text-xl font-medium">Web Application</span>
              </Link>

              <Link
                href={"https://suma.sg"}
                target="_blank"
                className="flex flex-col items-center gap-y-4 bg-white/10 p-4 lg:p-8 rounded z-50"
              >
                <Image
                  src={Suma}
                  alt="project-suma"
                  width={500}
                  height={500}
                  className="rounded"
                />
                <span className="text-xl lg:text-2xl font-medium">
                  Suma Singapore
                </span>
                <span className="lg:text-xl font-medium">Web Application</span>
              </Link>

              <Link
                href={"https://thebutterfly.id"}
                target="_blank"
                className="flex flex-col items-center gap-y-4 bg-white/10 z-50 p-4 lg:p-8 rounded"
              >
                <Image
                  src={TheButterfly}
                  alt="project-thebutterfy"
                  width={500}
                  height={500}
                  className="rounded"
                />
                <span className="text-xl lg:text-2xl font-medium">
                  The Butterfly
                </span>
                <span className="lg:text-xl font-medium">Web Application</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto md:mb-16 mb-8">
          <div className="md:mb-24 hidden md:flex lg:flex-row flex-col lg:justify-center text-center font-bold">
            <div className="text-lg md:text-2xl lg:text-3xl uppercase font-syne text-white">
              <h2 className="md:mb-5 text-center">
                <i>" Elevate Your Business</i>
              </h2>
              <h2 className="md:mb-5">
                <i>with </i>
              </h2>
              <h2>
                <i className="text-center text-primary">
                  Cutting-Edge Development.
                </i>{" "}
                "
              </h2>
            </div>
          </div>

          <div className="md:mb-24 md:hidden flex lg:flex-row flex-col lg:justify-center text-center font-bold">
            <div className="text-lg md:text-2xl lg:text-3xl uppercase font-syne text-white">
              <h2 className="md:mb-5 text-center">
                <i>" Elevate Your Business</i>
              </h2>
              <h2 className="md:mb-5">
                <i>with </i>
              </h2>
              <h2>
                <i className="text-center text-primary">
                  Cutting-Edge Development.
                </i>{" "}
                "
              </h2>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="container mx-auto lg:px-24 md:px-16 px-4 mb-24"
        >
          <div className="">
            <div className="bg-white/10 px-4 py-16 md:px-24 md:py-24 lg:px-0 lg:py-24">
              <h2 className="text-2xl md:text-3xl text-white text-center mb-8 md:mb-16">
                Contact Me
              </h2>

              <form className="flex flex-col gap-y-4 lg:items-center justify-center">
                <div className="flex flex-col gap-y-2 lg:w-1/3">
                  <label className="text-lg text-white">Fullname</label>
                  <input
                    type="text"
                    placeholder="Fullname"
                    className="input input-bordered input-primary w-full"
                  />
                </div>

                <div className="flex flex-col gap-y-2 lg:w-1/3">
                  <label className="text-lg text-white">Phone</label>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="input input-bordered input-primary w-full"
                  />
                </div>

                <div className="flex flex-col gap-y-2 lg:w-1/3">
                  <label className="text-lg text-white">Email</label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="input input-bordered input-primary w-full"
                  />
                </div>

                <div className="flex flex-col gap-y-2 lg:w-1/3">
                  <label className="text-lg text-white">Message</label>
                  <textarea
                    className="textarea textarea-primary text-base"
                    placeholder="Message"
                  ></textarea>
                </div>

                <div className="lg:w-1/3 pt-8">
                  <button
                    type="button"
                    className="btn btn-active btn-primary w-full"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <Footer />
        <ScrollTop />
      </main>
    </>
  );
}
