import logo from './logo.svg';
import './App.css';
import img from './img/logo.svg';
import img1 from './img/illustration-intro.svg';
import img2 from './img/avatar-anisha.png';

function App() {
  return (
    <div className="text-white-800 w-full ">
      <nav className="container relative mx-auto p-8">
        <div className="flex items-center justify-between">
          <div className="logo pt-2">
            <img src={img} alt="" />
          </div>
          <div className="md:flex space-x-8 lg:space-x-12 hidden">
            <a href="#" className="hover:text-orange-500 ease-in duration-200">
              Pricing
            </a>
            <a href="#" className="hover:text-orange-500 ease-in duration-200">
              Product
            </a>
            <a href="#" className="hover:text-orange-500 ease-in duration-200">
              About Us
            </a>
            <a href="#" className="hover:text-orange-500 ease-in duration-200">
              Blog
            </a>
            <a href="#" className="hover:text-orange-500 ease-in duration-200">
              Contact
            </a>
          </div>
          <a
            href=""
            className=" text-white p-3 px-6 pt-2 bg-red-500 rounded-full baseline hover:bg-red-400 ease-in duration-200 hidden lg:block "
          >
            Get Started
          </a>
        </div>
      </nav>

      {/*Hero Sectio*/}

      <section id="hero">
        <div className="container  flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0  ">
          {/* Left Div */}
          <div className="flex flex-col mb-32 space-y-12  md:w-1/2   ">
            <h1 className="md:max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Bring Everyone together to build products
            </h1>
            <p className=" md:max-w-sm text-center text-gray-500 md:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium harum amet iusto at quibusdam numquam rem, quos
              tempore optio enim architecto natus totam provident sed et
              reprehenderit temporibus quod earum.
            </p>
            <div className="flex md:justify-start justify-center">
              <a
                href=""
                className=" text-white p-3 px-6 pt-2 bg-red-500 rounded-full baseline hover:bg-red-400 ease-in duration-200 lg:block "
              >
                Get Started
              </a>
            </div>
          </div>
          {/* Right Div */}
          <div className=" md:w-1/2 ">
            <img className="" src={img1} alt="" />
          </div>
        </div>
      </section>
      {/*Features Section*/}
      <section>
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row ">
          {/* Whats Different */}
          <div className="flex flex-col space-y-12 md:w-1/2 ">
            <h2 className="md:max-w-md text-4xl font-bold text-center md:text-left">
              What's different about manage?
            </h2>
            <p className="md:max-w-sm text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, accusamus vero? Tempore ipsum minus natus dolorum aut
              ipsam accusamus doloremque deleniti recusandae labore laudantium
              esse excepturi, aliquid modi accusantium qui.
            </p>
          </div>
          {/* Numbered List */}
          <div className="flex flex-col space-y-8 md:w-1/2 ">
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row ">
              <div className="bg-red-400 md:bg-transparent rounded-full">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-3 text-white rounded-full md:py-1 bg-red-500">
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Track company- wide progress
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold hidden md:block mb-4">
                  {' '}
                  Track company- wide progress
                </h3>
                <p className="text-gray-600 text-center md:text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam nostrum numquam animi ut vero expedita, architecto
                  recusandae repudiandae perferendis illum, aspernatur adipisci
                  doloremque reprehenderit consequatur. Necessitatibus
                  cupiditate nesciunt maiores quam!
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row ">
              <div className="bg-red-400 md:bg-transparent rounded-full">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-3 text-white rounded-full md:py-1 bg-red-500">
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Track company- wide progress
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold hidden md:block mb-4">
                  {' '}
                  Track company- wide progress
                </h3>
                <p className="text-gray-600 text-center md:text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam nostrum numquam animi ut vero expedita, architecto
                  recusandae repudiandae perferendis illum, aspernatur adipisci
                  doloremque reprehenderit consequatur. Necessitatibus
                  cupiditate nesciunt maiores quam!
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row ">
              <div className="bg-red-400 md:bg-transparent rounded-full">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-3 text-white rounded-full md:py-1 bg-red-500">
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Track company- wide progress
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold hidden md:block mb-4">
                  {' '}
                  Track company- wide progress
                </h3>
                <p className="text-gray-600 text-center md:text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam nostrum numquam animi ut vero expedita, architecto
                  recusandae repudiandae perferendis illum, aspernatur adipisci
                  doloremque reprehenderit consequatur. Necessitatibus
                  cupiditate nesciunt maiores quam!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section>
        <div className="px-5 mx-auto mt-32 text-center max-w-6xl ">
          <h2 className="text-4xl font-bold text-center">
            What's different about Manage?
          </h2>
          {/* Testimonials 1 */}
          <div className="flex flex-col mt-24 md:flex-row space-x-0 md:space-x-6 space-y-12  md:space-y-0 mb-14 md:mb-16">
            {/* Testimonial 1 */}
            <div className="flex flex-col items-center space-y-6  rounded-lg bg-gray-100 md:w-1/3 ">
              <img src={img2} alt="" className="w-16 -mt-8" />
              <h5 className="text-lg font-bold">Anisha Li</h5>
              <p className="text-sm text-gray-500 px-6 pb-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae rerum eius fugit quo ab optio. Fugit commodi
                molestias aspernatur tempore nobis perferendis a error doloribus
                ab consequuntur, dolorem placeat quaerat!
              </p>
            </div>
            <div className="flex flex-col items-center space-y-6  rounded-lg bg-gray-100 md:w-1/3 ">
              <img src={img2} alt="" className="w-16 -mt-8" />
              <h5 className="text-lg font-bold">Anisha Li</h5>
              <p className="text-sm text-gray-500 px-6 pb-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae rerum eius fugit quo ab optio. Fugit commodi
                molestias aspernatur tempore nobis perferendis a error doloribus
                ab consequuntur, dolorem placeat quaerat!
              </p>
            </div>
            <div className="flex flex-col items-center space-y-6  rounded-lg bg-gray-100 md:w-1/3 ">
              <img src={img2} alt="" className="w-16 -mt-8" />
              <h5 className="text-lg font-bold">Anisha Li</h5>
              <p className="text-sm text-gray-500 px-6 pb-8">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae rerum eius fugit quo ab optio. Fugit commodi
                molestias aspernatur tempore nobis perferendis a error doloribus
                ab consequuntur, dolorem placeat quaerat!
              </p>
            </div>
          </div>
          <a href="" className="bg-red-500 p-3 px-8  rounded-full ">
            Get Started
          </a>
        </div>
      </section>
      {/* Simplify */}

      <section className="bg-red-500 ">
        <div className="flex  flex-col container items-center text-center md:text-left  py-14 px-20 mt-20 m-auto md:flex-row">
          <div className="font-bold md:w-1/2">
            <h1 className="md:text-4xl text-2xl lg:text-5xl text-white">
              Simplify how your team works today.
            </h1>
          </div>
          <div className="md:w-1/2 md:flex md:justify-end m-auto mt-8 md:mt-auto">
            <a href="" className="bg-white p-3 px-8 rounded-full text-red-600 ">
              Get Started
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}

      <section className="bg-gray-800">
        <div className=" container mx-auto pt-10 flex flex-col md:flex-row space-y-5 md:space-y-0 pb-4 text-white ">
          {/* Left div */}
          <div className="flex flex-col space-y-4 md:space-y-20 items-center md:w-1/4 md:space-x-0">
            <img src={img} alt="" />
            <div className="flex space-x-5 ">
              <p>Face</p>
              <p>Insta</p>
              <p>Linkdin</p>
            </div>
          </div>
          {/* Middle 1 Div */}
          <div className="flex flex-row space-x-6 md:flex-col  items-center justify-center md:space-y-2  md:w-1/4 md:space-x-0">
            <a href="Home">Home</a>
            <a href="Home">Pricing</a>
            <a href="Home">Products</a>
            <a href="Home">About Us</a>
          </div>
          {/* Middle 2 div */}
          <div className="flex flex-row space-x-4 md:flex-col  md:w-1/4  items-center justify-center md:space-y-2">
            <a href="Home">Career</a>
            <a href="Home">Community</a>
            <a href="Home">Privacy</a>
          </div>
          {/* Right Div */}
          <div class="w-1/4">
            <input
              type="text"
              class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-black"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
