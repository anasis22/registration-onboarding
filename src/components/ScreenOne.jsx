import React from "react";
import OasisLogo  from '/src/assets/icons/OasisLogo.png'
import Dots from '/src/assets/icons/Dots.png'
import Gtick from '/src/assets/icons/Gtick.png'
import Lshape from '/src/assets/icons/Lshape.png'
import Circle from '/src/assets/icons/circle.png'
import Individual from '/src/assets/icons/individual.png'
import RightArrow from '/src/assets/icons/rightArrow.png'
import Business from '/src/assets/icons/business.png'

const ScreenOne = () => {
  return (
    <div className=" 
    laptop:w-screen laptop:h-screen laptop:flex laptop:flex-row
    ipad:w-screen ipad:h-screen ipad:flex  ipad:flex-row
    tablet:w-screen tablet:h-screen tablet:flex tablet:flex-row
    mobile:w-screen h-screen mobile:flex flex-col
    ">
      {/* Blue Side Frame */}
      <div
        className="relative h-full flex items-center justify-between  flex-col bg-building bg-cover bg-center bg-no-repeat
        laptop:w-tScreenBW laptop:pt-14 laptop:pb-20 laptop:pr-24 laptop:pl-24
        ipad:w-tScreenBW ipad:pt-12 ipad:pb-20 ipad:pr-16 ipad:pl-16
        tablet:w-tScreenBW tablet:pt-10 tablet:pb-20 tablet:pr-12 tablet:pl-12
        mobile:w-screen mobile:pt-8 mobile:pb-18 mobile:pr-10 mobile:pl-10
        "

      >
        <section className="w-full flex items-center justify-start ">
          <img
            className="
            laptop:w-logoNormalW laptop:h-logoNormalH
            tablet:w-8 tablet:h-6
            mobile:w-7 mobile:h-5
            "
            src={OasisLogo}
            alt="logo"
          />
          <p className="font-tAmarnatFont text-tWhiteF ml-2 mt-2
          mobile:text-sm
          ">Oasis.</p>
        </section>

        <section className="w-full flex items-end justify-end">
          <img className="
          laptop:w-16 laptop:mr-28
          ipad:w-12 ipad:mr-14
          tablet:w-11 tablet:mr-10
          mobile:w-10 mobile:mr-10
          " src={Dots} alt="dots" />
        </section>

        <section
          className="w-full flex flex-col justify-around h-2/5
          laptop:mb-56
          tablet:mb-56
          ipad:mb-56
          mobile:mb-44 mobile:mt-12

           "
        >
          <p className="w-full h-12 font-tGayathriFont text-tLblue
          laptop:text-tGayathriSize laptop:h-12
          tablet:text-tGayathriSizeTab tablet:h-12
          mobile:text-tGayathriSizeMobile mobile:h-6
          ">
            “
          </p>
          <p
            className="font-tInterFont font-light text-tWhiteF
            laptop:text-t20px laptop:leading-tParaLH
            ipad:text-t18px ipad:leading-tParaLH
            tablet:text-t16px tablet:leading-tParaLH
            mobile:text-t16px mobile:leading-tParaLHMobile
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
            mobile:text-t15px
            "
            >
              Vincent Obi
            </p>
            <img
              className="
              laptop:w-4
              ipad:w-4
              tablet:w-4
              mobile:w-3
              ml-2"
              src={Gtick}
              alt="verified"
            />
          </section>
        </section>
        <section className=" absolute bottom-64 flex items-end justify-end
        laptop:right-40 laptop:w-12
        ipad:right-20
        tablet:w-6 tablet:right-16 tablet:bottom-60
        mobile:w-5 mobile:right-16 mobile:bottom-28
        ">
          <img src={Lshape} alt="lshape" />
        </section>

        <img
          className="absolute bottom-1 left-0
          laptop:w-24
          ipad:w-20
          tablet:w-16
          mobile:w-14
          "
          src={Circle}
          alt="circle"
        />
      </div>

      {/* White Side Frame */}
      <div className="relative h-full flex flex-col items-center
      laptop:p-0 laptop:w-tScreenWW
      ipad:p-0 ipad:w-tScreenWW
      tablet:p-0 tablet:w-tScreenWW
      mobile:pt-4 mobile:pb-8 mobile:w-full mobile:h-mobileWhitesideH
      ">
        <section className="w-full flex font-tInterFont
        laptop:static laptop:justify-end laptop:text-t18px laptop:pr-20 laptop:pt-20 laptop:mt-0
        ipad:static ipad:justify-end ipad:text-t16px ipad:pr-16 ipad:pt-14 ipad:mt-0
        tablet:static tablet:justify-end tablet:text-t15px tablet:pr-12 tablet:pt-12 tablet:mt-0
        mobile:justify-center mobile:text-t16px mobile:mt-20 mobile:absolute mobile:bottom-20
        
        ">
          <p className="font-light text-tGreyF">Already have an account?</p>
          <p className="ml-1 cursor-pointer text-tBlueF">Sign In</p>
        </section>

        <section className="h-3/5 flex flex-col items-center justify-center
        laptop:w-3/5 laptop:mr-24 laptop:mt-1 
        ipad:mr-16 ipad:mt-4
        tablet:w-seventyPercent tablet:mr-8 tablet:mt-5
        mobile:w-eightyPercent
        ">
          <section className="
          laptop:mt-0 laptop:pr-16 laptop:pl-16
          ipad:mt-0 ipad:pr-12 ipad:pl-4
          tablet:mt-0 tablet:pr-10 tablet:pl-0
          mobile:mt-44
          ">
            <h1 className="font-tInterFont font-bold
            laptop:text-tJoinUs
            ipad:text-2xl
            tablet:text-xl
            mobile:text-xl
            ">Join Us!</h1>
            <p className="font-tInterFont font-regular text-tGreyF
            laptop:text-tNormalHead
            ipad:text-sm ipad:mt-2
            tablet:text-sm tablet:mt-2
            mobile:text-sm mobile:mt-2
            ">
              To begin this journey, tell us what type of account you’d be
              opening.
            </p>
          </section>

          <section className=" 
          laptop:mt-4 laptop:p-4 laptop:w-4/5 laptop:h-2/6
          ipad:p-3
          tablet:mt-6
          mobile:mt-6
          ">
            <section className="w-full cursor-pointer bg-tWhiteBH flex items-center justify-center rounded-md border-bw border-solid border-tBlueF hover:shadow-lg p-4 ">
              <img
                className="w-10 h-10"
                src={Individual}
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
              <img className="laptop:ml-0 ipad:ml-2" src={RightArrow} alt="right" />
            </section>

            <section className="w-full cursor-pointer flex items-center justify-center rounded-md border-bw border-solid p-4 mt-6 shadow-md hover:shadow-lg ">
              <img
                className="w-10 h-10"
                src={Business}
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
              <img src={RightArrow} alt="right" />
            </section>
          </section>
        </section>
      </div>
    </div>
  );
};

export default ScreenOne;
