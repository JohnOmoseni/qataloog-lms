"use client";

import {
  getPaginationRowModel,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getSortedRowModel,
  ColumnSort,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import {
  ArrowDown,
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  ThreeDots,
} from "@/constants/icons";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/types";
import { setFilters } from "@/redux/features/appSlice";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  tableData: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  tableData,
}: DataTableProps<TData, TValue>) {
  const [data, setData] = useState(tableData);
  const [sorting, setSorting] = useState<ColumnSort[]>([]);
  const [pagination, setPagination] = useState({
    pageSize: 3,
    pageIndex: 0,
  });

  const dispatch = useAppDispatch();
  const { filters } = useAppSelector((state) => state.appState);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter: filters,
      pagination,
    },
    // initialState: {
    //   pagination,
    // },
    meta: {
      updateData: (
        rowIndex: string | number,
        columnId: string,
        value: string | number,
      ) =>
        setData((prev) =>
          prev.map((row, index) =>
            index === rowIndex ? { ...prev[rowIndex], [columnId]: value } : row,
          ),
        ),
    },
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onGlobalFilterChange: (value: any) => {
      dispatch(setFilters(value));
    },
    onPaginationChange: setPagination,
  });

  const onSetPageIndex = (num: number) => {
    table.getState().pagination.pageIndex; //page number or index of the page
    table.getState().pagination.pageSize;
    table.getPageCount(); //total number of pages

    table.setPageIndex(num); //set the new page index
  };

  return (
    <div className="data-table">
      <Table className="scroll-thin min-h-[120px] overflow-x-auto rounded-lg max-[370px]:text-xs">
        <TableHeader className="shad-table-row-header">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="bg-background-100 py-2">
              {headerGroup.headers.map((header) => {
                const sortStatus = header.column.getIsSorted();
                const sortIcons = {
                  asc: (
                    <ArrowUp
                      size={22}
                      className="absolute left-full flex-[1_1_100%]"
                    />
                  ),
                  desc: (
                    <ArrowDown
                      size={22}
                      className="absolute left-full flex-[1_1_100%]"
                    />
                  ),
                };
                const sortIcon = sortStatus ? sortIcons[sortStatus] : "";

                return (
                  <TableHead
                    key={header.id}
                    className="text-center font-semibold uppercase max-[370px]:px-3 max-[370px]:text-sm"
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        className="row-flex relative cursor-default"
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {header.column.getCanSort() && sortIcon}
                      </div>
                    )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="shad-table-row"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className="max-[370px]:p-2 max-[370px]:text-center"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-40 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="table-actions">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="shad-grey-btn group disabled:cursor-pointer"
        >
          <ArrowLeft size={20} className="group-disabled:text-background" />
        </Button>

        {[1, 2, 3, 9, 10].map((num, idx) => {
          return (
            <Button
              key={idx}
              variant="outline"
              size="sm"
              onClick={() => table.setPageIndex(num - 1)}
              className="shad-grey-btn"
            >
              {num === 3 ? <ThreeDots size={20} className="" /> : num}
            </Button>
          );
        })}

        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="shad-grey-btn group disabled:cursor-pointer"
        >
          <ArrowRight size={20} className="group-disabled:text-background" />
        </Button>
      </div>
    </div>
  );
}
