import Image from "next/image"
import GtaV from "../images/GtaV.webp"
import FinalFantasy from "../images/imagesJogos/Final Fantasy CrisisCore.webp"

interface jogo {
    nome: string,
    genero: string
    image_path?: any
    funcao?: () => void
}

export default function Cards(props:jogo) {
    return(
    <div onClick={props.funcao} className="bg-AzulEscuro2 w-[18rem] h-[28rem] flex flex-col scale-[90%] hover:scale-[100%] cursor-pointer transition-[0.1s] m-4">
        <Image className="w-[100%] h-[75%]"
            src={props.image_path}
            alt="Jogo"
            width={200}
            height={200}
        />
        <div className="w-[100%] h-[100%] flex flex-col justify-center items-start p-4">
            <h1 className="text-White text-[1.5rem] font-semibold">{props.nome}</h1>
            <h1 className="text-White text-[1rem] font-semibold">{props.genero}</h1>
        </div>
    </div>
    )
}