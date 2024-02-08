
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import Strings from '../Shared/Strings'
import { TypeAnimation } from 'react-type-animation';
function About() {
  return (
    <>
      <h2 className="max-w-xl text-center text-lg mt-8">{Strings.ABOUT_HEADING}</h2>
      <div className="flex items-center justify-center space-x-4 mt-10">
        <SlArrowLeft className="text-3xl text-orange-800 mt-8" />
        <h2 className="text-3xl text-gray-400 mt-8">
          I am a motivated, sociable and hardworking person with great
          <TypeAnimation
            cursor={true}
            sequence={[" communication", 2000, " teamwork", 2000, " problem-solving", 2000, " leadership"]}
            wrapper="span"
            repeat={Infinity}
            speed={5}
          />
        </h2>
        <SlArrowRight className="text-3xl text-orange-800 mt-8" />
      </div>
    </>

  )
}

export default About