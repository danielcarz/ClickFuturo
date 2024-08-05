import { useNavigate } from 'react-router';


export const useNavigateHandler = () => {

    const navigate = useNavigate();

    const goToBlogLibrary = () => {

        navigate('/bloglibrary');
    }

    const goToHomelibrary = () => {

        navigate('/bloglibrary/bloghome');
    }

    const goToAboutIntroToInformatic = () => {

        navigate('/bloglibrary/bloghome/introduction_to_informatics');
    }

    const goToAboutClickfuturo = () => {

        navigate('./aboutclickfuturo');
    }

    return {

        //blog library
        goToBlogLibrary,

        //home library
        goToHomelibrary,

        //go to about terminal
        goToAboutIntroToInformatic,

        //go to about click futuro
        goToAboutClickfuturo, 

    }
} 