import React from 'react';
import {Container, Row, Col, Button, ButtonGroup} from 'react-bootstrap';
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
                <div className="bearer-member-post mb-3 flex-grow-1">
                    <span className="text-muted">{props.member.position}</span>
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

const VerticalHeadCard = props => {
    return (
        <div className="vertical-head-card">>

        </div>
    )
}

const MemberCard = props => {
    return (
        <div className="member-card" style={{backgroundImage: `url(${props.member.image})`}}>
            <div clasName="member-overlay">

            </div>
        </div>
    )
}

export const TeamComponent = props => {
    return (
        <Container id="team-container">
            <h3>Office Bearers</h3>
            <Row>
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
            <h3>Vertical Heads</h3>
            <Row>
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
            <h3>Members</h3>
            <Row>
                {
                    teamList['members'].map((obj, i) => {
                        return (
                            <Col key={i} xs={6} sm={4} lg={2} className="p-0">
                                <MemberCard member={obj} key={i}/>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}