import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
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
                  <div className="rounded-2xl z-10 overflow-hidden inline-block">
                  <Image
                    src="/Image 1.png"
                    alt="Hero image"
                    width={400}
                    height={300}
                    className="object-contain w-190 h-190"
                  />
                  </div>
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
                    className="object-contain w-50 h-53 absolute left-70 bottom-35"
                  />
                  <Image
                    src="/megaphone.png"
                    alt="Hero image"
                    width={100}
                    height={100}
                    className="object-contain w-60 h-53 absolute left-65 top-45 z-30"
                  />
                </div>
            </section>

            {/* feature logo */}
            <section className="mt-[-90]">
                <div className="flex justify-center gap-30">
                    <Image
                    src="/garnier.png"
                    alt="Feature logo"
                    width={100}
                    height={100}
                    className="object-contain w-30 h-20"
                  />
                   <Image
                    src="/slack.png"
                    alt="Feature logo"
                    width={100}
                    height={100}
                    className="object-contain w-30 h-20"
                  />
                   <Image
                    src="/udemy.png"
                    alt="Feature logo"
                    width={100}
                    height={100}
                    className="object-contain w-30 h-20"
                  />
                   <Image
                    src="/google (1).png"
                    alt="Feature logo"
                    width={100}
                    height={100}
                    className="object-contain w-30 h-20"
                  />
                  
                </div>
                <div className="flex justify-center mt-3">
                  <hr className="border-gray-200 w-210 border" />
                </div>
            </section>

            {/* widget */}
            <section className="mt-14">
                <div className="flex gap-4 justify-center flex-wrap">
                    <Image
                    src="/card.png"
                    alt="Feature logo"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                  <Image
                    src="/card1.png"
                    alt="Feature logo"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                  <Image
                    src="/card2.png"
                    alt="Feature logo"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                  <Image
                    src="/card3.png"
                    alt="Feature logo"
                    width={200}
                    height={100}
                    className="object-contain"
                  />
                </div>
            </section>
            
            {/* services */}
            <section className="mt-8">
                <div className="w-full min-h-[60vh] flex justify-center">
                    <div className="flex justify-between gap-0">
                        <div className="flex items-center">
                            <div className="flex flex-col max-w-md">
                            <h1 className="text-5xl font-semibold">Built to Elevate Brands</h1>
                            <p className="text-[-1rem] leading-tight max-w-sm text-muted-foreground my-4">At Dsign Agency, we offer a blend of creative and technical services — from digital marketing and UI/UX design to graphic design and cybersecurity. Our solutions are built to elevate your brand, engage your audience, and secure your digital assets.</p>
                            <a className="text-blue-600" href="">Learn More</a>
                          </div>
                        </div>
                        <div className="bg-blue-100 h-[53vh] w-[27vw] rounded-xl relative mt-3">
                            <div className="absolute top-10 left-[-25]">
                                <div className="grid grid-cols-2 gap-1">
                                    <Image
                                      src="/card4.png"
                                      alt="Feature logo"
                                      width={200}
                                      height={100}
                                      className="object-contain"
                                    />
                                    <Image
                                      src="/card5.png"
                                      alt="Feature logo"
                                      width={200}
                                      height={100}
                                      className="object-contain"
                                    />
                                    <Image
                                      src="/card6.png"
                                      alt="Feature logo"
                                      width={200}
                                      height={100}
                                      className="object-contain"
                                    />
                                    <Image
                                      src="/card7.png"
                                      alt="Feature logo"
                                      width={200}
                                      height={100}
                                      className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* why choose us */}
            <section className="py-8">
                <div className="w-full min-h-[60vh] flex justify-center">
                    <div className="flex justify-between gap-15">
                        <div className="relative bg-amber-100 h-[60vh] w-[17vw] rounded-xl basis-1/2">
                            <div className="absolute top-30 left-[-70] w-full h-full">
                                <Image
                                      src="/clay-mockup 1.png"
                                      alt="Feature logo"
                                      width={2600}
                                      height={1400}
                                      className="object-contain scale-190"
                                    />
                            </div>
                        </div>
                        <div className="mt-5 space-y-3">
                            <h1 className="text-4xl font-bold text-gray-800">Why Choose Us?</h1>
                            <p className="text-sm max-w-md text-gray-500">We combine creativity, strategy, and security to deliver end-to-end digital solutions that help brands grow faster and smarter.</p>
                            <div className="flex flex-col gap-5">
                                <div className="flex gap-5 items-center">
                                    <Image
                                      src="/icon.png"
                                      alt="Feature logo"
                                      width={10}
                                      height={5}
                                      className="object-contain scale-210"
                                    />
                                    <div className="flex flex-col relative top-5">
                                    <p className="font-semibold">Quality</p>
                                    <p className="text-gray-500 text-sm max-w-sm">We deliver high-impact solutions with attention to detail and design precision.</p>
                                    </div>
                                </div>
                                 <div className="flex gap-5 items-center">
                                    <Image
                                      src="/icon.png"
                                      alt="Feature logo"
                                      width={10}
                                      height={5}
                                      className="object-contain scale-210"
                                    />
                                    <div className="flex flex-col relative top-5">
                                    <p className="font-semibold">Communication</p>
                                    <p className="text-gray-500 text-sm max-w-sm">We keep you in the loop with clear updates and responsive collaboration.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5 items-center">
                                    <Image
                                      src="/icon.png"
                                      alt="Feature logo"
                                      width={10}
                                      height={5}
                                      className="object-contain scale-210"
                                    />
                                    <div className="flex flex-col relative top-5">
                                    <p className="font-semibold">Reliabilty</p>
                                    <p className="text-gray-500 text-sm max-w-sm">Count on us to meet deadlines and exceed expectations every time.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* map */}
            <section className="bg-blue-100 w-full min-h-[80vh]">
              <div className="flex justify-center pt-7">
                <h1 className="text-4xl font-semibold max-w-md text-center">Connecting Globally, Delivering Locally</h1>
              </div>
              <div className="flex justify-center items-center h-screen">
                  <Image
                        src="/map.png"
                        alt="map"
                        width={400}
                        height={300}
                        className="object-contain scale-210"
                  />
              </div>
              <div className="flex justify-center w-full">
              <div className="grid grid-cols-4 mt-[-80] max-w-2xl gap-10">
                   <Image
                      src="/card8.png"
                      alt="Feature logo"
                      width={300}
                      height={150}
                      className="object-contain scale-210"
                     />
                     <Image
                      src="/card9.png"
                      alt="Feature logo"
                      width={300}
                      height={150}
                      className="object-contain scale-210"
                     />
                     <Image
                      src="/card10.png"
                      alt="Feature logo"
                      width={300}
                      height={150}
                      className="object-contain scale-210"
                     />
                     <Image
                      src="/card11.png"
                      alt="Feature logo"
                      width={300}
                      height={150}
                      className="object-contain scale-210"
                     />
              </div>
              </div>
            </section>

            {/* testimonial */}
            <section className="pt-5">
                <div className="flex justify-center text-center">
                  <div className="flex flex-col max-w-[29rem]">
                      <h1 className="text-5xl font-semibold">What Our Clients Say About Us</h1>
                      <p className="text-md text-gray-400 mt-4">Event madness gathering innoies,& tech enthusiasts in Speced. do more informations.</p>
                  </div>
                </div>
                <div className="flex justify-center mt-30">
                    <Image
                      src="/Fram.png"
                      alt="Feature logo"
                      width={400}
                      height={350}
                      className="object-contain scale-210"
                     />
                </div>
            </section>

            {/* contact */}
            <section className="">
                <h1 className="text-5xl font-semibold">Contact Us</h1>
                <div>

                </div>
            </section>
        </main>
    </div>
  );
}
