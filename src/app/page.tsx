import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Search, PlusCircle, ChevronDownIcon, HomeIcon, ShoppingCartIcon, PackageIcon, UsersIcon, LogOut, Settings, User, CircleHelp } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

export default function Home() {
  return (
    <>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r lg:block dark:bg-gray-800/40">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-[60px] items-center border-b px-6">
              <div className="flex items-center gap-2 font-semibold">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>LS</AvatarFallback>
                </Avatar>
                <span>Leonardo Silva</span>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                    <ChevronDownIcon className="h-4 w-4" />
                    <span className="sr-only">Select tenant</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[150px] max-h-[300px] overflow-auto">
                  <DropdownMenuItem>
                    <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-50">
                      <User className="h-4 w-4"/>
                      Conta
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-50">
                      <Settings className="h-4 w-4" />
                      Opções
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-50">
                      <CircleHelp className="h-4 w-4" />
                      Suporte
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-4 text-sm font-medium space-y-1">
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  <HomeIcon className="h-4 w-4" />
                  Home
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  <ShoppingCartIcon className="h-4 w-4" />
                  Pedidos
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-500 transition-all hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  <PackageIcon className="h-4 w-4" />
                  Produtos
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  <UsersIcon className="h-4 w-4" />
                  Clientes
                </Link>
                <div className="mt-auto"></div>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-red-500 transition-all hover:text-red-600 hover:bg-red-100 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  <LogOut className="h-4 w-4" />
                  Sair
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full p-6 lg:px-8">
          <Card className="shadow max-w-4xl">
            <div className="p-6 space-y-4">
              <CardHeader>
                <CardTitle className="text-3xl font-bold">
                  Produtos
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <form className="flex items-center gap-2">
                  <Input name="id" placeholder="ID do pedido" />
                  <Input name="name" placeholder="Nome do produto" />
                  <Button type="submit" variant={"link"}>
                    <Search className="h-4 w-4 mr-2" />
                    Filtrar resultados
                  </Button>
                </form>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <PlusCircle className="h-4 w-4 mr-2" />Novo produto
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Novo produto</DialogTitle>
                      <DialogDescription>Criar um novo produto</DialogDescription>
                    </DialogHeader>
                    <form className="space-y-6">
                      <div className="grid grid-cols-4 items-center gap-4 text-right">
                        <Label htmlFor="name">Produto</Label>
                        <Input className="col-span-3" id="name"></Input>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4 text-right">
                        <Label htmlFor="price">Preço</Label>
                        <Input className="col-span-3" id="price"></Input>
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button type="button" variant={"outline"}>Cancelar</Button>
                        </DialogClose>
                        <Button type="submit">Salvar</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
                </CardContent>
              <CardContent className="border rounded-lg p-2">
                <Table>
                  <TableHeader>
                    <TableHead>ID</TableHead>
                    <TableHead>Produto</TableHead>
                    <TableHead>Preço</TableHead>
                  </TableHeader>
                  <TableBody>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <TableRow key={i}>
                        <TableCell>3gh12i9u3hb12i</TableCell>
                        <TableCell>Celular {i}</TableCell>
                        <TableCell>R$ 1.000,00</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </div>
              <CardFooter className="flex">
                <Pagination className="m-4 justify-end">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
