export async function fetchStockData(ticker) {
    const url = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=${ticker}&region=US`;
  
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
        'x-rapidapi-key': '199b0d59fdmsh608a4ae70e54615p10def6jsn2cb9b39bff1a'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const json = await response.json();
  
      if (!json.prices) {
        throw new Error("No price data returned.");
      }
  
      return json.prices
        .filter(entry => entry.type !== 'DIVIDEND') // Remove dividend entries
        .map(entry => ({
          date: new Date(entry.date * 1000).toISOString().split('T')[0],
          open: entry.open,
          high: entry.high,
          low: entry.low,
          close: entry.close,
          volume: entry.volume
        }));
    } catch (error) {
      console.error("Error fetching stock data:", error);
      return [];
    }
  }
  