import Image from "next/image";
import DashboardLayout from "@layout/dashbadLayout";
import Head from "next/head";
import Header from "@components/header";

export default function Submissions() {
  return (
    <DashboardLayout>
      <Head>
        <title>GradR</title>
        <meta name="description" content="GradR Marker" />
      </Head>
      <Header />
      <main className=" bg-[#f9f9f9] w-[calc(100vw-265px)] flex flex-col gap-[35px] h-[100vh] p-[35px]">
        <p className="text-black text-[32.86px] font-medium leading-[39.43px]">
        Submissions
        </p>

      </main>
    </DashboardLayout>
  );
}
