"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Navbar } from "@/components/layout/navbar";
import { Trash2, Check } from "lucide-react"

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="sm:p-20 sm:pt-28 container mx-auto px-4 py-8 pt-32 pb-24 grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]">
                <div>
                    <h1 className="text-2xl font-bold">Seu Carrinho</h1>
                    <div className="mt-4 space-y-4">
                        <div className="flex items-center gap-4 rounded-lg border bg-card p-4 shadow-sm">
                            <img
                                src="/teste.png"
                                width={80}
                                height={80}
                                alt="Product Image"
                                className="rounded-md"
                                style={{ aspectRatio: "80/80", objectFit: "cover" }}
                            />
                            <div className="flex-1">
                                <h3 className="text-lg font-medium">Plano Unlimited</h3>
                                <p className="text-foreground/70">R$ 55.00 /mês</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button variant={"link"} className="w-10 h-10" size="icon">
                                    <Trash2 className="h-4 w-4 text-red" />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 space-y-4">
                        <div className="flex items-center gap-4 rounded-lg border bg-card p-4 shadow-sm">
                            <img
                                src="/teste.png"
                                width={80}
                                height={80}
                                alt="Product Image"
                                className="rounded-md"
                                style={{ aspectRatio: "80/80", objectFit: "cover" }}
                            />
                            <div className="flex-1">
                                <h3 className="text-lg font-medium">Plano Limited</h3>
                                <p className="text-foreground/70">R$ 55.00 /mês</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button variant={"link"} className="w-10 h-10" size="icon">
                                    <Trash2 className="h-4 w-4 text-red" />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 space-y-4">
                        <div className="flex items-center gap-4 rounded-lg border bg-card p-4 shadow-sm">
                            <img
                                src="/teste.png"
                                width={80}
                                height={80}
                                alt="Product Image"
                                className="rounded-md"
                                style={{ aspectRatio: "80/80", objectFit: "cover" }}
                            />
                            <div className="flex-1">
                                <h3 className="text-lg font-medium">Plano Jv</h3>
                                <p className="text-foreground/70">R$ 55.00 /mês</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button variant={"link"} className="w-10 h-10" size="icon">
                                    <Trash2 className="h-4 w-4 text-red" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Resumo do pedido</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-foreground/80">Plano Unlimited</span>
                                <span className="text-foreground/90">$139.98</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-foreground/80">Plano Limited</span>
                                <span className="text-foreground/90">$139.98</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-foreground/80">Plano Jv</span>
                                <span className="text-foreground/90">$139.98</span>
                            </div>
                            <Separator className=""/>
                            <div className="flex items-center justify-between font-medium">
                                <span className="text-md font-semibold">Total</span>
                                <span>$300</span>
                            </div>
                            <div className="pt-2 space-y-2">
                                <Label htmlFor="name">Cupom </Label>
                                <div className="flex items-center space-x-2">
                                    <Input
                                        id="name"
                                        placeholder="Digite aqui"
                                        className="text-muted-foreground bg-transparent mt-1"
                                    />
                                    <Button variant="default" className="w-12 h-10" size="icon">
                                        <Check className="h-4 w-4 text-red" />
                                    </Button>
                                </div>
                                <Button variant="default" className="w-full mt-20" size="icon">
                                    Finalizar Compra
                                </Button>
                            </div>

                        </CardContent>
                    </Card>
                </div>
            </main>
        </>
    );
}
