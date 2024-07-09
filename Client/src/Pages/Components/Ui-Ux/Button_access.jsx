import '../../../Sass/UI-Ux/button_access.scss';

export const ButtonAccess = ( { children, onClick, className } ) => {


    return(

        <button className = {`ui_ux_button_access ${ className }`}   onClick={onClick}> { children } </button>
    )
}  