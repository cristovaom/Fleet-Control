import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function CarsDetails() {
  return (
    <>
      <Dialog>
        <DialogHeader className="flex items-center justify-center">
          <DialogTitle>Veículo placa: BCTY-2843</DialogTitle>
        </DialogHeader>

        <Separator className="mt-6 mb-6" />

        <DialogDescription>
          <Table className="flex justify-between">
            <TableHeader>
              <TableRow className="flex flex-col">
                <TableHead>Identificador:</TableHead>
                <TableHead>Marca:</TableHead>
                <TableHead>Modelo:</TableHead>
                <TableHead>Ano:</TableHead>
                <TableHead>Número de Multas:</TableHead>
                <TableHead>Placa:</TableHead>
                <TableHead>Nº do Chassí:</TableHead>
                <TableHead>Data de Cadastro:</TableHead>
                <TableHead>Data de edição:</TableHead>
              </TableRow>
            </TableHeader>
            <TableHeader>
              <TableRow className="flex flex-col">
                <TableHead>adfakfasd34589154341234314</TableHead>
                <TableHead>Renault</TableHead>
                <TableHead>Kangoo</TableHead>
                <TableHead>2018</TableHead>
                <TableHead>5</TableHead>
                <TableHead>BCTY-2843</TableHead>
                <TableHead>5134-1234</TableHead>
                <TableHead>21/02/2023</TableHead>
                <TableHead>21/02/2024</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </DialogDescription>
      </Dialog>
    </>
  );
}
