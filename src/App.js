import { useState } from "react";
import styled from "styled-components";

import ProjectSlider from "./modules/Home/pages/Slider"
function App() {
  const [data] = useState({
    projects: [
      {
        title: "Project #1",
        deadline: "2021-10-05",
        description: "About project 1",
        comments: [],
        author: {
          avatar: "https://thispersondoesnotexist.com/image",
          name: "Author 1",
        },
        money: {
          raised: 5,
          goal: 10,
        },
      },
      {
        title: "New project",
        deadline: "2021-09-30",
        description: "Info about project",
        comments: [],
        author: {
          avatar: "https://thispersondoesnotexist.com/image",
          name: "Author 2",
        },
        money: {
          raised: 10,
          goal: 10,
        },
      },
      {
        title: "Wow project title",
        deadline: "2021-09-25",
        description: "Lorem ipsum",
        comments: [],
        author: {
          avatar: "https://thispersondoesnotexist.com/image",
          name: "Author 3",
        },
        money: {
          raised: 5,
          goal: 50,
        },
      },
      {
        title: "Project",
        deadline: "2021-12-12",
        description: "Some text",
        comments: [],
        author: {
          avatar: "https://thispersondoesnotexist.com/image",
          name: "Author 4",
        },
        money: {
          raised: 7,
          goal: 10,
        },
      },
      {
        title: "No 5",
        deadline: "2022-05-19",
        description: "Idk",
        comments: [],
        author: {
          avatar: "https://thispersondoesnotexist.com/image",
          name: "Author 5",
        },
        money: {
          raised: 15,
          goal: 30,
        },
      },
    ],
  });

  return (
    <AppWrapper>
      <ProjectsTitle>Trending projects</ProjectsTitle>
      <ProjectSlider data={data}/>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  margin-top: 5%;
`
const ProjectsTitle = styled.h1`
font-family: "Yaldevi";
  text-align: center;
  font-size: 3.5em;
  font-weight: 900;
  margin-bottom: 2%;
  color: #282828;
`

export default App;
