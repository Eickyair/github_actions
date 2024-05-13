import { Inter } from "next/font/google";
import Card from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24 text-gray-50 bg-neutral-100">
      <Card>
        <div className="w-[580px] h-[350px] flex flex-col justify-center">
          <h3 className="text-4xl text-center">Hello world</h3>
        </div>
      </Card>
    </main>
  );
}
