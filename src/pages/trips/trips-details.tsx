import { Dialog, DialogHeader } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function TripsDetails() {
  return (
    <>
      <Dialog>
        <DialogHeader>Detalhes da Corrida: asdfadsf2413414 </DialogHeader>

        <Separator />
        <Table className="flex justify-between">
          <TableHeader>
            <TableRow className="flex flex-col">
              <TableHead>Identificador:</TableHead>
              <TableHead>Ponto de partida:</TableHead>
              <TableHead>Ponto final:</TableHead>
              <TableHead>Nome do Motorista:</TableHead>
              <TableHead>CNH do motorista:</TableHead>
              <TableHead>CPF do motorista:</TableHead>
              <TableHead>Nome da empresa:</TableHead>
            </TableRow>
          </TableHeader>

          <TableHeader>
            <TableRow className="flex flex-col">
              <TableHead>asdfadsf2413414</TableHead>
              <TableHead>SpeedBox</TableHead>
              <TableHead>Uniamerica </TableHead>
              <TableHead>João Silva Prado </TableHead>
              <TableHead>123.456.789-00-20</TableHead>
              <TableHead>123.456.789-00</TableHead>
              <TableHead>Uniamerica</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      </Dialog>
    </>
  );
}
