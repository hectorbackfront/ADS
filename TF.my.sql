CREATE DATABASE faculdade;
USE faculdade;

CREATE TABLE aula (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    idade INT,
    cidade VARCHAR(100),
    profissao VARCHAR(100)
);

INSERT INTO aula (nome, idade, cidade, profissao) VALUES
('Ana Clara', 28, 'São Paulo', 'Cientista de Dados'),
('Carlos Alberto', 42, 'Belo Horizonte', 'Engenheiro de Software'),
('Mariana Oliveira', 30, 'Rio de Janeiro', 'Desenvolvedora Front-end'),
('Lucas Santos', 25, 'São Paulo', 'Analista de Sistemas'),
('Fernanda Pereira', 38, 'Curitiba', 'Gerente de Projetos'),
('Pedro Souza', 33, 'Salvador', 'Analista de Dados');

SELECT * FROM aula;

SELECT * FROM aula WHERE idade > 30;

UPDATE aula
SET profissao = 'Engenheiro de Dados'
WHERE nome = 'Pedro Souza';

DELETE FROM aula
WHERE cidade = 'Belo Horizonte';

CREATE INDEX idx_aula_profissao ON aula(profissao);

SELECT nome, profissao
FROM aula
WHERE idade < 35 AND cidade = 'São Paulo';

SELECT * FROM aula ORDER BY nome ASC;
SELECT * FROM aula ORDER BY idade DESC;
