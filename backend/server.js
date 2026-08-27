import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';

const app = express();
const PORTA = 3001

app.use(cors());
app.use(express.json());

let proximoID = 3

let usuarios = [
    {
        id: 1,
        usuario: 'celso',
        senha:'$2b$10$AtpN9gJ.NPOhWjsvp7ySbunyQnHXMVNfjivOEi0of5xerGoN7Cbzm',
        perfil: 'admin'
    },
    {
        id: 2,
        usuario: 'mariana',
        senha: '$2b$10$AtpN9gJ.NPOhWjsvp7ySbunyQnHXMVNfjivOEi0of5xerGoN7Cbzm',
        perfil: 'organizador'    
    }    
];
let eventos = [
    {
    id: 1,
    nome: "workshop de Segurança",
    data:"2026-19-10",
    local:"não aplicavel",
    tipo: "remoto",
    endereco:"não aplicavel",
    palestrante: "joao",
    tema: "cyber-segurança",
    horario: "19:30",
    Descrição: "Expanda seu conhecimento em cybersegurança, com atividades práticas,pentests tutorados pelo grande especialista Joao!",
    qtdadevagas: "20"
    },
    {
        id: 2,
        nome:"workshop de musculação",
        data:"2026-20-10",
        local:"Barra da tijuca",
        tipo: "presencial",
        palestrante:"Maçaranduba",
        tema: "educação fisica",
        horario: "10:00",
        descrição: "venha vivenciar tecnicas de treinamento de musculação com o grande mestre Maçaranduba. O famoso treiandor de campeões!",
        qtdadevagas: "15" 
    }
]

app.get ('/', (req,res) => {
    res.json({
        mensagem: 'API funcionando'
    })
});
app.post('/login', async (req,res) => {
    console.log(`Tentativa de login: ${req.body.usuario}`)
    const {usuario,senha} = req.body;
    const usuarioEncontrado = usuarios.find(
        u=>u.usuario === usuario );
        if (!usuarioEncontrado){
            console.log("Falha na tentativa de login.");
            return res.status(401).json({
                valido: false,
                mensagem: "Usuário ou senha incorretos!!"
            });
        }
        const senhaValida = await bcrypt.compare(
            senha,
            usuarioEncontrado.senha
        );
        if (!senhaValida) {
            console.log("Falha na tentativa de login.");
            return res.status(401).json({
                valido: false,
                mensagem: "Usuário ou senha incorretos",
            });
            res.json({
                valido: true,
                perfil: usuarioEncontrado.perfil
            });
        }
    console.log("Login efetuado!");    
    console.log("enviando resposta");
    res.json({
        valido:true
    });
});
app.post('/cadastro', (req,res)=>{
    const {usuario, senha} = req.body;
    const usuarioEncontrado = usuarios.find(
        u=>u.usuario === usuario
    );
    if (usuarioEncontrado) {
        return res.status(409).json ({
            valido:false,
            mensagem:"Usuário ja existe!"
        });
    }
    const novoUsuario = {
        id: proximoID++,
        usuario,
        senha,
        perfil
    };
    usuarios.push(novoUsuario);
    res.json ({
        valido:true,
        mensagem: "Usuário cadastrado com sucesso!!"
    })
});
app.get("/eventos",(req,res) =>{
    res.json(eventos);
});
app.post("/eventos",(req,res)=>{
    const novoEvento =req.body;
    eventos.push(novoEvento);
    res.status(201).json({
        mensagem:"Evento cadastrado com sucesso!",
        evento: novoEvento
    });
});
app.listen(3001,()=>{
    console.log('Servidor respondendo na porta 3001')
});
