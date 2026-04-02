-- 1
SELECT nome_paciente, telefone_paciente
FROM Paciente
ORDER BY nome_paciente ASC;

-- 2
SELECT SUM(valor_consulta) AS faturamento_total
FROM Consulta;

-- 3
SELECT 
    p.nome_paciente AS paciente,
    m.nome_medico AS medico,
    c.hora_consulta
FROM Consulta c
JOIN Paciente p ON c.fk_cpf_paciente = p.cpf_paciente
JOIN Medico m ON c.fk_crm_medico = m.crm_medico;

-- 4
SELECT p.nome_paciente
FROM Paciente p
LEFT JOIN Consulta c ON p.cpf_paciente = c.fk_cpf_paciente
WHERE c.id_consulta IS NULL;

-- 5
SELECT 
    m.especialidade_medico,
    COUNT(*) AS total_consultas
FROM Consulta c
JOIN Medico m ON c.fk_crm_medico = m.crm_medico
GROUP BY m.especialidade_medico
ORDER BY total_consultas DESC
LIMIT 1;
