import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Thermometer, User } from "lucide-react";
import React from "react";

export const ProductCardWrapperSection = (): JSX.Element => {
  // Data for the product card
  const productData = {
    title: "TITLE",
    materials: "###################",
    description:
      "Description Description Description Description Description Description Description .....",
    ranges: [
      { icon: User, value1: "#", value2: "###" },
      { icon: Clock, value1: "##", value2: "###" },
      { icon: Thermometer, value1: "#", value2: "##" },
    ],
    badges: [{ label: "door" }, { label: "size" }],
  };

  return (
    <Card className="w-full max-w-[400px] h-[225px] bg-[#fffaff] rounded-[30px] relative">
      <CardContent className="p-6">
        <h2 className="font-bold text-[25px] text-[#1e1b18] [font-family:'Inter-Bold',Helvetica] mb-3">
          {productData.title}
        </h2>

        <div className="grid grid-cols-2 gap-2 mt-2">
          {/* First row */}
          <div className="flex items-center gap-2">
            <User className="w-[30px] h-[30px]" />
            <div className="flex items-center h-[30px] bg-[#d9d9d9] rounded-[30px] px-4">
              <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-xl text-[#1e1b18]">
                {productData.ranges[0].value1}
              </span>
              <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-[15px] text-black mx-1">
                to
              </span>
              <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-xl text-black">
                {productData.ranges[0].value2}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-[30px] h-[30px]" />
            <div className="flex items-center h-[30px] bg-[#d9d9d9] rounded-[30px] px-4">
              <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-xl text-[#1e1b18]">
                {productData.ranges[1].value1}
              </span>
              <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-[15px] text-black mx-1">
                to
              </span>
              <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-xl text-black">
                {productData.ranges[1].value2}
              </span>
            </div>
          </div>

          {/* Second row */}
          <div className="flex items-center gap-2">
            <Thermometer className="w-[30px] h-[30px]" />
            <div className="flex items-center h-[30px] bg-[#d9d9d9] rounded-[30px] px-4">
              <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-xl text-[#1e1b18]">
                {productData.ranges[2].value1}
              </span>
              <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-[15px] text-black mx-1">
                to
              </span>
              <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-xl text-black">
                {productData.ranges[2].value2}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-[30px] h-[30px]" />
            <div className="flex gap-2">
              {productData.badges.map((badge, index) => (
                <Badge
                  key={index}
                  className="h-[30px] bg-[#d9d9d9] text-black rounded-[30px] px-4 [font-family:'Murecho-Regular',Helvetica] font-normal text-[13px]"
                >
                  {badge.label}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Materials section */}
        <div className="flex mt-3">
          <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-[15px] text-[#1e1b18]">
            Materials:
          </span>
          <span className="[font-family:'Murecho-ExtraLight',Helvetica] font-extralight text-[15px] text-[#1e1b18] ml-1">
            {productData.materials}
          </span>
        </div>

        {/* Description */}
        <p className="[font-family:'Murecho-ExtraLight',Helvetica] font-extralight text-[15px] text-[#1e1b18] mt-2">
          {productData.description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ProductCardWrapperSection;
