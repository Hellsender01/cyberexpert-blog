export type Categories = (typeof categories)[number]

export const categories = [
  {
    name:"Web Exploitation",
    active : true
  },
  {
    name:"Binary Exploitation",
    active : false
  },
  {
    name:"Network Forensics",
    active : false
  },
]


export const updateCategory = (categoryName: string, active: boolean) => {
  const updatedCategories = categories.map((category) => {
    if (category.name === categoryName) {
      return { ...category, active };
    }
    return category;
  })
}