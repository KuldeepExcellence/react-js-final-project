import React from 'react'
import "./Topbar.css"
import {NotificationsNoneRounded , LanguageRounded , Settings} from '@mui/icons-material';
export default function Topbar() {
  return (
    <div className='topbar'>
       <div className='topbarWrapper'>
       <div className='topLeft'>
       <span className='logo'>ADMIN</span>
       </div>
       <div className='topRight'>
        <div className='topbarIconContainer'>
          <NotificationsNoneRounded/>
          <span className='topIconBadge'>2</span>
        </div>
        <div className='topbarIconContainer'>
          <LanguageRounded />
          <span className='topIconBadge'>2</span>
        </div>
        <div className='topbarIconContainer'>
          <Settings/>
        
        </div>
        </div>
       </div>
    </div>
  )
}
