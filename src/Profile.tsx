import "./profile.css";
import picture from "./assets/Jubel Van Kristo Sinaga.jpg";
import resume from "./assets/resume.pdf";

const Profile = () => {
  return (
    <div className='main'>
      <div className='profile-img'>
        <img src={picture} />
      </div>
      <div className='profile'>
        <h1>Hello, I'm Jubel</h1>
        <h3>Web Developer</h3>
        <p className='description'>
          Enthusiastic developer with skills in Javascript, React JS, Node js,
          Express, HTML, and CSS
        </p>
        <p className='phone'>
          <i className='fa-solid fa-phone'></i> Phone:{" "}
          <span>+6281311107954</span>
        </p>
        <p className='email'>
          <i className='fa-solid fa-envelope'></i> Email:
          <span>jubelsinaga13@gmail.com</span>
        </p>
        <p>
          <i className='fa-solid fa-location-dot'></i> Address: Jalan Kelapa 2,
          Gang Sejahtera No.3, Tanjung Gusta, Medan Helvetia
        </p>
        <p>
          <i className='fa-regular fa-calendar-days'></i> Date of Birth: 13
          Februari 1992
        </p>
        <a href={resume} download='Resume' target='_blank'>
          <button className='download'>
            Download CV <i className='fa-solid fa-download'></i>
          </button>
        </a>
      </div>
      <div className='right-side'></div>
    </div>
  );
};

export default Profile;
