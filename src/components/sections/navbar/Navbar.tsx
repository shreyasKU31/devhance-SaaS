"use client";
import Image from "next/image";
import React, { useState } from "react";
import NavElements from "./NavElements";
import Button from "@/components/ui/Button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);
  return (
    <header className="fixed w-full pt-6 px-4">
      <nav className="max-w-5xl m-auto rounded-full border backdrop-blur-2xl bg-[#ffffff20] border-white flex justify-between px-8 py-4 items-center">
        <div className="flex gap-4 max-md:hidden">
          <NavElements text={"Features"} />
          <NavElements text={"Showcase"} />
        </div>
        <Image
          width={180}
          height={25}
          src={"/DHLogo.png"}
          alt="DevHance Logo"
        />
        <Button
          text={"Sign-In"}
          style="primary px-8 py-2 rounded-full max-md:hidden"
        />

        <Menu
          className="md:hidden"
          onClick={() => setMobileView(!mobileView)}
        />

        {mobileView && (
          <div className="absolute top-20 py-8 left-0 bg-[var(--bg)] text-center w-full m-auto flex flex-col gap-4 ">
            <NavElements text={"Features"} />
            <NavElements text={"Showcase"} />
            <Button text={"Sign-In"} style="primary px-8 py-2 rounded-full" />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
