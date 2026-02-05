import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
        <main className="flex-1">
            {/* hero section */}
            <section className=" mt-40 w-full flex justify-center">
              <div className="max-w-2xl relative">
                <Image
                src="/Ellipse 82.png"
                alt="Hero image"
                width={100}
                height={1}
                className="object-contain w-5 h-5 absolute right-[-60] top-26"
              />
              <Image
                src="/Vector 38.png"
                alt="Hero image"
                width={100}
                height={1}
                className="object-contain w-14 h-14 absolute right-[-60] top-[-80]"
              />
              <Image
                src="/Polygon 1.png"
                alt="Hero image"
                width={100}
                height={1}
                className="object-contain w-5 h-5 absolute right-90 top-[-120]"
              />
              <Image
                src="/Vector 37.png"
                alt="Hero image"
                width={100}
                height={1}
                className="object-contain w-14 h-14 absolute left-[-80] top-[-80]"
              />
              <Image
                src="/Ellipse 83.png"
                alt="Hero image"
                width={100}
                height={1}
                className="object-contain w-20 h-20 absolute left-[-120] bottom-[-96]"
              />
                <h2 className="text-6xl text-center font-semibold">Solve problem with an integrated agency.</h2>
                <h6 className="text-gray-400 text-center mt-6">Ehya is the Instagram analytics platform teams use to stay focused on the goals, track engagement for report your business .</h6>
                <div className="flex gap-4 justify-center mt-5">
                <Button className="bg-blue-600 text-white">See our portfolio</Button>
                <Button className="bg-blue-100 text-blue-600">More Info</Button>
                </div>
                </div>
            </section>


            {/* hero-dashboard */}
            <section className="mt-12 w-full">
                <div className="relative flex justify-center">
                    <Image
                      src="/Rectangle 430.png"
                      alt="Hero image"
                      width={100}
                      height={100}
                      className="object-contain w-50 h-30 absolute left-137 top-30"
                    />
                    <Image
                    src="/Rectangle 431.png"
                    alt="Hero image"
                    width={100}
                    height={100}
                    className="object-contain w-50 h-30 absolute right-137 top-30"
                  />
                  <Image
                    src="/Image 1.png"
                    alt="Hero image"
                    width={1200}
                    height={800}
                    className="object-contain w-190 h-190 z-10 rounded-xl"
                  />
                   <Image
                      src="/Rectangle 435.png"
                      alt="Hero image"
                      width={100}
                      height={100}
                      className="object-contain w-50 h-53 absolute right-70 bottom-35"
                    />
                    <Image
                    src="/Rectangle 434.png"
                    alt="Hero image"
                    width={100}
                    height={100}
                    className="object-contain w-50 h-30 absolute left-57 bottom-30"
                  />
                </div>
            </section>
        </main>
    </div>
  );
}
