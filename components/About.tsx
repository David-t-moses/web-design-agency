import Image from "next/image";
import React from "react";
import TransitionWrapper from "./TransitionWrapper";

const About = () => {
  return (
    <section className=" relative w-full max-w-[1200px] flex flex-col justify-start items-center gap-5 py-32 px-5">
      <div className="flex flex-col items-center justify-between text-center w-full gap-10">
        <TransitionWrapper>
          <p className="flex flex-col text-lg text-left">
            <span className="font-bold">KBIZ.TECH</span> (owned by Lorem ipsum)
            is Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            repellendus sint totam tempora corrupti molestias fugit quo
            aspernatur laborum expedita? Praesentium porro ex, dolore ad
            cupiditate sunt quas quidem eum enim earum animi fugiat similique
            aspernatur repellendus suscipit vero repellat soluta qui odio
            assumenda libero nemo iusto autem! Ex vitae, quisquam corrupti rerum
            dicta qui adipisci nobis modi quod facere earum eaque, aut vel
            mollitia officiis numquam. Eius molestiae ipsa fugiat asperiores
            quis doloremque quam sint, mollitia non enim veniam unde ea aliquid
            nobis laborum? Ducimus, accusamus esse, tenetur, iure magnam nobis
            nemo dignissimos adipisci fuga sint ipsa architecto ipsam?
          </p>
        </TransitionWrapper>
        <TransitionWrapper>
          <div className="w-full">
            <Image
              src="/3d-agency-3.avif"
              alt="invest in professional web design"
              width={1400}
              height={1400}
              className="md:rounded-[50px] rounded-3xl"
            />
          </div>
        </TransitionWrapper>
      </div>
    </section>
  );
};

export default About;
