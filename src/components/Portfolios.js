import React from "react"

const datas = [
  {
    img: "/cluezzy-all2.png",
    name: "Cluezzy Movie App",
    type: "Web App",
  },
  {
    img: "/cluepay-all2.png",
    name: "Cluepay Finance App",
    type: "Web App",
  },
  {
    img: "/coffe-all2.png",
    name: "Our Coffe App",
    type: "Web App",
  },
  {
    img: "/cluezzy-mobile-all.png",
    name: "Cluezzy Movie Mobile",
    type: "Mobile App",
  },
  {
    img: "/peworld-all.png",
    name: "Peworld Hiring App",
    type: "Web App",
  },
]

const Portfolios = () => {
  return (
    <div className="grid grid-cols-2 gap-8">
      {datas.map((data, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center font-poppins mb-10"
        >
          <img src={data.img} className="mb-2 rounded" />
          <span className="text-white text-2xl font-medium">{data.name}</span>
          <span className="text-[#868490] text-xl">{data.type}</span>
        </div>
      ))}
    </div>
  )
}

export default Portfolios
