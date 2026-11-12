/* Virada 5x2 · configuração do site
   hotmart: link do checkout do produto na Hotmart (ex.: https://pay.hotmart.com/XXXXXXXX). Vazio = venda manual por Pix/WhatsApp.
   acesso: código que libera o guia para quem compra pela Hotmart.
   respostas: URL do app da Web do Apps Script que grava as respostas anônimas na planilha. Vazio = não envia. */
window.V5X2 = {
  hotmart: 'https://pay.hotmart.com/C108465078S',
  whats: '5575991019893',
  acesso: 'V5X2-HTMT-8LWE',
  respostas: 'https://script.google.com/macros/s/AKfycbzgY6xu8ktkfmABQxNDv6NyCCb7Au9oJ0JTWill9T_cKBkDPxyr0_bZGTEC0Z9g7sm6/exec'
};
