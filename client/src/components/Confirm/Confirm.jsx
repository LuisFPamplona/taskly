import { Check, TriangleAlert, X } from "lucide-react";

export default function Confirm({
  children,
  warning,
  setWarning,
  idToDelete,
  removeTask,
}) {
  if (!warning) {
    warning = "hidden";
  }

  return (
    <>
      <div className="absolute top-[20%] left-[50%] translate-x-[-50%] z-20">
        <div
          className={`${warning} w-48 h-fit p-2 bg-white border-2 border-red-400 font-bold flex flex-col justify-center items-center relative`}
        >
          <div>
            <p className="flex text-sm items-center  gap-2">
              <TriangleAlert color="red" />
              {children}
            </p>
          </div>
          <div className="w-24 flex justify-between mt-2">
            <button
              onClick={() => removeTask(idToDelete)}
              className=" bg-green-400 hover:scale-110 active:scale-95 transition-all"
            >
              <Check />
            </button>
            <button
              onClick={() => setWarning("")}
              className=" bg-red-400 hover:scale-110 active:scale-95 transition-all"
            >
              <X />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
