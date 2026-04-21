import knight from "../imagens/knight.jpg"
import cornifer from "../imagens/cornifer.webp"
import paleking from "../imagens/paleking.webp"
import hornet from "../imagens/hornet.webp"
import quirrel from "../imagens/quirrel.png"
import sheo from "../imagens/sheo.webp"
import zote from "../imagens/zote.webp"
import lixo from "../imagens/primalaspid.webp"
import grimm from "../imagens/grimm.png"



const sugestoes = [
    {
        id: 1,
        user: "Quirrel",
        avatar: quirrel,
    },
    {
        id: 2,
        user: "lixo",
        avatar: lixo,
    },
    {
        id: 3,
        user: "Grimm",
        avatar: grimm,
    },
]





function Sugestoes(){
    return(
        <div className = "Perfis">
            <div className = "Seu-Perfil">
                <img id = "Foto-Perfil" src = {knight}></img>
                <p id = "Nome-Perfil">Fantasma</p>
                <p id = "Editar-Perfil">Editar</p>
            </div>
            
            <p id = "sugestoes">Sugestões pra você</p>
            {sugestoes.map(perfis => (
                <div className="Sugestoes-Voce" key={perfis.id}>
                    <img className = "Avatar-Sugestao" src={perfis.avatar} />
                    <p className = "Usuario-Sugestao">{perfis.user}</p>
                    <p id = "Seguir">Seguir</p>
                </div>
            ))}
        </div>       
    )
}

export default Sugestoes