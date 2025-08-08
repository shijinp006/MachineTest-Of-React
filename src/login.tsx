import myImage from "./assets/dxf91zhqd2z6b0bwg85ktm5s4.svg";
import { useState, useEffect } from "react";

export const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-700 text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header */}
      <header className="w-full py-4 px-4sm:px-6 md:px-10 bg-white shadow-md">
        <div className="flex justify-between items-center flex-wrap">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
            aria-label="LinkedIn"
          >
            <img
              src="ChatGPT Image Aug 5, 2025, 12_59_20 PM.png"
              alt="Logo"
              className="w-14 h-14 sm:w-22 sm:h-20"
            />
          </a>

          <nav className="flex flex-wrap items-center gap-3 mt-4 sm:mt-0 text-sm">
            <a
              href="#"
              className="flex flex-col items-center gap-1 hover:scale-105 transition-transform w-16"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/011/020/178/non_2x/simple-outline-rocket-icon-sign-illustration-free-vector.jpg"
                alt="Top Content"
                className="w-6 h-6 rounded-full"
              />
              <span className="text-xs text-center">Top Content</span>
            </a>

            <a
              href="#"
              className="flex flex-col items-center gap-1 hover:scale-105 transition-transform w-16"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_CFEhk2tc9fryNioKkpu-G3tpwjF9CC9E5wAs2fe6TB-He51dvbrVFkfu57hCdxPTcY&usqp=CAU"
                alt="People"
                className="w-6 h-6 rounded-full"
              />
              <span className="text-xs text-center">People</span>
            </a>

            <a
              href="#"
              className="flex flex-col items-center gap-1 hover:scale-105 transition-transform w-16"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/011/849/062/non_2x/online-learning-icon-online-education-icon-symbol-school-illustration-on-isolated-background-free-vector.jpg"
                alt="Learning"
                className="w-6 h-6 rounded-full"
              />
              <span className="text-xs text-center">Learning</span>
            </a>

            <a
              href="#"
              className="flex flex-col items-center gap-1 hover:scale-105 transition-transform w-16"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/4192/4192708.png"
                alt="Jobs"
                className="w-6 h-6 rounded-full"
              />
              <span className="text-xs text-center">Jobs</span>
            </a>

            <a
              href="#"
              className="flex flex-col items-center gap-1 hover:scale-105 transition-transform w-16"
            >
              <img
                src="https://endlessicons.com/wp-content/uploads/2013/03/game-controller-icon-614x460.png"
                alt="Games"
                className="w-6 h-6 rounded-full"
              />
              <span className="text-xs text-center">Games</span>
            </a>

            <a
              href="#"
              className="flex flex-col items-center gap-1 hover:scale-105 transition-transform w-16"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQBUYrMVoTEb3XNC4LiIAwRLYU4m1O-LLm8bJoCNw5TR93bmnMa-7HO-q6ed2qFBoxmbk&usqp=CAU"
                alt="Get the app"
                className="w-6 h-6 rounded-full"
              />
              <span className="text-xs text-center">Get the app</span>
            </a>

            <a href="#" className="text-gray-700 hover:underline font-medium">
              Join now
            </a>

            <a
              href="#"
              className="px-4 py-1 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition"
            >
              Sign in
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center px-4 sm:px-6 md:px-10 lg:px-20 py-10 gap-8">
        {/* Left section */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-6 text-[#526a6e]">
            Welcome to your <br /> professional network
          </h1>

          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full w-full max-w-xs mb-4 hover:bg-blue-700 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              alt="Google"
              className="w-6 h-6"
            />
            Continue with Google
          </button>

          <div className="flex items-center justify-between border rounded-full px-4 py-3 w-full max-w-xs mb-4 shadow-sm cursor-pointer">
            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/300"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <div className="text-left">
                <p className="text-sm font-medium">Continue as</p>
                <p className="text-sm text-gray-500">Abcd@gmail.com</p>
              </div>
            </div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732221.png"
              alt="Microsoft"
              className="w-5 h-5"
            />
          </div>

          <button className="border px-6 py-3 rounded-full w-full max-w-xs mb-6 hover:bg-gray-100 transition">
            Sign in with email
          </button>

          <p className="text-xs text-gray-500 max-w-xs mb-6">
            By clicking Continue to join or sign in, you agree to LinkedIn’s{" "}
            <a href="#" className="text-blue-600 hover:underline">
              User Agreement
            </a>
            ,{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Cookie Policy
            </a>
            .
          </p>

          <p className="text-sm">
            New to LinkedIn?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Join now
            </a>
          </p>
        </div>

        {/* Right section */}
        <div className="w-full lg:w-1/2">
          <img
            src={myImage}
            alt="Illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};
