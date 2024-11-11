import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div>
    <div className="min-h-screen flex  justify-center items-center text-white bg-stone-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
        {/* Replace with an actual image */}
        <img 
          src="your-image-source.jpg" 
          alt="Description of the image" 
          className="w-full h-auto object-cover mb-8" 
        />
        <h1 className="text-4xl font-extrabold mb-6">
          Welcome to the CardEm!
        </h1>
        <p className="text-xl mb-8"></p>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 text-2xl px-12 rounded-lg mb-4">
          Play Online
        </button>
        
        <Link to="/rules">
          <button className="ring-1 ring-white hover:bg-blue-700 text-white font-bold py-6 text-2xl px-12 rounded-lg ">
            Rule Book
          </button>
        </Link>  
        
      </div>
    </div>
    </div> 
  );
}

export default Hero;
