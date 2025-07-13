import re

def parse_philosophy_text(text):
    timeline_data = []
    current_era = None

    # Regex to find eras and their descriptions
    eras_pattern = re.compile(r'### (Era Antiga|Era Medieval|Era Moderna|Filosofia do Oriente Médio|Filosofia oriental)\n\n([^#]+)', re.DOTALL)
    
    # Regex to find philosophers and their dates (e.g., Tales (624 a.C. – 545 a.C.))
    philosopher_pattern = re.compile(r'([A-Z][a-z]+(?: [A-Z][a-z]+)*) \((\d{3,4} a\.C\.? –(?: c\.)? \d{3,4} a\.C\.?|\d{3,4}–\d{3,4}|\d{3,4} - \d{3,4}|\d{3,4} a\.C\.?|\d{3,4} - junho de \d{4}|fl\. entre os séculos [IVXLCDM]+ e [IVXLCDM]+ a\.C\.?)\)')

    # Extract Western Philosophy eras first
    western_philosophy_section = text.split('## Filosofia oriental')[0]
    for match in eras_pattern.finditer(western_philosophy_section):
        era_title = match.group(1)
        era_content = match.group(2)
        current_era = {'title': era_title, 'description': era_content, 'philosophers': []}
        
        for ph_match in philosopher_pattern.finditer(era_content):
            name = ph_match.group(1).strip()
            dates = ph_match.group(2).strip()
            current_era['philosophers'].append({'name': name, 'dates': dates})
        timeline_data.append(current_era)

    # Extract Eastern and Middle Eastern Philosophy
    eastern_philosophy_section = text.split('## Filosofia oriental')
    if len(eastern_philosophy_section) > 1:
        eastern_philosophy_section = eastern_philosophy_section[1]
        eastern_eras_pattern = re.compile(r'### (Filosofia pré-islâmica|Filosofia islâmica|Filosofia indiana|Filosofia budista|Filosofia do Leste Asiático)\n\n([^#]+)', re.DOTALL)
        for match in eastern_eras_pattern.finditer(eastern_philosophy_section):
            era_title = match.group(1)
            era_content = match.group(2)
            current_era = {'title': era_title, 'description': era_content, 'philosophers': []}
            for ph_match in philosopher_pattern.finditer(era_content):
                name = ph_match.group(1).strip()
                dates = ph_match.group(2).strip()
                current_era['philosophers'].append({'name': name, 'dates': dates})
            timeline_data.append(current_era)

    return timeline_data

def format_timeline(data):
    formatted_text = "# Linha do Tempo da Filosofia\n\n"
    for era in data:
        formatted_text += f"## {era['title']}\n\n"
        formatted_text += f"{era['description'].strip()}\n\n"
        if era['philosophers']:
            formatted_text += "### Filósofos Notáveis:\n"
            for ph in era['philosophers']:
                formatted_text += f"- {ph['name']} ({ph['dates']})\n"
            formatted_text += "\n"
    return formatted_text

with open('/home/ubuntu/filosofia_timeline_raw.md', 'r') as f:
    raw_text = f.read()

parsed_data = parse_philosophy_text(raw_text)
formatted_timeline = format_timeline(parsed_data)

with open('/home/ubuntu/filosofia_timeline_structured.md', 'w') as f:
    f.write(formatted_timeline)

print('Timeline estruturada salva em filosofia_timeline_structured.md')


