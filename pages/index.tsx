import { Container } from "@mantine/core";
import {
  MantineReactTable,
  type MRT_ColumnDef,
  useMantineReactTable,
} from "mantine-react-table";
import React, { useMemo } from "react";

interface Person {
  name: string;
  age: number;
}

const data: Person[] = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Sara",
    age: 25,
  },
];

export default function Page() {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        mantineTableHeadCellProps: { style: { color: "green" } },
      },
      {
        id: "age",
        header: "Age",
        Header: <i style={{ color: "red" }}>Age</i>,
      },
    ],
    [],
  );

  const table = useMantineReactTable({
    columns,
    data,
    enableRowSelection: true,
    enableColumnOrdering: true,
    enableGlobalFilter: false,
  });

  return (
    <Container>
      <MantineReactTable table={table} />
    </Container>
  );
}
