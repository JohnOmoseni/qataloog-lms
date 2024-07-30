import { ColumnDef } from "@tanstack/react-table";
import { EarningsDataType } from "./data";
import { StatusBadge } from "../StatusBadge";

export const columns: ColumnDef<EarningsDataType>[] = [
  {
    header: "s/n",
    cell: ({ row }) => <p className="table-data-sm">{row.index + 1}</p>,
  },

  {
    accessorKey: "level",
    header: "Academic Level",
    cell: ({ row }) => {
      return <p className="table-data-sm row-flex">{row.original.level}</p>;
    },
  },
  {
    accessorKey: "rate",
    header: "Rate",
    cell: ({ row }) => <p className="table-data-sm">{row.original.rate}</p>,
  },
  {
    accessorKey: "created_at",
    header: "Date Created",
    cell: ({ row }) => (
      <p className="table-data-sm">{row.original.created_at}</p>
    ),
  },
  {
    accessorKey: "updated_at",
    header: "Date updated",
    cell: ({ row }) => (
      <p className="table-data-sm">{row.original.updated_at}</p>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const earning = row.original;

      return (
        <div className="flex min-w-[115px] gap-4 px-4">
          <StatusBadge status="edit" />
          <StatusBadge status="delete" />
        </div>
      );
    },
  },
];
