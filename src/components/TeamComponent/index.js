import React from 'react';
import {Container, Row, Col, Button, ButtonGroup} from 'react-bootstrap';
import TeamImage from './../../assets/images/team/full-team.jpg';
import {teamList} from './../../assets/team';
import './index.scss';
import './card.scss';


const getRandomColorString = () => {
    return `${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)}`;
}

const getTextColorString = (color) => {
    const rgb = color.split(',');
    const brightness = Math.round(((parseInt(rgb[0]) * 299) +
    (parseInt(rgb[1]) * 587) +
    (parseInt(rgb[2]) * 114)) / 1000);
    return (brightness > 125) ? '#181818' : 'white';
}

const BearerMemberCard = props => {
    return (
        <Row className="bearer-team-card">
            <Col xs={4} style={{backgroundImage: `url(${props.member.image})`}} className="bearer-team-image"></Col>
            <Col xs={8} className="d-flex flex-column px-4 pt-3">
                <div className="bearer-member-name">
                    <span>{props.member.name}</span>
                </div>
                <div className="bearer-member-post mb-3">
                    <span className="text-muted">{props.member.position}</span>
                </div>
                <div className="field pro-field flex-grow-1">
                    <span>Slack ID</span>
                    <span>@{props.member.slack}</span>
                </div>
                <div className="bearer-member-social d-flex flex-row justify-content-around">
                <ButtonGroup aria-label="Basic example">
                    <Button variant="primary" href={`https://facebook.com/${props.member.fb}`}><i className="fa fa-facebook-square"></i></Button>
                    <Button variant="primary" href={`mailto:${props.member.mail}`}><i className="fa fa-envelope"></i></Button>
                    <Button variant="primary" href={`https://github.com/${props.member.github}`}><i className="fa fa-github-square"></i> </Button>
                </ButtonGroup>
                </div>
            </Col>
        </Row>
    )
}

const NewDemoCard = props => {
    const overlay_color = getRandomColorString();
    const alt_color = getTextColorString(overlay_color);
    return (
        <React.Fragment>
            <div className="card-container position-relative">
                <div className="position-absolute card-new member-card" style={{backgroundImage: `${props.member.image?``:`linear-gradient(0deg, rgba(${overlay_color}, 0.2), rgba(${overlay_color}, 0.2)), `}url(${props.member.image})`}}>
                    
                </div>
                <div className="position-absolute overlay px-2 d-flex flex-column" style={{backgroundColor: `rgba(${overlay_color}, 0.6)`, color: `${alt_color}`}}>
                    <div className="inner">
                        {/* <div className="member-card-name">{props.member.name}</div>
                        <div className="member-card-position">{props.member.position}</div> */}
                        <div className="member-card-social-icons d-none d-md-block">                        
                            {
                                props.member.fb?(
                                <Button style={{color: `rgba(${overlay_color}, 0.6)`, backgroundColor: `${alt_color}`}} variant={"light"} className={"member-card-social-icon m-1"} 
                                href={`https://facebook.com/${props.member.fb}`} target="blank">
                                <i className="fa fa-facebook-square"></i>
                                </Button>
                                ):(<React.Fragment/>)
                            }
                            {
                                props.member.github?(
                                <Button style={{color: `rgba(${overlay_color}, 0.6)`, backgroundColor: `${alt_color}`}} variant={"light"} className={"member-card-social-icon m-1"} 
                                href={`https://github.com/${props.member.github}`} target="blank">
                                <i className="fa fa-github"></i>
                                </Button>
                                ):(<React.Fragment/>)
                                
                            }
                            {
                                props.member.mail?(
                                <Button style={{color: `rgba(${overlay_color}, 0.6)`, backgroundColor: `${alt_color}`}} variant={"light"} className={"member-card-social-icon m-1"} 
                                href={`mailto:${props.member.mail}`} target="blank">
                                <i className="fa fa-envelope"></i>
                                </Button>
                                ):(<React.Fragment/>)
                            }
                            {
                                props.member.website?(
                                <Button style={{color: `rgba(${overlay_color}, 0.6)`, backgroundColor: `${alt_color}`}} variant={"light"} className={"member-card-social-icon m-1"} 
                                href={`${props.member.website}`} target="blank">
                                <i className="fa fa-globe"></i>
                                </Button>
                                ):(<React.Fragment/>)
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="member-card-info pt-1">
                <div className="member-card-name">{props.member.first_name}</div>
                <div className="member-card-name">{props.member.last_name}</div>
                <div className="member-card-position">{props.member.position}</div>
                <ButtonGroup aria-label="social" className="member-card-social-icons d-block d-md-none">                        
                    {
                        props.member.fb?(
                        <Button style={{color: `rgba(${overlay_color}, 1)`}} variant={"light"} className={"member-card-social-icon"} 
                        href={`https://facebook.com/${props.member.fb}`} target="blank">
                        <i className="fa fa-facebook-square"></i>
                        </Button>
                        ):(<React.Fragment/>)
                    }
                    {
                        props.member.github?(
                        <Button style={{color: `rgba(${overlay_color}, 1)`}} variant={"light"} className={"member-card-social-icon"} 
                        href={`https://github.com/${props.member.github}`} target="blank">
                        <i className="fa fa-github"></i>
                        </Button>
                        ):(<React.Fragment/>)
                        
                    }
                    {
                        props.member.mail?(
                        <Button style={{color: `rgba(${overlay_color}, 1)`}} variant={"light"} className={"member-card-social-icon"} 
                        href={`mailto:${props.member.mail}`} target="blank">
                        <i className="fa fa-envelope"></i>
                        </Button>
                        ):(<React.Fragment/>)
                    }
                    
                </ButtonGroup>
            </div>       
        </React.Fragment>
         
    )
}

export const TeamComponent = props => {
    return (
        <React.Fragment>
            <div className="full-team position-relative" style={{backgroundImage: `linear-gradient(to left, rgba(154, 46, 76, 0.6), rgba(33, 147, 176, 0.6)), url(${TeamImage})`}}>
                <div className="text-center family-text position-absolute">THE ACM FAMILY</div>
            </div>
            <Container id="team-container">
            <h3 className="text-center">Faculty Advisor</h3>
            <Row className={'justify-content-md-center mb-2'}>
                {
                    teamList['advisor'].map((obj, i) => { 
                        return (
                            <Col key={i} xs={4} sm={3} lg={2} className="p-2">
                                {/* <BearerMemberCard member={obj} key={i}/> */}
                                <NewDemoCard member={obj}/>
                            </Col>
                        )
                    })
                }
            </Row>
            <h3 className="text-center">Office Bearers</h3>
            <Row className={'justify-content-md-center mb-2'}>
                {
                    teamList['bearers'].map((obj, i) => { 
                        return (
                            <Col key={i} xs={4} sm={3} lg={2} className="p-2">
                                {/* <BearerMemberCard member={obj} key={i}/> */}
                                <NewDemoCard member={obj}/>
                            </Col>
                        )
                    })
                }
            </Row>
            <h3 className="mt-4 text-center">Vertical Heads</h3>
            <Row className={"justify-content-md-center mb-2"}>
                {
                    teamList['heads'].map((obj, i) => {
                        return (
                            <Col key={i} xs={4} sm={3} lg={2} className="p-2">
                                {/* <BearerMemberCard member={obj} key={i}/> */}
                                <NewDemoCard member={obj}/>
                            </Col>
                        )
                    })
                }
            </Row>
            <h3 className="mt-4 text-center mb-2">Members</h3>
            <Row className={"justify-content-md-center mb-2"}>
                {
                    teamList['members'].map((obj, i) => {
                        return (
                            <Col key={i} xs={4} sm={3} lg={2} className="p-2">
                                {/* <BearerMemberCard member={obj} key={i}/> */}
                                <NewDemoCard member={obj}/>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
        </React.Fragment>
    )
}