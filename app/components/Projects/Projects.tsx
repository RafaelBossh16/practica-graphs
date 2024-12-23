import styled from "styled-components";

const Section = styled.section`
  background-color: #333;
  color: white;
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
`;

const ProjectCard = styled.div`
  background-color: #4f4f4f;
  color: white;
  padding: 1rem;
  margin: 1rem 0;
`;

export const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "This is a project"
    },
    {
      title: "Project 2",
      description: "This is a project"
    },
    {
      title: "Project 3",
      description: "This is a project"
    }
  ];
  return (
    <Section>
      <Title>Projects</Title>
      <div>
        {projects.map((project, index) => {
          return (
            <ProjectCard key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </ProjectCard>
          );
        })}
      </div>
    </Section>
  );
};