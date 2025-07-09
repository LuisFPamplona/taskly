export default function Input({ inputType, children }) {
  return (
    <>
      <div>
        <p className="text-sm">{children}</p>
        <input
          type={inputType}
          className="border w-80 h-10 p-2 rounded"
        />
      </div>
    </>
  );
}
