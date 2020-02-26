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
    `Luigi's Pizzeria Web Application

    PHP Web Application
    
    
    Running like this...<br/><br/>
    [XAMPP - Apache and MySQL]<br/>
    [Apache HTTP Server]<br/>
    [MySQL Database]<br/>
    [PhpMyAdmin for Database View/Schema]<br/>
    [Bootstrap - Front-end framework]<br/>
    
    The Stack...<br/>
    Front-End:</br>
    [HTML][CSS][JavaScript][Bootstrap]</br>
    Back-End:</br>
    [PHP][Apache HTTP Server]</br>
    Database:</br>
    [MySQL]<br/>
    
    `,
    `
    Banking-Ledger
    BankingLedger - C# Console Application <br>
    BankingLedgerWebApplication- C# ASP .NET  Web Application<br><br>

    *Both can be run from the command line with the command -> dotnet run<br>
    *...as long as .Net is setup on your computer
    *for the web application put the https://localhost:5001 into your browser<br> 

    # Overview
    This Application is a small version of a bank.<br>

    Console Application - Built with c#<br>
    Web Application - Built with c# and ASP .NET - uses bootstrap to style<br>

    What it can do:<br>
    Login<br>
    Sign Up [Creates Checking Account]<br>
    Create New Account [Savings]<br>
    Change Account [Checking, Savings]<br>
    Record a deposit<br>
    Record a withdrawal<br>
    Check balance<br>
    View all transaction history<br>
    Log Out [Saves to Json File instead of a "database"]<br><br>
    
    *Only real change from console application to web application was Session class<br>
    *All other classes stayed mostly the same<br><br>

    Quick login use without creating new account: Username- cja Password- password<br>
    You can delete the database.json file and the program will create a new one for you =)<br>

    The Stack...<br>

    Front-End:<br>
    [html][css][javascript][bootstrap][jquery][razor]<br>
    Back-End:<br>
    [C#]<br>
    Database:<br>
    [Json]<br>
    Framework:<br>
    [ASP .NET MVC]<br>
    
    `,
    `
    Maze Solver

    Maze Solver Application  [Created Stack Class Solution] [Binary Tree Solution]

    # Description

    I created a	Java	program	to determine a path	from the start (1,n) of a maze to the finish (n,1) of the maze where n is the size of the maze. I wrote my own stack class to solve this problem WITHOUT the use of java's built in stack class from the java library (java.util.Stack).


                
    Understand	the	Data:	The	maze	is	square	and	the	size	is	n	x	n.	The	lower	left	position	is (1,	1)	and	the	upper	right	position	is	(n,	n).	The	starting	position	is	at	position	(1,	n).	When	you	reach	the	position	(n,	1),	you	have	found	the	exit	and	you	are	done. The	maze	is characterized	by	 boolean arrays (north, east, south, west) indicating where a wall is present in a particular direction if it is true.

    Implementing a Binary tree Solution

    I wrote a Java program to implement a breadth first search 
    on a Graph using a linked list representation to solve a maze. This program also finds the
    shortest distance between the start point and end point of the maze.



    There are 3 maze files that are used for examples:<br>
    maze8<br>
    maze16<br>
    maze32<br>

    
    `,
    `
    # Hangman Game
    Simple Hangman Game using C#

    # Description

    This program chooses a random word from the file [wordlist.txt] to use as the hangman word.<br>
    A wrong guess will result in a part of a person being drawn.<br>
    
    `
];

const sourceList = [

    '<a href="https://github.com/ChaseAnzelc/Kids-Play-Android-Mobile-App" target="_blank"><button type="button" class="btn btn-outline-secondary btn-lg btn-block">View Source Code for Project</button></a>',
    `
    <a href="https://issueticketingsystem.com" target="_blank"><button type="button" class="btn btn-outline-secondary btn-lg btn-block">Go to Live Website</button></a>
    <a href="https://github.com/ChaseAnzelc/Issue-Ticketing-System" target="_blank"><button type="button" class="btn btn-outline-secondary btn-lg btn-block">View Source Code for Project</button></a>`,
    '<a href="https://github.com/ChaseAnzelc/Luigi-s-Pizzeria-Web-Application" target="_blank"><button type="button" class="btn btn-outline-secondary btn-lg btn-block">View Source Code for Project</button></a>',
    '<a href="https://github.com/ChaseAnzelc/Banking-Ledger" target="_blank"><button type="button" class="btn btn-outline-secondary btn-lg btn-block">View Source Code for Project</button></a>',
    '<a href="https://github.com/ChaseAnzelc/Maze-Solver" target="_blank"><button type="button" class="btn btn-outline-secondary btn-lg btn-block">View Source Code for Project</button></a>',
    '<a href="https://github.com/ChaseAnzelc/Hangman-Game" target="_blank"><button type="button" class="btn btn-outline-secondary btn-lg btn-block">View Source Code for Project</button></a>',

];

var imageList = [

    '../images/kidsplay-phone.jpg',
    '../images/issuetic-laptop.jpg',
    '../images/.jpg',
    '../images/.jpg',
    '../images/.jpg',
    '../images/hangman-laptop.jpg'

];

var styleList = [

    '../images/kidsplaybanner.jpg',
    '../images/issueticbanner.jpg',
    '../images/luigipizzariabanner.jpg',
    '../images/bankingledgerbanner.jpg',
    '../images/mazesolverbanner.jpg',
    '../images/hangmanbanner.jpg'

];

var presentationList = [
    'https://docs.google.com/presentation/d/e/2PACX-1vTVBaK6jbZ125yq-vJgd6dvU-X38ewTVbBbETrAC2hDpwsK5OVZTHC4nEYnA_oGzKSr537Cl93CEkQf/embed?start=true&loop=true&delayms=3000',
    'https://docs.google.com/presentation/d/e/2PACX-1vSO0FVmkTv6PXu7PsdPTcSS_Q0Hz5Kf4l4_NGk-i4_Rq0GhA_Dn3wlu9kvfGvt8zRzf8sYc7MaMNMln/embed?start=true&loop=true&delayms=3000'
]

var demoList = [

    'https://docs.google.com/presentation/d/e/2PACX-1vR79WEEBd0BjYhoVqHgvDtZZclkTwwUD1O1pkGngAu0-sQZL6-EIbdw-TtSkFVhW5J5XeNdwH8hfBgC/embed?start=true&loop=true&delayms=3000',
    'https://docs.google.com/presentation/d/e/2PACX-1vRswswgG6T1Q0QKZ8EEZwnxyVDpPEiz1XvgPzT8snggBW0W3_DQUpOqngHnr44DsHI816SUZNpqLiyu/embed?start=true&loop=true&delayms=3000',
    'https://docs.google.com/presentation/d/e/2PACX-1vRejj4p8LJGu0Lz9DpmCyz5-Hdx9peWH_MQXY1EjmALCsLxcOHmdEAeFz71ImB4y3PnqusZB__aMoDM/embed?start=true&loop=true&delayms=3000',
    'https://docs.google.com/presentation/d/e/2PACX-1vQhAXzL1POCUgvtBamuW1Id3n1ThN4lmu_TxKFeYtuVUs4i0tWMcP-lynbBh0QkR5rwUhd_0t1yO74M/embed?start=true&loop=true&delayms=3000',
    'https://docs.google.com/presentation/d/e/2PACX-1vR1I5n9FUC_f6uXpD3LBB85RgdSEr0yT8pqIKcrk6tQIIOjehndAr3SDe2qa_boTnr2tV1_nxxNQsJa/embed?start=true&loop=true&delayms=3000',
    'https://docs.google.com/presentation/d/e/2PACX-1vR3ecVMnl5Y6DCnlEpaMJtUGZzm8SDXStcuCSl-YNn_GjdGV24ZnMLvsJ6EDdX1d0E-VzS7dTW6DIyO/embed?start=true&loop=true&delayms=3000'

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

    constructor(props){
        super(props);


        this.state = {
            project_number: 0
        }
    }

    componentWillMount() {

        const projectname  = this.props.match.params.projectname;

        switch (projectname){
            case 'kidsplay':
                this.state.project_number = 0;
                break;
            case 'issueticketingsystem':
                this.state.project_number = 1;
                break;
            case 'luigispizzaria':
                this.state.project_number = 2;
                break;
            case 'bankingledger':
                this.state.project_number = 3;
                break;
            case 'mazesolver':
                this.state.project_number = 4;
                break;
            case 'hangman':
                this.state.project_number = 5;
                break;
            default:
                break;
        }
    }

    componentDidMount() {
        loadjs('../main.js');
      }

    render() {
        return (
        <div id="ProjectPage">
            <ProjectNav id={this.state.project_number}/>
            <ProjectHeader header={headerList[this.state.project_number]} style={styleList[this.state.project_number]}/>
            <Description description={descriptionList[this.state.project_number]} image={imageList[this.state.project_number]} source={sourceList[this.state.project_number]}/>
            <ShowPresentation id={this.state.project_number}/>
            <Demo demo={demoList[this.state.project_number]}/>
        </div>
        );
    }
}
export default Projects;


function ShowPresentation(props) {
  if (props.id == 0 || props.id == 1) {
    return <Presentation pres={presentationList[props.id]}/>;
  }
  return null;
}

