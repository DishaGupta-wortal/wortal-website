import JoinUsToday from "./HomePage/static/JoinUsToday";
import Image from "next/image";
import { data, wortalInfo } from "@/components/datas/footer";

const Footer = () => {
  return (
    <>
      <JoinUsToday />
      <div className="px-[20px] md:px-[60px] lg:px-[120px] py-8 bg-[#fff]">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <Image alt="logo" width={100} height={100} src="/wortal_logo_1.png" />
          </div>
          <p className="text-[16px] md:text-[20px] lg:text-[24px] text-center">
            Made With ❤️ In India, For The World.
          </p>
        </div>
        <div className="border-t border-[#e2e8ec] py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5  gap-8 text-[#333]">
          <div className=" col-span-1 md:col-span-2">
            <h3 className="font-semibold mb-4 list_head">About Wortal</h3>
            <p className="text-sm list_content">
              Wortal is a workplace portal for your company, designed for your needs to meet customer’s needs. Our aim is to simplify and streamline your sales journey and establish connections with your customers to close deals faster.
            </p>
          </div>
          {Object.keys(data).map((section, index) => (
            index > 0 && (
              <div className="" key={index}>
                <h3 className="font-semibold text-base mb-4">{section}</h3>
                <ul>
                  {data[section].map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </div>
        <InfoSection />
      </div >
    </>
  );
};

export const InfoSection = () => {
  return (
    <div className="p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
      {Object.keys(wortalInfo).map((section, index) => (
        <div
          className={`flex justify-start items-center mb-4 ${section === "Address" ? "col-span-2" : ""
            }`}
          key={index}
        >
          <div className="rounded-full bg-[#F9F8F9] border border-[#E2E8ED] p-2 flex justify-center items-center mr-4">
            {wortalInfo[section].icon}
          </div>
          <div className="flex flex-col">
            <p className="list_content text-sm">{section}</p>
            <p className="list_head font-semibold text-base">{wortalInfo[section].info}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
