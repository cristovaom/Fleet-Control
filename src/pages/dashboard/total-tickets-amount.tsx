import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { File } from "lucide-react";

export function TotalTicketsAmount() {
  return (
    <Card>
      <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">
          Total de Multas:
        </CardTitle>
        <File className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">126</span>
      </CardContent>
    </Card>
  );
}
