"use client";
import { Spinner } from "@/components/spinner-1";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const delayRedirect = async () => {
      router.push("/shop");
    };

    delayRedirect();
  }, [router]);
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Spinner size={70} />
    </div>
  );
}
