import React from "react";

const ScreenOne = () => {
  return (
    <div className="w-screen h-screen flex">
      {/* Blue Side Frame */}
      <div
        className="w-tScreenBW relative h-full flex items-center justify-between  flex-col bg-background-image bg-cover bg-center bg-no-repeat
        laptop:pt-14 laptop:pb-20 laptop:pr-24 laptop:pl-24
        ipad:pt-12 ipad:pb-20 ipad:pr-16 ipad:pl-16
        tablet:pt-10 tablet:pb-20 tablet:pr-12 tablet:pl-12
        "

      >
        <section className="w-full flex items-center justify-start ">
          <img
            className="w-logoNormalW h-logoNormalH
            tablet:w-8 tablet:h-6
            "
            src="./src/assets/icons/OasisLogo.png"
            alt="logo"
          />
          <p className="font-tAmarnatFont text-tWhiteF ml-2 mt-2">Oasis.</p>
        </section>

        <section className="w-full flex items-end justify-end">
          <img className="
          laptop:w-16 laptop:mr-40
          ipad:w-12 ipad:mr-14
          tablet:w-11 tablet:mr-10
          " src="./src/assets/icons/Dots.png" alt="dots" />
        </section>

        <section
          className="w-full flex flex-col justify-around h-2/5 mb-56
           "
        >
          <p className="w-full h-12 font-tGayathriFont text-tLblue text-tGayathriSize
          tablet:text-tGayathriSizeTab">
            “
          </p>
          <p
            className="font-tInterFont font-light leading-tParaLH text-tWhiteF
            laptop:text-t20px
            ipad:text-t18px
            tablet:text-t16px
            "
          >
            The passage experienced a surge in popularity during the 1960s when
            Letraset used it on their dry-transfer sheets, and again during the
            90s as desktop publishers bundled the text with their software.
          </p>
          <section className="w-full flex items-center mt-6">
            <p
              className="font-tInterFont font-normal text-tWhiteF
            laptop:text-t18px
            ipad:text-t16px
            tablet:text-t15px
            "
            >
              Vincent Obi
            </p>
            <img
              className="ml-2"
              src="./src/assets/icons/Gtick.png"
              alt="verified"
            />
          </section>
        </section>
        <section className=" absolute bottom-64 flex items-end justify-end
        laptop:right-40
        ipad:right-20
        tablet:w-6 tablet:right-16 tablet:bottom-60
        ">
          <img src="./src/assets/icons/Lshape.png" alt="lshape" />
        </section>

        <img
          className="absolute bottom-1 left-0
          laptop:w-24
          ipad:w-20
          tablet:w-16
          "
          src="./src/assets/icons/circle.png"
          alt="circle"
        />
      </div>

      {/* White Side Frame */}
      <div className="w-tScreenWW h-full flex flex-col items-center">
        <section className="w-full flex justify-end font-tInterFont
        laptop:text-t18px laptop:pr-20 laptop:pt-20 
        ipad:text-t16px ipad:pr-16 ipad:pt-14">
          <p className="font-light text-tGreyF">Already have an account?</p>
          <p className="ml-1 cursor-pointer text-tBlueF">Sign In</p>
        </section>

        <section className="w-3/5 h-3/5 flex flex-col items-center justify-center 
        laptop:mr-24 laptop:mt-1
        ipad:mr-16 ipad:mt-4
        ">
          <section className="
          laptop:pr-16 laptop:pl-16
          ipad:pr-12 ipad:pl-4">
            <h1 className="font-tInterFont font-bold
            laptop:text-tJoinUs
            ipad:text-2xl">Join Us!</h1>
            <p className="font-tInterFont font-regular text-tGreyF
            laptop:text-tNormalHead
            ipad:text-sm ipad:mt-2">
              To begin this journey, tell us what type of account you’d be
              opening.
            </p>
          </section>

          <section className="mt-4
          laptop:p-4 laptop:w-4/5 laptop:h-2/6
          ipad:p-3">
            <section className="w-full cursor-pointer bg-tWhiteBH flex items-center justify-center rounded-md border-bw border-solid border-tBlueF hover:shadow-lg p-4 ">
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
              <img className="ipad:ml-2" src="./src/assets/icons/rightArrow.png" alt="right" />
            </section>

            <section className="w-full cursor-pointer flex items-center justify-center rounded-md border-bw border-solid p-4 mt-6 shadow-md hover:shadow-lg ">
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
