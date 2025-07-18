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
          <div
            className={`flex justify-center items-center rounded-2xl transition-all duration-200 bg-blue-500 w-70 md:w-80 h-10 hover:bg-blue-600 text-white hover:cursor-pointer active:scale-99`}
          >
            {children}
          </div>
        </div>
      )}
      {type == "light" && (
        <div>
          <div
            className={`flex justify-center items-center rounded-2xl transition-all duration-200 border border-gray-600 bg-white w-70 md:w-80 h-10 hover:bg-gray-100 text-black hover:cursor-pointer active:scale-99`}
          >
            {children}
          </div>
        </div>
      )}
      {type == "dark" && (
        <div>
          <div
            className={`flex justify-center items-center rounded-2xl transition-all duration-200  bg-gray-800 w-70 md:w-80 h-10 hover:bg-gray-900 text-white hover:cursor-pointer active:scale-99`}
          >
            {children}
          </div>
        </div>
      )}
      {type == "warning" && (
        <div>
          <div
            className={`flex justify-center items-center rounded-2xl transition-all duration-200  bg-red-500 w-70 md:w-80 h-10 hover:bg-red-600 text-white hover:cursor-pointer active:scale-99`}
          >
            {children}
          </div>
        </div>
      )}
      {type == "caution" && (
        <div>
          <div
            className={`flex justify-center items-center rounded-2xl transition-all duration-200  bg-orange-500 w-70 md:w-80 h-10 hover:bg-orange-600 text-white hover:cursor-pointer active:scale-99`}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
}
