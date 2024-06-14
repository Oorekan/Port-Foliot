'use client'

export default function Sparkles({ id, gradientColor1, gradientColor2, stopColor }) {
    return (
        <>
            <svg id={`${id}`} width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.5427 8.10764L33.9698 16.1979L41.9906 20.5556C46.4003 22.9514 50.0114 24.9653 50.0288 25.0174C50.0288 25.0868 46.4003 27.1181 41.9733 29.5312L33.9177 33.9236L29.5253 41.9618C27.1121 46.3889 25.0809 50 25.0288 50C24.9767 50 22.9628 46.3889 20.5496 41.9618L16.1399 33.941L8.08437 29.5312C1.78228 26.0764 0.0635338 25.0694 0.237145 24.9132C0.358673 24.7917 3.93506 22.8125 8.18853 20.5035C12.442 18.1944 16.0358 16.1632 16.1746 15.9896C16.3135 15.816 18.3448 12.1528 20.6885 7.84722C23.0323 3.5243 24.9767 -2.38419e-06 25.0288 -2.38419e-06C25.0809 -2.38419e-06 27.1121 3.64583 29.5427 8.10764Z" fill={`url(#paint0_linear_${id})`} />
                <defs>
                    <linearGradient id={`paint0_linear_${id}`} x1="25.1271" y1="0" x2="25.1271" y2="50" gradientUnits="userSpaceOnUse">
                        <stop id={`gradientStop1_${stopColor}`} stopColor={gradientColor1} />
                        <stop id={`gradientStop2_${stopColor}`} offset="1" stopColor={gradientColor2} />
                    </linearGradient>
                </defs>
            </svg>

        </>
    )
}