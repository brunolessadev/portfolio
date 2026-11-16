"""Generate the three selectable, one-page resumes linked from index.html.

Requires reportlab and pypdf. The source PDFs are never modified.
Usage: python scripts/generate_resumes.py [--font-dir PATH]
"""
from pathlib import Path
import argparse
import json
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, KeepTogether
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
PROFILE = json.loads((ROOT / 'content/profile.json').read_text(encoding='utf-8'))
NAVY = colors.HexColor('#142b3d')
TEAL = colors.HexColor('#006674')
GRAY = colors.HexColor('#425267')


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--font-dir', type=Path, default=Path('C:/Windows/Fonts'))
    args = parser.parse_args()
    for name, filename in [('Resume', 'arial.ttf'), ('ResumeBold', 'arialbd.ttf')]:
        pdfmetrics.registerFont(TTFont(name, str(args.font_dir / filename)))
    pdfmetrics.registerFontFamily('Resume', normal='Resume', bold='ResumeBold')
    styles = {
        'name': ParagraphStyle('Name', fontName='ResumeBold', fontSize=26, leading=29, textColor=NAVY, spaceAfter=5),
        'role': ParagraphStyle('Role', fontName='ResumeBold', fontSize=10.8, leading=15, textColor=TEAL, spaceAfter=7),
        'contact': ParagraphStyle('Contact', fontName='Resume', fontSize=8.8, leading=12, textColor=GRAY),
        'body': ParagraphStyle('Body', fontName='Resume', fontSize=10, leading=13.7, textColor=NAVY, spaceAfter=3),
        'heading': ParagraphStyle('Heading', fontName='ResumeBold', fontSize=10.3, leading=14, textColor=TEAL, spaceBefore=12, spaceAfter=4, keepWithNext=True),
        'title': ParagraphStyle('Title', fontName='ResumeBold', fontSize=10, leading=14, textColor=NAVY, spaceBefore=5, spaceAfter=2, keepWithNext=True),
        'link': ParagraphStyle('Link', fontName='Resume', fontSize=8.6, leading=12, textColor=TEAL, spaceAfter=3),
        'bullet': ParagraphStyle('Bullet', fontName='Resume', fontSize=10, leading=13.7, textColor=NAVY, leftIndent=10, firstLineIndent=-8, spaceAfter=2),
    }

    def para(text, style='body'):
        return Paragraph(text, styles[style])

    def link(url, label):
        return '<a href="' + escape(url, {'"': '&quot;'}) + '" color="#006674">' + escape(label) + '</a>'

    def section(title):
        return [para(title.upper(), 'heading'), HRFlowable(width='100%', thickness=.45, color=colors.HexColor('#b8c9d3'), spaceAfter=5)]

    media = [
        para('MediaDashboard | Aplicação desktop em Java', 'title'),
        para('Java 17, JavaFX, Maven e Gson. Organização de uma biblioteca local de mídias.'),
        para('- Navegação por categorias e pastas, favoritos e acompanhamento de episódios assistidos.', 'bullet'),
        para('- Persistência de preferências em JSON, tratamento de eventos e temas em JavaFX.', 'bullet'),
        para(link(PROFILE['github'] + '/MediaDashboard', 'github.com/brunolessadev/MediaDashboard'), 'link'),
    ]
    lion = [
        para('Lion Sin of Pride | Interface web', 'title'),
        para('Website temático desenvolvido com React, TypeScript e Vite, com publicação no Cloudflare Pages.'),
        para('- Evolução de HTML/CSS para uma aplicação com componentes e páginas organizadas em React.', 'bullet'),
        para(link('https://lionsinofpride.pages.dev/', 'Demonstração') + ' | ' + link(PROFILE['github'] + '/lion-sin-of-pride-v2', 'Código no GitHub'), 'link'),
    ]
    portfolio = [
        para('Portfólio pessoal | HTML, CSS e JavaScript', 'title'),
        para('- Layout responsivo, navegação por seções e apresentação de projetos. Publicação no GitHub Pages.', 'bullet'),
        para(link(PROFILE['portfolio'], 'brunolessadev.github.io/portfolio'), 'link'),
    ]
    variants = {
        'java': {
            'role': 'DESENVOLVIMENTO JAVA | ESTÁGIO E JÚNIOR',
            'summary': 'Estudante de Engenharia de Software e graduado em Administração, com prática em Java e programação orientada a objetos. Desenvolvi o MediaDashboard com JavaFX, Maven e persistência em JSON. Busco uma oportunidade de estágio ou desenvolvimento Java júnior; atualmente aprofundo meus estudos em Spring Boot.',
            'skills': [
                '<b>Java:</b> POO, coleções, tratamento de exceções, JavaFX, Maven e Gson.',
                '<b>Ferramentas e web:</b> Git, GitHub, IntelliJ IDEA, JavaScript, HTML, CSS e React.',
                '<b>Em estudo:</b> Spring Boot e APIs REST. SQL e MySQL em nível básico.',
            ],
            'projects': media + lion,
            'experience': [
                'Atendimento ao cliente e apoio às rotinas administrativas e operacionais.',
                'Organização de documentos, registros internos e controle de estoque.',
            ],
        },
        'front-end': {
            'role': 'DESENVOLVIMENTO FRONT-END | ESTÁGIO E JÚNIOR',
            'summary': 'Estudante de Engenharia de Software e graduado em Administração. Desenvolvo interfaces web com React, TypeScript, JavaScript, HTML e CSS em projetos pessoais. Busco uma oportunidade de estágio ou front-end júnior para contribuir com a construção de interfaces responsivas e evoluir na organização de aplicações web.',
            'skills': [
                '<b>Interfaces:</b> React, React Router, TypeScript, JavaScript, HTML5 e CSS3.',
                '<b>Layout:</b> Flexbox, CSS Grid, responsividade e fundamentos de UI/UX.',
                '<b>Ferramentas:</b> Git, GitHub, Vite, npm, VS Code, GitHub Pages e Cloudflare Pages.',
                '<b>Conhecimentos complementares:</b> Java, POO e consumo de APIs REST.',
            ],
            'projects': lion + portfolio + [para('MediaDashboard | Java e JavaFX', 'title'), para('Aplicação desktop com interface gráfica, organização de mídias e persistência em JSON.'), para(link(PROFILE['github'] + '/MediaDashboard', 'Código no GitHub'), 'link')],
            'experience': [
                'Atendimento ao cliente, organização de documentos e apoio às rotinas operacionais.',
                'Controle de estoque e acompanhamento de demandas, com atenção aos detalhes.',
            ],
        },
        'assistente-ti': {
            'role': 'ASSISTENTE DE TI | TECNOLOGIA E PROCESSOS',
            'summary': 'Graduado em Administração e estudante de Engenharia de Software, com experiência em atendimento, organização documental e rotinas operacionais. Possuo prática em programação por meio de projetos pessoais e uso ferramentas de IA como apoio à análise de informações. Busco atuar como Assistente de TI, apoiando demandas tecnológicas e a melhoria de processos.',
            'skills': [
                '<b>Programação e dados:</b> Java, JavaScript, POO, JSON e consumo de APIs REST.',
                '<b>Ferramentas:</b> Git, GitHub, Maven, IntelliJ IDEA e VS Code. SQL e MySQL básicos.',
                '<b>IA aplicada:</b> ChatGPT, Gemini, Claude e Ollama como apoio a estudos, scripts e análise de documentos.',
                '<b>Processos:</b> Atendimento, organização documental, registros e controle de estoque.',
            ],
            'projects': media + [para('Projetos web | React, HTML, CSS e JavaScript', 'title'), para('Interfaces responsivas para o Lion Sin of Pride e o portfólio pessoal, com publicação na web.'), para(link('https://lionsinofpride.pages.dev/', 'Lion Sin of Pride') + ' | ' + link(PROFILE['portfolio'], 'Portfólio'), 'link')],
            'experience': [
                'Atendimento ao cliente e suporte às rotinas administrativas e operacionais.',
                'Organização de documentos e registros internos, controle de estoque e materiais.',
                'Acompanhamento de demandas e colaboração na resolução de problemas operacionais.',
            ],
        },
    }

    output = ROOT / 'curriculos'
    output.mkdir(exist_ok=True)
    for slug, variant in variants.items():
        story = [para(PROFILE['name'].upper(), 'name'), para(variant['role'], 'role')]
        story += [para(escape(PROFILE['location']) + ' | ' + escape(PROFILE['phone']) + ' | ' + link('mailto:' + PROFILE['email'], PROFILE['email']), 'contact')]
        story += [para(link(PROFILE['github'], 'GitHub: brunolessadev') + ' | ' + link(PROFILE['linkedin'], 'LinkedIn: bruno-lessa-5059a423a') + ' | ' + link(PROFILE['portfolio'], 'Portfólio'), 'contact')]
        story += [para('Disponibilidade: ' + escape(PROFILE['availability']), 'contact'), Spacer(1, 8), HRFlowable(width='100%', thickness=1.4, color=TEAL)]
        story += section('Perfil profissional') + [para(variant['summary'])]
        story += section('Conhecimentos') + [para(item) for item in variant['skills']]
        story += section('Projetos pessoais') + variant['projects']
        story += section('Experiência profissional')
        story += [para('Auxiliar Administrativo | Clube e Escola de Tiro Set Safari', 'title'), para('Novembro/2023 - Novembro/2025', 'contact')]
        story += [para('- ' + item, 'bullet') for item in variant['experience']]
        story += section('Formação acadêmica')
        story += [para('<b>Engenharia de Software</b> | ' + PROFILE['software_engineering_institution']), para(PROFILE['software_engineering_period'] + ' | Em andamento', 'contact')]
        administration = PROFILE['administration_period'] or 'Concluído'
        story += [para('<b>Administração</b> | ' + PROFILE['administration_institution'] + ' | ' + administration)]
        story += section('Cursos e idiomas')
        story += [para('<b>Java Programming I e II</b> - Universidade de Helsinque (MOOC.fi), concluídos em 2026.'), para('<b>Spring Boot</b> - Guia Completo e Atualizado do Zero ao Deploy na AWS, em andamento.'), para('<b>Inglês:</b> ' + PROFILE['english'] + '. <b>Português:</b> nativo.')]

        filename = output / ('bruno-lessa-' + slug + '.pdf')
        doc = SimpleDocTemplate(str(filename), pagesize=A4, leftMargin=42, rightMargin=42, topMargin=33, bottomMargin=28, title=PROFILE['name'] + ' - ' + variant['role'], author=PROFILE['name'], subject='Currículo profissional', pageCompression=1)
        doc.build(story)
        reader = PdfReader(filename)
        assert len(reader.pages) == 1, f'{filename.name}: expected one page, got {len(reader.pages)}'
        text = reader.pages[0].extract_text()
        assert 'Bruno'.upper() in text and 'FORMAÇÃO ACADÊMICA' in text and 'Português' in text
        assert '\ufffd' not in text
        print(f'{filename.name}: {len(reader.pages)} page, {filename.stat().st_size} bytes, {len(text)} text characters')


if __name__ == '__main__':
    main()
