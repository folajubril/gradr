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
      <main className=" bg-[#f9f9f9] flex flex-col gap-[35px] h-[100vh] p-[35px]">
        <p className="text-black text-[32.86px] font-medium leading-[39.43px]">
          Assessments
        </p>

        <input className="form-control w-[300px] bg-gray rounded-md"></input>
        <TableContainer overflowX="auto"
                            className="w-full pt-4">
          <Table variant="unstyled" className="w-full">
            <Thead className="h-[58.26px] text-[#A6A9AA] text-[16px] font-medium w-full justify-start">
              <Tr className="">
                <Th className="">COURSE ID</Th>
                <Th className="">Created</Th>
                <Th className="">No of Students</Th>
                <Th className="">Average Grade</Th>
                <Th className="">Submitted</Th>
                <Th className="">Status</Th>
              </Tr>
            </Thead>
            <Tbody className="w-full justify-start">
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>millimetres (mm)</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </main>
    </DashboardLayout>
  );
}
