const results = document.querySelector('.results'); // get results div from html

let query = JSON.parse(sessionStorage.getItem("rappers")) //get the rappers you saves ex: kanye info

const url = `https://public.opendatasoft.com/api/records/1.0/search/?dataset=rapworld&q=${query}`; // api url



fetch(url)
    .then((response) => response.json()) // get json
    .then((data) => {
        console.log(data.records);
        //age
        //name
        //location
        //categorie
        //summary

        // location.assign("./rapper.html")

        results.innerText = ""; //make results div empty


        const { records } = data;
        if (records.length !== 0) {
            records.forEach((uno) => {
                console.log(uno)
                //div for elements 
                let div = document.createElement('div');
                //Name of artist 
                let name = document.createElement('h2')
                name.innerText = uno.fields.name;
                //birth costumization
                let birth = document.createElement('p')
                birth.setAttribute('id', 'born')
                birth.innerText = uno.fields.location_city;
                //Discription of there life 
                let bio = document.createElement('p')
                bio.setAttribute('id', 'life')
                bio = uno.fields.bio_summary;
                //hood thwy from
                let hood = document.createElement('p');
                hood.setAttribute('id', 'from')
                hood = uno.fields.location_neighborhood;

                div.append(name, bio, hood, birth);
                results.append(div)

            })
        } else {
            results.innerText = "No Matches Found :("
        }


    });



