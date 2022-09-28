const auth_key = Buffer.from('7b21d750af3d46aeee2c5f7f8e5c5cf3:445484a4df09e1531dd6745bfc8d6483').toString('base64');
const searchBtn = $('#search');
const destSearch = $('#destination');
const nameEl = $('#name');
const photoEl = $('#photo');
const knownFor = $('#known-for');
const budgetEl = $('#budget');
const safetyEl = $('#safety');
const covidEl = $('#covid');
const walkEl = $('#walk-score');
const popEl = $('#population');



searchBtn.on('click', function () {
    displayDestination(destSearch.val());
    console.log('clicked!');
});

function displayDestination(name) {
    var queryURL = {
        'method': 'GET',
        'url': `http://api.roadgoat.com/api/v2/destinations/:id?=${name}`,
        'headers': {
            'Authorization': `Basic ${auth_key}`
        }
    };
    fetch(queryURL).then(function (response) {
        return response.json();
    }).then(function(goatData) {
        console.log(goatData);
    })
};