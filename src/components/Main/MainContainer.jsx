import React from 'react';
import { connect } from 'react-redux';
import { openWindow, closeWindow, skipIntroAC} from '../../redux/reducers/mainReducer';
import Main from './Main';


class MainContainer extends React.Component {


    render() {
        return <Main 
            skipIntro={this.props.skipIntro} 
            works={this.props.works}
            windowWork={this.props.windowWork}
            selectWork={this.props.selectWork}
            mainStart={this.props.mainStart}
            preloder={this.props.preloder}

            openWindow={this.props.openWindow}
            closeWindow={this.props.closeWindow}
            skipIntroAC={this.props.skipIntroAC}/>
    }
}

let mapStateToProps = (state) => {
    
    return {
        skipIntro: state.main.skipIntro,
        works: state.main.works,
        windowWork: state.main.windowWork,
        selectWork: state.main.selectWork,
        mainStart: state.main.mainStart,
        preloder: state.main.preloder
    }
}


export default connect(mapStateToProps, {
    openWindow,
    closeWindow,
    skipIntroAC
})(MainContainer)
