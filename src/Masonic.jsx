import React, { Component } from "react";
import styled from "styled-components";
import Masonry from "react-masonry-component";

const List = styled.ul`
    max-width: 980px;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid blanchedalmond;
    padding: 0;
`;

const Item = styled.li`
    list-style: none;
    border: 1px solid fuchsia;
    background: peachpuff;
    ${props => props.half && "max-width: 480px"};
    ${props => props.tall && "height: 200px;"}
    ${props => props.medium && "height: 120px;"}
    ${props => props.short && "height: 80px;"}
    width: 50%;
    font-size: 5rem;
    text-align: center;
    padding-top: 5%;
`;

class Masonic extends Component {
    render() {
        return (
            <Masonry
                elementType={"ul"}
                options={{
                    horizontalOrder: true,
                    columnWidth: 200,
                    itemSelector: ".item",
                    gutter: 20
                }}
            >
                <Item className="item" full short>
                    1
                </Item>
                <Item className="item" half short>
                    2
                </Item>
                <Item className="item" half tall>
                    3
                </Item>
                <Item className="item" half medium>
                    4
                </Item>
                <Item className="item" half short>
                    5
                </Item>
                <Item className="item" half tall>
                    6
                </Item>
                <Item className="item" half short>
                    7
                </Item>
                <Item className="item" full>
                    8
                </Item>
            </Masonry>
        );
    }
}

export default Masonic;
