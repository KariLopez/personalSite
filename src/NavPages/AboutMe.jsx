
import Footer from '../components/Footer';
import Menu from '../components/Menu';
function AboutMe(){
    return(
        <div>
            <Menu/>
            <textarea name="" id="" cols="30" rows="10">
                A summary about who I am professionally, my interests, aspirations, and career path? 
            </textarea> 
            <img src='' title='headshot'/>
            <div className='ImageReel'>
            <Story src='https://i.imgur.com/fC213Az.jpg' caption='Teaching an Intro to Coding Class hosted by Grand Circus' icon='school'/>
            <Story src='https://i.imgur.com/4FWTH43.jpg' caption='Volunteering at Weekend for Good with Citizen Labs Team' icon='self_improvement'/>
            <Story src='https://i.imgur.com/UOBt49t.jpg' caption='Honored to have been part of this great panel with other women working in tech from West Michigan!' icon='emoji_objects'/>
            <Story src='https://i.imgur.com/CrzJw60.png' caption='I was so excited to be a part of this panel in collaboration with The Hive, such a cool co-working space concept' icon='whatshot'/>
        </div>
            <Footer/>
        </div>
    )
}
export default AboutMe; 