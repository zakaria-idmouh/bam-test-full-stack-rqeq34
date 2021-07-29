// Import stylesheets
import './helpers/style.css';
import * as helper from './helpers/helpers.js';

// IDMOUH Zakaria

function solutionExercice1(N) {
  var res = '1000';
  var verif = 0;
  var compt = 0;
  var x = parseInt(res, 10);
  for (let i = x; i >= 1; i--) {
    res = Array.from(i.toString(10));
    res = res.map(function(x) {
      return parseInt(x, 10);
    });

    if (JSON.stringify(res) === JSON.stringify(res.sort())) {
      verif = 1;
    }
    if (verif === 1) {
      break;
    }
    //  for (let j = res.length - 1; j >= 1; j--) {
    //  if (parseInt(res[j],10) < parseInt(res[j - 1],10))
    //  {
    //  verif++;
    //  break;
    //}
    //}
    //if (verif === 0) {
    //res = i;
    //break;
    //}
  }
  //
  return res.join('');
}

function solutionExercice2(L) {
  var res = [1, 4, 7, 5, 3, 6, 3];
  var verif = 1;
  var sortres = res.sort();
  if (Math.max(...sortres) > verif) {
    for (let i = 1; i <= Math.max(...sortres); i++) {
      if (!sortres.includes(i)) {
        verif = i;
        break;
      }
    }
    if (verif === 1) {
      verif = Math.max(...sortres) + 1;
    }
  }
  return verif;
}
function solutionExercice3(L) {
  var res = [1, 5, 3, 6, 4, 3, 1, 5, 4];
  var sortres = res.sort();
  var duplicates = [];
  var filteredItems = sortres;
  for (let i = 0; i < sortres.length; i++) {
    for (let j = 0; j < sortres.length; j++) {
      if (!(i === j)) {
        if (sortres[i] === sortres[j]) {
          duplicates.push(sortres[i]);
        }
      }
    }
  }
  // const items = ['a', 'b', 'c', 'd', 'e', 'f']
  //const valueToRemove = 'c'
  for (let i = 0; i < duplicates.length; i++) {
    filteredItems = filteredItems.filter(item => item !== duplicates[i]);
  }
  //  for(let k = 0 ; k < duplicates.length ; k++){
  //     sortres.filter(function(ele){
  //         return ele != sortres[k];
  //     });
  // }

  //var sortres=res.sort();
  //var sansres = Array.from(new Set(res));
  //res.forEach(number => {if(number)})
  //res=res.filter(item => {if(res.includes(item){}})
  return Math.min(...filteredItems);
}

helper.displayOnHtml(solutionExercice1(1000), '1');
helper.displayOnHtml(solutionExercice2([1, 4, 7, 5, 3, 6, 3]), '2');
helper.displayOnHtml(solutionExercice3([1, 5, 3, 6, 4, 3, 1, 5, 4]), '3');
