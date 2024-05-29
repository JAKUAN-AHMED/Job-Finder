import bannerImg from '../../assets/images/Proffesional-removebg-preview.png';
const Banner = () => {
    return (
      <div className="hero min-h-screen bg-base-200 border rounded-xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannerImg}
            className="max-w-lg rounded-lg border border-blue-400"
          />
          <div>
            <div className="pl-16">
              <h1 className="text-5xl font-extrabold text-start">
                One Step <br /> Closer To Your <br />
                <span className="text-[#7E90FE]">Dream Job</span>
              </h1>
            </div>
            <p className="py-6">
              Provident cupiditate voluptatem et in. excepturi exercitationem
              quasi.
              <br />
              In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn bg-[#7E90FE] text-start">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;