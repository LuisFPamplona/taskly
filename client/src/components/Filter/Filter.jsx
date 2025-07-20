import { CalendarRange, ChevronLeft, ChevronRight, Search } from "lucide-react";
import Input from "../Input/Input";
import { useRef } from "react";

export default function Filter({ setSearchContent }) {
  const inputRef = useRef();
  return (
    <>
      <div className="flex justify-center border-b pb-2 md:pb-0 w-full md:w-82 md:border-0 ">
        <div className="w-82 flex justify-center">
          <div className="border w-82 flex items-center justify-between pl-4 pr-4">
            <input
              ref={inputRef}
              type="text"
              placeholder="Buscar tarefa"
              className="border-0 outline-0 w-64 md:w-80 h-10 p-2 rounded"
              onChange={() => {
                setSearchContent(inputRef.current.value);
              }}
            />
            <Search />
          </div>
        </div>
      </div>
    </>
  );
}
