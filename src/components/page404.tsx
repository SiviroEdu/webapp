export default function page404(){
    return (
        <div className="flex items-center justify-center min-h-screen bg-white py-48">
            <div className="flex flex-col">
                <div className="flex flex-col items-center">
                    <div className="text-primary font-bold text-7xl">
                        404
                    </div>
        
                    <div className="font-bold text-black text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
                        This page does not exist
                    </div>
        
                    <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
                        The page you are looking for could not be found.
                    </div>
                </div>
        
            </div>
        </div>
    )
}