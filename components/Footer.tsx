import Link from "next/link"

const Footer = () => {
  return (
    <footer className="mt-auto">
      <span className="tracking-wider">Made by </span>
      <Link
        href="https://github.com/keyurpatil06"
        className="underline text-purple-400 font-semibold tracking-wide"
        target="_blank"
      >
        Keyur Patil
      </Link>
    </footer>
  )
}

export default Footer
