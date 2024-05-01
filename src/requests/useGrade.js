import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "http://localhost:4000";

async function getGrade(data) {
  const res = await axios.post(`${BASE_URL}/api/upload/file`, data);
  console.log("res: ", res);
  return res;
}

export const useGrade = (data) => {
  const res = useMutation({
    mutationKey: ["gradeData"],
    mutationFn: getGrade(data),
  });
  return res;
};
