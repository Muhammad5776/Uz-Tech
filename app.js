document.getElementById('getText').addEventListener('click', getText)

function getText() {
  fetch('lorem.txt')
  .then(res => res.text())
  .then(data => {
    document.getElementById('output').innerHTML = data;
  });
}