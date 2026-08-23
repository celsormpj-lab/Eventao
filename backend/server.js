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
        senha:'Mudar@2026',
        perfil: 'admin'
    },
    {
        id: 2,
        usuario: 'mariana',
        senha: 'Mudar@2026',
        perfil: 'organizador'    
    }    
]

app.get ('/', (req,res) => {
    res.json({
        mensagem: 'API funcionando'
    })
});
app.post('/login', (req,res) => {
    console.log(req.body);
    const {usuario,senha} = req.body;
    const usuarioEncontrado = usuarios.find(
        u=>u.usuario === usuario && u.senha === senha
    );
    console.log(usuarioEncontrado);
    if (!usuarioEncontrado) {
        return res.status(401).json({
            valido:false,
            mensagem: "Usuário ou senha incorretos!!"
        });
    }
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