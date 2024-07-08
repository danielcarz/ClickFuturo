import '../../../Sass/UI-Ux/button_access.scss';

export const ButtonAccess = ( { children, onClick } ) => {


    return(

        <button className= "ui_ux_button_access" onClick={onClick}> { children } </button>
    )
}  