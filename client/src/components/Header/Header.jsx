import { AlignJustify } from "lucide-react";

export default function Header({ setNavDisplay }) {
  return (
    <>
      <header
        className="
      bg-black w-screen grid grid-cols-3 items-center h-8 md:h-12 md:gap-50
      md:flex md:justify-center md:pl-10
      "
      >
        <AlignJustify
          color="white"
          className="ml-2 md:hidden"
          onClick={() => setNavDisplay("")}
        />
        <h1 className="font-bold text-3xl text-white col-span-2">•TASKLY</h1>
      </header>
    </>
  );
}
