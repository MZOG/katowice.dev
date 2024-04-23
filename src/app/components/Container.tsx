
type ContainerProps = {
  type: "section" | "div",
  children: JSX.Element
}

const Container = ({ type, children }: ContainerProps) => {
  if (type === "section") {
    return (
      <section>
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