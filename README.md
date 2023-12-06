# News P-App
Welcome to the News P-App! This application fetches news articles from various categories and provides a user-friendly interface to read and explore the latest news.
![home](https://github.com/erpankajk4/New-P-Next.Js/assets/118353291/56ca6027-4edc-4d7d-b739-ef295fd28dfd)

## Features
- **Multicategory News Display:** Explore articles across diverse categories such as health, business, sports, and more, providing a comprehensive range of news content.
- **Article Liking and Saving:** Save preferred articles to a personalized "liked" section for easy access, enabling users to curate their reading list. All updates are reflected in real-time.
- **Real-time Updates:** Experience immediate updates for new articles or modifications in the liked section, ensuring the latest content is readily available.
- **Responsive Design:** Enjoy a seamless and intuitive reading experience across devices, ensuring consistent usability and readability.
- **Intuitive Navigation:** Effortless exploration through different categories and articles, with clear navigation paths for smooth user interaction.
- **Robust Search Functionality:** Find specific topics or articles effortlessly with a powerful search feature, enhancing user convenience and accessibility.
- **Layout Customization:** Switch between list and grid layouts for comfortable browsing, catering to individual preferences.
- **ContextAPI for Authentication:** Seamless user authentication managed throughout the app using ContextAPI, ensuring secure access to personalized features and content.
- **Firebase Authentication:** Hassle-free sign-in/signup experience facilitated by Firebase authentication, including Google authentication options, ensuring a secure and convenient user registration process.

## API for News Articles
The application fetches news articles from [NewsAPI](https://newsapi.org/), which offers a vast repository of news sources and articles across various categories.  

**Note:** if articles are not loading, it's likely due to reaching the maximum number of requests allowed for free users.
To avoid any limitations on API requests, consider signing up for a NewsAPI account and replace API_TOKEN_KEY in .env.local to access again this API.


## Technologies Used
Next.js
React
ContextAPI - for Auth accessbility
Firebase (Firestore)
Tailwind CSS

## Getting Started
Follow these steps to set up and run this app on your local machine.

1. Clone the repository:

   ```
   git clone https://github.com/erpankajk4/New-P-Next.Js.git
   npm install
   ```
2. Install the dependencies:
```
npm install
```
3. Start the server:
```
npm run dev
```
The application should now be running at `http://localhost:3000`.

## Future Improvements
- **Enhanced UI/UX:** Implement more visually appealing elements, such as shadows, animations, or vibrant colors, to enhance the overall user experience.
- **Offline Support:** Integrate offline capabilities, allowing users to access previously loaded articles even without an internet connection, ensuring uninterrupted browsing.
- **Performance Optimization:** Optimize application performance by employing advanced techniques like code splitting and caching strategies to reduce load times and enhance user interaction.
- **State Management with Redux Toolkit:** Implement Redux Toolkit for efficient state management, enabling app expandability and better scalability, especially in managing complex global states.

These improvements aim to refine the application's usability, performance, and expandability, providing users with a more seamless and feature-rich experience while ensuring future scalability and maintainability.

# Approach
The News P-App was designed and developed with a structured approach to ensure efficiency, maintainability, and a seamless user experience. Here's a breakdown of the project approach:

## Planning and Architecture
- **Requirements Gathering:** Defined the project scope and requirements, including core features, user interactions, and design considerations.
- **Technology Stack Selection:** Selected Next.js for efficient server-side rendering, React for building the UI, and Firebase for authentication and Firestore for real-time database support.
- **Folder Structure:** Organized the project structure for easy navigation, following a modular approach for components and pages.
- **Data Fetching:** Integrated the News API to fetch news articles based on various categories.

## Development Process
- **Initial Setup:** Configured the project environment, set up dependencies, and established Firebase authentication.
- **Component Development:** Built reusable components (Header, Tag, Article) to maintain consistency and modularity throughout the app.
- **ContextAPI for Auth:** Implemented ContextAPI to manage authentication state across the application.
- **Firebase Authentication:** Integrated Firebase authentication for seamless user sign-in and sign-up functionalities.
- **Article Display:** Developed functionalities to display news articles based on categories, allowing users to toggle between list and grid layouts.
- **Article Interaction:** Implemented features for users to like or save articles to a personalized "liked" section using Firebase Firestore for real-time updates.

## Testing and Deployment
- **Local Testing:** Conducted rigorous testing of individual components and functionalities to ensure stability and performance.
- **Netlify Deployment:** Deployed the application on Netlify for live preview and accessibility.
- **Continuous Improvement:** Will continue to improve the application based on user feedback, addressing any reported issues and incorporating new features or enhancements.

This approach ensured a methodical development process, emphasizing usability, functionality, and scalability, resulting in a user-friendly news application.

## Demo
![grid layout](https://github.com/erpankajk4/New-P-Next.Js/assets/118353291/965e0b44-7099-454d-9dde-4338d72b7a0a)
![login](https://github.com/erpankajk4/New-P-Next.Js/assets/118353291/1bd5ddc6-a95a-4283-892b-5d162bb48057)
![Signup](https://github.com/erpankajk4/New-P-Next.Js/assets/118353291/058975fb-0b3f-4027-9641-3e3103dee3ff)
![mobile](https://github.com/erpankajk4/New-P-Next.Js/assets/118353291/614e831a-ae9b-45e2-96bc-4b5bf203103e)



## Folder Structure
The project is organized as follows:
- `public`: Contains static assets used in the application, such as images and icons.
- `src`: Contains the main source code of the application.
  - `api`: Handles API-related logic.
  - `app`: Houses different pages for various news categories and functionalities.
  - `components`: Reusable React components used throughout the application.
  - `utils`: Contains utility functions used across the app.

 ┣ 📂public</br>
 ┃ ┣ 📜loader.svg</br>
 ┃ ┣ 📜logo.png</br>
 ┣ 📂src</br>
 ┃ ┣ 📂api</br>
 ┃ ┃ ┗ 📜index.js</br>
 ┃ ┣ 📂app</br>
 ┃ ┃ ┣ 📂bitcoin</br>
 ┃ ┃ ┃ ┗ 📜page.jsx</br>
 ┃ ┃ ┣ 📂books</br>
 ┃ ┃ ┃ ┗ 📜page.jsx</br>
 ┃ ┃ ┣ 📂business</br>
 ┃ ┃ ┃ ┗ 📜page.jsx</br>
 ┃ ┃ ┣ 📂food</br>
 ┃ ┃ ┃ ┗ 📜page.js</br>
 ┃ ┃ ┣ 📂health</br>
 ┃ ┃ ┃ ┗ 📜page.jsx</br>
 ┃ ┃ ┣ 📂india</br>
 ┃ ┃ ┃ ┗ 📜page.jsx</br>
 ┃ ┃ ┣ 📂lifestyle</br>
 ┃ ┃ ┃ ┗ 📜page.jsx</br>
 ┃ ┃ ┣ 📂liked</br>
 ┃ ┃ ┃ ┣ 📜Article.jsx</br>
 ┃ ┃ ┃ ┗ 📜page.jsx</br>
 ┃ ┃ ┣ 📂login</br>
 ┃ ┃ ┃ ┗ 📜page.jsx</br>
 ┃ ┃ ┣ 📂science</br>
 ┃ ┃ ┃ ┗ 📜page.jsx</br>
 ┃ ┃ ┣ 📂search</br>
 ┃ ┃ ┃ ┗ 📜page.jsx</br>
 ┃ ┃ ┣ 📂signup</br>
 ┃ ┃ ┃ ┗ 📜page.jsx</br>
 ┃ ┃ ┣ 📂sports</br>
 ┃ ┃ ┃ ┗ 📜page.jsx</br>
 ┃ ┃ ┣ 📂travel</br>
 ┃ ┃ ┃ ┗ 📜page.jsx</br>
 ┃ ┃ ┣ 📂world</br>
 ┃ ┃ ┃ ┗ 📜page.jsx</br>
 ┃ ┃ ┣ 📜favicon.ico</br>
 ┃ ┃ ┣ 📜globals.css</br>
 ┃ ┃ ┣ 📜layout.js</br>
 ┃ ┃ ┗ 📜page.js</br>
 ┃ ┣ 📂components</br>
 ┃ ┃ ┣ 📜Article.jsx</br>
 ┃ ┃ ┣ 📜Header.jsx</br>
 ┃ ┃ ┣ 📜LayoutButton.jsx</br>
 ┃ ┃ ┣ 📜Loader.jsx</br>
 ┃ ┃ ┣ 📜Navbar.jsx</br>
 ┃ ┃ ┣ 📜RandomArticle.jsx</br>
 ┃ ┃ ┣ 📜RandomNews.jsx</br>
 ┃ ┃ ┣ 📜SearchInput.jsx</br>
 ┃ ┃ ┣ 📜Tag.jsx</br>
 ┃ ┃ ┗ 📜TopHeadlines.jsx</br>
 ┃ ┗ 📂utils</br>
 ┃ ┃ ┗ 📜index.js</br>
 ┣ 📜.env.local</br>
 ┣ 📜.eslintrc.json</br>
 ┣ 📜.gitignore</br>
 ┣ 📜jsconfig.json</br>
 ┣ 📜next.config.js</br>
 ┣ 📜package-lock.json</br>
 ┣ 📜package.json</br>
 ┣ 📜postcss.config.js</br>
 ┣ 📜README.md</br>
 ┗ 📜tailwind.config.js</br>
