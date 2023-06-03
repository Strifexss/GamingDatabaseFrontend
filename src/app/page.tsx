"use client"
import React from 'react'
import Image from 'next/image'
import Button from './components/button'
import { useEffect, useRef, useState } from 'react'
import { connection } from './connection/connection'
import Cards from './components/cards'
import games from './entities/games'
import criarGame from './services/games/criarGamer'

export default function Home() {

  const [data, setData] = useState<games[]>([]) 
  const [modalADD, setModalAdd] = useState(false)

  const nomeRef = React.createRef<HTMLInputElement>();
  const descricaoRef = React.createRef<HTMLInputElement>();
  const notaRef = React.createRef<HTMLInputElement>();
  const image_pathRef = React.createRef<HTMLInputElement>();
  const generoRef = React.createRef<HTMLInputElement>();


  useEffect(() => {
    connection.get("/receberDados").then(response => {
      console.log(response)
      setData(response.data)
    }) 
  }, [])

  async function handleCriarGame() {
    const newGame = {
      nome: nomeRef.current!.value,
      descricao: descricaoRef.current!.value,
      nota: parseInt(notaRef.current!.value),
      genero: generoRef.current!.value,
      image_path: image_pathRef.current!.value,
    } 
    console.log(newGame)
    criarGame(newGame)
    setModalAdd(false)
  }

  return (
    <div className='w-screen h-screen bg-white flex flex-col items-center'>
      <div className='fixed flex flex-col items-center'>
      <div className='w-screen h-[10rem] bg-AzulEscuro2 flex justify-center items-center'>
        <h1 className='text-[4rem] font-bold text-White'>My Games</h1>
      </div>
      <Button texto='Adicionar' funcao={() => setModalAdd(!modalADD)}/>
      </div>
      <div className='w-[100%] s-[100%] overflow-y-scroll flex flex-row justify-center flex-wrap mt-[15rem]'>
      {
        data.map(data => {
          return(
            <Cards key={data.id} nome={data.nome} genero={data.genero} image_path={data.image_path} funcao={() => console.log("Funcionou")}/>
          )
        })
      }
      {/**Adicionar Modal */}
      { modalADD &&
        <div className='w-screen h-screen p-4 rounded-[1rem] md:w-[25rem] md:h-[40rem] bg-AzulEscuro1 fixed md:translate-y-[-8rem] flex flex-col justify-center items-center'>
          <Button texto='Fechar' funcao={() => setModalAdd(false)}/>
          <input type="text" className='w-[90%] text-White h-[3rem] outline-Salmao2 p-4 transition-[0.1s] bg-AzulEscuro2 m-4' placeholder='Nome' ref={nomeRef}/>
          <input type="text" className='w-[90%] h-[3rem] text-White outline-Salmao2 p-4 transition-[0.1s] bg-AzulEscuro2 m-4' placeholder='Descricao' ref={descricaoRef}/>
          <input type="text" className='w-[90%] h-[3rem] text-White outline-Salmao2 p-4 transition-[0.1s] bg-AzulEscuro2 m-4' placeholder='Gênero' ref={generoRef}/>
          <input type="Number" className='w-[90%] h-[3rem] text-White outline-Salmao2 p-4 transition-[0.1s] bg-AzulEscuro2 m-4' placeholder='Nota' ref={notaRef}/>
          <input type="text" className='w-[90%] h-[3rem] text-White outline-Salmao2 p-4 transition-[0.1s] bg-AzulEscuro2 m-4' placeholder='Imagem Url' ref={image_pathRef}/>
          <Button texto='Adicionar' funcao={() => handleCriarGame()}/>
        </div>
      }
      
      </div>
    </div>
  )
}
