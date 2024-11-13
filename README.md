## Project Name: Matrimony App
This project is a web application created using Angular and Ionic frameworks. It is designed to display and interact with profile images, providing a smooth user experience with swipeable images and detailed view pages.

## Prerequisites
Before running this project, ensure you have the following installed on your machine:

Node.js version 18.19.1
Angular CLI version ^18.0.0
Ionic CLI (Optional if you want to run ionic-specific commands)

You can verify the versions of the tools using the following commands:

`node -v`
`ng --version`

If you don't have the required versions, please install or update them as necessary.

## Install Node.js
To install Node.js, visit Node.js official website and download the appropriate version for your system.

## Installation Steps
Follow these steps to set up and run the project:

1. Clone the repository:

    First, clone this project to your local machine:

    `git clone https://github.com/VkFuture/matrimonyApp.git`

2. Install dependencies:

    After cloning the project, navigate into the project directory and install the dependencies:

    `cd your-repository-name`
    `npm install`
    This command will install all the necessary dependencies listed in the package.json file.

3. Run the application:

    Once the dependencies are installed, you can start the development server with:

    `ng serve` or `ionic serve`
    
    This will run the application and you can access it at `http://localhost:4200/` in your browser.

## Project Structure
This project consists of two main pages:

1. Page Swipe (Home Page):

    This is the landing page where users can swipe through profile images. The images can be scrolled and interacted with. Users can click "Yes" to select a profile.

2. Page Detail:

    After selecting "Yes" on the home page, users are redirected to the detail page where they can see more detailed information about the  selected profile, including the description. This page also allows scrolling.
    
## Features
Swipeable Images: On the home page, users can scroll through multiple profile images.
Profile Details: After selecting a profile, users are directed to a detailed page where they can view more information about the profile.
Responsive: The application is responsive and works across various devices, including mobile and desktop.
Interactive Buttons: Options to like or shortlist profiles are included.

Make sure your Node.js version is correct. You can use Node Version Manager (NVM) to manage different versions of Node.js.
If any dependencies fail to install, try running npm install again or delete node_modules and run npm install from scratch.
Closing Remarks


Thank you for checking out this project!