import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Flame, MapPin, User } from "lucide-react";
import React from "react";

export default function NavigationSection(): JSX.Element {
  // Data for range selectors
  const rangeSelectors = [
    { icon: <User className="w-[30px] h-[30px]" />, from: "#", to: "###" },
    { icon: <Clock className="w-[30px] h-[30px]" />, from: "##", to: "###" },
    { icon: <Flame className="w-[30px] h-[30px]" />, from: "#", to: "##" },
    {
      icon: <MapPin className="w-[30px] h-[30px]" />,
      badges: ["door", "size"],
    },
  ];

  return (
    <Card className="w-full max-w-[400px] rounded-[30px] bg-[#fffaff]">
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          {/* Title */}
          <h2 className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#1e1b18] text-[25px]">
            TITLE
          </h2>

          {/* Range selectors - first row */}
          <div className="flex gap-4">
            <div className="flex items-center gap-3">
              {rangeSelectors[0].icon}
              <div className="flex items-center h-[30px] bg-[#d9d9d9] rounded-[30px] px-5">
                <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-[#1e1b18] text-xl">
                  {rangeSelectors[0].from}
                </span>
                <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-black text-[15px] mx-2">
                  to
                </span>
                <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-black text-xl">
                  {rangeSelectors[0].to}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {rangeSelectors[1].icon}
              <div className="flex items-center h-[30px] bg-[#d9d9d9] rounded-[30px] px-5">
                <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-[#1e1b18] text-xl">
                  {rangeSelectors[1].from}
                </span>
                <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-black text-[15px] mx-2">
                  to
                </span>
                <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-black text-xl">
                  {rangeSelectors[1].to}
                </span>
              </div>
            </div>
          </div>

          {/* Range selectors - second row */}
          <div className="flex gap-4">
            <div className="flex items-center gap-3">
              {rangeSelectors[2].icon}
              <div className="flex items-center h-[30px] bg-[#d9d9d9] rounded-[30px] px-5">
                <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-[#1e1b18] text-xl">
                  {rangeSelectors[2].from}
                </span>
                <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-black text-[15px] mx-2">
                  to
                </span>
                <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-black text-xl">
                  {rangeSelectors[2].to}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {rangeSelectors[3].icon}
              <div className="flex gap-2">
                {rangeSelectors[3].badges.map((badge, index) => (
                  <Badge
                    key={index}
                    className="h-[30px] px-4 bg-[#d9d9d9] text-black rounded-[30px] [font-family:'Murecho-Regular',Helvetica] font-normal text-[13px]"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Materials */}
          <div className="flex mt-1">
            <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-[#1e1b18] text-[15px] w-[83px]">
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
        </div>
      </CardContent>
    </Card>
  );
}