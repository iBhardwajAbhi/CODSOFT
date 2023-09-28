function clickHandler(key) {
  let output = document.getElementById('output');
  if (output.innerText === 'ERROR') output.innerText = '';
  if (key === 'AC') output.innerText = '';
  else if (key === '=')
    try {
      output.innerText = eval(output.innerText);
    } catch (error) {
      output.innerText = 'ERROR';
    }
  else output.innerText += key;
}
