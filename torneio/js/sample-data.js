export const sampleSettings = {
    tournamentName: 'NEAIST Championship 2026',
    subtitle: 'Torneio comunitario organizado pelo NEAIST',
    description: 'Equipas, calendario, resultados e classificacao atualizados para participantes e espectadores.',
    venue: 'Instituto Superior Tecnico',
    startDate: '2026-07-01',
    endDate: '2026-07-10',
    contactEmail: 'neaist.sa@aeist.pt',
    lastUpdated: '2026-06-22'
};

export const sampleTeams = [
    { id: 'a1', group: 'Grupo A', name: 'Ubuntu FC', shortName: 'UBU', logoUrl: '', captain: 'Capitao Ubuntu', active: true },
    { id: 'a2', group: 'Grupo A', name: 'Técnico Stars', shortName: 'TST', logoUrl: '', captain: 'Capitao Stars', active: true },
    { id: 'a3', group: 'Grupo A', name: 'Baobab United', shortName: 'BAO', logoUrl: '', captain: 'Capitao Baobab', active: true },
    { id: 'b1', group: 'Grupo B', name: 'Lisboa Lions', shortName: 'LIO', logoUrl: '', captain: 'Capitao Lions', active: true },
    { id: 'b2', group: 'Grupo B', name: 'Kizomba City', shortName: 'KIZ', logoUrl: '', captain: 'Capitao Kizomba', active: true },
    { id: 'b3', group: 'Grupo B', name: 'Maputo XI', shortName: 'MAP', logoUrl: '', captain: 'Capitao Maputo', active: true }
];

export const sampleMatches = [
    { id: 'm1', group: 'Grupo A', round: 'Jornada 1', date: '2026-07-01', time: '16:00', venue: 'Campo 1', homeTeamId: 'a1', awayTeamId: 'a2', homeScore: 2, awayScore: 1, status: 'finished', notes: 'Jogo inaugural.' },
    { id: 'm2', group: 'Grupo A', round: 'Jornada 1', date: '2026-07-01', time: '17:00', venue: 'Campo 1', homeTeamId: 'a3', awayTeamId: 'a1', homeScore: null, awayScore: null, status: 'scheduled', notes: '' },
    { id: 'm3', group: 'Grupo A', round: 'Jornada 2', date: '2026-07-03', time: '18:00', venue: 'Campo 2', homeTeamId: 'a2', awayTeamId: 'a3', homeScore: null, awayScore: null, status: 'scheduled', notes: '' },
    { id: 'm4', group: 'Grupo B', round: 'Jornada 1', date: '2026-07-02', time: '16:30', venue: 'Campo 1', homeTeamId: 'b1', awayTeamId: 'b2', homeScore: 0, awayScore: 0, status: 'finished', notes: '' },
    { id: 'm5', group: 'Grupo B', round: 'Jornada 1', date: '2026-07-02', time: '17:30', venue: 'Campo 1', homeTeamId: 'b3', awayTeamId: 'b1', homeScore: null, awayScore: null, status: 'live', notes: 'Resultado em atualizacao.' },
    { id: 'm6', group: 'Grupo B', round: 'Jornada 2', date: '2026-07-04', time: '18:30', venue: 'Campo 2', homeTeamId: 'b2', awayTeamId: 'b3', homeScore: null, awayScore: null, status: 'postponed', notes: 'Nova data a confirmar.' }
];

export const sampleAnnouncements = [
    { id: 'n1', title: 'Calendario inicial publicado', body: 'Consulta os jogos da fase de grupos e confirma os horarios com a tua equipa.', date: '2026-06-22', pinned: true, active: true },
    { id: 'n2', title: 'Regras de classificacao', body: 'A classificacao e ordenada por pontos, diferenca de golos, golos marcados, vitorias e nome da equipa.', date: '2026-06-22', pinned: false, active: true }
];

export const sampleRules = [
    { id: 'r1', title: 'Participacao', body: 'Cada equipa deve apresentar-se antes da hora marcada e respeitar as indicacoes da organizacao.', sortOrder: 1, active: true },
    { id: 'r2', title: 'Pontuacao', body: 'Vitoria vale 3 pontos, empate vale 1 ponto e derrota vale 0 pontos.', sortOrder: 2, active: true },
    { id: 'r3', title: 'Desempates', body: 'Os criterios sao pontos, diferenca de golos, golos marcados, vitorias e nome da equipa. Casos excecionais sao decididos pela organizacao.', sortOrder: 3, active: true },
    { id: 'r4', title: 'Fair play', body: 'Comportamentos antidesportivos podem levar a advertencia, exclusao do jogo ou exclusao do torneio.', sortOrder: 4, active: true }
];
