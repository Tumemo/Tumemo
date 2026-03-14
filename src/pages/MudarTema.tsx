import { Card } from "@/components/ui/card"

function MudarTema(){
    return(
        <main className="w-dvw p-5">
            <h2>Aparências</h2>
            <h3>Tema da Interface</h3>
            <section className="flex justify-around h-60">
                <Card className="w-[30%] bg-white">
                    
                </Card>
                <Card className="w-[30%]">

                </Card>
                <Card className="w-[30%] bg-primary">

                </Card>
            </section>
            <h2>Cores destaque</h2>
            <section className="flex gap-5">
                <div className="rounded-full h-10 w-10 bg-indigo"></div>
                <div className="rounded-full h-10 w-10 bg-verde"></div>
                <div className="rounded-full h-10 w-10 bg-amarelo"></div>
            </section>
        </main>
    )
}

export default MudarTema