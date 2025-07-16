import { AlignJustify } from "lucide-react";

export default function Header({ setNavDisplay }) {
  return (
    <>
      <header
        className="
      bg-black w-screen grid grid-cols-3 items-center h-12 gap-50
      md:flex md:justify-start md:pl-10
      "
      >
        <AlignJustify
          color="white"
          className="ml-2 md:hidden"
          onClick={() => setNavDisplay("")}
        />
        <h1 className="font-bold text-4xl text-white col-span-2">•TASKLY</h1>
      </header>
    </>
  );
}
