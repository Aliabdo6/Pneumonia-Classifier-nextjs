import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Automated Pneumonia Detection
        </h1>
        <p className="text-lg text-white mb-4">
          Empowering healthcare with deep learning
          and Next.js
        </p>
        <Link href="/model">
          <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded shadow-md hover:bg-blue-400 hover:text-white transition duration-300">
            Try Demo
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
