console.log('Run...');

var jsonEditor = ace.edit("json-editor")
jsonEditor.setTheme("ace/theme/github")
jsonEditor.session.setMode("ace/mode/json")
jsonEditor.setReadOnly(true);  // false to make it editable

function fetchNomad() {

  const nomadUrl = 'https://nomad-lab.eu/prod/rae/api/archive/PACv39BKSFKLtphwxzY-Og/baBkU4yx2wQ1WIQJxuEZhKWq02bS'

  fetch(nomadUrl)
    .then(response => response.json() )
    .then(data => {
    // console.log('data', data);
    jsonEditor.setValue(JSON.stringify(data, null, '\t'));
    jsonEditor.clearSelection();
  })
    .catch(error => {
    console.log('error', error);
  });

}

document.querySelector("#btn").addEventListener("click", () => { 
        fetchNomad()
});
