# ---- react-type-animation ----

![](https://github.com/Your_Repository_Name/Your_GIF_Name.gif)

# Install

     npm install react-type-animation
Requires a react and react-dom version of at least 15.0.0.

# Usage

    import TypeAnimation from 'react-type-animation';

    const ExampleComponent = () => {
      return (
        <TypeAnimation
          cursor={false}
          sequence={['React typing animation based on typical', 1000, '']}
          wrapper="h2"
        />
      );
    };
# Custom Cursor Animation

    .type::after {
      content: '|';
      animation: cursor 1.1s infinite step-start;
    }

    @keyframes cursor {
      50% {
        opacity: 0;
      }
    }
    
# Props

Prop | Required | Type | Example | Description
--- | --- | --- | --- |--- 
sequence | yes | array[] | ['One', 1000, 'Two'] | Animation sequence: TEXT followed by DELAY-IN-MS
wrapper | no | string | p,h2,div | HTML elements that Animation is wrapped around
repeat | no | number | 3, Infinity | Amount of animation repetitions
cursor | no | boolean | false, true | Display blinking cursor css-animation
className | no | string | custom-class-name | HTML class name applied to the wrapper to style the text

