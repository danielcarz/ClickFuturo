import { useNavigate } from 'react-router';


export const useNavigateHandler = () => {

    const navigate = useNavigate();

    const goToBlogLibrary = () => {

        navigate('/bloglibrary');
    }

    return {

        goToBlogLibrary,
    }
}