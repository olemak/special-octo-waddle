import React, { Component } from "react";
import styled from "styled-components";
// import Masonic from "./Masonic";
//import TwoColumns from "./TwoColumns";
import Ambassador from "./Ambassador";

import "./App.css";

const Item = styled.div`
    list-style: none;
    border: 1px solid fuchsia;
    background: peachpuff;

    ${props => props.tall && "height: 200px;"}
    ${props => props.medium && "height: 120px;"}
    ${props => props.short && "height: 80px;"}

    font-size: 5rem;
    text-align: center;
    padding-top: 5%;
`;

class App extends Component {
    render() {
        return (
            <div className="App">
                <Ambassador>
                    <Item className="item" full short>
                        1 - full
                    </Item>
                    <Item className="item" full medium>
                        2 - full
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
                    <Item className="item" full tall>
                        6 - full
                    </Item>
                    <Item className="item" half medium>
                        7
                    </Item>
                    <Item className="item" half short>
                        8
                    </Item>
                    <Item className="item" half short>
                        9
                    </Item>
                    <Item className="item" half medium>
                        10
                    </Item>
                    <Item className="item" half short>
                        11
                    </Item>
                    <Item className="item" half tall>
                        12
                    </Item>
                    <Item className="item" full>
                        13 - full
                    </Item>
                </Ambassador>
                {/*<Masonic />*/}
            </div>
        );
    }
}

export default App;
