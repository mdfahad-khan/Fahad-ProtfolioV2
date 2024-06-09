import { FaFacebookF, FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandFramerMotion, TbBrandRedux } from "react-icons/tb";




const skills = [
    {
        title: "React",
        bigBubble: true,
        icon: <FaReact />,
        top: "-60px",
        left: "500px",
        lavel: "85%",
        experience: "80%",
    },
    {
        title: "Javascript",
        icon: <IoLogoJavascript />,
        bigBubble: true,
        top: "-40px",
        left: "200px",
        lavel: "85%",
        experience: "80%",
    },
    {
        title: "Css3",
        icon: <IoLogoCss3 />,
        bigBubble: true,
        top: "100px",
        left: "50px",
        lavel: "95%",
        experience: "95%",
    },

    {
        title: "Html5",
        icon: <AiOutlineHtml5 />,
        top: "40px",
        left: "90px",
        lavel: "95%",
        experience: "95%",
    },
    {
        title: "Tailwind",
        icon: <SiTailwindcss />,
        top: "100px",
        left: "-300px",
        lavel: "90%",
        experience: "80%",
    },
    {
        title: "Bootstrap",
        icon: <BsBootstrap />,
        top: "120px",
        left: "-20px",
        lavel: "70%",
        experience: "60%",
    },
    {
        title: "Framer Motion",
        icon: <TbBrandFramerMotion />,
        left: "-520px",
        top: "-30px",
        mediumBubble: true,
        lavel: "75%",
        experience: "65%",
    },
    {
        title: "Redux",
        icon: <TbBrandRedux />,
        left: "-100px",
        top: "80px",
        mediumBubble: true,
        lavel: "75%",
        experience: "65%",
    },
    {
        title: "Nextjs",
        icon: <SiNextdotjs />,
        bigBubble: true,
        top: "-30px",
        left: "-120px",
        lavel: "60%",
        experience: "55%",
    },
];



export { skills };
