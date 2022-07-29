import React from 'react'
import requests from '../utils/requests'

function Nav() {
  return (
    <nav>
        <div>
            {/* loop through the requests, label each as a key and 
            get the title and url */}
            {Object.entries(requests).map()}
        </div>
    </nav>
  )
}

export default Nav