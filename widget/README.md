# SeQura frontend challenge documentation

Documentation
Setup and Running Instructions:
Clone the repository.
Navigate to the API folder and start the server by following the instructions in the README file.
Navigate to the prototype folder.
Install dependencies using npm install.
Start the React app using npm start.

## Setup and Running Instructions

1. Clone the repository.
2. Navigate to the API folder and start the server by following the instructions in the README file there is in that folder.
3. Navigate to the widget folder.
4. Install dependencies using `npm install`.
5. Start the React app using `npm start`.

## Technical Choices

The following technical choices were made during the development of the solution:

1. **Use React**: React was chosen as the framework for developing the prototype because it is widely used within the company and is the technology that would be used in the position I am applying for. Additionally, React's component-based architecture makes it well-suited for building reusable and maintainable user interfaces.

2. **API Integration**: The solution integrates with the SeQura CreditAgreementAPI and EventsAPI to fetch financing information and trigger events, respectively. Fetch API is used for making HTTP requests.

3. **Folder Structure**: A new folder was created within the provided repository to build the prototype. This folder contains the React app for the prototype, separate from the existing merchant-site and API folders. The merchant site files (HTML, CSS, and JS) were added to the public folder within the React app to facilitate integration testing. Additionally, the integration of the prototype with the merchant site can be viewed by opening the HTML file directly from the merchant-site folder, as it has also been added there.

4. **State Management**: React's useState hook is used for managing component state, allowing for dynamic updates to the UI based on user interactions and API responses. Additionally, a context provider was created to manage credit agreement data across multiple components.

5. **Styling**: No CSS library, such as Material-UI, was used for styling. Instead, pure CSS was utilized for styling components. This decision was made because: 1. Using a library would restrict the demonstration of CSS expertise, and 2. The wireframe provided had very basic styles that could be easily implemented with CSS.

## Assumptions and Tradeoffs

Several assumptions and tradeoffs were made during the development process:

- Assumptions: It was assumed that the provided wireframe accurately represents the desired UI for the widget. Additionally, it was assumed that the provided Mocked API server accurately simulates the behavior of the actual SeQura APIs.

- Tradeoffs: Due to time constraints, some aspects of the solution may not be fully optimized or polished. For example, error handling, loading states and edge cases may not be thoroughly addressed, and the user interface may lack certain enhancements for accessibility.

## Future Improvements

To enhance the solution further, the following improvements could be considered:

1. Error Handling: Implement robust error handling mechanisms to gracefully handle API errors and network failures.
2. Unit Testing: Write unit tests to ensure the reliability and correctness of critical components and functionalities.
3. Accessibility: Conduct an accessibility audit and implement improvements to ensure that the widget is accessible to users with disabilities.
4. Performance Optimization: Optimize the performance of the widget, especially in terms of data fetching and rendering, to ensure smooth user experience, even on low-end devices or slow network connections.

## Ways to distribute this prototype to all our merchants

#### Product point of view

To distribute this prototype to all our merchants, I would follow a structured approach to ensure seamless integration and adoption.

Firstly, I would prepare comprehensive documentation outlining the setup and installation instructions, including how to integrate the prototype into their existing merchant sites. This documentation would also include guidelines on how to interact with the SeQura CreditAgreementAPI and EventsAPI, along with any necessary configuration steps.

Next, I would schedule training sessions or webinars for merchants to walk them through the integration process and demonstrate the features and benefits of the prototype. These sessions would provide merchants with the opportunity to ask questions and clarify any doubts they may have.

Additionally, I would establish a dedicated support channel, such as a helpdesk or email support, to address any technical issues or queries merchants may encounter during the integration process or while using the prototype. This support channel would ensure timely assistance and troubleshooting to minimize disruptions to their business operations.

Furthermore, I would encourage merchants to provide feedback on their experience with the prototype, including any suggestions for improvements or additional features they would like to see. This feedback would be invaluable for refining the prototype and ensuring it meets the diverse needs of our merchants.

Overall, by providing comprehensive documentation, training sessions, dedicated support, and soliciting feedback, we can ensure a smooth and successful distribution of the prototype to all our merchants, empowering them to enhance their e-commerce offerings with SeQura's flexible payment method.

#### Engineer point of view

From an engineer's perspective, I would distribute the prototype as a package encapsulating the solution for seamless integration into our merchants' websites. This package would offer the following components and functionalities:

1. Widget Component: The package would include a widget component that provides the UI for selecting installment options.
   To cater to different merchant preferences, the widget component would offer flexibility in how the price information is provided. Merchants could either pass the price as a prop to the widget component directly, allowing for easy integration with their existing infrastructure.
   Alternatively, merchants could opt to use their custom select (dropdown) for price selection. In this case, the package would provide a function that returns the installment options based on a given price value. Additionally, a function would be included to track the option change event, ensuring seamless communication with the backend.

2. Documentation: Detailed documentation would accompany the package, guiding merchants through the integration process step-by-step. It would provide clear instructions on how to install, configure, and customize the widget component within their websites. Additionally, the documentation would explain the usage of the provided functions for price selection and event tracking, ensuring merchants can leverage the package's capabilities effectively.

3. Support and Maintenance: Continuous support and maintenance would be provided to address any issues or queries merchants may encounter during integration. A dedicated support channel would be available for merchants to seek assistance and receive timely resolutions. Furthermore, the package would undergo regular updates to incorporate new features, enhancements, and bug fixes, ensuring its compatibility with evolving merchant requirements and technological advancements.
