import { Typography } from '@mui/material';
import React from 'react';
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline';
import resumeData from '../Utils/resumeData';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import './Profile.css'
import { TimelineContent, TimelineItem } from '@mui/lab';
import CustomButton from '../Button/Button';
import { GetApp } from '@mui/icons-material';

const CustomTimelineItem= ({title, text, link}) =>(
    <TimelineItem>
        <CustomTimelineSeparator/>
        <TimelineContent className='timeline_content'>
            
            {link ? (<Typography className='timelineItem_text'>
                <span>{title}: </span><a href={link} target='_blank' rel="noreferrer">{text}</a>
            </Typography >): (
                <Typography className='timelineItem_text'><span>{title}: </span> {text}</Typography>
            )}
        </TimelineContent>
    </TimelineItem>
)

const Profile = () => {
  return <div className='profile container_shadow'>
      <div className='profile_name'>
          <Typography className='name'>{resumeData.name}</Typography>
          <Typography className='title'>{resumeData.title}</Typography>
      </div>
      <figure className='profile_image'>
          <img src={require('../../assets/images/display.png')} alt=''></img>
      </figure>
      <div className="profile_information">
      <CustomTimeline icon={<PersonOutlineIcon/>}>
                    <CustomTimelineItem title='Name' text={resumeData.name}/>
                    <CustomTimelineItem title='Dealers In' text={resumeData.dealers_in}/>
                    <CustomTimelineItem title='Address' text={resumeData.address}/>

                    {Object.keys(resumeData.socials).map((key)=>(
                        <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link}/>
                    ))}
                    </CustomTimeline> 

                    <div className='button_container'>
                <CustomButton text= {'Download'} icon={<GetApp/>}/>
                </div>
      </div>
  </div>;
};

export default Profile;
