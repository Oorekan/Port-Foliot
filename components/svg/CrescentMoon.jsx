'use client'

export default function CrescentMoon({ id, gradientColor1, gradientColor2, stopColor }) {
    return (
        <svg id={`${id}`} width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath={`url(#clip0_${id})`}>
                <path d="M110.24 101.185C87.8958 100.821 69.7178 82.3469 69.7178 60C69.7178 37.6531 87.8968 19.1785 110.241 18.8157C110.618 18.8109 110.956 18.5779 111.096 18.2263C111.236 17.8748 111.153 17.4741 110.882 17.2097C99.5894 6.11208 84.6565 0 68.8367 0C35.7522 0 8.83667 26.9155 8.83667 60C8.83667 93.0854 35.7522 120 68.8367 120C84.6565 120 99.5894 113.888 110.882 102.789C111.152 102.525 111.236 102.124 111.096 101.774C110.955 101.422 110.618 101.19 110.24 101.185Z" fill={`url(#paint0_linear_${id})`} />
            </g>
            <defs>
                <linearGradient id={`paint0_linear_${id}`} x1="59.9999" y1="120" x2="59.9999" y2="0" gradientUnits="userSpaceOnUse">
                    <stop id={`gradientStop1_${stopColor}`} stopColor={gradientColor1} />
                    <stop id={`gradientStop2_${stopColor}`} offset="1" stopColor={gradientColor2} />
                </linearGradient>
                <clipPath id={`clip0_${id}`}>
                    <rect width="120" height="120" fill="white" />
                </clipPath>
            </defs>
        </svg >
    )
}