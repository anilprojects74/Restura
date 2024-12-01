import video from "../assets/hero.mp4"
import logo from "../assets/logo.png"
import hero from "../assets/hero.jpeg"

const HeroSection = () => {
  return (
    <section className="h-screen relative flex items-center justify-center">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video
          src={video}
          className="h-full w-full object-cover"
          muted
          autoPlay
          loop
          poster={hero}
          playsInline
        ></video>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-50% to-black"></div>
      <div className="relative z-20 flex h-screen flex-col justify-end pb-20">
        <img src={logo} alt="restaura" className="w-full p-4"></img>
      </div>
    </section>
  )
}

export default HeroSection