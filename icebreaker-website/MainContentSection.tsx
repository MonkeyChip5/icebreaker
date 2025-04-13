import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, ThermometerSnowflake, Timer } from "lucide-react";
import React from "react";

export default function MainContentSection(): JSX.Element {
  // Data for the range indicators
  const rangeData = [
    {
      icon: <ThermometerSnowflake className="h-6 w-6" />,
      from: "#",
      to: "###",
    },
    { icon: <Clock className="h-6 w-6" />, from: "##", to: "###" },
    { icon: <Timer className="h-6 w-6" />, from: "#", to: "##" },
    { icon: <MapPin className="h-6 w-6" />, badges: ["door", "size"] },
  ];

  return (
    <Card className="w-[400px] rounded-[30px] bg-[#fffaff] p-6">
      <div className="mb-4">
        <h2 className="text-[25px] font-bold text-[#1e1b18] [font-family:'Inter-Bold',Helvetica]">
          TITLE
        </h2>
      </div>

      <CardContent className="p-0 space-y-4">
        {/* First row of range indicators */}
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            {rangeData[0].icon}
            <div className="flex items-center h-[30px] bg-[#d9d9d9] rounded-[30px] px-5">
              <span className="text-xl font-normal text-[#1e1b18] [font-family:'Murecho-Regular',Helvetica]">
                {rangeData[0].from}
              </span>
              <span className="mx-2 text-[15px] font-normal text-black [font-family:'Murecho-Regular',Helvetica]">
                to
              </span>
              <span className="text-xl font-normal text-black [font-family:'Murecho-Regular',Helvetica]">
                {rangeData[0].to}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {rangeData[1].icon}
            <div className="flex items-center h-[30px] bg-[#d9d9d9] rounded-[30px] px-5">
              <span className="text-xl font-normal text-[#1e1b18] [font-family:'Murecho-Regular',Helvetica]">
                {rangeData[1].from}
              </span>
              <span className="mx-2 text-[15px] font-normal text-black [font-family:'Murecho-Regular',Helvetica]">
                to
              </span>
              <span className="text-xl font-normal text-black [font-family:'Murecho-Regular',Helvetica]">
                {rangeData[1].to}
              </span>
            </div>
          </div>
        </div>

        {/* Second row of range indicators */}
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            {rangeData[2].icon}
            <div className="flex items-center h-[30px] bg-[#d9d9d9] rounded-[30px] px-5">
              <span className="text-xl font-normal text-[#1e1b18] [font-family:'Murecho-Regular',Helvetica]">
                {rangeData[2].from}
              </span>
              <span className="mx-2 text-[15px] font-normal text-black [font-family:'Murecho-Regular',Helvetica]">
                to
              </span>
              <span className="text-xl font-normal text-black [font-family:'Murecho-Regular',Helvetica]">
                {rangeData[2].to}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {rangeData[3].icon}
            <div className="flex gap-2">
              {rangeData[3].badges.map((badge, index) => (
                <Badge
                  key={index}
                  className="h-[30px] px-4 bg-[#d9d9d9] text-black rounded-[30px] font-normal text-[13px] [font-family:'Murecho-Regular',Helvetica]"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Materials section */}
        <div className="flex">
          <span className="w-[83px] text-[15px] font-normal text-[#1e1b18] [font-family:'Murecho-Regular',Helvetica]">
            Materials:
          </span>
          <span className="text-[15px] font-extralight text-[#1e1b18] [font-family:'Murecho-ExtraLight',Helvetica]">
            ###################
          </span>
        </div>

        {/* Description section */}
        <div className="text-[15px] font-extralight text-[#1e1b18] [font-family:'Murecho-ExtraLight',Helvetica]">
          Description Description Description Description Description
          Description Description .....
        </div>
      </CardContent>
    </Card>
  );
}
