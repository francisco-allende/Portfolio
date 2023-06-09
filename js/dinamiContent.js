export function getContent(){
    return  ` 
    <!-- Header -->
    <header class="header">
        <div class="container">
            <h1 class="text-center titles">Welcome to my Front-end Portfolio</h1>
            <p class="text-center" id="introduction-text">Hi. I’m Francisco, a Front-end Developer with 2 years commercial experience creating WordPress and coded websites for clients all over the US.</p>
        </div>
    </header>

    <!-- About me section-->
    <section class="about-section">
        <div class="container" id="about-me">
            <h2 class="text-center titles">About Me</h2>
            <div id="about-div-father">
                <img src="./assets/perfil.jpg" id="about-picture"/>
                <div id="about-div-child">
                    <p>I am currently in my final year of studies at UTN University, based in Argentina. In addition to my studies, I also have experience in digital marketing including ads campaign with successful results.</p>
                
                    <p>As a developer, I am passionate about delivering the best results to my clients. I take pride in building websites that not only look great but also drive organic traffic and improve online visibility. My expertise lies in creating websites that are not only aesthetically pleasing but also provide an optimal user experience.</p>
                        
                    <p> I am dedicated to constantly learning and growing my skillset to provide my clients with cutting-edge solutions that can help them achieve their business goals. So, if you're looking for a professional who can help you build a website that stands out and drives results, I am the developer for you!</p>
                </div>
            </div>
        </div>
    </section>

    <!--Skill Cards-->
    <section class="card-section">
        <div class="container" id="skills">
            <h2 class="text-center titles">Professional Skills</h2>
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <p class="text-center"><img class="card-img-top" src="./assets/feature__web.png" alt="Card image cap"></p>
                        <div class="card-body">
                            <h4 class="card-title">Front-end development</h4>
                            <p class="card-text">Responsive websites that optimize the user experience.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <p class="text-center"><img class="card-img-top" src="./assets/feature__tools.png" alt="Card image cap"><p>
                        <div class="card-body">
                            <h4 class="card-title">Performance, SEO & Ads </h4>
                            <p class="card-text">Maximize website speed, make it easily discoverable, and user reach.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <p class="text-center"><img class="card-img-top" src="./assets/feature__wp.png" alt="Card image cap"></p>
                        <div class="card-body">
                            <h4 class="card-title">WordPress websites</h4>
                            <p class="card-text">Utilize the most widely used platform to manage your website.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Main -->
    <main>
        <h2 id="work-title">Featured Work</h2>
        <div class="container">
            <div class="row" id="first-work">
              <div class="col-md-4">
                <aside>
                  <div>
                    <h2>Come to Galapagos</h2>
                    <p>As a Frontend Developer with a passion for UX/UI design, I am pleased to have contributed to Come To Galápagos' mission of providing unforgettable travel experiences. Through my work on the company's website, I strive to create a seamless user experience that showcases the beauty and adventure of the Galápagos Islands.</p>
                    <p>Come To Galápagos was looking for a rebrand, redesign and launch a campaign that captures the essence of their custom Galápagos tours. I've developed a new website design with fresh content.</p>
                    <p>The Galápagos team is delighted with the rebrand!</p>
                    <a href="https://cometogalapagos.com/" target="_blank" class="btn btn-primary" id="btn-galapagos">Visit the Website</a>
                  </div>
                </aside>
              </div>
              <div class="col-md-8">
                <video autoplay loop muted id="video-galapagos">
                    <source src="./assets/galapagos.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row" id="second-work">
                <div class="col-md-8">
                    <img src="./assets/keilim.png" class="img-fluid" alt="Responsive image">
                </div>
              <div class="col-md-4">
                <aside>
                  <div>
                    <h2>Keillim</h2>
                    <p>As a web designer, I am proud to have created a landing page for Keillim's Policy Toolkit. This toolkit helps Jewish organizations establish policies that promote safer communities, and my donation feature helps facilitate their aim. </p>
                    <p>It was a privilege to contribute to such a noble cause.</p>
                    <a href="https://keilim.org/" target="_blank" class="btn btn-primary">Visit the Website</a>
                  </div>
                </aside>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row" id="third-work">
              <div class="col-md-4">
                <aside>
                  <div>
                    <h2>Harlem Dowling – West Side Center</h2>
                    <p>
                        Not only do I take pleasure in programming, but I also possess a penchant for refining digital marketing strategies, and that's what I did while working with Harlem-Dowling – West Side Center for Children & Family Services to help improve their online presence. 
                    </p>
                  </div>
                </aside>
              </div>
              <div class="col-md-8">
                <img src="./assets/harlem.png" class="img-fluid" alt="Responsive image">
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row" id="fourth-work">
                <div class="col-md-8">
                    <img src="./assets/ila.png" class="img-fluid" alt="Responsive image">
                </div>
              <div class="col-md-4">
                <aside>
                  <div>
                    <h2>Independent Living Association</h2>
                    <p> 
                        I had the opportunity to work with The Independent Living Association (ILA) to enhance their online presence. By implementing effective SEO and brand strategies, and utilizing Google Analytics, I was able to improve their search rankings and web performance. 
                    </p>
                    <a href="https://ilaonline.org/" target="_blank" class="btn btn-primary">Visit the Website</a>
                  </div>
                </aside>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row" id="fifth-work">
              <div class="col-md-4">
                <aside>
                  <div>
                    <h2>GrantED</h2>
                    <p>
                        As a web designer for GrantED, I leveraged my expertise in programming. I've implemented backend services that enabled me to incorporate secure and efficient donation features. The end result was a user-friendly website that facilitated improved communication and support for Jewish Funders Network's important mission.
                    </p>
                    <a href="https://jgranted.org/" target="_blank" class="btn btn-primary" id="btn-granted">Visit the Website</a>
                  </div>
                </aside>
              </div>
              <div class="col-md-8">
                <img src="./assets/granted.png" class="img-fluid" alt="Responsive image">
              </div>
            </div>
          </div>
    </main>

     <!--Footer-->
     <footer class="bg-dark">
        <ul class="list-unstyled" id="menu_footer">
            <li class="footer_li"><a href="https://github.com/francisco-allende?tab=repositories" target="_blank" class="href_non_decoration">Github</a></li>
            
            <li class="footer_li"><a href="https://www.linkedin.com/in/franciscoallende/" taget="_blank" class="href_non_decoration" target="_blank">Linkedin</a></li>
            
            <li class="footer_li"><a href="mailto:franallende2000@gmail.com" class="href_non_decoration">Send email</li>
        </ul>
    </footer>`
}