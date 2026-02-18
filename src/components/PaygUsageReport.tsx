import { useState } from 'react'
import './PaygUsageReport.css'
import { PrimaryButton, DefaultButton, Link } from '@fluentui/react'
import PaygInsightsPanel from './PaygInsightsPanel'

const PaygUsageReport = () => {
  const [showPanel, setShowPanel] = useState(false)

  return (
    <main className="payg-content">
      <div className="breadcrumb">
        <span>Reports</span>
        <span className="separator">›</span>
        <span>Pay-as-you-go usage report</span>
      </div>

      <div className="payg-header">
        <h1 className="payg-title">Pay-as-you-go usage report (Preview)</h1>
        <div className="payg-subtitle">
          Understand the usage trends of your pay-as-you-go capabilities in Insider Risk Management.{' '}
          <Link href="#">Learn more</Link>
        </div>
        <div className="last-updated">Last updated on: 09/07/2025</div>
      </div>

      <div className="payg-empty-state">
        <div className="insight-header">
          <h2 className="payg-insight-heading">
            Do you know that <span className="highlight-stat">24% of your users</span> exfiltrated non-Microsoft 365 data in the past one month?
          </h2>
          <DefaultButton onClick={() => setShowPanel(true)}>View details</DefaultButton>
        </div>
        
        <div className="empty-state-icon">
          <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_7717_21266)">
              <rect x="40.75" y="46" width="72.25" height="51.75" rx="5" fill="url(#paint0_linear_7717_21266)"/>
              <rect x="40.75" y="46" width="72.25" height="51.75" rx="5" fill="url(#paint1_radial_7717_21266)" fillOpacity="0.4"/>
              <rect x="40.75" y="46" width="72.25" height="51.75" rx="5" fill="url(#paint2_radial_7717_21266)" fillOpacity="0.4"/>
              <rect x="40.75" y="46" width="72.25" height="51.75" rx="5" fill="url(#paint3_radial_7717_21266)" fillOpacity="0.4"/>
              <rect x="40.75" y="46" width="72.25" height="51.75" rx="5" fill="url(#paint4_radial_7717_21266)" fillOpacity="0.5"/>
              <rect x="40.75" y="46" width="72.25" height="51.75" rx="5" fill="url(#paint5_radial_7717_21266)" fillOpacity="0.6"/>
              <rect x="40.75" y="46" width="72.25" height="51.75" rx="5" fill="url(#paint6_radial_7717_21266)"/>
              <rect x="40.75" y="46" width="72.25" height="51.75" rx="5" fill="url(#paint7_radial_7717_21266)"/>
              <circle cx="103.352" cy="45.5043" r="6.70352" fill="url(#paint8_linear_7717_21266)"/>
              <circle cx="103.352" cy="45.5043" r="6.70352" fill="url(#paint9_radial_7717_21266)"/>
              <circle cx="41.875" cy="46.375" r="25.875" fill="url(#paint10_radial_7717_21266)"/>
              <circle cx="41.875" cy="46.375" r="25.875" fill="url(#paint11_radial_7717_21266)" fillOpacity="0.6"/>
              <circle cx="41.875" cy="46.375" r="25.875" fill="url(#paint12_radial_7717_21266)" fillOpacity="0.4"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M41.875 72.25C56.1654 72.25 67.75 60.6654 67.75 46.375C67.75 46.2498 67.7491 46.1248 67.7473 46L45.75 46C42.9886 46 40.75 48.2386 40.75 51V72.226C41.123 72.2419 41.4981 72.25 41.875 72.25Z" fill="url(#paint13_radial_7717_21266)"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M41.875 72.25C56.1654 72.25 67.75 60.6654 67.75 46.375C67.75 46.2498 67.7491 46.1248 67.7473 46L45.75 46C42.9886 46 40.75 48.2386 40.75 51V72.226C41.123 72.2419 41.4981 72.25 41.875 72.25Z" fill="url(#paint14_radial_7717_21266)" fillOpacity="0.5"/>
              <rect x="56.4219" y="82.7188" width="21.75" height="3.2259" rx="1.61295" transform="rotate(-45.711 56.4219 82.7188)" fill="url(#paint15_linear_7717_21266)"/>
              <rect x="87.8203" y="79.625" width="34.1339" height="3.46619" rx="1.73309" transform="rotate(-66.6421 87.8203 79.625)" fill="url(#paint16_linear_7717_21266)"/>
              <rect width="21.75" height="3.2259" rx="1.61295" transform="matrix(-0.725165 -0.688575 -0.688575 0.725165 91.7422 82.3828)" fill="url(#paint17_linear_7717_21266)"/>
              <circle cx="59.6562" cy="81.3086" r="5.25" fill="url(#paint18_radial_7717_21266)"/>
              <circle cx="59.6562" cy="81.3086" r="5.25" fill="url(#paint19_radial_7717_21266)" fillOpacity="0.5"/>
              <circle cx="59.6562" cy="81.3086" r="5.25" fill="url(#paint20_radial_7717_21266)" fillOpacity="0.8"/>
              <circle cx="73.4141" cy="67.8086" r="5.25" fill="url(#paint21_radial_7717_21266)"/>
              <circle cx="73.4141" cy="67.8086" r="5.25" fill="url(#paint22_radial_7717_21266)" fillOpacity="0.5"/>
              <circle cx="73.4141" cy="67.8086" r="5.25" fill="url(#paint23_radial_7717_21266)" fillOpacity="0.8"/>
              <circle cx="89.0781" cy="81.2812" r="5.25" fill="url(#paint24_radial_7717_21266)"/>
              <circle cx="89.0781" cy="81.2812" r="5.25" fill="url(#paint25_radial_7717_21266)" fillOpacity="0.8"/>
              <path d="M109.992 46.4126C109.548 49.6844 106.743 52.206 103.349 52.206C99.8145 52.206 96.9186 49.4699 96.6641 46H108C108.708 46 109.381 46.1472 109.992 46.4126Z" fill="url(#paint26_radial_7717_21266)"/>
              <path d="M109.992 46.4126C109.548 49.6844 106.743 52.206 103.349 52.206C99.8145 52.206 96.9186 49.4699 96.6641 46H108C108.708 46 109.381 46.1472 109.992 46.4126Z" fill="url(#paint27_radial_7717_21266)"/>
              <path d="M109.992 46.4126C109.548 49.6844 106.743 52.206 103.349 52.206C99.8145 52.206 96.9186 49.4699 96.6641 46H108C108.708 46 109.381 46.1472 109.992 46.4126Z" fill="url(#paint28_radial_7717_21266)" fillOpacity="0.8"/>
              <path d="M109.992 46.4126C109.548 49.6844 106.743 52.206 103.349 52.206C99.8145 52.206 96.9186 49.4699 96.6641 46H108C108.708 46 109.381 46.1472 109.992 46.4126Z" fill="url(#paint29_radial_7717_21266)" fillOpacity="0.5"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M67.75 45.5V46H68.2474C68.2491 46.1248 68.25 46.2498 68.25 46.375C68.25 60.9415 56.4415 72.75 41.875 72.75C41.4981 72.75 41.1231 72.7421 40.75 72.7264V72.226L40.25 72.202V51C40.25 47.9624 42.7124 45.5 45.75 45.5H67.75ZM40.75 51V72.226C41.123 72.2419 41.4981 72.25 41.875 72.25C56.1654 72.25 67.75 60.6654 67.75 46.375C67.75 46.2498 67.7491 46.1248 67.7473 46H45.75C42.9886 46 40.75 48.2386 40.75 51Z" fill="#F2F1F3"/>
              <path d="M51.9375 52.8711C51.9375 53.3543 51.5457 53.7461 51.0625 53.7461C50.5793 53.7461 50.1875 53.3543 50.1875 52.8711C50.1875 52.3878 50.5793 51.9961 51.0625 51.9961C51.5457 51.9961 51.9375 52.3878 51.9375 52.8711Z" fill="#AC76FF"/>
              <path d="M27.625 32.4336C27.625 32.9168 27.2332 33.3086 26.75 33.3086C26.2668 33.3086 25.875 32.9168 25.875 32.4336C25.875 31.9503 26.2668 31.5586 26.75 31.5586C27.2332 31.5586 27.625 31.9503 27.625 32.4336Z" fill="#AC76FF"/>
              <path d="M56.9375 41.0586C56.9375 41.5418 56.5457 41.9336 56.0625 41.9336C55.5793 41.9336 55.1875 41.5418 55.1875 41.0586C55.1875 40.5753 55.5793 40.1836 56.0625 40.1836C56.5457 40.1836 56.9375 40.5753 56.9375 41.0586Z" fill="#AC76FF"/>
              <path d="M45.8125 30.4336C45.8125 30.7788 45.5327 31.0586 45.1875 31.0586C44.8423 31.0586 44.5625 30.7788 44.5625 30.4336C44.5625 30.0884 44.8423 29.8086 45.1875 29.8086C45.5327 29.8086 45.8125 30.0884 45.8125 30.4336Z" fill="#AC76FF"/>
              <path d="M52.5625 40.8086C52.5625 41.1538 52.2827 41.4336 51.9375 41.4336C51.5923 41.4336 51.3125 41.1538 51.3125 40.8086C51.3125 40.4634 51.5923 40.1836 51.9375 40.1836C52.2827 40.1836 52.5625 40.4634 52.5625 40.8086Z" fill="#AC76FF"/>
              <path d="M30.1875 56.4336C30.1875 56.7788 29.9077 57.0586 29.5625 57.0586C29.2173 57.0586 28.9375 56.7788 28.9375 56.4336C28.9375 56.0884 29.2173 55.8086 29.5625 55.8086C29.9077 55.8086 30.1875 56.0884 30.1875 56.4336Z" fill="#AC76FF"/>
              <path d="M23.3125 46.3726C23.3125 46.7177 23.0327 46.9976 22.6875 46.9976C22.3423 46.9976 22.0625 46.7177 22.0625 46.3726C22.0625 46.0274 22.3423 45.7476 22.6875 45.7476C23.0327 45.7476 23.3125 46.0274 23.3125 46.3726Z" fill="#AC76FF"/>
              <path d="M34.5625 36.9351C34.5625 37.0731 34.4506 37.1851 34.3125 37.1851C34.1744 37.1851 34.0625 37.0731 34.0625 36.9351C34.0625 36.797 34.1744 36.6851 34.3125 36.6851C34.4506 36.6851 34.5625 36.797 34.5625 36.9351Z" fill="#AC76FF"/>
              <path d="M41.5332 41.1836C41.5332 41.3907 41.3653 41.5586 41.1582 41.5586C40.9511 41.5586 40.7832 41.3907 40.7832 41.1836C40.7832 40.9765 40.9511 40.8086 41.1582 40.8086C41.3653 40.8086 41.5332 40.9765 41.5332 41.1836Z" fill="#AC76FF"/>
              <path d="M42.2832 26.8086C42.2832 27.0157 42.1153 27.1836 41.9082 27.1836C41.7011 27.1836 41.5332 27.0157 41.5332 26.8086C41.5332 26.6015 41.7011 26.4336 41.9082 26.4336C42.1153 26.4336 42.2832 26.6015 42.2832 26.8086Z" fill="#AC76FF"/>
              <path d="M60.4434 39.6851C60.4434 39.8922 60.2755 40.0601 60.0684 40.0601C59.8613 40.0601 59.6934 39.8922 59.6934 39.6851C59.6934 39.478 59.8613 39.3101 60.0684 39.3101C60.2755 39.3101 60.4434 39.478 60.4434 39.6851Z" fill="#AC76FF"/>
              <path d="M58.3809 37.5601C58.3809 37.7672 58.213 37.9351 58.0059 37.9351C57.7988 37.9351 57.6309 37.7672 57.6309 37.5601C57.6309 37.353 57.7988 37.1851 58.0059 37.1851C58.213 37.1851 58.3809 37.353 58.3809 37.5601Z" fill="#AC76FF"/>
              <path d="M31.5625 60.8296C31.5625 61.0367 31.3946 61.2046 31.1875 61.2046C30.9804 61.2046 30.8125 61.0367 30.8125 60.8296C30.8125 60.6225 30.9804 60.4546 31.1875 60.4546C31.3946 60.4546 31.5625 60.6225 31.5625 60.8296Z" fill="#AC76FF"/>
              <path d="M32.1875 38.3101C32.1875 38.8623 31.7398 39.3101 31.1875 39.3101C30.6352 39.3101 30.1875 38.8623 30.1875 38.3101C30.1875 37.7578 30.6352 37.3101 31.1875 37.3101C31.7398 37.3101 32.1875 37.7578 32.1875 38.3101Z" fill="#AC76FF"/>
              <path d="M56.6875 63.1226C56.6875 63.6058 56.2957 63.9976 55.8125 63.9976C55.3293 63.9976 54.9375 63.6058 54.9375 63.1226C54.9375 62.6393 55.3293 62.2476 55.8125 62.2476C56.2957 62.2476 56.6875 62.6393 56.6875 63.1226Z" fill="#AC76FF"/>
              <path d="M54.4375 59.8296C54.4375 60.1748 54.1577 60.4546 53.8125 60.4546C53.4673 60.4546 53.1875 60.1748 53.1875 59.8296C53.1875 59.4844 53.4673 59.2046 53.8125 59.2046C54.1577 59.2046 54.4375 59.4844 54.4375 59.8296Z" fill="#AC76FF"/>
              <path d="M46.4375 51.3711C46.4375 51.7163 46.1577 51.9961 45.8125 51.9961C45.4673 51.9961 45.1875 51.7163 45.1875 51.3711C45.1875 51.0259 45.4673 50.7461 45.8125 50.7461C46.1577 50.7461 46.4375 51.0259 46.4375 51.3711Z" fill="#AC76FF"/>
              <path d="M45.1875 65.7461C45.1875 66.0913 44.9077 66.3711 44.5625 66.3711C44.2173 66.3711 43.9375 66.0913 43.9375 65.7461C43.9375 65.4009 44.2173 65.1211 44.5625 65.1211C44.9077 65.1211 45.1875 65.4009 45.1875 65.7461Z" fill="#AC76FF"/>
              <path d="M62.5625 52.3711C62.5625 52.7163 62.2827 52.9961 61.9375 52.9961C61.5923 52.9961 61.3125 52.7163 61.3125 52.3711C61.3125 52.0259 61.5923 51.7461 61.9375 51.7461C62.2827 51.7461 62.5625 52.0259 62.5625 52.3711Z" fill="#AC76FF"/>
              <path d="M57.1875 52.6211C57.1875 52.7592 57.0756 52.8711 56.9375 52.8711C56.7994 52.8711 56.6875 52.7592 56.6875 52.6211C56.6875 52.483 56.7994 52.3711 56.9375 52.3711C57.0756 52.3711 57.1875 52.483 57.1875 52.6211Z" fill="#AC76FF"/>
              <path d="M64.5 50.7461C64.5 50.8842 64.3881 50.9961 64.25 50.9961C64.1119 50.9961 64 50.8842 64 50.7461C64 50.608 64.1119 50.4961 64.25 50.4961C64.3881 50.4961 64.5 50.608 64.5 50.7461Z" fill="#AC76FF"/>
              <path d="M53.6875 65.9961C53.6875 66.1342 53.5756 66.2461 53.4375 66.2461C53.2994 66.2461 53.1875 66.1342 53.1875 65.9961C53.1875 65.858 53.2994 65.7461 53.4375 65.7461C53.5756 65.7461 53.6875 65.858 53.6875 65.9961Z" fill="#AC76FF"/>
              <path d="M48.5 58.1836C48.5 58.3217 48.3881 58.4336 48.25 58.4336C48.1119 58.4336 48 58.3217 48 58.1836C48 58.0455 48.1119 57.9336 48.25 57.9336C48.3881 57.9336 48.5 58.0455 48.5 58.1836Z" fill="#AC76FF"/>
              <path d="M45.0625 61.9976C45.0625 62.1356 44.9506 62.2476 44.8125 62.2476C44.6744 62.2476 44.5625 62.1356 44.5625 61.9976C44.5625 61.8595 44.6744 61.7476 44.8125 61.7476C44.9506 61.7476 45.0625 61.8595 45.0625 61.9976Z" fill="#AC76FF"/>
              <path d="M46.4375 63.7476C46.4375 63.8856 46.3256 63.9976 46.1875 63.9976C46.0494 63.9976 45.9375 63.8856 45.9375 63.7476C45.9375 63.6095 46.0494 63.4976 46.1875 63.4976C46.3256 63.4976 46.4375 63.6095 46.4375 63.7476Z" fill="#AC76FF"/>
            </g>
            <defs>
              <linearGradient id="paint0_linear_7717_21266" x1="108.621" y1="42.7247" x2="60.3763" y2="144.688" gradientUnits="userSpaceOnUse">
                <stop offset="0.367698" stopColor="#E7E7E7"/>
                <stop offset="0.713542" stopColor="#C9F5FF"/>
              </linearGradient>
              <radialGradient id="paint1_radial_7717_21266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(58.375 84.8735) rotate(28.7059) scale(5.98566 9.66236)">
                <stop offset="0.322917" stopColor="#6E7B83"/>
                <stop offset="0.713542" stopColor="#9EA8AE"/>
                <stop offset="0.957884" stopColor="#E4E9EA" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="paint2_radial_7717_21266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(72.125 71.1235) rotate(23.8387) scale(5.87633 9.48587)">
                <stop offset="0.322917" stopColor="#6E7B83"/>
                <stop offset="0.713542" stopColor="#9EA8AE"/>
                <stop offset="0.957884" stopColor="#E4E9EA" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="paint3_radial_7717_21266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(86.875 84.8735) rotate(30.9637) scale(5.83095 9.36154)">
                <stop offset="0.332951" stopColor="#6E7B83"/>
                <stop offset="0.708333" stopColor="#9EA8AE"/>
                <stop offset="1" stopColor="#DFEBEE" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="paint4_radial_7717_21266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100.375 49.1235) rotate(35.4171) scale(6.90222 10.502)">
                <stop offset="0.332951" stopColor="#D0D0D0"/>
                <stop offset="0.737958" stopColor="#D0D0D0"/>
                <stop offset="0.931599" stopColor="#E7E7E7" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="paint5_radial_7717_21266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(45.125 56.625) rotate(82.0811) scale(33.5701 34.8628)">
                <stop offset="0.521657" stopColor="#D0D0D0"/>
                <stop offset="0.684443" stopColor="#D4F0F7" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="paint6_radial_7717_21266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(76.875 46) scale(71.6534 12.7735)">
                <stop offset="0.326223" stopColor="#D0D0D0"/>
                <stop offset="0.769329" stopColor="#E8E8E8" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="paint7_radial_7717_21266" cx="0" cy="0" r="1" gradientTransform="matrix(-43.1187 -0.611799 4.8847 -122.369 123.341 70.6118)" gradientUnits="userSpaceOnUse">
                <stop offset="0.173611" stopColor="#D0D0D0"/>
                <stop offset="0.458333" stopColor="#E7E4EC" stopOpacity="0"/>
              </radialGradient>
              <linearGradient id="paint8_linear_7717_21266" x1="109.243" y1="37.9522" x2="94.3743" y2="60.4602" gradientUnits="userSpaceOnUse">
                <stop offset="0.267843" stopColor="#E7E7E7"/>
                <stop offset="0.713542" stopColor="#C9F5FF"/>
              </linearGradient>
              <radialGradient id="paint9_radial_7717_21266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(105.002 40.0017) rotate(25.3777) scale(10.7913 7.59516)">
                <stop offset="0.481353" stopColor="#D0D3D5"/>
                <stop offset="0.769329" stopColor="#E7E7E7" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="paint10_radial_7717_21266" cx="0" cy="0" r="1" gradientTransform="matrix(-41.1134 108.622 -104.718 -14.3086 57.1134 0.315213)" gradientUnits="userSpaceOnUse">
                <stop offset="0.127989" stopColor="#E6D5D0"/>
                <stop offset="0.473293" stopColor="#FCF1E8"/>
              </radialGradient>
              <radialGradient id="paint11_radial_7717_21266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(36.6087 55.2189) rotate(-35.1972) scale(60.9716 68.8416)">
                <stop offset="0.360983" stopColor="#F8E4D6" stopOpacity="0"/>
                <stop offset="0.502277" stopColor="#B9A69A"/>
              </radialGradient>
              <radialGradient id="paint12_radial_7717_21266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(41.875 72.2516) rotate(-90) scale(46.134 15.3172)">
                <stop offset="0.363107" stopColor="#B9A69A"/>
                <stop offset="0.728744" stopColor="#FFF1E4" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="paint13_radial_7717_21266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(42.0652 65.3251) rotate(-45.3951) scale(62.1635 76.6984)">
                <stop offset="0.187649" stopColor="#FFD84E"/>
                <stop offset="0.369792" stopColor="#FE843A"/>
              </radialGradient>
              <radialGradient id="paint14_radial_7717_21266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(54.25 46) rotate(-180) scale(31.3836 13.9483)">
                <stop offset="0.330298" stopColor="#C84B00"/>
                <stop offset="0.607194" stopColor="#FF853B" stopOpacity="0"/>
              </radialGradient>
              <linearGradient id="paint15_linear_7717_21266" x1="66.3109" y1="78.8993" x2="66.2298" y2="86.4045" gradientUnits="userSpaceOnUse">
                <stop offset="0.597549" stopColor="#E2D7CF"/>
                <stop offset="0.739583" stopColor="#D5BFAF"/>
                <stop offset="0.832491" stopColor="#B89F8C"/>
                <stop offset="0.933497" stopColor="#CEBCAF"/>
                <stop offset="1" stopColor="#E2D7CF"/>
              </linearGradient>
              <linearGradient id="paint16_linear_7717_21266" x1="103.34" y1="75.521" x2="103.28" y2="83.5857" gradientUnits="userSpaceOnUse">
                <stop offset="0.597549" stopColor="#E2D7CF"/>
                <stop offset="0.739583" stopColor="#D5BFAF"/>
                <stop offset="0.832491" stopColor="#B89F8C"/>
                <stop offset="0.933497" stopColor="#CEBCAF"/>
                <stop offset="1" stopColor="#E2D7CF"/>
              </linearGradient>
              <linearGradient id="paint17_linear_7717_21266" x1="9.88898" y1="-3.81946" x2="9.8079" y2="3.6857" gradientUnits="userSpaceOnUse">
                <stop offset="0.597549" stopColor="#E2D7CF"/>
                <stop offset="0.739583" stopColor="#D5BFAF"/>
                <stop offset="0.832491" stopColor="#B89F8C"/>
                <stop offset="0.933497" stopColor="#CEBCAF"/>
                <stop offset="1" stopColor="#E2D7CF"/>
              </linearGradient>
              <radialGradient id="paint18_radial_7717_21266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60.6492 78.9026) rotate(108.435) scale(9.65159)">
                <stop stopColor="#F1FFB7"/>
                <stop offset="0.25" stopColor="#B9DC4E"/>
                <stop offset="0.645065" stopColor="#6FB12F"/>
                <stop offset="1" stopColor="#3E6419"/>
              </radialGradient>
              <radialGradient id="paint19_radial_7717_21266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(59.4752 86.5586) rotate(-90) scale(3.80172 7.51293)">
                <stop stopColor="#3E6419"/>
                <stop offset="1" stopColor="#3E6419" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="paint20_radial_7717_21266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(59.6562 81.3086) rotate(97.8153) scale(9.31932)">
                <stop offset="0.446038" stopColor="white" stopOpacity="0"/>
                <stop offset="0.841379" stopColor="white"/>
              </radialGradient>
              <radialGradient id="paint21_radial_7717_21266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(74.407 65.4026) rotate(108.435) scale(9.65159)">
                <stop stopColor="#BCF2FF"/>
                <stop offset="0.25" stopColor="#4ECBFF"/>
                <stop offset="0.645065" stopColor="#0083F5"/>
                <stop offset="1" stopColor="#C955FF"/>
              </radialGradient>
              <radialGradient id="paint22_radial_7717_21266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(73.233 73.0586) rotate(-90) scale(3.80172 7.51293)">
                <stop stopColor="#DEB3FF"/>
                <stop offset="1" stopColor="#CC99FF" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="paint23_radial_7717_21266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(73.4141 67.8086) rotate(97.8153) scale(9.31932)">
                <stop offset="0.446038" stopColor="white" stopOpacity="0"/>
                <stop offset="0.841379" stopColor="white"/>
              </radialGradient>
              <radialGradient id="paint24_radial_7717_21266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(90.0711 78.8753) rotate(108.435) scale(9.65159)">
                <stop offset="0.0677083" stopColor="#FFE39A"/>
                <stop offset="0.25" stopColor="#FFB900"/>
                <stop offset="0.645065" stopColor="#E68400"/>
                <stop offset="1" stopColor="#FFB900"/>
              </radialGradient>
              <radialGradient id="paint25_radial_7717_21266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(89.0781 81.2813) rotate(97.8153) scale(9.31932)">
                <stop offset="0.446038" stopColor="white" stopOpacity="0"/>
                <stop offset="0.841379" stopColor="white"/>
              </radialGradient>
              <radialGradient id="paint26_radial_7717_21266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(104.352 43.5818) rotate(120.689) scale(12.6684)">
                <stop offset="0.103226" stopColor="#F4A0C3"/>
                <stop offset="0.322917" stopColor="#F481B1"/>
                <stop offset="0.510417" stopColor="#F272A7"/>
                <stop offset="0.78125" stopColor="#EB70A3"/>
              </radialGradient>
              <radialGradient id="paint27_radial_7717_21266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(104.44 42.6075) rotate(104.486) scale(9.91405)">
                <stop stopColor="#FFBCD8"/>
                <stop offset="0.806053" stopColor="#FFBCD8" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="paint28_radial_7717_21266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(103.349 45.5025) rotate(97.8153) scale(11.8995)">
                <stop offset="0.446038" stopColor="white" stopOpacity="0"/>
                <stop offset="0.841379" stopColor="white"/>
              </radialGradient>
              <radialGradient id="paint29_radial_7717_21266" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(103.118 52.206) rotate(-90) scale(4.85428 9.59298)">
                <stop stopColor="#FFB3BB"/>
                <stop offset="1" stopColor="#FE625D" stopOpacity="0"/>
              </radialGradient>
              <clipPath id="clip0_7717_21266">
                <rect width="128" height="128" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="recommendations-section">
          <h3>Recommendations</h3>
          
          <div className="recommendation-cards">
            <div className="recommendation-card">
              <div className="recommendation-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#0078D4" opacity="0.1"/>
                  <path d="M10 16L14 20L22 12" stroke="#0078D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4>Set up an Azure subscription</h4>
              <p>
                Enable pay-as-you-go billing to track usage and create policies for non-Microsoft 365 data sources.{' '}
                <Link href="#">Learn about pay-as-you-go billing</Link>
              </p>
              <PrimaryButton>Get started</PrimaryButton>
            </div>

            <div className="recommendation-card">
              <div className="recommendation-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#0078D4" opacity="0.1"/>
                  <rect x="10" y="10" width="12" height="12" rx="2" stroke="#0078D4" strokeWidth="2"/>
                </svg>
              </div>
              <h4>Create Insider Risk Management policies</h4>
              <p>
                Set up data leak or data theft policies to monitor and protect against exfiltration activities across all your data sources.
              </p>
              <DefaultButton>Learn more</DefaultButton>
            </div>
          </div>
        </div>
      </div>

      {showPanel && <PaygInsightsPanel onClose={() => setShowPanel(false)} />}
    </main>
  )
}

export default PaygUsageReport
