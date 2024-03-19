import React, { FunctionComponent} from "react";

type Props = {
    Icon: React.ElementType
    title:string
    subTitle:string
}

const OfferCard:FunctionComponent<Props> = ({ Icon, title, subTitle }) => {
  return (
    <div className=" w-full shadow-cardShadwo flex flex-col items-center justify-center gap-10 py-16">
      {Icon && <Icon className="text-7xl text-designColors" />}
      <h1 className="text-2xl font-semibold uppercase tracking-[10px] text-gray-100">{title}</h1>
      <p className="text-2xl text-textColor px-10 text-center leading-[40px]">{subTitle}</p>
    </div>
  );
};

export default OfferCard;
