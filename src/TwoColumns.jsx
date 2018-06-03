import React, { Component } from "react";
import styled from "styled-components";

const List = styled.ul`
    max-width: 980px;
    margin-left: auto;
    margin-right: auto;
    border: 2px solid blanchedalmond;
    padding: 0;
`;

class TwoColumns extends Component {
    constructor(props) {
        super(props);
        this.colContainerRef = React.createRef();
        this.state = {
            isWide: false,
            firstColItems: this.props.children.filter((item, index) => {
                if (index % 2 === 0) return item;
            }),
            secondColItems: this.props.children.filter((item, index) => {
                if (index % 2 !== 0) return item;
            })
        };
    }

    Single = () => <div style={{ width: "100%" }}>{this.props.children}</div>;
    Double = () => {
        return (
            <React.Fragment>
                <div className="firstColumn">{this.state.firstColItems}</div>
                <div className="secondColumn" style={{ float: "left" }}>
                    {this.state.secondColItems}
                </div>
            </React.Fragment>
        );
    };

    wideDisplay() {
        const isWide = this.colContainerRef.current.clientWidth > 640;
        this.setState({ isWide });
    }

    componentDidMount() {
        this.wideDisplay();
        window.addEventListener("resize", this.wideDisplay.bind(this));
    }

    render() {
        return (
            <div ref={this.colContainerRef} style={{ display: "flex" }}>
                {this.state.isWide ? <this.Double /> : <this.Single />}
            </div>
        );
    }
}

export default TwoColumns;
