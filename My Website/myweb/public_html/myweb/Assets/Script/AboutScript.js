
// Function to change the content of row two when "Overview" link is clicked
function showOverviewDetails() 
{
    var rowTwo = document.getElementById('row-two');
    rowTwo.innerHTML = `
    <div id="row-two-container">
        <div class="content-container">
            <img class="icons" src="Assets/Images/Icons/briefcase.png" alt="briefcase">
            <div class="text-container">
                <h3>System Administrator at Intelligent Touch Corporation</h3>
                <p>Past: Cavite State University Trece Campus and Office of the Provincial Health Officer - Cavite</p>
            </div>
        </div>
        <div class="content-container">
            <img class="icons" src="Assets/Images/Icons/graduation hat.png" alt="education">
            <div class="text-container">
                <h3>Studied Bachelor of Science in Information Technology at Cavite State University Trece Martires City Campus</h3>
                <p>Attended from 2016 to 2022</p>
            </div> 
        </div>
        <div class="content-container">
            <img class="icons" src="Assets/Images/Icons/phone.png" alt="contact">
            <div class="text-container">
                <h3>0997 899 4298 </h3>
                <p>Contact number • Email • Social media accounts • Links</p>
            </div> 
        </div>
        <div class="content-container">
            <img class="icons" src="Assets/Images/Icons/information-button.png" alt="info">
            <div class="text-container">
                <h3>Lives in Trece Martires City</h3>
                <p>Cavite • Philippines</p>
            </div> 
        </div>
        <div class="content-container">
        <img class="icons" src="Assets/Images/Icons/user.png" alt="user">
            <div class="text-container">
                <h3>A diligent Information Technology Graduate</h3>
                <p>From CvSU Trece Martires City Campus</p>
            </div> 
                </div>
        </div>
    </div>`;
    
}

// Add an event listener to the "Overview" link
var overviewLink = document.querySelector('#row-one-container a[href="#Overview"]');
if (overviewLink) 
{
    overviewLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        showOverviewDetails(); // Call the function to show overview details
    });
    // Get all the links inside #row-one-container
    const links = document.querySelectorAll('#row-one-container a');

    // Add click event listeners to each link
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            // Prevent the default behavior of the link
            event.preventDefault();

            // Remove the 'active' class from all links
            links.forEach(link => link.classList.remove('active'));

            // Add the 'active' class to the clicked link
            this.classList.add('active');
        });
    });
}



// Function to change the content of row two when "Occupation" link is clicked
function showOccupationDetails() 
{
    var rowTwo = document.getElementById('row-two');
    rowTwo.innerHTML = `
    <h1>Occupation</h1>
    <div id="row-two-container">
        <div class="content-container">
            <img class="companies" src="Assets/Images/itc logo.png" alt="itc">
            <div class="text-container">
                <h3>System Administrator at Intelligent Touch Corporation</h3>
                <p>August 7, 2023 - Present <br> <br>
                    Responsible for the deployment of the LMS, 
                    IFS and other system software updated and working. Helping the client's 
                    tech to setup system environment for the software. Always support and 
                    troubleshoot the error of the software. Also, helping the co-workers 
                    needs in the network environment.
                </p>
            </div>
        </div>
        <div class="content-container">
            <img class="companies" src="Assets/Images/cvsu logo.png" alt="cvsu">
            <div class="text-container">
                <h3>Former IT INSTRUCTOR at Cavite State University Trece Campus</h3>
                <p>
                    October 10, 2022 - February 2023 <br> <br>
                    Prepare lesson plans, course outlines, schedules, and assignments. 
                    Identify the main objectives and skills or concepts that participants need to learn. 
                    Explain key concepts and principles, and create assignments or hands-on activities to 
                    allow students to develop practical skills.
                </p>
            </div> 
        </div>
        <div class="content-container">
            <img class="companies" src="Assets/Images/usaid.jpg" alt="usaid">
            <div class="text-container">
                <h3>Former Cavite Provincial Health Office Mobile Vaccine Team Encoder under U.S. Agency for International Development (USAID)</h3>
                <p>
                    March 2022 - September 2022 <br> <br>
                    USAID is the world’s premier international development agency and catalytic actor 
                    driving development results. In partnership with Cavite Provincial Health Office 
                    to form the Cavite Mobile Vaccine Team giving COVID-19 Vaccines around the province. 
                    As an Encoder, the task is to record all data in the vaccine cards of the patients 
                    and encode it using Excel or DVAS, which includes their name, address, age, birthdate, 
                    telephone number, category, and vaccine inoculated to the patient. 
                </p>
            </div> 
        </div>
        <div class="content-container">
            <img class="companies" src="Assets/Images/cvsu logo.png" alt="cvsu">
            <div class="text-container">
                <h3>Front-End Website Developer (On the Job Training) Cavite State University - Trece Martires City Campus Website. </h3>
                <p>
                    June 2021 - August 2021 <br> <br>
                    Cavite State University – Trece Martires City Campus Website (cvsutrececampus.com) 
                    is a website that contains information about the said campus including the student and 
                    staff portal. As a Front-End Developer of the website, the task given is to input the data 
                    needed for the creation of the website through the database. 
                </p>
            </div> 
        </div>
        
    </div>`;
}

// Add an event listener to the "Occupation" link
var occupationLink = document.querySelector('#row-one-container a[href="#Occupation"]');
if (occupationLink) {
    occupationLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        showOccupationDetails(); // Call the function to show occupation details
    });
}



// Function to change the content of row two when "Education" link is clicked
function showEducationDetails() 
{
    var rowTwo = document.getElementById('row-two');
    rowTwo.innerHTML = `
    <h1>Education</h1>
    <div id="row-two-container">
        <h1>Tertiary Education</h1>
        <div class="content-container">
            <img class="companies" src="Assets/Images/cvsu logo.png" alt="cvsu">
            <div class="text-container">
                <h3>Studied Bachelor of Science in Information Technology at Cavite State University Trece Campus</h3>
                <p>
                    Trece Martires City Cavite <br>
                    Class of 2017 - 2022
                </p>
            </div>
        </div>
        <h1>Secondary School</h1>
        <div class="content-container">
            <img class="companies" src="Assets/Images/lanhs.jpg" alt="lanhs">
            <div class="text-container">
                <h3>Studied at Luis Aguado National High School</h3>
                <p>
                    Trece Martires City Cavite <br>
                    Class of 2015
                </p>
            </div> 
        </div>
        <h1>Primary School</h1>
        <div class="content-container">
            <img class="companies" src="Assets/Images/malagasangelem.png" alt="malagasang">
            <div class="text-container">
                <h3>Studied at Malagasang 1-E Elementary School</h3>
                <p>
                    Imus Cavite <br>
                    Class of 2011
                </p>
            </div> 
        </div>
    </div>`;
}

// Add an event listener to the "Education" link
var educationLink = document.querySelector('#row-one-container a[href="#Education"]');
if (educationLink) {
    educationLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        showEducationDetails(); // Call the function to show education details
    });
}




// Function to change the content of row two when "Contact Info" link is clicked
function showContactInfoDetails() 
{
    var rowTwo = document.getElementById('row-two');
    rowTwo.innerHTML = `
    <h1>Contact info</h1>
    <div id="row-two-container">
        <h1>Contact number</h1>
        <div class="content-container">
            <img class="icons" src="Assets/Images/Icons/phone.png" alt="phone">
            <div class="text-container">
                <h3>0997 899 4298</h3>
                <p>
                    Phone number
                </p>
            </div>
        </div>
        <div class="content-container">
            <img class="icons" src="Assets/Images/Icons/whatsapp.png" alt="whatsapp">
            <div class="text-container">
                <h3>0997 899 4298</h3>
                <p>
                    Whatsapp contact number
                </p>
            </div> 
        </div>
        <div class="content-container">
            <img class="icons" src="Assets/Images/Icons/viber.png" alt="viber">
            <div class="text-container">
                <h3>0997 899 4298</h3>
                <p>
                    Viber contact number
                </p>
            </div> 
        </div>
    </div>
    <div id="row-two-container">
        <h1>Emails</h1>
        <div class="content-container">
            <img class="icons" src="Assets/Images/Icons/gmail.png" alt="gmail">
            <div class="text-container">
                <h3>toledocarlojohn@gmail.com</h3>
                <p>
                    Gmail Account
                </p>
            </div> 
        </div>
        <div class="content-container">
            <img class="icons" src="Assets/Images/Icons/outlook.png" alt="outlook">
            <div class="text-container">
                <h3>toledocarlojohn@outlook.com</h3>
                <p>
                    Outlook Account
                </p>
            </div> 
        </div>
    </div>
    <div id="row-two-container">
        <h1>Social media accounts</h1>
        <div class="content-container">
            <img class="icons" src="Assets/Images/Icons/facebook.png" alt="facebook">
            <div class="text-container">
                <h3>facebook.com/carlo.toledo0105/</h3>
                <p>
                    Facebook account link
                </p>
            </div> 
        </div>
        <div class="content-container">
        <img class="icons" src="Assets/Images/Icons/youtube.png" alt="youtube">
        <div class="text-container">
            <h3>youtube.com/@carlojohntoledo5971</h3>
            <p>
                Youtube account link
            </p>
        </div> 
        </div>
        <div class="content-container">
            <img class="icons" src="Assets/Images/Icons/instagram.png" alt="instagram">
            <div class="text-container">
                <h3>instagram.com/koalomusic.ph</h3>
                <p>
                    Instagram account link
                </p>
            </div> 
        </div>
        <div class="content-container">
            <img class="icons" src="Assets/Images/Icons/tiktok.png" alt="tiktok">
            <div class="text-container">
                <h3>tiktok.com/koalomusic.ph</h3>
                <p>
                    Tiktok account link
                </p>
            </div> 
        </div>
        <div class="content-container">
            <img class="icons" src="Assets/Images/Icons/threads.png" alt="threads">
            <div class="text-container">
                <h3>threads.net/koalomusic.ph</h3>
                <p>
                    Threads account link
                </p>
            </div> 
        </div>
    </div>
    <div id="row-two-container">
        <h1>Links</h1>
        <div class="content-container">
            <img class="icons" src="Assets/Images/Icons/spotify.png" alt="spotify">
            <div class="text-container">
            <a text-decoration="none" href="https://open.spotify.com/artist/5XbyT2tunaCbetacxld6ZM?si=MSZkIPRFRa-bKmTrKhQ37w">
                <h3>spotify/artist/Koalo</h3>
                <p>
                    Spotify account link
                </p>
            </a>
            </div> 
        </div>
        <div class="content-container">
            <img class="icons" src="Assets/Images/Icons/itchio.svg" alt="itch.io">
            <div class="text-container">
            <a text-decoration="none" href="https://carlojohntoledo.itch.io/">
                <h3>carlojohntoledo.itch.io/Koalo</h3>
                <p>
                    Itch.io account link
                </p>
            </a>
            </div> 
        </div>
    </div>
    `;
}

// Add an event listener to the "Contact info" link
var contactinfoLink = document.querySelector('#row-one-container a[href="#ContactInfo"]');
if (contactinfoLink) {
    contactinfoLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        showContactInfoDetails(); // Call the function to show Contact info details
    });
}



// Function to change the content of row two when "Education" link is clicked
function showAboutmeDetails() 
{
    var rowTwo = document.getElementById('row-two');
    rowTwo.innerHTML = `
    <h1>Details about Carlo</h1>
    <div id="row-two-container">
        <h1>Biography</h1>
        <div class="content-container">
            <div class="text-container">
                <p>
                <strong>Carlo John Toledo Pabien</strong>, born on May 12, 1999, in Bacoor City, Cavite, came into this world as the third of four siblings,
                raised by his parents Dynna Pabien and Jovito Pabien. His early years were shaped by the vibrant atmosphere of Imus Cavite, 
                where he developed a curiosity and eagerness to explore. <br> <br>

                Carlo embarked on his academic journey in Malagasang 1-E Elementary School, Imus, Cavite, for his elementary education. Later, 
                he transitioned to Luis Aguado National High School in Trece Martires City during his first year of high school. Throughout his 
                formative years, Carlo exhibited a keen interest in various skills, particularly in the realm of music and arts. <br> <br>
                
                In pursuit of his passion, Carlo initially set his sights on a career in architecture when he entered college. However, 
                his journey took an unexpected turn, leading him to a different path—Bachelor of Science in Information Technology (BSIT). 
                Despite the initial deviation from his original plan, Carlo discovered his aptitude for working with computers, turning the 
                change of course into a valuable and fulfilling experience. <br> <br>
                
                Carlo successfully navigated the challenges of college life and emerged as a proud graduate of Cavite State University Trece 
                Martires City Campus, belonging to the class of 2017 to 2022. His dedication and perseverance were further exemplified when he 
                achieved success in the Civil Service Commission exam of 2023, showcasing his commitment to personal and professional development. <br> <br>
                
                Now equipped with a solid educational foundation and the distinction of a BSIT graduate, Carlo is poised to embark on a promising 
                career in Information Technology. Fueled by a passion for delivering efficient and impactful services, he is actively seeking opportunities 
                to elevate his IT career to new heights. With a blend of skills, education, and determination, Carlo John Toledo Pabien is ready to make meaningful 
                contributions to the dynamic world of Information Technology. <br> <br>
                </p>
            </div>
        </div>
        <h1>Basic info</h1>
        <div class="content-container">
            <img class="icons" src="Assets/Images/Icons/user.png" alt="user">
            <div class="text-container">
                <h3>Male</h3>
                <p>
                    Gender
                </p>
            </div> 
        </div>
        <div class="content-container">
            <img class="icons" src="Assets/Images/Icons/information-button.png" alt="info">
            <div class="text-container">
                <h3>English - Filipino</h3>
                <p>
                    Language
                </p>
            </div> 
        </div>
        <div class="content-container">
            <img class="icons" src="Assets/Images/Icons/location.png" alt="location">
            <div class="text-container">
                <h3>Trece Martires City, Cavite</h3>
                <p>
                    Location
                </p>
            </div> 
        </div>
        <div class="content-container">
            <img class="icons" src="Assets/Images/Icons/internet.png" alt="citizen">
            <div class="text-container">
                <h3>Filipino</h3>
                <p>
                    Citizenship
                </p>
            </div> 
        </div>
        <div class="content-container">
            <img class="icons" src="Assets/Images/Icons/height.png" alt="height">
            <div class="text-container">
                <h3>160cm</h3>
                <p>
                    Height
                </p>
            </div> 
        </div>
        <div class="content-container">
            <img class="icons" src="Assets/Images/Icons/weight-scale.png" alt="weight">
            <div class="text-container">
                <h3>50kg</h3>
                <p>
                    Weight
                </p>
            </div> 
        </div>
    </div>`;
}

// Add an event listener to the "Aboutme" link
var aboutmeLink = document.querySelector('#row-one-container a[href="#Aboutme"]');
if (aboutmeLink) {
    aboutmeLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        showAboutmeDetails(); // Call the function to show Aboutme details
    });
}