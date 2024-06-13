type InputProps = {
  label: string;
  type: React.HTMLInputTypeAttribute;
  name: string;
};
export default function Input({ label, type, name }: InputProps) {
  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={name} className="text-sm font-semibold">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required
        className="w-full border-2 bg-gray-100 px-4 py-2 text-sm"
      />
    </div>
  );
}
