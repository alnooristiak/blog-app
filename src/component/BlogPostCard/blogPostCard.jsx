import { Button } from "@material-tailwind/react";
import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

function BlogPostCard() {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto max-w-7xl ">
          {/* Main Content  */}
          <div className="flex flex-wrap justify-center -m-4 mb-5">
            {/* Card 1  */}
            <div className="p-4 md:w-1/3">
              <div
                style={{
                  background: mode === "dark" ? "rgb(30, 41, 59)" : "white",
                  borderBottom:
                    mode === "dark"
                      ? " 4px solid rgb(226, 232, 240)"
                      : " 4px solid rgb(30, 41, 59)",
                }}
                className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
               ${mode === "dark" ? "shadow-gray-700" : "shadow-xl"} 
               rounded-xl overflow-hidden`}
              >
                {/* Blog Thumbnail  */}
                <img
                  className=" w-full"
                  src={
                    "https://media.licdn.com/dms/image/v2/C5616AQEniwpRSkmlkw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1643725157100?e=1746057600&v=beta&t=K5wLLWDg0BfqbzGOwy3rtwqM7xUQxYu1BDCvjvnGjyY"
                  }
                  alt="blog"
                />

                {/* Top Items  */}
                <div className="p-6">
                  {/* Blog Date  */}
                  <h2
                    className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    {"25 Feb 2025"}
                  </h2>

                  {/* Blog Title  */}
                  <h1
                    className="title-font text-lg font-bold text-gray-900 mb-3"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    {"React Introduction"}
                  </h1>

                  {/* Blog Description  */}
                  <p
                    className="leading-relaxed mb-3"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2  */}
            <div className="p-4 md:w-1/3">
              <div
                style={{
                  background: mode === "dark" ? "rgb(30, 41, 59)" : "white",
                  borderBottom:
                    mode === "dark"
                      ? " 4px solid rgb(226, 232, 240)"
                      : " 4px solid rgb(30, 41, 59)",
                }}
                className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
               ${mode === "dark" ? "shadow-gray-700" : "shadow-xl"} 
               rounded-xl overflow-hidden`}
              >
                {/* Blog Thumbnail  */}
                <img
                  className=" w-full"
                  src={
                    "https://media.licdn.com/dms/image/v2/C5616AQEniwpRSkmlkw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1643725157100?e=1746057600&v=beta&t=K5wLLWDg0BfqbzGOwy3rtwqM7xUQxYu1BDCvjvnGjyY"
                  }
                  alt="blog"
                />

                {/* Top Items  */}
                <div className="p-6">
                  {/* Blog Date  */}
                  <h2
                    className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    {"25 Feb 2025"}
                  </h2>

                  {/* Blog Title  */}
                  <h1
                    className="title-font text-lg font-bold text-gray-900 mb-3"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    {"React Introduction"}
                  </h1>

                  {/* Blog Description  */}
                  <p
                    className="leading-relaxed mb-3"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-4 md:w-1/3">
              <div
                style={{
                  background: mode === "dark" ? "rgb(30, 41, 59)" : "white",
                  borderBottom:
                    mode === "dark"
                      ? " 4px solid rgb(226, 232, 240)"
                      : " 4px solid rgb(30, 41, 59)",
                }}
                className={`h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
               ${mode === "dark" ? "shadow-gray-700" : "shadow-xl"} 
               rounded-xl overflow-hidden`}
              >
                {/* Blog Thumbnail  */}
                <img
                  className=" w-full"
                  src={
                    "https://media.licdn.com/dms/image/v2/C5616AQEniwpRSkmlkw/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1643725157100?e=1746057600&v=beta&t=K5wLLWDg0BfqbzGOwy3rtwqM7xUQxYu1BDCvjvnGjyY"
                  }
                  alt="blog"
                />

                {/* Top Items  */}
                <div className="p-6">
                  {/* Blog Date  */}
                  <h2
                    className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    {"25 Feb 2025"}
                  </h2>

                  {/* Blog Title  */}
                  <h1
                    className="title-font text-lg font-bold text-gray-900 mb-3"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    {"React Introduction"}
                  </h1>

                  {/* Blog Description  */}
                  <p
                    className="leading-relaxed mb-3"
                    style={{
                      color:
                        mode === "dark"
                          ? "rgb(226, 232, 240)"
                          : " rgb(30, 41, 59)",
                    }}
                  >
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* See More Button  */}
          <div className="flex justify-center my-5">
            <Button
              style={{
                background:
                  mode === "dark" ? "rgb(226, 232, 240)" : "rgb(30, 41, 59)",
                color:
                  mode === "dark" ? "rgb(30, 41, 59)" : "rgb(226, 232, 240)",
              }}
            >
              See More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPostCard;
