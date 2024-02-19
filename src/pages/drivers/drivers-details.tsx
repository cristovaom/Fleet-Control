import { DialogHeader } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@radix-ui/react-dialog";

export function DriversDetails() {
  return (
    <>
      <DialogContent>
        <DialogHeader className="flex items-center justify-center">
          <DialogTitle>Nome: João Prado silva</DialogTitle>
        </DialogHeader>

        <Separator className="mt-6 mb-6" />

        <DialogDescription>
          <Table>
            <TableHeader className="flex">
              <TableRow className="flex flex-col">
                <TableHead>Identificador:</TableHead>
                <TableHead>Nome:</TableHead>
                <TableHead>Idade:</TableHead>
                <TableHead>Data de Nascimento:</TableHead>
                <TableHead>Número de Multas:</TableHead>
                <TableHead>CPF:</TableHead>
                <TableHead>Data de Cadastro:</TableHead>
              </TableRow>
              <TableRow className="flex flex-col">
                <TableHead>adfakfasd34589154341234314</TableHead>
                <TableHead>João Silva Antunes Prado</TableHead>
                <TableHead>30</TableHead>
                <TableHead>12/12/1990</TableHead>
                <TableHead>5</TableHead>
                <TableHead>123.456.789-00</TableHead>
                <TableHead>12/12/2020</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        </DialogDescription>
      </DialogContent>
    </>
  );
}
