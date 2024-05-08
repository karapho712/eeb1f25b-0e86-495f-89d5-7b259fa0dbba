"use client";

import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { useFetchUsers } from "@/hooks/user/useFetchUsers";
import { DataTable } from "./_components/data-table";
import { User } from "../../types";
import EditableCell from "./_components/editable-cell";
import { FormProvider, useForm } from "react-hook-form";

const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    cell: (info) => info.getValue(),
  },
  {
    header: "First Name",
    accessorKey: "firstName",
    cell: EditableCell,
    sortingFn: "alphanumeric",
    enableColumnFilter: true,
    filterFn: "includesString",
  },
  {
    header: "Last Name",
    accessorKey: "lastName",
    cell: EditableCell,
    sortingFn: "alphanumeric",
  },
  {
    header: "Position",
    accessorKey: "position",
    cell: EditableCell,
    sortingFn: "alphanumeric",
  },
  {
    header: "Phone",
    accessorKey: "phone",
    cell: EditableCell,
  },
  {
    accessorKey: "email",
    cell: EditableCell,
  },
];

export default function UserTable() {
  const { data, isLoading, isFetching } = useFetchUsers();

  const formMethods = useForm<{ people: User[] }>({
    defaultValues: { people: data },
    values: { people: data },
  });

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <FormProvider {...formMethods}>
          <DataTable data={data} columns={columns} />
        </FormProvider>
      </div>
    </div>
  );
}
