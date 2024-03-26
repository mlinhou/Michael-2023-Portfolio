import CognivisionHome from "../assets/CognivisionHome.png";
import CognivisionFilterModal from "../assets/CognivisionFilterModal.png";

import Postlist from "../assets/Postlist.png";
import Login from "../assets/Login.png";

import Burger from "../assets/burger.jpg";
import Iphone from "../assets/iphone.jpg";

import Dots from "../assets/dots1.png";
import DotsTwo from "../assets/dots2.png";

import NotesHome from "../assets/notesHome.png";
import NotesCreate from "../assets/notesCreate.png";

import Calc from "../assets/calc1.png";
import CalcTwo from "../assets/calc2.png";

import Teggle from "../assets/teggle1.png";
import TeggleGameOver from "../assets/teggleGameOver.png";

import snakepic from "../assets/snakepic.png";
import snakegameover from "../assets/snakegameover.png";

import nbaapipic from "../assets/nbaapipic.png";
import nbaapidarkmodepic from "../assets/nbaapidarkmodepic.png";

import dailytoolstodo from "../assets/dailytoolstodo.png"
import dailytoolscalc from "../assets/dailytoolscalc.png"



export const ProjectList = [
    {
        name: "Daily Tools Collection",
        image: dailytoolstodo,
        extraImage: dailytoolscalc,
        skills: "React, JavaScript, HTML, CSS",
        description: "An All-in-One collection of daily tools for a friendly user experience! Features a Todo list, calculator, and timer. This app is continuosly being updated with more features!",
        link: "https://mlinhou.github.io/Daily-Tools/"
    },
    {
        name: "Snake",
        image: snakepic,
        extraImage: snakegameover,
        skills: "React, JavaScript, HTML, CSS, Node.js, MongoDB",
        description: "The classic arcade game of Snake! Try to eat as many apples as you can without running into a wall or yourself. Collect powerups along the way to shrink your snake size and slow down your move speed!",
        link: "https://mlinhou.github.io/Snake_app/"
    },
    {
        name: "NBA Comparison App",
        image: nbaapidarkmodepic,
        extraImage: nbaapipic,
        skills: "React, JavaScript, HTML, CSS, Chart.js",
        description: "Compare two NBA players' stats from any season with this app! The two inputted player names and seasons will have their stats displayed via Chart.js.",
        link: ""
    },
    {
        name: "Project Metric App",
        image: CognivisionHome,
        extraImage: CognivisionFilterModal,
        skills: "React, JavaScript, HTML, CSS, Springboot, .NET, VSCode",
        description: "A data visualization app that can store various project metrics, such as location, date, progress, team size, etc. These project metrics are displayed through various graphs, charts, tables and maps. You can filter through the metrics using the filter modal, which then updates the displayed information.",
        link: ""
    },
    {
        name: "Social Media App",
        image: Postlist,
        extraImage: Login,
        skills: "SwiftUI, Alamofire, XCode",
        description: "A mobile app that allows users to register and login as users to see, like, comment, and post their own content.",
        link: ""
    },
    {
        name: "Recipe App",
        image: Burger,
        extraImage: Iphone,
        skills: "Swift, RealmDB, XCode",
        description: "An app that allows users to search different recipes, which contains a list of ingredients, the different steps to create the dish, as well as watch a video tutorial. Users can also favorite their recipes as well as input any allergies, which the app notifies the user whenever a recipe contains an allergen.",
        link: ""
    },
    {
        name: "Dots",
        image: Dots,
        extraImage: DotsTwo,
        skills: "Swift, XCode",
        description: "Touch the dots on the screen as they move and bounce around the screen to increase your score. Each successful tap of the dots increases the speed of the dots. Lose if you miss 3 times.",
        link: ""
    },
    {
        name: "Notes",
        image: NotesHome,
        extraImage: NotesCreate,
        skills: "Swift, XCode",
        description: "Note taking app that lets you create, edit, and delete notes.",
        link: ""
    },
    {
        name: "Calculator",
        image: Calc,
        extraImage: CalcTwo,
        skills: "Swift, XCode",
        description: "Calculator app that can add, subtract, multiply, and divide numbers. Includes negative numbers.",
        link: ""
    },
    {
        name: "Teggle",
        image: Teggle,
        extraImage: TeggleGameOver,
        skills: "Swift, XCode",
        description: "Tap the screen based on the indicated direction or number of taps before the bubble reaches the bottom of the screen. The score and speed of the bubble increase with each correct input.",
        link: ""
    },
];