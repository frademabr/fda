"use client";

import * as React from "react";

import { z } from "zod";

import { useForm } from "react-hook-form";

import { Check } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Input
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Divider } from "@/components/catalyst-ui-kit/typescript/divider";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiliaisContactSchema } from "lib/schema";

//-----------------------------------------------------------------------------------------
export type IFormInput = z.infer<typeof FiliaisContactSchema>;

// import zod schema
//------------------------------------------------------------------------------------------
export function FiliaisContact() {
  const defaultValues: IFormInput = {
    id: "",
    filiais: "",
    outros: "",
    email: "",
    empresa: "",
    nome: "",
    cel: "",
  };

  const methods = useForm<IFormInput>({
    resolver: zodResolver(FiliaisContactSchema),
    defaultValues,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: zodResolver(FiliaisContactSchema),
  });

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  // const onSubmit = handleSubmit(async (data) => {
  //   try {
  //     await new Promise((resolve) => setTimeout(resolve, 500));
  //     reset();
  //     console.info("DATA", data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // });

  return (
    <section className="relative py-12">
      <Divider soft my-6 className="mb-20 bg-gray-800 px-7" />
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-20 -top-20 bg-[radial-gradient(ellipse_35%_15%_at_40%_55%,hsl(var(--accent))_0%,transparent_100%)] lg:bg-[radial-gradient(ellipse_12%_20%_at_60%_45%,hsl(var(--accent))_0%,transparent_100%)]"></div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-20 -top-20 bg-[radial-gradient(ellipse_35%_20%_at_70%_75%,hsl(var(--accent))_0%,transparent_80%)] lg:bg-[radial-gradient(ellipse_15%_30%_at_70%_65%,hsl(var(--accent))_0%,transparent_80%)]"></div>
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-20 -top-20 bg-[radial-gradient(hsl(var(--accent-foreground)/0.5)_1px,transparent_1px)] [background-size:8px_8px] [mask-image:radial-gradient(ellipse_60%_60%_at_65%_50%,#000_10%,transparent_50%)]"></div>
      <div className="container ml-20 grid w-full grid-cols-1 gap-x-32 overflow-hidden lg:grid-cols-2">
        <div className="ml-20 w-full pb-10 md:space-y-10 md:pb-0">
          <div className="space-y-4 md:max-w-[40rem]">
            <h1 className="text-4xl font-bold lg:text-5xl ml-3">
              Fale com um de nossos <span className="text-blue-700">Consultores</span>
            </h1>
            <div className="text-muted-foreground md:text-base lg:text-lg lg:leading-7 ml-3">
              In non libero bibendum odio pellentesque ullamcorper. Aenean condimentum,
              dolor commodo pulvinar bibendum.
            </div>
          </div>
          <div className="hidden md:block">
            <div className="space-y-16 pb-20 lg:pb-0">
              <div className="space-y-6">
                <div className="mt-16 ml-3 flex overflow-hidden">
                  <Avatar className="size-11">
                    <AvatarImage src="https://shadcnblocks.com/images/block/avatar-1.webp" />
                    <AvatarFallback>SB</AvatarFallback>
                  </Avatar>
                  <Avatar className="-ml-4 size-11">
                    <AvatarImage src="https://shadcnblocks.com/images/block/avatar-3.webp" />
                    <AvatarFallback>RA</AvatarFallback>
                  </Avatar>
                  <Avatar className="-ml-4 size-11">
                    <AvatarImage src="https://shadcnblocks.com/images/block/avatar-2.webp" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                </div>
                <div className="space-y-4 ml-10">
                  <p className="text-sm font-semibold ml-3">O que esperar:</p>
                  <div className="flex items-center space-x-2.5">
                    <Check className="size-5 shrink-0 text-muted-foreground" />
                    <p className="text-sm">Consultores altamente qualificados</p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Check className="size-5 shrink-0 text-muted-foreground" />
                    <p className="text-sm">Estratégias para melhorar seu negócio</p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Check className="size-5 shrink-0 text-muted-foreground" />
                    <p className="text-sm">Respostas para todos os seus casos de uso</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-12 ml-3">
                {/* <img
                  src="https://shadcnblocks.com/images/block/logos/astro.svg"
                  alt="placeholder"
                  className="h-6"
                />
                <img
                  src="https://shadcnblocks.com/images/block/logos/shadcn-ui.svg"
                  alt="placeholder"
                  className="h-6"
                /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center ml-10 lg:mt-2.5">
          <div className="relative flex w-full min-w-[20rem] max-w-[30rem] flex-col items-center overflow-visible md:min-w-[24rem]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6 w-full space-y-6 rounded-xl border-gray-400 border-border bg-background bg-gray-800  px-6 py-10 shadow-xl">
                <div>
                  <div className="mb-2.5 text-sm font-medium">
                    <label htmlFor="nome">Nome Completo</label>
                  </div>
                  <Input
                    className="text-slate-800"
                    {...register("nome")}
                    id="nome"
                    name="nome"
                    placeholder="José Silva"
                  />
                </div>
                {errors?.nome?.message && (
                  <p className="text-red-700 mb-4">{errors.nome.message}</p>
                )}
                <div>
                  <div className="mb-2.5 text-sm font-medium">
                    <label htmlFor="empresa">Empresa </label>
                    <span className="text-muted-foreground">(Opcional)</span>
                  </div>
                  <Input
                    className="text-slate-800"
                    {...register("empresa")}
                    id="empresa"
                    name="empresa"
                    placeholder="Fradema"
                  />
                </div>

                <div>
                  <div className="mb-2.5 text-sm font-medium">
                    <label htmlFor="cel">Celular</label>
                  </div>
                  <Input
                    className="text-slate-800"
                    {...register("cel")}
                    type="number"
                    id="cel"
                    name="cel"
                    placeholder="(xx)99888-7766"
                  />
                </div>
                {errors?.cel?.message && (
                  <p className="text-red-700 mb-4">{errors.cel.message}</p>
                )}
                <div>
                  <div className="mb-2.5 text-sm font-medium">
                    <div className="mb-2.5 text-sm font-medium">
                      <label htmlFor="email">Email </label>
                      {/* <span className="text-muted-foreground"></span> */}
                    </div>
                    <Input
                      className="text-slate-800"
                      {...register("email")}
                      id="email"
                      name="email"
                      type="text"
                      placeholder="nome@empresa.com"
                    />
                  </div>
                  {errors?.email?.message && (
                    <p className="text-red-700 mb-4">{errors.email.message}</p>
                  )}
                  <div>
                    <div className="mb-2.5 text-sm font-medium">
                      <label htmlFor="filiais">Filial Fradema</label>
                    </div>
                    <Select {...register("filiais")}>
                      <SelectTrigger
                        className="text-slate-800"
                        id="filiais"
                        name="filiais"
                      >
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="rj">Fradema - RJ</SelectItem>
                        <SelectItem value="sp">Fradema - SP</SelectItem>
                        <SelectItem value="campinas">Fradema - Campinas</SelectItem>
                      </SelectContent>
                      {errors?.filiais?.message && (
                        <p className="text-red-700 mb-4">{errors.filiais.message}</p>
                      )}
                    </Select>
                  </div>

                  {/* <div>
                <div className="mb-2.5 text-sm font-medium">
                  <label htmlFor="companySize">Company size</label>
                </div>
                <Select>
                  <SelectTrigger id="companySize" name="companySize">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10</SelectItem>
                    <SelectItem value="11-50">11-50</SelectItem>
                    <SelectItem value="51-200">51-200</SelectItem>
                    <SelectItem value="200+">200+</SelectItem>
                  </SelectContent>
                </Select>
              </div> */}
                  <div>
                    <div className="mb-2.5 text-sm font-medium">
                      <label htmlFor="id">
                        Como descobriu a Empresa ?{" "}
                        <span className="text-muted-foreground">(Opcional)</span>
                      </label>
                    </div>
                    <Select>
                      <SelectTrigger className="text-slate-800" id="outros" name="outros">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web">Web</SelectItem>
                        <SelectItem value="clientes">Outros clientes</SelectItem>
                        <SelectItem value="redes">Redes sociais</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex w-full flex-col justify-end space-y-3 pt-2">
                    <Button
                      onClick={handleSubmit(onSubmit)}
                      className="bg-blue-700 hover:bg-blue-800 text-white"
                      type="submit"
                    >
                      Enviar formulário
                    </Button>
                    <div className="text-xs text-muted-foreground">
                      Seus dados serão vistos e armazenados somente pela empresa. Para
                      saber mais, leia nossa{" "}
                      <a href="#" className="underline">
                        política de segurança
                      </a>
                      .
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
