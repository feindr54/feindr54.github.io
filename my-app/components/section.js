export default function Section({title, children}) {
  return (
    <section className="my-4 w-9/12 text-left">
      <h3 className="mb-2 underline underline-offset-4">{title}</h3>
      {children}
    </section>
  )
}