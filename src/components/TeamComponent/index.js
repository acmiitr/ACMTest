import React from 'react';
import {Container, Row, Col, Button, ButtonGroup} from 'react-bootstrap';
import {teamList} from './../../assets/team';
import './index.scss'

const TeamMemberCard = props => {
    return (
        <Row className="team-card">
            <Col xs={4} style={{backgroundImage: `url(${props.member.image})`}} className="team-image"></Col>
            <Col xs={8} className="d-flex flex-column px-4 pt-3">
                <div className="member-name">
                    <span>{props.member.name}</span>
                </div>
                <div className="member-post mb-3">
                    <span className="text-muted">{props.member.position}</span>
                </div>
                {props.member.nickname?(<div className="field member-nick mb-2">
                    <span>Nickname</span>
                    <span>{props.member.nickname}</span>
                    </div>):''}
                <div className="field pro-field flex-grow-1">
                    <span>Pro At</span>
                    <span>{props.member.pro}</span>
                </div>
                <div className="member-social d-flex flex-row justify-content-around">
                <ButtonGroup aria-label="Basic example">
                    <Button variant="primary"><i className="fa fa-facebook-square"></i></Button>
                    <Button variant="primary"><i className="fa fa-envelope"></i>  </Button>
                    <Button variant="primary"><i className="fa fa-github-square"></i> </Button>
                </ButtonGroup>
                </div>
            </Col>
        </Row>
    )
}

export const TeamComponent = props => {
    return (
        <Container id="team-container">
            <h3>Office Bearers</h3>
            <Row>
                {
                    teamList.map((obj, i) => {
                        return (
                            <Col xs={12} md={4} className="p-4">
                                <TeamMemberCard member={obj} key={i}/>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}