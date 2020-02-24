import React from "react";

import ProjectHeader from './ProjectHeader.js';
import ProjectNav from './ProjectNav.js';
import Description from './Description';
import Presentation from './Presentation';
import Demo from './Demo';


var descriptionList = [

    'Android Mobile Application built in Android Studio with Java.<br><br>Please download the APK, then proceed to install for hours of ad free fun!<br><br>A super fun children\'s mobile gaming application.<br/><br/>What was used..<br/>[Android Studio IDE]<br/>[Java]<br/>[XML Layout Files]<br/>[Implementation of a sparkbutton, submitbutton, and stylabletoast]<br/>[Fragments]<br/>[Photoshop]<br/>[Animations]<br/>[Intents]<br/>[SQLite Database]<br/>[Handlers]<br/>[RecyclerView]<br/>[Gestures]<br/>[GridView]<br/><br/>Please enjoy the presentation and demo of my Android Mobile App!!',
    `
    <h6><i>Easily Manage and Maintain Issues at your Company.</i></h6><br><br>


    <h5>Live Website</h5><br>
    <a href="https://www.issueticketingsystem.com">www.issueticketingsystem.com</a><br><br>

    

    <h5>Details</h5><br>
    
    -Currently running like this-<br/><br/>
    [MochaHost Web Hosting]<br/>
    [PostgreSQL Database]<br/>
    [Phppgadmin for Database View/Schema]<br/>
    [Private JVM Application Server - Apache Tomcat Version 9]<br/>
    [Bootstrap - Front-end framework]<br/>
    [JDK Version jdk1.10.0.2]<br/>
    [Deployed WAR File from Eclipse]<br/><br>
    
    -The Stack-<br/><br/>
    Front-End:</br>
    [HTML][CSS][Javascript][Bootstrap][jQuery]</br>
    Back-End:</br>
    [Java][JSP][Apache Tomcat Server]</br>
    Database:</br>
    [Cloud-PostgreSQL]</br><br>
 
    <h5>Please...</h5><br>
    1. Sign Up on the website to access the Issue Ticketing System.<br>
    [You will not have admin access unless I allow, email me at cjanzelc@gmail.com]<br><br>
    2. You can now open an issue request, ask a question to Admin, edit/update tickets assigned to you, and view all department issue requests and tickets.<br><br>
    3. Admin can now open a ticket from your issue request you created, answer your question, and assign the repair to the proper individual so your issue will be promptly fixed.<br>
    <br/>
    
    
    `,
    ``,
    ``,
    ``,
    ``
];

var imageList = [

    'images/kidsplay-img.jpg',
    'images/issue-ticketing-system.jpg',
    '',
    '',
    '',
    ''

];

var demoList = [

    'https://docs.google.com/presentation/d/e/2PACX-1vR79WEEBd0BjYhoVqHgvDtZZclkTwwUD1O1pkGngAu0-sQZL6-EIbdw-TtSkFVhW5J5XeNdwH8hfBgC/embed?start=true&loop=true&delayms=3000',
    '',
    '',
    '',
    '',
    ''

];

var headerList = [

    'Kids Play Mobile Application', 
    'Issue Ticketing System', 
    'Luigi\'s Pizzaria',
    'Banking Ledger',
    'Maze Solver',
    'Hangman' 
];

var loadjs = require('loadjs');

class Projects extends React.Component {

    componentDidMount() {
        loadjs('../../../main.js');
      }

    render() {
        return (
        <div id="ProjectPage">
            <ProjectNav />
            <ProjectHeader header={headerList[1]}/>
            <Description description={descriptionList[1]} image={imageList[1]}/>
            <Presentation />
        <Demo demo={demoList[0]}/>
        </div>
        );
    }
}
/*const Projects = () => {

   

    return (
    <div id="ProjectPage">
       <ProjectNav />
       <ProjectHeader header={headerList[1]}/>
       <Description description={descriptionList[1]} image={imageList[1]}/>
       <Presentation />
       <Demo demo={demoList[0]}/>
    </div>
    );
};*/
export default Projects;