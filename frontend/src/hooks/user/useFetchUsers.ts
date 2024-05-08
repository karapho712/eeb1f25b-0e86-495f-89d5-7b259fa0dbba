import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { fetchUsers } from "../../../api";
import { User } from "../../../types";

export const useFetchUsers = () => {
  return useQuery<User[]>({
    queryKey: ["reports"],
    queryFn: async () => {
      return await axios
        .get(`${fetchUsers}`)
        .then((res) => res.data);
    },
    initialData: [],
  });
};
