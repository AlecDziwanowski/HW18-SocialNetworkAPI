<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<!-- <br /> -->
<div align="center">
  <!-- <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

<h3 align="center">Note Taker</h3>

  <p align="center">
    A web application with a backend built in Express.js that maintains notes written and saved by the user.
    <br />
    <a href="https://github.com/AlecDziwanowski/HW13-E-Commerce"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <!-- was: "View Demo" -->
    <a href="https://drive.google.com/file/d/1XoUI0SEbfY81d4BTjqYhYeYGj_4gHcI2/view">View Demo</a>
    ·
    <a href="https://github.com/AlecDziwanowski/HW13-E-Commerce/issues">Report Bug</a>
    ·
    <a href="https://github.com/AlecDziwanowski/HW13-E-Commerce/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
Backend for an e-commerce web application, built in Express.js. The front end for this application has not yet been deployed. The backend creates a seeded database that can accept CRUD operations from the user.

### Application Demonstration GIF 
(for a video use demo link above)

![Team Profile Generator GIF](./Assets/functionalityGIF.gif)

<!-- Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `github_username`, `repo_name`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `project_title`, `project_description` -->

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With
<!-- * [Next.js](https://nextjs.org/)
* [React.js](https://reactjs.org/)
* [Vue.js](https://vuejs.org/)
* [Angular](https://angular.io/)
* [Svelte](https://svelte.dev/)
* [Laravel](https://laravel.com) 
* [JQuery](https://jquery.com) -->
<!-- * [NPM - Inquirer](https://www.npmjs.com/package/inquirer) -->
<!-- * [NPM - Jest](https://www.npmjs.com/package/jest) -->
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [MySQL2](https://www.npmjs.com/package/mysql)
* [Sequelize](https://www.npmjs.com/package/sequelize)
* [dotenv](https://www.npmjs.com/package/dotenv)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
### Prerequisites
Install node.js at the url in the "Built With" section above. Then, using the command line, run the commands listed in the "Installation" section below.

### Installation
<!-- 1. Get a free API Key at [https://example.com](https://example.com) -->
1. Clone the repo
    ```sh
    git clone https://github.com/AlecDziwanowski/HW13-E-Commerce.git
    ```
2. Install NPM packages, including express.js
    ```sh
    npm install
    ```
3. Initialize MySQL from command line
    ```sh
    mysql -u root -p
    ```
4. Enter password for MySQL server

5. Drop database
    ```sh
    DROP DATABASE IF EXISTS ecommerce_db;
    ```
6. Create new database
    ```sh
    CREATE DATABASE ecommerce_db;
    ```
7. Quit MySQL command line prompt
    ```sh
    quit
    ```
8. Create .env file with the database name (ecommerce_db) and your username and password for MySQL server

9. Seed database
    ```sh
    npm run seed
    ```
10. Run server
    ```sh
    npm run start
    ```
<!-- 4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ``` -->

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage
Full-scale functionality can be viewed at the demo link at the top of this page.

Use a program for interacting with and designing HTTP-based APIs, such as Insomnia, to view endpoints for database access and CRUD operations.

<!-- _For more examples, please refer to the [Documentation](https://example.com)_ -->

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap
### Future Modifications
- Build frontend

<!-- - [ ] Nested Feature -->

See the [open issues](https://github.com/AlecDziwanowski/HW13-E-Commerce/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thank you!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License
Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact
Alec Dziwanowski - [LinkedIn](https://www.linkedin.com/in/alecdziwanowski/) and [GitHub](https://github.com/AlecDziwanowski) <br>
Project Link: [GitHub Repo](https://github.com/AlecDziwanowski/HW13-E-Commerce)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
* My wife, for the support necessary to achieve a new reality.
* [othneildrew/Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/AlecDziwanowski/HW13-E-Commerce.svg?style=for-the-badge
[contributors-url]: https://github.com/AlecDziwanowski/HW13-E-Commerce/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AlecDziwanowski/HW13-E-Commerce.svg?style=for-the-badge
[forks-url]: https://github.com/AlecDziwanowski/HW13-E-Commerce/network/members
[stars-shield]: https://img.shields.io/github/stars/AlecDziwanowski/HW13-E-Commerce.svg?style=for-the-badge
[stars-url]: https://github.com/AlecDziwanowski/HW13-E-Commerce/stargazers
[issues-shield]: https://img.shields.io/github/issues/AlecDziwanowski/HW13-E-Commerce.svg?style=for-the-badge
[issues-url]: https://github.com/AlecDziwanowski/HW13-E-Commerce/issues
[license-shield]: https://img.shields.io/github/license/AlecDziwanowski/HW13-E-Commerce.svg?style=for-the-badge
[license-url]: https://github.com/AlecDziwanowski/HW13-E-Commerce/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/AlecDziwanowski
[product-screenshot]: ./Assets/TPG_Screenshot.png