import React from "react";

const Portfolio = () => {
  return (
    <div>
      <div className="mockup-window border bg-secondary">
        <div className="hero min-h-screen bg-cover-pic" style={{backgroundImage: "url('https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/269599394_3001523906828214_8806558879524864716_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=Lplpq7Tmrx4AX9RQHNe&_nc_ht=scontent.fdac14-1.fna&oh=00_AT-znTAWRkjRBEE0l2vPXnRNPLhrjU-MUiCxekiFiypoIg&oe=6297D812')"}}  >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                This is Sadik Hasan Rafi. I am a passionate fontend web developer. I use react library.
              </p>
              <button className="btn btn-primary"><a href="https://www.linkedin.com/feed/" target='_blank'>Contact</a></button>
            </div>
          </div>
        </div>


        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t1.18169-9/15977318_1827566404158749_8416097641158420824_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ylwSbeVwoqQAX--lzGE&_nc_ht=scontent.fdac14-1.fna&oh=00_AT-euWMEEBRwNX6NUGAD2jo9pgVGaXRRw4ETw7xIp-no3A&oe=62B6D6CB " className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-3xl px-3 font-bold">I studied in Daffodil International University</h1>
              <ul className="py-6 px-6 list-disc	">
                Technologies I use:
                <li>React</li>
                <li>Tailwind</li>
                <li>Express js</li>
                <li>Node js</li>
                <li>daisyui</li>
                <li>Ant design</li>
              </ul>
              
            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default Portfolio;
