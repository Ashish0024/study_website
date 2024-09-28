// import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import kid from './Image/kids.jpg';
import logo from './Image/logo1.png'
// import kid3 from './Image/kids3.png';
function App(){
  const courses = [
    {
      id: 1,
      title: "Math Adventures",
      description: "Learn math with fun puzzles and challenges!",
      image: "math-course.png",
    },
    {
      id: 2,
      title: "Science Experiments",
      description: "Explore science through exciting experiments!",
      image: "science-course.png",
    },
    {
      id: 3,
      title: "Art and Craft",
      description: "Get creative with our art and craft lessons!",
      image: "art-course.png",
    },
    {
      id: 4,
      title: "Language Games",
      description: "Improve your language skills through play!",
      image: "language-course.png",
    },
  ];



  const games = [
    {
      id: 1,
      title: "Math Wizard",
      description: "Solve puzzles and become a math wizard!",
      image: "math-wizard.png",
    },
    {
      id: 2,
      title: "Word Adventure",
      description: "Improve your vocabulary while playing!",
      image: "word-adventure.png",
    },
    {
      id: 3,
      title: "Science Lab",
      description: "Explore experiments and science challenges!",
      image: "science-lab.png",
    },
    {
      id: 4,
      title: "Art Puzzle",
      description: "Create beautiful art while solving puzzles!",
      image: "art-puzzle.png",
    },
  ];

  const steps = [
    {
      id: 1,
      title: "Sign Up",
      description: "Create an account for your child to start their learning journey.",
      icon: "signup-icon.png",
    },
    {
      id: 2,
      title: "Choose a Course",
      description: "Select from a variety of fun and educational courses designed for kids.",
      icon: "choose-course-icon.png",
    },
    {
      id: 3,
      title: "Start Learning",
      description: "Engage your child with interactive lessons and games.",
      icon: "start-learning-icon.png",
    },
  ];
  const plans = [
    {
      id: 1,
      title: "Basic",
      price: "799/month",
      features: [
        "Access to 10 Courses",
        "Basic Interactive Games",
        "Progress Tracking",
      ],
      buttonLabel: "Get Basic",
      highlight: false,
    },
    {
      id: 2,
      title: "Standard",
      price: "999/month",
      features: [
        "Access to 30 Courses",
        "Advanced Interactive Games",
        "Progress Tracking",
        "Weekly Parent Reports",
      ],
      buttonLabel: "Get Standard",
      highlight: true,  // This plan will be highlighted
    },
    {
      id: 3,
      title: "Premium",
      price: "1999/month",
      features: [
        "Access to All Courses",
        "Premium Interactive Games",
        "Detailed Progress Reports",
        "Monthly One-on-One Mentoring",
        "Priority Support",
      ],
      buttonLabel: "Get Premium",
      highlight: false,
    },
  ];

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage("Thank you for signing up!");
      setEmail('');
    } else {
      setMessage("Please enter a valid email.");
    }
  };

  return (
      <>
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Kids Learning Logo" />
        <h1>SkyWards</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#games">Games</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="cta-buttons">
        <button className="sign-up-btn">Sign Up</button>
        <button className="login-btn">Login</button>
      </div>
    </header>
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Fun Learning for Curious Minds!</h1>
        <p className="hero-subtitle">Engaging courses, games, and activities for kids aged 5-12.</p>
        <div className="hero-buttons">
          <button className="explore-btn">Explore Courses</button>
          <button className="play-btn">Play Games</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={kid} alt="Kids Learning Illustration" />
      </div>
    </section>
    <section className="features-section">
      <h2 className="features-title">Why Choose Us?</h2>
      <div className="features-container">
        <div className="feature-card">
          <img src="" alt="Interactive Lessons" />
          <h3>Interactive Lessons</h3>
          <p>Fun quizzes, videos, and storytelling to make learning enjoyable.</p>
        </div>
        <div className="feature-card">
          <img src="personalized-learning.png" alt="Personalized Learning" />
          <h3>Personalized Learning</h3>
          <p>Tailored activities to suit different age groups and skill levels.</p>
        </div>
        <div className="feature-card">
          <img src="safe-environment.png" alt="Safe Environment" />
          <h3>Safe & Child-Friendly</h3>
          <p>A secure platform for children to learn and explore with peace of mind.</p>
        </div>
        <div className="feature-card">
          <img src="fun-games.png" alt="Fun Educational Games" />
          <h3>Fun Educational Games</h3>
          <p>Learning through play with exciting, educational games.</p>
        </div>
      </div>
    </section>
    <section className="courses-section">
      <h2 className="courses-title">Explore Our Top Courses</h2>
      <div className="courses-container">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} className="course-image" />
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        ))}
      </div>
    </section>
    <section className="games-section">
      <h2 className="games-title">Play Our Fun Educational Games</h2>
      <div className="games-container">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <img src={game.image} alt={game.title} className="game-image" />
            <h3 className="game-title">{game.title}</h3>
            <p className="game-description">{game.description}</p>
            <button className="play-now-btn">Play Now</button>
          </div>
        ))}
      </div>
    </section>
    <section className="how-it-works-section">
      <h2 className="how-it-works-title">How It Works</h2>
      <div className="steps-container">
        {steps.map((step) => (
          <div key={step.id} className="step-card">
            <img src={step.icon} alt={step.title} className="step-icon" />
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
    <section className="subscription-section">
      <h2 className="subscription-title">Choose Your Plan</h2>
      <div className="plans-container">
        {plans.map((plan) => (
          <div key={plan.id} className={`plan-card ${plan.highlight ? 'highlight' : ''}`}>
            <h3 className="plan-title">{plan.title}</h3>
            <p className="plan-price">{plan.price}</p>
            <ul className="plan-features">
              {plan.features.map((feature, index) => (
                <li key={index} className="plan-feature">{feature}</li>
              ))}
            </ul>
            <button className="plan-btn">{plan.buttonLabel}</button>
          </div>
        ))}
      </div>
    </section>
    <section className="newsletter-section">
      <h2 className="newsletter-title">Join Our Newsletter</h2>
      <p className="newsletter-description">
        Subscribe to get the latest updates on our courses and educational content for your kids.
      </p>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="newsletter-input"
          required
        />
        <button type="submit" className="newsletter-btn">Subscribe</button>
      </form>
      {message && <p className="newsletter-message">{message}</p>}
    </section>
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">About Us</h3>
          <p>
            We are dedicated to providing engaging and educational content for children. Our platform aims to inspire young minds to learn and grow through fun courses and interactive games.
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#subscribe">Subscribe</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="facebook-icon.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="twitter-icon.png" alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="instagram-icon.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kids Education. All rights reserved.</p>
      </div>
    </footer>

      </>
    
  );
}

export default App;
