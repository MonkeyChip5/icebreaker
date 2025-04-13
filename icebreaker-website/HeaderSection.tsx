import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Flame, MapPin, User } from "lucide-react";
import React from "react";

export default function HeaderSection(): JSX.Element {
  // Data for the ranges and badges
  const rangeData = [
    { icon: <User size={30} />, from: "#", to: "###" },
    { icon: <Clock size={30} />, from: "##", to: "###" },
    { icon: <Flame size={30} />, from: "#", to: "##" },
    { icon: <MapPin size={30} />, badges: ["door", "size"] },
  ];

  return (
    <Card className="w-full max-w-[400px] rounded-[30px] bg-[#fffaff]">
      <CardContent className="p-6">
        <h2 className="mb-4 font-bold text-[25px] text-[#1e1b18] [font-family:'Inter-Bold',Helvetica]">
          TITLE
        </h2>

        <div className="grid grid-cols-2 gap-3">
          {/* First row */}
          <div className="flex items-center gap-3">
            {rangeData[0].icon}
            <div className="h-[30px] bg-[#d9d9d9] rounded-[30px] flex items-center px-5 text-xl">
              <span className="text-[#1e1b18]">{rangeData[0].from}</span>
              <span className="mx-2 text-[15px] text-black">to</span>
              <span className="text-black">{rangeData[0].to}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {rangeData[1].icon}
            <div className="h-[30px] bg-[#d9d9d9] rounded-[30px] flex items-center px-5 text-xl">
              <span className="text-[#1e1b18]">{rangeData[1].from}</span>
              <span className="mx-2 text-[15px] text-black">to</span>
              <span className="text-black">{rangeData[1].to}</span>
            </div>
          </div>

          {/* Second row */}
          <div className="flex items-center gap-3">
            {rangeData[2].icon}
            <div className="h-[30px] bg-[#d9d9d9] rounded-[30px] flex items-center px-5 text-xl">
              <span className="text-[#1e1b18]">{rangeData[2].from}</span>
              <span className="mx-2 text-[15px] text-black">to</span>
              <span className="text-black">{rangeData[2].to}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {rangeData[3].icon}
            <div className="flex gap-1">
              {rangeData[3].badges.map((label, index) => (
                <Badge
                  key={index}
                  className="h-[30px] px-4 bg-[#d9d9d9] text-black rounded-[30px] font-normal [font-family:'Murecho-Regular',Helvetica] text-[13px]"
                >
                  {label}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Materials section */}
        <div className="mt-4 flex">
          <span className="w-[83px] [font-family:'Murecho-Regular',Helvetica] font-normal text-[#1e1b18] text-[15px]">
            Materials:
          </span>
          <span className="[font-family:'Murecho-ExtraLight',Helvetica] font-extralight text-[#1e1b18] text-[15px]">
            ###################
          </span>
        </div>

        {/* Description */}
        <p className="mt-2 [font-family:'Murecho-ExtraLight',Helvetica] font-extralight text-[#1e1b18] text-[15px]">
          Description Description Description Description Description
          Description Description .....
        </p>
      </CardContent>
    </Card>
  );
}