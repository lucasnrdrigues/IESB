'use client'

import Pagina from "@/app/components/Pagina";
import Link from "next/link";
import { FaPlusCircle } from "react-icons/fa"

export default function Page() {
    return (
        <Pagina titulo="Empresas">

            <Link href="/empresas/create"
            className="btn btn-primary mb-3"
        >
                <FaPlusCircle /> Novo
            </Link>



        </Pagina>
    )
}