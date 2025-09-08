import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Join the league of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Best Hackers
              </span>
            </h1>
          </>
        }
      >
        <img
          src="/ss.webp"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      <div className="h-[40rem] flex items-center justify-center">
        <TextHoverEffect text="ACET" />
      </div>
    </div>
    
  );
}
