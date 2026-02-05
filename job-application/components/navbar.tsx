import { Button } from "./ui/button";


export default function Navbar() {
    return (
        <section className="text-black w-full pl-60 h-16 flex justify-between items-center">
                <h4 className="font-bold text-xl">Dsign</h4>
                <div className="flex gap-8 font-medium ml-20">
                    <a href="">Service</a>
                    <a href="">About</a>
                    <a href="">Network</a>
                    <a href="">Contact Us</a>
                </div>
                <div className="flex gap-2 pr-45">
                    <Button className="bg-blue-600">Sign In</Button>
                    <Button className="bg-blue-100 text-blue-600 px-8">Sign Up</Button>
                </div>
        </section>
    )
}