export default function Input({
  inputType,
  children,
  plcHolder,
  inputRef,
  inputValue,
  setPrevContent,
  newContentInput,
}) {
  if (!inputValue) {
    inputValue = "";
  }
  return (
    <>
      <div>
        <p className="text-sm">{children}</p>
        <input
          onChange={() => setPrevContent(newContentInput.current.value)}
          ref={inputRef}
          type={inputType}
          placeholder={plcHolder}
          defaultValue={inputValue}
          className="border w-70 md:w-80 h-10 p-2 rounded"
        />
      </div>
    </>
  );
}
