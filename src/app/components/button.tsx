
interface props {
    texto: string,
    funcao?: () => void
}

export default function button(props: props) {

    return(
        <div 
        className="w-[15rem] h-[5rem] bg-Salmao2 flex border-none justify-center rounded-[1rem] cursor-pointer items-center transition-[0.1s] scale-[90%] m-4 hover:scale-[100%]"
        onClick={props.funcao}
        >
            <h1 className="text-White text-[1.5rem] font-semibold">{props.texto}</h1>
        </div>
    )
}