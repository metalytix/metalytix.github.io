// import Sg_1 from "./comps/s1_demo";
import retail from './assets/retail.png';
import transport from './assets/transport.png';
import gov from './assets/gov.png';
import warehousing from './assets/warehousing.png';
import factory from './assets/factory.png';
import address from './assets/map_address.png';
import address_full from './assets/office_map_full.png';
import logo from './assets/logo.png';
import image1 from './assets/how_we_do_it.png';
import image2 from './assets/request_quote.png';
import image3 from './assets/form_button_image.png';
const App = () => (
  <main className="relative">

    {/* first section */}
    <div className="min-h-screen bg-cover bg-center bg-[url('assets\s1_bg.png')]">
      <div className="container">
      <div className="absolute flex top-0 left-5 p-4 ">
        <img src={logo} alt="logo" width={45} height={50} className="w-45 h-50 mt-2 pr-4 pt-1" />
        <h1 className="text-white text-2xl font-Sora mt-2">Metalytix</h1>
      </div>
      <div className="absolute inset-0 flex flex-col top-80 left-44">
        <p className="text-white text-7xl font-Sora font-semibold">Search Your World</p>
        <p className="text-white text-sm font-Sora font-thin pt-4">Find Your Answer</p>
      </div>
      </div>
    </div>

    {/* second section */}
    <div class="min-h-screen bg-gradient-to-b from-white to-[#E8EEFC]">
      <div className="justify-center">
        <div className="  h-[180px] bg-no-repeat bg-auto bg-center mt-5 bg-[url('assets\search_anything.png')]"></div>
        <div className="  h-[812px] bg-no-repeat bg-auto bg-center mt-5 bg-[url('assets\search_demo.png')]"></div>
      </div>
    </div>

    {/* third section  */}
    {/* <div className=" bg-[url('assets\how_we_do_it.png')] bg-no-repeat bg-center bg-cover h-[633px]"></div> */}
    <div className='mt-10 mb-10'>
      <img
    src={image1}
    class="h-auto max-w-full"
    alt="..." />
    </div>
    
    {/* fourth section */}
    <div className="h-[629px] bg-no-repeat bg-auto bg-center  bg-[#091125] ">
      <div className="  h-[629px] w-[1918] bg-cover bg-center bg-[url('assets/s4_overlay.png')]">
        <div className="flex flex-wrap justify-around items-center sm:flex-wrap md:flex-wrap lg:flex-wrap xl:flex-nowrap">
          <img src={retail} alt="Image 1" className=" w-1/5 m-5  pt-28 mix-blend-normal" />
          <img src={transport} alt="Image 2" className="w-1/5 m-5 pt-28" />
          <img src={gov} alt="Image 3" className="w-1/5 m-5 pt-28" />
          <img src={warehousing} alt="Image 4" className="w-1/5 m-5 pt-28" />
          <img src={factory} alt="Image 5" className="w-1/5 m-5 pt-28" />
      </div>
      </div>
    </div>

    {/* firth section */}
    <div className='flex-auto min-h-screen p-3'>
      <div className='flex flex-wrap items-center justify-center'>
        <img src={address_full} alt="Image 1" className="   pt-10 mix-blend-normal" />
        {/* <div className=" container h-[668px] w-[610px] scale-75 bg-no-repeat bg-auto bg-left mt-5 mb-5 mr-10 ml-20 bg-[url('assets\office_map.png')]">
          <img src={address} alt="Image 1" className="  m-5  pt-10 mix-blend-normal" />
        </div> */}
        <div className="flex-row justify-center">
          <img src={image2} alt="Image 1" className="pl-3 pt-3 pb-3" />
          <img src={image3} alt="Image 1" className="pb-3 pl-3" />
          {/* <div className=" h-[91px] w-[550px] bg-no-repeat bg-center bg-cover bg-[url('assets\request_quote.png')]"></div> */}
          {/* <div className=" h-[91px] w-[550px] bg-no-repeat bg-center right-3 bg-[url('assets\form_button_image.png')]"></div> */}
        </div>
      </div>
    </div>

    {/* sixth section */}
  <div className="min-h-[502px] bg-[#050A16] items-center justify-center">
    <div className=" inset-0 flex flex-col text-left ">
      <div className=" absolute left-40 mt-32">
    <div className="text-white text-5xl font-Sora font-semibold ">
      Metalytix Labs
    </div>
    <div className="pt-10 ">
      <div className="text-white text-sm font-Sora font-thin">info@metalytix.ai</div>
      <div className="pt-4">
        <div className="text-white text-sm font-Sora font-thin">
          AltF Empire Square, MG Rd,
        </div>
        <div className="text-white text-sm font-Sora font-thin">Gurgaon, Haryana</div>
        <div className="text-white text-sm font-Sora font-thin">122002</div>
      </div>
    </div>
    </div>
    </div>
</div>

    <div className=' h-[80px] bg-[#141B2D]'></div>
    <div className=' h-[20px] bg-slate-50 flex-none items-center'>
      <div className='absolute text-start pl-2'>© 2023 Metalytix Labs Pvt Ltd, All Rights Reserved</div>
      <div className='absolute end-0 text-end pr-3'>Terms & Conditions . Privacy Policy . Cookies</div>
    </div>
  </main>
);

export default App;