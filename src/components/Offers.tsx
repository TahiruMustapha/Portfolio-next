import React from "react";
import OfferCard from "./OfferCard";
import { RxCopy } from "react-icons/rx";
import { FaConnectdevelop } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";

const Offers = () => {
  return (
    <div  id="offers" className="bg-[#0F1113] text-white py-28">
      <div>
        <h1 className="text-3xl uppercase tracking-[6px] font-semibold text-center">
          What i offer
        </h1>
        <div className=" w-full px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
          <OfferCard
            title="Branding"
            subTitle="My Branding is visually stunning design that will leave you speechless"
            Icon={RxCopy}
          />
                    <OfferCard
            title="Development"
            subTitle="My Branding is visually stunning design that will leave you speechless"
            Icon={FaConnectdevelop}
          />
                    <OfferCard
            title="Marketing"
            subTitle="My Branding is visually stunning design that will leave you speechless"
            Icon={FaChartPie}
          />
                    <OfferCard
            title="Web Design"
            subTitle="My Branding is visually stunning design that will leave you speechless"
            Icon={SiAntdesign}
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
