import React, { useEffect } from 'react'
import './../../CSS/About.css'

export default function AboutUs() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="landing flex justify-center items-center w-full">
      </div>
      <div className="cards flex flex-col justify-center items-center w-11/12">
        <div className="ourStory">
          <h1 className="p-5 font-bold text-2xl text-center main-green">Our story</h1>
          <p className="md:text-lg text-lg font-medium">
            Our team of five programmers from the Orange Academy of Programming shared a common passion for coding and e-commerce. We wanted to create an exceptional online shopping experience that would stand out from the rest.

            We spent countless hours coding, testing, and refining our e-commerce site. Our main focus was on ensuring that our site was easy to use, with a sleek design and user-friendly interface. We also prioritized the security and speed of the checkout process, ensuring that our customers could make purchases quickly and safely.

            As we launched our site, we were thrilled to see that it was an instant hit among shoppers. Customers praised our wide selection of products and the convenience of our site. We continued to innovate, adding new features and functionalities that set us apart from our competitors.

            Our passion for programming drove us to constantly improve our e-commerce site. We listened to customer feedback and made changes accordingly, striving to create the best possible online shopping experience.

            Looking back, we're proud of what we accomplished as a team. Our e-commerce site became a huge success, and it was all thanks to our shared passion for programming and dedication to creating something exceptional.
          </p>
        </div>
      </div>


      <h1 className="text-center p-5 font-bold text-2xl main-green our-team">Our Team</h1>


      <div className="team flex flex-col md:flex-row gap-8 w-11/12">
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <img
            class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            // src={Bashar}
            alt="Bashar"
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-medium">
                “As a Full Stack Developer, I have a passion for creating dynamic and responsive web applications while utilizing a wide range of technologies to bring ideas to life.”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-sky-400"><a href="https://www.linkedin.com/in/bashar-omush-b12a06267/" target='_blank'>Bashar Al-Omoush</a></div>
              <div class="text-slate-700 dark:text-slate-500">
                Full Stack Devoloper, Jordan
              </div>
            </figcaption>
          </div>
        </figure>
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <img
            class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            // src={Iyad}
            alt="Iyad"
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-medium">
                “As a Full Stack Developer, I have a passion for creating dynamic and responsive web applications while utilizing a wide range of technologies to bring ideas to life.”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-sky-400"><a href="https://www.linkedin.com/in/iyad-raslan-4221591a1/" target='_blank'>Iyad Raslan</a></div>
              <div class="text-slate-700 dark:text-slate-500">
                Full Stack Devoloper, Jordan
              </div>
            </figcaption>
          </div>
        </figure>
      </div>

      <figure class="team my-8 md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 w-11/12">
        <img
          class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          // src={Omar}
          alt="Omar"
          width="384"
          height="512"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “As a Full Stack Developer, I have a passion for creating dynamic and responsive web applications while utilizing a wide range of technologies to bring ideas to life.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400"><a href="https://www.linkedin.com/in/omar-hassouna-97b76b1aa/" target="_blank">Omar Hassoneh</a></div>
            <div class="text-slate-700 dark:text-slate-500">
              Full Stack Devoloper, Jordan
            </div>
          </figcaption>
        </div>
      </figure>

      <div className="team flex flex-col md:flex-row gap-8 mb-8 w-11/12">
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <img
            class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            // src={Tamara}
            alt="Tamara"
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-medium">
                “As a Full Stack Developer, I have a passion for creating dynamic and responsive web applications while utilizing a wide range of technologies to bring ideas to life.”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-sky-400"><a href="https://github.com/tamarabanighanem" target="_blank">Tamara Bani-Ghanem</a></div>
              <div class="text-slate-700 dark:text-slate-500">
                Full Stack Devoloper, Jordan
              </div>
            </figcaption>
          </div>
        </figure>
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          <img
            class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            // src={Amro}
            alt="Amro"
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-medium">
                “As a Full Stack Developer, I have a passion for creating dynamic and responsive web applications while utilizing a wide range of technologies to bring ideas to life.”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-sky-400"><a href="https://github.com/amrokh1996" target="_blank">Amro Al-Khazaleh</a></div>
              <div class="text-slate-700 dark:text-slate-500">
                Full Stack Devoloper, Jordan
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
}