import { Link } from "react-router-dom"

function Header () {
    
    return (
        <div>
    <div className="Header">
            
     <h1>Cristian Alvarado</h1>
     <img className="Header--image" src="./prfo.png"/>
     <p>Front end developer</p>
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
        <div className="parent">
        <div className="body">
        <h2 className="h2--body" >About me</h2>
        <p className="para--body">Hi, my name is Cristian, I am a coding enthusiast. I am eager to learn and open to new challenges.
        My primary focus is to land a job as a front end developer. My areas of expertise are html, css, Javascript, and React.Js. 
           </p>
           <div className="body--icons">
        <img className="body--icons-img" src="./logo192.png"/>
        <img className="body--icons-img" src="./js.png" />
        <img className="body--icons-img" src="./css.png" />
        <img className="body--icons-img" src="./html.png" />
        </div>
        </div> 
           
        
           
        <div className="mywork">
        <Link to="/myProjects"> 
        <button className="myWork--button">My work</button> 
        </Link>
        </div>
        
</div>
</div>
    )
}
export default Header