
type ContainerProps = {
  type?: "section" | "div",
  width?: string,
  children: JSX.Element
}

const Container = ({ type, width, children }: ContainerProps) => {
  if (type === "section") {
    return (
      <section className="px-5 mx-auto max-w-7xl">
        {children}
      </section>
    )
  }

  return (
    <div>
      {children}
    </div>
  )
}

export default Container;