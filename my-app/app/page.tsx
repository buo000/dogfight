import Button from "@/components/onboarding/button";
import Deadline from "@/components/onboarding/deadline";
import Goal from "@/components/onboarding/goal";

export default function Home() {
  return (
    <div className="w-full h-screen bg-[#FFFDF5] flex items-center justify-center text-black text-3xl">
      <div className="flex flex-col gap-10">
        <Goal />
        <Deadline />
        <Button />
      </div>
    </div>
  );
}
