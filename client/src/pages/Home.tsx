import { Carousel, CustomFlowbiteTheme } from "flowbite-react";
import { Link } from "react-router-dom";

const customCaroselTheme: CustomFlowbiteTheme["carousel"] = {
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/30 group-hover:bg-black/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-black dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
  },
};

const Home = () => {
  return (
    <div>
      <section className="mx-auto max-w-screen-xl px-6 py-[100px] pt-[150px] flex flex-wrap items-center justify-center gap-4">
        <h5 className="text-text-mewGreenText text-base sm:text-[32px] font-bold -tracking-[0.03em]">
          {" "}
          MyEtherWallet{" "}
        </h5>
        <div className="flex gap-1">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAABQCAYAAAAKlxWDAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUbSURBVHgBvVotdBtHEP6c5hVUJiUyKZFIAyLSAouU2LjGMSpwSpvS2tivNC2tjWvskJKWlCikAQoKiE0KLJIQh4TkPt9MbjSavds96eV7b5/vVnf77czO3+4Z+MT4DJvHoGoPqrZVtVv/431sDiQ6kMbrJ9FDmyIcVu20ajumbxE9eA+bgSd7jUCdpYSDRP+BIyOuE89mE0YqU3wf9P2JNQn3qzau2k+ufxxMgmQ3WJNwT/5OpCm8mi/RIh2RY6UksFI8qtpcrofyl/cXpn8twmEwAUp2KwSHSFhkX8JosLGQLdxE9twEz1G7SBHh647fSXAsk7CYRe/mGA2lmCcmoe4yDt47D/paCa2hXJhrkquaU76ZdI0U4b4MNjAkl3J9bp5JkSVdI5Wefq7aV9L+lb7/UEs2k3uu27Z5h5P6vWp/owVbQR/X5czc/5YYZEee5SRukOka9xIDWRwiBkkoVTIzRIjcYhjcTxBHEfaP0Kx1a1hLEV6hexLTqh1hWRv/IAMRoaoolf8OEau5Uzoi5Rb+ZQ1h+wkySpdMSTmE9Lm5IdPrR8GzC2RK10ZI0B04a3WJyNGp/hNkSkfoGjKqvMTyTBcymPrqVP5ycBrWc3Q4eQQdjEQ0Eo0W2TPuS3hp+igZi9g2Z6b/7cr1GQqgKrVuoPntJEHEQkrXcoZCqNEsgoEnro/u4NPRc/QkjGa6a66HiP3vJXoScg29oYzMdbQxyXb2iJBr+CtiQ9HgbVHk7BEh4Z1YyafunWJnt7ifGIzrpYY0EnL+RjUWO3spBtggWNNwfcLtseB90Md3HlftFQqyPYToVAagulp3PqjrzyM0RnSAQnAN38k1y/SHqEPVLEFmS8ciyRS0UiuRhjVvmez/Bcvr2bUFSBJG4emJG9xv2Yio9skinGO1IiPZvrnfC959hp6EhGZ3i4fm2keaLuPqJNTs7tfT/rVkvcIaYSMNSX9ErUoWS9vuWb+tptopeXFOTGHHDOyjDYkoZVG2J9p2wD6IK+gyx2YyRSg9+uJ6HmENUELO8inqNdTyL3X8ER1zFRPeCpnWMQdoEqxPRd49iqONqtTXJlQdo42vY0bu/ho9CaOaBkI4SbxLzRT7Y05NYzcwdlJRdMomJLgeVKM3GD3qIhbSeOgwc8+cIgNbiX4t5XU7fSEEE6zu6e0GtTMhb2E9kOCxuWdobFXzOmfeUTU+7HppHUKGuOLQ5mMpMwUNh2rRyPMMsZp2g77OQOAlpGHQIBi+NOr8gdoqvTTDgKyzsPKEfOEyeI4lxjHaYUuOQS4hkI46lNgaybW5tnGXkj9FIkJFhJQytVnR70owv9uSg7/ppjVa4+TxJUmpooUMoinp86r9j9qY3qI+2rQZ5YeqfSvXXyJYnhLH1+PKlHH4Y09i5cS/5OvaDbr3HR7bnnBTX9eIUc5DXRJqIlaf0+ogOoXyauZzKxrpklB3wTvSqLapTOIMy2r0ew0/oXEOIcFT/JSR2G8W1pj8oYOe8QxyPjq/Qe0C0+A3usk3qKUh2QPpO0FDrvmS/S9yv3JfyaA0DF8m0k+5LWchRh/9C83aDbF8hHZV4ha64eEgYzSnG7do1s9nC58vB32+cmtdk7OJWfHNTfphhC/c/VUfCS003BFd+fBOK30ItZaJSgx/9HKNxsju4mwflS6ENEqyTNTMhbp2c0N2t+Z9//mDoe1rxDsp+tt3VXshhPyrX+h6E9LvqD5KS/ew23P95PcKjUV/xAdgNzBh6eGY2QAAAABJRU5ErkJggg=="
            alt=""
            className="h-[40px]"
          />
          <div className="w-[185px]">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAAVCAYAAACNDipWAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQTSURBVHgBvVoteJMxED5WnplhMMVgNgGmE2A2vRrMphDMD915ECA2DGYKgwFTDGYzM63BDDNEi5jpDGYzqKoZ8j5NtvR6116+L+F9nqPfT75c8t7lcjlGZMemkxUqhxWvoyTWnDyisiitowhPbSfHTvaoHA68jnUqg6aTrpdSjhp4OqBy6Hgdu5bGS2TDjv9tUxmA/GDYbSoD9L/ipdQ8NpmukjpalsYWA4P8VX+NQZdYYevsugQ5W9H1BpVB3G8JJ4q5wfXCrcBiYB7vS5ATk48JrFFecMdco/xO9L95MumwGJh3ktsz4/BcSgcnv0SiwnkqEYlaC3TOYJGBJfJzh2mpr9zev2nUm1tHTieSQvJCJ7pPk3ClEdpUnr8ifZO/dtJjz9pz+pJ0Y9DI2MfKN30nV6x9m/TJthS9WiYKvT2a1t8kPbI0Fd3bpM9b4mmddF6158iqL5V3/XvunyO6S6JyYSe6xgQ/U16cOTmM7kF8h/ICvMQGeEP5I8trmnbUY8qL0VKBTrvs/jqzDqyqb+wZDH5F+TByMmTPupl1SP11KR/A00mDJssbngrvfEDVAUMe0mzYAc79+9WaOgZO3jv5w57fODnx13X3Vjgj5sG3h79OftJkDnUqVej3o5NT4d3QC8JxHZ7goG+dDBqR0joEYeLvaJb4GJe+HQb/kNKBMP+J9H0ZqENQcNDTOW2gu++vq/AUHPSC5o8DPFU9Lk45aIO9BDkwxBOyEYROvtKE/Btj+0CglSBMGPvfWUL7VIIsDhoDPKVGPYuDBoz9mPD71Mmy4RvRQRtCQ0wSyddzWozvXlIBgpB8WQyAZGdAaQgEIdlbNrRFgmZxUP7dbycvDG2x6r9QOrDSMS6LLcDTOX+onYOtq8tUD1VgPSNWzfCthYY653pr3bxO9m0t+ohjkQyMCVsHZKqHCkj5r8eqVa2thLZVDWB18KpOhAhndXCx/CoZWFtZI+V5CpEBGqHS/iRV0yxoKf1LR50qTqQ5t3aUqqJD41bSIZZfrQZGgrDvf7kRqoRpriMkUqgsSWfm1BUmkY99fN/r4c5aZYVJ5GPsKF4g2eFG2KD02jSfN7g/8jq6ljHxJAsDiCtCITP74e8v/HWcPYLIoW9rAYwbezOI/0B3pEtn5seUlszBUeIEDsTj7DkmPZMfk5CkzMFeNL5wtg3OiUSVn5mR7P0iO08Y/8vo/vZs6++HXsezaBz4xdxuE8YlodMAfNyh2QwWA+QepNVbJcQrHhEBK4p7e4+mVxocL2WvD/MIkUEqlXaZ7pRI1IzGEyIDP8YF3TFPKTrivffY6+A8jbyOUFxaeDQMRX7rfhFqwKnkd8h+RoUO05+nRECUwDwsIbHp2+5QGnbJPi7oSOUpfGPdOsR6/D+vBt6wuIDM0QAAAABJRU5ErkJggg=="
              alt=""
              className="h-[10px] mx-auto mb-1"
            />
            <p className="text-[13px] text-center">
              {" "}
              Trusted by millions worldwide. Since 2015.{" "}
            </p>
          </div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAABQCAYAAAAKlxWDAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUbSURBVHgBvVotdBtHEP6c5hVUJiUyKZFIAyLSAouU2LjGMSpwSpvS2tivNC2tjWvskJKWlCikAQoKiE0KLJIQh4TkPt9MbjSavds96eV7b5/vVnf77czO3+4Z+MT4DJvHoGoPqrZVtVv/431sDiQ6kMbrJ9FDmyIcVu20ajumbxE9eA+bgSd7jUCdpYSDRP+BIyOuE89mE0YqU3wf9P2JNQn3qzau2k+ufxxMgmQ3WJNwT/5OpCm8mi/RIh2RY6UksFI8qtpcrofyl/cXpn8twmEwAUp2KwSHSFhkX8JosLGQLdxE9twEz1G7SBHh647fSXAsk7CYRe/mGA2lmCcmoe4yDt47D/paCa2hXJhrkquaU76ZdI0U4b4MNjAkl3J9bp5JkSVdI5Wefq7aV9L+lb7/UEs2k3uu27Z5h5P6vWp/owVbQR/X5czc/5YYZEee5SRukOka9xIDWRwiBkkoVTIzRIjcYhjcTxBHEfaP0Kx1a1hLEV6hexLTqh1hWRv/IAMRoaoolf8OEau5Uzoi5Rb+ZQ1h+wkySpdMSTmE9Lm5IdPrR8GzC2RK10ZI0B04a3WJyNGp/hNkSkfoGjKqvMTyTBcymPrqVP5ycBrWc3Q4eQQdjEQ0Eo0W2TPuS3hp+igZi9g2Z6b/7cr1GQqgKrVuoPntJEHEQkrXcoZCqNEsgoEnro/u4NPRc/QkjGa6a66HiP3vJXoScg29oYzMdbQxyXb2iJBr+CtiQ9HgbVHk7BEh4Z1YyafunWJnt7ifGIzrpYY0EnL+RjUWO3spBtggWNNwfcLtseB90Md3HlftFQqyPYToVAagulp3PqjrzyM0RnSAQnAN38k1y/SHqEPVLEFmS8ciyRS0UiuRhjVvmez/Bcvr2bUFSBJG4emJG9xv2Yio9skinGO1IiPZvrnfC959hp6EhGZ3i4fm2keaLuPqJNTs7tfT/rVkvcIaYSMNSX9ErUoWS9vuWb+tptopeXFOTGHHDOyjDYkoZVG2J9p2wD6IK+gyx2YyRSg9+uJ6HmENUELO8inqNdTyL3X8ER1zFRPeCpnWMQdoEqxPRd49iqONqtTXJlQdo42vY0bu/ho9CaOaBkI4SbxLzRT7Y05NYzcwdlJRdMomJLgeVKM3GD3qIhbSeOgwc8+cIgNbiX4t5XU7fSEEE6zu6e0GtTMhb2E9kOCxuWdobFXzOmfeUTU+7HppHUKGuOLQ5mMpMwUNh2rRyPMMsZp2g77OQOAlpGHQIBi+NOr8gdoqvTTDgKyzsPKEfOEyeI4lxjHaYUuOQS4hkI46lNgaybW5tnGXkj9FIkJFhJQytVnR70owv9uSg7/ppjVa4+TxJUmpooUMoinp86r9j9qY3qI+2rQZ5YeqfSvXXyJYnhLH1+PKlHH4Y09i5cS/5OvaDbr3HR7bnnBTX9eIUc5DXRJqIlaf0+ogOoXyauZzKxrpklB3wTvSqLapTOIMy2r0ew0/oXEOIcFT/JSR2G8W1pj8oYOe8QxyPjq/Qe0C0+A3usk3qKUh2QPpO0FDrvmS/S9yv3JfyaA0DF8m0k+5LWchRh/9C83aDbF8hHZV4ha64eEgYzSnG7do1s9nC58vB32+cmtdk7OJWfHNTfphhC/c/VUfCS003BFd+fBOK30ItZaJSgx/9HKNxsju4mwflS6ENEqyTNTMhbp2c0N2t+Z9//mDoe1rxDsp+tt3VXshhPyrX+h6E9LvqD5KS/ew23P95PcKjUV/xAdgNzBh6eGY2QAAAABJRU5ErkJggg=="
            alt=""
            className="h-[40px] -scale-x-[1]"
          />
        </div>
      </section>
      <h1 className="mx-auto max-w-screen-xl font-bold tracking-[-0.03em] mb-8 text-center text-big-title text-[64px] leading-[120%]">
        The most reputable, friendly, and secure crypto wallet.
      </h1>
      <div className="mx-auto max-w-screen-xl w-full flex justify-center relative">
        <div className="flex flex-col">
          <Link
            to="/create-wallet"
            className="block bg-bg-primary rounded-[20px] text-s-17 md:text-2xl text-white font-bold px-6 sm:px-8 py-4 sm:py-5 hover:opacity-50 transition-all"
          >
            {" "}
            Create a new wallet{" "}
          </Link>
          <p className="text-center mt-3 flex justify-center gap-2">
            <span>or</span>
            <Link
              to="/access-wallet"
              className="underline hoverOpacity text-[1rem] font-medium tracking-[-0.02em]"
            >
              Access my wallet
            </Link>
          </p>
        </div>
        <img
          src="https://www.myetherwallet.com//mew-landing-page/_nuxt/peggy.DcEmOzOe.png"
          alt=""
          className="absolute -left-10 h-[72px] md:h-[130px]"
        />
      </div>
      <h2 className="mx-auto max-w-screen-xl mt-[112px] leading-[110%] text-[2.25rem] font-bold tracking-[-0.05em] mb-3 text-center">
        Our products make crypto easy
      </h2>
      <p className="mx-auto max-w-screen-xl !text-text-info text-center font-medium tracking-[-0.02em] text-[1.25rem] leading-[140%] mb-6">
        Available on mobile and on desktop in your browser
      </p>
      <div className="mx-auto max-w-screen-xl rounded-[32px] bg-mewBg flex flex-wrap lg:min-h-[606px] overflow-hidden mb-7 sm:mb-16">
        <div className="basis-full sm:basis-7/12 xl:basis-1/2 p-8 sm:pt-12 sm:pl-12 sm:pr-5 sm:pb-12">
          <div className="flex gap-4 lg:gap-6 items-center">
            <img
              src="data:image/svg+xml,%3csvg%20width='220'%20height='220'%20viewBox='0%200%20220%20220'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='220'%20height='220'%20fill='white'/%3e%3cpath%20d='M109.632%20189.632C153.814%20189.632%20189.632%20153.814%20189.632%20109.632C189.632%2065.4488%20153.814%2029.6316%20109.632%2029.6316C65.4488%2029.6316%2029.6316%2065.4488%2029.6316%20109.632C29.6316%20153.814%2065.4488%20189.632%20109.632%20189.632Z'%20fill='%231896A4'/%3e%3cpath%20d='M113.75%20136.246C110.503%20136.743%20107.127%20136.678%20103.735%20135.895C89.4732%20132.603%2080.5801%20118.371%2083.8727%20104.109C84.116%20103.055%2084.4426%20102.036%2084.7947%20101.037L59.7591%2090.8026C58.9153%2093.0318%2058.2207%2095.3146%2057.6797%2097.636C51.0545%20126.333%2068.9517%20154.975%2097.6487%20161.6C107.71%20163.923%20117.756%20163.216%20126.853%20160.101L113.75%20136.246ZM136.024%20106.874L99.7071%20106.518L157.494%20133.148C159.251%20129.554%20160.658%20125.698%20161.598%20121.627C168.223%2092.9304%20150.326%2064.2888%20121.629%2057.6636C110.11%2055.0042%2098.6191%2056.3045%2088.5384%2060.652L101.89%2084.7471C106.353%2083.354%20111.108%2083.1762%20115.663%2084.232C126.835%2086.8114%20134.723%2096.113%20136.024%20106.874Z'%20fill='white'/%3e%3c/svg%3e"
              alt=""
              className="h-[64px] w-[64px] md:h-[100px] md:w-[100px] rounded-[17px] md:rounded-[26px] shadow-[0px_1.5px_6px_0px_rgba(0,0,0,0.1)]"
            />
            <div>
              <h4 className="text-xl md:text-3xl lg:text-4xl font-semibold">
                MEW Mobile App
              </h4>
              <div className="flex items-center mt-2 gap-1 md:gap-3 opacity-70">
                <img
                  className="h-[14px] md:h-[20px] lg:h-[29px]"
                  src="data:image/png;base64,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"
                  alt=""
                />
                <p className="text-[12px] md:text-xl mt-1">13k+ ratings</p>
              </div>
            </div>
          </div>
          <p className="font-medium tracking-[-0.02em] text-[1.25rem] leading-[140%] text-black mb-4 sm:max-w-[462px] sm:mt-8">
            Stake, swap and manage you crypto on the go.
          </p>
          <ul className="list-disc list-outside marker:text-[rgba(0,0,0,0.2)] leading-[150%] text-[1rem] tracking-[-0.02em] text-info !font-normal max-w-[330px] mb-6">
            <li className="mb-4">
              Protect your mobile crypto with security rivaling hardware
              wallets.
            </li>
            <li>Robust NFT management, onchain browser and more.</li>
          </ul>
          <Link
            to="/mobile-wallet"
            className="sm:inline-block px-4 py-2 sm:px-5 sm:py-3 rounded-full bg-bg-primary cursor-pointer hover:opacity-50 transition-all"
          >
            <div className="flex items-center">
              <p className="text-base lg:text-2xl text-center text-white font-bold">
                {" "}
                Get MEW Mobile App{" "}
              </p>
              <img
                className="h-5 sm:h-[31px]"
                src="data:image/svg+xml,%3csvg%20width='40'%20height='32'%20viewBox='0%200%2040%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='&%23244;&%23128;&%23132;&%23171;'%20d='M31.8164%2015.9102C31.8164%2016.4023%2031.6445%2016.8203%2031.3008%2017.1641L23.6602%2024.7812C23.3086%2025.1328%2022.9141%2025.3086%2022.4766%2025.3086C21.9766%2025.3086%2021.5742%2025.1523%2021.2695%2024.8398C20.9648%2024.5352%2020.8125%2024.1562%2020.8125%2023.7031C20.8125%2023.4453%2020.8594%2023.2188%2020.9531%2023.0234C21.0547%2022.8203%2021.1836%2022.6406%2021.3398%2022.4844L23.9648%2019.8594L27.8438%2016.2969L28.5586%2017.3633L24.0117%2017.6094H10.7578C10.2344%2017.6094%209.80859%2017.4531%209.48047%2017.1406C9.16016%2016.8281%209%2016.418%209%2015.9102C9%2015.4023%209.16016%2014.9922%209.48047%2014.6797C9.80859%2014.3672%2010.2344%2014.2109%2010.7578%2014.2109H24.0117L28.5586%2014.457L27.8438%2015.5234L23.9648%2011.9609L21.3398%209.32422C21.1836%209.16797%2021.0547%208.99219%2020.9531%208.79688C20.8594%208.59375%2020.8125%208.36328%2020.8125%208.10547C20.8125%207.65234%2020.9648%207.27344%2021.2695%206.96875C21.5742%206.65625%2021.9766%206.5%2022.4766%206.5C22.6875%206.5%2022.8945%206.54688%2023.0977%206.64062C23.3008%206.72656%2023.4922%206.85938%2023.6719%207.03906L31.3008%2014.6562C31.6445%2014.9922%2031.8164%2015.4102%2031.8164%2015.9102Z'%20fill='white'%20/%3e%3c/svg%3e"
                alt=""
              />
            </div>
          </Link>
        </div>
        <div className="flex-1">
          <img
            src="https://www.myetherwallet.com/mew-landing-page/_nuxt/mewwalletimg.BcZCkmZz.png"
            alt=""
          />
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl rounded-[32px] bg-enkryptBg flex flex-wrap lg:min-h-[606px] overflow-hidden mb-7 sm:mb-16">
        <div className="basis-full sm:basis-7/12 xl:basis-1/2 p-8 sm:pt-12 sm:pl-12 sm:pr-5 sm:pb-12">
          <div className="flex gap-4 lg:gap-6 items-center">
            <img
              src="https://www.myetherwallet.com/mew-landing-page/_nuxt/enkrypt-logo.CIIZCFlO.png"
              alt=""
              className="h-[64px] w-[64px] md:h-[100px] md:w-[100px] rounded-[17px] md:rounded-[26px] shadow-[0px_1.5px_6px_0px_rgba(0,0,0,0.1)]"
            />
            <div>
              <h4 className="text-xl md:text-3xl lg:text-4xl font-semibold">
                Enkrypt Browser Wallet
              </h4>
              <div className="flex items-center mt-2 gap-1 md:gap-3 opacity-70">
                <img
                  className="h-[14px] md:h-[20px] lg:h-[29px]"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP0AAAArCAYAAACzUo7OAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAfBSURBVHgB7Z0vdCRFEMYLuIcJBpMYTM6cSQzmYjCJwXAGxJ0GA4LDQjAIQIAADIIozCkMGAwxGGJAXMwhwIBgESBAxTAfuw2Tuf5T1dPVPdWX7715t7c7m53fzlT11z1dvURXutKVHik9QXraGraXhm1/2H4ftr/JtraH7c6wPT1sq2G7INvqmednsi81nsdIT58N287m8f1hOybb6okHF9S71C/PN8P2MdnVlOfLYTuhQnqcdHRE/x8wtL/ZrKo3Hhx7Tzy36DIPzpdlHrTwYx7wbVEhaQX9gee5I7KrQ89zN8mubnmes8zjO/Y9sivfsReLH42gR0bynQSrFxWslq/VsJrEwLPref6AbAo8O57nrQb91IU5FYsfjaAPXTxIBhYtV+iYe+PZJps8oestFDxLVyi4wVPE4msEfSzDWmztYy2gRZ7DyGsWW8eY47J4fmLHXMRd1mzpIWuWONRVcbJmiVOtubWgD3VVnKwF/XWKu5MiPKWDHkEQsyDWLHEqqK1Z4n3G65YsMYen2Kh3BaWSbhGe0kF/s9A+SxGnJbfUOh4y9rF0fjg8ltwl51hnu8vSQc8JAEuWeK/QPksQ12VZCXquy7LEs8vYj5PooioZ9FxraMUSp7oqTlYsMTfZWrHE3GuoNx70+2fxlAx6SQay0DpKWggLrYnEYVmwxJLrzYK75PIg4K/TDJUMekkgWwh6yTFaCPqeeKQDwrMtsbKk7ndWUr42+T++zB2S24ddkllcACL75lTe/SR4X25WzOHJ7bLU4Nkj2Tmdw3NfsO8cHonwGT3xICln84yr7JA9XqHl939QBnqP1pVUMWF+OQoXLPCgIix1cd3ZbEsXeN6jdTKL6YqnjVZje3+bbAx4uDrjlCwkMAg8Lyf2AYeFCwrqkec2Yx8zPOOgf4rs6C/GPtYX7ZiqNx5LsjTBJ6nxyjlYOeVZsqFPh+2XxD498VyQHR4kJ/CsIvu4VXos3LoFzzsUT7ruNRM846B/QOsThUGspbb6rn/1PWPfHnlwcd0YtidpmQIPAuQBY99zssOTamCg882/Sw58jEu87VsuC/2Tu7S8gz8bto9IbnPB8xbNvLepoDk846WUliIs6YQB1iuehfP4FsYE5Onm8RICH8fzOa3XCMtZvBHv/3rzuBeerzaPl8IDO/8F9cPzIa2DJJcH8QP3coPay7lJxMC/PKmFMVtnLdiR94ftNyojtPZvUj88CJLXqR0PbjN+QuV4MHcDI/+98OA2OEb+W/Ig4C+5ldQS2C2zFjIt7l//QeWEvwVbPXsqY4bA89AJmClk8VY8sIo4PyV50HcGDxqbZ6iu4LzgWEryYOlq8Egne82Vc5PgecitcNa9x5sw0FRrUMyNlv5nRxT+Pk4EeNBSag8ije2VhhxPrUExx5OaHJUrcHy7eVzD7oMHy39/Rzqq3V12g49BHum699qDYqXtVUra3ZfcwbpcafMg0NEi9sKTO1iXq0XwSH/hxg2KwU6WtvsadjElN4ikwXNC+YN1udLmgWVswYNgKd3Q4FrLHXzMlWv18as1pXngvliDj7lVdho/G3RO7aTB0/KnlVZUXi15NBoCje+II61GjX1+coNeo1TxBWonDZ6W5aka9fAteTQ+u2V5t8Zns6/hnKDXWvmm1QonWjytFqLgLrskVSserZWJeuNhJ5KcoNcagUTAt1jhRJOnxWQTrYu5FY/WAhitlm3T4mEnk5yg11yFpMUKJ5qf2aI10eRpYfE1bXgLi6/5maxzLw167ew4e9E/obR5ECQ1eVI/ljBXR1RX2ouO9sbDSijSoNe2Q7UtvvZn1Z4pp+2Ualt8bZ7aFl+bh5VUpEEvOWjcmsC93XskU02LL8n0uTw1WxOJ/QYP7lVLeWpafIkVBo+7Vy1RbzzJ+LlGfEmy4nRdMcxM4xa6OIuvPUlHMsrtpmq6mYKYU8AtdHEWX5tHYu2nhT/g4xaGIImdkL4kVng8kxPTT3HPujce7vJv4IkmcsmMvAPi2WFkpg/o8uQHSaEL5o7/SvqTQfDlcFaicTzjwh9X6MIpDAHPD6Q/GeRF4s3C8xX+SApDwIOkp82DNec4XSPwoBTWx4OEm6oVWRqPb2YqeFCPwOFBjEV5JEGPTBO7IFxlDw76IvD62eZxyjHgwE9JV6/RejpkSKk6cUlhCGoctAo6nF6l+AUxrhMPvc4tDMG+nNV+5gjXW4wnVcgkqdNfEk+okEnCg78VnOHK7dOnrD3s4hvE638gKeALiBXVaI/ip6y94+FUknF4tEfxU9YedhE8nMQDnnFXxiftcYqUFQbPMfHWpAcPgmnpPHeJzwMnkM3Dbelx0M8FXsupe08VHsBy/Ui8tclyFLP2OXXvzsWEui/aFv95Cidln/1NKVWnDx4kkD9JRzg/IZ6cundXpx/qvoDnlPTGXfAbDKGul+ORFP647gsGBn1u1TllL4+kpZ/KjS7mllq60eOapZpOW4HjOab8QR33oxUngs/UlBt8nMsTGhTSXFdhK3A84JGOZk/fH+LZJj2FeLjumCLvl959YQc9svo4MCV2MSVAw9qM7QqANAfyYNt9PJKfMAoJPFO7r83jFtFwktjFlHzdl1Whvx3Smef/JXlwrmvyTMencP2BJ/WrORz5umMritj/fwDk2ejpnnL/1wAAAABJRU5ErkJggg=="
                  alt=""
                />
                <p className="text-[12px] md:text-xl mt-1">100,000+ users</p>
              </div>
            </div>
          </div>
          <p className="font-medium tracking-[-0.02em] text-[1.25rem] leading-[140%] text-black mb-4 sm:max-w-[462px] sm:mt-8">
            Manage your crypto across multiple blockchains with one wallet.
          </p>
          <ul className="list-disc list-outside marker:text-[rgba(0,0,0,0.2)] leading-[150%] text-[1rem] tracking-[-0.02em] text-info !font-normal max-w-[330px] mb-6">
            <li className="mb-4">
              Built-in decentralized swaps for power traders.
            </li>
            <li>Bridge your crypto from one chain to another.</li>
          </ul>
          <Link
            to="/enkrypt"
            className="sm:inline-block px-4 py-2 sm:px-5 sm:py-3 rounded-full bg-violet cursor-pointer hover:opacity-50 transition-all"
          >
            <div className="flex items-center">
              <p className="text-base lg:text-2xl text-center text-white font-bold">
                Get Enkrypt Browser Wallet
              </p>
              <img
                className="h-5 sm:h-[31px]"
                src="data:image/svg+xml,%3csvg%20width='40'%20height='32'%20viewBox='0%200%2040%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='&%23244;&%23128;&%23132;&%23171;'%20d='M31.8164%2015.9102C31.8164%2016.4023%2031.6445%2016.8203%2031.3008%2017.1641L23.6602%2024.7812C23.3086%2025.1328%2022.9141%2025.3086%2022.4766%2025.3086C21.9766%2025.3086%2021.5742%2025.1523%2021.2695%2024.8398C20.9648%2024.5352%2020.8125%2024.1562%2020.8125%2023.7031C20.8125%2023.4453%2020.8594%2023.2188%2020.9531%2023.0234C21.0547%2022.8203%2021.1836%2022.6406%2021.3398%2022.4844L23.9648%2019.8594L27.8438%2016.2969L28.5586%2017.3633L24.0117%2017.6094H10.7578C10.2344%2017.6094%209.80859%2017.4531%209.48047%2017.1406C9.16016%2016.8281%209%2016.418%209%2015.9102C9%2015.4023%209.16016%2014.9922%209.48047%2014.6797C9.80859%2014.3672%2010.2344%2014.2109%2010.7578%2014.2109H24.0117L28.5586%2014.457L27.8438%2015.5234L23.9648%2011.9609L21.3398%209.32422C21.1836%209.16797%2021.0547%208.99219%2020.9531%208.79688C20.8594%208.59375%2020.8125%208.36328%2020.8125%208.10547C20.8125%207.65234%2020.9648%207.27344%2021.2695%206.96875C21.5742%206.65625%2021.9766%206.5%2022.4766%206.5C22.6875%206.5%2022.8945%206.54688%2023.0977%206.64062C23.3008%206.72656%2023.4922%206.85938%2023.6719%207.03906L31.3008%2014.6562C31.6445%2014.9922%2031.8164%2015.4102%2031.8164%2015.9102Z'%20fill='white'%20/%3e%3c/svg%3e"
                alt=""
              />
            </div>
          </Link>
        </div>
        <div className="flex-1 pt-12 place-self-end">
          <img
            src="https://www.myetherwallet.com/mew-landing-page/_nuxt/enkrypt.CZKMtq6z.png"
            alt=""
            className="rounded-tl-3xl object-cover object-left h-[558px]"
          />
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl rounded-[32px] bg-[rgba(203,234,241,0.4)] flex flex-wrap lg:min-h-[606px] overflow-hidden mb-7 sm:mb-16">
        <div className="basis-full sm:basis-7/12 xl:basis-1/2 p-8 sm:pt-12 sm:pl-12 sm:pr-5 sm:pb-12">
          <div className="flex gap-4 lg:gap-6 items-center">
            <img
              src="data:image/svg+xml,%3csvg%20width='220'%20height='220'%20viewBox='0%200%20220%20220'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='220'%20height='220'%20fill='%2307385F'/%3e%3cpath%20d='M30.06%20145.41L47.6591%20175.58C50.744%20180.869%2058.3837%20180.873%2061.4748%20175.588L90.4718%20126.013C95.1565%20118.003%20106.77%20118.114%20111.302%20126.211L124.718%20150.185C127.742%20155.589%20135.495%20155.656%20138.612%20150.305L195.06%2053.4103'%20stroke='white'%20stroke-width='20'/%3e%3cpath%20d='M67%20110C90.7482%20110%20110%2090.7482%20110%2067C110%2043.2518%2090.7482%2024%2067%2024C43.2518%2024%2024%2043.2518%2024%2067C24%2090.7482%2043.2518%20110%2067%20110Z'%20fill='%231896A4'/%3e%3cpath%20d='M69.2136%2081.3052C67.4684%2081.5724%2065.654%2081.5376%2063.8307%2081.1167C56.1649%2079.3469%2051.3849%2071.6972%2053.1546%2064.0315C53.2854%2063.4651%2053.4609%2062.9172%2053.6502%2062.3806L40.1935%2056.8794C39.74%2058.0776%2039.3667%2059.3046%2039.0759%2060.5523C35.5148%2075.9769%2045.1346%2091.3718%2060.5592%2094.9328C65.9672%2096.1814%2071.3669%2095.8017%2076.2564%2094.1274L69.2136%2081.3052ZM81.1861%2065.5179L61.6656%2065.3262L92.7261%2079.6398C93.6705%2077.7085%2094.4269%2075.6357%2094.932%2073.4477C98.4931%2058.0231%2088.8733%2042.6282%2073.4487%2039.0672C67.2571%2037.6377%2061.0808%2038.3366%2055.6624%2040.6734L62.8389%2053.6245C65.238%2052.8757%2067.7933%2052.7802%2070.2416%2053.3477C76.247%2054.7341%2080.4866%2059.7337%2081.1861%2065.5179Z'%20fill='white'/%3e%3c/svg%3e"
              alt=""
              className="h-[64px] w-[64px] md:h-[100px] md:w-[100px] rounded-[17px] md:rounded-[26px] shadow-[0px_1.5px_6px_0px_rgba(0,0,0,0.1)]"
            />
            <div>
              <h4 className="text-xl md:text-3xl lg:text-4xl font-semibold">
                MEW
                <br />
                Portfolio Manager
              </h4>
            </div>
          </div>
          <p className="font-medium tracking-[-0.02em] text-[1.25rem] leading-[140%] text-black mb-4 sm:max-w-[462px] sm:mt-8">
            View and manage your crypto portfolio on the big screen.
          </p>
          <ul className="list-disc list-outside marker:text-[rgba(0,0,0,0.2)] leading-[150%] text-[1rem] tracking-[-0.02em] text-info !font-normal max-w-[330px] mb-6">
            <li className="mb-4">
              Available to all MEW Mobile App and Enkrypt users.
            </li>
            <li>Works with most hardware and 3rd party wallets.</li>
          </ul>
          <Link
            to="/portfolio-manager"
            className="sm:inline-block px-4 py-2 sm:px-5 sm:py-3 rounded-full border-[3px] border-[#0c5876] cursor-pointer hover:opacity-50 transition-all"
          >
            <div className="flex items-center">
              <p className="text-base lg:text-2xl text-center text-[#0c5876] font-bold">
                Access my portfolio
              </p>
              <img
                className="h-5 sm:h-[31px]"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA+CAYAAAC875yHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKJSURBVHgB7drPbxJBFMDxNyxVbEvC0SMXT5rIvRd6MOmxx60n/gR7ELlJLwZ7af0LwIviSf6DcrCJN3uoiTfxP9gmlCI/9jlvJSamhW2yw848+j4XCB1C+03ZnZldACGEEEIIIYQQ4m5RwETBrxUngE1QWPr7imr1P77dB8vYBMz71Z8IUPzvRYSz7O/17aBTD8CSDDCQ36vuXotHFJQm9wcnhd16ASxhERAQ5weyHJFFQC837iwcYDEii4BB6zhAhMUnDEsRPWBi/P30670nW3TSK88dpOBh6I131h89+zT80R1CCtgEJKPz065rEVkFJK5FZBeQuBSRZUDiSkS2AYkLEVkHJBRx7fHWhVKwM3fQEiOyWQvHmS33mnp9PH8euIS188oEJBvPX5YUqpM0IxoNSKuA8YNBJYPqKaQEAX9FjwqCDGaCUIUFhXAU8yZjEbNgSLRfpwbf9C9f0H8UpE1/rv7UMHqMH6yXfbmrz/rZNiRkbC0cbXYu+uo4B8sbe9UXkJDBzQQsAzMmDjXmAupjEDCjd3guICFzARHeATPoeS1IyFjAbG50rE/p74GPg8sPb84gIePzQJrKTHLDEqQEM9NgLfSiw0fQbvQ2/epr/bQe87aDfvswbsytrNREOu14ZHWWcv6rpp5/VmKGGY1H2AekQ8Y0d3VkIx4xthKxITre6gtJ+mncMXcp8Qjb/8B/8ZS9eIRlQFfiEXYBXYpHWAV0LR7hc3ubg/EIm7PwbP/OqXiExb0xm36tfIvtstTjERYBFUyLMUOsxCMsAiJ4vQU/thaPsLguPDr/0rvpArq+kLR/2T5sgEWspjF5v1ZBnN1krlSn3250QQghhBBCCCGEEKn6A1z8Or4/ROEoAAAAAElFTkSuQmCC"
                alt=""
              />
            </div>
          </Link>
          <div className="flex mt-[50px] gap-1 opacity-70 items-center">
            <img
              className="h-9"
              src="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.9804%2028C15.8497%2028%2015.6928%2027.9608%2015.5098%2027.8824C15.3355%2027.8126%2015.1786%2027.7342%2015.0392%2027.6471C12.5817%2026.0784%2010.451%2024.4357%208.64706%2022.719C6.84314%2020.9935%205.4488%2019.2244%204.46405%2017.4118C3.48802%2015.5904%203%2013.7516%203%2011.8954C3%2010.7364%203.18301%209.67756%203.54902%208.71895C3.92375%207.75163%204.44227%206.91503%205.10458%206.20915C5.76688%205.50327%206.53813%204.95861%207.4183%204.57516C8.29847%204.19172%209.25272%204%2010.281%204C11.5621%204%2012.6863%204.3268%2013.6536%204.98039C14.6209%205.63399%2015.3965%206.49673%2015.9804%207.56863C16.573%206.48802%2017.3529%205.62527%2018.3203%204.98039C19.2876%204.3268%2020.4074%204%2021.6797%204C22.7081%204%2023.6623%204.19172%2024.5425%204.57516C25.4314%204.95861%2026.2026%205.50327%2026.8562%206.20915C27.5185%206.91503%2028.0327%207.75163%2028.3987%208.71895C28.7734%209.67756%2028.9608%2010.7364%2028.9608%2011.8954C28.9608%2013.7516%2028.4684%2015.5904%2027.4837%2017.4118C26.5076%2019.2244%2025.1176%2020.9935%2023.3137%2022.719C21.5185%2024.4357%2019.3922%2026.0784%2016.9346%2027.6471C16.7952%2027.7342%2016.634%2027.8126%2016.451%2027.8824C16.2767%2027.9608%2016.1198%2028%2015.9804%2028Z'%20stroke='black'%20stroke-width='2'%20stroke-linejoin='round'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21.6802%2010.2959C21.9322%2010.0439%2022.0582%209.91785%2022.2035%209.87064C22.3313%209.82911%2022.469%209.82911%2022.5968%209.87064C22.7421%209.91785%2022.8681%2010.0439%2023.1201%2010.2959L25.28%2012.4558C25.532%2012.7078%2025.6581%2012.8338%2025.7053%2012.9791C25.7468%2013.1069%2025.7468%2013.2446%2025.7053%2013.3724C25.6581%2013.5177%2025.532%2013.6437%2025.28%2013.8957L17.9004%2021.2753L17.9004%2021.2753C16.9064%2022.2694%2015.2947%2022.2694%2014.3006%2021.2753C14.2969%2021.2716%2014.2932%2021.2679%2014.2895%2021.2641L6.67245%2013.6471C6.65255%2013.6272%206.64261%2013.6172%206.63451%2013.6085C6.40801%2013.3644%206.40801%2012.987%206.63451%2012.7428C6.64261%2012.7341%206.65255%2012.7242%206.67245%2012.7043L9.32946%2010.0473C9.34935%2010.0274%209.3593%2010.0174%209.36802%2010.0093C9.61213%209.78284%209.98959%209.78284%2010.2337%2010.0093C10.2424%2010.0174%2010.2524%2010.0274%2010.2723%2010.0473L16.1005%2015.8755L21.6802%2010.2959ZM7.12243%2013.1971L14.7506%2020.8253C15.4962%2021.5708%2016.7049%2021.5708%2017.4505%2020.8253C18.196%2020.0798%2018.196%2018.871%2017.4505%2018.1254L9.82229%2010.4973L9.80176%2010.4768L9.80086%2010.4759L9.79996%2010.4768L9.77943%2010.4973L7.12243%2013.1543L7.10196%2013.1748L7.10107%2013.1757L7.10196%2013.1766L7.12243%2013.1971ZM15.2006%2020.3753C14.7036%2019.8783%2014.7036%2019.0724%2015.2006%2018.5754C15.6976%2018.0783%2016.5035%2018.0783%2017.0005%2018.5754C17.4975%2019.0724%2017.4975%2019.8783%2017.0005%2020.3753C16.5035%2020.8723%2015.6976%2020.8723%2015.2006%2020.3753ZM15.6506%2019.0254C15.402%2019.2739%2015.4021%2019.6768%2015.6506%2019.9253C15.8991%2020.1738%2016.302%2020.1738%2016.5505%2019.9253C16.799%2019.6768%2016.799%2019.2739%2016.5505%2019.0254C16.302%2018.7768%2015.8991%2018.7768%2015.6506%2019.0254Z'%20fill='black'%20/%3e%3c/svg%3e"
              alt=""
            />
            <p className="text-[17px]">Great for hardware wallets</p>
          </div>
        </div>
        <div className="flex-1 pt-12 place-self-end">
          <img
            src="https://www.myetherwallet.com/mew-landing-page/_nuxt/wallet.Dfy0Yo9X.jpg"
            alt=""
            className="rounded-tl-3xl object-cover object-left h-[558px]"
          />
        </div>
      </div>
      <h2 className="mx-auto max-w-screen-xl text-[52px] leading-[110%] font-bold tracking-[-0.03em] text-black">
        Want to get into crypto?
      </h2>
      <h2 className="mx-auto max-w-screen-xl text-[52px] leading-[110%] font-bold tracking-[-0.03em] text-black mb-10">
        MEW is the way to do it.
      </h2>
      <div className="mx-auto w-full max-w-screen-xl flex items-center justify-between">
        <ul className="flex-1 list-disc list-outside marker:text-[rgba(0,0,0,0.2)] font-medium tracking-[-0.02em] text-[1.25rem] leading-[140%]">
          <li className="mb-4">
            The Ethereum ecosystem has the biggest development community in all
            of web3.
          </li>
          <li>MEW is the most trusted and battle tested Ethereum wallet.</li>
        </ul>
        <div className="bg-[#f6f6f6] rounded-3xl p-4 max-w-[304px] z-[1]">
          <div className="flex align-center mb-4 text-lg gap-4">
            <img
              src="https://www.myetherwallet.com//mew-landing-page/_nuxt/donate-eth.CqPNzgt3.svg"
              alt=""
            />
            <p className="text-bold">Ethereum</p>
            <p>$3428.20</p>
          </div>
          <p className="text-info text-[15px] leading-[21px]">
            Not investment advice. All decisions are made at the user's own
            risk.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl mb-8 mt-20 pt-[200px] md:pt-[0px] md:h-screen relative flex justify-start items-center overflow-x-clip">
        <img
          className="absolute sm:top-[70px] right-[-10%] md:top-[0px] md:h-[100%]"
          src="https://www.myetherwallet.com/mew-landing-page/_nuxt/self-custody.Pg99LToI.svg"
          alt=""
        />
        <div className="basis-full sm:basis-1/2 md:basis-7/12 z-[1]">
          <h2 className="mb-6 text-[52px] leading-[110%] font-bold tracking-[-0.03em] text-black">
            Truly own your
            <br />
            crypto assets.
          </h2>
          <p className="text-[1.5rem] leading-[130%] tracking-[-0.03em]">
            MEW is a self-custody wallet, which means that you hold your keys
            and nobody except you (not even the MEW team) can access your
            crypto.
          </p>
        </div>
      </div>
      <h2 className="mx-auto max-w-screen-xl text-center basis-full mb-10 md:mb-16 xl:mb-[72px] text-[52px] leading-[110%] font-bold tracking-[-0.03em] text-black">
        Buy, store, send,
        <br />
        and swap tokens
      </h2>
      <div className="mx-auto max-w-screen-xl mb-20 h-[544px] px-5 bg-[#f9f9fa] rounded-2xl">
        <Carousel theme={customCaroselTheme}>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <span className="leading-[110%] text-[2.25rem] font-bold tracking-[-0.05em]">
                Store your tokens.
              </span>
              <span className="leading-[130%] text-[1.5rem] tracking-[-0.03em] text-[#000000b3]">
                MEW supports ETH and all ERC-20 tokens!
              </span>
            </div>
            <div className="self-end sm:self-center sm:justify-self-end">
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_nuxt/store.CIzsRSds.png"
                alt=""
                className="lg:object-left object-cover h-[300px] sm:h-[400px] lg:h-[570px]"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <span className="leading-[110%] text-[2.25rem] font-bold tracking-[-0.05em]">
                Buy & sell.
              </span>
              <span className="leading-[130%] text-[1.5rem] tracking-[-0.03em] text-[#000000b3]">
                Buy & sell crypto with ease. Pay however you like.
              </span>
            </div>
            <div className="self-end sm:self-center sm:justify-self-end">
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_nuxt/buy.B9ROPqBn.png"
                alt=""
                className="lg:object-left object-cover h-[300px] sm:h-[400px] lg:h-[570px]"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2 max-w-[406px]">
              <span className="leading-[110%] text-[2.25rem] font-bold tracking-[-0.05em]">
                Swap.
              </span>
              <span className="leading-[130%] text-[1.5rem] tracking-[-0.03em] text-[#000000b3]">
                Swap ETH, ERC-20 tokens and even BTC via our integrated
                decentralized partners without relying on centralized
                exchanges.We find the best price for you!
              </span>
            </div>
            <div className="self-end sm:self-center sm:justify-self-end">
              <img
                src="https://www.myetherwallet.com/mew-landing-page/_nuxt/swap.CHqoovDS.png"
                alt=""
                className="lg:object-left object-cover h-[300px] sm:h-[400px] lg:h-[570px]"
              />
            </div>
          </div>
        </Carousel>
      </div>
      <h2 className="mx-auto max-w-screen-xl md:basis-2/3 mb-10 md:mb-16 xl:mb-18 text-[52px] leading-[110%] font-bold tracking-[-0.03em] text-black">
        MEW supports ETH and all ERC-20 tokens!
      </h2>
      <div className="mx-auto max-w-screen-xl flex flex-wrap gap-6 mb-20">
        <Link
          to="/best-wallet-for/eth"
          className="hover:bg-white transition-all p-4 bg-[#f7f7f9] shadow-[0px_1.5px_6px_0px_rgba(0,0,0,0.1)] text-2xl flex items-center rounded-full"
        >
          <img
            src="https://strapi.mewapi.io/uploads/thumbnail_ethereum_eth_logo_fe7073d75c.png"
            className="max-h-[24px] lg:max-h-[42px] pr-2"
          />
          <p>Ethereum (ETH)</p>
        </Link>
        <Link
          to="/best-wallet-for/eth"
          className="hover:bg-white transition-all p-4 bg-[#f7f7f9] shadow-[0px_1.5px_6px_0px_rgba(0,0,0,0.1)] text-2xl flex items-center rounded-full"
        >
          <img
            src="https://strapi.mewapi.io/uploads/thumbnail_Ondo_Icon_Black_b27a5fb539.png"
            className="max-h-[24px] lg:max-h-[42px] pr-2"
          />
          <p>Ondo (ONDO)</p>
        </Link>
        <Link
          to="/pages/best-wallet-for/unibot"
          className="hover:bg-white transition-all p-4 bg-[#f7f7f9] shadow-[0px_1.5px_6px_0px_rgba(0,0,0,0.1)] text-2xl flex items-center rounded-full"
        >
          <img
            src="https://strapi.mewapi.io/uploads/thumbnail_UNIBOT_635c693af1.png"
            className="max-h-[24px] lg:max-h-[42px] pr-2"
          />
          <p>Unibot (UNIBOT)</p>
        </Link>
        <Link
          to="/pages/best-wallet-for/ncdt"
          className="hover:bg-white transition-all p-4 bg-[#f7f7f9] shadow-[0px_1.5px_6px_0px_rgba(0,0,0,0.1)] text-2xl flex items-center rounded-full"
        >
          <img
            src="https://strapi.mewapi.io/uploads/thumbnail_image_1668_92e26c2de6.png"
            className="max-h-[24px] lg:max-h-[42px] pr-2"
          />
          <p>Nuco.cloud (NCDT)</p>
        </Link>
        <Link
          to="/pages/best-wallet-for/mana"
          className="hover:bg-white transition-all p-4 bg-[#f7f7f9] shadow-[0px_1.5px_6px_0px_rgba(0,0,0,0.1)] text-2xl flex items-center rounded-full"
        >
          <img
            src="https://strapi.mewapi.io/uploads/thumbnail_decentraland_mana_logo_36223f6645.png"
            className="max-h-[24px] lg:max-h-[42px] pr-2"
          />
          <p>Decentraland (MANA)</p>
        </Link>
        <Link
          to="/pages/best-wallet-for/busd"
          className="hover:bg-white transition-all p-4 bg-[#f7f7f9] shadow-[0px_1.5px_6px_0px_rgba(0,0,0,0.1)] text-2xl flex items-center rounded-full"
        >
          <img
            src="https://strapi.mewapi.io/uploads/thumbnail_binance_usd_busd_logo_92c69db109.png"
            className="max-h-[24px] lg:max-h-[42px] pr-2"
          />
          <p>Binance USD (BUSD)</p>
        </Link>
        <Link
          to="/pages/best-wallet-for/gswift"
          className="hover:bg-white transition-all p-4 bg-[#f7f7f9] shadow-[0px_1.5px_6px_0px_rgba(0,0,0,0.1)] text-2xl flex items-center rounded-full"
        >
          <img
            src="https://strapi.mewapi.io/uploads/thumbnail_GAMESWIFT_TOKEN_200x200_d9c494df6e.png"
            className="max-h-[24px] lg:max-h-[42px] pr-2"
          />
          <p>GameSwift (GSWIFT)</p>
        </Link>
        <Link
          to="/pages/best-wallet-for/icx"
          className="hover:bg-white transition-all p-4 bg-[#f7f7f9] shadow-[0px_1.5px_6px_0px_rgba(0,0,0,0.1)] text-2xl flex items-center rounded-full"
        >
          <img
            src="https://strapi.mewapi.io/uploads/thumbnail_ICON_ICX_65725afac9.png"
            className="max-h-[24px] lg:max-h-[42px] pr-2"
          />
          <p>Icon (ICX)</p>
        </Link>
        <Link
          to="/pages/best-wallet-for/grt"
          className="hover:bg-white transition-all p-4 bg-[#f7f7f9] shadow-[0px_1.5px_6px_0px_rgba(0,0,0,0.1)] text-2xl flex items-center rounded-full"
        >
          <img
            src="https://strapi.mewapi.io/uploads/thumbnail_the_graph_grt_logo_32b59b4111.png"
            className="max-h-[24px] lg:max-h-[42px] pr-2"
          />
          <p>The Graph (GRT)</p>
        </Link>
        <Link
          to="/pages/best-wallet-for/aurora"
          className="hover:bg-white transition-all p-4 bg-[#f7f7f9] shadow-[0px_1.5px_6px_0px_rgba(0,0,0,0.1)] text-2xl flex items-center rounded-full"
        >
          <img
            src="https://strapi.mewapi.io/uploads/thumbnail_Aurora_logo_token_dark_BG_f98409c981.png"
            className="max-h-[24px] lg:max-h-[42px] pr-2"
          />
          <p>Aurora (AURORA)</p>
        </Link>
        <Link
          to="/pages/best-wallet-for/okb"
          className="hover:bg-white transition-all p-4 bg-[#f7f7f9] shadow-[0px_1.5px_6px_0px_rgba(0,0,0,0.1)] text-2xl flex items-center rounded-full"
        >
          <img
            src="https://strapi.mewapi.io/uploads/thumbnail_okb_okb_logo_820b301537.png"
            className="max-h-[24px] lg:max-h-[42px] pr-2"
          />
          <p>OKB (OKB)</p>
        </Link>
        <Link
          to="/pages/best-wallet-for/dai"
          className="hover:bg-white transition-all p-4 bg-[#f7f7f9] shadow-[0px_1.5px_6px_0px_rgba(0,0,0,0.1)] text-2xl flex items-center rounded-full"
        >
          <img
            src="https://strapi.mewapi.io/uploads/thumbnail_multi_collateral_dai_dai_logo_079ccc95a7.png"
            className="max-h-[24px] lg:max-h-[42px] pr-2"
          />
          <p>DAI (DAI)</p>
        </Link>
        <Link
          to="/pages/best-wallet-for/gomining"
          className="hover:bg-white transition-all p-4 bg-[#f7f7f9] shadow-[0px_1.5px_6px_0px_rgba(0,0,0,0.1)] text-2xl flex items-center rounded-full"
        >
          <img
            src="https://strapi.mewapi.io/uploads/thumbnail_a_Brx_ij0_400jh_jx400_copy_6381af9a9a.png"
            className="max-h-[24px] lg:max-h-[42px] pr-2"
          />
          <p>GoMining (GOMINING)</p>
        </Link>
        <Link
          to="/pages/best-wallet-for/vrtx"
          className="hover:bg-white transition-all p-4 bg-[#f7f7f9] shadow-[0px_1.5px_6px_0px_rgba(0,0,0,0.1)] text-2xl flex items-center rounded-full"
        >
          <img
            src="https://strapi.mewapi.io/uploads/thumbnail_purple_53917d9044.png"
            className="max-h-[24px] lg:max-h-[42px] pr-2"
          />
          <p>Vertex (VRTX)</p>
        </Link>
        <Link
          to="/pages/best-wallet-for/root"
          className="hover:bg-white transition-all p-4 bg-[#f7f7f9] shadow-[0px_1.5px_6px_0px_rgba(0,0,0,0.1)] text-2xl flex items-center rounded-full"
        >
          <img
            src="https://strapi.mewapi.io/uploads/thumbnail_Root_Mark_Icon_1_684d7a676d.png"
            className="max-h-[24px] lg:max-h-[42px] pr-2"
          />
          <p>Root Network (ROOT)</p>
        </Link>
        <Link
          to="/pages/best-wallet-for/lime"
          className="hover:bg-white transition-all p-4 bg-[#f7f7f9] shadow-[0px_1.5px_6px_0px_rgba(0,0,0,0.1)] text-2xl flex items-center rounded-full"
        >
          <img
            src="https://strapi.mewapi.io/uploads/thumbnail_Screenshot_2024_03_26_at_1_16_03_PM_f357dc1379.png"
            className="max-h-[24px] lg:max-h-[42px] pr-2"
          />
          <p>iME Lab (LIME)</p>
        </Link>
        <Link
          to="/access-wallet"
          className="bg-bg-primary rounded-full shadow-[0px_1.5px_6px_0px_rgba(0,0,0,0.1)] py-4 px-6 flex items-center transition-all hover:opacity-50"
        >
          <p className="text-2xl text-white pr-3">Get Tokens</p>
          <img className="fill-white" src="data:image/svg+xml,%3csvg%20width='40'%20height='32'%20viewBox='0%200%2040%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20id='&%23244;&%23128;&%23132;&%23171;'%20d='M31.8164%2015.9102C31.8164%2016.4023%2031.6445%2016.8203%2031.3008%2017.1641L23.6602%2024.7812C23.3086%2025.1328%2022.9141%2025.3086%2022.4766%2025.3086C21.9766%2025.3086%2021.5742%2025.1523%2021.2695%2024.8398C20.9648%2024.5352%2020.8125%2024.1562%2020.8125%2023.7031C20.8125%2023.4453%2020.8594%2023.2188%2020.9531%2023.0234C21.0547%2022.8203%2021.1836%2022.6406%2021.3398%2022.4844L23.9648%2019.8594L27.8438%2016.2969L28.5586%2017.3633L24.0117%2017.6094H10.7578C10.2344%2017.6094%209.80859%2017.4531%209.48047%2017.1406C9.16016%2016.8281%209%2016.418%209%2015.9102C9%2015.4023%209.16016%2014.9922%209.48047%2014.6797C9.80859%2014.3672%2010.2344%2014.2109%2010.7578%2014.2109H24.0117L28.5586%2014.457L27.8438%2015.5234L23.9648%2011.9609L21.3398%209.32422C21.1836%209.16797%2021.0547%208.99219%2020.9531%208.79688C20.8594%208.59375%2020.8125%208.36328%2020.8125%208.10547C20.8125%207.65234%2020.9648%207.27344%2021.2695%206.96875C21.5742%206.65625%2021.9766%206.5%2022.4766%206.5C22.6875%206.5%2022.8945%206.54688%2023.0977%206.64062C23.3008%206.72656%2023.4922%206.85938%2023.6719%207.03906L31.3008%2014.6562C31.6445%2014.9922%2031.8164%2015.4102%2031.8164%2015.9102Z'%20fill='white'%20/%3e%3c/svg%3e" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
