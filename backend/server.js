import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import pool from './db.js';

const app = express();
const PORTA = 3001

app.use(cors());
app.use(express.json());

pool.query('SELECT NOW()', (err, result)=>{
    if (err) {
        console.error('Erro ao conectar:', err);
    } else {
        console.log('PostgresSQL conectado', result.rows[0]);
    }
});

app.get ('/', (req,res) => {
    res.json({
        mensagem: 'API funcionando'
    })
});
app.post('/login', async (req,res) => {
    console.log(`Tentativa de login: ${req.body.usuario}`);
    const {usuario,senha} = req.body;
    try {
        const resultado = await pool.query(
            'SELECT * FROM usuarios WHERE usuario = $1',
            [usuario]
        );
        const usuarioEncontrado = resultado.rows[0];
        if (!usuarioEncontrado) {
            console.log("Falha na tentativa de login.");
            return res.status(401).json({
                valido: false,
                mensagem: "Usuario ou senha incorretos!!"
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
                mensagem: "Usuario ou senha incorretos!!"
            });
        }
        console.log("Login efetuado");
        console.log("Enviando resposta");
        res.json({
            valido: true,
            perfil: usuarioEncontrado.perfil
        });
    } catch(erro) {
        console.error(" Erro ao consultar o banco", erro);
        res.status(500).json({
            valido: false,
            mensagem: "Erro interno do servidor"
        });
    }
}); 
app.get('/usuarios', async (req, res)=> {
    try {
        const resultado = await pool.query(
            'SELECT  id, usuario, email, perfil FROM usuarios ORDER by id'
        );
        res.json(resultado.rows);
    }catch (erro) {
        console.error("Erro ao consultar tabela", erro);
        res.sendStatus(500).json({
            mensagem: "Erro interno do servidor"
        });
    }
});   
app.post('/cadastro', async (req, res)=> {
    const {usuario, senha, email, perfil} = req.body;
    try {
        const resultado = await pool.query (
            'SELECT * FROM usuarios WHERE usuario = $1 OR email = $2',
            [usuario, email] 
        );
        const usuarioEncontrado = resultado.rows[0];
        if (usuarioEncontrado) {
    if (usuarioEncontrado.usuario === usuario) {
        console.log("cadastro recusado:usuario ja existe");
        return res.status(409).json ({
            valido: false,
            mensagem: "Usuário ja existe!"
        });
    }
    if (usuarioEncontrado.email === email) {
        console.log("cadastro recusado:email ja existe");
        return res.status(409).json({
            valido: false,
            mensagem: "E-mail ja cadastrado!"
        });
    }
}
    console.log("usuario disponivel. Gerando hash");
    const senhaHash = await bcrypt.hash(senha, 10);
    console.log("gerando hash. Inserindo usuario no banco")
    await pool.query(
        'INSERT INTO usuarios (usuario, senha, email, perfil) VALUES ($1, $2, $3, $4)',
        [usuario, senhaHash, email, perfil]
    );
    console.log("Usuario cadastrado com sucesso")
    res.json({
        valido: true,
        mensagem: "Usuario cadastrado com sucesso!!"
    });
} catch (erro) {
    console.error("erro ao cadastrar usuário", erro);
}
});
app.get("/eventos", async(req, res) => {
    try {
        const resultado = await pool.query(
            `SELECT
            id,
            nome_evento,
            TO_CHAR(data, 'DD/MM/YYYY') AS data,
            local,
            tipo,
            endereco,
            palestrante,
            tema,
            TO_CHAR(horario, 'HH24:MI') AS horario,
            descricao,
            qtdvagas,
            organizador_id
            FROM eventos
            ORDER BY id`
        );
        res.json(resultado.rows);
    }catch(erro) {
        console.error("Erro ao consultar eventos:", erro);
        res.status(500).json({
            mensagem: "Ero interno do servidor"
        });
    }
});
app.post("/eventos",async (req, res) => {
    const {
        nome_evento,
        data,
        local,
        tipo,
        endereco,
        palestrante,
        tema,
        horario,
        descricao,
        qtdvagas
    } =req.body;
    if (!nome_evento || !data || !tipo || !horario || !qtdvagas) {
    return res.status(400).json ({
        mensagem: "Preencha todos os campos obrigatórios!"
    });
}
if (!Number.isInteger(qtdvagas) || qtdvagas <=0) {
    return res.status(400).json({
        mensagem: "A quantidade de vagas deve ser um numero maior que zero."
    });
}
const organizador_id = 2;
    try {
        const resultado = await pool.query(
        `INSERT INTO eventos (
            nome_evento,
            data,
            local,
            tipo,
            endereco,
            palestrante,
            tema,
            horario,
            descricao,
            qtdvagas,
            organizador_id
            )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        RETURNING *`,
        [
            nome_evento,
            data,
            local,
            tipo,
            endereco,
            palestrante,
            tema,
            horario,
            descricao,
            qtdvagas,
            organizador_id
        ]    
        );
    res.status(201).json({
        mensagem: "Evento cadastrado com sucesso!",
        evento: resultado.rows[0]
    });    
    }catch (erro) {
        console.error("Erro ao cadastrar eventos", erro);
        res.status(500).json ({
            mensagem: "Erro interno do servidor."
        });
    }
});
app.patch("/usuarios/:id/senha", async (req, res) => {
    const { id } = req.params;
    const { novaSenha } =req.body;
    if (!novaSenha) {
        return res.status(400).json({
            mensagem: "Informe a nova senha."
        });
    }
    try {
        const senhaHash = await bcrypt.hash(novaSenha, 10);
        const resultado = await pool.query(
            `UPDATE usuarios
            SET senha = $1
            WHERE id = $2
            RETURNING id`,
            [senhaHash, id]
        );
        if (resultado.rows.length ===0) {
            return res.status(404).json({
                mensagem: "Usuario não encontrado."
            });
        }
        res.status(200).json({
            mensagem: "Senha atualizada com sucesso."
        });
    }catch (erro) {
        console.error("Erro ao atualizar a senha.", erro);
        res.status(500).json({
            mensagem: "Erro interno do servidor."
        });
    }
});
app.listen(3001,()=>{
    console.log('Servidor respondendo na porta 3001')
});