/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";

import homepageIllustration from "../../assets/images/poster_web_2.png";

import { Button } from "@/components/common";
import { ActivityCard } from "@/components/biz";
import { cookies } from "next/headers";
import { redirect, useRouter } from "next/navigation";

export default async function Home() {
  return (
    <main>
      <div className="w-full bg-lmdi-primary pb-8 flex flex-col items-center md:pt-8 lg:flex-row-reverse lg:justify-center">
        <div className="p-10">
          <Image
            src={homepageIllustration}
            alt="Mascot Leadership In Action Summit 2024"
            width={500}
            priority
          />
        </div>
        <div className="flex max-w-xl items-center flex-col gap-6">
          <p className="text-white text-4xl px-10 text-center font-bold md:text-4xl">
            Welcome to ILiAS 2024
          </p>
          <p className="text-white text-xl px-10 text-center font-bold md:text-2xl">
            International Leadership in Action Summit 2024
          </p>
          <p className="text-white text-md text-center px-10">
            The International Leadership in Action Summit (ILiAS) Chapter
            Malaysia and Singapore is a comprehensive leadership training
            program designed for students across Indonesia. The summit aims to
            cultivate a new generation of leaders committed to advancing their
            nation's progress. Central to the program is the development of
            social innovation plans in the form of startup initiatives. ILiAS is
            centered on empowering participants with essential leadership skills
            and fostering a deep-seated commitment to national advancement.
          </p>
          <div className="flex flex-col items-center gap-6 mx-auto md:mx-0 md:flex-row">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeJQUtMTMlhsxeaKxkwYajQaWyGc4-wd3hImwJAf4-Wvkr5gQ/formResponse">
              <Button variant="secondary">Register Now</Button>
            </Link>
            <p className="text-white">Or</p>
            <Link href="/program">
              <Button variant="outlined-secondary">Learn more</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full my-14 flex flex-col items-center">
        <h1 className="font-bold text-3xl mb-10">On Going Activity</h1>
        <ActivityCard
          key={1}
          activityName="Call For Participants"
          registrationEnd="2024-05-31"
          slug="call-for-participants"
        />
      </div>

      <div className="w-full my-10 mx-auto bg-lmdi-secondary-darken py-6 px-16 lg:rounded-xl lg:max-w-[72rem]">
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-10">
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-white text-2xl text-center">
              Are You Ready to Make a Difference?
            </h1>
            <p className="text-white text-center">
              The LMDI International Leadership Development Program isn't just
              an opportunity—it's a calling. A chance to forge lifelong
              connections, to challenge your limits, and to emerge as a leader
              poised to build a better civilization for Indonesia and beyond.
            </p>
            <p className="text-white text-center">
              Dare to lead. Dare to inspire. Your journey begins here.
            </p>
            <div className="flex item-center justify-center">
              <Button variant="secondary">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
