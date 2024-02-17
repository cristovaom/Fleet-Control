import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";

import { FolderSearch2, Search } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { DriversDetails } from "../drivers/drivers-details";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TripsFilter } from "./trips-filter";

export function Trips() {
  return (
    <>
      <Helmet title="Corridas" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Lista de corridas</h1>

        <div className="space-y-2.5">
          <TripsFilter />

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  <TableHead className="w-[180px]">Nome do Motorista</TableHead>
                  <TableHead className="w-[164px]">Ponto de Partida</TableHead>
                  <TableHead className="w-[164px]">Ponto Final</TableHead>
                  <TableHead className="w-[140px]">Horario Partida</TableHead>
                  <TableHead className="w-[140px]">Horario Final</TableHead>
                  <TableHead className="w-[140px]">Nome da empresa</TableHead>
                  <TableHead className="w-[64px]">Multas</TableHead>
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
                          <span className="sr-only">Detalhes da corrida</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DriversDetails />
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                  <TableCell>asdfadsf2413414</TableCell>
                  <TableCell>João Silva Prado</TableCell>
                  <TableCell>SpeedBox</TableCell>
                  <TableCell>Uniamerica</TableCell>
                  <TableCell>19/04/02-14:38</TableCell>
                  <TableCell>19/04/02-15:38</TableCell>
                  <TableCell>Uniamerica</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">
                          <FolderSearch2 className="h-3 w-3" />
                          <span className="sr-only">Detalhes da corrida</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent>Multou</DialogContent>
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
