import { SVGProps } from "react"

export function ArrowDown(props: SVGProps<SVGSVGElement>) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8L18 9.4z"></path></svg>
    )
  }
  
  export function ArrowUp(props: SVGProps<SVGSVGElement>) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4z"></path></svg>
    )
  }