import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Helmet } from "react-helmet-async";

import { Button } from "@/components/ui/button";
import { Archive, Search, SquarePen } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CarsFilter } from "./cars-filter";
import { CarsDetails } from "./cars-details";

export function Cars() {
  return (
    <>
      <Helmet title="Veículos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Lista de veículos</h1>

        <div className="space-y-2.5">
          <CarsFilter />

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  <TableHead className="w-[180px]">Marca</TableHead>
                  <TableHead className="w-[180px]">Modelo</TableHead>
                  <TableHead className="w-[180px]">Ano</TableHead>
                  <TableHead className="w-[180px]">Placa</TableHead>
                  <TableHead className="w-[140px]">Chassi</TableHead>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[64px]"></TableHead>
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
                        <CarsDetails />
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                  <TableCell>adfakfasd34589154341234314</TableCell>
                  <TableCell>Renault</TableCell>
                  <TableCell>Kangoo</TableCell>
                  <TableCell>2018</TableCell>
                  <TableCell>BCTY-2843</TableCell>
                  <TableCell>5134-1234</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">
                          <SquarePen className="h-3 w-3" />
                          <span className="sr-only">Detalhes do motorista</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent>Editar</DialogContent>
                    </Dialog>
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">
                          <Archive className="h-3 w-3" />
                          <span className="sr-only">Detalhes do motorista</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent>Excluir</DialogContent>
                    </Dialog>
                  </TableCell>
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
