export default function page400(){
    return (
        <div className="flex items-center justify-center min-h-screen bg-white py-48">
            <div className="flex flex-col">
                <div className="flex flex-col items-center">
                    <div className="text-primary font-bold text-7xl">
                        400
                    </div>
        
                    <div className="font-bold text-black text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
                        Bad Request
                    </div>
        
                    <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
                        The server can't process or recognize the client request
                    </div>
                </div>
        
            </div>
        </div>
    )
}