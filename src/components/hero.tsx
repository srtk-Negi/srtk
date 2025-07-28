import Link from "next/link";
import ParticleAnimation from "@/components/ParticleAnimation";
import TypingEffect from "@/components/TypingEffect";
import LiquidGlassButton from "@/components/LiquidGlassButton";

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <ParticleAnimation />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-screen pt-16 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
            <span className="block">Hello, I&apos;m</span>
            <div className="bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 bg-clip-text text-transparent pb-4">
              Sarthak Negi.
            </div>
          </h1>

          <h2 className="text-xl sm:text-2xl font-light text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
            <TypingEffect
              text="Full Stack Developer crafting minimal, elegant digital experiences
            with meticulous attention to detail."
              typingSpeed={30}
              className="text-gray-800 dark:text-gray-200"
            />
          </h2>

          <div className="flex flex-wrap gap-4">
            <Link href="#projects">
              <LiquidGlassButton variant="accent">
                View My Work
              </LiquidGlassButton>
            </Link>

            <Link href="#contact">
              <LiquidGlassButton variant="accent">Contact Me</LiquidGlassButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
