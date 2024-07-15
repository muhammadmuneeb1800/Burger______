import Image from 'next/image'
import Navbar from './(components)/navbar/navbar'
import boy from '../public/boy.png'
import girl from '../public/girl.png'
import girl2 from '../public/girl2.png'
import img1 from '../public/01.png'
import img2 from '../public/02.png'
import img3 from '../public/03.png'
import img4 from '../public/04.png'
import img5 from '../public/05.png'
import img6 from '../public/06.png'
import burger1 from '../public/burger1.png'
import burger2 from '../public/buregr2.png'
import redbur from '../public/red-burgerIcon.png'
import { FaFacebook } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareWhatsapp } from "react-icons/fa6";


export default function Home() {
  return (
    <>
        <div className="main text-white">
        <Navbar/>

          <div className="max-w-[590px] md:px-10 px-3">
          <p className="mt-20 text-7xl font-extrabold leading-[110%] text-white">Get cashback up to 50%</p>
          <p className="mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit commodi quas recusandae nisi velit iste necessitatibus temporibus.</p>
          <button className="my-7 bg-red-500 px-16 py-3 rounded-3xl">ORDER NOW</button>
          </div>
        </div>


          {/* Section 2 Our Chef */}

        <div className="our text-red-500">
          <div className="relative">
            <Image className="md:top-[8%] md:left-[12%] top-[3%] left-[5%] absolute"width={80} src={img1} alt=""/>
            <Image className="md:top-[43%] md:left-[-1%] top-[19%] left-[-1%] absolute"width={120} src={img2} alt=""/>
            <Image className="md:top-[85%] md:left-[30%] top-[43%] left-[8%] absolute" width={75} src={img3} alt=""/>
            <Image className="md:top-[84%] md:left-[64%] top-[68%] left-[6%] absolute" width={75} src={img4} alt=""/>
            <Image className="md:top-[68%] md:left-[88%] top-[43%] left-[72%] absolute" width={85} src={img5} alt=""/>
            <Image className="md:top-[14%] md:left-[79%] top-[15%] left-[59%] absolute" width={160} src={img6} alt=""/>
          <div className="max-w-[750px] mx-auto text-center pt-28">
          <p className="text-red-500 font-bold md:text-4xl text-2xl mb-5">Our Chef</p>
          <p className="px-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, necessitatibus! Obcaecati dicta perferendis explicabo tempore reprehenderit reiciendis nostrum voluptatem atque.</p>
          </div>

          <div className="mt-20 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 pb-28">
            <div className="mt-5 text-center max-w-[500px]">
              <Image className="rounded-full mx-auto" src={boy} alt=''/>
              <p className="text-red-500 font-bold mt-3 text-2xl">AIDEN HUNTER</p>
              <p>Founder</p>
            </div>
            <div className="mt-5 text-center max-w-[500px]">
              <Image className="rounded-full mx-auto" src={girl} alt=''/>
              <p className="text-red-500 font-bold mt-3 text-2xl">ETHEL RAMSEY</p>
              <p>Co-Founder</p>
            </div>
            <div className="mt-5 text-center max-w-[500px]">
              <Image className="rounded-full mx-auto" src={girl2} alt=''/>
              <p className="text-red-500 font-bold mt-3 text-2xl">FANNIE STEWART</p>
              <p>Co-Founder</p>
            </div>
          </div>
          </div>
        </div>


        {/* Best Burger */}

        <div className="bg-red-500">
          <div className="py-40 max-w-[1100px] lg:grid lg:grid-cols-2 mx-auto items-center">
            <div className="px-3 max-w-[500px] mx-auto">
              <Image className="rounded-full" width={450} src={burger1} alt=""/>
            </div>
            <div className="text-white lg:max-w-[520px] px-3 mt-5 mx-auto">
              <p className="text-white font-bold text-2xl md:text-4xl mb-3">Best Burger</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, dolores eligendi nobis eveniet omnis rerum repellat vitae numquam quod eum.</p>
              <button className="mt-9 text-red-500 bg-white rounded-3xl px-16 py-3">ORDER NOW</button>
            </div>
          </div>
        </div>


          {/* Section big Burgers */}


        <div className="our">
           <div className="relative">
           <Image className="md:top-[8%] md:left-[12%] top-[3%] left-[5%] absolute"width={80} src={img1} alt=""/>
            <Image className="md:top-[43%] md:left-[-1%] top-[19%] left-[-1%] absolute"width={120} src={img2} alt=""/>
            <Image className="md:top-[85%] md:left-[30%] top-[43%] left-[8%] absolute" width={75} src={img3} alt=""/>
            <Image className="md:top-[84%] md:left-[64%] top-[68%] left-[6%] absolute" width={75} src={img4} alt=""/>
            <Image className="md:top-[68%] md:left-[85%] top-[43%] left-[72%] absolute" width={85} src={img5} alt=""/>
            <Image className="md:top-[14%] md:left-[79%] top-[15%] left-[59%] absolute" width={160} src={img6} alt=""/>
          <div className="py-40 max-w-[1100px] lg:grid lg:grid-cols-2 mx-auto items-center">
            <div className="text-red-500 lg:max-w-[520px] px-3 mt-5 mx-auto">
              <p className="font-bold text-xl md:text-4xl mb-3">big Burger</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, dolores eligendi nobis eveniet omnis rerum repellat vitae numquam quod eum.</p>
              <button className="mt-9 text-white bg-red-500 rounded-3xl px-16 py-3">ORDER NOW</button>
            </div>
            <div className="px-3 max-w-[500px] mx-auto">
              <Image className="rounded-full" width={450} src={burger2} alt=""/>
            </div>
          </div>
           </div>
        </div>


        {/* Section Statics */}

        <div className="bg-red-500">
          <div className="pt-16">
            <div className="text-white lg:max-w-[600px] px-3 text-center mx-auto">
              <p className="text-white font-bold text-2xl md:text-4xl mb-3">Statistics</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, dolores eligendi nobis eveniet omnis rerum repellat vitae numquam quod eum.</p>
            </div>
            <div className="mt-20 pb-24 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 max-w-[800px] gap-28 mx-auto">
              <div className="rounded-full border-2 border-white w-[250px] h-[250px] text-center text-white">
                <p className="text-5xl font-bold pt-[75px]">7K</p>
                <p>CUSTOMER</p>
              </div>
              <div className="rounded-full border-2 border-white w-[250px] h-[250px] text-center text-white">
                <p className="text-5xl font-bold pt-[75px]">109</p>
                <p>CUSTOMER</p>
              </div>
              <div className="rounded-full border-2 border-white w-[250px] h-[250px] text-center text-white">
                <p className="text-5xl font-bold pt-[75px]">35</p>
                <p>CUSTOMER</p>
              </div>
            </div>
          </div>
        </div>


        {/* Section popular */}

        <div className="our">
           <div className="relative">
           <Image className="md:top-[30%] md:left-[92%] top-[3%] left-[5%] absolute"width={80} src={img1} alt=""/>
            <Image className="md:top-[78%] md:left-[83%] top-[19%] left-[-1%] absolute"width={120} src={img2} alt=""/>
            <Image className="md:top-[10%] md:left-[25%] top-[43%] left-[8%] absolute" width={75} src={img3} alt=""/>
            <Image className="md:top-[88%] md:left-[1%] top-[68%] left-[6%] absolute" width={75} src={img4} alt=""/>
            <Image className="md:top-[22%] md:left-[3%] top-[43%] left-[72%] absolute" width={85} src={img5} alt=""/>
            <Image className="md:top-[7%] md:left-[69%] top-[15%] left-[59%] absolute" width={160} src={img6} alt=""/>
          <div className="">
            <div className="text-center py-20 mx-auto max-w-[300px]">
              <p className="text-red-500 font-bold text-2xl md:text-4xl mb-3">Popular Package</p>
            </div>
            <div className="text-red-500 lg:max-w-[1100px] lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 pb-16 px-3 mt-5 mx-auto">
              <div className="bg-white rounded-lg max-w-[300px] text-red-500 text-center">
                  <p className="py-6 text-2xl font-semibold">PACKAGES 1</p>
                  <Image className="mx-auto mb-5" src={redbur} alt=""/>
                  <p className="py-3 text-2xl font-semibold">$10.00</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae.</p>
                  <button className="mt-3 mb-4 text-white bg-red-500 rounded-3xl px-16 py-3">ORDER NOW</button>
              </div>
              <div className="bg-white rounded-lg max-w-[300px] text-red-500 text-center">
                  <p className="py-6 text-2xl font-semibold">PACKAGES 2</p>
                  <Image className="mx-auto mb-5" src={redbur} alt=""/>
                  <p className="py-3 text-2xl font-semibold">$20.00</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae.</p>
                  <button className="mt-3 mb-4 text-white bg-red-500 rounded-3xl px-16 py-3">ORDER NOW</button>
              </div>
              <div className="bg-white rounded-lg max-w-[300px] text-red-500 text-center">
                  <p className="py-6 text-2xl font-semibold">PACKAGES 3</p>
                  <Image className="mx-auto mb-5" src={redbur} alt=""/>
                  <p className="py-3 text-2xl font-semibold">$30.00</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae.</p>
                  <button className="mt-3 mb-4 text-white bg-red-500 rounded-3xl px-16 py-3">ORDER NOW</button>
              </div>
            </div>
          </div>
           </div>
        </div>

        {/* Section Background */}

        <div className="barry bg-red-500">
            <div className="mx-auto py-52 max-w-[450px] text-center text-white">
              <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione asperiores maxime sapiente dolorem eos aliquid.</p>
              <p className="font-semibold text-3xl mt-10">Barry Henderson</p>
            </div>
        </div>


        {/* Section Update */}

        <div className="our">
           <div className="relative">
           <Image className="md:top-[55%] md:left-[89%] top-[3%] left-[5%] absolute"width={80} src={img1} alt=""/>
            <Image className="md:top-[70%] md:left-[10%] top-[19%] left-[-1%] absolute"width={120} src={img2} alt=""/>
            <Image className="md:top-[13%] md:left-[17%] top-[43%] left-[8%] absolute" width={75} src={img3} alt=""/>
            <Image className="md:top-[78%] md:left-[47%] top-[43%] left-[8%] absolute" width={75} src={img3} alt=""/>
            <Image className="md:top-[42%] md:left-[6%] top-[68%] left-[6%] absolute" width={75} src={img4} alt=""/>
            <Image className="md:top-[78%] md:left-[75%] top-[43%] left-[72%] absolute" width={85} src={img5} alt=""/>
            <Image className="md:top-[9%] md:left-[45%] top-[43%] left-[72%] absolute" width={85} src={img5} alt=""/>
            <Image className="md:top-[8%] md:left-[75%] top-[15%] left-[59%] absolute" width={160} src={img6} alt=""/>
          <div className="py-44 max-w-[1100px] mx-auto items-center">
            <div className="text-red-500 lg:max-w-[800px] px-3 mt-5 mx-auto text-center">
              <p className="font-bold text-xl md:text-6xl mb-4">Don't miss Our Updates</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, dolores eligendi nobis eveniet omnis rerum repellat vitae numquam quod eum.</p>
                <div>
                  <input type="email" className="px-16 py-3 rounded-s-3xl outline-none" placeholder="Your Email" />
                  <button className="mt-9 text-white bg-red-500 rounded-e-3xl px-16 py-3">ORDER NOW</button>
                </div>
            </div>
          </div>
           </div>
        </div>


        {/* Footer */}

        <div className="bg-black text-white">
        <div className="py-40 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 mx-auto max-w-[1200px] gap-12">
          <div>
            <p className="text-xl font-semibold mb-4">Title Here</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo facilis enim ullam reiciendis labore ex dolores. Lorem ipsum dolor sit amet.</p>
            <div className="flex gap-3 mt-4">
              <SiInstagram className="text-3xl rounded-full bg-white text-black"/>
              <FaFacebook className="text-3xl rounded-full bg-white text-black"/>
              <AiFillTwitterCircle className="text-3xl rounded-full bg-white text-black"/>
              <FaSquareWhatsapp className="text-3xl rounded-full bg-white text-black"/>
            </div>
          </div>
          <div>
            <p className="text-xl font-semibold mb-4">About</p>
            <p>History</p>
            <p>Our Team</p>
            <p>Brand Guidelines</p>
            <p>Terms & Condition</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <p className="text-xl font-semibold mb-4">Services</p>
            <p>History</p>
            <p>Our Team</p>
            <p>Brand Guidelines</p>
            <p>Terms & Condition</p>
            <p>Privacy Policy</p>
          </div>
          <div>
            <p className="text-xl font-semibold mb-4">Other</p>
            <p>Contact Us</p>
            <p>Help</p>
            <p>Privacy</p>
          </div>
        </div>
        </div>
    </>
  )
}
