export default function Button({ children, type }) {
  /* 
    PROP.TYPE LIST

    -> default : Blue background, white text
      -Automatically applies when the type is not defined

    -> light   : White backgroud, black border, black text
    -> dark    : Dark grey backgroud, white text
    -> warning : Red backgroud,white text
    -> caution : Orange backgroud,white text
  */
  if (!type) {
    type = "default";
  }
  return (
    <>
      {type == "default" && (
        <div>
          <button
            className={`rounded-2xl bg-blue-500 w-80 h-10 hover:bg-blue-600 text-white hover:cursor-pointer active:scale-99`}
          >
            {children}
          </button>
        </div>
      )}
      {type == "light" && (
        <div>
          <button
            className={`rounded-2xl border border-gray-600 bg-white w-80 h-10 hover:bg-gray-100 text-black hover:cursor-pointer active:scale-99`}
          >
            {children}
          </button>
        </div>
      )}
      {type == "dark" && (
        <div>
          <button
            className={`rounded-2xl  bg-gray-800 w-80 h-10 hover:bg-gray-900 text-white hover:cursor-pointer active:scale-99`}
          >
            {children}
          </button>
        </div>
      )}
      {type == "warning" && (
        <div>
          <button
            className={`rounded-2xl  bg-red-500 w-80 h-10 hover:bg-red-600 text-white hover:cursor-pointer active:scale-99`}
          >
            {children}
          </button>
        </div>
      )}
      {type == "caution" && (
        <div>
          <button
            className={`rounded-2xl  bg-orange-500 w-80 h-10 hover:bg-orange-600 text-white hover:cursor-pointer active:scale-99`}
          >
            {children}
          </button>
        </div>
      )}
    </>
  );
}
