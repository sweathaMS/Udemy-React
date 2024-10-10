
//popular container
import a from "../assets/images/Business Analyst.jpg"
import b from "../assets/images/Tester.jpg"
import c from "../assets/images/game developer.jpg"
import d from "../assets/images/Robotics.jpg"
import e from "../assets/images/Cloud.jpg"
import f from "../assets/images/Datascience.jpg"
import g from "../assets/images/IOT.jpg"
import h from "../assets/images/Cybersecurity.jpg"
function Popular()
{
  return(
    <div>
      <div class="popular">
    <h1  class="popular__title">Most popular</h1>
    <p class="popular__subtitle">Pick the best fit</p>
    <div class="popular__container">
        <div class="course-card">
            <img src={a}></img>
            <h3>Python Masterclass</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>449 <del>999</del></p>
        </div>
        <div class="course-card">
            <img src={b}></img>
            <h3>Software Testing Bootcamp 2024</h3>
            <p>Col Steele</p>
            <p>3.5⭐⭐⭐</p>
            <p>999 <del>2000</del></p>
        </div>
        <div class="course-card">
            <img src={c}></img>
            <h3>Game Developer Masterclass</h3>
            <p>Col Steele</p>
            <p>5.0 ⭐⭐⭐⭐⭐</p>
            <p>800 <del>2000</del></p>
        </div>
        <div class="course-card">
            <img src={d}></img>
            <h3>Advance Robotics Bootcamp</h3>
            <p>Col Steele</p>
            <p>4.5 ⭐⭐⭐⭐</p>
            <p>600 <del>1500</del></p>
        </div>
        <div class="course-card">
            <img src={e}></img>
            <h3>Cloud Computing-Masterclass</h3>
            <p>Col Steele</p>
            <p>4.9⭐⭐⭐⭐</p>
            <p>449 <del>999</del></p>
        </div>
        <div class="course-card">
            <img src={f}></img>
            <h3>Data Science- Bootcamp 2024</h3>
            <p>Col Steele</p>
            <p>3.5⭐⭐⭐</p>
            <p>999 <del>2000</del></p>
        </div>
        <div class="course-card">
            <img src={g}></img>
            <h3>Internet of Things- Masterclass</h3>
            <p>Col Steele</p>
            <p>5.0 ⭐⭐⭐⭐⭐</p>
            <p>800 <del>2000</del></p>
        </div>
        <div class="course-card">
            <img src={h}></img>
            <h3>Cybersecurity Course</h3>
            <p>Col Steele</p>
            <p>4.5 ⭐⭐⭐⭐</p>
            <p>600 <del>1500</del></p>
        </div>


    </div>
</div>
    </div>
  )
}
export default Popular