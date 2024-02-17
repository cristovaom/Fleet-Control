import { DialogHeader } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Table, TableHead, TableHeader } from "@/components/ui/table";
import {
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@radix-ui/react-dialog";

export function DriversDetails() {
  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nome: João Prado silva</DialogTitle>
          <DialogDescription>Detalhes do motorista</DialogDescription>
        </DialogHeader>

        <Separator />

        <DialogDescription>
          <Table>
            <TableHeader>
              <TableHead>Nome:</TableHead>
              <TableHead>Idade:</TableHead>
              <TableHead>Data de nascimento:</TableHead>
            </TableHeader>
          </Table>
        </DialogDescription>
      </DialogContent>
    </>
  );
}
