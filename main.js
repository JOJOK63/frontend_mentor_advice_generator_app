import './style.scss'
import  {fetchData} from './api.js'

const title = document.querySelector('.title-advice');
const advice = document.querySelector('.quote-advice');
const new_advice = document.getElementById('new-advice');

fetchData()
new_advice.addEventListener('click' , () => {
 // Recharge complètement la page en ignorant le cache
location.reload(true);

fetchData();
})


export function injectData(data){
  title.innerHTML = "Advice #"+data.slip.id;
  advice.innerHTML = data.slip.advice;
}
