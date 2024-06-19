import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Brand() {
  return (
    <div className="flex items-center gap-3 text-white">
      <Avatar>
        <AvatarImage src="./icon/logo.svg" alt="MSTSKP" />
        <AvatarFallback>MSTSKP</AvatarFallback>
      </Avatar>
      <h5 className="font-sourceCodePro font-semibold uppercase tracking-widest">
        MSTSKP
      </h5>
    </div>
  );
}
