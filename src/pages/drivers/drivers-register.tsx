import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const DriverSchema = z.object({
  nome: z.string().min(2, "Nome inválido!"),
  email: z.string().email("Email inválido!"),
  cpf: z.string().min(3, "CPF inválido!"),
  cnh: z.string().min(3, "CNH inválida!"),
  nascimento: z.any(),
});

type DriverSchemaBody = z.infer<typeof DriverSchema>;

export function DriverRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DriverSchemaBody>({
    resolver: zodResolver(DriverSchema),
  });

  function handleRegisterDriver(data: DriverSchemaBody) {
    console.log(data);
    toast.success("Motorista cadastrado com sucesso!");
  }
  return (
    <>
      <DialogHeader>
        <DialogTitle>Cadastrar Motorista</DialogTitle>
        <DialogDescription>Insira os dados do motorista</DialogDescription>
      </DialogHeader>
      <Separator />

      <DialogDescription
        className="flex flex-col gap-8 max-w-[420px] w-full items-center"
        asChild
      >
        <form onSubmit={handleSubmit(handleRegisterDriver)}>
          <div className=" flex items-center gap-4 ">
            <Label htmlFor="nome" className="w-20">
              Nome*
            </Label>{" "}
            {/* Definindo largura fixa para as labels */}
            <Input
              placeholder="Nome do motorista"
              className="h-8 w-[320px]"
              id="nome"
              {...register("nome")}
            />
            {errors.nome && (
              <div className="flex flex-initial justify-start">
                {" "}
                <span className="text-rose-500 text-sm flex flex-initial w-1">
                  {errors.nome.message}
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <Label htmlFor="email" className="w-20">
              Email*
            </Label>
            <Input
              placeholder="Email"
              className="h-8 w-[320px]"
              type="email"
              id="email"
              {...register("email")}
            />
            {errors.email && (
              <div className="flex flex-initial justify-start">
                {" "}
                <span className="text-rose-500 text-sm flex flex-initial w-1">
                  {errors.email.message}
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <Label htmlFor="cpf" className="w-20">
              CPF*
            </Label>
            <Input
              placeholder="CPF"
              className="h-8 w-[320px]"
              id="cpf"
              {...register("cpf")}
            />
            {errors.cpf && (
              <div className="flex flex-initial justify-start">
                {" "}
                <span className="text-rose-500 text-sm flex flex-initial w-1">
                  {errors.cpf.message}
                </span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="cnh" className="w-20">
              CNH*
            </Label>
            <Input
              placeholder="CNH"
              className="h-8 w-[320px]"
              id="cnh"
              {...register("cnh")}
            />
            {errors.cnh && (
              <div className="flex flex-initial justify-start">
                {" "}
                <span className="text-rose-500 text-sm flex flex-initial w-1">
                  {errors.cnh.message}
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-6">
            <Label className="w-20">Nascimento*</Label>
            <Input
              className="h-8 w-[320px]"
              type="date"
              {...register("nascimento")}
            />
          </div>

          <Button variant="default" type="submit">
            Cadastrar
          </Button>
        </form>
      </DialogDescription>
      <Separator />
      <DialogFooter className="flex flex-start gap-4 mr-20">
        <Separator orientation="vertical" />
        <DialogDescription>
          Lembre-se de conferir as informações do motorista!
        </DialogDescription>
      </DialogFooter>
    </>
  );
}
