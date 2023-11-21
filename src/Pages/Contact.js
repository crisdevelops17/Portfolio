import React from "react";


function Contact () {
    return (
    <div className="contacts">
        <h1>Contact me</h1>
        <h2>Email: crisdevelops17@gmail.com </h2>
        <h2>Phone Number: (719)654-7763</h2>
        <div className="header--imgs">
        <img onClick={() => {
      window.open("https://github.com/crisdevelops17", "_blank");
    }}
       className="header--icons" src="./github.png" />
        <img 
        onClick = {() => {
            window.open("https://www.linkedin.com/jobs/?src=go-pa&trk=sem-ga_campid.18853522261_asid.146084015209_crid.633923221414_kw.linkedin_d.c_tid.kwd-296170574619_n.g_mt.e_geo.9029022&mcid=6994434350142418944&cid=&gclid=CjwKCAiAx_GqBhBQEiwAlDNAZklQW3ihu2OCVCrEJuugxaY3eTK0GmpG4Yc1dVIW5XbF7CgeQ6mATRoCStwQAvD_BwE&gclsrc=aw.ds", "_blank");
          }}
        className="header--icons" src="./link.png" />
        <img 
        onClick={(e) => {window.location.href ='mailto:crisdevelops17@gmail.com';}}
        className="header--icons" src="./whitemail.png" />
        </div>
    </div>
    )
}
export default Contact