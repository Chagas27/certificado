function gerarCertificado() {
    const nome = document.getElementById("nome").value.trim();
    const curso = document.getElementById("curso").value;
  
    if (!nome) {
      alert("Por favor, digite seu nome.");
      return;
    }
  
    const data = new Date().toLocaleDateString("pt-BR", {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  
    document.getElementById("outNome").textContent = nome;
    document.getElementById("outCurso").textContent =
      `Concluiu com sucesso o curso de ${curso} com carga horária de 3 horas.`;
    document.getElementById("dataHoje").textContent = data;
  }
  
  function baixarPDF() {
    const certificado = document.getElementById("certificado");
  
    html2pdf().from(certificado).set({
      margin: 0,
      filename: 'certificado.pdf',
      html2canvas: { scale: 3 },
      jsPDF: { orientation: 'landscape', format: 'a4' }
    }).save();
  }
  