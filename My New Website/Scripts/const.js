const trackingArea = document.getElementById('tracking-area');
const sideButtons = document.getElementById('side-buttons');
const trackingFixedArea = document.getElementById('fixed-container');
const menuCont = document.getElementById('menu-btn-container');
const radioBtns = document.querySelectorAll('.radio');
const head = document.getElementById('head');
const characterBody = document.getElementById('characterbody');
const eyes = document.querySelectorAll('.eye');
const treeBackground = document.querySelector('.tree-background');
const landScape = document.querySelector('.landscape');
const sky = document.getElementById('sky');
const chains = document.getElementById('chains');
const sections = document.querySelectorAll('.main');
const body = document.body;
const chainContainer = document.getElementById('chains');
const gears = document.querySelectorAll('.gear');
const allGears = {
    gearOne: document.getElementById('gearOne'),
    gearTwo: document.getElementById('gearTwo'),
    gearThree: document.getElementById('gearThree'),
    gearFour: document.getElementById('gearFour')
}


let isDragging = false;
let startX;
let initialRotation = 0;
let isDizzy = false;
let dizzyTimeout;
let previousPositions = [];
const maxPositions = 50; // Maximum positions to track
let fullCircles = 0; // Count of full circles
const requiredCircles = 5; // Number of circles required to make character dizzy

// Event listeners for scrolling to sections
const menuButtons = {
    profile: document.getElementById('profile'),
    skills: document.getElementById('skills'),
    projects: document.getElementById('projects'),
    contact: document.getElementById('contact')
};

const sectionsIDs = {
    profileSection: document.getElementById('profile-section'),
    skillsSection: document.getElementById('skills-section'),
    projectsSection: document.getElementById('projects-section'),
    contactSection: document.getElementById('contact-section')
};



