import coracao from '../imagens/coracao.png'
import comentarios from '../imagens/comentarios.png'
import home from '../imagens/home.png'
import compartilhar from '../imagens/compartilhar.png'
import coracaoVermelho from '../imagens/coracaovermelho.png'
import { useState } from 'react'
import knight from "../imagens/knight.jpg"
import cornifer from "../imagens/cornifer.webp"
import grimm from "../imagens/grimm.webp"
import paleking from "../imagens/paleking.png"
import hornet from "../imagens/hornet.webp"
import quirrel from "../imagens/quirrel.png"
import sheo from "../imagens/sheo.webp"
import zote from "../imagens/zote.webp"
import lixo from "../imagens/primalaspid.webp"
import silksong from "../imagens/silksong.jpg"
import reforma from "../imagens/reforma.png"
import zotegrande from "../imagens/zotegrande.webp"
import hallownest from "../imagens/hallownest.webp"
import aviaoPapel from '../imagens/compartilhar.png' 

const posts = [
  {
    id: 1,
    user: "Hornet",
    avatar: hornet,
    image: silksong,
    likes: 742,
    caption: "Joguem meu jogo por favor demorei muito pra fazer #Silksong #SHAW",
    comments: []
  },
  {
    id: 2,
    user: "Rei Pálido",
    avatar: paleking,
    image: reforma,
    likes: 99999,
    caption: "Itens pra reforma daqui de casa! #CaminhoDaDor #PaiDeVarios"
  },
  {
    id: 3,
    user: "Grande Zote",
    avatar: zote,
    image: zotegrande,
    likes: -423,
    caption: "Foto de agora!"
  },
  {
    id: 4,
    user: "Cornifer",
    avatar: cornifer,
    image: hallownest,
    likes: 32,
    caption: "Mais um trabalho finalizado! #Hummmhumhuhuuummm",
  }
]

function Post({ data }) {
  const [likes, setLikes] = useState(data.likes)
  const [curtiu, setCurtiu] = useState(false)

  function handleLike() {
    if (curtiu) {
      setLikes(likes - 1)
      setCurtiu(false)
    } else {
      setLikes(likes + 1)
      setCurtiu(true)
    }
  }

  return (
    <div className="Post">
      <div className="Post-Header">
        <img className="Avatar" src={data.avatar} />
        <p className="Usuario-Post">{data.user}</p>
      </div>
      <img className="Foto-Post" src={data.image} alt={data.caption} />
      <div className="Metricas">
        <img id="Coracao-Post" src={curtiu ? coracaoVermelho : coracao} onClick={handleLike} style={{ cursor: 'pointer' }} />
        <p className="Likes-Post">{likes}</p>
        <img id="Comentario-Post" src={comentarios} />
        <img id="Compartilhar-Post" src={compartilhar} />
      </div>
      <p className="Legenda-Post"><strong>{data.user}</strong> {data.caption}</p>
      <button className="Botao-Mensagens">
        <img src={compartilhar} /> 
        Mensagens
        <img src={knight} /> 
      </button>
    </div>
  )
}

function Feed() {
  return (
    <div className="Feed">
      {posts.map(post => (
        <Post key={post.id} data={post} />
      ))}
    </div>
  )
}

export default Feed