document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('query').value;
    searchSubtitles(query);
});

function searchSubtitles(query) {
    const subclubUrl = `https://www.subclub.eu/search.php?q=${encodeURIComponent(query)}`;
    const opensubtitlesUrl = `https://www.opensubtitles.org/en/search2/sublanguageid-est/moviename-${encodeURIComponent(query)}`;

    fetch(subclubUrl)
        .then(response => response.text())
        .then(data => {
            document.getElementById('results').innerHTML = `<h2>SubClub tulemused:</h2>${data}`;
        });

    fetch(opensubtitlesUrl)
        .then(response => response.text())
        .then(data => {
            document.getElementById('results').innerHTML += `<h2>OpenSubtitles tulemused:</h2>${data}`;
        });
} 
fetch(subclubUrl)
    .then(response => {
        console.log('SubClub response:', response);
        return response.text();
    })
    .then(data => {
        document.getElementById('results').innerHTML = `<h2>SubClub tulemused:</h2>${data}`;
    })
    .catch(error => {
        console.error('Error fetching SubClub data:', error);
    });

fetch(opensubtitlesUrl)
    .then(response => {
        console.log('OpenSubtitles response:', response);
        return response.text();
    })
    .then(data => {
        document.getElementById('results').innerHTML += `<h2>OpenSubtitles tulemused:</h2>${data}`;
    })
    .catch(error => {
        console.error('Error fetching OpenSubtitles data:', error);
    });
