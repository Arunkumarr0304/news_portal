import Onboard1 from "../../assets/images/onboard_img1.png";
import Onboard2 from "../../assets/images/onboard_img2.png";
import Onboard3 from "../../assets/images/onboard_img3.png";

import Google from "../../assets/images/Google.svg";
import Apple from "../../assets/images/Apple.svg";
import Dark_Apple from "../../assets/images/Dark_Apple.svg";

import Interest1 from "../../assets/images/interest1.png";
import Interest2 from "../../assets/images/interest2.png";
import Interest3 from "../../assets/images/interest3.png";
import Interest4 from "../../assets/images/interest4.png";
import Interest5 from "../../assets/images/interest5.png";
import Interest6 from "../../assets/images/interest6.png";
import Interest7 from "../../assets/images/interest7.png";
import Interest8 from "../../assets/images/interest8.png";
import Interest9 from "../../assets/images/interest9.png";

export const pages = [
    {
        id: 1,
        image: Onboard1,
        heading: 'Welcome to Our News App',    
        text: "Stay informed with breaking news, top stories, and trending topics from around the world, all in one place.",
    },
    {
        id: 2,
        image: Onboard2,
        heading: 'Customize Your News Feed',
        text: "Enjoy a customized news feed that brings you the stories that matter most. Follow your favorite topics.",
    },
    {
        id: 3,
        image: Onboard3,
        heading: 'Stay Updated Notification',
        text: "Never miss a beat with real-time notifications and alerts. The first to know about important events.",
    },
];

export const log_methods = [
    {
        id: 1,
        image: <Google />, 
        dark_image: <Google />,
        text: 'Sign Up with Google',
    },
    {
        id: 2,
        image: <Apple />, 
        dark_image: <Dark_Apple />,
        text: 'Sign Up with Apple',
    },
]

export const Interest_data = [
    {
        id: 1,
        image: Interest1,
        text: 'Crypto',
    },
    {
        id: 2,
        image: Interest2,
        text: 'Sports',
    },
    {
        id: 3,
        image: Interest3,
        text: 'Travel',
    },
    {
        id: 4,
        image: Interest4,
        text: 'Science',
    },
    {
        id: 5,
        image: Interest5,
        text: 'Business',
    },
    {
        id: 6,
        image: Interest6,
        text: 'Finance',
    },
    {
        id: 7,
        image: Interest7,
        text: 'Life Style',
    },
    {
        id: 8,
        image: Interest8,
        text: 'Design',
    },
    {
        id: 9,
        image: Interest9,
        text: 'Technology',
    },
]