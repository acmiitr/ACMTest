import React from 'react';
import {eventList} from './../../../assets/events';
import './index.scss';

export const EventCards = (props) => {
    const shuffle = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
    }
    return (
        <div className="container my-4">
            <div className="card-columns">
                {
                    shuffle(eventList.slice(0,props.count)).map((obj, i) => {
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