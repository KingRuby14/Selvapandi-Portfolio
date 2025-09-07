import { Star } from "lucide-react";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alexandra",
      mentions: "Pilot Horizons - Client School Student",
      review:
        "Working with Selvapandi on Pilot Horizons was an incredible experience! Despite a tight deadline, the website was delivered within just 12 hours without compromising quality. The platform made complex concepts easy to grasp, offering a well-structured, engaging, and resourceful learning experience.",
    },
    {
      name: "Vikram Trust",
      mentions: "Client NGO - Unclaimed Project – Now Part of My Portfolio",
      review:
        "Originally a client project, Vikram Trust’s website became a testament to my commitment to quality and innovation. Despite challenges, including unfulfilled payments and unresponsive communication, I took full control of the project, transforming it into a platform that reflects my expertise in web development.",
    },
    {
      name: "Ruby",
      mentions: "Pilot Horizons",
      review:
        "Discovering Pilot Horizons has been an incredible help to me as a mother. With my child aspiring to become a pilot, this platform has provided invaluable insights and guidance. It’s a highly recommended resource for students who dream of taking flight and pursuing an aviation career.",
    },
    {
      name: "Mahalakshmi​",
      mentions: "Student (Html, CSS, JavaScript)",
      review:
        "At first, I found it a bit difficult to interact. But as time went on, it became fun and I was able to learn easily. Initially, I was scared to speak up and ask doubts, but gradually I got comfortable. Your teaching skills are excellent! Everything felt easier because you explained it so simply – thank you for that!",
    },
    {
      name: "RamaLakshmi",
      mentions: "Student (Full Stack - MERN)",
      review:
        "You didn’t just teach me to code — you taught me how to think like a developer. From zero knowledge in HTML, CSS, and JS to building real React and Node.js projects, I never thought I could do it. Your teaching style, discipline, and motivation helped me complete everything step-by-step.",
    },
  ];

  return (
    <section id="Testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐️ Clients & Students feedback highlights ⭐️"
        />
          <div className="w-5/6 mt-4 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>

        <div
          className="lg:columns-3 md:columns-2 columns-1 mt-16"
          
        >
          {testimonials.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-3 ">
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
