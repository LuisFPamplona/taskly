import { CalendarRange, ChevronLeft, ChevronRight } from "lucide-react";
import Input from "../Input/Input";

export default function Filter() {
  return (
    <>
      <div className="flex justify-center border-b pb-2 md:pb-0 w-full md:w-82 md:border-0 ">
        <div className="w-82 flex justify-center">
          <Input plcHolder={"Buscar tarefa"} />
        </div>
      </div>
      {/* <div className="flex justify-between border-b p-2 gap-4 font-bold items-center">
        <button className="hover:scale-110 active:scale-95 transition-all p-1">
          <ChevronLeft />
        </button>
        <div className="flex gap-1 items-center">
          <CalendarRange />
          <p>27/02/2000</p>
        </div>
        <button className="hover:scale-110 active:scale-95 transition-all p-1">
          <ChevronRight />
        </button>
      </div> */}
    </>
  );
}
