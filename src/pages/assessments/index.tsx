import Image from "next/image";
import DashboardLayout from "@layout/dashbadLayout";
import Head from "next/head";
import Header from "@components/header";
import styles from "@/styles/Home.module.css";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

export default function Assesments() {
  return (
    <DashboardLayout>
      <Head>
        <title>GradR</title>
        <meta name="description" content="GradR Marker" />
      </Head>
      <Header />
      <main className=" bg-[#f9f9f9] w-[calc(100vw-265px)] flex flex-col gap-[35px] h-[100vh] p-[35px]">
        <p className="text-black text-[32.86px] font-medium leading-[39.43px]">
          Assessments
        </p>

        <input className=" w-[300px] bg-gray rounded-md"></input>
       <div className="relative flex flex-col w-full table-container">
        <TableContainer >
          <Table variant="unstyled" className="w-full bg-white rounded-[14.88px] py-[25.51px]" size='lg'>
            <Thead >
              <Tr className="h-[58.26px] text-[#A6A9AA] text-[16px] font-medium left-0" alignItems={'self-start'}>
                <Th className="">COURSE ID</Th>
                <Th className="">Created</Th>
                <Th className="">No of Students</Th>
                <Th className="">Average Grade</Th>
                <Th className="">Submitted</Th>
                <Th className="">Status</Th>
              </Tr>
            </Thead>
            <Tbody className="">
              <Tr className="w-full justify-start border-b-[#F1F1F1]  h-[58.26px] px-[10px] py-[20px]"  gap={10}>
                <Td>PHY 201</Td>
                <Td>millimetres (mm)</Td>
                <Td>25.4</Td>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>millimetres (mm)</Td>
              </Tr>
              <Tr className="w-full justify-start border-b-[#F1F1F1] h-[58.26px]">
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>25.4</Td>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>millimetres (mm)</Td>
              </Tr><Tr className="w-full justify-start border-b-[#F1F1F1] h-[58.26px]">
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>25.4</Td>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>millimetres (mm)</Td>
              </Tr><Tr className="w-full justify-start border-b-[#F1F1F1] h-[58.26px]">
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>25.4</Td>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>millimetres (mm)</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        </div>
      </main>
    </DashboardLayout>
  );
}
