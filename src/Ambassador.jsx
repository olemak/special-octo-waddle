import React, { Component } from "react";
import TwoColumns from "./TwoColumns";

class Ambassador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transformedChildren: this.restructure(this.props.children)
        };
    }

    restructure = children => {
        let transformedChildren = [];
        for (let index = 0; index < children.length; index++) {
            const child = children[index];
            if (child.props.half === true) {
                let halfWidthChildrenInRow = [];
                let halfWidthChildrenInRowCount = 1;
                let nextChildIsHalfWidth =
                    children[index + 1].props.half === true;
                halfWidthChildrenInRow.push(child);
                while (nextChildIsHalfWidth) {
                    halfWidthChildrenInRow.push(
                        children[index + halfWidthChildrenInRowCount++]
                    );
                    nextChildIsHalfWidth =
                        children[index + halfWidthChildrenInRowCount].props
                            .half === true;
                }
                transformedChildren.push(halfWidthChildrenInRow);
                index = index + halfWidthChildrenInRowCount - 1;
            } else {
                transformedChildren.push(child);
            }
        }
        return transformedChildren;
    };

    render() {
        return (
            <div>
                {this.state.transformedChildren.map(child => {
                    if (Array.isArray(child)) {
                        return <TwoColumns>{child}</TwoColumns>;
                    } else {
                        {
                            return child;
                        }
                    }
                })}
            </div>
        );
    }
}

export default Ambassador;
