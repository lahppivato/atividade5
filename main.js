function determineSeason() {
    const dateInput = document.getElementById("dateInput").value;
    const inputDate = new Date(dateInput);
    const month = inputDate.getMonth() + 1; // Month is 0-indexed

    let season = "";

    if ((month >= 3 && month <= 5) || month === 12) {
      season = "Outono";
    } else if (month >= 6 && month <= 8) {
      season = "Inverno";
    } else if (month >= 9 && month <= 11) {
      season = "Primavera";
    } else {
      season = "Verão";
    }

    const resultElement = document.getElementById("result");
    resultElement.textContent = `A estação do ano para a data inserida é: ${season}`;
  }