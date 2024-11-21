
// Function to change the content of row two when "Game Development" link is clicked
function showGameDevDetails() 
{
    var serviceCon = document.getElementById('services-content-container1');
    serviceCon.innerHTML = `
    <div class="services-text-container">
        <div class="h1-container"><b>Game Development</b></div>
        <div class="p-container">

            <div class="first-p">
                <p>
                    From the earliest days of my childhood, a profound love for computer, console, and mobile games 
                    has been a driving force in my life. This passion crystallized as I delved into the realm of 
                    Information Technology, leading me to a resolute decision – <strong>I wanted to be a game developer</strong>. 
                    A pivotal moment in this journey unfolded during our thesis project, where I conceived an innovative 
                    game-like app that offered a captivating 3D exploration of our campus. This endeavor marked my 
                    initiation into the intricate world of game engines, with Unity emerging as the cornerstone of my 
                    creative endeavors. <br><br>
                </p>
            </div>
            <div class="first-p">
                <p>
                    <strong>Unity Engine</strong>, a cutting-edge game development platform, became the conduit through which I transformed my 
                    visionary ideas into tangible, interactive experiences. Its robust features, cross-platform 
                    capabilities, and intuitive interface allowed me to navigate the complexities of game development 
                    seamlessly. As I honed my skills with Unity 3D, my thesis project not only achieved success 
                    academically but also became a catalyst for personal and professional growth. The experience taught 
                    me invaluable lessons about perseverance and pushing oneself beyond limits – qualities essential in 
                    the dynamic field of game development. <br><br>
                </p>
            </div>
            <div class="services-p-container">
                <div class="services-row-one">
                    <div class="card" onclick="this.classList.toggle('clicked')">
                        <div class="card-inner">
                            <div class="card-face front">
                                <div id="services-logo-container">
                                    <img src="Assets/Images/Services/unity.png" alt="unity">
                                </div>
                            </div>
                            <div class="card-face back">
                                <div class="card-p-container">
                                    <p>
                                        <b>Unity</b> is a versatile game development engine that enables developers to create engaging 2D and 3D experiences 
                                        across multiple platforms, including desktop, mobile, and consoles. Developed by Unity Technologies, the engine 
                                        boasts a powerful graphics rendering system, a built-in physics engine, and support for the C# scripting language. 
                                        With features like the Asset Store for shared resources and a large and active community, Unity facilitates the 
                                        development of interactive content beyond gaming, such as simulations, architectural visualizations, and training 
                                        applications. Its cross-platform capabilities and user-friendly design make it a popular choice for both individual 
                                        developers and major game development studios worldwide.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="services-row-two">
                    
                    <div class="services-ytvids-container">
                        <iframe src="https://www.youtube.com/embed/iqlH4okiQqg?si=PeBWJ5dAD-DSzIBJ?mute=1" frameborder="0" autoplay></iframe>
                    </div>
                </div>
            </div>

            <div class="first-p">
                <p>
                    Venturing further into my toolkit, I embraced  <strong>Godot Engine</strong>, an open-source gem that empowers 
                    developers to realize their creative visions. Within the realms of Godot, I crafted an infinite runner 
                    game, not only showcasing my technical proficiency but also unveiling a penchant for innovative 
                    gameplay mechanics. Godot's user-friendly nature and its emphasis on flexibility and creativity 
                    provided me with a fertile ground to experiment, learn, and evolve as a game developer. <br><br>
                </p>
            </div>

            <div class="services-p-container">
                <div class="services-row-one">
                    <div class="card" onclick="this.classList.toggle('clicked')">
                        <div class="card-inner">
                            <div class="card-face front">
                                <div id="services-logo-container">
                                    <img src="Assets/Images/Services/godot logo.svg" alt="godot">
                                </div>
                            </div>
                            <div class="card-face back">
                                <div class="card-p-container">
                                    <p>
                                        <b>Godot</b> is an open-source game development engine known for its flexibility and ease of use. 
                                        Developed by the community-driven Godot Engine project, it offers a comprehensive set of tools 
                                        for creating both 2D and 3D games. Godot uses its own scripting language, GDScript, designed 
                                        specifically for game development, while also supporting languages like C# and VisualScript. 
                                        The engine emphasizes a scene system, facilitating modular and reusable game elements. With a 
                                        user-friendly interface and a dedicated community, Godot provides a collaborative and accessible 
                                        platform for game developers of various skill levels. Its open-source nature encourages continual 
                                        improvement, making it a popular choice for indie developers seeking a free and feature-rich game 
                                        ssdevelopment environment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="services-row-two">
                    
                    <div class="services-ytvids-container">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/QKgTZWbwD1U?si=7tL20_F0B2-JCD_O" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            <div class="first-p">
                <p>
                    Additionally, my journey into game development has led me to explore the renowned <strong>Unreal Engine</strong>. While 
                    my direct experience with Unreal Engine is yet to unfold, its reputation as a powerhouse in the 
                    industry for stunning graphics and realistic simulations has fueled my desire to delve into its 
                    intricacies. The extensive knowledge gathered through research and industry insights has positioned me 
                    on the cusp of embracing Unreal Engine as the next frontier in my quest for mastery within the game 
                    development landscape. <br><br>
                </p>
            </div>
            <div class="services-p-container">
                <div class="services-row-one">
                    <div class="card" onclick="this.classList.toggle('clicked')">
                        <div class="card-inner">
                            <div class="card-face front">
                                <div id="services-logo-container">
                                    <img src="Assets/Images/Services/unreal logo.png" alt="unreal">
                                </div>
                            </div>
                            <div class="card-face back">
                                <div class="card-p-container">
                                    <p>
                                        <b>Unreal Engine</b> stands as a robust and widely utilized game development engine renowned 
                                        for its cutting-edge graphics, versatility, and extensive feature set. Developed by 
                                        Epic Games, Unreal Engine is employed for creating high-quality 2D and 3D games, simulations, 
                                        architectural visualizations, and virtual reality experiences. Known for its photorealistic 
                                        rendering capabilities and advanced physics engine, Unreal Engine is favored by both indie 
                                        developers and major studios. The engine employs C++ and a visual scripting language, Blueprints, 
                                        allowing developers to craft intricate game logic without extensive coding. Unreal Engine's 
                                        Blueprint system provides a user-friendly interface for non-programmers, making it accessible to 
                                        a broad range of creators. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="services-row-two">
                    
                    <div class="services-ytvids-container">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/DXDe-2BC4cE?si=mEIaKDlssk_zl_03" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <div class="first-p">
                <p>
                    In reflecting upon this multifaceted journey encompassing Unity 3D, Godot, and the anticipation 
                    surrounding Unreal Engine, my portfolio emerges as a testament to unwavering passion, dedication to 
                    continuous learning, and the fusion of creativity with technology. As I present my services, I extend 
                    an invitation to join me on this dynamic expedition where each project is an opportunity to push 
                    boundaries, innovate, and contribute meaningfully to the ever-evolving landscape of digital entertainment.
                </p>
            </div>
        </div>
    </div>
    `;
    
}

// Add an event listener to the "Overview" link
var GameDevLink = document.querySelector('#services-navbar a[href="#GameDev"]');
if (GameDevLink) 
{
    GameDevLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        showGameDevDetails(); // Call the function to show overview details
    });
    // Get all the links inside #row-one-container
    const links = document.querySelectorAll('#services-navbar a');

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


// Function to change the content of row two when "3D Modeling" link is clicked
function show3DModelDetails() 
{
    var serviceCon = document.getElementById('services-content-container1');
    serviceCon.innerHTML = `
    <div class="services-text-container">
        <div class="h1-container"><b>3D Modeling</b></div>
        <div class="p-container">

            <div class="first-p">
                <p>
                Growing up with a profound love for the arts, my journey into the world of 3D modeling unfolded during my college years, 
                almost leading me to pursue a degree in architecture. The catalyst for my exploration was <strong>SketchUp</strong>, a 
                versatile design tool that became an integral part of my academic endeavors. SketchUp's user-friendly interface allowed 
                me to seamlessly translate my creative ideas into tangible 3D models, making my thesis project a testament to the synergy 
                between my passion for art and the practicality of this software. <br><br>
                </p>
            </div>
            <div class="services-p-container">
                <div class="services-row-one">
                    <div class="card" onclick="this.classList.toggle('clicked')">
                        <div class="card-inner">
                            <div class="card-face front">
                                <div id="services-logo-container">
                                    <img src="Assets/Images/Services/sketchup logo.png" alt="sketchup">
                                </div>
                            </div>
                            <div class="card-face back">
                                <div class="card-p-container">
                                    <p>
                                        <b>SketchUp</b> is a versatile and user-friendly 3D modeling software that has become a cornerstone in the design and 
                                        architectural industries. Developed by Trimble, SketchUp allows users to effortlessly create detailed and precise 3D 
                                        models, making it a popular choice for architects, designers, and hobbyists alike. Its intuitive interface and 
                                        accessible tools enable the translation of creative concepts into tangible digital representations, facilitating the 
                                        visualization of architectural projects, interior designs, and various other spatial ideas. With its widespread use 
                                        and compatibility, SketchUp has proven to be an indispensable tool for professionals and enthusiasts seeking a 
                                        powerful yet approachable solution for 3D modeling and design.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="services-row-two">
                    
                    <div class="services-ytvids-container">
                        <iframe src="https://www.youtube.com/embed/fq5D-PPo658?si=Pzu305l4Gzto-4-3" frameborder="0" autoplay></iframe>
                    </div>
                </div>
            </div>

            <div class="first-p">
                <p>
                The adventure continued with <strong>Blender 3D</strong>, a more complex but equally exhilarating platform. As a core 
                component of my thesis project, Blender pushed the boundaries of my creativity and technical skills. The intricacies of 
                Blender opened up a world of possibilities, challenging me to think outside the conventional norms of 3D modeling. 
                While the learning curve was steep, the joy of mastering new techniques and approaches made the process immensely 
                rewarding. Embracing the challenges presented by Blender, I discovered a profound sense of accomplishment in overcoming 
                hurdles and evolving as a 3D artist. <br><br>
                </p>
            </div>

            <div class="services-p-container">
                <div class="services-row-one">
                    <div class="card" onclick="this.classList.toggle('clicked')">
                        <div class="card-inner">
                            <div class="card-face front">
                                <div id="services-logo-container">
                                    <img src="Assets/Images/Services/blender logo.png" alt="blender">
                                </div>
                            </div>
                            <div class="card-face back">
                                <div class="card-p-container">
                                    <p>
                                    <b>Blender</b> stands as a powerful and open-source 3D creation suite, encompassing a comprehensive range of tools for 
                                    modeling, animation, rendering, and more. Developed by the Blender Foundation, this sophisticated software caters to 
                                    a diverse user base, including artists, animators, and game developers. Renowned for its feature-rich capabilities, 
                                    Blender supports intricate 3D modeling projects, animation sequences, and realistic rendering, making it a preferred 
                                    choice for both professionals and enthusiasts. Its expansive functionality, coupled with a passionate and 
                                    collaborative community, positions Blender as a dynamic and accessible platform for creative individuals seeking a 
                                    versatile toolset for diverse visual projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="services-row-two">
                    
                    <div class="services-ytvids-container">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/sAEzLHmH2rM?si=-ZwmoLaUC9V--haj" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            <div class="first-p">
                <p>
                Enter <strong>Mixamo</strong>, a revelation in the realm of game development. Intrigued by its capabilities as a 3D 
                character builder with animation features, I immersed myself in the world of creating characters for games. Maximo's 
                intuitive interface and powerful tools allowed me to breathe life into my gaming projects, adding a new dimension to my 
                creative pursuits. Eager to deepen my understanding of Maximo's capabilities, I am enthusiastic about further exploring 
                its potential and incorporating its features into future gaming endeavors. <br><br>
                </p>
            </div>
            <div class="services-p-container">
                <div class="services-row-one">
                    <div class="card" onclick="this.classList.toggle('clicked')">
                        <div class="card-inner">
                            <div class="card-face front">
                                <div id="services-logo-container">
                                    <img src="Assets/Images/Services/mixamo logo.png" alt="mixamo">
                                </div>
                            </div>
                            <div class="card-face back">
                                <div class="card-p-container">
                                    <p>
                                    <b>Mixamo</b> is an online platform and service that provides a robust solution for character animation in the realm of 3D 
                                    design and game development. Acquired by Adobe, Mixamo offers a vast library of pre-animated 3D characters and motions 
                                    that users can easily customize and integrate into their projects. Through an intuitive interface, designers and 
                                    developers can seamlessly blend and adapt animations to suit specific needs, saving valuable time and resources. 
                                    Mixamo's automation and versatility have made it a valuable asset for those in the gaming, animation, and virtual 
                                    reality industries, streamlining the often complex and time-consuming process of character animation within the broader 
                                    3D design landscape.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="services-row-two">
                    
                    <div class="services-ytvids-container">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/tvUBEkg4y48?si=9TPLsSQSN9EF9o3m" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <div class="first-p">
                <p>
                In essence, my journey through SketchUp, Blender 3D, and Maximo represents a continual evolution driven by a passion for 
                the arts and a relentless pursuit of creative excellence. These 3D modeling tools have not only been instrumental in 
                shaping my academic and professional path but have also become vehicles for self-expression and innovation. As I navigate 
                this dynamic landscape, my commitment to mastering these tools and pushing the boundaries of creative expression remains 
                unwavering.
                </p>
            </div>
        </div>
    </div>
    `;
    
}

// Add an event listener to the "3D Model" link
var ModeLink = document.querySelector('#services-navbar a[href="#3DModel"]');
if (ModeLink) 
{
    ModeLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        show3DModelDetails(); // Call the function to show overview details
    });
}



// Function to change the content of row two when "3D Modeling" link is clicked
function showGrapDesDetails() 
{
    var serviceCon = document.getElementById('services-content-container1');
    serviceCon.innerHTML = `
    <div class="services-text-container">
        <div class="h1-container"><b>Graphics Designing</b></div>
        <div class="p-container">

            <div class="first-p">
                <p>
                Venturing beyond the confines of traditional artistry, I've seamlessly integrated my skills into the dynamic realm of digital arts 
                and photo editing, broadening the scope of my creative endeavors. A standout in my arsenal of digital artistic tools is the 
                versatile <strong>Adobe Photoshop</strong>, a powerhouse in photo editing with unparalleled capabilities. Adobe Photoshop serves as the canvas 
                through which I bring digital compositions to life, allowing me to manipulate, enhance, and refine images with precision. While my 
                journey with Photoshop is marked by continuous growth rather than absolute mastery, it has proven instrumental in the development 
                of image sprites for the applications and games I'm deeply involved in. The allure of exploring Photoshop's multifaceted features 
                propels me to persistently enhance my proficiency, driven by an unwavering commitment to pushing the boundaries of creative 
                expression. <br><br>
                </p>
            </div>
            <div class="services-p-container">
                <div class="services-row-one">
                    <div class="card" onclick="this.classList.toggle('clicked')">
                        <div class="card-inner">
                            <div class="card-face front">
                                <div id="services-logo-container">
                                    <img src="Assets/Images/Services/photoshop logo.png" alt="photoshop">
                                </div>
                            </div>
                            <div class="card-face back">
                                <div class="card-p-container">
                                    <p>
                                    <b>Adobe Photoshop</b> is a preeminent and industry-standard image editing software that revolutionizes the creative landscape with its 
                                    comprehensive suite of tools. Developed by Adobe Inc., Photoshop is a powerhouse for digital artists, photographers, and designers 
                                    alike. It enables users to manipulate, enhance, and retouch images with unparalleled precision, offering features such as layers, 
                                    filters, and advanced editing capabilities. Renowned for its versatility, Photoshop is a go-to solution for tasks ranging from basic 
                                    photo retouching to intricate graphic design and composition. Its intuitive interface, coupled with a vast array of functionalities, 
                                    makes it an indispensable tool for crafting visually stunning and professionally polished images across various creative disciplines.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="services-row-two">
                    
                    <div class="services-ytvids-container">
                        <iframe src="https://www.youtube.com/embed/VseIS2-YAi0?si=Fg13PWzpyB_PcW3O" frameborder="0" autoplay></iframe>
                    </div>
                </div>
            </div>
            <div class="first-p">
                <p>
                Diversifying my toolkit even further, I leverage a multitude of applications for digital arts, image, and video editing, including 
                but not limited to Ibis Paint, Flipaclip, Paint, Canva, CapCut, InShot, and others. This extensive repertoire equips me to deliver a 
                spectrum of creative services tailored to the unique demands of my clientele. From crafting intricate digital artworks to seamlessly 
                editing and enhancing videos, these applications stand as indispensable assets, enabling me to weave a narrative of visual excellence. My dedication to mastering these tools remains unwavering, ensuring that each project I undertake is imbued with innovation, creativity, and a commitment to delivering captivating and impactful visual content.
                </p>
            </div>
        </div>
    </div>
    `;
    
}

// Add an event listener to the "Graphics Design" link
var GrapLink = document.querySelector('#services-navbar a[href="#GrapDes"]');
if (GrapLink) 
{
    GrapLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        showGrapDesDetails(); // Call the function to show overview details
    });
}



// Function to change the content of row two when "Website Development" link is clicked
function shoWebdevDetails() 
{
    var serviceCon = document.getElementById('services-content-container1');
    serviceCon.innerHTML = `
    <div class="services-text-container">
        <div class="h1-container"><b>Website Development</b></div>
        <div class="p-container">

            <div class="first-p">
                <p>
                In the world of IT, being flexible is crucial, so I've also delved into website development. I've learned to create websites like the 
                one you're on now, using basic elements like <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>. These are the building blocks that help me build websites 
                based on specific needs or my own creative ideas. Whether it's a simple and functional site or something more unique, I'm here to 
                create websites that match what the client is looking for. <br><br>
                </p>
            </div>
            <div class="services-p-container">
                <div class="services-row-three">
                    <div class="card" onclick="this.classList.toggle('clicked')">
                        <div class="card-inner">
                            <div class="card-face front">
                                <div id="services-squarelogo-container">
                                    <img src="Assets/Images/Services/html logo.png" alt="html">
                                </div>
                            </div>
                            <div class="card-face back">
                                <div class="card-p-container">
                                    <p>
                                    HTML, or <b>Hypertext Markup Language</b>, is the fundamental building block of web development, serving as the standard markup language 
                                    used to structure content on the World Wide Web. Developed by the World Wide Web Consortium (W3C), HTML provides a set of elements 
                                    and tags that define the structure and layout of web documents. It allows developers to create a hierarchical structure of text, 
                                    images, links, forms, and multimedia elements, shaping the visual and interactive aspects of websites. HTML is essential for 
                                    creating the skeleton of web pages, organizing information, and facilitating seamless navigation. Its simplicity, versatility, and 
                                    compatibility with other web technologies make HTML a foundational language for anyone entering the field of web development.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="services-row-three">
                    <div class="card" onclick="this.classList.toggle('clicked')">
                        <div class="card-inner">
                            <div class="card-face front">
                                <div id="services-squarelogo-container">
                                    <img src="Assets/Images/Services/css logo.png" alt="css">
                                </div>
                            </div>
                            <div class="card-face back">
                                <div class="card-p-container">
                                    <p>
                                        CSS, or <b>Cascading Style Sheets</b>, is a crucial web technology used in conjunction with HTML to control the visual presentation and 
                                        layout of web pages. Developed by the World Wide Web Consortium (W3C), CSS enables developers to define the appearance of HTML 
                                        elements, such as fonts, colors, spacing, and positioning. By separating the structure (defined by HTML) from the style (defined by 
                                        CSS), developers can create consistent and visually appealing designs across multiple pages of a website. CSS employs a cascading 
                                        nature, allowing styles to be inherited or overridden based on specificity and source order. With its power to enhance the 
                                        aesthetic and responsive aspects of web design, CSS plays a pivotal role in creating engaging and user-friendly online experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="services-row-three">
                    <div class="card" onclick="this.classList.toggle('clicked')">
                        <div class="card-inner">
                            <div class="card-face front">
                                <div id="services-squarelogo-container">
                                    <img src="Assets/Images/Services/js logo.png" alt="js">
                                </div>
                            </div>
                            <div class="card-face back">
                                <div class="card-p-container">
                                    <p>
                                        <b>JavaScript</b> is a versatile and widely-used programming language that primarily operates as a client-side scripting language in web 
                                        browsers. Developed by Netscape, it enables developers to create dynamic and interactive content within web pages. JavaScript is 
                                        integral to modern web development, allowing for the manipulation of HTML and CSS, handling user interactions, and facilitating 
                                        asynchronous communication with servers through AJAX. With its event-driven and object-oriented nature, JavaScript empowers developers 
                                        to build responsive and engaging web applications. Beyond the browser, JavaScript has expanded its reach to server-side development 
                                        with environments like Node.js, showcasing its adaptability and ubiquity in the realm of software development.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div class="first-p">
                    <p>
                        In addition to my proficiency in fundamental web technologies like HTML, CSS, and JavaScript, I am well-versed in the utilization 
                        of <strong>WordPress</strong>. WordPress is a popular and user-friendly content management system (CMS) that facilitates the creation and management 
                        of websites, offering a range of customizable themes and plugins. While my primary focus has been on hand-coding websites to ensure 
                        tailored solutions, I acknowledge the widespread use and advantages of WordPress in simplifying the website development process. 
                        Although I don't typically rely on WordPress for my projects, I am open to expanding my expertise in it, recognizing its prevalence 
                        in the industry and the potential it holds for meeting specific client requirements. This flexibility underscores my commitment to 
                        continuously adapting and enhancing my skill set to cater to diverse needs and stay current with evolving technological trends.      
                    </p>
                </div>
            <div class="services-p-container">
                <div class="services-row-one">
                    <div class="card" onclick="this.classList.toggle('clicked')">
                        <div class="card-inner">
                            <div class="card-face front">
                                <div id="services-logo-container">
                                    <img src="Assets/Images/Services/wordpress logo.png" alt="wordpress">
                                </div>
                            </div>
                            <div class="card-face back">
                                <div class="card-p-container">
                                    <p>
                                    <b>WordPress</b> is a widely-used and highly popular open-source content management system (CMS) that simplifies the process of 
                                    creating and managing websites. Initially developed as a blogging platform, WordPress has evolved into a versatile tool for building 
                                    a variety of websites, from simple blogs to complex e-commerce platforms and corporate websites. It features an intuitive and 
                                    user-friendly interface, allowing users to create and customize their websites without extensive coding knowledge. WordPress offers a 
                                    vast library of themes and plugins that enhance functionality and design, making it a go-to choice for individuals, businesses, and 
                                    developers seeking an efficient and flexible platform for web development. Its widespread adoption, strong community support, and 
                                    continuous updates contribute to its status as one of the most popular CMS options.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="services-row-two">
                    
                    <div class="services-ytvids-container">
                        <iframe src="https://www.youtube.com/embed/cT4NlI00hMw?si=iN6AD1OyBl3gNIiV" frameborder="0" autoplay></iframe>
                    </div>
                </div>
            </div>
            <div class="first-p">
                <p>
                    In conclusion, my array of services encompasses a dynamic fusion of website development and a commitment to continuously evolving in the ever-changing landscape of Information Technology. From crafting visually compelling 
                    user-friendly websites using technologies like HTML, CSS, and JavaScript, I am dedicated to delivering high-quality and innovative solutions tailored to your unique needs. Whether it's unleashing creativity through digital 
                    tools or navigating the intricacies of website development, my services are anchored in a passion for excellence, adaptability, and a 
                    relentless pursuit of enhancing skills to meet the diverse demands of the digital realm. Your satisfaction and the creation of 
                    impactful and visually engaging outcomes remain at the core of my commitment to delivering top-notch services.
                </p>
            </div>
        </div>
    </div>
    `;
    
}

// Add an event listener to the "Website Development" link
var WebDevLink = document.querySelector('#services-navbar a[href="#WebDev"]');
if (WebDevLink) 
{
    WebDevLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        shoWebdevDetails(); // Call the function to show overview details
    });
}



// Function to change the content of row two when "Website Development" link is clicked
function showSysaDetails() 
{
    var serviceCon = document.getElementById('services-content-container1');
    serviceCon.innerHTML = `
    <div class="services-text-container">
        <div class="h1-container"><b>System Administration</b></div>
        <div class="p-container">

            <div class="first-p">
                <p>
                Venturing beyond the confines of traditional artistry, I've seamlessly integrated my skills into the dynamic realm of digital arts 
                and photo editing, broadening the scope of my creative endeavors. A standout in my arsenal of digital artistic tools is the 
                versatile <strong>Adobe Photoshop</strong>, a powerhouse in photo editing with unparalleled capabilities. Adobe Photoshop serves as the canvas 
                through which I bring digital compositions to life, allowing me to manipulate, enhance, and refine images with precision. While my 
                journey with Photoshop is marked by continuous growth rather than absolute mastery, it has proven instrumental in the development 
                of image sprites for the applications and games I'm deeply involved in. The allure of exploring Photoshop's multifaceted features 
                propels me to persistently enhance my proficiency, driven by an unwavering commitment to pushing the boundaries of creative 
                expression. <br><br>
                </p>
            </div>
            <div class="services-p-container">
                <div class="services-row-one">
                    <div class="card" onclick="this.classList.toggle('clicked')">
                        <div class="card-inner">
                            <div class="card-face front">
                                <div id="services-logo-container">
                                    <img src="Assets/Images/Services/google admin logo.png" alt="google admin logo">
                                </div>
                            </div>
                            <div class="card-face back">
                                <div class="card-p-container">
                                    <p>
                                    <b>Google Admin</b> is a web-based console provided by Google Workspace (formerly known as G Suite) that allows administrators to manage and 
                                    control various aspects of their organization's Google services and applications. It serves as a centralized hub for managing user 
                                    accounts, configuring security settings, and overseeing the deployment of Google Workspace services such as Gmail, Google Drive, 
                                    Google Calendar, and more. Google Admin provides administrators with tools to manage user access, set up security policies, monitor 
                                    device usage, and configure organizational settings. It plays a critical role in maintaining the security, efficiency, and overall 
                                    functionality of Google Workspace within an organization, offering a user-friendly interface for administrators to handle 
                                    administrative tasks and ensure smooth collaboration and communication among users.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="services-row-two">
                    
                    <div class="services-ytvids-container">
                        <iframe src="https://www.youtube.com/embed/5EpSg1ZqPVQ?si=CAn7Zj0NxkG0FIlS" frameborder="0" autoplay></iframe>
                    </div>
                </div>
            </div>
            <div class="first-p">
                <p>
                Diversifying my toolkit even further, I leverage a multitude of applications for digital arts, image, and video editing, including 
                but not limited to Ibis Paint, Flipaclip, Paint, Canva, CapCut, InShot, and others. This extensive repertoire equips me to deliver a 
                spectrum of creative services tailored to the unique demands of my clientele. From crafting intricate digital artworks to seamlessly 
                editing and enhancing videos, these applications stand as indispensable assets, enabling me to weave a narrative of visual excellence. My dedication to mastering these tools remains unwavering, ensuring that each project I undertake is imbued with innovation, creativity, and a commitment to delivering captivating and impactful visual content.
                </p>
            </div>
            <div class="services-p-container">
                <div class="services-row-one">
                    <div class="card" onclick="this.classList.toggle('clicked')">
                        <div class="card-inner">
                            <div class="card-face front">
                                <div id="services-logo-container">
                                    <img src="Assets/Images/Services/azure logo.png" alt="azure logo">
                                </div>
                            </div>
                            <div class="card-face back">
                                <div class="card-p-container">
                                    <p>
                                        <b>Azure Admin</b>, within the Microsoft Azure cloud platform, refers to the role responsible for configuring, monitoring, and 
                                        maintaining the diverse array of cloud services offered by Azure. This includes tasks such as creating and managing virtual 
                                        machines, configuring networking, implementing security measures, and optimizing resource usage. Azure Admins utilize tools like 
                                        the Azure Portal and command-line interfaces to perform administrative functions, ensuring the efficient and secure operation of 
                                        an organization's cloud infrastructure. Additionally, they play a crucial role in enforcing governance policies, managing user 
                                        access, and maintaining compliance with organizational standards, contributing to the overall effectiveness of Azure services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="services-row-two">
                    
                    <div class="services-ytvids-container">
                        <iframe src="https://www.youtube.com/embed/YfZ0zk5Zzcw?si=0WHwxQabvov0MP3N" frameborder="0" autoplay></iframe>
                    </div>
                </div>
            </div>
            <div class="first-p">
                <p>
                Diversifying my toolkit even further, I leverage a multitude of applications for digital arts, image, and video editing, including 
                but not limited to Ibis Paint, Flipaclip, Paint, Canva, CapCut, InShot, and others. This extensive repertoire equips me to deliver a 
                spectrum of creative services tailored to the unique demands of my clientele. From crafting intricate digital artworks to seamlessly 
                editing and enhancing videos, these applications stand as indispensable assets, enabling me to weave a narrative of visual excellence. My dedication to mastering these tools remains unwavering, ensuring that each project I undertake is imbued with innovation, creativity, and a commitment to delivering captivating and impactful visual content.
                </p>
            </div>
        </div>
    </div>
    `;
    
}

// Add an event listener to the "Website Development" link
var SysadLink = document.querySelector('#services-navbar a[href="#SysAd"]');
if (SysadLink) 
{
    SysadLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        showSysaDetails(); // Call the function to show overview details
    });
}