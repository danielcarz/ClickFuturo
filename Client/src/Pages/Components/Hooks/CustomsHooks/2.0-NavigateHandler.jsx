import { useNavigate } from 'react-router';


export const useNavigateHandler = () => {

    const navigate = useNavigate();

    const goToBlogLibrary = () => {

        navigate('/bloglibrary');
    }

    const goToHomelibrary = () => {

        navigate('/bloglibrary/bloghome')
    }

    const goToAboutTerminal = () => {

        navigate('/bloglibrary/bloghome/aboutterminal')
    }

    return {

        //blog library
        goToBlogLibrary,

        //home library
        goToHomelibrary,

        //go to about terminal
        goToAboutTerminal,

    }
}