
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <Navbar />
            <main className="hero-section">
                <h1>Welcome to the Clean React Template</h1>
                <p>This project structure is built to scale.</p>
                <button className="cta-btn">Get Started</button>
            </main>
        </div>
    );
};

export default Home;