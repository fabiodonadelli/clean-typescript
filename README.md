Objetivo:
 - Cadastro de cliente  
 - Cadastro de enderecos, obrigatorio um principal
 - O sistema devera possuir sistema de login

#entidade clientes
- Caracteristicas:
  id: string,
  nome: string,
  cpf: string,
  rg?: string,
  email: string ,
  telefone: string,
  data_nascimento: date,
  criado_em: datetime,
  alterado_em: datetime,
  deletado_em: datetime

- Comportamentos
    validar cpf: valido
    validar email: valido
    valida rg - minimo: 7 - valido
    remover um cliente
    recuperar um cliente
    
    Criar um cliente
        salvar cliente com cpf e email validos, o cliente deve ser unico, se informar 
        o rg deve ser valido, deve possuir um nome

    Editar um cliente
        editar um cliente com cpf e email validos,  se informar 
        o rg deve ser valido, deve possuir um nome

    Remover um cliente
        editar deletado_em com a data atual

    Recuperar um cliente
        buscar um ou mais usuarios
