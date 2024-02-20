import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function CarsDeleteConfirm() {
  return (
    <>
      <Dialog>
        <DialogHeader>
          <DialogTitle>Excluir Veículo</DialogTitle>
          <DialogDescription>
            Você tem certeza que deseja excluir este veículo? Esta ação não pode
            ser desfeita.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" type="button">
              Cancelar
            </Button>
          </DialogClose>

          <Button variant="default" type="button">
            Excluir
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
