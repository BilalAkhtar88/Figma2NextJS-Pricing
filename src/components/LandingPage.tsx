// components/LandingPage.jsx
// import { Button } from "@/components/ui/button"
import Image from 'next/image';
import img1 from '../../public/Group_177.png';
import img2 from '../../public/Group_11.png'; 
import img3 from '../../public/Group_31.png'; 
import img4 from '../../public/Group_174.png';

export default function LandingPage() {
  return (

    <div className="w-[1440px] h-[1024px] pb-[338px] bg-white justify-center items-center inline-flex">
      <div className="w-[1440px] h-[686px] flex-shrink-0">
        <div className="w-[1440px] h-[397px] left-0 top-0 absolute bg-violet-700" />
        <div className="w-[776px] h-[70px] left-[368px] top-[79px] absolute text-white text-[48px] font-extrabold font-['Inter']">Simple pricing for your business</div>
        <div className="w-[776px] h-[70px] left-[431px] top-[149px] absolute text-white text-2xl font-normal font-['Inter']">Plans that are carefully crafted to suit your business</div>
        <div className="w-[994px] h-[336px] left-[223px] top-[229px] absolute">
          <div className="w-[994px] h-[336px] left-0 top-0 absolute bg-white rounded-xl shadowrounded-[12px] shadow-[0px_10px_10px_5px_rgba(0,0,0,0.25)]"  />
          <div className="w-[378px] h-[336px] left-0 top-0 absolute bg-zinc-300 rounded-tl-[12px] rounded-bl-[12px]" /> 
        </div>
        <div className="w-[282px] h-[222px] left-[271px] top-[301px] absolute">
          <div className="w-[196px] h-[58px] left-[43px] top-0 absolute text-gray-900 text-2xl font-extrabold font-['Inter']">Premium PRO</div>
          <div className="w-[196px] h-[98px] left-[43px] top-[38px] absolute text-black text-6xl font-extrabold font-['Inter']">$329</div>
          <div className="w-44 h-[41px] left-[53px] top-[116px] absolute text-black text-lg font-medium font-['Inter']">billed just once</div>
          <button className="w-[282px] h-[51px] left-0 top-[171px] rounded-lg absolute bg-violet-500 flex items-center justify-center">
            <div className="text-white text-base font-medium font-['Inter']">Get Started</div>
          </button>
        </div>
        <div className="w-[503px] h-[57px] left-[656px] top-[284px] absolute text-gray-700 text-lg font-medium font-['Inter']">Access these features when you get this pricing package for your business.</div> 
        <div className="w-[22px] h-[172px] left-[650px] top-[354px] absolute">
          <div className="w-[22px] h-[22px] left-0 top-0 absolute">
            <Image
            src={img4}
            alt="img4"
            width={22}   // Adjust the width as needed
            height={22}  // Adjust the height as needed      
            />
          </div>
          <div className="w-[22px] h-[22px] left-0 top-[49px] absolute">
            <Image
              src={img4}
              alt="img4"
              width={22}   // Adjust the width as needed
              height={22}  // Adjust the height as needed      
              />
          </div>
          <div className="w-[22px] h-[22px] left-0 top-[101px] absolute">
            <Image
              src={img4}
              alt="img4"
              width={22}   // Adjust the width as needed
              height={22}  // Adjust the height as needed      
              />
          </div>
          <div className="w-[22px] h-[22px] left-0 top-[150px] absolute">
            <Image
              src={img4}
              alt="img4"
              width={22}   // Adjust the width as needed
              height={22}  // Adjust the height as needed      
              />
          </div>          
        </div>        
        <div className="w-[401px] h-[34px] left-[688px] top-[354px] absolute text-gray-700 text-base font-medium font-['Inter']">International calling and messaging API</div>
        <div className="w-[401px] h-[34px] left-[688px] top-[403px] absolute text-gray-700 text-base font-medium font-['Inter']">Additional phone numbers</div>
        <div className="w-[401px] h-[34px] left-[688px] top-[455px] absolute text-gray-700 text-base font-medium font-['Inter']">Automated messages via Zapier</div>
        <div className="w-[401px] h-[34px] left-[688px] top-[504px] absolute text-gray-700 text-base font-medium font-['Inter']">24/7 support and consulting</div>
        <div className="w-[46px] h-[46px] left-[278px] top-[640px] absolute">
          <Image
          src={img1}
          alt="img1"
          width={46}   // Adjust the width as needed
          height={46}  // Adjust the height as needed      
          />
        </div>
        <div className="w-[219px] h-8 left-[334px] top-[640px] absolute text-black text-lg font-medium font-['Inter']">
          30 days money back Guarantee
        </div>
        <div className="w-[40px] h-[40px] left-[594px] top-[642px] absolute">
        <Image
          src={img2}
          alt="img2"
          width={40}   // Adjust the width as needed
          height={40}  // Adjust the height as needed      
          />
        </div>
        <div className="w-[267px] h-[37px] left-[644px] top-[638px] absolute text-black text-lg font-medium font-['Inter']">
          No setup fees
          <br/>100% hassle-free
        </div>
        <div className="w-[40px] h-[42px] left-[870px] top-[639px] absolute">
          <Image
            src={img3}
            alt="img3"
            width={40}   // Adjust the width as needed
            height={40}  // Adjust the height as needed      
          />
        </div>
        <div className="w-[275px] h-11 left-[921px] top-[634px] absolute text-black text-lg font-medium font-['Inter']">
          No monthly subscription
          <br/>Pay once and for all
        </div>
      </div>
    </div>
  );
}
