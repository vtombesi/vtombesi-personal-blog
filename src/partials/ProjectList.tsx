import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const data: any = await fetch(
  'https://api.github.com/search/repositories?q=user:vtombesi+sort:updated'
).then((response) => response.json());

const { items } = data;

const ProjectList = () => {
  return (
    <Section
      title={
        <>
          Recent <GradientText>Projects</GradientText>
        </>
      }
    >
      <div className="flex flex-col gap-6">
        {items &&
          items.length > 0 &&
          items
            .slice(0, 5)
            .map(({ name, description, html_url, owner, language }: any) => {
              return (
                <Project
                  name={name}
                  description={description}
                  link={html_url}
                  img={{
                    src: owner.avatar_url,
                    alt: `Avatar of ${name}`,
                  }}
                  key={`project-${name}`}
                  category={
                    <>
                      <Tags color={ColorTags.FUCHSIA}>{language}</Tags>
                    </>
                  }
                />
              );
            })}
      </div>
    </Section>
  );
};

export { ProjectList };
