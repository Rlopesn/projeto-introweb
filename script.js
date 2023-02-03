
const turmas = [
    {
        turma: "Hipatia",
        curso: "JavaScript",
        inicio: "30/11/2022",
        termino: "30/01/2023",
        numAlunos: 150,
        periodo: "Notuno",
        concluida: "Não"
    },
    {
        turma: "Sibyla",
        curso: "JavaScript",
        inicio: "30/10/2022",
        termino: "30/12/2022",
        numAlunos: 200,
        periodo: "Integral",
        concluida: "Não"
    },
    {
        turma: "Curie",
        curso: "HTML e CSS",
        inicio: "15/09/2022",
        termino: "15/10/2022",
        numAlunos: 180,
        periodo: "Noturno",
        concluida: "Sim"
    },
    {
        turma: "Zhenyi",
        curso: "HTML e CSS",
        inicio: "01/11/2022",
        termino: "01/01/2023",
        numAlunos: 80,
        periodo: "Integral",
        concluida: "Não"
    },
    {
        turma: "Clarke",
        curso: "HTML e CSS",
        inicio: "04/07/2022",
        termino: "04/09/2022",
        numAlunos: 200,
        periodo: "Noturno",
        concluida: "Sim"
    },
    {
        turma: "Blackwell",
        curso: "APIsRest",
        inicio: "20/03/2022",
        termino: "20/06/2022",
        numAlunos: 100,
        periodo: "Integral",
        concluida: "Sim"
    },
    {
        turma: "Elion",
        curso: "APIsRest",
        inicio: "12/01/2022",
        termino: "12/06/2022",
        numAlunos: 200,
        periodo: "Noturno",
        concluida: "Sim"
    },
    {
        turma: "Burnell",
        curso: "APIsRest",
        inicio: "18/10/2022",
        termino: "18/04/2023",
        numAlunos: 90,
        periodo: "Integral",
        concluida: "Não"
    },
];

const cursos = [
    {
        curso: "HTML e CSS",
        descricao: "Do basico ao avançado no curso de HTML e CSS",
        duracao: "1 mês",
        valor: 500
    },
    {
        curso: "JavaScript",
        descricao: "Do basico ao avançado no curso de JavaScript",
        duracao: "2 meses",
        valor: 900
    },
    {
        curso: "APIsRest",
        descricao: "Do basico ao avançado no curso de APIsRest",
        duracao: "6 meses",
        valor: 2000
    },
];

const estudantes = [
    {
        estudante: "Chris Evans",
        turma: "Hipatia",
        curso: "javaScript",
        valor: 900,
        nParcelas: 9,
        desconto: false,
        parcelas: 100
    },
    {
        estudante: "Halle Berry",
        turma: "Burnel",
        curso: "APIsRest",
        valor: 2000,
        nParcelas: 4,
        desconto: false,
        parcelas: 500
    },
    {
        estudante: "Lashana Lynch",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        valor: 500,
        nParcelas: 0,
        desconto: true,
        parcelas: 0
    },
];

const buscarCurso = (nomeCurso) => {
    const mostrarCurso = cursos.find((cadaCurso) => {
        if (cadaCurso.curso.toLowerCase() === nomeCurso.toLowerCase()) {
            return cadaCurso
        }

    })
    return mostrarCurso
}

let carrinhoCursos = []
const carrinho = () => {
    const inputCurso = document.getElementById("curso").value.toLowerCase()
    const valorCurso = buscarCurso(inputCurso)
    carrinhoCursos.push(valorCurso.valor)
    let pegaInput = document.getElementById("t-curso")
    if (pegaInput.innerHTML.includes(inputCurso)) {
        alert("O curso já foi adicionado!")
    } else {
        pegaInput.innerHTML += inputCurso + `<p></p> `
    }
    document.getElementById("curso").value = ""
}

const parcelarCurso = () => {
    let valorTotal = 0
    let desconto = 0
    let desconto20 = 0.2
    let valorParcela = 0
    let parcela = + document.getElementById("n-parecelas").value
    let tDesconto = document.getElementById("t-desconto")
    tDesconto.innerHTML = ""
    document.getElementById("n-parecelas").value = ""

    if (carrinhoCursos.length >= 1) {
        switch (carrinhoCursos.length) {
            case 3:
                desconto = 0.15
                break;
            case 2:
                desconto = 0.10
                break;
            case 1:
                desconto = 0
                break;
            default:
                desconto = 0
                break;
        }
        for (let valor of carrinhoCursos) {
            valorTotal = valorTotal + valor
        }
    }
    if (parcela <= 2 && carrinhoCursos.length === 3) {
        valorTotal -= valorTotal * (desconto + desconto20)
        valorParcela = valorTotal / parcela
        tDesconto.innerHTML = (`<h4 class="">Valor: </h4>R$ ${valorTotal},00. Desconto de 35%. Parcela ${parcela}x de R$ ${valorParcela.toFixed(2)}`)

    } else if (parcela <= 2 && carrinhoCursos.length === 2) {
        valorTotal -= valorTotal * (desconto + desconto20)
        valorParcela = valorTotal / parcela
        tDesconto.innerHTML = (`<h4 class="">Valor: </h4>R$ ${valorTotal},00. Desconto de 30%. Parcela ${parcela}x de R$ ${valorParcela.toFixed(2)}`)

    } else if (parcela <= 2 && carrinhoCursos.length === 1) {
        valorTotal -= valorTotal * desconto20
        valorParcela = valorTotal / parcela
        tDesconto.innerHTML = (`<h4 class="">Valor: </h4>R$ ${valorTotal},00. Desconto de 20%. Parcela ${parcela}x de R$ ${valorParcela.toFixed(2)}`)

    } else if (parcela >= 3 && parcela <= 12 && carrinhoCursos.length === 3, 2, 1) {
        valorParcela = valorTotal / parcela
        tDesconto.innerHTML = (`<h4 class="">Valor: </h4>R$ ${valorTotal},00. Parcela ${parcela}x de R$ ${valorParcela.toFixed(2)}. Confira condições para pagamento a vista ou em até 2x.`)

    } else { }
}

const buscarTurma = () => {
    const inputTurma = document.getElementById("input-busca-turma").value.toLowerCase()
    const turmaFiltrada = turmas.filter(cadaTurma => {
        if (cadaTurma.turma.toLowerCase().includes(inputTurma)) {
            return cadaTurma
        }
    })
    return turmaFiltrada.length > 0 ? gerarCard(turmaFiltrada) : gerarCard(turmas)
}

const gerarCard = (turmasBuscadas) => {
    const cards = turmasBuscadas.map((cadaTurmaBuscada) => {
        return (`<div class="box-turmas">
                    <h3 class="titulo-turmas">${cadaTurmaBuscada.turma}</h3>
                    <p><b>Curso: </b>${cadaTurmaBuscada.curso}</p>
                    <p><b>Início: </b>${cadaTurmaBuscada.inicio}</p>
                    <p><b>Término: </b>${cadaTurmaBuscada.termino}</p>
                    <p><b>Número de alunos: </b>${cadaTurmaBuscada.numAlunos}</p>
                    <p><b>Período: </b>${cadaTurmaBuscada.periodo}</p>
                    <p><b>Concluído: </b>${cadaTurmaBuscada.concluida}</p>
                </div>`)
    }).join("")
    document.getElementById("card-turma").innerHTML = cards
    document.getElementById("input-busca-turma").value = ""
}

const matricular = (nome, curso, turma, nParcelas) => {
    const novoEstudante = {
        ...estudantes,
        estudante: nome,
        curso: curso,
        turma: turma,
        nParcelas: nParcelas
    }
}

const alunoMatriculado = document.getElementById("confirma-matricula");
const botaoMatricular = document.getElementById("botao-matricular")
const btnMatricutar = () => {
    const mNome = document.getElementById("nome-matricula").value
    const mCurso = document.getElementById("curso-matricula").value
    const mTurma = document.getElementById("turma-matricula").value
    const mNParcelas = Number(document.getElementById("number-parcelas-matricula").value)

    if (mNome && mCurso && mTurma && mNParcelas) {
        matricular(mNome, mCurso, mTurma, mNParcelas)
    } else {
        alert("Preencha todos os campos")
    }
    const novaMatricula = {
        ...estudantes,
        estudante: mNome,
        curso: mCurso,
        turma: mTurma,
        nParcelas: mNParcelas
    }
    estudantes.push(novaMatricula)
    alunoMatriculado.innerHTML =
        `<h4 class="titulo-confirmacao"> Aluno matriculado  <img src="./media/verificado.svg"></h4> 
        <ul>
            <li class="aluno"><b>Aluno Matriculado</b></li>
            <li class="aluno"><b>Nome:</b> ${mNome}</li>
            <li class="aluno"><b>Curso:</b> ${mCurso}</li>
            <li class="aluno"><b>Turma:</b> ${mTurma}</li>
        </ul>`
    document.getElementById("nome-matricula").value = ""
    document.getElementById("curso-matricula").value = ""
    document.getElementById("turma-matricula").value = ""
    document.getElementById("number-parcelas-matricula").value = ""
}

const buscarEstudante = () => {
    const inputRelatorio = document.getElementById("relat-aluno").value.toLowerCase()
    let listaRelatorio

    if (inputRelatorio === "") {
        const fLista = document.getElementById("relatorio");
        fLista.innerHTML = "Digite o nome do aluno"
    } else {
        listaRelatorio = estudantes.filter(index => index.estudante.toLowerCase().includes(inputRelatorio.toLowerCase()))
    }
    const fLista = document.getElementById("relatorio");
    if (listaRelatorio.length === 0) {
        fLista.innerHTML = "Aluno não encontrado"

    } else {
        fLista.innerHTML = relatorio(listaRelatorio)
    };
}

const relatorio = (buscador) => {
    return buscador = buscador.map(randon => {
        return (`
            <section id="relatorio">
                    <p><b>Estudante:</b> ${randon.estudante}</p>
                    <p><b>Turma:</b> ${randon.turma}</p>
                    <p><b>Curso:</b> ${randon.curso}</p>
                    <p><b>Valor:</b> ${randon.valor}</p>
                    <p><b>Parcelas:</b> ${randon.nParcelas}</p>
                    <p><b>Valor das parcelas:</b> ${randon.parcelas}</p>           
            </section>`
        )
    }).join(" ")
}





