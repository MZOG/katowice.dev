import Link from "next/link";
import Container from "@/components/container";

const links = [
  {
    id: 1,
    name: "strony internetowe",
    href: "/strony-internetowe"
  },
  {
    id: 2,
    name: "aplikacje webowe",
    href: "/aplikacje-webowe"
  },
  {
    id: 3,
    name: "e-commerce",
    href: "/e-commerce"
  },
  {
    id: 4,
    name: "seo",
    href: "/seo"
  },
  {
    id: 5,
    name: "opieka nad stroną",
    href: "/opieka-nad-strona"
  }
]

export default function Home() {
  return (
    <Container type="section">
      <div className="flex flex-col gap-2 h-screen justify-center">
        {links.map((link) => {
          return (
            <Link key={link.id} href={link.href} className="group text-[100px] font-extrabold z-20 relative transition-all transform hover:translate-x-2 hover:text-blue-300">
              <span className="text-[130px] group-hover:text-gray-50 transition-all text-gray-100 font-extrabold absolute -left-20 -z-10 top-1/2 transform -translate-y-1/2">0{link.id}</span>
              {link.name}
            </Link>
          )
        })}
      </div>
    </Container>
  );
}
