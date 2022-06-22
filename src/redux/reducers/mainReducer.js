import work1 from '../../assets/images/works/1.png';
import work2 from '../../assets/images/works/2.png';
import work3 from '../../assets/images/works/3.png';
import work4 from '../../assets/images/works/4.png';
import work5 from '../../assets/images/works/5.png';
import work6 from '../../assets/images/works/6.png';
import work7 from '../../assets/images/works/7.png';
import work8 from '../../assets/images/works/8.png';
import work9 from '../../assets/images/works/9.png';
import work10 from '../../assets/images/works/10.png';
import work11 from '../../assets/images/works/11.png';
import work12 from '../../assets/images/works/12.png';
import { formAPI } from '../../API/api';

const BANG_DISABLE = 'BANG_DISABLE';
const TEXT_INTRO = 'TEXT_INTRO';
const SKIP_INTRO = 'SKIP_INTRO';
const OPEN_WINDOW = 'OPEN_WINDOW';
const CLOSE_WINDOW = 'CLOSE_WINDOW';
const SEND_FORM = 'SEND_FORM';
const CLOSE_THANK_PAGE = 'CLOSE_THANK_PAGE';
const MAIN_START = 'MAIN_START';
const PRELODER = 'PRELODER';

let initialState = {

    bigBang: false,
    textIntro: null,
    selectText: [
        'that\'s how it all started',
        'birth of a billion stars',
        'and on one of the stars',
        'we will change the world'
    ],

    skipIntro: false,
    mainStart: false,
    preloder: false,

    windowWork: false,
    selectWork: -1,

    works: [
        {img: work1, link: 'https://github.com/WilliamsDima/Clean_and_simple_website', text: 'открыть репозиторий'},
        {img: work2, link: 'https://github.com/WilliamsDima/Model_window', text: 'открыть репозиторий'},
        {img: work3, link: 'https://github.com/WilliamsDima/Mogo', text: 'открыть репозиторий'},
        {img: work4, link: 'https://github.com/WilliamsDima/Page-Template', text: 'открыть репозиторий'},
        {img: work5, link: 'https://github.com/WilliamsDima/Personal-blog', text: 'открыть репозиторий'},
        {img: work6, link: 'https://github.com/WilliamsDima/Alfastroi', text: 'открыть репозиторий'},
        {img: work7, link: 'https://github.com/WilliamsDima/MyPortfole-version-1', text: 'открыть репозиторий'},
        {img: work8, link: 'https://github.com/WilliamsDima/pc_courses', text: 'открыть репозиторий'},
        {img: work9, link: 'https://github.com/WilliamsDima/Cats-store', text: 'открыть репозиторий'},
        {img: work10, link: 'https://github.com/WilliamsDima/creater-SPA-Pattern', text: 'открыть репозиторий'},
        {img: work11, link: 'https://github.com/WilliamsDima/test_task_Axeta', text: 'открыть репозиторий'},
        {img: work12, link: 'https://play.google.com/store/apps/details?id=com.TELGame.BuildTower', text: 'открыть Google Play'}
    ],

    sendForm: false
};


const mainReducer = (state = initialState, action) => {
    
    switch(action.type) {

        case BANG_DISABLE: {

            let copyState = {...state}

            copyState.bigBang = true
            
            return copyState;
        }

        case PRELODER: {

            let copyState = {...state}

            copyState.preloder = true
            
            return copyState;
        }


        case MAIN_START: {

            let copyState = {...state}

            copyState.mainStart = true
            
            return copyState;
        }

        case TEXT_INTRO: {

            let copyState = {...state}

            copyState.textIntro = action.textIntro
            
            return copyState;
        }

        case SKIP_INTRO: {

            let copyState = {...state}

            copyState.skipIntro = true
            copyState.mainStart = false
            
            return copyState;
        }

        case OPEN_WINDOW: {

            let copyState = {...state}

            copyState.windowWork = true;
            copyState.selectWork = action.selectId
            
            return copyState;
        }

        case CLOSE_WINDOW: {

            let copyState = {...state}

            copyState.windowWork = false
            
            return copyState;
        }

        case SEND_FORM: {

            let copyState = {...state}

            if(action.status === 200) {
                copyState.sendForm = true
            } else {    
                copyState.sendForm = false
            }

            return copyState;
        }

        case CLOSE_THANK_PAGE: {

            let copyState = {...state}

                copyState.sendForm = false

            return copyState;
        }

        default:
            return state
    }
}

export let onPreloderAC = () => {
    
    return {
        type: PRELODER
    }
}


export let closeThankPage = () => {
    
    return {
        type: CLOSE_THANK_PAGE
    }
}

export let bigBangDisable = () => {
    
    return {
        type: BANG_DISABLE
    }
}

export let mainStartAC = () => {
    
    return {
        type: MAIN_START
    }
}

export let textIntroAC = (text) => {
    
    return {
        type: TEXT_INTRO,
        textIntro: text
    }
}

export let skipIntroAC = () => {
    
    return {
        type: SKIP_INTRO
    }
}

export let openWindow = (i) => {
    
    return {
        type: OPEN_WINDOW,
        selectId: i
    }
}

export let closeWindow = () => {
    
    return {
        type: CLOSE_WINDOW
    }
}

export let sendForm = (status) => {
    
    return {
        type: SEND_FORM,
        status: status
    }
}



// THUNK \\

export const formThunk = (formData) => {
    
    return (dispatch) => {
        formAPI.form(formData.username, formData.email, formData.text)
        .then( response => {
            dispatch(sendForm(response.status)) 
        })
    }
}


export default mainReducer;