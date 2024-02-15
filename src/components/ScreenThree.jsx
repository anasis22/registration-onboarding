import React, { useEffect, useState } from "react";
import OasisLogo from "/src/assets/icons/OasisLogo.png";
import Dots from "/src/assets/icons/Dots.png";
import Gtick from "/src/assets/icons/Gtick.png";
import Lshape from "/src/assets/icons/Lshape.png";
import Circle from "/src/assets/icons/circle.png";
import Back from "/src/assets/icons/back.png";
import Secure from "/src/assets/icons/lock.png";
import Down from "/src/assets/icons/downArrow.png";
import { useData } from "../contexts/DataContexts";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import countries from "../contexts/Countries.json";

const ScreenThree = () => {
  const { mobileNoRef, addressRef, countryRef,user,getData } = useData();
  const navigate = useNavigate();
  const [phone, setPhone] = useState();
  const [phoneInput, setPhoneInput] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      mobileNoRef.current.value.length > 0 &&
      addressRef.current.value.length > 0 &&
      countryRef.current.value.length > 0
    ) {
      console.log(user);
      navigate("/ScreenFour");
    } else {
      console.log("somethings wrong");
    }
  };

  useEffect(() => {
    getData()
  },[])

  const phoneInputBorder = () => {
    setPhoneInput(!phoneInput);
  };

  return (
    <div
      className="
    laptop:w-screen laptop:h-screen laptop:flex laptop:flex-row
    ipad:w-screen ipad:h-screen ipad:flex  ipad:flex-row
    tablet:w-screen tablet:h-screen tablet:flex tablet:flex-row
    mobile:w-screen h-screen mobile:flex flex-col
    "
    >
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
        className="relative h-full flex flex-col items-center font-tInterFont
      laptop:p-0 laptop:w-tScreenWW
      ipad:p-0 ipad:w-tScreenWW
      tablet:p-0 tablet:w-tScreenWW
      mobile:pt-4 mobile:pb-8 mobile:w-full mobile:h-mobileWhitesideH
      "
      >
        <section
          className="w-full flex font-tInterFont 
        laptop:static laptop:justify-between laptop:text-t16px laptop:px-20 laptop:pt-14 laptop:mt-0
        ipad:static ipad:justify-between ipad:text-t15px ipad:px-20 ipad:pt-14 ipad:mt-0
        tablet:static tablet:justify-between tablet:text-t15px tablet:px-12 tablet:pt-12 tablet:mt-0
        mobile:static mobile:justify-between mobile:text-t15px mobile:px-6 mobile:mt-6
        "
        >
          <section
            onClick={() => navigate("/ScreenTwo")}
            className="w-16 h-5 flex items-center cursor-pointer "
          >
            <img className="w-5 h-5" src={Back} alt="back" />
            <p className="text-tGreyF ml-1">Back</p>
          </section>
          <section className="text-right ">
            <p className="font-light text-tLGrey2">STEP 02/03</p>
            <p className="text-tGreyF">Residency Info.</p>
          </section>
        </section>

        <section
          className="flex flex-col items-center justify-center 
        laptop:w-3/5 laptop:mr-16 laptop:mt-8 
        ipad:w-3/5 ipad:mr-0 ipad:mt-8 
        tablet:w-seventyPercent tablet:mr-0 tablet:mt-12 
        mobile:w-exactEighty mobile:mt-6 mobile:pb-10
        "
        >
          <section
            className="
          laptop:mt-0 laptop:px-0
          ipad:mt-0 ipad:px-0
          tablet:mt-0 tablet:pl-0
          mobile:mt-0
          "
          >
            <h1
              className="font-tInterFont font-bold
            laptop:text-2xl
            ipad:text-t30px
            tablet:text-lg
            mobile:text-md
            "
            >
              Complete Your Profile!
            </h1>
            <p
              className="font-tInterFont font-regular text-tGreyF
            laptop:text-t18px laptop:mt-2 laptop:leading-normal
            ipad:text-sm ipad:mt-2
            tablet:text-sm tablet:mt-2
            mobile:text-sm mobile:mt-2
            "
            >
              For the purpose of industry regulation, your details are required.
            </p>
          </section>
          <hr
            className="w-3/4 border-tWhiteHL mt-2 mb-1
          laptop:w-full
          ipad:w-full
          tablet:w-full
          mobile:w-full
          "
          />
          <form
            onSubmit={handleSubmit}
            className=" 
          laptop:mt-0 laptop:w-full
          ipad:mt-0 ipad:w-full
          tablet:mt-0 tablet:w-full
          mobile:pt-6 mobile:w-full
          "
          >
            <section className="w-full flex flex-col">
              <label className="text-tGreyFM text-t16px" htmlFor="fullname">
                Phone number
              </label>
              <PhoneInput
                ref={mobileNoRef}
                onClick={phoneInputBorder}
                className={`mt-2 text-t15px text-tGreyFM focus:outline-none rounded-md border border-tGreyF py-3.5 px-4 ${
                  phoneInput && "border-tBlueH shadow-md"
                }`}
                placeholder="Enter your number"
                international
                value={phone}
                required
                onChange={setPhone}
              />
            </section>

            <section className="w-full flex flex-col mt-3">
              <label className="text-tGreyFM text-t16px" htmlFor="fullname">
                Your address
              </label>
              <input
                ref={addressRef}
                className="mt-2 peer text-t15px text-tGreyFM focus:outline-none focus:border-tBlueH focus:shadow-md outline-none rounded-md border border-tGreyF py-3.5 px-4"
                type="text"
                required
                placeholder="Please enter address"
              />
            </section>

            <section className="w-full flex flex-col mt-3 relative">
              <label className="text-tGreyFM text-t16px" htmlFor="fullname">
                Country of residence
              </label>
              <select
                className="cursor-pointer mt-2 w-full text-t15px text-tGreyFM focus:outline-none focus:border-tBlueH focus:shadow-md outline-none rounded-md border border-tGreyF py-3.5 px-4"
                name="countries"
                id="countries"
              >
                <option>Select a country</option>
                {countries.map((country) => {
                  return (
                    <option
                      ref={countryRef}
                      key={country.code}
                      value={country.code}
                    >
                      {country.name}
                    </option>
                  );
                })}
              </select>
              <img
                className="w-5 absolute cursor-pointer right-5 bottom-3.5"
                src={Down}
                alt="down"
              />
            </section>

            <section className="w-full mt-10">
              <button
                type="submit"
                className="w-full text-t16px py-3.5 px-4 rounded-md bg-tBlueF hover:shadow-lg font-regular text-tWhiteF "
              >
                Save and continue
              </button>
            </section>
          </form>
          <section className="flex mt-5">
            <img className="w-3 h-3" src={Secure} alt="lock" />
            <p className="ml-3 text-t12px text-tGreyF">
              Your Info is safely secured
            </p>
          </section>
        </section>
      </div>
    </div>
  );
};

export default ScreenThree;
