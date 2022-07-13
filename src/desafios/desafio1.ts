// r1
const funcionario = {
  codigo: 10,
  nome: 'João'
};

// r2, tipando o recebimento
const funcionario2: { codigo: number; nome: string } = {
  codigo: 10,
  nome: 'joao'
};

//r3
interface Funcionario {
  codigo: number;
  nome: string;
}

const funcionarioInterface: Funcionario = {
  codigo: 10,
  nome: 'João'
};
