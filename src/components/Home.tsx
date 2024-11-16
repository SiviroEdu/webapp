export default function Home(){
    return (
        <div className="flex-col max-w-3xl">
        <h1 className="text-center text-4xl text-black">Welcome!</h1>
        <br/>
        <h2 className="text-center text-4xl text-black align-middle">
          Login using your <span className="text-oldprimary">Shkolo</span> credentials
        </h2>
        <br />
        <div className="flex align-middle w-[50%] mx-auto">
          <h6 className="text-center text-black align-middle text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h6>
        </div>
        <br />
        <div className="flex align-middle w-[50%] mx-auto">
          <h6 className="text-black align-middle text-center">
            By proceeding you accept our <a href="" className="text-primary">Terms of use</a>, <a href="" className="text-primary">Privacy policy</a> and <a href="" className="text-primary">Cookie policy</a>
          </h6>
        </div>
      </div>
    )
}