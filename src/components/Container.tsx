import { cn } from "@/lib/utils"

type ContainerProps = {
  type?: "section" | "div",
  width?: string,
  customClass?: string,
  children: JSX.Element
}

const Container = ({ type, width, customClass, children }: ContainerProps) => {
  if (type === "section") {
    return (
      <section className={cn(width ? width : "max-w-7xl", "px-5 mx-auto", customClass && customClass)}>
        {children}
      </section>
    )
  }

  return (
    <div className={cn(width ? width : "max-w-7xl", "px-5 mx-auto", customClass && customClass)}>
      {children}
    </div>
  )
}

export default Container;