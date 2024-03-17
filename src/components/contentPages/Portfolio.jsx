import Project from './Project';

import noteTaker from '../../images/landing page.png';
import eCommerce from '../../images/e-commerce back end.png';
import recipeBook from '../../images/recipe-book.png';

const projectList = [
    {
        title: 'Note Taker',
        description: 'This is an app that can be used to write and save notes. This application uses Express.js and saves and retrieves note data from a JSON file.',
        image: noteTaker,
        github: 'https://github.com/G2Squared/Note_Taker.git',
        liveLink: 'https://note-taker449-c7db3bed113b.herokuapp.com/',
    },
    {
        title: 'Recipe Book',
        description: 'This was a group project that uses online APIs to retrieve and display data. This project is hosted on my group partner\'s GitHub.',
        image: recipeBook,
        github: 'https://github.com/ralloMatt/recipe-book-database',
        liveLink: 'https://rallomatt.github.io/recipe-book-database/',
    },
    {
        title: 'E-Commerce Back End',
        description: 'This app utilizes Express.js API that is configured to use Sequelize to interact with a MySQL database.',
        image: eCommerce,
        github: 'https://github.com/G2Squared/e-commerce-back-end.git',
        liveLink: 'https://youtu.be/BYIIUUH3LdY',
    },
];

function Portfolio() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            {projectList.map((project, index) => (
                <Project key={index} project={project} />
            ))}
        </div>
    );
}

export default Portfolio;
