import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

export default function Image(): JSX.Element {
  return (
    <div className="w-[50px] h-[50px]">
      <Avatar className="w-full h-full">
        <AvatarImage src="" alt="User profile" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
    </div>
  );
}
