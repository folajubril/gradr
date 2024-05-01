import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "http://localhost:4000";

async function getGrade() {
  const data = new FormData();
  const res = await axios.post(`${BASE_URL}/api/upload/file`, data);
  console.log("res: ", res);
  return res;
}

export const useTransactionsQuery = () => {
  const res = useMutation({
    mutationKey: ["gradeData"],
    mutationFn: getGrade,
  });
  return res;
};
