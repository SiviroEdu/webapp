import { Button } from "@/components/ui/button";

export default function Home(){
    return (
        <div className="bg-red-600 h-screen flex flex-col align-middle items-center">
            <div>top shit</div>
            <div className="grow align-middle">main shit</div>
            <div className="flex flex-row bg-background border rounded-full">
                <img className="h-10 w-10" src="/Home.svg" alt="Logo" />
                <img className="h-10 w-10" src="/Settings.svg" alt="Logo" />
                <img className="h-10 w-10" src="/Vector.svg" alt="Logo" />
                <img className="h-10 w-10" src="/Dumbbells.svg" alt="Logo" />

            </div>
        </div>
    )
}