import {
  GradientText,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

import { FacePlayableAvatar } from './FacePlayableAvatar';
import { HeroAvatar } from './HeroAvatar';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Valentino</GradientText> 👋
        </>
      }
      description={
        <>
          Converting food, coffee and stress <br />
          into well-formed code since 2000. <br />
          <br />
        </>
      }
      avatar={<FacePlayableAvatar></FacePlayableAvatar>}
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="./assets/images/github-icon.png"
              alt="Github icon"
            />
          </a>
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a> */}
        </>
      }
    />
  </Section>
);

export { Hero };
