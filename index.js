

console.log('Run...');


const nomadUrl = 'https://nomad-lab.eu/prod/rae/api/archive/PACv39BKSFKLtphwxzY-Og/baBkU4yx2wQ1WIQJxuEZhKWq02bS'

fetch(nomadUrl)
        .then(response => response.json() )
        .then(data => {
        	console.log('data', data);
        })
        .catch(error => {
            console.log('error', error);
        });
