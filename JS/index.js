

// converter.js

async function convertCurrency() {
    const fromCurrency = document.getElementById("fromCurrency").value.toUpperCase();
    const toCurrency = document.getElementById("toCurrency").value.toUpperCase();
    const amount = parseFloat(document.getElementById("amount").value);
  
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Failed to fetch exchange rate");
  
      const data = await response.json();
      const rate = data.rates[toCurrency];
      
      if (!rate) {
        document.getElementById("result").innerText = `Currency code "${toCurrency}" not found.`;
        return;
      }
  
      const convertedAmount = (amount * rate).toFixed(2);
      document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } catch (error) {
      document.getElementById("result").innerText = `Error: ${error.message}`;
    }
  }
  