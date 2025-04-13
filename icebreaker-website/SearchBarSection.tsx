import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Flame, MapPin, User } from "lucide-react";
import React from "react";

export default function SearchBarSection(): JSX.Element {
  // Data for range selectors
  const rangeSelectors = [
    { icon: <User className="h-6 w-6" />, from: "#", to: "###" },
    { icon: <Clock className="h-6 w-6" />, from: "##", to: "###" },
    { icon: <Flame className="h-6 w-6" />, from: "#", to: "##" },
    { icon: <MapPin className="h-6 w-6" />, tags: ["door", "size"] },
  ];

  return (
    <Card className="w-full max-w-[400px] rounded-[30px] bg-[#fffaff] p-6">
      <CardContent className="p-0">
        <h2 className="font-bold text-[25px] [font-family:'Inter-Bold',Helvetica] text-[#1e1b18] mb-3">
          TITLE
        </h2>

        <div className="space-y-2">
          {/* First row of filters */}
          <div className="flex items-center gap-3">
            {rangeSelectors[0].icon}
            <div className="flex-1">
              <div className="bg-[#d9d9d9] rounded-[30px] h-[30px] flex items-center justify-between px-5">
                <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-xl text-[#1e1b18]">
                  {rangeSelectors[0].from}
                </span>
                <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-[15px] text-black">
                  to
                </span>
                <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-xl text-black">
                  {rangeSelectors[0].to}
                </span>
              </div>
            </div>
          </div>

          {/* Second row of filters */}
          <div className="flex items-center gap-3">
            {rangeSelectors[1].icon}
            <div className="flex-1">
              <div className="bg-[#d9d9d9] rounded-[30px] h-[30px] flex items-center justify-between px-5">
                <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-xl text-[#1e1b18]">
                  {rangeSelectors[1].from}
                </span>
                <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-[15px] text-black">
                  to
                </span>
                <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-xl text-black">
                  {rangeSelectors[1].to}
                </span>
              </div>
            </div>
          </div>

          {/* Third row of filters */}
          <div className="flex items-center gap-3">
            {rangeSelectors[2].icon}
            <div className="flex-1">
              <div className="bg-[#d9d9d9] rounded-[30px] h-[30px] flex items-center justify-between px-5">
                <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-xl text-[#1e1b18]">
                  {rangeSelectors[2].from}
                </span>
                <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-[15px] text-black">
                  to
                </span>
                <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-xl text-black">
                  {rangeSelectors[2].to}
                </span>
              </div>
            </div>
          </div>

          {/* Fourth row with tags */}
          <div className="flex items-center gap-3">
            {rangeSelectors[3].icon}
            <div className="flex-1 flex gap-2">
              {rangeSelectors[3].tags.map((tag, index) => (
                <Badge
                  key={index}
                  className="bg-[#d9d9d9] text-black rounded-[30px] h-[30px] px-4 flex items-center justify-center [font-family:'Murecho-Regular',Helvetica] font-normal text-[13px]"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Materials section */}
        <div className="mt-4 flex">
          <span className="w-[83px] [font-family:'Murecho-Regular',Helvetica] font-normal text-[15px] text-[#1e1b18]">
            Materials:
          </span>
          <span className="[font-family:'Murecho-ExtraLight',Helvetica] font-extralight text-[15px] text-[#1e1b18]">
            ###################
          </span>
        </div>

        {/* Description */}
        <p className="mt-2 [font-family:'Murecho-ExtraLight',Helvetica] font-extralight text-[15px] text-[#1e1b18]">
          Description Description Description Description Description
          Description Description .....
        </p>
      </CardContent>
    </Card>
  );
}
