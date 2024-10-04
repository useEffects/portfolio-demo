import { Button, Container } from "@mui/material";
import { Heading } from "@/components/heading";
import { KittyChat } from "@/components/KittyChat";
import { Footer } from "@/components/home/footer";
import Timeline from "@/components/home/timeline";
import ContactButtons from "@/components/home/contact";
import { Webrings } from "@/components/home/webring";
import { Blogs } from "@/components/blogs";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center gap-20">
      <Container className="flex flex-col justify-between gap-8 py-4">
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
          <div className="md:w-1/2 flex flex-col gap-4 items-start">
            <p className="text-2xl merienda"> Hi! I'm John Doe 👋🏼 </p>
            <div className="w-4/5 h-1 bg-primary"></div>
            <p className="text-xl leading-normal"> <span className="merienda text-primary underline"> "Generative"</span> AI Enthusiast,<br /> Javascript Developer: <span className="merienda text-primary underline"> "FullStack"</span> </p>
            <p className="text-subtext0 font-light"> Self-taught developer, FOSS Enthusiast and Contributor, <span className="text-primary font-normal"> Jack of many trades. </span></p>
            <ContactButtons />
            <div>
              <p>Webrings I am in</p>
              <Webrings />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <KittyChat />
          </div>
        </div>
        <div className="flex justify-center gap-4 items-center">
          <div className="neon-dot"></div>
          <p className="text-green text-center"> Available for work </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 justify-center">
            <a className="no-underline w-1/2" href="/resume" target="_blank">
              <Button className="rounded-full w-full" variant="contained">Download Resume</Button>
            </a>
            <a className="no-underline w-1/2" href="/cover">
              <Button className="rounded-full w-full" variant="contained">Download Cover letter</Button>
            </a>
          </div>
        </div>
      </Container >
      <div className="bg-mantle w-full py-12">
        <Container className="pl-4">
          <Heading text="TIMELINE" />
          <Timeline />
        </Container>
      </div>
      <Container className="flex bg-base flex-col gap-4" >
        <Heading text="Blogs" />
        <Blogs />
      </Container>
      <div className="bg-mantle w-full">
        <Container>
          <Footer />
        </Container>
      </div>
    </div>
  )
}
