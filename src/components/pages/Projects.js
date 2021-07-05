import React from 'react';
import '../../styles/Projects.css';

// images and gifs imports
import patientTracker from '../../assets/gifs/patienttrackergif.gif';
import movieNight from '../../assets/images/screenshot-movienight.png';
import regex from '../../assets/images/regex-url.png';
import mvcTech from '../../assets/images/mvctech.png';
import sql from '../../assets/gifs/sql_gif.gif';
import cat from '../../assets/gifs/categories.gif';
import noteTaker from '../../assets/gifs/notetaker_ppreview.gif';
import readMe from '../../assets/gifs/readme_preview.gif';
import teamPro from '../../assets/gifs/team_profile.gif';
import weatherApp from '../../assets/images/screenshot-weatherapp.png';
import passGen from '../../assets/images/screenshot-passgen.png';
import javaQuiz from '../../assets/images/screenshot-javaquiz.png';
import dayPlanner from '../../assets/images/screenshot-dayplanner.png';
import horiseon from '../../assets/images/horiseon_site.png';

export default function Projects() {
  return (
    <div class="container work-body" id="work">
    <h1 class="projectsTitle"><i class="fas fa-angle-double-right"></i> Projects</h1>
    <hr class="hrProjects"></hr>
    <div class="card customCard">
      <img class="card-img-top main-img-height" src={patientTracker} alt="patienttracker"/>
      <div class="card-body main-card-body d-flex flex-column">
        <h2 class="card-title"><ins>MVC Patient Tracker</ins></h2>
        <p class="card-text h5">Full-stack application following MVC paradigm for creating, updating, sorting and deleting patient records. Below are the links for the GitHub repository and webpage!</p>
      </div>
      <div class="card-footer">
        <div class="text-center mt-auto">
          <a target="_blank" rel="noreferrer" href="https://github.com/Captain63/patient-records-tracker" class="btn p-btn-color btn-lg  custom-length-pm" role="button" aria-pressed="true"><b>GitHub </b><i class="fab fa-github-square"></i></a>
          <a target="_blank" rel="noreferrer" href="https://patient-records-tracker.herokuapp.com" class="btn btn-secondary btn-lg  custom-length-sm" role="button" aria-pressed="true"><i class="fas fa-window-maximize"></i></a>
        </div>
      </div>
    </div>

    <div class="card customCard">
      <img class="card-img-top main-img-height" src={movieNight} alt="moivenightdoneright"/>
      <div class="card-body main-card-body d-flex flex-column">
        <h2 class="card-title"><ins>Movie Night.. Done Right</ins></h2>
        <p class="card-text h5">This assignment was my first group Project! Using <b class="html">html</b>, <b class="css">css</b>, and <b class="javascript">javascript</b> we made a movie catalog! Below are the links for the GitHub repository and webpage!</p>
      </div>
      <div class="card-footer">
        <div class="text-center mt-auto">
          <a target="_blank" rel="noreferrer" href="https://github.com/AustinJoo97/MovieNightDoneRight" class="btn p-btn-color btn-lg  custom-length-pm" role="button" aria-pressed="true"><b>GitHub </b><i class="fab fa-github-square"></i></a>
          <a target="_blank" rel="noreferrer" href="https://austinjoo97.github.io/MovieNightDoneRight/" class="btn btn-secondary btn-lg  custom-length-sm" role="button" aria-pressed="true"><i class="fas fa-window-maximize"></i></a>
        </div>
      </div>
    </div>
    <h1 class="assignmentsTitle" id="assignments">Assignments <i class="fas fa-angle-double-left"></i></h1>
    <hr class="hrAssignments"></hr>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col paddingTop">
        <div class="card h-100 customCard">
          <img src={regex} class="card-img-top group-img-height" alt="regex"/>
          <div class="card-body group-card-body d-flex flex-column">
            <h3 class="card-title "><ins>Regex Tutorial</ins></h3>
            <p class="card-text"> This is a tutorial describing how the regex for matching a URL works. Below is the repository for the Gist on Github!</p>
          </div>
          <div class="card-footer">
            <div class="text-center mt-auto">
              <a target="_blank" rel="noreferrer" href="https://gist.github.com/brandonfordd/2fc4ca41dec6a856e25334ac65ba7dac" class="btn p-btn-color btn-lg custom-length-pp" role="button" aria-pressed="true"><b>GitHub Gist </b><i class="fab fa-github-square"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="col paddingTop">
        <div class="card h-100 customCard">
          <img src={mvcTech} class="card-img-top group-img-height" alt="techblog"/>
          <div class="card-body group-card-body d-flex flex-column">
            <h3 class="card-title "><ins>MVC Techblog</ins></h3>
            <p class="card-text"> Building a full stack website for tech bloggers to post, update, and delete blogs! Below is the link to the Github and <b class="herkou">Heroku</b> page</p>
          </div>
          <div class="card-footer">
            <div class="text-center mt-auto">
              <a target="_blank" rel="noreferrer" href="https://github.com/brandonfordd/mvc_techblog" class="btn p-btn-color btn-lg custom-length-ps" role="button" aria-pressed="true"><b>GitHub </b><i class="fab fa-github-square"></i></a>
              <a target="_blank" rel="noreferrer" href="immense-lake-51774.herokuapp.com/" class="btn btn-secondary btn-lg custom-length-ss" role="button" aria-pressed="true"><span class="iconify" data-icon="simple-icons:heroku" data-inline="false"></span></a>
            </div>
          </div>
        </div>
      </div>
      <div class="col paddingTop">
        <div class="card h-100 customCard">
          <img src={sql} class="card-img-top group-img-height" alt="mysqltracker"/>
          <div class="card-body group-card-body d-flex flex-column">
            <h3 class="card-title "><ins>Employee Tracker</ins></h3>
            <p class="card-text">Using MySql we were task with designing a database for sorting and tracking employee! Below is the Github for more information</p>
          </div>
          <div class="card-footer">
            <div class="text-center mt-auto">
              <a target="_blank" rel="noreferrer" href="https://github.com/brandonfordd/sql_employee_tracker" class="btn p-btn-color btn-lg custom-length-pp" role="button" aria-pressed="true"><b>GitHub </b><i class="fab fa-github-square"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="col paddingTop">
        <div class="card h-100 customCard">
          <img src={cat} class="card-img-top group-img-height" alt="ecommercebackend"/>
          <div class="card-body group-card-body d-flex flex-column">
            <h3 class="card-title "><ins>E-Commerce Backend</ins></h3>
            <p class="card-text"> Using MySql we were task with building the back end for an e-commerce site using Express.js and Sequelize. Below is the GitHub repository for more information!</p>
          </div>
          <div class="card-footer">
            <div class="text-center mt-auto">
              <a target="_blank" rel="noreferrer" href="https://github.com/brandonfordd/e_commerce_backend" class="btn p-btn-color btn-lg custom-length-pp" role="button" aria-pressed="true"><b>GitHub </b><i class="fab fa-github-square"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="col paddingTop">
        <div class="card h-100 customCard">
          <img src={noteTaker} class="card-img-top group-img-height" alt="notetaker"/>
          <div class="card-body group-card-body d-flex flex-column">
            <h3 class="card-title "><ins>Express Note Taker</ins></h3>
            <p class="card-text">This is a Express Note taking application deployed on <b class="herkou">Heroku</b> to show backend server development! Below are the links for the GitHub repository and deploy <b class="herkou">Heroku</b> page!</p>
          </div>
          <div class="card-footer">
            <div class="text-center mt-auto">
              <a target="_blank" rel="noreferrer" href="https://github.com/brandonfordd/notetaker" class="btn p-btn-color btn-lg custom-length-ps" role="button" aria-pressed="true"><b>GitHub </b><i class="fab fa-github-square"></i></a>
              <a target="_blank" rel="noreferrer" href="https://intense-retreat-13384.herokuapp.com/" class="btn btn-secondary btn-lg custom-length-ss" role="button" aria-pressed="true"><span class="iconify" data-icon="simple-icons:heroku" data-inline="false"></span></a>
            </div>
          </div>
        </div>
      </div>
      <div class="col paddingTop">
        <div class="card h-100 customCard">
          <img src={readMe} class="card-img-top group-img-height" alt="readme_generator"/>
          <div class="card-body group-card-body d-flex flex-column">
            <h3 class="card-title "><ins>Readme Generator</ins></h3>
            <p class="card-text">Using <b class="node">node.js</b> and <b class="javascript">Javascript</b> you can generate custom readme files for any work flow. Below are the links for the GitHub repository for more information!</p>
          </div>
          <div class="card-footer">
            <div class="text-center mt-auto">
              <a target="_blank" rel="noreferrer" href="https://github.com/brandonfordd/readme_generator" class="btn p-btn-color btn-lg custom-length-pp" role="button" aria-pressed="true"><b>GitHub </b><i class="fab fa-github-square"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="col paddingTop">
        <div class="card h-100 customCard">
          <img src={teamPro} class="card-img-top group-img-height" alt="teamcard_generator"/>
          <div class="card-body group-card-body d-flex flex-column">
            <h3 class="card-title "><ins>Team Profile Generator</ins></h3>
            <p class="card-text">Using <b class="node">node.js</b> and <b class="javascript">Javascript</b> you can generate custom Team Profile html file to fit any work flow. Below are the links for the GitHub repository for more information!</p>
          </div>
          <div class="card-footer">
            <div class="text-center mt-auto">
              <a target="_blank" rel="noreferrer" href="https://github.com/brandonfordd/teamcard_generator" class="btn p-btn-color btn-lg custom-length-pp" role="button" aria-pressed="true"><b>GitHub </b><i class="fab fa-github-square"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="col paddingTop">
        <div class="card h-100 customCard  ">
          <img src={weatherApp} class="card-img-top group-img-height" alt="weather_app"/>
          <div class="card-body group-card-body d-flex flex-column">
            <h3 class="card-title"><ins>Weather Dashboard</ins></h3>
            <p class="card-text">This is a weather dashboard made with <b class="moment">OpenWeather Api</b>! Below are the links for the GitHub repository and webpage</p>
          </div>
          <div class="card-footer">
            <div class="text-center mt-auto">
              <a target="_blank" rel="noreferrer" href="https://github.com/brandonfordd/weather_app" class="btn p-btn-color btn-lg custom-length-ps" role="button" aria-pressed="true"><b>GitHub </b><i class="fab fa-github-square"></i></a>
              <a target="_blank" rel="noreferrer" href="https://brandonfordd.github.io/weather_app/" class="btn btn-secondary btn-lg custom-length-ss" role="button" aria-pressed="true"><i class="fas fa-window-maximize"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="col paddingTop">
        <div class="card h-100 customCard">
          <img src={passGen} class="card-img-top group-img-height" alt="password_generator"/>
          <div class="card-body group-card-body d-flex flex-column">
            <h3 class="card-title"><ins>Password Generator</ins></h3>
            <p class="card-text h">This is a password generator made with <b class="javascript">javascript</b>! Below are the links for the GitHub repository and webpage</p>
          </div>
          <div class="card-footer">
            <div class="text-center mt-auto">
              <a target="_blank" rel="noreferrer" href="https://github.com/brandonfordd/password_generator" class="btn p-btn-color btn-lg custom-length-ps" role="button" aria-pressed="true"><b>GitHub </b><i class="fab fa-github-square"></i></a>
              <a target="_blank" rel="noreferrer" href="https://brandonfordd.github.io/password_generator/" class="btn btn-secondary btn-lg  custom-length-ss" role="button" aria-pressed="true"><i class="fas fa-window-maximize"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="col paddingTop">
        <div class="card h-100 customCard">
          <img src={javaQuiz} class="card-img-top group-img-height" alt="javascript_quiz"/>
          <div class="card-body group-card-body d-flex flex-column">
            <h3 class="card-title"><ins>Javascript Quiz</ins></h3>
            <p class="card-text">This is a Javascript Quiz using only <b class="javascript">javascript</b>! Below are the links for the GitHub repository and webpage</p>
          </div>
          <div class="card-footer">
            <div class="text-center mt-auto">
              <a target="_blank" rel="noreferrer" href="https://github.com/brandonfordd/javascript_quiz" class="btn p-btn-color btn-lg custom-length-ps" role="button" aria-pressed="true"><b>GitHub </b><i class="fab fa-github-square"></i></a>
              <a target="_blank" rel="noreferrer" href="https://brandonfordd.github.io/javascript_quiz/" class="btn btn-secondary btn-lg custom-length-ss" role="button" aria-pressed="true"><i class="fas fa-window-maximize"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="col paddingTop">
        <div class="card h-100 customCard">
          <img src={dayPlanner} class="card-img-top group-img-height" alt="day_planner"/>
          <div class="card-body group-card-body d-flex flex-column">
            <h3 class="card-title"><ins>Day Planner</ins></h3>
            <p class="card-text">This is a day planner using <b class="javascript">Javascript</b> and <b class="moment">moment.js</b>! Below are the links for the GitHub repository and webpage</p>
          </div>
          <div class="card-footer">
            <div class="text-center mt-auto">
              <a target="_blank" rel="noreferrer" href="https://github.com/brandonfordd/day_planner" class="btn p-btn-color btn-lg custom-length-ps" role="button" aria-pressed="true"><b>GitHub </b><i class="fab fa-github-square"></i></a>
              <a target="_blank" rel="noreferrer" href="https://brandonfordd.github.io/day_planner/" class="btn btn-secondary btn-lg custom-length-ss" role="button" aria-pressed="true"><i class="fas fa-window-maximize"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="col paddingTop">
        <div class="card h-100 customCard">
          <img src={horiseon} class="card-img-top group-img-height" alt="horiseon_website"/>
          <div class="card-body group-card-body d-flex flex-column">
            <h3 class="card-title "><ins>Horison Site Refractment</ins></h3>
            <p class="card-text">This assignment was to <b class="refract">refract</b> a pre-made site called Horison! Below are the links for the GitHub repository and webpage!</p>
          </div>
          <div class="card-footer">
            <div class="text-center mt-auto">
              <a target="_blank" rel="noreferrer" href="https://github.com/brandonfordd/horiseon_refactor" class="btn p-btn-color btn-lg custom-length-ps" role="button" aria-pressed="true"><b>GitHub </b><i class="fab fa-github-square"></i></a>
              <a target="_blank" rel="noreferrer" href="https://brandonfordd.github.io/horiseon_refactor/" class="btn btn-secondary btn-lg custom-length-ss" role="button" aria-pressed="true"><i class="fas fa-window-maximize"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr></hr>
  </div>
  );
}
