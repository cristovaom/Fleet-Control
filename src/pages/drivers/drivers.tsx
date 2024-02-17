import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Search } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { DriversDetails } from "./drivers-details";
import { DriversFilter } from "./drivers-filter";

export function Drivers() {
  return (
    <>
      <Helmet title="Motoristas" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">
          Lista de motoristas
        </h1>

        <div className="space-y-2.5">
          <DriversFilter />

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  <TableHead className="w-[180px]">Nome</TableHead>
                  <TableHead className="w-[140px]">Idade</TableHead>
                  <TableHead className="w-[164px]">
                    Data de nascimento
                  </TableHead>
                  <TableHead>CPF</TableHead>
                  <TableHead className="w-[140px]">Total de Multas</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* {result &&
                  result.orders.map((order) => {
                    return <OrderTableRow key={order.orderId} order={order} />;
                  })} */}
                <TableRow>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">
                          <Search className="h-3 w-3" />
                          <span className="sr-only">Detalhes do motorista</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DriversDetails />
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                  <TableCell>adfakfasd34589154341234314</TableCell>
                  <TableCell>João Silva Prado</TableCell>
                  <TableCell>59 Anos</TableCell>
                  <TableCell>29/01/1962</TableCell>
                  <TableCell>105.242.419-88</TableCell>
                  <TableCell>5</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          {/* {result && (
            <Pagination
              onPageChange={handlePaginate}
              pageIndex={result.meta.pageIndex}
              totalCount={result.meta.totalCount}
              perPage={result.meta.perPage}
            />
          )} */}
        </div>
      </div>
    </>
  );
}
