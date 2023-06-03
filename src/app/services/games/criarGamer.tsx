import axios from "axios"
import games from "@/app/entities/games";
import { connection } from "@/app/connection/connection";

export default function criarGame(props:games) {
    connection.post('/Criargames',  {
        nome: props.nome,
        descricao: props.descricao,
        nota: props.nota,
        genero: props.genero,
        image_path: props.image_path
    }).then(result => console.log(result))
    .catch(err => console.log(err))
}