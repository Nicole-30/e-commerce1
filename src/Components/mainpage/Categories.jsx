import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "/Images/Category/beverages.gif",
      cateName: "Groceries",
    },
    {
      cateImg: "/Images/Category/baby anim.gif",
      cateName: "Baby Items",
    },
    {
      cateImg: "/Images/Category/soft drinks.gif",
      cateName: "Soft Drinks",
    },
    {
      cateImg: "/Images/Category/alcohol.gif",
      cateName: "Alcohol",
    },
    {
      cateImg: "/Images/Category/toiletaries.gif",
      cateName: "Toiletaries",
    },
   
    {
      cateImg: "/Images/Category/bueaty.gif",
      cateName: "Health & Beauty",
    },
   
    {
      cateImg: "/Images/Category/books.gif",
      cateName: "Books",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
