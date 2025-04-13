import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Thermometer, User } from "lucide-react";
import React from "react";

export default function FooterSection(): JSX.Element {
  // Data for the range indicators
  const rangeData = [
    { icon: User, label: "#", to: "###", position: "top-left" },
    { icon: Clock, label: "##", to: "###", position: "top-right" },
    { icon: Thermometer, label: "#", to: "##", position: "bottom-left" },
  ];

  // Data for the badges
  const badges = [
    { label: "door", position: "bottom-right-1" },
    { label: "size", position: "bottom-right-2" },
  ];

  return (
    <Card className="w-full max-w-[400px] h-[225px] rounded-[30px] bg-[#fffaff] relative">
      <CardContent className="p-6">
        <h2 className="font-bold text-[25px] text-[#1e1b18] [font-family:'Inter-Bold',Helvetica] mb-4">
          TITLE
        </h2>

        <div className="grid grid-cols-2 gap-3">
          {/* Top left range */}
          <div className="flex items-center gap-3">
            <User className="w-[30px] h-[30px]" />
            <div className="flex items-center h-[30px] bg-[#d9d9d9] rounded-[30px] px-4">
              <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-xl text-[#1e1b18]">
                #
              </span>
              <span className="mx-1 [font-family:'Murecho-Regular',Helvetica] font-normal text-[15px] text-black">
                to
              </span>
              <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-xl text-black">
                ###
              </span>
            </div>
          </div>

          {/* Top right range */}
          <div className="flex items-center gap-3">
            <Clock className="w-[30px] h-[30px]" />
            <div className="flex items-center h-[30px] bg-[#d9d9d9] rounded-[30px] px-4">
              <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-xl text-[#1e1b18]">
                ##
              </span>
              <span className="mx-1 [font-family:'Murecho-Regular',Helvetica] font-normal text-[15px] text-black">
                to
              </span>
              <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-xl text-black">
                ###
              </span>
            </div>
          </div>

          {/* Bottom left range */}
          <div className="flex items-center gap-3">
            <Thermometer className="w-[30px] h-[30px]" />
            <div className="flex items-center h-[30px] bg-[#d9d9d9] rounded-[30px] px-4">
              <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-xl text-[#1e1b18]">
                #
              </span>
              <span className="mx-1 [font-family:'Murecho-Regular',Helvetica] font-normal text-[15px] text-black">
                to
              </span>
              <span className="[font-family:'Murecho-Regular',Helvetica] font-normal text-xl text-black">
                ##
              </span>
            </div>
          </div>

          {/* Bottom right badges */}
          <div className="flex items-center gap-3">
            <MapPin className="w-[30px] h-[30px]" />
            <div className="flex gap-2">
              <Badge className="h-[30px] px-4 bg-[#d9d9d9] text-black rounded-[30px] [font-family:'Murecho-Regular',Helvetica] font-normal text-[13px]">
                door
              </Badge>
              <Badge className="h-[30px] px-4 bg-[#d9d9d9] text-black rounded-[30px] [font-family:'Murecho-Regular',Helvetica] font-normal text-[13px]">
                size
              </Badge>
            </div>
          </div>
        </div>

        {/* Materials section */}
        <div className="flex mt-3">
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
