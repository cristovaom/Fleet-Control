import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Search, X } from "lucide-react";

export function TicketsFilter() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="ID da multa" className="h-8 w-auto" />
      <Input placeholder="Nome do Motorista" className="h-8 w-[320px]" />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos as categorias</SelectItem>
          <SelectItem value="pending">Velocidade</SelectItem>
          <SelectItem value="canceled">Cancelado</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Qualquer status</SelectItem>
          <SelectItem value="pending">Pagas</SelectItem>
          <SelectItem value="canceled">Não pagas</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="secondary" size="xs" type="submit">
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>
      <Button variant="outline" size="xs" type="button">
        <X className="mr-2 h-4 w-4" />
        Remover filtros
      </Button>
    </form>
  );
}
