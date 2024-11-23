import { Image } from "../assets/Images";

export const mainProjects=[
    {
        id: 4,
        title: 'Audiophile Ecommerce',
        description: 'This project was my solution to the Audiophile E-commerce challenge on Frontend Mentor. The goal was to create a fully functional e-commerce website with dynamic features like cart management, responsive layouts, and order confirmation. It served as a great learning experience, allowing me to explore state management, responsive design, and interactive UI development in depth.',
        category: 'Ecommerce',
        liveLink: 'https://audiophile-omega-navy.vercel.app/',
        githubLink: 'https://github.com/Lolaakinrinsola/audiophile',
        image: Image.ecommerce,
        challenge:"The task was to build an e-commerce app that met several key user requirements. Users needed to view an optimized layout that adapted to their device's screen size, see hover effects on interactive elements, and manage a shopping cart—adding, removing, and adjusting quantities of products. During checkout, users needed form validation for incomplete or incorrect fields and a dynamically calculated summary, including shipping costs, VAT, and order totals. To enhance the user experience, a confirmation modal was required after successful checkout. Finally, to ensure continuity, the app had to remember cart contents even after refreshing the page, leveraging localStorage if a backend wasn't available.<br/><br/>These requirements meant not only designing a seamless and visually appealing UI but also handling state efficiently and ensuring accurate data persistence, all while maintaining responsiveness across devices.",
        tools:'React, Tailwind, Zustand, LocalStorage',
        solution:"To bring the project to life, I used React for building reusable components and managing the app's dynamic interactions. Whether users were adjusting cart quantities or viewing responsive layouts, React allowed for a clean and organized structure that was easy to maintain.<br/><br/>Styling was achieved with Tailwind CSS, a utility-first CSS framework. This tool was instrumental in quickly creating responsive designs, hover effects, and layouts with minimal custom CSS. Tailwind's flexibility helped me ensure a visually appealing and consistent experience across devices.<br/><br/>The most notable tool in the stack was Zustand, a lightweight state management library. Zustand simplified handling the app's global state, such as the cart's contents, product quantities, and user interactions, without requiring the complexity of Redux. It allowed for seamless updates across components, enhancing both developer productivity and app performance. Zustand’s straightforward API also made it easy to integrate localStorage to persist cart data after page refreshes, providing a polished, real-world e-commerce experience."
      },
      {
        id: 6,
        title: 'Product Feedback',
        description: 'The Product Feedback App Challenge on Frontend Mentor was a project where I built a responsive and interactive platform for managing product feedback. The app allows users to create, update, and delete feedback, sort and filter suggestions, and engage through comments and replies. Using tools like React, Tailwind CSS, and Zustand, I tackled the challenge of creating a smooth, feature-rich user experience.',
        category: 'Product',
        liveLink: 'https://product-feedback-azure.vercel.app/',
        githubLink: 'https://github.com/Lolaakinrinsola/product-feedback',
        image: Image.productFeedback,
        challenge:"The goal of this project was to create a dynamic app where users could manage product feedback effectively. It needed to include features like:<ul className='list-disc'><li>Creating, updating, and deleting feedback.Sorting feedback by upvotes or comments.<li/> <li>Filtering feedback by category.Adding comments and replies to feedback items.<li/><li>To make it even more challenging, these features had to persist even after refreshing the browser, requiring some form of data storage.<li/><li> On top of that, the app had to work flawlessly across all screen sizes, from mobile to desktop.<li/><li>Managing all these states and interactions in an organized, efficient way while ensuring a smooth user experience was no small task.<li/> ",
        tools:'React, Tailwind CSS, Zustand, localStorage,JavaScript, HTML, CSS, Vite, GitHub, Vercel, React Icons,React Router, ESLint, Prettier, Axios, Figma',
        solution:"To bring this app to life, I used React, Tailwind CSS, and Zustand. React made it easy to structure the app with reusable components and handle dynamic user interactions. Whether users were sorting feedback or leaving a comment, React’s flexibility allowed me to handle those interactions in a clean and maintainable way.For styling, Tailwind CSS was a game-changer. Its utility-first classes allowed me to create a fully responsive design without needing to write a lot of custom CSS. With Tailwind, I could quickly build hover effects, adjust layouts for different screen sizes, and keep the UI visually appealing across devices.<br/><br/>The real star of this project, however, was Zustand. Zustand is a lightweight state management library that made handling global state incredibly simple. Instead of getting bogged down with a complex setup like Redux, Zustand allowed me to focus on the logic of the app. It managed everything from sorting feedback to tracking upvotes and handling user interactions seamlessly across components. With Zustand, I could avoid messy prop drilling and keep my code clean and easy to manage.I also used localStorage to ensure user data was saved even after refreshing the browser. This gave the app a more polished and complete feel without requiring a backend.<br/><br/>This project was both a challenge and a joy to work on. It taught me the power of using the right tools for the job—React for flexibility, Tailwind for speed and design, and Zustand for simplicity in state management. Moving forward, I’m excited to explore even more features of these tools and build on what I’ve learned here."
      },
]

export const mockProjects = [

    ...mainProjects,
    {

      id: 1,
      title: 'Fylo',
      description: 'The goal was to create a responsive and interactive landing page that closely matched the provided design. It was a rewarding opportunity to refine my skills in layout creation, styling, and ensuring a seamless user experience across devices.',
      category: 'App UI',
      liveLink: 'https://fylo-landing-page-nine-tau.vercel.app/',
      githubLink: 'https://github.com/Lolaakinrinsola/fylo-landing-page',
      image: Image.fylo,
      challenge:"The task was to build a pixel-perfect landing page with an optimal layout that adapted to different screen sizes. This required a fully responsive design that looked great on mobile, tablet, and desktop devices. Additionally, the page needed to include hover and focus states for all interactive elements, ensuring that users had clear visual feedback when interacting with buttons, links, and other components.<br/><br/>Achieving these goals required precise attention to detail to match the design while maintaining flexibility for responsiveness and ensuring that interactive states were accessible and intuitive.",
      tools:'SCSS, React',
      solution:"To accomplish this, I used React for building the page's structure with reusable and modular components. React’s component-based architecture made it easy to organize the project and maintain consistency across different sections of the page. Each part of the design, from headers to call-to-action buttons, was implemented as a React component, allowing for clean and manageable code.<br/><br/>For styling, I chose SCSS because of its powerful features for managing styles efficiently. SCSS variables, mixins, and nested rules enabled me to create a maintainable and scalable style structure. For instance, I used SCSS variables to define consistent colors, typography, and spacing, ensuring that the design remained uniform. Media queries in SCSS allowed me to fine-tune the layout for different screen sizes, creating a fully responsive experience.<br/><br/>Interactive hover and focus states were handled with care to align with the design specifications. By leveraging SCSS's pseudo-classes, I was able to ensure that buttons, links, and other elements provided clear feedback on interaction."
    },
    {
      id: 2,
      title: 'Metabnb',
      description: 'Metabnb is a responsive landing page that showcases a fictional platform for finding unique accommodations in the metaverse. Built with React, React Router, and SCSS, it highlights my four years of experience in crafting scalable, user-friendly web interfaces. The project features smooth navigation, reusable components, and a visually engaging design, reflecting my expertise in modern web development.',
      category: 'Web Design',
      liveLink: 'https://metabnbzuri.vercel.app/',
      githubLink: 'https://github.com/Lolaakinrinsola/metabnb',
      image: Image.metabnb,
      challenge:'The challenge was to create a visually appealing and fully responsive landing page that effectively presented the platform’s features. It required smooth navigation between sections using React Router and a well-structured layout optimized for all devices. The goal was to achieve a high-quality, maintainable codebase with a design that adapts seamlessly to user needs. ',
      tools:'React, React router, SCSS',
      solution:'I used React to develop modular components, ensuring scalability and reusability. React Router provided efficient navigation without page reloads, while SCSS allowed for a clean and organized styling approach, leveraging mixins and variables for consistency. The result was a dynamic, responsive landing page with smooth transitions and an engaging design system.'
    },
    {
      id: 3,
      title: 'My Portfolio',
      description: 'Creating my portfolio was an exciting journey that allowed me to showcase my skills while building something personal and meaningful. The portfolio features light and dark modes, ensuring accessibility and a tailored user experience. It’s designed with reusable components, making it scalable and maintainable, and was built using a modern tech stack for performance and elegance.',
      category: 'Web Design',
      liveLink: 'https://example.com/project-portfolio',
      githubLink: 'https://github.com/portfolio',
      image: Image.portfolio,
      challenge:"The goal was to design and develop a portfolio that was not only visually appealing but also functional and adaptable. It needed to reflect my personality and technical expertise while providing a smooth user experience. One key challenge was implementing light and dark mode, ensuring the design felt cohesive and balanced in both themes.<br/><br/>The project also required reusable components to streamline the codebase, making it easier to manage and extend as I add new projects or features. Additionally, incorporating state management to handle theme toggles and other global states was crucial for creating a seamless and dynamic experience. Since I chose to use TypeScript, I needed to ensure type safety while maintaining development speed.",
      tools:"React, Typescript, Tailwind, Zustand",
      solution:"To bring my vision to life, I used React for its modular and component-based architecture, which was perfect for building a portfolio with reusable elements. Each section of the site, from the project cards to the navigation bar, was designed as a reusable component to maintain consistency and simplify updates.<br/><br/>I styled the portfolio using Tailwind CSS, a utility-first framework that made designing responsive layouts quick and intuitive. Tailwind allowed me to implement both light and dark modes effortlessly, using dynamic classes to toggle between themes based on the user's preference.<br/><br/>For state management, I used Zustand, a lightweight library that made handling global states like theme toggles straightforward. Zustand’s simplicity enabled me to focus on functionality without unnecessary complexity.<br/><br/>To enhance the project further, I integrated TypeScript for type safety and better code readability. It helped catch errors early, made the codebase more robust, and ensured that the components were scalable and easy to maintain."
    },
    
    {
      id: 5,
      title: 'Admin Panel',
      description: 'The Build Bank admin app is a dedicated platform for managing and overseeing the operations of a financial app. This financial app enables users to receive payments, manage multiple branches of their businesses, and access comprehensive overviews of their transactions. The admin app provides additional capabilities, such as advanced analytics, branch-level management, and data control features restricted to administrators. With tools like Next.js, React, Tailwind CSS, and TypeScript, I delivered a scalable, efficient, and secure solution that reflects my four years of experience in building robust applications.',
      category: 'Financial',
      liveLink: 'https://example.com/project-admin',
      githubLink: null,
      image: Image.admin,
      challenge:"Creating the Visum admin app required integrating seamlessly with the core financial platform while maintaining the highest standards of security and performance. The admin app needed to offer advanced features, such as branch management, data analytics, and control over sensitive functions like data deletion, without compromising user experience. Additionally, ensuring a clean and intuitive interface that balanced functionality with simplicity was key to meeting the demands of financial administrators.",
      tools:"Next.js, React, Typescript",
      solution:"I used Next.js for its server-side rendering capabilities, ensuring the app performed efficiently and securely under high data loads. React allowed for modular, reusable components, simplifying development and maintenance while ensuring scalability. Tailwind CSS enabled the creation of a visually appealing, responsive interface optimized for both desktop and mobile use. TypeScript was pivotal in maintaining type safety and reducing potential errors, particularly when handling sensitive financial data and administrative features. "
    },
    
    {
      id: 7,
      title: 'Tech 1M',
      description: 'Tech 1M is an educational platform designed to bridge the gap between teachers and students through a streamlined, interactive dashboard. This app allows users to sign up as either students or teachers, offering tailored experiences for each role. Built with React, Tailwind CSS, and Firebase, Tech 1M combines responsive design with secure authentication to deliver a seamless learning environment. With four years of web development experience, this project exemplifies my expertise in crafting functional, user-centered applications.',
      category: 'Tech',
      liveLink: 'https://tech1m-group3-project.vercel.app/',
      githubLink: null,
      image: Image.tech1m,
      challenge:'The primary challenge was to build an app that catered to two distinct user roles—students and teachers—while maintaining an intuitive and cohesive interface. The app needed to include role-specific dashboards, secure authentication, and responsive modules. Ensuring data privacy and seamless navigation for both user types required robust state management and thoughtful design.',
      tools:'Firebase, React, Tailwind',
      solution:'To address these challenges, I used React to create reusable components, structuring the app efficiently for scalability and clarity. Tailwind CSS was employed for styling, ensuring a responsive and visually engaging design that worked flawlessly across devices. For secure user authentication and data management, I relied on Firebase, enabling role-based access and real-time updates to the dashboards. Together, these tools provided a stable, fast, and reliable app experience tailored to both students and teachers. '
    },
    {
      id: 8,
      title: 'Build Merchant App',
      description: 'The Build Bank Merchant App is a powerful tool designed for businesses to manage their operations efficiently. It features a comprehensive dashboard that provides detailed analytics for each branch, transaction histories, and a smooth onboarding process tailored for businesses. Users can also perform transactions seamlessly, making it an essential app for streamlined financial operations. This project showcases my four years of expertise in building business-oriented applications with modern tools and technologies.',
      category: 'Finance',
      liveLink: 'https://example.com/project-merchant',
      githubLink: null,
      image: Image.merchant,
      challenge:"The key challenge was to design a user-friendly platform that catered to the diverse needs of business owners, from tracking detailed analytics for multiple branches to processing transactions securely. The onboarding process needed to be intuitive for new businesses, while the app's overall performance had to remain fast and reliable despite handling large amounts of transactional data. Security and responsiveness were paramount to ensure a trustworthy experience for all users.",
      tools:'React, Tailwind, Typescript',
      solution:"I leveraged React for creating dynamic and reusable components, ensuring that the app's interface was both scalable and maintainable. Tailwind CSS was used to craft a responsive and visually appealing design, ensuring usability across all devices. Next.js provided server-side rendering for faster page loads and enhanced SEO. With TypeScript, I ensured type safety and reduced runtime errors, resulting in more robust code. This combination of tools enabled me to create a secure, high-performing app that met the complex needs of Build Bank’s merchants"
    },
    {
      id: 9,
      title: 'Image Stock',
      description: 'The Image Stock App is a dynamic platform for uploading and managing images, ensuring user authentication for secure functionality. Built with React, Firebase, and Tailwind CSS, this app showcases a seamless user experience with responsive design, robust state management using Zustand, and efficient image storage on Firebase.',
      category: 'Media',
      liveLink: 'https://gallery-7b85c.web.app/',
      githubLink: 'https://github.com/Lolaakinrinsola/ImageStock',
      image: Image.imageStock,
      challenge:'The main challenge was to create an app that allowed users to upload images securely while providing a smooth, intuitive interface. The app needed to integrate authentication features, ensure images were stored efficiently, and maintain a responsive and visually appealing design. Balancing user-friendliness with technical functionality, especially managing image uploads and authentication, was central to the project’s success.',
      tools:"React, Firebase, Zustand, Tailwind and Typescript",
      solution:"To meet these requirements, I used React for building reusable components and creating a modular structure for the app. For state management, Zustand allowed for a clean and efficient way to handle global states, like user authentication and image upload states. Styling was accomplished with Tailwind CSS, enabling fast, responsive, and aesthetically pleasing designs. Firebase was integral, providing authentication, cloud storage for images, and real-time database functionality. Together, these tools ensured a secure, reliable, and engaging app"
    },
    {
      id: 10,
      title: 'Build Website',
      description: "The Build Bank landing page is a dynamic and visually appealing entry point for the company's online presence. Designed to showcase Build Bank’s innovative financial services, the page is fully responsive, user-friendly, and built with React and Tailwind CSS. This project reflects my four years of experience in crafting modern, high-performance landing pages that effectively communicate a brand’s value.",
      category: 'Web Development',
      liveLink: 'https://buildbankng.com/',
      githubLink: null,
      image: Image.buildWeb,
      challenge:"The goal was to create a landing page that not only captured Build Bank’s brand identity but also engaged users with a seamless experience across devices. The page needed to communicate key services, provide clear calls to action, and load quickly to minimize bounce rates. Striking a balance between aesthetics, functionality, and performance was critical to achieving this. ",
      tools:"React and Tailwind",
      solution:"To deliver this, I used React for building reusable, modular components, allowing for a streamlined development process and future scalability. Tailwind CSS made styling efficient and responsive, enabling the creation of a polished design that adapted seamlessly to various screen sizes. By focusing on lightweight components and optimized assets, I ensured fast load times and an engaging user experience."
    },
  ];