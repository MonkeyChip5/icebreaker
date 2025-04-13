import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Flame, MapPin, User } from "lucide-react";
import React from "react";

export default function ProductListSection(): JSX.Element {
  // Product data that can be mapped over
  const productData = {
    title: "TITLE",
    description:
      "Description Description Description Description Description Description Description .....",
    materials: "###################",
    attributes: [
      {
        icon: <User className="w-[30px] h-[30px]" />,
        range: { from: "#", to: "###" },
      },
      {
        icon: <Clock className="w-[30px] h-[30px]" />,
        range: { from: "##", to: "###" },
      },
      {
        icon: <Flame className="w-[30px] h-[30px]" />,
        range: { from: "#", to: "##" },
      },
      {
        icon: <MapPin className="w-[30px] h-[30px]" />,
        badges: ["door", "size"],
      },
    ],
  };

  return (
    <Card className="w-full max-w-[400px] h-[225px] rounded-[30px] bg-[#fffaff]">
      <CardContent className="p-6 relative">
        <h2 className="font-bold text-[25px] text-[#1e1b18] [font-family:'Inter-Bold',Helvetica] mb-3">
          {productData.title}
        </h2>

        {/* First row of attributes */}
        <div className="flex items-center mb-2">
          {productData.attributes[0].icon}
          <div className="ml-3 bg-[#d9d9d9] rounded-[30px] px-4 py-1 flex items-center">
            <span className="[font-family:'Murecho-Regular',Helvetica] text-xl text-[#1e1b18]">
              {productData.attributes[0].range.from}
            </span>
            <span className="mx-1 [font-family:'Murecho-Regular',Helvetica] text-[15px] text-black">
              to
            </span>
            <span className="[font-family:'Murecho-Regular',Helvetica] text-xl text-black">
              {productData.attributes[0].range.to}
            </span>
          </div>

          <div className="ml-auto flex items-center">
            {productData.attributes[1].icon}
            <div className="ml-3 bg-[#d9d9d9] rounded-[30px] px-4 py-1 flex items-center">
              <span className="[font-family:'Murecho-Regular',Helvetica] text-xl text-[#1e1b18]">
                {productData.attributes[1].range.from}
              </span>
              <span className="mx-1 [font-family:'Murecho-Regular',Helvetica] text-[15px] text-black">
                to
              </span>
              <span className="[font-family:'Murecho-Regular',Helvetica] text-xl text-black">
                {productData.attributes[1].range.to}
              </span>
            </div>
          </div>
        </div>

        {/* Second row of attributes */}
        <div className="flex items-center mb-4">
          {productData.attributes[2].icon}
          <div className="ml-3 bg-[#d9d9d9] rounded-[30px] px-4 py-1 flex items-center">
            <span className="[font-family:'Murecho-Regular',Helvetica] text-xl text-[#1e1b18]">
              {productData.attributes[2].range.from}
            </span>
            <span className="mx-1 [font-family:'Murecho-Regular',Helvetica] text-[15px] text-black">
              to
            </span>
            <span className="[font-family:'Murecho-Regular',Helvetica] text-xl text-black">
              {productData.attributes[2].range.to}
            </span>
          </div>

          <div className="ml-auto flex items-center">
            {productData.attributes[3].icon}
            <div className="flex ml-3 gap-2">
              {productData.attributes[3].badges.map((badge, index) => (
                <Badge
                  key={index}
                  className="bg-[#d9d9d9] text-black rounded-[30px] px-4 py-1 [font-family:'Murecho-Regular',Helvetica] text-[13px]"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Materials section */}
        <div className="flex mb-2">
          <span className="[font-family:'Murecho-Regular',Helvetica] text-[15px] text-[#1e1b18]">
            Materials:
          </span>
          <span className="ml-2 [font-family:'Murecho-ExtraLight',Helvetica] font-extralight text-[15px] text-[#1e1b18]">
            {productData.materials}
          </span>
        </div>

        {/* Description */}
        <p className="[font-family:'Murecho-ExtraLight',Helvetica] font-extralight text-[15px] text-[#1e1b18]">
          {productData.description}
        </p>
      </CardContent>
    </Card>
  );
}
