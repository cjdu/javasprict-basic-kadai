const date = () => {
const today = new Date ('June 6, 2024');
const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();

console.log(today.getFullYear() + '年' + month + '月' + day + '日'); 
}

date();
