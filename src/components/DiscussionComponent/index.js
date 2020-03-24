import React from 'react';
import {Container, Row, Col, Tab, Tabs} from 'react-bootstrap'
import {discussionList} from './../../assets/discussions';
import './index.scss';

const IconCard = props => {
    return (
        <div className="d-flex flex-column icon-text text-center">
            <div className="icon-container">
                {props.icon}
            </div>
            <div>
                {props.text}
            </div>
        </div>
    )
}

const DateDiv = props => {
    const dateParts = props.date.split("/");
    const d = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    return (
        <div className="date-div p-3 text-center">
            <div className="date-date">{d.getDate()}</div>
            <div className="date-month-year">{d.toLocaleString('default', { month: 'short' })} {d.getFullYear().toString().substr(-2)}</div>
            {/* <div className="date-year"></div> */}
        </div>
    )
}

const DiscussionData = props => {
    return (
        <div id="discussion-data-tab" className="px-3 py-2 mb-3">
            <Tabs variant={"pills"} defaultActiveKey={discussionList[0].holder}>
                {
                    discussionList.map((team, i) => {
                        return (
                            <Tab key={i} eventKey={team.holder} title={team.holder}>
                                {
                                    team.discussions.map((discussion, j) => {
                                        return (
                                            <div className="discussion-event py-2 px-3 my-3 d-flex flex-row">
                                                <div className="discussion-date mr-2">
                                                    <DateDiv date={discussion.date} />
                                                </div>
                                                <div className="discussion-content">
                                                    <div className="discussion-topic">{discussion.topic}</div>
                                                    <div className="discussion-resources mt-2">
                                                        Resources
                                                        {
                                                            discussion.resources.map((resource, k) => {
                                                                return (
                                                                    <div className="discussion-resource"  key={k}>
                                                                        <a href={resource}>Resource {k+1} <i class="fa fa-link" aria-hidden="true"></i></a>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Tab>
                        )
                    })
                }
        </Tabs>
        </div>
        
    )
}

export const DiscussionComponent = props => {
    return (
        <div id="discussion-container" className="full-height">
            <Row className="full-height">
                <Col xs={12} md={6} className="full-height">
                    <Container className="px-5 pt-5 full-height text-container">
                        <h4>Weekly Discussions</h4>
                        <p>
                            ACM IIT Roorkee Student Chapter conducts weekly discussions in the core computer science fields such as Operating Systems, Networking, and Deep Learning.
                        </p>
                        <Row className={"py-4"}>
                            <Col>
                                <IconCard icon={<i class="fa fa-check-square-o" aria-hidden="true"></i>} text={"Open to all"}/>
                            </Col>
                            <Col>
                                <IconCard icon={<i class="fa fa-users" aria-hidden="true"></i>} text={"Team learning"}/>
                            </Col>
                            <Col>
                                <IconCard icon={<i class="fa fa-calendar" aria-hidden="true"></i>} text={"Regular"}/>
                            </Col>
                        </Row>
                        <div>
                        Details of the discussions can be found on the following Facebook groups:
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/groups/acmIITroorkee/">
                                    ACM Discussion Group <i class="fa fa-external-link" aria-hidden="true"></i>
                                </a>
                            </li>    
                            <li>
                                <a href="https://www.facebook.com/groups/1890944924568897/">
                                    Vision and Language Group <i class="fa fa-external-link" aria-hidden="true"></i>
                                </a>                            
                            </li>
                        </ul>
                        <DiscussionData/>                        
                        </div>
                        
                    </Container>
                </Col>
                <Col xs={4} md={6} className="full-height">No</Col>
            </Row>
        </div>
    )
}