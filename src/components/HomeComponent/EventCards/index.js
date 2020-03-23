import React from 'react';
import {homeEventList} from './../../../assets/events';
import './index.scss';

export const EventCards = (props) => {
    return (
        <div className="container my-4">
            <div className="card-columns">
                {
                    homeEventList.map((obj, i) => {
                        return (
                            <div className="card border-0 text-white" key={i}>
                                <img className="card-img rounded-0" src={obj.img} alt={obj.heading}/>
                                <div className="card-img-overlay p-0">
                                    <div className="card-block  position-relative">
                                        <h5 className="card-title">{obj.heading}</h5>
                                        {obj.subtitle}
                                        <small className="pb-5">{obj.date}</small>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}