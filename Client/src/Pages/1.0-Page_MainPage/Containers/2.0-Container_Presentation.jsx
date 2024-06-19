//SASS
import '../../../Sass/Pages/1.0-Page_MainPage/Containers/2.0-SASS-Container_Presentation.scss'


//ui ux compoenents
import { ButtonAccess } from '../../Components/Ui-Ux/index.js';


export const Container_Presentation = () => {

    return(

        <div className = "container_presentation">
            
            <figure>
                <div>
                    
                    <h1>Titulo de main page</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, inventore?</p>

                </div>

                <div>
                    
                    <ButtonAccess> Clic to access </ButtonAccess>

                </div>
               
            </figure>

        </div>
    )
}   