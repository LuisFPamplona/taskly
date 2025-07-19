import { CalendarRange, ChevronLeft, ChevronRight } from "lucide-react";
import Input from "../Input/Input";

export default function Filter() {
  return (
    <>
      <div className="flex justify-center border-b pb-2 md:pb-0 w-full md:w-82 md:border-0 ">
        <div className="w-82 flex justify-center">
          <div>
            <input
              type="text"
              placeholder="Buscar tarefa"
              className="border w-70 md:w-80 h-10 p-2 rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
}
