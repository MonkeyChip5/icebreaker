import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search } from "lucide-react";
import React from "react";

import { FilterSection } from "./FilterSection";
import { FooterSection } from "./FooterSection";
import { HeaderSection } from "./HeaderSection";
import { MainContentSection } from "./MainContentSection";
import { NavigationSection } from "./NavigationSection";
import { ProductCardSection } from "./ProductCardSection";
import { ProductCardWrapperSection } from "./ProductCardWrapperSection";
// Import all sections
import { ProductListSection } from "./ProductListSection";
import { SearchBarSection } from "./SearchBarSection";

const MacbookAir = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full relative [background:linear-gradient(209deg,rgba(10,36,99,1)_0%,rgba(62,146,204,1)_86%)]">
        {/* Header with search bar */}
        <div className="w-full h-[78px] bg-[#1e1b18] flex items-center justify-between px-3">
          {/* Logo */}
          <div className="flex items-center">
            <img className="w-[70px] h-[70px] object-cover" alt="Logo" src="" />
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-[500px] mx-4">
            <div className="relative">
              <Input
                className="h-10 pl-10 pr-10 bg-[#fffaff] rounded-[30px]"
                placeholder="search"
                defaultValue=""
              />
              <Search className="absolute w-6 h-6 left-2 top-2 text-black opacity-60" />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 p-0"
              >
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* User profile */}
          <div className="flex items-center">
            <img
              className="w-[50px] h-[50px] object-cover"
              alt="User profile"
              src=""
            />
          </div>
        </div>

        {/* Main content grid layout */}
        <div className="grid grid-cols-3 gap-4 p-4">
          {/* First row */}
          <div className="col-span-1">
            <SearchBarSection />
          </div>
          <div className="col-span-1">
            <ProductCardSection />
          </div>
          <div className="col-span-1">
            <MainContentSection />
          </div>

          {/* Second row */}
          <div className="col-span-1">
            <NavigationSection />
          </div>
          <div className="col-span-1">
            <ProductListSection />
          </div>
          <div className="col-span-1">
            <FilterSection />
          </div>

          {/* Third row */}
          <div className="col-span-1">
            <ProductCardWrapperSection />
          </div>
          <div className="col-span-1">
            <HeaderSection />
          </div>
          <div className="col-span-1">
            <FooterSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacbookAir;
