var languageSelect = document.getElementById('language-select');

languageSelect.addEventListener('change', function () {
    handleLanguage();
});






// nav bar
var lblNavHome = document.getElementById('lblNavHome');
var lblNavAbout = document.getElementById('lblNavAbout');
var lblNavOurGoal = document.getElementById('lblNavOurGoal');
var lblNavOurMission = document.getElementById('lblNavOurMission');
var lblNavOurVision = document.getElementById('lblNavOurVision');
var lblNavOurTeam = document.getElementById('lblNavOurTeam');
var lblNavContact = document.getElementById('lblNavContact');
var lblNavJoinUs = document.getElementById('lblNavJoinUs');
var arrowJoin = document.getElementById('arrowJoin');

//sec two
var txtWelcome = document.getElementById('txtWelcome');
var lblOurStorySecTwo = document.getElementById('lblOurStorySecTwo');
var lblSeeOurProjectsSecTwo = document.getElementById('lblSeeOurProjectsSecTwo');




function handleLanguage() {


    if (languageSelect.value === 'tr') {



        //sec two
        txtWelcome.textContent = "G-Türk'e hoşgeldiniz";
        lblOurStorySecTwo.textContent = "Hikayemiz";
        lblSeeOurProjectsSecTwo.textContent = "Projelerimiz";

        // nav bar
        lblNavHome.textContent = "Ana sayfa"
        lblNavAbout.textContent = "Hakkımızda"
        lblNavOurGoal.textContent = "Hedefimiz"
        lblNavOurMission.textContent = "Misyonumuz"
        lblNavOurVision.textContent = "Vizyonumuz"
        lblNavOurTeam.textContent = "Takımımız"
        lblNavContact.textContent = "İletişim"
        lblNavJoinUs.textContent = "Bize katıl"
        var tag = document.createElement("i");
        tag.className = "bi-arrow-up-right ms-2";
        lblNavJoinUs.appendChild(tag);


    } else if (languageSelect.value === 'en') {



        //sec two
        txtWelcome.textContent = 'welcome to G-Türk';
        lblOurStorySecTwo.textContent = "Our Story";
        lblSeeOurProjectsSecTwo.textContent = "See our projects";

        // nav bar
        lblNavHome.textContent = "Home"
        lblNavAbout.textContent = "About"
        lblNavOurGoal.textContent = "Our goal"
        lblNavOurMission.textContent = "Our mission"
        lblNavOurVision.textContent = "Our vision"
        lblNavOurTeam.textContent = "Our team"
        lblNavContact.textContent = "Contact us"
        lblNavJoinUs.textContent = "Join us"
        var tag = document.createElement("i");
        tag.className = "bi-arrow-up-right ms-2";
        lblNavJoinUs.appendChild(tag);


    }
    else {
        console.log("nothing has happend")
    }







}