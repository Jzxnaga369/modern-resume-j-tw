"use client"

import Image from "next/image";
import MatrixComponent from "@/app/components/matrixComponent"; // Adjust path as needed
import { useRouter } from 'next/navigation';
import { details } from "framer-motion/client";
import ExperienceComponent from "@/app/components/experienceComponent";
import ThreeScene from "@/app/components/threeScene";




export default function Home() {

  const experiences = [
    {no:1,year:2020,title:"Lorem ipsum 01",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi nulla, ultricies eget sapien vitae, suscipit mollis erat. Maecenas ornare at ipsum ut vulputate. Nullam vitae velit at orci rhoncus commodo. Nunc sit amet ultrices nunc. Fusce viverra arcu nisi, eu aliquam turpis finibus sit amet. Pellentesque at congue tellus, ac eleifend elit. Suspendisse porta diam ex, et iaculis eros dignissim non. Nam commodo luctus diam. Aenean cursus vel turpis nec varius. Maecenas interdum dapibus ultricies. Donec vitae est non leo iaculis egestas vel non ex. Donec at lorem odio."}, 
    {no:2,year:2020,title:"Lorem ipsum 02",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi nulla, ultricies eget sapien vitae, suscipit mollis erat. Maecenas ornare at ipsum ut vulputate. Nullam vitae velit at orci rhoncus commodo. Nunc sit amet ultrices nunc. Fusce viverra arcu nisi, eu aliquam turpis finibus sit amet. Pellentesque at congue tellus, ac eleifend elit. Suspendisse porta diam ex, et iaculis eros dignissim non. Nam commodo luctus diam. Aenean cursus vel turpis nec varius. Maecenas interdum dapibus ultricies. Donec vitae est non leo iaculis egestas vel non ex. Donec at lorem odio."}, 
    {no:3,year:2020,title:"Lorem ipsum 03",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi nulla, ultricies eget sapien vitae, suscipit mollis erat. Maecenas ornare at ipsum ut vulputate. Nullam vitae velit at orci rhoncus commodo. Nunc sit amet ultrices nunc. Fusce viverra arcu nisi, eu aliquam turpis finibus sit amet. Pellentesque at congue tellus, ac eleifend elit. Suspendisse porta diam ex, et iaculis eros dignissim non. Nam commodo luctus diam. Aenean cursus vel turpis nec varius. Maecenas interdum dapibus ultricies. Donec vitae est non leo iaculis egestas vel non ex. Donec at lorem odio."}, 
    {no:4,year:2020,title:"Lorem ipsum 04",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mi nulla, ultricies eget sapien vitae, suscipit mollis erat. Maecenas ornare at ipsum ut vulputate. Nullam vitae velit at orci rhoncus commodo. Nunc sit amet ultrices nunc. Fusce viverra arcu nisi, eu aliquam turpis finibus sit amet. Pellentesque at congue tellus, ac eleifend elit. Suspendisse porta diam ex, et iaculis eros dignissim non. Nam commodo luctus diam. Aenean cursus vel turpis nec varius. Maecenas interdum dapibus ultricies. Donec vitae est non leo iaculis egestas vel non ex. Donec at lorem odio."}]



  return (
    <div className="flex flex-col items-center">
      {/* <nav className="fixed top-0 w-full bg-black p-4 text-white transition-all hover:bg-gray-800">
        <h1 className="text-xl">My Navbar</h1>
      </nav> */}
      <div className="text-white flex justify-center items-center p-4">
        <MatrixComponent/>
      </div>
        <ThreeScene/>

      <div className="flex flex-col p-4 text-black space-y-1 responsive-width-2">
        <div className="relative w-full flex flex-col items-center">
          <div className="absolute left-1/2 h-full w-[10px] bg-main-line -translate-x-1/2"></div>
          {experiences.map((_, index) => {
            const reversedIndex = experiences.length-1 - index;
            return <ExperienceComponent key={index} index={index}exp={experiences[reversedIndex]} />
            }
          )}
        </div>
      </div>
      
      <div className="bg-green-500 p-4 text-white">Item 3</div>
    </div>
  );
}


{/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div> */}