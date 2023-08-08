import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const First = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-start px-10 pt-20 space-y-20 section">
      <div className="absolute z-[-1] bg-no-repeat bg-contain bg-project-2 top-96 -left-36 w-72 h-96" />

      <div className="flex items-center justify-center space-x-20 dt:space-x-32">
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="flex items-center justify-center space-x-10">
            <h2 className="text-[1.6rem] font-semibold text-pine-green dt:text-[2.8rem]">
              Frontend Mentor Challenges
            </h2>
            <Link
              href="https://dbofury.github.io/frontend-mentor-challenges/"
              target="_blank"
              rel="noopener noreferrer">
              <Button className="text-2xl font-semibold ease-out bg-white px-7 py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white">
                Preview
              </Button>
            </Link>
          </div>
          <p className="text-xl leading-[150%] dt:text-2xl italic text-center text-onyx max-w-[50rem]">
            A collection of Frontend Mentor tasks I've solved and deployed on
            GitHub Pages. Utilizing the Next router, I've harmoniously
            integrated all pages into one cohesive website, dedicating a unique
            page to each solution. Dive into this exhibit of my technical skills
            and creative design.
          </p>
        </div>
        <div className="relative">
          <Image
            className="px-10 shadow-lg bg-gray-50 rounded-xl"
            src="/Full-Stack-Portfolio/Project 1.svg"
            alt="Project 1 image"
            width={300}
            height={200}
          />
          <div className="absolute z-[-1] bg-no-repeat bg-contain bg-project-1 top-3 -right-24 w-48 h-48" />
        </div>
      </div>

      <div className="flex items-center justify-center space-x-10 dt:space-x-20">
        <div className="relative">
          <Image
            src="/Full-Stack-Portfolio/Project 2.png"
            alt="Project 2 image"
            width={460}
            height={300}
          />
        </div>
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="flex items-center justify-center space-x-10">
            <Link
              href="https://interactive-comments-section-mocha.vercel.app/"
              target="_blank"
              rel="noopener noreferrer">
              <Button className="text-2xl font-semibold ease-out bg-white px-7 py-7 rounded-2xl shadow-button text-onyx hover:shadow-button-hover hover:translate-y-1 hover:bg-white">
                Preview
              </Button>
            </Link>
            <h2 className="text-[1.6rem] dt:text-[2.5rem] font-semibold text-pine-green">
              Interactive Comments Section
            </h2>
          </div>
          <p className="text-xl leading-[150%] dt:text-2xl italic text-center text-onyx max-w-[50rem]">
            All-encompassing full-stack web application empowering users to
            create, edit, and delete diverse comments within a unified global
            comments section. Account creation is a prerequisite for accessing
            this feature-rich platform. Originally initiated as a Frontend
            Mentor task, I expanded its scope to develop a comprehensive web
            application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default First;