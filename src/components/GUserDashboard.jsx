import React from "react";
import OasisLogo from "/src/assets/icons/OasisLogo.png";
import Dots from "/src/assets/icons/Dots.png";
import Gtick from "/src/assets/icons/Gtick.png";
import Lshape from "/src/assets/icons/Lshape.png";
import Circle from "/src/assets/icons/circle.png";
import { useData } from "../contexts/DataContexts";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase";
import { signOut } from "firebase/auth";

const ScreenFour = () => {
  const navigate = useNavigate();
  const { gEmail, gName } = useData();

  const gSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className=" justify-center items-center
    laptop:w-screen laptop:h-screen laptop:flex laptop:flex-row laptop:bg-slate-100
    ipad:w-screen ipad:h-screen ipad:flex  ipad:flex-row ipad:bg-slate-100
    tablet:w-screen tablet:h-screen tablet:flex tablet:flex-row tablet:bg-slate-100
    mobile:w-screen h-screen mobile:flex flex-col mobile:bg-tBlueFM
    "
    >
      {/* Blue Side Frame */}
      <div
        className="relative h-full items-center justify-between  flex-col bg-building bg-cover bg-center bg-no-repeat
        laptop:w-tScreenBW laptop:pt-14 laptop:pb-20 laptop:pr-24 laptop:pl-24 laptop:flex
        ipad:w-tScreenBW ipad:pt-12 ipad:pb-20 ipad:pr-16 ipad:pl-16 ipad:flex
        tablet:w-tScreenBW tablet:pt-10 tablet:pb-20 tablet:pr-12 tablet:pl-12 tablet:flex
        mobile:w-screen mobile:pt-8 mobile:pb-18 mobile:pr-10 mobile:pl-10 mobile:hidden
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
          <p
            className="font-tAmarnatFont text-tWhiteF ml-2 mt-2
          tablet:text-base
          mobile:text-sm
          "
          >
            Oasis.
          </p>
        </section>

        <section className="w-full flex items-end justify-end">
          <img
            className="
          laptop:w-16 laptop:mr-28
          ipad:w-12 ipad:mr-14
          tablet:w-11 tablet:mr-10
          mobile:w-10 mobile:mr-10
          "
            src={Dots}
            alt="dots"
          />
        </section>

        <section
          className="w-full flex flex-col justify-around h-2/5
          laptop:mb-56
          tablet:mb-56
          ipad:mb-56
          mobile:mb-44 mobile:mt-12
          "
        >
          <p
            className="w-full h-12 font-tGayathriFont text-tLblue
          laptop:text-tGayathriSize laptop:h-12
          tablet:text-tGayathriSizeTab tablet:h-12
          mobile:text-tGayathriSizeMobile mobile:h-6
          "
          >
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
        <section
          className=" absolute bottom-64 flex items-end justify-end
        laptop:right-40 laptop:w-12
        ipad:right-20
        tablet:w-6 tablet:right-16 tablet:bottom-60
        mobile:w-5 mobile:right-16 mobile:bottom-28
        "
        >
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
      <div
        className="relative h-screen flex flex-col items-center justify-center font-tInterFont
      laptop:p-0 laptop:w-tScreenWW 
      ipad:p-0 ipad:w-tScreenWW
      tablet:p-0 tablet:w-tScreenWW
      mobile:pt-4 mobile:pb-8 mobile:w-full mobile:h-mobileWhitesideH mobile:bg-slate-100
      "
      >
        <section
          className=" flex flex-col items-center justify-center px-10 py-12 rounded-md
        laptop:w-2/5 bg-slate-300
        ipad:w-3/5
        tablet:w-seventyPercent 
        mobile:w-exactEighty  
        "
        >
          <section
            className=" flex flex-col justify-center items-center
          laptop:mt-0 laptop:px-0
          ipad:mt-0 ipad:px-0
          tablet:mt-0 tablet:pl-0
          mobile:
          "
          >
            <h1
              className="font-tInterFont font-bold
            laptop:text-2xl text-center
            ipad:text-t30px
            tablet:text-lg
            mobile:text-md
            "
            >
              {`Welcome ${gName}`}
            </h1>
            <p
              className="font-tInterFont font-regular text-tGreyF
            laptop:text-t18px laptop:mt-2 laptop:leading-normal text-center
            ipad:text-sm ipad:mt-2
            tablet:text-sm tablet:mt-2
            mobile:text-sm mobile:mt-2
            "
            >
              {`${gEmail}`}
            </p>
            <button
              onClick={() => gSignOut()}
              className="bg-slate-200 mt-4 px-4 py-1 rounded-md"
            >
              Logout
            </button>
          </section>
        </section>
      </div>
    </div>
  );
};

export default ScreenFour;
