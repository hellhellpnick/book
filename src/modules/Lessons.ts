interface ILesson {
  id: number,
  title: string,
  url: string,
  elements:
  {
    title: string,
    p: string,
    id: number,
    pre: string,
    html?: string,
    attributes?: {
      title: string,
      p: string,
      id: number,
    }[],
  }[]
}

export { ILesson };
