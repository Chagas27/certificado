function gerarCertificado() {
    const nome = document.getElementById('nome').value;
    const curso = document.getElementById('curso').value;
    const dataHoje = new Date().toLocaleDateString('pt-BR');

    if (!nome || !curso) {
      alert("Preencha todos os campos.");
      return;
    }

    document.getElementById('outNome').innerText = nome;
    document.getElementById('outCurso').innerText = `Concluiu com sucesso o curso de ${curso} com carga horária de 3 horas.`;
    document.getElementById('dataHoje').innerText = dataHoje;
    document.getElementById('certificado').style.display = 'block';
  }

  function baixarPDF() {
    const certificado = document.getElementById('certificado');
    html2pdf().from(certificado).save();
  }