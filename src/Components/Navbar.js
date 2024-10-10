//Navbar
function Navbar()
{
  return(
    <div>
      <div class="navbar">
        <div class="navbar__s1">
             <h1 class="navbar__s1__title">Udemy</h1>
        </div>
        <div class="navbar__s2">
            <i class="fa-solid fa-magnifying-glass" style={{color: "#050505"}}></i>
         <input placeholder="Search for anything here. Tech,Business,Science,."></input>
        </div>
    <div class="navbar__s3">
         <p>Courses</p>
       
          <div class="mylearning">
            <p> My Learning</p>
            <div class="mylearning__popup">
                <p> you didn't purchase anything yet</p>
             </div>
          </div>
         
         
         <i class="fa-solid fa-cart-shopping" style={{color: "#000000"}}></i>
         <i class="fa-solid fa-bell" style={{color: "#000000"}}></i>
         <i class="fa-solid fa-user"></i>
    </div>

         <div class="nav__s4">
            <i class="fa-solid fa-bars"></i>
        </div>
        </div>
        </div>
        

)
}
 export default Navbar