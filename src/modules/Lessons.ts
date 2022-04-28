interface ILesson {
  id: number,
  title: string,
  url: string,
  elements:
  {
    title: string,
    p: string,
    id: number,
    pre: string
  }[]
}

export { ILesson };
