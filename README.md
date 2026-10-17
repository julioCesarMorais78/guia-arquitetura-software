# Guia Web de Arquitetura de Software

Site da atividade **"Guia Web de Arquitetura de Software"** da UC **Gestão de Projetos** (GP_ADSIST_301_251T01), curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas, Faculdade de Tecnologia SENAI Félix Guisard (Taubaté/SP), 2026.

O site explica três conceitos de arquitetura de software, publicados em martinfowler.com, e mostra como cada um afeta a gestão de um projeto em **prazo, custo, equipe e riscos**.

## Integrantes

| Nome | RA |
|---|---|
| Julio César Santos de Morais | 25172737 |
| Hugo Otávio dos Santos de Paula | 25172710 |

As fotos dos integrantes ficam na pasta `fotos/` (`integrante1.jpg` e `integrante2.jpg`).

## Posts escolhidos

| Eixo | Post | Página do site |
|---|---|---|
| 1 – Microsserviços | [Monolith First](https://martinfowler.com/bliki/MonolithFirst.html) – Martin Fowler | `monolith-first.html` |
| 2 – Fronteiras e evolução | [Patterns of Legacy Displacement](https://martinfowler.com/articles/patterns-legacy-displacement/) – Ian Cartwright, Rob Horn, James Lewis | `legacy-displacement.html` |
| 3 – Camadas e execução | [Presentation Domain Data Layering](https://martinfowler.com/bliki/PresentationDomainDataLayering.html) – Martin Fowler | `layering.html` |

Cada página contém: (1) resumo da ideia central com as palavras da equipe, (2) vantagens e desvantagens, (3) impacto na gestão do projeto (prazo, custo, equipe e riscos) e (4) link para o post original.

## Declaração de uso de Inteligência Artificial

**Este projeto foi desenvolvido com apoio de Inteligência Artificial.**

- **Ferramenta:** Claude (Anthropic).
- **Uso:** leitura dos três posts originais, redação dos resumos, vantagens/desvantagens e análises de impacto na gestão, tradução para o inglês, criação dos diagramas em SVG e geração do código HTML, CSS e JavaScript.
- **Revisão da equipe:** todo o conteúdo foi conferido pela equipe com os posts originais para garantir que as explicações estão corretas e fiéis aos textos. As análises de impacto na gestão são interpretações da equipe a partir dos posts.
- Os diagramas são criações próprias, inspiradas nos conceitos dos posts; nenhuma imagem ou trecho extenso dos originais foi copiado.

## Recursos do site

- Página inicial com os integrantes, links para as 3 páginas e uma matriz comparativa de impacto na gestão.
- Opção de idioma **Português / Inglês** (botão PT/EN no topo; a escolha fica salva no navegador).
- Diagramas próprios em SVG, ícones e layout responsivo (celular e desktop), com modo escuro automático.
- Sem dependências: HTML, CSS e JavaScript puros (apenas fontes do Google Fonts).

## Estrutura

```
index.html                 página inicial
monolith-first.html        Eixo 1
legacy-displacement.html   Eixo 2
layering.html              Eixo 3
css/style.css              estilos
js/script.js               troca de idioma PT/EN
fotos/integrante1.jpg      foto do integrante 1
fotos/integrante2.jpg      foto do integrante 2
README.md                  este arquivo
```

## Como publicar no GitHub Pages (cada integrante)

1. Criar um repositório **público** no GitHub (ex.: `guia-arquitetura`).
2. Enviar todos os arquivos desta pasta (incluindo a pasta `fotos/`), mantendo o `index.html` na raiz.
3. Em **Settings → Pages**, em *Build and deployment*, escolher **Deploy from a branch**, branch `main` e pasta `/ (root)`, e salvar.
4. Aguardar alguns minutos e acessar `https://<seu-usuario>.github.io/guia-arquitetura/`.
5. Testar os links das 3 páginas, o botão PT/EN e os links para os posts originais.
6. Postar o link no SENAI EAD (todos os integrantes devem postar).

## Créditos

Os textos originais pertencem aos seus autores e estão disponíveis em [martinfowler.com](https://martinfowler.com).
