import { CalendarRange, ChevronLeft, ChevronRight } from "lucide-react";
import Input from "../Input/Input";

export default function Filter() {
  return (
    <>
      <div className="flex justify-center mt-4 border-b pb-2">
        <Input plcHolder={"Buscar tarefa"} />
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
