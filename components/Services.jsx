import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
 <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
  <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
   {icon}
  </div>
  <div className="m1-5 flex flex-col flex-1">
   <h1 className="mt-2 text-white text-lg">{title}</h1>
   <p className="mt-2 text-white text-sm md:w-9/12">{subtitle}</p>
  </div>
 </div>

)

const Services = () => {
 return (
  <div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">
   <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
    <div className="flex-1 flex flex-col justify-start items-start">
     <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">What makes CryptoCarp
      <br />
      amazing (heck yea)
     </h1>
    </div>
   </div>
   <div className="flex-2 flex flex-col justify-start items-center">
    <ServiceCard
      color="bg-[#2952E4]"
      title="Security is not guaranteed"
      icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
      subtitle="Trade at your own loss. I will not be responsible for any losses of assets. Use the test network! Let's go to the moon babeyy"
      />
      <ServiceCard
      color="bg-[#8945F8]"
      title="Best exchange rates"
      icon={<BiSearchAlt fontSize={21} className="text-white" />}
      subtitle="Best exchange rates.............. provided you use the test network kekekekekekekekekekekekekekkekekekekekekekekekekkek"
      />
      <ServiceCard
      color="bg-[#F84550]"
      title="Fastest transactions"
      icon={<RiHeart2Fill fontSize={21} className="text-white" />}
      subtitle="CryptoCarp provides the fastest transactions. I promise! Get into the crypto space before it's too late!(Not a financial advice)"
      />
   </div>
  </div>
  
 );
}

export default Services;