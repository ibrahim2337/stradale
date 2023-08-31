/* eslint-disable react/no-unescaped-entities */
import location from '../../assets/icons/location.png'
import coffee from '../../assets/icons/coffee-cup.png'
import mail from '../../assets/icons/mail.png'

const Contact = () => {
    return (
        <div className='grid lg:grid-cols-3 px-20 justify-center'>
            <div className='text-center'>
                <img src={location} alt=""/>
                <h3>Location</h3>
                <p>Shawrapara,Mirpur 10</p>
            </div>
            <div className='text-center'>
                <img src={coffee} alt="" />
                <h3>We're Open</h3>
                <p>Weekdays 08:00 - 22:00. Weekends 08:00 - 24:00.</p>
            </div>
            <div className='text-center'>
                <img src={mail} alt="" />
                <h3>Contact Us</h3>
                <p>P:01734454539. E:taherul100@.com.</p>
            </div>
        </div>
    );
};

export default Contact;