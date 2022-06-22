import React from 'react';
import './pageWorks.scss';

const MyWorks = (props) => {

    document.title = 'My works';

    let openItem = (i) => {
        props.openWindow(i);
    }

    

    let works = props.works.map( (el, i) => {
        return (
            <div className="works_item" key={i}>
                <img src={el.img} className="img-work"/>
                <div className="wrapper-work"></div>
                <button className="work-text-block" onClick={() => openItem(i)}>
                    <div className="work-text">
                        <p className="work-name">открыть</p>
                    </div>
                </button>
            </div>
        )
    })




    return (
        <div className='works_block' >
            {works}
        </div>
    )
}

export default MyWorks;