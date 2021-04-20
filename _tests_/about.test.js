///does about me page render without error
// Link.react.js
import React from 'react';
import renderer from 'react-test-renderer';
import AboutMe  from "../src/NavPages/aboutMe";

//output is not null

//all variables are defines
//does about render 
test("about me renders ", () => {
    const { getByTestId } = renderer.create(
      <AboutMe  />
    );
    let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  });
