import React from 'react';
import {Container, Row, Col, Button, ButtonGroup} from 'react-bootstrap';
import TeamImage from './../../assets/images/team/full-team.jpg';
import {teamList} from './../../assets/team';
import './index.scss'

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

export const TeamComponent = props => {
    return (
        <React.Fragment>
            <div className="full-team position-relative" style={{backgroundImage: `linear-gradient(to left, rgba(154, 46, 76, 0.6), rgba(33, 147, 176, 0.6)), url(${TeamImage})`}}>
                <div className="text-center family-text position-absolute">THE ACM FAMILY</div>
            </div>
            <Container id="team-container">
            
            <h3 className="text-center">Office Bearers</h3>
            <Row className={'justify-content-md-center'}>
                {
                    teamList['bearers'].map((obj, i) => {
                        return (
                            <Col key={i} xs={12} sm={6} lg={4} className="px-4 py-2">
                                <BearerMemberCard member={obj} key={i}/>
                            </Col>
                        )
                    })
                }
            </Row>
            <h3 className="mt-4 text-center">Vertical Heads</h3>
            <Row className={"justify-content-md-center mb-4"}>
                {
                    teamList['heads'].map((obj, i) => {
                        return (
                            <Col key={i} xs={12} sm={6} lg={4} className="px-4 py-2">
                                <BearerMemberCard member={obj} key={i}/>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
        </React.Fragment>
    )
}