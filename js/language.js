var languageSelect = document.getElementById('language-select');

languageSelect.addEventListener('change', function () {
    handleLanguage();
});





var txtWelcome = document.getElementById('txtWelcome');

// nav bar
var lblNavHome = document.getElementById('lblNavHome');
var lblNavAbout = document.getElementById('lblNavAbout');
var lblNavOurGoal = document.getElementById('lblNavOurGoal');
var lblNavOurMission = document.getElementById('lblNavOurMission');
var lblNavOurVision = document.getElementById('lblNavOurVision');
var lblNavOurTeam = document.getElementById('lblNavOurTeam');
var lblNavContact = document.getElementById('lblNavContact');
var lblNavJoinUs = document.getElementById('lblNavJoinUs');
var arrowJoin =  document.getElementById('arrowJoin');




function handleLanguage() {


    if (languageSelect.value === 'tr') {




        txtWelcome.textContent = "G-Türk'e hoşgeldiniz";

        // nav bar
        lblNavHome.textContent = "Giriş"
        lblNavAbout.textContent = "Hakkımızda"
        lblNavOurGoal.textContent = "Hedefimiz"
        lblNavOurMission.textContent = "Misyonumuz"
        lblNavOurVision.textContent = "Vizyonumuz"
        lblNavOurTeam.textContent = "Takımımız"
        lblNavContact.textContent = "İletişim"
        lblNavJoinUs.textContent = "Bize katıl"
        var tag = document.createElement("i");
        tag.className ="bi-arrow-up-right ms-2";
        lblNavJoinUs.appendChild(tag);


    } else if (languageSelect.value === 'en') {


        
        txtWelcome.textContent = 'welcome to G-Türk';

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
        tag.className ="bi-arrow-up-right ms-2";
        lblNavJoinUs.appendChild(tag);
      

    }
    else {
        console.log("nothing has happend")
    }







}