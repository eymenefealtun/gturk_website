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



var lbl_we_started_since = document.getElementById("lbl_we_started_since")
var txt_about = document.getElementById("txt_about")

var lbl_our_goal = document.getElementById("lbl_our_goal")
var txt_our_goal = document.getElementById("txt_our_goal")

var lbl_our_mission = document.getElementById("lbl_our_mission")
var txt_our_mission = document.getElementById("txt_our_mission")


var lbl_our_vision = document.getElementById("lbl_our_vision")
var txt_our_vision = document.getElementById("txt_our_vision")


var lbl_we_started_since = document.getElementById("lbl_we_started_since")
var lbl_we_started_since = document.getElementById("lbl_we_started_since")
var lbl_we_started_since = document.getElementById("lbl_we_started_since")
var lbl_we_started_since = document.getElementById("lbl_we_started_since")
var lbl_we_started_since = document.getElementById("lbl_we_started_since")





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


        lbl_we_started_since.textContent = "2021'de başladık"
        txt_about.textContent = "G-Türk'e hoş geldiniz , Gebze Teknik Üniversitesi'nde bulunan İHA ekibine. Biz, insansız hava aracı (İHA) teknolojisi aracılığıyla havacılık mühendisliğini ilerletmeye tutkulu öğrenciler ve meraklılar topluluğuyuz. Yolculuğumuz, yenilik, işbirliği ve mükemmeliyete olan bağlılığımızla işaretlenmiştir. Farklı bir ekip olarak, yaratıcı çözümlerle başarılı olur ve farklı bakış açılarını değerlendiririz. G-Türk'te, İHA yeteneklerinin sınırlarını zorlamaya ve toplumsal ilerlemeye sorumlu bir şekilde katkıda bulunmaya inanıyoruz. Öğrenci, araştırmacı veya endüstri profesyoneli olmanız fark etmeksizin heyecan verici yolculuğumuza katılın. Birlikte, insansız hava araçlarının olasılıklarını yeniden tanımlayalım ve yeni ufukları keşfedelim. G-Türk ile gökyüzünü deneyimleyin!"


        lbl_our_goal.textContent = "Hedefimiz"
        txt_our_goal.textContent = "G-Türk'te, temel hedefimiz yenilik, araştırma ve işbirliği yoluyla insansız hava aracı (İHA) teknolojisinin sınırlarını zorlamaktır. Alanındaki gelişmelerin ön saflarında olmayı amaçlıyoruz, gerçek dünya problemlerine çözüm getiren çağın ötesinde çözümlerin gelişimine katkıda bulunuyoruz. Taahhütümüz, merak ve yaratıcılık kültürünü beslemek, takım üyelerinin İHA teknolojisinin sürekli değişen manzarasına uyum sağlayabileceği, öğrenebileceği ve katkı sağlayabileceği bir ortamı teşvik etmektir."

        lbl_our_mission.textContent = "Misyonumuz"
        txt_our_mission.textContent = "G-Türk'teki misyonumuz, etkili araştırmalar yaparak, çağdaş teknolojiler geliştirerek ve öğrencilerin havacılık mühendisliğine olan tutkularını keşfetmeleri için bir platform sunarak insansız hava araçları alanını ilerletmektir. Akademi ile endüstri arasındaki boşluğu kapatmayı hedefliyoruz, teorik bilginin pratik uygulamalarla buluştuğu dinamik bir alan oluşturuyoruz. Disiplinler arası işbirliği ve mükemmeliyete olan bağlılık sayesinde, takım üyelerimizi İHA topluluğunda lider olmaya ve dünyaya olumlu bir etki yapmaya teşvik etmeyi amaçlıyoruz."


        lbl_our_vision.textContent = "Vizyonumuz"
        txt_our_vision.textContent = "G-Türk'te, İHA teknolojisinin küresel sorunları ele almak için hayati bir rol oynadığı bir gelecek hayal ediyoruz, çevresel izlemeden felaket müdahalesine kadar. Vizyonumuz, teknolojik başarıların ötesine uzanır; gelecek nesil havacılık mühendislerini ve öncülerini ilham vermeyi amaçlıyoruz. Sürekli öğrenme, etik liderlik ve teknolojik yenilik kültürünü geliştirerek, İHA topluluğunda bir kılavuz olmayı hedefliyoruz, sadece teknolojinin ilerlemesine değil, aynı zamanda dünyada fark yaratmaya kararlı, sorumlu ve ileriye dönük bireylerin gelişimine de katkıda bulunuyoruz."


        asdasdasdasdadas.textContent = "asdasdasdasdasdasdasdasd"
        asdasdasdasdadas.textContent = "asdasdasdasdasdasdasdasd"
        asdasdasdasdadas.textContent = "asdasdasdasdasdasdasdasd"
        asdasdasdasdadas.textContent = "asdasdasdasdasdasdasdasd"
        asdasdasdasdadas.textContent = "asdasdasdasdasdasdasdasd"
        asdasdasdasdadas.textContent = "asdasdasdasdasdasdasdasd"
        asdasdasdasdadas.textContent = "asdasdasdasdasdasdasdasd"
        asdasdasdasdadas.textContent = "asdasdasdasdasdasdasdasd"
        asdasdasdasdadas.textContent = "asdasdasdasdasdasdasdasd"




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


        lbl_we_started_since.textContent = "We Started Since 2021"
        txt_about.textContent = "Welcome to G-Türk, the UAV team at Gebze Technical University. We are a dynamic community of students and enthusiasts passionate about advancing aerospace engineering through unmanned aerial vehicle (UAV) technology. Our journey is marked by a commitment to innovation, collaboration, and excellence. As a diverse team, we thrive on creative solutions and value different perspectives. At G-Türk, we believe in pushing the boundaries of UAV capabilities and contributing responsibly to societal progress. Join us on our exciting journey whether you are a student, researcher, or industry professional. Together, let's explore new frontiers and redefine the possibilities of unmanned aerial vehicles. Experience the skies with G-Türk!"

        lbl_our_goal.textContent = "Our goal"
        txt_our_goal.textContent = "At G-Türk, our primary goal is to push the boundaries of unmanned aerial vehicle (UAV) technology through innovation, research, and collaboration. We strive to be at the forefront of advancements in the field, contributing to the development of cutting-edge solutions that address real-world challenges. Our commitment is to nurture a culture of curiosity and creativity, fostering an environment where team members can thrive, learn, and contribute to the ever-evolving landscape of UAV technology."
        
        
        lbl_our_mission.textContent = "Our mission"
        txt_our_mission.textContent = "Our mission at G-Türk is to advance the field of unmanned aerial vehicles by conducting high-impact research, developing state-of-the-art technologies, and providing a platform for students to explore their passion for aerospace engineering. We aim to bridge  the gap between academia and industry, creating a dynamic space where theoretical knowledge meets practical applications. Through interdisciplinary collaboration and a dedication to excellence, we seek to empower our team members to become leaders in the UAV community and make a positive impact on the world."


        lbl_our_vision.textContent = "Our vision"
        txt_our_vision.textContent = "At G-Türk, we envision a future where UAV technology plays a pivotal role in addressing global challenges, from environmental monitoring to disaster response. Our vision extends beyond technological achievements; we aspire to inspire the next generation of aerospace engineers and pioneers. By fostering a culture of continuous learning, ethical leadership, and technological innovation, we aim to be a beacon in the UAV community, contributing not only to the advancement of technology but also to the development of responsible and forward-thinking individuals who are committed to making a difference in the world."


        asdasdasdasdadas.textContent = "Our vision"
        asdasdasdasdadas.textContent = "asdasdasdasdasdasdasdasd"
        asdasdasdasdadas.textContent = "asdasdasdasdasdasdasdasd"
        asdasdasdasdadas.textContent = "asdasdasdasdasdasdasdasd"
        asdasdasdasdadas.textContent = "asdasdasdasdasdasdasdasd"
        asdasdasdasdadas.textContent = "asdasdasdasdasdasdasdasd"
        asdasdasdasdadas.textContent = "asdasdasdasdasdasdasdasd"
        asdasdasdasdadas.textContent = "asdasdasdasdasdasdasdasd"
        asdasdasdasdadas.textContent = "asdasdasdasdasdasdasdasd"


    }
    else {
        console.log("nothing has happend")
    }







}