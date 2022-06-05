// Input data
const form = document.getElementById("referenceform");
var TitleInput = document.getElementById("TitleInput");
var DateInput = document.getElementById("DateInput");
var AuthorInput = document.getElementById("AuthorInput");
var URLInput = document.getElementById("URLInput");
var referencelist = document.querySelector("#referencelist > ul");
const button = document.querySelector("#referenceform > button");
// button settings
button.addEventListener("click", function(event) {
    event.preventDefault();
    let Title = TitleInput.value;
    let Date = DateInput.value;
    let Author = AuthorInput.value;
    let URL = URLInput.value;
    if (Title) {
        addreferencelist(Title, Date, Author, URL);
    }
})

// creat tasklist array
var addreferenceArray = [];

function addreferencelist(Titlename, Date, Author, URL) {
    let Title = {
        Titlename,
        Date, 
        Author, 
        URL,
    };
    addreferenceArray.push(Title);
    console.log(addreferenceArray);
    ScreenReference(Title);
}
// task list into html
function ScreenReference(Title) {
    let item = document.createElement("p");
    item.innerHTML = "<h2>" + Title.Titlename + "</h2>"+"<p>"+"Year:"+Title.Date+"</br>"+"Author:"+Title.Author+"</br>"+"URL:"+Title.URL+"</br>"+"Reference(APA6):"+Title.Author+". ("+ Title.Date+"). "+Title.Titlename+". Retrieved from "+Title.URL+"</p>";

    referencelist.appendChild(item);
// set a Delete button
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Delete");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton);
    delButton.addEventListener("click", function(event) {
        event.preventDefault();
        item.remove();
    })
// reset input form
    form.reset();
}