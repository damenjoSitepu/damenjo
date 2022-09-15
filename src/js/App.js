// Unfortunetely, This Code Was Really-Really Messed Out. 
// Im Sorry, But I Will Make This Code Clean Immediately

const skillInfo = [
    {
        info: `<div class="effect-description-content-creator effect-description-content-creator-open">
    <img class="effect-description-content-creator-image-open" width="100" src="../src/skill-icons/laravel.svg" alt="">
</div>
<p class="effect-description-content-p-open"><b>Laravel</b> is a free and open-source PHP web framework, created by <b>Taylor Otwell</b> and
    intended
    for
    the development of web applications following the <b>model–view–controller</b> architectural
    pattern
    and based on Symfony.</p>`,
        src: `../src/skill-icons/laravel.svg`
    }, {
        info: `     <div class="effect-description-content-creator effect-description-content-creator-open">
        <img class="effect-description-content-creator-image-open" width="100" src="../src/skill-icons/codeigniter.svg" alt="">
    </div>
    <p class="effect-description-content-p-open"><b>CodeIgniter</b> is an open-source software rapid development <b>web framework</b>, for use in
        building <b>dynamic</b> web sites with PHP.</p>`,
        src: `../src/skill-icons/codeigniter.svg`
    }, {
        info: `<div class="effect-description-content-creator effect-description-content-creator-open">
        <img class="effect-description-content-creator-image-open" width="100" src="../src/skill-icons/php.svg"
            alt="">
    </div>
    <p class="effect-description-content-p-open"> <b>PHP</b> is a general-purpose scripting language geared
        toward <b>web
            development</b>. It was originally created by Danish-Canadian programmer <b>Rasmus Lerdorf</b> in
        1994. The
        PHP
        reference implementation is now produced by The PHP Group.</p>`,
        src: `../src/skill-icons/php.svg`
    }, {
        info: `<div class="effect-description-content-creator effect-description-content-creator-open">
        <img class="effect-description-content-creator-image-open" width="100"
            src="../src/skill-icons/javascript.svg" alt="">
    </div>
    <p class="effect-description-content-p-open"> <b>JavaScript</b>, often abbreviated JS, is a programming
        language that is one of the core technologies of the World Wide Web, alongside <b>HTML and CSS</b>. As
        of 2022, 98% of websites use JavaScript on the <b>client side</b> for webpage behavior, often
        incorporating <b>third-party libraries</b>.</p>`,
        src: `../src/skill-icons/javascript.svg`
    }, {
        info: ` <div class="effect-description-content-creator effect-description-content-creator-open">
        <img class="effect-description-content-creator-image-open" width="100" src="../src/skill-icons/react.svg"
            alt="">
    </div>
    <p class="effect-description-content-p-open"> <b>React</b> is a free and open-source <b>front-end JavaScript
            library</b> for building user interfaces based on UI components. It is maintained by <b>Meta</b> and
        a community of individual developers and companies.</p>`,
        src: `../src/skill-icons/react.svg`
    }, {
        info: `<div class="effect-description-content-creator effect-description-content-creator-open">
        <img class="effect-description-content-creator-image-open" width="100" src="../src/skill-icons/npm.svg"
            alt="">
    </div>
    <p class="effect-description-content-p-open"><b>NPM</b> is a <b>package manager</b> for the JavaScript
        programming language maintained by <b>npm, Inc</b>. npm is the default package manager for the
        <b>JavaScript runtime environment Node.js</b>.</p>`,
        src: `../src/skill-icons/npm.svg`
    }, {
        info: `<div class="effect-description-content-creator effect-description-content-creator-open">
        <img class="effect-description-content-creator-image-open" width="100"
            src="../src/skill-icons/mysql.svg" alt="">
    </div>
    <p class="effect-description-content-p-open"> <b>MySQL</b> is an open-source relational <b>database
            management system</b>.
        Its name is a combination of "My", the name of co-founder <b>Michael Widenius's daughter My</b>, and
        "SQL", the
        abbreviation for Structured Query Language.</p>`,
        src: `../src/skill-icons/mysql.svg`
    }, {
        info: `<div class="effect-description-content-creator effect-description-content-creator-open">
        <img class="effect-description-content-creator-image-open" width="100" src="../src/skill-icons/java.svg"
            alt="">
    </div>
    <p class="effect-description-content-p-open"> <b>Java</b> is a <b>high-level</b>, <b>class-based</b>,
        <b>object-oriented programming language</b> that is designed to have as few implementation dependencies
        as possible.
    </p>`,
        src: `../src/skill-icons/java.svg`
    }, {
        info: `<div class="effect-description-content-creator effect-description-content-creator-open">
        <img class="effect-description-content-creator-image-open" width="100"
            src="../src/skill-icons/jquery.svg" alt="">
    </div>
    <p class="effect-description-content-p-open"><b>JQuery</b> is a <b>JavaScript library</b> designed to
        simplify <b>HTML DOM tree traversal and manipulation</b>, as well as <b>event handling</b>, <b>CSS
            animation</b>, and <b>Ajax</b>. It is free, open-source software using the permissive MIT License.
        As of Aug 2022, jQuery is used by 77% of the 10 million most popular websites.</p>`,
        src: `../src/skill-icons/jquery.svg`
    }, {
        info: ` <div class="effect-description-content-creator effect-description-content-creator-open">
        <img class="effect-description-content-creator-image-open" width="100" src="../src/skill-icons/html.svg"
            alt="">
    </div>
    <p class="effect-description-content-p-open"> <b>The HyperText Markup Language or HTML</b> is the standard
        markup
        language for documents designed to be displayed in a <b>web browser</b>. It can be assisted by
        technologies
        such as <b>Cascading Style Sheets</b> and scripting languages such as <b>JavaScript</b>.</p>`,
        src: `../src/skill-icons/html.svg`
    }, {
        info: `<div class="effect-description-content-creator effect-description-content-creator-open">
        <img class="effect-description-content-creator-image-open" width="100" src="../src/skill-icons/css.svg"
            alt="">
    </div>
    <p class="effect-description-content-p-open"><b>Cascading Style Sheets</b> is a <b>style sheet language</b> used for
        describing the presentation of a document written in a markup language such as <b>HTML</b> or <b>XML</b>. <b>CSS</b> is a
        cornerstone technology of the World Wide Web, alongside <b>HTML</b> and <b>JavaScript</b>.</p>`,
        src: `../src/skill-icons/css.svg`
    }, {
        info: ` <div class="effect-description-content-creator effect-description-content-creator-open">
        <img class="effect-description-content-creator-image-open" width="100" src="../src/skill-icons/sass.svg"
            alt="">
    </div>
    <p class="effect-description-content-p-open"><b>Sass</b> is a <b>preprocessor scripting language</b> that is
        interpreted or compiled into <b>Cascading Style Sheets</b>. <b>SassScript</b> is the scripting language
        itself. Sass consists of two syntaxes. The original syntax, called <b>"the indented syntax,"</b> uses a
        syntax similar to <b>Haml</b>.</p>`,
        src: `../src/skill-icons/sass.svg`
    }, {
        info: `<div class="effect-description-content-creator effect-description-content-creator-open">
        <img class="effect-description-content-creator-image-open" width="100" src="../src/skill-icons/bootstrap.svg"
            alt="">
    </div>
    <p class="effect-description-content-p-open"> <b>Bootstrap</b> is a free and open-source <b>CSS framework</b> directed at responsive, mobile-first front-end web development. It contains <b>HTML</b>, <b>CSS</b> and <b>JavaScript-based</b> design templates for typography, forms, buttons, navigation, and other interface components.</p>`,
        src: `../src/skill-icons/bootstrap.svg`
    }, {
        info: `<div class="effect-description-content-creator effect-description-content-creator-open">
        <img class="effect-description-content-creator-image-open" width="100" src="../src/skill-icons/tailwind.svg"
            alt="">
    </div>
    <p class="effect-description-content-p-open"> <b>Tailwind CSS</b> is an open source <b>CSS framework</b>. The main feature of this library is that, unlike other <b>CSS</b> frameworks like <b>Bootstrap</b>, it does not provide a series of predefined classes for elements such as buttons or tables.</p>`,
        src: `../src/skill-icons/tailwind.svg`
    }, {
        info: `<div class="effect-description-content-creator effect-description-content-creator-open">
        <img class="effect-description-content-creator-image-open" width="100" src="../src/skill-icons/github.svg"
            alt="">
    </div>
    <p class="effect-description-content-p-open"> <b>GitHub, Inc</b>., is an <b>Internet hosting service</b> for <b>software development and version control using Git</b>. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project.</p>`,
        src: `../src/skill-icons/github.svg`
    }, {
        info: `<div class="effect-description-content-creator effect-description-content-creator-open">
        <img class="effect-description-content-creator-image-open" width="100" src="../src/skill-icons/ai.svg"
            alt="">
    </div>
    <p class="effect-description-content-p-open"> <b>Adobe Illustrator</b> is a <b>vector graphics editor</b> and
        <b>design program</b> developed and marketed <b>by Adobe Inc</b>. Originally designed for the <b>Apple Macintosh</b>,
        development of Adobe Illustrator began in 1985. Along with Creative Cloud, Illustrator CC was released.
    </p>`,
        src: `../src/skill-icons/ai.svg`
    }, {
        info: `<div class="effect-description-content-creator effect-description-content-creator-open">
        <img class="effect-description-content-creator-image-open" width="100" src="../src/skill-icons/ax.svg"
            alt="">
    </div>
    <p class="effect-description-content-p-open"> <b>Adobe XD</b> is a <b>vector design tool</b> for <b>web</b> and <b>mobile applications</b>, developed and published by <b>Adobe Inc</b>. It is available for <b>macOS</b> and <b>Windows</b>, and there are versions for <b>iOS</b> and <b>Android</b> to help preview the result of work directly on mobile devices.</p>`,
        src: `../src/skill-icons/ax.svg`
    }, {
        info: `<div class="effect-description-content-creator effect-description-content-creator-open">
        <img class="effect-description-content-creator-image-open" width="100" src="../src/skill-icons/ap.svg"
            alt="">
    </div>
    <p class="effect-description-content-p-open"> <b>Adobe Photoshop</b> is a <b>raster graphics editor</b> developed and published by <b>Adobe Inc</b>. for <b>Windows</b> and <b>macOS</b>. It was originally created in <b>1988</b> by <b>Thomas</b> and <b>John Knoll</b>. Since then, the software has become the industry standard not only in raster graphics editing, but in digital art as a whole.</p>`,
        src: `../src/skill-icons/ap.svg`
    }, {
        info: `<div class="effect-description-content-creator effect-description-content-creator-open">
        <img class="effect-description-content-creator-image-open" width="100" src="../src/skill-icons/office.svg"
            alt="">
    </div>
    <p class="effect-description-content-p-open"> <b>Microsoft Office</b>, or simply Office, is a family of <b>client software</b>, <b>server software</b>, and <b>services</b> developed by <b>Microsoft</b>. It was first announced by <b>Bill Gates</b> on <b>August 1, 1988</b>, at <b>COMDEX</b> in Las Vegas.</p>`,
        src: `../src/skill-icons/office.svg`
    }, {
        info: `            <div class="effect-description-content-creator effect-description-content-creator-open">
        <img class="effect-description-content-creator-image-open" width="100" src="../src/skill-icons/visio.svg"
            alt="">
    </div>
    <p class="effect-description-content-p-open"> <b>Microsoft Visio</b> is a <b>diagramming</b> and <b>vector graphics application</b> and is part of the <b>Microsoft Office</b> family. The product was first introduced in <b>1992</b>, made by the <b>Shapeware Corporation</b>, later renamed <b>Visio Corporation</b>. It was acquired by <b>Microsoft</b> in <b>2000</b>.</p>`,
        src: `../src/skill-icons/visio.svg`
    }
];

function changeSkillWhenHover() {
    // Get All Skill
    let getAllSkill = document.querySelectorAll(".effect");
    // Get Description Container
    let getDescriptionContainer = document.querySelector(".effect-description-content");

    // Perulangan hover 
    getAllSkill.forEach(function (skill, index) {
        skill.addEventListener("mouseenter", function () {
            // Jika yang di hover adalah card yang sama, maka return false
            const getPreviousSkillIdentifier = document.querySelector(".effect-description-content-creator-image-open").getAttribute("src");
            const getCurrentSkillIdentifier = skillInfo[index].src;

            // Jika parent memiliki child, hapus semua child di dalamnya
            if (getDescriptionContainer.childNodes.length !== 0 && getPreviousSkillIdentifier === getCurrentSkillIdentifier)
                return;

            getDescriptionContainer.innerHTML = skillInfo[index].info;
        });
    });
}

changeSkillWhenHover();

// Navbar Scroll
window.addEventListener("scroll", () => {
    let navbar = document.getElementsByTagName("nav");
    let navbarUl = document.querySelector("nav ul");

    let hero = document.getElementById("hero");
    let experiences = document.getElementById("experiences");
    let skills = document.getElementById("skills");
    let portfolio = document.getElementById("portfolio");
    let social = document.getElementById("social");


    let myWindowResize = window.innerWidth;

    if (window.scrollY + 200 > social.offsetTop) {
        navbar[0].classList.remove("addBlurToNav");
        navbar[0].classList.remove("addBlueTheme");
        navbar[0].classList.add("addNormalTheme");
    }
    else if (window.scrollY > hero.offsetHeight + experiences.offsetHeight + skills.offsetHeight && window.scrollY + 200 > portfolio.offsetTop) {
        if (myWindowResize < 859 && navbarUl.style.opacity != 1)
            navbar[0].classList.add("addBlurToNav");
        else if (myWindowResize > 860)
            navbar[0].classList.add("addBlurToNav");

        navbar[0].classList.remove("addNormalTheme");
        navbar[0].classList.add("addBlueTheme");
    }
    else if (window.scrollY > hero.offsetHeight + experiences.offsetHeight && window.scrollY + 200 > skills.offsetTop) {
        navbar[0].classList.remove("addBlurToNav");
        navbar[0].classList.remove("addBlueTheme");
        navbar[0].classList.add("addNormalTheme");
    }
    else if (window.scrollY > hero.offsetHeight && window.scrollY + 200 > experiences.offsetTop) {
        if (myWindowResize < 859 && navbarUl.style.opacity != 1)
            navbar[0].classList.add("addBlurToNav");
        else if (myWindowResize > 860)
            navbar[0].classList.add("addBlurToNav");

        navbar[0].classList.remove("addNormalTheme");
        navbar[0].classList.add("addBlueTheme");
    }
    else {
        navbar[0].classList.remove("addBlurToNav");
        navbar[0].classList.remove("addBlueTheme");
        navbar[0].classList.add("addNormalTheme");
    }
});
// End Navbar Scroll

// Resize Mode Menu Bars To Desktop
function windowResize() {
    let myWindowResize = window.innerWidth;

    // Jika lebar layar kurang dari 860
    const navUl = document.querySelector("nav ul");
    if (myWindowResize > 860) {
        // Jika menu ul menghilang ( jika dari bagian responsive mobile, menu kembali ditutup sewaktu-waktu)
        if (navUl.style.visibility === "hidden") {
            navUl.style.transition = "0s ease";
            navUl.style.opacity = 1;
            navUl.style.visibility = "visible";
        }
    }
    else if (myWindowResize < 859) {
        navUl.style.transition = "0s ease";
        navUl.style.opacity = 0;
        navUl.style.visibility = "hidden";
    }
}

window.addEventListener("resize", windowResize);

// Menu Bars
const menuBars = document.getElementById("menu-bars");
menuBars.addEventListener("click", (el) => {
    el.preventDefault();

    const nav = document.querySelector("nav");
    const navUl = document.querySelector("nav ul");

    let hero = document.getElementById("hero");
    let experiences = document.getElementById("experiences");
    let skills = document.getElementById("skills");
    let portfolio = document.getElementById("portfolio");
    let social = document.getElementById("social");

    if (navUl.style.visibility === "visible") {
        if (window.scrollY + 200 > social.offsetTop) {
            nav.classList.remove("addBlurToNav");
        }
        else if (window.scrollY + 200 > portfolio.offsetTop) {
            nav.classList.add("addBlurToNav");
        }
        else if (window.scrollY + 200 > skills.offsetTop) {
            nav.classList.remove("addBlurToNav");
        }
        else if (window.scrollY + 200 > experiences.offsetTop) {
            nav.classList.add("addBlurToNav");
        }
        else {
            nav.classList.remove("addBlurToNav");
        }

        navUl.style.transition = "0.25s ease";
        navUl.style.opacity = 0;
        navUl.style.visibility = "hidden";
    } else {
        nav.classList.remove("addBlurToNav");
        navUl.style.transition = "0.25s ease";

        navUl.style.opacity = 1;
        navUl.style.visibility = "visible";
    }
});

// Function add default
function addDefault() {
    const nav = document.querySelector("nav");
    let hero = document.getElementById("hero");
    let experiences = document.getElementById("experiences");
    let skills = document.getElementById("skills");
    let portfolio = document.getElementById("portfolio");
    let social = document.getElementById("social");

    if (window.scrollY + 200 > social.offsetTop) {
        nav.classList.remove("addBlurToNav");
        nav.classList.remove("addBlueTheme");
        nav.classList.add("addNormalTheme");
    }
    else if (window.scrollY + 200 > portfolio.offsetTop) {
        nav.classList.add("addBlurToNav");
        nav.classList.add("addBlueTheme");
        nav.classList.remove("addNormalTheme");
    }
    else if (window.scrollY + 200 > skills.offsetTop) {
        nav.classList.remove("addBlurToNav");
        nav.classList.remove("addBlueTheme");
        nav.classList.add("addNormalTheme");
    }
    else if (window.scrollY + 200 > experiences.offsetTop) {
        nav.classList.add("addBlurToNav");
        nav.classList.add("addBlueTheme");
        nav.classList.remove("addNormalTheme");
    }
}

addDefault();
// End Menu Bars

// For Ronimation
import Ronimation from './ronimation/index.js';

Ronimation.watchOutside({ size: "1px", color: "blue", style: "solid" }, false).run();