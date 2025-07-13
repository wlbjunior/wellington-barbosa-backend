from flask import Blueprint, jsonify
import json
import os

filosofia_bp = Blueprint('filosofia', __name__)

# Dados da linha do tempo da filosofia
FILOSOFIA_DATA = {
    "title": "Linha do Tempo da Filosofia",
    "description": "Uma jornada através da história do pensamento filosófico mundial",
    "periods": [
        {
            "id": "pre_socraticos",
            "title": "Filósofos Pré-Socráticos",
            "period": "624 a.C. - 470 a.C.",
            "description": "Os primeiros filósofos gregos que buscavam explicações racionais para os fenômenos naturais.",
            "philosophers": [
                {"name": "Tales de Mileto", "dates": "624-545 a.C.", "contribution": "Considerado o primeiro filósofo, propôs que a água era o princípio de todas as coisas."},
                {"name": "Anaximandro", "dates": "610-546 a.C.", "contribution": "Propôs o conceito de ápeiron (o ilimitado) como princípio fundamental."},
                {"name": "Anaxímenes", "dates": "585-528 a.C.", "contribution": "Defendeu que o ar era o elemento primordial."},
                {"name": "Pitágoras", "dates": "570-495 a.C.", "contribution": "Desenvolveu teoremas matemáticos e a ideia de que os números governam o universo."},
                {"name": "Heráclito", "dates": "535-475 a.C.", "contribution": "Famoso pela frase 'Ninguém pode entrar duas vezes no mesmo rio', enfatizando a mudança constante."},
                {"name": "Parmênides", "dates": "515-450 a.C.", "contribution": "Defendeu que o ser é uno, eterno e imutável, opondo-se à ideia de mudança."},
                {"name": "Zenão de Eleia", "dates": "490-430 a.C.", "contribution": "Discípulo de Parmênides, conhecido por seus paradoxos que defendiam a imobilidade."},
                {"name": "Empédocles", "dates": "495-435 a.C.", "contribution": "Propôs os quatro elementos (terra, água, ar, fogo) e as forças de Amor e Ódio."},
                {"name": "Anaxágoras", "dates": "500-428 a.C.", "contribution": "Introduziu o conceito de Nous (Mente) como organizador do universo."},
                {"name": "Demócrito", "dates": "460-370 a.C.", "contribution": "Desenvolveu a teoria atomista, afirmando que tudo é composto por átomos e vazio."}
            ]
        },
        {
            "id": "classica",
            "title": "Filosofia Clássica Grega",
            "period": "470 a.C. - 320 a.C.",
            "description": "O período áureo da filosofia grega com Sócrates, Platão e Aristóteles.",
            "philosophers": [
                {"name": "Sócrates", "dates": "470-399 a.C.", "contribution": "Desenvolveu o método socrático de questionamento e a famosa frase 'Só sei que nada sei'."},
                {"name": "Platão", "dates": "428-348 a.C.", "contribution": "Fundou a Academia e desenvolveu a Teoria das Ideias, influenciando toda a filosofia ocidental."},
                {"name": "Aristóteles", "dates": "384-322 a.C.", "contribution": "Criou a lógica formal, classificou as ciências e fundou o Liceu."},
                {"name": "Diógenes de Sinope", "dates": "412-323 a.C.", "contribution": "Um dos fundadores do cinismo, vivia de forma ascética e criticava as convenções sociais."}
            ]
        },
        {
            "id": "helenistica",
            "title": "Filosofia Helenística",
            "period": "320 a.C. - 500 d.C.",
            "description": "Escolas filosóficas focadas na ética e na busca pela felicidade individual.",
            "philosophers": [
                {"name": "Epicuro", "dates": "341-270 a.C.", "contribution": "Fundou o epicurismo, defendendo o prazer como bem supremo."},
                {"name": "Zenão de Cítio", "dates": "334-262 a.C.", "contribution": "Fundou o estoicismo, filosofia que enfatiza a virtude e a aceitação do destino."},
                {"name": "Sêneca", "dates": "4 a.C.-65 d.C.", "contribution": "Filósofo estoico romano, conselheiro de Nero e autor de cartas morais."},
                {"name": "Marco Aurélio", "dates": "121-180 d.C.", "contribution": "Imperador romano e filósofo estoico, autor de 'Meditações'."},
                {"name": "Plotino", "dates": "204-270 d.C.", "contribution": "Principal figura do neoplatonismo, influenciou o pensamento cristão e islâmico."}
            ]
        },
        {
            "id": "medieval",
            "title": "Filosofia Medieval",
            "period": "500 d.C. - 1500 d.C.",
            "description": "Síntese entre filosofia grega e pensamento religioso cristão, islâmico e judaico.",
            "philosophers": [
                {"name": "Santo Agostinho", "dates": "354-430", "contribution": "Sintetizou filosofia platônica com cristianismo, autor de 'Confissões' e 'A Cidade de Deus'."},
                {"name": "Boécio", "dates": "480-524", "contribution": "Filósofo romano, autor de 'A Consolação da Filosofia', ponte entre a filosofia antiga e medieval."},
                {"name": "João Escoto Erígena", "dates": "810-877", "contribution": "Filósofo irlandês, um dos primeiros pensadores escolásticos."},
                {"name": "Avicena", "dates": "980-1037", "contribution": "Filósofo e médico persa, influente no pensamento islâmico e ocidental."},
                {"name": "Anselmo de Cantuária", "dates": "1033-1109", "contribution": "Criador do argumento ontológico para a existência de Deus."},
                {"name": "Averróis", "dates": "1126-1198", "contribution": "Filósofo islâmico que comentou Aristóteles e influenciou o pensamento medieval."},
                {"name": "Maimônides", "dates": "1135-1204", "contribution": "Filósofo judeu que harmonizou aristotelismo com judaísmo."},
                {"name": "Tomás de Aquino", "dates": "1225-1274", "contribution": "Criou a síntese aristotélico-cristã, desenvolveu as cinco vias para provar a existência de Deus."},
                {"name": "Duns Escoto", "dates": "1266-1308", "contribution": "Filósofo e teólogo franciscano, importante figura da escolástica."},
                {"name": "Guilherme de Ockham", "dates": "1287-1347", "contribution": "Defensor do nominalismo e da navalha de Ockham."}
            ]
        },
        {
            "id": "renascimento",
            "title": "Filosofia do Renascimento",
            "period": "1400 - 1600",
            "description": "Renovação do interesse pela filosofia clássica e desenvolvimento do humanismo.",
            "philosophers": [
                {"name": "Nicolau Maquiavel", "dates": "1469-1527", "contribution": "Autor de 'O Príncipe', separou política de moral e ética."},
                {"name": "Erasmo de Rotterdam", "dates": "1466-1536", "contribution": "Humanista que defendeu a tolerância religiosa e a educação."},
                {"name": "Thomas More", "dates": "1478-1535", "contribution": "Autor de 'Utopia', criticou a sociedade de sua época."},
                {"name": "Michel de Montaigne", "dates": "1533-1592", "contribution": "Criador do gênero ensaio, explorou a subjetividade e o ceticismo."},
                {"name": "Giordano Bruno", "dates": "1548-1600", "contribution": "Defendeu o universo infinito e foi queimado pela Inquisição."}
            ]
        },
        {
            "id": "moderna",
            "title": "Filosofia Moderna",
            "period": "1600 - 1800",
            "description": "Revolução científica e desenvolvimento do racionalismo e empirismo.",
            "philosophers": [
                {"name": "Francis Bacon", "dates": "1561-1626", "contribution": "Defensor do método indutivo e do empirismo científico."},
                {"name": "René Descartes", "dates": "1596-1650", "contribution": "Pai da filosofia moderna, famoso por 'Penso, logo existo' e o método cartesiano."},
                {"name": "Thomas Hobbes", "dates": "1588-1679", "contribution": "Teórico do contrato social e do absolutismo em 'Leviatã'."},
                {"name": "Baruch Spinoza", "dates": "1632-1677", "contribution": "Desenvolveu uma filosofia panteísta e determinista em sua 'Ética'."},
                {"name": "John Locke", "dates": "1632-1704", "contribution": "Empirista inglês, teórico do liberalismo político e da tábula rasa."},
                {"name": "Gottfried Wilhelm Leibniz", "dates": "1646-1716", "contribution": "Desenvolveu o cálculo infinitesimal e a teoria das mônadas."},
                {"name": "George Berkeley", "dates": "1685-1753", "contribution": "Idealista, famoso pela frase 'Ser é ser percebido'."},
                {"name": "David Hume", "dates": "1711-1776", "contribution": "Cético escocês que questionou a causalidade e a indução."},
                {"name": "Jean-Jacques Rousseau", "dates": "1712-1778", "contribution": "Teórico do contrato social e da vontade geral."},
                {"name": "Immanuel Kant", "dates": "1724-1804", "contribution": "Sintetizou racionalismo e empirismo, autor da 'Crítica da Razão Pura'."}
            ]
        },
        {
            "id": "seculo19",
            "title": "Filosofia do Século XIX",
            "period": "1800 - 1900",
            "description": "Idealismo alemão, positivismo, marxismo e existencialismo nascente.",
            "philosophers": [
                {"name": "Johann Gottlieb Fichte", "dates": "1762-1814", "contribution": "Filósofo idealista alemão, sucessor de Kant."},
                {"name": "Friedrich Wilhelm Joseph Schelling", "dates": "1775-1854", "contribution": "Filósofo idealista alemão, desenvolveu a filosofia da natureza."},
                {"name": "Georg Wilhelm Friedrich Hegel", "dates": "1770-1831", "contribution": "Desenvolveu a dialética e o idealismo absoluto."},
                {"name": "Arthur Schopenhauer", "dates": "1788-1860", "contribution": "Filósofo pessimista, autor de 'O Mundo como Vontade e Representação'."},
                {"name": "Auguste Comte", "dates": "1798-1857", "contribution": "Fundador do positivismo e da sociologia."},
                {"name": "John Stuart Mill", "dates": "1806-1873", "contribution": "Defensor do utilitarismo e do liberalismo."},
                {"name": "Søren Kierkegaard", "dates": "1813-1855", "contribution": "Precursor do existencialismo, enfatizou a subjetividade e a angústia."},
                {"name": "Karl Marx", "dates": "1818-1883", "contribution": "Criou o materialismo histórico e a crítica da economia política."},
                {"name": "Friedrich Nietzsche", "dates": "1844-1900", "contribution": "Proclamou a 'morte de Deus' e desenvolveu conceitos como super-homem e eterno retorno."}
            ]
        },
        {
            "id": "seculo20",
            "title": "Filosofia do Século XX",
            "period": "1900 - 2000",
            "description": "Diversificação em múltiplas correntes: analítica, continental, pragmatismo.",
            "philosophers": [
                {"name": "Edmund Husserl", "dates": "1859-1938", "contribution": "Fundador da fenomenologia."},
                {"name": "Bertrand Russell", "dates": "1872-1970", "contribution": "Lógico e filósofo analítico, co-autor dos 'Principia Mathematica'."},
                {"name": "Martin Heidegger", "dates": "1889-1976", "contribution": "Existencialista alemão, autor de 'Ser e Tempo'."},
                {"name": "Ludwig Wittgenstein", "dates": "1889-1951", "contribution": "Revolucionou a filosofia da linguagem com o 'Tractus' e as 'Investigações'."},
                {"name": "Walter Benjamin", "dates": "1892-1940", "contribution": "Filósofo e crítico literário, associado à Escola de Frankfurt."},
                {"name": "Hannah Arendt", "dates": "1906-1975", "contribution": "Teórica política, conhecida por suas análises sobre o totalitarismo."},
                {"name": "Jean-Paul Sartre", "dates": "1905-1980", "contribution": "Existencialista francês, defendeu que 'a existência precede a essência'."},
                {"name": "Simone de Beauvoir", "dates": "1908-1986", "contribution": "Filósofa existencialista e feminista, autora de 'O Segundo Sexo'."},
                {"name": "Albert Camus", "dates": "1913-1960", "contribution": "Filósofo e escritor, explorou o absurdo da condição humana."},
                {"name": "Michel Foucault", "dates": "1926-1984", "contribution": "Filósofo e historiador das ideias, analisou as relações entre poder e conhecimento."},
                {"name": "Jacques Derrida", "dates": "1930-2004", "contribution": "Fundador da desconstrução."},
                {"name": "John Rawls", "dates": "1921-2002", "contribution": "Teórico da justiça, autor de 'Uma Teoria da Justiça'."}
            ]
        },
        {
            "id": "oriental",
            "title": "Filosofia Oriental",
            "period": "1500 a.C. - presente",
            "description": "Tradições filosóficas da Ásia: hinduísmo, budismo, confucionismo, taoísmo.",
            "philosophers": [
                {"name": "Buda (Sidarta Gautama)", "dates": "563-483 a.C.", "contribution": "Fundador do budismo, ensinou as Quatro Nobres Verdades e o Caminho Óctuplo."},
                {"name": "Confúcio", "dates": "551-479 a.C.", "contribution": "Filósofo chinês que enfatizou a ética, moralidade e harmonia social."},
                {"name": "Lao Tzu", "dates": "século VI a.C.", "contribution": "Fundador lendário do taoísmo, autor do 'Tao Te Ching'."},
                {"name": "Chuang Tzu", "dates": "século IV a.C.", "contribution": "Importante figura do taoísmo, conhecido por suas parábolas e histórias."},
                {"name": "Nagarjuna", "dates": "150-250", "contribution": "Filósofo budista que desenvolveu a filosofia do 'caminho do meio'."},
                {"name": "Bodhidharma", "dates": "século V/VI d.C.", "contribution": "Considerado o patriarca do Zen-budismo na China."},
                {"name": "Dōgen Zenji", "dates": "1200-1253", "contribution": "Fundador da escola Sōtō Zen no Japão."}
            ]
        },
        {
            "id": "africana",
            "title": "Filosofia Africana",
            "period": "Século XVIII - presente",
            "description": "Pensamento filosófico desenvolvido no continente africano, abordando temas como identidade, colonialismo e pós-colonialismo.",
            "philosophers": [
                {"name": "Anton Wilhelm Amo", "dates": "1703-c. 1759", "contribution": "Primeiro filósofo africano negro a estudar e lecionar na Europa, criticou o racismo e defendeu a igualdade."},
                {"name": "Frantz Fanon", "dates": "1925-1961", "contribution": "Psiquiatra e filósofo martinicano, suas obras abordam o colonialismo, descolonização e psicopatologia da opressão."},
                {"name": "Paulin J. Hountondji", "dates": "1942-", "contribution": "Filósofo beninense, crítico da etnofilosofia e defensor de uma filosofia africana rigorosa e universal."},
                {"name": "Kwasi Wiredu", "dates": "1931-2022", "contribution": "Filósofo ganense, conhecido por seu trabalho em filosofia intercultural e na descolonização do pensamento africano."}
            ]
        },
        {
            "id": "latino_americana",
            "title": "Filosofia Latino-Americana",
            "period": "Século XIX - presente",
            "description": "Correntes filosóficas que refletem as particularidades históricas, sociais e culturais da América Latina.",
            "philosophers": [
                {"name": "José Martí", "dates": "1853-1895", "contribution": "Pensador cubano, um dos precursores do modernismo e defensor da independência latino-americana."},
                {"name": "José Vasconcelos", "dates": "1882-1959", "contribution": "Filósofo e educador mexicano, propôs a 'raça cósmica' e a importância da educação para a identidade latino-americana."},
                {"name": "Mariano Picón Salas", "dates": "1901-1965", "contribution": "Escritor e pensador venezuelano, suas obras exploram a identidade e a história cultural da América Latina."},
                {"name": "Leopoldo Zea", "dates": "1912-2004", "contribution": "Filósofo mexicano, principal expoente da filosofia da libertação na América Latina."},
                {"name": "Paulo Freire", "dates": "1921-1997", "contribution": "Educador e filósofo brasileiro, criador da pedagogia do oprimido e defensor da educação libertadora."}
            ]
        },
        {
            "id": "brasil",
            "title": "Filosofia no Brasil",
            "period": "Século XVI - presente",
            "description": "O desenvolvimento do pensamento filosófico no Brasil, desde o período colonial até as discussões contemporâneas.",
            "philosophers": [
                {"name": "Tobias Barreto", "dates": "1839-1889", "contribution": "Filósofo e jurista, um dos pioneiros do pensamento filosófico original no Brasil, influenciado pelo positivismo e evolucionismo."},
                {"name": "Sílvio Romero", "dates": "1848-1914", "contribution": "Crítico literário e filósofo, defensor do evolucionismo e da originalidade do pensamento brasileiro."},
                {"name": "Marilena Chauí", "dates": "1941-", "contribution": "Filósofa e professora universitária, conhecida por suas análises sobre a cultura brasileira, política e a obra de Espinosa."},
                {"name": "Djamila Ribeiro", "dates": "1980-", "contribution": "Filósofa e ativista, destaca-se por suas contribuições no feminismo negro e na filosofia africana no Brasil."}
            ]
        }
    ]
}

@filosofia_bp.route('/timeline')
def get_timeline():
    """Retorna os dados completos da linha do tempo da filosofia"""
    return jsonify(FILOSOFIA_DATA)

@filosofia_bp.route('/periods')
def get_periods():
    """Retorna apenas os períodos da linha do tempo"""
    return jsonify([{
        'id': period['id'],
        'title': period['title'],
        'period': period['period'],
        'description': period['description']
    } for period in FILOSOFIA_DATA['periods']])

@filosofia_bp.route('/period/<period_id>')
def get_period(period_id):
    """Retorna detalhes de um período específico"""
    period = next((p for p in FILOSOFIA_DATA['periods'] if p['id'] == period_id), None)
    if period:
        return jsonify(period)
    return jsonify({'error': 'Período não encontrado'}), 404

@filosofia_bp.route('/philosophers')
def get_all_philosophers():
    """Retorna todos os filósofos de todos os períodos"""
    all_philosophers = []
    for period in FILOSOFIA_DATA['periods']:
        for philosopher in period['philosophers']:
            philosopher_data = philosopher.copy()
            philosopher_data['period'] = period['title']
            philosopher_data['period_id'] = period['id']
            all_philosophers.append(philosopher_data)
    return jsonify(all_philosophers)





