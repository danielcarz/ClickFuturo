//SASS
import '../../../Sass/Pages/1.0-Page_MainPage/Containers/3.0-SASS-Container_Menu.scss';

//UI-UX COMPONENTS
import { ButtonAccess } from '../../Components/Ui-Ux/index.js';

export const  Container_Menu = () => {


    return(

        <div className ="container_menu">

            <div className = "box box-one_menu_one"> 
                <ButtonAccess> acesso contenido 1 </ButtonAccess>
                <ButtonAccess> acesso contenido 1 </ButtonAccess> 
                <ButtonAccess> acesso contenido 1 </ButtonAccess> 
            
            </div>

            <div className = "box box-two_menu_two"> 
                <ButtonAccess> acceso contenido 2 </ButtonAccess>
                <ButtonAccess> acesso contenido 1 </ButtonAccess> 
                <ButtonAccess> acesso contenido 1 </ButtonAccess> 
            
            </div>

            <div className = "box box-three_menu_three"> 
                <ButtonAccess> acceso contenido 3 </ButtonAccess>
                <ButtonAccess> acesso contenido 1 </ButtonAccess> 
                <ButtonAccess> acesso contenido 1 </ButtonAccess> 
            
            </div>

        </div>
    )
}