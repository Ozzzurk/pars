// https://jsonplaceholder.typicode.com/posts
const content = document.getElementById('root');
const labelInfo = document.createElement('p');
labelInfo.style.cssText = `
font-size: 25px;
text-align: center;
`;

content.after(labelInfo);

const labelResult = document.createElement('p');
labelResult.style.cssText = `
font-size: 25px;
color: rgb(231, 231, 0);        
`;

labelResult.innerText = `Результат`;
labelInfo.after(labelResult);

let mainForm = document.forms.main;
let mainFormInput = mainForm.nameInput;

const button = document.querySelector('.button');

button.onclick = function () {
  testURL = mainFormInput.value;
  async function getResponse() {
    try {
      const response = await fetch(testURL);
      const responseJson = await response.json();
      const spliceResponseJSON = responseJson.splice(0, 10);
      const side = document.createElement('div');
      side.style.cssText = `
      font-size: 40px;
        `;

      for (key in spliceResponseJSON) {
        side.textContent += spliceResponseJSON[key].title + '\n';
        labelResult.after(side);
      }
      sideInnerText = side.innerText;
      side.outerHTML = sideInnerText.replaceAll(
        /(?:\s\w+l{2}\w+\s){1,}/gi,
        `<span style="color:red;font-size:40px;>$&</span>`
      );

      
    } catch (e) {
      console.error(e);
    } finally {
      return;
    }
  }

  getResponse();
};
