import { Table } from "@tanstack/react-table";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  phone: string;
  email: string;
};

export type DataTablePaginationProps<Data> = {
  table: Table<Data>;
};

export type Pagination = {
  page: number;
  limit: number;
};
