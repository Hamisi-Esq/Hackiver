import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default{
    name: 'Hackiver',
    title: 'Softwares & Graphics, Inc',

    starting_period: 'January 2022',
    dealers_in: 'Software Production & Graphics Design',
    email: 'hackiversoftwaresandgraphics@gmail.com',
    phone: '0702111468',
    address: 'Nairobi',

    socials: {
        Facebook: {
            link: 'https://www.facebook.com/profile.php?id=100074923661598',
            text: 'Hackiver Graphics',
            icon: <FacebookIcon/>
        },
        Twitter: {
            link: 'https://twitter.com/briva_ke',
            text: 'Hamisi_Esq',
            icon: <TwitterIcon/>
        },
        Instagram: {
            link: 'https://www.instagram.com/hamisi_esq_graphics/?hl=en',
            text: 'hamisi_esq_graphics',
            icon: <InstagramIcon/>
        },
        Linkedin: {
            link: 'linkedin.com/in/briva-hamisi',
            text: 'Briva Hamisi',
            icon: <LinkedInIcon/>
        }
    }
}