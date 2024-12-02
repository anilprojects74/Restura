import { CUSINES } from "../constants"

export const Expertise = () => {
  return (
    <section id="expertise">
      <h2 className="my-8 text-center text-3xl tracking-tighter lg:text-4xl">Our Expertise</h2>
      <div className="container mx-auto px-4">
        {
          CUSINES.map((cusine, index) => (
            <div key={index} className="flex items-center border-b-4 border-dotter border-neutral-700/40 py-2">
              <div className="flex-shrink-0 pr-8 text-2xl">{cusine.number}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
