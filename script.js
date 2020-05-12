const data_url = 'https://jsonplaceholder.typicode.com/users';


async function getUser(){
        const response = await fetch(data_url);
        const userData = await response.json();

 
        document.getElementById('name1').textContent = userData[0].name;
        document.getElementById('email1').textContent = userData[0].email;
        document.getElementById('website1').textContent = userData[0].website;

        document.getElementById('name2').textContent = userData[1].name;
        document.getElementById('email2').textContent = userData[1].email;
        document.getElementById('website2').textContent = userData[1].website;

        document.getElementById('name3').textContent = userData[2].name;
        document.getElementById('email3').textContent = userData[2].email;
        document.getElementById('website3').textContent = userData[2].website;

        document.getElementById('name4').textContent = userData[3].name;
        document.getElementById('email4').textContent = userData[3].email;
        document.getElementById('website4').textContent = userData[3].website;

        document.getElementById('name5').textContent = userData[4].name;
        document.getElementById('email5').textContent = userData[4].email;
        document.getElementById('website5').textContent = userData[4].website;

        document.getElementById('name6').textContent = userData[5].name;
        document.getElementById('email6').textContent = userData[5].email;
        document.getElementById('website6').textContent = userData[5].website;

        document.getElementById('name7').textContent = userData[6].name;
        document.getElementById('email7').textContent = userData[6].email;
        document.getElementById('website7').textContent = userData[6].website;

        document.getElementById('name8').textContent = userData[7].name;
        document.getElementById('email8').textContent = userData[7].email;
        document.getElementById('website8').textContent = userData[7].website;

        document.getElementById('name9').textContent = userData[8].name;
        document.getElementById('email9').textContent = userData[8].email;
        document.getElementById('website9').textContent = userData[8].website;

        document.getElementById('name10').textContent = userData[9].name;
        document.getElementById('email10').textContent = userData[9].email;
        document.getElementById('website10').textContent = userData[9].website;
}

getUser();