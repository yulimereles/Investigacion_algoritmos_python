import '../assets/css/App.css';
import { Footer } from '../components/Footer.components';
import { Header } from '../components/Header.components';
import logo from "../assets/images/image1.png";

function App() {
  // const [state, setState] = useState(0);

  return (
    <>
      <Header />
      <section className="bg-white">
        <div className="max-w-5xl px-6 py-16 mx-auto">
          <div className="items-center md:flex md:space-x-6">
            <div className="md:w-1/2">
              <h3 className="text-4xl font-semibold text-gray-800">
                Lorem ipsum dolor sit <br /> amet, consectetur
              </h3>
              <p className="max-w-md mt-4 text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. 
              </p>
            </div>

            <div className="mt-8 md:mt-0 md:w-1/2">
              <div className="flex items-center justify-center">
                <div className="max-w-md">
                  <img
                    className="object-cover object-center w-96 rounded-md shadow"
                    src={logo}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-5xl px-6 py-16 mx-auto">
            <div className="md:flex md:justify-between">
                <h2 className="text-3xl font-semibold text-gray-800">Lorem ipsum dolor sit amet, consectetur</h2>
               
            </div>
    
            <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
                <div className="px-6 py-8 overflow-hidden bg-indigo-800 rounded-md shadow-md">
                    <h2 className="text-xl font-medium text-gray-800">Audio</h2>
                    <p className="max-w-md mt-4 text-gray-50">Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
                        volutpat, viverra magna risus aliquam massa.</p>
                </div>
    
                <div className="px-6 py-8 overflow-hidden bg-indigo-800 rounded-md shadow-md">
                    <h2 className="text-xl font-medium text-gray-800">Audio</h2>
                    <p className="max-w-md mt-4 text-gray-50">Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
                        volutpat,
                        viverra magna risus aliquam massa.</p>
                </div>
    
                <div className="px-6 py-8 overflow-hidden bg-indigo-800 rounded-md shadow-md">
                    <h2 className="text-xl font-medium text-gray-800">Audio</h2>
                    <p className="max-w-md mt-4 text-gray-50">Lorem ipsum dolor sit amet, consectetur adipiscing Ac aliquam ac
                        volutpat,
                        viverra magna risus aliquam massa.</p>
                </div>
            </div>
        </div>
    </section>

      <Footer />
    </>
  );
}

export default App;
