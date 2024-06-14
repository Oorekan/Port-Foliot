'use client'

export default function Line({ id, color, primaryColor }) {
    return (
        <>
            <svg id={`${id}`} width="150" height="8" viewBox="0 0 150 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect id={`primaryColor_${primaryColor}`} width="40" height="2" fill={color} />
            </svg>
        </>
    )
}