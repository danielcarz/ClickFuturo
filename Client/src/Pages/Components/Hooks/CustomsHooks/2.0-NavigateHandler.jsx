import { useNavigate } from 'react-router';


export const useNavigateHandler = () => {

    const navigate = useNavigate();

    const goToBlogLibrary = () => {

        navigate('/bloglibrary');
    }

    const goToHomelibrary = () => {

        navigate('/bloglibrary/bloghome')
    }

    return {

        //blog library
        goToBlogLibrary,

        //home library
        goToHomelibrary
    }
}