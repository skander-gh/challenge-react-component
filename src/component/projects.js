import John from '../image/John-Doe.jpg'
import firstimg from '../image/proj1.jpg'
import secondimg from '../image/proj2.jpg'
import thirdimg from '../image/proj3.jpg'
import lastimg from '../image/proj4.jpg'

const arr =[{name:'project1', url:firstimg} , {name:'project2', url:secondimg}, {name:'project3', url:thirdimg}, {name:'project4', url:lastimg}]



function Proj (){


return(
    <section id="projects">
    <h2 className="text-important">Projects</h2>
    <div className="projects-container">


       {arr.map(el=> <div class="project-card">
        <img src={el.url} alt="project" />
        <h3>{el.name}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
          aliquam.
        </p>
        <p><a href="#">Github Link</a></p>
      </div>
      )}
     
      
    </div>
  </section>
)}

export default Proj