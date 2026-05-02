"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function IronfitLanding() {
    return (
        <div className="min-h-screen bg-[#0A0F1C] text-white">

            {/* NAV */}
            <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0F1C]/80 backdrop-blur">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <span className="font-semibold tracking-wide">IRONFIT</span>
                    <div className="flex gap-4 text-sm text-slate-300">
                        <a href="#features" className="hover:text-white">Features</a>
                        <a href="#architecture" className="hover:text-white">Architecture</a>
                        <a href="#demo" className="hover:text-white">Demo</a>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-20 space-y-28">

                {/* HERO */}
                <section className="text-center space-y-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight"
                    >
                        Full Stack Ecommerce
                        <br />
                        <span className="text-emerald-400">IRONFIT</span>
                    </motion.h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
                        Plataforma ecommerce de suplementación deportiva con pagos reales, automatización de emails y arquitectura escalable lista para producción.
                    </p>

                    <div className="flex justify-center gap-4 pt-2">
                        <Button className="rounded-xl px-6 bg-emerald-500 hover:bg-emerald-400 text-black">
                            Ver demo
                        </Button>
                        <a 
                            href="https://github.com/jackzet743/ironfit-ecommerce-v2.git"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button className="rounded-xl px-6 bg-slate-900 border border-slate-700 text-white hover:bg-slate-800">
                                Ver código
                            </Button>
                        </a>
                    </div>
                </section>

                {/* FEATURES */}
                <section id="features" className="space-y-10">
                    <h2 className="text-3xl font-semibold text-center">Core Features</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Checkout real con Stripe",
                                desc: "Pagos seguros con confirmación automática y flujo completo de compra.",
                            },
                            {
                                title: "Emails automatizados",
                                desc: "Recuperación de contraseña y confirmación de pedido con PDF.",
                            },
                            {
                                title: "Gestión de pedidos",
                                desc: "Historial completo con generación de justificantes descargables.",
                            },
                            {
                                title: "Carrito dinámico",
                                desc: "Estado persistente y sincronizado en tiempo real.",
                            },
                            {
                                title: "Autenticación segura",
                                desc: "Login, registro y recuperación con verificación por código.",
                            },
                            {
                                title: "Filtros avanzados",
                                desc: "Búsqueda optimizada por categoría y tipo de producto.",
                            },
                        ].map((f, i) => (
                            <Card key={i} className="bg-white/5 border border-white/10 rounded-2xl">
                                <CardContent className="p-6 space-y-2">
                                    <h3 className="font-semibold text-white">{f.title}</h3>
                                    <p className="text-sm text-slate-400">{f.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* ARCHITECTURE */}
                <section id="architecture" className="space-y-6 text-center">
                    <h2 className="text-3xl font-semibold">Architecture</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Sistema full stack desacoplado con API REST, base de datos relacional y servicios externos integrados.
                    </p>

                    <div className="grid md:grid-cols-4 gap-4 text-sm">
                        {[
                            "Next.js Frontend",
                            "Node.js + Express API",
                            "MySQL Database",
                            "Stripe + Nodemailer",
                        ].map((item) => (
                            <div key={item} className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                {/* FLOW */}
                <section className="space-y-6 text-center">
                    <h2 className="text-3xl font-semibold">End-to-end flow</h2>
                    <ol className="text-slate-400 space-y-2 max-w-2xl mx-auto text-left">
                        <li>1. Usuario explora catálogo</li>
                        <li>2. Añade productos al carrito</li>
                        <li>3. Realiza pago con Stripe</li>
                        <li>4. Se genera pedido en base de datos</li>
                        <li>5. Se envía email con PDF de confirmación</li>
                        <li>6. Acceso a historial de pedidos</li>
                    </ol>
                </section>

                {/* CTA */}
                <section id="demo" className="text-center space-y-6">
                    <h2 className="text-3xl font-semibold">Ready to explore?</h2>
                    <p className="text-slate-400">Proyecto listo para demostración técnica y revisión de código.</p>

                    <div className="flex justify-center gap-4">
                        <Button className="rounded-xl px-6 bg-emerald-500 hover:bg-emerald-400 text-black">
                            Ver demo
                        </Button>
                        <a 
                            href="https://github.com/jackzet743/ironfit-ecommerce-v2.git"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button className="rounded-xl px-6 bg-slate-900 border border-slate-700 text-white hover:bg-slate-800">
                                Ver código
                            </Button>
                        </a>
                    </div>
                </section>

            </main>

            {/* FOOTER */}
            <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-500">
                IRONFIT • Full Stack Ecommerce Project
            </footer>

        </div>
    );
}