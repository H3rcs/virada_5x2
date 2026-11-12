# Virada 5x2

Consultoria que leva empresas da escala 6x1 para a 5x2 sem perder performance. Projeto em equipe do Empretec, Feira de Santana, novembro de 2026.

Site: https://h3rcs.github.io/virada_5x2/

| Caminho | Para quê |
|---|---|
| `index.html` | Landing page do projeto |
| `comprar/` | Página de compra do acesso (R$ 30 no lançamento): Pix com QR e copia e cola, cartão e envio do comprovante pelo WhatsApp |
| `app/` | Guia Virada 5x2: compara os caminhos (rodízio, fechar um dia, uma hora a menos, 12x36) e monta o plano. Abre com código de acesso |
| `assets/` | Estilos da landing e da compra, imagens do guia e QR do Pix |
| `plano/plano.pdf` | Plano de negócio pronto para imprimir (A4, 10 páginas) |
| `plano/plano.html` | Fonte editável do PDF |

## Acesso ao guia

1. O cliente paga em `comprar/` e manda o comprovante no WhatsApp.
2. A equipe confere o pagamento e registra a venda no painel de vendas (página privada no Claude), que gera um código `V5X2-XXXX-XXXX`.
3. O cliente abre `app/?codigo=V5X2-XXXX-XXXX` e o guia libera no aparelho dele.

Código de cortesia para a turma do Empretec: `EMPRETEC`, válido até 14/11/2026.

Para ligar o pagamento com cartão, cole o link de pagamento em `LINK_CARTAO`, no fim de `comprar/index.html`. Vazio, o botão pede o link pelo WhatsApp.

Os dados de mercado e da lei têm fonte indicada no plano e no guia. Preços, metas, custos e projeções são premissas da equipe.
