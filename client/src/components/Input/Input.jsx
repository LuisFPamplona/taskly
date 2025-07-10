export default function Input({ inputType, children, plcHolder, inputRef }) {
  return (
    <>
      <div>
        <p className="text-sm">{children}</p>
        <input
          ref={inputRef}
          type={inputType}
          placeholder={plcHolder}
          className="border w-70 md:w-80 h-10 p-2 rounded"
        />
      </div>
    </>
  );
}
