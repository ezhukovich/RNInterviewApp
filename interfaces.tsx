export interface IRouterProps {
  [key: string]: any
}

export interface IScreenProps {
  [key:string]: any
}

export interface IApi {
  [key: string]: string
}

export interface IUserItemComponent {
  item: any,
  navigateToDetail: (item: any) => void
}

export interface ISectionHeader {
  title: string
}