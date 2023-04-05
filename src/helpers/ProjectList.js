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



export const ProjectList = [
    {
        name: "Project Metric App",
        image: CognivisionHome,
        extraImage: CognivisionFilterModal,
        skills: "React, JavaScript, HTML, CSS, Springboot, .NET, VSCode",
        description: "A web app that can store various project metrics, such as location, date, progress, team size, etc. These project metrics are displayed through various graphs, charts, tables and maps. You can filter through the metrics using the filter modal, which then updates the displayed information."
    },
    {
        name: "Pixelgram",
        image: Postlist,
        extraImage: Login,
        skills: "SwiftUI, Alamofire, XCode",
        description: "A social media mobile app that allows users to register and login as users to see, like, comment, and post their own content."
    },
    {
        name: "Recipe App",
        image: Burger,
        extraImage: Iphone,
        skills: "Swift, RealmDB, XCode",
        description: "An app that allows users to search different recipes, which contains a list of ingredients, the different steps to create the dish, as well as watch a video tutorial. Users can also favorite their recipes as well as input any allergies, which the app notifies the user whenever a recipe contains an allergen."
    },
    {
        name: "Dots",
        image: Dots,
        extraImage: DotsTwo,
        skills: "Swift, XCode",
        description: "Touch the dots on the screen as they move and bounce around the screen to increase your score. Each successful tap of the dots increases the speed of the dots. Lose if you miss 3 times."
    },
    {
        name: "Notes",
        image: NotesHome,
        extraImage: NotesCreate,
        skills: "Swift, XCode",
        description: "Note taking app that lets you create, edit, and delete notes."
    },
    {
        name: "Calculator",
        image: Calc,
        extraImage: CalcTwo,
        skills: "Swift, XCode",
        description: "Calculator app that can add, subtract, multiply, and divide numbers. Includes negative numbers."
    },
    {
        name: "Teggle",
        image: Teggle,
        extraImage: TeggleGameOver,
        skills: "Swift, XCode",
        description: "Tap the screen based on the indicated direction or number of taps before the bubble reaches the bottom of the screen. The score and speed of the bubble increase with each correct input."
    },
];