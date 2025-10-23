import About from "@/components/shared/About";
import Background from "@/components/shared/backgroud";
import Contact from "@/components/shared/Contact";
import Hero from "@/components/shared/Hero";
import Resume from "@/components/shared/Resume";
import Skills from "@/components/shared/Skills";
import Works from "@/components/shared/Works";
import MainLayout from "@/layouts/MainLayout";

export default function Home() {
  return (
    <>
      <Background />
      <MainLayout>
        <section id="home" className="relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]">
          <Hero />
        </section>
        <div className="">
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="resume">
            <Resume />
          </section>
          <section id="works">
            <Works />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </MainLayout>
    </>
  );
}