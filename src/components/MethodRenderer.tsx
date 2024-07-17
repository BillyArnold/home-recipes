import React from 'react';

type TextElement = {
    type: 'text';
    text: string;
};

type HeadingElement = {
    type: 'heading';
    level: number;
    children: TextElement[];
};

type ParagraphElement = {
    type: 'paragraph';
    children: TextElement[];
};

export type MethodElement = HeadingElement | ParagraphElement | TextElement;

type MethodRendererProps = {
    method: MethodElement[];
};

const MethodRenderer: React.FC<MethodRendererProps> = ({ method }) => {
    const renderElement = (element: MethodElement): React.ReactNode => {
        switch (element.type) {
            case 'heading':
                return React.createElement(
                    `h${element.level}`,
                    {},
                    element.children.map((child, index) => renderElement(child))
                );
            case 'paragraph':
                return <p>{element.children.map((child, index) => renderElement(child))}</p>;
            case 'text':
                return element.text;
            default:
                return null;
        }
    };

    return (
        <div className="method">
            {method.map((element, index) => (
                <div key={index}>{renderElement(element)}</div>
            ))}
        </div>
    );
};

export default MethodRenderer;
