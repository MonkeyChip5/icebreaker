import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Flame, MapPin, User } from "lucide-react";
import React from "react";

export default function ProductCardSection(): JSX.Element {
  // Product data that can be mapped or expanded
  const productData = {
    title: "TITLE",
    description:
      "Description Description Description Description Description Description Description .....",
    materials: "###################",
    attributes: [
      { icon: User, value1: "#", value2: "###" },
      { icon: Clock, value1: "##", value2: "###" },
      { icon: Flame, value1: "#", value2: "##" },
      { icon: MapPin, badges: ["door", "size"] },
    ],
  };

  return (
    <Card className="w-[400px] rounded-[30px] bg-[#fffaff]">
      <CardContent className="p-6">
        <h2 className="mb-4 font-bold text-[25px] text-[#1e1b18] [font-family:'Inter-Bold',Helvetica]">
          {productData.title}
        </h2>

        <div className="grid grid-cols-2 gap-y-4 mb-4">
          {/* First row */}
          <div className="flex items-center gap-3">
            <User className="w-[30px] h-[30px]" />
            <div className="flex items-center h-[30px] bg-[#d9d9d9] rounded-[30px] px-5">
              <span className="text-xl text-[#1e1b18] [font-family:'Murecho-Regular',Helvetica]">
                {productData.attributes[0].value1}
              </span>
              <span className="mx-2 text-[15px] text-black [font-family:'Murecho-Regular',Helvetica]">
                to
              </span>
              <span className="text-xl text-black [font-family:'Murecho-Regular',Helvetica]">
                {productData.attributes[0].value2}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="w-[30px] h-[30px]" />
            <div className="flex items-center h-[30px] bg-[#d9d9d9] rounded-[30px] px-5">
              <span className="text-xl text-[#1e1b18] [font-family:'Murecho-Regular',Helvetica]">
                {productData.attributes[1].value1}
              </span>
              <span className="mx-2 text-[15px] text-black [font-family:'Murecho-Regular',Helvetica]">
                to
              </span>
              <span className="text-xl text-black [font-family:'Murecho-Regular',Helvetica]">
                {productData.attributes[1].value2}
              </span>
            </div>
          </div>

          {/* Second row */}
          <div className="flex items-center gap-3">
            <Flame className="w-[30px] h-[30px]" />
            <div className="flex items-center h-[30px] bg-[#d9d9d9] rounded-[30px] px-5">
              <span className="text-xl text-[#1e1b18] [font-family:'Murecho-Regular',Helvetica]">
                {productData.attributes[2].value1}
              </span>
              <span className="mx-2 text-[15px] text-black [font-family:'Murecho-Regular',Helvetica]">
                to
              </span>
              <span className="text-xl text-black [font-family:'Murecho-Regular',Helvetica]">
                {productData.attributes[2].value2}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="w-[30px] h-[30px]" />
            <div className="flex items-center gap-2">
              <Badge className="h-[30px] px-4 bg-[#d9d9d9] text-black rounded-[30px] font-normal text-[13px] [font-family:'Murecho-Regular',Helvetica]">
                door
              </Badge>
              <Badge className="h-[30px] px-4 bg-[#d9d9d9] text-black rounded-[30px] font-normal text-[13px] [font-family:'Murecho-Regular',Helvetica]">
                size
              </Badge>
            </div>
          </div>
        </div>

        <div className="mt-2 mb-2">
          <span className="font-normal text-[15px] text-[#1e1b18] [font-family:'Murecho-Regular',Helvetica]">
            Materials:
          </span>
          <span className="font-extralight text-[15px] text-[#1e1b18] [font-family:'Murecho-ExtraLight',Helvetica] ml-1">
            {productData.materials}
          </span>
        </div>

        <p className="font-extralight text-[15px] text-[#1e1b18] [font-family:'Murecho-ExtraLight',Helvetica]">
          {productData.description}
        </p>
      </CardContent>
    </Card>
  );
}
