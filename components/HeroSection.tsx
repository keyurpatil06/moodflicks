'use client'

import ShimmerButton from "@/components/ui/ShimmerButton";
import { Vortex } from "@/components/ui/vortex";
import { useRouter } from "next/navigation";
import { TypewriterEffect } from "./ui/TypewriterEffect";
import { BackgroundBeams } from "./ui/BackgroundBeams";

const HeroSection = () => {
  const router = useRouter();
  const words = [
    {
      text: 'Welcome',
      className: "text-white"
    },
    {
      text: 'to',
      className: "text-white"
    },
    {
      text: 'MoodFlicks!',
      className: "text-white"
    },
  ]

  const handleClick = () => {
    router.push('/discover');
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950">
      <div className="text-center">
        <Vortex>
          <div className="text-white flex flex-col items-center gap-4">
            <TypewriterEffect words={words} className="text-2xl"/>
            <p className="text-md md:text-lg">
              Discover movies that match your mood effortlessly.
            </p>
            <ShimmerButton title="Get Started" onClick={handleClick} />
          </div>
        </Vortex>
      </div>
      <BackgroundBeams />
    </div>
  )
}

export default HeroSection
