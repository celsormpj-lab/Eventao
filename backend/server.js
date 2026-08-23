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
})
app.listen(3001,()=>{
    console.log('Servidor respondendo na porta 3001')
});