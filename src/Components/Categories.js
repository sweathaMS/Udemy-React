//categories
import one from "../assets/images/sale img.png";
function Category()
{
  return(
    <div>
      <div class="category">
<p class="category__s1">Development</p>
<p class="category__s1">Business</p>
<p class="category__s1">IT&Software</p>
<p class="category__s1">Personal Development</p>
<p class="category__s1"> Design</p>
<p class="category__s1">Marketing</p>
</div>
<div class="sale-img">
<img src={one}alt="Sale Image"></img>
<div class="sale-img__offers">
    <h2>Udemy Flash Sale!24 Hours to save</h2>
    <p>Get the courses for just 999.one day to save but lifetime to learn</p>
</div>

</div>

    </div>
  )
}
export default Category