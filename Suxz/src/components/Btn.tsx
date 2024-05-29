type BtnProps = {
  outline?: boolean;
  muted?: boolean;
  className?: string;
  children: React.ReactNode;
  to: string;
};

export default function Btn({
  outline,
  muted,
  className,
  children,
  to,
}: BtnProps) {
  return (
    <a
      href={to}
      className={
        `inline-block rounded-lg border px-6 py-2 transition  
      ${
        outline
          ? "text-primary hover:border-primary border-white hover:bg-white"
          : "bg-primary border-primary hover:text-primary text-white hover:bg-white"
      } ${
        muted
          ? "hover:text-primary border-white bg-gray-100 text-gray-500 hover:bg-gray-100"
          : ""
      } ` + className
      }
      //   "bg-primary border-primary hover:text-primary inline-block rounded-lg border px-6 py-2 text-white transition hover:bg-white"
    >
      {children}
    </a>
  );
}
