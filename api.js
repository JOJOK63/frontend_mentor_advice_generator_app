import { injectData } from "./main";

const apiUrl = 'https://api.adviceslip.com/advice';

export async function fetchData() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    console.log('Données récupérées depuis l\'API:', data);
    
    injectData(data);
  } catch (error) {
    console.error('Erreur de récupération des données:', error);
  }
}
