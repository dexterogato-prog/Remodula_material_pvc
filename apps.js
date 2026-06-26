


document.getElementById('btn-calcular').addEventListener('click', function() {

    

    const tipoMovel = document.getElementById('moveil-tipo').value;

    const larguraAtual = parseFloat(document.getElementById('moveil-largura').value);

    const alturaAtual = parseFloat(document.getElementById('moveil-altura').value);

    const larguraNova = parseFloat(document.getElementById('espaco-largura').value);

    const alturaNova = parseFloat(document.getElementById('espaco-altura').value);

    

    

    const containerResultados = document.getElementById('results-content');



   

    if (!larguraAtual || !alturaAtual || !larguraNova || !alturaNova) {

        containerResultados.innerHTML = `

            <div style="color: #b91c1c; background-color: #fef2f2; padding: 15px; border-radius: 8px; font-weight: 600; text-align: center;">

                <i class="fa-solid fa-triangle-exclamation"></i> Por favor, preencha todos os campos de medidas para prosseguir.

            </div>`;

        return;

    }



    

    const diferencaLargura = larguraAtual - larguraNova;

    const diferencaAltura = alturaAtual - alturaNova;

    

    
    let nomeMovelAmigavel = "";

    let sugeraoReuso = "";

    let precoBase = 0;



    switch(tipoMovel) {

        case 'guardaroupa':

            nomeMovelAmigavel = "Guarda-Roupa / Armário Modular";

            sugestaoReuso = "As placas removidas das laterais podem ser refaturadas como prateleiras internas extras ou nichos organizadores aéreos para sapatos.";

            precoBase = 450; 
            break;

        case 'cozinha':

            nomeMovelAmigavel = "Armário de Cozinha / Balcão";

            sugestaoReuso = "A sobra de tampo de MDF/Granito reduzida pode virar uma bancada de apoio dobrável (estilo americana) para refeições rápidas.";

            precoBase = 350; 

            break;

        case 'painel':

            nomeMovelAmigavel = "Painel Traseiro de TV";

            sugestaoReuso = "O módulo de sobra inferior cortado pode receber pés palito ou metálicos de rosca para se transformar em uma escrivaninha compacta de home office.";

            precoBase = 250; 

            break;

    }



    
    let badgeStatus = "";

    let textoAnalise = "";

    let valorEstimado = 0;



    

    if (diferencaLargura <= 0) {

        badgeStatus = `<span style="background-color: #dcfce7; color: #15803d; padding: 6px 16px; border-radius: 20px; font-weight: bold; font-size: 13px; display: inline-flex; align-items: center; gap: 5px;"><i class="fa-solid fa-circle-check"></i> Encaixe Direto</span>`;

        

        textoAnalise = `

            <p style="margin-bottom: 15px;"><strong>Status do Projeto:</strong> Excelente notícia! A largura do seu <strong>${nomeMovelAmigavel}</strong> (${larguraAtual}cm) já é menor ou igual ao espaço disponível na nova parede (${larguraNova}cm).</p>

            <p style="margin-bottom: 15px;"><strong>Ação Marcenaria:</strong> Não haverá necessidade de cortes estruturais na largura. Recomenda-se apenas a remontagem padrão e checagem de prumo.</p>

        `;

       

        valorEstimado = precoBase * 0.6; 

    } else {

        badgeStatus = `<span style="background-color: #ffedd5; color: #c2410c; padding: 6px 16px; border-radius: 20px; font-weight: bold; font-size: 13px; display: inline-flex; align-items: center; gap: 5px;"><i class="fa-solid fa-scissors"></i> Reajuste Necessário</span>`;

        

        textoAnalise = `

            <p style="margin-bottom: 15px;"><strong>Status do Projeto:</strong> Será necessário reduzir <strong>${diferencaLargura} cm</strong> na largura total do seu móvel para que ele se adapte ao novo ambiente.</p>

            <p style="margin-bottom: 15px;"><strong>Plano de Corte Inteligente:</strong> Recomendamos remover ou encurtar um dos módulos laterais de portas. Isso preserva a integridade simétrica das gavetas centrais.</p>

            <div style="background-color: #ffffff; border-left: 4px solid var(--color-accent); padding: 15px; margin: 15px 0; border-radius: 4px; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">

                <h4 style="color: var(--color-accent); margin-bottom: 5px; font-size: 14px; text-transform: uppercase;"><i class="fa-solid fa-leaf"></i> Aproveitamento de Resíduos (Upcycling):</h4>

                <p style="font-size: 13.5px; color: #475569; margin: 0;">${sugestaoReuso}</p>

            </div>

        `;

       

        valorEstimado = precoBase + (diferencaLargura * 1.5);

    }



   
    let avisoAltura = "";

    if (diferencaAltura > 0) {

        valorEstimado += 120; 
        avisoAltura = `

            <div style="margin-top: 20px; background-color: #fef3c7; border: 1px solid #fde68a; padding: 15px; border-radius: 8px; color: #78350f; font-size: 14px;">

                <i class="fa-solid fa-triangle-exclamation"></i> <strong>Atenção ao Pé-Direito:</strong> O móvel original possui altura de ${alturaAtual}cm, porém o seu novo espaço comporta apenas ${alturaNova}cm. Será crucial serrar o rodapé ou os maleiros superiores em cerca de <strong>${diferencaAltura} cm</strong>. (Taxa de ajuste inclusa no orçamento).

            </div>

        `;

    }



   
    containerResultados.innerHTML = `

        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 15px;">

            <span style="font-weight: 700; color: var(--color-primary); font-size: 15px;">Móvel: ${tipoMovel.toUpperCase()}</span>

            ${badgeStatus}

        </div>

        

        <div style="background: linear-gradient(135deg, #1e293b, #0f172a); color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: var(--box-shadow); text-align: center;">

            <span style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8; display: block; margin-bottom: 5px;">Investimento Médio Estimado</span>

            <strong style="font-size: 32px; color: #22c55e; font-family: sans-serif;">R$ ${valorEstimado.toFixed(2).replace('.', ',')}</strong>

            <p style="font-size: 11px; color: #94a3b8; margin: 8px 0 0 0;"><i class="fa-solid fa-circle-info"></i> Inclui desmontagem, adaptação de cortes ecológicos e remontagem local.</p>

        </div>



        <div style="font-size: 14.5px; color: var(--color-text); line-height: 1.6;">

            ${textoAnalise}

            ${avisoAltura}

        </div>

        <button onclick="window.location.hash = '#doacao'" style="margin-top: 25px; width: 100%; background: none; border: 2px dashed #cbd5e1; color: #64748b; padding: 10px; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 13px; transition: all 0.2s;" onmouseover="this.style.borderColor='var(--color-accent)'; this.style.color='var(--color-accent)'" onmouseout="this.style.borderColor='#cbd5e1'; this.style.color='#64748b'">

            Acha que o orçamento não compensa? Prefiro Doar o Móvel

        </button>

    `;

});







document.getElementById('form-doacao').addEventListener('submit', function(event) {

    event.preventDefault();

    

    const dadosDoador = {

        nome: document.getElementById('doador-nome').value,

        whatsapp: document.getElementById('doador-whatsapp').value,

        cep: document.getElementById('doador-cep').value,

        bairro: document.getElementById('doador-bairro').value,

        rua: document.getElementById('doador-rua').value,

        numero: document.getElementById('doador-numero').value,

        categoriaMovel: document.getElementById('doador-descricao').value

    };



    console.log("Inscrição de Coleta Ecológica recebida com sucesso:", dadosDoador);



    document.getElementById('conteudo-formulario-doacao').style.display = 'none';

    document.getElementById('msg-sucesso-doacao').style.display = 'block';

});