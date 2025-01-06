import { Rectangle, SVG } from "../.."

const eventCursorSrc = `
<svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<path d="M9.60134 3.13807C11.4913 -0.358677 16.5086 -0.358678 18.3986 3.13807L27.0854 19.21C29.2347 23.1865 25.4233 27.7473 21.1283 26.3384L15.5585 24.5112C14.546 24.1791 13.454 24.1791 12.4415 24.5112L6.87154 26.3384C2.57658 27.7473 -1.23482 23.1865 0.914454 19.2101L9.60134 3.13807Z" fill="url(#pattern0_121_628)"/>
<path d="M17.9587 3.37581L26.6456 19.4478C28.5799 23.0266 25.1496 27.1313 21.2842 25.8633L15.7143 24.0362C14.6006 23.6708 13.3994 23.6708 12.2857 24.0362L6.71569 25.8633C2.85023 27.1313 -0.580036 23.0266 1.35432 19.4478L10.0412 3.37581C11.7422 0.228742 16.2577 0.228741 17.9587 3.37581Z" stroke="white" stroke-opacity="0.61"/>
<defs>
<pattern id="pattern0_121_628" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_121_628" transform="matrix(0.000308358 0 0 0.000333333 -0.116715 0)"/>
</pattern>
</defs>
</svg>

`

type EventCursorProps = Omit<SVGProps, 'src'>
export const EventCursor = ({ onClick, ...rest }: EventCursorProps) => {
    return (
        <SVG src={eventCursorSrc} onClick={onClick} width={64} height={64} {...rest} />
    )
}