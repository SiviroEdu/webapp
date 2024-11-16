import { Button } from "./ui/button";

export default function Exersices(){
    return(
        <div className="flex flex-col gap-6">
            <h1 className="text-black text-5xl text-center px-8">Exercises</h1>
            <Button variant="outline" className="text-3xl py-6 px-4 border border-primary text-primary align-middle text-center items-center justify-center">
                English
            </Button>
            <Button variant="outline" className="text-3xl py-6 px-4 border border-primary text-primary align-middle text-center items-center justify-center">
                Mathematics
            </Button>
            <Button variant="outline" className="text-3xl py-6 px-4 border border-primary text-primary align-middle text-center items-center justify-center">
                Physics
            </Button>
            <Button variant="outline" className="text-3xl py-6 px-4 border border-primary text-primary align-middle text-center items-center justify-center">
                Informatics
            </Button>
            <Button variant="outline" className="text-3xl py-6 px-4 border border-primary text-primary align-middle text-center items-center justify-center">
                History
            </Button>
            <Button variant="outline" className="text-3xl py-6 px-4 border border-primary text-primary align-middle text-center items-center justify-center">
                Chemestry
            </Button>
        </div>
    )
}