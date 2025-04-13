import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Flame, MapPin, User } from "lucide-react";
import React from "react";

export default function FilterSection(): JSX.Element {
  // Filter data for mapping
  const rangeFilters = [
    { icon: <User className="w-6 h-6" />, from: "#", to: "###" },
    { icon: <Clock className="w-6 h-6" />, from: "##", to: "###" },
    { icon: <Flame className="w-6 h-6" />, from: "#", to: "##" },
    {
      icon: <MapPin className="w-6 h-6" />,
      tags: ["door", "size"],
    },
  ];

  return (
    <Card className="w-full max-w-[400px] rounded-[30px] bg-[#fffaff] p-6">
      <h2 className="font-bold text-[25px] [font-family:'Inter-Bold',Helvetica] text-[#1e1b18] mb-4">
        TITLE
      </h2>

      <CardContent className="p-0 space-y-4">
        {/* First row of filters */}
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2">
            {rangeFilters[0].icon}
            <div className="flex items-center bg-[#d9d9d9] rounded-[30px] px-4 py-1">
              <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-xl text-[#1e1b18]">
                {rangeFilters[0].from}
              </span>
              <span className="mx-1 [font-family:'Murecho-Regular',Helvetica] font-normal text-[15px] text-black">
                to
              </span>
              <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-xl text-black">
                {rangeFilters[0].to}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {rangeFilters[1].icon}
            <div className="flex items-center bg-[#d9d9d9] rounded-[30px] px-4 py-1">
              <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-xl text-[#1e1b18]">
                {rangeFilters[1].from}
              </span>
              <span className="mx-1 [font-family:'Murecho-Regular',Helvetica] font-normal text-[15px] text-black">
                to
              </span>
              <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-xl text-black">
                {rangeFilters[1].to}
              </span>
            </div>
          </div>
        </div>

        {/* Second row of filters */}
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2">
            {rangeFilters[2].icon}
            <div className="flex items-center bg-[#d9d9d9] rounded-[30px] px-4 py-1">
              <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-xl text-[#1e1b18]">
                {rangeFilters[2].from}
              </span>
              <span className="mx-1 [font-family:'Murecho-Regular',Helvetica] font-normal text-[15px] text-black">
                to
              </span>
              <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-xl text-black">
                {rangeFilters[2].to}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {rangeFilters[3].icon}
            <div className="flex gap-2">
              {rangeFilters[3].tags.map((tag, index) => (
                <Badge
                  key={index}
                  className="bg-[#d9d9d9] text-black rounded-[30px] px-4 py-1 [font-family:'Murecho-Regular',Helvetica] font-normal text-[13px]"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Materials section */}
        <div className="flex">
          <span className="w-[83px] [font-family:'Murecho-Regular',Helvetica] font-normal text-[#1e1b18] text-[15px]">
            Materials:
          </span>
          <span className="[font-family:'Murecho-ExtraLight',Helvetica] font-extralight text-[#1e1b18] text-[15px]">
            ###################
          </span>
        </div>

        {/* Description */}
        <p className="[font-family:'Murecho-ExtraLight',Helvetica] font-extralight text-[#1e1b18] text-[15px]">
          Description Description Description Description Description
          Description Description .....
        </p>
      </CardContent>
    </Card>
  );
}
