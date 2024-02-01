import React from "react";

const ScreenOne = () => {
  return (
    <div className="w-screen h-screen flex ">

      {/* Blue Side Frame */}
      <div className="w-tScreenBW relative h-full flex items-center justify-between pt-14 pb-20 pr-24 pl-24 flex-col bg-background-image bg-cover bg-center bg-no-repeat">
        <section className="w-full flex items-center justify-start ">
          <img
            className="w-logoNormalW h-logoNormalH"
            src="./src/assets/icons/OasisLogo.png"
            alt="logo"
          />
          <p className="font-tAmarnatFont text-tWhiteF ml-2 mt-2">Oasis.</p>
        </section>

        <section className="w-full flex items-end justify-end mr-40">
          <img src="./src/assets/icons/Dots.png" alt="dots" />
        </section>

        <section className="w-full flex flex-col justify-around h-2/5 mb-56">
          <p className="w-full h-12 font-tGayathriFont text-tLblue text-tGayathriSize">
            “
          </p>
          <p className="font-tInterFont font-light text-t20px leading-tParaLH text-tWhiteF">
            The passage experienced a surge in popularity during the 1960s when
            Letraset used it on their dry-transfer sheets, and again during the
            90s as desktop publishers bundled the text with their software.
          </p>
          <section className="w-full flex items-center mt-6">
            <p className="font-tInterFont font-light text-t18px text-tWhiteF">
              Vincent Obi
            </p>
            <img
              className="ml-2"
              src="./src/assets/icons/Gtick.png"
              alt="verified"
            />
          </section>
        </section>
        <section className=" absolute bottom-64 right-40 flex items-end justify-end">
          <img src="./src/assets/icons/Lshape.png" alt="lshape" />
        </section>
      </div>

      {/* White Side Frame */}
      <div className="w-tScreenWW h-full flex flex-col items-center">
        <section className="w-full flex justify-end pr-20 pt-20 font-tInterFont text-t18px">
          <p className="font-light text-tGreyF">Already have an account?</p>
          <p className="ml-1 cursor-pointer text-tBlueF">Sign In</p>
        </section>

        <section className="w-3/5 h-3/5 flex flex-col items-center justify-center mr-24 mt-8 ">
          <section className="pr-16 pl-16">
            <h1 className="font-tInterFont font-bold text-tJoinUs">Join Us!</h1>
            <p className="font-tInterFont font-regular text-tNormalHead text-tGreyF">
              To begin this journey, tell us what type of account you’d be
              opening.
            </p>
          </section>

          <section className="w-4/5 h-2/6 p-4 mt-4">
            <section className="w-full cursor-pointer bg-tWhiteBH flex items-center justify-center rounded-md border-bw border-solid border-tBlueF hover:animate-borderTransition p-4 ">
              <img
                className="w-10 h-10"
                src="./src/assets/icons/individual.png"
                alt="individual"
              />
              <section className="ml-6">
                <h3 className="text-tNormalMin font-medium font-tInterFont">
                  Individual
                </h3>
                <p className="text-tMin font-tInterFont font-normal text-tGreyF">
                  Personal account to manage all you activities.
                </p>
              </section>
              <img src="./src/assets/icons/rightArrow.png" alt="right" />
            </section>

            <section className="w-full cursor-pointer flex items-center justify-center rounded-md border-bw border-solid p-4 mt-6 shadow-md ">
              <img
                className="w-10 h-10"
                src="./src/assets/icons/business.png"
                alt="individual"
              />
              <section className="ml-6">
                <h3 className="text-tNormalMin font-medium font-tInterFont">
                  Business
                </h3>
                <p className="text-tMin font-tInterFont font-normal text-tGreyF">
                  Own or belong to a company, this is for you.
                </p>
              </section>
              <img src="./src/assets/icons/rightArrowWhite.png" alt="right" />
            </section>
          </section>
        </section>
      </div>
    </div>
  );
};

export default ScreenOne;
